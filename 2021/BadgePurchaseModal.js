// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.92af1e0fc5113852e995.js
// Retrieved at 7/13/2021, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePurchaseModal"], {
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
				return d
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "j", (function() {
				return g
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const d = Object(n.a)(a.a),
				o = Object(n.a)(a.b),
				i = Object(n.a)(a.c),
				u = Object(n.a)(a.d),
				l = Object(n.a)(a.e),
				m = Object(n.a)(a.f),
				b = Object(n.a)(a.g),
				p = Object(n.a)(a.h),
				f = Object(n.a)(a.i),
				g = e => Object(s.h)(c.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
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
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/products.ts"),
				u = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/prettyPrintNumber/index.ts")),
				l = r("./src/lib/timeUntil/index.ts"),
				m = r("./src/reddit/actions/badge.ts"),
				b = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				f = r("./src/reddit/components/Governance/Token/index.tsx"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/icons/svgs/Clock/index.tsx"),
				h = r("./src/reddit/icons/svgs/Sunburst/index.tsx"),
				x = r("./src/reddit/models/Badge/index.ts"),
				y = r("./src/reddit/models/Badge/managementPage.ts"),
				j = r("./src/reddit/selectors/gov.ts"),
				_ = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				E = r("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				k = r.n(E);

			function O(e) {
				return s.a.createElement("header", {
					className: k.a.header
				}, e.children, s.a.createElement(_.a, {
					afterClose: e.afterClose
				}))
			}
			var I = r("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				w = r.n(I);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const C = Object(a.c)({
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
						return Object(j.d)(e, {
							subredditId: t
						})
					}
				}
			});
			var P = Object(c.b)(C, e => ({
					onApplyBadge: (t, r) => {
						e(Object(m.i)({
							badgeIds: [r],
							subredditId: t
						})), e(Object(p.f)())
					},
					onClose: t => {
						e(Object(p.f)()), e(Object(b.c)({
							subredditId: t,
							initialView: y.c.MyBadges
						}))
					}
				}))((function({
					badge: e,
					className: t,
					onApplyBadge: r,
					onClose: c,
					product: a,
					wallet: d
				}) {
					return e && a && d ? s.a.createElement("div", {
						className: t
					}, s.a.createElement(O, {
						afterClose: () => c(e.subredditId)
					}, N._("You got a new badge!", null, {
						hk: "13PLeW"
					})), s.a.createElement("div", {
						className: w.a.content
					}, function(e) {
						const t = Object(x.d)(128, 128, e);
						return s.a.createElement(n.Fragment, null, s.a.createElement(h.a, {
							className: w.a.sunburst
						}), s.a.createElement("img", {
							className: w.a.image,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}))
					}(e), function(e, t) {
						return s.a.createElement("div", {
							className: w.a.expiry
						}, N._("Expires in {clock}{timeLeft}", [N._param("clock", s.a.createElement(v.a, {
							className: w.a.clock
						})), N._param("timeLeft", Object(l.a)(new Date(Date.now() + 1e3 * t.duration), !0))], {
							hk: "1nLM5D"
						}))
					}(0, a)), s.a.createElement("footer", {
						className: w.a.footer
					}, function(e, t) {
						return s.a.createElement("div", {
							className: w.a.wallet
						}, N._("You have {token}{amount}", [N._param("token", s.a.createElement(f.a, {
							grey: !0,
							className: w.a.tokenSymbol,
							subredditId: t
						})), N._param("amount", Object(u.a)(e.amount))], {
							hk: "2uBJCn"
						}))
					}(d, a.subredditId), function(e, t, r) {
						return s.a.createElement("div", {
							className: w.a.controls
						}, s.a.createElement(g.o, {
							onClick: () => r(e.subredditId)
						}, N._("Done", null, {
							hk: "36WZte"
						})), s.a.createElement(g.i, {
							onClick: () => t(e.subredditId, e.id)
						}, N._("Apply badge", null, {
							hk: "4nWjqv"
						})))
					}(e, r, c))) : null
				})),
				M = r("./src/reddit/actions/product.ts"),
				L = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = r("./src/reddit/selectors/crypto/points.ts"),
				R = r("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				A = r.n(R);
			const {
				fbt: T
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const U = Object(a.c)({
				product: (e, {
					productId: t
				}) => Object(i.a)(e, t),
				purchaseInProgress: (e, {
					productId: t
				}) => !!e.products.api.purchase.pending[t],
				tokenName: (e, {
					productId: t
				}) => {
					var r;
					const n = e.products.models[t];
					return (null === (r = Object(B.b)(e, null == n ? void 0 : n.subredditId)) || void 0 === r ? void 0 : r.name) || ""
				}
			});
			var S = Object(c.b)(U, (e, {
					productId: t
				}) => ({
					onPurchase: () => e(Object(M.h)({
						productId: t
					}))
				}))((function(e) {
					return e.product ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(O, null, T._("get badge", null, {
						hk: "36uzzU"
					})), s.a.createElement("div", {
						className: A.a.content
					}, function(e) {
						const t = Object(x.d)(96, 96, e);
						return s.a.createElement("img", {
							className: A.a.badgeImage,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						})
					}(e.product), (c = e.product, s.a.createElement("div", {
						className: A.a.badgeName
					}, c.title)), function(e) {
						return s.a.createElement("div", {
							className: A.a.badgeDesc
						}, e.description)
					}(e.product), function(e) {
						return s.a.createElement("div", {
							className: A.a.badgesNumLeft
						}, T._("{numerator}/{total} left", [T._param("numerator", Object(u.a)(e.quantityLeft || "")), T._param("total", Object(u.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product)), s.a.createElement("footer", {
						className: A.a.footer
					}, function(e) {
						if (!e.price) return null;
						return s.a.createElement("div", {
							className: A.a.badgePrice
						}, s.a.createElement(f.a, {
							className: A.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(u.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, r = e.tokenName, n = e.onPurchase, s.a.createElement(g.i, {
						onClick: n
					}, t ? s.a.createElement(L.a, {
						className: A.a.loadingIcon,
						sizePx: 20
					}) : T._("convert {tokenName}", [T._param("tokenName", r)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, r, n, c
				})),
				D = r("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				z = r.n(D);
			const H = Object(a.c)({
					alreadyOwned: i.b
				}),
				q = Object(c.b)(H);
			t.default = Object(d.a)(q((function(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(z.a.container, e.className)
				}, e.alreadyOwned ? s.a.createElement(P, {
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
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				u = r.n(i);
			t.a = Object(c.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(d.f)()), t && t()
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
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/crypto/points.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				l = r.n(u);
			const m = Object(a.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(c.b)(m)((function(e) {
				var t;
				const r = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!r) return null;
				const n = e.grey ? r.greyVector || r.grey : r.filledVector || r.filled,
					c = `${d.a.assetPath}/${n}`;
				if (e.grey && c.endsWith(".svg")) {
					const t = `url(${c}) center/cover`;
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
				s = r.n(n),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				d = r.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(c.a)(d.a.loadingIcon, t, {
					[d.a.mCentered]: e
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
				return d
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "n", (function() {
				return h
			}));
			var n, s = r("./src/config.ts"),
				c = r("./src/reddit/endpoints/governance/requester.ts");

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

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
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
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function i(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, r) {
				return Object(c.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(c.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(c.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const b = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				g = e => ({
					type: "subscribe",
					subredditId: e
				}),
				v = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function h(e, t) {
				return await Object(c.a)(e, {
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
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Clock/index.m.less"),
				d = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(c.a)(d.a.clock, e.className),
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
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function c(e) {
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				c = r("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var d = (e = a, t) => {
					switch (t.type) {
						case c.a: {
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
				o = r("./src/reddit/actions/governance/constants.ts");
			const i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, r, n, s, c;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					d = null == a ? void 0 : a.contracts,
					o = null == d ? void 0 : d.unlocked,
					i = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					l = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					m = (null == o ? void 0 : o.decimals) || 0,
					b = "1" + "0".repeat(m);
				return {
					blockchainProvider: i,
					contractAddress: (null == o ? void 0 : o.address) || "",
					contracts: d,
					decimals: m,
					displayConversion: b,
					images: e.images || u,
					inTransition: l,
					name: e.name,
					nomenclature: null === (c = e.extra) || void 0 === c ? void 0 : c.nomenclature,
					polls: e.polls,
					symbol: (null == o ? void 0 : o.token) || ""
				}
			}
			var m = (e = i, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: l(n)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = (e = b, t) => {
				switch (t.type) {
					case o.n: {
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
				claims: d,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/contexts/PageLayer/index.tsx"),
				c = r("./src/reddit/endpoints/governance/crypto.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				d = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: d.a
				}
			});
			const o = (e, t) => {
				var r, n, s;
				return t ? null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function i() {
				const e = Object(s.ab)(),
					t = Object(n.e)(t => Object(s.q)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => o(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const u = (e, t) => {
				var r;
				const n = null === (r = o(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === c.a.Ethereum || n === c.a.Rinkeby || n === c.a.EthTraderEthereum || n === c.a.EthTraderRinkeby || n === c.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				c = {},
				a = (e, t) => {
					const r = b(e, t);
					if (r) return r.mainHeader
				},
				d = (e, t) => {
					const r = b(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				o = (e, t) => {
					const r = b(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				u = (e, t) => {
					const r = i(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				l = (e, t) => {
					const r = i(e, t);
					return r && r.amount || "0"
				},
				m = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || s
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				c = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const n = r.subredditId,
							s = Object.keys(e.user.ownedBadges[n] || {}),
							c = e.badges.models,
							a = Date.now();
						let d = !1;
						return s.forEach(e => {
							const r = c[e];
							r && r.type === t && r.endsAt > a && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePurchaseModal.92af1e0fc5113852e995.js.map