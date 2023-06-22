// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.6e8104cad54a1ee7beba.js
// Retrieved at 6/21/2023, 9:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var r = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + r(s() * (t - e + 1))
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
				d = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				h = r("./src/reddit/models/Badge/index.ts"),
				f = r("./src/reddit/models/Badge/managementPage.ts"),
				v = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/products.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				j = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = r("./src/reddit/actions/tooltip.ts"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				P = r("./src/reddit/controls/Button/index.tsx"),
				y = r("./src/reddit/helpers/economics/membershipPage.ts"),
				C = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				S = r.n(C);
			const B = Object(d.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var N = Object(p.c)(Object(o.b)(B, e => ({
					onOpen: () => e(Object(x.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || Object(l.a)(),
						s = t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more",
								...E.o(e),
								subreddit: E.lb(e)
							})), e.onOpen()
						};
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, S.a.container)
					}, n.a.createElement(j.a, {
						className: S.a.wrapper,
						to: Object(y.a)(t, r),
						onClick: s
					}, n.a.createElement(I.a, {
						className: S.a.benefits,
						subredditId: e.subredditId
					})), n.a.createElement(P.n, {
						className: S.a.link,
						disabled: !e.subreddit,
						to: Object(y.a)(t, r),
						onClick: s
					}, _.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				M = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				w = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				k = r.n(w);
			var H = Object(p.c)(Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(M.c)({
								badge: r,
								subredditId: s,
								initialView: f.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || Object(l.a)();
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, k.a.container)
					}, n.a.createElement("div", null), n.a.createElement(P.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery",
								...E.o(e),
								subreddit: E.lb(e)
							})), e.onOpen()
						}
					}, _.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				F = r("./src/reddit/actions/chat/toggle.ts"),
				L = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				A = r.n(L);
			var G = Object(p.c)(Object(o.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(F.b)(r))
					}
				})((function(e) {
					const t = e.correlationId || Object(l.a)();
					return n.a.createElement("footer", {
						className: Object(u.a)(A.a.container, e.className)
					}, n.a.createElement("div", null), n.a.createElement(P.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat",
								...E.o(e),
								subreddit: E.lb(e)
							})), e.onStartChat()
						}
					}, _.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				D = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				T = r.n(D);
			var V, W = Object(o.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: s
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(M.c)({
								badge: r,
								subredditId: s,
								initialView: f.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return n.a.createElement("footer", {
						className: Object(u.a)(e.className, T.a.container)
					}, n.a.createElement("div", null), n.a.createElement(P.l, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, _.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				Z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				z = r.n(Z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(V || (V = {}));
			class J extends n.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || Object(l.a)()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId,
						...E.o(e),
						subreddit: E.lb(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(h.f)(e.badge);
						return e.userId && (b.c.has(e.badge.id) || b.c.has(e.badge.type)) ? V.LFG : t && e.userIsPremiumSubscriber === v.a.Subscribed || !t && e.ownedBadge ? V.Management : t && e.userIsPremiumSubscriber !== v.a.Subscribed && e.premiumSubscriptionsEnabled ? V.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? V.Gallery : void 0
					}(this.props);
					return n.a.createElement("div", {
						className: Object(u.a)(this.props.className, z.a.container),
						style: this.props.style
					}, n.a.createElement(m.a, {
						badge: this.props.badge,
						className: z.a.content,
						subredditId: this.props.subredditId,
						type: Object(f.d)(this.props.badge.placement)
					}), e === V.Management && n.a.createElement(W, {
						className: z.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.Education && n.a.createElement(N, {
						className: z.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === V.Gallery && n.a.createElement(H, {
						className: z.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.LFG && n.a.createElement(G, {
						className: z.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const K = Object(d.c)({
				ownedBadge: v.l,
				premiumSubscriptionsEnabled: g.d.spSpecialMemberships,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(h.e)(r)) return r;
					const s = r.type;
					return Object(O.a)(e, s)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(v.x)(e, r)
				}
			});
			var R = Object(p.c)(Object(o.b)(K)(J));
			const U = Object(i.a)(R, [a.a.Click, a.a.Keydown]);
			const X = Object(d.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(c.b)(r)(e)
				}
			});
			t.default = Object(o.b)(X)((function(e) {
				return e.isOpen ? n.a.createElement(U, e) : null
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
				d = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/crypto/wallet.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				b = r("./node_modules/reselect/es/index.js"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = r.n(p);
			const h = Object(b.c)({
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
					if (!Object(c.e)(r) && n === l.a.Achievement && i.b[r.id]) {
						const t = Object(u.a)(e, {
							subredditId: s
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: i.b[r.id]
						}
					}
				}
			});
			t.a = Object(d.b)(h)((function(e) {
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
						url2x: d
					} = Object(c.d)(60, 60, e.badge),
					i = e.progress;
				return o.a.createElement("article", {
					className: Object(a.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: g.a.wrapper
				}, o.a.createElement("img", {
					className: g.a.image,
					src: d,
					srcSet: `${n}, ${d} 2x`
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
				}, e.badge.title), i && i.complete < i.total && o.a.createElement("div", {
					className: g.a.progressContainer
				}, o.a.createElement("div", {
					className: g.a.progressBar
				}, o.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: `${i.complete/i.total*100}%`
					}
				})), o.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(i))), o.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				d = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/contexts/InsideOverlay.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const r = Object(o.a)(e, t);
				class s extends n.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(d.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return n.a.createElement(r, i({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
			}
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var s;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return s
				})), r.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return a
			}));
			var s = r("./src/lib/initializeClient/installReducer.ts"),
				n = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: n.a
				}
			});
			const o = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				d = (e, t) => {
					var r;
					return null === (r = o(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				a = (e, t) => {
					var r, s, n, o;
					return null === (o = null === (n = null === (s = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === s ? void 0 : s.publicWallets) || void 0 === n ? void 0 : n[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.6e8104cad54a1ee7beba.js.map