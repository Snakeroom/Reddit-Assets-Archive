// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.434d04a6145e76dcd61f.js
// Retrieved at 10/13/2021, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-ChangePredictionOutcomeModal"], {
		"./node_modules/uuid/index.js": function(t, e, n) {
			var o = n("./node_modules/uuid/v1.js"),
				r = n("./node_modules/uuid/v4.js"),
				i = r;
			i.v1 = o, i.v4 = r, t.exports = i
		},
		"./node_modules/uuid/v1.js": function(t, e, n) {
			var o, r, i = n("./node_modules/uuid/lib/rng-browser.js"),
				d = n("./node_modules/uuid/lib/bytesToUuid.js"),
				c = 0,
				s = 0;
			t.exports = function(t, e, n) {
				var a = e && n || 0,
					u = e || [],
					l = (t = t || {}).node || o,
					p = void 0 !== t.clockseq ? t.clockseq : r;
				if (null == l || null == p) {
					var b = i();
					null == l && (l = o = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = r = 16383 & (b[6] << 8 | b[7]))
				}
				var f = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
					m = void 0 !== t.nsecs ? t.nsecs : s + 1,
					O = f - c + (m - s) / 1e4;
				if (O < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (O < 0 || f > c) && void 0 === t.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = f, s = m, r = p;
				var j = (1e4 * (268435455 & (f += 122192928e5)) + m) % 4294967296;
				u[a++] = j >>> 24 & 255, u[a++] = j >>> 16 & 255, u[a++] = j >>> 8 & 255, u[a++] = 255 & j;
				var h = f / 4294967296 * 1e4 & 268435455;
				u[a++] = h >>> 8 & 255, u[a++] = 255 & h, u[a++] = h >>> 24 & 15 | 16, u[a++] = h >>> 16 & 255, u[a++] = p >>> 8 | 128, u[a++] = 255 & p;
				for (var v = 0; v < 6; ++v) u[a + v] = l[v];
				return e || d(u)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return k
			})), n.d(e, "k", (function() {
				return _
			})), n.d(e, "o", (function() {
				return N
			})), n.d(e, "n", (function() {
				return L
			})), n.d(e, "l", (function() {
				return D
			})), n.d(e, "b", (function() {
				return Q
			})), n.d(e, "r", (function() {
				return q
			})), n.d(e, "s", (function() {
				return A
			})), n.d(e, "g", (function() {
				return M
			})), n.d(e, "a", (function() {
				return F
			})), n.d(e, "t", (function() {
				return J
			})), n.d(e, "m", (function() {
				return U
			})), n.d(e, "i", (function() {
				return B
			})), n.d(e, "j", (function() {
				return z
			})), n.d(e, "p", (function() {
				return H
			})), n.d(e, "q", (function() {
				return K
			})), n.d(e, "f", (function() {
				return V
			})), n.d(e, "c", (function() {
				return W
			})), n.d(e, "d", (function() {
				return Y
			})), n.d(e, "h", (function() {
				return X
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/endpoints/economics/predictions.ts"),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				b = n("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				f = n("./src/redditGQL/types.ts"),
				m = n("./src/reddit/actions/login.ts"),
				O = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				w = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				P = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const g = Object(u.a)(P.e),
				E = Object(u.a)(P.i),
				x = Object(u.a)(P.l),
				y = Object(u.a)(P.h),
				k = Object(u.a)(P.b),
				_ = (t, e, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(I.K)(i()),
						s = await Object(l.j)(d(), {
							subredditId: t,
							period: e,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (s.error || !s.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: a
					} = s.body.data;
					if (!a || !a.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = a, p = {
						subredditId: t,
						...u
					};
					return r(g(p)), p
				}, N = ({
					coinPackageId: t,
					optionId: e,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(l.o)(d(), {
						coinPackageId: t,
						optionId: e,
						postId: n,
						price: o
					});
					return r(E({
						pollId: n,
						prediction: c,
						price: o
					})), c
				}, L = ({
					optionId: t,
					postId: e
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.m)(r(), {
							optionId: t,
							postId: e
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(y({
						pollId: e,
						prediction: d.poll
					})), d.poll
				}, G = Object(u.a)(P.c), T = Object(u.a)(P.d), S = Object(u.a)(P.g), D = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(v.B)(r, t),
						d = Object(w.j)(r, {
							subredditId: i
						}),
						c = Object(h.m)(r);
					if (d) return Object(w.f)(r, {
						subredditId: i
					});
					e(G({
						subredditId: i
					}));
					const s = await Object(l.k)(o(), {
							subredditName: t,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: c
						}),
						a = {};
					s.forEach(t => {
						var e;
						(null === (e = t.predictionPosts) || void 0 === e ? void 0 : e.length) && t.predictionPosts.forEach(t => {
							t && (a[t.id] = Object(p.e)(t))
						})
					});
					const u = s.map(t => Object(b.a)(t));
					return e(T({
						subredditId: i,
						tournaments: u
					})), e(S({
						posts: a,
						meta: r.meta
					})), u
				}, Q = Object(u.a)(P.a), q = Object(u.a)(P.j), A = Object(u.a)(P.k), M = ({
					subredditId: t
				}) => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(C.b)(r),
						d = Object(h.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(l.f)(o(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: t,
							predictionDrafts: i,
							currency: d ? f.g.Coins : f.g.Tokens
						}),
						{
							createPredictionTournament: s
						} = c.body.data;
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: a
					} = s;
					return e(T({
						subredditId: t,
						tournaments: [a]
					})), a
				}, F = (t, e) => async (n, o, {
					gqlContext: r
				}) => {
					var d;
					const c = Object(C.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const s = await Object(l.b)(r(), {
							tournamentId: t,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: e,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: a
						} = s.body.data;
					if (null === (d = a.errors) || void 0 === d ? void 0 : d.length) throw new Error(a.errors[0].message);
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to create prediction");
					return a.tournament
				}, R = Object(u.a)(P.m), J = (t, e, n) => async (e, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.n)(r(), {
							tournamentId: t,
							name: n
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return e(R(d.tournament)), d.tournament
				}, U = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.g)(o(), {
							tournamentId: t
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return e(R(i.tournament)), i.tournament
				}, B = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.h)(o(), {
						postId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, z = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(l.i)(o(), {
						tournamentId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, H = ({
					coinPackageId: t,
					selectedOptionId: e,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async d => {
					const c = await d(N({
						coinPackageId: t,
						optionId: e,
						postId: o,
						price: n
					}));
					return d(x({
						predictionId: o,
						selectedOptionId: e,
						tournamentId: r,
						tournamentPostId: i
					})), c
				}, K = t => async (e, n) => {
					const o = n();
					Object(I.K)(o) ? await e(Object(O.h)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: t
					})) : await e(Object(m.i)())
				}, V = () => Object(O.g)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL), W = t => async (e, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(l.c)(r(), {
							postId: t
						});
						e(k({
							postId: t,
							prediction: n
						}));
						const i = Object(s.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), a.b.SuccessMod);
						e(Object(s.f)(i))
					} catch {
						const t = Object(s.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), a.b.Error);
						e(Object(s.f)(t))
					}
				};

			function Y(t, e) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(l.d)(r(), {
						postId: t,
						...e
					});
					return n(k({
						postId: t,
						prediction: i
					})), i
				}
			}
			const X = t => async (e, n, {
				gqlContext: o
			}) => Object(l.l)(o(), {
				subredditId: t
			})
		},
		"./src/reddit/actions/economics/predictions/modTools.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "b", (function() {
				return p
			})), n.d(e, "e", (function() {
				return b
			})), n.d(e, "c", (function() {
				return f
			})), n.d(e, "d", (function() {
				return m
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/reducers/features/predictions/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: i.a
				}
			});
			const l = ({
				postId: t,
				closedAt: e
			}) => async n => {
				try {
					await n(Object(r.d)(t, {
						closedAt: e
					})), n(Object(c.f)({
						duration: c.a,
						kind: a.b.SuccessCommunity,
						text: u._("Updated", null, {
							hk: "4cncaA"
						})
					}))
				} catch {
					(t => t(Object(c.f)({
						duration: c.a,
						kind: a.b.Error,
						text: u._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function p(t, e) {
				return async n => {
					try {
						await n(Object(r.d)(t, {
							resolvedOptionId: e
						}));
						const o = Object(c.e)(u._("Outcome changed", null, {
							hk: "Io0na"
						}), a.b.SuccessMod);
						n(Object(c.f)(o))
					} catch {
						const t = Object(c.e)(u._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), a.b.Error);
						n(Object(c.f)(t))
					}
				}
			}
			const b = t => Object(d.h)(s.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: t
				}),
				f = t => Object(d.h)(s.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: t
				}),
				m = t => Object(d.h)(s.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: t
				})
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less": function(t, e, n) {
			t.exports = {
				modal: "_298GNh_sLEmzNYJ3t1RvIq",
				description: "_3K-NBGXivq3eml8zw8fN07",
				descriptionWarning: "VX_un2JOF1BclG9Tcy9mv",
				predictionOption: "_2jG01luCzl7DDpxnXGAla1",
				selected: "txyDejSARtibcJi7iuleG",
				icon: "_390v-l0c8w2flS569053jB"
			}
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "PredictionChangeModal", (function() {
				return w
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/controls/TextButton/index.tsx"),
				f = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				O = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				j = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less"),
				I = n.n(v);
			const C = Object(s.a)(({
					options: t,
					resolvedOptionId: e,
					onChangeOutcome: n,
					onClose: c
				}) => {
					const [s, a] = Object(i.useState)(null);
					return d.a.createElement(l.e, {
						className: I.a.modal
					}, d.a.createElement(l.i, null, d.a.createElement(j.a, null, d.a.createElement(l.q, null, o.fbt._("Change the outcome", null, {
						hk: "2KHNhY"
					})), d.a.createElement(b.a, {
						onClick: c
					}, d.a.createElement(l.b, null)))), d.a.createElement(l.l, null, d.a.createElement("p", {
						className: I.a.description
					}, o.fbt._("Once you change the outcome of this prediction, tokens will be redistributed and we'll notify all the players.", null, {
						hk: "2H4TgG"
					}), d.a.createElement("span", {
						className: I.a.descriptionWarning
					}, o.fbt._("You can only change the outcome once.", null, {
						hk: "2Bta7x"
					}))), t.map(t => d.a.createElement("button", {
						key: t.id,
						type: "button",
						className: Object(r.a)(I.a.predictionOption, {
							[I.a.selected]: t.id === (null == s ? void 0 : s.id)
						}),
						disabled: t.id === e,
						onClick: () => a(t)
					}, s && t.id === s.id && d.a.createElement(O.a, {
						className: I.a.icon
					}), !s && t.id === e && d.a.createElement(O.a, {
						className: I.a.icon
					}), d.a.createElement("span", {
						className: I.a.predictionOptionLabel
					}, t.text)))), d.a.createElement(l.g, null, d.a.createElement(l.a, {
						onClick: c,
						"data-redditstyle": !0
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(l.c, {
						disabled: !s,
						onClick: () => {
							s && n(s)
						}
					}, o.fbt._("Confirm", null, {
						hk: "EG1jI"
					}))))
				}),
				w = () => {
					var t, e;
					const n = Object(c.d)(),
						o = Object(m.a)(),
						r = Object(c.e)(h.R),
						i = () => n(Object(u.g)(p.a.ECON_PREDICTIONS_CHANGE_OUTCOME));
					return d.a.createElement(C, {
						withOverlay: !0,
						onOverlayClick: i,
						onClose: i,
						onChangeOutcome: t => {
							r && (n(Object(a.b)(r.id, t.id)), o(Object(f.e)(r.id)), i())
						},
						options: (null === (t = null == r ? void 0 : r.pollData) || void 0 === t ? void 0 : t.options) || [],
						resolvedOptionId: (null === (e = null == r ? void 0 : r.pollData) || void 0 === e ? void 0 : e.resolvedOptionId) || ""
					})
				};
			e.default = w
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "o", (function() {
				return v
			})), n.d(e, "m", (function() {
				return I
			})), n.d(e, "a", (function() {
				return C
			})), n.d(e, "j", (function() {
				return w
			})), n.d(e, "f", (function() {
				return P
			})), n.d(e, "k", (function() {
				return g
			})), n.d(e, "b", (function() {
				return E
			})), n.d(e, "n", (function() {
				return x
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "h", (function() {
				return k
			})), n.d(e, "i", (function() {
				return _
			})), n.d(e, "d", (function() {
				return N
			})), n.d(e, "c", (function() {
				return L
			})), n.d(e, "e", (function() {
				return G
			})), n.d(e, "l", (function() {
				return T
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = n("./src/redditGQL/operations/CancelPrediction.json"),
				c = n("./src/redditGQL/operations/ChangePrediction.json"),
				s = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				a = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				b = n("./src/redditGQL/operations/GetPredictionToken.json"),
				f = n("./src/redditGQL/operations/GetTournaments.json"),
				m = n("./src/redditGQL/operations/ResolvePrediction.json"),
				O = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				h = n("./src/redditGQL/operations/VotePrediction.json");
			const v = async (t, {
				postId: e,
				optionId: n,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const s = await Object(o.a)(t, {
					...h,
					variables: {
						input: {
							postId: e,
							optionId: n,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(r.c)(s) || s.error || !(null === (c = s.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return s.body.data.votePrediction.poll
			}, I = (t, {
				postId: e,
				optionId: n
			}) => Object(o.a)(t, {
				...m,
				variables: {
					input: {
						postId: e,
						optionId: n
					}
				}
			});
			var C;
			! function(t) {
				t.AllTime = "ALL_TIME", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const w = (t, {
					subredditId: e,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(t, {
					...O,
					variables: {
						subredditId: e,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				P = (t, e) => Object(o.a)(t, {
					...a,
					variables: {
						input: e
					}
				}),
				g = async (t, e) => {
					const n = await Object(o.a)(t, {
						...f,
						variables: e
					});
					if (!Object(r.c)(n) || n.error) throw new Error("Failed to fetch tournaments");
					return n.body.data.subredditInfoByName.predictionTournaments || []
				}, E = (t, e) => Object(o.a)(t, {
					...i,
					variables: {
						input: e
					}
				}), x = (t, e) => Object(o.a)(t, {
					...j,
					variables: {
						input: e
					}
				}), y = (t, e) => Object(o.a)(t, {
					...u,
					variables: {
						input: e
					}
				}), k = (t, e) => Object(o.a)(t, {
					...l,
					variables: e
				}), _ = (t, e) => Object(o.a)(t, {
					...b,
					variables: e
				}), N = async (t, e) => {
					const n = await Object(o.a)(t, {
						...c,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return n.body.data.changePrediction.poll
				}, L = async (t, {
					postId: e
				}) => {
					var n, i;
					const c = await Object(o.a)(t, {
						...d,
						variables: {
							input: {
								postId: e
							}
						}
					});
					if (!Object(r.c)(c) || !(null === (n = c.body.data.cancelPrediction) || void 0 === n ? void 0 : n.ok) || !(null === (i = c.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return c.body.data.cancelPrediction.poll
				}, G = async (t, e) => {
					var n, i;
					const d = await Object(o.a)(t, {
						...s,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(d) || !(null === (n = d.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}, T = async (t, e) => {
					const n = await Object(o.a)(t, {
						...p,
						variables: e
					});
					return !!Object(r.c)(n) && n.body.data.identity.isPredictionCreationAllowed
				}
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return i
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "a", (function() {
				return c
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return a
			})), n.d(e, "e", (function() {
				return u
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const r = (t, e) => ({
					...Object(o.defaults)(t),
					post: Object(o.post)(t, e),
					predictions: Object(o.predictions)(t, e),
					subreddit: Object(o.subreddit)(t)
				}),
				i = t => e => ({
					...r(e, t),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				d = t => e => ({
					...r(e, t),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				c = t => e => ({
					...r(e, t),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				s = t => e => ({
					...r(e, t),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				a = t => e => ({
					...r(e, t),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				u = t => e => ({
					...r(e, t),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return d
			})), n.d(e, "a", (function() {
				return c
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			Object(o.a)({
				features: {
					predictions: r.a
				}
			});
			const d = t => {
					const e = (t => {
						var e, n;
						return null === (n = null === (e = t.features) || void 0 === e ? void 0 : e.predictions) || void 0 === n ? void 0 : n.creation
					})(t);
					return (null == e ? void 0 : e.length) ? null == e ? void 0 : e.map(e => {
						const n = Object(i.cb)({
								...t,
								creations: {
									...t.creations,
									formData: e.formData,
									formState: e.formState
								}
							}, {}),
							o = e.formData.polls,
							r = o.options.map(t => ({
								text: t.text
							})),
							d = {};
						return n.document ? d.richText = JSON.stringify({
							document: n.document
						}) : n.markdown && (d.markdown = n.markdown), {
							title: n.title,
							isLiveChat: n.isChatPost,
							isNsfw: n.isNSFW,
							isSpoiler: n.isSpoiler,
							votingEndsAt: o.endDate.toISOString(),
							body: d,
							options: r
						}
					}) : []
				},
				c = t => {
					var e, n;
					return !!(null === (n = null === (e = t.features) || void 0 === e ? void 0 : e.predictions) || void 0 === n ? void 0 : n.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(t) {
			t.exports = JSON.parse('{"id":"55e2b71b7c14"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(t) {
			t.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"3fb10f0c4910"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"309c4e7f3e89"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(t) {
			t.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(t) {
			t.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(t) {
			t.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(t) {
			t.exports = JSON.parse('{"id":"50d44a50f01c"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(t) {
			t.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"eacbeec256c7"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.434d04a6145e76dcd61f.js.map