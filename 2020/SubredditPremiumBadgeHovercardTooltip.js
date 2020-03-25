// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.2fea84a25afd0d24768f.js
// Retrieved at 3/25/2020, 5:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				o = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? s(e, o) : []
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				m = r.n(l),
				u = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/featureFlags/index.ts"),
				E = r("./src/reddit/models/Badge/index.ts"),
				_ = r("./src/reddit/models/Badge/managementPage.ts"),
				h = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/products.ts"),
				j = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = r("./src/reddit/actions/tooltip.ts"),
				P = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				C = r("./src/reddit/helpers/economics/membershipPage.ts"),
				B = r("./src/reddit/i18n/utils.ts"),
				S = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				w = r.n(S);
			const N = Object(c.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var y = Object(g.c)(Object(n.b)(N, e => ({
					onOpen: () => e(Object(x.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || m()(),
						s = t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more"
							}, j.defaults(e), {
								subreddit: j.subreddit(e)
							})), e.onOpen()
						};
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, w.a.container)
					}, o.a.createElement(v.a, {
						className: w.a.wrapper,
						to: Object(C.a)(t, r),
						onClick: s
					}, o.a.createElement(P.a, {
						className: w.a.benefits,
						subredditId: e.subredditId
					})), o.a.createElement(I.h, {
						className: w.a.link,
						disabled: !e.subreddit,
						to: Object(C.a)(t, r),
						onClick: s
					}, Object(B.c)("Learn More")))
				}))),
				k = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				M = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				L = r.n(M);
			var H = Object(g.c)(Object(n.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(k.c)({
								badge: r,
								subredditId: s,
								initialView: _.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, L.a.container)
					}, o.a.createElement("div", null), o.a.createElement(I.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery"
							}, j.defaults(e), {
								subreddit: j.subreddit(e)
							})), e.onOpen()
						}
					}, Object(B.c)("Get")))
				}))),
				A = r("./src/reddit/actions/chat/toggle.ts"),
				F = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				G = r.n(F);
			var D = Object(g.c)(Object(n.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(A.a)(r))
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return o.a.createElement("footer", {
						className: Object(u.a)(G.a.container, e.className)
					}, o.a.createElement("div", null), o.a.createElement(I.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat"
							}, j.defaults(e), {
								subreddit: j.subreddit(e)
							})), e.onStartChat()
						}
					}, Object(B.c)("start chat")))
				}))),
				T = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				W = r.n(T);
			var V, z = Object(n.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(k.c)({
								badge: r,
								subredditId: s,
								initialView: _.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, W.a.container)
					}, o.a.createElement("div", null), o.a.createElement(I.f, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, Object(B.c)("View")))
				})),
				Z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				J = r.n(Z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(V || (V = {}));
			class K extends o.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId
					}, j.defaults(e), {
						subreddit: j.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(E.d)(e.badge);
						return e.userId && (p.b.has(e.badge.id) || p.b.has(e.badge.type)) ? V.LFG : t && e.userIsPremiumSubscriber === h.b.Subscribed || !t && e.ownedBadge ? V.Management : t && e.userIsPremiumSubscriber !== h.b.Subscribed && e.premiumSubscriptionsEnabled ? V.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? V.Gallery : void 0
					}(this.props);
					return o.a.createElement("div", {
						className: Object(u.a)(this.props.className, J.a.container),
						style: this.props.style
					}, o.a.createElement(b.a, {
						badge: this.props.badge,
						className: J.a.content,
						subredditId: this.props.subredditId,
						type: Object(_.d)(this.props.badge.placement)
					}), e === V.Management && o.a.createElement(z, {
						className: J.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.Education && o.a.createElement(y, {
						className: J.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === V.Gallery && o.a.createElement(H, {
						className: J.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.LFG && o.a.createElement(D, {
						className: J.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const U = Object(c.c)({
				ownedBadge: h.q,
				premiumSubscriptionsEnabled: f.d.spPremiumSubscriptions,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(E.c)(r)) return r;
					const s = r.type;
					return Object(O.a)(e, s)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(h.D)(e, r)
				}
			});
			var X = Object(g.c)(Object(n.b)(U)(K));
			const R = Object(d.a)(X, [a.a.Click, a.a.Keydown]);
			const Q = Object(c.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(i.b)(r)(e)
				}
			});
			t.default = Object(n.b)(Q)((function(e) {
				return e.isOpen ? o.a.createElement(R, e) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, r) {
			e.exports = {
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				i = r("./src/reddit/i18n/utils.ts"),
				l = r("./src/reddit/models/Badge/index.ts"),
				m = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/economics.ts"),
				b = r("./src/reddit/selectors/gov.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = r.n(p);
			const f = Object(c.c)({
				collection: (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					if (r.collections) {
						const t = Object.keys(r.collections);
						if (t.length) {
							const r = t[0];
							return Object(u.j)(e, {
								collectionId: r,
								subredditId: s
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: r,
						subredditId: s,
						type: o
					} = t;
					const n = e.user.account;
					if (n && !Object(l.c)(r) && o === m.a.Achievement && d.a[r.id]) {
						const t = Object(b.i)(e, {
							subredditId: s,
							userId: n.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: d.a[r.id]
						}
					}
				}
			});
			t.a = Object(n.b)(f)((function(e) {
				const t = e.type === m.a.Loyalty ? Object(i.c)("Loyalty Badge") : e.type === m.a.Achievement ? Object(i.c)("Achievement Badge") : Object(i.c)("Style Badge"),
					r = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: n
					} = Object(l.b)(60, 60, e.badge),
					c = e.progress;
				return o.a.createElement("article", {
					className: Object(a.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: g.a.wrapper
				}, o.a.createElement("img", {
					className: g.a.image,
					src: n,
					srcSet: "".concat(s, ", ").concat(n, " 2x")
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
			var s, o, n, c;

			function a(e) {
				const {
					platform: t,
					playerType: r,
					region: s,
					style: o
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(o, "/").concat(s, "_").concat(t, "_").concat(r, "_").concat(o, ".svg")
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return o
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "d", (function() {
					return a
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(s || (s = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(o || (o = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(n || (n = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/flattenDeep.js"),
				o = r.n(s),
				n = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				a = new Set(o()(Object.keys(n.a).map(e => Object.keys(n.b).map(t => Object.keys(n.c).map(r => "".concat(r, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const o = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				n = (e, t) => {
					let {
						productId: r
					} = t;
					const s = e.products.models[r];
					if (s) {
						const t = s.subredditId,
							o = Object.keys(e.user.ownedBadges[t] || {}),
							n = e.badges.models,
							c = Date.now();
						let a = !1;
						return o.forEach(e => {
							const t = n[e];
							t && t.type === r && t.endsAt > c && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=SubredditPremiumBadgeHovercardTooltip.2fea84a25afd0d24768f.js.map