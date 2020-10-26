// https://www.redditstatic.com/desktop2x/EconHelperActions.59ea94b1949dc8e0e9fe.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconHelperActions"], {
		"./node_modules/lodash/_assignMergeValue.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseAssignValue.js"),
				r = s("./node_modules/lodash/eq.js");
			e.exports = function(e, t, s) {
				(void 0 === s || r(e[t], s)) && (void 0 !== s || t in e) || n(e, t, s)
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_Stack.js"),
				r = s("./node_modules/lodash/_assignMergeValue.js"),
				o = s("./node_modules/lodash/_baseFor.js"),
				d = s("./node_modules/lodash/_baseMergeDeep.js"),
				i = s("./node_modules/lodash/isObject.js"),
				c = s("./node_modules/lodash/keysIn.js"),
				u = s("./node_modules/lodash/_safeGet.js");
			e.exports = function e(t, s, a, l, m) {
				t !== s && o(s, (function(o, c) {
					if (m || (m = new n), i(o)) d(t, s, c, a, e, l, m);
					else {
						var f = l ? l(u(t, c), o, c + "", t, s, m) : void 0;
						void 0 === f && (f = o), r(t, c, f)
					}
				}), c)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_assignMergeValue.js"),
				r = s("./node_modules/lodash/_cloneBuffer.js"),
				o = s("./node_modules/lodash/_cloneTypedArray.js"),
				d = s("./node_modules/lodash/_copyArray.js"),
				i = s("./node_modules/lodash/_initCloneObject.js"),
				c = s("./node_modules/lodash/isArguments.js"),
				u = s("./node_modules/lodash/isArray.js"),
				a = s("./node_modules/lodash/isArrayLikeObject.js"),
				l = s("./node_modules/lodash/isBuffer.js"),
				m = s("./node_modules/lodash/isFunction.js"),
				f = s("./node_modules/lodash/isObject.js"),
				p = s("./node_modules/lodash/isPlainObject.js"),
				b = s("./node_modules/lodash/isTypedArray.js"),
				h = s("./node_modules/lodash/_safeGet.js"),
				j = s("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, t, s, _, y, g, v) {
				var P = h(e, s),
					O = h(t, s),
					A = v.get(O);
				if (A) n(e, s, A);
				else {
					var x = g ? g(P, O, s + "", e, t, v) : void 0,
						S = void 0 === x;
					if (S) {
						var w = u(O),
							F = !w && l(O),
							I = !w && !F && b(O);
						x = O, w || F || I ? u(P) ? x = P : a(P) ? x = d(P) : F ? (S = !1, x = r(O, !0)) : I ? (S = !1, x = o(O, !0)) : x = [] : p(O) || c(O) ? (x = P, c(P) ? x = j(P) : f(P) && !m(P) || (x = i(O))) : S = !1
					}
					S && (v.set(O, x), y(x, O, _, g, v), v.delete(O)), n(e, s, x)
				}
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRest.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return n((function(t, s) {
					var n = -1,
						o = s.length,
						d = o > 1 ? s[o - 1] : void 0,
						i = o > 2 ? s[2] : void 0;
					for (d = e.length > 3 && "function" == typeof d ? (o--, d) : void 0, i && r(s[0], s[1], i) && (d = o < 3 ? void 0 : d, o = 1), t = Object(t); ++n < o;) {
						var c = s[n];
						c && e(t, c, n, d)
					}
					return t
				}))
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, t) {
			e.exports = function(e, t) {
				if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
			}
		},
		"./node_modules/lodash/merge.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseMerge.js"),
				r = s("./node_modules/lodash/_createAssigner.js")((function(e, t, s) {
					n(e, t, s)
				}));
			e.exports = r
		},
		"./node_modules/lodash/toPlainObject.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_copyObject.js"),
				r = s("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return n(e, r(e))
			}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(n.a)(r.a),
				d = Object(n.a)(r.b),
				i = Object(n.a)(r.c),
				c = Object(n.a)(r.d),
				u = Object(n.a)(r.e),
				a = Object(n.a)(r.f),
				l = Object(n.a)(r.g),
				m = Object(n.a)(r.h),
				f = Object(n.a)(r.i),
				p = Object(n.a)(r.j)
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "|downsized";

			function d(e, t) {
				return r + e + (t ? o : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function u(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), "https://giphy.com/gifs/".concat(t)
			}

			function a(e) {
				return "object" == typeof e && null !== e && !!e.e
			}

			function l(e) {
				const t = e => {
					let s = [];
					const r = e.c && Array.isArray(e.c) ? e.c : [];
					for (const n of r) a(n) && (s = [...s, ...t(n)]);
					return n.F(e) && s.push(e.id), s
				};
				return e.reduce((e, s) => [...e, ...t(s)], [])
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var n, r, o;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "p", (function() {
				return h
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "x", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "r", (function() {
				return g
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "z", (function() {
				return P
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "o", (function() {
				return A
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "q", (function() {
				return F
			})), s.d(t, "k", (function() {
				return C
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "y", (function() {
				return M
			})), s.d(t, "u", (function() {
				return D
			})), s.d(t, "v", (function() {
				return G
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "w", (function() {
				return E
			})), s.d(t, "t", (function() {
				return T
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "l", (function() {
				return V
			})), s.d(t, "j", (function() {
				return H
			})), s.d(t, "n", (function() {
				return J
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/featureFlags/index.ts"),
				r = s("./src/reddit/helpers/economics/sortBadges.ts"),
				o = s("./src/reddit/helpers/richTextJson/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				i = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Gold/Powerups/index.ts"),
				u = s("./src/reddit/models/Payments/index.ts"),
				a = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/gold/powerups.ts");
			const b = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				h = (e, t) => {
					const s = b(e, t);
					return s && s.endsAt || null
				};
			var j;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(j || (j = {}));
			const _ = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = h(e, t),
							n = Date.now();
						return s && n < s ? j.Subscribed : j.NotSubscribed
					}
					return j.DontKnow
				},
				y = (e, t) => {
					const s = e.user.account,
						n = e.economics.subredditPremium[t];
					if (s && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[s.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === d.a.First),
							[i.a.Achievement]: n.find(e => e.placement === d.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				},
				g = (e, t, s) => {
					if (!n.d.spBadges(e)) return [];
					const o = (e.users.appliedBadges[s] || {})[t] || [];
					return Object(r.a)(o.map(t => e.badges.models[t]).filter(Boolean))
				},
				v = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function P(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: s,
					subredditId: n
				} = t, r = e.user.account ? e.user.account.id : void 0;
				if (Object(d.c)(s) && s.userId === r) return s;
				const o = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					c = Object(d.c)(s) ? s.type : s.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === c)
			}

			function A(e, t, s, n) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					if (s === i.a.Loyalty || s === i.a.Achievement) return r.data.collections[s];
					if (s === i.a.Cosmetic && n) return r.data.collections[s][n]
				}
				return []
			}

			function x(e, t) {
				const s = A(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function S(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.d)
				}
				return []
			}

			function w(e, t) {
				return A(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(d.d)(e) || !!e.price))
			}
			const F = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const n = e[s];
						t.push({
							display: "".concat(n.brand, " •••• ").concat(n.last4),
							id: s,
							type: u.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const n = e[s];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: u.a.SavedPayPal
						})
					}
				}
				return t
			};
			var I;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(I || (I = {}));
			const k = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				C = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const s = k.prices;
					C(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const n = b(e, t);
					return n && n.price && n.currency && (s[n.currency] = n.price), s
				},
				L = (e, t) => {
					const s = e.subreddits.gov.meta[t || ""],
						n = s && s.extra && s.extra.nomenclature || k;
					return {
						prices: B(e, t),
						member: n.member || k.member,
						memberPlural: n.memberPlural || k.memberPlural,
						memberAlt: n.memberAlt || k.memberAlt,
						memberAltPlural: n.memberAltPlural || k.memberAltPlural,
						membership: n.membership || k.membership,
						membershipAlt: n.membershipAlt || k.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				D = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				N = (e, t) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				E = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				T = (e, t, s) => {
					const r = "replyToPost" !== s && Object(f.n)(e, {
						commentId: s
					});
					if (!!r && Object(o.a)(r)) return !0;
					if (t && Object(p.i)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const d = n.d.spGiphy(e),
						i = E(e, t);
					return d && i
				},
				K = (e, t, s) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[s]
					}
				},
				V = (e, t) => {
					if (!t || !t.subredditId) return null;
					const s = (e.economics.me.data.claimPoints || {})[t.subredditId];
					if (!s || !s.length) return null;
					const n = (e.user.wallets[t.subredditId] || {}).latest,
						r = n && n.publicAddress && n.publicAddress.toLowerCase(),
						o = s.filter(e => !e.address || e.address.toLowerCase() === r);
					return o.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, o[0]) || null
				},
				H = (e, t) => {
					const s = e.economics.claims[t.subredditId];
					return !!s && s.isClaiming
				},
				J = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconHelperActions.59ea94b1949dc8e0e9fe.js.map