// https://www.redditstatic.com/desktop2x/gildActions.2de3218fb0c3e768100f.js
// Retrieved at 5/13/2020, 6:00:06 PM by Reddit Dataminer v1.0.0
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
				return N
			})), s.d(t, "updateMessage", (function() {
				return G
			})), s.d(t, "gildGqlRequested", (function() {
				return L
			})), s.d(t, "triggerLoader", (function() {
				return D
			})), s.d(t, "gildPending", (function() {
				return B
			})), s.d(t, "gildFailed", (function() {
				return U
			})), s.d(t, "gildSuccessful", (function() {
				return K
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/messageIframeParent/index.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				a = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				o = s("./src/reddit/models/Gold/Award.ts"),
				l = s("./src/reddit/models/Gold/Coins/index.ts"),
				u = s("./src/reddit/models/Post/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/gild.ts"),
				f = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				j = s("./src/graphql/operations/GildComment.json"),
				w = s("./src/graphql/operations/GildPost.json"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				I = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const k = (e, t, s) => Object(y.a)(e, Object.assign({}, w, {
					variables: t
				}), {
					query: s ? {} : Object(I.b)()
				}),
				x = (e, t, s) => Object(y.a)(e, Object.assign({}, j, {
					variables: t
				}), {
					query: s ? {} : Object(I.b)()
				});
			var A = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				v = s("./src/reddit/helpers/awards/message.ts"),
				P = s("./src/reddit/helpers/correlationIdTracker.ts"),
				C = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/trackers/gild.ts"),
				T = s("./src/telemetry/index.ts"),
				E = s("./src/reddit/actions/gold/constants.ts");
			const S = Object(i.a)(E.p),
				N = Object(i.a)(E.o),
				G = Object(i.a)(E.s),
				L = (e, t) => async (s, i, r) => {
					let {
						gqlContext: d
					} = r;
					const a = i().gild,
						{
							isOldReddit: c,
							isLivestream: o
						} = t;
					s(B());
					try {
						const t = {
								gildingTypeId: a.selectedAward.id,
								isAnonymous: a.isAnonymous,
								isGildFunded: !1,
								message: Object(v.d)(a.message, a.selectedAward, o),
								nodeId: e
							},
							i = Object(C.a)(e) ? k : x,
							r = await i(d(), {
								input: t
							}, c);
						let l = !1,
							u = null,
							b = null;
						if (r.ok) {
							const e = r.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (l) {
							const t = r.body,
								{
									gild: n
								} = t.data,
								i = Object(C.a)(e) ? r.body.data.gild.postInfo : r.body.data.gild.comment,
								{
									awardings: d,
									treatmentTags: c
								} = i;
							await s(K({
								awardId: a.selectedAward.id,
								awardings: d,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = b && b[0] && b[0].message,
								i = e || t || n.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(U(i))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(U(t))
					} finally {
						Object(P.b)(P.a.GildingFlow)
					}
				}, D = Object(i.a)(E.r), M = Object(i.a)(E.n), B = () => async (e, t) => {
					e(M()), window.setTimeout(() => {
						t().gild.api.pending && e(D())
					}, 2e3)
				}, R = Object(i.a)(E.m), U = e => async (t, s) => {
					await t(R(e)), t(Object(c.e)({
						kind: b.b.Error,
						duration: c.a,
						text: e
					}))
				}, F = Object(i.a)(E.q), H = (e, t) => {
					const {
						id: s
					} = t, n = Object(C.a)(s) ? Object(h.N)(e, {
						postId: s
					}) : Object(g.n)(e, {
						commentId: s
					}), i = Object(O.i)(e), r = e.gild, {
						isAnonymous: d
					} = r, a = !d && i && (i.username || i.displayText) ? i.username || i.displayText : void 0, c = n ? n.author : void 0, o = Object(_.I)(e, {
						thingId: s
					});
					return F(Object.assign({}, t, {
						gilder: a,
						gildee: c,
						subredditId: o && o.id
					}))
				}, K = e => async (t, s) => {
					const i = s(),
						{
							awardId: g,
							id: O
						} = e,
						j = Object(p.a)(i, g);
					if (Object(m.h)(i)) {
						const e = "success.gild",
							t = {},
							s = j.icon32 ? j.icon32.url : j.icon.url;
						t.awardId = g, t.awardIcon = s, Object(r.a)({
							type: e,
							data: t
						})
					}
					if (j.awardType === o.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(_.I)(i, {
								thingId: O
							}),
							s = t && Object(_.B)(i, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - j.coinPrice)
					}
					t(H(i, e)), (i.posts.instances[O] || []).forEach(s => {
						t(H(i, Object.assign({}, e, {
							id: s
						})))
					});
					const w = Object(C.a)(O) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", j.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", j.name)], {
							hk: "2sIK9Y"
						}),
						y = j.coinPrice;
					Object(T.a)(Object(q.viewSuccessAwardEvent)(O, y, j)(i)), t(Object(c.e)({
						kind: b.b.SuccessCommunity,
						text: w
					})), setTimeout(() => {
						const e = Object(A.a)(g, O),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const I = Object(C.a)(O) && Object(u.i)(Object(h.N)(i, {
						postId: O
					}));
					await t(Object(a.a)());
					const k = Object(f.d)(s()).filter(e => l.a.has(e.dealInfo.type));
					k.length && setTimeout(() => t(Object(d.h)({
						packageId: k[0].mobileId
					})), I ? 600 : 10)
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				l = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/endpoints/gold/purchase.ts");
			const b = e => ({
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
				g = e => e.map(b),
				p = e => e.map(e => {
					const t = b(e);
					return Object.assign({}, t, {
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					})
				}),
				m = e => e.map(e => ({
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
				f = e => e ? {
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
					coin_packages: s,
					deals: n,
					premium_packages: i
				} = e.body, r = {
					activeSaleConfig: f(t),
					coinPackages: g(s),
					dealCoinPackages: p(n),
					premiumPackages: m(i)
				};
				return Object.assign({}, e, {
					body: r
				})
			}
			var _ = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(i.a)(_.g),
				j = Object(i.a)(_.h),
				w = Object(i.a)(_.f),
				y = () => async (e, t, s) => {
					let {
						apiContext: i
					} = s;
					e(O());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(l.a)(t);
							return Object(a.b)(Object(c.a)(e, [o.a]), {
								method: d.ab.GET,
								endpoint: s
							}).then(u.c).then(h)
						})(i());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(j(s))
					} catch (b) {
						r.c.captureException(b);
						const t = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(w(t))
					}
				}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return d
			}));
			const n = 500,
				i = 1800,
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < i ? 50 : 100 : 2048
				},
				d = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = r(t, s);
					return e.slice(0, n)
				}
		}
	}
]);
//# sourceMappingURL=gildActions.2de3218fb0c3e768100f.js.map