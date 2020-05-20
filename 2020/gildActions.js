// https://www.redditstatic.com/desktop2x/gildActions.fe0a11ccf9aed565aea8.js
// Retrieved at 5/20/2020, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["gildActions"], {
		"./src/graphql/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/graphql/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return D
			})), s.d(t, "setIncludeMessage", (function() {
				return U
			})), s.d(t, "updateMessage", (function() {
				return B
			})), s.d(t, "gildGqlRequested", (function() {
				return F
			})), s.d(t, "triggerLoader", (function() {
				return H
			})), s.d(t, "gildPending", (function() {
				return Z
			})), s.d(t, "gildFailed", (function() {
				return z
			})), s.d(t, "gildSuccessful", (function() {
				return X
			})), s.d(t, "awardKarmaUpdated", (function() {
				return W
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/messageIframeParent/index.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				o = s("./node_modules/react/index.js"),
				l = s.n(o),
				u = s("./src/reddit/models/Gold/Award.ts"),
				b = s("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				m = s.n(b);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => p._("Sent! You earned {=awarder karma}", [p._param("=awarder karma", l.a.createElement("a", {
				className: m.a.karmaLink,
				href: u.a,
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
			var f = s("./src/reddit/models/Gold/Coins/index.ts"),
				w = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/comments.ts"),
				O = s("./src/reddit/selectors/communityAwards.ts"),
				j = s("./src/reddit/selectors/experiments/econAwardKarma.ts"),
				y = s("./src/reddit/selectors/gild.ts"),
				k = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				v = s("./src/graphql/operations/GildComment.json"),
				P = s("./src/graphql/operations/GildPost.json"),
				C = s("./src/lib/makeGqlRequest/index.ts"),
				T = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const q = (e, t, s) => Object(C.a)(e, Object.assign({}, P, {
					variables: t
				}), {
					query: s ? {} : Object(T.b)()
				}),
				S = (e, t, s) => Object(C.a)(e, Object.assign({}, v, {
					variables: t
				}), {
					query: s ? {} : Object(T.b)()
				});
			var E = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				K = s("./src/reddit/helpers/awards/message.ts"),
				N = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/isPost.ts"),
				L = s("./src/reddit/helpers/trackers/gild.ts"),
				R = s("./src/telemetry/index.ts"),
				M = s("./src/reddit/actions/gold/constants.ts");
			const D = Object(a.a)(M.q),
				U = Object(a.a)(M.p),
				B = Object(a.a)(M.t),
				F = (e, t) => async (s, a, n) => {
					let {
						gqlContext: d
					} = n;
					const i = a().gild,
						{
							isOldReddit: c,
							isLivestream: o
						} = t;
					s(Z());
					try {
						const t = {
								gildingTypeId: i.selectedAward.id,
								isAnonymous: i.isAnonymous,
								isGildFunded: !1,
								message: Object(K.d)(i.message, i.selectedAward, o),
								nodeId: e
							},
							a = Object(G.a)(e) ? q : S,
							n = await a(d(), {
								input: t
							}, c);
						let l = !1,
							u = null,
							b = null;
						if (n.ok) {
							const e = n.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, b = e.data.gild.errors
						}
						if (l) {
							const t = n.body,
								{
									gild: r
								} = t.data,
								a = Object(G.a)(e) ? n.body.data.gild.postInfo : n.body.data.gild.comment,
								{
									awardings: d,
									treatmentTags: c
								} = a;
							await s(X({
								awardId: i.selectedAward.id,
								awardings: d,
								awardKarmaReceived: r.awardKarmaReceived,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: c
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = b && b[0] && b[0].message,
								a = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(z(a))
						}
					} catch (l) {
						const e = l,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(z(t))
					} finally {
						Object(N.b)(N.a.GildingFlow)
					}
				}, H = Object(a.a)(M.s), Y = Object(a.a)(M.o), Z = () => async (e, t) => {
					e(Y()), window.setTimeout(() => {
						t().gild.api.pending && e(H())
					}, 2e3)
				}, J = Object(a.a)(M.n), z = e => async (t, s) => {
					await t(J(e)), t(Object(c.e)({
						kind: h.b.Error,
						duration: c.a,
						text: e
					}))
				}, Q = Object(a.a)(M.r), V = (e, t) => {
					const {
						id: s
					} = t, r = Object(G.a)(s) ? Object(x.O)(e, {
						postId: s
					}) : Object(_.n)(e, {
						commentId: s
					}), a = Object(I.i)(e), n = e.gild, {
						isAnonymous: d
					} = n, i = !d && a && (a.username || a.displayText) ? a.username || a.displayText : void 0, c = r ? r.author : void 0, o = Object(A.I)(e, {
						thingId: s
					});
					return Q(Object.assign({}, t, {
						gilder: i,
						gildee: c,
						subredditId: o && o.id
					}))
				}, X = e => async (t, s) => {
					const a = s(),
						{
							awardId: o,
							id: l
						} = e,
						b = Object(O.a)(a, o),
						m = Object(j.a)(a),
						p = e.awardKarmaReceived,
						_ = Object(I.i)(a);
					if (Object(y.h)(a)) {
						const e = "success.gild",
							t = {},
							s = b.icon32 ? b.icon32.url : b.icon.url;
						t.awardId = o, t.awardIcon = s, Object(n.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === u.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(A.I)(a, {
								thingId: l
							}),
							s = t && Object(A.B)(a, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - b.coinPrice)
					}
					if (t(V(a, e)), _ && _.displayName) {
						const e = _.awarderKarma + p;
						t(W({
							userName: _.displayName,
							awarderKarma: e
						}))
					}(a.posts.instances[l] || []).forEach(s => {
						t(V(a, Object.assign({}, e, {
							id: s
						})))
					});
					const v = Object(G.a)(l) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						P = b.coinPrice;
					Object(R.a)(Object(L.viewSuccessAwardEvent)(l, P, b)(a));
					const C = b.icon64 ? b.icon64.url : b.icon.url;
					t(Object(c.e)({
						customIconAsset: C,
						kind: h.b.SuccessAward,
						text: m && p > 0 ? g({
							awarderKarmaReceived: p
						}) : v
					})), setTimeout(() => {
						const e = Object(E.a)(o, l),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const T = Object(G.a)(l) && Object(w.i)(Object(x.O)(a, {
						postId: l
					}));
					await t(Object(i.a)());
					const q = Object(k.d)(s()).filter(e => f.a.has(e.dealInfo.type));
					q.length && setTimeout(() => t(Object(d.h)({
						packageId: q[0].mobileId
					})), T ? 600 : 10)
				}, W = Object(a.a)(M.a)
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/sentry/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
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
				m = e => e.map(b),
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
				g = e => e.map(e => ({
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

			function w(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: s,
					deals: r,
					premium_packages: a
				} = e.body, n = {
					activeSaleConfig: f(t),
					coinPackages: m(s),
					dealCoinPackages: p(r),
					premiumPackages: g(a)
				};
				return Object.assign({}, e, {
					body: n
				})
			}
			var h = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const _ = Object(a.a)(h.g),
				O = Object(a.a)(h.h),
				j = Object(a.a)(h.f),
				y = () => async (e, t, s) => {
					let {
						apiContext: a
					} = s;
					e(_());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(l.a)(t);
							return Object(i.b)(Object(c.a)(e, [o.a]), {
								method: d.ab.GET,
								endpoint: s
							}).then(u.c).then(w)
						})(a());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(O(s))
					} catch (b) {
						n.c.captureException(b);
						const t = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(j(t))
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
			const r = (e, t) => "awardItem__".concat(t, "-").concat(e)
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return d
			}));
			const r = 500,
				a = 1800,
				n = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < r ? 0 : e.coinPrice < a ? 50 : 100 : 2048
				},
				d = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const r = n(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/selectors/experiments/econAwardKarma.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const d = e => {
				const t = Object(a.c)(e, {
					experimentEligibilitySelector: n.H,
					experimentName: r.Y
				});
				return !(!t || Object(r.vc)(t))
			}
		}
	}
]);
//# sourceMappingURL=gildActions.fe0a11ccf9aed565aea8.js.map