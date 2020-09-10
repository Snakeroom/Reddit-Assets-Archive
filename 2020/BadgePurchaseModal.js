// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.955876fa278097dbe834.js
// Retrieved at 9/10/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePurchaseModal"], {
		"./src/reddit/components/Badges/PurchaseModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_1Fg5LCvIOKUS-JIe719tTe"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Badges/PurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_19-Cd3JIaIbz_X0vgaQq8w"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/products.ts"),
				l = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/prettyPrintNumber/index.ts")),
				u = r("./src/lib/timeUntil/index.ts"),
				m = r("./src/reddit/actions/badge.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/components/Governance/Token/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/icons/svgs/Clock/index.tsx"),
				x = r("./src/reddit/icons/svgs/Sunburst/index.tsx"),
				h = r("./src/reddit/models/Badge/index.ts"),
				v = r("./src/reddit/selectors/gov.ts"),
				y = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				E = r("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				k = r.n(E);

			function I(e) {
				return s.a.createElement("header", {
					className: k.a.header
				}, e.children, s.a.createElement(y.a, {
					afterClose: e.afterClose
				}))
			}
			var _ = r("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				j = r.n(_);
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const N = Object(c.c)({
				badge: (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}).map(t => e.badges.models[t]).filter(Boolean).filter(e => e.type === r);
						if (s.length) return s[0]
					}
				},
				product: (e, t) => {
					let {
						productId: r
					} = t;
					return Object(i.a)(e, r)
				},
				wallet: (e, t) => {
					let {
						productId: r
					} = t;
					const n = Object(i.a)(e, r);
					if (n) {
						const t = n.subredditId;
						return Object(v.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var O = Object(a.b)(N, e => ({
					onApplyBadge: (t, r) => {
						e(Object(m.k)({
							badgeIds: [r],
							subredditId: t
						})), e(Object(b.f)())
					},
					onClose: () => {
						e(Object(b.f)()), e(Object(m.j)())
					},
					onOpenGallery: () => {
						e(Object(m.j)())
					}
				}))((function(e) {
					return e.product && e.wallet && e.badge ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(I, {
						afterClose: e.onOpenGallery
					}, w._("you got a new badge!", null, {
						hk: "1dFWkt"
					})), s.a.createElement("div", {
						className: j.a.content
					}, function(e) {
						const t = Object(h.b)(128, 128, e);
						return s.a.createElement(n.Fragment, null, s.a.createElement(x.a, {
							className: j.a.sunburst
						}), s.a.createElement("img", {
							className: j.a.image,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}))
					}(e.badge), (e.badge, o = e.product, s.a.createElement("div", {
						className: j.a.expiry
					}, w._("Expires in {clock}{timeLeft}", [w._param("clock", s.a.createElement(g.a, {
						className: j.a.clock
					})), w._param("timeLeft", Object(u.a)(new Date(Date.now() + 1e3 * o.duration), !0))], {
						hk: "1nLM5D"
					})))), s.a.createElement("footer", {
						className: j.a.footer
					}, (c = e.wallet, d = e.product.subredditId, s.a.createElement("div", {
						className: j.a.wallet
					}, w._("You have {token}{amount}", [w._param("token", s.a.createElement(p.a, {
						grey: !0,
						className: j.a.tokenSymbol,
						subredditId: d
					})), w._param("amount", Object(l.a)(c.amount))], {
						hk: "2uBJCn"
					}))), (t = e.badge, r = e.onApplyBadge, a = e.onClose, s.a.createElement("div", {
						className: j.a.controls
					}, s.a.createElement(f.n, {
						onClick: a
					}, w._("done", null, {
						hk: "1mAQca"
					})), s.a.createElement(f.f, {
						onClick: () => r(t.subredditId, t.id)
					}, w._("apply badge", null, {
						hk: "25p6rC"
					})))))) : null;
					var t, r, a, c, d, o
				})),
				P = r("./src/reddit/actions/product.ts"),
				C = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = r("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				T = r.n(M);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const R = Object(c.c)({
				product: (e, t) => {
					let {
						productId: r
					} = t;
					return Object(i.a)(e, r)
				},
				purchaseInProgress: (e, t) => {
					let {
						productId: r
					} = t;
					return !!e.products.api.purchase.pending[r]
				},
				tokenName: (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					return Object(v.q)(e, {
						subredditId: n ? n.subredditId : void 0
					})
				}
			});
			var S = Object(a.b)(R, (e, t) => {
					let {
						productId: r
					} = t;
					return {
						onPurchase: () => e(Object(P.i)({
							productId: r
						}))
					}
				})((function(e) {
					return e.product ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(I, null, B._("get badge", null, {
						hk: "36uzzU"
					})), s.a.createElement("div", {
						className: T.a.content
					}, function(e) {
						const t = Object(h.b)(96, 96, e);
						return s.a.createElement("img", {
							className: T.a.badgeImage,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						})
					}(e.product), (a = e.product, s.a.createElement("div", {
						className: T.a.badgeName
					}, a.title)), function(e) {
						return s.a.createElement("div", {
							className: T.a.badgeDesc
						}, e.description)
					}(e.product), function(e) {
						return s.a.createElement("div", {
							className: T.a.badgesNumLeft
						}, B._("{numerator}/{total} left", [B._param("numerator", Object(l.a)(e.quantityLeft || "")), B._param("total", Object(l.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product)), s.a.createElement("footer", {
						className: T.a.footer
					}, function(e) {
						if (!e.price) return null;
						return s.a.createElement("div", {
							className: T.a.badgePrice
						}, s.a.createElement(p.a, {
							className: T.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(l.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, r = e.tokenName, n = e.onPurchase, s.a.createElement(f.f, {
						onClick: n
					}, t ? s.a.createElement(C.a, {
						className: T.a.loadingIcon,
						sizePx: 20
					}) : B._("convert {tokenName}", [B._param("tokenName", r)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, r, n, a
				})),
				L = r("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				U = r.n(L);
			const H = Object(c.c)({
					alreadyOwned: i.b
				}),
				A = Object(a.b)(H);
			t.default = Object(d.a)(A((function(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(U.a.container, e.className)
				}, e.alreadyOwned ? s.a.createElement(O, {
					productId: e.productId
				}) : s.a.createElement(S, {
					productId: e.productId
				}))
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
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(i);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: r
				} = t;
				return {
					onClose: () => {
						e(Object(d.f)()), r && r()
					}
				}
			})((function(e) {
				return s.a.createElement(o.a, {
					className: Object(c.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
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
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/gov.ts"),
				l = r("./src/reddit/components/Governance/Token/index.m.less"),
				u = r.n(l);
			const m = Object(c.c)({
				tokenSymbol: i.r
			});
			t.a = Object(a.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = "".concat(d.a.assetPath, "/").concat(t);
				if (e.grey && r.endsWith(".svg")) {
					const t = "url(".concat(r, ") center/cover");
					return s.a.createElement("div", {
						className: Object(o.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "k", (function() {
				return f
			}));
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
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

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function o(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function i(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				p = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function f(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Sunburst/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 450 450",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					clipRule: "evenodd",
					d: "m206.073.784912c-27.274 2.271728-53.166 9.407988-76.806 20.538788l94.176 200.9793-126.9464-182.0213c-21.8975 15.262-40.9531 34.3177-56.2149 56.2151l182.0213 126.9462-200.9793-94.177c-11.1308 23.641-18.26755 49.533-20.539032 76.807l221.101332 18.927-221.101332 18.927c2.271482 27.274 9.408232 53.167 20.539032 76.807l200.9803-94.177-182.0223 126.946c15.2618 21.898 34.3179 40.954 56.2154 56.215l126.9459-182.021-94.176 200.979c23.64 11.131 49.532 18.268 76.806 20.539l18.927-221.101 18.927 221.101c27.274-2.271 53.166-9.408 76.806-20.539l-94.176-200.979 126.946 182.021c21.897-15.261 40.954-34.317 56.215-56.215l-182.022-126.946 200.98 94.177c11.131-23.64 18.268-49.533 20.539-76.807l-221.101-18.927 221.101-18.927c-2.271-27.274-9.407-53.166-20.538-76.806l-200.98 94.176 182.022-126.9457c-15.262-21.8974-34.318-40.9536-56.216-56.2156l-126.946 182.0213 94.176-200.9793c-23.64-11.1308-49.532-18.26706-76.806-20.538788l-18.927 221.101088z",
					fill: "inherit",
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
				return f
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "q", (function() {
				return E
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "p", (function() {
				return I
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "a", (function() {
				return N
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "l", (function() {
				return M
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/reddit/featureFlags/index.ts"),
				c = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = r("./src/reddit/selectors/postCreations.ts");
			const o = [],
				i = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = w(e, {
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
					const r = _(e, t);
					if (r) return r.mainHeader
				},
				b = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = _(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					const r = f(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				x = (e, t) => {
					const r = f(e, t);
					return r && r.amount || "0"
				},
				h = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(d.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = a.d.spPolls(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				k = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				I = (e, t) => {
					const r = P(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				_ = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const r = j(e, t);
					return r && r.walletProvider
				},
				N = (e, t) => {
					const r = w(e, t),
						n = j(e, t);
					return r && r.provider || n && n.provider
				},
				O = (e, t) => {
					const r = N(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const r = w(e, t),
						n = N(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const a = r && r.extra && r.extra.contracts,
						c = a && a.unlocked;
					return c && {
						address: c.address,
						symbol: c.token || "",
						decimals: c.decimals || 18,
						image: c.image
					}
				},
				C = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = w(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				M = (e, t) => {
					const r = j(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePurchaseModal.955876fa278097dbe834.js.map