// https://www.redditstatic.com/desktop2x/gildActions.c023484b2b1a21b929a9.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/SubredditCoins.json");
			var n = s("./src/reddit/featureFlags/subredditPoints.ts"),
				o = s("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: d.a
				}
			});
			const l = Object(a.a)(o.nb),
				u = (e, t, s) => async (r, d, {
					gqlContext: a
				}) => {
					var o, u;
					if (!n.a.has(t.toLowerCase())) return;
					if (void 0 !== d().features.econPurchase.subredditLockedCoins[e] && !(null == s ? void 0 : s.force)) return;
					const b = await ((e, t) => Object(i.a)(e, {
						...c,
						variables: {
							subreddit: t
						}
					}))(a(), e);
					if (b.ok) {
						const t = b.body;
						r(l({
							subredditId: e,
							amount: (null === (u = null === (o = t.data.subredditInfoById) || void 0 === o ? void 0 : o.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return J
			})), s.d(t, "updateMessage", (function() {
				return Z
			})), s.d(t, "gildGqlRequested", (function() {
				return X
			})), s.d(t, "triggerLoader", (function() {
				return V
			})), s.d(t, "gildPending", (function() {
				return $
			})), s.d(t, "gildFailed", (function() {
				return te
			})), s.d(t, "gildSuccessful", (function() {
				return de
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/postParentMessage/index.ts"),
				i = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				c = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				n = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./node_modules/react/index.js"),
				b = s.n(u),
				m = s("./src/reddit/models/Gold/Award.ts"),
				g = s("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = s.n(g);
			const {
				fbt: w
			} = s("./node_modules/fbt/lib/FbtPublic.js"), O = e => w._("Sent! You earned {=awarder karma}", [w._param("=awarder karma", b.a.createElement("a", {
				className: f.a.karmaLink,
				href: m.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, w._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [w._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var j = s("./src/reddit/constants/modals.ts"),
				p = s("./src/reddit/models/Gold/Coins/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/models/User/index.ts"),
				v = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/gild.ts"),
				y = s("./src/reddit/selectors/gold/awardIcon.ts"),
				_ = s("./src/reddit/selectors/gold/econPurchase.ts"),
				C = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/subreddit.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/makeGqlRequest/index.ts"),
				K = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				N = s("./src/redditGQL/operations/GildComment.json"),
				R = s("./src/redditGQL/operations/GildPost.json");
			const D = (e, t, s) => Object(S.a)(e, {
					...R,
					variables: t
				}, {
					query: s ? {} : Object(K.b)()
				}),
				E = (e, t, s) => Object(S.a)(e, {
					...N,
					variables: t
				}, {
					query: s ? {} : Object(K.b)()
				});
			var T = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				M = s("./src/reddit/helpers/awards/message.ts"),
				q = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/isPost.ts"),
				Q = s("./src/reddit/helpers/trackers/gild.ts"),
				z = s("./src/telemetry/index.ts"),
				B = s("./src/reddit/endpoints/profile/info.ts"),
				U = s("./src/reddit/actions/gold/awardKarma.ts"),
				Y = s("./src/reddit/actions/gold/constants.ts"),
				H = s("./src/reddit/actions/gold/econPurchase.ts");
			const J = Object(d.a)(Y.r),
				Z = Object(d.a)(Y.v),
				X = (e, t) => async (s, d, {
					gqlContext: a
				}) => {
					const i = d().gild,
						{
							isOldReddit: c,
							isLivestream: n
						} = t;
					s($());
					try {
						const t = {
								gildingTypeId: i.selectedAward.id,
								isAnonymous: i.isAnonymous,
								isGildFunded: !1,
								message: Object(M.d)(i.message, i.selectedAward, n),
								nodeId: e
							},
							d = Object(F.a)(e) ? D : E,
							o = await d(a(), {
								input: t
							}, c);
						let l = !1,
							u = null,
							b = null;
						if (o.ok) {
							const e = o.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (l) {
							const t = o.body,
								{
									gild: r
								} = t.data,
								d = Object(F.a)(e) ? o.body.data.gild.postInfo : o.body.data.gild.comment,
								{
									awardings: a,
									treatmentTags: c
								} = d;
							await s(de({
								awardId: i.selectedAward.id,
								awardings: a,
								awardKarmaReceived: r.awardKarmaReceived,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = b && b[0] && b[0].message,
								d = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(te(d))
						}
					} catch (o) {
						const e = o,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(te(t))
					} finally {
						Object(q.b)(q.a.GildingFlow)
					}
				}, V = Object(d.a)(Y.u), W = Object(d.a)(Y.q), $ = () => async (e, t) => {
					e(W()), window.setTimeout(() => {
						t().gild.api.pending && e(V())
					}, 2e3)
				}, ee = Object(d.a)(Y.p), te = e => async (t, s) => {
					await t(ee(e)), t(Object(l.f)({
						kind: I.b.Error,
						duration: l.a,
						text: e
					}))
				}, se = Object(d.a)(Y.s), re = (e, t) => {
					const {
						id: s
					} = t, r = Object(F.a)(s) ? Object(P.G)(e, {
						postId: s
					}) : Object(v.b)(e, {
						commentId: s
					}), d = Object(G.k)(e), a = e.gild, {
						isAnonymous: i
					} = a, c = !i && d && (d.username || d.displayText) ? d.username || d.displayText : void 0, n = r ? r.author : void 0, o = Object(L.I)(e, {
						thingId: s
					});
					return se({
						...t,
						gilder: c,
						gildee: n,
						subredditId: o && o.id
					})
				}, de = e => async (t, s) => {
					const d = s(),
						{
							awardId: u,
							id: b
						} = e,
						g = Object(A.a)(d, u),
						f = e.awardKarmaReceived,
						w = Object(G.k)(d),
						v = Object(x.b)(d) || Object(q.e)(q.a.GildingFlow, !1);
					if (Object(x.g)(d)) {
						const e = "success.gild",
							t = {},
							s = Object(y.a)(d, {
								award: g,
								minSize: 32,
								postOrCommentId: b
							});
						t.awardId = u, t.awardIcon = s, t.awardName = g.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (g.awardType === m.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(L.I)(d, {
								thingId: b
							}),
							s = t && Object(L.A)(d, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - g.coinPrice)
					}
					if (t(re(d, e)), w) {
						const e = {
								...B.a,
								...w.karma
							},
							s = e.fromAwardsReceived + f,
							r = Object(k.e)(w);
						t(Object(U.a)({
							userName: r,
							karma: {
								...e,
								fromAwardsReceived: s
							}
						}))
					}(d.posts.instances[b] || []).forEach(s => {
						t(re(d, {
							...e,
							id: s
						}))
					});
					const S = Object(F.a)(b) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", g.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", g.name)], {
							hk: "2sIK9Y"
						}),
						K = g.coinPrice;
					Object(z.a)(Object(Q.viewKarmaSuccessEvent)({
						award: g,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: K,
						thingId: b
					})(d)), t(Object(o.g)(j.a.GOLD_GILD_MODAL));
					const N = Object(y.a)(d, {
						award: g,
						minSize: 64,
						postOrCommentId: b
					});
					t(Object(l.f)({
						customIconAsset: N,
						kind: I.b.SuccessAward,
						text: f > 0 ? O({
							awarderKarmaReceived: f
						}) : S
					})), setTimeout(() => {
						const e = Object(T.a)(u, b),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const R = Date.now();
					await t(Object(n.b)({
						correlationId: v,
						forceLoad: !0
					}));
					const D = Date.now() - R;
					if (K > 0) {
						const e = Object(C.f)(s()).filter(e => p.a.has(e.dealInfo.type));
						if (e.length) {
							const s = Math.max(900 - D, 10),
								r = Math.max(300 - D, 10),
								a = Object(F.a)(b) && Object(h.p)(Object(P.G)(d, {
									postId: b
								}));
							setTimeout(() => t(Object(c.e)({
								correlationId: v,
								packageId: e[0].mobileId
							})), a ? s : r)
						}
					}
					const E = Object(L.I)(d, {
						thingId: b
					});
					if (E && Object(_.a)(d, {
							subredditId: E.id
						}) && t(Object(H.a)(E.id, E.name, {
							force: !0
						})), 0 === K && E) {
						t(Object(i.a)(E.id, b, void 0, !0));
						const e = 399,
							r = Object(C.d)(s()).reduce((t, s) => {
								const r = Math.abs(s.pennies - e);
								return (!t || r < t.priceDelta) && (t = {
									packageId: s.mobileId,
									priceDelta: r
								}), t
							}, null);
						r && t(Object(c.b)({
							correlationId: v,
							packageId: r.packageId
						}))
					}
				}
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, s) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const r = 500,
				d = 1800,
				a = (e, t = !1) => t ? e.coinPrice < r ? 0 : e.coinPrice < d ? 50 : 100 : 2048,
				i = (e, t, s = !1) => {
					const r = a(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				d = s("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var i = (e = a, t) => {
				switch (t.type) {
					case d.nb: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: s.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				subredditLockedCoins: i
			})
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(r.a)({
				features: {
					econPurchase: d.a
				}
			});
			const a = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		},
		"./src/redditGQL/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/redditGQL/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.c023484b2b1a21b929a9.js.map