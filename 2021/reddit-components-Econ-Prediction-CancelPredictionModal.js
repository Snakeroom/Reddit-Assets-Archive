// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.d360cdeb61fc8adc28d3.js
// Retrieved at 8/2/2021, 10:30:08 AM by Reddit Dataminer v1.0.0
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
				s = 0;
			t.exports = function(t, e, n) {
				var a = e && n || 0,
					l = e || [],
					u = (t = t || {}).node || o,
					p = void 0 !== t.clockseq ? t.clockseq : r;
				if (null == u || null == p) {
					var b = i();
					null == u && (u = o = [1 | b[0], b[1], b[2], b[3], b[4], b[5]]), null == p && (p = r = 16383 & (b[6] << 8 | b[7]))
				}
				var f = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
					m = void 0 !== t.nsecs ? t.nsecs : s + 1,
					j = f - c + (m - s) / 1e4;
				if (j < 0 && void 0 === t.clockseq && (p = p + 1 & 16383), (j < 0 || f > c) && void 0 === t.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = f, s = m, r = p;
				var O = (1e4 * (268435455 & (f += 122192928e5)) + m) % 4294967296;
				l[a++] = O >>> 24 & 255, l[a++] = O >>> 16 & 255, l[a++] = O >>> 8 & 255, l[a++] = 255 & O;
				var h = f / 4294967296 * 1e4 & 268435455;
				l[a++] = h >>> 8 & 255, l[a++] = 255 & h, l[a++] = h >>> 24 & 15 | 16, l[a++] = h >>> 16 & 255, l[a++] = p >>> 8 | 128, l[a++] = 255 & p;
				for (var v = 0; v < 6; ++v) l[a + v] = u[v];
				return e || d(l)
			}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return E
			})), n.d(e, "k", (function() {
				return T
			})), n.d(e, "j", (function() {
				return _
			})), n.d(e, "h", (function() {
				return G
			})), n.d(e, "b", (function() {
				return D
			})), n.d(e, "n", (function() {
				return M
			})), n.d(e, "o", (function() {
				return Q
			})), n.d(e, "d", (function() {
				return q
			})), n.d(e, "a", (function() {
				return A
			})), n.d(e, "p", (function() {
				return R
			})), n.d(e, "i", (function() {
				return J
			})), n.d(e, "e", (function() {
				return U
			})), n.d(e, "f", (function() {
				return B
			})), n.d(e, "l", (function() {
				return W
			})), n.d(e, "m", (function() {
				return K
			})), n.d(e, "c", (function() {
				return z
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/uuid/index.js"),
				i = n.n(r),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/makeRequest/index.ts"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/models/Prediction/index.ts"),
				O = n("./src/reddit/selectors/experiments/econ/index.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/selectors/features/predictions/creation/index.ts"),
				C = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				I = n("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: c.a
				}
			});
			const w = Object(l.a)(I.f),
				P = Object(l.a)(I.j),
				y = Object(l.a)(I.m),
				g = Object(l.a)(I.i),
				k = Object(l.a)(I.b),
				E = (t, e, n, o) => async (r, i, {
					gqlContext: d
				}) => {
					const c = Object(v.J)(i()),
						s = await Object(p.i)(d(), {
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
						predictionWinners: l
					} = a, u = {
						subredditId: t,
						...l
					};
					return r(w(u)), u
				}, T = ({
					coinPackageId: t,
					optionId: e,
					postId: n,
					price: o
				}) => async (r, i, {
					gqlContext: d
				}) => {
					const c = await Object(p.m)(d(), {
						coinPackageId: t,
						optionId: e,
						postId: n,
						price: o
					});
					return r(P({
						pollId: n,
						prediction: c,
						price: o
					})), c
				}, _ = ({
					optionId: t,
					postId: e
				}) => async (n, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.k)(r(), {
							optionId: t,
							postId: e
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return n(g({
						pollId: e,
						prediction: d.poll
					})), d.poll
				}, L = Object(l.a)(I.d), S = Object(l.a)(I.e), N = Object(l.a)(I.h), G = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(h.D)(r, t),
						d = Object(C.j)(r, {
							subredditId: i
						}),
						c = Object(O.k)(r);
					if (d) return Object(C.f)(r, {
						subredditId: i
					});
					e(L({
						subredditId: i
					}));
					const s = await Object(p.j)(o(), {
						subredditName: t,
						isLatestOnly: !0,
						isIncludingPredictions: !0,
						isIncludingParticipants: !0,
						isIncludingCancelledPredictions: c
					});
					if (!Object(u.c)(s) || s.error) throw new Error("Failed to fetch tournaments");
					const {
						predictionTournaments: a
					} = s.body.data.subredditInfoByName;
					if (!a) return [];
					const l = a.map(t => {
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
					return e(S({
						subredditId: i,
						tournaments: l
					})), e(N({
						posts: f,
						meta: r.meta
					})), l
				}, D = Object(l.a)(I.a), M = Object(l.a)(I.k), Q = Object(l.a)(I.l), q = ({
					subredditId: t
				}) => async (e, n, {
					gqlContext: o
				}) => {
					const r = n(),
						i = Object(x.b)(r),
						d = Object(O.a)(r);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const c = await Object(p.d)(o(), {
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: t,
							predictionDrafts: i,
							currency: d ? j.a.Coins : j.a.Tokens
						}),
						{
							createPredictionTournament: s
						} = c.body.data;
					if (!(null == s ? void 0 : s.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: a
					} = s;
					return e(S({
						subredditId: t,
						tournaments: [a]
					})), a
				}, A = (t, e) => async (n, o, {
					gqlContext: r
				}) => {
					var d;
					const c = Object(x.b)(o());
					if (!c) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const s = await Object(p.b)(r(), {
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
				}, F = Object(l.a)(I.n), R = (t, e, n) => async (e, o, {
					gqlContext: r
				}) => {
					const i = await Object(p.l)(r(), {
							tournamentId: t,
							name: n
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return e(F(d.tournament)), d.tournament
				}, J = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.f)(o(), {
							tournamentId: t
						}),
						{
							endPredictionTournament: i
						} = r.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return e(F(i.tournament)), i.tournament
				}, U = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.g)(o(), {
						postId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = r.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, B = t => async (e, n, {
					gqlContext: o
				}) => {
					const r = await Object(p.h)(o(), {
						tournamentId: t
					});
					if (!r.ok || r.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = r.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, W = ({
					coinPackageId: t,
					selectedOptionId: e,
					price: n,
					pollId: o,
					tournamentId: r,
					tournamentPostId: i
				}) => async d => {
					const c = await d(T({
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
				}, K = t => Object(f.h)(m.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: t
				}), z = t => async (e, n, {
					gqlContext: r
				}) => {
					try {
						const n = await Object(p.c)(r(), {
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
				s = n("./src/reddit/controls/TextButton/index.tsx"),
				a = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const p = t => t.preventDefault();
			e.a = Object(d.a)(t => i.a.createElement(c.d, null, i.a.createElement(c.h, null, i.a.createElement(a.a, null, i.a.createElement(c.p, null, t.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), i.a.createElement(s.a, {
				onClick: () => {
					t.onClose && t.onClose(), t.toggleModal && t.toggleModal()
				}
			}, i.a.createElement(c.b, null)))), i.a.createElement(c.k, null, i.a.createElement(c.o, {
				className: u.a.ModalText
			}, t.modalText)), i.a.createElement(c.f, null, !t.hideCancelButton && i.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					t.onCancel && t.onCancel(), t.toggleModal && t.toggleModal()
				},
				"data-redditstyle": !t.disableRedditStyle
			}, t.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), i.a.createElement(c.t, {
				className: u.a.buttonWidth,
				onMouseDown: p,
				onClick: e => {
					t.onConfirm(), t.toggleModal && t.toggleModal(), t.trackClick && t.trackClick()
				},
				"data-redditstyle": !t.disableRedditStyle
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
				s = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/selectors/posts.ts");
			const p = () => {
				const t = Object(d.d)(),
					e = Object(d.e)(u.P);
				if (!e) return null;
				const {
					totalVoteCount: n
				} = e.pollData || {}, r = () => t(Object(s.g)(l.a.ECON_PREDICTIONS_CANCEL_PREDICTION));
				return i.a.createElement(a.a, {
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
				}) : 1 === t ? o.fbt._("Canceling this prediction will end the 1 prediction that have already been made and notify the players.", null, {
					hk: "3S7MYD"
				}) : o.fbt._("Canceling this prediction will end the {votedUsersCount} predictions that have already been made and notify the players.", [o.fbt._param("votedUsersCount", t.toString())], {
					hk: "2TTB5g"
				})
			}
			e.default = p
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(t, e, n) {
			"use strict";
			n.d(e, "m", (function() {
				return O
			})), n.d(e, "k", (function() {
				return h
			})), n.d(e, "a", (function() {
				return v
			})), n.d(e, "i", (function() {
				return x
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "j", (function() {
				return I
			})), n.d(e, "b", (function() {
				return w
			})), n.d(e, "l", (function() {
				return P
			})), n.d(e, "f", (function() {
				return y
			})), n.d(e, "g", (function() {
				return g
			})), n.d(e, "h", (function() {
				return k
			})), n.d(e, "e", (function() {
				return E
			})), n.d(e, "c", (function() {
				return T
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				i = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = n("./src/redditGQL/operations/CancelPrediction.json"),
				c = n("./src/redditGQL/operations/ChangePrediction.json"),
				s = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				a = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				u = n("./src/redditGQL/operations/GetPredictionToken.json"),
				p = n("./src/redditGQL/operations/GetTournaments.json"),
				b = n("./src/redditGQL/operations/ResolvePrediction.json"),
				f = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				m = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				j = n("./src/redditGQL/operations/VotePrediction.json");
			const O = async (t, {
				postId: e,
				optionId: n,
				coinPackageId: i,
				price: d
			}) => {
				var c;
				const s = await Object(o.a)(t, {
					...j,
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
			}, h = (t, {
				postId: e,
				optionId: n
			}) => Object(o.a)(t, {
				...b,
				variables: {
					input: {
						postId: e,
						optionId: n
					}
				}
			});
			var v;
			! function(t) {
				t.AllTime = "ALL_TIME", t.Monthly = "MONTHLY"
			}(v || (v = {}));
			const x = (t, {
					subredditId: e,
					period: n,
					top: r,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(o.a)(t, {
					...f,
					variables: {
						subredditId: e,
						period: n,
						top: r,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				C = (t, e) => Object(o.a)(t, {
					...s,
					variables: {
						input: e
					}
				}),
				I = (t, e) => Object(o.a)(t, {
					...p,
					variables: e
				}),
				w = (t, e) => Object(o.a)(t, {
					...i,
					variables: {
						input: e
					}
				}),
				P = (t, e) => Object(o.a)(t, {
					...m,
					variables: {
						input: e
					}
				}),
				y = (t, e) => Object(o.a)(t, {
					...a,
					variables: {
						input: e
					}
				}),
				g = (t, e) => Object(o.a)(t, {
					...l,
					variables: e
				}),
				k = (t, e) => Object(o.a)(t, {
					...u,
					variables: e
				}),
				E = async (t, e) => {
					const n = await Object(o.a)(t, {
						...c,
						variables: {
							input: e
						}
					});
					if (!Object(r.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to edit prediction end time")
				}, T = async (t, {
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
			t.exports = JSON.parse('{"id":"096bfa098f49"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"3a0e9bd20bd7"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"6d3cdb387ed9"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"8ce841e41b53"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"730629e10ec6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(t) {
			t.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(t) {
			t.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(t) {
			t.exports = JSON.parse('{"id":"ec9db4678a1a"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"36bd638634e1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(t) {
			t.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(t) {
			t.exports = JSON.parse('{"id":"a278e3cfb8bc"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(t) {
			t.exports = JSON.parse('{"id":"7d092b4281c1"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.d360cdeb61fc8adc28d3.js.map