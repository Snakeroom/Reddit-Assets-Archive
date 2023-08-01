// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.1cfc3db8eb8e541271d9.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
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
				c = Object(n.a)(i.a),
				a = Object(n.a)(i.b),
				u = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const c = s();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(o(e));
					const a = await Object(r.b)(i(), e);
					t(d({
						subredditId: e,
						data: a
					}))
				}, l = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					s(c({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(o(), e, t)
				}, m = (e, t) => async (s, n, i) => {
					let {
						apiContext: o
					} = i;
					s(a({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(o(), e, t)
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeRequest/index.ts"),
				i = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			var d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/economics/me/constants.ts");
			const a = Object(d.a)(c.a),
				u = Object(d.a)(c.b),
				l = Object(d.a)(c.c),
				m = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const d = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						u = s();
					if (!u.economics.me.fetched || d && !u.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(o.a)(e, {
								method: "get",
								endpoint: `${i.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(n(), d);
						if (e.ok) {
							const s = e.body;
							d && !s.specialMemberships && (s.specialMemberships = {}), t(a(s))
						}
					}
				}, p = () => async (e, t) => {
					const s = t(),
						i = s.economics.me.data;
					if (!i) throw new Error("me data required for copy to be fetched");
					if (!s.economics.pointsCopy.fetched) {
						e(u());
						const t = `https://${i.pointsDocsBaseUrl}v1.json?web`,
							s = await Object(n.b)({
								endpoint: t,
								method: r.nb.GET
							});
						s.ok && s.body && e(l(s.body))
					}
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(r.a)(o.a),
				c = Object(r.a)(o.b),
				a = Object(r.a)(o.c),
				u = Object(r.a)(o.d),
				l = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				b = Object(r.a)(o.h),
				h = Object(r.a)(o.i),
				g = e => Object(n.h)(i.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			})), s.d(t, "g", (function() {
				return I
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "f", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/forOwn.js"),
				n = s.n(r),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				o = s("./src/reddit/endpoints/economics/emojis.ts"),
				d = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = s("./src/reddit/endpoints/economics/subredditPremium.ts"),
				a = s("./src/reddit/endpoints/governance/badges.ts"),
				u = s("./src/config.ts"),
				l = s("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, s) {
				return Object(l.a)(e, {
					method: "get",
					endpoint: `${u.a.metaUrl}/products/${t}?owners=${s}` + "&types=emotes_pack,giphy"
				})
			}
			var p = s("./src/reddit/models/Badge/index.ts"),
				b = s("./src/reddit/models/Badge/managementPage.ts"),
				h = s("./src/reddit/models/Product/index.ts"),
				g = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = s("./src/reddit/selectors/economics.ts"),
				x = s("./src/reddit/selectors/products.ts"),
				O = s("./src/reddit/actions/economics/me/thunkedActions.ts"),
				j = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function C(e) {
				return !!e && "removeBadge" === e.type
			}

			function E(e) {
				if (!C(e)) return e
			}
			const v = () => async (e, t, s) => {
				let {
					apiContext: r
				} = s;
				if (!t().user.account) return;
				await e(Object(O.b)({
					includeMemberships: !0
				}));
				const n = t().economics.me.data.specialMemberships || {},
					i = Object.keys(n);
				if (i.length) {
					const t = await Object(d.e)(r(), i);
					t.ok && e(Object(j.g)(t.body))
				}
			}, I = (e, t) => async (s, r, n) => {
				let {
					apiContext: i
				} = n;
				const o = r().user.account,
					d = r().economics.subredditPremium[e],
					a = !d || d.status !== g.a.Fetched || t;
				if (o && a) {
					const t = await Object(c.a)(i(), e, o.id);
					s(Object(j.i)(t))
				}
			}, y = e => async (t, s, r) => {
				let {
					apiContext: n
				} = r;
				const o = s(),
					d = o.user.account,
					c = Object(f.f)(o, e.subredditId),
					u = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (d && e.badge) {
					let s, r;
					s = e.placement === p.a.First ? c[b.a.Loyalty] : e.placement === p.a.Second ? c[b.a.Achievement] : c[b.a.Cosmetic], t(Object(j.a)({
						...e,
						badge: E(e.badge),
						currentAppliedBadges: u,
						userId: d.id
					})), C(e.badge) && s ? r = await Object(a.a)(n(), e.subredditId, s.id, !1) : C(e.badge) || (r = await Object(a.a)(n(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(j.a)({
						...e,
						badge: s,
						currentAppliedBadges: u,
						userId: d.id
					})), Object(i.a)(t, r.error))
				}
			}, P = (e, t) => async (s, r, n) => {
				let {
					apiContext: i
				} = n;
				await s(I(e, !0));
				const o = r().economics.subredditPremium[e];
				if (o && o.status === g.a.Fetched) {
					const r = o.data.userOwnedBadges.find(e => e.type === t.id);
					r && (s(y({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), s(Object(j.d)(b.c.MyBadges)))
				}
			}, S = e => async (t, s, r) => {
				let {
					apiContext: d
				} = r;
				const c = s().user.account,
					a = !s().economics.emotes[e],
					u = !s().economics.gifs[e];
				if (c && (a || u)) {
					const [s, r] = await Promise.all([Object(o.b)(d(), e), m(d(), e, c.id)]);
					if (!r.ok) return void Object(i.a)(t, r.error);
					const a = {
						emotes: [],
						emoteCollections: s.ok ? s.body : {},
						giphy: []
					};
					n()(r.body, e => {
						e.type === h.a.EmotesPack ? a.emotes.push(e) : e.type === h.a.Giphy && a.giphy.push(e)
					}), t(Object(j.e)({
						subredditId: e,
						products: a
					}))
				}
			}, w = (e, t, s) => async (r, n, i) => {
				let {
					apiContext: o
				} = i;
				if (await r(I(e, !0)), s && t) {
					const s = n(),
						i = Object(f.f)(s, e),
						o = Object(x.a)(s, t);
					if (!i[Object(b.d)(o.placement)] && o) {
						const t = Object(f.l)(s, {
							subredditId: e,
							badge: o
						});
						t && await r(y({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(j.c)({
						subredditId: e,
						initialView: b.c.MyBadges
					}))
				}
			}, k = e => async (t, s, r) => {
				let {
					apiContext: n
				} = r;
				const {
					wallet: i
				} = await Object(d.c)(n(), e);
				t(Object(j.f)({
					wallet: i
				})), await t(I(e.subredditId, !0))
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
				return P
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "a", (function() {
				return N
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				g = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = s("./src/reddit/models/Badge/index.ts");
			var x = Object(l.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				O = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				j = s.n(O);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = "add-custom-badge-tooltip",
				v = 100,
				I = 2 * v,
				y = 24;
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, v)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, I)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return n.a.createElement("img", {
						className: Object(c.a)(j.a.image, this.props.className),
						src: `${d.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${E}-${this.props.uniqueIdentifier}`,
						s = this.props.badgeSize || y;
					return n.a.createElement(r.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: j.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: j.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(g.a, {
						className: j.a.addCustom
					})), n.a.createElement(x, {
						className: j.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(f.d)(s, s, e),
							i = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return n.a.createElement(r.Fragment, {
							key: `badges-fragement-${e.id}`
						}, n.a.createElement("div", {
							className: Object(c.a)(j.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(i),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: j.a.image,
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
							className: j.a.badgeHovercard,
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
				w = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[s]) || S
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				k = Object(o.c)({
					badgeIds: (e, t) => {
						let {
							subredditId: s
						} = t;
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[s]) || S
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
					allBadges: s,
					...r
				} = e, i = t.map(e => s[e]).filter(Boolean);
				return n.a.createElement(P, C({
					badges: i
				}, r))
			}
			const M = Object(i.b)(w, _)(B),
				N = Object(i.b)(k, _)(B)
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
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				l = s("./src/reddit/featureFlags/index.ts"),
				m = s("./src/reddit/hooks/useUserContext.ts"),
				p = s("./src/reddit/selectors/economics.ts"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				h = s.n(b);

			function g(e) {
				var t, s;
				const {
					currentUser: r
				} = Object(m.a)(), i = null !== (t = e.badges) && void 0 !== t ? t : Object(p.i)(e.badgeIds, null !== (s = e.allBadges) && void 0 !== s ? s : {});
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
			const f = [];
			t.b = Object(i.b)(() => Object(o.c)({
				badgeIds: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					var n;
					return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[s]) || f
				},
				allBadges: e => e.badges.models,
				customBadgesEnabled: l.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => l.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(a.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(a.i)()),
				onOpenUploadDialog: () => e(Object(c.j)())
			}))(g)
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
				c = s("./src/reddit/actions/tooltip.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				u = s("./src/reddit/hooks/useUserContext.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.b)(null, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(c.i)()),
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
				const s = Object(a.a)(e.badges),
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
				}), n.a.createElement(p.a, {
					badges: s,
					subredditId: e.subredditId,
					userId: t.id
				}, n.a.createElement("span", {
					className: h.a.user
				}, t.username || t.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: h.a.description
				}, i || d ? i ? g._("Username and content is distinguished with a color matching the last badge.", null, {
					hk: "M24zz"
				}) : g._("Username is distinguished with a color matching the last badge.", null, {
					hk: "2fnnbI"
				}) : g._("This is how your username will appear.", null, {
					hk: "meyGf"
				})))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function c(e) {
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
			}))(c)
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = s.n(d);
			const a = 250,
				u = 100;
			class l extends n.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let r = 0; r < u; r++) this.createPiece(t, s);
						for (let r = 0; r < a - u; r++) window.setTimeout(() => this.createPiece(t, s), 1e4 * r / (a - u))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								r = (6 * Math.random() + 4) * t / 1e3;
							s.className = c.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, r, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, r) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
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
				p = s("./src/reddit/hooks/useSafeState.ts"),
				b = s("./src/reddit/selectors/economics.ts");
			t.a = Object(m.a)("spSpecialMemberships", (function(e) {
				const t = Object(r.useRef)(!0),
					[s, o] = Object(p.a)(!1, t),
					d = Object(i.e)(t => Object(b.x)(t, e.subredditId)),
					c = Object(r.useRef)(d);
				return Object(r.useEffect)(() => () => {
					t.current = !1
				}, []), Object(r.useEffect)(() => {
					c.current === b.a.NotSubscribed && d === b.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), c.current = d
				}, [d]), d === b.a.Subscribed ? n.a.createElement(l, {
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
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				d = s.n(o);

			function c(e) {
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
				c = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				a = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				l = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/endpoints/economics/banners.ts"),
				g = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				f = s("./src/reddit/selectors/economics.ts"),
				x = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				E = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				v = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				I = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				y = s("./src/reddit/models/Badge/managementPage.ts"),
				P = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				w = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				k = s.n(w);
			const _ = Object(o.c)({
				customBadgesEnabled: d.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.j)(e, s)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.u)(e, s)
				}
			});
			var B = Object(C.c)(Object(i.b)(_, (e, t) => {
					let {
						subredditId: s,
						sendEvent: r
					} = t;
					return {
						onOpenBadges: () => e(Object(j.c)({
							subredditId: s,
							initialView: y.c.MyBadges
						})),
						onOpenGallery: () => {
							e(Object(j.c)({
								subredditId: s,
								initialView: y.c.Gallery
							})), r(e => ({
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_badge_gallery",
								...P.q(e),
								subreddit: P.nb(e)
							}))
						},
						onOpenUploadDialog: () => e(Object(j.j)())
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && n.a.createElement(S.a, {
						onClick: e.onOpenBadges
					}, n.a.createElement(I.a, {
						className: k.a.icon
					}), O.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && n.a.createElement(S.a, {
						onClick: e.onOpenGallery
					}, n.a.createElement(v.a, {
						className: k.a.icon
					}), O.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && n.a.createElement(S.a, {
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(E.a, {
						className: k.a.addIcon
					}), O.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && n.a.createElement(S.a, {
						onClick: e.onOpenPurchaseModal
					}, n.a.createElement(E.a, {
						className: k.a.addIcon
					}), O.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				M = s("./src/higherOrderComponents/asTooltip.tsx"),
				N = s("./src/reddit/controls/Dropdown/index.tsx"),
				T = s("./src/reddit/controls/Dropdown/Row.tsx"),
				D = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				U = s.n(D);
			const A = Object(M.a)(N.a);

			function L(e) {
				return n.a.createElement(A, {
					className: Object(a.a)(U.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, n.a.createElement(T.b, {
					displayText: O.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var H = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				$ = s.n(H);

			function q(e) {
				return n.a.createElement("div", {
					className: Object(a.a)($.a.container, e.className)
				}, n.a.createElement("div", {
					className: $.a.title
				}), n.a.createElement("div", {
					className: $.a.user
				}), n.a.createElement("div", {
					className: $.a.control
				}, n.a.createElement("div", {
					className: $.a.icon
				}), n.a.createElement("div", {
					className: $.a.buttonText
				})))
			}
			var F = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				G = s("./src/reddit/selectors/crypto/points.ts"),
				R = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				V = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				W = s.n(V);

			function Z(e) {
				return !!e
			}
			const Q = Object(o.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(f.f)(e, s);
					return [r[y.a.Loyalty], r[y.a.Achievement], r[y.a.Cosmetic]].filter(Z)
				},
				membershipStartDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(f.c)(e, s),
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
					const r = Object(f.o)(e, s);
					return r ? `Paid through ${new Intl.DateTimeFormat("en-US").format(r)}` : ""
				},
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.r)(e, s)
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(G.b)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var z = Object(i.b)(Q)((function(e) {
					return e.account && e.subreddit && e.pointsDetails ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement("header", {
						className: W.a.title
					}, n.a.createElement("img", {
						className: W.a.crown,
						src: R.a
					}), n.a.createElement("div", null, n.a.createElement("div", null, O.fbt._("{memberAlt} {date}", [O.fbt._param("memberAlt", e.meta.memberAlt), O.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.pointsDetails.blockchainProvider && n.a.createElement("div", {
						className: W.a.membershipEndDate
					}, e.membershipEndDate))), n.a.createElement(F.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: W.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				K = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				Y = s("./src/reddit/controls/Button/index.tsx"),
				J = s("./src/reddit/helpers/economics/membershipPage.ts"),
				X = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				ee = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				te = s.n(ee);
			const se = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.r)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var re = Object(C.c)(Object(i.b)(se)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = Object(X.a)();
					return n.a.createElement("footer", {
						className: e.className
					}, n.a.createElement(Y.n, {
						className: te.a.cta,
						disabled: !e.subreddit,
						to: Object(J.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more",
								...P.q(e),
								subreddit: P.nb(e)
							}))
						}
					}, O.fbt._("Get {membershipAlt}", [O.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				ne = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				ie = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				oe = s.n(ie);
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
					}), !this.props.hideSlideshow && n.a.createElement(re, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const ce = Object(o.c)({
				account: e => e.user.account
			});
			var ae = Object(i.b)(ce)(de),
				ue = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				le = s.n(ue);
			const me = "subreddit-premium-commuity-card-dismiss";
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
					return t = this.props.userIsPremiumSubscriber === f.a.Subscribed ? n.a.createElement(n.a.Fragment, null, n.a.createElement(z, {
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: le.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.customCrypto ? this.openCheckout : void 0
					}), this.props.customCrypto && this.state.checkoutOpen && n.a.createElement(p.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === f.a.NotSubscribed ? n.a.createElement(n.a.Fragment, null, e && n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, {
						id: me,
						className: le.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), n.a.createElement(L, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: me,
						onClickDismiss: this.props.onDismissBanner
					})), n.a.createElement(ae, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: Object(a.a)(le.a.controlsPrePurchase, {
							[le.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : n.a.createElement(q, null), n.a.createElement(b.a, {
						className: Object(a.a)(this.props.className, le.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const be = Object(o.c)({
				customCrypto: d.d.spCustomCrypto,
				dropdownIsOpen: Object(x.b)(me),
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.r)(e, s)
				},
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships,
				showBanner: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !1 === Object(f.g)(e, s, h.a.AnimatedCard)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.u)(e, s)
				},
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(f.x)(e, s)
				}
			});
			var he = Object(i.b)(be, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(u.a)(s, h.a.AnimatedCard)),
					onFetchDismissedBanners: () => e(Object(u.b)(s)),
					onFetchSubscriptionData: () => e(Object(l.g)(s)),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: me
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
					return s && t ? n.a.createElement("div", null, n.a.createElement(c.a, {
						subredditId: s
					}), n.a.createElement(he, {
						className: e,
						subredditId: s
					})) : null
				}
			}
			const fe = Object(o.c)({
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships
			});
			t.default = Object(i.b)(fe)(ge)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return c
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
			async function c(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: `${i.a.metaUrl}/storage/${t}/me/${s}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function a(e, t, s, n) {
					const i = await c(e, t),
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
			const u = async (e, t, s) => a(e, t, s, !0), l = async (e, t, s) => a(e, t, s, !1), m = (e, t) => d(e, t, r.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
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
				return a
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				i = s("./src/reddit/constants/headers.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts"),
				d = s("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function a(e, t) {
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
				c = s("./src/reddit/endpoints/governance/products/badges.ts"),
				a = s("./src/reddit/endpoints/governance/requester.ts");
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
						return Object(a.a)(e, {
							method: "get",
							endpoint: `${i.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					l = Object(d.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(o.c)(e, t, s),
					[b, h, g, f] = await Promise.all([u, l, m, p]);
				if (b.ok ? r.collections = b.body : r.errors.collections = b.error, h.ok) {
					const e = h.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return g.ok ? r.products = g.body : r.errors.products = g.error, f.ok ? (n()(r.badges, f.body.badges), r.userOwnedBadges = f.body.userOwnedBadges) : r.errors.userBadges = f.error, r
			}
			const l = (e, t) => Object(a.a)(e, {
				endpoint: `${i.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
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
					method: n.nb.GET
				})
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.1cfc3db8eb8e541271d9.js.map