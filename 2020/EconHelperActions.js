// https://www.redditstatic.com/desktop2x/EconHelperActions.6abf47ceb77e65f20516.js
// Retrieved at 3/23/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					o = new r.BigNumber(n.dividedBy(s)),
					c = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(c).toNumber()
			}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "fetchAll", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/curry.js"),
				s = n.n(r),
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
				b = s()((e, t) => t.some(t => u.d[t](e))),
				l = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
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
						y = l.concat(u),
						h = n(),
						j = b(h),
						O = h.comments.models,
						v = h.posts.models,
						I = new Set(h.user.account ? [h.user.account.id] : []);
					l.forEach(e => {
						const t = v[e];
						t && I.add(t.authorId)
					}), u.forEach(e => {
						const t = O[e];
						t && I.add(t.authorId)
					});
					const P = Array.from(I);
					!p.includes("badges") && P.length && j(["spBadges", "spLoadtest", "spPremium"]) && g.push(t(Object(o.l)({
						subredditId: f,
						userIds: P
					}))), !p.includes("communityDetails") && j(["spKarmaPoints", "spLoadtest", "spPoints", "spSupport"]) && g.push(t(Object(i.a)({
						subredditId: f
					}))), !p.includes("subscription") && j(["spLoadtest", "spPremium"]) && g.push(t(Object(c.f)(f))), !p.includes("tips") && y.length && j(["spLoadtest", "spSupport"]) && g.push(t(Object(d.a)({
						subredditId: f,
						contentIds: y
					}))), !p.includes("wallets") && P.length && j(["spKarmaPoints", "spLoadtest", "spPoints"]) && g.push(t(Object(a.a)({
						subredditId: f,
						userIds: P
					}))), await Promise.all(g)
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
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
						return Object(s.a)(e, {
							method: "get",
							endpoint: "".concat(r.a.metaUrl, "/users/me")
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(r.a)(s.a),
				c = Object(r.a)(s.b),
				d = Object(r.a)(s.c),
				i = Object(r.a)(s.d),
				a = Object(r.a)(s.e),
				u = (Object(r.a)(s.f), Object(r.a)(s.g)),
				m = Object(r.a)(s.h),
				b = Object(r.a)(s.i),
				l = Object(r.a)(s.j)
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
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
				y = n("./src/reddit/selectors/economics.ts"),
				h = n("./src/reddit/selectors/products.ts"),
				j = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				O = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function v(e) {
				return !!e && "removeBadge" === e.type
			}

			function I(e) {
				if (!v(e)) return e
			}
			n.d(t, "a", (function() {
				return P
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "c", (function() {
				return A
			}));
			const P = () => async (e, t, n) => {
				let {
					apiContext: r
				} = n;
				if (!t().user.account) return;
				await e(Object(j.a)());
				const s = t().economics.me.data.specialMemberships || {},
					o = Object.keys(s);
				if (o.length) {
					const t = await Object(d.d)(r(), o);
					t.ok && e(Object(O.f)(t.body))
				}
			}, w = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				const c = r().user.account,
					d = r().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (c && a) {
					const t = await Object(i.a)(o(), e, c.id);
					n(Object(O.h)(t))
				}
			}, x = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const c = n(),
					d = c.user.account,
					i = Object(y.f)(c, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let n, r;
					n = e.placement === l.a.First ? i[p.a.Loyalty] : e.placement === l.a.Second ? i[p.a.Achievement] : i[p.a.Cosmetic], t(Object(O.a)(Object.assign({}, e, {
						badge: I(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), v(e.badge) && n ? r = await Object(a.a)(s(), e.subredditId, n.id, !1) : v(e.badge) || (r = await Object(a.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(O.a)(Object.assign({}, e, {
						badge: n,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(o.a)(t, r.error))
				}
			}, k = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				await n(w(e, !0));
				const c = r().economics.subredditPremium[e];
				if (c && c.status === g.a.Fetched) {
					const r = c.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(x({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(O.d)(p.c.MyBadges)))
				}
			}, C = e => async (t, n, r) => {
				let {
					apiContext: d
				} = r;
				const i = n().user.account,
					a = !n().economics.emotes[e],
					u = !n().economics.gifs[e];
				if (i && (a || u)) {
					const [n, r] = await Promise.all([Object(c.b)(d(), e), b(d(), e, i.id)]);
					if (!r.ok) return void Object(o.a)(t, r.error);
					const a = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(r.body, e => {
						e.type === f.a.EmotesPack ? a.emotes.push(e) : e.type === f.a.Giphy && a.giphy.push(e)
					}), t(Object(O.e)({
						subredditId: e,
						products: a
					}))
				}
			}, A = (e, t, n) => async (r, s, o) => {
				let {
					apiContext: c
				} = o;
				if (await r(w(e, !0)), n && t) {
					const n = s(),
						o = Object(y.f)(n, e),
						c = Object(h.a)(n, t);
					if (!o[Object(p.d)(c.placement)] && c) {
						const t = Object(y.p)(n, {
							subredditId: e,
							badge: c
						});
						t && await r(x({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(O.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}
		},
		"./src/reddit/actions/economics/tips/thunkedActions.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/endpoints/economics/tips.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/tips/constants.ts");
			const c = Object(s.a)(o.a);
			n.d(t, "a", (function() {
				return d
			}));
			const d = e => async (t, n, s) => {
				let {
					apiContext: o
				} = s;
				const d = await Object(r.a)(o(), e);
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(r.a)(o.a),
				d = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: o
						} = r;
						const d = await Object(s.a)(o(), {
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
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				o = n("./src/reddit/actions/governance/constants.ts");
			const c = Object(r.a)(o.n),
				d = Object(r.a)(o.o),
				i = Object(r.a)(o.m);
			t.a = e => async (t, n, r) => {
				let {
					apiContext: o
				} = r;
				t(c({
					subredditId: e.subredditId
				}));
				const a = await Object(s.b)(o(), e);
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
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(s.a)(e, {
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
				c = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
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
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts"),
				d = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

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

			function a(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/orders"),
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
				return Object(c.a)(Object(s.a)(e, [o.a]), {
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
			var r = n("./node_modules/lodash/merge.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts"),
				d = n("./src/reddit/endpoints/governance/community.ts"),
				i = n("./src/reddit/endpoints/governance/products/badges.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, n) {
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
					b = Object(i.b)(e, t),
					l = Object(c.c)(e, t, n),
					[p, f, g, y] = await Promise.all([u, m, b, l]);
				if (p.ok ? r.collections = p.body : r.errors.collections = p.error, f.ok) {
					const e = f.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return g.ok ? r.products = g.body : r.errors.products = g.error, y.ok ? (s()(r.badges, y.body.badges), r.userOwnedBadges = y.body.userOwnedBadges) : r.errors.userBadges = y.error, r
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
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: r
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
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
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
			const r = "giphy|",
				s = "|downsized";

			function o(e, t) {
				return r + e + (t ? s : "")
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
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o;
			n.d(t, "c", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return c
				})), n.d(t, "e", (function() {
					return d
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
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
					type: s.NewStripe
				}),
				d = e => e.cardCVCComplete && e.cardExpiryComplete && e.cardNumberComplete && !!e.name && e.postalCodeComplete
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "j", (function() {
				return j
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "E", (function() {
				return v
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "t", (function() {
				return S
			})), n.d(t, "o", (function() {
				return F
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "w", (function() {
				return E
			})), n.d(t, "x", (function() {
				return L
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "z", (function() {
				return M
			})), n.d(t, "A", (function() {
				return T
			})), n.d(t, "b", (function() {
				return q
			})), n.d(t, "C", (function() {
				return K
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "B", (function() {
				return z
			})), n.d(t, "y", (function() {
				return J
			})), n.d(t, "g", (function() {
				return V
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "n", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/reddit/featureFlags/index.ts"),
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
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};
			const f = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === b.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === d.a.First),
							[i.a.Achievement]: r.find(e => e.placement === d.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				g = (e, t, n) => {
					if (!s.d.spBadges(e) && !s.d.spPremium(e)) return [];
					const r = (e.users.appliedBadges[n] || {})[t] || [];
					return Object(o.a)(r.map(t => e.badges.models[t]).filter(Boolean))
				},
				y = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === b.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				},
				h = (e, t) => {
					const n = L(e, t);
					return !!n && !!n.creator
				},
				j = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = e.subreddits.gov.communityJar[n];
					return r ? r.usdr : void 0
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

			function I(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(d.c)(n) && n.userId === s) return n;
				const o = e.badges.models,
					c = e.user.ownedBadges[r] || {},
					i = Object(d.c)(n) ? n.type : n.id;
				return Object.keys(c).map(e => o[e]).find(e => e && e.type === i)
			}

			function P(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === b.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return []
			}

			function w(e, t) {
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
						const r = e[n];
						t.push({
							display: "".concat(r.brand, " •••• ").concat(r.last4),
							id: n,
							type: a.b.SavedStripe
						})
					}
				}
				if (n.status === m.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: a.b.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const S = e => e.economics.paymentSystems.status === m.a.NotFetched ? A.NotFetched : e.economics.paymentSystems.status === m.a.Pending ? A.Fetching : A.Fetched,
				B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				_ = {
					t5_vsb5g: {
						points: "5000000000000000000000"
					},
					t5_37jgj: {
						points: "5000000000000000000000"
					}
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				N = (e, t) => {
					if (!t) return {};
					if (_[t]) return _[t];
					const n = B.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = (e.economics.me.data.specialMemberships || {})[t],
						s = r && r.active && r.active.membership;
					return s && s.price && s.currency && (n[s.currency] = s.price), n
				},
				D = (e, t) => {
					const n = e.subreddits.gov.meta[t || ""],
						r = n && n.extra && n.extra.nomenclature || B;
					return {
						prices: N(e, t),
						member: r.member || B.member,
						memberPlural: r.memberPlural || B.memberPlural,
						memberAlt: r.memberAlt || B.memberAlt,
						memberAltPlural: r.memberAltPlural || B.memberAltPlural,
						membership: r.membership || B.membership,
						membershipAlt: r.membershipAlt || B.membershipAlt
					}
				},
				E = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.users) {
							const t = e.amounts.usdr.users,
								{
									anonymous: n
								} = t,
								r = p(t, ["anonymous"]),
								s = Object.keys(r),
								o = s.map(e => Object.assign({
									id: e
								}, r[e])).sort((e, t) => parseInt(t.amount) - parseInt(e.amount)),
								c = n ? parseInt(n.amount) : 0,
								d = n ? n.numUsers : 0,
								i = o.slice(5),
								a = o.slice(0, 5);
							return {
								allTippers: new Set(s),
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
				L = (e, t) => {
					const n = e.economics.tipDetails[t.subredditId];
					if (n) {
						const e = n[t.contentId];
						if (e && e.amounts && e.amounts.usdr && e.amounts.usdr.tipsProportions) return e.amounts.usdr.tipsProportions
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				M = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				T = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				};
			var q;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(q || (q = {}));
			const K = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === b.a.Fetched) {
						const n = G(e, t),
							r = Date.now();
						return n && r < n ? q.Subscribed : q.NotSubscribed
					}
					return q.DontKnow
				},
				G = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === b.a.Fetched) {
						const e = n.data.subscription;
						return e && e.active && e.active.membership.endsAt || null
					}
					return null
				},
				H = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				z = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				J = (e, t, n) => {
					const r = s.d.spGiphy(e),
						o = z(e, t),
						d = "replyToPost" !== n && Object(l.n)(e, {
							commentId: n
						}),
						i = !!d && Object(c.a)(d);
					return r && (o || i)
				},
				V = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				R = (e, t) => {
					if (!t || !t.subredditId) return null;
					const n = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return n && n.length ? n.reduce((e, t) => e.plus(t.pointsToClaim), new r.BigNumber(0)).toString() : null
				},
				W = (e, t) => {
					if (!t || !t.subredditId) return null;
					const n = (e.economics.me.data.claimPoints || {})[t.subredditId];
					return n && n.length ? n.reduce((e, t) => e.plus(t.userKarma), new r.BigNumber(0)).toString() : null
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const r = e.products.models[n];
					if (r) {
						const t = r.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							c = Date.now();
						let d = !1;
						return s.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > c && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=EconHelperActions.6abf47ceb77e65f20516.js.map