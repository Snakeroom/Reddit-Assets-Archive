// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.e6e524a489fd6186a46b.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CustomBadgeHovercardTooltip"], {
		"./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				addCustomIcon: "_1QCswSWMKWdEyC-qp39OwF",
				icon: "_2_a0AZEsekxVGOijC1h5y",
				container: "yBY_FjDJXZ7QW3u79zCnu",
				content: "_1IQuYqkzKpT292XMSDJU0A",
				crown: "_283FDOTtEZcM-cJuyRYMi6",
				header: "XyYiwiMkSJmlukv_8D25e",
				link: "_298UyJkRdWZO_dJU-xOYqB"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = r("./src/reddit/selectors/tooltip.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				l = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/helpers/economics/membershipPage.ts"),
				y = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = r("./src/reddit/icons/svgs/Crown/index.tsx"),
				g = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				P = r("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				C = r.n(P);
			class x extends n.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || Object(l.a)()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "custom_badges_hover_card",
						correlationId: this.correlationId,
						...O.q(e),
						subreddit: O.nb(e)
					}))
				}
				onOpenUploadDialog() {
					this.props.onHideTooltip(), this.props.onOpenUploadDialog()
				}
				render() {
					const e = this.props.userIsPremiumSubscriber === g.a.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						r = this.props.meta;
					return n.a.createElement("div", {
						className: Object(m.a)(this.props.className, C.a.container),
						style: this.props.style
					}, n.a.createElement("header", {
						className: C.a.header
					}, e ? u.fbt._("Custom Badge", null, {
						hk: "4xui7o"
					}) : u.fbt._("Upload Badge", null, {
						hk: "41J8Iq"
					})), n.a.createElement("article", {
						className: C.a.content
					}, e ? u.fbt._("Create a custom badge. Share it with other {memberAltPlural} for a reward.", [u.fbt._param("memberAltPlural", r.memberAltPlural)], {
						hk: "1GYswu"
					}) : u.fbt._("Users without a {membershipAlt} can design and upload badges and receive 3 months of {membership} for free.", [u.fbt._param("membershipAlt", r.membershipAlt), u.fbt._param("membership", r.membership)], {
						hk: "lVti0"
					})), n.a.createElement("footer", {
						className: C.a.footer
					}, n.a.createElement(f.r, {
						className: C.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, n.a.createElement(y.a, {
						className: C.a.addCustomIcon
					}), u.fbt._("upload custom badge", null, {
						hk: "26VOvM"
					})), !e && n.a.createElement(f.s, {
						className: C.a.link,
						disabled: !this.props.subreddit,
						to: Object(h.a)(t, this.correlationId),
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => ({
								source: "meta",
								action: "click",
								noun: "custom_badge_hover_open_learn_more",
								correlationId: this.correlationId,
								...O.q(e),
								subreddit: O.nb(e)
							}))
						}
					}, n.a.createElement(v.a, {
						className: C.a.crown
					}), u.fbt._("Get {membershipAlt}", [u.fbt._param("membershipAlt", r.membershipAlt)], {
						hk: "2RRNNM"
					}))))
				}
			}
			const _ = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.r)(e, r)
				},
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.x)(e, r)
				}
			});
			var S = Object(b.c)(Object(i.b)(_, e => ({
				onOpenUploadDialog: () => e(Object(p.j)())
			}))(x));
			const j = Object(c.a)(S, [d.a.Click, d.a.Keydown]);
			const w = Object(o.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(a.b)(r)(e)
				}
			});
			t.default = Object(i.b)(w)((function(e) {
				return e.isOpen ? n.a.createElement(j, e) : null
			}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(s.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, n.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, n, i, o;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
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
				return v
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "x", (function() {
				return P
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "h", (function() {
				return S
			})), r.d(t, "z", (function() {
				return j
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "p", (function() {
				return B
			})), r.d(t, "k", (function() {
				return F
			})), r.d(t, "r", (function() {
				return M
			})), r.d(t, "y", (function() {
				return U
			})), r.d(t, "u", (function() {
				return T
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "b", (function() {
				return q
			})), r.d(t, "w", (function() {
				return J
			})), r.d(t, "s", (function() {
				return K
			})), r.d(t, "t", (function() {
				return Z
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "m", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				f = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const y = [],
				v = (e, t) => {
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
				g = (e, t) => {
					const r = v(e, t);
					return r && r.endsAt || null
				};
			var O;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(O || (O = {}));
			const P = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = g(e, t),
							s = Date.now();
						return r && s < r ? O.Subscribed : O.NotSubscribed
					}
					return O.DontKnow
				},
				C = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || y).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[d.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[d.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[d.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : y
			}
			const _ = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return y;
					return x(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				S = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function j(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function w(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === n) return r;
				const i = e.badges.models,
					d = e.user.ownedBadges[s] || {},
					c = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(d).map(e => i[e]).find(e => e && e.type === c)
			}

			function A(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === d.a.Loyalty || r === d.a.Achievement) return n.data.collections[r];
					if (r === d.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return y
			}

			function I(e, t) {
				const r = A(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : y
			}

			function k(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return y
			}

			function E(e, t) {
				return A(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const B = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: r,
							type: c.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var N;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(N || (N = {}));
			const D = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				F = (e, t) => Object.values(e.products.models).filter(e => e.type === a.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const r = D.prices;
					F(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = v(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				M = (e, t) => {
					var r, s, n, i;
					const o = (null === (i = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || D;
					return {
						prices: L(e, t),
						member: o.member || D.member,
						memberPlural: o.memberPlural || D.memberPlural,
						memberAlt: o.memberAlt || D.memberAlt,
						memberAltPlural: o.memberAltPlural || D.memberAltPlural,
						membership: o.membership || D.membership,
						membershipAlt: o.membershipAlt || D.membershipAlt
					}
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				T = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				q = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				J = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				K = (e, t) => !!t && !!Object(f.a)(e, {
					subredditId: t
				}),
				Z = (e, t, r) => {
					if (Object(b.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!R(e, t) || !(!s.d.spGiphy(e) || !Y(e, r)));
					if (!Object(h.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(f.f)(e, {
							subredditId: t
						})) return !0;
					if (Y(e, r)) return !0;
					const n = s.d.spGiphy(e),
						i = J(e, t);
					return !!R(e, t) || n && i
				},
				Y = (e, t) => {
					const r = "replyToPost" !== t && Object(p.c)(e, {
						commentId: t
					});
					if (r && Object(i.a)(r)) return !0
				},
				R = (e, t) => {
					const r = s.d.spGiphy(e),
						n = J(e, t);
					return r && n
				},
				H = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var s = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, s;
					switch (t.type) {
						case i.mb:
						case i.nb: {
							const {
								benefitStatuses: s,
								subredditId: n
							} = t.payload;
							if (!s) return e;
							const i = null !== (r = e[n]) && void 0 !== r ? r : {},
								o = {};
							return s.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[n]: {
									...i,
									...o
								}
							}
						}
						case i.L: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, i = null !== (s = e[n]) && void 0 !== s ? s : {}, o = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								o[t] = r
							}), {
								...e,
								[n]: {
									...i,
									...o
								}
							}
						}
						default:
							return e
					}
				},
				c = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: d
				}
			});
			const a = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				u = (e => Object(c.a)(a, t => !!(null == t ? void 0 : t[e])))(s.a.CommentsWithGifs)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.e6e524a489fd6186a46b.js.map