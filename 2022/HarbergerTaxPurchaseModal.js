// https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.9666adff646290262122.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxPurchaseModal"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
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
				return x
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/harbergerTax/constants.ts");
			const c = Object(n.a)(a.c),
				s = Object(n.a)(a.e),
				o = Object(n.a)(a.a),
				d = Object(n.a)(a.b),
				i = Object(n.a)(a.d),
				l = Object(n.a)(a.f),
				u = Object(n.a)(a.g),
				m = Object(n.a)(a.h),
				b = Object(n.a)(a.i),
				x = Object(n.a)(a.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/isEmpty.js"),
				a = r.n(n),
				c = r("./src/reddit/actions/governance/errorToast.ts"),
				s = r("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/config.ts"),
				l = r("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/orders`,
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
				b = r("./src/reddit/selectors/gov.ts"),
				x = r("./node_modules/fbt/lib/FbtPublic.js");
			const p = () => async (e, t) => {
				e(Object(d.f)({
					kind: m.b.Error,
					text: x.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, h = e => async (t, r, {
				apiContext: n
			}) => {
				const {
					subredditId: a
				} = e, o = r().user.account, d = Object(b.a)(r(), {
					subredditId: a
				});
				if (!o) return;
				const i = o.displayText || "";
				t(Object(s.f)({
					productId: "mainHeader",
					subredditId: a
				}));
				const l = await u(n(), {
					subredditId: a,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: d && d.owner || "",
						ownerId: d && d.ownerId || ""
					}]
				});
				l.ok ? (t(Object(s.g)({
					productId: "mainHeader",
					subredditId: a,
					mainHeader: {
						owner: i,
						ownerId: o.id,
						price: e.newPrice || e.currentPrice,
						content: d ? d.content : {}
					}
				})), t(Object(s.c)({
					subredditId: a
				}))) : (t(Object(s.d)({
					productId: "mainHeader",
					subredditId: a,
					error: l.error
				})), Object(c.a)(t, l.error))
			}, f = e => async (t, r, {
				apiContext: n
			}) => {
				const {
					subredditId: d
				} = e, m = r().user.account, x = Object(b.a)(r(), {
					subredditId: d
				}), p = r().structuredStyles.models[d];
				if (!m || !x) return;
				const h = m.displayText || "",
					f = [],
					g = void 0 !== e.newPrice && x.price !== e.newPrice,
					w = function(e, t, r) {
						const n = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== r.bannerBackgroundImage ? n.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (n.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (n.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), n
					}(x.content, e.content, p),
					I = !a()(w);
				(g || I) && t(Object(s.i)({
					productId: "mainHeader",
					subredditId: d
				})), g ? f.push(u(n(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: x.owner || "",
						ownerId: x.ownerId || ""
					}]
				})) : f.push(Promise.resolve()), I && f.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: `${i.a.metaUrl}/communities/${t.subredditId}`,
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(n(), {
					subredditId: d,
					content: w
				}));
				const [E, j] = await Promise.all(f);
				g && E.ok && I && j.ok ? (t(Object(s.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || x.price,
						content: e.content
					}
				})), t(Object(o.l)({
					subredditId: d,
					styles: w
				}))) : g && E.ok ? (t(Object(s.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: e.newPrice || x.price,
						content: x.content
					}
				})), I && !j.ok && Object(c.a)(t, j.error)) : I && j.ok ? (t(Object(s.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: h,
						ownerId: m.id,
						price: x.price,
						content: e.content
					}
				})), t(Object(o.l)({
					subredditId: d,
					styles: w
				})), g && !E.ok && Object(c.a)(t, E.error)) : (g && Object(c.a)(t, E.error), I && (t(Object(s.h)({
					productId: "mainHeader",
					subredditId: d,
					error: E.error
				})), Object(c.a)(t, j.error)))
			}
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
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				d = r("./src/reddit/featureFlags/component.tsx"),
				i = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./node_modules/react-redux/es/index.js"),
				u = r("./node_modules/reselect/es/index.js"),
				m = r("./src/lib/prettyPrintNumber/index.ts"),
				b = r("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				x = r("./src/reddit/components/Badges/UserDisplay/index.tsx"),
				p = r("./src/reddit/components/Governance/Token/index.tsx"),
				h = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = r("./src/reddit/selectors/gov.ts"),
				w = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Controls/index.m.less"),
				I = r.n(w);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const j = Object(u.c)({
				cost: g.b,
				currentOwnerId: (e, t) => Object(g.c)(e, t).ownerId,
				currentOwnerName: (e, t) => Object(g.c)(e, t).owner,
				isPurchasing: e => !!e.products.api.purchase.pending.mainHeader
			});
			var v = Object(l.b)(j, e => ({
					onPurchase: t => e(Object(b.b)(t))
				}))((function(e) {
					const {
						className: t,
						cost: r,
						currentOwnerId: c,
						currentOwnerName: o,
						subredditId: d
					} = e, i = r || "0";
					return a.a.createElement("div", {
						className: Object(s.a)(I.a.container, t)
					}, a.a.createElement("div", {
						className: I.a.owner
					}, c && a.a.createElement(n.Fragment, null, E._("Owned by", null, {
						hk: "b9B87"
					}), a.a.createElement(x.c, {
						className: I.a.ownerBadge,
						subredditId: d,
						uniqueIdentifier: "banner-purchase-modal",
						userId: c
					}), a.a.createElement("span", {
						className: I.a.username
					}, o))), a.a.createElement("div", {
						className: I.a.purchase
					}, a.a.createElement("div", {
						className: I.a.cost
					}, a.a.createElement(p.a, {
						className: I.a.token,
						subredditId: d
					}), Object(m.a)(i)), a.a.createElement(h.l, {
						onClick: () => e.onPurchase({
							subredditId: d,
							currentPrice: i
						})
					}, e.isPurchasing ? a.a.createElement(f.a, {
						sizePx: 20
					}) : E._("buy", null, {
						hk: "4dbO8f"
					}))))
				})),
				O = r("./node_modules/fbt/lib/FbtPublic.js");

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

			function k(e) {
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
			var y = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/Upsell/index.m.less"),
				_ = r.n(y);

			function B(e) {
				const {
					className: t,
					subredditName: r,
					pointsName: n
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(_.a.container, t)
				}, a.a.createElement("div", {
					className: _.a.section
				}, a.a.createElement("div", {
					className: _.a.image
				}, a.a.createElement(N, {
					className: _.a.bannerImage
				})), a.a.createElement("div", {
					className: _.a.textSection
				}, a.a.createElement("div", {
					className: _.a.title
				}, O.fbt._("Buy r/{subredditName}'s Top Banner with {tokenName}", [O.fbt._param("subredditName", r), O.fbt._param("tokenName", n)], {
					hk: "1v5pFU"
				})), a.a.createElement("div", {
					className: _.a.text
				}, O.fbt._("Set the image to whatever you want", null, {
					hk: "saxQd"
				})))), a.a.createElement("div", {
					className: _.a.section
				}, a.a.createElement("div", {
					className: _.a.image
				}, a.a.createElement(k, {
					className: _.a.taxImage
				})), a.a.createElement("div", {
					className: _.a.textSection
				}, a.a.createElement("div", {
					className: _.a.title
				}, O.fbt._("Hamburger Tax", null, {
					hk: "3eNLF3"
				})), a.a.createElement("ul", {
					className: _.a.text
				}, a.a.createElement("li", null, O.fbt._("The owner sets the price for the banner", null, {
					hk: "19Rdj7"
				})), a.a.createElement("li", null, O.fbt._("They pay a daily tax rate of 1% by burning {tokenName}", [O.fbt._param("tokenName", n)], {
					hk: "3WaZar"
				})), a.a.createElement("li", null, O.fbt._("If the owner cannot pay the tax, the price goes to 0", null, {
					hk: "26y0Y5"
				})), a.a.createElement("li", null, O.fbt._("Anyone can buy the banner at its advertised price", null, {
					hk: "4hc3Nw"
				})), a.a.createElement("li", null, O.fbt._("The owner cannot refuse to sell it at that price", null, {
					hk: "4bvKhT"
				}))))))
			}
			var C = r("./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.m.less"),
				P = r.n(C);
			const {
				fbt: H
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.default = Object(d.a)("spHarberger", Object(c.a)((function(e) {
				const {
					className: t
				} = e, {
					pointsDetails: r,
					subreddit: n
				} = Object(i.c)();
				return r && n ? a.a.createElement("div", {
					className: Object(s.a)(P.a.container, t)
				}, a.a.createElement(o.a, {
					className: P.a.title
				}, H._("Buy Banner", null, {
					hk: "3Mp8CG"
				})), a.a.createElement(B, {
					pointsName: r.name,
					subredditId: n.id,
					subredditName: n.name
				}), a.a.createElement(v, {
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
				a = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(i);
			t.a = Object(c.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(o.f)()), t && t()
				}
			}))((function(e) {
				return a.a.createElement(d.a, {
					className: Object(s.a)(l.a.closeIcon, e.className),
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
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				o = r("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = r.n(o);

			function i(e) {
				return a.a.createElement("div", {
					className: Object(c.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, a.a.createElement("div", {
					className: d.a.title
				}, e.children), a.a.createElement(s.a, {
					className: d.a.closeIcon
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
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/crypto/points.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(s.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(c.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					c = `${o.a.assetPath}/${n}`;
				if (e.grey && c.endsWith(".svg")) {
					const t = `url(${c}) center/cover`;
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
					src: c
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
				a = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(c.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				c = {},
				s = (e, t) => {
					const r = b(e, t);
					if (r) return r.mainHeader
				},
				o = (e, t) => {
					const r = b(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				d = (e, t) => {
					const r = b(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const r = i(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const r = i(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.n)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxPurchaseModal.9666adff646290262122.js.map