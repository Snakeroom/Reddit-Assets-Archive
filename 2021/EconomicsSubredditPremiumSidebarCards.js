// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.07cdab09f27cf490bf3d.js
// Retrieved at 6/1/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return d
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				i = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				n = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				d = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/reddit/endpoints/economics/banners.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/economics/banners/constants.ts");
			const d = Object(i.a)(n.c),
				a = Object(i.a)(n.d),
				o = Object(i.a)(n.a),
				c = Object(i.a)(n.b),
				u = e => async (t, r, {
					apiContext: i
				}) => {
					const n = r();
					if (!n.user.account) return;
					if (n.economics.banners.dismissedBanners[e]) return;
					t(d(e));
					const o = await Object(s.b)(i(), e);
					t(a({
						subredditId: e,
						data: o
					}))
				}, m = (e, t) => async (r, i, {
					apiContext: n
				}) => {
					r(o({
						subredditId: e,
						bannerType: t
					})), Object(s.c)(n(), e, t)
				}, l = (e, t) => async (r, i, {
					apiContext: n
				}) => {
					r(c({
						subredditId: e,
						bannerType: t
					})), Object(s.e)(n(), e, t)
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return n
			}));
			const s = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				n = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return b
			}));
			var s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeRequest/index.ts"),
				n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");
			var a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(a.a)(o.a),
				u = Object(a.a)(o.b),
				m = Object(a.a)(o.c),
				l = e => async (t, r, {
					apiContext: s
				}) => {
					const i = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						o = r();
					if (!o.economics.me.fetched || i && !o.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(d.a)(e, {
								method: "get",
								endpoint: `${n.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), i);
						if (e.ok) {
							const r = e.body;
							i && !r.specialMemberships && (r.specialMemberships = {}), t(c(r))
						}
					}
				}, b = () => async (e, t) => {
					const r = t(),
						n = r.economics.me.data;
					if (!n) throw new Error("me data required for copy to be fetched");
					if (!r.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${n.pointsDocsBaseUrl}v1.json?web`,
							r = await Object(i.b)({
								endpoint: t,
								method: s.eb.GET
							});
						r.ok && r.body && e(m(r.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				d = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return g
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				n = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(d.a),
				o = Object(s.a)(d.b),
				c = Object(s.a)(d.c),
				u = Object(s.a)(d.d),
				m = Object(s.a)(d.e),
				l = Object(s.a)(d.f),
				b = Object(s.a)(d.g),
				p = Object(s.a)(d.h),
				h = Object(s.a)(d.i),
				g = e => Object(i.h)(n.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return m
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				m = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "f", (function() {
				return P
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/forOwn.js"),
				i = r.n(s),
				n = r("./src/reddit/actions/governance/errorToast.ts"),
				d = r("./src/reddit/endpoints/economics/emojis.ts"),
				a = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				o = r("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = r("./src/reddit/endpoints/governance/badges.ts"),
				u = r("./src/config.ts"),
				m = r("./src/reddit/endpoints/governance/requester.ts");

			function l(e, t, r) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${r}` + "&types=emotes_pack,giphy"
				})
			}
			var b = r("./src/reddit/models/Badge/index.ts"),
				p = r("./src/reddit/models/Badge/managementPage.ts"),
				h = r("./src/reddit/models/Product/index.ts"),
				g = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = r("./src/reddit/selectors/economics.ts"),
				y = r("./src/reddit/selectors/products.ts"),
				_ = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				E = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function x(e) {
				return !!e && "removeBadge" === e.type
			}

			function w(e) {
				if (!x(e)) return e
			}
			const O = () => async (e, t, {
				apiContext: r
			}) => {
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					i = Object.keys(s);
				if (i.length) {
					const t = await Object(a.e)(r(), i);
					t.ok && e(Object(E.g)(t.body))
				}
			}, S = (e, t) => async (r, s, {
				apiContext: i
			}) => {
				const n = s().user.account,
					d = s().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (n && a) {
					const t = await Object(o.a)(i(), e, n.id);
					r(Object(E.i)(t))
				}
			}, C = e => async (t, r, {
				apiContext: s
			}) => {
				const i = r(),
					d = i.user.account,
					a = Object(f.f)(i, e.subredditId),
					o = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (d && e.badge) {
					let r, i;
					r = e.placement === b.a.First ? a[p.a.Loyalty] : e.placement === b.a.Second ? a[p.a.Achievement] : a[p.a.Cosmetic], t(Object(E.a)({
						...e,
						badge: w(e.badge),
						currentAppliedBadges: o,
						userId: d.id
					})), x(e.badge) && r ? i = await Object(c.a)(s(), e.subredditId, r.id, !1) : x(e.badge) || (i = await Object(c.a)(s(), e.subredditId, e.badge.id)), i && !i.ok && (t(Object(E.a)({
						...e,
						badge: r,
						currentAppliedBadges: o,
						userId: d.id
					})), Object(n.a)(t, i.error))
				}
			}, v = (e, t) => async (r, s, {
				apiContext: i
			}) => {
				await r(S(e, !0));
				const n = s().economics.subredditPremium[e];
				if (n && n.status === g.a.Fetched) {
					const s = n.data.userOwnedBadges.find(e => e.type === t.id);
					s && (r(C({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), r(Object(E.d)(p.c.MyBadges)))
				}
			}, j = e => async (t, r, {
				apiContext: s
			}) => {
				const a = r().user.account,
					o = !r().economics.emotes[e],
					c = !r().economics.gifs[e];
				if (a && (o || c)) {
					const [r, o] = await Promise.all([Object(d.b)(s(), e), l(s(), e, a.id)]);
					if (!o.ok) return void Object(n.a)(t, o.error);
					const c = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					i()(o.body, e => {
						e.type === h.a.EmotesPack ? c.emotes.push(e) : e.type === h.a.Giphy && c.giphy.push(e)
					}), t(Object(E.e)({
						subredditId: e,
						products: c
					}))
				}
			}, I = (e, t, r) => async (s, i, {
				apiContext: n
			}) => {
				if (await s(S(e, !0)), r && t) {
					const r = i(),
						n = Object(f.f)(r, e),
						d = Object(y.a)(r, t);
					if (!n[Object(p.d)(d.placement)] && d) {
						const t = Object(f.l)(r, {
							subredditId: e,
							badge: d
						});
						t && await s(C({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(E.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, P = e => async (t, r, {
				apiContext: s
			}) => {
				const {
					wallet: i
				} = await Object(a.c)(s(), e);
				t(Object(E.f)({
					wallet: i
				})), await t(S(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				n = r("./src/reddit/models/Toast/index.ts");

			function d(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: n.b.Error,
					text: Object(i.a)(t)
				}))
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "a", (function() {
				return M
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/higherOrderComponents/makeAsync.tsx");
			var l = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				g = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var y = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				_ = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = r.n(_);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = "add-custom-badge-tooltip",
				O = 100,
				S = 2 * O,
				C = 24;
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, S)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return i.a.createElement("img", {
						className: Object(o.a)(E.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${w}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || C;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: E.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(g.a, {
						className: E.a.addCustom
					})), i.a.createElement(y, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(f.d)(r, r, e),
							n = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(o.a)(E.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(n),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: E.a.image,
							id: n,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? i.a.createElement(l, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: n,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(b.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: n,
							text: e.title
						})))
					}))
				}
			}
			const j = [],
				I = Object(d.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var s;
						return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || j
					},
					allBadges: e => e.badges.models,
					useHovercard: p.d.spSpecialMemberships
				}),
				P = Object(d.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const s = e.user.account;
						return s && (null === (r = e.users.appliedBadges[s.id]) || void 0 === r ? void 0 : r[t]) || j
					},
					allBadges: e => e.badges.models,
					useHovercard: p.d.spSpecialMemberships
				}),
				k = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function N(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, n = t.map(e => r[e]).filter(Boolean);
				return i.a.createElement(v, x({
					badges: n
				}, s))
			}
			const B = Object(n.b)(I, k)(N),
				M = Object(n.b)(P, k)(N)
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = r("./src/reddit/featureFlags/index.ts"),
				l = r("./src/reddit/hooks/useUserContext.ts"),
				b = r("./src/reddit/selectors/economics.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = r.n(p);

			function g(e) {
				var t, r;
				const {
					currentUser: s
				} = Object(l.a)(), n = null !== (t = e.badges) && void 0 !== t ? t : Object(b.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return n.length ? i.a.createElement(u.b, {
					useHovercard: !0,
					badges: n,
					badgeSize: e.badgeSize,
					className: Object(a.a)(e.className, h.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && n.length < 2 && (null == s ? void 0 : s.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const f = [];
			t.b = Object(n.b)(() => Object(d.c)({
				badgeIds: (e, {
					subredditId: t,
					userId: r
				}) => {
					var s;
					return (null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t]) || f
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(o.j)())
			}))(g)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less": function(e, t, r) {
			e.exports = {
				clickable: "_2W-yYYgiKN7Nv6X-LYi_9w",
				container: "_2FOpaOYxDZOwfOdaggJpwm",
				description: "_2Q0iZfK75k4af7Yh_QhiFm",
				user: "_3B1S9qGju-2qKwMcvkVFtz",
				userContainer: "_2Y-fftIz65RlW68o233ly9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				o = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				u = r("./src/reddit/hooks/useUserContext.ts"),
				m = r("./src/reddit/models/Badge/managementPage.ts"),
				l = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = r.n(p);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(n.b)(null, (e, {
				subredditId: t
			}) => ({
				onShowTooltip: t => e(Object(o.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(o.i)()),
				onOpenModal: () => e(Object(a.c)({
					subredditId: t,
					initialView: m.c.MyBadges
				})),
				onOpenUploadDialog: () => e(Object(a.j)())
			}))((function(e) {
				const {
					currentUser: t
				} = Object(u.a)();
				if (!t) return null;
				const r = Object(c.a)(e.badges),
					s = r[r.length - 1],
					n = s && s.extra && s.extra.style && s.extra.style.backgroundColor,
					a = s && s.extra && s.extra.style && s.extra.style.color;
				return i.a.createElement("div", {
					className: Object(d.a)(e.className, h.a.container, {
						[h.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: n || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, i.a.createElement("div", {
					className: h.a.userContainer
				}, i.a.createElement(l.a, {
					badges: r,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), i.a.createElement(b.a, {
					badges: r,
					subredditId: e.subredditId,
					userId: t.id
				}, i.a.createElement("span", {
					className: h.a.user
				}, t.username || t.displayText || "username"))), e.showExplanation && i.a.createElement("div", {
					className: h.a.description
				}, n || a ? n ? g._("Username and content is distinguished with a color matching the last badge.", null, {
					hk: "M24zz"
				}) : g._("Username is distinguished with a color matching the last badge.", null, {
					hk: "2fnnbI"
				}) : g._("This is how your username will appear.", null, {
					hk: "meyGf"
				})))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/selectors/economics.ts");

			function o(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? i.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(n.b)(() => Object(d.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(a.q)(e, t, r)
			}))(o)
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx");
			const i = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("SubredditPremiumBlockchainCheckoutModal").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = i
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/fastdom/index.ts"),
				a = r("./src/reddit/components/Economics/Confetti/index.m.less"),
				o = r.n(a);
			const c = 250,
				u = 100;
			class m extends i.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(o.a.container);
						const t = e.offsetWidth,
							r = e.offsetHeight;
						for (let s = 0; s < u; s++) this.createPiece(t, r);
						for (let s = 0; s < c - u; s++) window.setTimeout(() => this.createPiece(t, r), 1e4 * s / (c - u))
					}, this.createPiece = (e, t) => {
						d.a.write(() => {
							if (!this.el) return;
							const r = document.createElement("div"),
								s = (6 * Math.random() + 4) * t / 1e3;
							r.className = o.a.piece, r.style.width = 4 * Math.random() + 3 + "px", r.style.height = 6 * Math.random() + 3 + "px", r.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(r), this.restartPiece(r, s, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, r, s) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(o.a.container));
							d.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * s + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								d.a.write(() => {
									e.style.top = r + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, r, s), 1e3 * t)
						}
					}
				}
				shouldComponentUpdate(e) {
					return e.letItRain && !this.props.letItRain && setTimeout(() => this.renderConfetti(), 0), !1
				}
				componentWillUnmount() {
					this.el = void 0
				}
				render() {
					return i.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var l = r("./src/reddit/featureFlags/component.tsx"),
				b = r("./src/reddit/hooks/useSafeState.ts"),
				p = r("./src/reddit/selectors/economics.ts");
			t.a = Object(l.a)("spSpecialMemberships", (function(e) {
				const t = Object(s.useRef)(!0),
					[r, d] = Object(b.a)(!1, t),
					a = Object(n.e)(t => Object(p.w)(t, e.subredditId)),
					o = Object(s.useRef)(a);
				return Object(s.useEffect)(() => () => {
					t.current = !1
				}, []), Object(s.useEffect)(() => {
					o.current === p.a.NotSubscribed && a === p.a.Subscribed && (d(!0), setTimeout(() => {
						d(!1)
					}, 1e4)), o.current = a
				}, [a]), a === p.a.Subscribed ? i.a.createElement(m, {
					letItRain: r
				}) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				addIcon: "_1MMoCnZ_nk8-cC1k2OGigA",
				icon: "_1pK796WiMaMbBRVFxjXfBG",
				getBadges: "ildykrVt3Mt9gMkXKFzfS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1yQfxTZ_0dL42phkVSX3RV"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less": function(e, t, r) {
			e.exports = {
				crown: "_3HEkr15Qwf5sGoGnbfINrv",
				title: "_11YSlHNYU0OpkP9slIBdPL",
				membershipEndDate: "_3ttL3H-e3ZG3QtOYpOzxPP"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less": function(e, t, r) {
			e.exports = {
				cta: "_2x-eGz_YpPIv5j0CKVxQqi"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less": function(e, t, r) {
			e.exports = {
				badgePreview: "iHgTssgiyXOzrR4gf5B3U",
				background: "_2xYSXHDQnghiy2GNEFAPFu",
				check: "_22Z9uN-IvHaTp6USqcM_jo",
				container: "P12mq84uFfuH2KXEfMeR5",
				content: "_3aWIE0KiovmqTpbPkjPtwb",
				explanation: "_1c0pMqE8eosjFrQF7TH2RQ",
				rows: "_3angrEFRx8dotcgLSeeW8G",
				row: "_2cyN6pW1y-GxOiMIrnLAMp",
				animateRow: "_2Y-UeLdd5w01w0dNSzfQ_j",
				selection: "_3u2ui0EFGUMzQ4sp5UDL2t",
				title: "mU_g_sx9q_eDtVlJGYxm-",
				username: "Wn_hZZCRmaPUoiOnUYCMI"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less": function(e, t, r) {
			e.exports = {
				background: "_1jIalZDRbSrivjxJGUEUz5",
				container: "qa348cr0hy45FoDJcbNpU",
				content: "_3F4MQT8DhZnlZdukDjTF8R",
				drawer: "_2c4rmfyXdC90cXD7tu5pam",
				emojisContainer: "_3RXctyTdCd4UoLrVZGdbSo",
				emojisTitle: "_2DK6aKnJxZcH_qsy1SFiyN",
				emojis: "_1lshagpcnVvFEiV4HdvkAv",
				emoji: "_2NuSs4NMhHbCUiCtDEDcMU",
				example: "_38AlmvDvQ-QTZpGXVbBCuW",
				explanation: "_2lZ_1R5WMYgpfu-bINYFQa",
				overflow: "_2rIEQfirq9yyIqx4WfnSQI",
				title: "c5oGzlimw-np80U3WGVEK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less": function(e, t, r) {
			e.exports = {
				background: "_2hc7sa_lfKoqSqOWx-hXqA",
				container: "yinH5vFGetGkZNpQ-OAx_",
				content: "_3WKBNoWpNqiOP45cLNS5JD",
				drawer: "_30RKyPpFVXVRthw0A5gxQV",
				example: "_3vQpPpC99oo04IqE6s-Rox",
				explanation: "_3P6ofGcsEuWGLcft5TyN3r",
				imagesContainer: "_3pOXb-J3VLbj-wVyihBPKk",
				images: "_2LOj_LEpO5_iCgPHSrCoJq",
				image: "_2ekdbqTrmyuQOBNIf1iDG6",
				imageCol: "_2CiGDmaab7d5qe_INqssQ9",
				overflow: "_1EMpIuS7ryuiZydXIgXwpC",
				title: "KGn3VoZ0vCi_xW-pYgA-D"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less": function(e, t, r) {
			e.exports = {
				benefits: "_2sX8y0yMiZaCrlPaX9DwmY",
				crown: "_3KyPIyW6lPDHYkM0oa3vEk",
				indicators: "R3HqL7N1U6nD6Qv-tC1lO",
				indicator: "_3WFF566WDWEz-i22qBNmmf",
				indicatorSelected: "_1_pc03SFie7M0ad9TPTpT_",
				slide: "_13eyljtfoaT6F8z_utN2zt",
				title: "Fq_OfxL8jLCsLuL7E_ZRr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-motion/lib/react-motion.js"),
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				u = r("./src/reddit/selectors/economics.ts"),
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				l = r("./src/config.ts"),
				b = r("./src/reddit/icons/svgs/Checkmark/index.tsx");
			const p = {
					height: 120,
					width: 3464,
					badges: [{
						color: "rgb(41, 37, 132)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/20_collision_40@2x.png"
					}, {
						color: "rgb(241, 116, 62)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/4_reddit_wrap_40@2x.png"
					}, {
						color: "rgb(209, 90, 72)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/11_8_from_9_dmg_40@2x.png"
					}, {
						color: "rgb(71, 83, 118)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/15_skull_trooper_40@2x.png"
					}, {
						color: "rgb(180, 124, 56)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/7_battle_star_gold_40@2x.png"
					}, {
						color: "rgb(86, 132, 215)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/28_meteor_40@2x.png"
					}, {
						color: "rgb(115, 115, 153)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/10_shopping_cart_40@2x.png"
					}, {
						color: "rgb(108, 82, 89)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/16_OG_40@2x.png"
					}, {
						color: "rgb(88, 72, 88)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/13_scorecard_40@2x.png"
					}, {
						color: "rgb(115, 75, 220)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/23_kevins_autograph_40@2x.png"
					}, {
						color: "rgb(146, 80, 25)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/1_wood_40@2x.png"
					}, {
						color: "rgb(44, 96, 184)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/9_battle_star_diamond_40@2x.png"
					}, {
						color: "rgb(110, 108, 148)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40@2x.png"
					}, {
						color: "rgb(98, 167, 54)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/22_t_pose_40@2x.png"
					}]
				},
				h = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#3B77A3",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/original/rocket_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/9_months_60x60.png"
					}, {
						color: "#256F77",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pickaxe_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/member_80x80.png"
					}, {
						color: "#307EB9",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/3_month_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/magic_ball_60x60.png"
					}, {
						color: "#AA183F",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pink_wojak_60x60.png"
					}, {
						color: "#2B6670",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/rollercoaster_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/6_months_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_year_60x60.png"
					}, {
						color: "#B96125",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/printer_60x60.png"
					}, {
						color: "#561313",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/bear_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_month_60x60.png"
					}]
				},
				g = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#714114",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bear_60x60.png"
					}, {
						color: "#2A4168",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/beliver_60x60.png"
					}, {
						color: "#615127",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/buidl_60x60.png"
					}, {
						color: "#7E2826",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bull_60x60.png"
					}, {
						color: "#679504",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/cuecumber_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/trader_120x120.png"
					}, {
						color: "#70561A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/lambo_60x60.png"
					}, {
						color: "#2D4877",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/miner_60x60.png"
					}, {
						color: "#2B6071",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/shill_shield_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}, {
						color: "#416B9A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/ufo_60x60.png"
					}, {
						color: "#444D8A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/whale_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}]
				},
				f = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#7D60B6",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/fire_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#5D25AC",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rocket_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#3B3B5E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/moon_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}, {
						color: "#380982",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/anon_60x60.png"
					}, {
						color: "#480C8E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/balance_60x60.png"
					}, {
						color: "#306EB7",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/lumenaut_60x60.png"
					}, {
						color: "#B23C19",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rekt_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}]
				},
				y = {
					t5_2wlj3: h,
					t5_2l3wpx: h,
					t5_vsb5g: g,
					t5_37jgj: g,
					t5_2t9ha: f,
					t5_2a3y8x: f
				};
			var _ = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				E = r.n(_);
			const x = (e, t) => `${l.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`,
				w = 500,
				O = 30,
				S = 132;
			class C extends i.a.Component {
				constructor(e) {
					super(e), this.badgesBackground = function(e) {
						const t = y[e] || p,
							r = t.width / t.badges.length;
						return {
							...t,
							badges: t.badges.map((function(e, t, s) {
								return {
									...e,
									interval: [r * t, r * (t + 1)]
								}
							}))
						}
					}(e.subredditId), this.state = {
						currentlySelected: this.badgesBackground.badges[0]
					}, this.intervalRef = null, this.rowRef = null
				}
				componentDidMount() {
					const e = this.badgesBackground.height / O;
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const t = this.badgesBackground.width,
							r = window.getComputedStyle(this.rowRef).backgroundPositionX;
						if (!r) return;
						const s = ((S - parseFloat(r.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							s > e.interval[0] && s <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, w)
				}
				componentWillUnmount() {
					this.intervalRef && clearInterval(this.intervalRef)
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: r
					} = this.props, {
						currentlySelected: s
					} = this.state;
					return t ? i.a.createElement("article", {
						className: Object(o.a)(E.a.container, e)
					}, i.a.createElement("div", {
						className: E.a.background
					}), i.a.createElement("div", {
						className: E.a.content
					}, i.a.createElement("header", {
						className: E.a.title
					}, m.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.a.createElement("div", {
						className: E.a.rows
					}, i.a.createElement("div", {
						className: E.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: `url(${x(t,"badges-line-1-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: E.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: `url(${x(t,"badges-line-2-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: E.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: `url(${x(t,"badges-line-3-v2.png")})`
						}
					})), i.a.createElement("div", {
						className: E.a.username,
						style: {
							color: s.color
						}
					}, i.a.createElement("img", {
						className: E.a.badgePreview,
						src: s.url
					}), r), i.a.createElement("footer", {
						className: E.a.explanation
					}, m.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), i.a.createElement("div", {
						className: E.a.selection
					}, i.a.createElement(b.a, {
						className: E.a.check
					})))) : null
				}
			}
			const v = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => `u/${e.user.account&&e.user.account.displayText||"username"}`
			});
			var j = Object(d.b)(v)(C),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				P = r.n(I);
			const k = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const N = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var B = Object(d.b)(N)((function(e) {
					const {
						className: t,
						subreddit: r
					} = e;
					return r ? i.a.createElement("article", {
						className: Object(o.a)(P.a.container, t)
					}, i.a.createElement("div", {
						className: P.a.background
					}), i.a.createElement("div", {
						className: P.a.content
					}, i.a.createElement("header", {
						className: P.a.title
					}, m.fbt._("emotes", null, {
						hk: "1VLDec"
					})), i.a.createElement("div", {
						className: P.a.example
					}, i.a.createElement("img", {
						className: P.a.drawer,
						src: `${l.a.assetPath}/img/memberships/emoji-drawer.png`
					}), i.a.createElement("div", {
						className: P.a.emojisTitle
					}, m.fbt._("Add r/{communityName} emote", [m.fbt._param("communityName", r.name)], {
						hk: "1pL2rY"
					})), i.a.createElement("div", {
						className: P.a.emojisContainer
					}, i.a.createElement("div", {
						className: P.a.emojis
					}, k.map(e => i.a.createElement("img", {
						className: P.a.emoji,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: P.a.overflow
					}))), i.a.createElement("footer", {
						className: P.a.explanation
					}, m.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				M = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				T = r.n(M);
			const D = (() => {
				const e = {};
				return async t => {
					if (e[t]) return e[t];
					const r = {
						data: [{
							type: "gif",
							id: "LYtOpHpS9dNFU2W55R",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "112",
									size: "561605"
								},
								downsized: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "362",
									height: "203",
									size: "1497339"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1745959"
								}
							},
							title: "battle royale dab GIF by PlayStation"
						}, {
							type: "gif",
							id: "1rPWlleU4TwMW16RBI",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "626489"
								},
								downsized: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/giphy.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy.gif",
									width: "166",
									height: "94",
									size: "445107"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "353",
									height: "200",
									size: "1178715"
								}
							},
							title: "Animated GIF"
						}, {
							type: "gif",
							id: "6bdgwW6B0ooer3r8AZ",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "127",
									size: "1631580"
								},
								downsized: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "517",
									height: "328",
									size: "1411973"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "315",
									height: "200",
									size: "3772671"
								}
							},
							title: "suspicious kenan thompson GIF"
						}, {
							type: "gif",
							id: "2A8tnatJlmXfhjY1DW",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "356",
									size: "2826317"
								},
								downsized: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "270",
									height: "480",
									size: "1480957"
								},
								fixed_height: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "113",
									height: "200",
									size: "1158938"
								}
							},
							title: "dance dancing GIF by FC Bayern Munich"
						}, {
							type: "gif",
							id: "gLz0XVWX1T2kE",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "575239"
								},
								downsized: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/giphy-tumblr.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-tumblr.gif",
									width: "250",
									height: "140",
									size: "840134"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1585466"
								}
							},
							title: "you mad GIF"
						}, {
							type: "gif",
							id: "XZ1BckBZDh4w0Ey3A0",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "429842"
								},
								downsized: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "270",
									size: "1592826"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1141385"
								}
							},
							title: "braxton family values GIF by WE tv"
						}, {
							type: "gif",
							id: "bwUp1oSrOKIGPy28Zi",
							slug: "redbull-what-okay-bwUp1oSrOKIGPy28Zi",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "200",
									size: "385281"
								},
								downsized: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "480",
									size: "1195081"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "200",
									height: "200",
									size: "385281"
								}
							},
							title: "you good what GIF by Red Bull"
						}],
						pagination: {
							total_count: 6007,
							count: 25,
							offset: 0
						},
						meta: {
							status: 200,
							msg: "OK",
							response_id: "bbc36d4633243e2e8f4733bcc0ab9bfde99721ba"
						}
					};
					return e[t] = r, r
				}
			})();
			class A extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await D(e),
						r = [],
						s = [];
					t.data.forEach((e, t) => {
						const i = e.images.fixed_width.url;
						t % 2 == 0 ? r.push(i) : s.push(i)
					}), this.setState({
						imagesCol1: r,
						imagesCol2: s
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? i.a.createElement("article", {
						className: Object(o.a)(T.a.container, e)
					}, i.a.createElement("div", {
						className: T.a.background
					}), i.a.createElement("div", {
						className: T.a.content
					}, i.a.createElement("header", {
						className: T.a.title
					}, m.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), i.a.createElement("div", {
						className: T.a.example
					}, i.a.createElement("img", {
						className: T.a.drawer,
						src: `${l.a.assetPath}/img/memberships/gif-drawer.png`
					}), i.a.createElement("div", {
						className: T.a.imagesContainer
					}, i.a.createElement("div", {
						className: T.a.images
					}, i.a.createElement("div", {
						className: T.a.imageCol
					}, this.state.imagesCol1.map(e => i.a.createElement("img", {
						className: T.a.image,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: T.a.imageCol
					}, this.state.imagesCol2.map(e => i.a.createElement("img", {
						className: T.a.image,
						key: e,
						src: e
					})))), i.a.createElement("div", {
						className: T.a.overflow
					}))), i.a.createElement("footer", {
						className: T.a.explanation
					}, m.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const U = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var F = Object(d.b)(U)(A),
				R = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				L = r.n(R);
			const $ = 1e4,
				G = 110;
			class H extends i.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, $)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [j, B, F];
							default:
								return [j, F]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, $)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: r,
						subredditId: d,
						subreddit: a
					} = this.props, {
						currentSlideIdx: u
					} = this.state;
					return a ? i.a.createElement("div", {
						className: e
					}, i.a.createElement("header", {
						className: L.a.title
					}, i.a.createElement("img", {
						className: L.a.crown,
						src: Object(c.a)(a, "Crown.gif")
					}), r.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
						className: L.a.benefits
					}, i.a.createElement(n.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								Component: this.slides[0],
								index: 0
							},
							style: {
								left: 0
							}
						}],
						styles: [{
							key: `slide-${u}`,
							data: {
								Component: this.slides[u],
								index: u
							},
							style: {
								left: Object(n.spring)(0)
							}
						}],
						willEnter: () => ({
							left: G
						}),
						willLeave: () => ({
							left: Object(n.spring)(-G)
						})
					}, e => i.a.createElement(s.Fragment, null, e.map(e => i.a.createElement("div", {
						className: L.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, i.a.createElement(e.data.Component, {
						subredditId: d
					})))))), i.a.createElement("footer", {
						className: L.a.indicators
					}, this.slides.map((e, t) => i.a.createElement("div", {
						className: Object(o.a)(L.a.indicator, {
							[L.a.indicatorSelected]: t === u
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const W = Object(a.c)({
				meta: (e, {
					subredditId: t
				}) => Object(u.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(d.b)(W)(H)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less": function(e, t, r) {
			e.exports = {
				badgeEditEntry: "_1GSunEdLQjWPxj6Q-50qM1",
				benefits: "_3LA8PDUkklfKqrSGLdJyGv",
				user: "_3v2THpcGZoJiD5moCouXtU"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1mSkPKPjFPKBRNpXETPzqL",
				controlsPostPurchase: "_19Qm52DVNjA1WxzLyu3954",
				controlsPrePurchase: "_3dkTl0sISRFTNE8vX6W9f4",
				controlsBorder: "_2zAc5yOV9LjQa6Ddh_9Xe9",
				menuIcon: "_34EGSW022m6E7NWmDZvLAK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less": function(e, t, r) {
			e.exports = {
				common: "_3EoqGxiMEOobg5GMawkvnQ",
				buttonText: "bn449F0aAJDYg-12HPth_",
				control: "_1qzq1S-QhnL5j33P9k7r8K",
				icon: "_3BNYLooX5zPfUqx-Z8Emzt",
				title: "_3800inKLwoQARBGF96cZZ",
				user: "_2W6QcOgQ2UEigwA8w2A_sw"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3_pGUX88wiDRDcorJSqisN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				a = r.n(d);

			function o(e) {
				return i.a.createElement("button", {
					className: Object(n.a)(e.className, a.a.button),
					onClick: t => {
						t.stopPropagation(), e.onClick()
					}
				}, e.children)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/endpoints/economics/banners.ts"),
				g = r("./src/reddit/icons/svgs/Menu/index.tsx"),
				f = r("./src/reddit/selectors/economics.ts"),
				y = r("./src/reddit/selectors/tooltip.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				x = r("./src/reddit/components/TrackingHelper/index.tsx"),
				w = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				O = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				S = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				C = r("./src/reddit/models/Badge/managementPage.ts"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				P = r.n(I);
			const k = Object(d.c)({
				customBadgesEnabled: a.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, {
					subredditId: t
				}) => Object(f.j)(e, t),
				userHasBadges: (e, {
					subredditId: t
				}) => Object(f.t)(e, t)
			});
			var N = Object(x.c)(Object(n.b)(k, (e, {
					subredditId: t,
					sendEvent: r
				}) => ({
					onOpenBadges: () => e(Object(E.c)({
						subredditId: t,
						initialView: C.c.MyBadges
					})),
					onOpenGallery: () => {
						e(Object(E.c)({
							subredditId: t,
							initialView: C.c.Gallery
						})), r(e => ({
							source: "meta",
							action: "click",
							noun: "subscription_sidebar_open_badge_gallery",
							...v.defaults(e),
							subreddit: v.subreddit(e)
						}))
					},
					onOpenUploadDialog: () => e(Object(E.j)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && i.a.createElement(j.a, {
						onClick: e.onOpenBadges
					}, i.a.createElement(S.a, {
						className: P.a.icon
					}), _.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && i.a.createElement(j.a, {
						onClick: e.onOpenGallery
					}, i.a.createElement(O.a, {
						className: P.a.icon
					}), _.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && i.a.createElement(j.a, {
						onClick: e.onOpenUploadDialog
					}, i.a.createElement(w.a, {
						className: P.a.addIcon
					}), _.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && i.a.createElement(j.a, {
						onClick: e.onOpenPurchaseModal
					}, i.a.createElement(w.a, {
						className: P.a.addIcon
					}), _.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				B = r("./src/higherOrderComponents/asTooltip.tsx"),
				M = r("./src/reddit/controls/Dropdown/index.tsx"),
				T = r("./src/reddit/controls/Dropdown/Row.tsx"),
				D = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				A = r.n(D);
			const U = Object(B.a)(M.a);

			function F(e) {
				return i.a.createElement(U, {
					className: Object(c.a)(A.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, i.a.createElement(T.b, {
					displayText: _.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var R = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				L = r.n(R);

			function $(e) {
				return i.a.createElement("div", {
					className: Object(c.a)(L.a.container, e.className)
				}, i.a.createElement("div", {
					className: L.a.title
				}), i.a.createElement("div", {
					className: L.a.user
				}), i.a.createElement("div", {
					className: L.a.control
				}, i.a.createElement("div", {
					className: L.a.icon
				}), i.a.createElement("div", {
					className: L.a.buttonText
				})))
			}
			var G = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				H = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				W = r("./src/reddit/selectors/gov.ts"),
				z = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				q = r.n(z);

			function Z(e) {
				return !!e
			}
			const Y = Object(d.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, {
					subredditId: t
				}) => {
					const r = Object(f.f)(e, t);
					return [r[C.a.Loyalty], r[C.a.Achievement], r[C.a.Cosmetic]].filter(Z)
				},
				membershipStartDate: (e, {
					subredditId: t
				}) => {
					const r = Object(f.c)(e, t),
						s = r && r.publishAt;
					if (s) {
						const e = new Date(s);
						return `Since ${new Intl.DateTimeFormat("en-US").format(e)}`
					}
					return ""
				},
				membershipEndDate: (e, {
					subredditId: t
				}) => {
					const r = Object(f.o)(e, t);
					return r ? `Paid through ${new Intl.DateTimeFormat("en-US").format(r)}` : ""
				},
				meta: (e, {
					subredditId: t
				}) => Object(f.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				useCrypto: W.j
			});
			var V = Object(n.b)(Y)((function(e) {
					return e.account && e.subreddit ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement("header", {
						className: q.a.title
					}, i.a.createElement("img", {
						className: q.a.crown,
						src: Object(H.a)(e.subreddit, "Crown.gif")
					}), i.a.createElement("div", null, i.a.createElement("div", null, _.fbt._("{memberAlt} {date}", [_.fbt._param("memberAlt", e.meta.memberAlt), _.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.useCrypto && i.a.createElement("div", {
						className: q.a.membershipEndDate
					}, e.membershipEndDate))), i.a.createElement(G.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: q.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				X = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				K = r("./src/reddit/controls/Button/index.tsx"),
				Q = r("./src/reddit/helpers/economics/membershipPage.ts"),
				J = r("./node_modules/uuid/v4.js"),
				ee = r.n(J),
				te = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				re = r.n(te);
			const se = Object(d.c)({
				meta: (e, {
					subredditId: t
				}) => Object(f.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var ie = Object(x.c)(Object(n.b)(se)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = ee()();
					return i.a.createElement("footer", {
						className: e.className
					}, i.a.createElement(K.k, {
						className: re.a.cta,
						disabled: !e.subreddit,
						to: Object(Q.a)(t, r),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more",
								...v.defaults(e),
								subreddit: v.subreddit(e)
							}))
						}
					}, _.fbt._("Get {membershipAlt}", [_.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				ne = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				de = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				ae = r.n(de);
			class oe extends i.a.Component {
				componentDidMount() {
					Object(X.b)()
				}
				render() {
					return this.props.account ? i.a.createElement("div", {
						className: this.props.className
					}, i.a.createElement(ne.a, {
						className: ae.a.benefits,
						hideSlideshow: this.props.hideSlideshow,
						subredditId: this.props.subredditId
					}), !this.props.hideSlideshow && i.a.createElement(ie, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const ce = Object(d.c)({
				account: e => e.user.account
			});
			var ue = Object(n.b)(ce)(oe),
				me = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				le = r.n(me);
			const be = "subreddit-premium-commuity-card-dismiss";
			class pe extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						checkoutOpen: !1
					}, this.openCheckout = () => {
						this.setState({
							checkoutOpen: !0
						})
					}, this.closeCheckout = () => {
						this.setState({
							checkoutOpen: !1
						})
					}
				}
				componentDidMount() {
					this.fetchData()
				}
				componentDidUpdate(e) {
					e.subredditId !== this.props.subredditId && this.fetchData()
				}
				fetchData() {
					this.props.onFetchDismissedBanners(), this.props.onFetchSubscriptionData()
				}
				render() {
					if (!this.props.userIsLoggedIn || !this.props.premiumSubscriptionsEnabled) return null;
					const {
						showBanner: e
					} = this.props;
					let t;
					return t = this.props.userIsPremiumSubscriber === f.a.Subscribed ? i.a.createElement(i.a.Fragment, null, i.a.createElement(V, {
						subredditId: this.props.subredditId
					}), i.a.createElement(N, {
						className: le.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.customCrypto ? this.openCheckout : void 0
					}), this.props.customCrypto && this.state.checkoutOpen && i.a.createElement(b.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === f.a.NotSubscribed ? i.a.createElement(i.a.Fragment, null, e && i.a.createElement(i.a.Fragment, null, i.a.createElement(g.a, {
						id: be,
						className: le.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), i.a.createElement(F, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: be,
						onClickDismiss: this.props.onDismissBanner
					})), i.a.createElement(ue, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), i.a.createElement(N, {
						className: Object(c.a)(le.a.controlsPrePurchase, {
							[le.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : i.a.createElement($, null), i.a.createElement(p.a, {
						className: Object(c.a)(this.props.className, le.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const he = Object(d.c)({
				customCrypto: a.d.spCustomCrypto,
				dropdownIsOpen: Object(y.b)(be),
				meta: (e, {
					subredditId: t
				}) => Object(f.r)(e, t),
				premiumSubscriptionsEnabled: a.d.spSpecialMemberships,
				showBanner: (e, {
					subredditId: t
				}) => !1 === Object(f.g)(e, t, h.a.AnimatedCard),
				userHasBadges: (e, {
					subredditId: t
				}) => Object(f.t)(e, t),
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(f.w)(e, t)
			});
			var ge = Object(n.b)(he, (e, {
				subredditId: t
			}) => ({
				onDismissBanner: () => e(Object(u.a)(t, h.a.AnimatedCard)),
				onFetchDismissedBanners: () => e(Object(u.b)(t)),
				onFetchSubscriptionData: () => e(Object(m.g)(t)),
				onOpenDropdown: () => e(Object(l.h)({
					tooltipId: be
				}))
			}))(pe);
			class fe extends i.a.Component {
				render() {
					const {
						cardClassName: e,
						premiumSubscriptionsEnabled: t,
						subredditId: r
					} = this.props;
					return r && t ? i.a.createElement("div", null, i.a.createElement(o.a, {
						subredditId: r
					}), i.a.createElement(ge, {
						className: e,
						subredditId: r
					})) : null
				}
			}
			const ye = Object(d.c)({
				premiumSubscriptionsEnabled: a.d.spSpecialMemberships
			});
			t.default = Object(n.b)(ye)(fe)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, i, n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, r, s) {
				return Object(d.a)(e, {
					endpoint: `${n.a.metaUrl}/storage/${t}/me/${r}`,
					method: "patch",
					data: s
				})
			}
			async function o(e, t) {
				const r = await async function(e, t, r) {
					return Object(d.a)(e, {
						endpoint: `${n.a.metaUrl}/storage/${t}/me/${r}`,
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return r.ok && r.body || {}
			}
			async function c(e, t, r, i) {
					const n = await o(e, t),
						d = {
							...n,
							[r]: i
						};
					return (await a(e, t, s.UpsellBanners, d)).ok ? d : n
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(i || (i = {}));
			const u = async (e, t, r) => c(e, t, r, !0), m = async (e, t, r) => c(e, t, r, !1), l = (e, t) => a(e, t, s.UpsellBanners, Object.keys(i).reduce((e, t) => (e[i[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");
			const n = (e, t) => Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
				d = (e, t) => Object(i.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				n = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts"),
				a = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
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
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
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

			function l(e, t) {
				return Object(d.a)(Object(i.a)(e, [n.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(({
							data: e
						}) => Object(o.a)(e)).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const r = await Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!r.ok) throw new Error(`Error fetching provisional membership: ${Object(a.b)(r.error)}`);
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
			var s = r("./node_modules/lodash/merge.js"),
				i = r.n(s),
				n = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/badges.ts"),
				a = r("./src/reddit/endpoints/governance/community.ts"),
				o = r("./src/reddit/endpoints/governance/products/badges.ts"),
				c = r("./src/reddit/endpoints/governance/requester.ts");
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
						return Object(c.a)(e, {
							method: "get",
							endpoint: `${n.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					m = Object(a.a)(e, {
						subredditId: t
					}),
					l = Object(o.b)(e, t),
					b = Object(d.c)(e, t, r),
					[p, h, g, f] = await Promise.all([u, m, l, b]);
				if (p.ok ? s.collections = p.body : s.errors.collections = p.error, h.ok) {
					const e = h.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, f.ok ? (i()(s.badges, f.body.badges), s.userOwnedBadges = f.body.userOwnedBadges) : s.errors.userBadges = f.error, s
			}
			const m = (e, t) => Object(c.a)(e, {
				endpoint: `${n.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");
			async function n(e, t, r) {
				const n = Object(i.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${s.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: r
						}
					}),
					d = await n;
				if (d.ok) {
					const e = {},
						t = {},
						r = d.body;
					return Object.keys(r).forEach(s => {
						const i = r[s];
						t[s] = i, e[i.userId] || (e[i.userId] = []), e[i.userId].push(i.id)
					}), {
						...d,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return d
			}
			async function d(e, t, r) {
				const n = await Object(i.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (n.ok) {
					const e = {},
						t = [],
						r = n.body;
					return Object.keys(r).forEach(s => {
						const i = r[s];
						e[s] = i, t.push(i.id)
					}), {
						...n,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return n
			}

			function a(e, t, r, n = !0) {
				return Object(i.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: n
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var s = r("./src/config.ts"),
				i = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e, t) {
				return Object(n.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: i.eb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return f
			}));
			var s, i = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function o(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, r) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(n.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(n.a)(e, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}));
			const l = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function f(e, t) {
				return await Object(n.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function n(e, t) {
				return Object(i.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function d(e, t) {
				return Object(i.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function a(e, t) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function o(e, t) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
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
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function i(e, t) {
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

			function i(e) {
				return [...e].sort(s)
			}
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function i(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function n(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(i).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function d(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				i = r("./src/lib/fastdom/index.ts");
			const n = "https://js.stripe.com/v3/",
				d = "https://www.paypalobjects.com/api/checkout.js",
				a = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function o(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => i.a.write(() => {
					t() && r();
					const s = document.head;
					let i = s.querySelector(`script[src='${e}']`);
					i || ((i = document.createElement("script")).src = e, s.appendChild(i)), i.addEventListener("load", (function e() {
						this.removeEventListener("load", e), r()
					}))
				}))
			}

			function c() {
				return o(n, () => "undefined" != typeof Stripe)
			}

			function u() {
				return o(d, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function m() {
				return Promise.all(Object.keys(a).map(e => {
					const t = "__" + e;
					return o(a[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js");

			function i(e, t) {
				const [r, i] = Object(s.useState)(e);
				return [r, e => {
					t.current && i(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);

			function n(e) {
				return i.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), i.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return a
			}));
			var s, i, n = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(i || (i = {}));
			const d = {
					[s.Loyalty]: n.a.First,
					[s.Achievement]: n.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === n.a.First ? s.Loyalty : e === n.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, i, n, d;
			r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(i || (i = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(n || (n = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(d || (d = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/config.ts");
			const i = (e, t) => `${s.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var s, i = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const n = {
				status: s.NotFetched
			};
			t.b = (e = n, t) => {
				switch (t.type) {
					case i.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: s,
									...i
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: i
									}
								}
							}
						}
						return e;
					case i.e:
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: s,
									...i
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: i
									}
								}
							}
						}
						return e;
					case i.b:
						return {
							error: t.payload.error, status: s.Failure
						};
					case i.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case i.d:
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
			var s, i = r("./src/lib/constants/specialMembership.ts"),
				n = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				d = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const c = {};

			function u(e) {
				return "userId" in e
			}

			function m(e, t, r, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(i => {
						let n;
						(n = e.placement ? e.placement === a.a.First ? s[o.a.Loyalty][i] : s[o.a.Achievement][i] : u(e) ? s[o.a.Cosmetic][o.c.MyBadges][i] : s[o.a.Cosmetic][o.c.Gallery][i]) && (u(e) ? r.has(e.id) && n.unlocked.push(e) : t.has(e.id) || n.locked.push(e))
					})
				})
			}

			function l(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return r === s ? Object(d.b)(e, t) : r - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === i.a).map(l).sort((e, r) => {
					const s = t[e.id],
						i = t[r.id];
					return Object(d.b)(s, i)
				})
			}

			function p(e) {
				const t = {
					[o.a.Loyalty]: {},
					[o.a.Achievement]: {},
					[o.a.Cosmetic]: {
						[o.c.Gallery]: {},
						[o.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const s = e.collections[r],
						i = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[o.a.Loyalty][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[o.a.Achievement][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[o.a.Cosmetic][o.c.Gallery][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[o.a.Cosmetic][o.c.MyBadges][r] = {
						...i,
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
				return m(Object.keys(e.badges).map(t => e.badges[t]), r, s, t), m(Object.keys(e.products).map(t => e.products[t]), r, s, t), {
					collections: {
						[o.a.Loyalty]: b(t[o.a.Loyalty], e.collections),
						[o.a.Achievement]: b(t[o.a.Achievement], e.collections),
						[o.a.Cosmetic]: {
							[o.c.Gallery]: b(t[o.a.Cosmetic][o.c.Gallery], e.collections),
							[o.c.MyBadges]: b(t[o.a.Cosmetic][o.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = c, t) => {
				switch (t.type) {
					case n.a: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === s.Fetched ? {
							...e,
							[r]: {
								...i,
								data: {
									...i.data
								},
								raw: {
									...i.raw
								}
							}
						} : e
					}
					case n.h: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === s.Fetched ? {
							...e,
							[r]: {
								...i,
								data: {
									...i.data,
									subscription: {
										...i.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...i.raw,
									subscription: {
										...i.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case n.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: p(r),
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
				return g
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "q", (function() {
				return w
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "y", (function() {
				return S
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "n", (function() {
				return v
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "k", (function() {
				return M
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "x", (function() {
				return A
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "v", (function() {
				return L
			})), r.d(t, "s", (function() {
				return $
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "m", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				n = r("./src/reddit/helpers/richTextJson/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				a = r("./src/reddit/models/Badge/managementPage.ts"),
				o = r("./src/reddit/models/Gold/Powerups/index.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				u = r("./src/reddit/models/Product/index.ts"),
				m = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/gold/powerups/index.ts");
			const h = [],
				g = (e, t) => {
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
				f = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const _ = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = f(e, t),
							s = Date.now();
						return r && s < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				E = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[a.a.Loyalty]: s.find(e => e.placement === d.a.First),
							[a.a.Achievement]: s.find(e => e.placement === d.a.Second),
							[a.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function x(e, t) {
				return (null == e ? void 0 : e.length) ? Object(i.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const w = (e, t, r) => {
					var i;
					if (!s.d.spBadges(e)) return h;
					return x(null === (i = e.users.appliedBadges[r]) || void 0 === i ? void 0 : i[t], e.badges.models)
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

			function S(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(d.e)(r) && r.userId === i) return r;
				const n = e.badges.models,
					a = e.user.ownedBadges[s] || {},
					o = Object(d.e)(r) ? r.type : r.id;
				return Object.keys(a).map(e => n[e]).find(e => e && e.type === o)
			}

			function v(e, t, r, s) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === l.a.Fetched) {
					if (r === a.a.Loyalty || r === a.a.Achievement) return i.data.collections[r];
					if (r === a.a.Cosmetic && s) return i.data.collections[r][s]
				}
				return h
			}

			function j(e, t) {
				const r = v(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function I(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(d.f)
				}
				return h
			}

			function P(e, t) {
				return v(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(d.f)(e) || !!e.price))
			}
			const k = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === m.a.Fetched && r.data.stripe && r.data.stripe.sources) {
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
				if (r.status === m.a.Fetched && r.data.braintree && r.data.braintree.sources) {
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
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === u.a.Membership && t && e.subredditId === t),
				T = (e, t) => {
					if (!t) return {};
					const r = B.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = g(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				D = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						s = r && r.extra && r.extra.nomenclature || B;
					return {
						prices: T(e, t),
						member: s.member || B.member,
						memberPlural: s.memberPlural || B.memberPlural,
						memberAlt: s.memberAlt || B.memberAlt,
						memberAltPlural: s.memberAltPlural || B.memberAltPlural,
						membership: s.membership || B.membership,
						membershipAlt: s.membershipAlt || B.membershipAlt
					}
				},
				A = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === m.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return t.status === m.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				R = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				L = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				$ = (e, t, r) => {
					const i = "replyToPost" !== r && Object(b.a)(e, {
						commentId: r
					});
					if (!!i && Object(n.a)(i)) return !0;
					if (t && Object(p.o)(e, {
							subredditId: t,
							benefit: o.a.CommentsWithGifs
						})) return !0;
					const d = s.d.spGiphy(e),
						a = L(e, t);
					return d && a
				},
				G = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				H = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "r", (function() {
				return x
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "p", (function() {
				return S
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "j", (function() {
				return v
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts");
			const n = [],
				d = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = x(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const r = _(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				m = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : d
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const r = l(e, t),
						s = r && r.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				p = (e, t) => {
					const r = l(e, t);
					return r && r.amount || "0"
				},
				h = (e, t) => {
					const r = Object(s.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || n
				},
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				y = (e, t) => {
					const r = S(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				_ = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				x = (e, t) => {
					const r = E(e, t);
					return r && r.walletProvider
				},
				w = (e, t) => {
					const r = x(e, t),
						s = E(e, t);
					return r && r.provider || s && s.provider
				},
				O = (e, t) => {
					const r = w(e, t);
					return r === i.a.Ethereum || r === i.a.Rinkeby || r === i.a.EthTraderEthereum || r === i.a.EthTraderRinkeby
				},
				S = (e, t) => {
					const r = x(e, t),
						s = w(e, t);
					if (r && !r.inTransition && s === i.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const n = r && r.extra && r.extra.contracts,
						d = n && n.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				C = (e, {
					subredditId: t
				}) => {
					const r = x(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				v = (e, t) => {
					const r = E(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				n = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const s = r.subredditId,
							i = Object.keys(e.user.ownedBadges[s] || {}),
							n = e.badges.models,
							d = Date.now();
						let a = !1;
						return i.forEach(e => {
							const r = n[e];
							r && r.type === t && r.endsAt > d && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.07cdab09f27cf490bf3d.js.map