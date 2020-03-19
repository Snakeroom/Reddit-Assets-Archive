// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.652d241fbcc9d1b03ad0.js
// Retrieved at 3/19/2020, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceWalletRegistration"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(c);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(r.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(r.a, o({}, e, {
				viewBox: "0 0 20 20"
			}), s.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new a.BigNumber(e),
					s = new a.BigNumber(t),
					r = new a.BigNumber(n.dividedBy(s)),
					o = new a.BigNumber("100").multipliedBy(r);
				return new a.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./src/app/strings/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				v = n("./src/reddit/actions/governance/constants.ts"),
				f = n("./src/reddit/actions/governance/errorToast.ts");
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "g", (function() {
				return T
			})), n.d(t, "j", (function() {
				return W
			})), n.d(t, "c", (function() {
				return G
			}));
			const C = Object(s.a)(v.b),
				x = Object(s.a)(v.c),
				y = Object(s.a)(v.d),
				w = Object(s.a)(v.e),
				j = Object(s.a)(v.f),
				k = (Object(s.a)(v.g), Object(s.a)(v.h), Object(s.a)(v.i)),
				E = Object(s.a)(v.j),
				O = Object(s.a)(v.k),
				N = Object(s.a)(v.l),
				I = Object(s.a)(v.r),
				_ = Object(s.a)(v.s),
				M = Object(s.a)(v.t),
				S = Object(s.a)(v.u),
				P = Object(s.a)(v.v),
				L = Object(s.a)(v.w),
				R = Object(s.a)(v.x),
				A = Object(s.a)(v.y),
				B = (e, t) => async (n, a, s) => {
					let r, {
							apiContext: o,
							gqlContext: i
						} = s,
						d = a().polls.models[e];
					if (n(O({
							pollId: e
						})), (r = d.type === b.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(o(), d.subredditId, e, t)).ok) {
						if (d.type === b.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(j({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(N(r.body));
						const s = a();
						if ((d = s.polls.models[e]) && Object(b.d)(d)) {
							const {
								postId: e
							} = d, t = s.posts.models[e];
							t && t.voteState === h.a.notVoted && n(Object(c.cb)(e))
						}
					} else n(E({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(f.a)(n, r.error || r.errors[0].messsage)
				}, T = (e, t) => async (n, s, c) => {
					let {
						apiContext: u
					} = c;
					n(M());
					const m = s().transfers.communityPoints.contentId || void 0,
						b = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: m
					}));
					if (b.ok) {
						const c = s().user.language;
						n(S(Object.assign({}, b.body, {
							subredditId: e.subredditId
						}))), n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(a.a)(c, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.p)(s(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(o.f)())
					} else n(I({
						error: b.error
					})), Object(f.a)(n, b.error)
				}, W = e => async (t, n, a) => {
					let {
						apiContext: s
					} = a;
					t(L());
					const r = await Object(m.a)(s(), e);
					r.ok ? t(R(r.body)) : t(P({
						error: r.error
					}))
				}, G = (e, t) => async (n, s, r) => {
					let {
						apiContext: o
					} = r;
					n(y());
					const c = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(o(), e, t);
					if (c.ok) {
						n(R({
							[t]: c.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(a.a)(s().user.language, r, {
								tokenName: Object(g.p)(s(), {
									subredditId: t
								})
							})
						}))
					} else Object(f.a)(n, c.error)
				}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/reddit/selectors/gov.ts");
			const d = Object(o.c)({
				tokenSymbol: i.q
			});
			t.a = Object(r.b)(d)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less": function(e, t, n) {
			e.exports = {
				completedBanner: "V1zMX9mirD_UkpJkdCo1V",
				spacer: "_3chLxKuGohAjO0xsQq2vpz",
				checkIcon: "_22Ah_fm3wOArXYFgc0uedQ",
				registeredMessage: "_25wXUBlKji03ZJA9WseqgQ"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/ApiContext.tsx"),
				d = n("./src/reddit/endpoints/economics/banners.ts"),
				l = n("./src/reddit/i18n/components.tsx"),
				u = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				m = n("./src/reddit/selectors/gov.ts"),
				b = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				p = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				h = n("./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less"),
				g = n.n(h);
			class v extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						completed: !1,
						show: !1
					}, this.onClose = () => {
						this.dismissBanner(), this.setState({
							show: !1
						})
					}, this.onComplete = () => {
						this.dismissBanner(), this.setState({
							completed: !0
						})
					}
				}
				async componentDidMount() {
					const {
						apiContext: e,
						publicAddress: t,
						subredditId: n
					} = this.props;
					if (this.props.userIsLoggedIn && !t) {
						!!(await Object(d.b)(e(), n))[d.a.WalletRegistration] || this.setState({
							show: !0
						}), window.resetWalletRegistrationBanner = () => {
							Object(d.e)(e(), n, d.a.WalletRegistration)
						}
					}
				}
				dismissBanner() {
					Object(d.c)(this.props.apiContext(), this.props.subredditId, d.a.WalletRegistration)
				}
				render() {
					const {
						blockchainProvider: e,
						className: t,
						publicAddress: n,
						subredditId: a,
						token: r
					} = this.props, {
						completed: o,
						show: i
					} = this.state;
					return i && e && !n ? o ? s.a.createElement("div", {
						className: Object(c.a)(g.a.completedBanner, t)
					}, s.a.createElement(p.a, {
						subredditId: a
					}), s.a.createElement("div", {
						className: g.a.spacer
					}), s.a.createElement(u.a, {
						className: g.a.checkIcon
					}), s.a.createElement("div", {
						className: g.a.registeredMessage
					}, s.a.createElement(l.c, null, "Registered for distribution"))) : s.a.createElement(b.a, {
						className: t,
						provider: e,
						subredditId: a,
						token: r,
						onClose: this.onClose,
						onComplete: this.onComplete
					}) : null
				}
			}
			const f = Object(o.c)({
				blockchainProvider: m.a,
				token: m.r,
				userIsLoggedIn: e => !!e.user.account,
				publicAddress: (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = Object(m.g)(e, {
						subredditId: n
					});
					return a && a.publicAddress
				}
			});
			t.default = Object(r.b)(f)(Object(i.b)(v))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less": function(e, t, n) {
			e.exports = {
				card: "_1xQOIa1W-lvxNl2X2CgHi4",
				text: "_23vkS08YjONGTXQSDGdesD",
				header: "-tq6OhWu7Ap3bmMEo3JWF",
				body: "_3iXHXamAjhLLIa9lF1LKCN",
				paragraph: "_2eUOHNioUr0YETlxaQmgE2",
				link: "GOoQIC1j4JenkopqtFD7Q",
				bold: "_24oau85Bciyfy1zuKy4Iil",
				cta: "_1fJj0dWv5nykWAFbuTvMBK",
				image: "_3fhH_bAKXmAR52bF07SbPi",
				button: "ksvjsl9d5lJczoAdJcliF",
				buttonIcon: "_2mVKlUP_UBRhv6yGxP7oCY",
				metaMaskCard: "_1o5whCNxaOOIYIBZ8CI7bc",
				verifyCard: "qI9sHQnfhCFOCAmSSm8Oe",
				registeredCard: "ZMYIV_ZVx3iDVL_Bf8iQo",
				aboutCard: "_6iLs3pfFykyTSgDzJkm7l",
				walletCard: "_3XUnFHoeYY3RP48MrHUTlb",
				connectCard: "_3eVl-jxEg3mUxSbYtumBwl",
				installedCheckmark: "_1AgtuN4IIQHHnLx_m69ONC",
				approvalMessage: "YWOubic269xeGS5BzBXWw"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/Governance/Token/index.tsx"),
				o = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				c = n.n(o);
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
					} = this.state, t = Math.floor(e / u), n = Math.floor(e % u / l), a = Math.floor(e % l / d), o = Math.floor(e % d / 1e3);
					return s.a.createElement("div", {
						className: c.a.countdownTimer
					}, s.a.createElement(r.a, {
						className: c.a.token,
						subredditId: this.props.subredditId
					}), e ? "".concat(t, "D : ").concat(n, "H : ").concat(a, "M : ").concat(o, "S REMAINING") : null)
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
		"./src/reddit/components/Governance/WalletRegistration/Common/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/uuid/v4.js"),
				c = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/governance/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/governance/ethereum.ts"),
				b = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				g = n("./src/config.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				C = n("./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less"),
				x = n.n(C),
				y = function(e) {
					const t = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/about.svg)");
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.aboutCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "Donuts Are No Longer Centralized!")), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement(b.c, null, "Backed by ", s.a.createElement("a", {
						href: "https://github.com/daonuts",
						className: x.a.link,
						target: "_blank"
					}, "smart contracts"), " developed by mod u/cslarson, Donuts are now ERC-20 tokens that you own and control on the Ethereum blockchain! Register to earn Donuts for your contributions to the subreddit and use them to buy perks in the community, like a special membership, higher weighting in polls, or the ability to control the top banner. Follow this simple wizard to register. Note: Donuts are not driven nor developed by Reddit."))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: t
						}
					}), s.a.createElement(v.f, {
						className: x.a.button,
						onClick: e.onNextStep
					}, s.a.createElement(b.c, null, "Start"), s.a.createElement(f.a, {
						className: x.a.buttonIcon
					}))))
				},
				w = n("./src/reddit/icons/svgs/Link/index.tsx");
			class j extends s.a.Component {
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						Object(m.c)() && (this.props.onNextStep(), window.clearInterval(this.intervalId))
					}, 500)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const e = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/connect.svg)");
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.connectCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "Connect Reddit to MetaMask")), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement(b.c, null, "This will allow Reddit to see your wallet’s public key and allow Reddit to request your signature on messages and transactions."))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: e
						}
					}), s.a.createElement(v.i, {
						className: x.a.button,
						onClick: m.b
					}, s.a.createElement(b.c, null, "Connect"), s.a.createElement(w.a, {
						className: x.a.buttonIcon
					}))))
				}
			}
			var k = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				E = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				O = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M10.5554 7.77144L7.88871 10.4381C7.81404 10.5128 7.71652 10.5493 7.619 10.5493C7.52224 10.5493 7.42471 10.5128 7.35004 10.4381L4.68338 7.77144C4.57443 7.66249 4.54166 7.49868 4.60109 7.3562C4.65976 7.21449 4.79843 7.12077 4.95233 7.12077H6.44338V5.06896C6.44338 4.85868 6.61404 4.68801 6.82433 4.68801H8.41443C8.62471 4.68801 8.79538 4.85868 8.79538 5.06896V7.12077H10.2857C10.4403 7.12077 10.579 7.21449 10.6377 7.3562C10.6971 7.49868 10.6643 7.66249 10.5554 7.77144M7.61926 1.14285C4.04821 1.14285 1.14307 4.048 1.14307 7.61904C1.14307 11.1893 4.04821 14.0952 7.61926 14.0952C11.1903 14.0952 14.0954 11.1893 14.0954 7.61904C14.0954 4.048 11.1903 1.14285 7.61926 1.14285"
				})),
				N = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts");
			const I = "https://metamask.io/",
				_ = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
			class M extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						clickedInstallButton: !1,
						isMetaMaskInstalled: Object(m.e)()
					}
				}
				render() {
					const {
						clickedInstallButton: e,
						isMetaMaskInstalled: t
					} = this.state, n = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/metamask.svg)");
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.metaMaskCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "Install the MetaMask Browser Extension"), t && s.a.createElement(E.a, {
						className: x.a.installedCheckmark
					})), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement("p", {
						className: x.a.paragraph
					}, s.a.createElement(b.c, null, s.a.createElement("a", {
						href: I,
						className: x.a.link,
						target: "_blank"
					}, "MetaMask"), ' is an Ethereum Wallet trusted by millions. The extension allows you to manage decentralized tokens and to access Ethereum-powered decentralized applications, or "Dapps", directly in your browser. You will need to reload the page after you install the extension.')), s.a.createElement("p", {
						className: x.a.paragraph
					}, s.a.createElement(b.c, null, "Disclaimer: MetaMask is not affiliated with Reddit and the following is not an advertisement or an endorsement. You understand that Reddit is not responsible for any actions or inactions or harm caused by using Metamask.")))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: n
						}
					}), t ? s.a.createElement(v.f, {
						className: x.a.button,
						onClick: this.props.onNextStep
					}, s.a.createElement(b.c, null, "Continue"), s.a.createElement(f.a, {
						className: x.a.buttonIcon
					})) : e ? s.a.createElement(v.f, {
						className: x.a.button,
						onClick: N.a
					}, s.a.createElement(b.c, null, "Reload page"), s.a.createElement(k.a, {
						className: x.a.buttonIcon
					})) : s.a.createElement(v.j, {
						className: x.a.button,
						href: _,
						target: "_blank",
						onClick: () => this.setState({
							clickedInstallButton: !0
						})
					}, s.a.createElement(b.c, null, "Get Extension"), s.a.createElement(O, {
						className: x.a.buttonIcon
					}))))
				}
			}
			var S = e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M15.8278 7.71709L15.0447 4.57483C14.625 2.89562 13.3316 1.55632 11.6691 1.07957L8.55662 0.187113C6.89279 -0.289905 5.08599 0.160525 3.84157 1.36271L2.71763 2.44761C2.53644 2.36832 2.33627 2.32433 2.12583 2.32433C1.30975 2.32433 0.648193 2.98589 0.648193 3.80197C0.648193 4.04193 0.705395 4.26854 0.806908 4.46889C0.547962 4.86933 0.348128 5.30713 0.216101 5.76783C-0.0184979 6.58567 -0.0337468 7.45525 0.172179 8.28326L0.956131 11.4246C1.37437 13.1039 2.66792 14.4434 4.33188 14.9206L7.44436 15.813C7.88293 15.9387 8.33114 16 8.77675 16C10.0206 16 11.2423 15.5223 12.1597 14.6373L14.4886 12.3879C15.1013 11.7956 15.5492 11.0501 15.7838 10.232C16.0184 9.41402 16.0337 8.54438 15.8278 7.71709ZM1.49235 5.1373C1.3296 5.41768 1.2027 5.71619 1.11403 6.0254L1.1138 6.02619L1.12933 6.03038C1.68311 6.18912 2.14176 6.55399 2.42093 7.05766C2.74741 7.64566 3.49279 7.85908 4.08163 7.53351C4.50625 7.29819 5.00386 7.21289 5.48114 7.29298C5.49328 7.29502 5.50522 7.29751 5.51697 7.30043L5.51718 7.29966L5.52028 7.28888C5.9132 5.9186 7.34177 5.12764 8.71097 5.52026C10.0802 5.91287 10.8725 7.34067 10.4796 8.71095L10.4765 8.72174L10.4763 8.72248C10.4982 8.72797 10.5199 8.73512 10.5414 8.74399C10.9964 8.93206 11.3633 9.25932 11.6022 9.69034C11.9285 10.279 12.6727 10.4925 13.2614 10.1661C13.7602 9.88952 14.3369 9.82179 14.8857 9.97507L14.8858 9.97443C15.0726 9.32325 15.0903 8.62246 14.9212 7.94274L14.8549 7.67671C14.6858 7.91679 14.4065 8.07365 14.0906 8.07365C13.5746 8.07365 13.1563 7.65538 13.1563 7.13942C13.1563 6.62346 13.5746 6.20519 14.0906 6.20519C14.2427 6.20519 14.3864 6.24157 14.5134 6.30611L14.1384 4.80136C13.7983 3.44025 12.7592 2.36408 11.4116 1.97765L9.03074 1.29494C9.04152 1.36569 9.04712 1.43814 9.04712 1.5119C9.04712 2.30045 8.40787 2.9397 7.61932 2.9397C6.83077 2.9397 6.19152 2.30045 6.19152 1.5119C6.19152 1.35 6.21847 1.1944 6.26812 1.04933C5.61024 1.21321 4.99488 1.5474 4.49033 2.03482L3.41264 3.07513C3.53412 3.28974 3.60346 3.53776 3.60346 3.80197C3.60346 4.61804 2.9419 5.2796 2.12583 5.2796C1.89912 5.2796 1.68434 5.22854 1.49235 5.1373ZM9.5796 8.4607C9.32715 9.32787 8.41534 9.83083 7.54641 9.5815C6.67774 9.33244 6.17075 8.42271 6.41825 7.54642C6.62509 6.82522 7.28509 6.3544 8.00049 6.3544C8.15024 6.3544 8.30247 6.37499 8.45339 6.41832C8.87593 6.53947 9.22601 6.81779 9.4391 7.20201C9.6522 7.5863 9.70277 8.03074 9.5796 8.4607ZM5.32631 8.2143C5.36094 8.22011 5.39532 8.22195 5.42898 8.22016C5.5179 9.25462 6.23114 10.1763 7.2889 10.4796C8.35052 10.784 9.4479 10.3763 10.0703 9.53999C10.1042 9.56716 10.1424 9.59003 10.1845 9.60744C10.4421 9.71386 10.6497 9.89913 10.785 10.1432C11.1781 10.8523 11.9147 11.253 12.6732 11.253C13.0263 11.253 13.3842 11.1662 13.7143 10.9832C13.9612 10.8463 14.2415 10.7998 14.5159 10.848C14.3345 11.1636 14.1078 11.4565 13.8392 11.7161L11.5106 13.9653C10.5009 14.9394 9.0495 15.3014 7.70185 14.915L4.58934 14.0225C3.24062 13.6358 2.2016 12.5596 1.86259 11.1988L1.07866 8.05709C0.988196 7.69351 0.951205 7.3239 0.964941 6.95908C1.23698 7.06081 1.4616 7.25386 1.604 7.51089C1.99761 8.21939 2.73477 8.61983 3.49383 8.61983C3.84677 8.61983 4.2044 8.53323 4.53428 8.35076C4.77839 8.21548 5.05235 8.1681 5.32631 8.2143ZM11.4706 5.87934C12.2076 5.87934 12.8052 5.28182 12.8052 4.54474C12.8052 3.80765 12.2076 3.21013 11.4706 3.21013C10.7335 3.21013 10.136 3.80765 10.136 4.54474C10.136 5.28182 10.7335 5.87934 11.4706 5.87934ZM6.4448 4.28874C6.4448 4.8047 6.02653 5.22296 5.51057 5.22296C4.99462 5.22296 4.57635 4.8047 4.57635 4.28874C4.57635 3.77278 4.99462 3.35451 5.51057 3.35451C6.02653 3.35451 6.4448 3.77278 6.4448 4.28874Z"
				})),
				P = function(e) {
					const t = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/registered.svg)"),
						{
							onNextStep: n,
							token: a
						} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.registeredCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "That’s It, You Are Registered!")), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement("p", {
						className: x.a.paragraph
					}, s.a.createElement(b.c, null, "Your wallet will receive Donuts after the next regular distribution based on the karma you earn in this subreddit.")), s.a.createElement("p", {
						className: x.a.paragraph
					}, s.a.createElement(b.c, null, "To view your balance in MetaMask, you’ll need to ", s.a.createElement("span", {
						className: x.a.bold
					}, "track"), " the Donut token by clicking the button below. After that, go earn more Donuts by creating some great content on r/EthTrader!")))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: t
						}
					}), s.a.createElement(v.f, {
						className: x.a.button,
						onClick: () => a ? Object(m.i)(a).then(n) : n()
					}, a ? s.a.createElement(b.c, null, "Track Donuts") : s.a.createElement(b.c, null, "Finish"), s.a.createElement(S, {
						className: x.a.buttonIcon
					}))))
				},
				L = (n("./node_modules/core-js/modules/es6.regexp.split.js"), n("./src/reddit/actions/governance/errorToast.ts")),
				R = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/contexts/ApiContext.tsx"),
				B = n("./src/reddit/controls/Checkbox/index.tsx"),
				T = n("./src/reddit/endpoints/governance/crypto.ts"),
				W = n("./src/reddit/i18n/utils.ts"),
				G = n("./src/reddit/icons/svgs/Post/index.tsx"),
				D = n("./src/reddit/models/Toast/index.ts");
			class H extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						approvalChecked: !1
					}, this.toggleApprovalCheckbox = () => {
						this.setState({
							approvalChecked: !this.state.approvalChecked
						})
					}, this.runVerification = async () => {
						const e = Object(m.c)();
						if (!e) return void this.props.onError(Object(W.c)("Please select an Ethereum wallet in your provider"));
						const t = this.props.provider;
						if (!t.startsWith("ethereum")) throw new Error("expected Ethereum provider");
						if (t.split(":").pop() !== Object(m.d)()) {
							const e = Object(T.c)(t);
							return void this.props.onError(Object(W.c)("Please select the ".concat(Object(W.b)("providerName", e), " in MetaMask")))
						}
						const n = await Object(T.d)(this.props.apiContext(), t, e);
						if (!n.ok) return void this.props.onGovernanceError(n.error);
						const a = n.body.payload;
						let s;
						try {
							s = await Object(m.h)(a)
						} catch (o) {
							return console.error(o), void(o.code !== m.a && this.props.onError(o.message || Object(W.c)("An error occured while trying to sign the registration message.")))
						}
						const r = await Object(T.e)(this.props.apiContext(), t, {
							registrationType: "crypto-registration-EIP712",
							address: e,
							signature: s
						});
						r.ok ? this.props.onNextStep() : this.props.onGovernanceError(r.error)
					}
				}
				render() {
					const {
						approvalChecked: e
					} = this.state, t = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/verify.svg)");
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.verifyCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "Sign a Verification Message")), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement(b.c, null, "Sign a message (not a transaction), to verify that the wallet is yours. This will not be sent to the blockchain and will not cost you anything."))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: t
						}
					}), s.a.createElement("div", {
						className: x.a.approvalMessage
					}, s.a.createElement(B.a, {
						isCheckboxSelected: e,
						toggleCheckbox: this.toggleApprovalCheckbox
					}), s.a.createElement("div", {
						onClick: this.toggleApprovalCheckbox
					}, s.a.createElement(b.c, null, "I understand and agree to allow Reddit to publicly display my wallet address linked to my username"))), s.a.createElement(v.i, {
						className: x.a.button,
						onClick: this.runVerification,
						disabled: !e
					}, s.a.createElement(b.c, null, "Verify in MetaMask"), s.a.createElement(G.a, {
						className: x.a.buttonIcon
					}))))
				}
			}
			var U, V = Object(A.b)(Object(r.b)(void 0, e => ({
					onGovernanceError: t => Object(L.a)(e, t),
					onError: t => e(Object(R.e)({
						duration: 5e3,
						kind: D.b.Error,
						text: t
					}))
				}))(H)),
				q = function(e) {
					const t = "url(".concat(g.a.assetPath, "/img/communityPoints/registration/ethtrader/wallet.svg)");
					return s.a.createElement("div", {
						className: Object(i.a)(x.a.card, x.a.walletCard)
					}, s.a.createElement("div", {
						className: x.a.text
					}, s.a.createElement("div", {
						className: x.a.header
					}, s.a.createElement(b.c, null, "Create a Wallet")), s.a.createElement("div", {
						className: x.a.body
					}, s.a.createElement(b.c, null, "Create your MetaMask account and Ethereum wallet by following the instructions in MetaMask after you install the extension."))), s.a.createElement("div", {
						className: x.a.cta
					}, s.a.createElement("div", {
						className: x.a.image,
						style: {
							backgroundImage: t
						}
					}), s.a.createElement(v.i, {
						className: x.a.button,
						onClick: e.onNextStep
					}, s.a.createElement(b.c, null, "Next"), s.a.createElement(f.a, {
						className: x.a.buttonIcon
					}))))
				},
				Z = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				z = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				F = n.n(z);

			function X(e) {
				const {
					children: t,
					isActive: n
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(F.a.tab, {
						[F.a.tabActive]: n
					})
				}, t)
			}! function(e) {
				e[e.About = 0] = "About", e[e.MetaMask = 1] = "MetaMask", e[e.Wallet = 2] = "Wallet", e[e.Connect = 3] = "Connect", e[e.Verify = 4] = "Verify", e[e.Registered = 5] = "Registered"
			}(U || (U = {}));
			const Y = [{
				id: U.About,
				name: Object(W.c)("About")
			}, {
				id: U.MetaMask,
				name: Object(W.c)("MetaMask")
			}, {
				id: U.Wallet,
				name: Object(W.c)("Wallet")
			}, {
				id: U.Connect,
				name: Object(W.c)("Connect")
			}, {
				id: U.Verify,
				name: Object(W.c)("Verify")
			}, {
				id: U.Registered,
				name: Object(W.c)("Registered")
			}];
			class J extends s.a.Component {
				constructor() {
					super(...arguments), this.setRef = e => {
						this.el = e, this.updateActiveTabLine()
					}
				}
				componentDidUpdate(e) {
					e.activeTab !== this.props.activeTab && this.updateActiveTabLine()
				}
				updateActiveTabLine() {
					const e = this.el;
					if (!e) return;
					const t = e.getElementsByClassName(F.a.tabActive)[0];
					if (t) {
						const n = e.getElementsByClassName(F.a.activeTabLine)[0];
						n.style.left = t.offsetLeft + "px", n.style.top = t.offsetTop + t.offsetHeight - 3 + "px", n.style.width = t.offsetWidth + "px"
					}
				}
				render() {
					const {
						activeTab: e
					} = this.props;
					return s.a.createElement("div", {
						className: F.a.tabBar,
						ref: this.setRef
					}, Y.map(t => s.a.createElement(X, {
						isActive: e === t.id,
						key: t.id
					}, t.name)), s.a.createElement("div", {
						className: F.a.activeTabLine
					}))
				}
			}
			class Q extends s.a.Component {
				constructor(e) {
					super(e), this.onNextStep = () => {
						const {
							activeTab: e
						} = this.state;
						if (e === U.Registered) return this.props.onRefreshWallet(), this.props.onComplete(), void this.props.sendEvent(e => {
							const t = h.defaults(e);
							return Object.assign({
								source: "meta",
								action: "complete",
								noun: "wallet_registration",
								correlationId: this.correlationId
							}, t, {
								subreddit: h.subreddit(e)
							})
						});
						const t = e === U.About ? U.MetaMask : e === U.MetaMask ? U.Wallet : e === U.Wallet ? U.Connect : e === U.Connect ? U.Verify : U.Registered;
						this.setState({
							activeTab: t
						}), this.sendViewTabEvent(t)
					}, this.correlationId = c()();
					const t = Object(N.b)(e.pageLayer);
					this.state = {
						activeTab: t && Object(m.e)() ? U.Wallet : U.About
					}
				}
				async componentDidMount() {
					this.sendViewTabEvent(this.state.activeTab)
				}
				sendViewTabEvent(e) {
					this.props.sendEvent(t => {
						const n = h.defaults(t);
						return Object.assign({
							source: "meta",
							action: "view",
							noun: "wallet_registration",
							correlationId: this.correlationId
						}, n, {
							actionInfo: Object.assign({}, n.actionInfo, {
								paneName: e + ""
							}),
							subreddit: h.subreddit(t)
						})
					})
				}
				render() {
					const {
						className: e,
						onClose: t,
						provider: n,
						subredditId: a,
						token: r
					} = this.props, {
						activeTab: o
					} = this.state, c = o === U.About ? y : o === U.MetaMask ? M : o === U.Wallet ? q : o === U.Connect ? j : o === U.Verify ? V : P;
					return s.a.createElement("article", {
						className: Object(i.a)(F.a.container, e)
					}, s.a.createElement(Z.a, {
						subredditId: a
					}), s.a.createElement("button", {
						className: F.a.closeButton,
						onClick: t
					}, s.a.createElement(p.a, {
						className: F.a.closeIcon
					})), s.a.createElement("div", {
						className: F.a.title
					}, s.a.createElement(b.c, null, "Register for Donuts Distribution on the Ethereum Blockchain")), s.a.createElement(J, {
						activeTab: o
					}), s.a.createElement(c, {
						onNextStep: this.onNextStep,
						provider: n,
						token: r
					}))
				}
			}
			const K = Object(r.b)(void 0, (e, t) => ({
				onRefreshWallet: () => e(Object(d.j)({
					subredditId: t.subredditId
				}))
			}));
			t.a = K(Object(l.c)(Object(u.t)()(Q)))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = n("./src/lib/addQueryParams/index.ts");
			const s = "metamaskInstalled";

			function r() {
				window.location.replace(Object(a.a)(window.location.href, {
					[s]: "true"
				}))
			}

			function o(e) {
				return !!(e && e.queryParams && e.queryParams[s])
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3cb6Iu4tOxWvMXdDQAe_LF",
				modalMain: "_2m8xhJDq3pM2zmTv0-Wqee"
			}
		},
		"./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				b = n("./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less"),
				p = n.n(b);
			class h extends s.a.Component {
				render() {
					const {
						blockchainProvider: e,
						onClose: t,
						subredditId: n,
						token: a
					} = this.props;
					return n && e ? s.a.createElement(d.c, {
						className: p.a.modalBody
					}, s.a.createElement(d.j, {
						className: p.a.modalMain
					}, s.a.createElement(m.a, {
						provider: e,
						subredditId: n,
						token: a,
						onClose: t,
						onComplete: t
					}))) : null
				}
			}
			const g = Object(o.a)(e => e, l.q, (e, t) => {
					const n = {
						subredditId: t && t.id || void 0
					};
					return {
						blockchainProvider: Object(u.a)(e, n),
						subredditId: n.subredditId,
						token: Object(u.r)(e, n)
					}
				}),
				v = Object(l.t)(),
				f = Object(r.b)(g, (e, t) => ({
					onClose: () => e(Object(i.f)())
				}));
			t.default = Object(c.a)(v(f(h)))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var i = e => s.a.createElement("svg", c({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), s.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, s.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, s.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = n("./src/reddit/controls/Checkbox/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var b = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]])
				}
				return n
			};
			const p = e => t => {
					const {
						className: n,
						disabled: a,
						redditStyle: o,
						"data-redditstyle": c
					} = t, i = b(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, n) => {
						const a = !(!t && !n);
						let s = "";
						return s = e ? a ? u.a.mDisabledRedditStyle : u.a.mDisabled : a ? u.a.mActiveRedditStyle : u.a.mActive
					})(a, o, c);
					return s.a.createElement(e, m({
						className: Object(r.a)(u.a.Checkbox, d, n)
					}, i))
				},
				h = p(d.a),
				g = p(i);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : o.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(r.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a, s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function c(e, t, n, a) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
					method: "patch",
					data: a
				})
			}
			async function i(e, t) {
				const n = await async function(e, t, n) {
					return Object(o.a)(e, {
						endpoint: "".concat(r.a.metaUrl, "/storage/").concat(t, "/me/").concat(n),
						method: "get"
					})
				}(e, t, a.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, s) {
					const r = await i(e, t),
						o = Object.assign({}, r, {
							[n]: s
						});
					return (await c(e, t, a.UpsellBanners, o)).ok ? o : r
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(a || (a = {})), n.d(t, "a", (function() {
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
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => c(e, t, a.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var a, s = n("./src/config.ts"),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case a.Ethereum:
						return "Ethereum Main Network";
					case a.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, n) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function i(e, t, n) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function d(e, t, n) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(a || (a = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var a = n("./node_modules/lodash/get.js"),
				s = n.n(a),
				r = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, a) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(a)
				})
			}
			const m = (e, t, n) => Object(c.a)(e, Object.assign({}, o, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function b(e, t) {
				return Object(l.a)(Object(i.a)(e, [d.a]), {
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
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var a = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							a = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: a
						})
					}
					return e
				})
			}

			function c(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(a.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/reddit/i18n/utils.ts");

			function s() {
				return window.ethereum
			}

			function r() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function c() {
				return s().networkVersion || null
			}

			function i() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, a, r) {
				const [o, c] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await i();
				const d = new o.providers.Web3Provider(s()).getSigner(),
					l = new o.Contract(e, c, d),
					u = await l[a](...r);
				return await u.wait()
			}
			const u = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "to",
						type: "address"
					}, {
						name: "value",
						type: "uint256"
					}, {
						name: "data",
						type: "bytes"
					}],
					name: "send",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			const m = 1;
			async function b(e, t, a, s, r) {
				const o = await n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: c,
						hexlify: i,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = o.utils,
					p = c(a).add(r),
					h = m,
					g = "0x" + [i(1)].concat([h, c(s), c(r)].map(i).map(e => d(e, 32))).concat(i(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, a) {
					return l(e, Promise.resolve(u), "send", [t, n, a])
				}(e, t, p.toString(), g)
			}
			const p = {
				abi: [{
					constant: !1,
					inputs: [{
						name: "_subscriber",
						type: "address"
					}, {
						name: "_units",
						type: "uint16"
					}],
					name: "subscribe",
					outputs: [],
					payable: !1,
					stateMutability: "nonpayable",
					type: "function"
				}]
			};
			async function h(e, t, n) {
				await i();
				const s = o() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(Object(a.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function g(e) {
				const t = s();
				return new Promise((n, s) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? n(e) : s({
								message: Object(a.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function v(e) {
				return new Promise((t, n) => {
					s().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, a) => {
						e || "error" in a ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const c = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => c.has((Object(r.e)(e) || "").toLowerCase()) || i.has((Object(r.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: a.db
				}) === a.kb.Enabled
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
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return _
			}));
			var a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/experiments/pollsGA.ts"),
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
					const a = k(e, {
						subredditId: n
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.harberger ? a.extra.contracts.harberger : {
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
				b = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = w(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(o.a)(e)) {
						const t = Object(c.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						a = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (a) {
						const e = !!a.polls && !1 === a.polls.canCreate;
						return n && !e
					}
					return n
				},
				v = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				f = (e, t) => {
					const n = Object(a.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || i
				},
				C = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				y = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				w = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const n = j(e, t);
					return n && n.walletProvider
				},
				E = (e, t) => {
					const n = k(e, t),
						a = j(e, t);
					return n && n.provider || a && a.provider
				},
				O = (e, t) => {
					const n = E(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				N = (e, t) => {
					const n = k(e, t),
						a = E(e, t);
					if (n && !n.inTransition && a === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const r = n && n.extra && n.extra.contracts,
						o = r && r.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const a = k(e, {
						subredditId: n
					});
					return a && a.extra && a.extra.contracts && a.extra.contracts.subscriptions ? a.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const n = j(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=GovernanceWalletRegistration.652d241fbcc9d1b03ad0.js.map