// https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.c7dda671a7d614356def.js
// Retrieved at 6/22/2020, 2:50:07 PM by Reddit Dataminer v1.0.0
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
				return b
			})), r.d(t, "j", (function() {
				return p
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
				b = Object(n.a)(a.i),
				p = Object(n.a)(a.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/isEmpty.js"),
				a = r.n(n),
				s = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
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
				b = r("./src/reddit/selectors/gov.ts"),
				p = r("./node_modules/fbt/lib/FbtPublic.js");
			const h = () => async (e, t) => {
				e(Object(d.e)({
					kind: m.b.Error,
					text: p.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, x = e => async (t, r, n) => {
				let {
					apiContext: a
				} = n;
				const {
					subredditId: c
				} = e, d = r().user.account, i = Object(b.c)(r(), {
					subredditId: c
				});
				if (!d) return;
				const l = d.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: c
				}));
				const m = await u(a(), {
					subredditId: c,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: i && i.owner || "",
						ownerId: i && i.ownerId || ""
					}]
				});
				m.ok ? (t(Object(o.g)({
					productId: "mainHeader",
					subredditId: c,
					mainHeader: {
						owner: l,
						ownerId: d.id,
						price: e.newPrice || e.currentPrice,
						content: i ? i.content : {}
					}
				})), t(Object(o.c)({
					subredditId: c
				}))) : (t(Object(o.d)({
					productId: "mainHeader",
					subredditId: c,
					error: m.error
				})), Object(s.a)(t, m.error))
			}, g = e => async (t, r, n) => {
				let {
					apiContext: d
				} = n;
				const {
					subredditId: m
				} = e, p = r().user.account, h = Object(b.c)(r(), {
					subredditId: m
				}), x = r().structuredStyles.models[m];
				if (!p || !h) return;
				const g = p.displayText || "",
					f = [],
					v = void 0 !== e.newPrice && h.price !== e.newPrice,
					E = function(e, t, r) {
						const n = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== r.bannerBackgroundImage ? n.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (n.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (n.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), n
					}(h.content, e.content, x),
					w = !a()(E);
				(v || w) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: m
				})), v ? f.push(u(d(), {
					subredditId: m,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: h.owner || "",
						ownerId: h.ownerId || ""
					}]
				})) : f.push(Promise.resolve()), w && f.push(function(e, t) {
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
				}(d(), {
					subredditId: m,
					content: E
				}));
				const [I, j] = await Promise.all(f);
				v && I.ok && w && j.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: g,
						ownerId: p.id,
						price: e.newPrice || h.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: m,
					styles: E
				}))) : v && I.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: g,
						ownerId: p.id,
						price: e.newPrice || h.price,
						content: h.content
					}
				})), w && !j.ok && Object(s.a)(t, j.error)) : w && j.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: m,
					mainHeader: {
						owner: g,
						ownerId: p.id,
						price: h.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: m,
					styles: E
				})), v && !I.ok && Object(s.a)(t, I.error)) : (v && Object(s.a)(t, I.error), w && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: m,
					error: I.error
				})), Object(s.a)(t, j.error)))
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
				return y
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return P
			}));
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
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				x = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = r("./src/reddit/models/Badge/index.ts");
			var f = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = r.n(v);
			const w = "add-custom-badge-tooltip",
				I = 100,
				j = 2 * I;
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, I)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return a.a.createElement("img", {
						className: Object(d.a)(E.a.image, this.props.className),
						src: "".concat(c.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(w, "-").concat(this.props.uniqueIdentifier);
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
					})), Object(h.a)(this.props.badges).map(e => {
						const t = Object(g.b)(24, 24, e),
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
						}) : a.a.createElement(b.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: r,
							text: e.title
						})))
					}))
				}
			}
			const O = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: p.d.spPremium
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
					useHovercard: p.d.spPremium
				}),
				T = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(i.i)())
				}),
				N = Object(s.b)(O, T)(y),
				P = Object(s.b)(k, T)(y)
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_33Tn1w9OJKFY3C2eX9m13w",
				flexRow: "_1-qMhtN1yW5TgA3cxFjp3H",
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
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				i = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/featureFlags/component.tsx"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/prettyPrintNumber/index.ts"),
				b = r("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				p = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				h = r("./src/reddit/components/Governance/Token/index.tsx"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/selectors/gov.ts"),
				v = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less"),
				E = r.n(v);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const I = Object(u.c)({
				cost: f.d,
				currentOwnerId: (e, t) => Object(f.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(f.e)(e, t).owner,
				isPurchasing: e => !!e.products.api.purchase.pending.mainHeader
			});
			var j = Object(s.b)(I, e => ({
					onPurchase: t => e(Object(b.b)(t))
				}))((function(e) {
					const {
						className: t,
						cost: r,
						currentOwnerId: s,
						currentOwnerName: o,
						subredditId: d
					} = e, i = r || "0";
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.container, t)
					}, a.a.createElement("div", {
						className: E.a.owner
					}, s && a.a.createElement(n.Fragment, null, w._("Owned by", null, {
						hk: "b9B87"
					}), a.a.createElement(p.c, {
						className: E.a.ownerBadge,
						subredditId: d,
						uniqueIdentifier: "banner-purchase-modal",
						userId: s
					}), a.a.createElement("span", {
						className: E.a.username
					}, o))), a.a.createElement("div", {
						className: E.a.purchase
					}, a.a.createElement("div", {
						className: E.a.cost
					}, a.a.createElement(h.a, {
						className: E.a.token,
						subredditId: d
					}), Object(m.a)(i)), a.a.createElement(x.f, {
						onClick: () => e.onPurchase({
							subredditId: d,
							currentPrice: i
						})
					}, e.isPurchasing ? a.a.createElement(g.a, {
						sizePx: 20
					}) : w._("buy", null, {
						hk: "4dbO8f"
					}))))
				})),
				y = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = function(e) {
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
				k = function(e) {
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
				T = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Upsell/index.m.less"),
				N = r.n(T);
			const P = Object(u.c)({
				tokenName: f.p
			});
			var C = Object(s.b)(P)((function(e) {
					const {
						className: t,
						subredditName: r,
						tokenName: n
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(N.a.container, t)
					}, a.a.createElement("div", {
						className: N.a.section
					}, a.a.createElement("div", {
						className: N.a.image
					}, a.a.createElement(O, {
						className: N.a.bannerImage
					})), a.a.createElement("div", {
						className: N.a.textSection
					}, a.a.createElement("div", {
						className: N.a.title
					}, y.fbt._("Buy r/{subredditName}'s Top Banner with {tokenName}", [y.fbt._param("subredditName", r), y.fbt._param("tokenName", n)], {
						hk: "1v5pFU"
					})), a.a.createElement("div", {
						className: N.a.text
					}, y.fbt._("Set the image to whatever you want", null, {
						hk: "saxQd"
					})))), a.a.createElement("div", {
						className: N.a.section
					}, a.a.createElement("div", {
						className: N.a.image
					}, a.a.createElement(k, {
						className: N.a.taxImage
					})), a.a.createElement("div", {
						className: N.a.textSection
					}, a.a.createElement("div", {
						className: N.a.title
					}, y.fbt._("Hamburger Tax", null, {
						hk: "3eNLF3"
					})), a.a.createElement("ul", {
						className: N.a.text
					}, a.a.createElement("li", null, y.fbt._("The owner sets the price for the banner", null, {
						hk: "19Rdj7"
					})), a.a.createElement("li", null, y.fbt._("They pay a daily tax rate of 1% by burning {tokenName}", [y.fbt._param("tokenName", n)], {
						hk: "3WaZar"
					})), a.a.createElement("li", null, y.fbt._("If the owner cannot pay the tax, the price goes to 0", null, {
						hk: "26y0Y5"
					})), a.a.createElement("li", null, y.fbt._("Anyone can buy the banner at its advertised price", null, {
						hk: "4hc3Nw"
					})), a.a.createElement("li", null, y.fbt._("The owner cannot refuse to sell it at that price", null, {
						hk: "4bvKhT"
					}))))))
				})),
				_ = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.m.less"),
				B = r.n(_);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const M = Object(u.c)({
					subreddit: i.q
				}),
				A = Object(s.b)(M),
				L = Object(i.t)();
			t.default = Object(l.a)("spHarberger", Object(o.a)(L(A((function(e) {
				const {
					className: t,
					subreddit: r
				} = e;
				return r ? a.a.createElement("div", {
					className: Object(c.a)(B.a.container, t)
				}, a.a.createElement(d.a, {
					className: B.a.title
				}, H._("Buy Banner", null, {
					hk: "3Mp8CG"
				})), a.a.createElement(C, {
					subredditId: r.id,
					subredditName: r.name
				}), a.a.createElement(j, {
					className: B.a.controls,
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
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(o.c)({
				tokenSymbol: i.q
			});
			t.a = Object(s.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && r.endsWith(".svg")) {
					const t = "url(".concat(r, ") center/cover");
					return a.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: r
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
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
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
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
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
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "m", (function() {
				return j
			})), r.d(t, "s", (function() {
				return y
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "r", (function() {
				return T
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
					const n = y(e, {
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
				b = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = I(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
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
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				w = (e, t) => {
					const r = T(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				y = (e, t) => {
					const r = j(e, t);
					return r && r.walletProvider
				},
				O = (e, t) => {
					const r = y(e, t),
						n = j(e, t);
					return r && r.provider || n && n.provider
				},
				k = (e, t) => {
					const r = O(e, t);
					return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby
				},
				T = (e, t) => {
					const r = y(e, t),
						n = O(e, t);
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
					const n = y(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = j(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=HarbergerTaxPurchaseModal.c7dda671a7d614356def.js.map