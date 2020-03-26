// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.800446e8c625988b6646.js
// Retrieved at 3/26/2020, 7:20:17 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceWalletRegistrationStellarBanner"], {
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/reddit/selectors/gov.ts");
			const d = Object(a.c)({
				tokenSymbol: i.q
			});
			t.a = Object(o.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/Governance/Token/index.tsx"),
				a = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				c = n.n(a);
			const i = 15753096e5,
				d = 6e4,
				l = 60 * d,
				u = 24 * l;

			function m(e) {
				return Math.max(0, e - Date.now())
			}
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						remainingTimeMs: m(e.deadline || i)
					}
				}
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						this.setState({
							remainingTimeMs: m(this.props.deadline || i)
						})
					}, 1e3)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const {
						remainingTimeMs: e
					} = this.state, t = Math.floor(e / u), n = Math.floor(e % u / l), r = Math.floor(e % l / d), a = Math.floor(e % d / 1e3);
					return s.a.createElement("div", {
						className: c.a.countdownTimer
					}, s.a.createElement(o.a, {
						className: c.a.token,
						subredditId: this.props.subredditId
					}), e ? "".concat(t, "D : ").concat(n, "H : ").concat(r, "M : ").concat(a, "S REMAINING") : null)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/endpoints/economics/banners.ts"),
				m = n("./src/reddit/endpoints/governance/crypto.ts"),
				b = n("./src/config.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			async function f(e, t) {
				const n = await Object(p.a)(e, {
					endpoint: "".concat(b.a.metaUrl, "/crypto/stellar/challenges"),
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
			async function g(e, t) {
				return Object(p.a)(e, {
					endpoint: "".concat(b.a.metaUrl, "/crypto-contacts?userIds=").concat(t, "&providers=stellar"),
					method: "get"
				})
			}
			const h = (() => {
				const e = {};
				return async function(t, n) {
					if (e[n]) return e[n].response;
					let r;
					const s = new Promise(s => {
						r = setInterval(async () => {
							const o = await g(t, n);
							if (o.ok && o.body.contacts && o.body.contacts[n]) {
								const t = o.body.contacts[n].find(e => "stellar" === e.provider);
								t && t.address && (clearInterval(r), delete e[n], s(!0))
							}
						}, 1e3), setTimeout(() => {
							clearInterval(r), delete e[n], s(!1)
						}, 3e5)
					});
					return e[n] = {
						interval: r,
						response: s
					}, s
				}
			})();
			var v = n("./src/reddit/i18n/utils.ts"),
				y = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				x = n("./src/reddit/icons/svgs/Close/index.tsx"),
				w = n("./src/reddit/selectors/gov.ts"),
				I = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.m.less"),
				k = n.n(I);
			const j = 1576476e6;
			class _ extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						completed: !1
					}, this.dismissBanner = () => Object(u.c)(this.props.apiContext(), this.props.subredditId, u.a.WalletRegistration), this.onClose = () => {
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
						t && await h(e(), t) && this.onComplete()
					}
				}
				async componentDidMount() {
					const {
						apiContext: e,
						subredditId: t,
						userId: n
					} = this.props;
					if (n) {
						const [r, s, o] = await Promise.all([Object(u.b)(e(), t), f(e(), t), g(e(), n)]), a = !!r[u.a.StellarWalletRegistration], c = o.ok && o.body.contacts && o.body.contacts[n] && o.body.contacts[n].find(e => "stellar" === e.provider), i = c && !!c.address;
						a || !s.url || i || this.setState({
							sep7link: s.url
						})
					}
				}
				render() {
					const {
						canShow: e,
						className: t,
						subredditId: n
					} = this.props, {
						completed: r,
						sep7link: o
					} = this.state;
					return o && e ? r ? s.a.createElement("div", {
						className: Object(c.a)(k.a.completedBanner, t)
					}, s.a.createElement(i.a, {
						deadline: j,
						subredditId: n
					}), s.a.createElement(y.a, {
						className: k.a.checkIcon
					}), Object(v.c)("Registered for distribution")) : s.a.createElement("article", {
						className: Object(c.a)(k.a.container, t)
					}, s.a.createElement("div", {
						className: k.a.content
					}, s.a.createElement(i.a, {
						deadline: j,
						subredditId: n
					}), s.a.createElement("header", {
						className: k.a.title
					}, Object(v.c)("Register for Photons Distribution on the Stellar Blockchain")), s.a.createElement("div", {
						className: k.a.requirements
					}, Object(v.c)("Requires an app that can handle SEP7 links, like "), s.a.createElement("a", {
						href: "https://lobstr.co/",
						target: "_blank"
					}, "Lobstr"), Object(v.c)(".")), s.a.createElement("div", {
						className: k.a.disclaimer
					}, Object(v.c)("\n              Disclaimer: Neither Stellar nor Lobstr are affiliated with Reddit and the\n              following is not an advertisement or an endorsement. You understand and\n              agree that Reddit is not responsible for any actions or inactions or harm\n              caused by using either Stellar or Lobstr.\n            "))), s.a.createElement(l.g, {
						className: k.a.registerLink,
						href: o,
						target: "_blank",
						onClick: this.checkForComplete
					}, Object(v.c)("register")), s.a.createElement(x.a, {
						className: k.a.close,
						onClick: this.onClose
					})) : null
				}
			}
			const C = Object(a.c)({
				canShow: (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(w.s)(e, {
						subredditId: n
					});
					return !(!r || r.provider !== m.a.Stellar)
				},
				userId: e => e.user.account ? e.user.account.id : void 0
			});
			t.default = Object(o.b)(C)(Object(d.b)(_))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, t, n, r) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: r
				})
			}
			async function i(e, t) {
				const n = await async function(e, t, n) {
					return Object(a.a)(e, {
						endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, s) {
					const o = await i(e, t),
						a = Object.assign({}, o, {
							[n]: s
						});
					return (await c(e, t, r.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})), n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "c", (function() {
					return l
				})), n.d(t, "e", (function() {
					return u
				})), n.d(t, "d", (function() {
					return m
				})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => c(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function i(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
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
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "l", (function() {
				return I
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "r", (function() {
				return O
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "k", (function() {
				return E
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = n("./src/reddit/selectors/postCreations.ts");
			const i = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = j(e, {
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
				m = (e, t) => {
					const n = I(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = I(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = I(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || i
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				w = (e, t) => {
					const n = O(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				I = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const n = k(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = j(e, t),
						r = k(e, t);
					return n && n.provider || r && r.provider
				},
				C = (e, t) => {
					const n = _(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				O = (e, t) => {
					const n = j(e, t),
						r = _(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				S = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = j(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				E = (e, t) => {
					const n = k(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceWalletRegistrationStellarBanner.800446e8c625988b6646.js.map