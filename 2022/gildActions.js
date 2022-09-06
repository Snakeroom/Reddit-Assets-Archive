// https://www.redditstatic.com/desktop2x/gildActions.dff42508f3c9f63c8962.js
// Retrieved at 9/6/2022, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
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
			const u = Object(a.a)(c.nb),
				l = (e, t, r) => async (d, s, a) => {
					let {
						gqlContext: c
					} = a;
					var l, b;
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
						d(u({
							subredditId: e,
							amount: (null === (b = null === (l = t.data.subredditInfoById) || void 0 === l ? void 0 : l.userCoinsInSubreddit) || void 0 === b ? void 0 : b.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setIsAnonymous", (function() {
				return Z
			})), r.d(t, "updateMessage", (function() {
				return $
			})), r.d(t, "gildGqlRequested", (function() {
				return X
			})), r.d(t, "triggerLoader", (function() {
				return V
			})), r.d(t, "gildPending", (function() {
				return ee
			})), r.d(t, "gildFailed", (function() {
				return re
			})), r.d(t, "gildSuccessful", (function() {
				return ae
			}));
			var d = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				n = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/profile/index.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				b = r("./node_modules/react/index.js"),
				m = r.n(b),
				w = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = r.n(g);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), O = e => j._("Sent! You earned {=awarder karma}", [j._param("=awarder karma", m.a.createElement("a", {
				className: f.a.karmaLink,
				href: w.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, j._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [j._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var p = r("./src/reddit/constants/modals.ts"),
				v = r("./src/reddit/models/Gold/Coins/index.ts"),
				h = r("./src/reddit/models/Post/index.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				A = r("./src/reddit/models/User/index.ts"),
				y = r("./src/reddit/selectors/commentSelector.ts"),
				k = r("./src/reddit/selectors/communityAwards.ts"),
				x = r("./src/reddit/selectors/gild.ts"),
				G = r("./src/reddit/selectors/gold/awardIcon.ts"),
				L = r("./src/reddit/selectors/gold/econPurchase.ts"),
				_ = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/selectors/posts.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/endpoints/awards/index.ts"),
				R = r("./src/lib/makeGqlRequest/index.ts"),
				T = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				q = r("./src/redditGQL/operations/GildComment.json"),
				N = r("./src/redditGQL/operations/GildPost.json");
			const D = (e, t, r) => Object(R.a)(e, {
					...N,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				}),
				K = (e, t, r) => Object(R.a)(e, {
					...q,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				});
			var Q = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				M = r("./src/reddit/helpers/awards/message.ts"),
				B = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/helpers/isPost.ts"),
				J = r("./src/reddit/helpers/trackers/gild.ts"),
				z = r("./src/telemetry/index.ts"),
				U = r("./src/reddit/endpoints/profile/info.ts"),
				Y = r("./src/reddit/actions/gold/constants.ts"),
				H = r("./src/reddit/actions/gold/econPurchase.ts");
			const Z = Object(s.a)(Y.r),
				$ = Object(s.a)(Y.v),
				X = (e, t) => async (r, s) => {
					const a = s(),
						n = !Object(F.a)(e) && Object(y.f)(a, {
							commentId: e
						});
					r(ee());
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
									u = Object(x.b)(n) || Object(B.d)(B.a.GildingFlow, !1),
									{
										receivedKarma: l
									} = await Object(E.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: c,
										nonce: u,
										message: Object(M.d)(o, i)
									}, r),
									b = await Object(E.a)(a(), {
										thingId: e
									}, r);
								await t(ae({
									id: e,
									awardId: i.id,
									awardings: b.awardings,
									awardKarmaReceived: l || 0,
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
								const i = s(),
									o = i.gild,
									c = Object(P.G)(i, {
										postId: e
									}),
									u = Object(F.a)(e) && !!c && Object(h.q)(c),
									l = {
										gildingTypeId: o.selectedAward.id,
										isAnonymous: o.isAnonymous,
										isGildFunded: !1,
										message: Object(M.d)(o.message, o.selectedAward, u),
										nodeId: e
									},
									b = Object(F.a)(e) ? D : K,
									m = await b(n(), {
										input: l
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
										s = Object(F.a)(e) ? m.body.data.gild.postInfo : m.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: n
										} = s;
									await t(ae({
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
									await t(re(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(re(t))
					} finally {
						Object(B.b)(B.a.GildingFlow)
					}
				}, V = Object(s.a)(Y.u), W = Object(s.a)(Y.q), ee = () => async (e, t) => {
					e(W()), window.setTimeout(() => {
						t().gild.api.pending && e(V())
					}, 2e3)
				}, te = Object(s.a)(Y.p), re = e => async (t, r) => {
					await t(te(e)), t(Object(l.f)({
						kind: I.b.Error,
						duration: l.a,
						text: e
					}))
				}, de = Object(s.a)(Y.s), se = (e, t) => {
					const {
						id: r
					} = t, d = Object(F.a)(r) ? Object(P.G)(e, {
						postId: r
					}) : Object(y.b)(e, {
						commentId: r
					}), s = Object(S.k)(e), a = e.gild, {
						isAnonymous: n
					} = a, i = !n && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, o = d ? d.author : void 0, c = Object(C.L)(e, {
						thingId: r
					});
					return de({
						...t,
						gilder: i,
						gildee: o,
						subredditId: c && c.id
					})
				}, ae = e => async (t, r) => {
					const s = r(),
						{
							awardId: b,
							id: m
						} = e,
						g = Object(k.a)(s, b),
						f = e.awardKarmaReceived,
						j = Object(S.k)(s),
						y = Object(x.b)(s) || Object(B.d)(B.a.GildingFlow, !1);
					if (Object(x.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(G.a)(s, {
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
						const t = Object(C.L)(s, {
								thingId: m
							}),
							r = t && Object(C.D)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - g.coinPrice)
					}
					if (t(se(s, e)), j) {
						const r = {
								...U.a,
								...j.karma
							},
							d = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(A.e)(j);
						t(Object(u.f)({
							coins: e.coins
						})), t(Object(u.h)({
							userName: s,
							karma: {
								...r,
								fromAwardsReceived: d
							}
						}))
					}(s.posts.instances[m] || []).forEach(r => {
						t(se(s, {
							...e,
							id: r
						}))
					});
					const E = Object(F.a)(m) ? d.fbt._("Success! You have given this post the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "1Ndi4Z"
						}) : d.fbt._("Success! You have given this comment the {awardName} Award", [d.fbt._param("awardName", g.name)], {
							hk: "2sIK9Y"
						}),
						R = g.coinPrice;
					Object(z.a)(Object(J.viewKarmaSuccessEvent)({
						award: g,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: R,
						thingId: m
					})(s)), t(Object(c.g)(p.a.GOLD_GILD_MODAL));
					const T = Object(G.a)(s, {
						award: g,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: T,
						kind: I.b.SuccessAward,
						text: f > 0 ? O({
							awarderKarmaReceived: f
						}) : E
					})), setTimeout(() => {
						const e = Object(Q.a)(b, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const q = Date.now();
					await t(Object(o.b)({
						correlationId: y,
						forceLoad: !0
					}));
					const N = Date.now() - q;
					if (R > 0) {
						const e = Object(_.f)(r()).filter(e => v.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - N, 10),
								d = Math.max(300 - N, 10),
								a = Object(F.a)(m) && Object(h.q)(Object(P.G)(s, {
									postId: m
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: y,
								packageId: e[0].mobileId
							})), a ? r : d)
						}
					}
					const D = Object(C.L)(s, {
						thingId: m
					});
					if (D && Object(L.a)(s, {
							subredditId: D.id
						}) && t(Object(H.a)(D.id, D.name, {
							force: !0
						})), 0 === R && D) {
						t(Object(n.a)(D.id, m, void 0, !0));
						const e = 399,
							d = Object(_.d)(r()).reduce((t, r) => {
								const d = Math.abs(r.pennies - e);
								return (!t || d < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: d
								}), t
							}, null);
						d && t(Object(i.b)({
							correlationId: y,
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
				return u
			})), r.d(t, "c", (function() {
				return l
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
			const u = async (e, t, r) => {
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
			}, l = async (e, t) => {
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
					case s.nb: {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.dff42508f3c9f63c8962.js.map