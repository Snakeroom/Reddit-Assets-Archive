// https://www.redditstatic.com/desktop2x/CommunityAwards.deee46b0a33928e8dc16.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CommunityAwards"], {
		"./src/reddit/actions/gold/communityAwards/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "createCommunityAward", (function() {
				return A
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
				return G
			})), r.d(t, "awardSheetInfoRequested", (function() {
				return v
			})), r.d(t, "awardSheetInfoPending", (function() {
				return U
			})), r.d(t, "awardSheetInfoFailed", (function() {
				return Q
			})), r.d(t, "awardSheetInfoLoaded", (function() {
				return F
			})), r.d(t, "removeCommunityAward", (function() {
				return M
			})), r.d(t, "removeCommunityAwardSuccessful", (function() {
				return J
			})), r.d(t, "disableAwardinCommunity", (function() {
				return W
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
				I = () => a.fbt._("There was an error loading awards list. Please try again.", null, {
					hk: "3fs6Y8"
				}),
				y = () => a.fbt._("There was an error removing the award. Please try again.", null, {
					hk: "1exAPF"
				}),
				A = (e, t, r, a, n, d, i, s) => async (o, c, {
					gqlContext: u
				}) => {
					o(_());
					try {
						if ((await Object(m.a)(u(), e, t, r, a, n, d, i, s)).error) {
							const e = j();
							await o(C(e))
						}
					} catch (b) {
						const e = j();
						await o(C(e))
					}
				}, h = (e, t, r, a, n, d, i, s) => async (o, c, {
					gqlContext: u
				}) => {
					o(_());
					try {
						if ((await Object(m.c)(u(), e, t, r, a, n, d, i, s)).error) {
							const e = j();
							await o(C(e))
						}
					} catch (b) {
						const e = j();
						await o(C(e))
					}
				}, g = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					daysOfDripExtension: a,
					daysOfPremium: n,
					description: d,
					endsAt: i,
					giverCoinReward: s,
					iconFormat: o,
					iconHeight: c,
					iconUrl: u,
					iconWidth: b,
					isNew: l,
					name: f,
					pennyPrice: w,
					pennyDonate: p,
					startsAt: O,
					subredditCoinReward: I
				}) => async (y, A, {
					gqlContext: h
				}) => {
					y(_());
					try {
						if ((await Object(m.b)({
								awardSubType: e,
								coinPrice: t,
								coinReward: r,
								context: h(),
								daysOfDripExtension: a,
								daysOfPremium: n,
								description: d,
								endsAt: i,
								giverCoinReward: s,
								iconFormat: o,
								iconHeight: c,
								iconUrl: u,
								iconWidth: b,
								isNew: l,
								name: f,
								pennyPrice: w,
								pennyDonate: p,
								startsAt: O,
								subredditCoinReward: I
							})).error) {
							const e = j();
							await y(C(e))
						}
					} catch (g) {
						const e = j();
						await y(C(e))
					}
				}, _ = Object(n.a)(O.h), x = Object(n.a)(O.g), C = e => async (t, r) => {
					await t(x(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, R = Object(n.a)(O.i), S = ({
					award: e,
					subredditId: t
				}) => async (r, n) => {
					const d = n();
					r(R({
						award: e,
						subredditId: t
					})), Object(u.a)(d) === p.a && r(Object(s.i)(p.a));
					const i = a.fbt._("Community award successfully created!", null, {
						hk: "3UvmDa"
					});
					r(Object(o.f)({
						kind: c.b.SuccessCommunity,
						text: i
					}))
				}, E = e => async (t, r, {
					gqlContext: a
				}) => {
					const n = r(),
						d = !!n.awards.manageable.order[e];
					if (Object(b.b)(n, {
							subredditOrProfileId: e
						}) || d) return;
					t(P({
						subredditOrProfileId: e
					}));
					const s = Object(i.a)(e),
						o = !!Object(w.ab)(n, {
							subredditIds: [e]
						})[0];
					let c;
					if (s) c = Object(m.j)(a());
					else if (o) c = Object(m.k)(a(), e);
					else {
						const t = Object(f.p)(n, {
							profileId: e
						}).name;
						c = Object(m.l)(a(), t)
					}
					try {
						const r = await c;
						if (!r.ok) {
							const e = I();
							return void(await t(T(e)))
						}
						let a = [];
						if (s) a = r.body.data.globalAwards;
						else {
							const n = o ? r.body.data.subreddit : r.body.data.profileByName;
							a = n.manageableAwards || [], t(G({
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
					} catch (u) {
						const e = I();
						t(T(e))
					}
				}, P = Object(n.a)(O.H), L = Object(n.a)(O.G), G = Object(n.a)(O.M), N = Object(n.a)(O.F), T = e => async (t, r) => {
					await t(N(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, D = Object(n.a)(O.d), k = e => e.map(({
					tag: e,
					content: t
				}) => ({
					tag: e,
					content: {
						richtext: JSON.parse(t.richtext),
						markdown: t.markdown
					}
				})), v = (e, t, r, a) => async (n, i, {
					gqlContext: s
				}) => {
					const o = i(),
						c = o.awards.sortedUsable.order[e];
					if (!(!!c && !!c[t]) || a) {
						n(U({
							subredditOrProfileId: e,
							thingId: t
						}));
						try {
							const a = r || ((e, {
								thingId: t,
								subredditId: r
							}) => {
								var a;
								const n = Object(f.p)(e, {
									profileId: r
								});
								if (n) return n.name;
								const d = Object(l.G)(e, {
									postId: t
								});
								return "profile" === (null === (a = null == d ? void 0 : d.belongsTo) || void 0 === a ? void 0 : a.type) ? d.author : null
							})(o, {
								thingId: t,
								subredditId: e
							});
							if (a) {
								const r = await Object(m.g)(s(), a, t);
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
								const r = await Object(m.f)(s(), e, t);
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
						} catch (u) {
							d.c.captureException(u), await n(Q({
								subredditOrProfileId: e,
								thingId: t
							}))
						}
					}
				}, U = Object(n.a)(O.c), Q = Object(n.a)(O.a), F = Object(n.a)(O.b), M = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					r(q());
					try {
						if ((await Object(m.m)(i(), t)).error) {
							const e = y();
							await r(H(e))
						} else {
							await r(J({
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
					} catch (s) {
						d.c.captureException(s);
						const e = y();
						await r(H(e))
					}
				}, q = Object(n.a)(O.jb), J = Object(n.a)(O.kb), B = Object(n.a)(O.ib), H = e => async (t, r) => {
					await t(B(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, W = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					r(V());
					let s = a.fbt._("There was a problem disabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "3KNLaD"
						}),
						u = K(s),
						b = c.b.Error;
					try {
						(await Object(m.h)(i(), t.id, e.id)).ok && (u = z({
							awardId: t.id,
							subredditId: e.id
						}), s = a.fbt._("{award name} Award successfully disabled in {subreddit or profile prefixed name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit or profile prefixed name", e.displayText)], {
							hk: "26i191"
						}), b = c.b.SuccessCommunity)
					} catch (l) {
						d.c.captureException(l)
					} finally {
						await r(u), await r(Object(o.f)({
							text: s,
							duration: o.a,
							kind: b
						}))
					}
				}, V = Object(n.a)(O.k), z = Object(n.a)(O.l), K = Object(n.a)(O.j), X = (e, t) => async (r, n, {
					gqlContext: i
				}) => {
					r(Y());
					let s = a.fbt._("There was a problem enabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "2jdxBY"
						}),
						u = Z(s),
						b = c.b.Error;
					try {
						(await Object(m.i)(i(), t.id, e.id)).ok && (u = $({
							awardId: t.id,
							subredditId: e.id
						}), s = a.fbt._("{award name} Award successfully enabled in {subreddit name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit name", "r/" + e.name)], {
							hk: "zGXlU"
						}), b = c.b.SuccessCommunity)
					} catch (l) {
						d.c.captureException(l)
					} finally {
						await r(u), await r(Object(o.f)({
							text: s,
							duration: o.a,
							kind: b
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
				return A
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
				return G
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "e", (function() {
				return T
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
				I = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const A = (e, t, r, d) => {
					const s = {
						subreddit: t,
						filepath: r,
						mimetype: d
					};
					return Object(n.a)(Object(i.a)(e, [I.a]), {
						method: a.jb.POST,
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
				}), x = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: a,
					daysOfDripExtension: n,
					daysOfPremium: i,
					description: s,
					endsAt: o,
					giverCoinReward: c,
					iconFormat: u,
					iconHeight: l,
					iconUrl: f,
					iconWidth: w,
					isNew: m,
					name: p,
					pennyPrice: O,
					pennyDonate: j,
					startsAt: I,
					subredditCoinReward: y
				}) => Object(d.a)(a, {
					...b,
					variables: {
						awardSubType: e,
						iconFormat: u,
						iconHeight: l,
						iconWidth: w,
						iconUrl: f,
						isNew: m,
						daysOfPremium: i,
						daysOfDripExtension: n,
						description: s,
						coinPrice: t,
						coinReward: r,
						name: p,
						pennyPrice: O,
						pennyDonate: j,
						giverCoinReward: c,
						startsAt: I,
						endsAt: o,
						subredditCoinReward: y
					}
				}), C = (e, t) => Object(d.a)(e, {
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
				}), G = (e, t, r) => Object(d.a)(e, {
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
				}), T = async (e, t, r) => {
					const d = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(i.a)(e, [I.a]), {
						method: a.jb.POST,
						endpoint: `${e.apiUrl}/api/report_award`,
						data: d
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(y.a)(e)
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
							case a.I.NO_STRIPE_SUBSCRIPTION:
							case a.I.USER_DOESNT_EXIST:
							case a.I.USER_REQUIRED_ERROR:
							case a.I.VALIDATION_ERROR:
								return e;
							case a.I.NO_USER:
							case a.I.NO_TEXT:
							case a.I.NO_URL:
								return a.I.VALIDATION_ERROR;
							case a.I.CREDIT_CARD_FAILURE:
							case a.I.CREDIT_CARD_FAILURE_GENERIC:
								return a.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return a.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return a.I.VALIDATION_ERROR
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityAwards.deee46b0a33928e8dc16.js.map