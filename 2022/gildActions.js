// https://www.redditstatic.com/desktop2x/gildActions.2c7f36e55d7305115c3c.js
// Retrieved at 5/17/2022, 10:30:07 AM by Reddit Dataminer v1.0.0
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
				n = s("./src/redditGQL/operations/SubredditCoins.json");
			var c = s("./src/reddit/featureFlags/subredditPoints.ts"),
				o = s("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: d.a
				}
			});
			const l = Object(a.a)(o.nb),
				u = (e, t, s) => async (r, d, a) => {
					let {
						gqlContext: o
					} = a;
					var u, b;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== d().features.econPurchase.subredditLockedCoins[e] && !(null == s ? void 0 : s.force)) return;
					const m = await ((e, t) => Object(i.a)(e, {
						...n,
						variables: {
							subreddit: t
						}
					}))(o(), e);
					if (m.ok) {
						const t = m.body;
						r(l({
							subredditId: e,
							amount: (null === (b = null === (u = t.data.subredditInfoById) || void 0 === u ? void 0 : u.userCoinsInSubreddit) || void 0 === b ? void 0 : b.amount) || 0
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
				return $
			})), s.d(t, "triggerLoader", (function() {
				return X
			})), s.d(t, "gildPending", (function() {
				return W
			})), s.d(t, "gildFailed", (function() {
				return te
			})), s.d(t, "gildSuccessful", (function() {
				return de
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/postParentMessage/index.ts"),
				i = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				n = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
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
				v = s("./src/reddit/models/User/index.ts"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/communityAwards.ts"),
				x = s("./src/reddit/selectors/gild.ts"),
				_ = s("./src/reddit/selectors/gold/awardIcon.ts"),
				y = s("./src/reddit/selectors/gold/econPurchase.ts"),
				C = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/selectors/subreddit.ts"),
				L = s("./src/reddit/selectors/user.ts"),
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
				$ = (e, t) => async (s, d, a) => {
					let {
						gqlContext: i
					} = a;
					const n = d(),
						c = n.gild,
						o = Object(P.G)(n, {
							postId: e
						}),
						l = Object(F.a)(e) && !!o && Object(h.p)(o),
						{
							isOldReddit: u
						} = t;
					s(W());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(M.d)(c.message, c.selectedAward, l),
								nodeId: e
							},
							d = Object(F.a)(e) ? D : E,
							a = await d(i(), {
								input: t
							}, u);
						let n = !1,
							o = null,
							b = null;
						if (a.ok) {
							const e = a.body;
							n = e.data.gild.ok, o = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (n) {
							const t = a.body,
								{
									gild: r
								} = t.data,
								d = Object(F.a)(e) ? a.body.data.gild.postInfo : a.body.data.gild.comment,
								{
									awardings: i,
									treatmentTags: n
								} = d;
							await s(de({
								awardId: c.selectedAward.id,
								awardings: i,
								awardKarmaReceived: r.awardKarmaReceived,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: n
							}))
						} else {
							const e = o && o[0] && o[0].message,
								t = b && b[0] && b[0].message,
								d = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(te(d))
						}
					} catch (b) {
						const e = b,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(te(t))
					} finally {
						Object(q.b)(q.a.GildingFlow)
					}
				}, X = Object(d.a)(Y.u), V = Object(d.a)(Y.q), W = () => async (e, t) => {
					e(V()), window.setTimeout(() => {
						t().gild.api.pending && e(X())
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
					}) : Object(k.b)(e, {
						commentId: s
					}), d = Object(L.k)(e), a = e.gild, {
						isAnonymous: i
					} = a, n = !i && d && (d.username || d.displayText) ? d.username || d.displayText : void 0, c = r ? r.author : void 0, o = Object(G.K)(e, {
						thingId: s
					});
					return se({
						...t,
						gilder: n,
						gildee: c,
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
						w = Object(L.k)(d),
						k = Object(x.b)(d) || Object(q.d)(q.a.GildingFlow, !1);
					if (Object(x.g)(d)) {
						const e = "success.gild",
							t = {},
							s = Object(_.a)(d, {
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
						const t = Object(G.K)(d, {
								thingId: b
							}),
							s = t && Object(G.C)(d, {
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
							r = Object(v.e)(w);
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
					const N = Object(_.a)(d, {
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
					await t(Object(c.b)({
						correlationId: k,
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
							setTimeout(() => t(Object(n.e)({
								correlationId: k,
								packageId: e[0].mobileId
							})), a ? s : r)
						}
					}
					const E = Object(G.K)(d, {
						thingId: b
					});
					if (E && Object(y.a)(d, {
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
						r && t(Object(n.b)({
							correlationId: k,
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
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => `awardItem__${t}-${e}`
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
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < r ? 0 : e.coinPrice < d ? 50 : 100 : 2048
				},
				i = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const r = a(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				d = s("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
			const a = (e, t) => {
				let {
					subredditId: s
				} = t;
				return s && e.features.econPurchase.subredditLockedCoins[s] || 0
			}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.2c7f36e55d7305115c3c.js.map