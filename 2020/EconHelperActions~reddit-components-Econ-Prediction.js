// https://www.redditstatic.com/desktop2x/EconHelperActions~reddit-components-Econ-Prediction.b72a1d523c7ee9c16343.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions~reddit-components-Econ-Prediction"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					c = new r.BigNumber(n.dividedBy(s)),
					o = new r.BigNumber("100").multipliedBy(c);
				return new r.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/badge.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "m", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/governance/errorToast.ts"),
				c = n("./src/reddit/endpoints/governance/badges.ts");
			const o = "BADGE__BADGE_MODAL_OPENED",
				d = "BADGE__BADGE_APPLICATION_SUCCESS",
				i = "BADGE__BADGE_APPLICATION_FAILURE",
				a = "BADGE__SUBREDDIT_BADGES_FETCH_SUCCESS",
				u = "BADGE__SUBREDDIT_BADGES_FETCH_FAILURE",
				b = "BADGE__SUBREDDIT_BADGES_FETCH_PENDING",
				m = "BADGE__USER_BADGES_FETCH_SUCCESS",
				p = "BADGE__USER_BADGES_FETCH_FAILURE",
				l = "BADGE__USER_BADGES_FETCH_PENDING",
				O = Object(r.a)(o),
				_ = Object(r.a)(d),
				f = Object(r.a)(i),
				E = (Object(r.a)("BADGE__BADGE_APPLICATION_PENDING"), Object(r.a)(a)),
				g = Object(r.a)(u),
				j = Object(r.a)(b),
				I = Object(r.a)(m),
				A = Object(r.a)(p),
				N = Object(r.a)(l),
				h = e => {
					let {
						badgeIds: t,
						subredditId: n
					} = e;
					return async (e, r, o) => {
						let {
							apiContext: d
						} = o;
						const i = r(),
							a = i.user.account;
						if (a) {
							const r = (i.users.appliedBadges[a.id] || {})[n] || [],
								o = t.length ? t[0] : r[0],
								u = !!t.length;
							e(_({
								badgeIds: t,
								subredditId: n,
								userId: a.id
							}));
							const b = await Object(c.a)(d(), n, o, u);
							b.ok || (e(f({
								badgeIds: t,
								subredditId: n,
								error: b.error,
								previousBadgeIds: r,
								userId: a.id
							})), Object(s.a)(e, b.error))
						}
					}
				},
				C = e => {
					let {
						subredditId: t,
						userIds: n
					} = e;
					return async (e, r, s) => {
						let {
							apiContext: o
						} = s;
						e(j({
							subredditId: t
						}));
						const d = await Object(c.b)(o(), t, n);
						d.ok ? e(E(Object.assign(Object.assign({}, d.body), {
							subredditId: t
						}))) : e(g({
							subredditId: t,
							error: d.error
						}))
					}
				},
				y = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: s
						} = r;
						const o = n().user.account;
						if (o) {
							e(N({
								subredditId: t
							}));
							const n = await Object(c.c)(s(), t, o.id);
							n.ok ? e(I(Object.assign(Object.assign({}, n.body), {
								subredditId: t
							}))) : e(A({
								subredditId: t,
								error: n.error
							}))
						}
					}
				}
		},
		"./src/reddit/actions/economics/helpers/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "fetchAll", (function() {
				return m
			})), n.d(t, "promptUserToBuyMoreCoins", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/curry.js"),
				s = n.n(r),
				c = n("./src/reddit/actions/badge.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				d = n("./src/reddit/actions/governance/communityDetails.ts"),
				i = n("./src/reddit/actions/governance/publicWalletsFetched.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const u = {
					badgesroyaletest: "t5_socj8",
					ethtrader: "t5_37jgj",
					fortnitebr: "t5_3oeyf",
					funkygoose: "t5_kzsl3"
				},
				b = s()((e, t) => t.some(t => a.d[t](e))),
				m = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const {
						commentIds: a = [],
						postIds: m = [],
						skip: p = []
					} = e;
					let l = e.subredditId;
					if (!l) {
						e.subredditName && (l = u[e.subredditName.toLowerCase()])
					}
					if (!l) return;
					const O = [],
						_ = n(),
						f = b(_),
						E = _.comments.models,
						g = _.posts.models,
						j = new Set(_.user.account ? [_.user.account.id] : []);
					m.forEach(e => {
						const t = g[e];
						t && j.add(t.authorId)
					}), a.forEach(e => {
						const t = E[e];
						t && j.add(t.authorId)
					});
					const I = Array.from(j);
					!p.includes("badges") && I.length && f(["spBadges"]) && O.push(t(Object(c.l)({
						subredditId: l,
						userIds: I
					}))), !p.includes("communityDetails") && f(["spPoints", "spSpecialMemberships"]) && O.push(t(Object(d.a)({
						subredditId: l
					}))), !p.includes("subscription") && f(["spSpecialMemberships"]) && O.push(t(Object(o.g)(l))), !p.includes("wallets") && I.length && f(["spPoints"]) && O.push(t(Object(i.a)({
						subredditId: l,
						userIds: I
					}))), await Promise.all(O)
				};

			function p() {}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				c = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				c = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			var d = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(d.a)(i.a),
				u = Object(d.a)(i.b),
				b = Object(d.a)(i.c),
				m = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const d = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						u = n();
					if (!u.economics.me.fetched || d && !u.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: "".concat(c.a.metaUrl, "/users/me").concat(t ? "?fields=specialMemberships" : "")
							})
						}(s(), d);
						if (e.ok) {
							const n = e.body;
							d && !n.specialMemberships && (n.specialMemberships = {}), t(a(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						c = n.economics.me.data;
					if (!c) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(u());
						const t = "https://".concat(c.pointsDocsBaseUrl, "v1.json?web"),
							n = await Object(s.b)({
								endpoint: t,
								method: r.db.GET
							});
						n.ok && n.body && e(b(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "f", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
				c = n("./src/reddit/actions/governance/errorToast.ts"),
				o = n("./src/reddit/endpoints/economics/emojis.ts"),
				d = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				u = n("./src/config.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(b.a)(e, {
					method: "get",
					endpoint: "".concat(u.a.metaUrl, "/products/").concat(t, "?owners=").concat(n) + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				l = n("./src/reddit/models/Badge/managementPage.ts"),
				O = n("./src/reddit/models/Product/index.ts"),
				_ = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/selectors/products.ts"),
				g = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				j = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function I(e) {
				return !!e && "removeBadge" === e.type
			}

			function A(e) {
				if (!I(e)) return e
			}
			const N = () => async (e, t, n) => {
				let {
					apiContext: r
				} = n;
				if (!t().user.account) return;
				await e(Object(g.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					c = Object.keys(s);
				if (c.length) {
					const t = await Object(d.e)(r(), c);
					t.ok && e(Object(j.g)(t.body))
				}
			}, h = (e, t) => async (n, r, s) => {
				let {
					apiContext: c
				} = s;
				const o = r().user.account,
					d = r().economics.subredditPremium[e],
					a = !d || d.status !== _.a.Fetched || t;
				if (o && a) {
					const t = await Object(i.a)(c(), e, o.id);
					n(Object(j.i)(t))
				}
			}, C = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const o = n(),
					d = o.user.account,
					i = Object(f.f)(o, e.subredditId),
					u = Object.keys(i).map(e => i[e]).filter(Boolean);
				if (d && e.badge) {
					let n, r;
					n = e.placement === p.a.First ? i[l.a.Loyalty] : e.placement === p.a.Second ? i[l.a.Achievement] : i[l.a.Cosmetic], t(Object(j.a)(Object.assign(Object.assign({}, e), {
						badge: A(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					}))), I(e.badge) && n ? r = await Object(a.a)(s(), e.subredditId, n.id, !1) : I(e.badge) || (r = await Object(a.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(j.a)(Object.assign(Object.assign({}, e), {
						badge: n,
						currentAppliedBadges: u,
						userId: d.id
					}))), Object(c.a)(t, r.error))
				}
			}, y = (e, t) => async (n, r, s) => {
				let {
					apiContext: c
				} = s;
				await n(h(e, !0));
				const o = r().economics.subredditPremium[e];
				if (o && o.status === _.a.Fetched) {
					const r = o.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(C({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(j.d)(l.c.MyBadges)))
				}
			}, S = e => async (t, n, r) => {
				let {
					apiContext: d
				} = r;
				const i = n().user.account,
					a = !n().economics.emotes[e],
					u = !n().economics.gifs[e];
				if (i && (a || u)) {
					const [n, r] = await Promise.all([Object(o.b)(d(), e), m(d(), e, i.id)]);
					if (!r.ok) return void Object(c.a)(t, r.error);
					const a = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(r.body, e => {
						e.type === O.a.EmotesPack ? a.emotes.push(e) : e.type === O.a.Giphy && a.giphy.push(e)
					}), t(Object(j.e)({
						subredditId: e,
						products: a
					}))
				}
			}, T = (e, t, n) => async (r, s, c) => {
				let {
					apiContext: o
				} = c;
				if (await r(h(e, !0)), n && t) {
					const n = s(),
						c = Object(f.f)(n, e),
						o = Object(E.a)(n, t);
					if (!c[Object(l.d)(o.placement)] && o) {
						const t = Object(f.m)(n, {
							subredditId: e,
							badge: o
						});
						t && await r(C({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(j.c)({
						subredditId: e,
						initialView: l.c.MyBadges
					}))
				}
			}, v = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const {
					wallet: c
				} = await Object(d.c)(s(), e);
				t(Object(j.f)({
					wallet: c
				})), await t(h(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/communityDetails.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(c.a),
				d = e => {
					let {
						subredditId: t
					} = e;
					return async (e, n, r) => {
						let {
							apiContext: c
						} = r;
						const d = await Object(s.a)(c(), {
							subredditId: t
						});
						d.ok && e(o(Object.assign({
							subredditId: t
						}, d.body)))
					}
				}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "t", (function() {
				return A
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "v", (function() {
				return h
			})), n.d(t, "w", (function() {
				return C
			})), n.d(t, "x", (function() {
				return y
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				c = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				l = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				O = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				f = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				g = "GOVERNANCE__TRANSFER_FAILURE",
				j = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				I = "GOVERNANCE__TRANSFER_PENDING",
				A = "GOVERNANCE__TRANSFER_SUCCESS",
				N = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				h = "GOVERNANCE__WALLETS_FETCH_PENDING",
				C = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				y = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.e)({
					duration: 5e3,
					kind: c.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/publicWalletsFetched.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/governance/wallet.ts"),
				c = n("./src/reddit/actions/governance/constants.ts");
			const o = Object(r.a)(c.m),
				d = Object(r.a)(c.n),
				i = Object(r.a)(c.l);
			t.a = e => async (t, n, r) => {
				let {
					apiContext: c
				} = r;
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
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const c = (e, t) => Object(s.a)(e, {
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
				o = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/product-collections/").concat(t, "?types=emotes_pack")
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts"),
				d = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
				return Object(o.a)(e, {
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

			function u(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/ps/me/braintree-client-tokens"),
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function b(e, t) {
				return Object(o.a)(e, {
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
			async function p(e, t) {
				const n = await Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/orders"),
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
				if (!n.ok) throw new Error("Error fetching provisional membership: ".concat(Object(d.b)(n.error)));
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/merge.js"),
				s = n.n(r),
				c = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/badges.ts"),
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
							endpoint: "".concat(c.a.metaUrl, "/product-collections/").concat(t, "?types=badge")
						})
					}(e, t),
					b = Object(d.a)(e, {
						subredditId: t
					}),
					m = Object(i.b)(e, t),
					p = Object(o.c)(e, t, n),
					[l, O, _, f] = await Promise.all([u, b, m, p]);
				if (l.ok ? r.collections = l.body : r.errors.collections = l.error, O.ok) {
					const e = O.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return _.ok ? r.products = _.body : r.errors.products = _.error, f.ok ? (s()(r.badges, f.body.badges), r.userOwnedBadges = f.body.userOwnedBadges) : r.errors.userBadges = f.error, r
			}
			const b = (e, t) => Object(a.a)(e, {
				endpoint: "".concat(c.a.metaUrl, "/products/").concat(t, "?types=badge,membership"),
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, t, n) {
				const c = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: "".concat(r.a.metaUrl, "/badges/").concat(t),
						data: {
							selected: !0,
							users: n
						}
					}),
					o = await c;
				if (o.ok) {
					const e = {},
						t = {},
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), Object.assign(Object.assign({}, o), {
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					})
				}
				return o
			}
			async function o(e, t, n) {
				const c = await Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/badges/").concat(t, "?users=").concat(n)
				});
				if (c.ok) {
					const e = {},
						t = [],
						n = c.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
					}), Object.assign(Object.assign({}, c), {
						body: {
							badges: e,
							userOwnedBadges: t
						}
					})
				}
				return c
			}

			function d(e, t, n) {
				let c = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: "".concat(r.a.metaUrl, "/badges/").concat(t, "/").concat(n),
					data: {
						selected: c
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/communities/").concat(t.subredditId, "/me"),
					method: s.db.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge")
				})
			}

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: "".concat(r.a.metaUrl, "/products/").concat(t, "?types=badge,membership")
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/orders"),
					data: t
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/orders"),
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				c = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(c.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: r
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
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function c(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = "".concat(e.type, " (").concat(e.code, ")");
				return "message" in e ? "".concat(t, ": ").concat(e.message) : t
			}
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				c = (e, t) => {
					let {
						productId: n
					} = t;
					const r = e.products.models[n];
					if (r) {
						const t = r.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							c = e.badges.models,
							o = Date.now();
						let d = !1;
						return s.forEach(e => {
							const t = c[e];
							t && t.type === n && t.endsAt > o && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions~reddit-components-Econ-Prediction.b72a1d523c7ee9c16343.js.map