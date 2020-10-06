// https://www.redditstatic.com/desktop2x/EconHelperActions.30233525f2a531c6d169.js
// Retrieved at 10/6/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					c = new n.BigNumber(r.dividedBy(s)),
					o = new n.BigNumber("100").multipliedBy(c);
				return new n.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "fetchAll", (function() {
				return b
			})), r.d(t, "promptUserToBuyMoreCoins", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/curry.js"),
				s = r.n(n),
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
				m = s()((e, t) => t.some(t => a.d[t](e))),
				b = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
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
					!l.includes("badges") && w.length && h(["spBadges"]) && f.push(t(Object(c.l)({
						subredditId: p,
						userIds: w
					}))), !l.includes("communityDetails") && h(["spPoints", "spSpecialMemberships"]) && f.push(t(Object(d.a)({
						subredditId: p
					}))), !l.includes("subscription") && h(["spSpecialMemberships"]) && f.push(t(Object(o.g)(p))), !l.includes("wallets") && w.length && h(["spPoints"]) && f.push(t(Object(i.a)({
						subredditId: p,
						userIds: w
					}))), await Promise.all(f)
				};

			function l() {}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeRequest/index.ts"),
				c = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");
			var d = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(d.a)(i.a),
				u = Object(d.a)(i.b),
				m = Object(d.a)(i.c),
				b = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const d = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						u = r();
					if (!u.economics.me.fetched || d && !u.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: "".concat(c.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(s(), d);
						if (e.ok) {
							const r = e.body;
							d && !r.specialMemberships && (r.specialMemberships = {}), t(a(r))
						}
					}
				}, l = () => async (e, t) => {
					const r = t(),
						c = r.economics.me.data;
					if (!c) throw new Error("me data required for copy to be fetched");
					if (!r.economics.pointsCopy.fetched) {
						e(u());
						const t = "https://".concat(c.pointsDocsBaseUrl, "v1.json?web"),
							r = await Object(s.b)({
								endpoint: t,
								method: n.db.GET
							});
						r.ok && r.body && e(m(r.body))
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
			})), r.d(t, "j", (function() {
				return p
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(n.a)(s.a),
				o = Object(n.a)(s.b),
				d = Object(n.a)(s.c),
				i = Object(n.a)(s.d),
				a = Object(n.a)(s.e),
				u = Object(n.a)(s.f),
				m = (Object(n.a)(s.g), Object(n.a)(s.h)),
				b = Object(n.a)(s.i),
				l = Object(n.a)(s.j),
				p = Object(n.a)(s.k)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "f", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/forOwn.js"),
				s = r.n(n),
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
			const I = () => async (e, t, r) => {
				let {
					apiContext: n
				} = r;
				if (!t().user.account) return;
				await e(Object(j.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					c = Object.keys(s);
				if (c.length) {
					const t = await Object(d.e)(n(), c);
					t.ok && e(Object(O.g)(t.body))
				}
			}, P = (e, t) => async (r, n, s) => {
				let {
					apiContext: c
				} = s;
				const o = n().user.account,
					d = n().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (o && a) {
					const t = await Object(i.a)(c(), e, o.id);
					r(Object(O.i)(t))
				}
			}, x = e => async (t, r, n) => {
				let {
					apiContext: s
				} = n;
				const o = r(),
					d = o.user.account,
					i = Object(h.f)(o, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let r, n;
					r = e.placement === l.a.First ? i[p.a.Loyalty] : e.placement === l.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: v(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), w(e.badge) && r ? n = await Object(a.a)(s(), e.subredditId, r.id, !1) : w(e.badge) || (n = await Object(a.a)(s(), e.subredditId, e.badge.id)), n && !n.ok && (t(Object(O.a)(Object.assign(Object.assign({}, e), {
						badge: r,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(c.a)(t, n.error))
				}
			}, k = (e, t) => async (r, n, s) => {
				let {
					apiContext: c
				} = s;
				await r(P(e, !0));
				const o = n().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const n = o.data.userOwnedBadges.find(e => e.type === t.id);
					n && (r(x({
						badge: n,
						subredditId: e,
						placement: n.placement
					})), r(Object(O.d)(p.c.MyBadges)))
				}
			}, A = e => async (t, r, n) => {
				let {
					apiContext: d
				} = n;
				const i = r().user.account,
					a = !r().economics.emotes[e],
					u = !r().economics.gifs[e];
				if (i && (a || u)) {
					const [r, n] = await Promise.all([Object(o.b)(d(), e), b(d(), e, i.id)]);
					if (!n.ok) return void Object(c.a)(t, n.error);
					const a = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					s()(n.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, B = (e, t, r) => async (n, s, c) => {
				let {
					apiContext: o
				} = c;
				if (await n(P(e, !0)), r && t) {
					const r = s(),
						c = Object(h.f)(r, e),
						o = Object(y.a)(r, t);
					if (!c[Object(p.d)(o.placement)] && o) {
						const t = Object(h.m)(r, {
							subredditId: e,
							badge: o
						});
						t && await n(x({
							badge: t,
							subredditId: e
						}))
					}
					n(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, C = e => async (t, r, n) => {
				let {
					apiContext: s
				} = n;
				const {
					wallet: c
				} = await Object(d.c)(s(), e);
				t(Object(O.f)({
					wallet: c
				})), await t(P(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/community.ts"),
				c = r("./src/reddit/actions/governance/constants.ts");
			const o = Object(n.a)(c.a),
				d = e => {
					let {
						subredditId: t
					} = e;
					return async (e, r, n) => {
						let {
							apiContext: c
						} = n;
						const d = await Object(s.a)(c(), {
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
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/governance/wallet.ts"),
				c = r("./src/reddit/actions/governance/constants.ts");
			const o = Object(n.a)(c.m),
				d = Object(n.a)(c.n),
				i = Object(n.a)(c.l);
			t.a = e => async (t, r, n) => {
				let {
					apiContext: c
				} = n;
				t(o({
					subredditId: e.subredditId
				}));
				const a = await Object(s.b)(c(), e);
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
			var n = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");
			const c = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/orders"),
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
				o = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(n.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "c", (function() {
				return l
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts"),
				d = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
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

			function u(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
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

			function b(e, t) {
				return Object(o.a)(Object(s.a)(e, [c.a]), {
					endpoint: "".concat(e.apiUrl, "/api/info?id=").concat(t.join(",")),
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(i.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return Object.assign(Object.assign({}, e), {
							body: t
						})
					}
					return e
				})
			}
			async function l(e, t) {
				const r = await Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/orders"),
					method: "post",
					data: Object.assign(Object.assign({}, t), {
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					})
				});
				if (!r.ok) throw new Error("Error fetching provisional membership: ".concat(Object(d.b)(r.error)));
				return r.body
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
			var n = r("./node_modules/lodash/merge.js"),
				s = r.n(n),
				c = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/badges.ts"),
				d = r("./src/reddit/endpoints/governance/community.ts"),
				i = r("./src/reddit/endpoints/governance/products/badges.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, r) {
				const n = {
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
				if (p.ok ? n.collections = p.body : n.errors.collections = p.error, f.ok) {
					const e = f.body;
					n.subscription = e.specialMemberships, n.communityRaw = e
				}
				return g.ok ? n.products = g.body : n.errors.products = g.error, h.ok ? (s()(n.badges, h.body.badges), n.userOwnedBadges = h.body.userOwnedBadges) : n.errors.userBadges = h.error, n
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
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				c = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return Object.assign(Object.assign({}, e), {
							body: n
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
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/es6.regexp.split.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				c = "|downsized";

			function o(e, t) {
				return s + e + (t ? c : "")
			}

			function d(e) {
				return e && 0 === e.indexOf(s)
			}

			function i(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(d)
			}

			function a(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}

			function u(e) {
				return "object" == typeof e && null !== e && !!e.e
			}

			function m(e) {
				const t = e => {
					let r = [];
					const s = e.c && Array.isArray(e.c) ? e.c : [];
					for (const n of s) u(n) && (r = [...r, ...t(n)]);
					return n.F(e) && r.push(e.id), r
				};
				return e.reduce((e, r) => [...e, ...t(r)], [])
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, c;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "r", (function() {
				return O
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "z", (function() {
				return v
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "o", (function() {
				return P
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "q", (function() {
				return B
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "y", (function() {
				return N
			})), r.d(t, "u", (function() {
				return U
			})), r.d(t, "v", (function() {
				return E
			})), r.d(t, "b", (function() {
				return D
			})), r.d(t, "w", (function() {
				return T
			})), r.d(t, "t", (function() {
				return L
			})), r.d(t, "g", (function() {
				return q
			})), r.d(t, "l", (function() {
				return G
			})), r.d(t, "j", (function() {
				return H
			})), r.d(t, "n", (function() {
				return K
			}));
			r("./node_modules/core-js/modules/es6.array.sort.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				c = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts"),
				i = r("./src/reddit/models/Gold/Powerups/index.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				m = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				b = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				l = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === b.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var h;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(h || (h = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === b.a.Fetched) {
						const r = g(e, t),
							n = Date.now();
						return r && n < r ? h.Subscribed : h.NotSubscribed
					}
					return h.DontKnow
				},
				j = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === b.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[d.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[d.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[d.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				},
				O = (e, t, r) => {
					if (!n.d.spBadges(e)) return [];
					const c = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(s.a)(c.map(t => e.badges.models[t]).filter(Boolean))
				},
				w = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === b.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function v(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function I(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.c)(r) && r.userId === s) return r;
				const c = e.badges.models,
					d = e.user.ownedBadges[n] || {},
					i = Object(o.c)(r) ? r.type : r.id;
				return Object.keys(d).map(e => c[e]).find(e => e && e.type === i)
			}

			function P(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === b.a.Fetched) {
					if (r === d.a.Loyalty || r === d.a.Achievement) return s.data.collections[r];
					if (r === d.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return []
			}

			function x(e, t) {
				const r = P(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function k(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === b.a.Fetched) {
					const e = r.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.d)
				}
				return []
			}

			function A(e, t) {
				return P(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(o.d)(e) || !!e.price))
			}
			const B = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === m.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: r,
							type: a.a.SavedStripe
						})
					}
				}
				if (r.status === m.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var C;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(C || (C = {}));
			const S = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				_ = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				F = (e, t) => {
					if (!t) return {};
					const r = S.prices;
					_(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = f(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				M = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						n = r && r.extra && r.extra.nomenclature || S;
					return {
						prices: F(e, t),
						member: n.member || S.member,
						memberPlural: n.memberPlural || S.memberPlural,
						memberAlt: n.memberAlt || S.memberAlt,
						memberAltPlural: n.memberAltPlural || S.memberAltPlural,
						membership: n.membership || S.membership,
						membershipAlt: n.membershipAlt || S.membershipAlt
					}
				},
				N = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				E = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				D = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				T = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				L = (e, t, r) => {
					const s = "replyToPost" !== r && Object(l.n)(e, {
						commentId: r
					});
					if (!!s && Object(c.a)(s)) return !0;
					if (t && Object(p.i)(e, {
							subredditId: t,
							benefit: i.a.CommentsWithGifs
						})) return !0;
					const o = n.d.spGiphy(e),
						d = T(e, t);
					return o && d
				},
				q = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				G = (e, t) => {
					if (!t || !t.subredditId) return null;
					const r = (e.economics.me.data.claimPoints || {})[t.subredditId];
					if (!r || !r.length) return null;
					const n = (e.user.wallets[t.subredditId] || {}).latest,
						s = n && n.publicAddress && n.publicAddress.toLowerCase(),
						c = r.filter(e => !e.address || e.address.toLowerCase() === s);
					return c.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, c[0]) || null
				},
				H = (e, t) => {
					const r = e.economics.claims[t.subredditId];
					return !!r && r.isClaiming
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				c = (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							c = e.badges.models,
							o = Date.now();
						let d = !1;
						return s.forEach(e => {
							const t = c[e];
							t && t.type === r && t.endsAt > o && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.30233525f2a531c6d169.js.map