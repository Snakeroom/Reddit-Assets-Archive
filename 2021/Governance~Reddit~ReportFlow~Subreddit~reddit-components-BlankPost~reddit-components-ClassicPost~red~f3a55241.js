// https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.809e04ca0bcae4a14f3f.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"], {
		"./src/reddit/actions/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return I
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "h", (function() {
				return R
			})), r.d(t, "i", (function() {
				return P
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/chat/toggle.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/modals.ts"),
				a = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts");
			var p = r("./src/reddit/helpers/parseUrl.ts"),
				f = r("./src/reddit/selectors/telemetry.ts"),
				m = r("./src/telemetry/models/Event.ts");
			var O = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/downToChat.ts"),
				j = r("./src/telemetry/index.ts");
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = "FETCH_DOWN_TO_CHAT_AVAILABILITY__PENDING", S = "FETCH_DOWN_TO_CHAT_AVAILABILITY__SUCCESS", h = "FETCH_DOWN_TO_CHAT_AVAILABILITY__FAILED", y = "DISMISS_DOWN_TO_CHAT_BANNER__PENDING", T = "DISMISS_DOWN_TO_CHAT_BANNER__SUCCESS", E = "DISMISS_DOWN_TO_CHAT_BANNER__FAILED", x = "DISMISS_EACH_SUBREDDIT_BANNER", v = Object(s.a)(I), w = Object(s.a)(S), D = Object(s.a)(h), C = Object(s.a)(y), A = Object(s.a)(T), k = (Object(s.a)(E), Object(s.a)(x)), N = e => async (t, r, {
				apiContext: s
			}) => {
				const n = r();
				if (Object(g.a)(n, e)) return;
				t(v({
					subredditId: e
				}));
				const i = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: c.ib.GET,
					type: "json",
					data: {
						subreddit_id: t
					},
					timeoutMs: 650
				}))(s(), e);
				if (i.ok && i.body) {
					const {
						feature_enabled: r,
						experiment_enabled: s
					} = i.body;
					if (t(w({
							subredditId: e,
							bannerEnabled: r,
							buttonEnabled: s
						})), r) {
						const e = (e => ({
							source: m.b.Chat,
							action: m.a.View,
							noun: "down_to_chat_subreddit_entry",
							subreddit: Object(f.subreddit)(e),
							...Object(f.defaults)(e)
						}))(n);
						Object(j.a)(e)
					}
				} else t(D({
					subredditId: e,
					error: "Failed to fetch subreddit's down to chat availability data"
				}))
			}, R = e => async (t, r, {
				apiContext: s
			}) => {
				t(C({
					subredditId: e
				}));
				const n = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/availability`,
					method: c.ib.DELETE,
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (n.ok && n.body) {
					const {
						feature_enabled: r,
						experiment_enabled: s
					} = n.body;
					t(A({
						subredditId: e,
						bannerEnabled: r,
						buttonEnabled: s
					})), r || t(k())
				}
				const i = (e => ({
					source: m.b.Chat,
					action: m.a.Dismiss,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(f.subreddit)(e),
					...Object(f.defaults)(e)
				}))(r());
				Object(j.a)(i)
			}, P = e => async (t, r, {
				apiContext: s
			}) => {
				const g = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/join`,
					method: c.ib.POST,
					type: "json",
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (g.ok && g.body) {
					t(Object(i.i)(o.a.DOWN_TO_CHAT_PENDING_MODAL));
					const {
						deeplink_url: e
					} = g.body, r = Object(p.a)(e);
					r && r.pathname && t(Object(n.d)({
						channelUrl: r.pathname
					}))
				} else t(Object(d.f)({
					kind: O.b.Error,
					duration: d.a,
					text: _._("Failed to join a subreddit channel", null, {
						hk: "mZam3"
					})
				}));
				setTimeout(() => t(Object(i.f)()), 1e3);
				const I = (e => ({
					source: m.b.Chat,
					action: m.a.Click,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(f.subreddit)(e),
					...Object(f.defaults)(e)
				}))(r());
				Object(j.a)(I)
			}
		},
		"./src/reddit/actions/economics/helpers/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => async t => {
				const s = await (() => r.e("EconHelperActions").then(r.bind(null, "./src/reddit/actions/economics/helpers/index.ts")).then(e => e.fetchAll))();
				await t(s(e))
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/loadableAction/index.ts");
			const n = Object(s.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditUserCommentsPowerupsInfoFromCommentCollection)),
				i = Object(s.a)(() => r.e("AchievementsActions").then(r.bind(null, "./src/reddit/actions/economics/powerups/flairs/index.ts")).then(e => e.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo))
		},
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return w
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "n", (function() {
				return U
			})), r.d(t, "b", (function() {
				return B
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "a", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return W
			})), r.d(t, "o", (function() {
				return $
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "j", (function() {
				return z
			})), r.d(t, "r", (function() {
				return H
			})), r.d(t, "s", (function() {
				return K
			})), r.d(t, "f", (function() {
				return Y
			})), r.d(t, "c", (function() {
				return X
			})), r.d(t, "d", (function() {
				return Z
			})), r.d(t, "h", (function() {
				return ee
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/uuid/index.js"),
				i = r.n(n),
				d = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/reddit/endpoints/economics/predictions.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				f = r("./src/redditGQL/types.ts"),
				m = r("./src/reddit/actions/login.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				h = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: o.a
				}
			});
			const T = Object(u.a)(y.f),
				E = Object(u.a)(y.j),
				x = Object(u.a)(y.m),
				v = Object(u.a)(y.i),
				w = Object(u.a)(y.b),
				D = (e, t, r, s) => async (n, i, {
					gqlContext: d
				}) => {
					const o = Object(I.K)(i()),
						a = await Object(l.j)(d(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: o,
							tournamentId: s
						});
					if (a.error || !a.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: c
					} = a.body.data;
					if (!c || !c.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: u
					} = c, b = {
						subredditId: e,
						...u
					};
					return n(T(b)), b
				}, C = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: s
				}) => async (n, i, {
					gqlContext: d
				}) => {
					const o = await Object(l.p)(d(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: s
					});
					return n(E({
						pollId: r,
						prediction: o,
						price: s
					})), o
				}, A = ({
					optionId: e,
					postId: t
				}) => async (r, s, {
					gqlContext: n
				}) => {
					const i = await Object(l.n)(n(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: d
						} = i.body.data;
					if (!(null == d ? void 0 : d.poll)) throw new Error("Failed to resolve prediction");
					return r(v({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, k = Object(u.a)(y.d), N = Object(u.a)(y.e), R = Object(u.a)(y.c), P = Object(u.a)(y.h), L = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						i = Object(_.B)(n, e),
						d = Object(h.j)(n, {
							subredditId: i
						}),
						o = Object(j.m)(n);
					if (d) return Object(h.f)(n, {
						subredditId: i
					});
					t(k({
						subredditId: i
					}));
					const a = await Object(l.k)(s(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: o
						}),
						c = {};
					a.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (c[e.id] = Object(b.f)(e))
						})
					});
					const u = a.map(e => Object(p.a)(e));
					return t(R({
						subredditId: i,
						tournaments: u
					})), t(N({
						subredditId: i,
						tournaments: u
					})), t(P({
						posts: c,
						meta: n.meta
					})), u
				}, G = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						i = Object(_.B)(n, e);
					if (Object(h.j)(n, {
							subredditId: i
						})) return;
					t(k({
						subredditId: i
					}));
					const d = await Object(l.l)(s(), {
						subredditName: e,
						isLatestOnly: !0
					});
					t(U(i, d))
				}, U = (e, t) => r => {
					const s = t.map(e => Object(p.a)(e));
					r(N({
						subredditId: e,
						tournaments: s
					}))
				}, B = Object(u.a)(y.a), q = Object(u.a)(y.k), F = Object(u.a)(y.l), M = ({
					subredditId: e
				}) => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						i = Object(S.b)(n),
						d = Object(j.a)(n);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(l.f)(s(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: d ? f.h.Coins : f.h.Tokens
						}),
						{
							createPredictionTournament: a
						} = o.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = a;
					return t(N({
						subredditId: e,
						tournaments: [c]
					})), c
				}, Q = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					var d;
					const o = Object(S.b)(s());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const a = await Object(l.b)(n(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						{
							addPredictionDrafts: c
						} = a.body.data;
					if (null === (d = c.errors) || void 0 === d ? void 0 : d.length) throw new Error(c.errors[0].message);
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, J = Object(u.a)(y.n), W = (e, t, r) => async (t, s, {
					gqlContext: n
				}) => {
					const i = await Object(l.o)(n(), {
							tournamentId: e,
							name: r
						}),
						{
							updatePredictionTournament: d
						} = i.body.data;
					if (!d.tournament) throw new Error("Failed to update prediction name");
					return t(J(d.tournament)), d.tournament
				}, $ = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(l.g)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = n.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(J(i.tournament)), i.tournament
				}, V = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(l.h)(s(), {
						postId: e
					});
					if (!n.ok || n.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = n.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, z = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(l.i)(s(), {
						tournamentId: e
					});
					if (!n.ok || n.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = n.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, H = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: r,
					pollId: s,
					tournamentId: n,
					tournamentPostId: i
				}) => async d => {
					const o = await d(C({
						coinPackageId: e,
						optionId: t,
						postId: s,
						price: r
					}));
					return d(x({
						predictionId: s,
						selectedOptionId: t,
						tournamentId: n,
						tournamentPostId: i
					})), o
				}, K = e => async (t, r) => {
					const s = r();
					Object(I.K)(s) ? await t(Object(O.h)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(m.i)())
				}, Y = () => Object(O.g)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL), X = e => async (t, r, {
					gqlContext: n
				}) => {
					try {
						const r = await Object(l.c)(n(), {
							postId: e
						});
						t(w({
							postId: e,
							prediction: r
						}));
						const i = Object(a.e)(s.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), c.b.SuccessMod);
						t(Object(a.f)(i))
					} catch {
						const e = Object(a.e)(s.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), c.b.Error);
						t(Object(a.f)(e))
					}
				};

			function Z(e, t) {
				return async (r, s, {
					gqlContext: n
				}) => {
					const i = await Object(l.d)(n(), {
						postId: e,
						...t
					});
					return r(w({
						postId: e,
						prediction: i
					})), i
				}
			}
			const ee = e => async (t, r, {
				gqlContext: s
			}) => Object(l.m)(s(), {
				subredditId: e
			})
		},
		"./src/reddit/actions/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return I
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return V
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/addQueryParams/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				o = r("./src/reddit/constants/parameters.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const p = e => {
				return e.reduce((e, t) => (e[t.provider] = t, e), {})
			};
			var f = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/externalAccount.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				S = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				h = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				E = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				x = Object(n.a)(I),
				v = Object(n.a)(S),
				w = Object(n.a)(h),
				D = Object(n.a)(y),
				C = Object(n.a)(T),
				A = Object(n.a)(E),
				k = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						i = Object(_.k)(n),
						d = e || i && Object(m.e)(i);
					if (!d) return;
					if (Object(O.d)(n, {
							username: d
						})) return;
					t(x(d));
					const o = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: a.ib.GET
					}))(s(), d);
					if (o.ok) {
						const e = p(o.body);
						t(v({
							username: d,
							accountsData: e
						}))
					} else t(w(o.error))
				}, N = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = Object(g.d)(s);
					if (!n) return;
					const i = s.externalAccount.api.subreddit.fetched[n],
						d = s.externalAccount.api.subreddit.pending[n];
					if (i || d) return;
					const o = Object(j.t)(s, {
						subredditName: n
					});
					if (!(o && o.hasExternalAccount)) return;
					e(D(n));
					const f = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/subreddit/${t}.json`),
						method: a.ib.GET
					}))(r(), n);
					if (f.ok) {
						const t = p(f.body);
						e(C({
							subredditName: n,
							accountsData: t
						}))
					} else e(A(f.error))
				}, R = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", P = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", L = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", G = Object(n.a)(R), U = Object(n.a)(P), B = Object(n.a)(L), q = e => async (t, r, {
					apiContext: s
				}) => {
					t(G({
						provider: e
					}));
					const n = Object(_.k)(r()),
						i = Object(m.e)(n),
						d = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: a.ib.POST
						}))(s(), e);
					d.ok ? t(U({
						provider: e,
						username: i
					})) : t(B({
						provider: e,
						error: d.error
					}))
				}, F = "OAUTH_FLOW_URL_PENDING", M = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", J = Object(n.a)(F), W = Object(n.a)(M), $ = Object(n.a)(Q), V = e => async (t, r, {
					apiContext: n
				}) => {
					t(J({
						provider: e
					}));
					const p = Object(i.a)(window.location.href, {
							[o.d]: e
						}),
						m = await ((e, t, r) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: a.ib.POST,
							data: {
								redirect_url: r
							}
						}))(n(), e, p);
					if (m.ok) {
						const {
							redirect_url: r
						} = m.body;
						t(W({
							provider: e
						})), window.location.href = r
					} else t($({
						provider: e,
						error: m.error
					})), t(Object(d.f)({
						kind: f.b.Error,
						text: s.fbt._("Something went wrong. Just don't panic.", null, {
							hk: "196FiB"
						})
					}))
				}
		},
		"./src/reddit/actions/gold/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "n", (function() {
				return _
			})), r.d(t, "k", (function() {
				return T
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "a", (function() {
				return Q
			})), r.d(t, "c", (function() {
				return J
			})), r.d(t, "i", (function() {
				return W
			})), r.d(t, "h", (function() {
				return $
			})), r.d(t, "f", (function() {
				return V
			})), r.d(t, "g", (function() {
				return z
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "m", (function() {
				return Y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/telemetry/index.ts"),
				o = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/endpoints/gold/powerups/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/helpers/trackers/powerups.ts"),
				g = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				j = r("./src/reddit/actions/gold/constants.ts");
			const _ = e => async (t, r, {
				gqlContext: n
			}) => {
				if (!!r().user.powerups.fetched && !e) return;
				t(I());
				const d = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const e = await Object(l.j)(n());
					if (e.ok) {
						const r = e.body;
						if (r.errors && r.errors.length) return void(await t(y(d)));
						if (!r.data.identity) return void(await t(h(d)));
						await t(S({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (o) {
					i.c.captureException(o), await t(y(d))
				}
			}, I = Object(n.a)(j.Bb), S = Object(n.a)(j.Ab), h = Object(n.a)(j.zb), y = e => async (t, r) => {
				await t(h(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, T = (e, t) => async (e, r, {
				gqlContext: n
			}) => {
				var d;
				if (!!r().users.powerups.fetched) return;
				e(E());
				const o = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.g)(n(), t);
					if (r.ok) {
						const s = r.body;
						if (s.errors && s.errors.length) return void(await e(w(o)));
						if (!s.data.redditorInfoById) return void(await e(v(o)));
						const n = (null === (d = s.data.redditorInfoById.powerups) || void 0 === d ? void 0 : d.supportedSubreddits) || [];
						await e(x({
							supportedSubreddits: n,
							userId: t
						}))
					}
				} catch (a) {
					i.c.captureException(a), await e(w(o))
				}
			}, E = Object(n.a)(j.hb), x = Object(n.a)(j.gb), v = Object(n.a)(j.fb), w = e => async (t, r) => {
				await t(v(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, D = (e, t = {}) => async (r, n, {
				gqlContext: d
			}) => {
				var o;
				const a = n();
				if (Object(p.k)(a, {
						subredditId: e
					}) && Object(f.a)(a, {
						subredditId: e
					}) && (!t.fullData || Object(p.m)(a, {
						subredditId: e
					})) && !t.forceLoad) return;
				r(N());
				const c = t.fullData ? l.i : l.h;
				try {
					const s = await c(d(), e, !!t.includeIdentity);
					if (s.ok) {
						const n = s.body;
						if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) return void(await r(G(n.errors[0].message)));
						if (t.fullData) {
							const {
								data: t
							} = n;
							C(r, e, t.subredditInfoById, t.identity)
						} else {
							const {
								powerups: t = null,
								powerupsSettings: s = null
							} = n.data.subredditInfoById || {};
							await r(R({
								powerups: t,
								subredditId: e,
								benefitStatuses: null == s ? void 0 : s.benefitStatuses
							}))
						}
					}
				} catch (u) {
					i.c.captureException(u), await r(G(s.fbt._("Something went wrong", null, {
						hk: "1IJNeH"
					})))
				}
			}, C = (e, t, r, s) => {
				var n, i, d;
				const {
					powerups: o = null,
					powerupsSettings: a = null,
					supporters: c = null,
					productOffers: u = null,
					subredditAchievementFlairs: l
				} = r || {}, b = null == s ? void 0 : s.powerups;
				e(P({
					powerups: o,
					benefitStatuses: null == a ? void 0 : a.benefitStatuses,
					productOffers: null !== (n = null == u ? void 0 : u.offers) && void 0 !== n ? n : [],
					recentSupporters: null !== (i = null == c ? void 0 : c.recentSupporters) && void 0 !== i ? i : [],
					subredditId: t,
					topSupporters: null !== (d = null == c ? void 0 : c.topSupporters) && void 0 !== d ? d : [],
					userPowerups: b,
					subredditAchievementFlairs: null != l ? l : []
				}))
			}, A = Object(n.a)(j.I), k = e => async (t, r, {
				gqlContext: s
			}) => {
				try {
					const r = await Object(l.e)(s(), e);
					t(A({
						subredditsPowerupsInfo: r
					}))
				} catch (n) {
					await t(G(n.message))
				}
			}, N = Object(n.a)(j.rb), R = Object(n.a)(j.qb), P = Object(n.a)(j.pb), L = Object(n.a)(j.ob), G = e => async (t, r) => {
				await t(L(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, U = Object(n.a)(j.T), B = Object(n.a)(j.U), q = Object(n.a)(j.V), F = e => async (t, r) => {
				await t(U(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, M = (e, t, r, n) => async (d, o, {
				gqlContext: p
			}) => {
				d(B({
					subredditId: e,
					powerupsCount: t,
					isAnonymous: r,
					allocatedAt: n
				}));
				try {
					const i = {
							subredditId: e,
							powerupsCount: t,
							isAnonymous: r
						},
						f = await Object(l.f)(p(), {
							input: i
						});
					let O = !1,
						j = null;
					if (f.ok) {
						const e = f.body;
						O = e.data.reallocatePowerups.ok, j = e.data.reallocatePowerups.errors
					}
					const I = Object(m.k)(o());
					if (O && I) await d((e => async (t, r) => {
						t(q(e)), await t(D(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(_(!0)), t(Object(g.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(a.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(a.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(c.f)({
							kind: b.b.SuccessCommunityGreen,
							duration: c.a,
							text: s.fbt._("Your Powerup subscription has been canceled.", null, {
								hk: "z7ZJZ"
							})
						})))
					})({
						subredditId: e,
						powerupsCount: t,
						isAnonymous: r,
						user: I,
						allocatedAt: n
					}));
					else {
						const e = j && j[0] && j[0].message || s.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
						await d(F(e))
					}
				} catch (f) {
					i.c.captureException(f);
					const e = f,
						t = e && e.message || s.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await d(F(t))
				}
			}, Q = e => async (t, r, {
				gqlContext: s
			}) => {
				await Object(l.c)(s(), e)
			}, J = Object(n.a)(j.E), W = Object(n.a)(j.R), $ = e => Object(a.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), V = e => async (t, r) => {
				const s = r();
				return Object(m.k)(s) ? (Object(d.a)(Object(O.h)(e)(s)), t(Object(a.h)(u.a.ECON_POWERUPS_MARKETING))) : t(Object(o.i)())
			}, z = e => async t => t(Object(a.h)(u.a.ECON_POWERUPS_PREMIUM_UPSELL, {
				subredditId: e
			})), H = () => async (e, t) => {
				const r = t();
				return Object(m.k)(r) ? e(Object(a.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.i)())
			}, K = Object(n.a)(j.N), Y = (e, t) => async (r, s, {
				gqlContext: n
			}) => {
				const i = await Object(l.k)(n(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (i.ok) {
					const t = i.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(K({
						subredditId: e,
						benefitStatuses: t
					})), !0
				}
				return !1
			}
		},
		"./src/reddit/actions/meta.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "j", (function() {
				return h
			}));
			var s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/selectors/runTimeEnvVars.ts"),
				u = r("./src/reddit/selectors/user.ts");
			const l = "META__GEO_CHANGED",
				b = Object(i.a)(l),
				p = "META__META_RECEIVED",
				f = (Object(i.a)(p), "META__SET_LOCALE"),
				m = Object(i.a)(f),
				O = e => async (t, r, {
					apiContext: i
				}) => {
					if (!e) return;
					const l = r(),
						b = i();
					let p;
					if (t(m(e)), Object(s.isPseudoLocale)(e) ? (Object(u.H)(l) || Object(c.b)(l)) && (p = e) : p = Object(s.isoLocaleToR2Language)(e), !p) return;
					const f = new URL(window.location.href);
					Object(u.K)(l) ? Object(s.isPseudoLocale)(p) ? f.searchParams.set("locale", p) : (await Object(d.a)(Object(o.a)(b, [a.a]), {
						data: {
							lang: p
						},
						endpoint: `${b.apiUrl}/api/v1/me/prefs`,
						method: n.ib.PATCH,
						type: "json"
					}), f.searchParams.delete("locale")) : f.searchParams.delete("locale"), window.location.href = f.toString()
				}, g = "META__SET_POPULAR_GEO_FILTER", j = Object(i.a)(g), _ = "META__PWA_ENTERED", I = "META__PWA_LEFT", S = Object(i.a)(_), h = Object(i.a)(I)
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "handleSubredditPageApiError", (function() {
				return Ne
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return Re
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return Pe
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return Le
			})), r.d(t, "subredditPending", (function() {
				return Ge
			})), r.d(t, "subredditLoaded", (function() {
				return Ue
			})), r.d(t, "subredditFailed", (function() {
				return Be
			})), r.d(t, "subredditDataRequested", (function() {
				return qe
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Fe
			})), r.d(t, "makeSubredditPageKey", (function() {
				return Qe
			})), r.d(t, "subredditRequested", (function() {
				return Je
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return We
			})), r.d(t, "subredditInvalidateListing", (function() {
				return $e
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeRequest/index.ts"),
				i = r("./node_modules/lodash/find.js"),
				d = r.n(i),
				o = r("./node_modules/lodash/pick.js"),
				a = r.n(o),
				c = r("./node_modules/react-router-redux/es/index.js"),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/countrySites/index.ts"),
				b = r("./src/lib/isAdHocMultireddit/index.ts"),
				p = r("./src/lib/isFakeSubreddit/index.ts"),
				f = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/makeListingKey/index.ts"),
				O = r("./src/lib/makeSearchKey/index.ts"),
				g = r("./src/lib/performanceTimings/index.tsx"),
				j = r("./src/reddit/actions/ads/index.ts"),
				_ = r("./src/reddit/actions/communityFlairs/index.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				S = r("./src/reddit/actions/discoveryUnit.ts"),
				h = (r("./src/reddit/actions/downToChat.ts"), r("./src/reddit/actions/economics/helpers/async.ts")),
				y = r("./src/reddit/actions/economics/predictions/index.ts"),
				T = r("./src/reddit/actions/externalAccount.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				x = r("./src/reddit/actions/meta.ts"),
				v = r("./src/reddit/actions/pages/search/index.ts"),
				w = r("./src/reddit/actions/platform.ts"),
				D = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				C = r("./src/reddit/actions/seo/linksModule.ts"),
				A = r("./src/reddit/actions/seo/topicLinks.ts"),
				k = r("./src/lib/makeGqlRequest/index.ts");
			r("./src/redditGQL/operations/SubredditInfo.json");
			const N = e => ({
				communityIcon: e.styles && e.styles.icon || void 0,
				iconUrl: e.styles && e.styles.legacyIcon && e.styles.legacyIcon.url || void 0,
				id: e.id,
				isNSFW: e.isNSFW || !1,
				isSubscribed: e.isSubscribed,
				name: e.name,
				primaryColor: e.styles && e.styles.primaryColor || void 0,
				subscribers: e.subscribers,
				type: "subreddit"
			});
			var R = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(N) : []
				}
			};
			var P = e => {
					var t, r;
					return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
				},
				L = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				G = r("./src/reddit/selectors/widgets.ts");

			function U(e, t, r, s) {
				const n = t(),
					i = Object(L.Q)(n, {
						subredditId: r
					}),
					d = Object(G.j)(n, {
						subredditId: r
					});
				if (i.isNSFW || d.some(e => "community-list" === e)) return;
				const o = R(s);
				o && e(Object(C.e)({
					id: r,
					data: o
				}))
			}

			function B(e, t, r) {
				const s = P(r);
				s && e(Object(A.b)({
					id: t,
					data: s
				}))
			}
			var q = r("./src/reddit/actions/structuredStyles/index.ts"),
				F = r("./src/reddit/actions/subreddit.ts"),
				M = r("./src/reddit/actions/toaster.ts"),
				Q = r("./src/reddit/helpers/localStorage/index.ts"),
				J = r("./src/reddit/models/Subreddit/index.ts"),
				W = r("./src/reddit/models/Toast/index.ts"),
				$ = r("./src/reddit/routes/postCreation/constants.ts"),
				V = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				z = r("./src/reddit/selectors/platform.ts"),
				H = r("./src/reddit/selectors/user.ts");
			const K = () => async (e, t, r) => {
				const s = t(),
					n = Object(z.e)(s);
				if (!n || n.type !== J.f.Public) return;
				const i = n.name,
					d = Object(z.l)(s),
					o = Object(L.t)(s, {
						subredditName: i
					});
				if (!o) return;
				const {
					activity7Day: a
				} = o, u = !!a && a >= 51 && a <= 100, l = !i || Object(p.a)(i), b = d && d.urlParams.subredditName === i, f = Object(H.K)(s), m = Object(V.c)(s, {
					subredditId: Object(L.B)(s, i)
				});
				if (l || b || Object(Q.C)() || !u || !f || m) return;
				const O = Object(G.d)(t(), {
					subredditName: i
				});
				if (!O || !O.currentlyViewingCount) return;
				const g = (24 * O.currentlyViewingCount * 7).toString(),
					j = g[0].padEnd(g.length, "0");
				e(Object(M.f)({
					buttonAction: async () => e(Object(c.b)(`/r/${i}${$.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: W.b.Modal,
					name: "createPostCta",
					secondButtonAction: async () => Object(Q.Db)(),
					secondButtonText: "Dismiss",
					text: `There have been over ${j} visits to r/${i} in the past week. Create a new post and start the next conversation.`
				}))
			};
			var Y = r("./src/reddit/actions/subreddit/questions.ts"),
				X = r("./src/reddit/actions/subredditSettings.ts"),
				Z = r("./src/reddit/actions/subredditWelcomeMessage.ts"),
				ee = r("./src/reddit/actions/tags/index.ts"),
				te = r("./src/reddit/constants/history.ts"),
				re = r("./src/reddit/constants/page.ts"),
				se = r("./src/reddit/constants/parameters.ts"),
				ne = r("./src/reddit/constants/postLayout.ts"),
				ie = r("./src/reddit/contexts/PageLayer/index.tsx"),
				de = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				oe = r("./src/reddit/endpoints/governance/posts.ts"),
				ae = r("./src/reddit/endpoints/page/subredditPage.ts"),
				ce = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var ue = r("./src/reddit/endpoints/profile/info.ts"),
				le = r("./src/reddit/helpers/canonicalUrls.ts"),
				be = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				pe = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				fe = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function me({
				econLeaderboards: e,
				identity: t,
				trendingSubreddits: r
			}) {
				const s = e.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(fe.b)(s, r, t)
			}
			var Oe = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				ge = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				je = r("./src/reddit/helpers/trackers/feed.ts"),
				_e = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Ie = r("./src/reddit/models/RichTextJson/index.ts"),
				Se = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				he = r("./src/reddit/selectors/communityFlairs.ts"),
				ye = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				Te = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Ee = r("./src/reddit/selectors/experiments/topPosts.ts"),
				xe = r("./src/reddit/selectors/gold/powerups/index.ts"),
				ve = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				we = r("./src/reddit/selectors/moderatorPermissions.ts"),
				De = r("./src/reddit/selectors/multireddit.ts"),
				Ce = r("./src/reddit/selectors/posts.ts"),
				Ae = r("./node_modules/uuid/v4.js"),
				ke = r.n(Ae);
			const Ne = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: n
						}
					} = e, i = s ? s.account : void 0, d = s && s.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (n === J.e.NotFoundSubreddit) r(I.o({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (n === J.e.BannedSubreddit) {
						const e = s ? s.banMessage || s.ban_message : void 0;
						r(I.m({
							banMessage: e,
							account: i,
							features: d,
							subredditName: o
						}))
					}
					if (451 === e.status && r(I.n({
							account: i,
							features: d,
							subredditName: o
						})), 403 === e.status)
						if (n === J.e.GoldSubreddit) r(I.q({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (n === J.e.PrivateSubreddit) r(I.r({
						account: i,
						features: d,
						subredditDescription: s.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (n === J.e.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						r(I.t({
							account: i,
							features: d,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Ie.i
						}))
					}
				}
			}, Re = "PAGE__SUBREDDIT_PENDING", Pe = "PAGE__SUBREDDIT_LOADED", Le = "PAGE__SUBREDDIT_FAILED", Ge = Object(f.a)(Re), Ue = Object(f.a)(Pe), Be = Object(f.a)(Le), qe = (e, t, r, i) => async (o, a, c) => {
				var l, b, f, m, O, I, S, v, D;
				const C = a(),
					A = Object(H.J)(C) || Object(H.K)(C);
				if (C.listings.postOrder.api.pending[e]) return;
				const N = null === (b = null === (l = Object(z.b)(C)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: R
					} = C.platform,
					{
						countryCode: P,
						languageCode: G
					} = (null == R ? void 0 : R.urlParams) || {},
					q = Object(p.a)(t, P, G),
					Q = Object(p.c)(t, P, G),
					J = (Object(p.b)(t, P, G) || Q) && C.posts.recent.length ? {
						...r,
						recentPostIds: C.posts.recent
					} : r;
				J.layout = ne.e[Object(ie.Q)(C, {})], Q && (J.forceGeopopular = !0), o(Ge({
					key: e
				}));
				const $ = Object(Te.b)(C);
				let V;
				if (r.sort === u.V.AWARDED && Q) V = Object(de.a)(c.gqlContext(), {
					top: 0,
					includeListingMetadata: !0
				}).then(e => {
					const t = e.body;
					return {
						...e,
						body: me(t.data)
					}
				});
				else {
					const e = $ ? () => Object(ae.b)(c.gqlContext(), Object(ae.c)(C, t, J), A) : () => Object(ae.a)(c.apiContext(), t, J);
					V = Object(g.i)(e, {
						name: "fetchSubredditPage",
						page: N,
						isLoggedIn: A
					})
				}
				const K = Object(L.P)(a(), {
						subredditId: Object(L.B)(a(), t)
					}).length > 0,
					re = Object(g.i)(() => {
						var e, r;
						return async function(e, t) {
							return Object(k.a)(e, {
								...ce,
								variables: t
							})
						}(c.gqlContext(), {
							subredditName: t,
							isFake: q,
							includeIdentity: A,
							includePowerups: !q,
							includeQuestions: A && !q,
							includeRules: !q && !K,
							includeRedditorKarma: A && !(null === (r = null === (e = C.user.account) || void 0 === e ? void 0 : e.karma) || void 0 === r ? void 0 : r.total),
							includeSubredditLinks: !A,
							includeTopicLinks: !A,
							includeWelcome: !0
						})
					}, {
						name: "fetchSubredditPageExtra",
						page: N,
						isLoggedIn: A
					}),
					se = ke()(),
					[le, be] = await Promise.all([V, re]),
					pe = be && Object(n.c)(be) ? be.body.data : null,
					fe = le.body,
					_e = (null == fe ? void 0 : fe.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(fe.subreddits, t) : null;
				o(w.n(le.status));
				const Ie = `error-${e}`,
					he = q || _e;
				if (le.ok && he) {
					if (!q && _e) {
						const e = null !== (m = null === (f = null == pe ? void 0 : pe.subredditInfoByName) || void 0 === f ? void 0 : f.welcomeMessage) && void 0 !== m ? m : fe.welcomeMessage;
						e && o(Object(Z.f)({
							welcomeMessage: e,
							subredditId: _e
						})), Object(E.b)(o, _e, null == pe ? void 0 : pe.subredditInfoByName, null == pe ? void 0 : pe.identity), (null == pe ? void 0 : pe.subredditInfoByName) && o(Object(y.n)(_e, pe.subredditInfoByName.predictionTournaments || [])), Object(xe.h)(a(), {
							subredditId: _e
						}) && Object(ye.a)(a())
					}
					let s;
					fe.geoFilter && o(Object(x.k)(fe.geoFilter));
					const n = fe.postIds.filter(e => !!fe.posts[e].isMeta);
					if (n.length && _e) {
						const e = Object(g.i)(() => Object(oe.a)(c.apiContext(), _e, n), {
								name: "getGovernanceData",
								page: N,
								isLoggedIn: A
							}),
							t = await e;
						t.ok && (s = t.body)
					}
					if (be && be.ok) {
						const e = null === (I = null === (O = be.body.data.identity) || void 0 === O ? void 0 : O.redditor) || void 0 === I ? void 0 : I.karma,
							t = {
								karma: {
									...ue.a,
									...e
								}
							};
						if (fe.account && Object.assign(fe.account, t), _e) {
							const e = null == be ? void 0 : be.body;
							if (function(e) {
									return Boolean(e && e.data && e.data.subredditInfoByName)
								}(e) && fe.subredditAboutInfo[_e]) {
								const t = e.data.subredditInfoByName,
									r = t && t.notificationLevel;
								fe.subredditAboutInfo[_e].notificationLevel = r
							}
						}
					}
					o(Ue({
						key: e,
						meta: C.meta,
						governance: s,
						correlationId: se,
						...fe,
						postIds: fe.postIds
					}));
					const d = null === (v = null === (S = Object(z.b)(C)) || void 0 === S ? void 0 : S.locationState) || void 0 === v ? void 0 : v[te.b.FeedLoadReason];
					if (Object(je.b)(r.isRefresh ? te.a.UserRefresh : null != d ? d : te.a.InitialLoad)(a()), !q) {
						const e = Object(L.B)(a(), t);
						(null === (D = null == pe ? void 0 : pe.subreddit) || void 0 === D ? void 0 : D.rules) && o(F.t({
							rules: Object(Oe.a)(pe.subreddit.rules),
							subredditId: e
						}));
						const r = Object(_.c)(fe.posts, e),
							s = Object(_.b)(fe.structuredStyles),
							n = (s ? Object(_.d)(s) : []).concat(r);
						o(Object(_.a)(n, e))
					}
					if (i && o(M.g(Ie)), o(Object(j.b)(Se.a.SUBREDDIT)), o(Object(T.p)()), _e) {
						Object(Y.a)(o, _e, null == pe ? void 0 : pe.subredditInfoByName), U(o, a, _e, {
							data: {
								subredditInfoById: null == pe ? void 0 : pe.subredditInfoByName
							}
						}), B(o, _e, {
							data: {
								subredditInfoById: null == pe ? void 0 : pe.subredditInfoByName
							}
						});
						const e = [Object(g.i)(() => o(Object(h.a)({
							subredditId: _e,
							postIds: fe.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: N,
							isLoggedIn: A
						})];
						if (Object(ve.a)(a(), {
								subredditId: _e
							})) {
							const r = Object(g.i)(() => o(Object(X.h)(t, _e)), {
									name: "subredditSettingsRequested",
									isLoggedIn: A,
									page: N
								}),
								s = Object(g.i)(() => o(Object(ee.g)(_e, ge.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: A,
									page: N
								});
							e.push(r, s)
						}
						0, await Promise.all(e)
					}
				} else {
					const n = le.ok ? void 0 : le.error;
					if (Object(je.a)(n ? `${le.status}:${n.type}` : "Failed to load post listing for subreddit")(a()), 403 === le.status || 404 === le.status || 451 === le.status) return void o(Ne(le, t));
					o(Be({
						error: !le.ok && le.error || {
							type: u.H.NOT_FOUND_ERROR
						},
						key: e,
						...fe
					})), i && o(M.f({
						id: Ie,
						kind: W.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: qe(e, t, r, i)
					}))
				}
			}, Fe = (e, t, r) => async (s, n) => {
				const i = n(),
					d = Object(m.a)(e, t.sort, t);
				Object(Ce.A)(i, {
					listingKey: d
				}).length > 0 || await s(qe(d, e, t, r))
			}, Me = (e, t, r, s) => {
				if (Object(p.a)(t, r, s)) {
					if (Object(b.a)(t)) {
						return Object(De.a)(e, {
							listingName: t
						}).displayText
					}
					switch (t.toLowerCase()) {
						case re.d.Popular:
							return "r/popular";
						case re.d.All:
							return "r/all"
					}
				}
				return Object(L.T)(e, {
					subredditName: t
				})
			}, Qe = (e, t, r, s) => s ? Object(O.b)(e.subredditName, void 0, s) : Object(m.a)(e.subredditName, t, r), Je = (e, t) => async (r, s) => {
				var n, i, d;
				const {
					countryCode: o,
					languageCode: b
				} = e.params, f = Object(l.c)(e.params), {
					styling: I
				} = e.queryParams, h = s(), y = Object(be.a)(e.params, h);
				if ("Popular" === f) return void r(Object(c.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === f) return void r(Object(c.c)(e.url.replace("r/All", "r/all")));
				const E = Object(O.d)(e.queryParams, Object(H.eb)(h)),
					x = Qe({
						subredditName: f,
						countryCode: o,
						languageCode: b
					}, y, e.queryParams, E),
					C = y,
					A = h.listings.postOrder.api.error[x],
					k = h.listings.postOrder.api.pending[x];
				let N = !!h.listings.postOrder.ids[x];
				const R = h.listings.postOrder.listingSort[x];
				R && R.hasChanged && (N = !1);
				let P = Object(L.B)(h, f);
				const G = (e, t) => "true" === I && ((e, t) => Object(we.b)(_e.c.config)(e, {
						subredditId: t
					}) || Object(we.b)(_e.c.flair)(e, {
						subredditId: t
					}))(e, t),
					U = se.A in e.queryParams && e.queryParams[se.A].toUpperCase() || "",
					B = U in u.ec && u.ec[U];
				if (k || N && !A && !t) {
					if (G(h, P) && r(q.i(P)), N) {
						const t = Me(s(), f, o, b);
						r(w.m({
							title: t
						})), (null === (n = h.listings.postOrder.correlationIds) || void 0 === n ? void 0 : n[x]) && r(w.o({
							correlationId: h.listings.postOrder.correlationIds[x]
						})), Object(le.e)(s(), r, e), window.addEventListener("load", () => {
							r(Object(T.p)())
						}), h.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(j.b)(Se.a.SUBREDDIT))
						}), r(K())
					}
					return
				}
				r(S.g());
				const F = null === (d = null === (i = Object(z.b)(h)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					M = Object(H.K)(s()),
					Q = Object(g.i)(() => r(Object(D.c)(`r/${f}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: M,
						page: F
					});
				if (E) {
					const e = Object(g.i)(() => r(Object(v.d)(x, E, f)), {
						name: "searchDataRequested",
						isLoggedIn: M,
						page: F
					});
					await e
				} else {
					const t = {
						...a()(e.queryParams, [...se.l, ...se.k, se.h]),
						sort: C,
						t: Object(pe.a)(C, B)
					};
					await r(qe(x, f, t, !0))
				}
				const J = h.platform.currentPage,
					W = Object(Ee.d)(h, {
						pageLayer: J
					});
				if (Object(Ee.a)(W) || Object(Ee.b)(W) || Object(Ee.c)(W)) {
					const e = Object(m.a)(f, u.V.TOP, {
							t: u.ec.WEEK
						}),
						t = {
							sort: u.V.TOP,
							t: u.ec.WEEK
						};
					await r(qe(e, f, t, !1))
				}
				if (P = P || Object(L.B)(s(), f), !Object(he.a)(h, P) && !Object(p.a)(f, o, b)) {
					const e = Object(g.i)(() => r(Object(_.e)(f)), {
						name: "getTopCommunityFlair",
						page: F,
						isLoggedIn: M
					});
					await e
				}
				G(s(), P) && r(q.i(P)), Object(le.e)(s(), r, e);
				const $ = Me(s(), f);
				r(w.m({
					title: $
				})), r(K()), await Q
			}, We = "PAGE__SUBREDDIT_INVALIDATE_LISTING", $e = Object(f.a)(We)
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return S
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/post.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = r("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = Object(s.a)(i.w),
				u = Object(s.a)(i.x),
				l = Object(s.a)(i.G),
				b = (Object(s.a)(i.H), Object(s.a)(i.I)),
				p = Object(s.a)(i.T),
				f = e => async (t, r) => {
					if (Object(o.a)(r())) return t(m(e))
				}, m = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = Object(a.k)(r()),
						i = Object(a.m)(r(), {
							subreddit: e
						}),
						o = i && i.lastUpdated || 0,
						p = 1e3 * n.global.rpan_config_refresh_rate;
					if (n.isPending || n.isPermanentlyCanceled || Date.now() < o + p) return;
					t(l());
					const f = await Object(d.c)(s(), e);
					if (!f.ok) return void t(b());
					const m = f.body;
					t(c({
						...m.global,
						lastUpdated: Date.now()
					})), t(u({
						name: e,
						config: {
							...m.listing_info,
							lastUpdated: Date.now()
						}
					}))
				}, O = e => async (t, r, {
					gqlContext: s
				}) => {
					t(p()), await Object(d.h)(s(), e)
				}, g = e => async (t, r, {
					apiContext: s
				}) => {
					r().posts.models[e] || await t(Object(n.L)(e))
				}, j = Object(s.a)(i.v), _ = Object(s.a)(i.J), I = Object(s.a)(i.K), S = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (Object(a.h)(s)) return;
					e(_());
					const n = await Object(d.d)(r());
					n.ok && n.body && n.body.data ? e(j({
						subreddits: n.body.data
					})) : e(I({
						error: n.error
					}))
				}
		},
		"./src/reddit/actions/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/loadWithRetries/index.ts");
			const i = "FRONTPAGE_LINKS__REQUEST_LOADED",
				d = "SUBREDDIT_LINKS_LOADED",
				o = 10,
				a = Object(s.a)("FRONTPAGE_LINKS__REQUEST_PENDING"),
				c = Object(s.a)("FRONTPAGE_LINKS__REQUEST_FAILED"),
				u = Object(s.a)(i),
				l = Object(s.a)(d),
				b = () => async e => {
					e(a());
					const t = await (async () => (await Object(n.a)(() => r.e("FrontpageLinks").then(r.t.bind(null, "./src/reddit/endpoints/goodContent/frontpageLinks.json", 3)))).default)();
					e(t ? u(t) : c())
				}
		},
		"./src/reddit/actions/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "SUBREDDIT_TOPIC_LINKS_LOADED",
				i = Object(s.a)(n)
		},
		"./src/reddit/actions/subreddit.ts": function(e, t, r) {
			"use strict";
			r.d(t, "m", (function() {
				return Q
			})), r.d(t, "l", (function() {
				return J
			})), r.d(t, "k", (function() {
				return W
			})), r.d(t, "j", (function() {
				return $
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "h", (function() {
				return z
			})), r.d(t, "d", (function() {
				return H
			})), r.d(t, "p", (function() {
				return Z
			})), r.d(t, "t", (function() {
				return ee
			})), r.d(t, "o", (function() {
				return se
			})), r.d(t, "r", (function() {
				return de
			})), r.d(t, "g", (function() {
				return oe
			})), r.d(t, "f", (function() {
				return ae
			})), r.d(t, "e", (function() {
				return ce
			})), r.d(t, "q", (function() {
				return pe
			})), r.d(t, "b", (function() {
				return fe
			})), r.d(t, "c", (function() {
				return me
			})), r.d(t, "a", (function() {
				return Oe
			})), r.d(t, "u", (function() {
				return Ie
			})), r.d(t, "n", (function() {
				return Se
			})), r.d(t, "s", (function() {
				return he
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				i = r.n(n),
				d = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/listingSort/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeListingKey/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				b = r("./src/reddit/actions/pages/subreddit.ts"),
				p = r("./src/reddit/actions/preferences.ts"),
				f = r("./src/reddit/actions/subredditRules/constants.ts"),
				m = r("./src/reddit/actions/toaster.ts"),
				O = r("./src/reddit/constants/history.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/constants/page.ts"),
				_ = r("./src/reddit/constants/parameters.ts"),
				I = r("./src/reddit/constants/postLayout.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/reddit/endpoints/governance/posts.ts"),
				y = r("./src/reddit/endpoints/messages/index.ts"),
				T = r("./src/reddit/endpoints/modQueue/index.ts"),
				E = r("./src/reddit/endpoints/page/subredditPage.ts"),
				x = r("./src/reddit/endpoints/subreddit/about.ts"),
				v = r("./src/reddit/endpoints/subreddit/rules.ts"),
				w = r("./src/reddit/endpoints/user/preferences.ts"),
				D = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				A = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				k = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				N = r("./src/reddit/helpers/trackers/feed.ts"),
				R = r("./src/reddit/models/Subreddit/index.ts"),
				P = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				L = r("./src/reddit/models/Toast/index.ts"),
				G = r("./src/reddit/models/User/index.ts"),
				U = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				B = r("./src/reddit/selectors/profile.ts"),
				q = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/selectors/user.ts");
			const M = {},
				Q = "SUBREDDIT__MODEL_SUCCEEDED",
				J = "SUBREDDIT__MODEL_PENDING",
				W = "SUBREDDIT__MODEL_FAILED",
				$ = "SUBREDDIT__MORE_POSTS_PENDING",
				V = "SUBREDDIT__MORE_POSTS_LOADED",
				z = "SUBREDDIT__MORE_POSTS_FAILED",
				H = "SUBREDDIT__META_FILTER_TOGGLED",
				K = Object(a.a)($),
				Y = Object(a.a)(V),
				X = Object(a.a)(z),
				Z = Object(a.a)(H),
				ee = Object(a.a)(f.b),
				te = Object(a.a)(f.c),
				re = Object(a.a)(f.a),
				se = (e, t) => async (r, s) => {
					await (t === R.f.User ? r(ne(e)) : r(ie(e)))
				}, ne = e => async (t, r, {
					apiContext: s
				}) => {
					const n = Object(B.m)(r(), e),
						i = await Object(v.c)(s(), e);
					if (i.ok) {
						const e = i.body;
						t(ee({
							rules: e,
							subredditId: n
						}))
					}
				}, ie = e => async (t, r, {
					gqlContext: n
				}) => {
					const i = Object(q.B)(r(), e);
					t(te());
					const d = await Object(v.b)(n(), e);
					if (d.ok) {
						const e = d.body;
						t(ee({
							rules: e,
							subredditId: i
						}))
					} else {
						t(re());
						const r = `error-block-${e}`;
						t(m.f({
							id: r,
							kind: L.b.Error,
							text: s.fbt._("An error has occurred. Please try again later", null, {
								hk: "Elbdz"
							})
						}))
					}
				}, de = e => async (t, r, {
					apiContext: s,
					gqlContext: n
				}) => {
					const {
						subredditName: a
					} = e;
					let l = e.t;
					const b = r(),
						p = Object(C.a)(e, b),
						f = b.platform.currentPage ? b.platform.currentPage.queryParams : {},
						m = Object(c.a)(a, p, {
							t: l,
							...f
						}),
						g = b.listings.postOrder.loadMore[m],
						y = b.listings.postOrder.listingSort[m];
					let T = p;
					if (y && !T) {
						const e = Object(o.d)(y.sort);
						T = e.sort, l = e.timeSort
					}
					const x = b.listings.postOrder.api.pending[m],
						{
							fetchedTokens: v
						} = b.listings.postOrder,
						w = !(!v[m] || !v[m][g.token]);
					if (x || w) return;
					if (T === d.V.AWARDED && a === j.g) return;
					t(K({
						key: m,
						fetchedToken: g.token
					}));
					const A = {
							after: g.token,
							dist: g.dist,
							forceGeopopular: a === j.d.Popular,
							layout: I.e[Object(S.Q)(b, {})],
							sort: T,
							t: l,
							...i()(f, [..._.l, _.h])
						},
						k = Object(U.a)(b) ? () => Object(E.b)(n(), Object(E.c)(b, a, {
							...A,
							limit: I.a
						}), Object(F.T)(b)) : () => Object(E.a)(s(), a, A),
						R = await k(),
						P = {
							...R.body,
							...Object(D.a)(b, m, R.body)
						};
					if (R.ok) {
						let e;
						const n = P.postIds.filter(e => !!P.posts[e].isMeta),
							i = Object(q.B)(r(), a);
						if (n.length) {
							const t = await Object(h.a)(s(), i, n);
							t.ok && (e = t.body)
						}
						t(Y({
							fetchedToken: g.token,
							key: m,
							meta: b.meta,
							governance: e,
							...P
						})), await t(Object(u.a)({
							subredditId: i,
							postIds: P.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(N.b)(O.a.NextPageLoad)(r())
					} else {
						t(X({
							error: R.error,
							fetchedToken: g.token,
							key: m,
							...P
						}));
						const e = R.error;
						Object(N.a)(e ? `${R.status}:${e.type}` : "More posts for subreddit failed")(r())
					}
				}, oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", ae = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", ce = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ue = Object(a.a)(oe), le = Object(a.a)(ae), be = Object(a.a)(ce), pe = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ue());
					const n = await Object(T.b)(r(), d.qb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					n.ok ? e(le(n.body)) : e(be({
						error: n.error
					}))
				}, fe = "SUBREDDIT__ABOUT_PENDING", me = "SUBREDDIT__ABOUT_SUCCEEDED", Oe = "SUBREDDIT__ABOUT_FAILED", ge = Object(a.a)(fe), je = Object(a.a)(me), _e = Object(a.a)(Oe), Ie = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (Object(q.t)(n, {
							subredditName: e
						}) || n.subreddits.api.about.error[e.toLowerCase()] || n.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(ge({
						subredditName: e
					}));
					const i = !Object(q.B)(n, e),
						d = await Object(x.a)(s(), e, i);
					if (d.ok) {
						const r = d.body.data.subreddit,
							s = Object(A.a)(r),
							n = i ? Object(k.a)(r) : void 0;
						t(je({
							subredditName: e,
							subreddits: n ? {
								[n.id]: n
							} : void 0,
							data: s
						}))
					} else t(_e({
						subredditName: e,
						error: d.error
					}))
				}, Se = (e, t, r) => async (s, n, {
					apiContext: i
				}) => {
					var d;
					const o = e.substring(2),
						a = r === P.e.View ? null === (d = Object(F.f)(n(), o)) || void 0 === d ? void 0 : d.subredditId : Object(q.B)(n(), o),
						c = Object(F.k)(n());
					if (c && a) {
						const e = ((e, t, r, s) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + s + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(o, Object(G.e)(c), t, r);
						if ((await Object(y.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							s(Object(p.E)({
								subredditId: a,
								prefs: t
							})), Object(w.i)(a, t, i()), r !== P.e.View && s(Object(l.i)(g.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, he = e => async (t, r) => {
					const s = r(),
						{
							subredditName: n
						} = e,
						i = e.t,
						d = Object(C.a)(e, s),
						o = s.platform.currentPage ? s.platform.currentPage.queryParams : M,
						a = Object(c.a)(n, d, {
							t: i,
							...o
						}),
						u = {
							t: i,
							sort: d,
							isRefresh: !0,
							...o
						};
					await t(Object(b.subredditDataRequested)(a, n, u, !0))
				}
		},
		"./src/reddit/actions/subreddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "r", (function() {
				return a
			})), r.d(t, "q", (function() {
				return c
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "x", (function() {
				return S
			})), r.d(t, "y", (function() {
				return h
			})), r.d(t, "z", (function() {
				return y
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "t", (function() {
				return x
			})), r.d(t, "u", (function() {
				return v
			})), r.d(t, "s", (function() {
				return w
			}));
			const s = "SUBREDDIT__ADD_TOP_SUBREDDIT_MODELS",
				n = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS",
				i = "SUBREDDIT__ADD_TOP_SUBREDDIT_RANKINGS_PAGE_INFO",
				d = "SUBREDDIT__POSTS_LOADED",
				o = "SUBREDDIT__POSTS_SET_FAILED",
				a = "SUBREDDIT__SUBREDDITS_POSTS_LOADED",
				c = "SUBREDDIT__SUBREDDITS_POSTS_SET_FAILED",
				u = "SUBREDDIT__RANKINGS_PENDING",
				l = "SUBREDDIT__RANKINGS_LOADED",
				b = "SUBREDDIT__RANKINGS_FAILED",
				p = "SUBREDDIT__SIMILAR_SUBREDDITS_PENDING",
				f = "SUBREDDIT__SIMILAR_SUBREDDITS_LOADED",
				m = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				O = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				g = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				_ = "SUBREDDIT__EDIT_REQUESTED",
				I = "SUBREDDIT__EDIT_FAILED",
				S = "SUBREDDIT__EDIT_SUCCESS",
				h = "SUBREDDIT_QUESTIONS_LOADED",
				y = "SUBREDDIT_SURVEY_ANSWERED",
				T = "SUBREDDIT_SURVEY_DISMISSED",
				E = "SUBREDDIT_SURVEY_DISMISS",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				v = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				w = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
		},
		"./src/reddit/actions/subreddit/questions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/GetSubredditQuestions.json"),
				i = r("./src/reddit/actions/subreddit/constants.ts");
			const d = e => async (t, r, {
				gqlContext: i
			}) => {
				var d;
				const a = (await ((e, t) => Object(s.a)(e, {
					...n,
					variables: t
				}))(i(), {
					id: e
				})).body;
				o(t, e, null === (d = a.data) || void 0 === d ? void 0 : d.subredditInfoById)
			};

			function o(e, t, r) {
				const s = null == r ? void 0 : r.answerableQuestions,
					n = null == r ? void 0 : r.contentRatingSurvey,
					d = null == r ? void 0 : r.communityProgressModule;
				(s || n || d) && e({
					type: i.y,
					payload: {
						id: t,
						questions: s,
						survey: n,
						progressModule: d
					}
				})
			}
		},
		"./src/reddit/actions/subredditRules/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			}));
			const s = "SUBREDDIT__RULES_LOADED",
				n = "SUBREDDIT__RULES_PENDING",
				i = "SUBREDDIT__RULES_FAILED",
				d = "SUBREDDIT__RULE_ADDED",
				o = "SUBREDDIT__RULE_EDITED",
				a = "SUBREDDIT__RULE_REMOVED",
				c = "SUBREDDIT__RULES_REORDERED"
		},
		"./src/reddit/actions/subredditSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "j", (function() {
				return U
			})), r.d(t, "i", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/invert.js"),
				i = r.n(n),
				d = r("./node_modules/lodash/pick.js"),
				o = r.n(d),
				a = r("./node_modules/lodash/xor.js"),
				c = r.n(a),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/reddit/endpoints/subreddit/settings.ts"),
				p = r("./src/telemetry/index.ts"),
				f = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/models/User/index.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/subredditSettings.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/selectors/widgets.ts");
			const T = "SUBREDDIT_SETTINGS_LOADED",
				E = Object(l.a)(T),
				x = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				v = Object(l.a)(x),
				w = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				D = Object(l.a)(w),
				C = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: i
				}) => {
					if (!t || !Object(I.S)(s(), t)) {
						const t = await Object(b.c)(n(), e);
						t && t.ok && r(E(t.body))
					}
					if (t && !Object(S.b)(s(), {
							subredditId: t
						})) {
						const e = await Object(m.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								s = Object(O.e)(t.data);
							r(v(s))
						}
					}
				}, A = () => async (e, t, {
					apiContext: r
				}) => {
					const s = Object(h.k)(t());
					s && await e(C(u.gc + Object(_.e)(s)))
				}, k = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", N = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", R = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", P = Object(l.a)(k), L = Object(l.a)(N), G = Object(l.a)(R), U = (e, t, r = {}, n = !1) => async (d, a, {
					apiContext: u,
					gqlContext: l
				}) => {
					d(P());
					const O = a(),
						_ = o()(Object(I.S)(O, e), ...Object.keys(t)),
						h = o()(Object(S.b)(O, {
							subredditId: e
						}), ...Object.keys(r)),
						T = await Object(b.g)(u(), e, t),
						E = Object.keys(r).length > 0;
					let x = !0;
					if (E) {
						x = (await Object(m.b)(l(), e, r)).ok
					}
					if (!T.ok || E && !x) d(G()), d(Object(f.f)({
						kind: j.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: U(e, t, h, void 0)
					})), n && Object(p.a)(Object(g.c)(O, "BE returned an error:"));
					else {
						const o = Object(b.d)(T.body, i()(b.a));
						d(L({
							settings: {
								...o,
								subredditId: e
							},
							idCardWidgetId: Object(y.c)(O, {
								subredditId: e
							})
						})), E && d(D({
							notificationSettings: r,
							subredditId: e
						}));
						const a = {};
						n && 0 === c()(Object.keys(t), Object.keys(_)).length && (a.buttonText = s.fbt._("Undo", null, {
							hk: "1Gskii"
						}), a.buttonAction = U(e, _, h, n)), d(Object(f.f)({
							kind: j.b.SuccessCommunity,
							text: s.fbt._("Subreddit settings updated successfully", null, {
								hk: "2fmdlZ"
							}),
							...a
						}))
					}
				}, B = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					(await Object(b.e)(i(), e, t)).ok ? r(Object(f.f)({
						kind: j.b.SuccessCommunity,
						text: s.fbt._("Test message was sent to your inbox", null, {
							hk: "1ZtKzO"
						})
					})) : r(Object(f.f)({
						kind: j.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						})
					}))
				}
		},
		"./src/reddit/actions/subredditWelcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return x
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/telemetry/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GetSubredditWelcomeMessage.json"),
				l = r("./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json");
			const b = e => {
				if (e) return {
					...e
				}
			};
			var p = r("./src/reddit/helpers/trackers/welcomeMessage.ts"),
				f = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				m = r("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/selectors/welcomeMessage.ts");
			const I = () => async e => {
				await e(Object(d.g)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, S = e => async (t, r, {
				gqlContext: s
			}) => {
				const n = r(),
					i = Object(O.d)(n);
				if (!i) return;
				const d = await ((e, t) => Object(c.a)(e, {
					...u,
					variables: t
				}))(s(), {
					subredditName: i
				});
				if (d.ok) {
					const r = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoByName) || void 0 === r ? void 0 : r.welcomeMessage;
						return b(s)
					})(d.body);
					r && t(x({
						subredditId: e,
						welcomeMessage: r
					}))
				}
			}, h = e => async (t, r) => {
				var s;
				const c = r();
				if (!Object(j.K)(c)) return void(await t(Object(i.i)()));
				const u = Object(_.a)(c, e),
					l = (null == u ? void 0 : u.isEnabled) && (null == u ? void 0 : u.isRenderedOnJoin),
					b = (null === (s = Object(g.P)(c, {
						subredditId: e
					})) || void 0 === s ? void 0 : s.length) > 0,
					O = Object(g.bb)(c, {
						subredditId: e
					}),
					I = Object(g.f)(c),
					S = Object(g.q)(c, f.e.Post);
				if (!l || !b || (I || S || O)) return;
				const h = Object(m.a)(c);
				(h === o.Ee.Post || h === o.Ee.Rules) && (Object(n.a)(Object(p.d)()(c)), await t(Object(d.h)(a.a.SUBREDDIT_WELCOME_MESSAGE)))
			}, y = e => async (t, r) => {
				let s = r(),
					n = Object(_.a)(s, e);
				n || (await t(S(e)), s = r(), n = Object(_.a)(s, e)), n && await t(Object(d.h)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, T = (e, t, r) => async (s, n, {
				gqlContext: i
			}) => {
				const d = {
						subredditId: e,
						isWelcomeMessageEnabled: t,
						welcomeMessage: {
							markdown: r
						}
					},
					o = await ((e, t) => Object(c.a)(e, {
						...l,
						variables: t
					}))(i(), {
						input: d
					});
				if (o.ok) {
					const t = (e => {
						var t, r;
						const s = null === (r = null === (t = null == e ? void 0 : e.data.updateSubredditSettings) || void 0 === t ? void 0 : t.subreddit) || void 0 === r ? void 0 : r.welcomeMessage;
						return b(s)
					})(o.body);
					t && s(x({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, E = "SUBREDDIT_WELCOME_MESSAGE__LOADED", x = Object(s.a)(E)
		},
		"./src/reddit/actions/tags/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "t", (function() {
				return s
			})), r.d(t, "j", (function() {
				return n
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "q", (function() {
				return d
			})), r.d(t, "s", (function() {
				return o
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "v", (function() {
				return f
			})), r.d(t, "w", (function() {
				return m
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "D", (function() {
				return h
			})), r.d(t, "y", (function() {
				return y
			})), r.d(t, "C", (function() {
				return T
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "B", (function() {
				return x
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "i", (function() {
				return k
			}));
			const s = "TAGS__REQUESTED",
				n = "TAGS__AVAILABLE_LOADED",
				i = "TAGS__LOADED",
				d = "TAGS__FAILURE",
				o = "TAGS__RELEVANCE_LOADED",
				a = "TAGS__CREATE_REQUESTED",
				c = "TAGS__CREATE_SUCCESS",
				u = "TAGS__CREATE_FAILURE",
				l = "TAGS__DELETE_REQUESTED",
				b = "TAGS__DELETE_SUCCESS",
				p = "TAGS__DELETE_FAILURE",
				f = "TAGS__UPDATE_STATE_REQUESTED",
				m = "TAGS__UPDATE_STATE_SUCCESS",
				O = "TAGS__UPDATE_STATE_FAILURE",
				g = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				_ = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				S = "TAGS__OPTION_SELECTED",
				h = "TAGS__SUGGESTED_OPTION_SELECTED",
				y = "TAGS__OPTION_DESELECTED",
				T = "TAGS__SUGGESTED_OPTION_DESELECTED",
				E = "TAGS__INPUT_CHANGED",
				x = "TAGS__SUGGESTED_INPUT_CHANGED",
				v = "GLOBAL__TAGS__LOADED",
				w = "CREATION__TAGS_INPUT_CHANGED",
				D = "CREATION__TAGS_OPTION_SELECTED",
				C = "CREATION__TAGS_OPTION_DESELECTED",
				A = "CREATION__PRIMARY_TAG_SELECTED",
				k = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return A
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "l", (function() {
				return R
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "a", (function() {
				return q
			})), r.d(t, "f", (function() {
				return F
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return V
			})), r.d(t, "d", (function() {
				return z
			})), r.d(t, "b", (function() {
				return H
			})), r.d(t, "n", (function() {
				return K
			})), r.d(t, "c", (function() {
				return Y
			})), r.d(t, "o", (function() {
				return X
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/tags/constants.ts"),
				d = r("./src/reddit/actions/toaster.ts");
			const o = e => {
				const {
					subredditInfoById: t
				} = e, r = {
					global: {},
					[t.id]: {}
				};
				t.availableTags && t.availableTags.edges.reduce((e, {
					node: t
				}) => (e[t.subreddit && t.subreddit.id || "global"][t.id] = t, e), r);
				const s = {
					[t.id]: {}
				};
				t.secondaryTags && t.secondaryTags.edges.reduce((e, {
					node: r
				}) => (e[t.id][r.tag.id] = r, e), s);
				const n = {
					[t.id]: {}
				};
				return t.suggestedTags && t.suggestedTags.edges.reduce((e, {
					node: r
				}) => (e[t.id][r.tag.id] = r, e), n), {
					primaryTag: t.primaryTag,
					globalSubredditTags: r.global,
					subredditScopedTags: {
						[t.id]: r[t.id]
					},
					subredditId: t.id,
					itemTags: s,
					suggestedItemTags: n,
					geoPlace: t.geoPlace
				}
			};
			var a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/CreateSubredditTags.json");
			r("./src/redditGQL/operations/FetchGlobalTags.json");
			var u = r("./src/redditGQL/operations/FetchSubredditTags.json");
			const l = (e, {
				subredditId: t,
				pageSize: r = 1050,
				after: s,
				includeAvailableTags: n
			}) => Object(a.a)(e, {
				...u,
				variables: {
					subredditId: t,
					pageSize: r,
					after: s,
					includeAvailableTags: n
				}
			});
			var b = r("./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json");
			var p = r("./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json");
			var f = r("./src/redditGQL/operations/UpdateSubredditPrimaryTag.json");
			var m = r("./src/reddit/helpers/tags/index.ts"),
				O = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				g = r("./src/reddit/models/Tags/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/reducers/tags/selected/index.ts"),
				I = r("./src/reddit/selectors/tags.ts");
			Object(n.a)(i.e);
			const S = Object(n.a)(i.t),
				h = Object(n.a)(i.r),
				y = Object(n.a)(i.s),
				T = Object(n.a)(i.q),
				E = Object(n.a)(i.l),
				x = Object(n.a)(i.m),
				v = Object(n.a)(i.k),
				w = Object(n.a)(i.v),
				D = Object(n.a)(i.w),
				C = Object(n.a)(i.u),
				A = Object(n.a)(i.z),
				k = Object(n.a)(i.D),
				N = Object(n.a)(i.y),
				R = Object(n.a)(i.C),
				P = Object(n.a)(i.x),
				L = Object(n.a)(i.B),
				G = (Object(n.a)(i.d), Object(n.a)(i.c), Object(n.a)(i.b), Object(n.a)(i.g)),
				U = Object(n.a)(i.h),
				B = Object(n.a)(i.f),
				q = Object(n.a)(i.a),
				F = Object(n.a)(i.i),
				M = Object(n.a)(i.A),
				Q = (e, t, r = !1) => async (n, i, {
					gqlContext: a
				}) => {
					const c = i();
					n(S());
					const u = await l(a(), {
							subredditId: e
						}),
						b = u.body;
					if (u.ok && b.data.subredditInfoById.secondaryTags && b.data.subredditInfoById.availableTags && b.data.subredditInfoById.suggestedTags) n(h(o(b.data))), r && O.h(i(), e, {
						context: t
					});
					else {
						n(T());
						const i = r ? "topics_save" : "topics_load";
						O.g(c, e, i, {
							context: t
						}), n(Object(d.f)(Object(d.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
							hk: "2DUkWX"
						}), j.b.Error, s.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), Q(e, t, r))))
					}
				}, J = e => async (t, r, {
					gqlContext: n
				}) => {
					t(S());
					const i = await l(n(), {
						subredditId: e
					});
					if (i.ok) {
						const e = i.body;
						t(y(o(e.data)))
					} else t(T()), t(Object(d.f)(Object(d.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), y(e))))
				}, W = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					if (!t.length) return null;
					r(E());
					const i = t.map(t => ({
							subredditId: e,
							...t
						})),
						d = await ((e, t) => Object(a.a)(e, {
							...c,
							variables: t
						}))(n(), {
							input: i
						}),
						o = d.body && d.body.data || null;
					return d.ok && o && o.createSubredditTags && o.createSubredditTags.ok ? (r(x()), o.createSubredditTags.createdTags || []) : (r(v()), null)
				}, $ = (e, t, r = []) => async (s, n, {
					gqlContext: i
				}) => {
					if (!t.length && !r.length) return;
					s(w());
					const d = n(),
						c = Object(I.d)(d, {
							subredditId: e
						}),
						u = Object(I.o)(d, {
							itemId: e
						}),
						l = Object(I.z)(d, {
							itemId: e
						}),
						p = new Set;
					for (const e of t)
						if (e.state === g.d.NONE && c[e.tagId] && !l[e.tagId]) {
							!!r.find(t => t.state === g.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
						} for (const e of r)
						if (e.state === g.d.NONE && c[e.tagId] && !u[e.tagId]) {
							!!t.find(t => t.state === g.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
						} const f = await ((e, t) => Object(a.a)(e, {
							...b,
							variables: {
								...t,
								deleteTags: 0 !== t.deleteTagsInput.length,
								pageSize: 1050
							}
						}))(i(), {
							deleteTagsInput: [...p].map(t => ({
								tagId: t,
								subredditId: e
							})),
							updateTagStatesInput: {
								subredditId: e,
								suggestedTagStates: r,
								tagStates: t
							}
						}),
						m = f.body && f.body.data || null;
					f.ok && m && m.updateSubredditTagStates && m.updateSubredditTagStates.ok && m.updateSubredditTagStates.subreddit ? s(D(o({
						subredditInfoById: m.updateSubredditTagStates.subreddit
					}))) : s(C())
				}, V = (e, t, r = !1) => async (n, i, o) => {
					const a = i(),
						c = Object(I.q)(a, {
							subredditId: e
						}),
						u = Object(I.C)(a, {
							subredditId: e
						});
					let l = c.filter(e => !!e.id && !!e.action).map(e => ({
						tagId: e.id,
						state: e.action === _.a.ADD ? g.d.TAGGED : g.d.NONE
					}));
					if (u.length > 0) {
						const t = await W(e, u)(n, i, o);
						l = l.concat((t || []).map(e => ({
							tagId: e.id,
							state: g.d.TAGGED
						})))
					}
					await $(e, l)(n, i, o), Object(I.A)(i()) ? n(Object(d.f)(Object(d.e)(s.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
						hk: "2Jbh5V"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), V(e, t, r)))) : r && n(Object(d.f)(Object(d.e)(s.fbt._("Community topics saved!", null, {
						hk: "3wtajT"
					}), j.b.SuccessCommunity)))
				}, z = (e, t, r) => async (r, n, i) => {
					const o = {
						state: g.d.TAGGED
					};
					if (Object(m.b)(t)) {
						const s = await W(e, [{
							text: t.displayText,
							type: g.c.CLASSIFICATION
						}])(r, n, i);
						s && 1 === s.length && (o.tagId = s[0].id)
					} else {
						if (!t.id) return void r(Object(d.f)(Object(d.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), j.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await $(e, [], [o])(r, n, i): r(Object(d.f)(Object(d.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), j.b.Error)))
				}, H = (e, t, r) => async (s, n, i) => {
					t.id ? await $(e, [], [{
						state: g.d.NONE,
						tagId: t.id
					}])(s, n, i) : s(Q(e, r, !1))
				}, K = (e, t, r, n, i = !1) => async (o, c, {
					gqlContext: u
				}) => {
					if (!(await ((e, t) => Object(a.a)(e, {
							...p,
							variables: t
						}))(u(), {
							input: {
								tagStatesRelevance: t,
								suggestedTagStatesRelevance: r
							}
						})).ok) return o(Object(d.f)(Object(d.e)(s.fbt._("Whoops! Unable to update topics relevance status", null, {
						hk: "17akdT"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1wqK2v"
					}), K(e, t, r, n, i)))), void o(J(e));
					if (i)
						for (const e of r) O.f(c(), e, {
							context: n
						});
					o(Object(d.f)(Object(d.e)(s.fbt._("Successfully updated topics relevance!", null, {
						hk: "3KIYlz"
					}), j.b.SuccessCommunity, s.fbt._("Undo", null, {
						hk: "34apPL"
					}), K(e, t.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), r.map(e => ({
						...e,
						isRelevant: !e.isRelevant
					})), n, i)))), o(J(e))
				}, Y = e => async (t, r) => {
					t(M({
						itemTagsState: {
							[e]: Object(I.o)(r(), {
								itemId: e
							})
						}
					}))
				}, X = (e, t, r = !0) => async (n, i, {
					gqlContext: o
				}) => {
					const c = Object(I.x)(i(), {
						subredditId: e
					});
					if ((null == c ? void 0 : c.id) === t.tagId && t.state === g.d.TAGGED) return;
					n(G());
					const u = await ((e, t) => Object(a.a)(e, {
							...f,
							variables: t
						}))(o(), {
							input: {
								subredditId: e,
								primaryTagState: t
							}
						}),
						l = u.body && u.body.data || null;
					u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (n(U((e => {
						const {
							secondaryTags: t,
							id: r,
							primaryTag: s
						} = e.updateSubredditTagStates.subreddit, n = t && t.edges || [];
						return {
							subredditId: r,
							primaryTagId: s && s.tag.id || null,
							secondaryTags: n.reduce((e, {
								node: t
							}) => (e[t.tag.id] = t, e), {})
						}
					})(l))), r && n(Object(d.f)(Object(d.e)(s.fbt._("Successfully updated primary topic!", null, {
						hk: "1NL90v"
					}), j.b.SuccessCommunity)))) : (n(B()), n(Object(d.f)(Object(d.e)(s.fbt._("Whoops! Unable to update primary topic", null, {
						hk: "3ilZqp"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1dRYXW"
					}), X(e, t)))))
				}
		},
		"./src/reddit/constants/graphql.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Card = "CARD", e.Classic = "CLASSIC", e.Compact = "COMPACT"
				}(s || (s = {}))
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return I
			})), r.d(t, "n", (function() {
				return S
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "g", (function() {
				return D
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "m", (function() {
				return P
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				d = r("./src/redditGQL/operations/CancelPrediction.json"),
				o = r("./src/redditGQL/operations/ChangePrediction.json"),
				a = r("./src/redditGQL/operations/ChangePredictionVote.json"),
				c = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				u = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				l = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				b = r("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				p = r("./src/redditGQL/operations/GetPredictionToken.json"),
				f = r("./src/redditGQL/operations/GetTournaments.json"),
				m = r("./src/redditGQL/operations/GetTournamentsBaseInfo.json"),
				O = r("./src/redditGQL/operations/ResolvePrediction.json"),
				g = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				_ = r("./src/redditGQL/operations/VotePrediction.json");
			const I = async (e, {
				postId: t,
				optionId: r,
				coinPackageId: i,
				price: d
			}) => {
				var o;
				const a = await Object(s.a)(e, {
					..._,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: i,
							price: d
						}
					}
				});
				if (!Object(n.c)(a) || a.error || !(null === (o = a.body.data.votePrediction) || void 0 === o ? void 0 : o.ok)) throw new Error("Failed to make prediction");
				return a.body.data.votePrediction.poll
			}, S = (e, {
				postId: t,
				optionId: r
			}) => Object(s.a)(e, {
				...O,
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			});
			var h;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(h || (h = {}));
			const y = (e, {
					subredditId: t,
					period: r,
					top: n,
					includeCurrentRank: i,
					tournamentId: d
				}) => Object(s.a)(e, {
					...g,
					variables: {
						subredditId: t,
						period: r,
						top: n,
						includeCurrentRank: i,
						tournamentId: d
					}
				}),
				T = (e, t) => Object(s.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				E = async (e, t) => {
					const r = await Object(s.a)(e, {
						...f,
						variables: t
					});
					if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
					return r.body.data.subredditInfoByName.predictionTournaments || []
				}, x = async (e, t) => {
					const r = await Object(s.a)(e, {
						...m,
						variables: t
					});
					if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
					return r.body.data.subredditInfoByName.predictionTournaments || []
				}, v = (e, t) => Object(s.a)(e, {
					...i,
					variables: {
						input: t
					}
				}), w = (e, t) => Object(s.a)(e, {
					...j,
					variables: {
						input: t
					}
				}), D = (e, t) => Object(s.a)(e, {
					...u,
					variables: {
						input: t
					}
				}), C = (e, t) => Object(s.a)(e, {
					...l,
					variables: t
				}), A = (e, t) => Object(s.a)(e, {
					...p,
					variables: t
				}), k = async (e, t) => {
					const r = await Object(s.a)(e, {
						...o,
						variables: {
							input: t
						}
					});
					if (!Object(n.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return r.body.data.changePrediction.poll
				}, N = async (e, {
					postId: t
				}) => {
					var r, i;
					const o = await Object(s.a)(e, {
						...d,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(n.c)(o) || !(null === (r = o.body.data.cancelPrediction) || void 0 === r ? void 0 : r.ok) || !(null === (i = o.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return o.body.data.cancelPrediction.poll
				}, R = async (e, t) => {
					var r, i;
					const d = await Object(s.a)(e, {
						...a,
						variables: {
							input: t
						}
					});
					if (!Object(n.c)(d) || !(null === (r = d.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return d.body.data.changePredictionVote.poll
				}, P = async (e, t) => {
					const r = await Object(s.a)(e, {
						...b,
						variables: t
					});
					return !!Object(n.c)(r) && r.body.data.identity.isPredictionCreationAllowed
				}
		},
		"./src/reddit/endpoints/gold/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return O
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/CreateCustomEmoji.json"),
				i = r("./src/redditGQL/operations/DeleteCustomEmoji.json"),
				d = r("./src/redditGQL/operations/EnablePowerups.json"),
				o = r("./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json"),
				a = r("./src/redditGQL/operations/ReallocatePowerups.json"),
				c = r("./src/redditGQL/operations/RedditorPowerups.json"),
				u = r("./src/redditGQL/operations/SubredditPowerups.json"),
				l = r("./src/redditGQL/operations/SubredditPowerupsFull.json"),
				b = r("./src/redditGQL/operations/SubredditsPowerups.json"),
				p = r("./src/redditGQL/operations/UpdatePowerupsSettings.json"),
				f = r("./src/redditGQL/operations/UserPowerups.json"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts");
			const O = async (e, t) => {
				const r = await Object(s.a)(e, {
					...d,
					variables: {
						subredditId: t
					}
				});
				if (!r.ok || !r.body.data.enablePowerups.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Error enabling powerups for given subreddit")
				}
			}, g = e => Object(s.a)(e, f, {
				traceRequestName: "user_powerups"
			}), j = (e, t) => Object(s.a)(e, {
				variables: {
					id: t
				},
				...c
			}, {
				traceRequestName: "redditor_powerups"
			}), _ = (e, t, r) => Object(s.a)(e, {
				...u,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups"
			}), I = (e, t, r) => Object(s.a)(e, {
				...l,
				variables: {
					subredditId: t,
					includeIdentity: r
				}
			}, {
				traceRequestName: "subreddit_powerups_full"
			}), S = async (e, t) => {
				const r = await Object(s.a)(e, {
					...b,
					variables: {
						subredditsIds: t
					}
				});
				if (!r.ok) {
					const {
						errors: e
					} = r.body, t = Object(m.a)(e);
					throw new Error(t || "Unable to fetch subreddit powerups")
				}
				return r.body.data.subredditsInfoByIds
			}, h = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}), y = (e, t) => Object(s.a)(e, {
				...o,
				variables: t
			}), T = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			}), E = (e, t) => Object(s.a)(e, {
				...i,
				variables: t
			}), x = async (e, t, r) => {
				const n = {
					input: {
						subredditId: t,
						powerupsSettings: {
							benefitSettings: r
						}
					}
				};
				return Object(s.a)(e, {
					...p,
					variables: n
				})
			}
		},
		"./src/reddit/endpoints/gold/topAwarded.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/TopAwardedPosts.json"),
				i = r("./src/redditGQL/operations/TopAwardersLeaderboard.json");
			const d = (e, t) => Object(s.a)(e, {
					...n,
					variables: {
						...t,
						includeListingMetadata: !!t.includeListingMetadata
					}
				}),
				o = (e, t) => Object(s.a)(e, {
					...i,
					variables: t
				})
		},
		"./src/reddit/endpoints/governance/posts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function i(e, t, r) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/polls/${t}?postIds=${r.join(",")}`
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/makeApiRequest/index.ts");

			function n(e, t) {
				return Object(s.a)(e, {
					type: "json",
					...t
				}).then(e => {
					if (e.ok) return {
						body: e.body,
						ok: !0,
						status: e.status
					};
					return {
						error: e.error && e.error.fields && e.error.fields[0] ? e.error.fields[0].msg : {
							...e.body,
							code: e.status
						},
						ok: !1,
						status: e.status
					}
				})
			}
		},
		"./src/reddit/endpoints/messages/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/redditGQL/operations/ReportMessage.json"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const u = (e, t) => Object(i.a)(Object(o.a)(e, [a.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/compose`),
					method: n.ib.POST,
					data: t
				}),
				l = (e, t) => Object(d.a)(e, {
					...s,
					variables: t
				})
		},
		"./src/reddit/endpoints/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				c = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const u = (e, t, r) => Object(i.a)(e, {
					endpoint: Object(c.a)(Object(a.a)(`${s.a.gatewayUrl}/desktopapi/v1/${t}`)),
					method: n.ib.GET,
					data: {
						moderated_limit: 25,
						...r
					}
				}),
				l = (e, t, r) => Object(i.a)(Object(d.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/${t}`,
					method: n.ib.POST,
					type: "json",
					data: r
				})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.ib.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/page/subredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return S
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/isAdHocMultireddit/index.ts"),
				d = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/performanceTimings/index.tsx"),
				u = r("./src/reddit/constants/graphql.ts"),
				l = r("./src/reddit/constants/page.ts"),
				b = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = r("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts"),
				m = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/redditGQL/operations/SubredditPage.json");
			const I = (e, t, r) => {
					const {
						after: s,
						geo_filter: n,
						isMobile: o,
						layout: a,
						limit: c,
						recentPostIds: b,
						sort: f,
						t: m
					} = r, O = Object(j.T)(e), _ = Object(g.p)(e), I = Object(i.a)(t), S = Object(d.a)(t), h = {
						name: t,
						includeIdentity: O && !e.user.account,
						adContext: {
							layout: a ? a.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: S,
						includeRecents: S && b && b.length > 0 || !1,
						includeTrending: S,
						isAdHocMulti: I,
						isAll: t === l.d.All,
						isPopular: t === l.d.Popular,
						recentPostIds: b || [],
						subredditNames: I ? t.split("+") : []
					};
					return f && (h.sort = f.toUpperCase()), m && (h.range = m.toUpperCase()), o ? h.pageSize = Object(p.a)(a) : c && (h.pageSize = c), _ && _.ad && (h.forceAds = {
						ad: _.ad
					}), (_ && _.geo_filter || n) && (h.region = _ && _.geo_filter || n), s && (h.after = btoa(s)), h
				},
				S = async (e, t, r) => {
					const s = Date.now(),
						i = await ((e, t) => Object(a.a)(e, {
							..._,
							variables: t
						}))(e, t),
						d = Date.now();
					if (!i.ok || !i.body) return i;
					const o = i.body,
						u = Date.now(),
						l = Object(f.a)(o.data),
						b = Date.now(),
						p = [{
							duration: d - s,
							logKeyType: c.a.gqlFetchTiming
						}, {
							duration: b - u,
							logKeyType: c.a.gqlNormalizationTiming
						}];
					return Object(c.h)({
						name: n.r.SUBREDDIT,
						isLoggedIn: r,
						metrics: p
					}), {
						...i,
						ok: !!o.data.subredditInfoByName && !Object(O.j)(o.data.subredditInfoByName),
						status: h(o.data),
						body: l
					}
				}, h = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(O.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === O.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === O.c.GoldOnly || e.subredditInfoByName.forbiddenReason === O.c.Private || e.subredditInfoByName.forbiddenReason === O.c.Quarantined) return 403
					}
					return 200
				}, y = ({
					recentPostIds: e,
					...t
				}) => e && e.length ? {
					...t,
					recentPostIds: e.join(",")
				} : t;
			t.a = (e, t, r) => Object(o.a)(e, {
				endpoint: Object(b.a)(Object(m.a)(`${s.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: n.ib.GET,
				data: r && y(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "a", (function() {
				return N
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/omit.js"),
				i = r.n(n),
				d = r("./src/config.ts"),
				o = r("./src/lib/addQueryParams/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/constants/headers.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/makeRequest/index.ts"),
				b = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				p = r("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = r("./src/reddit/featureFlags/useProductionStreamingApi.ts"),
				m = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				O = r("./src/reddit/models/PostCreationForm/index.ts"),
				g = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function _() {
				return Object(f.b)() ? "https://strapi.reddit.com" : d.a.streamingApiUrl
			}
			const I = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${_()}${r}`,
					method: a.ib.GET,
					headers: i()(e.headers(), [c.c, c.b]),
					timeoutMs: void 0
				}).then(C)
			}, S = (e, {
				subredditId: t,
				options: r
			}) => Object(u.a)(e, {
				...j,
				variables: {
					feedContext: {
						subredditId: t
					},
					first: null == r ? void 0 : r.pageSize,
					after: null == r ? void 0 : r.cursor
				}
			}), h = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}`,
				method: a.ib.GET,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), y = async (e, t, r) => {
				let s;
				s = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const n = Object(o.a)(s, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${_()}${n}`,
					method: a.ib.GET,
					headers: i()(e.headers(), [c.c, c.b])
				}).then(C)
			}, T = async e => Object(l.b)({
				endpoint: `${_()}/recommended_viewer_subreddits`,
				method: a.ib.GET,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), E = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/vote/${A(r)}`,
				method: a.ib.POST,
				headers: i()(e.headers, [c.c, c.b])
			}).then(C), x = async (e, t) => Object(l.b)({
				endpoint: `${_()}/videos/${t}/heartbeat`,
				method: a.ib.POST,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), v = async (e, t, r, s) => {
				const n = r.rteState;
				if (!n) return Promise.reject(new Error("Editor state is undefined"));
				const i = p.a.getRawText(n);
				return i ? w(e, t, i).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(m.a)(e.body.data.r2_comment, s),
							media: D(n)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, w = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/comment_v2`,
				method: a.ib.POST,
				headers: i()(e.headers, [c.c, c.b]),
				data: {
					text: r
				},
				type: "json"
			}).then(C), D = e => ({
				type: "rtjson",
				richtextContent: {
					document: p.a.toRichTextJSON(e).document
				},
				rteMode: O.i.RICH_TEXT
			}), C = e => {
				if (e.ok) return {
					...e,
					error: void 0
				}; {
					const t = {
						type: 404 === e.status ? a.H.NOT_FOUND_ERROR : a.H.SERVER_ERROR
					};
					return 429 === e.status && (t.fields = [{
						field: "",
						msg: s.fbt._("Try again later", null, {
							hk: "3BBLIU"
						})
					}]), {
						...e,
						error: t
					}
				}
			}, A = e => e === g.a.upvoted ? "up" : e === g.a.downvoted ? "down" : "unset", k = async (e, t, r) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}`,
				method: a.ib.PUT,
				headers: i()(e.headers, [c.c, c.b]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(C), N = async (e, t) => Object(l.b)({
				endpoint: `${_()}/broadcasts/${t}/auto_mute_status`,
				method: a.ib.GET,
				headers: i()(e.headers, [c.c, c.b])
			}).then(C)
		},
		"./src/reddit/endpoints/subreddit/about.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/makeGqlRequest/index.ts"),
				n = r("./src/redditGQL/operations/SubredditAbout.json");
			t.a = (e, t, r) => Object(s.a)(e, {
				...n,
				variables: {
					subredditName: t,
					includeSubreddit: r
				}
			})
		},
		"./src/reddit/endpoints/subreddit/notificationSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/redditGQL/operations/FetchSubredditsNotificationSettings.json"),
				n = r("./src/redditGQL/operations/UpdateSubredditNotificationSettings.json"),
				i = r("./src/lib/makeGqlRequest/index.ts");
			const d = (e, t) => Object(i.a)(e, {
					...s,
					variables: {
						subredditIds: [t]
					}
				}),
				o = (e, t, r) => Object(i.a)(e, {
					...n,
					variables: {
						input: {
							...r,
							subredditId: t
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/rules.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return y
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/camelCase.js"),
				n = r.n(s),
				i = r("./node_modules/lodash/mapKeys.js"),
				d = r.n(i),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/redditGQL/operations/SubredditRules.json"),
				b = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				f = r("./src/reddit/models/Rule/index.ts");
			const m = ({
					rules: e
				}) => ({
					rules: e.map(e => ({
						...d()(e, (e, t) => n()(t)),
						kind: "link" === e.kind ? "post" : e.kind
					}))
				}),
				O = (e, t) => Object(c.a)(e, {
					...l,
					variables: {
						subredditName: t
					}
				}).then(e => {
					var t, r, s;
					return e.ok && e.body && (e => Object.keys(e).length > 0)(e.body) && (null === (s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit) || void 0 === s ? void 0 : s.rules) ? e.body = Object(p.a)(e.body.data.subreddit.rules) : e.body = {
						rules: []
					}, e
				}),
				g = (e, t) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.ib.GET
				}).then(e => (e.ok && e.body.rules && (e.body = m(e.body)), e)),
				j = e => e.ok ? (e.body = Object(f.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				_ = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/add_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), I = async (e, t, r, s) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/update_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r.rule,
						kind: r.kind === f.b.post ? "link" : r.kind,
						violation_reason: r.reason,
						description: r.description,
						old_short_name: s,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), S = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/remove_subreddit_rule`,
					method: o.ib.POST,
					data: {
						r: t,
						short_name: r,
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e)), h = e => e.map(e => encodeURIComponent(e)).join(), y = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.ib.POST,
					data: {
						r: t,
						new_rule_order: h(r),
						api_type: "json",
						raw_json: 1
					}
				}).then(e => j(e))
		},
		"./src/reddit/helpers/filterListingResponse/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/findLastIndex.js"),
				n = r.n(s),
				i = r("./src/reddit/models/WhitelistStatus/index.ts"),
				d = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/index.ts");
			const a = (e, {
				subreddits: t,
				profiles: r
			}) => {
				const s = t[e.belongsTo.id] || r[e.belongsTo.id];
				return !e.isNSFW && s && i.a.has(s.wls || i.b.NO_ADS)
			};
			t.a = (e, t, {
				postIds: r,
				posts: s,
				subreddits: i,
				profiles: c,
				...u
			}) => {
				const l = e.listings.postOrder.ids[t],
					b = (r || []).filter(e => !l || !l.includes(e)),
					p = l.map(t => e.posts.models[t]),
					f = p.length - (n()(p, e => e.isSponsored) + 1),
					m = b.map(e => s[e]);
				let O;
				const g = [],
					j = {
						subreddits: i,
						profiles: c
					};
				for (let n = 0; n < m.length; n++) {
					const r = m[n];
					let s = !1;
					if (r.isSponsored) {
						const e = n > 0 && m[n - 1],
							t = n < m.length - 1 && m[n + 1];
						e && a(e, j) && t && a(t, j) && (s = !0)
					}
					r.isSponsored && s && (null == O && f + n >= 3 || n - O >= 3) ? (O = n, g.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...d.defaults(e),
						listing: d.listing(e, t)
					}) : g.push(r.id)
				}
				return {
					...u,
					subreddits: i,
					profiles: c,
					posts: s,
					postIds: g
				}
			}
		},
		"./src/reddit/helpers/getPostLimitForMobile/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/constants/postLayout.ts");

			function n(e) {
				return e ? s.c[e] : s.f
			}
		},
		"./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/models/Flair/index.ts");

			function n(e) {
				switch (e) {
					case s.h.LEFT:
						return s.b.Left;
					case s.h.RIGHT:
						return s.b.Right;
					default:
						return null
				}
			}

			function i({
				isEnabled: e = !1,
				position: t
			}) {
				return {
					isEnabled: e,
					position: n(t)
				}
			}
			t.a = ({
				postFlairSettings: e
			}) => ({
				...e && {
					displaySettings: e && i(e)
				}
			})
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return B
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/env/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/models/Post/index.ts"),
				o = r("./src/reddit/models/RichTextJson/index.ts"),
				a = r("./src/reddit/models/Subreddit/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				I = r("./src/reddit/models/Flair/index.ts"),
				S = r("./src/reddit/models/Widgets/index.ts"),
				h = e => {
					const {
						rules: t,
						widgets: r,
						name: s
					} = e;
					if (!r) return null;
					const n = {
							items: {},
							layout: {
								topbar: {
									order: []
								},
								sidebar: {
									order: []
								},
								moderatorWidget: "",
								idCardWidget: ""
							}
						},
						{
							orderedSidebarWidgets: i,
							orderedTopbarWidgets: d
						} = r;
					for (const o of d) {
						if (o.__typename !== S.d.Menu) break;
						n.items[o.id] = y(o), n.layout.topbar.order.push(o.id)
					}
					for (const o of i) switch (o.__typename !== S.c.IdCard && o.__typename !== S.c.Moderators && n.layout.sidebar.order.push(o.id), o.__typename) {
						case S.c.Button:
							n.items[o.id] = T(o);
							break;
						case S.c.Calendar:
							n.items[o.id] = E(o);
							break;
						case S.c.CommunityList:
							n.items[o.id] = x(o);
							break;
						case S.c.Custom:
							n.items[o.id] = v(o);
							break;
						case S.c.IdCard:
							n.items[o.id] = w(o), n.layout.idCardWidget = o.id;
							break;
						case S.c.Image:
							n.items[o.id] = D(o);
							break;
						case S.c.Moderators:
							n.items[o.id] = C(o), n.layout.moderatorWidget = o.id;
							break;
						case S.c.PostFlair:
							n.items[o.id] = N(o);
							break;
						case S.c.SubredditRules:
							n.items[o.id] = R({
								widget: o,
								rules: t,
								name: s
							});
							break;
						case S.c.TextArea:
							n.items[o.id] = P(o)
					}
					return n
				};
			const y = e => ({
					...L(e),
					kind: S.j.Menu,
					showWiki: e.isWikiShown,
					data: e.menus
				}),
				T = e => ({
					...L(e),
					kind: S.i.Button,
					shortName: e.shortName,
					description: e.description.markdown,
					descriptionHtml: null,
					buttons: e.buttons.map(e => {
						var t, r, s, n, i, d, o;
						return {
							text: e.text,
							hoverState: e.hoverState.kind === S.e.Image ? {
								kind: S.k.Image,
								url: (null === (t = e.hoverState.media.source) || void 0 === t ? void 0 : t.url) || "",
								height: (null === (r = e.hoverState.media.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
								width: (null === (s = e.hoverState.media.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
							} : {
								kind: S.k.Text,
								text: e.hoverState.text,
								color: e.hoverState.color,
								fillColor: e.hoverState.fillColor,
								textColor: e.hoverState.textColor
							},
							...e.kind === S.e.Image ? {
								kind: S.k.Image,
								linkUrl: e.media.linkUrl,
								url: (null === (n = e.media.source) || void 0 === n ? void 0 : n.url) || "",
								height: (null === (i = e.media.source) || void 0 === i ? void 0 : i.dimensions.height) || 0,
								width: (null === (d = e.media.source) || void 0 === d ? void 0 : d.dimensions.width) || 0
							} : {
								kind: S.k.Text,
								url: (null === (o = e.media.source) || void 0 === o ? void 0 : o.url) || "",
								color: e.color,
								fillColor: e.fillColor,
								textColor: e.textColor
							}
						}
					})
				}),
				E = e => ({
					...L(e),
					kind: S.i.Calendar,
					shortName: e.shortName,
					configuration: {
						numEvents: e.eventsCount,
						showDate: e.isDateShown,
						showDescription: e.isDescriptionShown,
						showLocation: e.isLocationShown,
						showTime: e.isTimeShown
					},
					configuredAtUTC: null,
					data: e.events.map(e => ({
						allDay: e.isAllDay,
						description: e.description.markdown,
						endTime: e.endsAt,
						location: e.location.markdown,
						startTime: e.startsAt,
						title: e.title.markdown
					})),
					googleCalendarId: e.googleCalendarId,
					moderator: null,
					requiresSync: e.isSyncRequired,
					synchronizedAtUTC: null
				}),
				x = e => ({
					...L(e),
					kind: S.i.CommunityList,
					shortName: e.shortName,
					data: e.communities.map(e => ({
						name: e.name,
						type: "subreddit",
						id: e.id,
						bannerBackgroundColor: e.styles.bannerBackgroundColor,
						bannerBackgroundImage: e.styles.bannerBackgroundImage,
						communityIcon: e.styles.icon,
						description: e.publicDescriptionText,
						displayText: e.name,
						subscribers: e.subscribersCount,
						iconUrl: e.styles.icon,
						isSubscribed: e.isSubscribed,
						primaryColor: e.styles.primaryColor,
						isNSFW: e.isNsfw
					}))
				}),
				v = e => ({
					...L(e),
					kind: S.i.Custom,
					shortName: e.shortName,
					text: e.text.markdown,
					css: e.css,
					stylesheetUrl: e.stylesheetUrl,
					height: e.height,
					imageData: e.imageData.map(e => {
						var t, r, s;
						return {
							name: e.name || "",
							url: (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
							height: (null === (r = e.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
							width: (null === (s = e.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
						}
					})
				}),
				w = e => ({
					...L(e),
					kind: S.i.IdCard,
					shortName: e.shortName,
					currentlyViewingCount: e.currentlyViewingCount,
					currentlyViewingText: e.currentlyViewingText,
					description: e.descriptionText,
					subscribersCount: e.subscribersCount,
					subscribersText: e.subscribersText
				}),
				D = e => ({
					...L(e),
					kind: S.i.Image,
					shortName: e.shortName,
					data: e.data.map(e => {
						var t, r, s;
						return {
							linkUrl: e.linkUrl,
							url: (null === (t = e.source) || void 0 === t ? void 0 : t.url) || "",
							height: (null === (r = e.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
							width: (null === (s = e.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
						}
					})
				}),
				C = e => ({
					...L(e),
					kind: S.i.Moderators,
					mods: e.moderators.map(e => ({
						name: e.redditor.name,
						...e.flair ? {
							authorFlairBackgroundColor: e.flair.template.backgroundColor,
							authorFlairRichText: JSON.parse(e.flair.richtext),
							authorFlairText: e.flair.text,
							authorFlairTextColor: e.flair.textColor === I.i.Light ? I.e.Light : I.e.Dark,
							authorFlairType: e.flair.type
						} : {
							authorFlairBackgroundColor: "",
							authorFlairRichText: [],
							authorFlairText: "",
							authorFlairTextColor: I.e.Dark,
							authorFlairType: I.f.Text
						}
					}))
				}),
				A = e => {
					switch (e) {
						case I.g.All:
							return I.a.All;
						case I.g.Text:
							return I.a.Text;
						case I.g.Emoji:
							return I.a.Emoji
					}
				},
				k = e => e === I.i.Light ? I.e.Light : I.e.Dark,
				N = e => ({
					...L(e),
					kind: S.i.PostFlair,
					shortName: e.shortName,
					order: e.templates.map(e => e.id || ""),
					display: e.display,
					templates: e.templates.reduce((e, t) => t.id ? (e[t.id] = {
						allowableContent: A(t.allowableContent),
						backgroundColor: t.backgroundColor,
						cssClass: t.cssClass,
						id: t.id,
						maxEmojis: t.maxEmojis,
						modOnly: t.isModOnly,
						richtext: t.richtext ? JSON.parse(t.richtext) : [],
						text: t.text,
						textColor: k(t.textColor),
						textEditable: t.isEditable,
						type: t.type
					}, e) : e, {})
				}),
				R = ({
					widget: e,
					rules: t,
					name: r
				}) => ({
					...L(e),
					kind: S.i.SubredditRules,
					shortName: e.shortName,
					display: e.display,
					subreddit: r,
					data: t ? Object(_.a)(t).rules : []
				}),
				P = e => ({
					...L(e),
					kind: S.i.Textarea,
					shortName: e.shortName,
					text: e.text.markdown
				}),
				L = e => ({
					id: e.id,
					styles: e.styles
				});
			var G = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				U = r("./src/reddit/helpers/graphql/helpers.ts");
			const B = (e, t, r) => {
				const o = {
						account: null,
						authorFlair: {},
						postIds: [],
						postInstances: {},
						posts: {},
						postFlair: {},
						preferences: null,
						profiles: {},
						recentPostIds: [],
						structuredStyles: {},
						subredditAboutInfo: {},
						subredditPermissions: {},
						subreddits: {},
						token: "",
						trendingSubredditIds: [],
						welcomeMessage: void 0
					},
					a = e => {
						if (Object(d.j)(e) || Object(d.i)(e)) return null;
						if (o.posts[e.id]) return e.id;
						const t = Object(b.f)(e);
						o.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === d.a.Post && r.postInfo && a(r.postInfo);
						let l = t.id;
						if (e.authorFlair && (o.authorFlair[t.belongsTo.id] || (o.authorFlair[t.belongsTo.id] = {}), o.authorFlair[t.belongsTo.id][t.author] = Object(c.a)(e.authorFlair)[0]), Object(d.l)(e)) o.profiles[e.profile.id] || (o.profiles[e.profile.id] = Object(f.a)(e.profile));
						else if (Object(d.n)(e)) o.subreddits[e.subreddit.id] || (o.subreddits[e.subreddit.id] = Object(O.a)(e.subreddit)), o.postFlair[e.subreddit.id] || (o.postFlair[e.subreddit.id] = Object(u.a)(e.subreddit));
						else if (Object(d.h)(e)) {
							const r = Object(b.b)(e);
							if (!r) return null;
							l = r, o.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, o.posts[t.id] || (o.posts[t.id] = {
								...t,
								events: []
							}), o.postInstances[e.id] || (o.postInstances[e.id] = []), o.postInstances[e.id].push(r)
						} else try {
							Object(s.a)(e)
						} catch (p) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(n.b)() || console.warn(t), i.c.captureMessage(t)
						}
						return l && o.postIds.push(l), l
					};
				if (e.forEach(e => a(e)), t) {
					o.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) o.subreddits[e.id] = Object(O.a)(e)
				}
				const l = o.postIds.length - 1;
				return o.token = l >= 0 ? o.postIds[l] : "", r && (o.account = Object(G.a)(r), o.preferences = r.preferences && Object(p.a)(r.preferences, r.interactions) || null), o
			};
			t.a = ({
				adhocMultiredditByNames: e,
				all: t,
				identity: r,
				popular: s,
				recentPosts: c,
				subredditInfoByName: u,
				trendingSubreddits: b
			}) => {
				if (!u) return {
					reason: a.e.NotFoundSubreddit,
					data: {
						account: r && Object(G.a)(r) || null
					}
				};
				if (Object(a.j)(u)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: s,
						isEmailRequiredForQuarantineOptin: n
					} = u;
					return {
						reason: q(u.forbiddenReason),
						data: {
							account: r && Object(G.a)(r) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: n,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(U.f)(s.richtext, o.i)
							} : {}
						}
					}
				}
				const p = {},
					f = u || s || t || e,
					[O, _] = f.elements.edges.reduce((e, t) => {
						var r, s, n, i, o, a, c, u;
						const [b, f] = e, m = t.node;
						return Object(d.k)(m) ? (b.push(m), (null === (s = null === (r = null == m ? void 0 : m.flair) || void 0 === r ? void 0 : r.template) || void 0 === s ? void 0 : s.postStyle) && "string" == typeof(null === (i = null === (n = null == m ? void 0 : m.flair) || void 0 === n ? void 0 : n.template) || void 0 === i ? void 0 : i.postStyle) && (null === (a = null === (o = null == m ? void 0 : m.flair) || void 0 === o ? void 0 : o.template) || void 0 === a ? void 0 : a.id) && "string" == typeof(null === (u = null === (c = null == m ? void 0 : m.flair) || void 0 === c ? void 0 : c.template) || void 0 === u ? void 0 : u.id) && (p[m.flair.template.id] = Object(l.a)(m.flair.template.postStyle))) : f.push(m), [b, f]
					}, [
						[],
						[]
					]);
				if (_.length) {
					const e = `Received unhandled ${_.length} elements when processing subreddit data: "${_[0].__typename}"`;
					Object(n.b)() || console.warn(e), i.c.captureMessage(e)
				}
				c && O.push(...c);
				const I = f.elements.dist,
					S = B(O, b, r);
				return u && u.styles && (S.structuredStyles = {
					data: {
						style: Object(j.a)(u.styles)
					}
				}), u && (S.structuredStyles = {
					data: {
						...u.styles ? {
							style: Object(j.a)(u.styles)
						} : {},
						content: {
							...u.widgets ? {
								widgets: h(u)
							} : {}
						},
						flairTemplate: p
					}
				}), u && (S.subredditAboutInfo = Object(m.a)(u), u.modPermissions && (S.subredditPermissions = Object(g.a)(u.modPermissions)), u.welcomeMessage && (S.welcomeMessage = u.welcomeMessage)), {
					...S,
					...null !== I && {
						dist: I
					}
				}
			};
			const q = e => {
				switch (e) {
					case a.c.Banned:
						return a.e.BannedSubreddit;
					case a.c.GoldOnly:
						return a.e.GoldSubreddit;
					case a.c.Private:
						return a.e.PrivateSubreddit;
					case a.c.Quarantined:
						return a.e.QuarantinedSubreddit;
					case a.c.Unknown:
						return a.e.ForbiddenSubreddit
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/helpers/graphql/helpers.ts"),
				n = r("./src/reddit/models/Rule/index.ts");
			t.a = e => ({
				rules: e.map(e => ({
					kind: n.c[e.kind],
					description: e.content.markdown,
					descriptionRichText: e.content.richtext,
					shortName: e.name,
					violationReason: e.violationReason || "",
					createdUtc: Object(s.e)(e.createdAt, s.a.Millis),
					priority: e.priority
				}))
			})
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				d = r("./src/reddit/models/Vote/index.ts"),
				o = e => !0 === e ? d.a.upvoted : !1 === e ? d.a.downvoted : d.a.notVoted,
				a = r("./src/reddit/models/Comment/index.ts");
			t.a = (e, t) => {
				const r = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: u(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === s.D,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: c(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(n.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: o(e.likes)
				};
				return e.all_awardings && (r.allAwardings = Object(i.a)(e.all_awardings)), e.awarders && (r.awarders = e.awarders), e.associated_award && (r.associatedAwardId = e.associated_award.id, r.associatedAward = Object(i.b)(e.associated_award)), r
			};
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				u = e => e.author !== s.D ? null : e.body === s.E ? a.c.User : e.body === s.Jb ? a.c.Moderator : null
		},
		"./src/reddit/helpers/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./node_modules/lodash/values.js"),
				n = r.n(s);
			const i = e => n()(e).sort((t, r) => {
					const s = e[t.tag.id].tag.text.toLowerCase(),
						n = e[r.tag.id].tag.text.toLowerCase();
					return s < n ? -1 : s > n ? 1 : 0
				}),
				d = e => !e.id && !!e.action
		},
		"./src/reddit/helpers/trackers/communityTopics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			}));
			var s, n = r("./src/reddit/selectors/tags.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/index.ts");
			! function(e) {
				e.communitySettings = "community_settings", e.idCard = "id_card"
			}(s || (s = {}));
			const o = (e, t, r) => {
					const s = Object(n.x)(e, {
						subredditId: t
					});
					return !!s && s.id === r
				},
				a = (e, t) => Object(n.u)(e, {
					itemId: t
				}).reduce(({
					topicTagIds: e,
					topicTagContents: t,
					topicTagTypes: r
				}, s) => (e.push(s.tag.id), t.push(s.tag.text), r.push(s.tag.type), {
					topicTagIds: e,
					topicTagContents: t,
					topicTagTypes: r
				}), {
					topicTagIds: [],
					topicTagContents: [],
					topicTagTypes: []
				}),
				c = (e, t, r) => {
					if (!r.id) return {
						content: r.displayText
					};
					const s = Object(n.b)(e)[r.id] || Object(n.d)(e, {
						subredditId: t
					})[r.id];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: o(e, t, s.id)
					} : null
				},
				u = (e, t, r) => {
					if (!r) return null;
					const s = Object(n.b)(e)[r] || Object(n.d)(e, {
						subredditId: t
					})[r];
					return s ? {
						id: s.id,
						content: s.text,
						type: s.type,
						isPrimary: o(e, t, s.id)
					} : null
				},
				l = (e, t, r) => ({
					...i.defaults(e),
					subreddit: {
						...i.subreddit(e) || {},
						id: t,
						...a(e, t)
					},
					source: r.context,
					action: "click"
				}),
				b = (e, t, r) => {
					Object(d.a)(((e, t, r) => ({
						...l(e, t.subredditId, r),
						noun: t.isRelevant ? "restore_related_topic" : "remove_related_topic",
						topicTag: u(e, t.subredditId, t.tagId)
					}))(e, t, r))
				},
				p = (e, t, r, s) => {
					Object(d.a)({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "add_related_topic"
					})
				},
				f = (e, t, r, s) => {
					return !Object(n.i)(e, {
						subredditId: t
					}) && r.id ? Object(d.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_auto_suggest"
					}))(e, t, r, s)) : r.id ? Object(d.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_auto_complete"
					}))(e, t, r, s)) : Object(d.a)(((e, t, r, s) => ({
						...l(e, t, s),
						topicTag: c(e, t, r),
						noun: "topic_add_new"
					}))(e, t, r, s))
				},
				m = (e, t, r, s) => Object(d.a)({
					...l(e, t, s),
					topicTag: c(e, t, r),
					noun: "topic_remove"
				}),
				O = (e, t, r) => Object(d.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				g = (e, t, r) => Object(d.a)({
					...l(e, t, r),
					noun: r.context === s.communitySettings ? "save" : "save_community_topics"
				}),
				j = (e, t, r, s) => {
					const n = l(e, t, s);
					Object(d.a)({
						...n,
						action: "view",
						noun: "error",
						actionInfo: {
							...n.actionInfo,
							reason: r
						}
					})
				}
		},
		"./src/reddit/helpers/trackers/feed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/selectors/telemetry.ts"),
				n = r("./src/telemetry/index.ts");
			const i = e => t => Object(n.a)({
					...s.defaults(t),
					actionInfo: s.actionInfo(t, {
						reason: e
					}),
					source: "feed",
					action: "load",
					noun: "serving",
					feed: s.feed(t)
				}),
				d = e => t => Object(n.a)({
					...s.defaults(t),
					actionInfo: s.actionInfo(t, {
						reason: e
					}),
					source: "feed",
					action: "fail",
					noun: "serving",
					feed: s.feed(t)
				})
		},
		"./src/reddit/helpers/trackers/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s, n = r("./src/reddit/constants/tracking.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.SubredditInlineTooltip = "subreddit_inline_tooltip", e.EditSubredditIcon = "edit_subreddit_icon", e.EditSubredditDescription = "edit_subreddit_description", e.SaveDescription = "save_description", e.Error = "error"
			}(s || (s = {}));
			const d = e => ({
					subreddit: i.subreddit(e),
					userSubreddit: i.userSubreddit(e)
				}),
				o = e => ({
					source: "subreddit_tooltip",
					noun: s.SubredditInlineTooltip,
					action: n.c.VIEW,
					...d(e)
				}),
				a = e => ({
					source: "id_card",
					noun: s.EditSubredditIcon,
					action: n.c.CLICK,
					...d(e)
				}),
				c = e => ({
					source: "id_card",
					noun: s.EditSubredditDescription,
					action: n.c.CLICK,
					...d(e)
				}),
				u = (e, t) => r => ({
					source: "id_card",
					noun: s.SaveDescription,
					action: n.c.CLICK,
					setting: {
						value: String(e),
						oldValue: String(t)
					},
					...d(r)
				}),
				l = (e, t) => ({
					source: "id_card",
					noun: s.Error,
					action: n.c.VIEW,
					...d(e),
					...i.defaults(e),
					actionInfo: i.actionInfo(e, {
						reason: t
					})
				})
		},
		"./src/reddit/helpers/trackers/welcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => r => ({
					...n.defaults(r),
					source: "sheet",
					action: e,
					noun: "welcome_message",
					subreddit: n.subreddit(r),
					actionInfo: n.actionInfo(r, {
						...t && {
							reason: t
						}
					})
				}),
				d = () => i("view"),
				o = () => i("click", "lets_go"),
				a = () => e => ({
					...n.defaults(e),
					source: "post_composer",
					action: "click",
					noun: "create_post",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community",
						reason: "welcome_message"
					}),
					correlationId: Object(s.d)(s.a.PostComposer)
				}),
				c = () => e => ({
					...n.defaults(e),
					source: "sheet",
					action: "view",
					noun: "welcome_message_rules",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community"
					})
				}),
				u = () => e => ({
					...n.defaults(e),
					source: "sheet",
					action: "click",
					noun: "welcome_message_rules",
					subreddit: n.subreddit(e),
					actionInfo: n.actionInfo(e, {
						pageType: "community"
					})
				})
		},
		"./src/reddit/models/ExternalAccount/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Twitter = "twitter"
				}(s || (s = {}))
		},
		"./src/reddit/models/Option/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			const s = e => !e.id,
				n = e => !!e.id,
				i = (e, t) => s(e) && s(t) ? e.displayText.toLowerCase().trim() === t.displayText.toLowerCase().trim() : !(!n(e) || !n(t)) && e.id === t.id
		},
		"./src/reddit/models/Rule/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "f", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return l
			}));
			const s = {
					all: "all",
					post: "post",
					comment: "comment"
				},
				n = {
					all: "all",
					link: "post",
					comment: "comment"
				},
				i = {
					LINK_AND_COMMENT: "all",
					LINK: "post",
					COMMENT: "comment"
				},
				d = 15,
				o = 100,
				a = 100,
				c = 500,
				u = 2e3,
				l = e => ({
					rules: e.map(e => ({
						kind: n[e.kind],
						description: e.description,
						descriptionHtml: e.description_html,
						shortName: e.short_name,
						violationReason: e.violation_reason,
						createdUtc: e.created_utc,
						priority: e.priority
					}))
				})
		},
		"./src/reddit/models/Tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			}));
			const s = 25,
				n = 64;
			var i;
			! function(e) {
				e.EVENT = "EVENT", e.COLLECTION = "COLLECTION", e.CLASSIFICATION = "CLASSIFICATION", e.POST_CLASSIFICATION = "POST_CLASSIFICATION", e.SUBREDDIT_CLASSIFICATION = "SUBREDDIT_CLASSIFICATION", e.COMMENT_CLASSIFICATION = "COMMENT_CLASSIFICATION"
			}(i || (i = {}));
			const d = (e, t = !1) => ({
					id: e.id,
					displayText: e.text,
					selected: t
				}),
				o = (e, t = !1) => d(e.tag, t);
			var a;
			! function(e) {
				e.TAGGED = "TAGGED", e.NONE = "NONE"
			}(a || (a = {}))
		},
		"./src/reddit/reducers/tags/selected/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./node_modules/lodash/uniqWith.js"),
				i = r.n(n),
				d = r("./node_modules/lodash/values.js"),
				o = r.n(d),
				a = r("./src/reddit/actions/tags/constants.ts"),
				c = r("./src/reddit/models/Option/index.ts"),
				u = r("./src/reddit/models/Tags/index.ts");
			! function(e) {
				e.ADD = "ADD", e.REMOVE = "REMOVE"
			}(s || (s = {}));
			const l = {
				selectedPrimaryTagId: {},
				selectedOptions: {},
				selectedSuggestedOptions: {},
				deselectedOptions: {},
				deselectedSuggestedOptions: {},
				inputByItemId: {},
				suggestedInputByItemId: {}
			};
			t.b = (e = l, t) => {
				switch (t.type) {
					case a.w:
					case a.r: {
						const {
							subredditId: r,
							itemTags: s,
							suggestedItemTags: n,
							primaryTag: d
						} = t.payload, a = i()([...(e.selectedOptions[r] || []).map(e => {
							if (!e.id) {
								const t = o()(s[r] || {}).find(t => e.displayText.toLowerCase().trim() === t.tag.text.toLowerCase().trim());
								if (t) return {
									...Object(u.e)(t, !0),
									action: null
								}
							}
							return e
						}), ...o()(s[r] || {}).map(e => ({
							...Object(u.e)(e, !0),
							action: null
						}))], c.a);
						let l = e.selectedPrimaryTagId;
						return d && (l = {
							...l,
							[r]: d.tag.id
						}), {
							...e,
							selectedOptions: {
								...e.selectedOptions,
								[r]: a.map(e => ({
									...e,
									action: e.id ? null : e.action
								}))
							},
							selectedSuggestedOptions: {
								...e.selectedSuggestedOptions,
								[r]: o()(n[r] || {}).map(e => ({
									...Object(u.e)(e, !0),
									action: null
								}))
							},
							deselectedOptions: {
								...e.deselectedOptions,
								[r]: []
							},
							selectedPrimaryTagId: l
						}
					}
					case a.D:
					case a.z: {
						const {
							subredditId: r,
							option: n
						} = t.payload, d = t.type === a.z ? "selectedOptions" : "selectedSuggestedOptions", o = t.type === a.z ? "deselectedOptions" : "deselectedSuggestedOptions", u = (e[o][r] || []).slice(), l = u.findIndex(e => Object(c.a)(e, n));
						let b = s.ADD;
						return l > -1 && (b = null, u.splice(l, 1)), {
							...e,
							[d]: {
								...e[d],
								[r]: i()([...e[d][r] || [], {
									...n,
									action: b
								}], c.a)
							},
							[o]: {
								...e[o],
								[r]: u
							}
						}
					}
					case a.C:
					case a.y: {
						const {
							subredditId: r,
							option: n
						} = t.payload, i = t.type === a.y ? "selectedOptions" : "selectedSuggestedOptions", d = t.type === a.y ? "deselectedOptions" : "deselectedSuggestedOptions", o = (e[d][r] || []).slice(), u = (e[i][r] || []).slice(), l = u.findIndex(e => Object(c.a)(e, n));
						return l > -1 && (null === u[l].action && o.push({
							...u[l],
							action: s.REMOVE
						}), u.splice(l, 1)), {
							...e,
							[i]: {
								...e[i],
								[r]: u
							},
							[d]: {
								...e[d],
								[r]: o
							}
						}
					}
					case a.A: {
						const {
							itemTagsState: r
						} = t.payload, s = Object.keys(r);
						if (!s.length) return e;
						const n = {
								selectedOptions: {},
								deselectedOptions: {},
								inputByItemId: {}
							},
							i = s.reduce((e, t) => (e.selectedOptions[t] = o()(r[t]).map(e => ({
								...Object(u.e)(e, !0),
								action: null
							})), e.deselectedOptions[t] = [], e.inputByItemId[t] = "", e), n);
						return {
							...e,
							inputByItemId: {
								...e.inputByItemId,
								...i.inputByItemId
							},
							selectedOptions: {
								...e.selectedOptions,
								...i.selectedOptions
							},
							deselectedOptions: {
								...e.deselectedOptions,
								...i.deselectedOptions
							}
						}
					}
					case a.B:
					case a.x: {
						const {
							subredditId: r,
							input: s
						} = t.payload, n = t.type === a.x ? "inputByItemId" : "suggestedInputByItemId";
						return {
							...e,
							[n]: {
								...e[n],
								[r]: s
							}
						}
					}
					case a.i:
					case a.h: {
						const {
							subredditId: r,
							primaryTagId: s
						} = t.payload;
						if (!s || !r) return e;
						const n = {
								...e,
								selectedPrimaryTagId: {
									...e.selectedPrimaryTagId,
									[r]: s
								}
							},
							i = e.selectedOptions[r];
						if (i) {
							const t = i.findIndex(e => e.id === s),
								d = [...i];
							return t >= 0 && d.splice(t, 1), {
								...n,
								selectedOptions: {
									...e.selectedOptions,
									[r]: d
								}
							}
						}
						return n
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/PublicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "j", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/objectSelector/index.ts"),
				i = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				d = r("./src/reddit/helpers/publicAccessNetwork/index.ts");
			const o = e => e.publicAccessNetwork.api.config,
				a = (e, t) => !!t && !!e.publicAccessNetwork.api.error[Object(d.g)(t)],
				c = e => a(e, i.b),
				u = (e, t) => !!t && !!e.publicAccessNetwork.api.pending[Object(d.g)(t)] && e.publicAccessNetwork.api.pending[Object(d.g)(t)].isPending,
				l = e => u(e, i.b),
				b = e => e.publicAccessNetwork.api.pending[i.b] && e.publicAccessNetwork.api.pending[i.b].fetchedUtcTimeStamp,
				p = Object(s.a)(o, e => e.global),
				f = Object(s.a)((e, {
					subreddit: t
				}) => t, o, (e, t) => {
					const r = e.toLowerCase();
					return t.subreddits[r]
				}),
				m = Object(s.a)(o, e => e.global.rpan_intro_video_url),
				O = Object(s.a)(o, e => e.global.url_to_show_for_unavailable_video),
				g = Object(s.a)(o, e => !1),
				j = Object(s.a)(o, e => e.isError),
				_ = Object(s.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				S = (Object(s.a)(I, e => e.isError), Object(s.a)(I, e => e.isPending)),
				h = Object(n.a)(Object(s.a)(I, e => e.subreddits)),
				y = Object(s.a)(h, e => [{
					name: "All",
					prefixedName: "All",
					path: Object(d.e)()
				}, ...e.map(e => ({
					name: e,
					prefixedName: `r/${e}`,
					path: Object(d.f)(e)
				}))])
		},
		"./src/reddit/selectors/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			const s = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].bannerEnabled,
				n = (e, t) => e.chat.downToChat.subreddits[t] && e.chat.downToChat.subreddits[t].buttonEnabled,
				i = (e, t) => !!e.chat.downToChat.subreddits[t]
		},
		"./src/reddit/selectors/experiments/econ/powerupsAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const o = e => Object(i.c)(e, {
					experimentName: n.pc,
					experimentEligibilitySelector: d.K
				}),
				a = Object(s.a)(o, e => e === n.Nc.Community || e === n.Nc.Supporter)
		},
		"./src/reddit/selectors/experiments/gqlSubredditPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.nb
				}) === s.Lb.Enabled,
				d = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.mb
				}) === s.Kb.Enabled
		},
		"./src/reddit/selectors/experiments/publicAccessNetwork.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts");
			const i = e => s.fe.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ne
				}),
				d = e => s.fe.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Xd
				}),
				o = e => s.Ae.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ue
				}),
				a = (e, t, r) => {
					const i = r(e, t);
					return !(!i || !i.meter) && (i.meter.enabled && o(e) && s.Te.Enabled === Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Se
					}))
				},
				c = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.me
				}),
				u = e => {
					switch (e) {
						case s.se.Five:
							return .05;
						case s.se.Ten:
							return .1;
						case s.se.Fifty:
							return .5;
						default:
							return .01
					}
				},
				l = e => s.fe.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.oe
				}),
				b = e => s.fe.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ke
				}),
				p = e => s.fe.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.le
				})
		},
		"./src/reddit/selectors/experiments/subredditWelcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				d = r("./src/reddit/selectors/experiments/index.ts"),
				o = r("./src/reddit/selectors/experiments/utils.ts");
			const a = Object(s.a)(e => Object(i.c)(e, {
				experimentName: n.ye,
				experimentEligibilitySelector: d.e
			}), o.a)
		},
		"./src/reddit/selectors/externalAccount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return d
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			}));
			var s = r("./src/reddit/models/ExternalAccount/index.ts"),
				n = r("./src/reddit/models/User/index.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = (e, {
					username: t
				}) => !!e.externalAccount.api.user.pending[t],
				o = (e, {
					username: t
				}) => e.externalAccount.user[t],
				a = e => {
					const t = Object(i.k)(e);
					if (!t) return;
					const r = Object(n.e)(t),
						s = o(e, {
							username: r
						});
					return s ? s.twitter : void 0
				},
				c = e => !!e.externalAccount.api.connect.pending[s.a.Twitter],
				u = (e, {
					profileName: t
				}) => {
					if (!t) return null;
					const r = o(e, {
						username: t
					});
					if (!r) return null;
					const d = r[s.a.Twitter];
					if (!d) return null;
					const a = Object(i.k)(e);
					if (!(a && Object(n.e)(a).toLowerCase() === t.toLowerCase())) return d;
					const c = Object(i.nb)(e, {
						userName: t
					});
					return c ? c.prefShowTwitter ? d : null : d
				}
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(s.a)({
				features: {
					predictions: n.a
				}
			});
			const d = e => {
					const t = (e => {
						var t, r;
						return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation
					})(e);
					return (null == t ? void 0 : t.length) ? null == t ? void 0 : t.map(t => {
						const r = Object(i.cb)({
								...e,
								creations: {
									...e.creations,
									formData: t.formData,
									formState: t.formState
								}
							}, {}),
							s = t.formData.polls,
							n = s.options.map(e => ({
								text: e.text
							})),
							d = {};
						return r.document ? d.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (d.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: s.endDate.toISOString(),
							body: d,
							options: n
						}
					}) : []
				},
				o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const d = {};
			var o = (e = d, t) => {
					var r, s;
					switch (t.type) {
						case i.pb:
						case i.qb: {
							const {
								benefitStatuses: s,
								subredditId: n
							} = t.payload;
							if (!s) return e;
							const i = null !== (r = e[n]) && void 0 !== r ? r : {},
								d = {};
							return s.forEach(({
								benefit: e,
								isEnabled: t
							}) => {
								d[e] = t
							}), {
								...e,
								[n]: {
									...i,
									...d
								}
							}
						}
						case i.N: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, i = null !== (s = e[n]) && void 0 !== s ? s : {}, d = {};
							return r.forEach(({
								benefit: e,
								isEnabled: t
							}) => {
								d[e] = t
							}), {
								...e,
								[n]: {
									...i,
									...d
								}
							}
						}
						default:
							return e
					}
				},
				a = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: o
				}
			});
			const c = (e, {
					subredditId: t
				}) => t ? e.features.powerupsBenefitSettings[t] : null,
				u = (e => Object(a.a)(c, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/inlineSubredditEditing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/selectors/moderatorPermissions.ts");
			const i = (e, {
					subredditId: t
				}) => {
					if (!s.d.subredditInlineEditing(e)) return !1;
					const r = t ? Object(n.m)(e, {
						subredditId: t
					}) : null;
					return !!r && (e => !!e && e.config)(r)
				},
				d = e => e.subreddits.api.inlineEditing.pending
		},
		"./src/reddit/selectors/seo/linksModule.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/user.ts");
			const i = e => !Object(n.K)(e) && e.seo.linksModule.frontpage || null,
				d = e => {
					const t = e.split("/");
					if ("r" === t[1]) return t[2]
				},
				o = Object(s.a)(i, e => e ? e.map(e => ({
					...e,
					links: e.links.map(e => ({
						...e,
						title: d(e.url)
					})).filter(e => e.title)
				})) : null),
				a = Object(s.a)(o, e => e ? e.map(e => ({
					...e,
					links: e.links.filter(e => e.visible)
				})) : null),
				c = (e, {
					subredditId: t
				}) => {
					const r = ((e, {
						subredditId: t
					}) => e.seo.linksModule.subreddits && e.seo.linksModule.subreddits[t])(e, {
						subredditId: t
					});
					return r && r.subreddits
				}
		},
		"./src/reddit/selectors/seo/topicLinks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = (e, {
				subredditId: t
			}) => e.seo.topicLinks.subreddits && e.seo.topicLinks.subreddits[t]
		},
		"./src/reddit/selectors/tags.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "A", (function() {
				return m
			})), r.d(t, "B", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "o", (function() {
				return A
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "y", (function() {
				return R
			})), r.d(t, "u", (function() {
				return P
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "q", (function() {
				return G
			})), r.d(t, "C", (function() {
				return U
			})), r.d(t, "w", (function() {
				return B
			})), r.d(t, "s", (function() {
				return F
			})), r.d(t, "x", (function() {
				return M
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return J
			})), r.d(t, "D", (function() {
				return W
			})), r.d(t, "m", (function() {
				return $
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/some.js"),
				n = r.n(s),
				i = r("./node_modules/lodash/values.js"),
				d = r.n(i),
				o = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/tags/index.ts"),
				c = r("./src/reddit/models/Tags/index.ts");
			const u = e => e.tags.creation.selectedOptions || [],
				l = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id && t.push(u(e)[r].id);
					return t || []
				},
				b = e => (u(e) || []).filter(e => !!e.displayText).map(e => e.displayText),
				p = e => {
					const t = [];
					for (let r = 0; r < u(e).length; r++) u(e)[r].id || t.push(u(e)[r].displayText);
					return t || []
				},
				f = e => Object.keys(e.tags.models.globalSubredditTags).length > 0,
				m = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				O = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				g = (e, {
					subredditId: t
				}) => e.tags.selected.inputByItemId[t] || "",
				j = (e, {
					subredditId: t
				}) => e.tags.selected.suggestedInputByItemId[t] || "",
				_ = [],
				I = (e, {
					subredditId: t
				}) => n()(S(e, {
					subredditId: t
				}), e => !!e.action) || n()(y(e, {
					subredditId: t
				}), e => !!e.action),
				S = (e, {
					subredditId: t
				}) => e.tags.selected.selectedOptions[t] || _,
				h = (e, {
					subredditId: t
				}) => e.tags.selected.selectedSuggestedOptions[t] || _,
				y = (e, {
					subredditId: t
				}) => e.tags.selected.deselectedOptions[t] || _,
				T = {},
				E = {},
				x = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				v = e => e.tags.models.globalSubredditTags,
				w = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				D = (e, {
					subredditId: t
				}) => e.tags.models.subredditScopedTags[t] || E,
				C = (e, t) => {
					const r = d()(t);
					for (let s = 0; s < r.length; s++)
						if (r[s].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[s];
					return null
				},
				A = (e, {
					itemId: t
				}) => e.tags.models.itemTags[t] || T,
				k = (e, {
					itemId: t
				}) => !!e.tags.models.itemTags[t],
				N = (e, {
					itemId: t
				}) => e.tags.models.suggestedItemTags[t] || T,
				R = (e, {
					itemId: t
				}) => d()(N(e, {
					itemId: t
				})).filter(e => e.isRelevant).map(e => Object(c.e)(e, !0)),
				P = (e, {
					itemId: t
				}) => e.tags.models.sortedItemTags[t] || [],
				L = Object(o.a)((e, {
					thingId: t,
					suggested: r = !1
				}) => {
					const s = B(e, {
						subredditId: t
					});
					return d()(((e, {
						thingId: t,
						suggested: r = !1
					}) => {
						const s = (r ? j(e, {
								subredditId: t
							}) : g(e, {
								subredditId: t
							})) ? w(e) : x(e),
							n = r ? h(e, {
								subredditId: t
							}) : S(e, {
								subredditId: t
							}),
							i = s.reduce((e, t) => (e[t.id] = Object(c.f)(t), e), {});
						return n.reduce((e, t) => (t.id && e[t.id] && (e[t.id].selected = !0), e), i)
					})(e, {
						thingId: t,
						suggested: r
					})).filter(e => !e.selected && e.id !== s)
				}),
				G = (e, {
					subredditId: t
				}) => S(e, {
					subredditId: t
				}).concat(y(e, {
					subredditId: t
				})),
				U = (e, {
					subredditId: t
				}) => S(e, {
					subredditId: t
				}).filter(a.b).map(e => ({
					text: e.displayText,
					type: c.c.CLASSIFICATION
				})),
				B = (e, {
					subredditId: t
				}) => e.tags.models.subredditPrimaryTagId[t] || null,
				q = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				F = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return q(e, r)
				},
				M = (e, t) => {
					const r = B(e, t);
					return q(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				J = e => {
					const t = Q(e);
					return q(e, t)
				},
				W = e => e.tags.api.updatePrimaryTag.pending,
				$ = (e, {
					subredditId: t
				}) => Object.keys(A(e, {
					itemId: t
				})).length > 0
		},
		"./src/reddit/selectors/welcomeMessage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			}));
			const s = (e, t) => e.subreddits.welcomeMessage[t],
				n = e => e.subreddits.welcomeMessage
		},
		"./src/reddit/selectors/widgets.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "j", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "b", (function() {
				return I
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/name/index.ts"),
				d = r("./src/reddit/models/Widgets/index.ts"),
				o = r("./src/reddit/selectors/profile.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			const c = [],
				u = e => e.widgets.models,
				l = Object(s.a)((e, t) => Object(d.w)(t) ? e.widgets.models[t.widgetId] : Object(d.q)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				p = (e, t) => {
					let r = t.subredditId;
					if (!r && t.subredditName && (r = Object(a.B)(e, t.subredditName)), r) {
						const t = b(e, {
							subredditId: r
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				f = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				m = (e, t) => e.widgets.menuIds[t.subredditId],
				O = (e, t) => {
					const r = m(e, t);
					return r ? e.widgets.models[r] : null
				},
				g = (e, t) => {
					const r = e.widgets.sidebar[t.subredditId];
					return Array.isArray(r) ? r.reduce((t, r) => {
						const s = e.widgets.models[r];
						return s && t.push(s.kind), t
					}, []) : c
				},
				j = (e, t) => {
					const r = f(e, t);
					for (const s of r) {
						const t = e.widgets.models[s];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				_ = (e, t) => {
					const r = f(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return r.length ? r : null
				},
				I = Object(s.a)((e, t) => {
					if (t.type === n.a.PROFILE) {
						const r = Object(o.j)(e, {
							profileName: t.name
						});
						return r ? {
							profile: {
								id: r.id,
								name: Object(i.g)(r.name)
							}
						} : {}
					}
					const r = Object(a.w)(e, {
							subredditName: t.name
						}),
						s = Object(a.t)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: s ? s.contentCategory : null,
							id: r.id,
							name: Object(i.g)(r.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"46b040a6dd35"}')
		},
		"./src/redditGQL/operations/CancelPrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"fac88c91fec8"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"614dbb8a54d2"}')
		},
		"./src/redditGQL/operations/ChangePredictionVote.json": function(e) {
			e.exports = JSON.parse('{"id":"90c7b71fa93f"}')
		},
		"./src/redditGQL/operations/CreateCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"e443629d50b0"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"c4872973b26f"}')
		},
		"./src/redditGQL/operations/CreateSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"80c9a3cd96b8"}')
		},
		"./src/redditGQL/operations/DeleteCustomEmoji.json": function(e) {
			e.exports = JSON.parse('{"id":"c13d195ee7ca"}')
		},
		"./src/redditGQL/operations/EnablePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"059b6d024156"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"224cf2111218"}')
		},
		"./src/redditGQL/operations/FetchGlobalTags.json": function(e) {
			e.exports = JSON.parse('{"id":"f4a581740c21"}')
		},
		"./src/redditGQL/operations/FetchSubredditTags.json": function(e) {
			e.exports = JSON.parse('{"id":"bac623887684"}')
		},
		"./src/redditGQL/operations/FetchSubredditsNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"5d042135b4c5"}')
		},
		"./src/redditGQL/operations/GenerateCustomEmojiUploadLease.json": function(e) {
			e.exports = JSON.parse('{"id":"cbcafcbff9c6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionCreationAllowance.json": function(e) {
			e.exports = JSON.parse('{"id":"d9fb5ec5128f"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetSubredditQuestions.json": function(e) {
			e.exports = JSON.parse('{"id":"15c4ad40a0bc"}')
		},
		"./src/redditGQL/operations/GetSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ba4eb4e2972f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"321d93828e9c"}')
		},
		"./src/redditGQL/operations/GetTournamentsBaseInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"cebfc8734cec"}')
		},
		"./src/redditGQL/operations/LiveVideoPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b3343d9362cd"}')
		},
		"./src/redditGQL/operations/MaybeDeleteTagsAndUpdateItemTags.json": function(e) {
			e.exports = JSON.parse('{"id":"023547ccdaf6"}')
		},
		"./src/redditGQL/operations/ReallocatePowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"d02bf38ca840"}')
		},
		"./src/redditGQL/operations/RedditorPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"e2bcd0fbaace"}')
		},
		"./src/redditGQL/operations/ReportMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"ae01229e1caa"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditAbout.json": function(e) {
			e.exports = JSON.parse('{"id":"c005672ff6d5"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"ecb36b58102f"}')
		},
		"./src/redditGQL/operations/SubredditPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"925a39d18b3e"}')
		},
		"./src/redditGQL/operations/SubredditPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"8d2145ac1ec5"}')
		},
		"./src/redditGQL/operations/SubredditPowerupsFull.json": function(e) {
			e.exports = JSON.parse('{"id":"5ef02d19b2e0"}')
		},
		"./src/redditGQL/operations/SubredditRules.json": function(e) {
			e.exports = JSON.parse('{"id":"c398abb500f1"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/SubredditsPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd60899cb27"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"80a2febdd3b4"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"aba8fd5909b4"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"415bb3d16399"}')
		},
		"./src/redditGQL/operations/UpdateSubredditNotificationSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"0af4f630a2e1"}')
		},
		"./src/redditGQL/operations/UpdateSubredditPrimaryTag.json": function(e) {
			e.exports = JSON.parse('{"id":"a2d0aa1efdbc"}')
		},
		"./src/redditGQL/operations/UpdateSubredditTagStatesRelevance.json": function(e) {
			e.exports = JSON.parse('{"id":"ee43ccb6e5eb"}')
		},
		"./src/redditGQL/operations/UpdateSubredditWelcomeMessage.json": function(e) {
			e.exports = JSON.parse('{"id":"5f408850ebd9"}')
		},
		"./src/redditGQL/operations/UserPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"5460e33eb672"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.809e04ca0bcae4a14f3f.js.map