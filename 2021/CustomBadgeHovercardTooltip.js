// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.7555c545aa79c6c0fdaa.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CustomBadgeHovercardTooltip"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
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
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = r("./src/reddit/selectors/tooltip.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				l = r("./node_modules/uuid/v4.js"),
				m = r.n(l),
				p = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				_ = r("./src/reddit/helpers/economics/membershipPage.ts"),
				y = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				C = r("./src/reddit/icons/svgs/Crown/index.tsx"),
				E = r("./src/reddit/selectors/economics.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				g = r("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				O = r.n(g);
			class I extends n.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "custom_badges_hover_card",
						correlationId: this.correlationId,
						...S.defaults(e),
						subreddit: S.subreddit(e)
					}))
				}
				onOpenUploadDialog() {
					this.props.onHideTooltip(), this.props.onOpenUploadDialog()
				}
				render() {
					const e = this.props.userIsPremiumSubscriber === E.a.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						r = this.props.meta;
					return n.a.createElement("div", {
						className: Object(p.a)(this.props.className, O.a.container),
						style: this.props.style
					}, n.a.createElement("header", {
						className: O.a.header
					}, e ? u.fbt._("Custom Badge", null, {
						hk: "4xui7o"
					}) : u.fbt._("Upload Badge", null, {
						hk: "41J8Iq"
					})), n.a.createElement("article", {
						className: O.a.content
					}, e ? u.fbt._("Create a custom badge. Share it with other {memberAltPlural} for a reward.", [u.fbt._param("memberAltPlural", r.memberAltPlural)], {
						hk: "1GYswu"
					}) : u.fbt._("Users without a {membershipAlt} can design and upload badges and receive 3 months of {membership} for free.", [u.fbt._param("membershipAlt", r.membershipAlt), u.fbt._param("membership", r.membership)], {
						hk: "lVti0"
					})), n.a.createElement("footer", {
						className: O.a.footer
					}, n.a.createElement(h.o, {
						className: O.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, n.a.createElement(y.a, {
						className: O.a.addCustomIcon
					}), u.fbt._("upload custom badge", null, {
						hk: "26VOvM"
					})), !e && n.a.createElement(h.p, {
						className: O.a.link,
						disabled: !this.props.subreddit,
						to: Object(_.a)(t, this.correlationId),
						onClick: e => {
							e.stopPropagation(), this.props.sendEvent(e => ({
								source: "meta",
								action: "click",
								noun: "custom_badge_hover_open_learn_more",
								correlationId: this.correlationId,
								...S.defaults(e),
								subreddit: S.subreddit(e)
							}))
						}
					}, n.a.createElement(C.a, {
						className: O.a.crown
					}), u.fbt._("Get {membershipAlt}", [u.fbt._param("membershipAlt", r.membershipAlt)], {
						hk: "2RRNNM"
					}))))
				}
			}
			const A = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(E.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(E.w)(e, t)
			});
			var P = Object(f.c)(Object(c.b)(A, e => ({
				onOpenUploadDialog: () => e(Object(b.j)())
			}))(I));
			const M = Object(d.a)(P, [i.a.Click, i.a.Keydown]);
			const v = Object(o.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(a.b)(t)(e)
			});
			t.default = Object(c.b)(v)((function(e) {
				return e.isOpen ? n.a.createElement(M, e) : null
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
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function n(e) {
				return [...e].sort(s)
			}
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/RichTextJson/index.ts");
			const n = "giphy|",
				c = "|downsized";

			function o(e, t) {
				return n + e + (t ? c : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(n)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function a(e) {
				let t = e.substring(n.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function u(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...u(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return u(e, s.F).map(e => e.id)
			}

			function m(e) {
				return u(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function c(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, n.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			}));
			var s, n, c = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const o = {
					[s.Loyalty]: c.a.First,
					[s.Achievement]: c.a.Second,
					[s.Cosmetic]: void 0
				},
				i = e => e === c.a.First ? s.Loyalty : e === c.a.Second ? s.Achievement : s.Cosmetic
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
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, n = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const c = {
				status: s.NotFetched
			};
			t.b = (e = c, t) => {
				switch (t.type) {
					case n.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: s,
									...n
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: n
									}
								}
							}
						}
						return e;
					case n.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: s,
									...n
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: n
									}
								}
							}
						}
						return e;
					case n.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case n.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case n.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./src/lib/constants/specialMembership.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const a = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let c;
						(c = e.placement ? e.placement === i.a.First ? s[d.a.Loyalty][n] : s[d.a.Achievement][n] : u(e) ? s[d.a.Cosmetic][d.c.MyBadges][n] : s[d.a.Cosmetic][d.c.Gallery][n]) && (u(e) ? r.has(e.id) && c.unlocked.push(e) : t.has(e.id) || c.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return r === s ? Object(o.b)(e, t) : r - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(m).sort((e, r) => {
					const s = t[e.id],
						n = t[r.id];
					return Object(o.b)(s, n)
				})
			}

			function b(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const s = e.collections[r],
						n = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...n,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && r.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, s, t), l(Object.keys(e.products).map(t => e.products[t]), r, s, t), {
					collections: {
						[d.a.Loyalty]: p(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: p(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: p(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: p(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = a, t) => {
				switch (t.type) {
					case c.a: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data
								},
								raw: {
									...n.raw
								}
							}
						} : e
					}
					case c.h: {
						const {
							subredditId: r
						} = t.payload, n = e[r];
						return n && n.status === s.Fetched ? {
							...e,
							[r]: {
								...n,
								data: {
									...n.data,
									subscription: {
										...n.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...n.raw,
									subscription: {
										...n.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case c.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: b(r),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "w", (function() {
				return C
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "y", (function() {
				return I
			})), r.d(t, "l", (function() {
				return A
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "e", (function() {
				return M
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "t", (function() {
				return T
			})), r.d(t, "u", (function() {
				return U
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "v", (function() {
				return R
			})), r.d(t, "s", (function() {
				return G
			})), r.d(t, "g", (function() {
				return Y
			})), r.d(t, "m", (function() {
				return J
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				c = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Gold/Powerups/index.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups.ts");
			const f = [],
				h = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const C = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const r = _(e, t),
							s = Date.now();
						return r && s < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				E = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === m.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[i.a.Loyalty]: s.find(e => e.placement === o.a.First),
							[i.a.Achievement]: s.find(e => e.placement === o.a.Second),
							[i.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function S(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const g = (e, t, r) => {
					var n;
					if (!s.d.spBadges(e)) return f;
					return S(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				O = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function I(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function A(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === n) return r;
				const c = e.badges.models,
					i = e.user.ownedBadges[s] || {},
					d = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => c[e]).find(e => e && e.type === d)
			}

			function P(e, t, r, s) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return n.data.collections[r];
					if (r === i.a.Cosmetic && s) return n.data.collections[r][s]
				}
				return f
			}

			function M(e, t) {
				const r = P(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function v(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return f
			}

			function N(e, t) {
				return P(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const x = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
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
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
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
			var D;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(D || (D = {}));
			const w = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				k = (e, t) => {
					if (!t) return {};
					const r = w.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = h(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				F = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						s = r && r.extra && r.extra.nomenclature || w;
					return {
						prices: k(e, t),
						member: s.member || w.member,
						memberPlural: s.memberPlural || w.memberPlural,
						memberAlt: s.memberAlt || w.memberAlt,
						memberAltPlural: s.memberAltPlural || w.memberAltPlural,
						membership: s.membership || w.membership,
						membershipAlt: s.membershipAlt || w.membershipAlt
					}
				},
				j = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				T = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				L = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				R = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				G = (e, t, r) => {
					const n = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!n && Object(c.a)(n)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: d.a.CommentsWithGifs
						})) return !0;
					const o = s.d.spGiphy(e),
						i = R(e, t);
					return o && i
				},
				Y = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				J = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.7555c545aa79c6c0fdaa.js.map