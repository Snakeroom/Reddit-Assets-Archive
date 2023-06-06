// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.21cfb93e3e952294c50e.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal", "gildActions"], {
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			const r = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var r = a("./src/lib/initializeClient/installReducer.ts"),
				s = a("./src/reddit/reducers/features/econPurchase/index.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/makeGqlRequest/index.ts"),
				o = a("./src/redditGQL/operations/SubredditCoins.json");
			var d = a("./src/reddit/featureFlags/subredditPoints.ts"),
				i = a("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: s.a
				}
			});
			const l = Object(n.a)(i.lb),
				u = (e, t, a) => async (r, s, n) => {
					let {
						gqlContext: i
					} = n;
					var u, m;
					if (!d.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == a ? void 0 : a.force)) return;
					const p = await ((e, t) => Object(c.a)(e, {
						...o,
						variables: {
							subreddit: t
						}
					}))(i(), e);
					if (p.ok) {
						const t = p.body;
						r(l({
							subredditId: e,
							amount: (null === (m = null === (u = t.data.subredditInfoById) || void 0 === u ? void 0 : u.userCoinsInSubreddit) || void 0 === m ? void 0 : m.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "setIsAnonymous", (function() {
				return H
			})), a.d(t, "updateMessage", (function() {
				return U
			})), a.d(t, "gildGqlRequested", (function() {
				return J
			})), a.d(t, "triggerLoader", (function() {
				return W
			})), a.d(t, "gildPending", (function() {
				return Y
			})), a.d(t, "gildFailed", (function() {
				return X
			})), a.d(t, "gildSuccessful", (function() {
				return te
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/makeActionCreator/index.ts"),
				n = a("./src/lib/postParentMessage/index.ts"),
				c = a("./src/reddit/actions/gold/communityAwards/index.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = a("./src/reddit/actions/modal.ts"),
				i = a("./src/reddit/actions/profile/index.ts"),
				l = a("./src/reddit/actions/toaster.ts"),
				u = a("./node_modules/react/index.js"),
				m = a.n(u),
				p = a("./src/reddit/models/Gold/Award.ts"),
				b = a("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				g = a.n(b);
			const {
				fbt: h
			} = a("./node_modules/fbt/lib/FbtPublic.js"), j = e => h._("Sent! You earned {=awarder karma}", [h._param("=awarder karma", m.a.createElement("a", {
				className: g.a.karmaLink,
				href: p.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, h._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [h._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var f = a("./src/reddit/constants/modals.ts"),
				O = a("./src/reddit/models/Toast/index.ts"),
				w = a("./src/reddit/models/User/index.ts"),
				y = a("./src/reddit/selectors/commentSelector.ts"),
				P = a("./src/reddit/selectors/communityAwards.ts"),
				C = a("./src/reddit/selectors/gild.ts"),
				k = a("./src/reddit/selectors/gold/awardIcon.ts"),
				v = a("./src/reddit/selectors/gold/econPurchase.ts"),
				x = a("./src/reddit/selectors/posts.ts"),
				E = a("./src/reddit/selectors/subreddit.ts"),
				I = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/reddit/endpoints/awards/index.ts"),
				A = a("./src/lib/makeGqlRequest/index.ts"),
				M = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				N = a("./src/redditGQL/operations/GildComment.json"),
				T = a("./src/redditGQL/operations/GildPost.json");
			const G = (e, t, a) => Object(A.a)(e, {
					...T,
					variables: t
				}, {
					query: a ? {} : Object(M.b)()
				}),
				S = (e, t, a) => Object(A.a)(e, {
					...N,
					variables: t
				}, {
					query: a ? {} : Object(M.b)()
				});
			var B = a("./src/reddit/helpers/awards/getAwardItemId.ts"),
				R = a("./src/reddit/helpers/awards/message.ts"),
				L = a("./src/reddit/helpers/correlationIdTracker.ts"),
				F = a("./src/reddit/helpers/isPost.ts"),
				D = a("./src/reddit/helpers/trackers/gild.ts"),
				q = a("./src/telemetry/index.ts"),
				K = a("./src/reddit/endpoints/profile/info.ts"),
				Q = a("./src/reddit/actions/gold/constants.ts"),
				z = a("./src/reddit/actions/gold/econPurchase.ts");
			const H = Object(s.a)(Q.r),
				U = Object(s.a)(Q.v),
				J = (e, t) => async (a, s) => {
					const n = s(),
						c = !Object(F.a)(e) && Object(y.g)(n, {
							commentId: e
						});
					a(Y());
					try {
						c ? await a(((e, t) => {
							let {
								isOldReddit: a
							} = t;
							return async (t, r, s) => {
								let {
									gqlContext: n
								} = s;
								const c = r(),
									{
										selectedAward: o,
										message: d,
										isAnonymous: i
									} = c.gild,
									l = Object(C.b)(c) || Object(L.d)(L.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(_.b)(n(), {
										targetId: e,
										awardId: o.id,
										isAnonymous: i,
										nonce: l,
										message: Object(R.b)(d)
									}, a),
									m = await Object(_.a)(n(), {
										thingId: e
									}, a);
								await t(te({
									id: e,
									awardId: o.id,
									awardings: m.awardings,
									awardKarmaReceived: u || 0,
									coins: m.coins,
									treatmentTags: m.treatmentTags
								}))
							}
						})(e, t)) : await a(((e, t) => {
							let {
								isOldReddit: a
							} = t;
							return async (t, s, n) => {
								let {
									gqlContext: c
								} = n;
								const o = s().gild,
									d = {
										gildingTypeId: o.selectedAward.id,
										isAnonymous: o.isAnonymous,
										isGildFunded: !1,
										message: Object(R.b)(o.message),
										nodeId: e
									},
									i = Object(F.a)(e) ? G : S,
									l = await i(c(), {
										input: d
									}, a);
								let u = !1,
									m = null,
									p = null;
								if (l.ok) {
									const e = l.body;
									u = e.data.gild.ok, m = e.data.gild.fieldErrors, p = e.data.gild.errors
								}
								if (u) {
									const a = l.body,
										{
											gild: r
										} = a.data,
										s = Object(F.a)(e) ? l.body.data.gild.postInfo : l.body.data.gild.comment,
										{
											awardings: n,
											treatmentTags: c
										} = s;
									await t(te({
										awardId: o.selectedAward.id,
										awardings: n,
										awardKarmaReceived: r.awardKarmaReceived,
										coins: r.coins,
										id: e,
										subredditCoins: r.subredditCoins,
										treatmentTags: c
									}))
								} else {
									const e = null == m ? void 0 : m[0].message,
										a = null == p ? void 0 : p[0].message,
										s = e || a || r.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(X(s))
								}
							}
						})(e, t))
					} catch (o) {
						const e = o,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await a(X(t))
					} finally {
						Object(L.b)(L.a.GildingFlow)
					}
				}, W = Object(s.a)(Q.u), Z = Object(s.a)(Q.q), Y = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(W())
					}, 2e3)
				}, V = Object(s.a)(Q.p), X = e => async (t, a) => {
					await t(V(e)), t(Object(l.f)({
						kind: O.b.Error,
						duration: l.a,
						text: e
					}))
				}, $ = Object(s.a)(Q.s), ee = (e, t) => {
					const {
						id: a
					} = t, r = Object(F.a)(a) ? Object(x.F)(e, {
						postId: a
					}) : Object(y.c)(e, {
						commentId: a
					}), s = Object(I.m)(e), n = e.gild, {
						isAnonymous: c
					} = n, o = !c && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, d = r ? r.author : void 0, i = Object(E.O)(e, {
						thingId: a
					});
					return $({
						...t,
						gilder: o,
						gildee: d,
						subredditId: i && i.id
					})
				}, te = e => async (t, a) => {
					const s = a(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(P.a)(s, u),
						g = e.awardKarmaReceived,
						h = Object(I.m)(s),
						y = Object(C.b)(s) || Object(L.d)(L.a.GildingFlow, !1);
					if (Object(C.g)(s)) {
						const e = "success.gild",
							t = {},
							a = Object(k.a)(s, {
								award: b,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = a, t.awardName = b.name, Object(n.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === p.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(E.O)(s, {
								thingId: m
							}),
							a = t && Object(E.F)(s, {
								subredditName: t.name
							});
						a && (e.subredditCoins = a - b.coinPrice)
					}
					if (t(ee(s, e)), h) {
						const a = {
								...K.a,
								...h.karma
							},
							r = a.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(w.e)(h);
						t(Object(i.f)({
							coins: e.coins
						})), t(Object(i.h)({
							userName: s,
							karma: {
								...a,
								fromAwardsReceived: r
							}
						}))
					}(s.posts.instances[m] || []).forEach(a => {
						t(ee(s, {
							...e,
							id: a
						}))
					});
					const x = Object(F.a)(m) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						_ = b.coinPrice;
					Object(q.a)(Object(D.viewKarmaSuccessEvent)({
						award: b,
						awarderKarmaEarned: g,
						awardeeKarmaEarned: 0,
						numberCoins: _,
						thingId: m
					})(s)), t(Object(d.g)(f.a.GOLD_GILD_MODAL));
					const A = Object(k.a)(s, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: A,
						kind: O.b.SuccessAward,
						text: g > 0 ? j({
							awarderKarmaReceived: g
						}) : x
					})), setTimeout(() => {
						const e = Object(B.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10), await t(Object(o.b)({
						correlationId: y,
						forceLoad: !0
					}));
					const M = Object(E.O)(s, {
						thingId: m
					});
					M && Object(v.a)(s, {
						subredditId: M.id
					}) && t(Object(z.a)(M.id, M.name, {
						force: !0
					})), 0 === _ && M && t(Object(c.a)(M.id, m, void 0, !0))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return v
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "c", (function() {
				return E
			})), a.d(t, "h", (function() {
				return I
			})), a.d(t, "g", (function() {
				return _
			})), a.d(t, "d", (function() {
				return A
			})), a.d(t, "e", (function() {
				return M
			})), a.d(t, "f", (function() {
				return N
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/formatApiError/index.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/constants/modals.ts"),
				d = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = a("./src/reddit/actions/modal.ts"),
				u = a("./src/reddit/actions/toaster.ts"),
				m = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = a("./src/reddit/endpoints/gold/purchase.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = a("./src/reddit/models/Gold/Award.ts"),
				j = a("./src/reddit/models/Gold/ProductOffer.ts"),
				f = a("./src/reddit/models/Toast/index.ts"),
				O = a("./src/reddit/selectors/experiments/econ/index.ts"),
				w = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const C = Object(n.a)(P.u),
				k = Object(n.a)(P.c),
				v = e => async (t, a) => {
					const r = a();
					Object(O.d)(r) || (t(C(e)), t(Object(l.h)(o.a.ECON_COIN_PURCHASE)))
				}, x = () => async (e, t) => {
					e(k()), e(Object(l.g)(o.a.ECON_COIN_PURCHASE))
				}, E = (e, t, a) => async (s, n) => {
					await s(Object(i.c)());
					const c = n(),
						o = Object(w.m)(c, e);
					if (o) s(v({
						correlationId: a,
						packageId: o,
						thingId: t
					}));
					else {
						const e = Object(w.k)(c),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: f.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, I = (e, t, a) => async (n, c, o) => {
					let {
						apiContext: i
					} = o;
					const l = c(),
						{
							coins: u,
							pennies: m
						} = a,
						g = Object(y.s)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let h, f;
					n(Object(d.stripeTokenPending)());
					const O = Object(y.z)(l);
					if (O || (h = await n(Object(d.validateAndCreateStripeToken)(e, t)), f = Object(y.w)(l), h)) try {
						const e = await Object(p.d)({
							coins: u,
							context: i(),
							correlationId: g,
							offerContext: Object(j.d)(a, !1),
							pennies: m,
							rememberCard: f,
							savedCardId: O || void 0,
							token: h
						});
						if (e.error) {
							const t = Object(s.a)(e.error, e.status);
							return void n(Object(d.stripeApiError)(t))
						}
						return n(Object(d.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (w) {
						const e = Object(s.a)(w);
						n(Object(d.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						n(Object(d.stripeApiError)(e))
					}
				}, _ = (e, t, n, c) => async (o, i, l) => {
					let {
						apiContext: u
					} = l;
					const m = i(),
						{
							coins: f,
							pennies: O
						} = n,
						w = Object(y.s)(m) || Object(b.d)(b.a.GoldPayment, !1);
					let P, C;
					o(Object(d.stripeTokenPending)());
					const k = Object(y.z)(m);
					if (k || (P = await o(Object(d.validateAndCreateStripeToken)(e, t)), C = Object(y.w)(m), P)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: i,
							selectedAward: l
						} = m.gild;
						if (!e || !l.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(d.stripeApiError)(e))
						}
						const y = l.id,
							v = {
								gildType: y,
								isAnonymous: t,
								message: i
							},
							E = await Object(p.c)({
								coins: f,
								context: u(),
								correlationId: w,
								gildParams: v,
								isOldReddit: c,
								offerContext: Object(j.d)(n, !0),
								pennies: O,
								rememberCard: C,
								savedCardId: k || void 0,
								thingId: e,
								token: P
							});
						if (E.error) {
							const e = Object(s.a)(E.error, E.status);
							return void o(Object(d.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(x()), o(Object(d.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: s,
								coins: n,
								treatment_tags: c
							} = E.body;
							return o(t({
								awardKarmaReceived: r || 0,
								awardId: y,
								awardings: s && s.length ? Object(g.a)(s).map(e => ({
									award: Object(h.i)(e),
									total: e.count
								})) : [],
								coins: n,
								id: e,
								treatmentTags: c
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (v) {
						const e = Object(s.a)(v);
						o(Object(d.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(d.stripeApiError)(e))
					}
				}, A = e => async (t, a, r) => {
					let {
						apiContext: n
					} = r;
					const o = Object(b.c)(b.a.GoldPayment),
						{
							coins: i,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: i,
							pennies: l,
							correlationId: o
						});
						if (e.error) {
							const a = Object(s.a)(e.error);
							return void t(Object(d.paypalApiError)(a))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (u) {
						c.c.captureException(u);
						const e = Object(s.a)(u);
						t(Object(d.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, r, n) => {
					let {
						apiContext: o
					} = n;
					const i = r(),
						l = Object(y.s)(i) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const r = await Object(m.c)({
							context: o(),
							offerContext: Object(j.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: p,
							correlationId: l
						});
						if (r.error) {
							const e = Object(s.a)(r.error);
							return void a(Object(d.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							a(Object(d.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (g) {
						c.c.captureException(g);
						const e = Object(s.a)(g);
						a(Object(d.paypalApiError)(e))
					}
				}, N = (e, t) => async (n, o, i) => {
					let {
						apiContext: l
					} = i;
					const u = o(),
						p = Object(y.s)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: f,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: o,
							message: i,
							selectedAward: w
						} = u.gild;
						if (!c || !w) return void n(Object(d.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = w.id,
							P = await Object(m.d)({
								context: l(),
								offerContext: Object(j.d)(t, !0),
								orderId: e,
								coins: f,
								pennies: O,
								thingId: c,
								awardId: y,
								message: i || "",
								isAnonymous: o,
								correlationId: p
							});
						if (P.error) {
							const e = Object(s.a)(P.error);
							n(Object(d.paypalApiError)(e))
						} else {
							n(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: s,
								treatment_tags: o
							} = P.body;
							n(Object(d.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: i
							} = await a.e("gildActions").then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							n(i({
								awardId: y,
								awardKarmaReceived: t || 0,
								awardings: Object(g.a)(e).map(e => ({
									award: Object(h.i)(e),
									total: e.count
								})),
								coins: r,
								id: c,
								subredditCoins: s,
								treatmentTags: o
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (w) {
						c.c.captureException(w);
						const e = Object(s.a)(w);
						n(Object(d.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "e", (function() {
				return O
			})), a.d(t, "d", (function() {
				return w
			})), a.d(t, "c", (function() {
				return y
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/formatApiError/index.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = a("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				i = a("./src/reddit/endpoints/gold/purchase.ts"),
				l = a("./src/reddit/helpers/correlationIdTracker.ts"),
				u = a("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = a("./src/reddit/models/Gold/Award.ts"),
				p = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(n.a)(b.v),
				h = Object(n.a)(b.d),
				j = Object(n.a)(b.w),
				f = (e, t, a) => async e => {
					e(j({
						thingId: t
					})), e(g({
						correlationId: a
					}))
				}, O = (e, t, n) => async (c, d, b) => {
					let {
						apiContext: g
					} = b;
					const j = d(),
						f = Object(l.c)(l.a.GoldPayment);
					let O, w;
					c(Object(o.stripeTokenPending)());
					const y = Object(p.z)(j);
					if (y || (O = await c(Object(o.validateAndCreateStripeToken)(e, t)), w = Object(p.w)(j), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: l
						} = j.gild;
						if (!e || !l.id) return void c(Object(o.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							b = l.pennyPrice;
						if (!b) return void c(Object(o.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const P = {
								gildType: p,
								isAnonymous: t,
								message: d
							},
							C = await Object(i.e)({
								context: g(),
								correlationId: f,
								gildParams: P,
								isOldReddit: n,
								pennies: b,
								rememberCard: w,
								savedCardId: y || void 0,
								thingId: e,
								token: O
							});
						if (C.error) {
							const e = Object(s.a)(C.error, C.status);
							return void c(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(h()), c(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: r,
								awarder_karma_received: s,
								coins: n,
								treatment_tags: d
							} = C.body;
							return void c(t({
								awardKarmaReceived: s || 0,
								awardId: p,
								awardings: r && r.length ? Object(u.a)(r).map(e => ({
									award: Object(m.i)(e),
									total: e.count
								})) : [],
								coins: n,
								id: e,
								treatmentTags: d
							}))
						}
					} catch (P) {
						const e = Object(s.a)(P);
						c(Object(o.stripeApiError)(e))
					} else c(Object(o.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, w = (e, t, a) => async (r, n, i) => {
					let {
						apiContext: u
					} = i;
					const m = Object(l.c)(l.a.GoldPayment);
					try {
						const n = await Object(d.b)({
							context: u(),
							awardId: e,
							pennies: t,
							thingId: a,
							correlationId: m
						});
						if (n.error) {
							const e = Object(s.a)(n.error);
							return void r(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = n.body;
							return e
						}
					} catch (p) {
						c.c.captureException(p);
						const e = Object(s.a)(p);
						r(Object(o.paypalApiError)(e))
					}
				}, y = e => async (t, n, i) => {
					let {
						apiContext: p
					} = i;
					const b = n(),
						g = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: n,
							isAnonymous: c,
							message: i,
							selectedAward: l
						} = b.gild;
						if (!n || !l) return void t(Object(o.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = l.id,
							f = await Object(d.e)({
								awardId: j,
								context: p(),
								orderId: e,
								thingId: n,
								message: i || "",
								isAnonymous: c,
								correlationId: g
							});
						if (f.error) {
							const e = Object(s.a)(f.error);
							t(Object(o.paypalApiError)(e))
						} else {
							t(h());
							const {
								all_awardings: e,
								awarder_karma_received: r,
								coins: s,
								subreddit_coins: c,
								treatment_tags: d
							} = f.body;
							t(Object(o.paymentCompleted)({
								coins: s,
								confirmed: !0
							}));
							const {
								gildSuccessful: i
							} = await Promise.resolve().then(a.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(i({
								awardKarmaReceived: r || 0,
								awardId: j,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.i)(e),
									total: e.count
								})),
								coins: s,
								id: n,
								subredditCoins: c,
								treatmentTags: d
							}))
						}
					} catch (j) {
						c.c.captureException(j);
						const e = Object(s.a)(j);
						t(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return w
			})), a.d(t, "c", (function() {
				return y
			})), a.d(t, "a", (function() {
				return C
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./src/lib/env/index.ts"),
				n = a("./src/lib/makeActionCreator/index.ts"),
				c = a("./src/lib/sentry/index.ts"),
				o = a("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				d = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/reddit/models/Toast/index.ts"),
				l = a("./src/reddit/actions/post.ts"),
				u = a("./src/lib/makeGqlRequest/index.ts"),
				m = a("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = a("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = a("./src/reddit/selectors/gold/productOffers.ts"),
				g = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(n.a)(g.m);
			const h = Object(n.a)(g.o),
				j = Object(n.a)(g.n),
				f = Object(n.a)(g.i),
				O = Object(n.a)(g.j),
				w = e => async (t, a, n) => {
					let {
						gqlContext: o
					} = n;
					const d = a(),
						i = Object(b.a)(d);
					if ((null == e ? void 0 : e.forceLoad) || !i) {
						t(h());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, a = Object(m.a)(e);
									throw new Error(a || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(o());
							t(f(e.data.coinpacks.offers[0])), t(O(e.data.premium.offers[0]))
						} catch (l) {
							Object(s.b)() || console.error(l), c.c.captureException(l);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(j(e))
						}
					}
				}, y = () => async e => e(w()), P = Object(n.a)(g.h), C = () => async (e, t, a) => {
					let {
						gqlContext: n
					} = a;
					var u, m;
					try {
						const t = await Object(o.a)(n());
						if (t.ok) {
							const a = t.body.data.claimAwardOffer;
							if (null === (u = a.errors) || void 0 === u ? void 0 : u.length) throw new Error(a.errors.map(e => e.message).join(" | "));
							if (!(null === (m = a.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!a.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: a.awards
							})), e(Object(l.A)())
						}
					} catch (p) {
						Object(s.b)() || console.error(p), e(Object(d.f)({
							kind: i.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(p)
					}
				}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, a) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				d = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				i = a("./src/reddit/components/CoinBalance/index.m.less"),
				l = a.n(i);
			t.a = e => n.a.createElement("div", {
				className: Object(c.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": n.a.createElement(d.a, null)
			}), " ", n.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				n = a.n(s),
				c = a("./src/config.ts"),
				o = a("./src/lib/loadRedditAdsPixel.ts"),
				d = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				i = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = a("./src/reddit/components/TrackingHelper/index.tsx"),
				u = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				m = a("./src/reddit/icons/fonts/Coin/index.tsx"),
				p = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				b = a.n(p);
			class g extends n.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(u.j)(e)), Object(o.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && r.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: b.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${c.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, n.a.createElement(m.a, {
						className: b.a.coinIcon
					}), n.a.createElement("div", {
						className: b.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), n.a.createElement("div", {
						className: b.a.paymentCompleteTitleDescription
					}, t), n.a.createElement("button", {
						className: b.a.closeButton,
						onClick: e.onCloseClick
					}, n.a.createElement(i.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					}))), n.a.createElement(d.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(g)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return Z
			}));
			var r = a("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				c = a.n(n),
				o = a("./src/reddit/hooks/useStripePromise.ts"),
				d = a("./src/lib/constants/index.ts"),
				i = a("./src/lib/currency/currencies.ts"),
				l = a("./src/lib/localizeCurrency/index.ts"),
				u = a("./node_modules/react-redux/es/index.js"),
				m = a("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				p = a("./src/reddit/selectors/experiments/econ/index.ts"),
				b = a("./src/lib/classNames/index.ts"),
				g = a("./src/reddit/hooks/useTracking.ts"),
				h = a("./src/reddit/actions/gold/gild.ts"),
				j = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				f = a("./src/reddit/components/CoinBalance/index.tsx"),
				O = a("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				w = a("./src/config.ts"),
				y = a("./node_modules/react-dom/index.js"),
				P = a.n(y),
				C = a("./node_modules/reselect/es/index.js"),
				k = a("./src/higherOrderComponents/makeAsync.tsx"),
				v = a("./src/reddit/helpers/loadThirdPartyScript.ts"),
				x = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = a("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const _ = Object(C.c)({
				isGild: e => !!Object(x.t)(e)
			});
			class A extends c.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: a
						} = this.props;
						return this.props.executePayment(a, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: c.a,
						ReactDOM: P.a
					}), a = {
						sandbox: w.a.paypal.apiKey,
						production: w.a.paypal.apiKey
					};
					return c.a.createElement("div", {
						className: e
					}, c.a.createElement(t, {
						env: w.a.paypal.env,
						client: a,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const M = Object(u.b)(_, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(E.d)(t.coinPackage)) : "awardId" in t ? e(Object(I.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (a, r) => {
					if ("coinPackage" in t) {
						if (a) return void e(Object(E.f)(r, t.coinPackage));
						e(Object(E.e)(r, t.coinPackage))
					} else "awardId" in t && e(Object(I.c)(r))
				}
			}))(A);
			var N = Object(k.a)({
					getComponent: () => Object(v.c)().then(() => M),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = a("./src/reddit/controls/Button/index.tsx"),
				G = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				S = a("./src/reddit/selectors/gold/productOffers.ts"),
				B = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				R = a.n(B);
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js"), F = e => {
				let {
					award: t,
					coinBalance: a,
					gildThingId: r,
					purchasePackage: s,
					savedCardsPending: n,
					selectedPayment: o,
					stripeTokenPending: i,
					onCompletePurchaseClick: l,
					stripe: w,
					stripeElements: y,
					isIframed: P
				} = e;
				const C = Object(g.a)(),
					k = Object(u.d)(),
					v = Object(u.e)(p.g),
					x = Object(u.e)(S.a),
					E = !!r;
				if (E && !v) {
					const e = () => {
						w && y && (C(Object(G.c)(r)), l(w, y, s))
					};
					return c.a.createElement("div", {
						className: R.a.purchaseSelectPaymentFooter
					}, c.a.createElement(f.a, {
						className: R.a.balance,
						coinBalance: a
					}), o === d.Mb && ((null == t ? void 0 : t.pennyPrice) && r ? c.a.createElement(N, {
						awardId: t.id,
						className: Object(b.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						pennies: t.pennyPrice,
						thingId: r
					}) : s && c.a.createElement(N, {
						className: Object(b.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						coinPackage: s
					})), o === d.Lb && c.a.createElement(T.l, {
						className: R.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || n,
						onClick: e
					}, L._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
				const I = null == x ? void 0 : x.pricePackages.find(e => e.id === (null == s ? void 0 : s.mobileId));
				if (!x || !I || !s) return null;
				if (!(null != o)) return null;
				const _ = o === d.Mb,
					A = o === d.Lb,
					M = {
						className: R.a.purchaseButton,
						productOffer: x,
						pricePackage: I,
						productsCount: I.quantity,
						onButtonClick: () => {
							A && C(Object(G.c)(r)), _ && C(Object(G.d)(r))
						},
						onPaymentSuccess: () => {
							k(Object(j.paymentCompleted)({
								coinsDiff: s.coins,
								confirmed: !1
							})), E && v && k(Object(h.gildGqlRequested)(r, {
								isOldReddit: P
							}))
						}
					};
				return c.a.createElement("div", {
					className: R.a.purchaseSelectPaymentFooter
				}, c.a.createElement(f.a, {
					className: R.a.balance,
					coinBalance: a
				}), _ && c.a.createElement(O.a, M), A && c.a.createElement(m.a, M))
			};
			var D = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				q = a("./src/reddit/hooks/useLocale.ts"),
				K = a("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: Q
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var z = e => {
				var t;
				const a = Object(q.a)();
				return c.a.createElement("div", {
					className: R.a.purchaseHeader,
					style: {
						backgroundImage: `url("${w.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, c.a.createElement(K.a, {
					className: R.a.coinIcon
				}), c.a.createElement("div", {
					className: R.a.titleMain
				}, Q._("Buy {amount}!", [Q._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: a,
					type: i.b.Reddit,
					currency: i.a
				}))], {
					hk: "3VNw69"
				})), c.a.createElement("div", {
					className: R.a.titleDescription
				}, Q._("You're purchasing Coins for yourself, {userName}!", [Q._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), c.a.createElement("img", {
					className: R.a.goldPackage,
					src: null === (t = e.purchasePackage.images.purchaseSuccess["3x"]) || void 0 === t ? void 0 : t.url
				}), c.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, c.a.createElement(D.b, {
					className: R.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var H = e => {
					const t = Object(q.a)(),
						a = [];
					if (e.purchasePackage && a.push(s.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [s.fbt._param("coinCount", Object(l.b)(e.award.coinPrice, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						})), s.fbt._param("awardName", e.award.name)], {
							hk: "2ImQA8"
						})), e.award.pennyDonate && a.push(s.fbt._("{dollarsDonate} will be donated.", [s.fbt._param("dollarsDonate", Object(l.b)(e.award.pennyDonate, {
							locale: t
						}))], {
							hk: "3jOvCI"
						})), e.award.giverCoinReward) {
						a.push(s.fbt._("As a thank you, you will receive {giverCoinReward}.", [s.fbt._param("giverCoinReward", Object(l.b)(e.award.giverCoinReward, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						}))], {
							hk: "20S8v2"
						}));
						const r = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						r > 0 && r !== e.coinBalance && s.fbt._("You’ll have {remainingCoins} remaining.", [s.fbt._param("remainingCoins", Object(l.b)(r, {
							locale: t,
							type: i.b.Reddit,
							currency: i.a
						}))], {
							hk: "DrEWG"
						})
					}
					return c.a.createElement("div", {
						className: R.a.purchaseGildHeader
					}, c.a.createElement("div", {
						className: R.a.awardTitle
					}, s.fbt._("Give the {awardName} Award", [s.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), c.a.createElement("div", {
						className: R.a.awardTitleDescription
					}, a.join(" ")), c.a.createElement("img", {
						className: R.a.awardIcon,
						src: e.award.icon.url
					}), c.a.createElement("button", {
						className: R.a.closeButton,
						onClick: e.onCloseClick
					}, c.a.createElement(D.b, {
						className: Object(b.a)(R.a.closeIcon, R.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				U = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				J = a("./src/reddit/components/StripePaymentForm/index.tsx"),
				W = a("./src/reddit/helpers/createEmojiText/index.tsx");
			const Z = e => {
				const t = Object(q.a)(),
					a = Object(o.a)(),
					n = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return c.a.createElement(r.Elements, {
					stripe: a
				}, c.a.createElement(c.a.Fragment, null, e.gildThingId ? c.a.createElement(H, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && c.a.createElement(z, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), c.a.createElement("div", {
					className: R.a.purchaseBody
				}, c.a.createElement(U.a, {
					className: R.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected,
					paymentMethods: e.purchaseMethods
				}), e.selectedPayment === d.Lb && c.a.createElement(r.ElementsConsumer, null, t => {
					let {
						stripe: a
					} = t;
					return c.a.createElement(J.a, {
						nightmode: e.nightmode,
						stripe: a
					})
				}), c.a.createElement("div", {
					className: R.a.checkoutFooter
				}, c.a.createElement("div", {
					className: R.a.purchaseTotal
				}, s.fbt._("Total: {totalAmount}", [s.fbt._param("totalAmount", Object(l.b)(n, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === d.Mb && e.paypalErrorMessage && c.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === d.Lb && e.stripeErrorMessage && c.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), c.a.createElement("div", {
					className: R.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? c.a.createElement(c.a.Fragment, null, s.fbt._("The minimum Coins purchase is {coins}.", [s.fbt._param("coins", Object(l.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: i.b.Reddit,
						currency: i.a
					}))], {
						hk: "1y9FMB"
					}), c.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(W.a)(s.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": c.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), c.a.createElement(r.ElementsConsumer, null, t => {
					let {
						stripe: a,
						elements: r
					} = t;
					return c.a.createElement(F, {
						award: e.selectedAward,
						coinBalance: e.coinBalance,
						gildThingId: e.gildThingId,
						onCompletePurchaseClick: e.onCompletePurchaseClick,
						purchasePackage: e.purchasePackage,
						savedCardsPending: e.savedCardsPending,
						selectedPayment: e.selectedPayment,
						stripeTokenPending: e.stripeTokenPending,
						stripe: a,
						stripeElements: r,
						isIframed: e.isIframed
					})
				})))
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./node_modules/react/index.js"),
				s = a.n(r),
				n = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/reddit/actions/gold/modals.ts"),
				i = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = a("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = a("./src/reddit/actions/toaster.ts"),
				b = a("./src/reddit/components/EmergencyMaintenance/index.tsx"),
				g = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/colors.ts"),
				j = a("./src/reddit/constants/zIndex.ts"),
				f = a("./src/reddit/helpers/correlationIdTracker.ts"),
				O = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				w = a("./src/reddit/models/Toast/index.ts"),
				y = a("./src/reddit/models/User/index.ts"),
				P = a("./src/reddit/selectors/experiments/econ/paymentMethods.ts"),
				C = a("./src/reddit/selectors/gild.ts"),
				k = a("./src/reddit/selectors/gold/giveAwards.ts"),
				v = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				x = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = a("./src/reddit/selectors/platform.ts"),
				I = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/lib/classNames/index.ts"),
				A = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				M = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = a("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = a.n(N);
			const {
				fbt: G
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					const {
						award: t,
						onClickClose: a
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: T.a.purchaseGildHeader
					}, s.a.createElement("div", {
						className: T.a.awardTitle
					}, G._("Give the {award name} Award", [G._param("award name", t.name)], {
						hk: "1nWqWe"
					})), s.a.createElement("img", {
						className: T.a.awardIcon,
						src: t.icon.url
					}), s.a.createElement("button", {
						className: T.a.closeButton,
						onClick: a
					}, s.a.createElement(A.b, {
						className: Object(_.a)(T.a.closeIcon, T.a.awardPurchase),
						"data-redditstyle": !0
					}))), s.a.createElement("div", {
						className: Object(_.a)(T.a.purchaseBody, T.a.loaderContainer)
					}, s.a.createElement(M.a, {
						sizePx: 100
					})))
				},
				B = a("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				R = a("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(c.c)({
					activePage: x.r,
					allowNavigationCallback: e => {
						const t = Object(E.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: I.g,
					coinPackages: v.d,
					correlationId: e => Object(x.s)(e) || Object(f.d)(f.a.GoldPayment, !1),
					dealCoinPackages: v.e,
					gildThingId: x.t,
					isIframed: C.g,
					nightmode: I.fb,
					savedCardsPending: x.x,
					selectedAward: k.b,
					selectedPayment: x.c,
					stripeErrorMessage: x.j,
					stripeTokenPending: x.n,
					paypalErrorMessage: x.d,
					purchaseCatalogError: v.k,
					purchaseCatalogPending: v.l,
					purchaseMethods: P.a,
					purchasePackageId: x.u,
					recommendedPackages: v.o,
					userName: e => {
						const t = Object(I.m)(e);
						return `u/${Object(y.e)(t)}`
					}
				}),
				D = Object(n.b)(F, (e, t) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(i.d)()),
					onFailedToLoadCatalog: t => {
						const a = {
							kind: w.b.Error,
							text: t
						};
						return e(Object(p.f)(a))
					},
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(m.b)({
						correlationId: t
					})),
					dispatchCompletePurchase: (t, a, r, s, n) => {
						e(s ? Object(l.g)(t, a, r, n) : Object(l.h)(t, a, r))
					}
				}), (e, t, a) => ({
					...e,
					...t,
					...a,
					onCompletePurchaseClick: (a, r, s) => t.dispatchCompletePurchase(a, r, s, !!e.gildThingId, e.isIframed)
				}));
			class q extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					};
					const {
						coinPackages: t,
						correlationId: a,
						loadSavedCards: r,
						purchaseCatalogPending: s,
						requestPurchaseCatalog: n
					} = this.props;
					t.length || s || n(a), r()
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					Object(f.d)(f.a.GoldPayment, !1), t(Object(O.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(O.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: t,
						coinPackages: a,
						dealCoinPackages: r,
						gildThingId: n,
						nightmode: c,
						onCompletePurchaseClick: o,
						onFailedToLoadCatalog: d,
						onPaymentSelected: i,
						onTryCloseModal: l,
						paypalErrorMessage: u,
						purchaseCatalogError: m,
						purchaseCatalogPending: p,
						purchaseMethods: g,
						purchasePackageId: h,
						recommendedPackages: j,
						savedCardsPending: f,
						selectedAward: O,
						selectedPayment: w,
						stripeErrorMessage: y,
						stripeTokenPending: P,
						userName: C,
						isIframed: k
					} = this.props;
					if (m) return d(m), l(), null;
					if (!g.size) return s.a.createElement(b.a, {
						onClose: this.props.onTryCloseModal
					});
					const v = !!n,
						x = [...a, ...r, ...j].filter(e => e.mobileId === h)[0];
					return "paymentCompleted" === e ? s.a.createElement("div", null, s.a.createElement(B.a, {
						isGild: v,
						onCloseClick: l,
						userName: C
					})) : p || !x ? s.a.createElement("div", null, s.a.createElement(S, {
						award: O,
						onClickClose: l
					})) : s.a.createElement("div", null, "selectPayment" === e && s.a.createElement(R.a, {
						coinBalance: t,
						gildThingId: n,
						nightmode: c,
						onCloseModal: l,
						onCompletePurchaseClick: o,
						onPaymentSelected: i,
						paypalErrorMessage: u,
						purchasePackage: x,
						purchaseMethods: g,
						savedCardsPending: f,
						selectedAward: O,
						selectedPayment: w,
						stripeErrorMessage: y,
						stripeTokenPending: P,
						userName: C,
						isIframed: k
					}))
				}
			}
			const K = Object(o.a)(q);
			t.default = D(Object(g.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(O.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: h.a.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: j.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return s.a.createElement(K, L({}, this.props, {
						className: T.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, a) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return l
			})), a.d(t, "c", (function() {
				return u
			})), a.d(t, "a", (function() {
				return m
			}));
			var r = a("./src/lib/makeGqlRequest/index.ts"),
				s = a("./src/lib/makeRequest/index.ts"),
				n = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = a("./src/reddit/helpers/isPost.ts"),
				o = (a("./src/redditGQL/operations/AvailableAwards.json"), a("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				d = a("./src/redditGQL/operations/GiveAward.json"),
				i = a("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, a) => {
				var c;
				const o = await Object(r.a)(e, {
					...d,
					variables: {
						input: t
					}
				}, {
					query: a ? {} : Object(n.b)()
				});
				if (!Object(s.c)(o)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(o) || !o.body.data.giveAward.ok) throw o.body.data.giveAward.errors && (null === (c = o.body.data.giveAward.errors) || void 0 === c ? void 0 : c.length) > 0 ? new Error(o.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return o.body.data.giveAward
			}, u = async (e, t) => {
				var a, n, c;
				const o = await Object(r.a)(e, {
					...i,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(o)) throw new Error("An unknown error occurred");
				if (!o.body.data.removeAward.ok) {
					const e = null !== (c = null === (n = null === (a = o.body.data.removeAward.errors) || void 0 === a ? void 0 : a[0]) || void 0 === n ? void 0 : n.message) && void 0 !== c ? c : "An unknown error occurred";
					throw new Error(e)
				}
				return o.body.data.removeAward
			}, m = async (e, t, a) => {
				const d = await Object(r.a)(e, {
					...o,
					variables: {
						thingId: t.thingId,
						isPost: Object(c.a)(t.thingId)
					}
				}, {
					query: a ? {} : Object(n.b)()
				});
				if (!Object(s.c)(d)) throw new Error("An unknown error occurred");
				if (d.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: a
					} = d.body.data;
					return {
						id: t.thingId,
						awardings: a.awardings,
						treatmentTags: a.treatmentTags,
						coins: e.coins
					}
				}
				if (d.body.data.commentById) {
					const {
						identity: e,
						commentById: a
					} = d.body.data;
					return {
						id: t.thingId,
						awardings: a.awardings,
						treatmentTags: a.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return s
			}));
			const r = () => 2048,
				s = e => {
					const t = r();
					return e.slice(0, t)
				}
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/redux/es/redux.js"),
				s = a("./src/reddit/actions/gold/constants.ts");
			const n = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.lb: {
						const a = t.payload;
						return {
							...e,
							[a.subredditId]: a.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				subredditLockedCoins: c
			})
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var r = a("./src/lib/initializeClient/installReducer.ts"),
				s = a("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(r.a)({
				features: {
					econPurchase: s.a
				}
			});
			const n = (e, t) => {
				let {
					subredditId: a
				} = t;
				return a && e.features.econPurchase.subredditLockedCoins[a] || 0
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
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.21cfb93e3e952294c50e.js.map