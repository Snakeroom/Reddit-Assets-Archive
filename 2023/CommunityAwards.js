// https://www.redditstatic.com/desktop2x/CommunityAwards.c6a3307ad87f3b80c819.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityAwards"], {
		"./src/reddit/actions/gold/communityAwards/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "createCommunityAward", (function() {
				return h
			})), r.d(t, "createModAward", (function() {
				return g
			})), r.d(t, "createGlobalAward", (function() {
				return I
			})), r.d(t, "createAwardFailed", (function() {
				return P
			})), r.d(t, "_createAwardSuccessful", (function() {
				return _
			})), r.d(t, "createAwardSuccessful", (function() {
				return S
			})), r.d(t, "manageableAwardsRequested", (function() {
				return G
			})), r.d(t, "manageableAwardsLoaded", (function() {
				return k
			})), r.d(t, "optionalAwardsLoaded", (function() {
				return v
			})), r.d(t, "awardSheetInfoRequested", (function() {
				return T
			})), r.d(t, "awardSheetInfoPending", (function() {
				return R
			})), r.d(t, "awardSheetInfoFailed", (function() {
				return U
			})), r.d(t, "awardSheetInfoLoaded", (function() {
				return F
			})), r.d(t, "removeCommunityAward", (function() {
				return q
			})), r.d(t, "removeCommunityAwardSuccessful", (function() {
				return M
			})), r.d(t, "disableAwardinCommunity", (function() {
				return W
			})), r.d(t, "enableAwardinCommunity", (function() {
				return $
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./src/reddit/selectors/communityAwards.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				p = r("./src/reddit/constants/gold.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const j = () => a.fbt._("There was an error creating the award. Please try again.", null, {
					hk: "3UtrTD"
				}),
				y = () => a.fbt._("There was an error loading awards list. Please try again.", null, {
					hk: "3fs6Y8"
				}),
				A = () => a.fbt._("There was an error removing the award. Please try again.", null, {
					hk: "1exAPF"
				}),
				h = (e, t, r, a, n, d, i, o) => async (s, c, u) => {
					let {
						gqlContext: b
					} = u;
					s(x());
					try {
						if ((await Object(m.a)(b(), e, t, r, a, n, d, i, o)).error) {
							const e = j();
							await s(P(e))
						}
					} catch (l) {
						const e = j();
						await s(P(e))
					}
				}, g = (e, t, r, a, n, d, i, o) => async (s, c, u) => {
					let {
						gqlContext: b
					} = u;
					s(x());
					try {
						if ((await Object(m.c)(b(), e, t, r, a, n, d, i, o)).error) {
							const e = j();
							await s(P(e))
						}
					} catch (l) {
						const e = j();
						await s(P(e))
					}
				}, I = e => {
					let {
						awardSubType: t,
						coinPrice: r,
						coinReward: a,
						daysOfDripExtension: n,
						daysOfPremium: d,
						description: i,
						endsAt: o,
						giverCoinReward: s,
						iconFormat: c,
						iconHeight: u,
						iconUrl: b,
						iconWidth: l,
						isNew: f,
						name: w,
						pennyPrice: p,
						pennyDonate: O,
						startsAt: y,
						subredditCoinReward: A
					} = e;
					return async (e, h, g) => {
						let {
							gqlContext: I
						} = g;
						e(x());
						try {
							if ((await Object(m.b)({
									awardSubType: t,
									coinPrice: r,
									coinReward: a,
									context: I(),
									daysOfDripExtension: n,
									daysOfPremium: d,
									description: i,
									endsAt: o,
									giverCoinReward: s,
									iconFormat: c,
									iconHeight: u,
									iconUrl: b,
									iconWidth: l,
									isNew: f,
									name: w,
									pennyPrice: p,
									pennyDonate: O,
									startsAt: y,
									subredditCoinReward: A
								})).error) {
								const t = j();
								await e(P(t))
							}
						} catch (C) {
							const t = j();
							await e(P(t))
						}
					}
				}, x = Object(n.a)(O.h), C = Object(n.a)(O.g), P = e => async (t, r) => {
					await t(C(e)), t(Object(s.f)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, _ = Object(n.a)(O.i), S = e => {
					let {
						award: t,
						subredditId: r
					} = e;
					return async (e, n) => {
						const d = n();
						e(_({
							award: t,
							subredditId: r
						})), Object(u.a)(d) === p.a && e(Object(o.i)(p.a));
						const i = a.fbt._("Community award successfully created!", null, {
							hk: "3UvmDa"
						});
						e(Object(s.f)({
							kind: c.b.SuccessCommunity,
							text: i
						}))
					}
				}, G = e => async (t, r, a) => {
					let {
						gqlContext: n
					} = a;
					const d = r(),
						o = !!d.awards.manageable.order[e];
					if (Object(b.b)(d, {
							subredditOrProfileId: e
						}) || o) return;
					t(L({
						subredditOrProfileId: e
					}));
					const s = Object(i.a)(e),
						c = !!Object(w.fb)(d, {
							subredditIds: [e]
						})[0];
					let u;
					if (s) u = Object(m.j)(n());
					else if (c) u = Object(m.k)(n(), e);
					else {
						const t = Object(f.r)(d, {
							profileId: e
						}).name;
						u = Object(m.l)(n(), t)
					}
					try {
						const r = await u;
						if (!r.ok) {
							const e = y();
							return void(await t(E(e)))
						}
						let a = [];
						if (s) a = r.body.data.globalAwards;
						else {
							const n = c ? r.body.data.subreddit : r.body.data.profileByName;
							a = n.manageableAwards || [], t(v({
								awards: n.optionalAwards || [],
								subredditOrProfileId: e
							})), t(Q({
								subredditOrProfileId: e,
								disabled: !n.isAwardCreationAllowed
							}))
						}
						await t(k({
							awards: a,
							subredditOrProfileId: e
						}))
					} catch (l) {
						const e = y();
						t(E(e))
					}
				}, L = Object(n.a)(O.G), k = Object(n.a)(O.F), v = Object(n.a)(O.K), N = Object(n.a)(O.E), E = e => async (t, r) => {
					await t(N(e)), t(Object(s.f)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, Q = Object(n.a)(O.d), D = e => e.map(e => {
					let {
						tag: t,
						content: r
					} = e;
					return {
						tag: t,
						content: {
							richtext: JSON.parse(r.richtext),
							markdown: r.markdown
						}
					}
				}), T = (e, t, r, a) => async (n, i, o) => {
					let {
						gqlContext: s
					} = o;
					const c = i(),
						u = c.awards.sortedUsable.order[e];
					if (!(!!u && !!u[t]) || a) {
						n(R({
							subredditOrProfileId: e,
							thingId: t
						}));
						try {
							const a = r || ((e, t) => {
								let {
									thingId: r,
									subredditId: a
								} = t;
								var n;
								const d = Object(f.r)(e, {
									profileId: a
								});
								if (d) return d.name;
								const i = Object(l.F)(e, {
									postId: r
								});
								return "profile" === (null === (n = null == i ? void 0 : i.belongsTo) || void 0 === n ? void 0 : n.type) ? i.author : null
							})(c, {
								thingId: t,
								subredditId: e
							});
							if (a) {
								const r = await Object(m.g)(s(), a, t);
								if (r.ok) {
									const a = r.body,
										d = D(a.data.profileByName.awardingTray.sortedUsableTags);
									await n(F({
										awards: a.data.profileByName.sortedUsableAwards,
										tags: d,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(U({
									subredditOrProfileId: e,
									thingId: t
								}))
							} else {
								const r = await Object(m.f)(s(), e, t);
								if (r.ok) {
									const a = r.body,
										d = D(a.data.subredditInfoById.awardingTray.sortedUsableTags);
									await n(F({
										awards: a.data.subredditInfoById.sortedUsableAwards,
										tags: d,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(U({
									subredditOrProfileId: e,
									thingId: t
								}))
							}
						} catch (b) {
							d.c.captureException(b), await n(U({
								subredditOrProfileId: e,
								thingId: t
							}))
						}
					}
				}, R = Object(n.a)(O.c), U = Object(n.a)(O.a), F = Object(n.a)(O.b), q = (e, t) => async (r, n, i) => {
					let {
						gqlContext: o
					} = i;
					r(J());
					try {
						if ((await Object(m.m)(o(), t)).error) {
							const e = A();
							await r(B(e))
						} else {
							await r(M({
								awardId: t,
								subredditId: e
							}));
							const d = Object(b.a)(n(), t);
							if (!d) return;
							const i = a.fbt._("{award name} Award successfully deleted!", [a.fbt._param("award name", d.name)], {
								hk: "3ZQs5u"
							});
							r(Object(s.f)({
								kind: c.b.SuccessCommunity,
								duration: s.a,
								text: i
							}))
						}
					} catch (u) {
						d.c.captureException(u);
						const e = A();
						await r(B(e))
					}
				}, J = Object(n.a)(O.bb), M = Object(n.a)(O.cb), H = Object(n.a)(O.ab), B = e => async (t, r) => {
					await t(H(e)), t(Object(s.f)({
						kind: c.b.Error,
						duration: s.a,
						text: e
					}))
				}, W = (e, t) => async (r, n, i) => {
					let {
						gqlContext: o
					} = i;
					r(K());
					let u = a.fbt._("There was a problem disabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "3KNLaD"
						}),
						b = Y(u),
						l = c.b.Error;
					try {
						(await Object(m.h)(o(), t.id, e.id)).ok && (b = z({
							awardId: t.id,
							subredditId: e.id
						}), u = a.fbt._("{award name} Award successfully disabled in {subreddit or profile prefixed name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit or profile prefixed name", e.displayText)], {
							hk: "26i191"
						}), l = c.b.SuccessCommunity)
					} catch (f) {
						d.c.captureException(f)
					} finally {
						await r(b), await r(Object(s.f)({
							text: u,
							duration: s.a,
							kind: l
						}))
					}
				}, K = Object(n.a)(O.k), z = Object(n.a)(O.l), Y = Object(n.a)(O.j), $ = (e, t) => async (r, n, i) => {
					let {
						gqlContext: o
					} = i;
					r(X());
					let u = a.fbt._("There was a problem enabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "2jdxBY"
						}),
						b = V(u),
						l = c.b.Error;
					try {
						(await Object(m.i)(o(), t.id, e.id)).ok && (b = Z({
							awardId: t.id,
							subredditId: e.id
						}), u = a.fbt._("{award name} Award successfully enabled in {subreddit name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit name", "r/" + e.name)], {
							hk: "zGXlU"
						}), l = c.b.SuccessCommunity)
					} catch (f) {
						d.c.captureException(f)
					} finally {
						await r(b), await r(Object(s.f)({
							text: u,
							duration: s.a,
							kind: l
						}))
					}
				}, X = Object(n.a)(O.n), Z = Object(n.a)(O.o), V = Object(n.a)(O.m)
		},
		"./src/reddit/constants/gold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "g", (function() {
				return b
			}));
			const a = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				d = 20,
				i = 4,
				o = 1e4,
				s = .2,
				c = .1,
				u = .1,
				b = 500
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return h
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "e", (function() {
				return E
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/lib/uploadToS3/index.ts"),
				s = r("./src/redditGQL/operations/AwardSheetInfo.json"),
				c = r("./src/redditGQL/operations/AwardSheetInfoForProfile.json"),
				u = r("./src/redditGQL/operations/CreateCommunityAward.json"),
				b = r("./src/redditGQL/operations/CreateGlobalAward.json"),
				l = r("./src/redditGQL/operations/CreateModAward.json"),
				f = r("./src/redditGQL/operations/DisableAwardInCommunity.json"),
				w = r("./src/redditGQL/operations/EnableAwardInCommunity.json"),
				m = r("./src/redditGQL/operations/GlobalAwards.json"),
				p = r("./src/redditGQL/operations/ManageableAwards.json"),
				O = r("./src/redditGQL/operations/ManageableAwardsForProfile.json"),
				j = r("./src/redditGQL/operations/RemoveCommunityAward.json"),
				y = r("./src/reddit/constants/headers.ts"),
				A = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const h = (e, t, r, d) => {
					const o = {
						subreddit: t,
						filepath: r,
						mimetype: d
					};
					return Object(n.a)(Object(i.a)(e, [y.a]), {
						method: a.nb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: o
					})
				},
				g = async (e, t) => Object(o.a)(t, e), I = (e, t, r, a, n, i, o, s, c) => Object(d.a)(e, {
					...u,
					variables: {
						coinPrice: o,
						iconHeight: i,
						iconWidth: n,
						iconUrl: a,
						name: r,
						subredditId: t,
						startsAt: s,
						endsAt: c
					}
				}), x = (e, t, r, a, n, i, o, s, c) => Object(d.a)(e, {
					...l,
					variables: {
						iconHeight: i,
						iconWidth: n,
						iconUrl: a,
						monthsOfPremium: o,
						name: r,
						subredditId: t,
						startsAt: s,
						endsAt: c
					}
				}), C = e => {
					let {
						awardSubType: t,
						coinPrice: r,
						coinReward: a,
						context: n,
						daysOfDripExtension: i,
						daysOfPremium: o,
						description: s,
						endsAt: c,
						giverCoinReward: u,
						iconFormat: l,
						iconHeight: f,
						iconUrl: w,
						iconWidth: m,
						isNew: p,
						name: O,
						pennyPrice: j,
						pennyDonate: y,
						startsAt: A,
						subredditCoinReward: h
					} = e;
					return Object(d.a)(n, {
						...b,
						variables: {
							awardSubType: t,
							iconFormat: l,
							iconHeight: f,
							iconWidth: m,
							iconUrl: w,
							isNew: p,
							daysOfPremium: o,
							daysOfDripExtension: i,
							description: s,
							coinPrice: r,
							coinReward: a,
							name: O,
							pennyPrice: j,
							pennyDonate: y,
							giverCoinReward: u,
							startsAt: A,
							endsAt: c,
							subredditCoinReward: h
						}
					})
				}, P = (e, t) => Object(d.a)(e, {
					...p,
					variables: {
						subredditId: t
					}
				}), _ = (e, t) => Object(d.a)(e, {
					...O,
					variables: {
						profileName: t
					}
				}), S = e => Object(d.a)(e, {
					...m
				}), G = (e, t, r) => Object(d.a)(e, {
					...s,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), L = (e, t, r) => Object(d.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), k = (e, t) => Object(d.a)(e, {
					...j,
					variables: {
						awardId: t
					}
				}), v = (e, t, r) => Object(d.a)(e, {
					...f,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), N = (e, t, r) => Object(d.a)(e, {
					...w,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), E = async (e, t, r) => {
					const d = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(i.a)(e, [y.a]), {
						method: a.nb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: d
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(A.a)(e)
					})
				}
		},
		"./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const a = new Set(["t5_22cerq"]),
				n = e => a.has(e);
			t.a = n
		},
		"./src/redditGQL/operations/AwardSheetInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"e1be3a261389"}')
		},
		"./src/redditGQL/operations/AwardSheetInfoForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"3a33281f30db"}')
		},
		"./src/redditGQL/operations/CreateCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"38852e4f82b0"}')
		},
		"./src/redditGQL/operations/CreateGlobalAward.json": function(e) {
			e.exports = JSON.parse('{"id":"c11324579f8c"}')
		},
		"./src/redditGQL/operations/CreateModAward.json": function(e) {
			e.exports = JSON.parse('{"id":"a04c85b4e964"}')
		},
		"./src/redditGQL/operations/DisableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"689f37138ede"}')
		},
		"./src/redditGQL/operations/EnableAwardInCommunity.json": function(e) {
			e.exports = JSON.parse('{"id":"3c2210d8ba4b"}')
		},
		"./src/redditGQL/operations/GlobalAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"16101a740cd7"}')
		},
		"./src/redditGQL/operations/ManageableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"bce139cc4904"}')
		},
		"./src/redditGQL/operations/ManageableAwardsForProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"f2dc00a6f019"}')
		},
		"./src/redditGQL/operations/RemoveCommunityAward.json": function(e) {
			e.exports = JSON.parse('{"id":"973872832463"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityAwards.c6a3307ad87f3b80c819.js.map