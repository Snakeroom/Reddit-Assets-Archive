// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.24fca0b55f8f17371e00.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxPurchaseModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return r(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return x
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(o.a),
				c = Object(r.a)(o.b),
				l = Object(r.a)(o.c),
				d = Object(r.a)(o.d),
				u = Object(r.a)(o.e),
				m = Object(r.a)(o.f),
				p = Object(r.a)(o.g),
				h = Object(r.a)(o.h),
				b = Object(r.a)(o.i),
				x = e => Object(a.h)(s.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return h
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/harbergerTax/constants.ts");
			const s = Object(r.a)(a.c),
				o = Object(r.a)(a.e),
				i = Object(r.a)(a.a),
				c = Object(r.a)(a.b),
				l = Object(r.a)(a.d),
				d = Object(r.a)(a.f),
				u = Object(r.a)(a.g),
				m = Object(r.a)(a.h),
				p = Object(r.a)(a.i),
				h = Object(r.a)(a.j)
		},
		"./src/reddit/components/Badges/UserDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				addCustom: "LalRrQILNjt65y-p-QlWH",
				addCustomLink: "_3J2-xIxxxP9ISzeLWCOUVc",
				badgeHovercard: "FyLpt0kIWG1bTDWZ8HIL1",
				image: "_2ntJEAiwKXBGvxrJiqxx_2",
				wrapper: "_1SqBC7PQ5dMOdF0MhPIkA8"
			}
		},
		"./src/reddit/components/Badges/UserDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "a", (function() {
				return B
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/higherOrderComponents/makeAsync.tsx");
			var m = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("SubredditPremiumBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx")).then(e => e.default)
				}),
				p = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/featureFlags/index.ts"),
				b = n("./src/reddit/helpers/economics/sortBadges.ts"),
				x = n("./src/reddit/icons/svgs/AddSquare/index.tsx"),
				f = n("./src/reddit/models/Badge/index.ts");
			var v = Object(u.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("CustomBadgeHovercardTooltip").then(n.bind(null, "./src/reddit/components/Badges/UserDisplay/AddCustomTooltip/tooltip.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/Badges/UserDisplay/index.m.less"),
				E = n.n(g);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = "add-custom-badge-tooltip",
				O = 100,
				w = 2 * O,
				j = 24;
			class _ extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseOverTooltip = void 0, this.enterTimeout = void 0, this.exitTimeout = void 0, this.handleMouseEnter = e => {
						this.mouseOverTooltip && this.mouseOverTooltip !== e ? this.props.onShowTooltip(e) : (clearTimeout(this.enterTimeout), this.enterTimeout = window.setTimeout(() => {
							this.mouseOverTooltip === e && this.props.onShowTooltip(e)
						}, O)), this.mouseOverTooltip = e
					}, this.handleMouseLeave = () => {
						clearTimeout(this.exitTimeout), clearTimeout(this.enterTimeout), this.mouseOverTooltip = void 0, this.exitTimeout = window.setTimeout(() => {
							this.mouseOverTooltip || (clearTimeout(this.enterTimeout), this.props.onHideTooltip())
						}, w)
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
					const t = `${N}-${this.props.uniqueIdentifier}`,
						n = this.props.badgeSize || j;
					return a.a.createElement(r.Fragment, null, this.props.showAddCustom && a.a.createElement("div", {
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
						const t = Object(f.d)(n, n, e),
							s = `badges-display-${e.id}-${this.props.uniqueIdentifier}`;
						return a.a.createElement(r.Fragment, {
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
								height: `${n}px`
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
			const C = [],
				I = Object(o.c)({
					badgeIds: (e, {
						subredditId: t,
						userId: n
					}) => {
						var r;
						return (null === (r = e.users.appliedBadges[n]) || void 0 === r ? void 0 : r[t]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				T = Object(o.c)({
					badgeIds: (e, {
						subredditId: t
					}) => {
						var n;
						const r = e.user.account;
						return r && (null === (n = e.users.appliedBadges[r.id]) || void 0 === n ? void 0 : n[t]) || C
					},
					allBadges: e => e.badges.models,
					useHovercard: h.d.spSpecialMemberships
				}),
				k = e => ({
					onShowTooltip: t => e(Object(d.f)({
						tooltipId: t
					})),
					onHideTooltip: () => e(Object(d.i)()),
					onOpenUploadDialog: () => e(Object(l.j)())
				});

			function M(e) {
				const {
					badgeIds: t,
					allBadges: n,
					...r
				} = e, s = t.map(e => n[e]).filter(Boolean);
				return a.a.createElement(_, y({
					badges: s
				}, r))
			}
			const P = Object(s.b)(I, k)(M),
				B = Object(s.b)(T, k)(M)
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less": function(e, t, n) {
			e.exports = {
				controls: "Te3x8YuMvsyqMGk0d5I06"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less": function(e, t, n) {
			e.exports = {
				description: "_1yEF4lviPelrVHo3ESc4cN",
				title: "_3yXHaBH1sM7JXQBnZtv8Bg"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "_3gp6kQWk5XflDXs0WPDMIY",
				label: "_3GvoNq_K9RvfMIMrU4jBgi"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1hAH53-eghNAqo4f91sKHj",
				purchase: "MOHWPixENcqcUfZdpzhOF",
				title: "_17xuuuAbbykhb660vjmN-"
			}
		},
		"./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				c = n("./src/reddit/featureFlags/component.tsx"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				p = n("./src/reddit/components/Governance/Token/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/governance/tokens.ts"),
				x = n("./src/reddit/selectors/gov.ts"),
				f = n("./node_modules/reselect/es/index.js"),
				v = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Controls/index.m.less"),
				g = n.n(v);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(f.c)({
				cost: x.b,
				currentOwnerId: (e, t) => Object(x.c)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(x.c)(e, t).owner,
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			var N = Object(d.b)(y)((function(e) {
				const {
					className: t,
					cost: n,
					currentOwnerId: s,
					currentOwnerName: i,
					pointsDetails: c,
					subredditId: l
				} = e, d = n || "0";
				return a.a.createElement("div", {
					className: Object(o.a)(g.a.container, t)
				}, a.a.createElement("div", {
					className: g.a.owner
				}, s && a.a.createElement(r.Fragment, null, a.a.createElement("div", null, E._("Owned by", null, {
					hk: "yKSxo"
				})), a.a.createElement("div", {
					className: g.a.ownerText
				}, a.a.createElement(m.c, {
					className: g.a.ownerBadge,
					subredditId: l,
					uniqueIdentifier: "banner-purchase-modal",
					userId: s
				}), a.a.createElement("span", {
					className: g.a.username
				}, i)))), a.a.createElement("div", {
					className: g.a.purchase
				}, a.a.createElement("div", {
					className: g.a.cost
				}, a.a.createElement(p.a, {
					className: g.a.token,
					subredditId: l
				}), Object(u.a)(Object(b.b)(d, null == c ? void 0 : c.displayConversion))), a.a.createElement(h.k, {
					onClick: e.onPurchase
				}, E._("Proceed to Purchase", null, {
					hk: "21Rymw"
				}))))
			}));

			function O(e) {
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

			function w(e) {
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
			var j = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/Upsell/index.m.less"),
				_ = n.n(j);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const I = Object(f.c)({
				tokenName: (e, {
					subredditId: t
				}) => {
					var n;
					return (null === (n = Object(l.b)(e, t)) || void 0 === n ? void 0 : n.name) || ""
				}
			});
			var T = Object(d.b)(I)((function(e) {
					const {
						className: t,
						subredditName: n,
						tokenName: r
					} = e, s = `${e.taxRate}%`;
					return a.a.createElement("div", {
						className: Object(o.a)(_.a.container, t)
					}, a.a.createElement("div", {
						className: _.a.section
					}, a.a.createElement("div", {
						className: _.a.image
					}, a.a.createElement(O, {
						className: _.a.bannerImage
					})), a.a.createElement("div", {
						className: _.a.textSection
					}, a.a.createElement("div", {
						className: _.a.title
					}, C._("Buy r/{communityName} 's Top Banner", [C._param("communityName", n)], {
						hk: "2hXSyn"
					})), a.a.createElement("div", {
						className: _.a.text
					}, C._("Set the image to whatever you want", null, {
						hk: "45iv1p"
					})))), a.a.createElement("div", {
						className: _.a.section
					}, a.a.createElement("div", {
						className: _.a.image
					}, a.a.createElement(w, {
						className: _.a.taxImage
					})), a.a.createElement("div", {
						className: _.a.textSection
					}, a.a.createElement("div", {
						className: _.a.title
					}, C._("Harberger Tax", null, {
						hk: "1RH5bF"
					})), a.a.createElement("ul", {
						className: _.a.text
					}, a.a.createElement("li", null, C._("The owner sets the price for the banner", null, {
						hk: "1EnVw2"
					})), a.a.createElement("li", null, C._("They pay a daily tax of {tax} by burning {token}", [C._param("tax", s), C._param("token", r)], {
						hk: "2qEsqE"
					})), a.a.createElement("li", null, C._("If the owner cannot pay the tax, the price goes to 0", null, {
						hk: "X4H8x"
					})), a.a.createElement("li", null, C._("Anyone can buy the banner at its advertised price", null, {
						hk: "2k3KWy"
					})), a.a.createElement("li", null, C._("The owner cannot refuse to sell it at that price", null, {
						hk: "zeQCk"
					}))))))
				})),
				k = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Info/index.m.less"),
				M = n.n(k);

			function P(e) {
				return a.a.createElement("div", {
					className: Object(o.a)(M.a.container, e.className)
				}, a.a.createElement(T, {
					subredditId: e.subreddit.id,
					subredditName: e.subreddit.name,
					taxRate: e.taxRate
				}), a.a.createElement(N, {
					className: M.a.controls,
					subredditId: e.subreddit.id,
					onPurchase: e.onPurchase
				}))
			}
			var B = n("./node_modules/bignumber.js/bignumber.js"),
				A = n("./src/lib/currency/cleanNumber/index.ts"),
				D = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				S = n("./src/reddit/actions/toaster.ts"),
				H = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				G = n("./src/reddit/controls/FormFields/index.tsx"),
				F = n("./src/reddit/helpers/governance/ethereum.ts"),
				L = n("./src/reddit/models/Toast/index.ts"),
				R = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Section/index.m.less"),
				W = n.n(R);

			function V(e) {
				return a.a.createElement("article", {
					className: Object(o.a)(e.className, W.a.container)
				}, a.a.createElement("div", {
					className: W.a.title
				}, e.title), a.a.createElement("div", {
					className: W.a.description
				}, e.description), e.children)
			}
			var U = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/index.m.less"),
				q = n.n(U),
				X = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/Purchase/Value/index.m.less"),
				Y = n.n(X);

			function z(e) {
				return a.a.createElement("div", {
					className: Object(o.a)(Y.a.container, e.className)
				}, a.a.createElement("div", {
					className: Y.a.label
				}, e.label), a.a.createElement("div", {
					className: Y.a.amount
				}, Object(u.a)(Object(b.b)(e.amount, e.tokenDisplayConversion))))
			}
			var J = n("./node_modules/fbt/lib/FbtPublic.js");
			const Z = .01;
			class Q extends a.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => {
						this.setState({
							price: Object(b.a)(Object(A.a)(e || "0"), this.props.points.displayConversion)
						})
					}, this.handlePrepayChange = e => this.setState({
						prepayDays: Object(A.a)(e)
					}), this.handlePurchase = async () => {
						const {
							cost: e,
							harbergerDetails: t,
							points: n
						} = this.props, {
							price: r,
							prepayDays: a
						} = this.state, s = null == n ? void 0 : n.contractAddress, o = t.address;
						if (!s || !o) return this.props.onError();
						const i = new B.BigNumber(r).multipliedBy(t.taxRate * Z).multipliedBy(parseInt(a));
						try {
							await Object(F.g)(s, o, e || "0", r, i.toFixed(0)), this.props.onPurchaseComplete()
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
						currentOwnerId: n,
						currentOwnerName: r,
						harbergerDetails: s,
						points: i,
						subredditId: c
					} = this.props;
					if (!i) throw new Error("expected points data in BannerPurchaseModal");
					const l = t || "0",
						d = this.state.price || "0",
						x = parseInt(d) * (s.taxRate * Z),
						f = x * parseInt(this.state.prepayDays),
						v = parseInt(l) + f,
						g = `${s.taxRate}%`;
					return a.a.createElement("div", {
						className: Object(o.a)(q.a.container, e)
					}, a.a.createElement(V, {
						className: q.a.section,
						description: J.fbt._("You must pay this amount to the current owner to buy the banner.", null, {
							hk: "36sgxo"
						}),
						title: J.fbt._("Current price", null, {
							hk: "EklEv"
						})
					}, a.a.createElement("div", {
						className: q.a.currentPrice
					}, a.a.createElement(H.a, {
						amount: l,
						subredditId: c
					}), n && a.a.createElement("div", {
						className: q.a.owner
					}, J.fbt._("Owned by", null, {
						hk: "JDQVM"
					}), " ", a.a.createElement(m.c, {
						className: q.a.ownerBadge,
						subredditId: c,
						uniqueIdentifier: "banner-purchase-modal",
						userId: n
					}), a.a.createElement("span", {
						className: q.a.username
					}, r)))), a.a.createElement(V, {
						className: q.a.section,
						description: J.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. You can also lower the price to lower the tax.", null, {
							hk: "20EBr1"
						}),
						title: J.fbt._("New price and tax", null, {
							hk: "291U7z"
						})
					}, a.a.createElement("div", {
						className: q.a.price
					}, a.a.createElement(G.c, {
						redditStyle: !0,
						className: q.a.priceInput,
						label: J.fbt._("new price", null, {
							hk: "3eEJKs"
						}),
						placeholder: "0",
						type: "text",
						value: Object(u.a)(Object(b.b)(this.state.price, i.displayConversion)),
						onChange: e => this.handlePriceChange(e.currentTarget.value)
					}), a.a.createElement(p.a, {
						className: q.a.priceToken,
						subredditId: c
					}), a.a.createElement("div", {
						className: q.a.equals
					}, "="), a.a.createElement(z, {
						amount: x.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("{tax} daily tax", [J.fbt._param("tax", g)], {
							hk: "1kg5ZE"
						}),
						tokenDisplayConversion: i.displayConversion
					}))), a.a.createElement(V, {
						className: q.a.section,
						description: J.fbt._("You must deposit money to pay the daily tax. You can top this up at any time. If the balance goes to zero, the price of the banner drops to zero. If someone else buys the banner, you will be refunded any pre-paid tax you allocated.", null, {
							hk: "3rkkNS"
						}),
						title: J.fbt._("Initial balance", null, {
							hk: "3xz0g9"
						})
					}, a.a.createElement("div", {
						className: q.a.prePay
					}, a.a.createElement(G.c, {
						redditStyle: !0,
						className: q.a.prepayInput,
						label: J.fbt._("# of days to prepay", null, {
							hk: "12YpX6"
						}),
						placeholder: "0",
						type: "text",
						value: Object(u.a)(this.state.prepayDays),
						onChange: e => this.handlePrepayChange(e.currentTarget.value)
					}), a.a.createElement("div", {
						className: q.a.times
					}, "X"), a.a.createElement(z, {
						amount: x.toFixed(2),
						className: q.a.tax,
						label: J.fbt._("Daily tax", null, {
							hk: "UZSvX"
						}),
						tokenDisplayConversion: i.displayConversion || "1"
					}), a.a.createElement("div", {
						className: q.a.equals
					}, "="), a.a.createElement(H.a, {
						className: q.a.prepayTotal,
						amount: f.toFixed(2),
						subredditId: c
					}))), a.a.createElement("footer", {
						className: q.a.footer
					}, a.a.createElement("div", null, a.a.createElement("div", {
						className: q.a.total
					}, J.fbt._("Total due", null, {
						hk: "1MTLwA"
					})), a.a.createElement(H.a, {
						amount: v.toFixed(2),
						subredditId: c
					})), a.a.createElement(h.k, {
						disabled: !s.address,
						onClick: this.handlePurchase
					}, J.fbt._("Buy", null, {
						hk: "YSWpE"
					}))))
				}
			}
			const $ = Object(f.c)({
				cost: x.b,
				currentOwnerId: (e, t) => Object(x.c)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(x.c)(e, t).owner,
				points: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			var K = Object(d.b)($, e => ({
					onError: t => e(Object(S.f)({
						duration: 5e3,
						kind: L.b.Error,
						text: t || J.fbt._("Something wen't wrong with the purchase. Please try again later.", null, {
							hk: "18lJda"
						})
					})),
					onPurchaseComplete: () => e(Object(D.a)())
				}))(Q),
				ee = n("./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var re;
			! function(e) {
				e[e.Info = 0] = "Info", e[e.Purchase = 1] = "Purchase"
			}(re || (re = {}));
			t.default = Object(c.a)("spHarberger", Object(s.a)((function(e) {
				var t;
				const {
					className: n
				} = e, [s, c] = Object(r.useState)(re.Info), {
					pointsDetails: d,
					subreddit: u
				} = Object(l.c)(), m = null === (t = null == d ? void 0 : d.contracts) || void 0 === t ? void 0 : t.harberger, p = null == m ? void 0 : m.taxRate;
				return m && p && u ? a.a.createElement("div", {
					className: Object(o.a)(te.a.container, n)
				}, a.a.createElement(i.a, {
					className: te.a.title
				}, ne._("Buy Banner", null, {
					hk: "PL5xv"
				})), s === re.Info && a.a.createElement(P, {
					taxRate: p,
					subreddit: u,
					onPurchase: () => c(re.Purchase)
				}), s === re.Purchase && a.a.createElement(K, {
					className: te.a.purchase,
					harbergerDetails: m,
					subredditId: u.id
				})) : null
			})))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				d = n.n(l);
			t.a = Object(s.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(i.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(c.a, {
					className: Object(o.a)(d.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function l(e) {
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
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const m = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(l.b)(e, t)
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${i.a.assetPath}/${r}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
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
					src: s
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				p = n.n(m);
			const h = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(s.b)(h)((function(e) {
				var t;
				return a.a.createElement("div", {
					className: Object(i.a)(p.a.container, e.className, {
						[p.a.small]: e.small
					})
				}, a.a.createElement(l.a, {
					className: Object(i.a)(p.a.token, {
						[p.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(d.b)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				s = n.n(a),
				o = n("./node_modules/raf/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = n.n(h);
			var x = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return l.a.createElement("div", {
						className: b.a.wrapper
					}, l.a.createElement(p.a, {
						className: b.a.titleRow
					}, n), l.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), l.a.createElement(p.a, {
						className: b.a.buttonRow
					}, l.a.createElement(m.k, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(f);
			class g extends l.a.Component {
				constructor(e) {
					super(e), this.spanRef = l.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
						isModalOpen: !1
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
						className: t,
						errorModalBody: n,
						errorModalTitle: a = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return l.a.createElement("div", {
						className: Object(d.a)(v.a.wrapper, t)
					}, l.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), o && l.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, s), i && l.a.createElement(x, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? l.a.createElement("div", {
						className: t
					}, o.map((e, t) => l.a.createElement(g, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				y = e => l.a.createElement(E, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/ErrorText/index.tsx"),
				c = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
						children: n,
						inputRef: r,
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
						innerRef: r
					}, i)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: r,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...l
					} = e, d = void 0 !== e.value && "" !== e.value;
					return a.a.createElement("div", {
						className: Object(s.a)(u.a.inputMovingLabelWrapper, i, {
							[u.a.mIsInvalid]: o,
							[u.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, a.a.createElement(p, m({
						innerRef: r
					}, l)), e.label && a.a.createElement("label", {
						className: Object(s.a)(u.a.label, {
							[u.a.mHasValue]: d
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
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: n,
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
						label: n,
						placeholder: r,
						errors: s = []
					} = this.props;
					return e.map((e, o) => a.a.createElement(b, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!s[o],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, o),
						placeholder: r,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, a.a.createElement(l.b, {
						className: u.a.trash
					})), !!s[o] && a.a.createElement(i.b, {
						className: u.a.errorText
					}, s[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: r,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!r && n.length >= r) && !i;
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
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						...s
					} = e, o = s;
					return r ? a.a.createElement(t, o) : void 0 !== n ? a.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

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
				const e = a();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = a();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const l = 4001;
			async function d(e, t, r, s) {
				const [o, i] = await Promise.all([Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const l = new o.providers.Web3Provider(a()).getSigner(),
					d = new o.Contract(e, i, l),
					u = await d[r](...s);
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
			async function p(e, t, r, a, s) {
				const o = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = o,
					{
						hexlify: c,
						hexZeroPad: l,
						toUtf8Bytes: p
					} = o.utils,
					h = i.from(r).add(s),
					b = m,
					x = "0x" + [c(1)].concat([c(b), i.from(a).toHexString(), i.from(s).toHexString()].map(e => l(e, 32))).concat(c(p(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return d(e, Promise.resolve(u), "send", [t, n, r])
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
			async function b(e, t, n) {
				await c();
				const a = o() || "";
				if (t.toLowerCase() !== a.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return d(e, Promise.resolve(h), "subscribe", [t, n])
			}

			function x(e) {
				const t = a();
				return new Promise((n, a) => {
					const s = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, s],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) a(e);
						else {
							const e = t && t.result;
							e ? n(e) : a({
								message: r.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function f(e) {
				return new Promise((t, n) => {
					a().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, r) => {
						e || "error" in r ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				s = {},
				o = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : s
				},
				l = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const n = l(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = l(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxPurchaseModal.24fca0b55f8f17371e00.js.map