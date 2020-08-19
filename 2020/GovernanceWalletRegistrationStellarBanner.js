// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.f9a6a9b58ce399146d8d.js
// Retrieved at 8/19/2020, 12:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceWalletRegistrationStellarBanner"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(a.c)({
				tokenSymbol: d.r
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: n
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
				i = n.n(a);
			const c = 15753096e5,
				d = 6e4,
				l = 60 * d,
				u = 24 * l;

			function m(e) {
				return Math.max(0, e - Date.now())
			}
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						remainingTimeMs: m(e.deadline || c)
					}
				}
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						this.setState({
							remainingTimeMs: m(this.props.deadline || c)
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
						className: i.a.countdownTimer
					}, s.a.createElement(o.a, {
						className: i.a.token,
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
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				c = n("./src/reddit/contexts/ApiContext.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/endpoints/economics/banners.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts"),
				m = n("./src/config.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			async function p(e, t) {
				const n = await Object(b.a)(e, {
					endpoint: "".concat(m.a.metaUrl, "/crypto/stellar/challenges"),
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
				return Object(b.a)(e, {
					endpoint: "".concat(m.a.metaUrl, "/crypto-contacts?userIds=").concat(t, "&providers=stellar"),
					method: "get"
				})
			}
			const f = (() => {
				const e = {};
				return async function(t, n) {
					if (e[n]) return e[n].response;
					let r;
					const s = new Promise(s => {
						r = setInterval(async () => {
							const o = await h(t, n);
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
			var g = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				y = n("./src/reddit/icons/svgs/Close/index.tsx"),
				v = n("./src/reddit/selectors/gov.ts"),
				k = n("./node_modules/reselect/es/index.js"),
				x = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.m.less"),
				w = n.n(x);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = 1576476e6;
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						completed: !1
					}, this.dismissBanner = () => Object(l.c)(this.props.apiContext(), this.props.subredditId, l.a.WalletRegistration), this.onClose = () => {
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
						t && await f(e(), t) && this.onComplete()
					}
				}
				async componentDidMount() {
					const {
						apiContext: e,
						subredditId: t,
						userId: n
					} = this.props;
					if (n) {
						const [r, s, o] = await Promise.all([Object(l.b)(e(), t), p(e(), t), h(e(), n)]), a = !!r[l.a.StellarWalletRegistration], i = o.ok && o.body.contacts && o.body.contacts[n] && o.body.contacts[n].find(e => "stellar" === e.provider), c = i && !!i.address;
						a || !s.url || c || this.setState({
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
						className: Object(a.a)(w.a.completedBanner, t)
					}, s.a.createElement(i.a, {
						deadline: _,
						subredditId: n
					}), s.a.createElement(g.a, {
						className: w.a.checkIcon
					}), I._("Registered for distribution", null, {
						hk: "p7lNT"
					})) : s.a.createElement("article", {
						className: Object(a.a)(w.a.container, t)
					}, s.a.createElement("div", {
						className: w.a.content
					}, s.a.createElement(i.a, {
						deadline: _,
						subredditId: n
					}), s.a.createElement("header", {
						className: w.a.title
					}, I._("Register for Photons Distribution on the Stellar Blockchain", null, {
						hk: "1jg78N"
					})), s.a.createElement("div", {
						className: w.a.requirements
					}, I._("Requires an app that can handle SEP7 links, like {=Lobstr} .", [I._param("=Lobstr", s.a.createElement("a", {
						href: "https://lobstr.co/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, I._("Lobstr", null, {
						hk: "2Z47KX"
					})))], {
						hk: "3epiNq"
					})), s.a.createElement("div", {
						className: w.a.disclaimer
					}, I._("Disclaimer: Neither Stellar nor Lobstr are affiliated with Reddit and the following is not an advertisement or an endorsement. You understand and agree that Reddit is not responsible for any actions or inactions or harm caused by using either Stellar or Lobstr.", null, {
						hk: "2rEXAk"
					}))), s.a.createElement(d.g, {
						className: w.a.registerLink,
						href: o,
						target: "_blank",
						onClick: this.checkForComplete
					}, I._("register", null, {
						hk: "3Pr9JU"
					})), s.a.createElement(y.a, {
						className: w.a.close,
						onClick: this.onClose
					})) : null
				}
			}
			const j = Object(k.c)({
				canShow: (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(v.u)(e, {
						subredditId: n
					});
					return !(!r || r.provider !== u.a.Stellar)
				},
				userId: e => e.user.account ? e.user.account.id : void 0
			});
			t.default = Object(o.b)(j)(Object(c.b)(E))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(a.a)(e, {
					endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: r
				})
			}
			async function c(e, t) {
				const n = await async function(e, t, n) {
					return Object(a.a)(e, {
						endpoint: "".concat(o.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, s) {
					const o = await c(e, t),
						a = Object.assign(Object.assign({}, o), {
							[n]: s
						});
					return (await i(e, t, r.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => i(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return p
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
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

			function c(e) {
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
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				});
			async function p(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
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
				return h
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "r", (function() {
				return w
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "u", (function() {
				return j
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "o", (function() {
				return R
			})), n.d(t, "l", (function() {
				return O
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
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
					const n = _(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = _(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = _(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				f = (e, t) => {
					const n = h(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				g = (e, t) => {
					const n = h(e, t);
					return n && n.amount || "0"
				},
				y = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(i.g)(e);
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
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				k = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				I = (e, t) => {
					const n = C(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				_ = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				E = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				j = (e, t) => {
					const n = E(e, t);
					return n && n.walletProvider
				},
				N = (e, t) => {
					const n = j(e, t),
						r = E(e, t);
					return n && n.provider || r && r.provider
				},
				S = (e, t) => {
					const n = N(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				C = (e, t) => {
					const n = j(e, t),
						r = N(e, t);
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
				R = (e, t) => {
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
				O = (e, t) => {
					const n = E(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceWalletRegistrationStellarBanner.f9a6a9b58ce399146d8d.js.map