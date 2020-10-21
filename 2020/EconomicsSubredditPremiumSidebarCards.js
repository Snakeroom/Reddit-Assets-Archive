// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.c83b2a8b0a7dc76ea82a.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards"], {
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
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
				l = e => async (t, s, n) => {
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
				}, u = (e, t) => async (s, n, i) => {
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
				return w
			})), s.d(t, "a", (function() {
				return k
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/config.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([s.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("SubredditPremiumBadgeHovercardTooltip")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/featureFlags/index.ts"),
				h = s("./src/reddit/helpers/economics/sortBadges.ts"),
				g = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				x = s("./src/reddit/models/Badge/index.ts");
			var f = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("CustomBadgeHovercardTooltip").then(s.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				O = s("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = s.n(O);
			const C = "add-custom-badge-tooltip",
				j = 100,
				S = 2 * j;
			class P extends n.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, S)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return n.a.createElement("img", {
						className: Object(a.a)(E.a.image, this.props.className),
						src: "".concat(d.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(C, "-").concat(this.props.uniqueIdentifier);
					return n.a.createElement(r.Fragment, null, this.props.showAddCustom && n.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, n.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, n.a.createElement(g.a, {
						className: E.a.addCustom
					})), n.a.createElement(f, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(x.b)(24, 24, e),
							s = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return n.a.createElement(r.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, n.a.createElement("div", {
							className: Object(a.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, n.a.createElement("img", {
							className: E.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? n.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : n.a.createElement(p.c, {
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
					useHovercard: b.d.spSpecialMemberships
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
					useHovercard: b.d.spSpecialMemberships
				}),
				_ = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(c.j)())
				}),
				w = Object(i.b)(I, _)(P),
				k = Object(i.b)(v, _)(P)
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
				return h
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				u = s("./src/reddit/featureFlags/index.ts"),
				m = s("./src/reddit/selectors/economics.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.m.less"),
				b = s.n(p);

			function h(e) {
				const {
					badges: t
				} = e;
				return t.length ? n.a.createElement(l.b, {
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
			t.b = Object(i.b)(() => Object(o.c)({
				accountId: e => e.user.account ? e.user.account.id : void 0,
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(m.r)(e, s, r)
				},
				customBadgesEnabled: u.d.spCustomBadgesAndEmotes,
				premiumEnabled: e => u.d.spSpecialMemberships(e)
			}), e => ({
				onShowTooltip: t => e(Object(c.f)({
					tooltipId: t
				})),
				onHideTooltip: () => e(Object(c.i)()),
				onOpenUploadDialog: () => e(Object(a.j)())
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
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				c = s("./src/reddit/helpers/economics/sortBadges.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				u = s("./node_modules/reselect/es/index.js"),
				m = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				b = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const x = Object(u.c)({
				account: e => e.user.account
			});
			t.a = Object(i.b)(x, (e, t) => {
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
				if (!e.account) return null;
				const t = Object(c.a)(e.badges),
					s = t[t.length - 1],
					r = s && s.extra && s.extra.style && s.extra.style.backgroundColor,
					i = s && s.extra && s.extra.style && s.extra.style.color;
				return n.a.createElement("div", {
					className: Object(o.a)(e.className, h.a.container, {
						[h.a.clickable]: e.clickToOpenModal
					}),
					style: {
						backgroundColor: r || (e.showDefaultBackground ? "var(--newRedditTheme-field)" : void 0)
					},
					onClick: () => e.clickToOpenModal && e.onOpenModal()
				}, n.a.createElement("div", {
					className: h.a.userContainer
				}, n.a.createElement(m.a, {
					accountId: e.account.id,
					badges: t,
					subredditId: e.subredditId,
					uniqueIdentifier: e.uniqueIdentifier || "",
					userId: e.account.id,
					onShowTooltip: e.uniqueIdentifier ? e.onShowTooltip : () => {},
					onHideTooltip: e.uniqueIdentifier ? e.onHideTooltip : () => {},
					onOpenUploadDialog: e.onOpenUploadDialog
				}), n.a.createElement(p.a, {
					badges: t,
					subredditId: e.subredditId,
					userId: e.account.id
				}, n.a.createElement("span", {
					className: h.a.user
				}, e.account.username || e.account.displayText || "username"))), e.showExplanation && n.a.createElement("div", {
					className: h.a.description
				}, r || i ? r ? g._("Username and content is distinguished with a color matching the last badge.", null, {
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
					style: s.extra && s.extra.style && s.extra.style.color ? Object.assign(Object.assign({}, e.children.props.style || {}), {
						color: s.extra.style.color,
						fontWeight: 700
					}) : e.children.props.style
				}) : e.children
			}
			t.b = Object(i.b)(() => Object(o.c)({
				badges: (e, t) => {
					let {
						subredditId: s,
						userId: r
					} = t;
					return Object(d.r)(e, s, r)
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				a = s.n(d);
			const c = 250,
				l = 100;
			class u extends n.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(a.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let r = 0; r < l; r++) this.createPiece(t, s);
						for (let r = 0; r < c - l; r++) window.setTimeout(() => this.createPiece(t, s), 1e4 * r / (c - l))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								r = (6 * Math.random() + 4) * t / 1e3;
							s.className = a.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = "rotate(".concat(360 * Math.random(), "deg)"), this.el.appendChild(s), this.restartPiece(s, r, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, r) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(a.a.container));
							o.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * r + "px", e.offsetHeight, e.style.transition = "top ".concat(t, "s ease-out, left ").concat(t, "s ease-out")
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
					d = Object(i.d)(t => Object(b.x)(t, e.subredditId)),
					a = Object(r.useRef)(d);
				return Object(r.useEffect)(() => () => {
					t.current = !1
				}, []), Object(r.useEffect)(() => {
					a.current === b.a.NotSubscribed && d === b.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), a.current = d
				}, [d]), d === b.a.Subscribed ? n.a.createElement(u, {
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
				l = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				u = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/endpoints/economics/banners.ts"),
				g = s("./src/reddit/icons/svgs/Menu/index.tsx"),
				x = s("./src/reddit/selectors/economics.ts"),
				f = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				j = s("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				S = s("./src/reddit/icons/svgs/Gallery/index.tsx"),
				P = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				I = s("./src/reddit/models/Badge/managementPage.ts"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				w = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/Controls/index.m.less"),
				k = s.n(w);
			const y = Object(o.c)({
				customBadgesEnabled: d.d.spCustomBadgesAndEmotes,
				hasGalleryBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.i)(e, s)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.u)(e, s)
				}
			});
			var B = Object(C.c)(Object(i.b)(y, (e, t) => {
					let {
						subredditId: s,
						sendEvent: r
					} = t;
					return {
						onOpenBadges: () => e(Object(E.c)({
							subredditId: s,
							initialView: I.c.MyBadges
						})),
						onOpenGallery: () => {
							e(Object(E.c)({
								subredditId: s,
								initialView: I.c.Gallery
							})), r(e => Object.assign(Object.assign({
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_badge_gallery"
							}, v.defaults(e)), {
								subreddit: v.subreddit(e)
							}))
						},
						onOpenUploadDialog: () => e(Object(E.j)())
					}
				})((function(e) {
					return n.a.createElement("div", {
						className: e.className
					}, e.userHasBadges && n.a.createElement(_.a, {
						onClick: e.onOpenBadges
					}, n.a.createElement(P.a, {
						className: k.a.icon
					}), O.fbt._("Edit My Badges Appearance", null, {
						hk: "4j32cW"
					})), e.hasGalleryBadges && n.a.createElement(_.a, {
						onClick: e.onOpenGallery
					}, n.a.createElement(S.a, {
						className: k.a.icon
					}), O.fbt._("Buy Badges", null, {
						hk: "3HJQ3p"
					})), e.customBadgesEnabled && n.a.createElement(_.a, {
						onClick: e.onOpenUploadDialog
					}, n.a.createElement(j.a, {
						className: k.a.addIcon
					}), O.fbt._("Upload Badge", null, {
						hk: "49njLC"
					})), e.onOpenPurchaseModal && n.a.createElement(_.a, {
						onClick: e.onOpenPurchaseModal
					}, n.a.createElement(j.a, {
						className: k.a.addIcon
					}), O.fbt._("Add Months", null, {
						hk: "4k6iqB"
					})))
				}))),
				N = s("./src/higherOrderComponents/asTooltip.tsx"),
				T = s("./src/reddit/controls/Dropdown/index.tsx"),
				M = s("./src/reddit/controls/Dropdown/Row.tsx"),
				D = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/DismissDropdown/index.m.less"),
				A = s.n(D);
			const U = Object(N.a)(T.a);

			function H(e) {
				return n.a.createElement(U, {
					className: Object(c.a)(A.a.container, e.className),
					isOpen: e.isOpen,
					targetPosition: ["right", "bottom"],
					tooltipId: e.tooltipId,
					tooltipPosition: ["right", "top"]
				}, n.a.createElement(M.b, {
					displayText: O.fbt._("Dismiss", null, {
						hk: "48d8ri"
					}),
					onClick: e.onClickDismiss
				}))
			}
			var L = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/loading.m.less"),
				F = s.n(L);

			function q(e) {
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
			var G = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserPreview/index.tsx"),
				R = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				W = s("./src/reddit/selectors/gov.ts"),
				Q = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PostPurchase/index.m.less"),
				V = s.n(Q);

			function K(e) {
				return !!e
			}
			const Z = Object(o.c)({
				account: e => e.user.account,
				appliedPremiumBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(x.f)(e, s);
					return [r[I.a.Loyalty], r[I.a.Achievement], r[I.a.Cosmetic]].filter(K)
				},
				membershipStartDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(x.c)(e, s),
						n = r && r.publishAt;
					if (n) {
						const e = new Date(n);
						return "Since ".concat(new Intl.DateTimeFormat("en-US").format(e))
					}
					return ""
				},
				membershipEndDate: (e, t) => {
					let {
						subredditId: s
					} = t;
					const r = Object(x.p)(e, s);
					return r ? "Paid through ".concat(new Intl.DateTimeFormat("en-US").format(r)) : ""
				},
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.s)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				},
				useCrypto: W.k
			});
			var z = Object(i.b)(Z)((function(e) {
					return e.account && e.subreddit ? n.a.createElement("div", {
						className: e.className
					}, n.a.createElement("header", {
						className: V.a.title
					}, n.a.createElement("img", {
						className: V.a.crown,
						src: Object(R.a)(e.subreddit, "Crown.gif")
					}), n.a.createElement("div", null, n.a.createElement("div", null, O.fbt._("{memberAlt} {date}", [O.fbt._param("memberAlt", e.meta.memberAlt), O.fbt._param("date", e.membershipStartDate)], {
						hk: "33p3Fk"
					})), e.useCrypto && n.a.createElement("div", {
						className: V.a.membershipEndDate
					}, e.membershipEndDate))), n.a.createElement(G.a, {
						clickToOpenModal: !0,
						showDefaultBackground: !0,
						badges: e.appliedPremiumBadges,
						className: V.a.user,
						subredditId: e.subredditId
					})) : null
				})),
				Y = s("./src/reddit/helpers/loadThirdPartyScript.ts"),
				J = s("./src/reddit/controls/Button/index.tsx"),
				X = s("./src/reddit/helpers/economics/membershipPage.ts"),
				$ = s("./node_modules/uuid/v4.js"),
				ee = s.n($),
				te = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscribeCTA/index.m.less"),
				se = s.n(te);
			const re = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.s)(e, s)
				},
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.models[s]
				}
			});
			var ne = Object(C.c)(Object(i.b)(re)((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						s = ee()();
					return n.a.createElement("footer", {
						className: e.className
					}, n.a.createElement(J.k, {
						className: se.a.cta,
						disabled: !e.subreddit,
						to: Object(X.a)(t, s),
						onClick: t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: s,
								source: "meta",
								action: "click",
								noun: "subscription_sidebar_open_learn_more"
							}, v.defaults(e)), {
								subreddit: v.subreddit(e)
							}))
						}
					}, O.fbt._("Get {membershipAlt}", [O.fbt._param("membershipAlt", e.meta.membershipAlt)], {
						hk: "5uOLJ"
					})))
				}))),
				ie = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				oe = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/index.m.less"),
				de = s.n(oe);
			class ae extends n.a.Component {
				componentDidMount() {
					Object(Y.b)()
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
			var le = Object(i.b)(ce)(ae),
				ue = s("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/index.m.less"),
				me = s.n(ue);
			const pe = "subreddit-premium-commuity-card-dismiss";
			class be extends n.a.Component {
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
					return t = this.props.userIsPremiumSubscriber === x.a.Subscribed ? n.a.createElement(n.a.Fragment, null, n.a.createElement(z, {
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: me.a.controlsPostPurchase,
						subredditId: this.props.subredditId,
						onOpenPurchaseModal: this.props.customCrypto ? this.openCheckout : void 0
					}), this.props.customCrypto && this.state.checkoutOpen && n.a.createElement(p.a, {
						withOverlay: !0,
						subredditId: this.props.subredditId,
						onClose: this.closeCheckout
					})) : this.props.userIsPremiumSubscriber === x.a.NotSubscribed ? n.a.createElement(n.a.Fragment, null, e && n.a.createElement(n.a.Fragment, null, n.a.createElement(g.a, {
						id: pe,
						className: me.a.menuIcon,
						onClick: this.props.onOpenDropdown
					}), n.a.createElement(H, {
						isOpen: this.props.dropdownIsOpen,
						tooltipId: pe,
						onClickDismiss: this.props.onDismissBanner
					})), n.a.createElement(le, {
						hideSlideshow: !e,
						subredditId: this.props.subredditId
					}), n.a.createElement(B, {
						className: Object(c.a)(me.a.controlsPrePurchase, {
							[me.a.controlsBorder]: e
						}),
						subredditId: this.props.subredditId
					})) : n.a.createElement(q, null), n.a.createElement(b.a, {
						className: Object(c.a)(this.props.className, me.a.container),
						title: this.props.meta.membershipAlt
					}, t)
				}
			}
			const he = Object(o.c)({
				customCrypto: d.d.spCustomCrypto,
				dropdownIsOpen: Object(f.b)(pe),
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.s)(e, s)
				},
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships,
				showBanner: (e, t) => {
					let {
						subredditId: s
					} = t;
					return !1 === Object(x.g)(e, s, h.a.AnimatedCard)
				},
				userHasBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.u)(e, s)
				},
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(x.x)(e, s)
				}
			});
			var ge = Object(i.b)(he, (e, t) => {
				let {
					subredditId: s
				} = t;
				return {
					onDismissBanner: () => e(Object(l.a)(s, h.a.AnimatedCard)),
					onFetchDismissedBanners: () => e(Object(l.b)(s)),
					onFetchSubscriptionData: () => e(Object(u.g)(s)),
					onOpenDropdown: () => e(Object(m.h)({
						tooltipId: pe
					}))
				}
			})(be);
			class xe extends n.a.Component {
				render() {
					const {
						cardClassName: e,
						premiumSubscriptionsEnabled: t,
						subredditId: s
					} = this.props;
					return s && t ? n.a.createElement("div", null, n.a.createElement(a.a, {
						subredditId: s
					}), n.a.createElement(ge, {
						className: e,
						subredditId: s
					})) : null
				}
			}
			const fe = Object(o.c)({
				premiumSubscriptionsEnabled: d.d.spSpecialMemberships
			});
			t.default = Object(i.b)(fe)(xe)
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i = s("./src/config.ts"),
				o = s("./src/reddit/endpoints/governance/requester.ts");
			async function d(e, t, s, r) {
				return Object(o.a)(e, {
					endpoint: "".concat(i.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: r
				})
			}
			async function a(e, t) {
				const s = await async function(e, t, s) {
					return Object(o.a)(e, {
						endpoint: "".concat(i.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function c(e, t, s, n) {
					const i = await a(e, t),
						o = Object.assign(Object.assign({}, i), {
							[s]: n
						});
					return (await d(e, t, r.UpsellBanners, o)).ok ? o : i
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(n || (n = {}));
			const l = async (e, t, s) => c(e, t, s, !0), u = async (e, t, s) => c(e, t, s, !1), m = (e, t) => d(e, t, r.UpsellBanners, Object.keys(n).reduce((e, t) => (e[n[t]] = !1, e), {}))
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards.c83b2a8b0a7dc76ea82a.js.map