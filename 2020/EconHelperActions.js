// https://www.redditstatic.com/desktop2x/EconHelperActions.280b3c3b35338ba0c148.js
// Retrieved at 3/18/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t),
					o = new s.BigNumber(n.dividedBy(r)),
					c = new s.BigNumber("100").multipliedBy(o);
				return new s.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "fetchAll", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/curry.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/badge.ts"),
				c = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				d = n("./src/reddit/actions/economics/tips/thunkedActions.ts"),
				i = n("./src/reddit/actions/governance/communityDetails.ts"),
				a = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				u = n("./src/reddit/featureFlags/index.ts");
			const m = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				b = r()((e, t) => t.some(t => u.d[t](e))),
				l = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const {
						commentIds: u = [],
						postIds: l = [],
						skip: p = []
					} = e;
					let f = e.subredditId;
					if (!f) {
						e.subredditName && (f = m[e.subredditName.toLowerCase()])
					}
					if (!f) return;
					const g = [],
						h = l.concat(u),
						y = n(),
						j = b(y),
						O = y.comments.models,
						v = y.posts.models,
						w = new Set(y.user.account ? [y.user.account.id] : []);
					l.forEach(e => {
						const t = v[e];
						t && w.add(t.authorId)
					}), u.forEach(e => {
						const t = O[e];
						t && w.add(t.authorId)
					});
					const P = Array.from(w);
					!p.includes("badges") && P.length && j(["spBadges", "spLoadtest", "spPremium"]) && g.push(t(Object(o.l)({
						subredditId: f,
						userIds: P
					}))), !p.includes("communityDetails") && j(["spKarmaPoints", "spLoadtest", "spPoints", "spSupport"]) && g.push(t(Object(i.a)({
						subredditId: f
					}))), !p.includes("subscription") && j(["spLoadtest", "spPremium"]) && g.push(t(Object(c.f)(f))), !p.includes("tips") && h.length && j(["spLoadtest", "spSupport"]) && g.push(t(Object(d.a)({
						subredditId: f,
						contentIds: h
					}))), !p.includes("wallets") && P.length && j(["spKarmaPoints", "spLoadtest", "spPoints"]) && g.push(t(Object(a.a)({
						subredditId: f,
						userIds: P
					}))), await Promise.all(g)
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			var o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(o.a)(c.a);
			n.d(t, "a", (function() {
				return i
			}));
			const i = () => async (e, t, n) => {
				let {
					apiContext: o
				} = n;
				const c = t().user.account,
					i = !t().economics.me.fetched;
				if (c && i) {
					const t = await
					function(e) {
						return Object(r.a)(e, {
							method: "get",
							endpoint: "".concat(s.a.metaUrl, "/users/me")
						})
					}(o());
					t.ok && e(d(t.body))
				}
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return l
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(s.a)(r.a),
				c = Object(s.a)(r.b),
				d = Object(s.a)(r.c),
				i = Object(s.a)(r.d),
				a = Object(s.a)(r.e),
				u = (Object(s.a)(r.f), Object(s.a)(r.g)),
				m = Object(s.a)(r.h),
				b = Object(s.a)(r.i),
				l = Object(s.a)(r.j)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forOwn.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				c = n("./src/reddit/endpoints/economics/emojis.ts"),
				d = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				u = n("./src/config.ts"),
				m = n("./src/reddit/endpoints/governance/requester.ts");

			function b(e, t, n) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: "".concat(u.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var l = n("./src/reddit/models/Badge/index.ts"),
				p = n("./src/reddit/models/Badge/managementPage.ts"),
				f = n("./src/reddit/models/Product/index.ts"),
				g = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				y = n("./src/reddit/selectors/products.ts"),
				j = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function v(e) {
				return !!e && "removeBadge" === e.type
			}

			function w(e) {
				if (!v(e)) return e
			}
			n.d(t, "a", (function() {
				return P
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "c", (function() {
				return S
			}));
			const P = () => async (e, t, n) => {
				let {
					apiContext: s
				} = n;
				if (!t().user.account) return;
				await e(Object(j.a)());
				const r = t().economics.me.data.specialMemberships || {},
					o = Object.keys(r);
				if (o.length) {
					const t = await Object(d.d)(s(), o);
					t.ok && e(Object(O.f)(t.body))
				}
			}, I = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				const c = s().user.account,
					d = s().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (c && a) {
					const t = await Object(i.a)(o(), e, c.id);
					n(Object(O.h)(t))
				}
			}, x = e => async (t, n, s) => {
				let {
					apiContext: r
				} = s;
				const c = n(),
					d = c.user.account,
					i = Object(h.f)(c, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let n, s;
					n = e.placement === l.a.First ? i[p.a.Loyalty] : e.placement === l.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(O.a)(Object.assign({}, e, {
						badge: w(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), v(e.badge) && n ? s = await Object(a.a)(r(), e.subredditId, n.id, !1) : v(e.badge) || (s = await Object(a.a)(r(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(O.a)(Object.assign({}, e, {
						badge: n,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(o.a)(t, s.error))
				}
			}, k = (e, t) => async (n, s, r) => {
				let {
					apiContext: o
				} = r;
				await n(I(e, !0));
				const c = s().economics.subredditPremium[e];
				if (c && c.status === g.a.Fetched) {
					const s = c.data.userOwnedBadges.find(e => e.type === t.id);
					s && (n(x({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), n(Object(O.d)(p.c.MyBadges)))
				}
			}, C = e => async (t, n, s) => {
				let {
					apiContext: d
				} = s;
				const i = n().user.account,
					a = !n().economics.emotes[e],
					u = !n().economics.gifs[e];
				if (i && (a || u)) {
					const [n, s] = await Promise.all([Object(c.b)(d(), e), b(d(), e, i.id)]);
					if (!s.ok) return void Object(o.a)(t, s.error);
					const a = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					r()(s.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, S = (e, t, n) => async (s, r, o) => {
				let {
					apiContext: c
				} = o;
				if (await s(I(e, !0)), n && t) {
					const n = r(),
						o = Object(h.f)(n, e),
						c = Object(y.a)(n, t);
					if (!o[Object(p.d)(c.placement)] && c) {
						const t = Object(h.o)(n, {
							subredditId: e,
							badge: c
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
		"./src/reddit/actions/economics/tips/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/endpoints/economics/tips.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/tips/constants.ts");
			const c = Object(r.a)(o.a);
			n.d(t, "a", (function() {
				return d
			}));
			const d = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
				const d = await Object(s.a)(o(), e);
				d.ok && t(c({
					subredditId: e.subredditId,
					tipData: d.body
				}))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/community.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(s.a)(o.a),
				d = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, s) => {
						let {
							apiContext: o
						} = s;
						const d = await Object(r.a)(o(), {
							subredditId: t
						});
						d.ok && e(c(Object.assign({
							subredditId: t
						}, d.body)))
					}
				}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/endpoints/governance/wallet.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(s.a)(o.n),
				d = Object(s.a)(o.o),
				i = Object(s.a)(o.m);
			t.a = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				t(c({
					subredditId: e.subredditId
				}));
				const a = await Object(r.b)(o(), e);
				a.ok ? t(d(Object.assign({
					subredditId: e.subredditId
				}, a.body))) : t(i({
					error: a.error
				}))
			}
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(r.a)(e, {
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
				c = (e, t) => Object(r.a)(e, {
					method: "get",
					endpoint: "".concat(s.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function i(e, t) {
				return Object(c.a)(e, {
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
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/orders"),
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

			function m(e, t) {
				return Object(c.a)(Object(r.a)(e, [o.a]), {
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
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/merge.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/reddit/endpoints/governance/community.ts"),
				i = n("./src/reddit/endpoints/governance/products/badges.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, n) {
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
							endpoint: "".concat(o.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					m = Object(d.a)(e, {
						subredditId: t
					}),
					b = Object(i.b)(e, t),
					l = Object(c.c)(e, t, n),
					[p, f, g, h] = await Promise.all([u, m, b, l]);
				if (p.ok ? s.collections = p.body : s.errors.collections = p.error, f.ok) {
					const e = f.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, h.ok ? (r()(s.badges, h.body.badges), s.userOwnedBadges = h.body.userOwnedBadges) : s.errors.userBadges = h.error, s
			}
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			const m = (e, t) => Object(a.a)(e, {
				endpoint: "".concat(o.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: s
						})
					}
					return e
				})
			}

			function d(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = "giphy|",
				r = "|downsized";

			function o(e, t) {
				return s + e + (t ? r : "")
			}

			function c(e) {
				return e && 0 === e.indexOf(s)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(c)
			}

			function i(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return c
				})), n.d(t, "e", (function() {
					return d
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
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
					type: r.NewStripe
				}),
				d = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return f
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "D", (function() {
				return v
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "p", (function() {
				return P
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "r", (function() {
				return C
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "s", (function() {
				return A
			})), n.d(t, "u", (function() {
				return F
			})), n.d(t, "v", (function() {
				return N
			})), n.d(t, "w", (function() {
				return D
			})), n.d(t, "C", (function() {
				return L
			})), n.d(t, "y", (function() {
				return U
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "b", (function() {
				return T
			})), n.d(t, "B", (function() {
				return E
			})), n.d(t, "q", (function() {
				return q
			})), n.d(t, "c", (function() {
				return K
			})), n.d(t, "A", (function() {
				return G
			})), n.d(t, "x", (function() {
				return H
			})), n.d(t, "g", (function() {
				return z
			})), n.d(t, "h", (function() {
				return J
			})), n.d(t, "n", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/helpers/richTextJson/index.ts"),
				d = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				a = n("./src/reddit/models/Payments/index.ts"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				b = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				l = n("./src/reddit/selectors/comments.ts"),
				p = function(e, t) {
					var n = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]])
					}
					return n
				};
			const f = (e, t) => {
					const n = e.user.account,
						s = e.economics.subredditPremium[t];
					if (n && s && s.status === b.a.Fetched) {
						const s = ((e.users.appliedBadges[n.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
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
				g = (e, t, n) => {
					if (!r.d.spBadges(e) && !r.d.spPremium(e)) return [];
					const s = (e.users.appliedBadges[n] || {})[t] || [];
					return Object(o.a)(s.map(t => e.badges.models[t]).filter(Boolean))
				},
				h = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === b.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				y = (e, t) => {
					const n = D(e, t);
					return !!n && !!n.creator
				},
				j = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.subreddits.gov.communityJar[n];
					return s ? s.usdr : void 0
				},
				O = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.amount) return e.amounts.usdr.amount
					}
					return "0"
				};

			function v(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: n,
					subredditId: s
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(d.c)(n) && n.userId === r) return n;
				const o = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					i = Object(d.c)(n) ? n.type : n.id;
				return Object.keys(c).map(e => o[e]).find(e => e && e.type === i)
			}

			function P(e, t, n, s) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === b.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return r.data.collections[n];
					if (n === i.a.Cosmetic && s) return r.data.collections[n][s]
				}
				return []
			}

			function I(e, t) {
				const n = P(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function x(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === b.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.d)
				}
				return []
			}

			function k(e, t) {
				return P(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(d.d)(e) || !!e.price))
			}
			const C = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === m.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const s = e[n];
						t.push({
							display: "".concat(s.brand, " •••• ").concat(s.last4),
							id: n,
							type: a.b.SavedStripe
						})
					}
				}
				if (n.status === m.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const s = e[n];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.b.SavedPayPal
						})
					}
				}
				return t
			};
			var S;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(S || (S = {}));
			const A = e => e.economics.paymentSystems.status === m.a.NotFetched ? S.NotFetched : e.economics.paymentSystems.status === m.a.Pending ? S.Fetching : S.Fetched,
				B = {
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
					const n = (e.economics.me.data.specialMemberships || {})[t || ""],
						s = e.subreddits.gov.meta[t || ""],
						o = n && n.active && n.active.membership,
						c = s && s.extra && s.extra.nomenclature || B;
					let d = B.price;
					if (o) d = o.price;
					else {
						const n = Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t)[0];
						n && n.price && (d = n.price)
					}
					return d = _[t || ""] || d, {
						allowTrial: r.d.spFreeTrialSubscriptions(e),
						price: d,
						member: c.member || B.member,
						memberPlural: c.memberPlural || B.memberPlural,
						memberAlt: c.memberAlt || B.memberAlt,
						memberAltPlural: c.memberAltPlural || B.memberAltPlural,
						membership: c.membership || B.membership,
						membershipAlt: c.membershipAlt || B.membershipAlt
					}
				},
				N = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: n
								} = t,
								s = p(t, ["anonymous"]),
								r = Object.keys(s),
								o = r.map(e => Object.assign({
									id: e
								}, s[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								c = n ? parseInt(n.amount) : 0,
								d = n ? n.numUsers : 0,
								i = o.slice(5),
								a = o.slice(0, 5);
							return {
								allTippers: new Set(r),
								topTippers: {
									list: a,
									others: {
										amount: String(i.reduce((e, t) => e + parseInt(t.amount), c)),
										count: i.length + d
									},
									ranking: a.reduce((e, t, n) => (e[t.id] = n + 1, e), {})
								}
							}
						}
					}
				},
				D = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var T;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(T || (T = {}));
			const E = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === b.a.Fetched) {
						const n = q(e, t),
							s = Date.now();
						return n && s < n ? T.Subscribed : T.NotSubscribed
					}
					return T.DontKnow
				},
				q = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === b.a.Fetched) {
						const e = n.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				K = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				G = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				H = (e, t, n) => {
					const s = r.d.spGiphy(e),
						o = G(e, t),
						d = "replyToPost" !== n && Object(l.n)(e, {
							commentId: n
						}),
						i = !!d && Object(c.a)(d);
					return s && (o || i)
				},
				z = (e, t, n) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[n]
					}
				},
				J = (e, t) => {
					if (!t || !t.subredditId) return null;
					const n = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return n && n.length ? n.reduce((e, t) => e.plus(t.pointsToClaim), new s.BigNumber(0)).toString() : null
				},
				V = (e, t) => {
					if (!t || !t.subredditId) return null;
					const n = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return n && n.length ? n.reduce((e, t) => e.plus(t.userKarma), new s.BigNumber(0)).toString() : null
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === s.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const s = e.products.models[n];
					if (s) {
						const t = s.subredditId,
							r = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							c = Date.now();
						let d = !1;
						return r.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > c && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=EconHelperActions.280b3c3b35338ba0c148.js.map