// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.5128bdb46054f774e871.js
// Retrieved at 5/10/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_copyArray.js"),
				n = s("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_shuffleSelf.js"),
				n = s("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(n(e))
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, n) : []
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseForOwn.js"),
				n = s("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && r(e, n(t))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayShuffle.js"),
				n = s("./node_modules/lodash/_baseShuffle.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (i(e) ? r : n)(e)
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				n = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				i = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				o = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./src/reddit/endpoints/economics/banners.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/economics/banners/constants.ts");
			const o = Object(n.a)(i.c),
				d = Object(n.a)(i.d),
				a = Object(n.a)(i.a),
				c = Object(n.a)(i.b),
				u = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const a = s();
					if (!a.user.account) return;
					if (a.economics.banners.dismissedBanners[e]) return;
					t(o(e));
					const c = await Object(r.b)(i(), e);
					t(d({
						subredditId: e,
						data: c
					}))
				}, l = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					s(a({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(o(), e, t)
				}, m = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					s(c({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(o(), e, t)
				}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				n = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				n = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return b
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeRequest/index.ts"),
				i = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			var d = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/me/constants.ts");
			const c = Object(d.a)(a.a),
				u = Object(d.a)(a.b),
				l = Object(d.a)(a.c),
				m = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = e && e.includeMemberships || !1,
						a = e && e.forceFetch || !1,
						u = s();
					if (!u.economics.me.fetched || d && !u.economics.me.data.specialMemberships || a) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${i.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(n(), d);
						if (e.ok) {
							const s = e.body;
							d && !s.specialMemberships && (s.specialMemberships = {}), t(c(s))
						}
					}
				}, b = () => async (e, t) => {
					const s = t(),
						i = s.economics.me.data;
					if (!i) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${i.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(n.b)({
								endpoint: t,
								method: r.jb.GET
							});
						s.ok && s.body && e(l(s.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				d = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(r.a)(o.a),
				a = Object(r.a)(o.b),
				c = Object(r.a)(o.c),
				u = Object(r.a)(o.d),
				l = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				b = Object(r.a)(o.g),
				p = Object(r.a)(o.h),
				h = Object(r.a)(o.i),
				f = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "f", (function() {
				return I
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forOwn.js"),
				n = s.n(r),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				o = s("./src/reddit/endpoints/economics/emojis.ts"),
				d = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				a = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = s("./src/reddit/endpoints/governance/badges.ts"),
				u = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, s) {
				return Object(l.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${s}` + "&types=emotes_pack,giphy"
				})
			}
			var b = s("./src/reddit/models/Badge/index.ts"),
				p = s("./src/reddit/models/Badge/managementPage.ts"),
				h = s("./src/reddit/models/Product/index.ts"),
				f = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/selectors/products.ts"),
				_ = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				y = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function O(e) {
				return !!e && "removeBadge" === e.type
			}

			function S(e) {
				if (!O(e)) return e
			}
			const v = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const n = t().economics.me.data.specialMemberships || {},
					i = Object.keys(n);
				if (i.length) {
					const t = await Object(d.e)(r(), i);
					t.ok && e(Object(y.g)(t.body))
				}
			}, C = (e, t) => async (s, r, n) => {
				let {
					apiContext: i
				} = n;
				const o = r().user.account,
					d = r().economics.subredditPremium[e],
					c = !d || d.status !== f.a.Fetched || t;
				if (o && c) {
					const t = await Object(a.a)(i(), e, o.id);
					s(Object(y.i)(t))
				}
			}, w = e => async (t, s, r) => {
				let {
					apiContext: n
				} = r;
				const o = s(),
					d = o.user.account,
					a = Object(g.f)(o, e.subredditId),
					u = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (d && e.badge) {
					let s, r;
					s = e.placement === b.a.First ? a[p.a.Loyalty] : e.placement === b.a.Second ? a[p.a.Achievement] : a[p.a.Cosmetic], t(Object(y.a)({
						...e,
						badge: S(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					})), O(e.badge) && s ? r = await Object(c.a)(n(), e.subredditId, s.id, !1) : O(e.badge) || (r = await Object(c.a)(n(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(y.a)({
						...e,
						badge: s,
						currentAppliedBadges: u,
						userId: d.id
					})), Object(i.a)(t, r.error))
				}
			}, j = (e, t) => async (s, r, n) => {
				let {
					apiContext: i
				} = n;
				await s(C(e, !0));
				const o = r().economics.subredditPremium[e];
				if (o && o.status === f.a.Fetched) {
					const r = o.data.userOwnedBadges.find(e => e.type === t.id);
					r && (s(w({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), s(Object(y.d)(p.c.MyBadges)))
				}
			}, x = e => async (t, s, r) => {
				let {
					apiContext: d
				} = r;
				const a = s().user.account,
					c = !s().economics.emotes[e],
					u = !s().economics.gifs[e];
				if (a && (c || u)) {
					const [s, r] = await Promise.all([Object(o.b)(d(), e), m(d(), e, a.id)]);
					if (!r.ok) return void Object(i.a)(t, r.error);
					const c = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					n()(r.body, e => {
						e.type === h.a.EmotesPack ? c.emotes.push(e) : e.type === h.a.Giphy && c.giphy.push(e)
					}), t(Object(y.e)({
						subredditId: e,
						products: c
					}))
				}
			}, P = (e, t, s) => async (r, n, i) => {
				let {
					apiContext: o
				} = i;
				if (await r(C(e, !0)), s && t) {
					const s = n(),
						i = Object(g.f)(s, e),
						o = Object(E.a)(s, t);
					if (!i[Object(p.d)(o.placement)] && o) {
						const t = Object(g.l)(s, {
							subredditId: e,
							badge: o
						});
						t && await r(w({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(y.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, I = e => async (t, s, r) => {
				let {
					apiContext: n
				} = r;
				const {
					wallet: i
				} = await Object(d.c)(n(), e);
				t(Object(y.f)({
					wallet: i
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "l", (function() {
				return p
			})), s.d(t, "m", (function() {
				return h
			})), s.d(t, "n", (function() {
				return f
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "p", (function() {
				return E
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "r", (function() {
				return y
			})), s.d(t, "s", (function() {
				return O
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "u", (function() {
				return v
			})), s.d(t, "v", (function() {
				return C
			})), s.d(t, "w", (function() {
				return w
			})), s.d(t, "x", (function() {
				return j
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				n = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				i = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				a = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				y = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				O = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				v = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				C = "GOVERNANCE__WALLETS_FETCH_PENDING",
				w = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/actions/toaster.ts"),
				n = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = s("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: i.b.Error,
					text: Object(n.a)(t)
				}))
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return j
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "a", (function() {
				return M
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("SubredditPremiumBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				b = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				f = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = s("./src/reddit/models/Badge/index.ts");
			var E = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				_ = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				y = s.n(_);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "add-custom-badge-tooltip",
				v = 100,
				C = 2 * v,
				w = 24;
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, v)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, C)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(a.a)(y.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${S}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || w;
					return n.a.createElement(r.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: y.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: y.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(f.a, {
						className: y.a.addCustom
					})), n.a.createElement(E, {
						className: y.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(g.d)(s, s, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(a.a)(y.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: y.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${s}px`
							}
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: y.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(b.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const x = [],
				P = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[s]) || x
					},
					allBadges: e => e.badges.models,
					useHovercard: p.d.spSpecialMemberships
				}),
				I = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s
						} = t;
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[s]) || x
					},
					allBadges: e => e.badges.models,
					useHovercard: p.d.spSpecialMemberships
				}),
				N = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				});

			function k(e) {
				const {
					badgeIds: t,
					allBadges: s,
					...r
				} = e, i = t.map(e => s[e]).filter(Boolean);
				return n.a.createElement(j, O({
					badges: i
				}, r))
			}
			const A = Object(i.b)(P, N)(k),
				M = Object(i.b)(I, N)(k)
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				l = s("./src/reddit/featureFlags/index.ts"),
				m = s("./src/reddit/hooks/useUserContext.ts"),
				b = s("./src/reddit/selectors/economics.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = s.n(p);

			function f(e) {
				var t, s;
				const {
					currentUser: r
				} = Object(m.a)(), i = null !== (t = e.badges) && void 0 !== t ? t : Object(b.i)(e.badgeIds, null !== (s = e.allBadges) && void 0 !== s ? s : {});
				return i.length ? n.a.createElement(u.b, {
					useHovercard: !0,
					badges: i,
					badgeSize: e.badgeSize,
					className: Object(d.a)(e.className, h.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && i.length < 2 && (null == r ? void 0 : r.id) === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			const g = [];
			t.b = Object(i.b)(() => Object(o.c)({
				badgeIds: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					var n;
					return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[s]) || g
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: l.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => l.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(a.j)())
			}))(f)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less": function(e, t, s) {
			e.exports = {
				clickable: "_2W-yYYgiKN7Nv6X-LYi_9w",
				container: "_2FOpaOYxDZOwfOdaggJpwm",
				description: "_2Q0iZfK75k4af7Yh_QhiFm",
				user: "_3B1S9qGju-2qKwMcvkVFtz",
				userContainer: "_2Y-fftIz65RlW68o233ly9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/helpers/economics/sortBadges.ts"),
				u = s("./src/reddit/hooks/useUserContext.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = s.n(p);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onShowTooltip: t => e(Object(a.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(a.i)()),
					onOpenModal: () => e(Object(d.c)({
						subredditId: s,
						initialView: l.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(d.j)())
				}
			})((function(e) {
				const {
					currentUser: t
				} = Object(u.a)();
				if (!t) return null;
				const s = Object(c.a)(e.badges),
					r = s[s.length - 1],
					i = r && r.extra && r.extra.style && r.extra.style.backgroundColor,
					d = r && r.extra && r.extra.style && r.extra.style.color;
				return n.a.createElement("div", {
					className: Object(o.a)(e.className, h.a.container, {
						[h.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: i || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, n.a.createElement("div", {
					className: h.a.userContainer
				}, n.a.createElement(m.a, {
					badges: s,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(b.a, {
					badges: s,
					subredditId: e.subredditId,
					userId: t.id
				}, n.a.createElement("span", {
					className: h.a.user
				}, t.username || t.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: h.a.description
				}, i || d ? i ? f._("Username and content is distinguished with a color matching the last badge.", null, {
					hk: "M24zz"
				}) : f._("Username is distinguished with a color matching the last badge.", null, {
					hk: "2fnnbI"
				}) : f._("This is how your username will appear.", null, {
					hk: "meyGf"
				})))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function a(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? n.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? {
						...e.children.props.style || {},
						color: s.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(i.b)(() => Object(o.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(d.q)(e, s, r)
				}
			}))(a)
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var r, n, i, o;

			function d(e) {
				const {
					platform: t,
					playerType: s,
					region: r,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${r}_${t}_${s}_${n}.svg`
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return i
				})), s.d(t, "d", (function() {
					return d
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(i || (i = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				a = s.n(d);
			const c = 250,
				u = 100;
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(a.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let r = 0; r < u; r++) this.createPiece(t, s);
						for (let r = 0; r < c - u; r++) window.setTimeout(() => this.createPiece(t, s), 1e4 * r / (c - u))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								r = (6 * Math.random() + 4) * t / 1e3;
							s.className = a.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, r, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, r) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(a.a.container));
							o.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * r + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								o.a.write(() => {
									e.style.top = s + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, s, r), 1e3 * t)
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
					return n.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var m = s("./src/reddit/featureFlags/component.tsx"),
				b = s("./src/reddit/hooks/useSafeState.ts"),
				p = s("./src/reddit/selectors/economics.ts");
			t.a = Object(m.a)("spSpecialMemberships", (function(e) {
				const t = Object(r.useRef)(!0),
					[s, o] = Object(b.a)(!1, t),
					d = Object(i.e)(t => Object(p.x)(t, e.subredditId)),
					a = Object(r.useRef)(d);
				return Object(r.useEffect)(() => () => {
					t.current = !1
				}, []), Object(r.useEffect)(() => {
					a.current === p.a.NotSubscribed && d === p.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), a.current = d
				}, [d]), d === p.a.Subscribed ? n.a.createElement(l, {
					letItRain: s
				}) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less": function(e, t, s) {
			e.exports = {
				addIcon: "_1MMoCnZ_nk8-cC1k2OGigA",
				icon: "_1pK796WiMaMbBRVFxjXfBG",
				getBadges: "ildykrVt3Mt9gMkXKFzfS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1yQfxTZ_0dL42phkVSX3RV"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less": function(e, t, s) {
			e.exports = {
				crown: "_3HEkr15Qwf5sGoGnbfINrv",
				title: "_11YSlHNYU0OpkP9slIBdPL",
				membershipEndDate: "_3ttL3H-e3ZG3QtOYpOzxPP"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less": function(e, t, s) {
			e.exports = {
				cta: "_2x-eGz_YpPIv5j0CKVxQqi"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less": function(e, t, s) {
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
				rowBadge: "_3qzww-Y_LhfpPS8LxLZLqk",
				selection: "_3u2ui0EFGUMzQ4sp5UDL2t",
				title: "mU_g_sx9q_eDtVlJGYxm-",
				username: "Wn_hZZCRmaPUoiOnUYCMI"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				u = s("./src/reddit/selectors/economics.ts"),
				l = s("./node_modules/fbt/lib/FbtPublic.js"),
				m = s("./node_modules/lodash/shuffle.js"),
				b = s.n(m),
				p = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				h = s("./src/reddit/models/Badge/index.ts"),
				f = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				g = s.n(f);
			const E = 10,
				_ = 500,
				y = 30,
				O = 132;
			class S extends n.a.Component {
				constructor(e) {
					super(e), this.badgesForLine = [], this.setRowRef = e => {
						e && (this.rowRef = e)
					}, this.state = {
						currentlySelected: null
					}, this.intervalRef = null, this.rowRef = null, this.chooseBadgesForLines()
				}
				componentDidMount() {
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const e = window.getComputedStyle(this.rowRef).transform,
							t = parseFloat(null == e ? void 0 : e.split(",")[4]);
						if (isNaN(t)) return;
						const s = Math.round((O - t) / y / 2),
							r = this.badgesForLine[1][s % this.badgesForLine[1].length];
						this.setState({
							currentlySelected: r
						})
					}, _)
				}
				componentDidUpdate() {
					this.chooseBadgesForLines()
				}
				componentWillUnmount() {
					this.intervalRef && clearInterval(this.intervalRef)
				}
				chooseBadgesForLines() {
					var e;
					if (this.badgesForLine.length || !(null === (e = this.props.styleBadges) || void 0 === e ? void 0 : e.length)) return;
					this.badgesForLine = [];
					let t = [];
					for (let s = 0; s < 3; s++) {
						t.length < (s + 2) * E && (t = b()(this.props.styleBadges));
						const e = [];
						for (let r = 0; r < E; r++) e.push(t[(s * E + r) % t.length]);
						this.badgesForLine.push(e)
					}
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: s
					} = this.props, {
						currentlySelected: r
					} = this.state;
					if (!t) return null;
					const i = this.badgesForLine;
					return n.a.createElement("article", {
						className: Object(a.a)(g.a.container, e)
					}, n.a.createElement("div", {
						className: g.a.background
					}), n.a.createElement("div", {
						className: g.a.content
					}, n.a.createElement("header", {
						className: g.a.title
					}, l.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.length && n.a.createElement("div", {
						className: g.a.rows
					}, n.a.createElement(v, {
						badges: i[0],
						style: {
							animationDuration: "20s"
						}
					}), n.a.createElement(v, {
						badges: i[1],
						innerRef: this.setRowRef,
						style: {
							animationDirection: "reverse",
							animationDuration: "25s"
						}
					}), n.a.createElement(v, {
						badges: i[2],
						style: {
							animationDuration: "30s"
						}
					})), n.a.createElement("div", {
						className: g.a.username,
						style: {
							color: null == r ? void 0 : r.color
						}
					}, r && n.a.createElement("img", {
						className: g.a.badgePreview,
						src: r.url
					}), s), n.a.createElement("footer", {
						className: g.a.explanation
					}, l.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), n.a.createElement("div", {
						className: g.a.selection
					}, n.a.createElement(p.a, {
						className: g.a.check
					}))))
				}
			}
			const v = e => {
					let {
						badges: t,
						innerRef: s,
						style: r
					} = e;
					return n.a.createElement("div", {
						className: g.a.row,
						ref: s,
						style: r
					}, t.map(e => n.a.createElement("img", {
						key: e.url,
						src: e.url,
						className: g.a.rowBadge
					})), t.map(e => n.a.createElement("img", {
						key: e.url + 2,
						src: e.url,
						className: g.a.rowBadge
					})))
				},
				C = Object(d.c)({
					styleBadges: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(u.d)(e, s).filter(e => {
							var t;
							return !(null === (t = e.collections) || void 0 === t ? void 0 : t.custom)
						}).map(e => {
							var t, s;
							return {
								url: Object(h.d)(60, 60, e).url2x,
								color: (null === (s = null === (t = e.extra) || void 0 === t ? void 0 : t.style) || void 0 === s ? void 0 : s.color) || ""
							}
						}).filter(e => e.color)
					},
					subreddit: (e, t) => {
						let {
							subredditId: s
						} = t;
						return e.subreddits.models[s]
					},
					username: e => {
						var t;
						return `u/${(null===(t=e.user.account)||void 0===t?void 0:t.displayText)||"username"}`
					}
				});
			var w = Object(o.b)(C)(S),
				j = s("./src/config.ts"),
				x = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				P = s.n(x);
			const I = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const N = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var k = Object(o.b)(N)((function(e) {
					const {
						className: t,
						subreddit: s
					} = e;
					return s ? n.a.createElement("article", {
						className: Object(a.a)(P.a.container, t)
					}, n.a.createElement("div", {
						className: P.a.background
					}), n.a.createElement("div", {
						className: P.a.content
					}, n.a.createElement("header", {
						className: P.a.title
					}, l.fbt._("emotes", null, {
						hk: "1VLDec"
					})), n.a.createElement("div", {
						className: P.a.example
					}, n.a.createElement("img", {
						className: P.a.drawer,
						src: `${j.a.assetPath}/img/memberships/emoji-drawer.png`
					}), n.a.createElement("div", {
						className: P.a.emojisTitle
					}, l.fbt._("Add r/{communityName} emote", [l.fbt._param("communityName", s.name)], {
						hk: "1pL2rY"
					})), n.a.createElement("div", {
						className: P.a.emojisContainer
					}, n.a.createElement("div", {
						className: P.a.emojis
					}, I.map(e => n.a.createElement("img", {
						className: P.a.emoji,
						key: e,
						src: e
					}))), n.a.createElement("div", {
						className: P.a.overflow
					}))), n.a.createElement("footer", {
						className: P.a.explanation
					}, l.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				A = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				M = s.n(A);
			const B = (() => {
				const e = {};
				return async t => {
					if (e[t]) return e[t];
					const s = {
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
					return e[t] = s, s
				}
			})();
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await B(e),
						s = [],
						r = [];
					t.data.forEach((e, t) => {
						const n = e.images.fixed_width.url;
						t % 2 == 0 ? s.push(n) : r.push(n)
					}), this.setState({
						imagesCol1: s,
						imagesCol2: r
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? n.a.createElement("article", {
						className: Object(a.a)(M.a.container, e)
					}, n.a.createElement("div", {
						className: M.a.background
					}), n.a.createElement("div", {
						className: M.a.content
					}, n.a.createElement("header", {
						className: M.a.title
					}, l.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), n.a.createElement("div", {
						className: M.a.example
					}, n.a.createElement("img", {
						className: M.a.drawer,
						src: `${j.a.assetPath}/img/memberships/gif-drawer.png`
					}), n.a.createElement("div", {
						className: M.a.imagesContainer
					}, n.a.createElement("div", {
						className: M.a.images
					}, n.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol1.map(e => n.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					}))), n.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol2.map(e => n.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					})))), n.a.createElement("div", {
						className: M.a.overflow
					}))), n.a.createElement("footer", {
						className: M.a.explanation
					}, l.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const D = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var R = Object(o.b)(D)(T),
				L = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				U = s.n(L);
			const F = 1e4,
				G = 110;
			class $ extends n.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, F)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [w, k, R];
							default:
								return [w, R]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, F)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: s,
						subredditId: o,
						subreddit: d
					} = this.props, {
						currentSlideIdx: u
					} = this.state;
					return d ? n.a.createElement("div", {
						className: e
					}, n.a.createElement("header", {
						className: U.a.title
					}, n.a.createElement("img", {
						className: U.a.crown,
						src: c.a
					}), s.membershipAlt), !t && n.a.createElement(n.a.Fragment, null, n.a.createElement("article", {
						className: U.a.benefits
					}, n.a.createElement(i.TransitionMotion, {
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
								left: Object(i.spring)(0)
							}
						}],
						willEnter: () => ({
							left: G
						}),
						willLeave: () => ({
							left: Object(i.spring)(-G)
						})
					}, e => n.a.createElement(r.Fragment, null, e.map(e => n.a.createElement("div", {
						className: U.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, n.a.createElement(e.data.Component, {
						subredditId: o
					})))))), n.a.createElement("footer", {
						className: U.a.indicators
					}, this.slides.map((e, t) => n.a.createElement("div", {
						className: Object(a.a)(U.a.indicator, {
							[U.a.indicatorSelected]: t === u
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const W = Object(d.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(u.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				},
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(o.b)(W)($)
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less": function(e, t, s) {
			e.exports = {
				badgeEditEntry: "_1GSunEdLQjWPxj6Q-50qM1",
				benefits: "_3LA8PDUkklfKqrSGLdJyGv",
				user: "_3v2THpcGZoJiD5moCouXtU"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1mSkPKPjFPKBRNpXETPzqL",
				controlsPostPurchase: "_19Qm52DVNjA1WxzLyu3954",
				controlsPrePurchase: "_3dkTl0sISRFTNE8vX6W9f4",
				controlsBorder: "_2zAc5yOV9LjQa6Ddh_9Xe9",
				menuIcon: "_34EGSW022m6E7NWmDZvLAK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less": function(e, t, s) {
			e.exports = {
				common: "_3EoqGxiMEOobg5GMawkvnQ",
				buttonText: "bn449F0aAJDYg-12HPth_",
				control: "_1qzq1S-QhnL5j33P9k7r8K",
				icon: "_3BNYLooX5zPfUqx-Z8Emzt",
				title: "_3800inKLwoQARBGF96cZZ",
				user: "_2W6QcOgQ2UEigwA8w2A_sw"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_3_pGUX88wiDRDcorJSqisN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				d = s.n(o);

			function a(e) {
				return n.a.createElement("button", {
					className: Object(i.a)(e.className, d.a.button),
					onClick: t => {
						t.stopPropagation(), e.onClick()
					}
				}, e.children)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				l = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/endpoints/economics/banners.ts"),
				f = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				g = s("./src/reddit/selectors/economics.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				O = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				C = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				w = s("./src/reddit/models/Badge/managementPage.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				x = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				P = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				I = s.n(P);
			const N = Object(o.c)({
				customBadgesEnabled: d.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.j)(e, s)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.u)(e, s)
				}
			});
			var k = Object(O.c)(Object(i.b)(N, (e, t) => {
					let {
						subredditId: s,
						sendEvent: r
					} = t;
					return {
						onOpenBadges: () => e(Object(y.c)({
							subredditId: s,
							initialView: w.c.MyBadges
						})),
						onOpenGallery: () => {
							e(Object(y.c)({
								subredditId: s,
								initialView: w.c.Gallery
							})), r(e => ({
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_badge_gallery",
								...j.n(e),
								subreddit: j.gb(e)
							}))
						},
						onOpenUploadDialog: () => e(Object(y.j)())
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && n.a.createElement(x.a, {
						onClick: e.onOpenBadges
					}, n.a.createElement(C.a, {
						className: I.a.icon
					}), _.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && n.a.createElement(x.a, {
						onClick: e.onOpenGallery
					}, n.a.createElement(v.a, {
						className: I.a.icon
					}), _.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && n.a.createElement(x.a, {
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(S.a, {
						className: I.a.addIcon
					}), _.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && n.a.createElement(x.a, {
						onClick: e.onOpenPurchaseModal
					}, n.a.createElement(S.a, {
						className: I.a.addIcon
					}), _.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				A = s("./src/higherOrderComponents/asTooltip.tsx"),
				M = s("./src/reddit/controls/Dropdown/index.tsx"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				T = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				D = s.n(T);
			const R = Object(A.a)(M.a);

			function L(e) {
				return n.a.createElement(R, {
					className: Object(c.a)(D.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, n.a.createElement(B.b, {
					displayText: _.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var U = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				F = s.n(U);

			function G(e) {
				return n.a.createElement("div", {
					className: Object(c.a)(F.a.container, e.className)
				}, n.a.createElement("div", {
					className: F.a.title
				}), n.a.createElement("div", {
					className: F.a.user
				}), n.a.createElement("div", {
					className: F.a.control
				}, n.a.createElement("div", {
					className: F.a.icon
				}), n.a.createElement("div", {
					className: F.a.buttonText
				})))
			}
			var $ = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				W = s("./src/reddit/selectors/crypto/points.ts"),
				H = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				z = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				V = s.n(z);

			function q(e) {
				return !!e
			}
			const Z = Object(o.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(g.f)(e, s);
					return [r[w.a.Loyalty], r[w.a.Achievement], r[w.a.Cosmetic]].filter(q)
				},
				membershipStartDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(g.c)(e, s),
						n = r && r.publishAt;
					if (n) {
						const e = new Date(n);
						return `Since ${new Intl.DateTimeFormat("en-US").format(e)}`
					}
					return ""
				},
				membershipEndDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(g.o)(e, s);
					return r ? `Paid through ${new Intl.DateTimeFormat("en-US").format(r)}` : ""
				},
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.r)(e, s)
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(W.b)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var Y = Object(i.b)(Z)((function(e) {
					return e.account && e.subreddit && e.pointsDetails ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement("header", {
						className: V.a.title
					}, n.a.createElement("img", {
						className: V.a.crown,
						src: H.a
					}), n.a.createElement("div", null, n.a.createElement("div", null, _.fbt._("{memberAlt} {date}", [_.fbt._param("memberAlt", e.meta.memberAlt), _.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.pointsDetails.blockchainProvider && n.a.createElement("div", {
						className: V.a.membershipEndDate
					}, e.membershipEndDate))), n.a.createElement($.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: V.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				X = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				Q = s("./src/reddit/helpers/economics/membershipPage.ts"),
				J = s("./node_modules/uuid/v4.js"),
				ee = s.n(J),
				te = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				se = s.n(te);
			const re = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var ne = Object(O.c)(Object(i.b)(re)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = ee()();
					return n.a.createElement("footer", {
						className: e.className
					}, n.a.createElement(K.n, {
						className: se.a.cta,
						disabled: !e.subreddit,
						to: Object(Q.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more",
								...j.n(e),
								subreddit: j.gb(e)
							}))
						}
					}, _.fbt._("Get {membershipAlt}", [_.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				ie = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				oe = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				de = s.n(oe);
			class ae extends n.a.Component {
				componentDidMount() {
					Object(X.b)()
				}
				render() {
					return this.props.account ? n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(ie.a, {
						className: de.a.benefits,
						hideSlideshow: this.props.hideSlideshow,
						subredditId: this.props.subredditId
					}), !this.props.hideSlideshow && n.a.createElement(ne, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const ce = Object(o.c)({
				account: e => e.user.account
			});
			var ue = Object(i.b)(ce)(ae),
				le = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				me = s.n(le);
			const be = "subreddit-premium-commuity-card-dismiss";
			class pe extends n.a.Component {
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
					return t = this.props.userIsPremiumSubscriber === g.a.Subscribed ? n.a.createElement(n.a.Fragment, null, n.a.createElement(Y, {
						subredditId: this.props.subredditId
					}), n.a.createElement(k, {
						className: me.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.customCrypto ? this.openCheckout : void 0
					}), this.props.customCrypto && this.state.checkoutOpen && n.a.createElement(b.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === g.a.NotSubscribed ? n.a.createElement(n.a.Fragment, null, e && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.a, {
						id: be,
						className: me.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), n.a.createElement(L, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: be,
						onClickDismiss: this.props.onDismissBanner
					})), n.a.createElement(ue, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), n.a.createElement(k, {
						className: Object(c.a)(me.a.controlsPrePurchase, {
							[me.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : n.a.createElement(G, null), n.a.createElement(p.a, {
						className: Object(c.a)(this.props.className, me.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const he = Object(o.c)({
				customCrypto: d.d.spCustomCrypto,
				dropdownIsOpen: Object(E.b)(be),
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.r)(e, s)
				},
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships,
				showBanner: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !1 === Object(g.g)(e, s, h.a.AnimatedCard)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.u)(e, s)
				},
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(g.x)(e, s)
				}
			});
			var fe = Object(i.b)(he, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(u.a)(s, h.a.AnimatedCard)),
					onFetchDismissedBanners: () => e(Object(u.b)(s)),
					onFetchSubscriptionData: () => e(Object(l.g)(s)),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: be
					}))
				}
			})(pe);
			class ge extends n.a.Component {
				render() {
					const {
						cardClassName: e,
						premiumSubscriptionsEnabled: t,
						subredditId: s
					} = this.props;
					return s && t ? n.a.createElement("div", null, n.a.createElement(a.a, {
						subredditId: s
					}), n.a.createElement(fe, {
						className: e,
						subredditId: s
					})) : null
				}
			}
			const Ee = Object(o.c)({
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships
			});
			t.default = Object(i.b)(Ee)(ge)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/config.ts"),
				n = s("./node_modules/lodash/flattenDeep.js"),
				i = s.n(n),
				o = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const d = `${r.a.assetPath}/img/memberships/paywall/crown.gif`,
				a = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				c = new Set(i()(Object.keys(o.a).map(e => Object.keys(o.b).map(t => Object.keys(o.c).map(s => `${s}_${e}_${t}_badge`)))))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, s, r) {
				return Object(o.a)(e, {
					endpoint: `${i.a.metaUrl}/storage/${t}/me/${s}`,
					method: "patch",
					data: r
				})
			}
			async function a(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: `${i.a.metaUrl}/storage/${t}/me/${s}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function c(e, t, s, n) {
					const i = await a(e, t),
						o = {
							...i,
							[s]: n
						};
					return (await d(e, t, r.UpsellBanners, o)).ok ? o : i
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(n || (n = {}));
			const u = async (e, t, s) => c(e, t, s, !0), l = async (e, t, s) => c(e, t, s, !1), m = (e, t) => d(e, t, r.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			const i = (e, t) => Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
				o = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				d = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				a = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
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
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function l(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
				return Object(o.a)(Object(n.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(a.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function b(e, t) {
				const s = await Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
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
				if (!s.ok) throw new Error(`Error fetching provisional membership: ${Object(d.b)(s.error)}`);
				return s.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/merge.js"),
				n = s.n(r),
				i = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/badges.ts"),
				d = s("./src/reddit/endpoints/governance/community.ts"),
				a = s("./src/reddit/endpoints/governance/products/badges.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts");
			async function u(e, t, s) {
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
						return Object(c.a)(e, {
							method: "get",
							endpoint: `${i.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(d.a)(e, {
						subredditId: t
					}),
					m = Object(a.b)(e, t),
					b = Object(o.c)(e, t, s),
					[p, h, f, g] = await Promise.all([u, l, m, b]);
				if (p.ok ? r.collections = p.body : r.errors.collections = p.error, h.ok) {
					const e = h.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return f.ok ? r.products = f.body : r.errors.products = f.error, g.ok ? (n()(r.badges, g.body.badges), r.userOwnedBadges = g.body.userOwnedBadges) : r.errors.userBadges = g.error, r
			}
			const l = (e, t) => Object(c.a)(e, {
				endpoint: `${i.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s) {
				const i = Object(n.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: s
						}
					}),
					o = await i;
				if (o.ok) {
					const e = {},
						t = {},
						s = o.body;
					return Object.keys(s).forEach(r => {
						const n = s[r];
						t[r] = n, e[n.userId] || (e[n.userId] = []), e[n.userId].push(n.id)
					}), {
						...o,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return o
			}
			async function o(e, t, s) {
				const i = await Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${s}`
				});
				if (i.ok) {
					const e = {},
						t = [],
						s = i.body;
					return Object.keys(s).forEach(r => {
						const n = s[r];
						e[r] = n, t.push(n.id)
					}), {
						...i,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return i
			}

			function d(e, t, s) {
				let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(n.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${s}`,
					data: {
						selected: i
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(i.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: n.jb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "j", (function() {
				return o
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "h", (function() {
				return a
			})), s.d(t, "l", (function() {
				return c
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "n", (function() {
				return E
			}));
			var r, n = s("./src/config.ts"),
				i = s("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case r.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function a(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184;
					case r.ArbitrumNitroDevnet:
						return 421612;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function c(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, s) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function l(e, t, s) {
				return await Object(i.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations`,
					data: s
				})
			}
			async function m(e, t, s) {
				return await Object(i.a)(e, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations/${s}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const b = (e, t, s) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: s
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, s, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: s,
					amount: r
				});
			async function E(e, t) {
				return await Object(i.a)(e, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				n = s("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function o(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function d(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function a(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
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
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(r.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function n(e) {
				return [...e].sort(r)
			}
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function i(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/config.ts"),
				n = s("./src/lib/fastdom/index.ts");
			const i = "https://js.stripe.com/v3/",
				o = "https://www.paypalobjects.com/api/checkout.js",
				d = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${r.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function a(e, t) {
				return t() ? Promise.resolve() : new Promise((s, r) => n.a.write(() => {
					t() && s();
					const n = document.head;
					let i = n.querySelector(`script[src='${e}']`);

					function o() {
						this.removeEventListener("load", o), this.removeEventListener("error", d), s()
					}

					function d() {
						this.removeEventListener("load", o), this.removeEventListener("error", d), i && n.removeChild(i), r()
					}
					i || ((i = document.createElement("script")).src = e, n.appendChild(i)), i.addEventListener("load", o), i.addEventListener("error", d)
				}))
			}

			function c() {
				return a(i, () => "undefined" != typeof Stripe)
			}

			function u() {
				return a(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function l() {
				return Promise.all(Object.keys(d).map(e => {
					const t = "__" + e;
					return a(d[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js");

			function n(e, t) {
				const [s, n] = Object(r.useState)(e);
				return [s, e => {
					t.current && n(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), n.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return d
			}));
			var r, n, i = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const o = {
					[r.Loyalty]: i.a.First,
					[r.Achievement]: i.a.Second,
					[r.Cosmetic]: void 0
				},
				d = e => e === i.a.First ? r.Loyalty : e === i.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var r, n, i, o;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
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
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r, n = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const i = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: r,
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
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: r,
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
							error: t.payload.error, status: r.Failure
						};
					case n.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case n.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./src/lib/constants/specialMembership.ts"),
				i = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = s("./src/reddit/helpers/economics/sortBadges.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const c = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, s, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let i;
						(i = e.placement ? e.placement === d.a.First ? r[a.a.Loyalty][n] : r[a.a.Achievement][n] : u(e) ? r[a.a.Cosmetic][a.c.MyBadges][n] : r[a.a.Cosmetic][a.c.Gallery][n]) && (u(e) ? s.has(e.id) && i.unlocked.push(e) : t.has(e.id) || i.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return s === r ? Object(o.b)(e, t) : s - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function b(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(m).sort((e, s) => {
					const r = t[e.id],
						n = t[s.id];
					return Object(o.b)(r, n)
				})
			}

			function p(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const r = e.collections[s],
						n = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[a.a.Loyalty][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][s] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && s.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), s, r, t), l(Object.keys(e.products).map(t => e.products[t]), s, r, t), {
					collections: {
						[a.a.Loyalty]: b(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: b(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: b(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: b(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === r.Fetched ? {
							...e,
							[s]: {
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
					case i.h: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === r.Fetched ? {
							...e,
							[s]: {
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
					case i.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: p(s),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/economics/claims/constants.ts")),
				i = s("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.a: {
							const s = t.payload.claimPoints || {},
								r = Object.keys(s).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: s[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var s;
								(null === (s = e[t]) || void 0 === s ? void 0 : s.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case n.b:
						case n.a:
							const {
								subredditId: s
							} = t.payload;
							return {
								...e, [s]: {
									...e[s],
									isClaiming: t.type === n.b
								}
							};
						default:
							return e
					}
				},
				a = s("./src/reddit/actions/governance/constants.ts");
			const c = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, s, r, n, i;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					d = null == o ? void 0 : o.contracts,
					a = null == d ? void 0 : d.unlocked,
					c = null !== (r = null === (s = e.walletProvider) || void 0 === s ? void 0 : s.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (n = e.walletProvider) || void 0 === n ? void 0 : n.inTransition),
					m = (null == a ? void 0 : a.decimals) || 0,
					b = "1" + "0".repeat(m);
				return {
					blockchainProvider: c,
					contractAddress: (null == a ? void 0 : a.address) || "",
					contracts: d,
					decimals: m,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (i = e.extra) || void 0 === i ? void 0 : i.nomenclature,
					polls: e.polls,
					symbol: (null == a ? void 0 : a.token) || ""
				}
			}
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.a: {
						const {
							subredditId: s,
							meta: r
						} = t.payload;
						return {
							...e,
							[s]: l(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.n: {
						const {
							subredditId: s,
							wallets: r
						} = t.payload, n = Object.keys(r).reduce((t, n) => {
							return {
								...t,
								[n]: {
									...e[n] || {},
									[s]: r[n]
								}
							}
						}, {});
						return {
							...e,
							...n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: d,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/endpoints/governance/crypto.ts"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: d.a
				}
			});
			const a = (e, t) => {
				var s, r, n;
				return t ? null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[t] : void 0
			};

			function c() {
				const e = Object(n.eb)(),
					t = Object(r.e)(t => Object(n.r)(t, {
						pageLayer: e
					})),
					s = Object(r.e)(e => a(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: s
				}
			}
			const u = (e, t) => {
				var s;
				const r = null === (s = a(e, t)) || void 0 === s ? void 0 : s.blockchainProvider;
				return r === i.a.Ethereum || r === i.a.Rinkeby || r === i.a.EthTraderEthereum || r === i.a.EthTraderRinkeby || r === i.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "o", (function() {
				return _
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "h", (function() {
				return w
			})), s.d(t, "z", (function() {
				return j
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "p", (function() {
				return A
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "r", (function() {
				return R
			})), s.d(t, "y", (function() {
				return L
			})), s.d(t, "u", (function() {
				return U
			})), s.d(t, "v", (function() {
				return F
			})), s.d(t, "b", (function() {
				return G
			})), s.d(t, "w", (function() {
				return $
			})), s.d(t, "s", (function() {
				return W
			})), s.d(t, "t", (function() {
				return H
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "m", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/helpers/richTextJson/index.ts"),
				o = s("./src/reddit/models/Badge/index.ts"),
				d = s("./src/reddit/models/Badge/managementPage.ts"),
				a = s("./src/reddit/models/Payments/index.ts"),
				c = s("./src/reddit/models/Product/index.ts"),
				u = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				p = s("./src/reddit/selectors/experiments/mediaInComments.ts"),
				h = s("./src/reddit/selectors/gold/powerups/index.ts"),
				f = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const g = [],
				E = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const s = E(e, t);
					return s && s.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const O = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === l.a.Fetched) {
						const s = _(e, t),
							r = Date.now();
						return s && r < s ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				S = (e, t) => {
					const s = e.user.account,
						r = e.economics.subredditPremium[t];
					if (s && r && r.status === l.a.Fetched) {
						const r = ((e.users.appliedBadges[s.id] || {})[t] || g).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[d.a.Loyalty]: r.find(e => e.placement === o.a.First),
							[d.a.Achievement]: r.find(e => e.placement === o.a.Second),
							[d.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[d.a.Loyalty]: void 0,
						[d.a.Achievement]: void 0,
						[d.a.Cosmetic]: void 0
					}
				};

			function v(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : g
			}
			const C = (e, t, s) => {
					var n;
					if (!r.d.spBadges(e)) return g;
					return v(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				w = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === l.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function j(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function x(e, t) {
				const {
					badge: s,
					subredditId: r
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(s) && s.userId === n) return s;
				const i = e.badges.models,
					d = e.user.ownedBadges[r] || {},
					a = Object(o.e)(s) ? s.type : s.id;
				return Object.keys(d).map(e => i[e]).find(e => e && e.type === a)
			}

			function P(e, t, s, r) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === l.a.Fetched) {
					if (s === d.a.Loyalty || s === d.a.Achievement) return n.data.collections[s];
					if (s === d.a.Cosmetic && r) return n.data.collections[s][r]
				}
				return g
			}

			function I(e, t) {
				const s = P(e, t, d.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : g
			}

			function N(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === l.a.Fetched) {
					const e = s.data.collections[d.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return g
			}

			function k(e, t) {
				return P(e, t, d.a.Cosmetic, d.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const A = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === u.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const r = e[s];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: s,
							type: a.a.SavedStripe
						})
					}
				}
				if (s.status === u.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const r = e[s];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: a.a.SavedPayPal
						})
					}
				}
				return t
			};
			var M;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(M || (M = {}));
			const B = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				D = (e, t) => {
					if (!t) return {};
					const s = B.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const r = E(e, t);
					return r && r.price && r.currency && (s[r.currency] = r.price), s
				},
				R = (e, t) => {
					var s, r, n, i;
					const o = (null === (i = null === (n = null === (r = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === r ? void 0 : r.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || B;
					return {
						prices: D(e, t),
						member: o.member || B.member,
						memberPlural: o.memberPlural || B.memberPlural,
						memberAlt: o.memberAlt || B.memberAlt,
						memberAltPlural: o.memberAltPlural || B.memberAltPlural,
						membership: o.membership || B.membership,
						membershipAlt: o.membershipAlt || B.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return;
					return e.economics.emotes[s]
				},
				$ = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				W = (e, t, s) => {
					if (Object(h.r)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== s && Object(b.b)(e, {
						commentId: s
					});
					return !(!r || !Object(i.a)(r))
				},
				H = (e, t, s) => {
					if (Object(p.a)(e)) return !!t && Object(m.B)(e, {
						subredditId: t
					});
					if (!Object(f.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== s && Object(b.b)(e, {
						commentId: s
					});
					if (n && Object(i.b)(n)) return !0;
					const o = r.d.spGiphy(e),
						d = $(e, t);
					return !(!o || !d) || o && d
				},
				z = (e, t, s) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[s]
					}
				},
				V = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === r.a.Badge) return s
				},
				i = (e, t) => {
					let {
						productId: s
					} = t;
					const r = e.products.models[s];
					if (r) {
						const t = r.subredditId,
							n = Object.keys(e.user.ownedBadges[t] || {}),
							i = e.badges.models,
							o = Date.now();
						let d = !1;
						return n.forEach(e => {
							const t = i[e];
							t && t.type === s && t.endsAt > o && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.5128bdb46054f774e871.js.map