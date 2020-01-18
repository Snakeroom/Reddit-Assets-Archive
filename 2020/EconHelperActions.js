// https://www.redditstatic.com/desktop2x/EconHelperActions.30e17424f4bb499d25c0.js
// Retrieved at 1/18/2020, 7:00:24 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchAll", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/curry.js"),
				n = s.n(r),
				o = s("./src/reddit/actions/badge.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				d = s("./src/reddit/actions/economics/tips/thunkedActions.ts"),
				i = s("./src/reddit/actions/governance/communityDetails.ts"),
				a = s("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				u = s("./src/reddit/featureFlags/index.ts");
			const m = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				p = n()((e, t) => t.some(t => u.d[t](e))),
				l = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const {
						commentIds: u = [],
						postIds: l = [],
						skip: b = []
					} = e;
					let f = e.subredditId;
					if (!f) {
						e.subredditName && (f = m[e.subredditName.toLowerCase()])
					}
					if (!f) return;
					const g = [],
						h = l.concat(u),
						y = s(),
						j = p(y),
						O = y.comments.models,
						P = y.posts.models,
						v = new Set(y.user.account ? [y.user.account.id] : []);
					l.forEach(e => {
						const t = P[e];
						t && v.add(t.authorId)
					}), u.forEach(e => {
						const t = O[e];
						t && v.add(t.authorId)
					});
					const w = Array.from(v);
					!b.includes("badges") && w.length && j(["spBadges", "spLoadtest", "spPremium"]) && g.push(t(Object(o.l)({
						subredditId: f,
						userIds: w
					}))), !b.includes("communityDetails") && j(["spKarmaPoints", "spLoadtest", "spPoints", "spSupport"]) && g.push(t(Object(i.a)({
						subredditId: f
					}))), !b.includes("subscription") && j(["spLoadtest", "spPremium"]) && g.push(t(Object(c.f)(f))), !b.includes("tips") && h.length && j(["spLoadtest", "spSupport"]) && g.push(t(Object(d.a)({
						subredditId: f,
						contentIds: h
					}))), !b.includes("wallets") && w.length && j(["spKarmaPoints", "spLoadtest", "spPoints"]) && g.push(t(Object(a.a)({
						subredditId: f,
						userIds: w
					}))), await Promise.all(g)
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return b
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(n.a),
				c = Object(r.a)(n.b),
				d = Object(r.a)(n.c),
				i = Object(r.a)(n.d),
				a = Object(r.a)(n.e),
				u = Object(r.a)(n.f),
				m = (Object(r.a)(n.g), Object(r.a)(n.h)),
				p = Object(r.a)(n.i),
				l = Object(r.a)(n.j),
				b = Object(r.a)(n.k)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forOwn.js"),
				n = s.n(r),
				o = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/endpoints/economics/emojis.ts"),
				d = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = s("./src/reddit/endpoints/governance/badges.ts"),
				u = s("./src/config.ts"),
				m = s("./src/reddit/endpoints/governance/requester.ts");

			function p(e, t, s) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: "".concat(u.a.metaUrl, "/products/").concat(t, "?owners=").concat(s) + "&types=emotes_pack,giphy"
				})
			}
			var l = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				f = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = s("./src/reddit/selectors/economics.ts"),
				y = s("./src/reddit/selectors/products.ts"),
				j = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function P(e) {
				if (!O(e)) return e
			}
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "c", (function() {
				return k
			}));
			const v = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				const n = t().user.account,
					o = !t().economics.specialMemberships.allSubscriptionsFetched;
				if (n && o) {
					const t = await Object(d.b)(r());
					if (t.ok) {
						e(Object(j.a)(t.body));
						const s = Object.keys(t.body);
						if (s.length) {
							const t = await Object(d.e)(r(), s);
							t.ok && e(Object(j.g)(t.body))
						}
					}
				}
			}, w = (e, t) => async (s, r, n) => {
				let {
					apiContext: o
				} = n;
				const c = r().user.account,
					d = r().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (c && a) {
					const t = await Object(i.a)(o(), e, c.id);
					s(Object(j.i)(t))
				}
			}, I = e => async (t, s, r) => {
				let {
					apiContext: n
				} = r;
				const c = s(),
					d = c.user.account,
					i = Object(h.f)(c, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let s, r;
					s = e.placement === l.a.First ? i[b.a.Loyalty] : e.placement === l.a.Second ? i[b.a.Achievement] : i[b.a.Cosmetic], t(Object(j.b)(Object.assign({}, e, {
						badge: P(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), O(e.badge) && s ? r = await Object(a.a)(n(), e.subredditId, s.id, !1) : O(e.badge) || (r = await Object(a.a)(n(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(j.b)(Object.assign({}, e, {
						badge: s,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(o.a)(t, r.error))
				}
			}, x = (e, t) => async (s, r, n) => {
				let {
					apiContext: o
				} = n;
				await s(w(e, !0));
				const c = r().economics.subredditPremium[e];
				if (c && c.status === g.a.Fetched) {
					const r = c.data.userOwnedBadges.find(e => e.type === t.id);
					r && (s(I({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), s(Object(j.e)(b.c.MyBadges)))
				}
			}, S = e => async (t, s, r) => {
				let {
					apiContext: d
				} = r;
				const i = s().user.account,
					a = !s().economics.emotes[e],
					u = !s().economics.gifs[e];
				if (i && (a || u)) {
					const [s, r] = await Promise.all([Object(c.b)(d(), e), p(d(), e, i.id)]);
					if (!r.ok) return void Object(o.a)(t, r.error);
					const a = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					n()(r.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(j.f)({
						subredditId: e,
						products: a
					}))
				}
			}, k = (e, t, s) => async (r, n, o) => {
				let {
					apiContext: c
				} = o;
				if (await r(w(e, !0)), s && t) {
					const s = n(),
						o = Object(h.f)(s, e),
						c = Object(y.a)(s, t);
					if (!o[Object(b.d)(c.placement)] && c) {
						const t = Object(h.l)(s, {
							subredditId: e,
							badge: c
						});
						t && await r(I({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(j.d)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/economics/tips/thunkedActions.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/endpoints/economics/tips.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/economics/tips/constants.ts");
			const c = Object(n.a)(o.a);
			s.d(t, "a", (function() {
				return d
			}));
			const d = e => async (t, s, n) => {
				let {
					apiContext: o
				} = n;
				const d = await Object(r.a)(o(), e);
				d.ok && t(c({
					subredditId: e.subredditId,
					tipData: d.body
				}))
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			}));
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(n.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/orders"),
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				c = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts"),
				d = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function i(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function a(e) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/users/me"),
					method: "get"
				}).then(e => e.ok ? e.body.specialMemberships ? Object.assign({}, e, {
					body: e.body.specialMemberships
				}) : Object.assign({}, e, {
					body: {}
				}) : e)
			}

			function u(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.trial ? "trial_membership" : "membership",
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function p(e, t) {
				return Object(c.a)(Object(n.a)(e, [o.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(d.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign({}, e, {
							body: t
						})
					}
					return e
				})
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/merge.js"),
				n = s.n(r),
				o = s("./src/config.ts"),
				c = s("./src/reddit/endpoints/governance/badges.ts"),
				d = s("./src/reddit/endpoints/governance/community.ts"),
				i = s("./src/reddit/endpoints/governance/products/badges.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, s) {
				const r = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					u = function(e, t) {
						return Object(a.a)(e, {
							method: "get",
							endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					m = Object(d.a)(e, {
						subredditId: t
					}),
					p = Object(i.b)(e, t),
					l = Object(c.c)(e, t, s),
					[b, f, g, h] = await Promise.all([u, m, p, l]);
				if (b.ok ? r.collections = b.body : r.errors.collections = b.error, f.ok) {
					const e = f.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return g.ok ? r.products = g.body : r.errors.products = g.error, h.ok ? (n()(r.badges, h.body.badges), r.userOwnedBadges = h.body.userOwnedBadges) : r.errors.userBadges = h.error, r
			}
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			const m = (e, t) => Object(a.a)(e, {
				endpoint: "".concat(o.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = "giphy|",
				n = "|downsized";

			function o(e, t) {
				return r + e + (t ? n : "")
			}

			function c(e) {
				return e && 0 === e.indexOf(r)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(c)
			}

			function i(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, o;
			s.d(t, "c", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})), s.d(t, "d", (function() {
					return c
				})), s.d(t, "e", (function() {
					return d
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}));
			const c = () => ({
					cardCVCComplete: !1,
					cardExpiryComplete: !1,
					cardNumberComplete: !1,
					name: "",
					postalCodeComplete: !1,
					saveCard: !1,
					type: n.NewStripe
				}),
				d = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return b
			})), s.d(t, "q", (function() {
				return f
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "j", (function() {
				return j
			})), s.d(t, "A", (function() {
				return O
			})), s.d(t, "l", (function() {
				return P
			})), s.d(t, "m", (function() {
				return v
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "k", (function() {
				return x
			})), s.d(t, "o", (function() {
				return S
			})), s.d(t, "a", (function() {
				return k
			})), s.d(t, "p", (function() {
				return A
			})), s.d(t, "r", (function() {
				return F
			})), s.d(t, "s", (function() {
				return B
			})), s.d(t, "t", (function() {
				return N
			})), s.d(t, "z", (function() {
				return D
			})), s.d(t, "v", (function() {
				return L
			})), s.d(t, "w", (function() {
				return M
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "n", (function() {
				return T
			})), s.d(t, "c", (function() {
				return q
			})), s.d(t, "x", (function() {
				return K
			})), s.d(t, "u", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				o = s("./src/reddit/helpers/richTextJson/index.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				d = s("./src/reddit/models/Badge/managementPage.ts"),
				i = s("./src/reddit/models/Payments/index.ts"),
				a = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = s("./src/reddit/selectors/comments.ts"),
				l = function(e, t) {
					var s = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
					}
					return s
				};
			const b = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === m.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[d.a.Loyalty]: r.find(e => e.placement === c.a.First),
							[d.a.Achievement]: r.find(e => e.placement === c.a.Second),
							[d.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				},
				f = (e, t, s) => {
					if (!r.d.spBadges(e) && !r.d.spPremium(e)) return [];
					const o = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(n.a)(o.map(t => e.badges.models[t]).filter(Boolean))
				},
				g = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				h = (e, t) => {
					const s = N(e, t);
					return !!s && !!s.creator
				},
				y = (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = e.subreddits.gov.communityJar[s];
					return r ? r.usdr : void 0
				},
				j = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function O(e, t) {
				const s = e.economics.specialMemberships.data[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function P(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(c.c)(s) && s.userId === n) return s;
				const o = e.badges.models,
					d = e.user.ownedBadges[r] || {},
					i = Object(c.c)(s) ? s.type : s.id;
				return Object.keys(d).map(e => o[e]).find(e => e && e.type === i)
			}

			function v(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					if (s === d.a.Loyalty || s === d.a.Achievement) return n.data.collections[s];
					if (s === d.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return []
			}

			function w(e, t) {
				const s = v(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function I(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(c.d)
				}
				return []
			}

			function x(e, t) {
				return v(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(c.d)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: "".concat(r.brand, " •••• ").concat(r.last4),
							id: s,
							type: i.b.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: i.b.SavedPayPal
						})
					}
				}
				return t
			};
			var k;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(k || (k = {}));
			const A = e => e.economics.paymentSystems.status === u.a.NotFetched ? k.NotFetched : e.economics.paymentSystems.status === u.a.Pending ? k.Fetching : k.Fetched,
				C = {
					allowTrial: !0,
					price: "0",
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				_ = {
					t5_vsb5g: "5000000000000000000000",
					t5_37jgj: "5000000000000000000000"
				},
				F = (e, t) => {
					const s = e.economics.specialMemberships.data[t || ""],
						n = e.subreddits.gov.meta[t || ""],
						o = s && s.active && s.active.membership,
						c = n && n.extra && n.extra.nomenclature || C;
					let d = C.price;
					if (o) d = o.price;
					else {
						const s = Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t)[0];
						s && s.price && (d = s.price)
					}
					return d = _[t || ""] || d, {
						allowTrial: r.d.spFreeTrialSubscriptions(e),
						price: d,
						member: c.member || C.member,
						memberPlural: c.memberPlural || C.memberPlural,
						memberAlt: c.memberAlt || C.memberAlt,
						memberAltPlural: c.memberAltPlural || C.memberAltPlural,
						membership: c.membership || C.membership,
						membershipAlt: c.membershipAlt || C.membershipAlt
					}
				},
				B = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: s
								} = t,
								r = l(t, ["anonymous"]),
								n = Object.keys(r),
								o = n.map(e => Object.assign({
									id: e
								}, r[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								c = s ? parseInt(s.amount) : 0,
								d = s ? s.numUsers : 0,
								i = o.slice(5),
								a = o.slice(0, 5);
							return {
								allTippers: new Set(n),
								topTippers: {
									list: a,
									others: {
										amount: String(i.reduce((e, t) => e + parseInt(t.amount), c)),
										count: i.length + d
									},
									ranking: a.reduce((e, t, s) => (e[t.id] = s + 1, e), {})
								}
							}
						}
					}
				},
				N = (e, t) => {
					const s = e.economics.tipDetails[t.subredditId];
					if (s) {
						const e = s[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var E;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(E || (E = {}));
			const U = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = T(e, t),
							r = Date.now();
						return s && r < s ? E.Subscribed : E.NotSubscribed
					}
					return E.DontKnow
				},
				T = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				q = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				K = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				G = (e, t, s) => {
					const n = r.d.spGiphy(e),
						c = K(e, t),
						d = "replyToPost" !== s && Object(p.n)(e, {
							commentId: s
						}),
						i = !!d && Object(o.a)(d);
					return n && (c || i)
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === r.a.Badge) return s
				},
				o = (e, t) => {
					let {
						productId: s
					} = t;
					const r = e.products.models[s];
					if (r) {
						const t = r.subredditId,
							n = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							c = Date.now();
						let d = !1;
						return n.forEach(e => {
							const t = o[e];
							t && t.type === s && t.endsAt > c && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=EconHelperActions.30e17424f4bb499d25c0.js.map