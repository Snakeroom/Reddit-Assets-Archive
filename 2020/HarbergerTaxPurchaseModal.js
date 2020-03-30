// https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.2e04ea9a414552f9ff77.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxPurchaseModal"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "j", (function() {
				return b
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(n.a)(a.c),
				o = Object(n.a)(a.e),
				c = Object(n.a)(a.a),
				d = Object(n.a)(a.b),
				i = Object(n.a)(a.d),
				l = Object(n.a)(a.f),
				u = Object(n.a)(a.g),
				m = Object(n.a)(a.h),
				p = Object(n.a)(a.i),
				b = Object(n.a)(a.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/isEmpty.js"),
				a = r.n(n),
				s = r("./src/app/strings/index.ts"),
				o = r("./src/reddit/actions/governance/errorToast.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: "".concat(i.a.metaUrl, "/orders"),
					data: Object.assign({}, t, {
						products: t.products.map(e => Object.assign({}, e, {
							productId: "mainHeader",
							quantity: "1"
						}))
					})
				})
			}
			var m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gov.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/harbergerTax/actionCreators.ts");
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			}));
			const x = () => async (e, t) => {
				const r = Object(b.O)(t());
				e(Object(d.e)({
					kind: m.b.Error,
					text: Object(s.a)(r, "gov.harberger.banner.uploadError")
				}))
			}, h = e => async (t, r, n) => {
				let {
					apiContext: a
				} = n;
				const {
					subredditId: s
				} = e, c = r().user.account, d = Object(p.c)(r(), {
					subredditId: s
				});
				if (!c) return;
				const i = c.displayText || "";
				t(Object(g.f)({
					productId: "mainHeader",
					subredditId: s
				}));
				const l = await u(a(), {
					subredditId: s,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: d && d.owner || "",
						ownerId: d && d.ownerId || ""
					}]
				});
				l.ok ? (t(Object(g.g)({
					productId: "mainHeader",
					subredditId: s,
					mainHeader: {
						owner: i,
						ownerId: c.id,
						price: e.newPrice || e.currentPrice,
						content: d ? d.content : {}
					}
				})), t(Object(g.c)({
					subredditId: s
				}))) : (t(Object(g.d)({
					productId: "mainHeader",
					subredditId: s,
					error: l.error
				})), Object(o.a)(t, l.error))
			}, f = e => async (t, r, n) => {
				let {
					apiContext: s
				} = n;
				const {
					subredditId: d
				} = e, m = r().user.account, b = Object(p.c)(r(), {
					subredditId: d
				}), x = r().structuredStyles.models[d];
				if (!m || !b) return;
				const h = m.displayText || "",
					f = [],
					v = void 0 !== e.newPrice && b.price !== e.newPrice,
					E = function(e, t, r) {
						const n = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== r.bannerBackgroundImage ? n.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (n.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (n.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), n
					}(b.content, e.content, x),
					O = !a()(E);
				(v || O) && t(Object(g.i)({
					productId: "mainHeader",
					subredditId: d
				})), v ? f.push(u(s(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: b.owner || "",
						ownerId: b.ownerId || ""
					}]
				})) : f.push(Promise.resolve()), O && f.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: "".concat(i.a.metaUrl, "/communities/").concat(t.subredditId),
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(s(), {
					subredditId: d,
					content: E
				}));
				const [I, w] = await Promise.all(f);
				v && I.ok && O && w.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: d,
					styles: E
				}))) : v && I.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: b.content
					}
				})), O && !w.ok && Object(o.a)(t, w.error)) : O && w.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: b.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: d,
					styles: E
				})), v && !I.ok && Object(o.a)(t, I.error)) : (v && Object(o.a)(t, I.error), O && (t(Object(g.h)({
					productId: "mainHeader",
					subredditId: d,
					error: I.error
				})), Object(o.a)(t, w.error)))
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
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/helpers/economics/sortBadges.ts"),
				x = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				h = r("./src/reddit/models/Badge/index.ts");
			var f = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = r.n(v);
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return P
			}));
			const O = "add-custom-badge-tooltip",
				I = 100,
				w = 2 * I;
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, I)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, w)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return a.a.createElement("img", {
						className: Object(d.a)(E.a.image, this.props.className),
						src: "".concat(c.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(O, "-").concat(this.props.uniqueIdentifier);
					return a.a.createElement(n.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, a.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(x.a, {
						className: E.a.addCustom
					})), a.a.createElement(f, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(g.a)(this.props.badges).map(e => {
						const t = Object(h.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return a.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, a.a.createElement("div", {
							className: Object(d.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(r),
							onMouseLeave: () => this.handleMouseLeave()
						}, a.a.createElement("img", {
							className: E.a.image,
							id: r,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? a.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: r,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : a.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const y = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: b.d.spPremium
				}),
				k = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: r
						} = t;
						const n = e.user.account;
						if (n) {
							return ((e.users.appliedBadges[n.id] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: b.d.spPremium
				}),
				C = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(i.i)())
				}),
				N = Object(s.b)(y, C)(j),
				P = Object(s.b)(k, C)(j)
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				flexRow: "_1-qMhtN1yW5TgA3cxFjp3H",
				container: "_33Tn1w9OJKFY3C2eX9m13w",
				cost: "_2yXwRPYRwoULzhEkzQNi6d",
				owner: "_3mJKwu0ydKrHE7H4xRh5Dt",
				ownerBadge: "_1JB0Y6d6obtMIzrNRZg8J-",
				purchase: "QkKbVeemixWjw0I2FWDqP",
				token: "_1wz1rZivfRWju_-pBrGEQg",
				username: "vxDeqBrvW18gKrInL_l1s"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Upsell/index.m.less": function(e, t, r) {
			e.exports = {
				bannerImage: "_3p-7zTC5fMnzY1Z2dMdHwp",
				container: "_3OthVlUHyO8NIRp71GL6Vr",
				image: "_3-zxfq4uyeNL1X6Wv9iokL",
				section: "heKPpLJcpLssD_C_yWqVt",
				taxImage: "_3bhfbm9RIzhthU6DSjqBKa",
				title: "_20qgWJszephoyeb1czkknv",
				text: "_33cti2V12FbMsuz3n6OM65"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1GCgHzxInOTUzn9cKUbXpd",
				controls: "_3DyeDZuIwp14ukiWH51rr8",
				title: "_2BrjBtsTanBWBcBZFbKNDC"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/featureFlags/component.tsx"),
				m = r("./src/reddit/i18n/components.tsx"),
				p = r("./src/app/strings/index.ts"),
				b = r("./src/lib/prettyPrintNumber/index.ts"),
				g = r("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				x = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				h = r("./src/reddit/components/Governance/Token/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = r("./src/reddit/selectors/gov.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				I = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less"),
				w = r.n(I);
			const j = Object(o.c)({
				cost: E.d,
				currentOwnerId: (e, t) => Object(E.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(E.e)(e, t).owner,
				isPurchasing: e => !!e.products.api.purchase.pending.mainHeader,
				language: O.O
			});
			var y = Object(s.b)(j, e => ({
					onPurchase: t => e(Object(g.b)(t))
				}))((function(e) {
					const {
						className: t,
						cost: r,
						currentOwnerId: s,
						currentOwnerName: o,
						language: c,
						subredditId: i
					} = e, l = r || "0";
					return a.a.createElement("div", {
						className: Object(d.a)(w.a.container, t)
					}, a.a.createElement("div", {
						className: w.a.owner
					}, s && a.a.createElement(n.Fragment, null, a.a.createElement(m.c, null, "Owned by"), a.a.createElement(x.c, {
						className: w.a.ownerBadge,
						subredditId: i,
						uniqueIdentifier: "banner-purchase-modal",
						userId: s
					}), a.a.createElement("span", {
						className: w.a.username
					}, o))), a.a.createElement("div", {
						className: w.a.purchase
					}, a.a.createElement("div", {
						className: w.a.cost
					}, a.a.createElement(h.a, {
						className: w.a.token,
						subredditId: i
					}), Object(b.a)(l)), a.a.createElement(f.f, {
						onClick: () => e.onPurchase({
							subredditId: i,
							currentPrice: l
						})
					}, e.isPurchasing ? a.a.createElement(v.a, {
						sizePx: 20
					}) : Object(p.a)(c, "gov.harberger.buy"))))
				})),
				k = function(e) {
					return a.a.createElement("svg", {
						className: e.className,
						viewBox: "0 0 32 29",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("rect", {
						x: "0.5",
						y: "0.5",
						width: "31",
						height: "16",
						rx: "0.5",
						fill: "#5E75C6",
						"fill-opacity": "0.2",
						stroke: "#5E75C6"
					}), a.a.createElement("path", {
						d: "M14 19H18V29H14V19Z",
						fill: "#1A1A1B"
					}), a.a.createElement("rect", {
						x: "3.5",
						y: "19",
						width: "25",
						height: "1",
						fill: "#1A1A1B"
					}), a.a.createElement("circle", {
						cx: "28.5",
						cy: "19.5",
						r: "1",
						fill: "white",
						stroke: "#1A1A1B"
					}), a.a.createElement("circle", {
						cx: "3.5",
						cy: "19.5",
						r: "1",
						fill: "white",
						stroke: "#1A1A1B"
					}), a.a.createElement("circle", {
						cx: "10.5",
						cy: "19.5",
						r: "1",
						fill: "white",
						stroke: "#1A1A1B"
					}), a.a.createElement("circle", {
						cx: "21.5",
						cy: "19.5",
						r: "1",
						fill: "white",
						stroke: "#1A1A1B"
					}))
				},
				C = function(e) {
					return a.a.createElement("svg", {
						className: e.className,
						viewBox: "0 0 27 32",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, a.a.createElement("rect", {
						x: "0.5",
						y: "0.5",
						width: "23",
						height: "29",
						rx: "1.5",
						fill: "white"
					}), a.a.createElement("rect", {
						x: "0.5",
						y: "0.5",
						width: "23",
						height: "29",
						rx: "1.5",
						fill: "#5E75C6",
						"fill-opacity": "0.03"
					}), a.a.createElement("rect", {
						x: "0.5",
						y: "0.5",
						width: "23",
						height: "29",
						rx: "1.5",
						stroke: "#5E75C6"
					}), a.a.createElement("circle", {
						cx: "20.5",
						cy: "25.5",
						r: "6",
						fill: "white",
						stroke: "#5E75C6"
					}), a.a.createElement("circle", {
						cx: "18.5",
						cy: "23.5",
						r: "1",
						stroke: "#1A1A1B"
					}), a.a.createElement("circle", {
						cx: "22.5",
						cy: "27.5",
						r: "1",
						stroke: "#1A1A1B"
					}), a.a.createElement("path", {
						d: "M18.084 28.2227C17.9308 28.4524 17.9929 28.7628 18.2226 28.916C18.4524 29.0692 18.7628 29.0071 18.916 28.7773L18.084 28.2227ZM22.916 22.7774C23.0692 22.5476 23.0071 22.2372 22.7773 22.084C22.5476 21.9308 22.2372 21.9929 22.084 22.2226L22.916 22.7774ZM18.916 28.7773L22.916 22.7774L22.084 22.2226L18.084 28.2227L18.916 28.7773Z",
						fill: "#1A1A1B"
					}), a.a.createElement("path", {
						d: "M20 10H4.00005L4 9C4 9 8.08371 8.76179 12.5 7.5C17.1261 6.17825 20 4 20 4V10Z",
						fill: "#5E75C6"
					}), a.a.createElement("path", {
						d: "M4.5 12.5V14M4.5 15.5V14M6.5 12.5V14M6.5 15.5V14M4.5 14H6.5",
						stroke: "#1A1A1B",
						"stroke-linecap": "round"
					}), a.a.createElement("rect", {
						x: "9",
						y: "13",
						width: "10",
						height: "1",
						rx: "0.5",
						fill: "#5E75C6"
					}), a.a.createElement("rect", {
						x: "9",
						y: "15",
						width: "10",
						height: "1",
						rx: "0.5",
						fill: "#5E75C6"
					}), a.a.createElement("rect", {
						opacity: "0.4",
						x: "4",
						y: "18",
						width: "11",
						height: "1",
						rx: "0.5",
						fill: "#5E75C6"
					}), a.a.createElement("rect", {
						opacity: "0.4",
						x: "4",
						y: "20",
						width: "9",
						height: "1",
						rx: "0.5",
						fill: "#5E75C6"
					}), a.a.createElement("rect", {
						opacity: "0.4",
						x: "4",
						y: "22",
						width: "8",
						height: "1",
						rx: "0.5",
						fill: "#5E75C6"
					}))
				},
				N = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Upsell/index.m.less"),
				P = r.n(N);
			const T = Object(o.c)({
				tokenName: E.p,
				language: O.O
			});
			var B = Object(s.b)(T)((function(e) {
					const {
						className: t,
						language: r,
						subredditName: n,
						tokenName: s
					} = e;
					return a.a.createElement("div", {
						className: Object(d.a)(P.a.container, t)
					}, a.a.createElement("div", {
						className: P.a.section
					}, a.a.createElement("div", {
						className: P.a.image
					}, a.a.createElement(k, {
						className: P.a.bannerImage
					})), a.a.createElement("div", {
						className: P.a.textSection
					}, a.a.createElement("div", {
						className: P.a.title
					}, Object(p.a)(r, "gov.harberger.explanations.banner.title", {
						tokenName: s,
						subredditName: n
					})), a.a.createElement("div", {
						className: P.a.text
					}, a.a.createElement(m.c, null, "Set the image to whatever you want")))), a.a.createElement("div", {
						className: P.a.section
					}, a.a.createElement("div", {
						className: P.a.image
					}, a.a.createElement(C, {
						className: P.a.taxImage
					})), a.a.createElement("div", {
						className: P.a.textSection
					}, a.a.createElement("div", {
						className: P.a.title
					}, a.a.createElement(m.c, null, "Hamburger Tax")), a.a.createElement("ul", {
						className: P.a.text
					}, a.a.createElement("li", null, a.a.createElement(m.c, null, "The owner sets the price for the banner")), a.a.createElement("li", null, Object(p.a)(r, "gov.harberger.explanations.tax.text2", {
						tokenName: s
					})), a.a.createElement("li", null, a.a.createElement(m.c, null, "If the owner cannot pay the tax, the price goes to 0")), a.a.createElement("li", null, a.a.createElement(m.c, null, "Anyone can buy the banner at its advertised price")), a.a.createElement("li", null, a.a.createElement(m.c, null, "The owner cannot refuse to sell it at that price"))))))
				})),
				H = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.m.less"),
				_ = r.n(H);
			const M = Object(o.c)({
					subreddit: l.q
				}),
				A = Object(s.b)(M),
				L = Object(l.t)();
			t.default = Object(u.a)("spHarberger", Object(c.a)(L(A((function(e) {
				const {
					className: t,
					subreddit: r
				} = e;
				return r ? a.a.createElement("div", {
					className: Object(d.a)(_.a.container, t)
				}, a.a.createElement(i.a, {
					className: _.a.title
				}, a.a.createElement(m.c, null, "Buy Banner")), a.a.createElement(B, {
					subredditId: r.id,
					subredditName: r.name
				}), a.a.createElement(y, {
					className: _.a.controls,
					subredditId: r.id
				})) : null
			})))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(i);
			t.a = Object(s.b)(void 0, (e, t) => {
				let {
					afterClose: r
				} = t;
				return {
					onClose: () => {
						e(Object(c.f)()), r && r()
					}
				}
			})((function(e) {
				return a.a.createElement(d.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = r.n(c);

			function i(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(d.a.container, e.className)
				}, a.a.createElement("div", {
					className: d.a.title
				}, e.children), a.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				d = r("./src/reddit/selectors/gov.ts");
			const i = Object(o.c)({
				tokenSymbol: d.q
			});
			t.a = Object(s.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return a.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return i
			}));
			var n, a = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, r) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function d(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function i(e, t, r) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
					}
					return r
				};

			function i(e, t, r) {
				const n = Object(o.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(s.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, s = d(e, ["featureEnabled"]);
					return n ? a.a.createElement(t, s) : void 0 !== r ? a.a.createElement(r, s) : null
				})
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s(e) {
				return a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), a.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "o", (function() {
				return O
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "s", (function() {
				return j
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "n", (function() {
				return N
			})), r.d(t, "k", (function() {
				return P
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = r("./src/reddit/selectors/postCreations.ts");
			const d = [],
				i = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = j(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = I(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				b = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				x = (e, t) => {
					if (Object(o.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = s.d.spPolls(e) || s.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				O = (e, t) => {
					const r = C(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const r = w(e, t);
					return r && r.walletProvider
				},
				y = (e, t) => {
					const r = j(e, t),
						n = w(e, t);
					return r && r.provider || n && n.provider
				},
				k = (e, t) => {
					const r = y(e, t);
					return r === a.a.Ethereum || r === a.a.Rinkeby
				},
				C = (e, t) => {
					const r = j(e, t),
						n = y(e, t);
					if (r && !r.inTransition && n === a.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const s = r && r.extra && r.extra.contracts,
						o = s && s.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				N = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = j(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = w(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=HarbergerTaxPurchaseModal.2e04ea9a414552f9ff77.js.map