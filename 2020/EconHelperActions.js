// https://www.redditstatic.com/desktop2x/EconHelperActions.b0ad3e7502a36bc3b122.js
// Retrieved at 7/9/2020, 4:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/bignumber.js/bignumber.js");

			function n(e, t) {
				const r = new s.BigNumber(e),
					n = new s.BigNumber(t),
					c = new s.BigNumber(r.dividedBy(n)),
					o = new s.BigNumber("100").multipliedBy(c);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "fetchAll", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/curry.js"),
				n = r.n(s),
				c = r("./src/reddit/actions/badge.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				d = r("./src/reddit/actions/governance/communityDetails.ts"),
				i = r("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				a = r("./src/reddit/featureFlags/index.ts");
			const u = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				m = n()((e, t) => t.some(t => a.d[t](e))),
				b = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const {
						commentIds: a = [],
						postIds: b = [],
						skip: l = []
					} = e;
					let p = e.subredditId;
					if (!p) {
						e.subredditName && (p = u[e.subredditName.toLowerCase()])
					}
					if (!p) return;
					const f = [],
						g = r(),
						h = m(g),
						y = g.comments.models,
						j = g.posts.models,
						O = new Set(g.user.account ? [g.user.account.id] : []);
					b.forEach(e => {
						const t = j[e];
						t && O.add(t.authorId)
					}), a.forEach(e => {
						const t = y[e];
						t && O.add(t.authorId)
					});
					const w = Array.from(O);
					!l.includes("badges") && w.length && h(["spBadges", "spLoadtest", "spPremium"]) && f.push(t(Object(c.l)({
						subredditId: p,
						userIds: w
					}))), !l.includes("communityDetails") && h(["spKarmaPoints", "spLoadtest", "spPoints", "spSupport"]) && f.push(t(Object(d.a)({
						subredditId: p
					}))), !l.includes("subscription") && h(["spLoadtest", "spPremium"]) && f.push(t(Object(o.f)(p))), !l.includes("wallets") && w.length && h(["spKarmaPoints", "spLoadtest", "spPoints"]) && f.push(t(Object(i.a)({
						subredditId: p,
						userIds: w
					}))), await Promise.all(f)
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeRequest/index.ts"),
				c = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(o.a)(e, {
					method: "get",
					endpoint: "".concat(c.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
				})
			}
			var i = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const u = Object(i.a)(a.a),
				m = Object(i.a)(a.b),
				b = Object(i.a)(a.c),
				l = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return async (t, r, s) => {
						let {
							apiContext: n
						} = s;
						const c = r();
						if (!c.economics.me.fetched || e && !c.economics.me.data.specialMemberships) {
							const r = await d(n(), e);
							if (r.ok) {
								const s = r.body;
								e && !s.specialMemberships && (s.specialMemberships = {}), t(u(s))
							}
						}
					}
				},
				p = () => async (e, t) => {
					const r = t(),
						c = r.economics.me.data;
					if (!c) throw new Error("me data required for copy to be fetched");
					if (!r.economics.pointsCopy.fetched) {
						e(m());
						const t = "https://".concat(c.pointsDocsBaseUrl, "v1.json?web"),
							r = await Object(n.b)({
								endpoint: t,
								method: s.db.GET
							});
						r.ok && r.body && e(b(r.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return l
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(s.a)(n.a),
				o = Object(s.a)(n.b),
				d = Object(s.a)(n.c),
				i = Object(s.a)(n.d),
				a = Object(s.a)(n.e),
				u = (Object(s.a)(n.f), Object(s.a)(n.g)),
				m = Object(s.a)(n.h),
				b = Object(s.a)(n.i),
				l = Object(s.a)(n.j)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "c", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/forOwn.js"),
				n = r.n(s),
				c = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/endpoints/economics/emojis.ts"),
				d = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = r("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts"),
				u = r("./src/config.ts"),
				m = r("./src/reddit/endpoints/governance/requester.ts");

			function b(e, t, r) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: "".concat(u.a.metaUrl, "/products/").concat(t, "?owners=").concat(r) + "&types=emotes_pack,giphy"
				})
			}
			var l = r("./src/reddit/models/Badge/index.ts"),
				p = r("./src/reddit/models/Badge/managementPage.ts"),
				f = r("./src/reddit/models/Product/index.ts"),
				g = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = r("./src/reddit/selectors/economics.ts"),
				y = r("./src/reddit/selectors/products.ts"),
				j = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function w(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!w(e)) return e
			}
			const P = () => async (e, t, r) => {
				let {
					apiContext: s
				} = r;
				if (!t().user.account) return;
				await e(Object(j.b)(!0));
				const n = t().economics.me.data.specialMemberships || {},
					c = Object.keys(n);
				if (c.length) {
					const t = await Object(d.d)(s(), c);
					t.ok && e(Object(O.f)(t.body))
				}
			}, I = (e, t) => async (r, s, n) => {
				let {
					apiContext: c
				} = n;
				const o = s().user.account,
					d = s().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (o && a) {
					const t = await Object(i.a)(c(), e, o.id);
					r(Object(O.h)(t))
				}
			}, x = e => async (t, r, s) => {
				let {
					apiContext: n
				} = s;
				const o = r(),
					d = o.user.account,
					i = Object(h.f)(o, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let r, s;
					r = e.placement === l.a.First ? i[p.a.Loyalty] : e.placement === l.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(O.a)(Object.assign({}, e, {
						badge: v(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), w(e.badge) && r ? s = await Object(a.a)(n(), e.subredditId, r.id, !1) : w(e.badge) || (s = await Object(a.a)(n(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(O.a)(Object.assign({}, e, {
						badge: r,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(c.a)(t, s.error))
				}
			}, k = (e, t) => async (r, s, n) => {
				let {
					apiContext: c
				} = n;
				await r(I(e, !0));
				const o = s().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const s = o.data.userOwnedBadges.find(e => e.type === t.id);
					s && (r(x({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), r(Object(O.d)(p.c.MyBadges)))
				}
			}, A = e => async (t, r, s) => {
				let {
					apiContext: d
				} = s;
				const i = r().user.account,
					a = !r().economics.emotes[e],
					u = !r().economics.gifs[e];
				if (i && (a || u)) {
					const [r, s] = await Promise.all([Object(o.b)(d(), e), b(d(), e, i.id)]);
					if (!s.ok) return void Object(c.a)(t, s.error);
					const a = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					n()(s.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, B = (e, t, r) => async (s, n, c) => {
				let {
					apiContext: o
				} = c;
				if (await s(I(e, !0)), r && t) {
					const r = n(),
						c = Object(h.f)(r, e),
						o = Object(y.a)(r, t);
					if (!c[Object(p.d)(o.placement)] && o) {
						const t = Object(h.m)(r, {
							subredditId: e,
							badge: o
						});
						t && await s(x({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/governance/community.ts"),
				c = r("./src/reddit/actions/governance/constants.ts");
			const o = Object(s.a)(c.a),
				d = e => {
					let {
						subredditId: t
					} = e;
					return async (e, r, s) => {
						let {
							apiContext: c
						} = s;
						const d = await Object(n.a)(c(), {
							subredditId: t
						});
						d.ok && e(o(Object.assign({
							subredditId: t
						}, d.body)))
					}
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/endpoints/governance/wallet.ts"),
				c = r("./src/reddit/actions/governance/constants.ts");
			const o = Object(s.a)(c.m),
				d = Object(s.a)(c.n),
				i = Object(s.a)(c.l);
			t.a = e => async (t, r, s) => {
				let {
					apiContext: c
				} = s;
				t(o({
					subredditId: e.subredditId
				}));
				const a = await Object(n.b)(c(), e);
				a.ok ? t(d(Object.assign({
					subredditId: e.subredditId
				}, a.body))) : t(i({
					error: a.error
				}))
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			const c = (e, t) => Object(n.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/orders"),
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
				o = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: "".concat(s.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts"),
				d = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
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

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
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

			function m(e, t) {
				return Object(o.a)(Object(n.a)(e, [c.a]), {
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
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/merge.js"),
				n = r.n(s),
				c = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/badges.ts"),
				d = r("./src/reddit/endpoints/governance/community.ts"),
				i = r("./src/reddit/endpoints/governance/products/badges.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, r) {
				const s = {
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
							endpoint: "".concat(c.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					m = Object(d.a)(e, {
						subredditId: t
					}),
					b = Object(i.b)(e, t),
					l = Object(o.c)(e, t, r),
					[p, f, g, h] = await Promise.all([u, m, b, l]);
				if (p.ok ? s.collections = p.body : s.errors.collections = p.error, f.ok) {
					const e = f.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, h.ok ? (n()(s.badges, h.body.badges), s.userOwnedBadges = h.body.userOwnedBadges) : s.errors.userBadges = h.error, s
			}
			const m = (e, t) => Object(a.a)(e, {
				endpoint: "".concat(c.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				n = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				c = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: n.db.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							s = {
								[t.subredditId]: r
							};
						return Object.assign({}, e, {
							body: s
						})
					}
					return e
				})
			}

			function d(e, t) {
				return Object(c.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: n.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/es6.regexp.split.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = "giphy|",
				n = "|downsized";

			function c(e, t) {
				return s + e + (t ? n : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(s)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function i(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, c;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "z", (function() {
				return P
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "s", (function() {
				return L
			})), r.d(t, "y", (function() {
				return U
			})), r.d(t, "u", (function() {
				return D
			})), r.d(t, "v", (function() {
				return E
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "w", (function() {
				return q
			})), r.d(t, "t", (function() {
				return G
			})), r.d(t, "g", (function() {
				return K
			})), r.d(t, "h", (function() {
				return H
			})), r.d(t, "k", (function() {
				return z
			})), r.d(t, "n", (function() {
				return R
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./node_modules/core-js/modules/es6.array.sort.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/bignumber.js/bignumber.js"),
				n = r("./src/reddit/featureFlags/index.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				a = r("./src/reddit/models/Gold/Powerups/index.ts"),
				u = r("./src/reddit/models/Payments/index.ts"),
				m = r("./src/reddit/models/Product/index.ts"),
				b = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/comments.ts"),
				f = r("./src/reddit/selectors/gold/powerups.ts");
			const g = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				h = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const j = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = h(e, t),
							s = Date.now();
						return r && s < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				O = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === d.a.First),
							[i.a.Achievement]: s.find(e => e.placement === d.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				w = (e, t, r) => {
					if (!n.d.spBadges(e) && !n.d.spPremium(e)) return [];
					const s = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(c.a)(s.map(t => e.badges.models[t]).filter(Boolean))
				},
				v = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function P(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function I(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(d.c)(r) && r.userId === n) return r;
				const c = e.badges.models,
					o = e.user.ownedBadges[s] || {},
					i = Object(d.c)(r) ? r.type : r.id;
				return Object.keys(o).map(e => c[e]).find(e => e && e.type === i)
			}

			function x(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return n.data.collections[r];
					if (r === i.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return []
			}

			function k(e, t) {
				const r = x(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function A(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.d)
				}
				return []
			}

			function B(e, t) {
				return x(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(d.d)(e) || !!e.price))
			}
			const _ = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === b.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: "".concat(s.brand, " •••• ").concat(s.last4),
							id: r,
							type: u.a.SavedStripe
						})
					}
				}
				if (r.status === b.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: u.a.SavedPayPal
						})
					}
				}
				return t
			};
			var S;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(S || (S = {}));
			const C = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				F = {
					t5_vsb5g: {
						points: "5000000000000000000000"
					},
					t5_37jgj: {
						points: "5000000000000000000000"
					}
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === m.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					if (F[t]) return F[t];
					const r = C.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = g(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				L = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						s = r && r.extra && r.extra.nomenclature || C;
					return {
						prices: M(e, t),
						member: s.member || C.member,
						memberPlural: s.memberPlural || C.memberPlural,
						memberAlt: s.memberAlt || C.memberAlt,
						memberAltPlural: s.memberAltPlural || C.memberAltPlural,
						membership: s.membership || C.membership,
						membershipAlt: s.membershipAlt || C.membershipAlt
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === b.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				D = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				E = e => {
					const t = e.economics.paymentSystems;
					return t.status === b.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				T = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				q = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				G = (e, t, r) => {
					if (t && Object(f.e)(e, {
							subredditId: t,
							benefit: a.a.CommentsWithGifs
						})) return !0;
					const s = n.d.spGiphy(e),
						c = q(e, t),
						d = "replyToPost" !== r && Object(p.n)(e, {
							commentId: r
						}),
						i = !!d && Object(o.a)(d);
					return s && (c || i)
				},
				K = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				H = (e, t) => {
					if (!t || !t.subredditId) return null;
					const r = (e.economics.me.data.claimPoints || {})[t.subredditId];
					if (!r || !r.length) return null;
					const n = (e.user.wallets[t.subredditId] || {}).latest,
						c = n && n.publicAddress && n.publicAddress.toLowerCase();
					return r.filter(e => !e.address || e.address.toLowerCase() === c).reduce((e, t) => e.plus(t.pointsToClaim), new s.BigNumber(0)).toString()
				},
				z = (e, t) => {
					if (!t || !t.subredditId) return null;
					const r = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return r && r.length ? r.reduce((e, t) => e.plus(t.userKarma), new s.BigNumber(0)).toString() : null
				},
				R = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				c = (e, t) => {
					let {
						productId: r
					} = t;
					const s = e.products.models[r];
					if (s) {
						const t = s.subredditId,
							n = Object.keys(e.user.ownedBadges[t] || {}),
							c = e.badges.models,
							o = Date.now();
						let d = !1;
						return n.forEach(e => {
							const t = c[e];
							t && t.type === r && t.endsAt > o && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=EconHelperActions.b0ad3e7502a36bc3b122.js.map