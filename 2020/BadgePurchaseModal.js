// https://www.redditstatic.com/desktop2x/BadgePurchaseModal.3cf8c3375983f4ab9242.js
// Retrieved at 3/23/2020, 11:20:07 AM by Reddit Dataminer v1.0.0
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
				g = r("./src/reddit/components/Governance/Token/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/i18n/components.tsx"),
				x = r("./src/reddit/i18n/utils.ts"),
				v = r("./src/reddit/icons/svgs/Clock/index.tsx");

			function j(e) {
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
			var h = r("./src/reddit/models/Badge/index.ts"),
				I = r("./src/reddit/selectors/gov.ts"),
				y = r("./src/reddit/components/Governance/ModalClose/index.tsx"),
				O = r("./src/reddit/components/Badges/PurchaseModal/Header/index.m.less"),
				E = r.n(O);

			function w(e) {
				return s.a.createElement("header", {
					className: E.a.header
				}, e.children, s.a.createElement(y.a, {
					afterClose: e.afterClose
				}))
			}
			var N = r("./src/reddit/components/Badges/PurchaseModal/PostPurchase/index.m.less"),
				_ = r.n(N);
			const P = Object(c.c)({
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
						return Object(I.g)(e, {
							subredditId: t
						})
					}
				}
			});
			var k = Object(a.b)(P, e => ({
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
					}, s.a.createElement(w, {
						afterClose: e.onOpenGallery
					}, Object(x.c)("you got a new badge!")), s.a.createElement("div", {
						className: _.a.content
					}, function(e) {
						const t = Object(h.b)(128, 128, e);
						return s.a.createElement(n.Fragment, null, s.a.createElement(j, {
							className: _.a.sunburst
						}), s.a.createElement("img", {
							className: _.a.image,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						}))
					}(e.badge), (e.badge, o = e.product, i = e.language, s.a.createElement("div", {
						className: _.a.expiry
					}, s.a.createElement(f.c, null, "Expires in"), s.a.createElement(v.a, {
						className: _.a.clock
					}), Object(u.a)(i, new Date(Date.now() + 1e3 * o.duration), !0)))), s.a.createElement("footer", {
						className: _.a.footer
					}, (c = e.wallet, d = e.product.subredditId, s.a.createElement("div", {
						className: _.a.wallet
					}, s.a.createElement(f.c, null, "You have"), s.a.createElement(g.a, {
						grey: !0,
						className: _.a.tokenSymbol,
						subredditId: d
					}), Object(l.a)(c.amount))), (t = e.badge, r = e.onApplyBadge, a = e.onClose, s.a.createElement("div", {
						className: _.a.controls
					}, s.a.createElement(p.n, {
						onClick: a
					}, s.a.createElement(f.c, null, "done")), s.a.createElement(p.f, {
						onClick: () => r(t.subredditId, t.id)
					}, s.a.createElement(f.c, null, "apply badge")))))) : null;
					var t, r, a, c, d, o, i
				})),
				C = r("./src/app/strings/index.ts"),
				M = r("./src/reddit/actions/product.ts"),
				B = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = r("./src/reddit/components/Badges/PurchaseModal/PrePurchase/index.m.less"),
				S = r.n(L);
			const H = Object(c.c)({
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
					return Object(I.p)(e, {
						subredditId: n ? n.subredditId : void 0
					})
				}
			});
			var T = Object(a.b)(H, (e, t) => {
					let {
						productId: r
					} = t;
					return {
						onPurchase: () => e(Object(M.i)({
							productId: r
						}))
					}
				})((function(e) {
					return e.product ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(w, null, Object(x.c)("get badge")), s.a.createElement("div", {
						className: S.a.content
					}, function(e) {
						const t = Object(h.b)(96, 96, e);
						return s.a.createElement("img", {
							className: S.a.badgeImage,
							src: t.url2x,
							srcSet: "".concat(t.url, ", ").concat(t.url2x, " 2x")
						})
					}(e.product), (c = e.product, s.a.createElement("div", {
						className: S.a.badgeName
					}, c.title)), function(e) {
						return s.a.createElement("div", {
							className: S.a.badgeDesc
						}, e.description)
					}(e.product), function(e, t) {
						return s.a.createElement("div", {
							className: S.a.badgesNumLeft
						}, Object(C.a)(t, "badges.numLeft", {
							numerator: Object(l.a)(e.quantityLeft || ""),
							denominator: Object(l.a)(e.quantityTotal || "")
						}))
					}(e.product, e.language)), s.a.createElement("footer", {
						className: S.a.footer
					}, function(e) {
						if (!e.price) return null;
						return s.a.createElement("div", {
							className: S.a.badgePrice
						}, s.a.createElement(g.a, {
							className: S.a.tokenSymbol,
							subredditId: e.subredditId
						}), Object(l.a)(e.price))
					}(e.product), (t = e.purchaseInProgress, r = e.language, n = e.tokenName, a = e.onPurchase, s.a.createElement(p.f, {
						onClick: a
					}, t ? s.a.createElement(B.a, {
						className: S.a.loadingIcon,
						sizePx: 20
					}) : Object(C.a)(r, "badges.buy", {
						tokenName: n
					}))))) : null;
					var t, r, n, a, c
				})),
				U = r("./src/reddit/components/Badges/PurchaseModal/index.m.less"),
				R = r.n(U);
			const q = Object(c.c)({
					alreadyOwned: i.b
				}),
				A = Object(a.b)(q);
			t.default = Object(d.a)(A((function(e) {
				return s.a.createElement("div", {
					className: Object(o.a)(R.a.container, e.className)
				}, e.alreadyOwned ? s.a.createElement(k, {
					productId: e.productId
				}) : s.a.createElement(T, {
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
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				o = r("./src/reddit/selectors/gov.ts");
			const i = Object(c.c)({
				tokenSymbol: o.q
			});
			t.a = Object(a.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
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
			var n, s = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

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
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function o(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function i(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
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
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				c = r("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				o = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				i = e => d.has((Object(a.e)(e) || "").toLowerCase()) || o.has((Object(a.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: c.G,
					experimentName: n.fb
				}) === n.mb.Enabled
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
				return g
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "p", (function() {
				return j
			})), r.d(t, "q", (function() {
				return h
			})), r.d(t, "o", (function() {
				return I
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "r", (function() {
				return _
			})), r.d(t, "n", (function() {
				return P
			})), r.d(t, "k", (function() {
				return k
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
					const n = E(e, {
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
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				b = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				g = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const r = a.d.spPolls(e) || a.d.spKarmaPoints(e),
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
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				I = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const r = O(e, t);
					return r && r.walletProvider
				},
				w = (e, t) => {
					const r = E(e, t),
						n = O(e, t);
					return r && r.provider || n && n.provider
				},
				N = (e, t) => {
					const r = w(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby
				},
				_ = (e, t) => {
					const r = E(e, t),
						n = w(e, t);
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
				P = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = E(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const r = O(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=BadgePurchaseModal.3cf8c3375983f4ab9242.js.map