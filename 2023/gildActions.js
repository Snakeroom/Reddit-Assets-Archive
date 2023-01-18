// https://www.redditstatic.com/desktop2x/gildActions.c5f47463b18802bf5a4e.js
// Retrieved at 1/18/2023, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var d = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/SubredditCoins.json");
			var o = r("./src/reddit/featureFlags/subredditPoints.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(d.a)({
				features: {
					econPurchase: s.a
				}
			});
			const l = Object(a.a)(c.lb),
				u = (e, t, r) => async (d, s, a) => {
					let {
						gqlContext: c
					} = a;
					var u, b;
					if (!o.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const m = await ((e, t) => Object(n.a)(e, {
						...i,
						variables: {
							subreddit: t
						}
					}))(c(), e);
					if (m.ok) {
						const t = m.body;
						d(l({
							subredditId: e,
							amount: (null === (b = null === (u = t.data.subredditInfoById) || void 0 === u ? void 0 : u.userCoinsInSubreddit) || void 0 === b ? void 0 : b.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setIsAnonymous", (function() {
				return H
			})), r.d(t, "updateMessage", (function() {
				return Z
			})), r.d(t, "gildGqlRequested", (function() {
				return $
			})), r.d(t, "triggerLoader", (function() {
				return X
			})), r.d(t, "gildPending", (function() {
				return W
			})), r.d(t, "gildFailed", (function() {
				return te
			})), r.d(t, "gildSuccessful", (function() {
				return se
			}));
			var d = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				n = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/profile/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				b = r("./node_modules/react/index.js"),
				m = r.n(b),
				w = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = r.n(g);
			const {
				fbt: O
			} = r("./node_modules/fbt/lib/FbtPublic.js"), j = e => O._("Sent! You earned {=awarder karma}", [O._param("=awarder karma", m.a.createElement("a", {
				className: f.a.karmaLink,
				href: w.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, O._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [O._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var p = r("./src/reddit/constants/modals.ts"),
				v = r("./src/reddit/models/Gold/Coins/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/selectors/commentSelector.ts"),
				y = r("./src/reddit/selectors/communityAwards.ts"),
				k = r("./src/reddit/selectors/gild.ts"),
				x = r("./src/reddit/selectors/gold/awardIcon.ts"),
				G = r("./src/reddit/selectors/gold/econPurchase.ts"),
				_ = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/endpoints/awards/index.ts"),
				E = r("./src/lib/makeGqlRequest/index.ts"),
				R = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				T = r("./src/redditGQL/operations/GildComment.json"),
				N = r("./src/redditGQL/operations/GildPost.json");
			const q = (e, t, r) => Object(E.a)(e, {
					...N,
					variables: t
				}, {
					query: r ? {} : Object(R.b)()
				}),
				K = (e, t, r) => Object(E.a)(e, {
					...T,
					variables: t
				}, {
					query: r ? {} : Object(R.b)()
				});
			var D = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				Q = r("./src/reddit/helpers/awards/message.ts"),
				M = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/helpers/isPost.ts"),
				B = r("./src/reddit/helpers/trackers/gild.ts"),
				J = r("./src/telemetry/index.ts"),
				z = r("./src/reddit/endpoints/profile/info.ts"),
				U = r("./src/reddit/actions/gold/constants.ts"),
				Y = r("./src/reddit/actions/gold/econPurchase.ts");
			const H = Object(s.a)(U.r),
				Z = Object(s.a)(U.v),
				$ = (e, t) => async (r, s) => {
					const a = s(),
						n = !Object(F.a)(e) && Object(A.g)(a, {
							commentId: e
						});
					r(W());
					try {
						n ? await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, d, s) => {
								let {
									gqlContext: a
								} = s;
								const n = d(),
									{
										selectedAward: i,
										message: o,
										isAnonymous: c
									} = n.gild,
									l = Object(k.b)(n) || Object(M.d)(M.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(S.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: c,
										nonce: l,
										message: Object(Q.b)(o)
									}, r),
									b = await Object(S.a)(a(), {
										thingId: e
									}, r);
								await t(se({
									id: e,
									awardId: i.id,
									awardings: b.awardings,
									awardKarmaReceived: u || 0,
									coins: b.coins,
									treatmentTags: b.treatmentTags
								}))
							}
						})(e, t)) : await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, s, a) => {
								let {
									gqlContext: n
								} = a;
								const i = s().gild,
									o = {
										gildingTypeId: i.selectedAward.id,
										isAnonymous: i.isAnonymous,
										isGildFunded: !1,
										message: Object(Q.b)(i.message),
										nodeId: e
									},
									c = Object(F.a)(e) ? q : K,
									l = await c(n(), {
										input: o
									}, r);
								let u = !1,
									b = null,
									m = null;
								if (l.ok) {
									const e = l.body;
									u = e.data.gild.ok, b = e.data.gild.fieldErrors, m = e.data.gild.errors
								}
								if (u) {
									const r = l.body,
										{
											gild: d
										} = r.data,
										s = Object(F.a)(e) ? l.body.data.gild.postInfo : l.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: n
										} = s;
									await t(se({
										awardId: i.selectedAward.id,
										awardings: a,
										awardKarmaReceived: d.awardKarmaReceived,
										coins: d.coins,
										id: e,
										subredditCoins: d.subredditCoins,
										treatmentTags: n
									}))
								} else {
									const e = null == b ? void 0 : b[0].message,
										r = null == m ? void 0 : m[0].message,
										s = e || r || d.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(te(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(te(t))
					} finally {
						Object(M.b)(M.a.GildingFlow)
					}
				}, X = Object(s.a)(U.u), V = Object(s.a)(U.q), W = () => async (e, t) => {
					e(V()), window.setTimeout(() => {
						t().gild.api.pending && e(X())
					}, 2e3)
				}, ee = Object(s.a)(U.p), te = e => async (t, r) => {
					await t(ee(e)), t(Object(u.f)({
						kind: h.b.Error,
						duration: u.a,
						text: e
					}))
				}, re = Object(s.a)(U.s), de = (e, t) => {
					const {
						id: r
					} = t, d = Object(F.a)(r) ? Object(L.G)(e, {
						postId: r
					}) : Object(A.c)(e, {
						commentId: r
					}), s = Object(P.m)(e), a = e.gild, {
						isAnonymous: n
					} = a, i = !n && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, o = d ? d.author : void 0, c = Object(C.O)(e, {
						thingId: r
					});
					return re({
						...t,
						gilder: i,
						gildee: o,
						subredditId: c && c.id
					})
				}, se = e => async (t, r) => {
					const s = r(),
						{
							awardId: b,
							id: m
						} = e,
						g = Object(y.a)(s, b),
						f = e.awardKarmaReceived,
						O = Object(P.m)(s),
						A = Object(k.b)(s) || Object(M.d)(M.a.GildingFlow, !1);
					if (Object(k.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(x.a)(s, {
								award: g,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = b, t.awardIcon = r, t.awardName = g.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (g.awardType === w.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(C.O)(s, {
								thingId: m
							}),
							r = t && Object(C.F)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - g.coinPrice)
					}
					if (t(de(s, e)), O) {
						const r = {
								...z.a,
								...O.karma
							},
							d = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(I.e)(O);
						t(Object(l.f)({
							coins: e.coins
						})), t(Object(l.h)({
							userName: s,
							karma: {
								...r,
								fromAwardsReceived: d
							}
						}))
					}(s.posts.instances[m] || []).forEach(r => {
						t(de(s, {
							...e,
							id: r
						}))
					});
					const L = Object(F.a)(m) ? d.fbt._("Success! You have given this post the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "1Ndi4Z"
						}) : d.fbt._("Success! You have given this comment the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "2sIK9Y"
						}),
						S = g.coinPrice;
					Object(J.a)(Object(B.viewKarmaSuccessEvent)({
						award: g,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: S,
						thingId: m
					})(s)), t(Object(c.g)(p.a.GOLD_GILD_MODAL));
					const E = Object(x.a)(s, {
						award: g,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(u.f)({
						customIconAsset: E,
						kind: h.b.SuccessAward,
						text: f > 0 ? j({
							awarderKarmaReceived: f
						}) : L
					})), setTimeout(() => {
						const e = Object(D.a)(b, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const R = Date.now();
					await t(Object(o.b)({
						correlationId: A,
						forceLoad: !0
					}));
					const T = Date.now() - R;
					if (S > 0) {
						const e = Object(_.f)(r()).filter(e => v.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(300 - T, 10);
							setTimeout(() => t(Object(i.e)({
								correlationId: A,
								packageId: e[0].mobileId
							})), r)
						}
					}
					const N = Object(C.O)(s, {
						thingId: m
					});
					if (N && Object(G.a)(s, {
							subredditId: N.id
						}) && t(Object(Y.a)(N.id, N.name, {
							force: !0
						})), 0 === S && N) {
						t(Object(n.a)(N.id, m, void 0, !0));
						const e = 399,
							d = Object(_.d)(r()).reduce((t, r) => {
								const d = Math.abs(r.pennies - e);
								return (!t || d < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: d
								}), t
							}, null);
						d && t(Object(i.b)({
							correlationId: A,
							packageId: d.packageId
						}))
					}
				}
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, r) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "a", (function() {
				return b
			}));
			var d = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				n = r("./src/reddit/helpers/isPost.ts"),
				i = (r("./src/redditGQL/operations/AvailableAwards.json"), r("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				o = r("./src/redditGQL/operations/GiveAward.json"),
				c = r("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, r) => {
				var n;
				const i = await Object(d.a)(e, {
					...o,
					variables: {
						input: t
					}
				}, {
					query: r ? {} : Object(a.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (n = i.body.data.giveAward.errors) || void 0 === n ? void 0 : n.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, u = async (e, t) => {
				var r, a, n;
				const i = await Object(d.a)(e, {
					...c,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (n = null === (a = null === (r = i.body.data.removeAward.errors) || void 0 === r ? void 0 : r[0]) || void 0 === a ? void 0 : a.message) && void 0 !== n ? n : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, b = async (e, t, r) => {
				const o = await Object(d.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(n.a)(t.thingId)
					}
				}, {
					query: r ? {} : Object(a.b)()
				});
				if (!Object(s.c)(o)) throw new Error("An unknown error occurred");
				if (o.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: r
					} = o.body.data;
					return {
						id: t.thingId,
						awardings: r.awardings,
						treatmentTags: r.treatmentTags,
						coins: e.coins
					}
				}
				if (o.body.data.commentById) {
					const {
						identity: e,
						commentById: r
					} = o.body.data;
					return {
						id: t.thingId,
						awardings: r.awardings,
						treatmentTags: r.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			const d = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return s
			}));
			const d = () => 2048,
				s = e => {
					const t = d();
					return e.slice(0, t)
				}
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var d = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var n = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.lb: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(d.c)({
				subredditLockedCoins: n
			})
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var d = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(d.a)({
				features: {
					econPurchase: s.a
				}
			});
			const a = (e, t) => {
				let {
					subredditId: r
				} = t;
				return r && e.features.econPurchase.subredditLockedCoins[r] || 0
			}
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"e10d7f0411a4"}')
		},
		"./src/redditGQL/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/redditGQL/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.c5f47463b18802bf5a4e.js.map