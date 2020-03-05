// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.675b1f6d3046afb40ef4.js
// Retrieved at 3/5/2020, 3:00:07 PM by Reddit Dataminer v1.0.0
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
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
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
				return h
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(n.a)(a.c),
				o = Object(n.a)(a.e),
				c = Object(n.a)(a.a),
				i = Object(n.a)(a.b),
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
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), r.e("SubredditPremiumBadgeHovercardTooltip")]).then(r.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
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
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return P
			}));
			const y = "add-custom-badge-tooltip",
				j = 100,
				w = 2 * j;
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, j)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, w)
					}
				}
				render() {
					if (this.props.usePlaceholder && !this.props.badges.length) return a.a.createElement("img", {
						className: Object(i.a)(E.a.image, this.props.className),
						src: "".concat(c.a.assetPath, "/img/badges/placeholder.png")
					});
					const e = "".concat(y, "-").concat(this.props.uniqueIdentifier);
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
					})), a.a.createElement(v, {
						className: E.a.badgeHovercard,
						subredditId: this.props.subredditId,
						targetPosition: ["left", "bottom"],
						tooltipId: e,
						tooltipPosition: ["left", "top"],
						onHideTooltip: () => this.props.onHideTooltip()
					})), Object(b.a)(this.props.badges).map(e => {
						const t = Object(f.b)(24, 24, e),
							r = "badges-display-".concat(e.id, "-").concat(this.props.uniqueIdentifier);
						return a.a.createElement(n.Fragment, {
							key: "badges-fragement-".concat(e.id)
						}, a.a.createElement("div", {
							className: Object(i.a)(E.a.wrapper, this.props.className),
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
			const N = Object(o.c)({
					badges: (e, t) => {
						let {
							subredditId: r,
							userId: n
						} = t;
						return ((e.users.appliedBadges[n] || {})[r] || []).map(t => e.badges.models[t]).filter(Boolean)
					},
					useHovercard: h.d.spPremium
				}),
				C = Object(o.c)({
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
					useHovercard: h.d.spPremium
				}),
				I = e => ({
					onShowTooltip: t => e(Object(l.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(l.i)()),
					onOpenUploadDialog: () => e(Object(d.i)())
				}),
				T = Object(s.b)(N, I)(O),
				P = Object(s.b)(C, I)(O)
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less": function(e, t, r) {
			e.exports = {
				flexRow: "a7j9hqSS-gQka3fEtYNMe",
				container: "_1fFS9Nru2uTP9R4EHoPmx-",
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
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/featureFlags/component.tsx"),
				m = r("./src/reddit/i18n/components.tsx"),
				p = r("./src/lib/prettyPrintNumber/index.ts"),
				h = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				b = r("./src/reddit/components/Governance/Token/index.tsx"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/helpers/governance/tokens.ts"),
				v = r("./src/reddit/selectors/gov.ts"),
				g = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less"),
				E = r.n(g);
			const y = Object(o.c)({
				cost: v.d,
				currentOwnerId: (e, t) => Object(v.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(v.e)(e, t).owner,
				tokenDisplayConversion: v.n
			});
			var j = Object(s.b)(y)((function(e) {
					const {
						className: t,
						cost: r,
						currentOwnerId: s,
						currentOwnerName: o,
						subredditId: c,
						tokenDisplayConversion: d
					} = e, l = r || "0";
					return a.a.createElement("div", {
						className: Object(i.a)(E.a.container, t)
					}, a.a.createElement("div", {
						className: E.a.owner
					}, s && a.a.createElement(n.Fragment, null, a.a.createElement("div", null, a.a.createElement(m.c, null, "Owned by")), a.a.createElement("div", {
						className: E.a.ownerText
					}, a.a.createElement(h.c, {
						className: E.a.ownerBadge,
						subredditId: c,
						uniqueIdentifier: "banner-purchase-modal",
						userId: s
					}), a.a.createElement("span", {
						className: E.a.username
					}, o)))), a.a.createElement("div", {
						className: E.a.purchase
					}, a.a.createElement("div", {
						className: E.a.cost
					}, a.a.createElement(b.a, {
						className: E.a.token,
						subredditId: c
					}), Object(p.a)(Object(f.b)(l, d))), a.a.createElement(x.f, {
						onClick: e.onPurchase
					}, a.a.createElement(m.c, null, "proceed to purchase"))))
				})),
				w = function(e) {
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
				O = function(e) {
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
				N = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less"),
				C = r.n(N);
			const I = Object(o.c)({
				tokenName: v.o,
				details: v.b
			});
			var T = Object(s.b)(I)((function(e) {
					const {
						className: t,
						details: r,
						subredditName: n,
						tokenName: s
					} = e, o = "".concat(r.taxRate, "%");
					return a.a.createElement("div", {
						className: Object(i.a)(C.a.container, t)
					}, a.a.createElement("div", {
						className: C.a.section
					}, a.a.createElement("div", {
						className: C.a.image
					}, a.a.createElement(w, {
						className: C.a.bannerImage
					})), a.a.createElement("div", {
						className: C.a.textSection
					}, a.a.createElement("div", {
						className: C.a.title
					}, a.a.createElement(m.c, null, "Buy r/", a.a.createElement(m.b, {
						name: "communityName"
					}, n), "'s Top Banner")), a.a.createElement("div", {
						className: C.a.text
					}, a.a.createElement(m.c, null, "Set the image to whatever you want")))), a.a.createElement("div", {
						className: C.a.section
					}, a.a.createElement("div", {
						className: C.a.image
					}, a.a.createElement(O, {
						className: C.a.taxImage
					})), a.a.createElement("div", {
						className: C.a.textSection
					}, a.a.createElement("div", {
						className: C.a.title
					}, a.a.createElement(m.c, null, "Harberger Tax")), a.a.createElement("ul", {
						className: C.a.text
					}, a.a.createElement("li", null, a.a.createElement(m.c, null, "The owner sets the price for the banner")), a.a.createElement("li", null, "They pay a daily tax of ", a.a.createElement(m.b, {
						name: "tax"
					}, o), " by burning ", a.a.createElement(m.b, {
						name: "token"
					}, s)), a.a.createElement("li", null, a.a.createElement(m.c, null, "If the owner cannot pay the tax, the price goes to 0")), a.a.createElement("li", null, a.a.createElement(m.c, null, "Anyone can buy the banner at its advertised price")), a.a.createElement("li", null, a.a.createElement(m.c, null, "The owner cannot refuse to sell it at that price"))))))
				})),
				P = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less"),
				_ = r.n(P);

			function k(e) {
				return a.a.createElement("div", {
					className: Object(i.a)(_.a.container, e.className)
				}, a.a.createElement(T, {
					subredditId: e.subreddit.id,
					subredditName: e.subreddit.name
				}), a.a.createElement(j, {
					className: _.a.controls,
					subredditId: e.subreddit.id,
					onPurchase: e.onPurchase
				}))
			}
			var M = r("./node_modules/bignumber.js/bignumber.js"),
				B = r("./src/lib/currency/cleanNumber/index.ts"),
				S = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				H = r("./src/reddit/actions/toaster.ts"),
				A = r("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				D = r("./src/reddit/controls/FormFields/index.tsx"),
				G = r("./src/reddit/helpers/governance/ethereum.ts"),
				L = r("./src/reddit/i18n/utils.ts"),
				R = r("./src/reddit/models/Toast/index.ts"),
				F = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less"),
				V = r.n(F);

			function W(e) {
				return a.a.createElement("article", {
					className: Object(i.a)(e.className, V.a.container)
				}, a.a.createElement("div", {
					className: V.a.title
				}, e.title), a.a.createElement("div", {
					className: V.a.description
				}, e.description), e.children)
			}
			var U = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less"),
				q = r.n(U);

			function X(e) {
				return a.a.createElement("div", {
					className: Object(i.a)(q.a.container, e.className)
				}, a.a.createElement("div", {
					className: q.a.label
				}, e.label), a.a.createElement("div", {
					className: q.a.amount
				}, Object(p.a)(Object(f.b)(e.amount, e.tokenDisplayConversion))))
			}
			var Y = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less"),
				Z = r.n(Y);
			class J extends a.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => {
						this.setState({
							price: Object(f.a)(Object(B.a)(e || "0"), this.props.tokenDisplayConversion)
						})
					}, this.handlePrepayChange = e => this.setState({
						prepayDays: Object(B.a)(e)
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
						const c = new M.BigNumber(n).multipliedBy(t.taxRate / 100).multipliedBy(parseInt(a));
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
						currentOwnerId: r,
						currentOwnerName: n,
						details: s,
						subredditId: o,
						tokenDisplayConversion: c
					} = this.props, d = t || "0", l = this.state.price || "0", u = parseInt(l) * (s.taxRate / 100), m = u * parseInt(this.state.prepayDays), v = parseInt(d) + m, g = "".concat(s.taxRate, "%");
					return a.a.createElement("div", {
						className: Object(i.a)(Z.a.container, e)
					}, a.a.createElement(W, {
						className: Z.a.section,
						description: Object(L.c)("You must pay this amount to the current owner to buy the banner."),
						title: Object(L.c)("Current price")
					}, a.a.createElement("div", {
						className: Z.a.currentPrice
					}, a.a.createElement(A.a, {
						amount: d,
						subredditId: o
					}), r && a.a.createElement("div", {
						className: Z.a.owner
					}, Object(L.c)("Owned by"), " ", a.a.createElement(h.c, {
						className: Z.a.ownerBadge,
						subredditId: o,
						uniqueIdentifier: "banner-purchase-modal",
						userId: r
					}), a.a.createElement("span", {
						className: Z.a.username
					}, n)))), a.a.createElement(W, {
						className: Z.a.section,
						description: Object(L.c)("\n            You can protect your ownership by raising the price.\n            This also increases the daily tax. You can also lower the price to\n            lower the tax.\n          "),
						title: Object(L.c)("New price and tax")
					}, a.a.createElement("div", {
						className: Z.a.price
					}, a.a.createElement(D.c, {
						redditStyle: !0,
						className: Z.a.priceInput,
						label: Object(L.c)("new price"),
						placeholder: "0",
						type: "text",
						value: Object(p.a)(Object(f.b)(this.state.price, c)),
						onChange: e => this.handlePriceChange(e.currentTarget.value)
					}), a.a.createElement(b.a, {
						className: Z.a.priceToken,
						subredditId: o
					}), a.a.createElement("div", {
						className: Z.a.equals
					}, "="), a.a.createElement(X, {
						amount: u.toFixed(2),
						className: Z.a.tax,
						label: Object(L.c)("".concat(Object(L.b)("tax", g), " daily tax")),
						tokenDisplayConversion: c
					}))), a.a.createElement(W, {
						className: Z.a.section,
						description: Object(L.c)("\n            You must deposit money to pay the daily tax. You can top this up\n            at any time. If the balance goes to zero, the price of the banner\n            drops to zero. If someone else buys the banner, you will be\n            refunded any pre-paid tax you allocated.\n          "),
						title: Object(L.c)("Initial balance")
					}, a.a.createElement("div", {
						className: Z.a.prePay
					}, a.a.createElement(D.c, {
						redditStyle: !0,
						className: Z.a.prepayInput,
						label: Object(L.c)("# of days to prepay"),
						placeholder: "0",
						type: "text",
						value: Object(p.a)(this.state.prepayDays),
						onChange: e => this.handlePrepayChange(e.currentTarget.value)
					}), a.a.createElement("div", {
						className: Z.a.times
					}, "X"), a.a.createElement(X, {
						amount: u.toFixed(2),
						className: Z.a.tax,
						label: Object(L.c)("daily tax"),
						tokenDisplayConversion: c
					}), a.a.createElement("div", {
						className: Z.a.equals
					}, "="), a.a.createElement(A.a, {
						className: Z.a.prepayTotal,
						amount: m.toFixed(2),
						subredditId: o
					}))), a.a.createElement("footer", {
						className: Z.a.footer
					}, a.a.createElement("div", null, a.a.createElement("div", {
						className: Z.a.total
					}, Object(L.c)("Total due")), a.a.createElement(A.a, {
						amount: v.toFixed(2),
						subredditId: o
					})), a.a.createElement(x.f, {
						disabled: !s.address,
						onClick: this.handlePurchase
					}, Object(L.c)("buy"))))
				}
			}
			const z = Object(o.c)({
				cost: v.d,
				currentOwnerId: (e, t) => Object(v.e)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(v.e)(e, t).owner,
				details: v.b,
				unlockedToken: v.q,
				tokenDisplayConversion: v.n
			});
			var Q, K = Object(s.b)(z, e => ({
					onError: t => e(Object(H.e)({
						duration: 5e3,
						kind: R.b.Error,
						text: t || Object(L.c)("Something wen't wrong with the purchase. Please try again later.")
					})),
					onPurchaseComplete: () => e(Object(S.a)())
				}))(J),
				$ = r("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less"),
				ee = r.n($);
			! function(e) {
				e[e.Info = 0] = "Info", e[e.Purchase = 1] = "Purchase"
			}(Q || (Q = {}));
			class te extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						display: Q.Info
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? a.a.createElement("div", {
						className: Object(i.a)(ee.a.container, e)
					}, a.a.createElement(d.a, {
						className: ee.a.title
					}, a.a.createElement(m.c, null, "Buy Banner")), this.state.display === Q.Info && a.a.createElement(k, {
						subreddit: t,
						onPurchase: () => this.setState({
							display: Q.Purchase
						})
					}), this.state.display === Q.Purchase && a.a.createElement(K, {
						className: ee.a.purchase,
						subredditId: t.id
					})) : null
				}
			}
			const re = Object(o.c)({
					subreddit: l.q
				}),
				ne = Object(s.b)(re),
				ae = Object(l.t)();
			t.default = Object(u.a)("spHarberger", Object(c.a)(ae(ne(te))))
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
				i = r("./src/reddit/icons/svgs/Close/index.tsx"),
				d = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(d);
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
				return a.a.createElement(i.a, {
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = r.n(c);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(s.a)(i.a.container, e.className)
				}, a.a.createElement("div", {
					className: i.a.title
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
				i = r("./src/reddit/selectors/gov.ts");
			const d = Object(o.c)({
				tokenSymbol: i.p
			});
			t.a = Object(s.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return a.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/Governance/Token/index.tsx"),
				l = r("./src/reddit/helpers/governance/tokens.ts"),
				u = r("./src/reddit/selectors/gov.ts"),
				m = r("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = r.n(m);
			const h = Object(o.c)({
				tokenDisplayConversion: u.n
			});
			t.a = Object(s.b)(h)((function(e) {
				return a.a.createElement("div", {
					className: Object(c.a)(p.a.container, e.className)
				}, a.a.createElement(d.a, {
					className: p.a.token,
					subredditId: e.subredditId
				}), Object(i.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
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
			var n = r("./node_modules/lodash/uniqueId.js"),
				a = r.n(n),
				s = r("./node_modules/raf/index.js"),
				o = r.n(s),
				c = r("./node_modules/react/index.js"),
				i = r.n(c),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/i18n/utils.ts"),
				h = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/higherOrderComponents/asModal/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/layout/row/Inline/index.tsx"),
				g = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				E = r.n(g);
			var y = Object(x.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return i.a.createElement("div", {
						className: E.a.wrapper
					}, i.a.createElement(v.a, {
						className: E.a.titleRow
					}, r), i.a.createElement("div", {
						className: E.a.detailsContainer
					}, t), i.a.createElement(v.a, {
						className: E.a.buttonRow
					}, i.a.createElement(f.f, {
						className: E.a.confirmButton,
						onClick: e.onConfirmed
					}, b.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				j = r("./src/reddit/controls/ErrorText/index.m.less"),
				w = r.n(j);
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "c", (function() {
				return T
			}));
			const O = Object(l.c)({
				activeModalId: h.a
			});
			class N extends i.a.Component {
				constructor(e) {
					super(e), this.spanRef = i.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(a()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					o()(() => {
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
						errorModalBody: n,
						errorModalTitle: a = Object(p.c)("Error"),
						moreText: s = Object(p.c)("More")
					} = this.props, {
						modalId: o,
						textHasOverflowed: c
					} = this.state;
					return i.a.createElement("div", {
						className: Object(u.a)(w.a.wrapper, r)
					}, i.a.createElement("span", {
						className: w.a.description,
						ref: this.spanRef
					}, e), c && i.a.createElement("span", {
						className: w.a.moreText,
						onClick: this.toggleModal
					}, s), t === o && i.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const C = Object(d.b)(O, e => ({
					toggleErrorTextModal: t => e(Object(m.i)(t))
				}))(N),
				I = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? i.a.createElement("div", {
						className: t
					}, o.map((e, t) => i.a.createElement(C, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				T = e => i.a.createElement(I, {
					fallbackMessage: Object(p.c)("Something went wrong"),
					messages: e
				});
			t.b = C
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
				return h
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "d", (function() {
				return E
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				c = r("./src/reddit/controls/ErrorText/index.tsx"),
				i = r("./src/reddit/icons/svgs/Plus/index.tsx"),
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
			var p = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
				}
				return r
			};
			const h = o.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o
					} = e, c = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputWrapper, o, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, a.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, c)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: r,
						inputRef: n,
						className: o,
						redditStyle: c
					} = e, i = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, a.a.createElement(h, m({
						innerRef: n
					}, i)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				v = e => a.a.createElement("div", {
					className: Object(s.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const r = this.props.values.slice();
						r[t] = e.target.value, this.props.onChange(r)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							r = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
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
					return e.map((e, o) => a.a.createElement(x, {
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
					})), !!s[o] && a.a.createElement(c.b, {
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
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && r.length >= n) && !c;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.multiInputWrapper, e)
					}, t && i && a.a.createElement(v, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && i && a.a.createElement(v, {
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
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
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
			async function i(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function d(e, t, r) {
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
				return d
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var a = 0;
						for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
					}
					return r
				};

			function d(e, t, r) {
				const n = Object(o.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(s.b)(n)(e => {
					const {
						featureEnabled: n,
						dispatch: s
					} = e, o = i(e, ["featureEnabled", "dispatch"]);
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
				return c
			})), r.d(t, "b", (function() {
				return i
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
			r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/i18n/utils.ts");

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

			function c() {
				return a().networkVersion || null
			}

			function i() {
				const e = a();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, n, s) {
				const [o, c] = await Promise.all([r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await i();
				const d = new o.providers.Web3Provider(a()).getSigner(),
					l = new o.Contract(e, c, d),
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
				const o = await r.e("vendors~CryptoLibEthers").then(r.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: c,
						hexlify: i,
						hexZeroPad: d,
						toUtf8Bytes: p
					} = o.utils,
					h = c(n).add(s),
					b = m,
					x = "0x" + [i(1)].concat([b, c(a), c(s)].map(i).map(e => d(e, 32))).concat(i(p(""))).map(e => e.substr(2)).join("");
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
				await i();
				const a = o() || "";
				if (t.toLowerCase() !== a.toLowerCase()) throw new Error(Object(n.c)("Please select your registered address in MetaMask: ") + t);
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
								message: Object(n.c)("No signature returned from ethereum provider.")
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
				return c
			}));
			r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t);
				return r.dividedBy(a).decimalPlaces(2).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
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
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/platform.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const c = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => c.has(e.toLowerCase()) || i.has(e.toLowerCase()),
				l = e => c.has((Object(s.e)(e) || "").toLowerCase()) || i.has((Object(s.e)(e) || "").toLowerCase()) && Object(a.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: n.bb
				}) === n.ib.Enabled
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
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "n", (function() {
				return y
			})), r.d(t, "k", (function() {
				return j
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "s", (function() {
				return O
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "f", (function() {
				return C
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "r", (function() {
				return P
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = r("./src/reddit/selectors/postCreations.ts");
			const i = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
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
					const r = j(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = j(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				h = (e, t) => {
					const r = j(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : d
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				x = (e, t) => {
					if (Object(o.b)(e)) {
						const t = Object(c.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const r = s.d.spPolls(e) || s.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || i
				},
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				y = (e, t) => {
					const r = I(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				w = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				O = (e, t) => {
					const r = w(e, t);
					return r && r.walletProvider
				},
				N = (e, t) => {
					const r = O(e, t),
						n = w(e, t);
					return r && r.provider || n && n.provider
				},
				C = (e, t) => {
					const r = N(e, t);
					return r === a.a.Ethereum || r === a.a.Rinkeby
				},
				I = (e, t) => {
					const r = O(e, t),
						n = N(e, t);
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
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = O(e, {
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
//# sourceMappingURL=CryptoHarbergerTaxPurchaseModal.675b1f6d3046afb40ef4.js.map