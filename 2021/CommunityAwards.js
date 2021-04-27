// https://www.redditstatic.com/desktop2x/CommunityAwards.ad9a8cdb0d5a4d43f0f2.js
// Retrieved at 4/27/2021, 9:50:06 AM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/gold/communityAwards/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "createCommunityAward", (function() {
				return A
			})), r.d(t, "createModAward", (function() {
				return g
			})), r.d(t, "createGlobalAward", (function() {
				return I
			})), r.d(t, "createAwardFailed", (function() {
				return x
			})), r.d(t, "_createAwardSuccessful", (function() {
				return C
			})), r.d(t, "createAwardSuccessful", (function() {
				return R
			})), r.d(t, "manageableAwardsRequested", (function() {
				return S
			})), r.d(t, "manageableAwardsLoaded", (function() {
				return q
			})), r.d(t, "optionalAwardsLoaded", (function() {
				return N
			})), r.d(t, "awardSheetInfoRequested", (function() {
				return U
			})), r.d(t, "awardSheetInfoPending", (function() {
				return L
			})), r.d(t, "awardSheetInfoFailed", (function() {
				return F
			})), r.d(t, "awardSheetInfoLoaded", (function() {
				return M
			})), r.d(t, "removeCommunityAward", (function() {
				return G
			})), r.d(t, "removeCommunityAwardSuccessful", (function() {
				return B
			})), r.d(t, "disableAwardinCommunity", (function() {
				return V
			})), r.d(t, "enableAwardinCommunity", (function() {
				return Q
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				d = r("./src/reddit/helpers/awards/isEligibleForGlobalAwards.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/selectors/activeModalId.ts"),
				l = r("./src/reddit/selectors/communityAwards.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				f = r("./src/reddit/selectors/profile.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				p = r("./src/reddit/endpoints/gold/communityAwards.ts"),
				m = r("./src/reddit/constants/gold.ts"),
				O = r("./src/reddit/actions/gold/constants.ts");
			const h = () => a.fbt._("There was an error creating the award. Please try again.", null, {
					hk: "3UtrTD"
				}),
				j = () => a.fbt._("There was an error loading awards list. Please try again.", null, {
					hk: "3fs6Y8"
				}),
				y = () => a.fbt._("There was an error removing the award. Please try again.", null, {
					hk: "1exAPF"
				}),
				A = (e, t, r, a, n, i, d, s) => async (o, c, {
					gqlContext: u
				}) => {
					o(_());
					try {
						if ((await Object(p.a)(u(), e, t, r, a, n, i, d, s)).error) {
							const e = h();
							await o(x(e))
						}
					} catch (l) {
						const e = h();
						await o(x(e))
					}
				}, g = (e, t, r, a, n, i, d, s) => async (o, c, {
					gqlContext: u
				}) => {
					o(_());
					try {
						if ((await Object(p.c)(u(), e, t, r, a, n, i, d, s)).error) {
							const e = h();
							await o(x(e))
						}
					} catch (l) {
						const e = h();
						await o(x(e))
					}
				}, I = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					daysOfDripExtension: a,
					daysOfPremium: n,
					description: i,
					endsAt: d,
					giverCoinReward: s,
					iconFormat: o,
					iconHeight: c,
					iconUrl: u,
					iconWidth: l,
					isNew: b,
					name: f,
					pennyPrice: w,
					pennyDonate: m,
					startsAt: O,
					subredditCoinReward: j
				}) => async (y, A, {
					gqlContext: g
				}) => {
					y(_());
					try {
						if ((await Object(p.b)({
								awardSubType: e,
								coinPrice: t,
								coinReward: r,
								context: g(),
								daysOfDripExtension: a,
								daysOfPremium: n,
								description: i,
								endsAt: d,
								giverCoinReward: s,
								iconFormat: o,
								iconHeight: c,
								iconUrl: u,
								iconWidth: l,
								isNew: b,
								name: f,
								pennyPrice: w,
								pennyDonate: m,
								startsAt: O,
								subredditCoinReward: j
							})).error) {
							const e = h();
							await y(x(e))
						}
					} catch (I) {
						const e = h();
						await y(x(e))
					}
				}, _ = Object(n.a)(O.i), E = Object(n.a)(O.h), x = e => async (t, r) => {
					await t(E(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, C = Object(n.a)(O.j), R = ({
					award: e,
					subredditId: t
				}) => async (r, n) => {
					const i = n();
					r(C({
						award: e,
						subredditId: t
					})), Object(u.a)(i) === m.a && r(Object(s.i)(m.a));
					const d = a.fbt._("Community award successfully created!", null, {
						hk: "3UvmDa"
					});
					r(Object(o.f)({
						kind: c.b.SuccessCommunity,
						text: d
					}))
				}, S = e => async (t, r, {
					gqlContext: a
				}) => {
					const n = r(),
						i = !!n.awards.manageable.order[e];
					if (Object(l.b)(n, {
							subredditOrProfileId: e
						}) || i) return;
					t(P({
						subredditOrProfileId: e
					}));
					const s = Object(d.a)(e),
						o = !!Object(w.bb)(n, {
							subredditIds: [e]
						})[0];
					let c;
					if (s) c = Object(p.j)(a());
					else if (o) c = Object(p.k)(a(), e);
					else {
						const t = Object(f.p)(n, {
							profileId: e
						}).name;
						c = Object(p.l)(a(), t)
					}
					try {
						const r = await c;
						if (!r.ok) {
							const e = j();
							return void(await t(D(e)))
						}
						let a = [];
						if (s) a = r.body.data.globalAwards;
						else {
							const n = o ? r.body.data.subreddit : r.body.data.profileByName;
							a = n.manageableAwards || [], t(N({
								awards: n.optionalAwards || [],
								subredditOrProfileId: e
							})), t(k({
								subredditOrProfileId: e,
								disabled: !n.isAwardCreationAllowed
							}))
						}
						await t(q({
							awards: a,
							subredditOrProfileId: e
						}))
					} catch (u) {
						const e = j();
						t(D(e))
					}
				}, P = Object(n.a)(O.I), q = Object(n.a)(O.H), N = Object(n.a)(O.M), T = Object(n.a)(O.G), D = e => async (t, r) => {
					await t(T(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, k = Object(n.a)(O.e), v = e => e.map(({
					tag: e,
					content: t
				}) => ({
					tag: e,
					content: {
						richtext: JSON.parse(t.richtext),
						markdown: t.markdown
					}
				})), U = (e, t, r, a) => async (n, d, {
					gqlContext: s
				}) => {
					const o = d(),
						c = o.awards.sortedUsable.order[e];
					if (!(!!c && !!c[t]) || a) {
						n(L({
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
								const i = Object(b.F)(e, {
									postId: t
								});
								return "profile" === (null === (a = null == i ? void 0 : i.belongsTo) || void 0 === a ? void 0 : a.type) ? i.author : null
							})(o, {
								thingId: t,
								subredditId: e
							});
							if (a) {
								const r = await Object(p.g)(s(), a, t);
								if (r.ok) {
									const a = r.body,
										i = v(a.data.profileByName.awardingTray.sortedUsableTags);
									await n(M({
										awards: a.data.profileByName.sortedUsableAwards,
										tags: i,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(F({
									subredditOrProfileId: e,
									thingId: t
								}))
							} else {
								const r = await Object(p.f)(s(), e, t);
								if (r.ok) {
									const a = r.body,
										i = v(a.data.subredditInfoById.awardingTray.sortedUsableTags);
									await n(M({
										awards: a.data.subredditInfoById.sortedUsableAwards,
										tags: i,
										subredditOrProfileId: e,
										thingId: t
									}))
								} else await n(F({
									subredditOrProfileId: e,
									thingId: t
								}))
							}
						} catch (u) {
							i.c.captureException(u), await n(F({
								subredditOrProfileId: e,
								thingId: t
							}))
						}
					}
				}, L = Object(n.a)(O.d), F = Object(n.a)(O.b), M = Object(n.a)(O.c), G = (e, t) => async (r, n, {
					gqlContext: d
				}) => {
					r(J());
					try {
						if ((await Object(p.m)(d(), t)).error) {
							const e = y();
							await r(W(e))
						} else {
							await r(B({
								awardId: t,
								subredditId: e
							}));
							const i = Object(l.a)(n(), t);
							if (!i) return;
							const d = a.fbt._("{award name} Award successfully deleted!", [a.fbt._param("award name", i.name)], {
								hk: "3ZQs5u"
							});
							r(Object(o.f)({
								kind: c.b.SuccessCommunity,
								duration: o.a,
								text: d
							}))
						}
					} catch (s) {
						i.c.captureException(s);
						const e = y();
						await r(W(e))
					}
				}, J = Object(n.a)(O.hb), B = Object(n.a)(O.ib), H = Object(n.a)(O.gb), W = e => async (t, r) => {
					await t(H(e)), t(Object(o.f)({
						kind: c.b.Error,
						duration: o.a,
						text: e
					}))
				}, V = (e, t) => async (r, n, {
					gqlContext: d
				}) => {
					r(z());
					let s = a.fbt._("There was a problem disabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "3KNLaD"
						}),
						u = X(s),
						l = c.b.Error;
					try {
						(await Object(p.h)(d(), t.id, e.id)).ok && (u = K({
							awardId: t.id,
							subredditId: e.id
						}), s = a.fbt._("{award name} Award successfully disabled in {subreddit or profile prefixed name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit or profile prefixed name", e.displayText)], {
							hk: "26i191"
						}), l = c.b.SuccessCommunity)
					} catch (b) {
						i.c.captureException(b)
					} finally {
						await r(u), await r(Object(o.f)({
							text: s,
							duration: o.a,
							kind: l
						}))
					}
				}, z = Object(n.a)(O.l), K = Object(n.a)(O.m), X = Object(n.a)(O.k), Q = (e, t) => async (r, n, {
					gqlContext: d
				}) => {
					r(Y());
					let s = a.fbt._("There was a problem enabling the {award name} Award. Please try again.", [a.fbt._param("award name", t.name)], {
							hk: "2jdxBY"
						}),
						u = Z(s),
						l = c.b.Error;
					try {
						(await Object(p.i)(d(), t.id, e.id)).ok && (u = $({
							awardId: t.id,
							subredditId: e.id
						}), s = a.fbt._("{award name} Award successfully enabled in {subreddit name}!", [a.fbt._param("award name", t.name), a.fbt._param("subreddit name", "r/" + e.name)], {
							hk: "zGXlU"
						}), l = c.b.SuccessCommunity)
					} catch (b) {
						i.c.captureException(b)
					} finally {
						await r(u), await r(Object(o.f)({
							text: s,
							duration: o.a,
							kind: l
						}))
					}
				}, Y = Object(n.a)(O.o), $ = Object(n.a)(O.p), Z = Object(n.a)(O.n)
		},
		"./src/reddit/constants/gold.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			}));
			const a = "ModerationPage--Modal--AddAward",
				n = "ModerationPage--Modal--DeleteAwardConfirmation",
				i = 20,
				d = 4,
				s = 1e4,
				o = .2,
				c = .1,
				u = .1,
				l = 500
		},
		"./src/reddit/endpoints/gold/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return A
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "j", (function() {
				return R
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "m", (function() {
				return q
			})), r.d(t, "h", (function() {
				return N
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "e", (function() {
				return D
			}));
			var a = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/lib/uploadToS3/index.ts"),
				o = r("./src/graphql/operations/AwardSheetInfo.json"),
				c = r("./src/graphql/operations/AwardSheetInfoForProfile.json"),
				u = r("./src/graphql/operations/CreateCommunityAward.json"),
				l = r("./src/graphql/operations/CreateGlobalAward.json"),
				b = r("./src/graphql/operations/CreateModAward.json"),
				f = r("./src/graphql/operations/DisableAwardInCommunity.json"),
				w = r("./src/graphql/operations/EnableAwardInCommunity.json"),
				p = r("./src/graphql/operations/GlobalAwards.json"),
				m = r("./src/graphql/operations/ManageableAwards.json"),
				O = r("./src/graphql/operations/ManageableAwardsForProfile.json"),
				h = r("./src/graphql/operations/RemoveCommunityAward.json"),
				j = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const A = (e, t, r, i) => {
					const s = {
						subreddit: t,
						filepath: r,
						mimetype: i
					};
					return Object(n.a)(Object(d.a)(e, [j.a]), {
						method: a.cb.POST,
						endpoint: `${e.apiUrl}/api/v1/community_awards/award_asset_upload_s3`,
						data: s
					})
				},
				g = async (e, t) => Object(s.a)(t, e), I = (e, t, r, a, n, d, s, o, c) => Object(i.a)(e, {
					...u,
					variables: {
						coinPrice: s,
						iconHeight: d,
						iconWidth: n,
						iconUrl: a,
						name: r,
						subredditId: t,
						startsAt: o,
						endsAt: c
					}
				}), _ = (e, t, r, a, n, d, s, o, c) => Object(i.a)(e, {
					...b,
					variables: {
						iconHeight: d,
						iconWidth: n,
						iconUrl: a,
						monthsOfPremium: s,
						name: r,
						subredditId: t,
						startsAt: o,
						endsAt: c
					}
				}), E = ({
					awardSubType: e,
					coinPrice: t,
					coinReward: r,
					context: a,
					daysOfDripExtension: n,
					daysOfPremium: d,
					description: s,
					endsAt: o,
					giverCoinReward: c,
					iconFormat: u,
					iconHeight: b,
					iconUrl: f,
					iconWidth: w,
					isNew: p,
					name: m,
					pennyPrice: O,
					pennyDonate: h,
					startsAt: j,
					subredditCoinReward: y
				}) => Object(i.a)(a, {
					...l,
					variables: {
						awardSubType: e,
						iconFormat: u,
						iconHeight: b,
						iconWidth: w,
						iconUrl: f,
						isNew: p,
						daysOfPremium: d,
						daysOfDripExtension: n,
						description: s,
						coinPrice: t,
						coinReward: r,
						name: m,
						pennyPrice: O,
						pennyDonate: h,
						giverCoinReward: c,
						startsAt: j,
						endsAt: o,
						subredditCoinReward: y
					}
				}), x = (e, t) => Object(i.a)(e, {
					...m,
					variables: {
						subredditId: t
					}
				}), C = (e, t) => Object(i.a)(e, {
					...O,
					variables: {
						profileName: t
					}
				}), R = e => Object(i.a)(e, {
					...p
				}), S = (e, t, r) => Object(i.a)(e, {
					...o,
					variables: {
						subredditId: t,
						thingId: r,
						includeGroup: !0
					}
				}), P = (e, t, r) => Object(i.a)(e, {
					...c,
					variables: {
						profileName: t,
						thingId: r,
						includeGroup: !0
					}
				}), q = (e, t) => Object(i.a)(e, {
					...h,
					variables: {
						awardId: t
					}
				}), N = (e, t, r) => Object(i.a)(e, {
					...f,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), T = (e, t, r) => Object(i.a)(e, {
					...w,
					variables: {
						awardId: t,
						subredditId: r
					}
				}), D = async (e, t, r) => {
					const i = {
						api_type: "json",
						award_id: t,
						raw_json: 1
					};
					return Object(n.a)(Object(d.a)(e, [j.a]), {
						method: a.cb.POST,
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
				return d
			}));
			var a = r("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case a.E.NO_STRIPE_SUBSCRIPTION:
							case a.E.USER_DOESNT_EXIST:
							case a.E.USER_REQUIRED_ERROR:
							case a.E.VALIDATION_ERROR:
								return e;
							case a.E.NO_USER:
							case a.E.NO_TEXT:
							case a.E.NO_URL:
								return a.E.VALIDATION_ERROR;
							case a.E.CREDIT_CARD_FAILURE:
							case a.E.CREDIT_CARD_FAILURE_GENERIC:
								return a.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return a.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return a.E.VALIDATION_ERROR
				},
				i = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				d = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: i(e)
					} : e
				};
			t.a = i
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CommunityAwards.ad9a8cdb0d5a4d43f0f2.js.map