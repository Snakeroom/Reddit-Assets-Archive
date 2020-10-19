// https://www.redditstatic.com/desktop2x/AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc.e3508aa5aca4abe84f1b.js
// Retrieved at 10/19/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc"], {
		"./src/graphql/operations/FetchActiveCoinSale.json": function(e) {
			e.exports = JSON.parse('{"id":"33ef128566b2"}')
		},
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/graphql/operations/ModeratedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"db5cbe68b636"}')
		},
		"./src/graphql/operations/RedditorMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"3d04e2bb92b5"}')
		},
		"./src/graphql/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/graphql/operations/SubredditCoins.json"),
				i = r("./src/lib/makeGqlRequest/index.ts");
			var d = r("./src/reddit/featureFlags/subredditPoints.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const u = Object(s.a)(c.ib),
				l = (e, t, r) => async (n, a, s) => {
					let {
						gqlContext: c
					} = s;
					var l, b;
					if (!d.a.has(t.toLowerCase())) return;
					if (void 0 !== a().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const _ = await ((e, t) => Object(i.a)(e, Object.assign(Object.assign({}, o), {
						variables: {
							subreddit: t
						}
					})))(c(), e);
					if (_.ok) {
						const t = _.body;
						n(u({
							subredditId: e,
							amount: (null === (b = null === (l = t.data.subredditInfoById) || void 0 === l ? void 0 : l.userCoinsInSubreddit) || void 0 === b ? void 0 : b.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setIsAnonymous", (function() {
				return Y
			})), r.d(t, "updateMessage", (function() {
				return z
			})), r.d(t, "gildGqlRequested", (function() {
				return J
			})), r.d(t, "triggerLoader", (function() {
				return W
			})), r.d(t, "gildPending", (function() {
				return Z
			})), r.d(t, "gildFailed", (function() {
				return $
			})), r.d(t, "gildSuccessful", (function() {
				return re
			})), r.d(t, "awardKarmaUpdated", (function() {
				return ne
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./node_modules/react/index.js"),
				l = r.n(u),
				b = r("./src/reddit/models/Gold/Award.ts"),
				_ = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				O = r.n(_);
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = e => p._("Sent! You earned {=awarder karma}", [p._param("=awarder karma", l.a.createElement("a", {
				className: O.a.karmaLink,
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
			var f = r("./src/reddit/constants/modals.ts"),
				E = r("./src/reddit/models/Gold/Coins/index.ts"),
				j = r("./src/reddit/models/Post/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				D = r("./src/reddit/selectors/comments.ts"),
				I = r("./src/reddit/selectors/communityAwards.ts"),
				S = r("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				y = r("./src/reddit/selectors/gild.ts"),
				R = r("./src/reddit/selectors/gold/awardIcon.ts"),
				A = r("./src/reddit/selectors/gold/econPurchase.ts"),
				w = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				T = r("./src/reddit/selectors/posts.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				k = r("./src/graphql/operations/GildComment.json"),
				x = r("./src/graphql/operations/GildPost.json"),
				U = r("./src/lib/makeGqlRequest/index.ts"),
				v = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const N = (e, t, r) => Object(U.a)(e, Object.assign(Object.assign({}, x), {
					variables: t
				}), {
					query: r ? {} : Object(v.b)()
				}),
				M = (e, t, r) => Object(U.a)(e, Object.assign(Object.assign({}, k), {
					variables: t
				}), {
					query: r ? {} : Object(v.b)()
				});
			var L = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = r("./src/reddit/helpers/awards/message.ts"),
				B = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/helpers/isPost.ts"),
				H = r("./src/reddit/helpers/trackers/gild.ts"),
				q = r("./src/telemetry/index.ts"),
				K = r("./src/reddit/actions/gold/constants.ts"),
				V = r("./src/reddit/actions/gold/econPurchase.ts");
			const Y = Object(a.a)(K.s),
				z = Object(a.a)(K.w),
				J = (e, t) => async (r, a, s) => {
					let {
						gqlContext: o
					} = s;
					const i = a().gild,
						{
							isOldReddit: d,
							isLivestream: c
						} = t;
					r(Z());
					try {
						const t = {
								gildingTypeId: i.selectedAward.id,
								isAnonymous: i.isAnonymous,
								isGildFunded: !1,
								message: Object(G.d)(i.message, i.selectedAward, c),
								nodeId: e
							},
							a = Object(F.a)(e) ? N : M,
							s = await a(o(), {
								input: t
							}, d);
						let u = !1,
							l = null,
							b = null;
						if (s.ok) {
							const e = s.body;
							u = e.data.gild.ok, l = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (u) {
							const t = s.body,
								{
									gild: n
								} = t.data,
								a = Object(F.a)(e) ? s.body.data.gild.postInfo : s.body.data.gild.comment,
								{
									awardings: o,
									treatmentTags: d
								} = a;
							await r(re({
								awardId: i.selectedAward.id,
								awardings: o,
								awardKarmaReceived: n.awardKarmaReceived,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins,
								treatmentTags: d
							}))
						} else {
							const e = l && l[0] && l[0].message,
								t = b && b[0] && b[0].message,
								a = e || t || n.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await r($(a))
						}
					} catch (u) {
						const e = u,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r($(t))
					} finally {
						Object(B.b)(B.a.GildingFlow)
					}
				}, W = Object(a.a)(K.v), Q = Object(a.a)(K.r), Z = () => async (e, t) => {
					e(Q()), window.setTimeout(() => {
						t().gild.api.pending && e(W())
					}, 2e3)
				}, X = Object(a.a)(K.q), $ = e => async (t, r) => {
					await t(X(e)), t(Object(c.e)({
						kind: h.b.Error,
						duration: c.a,
						text: e
					}))
				}, ee = Object(a.a)(K.t), te = (e, t) => {
					const {
						id: r
					} = t, n = Object(F.a)(r) ? Object(T.N)(e, {
						postId: r
					}) : Object(D.n)(e, {
						commentId: r
					}), a = Object(C.i)(e), s = e.gild, {
						isAnonymous: o
					} = s, i = !o && a && (a.username || a.displayText) ? a.username || a.displayText : void 0, d = n ? n.author : void 0, c = Object(P.K)(e, {
						thingId: r
					});
					return ee(Object.assign(Object.assign({}, t), {
						gilder: i,
						gildee: d,
						subredditId: c && c.id
					}))
				}, re = e => async (t, r) => {
					const a = r(),
						{
							awardId: u,
							id: l
						} = e,
						_ = Object(I.a)(a, u),
						O = Object(S.a)(a),
						p = e.awardKarmaReceived,
						D = Object(C.i)(a),
						k = Object(y.b)(a) || Object(B.d)(B.a.GildingFlow, !1);
					if (Object(y.h)(a)) {
						const e = "success.gild",
							t = {},
							r = Object(R.a)(a, {
								award: _,
								minSize: 32,
								postOrCommentId: l
							});
						t.awardId = u, t.awardIcon = r, Object(s.a)({
							type: e,
							data: t
						})
					}
					if (_.awardType === b.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(P.K)(a, {
								thingId: l
							}),
							r = t && Object(P.D)(a, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - _.coinPrice)
					}
					if (t(te(a, e)), D && O) {
						const e = D.awarderKarma + p,
							r = Object(g.e)(D);
						t(ne({
							userName: r,
							awarderKarma: e
						}))
					}(a.posts.instances[l] || []).forEach(r => {
						t(te(a, Object.assign(Object.assign({}, e), {
							id: r
						})))
					});
					const x = Object(F.a)(l) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", _.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", _.name)], {
							hk: "2sIK9Y"
						}),
						U = _.coinPrice;
					O ? Object(q.a)(Object(H.viewKarmaSuccessEvent)({
						award: _,
						awarderKarmaEarned: p,
						awardeeKarmaEarned: 0,
						numberCoins: U,
						thingId: l
					})(a)) : Object(q.a)(Object(H.viewSuccessAwardEvent)(l, U, _)(a)), t(Object(d.g)(f.a.GOLD_GILD_MODAL));
					const v = Object(R.a)(a, {
						award: _,
						minSize: 64,
						postOrCommentId: l
					});
					t(Object(c.e)({
						customIconAsset: v,
						kind: h.b.SuccessAward,
						text: O && p > 0 ? m({
							awarderKarmaReceived: p
						}) : x
					})), setTimeout(() => {
						const e = Object(L.a)(u, l),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const N = Object(F.a)(l) && Object(j.i)(Object(T.N)(a, {
						postId: l
					}));
					await t(Object(i.b)(k));
					const M = Object(w.d)(r()).filter(e => E.a.has(e.dealInfo.type));
					M.length && setTimeout(() => t(Object(o.d)({
						correlationId: k,
						packageId: M[0].mobileId
					})), N ? 600 : 10);
					const G = Object(P.K)(a, {
						thingId: l
					});
					G && Object(A.a)(a, {
						subredditId: G.id
					}) && t(Object(V.a)(G.id, G.name, {
						force: !0
					}))
				}, ne = Object(a.a)(K.a)
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return R
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "g", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				_ = r("./src/reddit/endpoints/gold/purchase.ts"),
				O = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = r("./src/reddit/models/Gold/Award.ts"),
				f = r("./src/reddit/models/Gold/ProductOffer.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/constants/experiments.ts"),
				h = r("./src/reddit/helpers/chooseVariant/index.ts");
			var g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				D = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const S = Object(s.a)(I.o),
				y = Object(s.a)(I.c),
				R = e => async (t, r) => {
					t(S(e)), t(Object(u.h)(i.a.ECON_COIN_PURCHASE))
				}, A = () => async (e, t) => {
					e(y()), e(Object(u.g)(i.a.ECON_COIN_PURCHASE))
				}, w = Object(s.a)(I.s), T = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						const a = n(),
							s = Object(g.c)(a, r);
						s ? ("new_purchaser" !== s.dealInfo.type || (e => {
							const t = Object(h.c)(e, {
								experimentEligibilitySelector: h.a,
								experimentName: j.gb
							});
							return !(!t || Object(j.Nc)(t))
						})(a)) && ("repeat_purchaser" !== s.dealInfo.type || (e => {
							const t = Object(h.c)(e, {
								experimentEligibilitySelector: h.a,
								experimentName: j.eb
							});
							return !(!t || Object(j.Nc)(t))
						})(a)) && (e(w({
							correlationId: t,
							packageId: r
						})), e(Object(u.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage("Tried to show targeted offer, but could not find package id: ".concat(r))
					}
				}, P = (e, t, r) => async (a, s) => {
					await a(Object(c.c)(e, r));
					const o = s(),
						i = Object(g.i)(o);
					if (0 !== i.length) a(R({
						correlationId: r,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(g.f)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(l.e)({
							kind: E.b.Error,
							duration: l.a,
							text: e || t
						}))
					}
				}, C = (e, t) => async (r, s, o) => {
					let {
						apiContext: i
					} = o;
					const c = s(),
						{
							coins: u,
							pennies: l
						} = t,
						b = Object(D.o)(c) || Object(O.d)(O.a.GoldPayment, !1);
					let p, m;
					r(Object(d.stripeTokenPending)());
					const E = Object(D.v)(c);
					if (E || (p = await r(Object(d.validateAndCreateStripeToken)(e)), m = Object(D.s)(c), p)) try {
						const e = await Object(_.e)({
							coins: u,
							context: i(),
							correlationId: b,
							offerContext: Object(f.b)(t, !1),
							pennies: l,
							rememberCard: m,
							savedCardId: E || void 0,
							token: p
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void r(Object(d.stripeApiError)(t))
						}
						return r(Object(d.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(O.b)(O.a.GoldPayment)
					} catch (j) {
						const e = Object(a.a)(j);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, k = (e, t, s) => async (o, i, c) => {
					let {
						apiContext: u
					} = c;
					const l = i(),
						{
							coins: b,
							pennies: E
						} = t,
						j = Object(D.o)(l) || Object(O.d)(O.a.GoldPayment, !1);
					let h, g;
					o(Object(d.stripeTokenPending)());
					const I = Object(D.v)(l);
					if (I || (h = await o(Object(d.validateAndCreateStripeToken)(e)), g = Object(D.s)(l), h)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: c,
							selectedAward: D
						} = l.gild;
						if (!e || !D.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(d.stripeApiError)(e))
						}
						const S = D.id,
							y = {
								gildType: S,
								isAnonymous: i,
								message: c
							},
							R = await Object(_.d)({
								coins: b,
								context: u(),
								correlationId: j,
								gildParams: y,
								isOldReddit: s,
								offerContext: Object(f.b)(t, !0),
								pennies: E,
								rememberCard: g,
								savedCardId: I || void 0,
								thingId: e,
								token: h
							});
						if (R.error) {
							const e = Object(a.a)(R.error, R.status);
							return void o(Object(d.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(A()), o(Object(d.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: a,
								coins: s,
								treatment_tags: i
							} = R.body;
							return o(t({
								awardKarmaReceived: n || 0,
								awardId: S,
								awardings: a && a.length ? Object(p.a)(a).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: i
							})), void Object(O.b)(O.a.GoldPayment)
						}
					} catch (S) {
						const e = Object(a.a)(S);
						o(Object(d.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(d.stripeApiError)(e))
					}
				}, x = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const i = Object(O.c)(O.a.GoldPayment),
						{
							coins: c,
							pennies: u
						} = e;
					try {
						const e = await Object(b.a)({
							context: s(),
							coins: c,
							pennies: u,
							correlationId: i
						});
						if (e.error) {
							const r = Object(a.a)(e.error);
							return void t(Object(d.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						o.c.captureException(l);
						const e = Object(a.a)(l);
						t(Object(d.paypalApiError)(e))
					}
				}, U = (e, t) => async (r, n, s) => {
					let {
						apiContext: i
					} = s;
					const c = n(),
						u = Object(D.o)(c) || Object(O.d)(O.a.GoldPayment, !1),
						{
							coins: l,
							pennies: _
						} = t;
					try {
						const n = await Object(b.c)({
							context: i(),
							offerContext: Object(f.b)(t, !1),
							orderId: e,
							coins: l,
							pennies: _,
							correlationId: u
						});
						if (n.error) {
							const e = Object(a.a)(n.error);
							return void r(Object(d.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(d.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(O.b)(O.a.GoldPayment)
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(a.a)(p);
						r(Object(d.paypalApiError)(e))
					}
				}, v = (e, t) => async (s, i, c) => {
					let {
						apiContext: u
					} = c;
					const l = i(),
						_ = Object(D.o)(l) || Object(O.d)(O.a.GoldPayment, !1),
						{
							coins: E,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: c,
							selectedAward: h
						} = l.gild;
						if (!o || !h) return void s(Object(d.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const g = h.id,
							D = await Object(b.d)({
								context: u(),
								offerContext: Object(f.b)(t, !0),
								orderId: e,
								coins: E,
								pennies: j,
								thingId: o,
								awardId: g,
								message: c || "",
								isAnonymous: i,
								correlationId: _
							});
						if (D.error) {
							const e = Object(a.a)(D.error);
							s(Object(d.paypalApiError)(e))
						} else {
							s(A());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: a,
								treatment_tags: i
							} = D.body;
							s(Object(d.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: c
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(c({
								awardId: g,
								awardKarmaReceived: t || 0,
								awardings: Object(p.a)(e).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: a,
								treatmentTags: i
							})), Object(O.b)(O.a.GoldPayment)
						}
					} catch (h) {
						o.c.captureException(h);
						const e = Object(a.a)(h);
						s(Object(d.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "t", (function() {
				return o
			})), r.d(t, "u", (function() {
				return i
			})), r.d(t, "v", (function() {
				return d
			})), r.d(t, "w", (function() {
				return c
			})), r.d(t, "x", (function() {
				return u
			})), r.d(t, "y", (function() {
				return l
			})), r.d(t, "z", (function() {
				return b
			})), r.d(t, "A", (function() {
				return _
			})), r.d(t, "B", (function() {
				return O
			})), r.d(t, "C", (function() {
				return p
			})), r.d(t, "D", (function() {
				return m
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "E", (function() {
				return E
			})), r.d(t, "F", (function() {
				return j
			})), r.d(t, "G", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return D
			})), r.d(t, "k", (function() {
				return I
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "n", (function() {
				return R
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "r", (function() {
				return U
			})), r.d(t, "e", (function() {
				return v
			}));
			const n = "GOLD_PAYMENT__CARD_NAME_EMPTY",
				a = "GOLD_PAYMENT__CARD_NAME_INPUT",
				s = "GOLD_PAYMENT__DELETE_SAVED_CARD",
				o = "GOLD_PAYMENT__PAYMENT_COMPLETED",
				i = "GOLD_PAYMENT__PAYPAL_API_ERROR",
				d = "GOLD_PAYMENT__SAVED_CARDS_PENDING",
				c = "GOLD_PAYMENT__SAVED_CARDS_SUCCESS",
				u = "GOLD_PAYMENT__SELECT_PAYMENT_METHOD",
				l = "GOLD_PAYMENT__SELECT_SAVED_CARD",
				b = "GOLD_PAYMENT__STRIPE_API_ERROR",
				_ = "GOLD_PAYMENT__STRIPE_ELEMENT_CHANGE",
				O = "GOLD_PAYMENT__CARD_ERROR",
				p = "GOLD_PAYMENT__STRIPE_TOKEN_PENDING",
				m = "GOLD_PAYMENT__TOGGLE_REMEMBER_CARD",
				f = "UPDATE_CARD_MODAL__CLOSE_UPDATE_CARD_MODAL",
				E = "UPDATE_CARD_MODAL__UPDATE_CARD_FAILED",
				j = "UPDATE_CARD_MODAL__UPDATE_CARD_PENDING",
				h = "UPDATE_CARD_MODAL__UPDATE_CARD_SUCCESSFUL",
				g = "GOLD_PURCHASE__FETCH_PURCHASE_CATALOG_ERROR",
				D = "GOLD_PURCHASE__FETCH_PURCHASE_CATALOG_REQUESTED",
				I = "GOLD_PURCHASE__FETCH_PURCHASE_CATALOG_SUCCESS",
				S = "GOLD_PURCHASE__FETCH_RECOMMENDED_PACKAGE_ERROR",
				y = "GOLD_PURCHASE__FETCH_RECOMMENDED_PACKAGE_REQUESTED",
				R = "GOLD_PURCHASE__FETCH_RECOMMENDED_PACKAGE_SUCCESS",
				A = "COIN_SALE__FETCH_ACTIVE_SALE_SUCCESS",
				w = "COIN_PURCHASE_MODAL__OPEN_COIN_PURCHASE_MODAL",
				T = "COIN_PURCHASE_MODAL__OPEN_TARGETED_OFFER_MODAL",
				P = "COIN_PURCHASE_MODAL__CLOSE_COIN_PURCHASE_MODAL",
				C = "PENNY_PURCHASE_MODAL__OPEN_PENNY_PURCHASE_MODAL",
				k = "PENNY_PURCHASE_MODAL__CLOSE_PENNY_PURCHASE_MODAL",
				x = "PENNY_PURCHASE_MODAL__OPEN_PENNY_PURCHASE_MODAL_TO_GILD",
				U = "PREMIUM_PURCHASE_MODAL__OPEN_PREMIUM_PURCHASE_MODAL",
				v = "PREMIUM_PURCHASE_MODAL__CLOSE_PREMIUM_PURCHASE_MODAL"
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return c
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardElementChange", (function() {
				return _
			})), r.d(t, "stripeTokenPending", (function() {
				return O
			})), r.d(t, "stripeTokenError", (function() {
				return p
			})), r.d(t, "stripeApiError", (function() {
				return m
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return f
			})), r.d(t, "paypalApiError", (function() {
				return E
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return h
			})), r.d(t, "_deleteSavedCard", (function() {
				return g
			})), r.d(t, "deleteSavedCard", (function() {
				return D
			})), r.d(t, "savedCardsPending", (function() {
				return I
			})), r.d(t, "savedCardsSuccess", (function() {
				return S
			})), r.d(t, "loadSavedCards", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = Object(s.a)(i.x),
				u = Object(s.a)(i.t),
				l = Object(s.a)(i.b),
				b = Object(s.a)(i.a),
				_ = Object(s.a)(i.A),
				O = Object(s.a)(i.C),
				p = Object(s.a)(i.B),
				m = Object(s.a)(i.z),
				f = e => async (t, r) => {
					const a = r(),
						s = Object(d.f)(a),
						{
							token: o,
							error: i
						} = await e.createToken({
							name: s
						});
					if (s.trim()) {
						if (!i && o) return o;
						t(p(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(b({
							message: e
						}))
					}
				}, E = Object(s.a)(i.u), j = Object(s.a)(i.D), h = Object(s.a)(i.y), g = Object(s.a)(i.g), D = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					t(g(e));
					try {
						const t = await Object(o.a)(s(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (i) {
						a.c.captureException(i)
					}
				}, I = Object(s.a)(i.v), S = Object(s.a)(i.w), y = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					e(I());
					try {
						const t = await Object(o.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(S(r)), r[0] && e(h(r[0].cardId))
					} catch (s) {
						a.c.captureException(s), e(S([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return A
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/graphql/operations/FetchActiveCoinSale.json"),
				d = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/constants/headers.ts"),
				_ = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = r("./src/reddit/endpoints/gold/purchase.ts");
			const p = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				m = e => e.map(p),
				f = e => e.map(e => {
					const t = p(e);
					return Object.assign(Object.assign({}, t), {
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					})
				}),
				E = e => e.map(e => ({
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				j = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null;

			function h(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: r,
					deals: n,
					premium_packages: a
				} = e.body, s = {
					activeSaleConfig: j(t),
					coinPackages: m(r),
					dealCoinPackages: f(n),
					premiumPackages: E(a)
				};
				return Object.assign(Object.assign({}, e), {
					body: s
				})
			}

			function g(e) {
				if (!e.ok) return e;
				const t = e.body,
					r = {
						coinPackages: m([t])
					};
				return Object.assign(Object.assign({}, e), {
					body: r
				})
			}
			var D = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const S = Object(s.a)(I.j),
				y = Object(s.a)(I.k),
				R = Object(s.a)(I.i),
				A = e => async (t, r, s) => {
					let {
						apiContext: i
					} = s;
					t(S());
					const u = r(),
						p = Object(D.I)(u);
					try {
						const r = !p,
							n = await (async e => {
								let {
									context: t,
									correlationId: r,
									shouldUseCurrentOrigin: n
								} = e;
								const a = "/api/v2/gold/purchase_package_details",
									s = n && "undefined" != typeof window ? "".concat(window.location.origin).concat(a) : "".concat(t.apiUrl).concat(a),
									o = Object(_.a)(s);
								return Object(c.a)(Object(l.a)(t, [b.a]), {
									method: d.db.GET,
									endpoint: o,
									data: {
										correlation_id: r
									}
								}).then(O.c).then(h)
							})({
								context: i(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(y(a))
					} catch (m) {
						Object(a.b)() || console.error(m), o.c.captureException(m);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(R(e))
					}
				}, w = Object(s.a)(I.m), T = Object(s.a)(I.n), P = Object(s.a)(I.l), C = (e, t) => async (r, s, i) => {
					let {
						apiContext: u
					} = i;
					r(w());
					try {
						const n = await (async e => {
							let {
								context: t,
								awardId: r,
								correlationId: n
							} = e;
							const a = "".concat(t.apiUrl, "/api/v2/gold/recommended_coin_package_details"),
								s = Object(_.a)(a);
							return Object(c.a)(Object(l.a)(t, [b.a]), {
								method: d.db.GET,
								endpoint: s,
								data: {
									correlation_id: n,
									intended_award: r
								}
							}).then(O.c).then(g)
						})({
							awardId: e,
							context: u(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error("Recommended coin packages returned empty for award id ".concat(e));
						r(T(a))
					} catch (p) {
						Object(a.b)() || console.error(p), o.c.captureException(p);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(P(e))
					}
				}, k = Object(s.a)(I.h), x = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					try {
						const t = await (e => Object(u.a)(e, Object.assign({}, i)))(n());
						if (t.ok) {
							const r = t.body.data.coinSale;
							await e(k({
								activeSaleConfig: r
							}))
						}
						if (!t.ok) throw new Error("Got bad response in GQL call for active coin sale: ".concat(t))
					} catch (s) {
						Object(a.b)() || console.error(s), o.c.captureException(s)
					}
				}
		},
		"./src/reddit/actions/pages/profilePrivate/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			}));
			const n = 25,
				a = "PAGE__PROFILE_PRIVATE_PENDING",
				s = "PAGE__PROFILE_PRIVATE_MIXED_LOADED",
				o = "PAGE__PROFILE_PRIVATE_POSTS_LOADED",
				i = "PAGE__PROFILE_PRIVATE_FAILED",
				d = "MORE__PROFILE_PRIVATE_PENDING",
				c = "MORE__PROFILE_PRIVATE_MIXED_LOADED",
				u = "MORE__PROFILE_PRIVATE_POSTS_LOADED",
				l = "MORE__PROFILE_PRIVATE_FAILED"
		},
		"./src/reddit/actions/profile/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return n
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "l", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "n", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "g", (function() {
				return m
			}));
			const n = "PROFILE__PROFILE_INFO_LOADED",
				a = "PROFILE__PROFILE_INFO_FAILED",
				s = "PROFILE__PROFILE_MOD_HUB_PAGE_LOADED",
				o = "PROFILE__MODERATED_SUBREDDITS_PENDING",
				i = "PROFILE__MODERATED_SUBREDDITS_LOADED",
				d = "PROFILE__MODERATED_SUBREDDITS_FAILED",
				c = "PROFILE__RECEIVED_MODERATED_SUBREDDITS_MODELS",
				u = "PROFILE__RECEIVED_MODERATED_SUBREDDITS_SUBSCRIPTIONS",
				l = "MORE__PROFILE_GQL_MODERATED_PENDING",
				b = "MORE__PROFILE_GQL_MODERATED_LOADED",
				_ = "MORE__PROFILE_GQL_MODERATED_FAILED",
				O = "PROFILE__MULTIREDDITS_PENDING",
				p = "PROFILE__MULTIREDDITS_LOADED",
				m = "PROFILE__MULTIREDDITS_FAILED"
		},
		"./src/reddit/actions/profile/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return L
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "c", (function() {
				return V
			})), r.d(t, "g", (function() {
				return W
			})), r.d(t, "f", (function() {
				return Q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/actions/contentGate.ts"),
				o = r("./src/reddit/actions/gold/gild.ts"),
				i = r("./src/reddit/actions/pages/profilePrivate/constants.ts"),
				d = r("./src/reddit/actions/subredditModeration.ts"),
				c = r("./src/reddit/constants/profiles.ts"),
				u = r("./src/reddit/endpoints/profile/info.ts"),
				l = r("./src/graphql/operations/ModeratedSubreddits.json"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				_ = r("./src/lib/makeGqlRequest/index.ts"),
				O = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			var m = r("./src/graphql/operations/RedditorMultireddits.json");
			var f = r("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				E = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				j = r("./src/reddit/helpers/graphql/normalizeSubredditModPermissions/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts");
			var g = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				D = e => {
					const t = e.awardee_karma || 0,
						r = e.awarder_karma || 0,
						n = e.comment_karma,
						s = e.link_karma,
						o = t + r + n + s;
					return Object.assign({
						accountIcon: e.icon_img,
						awardedLastMonth: e.awarded_last_month ? Object(g.c)(e.awarded_last_month) : null,
						awardeeKarma: t,
						awarderKarma: r,
						commentKarma: n,
						created: e.created,
						createdUtc: e.created_utc,
						displayName: e.name,
						displayNamePrefixed: e.subreddit && e.subreddit.display_name_prefixed,
						displayText: e.name,
						hasUserProfile: !!e.subreddit,
						hideFromRobots: !!e.hide_from_robots,
						id: "".concat(a.yb.Account, "_").concat(e.id),
						isEmployee: e.is_employee,
						isFollowing: e.has_subscribed,
						isGold: e.is_gold,
						isAdmin: e.is_admin,
						isMod: e.is_mod,
						isNSFW: !(!e.subreddit || !e.subreddit.over_18),
						prefShowSnoovatar: e.pref_show_snoovatar,
						prefShowTwitter: e.pref_show_twitter,
						postKarma: s,
						totalKarma: o,
						url: "/user/".concat(e.name, "/"),
						username: e.name
					}, e.subreddit ? {
						profileId: e.subreddit.name
					} : null)
				},
				I = e => {
					const t = e.awardee_karma || 0,
						r = e.awarder_karma || 0,
						n = e.comment_karma,
						a = e.link_karma,
						s = t + r + n + a;
					return {
						acceptChats: !1 !== e.accept_chats,
						acceptPms: !1 !== e.accept_pms,
						awardeeKarma: t,
						awarderKarma: r,
						commentKarma: n,
						hasExternalAccount: e.has_external_account,
						postKarma: a,
						prefShowTwitter: e.pref_show_twitter,
						publicDescription: e.subreddit ? e.subreddit.public_description : "",
						totalKarma: s,
						userIsSubscriber: e.subreddit && e.subreddit.user_is_subscriber || !1
					}
				},
				S = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts");
			var y = r("./src/reddit/models/User/index.ts"),
				R = r("./src/reddit/selectors/profile.ts"),
				A = r("./src/reddit/selectors/subscriptions.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/actions/profile/constants.ts");
			const P = Object(n.a)(T.k),
				C = Object(n.a)(T.j),
				k = Object(n.a)(T.l),
				x = Object(n.a)(T.c),
				U = Object(n.a)(T.b),
				v = Object(n.a)(T.a),
				N = Object(n.a)(T.m),
				M = Object(n.a)(T.n),
				L = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					const a = Object(w.i)(t());
					a && a.profileId && await e(B(Object(y.e)(a)))
				}, G = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					const s = await Object(u.b)(a(), e);
					if (s.ok) {
						const r = s.body.data;
						let n = Object(j.a)(r.profileByName.modPermissions || {});
						const a = Object(h.a)(r.identity),
							o = Object(E.a)(r.profileByName);
						a.profileId === o.id && (n = c.a), t(Object(d.kb)({
							[o.id]: n
						})), t(k({
							account: a,
							profile: o,
							profileName: e
						}))
					}
				}, B = (e, t) => async (r, n, o) => {
					let {
						apiContext: i,
						gqlContext: d
					} = o;
					var c, l;
					const b = n();
					if (!!(Object(R.j)(b, {
							profileName: e
						}) && Object(R.h)(b, {
							profileName: e
						}) && Object(w.hb)(b, {
							userName: e
						})) && !t) return;
					const [_, O] = await Promise.all([Object(u.c)(i(), e), Object(u.d)(d(), e)]);
					if (_.ok) {
						_.body && _.body.data && _.body.data.is_suspended && r(Object(s.u)({
							profileName: e
						}));
						const t = function(e) {
							const {
								data: t
							} = e;
							return Object.assign({
								about: I(t),
								banner: t.subreddit && t.subreddit.banner_img && {
									height: t.subreddit.banner_size && t.subreddit.banner_size[1],
									url: t.subreddit.banner_img,
									width: t.subreddit.banner_size && t.subreddit.banner_size[0]
								},
								user: D(t),
								features: t.features
							}, t.subreddit ? {
								profile: Object(S.a)(t.subreddit, t.name)
							} : null)
						}(_.body);
						if (O.ok && (null === (c = O.body.data.redditorInfoByName) || void 0 === c ? void 0 : c.karma)) {
							const e = null === (l = O.body.data.redditorInfoByName) || void 0 === l ? void 0 : l.karma,
								r = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							Object.assign(t.about, r), Object.assign(t.user, r)
						}
						r(P(t))
					} else _.error && _.error.type === a.m && r(Object(s.s)({
						profileName: e
					})), r(C(_.body))
				}, F = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const o = {
						profileName: e
					};
					if (Object(R.a)(r(), o)) return;
					if (Object(R.k)(r(), o)) return;
					t(x(o));
					const i = await ((e, t) => Object(b.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/user/").concat(t, "/moderated_subreddits.json"),
						method: a.db.GET,
						traceRequestName: "get_profile_moderated_subreddits",
						data: {
							raw_json: 1
						}
					}))(s(), e);
					if (i.ok) {
						const n = function(e) {
							return e ? e.map(e => ({
								communityIcon: e.community_icon,
								displayText: e.sr_display_name_prefixed,
								icon: {
									height: e.icon_size ? e.icon_size[1] : 0,
									url: e.icon_img ? e.icon_img : "",
									width: e.icon_size ? e.icon_size[0] : 0
								},
								id: e.name,
								isNSFW: e.over_18,
								isQuarantined: !!e.quarantine,
								name: "user" === e.subreddit_type ? e.sr.slice(a.Ub.length) : e.sr,
								primaryColor: e.primary_color,
								subscribers: e.subscribers,
								title: e.title,
								type: e.subreddit_type,
								url: e.url,
								wls: e.wls
							})) : []
						}(i.body.data);
						t(U({
							profileName: e,
							data: n
						}));
						const s = {},
							o = {};
						if (n.forEach(e => {
								("user" === e.type ? o : s)[e.id] = e
							}), t(N({
								subreddits: s,
								profiles: o
							})), !Object(A.e)(r())) {
							const e = (e => {
								const t = e.filter(e => e.user_is_subscriber);
								return {
									subredditOrder: t.filter(e => "user" !== e.subreddit_type).map(e => e.name),
									profileOrder: t.filter(e => "user" === e.subreddit_type).map(e => e.name)
								}
							})(i.body.data || []);
							t(M(e))
						}
					} else t(v(i.body))
				}, H = Object(n.a)(T.f), q = Object(n.a)(T.e), K = Object(n.a)(T.d), V = e => async (t, r, n) => {
					const a = r(),
						s = e.toLowerCase(),
						{
							pageInfo: o
						} = a.profiles.moderated;
					if (!o[s] || !o[s].hasNextPage || !o[s].endCursor) return;
					t(H({
						profileName: s
					}));
					const d = await ((e, t) => Object(_.a)(e, Object.assign(Object.assign({}, l), {
							variables: t
						})))(n.gqlContext(), {
							name: s,
							after: o[s].endCursor,
							first: i.h
						}),
						c = d.body.data;
					if (d.ok) {
						const e = Object(E.b)(c.redditor.moderatedSubreddits);
						t(q(Object.assign({
							profileName: s
						}, e)))
					} else t(K(d.error))
				}, Y = Object(n.a)(T.i), z = Object(n.a)(T.h), J = Object(n.a)(T.g), W = (e, t) => async (r, n, s) => {
					const o = n(),
						d = e.toLowerCase(),
						c = {
							profileName: d
						};
					if (Object(R.b)(o, c)) return;
					if (!t && Object(R.l)(o, c)) return;
					const {
						pageInfo: u
					} = o.profiles.multireddits;
					if (t && (!u[d] || !u[d].hasNextPage || !u[d].endCursor)) return;
					r(Y(c));
					const l = await ((e, t) => Object(_.a)(e, Object.assign(Object.assign({}, m), {
							variables: t
						}), {
							traceRequestName: "get_profile_multireddits"
						}))(s.gqlContext(), {
							name: d,
							first: t ? i.h : a.Gb,
							after: t ? u[d].endCursor : void 0
						}),
						b = l.body.data;
					if (l.ok && b.redditorInfoByName) {
						const e = b.redditorInfoByName.multireddits.edges.map(e => e.node),
							t = Object(f.b)(e);
						r(z(Object.assign(Object.assign(Object.assign({}, c), t), {
							pageInfo: b.redditorInfoByName.multireddits.pageInfo,
							multiredditsModelsState: o.multireddits.models
						})))
					} else r(J(Object.assign(Object.assign({}, c), {
						error: l.error
					})))
				}, Q = e => async (t, r, n) => {
					var a;
					const s = e.toLowerCase(),
						i = await Object(u.d)(n.gqlContext(), s);
					if (i.ok && i.body) {
						const e = null === (a = i.body.data.redditorInfoByName) || void 0 === a ? void 0 : a.karma;
						t(Object(o.awardKarmaUpdated)({
							awardeeKarma: (null == e ? void 0 : e.fromAwardsReceived) || 0,
							awarderKarma: (null == e ? void 0 : e.fromAwardsGiven) || 0,
							userName: s
						}))
					}
				}
		},
		"./src/reddit/actions/subredditModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "J", (function() {
				return C
			})), r.d(t, "H", (function() {
				return k
			})), r.d(t, "G", (function() {
				return x
			})), r.d(t, "ib", (function() {
				return M
			})), r.d(t, "M", (function() {
				return L
			})), r.d(t, "L", (function() {
				return G
			})), r.d(t, "K", (function() {
				return B
			})), r.d(t, "jb", (function() {
				return K
			})), r.d(t, "I", (function() {
				return V
			})), r.d(t, "N", (function() {
				return Y
			})), r.d(t, "pb", (function() {
				return W
			})), r.d(t, "hb", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return Z
			})), r.d(t, "d", (function() {
				return X
			})), r.d(t, "c", (function() {
				return $
			})), r.d(t, "V", (function() {
				return ne
			})), r.d(t, "h", (function() {
				return ae
			})), r.d(t, "g", (function() {
				return se
			})), r.d(t, "f", (function() {
				return oe
			})), r.d(t, "W", (function() {
				return ue
			})), r.d(t, "b", (function() {
				return le
			})), r.d(t, "i", (function() {
				return be
			})), r.d(t, "U", (function() {
				return pe
			})), r.d(t, "nb", (function() {
				return me
			})), r.d(t, "m", (function() {
				return fe
			})), r.d(t, "l", (function() {
				return Ee
			})), r.d(t, "k", (function() {
				return je
			})), r.d(t, "Z", (function() {
				return Ie
			})), r.d(t, "p", (function() {
				return Se
			})), r.d(t, "o", (function() {
				return ye
			})), r.d(t, "n", (function() {
				return Re
			})), r.d(t, "ab", (function() {
				return Pe
			})), r.d(t, "j", (function() {
				return Ce
			})), r.d(t, "q", (function() {
				return ke
			})), r.d(t, "Y", (function() {
				return ve
			})), r.d(t, "ob", (function() {
				return Ne
			})), r.d(t, "C", (function() {
				return Me
			})), r.d(t, "B", (function() {
				return Le
			})), r.d(t, "A", (function() {
				return Ge
			})), r.d(t, "t", (function() {
				return qe
			})), r.d(t, "s", (function() {
				return Ke
			})), r.d(t, "r", (function() {
				return Ve
			})), r.d(t, "fb", (function() {
				return We
			})), r.d(t, "db", (function() {
				return Qe
			})), r.d(t, "x", (function() {
				return Ze
			})), r.d(t, "w", (function() {
				return Xe
			})), r.d(t, "v", (function() {
				return $e
			})), r.d(t, "eb", (function() {
				return nt
			})), r.d(t, "a", (function() {
				return at
			})), r.d(t, "T", (function() {
				return dt
			})), r.d(t, "Q", (function() {
				return ct
			})), r.d(t, "R", (function() {
				return _t
			})), r.d(t, "mb", (function() {
				return pt
			})), r.d(t, "u", (function() {
				return mt
			})), r.d(t, "cb", (function() {
				return ht
			})), r.d(t, "F", (function() {
				return gt
			})), r.d(t, "E", (function() {
				return Dt
			})), r.d(t, "D", (function() {
				return It
			})), r.d(t, "gb", (function() {
				return At
			})), r.d(t, "y", (function() {
				return wt
			})), r.d(t, "O", (function() {
				return Pt
			})), r.d(t, "kb", (function() {
				return Ct
			})), r.d(t, "S", (function() {
				return kt
			})), r.d(t, "z", (function() {
				return xt
			})), r.d(t, "bb", (function() {
				return vt
			})), r.d(t, "P", (function() {
				return Nt
			})), r.d(t, "lb", (function() {
				return Bt
			})), r.d(t, "X", (function() {
				return Ft
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/get.js"),
				s = r.n(a),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/apiRequestState.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/subreddit.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				b = r("./src/lib/constants/index.ts"),
				_ = r("./src/lib/makeApiRequest/index.ts"),
				O = r("./src/lib/omitHeaders/index.ts"),
				p = r("./src/reddit/constants/headers.ts");
			const m = (e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
				endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/contributors"),
				method: b.db.GET,
				data: r
			});
			var f = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const E = (e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
					endpoint: Object(f.a)("".concat(e.apiUrl, "/api/v1/").concat(t, "/banned")),
					method: b.db.GET,
					data: r
				}),
				j = (e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/moderators"),
					method: b.db.GET,
					data: Object.assign(Object.assign({}, r), {
						count: 10
					})
				}),
				h = (e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/moderators_invited"),
					method: b.db.GET,
					data: Object.assign(Object.assign({}, r), {
						count: 50
					})
				}),
				g = (e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/muted"),
					method: b.db.GET,
					data: r
				});
			var D = r("./src/reddit/helpers/normalizeUsername/index.tsx"),
				I = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				S = r("./src/reddit/models/SubredditModeration/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				R = r("./src/reddit/models/User/index.ts"),
				A = r("./src/reddit/selectors/activeModalId.ts"),
				w = r("./src/reddit/selectors/subreddit.ts"),
				T = r("./src/reddit/selectors/subredditModeration.ts"),
				P = r("./src/reddit/selectors/user.ts");
			const C = "SUBREDDIT__MUTEDUSERS_PENDING",
				k = "SUBREDDIT__MUTEDUSERS_LOADED",
				x = "SUBREDDIT__MUTEDUSERS_FAILED",
				U = Object(o.a)(C),
				v = Object(o.a)(k),
				N = Object(o.a)(x),
				M = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, a) => {
						let {
							apiContext: s
						} = a;
						const o = n(),
							i = t.after || "",
							d = Object(S.d)(e, i),
							c = o.muted.fetchedTokens[d];
						if (o.muted.api.pending[d] || c) return;
						r(U({
							subredditId: e,
							fetchedToken: i
						}));
						const u = o.subreddits.models[e].name,
							l = await g(s(), u, t);
						l.ok ? r(v(Object.assign(Object.assign({}, l.body), {
							fetchedToken: i
						}))) : r(N({
							subredditId: e,
							fetchedToken: i
						}))
					}
				},
				L = "SUBREDDIT_MUTEDUSERS_SEARCH_PENDING",
				G = "SUBREDDIT_MUTEDUSERS_SEARCH_LOADED",
				B = "SUBREDDIT_MUTEDUSERS_SEARCH_FAILED",
				F = Object(o.a)(L),
				H = Object(o.a)(G),
				q = Object(o.a)(B),
				K = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n().subreddits.models[e].name,
						i = {
							username: Object(D.a)(t)
						};
					r(F());
					const d = await g(s(), o, i);
					d.ok ? r(H(d.body)) : r(q(d.error))
				}, V = "SUBREDDIT_MUTEDUSERS_MUTED_SUCCESS", Y = "SUBREDDIT_MUTEDUSERS_UNMUTED_SUCCESS", z = Object(o.a)(V), J = Object(o.a)(Y), W = (e, t) => async (r, a, o) => {
					let {
						apiContext: i
					} = o;
					const d = a().subreddits.models[e].url,
						c = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/unfriend"),
							method: b.db.POST,
							data: {
								api_type: "json",
								id: r,
								type: "muted"
							}
						}))(i(), d, t);
					if (c.ok) r(J({
						subredditId: e,
						userId: t
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, Q = (e, t, r) => async (a, o, i) => {
					let {
						apiContext: d
					} = i;
					const c = o(),
						l = c.subreddits.models[e].url,
						m = c.subreddits.models[e].name;
					t = Object(D.a)(t);
					const f = await ((e, t, r, n) => Object(_.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl).concat(t, "api/friend"),
						method: b.db.POST,
						data: {
							api_type: "json",
							name: r,
							note: n,
							type: "muted"
						}
					}))(d(), l, t, r);
					if (f.ok) {
						const e = {
							username: t
						};
						a(Object(u.e)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully muted a user", null, {
								hk: "2ypyuL"
							})
						}));
						const r = await g(d(), m, e);
						r.ok && a(z(r.body))
					} else {
						const e = s()(f, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, Z = "SUBREDDIT__APPROVEDSUBMITTERS_PENDING", X = "SUBREDDIT__APPROVEDSUBMITTERS_LOADED", $ = "SUBREDDIT__APPROVEDSUBMITTERS_FAILED", ee = Object(o.a)(Z), te = Object(o.a)(X), re = Object(o.a)($), ne = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, a) => {
						let {
							apiContext: s
						} = a;
						const o = n(),
							i = t.after || "",
							d = Object(S.d)(e, i),
							c = o.approvedSubmitters.fetchedTokens[d];
						if (o.approvedSubmitters.api.pending[d] || c) return;
						r(ee({
							subredditId: e,
							fetchedToken: i
						}));
						const u = o.subreddits.models[e].name,
							l = await m(s(), u, t);
						l.ok ? r(te(Object.assign(Object.assign({}, l.body), {
							fetchedToken: i
						}))) : r(re({
							subredditId: e,
							fetchedToken: i
						}))
					}
				}, ae = "SUBREDDIT_APPROVEDSUBMITTERS_SEARCH_PENDING", se = "SUBREDDIT_APPROVEDSUBMITTERS_SEARCH_LOADED", oe = "SUBREDDIT_APPROVEDSUBMITTERS_SEARCH_FAILED", ie = Object(o.a)(ae), de = Object(o.a)(se), ce = Object(o.a)(oe), ue = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n().subreddits.models[e].name,
						i = {
							username: Object(D.a)(t)
						};
					r(ie());
					const d = await m(s(), o, i);
					d.ok ? r(de(d.body)) : r(ce(d.error))
				}, le = "SUBREDDIT_APPROVEDSUBMITTERS_APPROVED_SUCCESS", be = "SUBREDDIT_APPROVEDSUBMITTERS_UNAPPROVED_SUCCESS", _e = Object(o.a)(le), Oe = Object(o.a)(be), pe = (e, t) => async (r, a, o) => {
					let {
						apiContext: i
					} = o;
					const d = a(),
						c = d.subreddits.models[e].url,
						l = d.subreddits.models[e].name;
					t = Object(D.a)(t);
					const f = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl).concat(t, "api/friend"),
						method: b.db.POST,
						data: {
							api_type: "json",
							name: r,
							type: "contributor"
						}
					}))(i(), c, t);
					if (f.ok) {
						const e = {
							username: t
						};
						r(Object(u.e)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully added an approved submitter", null, {
								hk: "4gruK7"
							})
						}));
						const a = await m(i(), l, e);
						a.ok && r(_e(a.body))
					} else {
						const e = s()(f, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, me = (e, t) => async (r, a, o) => {
					let {
						apiContext: i
					} = o;
					const d = a().subreddits.models[e].url,
						c = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/unfriend"),
							method: b.db.POST,
							data: {
								api_type: "json",
								id: r,
								type: "contributor"
							}
						}))(i(), d, t);
					if (c.ok) r(Oe({
						subredditId: e,
						userId: t
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, fe = "SUBREDDIT__BANNEDUSERS_PENDING", Ee = "SUBREDDIT__BANNEDUSERS_LOADED", je = "SUBREDDIT__BANNEDUSERS_FAILED", he = Object(o.a)(fe), ge = Object(o.a)(Ee), De = Object(o.a)(je), Ie = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return async (r, n, a) => {
						let {
							apiContext: s
						} = a;
						const o = n(),
							i = t.after || "",
							d = Object(S.d)(e, i),
							c = o.banned.fetchedTokens[d];
						if (o.banned.api.pending[d] || c) return;
						r(he({
							subredditId: e,
							fetchedToken: i
						}));
						const u = o.subreddits.models[e].name,
							l = await E(s(), u, t);
						l.ok ? r(ge(Object.assign(Object.assign({}, l.body), {
							fetchedToken: i
						}))) : r(De({
							subredditId: e,
							fetchedToken: i
						}))
					}
				}, Se = "SUBREDDIT_BANNEDUSERS_SEARCH_PENDING", ye = "SUBREDDIT_BANNEDUSERS_SEARCH_LOADED", Re = "SUBREDDIT_BANNEDUSERS_SEARCH_FAILED", Ae = Object(o.a)(Se), we = Object(o.a)(ye), Te = Object(o.a)(Re), Pe = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n().subreddits.models[e].name,
						i = {
							username: Object(D.a)(t)
						};
					r(Ae());
					const d = await E(s(), o, i);
					d.ok ? r(we(d.body)) : r(Te(d.error))
				}, Ce = "SUBREDDIT_BANNEDUSERS_BAN_SUCCESS", ke = "SUBREDDIT_BANNEDUSERS_UNBAN_SUCCESS", xe = Object(o.a)(Ce), Ue = Object(o.a)(ke), ve = (e, t, r) => async (a, o, d) => {
					let {
						apiContext: c
					} = d;
					const l = o(),
						m = l.subreddits.models[e].url,
						f = l.subreddits.models[e].name;
					t.username = Object(D.a)(t.username), a(Object(i.h)(r));
					const j = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl).concat(t, "api/friend"),
						method: b.db.POST,
						data: {
							api_type: "json",
							ban_reason: r.reason,
							ban_message: r.banMessage,
							duration: r.duration,
							name: r.username,
							note: r.modNote,
							ban_context: r.contextId,
							type: "banned"
						}
					}))(c(), m, t);
					if (j.ok) {
						a(Object(i.e)(r));
						const e = {
							username: t.username
						};
						a(Object(u.e)({
							kind: y.b.SuccessMod,
							text: n.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const s = await E(c(), f, e);
						s.ok && a(xe(s.body))
					} else {
						a(Object(i.f)(r, j.error));
						const e = s()(j, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						a(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, Ne = (e, t) => async (r, a, o) => {
					let {
						apiContext: i
					} = o;
					const d = a().subreddits.models[e].url,
						c = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/unfriend"),
							method: b.db.POST,
							data: {
								api_type: "json",
								id: r,
								type: "banned"
							}
						}))(i(), d, t);
					if (c.ok) r(Ue({
						subredditId: e,
						userId: t
					})), r(Object(u.e)({
						kind: y.b.SuccessMod,
						text: n.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = s()(c, "body.json.errors[0][1]", n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						r(Object(u.e)({
							kind: y.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, Me = "SUBREDDIT__MODERATORS_PENDING", Le = "SUBREDDIT__MODERATORS_LOADED", Ge = "SUBREDDIT__MODERATORS_FAILED", Be = Object(o.a)(Me), Fe = Object(o.a)(Le), He = Object(o.a)(Ge), qe = "SUBREDDIT__EDITABLEMODERATORS_PENDING", Ke = "SUBREDDIT__EDITABLEMODERATORS_LOADED", Ve = "SUBREDDIT__EDITABLEMODERATORS_FAILED", Ye = Object(o.a)(qe), ze = Object(o.a)(Ke), Je = Object(o.a)(Ve), We = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n(),
						i = Object(w.S)(o, {
							subredditId: e
						}).name,
						d = t && t.after ? t.after : "",
						c = t && t.before ? t.before : "",
						u = Object(S.d)(e, d, c),
						l = o.moderators.userOrder.data[u],
						b = o.moderators.userOrder.api.error[u];
					if (o.moderators.userOrder.api.pending[u] || l && !b) return;
					r(Be({
						subredditId: e,
						key: u
					}));
					const _ = await j(s(), i, t);
					if (_.ok) {
						const t = {
							key: u,
							response: _.body,
							subredditId: e
						};
						r(Fe(t))
					} else {
						const t = {
							error: _.error,
							subredditId: e,
							key: u
						};
						r(He(t))
					}
				}, Qe = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n(),
						i = Object(w.S)(o, {
							subredditId: e
						}).name,
						d = t && t.afterEditable ? t.afterEditable : "",
						c = t && t.beforeEditable ? t.beforeEditable : "",
						u = Object(S.d)(e, d, c),
						l = o.moderators.editableUserOrder.data[u],
						m = o.moderators.editableUserOrder.api.error[u];
					if (o.moderators.editableUserOrder.api.pending[u] || l && !m) return;
					r(Ye({
						subredditId: e,
						key: u
					}));
					const f = Object.assign(Object.assign({}, t), {
							after: d,
							before: c
						}),
						E = await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/moderators_editable"),
							method: b.db.GET,
							data: Object.assign(Object.assign({}, r), {
								count: 10
							})
						}))(s(), i, f);
					if (E.ok) {
						const t = {
							key: u,
							response: E.body,
							subredditId: e
						};
						r(ze(t))
					} else {
						const t = {
							key: u,
							error: E.error,
							subredditId: e
						};
						r(Je(t))
					}
				}, Ze = "SUBREDDIT__INVITEDMODERATORS_PENDING", Xe = "SUBREDDIT__INVITEDMODERATORS_LOADED", $e = "SUBREDDIT__INVITEDMODERATORS_FAILED", et = Object(o.a)(Ze), tt = Object(o.a)(Xe), rt = Object(o.a)($e), nt = e => async (t, r, n) => {
					let {
						apiContext: a
					} = n;
					const s = r(),
						o = Object(w.S)(s, {
							subredditId: e
						}).name;
					if (s.moderators.invitedModerators.api.pending) return;
					t(et());
					const i = await h(a(), o);
					if (i.ok) {
						const e = i.body;
						t(tt(e))
					} else t(rt(i.error))
				}, at = "SUBREDDIT__ADDMODERATOR__SUCCESS", st = Object(o.a)("SUBREDDIT__ADDMODERATOR_PENDING"), ot = Object(o.a)(at), it = Object(o.a)("SUBREDDIT__ADDMODERATOR__FAILED"), dt = (e, t, r) => async (a, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						c = Object(w.S)(d, {
							subredditId: e
						}),
						l = c.name,
						m = c.url;
					t = Object(D.a)(t), a(st());
					const f = Object(I.d)(r),
						E = await ((e, t, r, n) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/friend"),
							method: b.db.POST,
							data: {
								name: r,
								type: "moderator_invite",
								permissions: n,
								api_type: "json"
							}
						}))(i(), m, t, f);
					if (E.ok) {
						const r = await h(i(), l, {
							username: t
						});
						if (E.ok) {
							const t = r.body,
								s = t.moderatorIds[0];
							d.moderators.invitedModerators.models[e][s] ? a(Object(u.e)({
								kind: y.b.SuccessCommunity,
								text: n.fbt._("That user is already invited", null, {
									hk: "R8YPV"
								})
							})) : (a(Object(u.e)({
								kind: y.b.SuccessMod,
								text: n.fbt._("Successfully added a moderator", null, {
									hk: "2ZdoIZ"
								})
							})), a(ot(t)))
						}
					} else {
						const e = E.body.json && E.body.json.errors;
						e && e[0] && e[0][1] && a(Object(u.e)({
							kind: y.b.Error,
							text: e[0][1],
							duration: 3e3
						})), a(it())
					}
				}, ct = "SUBREDDIT__REMOVEMODERATOR__SUCCESS", ut = Object(o.a)("SUBREDDIT__REMOVEMODERATOR_PENDING"), lt = Object(o.a)(ct), bt = Object(o.a)("SUBREDDIT__REMOVEMODERATOR__FAILED"), _t = "SUBREDDIT__RESIGNMODERATOR__SUCCESS", Ot = Object(o.a)(_t), pt = (e, t, r, n) => async (a, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						c = d.subreddits.models[e].name,
						u = Object(S.d)(e, r, n);
					if (a(ut()), (await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl, "/api/unfriend"),
							method: b.db.POST,
							data: {
								id: r,
								type: "moderator",
								r: t,
								api_type: "json"
							}
						}))(i(), c, t)).ok) {
						a(lt({
							subredditId: e,
							userId: t,
							key: u
						}));
						const r = Object(P.i)(d);
						r && r.id === t && a(Ot({
							subredditId: e,
							userId: t
						}))
					} else a(bt())
				}, mt = "SUBREDDIT__EDITMODERATOR__SUCCESS", ft = Object(o.a)("SUBREDDIT__EDITMODERATOR_PENDING"), Et = Object(o.a)(mt), jt = Object(o.a)("SUBREDDIT__EDITMODERATOR__FAILED"), ht = (e, t, r, n) => async (a, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s().subreddits.models[e].url;
					a(ft());
					const c = Object(I.d)(r);
					if ((await ((e, t, r, n) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/setpermissions"),
							method: b.db.POST,
							data: {
								name: r,
								type: "moderator",
								permissions: n,
								api_type: "json"
							}
						}))(i(), d, t, c)).ok) {
						a(Et({
							permissions: r,
							subredditId: e,
							userId: n
						}))
					} else a(jt())
				}, gt = "SUBREDDIT_MODERATORS_SEARCH_PENDING", Dt = "SUBREDDIT_MODERATORS_SEARCH_LOADED", It = "SUBREDDIT_MODERATORS_SEARCH_FAILED", St = Object(o.a)(gt), yt = Object(o.a)(Dt), Rt = Object(o.a)(It), At = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n().subreddits.models[e].name,
						i = {
							username: Object(D.a)(t)
						};
					r(St());
					const d = await j(s(), o, i);
					d.ok ? r(yt(d.body)) : r(Rt(d.error))
				}, wt = "SUBREDDIT_MODERATORS_ACCEPT_INVITE_SUCCESS", Tt = Object(o.a)(wt), Pt = "SUBREDDIT_NEWMODERATORPERMISSIONS_LOADED", Ct = Object(o.a)(Pt), kt = e => async (t, r, n) => {
					let {
						apiContext: a
					} = n;
					const s = r(),
						o = s.user.account;
					if (!o) return;
					const i = s.subreddits.models[e],
						d = i.url,
						c = i.name;
					if ((await ((e, t) => Object(_.a)(Object(O.a)(e, [p.a]), {
							endpoint: "".concat(e.apiUrl).concat(t, "api/accept_moderator_invite"),
							method: b.db.POST,
							data: {
								api_type: "json"
							}
						}))(a(), d)).ok) {
						t(Tt({
							subredditId: e
						})), t(Qe(e)), t(nt(e)), t(We(e));
						const r = {
								username: Object(R.e)(o)
							},
							n = await j(a(), c, r);
						if (n.ok) {
							const r = n.body.moderators[o.id];
							r && t(Ct({
								[e]: r.modPermissions
							}))
						}
					}
				}, xt = "SUBREDDIT_MODERATORS_DECLINE_INVITE_SUCCESS", Ut = Object(o.a)(xt), vt = e => async (t, r, n) => {
					let {
						apiContext: a
					} = n;
					const s = r().subreddits.models[e].name;
					(await ((e, t) => Object(_.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/decline_mod_invite"),
						method: b.db.POST,
						data: {
							api_type: "json"
						}
					}))(a(), s)).ok && t(Ut({
						subredditId: e
					}))
				}, Nt = "SUBREDDIT__REMOVEINVITEDMODERATOR__SUCCESS", Mt = Object(o.a)("SUBREDDIT__REMOVEINVITEDMODERATOR_PENDING"), Lt = Object(o.a)(Nt), Gt = Object(o.a)("SUBREDDIT__REMOVEINVITEDMODERATOR__FAILED"), Bt = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n(),
						i = Object(w.S)(o, {
							subredditId: e
						}).name;
					r(Mt()), (await ((e, t, r) => Object(_.a)(Object(O.a)(e, [p.a]), {
						endpoint: "".concat(e.apiUrl, "/api/unfriend"),
						method: b.db.POST,
						data: {
							id: r,
							type: "moderator_invite",
							r: t,
							api_type: "json"
						}
					}))(s(), i, t)).ok ? r(Lt({
						subredditId: e,
						userId: t
					})) : r(Gt())
				}, Ft = (e, t) => async (r, n, a) => {
					let {
						apiContext: s
					} = a;
					const o = n();
					await Promise.all([(async () => {
						if (!Object(A.b)(l.a.BAN_USER)(o) && !Object(w.P)(o, {
								subredditId: e
							})) {
							const t = Object(w.S)(o, {
								subredditId: e
							});
							await r(Object(c.o)(t.name))
						}
					})(), (async () => {
						const n = Object(P.hb)(o, {
							userName: t
						});
						if (!n) return;
						const a = Object(T.m)(o, {
							subredditId: e
						});
						a && a[n.id] || await r(Ie(e, {
							username: t
						}))
					})()]), r(Object(d.i)(l.a.BAN_USER))
				}
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, r) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "e", (function() {
				return O
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts");
			const c = async e => {
				let {
					buttonId: t,
					context: r,
					correlationId: c
				} = e;
				const u = {
						button_id: t,
						correlation_id: c
					},
					l = "".concat(r.apiUrl, "/api/v2/gold/paypal/initiate_premium_payment"),
					b = Object(i.a)(l);
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.db.POST,
					endpoint: b,
					data: u
				}).then(d.c)
			}, u = async e => {
				let {
					context: t,
					coins: r,
					pennies: i,
					correlationId: c
				} = e;
				const u = {
					coins: r,
					pennies: i,
					correlation_id: c
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.db.POST,
					endpoint: "".concat(t.apiUrl, "/api/v2/gold/paypal/create_coin_purchase_order"),
					data: u
				}).then(d.c)
			}, l = async e => {
				let {
					context: t,
					awardId: r,
					pennies: i,
					thingId: c,
					correlationId: u
				} = e;
				const l = {
					award_id: r,
					correlation_id: u,
					pennies: i,
					thing_id: c
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.db.POST,
					endpoint: "".concat(t.apiUrl, "/api/v2/gold/paypal/create_award_purchase_order"),
					data: l
				}).then(d.c)
			}, b = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: i,
					coins: c,
					pennies: u,
					correlationId: l
				} = e;
				const b = {
					offer_context: r,
					order_id: i,
					coins: c,
					pennies: u,
					correlation_id: l
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.db.POST,
					endpoint: "".concat(t.apiUrl, "/api/v2/gold/paypal/execute_coin_order"),
					data: b
				}).then(d.c)
			}, _ = async e => {
				let {
					awardId: t,
					context: r,
					coins: i,
					correlationId: c,
					isAnonymous: u,
					message: l,
					offerContext: b,
					orderId: _,
					pennies: O,
					thingId: p
				} = e;
				const m = {
					award_id: t,
					coins: i,
					correlation_id: c,
					is_anonymous: u,
					message: l,
					offer_context: b,
					order_id: _,
					pennies: O,
					thing_id: p
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.db.POST,
					endpoint: "".concat(r.apiUrl, "/api/v2/gold/paypal/execute_coin_with_gild_order"),
					data: m
				}).then(d.c)
			}, O = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: i,
					isAnonymous: c,
					message: u,
					orderId: l,
					thingId: b
				} = e;
				const _ = {
					award_id: t,
					correlation_id: i,
					is_anonymous: c,
					message: u,
					order_id: l,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.db.POST,
					endpoint: "".concat(r.apiUrl, "/api/v2/gold/paypal/execute_award_purchase_order"),
					data: _
				}).then(d.c)
			}
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "b", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = r("./src/reddit/helpers/genericServerError/index.ts"),
				c = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const u = e => e.ok ? e.body.json && e.body.json.errors.length ? Object.assign(Object.assign({}, e), {
					ok: !1,
					error: Object(c.a)(e)
				}) : Object.assign({}, e) : Object.assign(Object.assign({}, e), {
					error: e.error || Object(d.a)()
				}),
				l = async e => {
					let {
						coins: t,
						context: r,
						correlationId: d,
						offerContext: c,
						pennies: l,
						rememberCard: b,
						token: _,
						savedCardId: O
					} = e;
					const p = {
							token: _ ? _.id : void 0,
							coins: t,
							offer_context: c,
							pennies: l,
							remember_card: b,
							card_id: O,
							correlation_id: d
						},
						m = "".concat(r.apiUrl, "/api/v2/gold/stripe/buy_coins"),
						f = Object(i.a)(m);
					return Object(a.a)(Object(s.a)(r, [o.a]), {
						method: n.db.POST,
						endpoint: f,
						data: p
					}).then(u)
				}, b = async e => {
					let {
						coins: t,
						context: r,
						correlationId: d,
						gildParams: c,
						isOldReddit: l,
						offerContext: b,
						pennies: _,
						rememberCard: O,
						thingId: p,
						token: m,
						savedCardId: f
					} = e;
					const {
						gildType: E,
						isAnonymous: j,
						message: h
					} = c, g = {
						token: m ? m.id : void 0,
						coins: t,
						offer_context: b,
						pennies: _,
						thing_id: p,
						gild_type: E,
						message: h ? h.trim() : "",
						is_anonymous: j,
						remember_card: O,
						card_id: f,
						correlation_id: d
					}, D = "".concat(r.apiUrl, "/api/v2/gold/stripe/buy_coins_and_gild"), I = l ? D : Object(i.a)(D);
					return Object(a.a)(Object(s.a)(r, [o.a]), {
						method: n.db.POST,
						endpoint: I,
						data: g
					}).then(u)
				}, _ = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: d,
						isOldReddit: c,
						pennies: l,
						rememberCard: b,
						thingId: _,
						token: O,
						savedCardId: p
					} = e;
					const {
						gildType: m,
						isAnonymous: f,
						message: E
					} = d, j = {
						token: O ? O.id : void 0,
						thing_id: _,
						award_id: m,
						message: E ? E.trim() : "",
						is_anonymous: f,
						pennies: l,
						remember_card: b,
						card_id: p,
						correlation_id: r
					}, h = "".concat(t.apiUrl, "/api/v2/gold/stripe/buy_award"), g = c ? h : Object(i.a)(h);
					return Object(a.a)(Object(s.a)(t, [o.a]), {
						method: n.db.POST,
						endpoint: g,
						data: j
					}).then(u)
				}, O = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: d,
						token: c
					} = e;
					const l = {
							token: c.id,
							pennies: d,
							correlation_id: r
						},
						b = "".concat(t.apiUrl, "/api/v2/gold/stripe/buy_premium_subscription"),
						_ = Object(i.a)(b);
					return Object(a.a)(Object(s.a)(t, [o.a]), {
						method: n.db.POST,
						endpoint: _,
						data: l
					}).then(u)
				}, p = async (e, t) => {
					const r = {
						token: t.id
					};
					return Object(a.a)(Object(s.a)(e, [o.a]), {
						method: n.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/v2/gold/stripe/update_creditcard"),
						data: r
					}).then(e => e.ok ? Object.assign({}, e) : Object.assign(Object.assign({}, e), {
						error: Object(c.a)(e)
					}))
				}, m = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(a.a)(Object(s.a)(e, [o.a]), {
						method: n.db.POST,
						endpoint: "".concat(e.apiUrl, "/api/v2/gold/stripe/delete_creditcard"),
						data: r
					}).then(e => e.ok ? Object.assign({}, e) : Object.assign(Object.assign({}, e), {
						error: Object(c.a)(e)
					}))
				}, f = async e => Object(a.a)(Object(s.a)(e, [o.a]), {
					method: n.db.GET,
					endpoint: "".concat(e.apiUrl, "/api/v2/gold/stripe/creditcards")
				}).then(e => e.ok ? Object.assign({}, e) : Object.assign(Object.assign({}, e), {
					error: Object(c.a)(e)
				}))
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = 500,
				a = 1800,
				s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < a ? 50 : 100 : 2048
				},
				o = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = s(t, r);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			}));
			var n = r("./node_modules/lodash/forEach.js"),
				a = r.n(n),
				s = r("./node_modules/lodash/merge.js"),
				o = r.n(s),
				i = r("./src/lib/env/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/helpers/graphql/helpers.ts"),
				u = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				b = r("./src/reddit/models/GqlTopLevelField.ts"),
				_ = r("./src/reddit/models/Multireddit/index.ts");

			function O(e) {
				const t = {
					multireddits: {},
					multiredditsByUser: {},
					subreddits: {},
					profiles: {}
				};
				if (!e) return t;
				const {
					path: r
				} = e, n = r.toLowerCase(), a = n.endsWith("/") ? n : n + "/", s = {
					created: 0,
					description: e.descriptionContent ? e.descriptionContent.markdown : "",
					descriptionHtml: null,
					descriptionRtJson: e.descriptionContent ? JSON.parse(e.descriptionContent.richtext) : null,
					displayText: e.displayName,
					followerCount: e.followerCount,
					name: e.name,
					icon: e.icon,
					isFavorited: e.isFavorited,
					isFollowed: e.isFollowed,
					isNSFW: e.isNsfw || !1,
					isQuarantined: e.isQuarantined || !1,
					subredditCount: e.subredditCount,
					ownerId: e.ownerInfo.id,
					url: a,
					visibility: e.visibility && e.visibility.toLowerCase() || _.e.Private
				};
				if (s.created = Object(c.d)(e.createdAt) / 1e3, e.sources) {
					s.subredditIds = [], s.profileIds = [];
					for (const {
							node: r
						} of e.sources.edges) {
						if (r.__typename === b.a.Subreddit) s.subredditIds.push(r.id), t.subreddits[r.id] = t.subreddits[r.id] || Object(l.a)(r);
						else if (r.__typename === b.a.Profile) s.profileIds.push(r.id), t.profiles[r.id] = t.profiles[r.id] || Object(u.a)(r);
						else {
							const e = 'Unexpected Multireddit.sources node with type "'.concat(r.__typename, '"');
							Object(i.b)() ? d.c.captureMessage(e) : console.error(e)
						}
						r.isNSFW && (s.isNSFW = !0), r.isQuarantined && (s.isQuarantined = !0)
					}
				}
				return t.multireddits[a] = s, t.multiredditsByUser[e.ownerInfo.id] = [a], t
			}

			function p(e) {
				const t = {},
					r = {},
					n = {},
					s = {},
					i = e.map(O);
				for (const d of i) a()(d.multiredditsByUser, (e, t) => {
					r[t] = [...r[t] || [], ...e]
				}), o()(t, d.multireddits), o()(n, d.profiles), o()(s, d.subreddits);
				return {
					multireddits: t,
					multiredditsByUser: r,
					profiles: n,
					subreddits: s
				}
			}
			t.a = O
		},
		"./src/reddit/helpers/normalizeUsername/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = e => {
				const t = /^((\/u\/)|(u\/))/;
				return /^((\/u\/)|(u\/))(.+)/.test(e) ? e.replace(t, "") : e
			}
		},
		"./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				a = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
					}
					return r
				};
			t.a = (e, t) => {
				const r = Object(n.a)(e),
					{
						wls: s
					} = r,
					o = a(r, ["wls"]);
				return Object.assign(Object.assign({}, o), {
					name: t
				})
			}
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = new Set(["low_coin_upsell"]),
				s = new Set(["new_purchaser", "repeat_purchaser"]),
				o = [{
					prompt: () => n.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => n.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => n.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => n.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => n.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.ib: {
						const r = t.payload;
						return Object.assign(Object.assign({}, e), {
							[r.subredditId]: r.amount
						})
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				subredditLockedCoins: o
			})
		},
		"./src/reddit/selectors/experiments/econAwardKarma.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/user.ts");
			const o = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: s.I,
					experimentName: n.bb
				});
				return !(!t || Object(n.Nc)(t))
			}
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const s = (e, t) => {
				let {
					subredditId: r
				} = t;
				return r && e.features.econPurchase.subredditLockedCoins[r] || 0
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard~Governance~InFeedChaining~Reddit~SubredditHovercard~reddit-components-ClassicPost~re~2f1a95cc.e3508aa5aca4abe84f1b.js.map