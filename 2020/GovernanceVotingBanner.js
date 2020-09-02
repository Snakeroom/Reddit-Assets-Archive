// https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.149a966a98fd64bcecbd.js
// Retrieved at 9/2/2020, 6:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceVotingBanner"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/reddit/components/Governance/VotingBanner/index.m.less": function(e, t, r) {
			e.exports = {
				bannerTitle: "_2RlUIqHbJhtqBPVOWc9EIl",
				button: "v2IDimagf9R1V7C7SahRI",
				container: "_1hs-SYfOXsOvtGLvgYSGq",
				content: "t61e4NmTLweNDu9wA2hM6",
				controls: "_-9zD1vVqEYmUMZcelQho0",
				flexRow: "_1Q5pm9fTTP3El8OlDEZLem",
				cta: "_1aUSA6nx3p-1LER33aE5sM",
				description: "_2JKRsNNJ0TUIpOpUjXAkpL",
				glowInner: "xB16-1ZjXRo4UiBMlYtPy",
				glowAnimationInner: "_3STmIEeB0QCC1Re7XiJe-_",
				glowOuter: "_1kAC_-k9cYMPGSTdijNoI2",
				glowAnimationOuter: "_3XZ0cG3H3WJKDt_a_msBqN",
				govIcon: "_1U_LKqjH8Y6XwWtdOJK2Ma",
				inner: "mRG6WomZbOvrz4BzzTv_A",
				postTitle: "-fXFhjjEdrS0uDz5V8nQG",
				redditIconContainer: "_1cp4bjnJiK5Xlg8tlgnJHc",
				redditIcon: "_3Etrkn9wjZNA84PFTPQ1H1"
			}
		},
		"./src/reddit/components/Governance/VotingBanner/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/localStorageAvailable/index.ts"),
				l = r("./src/reddit/contexts/ApiContext.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/lib/lessComponent.tsx"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/Button/index.m.less"),
				h = r.n(f);
			const v = p.a.wrapped(b.m, "InvertedPrimaryRouterLink", h.a),
				g = p.a.wrapped(b.l, "InvertedTertiaryButton", h.a);
			var x = r("./src/reddit/endpoints/governance/poll.ts"),
				E = r("./src/reddit/featureFlags/component.tsx"),
				y = r("./src/reddit/helpers/overlay/index.ts"),
				w = r("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				j = r("./src/reddit/icons/svgs/Snoo/index.tsx"),
				O = r("./src/reddit/selectors/gov.ts"),
				I = r("./src/reddit/components/Governance/VotingBanner/index.m.less"),
				_ = r.n(I);
			const k = 100,
				N = [{
					key: "banner",
					style: {
						bottom: Object(a.spring)(0)
					}
				}];
			class P extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						postTitle: "",
						postUrl: "",
						showBanner: !1
					}, this.dismissBanner = () => {
						this.setState({
							showBanner: !1
						})
					}, this.saveDismissState = () => {
						Object(u.a)() && this.props.subreddit && localStorage.setItem(T(this.props.subreddit.id), (new Date).toISOString())
					}, this.willEnter = () => ({
						bottom: -k
					}), this.willLeave = () => ({
						bottom: Object(a.spring)(-k)
					})
				}
				async componentDidMount() {
					if (C(this.props.subreddit) || !Object(u.a)()) return;
					const e = function(e) {
						if (e && e.pinnedPolls) {
							const t = Object.keys(e.pinnedPolls)[0];
							if (t) return e.pinnedPolls.content[t].postId
						}
					}(this.props.assets);
					if (e) {
						const t = await Object(x.a)(this.props.apiContext(), e);
						t.ok && this.setState({
							postTitle: t.body.title,
							postUrl: t.body.url,
							showBanner: !0
						})
					}
				}
				render() {
					if (C(this.props.subreddit) || !this.props.subreddit) return null;
					const {
						subreddit: e
					} = this.props;
					return o.a.createElement(a.TransitionMotion, {
						defaultStyles: [],
						didLeave: this.saveDismissState,
						styles: this.state.showBanner ? N : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave
					}, t => o.a.createElement(s.Fragment, null, t.map(t => o.a.createElement("div", {
						className: _.a.container,
						key: t.key,
						style: t.style
					}, o.a.createElement("div", {
						className: _.a.inner
					}, o.a.createElement("div", {
						className: _.a.content
					}, o.a.createElement("div", {
						className: _.a.redditIconContainer
					}, o.a.createElement(j.a, {
						className: _.a.redditIcon
					}), o.a.createElement("div", {
						className: _.a.glowInner
					}), o.a.createElement("div", {
						className: _.a.glowOuter
					})), o.a.createElement("div", {
						className: _.a.description
					}, o.a.createElement("div", {
						className: _.a.cta
					}, n.fbt._("{subredditName} Governance Vote is Open:", [n.fbt._param("subredditName", e.displayText)], {
						hk: "3mIPYS"
					})), o.a.createElement("div", {
						className: _.a.postTitle
					}, this.state.postTitle))), o.a.createElement("div", {
						className: _.a.controls
					}, o.a.createElement(g, {
						className: _.a.button,
						onClick: this.dismissBanner
					}, n.fbt._("later", null, {
						hk: "3jW79t"
					})), o.a.createElement(v, {
						className: _.a.button,
						to: Object(y.b)(this.state.postUrl),
						onClick: this.dismissBanner
					}, o.a.createElement(w.a, {
						className: _.a.govIcon
					}), n.fbt._("vote", null, {
						hk: "3WuKai"
					}))))))))
				}
			}

			function T(e) {
				return "governance-banner-".concat(e)
			}

			function C(e) {
				if (!e) return !0;
				if (!Object(u.a)()) return !0;
				const t = T(e.id),
					r = localStorage.getItem(t);
				if (!r) return !1;
				const n = new Date(r).getTime();
				return Date.now() - c.x < n
			}
			const S = Object(d.c)({
					assets: (e, t) => {
						const r = Object(m.q)(e, t);
						if (r) return Object(O.m)(e, {
							subredditId: r ? r.id : void 0
						})
					},
					subreddit: m.q
				}),
				R = Object(i.b)(S, e => ({
					onOpenPoll: e => {}
				})),
				B = Object(m.t)();
			t.default = Object(E.a)("spGovPolls", B(Object(l.b)(R(P))))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "j", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "k", (function() {
				return f
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function c(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(r)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				b = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function f(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/lodash/get.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				a = r("./src/graphql/operations/PollVote.json"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				u = (r("./src/reddit/models/Poll/index.ts"), r("./src/reddit/endpoints/governance/requester.ts"));

			function l(e, t, r, n) {
				return Object(u.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(r, "/votes/me/").concat(n)
				})
			}
			const m = (e, t, r) => Object(i.a)(e, Object.assign(Object.assign({}, a), {
				variables: {
					input: {
						postId: t,
						optionId: r
					}
				}
			}));

			function p(e, t) {
				return Object(u.a)(Object(d.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var r = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]])
					}
					return r
				};

			function c(e, t, r) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, o = d(e, ["featureEnabled"]);
					return n ? s.a.createElement(t, o) : void 0 !== r ? s.a.createElement(r, o) : null
				})
			}
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), s.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), s.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), s.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), s.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "t", (function() {
				return h
			})), r.d(t, "h", (function() {
				return v
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "k", (function() {
				return E
			})), r.d(t, "q", (function() {
				return y
			})), r.d(t, "r", (function() {
				return w
			})), r.d(t, "p", (function() {
				return j
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "u", (function() {
				return _
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "s", (function() {
				return P
			})), r.d(t, "o", (function() {
				return T
			})), r.d(t, "l", (function() {
				return C
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts"),
				o = r("./src/reddit/featureFlags/index.ts"),
				a = r("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = r("./src/reddit/selectors/postCreations.ts");
			const d = [],
				c = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = _(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const r = O(e, t);
					if (r) return r.mainHeader
				},
				p = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				b = (e, t) => {
					const r = O(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : c
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const r = f(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				v = (e, t) => {
					const r = f(e, t);
					return r && r.amount || "0"
				},
				g = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const r = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return r && !e
					}
					return r
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				E = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || d
				},
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				w = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || u,
				j = (e, t) => {
					const r = P(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				O = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const r = I(e, t);
					return r && r.walletProvider
				},
				k = (e, t) => {
					const r = _(e, t),
						n = I(e, t);
					return r && r.provider || n && n.provider
				},
				N = (e, t) => {
					const r = k(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const r = _(e, t),
						n = k(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				T = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = _(e, {
						subredditId: r
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const r = I(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.149a966a98fd64bcecbd.js.map