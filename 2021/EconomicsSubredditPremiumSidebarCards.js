// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.47673dafa4d37c2cf1d9.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/reddit/endpoints/economics/banners.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/economics/banners/constants.ts");
			const n = Object(i.a)(d.c),
				a = Object(i.a)(d.d),
				o = Object(i.a)(d.a),
				c = Object(i.a)(d.b),
				m = e => async (t, r, {
					apiContext: i
				}) => {
					const d = r();
					if (!d.user.account) return;
					if (d.economics.banners.dismissedBanners[e]) return;
					t(n(e));
					const o = await Object(s.b)(i(), e);
					t(a({
						subredditId: e,
						data: o
					}))
				}, u = (e, t) => async (r, i, {
					apiContext: d
				}) => {
					r(o({
						subredditId: e,
						bannerType: t
					})), Object(s.c)(d(), e, t)
				}, l = (e, t) => async (r, i, {
					apiContext: d
				}) => {
					r(c({
						subredditId: e,
						bannerType: t
					})), Object(s.e)(d(), e, t)
				}
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
				return m
			})), r.d(t, "e", (function() {
				return u
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
				d = r("./src/reddit/constants/modals.ts"),
				n = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(s.a)(n.a),
				o = Object(s.a)(n.b),
				c = Object(s.a)(n.c),
				m = Object(s.a)(n.d),
				u = Object(s.a)(n.e),
				l = Object(s.a)(n.f),
				b = Object(s.a)(n.g),
				p = Object(s.a)(n.h),
				h = Object(s.a)(n.i),
				g = e => Object(i.h)(d.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "f", (function() {
				return C
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/forOwn.js"),
				i = r.n(s),
				d = r("./src/reddit/actions/governance/errorToast.ts"),
				n = r("./src/reddit/endpoints/economics/emojis.ts"),
				a = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				o = r("./src/reddit/endpoints/economics/subredditPremium.ts"),
				c = r("./src/reddit/endpoints/governance/badges.ts"),
				m = r("./src/config.ts"),
				u = r("./src/reddit/endpoints/governance/requester.ts");

			function l(e, t, r) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${m.a.metaUrl}/products/${t}?owners=${r}` + "&types=emotes_pack,giphy"
				})
			}
			var b = r("./src/reddit/models/Badge/index.ts"),
				p = r("./src/reddit/models/Badge/managementPage.ts"),
				h = r("./src/reddit/models/Product/index.ts"),
				g = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				f = r("./src/reddit/selectors/economics.ts"),
				y = r("./src/reddit/selectors/products.ts"),
				x = r("./src/reddit/actions/economics/me/thunkedActions.ts"),
				w = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function _(e) {
				return !!e && "removeBadge" === e.type
			}

			function E(e) {
				if (!_(e)) return e
			}
			const j = () => async (e, t, {
				apiContext: r
			}) => {
				if (!t().user.account) return;
				await e(Object(x.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					i = Object.keys(s);
				if (i.length) {
					const t = await Object(a.e)(r(), i);
					t.ok && e(Object(w.g)(t.body))
				}
			}, O = (e, t) => async (r, s, {
				apiContext: i
			}) => {
				const d = s().user.account,
					n = s().economics.subredditPremium[e],
					a = !n || n.status !== g.a.Fetched || t;
				if (d && a) {
					const t = await Object(o.a)(i(), e, d.id);
					r(Object(w.i)(t))
				}
			}, v = e => async (t, r, {
				apiContext: s
			}) => {
				const i = r(),
					n = i.user.account,
					a = Object(f.f)(i, e.subredditId),
					o = Object.keys(a).map(e => a[e]).filter(Boolean);
				if (n && e.badge) {
					let r, i;
					r = e.placement === b.a.First ? a[p.a.Loyalty] : e.placement === b.a.Second ? a[p.a.Achievement] : a[p.a.Cosmetic], t(Object(w.a)({
						...e,
						badge: E(e.badge),
						currentAppliedBadges: o,
						userId: n.id
					})), _(e.badge) && r ? i = await Object(c.a)(s(), e.subredditId, r.id, !1) : _(e.badge) || (i = await Object(c.a)(s(), e.subredditId, e.badge.id)), i && !i.ok && (t(Object(w.a)({
						...e,
						badge: r,
						currentAppliedBadges: o,
						userId: n.id
					})), Object(d.a)(t, i.error))
				}
			}, P = (e, t) => async (r, s, {
				apiContext: i
			}) => {
				await r(O(e, !0));
				const d = s().economics.subredditPremium[e];
				if (d && d.status === g.a.Fetched) {
					const s = d.data.userOwnedBadges.find(e => e.type === t.id);
					s && (r(v({
						badge: s,
						subredditId: e,
						placement: s.placement
					})), r(Object(w.d)(p.c.MyBadges)))
				}
			}, S = e => async (t, r, {
				apiContext: s
			}) => {
				const a = r().user.account,
					o = !r().economics.emotes[e],
					c = !r().economics.gifs[e];
				if (a && (o || c)) {
					const [r, o] = await Promise.all([Object(n.b)(s(), e), l(s(), e, a.id)]);
					if (!o.ok) return void Object(d.a)(t, o.error);
					const c = {
						emotes: [],
						emoteCollections: r.ok ? r.body : {},
						giphy: []
					};
					i()(o.body, e => {
						e.type === h.a.EmotesPack ? c.emotes.push(e) : e.type === h.a.Giphy && c.giphy.push(e)
					}), t(Object(w.e)({
						subredditId: e,
						products: c
					}))
				}
			}, I = (e, t, r) => async (s, i, {
				apiContext: d
			}) => {
				if (await s(O(e, !0)), r && t) {
					const r = i(),
						d = Object(f.f)(r, e),
						n = Object(y.a)(r, t);
					if (!d[Object(p.d)(n.placement)] && n) {
						const t = Object(f.k)(r, {
							subredditId: e,
							badge: n
						});
						t && await s(v({
							badge: t,
							subredditId: e
						}))
					}
					s(Object(w.c)({
						subredditId: e,
						initialView: p.c.MyBadges
					}))
				}
			}, C = e => async (t, r, {
				apiContext: s
			}) => {
				const {
					wallet: i
				} = await Object(a.c)(s(), e);
				t(Object(w.f)({
					wallet: i
				})), await t(O(e.subredditId, !0))
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
				return O
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return C
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				m = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var l = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				g = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var y = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				x = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				w = r.n(x);
			const _ = "add-custom-badge-tooltip",
				E = 100,
				j = 2 * E;
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, E)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return i.a.createElement("img", {
						className: Object(o.a)(w.a.image, this.props.className),
						src: `${a.a.assetPath}/img/badges/placeholder.png`
					});
					const e = `${_}-${this.props.uniqueIdentifier}`;
					return i.a.createElement(s.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: w.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: w.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(g.a, {
						className: w.a.addCustom
					})), i.a.createElement(y, {
						className: w.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(f.d)(24, 24, e),
							r = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return i.a.createElement(s.Fragment, {
							key: `badges-fragement-${e.id}`
						}, i.a.createElement("div", {
							className: Object(o.a)(w.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: w.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}), this.props.useHovercard ? i.a.createElement(l, {
							badge: e,
							correlationId: this.props.correlationId,
							className: w.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(b.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const v = Object(n.c)({
					badges: (e, {
						subredditId: t,
						userId: r
					}) => {
						return ((e.users.appliedBadges[r] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: p.d.spSpecialMemberships
				}),
				P = Object(n.c)({
					badges: (e, {
						subredditId: t
					}) => {
						const r = e.user.account;
						if (r) {
							return ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: p.d.spSpecialMemberships
				}),
				S = e => ({
					onShowTooltip: t => e(Object(m.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(m.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				I = Object(d.b)(v, S)(O),
				C = Object(d.b)(P, S)(O)
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
				return h
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = r("./src/reddit/actions/tooltip.ts"),
				m = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = r("./src/reddit/featureFlags/index.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				p = r.n(b);

			function h(e) {
				const {
					badges: t
				} = e;
				return t.length ? i.a.createElement(m.b, {
					useHovercard: !0,
					badges: t,
					className: Object(a.a)(e.className, p.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(d.b)(() => Object(n.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(l.p)(e, t, r),
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(o.j)())
			}))(h)
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
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				o = r("./src/reddit/actions/tooltip.ts"),
				c = r("./src/reddit/helpers/economics/sortBadges.ts"),
				m = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./node_modules/reselect/es/index.js"),
				l = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = r.n(p);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const f = Object(u.c)({
				account: e => e.user.account
			});
			t.a = Object(d.b)(f, (e, {
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
				if (!e.account) return null;
				const t = Object(c.a)(e.badges),
					r = t[t.length - 1],
					s = r && r.extra && r.extra.style && r.extra.style.backgroundColor,
					d = r && r.extra && r.extra.style && r.extra.style.color;
				return i.a.createElement("div", {
					className: Object(n.a)(e.className, h.a.container, {
						[h.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: s || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, i.a.createElement("div", {
					className: h.a.userContainer
				}, i.a.createElement(l.a, {
					accountId: e.account.id,
					badges: t,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: e.account.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), i.a.createElement(b.a, {
					badges: t,
					subredditId: e.subredditId,
					userId: e.account.id
				}, i.a.createElement("span", {
					className: h.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && i.a.createElement("div", {
					className: h.a.description
				}, s || d ? s ? g._("Username and content is distinguished with a color matching the last badge.", null, {
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
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
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
			t.b = Object(d.b)(() => Object(n.c)({
				badges: (e, {
					subredditId: t,
					userId: r
				}) => Object(a.p)(e, t, r)
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
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/lib/fastdom/index.ts"),
				a = r("./src/reddit/components/Economics/Confetti/index.m.less"),
				o = r.n(a);
			const c = 250,
				m = 100;
			class u extends i.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(o.a.container);
						const t = e.offsetWidth,
							r = e.offsetHeight;
						for (let s = 0; s < m; s++) this.createPiece(t, r);
						for (let s = 0; s < c - m; s++) window.setTimeout(() => this.createPiece(t, r), 1e4 * s / (c - m))
					}, this.createPiece = (e, t) => {
						n.a.write(() => {
							if (!this.el) return;
							const r = document.createElement("div"),
								s = (6 * Math.random() + 4) * t / 1e3;
							r.className = o.a.piece, r.style.width = 4 * Math.random() + 3 + "px", r.style.height = 6 * Math.random() + 3 + "px", r.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(r), this.restartPiece(r, s, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, r, s) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(o.a.container));
							n.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * s + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								n.a.write(() => {
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
					[r, n] = Object(b.a)(!1, t),
					a = Object(d.e)(t => Object(p.v)(t, e.subredditId)),
					o = Object(s.useRef)(a);
				return Object(s.useEffect)(() => () => {
					t.current = !1
				}, []), Object(s.useEffect)(() => {
					o.current === p.a.NotSubscribed && a === p.a.Subscribed && (n(!0), setTimeout(() => {
						n(!1)
					}, 1e4)), o.current = a
				}, [a]), a === p.a.Subscribed ? i.a.createElement(u, {
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
				d = r("./node_modules/react-motion/lib/react-motion.js"),
				n = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
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
			var x = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				w = r.n(x);
			const _ = (e, t) => `${l.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`,
				E = 500,
				j = 30,
				O = 132;
			class v extends i.a.Component {
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
					const e = this.badgesBackground.height / j;
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const t = this.badgesBackground.width,
							r = window.getComputedStyle(this.rowRef).backgroundPositionX;
						if (!r) return;
						const s = ((O - parseFloat(r.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							s > e.interval[0] && s <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, E)
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
						className: Object(o.a)(w.a.container, e)
					}, i.a.createElement("div", {
						className: w.a.background
					}), i.a.createElement("div", {
						className: w.a.content
					}, i.a.createElement("header", {
						className: w.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.a.createElement("div", {
						className: w.a.rows
					}, i.a.createElement("div", {
						className: w.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: `url(${_(t,"badges-line-1-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: w.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: `url(${_(t,"badges-line-2-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: w.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: `url(${_(t,"badges-line-3-v2.png")})`
						}
					})), i.a.createElement("div", {
						className: w.a.username,
						style: {
							color: s.color
						}
					}, i.a.createElement("img", {
						className: w.a.badgePreview,
						src: s.url
					}), r), i.a.createElement("footer", {
						className: w.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), i.a.createElement("div", {
						className: w.a.selection
					}, i.a.createElement(b.a, {
						className: w.a.check
					})))) : null
				}
			}
			const P = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => `u/${e.user.account&&e.user.account.displayText||"username"}`
			});
			var S = Object(n.b)(P)(v),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = r.n(I);
			const k = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const N = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var B = Object(n.b)(N)((function(e) {
					const {
						className: t,
						subreddit: r
					} = e;
					return r ? i.a.createElement("article", {
						className: Object(o.a)(C.a.container, t)
					}, i.a.createElement("div", {
						className: C.a.background
					}), i.a.createElement("div", {
						className: C.a.content
					}, i.a.createElement("header", {
						className: C.a.title
					}, u.fbt._("emotes", null, {
						hk: "1VLDec"
					})), i.a.createElement("div", {
						className: C.a.example
					}, i.a.createElement("img", {
						className: C.a.drawer,
						src: `${l.a.assetPath}/img/memberships/emoji-drawer.png`
					}), i.a.createElement("div", {
						className: C.a.emojisTitle
					}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
						hk: "1pL2rY"
					})), i.a.createElement("div", {
						className: C.a.emojisContainer
					}, i.a.createElement("div", {
						className: C.a.emojis
					}, k.map(e => i.a.createElement("img", {
						className: C.a.emoji,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: C.a.overflow
					}))), i.a.createElement("footer", {
						className: C.a.explanation
					}, u.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				T = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				M = r.n(T);
			const A = (() => {
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
			class D extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await A(e),
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
						className: Object(o.a)(M.a.container, e)
					}, i.a.createElement("div", {
						className: M.a.background
					}), i.a.createElement("div", {
						className: M.a.content
					}, i.a.createElement("header", {
						className: M.a.title
					}, u.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), i.a.createElement("div", {
						className: M.a.example
					}, i.a.createElement("img", {
						className: M.a.drawer,
						src: `${l.a.assetPath}/img/memberships/gif-drawer.png`
					}), i.a.createElement("div", {
						className: M.a.imagesContainer
					}, i.a.createElement("div", {
						className: M.a.images
					}, i.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol1.map(e => i.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol2.map(e => i.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					})))), i.a.createElement("div", {
						className: M.a.overflow
					}))), i.a.createElement("footer", {
						className: M.a.explanation
					}, u.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const U = Object(a.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var F = Object(n.b)(U)(D),
				L = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				R = r.n(L);
			const W = 1e4,
				$ = 110;
			class G extends i.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, W)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [S, B, F];
							default:
								return [S, F]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, W)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: r,
						subredditId: n,
						subreddit: a
					} = this.props, {
						currentSlideIdx: m
					} = this.state;
					return a ? i.a.createElement("div", {
						className: e
					}, i.a.createElement("header", {
						className: R.a.title
					}, i.a.createElement("img", {
						className: R.a.crown,
						src: Object(c.a)(a, "Crown.gif")
					}), r.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
						className: R.a.benefits
					}, i.a.createElement(d.TransitionMotion, {
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
							key: `slide-${m}`,
							data: {
								Component: this.slides[m],
								index: m
							},
							style: {
								left: Object(d.spring)(0)
							}
						}],
						willEnter: () => ({
							left: $
						}),
						willLeave: () => ({
							left: Object(d.spring)(-$)
						})
					}, e => i.a.createElement(s.Fragment, null, e.map(e => i.a.createElement("div", {
						className: R.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, i.a.createElement(e.data.Component, {
						subredditId: n
					})))))), i.a.createElement("footer", {
						className: R.a.indicators
					}, this.slides.map((e, t) => i.a.createElement("div", {
						className: Object(o.a)(R.a.indicator, {
							[R.a.indicatorSelected]: t === m
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const H = Object(a.c)({
				meta: (e, {
					subredditId: t
				}) => Object(m.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(n.b)(H)(G)
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
				d = r("./src/lib/classNames/index.ts"),
				n = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				a = r.n(n);

			function o(e) {
				return i.a.createElement("button", {
					className: Object(d.a)(e.className, a.a.button),
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
				d = r("./node_modules/react-redux/es/index.js"),
				n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				m = r("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				u = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				p = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = r("./src/reddit/endpoints/economics/banners.ts"),
				g = r("./src/reddit/icons/svgs/Menu/index.tsx"),
				f = r("./src/reddit/selectors/economics.ts"),
				y = r("./src/reddit/selectors/tooltip.ts"),
				x = r("./node_modules/fbt/lib/FbtPublic.js"),
				w = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				_ = r("./src/reddit/components/TrackingHelper/index.tsx"),
				E = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				j = r("./src/reddit/icons/svgs/Gallery/index.tsx"),
				O = r("./src/reddit/icons/svgs/Pencil/index.tsx"),
				v = r("./src/reddit/models/Badge/managementPage.ts"),
				P = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				C = r.n(I);
			const k = Object(n.c)({
				customBadgesEnabled: a.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, {
					subredditId: t
				}) => Object(f.i)(e, t),
				userHasBadges: (e, {
					subredditId: t
				}) => Object(f.s)(e, t)
			});
			var N = Object(_.c)(Object(d.b)(k, (e, {
					subredditId: t,
					sendEvent: r
				}) => ({
					onOpenBadges: () => e(Object(w.c)({
						subredditId: t,
						initialView: v.c.MyBadges
					})),
					onOpenGallery: () => {
						e(Object(w.c)({
							subredditId: t,
							initialView: v.c.Gallery
						})), r(e => ({
							source: "meta",
							action: "click",
							noun: "subscription_sidebar_open_badge_gallery",
							...P.defaults(e),
							subreddit: P.subreddit(e)
						}))
					},
					onOpenUploadDialog: () => e(Object(w.j)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && i.a.createElement(S.a, {
						onClick: e.onOpenBadges
					}, i.a.createElement(O.a, {
						className: C.a.icon
					}), x.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && i.a.createElement(S.a, {
						onClick: e.onOpenGallery
					}, i.a.createElement(j.a, {
						className: C.a.icon
					}), x.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && i.a.createElement(S.a, {
						onClick: e.onOpenUploadDialog
					}, i.a.createElement(E.a, {
						className: C.a.addIcon
					}), x.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && i.a.createElement(S.a, {
						onClick: e.onOpenPurchaseModal
					}, i.a.createElement(E.a, {
						className: C.a.addIcon
					}), x.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				B = r("./src/higherOrderComponents/asTooltip.tsx"),
				T = r("./src/reddit/controls/Dropdown/index.tsx"),
				M = r("./src/reddit/controls/Dropdown/Row.tsx"),
				A = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				D = r.n(A);
			const U = Object(B.a)(T.a);

			function F(e) {
				return i.a.createElement(U, {
					className: Object(c.a)(D.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, i.a.createElement(M.b, {
					displayText: x.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var L = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				R = r.n(L);

			function W(e) {
				return i.a.createElement("div", {
					className: Object(c.a)(R.a.container, e.className)
				}, i.a.createElement("div", {
					className: R.a.title
				}), i.a.createElement("div", {
					className: R.a.user
				}), i.a.createElement("div", {
					className: R.a.control
				}, i.a.createElement("div", {
					className: R.a.icon
				}), i.a.createElement("div", {
					className: R.a.buttonText
				})))
			}
			var $ = r("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				G = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				H = r("./src/reddit/selectors/gov.ts"),
				z = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				q = r.n(z);

			function Z(e) {
				return !!e
			}
			const X = Object(n.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, {
					subredditId: t
				}) => {
					const r = Object(f.f)(e, t);
					return [r[v.a.Loyalty], r[v.a.Achievement], r[v.a.Cosmetic]].filter(Z)
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
					const r = Object(f.n)(e, t);
					return r ? `Paid through ${new Intl.DateTimeFormat("en-US").format(r)}` : ""
				},
				meta: (e, {
					subredditId: t
				}) => Object(f.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				useCrypto: H.j
			});
			var K = Object(d.b)(X)((function(e) {
					return e.account && e.subreddit ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement("header", {
						className: q.a.title
					}, i.a.createElement("img", {
						className: q.a.crown,
						src: Object(G.a)(e.subreddit, "Crown.gif")
					}), i.a.createElement("div", null, i.a.createElement("div", null, x.fbt._("{memberAlt} {date}", [x.fbt._param("memberAlt", e.meta.memberAlt), x.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.useCrypto && i.a.createElement("div", {
						className: q.a.membershipEndDate
					}, e.membershipEndDate))), i.a.createElement($.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: q.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				Q = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				V = r("./src/reddit/controls/Button/index.tsx"),
				Y = r("./src/reddit/helpers/economics/membershipPage.ts"),
				J = r("./node_modules/uuid/v4.js"),
				ee = r.n(J),
				te = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				re = r.n(te);
			const se = Object(n.c)({
				meta: (e, {
					subredditId: t
				}) => Object(f.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var ie = Object(_.c)(Object(d.b)(se)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = ee()();
					return i.a.createElement("footer", {
						className: e.className
					}, i.a.createElement(V.k, {
						className: re.a.cta,
						disabled: !e.subreddit,
						to: Object(Y.a)(t, r),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more",
								...P.defaults(e),
								subreddit: P.subreddit(e)
							}))
						}
					}, x.fbt._("Get {membershipAlt}", [x.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				de = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				ne = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				ae = r.n(ne);
			class oe extends i.a.Component {
				componentDidMount() {
					Object(Q.b)()
				}
				render() {
					return this.props.account ? i.a.createElement("div", {
						className: this.props.className
					}, i.a.createElement(de.a, {
						className: ae.a.benefits,
						hideSlideshow: this.props.hideSlideshow,
						subredditId: this.props.subredditId
					}), !this.props.hideSlideshow && i.a.createElement(ie, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const ce = Object(n.c)({
				account: e => e.user.account
			});
			var me = Object(d.b)(ce)(oe),
				ue = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				le = r.n(ue);
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
					return t = this.props.userIsPremiumSubscriber === f.a.Subscribed ? i.a.createElement(i.a.Fragment, null, i.a.createElement(K, {
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
					})), i.a.createElement(me, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), i.a.createElement(N, {
						className: Object(c.a)(le.a.controlsPrePurchase, {
							[le.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : i.a.createElement(W, null), i.a.createElement(p.a, {
						className: Object(c.a)(this.props.className, le.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const he = Object(n.c)({
				customCrypto: a.d.spCustomCrypto,
				dropdownIsOpen: Object(y.b)(be),
				meta: (e, {
					subredditId: t
				}) => Object(f.q)(e, t),
				premiumSubscriptionsEnabled: a.d.spSpecialMemberships,
				showBanner: (e, {
					subredditId: t
				}) => !1 === Object(f.g)(e, t, h.a.AnimatedCard),
				userHasBadges: (e, {
					subredditId: t
				}) => Object(f.s)(e, t),
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(f.v)(e, t)
			});
			var ge = Object(d.b)(he, (e, {
				subredditId: t
			}) => ({
				onDismissBanner: () => e(Object(m.a)(t, h.a.AnimatedCard)),
				onFetchDismissedBanners: () => e(Object(m.b)(t)),
				onFetchSubscriptionData: () => e(Object(u.g)(t)),
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
			const ye = Object(n.c)({
				premiumSubscriptionsEnabled: a.d.spSpecialMemberships
			});
			t.default = Object(d.b)(ye)(fe)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, i, d = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts");
			async function a(e, t, r, s) {
				return Object(n.a)(e, {
					endpoint: `${d.a.metaUrl}/storage/${t}/me/${r}`,
					method: "patch",
					data: s
				})
			}
			async function o(e, t) {
				const r = await async function(e, t, r) {
					return Object(n.a)(e, {
						endpoint: `${d.a.metaUrl}/storage/${t}/me/${r}`,
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return r.ok && r.body || {}
			}
			async function c(e, t, r, i) {
					const d = await o(e, t),
						n = {
							...d,
							[r]: i
						};
					return (await a(e, t, s.UpsellBanners, n)).ok ? n : d
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(i || (i = {}));
			const m = async (e, t, r) => c(e, t, r, !0), u = async (e, t, r) => c(e, t, r, !1), l = (e, t) => a(e, t, s.UpsellBanners, Object.keys(i).reduce((e, t) => (e[i[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return n
			}));
			var s = r("./src/config.ts"),
				i = r("./src/reddit/endpoints/governance/requester.ts");
			const d = (e, t) => Object(i.a)(e, {
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
				n = (e, t) => Object(i.a)(e, {
					method: "get",
					endpoint: `${s.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "c", (function() {
				return b
			}));
			var s = r("./src/config.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				d = r("./src/reddit/constants/headers.ts"),
				n = r("./src/reddit/endpoints/governance/requester.ts"),
				a = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function c(e, t) {
				return Object(n.a)(e, {
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

			function m(e, t) {
				return Object(n.a)(e, {
					endpoint: `${s.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(n.a)(e, {
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
				return Object(n.a)(Object(i.a)(e, [d.a]), {
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
				const r = await Object(n.a)(e, {
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
				return m
			})), r.d(t, "b", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/merge.js"),
				i = r.n(s),
				d = r("./src/config.ts"),
				n = r("./src/reddit/endpoints/governance/badges.ts"),
				a = r("./src/reddit/endpoints/governance/community.ts"),
				o = r("./src/reddit/endpoints/governance/products/badges.ts"),
				c = r("./src/reddit/endpoints/governance/requester.ts");
			async function m(e, t, r) {
				const s = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					m = function(e, t) {
						return Object(c.a)(e, {
							method: "get",
							endpoint: `${d.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(a.a)(e, {
						subredditId: t
					}),
					l = Object(o.b)(e, t),
					b = Object(n.c)(e, t, r),
					[p, h, g, f] = await Promise.all([m, u, l, b]);
				if (p.ok ? s.collections = p.body : s.errors.collections = p.error, h.ok) {
					const e = h.body;
					s.subscription = e.specialMemberships, s.communityRaw = e
				}
				return g.ok ? s.products = g.body : s.errors.products = g.error, f.ok ? (i()(s.badges, f.body.badges), s.userOwnedBadges = f.body.userOwnedBadges) : s.errors.userBadges = f.error, s
			}
			const u = (e, t) => Object(c.a)(e, {
				endpoint: `${d.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/config.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function n(e, t) {
				return Object(d.a)(e, {
					endpoint: `${s.a.metaUrl}/communities/${t.subredditId}/me`,
					method: i.cb.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "j", (function() {
				return n
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "k", (function() {
				return c
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "g", (function() {
				return u
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
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function n(e) {
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
				return Object(d.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function m(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(d.a)(e, {
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
				return await Object(d.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
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
				return d
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s);

			function d(e) {
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var s, i, d;
			r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
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
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "v", (function() {
				return y
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "p", (function() {
				return w
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "q", (function() {
				return T
			})), r.d(t, "w", (function() {
				return M
			})), r.d(t, "s", (function() {
				return A
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "r", (function() {
				return L
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "l", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				d = r("./src/reddit/helpers/richTextJson/index.ts"),
				n = r("./src/reddit/models/Badge/index.ts"),
				a = r("./src/reddit/models/Badge/managementPage.ts"),
				o = r("./src/reddit/models/Gold/Powerups/index.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				m = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				l = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				b = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/gold/powerups.ts");
			const h = (e, t) => {
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
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var f;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(f || (f = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === l.a.Fetched) {
						const r = g(e, t),
							s = Date.now();
						return r && s < r ? f.Subscribed : f.NotSubscribed
					}
					return f.DontKnow
				},
				x = (e, t) => {
					const r = e.user.account,
						s = e.economics.subredditPremium[t];
					if (r && s && s.status === l.a.Fetched) {
						const s = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (s) return {
							[a.a.Loyalty]: s.find(e => e.placement === n.a.First),
							[a.a.Achievement]: s.find(e => e.placement === n.a.Second),
							[a.a.Cosmetic]: s.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				},
				w = (e, t, r) => {
					if (!s.d.spBadges(e)) return [];
					const d = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(i.a)(d.map(t => e.badges.models[t]).filter(Boolean))
				},
				_ = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === l.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function j(e, t) {
				const {
					badge: r,
					subredditId: s
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(n.e)(r) && r.userId === i) return r;
				const d = e.badges.models,
					a = e.user.ownedBadges[s] || {},
					o = Object(n.e)(r) ? r.type : r.id;
				return Object.keys(a).map(e => d[e]).find(e => e && e.type === o)
			}

			function O(e, t, r, s) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === l.a.Fetched) {
					if (r === a.a.Loyalty || r === a.a.Achievement) return i.data.collections[r];
					if (r === a.a.Cosmetic && s) return i.data.collections[r][s]
				}
				return []
			}

			function v(e, t) {
				const r = O(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function P(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === l.a.Fetched) {
					const e = r.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(n.f)
				}
				return []
			}

			function S(e, t) {
				return O(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(n.f)(e) || !!e.price))
			}
			const I = e => {
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
			var C;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(C || (C = {}));
			const k = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				N = (e, t) => Object.values(e.products.models).filter(e => e.type === m.a.Membership && t && e.subredditId === t),
				B = (e, t) => {
					if (!t) return {};
					const r = k.prices;
					N(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const s = h(e, t);
					return s && s.price && s.currency && (r[s.currency] = s.price), r
				},
				T = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						s = r && r.extra && r.extra.nomenclature || k;
					return {
						prices: B(e, t),
						member: s.member || k.member,
						memberPlural: s.memberPlural || k.memberPlural,
						memberAlt: s.memberAlt || k.memberAlt,
						memberAltPlural: s.memberAltPlural || k.memberAltPlural,
						membership: s.membership || k.membership,
						membershipAlt: s.membershipAlt || k.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				A = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				L = (e, t, r) => {
					const i = "replyToPost" !== r && Object(b.a)(e, {
						commentId: r
					});
					if (!!i && Object(d.a)(i)) return !0;
					if (t && Object(p.m)(e, {
							subredditId: t,
							benefit: o.a.CommentsWithGifs
						})) return !0;
					const n = s.d.spGiphy(e),
						a = F(e, t);
					return n && a
				},
				R = (e, t, r) => {
					if (t) {
						const s = e.economics.banners.dismissedBanners[t];
						if (s && s.data) return !!s.data[r]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return u
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
				return w
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "j", (function() {
				return P
			}));
			var s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				i = r("./src/reddit/endpoints/governance/crypto.ts");
			const d = [],
				n = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = _(e, {
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
					const r = x(e, t);
					if (r) return r.mainHeader
				},
				m = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = x(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : n
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
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || a,
				y = (e, t) => {
					const r = O(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const r = w(e, t);
					return r && r.walletProvider
				},
				E = (e, t) => {
					const r = _(e, t),
						s = w(e, t);
					return r && r.provider || s && s.provider
				},
				j = (e, t) => {
					const r = E(e, t);
					return r === i.a.Ethereum || r === i.a.Rinkeby || r === i.a.EthTraderEthereum || r === i.a.EthTraderRinkeby
				},
				O = (e, t) => {
					const r = _(e, t),
						s = E(e, t);
					if (r && !r.inTransition && s === i.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const d = r && r.extra && r.extra.contracts,
						n = d && d.unlocked;
					return n && {
						address: n.address,
						symbol: n.token || "",
						decimals: n.decimals || 18,
						image: n.image
					}
				},
				v = (e, {
					subredditId: t
				}) => {
					const r = _(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = w(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				d = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const s = r.subredditId,
							i = Object.keys(e.user.ownedBadges[s] || {}),
							d = e.badges.models,
							n = Date.now();
						let a = !1;
						return i.forEach(e => {
							const r = d[e];
							r && r.type === t && r.endsAt > n && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.47673dafa4d37c2cf1d9.js.map