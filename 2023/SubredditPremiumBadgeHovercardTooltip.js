// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.cbc6f5ac1fe56d07fe90.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var r = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + r(n() * (t - e + 1))
			}
		},
		"./src/reddit/actions/chat/toggle.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/actions/matrixChat/index.ts");
			const s = e => async t => {
				t(Object(n.f)(e))
			}
		},
		"./src/reddit/actions/matrixChat/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			const n = "MATRIX_CHAT_SET_URL",
				s = "MATRIX_CHAT_RESET_ACTIVE_CHAT",
				c = "MATRIX_CHAT_SET_STATE",
				o = "MATRIX_CHAT_START_CHAT_WITH_USER",
				d = "MATRIX_CHAT_SET_NOTIFICATIONS_COUNT"
		},
		"./src/reddit/actions/matrixChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "b", (function() {
				return E
			}));
			var n, s = r("./src/lib/cache/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/reducers/features/matrixChat/index.ts");

			function a(e) {
				return Object(s.c)(c.q.CHAT, c.z.CHAT_CONTAINER_SIZE_KEY, e)
			}

			function i(e) {
				switch (e) {
					case n.EMBED:
						return d.b.NORMAL;
					case n.MINIMIZED:
						return d.b.MINIMIZED;
					default:
						return d.b.CLOSED
				}
			}! function(e) {
				e.EMBED = "embed", e.FULL = "full", e.HIDDEN = "hidden", e.MINIMIZED = "minimized"
			}(n || (n = {}));
			var l = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/actions/matrixChat/constants.ts");
			const m = Object(o.a)(u.d),
				b = Object(o.a)(u.a),
				p = e => (t, r) => {
					const o = r(),
						i = Object(l.k)(o);
					if (i) {
						const t = a(i),
							r = function(e) {
								switch (e) {
									case d.b.NORMAL:
										return n.EMBED;
									case d.b.MINIMIZED:
										return n.MINIMIZED;
									default:
										return n.HIDDEN
								}
							}(e.state);
						Object(s.d)(t, r, c.wc)
					}
					return t({
						type: u.c,
						payload: e
					})
				},
				g = Object(o.a)(u.b),
				f = Object(o.a)(u.e),
				E = e => async t => {
					const r = a(e),
						n = Object(s.b)(r);
					n && t(p({
						state: i(n)
					}))
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
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				i = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				u = r("./src/lib/classNames/index.ts"),
				m = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				g = r("./src/reddit/featureFlags/index.ts"),
				f = r("./src/reddit/models/Badge/index.ts"),
				E = r("./src/reddit/models/Badge/managementPage.ts"),
				h = r("./src/reddit/selectors/economics.ts"),
				I = r("./src/reddit/selectors/products.ts"),
				O = r("./src/reddit/selectors/telemetry.ts"),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = r("./src/reddit/actions/tooltip.ts"),
				j = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				C = r("./src/reddit/controls/Button/index.tsx"),
				M = r("./src/reddit/helpers/economics/membershipPage.ts"),
				N = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				S = r.n(N);
			const y = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var P = Object(p.c)(Object(c.b)(y, e => ({
					onOpen: () => e(Object(x.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || Object(l.a)(),
						n = t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more",
								...O.q(e),
								subreddit: O.nb(e)
							})), e.onOpen()
						};
					return s.a.createElement("footer", {
						className: Object(u.a)(e.className, S.a.container)
					}, s.a.createElement(v.a, {
						className: S.a.wrapper,
						to: Object(M.a)(t, r),
						onClick: n
					}, s.a.createElement(j.a, {
						className: S.a.benefits,
						subredditId: e.subredditId
					})), s.a.createElement(C.n, {
						className: S.a.link,
						disabled: !e.subreddit,
						to: Object(M.a)(t, r),
						onClick: n
					}, _.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				B = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				A = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				T = r.n(A);
			var H = Object(p.c)(Object(c.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(B.c)({
								badge: r,
								subredditId: n,
								initialView: E.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || Object(l.a)();
					return s.a.createElement("footer", {
						className: Object(u.a)(e.className, T.a.container)
					}, s.a.createElement("div", null), s.a.createElement(C.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery",
								...O.q(e),
								subreddit: O.nb(e)
							})), e.onOpen()
						}
					}, _.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				w = r("./src/reddit/actions/chat/toggle.ts"),
				L = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				D = r.n(L);
			var k = Object(p.c)(Object(c.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(w.a)(r))
					}
				})((function(e) {
					const t = e.correlationId || Object(l.a)();
					return s.a.createElement("footer", {
						className: Object(u.a)(D.a.container, e.className)
					}, s.a.createElement("div", null), s.a.createElement(C.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat",
								...O.q(e),
								subreddit: O.nb(e)
							})), e.onStartChat()
						}
					}, _.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				F = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				R = r.n(F);
			var G, Z = Object(c.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(x.i)()), e(Object(B.c)({
								badge: r,
								subredditId: n,
								initialView: E.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return s.a.createElement("footer", {
						className: Object(u.a)(e.className, R.a.container)
					}, s.a.createElement("div", null), s.a.createElement(C.l, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, _.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				U = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				V = r.n(U);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(G || (G = {}));
			class W extends s.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || Object(l.a)()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId,
						...O.q(e),
						subreddit: O.nb(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(f.f)(e.badge);
						return e.userId && (b.c.has(e.badge.id) || b.c.has(e.badge.type)) ? G.LFG : t && e.userIsPremiumSubscriber === h.a.Subscribed || !t && e.ownedBadge ? G.Management : t && e.userIsPremiumSubscriber !== h.a.Subscribed && e.premiumSubscriptionsEnabled ? G.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? G.Gallery : void 0
					}(this.props);
					return s.a.createElement("div", {
						className: Object(u.a)(this.props.className, V.a.container),
						style: this.props.style
					}, s.a.createElement(m.a, {
						badge: this.props.badge,
						className: V.a.content,
						subredditId: this.props.subredditId,
						type: Object(E.d)(this.props.badge.placement)
					}), e === G.Management && s.a.createElement(Z, {
						className: V.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === G.Education && s.a.createElement(P, {
						className: V.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === G.Gallery && s.a.createElement(H, {
						className: V.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === G.LFG && s.a.createElement(k, {
						className: V.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const X = Object(o.c)({
				ownedBadge: h.l,
				premiumSubscriptionsEnabled: g.d.spSpecialMemberships,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(f.e)(r)) return r;
					const n = r.type;
					return Object(I.a)(e, n)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(h.x)(e, r)
				}
			});
			var z = Object(p.c)(Object(c.b)(X)(W));
			const K = Object(a.a)(z, [d.a.Click, d.a.Keydown]);
			const J = Object(o.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(i.b)(r)(e)
				}
			});
			t.default = Object(c.b)(J)((function(e) {
				return e.isOpen ? s.a.createElement(K, e) : null
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
				c = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/crypto/wallet.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
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
							return Object(m.h)(e, {
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
					if (!Object(i.e)(r) && s === l.a.Achievement && a.b[r.id]) {
						const t = Object(u.a)(e, {
							subredditId: n
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: a.b[r.id]
						}
					}
				}
			});
			t.a = Object(o.b)(f)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: o
					} = Object(i.d)(60, 60, e.badge),
					a = e.progress;
				return c.a.createElement("article", {
					className: Object(d.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, c.a.createElement("div", {
					className: g.a.wrapper
				}, c.a.createElement("img", {
					className: g.a.image,
					src: o,
					srcSet: `${s}, ${o} 2x`
				}), c.a.createElement("div", {
					className: g.a.info
				}, c.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), c.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), a && a.complete < a.total && c.a.createElement("div", {
					className: g.a.progressContainer
				}, c.a.createElement("div", {
					className: g.a.progressBar
				}, c.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: `${a.complete/a.total*100}%`
					}
				})), c.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(a))), c.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
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
		"./src/reddit/reducers/features/matrixChat/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			var n, s = r("./src/config.ts"),
				c = r("./src/reddit/actions/matrixChat/constants.ts");
			! function(e) {
				e[e.CLOSED = 0] = "CLOSED", e[e.NORMAL = 1] = "NORMAL", e[e.MINIMIZED = 2] = "MINIMIZED"
			}(n || (n = {}));
			const o = {
					state: n.CLOSED,
					url: s.a.matrixChatUrl
				},
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d:
							const {
								url: r
							} = t.payload;
							return {
								...e, url: r
							};
						case c.c:
							const {
								state: s
							} = t.payload;
							return {
								...e, state: s
							};
						case c.a:
							return {
								...e, activeUserId: void 0
							};
						case c.b:
							const {
								count: o
							} = t.payload;
							return {
								...e, notificationsCount: o
							};
						case c.e:
							const d = t.payload;
							return {
								...e, state: n.NORMAL, activeUserId: d
							};
						default:
							return e
					}
				}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: s.a
				}
			});
			const c = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				o = (e, t) => {
					var r;
					return null === (r = c(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				d = (e, t) => {
					var r, n, s, c;
					return null === (c = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === c ? void 0 : c[t.subredditId]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.cbc6f5ac1fe56d07fe90.js.map