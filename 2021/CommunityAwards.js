// https://www.redditstatic.com/desktop2x/CommunityAwards.206b91c43a29ceb6acd1.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityAwards"], {
		"./src/graphql/operations/AwardSheetInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"e1be3a261389"}')
		},
		"./src/graphql/operations/AwardSheetInfoForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"3a33281f30db"}')
		},
		"./src/graphql/operations/CreateCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"38852e4f82b0"}')
		},
		"./src/graphql/operations/CreateGlobalAward.json": function(e) {
			e.exports = JSON.parse('{"id":"c11324579f8c"}')
		},
		"./src/graphql/operations/CreateModAward.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c85b4e964"}')
		},
		"./src/graphql/operations/DisableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"689f37138ede"}')
		},
		"./src/graphql/operations/EnableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"3c2210d8ba4b"}')
		},
		"./src/graphql/operations/GlobalAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"16101a740cd7"}')
		},
		"./src/graphql/operations/ManageableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"bce139cc4904"}')
		},
		"./src/graphql/operations/ManageableAwardsForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"f2dc00a6f019"}')
		},
		"./src/graphql/operations/RemoveCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"973872832463"}')
		},
		"./src/reddit/actions/gold/communityAwards/communityAwards.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "createCommunityAward", (function() {
				return g
			})), a.d(t, "createModAward", (function() {
				return A
			})), a.d(t, "createGlobalAward", (function() {
				return I
			})), a.d(t, "createAwardFailed", (function() {
				return P
			})), a.d(t, "_createAwardSuccessful", (function() {
				return _
			})), a.d(t, "createAwardSuccessful", (function() {
				return S
			})), a.d(t, "manageableAwardsRequested", (function() {
				return q
			})), a.d(t, "manageableAwardsLoaded", (function() {
				return v
			})), a.d(t, "optionalAwardsLoaded", (function() {
				return N
			})), a.d(t, "awardSheetInfoRequested", (function() {
				return U
			})), a.d(t, "awardSheetInfoPending", (function() {
				return F
			})), a.d(t, "awardSheetInfoFailed", (function() {
				return M
			})), a.d(t, "awardSheetInfoLoaded", (function() {
				return G
			})), a.d(t, "removeCommunityAward", (function() {
				return J
			})), a.d(t, "removeCommunityAwardSuccessful", (function() {
				return L
			})), a.d(t, "disableAwardinCommunity", (function() {
				return K
			})), a.d(t, "enableAwardinCommunity", (function() {
				return Q
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				i = a("./src/lib/sentry/index.ts"),
				d = a("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				o = a("./src/reddit/actions/modal.ts"),
				s = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/models/Toast/index.ts"),
				u = a("./src/reddit/selectors/activeModalId.ts"),
				l = a("./src/reddit/selectors/communityAwards.ts"),
				b = a("./src/reddit/selectors/posts.ts"),
				w = a("./src/reddit/selectors/profile.ts"),
				f = a("./src/reddit/selectors/subreddit.ts"),
				p = a("./src/reddit/endpoints/gold/communityAwards.ts"),
				m = a("./src/reddit/constants/gold.ts"),
				O = a("./src/reddit/actions/gold/constants.ts");
			const h = () => r.fbt._("There was an error creating the award. Please try again.", null, {
					hk: "3UtrTD"
				}),
				j = () => r.fbt._("There was an error loading awards list. Please try again.", null, {
					hk: "3fs6Y8"
				}),
				y = () => r.fbt._("There was an error removing the award. Please try again.", null, {
					hk: "1exAPF"
				}),
				g = (e, t, a, r, n, i, d, o) => async (s, c, {
					gqlContext: u
				}) => {
					s(x());
					try {
						if ((await Object(p.a)(u(), e, t, a, r, n, i, d, o)).error) {
							const e = h();
							await s(P(e))
						}
					} catch (l) {
						const e = h();
						await s(P(e))
					}
				}, A = (e, t, a, r, n, i, d, o) => async (s, c, {
					gqlContext: u
				}) => {
					s(x());
					try {
						if ((await Object(p.c)(u(), e, t, a, r, n, i, d, o)).error) {
							const e = h();
							await s(P(e))
						}
					} catch (l) {
						const e = h();
						await s(P(e))
					}
				}, I = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: a,
					daysOfDripExtension: r,
					daysOfPremium: n,
					description: i,
					endsAt: d,
					giverCoinReward: o,
					iconFormat: s,
					iconHeight: c,
					iconUrl: u,
					iconWidth: l,
					isNew: b,
					name: w,
					pennyPrice: f,
					pennyDonate: m,
					startsAt: O,
					subredditCoinReward: j
				}) => async (y, g, {
					gqlContext: A
				}) => {
					y(x());
					try {
						if ((await Object(p.b)({
								awardSubType: e,
								coinPrice: t,
								coinReward: a,
								context: A(),
								daysOfDripExtension: r,
								daysOfPremium: n,
								description: i,
								endsAt: d,
								giverCoinReward: o,
								iconFormat: s,
								iconHeight: c,
								iconUrl: u,
								iconWidth: l,
								isNew: b,
								name: w,
								pennyPrice: f,
								pennyDonate: m,
								startsAt: O,
								subredditCoinReward: j
							})).error) {
							const e = h();
							await y(P(e))
						}
					} catch (I) {
						const e = h();
						await y(P(e))
					}
				}, x = Object(n.a)(O.i), C = Object(n.a)(O.h), P = e => async (t, a) => {
					await t(C(e)), t(Object(s.e)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, _ = Object(n.a)(O.j), S = ({
					award: e,
					subredditId: t
				}) => async (a, n) => {
					const i = n();
					a(_({
						award: e,
						subredditId: t
					})), Object(u.a)(i) === m.a && a(Object(o.i)(m.a));
					const d = r.fbt._("Community award successfully created!", null, {
						hk: "3UvmDa"
					});
					a(Object(s.e)({
						kind: c.b.SuccessCommunity,
						text: d
					}))
				}, q = e => async (t, a, {
					gqlContext: r
				}) => {
					const n = a(),
						i = !!n.awards.manageable.order[e];
					if (Object(l.b)(n, {
							subredditOrProfileId: e
						}) || i) return;
					t(k({
						subredditOrProfileId: e
					}));
					const o = Object(d.a)(e),
						s = !!Object(f.ab)(n, {
							subredditIds: [e]
						})[0];
					let c;
					if (o) c = Object(p.j)(r());
					else if (s) c = Object(p.k)(r(), e);
					else {
						const t = Object(w.p)(n, {
							profileId: e
						}).name;
						c = Object(p.l)(r(), t)
					}
					try {
						const a = await c;
						if (!a.ok) {
							const e = j();
							return void(await t(D(e)))
						}
						let r = [];
						if (o) r = a.body.data.globalAwards;
						else {
							const n = s ? a.body.data.subreddit : a.body.data.profileByName;
							r = n.manageableAwards || [], t(N({
								awards: n.optionalAwards || [],
								subredditOrProfileId: e
							})), t(T({
								subredditOrProfileId: e,
								disabled: !n.isAwardCreationAllowed
							}))
						}
						await t(v({
							awards: r,
							subredditOrProfileId: e
						}))
					} catch (u) {
						const e = j();
						t(D(e))
					}
				}, k = Object(n.a)(O.I), v = Object(n.a)(O.H), N = Object(n.a)(O.M), E = Object(n.a)(O.G), D = e => async (t, a) => {
					await t(E(e)), t(Object(s.e)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, T = Object(n.a)(O.e), R = e => e.map(({
					tag: e,
					content: t
				}) => ({
					tag: e,
					content: {
						richtext: JSON.parse(t.richtext),
						markdown: t.markdown
					}
				})), U = (e, t, a, r) => async (n, d, {
					gqlContext: o
				}) => {
					const s = d(),
						c = s.awards.sortedUsable.order[e];
					if (!(!!c && !!c[t]) || r) {
						n(F({
							subredditOrProfileId: e,
							thingId: t
						}));
						try {
							const r = a || ((e, {
								thingId: t,
								subredditId: a
							}) => {
								var r;
								const n = Object(w.p)(e, {
									profileId: a
								});
								if (n) return n.name;
								const i = Object(b.I)(e, {
									postId: t
								});
								return "profile" === (null === (r = null == i ? void 0 : i.belongsTo) || void 0 === r ? void 0 : r.type) ? i.author : null
							})(s, {
								thingId: t,
								subredditId: e
							});
							if (r) {
								const a = await Object(p.g)(o(), r, t);
								if (a.ok) {
									const r = a.body,
										i = R(r.data.profileByName.awardingTray.sortedUsableTags);
									await n(G({
										awards: r.data.profileByName.sortedUsableAwards,
										tags: i,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(M({
									subredditOrProfileId: e,
									thingId: t
								}))
							} else {
								const a = await Object(p.f)(o(), e, t);
								if (a.ok) {
									const r = a.body,
										i = R(r.data.subredditInfoById.awardingTray.sortedUsableTags);
									await n(G({
										awards: r.data.subredditInfoById.sortedUsableAwards,
										tags: i,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(M({
									subredditOrProfileId: e,
									thingId: t
								}))
							}
						} catch (u) {
							i.c.captureException(u), await n(M({
								subredditOrProfileId: e,
								thingId: t
							}))
						}
					}
				}, F = Object(n.a)(O.d), M = Object(n.a)(O.b), G = Object(n.a)(O.c), J = (e, t) => async (a, n, {
					gqlContext: d
				}) => {
					a(H());
					try {
						if ((await Object(p.m)(d(), t)).error) {
							const e = y();
							await a(W(e))
						} else {
							await a(L({
								awardId: t,
								subredditId: e
							}));
							const i = Object(l.a)(n(), t);
							if (!i) return;
							const d = r.fbt._("{award name} Award successfully deleted!", [r.fbt._param("award name", i.name)], {
								hk: "3ZQs5u"
							});
							a(Object(s.e)({
								kind: c.b.SuccessCommunity,
								duration: s.a,
								text: d
							}))
						}
					} catch (o) {
						i.c.captureException(o);
						const e = y();
						await a(W(e))
					}
				}, H = Object(n.a)(O.cb), L = Object(n.a)(O.db), B = Object(n.a)(O.bb), W = e => async (t, a) => {
					await t(B(e)), t(Object(s.e)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, K = (e, t) => async (a, n, {
					gqlContext: d
				}) => {
					a(z());
					let o = r.fbt._("There was a problem disabling the {award name} Award. Please try again.", [r.fbt._param("award name", t.name)], {
							hk: "3KNLaD"
						}),
						u = $(o),
						l = c.b.Error;
					try {
						(await Object(p.h)(d(), t.id, e.id)).ok && (u = Y({
							awardId: t.id,
							subredditId: e.id
						}), o = r.fbt._("{award name} Award successfully disabled in {subreddit or profile prefixed name}!", [r.fbt._param("award name", t.name), r.fbt._param("subreddit or profile prefixed name", e.displayText)], {
							hk: "26i191"
						}), l = c.b.SuccessCommunity)
					} catch (b) {
						i.c.captureException(b)
					} finally {
						await a(u), await a(Object(s.e)({
							text: o,
							duration: s.a,
							kind: l
						}))
					}
				}, z = Object(n.a)(O.l), Y = Object(n.a)(O.m), $ = Object(n.a)(O.k), Q = (e, t) => async (a, n, {
					gqlContext: d
				}) => {
					a(X());
					let o = r.fbt._("There was a problem enabling the {award name} Award. Please try again.", [r.fbt._param("award name", t.name)], {
							hk: "2jdxBY"
						}),
						u = V(o),
						l = c.b.Error;
					try {
						(await Object(p.i)(d(), t.id, e.id)).ok && (u = Z({
							awardId: t.id,
							subredditId: e.id
						}), o = r.fbt._("{award name} Award successfully enabled in {subreddit name}!", [r.fbt._param("award name", t.name), r.fbt._param("subreddit name", "r/" + e.name)], {
							hk: "zGXlU"
						}), l = c.b.SuccessCommunity)
					} catch (b) {
						i.c.captureException(b)
					} finally {
						await a(u), await a(Object(s.e)({
							text: o,
							duration: s.a,
							kind: l
						}))
					}
				}, X = Object(n.a)(O.o), Z = Object(n.a)(O.p), V = Object(n.a)(O.n)
		},
		"./src/reddit/constants/gold.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return n
			})), a.d(t, "d", (function() {
				return i
			})), a.d(t, "e", (function() {
				return d
			})), a.d(t, "f", (function() {
				return o
			})), a.d(t, "c", (function() {
				return s
			})), a.d(t, "i", (function() {
				return c
			})), a.d(t, "h", (function() {
				return u
			})), a.d(t, "g", (function() {
				return l
			}));
			const r = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				i = 20,
				d = 4,
				o = 1e4,
				s = .2,
				c = .1,
				u = .1,
				l = 500
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return g
			})), a.d(t, "n", (function() {
				return A
			})), a.d(t, "a", (function() {
				return I
			})), a.d(t, "c", (function() {
				return x
			})), a.d(t, "b", (function() {
				return C
			})), a.d(t, "k", (function() {
				return P
			})), a.d(t, "l", (function() {
				return _
			})), a.d(t, "j", (function() {
				return S
			})), a.d(t, "f", (function() {
				return q
			})), a.d(t, "g", (function() {
				return k
			})), a.d(t, "m", (function() {
				return v
			})), a.d(t, "h", (function() {
				return N
			})), a.d(t, "i", (function() {
				return E
			})), a.d(t, "e", (function() {
				return D
			}));
			var r = a("./src/lib/constants/index.ts"),
				n = a("./src/lib/makeApiRequest/index.ts"),
				i = a("./src/lib/makeGqlRequest/index.ts"),
				d = a("./src/lib/omitHeaders/index.ts"),
				o = a("./src/lib/uploadToS3/index.ts"),
				s = a("./src/graphql/operations/AwardSheetInfo.json"),
				c = a("./src/graphql/operations/AwardSheetInfoForProfile.json"),
				u = a("./src/graphql/operations/CreateCommunityAward.json"),
				l = a("./src/graphql/operations/CreateGlobalAward.json"),
				b = a("./src/graphql/operations/CreateModAward.json"),
				w = a("./src/graphql/operations/DisableAwardInCommunity.json"),
				f = a("./src/graphql/operations/EnableAwardInCommunity.json"),
				p = a("./src/graphql/operations/GlobalAwards.json"),
				m = a("./src/graphql/operations/ManageableAwards.json"),
				O = a("./src/graphql/operations/ManageableAwardsForProfile.json"),
				h = a("./src/graphql/operations/RemoveCommunityAward.json"),
				j = a("./src/reddit/constants/headers.ts"),
				y = a("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const g = (e, t, a, i) => {
					const o = {
						subreddit: t,
						filepath: a,
						mimetype: i
					};
					return Object(n.a)(Object(d.a)(e, [j.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: o
					})
				},
				A = async (e, t) => Object(o.a)(t, e), I = (e, t, a, r, n, d, o, s, c) => Object(i.a)(e, {
					...u,
					variables: {
						coinPrice: o,
						iconHeight: d,
						iconWidth: n,
						iconUrl: r,
						name: a,
						subredditId: t,
						startsAt: s,
						endsAt: c
					}
				}), x = (e, t, a, r, n, d, o, s, c) => Object(i.a)(e, {
					...b,
					variables: {
						iconHeight: d,
						iconWidth: n,
						iconUrl: r,
						monthsOfPremium: o,
						name: a,
						subredditId: t,
						startsAt: s,
						endsAt: c
					}
				}), C = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: a,
					context: r,
					daysOfDripExtension: n,
					daysOfPremium: d,
					description: o,
					endsAt: s,
					giverCoinReward: c,
					iconFormat: u,
					iconHeight: b,
					iconUrl: w,
					iconWidth: f,
					isNew: p,
					name: m,
					pennyPrice: O,
					pennyDonate: h,
					startsAt: j,
					subredditCoinReward: y
				}) => Object(i.a)(r, {
					...l,
					variables: {
						awardSubType: e,
						iconFormat: u,
						iconHeight: b,
						iconWidth: f,
						iconUrl: w,
						isNew: p,
						daysOfPremium: d,
						daysOfDripExtension: n,
						description: o,
						coinPrice: t,
						coinReward: a,
						name: m,
						pennyPrice: O,
						pennyDonate: h,
						giverCoinReward: c,
						startsAt: j,
						endsAt: s,
						subredditCoinReward: y
					}
				}), P = (e, t) => Object(i.a)(e, {
					...m,
					variables: {
						subredditId: t
					}
				}), _ = (e, t) => Object(i.a)(e, {
					...O,
					variables: {
						profileName: t
					}
				}), S = e => Object(i.a)(e, {
					...p
				}), q = (e, t, a) => Object(i.a)(e, {
					...s,
					variables: {
						subredditId: t,
						thingId: a,
						includeGroup: !0
					}
				}), k = (e, t, a) => Object(i.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: a,
						includeGroup: !0
					}
				}), v = (e, t) => Object(i.a)(e, {
					...h,
					variables: {
						awardId: t
					}
				}), N = (e, t, a) => Object(i.a)(e, {
					...w,
					variables: {
						awardId: t,
						subredditId: a
					}
				}), E = (e, t, a) => Object(i.a)(e, {
					...f,
					variables: {
						awardId: t,
						subredditId: a
					}
				}), D = async (e, t, a) => {
					const i = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(d.a)(e, [j.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: i
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(y.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = new Set(["t5_22cerq"]),
				n = e => r.has(e);
			t.a = n
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityAwards.206b91c43a29ceb6acd1.js.map