// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.07332611fc1140e34e12.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
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
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(a.c)({
				tokenSymbol: c.o
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return s.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
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
			const d = 15753096e5,
				c = 6e4,
				l = 60 * c,
				u = 24 * l;

			function m(e) {
				return Math.max(0, e - Date.now())
			}
			class b extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						remainingTimeMs: m(e.deadline || d)
					}
				}
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						this.setState({
							remainingTimeMs: m(this.props.deadline || d)
						})
					}, 1e3)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const {
						remainingTimeMs: e
					} = this.state, t = Math.floor(e / u), n = Math.floor(e % u / l), r = Math.floor(e % l / c), a = Math.floor(e % c / 1e3);
					return s.a.createElement("div", {
						className: i.a.countdownTimer
					}, s.a.createElement(o.a, {
						className: i.a.token,
						subredditId: this.props.subredditId
					}), e ? `${t}D : ${n}H : ${r}M : ${a}S REMAINING` : null)
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
				d = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/endpoints/economics/banners.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts"),
				m = n("./src/config.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			async function h(e, t) {
				const n = await Object(b.a)(e, {
					endpoint: `${m.a.metaUrl}/crypto/stellar/challenges`,
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
			async function p(e, t) {
				return Object(b.a)(e, {
					endpoint: `${m.a.metaUrl}/crypto-contacts?userIds=${t}&providers=stellar`,
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
							const o = await p(t, n);
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
			var y = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
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
						const [r, s, o] = await Promise.all([Object(l.b)(e(), t), h(e(), t), p(e(), n)]), a = !!r[l.a.StellarWalletRegistration], i = o.ok && o.body.contacts && o.body.contacts[n] && o.body.contacts[n].find(e => "stellar" === e.provider), d = i && !!i.address;
						a || !s.url || d || this.setState({
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
					}), s.a.createElement(y.a, {
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
					}))), s.a.createElement(c.j, {
						className: w.a.registerLink,
						href: o,
						target: "_blank",
						onClick: this.checkForComplete
					}, I._("Register", null, {
						hk: "4fB6FY"
					})), s.a.createElement(g.a, {
						className: w.a.close,
						onClick: this.onClose
					})) : null
				}
			}
			const j = Object(k.c)({
				canShow: (e, {
					subredditId: t
				}) => {
					const n = Object(v.r)(e, {
						subredditId: t
					});
					return !(!n || n.provider !== u.a.Stellar)
				},
				userId: e => e.user.account ? e.user.account.id : void 0
			});
			t.default = Object(o.b)(j)(Object(d.b)(E))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return d
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
					endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: r
				})
			}
			async function d(e, t) {
				const n = await async function(e, t, n) {
					return Object(a.a)(e, {
						endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function c(e, t, n, s) {
					const o = await d(e, t),
						a = {
							...o,
							[n]: s
						};
					return (await i(e, t, r.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const l = async (e, t, n) => c(e, t, n, !0), u = async (e, t, n) => c(e, t, n, !1), m = (e, t) => i(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return y
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
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function c(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function y(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "j", (function() {
				return j
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				a = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = x(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				c = (e, t) => {
					const n = v(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = v(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const n = m(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				h = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				p = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				g = (e, t) => {
					const n = _(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				v = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				x = (e, t) => {
					const n = k(e, t);
					return n && n.walletProvider
				},
				w = (e, t) => {
					const n = x(e, t),
						r = k(e, t);
					return n && n.provider || r && r.provider
				},
				I = (e, t) => {
					const n = w(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const n = x(e, t),
						r = w(e, t);
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
				E = (e, {
					subredditId: t
				}) => {
					const n = x(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				j = (e, t) => {
					const n = k(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceWalletRegistrationStellarBanner.07332611fc1140e34e12.js.map