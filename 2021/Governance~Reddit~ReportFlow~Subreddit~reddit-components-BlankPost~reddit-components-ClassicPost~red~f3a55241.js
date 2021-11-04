// https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.dd6f3eea4b05cf8dcd1d.js
// Retrieved at 11/4/2021, 7:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"], {
		"./src/reddit/actions/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "IN_CONTEXT_AUTHOR_FLAIR_UPDATED",
				i = Object(s.a)(n)
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			}));
			const s = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				d = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return R
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/camelCase.js"),
				i = r.n(n),
				d = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/reddit/models/AutomatedReporting/index.ts"),
				b = r("./src/redditGQL/operations/FetchContentControls.json");
			const p = e => {
				switch (e) {
					case "LENIENT":
						return l.a.Lenient;
					case "MODERATE":
						return l.a.Moderate;
					case "STRICT":
						return l.a.Strict;
					default:
						return l.a.Off
				}
			};
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var f = r("./node_modules/lodash/isEmpty.js"),
				O = r.n(f),
				m = r("./src/redditGQL/operations/UpdateAutomatedReportingSettings.json"),
				_ = r("./src/redditGQL/operations/UpdatePostRequirements.json"),
				j = r("./src/reddit/endpoints/subreddit/about.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/contentControls.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				E = r("./src/reddit/actions/contentControls/constants.ts");
			const T = Object(o.a)(E.b),
				h = Object(o.a)(E.c),
				y = Object(o.a)(E.a),
				A = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = {
						subredditName: e.toLowerCase()
					};
					if (Object(I.a)(r(), n)) return;
					t(h(n));
					let i = Object(S.B)(r(), e);
					if (!i) {
						const r = await Object(j.a)(s(), e, !1);
						if (r.ok) {
							i = r.body.data.subreddit.id
						}
						if (!i) {
							const e = r.error || {
								type: d.H.NOT_FOUND_ERROR
							};
							return void t(y({
								...n,
								error: e
							}))
						}
					}
					let o = null;
					const c = await ((e, t) => Object(u.a)(e, {
						...b,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const s = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: p(null == s ? void 0 : s.automatedReportingLevelAbuse),
												levelHate: p(null == s ? void 0 : s.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == s ? void 0 : s.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(s(), {
						subredditId: i
					});
					if (c.ok) {
						const e = c.body;
						o = e.data.subreddit && e.data.subreddit
					}
					if (o) t(T({
						...n,
						...o
					}));
					else {
						const r = c.error || {
							type: d.H.UNKNOWN_ERROR
						};
						t(y({
							...n,
							error: r
						})), a.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: c.body,
								responseOk: c.ok
							}), a.c.captureMessage("Missing post requirements data!")
						})
					}
				}, x = Object(o.a)(E.d), R = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					const d = e.toLowerCase(),
						o = Object(S.B)(n(), e);
					if (!o) return {
						success: !1
					};
					const a = await ((e, t, r) => {
						const s = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !O()(r.postRequirements)) {
							const n = {
								subredditId: t,
								...r.postRequirements
							};
							s[0] = Object(u.a)(e, {
								..._,
								variables: {
									input: n
								}
							})
						}
						if (r.automatedReporting && !O()(r.automatedReporting)) {
							const n = {
								subredditId: t
							};
							r.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = r.automatedReporting.levelAbuse), r.automatedReporting.levelHate && (n.automatedReportingLevelHate = r.automatedReporting.levelHate), s[1] = Object(u.a)(e, {
								...m,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(s).then(([e, t]) => {
							let r = !0,
								s = [];
							if (e) {
								const t = e.body,
									n = t.data.updatePostRequirements.fieldErrors;
								r = r && t.data.updatePostRequirements.ok, n && (s = s.concat(n))
							}
							if (t) {
								const e = t.body,
									n = e.data.updateSubredditSettings.fieldErrors;
								r = r && e.data.updateSubredditSettings.ok, n && (s = s.concat(n))
							}
							return {
								ok: r,
								fieldErrors: s.length ? s : null
							}
						})
					})(i(), o, t);
					if (a.ok) return r(x({
						subredditName: d,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = D(a.fieldErrors);
						return r(Object(c.f)({
							duration: c.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: g.b.Error,
							text: e && e.length ? e[0].message : s.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, D = e => e && e.map(e => ({
					...e,
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/downToChat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return I
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return w
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "i", (function() {
				return L
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
				O = r("./src/telemetry/models/Event.ts");
			var m = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/selectors/downToChat.ts"),
				j = r("./src/telemetry/index.ts");
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = "FETCH_DOWN_TO_CHAT_AVAILABILITY__PENDING", S = "FETCH_DOWN_TO_CHAT_AVAILABILITY__SUCCESS", E = "FETCH_DOWN_TO_CHAT_AVAILABILITY__FAILED", T = "DISMISS_DOWN_TO_CHAT_BANNER__PENDING", h = "DISMISS_DOWN_TO_CHAT_BANNER__SUCCESS", y = "DISMISS_DOWN_TO_CHAT_BANNER__FAILED", A = "DISMISS_EACH_SUBREDDIT_BANNER", x = Object(s.a)(I), R = Object(s.a)(S), D = Object(s.a)(E), C = Object(s.a)(T), v = Object(s.a)(h), N = (Object(s.a)(y), Object(s.a)(A)), w = e => async (t, r, {
				apiContext: s
			}) => {
				const n = r();
				if (Object(_.a)(n, e)) return;
				t(x({
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
					if (t(R({
							subredditId: e,
							bannerEnabled: r,
							buttonEnabled: s
						})), r) {
						const e = (e => ({
							source: O.b.Chat,
							action: O.a.View,
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
			}, k = e => async (t, r, {
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
					t(v({
						subredditId: e,
						bannerEnabled: r,
						buttonEnabled: s
					})), r || t(N())
				}
				const i = (e => ({
					source: O.b.Chat,
					action: O.a.Dismiss,
					noun: "down_to_chat_subreddit_entry",
					subreddit: Object(f.subreddit)(e),
					...Object(f.defaults)(e)
				}))(r());
				Object(j.a)(i)
			}, L = e => async (t, r, {
				apiContext: s
			}) => {
				const _ = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.a]), {
					endpoint: `${a.a.sendbirdServiceUrl}/api/v1/sendbird/down_to_chat/join`,
					method: c.ib.POST,
					type: "json",
					data: {
						subreddit_id: t
					}
				}))(s(), e);
				if (_.ok && _.body) {
					t(Object(i.i)(o.a.DOWN_TO_CHAT_PENDING_MODAL));
					const {
						deeplink_url: e
					} = _.body, r = Object(p.a)(e);
					r && r.pathname && t(Object(n.d)({
						channelUrl: r.pathname
					}))
				} else t(Object(d.f)({
					kind: m.b.Error,
					duration: d.a,
					text: g._("Failed to join a subreddit channel", null, {
						hk: "mZam3"
					})
				}));
				setTimeout(() => t(Object(i.f)()), 1e3);
				const I = (e => ({
					source: O.b.Chat,
					action: O.a.Click,
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
				return R
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "n", (function() {
				return G
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "u", (function() {
				return B
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "a", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return J
			})), r.d(t, "o", (function() {
				return W
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "j", (function() {
				return V
			})), r.d(t, "r", (function() {
				return z
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
				O = r("./src/reddit/actions/login.ts"),
				m = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/selectors/experiments/econ/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				I = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				E = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				T = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(d.a)({
				features: {
					predictions: o.a
				}
			});
			const h = Object(u.a)(T.f),
				y = Object(u.a)(T.j),
				A = Object(u.a)(T.m),
				x = Object(u.a)(T.i),
				R = Object(u.a)(T.b),
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
						}),
						c = {
							subredditId: e,
							tournamentId: s,
							...a
						};
					return n(h(c)), c
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
					return n(y({
						pollId: r,
						prediction: o,
						price: s
					})), o
				}, v = ({
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
					return r(x({
						pollId: t,
						prediction: d.poll
					})), d.poll
				}, N = Object(u.a)(T.d), w = Object(u.a)(T.e), k = Object(u.a)(T.c), L = Object(u.a)(T.h), P = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						i = Object(g.B)(n, e),
						d = Object(E.j)(n, {
							subredditId: i
						}),
						o = Object(j.m)(n);
					if (d) return Object(E.f)(n, {
						subredditId: i
					});
					t(N({
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
					return t(k({
						subredditId: i,
						tournaments: u
					})), t(w({
						subredditId: i,
						tournaments: u
					})), t(L({
						posts: c,
						meta: n.meta
					})), u
				}, U = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r(),
						i = Object(g.B)(n, e);
					if (Object(E.j)(n, {
							subredditId: i
						})) return;
					t(N({
						subredditId: i
					}));
					const d = await Object(l.l)(s(), {
						subredditName: e,
						isLatestOnly: !0
					});
					t(G(i, d))
				}, G = (e, t) => r => {
					const s = t.map(e => Object(p.a)(e));
					r(w({
						subredditId: e,
						tournaments: s
					}))
				}, F = Object(u.a)(T.a), q = Object(u.a)(T.k), B = Object(u.a)(T.l), M = ({
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
							currency: d ? f.k.Coins : f.k.Tokens
						}),
						{
							createPredictionTournament: a
						} = o.body.data;
					if (!(null == a ? void 0 : a.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = a;
					return t(w({
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
				}, H = Object(u.a)(T.n), J = (e, t, r) => async (t, s, {
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
					return t(H(d.tournament)), d.tournament
				}, W = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = await Object(l.g)(s(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = n.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(H(i.tournament)), i.tournament
				}, $ = e => async (t, r, {
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
				}, V = e => async (t, r, {
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
				}, z = ({
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
					return d(A({
						predictionId: s,
						selectedOptionId: t,
						tournamentId: n,
						tournamentPostId: i
					})), o
				}, K = e => async (t, r) => {
					const s = r();
					Object(I.K)(s) ? await t(Object(m.h)(_.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(O.i)())
				}, Y = () => Object(m.g)(_.a.ECON_PREDICTIONS_PREMIUM_UPSELL), X = e => async (t, r, {
					gqlContext: n
				}) => {
					try {
						const r = await Object(l.c)(n(), {
							postId: e
						});
						t(R({
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
					return r(R({
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
				return E
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "e", (function() {
				return B
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "d", (function() {
				return Q
			})), r.d(t, "m", (function() {
				return $
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
				O = r("./src/reddit/models/User/index.ts"),
				m = r("./src/reddit/selectors/externalAccount.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts");
			const I = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				S = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				E = "USER_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				T = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_PENDING",
				h = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_LOADED",
				y = "SUBREDDIT_EXTERNAL_ACCOUNT_ACCOUNTS_FAILED",
				A = Object(n.a)(I),
				x = Object(n.a)(S),
				R = Object(n.a)(E),
				D = Object(n.a)(T),
				C = Object(n.a)(h),
				v = Object(n.a)(y),
				N = e => async (t, r, {
					apiContext: s
				}) => {
					const n = r(),
						i = Object(g.k)(n),
						d = e || i && Object(O.e)(i);
					if (!d) return;
					if (Object(m.d)(n, {
							username: d
						})) return;
					t(A(d));
					const o = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
						endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/user/${t}.json`),
						traceRequestName: "get_external_accounts",
						method: a.ib.GET
					}))(s(), d);
					if (o.ok) {
						const e = p(o.body);
						t(x({
							username: d,
							accountsData: e
						}))
					} else t(R(o.error))
				}, w = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						n = Object(_.d)(s);
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
					} else e(v(f.error))
				}, k = "EXTERNAL_ACCOUNT_DISCONNECT_PENDING", L = "EXTERNAL_ACCOUNT_DISCONNECT_SUCCESS", P = "EXTERNAL_ACCOUNT_DISCONNECT_FAILED", U = Object(n.a)(k), G = Object(n.a)(L), F = Object(n.a)(P), q = e => async (t, r, {
					apiContext: s
				}) => {
					t(U({
						provider: e
					}));
					const n = Object(g.k)(r()),
						i = Object(O.e)(n),
						d = await ((e, t) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/disconnect.json`),
							method: a.ib.POST
						}))(s(), e);
					d.ok ? t(G({
						provider: e,
						username: i
					})) : t(F({
						provider: e,
						error: d.error
					}))
				}, B = "OAUTH_FLOW_URL_PENDING", M = "OAUTH_FLOW_URL_SUCCESS", Q = "OAUTH_FLOW_URL_FAILED", H = Object(n.a)(B), J = Object(n.a)(M), W = Object(n.a)(Q), $ = e => async (t, r, {
					apiContext: n
				}) => {
					t(H({
						provider: e
					}));
					const p = Object(i.a)(window.location.href, {
							[o.d]: e
						}),
						O = await ((e, t, r) => Object(c.a)(Object(u.a)(e, [l.a]), {
							endpoint: Object(b.a)(`${e.apiUrl}/api/v1/external_account/${t}/connect.json`),
							method: a.ib.POST,
							data: {
								redirect_url: r
							}
						}))(n(), e, p);
					if (O.ok) {
						const {
							redirect_url: r
						} = O.body;
						t(J({
							provider: e
						})), window.location.href = r
					} else t(W({
						provider: e,
						error: O.error
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
			r.d(t, "o", (function() {
				return g
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "m", (function() {
				return D
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "k", (function() {
				return Q
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "c", (function() {
				return J
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "g", (function() {
				return V
			})), r.d(t, "h", (function() {
				return z
			})), r.d(t, "f", (function() {
				return K
			})), r.d(t, "n", (function() {
				return X
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
				O = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				_ = r("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				j = r("./src/reddit/actions/gold/constants.ts");
			const g = e => async (t, r, {
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
						if (r.errors && r.errors.length) return void(await t(T(d)));
						if (!r.data.identity) return void(await t(E(d)));
						await t(S({
							powerups: r.data.identity.powerups
						}))
					}
				} catch (o) {
					i.c.captureException(o), await t(T(d))
				}
			}, I = Object(n.a)(j.Bb), S = Object(n.a)(j.Ab), E = Object(n.a)(j.zb), T = e => async (t, r) => {
				await t(E(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, h = (e, t) => async (e, r, {
				gqlContext: n
			}) => {
				var d;
				if (!!r().users.powerups.fetched) return;
				e(y());
				const o = s.fbt._("Something went wrong", null, {
					hk: "1IJNeH"
				});
				try {
					const r = await Object(l.g)(n(), t);
					if (r.ok) {
						const s = r.body;
						if (s.errors && s.errors.length) return void(await e(R(o)));
						if (!s.data.redditorInfoById) return void(await e(x(o)));
						const n = (null === (d = s.data.redditorInfoById.powerups) || void 0 === d ? void 0 : d.supportedSubreddits) || [];
						await e(A({
							supportedSubreddits: n,
							userId: t
						}))
					}
				} catch (a) {
					i.c.captureException(a), await e(R(o))
				}
			}, y = Object(n.a)(j.hb), A = Object(n.a)(j.gb), x = Object(n.a)(j.fb), R = e => async (t, r) => {
				await t(x(e)), t(Object(c.f)({
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
				r(k());
				const c = t.fullData ? l.i : l.h;
				try {
					const s = await c(d(), e, !!t.includeIdentity);
					if (s.ok) {
						const n = s.body;
						if (null === (o = n.errors) || void 0 === o ? void 0 : o.length) return void(await r(G(n.errors[0].message)));
						if (t.fullData) {
							const {
								data: t
							} = n, s = C(t.subredditInfoById, t.identity);
							v(r, e, s)
						} else {
							const {
								powerups: t = null,
								powerupsSettings: s = null
							} = n.data.subredditInfoById || {};
							await r(L({
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
			}, C = (e, t) => {
				var r, s, n;
				const {
					powerups: i = null,
					powerupsSettings: d = null,
					supporters: o = null,
					productOffers: a = null,
					subredditAchievementFlairs: c
				} = e || {}, u = null == t ? void 0 : t.powerups;
				return {
					powerups: i,
					benefitStatuses: null == d ? void 0 : d.benefitStatuses,
					productOffers: null !== (r = null == a ? void 0 : a.offers) && void 0 !== r ? r : [],
					recentSupporters: null !== (s = null == o ? void 0 : o.recentSupporters) && void 0 !== s ? s : [],
					topSupporters: null !== (n = null == o ? void 0 : o.topSupporters) && void 0 !== n ? n : [],
					userPowerups: u,
					subredditAchievementFlairs: null != c ? c : []
				}
			}, v = (e, t, r) => e(P({
				subredditId: t,
				...r
			})), N = Object(n.a)(j.I), w = e => async (t, r, {
				gqlContext: s
			}) => {
				try {
					const r = await Object(l.e)(s(), e);
					t(N({
						subredditsPowerupsInfo: r
					}))
				} catch (n) {
					await t(G(n.message))
				}
			}, k = Object(n.a)(j.rb), L = Object(n.a)(j.qb), P = Object(n.a)(j.pb), U = Object(n.a)(j.ob), G = e => async (t, r) => {
				await t(U(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, F = Object(n.a)(j.T), q = Object(n.a)(j.U), B = Object(n.a)(j.V), M = e => async (t, r) => {
				await t(F(e)), t(Object(c.f)({
					kind: b.b.Error,
					duration: c.a,
					text: e
				}))
			}, Q = (e, t, r, n) => async (d, o, {
				gqlContext: p
			}) => {
				d(q({
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
					let m = !1,
						j = null;
					if (f.ok) {
						const e = f.body;
						m = e.data.reallocatePowerups.ok, j = e.data.reallocatePowerups.errors
					}
					const I = Object(O.k)(o());
					if (m && I) await d((e => async (t, r) => {
						t(B(e)), await t(D(e.subredditId, {
							forceLoad: !0,
							fullData: !1
						})), t(g(!0)), t(Object(_.a)(e.subredditId, !0)), e.powerupsCount && (t(Object(a.g)(u.a.ECON_POWERUPS_PURCHASE)), e.powerupsCount > 0 ? t(Object(a.h)(u.a.ECON_POWERUPS_SUCCESS)) : t(Object(c.f)({
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
						await d(M(e))
					}
				} catch (f) {
					i.c.captureException(f);
					const e = f,
						t = e && e.message || s.fbt._("An unknown error occurred", null, {
							hk: "2oAbwZ"
						});
					await d(M(t))
				}
			}, H = e => async (t, r, {
				gqlContext: s
			}) => {
				await Object(l.c)(s(), e)
			}, J = Object(n.a)(j.E), W = Object(n.a)(j.R), $ = e => Object(a.h)(u.a.ECON_SUPPORTERS_LIST, {
				subredditId: e
			}), V = e => async (t, r) => {
				const s = r();
				return Object(O.k)(s) ? (Object(d.a)(Object(m.h)(e)(s)), t(Object(a.h)(u.a.ECON_POWERUPS_MARKETING))) : t(Object(o.i)())
			}, z = e => async t => t(Object(a.h)(u.a.ECON_POWERUPS_PREMIUM_UPSELL, {
				subredditId: e
			})), K = () => async (e, t) => {
				const r = t();
				return Object(O.k)(r) ? e(Object(a.h)(u.a.ACHIEVEMENT_FLAIR)) : e(Object(o.i)())
			}, Y = Object(n.a)(j.N), X = (e, t) => async (r, s, {
				gqlContext: n
			}) => {
				const i = await Object(l.k)(n(), e, (e => Object.keys(e).map(t => ({
					benefit: t,
					isEnabled: e[t]
				})))(t));
				if (i.ok) {
					const t = i.body.data.updatePowerupsSettings.powerupsSettings.benefitStatuses;
					return r(Y({
						subredditId: e,
						benefitStatuses: t
					})), !0
				}
				return !1
			}
		},
		"./src/reddit/actions/grantUserFlair/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditFlairedRedditorByName.json"),
				o = r("./src/redditGQL/operations/SubredditFlairedRedditors.json");
			var a = r("./src/reddit/endpoints/flair/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts");
			var b = e => {
				const {
					subreddit: t,
					redditorInfoByName: r
				} = e.data, {
					id: s,
					flairedRedditorByName: n
				} = t, i = {};
				let d = null;
				if (!r) return {
					subredditId: s,
					searchResult: d,
					flairedUsers: i
				};
				const {
					name: o
				} = r;
				if (d = o, n) {
					const {
						flair: e,
						redditor: t
					} = n, {
						name: r
					} = t;
					e && (i[r] = Object(l.a)(e)[0])
				}
				return {
					subredditId: s,
					searchResult: d,
					flairedUsers: i
				}
			};
			var p = e => {
					const {
						subreddit: t
					} = e.data, {
						id: r,
						flairedRedditors: s
					} = t, {
						pageInfo: n,
						edges: i
					} = s, d = [], o = {};
					return i.forEach(e => {
						const {
							node: t
						} = e, {
							flair: r,
							redditor: {
								name: s
							}
						} = t;
						if (d.push(s), r) {
							const e = Object(l.a)(r)[0];
							o[s] = e
						}
					}), {
						subredditId: r,
						flairedUsers: o,
						userOrder: d,
						pageInfo: n
					}
				},
				f = r("./src/reddit/models/SubredditModeration/index.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/models/User/index.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/actions/grantUserFlair/constants.ts");
			const g = Object(n.a)(j.i),
				I = Object(n.a)(j.g),
				S = Object(n.a)(j.f),
				E = (e, t) => async (r, n, {
					gqlContext: d
				}) => {
					const a = t && t.after || "",
						u = t && t.before || "",
						l = Object(_.B)(n(), e),
						b = Object(f.d)(l, a, u);
					if (!!n().pages.modHub.flairedUsers.userOrder[b]) return;
					r(g());
					const m = await ((e, t, r) => Object(i.a)(e, {
						...o,
						variables: {
							subredditName: t,
							...r
						}
					}))(d(), e, t);
					if (m.ok) {
						const e = {
							...p(m.body),
							key: b
						};
						r(I(e))
					} else {
						const e = m.error;
						r(S(e)), r(Object(c.f)({
							kind: O.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							})
						}))
					}
				}, T = Object(n.a)(j.l), h = Object(n.a)(j.k), y = Object(n.a)(j.j), A = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					const a = Object(_.Q)(n(), {
						subredditId: e
					}).name;
					r(T());
					const u = await ((e, t, r) => Object(i.a)(e, {
						...d,
						variables: {
							subredditName: t,
							name: r
						}
					}))(o(), a, t);
					if (u.ok) {
						const e = b(u.body);
						r(h(e))
					} else r(y(u.error)), r(Object(c.f)({
						kind: O.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						})
					}))
				}, x = Object(n.a)(j.e), R = Object(n.a)(j.c), D = Object(n.a)(j.d), C = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					const d = n(),
						o = Object(_.Q)(d, {
							subredditId: t
						}).name;
					r(x());
					const u = await Object(a.a)(i(), e, o);
					if (u.ok) {
						r(R({
							userName: e,
							subredditId: t
						}));
						const n = Object(c.e)(s.fbt._("User flair cleared", null, {
							hk: "4yyH00"
						}), O.b.SuccessMod);
						r(Object(c.f)(n))
					} else {
						r(D());
						const n = Object(c.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "uG2KO"
						}), O.b.Error, s.fbt._("Retry", null, {
							hk: "3oiY99"
						}), C(e, t));
						r(Object(c.f)(n))
					}
					return u.ok || u.error
				}, v = Object(n.a)(j.h), N = Object(n.a)(j.b), w = Object(n.a)(j.a), k = (e, t, r) => async (n, i, {
					apiContext: d
				}) => {
					const o = i(),
						l = o.pages.modHub.flairedUsers.search.result === e && !o.pages.modHub.flairedUsers.models[e],
						b = {
							userName: e,
							subredditId: t,
							applied: r
						},
						p = r && r.templateId,
						f = Object(_.Q)(o, {
							subredditId: t
						}),
						j = r && Object(u.g)(r),
						g = r ? r.cssClass : void 0,
						I = await Object(a.g)(d(), e, f.name, p, j, g);
					if (I.ok) {
						if (l) {
							let e;
							Object.keys(o.pages.modHub.flairedUsers.userOrder).forEach(t => {
								!1 === o.pages.modHub.flairedUsers.pageInfo[t].hasNextPage && o.pages.modHub.flairedUsers.userOrder[t].length < 50 && (e = t)
							});
							const t = {
								...b,
								key: e
							};
							n(w(t))
						}
						e === (o.user.account && Object(m.e)(o.user.account)) ? n(v(b)) : l || n(N(b))
					} else {
						const e = Object(c.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4hXQvr"
						}), O.b.Error);
						n(Object(c.f)(e))
					}
					return I.ok || I.error
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
				return m
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "j", (function() {
				return E
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
				O = Object(i.a)(f),
				m = e => async (t, r, {
					apiContext: i
				}) => {
					if (!e) return;
					const l = r(),
						b = i();
					let p;
					if (t(O(e)), Object(s.isPseudoLocale)(e) ? (Object(u.H)(l) || Object(c.b)(l)) && (p = e) : p = Object(s.isoLocaleToR2Language)(e), !p) return;
					const f = new URL(window.location.href);
					Object(u.K)(l) ? Object(s.isPseudoLocale)(p) ? f.searchParams.set("locale", p) : (await Object(d.a)(Object(o.a)(b, [a.a]), {
						data: {
							lang: p
						},
						endpoint: `${b.apiUrl}/api/v1/me/prefs`,
						method: n.ib.PATCH,
						type: "json"
					}), f.searchParams.delete("locale")) : f.searchParams.delete("locale"), window.location.href = f.toString()
				}, _ = "META__SET_POPULAR_GEO_FILTER", j = Object(i.a)(_), g = "META__PWA_ENTERED", I = "META__PWA_LEFT", S = Object(i.a)(g), E = Object(i.a)(I)
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return L
			})), r.d(t, "PAGE_LOADED", (function() {
				return P
			})), r.d(t, "PAGE_FAILED", (function() {
				return U
			})), r.d(t, "pagePending", (function() {
				return G
			})), r.d(t, "pageLoaded", (function() {
				return F
			})), r.d(t, "pageFailed", (function() {
				return q
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return M
			})), r.d(t, "postCreationPageRequested", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/filterQueryParams/index.ts"),
				d = r("./src/lib/isFakeSubreddit/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/lib/pageTitle.ts"),
				u = r("./src/reddit/actions/contentControls/index.ts"),
				l = r("./src/reddit/actions/economics/helpers/async.ts"),
				b = r("./src/reddit/actions/externalAccount.ts"),
				p = r("./src/reddit/actions/gold/powerups.ts"),
				f = r("./src/reddit/actions/platform.ts"),
				O = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/postCreation/general.ts"),
				_ = r("./src/reddit/actions/profile/index.ts"),
				j = r("./src/reddit/actions/subreddit.ts"),
				g = r("./src/reddit/actions/subredditDuplicates.ts"),
				I = r("./src/config.ts"),
				S = r("./src/lib/makeApiRequest/index.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				h = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				y = r("./src/reddit/helpers/trackers/postComposer.ts"),
				A = r("./src/reddit/models/User/index.ts"),
				x = r("./src/reddit/selectors/contentControls.ts"),
				R = r("./src/reddit/selectors/postCollection.ts"),
				D = r("./src/reddit/selectors/postCreations.ts"),
				C = r("./src/reddit/selectors/posts.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/user.ts");
			const k = e => {
					const t = e.platform.currentPage;
					let r = "Reddit";
					if (t && t.urlParams.subredditName) {
						const {
							subredditName: s
						} = t.urlParams, n = Object(N.w)(e, {
							subredditName: s
						});
						n && (r = n.name)
					}
					return Object(c.l)(r)
				},
				L = "POST_CREATION__PAGE_PENDING",
				P = "POST_CREATION__PAGE_LOADED",
				U = "POST_CREATION__PAGE_FAILED",
				G = Object(o.a)(L),
				F = Object(o.a)(P),
				q = Object(o.a)(U),
				B = () => async (e, t) => {
					const r = t(),
						s = Object(D.a)(r);
					s !== Object(D.kb)(r) && e(Object(m.g)({
						submissionType: s
					}))
				}, M = e => async (t, r, s) => {
					const {
						collectionId: i,
						profileName: o,
						subredditName: c
					} = e, l = Object(a.a)(e), f = r(), O = f.creations.api.page.pending[l], m = f.creations.api.page.fetched[l], g = f.creations.api.page.error[l];
					if (O) return;
					if (m && !g) return void t(B());
					const T = [];
					t(G({
						key: l
					}));
					let y = c;
					!c && o && (y = `u_${o}`), T.push(((e, t) => Object(S.a)(e, {
						method: n.ib.GET,
						endpoint: Object(E.a)(`${I.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(s.apiContext(), {
						subredditName: y,
						collectionId: i
					})), o && (T.push(t(_.d(o))), T.push(t(_.b(o))));
					const [R] = await Object(h.a)("postCreation", () => Promise.all(T));
					if (R.ok) {
						const e = R.body,
							{
								posts: s = {},
								subredditAboutInfo: n
							} = e;
						if (t(F({
								key: l,
								meta: f.meta,
								...e,
								posts: s
							})), !Object(w.K)(r())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(p.m)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(B());
						const i = [];
						i.push(t(b.o()));
						const o = Object(w.k)(r());
						if (o && o.hasUserProfile && i.push(t(_.d(Object(A.e)(o)))), c && !Object(d.a)(c)) {
							i.push(t(j.o(c))), !!Object(x.b)(r(), {
								subredditName: c
							}) || i.push(t(Object(u.a)(c)))
						}
						await Promise.all(i)
					} else t(q({
						error: R.error,
						key: l
					}))
				}, Q = e => async (t, r) => {
					const {
						subredditName: d,
						profileName: o
					} = e.params, a = e.queryParams, c = a.collection;
					if (await t(M({
							collectionId: c,
							profileName: o,
							subredditName: d
						})), !Object(w.K)(r())) return void Object(T.a)(t, r());
					let u;
					if (d ? (u = Object(N.w)(r(), {
							subredditName: d
						}), await t(Object(l.a)({
							subredditName: d
						}))) : o && (u = Object(v.j)(r(), {
							profileName: o
						})), a.source_id) await t(((e, t) => async (r, s) => {
						const {
							subredditName: n,
							profileName: i
						} = e, d = [];
						let o;
						n ? o = Object(N.B)(s(), n) : i && (o = Object(w.gb)(s(), {
							userName: i
						})), o && d.push(r(Object(g.b)(o, t))), d.push(r(Object(O.Q)(t))), await Promise.all(d);
						const a = Object(C.f)(s(), {
							postId: t
						});
						r(Object(m.l)({
							postId: t,
							postTitle: a ? a.title : ""
						}))
					})(e.params, a.source_id));
					else if (c) {
						const n = Object(R.q)(r(), {
							collectionId: c
						});
						u && n && n.subredditId === u.id || t(Object(s.c)(Object(i.a)(e.url, ["collection"])))
					}((e, t) => {
						const r = e.platform.lastPage;
						t && r && r.meta && r.meta.name === n.Lb.POST_CREATION && y.C(e)
					})(r(), d), t(f.m({
						title: k(r())
					}))
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return p
			})), r.d(t, "PAGE_LOADED", (function() {
				return f
			})), r.d(t, "PAGE_FAILED", (function() {
				return O
			})), r.d(t, "pagePending", (function() {
				return m
			})), r.d(t, "pageLoaded", (function() {
				return _
			})), r.d(t, "pageFailed", (function() {
				return j
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return g
			})), r.d(t, "postDraftRequested", (function() {
				return I
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/actions/profile/index.ts"),
				d = r("./src/config.ts"),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				f = "POST_DRAFT__PAGE_LOADED",
				O = "POST_DRAFT__PAGE_FAILED",
				m = Object(s.a)(p),
				_ = Object(s.a)(f),
				j = Object(s.a)(O),
				g = e => async (t, r, s) => {
					const {
						draftId: p,
						profileName: f
					} = e, O = Object(n.a)(e), m = r(), g = m.creations.api.page.pending[O], I = m.creations.api.page.fetched[O], S = m.creations.api.page.error[O];
					if (g || I && !S || !p) return;
					t(i.d(f));
					const E = await Object(b.a)("postDraft", () => ((e, t, r) => Object(a.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${d.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: o.ib.GET
					}))(s.apiContext(), p, f));
					if (E.ok) {
						const e = E.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(_({
							...e,
							key: O
						}))
					} else t(j({
						error: E.error,
						key: O
					}))
				}, I = e => async (t, r, s) => {
					await t(g(e.params))
				}
		},
		"./src/reddit/actions/pages/subreddit.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isGQLSubredditPageExtra", (function() {
				return ke
			})), r.d(t, "handleSubredditPageApiError", (function() {
				return Le
			})), r.d(t, "SUBREDDIT_PENDING", (function() {
				return Pe
			})), r.d(t, "SUBREDDIT_LOADED", (function() {
				return Ue
			})), r.d(t, "SUBREDDIT_FAILED", (function() {
				return Ge
			})), r.d(t, "subredditPending", (function() {
				return Fe
			})), r.d(t, "subredditLoaded", (function() {
				return qe
			})), r.d(t, "subredditFailed", (function() {
				return Be
			})), r.d(t, "subredditDataRequested", (function() {
				return Me
			})), r.d(t, "subredditDataFirstChunkRequested", (function() {
				return Qe
			})), r.d(t, "makeSubredditPageKey", (function() {
				return Je
			})), r.d(t, "subredditRequested", (function() {
				return We
			})), r.d(t, "SUBREDDIT_INVALIDATE_LISTING", (function() {
				return $e
			})), r.d(t, "subredditInvalidateListing", (function() {
				return Ve
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
				O = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/lib/makeSearchKey/index.ts"),
				_ = r("./src/lib/performanceTimings/index.tsx"),
				j = r("./src/reddit/actions/ads/index.ts"),
				g = r("./src/reddit/actions/communityFlairs/index.ts"),
				I = r("./src/reddit/actions/contentGate.ts"),
				S = r("./src/reddit/actions/discoveryUnit.ts"),
				E = (r("./src/reddit/actions/downToChat.ts"), r("./src/reddit/actions/economics/helpers/async.ts")),
				T = r("./src/reddit/actions/economics/predictions/index.ts"),
				h = r("./src/reddit/actions/externalAccount.ts"),
				y = r("./src/reddit/actions/gold/powerups.ts"),
				A = r("./src/reddit/actions/grantUserFlair/index.ts"),
				x = r("./src/reddit/actions/meta.ts"),
				R = r("./src/reddit/actions/pages/search/index.ts"),
				D = r("./src/reddit/actions/platform.ts"),
				C = r("./src/reddit/actions/publicAccessNetwork/api.ts"),
				v = r("./src/reddit/actions/seo/linksModule.ts"),
				N = r("./src/reddit/actions/seo/topicLinks.ts"),
				w = r("./src/lib/makeGqlRequest/index.ts"),
				k = (r("./src/redditGQL/operations/SubredditInfo.json"), r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts")),
				L = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				P = (r("./src/reddit/selectors/seo/linksModule.ts"), r("./src/reddit/selectors/seo/topicLinks.ts"), r("./src/reddit/selectors/subreddit.ts")),
				U = r("./src/reddit/selectors/widgets.ts");
			const G = (e, t) => async (r, s) => {
				const n = s(),
					i = Object(P.Q)(n, {
						subredditId: e
					}),
					d = Object(U.j)(n, {
						subredditId: e
					});
				i.isNSFW || (null == d ? void 0 : d.length) > 0 && d.some(e => "community-list" === e) || r(Object(v.e)({
					id: e,
					data: t
				}))
			}, F = (e, t) => async r => {
				t && r(Object(N.b)({
					id: e,
					data: t
				}))
			};
			var q = r("./src/reddit/actions/structuredStyles/index.ts"),
				B = r("./src/reddit/actions/subreddit.ts"),
				M = r("./src/reddit/actions/toaster.ts"),
				Q = r("./src/reddit/helpers/localStorage/index.ts"),
				H = r("./src/reddit/models/Subreddit/index.ts"),
				J = r("./src/reddit/models/Toast/index.ts"),
				W = r("./src/reddit/routes/postCreation/constants.ts"),
				$ = r("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				V = r("./src/reddit/selectors/platform.ts"),
				z = r("./src/reddit/selectors/user.ts");
			const K = () => async (e, t, r) => {
				const s = t(),
					n = Object(V.e)(s);
				if (!n || n.type !== H.f.Public) return;
				const i = n.name,
					d = Object(V.m)(s),
					o = Object(P.t)(s, {
						subredditName: i
					});
				if (!o) return;
				const {
					activity7Day: a
				} = o, u = !!a && a >= 51 && a <= 100, l = !i || Object(p.a)(i), b = d && d.urlParams.subredditName === i, f = Object(z.K)(s), O = Object($.c)(s, {
					subredditId: Object(P.B)(s, i)
				});
				if (l || b || Object(Q.C)() || !u || !f || O) return;
				const m = Object(U.d)(t(), {
					subredditName: i
				});
				if (!m || !m.currentlyViewingCount) return;
				const _ = (24 * m.currentlyViewingCount * 7).toString(),
					j = _[0].padEnd(_.length, "0");
				e(Object(M.f)({
					buttonAction: async () => e(Object(c.b)(`/r/${i}${W.b}`)),
					buttonText: "Create Post",
					duration: -1,
					id: "createPostCta",
					kind: J.b.Modal,
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
				te = r("./src/reddit/actions/userFlair/userFlair.ts"),
				re = r("./src/reddit/constants/history.ts"),
				se = r("./src/reddit/constants/page.ts"),
				ne = r("./src/reddit/constants/parameters.ts"),
				ie = r("./src/reddit/constants/postLayout.ts"),
				de = r("./src/reddit/contexts/PageLayer/index.tsx"),
				oe = r("./src/reddit/endpoints/gold/topAwarded.ts"),
				ae = r("./src/reddit/endpoints/governance/posts.ts"),
				ce = r("./src/reddit/endpoints/page/subredditPage.ts"),
				ue = r("./src/redditGQL/operations/SubredditPageExtra.json");
			var le = r("./src/reddit/endpoints/profile/info.ts"),
				be = r("./src/reddit/helpers/canonicalUrls.ts"),
				pe = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				fe = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				Oe = r("./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts");

			function me({
				econLeaderboards: e,
				identity: t,
				trendingSubreddits: r
			}) {
				const s = e.topAwardedPosts.map(e => e.post).filter(e => !e.removedBy && !e.isNsfw);
				return Object(Oe.b)(s, r, t)
			}
			var _e = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				je = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				ge = r("./src/reddit/helpers/trackers/feed.ts"),
				Ie = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				Se = r("./src/reddit/models/RichTextJson/index.ts"),
				Ee = r("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Te = r("./src/reddit/selectors/communityFlairs.ts"),
				he = r("./src/reddit/selectors/experiments/econ/powerupsAward.ts"),
				ye = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				Ae = r("./src/reddit/selectors/experiments/topPosts.ts"),
				xe = r("./src/reddit/selectors/gold/powerups/index.ts"),
				Re = r("./src/reddit/selectors/inlineSubredditEditing.ts"),
				De = r("./src/reddit/selectors/moderatorPermissions.ts"),
				Ce = r("./src/reddit/selectors/multireddit.ts"),
				ve = r("./src/reddit/selectors/posts.ts"),
				Ne = r("./node_modules/uuid/v4.js"),
				we = r.n(Ne);

			function ke(e) {
				return Boolean(e && e.data && e.data.subredditInfoByName)
			}
			const Le = (e, t) => async r => {
				if (!e.ok && e.body && (e => !!e.reason)(e.body)) {
					const {
						body: {
							data: s,
							reason: n
						}
					} = e, i = s ? s.account : void 0, d = s && s.features || void 0, o = t ? t.toLowerCase() : "";
					if (404 === e.status)
						if (n === H.e.NotFoundSubreddit) r(I.o({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (n === H.e.BannedSubreddit) {
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
						if (n === H.e.GoldSubreddit) r(I.q({
							account: i,
							features: d,
							subredditName: o
						}));
						else if (n === H.e.PrivateSubreddit) r(I.r({
						account: i,
						features: d,
						subredditDescription: s.description || "",
						subredditName: o,
						isContributorRequestsDisabled: !!s.isContributorRequestsDisabled,
						isContributorRequestTimestamp: s.isContributorRequestTimestamp ? parseInt(s.isContributorRequestTimestamp, 10) : void 0,
						subredditId: s.id
					}));
					else if (n === H.e.QuarantinedSubreddit) {
						const e = !s || void 0 === s.quarantineRequiresEmailOptin || s.quarantineRequiresEmailOptin;
						r(I.t({
							account: i,
							features: d,
							subredditName: o,
							quarantineRequiresEmail: e,
							quarantineMessage: s.quarantineMessage,
							quarantineMessageHtml: s.quarantineMessageHtml || "",
							quarantineMessageRTJson: s.quarantineMessageRTJson || Se.i
						}))
					}
				}
			}, Pe = "PAGE__SUBREDDIT_PENDING", Ue = "PAGE__SUBREDDIT_LOADED", Ge = "PAGE__SUBREDDIT_FAILED", Fe = Object(f.a)(Pe), qe = Object(f.a)(Ue), Be = Object(f.a)(Ge), Me = (e, t, r, i) => async (o, a, c) => {
				var l, b, f, O, m, I, S, R, C, v;
				const N = a(),
					U = Object(z.J)(N) || Object(z.K)(N);
				if (N.listings.postOrder.api.pending[e]) return;
				const q = null === (b = null === (l = Object(V.b)(N)) || void 0 === l ? void 0 : l.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
					{
						currentPage: Q
					} = N.platform,
					{
						countryCode: H,
						languageCode: W
					} = (null == Q ? void 0 : Q.urlParams) || {},
					$ = Object(p.a)(t, H, W),
					K = Object(p.c)(t, H, W),
					se = (Object(p.b)(t, H, W) || K) && N.posts.recent.length ? {
						...r,
						recentPostIds: N.posts.recent
					} : r;
				se.layout = ie.e[Object(de.Q)(N, {})], K && (se.forceGeopopular = !0), o(Fe({
					key: e
				}));
				const ne = Object(V.l)(N) && Object(ye.b)(N);
				let be;
				if (r.sort === u.V.AWARDED && K) be = Object(oe.a)(c.gqlContext(), {
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
					const e = ne ? () => Object(ce.b)(c.gqlContext(), Object(ce.c)(N, t, se, !0), U) : () => Object(ce.a)(c.apiContext(), t, se);
					be = Object(_.i)(e, {
						name: "fetchSubredditPage",
						page: q,
						isLoggedIn: U
					})
				}
				const pe = Object(P.P)(a(), {
						subredditId: Object(P.B)(a(), t)
					}).length > 0,
					fe = Object(_.i)(() => {
						var e, r;
						return async function(e, t) {
							return Object(w.a)(e, {
								...ue,
								variables: t
							})
						}(c.gqlContext(), {
							subredditName: t,
							isFake: $,
							includeIdentity: U,
							includePowerups: !$,
							includeQuestions: U && !$,
							includeRules: !$ && !pe,
							includeRedditorKarma: U && !(null === (r = null === (e = N.user.account) || void 0 === e ? void 0 : e.karma) || void 0 === r ? void 0 : r.total),
							includeSubredditLinks: !U,
							includeTopicLinks: !U,
							includeWelcome: !0
						})
					}, {
						name: "fetchSubredditPageExtra",
						page: q,
						isLoggedIn: U
					}),
					Oe = we()();
				let Ie, Se;
				ne ? Ie = await be : [Ie, Se] = await Promise.all([be, fe]);
				const Te = Se && Object(n.c)(Se) ? Se.body.data : null,
					Ae = Ie.body,
					De = (null == Ae ? void 0 : Ae.subreddits) ? ((e, t) => {
						var r;
						return null === (r = d()(e, e => (null == e ? void 0 : e.name.toLowerCase()) === t.toLowerCase())) || void 0 === r ? void 0 : r.id
					})(Ae.subreddits, t) : null;
				o(D.n(Ie.status));
				const Ce = `error-${e}`,
					ve = $ || De;
				if (Ie.ok && ve) {
					if (!$ && De) {
						const e = null !== (f = Ae.welcomeMessage) && void 0 !== f ? f : null === (O = null == Te ? void 0 : Te.subredditInfoByName) || void 0 === O ? void 0 : O.welcomeMessage;
						let t;
						e && o(Object(Z.f)({
							welcomeMessage: e,
							subredditId: De
						})), t = ne ? Ae.powerups : Object(y.e)(null == Te ? void 0 : Te.subredditInfoByName, null == Te ? void 0 : Te.identity), Object(y.b)(o, De, t), (null == Te ? void 0 : Te.subredditInfoByName) && o(Object(T.n)(De, Te.subredditInfoByName.predictionTournaments || [])), Object(xe.h)(a(), {
							subredditId: De
						}) && Object(he.a)(a())
					}
					let s;
					Ae.geoFilter && o(Object(x.k)(Ae.geoFilter));
					const n = Ae.postIds.filter(e => !!Ae.posts[e].isMeta);
					if (n.length && De) {
						const e = Object(_.i)(() => Object(ae.a)(c.apiContext(), De, n), {
								name: "getGovernanceData",
								page: q,
								isLoggedIn: U
							}),
							t = await e;
						t.ok && (s = t.body)
					}
					if (Te) {
						const e = null === (I = null === (m = Te.identity) || void 0 === m ? void 0 : m.redditor) || void 0 === I ? void 0 : I.karma,
							t = {
								karma: {
									...le.a,
									...e
								}
							};
						Ae.account && Object.assign(Ae.account, t)
					}
					if (De && Ae.subredditAboutInfo[De]) {
						let e;
						if (ne) e = Ae.subredditAboutInfo[De].notificationLevel;
						else if (ke(Te)) {
							const t = Te.data.subredditInfoByName;
							e = t && t.notificationLevel
						}
						Ae.subredditAboutInfo[De].notificationLevel = e
					}
					o(qe({
						key: e,
						meta: N.meta,
						governance: s,
						correlationId: Oe,
						...Ae,
						postIds: Ae.postIds
					}));
					const d = null === (R = null === (S = Object(V.b)(N)) || void 0 === S ? void 0 : S.locationState) || void 0 === R ? void 0 : R[re.b.FeedLoadReason];
					if (Object(ge.b)(r.isRefresh ? re.a.UserRefresh : null != d ? d : re.a.InitialLoad)(a()), !$) {
						const e = Object(P.B)(a(), t);
						ne && Ae.subredditRules ? o(B.t({
							rules: {
								rules: Ae.subredditRules
							},
							subredditId: e
						})) : (null === (C = null == Te ? void 0 : Te.subreddit) || void 0 === C ? void 0 : C.rules) && o(B.t({
							rules: Object(_e.a)(Te.subreddit.rules),
							subredditId: e
						}));
						const r = Object(g.c)(Ae.posts, e),
							s = Object(g.b)(Ae.structuredStyles),
							n = (s ? Object(g.d)(s) : []).concat(r);
						o(Object(g.a)(n, e))
					}
					if (i && o(M.g(Ce)), o(Object(j.b)(Ee.a.SUBREDDIT)), o(Object(h.p)()), De) {
						let e, r, s;
						if (ne ? (e = Ae.questions, r = Ae.subredditLinks, s = Ae.subredditTopicLinks) : (e = null == Te ? void 0 : Te.subredditInfoByName, r = Object(k.a)({
								data: {
									subredditInfoById: null == Te ? void 0 : Te.subredditInfoByName
								}
							}), s = Object(L.a)({
								data: {
									subredditInfoById: null == Te ? void 0 : Te.subredditInfoByName
								}
							})), Object(Y.a)(o, De, e), o(G(De, r)), F(De, s), ne && Ae.appliedFlair) {
							const e = Ae.appliedFlair;
							if ((null === (v = N.user.account) || void 0 === v ? void 0 : v.displayName) && e.flair && (o(Object(A.b)({
									subredditId: De,
									applied: e.flair,
									userName: N.user.account.displayName
								})), o(Object(te.userFlairSaveTemplateSuccess)({
									subredditId: De,
									template: e.flair
								}))), e.displaySettings) {
								const t = e.displaySettings;
								o(Object(te.userFlairAllowAssignOwnSettingSuccess)({
									subredditId: De,
									canAssignOwn: t.isSelfAssignable
								})), o(Object(te.userFlairMutated)({
									subredditId: De,
									displaySettings: t
								}))
							}
						}
						const n = [Object(_.i)(() => o(Object(E.a)({
							subredditId: De,
							postIds: Ae.postIds,
							skip: ["subscription"]
						})), {
							name: "fetchAllEconomicsData",
							page: q,
							isLoggedIn: U
						})];
						if (Object(Re.a)(a(), {
								subredditId: De
							})) {
							const e = Object(_.i)(() => o(Object(X.h)(t, De)), {
									name: "subredditSettingsRequested",
									isLoggedIn: U,
									page: q
								}),
								r = Object(_.i)(() => o(Object(ee.g)(De, je.a.idCard)), {
									name: "subredditTagsRequested",
									isLoggedIn: U,
									page: q
								});
							n.push(e, r)
						}
						0, await Promise.all(n)
					}
				} else {
					const n = Ie.ok ? void 0 : Ie.error;
					if (Object(ge.a)(n ? `${Ie.status}:${n.type}` : "Failed to load post listing for subreddit")(a()), 403 === Ie.status || 404 === Ie.status || 451 === Ie.status) return void o(Le(Ie, t));
					o(Be({
						error: !Ie.ok && Ie.error || {
							type: u.H.NOT_FOUND_ERROR
						},
						key: e,
						...Ae
					})), i && o(M.f({
						id: Ce,
						kind: J.b.Error,
						text: s.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: Me(e, t, r, i)
					}))
				}
			}, Qe = (e, t, r) => async (s, n) => {
				const i = n(),
					d = Object(O.a)(e, t.sort, t);
				Object(ve.A)(i, {
					listingKey: d
				}).length > 0 || await s(Me(d, e, t, r))
			}, He = (e, t, r, s) => {
				if (Object(p.a)(t, r, s)) {
					if (Object(b.a)(t)) {
						return Object(Ce.a)(e, {
							listingName: t
						}).displayText
					}
					switch (t.toLowerCase()) {
						case se.d.Popular:
							return "r/popular";
						case se.d.All:
							return "r/all"
					}
				}
				return Object(P.T)(e, {
					subredditName: t
				})
			}, Je = (e, t, r, s) => s ? Object(m.b)(e.subredditName, void 0, s) : Object(O.a)(e.subredditName, t, r), We = (e, t) => async (r, s) => {
				var n, i, d;
				const {
					countryCode: o,
					languageCode: b
				} = e.params, f = Object(l.c)(e.params), {
					styling: I
				} = e.queryParams, E = s(), T = Object(pe.a)(e.params, E);
				if ("Popular" === f) return void r(Object(c.c)(e.url.replace("r/Popular", "r/popular")));
				if ("All" === f) return void r(Object(c.c)(e.url.replace("r/All", "r/all")));
				const y = Object(m.d)(e.queryParams, Object(z.eb)(E)),
					A = Je({
						subredditName: f,
						countryCode: o,
						languageCode: b
					}, T, e.queryParams, y),
					x = T,
					v = E.listings.postOrder.api.error[A],
					N = E.listings.postOrder.api.pending[A];
				let w = !!E.listings.postOrder.ids[A];
				const k = E.listings.postOrder.listingSort[A];
				k && k.hasChanged && (w = !1);
				let L = Object(P.B)(E, f);
				const U = (e, t) => "true" === I && ((e, t) => Object(De.b)(Ie.c.config)(e, {
						subredditId: t
					}) || Object(De.b)(Ie.c.flair)(e, {
						subredditId: t
					}))(e, t),
					G = ne.A in e.queryParams && e.queryParams[ne.A].toUpperCase() || "",
					F = G in u.ec && u.ec[G];
				if (N || w && !v && !t) {
					if (U(E, L) && r(q.i(L)), w) {
						const t = He(s(), f, o, b);
						r(D.m({
							title: t
						})), (null === (n = E.listings.postOrder.correlationIds) || void 0 === n ? void 0 : n[A]) && r(D.o({
							correlationId: E.listings.postOrder.correlationIds[A]
						})), Object(be.e)(s(), r, e), window.addEventListener("load", () => {
							r(Object(h.p)())
						}), E.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
							r(Object(j.b)(Ee.a.SUBREDDIT))
						}), r(K())
					}
					return
				}
				r(S.g());
				const B = null === (d = null === (i = Object(V.b)(E)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
					M = Object(z.K)(s()),
					Q = Object(_.i)(() => r(Object(C.c)(`r/${f}`)), {
						name: "rpanConfigRequested",
						isLoggedIn: M,
						page: B
					});
				if (y) {
					const e = Object(_.i)(() => r(Object(R.d)(A, y, f)), {
						name: "searchDataRequested",
						isLoggedIn: M,
						page: B
					});
					await e
				} else {
					const t = {
						...a()(e.queryParams, [...ne.l, ...ne.k, ne.h]),
						sort: x,
						t: Object(fe.a)(x, F)
					};
					await r(Me(A, f, t, !0))
				}
				const H = E.platform.currentPage,
					J = Object(Ae.d)(E, {
						pageLayer: H
					});
				if (Object(Ae.a)(J) || Object(Ae.b)(J) || Object(Ae.c)(J)) {
					const e = Object(O.a)(f, u.V.TOP, {
							t: u.ec.WEEK
						}),
						t = {
							sort: u.V.TOP,
							t: u.ec.WEEK
						};
					await r(Me(e, f, t, !1))
				}
				if (L = L || Object(P.B)(s(), f), !Object(Te.a)(E, L) && !Object(p.a)(f, o, b)) {
					const e = Object(_.i)(() => r(Object(g.e)(f)), {
						name: "getTopCommunityFlair",
						page: B,
						isLoggedIn: M
					});
					await e
				}
				U(s(), L) && r(q.i(L)), Object(be.e)(s(), r, e);
				const W = He(s(), f);
				r(D.m({
					title: W
				})), r(K()), await Q
			}, $e = "PAGE__SUBREDDIT_INVALIDATE_LISTING", Ve = Object(f.a)($e)
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "K", (function() {
				return s
			})), r.d(t, "L", (function() {
				return n
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "m", (function() {
				return d
			})), r.d(t, "x", (function() {
				return o
			})), r.d(t, "H", (function() {
				return a
			})), r.d(t, "I", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "G", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "Q", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "D", (function() {
				return O
			})), r.d(t, "s", (function() {
				return m
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return y
			})), r.d(t, "q", (function() {
				return A
			})), r.d(t, "S", (function() {
				return x
			})), r.d(t, "R", (function() {
				return R
			})), r.d(t, "T", (function() {
				return D
			})), r.d(t, "U", (function() {
				return C
			})), r.d(t, "V", (function() {
				return v
			})), r.d(t, "W", (function() {
				return N
			})), r.d(t, "X", (function() {
				return w
			})), r.d(t, "Y", (function() {
				return k
			})), r.d(t, "Z", (function() {
				return L
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "E", (function() {
				return U
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "t", (function() {
				return q
			})), r.d(t, "w", (function() {
				return B
			})), r.d(t, "P", (function() {
				return M
			})), r.d(t, "o", (function() {
				return Q
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "bb", (function() {
				return J
			})), r.d(t, "J", (function() {
				return W
			})), r.d(t, "a", (function() {
				return $
			})), r.d(t, "F", (function() {
				return V
			})), r.d(t, "N", (function() {
				return z
			})), r.d(t, "O", (function() {
				return K
			})), r.d(t, "M", (function() {
				return Y
			})), r.d(t, "ab", (function() {
				return X
			})), r.d(t, "C", (function() {
				return Z
			})), r.d(t, "B", (function() {
				return ee
			})), r.d(t, "z", (function() {
				return te
			})), r.d(t, "A", (function() {
				return re
			}));
			const s = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				n = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				i = "POST_CREATION_EDIT_COMPLETE",
				d = "POST_CREATION_EDIT_FAILED",
				o = "POST_CREATION_PENDING_EDIT",
				a = "POST_CREATION_START_EDITING_POST",
				c = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				O = "POST_TITLE_FETCHED",
				m = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				j = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				g = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				S = "POST_CREATION__CHANGE_MEDIA_BODY",
				E = "POST_CREATION__CHANGE_RECAPTCHA",
				T = "POST_CREATION__CHANGE_RTE_STATE",
				h = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				y = "POST_CREATION__CHANGE_TITLE",
				A = "POST_CREATION__GOV_TYPE_CHANGED",
				x = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				R = "POST_CREATION__TOGGLE_IS_CHANGED",
				D = "POST_CREATION__TOGGLE_IS_GOV",
				C = "POST_CREATION__TOGGLE_IS_NSFW",
				v = "POST_CREATION__TOGGLE_IS_OC",
				N = "POST_CREATION__TOGGLE_IS_POLL",
				w = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				L = "POST_CREATION__TOGGLE_SEND_REPLIES",
				P = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				U = "POST_CREATION__RESET_FORM",
				G = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				F = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				q = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				B = "POST_CREATION__PENDING",
				M = "POST_CREATION__SUCCEEDED",
				Q = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				J = "POST_CREATION__VALIDATION_FAILED",
				W = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				$ = "POST_CREATION__CAPTCHA_REQUIRED",
				V = "POST_CREATION__SET_SUBMIT_MODE",
				z = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				K = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS",
				Z = "POST_CREATION__SUBREDDIT_RECOMMENDATION_PENDING",
				ee = "POST_CREATION__SUBREDDIT_RECOMMENDATION_LOADED",
				te = "POST_CREATION__SUBREDDIT_RECOMMENDATION_FAILED",
				re = "POST_CREATION__SUB_REC_IS_INPUT_CHANGED"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return T
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "t", (function() {
				return P
			})), r.d(t, "s", (function() {
				return U
			})), r.d(t, "u", (function() {
				return G
			})), r.d(t, "v", (function() {
				return F
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "x", (function() {
				return B
			})), r.d(t, "z", (function() {
				return M
			})), r.d(t, "A", (function() {
				return Q
			})), r.d(t, "B", (function() {
				return H
			})), r.d(t, "l", (function() {
				return J
			})), r.d(t, "q", (function() {
				return W
			})), r.d(t, "r", (function() {
				return $
			})), r.d(t, "p", (function() {
				return V
			})), r.d(t, "y", (function() {
				return z
			})), r.d(t, "o", (function() {
				return K
			})), r.d(t, "m", (function() {
				return Y
			})), r.d(t, "j", (function() {
				return se
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/isUrl/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/post/index.tsx"),
				c = r("./src/redditGQL/operations/WhereToPostSubRec.json"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/OpenAISubredditRecommendation.json");
			var b = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				f = r("./src/reddit/helpers/trackers/postComposer.ts"),
				O = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/models/Subreddit/index.ts"),
				_ = r("./src/reddit/routes/postCreation/constants.ts"),
				j = r("./src/reddit/selectors/activeModalId.ts"),
				g = r("./src/reddit/selectors/postCollection.ts"),
				I = r("./src/reddit/selectors/postCreations.ts"),
				S = r("./src/reddit/selectors/experiments/postCreationSubRec.ts"),
				E = r("./src/reddit/actions/postCreation/constants.ts");
			const T = Object(i.a)(E.n),
				h = Object(i.a)(E.D),
				y = (Object(i.a)(E.s), e => {
					switch (e) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				A = Object(i.a)(E.b),
				x = Object(i.a)(E.c),
				R = Object(i.a)(E.d),
				D = Object(i.a)(E.e),
				C = Object(i.a)(E.f),
				v = Object(i.a)(E.g),
				N = Object(i.a)(E.h),
				w = Object(i.a)(E.i),
				k = Object(i.a)(E.j),
				L = Object(i.a)(E.q),
				P = Object(i.a)(E.S),
				U = Object(i.a)(E.R),
				G = (Object(i.a)(E.T), Object(i.a)(E.U)),
				F = Object(i.a)(E.V),
				q = Object(i.a)(E.W),
				B = Object(i.a)(E.X),
				M = Object(i.a)(E.Y),
				Q = Object(i.a)(E.Z),
				H = Object(i.a)(E.ab),
				J = Object(i.a)(E.r),
				W = e => async (t, r, {
					apiContext: s
				}) => {
					t(R(e)), Object(n.a)(e) && t((e => async (t, r, {
						apiContext: s
					}) => {
						const n = await Object(a.d)(s(), e);
						n.ok && n.body && n.body.json && n.body.json.data && t(h(n.body.json.data))
					})(e))
				}, $ = Object(i.a)(E.E), V = (e, t) => async (r, n) => {
					r($()), r(e ? Object(s.b)(_.b) : Object(s.b)(Object(I.ab)(n(), {
						pageLayer: t
					})))
				}, z = e => async t => {
					t(d.i(e))
				}, K = e => async (t, r) => {
					const s = r(),
						n = Object(o.F)(e),
						i = Object(I.F)(s);
					if (n && i) {
						Object(j.a)(s) !== O.d && t(z(O.d))
					} else t(V(!1, e))
				}, Y = e => async (t, r) => {
					const s = r();
					Object(g.m)(s, {
						subredditId: e
					}) ? t(d.i(O.a)) : t(d.i(O.c))
				}, X = Object(i.a)(E.B), Z = Object(i.a)(E.C), ee = Object(i.a)(E.z), te = Object(i.a)(E.A), re = e => async (t, r) => {
					Object(S.d)(r()) !== e && t(te({
						isChanged: e
					}))
				}, se = () => async (e, t) => {
					const r = t(),
						s = Object(S.j)(r),
						n = Object(S.e)(r);
					!s && n && (Object(S.f)(r) || Object(S.g)(r) ? e(de()) : Object(S.i)(r) && !Object(S.c)(r) && e(oe()))
				}, ne = ["torrents", "IsolatedVocals"], ie = ["askreddit", "teenagers"], de = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const n = t();
					if (Object(S.h)(n)) return;
					e(Z());
					const i = n.creations.formData.title,
						d = Object(S.l)(n),
						o = Object(S.k)(n),
						a = await ((e, t, r, s) => Object(u.a)(e, {
							...l,
							variables: {
								title: t,
								body: r,
								link: s
							}
						}))(s(), i, d, o),
						c = {};
					let O = {};
					const _ = {},
						j = {},
						g = [];
					if (!a.body || !a.ok) return e(re(!1)), void e(ee()); {
						const {
							data: r
						} = a.body, s = r.openaiSubredditSuggestions.filter(e => !ne.includes(e.name)).slice(0, S.a), i = s.map(e => {
							const t = e.name;
							return j[t] = {}, g.push(t), t
						});
						if (Object(S.g)(n) && (e => {
								const t = e.map(e => e.toLowerCase());
								let r = !1;
								return ie.forEach(e => {
									t.includes(e) && (r = !0)
								}), r
							})(i)) return e(re(!1)), e(X({
							subreddits: {},
							subredditsAboutInfo: {},
							unavailableSubreddits: {},
							recSubsDict: {},
							recSubsOrder: []
						})), Object(f.z)(t()), void e(ee());
						s.forEach(e => {
							if (Object(m.j)(e)) {
								const t = Object(p.f)(e);
								_[t.id] = t
							} else if (e && Object.keys(e).length > 0) {
								const t = Object(p.a)(e),
									r = Object(b.a)(e);
								c[t.id] = t, O = {
									...O,
									...r
								}
							}
						})
					}
					e(re(!1)), e(X({
						subreddits: c,
						subredditsAboutInfo: O,
						unavailableSubreddits: _,
						recSubsDict: j,
						recSubsOrder: g
					})), 0 === Object(S.b)(t()).length && e(ee())
				}, oe = () => async (e, t, {
					apiContext: r,
					gqlContext: s
				}) => {
					const n = t();
					if (Object(S.h)(n)) return;
					e(Z());
					const i = {};
					let d = {};
					const o = {},
						a = {},
						l = [],
						f = await (e => Object(u.a)(e, {
							...c,
							variables: {
								recentSubreddits: []
							}
						}))(s());
					if (!f.ok || !f.body) return e(ee()), void e(re(!1)); {
						const {
							data: e
						} = f.body;
						(e.whereToPostSuggestions.edges || []).forEach((e, t) => {
							if (t >= S.a) return;
							const r = e.node.subredditInfo;
							if (Object(m.j)(r)) {
								const e = Object(p.f)(r);
								o[e.id] = e
							} else if (r && Object.keys(r).length > 0) {
								const e = Object(p.a)(r),
									t = Object(b.a)(r);
								a[r.name] = {}, l.push(r.name), i[e.id] = e, d = {
									...d,
									...t
								}
							}
						})
					}
					e(re(!1)), e(X({
						subreddits: i,
						subredditsAboutInfo: d,
						unavailableSubreddits: o,
						recSubsDict: a,
						recSubsOrder: l
					})), 0 === Object(S.b)(t()).length && e(ee())
				}
		},
		"./src/reddit/actions/publicAccessNetwork/api.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "a", (function() {
				return _
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
					if (Object(o.a)(r())) return t(O(e))
				}, O = e => async (t, r, {
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
					const O = f.body;
					t(c({
						...O.global,
						lastUpdated: Date.now()
					})), t(u({
						name: e,
						config: {
							...O.listing_info,
							lastUpdated: Date.now()
						}
					}))
				}, m = e => async (t, r, {
					gqlContext: s
				}) => {
					t(p()), await Object(d.h)(s(), e)
				}, _ = e => async (t, r, {
					apiContext: s
				}) => {
					r().posts.models[e] || await t(Object(n.L)(e))
				}, j = Object(s.a)(i.v), g = Object(s.a)(i.J), I = Object(s.a)(i.K), S = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t();
					if (Object(a.h)(s)) return;
					e(g());
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
				return H
			})), r.d(t, "k", (function() {
				return J
			})), r.d(t, "j", (function() {
				return W
			})), r.d(t, "i", (function() {
				return $
			})), r.d(t, "h", (function() {
				return V
			})), r.d(t, "d", (function() {
				return z
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
				return Oe
			})), r.d(t, "a", (function() {
				return me
			})), r.d(t, "u", (function() {
				return Ie
			})), r.d(t, "n", (function() {
				return Se
			})), r.d(t, "s", (function() {
				return Ee
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
				O = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/history.ts"),
				_ = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/constants/page.ts"),
				g = r("./src/reddit/constants/parameters.ts"),
				I = r("./src/reddit/constants/postLayout.ts"),
				S = r("./src/reddit/contexts/PageLayer/index.tsx"),
				E = r("./src/reddit/endpoints/governance/posts.ts"),
				T = r("./src/reddit/endpoints/messages/index.ts"),
				h = r("./src/reddit/endpoints/modQueue/index.ts"),
				y = r("./src/reddit/endpoints/page/subredditPage.ts"),
				A = r("./src/reddit/endpoints/subreddit/about.ts"),
				x = r("./src/reddit/endpoints/subreddit/rules.ts"),
				R = r("./src/reddit/endpoints/user/preferences.ts"),
				D = r("./src/reddit/helpers/filterListingResponse/index.ts"),
				C = r("./src/reddit/helpers/getSubredditSortForListingKeyCreation/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				N = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				w = r("./src/reddit/helpers/trackers/feed.ts"),
				k = r("./src/reddit/models/Subreddit/index.ts"),
				L = r("./src/reddit/models/SubredditRestrictions/index.ts"),
				P = r("./src/reddit/models/Toast/index.ts"),
				U = r("./src/reddit/models/User/index.ts"),
				G = r("./src/reddit/selectors/experiments/gqlSubredditPage.ts"),
				F = r("./src/reddit/selectors/profile.ts"),
				q = r("./src/reddit/selectors/subreddit.ts"),
				B = r("./src/reddit/selectors/user.ts");
			const M = {},
				Q = "SUBREDDIT__MODEL_SUCCEEDED",
				H = "SUBREDDIT__MODEL_PENDING",
				J = "SUBREDDIT__MODEL_FAILED",
				W = "SUBREDDIT__MORE_POSTS_PENDING",
				$ = "SUBREDDIT__MORE_POSTS_LOADED",
				V = "SUBREDDIT__MORE_POSTS_FAILED",
				z = "SUBREDDIT__META_FILTER_TOGGLED",
				K = Object(a.a)(W),
				Y = Object(a.a)($),
				X = Object(a.a)(V),
				Z = Object(a.a)(z),
				ee = Object(a.a)(f.b),
				te = Object(a.a)(f.c),
				re = Object(a.a)(f.a),
				se = (e, t) => async (r, s) => {
					await (t === k.f.User ? r(ne(e)) : r(ie(e)))
				}, ne = e => async (t, r, {
					apiContext: s
				}) => {
					const n = Object(F.m)(r(), e),
						i = await Object(x.c)(s(), e);
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
					const d = await Object(x.b)(n(), e);
					if (d.ok) {
						const e = d.body;
						t(ee({
							rules: e,
							subredditId: i
						}))
					} else {
						t(re());
						const r = `error-block-${e}`;
						t(O.f({
							id: r,
							kind: P.b.Error,
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
						O = Object(c.a)(a, p, {
							t: l,
							...f
						}),
						_ = b.listings.postOrder.loadMore[O],
						T = b.listings.postOrder.listingSort[O];
					let h = p;
					if (T && !h) {
						const e = Object(o.d)(T.sort);
						h = e.sort, l = e.timeSort
					}
					const A = b.listings.postOrder.api.pending[O],
						{
							fetchedTokens: x
						} = b.listings.postOrder,
						R = !(!x[O] || !x[O][_.token]);
					if (A || R) return;
					if (h === d.V.AWARDED && a === j.g) return;
					t(K({
						key: O,
						fetchedToken: _.token
					}));
					const v = {
							after: _.token,
							dist: _.dist,
							forceGeopopular: a === j.d.Popular,
							layout: I.e[Object(S.Q)(b, {})],
							sort: h,
							t: l,
							...i()(f, [...g.l, g.h])
						},
						N = Object(G.a)(b) ? () => Object(y.b)(n(), Object(y.c)(b, a, {
							...v,
							limit: I.a
						}), Object(B.T)(b)) : () => Object(y.a)(s(), a, v),
						k = await N(),
						L = {
							...k.body,
							...Object(D.a)(b, O, k.body)
						};
					if (k.ok) {
						let e;
						const n = L.postIds.filter(e => !!L.posts[e].isMeta),
							i = Object(q.B)(r(), a);
						if (n.length) {
							const t = await Object(E.a)(s(), i, n);
							t.ok && (e = t.body)
						}
						t(Y({
							fetchedToken: _.token,
							key: O,
							meta: b.meta,
							governance: e,
							...L
						})), await t(Object(u.a)({
							subredditId: i,
							postIds: L.postIds,
							skip: ["communityDetails", "subscription"]
						})), Object(w.b)(m.a.NextPageLoad)(r())
					} else {
						t(X({
							error: k.error,
							fetchedToken: _.token,
							key: O,
							...L
						}));
						const e = k.error;
						Object(w.a)(e ? `${k.status}:${e.type}` : "More posts for subreddit failed")(r())
					}
				}, oe = "SUBSCRIPTION__MODERATED_SUBREDDITS_PENDING", ae = "SUBSCRIPTION__MODERATED_SUBREDDITS_LOADED", ce = "SUBSCRIPTION__MODERATED_SUBREDDITS_FAILED", ue = Object(a.a)(oe), le = Object(a.a)(ae), be = Object(a.a)(ce), pe = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!s.user.account || s.subreddits.moderated.api.fetched) return;
					e(ue());
					const n = await Object(h.b)(r(), d.qb.Modqueue, {
						moderated: !0,
						moderated_limit: 50
					});
					n.ok ? e(le(n.body)) : e(be({
						error: n.error
					}))
				}, fe = "SUBREDDIT__ABOUT_PENDING", Oe = "SUBREDDIT__ABOUT_SUCCEEDED", me = "SUBREDDIT__ABOUT_FAILED", _e = Object(a.a)(fe), je = Object(a.a)(Oe), ge = Object(a.a)(me), Ie = e => async (t, r, {
					gqlContext: s
				}) => {
					const n = r();
					if (Object(q.t)(n, {
							subredditName: e
						}) || n.subreddits.api.about.error[e.toLowerCase()] || n.subreddits.api.about.pending[e.toLowerCase()]) return;
					t(_e({
						subredditName: e
					}));
					const i = !Object(q.B)(n, e),
						d = await Object(A.a)(s(), e, i);
					if (d.ok) {
						const r = d.body.data.subreddit,
							s = Object(v.a)(r),
							n = i ? Object(N.a)(r) : void 0;
						t(je({
							subredditName: e,
							subreddits: n ? {
								[n.id]: n
							} : void 0,
							data: s
						}))
					} else t(ge({
						subredditName: e,
						error: d.error
					}))
				}, Se = (e, t, r) => async (s, n, {
					apiContext: i
				}) => {
					var d;
					const o = e.substring(2),
						a = r === L.e.View ? null === (d = Object(B.f)(n(), o)) || void 0 === d ? void 0 : d.subredditId : Object(q.B)(n(), o),
						c = Object(B.k)(n());
					if (c && a) {
						const e = ((e, t, r, s) => {
							return {
								to: `/r/${e}`,
								subject: `[join] I would like to join ${e}`,
								text: r + "\n\n   *To approve this user*, visit [the approved users page for r/" + e + "](https://www.reddit.com/r/" + e + "/about/contributors?user=" + t + ') and click "ADD USER".\n    Approving this user gives them permission to ' + s + ". You can change these community restrictions from the [community settings](/r/" + e + "/about/edit) page.\n\n   To get more information about this user, visit the profile page of [u/" + t + "](/u/" + t + ") or reply to this message to start a conversation."
							}
						})(o, Object(U.e)(c), t, r);
						if ((await Object(T.b)(i(), e)).ok) {
							const e = new Date,
								t = {
									isContributorRequestTimestamp: e.setDate(e.getDate())
								};
							s(Object(p.E)({
								subredditId: a,
								prefs: t
							})), Object(R.i)(a, t, i()), r !== L.e.View && s(Object(l.i)(_.a.CONTRIBUTOR_REQUEST_PENDING))
						}
					}
				}, Ee = e => async (t, r) => {
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
				return O
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "w", (function() {
				return g
			})), r.d(t, "v", (function() {
				return I
			})), r.d(t, "x", (function() {
				return S
			})), r.d(t, "y", (function() {
				return E
			})), r.d(t, "z", (function() {
				return T
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "t", (function() {
				return A
			})), r.d(t, "u", (function() {
				return x
			})), r.d(t, "s", (function() {
				return R
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
				O = "SUBREDDIT__SIMILAR_SUBREDDITS_FAILED",
				m = "SUBREDDIT__ONBOARDING_SUBREDDITS_PENDING",
				_ = "SUBREDDIT__ONBOARDING_SUBREDDITS_LOADED",
				j = "SUBREDDIT__ONBOARDING_SUBREDDITS_FAILED",
				g = "SUBREDDIT__EDIT_REQUESTED",
				I = "SUBREDDIT__EDIT_FAILED",
				S = "SUBREDDIT__EDIT_SUCCESS",
				E = "SUBREDDIT_QUESTIONS_LOADED",
				T = "SUBREDDIT_SURVEY_ANSWERED",
				h = "SUBREDDIT_SURVEY_DISMISSED",
				y = "SUBREDDIT_SURVEY_DISMISS",
				A = "SUBREDDIT_ABOUT_INFO_UPDATE__PENDING",
				x = "SUBREDDIT_ABOUT_INFO_UPDATE__SUCCESS",
				R = "SUBREDDIT_ABOUT_INFO_UPDATE__FAILED"
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
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/config.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/reddit/models/Post/index.ts");
			var a = r("./src/reddit/models/Duplicates/index.ts"),
				c = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(s.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(s.a)(b)),
				f = (e, t) => async (r, s, {
					apiContext: b
				}) => {
					const f = Object(l.Q)(s(), {
						subredditId: e
					}) || Object(u.p)(s(), {
						profileId: e
					});
					if (!f) return;
					const O = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.h)(f) ? n.gc + f.name : f.name
						},
						m = await ((e, t, r) => Object(d.a)(e, {
							data: r,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(o.u)(t)}`,
							method: n.ib.GET
						}))(b(), t, O);
					if (m.ok) {
						const s = m.body;
						r(p({
							distinguishKey: Object(a.a)(t, O),
							postIds: s.postIds,
							posts: s.posts,
							profiles: s.profiles,
							subreddits: s.subreddits,
							subredditId: e
						}))
					}
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
				return h
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return G
			})), r.d(t, "i", (function() {
				return F
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
				O = r("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = r("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				I = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/subredditSettings.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/selectors/widgets.ts");
			const h = "SUBREDDIT_SETTINGS_LOADED",
				y = Object(l.a)(h),
				A = "SUBREDDIT_NOTIFICATION_SETTINGS_LOADED",
				x = Object(l.a)(A),
				R = "SUBREDDIT_NOTIFICATION_SETTINGS_UPDATED",
				D = Object(l.a)(R),
				C = (e, t) => async (r, s, {
					apiContext: n,
					gqlContext: i
				}) => {
					if (!t || !Object(I.S)(s(), t)) {
						const t = await Object(b.c)(n(), e);
						t && t.ok && r(y(t.body))
					}
					if (t && !Object(S.b)(s(), {
							subredditId: t
						})) {
						const e = await Object(O.a)(i(), t);
						if (e && e.ok) {
							const t = e.body,
								s = Object(m.e)(t.data);
							r(x(s))
						}
					}
				}, v = () => async (e, t, {
					apiContext: r
				}) => {
					const s = Object(E.k)(t());
					s && await e(C(u.gc + Object(g.e)(s)))
				}, N = "SUBREDDIT_SETTINGS_UPDATE_REQUESTED", w = "SUBREDDIT_SETTINGS_UPDATE_SUCCESS", k = "SUBREDDIT_SETTINGS_UPDATE_FAILURE", L = Object(l.a)(N), P = Object(l.a)(w), U = Object(l.a)(k), G = (e, t, r = {}, n = !1) => async (d, a, {
					apiContext: u,
					gqlContext: l
				}) => {
					d(L());
					const m = a(),
						g = o()(Object(I.S)(m, e), ...Object.keys(t)),
						E = o()(Object(S.b)(m, {
							subredditId: e
						}), ...Object.keys(r)),
						h = await Object(b.g)(u(), e, t),
						y = Object.keys(r).length > 0;
					let A = !0;
					if (y) {
						A = (await Object(O.b)(l(), e, r)).ok
					}
					if (!h.ok || y && !A) d(U()), d(Object(f.f)({
						kind: j.b.Error,
						text: s.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
							hk: "3wBPeO"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1QXiG6"
						}),
						buttonAction: G(e, t, E, void 0)
					})), n && Object(p.a)(Object(_.c)(m, "BE returned an error:"));
					else {
						const o = Object(b.d)(h.body, i()(b.a));
						d(P({
							settings: {
								...o,
								subredditId: e
							},
							idCardWidgetId: Object(T.c)(m, {
								subredditId: e
							})
						})), y && d(D({
							notificationSettings: r,
							subredditId: e
						}));
						const a = {};
						n && 0 === c()(Object.keys(t), Object.keys(g)).length && (a.buttonText = s.fbt._("Undo", null, {
							hk: "1Gskii"
						}), a.buttonAction = G(e, g, E, n)), d(Object(f.f)({
							kind: j.b.SuccessCommunity,
							text: s.fbt._("Subreddit settings updated successfully", null, {
								hk: "2fmdlZ"
							}),
							...a
						}))
					}
				}, F = (e, t) => async (r, n, {
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
				return E
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return A
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
				O = r("./src/reddit/selectors/experiments/subredditWelcomeMessage.ts"),
				m = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/selectors/welcomeMessage.ts");
			const I = () => async e => {
				await e(Object(d.g)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, S = e => async (t, r, {
				gqlContext: s
			}) => {
				const n = r(),
					i = Object(m.d)(n);
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
					r && t(A({
						subredditId: e,
						welcomeMessage: r
					}))
				}
			}, E = e => async (t, r) => {
				var s;
				const c = r();
				if (!Object(j.K)(c)) return void(await t(Object(i.i)()));
				const u = Object(g.a)(c, e),
					l = (null == u ? void 0 : u.isEnabled) && (null == u ? void 0 : u.isRenderedOnJoin),
					b = (null === (s = Object(_.P)(c, {
						subredditId: e
					})) || void 0 === s ? void 0 : s.length) > 0,
					m = Object(_.bb)(c, {
						subredditId: e
					}),
					I = Object(_.f)(c),
					S = Object(_.q)(c, f.e.Post);
				if (!l || !b || (I || S || m)) return;
				const E = Object(O.a)(c);
				(E === o.Fe.Post || E === o.Fe.Rules) && (Object(n.a)(Object(p.d)()(c)), await t(Object(d.h)(a.a.SUBREDDIT_WELCOME_MESSAGE)))
			}, T = e => async (t, r) => {
				let s = r(),
					n = Object(g.a)(s, e);
				n || (await t(S(e)), s = r(), n = Object(g.a)(s, e)), n && await t(Object(d.h)(a.a.SUBREDDIT_WELCOME_MESSAGE))
			}, h = (e, t, r) => async (s, n, {
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
					t && s(A({
						subredditId: e,
						welcomeMessage: t
					}))
				}
			}, y = "SUBREDDIT_WELCOME_MESSAGE__LOADED", A = Object(s.a)(y)
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
				return O
			})), r.d(t, "u", (function() {
				return m
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "A", (function() {
				return I
			})), r.d(t, "z", (function() {
				return S
			})), r.d(t, "D", (function() {
				return E
			})), r.d(t, "y", (function() {
				return T
			})), r.d(t, "C", (function() {
				return h
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "B", (function() {
				return A
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "i", (function() {
				return N
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
				O = "TAGS__UPDATE_STATE_SUCCESS",
				m = "TAGS__UPDATE_STATE_FAILURE",
				_ = "PRIMARY_TAG__UPDATE_STATE_REQUESTED",
				j = "PRIMARY_TAG__UPDATE_STATE_SUCCESS",
				g = "PRIMARY_TAG__UPDATE_STATE_FAILURE",
				I = "TAGS__OPTIONS_CANCELLED",
				S = "TAGS__OPTION_SELECTED",
				E = "TAGS__SUGGESTED_OPTION_SELECTED",
				T = "TAGS__OPTION_DESELECTED",
				h = "TAGS__SUGGESTED_OPTION_DESELECTED",
				y = "TAGS__INPUT_CHANGED",
				A = "TAGS__SUGGESTED_INPUT_CHANGED",
				x = "GLOBAL__TAGS__LOADED",
				R = "CREATION__TAGS_INPUT_CHANGED",
				D = "CREATION__TAGS_OPTION_SELECTED",
				C = "CREATION__TAGS_OPTION_DESELECTED",
				v = "CREATION__PRIMARY_TAG_SELECTED",
				N = "SETTINGS_PAGE_PRIMARY_TAG_UPDATE"
		},
		"./src/reddit/actions/tags/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return v
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "a", (function() {
				return q
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "g", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return $
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "b", (function() {
				return z
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
			var O = r("./src/reddit/helpers/tags/index.ts"),
				m = r("./src/reddit/helpers/trackers/communityTopics.ts"),
				_ = r("./src/reddit/models/Tags/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/reducers/tags/selected/index.ts"),
				I = r("./src/reddit/selectors/tags.ts");
			Object(n.a)(i.e);
			const S = Object(n.a)(i.t),
				E = Object(n.a)(i.r),
				T = Object(n.a)(i.s),
				h = Object(n.a)(i.q),
				y = Object(n.a)(i.l),
				A = Object(n.a)(i.m),
				x = Object(n.a)(i.k),
				R = Object(n.a)(i.v),
				D = Object(n.a)(i.w),
				C = Object(n.a)(i.u),
				v = Object(n.a)(i.z),
				N = Object(n.a)(i.D),
				w = Object(n.a)(i.y),
				k = Object(n.a)(i.C),
				L = Object(n.a)(i.x),
				P = Object(n.a)(i.B),
				U = (Object(n.a)(i.d), Object(n.a)(i.c), Object(n.a)(i.b), Object(n.a)(i.g)),
				G = Object(n.a)(i.h),
				F = Object(n.a)(i.f),
				q = Object(n.a)(i.a),
				B = Object(n.a)(i.i),
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
					if (u.ok && b.data.subredditInfoById.secondaryTags && b.data.subredditInfoById.availableTags && b.data.subredditInfoById.suggestedTags) n(E(o(b.data))), r && m.h(i(), e, {
						context: t
					});
					else {
						n(h());
						const i = r ? "topics_save" : "topics_load";
						m.g(c, e, i, {
							context: t
						}), n(Object(d.f)(Object(d.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
							hk: "2DUkWX"
						}), j.b.Error, s.fbt._("Retry", null, {
							hk: "1c2xrJ"
						}), Q(e, t, r))))
					}
				}, H = e => async (t, r, {
					gqlContext: n
				}) => {
					t(S());
					const i = await l(n(), {
						subredditId: e
					});
					if (i.ok) {
						const e = i.body;
						t(T(o(e.data)))
					} else t(h()), t(Object(d.f)(Object(d.e)(s.fbt._("Oh no! We didn't load your topics. Please try again.", null, {
						hk: "2DUkWX"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), T(e))))
				}, J = (e, t) => async (r, s, {
					gqlContext: n
				}) => {
					if (!t.length) return null;
					r(y());
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
					return d.ok && o && o.createSubredditTags && o.createSubredditTags.ok ? (r(A()), o.createSubredditTags.createdTags || []) : (r(x()), null)
				}, W = (e, t, r = []) => async (s, n, {
					gqlContext: i
				}) => {
					if (!t.length && !r.length) return;
					s(R());
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
						if (e.state === _.d.NONE && c[e.tagId] && !l[e.tagId]) {
							!!r.find(t => t.state === _.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
						} for (const e of r)
						if (e.state === _.d.NONE && c[e.tagId] && !u[e.tagId]) {
							!!t.find(t => t.state === _.d.TAGGED && t.tagId === e.tagId) || p.add(e.tagId)
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
						O = f.body && f.body.data || null;
					f.ok && O && O.updateSubredditTagStates && O.updateSubredditTagStates.ok && O.updateSubredditTagStates.subreddit ? s(D(o({
						subredditInfoById: O.updateSubredditTagStates.subreddit
					}))) : s(C())
				}, $ = (e, t, r = !1) => async (n, i, o) => {
					const a = i(),
						c = Object(I.q)(a, {
							subredditId: e
						}),
						u = Object(I.C)(a, {
							subredditId: e
						});
					let l = c.filter(e => !!e.id && !!e.action).map(e => ({
						tagId: e.id,
						state: e.action === g.a.ADD ? _.d.TAGGED : _.d.NONE
					}));
					if (u.length > 0) {
						const t = await J(e, u)(n, i, o);
						l = l.concat((t || []).map(e => ({
							tagId: e.id,
							state: _.d.TAGGED
						})))
					}
					await W(e, l)(n, i, o), Object(I.A)(i()) ? n(Object(d.f)(Object(d.e)(s.fbt._("Yikes! It looks like we didn't save all of your topics. Please try again", null, {
						hk: "2Jbh5V"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1c2xrJ"
					}), $(e, t, r)))) : r && n(Object(d.f)(Object(d.e)(s.fbt._("Community topics saved!", null, {
						hk: "3wtajT"
					}), j.b.SuccessCommunity)))
				}, V = (e, t, r) => async (r, n, i) => {
					const o = {
						state: _.d.TAGGED
					};
					if (Object(O.b)(t)) {
						const s = await J(e, [{
							text: t.displayText,
							type: _.c.CLASSIFICATION
						}])(r, n, i);
						s && 1 === s.length && (o.tagId = s[0].id)
					} else {
						if (!t.id) return void r(Object(d.f)(Object(d.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
							hk: "CxjiK"
						}), j.b.Error)));
						o.tagId = t.id
					}(e => !!e.tagId && !!e.state)(o) ? await W(e, [], [o])(r, n, i): r(Object(d.f)(Object(d.e)(s.fbt._("Whoops, we couldn't save that topic. Please try again later.", null, {
						hk: "CxjiK"
					}), j.b.Error)))
				}, z = (e, t, r) => async (s, n, i) => {
					t.id ? await W(e, [], [{
						state: _.d.NONE,
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
					}), K(e, t, r, n, i)))), void o(H(e));
					if (i)
						for (const e of r) m.f(c(), e, {
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
					})), n, i)))), o(H(e))
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
					if ((null == c ? void 0 : c.id) === t.tagId && t.state === _.d.TAGGED) return;
					n(U());
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
					u.ok && l && l.updateSubredditTagStates && l.updateSubredditTagStates.ok ? (n(G((e => {
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
					}), j.b.SuccessCommunity)))) : (n(F()), n(Object(d.f)(Object(d.e)(s.fbt._("Whoops! Unable to update primary topic", null, {
						hk: "3ilZqp"
					}), j.b.Error, s.fbt._("Retry", null, {
						hk: "1dRYXW"
					}), X(e, t)))))
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return l
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "k", (function() {
				return I
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				n = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				O = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				j = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/actions/userFlair/userFlair.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "userFlairEnabledSettingPending", (function() {
				return g
			})), r.d(t, "userFlairEnabledSettingSuccess", (function() {
				return I
			})), r.d(t, "userFlairEnabledSettingFailed", (function() {
				return S
			})), r.d(t, "userFlairAllowAssingOwnSettingPending", (function() {
				return E
			})), r.d(t, "userFlairAllowAssignOwnSettingSuccess", (function() {
				return T
			})), r.d(t, "userFlairAllowAssingOwnSettingFailed", (function() {
				return h
			})), r.d(t, "userFlairSaveTemplatePending", (function() {
				return y
			})), r.d(t, "userFlairSaveTemplateSuccess", (function() {
				return A
			})), r.d(t, "userFlairSaveTemplateFailed", (function() {
				return x
			})), r.d(t, "userFlairDeleteTemplatePending", (function() {
				return R
			})), r.d(t, "userFlairDeleteTemplateSuccess", (function() {
				return D
			})), r.d(t, "userFlairDeleteTemplateFailed", (function() {
				return C
			})), r.d(t, "userFlairReorderTemplatesPending", (function() {
				return v
			})), r.d(t, "userFlairReorderTemplatesSuccess", (function() {
				return N
			})), r.d(t, "userFlairReorderTemplatesFailed", (function() {
				return w
			})), r.d(t, "userFlairFetchSuccess", (function() {
				return k
			})), r.d(t, "userFlairMutated", (function() {
				return L
			})), r.d(t, "authorFlairMutated", (function() {
				return P
			})), r.d(t, "userFlairChanged", (function() {
				return U
			})), r.d(t, "toggleUserFlairInSubreddit", (function() {
				return G
			})), r.d(t, "toggleAssignOwnFlairPermission", (function() {
				return F
			})), r.d(t, "saveUserFlairTemplate", (function() {
				return q
			})), r.d(t, "deleteUserFlairTemplate", (function() {
				return B
			})), r.d(t, "reorderUserFlairTemplates", (function() {
				return M
			})), r.d(t, "userFlairLoadedAndModalOpened", (function() {
				return Q
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./node_modules/lodash/isEmpty.js"),
				d = r.n(i),
				o = r("./src/reddit/actions/authorFlair.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/endpoints/flair/index.ts"),
				u = r("./src/reddit/helpers/flair.ts"),
				l = r("./src/reddit/models/Flair/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/models/User/index.ts"),
				f = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/selectors/userFlair.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				_ = r("./src/reddit/reducers/features/userFlair/index.ts"),
				j = r("./src/reddit/actions/userFlair/constants.ts");
			Object(m.a)({
				features: {
					userFlair: _.a
				}
			});
			const g = Object(n.a)(j.i),
				I = Object(n.a)(j.j),
				S = Object(n.a)(j.h),
				E = Object(n.a)(j.c),
				T = Object(n.a)(j.d),
				h = Object(n.a)(j.b),
				y = Object(n.a)(j.p),
				A = Object(n.a)(j.q),
				x = Object(n.a)(j.o),
				R = Object(n.a)(j.f),
				D = Object(n.a)(j.g),
				C = Object(n.a)(j.e),
				v = Object(n.a)(j.m),
				N = Object(n.a)(j.n),
				w = Object(n.a)(j.l),
				k = Object(n.a)(j.k),
				L = Object(n.a)(j.r),
				P = Object(n.a)(j.a),
				U = (e, t, r, s, n) => async (i, d, {
					apiContext: o
				}) => {
					const a = d(),
						l = a.user.account,
						b = l ? Object(p.e)(l) : void 0,
						m = {
							...Object(O.d)(a, {
								subredditId: n
							}).displaySettings,
							isUserEnabled: r
						},
						_ = {
							userName: s,
							subredditId: n,
							applied: e,
							displaySettings: m
						};
					i(s === b ? L(_) : P(_));
					const j = Object(f.Q)(a, {
							subredditId: n
						}),
						g = t && e ? Object(u.g)(e) : void 0;
					Object(c.g)(o(), s, j.name, t, g), Object(c.i)(o(), r, j.name)
				}, G = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const i = s(),
						d = Object(f.Q)(i, {
							subredditId: e
						}).name;
					r(g());
					const o = await Object(c.l)(n(), d, t);
					if (o.ok) {
						r(I({
							subredditId: e,
							isEnabled: t
						}))
					} else r(S());
					return o.ok
				}, F = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					const i = s(),
						d = Object(f.Q)(i, {
							subredditId: e
						}).name;
					r(E());
					const o = await Object(c.j)(n(), t, l.d.UserFlair, d);
					if (o.ok) {
						r(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else r(h());
					return o.ok
				}, q = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					const d = n(),
						o = Object(f.Q)(d, {
							subredditId: t
						}).name;
					r(y());
					const u = await Object(c.f)(i(), e, o, l.d.UserFlair),
						p = u.ok && !(u.body && !1 === u.body.success);
					if (p) {
						const e = {
							subredditId: t,
							template: u.body
						};
						r(A(e));
						const n = Object(a.e)(s.fbt._("Flair saved!", null, {
							hk: "354KI0"
						}), b.b.SuccessMod);
						r(Object(a.f)(n))
					} else {
						r(x());
						const n = Object(a.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "4tkRNl"
						}), b.b.Error, s.fbt._("Retry", null, {
							hk: "4zNHTm"
						}), q(e, t));
						r(Object(a.f)(n))
					}
					return p
				}, B = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					const d = n(),
						o = Object(f.Q)(d, {
							subredditId: t
						}).name;
					if (r(R()), (await Object(c.b)(i(), e, o)).ok) {
						r(D({
							subredditId: t,
							templateId: e
						}));
						const n = Object(a.e)(s.fbt._("Flair deleted!", null, {
							hk: "1mNdn0"
						}), b.b.SuccessMod);
						r(Object(a.f)(n))
					} else {
						r(C());
						const n = Object(a.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "2QrdJr"
						}), b.b.Error, s.fbt._("Retry", null, {
							hk: "1buF3Y"
						}), B(e, t));
						r(Object(a.f)(n))
					}
				}, M = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					const d = n(),
						o = Object(f.Q)(d, {
							subredditId: t
						}).name,
						u = Object(O.d)(d, {
							subredditId: t
						}).templateIds;
					if (r(v({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(i(), o, l.d.UserFlair, e)).ok) {
						r(N());
						const e = Object(a.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1zrDON"
						}), b.b.SuccessMod);
						r(Object(a.f)(e))
					} else {
						r(w({
							subredditId: t,
							templateIds: u
						}));
						const n = Object(a.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "3gAbwk"
						}), b.b.Error, s.fbt._("Retry", null, {
							hk: "2nPnNw"
						}), M(e, t));
						r(Object(a.f)(n))
					}
				}, Q = (e, t) => async (r, n, {
					apiContext: i
				}) => {
					var u;
					const l = n(),
						p = null === (u = l.features) || void 0 === u ? void 0 : u.userFlair;
					if (p && p[e] && p[e].displaySettings.isEnabled && d()(p[e].templateIds)) {
						const n = Object(f.Q)(l, {
								subredditId: e
							}).name,
							d = await Object(c.d)(i(), n);
						if (d.ok) r(k(d.body)), r(Object(o.b)({
							username: t,
							subredditId: e
						}));
						else {
							const e = Object(a.e)(s.fbt._("Something went wrong. Just don't panic.", null, {
								hk: "4Ck6Cm"
							}), b.b.Error);
							r(Object(a.f)(e))
						}
					} else r(Object(o.b)({
						username: t,
						subredditId: e
					}))
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
				return E
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "g", (function() {
				return D
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "m", (function() {
				return L
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
				O = r("./src/redditGQL/operations/GetTournamentsBaseInfo.json"),
				m = r("./src/redditGQL/operations/ResolvePrediction.json"),
				_ = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				j = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				g = r("./src/redditGQL/operations/VotePrediction.json");
			const I = async (e, {
				postId: t,
				optionId: r,
				coinPackageId: i,
				price: d
			}) => {
				var o;
				const a = await Object(s.a)(e, {
					...g,
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
				...m,
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			});
			var E;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(E || (E = {}));
			const T = async (e, {
				subredditId: t,
				period: r,
				top: i,
				includeCurrentRank: d,
				tournamentId: o
			}) => {
				const a = await Object(s.a)(e, {
					..._,
					variables: {
						subredditId: t,
						period: r,
						top: i,
						includeCurrentRank: d,
						tournamentId: o
					}
				});
				if (!Object(n.c)(a) || a.error) throw new Error("Failed to fetch subreddit top predictors");
				if (!a.body.data.subredditInfoById) throw new Error("Subreddit has no prediction winners");
				return a.body.data.subredditInfoById.predictionWinners
			}, h = (e, t) => Object(s.a)(e, {
				...c,
				variables: {
					input: t
				}
			}), y = async (e, t) => {
				const r = await Object(s.a)(e, {
					...f,
					variables: t
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, A = async (e, t) => {
				const r = await Object(s.a)(e, {
					...O,
					variables: t
				});
				if (!Object(n.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
				return r.body.data.subredditInfoByName.predictionTournaments || []
			}, x = (e, t) => Object(s.a)(e, {
				...i,
				variables: {
					input: t
				}
			}), R = (e, t) => Object(s.a)(e, {
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
			}), v = (e, t) => Object(s.a)(e, {
				...p,
				variables: t
			}), N = async (e, t) => {
				const r = await Object(s.a)(e, {
					...o,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
				return r.body.data.changePrediction.poll
			}, w = async (e, {
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
			}, k = async (e, t) => {
				var r, i;
				const d = await Object(s.a)(e, {
					...a,
					variables: {
						input: t
					}
				});
				if (!Object(n.c)(d) || !(null === (r = d.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = d.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
				return d.body.data.changePredictionVote.poll
			}, L = async (e, t) => {
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
				return m
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "k", (function() {
				return A
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
				O = r("./src/reddit/actions/economics/powerups/helpers.ts");
			const m = async (e, t) => {
				const r = await Object(s.a)(e, {
					...d,
					variables: {
						subredditId: t
					}
				});
				if (!r.ok || !r.body.data.enablePowerups.ok) {
					const {
						errors: e
					} = r.body, t = Object(O.a)(e);
					throw new Error(t || "Error enabling powerups for given subreddit")
				}
			}, _ = e => Object(s.a)(e, f, {
				traceRequestName: "user_powerups"
			}), j = (e, t) => Object(s.a)(e, {
				variables: {
					id: t
				},
				...c
			}, {
				traceRequestName: "redditor_powerups"
			}), g = (e, t, r) => Object(s.a)(e, {
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
					} = r.body, t = Object(O.a)(e);
					throw new Error(t || "Unable to fetch subreddit powerups")
				}
				return r.body.data.subredditsInfoByIds
			}, E = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}), T = (e, t) => Object(s.a)(e, {
				...o,
				variables: t
			}), h = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			}), y = (e, t) => Object(s.a)(e, {
				...i,
				variables: t
			}), A = async (e, t, r) => {
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
				return S
			})), r.d(t, "b", (function() {
				return E
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
				O = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				m = r("./src/reddit/models/Subreddit/index.ts"),
				_ = r("./src/reddit/selectors/platform.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				I = r("./src/redditGQL/operations/SubredditPage.json");
			const S = (e, t, r, s) => {
					var n, o, a, c;
					const {
						after: b,
						geo_filter: f,
						isMobile: O,
						layout: m,
						limit: I,
						recentPostIds: S,
						sort: E,
						t: T
					} = r, h = Object(g.T)(e), y = Object(_.q)(e), A = Object(i.a)(t), x = Object(d.a)(t), R = Object(j.P)(e, {
						subredditId: Object(j.B)(e, t)
					}).length > 0, D = {
						name: t,
						includeIdentity: h && !e.user.account,
						adContext: {
							layout: m ? m.toUpperCase() : u.a.Card,
							reddaid: e.user.reddaid
						},
						isFake: x,
						includeAppliedFlair: s && !0,
						includePowerups: s && !x,
						includeQuestions: s && h && !x,
						includeRecents: x && S && S.length > 0 || !1,
						includeRedditorKarma: s && h && !(null === (o = null === (n = e.user.account) || void 0 === n ? void 0 : n.karma) || void 0 === o ? void 0 : o.total),
						includeRules: s && !x && !R,
						includeSubredditLinks: s && !h,
						includeTopicLinks: s && !h,
						includeTrending: x,
						includeWelcome: s && !0,
						isAdHocMulti: A,
						isAll: t === l.d.All,
						isPopular: t === l.d.Popular,
						recentPostIds: S || [],
						subredditNames: A ? t.split("+") : [],
						...h && {
							username: (null === (a = e.user.account) || void 0 === a ? void 0 : a.username) || (null === (c = e.user.account) || void 0 === c ? void 0 : c.displayText)
						}
					};
					return E && (D.sort = E.toUpperCase()), T && (D.range = T.toUpperCase()), O ? D.pageSize = Object(p.a)(m) : I && (D.pageSize = I), y && y.ad && (D.forceAds = {
						ad: y.ad
					}), (y && y.geo_filter || f) && (D.region = y && y.geo_filter || f), b && (D.after = btoa(b)), D
				},
				E = async (e, t, r) => {
					const s = Date.now(),
						i = await ((e, t) => Object(a.a)(e, {
							...I,
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
						ok: !!o.data.subredditInfoByName && !Object(m.j)(o.data.subredditInfoByName),
						status: T(o.data),
						body: l
					}
				}, T = e => {
					if (!e.subredditInfoByName) return 404;
					if (Object(m.j)(e.subredditInfoByName)) {
						if (e.subredditInfoByName.forbiddenReason === m.c.Banned) return 404;
						if (e.subredditInfoByName.forbiddenReason === m.c.GoldOnly || e.subredditInfoByName.forbiddenReason === m.c.Private || e.subredditInfoByName.forbiddenReason === m.c.Quarantined) return 403
					}
					return 200
				}, h = ({
					recentPostIds: e,
					...t
				}) => e && e.length ? {
					...t,
					recentPostIds: e.join(",")
				} : t;
			t.a = (e, t, r) => Object(o.a)(e, {
				endpoint: Object(b.a)(Object(O.a)(`${s.a.gatewayUrl}/desktopapi/v1/subreddits/${t}`)),
				method: n.ib.GET,
				data: r && h(r) || {},
				traceRequestName: "get_subreddit_page"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/reddit/helpers/flair.ts"),
				n = r("./src/reddit/models/PostDraft/index.ts");
			const i = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				d = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				o = e => {
					switch (e.kind) {
						case n.b.Link:
							return "link";
						case n.b.Markdown:
							return "markdown";
						case n.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				a = e => {
					switch (e) {
						case "link":
							return n.b.Link;
						case "markdown":
							return n.b.Markdown;
						case "richtext":
							return n.b.RichText;
						default:
							return "self"
					}
				},
				c = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case n.b.Link:
						case n.b.Markdown:
							return e.body;
						case n.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(s.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = e => ({
					id: e.draftId || void 0,
					...d(e),
					kind: o(e),
					title: c(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
		},
		"./src/reddit/endpoints/publicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "a", (function() {
				return w
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
				O = r("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				m = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/redditGQL/operations/LiveVideoPosts.json");

			function g() {
				return Object(f.b)() ? "https://strapi.reddit.com" : d.a.streamingApiUrl
			}
			const I = async (e, t) => {
				let r;
				return r = t === b.R ? "/config" : `/${t}/config`, Object(l.b)({
					endpoint: `${g()}${r}`,
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
			}), E = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}`,
				method: a.ib.GET,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), T = async (e, t, r) => {
				let s;
				s = t === b.R ? "/broadcasts" : `/${t}/broadcasts`;
				const n = Object(o.a)(s, {
					cursor: null == r ? void 0 : r.cursor,
					page_size: null == r ? void 0 : r.pageSize
				});
				return Object(l.b)({
					endpoint: `${g()}${n}`,
					method: a.ib.GET,
					headers: i()(e.headers(), [c.c, c.b])
				}).then(C)
			}, h = async e => Object(l.b)({
				endpoint: `${g()}/recommended_viewer_subreddits`,
				method: a.ib.GET,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), y = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/vote/${v(r)}`,
				method: a.ib.POST,
				headers: i()(e.headers, [c.c, c.b])
			}).then(C), A = async (e, t) => Object(l.b)({
				endpoint: `${g()}/videos/${t}/heartbeat`,
				method: a.ib.POST,
				headers: i()(e.headers(), [c.c, c.b])
			}).then(C), x = async (e, t, r, s) => {
				const n = r.rteState;
				if (!n) return Promise.reject(new Error("Editor state is undefined"));
				const i = p.a.getRawText(n);
				return i ? R(e, t, i).then(e => e.ok && e.body && e.body.data ? {
					...e,
					body: {
						parentId: t,
						comment: {
							...Object(O.a)(e.body.data.r2_comment, s),
							media: D(n)
						},
						automuteLevel: e.body.data.auto_mute_status.level
					},
					error: void 0
				} : e) : Promise.reject(new Error("Cannot send empty message"))
			}, R = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/comment_v2`,
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
				rteMode: m.i.RICH_TEXT
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
			}, v = e => e === _.a.upvoted ? "up" : e === _.a.downvoted ? "down" : "unset", N = async (e, t, r) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}`,
				method: a.ib.PUT,
				headers: i()(e.headers, [c.c, c.b]),
				data: {
					data: {
						chat_disabled: r
					}
				},
				type: "json"
			}).then(C), w = async (e, t) => Object(l.b)({
				endpoint: `${g()}/broadcasts/${t}/auto_mute_status`,
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
				return m
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "e", (function() {
				return T
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
			const O = ({
					rules: e
				}) => ({
					rules: e.map(e => ({
						...d()(e, (e, t) => n()(t)),
						kind: "link" === e.kind ? "post" : e.kind
					}))
				}),
				m = (e, t) => Object(c.a)(e, {
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
				_ = (e, t) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/user/${t}/about/rules.json`,
					method: o.ib.GET
				}).then(e => (e.ok && e.body.rules && (e.body = O(e.body)), e)),
				j = e => e.ok ? (e.body = Object(f.h)(JSON.parse(e.body.json.data.rules)), e) : e.body,
				g = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
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
				}).then(e => j(e)), E = e => e.map(e => encodeURIComponent(e)).join(), T = async (e, t, r) => Object(a.a)(Object(u.a)(e, [b.a]), {
					endpoint: `${e.apiUrl}/api/reorder_subreddit_rules`,
					method: o.ib.POST,
					data: {
						r: t,
						new_rule_order: E(r),
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
					O = b.map(e => s[e]);
				let m;
				const _ = [],
					j = {
						subreddits: i,
						profiles: c
					};
				for (let n = 0; n < O.length; n++) {
					const r = O[n];
					let s = !1;
					if (r.isSponsored) {
						const e = n > 0 && O[n - 1],
							t = n < O.length - 1 && O[n + 1];
						e && a(e, j) && t && a(t, j) && (s = !0)
					}
					r.isSponsored && s && (null == m && f + n >= 3 || n - m >= 3) ? (m = n, _.push(r.id)) : r.isSponsored ? r.isSponsored && Object(o.a)({
						source: "feed",
						action: "remove",
						noun: "ad",
						...d.defaults(e),
						listing: d.listing(e, t)
					}) : _.push(r.id)
				}
				return {
					...u,
					subreddits: i,
					profiles: c,
					posts: s,
					postIds: _
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
		"./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			const s = e => ({
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
			t.a = e => {
				var t;
				return {
					subreddits: (null === (t = e.data.subredditInfoById) || void 0 === t ? void 0 : t.linkedSubreddits) ? e.data.subredditInfoById.linkedSubreddits.map(s) : []
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeSubredditPageFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return M
			}));
			var s = r("./src/lib/assertNever.ts"),
				n = r("./src/lib/env/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/models/Post/index.ts"),
				a = r("./src/reddit/models/RichTextJson/index.ts"),
				c = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				b = r("./src/reddit/helpers/graphql/normalizePostFlairStyleTemplateFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = r("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				O = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditLinksFromGql/index.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				I = r("./src/reddit/helpers/graphql/normalizeSubredditRulesFromGql/index.ts"),
				S = r("./src/reddit/helpers/graphql/normalizeSubredditStylesFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts"),
				T = r("./src/reddit/models/Flair/index.ts"),
				h = r("./src/reddit/models/Widgets/index.ts"),
				y = e => {
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
						if (o.__typename !== h.d.Menu) break;
						n.items[o.id] = A(o), n.layout.topbar.order.push(o.id)
					}
					for (const o of i) switch (o.__typename !== h.c.IdCard && o.__typename !== h.c.Moderators && n.layout.sidebar.order.push(o.id), o.__typename) {
						case h.c.Button:
							n.items[o.id] = x(o);
							break;
						case h.c.Calendar:
							n.items[o.id] = R(o);
							break;
						case h.c.CommunityList:
							n.items[o.id] = D(o);
							break;
						case h.c.Custom:
							n.items[o.id] = C(o);
							break;
						case h.c.IdCard:
							n.items[o.id] = v(o), n.layout.idCardWidget = o.id;
							break;
						case h.c.Image:
							n.items[o.id] = N(o);
							break;
						case h.c.Moderators:
							n.items[o.id] = w(o), n.layout.moderatorWidget = o.id;
							break;
						case h.c.PostFlair:
							n.items[o.id] = P(o);
							break;
						case h.c.SubredditRules:
							n.items[o.id] = U({
								widget: o,
								rules: t,
								name: s
							});
							break;
						case h.c.TextArea:
							n.items[o.id] = G(o)
					}
					return n
				};
			const A = e => ({
					...F(e),
					kind: h.j.Menu,
					showWiki: e.isWikiShown,
					data: e.menus
				}),
				x = e => ({
					...F(e),
					kind: h.i.Button,
					shortName: e.shortName,
					description: e.description.markdown,
					descriptionHtml: e.description.html,
					descriptionRichtext: e.description.richtext,
					buttons: e.buttons.map(e => {
						var t, r, s, n, i, d, o;
						return {
							text: e.text,
							hoverState: e.hoverState.kind === h.e.Image ? {
								kind: h.k.Image,
								url: (null === (t = e.hoverState.media.source) || void 0 === t ? void 0 : t.url) || "",
								height: (null === (r = e.hoverState.media.source) || void 0 === r ? void 0 : r.dimensions.height) || 0,
								width: (null === (s = e.hoverState.media.source) || void 0 === s ? void 0 : s.dimensions.width) || 0
							} : {
								kind: h.k.Text,
								text: e.hoverState.text,
								color: e.hoverState.color,
								fillColor: e.hoverState.fillColor,
								textColor: e.hoverState.textColor
							},
							...e.kind === h.e.Image ? {
								kind: h.k.Image,
								linkUrl: e.media.linkUrl,
								url: (null === (n = e.media.source) || void 0 === n ? void 0 : n.url) || "",
								height: (null === (i = e.media.source) || void 0 === i ? void 0 : i.dimensions.height) || 0,
								width: (null === (d = e.media.source) || void 0 === d ? void 0 : d.dimensions.width) || 0
							} : {
								kind: h.k.Text,
								url: (null === (o = e.media.source) || void 0 === o ? void 0 : o.url) || "",
								color: e.color,
								fillColor: e.fillColor,
								textColor: e.textColor
							}
						}
					})
				}),
				R = e => ({
					...F(e),
					kind: h.i.Calendar,
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
				D = e => ({
					...F(e),
					kind: h.i.CommunityList,
					shortName: e.shortName,
					data: e.communities.map(e => ({
						name: e.name,
						type: "subreddit",
						id: e.id,
						bannerBackgroundColor: e.styles.bannerBackgroundColor,
						bannerBackgroundImage: e.styles.bannerBackgroundImage,
						communityIcon: e.styles.icon,
						displayText: e.name,
						subscribers: e.subscribersCount,
						iconUrl: e.styles.icon,
						isSubscribed: e.isSubscribed,
						primaryColor: e.styles.primaryColor,
						isNSFW: e.isNsfw
					}))
				}),
				C = e => ({
					...F(e),
					kind: h.i.Custom,
					shortName: e.shortName,
					text: e.text.markdown,
					textHtml: e.text.html,
					textRichtext: e.text.richtext,
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
				v = e => ({
					...F(e),
					kind: h.i.IdCard,
					shortName: e.shortName,
					currentlyViewingCount: e.currentlyViewingCount,
					currentlyViewingText: e.currentlyViewingText,
					description: e.descriptionText,
					subscribersCount: e.subscribersCount,
					subscribersText: e.subscribersText
				}),
				N = e => ({
					...F(e),
					kind: h.i.Image,
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
				w = e => ({
					...F(e),
					kind: h.i.Moderators,
					mods: e.moderators.map(e => ({
						name: e.redditor.name,
						...e.flair ? {
							authorFlairBackgroundColor: e.flair.template.backgroundColor,
							authorFlairRichText: e.flair.richtext ? JSON.parse(e.flair.richtext) : [],
							authorFlairText: e.flair.template.text || "",
							authorFlairTextColor: e.flair.textColor === T.i.Light ? T.e.Light : T.e.Dark,
							authorFlairType: e.flair.type
						} : {
							authorFlairBackgroundColor: "",
							authorFlairRichText: [],
							authorFlairText: "",
							authorFlairTextColor: T.e.Dark,
							authorFlairType: T.f.Text
						}
					}))
				}),
				k = e => {
					switch (e) {
						case T.g.All:
							return T.a.All;
						case T.g.Text:
							return T.a.Text;
						case T.g.Emoji:
							return T.a.Emoji
					}
				},
				L = e => e === T.i.Light ? T.e.Light : T.e.Dark,
				P = e => ({
					...F(e),
					kind: h.i.PostFlair,
					shortName: e.shortName,
					order: e.templates.map(e => e.id || ""),
					display: e.display,
					templates: e.templates.reduce((e, t) => t.id ? (e[t.id] = {
						allowableContent: k(t.allowableContent),
						backgroundColor: t.backgroundColor,
						cssClass: t.cssClass,
						id: t.id,
						maxEmojis: t.maxEmojis,
						modOnly: t.isModOnly,
						richtext: t.richtext ? JSON.parse(t.richtext) : [],
						text: t.text,
						textColor: L(t.textColor),
						textEditable: t.isEditable,
						type: t.type
					}, e) : e, {})
				}),
				U = ({
					widget: e,
					rules: t,
					name: r
				}) => ({
					...F(e),
					kind: h.i.SubredditRules,
					shortName: e.shortName,
					display: e.display,
					subreddit: r,
					data: t ? Object(I.a)(t).rules : []
				}),
				G = e => ({
					...F(e),
					kind: h.i.Textarea,
					shortName: e.shortName,
					text: e.text.markdown,
					textHtml: e.text.html,
					textRichtext: e.text.richtext
				}),
				F = e => ({
					id: e.id,
					styles: e.styles
				});
			var q = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				B = r("./src/reddit/helpers/graphql/helpers.ts");
			const M = (e, t, r) => {
				const d = {
						account: null,
						appliedFlair: {},
						authorFlair: {},
						postIds: [],
						postInstances: {},
						posts: {},
						postFlair: {},
						powerups: {},
						preferences: null,
						profiles: {},
						questions: {},
						recentPostIds: [],
						structuredStyles: {},
						subredditAboutInfo: {},
						subredditLinks: {},
						subredditPermissions: {},
						subredditRules: [],
						subreddits: {},
						subredditTopicLinks: void 0,
						token: "",
						trendingSubredditIds: [],
						welcomeMessage: void 0
					},
					a = e => {
						if (Object(o.j)(e) || Object(o.i)(e)) return null;
						if (d.posts[e.id]) return e.id;
						const t = Object(p.f)(e);
						d.posts[t.id] = t;
						const {
							crosspostRoot: r
						} = e;
						r && r.type === o.a.Post && r.postInfo && a(r.postInfo);
						let c = t.id;
						if (e.authorFlair && (d.authorFlair[t.belongsTo.id] || (d.authorFlair[t.belongsTo.id] = {}), d.authorFlair[t.belongsTo.id][t.author] = Object(u.a)(e.authorFlair)[0]), Object(o.l)(e)) d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(O.a)(e.profile));
						else if (Object(o.n)(e)) d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(_.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(l.a)(e.subreddit));
						else if (Object(o.h)(e)) {
							const r = Object(p.b)(e);
							if (!r) return null;
							c = r, d.posts[r] = {
								...t,
								id: r,
								permalink: `${t.permalink}?instanceId=${encodeURIComponent(r)}`
							}, d.posts[t.id] || (d.posts[t.id] = {
								...t,
								events: []
							}), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(r)
						} else try {
							Object(s.a)(e)
						} catch (b) {
							const t = `Received unhandled element type when processing subreddit posts: "${e.__typename}"`;
							Object(n.b)() || console.warn(t), i.c.captureMessage(t)
						}
						return c && d.postIds.push(c), c
					};
				if (e.forEach(e => a(e)), t) {
					d.trendingSubredditIds = t.map(e => e.id);
					for (const e of t) d.subreddits[e.id] = Object(_.a)(e)
				}
				const c = d.postIds.length - 1;
				return d.token = c >= 0 ? d.postIds[c] : "", r && (d.account = Object(q.a)(r), d.preferences = r.preferences && Object(f.a)(r.preferences, r.interactions) || null), d
			};
			t.a = ({
				adhocMultiredditByNames: e,
				all: t,
				identity: r,
				popular: s,
				recentPosts: l,
				subredditInfoByName: p,
				trendingSubreddits: f
			}) => {
				var O, _;
				if (!p) return {
					reason: c.e.NotFoundSubreddit,
					data: {
						account: r && Object(q.a)(r) || null
					}
				};
				if (Object(c.j)(p)) {
					const {
						banMessage: e,
						publicDescriptionText: t,
						quarantineMessage: s,
						isEmailRequiredForQuarantineOptin: n
					} = p;
					return {
						reason: Q(p.forbiddenReason),
						data: {
							account: r && Object(q.a)(r) || null,
							banMessage: e || void 0,
							description: t,
							quarantineRequiresEmailOptin: n,
							...s ? {
								quarantineMessage: s.markdown,
								quarantineMessageRTJson: Object(B.f)(s.richtext, a.i)
							} : {}
						}
					}
				}
				const T = {},
					h = p || s || t || e,
					[A, x] = h.elements.edges.reduce((e, t) => {
						var r, s, n, i;
						const [d, a] = e, c = t.node;
						return Object(o.k)(c) ? (d.push(c), (null === (s = null === (r = c.flair) || void 0 === r ? void 0 : r.template) || void 0 === s ? void 0 : s.id) && (null === (i = null === (n = c.flair) || void 0 === n ? void 0 : n.template) || void 0 === i ? void 0 : i.postStyle) && (T[c.flair.template.id] = Object(b.a)(c.flair.template.postStyle))) : a.push(c), [d, a]
					}, [
						[],
						[]
					]);
				if (x.length) {
					const e = `Received unhandled ${x.length} elements when processing subreddit data: "${x[0].__typename}"`;
					Object(n.b)() || console.warn(e), i.c.captureMessage(e)
				}
				l && A.push(...l);
				const R = h.elements.dist,
					D = M(A, f, r);
				if (p.styles && (D.structuredStyles = {
						data: {
							style: Object(S.a)(p.styles)
						}
					}), D.structuredStyles = {
						data: {
							...p.styles ? {
								style: Object(S.a)(p.styles)
							} : {},
							content: {
								...p.widgets ? {
									widgets: y(p)
								} : {}
							},
							flairTemplate: T
						}
					}, D.subredditAboutInfo = Object(m.a)(p), p.modPermissions && (D.subredditPermissions = Object(g.a)(p.modPermissions)), p.welcomeMessage && (D.welcomeMessage = p.welcomeMessage), p.rules && (D.subredditRules = Object(I.a)(p.rules).rules), ((null == p ? void 0 : p.answerableQuestions) || p.contentRatingSurvey || p.communityProgressModule) && (D.questions = {
						answerableQuestions: null == p ? void 0 : p.answerableQuestions,
						contentRatingSurvey: null == p ? void 0 : p.contentRatingSurvey,
						communityProgressModule: null == p ? void 0 : p.communityProgressModule
					}), !Object(c.j)(p)) {
					const e = {
						powerups: p.powerups,
						powerupsSettings: p.powerupsSettings,
						supporters: p.supporters,
						productOffers: p.productOffers,
						subredditAchievementFlairs: p.subredditAchievementFlairs
					};
					D.powerups = Object(d.e)(e, r)
				}
				return D.subredditLinks = Object(j.a)({
					data: {
						subredditInfoById: p
					}
				}), D.subredditTopicLinks = Object(E.a)({
					data: {
						subredditInfoById: p
					}
				}), D.appliedFlair = {
					flair: (null === (O = p.flairedRedditorByName) || void 0 === O ? void 0 : O.flair) ? Object(u.a)(null === (_ = p.flairedRedditorByName) || void 0 === _ ? void 0 : _.flair)[0] : void 0,
					displaySettings: p.authorFlairSettings
				}, {
					...D,
					...null !== R && {
						dist: R
					}
				}
			};
			const Q = e => {
				switch (e) {
					case c.c.Banned:
						return c.e.BannedSubreddit;
					case c.c.GoldOnly:
						return c.e.GoldSubreddit;
					case c.c.Private:
						return c.e.PrivateSubreddit;
					case c.c.Quarantined:
						return c.e.QuarantinedSubreddit;
					case c.c.Unknown:
						return c.e.ForbiddenSubreddit
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
		"./src/reddit/helpers/graphql/normalizeSubredditTopicLinksFromGql/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				var t, r;
				return (null === (r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.subredditInfoById) || void 0 === r ? void 0 : r.topicLinks) || void 0
			}
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
				return O
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "h", (function() {
				return _
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
				O = (e, t, r, s) => Object(d.a)({
					...l(e, t, s),
					topicTag: c(e, t, r),
					noun: "topic_remove"
				}),
				m = (e, t, r) => Object(d.a)({
					...l(e, t, r),
					noun: "topic_tag_field"
				}),
				_ = (e, t, r) => Object(d.a)({
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
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(s || (s = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return s
			}))
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
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
				i = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				d = r("./src/reddit/actions/modQueue/constants.ts"),
				o = r("./src/reddit/actions/pages/constants.ts"),
				a = r("./src/reddit/actions/pages/postCreation.ts"),
				c = r("./src/reddit/actions/pages/postDraft.ts"),
				u = r("./src/reddit/actions/pages/subreddit.ts"),
				l = r("./src/reddit/actions/userFlair/constants.ts");
			const b = {};
			t.a = (e = b, t) => {
				var r, s, p, f, O;
				switch (t.type) {
					case u.SUBREDDIT_LOADED:
					case a.PAGE_LOADED:
					case c.PAGE_LOADED:
					case o.b:
					case o.f:
					case l.k:
						return {
							...e, ...t.payload.userFlair
						};
					case d.i:
					case d.f:
					case d.m:
					case d.p:
					case d.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: s
						} = r, n = {
							...e
						};
						return Object.keys(s).forEach(e => {
							n[e] || (n[e] = s[e])
						}), n
					}
					case l.r: {
						const {
							subredditId: r,
							applied: s,
							displaySettings: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								...s && {
									applied: s
								},
								displaySettings: n
							}
						}
					}
					case i.h: {
						const {
							subredditId: r,
							applied: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: s
							}
						}
					}
					case l.j: {
						const {
							subredditId: r,
							isEnabled: s
						} = t.payload, n = {
							...e[r].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: n
							}
						}
					}
					case l.d: {
						const {
							subredditId: s,
							canAssignOwn: n
						} = t.payload, i = {
							...null === (r = e[s]) || void 0 === r ? void 0 : r.permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								permissions: i
							}
						}
					}
					case l.q: {
						const r = t.payload,
							n = e[r.subredditId],
							i = null === (s = e[r.subredditId]) || void 0 === s ? void 0 : s.templates,
							d = null === (p = e[r.subredditId]) || void 0 === p ? void 0 : p.templateIds,
							o = (null === (f = r.template) || void 0 === f ? void 0 : f.id) || (null === (O = r.template) || void 0 === O ? void 0 : O.templateId);
						if (!o) return;
						const a = {
								...i,
								[o]: r.template
							},
							c = [...d];
						return c.includes(o) || c.push(o), {
							...e,
							[r.subredditId]: {
								...n,
								templates: a,
								templateIds: c
							}
						}
					}
					case l.g: {
						const r = t.payload,
							s = e[r.subredditId],
							i = e[r.subredditId].templates,
							d = e[r.subredditId].templateIds,
							o = n()(i, r.templateId),
							a = d.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...s,
								templates: {
									...o
								},
								templateIds: a
							}
						}
					}
					case l.m:
					case l.l: {
						const r = t.payload,
							s = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...s,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
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
				return O
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "j", (function() {
				return T
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
				O = Object(s.a)(o, e => e.global.rpan_intro_video_url),
				m = Object(s.a)(o, e => e.global.url_to_show_for_unavailable_video),
				_ = Object(s.a)(o, e => !1),
				j = Object(s.a)(o, e => e.isError),
				g = Object(s.a)(o, e => e.global.max_chat_comment_length),
				I = e => e.publicAccessNetwork.api.recommendedViewerSubreddits,
				S = (Object(s.a)(I, e => e.isError), Object(s.a)(I, e => e.isPending)),
				E = Object(n.a)(Object(s.a)(I, e => e.subreddits)),
				T = Object(s.a)(E, e => [{
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
				a = Object(s.a)(o, e => e === n.Oc.Community || e === n.Oc.Supporter)
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
			const i = e => s.ge.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.oe
				}),
				d = e => s.ge.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.Yd
				}),
				o = e => s.Be.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ve
				}),
				a = (e, t, r) => {
					const i = r(e, t);
					return !(!i || !i.meter) && (i.meter.enabled && o(e) && s.Ue.Enabled === Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: s.Te
					}))
				},
				c = e => Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.ne
				}),
				u = e => {
					switch (e) {
						case s.te.Five:
							return .05;
						case s.te.Ten:
							return .1;
						case s.te.Fifty:
							return .5;
						default:
							return .01
					}
				},
				l = e => s.ge.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.pe
				}),
				b = e => s.ge.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.le
				}),
				p = e => s.ge.Enabled === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: s.me
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
				experimentName: n.ze,
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
				return O
			})), r.d(t, "B", (function() {
				return m
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "k", (function() {
				return N
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "y", (function() {
				return k
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "q", (function() {
				return U
			})), r.d(t, "C", (function() {
				return G
			})), r.d(t, "w", (function() {
				return F
			})), r.d(t, "s", (function() {
				return B
			})), r.d(t, "x", (function() {
				return M
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "v", (function() {
				return H
			})), r.d(t, "D", (function() {
				return J
			})), r.d(t, "m", (function() {
				return W
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
				O = e => e.tags.api.create.error || e.tags.api.deleteTag.error || e.tags.api.fetch.error || e.tags.api.update.error,
				m = e => e.tags.api.create.pending || e.tags.api.deleteTag.pending || e.tags.api.fetch.pending || e.tags.api.update.pending,
				_ = (e, {
					subredditId: t
				}) => e.tags.selected.inputByItemId[t] || "",
				j = (e, {
					subredditId: t
				}) => e.tags.selected.suggestedInputByItemId[t] || "",
				g = [],
				I = (e, {
					subredditId: t
				}) => n()(S(e, {
					subredditId: t
				}), e => !!e.action) || n()(T(e, {
					subredditId: t
				}), e => !!e.action),
				S = (e, {
					subredditId: t
				}) => e.tags.selected.selectedOptions[t] || g,
				E = (e, {
					subredditId: t
				}) => e.tags.selected.selectedSuggestedOptions[t] || g,
				T = (e, {
					subredditId: t
				}) => e.tags.selected.deselectedOptions[t] || g,
				h = {},
				y = {},
				A = e => e.tags.availableGlobalTagOrder.recommendedGlobal.map(t => e.tags.models.globalSubredditTags[t]),
				x = e => e.tags.models.globalSubredditTags,
				R = e => e.tags.availableGlobalTagOrder.global.map(t => e.tags.models.globalSubredditTags[t]),
				D = (e, {
					subredditId: t
				}) => e.tags.models.subredditScopedTags[t] || y,
				C = (e, t) => {
					const r = d()(t);
					for (let s = 0; s < r.length; s++)
						if (r[s].text.toLowerCase().trim() === e.toLowerCase().trim()) return r[s];
					return null
				},
				v = (e, {
					itemId: t
				}) => e.tags.models.itemTags[t] || h,
				N = (e, {
					itemId: t
				}) => !!e.tags.models.itemTags[t],
				w = (e, {
					itemId: t
				}) => e.tags.models.suggestedItemTags[t] || h,
				k = (e, {
					itemId: t
				}) => d()(w(e, {
					itemId: t
				})).filter(e => e.isRelevant).map(e => Object(c.e)(e, !0)),
				L = (e, {
					itemId: t
				}) => e.tags.models.sortedItemTags[t] || [],
				P = Object(o.a)((e, {
					thingId: t,
					suggested: r = !1
				}) => {
					const s = F(e, {
						subredditId: t
					});
					return d()(((e, {
						thingId: t,
						suggested: r = !1
					}) => {
						const s = (r ? j(e, {
								subredditId: t
							}) : _(e, {
								subredditId: t
							})) ? R(e) : A(e),
							n = r ? E(e, {
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
				U = (e, {
					subredditId: t
				}) => S(e, {
					subredditId: t
				}).concat(T(e, {
					subredditId: t
				})),
				G = (e, {
					subredditId: t
				}) => S(e, {
					subredditId: t
				}).filter(a.b).map(e => ({
					text: e.displayText,
					type: c.c.CLASSIFICATION
				})),
				F = (e, {
					subredditId: t
				}) => e.tags.models.subredditPrimaryTagId[t] || null,
				q = (e, t) => t && e.tags.models.globalSubredditTags[t] || null,
				B = (e, t) => {
					const r = e.tags.selected.selectedPrimaryTagId[t.subredditId] || null;
					return q(e, r)
				},
				M = (e, t) => {
					const r = F(e, t);
					return q(e, r)
				},
				Q = e => e.tags.creation.selectedPrimaryTagId || null,
				H = e => {
					const t = Q(e);
					return q(e, t)
				},
				J = e => e.tags.api.updatePrimaryTag.pending,
				W = (e, {
					subredditId: t
				}) => Object.keys(v(e, {
					itemId: t
				})).length > 0
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return b
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/models/Flair/index.ts"),
				i = r("./src/reddit/selectors/gold/powerups/index.ts"),
				d = r("./src/reddit/selectors/moderatorPermissions.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(o.a)({
				features: {
					userFlair: a.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				u = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : n.b.Right,
				b = Object(s.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r && r.displaySettings && r.permissions) return {
						type: n.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const r = u(e, {
							subredditId: t
						}),
						s = b(e, {
							subredditId: t
						}),
						n = c(e, {
							subredditId: t
						});
					if (!r || !s || !n) return !1;
					if (n.applied) return !0;
					const i = Object(d.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: o
						} = s.permissions;
					return !!(n.templateIds || []).find(e => {
						return !n.templates[e].modOnly || i
					}) && o
				},
				f = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const r = p(e, {
							subredditId: t
						}),
						s = Object(i.h)(e, {
							subredditId: t
						});
					return r || s
				}
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
				return O
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "b", (function() {
				return I
			}));
			var s = r("./src/lib/objectSelector/index.ts"),
				n = r("./src/reddit/constants/posts.ts"),
				i = r("./src/reddit/helpers/name/index.ts"),
				d = r("./src/reddit/helpers/widgets/index.tsx"),
				o = r("./src/reddit/selectors/profile.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			const c = [],
				u = e => e.widgets.models,
				l = Object(s.a)((e, t) => Object(d.l)(t) ? e.widgets.models[t.widgetId] : Object(d.f)(t.widgetKind)),
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
				O = (e, t) => e.widgets.menuIds[t.subredditId],
				m = (e, t) => {
					const r = O(e, t);
					return r ? e.widgets.models[r] : null
				},
				_ = (e, t) => {
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
				g = (e, t) => {
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
			e.exports = JSON.parse('{"id":"f2c4f7004211"}')
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
			e.exports = JSON.parse('{"id":"8f67f3a95b01"}')
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
			e.exports = JSON.parse('{"id":"739b96f8b89e"}')
		},
		"./src/redditGQL/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
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
			e.exports = JSON.parse('{"id":"d4bc3d409850"}')
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
		"./src/redditGQL/operations/OpenAISubredditRecommendation.json": function(e) {
			e.exports = JSON.parse('{"id":"e47c5b65714e"}')
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
			e.exports = JSON.parse('{"id":"8c1affff4f18"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditorByName.json": function(e) {
			e.exports = JSON.parse('{"id":"11aba1560164"}')
		},
		"./src/redditGQL/operations/SubredditFlairedRedditors.json": function(e) {
			e.exports = JSON.parse('{"id":"d343c3cad2d0"}')
		},
		"./src/redditGQL/operations/SubredditInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"29aee4089528"}')
		},
		"./src/redditGQL/operations/SubredditPage.json": function(e) {
			e.exports = JSON.parse('{"id":"7028744c2cf3"}')
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
			e.exports = JSON.parse('{"id":"725288ecad4a"}')
		},
		"./src/redditGQL/operations/SubredditsPowerups.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd60899cb27"}')
		},
		"./src/redditGQL/operations/TopAwardedPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b0929b21a0e6"}')
		},
		"./src/redditGQL/operations/TopAwardersLeaderboard.json": function(e) {
			e.exports = JSON.parse('{"id":"750ff4a757de"}')
		},
		"./src/redditGQL/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/redditGQL/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
		},
		"./src/redditGQL/operations/UpdatePowerupsSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"699ae1616006"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"d1ae0d88890f"}')
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
		},
		"./src/redditGQL/operations/WhereToPostSubRec.json": function(e) {
			e.exports = JSON.parse('{"id":"41255f023802"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241.dd6f3eea4b05cf8dcd1d.js.map