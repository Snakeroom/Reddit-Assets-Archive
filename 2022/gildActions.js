// https://www.redditstatic.com/desktop2x/gildActions.52b0a84a726ed2f1984f.js
// Retrieved at 6/13/2022, 10:00:04 AM by Reddit Dataminer v1.0.0
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
			const l = Object(a.a)(c.mb),
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
				return X
			})), r.d(t, "updateMessage", (function() {
				return V
			})), r.d(t, "gildGqlRequested", (function() {
				return ee
			})), r.d(t, "triggerLoader", (function() {
				return te
			})), r.d(t, "gildPending", (function() {
				return de
			})), r.d(t, "gildFailed", (function() {
				return ae
			})), r.d(t, "gildSuccessful", (function() {
				return oe
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
				h = r("./src/reddit/models/Gold/Coins/index.ts"),
				I = r("./src/reddit/models/Post/index.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/selectors/commentSelector.ts"),
				k = r("./src/reddit/selectors/communityAwards.ts"),
				x = r("./src/reddit/selectors/gild.ts"),
				_ = r("./src/reddit/selectors/gold/awardIcon.ts"),
				G = r("./src/reddit/selectors/gold/econPurchase.ts"),
				C = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = r("./src/reddit/selectors/posts.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/user.ts"),
				E = r("./src/lib/makeGqlRequest/index.ts"),
				K = r("./src/lib/makeRequest/index.ts"),
				T = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				R = r("./src/reddit/helpers/isPost.ts"),
				q = r("./src/redditGQL/operations/AwardSideEffectsDetails.json"),
				N = r("./src/redditGQL/operations/GiveAward.json");
			var D = r("./src/redditGQL/operations/GildComment.json"),
				M = r("./src/redditGQL/operations/GildPost.json");
			const Q = (e, t, r) => Object(E.a)(e, {
					...M,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				}),
				B = (e, t, r) => Object(E.a)(e, {
					...D,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				});
			var F = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				z = r("./src/reddit/helpers/awards/message.ts"),
				J = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/helpers/trackers/gild.ts"),
				Y = r("./src/telemetry/index.ts"),
				H = r("./src/reddit/endpoints/profile/info.ts"),
				Z = r("./src/reddit/actions/gold/constants.ts"),
				$ = r("./src/reddit/actions/gold/econPurchase.ts");
			const X = Object(s.a)(Z.r),
				V = Object(s.a)(Z.v),
				W = (e, t) => {
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
							l = Object(x.b)(n) || Object(J.d)(J.a.GildingFlow, !1),
							{
								receivedKarma: u
							} = await (async (e, t, r) => {
								var d;
								const s = await Object(E.a)(e, {
									...N,
									variables: {
										input: t
									}
								}, {
									query: r ? {} : Object(T.b)()
								});
								if (!Object(K.c)(s)) throw new Error("An unknown error occurred");
								if (!Object(K.c)(s) || !s.body.data.giveAward.ok) throw s.body.data.giveAward.errors && (null === (d = s.body.data.giveAward.errors) || void 0 === d ? void 0 : d.length) > 0 ? new Error(s.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
								return s.body.data.giveAward
							})(a(), {
								targetId: e,
								awardId: i.id,
								isAnonymous: c,
								nonce: l,
								message: Object(z.d)(o, i)
							}, r),
							b = await (async (e, t, r) => {
								const d = await Object(E.a)(e, {
									...q,
									variables: {
										thingId: t.thingId,
										isPost: Object(R.a)(t.thingId)
									}
								}, {
									query: r ? {} : Object(T.b)()
								});
								if (!Object(K.c)(d)) throw new Error("An unknown error occurred");
								if (d.body.data.postInfoById) {
									const {
										identity: e,
										postInfoById: r
									} = d.body.data;
									return {
										id: t.thingId,
										awardings: r.awardings,
										treatmentTags: r.treatmentTags,
										coins: e.coins
									}
								}
								if (d.body.data.commentById) {
									const {
										identity: e,
										commentById: r
									} = d.body.data;
									return {
										id: t.thingId,
										awardings: r.awardings,
										treatmentTags: r.treatmentTags,
										coins: e.coins
									}
								}
								throw new Error("An unknown error occurred")
							})(a(), {
								thingId: e
							}, r);
						await t(oe({
							id: e,
							awardId: i.id,
							awardings: b.awardings,
							awardKarmaReceived: u || 0,
							coins: b.coins,
							treatmentTags: b.treatmentTags
						}))
					}
				},
				ee = (e, t) => async (r, s) => {
					const a = s(),
						n = !Object(R.a)(e) && Object(A.d)(a, {
							commentId: e
						});
					r(de());
					try {
						n ? await r(W(e, t)) : await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, s, a) => {
								let {
									gqlContext: n
								} = a;
								const i = s(),
									o = i.gild,
									c = Object(L.G)(i, {
										postId: e
									}),
									l = Object(R.a)(e) && !!c && Object(I.q)(c),
									u = {
										gildingTypeId: o.selectedAward.id,
										isAnonymous: o.isAnonymous,
										isGildFunded: !1,
										message: Object(z.d)(o.message, o.selectedAward, l),
										nodeId: e
									},
									b = Object(R.a)(e) ? Q : B,
									m = await b(n(), {
										input: u
									}, r);
								let w = !1,
									g = null,
									f = null;
								if (m.ok) {
									const e = m.body;
									w = e.data.gild.ok, g = e.data.gild.fieldErrors, f = e.data.gild.errors
								}
								if (w) {
									const r = m.body,
										{
											gild: d
										} = r.data,
										s = Object(R.a)(e) ? m.body.data.gild.postInfo : m.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: n
										} = s;
									await t(oe({
										awardId: o.selectedAward.id,
										awardings: a,
										awardKarmaReceived: d.awardKarmaReceived,
										coins: d.coins,
										id: e,
										subredditCoins: d.subredditCoins,
										treatmentTags: n
									}))
								} else {
									const e = null == g ? void 0 : g[0].message,
										r = null == f ? void 0 : f[0].message,
										s = e || r || d.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(ae(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(ae(t))
					} finally {
						Object(J.b)(J.a.GildingFlow)
					}
				}, te = Object(s.a)(Z.u), re = Object(s.a)(Z.q), de = () => async (e, t) => {
					e(re()), window.setTimeout(() => {
						t().gild.api.pending && e(te())
					}, 2e3)
				}, se = Object(s.a)(Z.p), ae = e => async (t, r) => {
					await t(se(e)), t(Object(u.f)({
						kind: v.b.Error,
						duration: u.a,
						text: e
					}))
				}, ne = Object(s.a)(Z.s), ie = (e, t) => {
					const {
						id: r
					} = t, d = Object(R.a)(r) ? Object(L.G)(e, {
						postId: r
					}) : Object(A.b)(e, {
						commentId: r
					}), s = Object(S.k)(e), a = e.gild, {
						isAnonymous: n
					} = a, i = !n && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, o = d ? d.author : void 0, c = Object(P.K)(e, {
						thingId: r
					});
					return ne({
						...t,
						gilder: i,
						gildee: o,
						subredditId: c && c.id
					})
				}, oe = e => async (t, r) => {
					const s = r(),
						{
							awardId: b,
							id: m
						} = e,
						g = Object(k.a)(s, b),
						f = e.awardKarmaReceived,
						O = Object(S.k)(s),
						A = Object(x.b)(s) || Object(J.d)(J.a.GildingFlow, !1);
					if (Object(x.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(_.a)(s, {
								award: g,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = b, t.awardIcon = r, t.awardName = g.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (g.awardType === w.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(P.K)(s, {
								thingId: m
							}),
							r = t && Object(P.C)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - g.coinPrice)
					}
					if (t(ie(s, e)), O) {
						const r = {
								...H.a,
								...O.karma
							},
							d = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(y.e)(O);
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
						t(ie(s, {
							...e,
							id: r
						}))
					});
					const E = Object(R.a)(m) ? d.fbt._("Success! You have given this post the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "1Ndi4Z"
						}) : d.fbt._("Success! You have given this comment the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "2sIK9Y"
						}),
						K = g.coinPrice;
					Object(Y.a)(Object(U.viewKarmaSuccessEvent)({
						award: g,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: K,
						thingId: m
					})(s)), t(Object(c.g)(p.a.GOLD_GILD_MODAL));
					const T = Object(_.a)(s, {
						award: g,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(u.f)({
						customIconAsset: T,
						kind: v.b.SuccessAward,
						text: f > 0 ? j({
							awarderKarmaReceived: f
						}) : E
					})), setTimeout(() => {
						const e = Object(F.a)(b, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const q = Date.now();
					await t(Object(o.b)({
						correlationId: A,
						forceLoad: !0
					}));
					const N = Date.now() - q;
					if (K > 0) {
						const e = Object(C.f)(r()).filter(e => h.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - N, 10),
								d = Math.max(300 - N, 10),
								a = Object(R.a)(m) && Object(I.q)(Object(L.G)(s, {
									postId: m
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: A,
								packageId: e[0].mobileId
							})), a ? r : d)
						}
					}
					const D = Object(P.K)(s, {
						thingId: m
					});
					if (D && Object(G.a)(s, {
							subredditId: D.id
						}) && t(Object($.a)(D.id, D.name, {
							force: !0
						})), 0 === K && D) {
						t(Object(n.a)(D.id, m, void 0, !0));
						const e = 399,
							d = Object(C.d)(r()).reduce((t, r) => {
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
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return n
			}));
			const d = 500,
				s = 1800,
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < d ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				n = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const d = a(t, r);
					return e.slice(0, d)
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
					case s.mb: {
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
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"f4cb124e646e"}')
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
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.52b0a84a726ed2f1984f.js.map