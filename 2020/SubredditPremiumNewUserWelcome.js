// https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.b955a31fbecae7565877.js
// Retrieved at 9/9/2020, 4:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumNewUserWelcome"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, s) : []
			}
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			}));
			var r = n("./src/reddit/endpoints/economics/banners.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/economics/banners/constants.ts");
			const c = Object(s.a)(a.c),
				i = Object(s.a)(a.d),
				o = Object(s.a)(a.a),
				d = Object(s.a)(a.b),
				l = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					const o = n();
					if (!o.user.account) return;
					if (o.economics.banners.dismissedBanners[e]) return;
					t(c(e));
					const d = await Object(r.b)(a(), e);
					t(i({
						subredditId: e,
						data: d
					}))
				}, m = (e, t) => async (n, s, a) => {
					let {
						apiContext: c
					} = a;
					n(o({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(c(), e, t)
				}, u = (e, t) => async (n, s, a) => {
					let {
						apiContext: c
					} = a;
					n(d({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(c(), e, t)
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = n("./src/reddit/models/Badge/index.ts"),
				l = n("./src/reddit/models/Badge/managementPage.ts"),
				m = n("./src/reddit/selectors/economics.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				p = n("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = n.n(p);
			const h = Object(b.c)({
				collection: (e, t) => {
					let {
						badge: n,
						subredditId: r
					} = t;
					if (n.collections) {
						const t = Object.keys(n.collections);
						if (t.length) {
							const n = t[0];
							return Object(m.h)(e, {
								collectionId: n,
								subredditId: r
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: n,
						subredditId: r,
						type: s
					} = t;
					const a = e.user.account;
					if (a && !Object(d.c)(n) && s === l.a.Achievement && o.a[n.id]) {
						const t = Object(u.j)(e, {
							subredditId: r,
							userId: a.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: o.a[n.id]
						}
					}
				}
			});
			t.a = Object(c.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? r.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? r.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : r.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					n = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: c
					} = Object(d.b)(60, 60, e.badge),
					o = e.progress;
				return a.a.createElement("article", {
					className: Object(i.a)(e.className, {
						[g.a.fullWidth]: !!e.fullWidth
					})
				}, a.a.createElement("div", {
					className: g.a.wrapper
				}, a.a.createElement("img", {
					className: g.a.image,
					src: c,
					srcSet: "".concat(s, ", ").concat(c, " 2x")
				}), a.a.createElement("div", {
					className: g.a.info
				}, a.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: n
				}, n), a.a.createElement("header", {
					className: g.a.title
				}, e.badge.title), o && o.complete < o.total && a.a.createElement("div", {
					className: g.a.progressContainer
				}, a.a.createElement("div", {
					className: g.a.progressBar
				}, a.a.createElement("div", {
					className: g.a.progressThumb,
					style: {
						width: "".concat(o.complete / o.total * 100, "%")
					}
				})), a.a.createElement("div", {
					className: g.a.progressAmount
				}, function(e) {
					const t = "".concat(Math.floor(e.complete / 1e3), "k"),
						n = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(n)
				}(o))), a.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var r, s, a, c;

			function i(e) {
				const {
					platform: t,
					playerType: n,
					region: r,
					style: s
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(s, "/").concat(r, "_").concat(t, "_").concat(n, "_").concat(s, ".svg")
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "c", (function() {
					return a
				})), n.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less": function(e, t, n) {
			e.exports = {
				adminIcon: "_3DBC88ju9HyGJROMgq_F97",
				tagline: "_2ns4H3PImrmpOdoWZOcKMh",
				title: "_3roTQxzmBtpWPUliC-RDN4"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less": function(e, t, n) {
			e.exports = {
				assets: "rc9uwSKhfz2sYMicAJ2DC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less": function(e, t, n) {
			e.exports = {
				branding: "_23unQtjTQ_n6BjirQwG00B",
				container: "_3AZuRe_UgoWbtKNJS9NIq7",
				crown: "At1WqrMnAtMf-GF7yvDTE",
				link: "_2kqLnXg-22rlxFJn4z7GBC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less": function(e, t, n) {
			e.exports = {
				badge: "_30E7byXU3_1B4T7_r3ztFc",
				label: "_13rfgT1x6TMBcCq9TNT3B0"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less": function(e, t, n) {
			e.exports = {
				close: "_2707HQ8wAoNAWOYToe3mOV",
				container: "p0xnZL-WCSelAxMeF2_7i",
				header: "_2KztCw3Gn5cmpUK-pjs01-",
				message: "qICCKz58S2wSANlB9NC1x",
				newbieBadge: "_24PsjCZsKtJryP0hTG1IT9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/uuid/v4.js"),
				o = n.n(i),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/endpoints/economics/banners.ts"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/models/Badge/managementPage.ts"),
				j = n("./src/reddit/selectors/economics.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/telemetry.ts"),
				y = n("./node_modules/fbt/lib/FbtPublic.js"),
				w = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				E = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less"),
				v = n.n(E);

			function O(e) {
				const {
					className: t,
					subreddit: n
				} = e;
				return s.a.createElement("header", {
					className: Object(d.a)(t, v.a.container)
				}, s.a.createElement("div", {
					className: v.a.tagline
				}, s.a.createElement(w.a, {
					className: v.a.adminIcon
				}), y.fbt._("a note from reddit admins", null, {
					hk: "3addaI"
				})), s.a.createElement("div", {
					className: v.a.title
				}, y.fbt._("Welcome to r/{communityName}!", [y.fbt._param("communityName", n.name)], {
					hk: "2LQnel"
				})))
			}
			var N = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				k = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less"),
				C = n.n(k);
			const P = [0, 500];

			function I(e) {
				return s.a.createElement("div", {
					className: Object(d.a)(C.a.container, e.className)
				}, s.a.createElement(N.a, {
					className: C.a.assets,
					scrollRange: P,
					subreddit: e.subreddit
				}))
			}
			var B = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = n("./src/config.ts"),
				A = n("./src/reddit/helpers/economics/membershipPage.ts"),
				T = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less"),
				W = n.n(T);
			const L = Object(c.c)({
				meta: (e, t) => {
					let {
						subreddit: n
					} = t;
					return Object(j.s)(e, n.id)
				}
			});
			var M = Object(m.c)(Object(a.b)(L)((function(e) {
					return s.a.createElement("div", {
						className: Object(d.a)(W.a.container, e.className)
					}, y.fbt._("This community is a part of an exclusive experiment run by Reddit Admins.", null, {
						hk: "1lZWqG"
					}), " ", y.fbt._("Hundreds of followers have paid for a", null, {
						hk: "b6O0n"
					}), s.a.createElement("div", {
						className: W.a.branding
					}, s.a.createElement("img", {
						className: W.a.crown,
						src: "".concat(S.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), e.meta.memberAlt), y.fbt._("subscription.", null, {
						hk: "2NkoEp"
					}), " ", y.fbt._("They benefit by getting unique features that Reddit doesn't provide in any other community.", null, {
						hk: "xffSH"
					}), " ", s.a.createElement(B.a, {
						className: W.a.link,
						to: Object(A.a)(e.subreddit.name, e.correlationId),
						onClick: () => e.sendEvent(t => Object.assign(Object.assign({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_learn_more",
							correlationId: e.correlationId
						}, x.defaults(t)), {
							subreddit: x.subreddit(t)
						}))
					}, y.fbt._("You can learn more here", null, {
						hk: "49vQ0b"
					})), y.fbt._(".", null, {
						hk: "2crLys"
					}))
				}))),
				D = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				U = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				R = n("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				H = n("./src/reddit/endpoints/economics/emojis.ts"),
				G = n("./src/reddit/selectors/products.ts"),
				q = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less"),
				z = n.n(q);
			const K = "newbie_badge";
			class V extends s.a.Component {
				constructor() {
					super(...arguments), this.onApply = async () => {
						(await Object(H.a)(this.props.apiContext(), {
							productId: K,
							subredditId: this.props.subredditId
						})).ok && (this.props.onBadgeApplied(), this.props.sendEvent(e => Object.assign(Object.assign({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_claim_badge",
							correlationId: this.props.correlationId
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})))
					}
				}
				render() {
					const {
						className: e,
						newbieBadge: t,
						subredditId: n
					} = this.props;
					return t ? s.a.createElement("div", {
						className: Object(d.a)(z.a.container, e)
					}, s.a.createElement("div", {
						className: z.a.label
					}, y.fbt._("you just unlocked your first achievement badge", null, {
						hk: "MbVkT"
					})), s.a.createElement("div", {
						className: z.a.badge
					}, s.a.createElement(R.a, {
						fullWidth: !0,
						badge: t,
						subredditId: n,
						type: f.a.Achievement
					}), s.a.createElement(F.f, {
						onClick: this.onApply
					}, y.fbt._("apply", null, {
						hk: "3BGbhR"
					})))) : null
				}
			}
			const Z = Object(c.c)({
				newbieBadge: e => Object(G.a)(e, K)
			});
			var Q = Object(b.b)(Object(m.c)(Object(a.b)(Z, (e, t) => {
					let {
						subredditId: n
					} = t;
					return {
						onBadgeApplied: () => {
							e(Object(U.d)(n, {
								id: K
							})), e(Object(D.b)(f.a.Achievement)), e(Object(D.c)({
								subredditId: n
							}))
						}
					}
				})(V))),
				Y = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less"),
				X = n.n(Y);
			class J extends s.a.Component {
				constructor(e) {
					super(e), this.hasFiredViewEvent = !1, this.dismissBanner = () => {
						const {
							subreddit: e
						} = this.props;
						e && this.props.onDismissBanner(e.id)
					}, this.state = {
						userWasUnsubscribed: !e.userIsSubscribed
					}, this.correlationId = o()()
				}
				componentDidUpdate(e) {
					const t = this.props.subreddit;
					t && !1 === e.userIsSubscribed && !0 === this.props.userIsSubscribed && void 0 === this.props.bannerIsDismissed && this.props.onFetchDismissedBanners(t.id), t && !1 === this.props.userIsSubscribed && !this.state.userWasUnsubscribed && this.setState({
						userWasUnsubscribed: !0
					})
				}
				render() {
					const {
						className: e,
						eligibleForBanner: t,
						subreddit: n
					} = this.props;
					return n && this.props.userIsSubscribed && this.state.userWasUnsubscribed && !1 === this.props.bannerIsDismissed && t ? (this.hasFiredViewEvent || (this.hasFiredViewEvent = !0, this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "new_user_welcome",
						correlationId: this.correlationId
					}, x.defaults(e)), {
						subreddit: x.subreddit(e)
					}))), s.a.createElement("article", {
						className: Object(d.a)(X.a.container, e)
					}, s.a.createElement(O, {
						className: X.a.header,
						subreddit: n
					}), s.a.createElement(I, {
						className: X.a.jumper,
						subreddit: n
					}), s.a.createElement(M, {
						className: X.a.message,
						correlationId: this.correlationId,
						subreddit: n
					}), s.a.createElement(Q, {
						className: X.a.newbieBadge,
						correlationId: this.correlationId,
						subredditId: n.id
					}), s.a.createElement(h.a, {
						className: X.a.close,
						onClick: this.dismissBanner
					}))) : null
				}
			}
			const $ = Object(c.c)({
					bannerIsDismissed: (e, t) => {
						const n = Object(p.m)(e, t);
						return n ? Object(j.g)(e, n, g.a.NewUserWelcome) : void 0
					},
					eligibleForBanner: (e, t) => {
						const n = e.user.account,
							r = Object(p.q)(e, t);
						if (!n) return !1;
						if (Object(p.N)(e, t) !== u.g.Large) return !1;
						if (r) {
							const t = Object(j.f)(e, r.id)[f.a.Achievement];
							if (t && t.type === K) return !1
						}
						return !0
					},
					subreddit: p.q,
					userIsSubscribed: (e, t) => {
						const n = Object(p.q)(e, t);
						return !!n && Object(_.eb)(e, {
							identifier: {
								name: n.name,
								type: "subreddit"
							}
						})
					}
				}),
				ee = Object(m.c)(J),
				te = Object(a.b)($, e => ({
					onDismissBanner: t => e(Object(l.a)(t, g.a.NewUserWelcome)),
					onFetchDismissedBanners: t => e(Object(l.b)(t))
				}))(ee),
				ne = Object(p.t)()(te),
				re = Object(b.b)(ne);
			t.default = Object(b.b)(re)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/flattenDeep.js"),
				s = n.n(r),
				a = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				i = new Set(s()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(n => "".concat(n, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/clamp.js"),
				s = n.n(r),
				a = n("./node_modules/lodash/throttle.js"),
				c = n.n(a),
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = n("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (n, r) => {
								const s = t.get(n);
								return e.set(n, s.concat(r)), t
							},
							remove: (n, r) => {
								const s = t.get(n);
								return e.set(n, s.filter(e => e !== r)), t
							}
						};
					return t
				})(),
				b = (() => {
					const e = e => c()(() => {
							d.a.read(() => {
								const t = (e => Object(m.a)(e) ? Object(l.a)() : e.scrollTop)(e);
								u.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (n, r) => {
							if (!u.get(n).length) {
								const r = e(n);
								t.set(n, r), n.addEventListener("scroll", r)
							}
							u.add(n, r)
						},
						off: (e, n) => {
							if (u.remove(e, n), !u.get(e).length) {
								const n = t.get(e);
								n && e.removeEventListener("scroll", n)
							}
						}
					}
				})();
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const n = this.props.scrollRange[0],
							r = this.props.scrollRange[1],
							a = s()(e, n, r),
							c = Math.min(Math.floor((a - n) / (r - n) * 1e3), 999);
						return Object.assign(Object.assign({}, t), {
							styles: Object.assign(Object.assign({}, t.styles), {
								animationDelay: "-".concat(c, "s")
							})
						})
					}), this.state = {
						styles: {
							animationDelay: "0s",
							animationDuration: "1000s",
							animationPlayState: "paused",
							backfaceVisibility: "hidden"
						}
					}
				}
				shouldComponentUpdate(e, t) {
					return this.state.styles.animationDelay !== t.styles.animationDelay
				}
				componentDidMount() {
					b.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					b.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, a = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(c.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: r
				})
			}
			async function o(e, t) {
				const n = await async function(e, t, n) {
					return Object(c.a)(e, {
						endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, s) {
					const a = await o(e, t),
						c = Object.assign(Object.assign({}, a), {
							[n]: s
						});
					return (await i(e, t, r.UpsellBanners, c)).ok ? c : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const l = async (e, t, n) => d(e, t, n, !0), m = async (e, t, n) => d(e, t, n, !1), u = (e, t) => i(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "k", (function() {
				return g
			}));
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function o(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function d(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const u = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				p = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
				return Object(r.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, n) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1sFzjkbzwgDZbCfUC2r1wE",
				jumperArmLeft: "_3PiaT85fC3TrQD2HdeOafZ",
				jumperArmLeftAnim: "zKNYt858N0bjlljDDG6NZ",
				jumperArmRight: "_3Lx79UhomruM1Y5BCTzG8Y",
				jumperArmRightAnim: "_1i7rn3wI2iwaDt20BD4cwA",
				jumperBullet: "_3VgQEpiX3x4ms2DPXbU3Vv",
				jumperBulletAnim: "_2SOHU1xXIOc8DnKL4Eh_NA",
				jumperLegLeft: "_2tBrC3MWjEDn2rUr1uHBSU",
				jumperLegLeftAnim: "_33YZcOsjLAJqX7_PWF0XMy",
				jumperLegRight: "_21kcQmC_D0HKtBiZB44xj_",
				jumperLegRightAnim: "_2N7iCqOyBuKxb1Gi5WqG2h",
				jumperTorso: "_1ftz2Us7dNaqGSxapletsm"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = n("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				o = n("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				d = n.n(o);
			const l = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || l;
				return s.a.createElement("footer", {
					className: Object(a.a)(d.a.container, e.className)
				}, s.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: d.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: d.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: d.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: d.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), s.a.createElement("img", {
					className: d.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), s.a.createElement(c.a, {
					scrollRange: t
				}, t => s.a.createElement("img", {
					className: d.a.jumperArmRight,
					src: Object(i.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/config.ts");
			const s = (e, t) => "".concat(r.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "m", (function() {
				return v
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "l", (function() {
				return B
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const o = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				m = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = N(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const n = v(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const n = g(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				f = (e, t) => {
					const n = g(e, t);
					return n && n.amount || "0"
				},
				j = (e, t) => {
					if (Object(c.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = a.d.spPolls(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				_ = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				x = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				E = (e, t) => {
					const n = P(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				N = (e, t) => {
					const n = O(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = N(e, t),
						r = O(e, t);
					return n && n.provider || r && r.provider
				},
				C = (e, t) => {
					const n = k(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const n = N(e, t),
						r = k(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const a = n && n.extra && n.extra.contracts,
						c = a && a.unlocked;
					return c && {
						address: c.address,
						symbol: c.token || "",
						decimals: c.decimals || 18,
						image: c.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = N(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				B = (e, t) => {
					const n = O(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.b955a31fbecae7565877.js.map