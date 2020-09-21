// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.ef59424ca21fc80ccd09.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceWalletRegistrationStellarBanner"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				m = n.n(d);
			const u = Object(o.c)({
				tokenSymbol: l.r
			});
			t.a = Object(a.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return r.a.createElement("div", {
						className: Object(i.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/reddit/components/Governance/Token/index.tsx"),
				o = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				c = n.n(o);
			const i = 15753096e5,
				l = 6e4,
				d = 60 * l,
				m = 24 * d;

			function u(e) {
				return Math.max(0, e - Date.now())
			}
			class p extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						remainingTimeMs: u(e.deadline || i)
					}
				}
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						this.setState({
							remainingTimeMs: u(this.props.deadline || i)
						})
					}, 1e3)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const {
						remainingTimeMs: e
					} = this.state, t = Math.floor(e / m), n = Math.floor(e % m / d), s = Math.floor(e % d / l), o = Math.floor(e % l / 1e3);
					return r.a.createElement("div", {
						className: c.a.countdownTimer
					}, r.a.createElement(a.a, {
						className: c.a.token,
						subredditId: this.props.subredditId
					}), e ? "".concat(t, "D : ").concat(n, "H : ").concat(s, "M : ").concat(o, "S REMAINING") : null)
				}
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1bTjw5DFYp4CctYZ3lfuFS",
				closeButton: "_39Vkv4-6L-87v7TZCvc5JK",
				closeIcon: "ly6hYyXquOdB8BmEmr6Yr",
				countdownTimer: "_3Hv_YfcjtfBDLAP15lWnIX",
				token: "hotkh10LAVznEb5VXAFJI",
				title: "ScDmH2vbUk2wjHHiX3W5K",
				tabBar: "ya-tlIr6ctAbWoHZeKpyh",
				tab: "_3i-7ubWTKyNc4fp02yMH1v",
				tabActive: "_2NOuhdkBSywQcy0oyIwF0J",
				activeTabLine: "_2Hs9CqZqwRd2nDX3A5_HCL"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.m.less": function(e, t, n) {
			e.exports = {
				checkIcon: "_1VN3JCjuujqAeH5gGIqWk-",
				close: "_3FbvoW_X_ruDJC5tEnlyhS",
				completedBanner: "_1h58y6ZVedyqV2a97RwVUi",
				container: "_3ohG-ARC2AyjGtrPJMESzq",
				disclaimer: "_1L7YzQGFqZH2zzJVMTYAzs",
				registerLink: "nSFshLNOMdwdoH_kqXBgy",
				requirements: "_2O6mhGT8brgvIIbp8IDzbb",
				title: "_1HaWdYCqF11cmiSARyy_1R"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				i = n("./src/reddit/contexts/ApiContext.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/endpoints/economics/banners.ts"),
				m = n("./src/reddit/endpoints/governance/crypto.ts"),
				u = n("./src/config.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			async function b(e, t) {
				const n = await Object(p.a)(e, {
					endpoint: "".concat(u.a.metaUrl, "/crypto/stellar/challenges"),
					method: "post",
					data: {
						subredditId: t,
						challengeType: "registration-challenge-stellar"
					}
				});
				return n.ok ? {
					url: n.body.payload.link
				} : {
					url: void 0
				}
			}
			async function h(e, t) {
				return Object(p.a)(e, {
					endpoint: "".concat(u.a.metaUrl, "/crypto-contacts?userIds=").concat(t, "&providers=stellar"),
					method: "get"
				})
			}
			const g = (() => {
				const e = {};
				return async function(t, n) {
					if (e[n]) return e[n].response;
					let s;
					const r = new Promise(r => {
						s = setInterval(async () => {
							const a = await h(t, n);
							if (a.ok && a.body.contacts && a.body.contacts[n]) {
								const t = a.body.contacts[n].find(e => "stellar" === e.provider);
								t && t.address && (clearInterval(s), delete e[n], r(!0))
							}
						}, 1e3), setTimeout(() => {
							clearInterval(s), delete e[n], r(!1)
						}, 3e5)
					});
					return e[n] = {
						interval: s,
						response: r
					}, r
				}
			})();
			var v = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/gov.ts"),
				_ = n("./node_modules/reselect/es/index.js"),
				k = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.m.less"),
				x = n.n(k);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = 1576476e6;
			class S extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						completed: !1
					}, this.dismissBanner = () => Object(d.c)(this.props.apiContext(), this.props.subredditId, d.a.WalletRegistration), this.onClose = () => {
						this.dismissBanner(), this.setState({
							sep7link: void 0
						})
					}, this.onComplete = () => {
						this.dismissBanner(), this.setState({
							completed: !0
						})
					}, this.checkForComplete = async () => {
						const {
							apiContext: e,
							userId: t
						} = this.props;
						t && await g(e(), t) && this.onComplete()
					}
				}
				async componentDidMount() {
					const {
						apiContext: e,
						subredditId: t,
						userId: n
					} = this.props;
					if (n) {
						const [s, r, a] = await Promise.all([Object(d.b)(e(), t), b(e(), t), h(e(), n)]), o = !!s[d.a.StellarWalletRegistration], c = a.ok && a.body.contacts && a.body.contacts[n] && a.body.contacts[n].find(e => "stellar" === e.provider), i = c && !!c.address;
						o || !r.url || i || this.setState({
							sep7link: r.url
						})
					}
				}
				render() {
					const {
						canShow: e,
						className: t,
						subredditId: n
					} = this.props, {
						completed: s,
						sep7link: a
					} = this.state;
					return a && e ? s ? r.a.createElement("div", {
						className: Object(o.a)(x.a.completedBanner, t)
					}, r.a.createElement(c.a, {
						deadline: w,
						subredditId: n
					}), r.a.createElement(v.a, {
						className: x.a.checkIcon
					}), j._("Registered for distribution", null, {
						hk: "p7lNT"
					})) : r.a.createElement("article", {
						className: Object(o.a)(x.a.container, t)
					}, r.a.createElement("div", {
						className: x.a.content
					}, r.a.createElement(c.a, {
						deadline: w,
						subredditId: n
					}), r.a.createElement("header", {
						className: x.a.title
					}, j._("Register for Photons Distribution on the Stellar Blockchain", null, {
						hk: "1jg78N"
					})), r.a.createElement("div", {
						className: x.a.requirements
					}, j._("Requires an app that can handle SEP7 links, like {=Lobstr} .", [j._param("=Lobstr", r.a.createElement("a", {
						href: "https://lobstr.co/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, j._("Lobstr", null, {
						hk: "2Z47KX"
					})))], {
						hk: "3epiNq"
					})), r.a.createElement("div", {
						className: x.a.disclaimer
					}, j._("Disclaimer: Neither Stellar nor Lobstr are affiliated with Reddit and the following is not an advertisement or an endorsement. You understand and agree that Reddit is not responsible for any actions or inactions or harm caused by using either Stellar or Lobstr.", null, {
						hk: "2rEXAk"
					}))), r.a.createElement(l.g, {
						className: x.a.registerLink,
						href: a,
						target: "_blank",
						onClick: this.checkForComplete
					}, j._("register", null, {
						hk: "3Pr9JU"
					})), r.a.createElement(y.a, {
						className: x.a.close,
						onClick: this.onClose
					})) : null
				}
			}
			const C = Object(_.c)({
				canShow: (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = Object(f.u)(e, {
						subredditId: n
					});
					return !(!s || s.provider !== m.a.Stellar)
				},
				userId: e => e.user.account ? e.user.account.id : void 0
			});
			t.default = Object(a.b)(C)(Object(i.b)(S))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r, a = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, t, n, s) {
				return Object(o.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: s
				})
			}
			async function i(e, t) {
				const n = await async function(e, t, n) {
					return Object(o.a)(e, {
						endpoint: "".concat(a.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, s.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function l(e, t, n, r) {
					const a = await i(e, t),
						o = Object.assign(Object.assign({}, a), {
							[n]: r
						});
					return (await c(e, t, s.UpsellBanners, o)).ok ? o : a
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(s || (s = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(r || (r = {}));
			const d = async (e, t, n) => l(e, t, n, !0), m = async (e, t, n) => l(e, t, n, !1), u = (e, t) => c(e, t, s.UpsellBanners, Object.keys(r).reduce((e, t) => (e[r[t]] = !1, e), {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.ef59424ca21fc80ccd09.js.map