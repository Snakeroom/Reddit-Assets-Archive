// https://www.redditstatic.com/desktop2x/gildActions.9b163922931d0d1d3e74.js
// Retrieved at 4/23/2020, 1:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"e3fd25f3fd15"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"df757af47083"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return S
			})), s.d(t, "setIncludeMessage", (function() {
				return G
			})), s.d(t, "updateMessage", (function() {
				return L
			})), s.d(t, "gildGqlRequested", (function() {
				return N
			})), s.d(t, "triggerLoader", (function() {
				return D
			})), s.d(t, "gildPending", (function() {
				return M
			})), s.d(t, "gildFailed", (function() {
				return F
			})), s.d(t, "gildSuccessful", (function() {
				return K
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/messageIframeParent/index.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/models/Gold/Award.ts"),
				l = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				h = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/graphql/operations/GildComment.json"),
				j = s("./src/graphql/operations/GildPost.json"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				k = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const A = (e, t, s) => Object(y.a)(e, Object.assign({}, j, {
					variables: t
				}), {
					query: s ? {} : Object(k.b)()
				}),
				x = (e, t, s) => Object(y.a)(e, Object.assign({}, _, {
					variables: t
				}), {
					query: s ? {} : Object(k.b)()
				});
			var C = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				I = s("./src/reddit/helpers/awards/message.ts"),
				P = s("./src/reddit/helpers/correlationIdTracker.ts"),
				v = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/trackers/gild.ts"),
				T = s("./src/telemetry/index.ts"),
				E = s("./src/reddit/actions/gold/constants.ts");
			const S = Object(n.a)(E.p),
				G = Object(n.a)(E.o),
				L = Object(n.a)(E.s),
				N = (e, t) => async (s, n, a) => {
					let {
						gqlContext: i
					} = a;
					const d = n().gild,
						{
							isOldReddit: c,
							isLivestream: o
						} = t;
					s(M());
					try {
						const t = {
								gildingTypeId: d.selectedAward.id,
								isAnonymous: d.isAnonymous,
								isGildFunded: !1,
								message: Object(I.d)(d.message, d.selectedAward, o),
								nodeId: e
							},
							n = Object(v.a)(e) ? A : x,
							a = await n(i(), {
								input: t
							}, c);
						let u = !1,
							l = null,
							g = null;
						if (a.ok) {
							const e = a.body;
							u = e.data.gild.ok, l = e.data.gild.fieldErrors, g = e.data.gild.errors
						}
						if (u) {
							const t = a.body,
								{
									gild: r
								} = t.data,
								n = Object(v.a)(e) ? a.body.data.gild.postInfo : a.body.data.gild.comment,
								{
									awardings: i,
									treatmentTags: c
								} = n;
							await s(K({
								awardId: d.selectedAward.id,
								awardings: i,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = l && l[0] && l[0].message,
								t = g && g[0] && g[0].message,
								n = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(F(n))
						}
					} catch (u) {
						const e = u,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(F(t))
					} finally {
						Object(P.b)(P.a.GildingFlow)
					}
				}, D = Object(n.a)(E.r), H = Object(n.a)(E.n), M = () => async (e, t) => {
					e(H()), window.setTimeout(() => {
						t().gild.api.pending && e(D())
					}, 2e3)
				}, R = Object(n.a)(E.m), F = e => async (t, s) => {
					await t(R(e)), t(Object(o.e)({
						kind: g.b.Error,
						duration: o.a,
						text: e
					}))
				}, U = Object(n.a)(E.q), B = (e, t) => {
					const {
						id: s
					} = t, r = Object(v.a)(s) ? Object(f.N)(e, {
						postId: s
					}) : Object(b.n)(e, {
						commentId: s
					}), n = Object(w.i)(e), a = e.gild, {
						isAnonymous: i
					} = a, d = !i && n && (n.username || n.displayText) ? n.username || n.displayText : void 0, c = r ? r.author : void 0, o = Object(O.H)(e, {
						thingId: s
					});
					return U(Object.assign({}, t, {
						gilder: d,
						gildee: c,
						subredditId: o && o.id
					}))
				}, K = e => async (t, s) => {
					const n = s(),
						{
							awardId: b,
							id: w
						} = e,
						_ = Object(p.a)(n, b);
					if (Object(m.h)(n)) {
						const e = "success.gild",
							t = {},
							s = _.icon32 ? _.icon32.url : _.icon.url;
						t.awardId = b, t.awardIcon = s, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (_.awardType === u.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(O.H)(n, {
								thingId: w
							}),
							s = t && Object(O.A)(n, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - _.coinPrice)
					}
					t(B(n, e)), (n.posts.instances[w] || []).forEach(s => {
						t(B(n, Object.assign({}, e, {
							id: s
						})))
					});
					const j = Object(v.a)(w) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", _.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", _.name)], {
							hk: "2sIK9Y"
						}),
						y = _.coinPrice;
					Object(T.a)(Object(q.viewSuccessAwardEvent)(w, y, _)(n)), t(Object(o.e)({
						kind: g.b.SuccessCommunity,
						text: j
					})), setTimeout(() => {
						const e = Object(C.a)(b, w),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const k = Object(v.a)(w) && Object(l.i)(Object(f.N)(n, {
						postId: w
					}));
					await t(Object(d.a)()), Object(h.c)(s()).length && setTimeout(() => t(Object(c.i)(i.a.GOLD_DEAL_AFTER_GILD)), k ? 600 : 10)
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				u = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = s("./src/reddit/endpoints/gold/purchase.ts");
			const g = e => e.map(e => ({
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
				})),
				b = e => e.map(e => ({
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
				p = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null;

			function m(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: s,
					deals: r,
					premium_packages: n
				} = e.body, a = {
					activeSaleConfig: p(t),
					coinPackages: g(s),
					dealCoinPackages: g(r),
					premiumPackages: b(n)
				};
				return Object.assign({}, e, {
					body: a
				})
			}
			var h = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(n.a)(h.g),
				O = Object(n.a)(h.h),
				w = Object(n.a)(h.f),
				_ = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					e(f());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(u.a)(t);
							return Object(d.b)(Object(c.a)(e, [o.a]), {
								method: i.ab.GET,
								endpoint: s
							}).then(l.c).then(m)
						})(n());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(O(s))
					} catch (g) {
						a.c.captureException(g);
						const t = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(w(t))
					}
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const r = 500,
				n = 1800,
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < r ? 0 : e.coinPrice < n ? 50 : 100 : 2048
				},
				i = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const r = a(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/selectors/gold/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			const r = e => e.goldPurchase.purchaseCatalog.activeSaleConfig,
				n = e => e.goldPurchase.purchaseCatalog.coinPackages,
				a = e => e.goldPurchase.purchaseCatalog.dealCoinPackages,
				i = e => e.goldPurchase.purchaseCatalog.premiumPackages,
				d = e => e.goldPurchase.purchaseCatalog.pending,
				c = e => e.goldPurchase.purchaseCatalog.errorMessage
		}
	}
]);
//# sourceMappingURL=gildActions.9b163922931d0d1d3e74.js.map