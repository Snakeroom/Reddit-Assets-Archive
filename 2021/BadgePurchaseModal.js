// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.0a618e7976ddcb473464.js
// Retrieved at 5/12/2021, 12:40:08 PM by Reddit Dataminer v1.0.0
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
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/products.ts"),
				u = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/prettyPrintNumber/index.ts")),
				l = r("./src/lib/timeUntil/index.ts"),
				m = r("./src/reddit/actions/badge.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/components/Governance/Token/index.tsx"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				g = r("./src/reddit/icons/svgs/Clock/index.tsx"),
				x = r("./src/reddit/icons/svgs/Sunburst/index.tsx"),
				h = r("./src/reddit/models/Badge/index.ts"),
				v = r("./src/reddit/selectors/gov.ts"),
				y = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				k = r("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				E = r.n(k);

			function I(e) {
				return s.a.createElement("header", {
					className: E.a.header
				}, e.children, s.a.createElement(y.a, {
					afterClose: e.afterClose
				}))
			}
			var _ = r("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				j = r.n(_);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(a.c)({
				badge: (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const n = r.subredditId,
							s = Object.keys(e.user.ownedBadges[n] || {}).map(t => e.badges.models[t]).filter(Boolean).filter(e => e.type === t);
						if (s.length) return s[0]
					}
				},
				product: (e, {
					productId: t
				}) => Object(i.a)(e, t),
				wallet: (e, {
					productId: t
				}) => {
					const r = Object(i.a)(e, t);
					if (r) {
						const t = r.subredditId;
						return Object(v.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var O = Object(d.b)(w, e => ({
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
					}, N._("you got a new badge!", null, {
						hk: "1dFWkt"
					})), s.a.createElement("div", {
						className: j.a.content
					}, function(e) {
						const t = Object(h.d)(128, 128, e);
						return s.a.createElement(n.Fragment, null, s.a.createElement(x.a, {
							className: j.a.sunburst
						}), s.a.createElement("img", {
							className: j.a.image,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}))
					}(e.badge), (e.badge, o = e.product, s.a.createElement("div", {
						className: j.a.expiry
					}, N._("Expires in {clock}{timeLeft}", [N._param("clock", s.a.createElement(g.a, {
						className: j.a.clock
					})), N._param("timeLeft", Object(l.a)(new Date(Date.now() + 1e3 * o.duration), !0))], {
						hk: "1nLM5D"
					})))), s.a.createElement("footer", {
						className: j.a.footer
					}, (a = e.wallet, c = e.product.subredditId, s.a.createElement("div", {
						className: j.a.wallet
					}, N._("You have {token}{amount}", [N._param("token", s.a.createElement(p.a, {
						grey: !0,
						className: j.a.tokenSymbol,
						subredditId: c
					})), N._param("amount", Object(u.a)(a.amount))], {
						hk: "2uBJCn"
					}))), (t = e.badge, r = e.onApplyBadge, d = e.onClose, s.a.createElement("div", {
						className: j.a.controls
					}, s.a.createElement(f.o, {
						onClick: d
					}, N._("done", null, {
						hk: "1mAQca"
					})), s.a.createElement(f.i, {
						onClick: () => r(t.subredditId, t.id)
					}, N._("apply badge", null, {
						hk: "25p6rC"
					})))))) : null;
					var t, r, d, a, c, o
				})),
				P = r("./src/reddit/actions/product.ts"),
				C = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = r("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				B = r.n(M);
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const T = Object(a.c)({
				product: (e, {
					productId: t
				}) => Object(i.a)(e, t),
				purchaseInProgress: (e, {
					productId: t
				}) => !!e.products.api.purchase.pending[t],
				tokenName: (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					return Object(v.n)(e, {
						subredditId: r ? r.subredditId : void 0
					})
				}
			});
			var S = Object(d.b)(T, (e, {
					productId: t
				}) => ({
					onPurchase: () => e(Object(P.i)({
						productId: t
					}))
				}))((function(e) {
					return e.product ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(I, null, L._("get badge", null, {
						hk: "36uzzU"
					})), s.a.createElement("div", {
						className: B.a.content
					}, function(e) {
						const t = Object(h.d)(96, 96, e);
						return s.a.createElement("img", {
							className: B.a.badgeImage,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						})
					}(e.product), (d = e.product, s.a.createElement("div", {
						className: B.a.badgeName
					}, d.title)), function(e) {
						return s.a.createElement("div", {
							className: B.a.badgeDesc
						}, e.description)
					}(e.product), function(e) {
						return s.a.createElement("div", {
							className: B.a.badgesNumLeft
						}, L._("{numerator}/{total} left", [L._param("numerator", Object(u.a)(e.quantityLeft || "")), L._param("total", Object(u.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product)), s.a.createElement("footer", {
						className: B.a.footer
					}, function(e) {
						if (!e.price) return null;
						return s.a.createElement("div", {
							className: B.a.badgePrice
						}, s.a.createElement(p.a, {
							className: B.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(u.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, r = e.tokenName, n = e.onPurchase, s.a.createElement(f.i, {
						onClick: n
					}, t ? s.a.createElement(C.a, {
						className: B.a.loadingIcon,
						sizePx: 20
					}) : L._("convert {tokenName}", [L._param("tokenName", r)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, r, n, d
				})),
				R = r("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				U = r.n(R);
			const H = Object(a.c)({
					alreadyOwned: i.b
				}),
				z = Object(d.b)(H);
			t.default = Object(c.a)(z((function(e) {
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
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				u = r.n(i);
			t.a = Object(d.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(c.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(o.a, {
					className: Object(a.a)(u.a.closeIcon, e.className),
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
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/gov.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				l = r.n(u);
			const m = Object(a.c)({
				tokenSymbol: i.o
			});
			t.a = Object(d.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${c.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(o.a)(l.a.grey, e.className),
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
				d = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(d.a)(c.a.loadingIcon, t, {
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
				return a
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return x
			}));
			var n, s = r("./src/config.ts"),
				d = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
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

			function o(e) {
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
			async function i(e, t, r) {
				return Object(d.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(d.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(d.a)(e, {
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
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				g = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function x(e, t) {
				return await Object(d.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, r) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				d = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Clock/index.m.less"),
				c = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(d.a)(c.a.clock, e.className),
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
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function d(e) {
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
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "o", (function() {
				return x
			})), r.d(t, "m", (function() {
				return h
			})), r.d(t, "k", (function() {
				return y
			})), r.d(t, "r", (function() {
				return k
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return N
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const d = [],
				a = {},
				c = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = k(e, {
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
				i = (e, t) => {
					const r = v(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				l = (e, t) => {
					const r = v(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : a
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				p = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				f = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || c,
				h = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const r = y(e, t);
					return r && r.walletProvider
				},
				E = (e, t) => {
					const r = k(e, t),
						n = y(e, t);
					return r && r.provider || n && n.provider
				},
				I = (e, t) => {
					const r = E(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const r = k(e, t),
						n = E(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const d = r && r.extra && r.extra.contracts,
						a = d && d.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				j = (e, {
					subredditId: t
				}) => {
					const r = k(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				N = (e, t) => {
					const r = y(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				d = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const n = r.subredditId,
							s = Object.keys(e.user.ownedBadges[n] || {}),
							d = e.badges.models,
							a = Date.now();
						let c = !1;
						return s.forEach(e => {
							const r = d[e];
							r && r.type === t && r.endsAt > a && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePurchaseModal.0a618e7976ddcb473464.js.map