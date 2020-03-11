// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.2e54e427569d6e840167.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/endpoints/economics/banners.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/economics/banners/constants.ts");
			const o = Object(i.a)(n.c),
				d = Object(i.a)(n.d),
				a = Object(i.a)(n.a),
				c = Object(i.a)(n.b);
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			}));
			const l = e => async (t, s, i) => {
				let {
					apiContext: n
				} = i;
				const a = s();
				if (!a.user.account) return;
				if (a.economics.banners.dismissedBanners[e]) return;
				t(o(e));
				const c = await Object(r.b)(n(), e);
				t(d({
					subredditId: e,
					data: c
				}))
			}, m = (e, t) => async (s, i, n) => {
				let {
					apiContext: o
				} = n;
				s(a({
					subredditId: e,
					bannerType: t
				})), Object(r.c)(o(), e, t)
			}, u = (e, t) => async (s, i, n) => {
				let {
					apiContext: o
				} = n;
				s(c({
					subredditId: e,
					bannerType: t
				})), Object(r.e)(o(), e, t)
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
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/higherOrderComponents/makeAsync.tsx");
			var u = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				g = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = s("./src/reddit/models/Badge/index.ts");
			var C = Object(m.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				O = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = s.n(O);
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "a", (function() {
				return B
			}));
			const f = "add-custom-badge-tooltip",
				P = 100,
				j = 2 * P;
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, P)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return i.a.createElement("img", {
						className: Object(a.a)(E.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(f, "-").concat(this.props.uniqueIdentifier);
					return i.a.createElement(r.Fragment, null, this.props.showAddCustom && i.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, i.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, i.a.createElement(g.a, {
						className: E.a.addCustom
					})), i.a.createElement(C, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(x.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return i.a.createElement(r.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, i.a.createElement("div", {
							className: Object(a.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, i.a.createElement("img", {
							className: E.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? i.a.createElement(u, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : i.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const I = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: s,
							userId: r
						} = t;
						return ((e.users.appliedBadges[r] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				v = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: s
						} = t;
						const r = e.user.account;
						if (r) {
							return ((e.users.appliedBadges[r.id] || {})[s] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spPremium
				}),
				w = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.i)())
				}),
				y = Object(n.b)(I, w)(S),
				B = Object(n.b)(v, w)(S)
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "ekl2maIRbrCrsYFt1OwaE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				m = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/selectors/economics.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = s.n(p);

			function h(e) {
				const {
					badges: t
				} = e;
				return t.length ? i.a.createElement(l.b, {
					useHovercard: !0,
					badges: t,
					className: Object(d.a)(e.className, b.a.badge),
					uniqueIdentifier: e.uniqueIdentifier,
					showAddCustom: e.customBadgesEnabled && e.premiumEnabled && e.showAddCustom && t.length < 2 && e.accountId === e.userId,
					subredditId: e.subredditId,
					userId: e.userId,
					onShowTooltip: e.onShowTooltip,
					onHideTooltip: e.onHideTooltip,
					onOpenUploadDialog: e.onOpenUploadDialog
				}) : null
			}
			t.b = Object(n.b)(() => Object(o.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(u.t)(e, s, r)
				},
				customBadgesEnabled: m.d.spCustomBadges,
				premiumEnabled: e => m.d.spPremium(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(a.i)())
			}))(h)
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
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/helpers/economics/sortBadges.ts"),
				m = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/models/Badge/managementPage.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				h = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				g = s.n(h);
			const x = Object(o.c)({
				account: e => e.user.account
			});
			t.a = Object(n.b)(x, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(c.i)()),
					onOpenModal: () => e(Object(a.c)({
						subredditId: s,
						initialView: u.c.MyBadges
					})),
					onOpenUploadDialog: () => e(Object(a.i)())
				}
			})((function(e) {
				if (!e.account) return null;
				const t = Object(l.a)(e.badges),
					s = t[t.length - 1],
					r = s && s.extra && s.extra.style && s.extra.style.backgroundColor,
					n = s && s.extra && s.extra.style && s.extra.style.color;
				return i.a.createElement("div", {
					className: Object(d.a)(e.className, g.a.container, {
						[g.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: r || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, i.a.createElement("div", {
					className: g.a.userContainer
				}, i.a.createElement(p.a, {
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
					className: g.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && i.a.createElement("div", {
					className: g.a.description
				}, r || n ? r ? Object(m.c)("Username and content is distinguished with a color matching the last badge.") : Object(m.c)("Username is distinguished with a color matching the last badge.") : Object(m.c)("This is how your username will appear.")))
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/selectors/economics.ts");

			function a(e) {
				const {
					badges: t
				} = e, s = t[t.length - 1];
				return s && !e.ignore ? i.a.cloneElement(e.children, {
					style: s.extra && s.extra.style && s.extra.style.color ? Object.assign({}, e.children.props.style || {}, {
						color: s.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(n.b)(() => Object(o.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(d.t)(e, s, r)
				}
			}))(a)
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx");
			const i = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = i
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/Confetti/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3bLlg-qlxleVIKm3nfa00U",
				piece: "JN0isy8ilZ9JM9kPEUb8n"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/Button/index.m.less": function(e, t, s) {
			e.exports = {
				button: "XbXDk49gZMQvPx-a8NZK8"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1pK796WiMaMbBRVFxjXfBG",
				addIcon: "_1MMoCnZ_nk8-cC1k2OGigA",
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/economics.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/Confetti/index.m.less"),
				m = s.n(l);
			const u = 250,
				p = 100;
			class b extends i.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(m.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let r = 0; r < p; r++) this.createPiece(t, s);
						for (let r = 0; r < u - p; r++) window.setTimeout(() => this.createPiece(t, s), 1e4 * r / (u - p))
					}, this.createPiece = (e, t) => {
						c.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								r = (6 * Math.random() + 4) * t / 1e3;
							s.className = m.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = "rotate(".concat(360 * Math.random(), "deg)"), this.el.appendChild(s), this.restartPiece(s, r, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, r) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(m.a.container));
							c.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * r + "px", e.offsetHeight, e.style.transition = "top ".concat(t, "s ease-out, left ").concat(t, "s ease-out")
							}), setTimeout(() => {
								c.a.write(() => {
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
					return i.a.createElement("div", {
						ref: e => this.setEl(e)
					})
				}
			}
			var h = s("./src/lib/classNames/index.ts"),
				g = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				x = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				C = s("./src/reddit/actions/tooltip.ts"),
				O = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				E = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/endpoints/economics/banners.ts"),
				P = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				j = s("./src/reddit/selectors/gov.ts"),
				S = s("./src/reddit/selectors/tooltip.ts"),
				I = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				w = s("./src/reddit/i18n/utils.ts"),
				y = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				B = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				k = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				N = s("./src/reddit/models/Badge/managementPage.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				M = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/Button/index.m.less"),
				T = s.n(M);

			function D(e) {
				return i.a.createElement("button", {
					className: Object(h.a)(e.className, T.a.button),
					onClick: t => {
						t.stopPropagation(), e.onClick()
					}
				}, e.children)
			}
			var H = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				U = s.n(H);
			const A = Object(o.c)({
				customBadgesEnabled: d.d.spCustomBadges,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.m)(e, s)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.y)(e, s)
				}
			});
			var L = Object(v.b)(Object(n.b)(A, (e, t) => {
					let {
						subredditId: s,
						sendEvent: r
					} = t;
					return {
						onOpenBadges: () => e(Object(I.c)({
							subredditId: s,
							initialView: N.c.MyBadges
						})),
						onOpenGallery: () => {
							e(Object(I.c)({
								subredditId: s,
								initialView: N.c.Gallery
							})), r(e => Object.assign({
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_badge_gallery"
							}, _.defaults(e), {
								subreddit: _.subreddit(e)
							}))
						},
						onOpenUploadDialog: () => e(Object(I.i)())
					}
				})((function(e) {
					return i.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && i.a.createElement(D, {
						onClick: e.onOpenBadges
					}, i.a.createElement(k.a, {
						className: U.a.icon
					}), Object(w.c)("Edit My Badges Appearance")), e.hasGalleryBadges && i.a.createElement(D, {
						onClick: e.onOpenGallery
					}, i.a.createElement(B.a, {
						className: U.a.icon
					}), Object(w.c)("Buy Badges")), e.customBadgesEnabled && i.a.createElement(D, {
						onClick: e.onOpenUploadDialog
					}, i.a.createElement(y.a, {
						className: U.a.addIcon
					}), Object(w.c)("Upload Badge")), e.onOpenPurchaseModal && i.a.createElement(D, {
						onClick: e.onOpenPurchaseModal
					}, i.a.createElement(y.a, {
						className: U.a.addIcon
					}), Object(w.c)("Add Months")))
				}))),
				F = s("./src/higherOrderComponents/asTooltip.tsx"),
				G = s("./src/reddit/controls/Dropdown/index.tsx"),
				V = s("./src/reddit/controls/Dropdown/Row.tsx"),
				q = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				W = s.n(q);
			const R = Object(F.a)(G.a);

			function Q(e) {
				return i.a.createElement(R, {
					className: Object(h.a)(W.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, i.a.createElement(V.b, {
					displayText: Object(w.c)("Dismiss"),
					onClick: e.onClickDismiss
				}))
			}
			var Z = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				K = s.n(Z);

			function Y(e) {
				return i.a.createElement("div", {
					className: Object(h.a)(K.a.container, e.className)
				}, i.a.createElement("div", {
					className: K.a.title
				}), i.a.createElement("div", {
					className: K.a.user
				}), i.a.createElement("div", {
					className: K.a.control
				}, i.a.createElement("div", {
					className: K.a.icon
				}), i.a.createElement("div", {
					className: K.a.buttonText
				})))
			}
			var z = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				X = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				J = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				$ = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				ee = s.n($);

			function te(e) {
				return !!e
			}
			const se = Object(o.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(a.f)(e, s);
					return [r[N.a.Loyalty], r[N.a.Achievement], r[N.a.Cosmetic]].filter(te)
				},
				membershipStartDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = e.economics.subredditPremium[s];
					if (r && r.status === J.a.Fetched && r.data.subscription && r.data.subscription.active && r.data.subscription.active.membership.publishAt) {
						const e = new Date(r.data.subscription.active.membership.publishAt);
						return "Since ".concat(new Intl.DateTimeFormat("en-US").format(e))
					}
					return ""
				},
				membershipEndDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(a.q)(e, s);
					return r ? "Paid through ".concat(new Intl.DateTimeFormat("en-US").format(r)) : ""
				},
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.u)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				},
				useCrypto: j.k
			});
			var re = Object(n.b)(se)((function(e) {
					return e.account && e.subreddit ? i.a.createElement("div", {
						className: e.className
					}, i.a.createElement("header", {
						className: ee.a.title
					}, i.a.createElement("img", {
						className: ee.a.crown,
						src: Object(X.a)(e.subreddit, "Crown.gif")
					}), i.a.createElement("div", null, i.a.createElement("div", null, Object(w.c)("".concat(Object(w.b)("memberAlt", e.meta.memberAlt), " ").concat(Object(w.b)("date", e.membershipStartDate)))), e.useCrypto && i.a.createElement("div", {
						className: ee.a.membershipEndDate
					}, e.membershipEndDate))), i.a.createElement(z.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: ee.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				ie = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				ne = s("./node_modules/uuid/v4.js"),
				oe = s.n(ne),
				de = s("./src/reddit/controls/Button/index.tsx"),
				ae = s("./src/reddit/helpers/economics/membershipPage.ts"),
				ce = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				le = s.n(ce);
			const me = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.u)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var ue = Object(v.b)(Object(n.b)(me)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = oe()();
					return i.a.createElement("footer", {
						className: e.className
					}, i.a.createElement(de.h, {
						className: le.a.cta,
						disabled: !e.subreddit,
						to: Object(ae.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more"
							}, _.defaults(e), {
								subreddit: _.subreddit(e)
							}))
						}
					}, Object(w.c)("Get ".concat(Object(w.b)("membershipAlt", e.meta.membershipAlt)))))
				}))),
				pe = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				be = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				he = s.n(be);
			class ge extends i.a.Component {
				componentDidMount() {
					Object(ie.a)()
				}
				render() {
					return this.props.account ? i.a.createElement("div", {
						className: this.props.className
					}, i.a.createElement(pe.a, {
						className: he.a.benefits,
						hideSlideshow: this.props.hideSlideshow,
						subredditId: this.props.subredditId
					}), !this.props.hideSlideshow && i.a.createElement(ue, {
						subredditId: this.props.subredditId
					})) : null
				}
			}
			const xe = Object(o.c)({
				account: e => e.user.account
			});
			var Ce = Object(n.b)(xe)(ge),
				Oe = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				Ee = s.n(Oe);
			const fe = "subreddit-premium-commuity-card-dismiss";
			class Pe extends i.a.Component {
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
				async componentDidMount() {
					this.props.onFetchDismissedBanners(), this.props.onFetchSubscriptionData()
				}
				render() {
					if (!this.props.userIsLoggedIn || !this.props.premiumSubscriptionsEnabled) return null;
					const {
						showBanner: e
					} = this.props;
					let t;
					return t = this.props.userIsPremiumSubscriber === a.b.Subscribed ? i.a.createElement(i.a.Fragment, null, i.a.createElement(re, {
						subredditId: this.props.subredditId
					}), i.a.createElement(L, {
						className: Ee.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.useCrypto ? this.openCheckout : void 0
					}), j.k && this.state.checkoutOpen && i.a.createElement(O.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === a.b.NotSubscribed ? i.a.createElement(i.a.Fragment, null, e && i.a.createElement(i.a.Fragment, null, i.a.createElement(P.a, {
						id: fe,
						className: Ee.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), i.a.createElement(Q, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: fe,
						onClickDismiss: this.props.onDismissBanner
					})), i.a.createElement(Ce, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), i.a.createElement(L, {
						className: Object(h.a)(Ee.a.controlsPrePurchase, {
							[Ee.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : i.a.createElement(Y, null), i.a.createElement(E.a, {
						className: Object(h.a)(this.props.className, Ee.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const je = Object(o.c)({
				dropdownIsOpen: Object(S.b)(fe),
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.u)(e, s)
				},
				premiumSubscriptionsEnabled: d.d.spPremiumSubscriptions,
				showBanner: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !1 === Object(a.g)(e, s, f.a.AnimatedCard)
				},
				useCrypto: j.k,
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.y)(e, s)
				},
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.B)(e, s)
				}
			});
			var Se = Object(n.b)(je, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(g.a)(s, f.a.AnimatedCard)),
					onFetchDismissedBanners: () => e(Object(g.b)(s)),
					onFetchSubscriptionData: () => e(Object(x.f)(s)),
					onOpenDropdown: () => e(Object(C.h)({
						tooltipId: fe
					}))
				}
			})(Pe);
			class Ie extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showConfetti: !1
					}, this.hasClickedMembershipButton = !1, this.onClickGetMembership = () => {
						this.hasClickedMembershipButton = !0
					}, this.showConfetti = () => {
						this.setState({
							showConfetti: !0
						}), setTimeout(() => {
							this.setState({
								showConfetti: !1
							})
						}, 1e4)
					}
				}
				componentDidUpdate(e) {
					e.userIsPremiumSubscriber === a.b.NotSubscribed && this.props.userIsPremiumSubscriber === a.b.Subscribed && this.showConfetti()
				}
				render() {
					const {
						cardClassName: e,
						premiumSubscriptionsEnabled: t,
						subredditId: s
					} = this.props;
					return s && t ? i.a.createElement("div", null, i.a.createElement(b, {
						letItRain: this.state.showConfetti
					}), i.a.createElement(Se, {
						className: e,
						subredditId: s
					})) : null
				}
			}
			const ve = Object(o.c)({
				premiumSubscriptionsEnabled: d.d.spPremiumSubscriptions,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(a.B)(e, s)
				}
			});
			t.default = Object(n.b)(ve)(Ie)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i, n = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, s, r) {
				return Object(o.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: r
				})
			}
			async function a(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: "".concat(n.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function c(e, t, s, i) {
					const n = await a(e, t),
						o = Object.assign({}, n, {
							[s]: i
						});
					return (await d(e, t, r.UpsellBanners, o)).ok ? o : n
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})), s.d(t, "a", (function() {
					return i
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "c", (function() {
					return l
				})), s.d(t, "e", (function() {
					return m
				})), s.d(t, "d", (function() {
					return u
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(i || (i = {}));
			const l = async (e, t, s) => c(e, t, s, !0), m = async (e, t, s) => c(e, t, s, !1), u = (e, t) => d(e, t, r.UpsellBanners, Object.keys(i).reduce((e, t) => (e[i[t]] = !1, e), {}))
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);

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
		"./src/reddit/icons/svgs/Gallery/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1 0H6C6.55298 0 7 0.446991 7 1V6C7 6.55301 6.55298 7 6 7H1C0.447021 7 0 6.55301 0 6V1C0 0.446991 0.447021 0 1 0ZM10 0H15C15.553 0 16 0.446991 16 1V6C16 6.55301 15.553 7 15 7H10C9.44702 7 9 6.55301 9 6V1C9 0.446991 9.44702 0 10 0ZM15 9H10C9.44702 9 9 9.44699 9 10V15C9 15.553 9.44702 16 10 16H15C15.553 16 16 15.553 16 15V10C16 9.44699 15.553 9 15 9ZM1 9H6C6.55298 9 7 9.44699 7 10V15C7 15.553 6.55298 16 6 16H1C0.447021 16 0 15.553 0 15V10C0 9.44699 0.447021 9 1 9Z"
			})))
		},
		"./src/reddit/icons/svgs/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				i = s.n(r);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, i.a.createElement("path", {
				d: "M10.65,8.27a1.55,1.55,0,1,0,1.55-1.6,1.58,1.58,0,0,0-1.55,1.6M6,8.27a1.56,1.56,0,1,0,1.55-1.6A1.58,1.58,0,0,0,6,8.27m-1.55,0a1.58,1.58,0,0,0-1.55-1.6,1.6,1.6,0,0,0,0,3.2,1.58,1.58,0,0,0,1.55-1.6"
			}))
		}
	}
]);
//# sourceMappingURL=EconomicsSubredditPremiumSidebarCards.2e54e427569d6e840167.js.map