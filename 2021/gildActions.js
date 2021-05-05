// https://www.redditstatic.com/desktop2x/gildActions.23ec8682dda010fc707b.js
// Retrieved at 5/5/2021, 12:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/graphql/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/econPurchase/index.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/graphql/operations/SubredditCoins.json"),
				o = s("./src/lib/makeGqlRequest/index.ts");
			var i = s("./src/reddit/featureFlags/subredditPoints.ts"),
				c = s("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: a.a
				}
			});
			const l = Object(d.a)(c.lb),
				u = (e, t, s) => async (r, a, {
					gqlContext: d
				}) => {
					var c, u;
					if (!i.a.has(t.toLowerCase())) return;
					if (void 0 !== a().features.econPurchase.subredditLockedCoins[e] && !(null == s ? void 0 : s.force)) return;
					const m = await ((e, t) => Object(o.a)(e, {
						...n,
						variables: {
							subreddit: t
						}
					}))(d(), e);
					if (m.ok) {
						const t = m.body;
						r(l({
							subredditId: e,
							amount: (null === (u = null === (c = t.data.subredditInfoById) || void 0 === c ? void 0 : c.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return B
			})), s.d(t, "updateMessage", (function() {
				return Z
			})), s.d(t, "gildGqlRequested", (function() {
				return H
			})), s.d(t, "triggerLoader", (function() {
				return Q
			})), s.d(t, "gildPending", (function() {
				return $
			})), s.d(t, "gildFailed", (function() {
				return ee
			})), s.d(t, "gildSuccessful", (function() {
				return re
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/postParentMessage/index.ts"),
				n = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				o = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				b = s("./src/reddit/models/Gold/Award.ts"),
				h = s("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				w = s.n(h);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), f = e => p._("Sent! You earned {=awarder karma}", [p._param("=awarder karma", m.a.createElement("a", {
				className: w.a.karmaLink,
				href: b.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, p._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [p._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var g = s("./src/reddit/constants/modals.ts"),
				j = s("./src/reddit/models/Gold/Coins/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				_ = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/gild.ts"),
				A = s("./src/reddit/selectors/gold/awardIcon.ts"),
				x = s("./src/reddit/selectors/gold/econPurchase.ts"),
				C = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				G = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				R = s("./src/graphql/operations/GildComment.json"),
				q = s("./src/graphql/operations/GildPost.json"),
				T = s("./src/lib/makeGqlRequest/index.ts"),
				K = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const L = (e, t, s) => Object(T.a)(e, {
					...q,
					variables: t
				}, {
					query: s ? {} : Object(K.b)()
				}),
				D = (e, t, s) => Object(T.a)(e, {
					...R,
					variables: t
				}, {
					query: s ? {} : Object(K.b)()
				});
			var E = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				F = s("./src/reddit/helpers/awards/message.ts"),
				M = s("./src/reddit/helpers/correlationIdTracker.ts"),
				N = s("./src/reddit/helpers/isPost.ts"),
				Y = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/telemetry/index.ts"),
				z = s("./src/reddit/actions/gold/awardKarma.ts"),
				J = s("./src/reddit/actions/gold/constants.ts"),
				U = s("./src/reddit/actions/gold/econPurchase.ts");
			const B = Object(a.a)(J.s),
				Z = Object(a.a)(J.w),
				H = (e, t) => async (s, a, {
					gqlContext: d
				}) => {
					const n = a().gild,
						{
							isOldReddit: o,
							isLivestream: i
						} = t;
					s($());
					try {
						const t = {
								gildingTypeId: n.selectedAward.id,
								isAnonymous: n.isAnonymous,
								isGildFunded: !1,
								message: Object(F.d)(n.message, n.selectedAward, i),
								nodeId: e
							},
							a = Object(N.a)(e) ? L : D,
							c = await a(d(), {
								input: t
							}, o);
						let l = !1,
							u = null,
							m = null;
						if (c.ok) {
							const e = c.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, m = e.data.gild.errors
						}
						if (l) {
							const t = c.body,
								{
									gild: r
								} = t.data,
								a = Object(N.a)(e) ? c.body.data.gild.postInfo : c.body.data.gild.comment,
								{
									awardings: d,
									treatmentTags: o
								} = a;
							await s(re({
								awardId: n.selectedAward.id,
								awardings: d,
								awardKarmaReceived: r.awardKarmaReceived,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: o
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = m && m[0] && m[0].message,
								a = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(ee(a))
						}
					} catch (c) {
						const e = c,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(ee(t))
					} finally {
						Object(M.b)(M.a.GildingFlow)
					}
				}, Q = Object(a.a)(J.v), V = Object(a.a)(J.r), $ = () => async (e, t) => {
					e(V()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, X = Object(a.a)(J.q), ee = e => async (t, s) => {
					await t(X(e)), t(Object(l.f)({
						kind: y.b.Error,
						duration: l.a,
						text: e
					}))
				}, te = Object(a.a)(J.t), se = (e, t) => {
					const {
						id: s
					} = t, r = Object(N.a)(s) ? Object(P.F)(e, {
						postId: s
					}) : Object(k.a)(e, {
						commentId: s
					}), a = Object(S.i)(e), d = e.gild, {
						isAnonymous: n
					} = d, o = !n && a && (a.username || a.displayText) ? a.username || a.displayText : void 0, i = r ? r.author : void 0, c = Object(G.J)(e, {
						thingId: s
					});
					return te({
						...t,
						gilder: o,
						gildee: i,
						subredditId: c && c.id
					})
				}, re = e => async (t, s) => {
					const a = s(),
						{
							awardId: u,
							id: m
						} = e,
						h = Object(_.a)(a, u),
						w = e.awardKarmaReceived,
						p = Object(S.i)(a),
						k = Object(I.b)(a) || Object(M.d)(M.a.GildingFlow, !1);
					if (Object(I.g)(a)) {
						const e = "success.gild",
							t = {},
							s = Object(A.a)(a, {
								award: h,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = s, Object(d.a)({
							type: e,
							data: t
						})
					}
					if (h.awardType === b.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(G.J)(a, {
								thingId: m
							}),
							s = t && Object(G.C)(a, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - h.coinPrice)
					}
					if (t(se(a, e)), p) {
						const e = p.awarderKarma + w,
							s = Object(v.e)(p);
						t(Object(z.a)({
							userName: s,
							awarderKarma: e
						}))
					}(a.posts.instances[m] || []).forEach(s => {
						t(se(a, {
							...e,
							id: s
						}))
					});
					const R = Object(N.a)(m) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", h.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", h.name)], {
							hk: "2sIK9Y"
						}),
						q = h.coinPrice;
					Object(W.a)(Object(Y.viewKarmaSuccessEvent)({
						award: h,
						awarderKarmaEarned: w,
						awardeeKarmaEarned: 0,
						numberCoins: q,
						thingId: m
					})(a)), t(Object(c.g)(g.a.GOLD_GILD_MODAL));
					const T = Object(A.a)(a, {
						award: h,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: T,
						kind: y.b.SuccessAward,
						text: w > 0 ? f({
							awarderKarmaReceived: w
						}) : R
					})), setTimeout(() => {
						const e = Object(E.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const K = Date.now();
					await t(Object(i.b)(k));
					const L = Date.now() - K;
					if (q > 0) {
						const e = Object(C.f)(s()).filter(e => j.a.has(e.dealInfo.type));
						if (e.length) {
							const s = Math.max(900 - L, 10),
								r = Math.max(300 - L, 10),
								d = Object(N.a)(m) && Object(O.o)(Object(P.F)(a, {
									postId: m
								}));
							setTimeout(() => t(Object(o.e)({
								correlationId: k,
								packageId: e[0].mobileId
							})), d ? s : r)
						}
					}
					const D = Object(G.J)(a, {
						thingId: m
					});
					if (D && Object(x.a)(a, {
							subredditId: D.id
						}) && t(Object(U.a)(D.id, D.name, {
							force: !0
						})), 0 === q && D) {
						t(Object(n.a)(D.id, m, void 0, !0));
						const e = 399,
							r = Object(C.d)(s()).reduce((t, s) => {
								const r = Math.abs(s.pennies - e);
								return (!t || r < t.priceDelta) && (t = {
									packageId: s.mobileId,
									priceDelta: r
								}), t
							}, null);
						r && t(Object(o.b)({
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
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return n
			}));
			const r = 500,
				a = 1800,
				d = (e, t = !1) => t ? e.coinPrice < r ? 0 : e.coinPrice < a ? 50 : 100 : 2048,
				n = (e, t, s = !1) => {
					const r = d(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const a = new Set(["low_coin_upsell"]),
				d = new Set(["new_purchaser", "repeat_purchaser"]),
				n = [{
					prompt: () => r.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => r.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => r.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => r.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => r.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => r.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => r.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => r.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => r.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => r.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => r.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => r.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => r.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => r.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => r.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => r.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				a = s("./src/reddit/actions/gold/constants.ts");
			const d = {};
			var n = (e = d, t) => {
				switch (t.type) {
					case a.lb: {
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
				subredditLockedCoins: n
			})
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(r.a)({
				features: {
					econPurchase: a.a
				}
			});
			const d = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/gildActions.23ec8682dda010fc707b.js.map