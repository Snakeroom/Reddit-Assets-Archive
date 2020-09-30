// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.7cb2ab403b597072f4e4.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePurchaseModal"], {
		"./src/reddit/components/Badges/PurchaseModal/Header/index.m.less": function(e, t, a) {
			e.exports = {
				header: "_1Fg5LCvIOKUS-JIe719tTe"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less": function(e, t, a) {
			e.exports = {
				clock: "_3UmG8wd05rCyxfas7aw3ma",
				content: "_1zHJ1nIvH_xM7A0mBJVUMJ",
				controls: "l-rs7zdqn7c76nyocry8R",
				expiry: "_1531bjdbyP6bXFxru_myYu",
				footer: "_3AXox7yI3Y2myo40RiRMnN",
				image: "_3phj-wk32mooW_qm4U4rST",
				sunburst: "_2HOL2Ocz9Mk2MHZbT-XgpO",
				rotatesun: "_181c6SHb5vezz4QadjyDhV",
				tokenSymbol: "_2hQi-4-IEjZ4HRu9KOclgF",
				wallet: "_3Wn0aez_BN7qIL7ioUUMdu"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less": function(e, t, a) {
			e.exports = {
				badgeDesc: "_2MLz1_bdYFG5k8o3alxd6R",
				badgeImage: "dSkiW38nEPS5TwC2cXvbJ",
				badgeName: "_2ZbThgoQryL1UhqPa35RIc",
				badgesNumLeft: "KhTdD4W6xq_VZe8LPZ-kH",
				content: "_2Rm-XRXMMFgwT729UA8F_b",
				badgePrice: "_2iB9FkEtbE2ILZEmkU45aU",
				footer: "_3Ifz33o8Bbj30iKc7w-3XM",
				loadingIcon: "_3RHfcSBorUOS_UrUwqyMe9",
				tokenSymbol: "_1aTefskgybtjIsqbLeqSIB"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_19-Cd3JIaIbz_X0vgaQq8w"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/selectors/products.ts"),
				i = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/lib/prettyPrintNumber/index.ts")),
				m = a("./src/lib/timeUntil/index.ts"),
				u = a("./src/reddit/actions/badge.ts"),
				b = a("./src/reddit/actions/modal.ts"),
				p = a("./src/reddit/components/Governance/Token/index.tsx"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/icons/svgs/Clock/index.tsx"),
				_ = a("./src/reddit/icons/svgs/Sunburst/index.tsx"),
				f = a("./src/reddit/models/Badge/index.ts"),
				v = a("./src/reddit/selectors/gov.ts"),
				j = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				h = a("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				N = a.n(h);

			function k(e) {
				return c.a.createElement("header", {
					className: N.a.header
				}, e.children, c.a.createElement(j.a, {
					afterClose: e.afterClose
				}))
			}
			var E = a("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				O = a.n(E);
			const {
				fbt: I
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(r.c)({
				badge: (e, t) => {
					let {
						productId: a
					} = t;
					const s = e.products.models[a];
					if (s) {
						const t = s.subredditId,
							c = Object.keys(e.user.ownedBadges[t] || {}).map(t => e.badges.models[t]).filter(Boolean).filter(e => e.type === a);
						if (c.length) return c[0]
					}
				},
				product: (e, t) => {
					let {
						productId: a
					} = t;
					return Object(l.a)(e, a)
				},
				wallet: (e, t) => {
					let {
						productId: a
					} = t;
					const s = Object(l.a)(e, a);
					if (s) {
						const t = s.subredditId;
						return Object(v.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var C = Object(n.b)(y, e => ({
					onApplyBadge: (t, a) => {
						e(Object(u.k)({
							badgeIds: [a],
							subredditId: t
						})), e(Object(b.f)())
					},
					onClose: () => {
						e(Object(b.f)()), e(Object(u.j)())
					},
					onOpenGallery: () => {
						e(Object(u.j)())
					}
				}))((function(e) {
					return e.product && e.wallet && e.badge ? c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(k, {
						afterClose: e.onOpenGallery
					}, I._("you got a new badge!", null, {
						hk: "1dFWkt"
					})), c.a.createElement("div", {
						className: O.a.content
					}, function(e) {
						const t = Object(f.b)(128, 128, e);
						return c.a.createElement(s.Fragment, null, c.a.createElement(_.a, {
							className: O.a.sunburst
						}), c.a.createElement("img", {
							className: O.a.image,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}))
					}(e.badge), (e.badge, d = e.product, c.a.createElement("div", {
						className: O.a.expiry
					}, I._("Expires in {clock}{timeLeft}", [I._param("clock", c.a.createElement(g.a, {
						className: O.a.clock
					})), I._param("timeLeft", Object(m.a)(new Date(Date.now() + 1e3 * d.duration), !0))], {
						hk: "1nLM5D"
					})))), c.a.createElement("footer", {
						className: O.a.footer
					}, (r = e.wallet, o = e.product.subredditId, c.a.createElement("div", {
						className: O.a.wallet
					}, I._("You have {token}{amount}", [I._param("token", c.a.createElement(p.a, {
						grey: !0,
						className: O.a.tokenSymbol,
						subredditId: o
					})), I._param("amount", Object(i.a)(r.amount))], {
						hk: "2uBJCn"
					}))), (t = e.badge, a = e.onApplyBadge, n = e.onClose, c.a.createElement("div", {
						className: O.a.controls
					}, c.a.createElement(x.o, {
						onClick: n
					}, I._("done", null, {
						hk: "1mAQca"
					})), c.a.createElement(x.i, {
						onClick: () => a(t.subredditId, t.id)
					}, I._("apply badge", null, {
						hk: "25p6rC"
					})))))) : null;
					var t, a, n, r, o, d
				})),
				w = a("./src/reddit/actions/product.ts"),
				P = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = a("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				B = a.n(M);
			const {
				fbt: L
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const S = Object(r.c)({
				product: (e, t) => {
					let {
						productId: a
					} = t;
					return Object(l.a)(e, a)
				},
				purchaseInProgress: (e, t) => {
					let {
						productId: a
					} = t;
					return !!e.products.api.purchase.pending[a]
				},
				tokenName: (e, t) => {
					let {
						productId: a
					} = t;
					const s = e.products.models[a];
					return Object(v.q)(e, {
						subredditId: s ? s.subredditId : void 0
					})
				}
			});
			var U = Object(n.b)(S, (e, t) => {
					let {
						productId: a
					} = t;
					return {
						onPurchase: () => e(Object(w.i)({
							productId: a
						}))
					}
				})((function(e) {
					return e.product ? c.a.createElement("div", {
						className: e.className
					}, c.a.createElement(k, null, L._("get badge", null, {
						hk: "36uzzU"
					})), c.a.createElement("div", {
						className: B.a.content
					}, function(e) {
						const t = Object(f.b)(96, 96, e);
						return c.a.createElement("img", {
							className: B.a.badgeImage,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						})
					}(e.product), (n = e.product, c.a.createElement("div", {
						className: B.a.badgeName
					}, n.title)), function(e) {
						return c.a.createElement("div", {
							className: B.a.badgeDesc
						}, e.description)
					}(e.product), function(e) {
						return c.a.createElement("div", {
							className: B.a.badgesNumLeft
						}, L._("{numerator}/{total} left", [L._param("numerator", Object(i.a)(e.quantityLeft || "")), L._param("total", Object(i.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product)), c.a.createElement("footer", {
						className: B.a.footer
					}, function(e) {
						if (!e.price) return null;
						return c.a.createElement("div", {
							className: B.a.badgePrice
						}, c.a.createElement(p.a, {
							className: B.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(i.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, a = e.tokenName, s = e.onPurchase, c.a.createElement(x.i, {
						onClick: s
					}, t ? c.a.createElement(P.a, {
						className: B.a.loadingIcon,
						sizePx: 20
					}) : L._("convert {tokenName}", [L._param("tokenName", a)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, a, s, n
				})),
				z = a("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				R = a.n(z);
			const T = Object(r.c)({
					alreadyOwned: l.b
				}),
				q = Object(n.b)(T);
			t.default = Object(o.a)(q((function(e) {
				return c.a.createElement("div", {
					className: Object(d.a)(R.a.container, e.className)
				}, e.alreadyOwned ? c.a.createElement(C, {
					productId: e.productId
				}) : c.a.createElement(U, {
					productId: e.productId
				}))
			})))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/icons/svgs/Close/index.tsx"),
				l = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				i = a.n(l);
			t.a = Object(n.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(o.f)()), a && a()
					}
				}
			})((function(e) {
				return c.a.createElement(d.a, {
					className: Object(r.a)(i.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				o = a("./src/config.ts"),
				d = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/selectors/gov.ts"),
				i = a("./src/reddit/components/Governance/Token/index.m.less"),
				m = a.n(i);
			const u = Object(r.c)({
				tokenSymbol: l.r
			});
			t.a = Object(n.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(o.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return c.a.createElement("div", {
						className: Object(d.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return c.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				c = a.n(s);
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, c.a.createElement("g", null, c.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), c.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Sunburst/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/react/index.js"),
				c = a.n(s);

			function n(e) {
				return c.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 450 450",
					xmlns: "http://www.w3.org/2000/svg"
				}, c.a.createElement("path", {
					clipRule: "evenodd",
					d: "m206.073.784912c-27.274 2.271728-53.166 9.407988-76.806 20.538788l94.176 200.9793-126.9464-182.0213c-21.8975 15.262-40.9531 34.3177-56.2149 56.2151l182.0213 126.9462-200.9793-94.177c-11.1308 23.641-18.26755 49.533-20.539032 76.807l221.101332 18.927-221.101332 18.927c2.271482 27.274 9.408232 53.167 20.539032 76.807l200.9803-94.177-182.0223 126.946c15.2618 21.898 34.3179 40.954 56.2154 56.215l126.9459-182.021-94.176 200.979c23.64 11.131 49.532 18.268 76.806 20.539l18.927-221.101 18.927 221.101c27.274-2.271 53.166-9.408 76.806-20.539l-94.176-200.979 126.946 182.021c21.897-15.261 40.954-34.317 56.215-56.215l-182.022-126.946 200.98 94.177c11.131-23.64 18.268-49.533 20.539-76.807l-221.101-18.927 221.101-18.927c-2.271-27.274-9.407-53.166-20.538-76.806l-200.98 94.176 182.022-126.9457c-15.262-21.8974-34.318-40.9536-56.216-56.2156l-126.946 182.0213 94.176-200.9793c-23.64-11.1308-49.532-18.26706-76.806-20.538788l-18.927 221.101088z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePurchaseModal.7cb2ab403b597072f4e4.js.map