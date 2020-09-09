// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.395b145282f9ef012394.js
// Retrieved at 9/9/2020, 4:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? s(e, n) : []
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
				n = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				m = r.n(l),
				u = r("./src/lib/classNames/index.ts"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/models/Badge/index.ts"),
				_ = r("./src/reddit/models/Badge/managementPage.ts"),
				E = r("./src/reddit/selectors/economics.ts"),
				j = r("./src/reddit/selectors/products.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
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
			var w = Object(g.c)(Object(o.b)(N, e => ({
					onOpen: () => e(Object(P.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || m()(),
						s = t => {
							t.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more"
							}, O.defaults(e)), {
								subreddit: O.subreddit(e)
							})), e.onOpen()
						};
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, k.a.container)
					}, n.a.createElement(x.a, {
						className: k.a.wrapper,
						to: Object(B.a)(t, r),
						onClick: s
					}, n.a.createElement(I.a, {
						className: k.a.benefits,
						subredditId: e.subredditId
					})), n.a.createElement(C.h, {
						className: k.a.link,
						disabled: !e.subreddit,
						to: Object(B.a)(t, r),
						onClick: s
					}, v.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				y = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				M = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				L = r.n(M);
			var F = Object(g.c)(Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(y.c)({
								badge: r,
								subredditId: s,
								initialView: _.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, L.a.container)
					}, n.a.createElement("div", null), n.a.createElement(C.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery"
							}, O.defaults(e)), {
								subreddit: O.subreddit(e)
							})), e.onOpen()
						}
					}, v.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				H = r("./src/reddit/actions/chat/toggle.ts"),
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				G = r.n(A);
			var D = Object(g.c)(Object(o.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(H.a)(r))
					}
				})((function(e) {
					const t = e.correlationId || m()();
					return n.a.createElement("footer", {
						className: Object(u.a)(G.a.container, e.className)
					}, n.a.createElement("div", null), n.a.createElement(C.f, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => Object.assign(Object.assign({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat"
							}, O.defaults(e)), {
								subreddit: O.subreddit(e)
							})), e.onStartChat()
						}
					}, v.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				T = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				V = r.n(T);
			var W, Z = Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(y.c)({
								badge: r,
								subredditId: s,
								initialView: _.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, V.a.container)
					}, n.a.createElement("div", null), n.a.createElement(C.f, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, v.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				J = r.n(z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(W || (W = {}));
			class K extends n.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId
					}, O.defaults(e)), {
						subreddit: O.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(h.d)(e.badge);
						return e.userId && (p.b.has(e.badge.id) || p.b.has(e.badge.type)) ? W.LFG : t && e.userIsPremiumSubscriber === E.a.Subscribed || !t && e.ownedBadge ? W.Management : t && e.userIsPremiumSubscriber !== E.a.Subscribed && e.premiumSubscriptionsEnabled ? W.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? W.Gallery : void 0
					}(this.props);
					return n.a.createElement("div", {
						className: Object(u.a)(this.props.className, J.a.container),
						style: this.props.style
					}, n.a.createElement(b.a, {
						badge: this.props.badge,
						className: J.a.content,
						subredditId: this.props.subredditId,
						type: Object(_.d)(this.props.badge.placement)
					}), e === W.Management && n.a.createElement(Z, {
						className: J.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.Education && n.a.createElement(w, {
						className: J.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === W.Gallery && n.a.createElement(F, {
						className: J.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.LFG && n.a.createElement(D, {
						className: J.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const X = Object(a.c)({
				ownedBadge: E.m,
				premiumSubscriptionsEnabled: f.d.spSpecialMemberships,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(h.c)(r)) return r;
					const s = r.type;
					return Object(j.a)(e, s)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(E.x)(e, r)
				}
			});
			var U = Object(g.c)(Object(o.b)(X)(K));
			const R = Object(d.a)(U, [c.a.Click, c.a.Keydown]);
			const Q = Object(a.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(i.b)(r)(e)
				}
			});
			t.default = Object(o.b)(Q)((function(e) {
				return e.isOpen ? n.a.createElement(R, e) : null
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
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
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
							return Object(m.h)(e, {
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
						type: n
					} = t;
					const o = e.user.account;
					if (o && !Object(i.c)(r) && n === l.a.Achievement && d.a[r.id]) {
						const t = Object(u.j)(e, {
							subredditId: s,
							userId: o.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: d.a[r.id]
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
						url: n,
						url2x: a
					} = Object(i.b)(60, 60, e.badge),
					d = e.progress;
				return o.a.createElement("article", {
					className: Object(c.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: g.a.wrapper
				}, o.a.createElement("img", {
					className: g.a.image,
					src: a,
					srcSet: "".concat(n, ", ").concat(a, " 2x")
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
				}, e.badge.title), d && d.complete < d.total && o.a.createElement("div", {
					className: g.a.progressContainer
				}, o.a.createElement("div", {
					className: g.a.progressBar
				}, o.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: "".concat(d.complete / d.total * 100, "%")
					}
				})), o.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						r = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(r)
				}(d))), o.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var s, n, o, a;

			function c(e) {
				const {
					platform: t,
					playerType: r,
					region: s,
					style: n
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(n, "/").concat(s, "_").concat(t, "_").concat(r, "_").concat(n, ".svg")
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})), r.d(t, "c", (function() {
					return o
				})), r.d(t, "d", (function() {
					return c
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(s || (s = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/flattenDeep.js"),
				n = r.n(s),
				o = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const a = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				c = new Set(n()(Object.keys(o.a).map(e => Object.keys(o.b).map(t => Object.keys(o.c).map(r => "".concat(r, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === s.a.Badge) return r
				},
				o = (e, t) => {
					let {
						productId: r
					} = t;
					const s = e.products.models[r];
					if (s) {
						const t = s.subredditId,
							n = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							a = Date.now();
						let c = !1;
						return n.forEach(e => {
							const t = o[e];
							t && t.type === r && t.endsAt > a && (c = !0)
						}), c
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.395b145282f9ef012394.js.map