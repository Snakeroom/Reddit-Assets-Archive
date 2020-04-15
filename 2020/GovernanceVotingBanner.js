// https://www.redditstatic.com/desktop2x/GovernanceVotingBanner.021aadb493537c22afe7.js
// Retrieved at 4/15/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceVotingBanner"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/reddit/components/Governance/VotingBanner/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/VotingBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-motion/lib/react-motion.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/localStorageAvailable/index.ts"),
				u = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/Button/index.m.less"),
				v = n.n(f);
			const g = p.a.wrapped(b.m, "InvertedPrimaryRouterLink", v.a),
				h = p.a.wrapped(b.l, "InvertedTertiaryButton", v.a);
			var x = n("./src/reddit/endpoints/governance/poll.ts"),
				j = n("./src/reddit/featureFlags/component.tsx"),
				O = n("./src/reddit/helpers/overlay/index.ts"),
				w = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				y = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				E = n("./src/reddit/selectors/gov.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/Governance/VotingBanner/index.m.less"),
				P = n.n(I);
			const N = 100,
				k = [{
					key: "banner",
					style: {
						bottom: Object(a.spring)(0)
					}
				}];
			class C extends o.a.Component {
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
						Object(l.a)() && this.props.subreddit && localStorage.setItem(S(this.props.subreddit.id), (new Date).toISOString())
					}, this.willEnter = () => ({
						bottom: -N
					}), this.willLeave = () => ({
						bottom: Object(a.spring)(-N)
					})
				}
				async componentDidMount() {
					if (T(this.props.subreddit) || !Object(l.a)()) return;
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
					if (T(this.props.subreddit) || !this.props.subreddit) return null;
					const {
						subreddit: e
					} = this.props;
					return o.a.createElement(a.TransitionMotion, {
						defaultStyles: [],
						didLeave: this.saveDismissState,
						styles: this.state.showBanner ? k : [],
						willEnter: this.willEnter,
						willLeave: this.willLeave
					}, t => o.a.createElement(s.Fragment, null, t.map(t => o.a.createElement("div", {
						className: P.a.container,
						key: t.key,
						style: t.style
					}, o.a.createElement("div", {
						className: P.a.inner
					}, o.a.createElement("div", {
						className: P.a.content
					}, o.a.createElement("div", {
						className: P.a.redditIconContainer
					}, o.a.createElement(y.a, {
						className: P.a.redditIcon
					}), o.a.createElement("div", {
						className: P.a.glowInner
					}), o.a.createElement("div", {
						className: P.a.glowOuter
					})), o.a.createElement("div", {
						className: P.a.description
					}, o.a.createElement("div", {
						className: P.a.cta
					}, r.fbt._("{subredditName} Governance Vote is Open:", [r.fbt._param("subredditName", e.displayText)], {
						hk: "3mIPYS"
					})), o.a.createElement("div", {
						className: P.a.postTitle
					}, this.state.postTitle))), o.a.createElement("div", {
						className: P.a.controls
					}, o.a.createElement(h, {
						className: P.a.button,
						onClick: this.dismissBanner
					}, r.fbt._("later", null, {
						hk: "3jW79t"
					})), o.a.createElement(g, {
						className: P.a.button,
						to: Object(O.b)(this.state.postUrl),
						onClick: this.dismissBanner
					}, o.a.createElement(w.a, {
						className: P.a.govIcon
					}), r.fbt._("vote", null, {
						hk: "3WuKai"
					}))))))))
				}
			}

			function S(e) {
				return "governance-banner-".concat(e)
			}

			function T(e) {
				if (!e) return !0;
				if (!Object(l.a)()) return !0;
				const t = S(e.id),
					n = localStorage.getItem(t);
				if (!n) return !1;
				const r = new Date(n).getTime();
				return Date.now() - c.w < r
			}
			const B = Object(d.c)({
					assets: (e, t) => {
						const n = Object(m.q)(e, t);
						if (n) return Object(E.l)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					language: _.P,
					subreddit: m.q
				}),
				A = Object(i.b)(B, e => ({
					onOpenPoll: e => {}
				})),
				H = Object(m.t)();
			t.default = Object(j.a)("spGovPolls", H(Object(u.b)(A(C))))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
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
			async function i(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, r) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const m = (e, t, n) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function p(e, t) {
				return Object(l.a)(Object(d.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function c(e, t, n) {
				const r = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, o = d(e, ["featureEnabled"]);
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "k", (function() {
				return k
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const d = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = E(e, {
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
					const n = w(e, t);
					if (n) return n.mainHeader
				},
				p = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				b = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
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
				g = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				h = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				O = (e, t) => {
					const n = P(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				w = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				y = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const n = y(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = E(e, t),
						r = y(e, t);
					return n && n.provider || r && r.provider
				},
				I = (e, t) => {
					const n = _(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				P = (e, t) => {
					const n = E(e, t),
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
				N = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = E(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const n = y(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceVotingBanner.021aadb493537c22afe7.js.map