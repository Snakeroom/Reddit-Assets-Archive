// https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.4f14cf4b5684fc705af7.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumNewUserWelcome"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, r) : []
			}
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return u
			}));
			var n = s("./src/reddit/endpoints/economics/banners.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/economics/banners/constants.ts");
			const c = Object(r.a)(a.c),
				i = Object(r.a)(a.d),
				o = Object(r.a)(a.a),
				d = Object(r.a)(a.b),
				l = e => async (t, s, r) => {
					let {
						apiContext: a
					} = r;
					const o = s();
					if (!o.user.account) return;
					if (o.economics.banners.dismissedBanners[e]) return;
					t(c(e));
					const d = await Object(n.b)(a(), e);
					t(i({
						subredditId: e,
						data: d
					}))
				}, m = (e, t) => async (s, r, a) => {
					let {
						apiContext: c
					} = a;
					s(o({
						subredditId: e,
						bannerType: t
					})), Object(n.c)(c(), e, t)
				}, u = (e, t) => async (s, r, a) => {
					let {
						apiContext: c
					} = a;
					s(d({
						subredditId: e,
						bannerType: t
					})), Object(n.e)(c(), e, t)
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/models/Badge/managementPage.ts"),
				m = s("./src/reddit/selectors/economics.ts"),
				u = s("./src/reddit/selectors/gov.ts"),
				b = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				g = s.n(p);
			const h = Object(b.c)({
				collection: (e, t) => {
					let {
						badge: s,
						subredditId: n
					} = t;
					if (s.collections) {
						const t = Object.keys(s.collections);
						if (t.length) {
							const s = t[0];
							return Object(m.h)(e, {
								collectionId: s,
								subredditId: n
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: s,
						subredditId: n,
						type: r
					} = t;
					const a = e.user.account;
					if (a && !Object(d.c)(s) && r === l.a.Achievement && o.a[s.id]) {
						const t = Object(u.j)(e, {
							subredditId: n,
							userId: a.id
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: o.a[s.id]
						}
					}
				}
			});
			t.a = Object(c.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					s = e.collection ? e.collection.title : t,
					{
						url: r,
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
					srcSet: "".concat(r, ", ").concat(c, " 2x")
				}), a.a.createElement("div", {
					className: g.a.info
				}, a.a.createElement("div", {
					className: g.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: s
				}, s), a.a.createElement("header", {
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
						s = "".concat(Math.floor(e.total / 1e3), "k");
					return "".concat(t, "/").concat(s)
				}(o))), a.a.createElement("div", {
					className: g.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var n, r, a, c;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: n,
					style: r
				} = e;
				return "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_".concat(r, "/").concat(n, "_").concat(t, "_").concat(s, "_").concat(r, ".svg")
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return a
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(c || (c = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_3DBC88ju9HyGJROMgq_F97",
				tagline: "_2ns4H3PImrmpOdoWZOcKMh",
				title: "_3roTQxzmBtpWPUliC-RDN4"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less": function(e, t, s) {
			e.exports = {
				assets: "rc9uwSKhfz2sYMicAJ2DC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less": function(e, t, s) {
			e.exports = {
				branding: "_23unQtjTQ_n6BjirQwG00B",
				container: "_3AZuRe_UgoWbtKNJS9NIq7",
				crown: "At1WqrMnAtMf-GF7yvDTE",
				link: "_2kqLnXg-22rlxFJn4z7GBC"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_30E7byXU3_1B4T7_r3ztFc",
				label: "_13rfgT1x6TMBcCq9TNT3B0"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_2707HQ8wAoNAWOYToe3mOV",
				container: "p0xnZL-WCSelAxMeF2_7i",
				header: "_2KztCw3Gn5cmpUK-pjs01-",
				message: "qICCKz58S2wSANlB9NC1x",
				newbieBadge: "_24PsjCZsKtJryP0hTG1IT9"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/uuid/v4.js"),
				o = s.n(i),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/ApiContext.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/endpoints/economics/banners.ts"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				f = s("./src/reddit/models/Badge/managementPage.ts"),
				j = s("./src/reddit/selectors/economics.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				O = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Header/index.m.less"),
				y = s.n(O);

			function N(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return r.a.createElement("header", {
					className: Object(d.a)(t, y.a.container)
				}, r.a.createElement("div", {
					className: y.a.tagline
				}, r.a.createElement(w.a, {
					className: y.a.adminIcon
				}), E.fbt._("a note from reddit admins", null, {
					hk: "3addaI"
				})), r.a.createElement("div", {
					className: y.a.title
				}, E.fbt._("Welcome to r/{communityName}!", [E.fbt._param("communityName", s.name)], {
					hk: "2LQnel"
				})))
			}
			var v = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				C = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Jumper/index.m.less"),
				B = s.n(C);
			const P = [0, 500];

			function S(e) {
				return r.a.createElement("div", {
					className: Object(d.a)(B.a.container, e.className)
				}, r.a.createElement(v.a, {
					className: B.a.assets,
					scrollRange: P,
					subreddit: e.subreddit
				}))
			}
			var k = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				A = s("./src/config.ts"),
				I = s("./src/reddit/helpers/economics/membershipPage.ts"),
				W = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/Message/index.m.less"),
				D = s.n(W);
			const L = Object(c.c)({
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.s)(e, s.id)
				}
			});
			var M = Object(m.c)(Object(a.b)(L)((function(e) {
					return r.a.createElement("div", {
						className: Object(d.a)(D.a.container, e.className)
					}, E.fbt._("This community is a part of an exclusive experiment run by Reddit Admins.", null, {
						hk: "1lZWqG"
					}), " ", E.fbt._("Hundreds of followers have paid for a", null, {
						hk: "b6O0n"
					}), r.a.createElement("div", {
						className: D.a.branding
					}, r.a.createElement("img", {
						className: D.a.crown,
						src: "".concat(A.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
					}), e.meta.memberAlt), E.fbt._("subscription.", null, {
						hk: "2NkoEp"
					}), " ", E.fbt._("They benefit by getting unique features that Reddit doesn't provide in any other community.", null, {
						hk: "xffSH"
					}), " ", r.a.createElement(k.a, {
						className: D.a.link,
						to: Object(I.a)(e.subreddit.name, e.correlationId),
						onClick: () => e.sendEvent(t => Object.assign(Object.assign({
							source: "meta",
							action: "click",
							noun: "new_user_welcome_learn_more",
							correlationId: e.correlationId
						}, x.defaults(t)), {
							subreddit: x.subreddit(t)
						}))
					}, E.fbt._("You can learn more here", null, {
						hk: "49vQ0b"
					})), E.fbt._(".", null, {
						hk: "2crLys"
					}))
				}))),
				U = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				T = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				R = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				G = s("./src/reddit/endpoints/economics/emojis.ts"),
				H = s("./src/reddit/selectors/products.ts"),
				q = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/NewbieBadge/index.m.less"),
				z = s.n(q);
			const K = "newbie_badge";
			class V extends r.a.Component {
				constructor() {
					super(...arguments), this.onApply = async () => {
						(await Object(G.a)(this.props.apiContext(), {
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
						subredditId: s
					} = this.props;
					return t ? r.a.createElement("div", {
						className: Object(d.a)(z.a.container, e)
					}, r.a.createElement("div", {
						className: z.a.label
					}, E.fbt._("you just unlocked your first achievement badge", null, {
						hk: "MbVkT"
					})), r.a.createElement("div", {
						className: z.a.badge
					}, r.a.createElement(R.a, {
						fullWidth: !0,
						badge: t,
						subredditId: s,
						type: f.a.Achievement
					}), r.a.createElement(F.i, {
						onClick: this.onApply
					}, E.fbt._("apply", null, {
						hk: "3BGbhR"
					})))) : null
				}
			}
			const Z = Object(c.c)({
				newbieBadge: e => Object(H.a)(e, K)
			});
			var Q = Object(b.b)(Object(m.c)(Object(a.b)(Z, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						onBadgeApplied: () => {
							e(Object(T.d)(s, {
								id: K
							})), e(Object(U.b)(f.a.Achievement)), e(Object(U.c)({
								subredditId: s
							}))
						}
					}
				})(V))),
				Y = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.m.less"),
				X = s.n(Y);
			class J extends r.a.Component {
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
						subreddit: s
					} = this.props;
					return s && this.props.userIsSubscribed && this.state.userWasUnsubscribed && !1 === this.props.bannerIsDismissed && t ? (this.hasFiredViewEvent || (this.hasFiredViewEvent = !0, this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "new_user_welcome",
						correlationId: this.correlationId
					}, x.defaults(e)), {
						subreddit: x.subreddit(e)
					}))), r.a.createElement("article", {
						className: Object(d.a)(X.a.container, e)
					}, r.a.createElement(N, {
						className: X.a.header,
						subreddit: s
					}), r.a.createElement(S, {
						className: X.a.jumper,
						subreddit: s
					}), r.a.createElement(M, {
						className: X.a.message,
						correlationId: this.correlationId,
						subreddit: s
					}), r.a.createElement(Q, {
						className: X.a.newbieBadge,
						correlationId: this.correlationId,
						subredditId: s.id
					}), r.a.createElement(h.a, {
						className: X.a.close,
						onClick: this.dismissBanner
					}))) : null
				}
			}
			const $ = Object(c.c)({
					bannerIsDismissed: (e, t) => {
						const s = Object(p.m)(e, t);
						return s ? Object(j.g)(e, s, g.a.NewUserWelcome) : void 0
					},
					eligibleForBanner: (e, t) => {
						const s = e.user.account,
							n = Object(p.q)(e, t);
						if (!s) return !1;
						if (Object(p.N)(e, t) !== u.g.Large) return !1;
						if (n) {
							const t = Object(j.f)(e, n.id)[f.a.Achievement];
							if (t && t.type === K) return !1
						}
						return !0
					},
					subreddit: p.q,
					userIsSubscribed: (e, t) => {
						const s = Object(p.q)(e, t);
						return !!s && Object(_.fb)(e, {
							identifier: {
								name: s.name,
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
				se = Object(p.t)()(te),
				ne = Object(b.b)(se);
			t.default = Object(b.b)(ne)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/flattenDeep.js"),
				r = s.n(n),
				a = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				i = new Set(r()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(s => "".concat(s, "_").concat(e, "_").concat(t, "_badge"))))))
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/clamp.js"),
				r = s.n(n),
				a = s("./node_modules/lodash/throttle.js"),
				c = s.n(a),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = s("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, n) => {
								const r = t.get(s);
								return e.set(s, r.concat(n)), t
							},
							remove: (s, n) => {
								const r = t.get(s);
								return e.set(s, r.filter(e => e !== n)), t
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
						on: (s, n) => {
							if (!u.get(s).length) {
								const n = e(s);
								t.set(s, n), s.addEventListener("scroll", n)
							}
							u.add(s, n)
						},
						off: (e, s) => {
							if (u.remove(e, s), !u.get(e).length) {
								const s = t.get(e);
								s && e.removeEventListener("scroll", s)
							}
						}
					}
				})();
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const s = this.props.scrollRange[0],
							n = this.props.scrollRange[1],
							a = r()(e, s, n),
							c = Math.min(Math.floor((a - s) / (n - s) * 1e3), 999);
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
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "d", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, a = s("./src/config.ts"),
				c = s("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, s, n) {
				return Object(c.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
					method: "patch",
					data: n
				})
			}
			async function o(e, t) {
				const s = await async function(e, t, s) {
					return Object(c.a)(e, {
						endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(s),
						method: "get"
					})
				}(e, t, n.UpsellBanners);
				return s.ok && s.body || {}
			}
			async function d(e, t, s, r) {
					const a = await o(e, t),
						c = Object.assign(Object.assign({}, a), {
							[s]: r
						});
					return (await i(e, t, n.UpsellBanners, c)).ok ? c : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, t, s) => d(e, t, s, !0), m = async (e, t, s) => d(e, t, s, !1), u = (e, t) => i(e, t, n.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/permalinkToOverlayLocation/index.ts");

			function r(e, t) {
				return Object(n.a)("/web/special-membership/".concat(e, "?corr=").concat(t))
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = s.n(c);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), e.desc && r.a.createElement("desc", null, e.desc), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), r.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, r.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				o = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				d = s.n(o);
			const l = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || l;
				return r.a.createElement("footer", {
					className: Object(a.a)(d.a.container, e.className)
				}, r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, r.a.createElement(c.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: d.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), r.a.createElement(c.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: d.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), r.a.createElement(c.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: d.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), r.a.createElement(c.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: d.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), r.a.createElement("img", {
					className: d.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), r.a.createElement(c.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: d.a.jumperArmRight,
					src: Object(i.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/config.ts");
			const r = (e, t) => "".concat(n.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumNewUserWelcome.4f14cf4b5684fc705af7.js.map