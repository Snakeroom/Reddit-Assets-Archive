// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.f593d2b962d026f71359.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./node_modules/lodash/forOwn.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseForOwn.js"),
				n = r("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && s(e, n(t))
			}
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			const s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				n = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				i = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				o = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
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
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/economics/banners/constants.ts");
			const o = Object(n.a)(i.c),
				d = Object(n.a)(i.d),
				c = Object(n.a)(i.a),
				a = Object(n.a)(i.b),
				u = e => async (t, r, n) => {
					let {
						apiContext: i
					} = n;
					const c = r();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(o(e));
					const a = await Object(s.b)(i(), e);
					t(d({
						subredditId: e,
						data: a
					}))
				}, m = (e, t) => async (r, n, i) => {
					let {
						apiContext: o
					} = i;
					r(c({
						subredditId: e,
						bannerType: t
					})), Object(s.c)(o(), e, t)
				}, l = (e, t) => async (r, n, i) => {
					let {
						apiContext: o
					} = i;
					r(a({
						subredditId: e,
						bannerType: t
					})), Object(s.e)(o(), e, t)
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return p
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeRequest/index.ts"),
				i = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");
			var d = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(d.a)(c.a),
				u = Object(d.a)(c.b),
				m = Object(d.a)(c.c),
				l = e => async (t, r, s) => {
					let {
						apiContext: n
					} = s;
					const d = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						u = r();
					if (!u.economics.me.fetched || d && !u.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${i.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(n(), d);
						if (e.ok) {
							const r = e.body;
							d && !r.specialMemberships && (r.specialMemberships = {}), t(a(r))
						}
					}
				}, p = () => async (e, t) => {
					const r = t(),
						i = r.economics.me.data;
					if (!i) throw new Error("me data required for copy to be fetched");
					if (!r.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${i.pointsDocsBaseUrl}v1.json?web`,
							r = await Object(n.b)({
								endpoint: t,
								method: s.ob.GET
							});
						r.ok && r.body && e(m(r.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(s.a)(o.a),
				c = Object(s.a)(o.b),
				a = Object(s.a)(o.c),
				u = Object(s.a)(o.d),
				m = Object(s.a)(o.e),
				l = Object(s.a)(o.f),
				p = Object(s.a)(o.g),
				b = Object(s.a)(o.h),
				h = Object(s.a)(o.i),
				f = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "f", (function() {
				return k
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/forOwn.js"),
				n = r.n(s),
				i = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/endpoints/economics/emojis.ts"),
				d = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = r("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = r("./src/reddit/endpoints/governance/badges.ts"),
				u = r("./src/config.ts"),
				m = r("./src/reddit/endpoints/governance/requester.ts");

			function l(e, t, r) {
				return Object(m.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${r}` + "&types=emotes_pack,giphy"
				})
			}
			var p = r("./src/reddit/models/Badge/index.ts"),
				b = r("./src/reddit/models/Badge/managementPage.ts"),
				h = r("./src/reddit/models/Product/index.ts"),
				f = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				g = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/products.ts"),
				j = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				x = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function E(e) {
				return !!e && "removeBadge" === e.type
			}

			function v(e) {
				if (!E(e)) return e
			}
			const y = () => async (e, t, r) => {
				let {
					apiContext: s
				} = r;
				if (!t().user.account) return;
				await e(Object(j.b)({
					includeMemberships: !0
				}));
				const n = t().economics.me.data.specialMemberships || {},
					i = Object.keys(n);
				if (i.length) {
					const t = await Object(d.e)(s(), i);
					t.ok && e(Object(x.g)(t.body))
				}
			}, C = (e, t) => async (r, s, n) => {
				let {
					apiContext: i
				} = n;
				const o = s().user.account,
					d = s().economics.subredditPremium[e],
					a = !d || d.status !== f.a.Fetched || t;
				if (o && a) {
					const t = await Object(c.a)(i(), e, o.id);
					r(Object(x.i)(t))
				}
			}, w = e => async (t, r, s) => {
				let {
					apiContext: n
				} = s;
				const o = r(),
					d = o.user.account,
					c = Object(g.f)(o, e.subredditId),
					u = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (d && e.badge) {
					let r, s;
					r = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(x.a)({
						...e,
						badge: v(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					})), E(e.badge) && r ? s = await Object(a.a)(n(), e.subredditId, r.id, !1) : E(e.badge) || (s = await Object(a.a)(n(), e.subredditId, e.badge.id)), s && !s.ok && (t(Object(x.a)({
						...e,
						badge: r,
						currentAppliedBadges: u,
						userId: d.id
					})), Object(i.a)(t, s.error))
				}
			}, I = (e, t) => async (r, s, n) => {
				let {
					apiContext: i
				} = n;
				await r(C(e, !0));
				const o = s().economics.subredditPremium[e];
				if (o && o.status === f.a.Fetched) {
					const s = o.data.userOwnedBadges.find(e => e.type === t.id);
					s && (r(w({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), r(Object(x.d)(b.c.MyBadges)))
				}
			}, S = e => async (t, r, s) => {
				let {
					apiContext: d
				} = s;
				const c = r().user.account,
					a = !r().economics.emotes[e],
					u = !r().economics.gifs[e];
				if (c && (a || u)) {
					const [r, s] = await Promise.all([Object(o.b)(d(), e), l(d(), e, c.id)]);
					if (!s.ok) return void Object(i.a)(t, s.error);
					const a = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					n()(s.body, e => {
						e.type === h.a.EmotesPack ? a.emotes.push(e) : e.type === h.a.Giphy && a.giphy.push(e)
					}), t(Object(x.e)({
						subredditId: e,
						products: a
					}))
				}
			}, P = (e, t, r) => async (s, n, i) => {
				let {
					apiContext: o
				} = i;
				if (await s(C(e, !0)), r && t) {
					const r = n(),
						i = Object(g.f)(r, e),
						o = Object(O.a)(r, t);
					if (!i[Object(b.d)(o.placement)] && o) {
						const t = Object(g.l)(r, {
							subredditId: e,
							badge: o
						});
						t && await s(w({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(x.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, k = e => async (t, r, s) => {
				let {
					apiContext: n
				} = s;
				const {
					wallet: i
				} = await Object(d.c)(n(), e);
				t(Object(x.f)({
					wallet: i
				})), await t(C(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/reddit/actions/toaster.ts"),
				n = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				i = r("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(s.f)({
					duration: 5e3,
					kind: i.b.Error,
					text: Object(n.a)(t)
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
				return I
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return M
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/higherOrderComponents/makeAsync.tsx");
			var l = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = r("./src/reddit/models/Badge/index.ts");
			var O = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				j = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				x = r.n(j);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = "add-custom-badge-tooltip",
				y = 100,
				C = 2 * y,
				w = 24;
			class I extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, y)), this.mouseOverTooltip = e
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
						className: Object(c.a)(x.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${v}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || w;
					return n.a.createElement(s.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: x.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: x.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(f.a, {
						className: x.a.addCustom
					})), n.a.createElement(O, {
						className: x.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(g.d)(r, r, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(c.a)(x.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: x.a.image,
							id: i,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? n.a.createElement(l, {
							badge: e,
							correlationId: this.props.correlationId,
							className: x.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: i,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: i,
							text: e.title
						})))
					}))
				}
			}
			const S = [],
				P = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r,
							userId: s
						} = t;
						var n;
						return (null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[r]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: r
						} = t;
						var s;
						const n = e.user.account;
						return n && (null === (s = e.users.appliedBadges[n.id]) || void 0 === s ? void 0 : s[r]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				_ = e => ({
					onShowTooltip: t => e(Object(u.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(u.i)()),
					onOpenUploadDialog: () => e(Object(a.j)())
				});

			function B(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...s
				} = e, i = t.map(e => r[e]).filter(Boolean);
				return n.a.createElement(I, E({
					badges: i
				}, s))
			}
			const N = Object(i.b)(P, _)(B),
				M = Object(i.b)(k, _)(B)
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
				return f
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				a = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = r("./src/reddit/featureFlags/index.ts"),
				l = r("./src/reddit/hooks/useUserContext.ts"),
				p = r("./src/reddit/selectors/economics.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = r.n(b);

			function f(e) {
				var t, r;
				const {
					currentUser: s
				} = Object(l.a)(), i = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (r = e.allBadges) && void 0 !== r ? r : {});
				return i.length ? n.a.createElement(u.b, {
					useHovercard: !0,
					badges: i,
					badgeSize: e.badgeSize,
					className: Object(d.a)(e.className, h.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && i.length < 2 && (null == s ? void 0 : s.id) === e.userId,
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
						subredditId: r,
						userId: s
					} = t;
					var n;
					return (null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[r]) || g
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: m.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => m.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(a.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(a.i)()),
				onOpenUploadDialog: () => e(Object(c.j)())
			}))(f)
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
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				a = r("./src/reddit/helpers/economics/sortBadges.ts"),
				u = r("./src/reddit/hooks/useUserContext.ts"),
				m = r("./src/reddit/models/Badge/managementPage.ts"),
				l = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = r.n(b);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.b)(null, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(c.i)()),
					onOpenModal: () => e(Object(d.c)({
						subredditId: r,
						initialView: m.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(d.j)())
				}
			})((function(e) {
				const {
					currentUser: t
				} = Object(u.a)();
				if (!t) return null;
				const r = Object(a.a)(e.badges),
					s = r[r.length - 1],
					i = s && s.extra && s.extra.style && s.extra.style.backgroundColor,
					d = s && s.extra && s.extra.style && s.extra.style.color;
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
				}, n.a.createElement(l.a, {
					badges: r,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: t.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(p.a, {
					badges: r,
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/selectors/economics.ts");

			function c(e) {
				const {
					badges: t
				} = e, r = t[t.length - 1];
				return r && !e.ignore ? n.a.cloneElement(e.children, {
					style: r.extra && r.extra.style && r.extra.style.color ? {
						...e.children.props.style || {},
						color: r.extra.style.color,
						fontWeight: 700
					} : e.children.props.style
				}) : e.children
			}
			t.b = Object(i.b)(() => Object(o.c)({
				badges: (e, t) => {
					let {
						subredditId: r,
						userId: s
					} = t;
					return Object(d.q)(e, r, s)
				}
			}))(c)
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => r.e("SubredditPremiumBlockchainCheckoutModal").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = n
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/fastdom/index.ts"),
				d = r("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = r.n(d);
			const a = 250,
				u = 100;
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							r = e.offsetHeight;
						for (let s = 0; s < u; s++) this.createPiece(t, r);
						for (let s = 0; s < a - u; s++) window.setTimeout(() => this.createPiece(t, r), 1e4 * s / (a - u))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const r = document.createElement("div"),
								s = (6 * Math.random() + 4) * t / 1e3;
							r.className = c.a.piece, r.style.width = 4 * Math.random() + 3 + "px", r.style.height = 6 * Math.random() + 3 + "px", r.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(r), this.restartPiece(r, s, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, r, s) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							o.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * s + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								o.a.write(() => {
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
					return n.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var l = r("./src/reddit/featureFlags/component.tsx"),
				p = r("./src/reddit/hooks/useSafeState.ts"),
				b = r("./src/reddit/selectors/economics.ts");
			t.a = Object(l.a)("spSpecialMemberships", (function(e) {
				const t = Object(s.useRef)(!0),
					[r, o] = Object(p.a)(!1, t),
					d = Object(i.e)(t => Object(b.x)(t, e.subredditId)),
					c = Object(s.useRef)(d);
				return Object(s.useEffect)(() => () => {
					t.current = !1
				}, []), Object(s.useEffect)(() => {
					c.current === b.a.NotSubscribed && d === b.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), c.current = d
				}, [d]), d === b.a.Subscribed ? n.a.createElement(m, {
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
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				d = r.n(o);

			function c(e) {
				return n.a.createElement("button", {
					className: Object(i.a)(e.className, d.a.button),
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
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/featureFlags/index.ts"),
				c = r("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				b = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/endpoints/economics/banners.ts"),
				f = r("./src/reddit/icons/svgs/Menu/index.tsx"),
				g = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/tooltip.ts"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				E = r("./src/reddit/components/TrackingHelper/index.tsx"),
				v = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				y = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				C = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				w = r("./src/reddit/models/Badge/managementPage.ts"),
				I = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				P = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				k = r.n(P);
			const _ = Object(o.c)({
				customBadgesEnabled: d.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.j)(e, r)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.u)(e, r)
				}
			});
			var B = Object(E.c)(Object(i.b)(_, (e, t) => {
					let {
						subredditId: r,
						sendEvent: s
					} = t;
					return {
						onOpenBadges: () => e(Object(x.c)({
							subredditId: r,
							initialView: w.c.MyBadges
						})),
						onOpenGallery: () => {
							e(Object(x.c)({
								subredditId: r,
								initialView: w.c.Gallery
							})), s(e => ({
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_badge_gallery",
								...I.o(e),
								subreddit: I.lb(e)
							}))
						},
						onOpenUploadDialog: () => e(Object(x.j)())
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && n.a.createElement(S.a, {
						onClick: e.onOpenBadges
					}, n.a.createElement(C.a, {
						className: k.a.icon
					}), j.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && n.a.createElement(S.a, {
						onClick: e.onOpenGallery
					}, n.a.createElement(y.a, {
						className: k.a.icon
					}), j.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && n.a.createElement(S.a, {
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(v.a, {
						className: k.a.addIcon
					}), j.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && n.a.createElement(S.a, {
						onClick: e.onOpenPurchaseModal
					}, n.a.createElement(v.a, {
						className: k.a.addIcon
					}), j.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				N = r("./src/higherOrderComponents/asTooltip.tsx"),
				M = r("./src/reddit/controls/Dropdown/index.tsx"),
				T = r("./src/reddit/controls/Dropdown/Row.tsx"),
				D = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				A = r.n(D);
			const U = Object(N.a)(M.a);

			function $(e) {
				return n.a.createElement(U, {
					className: Object(a.a)(A.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, n.a.createElement(T.b, {
					displayText: j.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var L = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				H = r.n(L);

			function R(e) {
				return n.a.createElement("div", {
					className: Object(a.a)(H.a.container, e.className)
				}, n.a.createElement("div", {
					className: H.a.title
				}), n.a.createElement("div", {
					className: H.a.user
				}), n.a.createElement("div", {
					className: H.a.control
				}, n.a.createElement("div", {
					className: H.a.icon
				}), n.a.createElement("div", {
					className: H.a.buttonText
				})))
			}
			var q = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				F = r("./src/reddit/selectors/crypto/points.ts"),
				G = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				V = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				W = r.n(V);

			function Z(e) {
				return !!e
			}
			const Q = Object(o.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = Object(g.f)(e, r);
					return [s[w.a.Loyalty], s[w.a.Achievement], s[w.a.Cosmetic]].filter(Z)
				},
				membershipStartDate: (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = Object(g.c)(e, r),
						n = s && s.publishAt;
					if (n) {
						const e = new Date(n);
						return `Since ${new Intl.DateTimeFormat("en-US").format(e)}`
					}
					return ""
				},
				membershipEndDate: (e, t) => {
					let {
						subredditId: r
					} = t;
					const s = Object(g.o)(e, r);
					return s ? `Paid through ${new Intl.DateTimeFormat("en-US").format(s)}` : ""
				},
				meta: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.r)(e, r)
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(F.b)(e, r)
				},
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var z = Object(i.b)(Q)((function(e) {
					return e.account && e.subreddit && e.pointsDetails ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement("header", {
						className: W.a.title
					}, n.a.createElement("img", {
						className: W.a.crown,
						src: G.a
					}), n.a.createElement("div", null, n.a.createElement("div", null, j.fbt._("{memberAlt} {date}", [j.fbt._param("memberAlt", e.meta.memberAlt), j.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.pointsDetails.blockchainProvider && n.a.createElement("div", {
						className: W.a.membershipEndDate
					}, e.membershipEndDate))), n.a.createElement(q.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: W.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				K = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				Y = r("./src/reddit/controls/Button/index.tsx"),
				X = r("./src/reddit/helpers/economics/membershipPage.ts"),
				J = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				ee = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				te = r.n(ee);
			const re = Object(o.c)({
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
				}
			});
			var se = Object(E.c)(Object(i.b)(re)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = Object(J.a)();
					return n.a.createElement("footer", {
						className: e.className
					}, n.a.createElement(Y.n, {
						className: te.a.cta,
						disabled: !e.subreddit,
						to: Object(X.a)(t, r),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more",
								...I.o(e),
								subreddit: I.lb(e)
							}))
						}
					}, j.fbt._("Get {membershipAlt}", [j.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				ne = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				ie = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				oe = r.n(ie);
			class de extends n.a.Component {
				componentDidMount() {
					Object(K.b)()
				}
				render() {
					return this.props.account ? n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement(ne.a, {
						className: oe.a.benefits,
						hideSlideshow: this.props.hideSlideshow,
						subredditId: this.props.subredditId
					}), !this.props.hideSlideshow && n.a.createElement(se, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const ce = Object(o.c)({
				account: e => e.user.account
			});
			var ae = Object(i.b)(ce)(de),
				ue = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				me = r.n(ue);
			const le = "subreddit-premium-commuity-card-dismiss";
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
					return t = this.props.userIsPremiumSubscriber === g.a.Subscribed ? n.a.createElement(n.a.Fragment, null, n.a.createElement(z, {
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: me.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.customCrypto ? this.openCheckout : void 0
					}), this.props.customCrypto && this.state.checkoutOpen && n.a.createElement(p.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === g.a.NotSubscribed ? n.a.createElement(n.a.Fragment, null, e && n.a.createElement(n.a.Fragment, null, n.a.createElement(f.a, {
						id: le,
						className: me.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), n.a.createElement($, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: le,
						onClickDismiss: this.props.onDismissBanner
					})), n.a.createElement(ae, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: Object(a.a)(me.a.controlsPrePurchase, {
							[me.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : n.a.createElement(R, null), n.a.createElement(b.a, {
						className: Object(a.a)(this.props.className, me.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const be = Object(o.c)({
				customCrypto: d.d.spCustomCrypto,
				dropdownIsOpen: Object(O.b)(le),
				meta: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.r)(e, r)
				},
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships,
				showBanner: (e, t) => {
					let {
						subredditId: r
					} = t;
					return !1 === Object(g.g)(e, r, h.a.AnimatedCard)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.u)(e, r)
				},
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(g.x)(e, r)
				}
			});
			var he = Object(i.b)(be, (e, t) => {
				let {
					subredditId: r
				} = t;
				return {
					onDismissBanner: () => e(Object(u.a)(r, h.a.AnimatedCard)),
					onFetchDismissedBanners: () => e(Object(u.b)(r)),
					onFetchSubscriptionData: () => e(Object(m.g)(r)),
					onOpenDropdown: () => e(Object(l.h)({
						tooltipId: le
					}))
				}
			})(pe);
			class fe extends n.a.Component {
				render() {
					const {
						cardClassName: e,
						premiumSubscriptionsEnabled: t,
						subredditId: r
					} = this.props;
					return r && t ? n.a.createElement("div", null, n.a.createElement(c.a, {
						subredditId: r
					}), n.a.createElement(he, {
						className: e,
						subredditId: r
					})) : null
				}
			}
			const ge = Object(o.c)({
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships
			});
			t.default = Object(i.b)(ge)(fe)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n, i = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, r, s) {
				return Object(o.a)(e, {
					endpoint: `${i.a.metaUrl}/storage/${t}/me/${r}`,
					method: "patch",
					data: s
				})
			}
			async function c(e, t) {
				const r = await async function(e, t, r) {
					return Object(o.a)(e, {
						endpoint: `${i.a.metaUrl}/storage/${t}/me/${r}`,
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return r.ok && r.body || {}
			}
			async function a(e, t, r, n) {
					const i = await c(e, t),
						o = {
							...i,
							[r]: n
						};
					return (await d(e, t, s.UpsellBanners, o)).ok ? o : i
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(n || (n = {}));
			const u = async (e, t, r) => a(e, t, r, !0), m = async (e, t, r) => a(e, t, r, !1), l = (e, t) => d(e, t, s.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			const i = (e, t) => Object(n.a)(e, {
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
				o = (e, t) => Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts"),
				d = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function m(e, t) {
				return Object(o.a)(e, {
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
				return Object(o.a)(Object(n.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(c.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const r = await Object(o.a)(e, {
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
				if (!r.ok) throw new Error(`Error fetching provisional membership: ${Object(d.b)(r.error)}`);
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
				n = r.n(s),
				i = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/badges.ts"),
				d = r("./src/reddit/endpoints/governance/community.ts"),
				c = r("./src/reddit/endpoints/governance/products/badges.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");
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
						return Object(a.a)(e, {
							method: "get",
							endpoint: `${i.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					m = Object(d.a)(e, {
						subredditId: t
					}),
					l = Object(c.b)(e, t),
					p = Object(o.c)(e, t, r),
					[b, h, f, g] = await Promise.all([u, m, l, p]);
				if (b.ok ? s.collections = b.body : s.errors.collections = b.error, h.ok) {
					const e = h.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return f.ok ? s.products = f.body : s.errors.products = f.error, g.ok ? (n()(s.badges, g.body.badges), s.userOwnedBadges = g.body.userOwnedBadges) : s.errors.userBadges = g.error, s
			}
			const m = (e, t) => Object(a.a)(e, {
				endpoint: `${i.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, r) {
				const i = Object(n.a)(e, {
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
					o = await i;
				if (o.ok) {
					const e = {},
						t = {},
						r = o.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						t[s] = n, e[n.userId] || (e[n.userId] = []), e[n.userId].push(n.id)
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
			async function o(e, t, r) {
				const i = await Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/badges/${t}?users=${r}`
				});
				if (i.ok) {
					const e = {},
						t = [],
						r = i.body;
					return Object.keys(r).forEach(s => {
						const n = r[s];
						e[s] = n, t.push(n.id)
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

			function d(e, t, r) {
				let i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(n.a)(e, {
					method: "patch",
					endpoint: `${s.a.metaUrl}/badges/${t}/${r}`,
					data: {
						selected: i
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(i.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: n.ob.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return m
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "n", (function() {
				return O
			}));
			var s, n = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
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

			function d(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case s.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case s.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case s.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby";
					case s.ArbitrumRinkeby:
						return 5391184;
					case s.ArbitrumNitroDevnet:
						return 421612;
					case s.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function a(e) {
				return e === s.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(i.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function m(e, t, r) {
				return await Object(i.a)(e, {
					method: "post",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(i.a)(e, {
					method: "delete",
					endpoint: `${n.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(s || (s = {}));
			const p = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
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
				g = (e, t, r, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: s
				});
			async function O(e, t) {
				return await Object(i.a)(e, {
					method: "put",
					endpoint: `${n.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			var s = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function o(e, t) {
				return Object(n.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function d(e, t) {
				return Object(n.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(n.a)(e, {
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
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js");

			function n(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function i(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(n).join(" ") : s.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/config.ts"),
				n = r("./src/lib/fastdom/index.ts");
			const i = "https://js.stripe.com/v3/",
				o = "https://www.paypalobjects.com/api/checkout.js",
				d = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${s.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((r, s) => n.a.write(() => {
					t() && r();
					const n = document.head;
					let i = n.querySelector(`script[src='${e}']`);

					function o() {
						this.removeEventListener("load", o), this.removeEventListener("error", d), r()
					}

					function d() {
						this.removeEventListener("load", o), this.removeEventListener("error", d), i && n.removeChild(i), s()
					}
					i || ((i = document.createElement("script")).src = e, n.appendChild(i)), i.addEventListener("load", o), i.addEventListener("error", d)
				}))
			}

			function a() {
				return c(i, () => "undefined" != typeof Stripe)
			}

			function u() {
				return c(o, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function m() {
				return Promise.all(Object.keys(d).map(e => {
					const t = "__" + e;
					return c(d[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js");

			function n(e, t) {
				const [r, n] = Object(s.useState)(e);
				return [r, e => {
					t.current && n(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
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
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return u
			}));
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: d.a
				}
			});
			const c = (e, t) => {
				var r, s, n;
				return t ? null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.points) || void 0 === n ? void 0 : n[t] : void 0
			};

			function a() {
				const e = Object(n.ib)(),
					t = Object(s.e)(t => Object(n.s)(t, {
						pageLayer: e
					})),
					r = Object(s.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const s = null === (r = c(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return s === i.a.Ethereum || s === i.a.Rinkeby || s === i.a.EthTraderEthereum || s === i.a.EthTraderRinkeby || s === i.a.ArbitrumRinkeby
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.f593d2b962d026f71359.js.map