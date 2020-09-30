// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.a2a51b96d18fdb581614.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, s) : []
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less": function(e, t, r) {
			e.exports = {
				link: "_3Xm1pMbPLD4-LimCPttJrx",
				wrapper: "_3J6-mHf2cWgDlC72639JFl"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "Vst2AR9_4M4Sa4GdU44ww"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_36fj-CehWYV4px8rNNfJ7l"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1hMuufUdWJuEiM0j1zuJRE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_22OSHb1gg9w0AIZCnJ0OLU",
				content: "_2ufo2cNthLAzO0GHHyZ4pz",
				footer: "pBiXUPSTxpS_BderhuZ1o",
				footerEducation: "_33aWIZevNirbJReK2qtyZT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = r("./src/reddit/selectors/tooltip.ts"),
				u = r("./node_modules/uuid/v4.js"),
				l = r.n(u),
				m = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/models/Badge/index.ts"),
				E = r("./src/reddit/models/Badge/managementPage.ts"),
				v = r("./src/reddit/selectors/economics.ts"),
				_ = r("./src/reddit/selectors/products.ts"),
				x = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				y = r("./src/reddit/actions/tooltip.ts"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				w = r("./src/reddit/controls/Button/index.tsx"),
				k = r("./src/reddit/helpers/economics/membershipPage.ts"),
				P = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				C = r.n(P);
			const N = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var S = Object(g.c)(Object(o.b)(N, e => ({
					onOpen: () => e(Object(y.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || l()(),
						n = t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more"
							}, x.defaults(e)), {
								subreddit: x.subreddit(e)
							})), e.onOpen()
						};
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, C.a.container)
					}, s.a.createElement(O.a, {
						className: C.a.wrapper,
						to: Object(k.a)(t, r),
						onClick: n
					}, s.a.createElement(I.a, {
						className: C.a.benefits,
						subredditId: e.subredditId
					})), s.a.createElement(w.k, {
						className: C.a.link,
						disabled: !e.subreddit,
						to: Object(k.a)(t, r),
						onClick: n
					}, j.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				B = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				H = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				M = r.n(H);
			var T = Object(g.c)(Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(y.i)()), e(Object(B.c)({
								badge: r,
								subredditId: n,
								initialView: E.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || l()();
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, M.a.container)
					}, s.a.createElement("div", null), s.a.createElement(w.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery"
							}, x.defaults(e)), {
								subreddit: x.subreddit(e)
							})), e.onOpen()
						}
					}, j.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				L = r("./src/reddit/actions/chat/toggle.ts"),
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				F = r.n(A);
			var G = Object(g.c)(Object(o.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(L.a)(r))
					}
				})((function(e) {
					const t = e.correlationId || l()();
					return s.a.createElement("footer", {
						className: Object(m.a)(F.a.container, e.className)
					}, s.a.createElement("div", null), s.a.createElement(w.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat"
							}, x.defaults(e)), {
								subreddit: x.subreddit(e)
							})), e.onStartChat()
						}
					}, j.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				R = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				D = r.n(R);
			var V, W = Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(y.i)()), e(Object(B.c)({
								badge: r,
								subredditId: n,
								initialView: E.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, D.a.container)
					}, s.a.createElement("div", null), s.a.createElement(w.i, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, j.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				Z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				U = r.n(Z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(V || (V = {}));
			class z extends s.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || l()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId
					}, x.defaults(e)), {
						subreddit: x.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(h.d)(e.badge);
						return e.userId && (p.b.has(e.badge.id) || p.b.has(e.badge.type)) ? V.LFG : t && e.userIsPremiumSubscriber === v.a.Subscribed || !t && e.ownedBadge ? V.Management : t && e.userIsPremiumSubscriber !== v.a.Subscribed && e.premiumSubscriptionsEnabled ? V.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? V.Gallery : void 0
					}(this.props);
					return s.a.createElement("div", {
						className: Object(m.a)(this.props.className, U.a.container),
						style: this.props.style
					}, s.a.createElement(b.a, {
						badge: this.props.badge,
						className: U.a.content,
						subredditId: this.props.subredditId,
						type: Object(E.d)(this.props.badge.placement)
					}), e === V.Management && s.a.createElement(W, {
						className: U.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.Education && s.a.createElement(S, {
						className: U.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === V.Gallery && s.a.createElement(T, {
						className: U.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.LFG && s.a.createElement(G, {
						className: U.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const J = Object(d.c)({
				ownedBadge: v.m,
				premiumSubscriptionsEnabled: f.d.spSpecialMemberships,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(h.c)(r)) return r;
					const n = r.type;
					return Object(_.a)(e, n)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(v.x)(e, r)
				}
			});
			var K = Object(g.c)(Object(o.b)(J)(z));
			const X = Object(c.a)(K, [a.a.Click, a.a.Keydown]);
			const q = Object(d.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(i.b)(r)(e)
				}
			});
			t.default = Object(o.b)(q)((function(e) {
				return e.isOpen ? s.a.createElement(X, e) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, r) {
			e.exports = {
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				description: "_3K0DQ21Q-wH4kETiMxiaNo",
				fullWidth: "_1HsWtVhofw3GuWXgyObfz4",
				info: "_30GDKdvss889YcOkeQXbVz",
				image: "_3vLr4Xzqw3Fx7cHwT9nDP7",
				progressAmount: "_2zNarMBPc02JsQXIFrSaFR",
				progressBar: "_3hmtSMaZH5Wkj8Ftna8Wy1",
				progressContainer: "_2F36VBMAcVYDe4GdSPiMdk",
				progressThumb: "_3i-h-gzh3Oskm1I04nHRT3",
				title: "_2ZnmMFDAIE41ruoyRhfq3L",
				wrapper: "_2se6JR27PiBUl4k4nrgmAS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				u = r("./src/reddit/models/Badge/managementPage.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				m = r("./src/reddit/selectors/gov.ts"),
				b = r("./node_modules/reselect/es/index.js"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = r.n(p);
			const f = Object(b.c)({
				collection: (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					if (r.collections) {
						const t = Object.keys(r.collections);
						if (t.length) {
							const r = t[0];
							return Object(l.h)(e, {
								collectionId: r,
								subredditId: n
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: r,
						subredditId: n,
						type: s
					} = t;
					const o = e.user.account;
					if (o && !Object(i.c)(r) && s === u.a.Achievement && c.a[r.id]) {
						const t = Object(m.j)(e, {
							subredditId: n,
							userId: o.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: c.a[r.id]
						}
					}
				}
			});
			t.a = Object(d.b)(f)((function(e) {
				const t = e.type === u.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === u.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: d
					} = Object(i.b)(60, 60, e.badge),
					c = e.progress;
				return o.a.createElement("article", {
					className: Object(a.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: g.a.wrapper
				}, o.a.createElement("img", {
					className: g.a.image,
					src: d,
					srcSet: "".concat(s, ", ").concat(d, " 2x")
				}), o.a.createElement("div", {
					className: g.a.info
				}, o.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), o.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), c && c.complete < c.total && o.a.createElement("div", {
					className: g.a.progressContainer
				}, o.a.createElement("div", {
					className: g.a.progressBar
				}, o.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: "".concat(c.complete / c.total * 100, "%")
					}
				})), o.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						r = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(r)
				}(c))), o.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var n, s, o, d;

			function a(e) {
				const {
					platform: t,
					playerType: r,
					region: n,
					style: s
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(s, "/").concat(n, "_").concat(t, "_").concat(r, "_").concat(s, ".svg")
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})), r.d(t, "c", (function() {
					return o
				})), r.d(t, "d", (function() {
					return a
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(d || (d = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/flattenDeep.js"),
				s = r.n(n),
				o = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				a = new Set(s()(Object.keys(o.a).map(e => Object.keys(o.b).map(t => Object.keys(o.c).map(r => "".concat(r, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "l", (function() {
				return f
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function d(e) {
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

			function a(e) {
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

			function c(e) {
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
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
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
			async function f(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
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
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "t", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "q", (function() {
				return x
			})), r.d(t, "r", (function() {
				return j
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "m", (function() {
				return y
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "f", (function() {
				return P
			})), r.d(t, "s", (function() {
				return C
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "l", (function() {
				return S
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				d = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				a = r("./src/reddit/selectors/postCreations.ts");
			const c = [],
				i = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
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
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				b = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				p = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					const r = g(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				h = (e, t) => {
					const r = g(e, t);
					return r && r.amount || "0"
				},
				E = (e, t) => {
					if (Object(d.a)(e)) {
						const t = Object(a.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = o.d.spPolls(e),
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
				_ = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || c
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				O = (e, t) => {
					const r = C(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const r = I(e, t);
					return r && r.walletProvider
				},
				k = (e, t) => {
					const r = w(e, t),
						n = I(e, t);
					return r && r.provider || n && n.provider
				},
				P = (e, t) => {
					const r = k(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				C = (e, t) => {
					const r = w(e, t),
						n = k(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						d = o && o.unlocked;
					return d && {
						address: d.address,
						symbol: d.token || "",
						decimals: d.decimals || 18,
						image: d.image
					}
				},
				N = (e, t) => {
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
				S = (e, t) => {
					const r = I(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				o = (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							d = Date.now();
						let a = !1;
						return s.forEach(e => {
							const t = o[e];
							t && t.type === r && t.endsAt > d && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.a2a51b96d18fdb581614.js.map