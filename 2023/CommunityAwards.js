// https://www.redditstatic.com/desktop2x/CommunityAwards.64df0f65381d00f65250.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityAwards"], {
		"./src/reddit/actions/gold/communityAwards/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "createCommunityAward", (function() {
				return I
			})), r.d(t, "createModAward", (function() {
				return h
			})), r.d(t, "createGlobalAward", (function() {
				return g
			})), r.d(t, "createAwardFailed", (function() {
				return C
			})), r.d(t, "_createAwardSuccessful", (function() {
				return R
			})), r.d(t, "createAwardSuccessful", (function() {
				return S
			})), r.d(t, "manageableAwardsRequested", (function() {
				return E
			})), r.d(t, "manageableAwardsLoaded", (function() {
				return L
			})), r.d(t, "optionalAwardsLoaded", (function() {
				return N
			})), r.d(t, "awardSheetInfoRequested", (function() {
				return v
			})), r.d(t, "awardSheetInfoPending", (function() {
				return U
			})), r.d(t, "awardSheetInfoFailed", (function() {
				return Q
			})), r.d(t, "awardSheetInfoLoaded", (function() {
				return F
			})), r.d(t, "removeCommunityAward", (function() {
				return K
			})), r.d(t, "removeCommunityAwardSuccessful", (function() {
				return M
			})), r.d(t, "disableAwardinCommunity", (function() {
				return H
			})), r.d(t, "enableAwardinCommunity", (function() {
				return X
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
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
				I = (e, t, r, a, n, d, i, s) => async (o, c, u) => {
					let {
						gqlContext: b
					} = u;
					o(_());
					try {
						if ((await Object(m.a)(b(), e, t, r, a, n, d, i, s)).error) {
							const e = j();
							await o(C(e))
						}
					} catch (l) {
						const e = j();
						await o(C(e))
					}
				}, h = (e, t, r, a, n, d, i, s) => async (o, c, u) => {
					let {
						gqlContext: b
					} = u;
					o(_());
					try {
						if ((await Object(m.c)(b(), e, t, r, a, n, d, i, s)).error) {
							const e = j();
							await o(C(e))
						}
					} catch (l) {
						const e = j();
						await o(C(e))
					}
				}, g = e => {
					let {
						awardSubType: t,
						coinPrice: r,
						coinReward: a,
						daysOfDripExtension: n,
						daysOfPremium: d,
						description: i,
						endsAt: s,
						giverCoinReward: o,
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
					return async (e, I, h) => {
						let {
							gqlContext: g
						} = h;
						e(_());
						try {
							if ((await Object(m.b)({
									awardSubType: t,
									coinPrice: r,
									coinReward: a,
									context: g(),
									daysOfDripExtension: n,
									daysOfPremium: d,
									description: i,
									endsAt: s,
									giverCoinReward: o,
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
								await e(C(t))
							}
						} catch (x) {
							const t = j();
							await e(C(t))
						}
					}
				}, _ = Object(n.a)(O.h), x = Object(n.a)(O.g), C = e => async (t, r) => {
					await t(x(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, R = Object(n.a)(O.i), S = e => {
					let {
						award: t,
						subredditId: r
					} = e;
					return async (e, n) => {
						const d = n();
						e(R({
							award: t,
							subredditId: r
						})), Object(u.a)(d) === p.a && e(Object(s.i)(p.a));
						const i = a.fbt._("Community award successfully created!", null, {
							hk: "3UvmDa"
						});
						e(Object(o.f)({
							kind: c.b.SuccessCommunity,
							text: i
						}))
					}
				}, E = e => async (t, r, a) => {
					let {
						gqlContext: n
					} = a;
					const d = r(),
						s = !!d.awards.manageable.order[e];
					if (Object(b.b)(d, {
							subredditOrProfileId: e
						}) || s) return;
					t(P({
						subredditOrProfileId: e
					}));
					const o = Object(i.a)(e),
						c = !!Object(w.fb)(d, {
							subredditIds: [e]
						})[0];
					let u;
					if (o) u = Object(m.j)(n());
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
							return void(await t(G(e)))
						}
						let a = [];
						if (o) a = r.body.data.globalAwards;
						else {
							const n = c ? r.body.data.subreddit : r.body.data.profileByName;
							a = n.manageableAwards || [], t(N({
								awards: n.optionalAwards || [],
								subredditOrProfileId: e
							})), t(D({
								subredditOrProfileId: e,
								disabled: !n.isAwardCreationAllowed
							}))
						}
						await t(L({
							awards: a,
							subredditOrProfileId: e
						}))
					} catch (l) {
						const e = y();
						t(G(e))
					}
				}, P = Object(n.a)(O.G), L = Object(n.a)(O.F), N = Object(n.a)(O.K), T = Object(n.a)(O.E), G = e => async (t, r) => {
					await t(T(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, D = Object(n.a)(O.d), k = e => e.map(e => {
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
				}), v = (e, t, r, a) => async (n, i, s) => {
					let {
						gqlContext: o
					} = s;
					const c = i(),
						u = c.awards.sortedUsable.order[e];
					if (!(!!u && !!u[t]) || a) {
						n(U({
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
								const r = await Object(m.g)(o(), a, t);
								if (r.ok) {
									const a = r.body,
										d = k(a.data.profileByName.awardingTray.sortedUsableTags);
									await n(F({
										awards: a.data.profileByName.sortedUsableAwards,
										tags: d,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(Q({
									subredditOrProfileId: e,
									thingId: t
								}))
							} else {
								const r = await Object(m.f)(o(), e, t);
								if (r.ok) {
									const a = r.body,
										d = k(a.data.subredditInfoById.awardingTray.sortedUsableTags);
									await n(F({
										awards: a.data.subredditInfoById.sortedUsableAwards,
										tags: d,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(Q({
									subredditOrProfileId: e,
									thingId: t
								}))
							}
						} catch (b) {
							d.c.captureException(b), await n(Q({
								subredditOrProfileId: e,
								thingId: t
							}))
						}
					}
				}, U = Object(n.a)(O.c), Q = Object(n.a)(O.a), F = Object(n.a)(O.b), K = (e, t) => async (r, n, i) => {
					let {
						gqlContext: s
					} = i;
					r(q());
					try {
						if ((await Object(m.m)(s(), t)).error) {
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
							r(Object(o.f)({
								kind: c.b.SuccessCommunity,
								duration: o.a,
								text: i
							}))
						}
					} catch (u) {
						d.c.captureException(u);
						const e = A();
						await r(B(e))
					}
				}, q = Object(n.a)(O.bb), M = Object(n.a)(O.cb), J = Object(n.a)(O.ab), B = e => async (t, r) => {
					await t(J(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, H = (e, t) => async (r, n, i) => {
					let {
						gqlContext: s
					} = i;
					r(W());
					let u = a.fbt._("There was a problem disabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "3KNLaD"
						}),
						b = z(u),
						l = c.b.Error;
					try {
						(await Object(m.h)(s(), t.id, e.id)).ok && (b = V({
							awardId: t.id,
							subredditId: e.id
						}), u = a.fbt._("{award name} Award successfully disabled in {subreddit or profile prefixed name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit or profile prefixed name", e.displayText)], {
							hk: "26i191"
						}), l = c.b.SuccessCommunity)
					} catch (f) {
						d.c.captureException(f)
					} finally {
						await r(b), await r(Object(o.f)({
							text: u,
							duration: o.a,
							kind: l
						}))
					}
				}, W = Object(n.a)(O.k), V = Object(n.a)(O.l), z = Object(n.a)(O.j), X = (e, t) => async (r, n, i) => {
					let {
						gqlContext: s
					} = i;
					r(Y());
					let u = a.fbt._("There was a problem enabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "2jdxBY"
						}),
						b = Z(u),
						l = c.b.Error;
					try {
						(await Object(m.i)(s(), t.id, e.id)).ok && (b = $({
							awardId: t.id,
							subredditId: e.id
						}), u = a.fbt._("{award name} Award successfully enabled in {subreddit name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit name", "r/" + e.name)], {
							hk: "zGXlU"
						}), l = c.b.SuccessCommunity)
					} catch (f) {
						d.c.captureException(f)
					} finally {
						await r(b), await r(Object(o.f)({
							text: u,
							duration: o.a,
							kind: l
						}))
					}
				}, Y = Object(n.a)(O.n), $ = Object(n.a)(O.o), Z = Object(n.a)(O.m)
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
				return s
			})), r.d(t, "c", (function() {
				return o
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
				s = 1e4,
				o = .2,
				c = .1,
				u = .1,
				b = 500
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return R
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "m", (function() {
				return L
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "e", (function() {
				return G
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/lib/uploadToS3/index.ts"),
				o = r("./src/redditGQL/operations/AwardSheetInfo.json"),
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
			const I = (e, t, r, d) => {
					const s = {
						subreddit: t,
						filepath: r,
						mimetype: d
					};
					return Object(n.a)(Object(i.a)(e, [y.a]), {
						method: a.ob.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: s
					})
				},
				h = async (e, t) => Object(s.a)(t, e), g = (e, t, r, a, n, i, s, o, c) => Object(d.a)(e, {
					...u,
					variables: {
						coinPrice: s,
						iconHeight: i,
						iconWidth: n,
						iconUrl: a,
						name: r,
						subredditId: t,
						startsAt: o,
						endsAt: c
					}
				}), _ = (e, t, r, a, n, i, s, o, c) => Object(d.a)(e, {
					...l,
					variables: {
						iconHeight: i,
						iconWidth: n,
						iconUrl: a,
						monthsOfPremium: s,
						name: r,
						subredditId: t,
						startsAt: o,
						endsAt: c
					}
				}), x = e => {
					let {
						awardSubType: t,
						coinPrice: r,
						coinReward: a,
						context: n,
						daysOfDripExtension: i,
						daysOfPremium: s,
						description: o,
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
						subredditCoinReward: I
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
							daysOfPremium: s,
							daysOfDripExtension: i,
							description: o,
							coinPrice: r,
							coinReward: a,
							name: O,
							pennyPrice: j,
							pennyDonate: y,
							giverCoinReward: u,
							startsAt: A,
							endsAt: c,
							subredditCoinReward: I
						}
					})
				}, C = (e, t) => Object(d.a)(e, {
					...p,
					variables: {
						subredditId: t
					}
				}), R = (e, t) => Object(d.a)(e, {
					...O,
					variables: {
						profileName: t
					}
				}), S = e => Object(d.a)(e, {
					...m
				}), E = (e, t, r) => Object(d.a)(e, {
					...o,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), P = (e, t, r) => Object(d.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), L = (e, t) => Object(d.a)(e, {
					...j,
					variables: {
						awardId: t
					}
				}), N = (e, t, r) => Object(d.a)(e, {
					...f,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), T = (e, t, r) => Object(d.a)(e, {
					...w,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), G = async (e, t, r) => {
					const d = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(i.a)(e, [y.a]), {
						method: a.ob.POST,
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
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var a = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case a.K.NO_STRIPE_SUBSCRIPTION:
							case a.K.USER_DOESNT_EXIST:
							case a.K.USER_REQUIRED_ERROR:
							case a.K.VALIDATION_ERROR:
								return e;
							case a.K.NO_USER:
							case a.K.NO_TEXT:
							case a.K.NO_URL:
								return a.K.VALIDATION_ERROR;
							case a.K.CREDIT_CARD_FAILURE:
							case a.K.CREDIT_CARD_FAILURE_GENERIC:
								return a.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return a.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return a.K.VALIDATION_ERROR
				},
				d = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: d(e)
					} : e
				};
			t.a = d
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityAwards.64df0f65381d00f65250.js.map