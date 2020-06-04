// https://www.redditstatic.com/desktop2x/reddit-components-PowerupsBanner.2580f3f6e1d5abf85f7c.js
// Retrieved at 6/4/2020, 6:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PowerupsBanner"], {
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, s, t) {
			"use strict";
			t.d(s, "b", (function() {
				return l
			})), t.d(s, "a", (function() {
				return u
			})), t.d(s, "c", (function() {
				return p
			}));
			var n = t("./src/reddit/endpoints/economics/banners.ts"),
				r = t("./src/lib/makeActionCreator/index.ts"),
				o = t("./src/reddit/actions/economics/banners/constants.ts");
			const a = Object(r.a)(o.c),
				c = Object(r.a)(o.d),
				i = Object(r.a)(o.a),
				d = Object(r.a)(o.b),
				l = e => async (s, t, r) => {
					let {
						apiContext: o
					} = r;
					const i = t();
					if (!i.user.account) return;
					if (i.economics.banners.dismissedBanners[e]) return;
					s(a(e));
					const d = await Object(n.b)(o(), e);
					s(c({
						subredditId: e,
						data: d
					}))
				}, u = (e, s) => async (t, r, o) => {
					let {
						apiContext: a
					} = o;
					t(i({
						subredditId: e,
						bannerType: s
					})), Object(n.c)(a(), e, s)
				}, p = (e, s) => async (t, r, o) => {
					let {
						apiContext: a
					} = o;
					t(d({
						subredditId: e,
						bannerType: s
					})), Object(n.e)(a(), e, s)
				}
		},
		"./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3DUbiwh1FRtq5g2hEx2RKL",
				lockIcon: "_33RjcTTmbKD5T2Ta8QRTnF",
				checkmarkIcon: "_3QCslBBy_6oqZJDark7cwm"
			}
		},
		"./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = t("./src/reddit/icons/svgs/Lock/index.tsx"),
				i = t("./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.m.less"),
				d = t.n(i);
			const {
				fbt: l
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			s.a = e => {
				const {
					className: s,
					powerups: t
				} = e, {
					tier: n,
					count: i,
					tiersInfo: u,
					supportersCount: p
				} = t, m = u[n], b = m && m.powerupsCost && m.powerupsCost > i ? m.powerupsCost - i : 0;
				return r.a.createElement("div", {
					className: Object(o.a)(s, d.a.container)
				}, b ? r.a.createElement(r.a.Fragment, null, r.a.createElement(c.a, {
					className: d.a.lockIcon
				}), r.a.createElement("span", null, l._("{remainingToUnlock} more supporters to unlock!", [l._param("remainingToUnlock", b)], {
					hk: "4k6uGF"
				}))) : r.a.createElement(r.a.Fragment, null, r.a.createElement(a.a, {
					className: d.a.checkmarkIcon
				}), r.a.createElement("span", null, l._("Unlocked by {unlockedAlready} supporters", [l._param("unlockedAlready", p)], {
					hk: "2zLbrH"
				}))))
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_3XgM2EN8sCARAkCHOcXWFG",
				user: "_3JLoEbowX1Hvwid4Di_k5k",
				userIconContainer: "_1ZWQEkxAQJa3mQ8se-TkFv",
				userIcon: "_1FJW6pUQI-A-tdYsx0ckLB",
				userInfo: "unfK_hXMHW0WMFEjLCu8H",
				name: "_1nMvPOVd8LTtgN1uqufNmq",
				lastSupported: "_1gTfh1LRXZFU7QpgTIY6X",
				counter: "_28dkfRHU5uHefkVvoC0TSb",
				powerupIcon: "_2dng_Tlb-B96ixv3fyOPcM"
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.tsx": function(e, s, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				r = t("./node_modules/react/index.js"),
				o = t.n(r),
				a = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/timeAgo/index.ts"),
				i = t("./src/reddit/components/UserIcon/index.tsx"),
				d = t("./src/reddit/icons/svgs/Powerup/index.tsx"),
				l = t("./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.m.less"),
				u = t.n(l);
			s.a = function(e) {
				const {
					className: s,
					hideDate: t,
					supporter: r
				} = e, {
					score: l,
					lastSupportedAt: p,
					supporterInfo: m
				} = r, b = new Date(p).valueOf() / 1e3, h = m ? m.name : n.fbt._("Anonymous", null, {
					hk: "1Q4Y6O"
				}).toString(), w = m && m.icon.url ? m.icon.url : void 0, x = !!m && m.profile.isNsfw;
				return o.a.createElement("div", {
					className: Object(a.a)(s, u.a.container)
				}, o.a.createElement("div", {
					className: u.a.user
				}, o.a.createElement("div", {
					className: u.a.userIconContainer
				}, o.a.createElement(i.a, {
					userName: h,
					iconUrl: w,
					className: u.a.userIcon,
					isNSFW: x
				})), o.a.createElement("div", {
					className: u.a.userInfo
				}, o.a.createElement("h4", {
					className: u.a.name
				}, h), !t && o.a.createElement("span", {
					className: u.a.lastSupported
				}, Object(c.d)(b)))), o.a.createElement("div", {
					className: u.a.counter
				}, o.a.createElement(d.a, {
					className: u.a.powerupIcon
				}), l))
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/index.m.less": function(e, s, t) {
			e.exports = {
				withShade: "_2Ab2KQ5N-LFRqn2qcjxcJ0",
				title: "n8rqEbm1gwg5V18FIJY68"
			}
		},
		"./src/reddit/components/PowerupsBanner/Supporters/index.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/components/PowerupsBanner/Supporters/Supporter/index.tsx"),
				c = t("./src/reddit/components/PowerupsBanner/Supporters/index.m.less"),
				i = t.n(c);
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js"), l = 2, u = 500;
			s.a = function(e) {
				const {
					className: s,
					maxSupporters: t,
					supporters: n
				} = e;
				if (!n.length) return null;
				const c = n.slice(0, t || u);
				return r.a.createElement("div", {
					className: Object(o.a)(s, {
						[i.a.withShade]: c.length >= l && (!t || t < n.length)
					})
				}, r.a.createElement("h3", {
					className: i.a.title
				}, d._("Recent Supporters", null, {
					hk: "1cY1Du"
				})), c.map(e => r.a.createElement(a.a, {
					className: i.a.supporter,
					key: e.lastSupportedAt,
					supporter: e
				})))
			}
		},
		"./src/reddit/components/PowerupsBanner/index.m.less": function(e, s, t) {
			e.exports = {
				container: "_38P5G15GST4eUPAZENH1XZ",
				subredditIcon: "_2PsICgQ9IucI4laZD39Wjj",
				title: "_1btgMYc3MLe93c3pP5u6pQ",
				close: "ZLMCho_R-ke7ChBFK1xO1",
				topSupporters: "_3RqpIx0_M5bywIEZ6lPORn",
				powerupsRemainingToUnlock: "_2sQhP7VXRRNpHH3UG2Z22a",
				button: "_3J31e0IlwDl0ya4KO7pxGw",
				dismissedContainer: "_3KFpl5lsUl94HuEyBYG0Do",
				dismissedText: "T-KXfxPUNvYKx67Cm5o7S"
			}
		},
		"./src/reddit/components/PowerupsBanner/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./node_modules/react-redux/es/index.js"),
				a = t("./node_modules/reselect/es/index.js"),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./src/reddit/constants/modals.ts"),
				d = t("./src/reddit/actions/modal.ts"),
				l = t("./src/reddit/endpoints/economics/banners.ts"),
				u = t("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				p = t("./src/reddit/components/TrackingHelper/index.tsx"),
				m = t("./src/reddit/contexts/ApiContext.tsx"),
				b = t("./src/reddit/selectors/economics.ts"),
				h = t("./src/reddit/selectors/gold/powerups.ts"),
				w = t("./src/reddit/selectors/subreddit.ts"),
				x = t("./src/reddit/selectors/user.ts"),
				f = t("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = t("./src/reddit/controls/Button/index.tsx"),
				g = t("./src/reddit/icons/svgs/Close/index.tsx"),
				k = t("./src/reddit/components/PowerupsBanner/PowerupsRemainingToUnlock/index.tsx"),
				E = t("./src/reddit/components/PowerupsBanner/Supporters/index.tsx"),
				S = t("./src/reddit/components/PowerupsBanner/index.m.less"),
				N = t.n(S);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var P;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Select = "select"
			}(P || (P = {}));
			const v = Object(a.c)({
					currentUser: x.i,
					isBannerDismissed: (e, s) => {
						let {
							subredditId: t
						} = s;
						return Object(b.h)(e, t, l.a.Powerups)
					},
					powerups: h.g,
					subreddit: w.Q,
					topSupporters: h.h
				}),
				B = 3;
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.handleDismiss = () => {
						this.setState({
							show: P.Dismissed
						}), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: P.Select
						}), this.props.onUndismissBanner()
					}, this.handleCloseModal = () => {
						this.setState({
							show: P.Select
						})
					}, this.state = {
						show: P.Hidden
					}
				}
				componentDidMount() {
					!1 === this.props.isBannerDismissed ? this.setState({
						show: P.Select
					}) : void 0 === this.props.isBannerDismissed && this.props.onFetchDismissedBanners()
				}
				componentDidUpdate(e) {
					void 0 === e.isBannerDismissed && !1 === this.props.isBannerDismissed && this.setState({
						show: P.Select
					})
				}
				render() {
					const {
						className: e,
						currentUser: s,
						powerups: t,
						onOpenModal: n,
						subreddit: o,
						topSupporters: a
					} = this.props, {
						show: i
					} = this.state;
					return s && i !== P.Hidden && t && 1 !== t.tiersInfo.length ? this.state.show === P.Dismissed ? r.a.createElement("div", {
						className: Object(c.a)(N.a.dismissedContainer, e)
					}, r.a.createElement("div", {
						className: N.a.dismissedText
					}, j._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), r.a.createElement(_.f, {
						onClick: this.handleUndoDismiss
					}, j._("undo", null, {
						hk: "1A9z3Y"
					}))) : r.a.createElement("article", {
						className: Object(c.a)(N.a.container, e)
					}, o && r.a.createElement(f.b, {
						subredditOrProfile: o,
						className: N.a.subredditIcon
					}), r.a.createElement("h2", {
						className: N.a.title
					}, j._("Powerups unlock features for the whole community", null, {
						hk: "2ZaVtr"
					})), a && r.a.createElement(E.a, {
						supporters: a,
						className: N.a.topSupporters,
						maxSupporters: B
					}), r.a.createElement(k.a, {
						className: N.a.powerupsRemainingToUnlock,
						powerups: t
					}), r.a.createElement(_.f, {
						className: N.a.button,
						onClick: n
					}, j._("Powerup", null, {
						hk: "261t2N"
					})), r.a.createElement(g.a, {
						className: N.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const C = Object(p.c)(O);
			s.default = Object(m.b)(Object(o.b)(v, (e, s) => {
				let {
					subredditId: t
				} = s;
				return {
					onDismissBanner: () => e(Object(u.a)(t, l.a.Powerups)),
					onFetchDismissedBanners: () => e(Object(u.b)(t)),
					onOpenModal: () => e(Object(d.h)(i.a.ECON_POWERUPS_PURCHASE)),
					onUndismissBanner: () => e(Object(u.c)(t, l.a.Powerups))
				}
			})(C))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, s, t) {
			"use strict";
			t.d(s, "a", (function() {
				return r
			})), t.d(s, "b", (function() {
				return i
			})), t.d(s, "c", (function() {
				return l
			})), t.d(s, "e", (function() {
				return u
			})), t.d(s, "d", (function() {
				return p
			}));
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r, o = t("./src/config.ts"),
				a = t("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, s, t, n) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/storage/").concat(s, "/me/").concat(t),
					method: "patch",
					data: n
				})
			}
			async function i(e, s) {
				const t = await async function(e, s, t) {
					return Object(a.a)(e, {
						endpoint: "".concat(o.a.metaUrl, "/storage/").concat(s, "/me/").concat(t),
						method: "get"
					})
				}(e, s, n.UpsellBanners);
				return t.ok && t.body || {}
			}
			async function d(e, s, t, r) {
					const o = await i(e, s),
						a = Object.assign({}, o, {
							[t]: r
						});
					return (await c(e, s, n.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(n || (n = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.Powerups = "powerups", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const l = async (e, s, t) => d(e, s, t, !0), u = async (e, s, t) => d(e, s, t, !1), p = (e, s) => c(e, s, n.UpsellBanners, Object.keys(r).reduce((e, s) => (e[r[s]] = !1, e), {}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, s, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				r = t.n(n);
			s.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, r.a.createElement("g", null, r.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), r.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=reddit-components-PowerupsBanner.2580f3f6e1d5abf85f7c.js.map