// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.a58242e57a5805951de5.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxPurchaseModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var n = a("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return s
			})), a.d(t, "e", (function() {
				return o
			})), a.d(t, "a", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "f", (function() {
				return d
			})), a.d(t, "g", (function() {
				return u
			})), a.d(t, "h", (function() {
				return m
			})), a.d(t, "i", (function() {
				return p
			})), a.d(t, "j", (function() {
				return h
			}));
			var n = a("./src/lib/makeActionCreator/index.ts"),
				r = a("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(n.a)(r.c),
				o = Object(n.a)(r.e),
				c = Object(n.a)(r.a),
				i = Object(n.a)(r.b),
				l = Object(n.a)(r.d),
				d = Object(n.a)(r.f),
				u = Object(n.a)(r.g),
				m = Object(n.a)(r.h),
				p = Object(n.a)(r.i),
				h = Object(n.a)(r.j)
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return w
			})), a.d(t, "c", (function() {
				return T
			})), a.d(t, "a", (function() {
				return k
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = a("./src/reddit/actions/tooltip.ts"),
				u = a("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([a.e("vendors~InFeedChaining~PostCreation~Reddit~StandalonePostPage~SubredditPremiumBadgeHovercardTooltip"), a.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), a.e("SubredditPremiumBadgeHovercardTooltip")]).then(a.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = a("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = a("./src/reddit/featureFlags/index.ts"),
				b = a("./src/reddit/helpers/economics/sortBadges.ts"),
				x = a("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = a("./src/reddit/models/Badge/index.ts");
			var v = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => a.e("CustomBadgeHovercardTooltip").then(a.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = a("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = a.n(g);
			const y = "add-custom-badge-tooltip",
				N = 100,
				j = 2 * N;
			class w extends r.a.Component {
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
					if (this.props.usePlaceholder && !this.props.badges.length) return r.a.createElement("img", {
						className: Object(i.a)(E.a.image, this.props.className),
						src: "".concat(c.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(y, "-").concat(this.props.uniqueIdentifier);
					return r.a.createElement(n.Fragment, null, this.props.showAddCustom && r.a.createElement("div", {
						className: E.a.wrapper,
						id: e,
						onMouseEnter: () => this.handleMouseEnter(e),
						onMouseLeave: () => this.handleMouseLeave()
					}, r.a.createElement("button", {
						className: E.a.addCustomLink,
						onClick: this.props.onOpenUploadDialog
					}, r.a.createElement(x.a, {
						className: E.a.addCustom
					})), r.a.createElement(v, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							a = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return r.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, r.a.createElement("div", {
							className: Object(i.a)(E.a.wrapper, this.props.className),
							key: "wrapper-".concat(e.id),
							onMouseEnter: () => this.handleMouseEnter(a),
							onMouseLeave: () => this.handleMouseLeave()
						}, r.a.createElement("img", {
							className: E.a.image,
							id: a,
							key: e.id,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}), this.props.useHovercard ? r.a.createElement(m, {
							badge: e,
							correlationId: this.props.correlationId,
							className: E.a.badgeHovercard,
							key: "tooltip-".concat(e.id),
							subredditId: this.props.subredditId,
							targetPosition: ["left", "bottom"],
							tooltipId: a,
							tooltipPosition: ["left", "top"],
							userId: "userId" in this.props ? this.props.userId : void 0
						}) : r.a.createElement(p.c, {
							caretOnTop: !0,
							key: "tooltip-".concat(e.id),
							tooltipId: a,
							text: e.title
						})))
					}))
				}
			}
			const O = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: a,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: h.d.spSpecialMemberships
				}),
				_ = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: a
						} = t;
						const n = e.user.account;
						if (n) {
							return ((e.users.appliedBadges[n.id] || {})[a] || []).map(t => e.badges.models[t]).filter(Boolean)
						}
						return []
					},
					useHovercard: h.d.spSpecialMemberships
				}),
				C = e => ({
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(d.i)()),
					onOpenUploadDialog: () => e(Object(l.j)())
				}),
				T = Object(s.b)(O, C)(w),
				k = Object(s.b)(_, C)(w)
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less": function(e, t, a) {
			e.exports = {
				controls: "Te3x8YuMvsyqMGk0d5I06"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less": function(e, t, a) {
			e.exports = {
				description: "_1yEF4lviPelrVHo3ESc4cN",
				title: "_3yXHaBH1sM7JXQBnZtv8Bg"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less": function(e, t, a) {
			e.exports = {
				amount: "_3gp6kQWk5XflDXs0WPDMIY",
				label: "_3GvoNq_K9RvfMIMrU4jBgi"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1hAH53-eghNAqo4f91sKHj",
				purchase: "MOHWPixENcqcUfZdpzhOF",
				title: "_17xuuuAbbykhb660vjmN-"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = a("./src/reddit/contexts/PageLayer/index.tsx"),
				d = a("./src/reddit/featureFlags/component.tsx"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/prettyPrintNumber/index.ts"),
				p = a("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				h = a("./src/reddit/components/Governance/Token/index.tsx"),
				b = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/helpers/governance/tokens.ts"),
				f = a("./src/reddit/selectors/gov.ts"),
				v = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less"),
				g = a.n(v);
			const {
				fbt: E
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(u.c)({
				cost: f.d,
				currentOwnerId: (e, t) => Object(f.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(f.e)(e, t).owner,
				tokenDisplayConversion: f.p
			});
			var N = Object(s.b)(y)((function(e) {
				const {
					className: t,
					cost: a,
					currentOwnerId: s,
					currentOwnerName: o,
					subredditId: i,
					tokenDisplayConversion: l
				} = e, d = a || "0";
				return r.a.createElement("div", {
					className: Object(c.a)(g.a.container, t)
				}, r.a.createElement("div", {
					className: g.a.owner
				}, s && r.a.createElement(n.Fragment, null, r.a.createElement("div", null, E._("Owned by", null, {
					hk: "yKSxo"
				})), r.a.createElement("div", {
					className: g.a.ownerText
				}, r.a.createElement(p.c, {
					className: g.a.ownerBadge,
					subredditId: i,
					uniqueIdentifier: "banner-purchase-modal",
					userId: s
				}), r.a.createElement("span", {
					className: g.a.username
				}, o)))), r.a.createElement("div", {
					className: g.a.purchase
				}, r.a.createElement("div", {
					className: g.a.cost
				}, r.a.createElement(h.a, {
					className: g.a.token,
					subredditId: i
				}), Object(m.a)(Object(x.b)(d, l))), r.a.createElement(b.f, {
					onClick: e.onPurchase
				}, E._("proceed to purchase", null, {
					hk: "4tin6U"
				}))))
			}));

			function j(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 32 29",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "31",
					height: "16",
					rx: "0.5",
					fill: "#5E75C6",
					"fill-opacity": "0.2",
					stroke: "#5E75C6"
				}), r.a.createElement("path", {
					d: "M14 19H18V29H14V19Z",
					fill: "#1A1A1B"
				}), r.a.createElement("rect", {
					x: "3.5",
					y: "19",
					width: "25",
					height: "1",
					fill: "#1A1A1B"
				}), r.a.createElement("circle", {
					cx: "28.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), r.a.createElement("circle", {
					cx: "3.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), r.a.createElement("circle", {
					cx: "10.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}), r.a.createElement("circle", {
					cx: "21.5",
					cy: "19.5",
					r: "1",
					fill: "white",
					stroke: "#1A1A1B"
				}))
			}

			function w(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 27 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					fill: "white"
				}), r.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					fill: "#5E75C6",
					"fill-opacity": "0.03"
				}), r.a.createElement("rect", {
					x: "0.5",
					y: "0.5",
					width: "23",
					height: "29",
					rx: "1.5",
					stroke: "#5E75C6"
				}), r.a.createElement("circle", {
					cx: "20.5",
					cy: "25.5",
					r: "6",
					fill: "white",
					stroke: "#5E75C6"
				}), r.a.createElement("circle", {
					cx: "18.5",
					cy: "23.5",
					r: "1",
					stroke: "#1A1A1B"
				}), r.a.createElement("circle", {
					cx: "22.5",
					cy: "27.5",
					r: "1",
					stroke: "#1A1A1B"
				}), r.a.createElement("path", {
					d: "M18.084 28.2227C17.9308 28.4524 17.9929 28.7628 18.2226 28.916C18.4524 29.0692 18.7628 29.0071 18.916 28.7773L18.084 28.2227ZM22.916 22.7774C23.0692 22.5476 23.0071 22.2372 22.7773 22.084C22.5476 21.9308 22.2372 21.9929 22.084 22.2226L22.916 22.7774ZM18.916 28.7773L22.916 22.7774L22.084 22.2226L18.084 28.2227L18.916 28.7773Z",
					fill: "#1A1A1B"
				}), r.a.createElement("path", {
					d: "M20 10H4.00005L4 9C4 9 8.08371 8.76179 12.5 7.5C17.1261 6.17825 20 4 20 4V10Z",
					fill: "#5E75C6"
				}), r.a.createElement("path", {
					d: "M4.5 12.5V14M4.5 15.5V14M6.5 12.5V14M6.5 15.5V14M4.5 14H6.5",
					stroke: "#1A1A1B",
					"stroke-linecap": "round"
				}), r.a.createElement("rect", {
					x: "9",
					y: "13",
					width: "10",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), r.a.createElement("rect", {
					x: "9",
					y: "15",
					width: "10",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), r.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "18",
					width: "11",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), r.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "20",
					width: "9",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}), r.a.createElement("rect", {
					opacity: "0.4",
					x: "4",
					y: "22",
					width: "8",
					height: "1",
					rx: "0.5",
					fill: "#5E75C6"
				}))
			}
			var O = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less"),
				_ = a.n(O);
			const {
				fbt: C
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const T = Object(u.c)({
				tokenName: f.q,
				details: f.b
			});
			var k = Object(s.b)(T)((function(e) {
					const {
						className: t,
						details: a,
						subredditName: n,
						tokenName: s
					} = e, o = "".concat(a.taxRate, "%");
					return r.a.createElement("div", {
						className: Object(c.a)(_.a.container, t)
					}, r.a.createElement("div", {
						className: _.a.section
					}, r.a.createElement("div", {
						className: _.a.image
					}, r.a.createElement(j, {
						className: _.a.bannerImage
					})), r.a.createElement("div", {
						className: _.a.textSection
					}, r.a.createElement("div", {
						className: _.a.title
					}, C._("Buy r/{communityName} 's Top Banner", [C._param("communityName", n)], {
						hk: "2hXSyn"
					})), r.a.createElement("div", {
						className: _.a.text
					}, C._("Set the image to whatever you want", null, {
						hk: "45iv1p"
					})))), r.a.createElement("div", {
						className: _.a.section
					}, r.a.createElement("div", {
						className: _.a.image
					}, r.a.createElement(w, {
						className: _.a.taxImage
					})), r.a.createElement("div", {
						className: _.a.textSection
					}, r.a.createElement("div", {
						className: _.a.title
					}, C._("Harberger Tax", null, {
						hk: "1RH5bF"
					})), r.a.createElement("ul", {
						className: _.a.text
					}, r.a.createElement("li", null, C._("The owner sets the price for the banner", null, {
						hk: "1EnVw2"
					})), r.a.createElement("li", null, C._("They pay a daily tax of {tax} by burning {token}", [C._param("tax", o), C._param("token", s)], {
						hk: "2qEsqE"
					})), r.a.createElement("li", null, C._("If the owner cannot pay the tax, the price goes to 0", null, {
						hk: "X4H8x"
					})), r.a.createElement("li", null, C._("Anyone can buy the banner at its advertised price", null, {
						hk: "2k3KWy"
					})), r.a.createElement("li", null, C._("The owner cannot refuse to sell it at that price", null, {
						hk: "zeQCk"
					}))))))
				})),
				I = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less"),
				P = a.n(I);

			function M(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(P.a.container, e.className)
				}, r.a.createElement(k, {
					subredditId: e.subreddit.id,
					subredditName: e.subreddit.name
				}), r.a.createElement(N, {
					className: P.a.controls,
					subredditId: e.subreddit.id,
					onPurchase: e.onPurchase
				}))
			}
			var B = a("./node_modules/bignumber.js/bignumber.js"),
				S = a("./src/lib/currency/cleanNumber/index.ts"),
				A = a("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				H = a("./src/reddit/actions/toaster.ts"),
				D = a("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				F = a("./src/reddit/controls/FormFields/index.tsx"),
				G = a("./src/reddit/helpers/governance/ethereum.ts"),
				V = a("./src/reddit/models/Toast/index.ts"),
				L = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less"),
				W = a.n(L);

			function R(e) {
				return r.a.createElement("article", {
					className: Object(c.a)(e.className, W.a.container)
				}, r.a.createElement("div", {
					className: W.a.title
				}, e.title), r.a.createElement("div", {
					className: W.a.description
				}, e.description), e.children)
			}
			var U = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less"),
				q = a.n(U),
				X = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less"),
				Y = a.n(X);

			function Z(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(Y.a.container, e.className)
				}, r.a.createElement("div", {
					className: Y.a.label
				}, e.label), r.a.createElement("div", {
					className: Y.a.amount
				}, Object(m.a)(Object(x.b)(e.amount, e.tokenDisplayConversion))))
			}
			var J = a("./node_modules/fbt/lib/FbtPublic.js");
			class z extends r.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => {
						this.setState({
							price: Object(x.a)(Object(S.a)(e || "0"), this.props.tokenDisplayConversion)
						})
					}, this.handlePrepayChange = e => this.setState({
						prepayDays: Object(S.a)(e)
					}), this.handlePurchase = async () => {
						const {
							cost: e,
							details: t,
							unlockedToken: a
						} = this.props, {
							price: n,
							prepayDays: r
						} = this.state, s = a && a.address, o = t.address;
						if (!s || !o) return this.props.onError();
						const c = new B.BigNumber(n).multipliedBy(t.taxRate / 100).multipliedBy(parseInt(r));
						try {
							await Object(G.f)(s, o, e || "0", n, c.toFixed(0)), this.props.onPurchaseComplete()
						} catch (i) {
							return this.props.onError(i.message)
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
						currentOwnerId: a,
						currentOwnerName: n,
						details: s,
						subredditId: o,
						tokenDisplayConversion: i
					} = this.props, l = t || "0", d = this.state.price || "0", u = parseInt(d) * (s.taxRate / 100), f = u * parseInt(this.state.prepayDays), v = parseInt(l) + f, g = "".concat(s.taxRate, "%");
					return r.a.createElement("div", {
						className: Object(c.a)(q.a.container, e)
					}, r.a.createElement(R, {
						className: q.a.section,
						description: J.fbt._("You must pay this amount to the current owner to buy the banner.", null, {
							hk: "36sgxo"
						}),
						title: J.fbt._("Current price", null, {
							hk: "EklEv"
						})
					}, r.a.createElement("div", {
						className: q.a.currentPrice
					}, r.a.createElement(D.a, {
						amount: l,
						subredditId: o
					}), a && r.a.createElement("div", {
						className: q.a.owner
					}, J.fbt._("Owned by", null, {
						hk: "JDQVM"
					}), " ", r.a.createElement(p.c, {
						className: q.a.ownerBadge,
						subredditId: o,
						uniqueIdentifier: "banner-purchase-modal",
						userId: a
					}), r.a.createElement("span", {
						className: q.a.username
					}, n)))), r.a.createElement(R, {
						className: q.a.section,
						description: J.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. You can also lower the price to lower the tax.", null, {
							hk: "20EBr1"
						}),
						title: J.fbt._("New price and tax", null, {
							hk: "291U7z"
						})
					}, r.a.createElement("div", {
						className: q.a.price
					}, r.a.createElement(F.c, {
						redditStyle: !0,
						className: q.a.priceInput,
						label: J.fbt._("new price", null, {
							hk: "3eEJKs"
						}),
						placeholder: "0",
						type: "text",
						value: Object(m.a)(Object(x.b)(this.state.price, i)),
						onChange: e => this.handlePriceChange(e.currentTarget.value)
					}), r.a.createElement(h.a, {
						className: q.a.priceToken,
						subredditId: o
					}), r.a.createElement("div", {
						className: q.a.equals
					}, "="), r.a.createElement(Z, {
						amount: u.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("{tax} daily tax", [J.fbt._param("tax", g)], {
							hk: "1kg5ZE"
						}),
						tokenDisplayConversion: i
					}))), r.a.createElement(R, {
						className: q.a.section,
						description: J.fbt._("You must deposit money to pay the daily tax. You can top this up at any time. If the balance goes to zero, the price of the banner drops to zero. If someone else buys the banner, you will be refunded any pre-paid tax you allocated.", null, {
							hk: "3rkkNS"
						}),
						title: J.fbt._("Initial balance", null, {
							hk: "3xz0g9"
						})
					}, r.a.createElement("div", {
						className: q.a.prePay
					}, r.a.createElement(F.c, {
						redditStyle: !0,
						className: q.a.prepayInput,
						label: J.fbt._("# of days to prepay", null, {
							hk: "12YpX6"
						}),
						placeholder: "0",
						type: "text",
						value: Object(m.a)(this.state.prepayDays),
						onChange: e => this.handlePrepayChange(e.currentTarget.value)
					}), r.a.createElement("div", {
						className: q.a.times
					}, "X"), r.a.createElement(Z, {
						amount: u.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("daily tax", null, {
							hk: "18BBD8"
						}),
						tokenDisplayConversion: i
					}), r.a.createElement("div", {
						className: q.a.equals
					}, "="), r.a.createElement(D.a, {
						className: q.a.prepayTotal,
						amount: f.toFixed(2),
						subredditId: o
					}))), r.a.createElement("footer", {
						className: q.a.footer
					}, r.a.createElement("div", null, r.a.createElement("div", {
						className: q.a.total
					}, J.fbt._("Total due", null, {
						hk: "1MTLwA"
					})), r.a.createElement(D.a, {
						amount: v.toFixed(2),
						subredditId: o
					})), r.a.createElement(b.f, {
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
				unlockedToken: f.s,
				tokenDisplayConversion: f.p
			});
			var K = Object(s.b)(Q, e => ({
					onError: t => e(Object(H.e)({
						duration: 5e3,
						kind: V.b.Error,
						text: t || J.fbt._("Something wen't wrong with the purchase. Please try again later.", null, {
							hk: "18lJda"
						})
					})),
					onPurchaseComplete: () => e(Object(A.a)())
				}))(z),
				$ = a("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less"),
				ee = a.n($);
			const {
				fbt: te
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var ae;
			! function(e) {
				e[e.Info = 0] = "Info", e[e.Purchase = 1] = "Purchase"
			}(ae || (ae = {}));
			class ne extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						display: ae.Info
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? r.a.createElement("div", {
						className: Object(c.a)(ee.a.container, e)
					}, r.a.createElement(i.a, {
						className: ee.a.title
					}, te._("Buy Banner", null, {
						hk: "PL5xv"
					})), this.state.display === ae.Info && r.a.createElement(M, {
						subreddit: t,
						onPurchase: () => this.setState({
							display: ae.Purchase
						})
					}), this.state.display === ae.Purchase && r.a.createElement(K, {
						className: ee.a.purchase,
						subredditId: t.id
					})) : null
				}
			}
			const re = Object(u.c)({
					subreddit: l.q
				}),
				se = Object(s.b)(re),
				oe = Object(l.t)();
			t.default = Object(d.a)("spHarberger", Object(o.a)(oe(se(ne))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/modal.ts"),
				i = a("./src/reddit/icons/svgs/Close/index.tsx"),
				l = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = a.n(l);
			t.a = Object(s.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(c.f)()), a && a()
					}
				}
			})((function(e) {
				return r.a.createElement(i.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = a("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = a.n(c);

			function l(e) {
				return r.a.createElement("div", {
					className: Object(s.a)(i.a.container, e.className, {
						[i.a.coloredContainer]: e.colored
					})
				}, r.a.createElement("div", {
					className: i.a.title
				}, e.children), r.a.createElement(o.a, {
					className: i.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/selectors/gov.ts"),
				d = a("./src/reddit/components/Governance/Token/index.m.less"),
				u = a.n(d);
			const m = Object(o.c)({
				tokenSymbol: l.r
			});
			t.a = Object(s.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return r.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/prettyPrintNumber/index.ts"),
				l = a("./src/reddit/components/Governance/Token/index.tsx"),
				d = a("./src/reddit/helpers/governance/tokens.ts"),
				u = a("./src/reddit/selectors/gov.ts"),
				m = a("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = a.n(m);
			const h = Object(o.c)({
				tokenDisplayConversion: u.p
			});
			t.a = Object(s.b)(h)((function(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, r.a.createElement(l.a, {
					className: Object(c.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(i.a)(Object(d.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return _
			})), a.d(t, "c", (function() {
				return C
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/lodash/uniqueId.js"),
				s = a.n(r),
				o = a("./node_modules/raf/index.js"),
				c = a.n(o),
				i = a("./node_modules/react/index.js"),
				l = a.n(i),
				d = a("./node_modules/react-redux/es/index.js"),
				u = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/layout/row/Inline/index.tsx"),
				v = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				g = a.n(v);
			var E = Object(b.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return l.a.createElement("div", {
						className: g.a.wrapper
					}, l.a.createElement(f.a, {
						className: g.a.titleRow
					}, a), l.a.createElement("div", {
						className: g.a.detailsContainer
					}, t), l.a.createElement(f.a, {
						className: g.a.buttonRow
					}, l.a.createElement(x.f, {
						className: g.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = a("./src/reddit/controls/ErrorText/index.m.less"),
				N = a.n(y);
			const j = Object(u.c)({
				activeModalId: h.a
			});
			class w extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(s()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
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
						className: a,
						errorModalBody: r,
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(m.a)(N.a.wrapper, a)
					}, l.a.createElement("span", {
						className: N.a.description,
						ref: this.spanRef
					}, e), i && l.a.createElement("span", {
						className: N.a.moreText,
						onClick: this.toggleModal
					}, o), t === c && l.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: s
					}, r || e))
				}
			}
			const O = Object(d.b)(j, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(w),
				_ = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: r,
						messages: s = []
					} = e, o = s.length ? s : r ? [r] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(O, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				C = e => l.a.createElement(_, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return x
			})), a.d(t, "c", (function() {
				return f
			})), a.d(t, "d", (function() {
				return E
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				c = a("./src/reddit/controls/ErrorText/index.tsx"),
				i = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				u = a.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
				}
				return a
			};
			const h = o.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: o
					} = e, c = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, c)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						isInvalid: o,
						className: c,
						redditStyle: i
					} = e, l = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, c, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: i
						}),
						onClick: b
					}, r.a.createElement(h, m({
						innerRef: n
					}, l)), e.label && r.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				v = e => r.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class E extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
							value: a,
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
						label: a,
						placeholder: n,
						errors: s = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(x, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(l.b, {
						className: u.a.trash
					})), !!s[o] && r.a.createElement(c.b, {
						className: u.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: o,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && a.length >= n) && !c;
					return r.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && i && r.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && r.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var a = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (a[n[r]] = e[n[r]])
					}
					return a
				};

			function l(e, t, a) {
				const n = Object(o.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(s.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, s = i(e, ["featureEnabled"]);
					return n ? r.a.createElement(t, s) : void 0 !== a ? r.a.createElement(a, s) : null
				})
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, a) {
			"use strict";
			a.d(t, "e", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "d", (function() {
				return c
			})), a.d(t, "b", (function() {
				return i
			})), a.d(t, "a", (function() {
				return l
			})), a.d(t, "f", (function() {
				return p
			})), a.d(t, "g", (function() {
				return b
			})), a.d(t, "h", (function() {
				return x
			})), a.d(t, "i", (function() {
				return f
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js");

			function r() {
				return window.ethereum
			}

			function s() {
				const e = r();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = r();
				return e && e.selectedAddress || null
			}

			function c() {
				return r().networkVersion || null
			}

			function i() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const l = 4001;
			async function d(e, t, n, s) {
				const [o, c] = await Promise.all([a.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(a.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await i();
				const l = new o.providers.Web3Provider(r()).getSigner(),
					d = new o.Contract(e, c, l),
					u = await d[n](...s);
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
			async function p(e, t, n, r, s) {
				const o = await a.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(a.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: c,
						hexlify: i,
						hexZeroPad: l,
						toUtf8Bytes: p
					} = o.utils,
					h = c(n).add(s),
					b = m,
					x = "0x" + [i(1)].concat([b, c(r), c(s)].map(i).map(e => l(e, 32))).concat(i(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, a, n) {
					return d(e, Promise.resolve(u), "send", [t, a, n])
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
			async function b(e, t, a) {
				await i();
				const r = o() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(n.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [n.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(h), "subscribe", [t, a])
			}

			function x(e) {
				const t = r();
				return new Promise((a, r) => {
					const s = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, s],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) r(e);
						else {
							const e = t && t.result;
							e ? a(e) : r({
								message: n.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function f(e) {
				return new Promise((t, a) => {
					r().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, n) => {
						e || "error" in n ? a("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return c
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return a.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const a = new n.BigNumber(e),
					r = new n.BigNumber(t);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/AddSquare/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function s(e) {
				return r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("rect", {
					fill: "transparent",
					height: "18",
					rx: "4.5",
					strokeDasharray: "2 2",
					strokeLinejoin: "round",
					strokeWidth: "1",
					width: "18",
					x: "1",
					y: "1"
				}), r.a.createElement("path", {
					clipRule: "evenodd",
					d: "M13 9H11V7C11 6.7235 10.7765 6.5 10.5 6.5H9.5C9.2235 6.5 9 6.7235 9 7V9H7C6.724 9 6.5 9.2235 6.5 9.5V10.5C6.5 10.7765 6.724 11 7 11H9V13C9 13.2765 9.2235 13.5 9.5 13.5H10.5C10.7765 13.5 11 13.2765 11 13V11H13C13.2765 11 13.5 10.7765 13.5 10.5V9.5C13.5 9.2235 13.2765 9 13 9Z",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = a.n(o);
			const i = e => r.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.a58242e57a5805951de5.js.map