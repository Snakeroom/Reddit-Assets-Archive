// https://www.redditstatic.com/desktop2x/gildActions.8140716a6633cd2766df.js
// Retrieved at 4/24/2023, 12:00:04 PM by Reddit Dataminer v1.0.0
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
			const u = Object(a.a)(c.lb),
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
				return z
			})), r.d(t, "updateMessage", (function() {
				return U
			})), r.d(t, "gildGqlRequested", (function() {
				return Y
			})), r.d(t, "triggerLoader", (function() {
				return H
			})), r.d(t, "gildPending", (function() {
				return $
			})), r.d(t, "gildFailed", (function() {
				return V
			})), r.d(t, "gildSuccessful", (function() {
				return te
			}));
			var d = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				n = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/profile/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./node_modules/react/index.js"),
				b = r.n(l),
				m = r("./src/reddit/models/Gold/Award.ts"),
				w = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				g = r.n(w);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), O = e => f._("Sent! You earned {=awarder karma}", [f._param("=awarder karma", b.a.createElement("a", {
				className: g.a.karmaLink,
				href: m.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, f._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [f._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var j = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				h = r("./src/reddit/selectors/commentSelector.ts"),
				A = r("./src/reddit/selectors/communityAwards.ts"),
				y = r("./src/reddit/selectors/gild.ts"),
				I = r("./src/reddit/selectors/gold/awardIcon.ts"),
				k = r("./src/reddit/selectors/gold/econPurchase.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				G = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/endpoints/awards/index.ts"),
				C = r("./src/lib/makeGqlRequest/index.ts"),
				S = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = r("./src/redditGQL/operations/GildComment.json"),
				E = r("./src/redditGQL/operations/GildPost.json");
			const R = (e, t, r) => Object(C.a)(e, {
					...E,
					variables: t
				}, {
					query: r ? {} : Object(S.b)()
				}),
				N = (e, t, r) => Object(C.a)(e, {
					...P,
					variables: t
				}, {
					query: r ? {} : Object(S.b)()
				});
			var T = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				q = r("./src/reddit/helpers/awards/message.ts"),
				K = r("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = r("./src/reddit/helpers/isPost.ts"),
				D = r("./src/reddit/helpers/trackers/gild.ts"),
				F = r("./src/telemetry/index.ts"),
				B = r("./src/reddit/endpoints/profile/info.ts"),
				M = r("./src/reddit/actions/gold/constants.ts"),
				J = r("./src/reddit/actions/gold/econPurchase.ts");
			const z = Object(s.a)(M.r),
				U = Object(s.a)(M.v),
				Y = (e, t) => async (r, s) => {
					const a = s(),
						n = !Object(Q.a)(e) && Object(h.g)(a, {
							commentId: e
						});
					r($());
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
									u = Object(y.b)(n) || Object(K.d)(K.a.GildingFlow, !1),
									{
										receivedKarma: l
									} = await Object(L.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: c,
										nonce: u,
										message: Object(q.b)(o)
									}, r),
									b = await Object(L.a)(a(), {
										thingId: e
									}, r);
								await t(te({
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
								const i = s().gild,
									o = {
										gildingTypeId: i.selectedAward.id,
										isAnonymous: i.isAnonymous,
										isGildFunded: !1,
										message: Object(q.b)(i.message),
										nodeId: e
									},
									c = Object(Q.a)(e) ? R : N,
									u = await c(n(), {
										input: o
									}, r);
								let l = !1,
									b = null,
									m = null;
								if (u.ok) {
									const e = u.body;
									l = e.data.gild.ok, b = e.data.gild.fieldErrors, m = e.data.gild.errors
								}
								if (l) {
									const r = u.body,
										{
											gild: d
										} = r.data,
										s = Object(Q.a)(e) ? u.body.data.gild.postInfo : u.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: n
										} = s;
									await t(te({
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
									await t(V(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || d.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(V(t))
					} finally {
						Object(K.b)(K.a.GildingFlow)
					}
				}, H = Object(s.a)(M.u), Z = Object(s.a)(M.q), $ = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(H())
					}, 2e3)
				}, X = Object(s.a)(M.p), V = e => async (t, r) => {
					await t(X(e)), t(Object(u.f)({
						kind: p.b.Error,
						duration: u.a,
						text: e
					}))
				}, W = Object(s.a)(M.s), ee = (e, t) => {
					const {
						id: r
					} = t, d = Object(Q.a)(r) ? Object(x.G)(e, {
						postId: r
					}) : Object(h.c)(e, {
						commentId: r
					}), s = Object(_.m)(e), a = e.gild, {
						isAnonymous: n
					} = a, i = !n && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, o = d ? d.author : void 0, c = Object(G.O)(e, {
						thingId: r
					});
					return W({
						...t,
						gilder: i,
						gildee: o,
						subredditId: c && c.id
					})
				}, te = e => async (t, r) => {
					const s = r(),
						{
							awardId: l,
							id: b
						} = e,
						w = Object(A.a)(s, l),
						g = e.awardKarmaReceived,
						f = Object(_.m)(s),
						h = Object(y.b)(s) || Object(K.d)(K.a.GildingFlow, !1);
					if (Object(y.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(I.a)(s, {
								award: w,
								minSize: 32,
								postOrCommentId: b
							});
						t.awardId = l, t.awardIcon = r, t.awardName = w.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (w.awardType === m.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(G.O)(s, {
								thingId: b
							}),
							r = t && Object(G.F)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - w.coinPrice)
					}
					if (t(ee(s, e)), f) {
						const r = {
								...B.a,
								...f.karma
							},
							d = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(v.e)(f);
						t(Object(c.f)({
							coins: e.coins
						})), t(Object(c.h)({
							userName: s,
							karma: {
								...r,
								fromAwardsReceived: d
							}
						}))
					}(s.posts.instances[b] || []).forEach(r => {
						t(ee(s, {
							...e,
							id: r
						}))
					});
					const x = Object(Q.a)(b) ? d.fbt._("Success! You have given this post the {awardName} Award", [d.fbt._param("awardName", w.name)], {
							hk: "1Ndi4Z"
						}) : d.fbt._("Success! You have given this comment the {awardName} Award", [d.fbt._param("awardName", w.name)], {
							hk: "2sIK9Y"
						}),
						L = w.coinPrice;
					Object(F.a)(Object(D.viewKarmaSuccessEvent)({
						award: w,
						awarderKarmaEarned: g,
						awardeeKarmaEarned: 0,
						numberCoins: L,
						thingId: b
					})(s)), t(Object(o.g)(j.a.GOLD_GILD_MODAL));
					const C = Object(I.a)(s, {
						award: w,
						minSize: 64,
						postOrCommentId: b
					});
					t(Object(u.f)({
						customIconAsset: C,
						kind: p.b.SuccessAward,
						text: g > 0 ? O({
							awarderKarmaReceived: g
						}) : x
					})), setTimeout(() => {
						const e = Object(T.a)(l, b),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10), await t(Object(i.b)({
						correlationId: h,
						forceLoad: !0
					}));
					const S = Object(G.O)(s, {
						thingId: b
					});
					S && Object(k.a)(s, {
						subredditId: S.id
					}) && t(Object(J.a)(S.id, S.name, {
						force: !0
					})), 0 === L && S && t(Object(n.a)(S.id, b, void 0, !0))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.8140716a6633cd2766df.js.map