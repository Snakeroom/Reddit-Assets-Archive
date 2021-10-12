// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.523c80bcae20c08714e2.js
// Retrieved at 10/12/2021, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"], {
		"./src/lib/linkMatchers/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "i", (function() {
				return y
			}));
			var n = r("./node_modules/linkify-it/index.js"),
				s = r.n(n),
				i = r("./node_modules/tlds/index.js"),
				a = r.n(i),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				d = r("./node_modules/lodash/values.js"),
				c = r.n(d);
			const l = e => c()(o.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = s()().tlds(a.a).set({
					fuzzyIP: !0
				}),
				b = s()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.mention.prefix, o.g.mention.config),
				h = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config),
				f = m(s()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config),
				g = s()().tlds(a.a).set({
					fuzzyIP: !0
				}).add(o.g.subreddit.prefix, o.g.subreddit.config).add(o.g.subredditFull.prefix, o.g.subreddit.config).add(o.g.profile.prefix, o.g.profile.config).add(o.g.profileFull.prefix, o.g.profile.config).add(o.g.mention.prefix, o.g.mention.config),
				x = s()().tlds(a.a).set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(o.g.subreddit.prefix, o.g.subredditFullUrl.config).add(o.g.subredditFull.prefix, o.g.subredditFullUrl.config),
				v = p.normalize;
			p.normalize = e => {
				v.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const w = (e, t) => {
					return (g.match(e) || []).filter(e => {
						const r = l(e.text);
						return !r || r && t
					})
				},
				j = e => {
					return [...f.match(e) || [], ...b.match(e) || []].map(e => !l(e.text) && e.text.replace(o.a, "")).filter(e => e)
				},
				O = (e, t) => {
					const r = e.match(t);
					if (r && 1 === r.length && 0 === r[0].index && r[0].lastIndex === t.length) return r[0]
				},
				y = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const r = t[0];
						return r.lastIndex === e.length ? r : ((e, t) => {
							const r = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(r)) return t.lastIndex += r.length, t.url += r, t
						})(e, r)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/history/esm/history.js");
			t.a = (e, t, r) => {
				const i = Object(s.e)(e),
					a = encodeURIComponent(`${t}${i}`);
				return `${n.a.accountManagerOrigin}${r||"/login"}?dest=${a}`
			}
		},
		"./src/reddit/actions/economics/powerups/flairs/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "onSubredditUserPowerupsFlairsLoaded", (function() {
				return w
			})), r.d(t, "onUsersSupportedSubredditsLoaded", (function() {
				return j
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateRequested", (function() {
				return O
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateSuccess", (function() {
				return y
			})), r.d(t, "onSubredditUserPowerupsFlairPreferenceUpdateFailed", (function() {
				return _
			})), r.d(t, "onSubredditUserPowerupsFlairVisibilityUpdate", (function() {
				return k
			})), r.d(t, "getSubredditUserPowerupsFlairsAndSupporterInfo", (function() {
				return E
			})), r.d(t, "getSubredditCurrentUserPowerupsFlairsAndSupporterInfo", (function() {
				return I
			})), r.d(t, "shouldFetchCommentsPowerupsInfo", (function() {
				return C
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentLinks", (function() {
				return S
			})), r.d(t, "getSubredditUserCommentsPowerupsInfoFromCommentCollection", (function() {
				return N
			})), r.d(t, "setSubredditUserAchievementFlair", (function() {
				return P
			})), r.d(t, "setSubredditUserSupporterFlair", (function() {
				return F
			})), r.d(t, "setSubredditUserPowerupsFlairsVisibility", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditUserAchievements.json"),
				d = r("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			const c = async (e, t, r, n) => {
				const s = await Object(a.a)(e, {
					...d,
					variables: {
						subredditId: t,
						flairTypes: r,
						isHidden: n
					}
				});
				if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update achievement flair preferences")
			};
			var l = r("./src/reddit/actions/gold/powerups.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/flairs.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/economics/powerups/constants.ts"),
				x = r("./src/lib/initializeClient/installReducer.ts"),
				v = r("./src/reddit/reducers/features/powerups/index.ts");
			Object(x.a)({
				features: {
					powerups: v.a
				}
			});
			const w = Object(s.a)(g.d),
				j = Object(s.a)(g.i),
				O = Object(s.a)(g.f),
				y = Object(s.a)(g.g),
				_ = Object(s.a)(g.e),
				k = Object(s.a)(g.h),
				E = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					const d = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (d.length) try {
						const t = await (async (e, t, r) => {
								const n = await Object(a.a)(e, {
									...o,
									variables: {
										subredditId: t,
										redditorIds: r,
										includeSupporterInfo: !0
									}
								});
								if (!n.ok) throw new Error("Unable to fetch user achievements");
								return n.body.data
							})(s(), e, d),
							{
								subredditInfoById: n,
								redditorsInfoByIds: i
							} = t;
						await r(w(n)), i && await r(j(i))
					} catch (c) {
						i.c.captureException(c)
					}
				}, I = (e, t) => async (r, n) => {
					if (!e) return;
					const s = n(),
						i = Object(f.k)(s);
					if (!i || !Object(b.h)(s, {
							subredditId: e
						})) return;
					const a = !!Object(h.f)(s, {
						subredditId: e,
						userId: i.id
					});
					!t && a || await r(E(e, [i.id]))
				}, C = e => async (t, r) => {
					if (!e) return !1;
					await t(Object(l.l)(e, {
						fullData: !0
					}));
					const n = r();
					return Object(b.h)(n, {
						subredditId: e
					})
				}, S = e => async (t, r) => {
					var n;
					const s = r(),
						i = e.map(({
							id: e
						}) => e),
						a = Object(p.c)(s, {
							commentIds: i
						}),
						o = null === (n = a.find(e => e && e.subredditId)) || void 0 === n ? void 0 : n.subredditId;
					if (!(await t(C(o)))) return;
					const d = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(E(o, Array.from(d)))
				}, N = (e, t) => async (r, n) => {
					if (!t) return;
					if (!(await r(C(e)))) return;
					const s = new Set;
					Object.values(t).forEach(e => {
						s.add(e.authorId)
					}), await r(E(e, Array.from(s)))
				}, P = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(f.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(h.i)(s, {
							subredditId: e,
							userId: a
						});
					r(T({
						subredditId: e,
						userId: a,
						achievementFlairType: t,
						supporterFlairType: o
					}))
				}, F = (e, t) => async (r, n) => {
					const s = n(),
						i = Object(f.k)(s);
					if (!i) return;
					const a = i.id,
						o = Object(h.h)(s, {
							subredditId: e,
							userId: a
						});
					r(T({
						subredditId: e,
						userId: a,
						achievementFlairType: o,
						supporterFlairType: t
					}))
				}, T = e => async (t, r, {
					gqlContext: s
				}) => {
					const a = r(),
						o = Object(f.k)(a);
					if (!o) return;
					const d = o.id;
					t(O(e));
					const {
						subredditId: l,
						achievementFlairType: p,
						supporterFlairType: b
					} = e, g = [p, b].filter(Boolean), x = Object(h.e)(a, {
						subredditId: l,
						userId: d
					});
					try {
						await c(s(), l, g, x), t(y(e))
					} catch (v) {
						t(_(e)), i.c.captureException(v), t(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
					}
				}, L = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					const o = s(),
						d = Object(f.k)(o);
					if (!d) return;
					const l = d.id,
						p = {
							subredditId: e,
							userId: l
						},
						b = [Object(h.h)(o, p), Object(h.i)(o, p)].filter(Boolean);
					r(k({
						...p,
						isHidden: t
					}));
					try {
						await c(a(), e, b, t)
					} catch (g) {
						r(k({
							...p,
							isHidden: !t
						})), i.c.captureException(g), r(Object(u.f)({
							duration: u.a,
							kind: m.b.Error,
							text: n.fbt._("Failed to change flair visibility", null, {
								hk: "30gQss"
							})
						}))
					}
				}
		},
		"./src/reddit/actions/economics/predictions/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return C
			})), r.d(t, "k", (function() {
				return S
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "l", (function() {
				return M
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "r", (function() {
				return R
			})), r.d(t, "s", (function() {
				return B
			})), r.d(t, "g", (function() {
				return D
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "m", (function() {
				return G
			})), r.d(t, "i", (function() {
				return z
			})), r.d(t, "j", (function() {
				return V
			})), r.d(t, "p", (function() {
				return q
			})), r.d(t, "q", (function() {
				return J
			})), r.d(t, "f", (function() {
				return Q
			})), r.d(t, "c", (function() {
				return K
			})), r.d(t, "d", (function() {
				return Z
			})), r.d(t, "h", (function() {
				return Y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/uuid/index.js"),
				i = r.n(s),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/predictions/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/reddit/endpoints/economics/predictions.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePredictionTournamentFromGql/index.ts"),
				b = r("./src/redditGQL/types.ts"),
				h = r("./src/reddit/actions/login.ts"),
				f = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/constants/modals.ts"),
				x = r("./src/reddit/selectors/experiments/econ/index.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/selectors/features/predictions/creation/index.ts"),
				O = r("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				y = r("./src/reddit/actions/economics/predictions/constants.ts");
			Object(a.a)({
				features: {
					predictions: o.a
				}
			});
			const _ = Object(l.a)(y.e),
				k = Object(l.a)(y.i),
				E = Object(l.a)(y.l),
				I = Object(l.a)(y.h),
				C = Object(l.a)(y.b),
				S = (e, t, r, n) => async (s, i, {
					gqlContext: a
				}) => {
					const o = Object(w.K)(i()),
						d = await Object(u.j)(a(), {
							subredditId: e,
							period: t,
							top: r,
							includeCurrentRank: o,
							tournamentId: n
						});
					if (d.error || !d.ok) throw new Error("Failed to fetch subreddit top predictors");
					const {
						subredditInfoById: c
					} = d.body.data;
					if (!c || !c.predictionWinners) throw new Error("Subreddit has no prediction winners");
					const {
						predictionWinners: l
					} = c, m = {
						subredditId: e,
						...l
					};
					return s(_(m)), m
				}, N = ({
					coinPackageId: e,
					optionId: t,
					postId: r,
					price: n
				}) => async (s, i, {
					gqlContext: a
				}) => {
					const o = await Object(u.o)(a(), {
						coinPackageId: e,
						optionId: t,
						postId: r,
						price: n
					});
					return s(k({
						pollId: r,
						prediction: o,
						price: n
					})), o
				}, P = ({
					optionId: e,
					postId: t
				}) => async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(u.m)(s(), {
							optionId: e,
							postId: t
						}),
						{
							resolvePrediction: a
						} = i.body.data;
					if (!(null == a ? void 0 : a.poll)) throw new Error("Failed to resolve prediction");
					return r(I({
						pollId: t,
						prediction: a.poll
					})), a.poll
				}, F = Object(l.a)(y.c), T = Object(l.a)(y.d), L = Object(l.a)(y.g), M = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(v.B)(s, e),
						a = Object(O.j)(s, {
							subredditId: i
						}),
						o = Object(x.o)(s);
					if (a) return Object(O.f)(s, {
						subredditId: i
					});
					t(F({
						subredditId: i
					}));
					const d = await Object(u.k)(n(), {
							subredditName: e,
							isLatestOnly: !0,
							isIncludingPredictions: !0,
							isIncludingParticipants: !0,
							isIncludingCancelledPredictions: o
						}),
						c = {};
					d.forEach(e => {
						var t;
						(null === (t = e.predictionPosts) || void 0 === t ? void 0 : t.length) && e.predictionPosts.forEach(e => {
							e && (c[e.id] = Object(m.e)(e))
						})
					});
					const l = d.map(e => Object(p.a)(e));
					return t(T({
						subredditId: i,
						tournaments: l
					})), t(L({
						posts: c,
						meta: s.meta
					})), l
				}, A = Object(l.a)(y.a), R = Object(l.a)(y.j), B = Object(l.a)(y.k), D = ({
					subredditId: e
				}) => async (t, r, {
					gqlContext: n
				}) => {
					const s = r(),
						i = Object(j.b)(s),
						a = Object(x.a)(s);
					if (!i) throw new Error("Failed to create tournament, no prediction drafts attached");
					const o = await Object(u.f)(n(), {
							tournamentId: null,
							name: "Predictions Tournament",
							isStartImmediately: !0,
							subredditId: e,
							predictionDrafts: i,
							currency: a ? b.d.Coins : b.d.Tokens
						}),
						{
							createPredictionTournament: d
						} = o.body.data;
					if (!(null == d ? void 0 : d.tournament)) throw new Error("Failed to resolve prediction");
					const {
						tournament: c
					} = d;
					return t(T({
						subredditId: e,
						tournaments: [c]
					})), c
				}, H = (e, t) => async (r, n, {
					gqlContext: s
				}) => {
					var a;
					const o = Object(j.b)(n());
					if (!o) throw new Error("Failed to create prediction post, no prediction drafts attached");
					const d = await Object(u.b)(s(), {
							tournamentId: e,
							isStartImmediately: !0,
							iKey: `add-dfts-${i.a.v4()}`,
							subredditId: t,
							predictionDrafts: o
						}),
						{
							addPredictionDrafts: c
						} = d.body.data;
					if (null === (a = c.errors) || void 0 === a ? void 0 : a.length) throw new Error(c.errors[0].message);
					if (!(null == c ? void 0 : c.tournament)) throw new Error("Failed to create prediction");
					return c.tournament
				}, W = Object(l.a)(y.m), U = (e, t, r) => async (t, n, {
					gqlContext: s
				}) => {
					const i = await Object(u.n)(s(), {
							tournamentId: e,
							name: r
						}),
						{
							updatePredictionTournament: a
						} = i.body.data;
					if (!a.tournament) throw new Error("Failed to update prediction name");
					return t(W(a.tournament)), a.tournament
				}, G = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(u.g)(n(), {
							tournamentId: e
						}),
						{
							endPredictionTournament: i
						} = s.body.data;
					if (!i.tournament) throw new Error("Failed to update prediction name");
					return t(W(i.tournament)), i.tournament
				}, z = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(u.h)(n(), {
						postId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch prediction chip packages");
					const {
						postInfoById: i
					} = s.body.data;
					if (!i.predictionChipPackages) throw new Error("Failed to fetch prediction chip packages");
					return i.predictionChipPackages
				}, V = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = await Object(u.i)(n(), {
						tournamentId: e
					});
					if (!s.ok || s.error) throw new Error("Failed to fetch token balance");
					const {
						identity: i
					} = s.body.data;
					if (!i.hasOwnProperty("predictionTokens")) throw new Error("Failed to fetch token balance");
					return i.predictionTokens
				}, q = ({
					coinPackageId: e,
					selectedOptionId: t,
					price: r,
					pollId: n,
					tournamentId: s,
					tournamentPostId: i
				}) => async a => {
					const o = await a(N({
						coinPackageId: e,
						optionId: t,
						postId: n,
						price: r
					}));
					return a(E({
						predictionId: n,
						selectedOptionId: t,
						tournamentId: s,
						tournamentPostId: i
					})), o
				}, J = e => async (t, r) => {
					const n = r();
					Object(w.K)(n) ? await t(Object(f.h)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL, {
						feature: e
					})) : await t(Object(h.i)())
				}, Q = () => Object(f.g)(g.a.ECON_PREDICTIONS_PREMIUM_UPSELL), K = e => async (t, r, {
					gqlContext: s
				}) => {
					try {
						const r = await Object(u.c)(s(), {
							postId: e
						});
						t(C({
							postId: e,
							prediction: r
						}));
						const i = Object(d.e)(n.fbt._("Prediction has been cancelled", null, {
							hk: "3Bh9Fw"
						}), c.b.SuccessMod);
						t(Object(d.f)(i))
					} catch {
						const e = Object(d.e)(n.fbt._("Unable to cancel prediction", null, {
							hk: "2wkeKy"
						}), c.b.Error);
						t(Object(d.f)(e))
					}
				};

			function Z(e, t) {
				return async (r, n, {
					gqlContext: s
				}) => {
					const i = await Object(u.d)(s(), {
						postId: e,
						...t
					});
					return r(C({
						postId: e,
						prediction: i
					})), i
				}
			}
			const Y = e => async (t, r, {
				gqlContext: n
			}) => Object(u.l)(n(), {
				subredditId: e
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const i = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("EconomicsSubredditPremiumSidebarCards").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", i)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				o = r("./src/config.ts"),
				d = r("./src/reddit/components/FakeBannerAd/index.m.less"),
				c = r.n(d),
				l = r("./src/lib/lessComponent.tsx");
			const u = l.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					ref: e.bannerRef
				}, e.children), "BannerContainer", c.a),
				m = l.a.wrapped(e => a.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", c.a),
				p = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad",
				b = .5;
			class h extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.bannerRef = a.a.createRef(), this.state = {
						sentOncePerRender: !1
					}, this.handleVisibilityChange = e => {
						if (!(e.intersectionRatio < b || this.state.sentOncePerRender)) {
							const e = this.bannerRef && this.bannerRef.current,
								t = e ? e.offsetWidth : null,
								r = e ? e.offsetHeight : null;
							this.props.trackSidebarHouseAdViewability(t, r), this.setState({
								sentOncePerRender: !0
							})
						}
					}
				}
				render() {
					const {
						href: e,
						img: t
					} = this.props, {
						sentOncePerRender: r
					} = this.state, i = r ? a.a.createElement(m, {
						src: o.a.assetPath + t
					}) : a.a.createElement(s.a, {
						onChange: this.handleVisibilityChange,
						threshold: b
					}, a.a.createElement(m, {
						src: o.a.assetPath + t
					}));
					return a.a.createElement(u, {
						bannerRef: this.bannerRef,
						className: p,
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, a.a.createElement("a", {
						href: o.a.redditUrl + e,
						target: "_blank",
						rel: "noopener noreferrer"
					}, i))
				}
			}
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-CommunityCard").then(r.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("reddit-components-Governance-Leaderboard").then(r.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, r) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/helpers/getSubredditIcon/index.ts"),
				u = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				m = r("./src/reddit/models/Theme/index.ts"),
				p = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = r("./src/reddit/components/HeaderImage/index.m.less"),
				h = r.n(b);
			const f = d.a.wrapped(u.a, "Planet", h.a),
				g = d.a.div("SubredditIcon", h.a),
				x = d.a.div("PositionedImage", h.a),
				v = d.a.div("HeaderContent", h.a),
				w = d.a.div("HeaderContainer", h.a),
				j = d.a.span("HeaderText", h.a),
				O = d.a.wrapped(i.a, "HeaderUrl", h.a),
				y = d.a.span("Container", h.a),
				_ = Object(o.a)(e => {
					const t = Object(m.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						r = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						i = Object(p.a)(e).banner.positionedImage,
						o = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const u = !!i && !!o && "left" === n,
						b = Object(m.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						_ = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						k = `${4+_}px`;
					return s.a.createElement(y, {
						style: {
							background: b,
							height: `${Object(p.a)(e).banner.height}px`
						}
					}, s.a.createElement(O, {
						className: e.className,
						to: e.url
					}, s.a.createElement(w, {
						className: Object(a.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? `${e.maxWidth||c.a}px` : "100%"
						}
					}, !e.isTopBannerVariant && s.a.createElement(v, {
						className: Object(a.a)({
							[h.a.hoverHeaderContent]: u
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (r ? s.a.createElement(g, {
						style: {
							backgroundImage: `url(${r})`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: k,
							width: k
						}
					}) : s.a.createElement(f, {
						style: {
							padding: `${Object(p.a)(e).banner.iconDimensions.padding}px`,
							borderRadius: `${Object(p.a)(e).banner.iconDimensions.borderRadius}px`,
							height: k,
							width: k
						}
					})), s.a.createElement(j, {
						style: {
							paddingTop: 32 === _ ? "4px" : "14px"
						}
					}, t)), s.a.createElement(x, {
						className: Object(a.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!i,
							[h.a.hoverPositionedImage]: !!i && !!o
						}),
						style: {
							...d,
							height: `${Object(p.a)(e).banner.positionedImageHeight}px`
						}
					}))))
				});
			t.a = _
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("IdCard").then(r.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCtaButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				d = r("./src/reddit/selectors/gold/powerups/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				onClick: t
			}) => {
				const r = Object(i.e)(d.v),
					n = Object(i.e)(o.i);
				return s.a.createElement(a.s, {
					priority: a.b.Primary,
					className: e,
					onClick: t,
					isFullWidth: !0
				}, (() => r ? c._("Use Your Premium Powerup", null, {
					hk: "JJNaN"
				}) : n ? c._("Help Your Community", null, {
					hk: "2v0E8W"
				}) : c._("Become a Hero", null, {
					hk: "3IZNw3"
				}))())
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				c = r.n(d);
			const l = Object(s.forwardRef)((function({
					className: e,
					progress: t
				}, r) {
					const n = 100 * t;
					return i.a.createElement("div", {
						className: Object(a.a)(c.a.barRow, e),
						ref: r
					}, i.a.createElement("div", {
						className: c.a.track
					}), i.a.createElement("div", {
						className: c.a.progress,
						style: {
							width: `${n}%`
						}
					}, i.a.createElement(o.a, {
						className: Object(a.a)(c.a.icon, {
							[c.a.empty]: 0 === t,
							[c.a.full]: t >= 1
						})
					})))
				})),
				u = ({
					className: e,
					progress: t
				}) => {
					const [r, a] = Object(s.useState)(!1), o = r ? t : 0;
					return i.a.createElement(n.a, {
						onChange: e => {
							r || e.intersectionRatio < .75 || a(!0)
						},
						threshold: .75
					}, i.a.createElement(l, {
						className: e,
						progress: o
					}))
				}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_2b_W3JXE3VJ8DO4pd1cR3l",
				barRow: "_1ER29kj_M6FYxLorbh1AsJ",
				track: "_3MISl1dByeWJEV8uKLNtbV",
				progress: "_2Y6DmLHlgwPOvY5OenOM7j",
				icon: "_2R4rnD4fdTnIksADG42tm-",
				empty: "hkgHKu8P-BXFRaoLtGkuH",
				full: "_1HqxlPwcLJ3eBF_qCn5-go"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "nLQ3kCzR-nlu3TdaikC9s",
				user: "_2RyQRwN8Zuq56O4TBtmkg1",
				name: "_2IGaFqLglCamTtD4mDQRiZ",
				userIconContainer: "k58KWeKTpmEL6oqR3bKIu",
				userIcon: "_1y6mzxZTJEsSjG3_NbXIiS",
				counter: "_2tSuwxjSKGj8dCE3nAMNQ1",
				powerupIcon: "_1zBtXZdl9mR2-othyOeQr6"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				d = r("./src/reddit/components/UserIcon/index.tsx"),
				c = r("./src/reddit/controls/InternalLink/index.tsx"),
				l = r("./src/reddit/helpers/trackers/powerups.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				p = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.m.less"),
				b = r.n(p);
			const h = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
				className: Object(a.a)(b.a.userIconContainer, e.iconClassName)
			}, s.a.createElement(d.a, {
				userName: e.userName || "",
				iconUrl: e.iconUrl,
				className: b.a.userIcon,
				isNSFW: e.isNsfw
			})), s.a.createElement("h4", {
				className: Object(a.a)(b.a.name, e.textClassName)
			}, e.displayName || e.userName));
			t.b = function(e) {
				var t;
				const r = Object(i.e)(m.i),
					n = Object(u.a)(),
					{
						className: d,
						supporter: p
					} = e,
					{
						score: f,
						supporterInfo: g
					} = p,
					x = Object(o.b)({
						displayName: null == g ? void 0 : g.displayName,
						isAltruismMessagingEnabled: r,
						score: f
					}),
					v = !!(null === (t = null == g ? void 0 : g.profile) || void 0 === t ? void 0 : t.isNsfw),
					w = Object(o.c)(g),
					j = Object(o.a)(f),
					O = s.a.createElement(h, {
						userName: x,
						isNsfw: v,
						iconUrl: w
					});
				return s.a.createElement("div", {
					className: Object(a.a)(d, b.a.container)
				}, g ? s.a.createElement(c.a, {
					className: b.a.user,
					to: `/user/${x}/`,
					onClick: () => {
						g && n(Object(l.I)(g.id, g.displayName))
					}
				}, O) : s.a.createElement("div", {
					className: b.a.user
				}, O), s.a.createElement("div", {
					className: b.a.counter
				}, s.a.createElement(j, {
					className: b.a.powerupIcon
				}), f))
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.m.less": function(e, t, r) {
			e.exports = {
				item: "_3NpbAeMPiQKpToWDGreg_t",
				itemCropper: "_1SUg9FHcJ66bjzBWDro10b",
				animation: "_3jKAUYS5MvU0Koz85fPn-S",
				container: "_2B49Ad8MgHu8TYDSLNtfM3",
				expandButton: "_3xPQmoZqoeq-xOuehYr_2f"
			}
		},
		"./src/reddit/components/PowerupsSidebar/Supporters/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/components/PowerupsSidebar/Supporters/index.m.less"),
				c = r.n(d),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = 100, p = 302, b = 40;

			function h(e) {
				return `${e.lastSupportedAt}__${e.score}`
			}
			const f = e => ({
				key: h(e),
				data: {
					supporter: e
				}
			});

			function g(e, t) {
				const r = t || m;
				return e.slice(0, r).map(f)
			}
			const x = () => ({
					width: p,
					height: Object(a.spring)(0)
				}),
				v = () => ({
					height: 0,
					width: 0,
					motionProgress: 0
				});
			class w extends i.a.Component {
				constructor(e) {
					super(e), this.state = {
						items: g(e.supporters, e.maxSupporters)
					}
				}
				render() {
					const {
						className: e,
						supporters: t,
						onShowFullSupportersList: r,
						isAltruismMessagingEnabled: s
					} = this.props, d = this.state.items.length < t.length;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(n.a)(c.a.container, e)
					}, i.a.createElement(a.TransitionMotion, {
						willLeave: x,
						willEnter: v,
						styles: this.state.items.map(e => ({
							...e,
							style: {
								width: Object(a.spring)(p),
								height: Object(a.spring)(b),
								motionProgress: Object(a.spring)(1)
							}
						}))
					}, e => i.a.createElement(i.a.Fragment, null, e.map(e => i.a.createElement("div", {
						className: c.a.item,
						key: e.key
					}, i.a.createElement("div", {
						className: c.a.itemCropper,
						style: {
							...e.style
						}
					}, i.a.createElement(l.b, {
						supporter: e.data.supporter
					}))))))), d && i.a.createElement(o.s, {
						priority: o.b.Secondary,
						className: c.a.expandButton,
						onClick: r,
						isFullWidth: !0
					}, s ? u._("See All Supporters", null, {
						hk: "1QZ823"
					}) : u._("See All Heroes", null, {
						hk: "1VUmH9"
					})))
				}
				static getDerivedStateFromProps(e) {
					return {
						items: g(e.supporters, e.maxSupporters)
					}
				}
			}
			t.a = i.a.memo(w)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const d = 2,
				c = 3;

			function l(e) {
				return e >= c ? o.a : e >= d ? a.a : i.a
			}

			function u(e) {
				var t;
				const r = !e,
					s = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? s : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t,
				isAltruismMessagingEnabled: r
			}) => e || (r ? s.fbt._({
				"*": "Anonymous Supporters",
				_1: "Anonymous Supporter"
			}, [s.fbt._plural(t)], {
				hk: "42rXDr"
			}).toString() : s.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [s.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString())
		},
		"./src/reddit/components/PowerupsSidebar/index.m.less": function(e, t, r) {
			e.exports = {
				container: "YgQMt0wJgGwSzvy9w0JK8",
				titleGroup: "_2Fz8jK5e-6cq1YKgYEj-n0",
				oldTitleGroup: "bp_YzVmUt92uGSsPIf4j3",
				group: "_33p4q-VA_ubIAGTrkYy18Z",
				oldGroup: "_3y6WM5j8-wIqZ0RrXxy7j_",
				title: "_11_vLMByyp2z23bapR4owd",
				powerupsIcon: "_1FxdCwvprzQqdbsn7m_kVA",
				powerupsIconImage: "_12haD-enU6DNikY4x-ASUt",
				perksButton: "l_DpA1PxJZF1VgtfMYTmH",
				Icon: "_1RbtxFt4ax1dr88gEaw4ei",
				icon: "_1RbtxFt4ax1dr88gEaw4ei",
				isLeft: "_306IYOFAyc7DNe0yxnopfx",
				isRight: "_3IBC8iz6vb1bAK-tnNHYqz",
				active: "_3nzY1PxewxdnUvnDIkdLGq",
				redditStyle: "_1uz5vLZgNj3zHMeVyKFNN3",
				subTitle: "Bks9fiWNtmEGkO-O02zvZ",
				progress: "_3kNzltm7kFAgzESGFqpNKJ",
				heroes: "_36CBrbv63kmBRBZvTC9Ty9",
				becomeFirstHero: "aJNQr1T_lEkfCdXvnmNcQ",
				becomeFirstHeroLabel: "_3c0aoF8IoxBMG3vuqMWoox",
				button: "_3H6aN2LsU-HPJq_wZmyeHm",
				premiumDescription: "_3ZUMj-Yl_XJgexvK3K0N",
				premiumIconWrapper: "_2Jfqs4IPBuRljRHV2X8nwq",
				premiumIcon: "_3Rp23Miges4ZwfnHm13T9Z"
			}
		},
		"./src/reddit/components/PowerupsSidebar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/actions/economics/powerups/flairs/index.ts"),
				d = r("./src/reddit/actions/gold/powerups.ts"),
				c = r("./src/reddit/components/PowerupsCtaButton/index.tsx"),
				l = r("./src/reddit/components/PowerupsSidebar/Supporters/Supporter/index.tsx"),
				u = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				m = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = r("./src/reddit/helpers/trackers/powerups.ts"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				h = r("./src/reddit/selectors/experiments/econ/index.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/PowerupsProgressBar.tsx"),
				w = r("./src/reddit/components/PowerupsSidebar/PowerupsCountAndProgress/index.m.less"),
				j = r.n(w);
			const {
				fbt: O
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				const {
					className: t,
					powerups: r
				} = e, {
					tier: n,
					count: s,
					tiersInfo: a
				} = r, o = (a[n] || a[n - 1]).powerupsCost;
				if (!o) return null;
				const d = Math.min(o, s) / o;
				return i.a.createElement("div", {
					className: t
				}, i.a.createElement("div", {
					className: j.a.titleRow
				}, i.a.createElement("span", null, O._("Powerups", null, {
					hk: "DrcXp"
				})), i.a.createElement("span", null, s < o ? `${s}/${o}` : s)), i.a.createElement(v.b, {
					progress: d
				}))
			};
			var _ = r("./src/reddit/components/PowerupsSidebar/Supporters/index.tsx"),
				k = r("./src/reddit/components/PowerupsSidebar/index.m.less"),
				E = r.n(k);
			const {
				fbt: I
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(a.d)(),
					v = Object(b.a)(),
					w = Object(a.e)(x.k),
					j = Object(a.e)(e => Object(f.k)(e, {
						subredditId: t
					})),
					O = Object(a.e)(e => Object(g.Q)(e, {
						subredditId: t
					})),
					k = Object(a.e)(e => Object(f.n)(e, {
						subredditId: t
					})),
					C = Object(a.e)(e => !!Object(f.l)(e, {
						subredditId: t
					})),
					S = Object(a.e)(h.i);
				Object(s.useEffect)(() => {
					j && r(Object(o.getSubredditCurrentUserPowerupsFlairsAndSupporterInfo)(t))
				}, [j, t, r]);
				if (!j || 1 === j.tiersInfo.length || !O) return null;
				return i.a.createElement(u.a, null, i.a.createElement(m.a, {
					className: e,
					title: I._("Powerups", null, {
						hk: "DrcXp"
					})
				}, i.a.createElement("div", {
					className: E.a.container
				}, i.a.createElement("div", {
					className: E.a.titleGroup
				}, i.a.createElement("div", {
					className: E.a.powerupsIcon
				}, i.a.createElement("img", {
					className: E.a.powerupsIconImage,
					src: `${n.a.assetPath}/img/powerups/powerup.png`
				})), i.a.createElement("h2", {
					className: E.a.title
				}, (() => C ? I._("Powerups are unlocked in {communityName}", [I._param("communityName", O.displayText)], {
					hk: "3xCZkG"
				}) : S ? I._("Powerup to support {communityName}", [I._param("communityName", O.displayText)], {
					hk: "2FQREU"
				}) : I._("Powerup to unlock perks for {communityName}", [I._param("communityName", O.displayText)], {
					hk: "2OPLXh"
				}))()), i.a.createElement(c.a, {
					className: E.a.button,
					onClick: () => {
						v(Object(p.x)()), r(Object(d.f)("powerups_sidebar"))
					}
				})), i.a.createElement("div", {
					className: E.a.group
				}, i.a.createElement("h3", {
					className: E.a.subTitle
				}, S ? I._("Community Supporters", null, {
					hk: "4fsBdg"
				}) : I._("Community Heroes", null, {
					hk: "2ssat0"
				})), i.a.createElement(y, {
					className: E.a.progress,
					powerups: j
				}), !!(null == k ? void 0 : k.length) && i.a.createElement(_.a, {
					supporters: k,
					className: E.a.heroes,
					maxSupporters: 8,
					onShowFullSupportersList: () => {
						v(Object(p.z)()), r(Object(d.h)(t))
					},
					isAltruismMessagingEnabled: S
				}), !(null == k ? void 0 : k.length) && i.a.createElement("div", {
					className: E.a.becomeFirstHero
				}, i.a.createElement(l.a, {
					displayName: S ? I._("Become the first supporter!", null, {
						hk: "4kCZ9y"
					}).toString() : I._("Become the first hero!", null, {
						hk: "4ta0Hi"
					}).toString(),
					userName: null == w ? void 0 : w.displayName,
					isNsfw: !!(null == w ? void 0 : w.isNSFW),
					iconUrl: null == w ? void 0 : w.accountIcon,
					textClassName: E.a.becomeFirstHeroLabel
				}))))))
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, r) {
			e.exports = {
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/lodash/random.js"),
				i = r.n(s),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				l = r("./src/config.ts"),
				u = r("./src/reddit/components/FakeBannerAd/index.tsx"),
				m = r("./src/reddit/components/SidebarSpacer/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/helpers/adCount/index.ts"),
				f = r("./src/reddit/helpers/trackers/ads.ts"),
				g = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				v = r.n(x),
				w = r("./src/lib/lessComponent.tsx");
			const j = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("reddit-components-SidebarNativeAd")]).then(r.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				O = Object(c.c)({
					post: (e, t) => {
						const {
							placement: r,
							placementIndex: n
						} = t, s = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(r, s, n)]
					}
				}),
				y = Object(d.b)(O),
				_ = w.a.wrapped(b.a, "ThemedWidget", v.a),
				k = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.F)(e.media) && e.media.content)),
				E = [{
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}],
				I = Object(p.c)(class extends o.a.Component {
					shouldComponentUpdate(e) {
						const {
							className: t,
							redditStyle: r
						} = this.props;
						return t !== e.className || r !== e.redditStyle
					}
					trackViewability(e, t, r) {
						Math.random() <= l.a.telemetry.programmaticAdSampleRate && this.props.sendEvent(Object(f.b)(e, t, r))
					}
					render() {
						const e = i()(0, E.length - 1),
							{
								img: t,
								href: r
							} = E[e],
							{
								className: n,
								placement: s,
								redditStyle: a
							} = this.props;
						return o.a.createElement(_, {
							className: n,
							contentOnly: !0,
							redditStyle: a
						}, o.a.createElement(u.a, {
							img: t,
							href: r,
							trackSidebarHouseAdViewability: (e, t) => this.trackViewability(e, t, s)
						}))
					}
				});

			function C({
				className: e,
				post: t,
				placementIndex: r,
				refreshKey: n,
				listingName: s,
				placement: i,
				redditStyle: a,
				awaitingBrandSafetyCheck: d,
				forceHouseAd: c,
				removeSidebarSpacer: l
			}) {
				const u = l ? o.a.Fragment : m.a;
				if (!d && (k(t) || c)) {
					let d = null;
					return c ? d = o.a.createElement(I, {
						className: e,
						redditStyle: a,
						placement: i
					}) : t && (d = o.a.createElement(j, {
						post: t,
						postId: t.id,
						refreshKey: n,
						listingName: s,
						placement: i,
						placementIndex: r
					})), o.a.createElement(u, null, d)
				}
				return null
			}
			t.a = y(C)
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, r) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys",
				predictionsFilter: "jU3ijmuG8CyRDQhPOHdw4",
				liveIcon: "_39JxJrjNw5NY_Q0ARn8NRe"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/featureFlags/component.tsx"),
				l = r("./src/reddit/selectors/widgets.ts"),
				u = r("./src/lib/linkMatchers/index.ts"),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				h = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = r("./src/telemetry/models/Outbound.ts"),
				g = r("./src/reddit/components/SubredditNav/index.m.less"),
				x = r.n(g);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = (e, t, r) => Object(p.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: r
				}),
				j = ({
					children: e,
					isActive: t,
					isTopBannerVariant: r,
					...n
				}) => s.a.createElement("div", v({
					className: w(x.a.subNavTitle, t, r)
				}, n), s.a.createElement("span", null, e), s.a.createElement(h.b, {
					className: x.a.navDropdownIcon
				})),
				O = ({
					className: e,
					href: t,
					isActive: r,
					to: n,
					isTopBannerVariant: i,
					...a
				}) => {
					const o = w(x.a.navLink, r, i);
					return n ? s.a.createElement(m.a, v({
						className: o,
						to: n
					}, a)) : t ? s.a.createElement(b.b, v({
						className: o,
						isSponsored: !1,
						sourceElement: f.SourceElement.NavigationMenu,
						href: t
					}, a)) : s.a.createElement("a", v({
						className: o
					}, a))
				},
				y = ({
					className: e,
					isActive: t,
					...r
				}) => s.a.createElement(m.a, v({
					className: Object(p.a)(w(x.a.navLink, t), e)
				}, r)),
				_ = ({
					className: e,
					href: t,
					isActive: r,
					...n
				}) => t ? s.a.createElement(b.b, v({
					className: w(x.a.subNavLink, r),
					isSponsored: !1,
					sourceElement: f.SourceElement.NavigationMenu,
					href: t
				}, n)) : s.a.createElement("a", v({
					className: w(x.a.subNavLink, r)
				}, n)),
				k = ({
					className: e,
					...t
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavContainer, e)
				}, t)),
				E = ({
					className: e,
					isOpen: t,
					...r
				}) => s.a.createElement("div", v({
					className: Object(p.a)(x.a.subNavList, e, {
						[x.a.mIsOpen]: t
					})
				}, r));
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(k, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, s.a.createElement(j, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), s.a.createElement(E, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var C = I;
			const S = e => {
				const t = e.url && Object(u.h)(u.f, e.url);
				return t ? t.url : e.url
			};
			var N = e => e.menuItem.url ? s.a.createElement(O, {
					href: S(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : s.a.createElement(C, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => s.a.createElement(_, {
					key: `${e.text}-${S(e)}`,
					role: "listitem",
					href: S(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				P = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/actions/subreddit.ts"),
				T = r("./src/reddit/hooks/usePageLayer.ts");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), M = Object(a.c)({
				isActive: (e, {
					subredditId: t
				}) => Boolean(e.subreddits.appliedFilters.meta[t]),
				subreddit: (e, {
					subredditId: t
				}) => Object(P.Q)(e, {
					subredditId: t
				})
			});
			var A = Object(i.b)(M, (e, t) => ({
					onActivate: () => e(Object(F.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))(({
					subreddit: e,
					isActive: t,
					onActivate: r
				}) => {
					const n = Object(T.a)();
					return e ? s.a.createElement(y, {
						className: x.a.metaNavLink,
						to: e.url,
						isActive: t,
						onClick: e => {
							Object(d.G)(n) && !Object(d.N)(n) && e.preventDefault(), r()
						}
					}, L._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}),
				R = r("./src/reddit/actions/economics/predictions/index.ts"),
				B = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				D = r("./src/reddit/helpers/trackers/predictions.ts"),
				H = r("./src/reddit/hooks/useTracking.ts"),
				W = r("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const {
				fbt: U
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function G({
				subredditId: e
			}) {
				const t = Object(i.d)(),
					r = Object(T.a)(),
					a = Object(H.a)(),
					o = Object(B.N)(r),
					[d, c] = Object(n.useState)(!1),
					l = Object(i.e)(t => Object(P.Q)(t, {
						subredditId: e
					})),
					u = Object(i.e)(t => Object(P.K)(t, {
						subredditId: e
					})),
					m = Object(i.e)(t => Object(W.d)(t, {
						subredditId: e
					})),
					p = Object(i.e)(t => Object(W.c)(t, {
						subredditId: e
					}));
				return Object(n.useEffect)(() => {
					o && a(Object(D.z)())
				}, [o, a]), Object(n.useEffect)(() => {
					(async () => {
						u && !d && (t(Object(R.l)(l.name)), c(!0))
					})()
				}, [u, d, t, l.name]), u && m ? s.a.createElement(y, {
					className: x.a.predictionsFilter,
					isActive: o,
					onClick: () => {
						t(Object(F.p)({
							subredditId: e,
							forceState: !1
						})), a(Object(D.i)())
					},
					to: `${l.url}predictions/`
				}, U._("Predictions", null, {
					hk: "Cv5GC"
				}), p && s.a.createElement("span", {
					className: x.a.liveIcon
				}, U._("Live", null, {
					hk: "1o89m4"
				}))) : null
			}
			var z = r("./src/lib/constants/index.ts");
			const {
				fbt: V
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const q = Object(d.u)(),
				J = [z.Kb.SUBREDDIT, z.Kb.COMMENTS, z.Kb.COLLECTION_COMMENTS],
				Q = Object(a.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && J.indexOf(t.pageLayer.meta.name) > -1,
					isPredictionsPage: (e, t) => !!t.pageLayer && Object(d.N)(t.pageLayer)
				});
			var K = q(Object(i.b)(Q, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(F.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: r,
						isPostsRoute: n,
						isPredictionsPage: i,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, d = n && !r && !i;
					return s.a.createElement(O, {
						to: t,
						isActive: d,
						isTopBannerVariant: a,
						onClick: e => {
							r && (e.preventDefault(), o())
						}
					}, V._("Posts", null, {
						hk: "36nXSp"
					}))
				}))),
				Z = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				Y = r("./src/higherOrderComponents/makeAsync.tsx");
			var $ = Object(Y.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("HarbergerTaxBannerPurchaseCTA").then(r.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				X = r("./src/reddit/constants/postLayout.ts"),
				ee = r("./src/reddit/constants/screenWidths.ts"),
				te = r("./src/reddit/models/Theme/index.ts"),
				re = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const ne = Object(Z.a)(({
				className: e,
				children: t,
				isTopBannerVariant: r,
				...n
			}) => {
				const i = Object(re.a)(n);
				return s.a.createElement("div", {
					className: Object(p.a)(x.a.outerContainer, e),
					style: {
						position: i.navBar.useOverlay && !r ? "absolute" : "static",
						background: r ? "inherit" : Object(te.g)(i.navBar.backgroundColor, i.navBar.backgroundImage, "tiled")
					}
				}, t)
			});
			var se = e => s.a.createElement(ne, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, s.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === X.g.Large ? `${e.maxWidth||ee.a}px` : "100%"
					}
				}, s.a.createElement("div", null, e.children), s.a.createElement($, null))),
				ie = r("./src/reddit/constants/wiki.ts"),
				ae = r("./src/reddit/helpers/trackers/subredditWiki.ts");
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var de = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: r,
					pageLayer: n
				} = e, i = !!n && !!n.meta && n.meta.name === z.Kb.SUBREDDIT_WIKI, a = `wiki/${ie.i}`, o = t.endsWith("/") ? t + a : `${t}/${a}`;
				return s.a.createElement(O, {
					isActive: i,
					isTopBannerVariant: r,
					to: o,
					onClick: () => e.sendEvent(Object(ae.g)())
				}, oe._("Wiki", null, {
					hk: "1miZk"
				}))
			};
			const ce = Object(c.a)("spPolls", A),
				le = Object(d.u)(),
				ue = Object(a.c)({
					layout: d.Q,
					widget: l.f
				}),
				me = Object(i.b)(ue);
			t.a = le(me(Object(o.c)(e => s.a.createElement(se, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && s.a.createElement(s.a.Fragment, null, s.a.createElement(K, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), s.a.createElement(ce, {
				subredditId: e.subredditId
			}), s.a.createElement(G, {
				subredditId: e.subredditId
			})), e.widget && s.a.createElement(s.a.Fragment, null, e.widget.showWiki && s.a.createElement(de, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, r) => s.a.createElement(N, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: r,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, r) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, r) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, r) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				HelpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				helpCenterMessage: "_22YTzkLimJkLqvbuH33-CG",
				UnModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				unModeratedSubreddit: "_3w4o8BanXnhPSWMnEIMm30",
				ExternalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				externalLink: "_3OXPB4b47Z9dmM_sDTwXuR",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				MessageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				messageModsButton: "_334yl59sgT7zkOwg0PsXVJ",
				MessageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF",
				messageModsButtonIcon: "-q98D9g-c8Eatzem_wgvF"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/fastdom/index.ts"),
				l = r("./src/lib/lessComponent.tsx"),
				u = r("./src/reddit/components/Flair/index.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = r("./src/reddit/constants/parameters.ts"),
				h = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/helpers/correlationIdTracker.ts"),
				x = r("./src/reddit/helpers/flair.ts"),
				v = r("./src/reddit/helpers/trackers/postFlair.ts"),
				w = r("./src/reddit/models/Widgets/index.ts"),
				j = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				y = r.n(O);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = 129,
				E = Object(h.u)({
					filterName: e => Object(h.V)(e)[b.g],
					url: e => Object(h.cb)(e)
				}),
				I = Object(o.c)({
					subredditId: (e, t) => Object(j.B)(e, t.subredditName)
				}),
				C = Object(a.b)(I),
				S = l.a.div("WidgetContent", y.a),
				N = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: r,
					...n
				}) => i.a.createElement("li", {
					className: Object(d.a)(y.a.StyledFlair, e === w.g.Cloud && y.a.cloudDisplay, {
						[y.a.flairFilter]: t,
						[y.a["m-selected"]]: n.isSelected
					}),
					onMouseDown: r
				}, i.a.createElement(u.b, _({}, n, {
					className: y.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.flairListRef = i.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(v.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(v.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(v.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.d)(g.a.SearchResults), this.props.sendEvent(Object(v.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > k && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return i.a.createElement(f.q, {
						className: y.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => i.a.createElement(N, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, r = t ? k : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return i.a.createElement("div", {
						className: y.a.flairFilterContainer,
						style: {
							maxHeight: r
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: r
					} = this.props;
					return i.a.createElement("ul", null, i.a.createElement(N, {
						key: e.templateId,
						display: r.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: r
					} = this.state, n = t.order, s = this.getFlairsFromIds(n), a = e && this.getSelectedFlair(s) || void 0, o = t.order.length > n.length || r && !a;
					return i.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, i.a.createElement(S, null, a && this.renderSelectedFlairFilter(a), !a && this.renderFlairFilters(s), o && this.renderButton()))
				}
			}
			t.a = E(C(Object(m.c)(P)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, r) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				cleanStyle: "_12zeaxHNQC7XniG1qunPev",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/RichTextJson/index.tsx"),
				c = r("./src/reddit/helpers/dom/index.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				m = r("./src/reddit/models/Widgets/index.ts"),
				p = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				b = r.n(p);
			const h = a.a.div("RuleShortName", b.a),
				f = a.a.div("RuleIndex", b.a),
				g = a.a.div("RuleTitle", b.a),
				x = a.a.div("RuleDescription", b.a),
				v = a.a.wrapped(o.a, "RawHTMLDisplay", b.a),
				w = {};
			class j extends s.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(c.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === m.h.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: r,
						shouldShowFullDisplay: n
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !n(e) && !!a;
					return s.a.createElement(h, {
						className: Object(i.a)({
							[b.a.pointerCursor]: o,
							[b.a.cleanStyle]: e.cleanStyle
						}),
						onClick: n(e) || !a ? void 0 : r
					}, s.a.createElement(u.a, null, s.a.createElement(f, {
						className: Object(i.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, `${e.humanIndex}.`), s.a.createElement(g, null, `${e.rule.shortName}`), s.a.createElement("div", null, !n(e) && a && s.a.createElement(l.a, {
						name: t.isVisible ? "caret_up" : "caret_down"
					}))), t.isVisible && s.a.createElement(x, {
						className: Object(i.a)({
							[b.a.cleanStyle]: e.cleanStyle
						})
					}, e.rule.descriptionRichText ? s.a.createElement(d.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: w
					}) : e.rule.descriptionHtml ? s.a.createElement(v, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				a = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				o = r("./src/reddit/components/Widgets/SubredditRules/Rule/index.tsx");
			const d = e => e.rules.length > 0 ? i.a.createElement(a.a, {
				className: e.className,
				styles: e.styles,
				title: n.fbt._("{subredditName} Rules", [n.fbt._param("subredditName", `r/${e.subredditName}`)], {
					hk: "2AwRLk"
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, r) {
				return i.a.createElement(o.a, {
					key: `rule${t.shortName}${t.createdUtc}`,
					rule: t,
					display: e.display,
					humanIndex: r + 1
				})
			}))) : null;
			t.b = e => i.a.createElement(d, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Ae
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/controls/OutboundLink/index.tsx"),
				u = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/linkMatchers/index.ts"),
				b = r("./src/reddit/models/Image/index.tsx"),
				h = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = r("./src/reddit/models/Widgets/index.ts"),
				g = r("./src/reddit/selectors/structuredStyles.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/telemetry/models/Outbound.ts"),
				w = r("./src/reddit/components/Widgets/Button/index.m.less"),
				j = r.n(w);
			const O = (e, t, r) => {
					let n = {},
						s = {};
					n = e.kind === f.k.Image ? {
						"--widget-button-background-image": `url('${e.url}')`
					} : ((e, t, r) => {
						let {
							color: n,
							fillColor: s,
							textColor: i
						} = e;
						return t && (n = i = r, s = "transparent"), {
							"--widget-button-background-color": `${s||"transparent"}`,
							"--widget-button-border": `1px solid ${n}`,
							"--widget-button-color": `${i||n}`
						}
					})(e, t, r);
					const i = e.hoverState || e;
					if (i.kind === f.k.Image) s = {
						"--widget-button-hover-background-image": `url('${i.url}')`,
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: a
						} = i;
						t && (e = a = r, n = "transparent"), s = {
							"--widget-button-hover-background-color": `${n||"transparent"}`,
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": `1px solid ${e}`,
							"--widget-button-hover-color": `${a||e}`
						}
					}
					return {
						...n,
						...s
					}
				},
				y = e => e.kind === f.k.Image ? j.a.imageButton : j.a.textButton,
				_ = e => {
					const t = Object(f.s)(e),
						r = Object(p.h)(p.f, t);
					return r ? r.url : e.url
				},
				k = Object(u.a)(e => {
					const {
						button: t,
						overrideColors: r
					} = e, n = Object(h.a)(e).button;
					return s.a.createElement(c.s, {
						className: y(t),
						style: O(t, r, n),
						isFullWidth: !0,
						size: c.c.S,
						priority: c.b.Secondary
					}, t.kind === f.k.Text && s.a.createElement("span", {
						className: t.hoverState ? j.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === f.k.Text && s.a.createElement("span", {
						className: j.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				E = e => s.a.createElement(l.b, {
					href: _(e.button),
					sourceElement: v.SourceElement.SidebarWidget
				}, s.a.createElement(k, e)),
				I = m.a.wrapped(o.a, "RawHTMLDisplay", j.a);
			var C = Object(i.b)(() => Object(a.c)({
					forceRedditStyle: g.l,
					isNightmodeOn: x.X
				}))(e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && s.a.createElement(I, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== f.k.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== f.k.Image || e.hoverState.url !== b.c)).map(t => s.a.createElement(E, {
					key: `${t.text}-${t.url}`,
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				N = r("./src/reddit/components/HumanDate/index.tsx"),
				P = r("./src/reddit/controls/TextButton/index.tsx"),
				F = r("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = r.n(F);
			const L = 100,
				M = {
					isExpanded: !1
				},
				A = m.a.wrapped(o.a, "RawHTMLDisplay", T.a),
				R = m.a.div("EventContainer", T.a),
				B = m.a.div("EventTitle", T.a),
				D = m.a.div("EventDate", T.a),
				H = m.a.div("EventLocation", T.a),
				W = m.a.div("EventDescription", T.a),
				U = m.a.wrapped(P.a, "ToggleDescription", T.a);
			class G extends s.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = M
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? s.a.createElement(W, null, t.isExpanded ? e.text : e.text.slice(0, L), s.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? S.fbt._("read less", null, {
						hk: "2KdNS6"
					}) : S.fbt._("...read more", null, {
						hk: "2MAis9"
					}))) : s.a.createElement(W, null, e.text)
				}
			}
			var z = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, r) => s.a.createElement(R, {
					key: `${r}-${t.title}`
				}, s.a.createElement(B, null, t.titleHtml ? s.a.createElement(A, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && s.a.createElement(D, null, s.a.createElement(N.a, {
					seconds: t.startTime,
					showDay: !0
				}), !t.allDay && e.widget.configuration.showTime && s.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						r = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? `${r}:0${n}` : `${r}:${n}`
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && s.a.createElement(H, null, t.locationHtml ? s.a.createElement(A, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && s.a.createElement(G, {
					text: t.description
				})))),
				V = r("./src/reddit/components/TrackingHelper/index.tsx"),
				q = r("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var J = Object(V.c)(e => s.a.createElement(q.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Q = Object(a.c)({
					stylesheet: e => e.stylesheets
				}),
				K = Object(i.b)(Q),
				Z = (e, t, r) => `<head>\n  <link rel="stylesheet" href="${e}">\n  <link rel="stylesheet" href="${t}">\n  <base target="_blank">\n</head>\n<body>${r}</body>`;
			class Y extends s.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Z(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, s.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var $ = K(Y),
				X = r("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				ee = r.n(X);
			var te = m.a.div("ImageFrame", ee.a),
				re = r("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				ne = r.n(re);
			var se = m.a.img("StyledImage", ne.a);
			class ie extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: r
					} = this;
					e.subredditName === t.subredditName && e.widget.data[r.imageIndex] && e.widget.data[r.imageIndex] === t.widget.data[r.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const r = e.widget.data[t.imageIndex],
						n = s.a.createElement(te, null, s.a.createElement(se, {
							alt: S.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: r.url
						}));
					return r.linkUrl ? s.a.createElement(l.b, {
						href: r.linkUrl
					}, n) : n
				}
			}
			var ae = ie,
				oe = r("./src/config.ts"),
				de = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = r("./src/lib/opener/index.ts"),
				le = r("./src/reddit/components/Flair/index.tsx"),
				ue = r("./src/reddit/controls/InternalLink/index.tsx"),
				me = r("./src/reddit/icons/fonts/Envelope/index.tsx"),
				pe = r("./src/reddit/models/Flair/index.ts"),
				be = r("./src/reddit/selectors/subreddit.ts"),
				he = r("./src/reddit/components/Widgets/Moderator/index.m.less"),
				fe = r.n(he);
			const ge = m.a.a("ExternalLink", fe.a),
				xe = m.a.div("ModeratorListItem", fe.a),
				ve = m.a.div("Username", fe.a),
				we = m.a.wrapped(le.b, "FlairComponent", fe.a),
				je = e => e.authorFlairType === pe.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				Oe = e => s.a.createElement(ve, null, `u/${e}`),
				ye = m.a.wrapped(ue.a, "InternalLink", fe.a),
				_e = m.a.div("LinkContainer", fe.a),
				ke = Object(a.c)({
					userIsBanned: be.ab,
					userIsLoggedIn: x.K
				});
			var Ee = Object(i.b)(ke)(e => {
					const {
						subredditName: t,
						widget: r,
						userIsBanned: n,
						userIsLoggedIn: i
					} = e;
					return s.a.createElement(d.a, {
						styles: r.styles,
						title: S.fbt._("Moderators", null, {
							hk: "3AMICc"
						})
					}, (r.mods && r.mods.length || n) && s.a.createElement(c.s, {
						kind: c.a.InternalLink,
						priority: c.b.Secondary,
						className: fe.a.MessageModsButton,
						rel: ce.c,
						target: ce.d.BLANK,
						to: `${oe.a.redditUrl}/message/compose?to=/r/${t}`
					}, s.a.createElement(me.a, {
						className: fe.a.MessageModsButtonIcon
					}), S.fbt._("Message the mods", null, {
						hk: "4xxTre"
					})), r.mods && r.mods.length && !n ? s.a.createElement(s.a.Fragment, null, r.mods.map(e => s.a.createElement(xe, {
						key: e.name
					}, (e => s.a.createElement(de.a, {
						to: `/user/${e.name}/`
					}, Oe(e.name)))(e), s.a.createElement(we, {
						flair: je(e),
						forceSmallEmojis: !0
					}))), s.a.createElement(_e, null, s.a.createElement(ye, {
						to: `/r/${t}/about/moderators/`
					}, S.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					})))) : n || !i ? s.a.createElement("div", {
						className: fe.a.HelpCenterMessage
					}, S.fbt._("Moderator list hidden.", null, {
						hk: "447TOY"
					}), " ", s.a.createElement(ge, {
						href: `${oe.a.redditHelpUrl}/hc/en-us/articles/360049499032`,
						rel: ce.c,
						target: ce.d.BLANK
					}, S.fbt._("Learn More", null, {
						hk: "2VxMRZ"
					}))) : s.a.createElement("div", {
						className: fe.a.UnModeratedSubreddit
					}, S.fbt._("This subreddit is unmoderated. Visit", null, {
						hk: "4rFABM"
					}), " ", s.a.createElement(ge, {
						href: `${oe.a.redditUrl}/r/redditrequest`,
						rel: ce.c,
						target: ce.d.BLANK
					}, S.fbt._("r/redditrequest", null, {
						hk: "32jGtr"
					})), " ", S.fbt._("to request it.", null, {
						hk: "1LPeZR"
					})))
				}),
				Ie = r("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				Ce = r("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Se = r("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Ne = r.n(Se);
			const Pe = m.a.div("WidgetContent", Ne.a),
				Fe = m.a.wrapped(o.a, "RawHTMLDisplay", Ne.a);
			var Te = e => s.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, s.a.createElement(Pe, null, s.a.createElement(Fe, {
					html: e.widget.textHtml || ""
				}))),
				Le = r("./src/reddit/components/Widgets/Base/index.tsx");
			var Me = e => s.a.createElement(Le.b, null, "This widget hasn't been implemented yet!");

			function Ae(e) {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
						case "textarea":
							return Te;
						case "button":
							return C;
						case "subreddit-rules":
							return Ce.b;
						case "community-list":
							return J;
						case "calendar":
							return z;
						case "image":
							return ae;
						case "custom":
							return $;
						case "post-flair":
							return Ie.a;
						default:
							return Me
					}
				}(e.widget);
				return s.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "o", (function() {
				return v
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return F
			})), r.d(t, "l", (function() {
				return T
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/redditGQL/operations/AddPredictionDrafts.json"),
				a = r("./src/redditGQL/operations/CancelPrediction.json"),
				o = r("./src/redditGQL/operations/ChangePrediction.json"),
				d = r("./src/redditGQL/operations/ChangePredictionVote.json"),
				c = r("./src/redditGQL/operations/CreatePredictionTournament.json"),
				l = r("./src/redditGQL/operations/EndPredictionTournament.json"),
				u = r("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				m = r("./src/redditGQL/operations/GetPredictionCreationAllowance.json"),
				p = r("./src/redditGQL/operations/GetPredictionToken.json"),
				b = r("./src/redditGQL/operations/GetTournaments.json"),
				h = r("./src/redditGQL/operations/ResolvePrediction.json"),
				f = r("./src/redditGQL/operations/SubredditTopPredictors.json"),
				g = r("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				x = r("./src/redditGQL/operations/VotePrediction.json");
			const v = async (e, {
				postId: t,
				optionId: r,
				coinPackageId: i,
				price: a
			}) => {
				var o;
				const d = await Object(n.a)(e, {
					...x,
					variables: {
						input: {
							postId: t,
							optionId: r,
							coinPackageId: i,
							price: a
						}
					}
				});
				if (!Object(s.c)(d) || d.error || !(null === (o = d.body.data.votePrediction) || void 0 === o ? void 0 : o.ok)) throw new Error("Failed to make prediction");
				return d.body.data.votePrediction.poll
			}, w = (e, {
				postId: t,
				optionId: r
			}) => Object(n.a)(e, {
				...h,
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			});
			var j;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(j || (j = {}));
			const O = (e, {
					subredditId: t,
					period: r,
					top: s,
					includeCurrentRank: i,
					tournamentId: a
				}) => Object(n.a)(e, {
					...f,
					variables: {
						subredditId: t,
						period: r,
						top: s,
						includeCurrentRank: i,
						tournamentId: a
					}
				}),
				y = (e, t) => Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				}),
				_ = async (e, t) => {
					const r = await Object(n.a)(e, {
						...b,
						variables: t
					});
					if (!Object(s.c)(r) || r.error) throw new Error("Failed to fetch tournaments");
					return r.body.data.subredditInfoByName.predictionTournaments || []
				}, k = (e, t) => Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}), E = (e, t) => Object(n.a)(e, {
					...g,
					variables: {
						input: t
					}
				}), I = (e, t) => Object(n.a)(e, {
					...l,
					variables: {
						input: t
					}
				}), C = (e, t) => Object(n.a)(e, {
					...u,
					variables: t
				}), S = (e, t) => Object(n.a)(e, {
					...p,
					variables: t
				}), N = async (e, t) => {
					const r = await Object(n.a)(e, {
						...o,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(r) || !r.body.data.changePrediction.ok) throw new Error("Unable to update prediction");
					return r.body.data.changePrediction.poll
				}, P = async (e, {
					postId: t
				}) => {
					var r, i;
					const o = await Object(n.a)(e, {
						...a,
						variables: {
							input: {
								postId: t
							}
						}
					});
					if (!Object(s.c)(o) || !(null === (r = o.body.data.cancelPrediction) || void 0 === r ? void 0 : r.ok) || !(null === (i = o.body.data.cancelPrediction) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to cancel prediction");
					return o.body.data.cancelPrediction.poll
				}, F = async (e, t) => {
					var r, i;
					const a = await Object(n.a)(e, {
						...d,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(a) || !(null === (r = a.body.data.changePredictionVote) || void 0 === r ? void 0 : r.ok) || !(null === (i = a.body.data.changePredictionVote) || void 0 === i ? void 0 : i.poll)) throw new Error("Unable to change prediction.");
					return a.body.data.changePredictionVote.poll
				}, T = async (e, t) => {
					const r = await Object(n.a)(e, {
						...m,
						variables: t
					});
					return !!Object(s.c)(r) && r.body.data.identity.isPredictionCreationAllowed
				}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/models/WhitelistStatus/index.ts");
			const s = (e, t) => {
				const r = e.some(e => e.isNSFW),
					s = t.some(e => e.wls === n.b.NO_ADS);
				return !r && !s
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./src/lib/isFakeSubreddit/index.ts"), r("./src/reddit/constants/postLayout.ts");
			Math.floor(100 * Math.random());
			var n;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(n || (n = {}))
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "r", (function() {
				return o
			})), r.d(t, "s", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "v", (function() {
				return l
			})), r.d(t, "o", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "n", (function() {
				return p
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "u", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "x", (function() {
				return g
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "z", (function() {
				return v
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "t", (function() {
				return N
			})), r.d(t, "e", (function() {
				return P
			}));
			var n = r("./src/reddit/models/Prediction/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = "poll",
				a = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "select",
					noun: "prediction_option"
				}),
				d = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "close",
					noun: "predict_info_modal"
				}),
				l = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "view",
					noun: "predict_option_modal"
				}),
				u = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: r
				}) => n => ({
					...Object(s.defaults)(n),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(n, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: r
					}
				}),
				m = ({
					pollId: e,
					selectedNumberTokens: t
				}) => r => ({
					...Object(s.defaults)(r),
					source: i,
					action: "confirm",
					noun: "predict",
					poll: Object(s.poll)(r, e, !1, void 0, void 0, t)
				}),
				p = ({
					pollId: e,
					currency: t,
					amount: r
				}) => a => {
					const o = t === n.a.Coins ? r : void 0,
						d = t === n.a.Tokens ? r : void 0;
					return {
						...Object(s.defaults)(a),
						source: i,
						action: "close",
						noun: "prediction_modal",
						poll: Object(s.poll)(a, e, !1, o, d)
					}
				},
				b = e => ({
					...Object(s.defaults)(e),
					source: i,
					action: "click",
					noun: "add_coins"
				}),
				h = e => t => ({
					...Object(s.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				f = ({
					targetUserId: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				}),
				g = ({
					numberPredictionTokens: e,
					pollId: t
				}) => r => ({
					...Object(s.defaults)(r),
					source: i,
					action: "view",
					noun: "token_claim_modal",
					poll: Object(s.poll)(r, t, !1, void 0, void 0, e)
				}),
				x = ({
					pageType: e
				}) => t => ({
					...Object(s.defaults)(t),
					source: "predictions",
					action: "click",
					noun: "tournament",
					actionInfo: {
						pageType: e
					}
				}),
				v = () => e => ({
					...Object(s.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					},
					subreddit: Object(s.subreddit)(e)
				}),
				w = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				j = () => e => ({
					...Object(s.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "tournament_leaderboard",
						reason: "predictions_tab"
					}
				}),
				O = () => e => ({
					...Object(s.defaults)(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "mod_tool_predict"
					}
				}),
				y = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "end_tournament"
				}),
				_ = () => e => ({
					...Object(s.defaults)(e),
					source: "mod_tool_predict",
					action: "click",
					noun: "rename_tournament"
				}),
				k = e => t => ({
					...Object(s.defaults)(t),
					source: "mod_tool_predict",
					action: "click",
					noun: "enable_predictions",
					actionInfo: {
						pageType: "predictions_picker"
					},
					setting: {
						value: e ? "1" : "0",
						oldValue: e ? "0" : "1"
					}
				}),
				E = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "next"
				}),
				I = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "add_more"
				}),
				C = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions",
					action: "click",
					noun: "start_tournament"
				}),
				S = () => e => ({
					...Object(s.defaults)(e),
					source: "menu_links_bar",
					action: "click",
					noun: "predictions_tab"
				}),
				N = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions_tab",
					action: "view",
					noun: "predictions_how_it_works"
				}),
				P = () => e => ({
					...Object(s.defaults)(e),
					source: "predictions_how_it_works",
					action: "click",
					noun: "learn_more"
				})
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return a
			})), r.d(t, "g", (function() {
				return o
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "r", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "p", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "o", (function() {
				return k
			}));
			var n = r("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const i = e => ({
					...s.defaults(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...i(e)
				}),
				o = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...i(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...i(t)
				}),
				c = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				l = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				f = d("save_wiki_page_settings"),
				g = d("copy_url"),
				x = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				w = d("ban_wiki_contributor"),
				j = d("unban_wiki_contributor"),
				O = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				y = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				_ = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				k = e => t => ({
					...i(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: y[e]
					})
				})
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				o = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", d({
				className: Object(i.a)(o.a.dropdown, {
					[o.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), s.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), s.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), s.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), s.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), s.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), s.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), s.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), s.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/adsCardViewHoldout.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/constants/postLayout.ts"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.e[Object(i.Q)(e, {})] === s.d.Card,
				d = e => Object(a.c)(e, {
					experimentEligibilitySelector: o,
					experimentName: n.bb
				}) === n.Fb.Treatment
		},
		"./src/reddit/selectors/features/predictions/creation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/predictions/index.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			Object(n.a)({
				features: {
					predictions: s.a
				}
			});
			const a = e => {
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
							n = t.formData.polls,
							s = n.options.map(e => ({
								text: e.text
							})),
							a = {};
						return r.document ? a.richText = JSON.stringify({
							document: r.document
						}) : r.markdown && (a.markdown = r.markdown), {
							title: r.title,
							isLiveChat: r.isChatPost,
							isNsfw: r.isNSFW,
							isSpoiler: r.isSpoiler,
							votingEndsAt: n.endDate.toISOString(),
							body: a,
							options: s
						}
					}) : []
				},
				o = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.predictions) || void 0 === r ? void 0 : r.creation.length)
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"55e2b71b7c14"}')
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
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"3fb10f0c4910"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"309c4e7f3e89"}')
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
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"50d44a50f01c"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"d742e3019cfe"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"a9582ea601a1"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"92790c69eba6"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"1bc1df66f049"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"eacbeec256c7"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"484780ada6a2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki.523c80bcae20c08714e2.js.map