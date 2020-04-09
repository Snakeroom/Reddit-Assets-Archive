// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.8d2a7a605e691f87240c.js
// Retrieved at 4/9/2020, 2:30:05 PM by Reddit Dataminer v1.0.0
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
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				m = r.n(l),
				u = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/featureFlags/index.ts"),
				_ = r("./src/reddit/models/Badge/index.ts"),
				h = r("./src/reddit/models/Badge/managementPage.ts"),
				E = r("./src/reddit/selectors/economics.ts"),
				j = r("./src/reddit/selectors/products.ts"),
				v = r("./src/reddit/selectors/telemetry.ts"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = r("./src/reddit/actions/tooltip.ts"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				C = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/reddit/helpers/economics/membershipPage.ts"),
				S = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				k = r.n(S);
			const N = Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var w = Object(g.c)(Object(n.b)(N, e => ({
					onOpen: () => e(Object(P.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || m()(),
						s = t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more"
							}, v.defaults(e), {
								subreddit: v.subreddit(e)
							})), e.onOpen()
						};
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, k.a.container)
					}, o.a.createElement(x.a, {
						className: k.a.wrapper,
						to: Object(B.a)(t, r),
						onClick: s
					}, o.a.createElement(I.a, {
						className: k.a.benefits,
						subredditId: e.subredditId
					})), o.a.createElement(C.h, {
						className: k.a.link,
						disabled: !e.subreddit,
						to: Object(B.a)(t, r),
						onClick: s
					}, O.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				y = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				M = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				L = r.n(M);
			var F = Object(g.c)(Object(n.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(y.c)({
								badge: r,
								subredditId: s,
								initialView: h.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, L.a.container)
					}, o.a.createElement("div", null), o.a.createElement(C.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery"
							}, v.defaults(e), {
								subreddit: v.subreddit(e)
							})), e.onOpen()
						}
					}, O.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				H = r("./src/reddit/actions/chat/toggle.ts"),
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				G = r.n(A);
			var D = Object(g.c)(Object(n.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(H.a)(r))
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return o.a.createElement("footer", {
						className: Object(u.a)(G.a.container, e.className)
					}, o.a.createElement("div", null), o.a.createElement(C.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat"
							}, v.defaults(e), {
								subreddit: v.subreddit(e)
							})), e.onStartChat()
						}
					}, O.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				T = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				V = r.n(T);
			var W, Z = Object(n.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(y.c)({
								badge: r,
								subredditId: s,
								initialView: h.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return o.a.createElement("footer", {
						className: Object(u.a)(e.className, V.a.container)
					}, o.a.createElement("div", null), o.a.createElement(C.f, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, O.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				J = r.n(z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(W || (W = {}));
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
					}, v.defaults(e), {
						subreddit: v.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(_.d)(e.badge);
						return e.userId && (p.b.has(e.badge.id) || p.b.has(e.badge.type)) ? W.LFG : t && e.userIsPremiumSubscriber === E.b.Subscribed || !t && e.ownedBadge ? W.Management : t && e.userIsPremiumSubscriber !== E.b.Subscribed && e.premiumSubscriptionsEnabled ? W.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? W.Gallery : void 0
					}(this.props);
					return o.a.createElement("div", {
						className: Object(u.a)(this.props.className, J.a.container),
						style: this.props.style
					}, o.a.createElement(b.a, {
						badge: this.props.badge,
						className: J.a.content,
						subredditId: this.props.subredditId,
						type: Object(h.d)(this.props.badge.placement)
					}), e === W.Management && o.a.createElement(Z, {
						className: J.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.Education && o.a.createElement(w, {
						className: J.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === W.Gallery && o.a.createElement(F, {
						className: J.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.LFG && o.a.createElement(D, {
						className: J.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const X = Object(a.c)({
				ownedBadge: E.q,
				premiumSubscriptionsEnabled: f.d.spPremiumSubscriptions,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(_.c)(r)) return r;
					const s = r.type;
					return Object(j.a)(e, s)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(E.D)(e, r)
				}
			});
			var U = Object(g.c)(Object(n.b)(X)(K));
			const R = Object(c.a)(U, [d.a.Click, d.a.Keydown]);
			const q = Object(a.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(i.b)(r)(e)
				}
			});
			t.default = Object(n.b)(q)((function(e) {
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				u = r("./src/reddit/selectors/gov.ts"),
				b = r("./node_modules/reselect/es/index.js"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = r.n(p);
			const f = Object(b.c)({
				collection: (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					if (r.collections) {
						const t = Object.keys(r.collections);
						if (t.length) {
							const r = t[0];
							return Object(m.j)(e, {
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
					if (n && !Object(i.c)(r) && o === l.a.Achievement && c.a[r.id]) {
						const t = Object(u.i)(e, {
							subredditId: s,
							userId: n.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: c.a[r.id]
						}
					}
				}
			});
			t.a = Object(a.b)(f)((function(e) {
				const t = e.type === l.a.Loyalty ? s.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? s.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : s.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: o,
						url2x: a
					} = Object(i.b)(60, 60, e.badge),
					c = e.progress;
				return n.a.createElement("article", {
					className: Object(d.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, n.a.createElement("div", {
					className: g.a.wrapper
				}, n.a.createElement("img", {
					className: g.a.image,
					src: a,
					srcSet: "".concat(o, ", ").concat(a, " 2x")
				}), n.a.createElement("div", {
					className: g.a.info
				}, n.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), n.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), c && c.complete < c.total && n.a.createElement("div", {
					className: g.a.progressContainer
				}, n.a.createElement("div", {
					className: g.a.progressBar
				}, n.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: "".concat(c.complete / c.total * 100, "%")
					}
				})), n.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						r = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(r)
				}(c))), n.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var s, o, n, a;

			function d(e) {
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
					return d
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
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/flattenDeep.js"),
				o = r.n(s),
				n = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const a = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(o()(Object.keys(n.a).map(e => Object.keys(n.b).map(t => Object.keys(n.c).map(r => "".concat(r, "_").concat(e, "_").concat(t, "_badge"))))))
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
							a = Date.now();
						let d = !1;
						return o.forEach(e => {
							const t = n[e];
							t && t.type === r && t.endsAt > a && (d = !0)
						}), d
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=SubredditPremiumBadgeHovercardTooltip.8d2a7a605e691f87240c.js.map