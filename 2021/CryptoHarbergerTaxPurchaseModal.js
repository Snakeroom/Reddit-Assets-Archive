// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.d6811159ca449d3bc1a1.js
// Retrieved at 5/12/2021, 12:40:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxPurchaseModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
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
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "j", (function() {
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(n.a)(o.a),
				c = Object(n.a)(o.b),
				d = Object(n.a)(o.c),
				l = Object(n.a)(o.d),
				u = Object(n.a)(o.e),
				m = Object(n.a)(o.f),
				p = Object(n.a)(o.g),
				h = Object(n.a)(o.h),
				b = Object(n.a)(o.i),
				x = e => Object(a.h)(s.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
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
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(n.a)(a.c),
				o = Object(n.a)(a.e),
				i = Object(n.a)(a.a),
				c = Object(n.a)(a.b),
				d = Object(n.a)(a.d),
				l = Object(n.a)(a.f),
				u = Object(n.a)(a.g),
				m = Object(n.a)(a.h),
				p = Object(n.a)(a.i),
				h = Object(n.a)(a.j)
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
				return M
			})), r.d(t, "a", (function() {
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("SubredditPremiumBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				b = r("./src/reddit/helpers/economics/sortBadges.ts"),
				x = r("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = r("./src/reddit/models/Badge/index.ts");
			var v = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("CustomBadgeHovercardTooltip").then(r.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = r.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = "add-custom-badge-tooltip",
				N = 100,
				j = 2 * N,
				O = 24;
			class k extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, N)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, j)
					}
				}
				render() {
					const {
						badges: e
					} = this.props;
					if (this.props.usePlaceholder && !e.length) return a.a.createElement("img", {
						className: Object(c.a)(E.a.image, this.props.className),
						src: `${i.a.assetPath}/img/badges/placeholder.png`
					});
					const t = `${w}-${this.props.uniqueIdentifier}`,
						r = this.props.badgeSize || O;
					return a.a.createElement(n.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
						className: E.a.wrapper,
						id: t,
						onMouseEnter: () => this.handleMouseEnter(t),
						onMouseLeave: () => this.handleMouseLeave()
					}, a.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, a.a.createElement(x.a, {
						className: E.a.addCustom
					})), a.a.createElement(v, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: t,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(e).map(e => {
						const t = Object(f.d)(r, r, e),
							s = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return a.a.createElement(n.Fragment, {
							key: `badges-fragement-${e.id}`
						}, a.a.createElement("div", {
							className: Object(c.a)(E.a.wrapper, this.props.className),
							key: `wrapper-${e.id}`,
							onMouseEnter: () => this.handleMouseEnter(s),
							onMouseLeave: () => this.handleMouseLeave()
						}, a.a.createElement("img", {
							className: E.a.image,
							id: s,
							key: e.id,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`,
							style: {
								height: `${r}px`
							}
						}), this.props.useHovercard ? a.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: `tooltip-${e.id}`,
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: s,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : a.a.createElement(p.c, {
							caretOnTop: !0,
							key: `tooltip-${e.id}`,
							tooltipId: s,
							text: e.title
						})))
					}))
				}
			}
			const _ = [],
				T = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: r
					}) => {
						var n;
						return (null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				C = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var r;
						const n = e.user.account;
						return n && (null === (r = e.users.appliedBadges[n.id]) || void 0 === r ? void 0 : r[t]) || _
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				I = e => ({
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
				} = e, s = t.map(e => r[e]).filter(Boolean);
				return a.a.createElement(k, y({
					badges: s
				}, n))
			}
			const M = Object(s.b)(T, I)(P),
				B = Object(s.b)(C, I)(P)
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1fFS9Nru2uTP9R4EHoPmx-",
				flexRow: "a7j9hqSS-gQka3fEtYNMe",
				cost: "VGyiEvbD-6rpR1P30_7p_",
				owner: "_20Muaq7qHPEFtEH27DTRP5",
				ownerBadge: "_2qYODBIzJZZa9DOXvQpPw8",
				ownerText: "TiBUbVUfXxb8Q8TxMEe0p",
				purchase: "_2q4sEXV2G5aCFSGmIBTyP6",
				token: "_27pAhe57iHwMmTusc8vhA3",
				username: "_2JdhCtQDGuMR_r84g04aTx"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less": function(e, t, r) {
			e.exports = {
				bannerImage: "_10nhPvLZo7tqsw0XF3IdlO",
				container: "A5rVvRLt6WxedRLjXjELF",
				image: "GZ6ifzk8E8dWTaO3bK6wr",
				section: "_2qgtrBPy9JS2xrBWsxloDf",
				taxImage: "_2zfDmXfgMZXqEoCEiWYRcC",
				title: "_3DcXW2CST3EeiGivE39ToE",
				text: "_1osIezlmEjCEEnp5vuyfWS"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less": function(e, t, r) {
			e.exports = {
				controls: "Te3x8YuMvsyqMGk0d5I06"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less": function(e, t, r) {
			e.exports = {
				description: "_1yEF4lviPelrVHo3ESc4cN",
				title: "_3yXHaBH1sM7JXQBnZtv8Bg"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less": function(e, t, r) {
			e.exports = {
				amount: "_3gp6kQWk5XflDXs0WPDMIY",
				label: "_3GvoNq_K9RvfMIMrU4jBgi"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less": function(e, t, r) {
			e.exports = {
				currentPrice: "_3E8hG8JdFluU-VJMIsJoyM",
				equals: "_3O7mnCsxKdPBGS1nsohMRO",
				times: "vIyyAmAtejwav25jy7SVN",
				footer: "_11bMTzuT3VdS3ouw5GH1-1",
				owner: "_1hBJXfoJHZZLjVV0x27GQJ",
				ownerBadge: "x4m3zCG1ZVBozncsUkM6b",
				section: "_1bf13FQQGpTqW7MS5pOQDw",
				prePay: "_1hFkN7eDkLYAz5F4eUrUGc",
				prepayInput: "_1Mjb8FhiVEoxxbt833rh7d",
				prepayTotal: "rqSIJAzgikhsBeOc_jzZw",
				price: "vNuJtVOC66pjoyOqhGfUh",
				priceInput: "_1GHcUlExKGR6w3RkA-huP8",
				priceToken: "_9BkFTgnkhbwtMRfFoZrTj",
				tax: "_2a3V7mndqvILwQ8oHYwv_E",
				total: "_5OPU982ET-EfU7DI2oE4O",
				username: "_2SoiY-M-shb5QbefoWl5tf"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1hAH53-eghNAqo4f91sKHj",
				purchase: "MOHWPixENcqcUfZdpzhOF",
				title: "_17xuuuAbbykhb660vjmN-"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				d = r("./src/reddit/contexts/PageLayer/index.tsx"),
				l = r("./src/reddit/featureFlags/component.tsx"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/prettyPrintNumber/index.ts"),
				p = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				h = r("./src/reddit/components/Governance/Token/index.tsx"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				x = r("./src/reddit/helpers/governance/tokens.ts"),
				f = r("./src/reddit/selectors/gov.ts"),
				v = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less"),
				g = r.n(v);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(u.c)({
				cost: f.d,
				currentOwnerId: (e, t) => Object(f.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(f.e)(e, t).owner,
				tokenDisplayConversion: f.m
			});
			var w = Object(s.b)(y)((function(e) {
				const {
					className: t,
					cost: r,
					currentOwnerId: s,
					currentOwnerName: o,
					subredditId: c,
					tokenDisplayConversion: d
				} = e, l = r || "0";
				return a.a.createElement("div", {
					className: Object(i.a)(g.a.container, t)
				}, a.a.createElement("div", {
					className: g.a.owner
				}, s && a.a.createElement(n.Fragment, null, a.a.createElement("div", null, E._("Owned by", null, {
					hk: "yKSxo"
				})), a.a.createElement("div", {
					className: g.a.ownerText
				}, a.a.createElement(p.c, {
					className: g.a.ownerBadge,
					subredditId: c,
					uniqueIdentifier: "banner-purchase-modal",
					userId: s
				}), a.a.createElement("span", {
					className: g.a.username
				}, o)))), a.a.createElement("div", {
					className: g.a.purchase
				}, a.a.createElement("div", {
					className: g.a.cost
				}, a.a.createElement(h.a, {
					className: g.a.token,
					subredditId: c
				}), Object(m.a)(Object(x.b)(l, d))), a.a.createElement(b.i, {
					onClick: e.onPurchase
				}, E._("proceed to purchase", null, {
					hk: "4tin6U"
				}))))
			}));

			function N(e) {
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
			}

			function j(e) {
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
			}
			var O = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less"),
				k = r.n(O);
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const T = Object(u.c)({
				tokenName: f.n,
				details: f.b
			});
			var C = Object(s.b)(T)((function(e) {
					const {
						className: t,
						details: r,
						subredditName: n,
						tokenName: s
					} = e, o = `${r.taxRate}%`;
					return a.a.createElement("div", {
						className: Object(i.a)(k.a.container, t)
					}, a.a.createElement("div", {
						className: k.a.section
					}, a.a.createElement("div", {
						className: k.a.image
					}, a.a.createElement(N, {
						className: k.a.bannerImage
					})), a.a.createElement("div", {
						className: k.a.textSection
					}, a.a.createElement("div", {
						className: k.a.title
					}, _._("Buy r/{communityName} 's Top Banner", [_._param("communityName", n)], {
						hk: "2hXSyn"
					})), a.a.createElement("div", {
						className: k.a.text
					}, _._("Set the image to whatever you want", null, {
						hk: "45iv1p"
					})))), a.a.createElement("div", {
						className: k.a.section
					}, a.a.createElement("div", {
						className: k.a.image
					}, a.a.createElement(j, {
						className: k.a.taxImage
					})), a.a.createElement("div", {
						className: k.a.textSection
					}, a.a.createElement("div", {
						className: k.a.title
					}, _._("Harberger Tax", null, {
						hk: "1RH5bF"
					})), a.a.createElement("ul", {
						className: k.a.text
					}, a.a.createElement("li", null, _._("The owner sets the price for the banner", null, {
						hk: "1EnVw2"
					})), a.a.createElement("li", null, _._("They pay a daily tax of {tax} by burning {token}", [_._param("tax", o), _._param("token", s)], {
						hk: "2qEsqE"
					})), a.a.createElement("li", null, _._("If the owner cannot pay the tax, the price goes to 0", null, {
						hk: "X4H8x"
					})), a.a.createElement("li", null, _._("Anyone can buy the banner at its advertised price", null, {
						hk: "2k3KWy"
					})), a.a.createElement("li", null, _._("The owner cannot refuse to sell it at that price", null, {
						hk: "zeQCk"
					}))))))
				})),
				I = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less"),
				P = r.n(I);

			function M(e) {
				return a.a.createElement("div", {
					className: Object(i.a)(P.a.container, e.className)
				}, a.a.createElement(C, {
					subredditId: e.subreddit.id,
					subredditName: e.subreddit.name
				}), a.a.createElement(w, {
					className: P.a.controls,
					subredditId: e.subreddit.id,
					onPurchase: e.onPurchase
				}))
			}
			var B = r("./node_modules/bignumber.js/bignumber.js"),
				A = r("./src/lib/currency/cleanNumber/index.ts"),
				H = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				S = r("./src/reddit/actions/toaster.ts"),
				D = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				R = r("./src/reddit/controls/FormFields/index.tsx"),
				F = r("./src/reddit/helpers/governance/ethereum.ts"),
				G = r("./src/reddit/models/Toast/index.ts"),
				L = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less"),
				V = r.n(L);

			function W(e) {
				return a.a.createElement("article", {
					className: Object(i.a)(e.className, V.a.container)
				}, a.a.createElement("div", {
					className: V.a.title
				}, e.title), a.a.createElement("div", {
					className: V.a.description
				}, e.description), e.children)
			}
			var U = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less"),
				q = r.n(U),
				X = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less"),
				Y = r.n(X);

			function Z(e) {
				return a.a.createElement("div", {
					className: Object(i.a)(Y.a.container, e.className)
				}, a.a.createElement("div", {
					className: Y.a.label
				}, e.label), a.a.createElement("div", {
					className: Y.a.amount
				}, Object(m.a)(Object(x.b)(e.amount, e.tokenDisplayConversion))))
			}
			var J = r("./node_modules/fbt/lib/FbtPublic.js");
			const z = .01;
			class $ extends a.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => {
						this.setState({
							price: Object(x.a)(Object(A.a)(e || "0"), this.props.tokenDisplayConversion)
						})
					}, this.handlePrepayChange = e => this.setState({
						prepayDays: Object(A.a)(e)
					}), this.handlePurchase = async () => {
						const {
							cost: e,
							details: t,
							unlockedToken: r
						} = this.props, {
							price: n,
							prepayDays: a
						} = this.state, s = r && r.address, o = t.address;
						if (!s || !o) return this.props.onError();
						const i = new B.BigNumber(n).multipliedBy(t.taxRate * z).multipliedBy(parseInt(a));
						try {
							await Object(F.f)(s, o, e || "0", n, i.toFixed(0)), this.props.onPurchaseComplete()
						} catch (c) {
							return this.props.onError(c.message)
						}
					}, this.state = {
						price: e.cost || "0",
						prepayDays: "14"
					}
				}
				render() {
					const {
						className: e,
						cost: t,
						currentOwnerId: r,
						currentOwnerName: n,
						details: s,
						subredditId: o,
						tokenDisplayConversion: c
					} = this.props, d = t || "0", l = this.state.price || "0", u = parseInt(l) * (s.taxRate * z), f = u * parseInt(this.state.prepayDays), v = parseInt(d) + f, g = `${s.taxRate}%`;
					return a.a.createElement("div", {
						className: Object(i.a)(q.a.container, e)
					}, a.a.createElement(W, {
						className: q.a.section,
						description: J.fbt._("You must pay this amount to the current owner to buy the banner.", null, {
							hk: "36sgxo"
						}),
						title: J.fbt._("Current price", null, {
							hk: "EklEv"
						})
					}, a.a.createElement("div", {
						className: q.a.currentPrice
					}, a.a.createElement(D.a, {
						amount: d,
						subredditId: o
					}), r && a.a.createElement("div", {
						className: q.a.owner
					}, J.fbt._("Owned by", null, {
						hk: "JDQVM"
					}), " ", a.a.createElement(p.c, {
						className: q.a.ownerBadge,
						subredditId: o,
						uniqueIdentifier: "banner-purchase-modal",
						userId: r
					}), a.a.createElement("span", {
						className: q.a.username
					}, n)))), a.a.createElement(W, {
						className: q.a.section,
						description: J.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. You can also lower the price to lower the tax.", null, {
							hk: "20EBr1"
						}),
						title: J.fbt._("New price and tax", null, {
							hk: "291U7z"
						})
					}, a.a.createElement("div", {
						className: q.a.price
					}, a.a.createElement(R.c, {
						redditStyle: !0,
						className: q.a.priceInput,
						label: J.fbt._("new price", null, {
							hk: "3eEJKs"
						}),
						placeholder: "0",
						type: "text",
						value: Object(m.a)(Object(x.b)(this.state.price, c)),
						onChange: e => this.handlePriceChange(e.currentTarget.value)
					}), a.a.createElement(h.a, {
						className: q.a.priceToken,
						subredditId: o
					}), a.a.createElement("div", {
						className: q.a.equals
					}, "="), a.a.createElement(Z, {
						amount: u.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("{tax} daily tax", [J.fbt._param("tax", g)], {
							hk: "1kg5ZE"
						}),
						tokenDisplayConversion: c
					}))), a.a.createElement(W, {
						className: q.a.section,
						description: J.fbt._("You must deposit money to pay the daily tax. You can top this up at any time. If the balance goes to zero, the price of the banner drops to zero. If someone else buys the banner, you will be refunded any pre-paid tax you allocated.", null, {
							hk: "3rkkNS"
						}),
						title: J.fbt._("Initial balance", null, {
							hk: "3xz0g9"
						})
					}, a.a.createElement("div", {
						className: q.a.prePay
					}, a.a.createElement(R.c, {
						redditStyle: !0,
						className: q.a.prepayInput,
						label: J.fbt._("# of days to prepay", null, {
							hk: "12YpX6"
						}),
						placeholder: "0",
						type: "text",
						value: Object(m.a)(this.state.prepayDays),
						onChange: e => this.handlePrepayChange(e.currentTarget.value)
					}), a.a.createElement("div", {
						className: q.a.times
					}, "X"), a.a.createElement(Z, {
						amount: u.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("daily tax", null, {
							hk: "18BBD8"
						}),
						tokenDisplayConversion: c
					}), a.a.createElement("div", {
						className: q.a.equals
					}, "="), a.a.createElement(D.a, {
						className: q.a.prepayTotal,
						amount: f.toFixed(2),
						subredditId: o
					}))), a.a.createElement("footer", {
						className: q.a.footer
					}, a.a.createElement("div", null, a.a.createElement("div", {
						className: q.a.total
					}, J.fbt._("Total due", null, {
						hk: "1MTLwA"
					})), a.a.createElement(D.a, {
						amount: v.toFixed(2),
						subredditId: o
					})), a.a.createElement(b.i, {
						disabled: !s.address,
						onClick: this.handlePurchase
					}, J.fbt._("buy", null, {
						hk: "4dbO8f"
					}))))
				}
			}
			const Q = Object(u.c)({
				cost: f.d,
				currentOwnerId: (e, t) => Object(f.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(f.e)(e, t).owner,
				details: f.b,
				unlockedToken: f.p,
				tokenDisplayConversion: f.m
			});
			var K = Object(s.b)(Q, e => ({
					onError: t => e(Object(S.f)({
						duration: 5e3,
						kind: G.b.Error,
						text: t || J.fbt._("Something wen't wrong with the purchase. Please try again later.", null, {
							hk: "18lJda"
						})
					})),
					onPurchaseComplete: () => e(Object(H.a)())
				}))($),
				ee = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less"),
				te = r.n(ee);
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ne;
			! function(e) {
				e[e.Info = 0] = "Info", e[e.Purchase = 1] = "Purchase"
			}(ne || (ne = {}));
			class ae extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						display: ne.Info
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? a.a.createElement("div", {
						className: Object(i.a)(te.a.container, e)
					}, a.a.createElement(c.a, {
						className: te.a.title
					}, re._("Buy Banner", null, {
						hk: "PL5xv"
					})), this.state.display === ne.Info && a.a.createElement(M, {
						subreddit: t,
						onPurchase: () => this.setState({
							display: ne.Purchase
						})
					}), this.state.display === ne.Purchase && a.a.createElement(K, {
						className: te.a.purchase,
						subredditId: t.id
					})) : null
				}
			}
			const se = Object(u.c)({
					subreddit: d.q
				}),
				oe = Object(s.b)(se),
				ie = Object(d.t)();
			t.default = Object(l.a)("spHarberger", Object(o.a)(ie(oe(ae))))
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
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(c.a, {
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = r.n(i);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: c.a.title
				}, e.children), a.a.createElement(o.a, {
					className: c.a.closeIcon
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(o.c)({
				tokenSymbol: d.o
			});
			t.a = Object(s.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${i.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
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
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/Governance/Token/index.tsx"),
				l = r("./src/reddit/helpers/governance/tokens.ts"),
				u = r("./src/reddit/selectors/gov.ts"),
				m = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = r.n(m);
			const h = Object(o.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(s.b)(h)((function(e) {
				return a.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, a.a.createElement(d.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			})), r.d(t, "c", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(a),
				o = r("./node_modules/raf/index.js"),
				i = r.n(o),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./src/higherOrderComponents/asModal/index.tsx"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/layout/row/Inline/index.tsx"),
				v = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = r.n(v);
			var E = Object(b.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: g.a.wrapper
					}, d.a.createElement(f.a, {
						className: g.a.titleRow
					}, r), d.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), d.a.createElement(f.a, {
						className: g.a.buttonRow
					}, d.a.createElement(x.i, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = r("./src/reddit/controls/ErrorText/index.m.less"),
				w = r.n(y);
			const N = Object(u.c)({
				activeModalId: h.a
			});
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: r,
						errorModalBody: a,
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(m.a)(w.a.wrapper, r)
					}, d.a.createElement("span", {
						className: w.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: w.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: s
					}, a || e))
				}
			}
			const O = Object(l.b)(N, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				k = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(O, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				_ = e => d.a.createElement(k, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return g
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/controls/ErrorText/index.tsx"),
				c = r("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = r("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = r("./src/reddit/controls/FormFields/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, a.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...d
					} = e, l = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, a.a.createElement(p, m({
						innerRef: n
					}, d)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => a.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(c.a, {
					className: u.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: r,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: r,
						placeholder: n,
						errors: s = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(b, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: r,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(d.b, {
						className: u.a.trash
					})), !!s[o] && a.a.createElement(i.b, {
						className: u.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: r,
						maxLength: n,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && r.length >= n) && !i;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && c && a.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && a.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
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
				return h
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "m", (function() {
				return f
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

			function i(e) {
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

			function c(e) {
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
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${r}`
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
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				x = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function f(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/featureFlags/index.ts");

			function c(e, t, r) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(s.b)(n)(e => {
					const {
						featureEnabled: n,
						...s
					} = e, o = s;
					return n ? a.a.createElement(t, o) : void 0 !== r ? a.a.createElement(r, o) : null
				})
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function a() {
				return window.ethereum
			}

			function s() {
				const e = a();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = a();
				return e && e.selectedAddress || null
			}

			function i() {
				return a().networkVersion || null
			}

			function c() {
				const e = a();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, s) {
				const [o, i] = await Promise.all([r.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new o.providers.Web3Provider(a()).getSigner(),
					l = new o.Contract(e, i, d),
					u = await l[n](...s);
				return await u.wait()
			}
			const u = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const m = 1;
			async function p(e, t, n, a, s) {
				const o = await r.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = o.utils,
					h = i(n).add(s),
					b = m,
					x = "0x" + [c(1)].concat([b, i(a), i(s)].map(c).map(e => d(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, r, n) {
					return l(e, Promise.resolve(u), "send", [t, r, n])
				}(e, t, h.toString(), x)
			}
			const h = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function b(e, t, r) {
				await c();
				const a = o() || "";
				if (t.toLowerCase() !== a.toLowerCase()) throw new Error(n.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [n.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(h), "subscribe", [t, r])
			}

			function x(e) {
				const t = a();
				return new Promise((r, a) => {
					const s = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, s],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) a(e);
						else {
							const e = t && t.result;
							e ? r(e) : a({
								message: n.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function f(e) {
				return new Promise((t, r) => {
					a().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? r("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t);
				return r.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t);
				return r.multipliedBy(a).toFixed(0)
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(o);
			const c = e => a.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "r", (function() {
				return y
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "p", (function() {
				return j
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "j", (function() {
				return k
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts");
			const s = [],
				o = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = y(e, {
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
				d = (e, t) => {
					const r = g(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = g(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = g(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : o
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				h = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				b = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				v = (e, t) => {
					const r = j(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				g = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				y = (e, t) => {
					const r = E(e, t);
					return r && r.walletProvider
				},
				w = (e, t) => {
					const r = y(e, t),
						n = E(e, t);
					return r && r.provider || n && n.provider
				},
				N = (e, t) => {
					const r = w(e, t);
					return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby
				},
				j = (e, t) => {
					const r = y(e, t),
						n = w(e, t);
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
				O = (e, {
					subredditId: t
				}) => {
					const r = y(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const r = E(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.d6811159ca449d3bc1a1.js.map