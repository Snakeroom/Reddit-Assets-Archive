// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.db7aee427da69fc16368.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
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
				c = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = r("./src/reddit/selectors/tooltip.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./node_modules/uuid/v4.js"),
				l = r.n(m),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/helpers/economics/membershipPage.ts"),
				g = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = r("./src/reddit/icons/svgs/Crown/index.tsx"),
				v = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				C = r("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				_ = r.n(C);
			class P extends n.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || l()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "custom_badges_hover_card",
						correlationId: this.correlationId,
						...O.defaults(e),
						subreddit: O.subreddit(e)
					}))
				}
				onOpenUploadDialog() {
					this.props.onHideTooltip(), this.props.onOpenUploadDialog()
				}
				render() {
					const e = this.props.userIsPremiumSubscriber === v.a.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						r = this.props.meta;
					return n.a.createElement("div", {
						className: Object(p.a)(this.props.className, _.a.container),
						style: this.props.style
					}, n.a.createElement("header", {
						className: _.a.header
					}, e ? u.fbt._("Custom Badge", null, {
						hk: "4xui7o"
					}) : u.fbt._("Upload Badge", null, {
						hk: "41J8Iq"
					})), n.a.createElement("article", {
						className: _.a.content
					}, e ? u.fbt._("Create a custom badge. Share it with other {memberAltPlural} for a reward.", [u.fbt._param("memberAltPlural", r.memberAltPlural)], {
						hk: "1GYswu"
					}) : u.fbt._("Users without a {membershipAlt} can design and upload badges and receive 3 months of {membership} for free.", [u.fbt._param("membershipAlt", r.membershipAlt), u.fbt._param("membership", r.membership)], {
						hk: "lVti0"
					})), n.a.createElement("footer", {
						className: _.a.footer
					}, n.a.createElement(h.o, {
						className: _.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, n.a.createElement(g.a, {
						className: _.a.addCustomIcon
					}), u.fbt._("upload custom badge", null, {
						hk: "26VOvM"
					})), !e && n.a.createElement(h.p, {
						className: _.a.link,
						disabled: !this.props.subreddit,
						to: Object(y.a)(t, this.correlationId),
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => ({
								source: "meta",
								action: "click",
								noun: "custom_badge_hover_open_learn_more",
								correlationId: this.correlationId,
								...O.defaults(e),
								subreddit: O.subreddit(e)
							}))
						}
					}, n.a.createElement(x.a, {
						className: _.a.crown
					}), u.fbt._("Get {membershipAlt}", [u.fbt._param("membershipAlt", r.membershipAlt)], {
						hk: "2RRNNM"
					}))))
				}
			}
			const A = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(v.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(v.v)(e, t)
			});
			var w = Object(f.c)(Object(i.b)(A, e => ({
				onOpenUploadDialog: () => e(Object(b.j)())
			}))(P));
			const j = Object(d.a)(w, [c.a.Click, c.a.Keydown]);
			const S = Object(o.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(a.b)(t)(e)
			});
			t.default = Object(i.b)(S)((function(e) {
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
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/RichTextJson/index.ts");
			const n = "giphy|",
				i = "|downsized";

			function o(e, t) {
				return n + e + (t ? i : "")
			}

			function c(e) {
				return e && 0 === e.indexOf(n)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(c)
			}

			function a(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function u(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...u(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function m(e) {
				return u(e, s.F).map(e => e.id)
			}

			function l(e) {
				return u(e, e => e.e === s.o).map(e => e.u)
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
			var s, n, i;
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
				}(i || (i = {}))
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
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "x", (function() {
				return C
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "m", (function() {
				return P
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "o", (function() {
				return S
			})), r.d(t, "j", (function() {
				return B
			})), r.d(t, "q", (function() {
				return F
			})), r.d(t, "w", (function() {
				return N
			})), r.d(t, "s", (function() {
				return D
			})), r.d(t, "t", (function() {
				return L
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "u", (function() {
				return T
			})), r.d(t, "r", (function() {
				return U
			})), r.d(t, "g", (function() {
				return J
			})), r.d(t, "l", (function() {
				return G
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Gold/Powerups/index.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				m = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
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
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const g = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = h(e, t),
							s = Date.now();
						return r && s < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				x = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[c.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[c.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[c.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[c.a.Loyalty]: void 0,
						[c.a.Achievement]: void 0,
						[c.a.Cosmetic]: void 0
					}
				},
				v = (e, t, r) => {
					if (!s.d.spBadges(e)) return [];
					const i = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(n.a)(i.map(t => e.badges.models[t]).filter(Boolean))
				},
				O = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function C(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function _(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === n) return r;
				const i = e.badges.models,
					c = e.user.ownedBadges[s] || {},
					d = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(c).map(e => i[e]).find(e => e && e.type === d)
			}

			function P(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (r === c.a.Loyalty || r === c.a.Achievement) return n.data.collections[r];
					if (r === c.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return []
			}

			function A(e, t) {
				const r = P(e, t, c.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function w(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[c.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return []
			}

			function j(e, t) {
				return P(e, t, c.a.Cosmetic, c.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const S = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === m.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const s = e[r];
						t.push({
							display: `${s.brand} •••• ${s.last4}`,
							id: r,
							type: a.a.SavedStripe
						})
					}
				}
				if (r.status === m.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const s = e[r];
						"PayPal" === s.brand && t.push({
							display: "PayPal",
							id: s.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var k;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(k || (k = {}));
			const I = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				E = (e, t) => {
					if (!t) return {};
					const r = I.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = f(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				F = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						s = r && r.extra && r.extra.nomenclature || I;
					return {
						prices: E(e, t),
						member: s.member || I.member,
						memberPlural: s.memberPlural || I.memberPlural,
						memberAlt: s.memberAlt || I.memberAlt,
						memberAltPlural: s.memberAltPlural || I.memberAltPlural,
						membership: s.membership || I.membership,
						membershipAlt: s.membershipAlt || I.membershipAlt
					}
				},
				N = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				D = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				M = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				T = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				U = (e, t, r) => {
					const n = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!n && Object(i.a)(n)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: d.a.CommentsWithGifs
						})) return !0;
					const o = s.d.spGiphy(e),
						c = T(e, t);
					return o && c
				},
				J = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				G = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.db7aee427da69fc16368.js.map