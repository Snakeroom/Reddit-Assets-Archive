// https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.27dc25022f36b4f8c9a9.js
// Retrieved at 6/1/2021, 2:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CustomBadgeHovercardTooltip"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
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
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
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
				O = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/index.m.less"),
				g = r.n(S);
			class P extends s.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || m()()
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
					const e = this.props.userIsPremiumSubscriber === E.a.Subscribed,
						t = this.props.subreddit && this.props.subreddit.name || "",
						r = this.props.meta;
					return s.a.createElement("div", {
						className: Object(p.a)(this.props.className, g.a.container),
						style: this.props.style
					}, s.a.createElement("header", {
						className: g.a.header
					}, e ? u.fbt._("Custom Badge", null, {
						hk: "4xui7o"
					}) : u.fbt._("Upload Badge", null, {
						hk: "41J8Iq"
					})), s.a.createElement("article", {
						className: g.a.content
					}, e ? u.fbt._("Create a custom badge. Share it with other {memberAltPlural} for a reward.", [u.fbt._param("memberAltPlural", r.memberAltPlural)], {
						hk: "1GYswu"
					}) : u.fbt._("Users without a {membershipAlt} can design and upload badges and receive 3 months of {membership} for free.", [u.fbt._param("membershipAlt", r.membershipAlt), u.fbt._param("membership", r.membership)], {
						hk: "lVti0"
					})), s.a.createElement("footer", {
						className: g.a.footer
					}, s.a.createElement(h.o, {
						className: g.a.link,
						onClick: () => this.onOpenUploadDialog()
					}, s.a.createElement(y.a, {
						className: g.a.addCustomIcon
					}), u.fbt._("upload custom badge", null, {
						hk: "26VOvM"
					})), !e && s.a.createElement(h.p, {
						className: g.a.link,
						disabled: !this.props.subreddit,
						to: Object(_.a)(t, this.correlationId),
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
					}, s.a.createElement(C.a, {
						className: g.a.crown
					}), u.fbt._("Get {membershipAlt}", [u.fbt._param("membershipAlt", r.membershipAlt)], {
						hk: "2RRNNM"
					}))))
				}
			}
			const I = Object(c.c)({
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
			var A = Object(f.c)(Object(o.b)(I, e => ({
				onOpenUploadDialog: () => e(Object(b.j)())
			}))(P));
			const v = Object(d.a)(A, [i.a.Click, i.a.Keydown]);
			const M = Object(c.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(a.b)(t)(e)
			});
			t.default = Object(o.b)(M)((function(e) {
				return e.isOpen ? s.a.createElement(v, e) : null
			}))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/reddit/constants/elementIds.ts"),
				i = r("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const r = Object(o.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(c.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(n)
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
				return Object(n.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
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
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const s = "giphy|",
				o = "|downsized";

			function c(e, t) {
				return s + e + (t ? o : "")
			}

			function i(e) {
				return e && 0 === e.indexOf(s)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(i)
			}

			function a(e) {
				let t = e.substring(s.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function u(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...u(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return u(e, n.F).map(e => e.id)
			}

			function m(e) {
				return u(e, e => e.e === n.o).map(e => e.u)
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, s.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, s, o = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const c = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, o, c;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
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
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const a = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[d.a.Loyalty][s] : n[d.a.Achievement][s] : u(e) ? n[d.a.Cosmetic][d.c.MyBadges][s] : n[d.a.Cosmetic][d.c.Gallery][s]) && (u(e) ? r.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(c.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(c.b)(n, s)
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
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), l(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
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
					case o.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: b(r),
								status: n.Fetched
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
				return O
			})), r.d(t, "q", (function() {
				return S
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "y", (function() {
				return P
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "n", (function() {
				return A
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "x", (function() {
				return F
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
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/helpers/richTextJson/index.ts"),
				c = r("./src/reddit/models/Badge/index.ts"),
				i = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Gold/Powerups/index.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts");
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
							n = Date.now();
						return r && n < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				E = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || f).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[i.a.Loyalty]: n.find(e => e.placement === c.a.First),
							[i.a.Achievement]: n.find(e => e.placement === c.a.Second),
							[i.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : f
			}
			const S = (e, t, r) => {
					var s;
					if (!n.d.spBadges(e)) return f;
					return O(null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				g = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
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
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(c.e)(r) && r.userId === s) return r;
				const o = e.badges.models,
					i = e.user.ownedBadges[n] || {},
					d = Object(c.e)(r) ? r.type : r.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === d)
			}

			function A(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					if (r === i.a.Loyalty || r === i.a.Achievement) return s.data.collections[r];
					if (r === i.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return f
			}

			function v(e, t) {
				const r = A(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : f
			}

			function M(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(c.f)
				}
				return f
			}

			function x(e, t) {
				return A(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(c.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: a.a.SavedStripe
						})
					}
				}
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
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
				j = (e, t) => {
					if (!t) return {};
					const r = w.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				k = (e, t) => {
					var r, n, s, o;
					const c = (null === (o = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || w;
					return {
						prices: j(e, t),
						member: c.member || w.member,
						memberPlural: c.memberPlural || w.memberPlural,
						memberAlt: c.memberAlt || w.memberAlt,
						memberAltPlural: c.memberAltPlural || w.memberAltPlural,
						membership: c.membership || w.membership,
						membershipAlt: c.membershipAlt || w.membershipAlt
					}
				},
				F = e => {
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
					const s = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!s && Object(o.a)(s)) return !0;
					if (t && Object(b.o)(e, {
							subredditId: t,
							benefit: d.a.CommentsWithGifs
						})) return !0;
					const c = n.d.spGiphy(e),
						i = R(e, t);
					return c && i
				},
				Y = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				J = e => e.economics.pointsCopy.data
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CustomBadgeHovercardTooltip.27dc25022f36b4f8c9a9.js.map