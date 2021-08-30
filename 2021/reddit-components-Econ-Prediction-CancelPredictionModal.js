// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.964d0f489dca50e5bac9.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-CancelPredictionModal"], {
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
				a = 0;
			t.exports = function(t, e, n) {
				var s = e && n || 0,
					l = e || [],
					u = (t = t || {}).node || o,
					p = void 0 !== t.clockseq ? t.clockseq : r;
				if (null == u || null == p) {
					var b = i();
					null == u && (u = o = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = r = 16383 & (b[6] << 8 | b[7]))
				}
				var f = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
					m = void 0 !== t.nsecs ? t.nsecs : a + 1,
					j = f - c + (m - a) / 1e4;
				if (j < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (j < 0 || f > c) && void 0 === t.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = f, a = m, r = p;
				var O = (1e4 * (268435455 & (f += 122192928e5)) + m) % 4294967296;
				l[s++] = O >>> 24 & 255, l[s++] = O >>> 16 & 255, l[s++] = O >>> 8 & 255, l[s++] = 255 & O;
				var h = f / 4294967296 * 1e4 & 268435455;
				l[s++] = h >>> 8 & 255, l[s++] = 255 & h, l[s++] = h >>> 24 & 15 | 16, l[s++] = h >>> 16 & 255, l[s++] = p >>> 8 | 128, l[s++] = 255 & p;
				for (var v = 0; v < 6; ++v) l[s + v] = u[v];
				return e || d(l)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return E
			})), n.d(e, "j", (function() {
				return _
			})), n.d(e, "n", (function() {
				return L
			})), n.d(e, "m", (function() {
				return T
			})), n.d(e, "k", (function() {
				return D
			})), n.d(e, "b", (function() {
				return M
			})), n.d(e, "q", (function() {
				return Q
			})), n.d(e, "r", (function() {
				return q
			})), n.d(e, "g", (function() {
				return F
			})), n.d(e, "a", (function() {
				return A
			})), n.d(e, "s", (function() {
				return R
			})), n.d(e, "l", (function() {
				return J
			})), n.d(e, "h", (function() {
				return B
			})), n.d(e, "i", (function() {
				return V
			})), n.d(e, "o", (function() {
				return K
			})), n.d(e, "p", (function() {
				return W
			})), n.d(e, "f", (function() {
				return z
			})), n.d(e, "c", (function() {
				return H
			})), n.d(e, "d", (function() {
				return Y
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/predictions/index.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				j = n("./src/reddit/constants/modals.ts"),
				O = n("./src/reddit/models/Prediction/index.ts"),
				h = n("./src/reddit/selectors/experiments/econ/index.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				I = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				w = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const P = Object(l.a)(w.e),
				g = Object(l.a)(w.i),
				y = Object(l.a)(w.l),
				k = Object(l.a)(w.h),
				E = Object(l.a)(w.b),
				_ = (t, e, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(x.K)(i()),
						a = await Object(p.j)(d(), {
							subredditId: t,
							period: e,
							top: n,
							includeCurrentRank: c,
							tournamentId: o
						});
					if (a.error || !a.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: s
					} = a.body.data;
					if (!s || !s.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = s, u = {
						subredditId: t,
						...l
					};
					return r(P(u)), u
				}, L = ({
					coinPackageId: t,
					optionId: e,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(p.n)(d(), {
						coinPackageId: t,
						optionId: e,
						postId: n,
						price: o
					});
					return r(g({
						pollId: n,
						prediction: c,
						price: o
					})), c
				}, T = ({
					optionId: t,
					postId: e
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.l)(r(), {
							optionId: t,
							postId: e
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(k({
						pollId: e,
						prediction: d.poll
					})), d.poll
				}, S = Object(l.a)(w.c), G = Object(l.a)(w.d), N = Object(l.a)(w.g), D = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(v.E)(r, t),
						d = Object(I.j)(r, {
							subredditId: i
						}),
						c = Object(h.l)(r);
					if (d) return Object(I.f)(r, {
						subredditId: i
					});
					e(S({
						subredditId: i
					}));
					const a = await Object(p.k)(o(), {
						subredditName: t,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: c
					});
					if (!Object(u.c)(a) || a.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: s
					} = a.body.data.subredditInfoByName;
					if (!s) return [];
					const l = s.map(t => {
							var e, n;
							const o = null !== (n = null === (e = t.predictionPosts) || void 0 === e ? void 0 : e.map(t => {
								const e = Object(b.e)(t),
									n = e.pollData;
								return {
									...e,
									pollData: n
								}
							})) && void 0 !== n ? n : [];
							return {
								...t,
								predictionPosts: o
							}
						}),
						f = l.reduce((t, e) => (e.predictionPosts.length && e.predictionPosts.forEach(e => {
							t[e.id] = e
						}), t), {});
					return e(G({
						subredditId: i,
						tournaments: l
					})), e(N({
						posts: f,
						meta: r.meta
					})), l
				}, M = Object(l.a)(w.a), Q = Object(l.a)(w.j), q = Object(l.a)(w.k), F = ({
					subredditId: t
				}) => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(C.b)(r),
						d = Object(h.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(p.f)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: t,
							predictionDrafts: i,
							currency: d ? O.a.Coins : O.a.Tokens
						}),
						{
							createPredictionTournament: a
						} = c.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: s
					} = a;
					return e(G({
						subredditId: t,
						tournaments: [s]
					})), s
				}, A = (t, e) => async (n, o, {
					gqlContext: r
				}) => {
					var d;
					const c = Object(C.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(p.b)(r(), {
							tournamentId: t,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: e,
							predictionDrafts: c
						}),
						{
							addPredictionDrafts: s
						} = a.body.data;
					if (null === (d = s.errors) || void 0 === d ? void 0 : d.length) throw new Error(s.errors[0].message);
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to create prediction");
					return s.tournament
				}, U = Object(l.a)(w.m), R = (t, e, n) => async (e, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.m)(r(), {
							tournamentId: t,
							name: n
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return e(U(d.tournament)), d.tournament
				}, J = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.g)(o(), {
							tournamentId: t
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return e(U(i.tournament)), i.tournament
				}, B = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.h)(o(), {
						postId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, V = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.i)(o(), {
						tournamentId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, K = ({
					coinPackageId: t,
					selectedOptionId: e,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async d => {
					const c = await d(L({
						coinPackageId: t,
						optionId: e,
						postId: o,
						price: n
					}));
					return d(y({
						predictionId: o,
						selectedOptionId: e,
						tournamentId: r,
						tournamentPostId: i
					})), c
				}, W = t => async (e, n) => {
					const o = n();
					Object(x.K)(o) ? await e(Object(m.h)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: t
					})) : await e(Object(f.i)())
				}, z = () => Object(m.g)(j.a.ECON_PREDICTIONS_PREMIUM_UPSELL), H = t => async (e, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(p.c)(r(), {
							postId: t
						});
						e(E({
							postId: t,
							prediction: n
						}));
						const i = Object(a.e)(o.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), s.b.SuccessMod);
						e(Object(a.f)(i))
					} catch {
						const t = Object(a.e)(o.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), s.b.Error);
						e(Object(a.f)(t))
					}
				};

			function Y(t, e) {
				return async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.d)(r(), {
						postId: t,
						...e
					});
					return n(E({
						postId: t,
						prediction: i
					})), i
				}
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(t, e, n) {
			t.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(t, e, n) {
			"use strict";
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const p = t => t.preventDefault();
			e.a = Object(d.a)(t => i.a.createElement(c.e, null, i.a.createElement(c.i, null, i.a.createElement(s.a, null, i.a.createElement(c.q, null, t.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(a.a, {
				onClick: () => {
					t.onClose && t.onClose(), t.toggleModal && t.toggleModal()
				}
			}, i.a.createElement(c.b, null)))), i.a.createElement(c.l, null, i.a.createElement(c.p, {
				className: u.a.ModalText
			}, t.modalText)), i.a.createElement(c.g, null, !t.hideCancelButton && i.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					t.onCancel && t.onCancel(), t.toggleModal && t.toggleModal()
				},
				"data-redditstyle": !t.disableRedditStyle
			}, t.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: e => {
					t.onConfirm(), t.toggleModal && t.toggleModal(), t.trackClick && t.trackClick()
				},
				"data-redditstyle": !t.disableRedditStyle,
				disabled: t.isDisabled
			}, t.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "CancelPredictionModal", (function() {
				return p
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/selectors/posts.ts");
			const p = () => {
				const t = Object(d.d)(),
					e = Object(d.e)(u.S);
				if (!e) return null;
				const {
					totalVoteCount: n
				} = e.pollData || {}, r = () => t(Object(a.g)(l.a.ECON_PREDICTIONS_CANCEL_PREDICTION));
				return i.a.createElement(s.a, {
					withOverlay: !0,
					onConfirm: () => {
						r(), t(Object(c.c)(e.postId))
					},
					onCancel: r,
					onClose: r,
					onOverlayClick: r,
					actionText: o.fbt._("Cancel", null, {
						hk: "8njD0"
					}),
					cancelActionText: o.fbt._("Go Back", null, {
						hk: "vSpeS"
					}),
					headerText: o.fbt._("Are you sure?", null, {
						hk: "3Namy5"
					}),
					modalText: b(n || 0)
				})
			};

			function b(t) {
				return 0 === t ? o.fbt._("Canceling this prediction will end any predictions that have already been made and notify the players.", null, {
					hk: "2uuOFq"
				}) : 1 === t ? o.fbt._("Canceling this prediction will end the 1 prediction that has already been made and notify the player.", null, {
					hk: "4wD7xX"
				}) : o.fbt._("Canceling this prediction will end the {votedUsersCount} predictions that have already been made and notify the players.", [o.fbt._param("votedUsersCount", t.toString())], {
					hk: "2TTB5g"
				})
			}
			e.default = p
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "n", (function() {
				return h
			})), n.d(e, "l", (function() {
				return v
			})), n.d(e, "a", (function() {
				return x
			})), n.d(e, "j", (function() {
				return C
			})), n.d(e, "f", (function() {
				return I
			})), n.d(e, "k", (function() {
				return w
			})), n.d(e, "b", (function() {
				return P
			})), n.d(e, "m", (function() {
				return g
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "h", (function() {
				return k
			})), n.d(e, "i", (function() {
				return E
			})), n.d(e, "d", (function() {
				return _
			})), n.d(e, "c", (function() {
				return L
			})), n.d(e, "e", (function() {
				return T
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = n("./src/redditGQL/operations/CancelPrediction.json"),
				c = n("./src/redditGQL/operations/ChangePrediction.json"),
				a = n("./src/redditGQL/operations/ChangePredictionVote.json"),
				s = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				l = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				u = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				p = n("./src/redditGQL/operations/GetPredictionToken.json"),
				b = n("./src/redditGQL/operations/GetTournaments.json"),
				f = n("./src/redditGQL/operations/ResolvePrediction.json"),
				m = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				O = n("./src/redditGQL/operations/VotePrediction.json");
			const h = async (t, {
				postId: e,
				optionId: n,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const a = await Object(o.a)(t, {
					...O,
					variables: {
						input: {
							postId: e,
							optionId: n,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(r.c)(a) || a.error || !(null === (c = a.body.data.votePrediction) || void 0 === c ? void 0 : c.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, v = (t, {
				postId: e,
				optionId: n
			}) => Object(o.a)(t, {
				...f,
				variables: {
					input: {
						postId: e,
						optionId: n
					}
				}
			});
			var x;
			! function(t) {
				t.AllTime = "ALL_TIME", t.Monthly = "MONTHLY"
			}(x || (x = {}));
			const C = (t, {
					subredditId: e,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(t, {
					...m,
					variables: {
						subredditId: e,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				I = (t, e) => Object(o.a)(t, {
					...s,
					variables: {
						input: e
					}
				}),
				w = (t, e) => Object(o.a)(t, {
					...b,
					variables: e
				}),
				P = (t, e) => Object(o.a)(t, {
					...i,
					variables: {
						input: e
					}
				}),
				g = (t, e) => Object(o.a)(t, {
					...j,
					variables: {
						input: e
					}
				}),
				y = (t, e) => Object(o.a)(t, {
					...l,
					variables: {
						input: e
					}
				}),
				k = (t, e) => Object(o.a)(t, {
					...u,
					variables: e
				}),
				E = (t, e) => Object(o.a)(t, {
					...p,
					variables: e
				}),
				_ = async (t, e) => {
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
				}, T = async (t, e) => {
					var n, i;
					const d = await Object(o.a)(t, {
						...a,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(d) || !(null === (n = d.body.data.changePredictionVote) || void 0 === n ? void 0 : n.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}
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
			t.exports = JSON.parse('{"id":"3048ce040c04"}')
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
			t.exports = JSON.parse('{"id":"cb619ee4a1d7"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"ef19872c5854"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(t) {
			t.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(t) {
			t.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(t) {
			t.exports = JSON.parse('{"id":"003c1e2f9277"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(t) {
			t.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"6851ffb490a5"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.964d0f489dca50e5bac9.js.map