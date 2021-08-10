// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.c8d4bd57f0d64bce0c63.js
// Retrieved at 8/10/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["BadgePurchaseModal"], {
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "j", (function() {
				return g
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/constants/modals.ts"),
				d = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const a = Object(n.a)(d.a),
				o = Object(n.a)(d.b),
				i = Object(n.a)(d.c),
				l = Object(n.a)(d.d),
				u = Object(n.a)(d.e),
				m = Object(n.a)(d.f),
				b = Object(n.a)(d.g),
				p = Object(n.a)(d.h),
				f = Object(n.a)(d.i),
				g = e => Object(r.h)(c.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Badges/PurchaseModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_1Fg5LCvIOKUS-JIe719tTe"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Badges/PurchaseModal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_19-Cd3JIaIbz_X0vgaQq8w"
			}
		},
		"./src/reddit/components/Badges/PurchaseModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/selectors/products.ts"),
				l = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/prettyPrintNumber/index.ts")),
				u = s("./src/lib/timeUntil/index.ts"),
				m = s("./src/reddit/actions/badge.ts"),
				b = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				p = s("./src/reddit/actions/modal.ts"),
				f = s("./src/reddit/components/Governance/Token/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				v = s("./src/reddit/icons/svgs/Sunburst/index.tsx"),
				_ = s("./src/reddit/models/Badge/index.ts"),
				j = s("./src/reddit/models/Badge/managementPage.ts"),
				I = s("./src/reddit/selectors/gov.ts"),
				O = s("./src/reddit/components/Governance/ModalClose/index.tsx"),
				h = s("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				N = s.n(h);

			function E(e) {
				return r.a.createElement("header", {
					className: N.a.header
				}, e.children, r.a.createElement(O.a, {
					afterClose: e.afterClose
				}))
			}
			var k = s("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				y = s.n(k);
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(d.c)({
				badge: (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const n = s.subredditId,
							r = Object.keys(e.user.ownedBadges[n] || {}).map(t => e.badges.models[t]).filter(Boolean).filter(e => e.type === t);
						if (r.length) return r[0]
					}
				},
				product: (e, {
					productId: t
				}) => Object(i.a)(e, t),
				wallet: (e, {
					productId: t
				}) => {
					const s = Object(i.a)(e, t);
					if (s) {
						const t = s.subredditId;
						return Object(I.d)(e, {
							subredditId: t
						})
					}
				}
			});
			var C = Object(c.b)(w, e => ({
					onApplyBadge: (t, s) => {
						e(Object(m.i)({
							badgeIds: [s],
							subredditId: t
						})), e(Object(p.f)())
					},
					onClose: t => {
						e(Object(p.f)()), e(Object(b.c)({
							subredditId: t,
							initialView: j.c.MyBadges
						}))
					}
				}))((function({
					badge: e,
					className: t,
					onApplyBadge: s,
					onClose: c,
					product: d,
					wallet: a
				}) {
					return e && d && a ? r.a.createElement("div", {
						className: t
					}, r.a.createElement(E, {
						afterClose: () => c(e.subredditId)
					}, P._("You got a new badge!", null, {
						hk: "13PLeW"
					})), r.a.createElement("div", {
						className: y.a.content
					}, function(e) {
						const t = Object(_.d)(128, 128, e);
						return r.a.createElement(n.Fragment, null, r.a.createElement(v.a, {
							className: y.a.sunburst
						}), r.a.createElement("img", {
							className: y.a.image,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						}))
					}(e), function(e, t) {
						return r.a.createElement("div", {
							className: y.a.expiry
						}, P._("Expires in {clock}{timeLeft}", [P._param("clock", r.a.createElement(x.a, {
							className: y.a.clock
						})), P._param("timeLeft", Object(u.a)(new Date(Date.now() + 1e3 * t.duration), !0))], {
							hk: "1nLM5D"
						}))
					}(0, d)), r.a.createElement("footer", {
						className: y.a.footer
					}, function(e, t) {
						return r.a.createElement("div", {
							className: y.a.wallet
						}, P._("You have {token}{amount}", [P._param("token", r.a.createElement(f.a, {
							grey: !0,
							className: y.a.tokenSymbol,
							subredditId: t
						})), P._param("amount", Object(l.a)(e.amount))], {
							hk: "2uBJCn"
						}))
					}(a, d.subredditId), function(e, t, s) {
						return r.a.createElement("div", {
							className: y.a.controls
						}, r.a.createElement(g.o, {
							onClick: () => s(e.subredditId)
						}, P._("Done", null, {
							hk: "36WZte"
						})), r.a.createElement(g.i, {
							onClick: () => t(e.subredditId, e.id)
						}, P._("Apply badge", null, {
							hk: "4nWjqv"
						})))
					}(e, s, c))) : null
				})),
				M = s("./src/reddit/actions/product.ts"),
				B = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = s("./src/reddit/selectors/crypto/points.ts"),
				U = s("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				D = s.n(U);
			const {
				fbt: A
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const S = Object(d.c)({
				product: (e, {
					productId: t
				}) => Object(i.a)(e, t),
				purchaseInProgress: (e, {
					productId: t
				}) => !!e.products.api.purchase.pending[t],
				tokenName: (e, {
					productId: t
				}) => {
					var s;
					const n = e.products.models[t];
					return (null === (s = Object(L.b)(e, null == n ? void 0 : n.subredditId)) || void 0 === s ? void 0 : s.name) || ""
				}
			});
			var z = Object(c.b)(S, (e, {
					productId: t
				}) => ({
					onPurchase: () => e(Object(M.h)({
						productId: t
					}))
				}))((function(e) {
					return e.product ? r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(E, null, A._("get badge", null, {
						hk: "36uzzU"
					})), r.a.createElement("div", {
						className: D.a.content
					}, function(e) {
						const t = Object(_.d)(96, 96, e);
						return r.a.createElement("img", {
							className: D.a.badgeImage,
							src: t.url2x,
							srcSet: `${t.url}, ${t.url2x} 2x`
						})
					}(e.product), (c = e.product, r.a.createElement("div", {
						className: D.a.badgeName
					}, c.title)), function(e) {
						return r.a.createElement("div", {
							className: D.a.badgeDesc
						}, e.description)
					}(e.product), function(e) {
						return r.a.createElement("div", {
							className: D.a.badgesNumLeft
						}, A._("{numerator}/{total} left", [A._param("numerator", Object(l.a)(e.quantityLeft || "")), A._param("total", Object(l.a)(e.quantityTotal || ""))], {
							hk: "Ua52c"
						}))
					}(e.product)), r.a.createElement("footer", {
						className: D.a.footer
					}, function(e) {
						if (!e.price) return null;
						return r.a.createElement("div", {
							className: D.a.badgePrice
						}, r.a.createElement(f.a, {
							className: D.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(l.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, s = e.tokenName, n = e.onPurchase, r.a.createElement(g.i, {
						onClick: n
					}, t ? r.a.createElement(B.a, {
						className: D.a.loadingIcon,
						sizePx: 20
					}) : A._("convert {tokenName}", [A._param("tokenName", s)], {
						hk: "2wpeqV"
					}))))) : null;
					var t, s, n, c
				})),
				H = s("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				R = s.n(H);
			const T = Object(d.c)({
					alreadyOwned: i.b
				}),
				q = Object(c.b)(T);
			t.default = Object(a.a)(q((function(e) {
				return r.a.createElement("div", {
					className: Object(o.a)(R.a.container, e.className)
				}, e.alreadyOwned ? r.a.createElement(C, {
					productId: e.productId
				}) : r.a.createElement(z, {
					productId: e.productId
				}))
			})))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, s) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				o = s("./src/reddit/icons/svgs/Close/index.tsx"),
				i = s("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = s.n(i);
			t.a = Object(c.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(a.f)()), t && t()
				}
			}))((function(e) {
				return r.a.createElement(o.a, {
					className: Object(d.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/selectors/crypto/points.ts"),
				l = s("./src/reddit/components/Governance/Token/index.m.less"),
				u = s.n(l);
			const m = Object(d.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(i.b)(e, t)
			});
			t.a = Object(c.b)(m)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const n = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					c = `${a.a.assetPath}/${n}`;
				if (e.grey && c.endsWith(".svg")) {
					const t = `url(${c}) center/cover`;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: c
				})
			}))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(d);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => r.a.createElement("div", {
				className: Object(c.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				}
			})
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = s.n(d);
			t.a = e => r.a.createElement("svg", {
				className: Object(c.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Sunburst/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function c(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 450 450",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					clipRule: "evenodd",
					d: "m206.073.784912c-27.274 2.271728-53.166 9.407988-76.806 20.538788l94.176 200.9793-126.9464-182.0213c-21.8975 15.262-40.9531 34.3177-56.2149 56.2151l182.0213 126.9462-200.9793-94.177c-11.1308 23.641-18.26755 49.533-20.539032 76.807l221.101332 18.927-221.101332 18.927c2.271482 27.274 9.408232 53.167 20.539032 76.807l200.9803-94.177-182.0223 126.946c15.2618 21.898 34.3179 40.954 56.2154 56.215l126.9459-182.021-94.176 200.979c23.64 11.131 49.532 18.268 76.806 20.539l18.927-221.101 18.927 221.101c27.274-2.271 53.166-9.408 76.806-20.539l-94.176-200.979 126.946 182.021c21.897-15.261 40.954-34.317 56.215-56.215l-182.022-126.946 200.98 94.177c11.131-23.64 18.268-49.533 20.539-76.807l-221.101-18.927 221.101-18.927c-2.271-27.274-9.407-53.166-20.538-76.806l-200.98 94.176 182.022-126.9457c-15.262-21.8974-34.318-40.9536-56.216-56.2156l-126.946 182.0213 94.176-200.9793c-23.64-11.1308-49.532-18.26706-76.806-20.538788l-18.927 221.101088z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				c = {},
				d = (e, t) => {
					const s = b(e, t);
					if (s) return s.mainHeader
				},
				a = (e, t) => {
					const s = b(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				o = (e, t) => {
					const s = b(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : c
				},
				i = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const s = i(e, t),
						n = s && s.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				u = (e, t) => {
					const s = i(e, t);
					return s && s.amount || "0"
				},
				m = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/reddit/selectors/products.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/models/Product/index.ts");
			const r = (e, t) => {
					const s = e.products.models[t];
					if (s && s.type === n.a.Badge) return s
				},
				c = (e, {
					productId: t
				}) => {
					const s = e.products.models[t];
					if (s) {
						const n = s.subredditId,
							r = Object.keys(e.user.ownedBadges[n] || {}),
							c = e.badges.models,
							d = Date.now();
						let a = !1;
						return r.forEach(e => {
							const s = c[e];
							s && s.type === t && s.endsAt > d && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/BadgePurchaseModal.c8d4bd57f0d64bce0c63.js.map