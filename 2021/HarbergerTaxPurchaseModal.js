// https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.a8fa9180aa84a4a470da.js
// Retrieved at 5/11/2021, 6:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxPurchaseModal"], {
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return f
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const c = Object(n.a)(o.a),
				i = Object(n.a)(o.b),
				d = Object(n.a)(o.c),
				l = Object(n.a)(o.d),
				u = Object(n.a)(o.e),
				m = Object(n.a)(o.f),
				p = Object(n.a)(o.g),
				b = Object(n.a)(o.h),
				h = Object(n.a)(o.i),
				f = e => Object(s.h)(a.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
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
				s = r("./src/reddit/actions/harbergerTax/constants.ts");
			const a = Object(n.a)(s.c),
				o = Object(n.a)(s.e),
				c = Object(n.a)(s.a),
				i = Object(n.a)(s.b),
				d = Object(n.a)(s.d),
				l = Object(n.a)(s.f),
				u = Object(n.a)(s.g),
				m = Object(n.a)(s.h),
				p = Object(n.a)(s.i),
				b = Object(n.a)(s.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/isEmpty.js"),
				s = r.n(n),
				a = r("./src/reddit/actions/governance/errorToast.ts"),
				o = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				c = r("./src/reddit/actions/structuredStyles/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${d.a.metaUrl}/orders`,
					data: {
						...t,
						products: t.products.map(e => ({
							...e,
							productId: "mainHeader",
							quantity: "1"
						}))
					}
				})
			}
			var m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/gov.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js");
			const h = () => async (e, t) => {
				e(Object(i.f)({
					kind: m.b.Error,
					text: b.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, f = e => async (t, r, {
				apiContext: n
			}) => {
				const {
					subredditId: s
				} = e, c = r().user.account, i = Object(p.a)(r(), {
					subredditId: s
				});
				if (!c) return;
				const d = c.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: s
				}));
				const l = await u(n(), {
					subredditId: s,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: i && i.owner || "",
						ownerId: i && i.ownerId || ""
					}]
				});
				l.ok ? (t(Object(o.g)({
					productId: "mainHeader",
					subredditId: s,
					mainHeader: {
						owner: d,
						ownerId: c.id,
						price: e.newPrice || e.currentPrice,
						content: i ? i.content : {}
					}
				})), t(Object(o.c)({
					subredditId: s
				}))) : (t(Object(o.d)({
					productId: "mainHeader",
					subredditId: s,
					error: l.error
				})), Object(a.a)(t, l.error))
			}, g = e => async (t, r, {
				apiContext: n
			}) => {
				const {
					subredditId: i
				} = e, m = r().user.account, b = Object(p.a)(r(), {
					subredditId: i
				}), h = r().structuredStyles.models[i];
				if (!m || !b) return;
				const f = m.displayText || "",
					g = [],
					x = void 0 !== e.newPrice && b.price !== e.newPrice,
					v = function(e, t, r) {
						const n = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== r.bannerBackgroundImage ? n.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (n.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (n.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), n
					}(b.content, e.content, h),
					E = !s()(v);
				(x || E) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: i
				})), x ? g.push(u(n(), {
					subredditId: i,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: b.owner || "",
						ownerId: b.ownerId || ""
					}]
				})) : g.push(Promise.resolve()), E && g.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: `${d.a.metaUrl}/communities/${t.subredditId}`,
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(n(), {
					subredditId: i,
					content: v
				}));
				const [y, j] = await Promise.all(g);
				x && y.ok && E && j.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: i,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: i,
					styles: v
				}))) : x && y.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: i,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: b.content
					}
				})), E && !j.ok && Object(a.a)(t, j.error)) : E && j.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: i,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: b.price,
						content: e.content
					}
				})), t(Object(c.l)({
					subredditId: i,
					styles: v
				})), x && !y.ok && Object(a.a)(t, y.error)) : (x && Object(a.a)(t, y.error), E && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: i,
					error: y.error
				})), Object(a.a)(t, j.error)))
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
				return k
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "a", (function() {
				return H
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/helpers/economics/sortBadges.ts"),
				f = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				g = r("./src/reddit/models/Badge/index.ts");
			var x = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				v = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = r.n(v);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = "add-custom-badge-tooltip",
				w = 100,
				O = 2 * w,
				I = 24;
			class k extends s.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, w)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, O)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return s.a.createElement("img", {
						className: Object(i.a)(E.a.image, this.props.className),
						src: `${c.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${j}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || I;
					return s.a.createElement(n.Fragment, null, this.props.showAddCustom && s.a.createElement("div", {
						className: E.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, s.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, s.a.createElement(f.a, {
						className: E.a.addCustom
					})), s.a.createElement(x, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(h.a)(e).map(e => {
						const t = Object(g.d)(r, r, e),
							a = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return s.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, s.a.createElement("div", {
							className: Object(i.a)(E.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, s.a.createElement("img", {
							className: E.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? s.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : s.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const N = [],
				C = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || N
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				_ = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || N
					},
					allBadges: e => e.badges.models,
					useHovercard: b.d.spSpecialMemberships
				}),
				T = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.j)())
				});

			function P(e) {
				const {
					badgeIds: t,
					allBadges: r,
					...n
				} = e, a = t.map(e => r[e]).filter(Boolean);
				return s.a.createElement(k, y({
					badges: a
				}, n))
			}
			const B = Object(a.b)(C, T)(P),
				H = Object(a.b)(_, T)(P)
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
				s = r.n(n),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				i = r("./src/reddit/featureFlags/component.tsx"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/prettyPrintNumber/index.ts"),
				p = r("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				b = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				h = r("./src/reddit/components/Governance/Token/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/selectors/gov.ts"),
				v = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less"),
				E = r.n(v);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const j = Object(u.c)({
				cost: x.b,
				currentOwnerId: (e, t) => Object(x.c)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(x.c)(e, t).owner,
				isPurchasing: e => !!e.products.api.purchase.pending.mainHeader
			});
			var w = Object(l.b)(j, e => ({
					onPurchase: t => e(Object(p.b)(t))
				}))((function(e) {
					const {
						className: t,
						cost: r,
						currentOwnerId: a,
						currentOwnerName: c,
						subredditId: i
					} = e, d = r || "0";
					return s.a.createElement("div", {
						className: Object(o.a)(E.a.container, t)
					}, s.a.createElement("div", {
						className: E.a.owner
					}, a && s.a.createElement(n.Fragment, null, y._("Owned by", null, {
						hk: "b9B87"
					}), s.a.createElement(b.c, {
						className: E.a.ownerBadge,
						subredditId: i,
						uniqueIdentifier: "banner-purchase-modal",
						userId: a
					}), s.a.createElement("span", {
						className: E.a.username
					}, c))), s.a.createElement("div", {
						className: E.a.purchase
					}, s.a.createElement("div", {
						className: E.a.cost
					}, s.a.createElement(h.a, {
						className: E.a.token,
						subredditId: i
					}), Object(m.a)(d)), s.a.createElement(f.i, {
						onClick: () => e.onPurchase({
							subredditId: i,
							currentPrice: d
						})
					}, e.isPurchasing ? s.a.createElement(g.a, {
						sizePx: 20
					}) : y._("buy", null, {
						hk: "4dbO8f"
					}))))
				})),
				O = r("./node_modules/fbt/lib/FbtPublic.js");

			function I(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 32 29",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "31",
					height: "16",
					rx: "0.5",
					fill: "#5E75C6",
					"fill-opacity": "0.2",
					stroke: "#5E75C6"
				}), s.a.createElement("path", {
					d: "M14 19H18V29H14V19Z",
					fill: "#1A1A1B"
				}), s.a.createElement("rect", {
					x: "3.5",
					y: "19",
					width: "25",
					height: "1",
					fill: "#1A1A1B"
				}), s.a.createElement("circle", {
					cx: "28.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), s.a.createElement("circle", {
					cx: "3.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), s.a.createElement("circle", {
					cx: "10.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), s.a.createElement("circle", {
					cx: "21.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}))
			}

			function k(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 27 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					fill: "white"
				}), s.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					fill: "#5E75C6",
					"fill-opacity": "0.03"
				}), s.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					stroke: "#5E75C6"
				}), s.a.createElement("circle", {
					cx: "20.5",
					cy: "25.5",
					r: "6",
					fill: "white",
					stroke: "#5E75C6"
				}), s.a.createElement("circle", {
					cx: "18.5",
					cy: "23.5",
					r: "1",
					stroke: "#1A1A1B"
				}), s.a.createElement("circle", {
					cx: "22.5",
					cy: "27.5",
					r: "1",
					stroke: "#1A1A1B"
				}), s.a.createElement("path", {
					d: "M18.084 28.2227C17.9308 28.4524 17.9929 28.7628 18.2226 28.916C18.4524 29.0692 18.7628 29.0071 18.916 28.7773L18.084 28.2227ZM22.916 22.7774C23.0692 22.5476 23.0071 22.2372 22.7773 22.084C22.5476 21.9308 22.2372 21.9929 22.084 22.2226L22.916 22.7774ZM18.916 28.7773L22.916 22.7774L22.084 22.2226L18.084 28.2227L18.916 28.7773Z",
					fill: "#1A1A1B"
				}), s.a.createElement("path", {
					d: "M20 10H4.00005L4 9C4 9 8.08371 8.76179 12.5 7.5C17.1261 6.17825 20 4 20 4V10Z",
					fill: "#5E75C6"
				}), s.a.createElement("path", {
					d: "M4.5 12.5V14M4.5 15.5V14M6.5 12.5V14M6.5 15.5V14M4.5 14H6.5",
					stroke: "#1A1A1B",
					"stroke-linecap": "round"
				}), s.a.createElement("rect", {
					x: "9",
					y: "13",
					width: "10",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), s.a.createElement("rect", {
					x: "9",
					y: "15",
					width: "10",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), s.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "18",
					width: "11",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), s.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "20",
					width: "9",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), s.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "22",
					width: "8",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}))
			}
			var N = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Upsell/index.m.less"),
				C = r.n(N);

			function _(e) {
				const {
					className: t,
					subredditName: r,
					pointsName: n
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(C.a.container, t)
				}, s.a.createElement("div", {
					className: C.a.section
				}, s.a.createElement("div", {
					className: C.a.image
				}, s.a.createElement(I, {
					className: C.a.bannerImage
				})), s.a.createElement("div", {
					className: C.a.textSection
				}, s.a.createElement("div", {
					className: C.a.title
				}, O.fbt._("Buy r/{subredditName}'s Top Banner with {tokenName}", [O.fbt._param("subredditName", r), O.fbt._param("tokenName", n)], {
					hk: "1v5pFU"
				})), s.a.createElement("div", {
					className: C.a.text
				}, O.fbt._("Set the image to whatever you want", null, {
					hk: "saxQd"
				})))), s.a.createElement("div", {
					className: C.a.section
				}, s.a.createElement("div", {
					className: C.a.image
				}, s.a.createElement(k, {
					className: C.a.taxImage
				})), s.a.createElement("div", {
					className: C.a.textSection
				}, s.a.createElement("div", {
					className: C.a.title
				}, O.fbt._("Hamburger Tax", null, {
					hk: "3eNLF3"
				})), s.a.createElement("ul", {
					className: C.a.text
				}, s.a.createElement("li", null, O.fbt._("The owner sets the price for the banner", null, {
					hk: "19Rdj7"
				})), s.a.createElement("li", null, O.fbt._("They pay a daily tax rate of 1% by burning {tokenName}", [O.fbt._param("tokenName", n)], {
					hk: "3WaZar"
				})), s.a.createElement("li", null, O.fbt._("If the owner cannot pay the tax, the price goes to 0", null, {
					hk: "26y0Y5"
				})), s.a.createElement("li", null, O.fbt._("Anyone can buy the banner at its advertised price", null, {
					hk: "4hc3Nw"
				})), s.a.createElement("li", null, O.fbt._("The owner cannot refuse to sell it at that price", null, {
					hk: "4bvKhT"
				}))))))
			}
			var T = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.m.less"),
				P = r.n(T);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.default = Object(i.a)("spHarberger", Object(a.a)((function(e) {
				const {
					className: t
				} = e, {
					pointsDetails: r,
					subreddit: n
				} = Object(d.c)();
				return r && n ? s.a.createElement("div", {
					className: Object(o.a)(P.a.container, t)
				}, s.a.createElement(c.a, {
					className: P.a.title
				}, B._("Buy Banner", null, {
					hk: "3Mp8CG"
				})), s.a.createElement(_, {
					pointsName: r.name,
					subredditId: n.id,
					subredditName: n.name
				}), s.a.createElement(w, {
					className: P.a.controls,
					subredditId: n.id
				})) : null
			})))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, r) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
			t.a = Object(a.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(c.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(i.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = r.n(c);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: i.a.title
				}, e.children), s.a.createElement(o.a, {
					className: i.a.closeIcon
				}))
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
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(d.b)(e, t)
			});
			t.a = Object(a.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					a = `${c.a.assetPath}/${n}`;
				if (e.grey && a.endsWith(".svg")) {
					const t = `url(${a}) center/cover`;
					return s.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "m", (function() {
				return g
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

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

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function d(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function g(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/featureFlags/index.ts");

			function i(e, t, r) {
				const n = Object(o.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						...a
					} = e, o = a;
					return n ? s.a.createElement(t, o) : void 0 !== r ? s.a.createElement(r, o) : null
				})
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), s.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var c = (e = o, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				i = r("./src/reddit/actions/governance/constants.ts"),
				d = r("./src/reddit/endpoints/governance/crypto.ts");
			const l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, r, n, s, a;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == o ? void 0 : o.contracts,
					i = null == c ? void 0 : c.unlocked,
					l = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					p = !m && l === d.a.Stellar,
					b = p ? null == o ? void 0 : o.issuerAddress : null == i ? void 0 : i.address,
					h = p ? (null == o ? void 0 : o.decimals) || 7 : (null == i ? void 0 : i.decimals) || 0;
				return {
					blockchainProvider: l,
					contractAddress: b || "",
					contracts: c,
					decimals: h,
					displayConversion: "1" + "0".repeat(h),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: p ? (null == o ? void 0 : o.token) || "PHOTON" : (null == i ? void 0 : i.token) || ""
				}
			}
			var p = (e = l, t) => {
				switch (t.type) {
					case i.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: m(n)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var h = (e = b, t) => {
				switch (t.type) {
					case i.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: c,
				points: p,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: c.a
				}
			});
			const i = (e, t) => {
				var r, n, s;
				return t ? null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function d() {
				const e = Object(s.Z)(),
					t = Object(n.e)(t => Object(s.q)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const l = (e, t) => {
				var r;
				const n = null === (r = i(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === a.a.Ethereum || n === a.a.Rinkeby || n === a.a.EthTraderEthereum || n === a.a.EthTraderRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				a = {},
				o = (e, t) => {
					const r = p(e, t);
					if (r) return r.mainHeader
				},
				c = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				i = (e, t) => {
					const r = p(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const r = d(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = d(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.a8fa9180aa84a4a470da.js.map