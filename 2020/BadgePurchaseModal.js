// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.31b288478361d2267242.js
// Retrieved at 4/14/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/selectors/products.ts"),
				l = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/prettyPrintNumber/index.ts")),
				u = r("./src/lib/timeUntil/index.ts"),
				m = r("./src/reddit/actions/badge.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/components/Governance/Token/index.tsx"),
				g = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/icons/svgs/Clock/index.tsx");

			function x(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 450 450",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					clipRule: "evenodd",
					d: "m206.073.784912c-27.274 2.271728-53.166 9.407988-76.806 20.538788l94.176 200.9793-126.9464-182.0213c-21.8975 15.262-40.9531 34.3177-56.2149 56.2151l182.0213 126.9462-200.9793-94.177c-11.1308 23.641-18.26755 49.533-20.539032 76.807l221.101332 18.927-221.101332 18.927c2.271482 27.274 9.408232 53.167 20.539032 76.807l200.9803-94.177-182.0223 126.946c15.2618 21.898 34.3179 40.954 56.2154 56.215l126.9459-182.021-94.176 200.979c23.64 11.131 49.532 18.268 76.806 20.539l18.927-221.101 18.927 221.101c27.274-2.271 53.166-9.408 76.806-20.539l-94.176-200.979 126.946 182.021c21.897-15.261 40.954-34.317 56.215-56.215l-182.022-126.946 200.98 94.177c11.131-23.64 18.268-49.533 20.539-76.807l-221.101-18.927 221.101-18.927c-2.271-27.274-9.407-53.166-20.538-76.806l-200.98 94.176 182.022-126.9457c-15.262-21.8974-34.318-40.9536-56.216-56.2156l-126.946 182.0213 94.176-200.9793c-23.64-11.1308-49.532-18.26706-76.806-20.538788l-18.927 221.101088z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
			var v = r("./src/reddit/models/Badge/index.ts"),
				_ = r("./src/reddit/selectors/gov.ts"),
				h = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				I = r("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				j = r.n(I);

			function y(e) {
				return a.a.createElement("header", {
					className: j.a.header
				}, e.children, a.a.createElement(h.a, {
					afterClose: e.afterClose
				}))
			}
			var k = r("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				O = r.n(k);
			const {
				fbt: E
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const N = Object(c.c)({
				badge: (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							a = Object.keys(e.user.ownedBadges[t] || {}).map(t => e.badges.models[t]).filter(Boolean).filter(e => e.type === r);
						if (a.length) return a[0]
					}
				},
				language: e => e.user.language,
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
						return Object(_.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var w = Object(s.b)(N, e => ({
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
					return e.product && e.wallet && e.badge ? a.a.createElement("div", {
						className: e.className
					}, a.a.createElement(y, {
						afterClose: e.onOpenGallery
					}, E._("you got a new badge!", null, {
						hk: "1dFWkt"
					})), a.a.createElement("div", {
						className: O.a.content
					}, function(e) {
						const t = Object(v.b)(128, 128, e);
						return a.a.createElement(n.Fragment, null, a.a.createElement(x, {
							className: O.a.sunburst
						}), a.a.createElement("img", {
							className: O.a.image,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}))
					}(e.badge), (e.badge, o = e.product, i = e.language, a.a.createElement("div", {
						className: O.a.expiry
					}, E._("Expires in {clock}{timeLeft}", [E._param("clock", a.a.createElement(f.a, {
						className: O.a.clock
					})), E._param("timeLeft", Object(u.a)(i, new Date(Date.now() + 1e3 * o.duration), !0))], {
						hk: "1nLM5D"
					})))), a.a.createElement("footer", {
						className: O.a.footer
					}, (c = e.wallet, d = e.product.subredditId, a.a.createElement("div", {
						className: O.a.wallet
					}, E._("You have {token}{amount}", [E._param("token", a.a.createElement(p.a, {
						grey: !0,
						className: O.a.tokenSymbol,
						subredditId: d
					})), E._param("amount", Object(l.a)(c.amount))], {
						hk: "3gzKBX"
					}))), (t = e.badge, r = e.onApplyBadge, s = e.onClose, a.a.createElement("div", {
						className: O.a.controls
					}, a.a.createElement(g.n, {
						onClick: s
					}, E._("done", null, {
						hk: "1mAQca"
					})), a.a.createElement(g.f, {
						onClick: () => r(t.subredditId, t.id)
					}, E._("apply badge", null, {
						hk: "25p6rC"
					})))))) : null;
					var t, r, s, c, d, o, i
				})),
				P = r("./src/reddit/actions/product.ts"),
				C = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = r("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				B = r.n(M);
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			const S = Object(c.c)({
				language: e => e.user.language,
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
					return Object(_.p)(e, {
						subredditId: n ? n.subredditId : void 0
					})
				}
			});
			var U = Object(s.b)(S, (e, t) => {
					let {
						productId: r
					} = t;
					return {
						onPurchase: () => e(Object(P.i)({
							productId: r
						}))
					}
				})((function(e) {
					return e.product ? a.a.createElement("div", {
						className: e.className
					}, a.a.createElement(y, null, L._("get badge", null, {
						hk: "36uzzU"
					})), a.a.createElement("div", {
						className: B.a.content
					}, function(e) {
						const t = Object(v.b)(96, 96, e);
						return a.a.createElement("img", {
							className: B.a.badgeImage,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						})
					}(e.product), (s = e.product, a.a.createElement("div", {
						className: B.a.badgeName
					}, s.title)), function(e) {
						return a.a.createElement("div", {
							className: B.a.badgeDesc
						}, e.description)
					}(e.product), function(e, t) {
						return a.a.createElement("div", {
							className: B.a.badgesNumLeft
						}, L._("{numerator}/{total} left", [L._param("numerator", Object(l.a)(e.quantityLeft || "")), L._param("total", Object(l.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product, e.language)), a.a.createElement("footer", {
						className: B.a.footer
					}, function(e) {
						if (!e.price) return null;
						return a.a.createElement("div", {
							className: B.a.badgePrice
						}, a.a.createElement(p.a, {
							className: B.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(l.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, e.language, r = e.tokenName, n = e.onPurchase, a.a.createElement(g.f, {
						onClick: n
					}, t ? a.a.createElement(C.a, {
						className: B.a.loadingIcon,
						sizePx: 20
					}) : L._("convert {tokenName}", [L._param("tokenName", r)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, r, n, s
				})),
				H = r("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				T = r.n(H);
			const R = Object(c.c)({
					alreadyOwned: i.b
				}),
				q = Object(s.b)(R);
			t.default = Object(d.a)(q((function(e) {
				return a.a.createElement("div", {
					className: Object(o.a)(T.a.container, e.className)
				}, e.alreadyOwned ? a.a.createElement(w, {
					productId: e.productId
				}) : a.a.createElement(U, {
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
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = r.n(i);
			t.a = Object(s.b)(void 0, (e, t) => {
				let {
					afterClose: r
				} = t;
				return {
					onClose: () => {
						e(Object(d.f)()), r && r()
					}
				}
			})((function(e) {
				return a.a.createElement(o.a, {
					className: Object(c.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				o = r("./src/reddit/selectors/gov.ts");
			const i = Object(c.c)({
				tokenSymbol: o.q
			});
			t.a = Object(s.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return a.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n, a = r("./src/config.ts"),
				s = r("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, r) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function o(e, t, r) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function i(e, t, r) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: "".concat(a.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
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
				return g
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return h
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "s", (function() {
				return k
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "k", (function() {
				return P
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
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
					const n = k(e, {
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
				b = (e, t) => {
					const r = j(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = j(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(d.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = s.d.spPolls(e) || s.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				I = (e, t) => {
					const r = N(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const r = y(e, t);
					return r && r.walletProvider
				},
				O = (e, t) => {
					const r = k(e, t),
						n = y(e, t);
					return r && r.provider || n && n.provider
				},
				E = (e, t) => {
					const r = O(e, t);
					return r === a.a.Ethereum || r === a.a.Rinkeby
				},
				N = (e, t) => {
					const r = k(e, t),
						n = O(e, t);
					if (r && !r.inTransition && n === a.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const s = r && r.extra && r.extra.contracts,
						c = s && s.unlocked;
					return c && {
						address: c.address,
						symbol: c.token || "",
						decimals: c.decimals || 18,
						image: c.image
					}
				},
				w = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = k(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = y(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=BadgePurchaseModal.31b288478361d2267242.js.map