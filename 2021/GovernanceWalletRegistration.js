// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.6f6e5eba8e43a7e5d7a1.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(i);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: r,
						hover: o
					} = e;
				return a.a.createElement("svg", {
					className: Object(s.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: r,
						[c.a.hover]: !!o
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", c.a)
		},
		"./src/chat/icons/svgs/Refresh/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement(s.a, o({}, e, {
				viewBox: "0 0 20 20"
			}), a.a.createElement("path", {
				d: "M18 9a1 1 0 0 1 1 1v2c0 2.757-2.243 5-5 5H5v1.5a.5.5 0 0 1-.82.384l-3-2.5a.497.497 0 0 1 0-.768l3-2.5A.5.5 0 0 1 5 13.5V15h9c1.654 0 3-1.346 3-3v-2a1 1 0 0 1 1-1zM2 11a1 1 0 0 1-1-1V8c0-2.757 2.243-5 5-5h9V1.5a.5.5 0 0 1 .82-.384l3 2.5a.497.497 0 0 1 0 .768l-3 2.5A.5.5 0 0 1 15 6.5V5H6C4.346 5 3 6.346 3 8v2a1 1 0 0 1-1 1z"
			}))
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t),
					s = new r.BigNumber(n.dividedBy(a)),
					o = new r.BigNumber("100").multipliedBy(s);
				return new r.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return C
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "s", (function() {
				return E
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "u", (function() {
				return _
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return w
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				a = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				i = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				v = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				C = "GOVERNANCE__TRANSFER_FAILURE",
				x = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				k = "GOVERNANCE__TRANSFER_SUCCESS",
				_ = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				N = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				w = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function o(e, t) {
				e(Object(r.e)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(a.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var h = n("./src/reddit/endpoints/governance/wallet.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/gov.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				C = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(a.a)(g.b),
				E = Object(a.a)(g.c),
				k = Object(a.a)(g.e),
				_ = (Object(a.a)(g.f), Object(a.a)(g.g), Object(a.a)(g.h)),
				y = Object(a.a)(g.i),
				N = Object(a.a)(g.j),
				w = Object(a.a)(g.k),
				O = Object(a.a)(g.q),
				j = Object(a.a)(g.r),
				I = Object(a.a)(g.s),
				R = Object(a.a)(g.t),
				A = Object(a.a)(g.u),
				S = Object(a.a)(g.v),
				L = Object(a.a)(g.w),
				M = Object(a.a)(g.x),
				P = (e, t) => async (n, r, {
					apiContext: a,
					gqlContext: s
				}) => {
					let o, c = r().polls.models[e];
					if (n(N({
							pollId: e
						})), (o = c.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...l,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(s(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(a(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(k({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(w(o.body));
						const a = r();
						if ((c = a.polls.models[e]) && Object(m.e)(c)) {
							const {
								postId: e
							} = c, t = a.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.U)(e))
						}
					} else n(y({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(C.a)(n, o.error || o.errors[0].messsage)
				}, T = (e, t) => async (n, a, {
					apiContext: i
				}) => {
					n(I());
					const l = a().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: l
					});
					u.ok ? (n(R({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(s.a)(e.amount)), r.fbt._param("tokenName", Object(v.n)(a(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(O({
						error: u.error
					})), Object(C.a)(n, u.error))
				}, G = e => async (t, n, {
					apiContext: r
				}) => {
					t(S());
					const a = await Object(h.a)(r(), e);
					a.ok ? t(L(a.body)) : t(A({
						error: a.error
					}))
				}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				tokenSymbol: d.o
			});
			t.a = Object(s.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return a.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return a.a.createElement("img", {
					className: e.className,
					src: n
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/contexts/ApiContext.tsx"),
				c = n("./src/reddit/endpoints/economics/banners.ts"),
				d = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				l = n("./src/reddit/selectors/gov.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				b = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				h = n("./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less"),
				p = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class v extends a.a.Component {
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
						!!(await Object(c.b)(e(), n))[c.a.WalletRegistration] || this.setState({
							show: !0
						}), window.resetWalletRegistrationBanner = () => {
							Object(c.e)(e(), n, c.a.WalletRegistration)
						}
					}
				}
				dismissBanner() {
					Object(c.c)(this.props.apiContext(), this.props.subredditId, c.a.WalletRegistration)
				}
				render() {
					const {
						blockchainProvider: e,
						className: t,
						publicAddress: n,
						subredditId: r,
						token: s
					} = this.props, {
						completed: i,
						show: c
					} = this.state;
					return c && e && !n ? i ? a.a.createElement("div", {
						className: Object(o.a)(p.a.completedBanner, t)
					}, a.a.createElement(b.a, {
						subredditId: r
					}), a.a.createElement("div", {
						className: p.a.spacer
					}), a.a.createElement(d.a, {
						className: p.a.checkIcon
					}), a.a.createElement("div", {
						className: p.a.registeredMessage
					}, f._("Registered for distribution", null, {
						hk: "2CVmU4"
					}))) : a.a.createElement(m.a, {
						className: t,
						provider: e,
						subredditId: r,
						token: s,
						onClose: this.onClose,
						onComplete: this.onComplete
					}) : null
				}
			}
			const g = Object(u.c)({
				blockchainProvider: l.a,
				token: l.p,
				userIsLoggedIn: e => !!e.user.account,
				publicAddress: (e, {
					subredditId: t
				}) => {
					const n = Object(l.g)(e, {
						subredditId: t
					});
					return n && n.publicAddress
				}
			});
			t.default = Object(s.b)(g)(Object(i.b)(v))
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
				registeredCard: "ZMYIV_ZVx3iDVL_Bf8iQo",
				verifyCard: "qI9sHQnfhCFOCAmSSm8Oe",
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/reddit/components/Governance/Token/index.tsx"),
				o = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				i = n.n(o);
			const c = 15753096e5,
				d = 6e4,
				l = 60 * d,
				u = 24 * l;

			function m(e) {
				return Math.max(0, e - Date.now())
			}
			class b extends a.a.Component {
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
					} = this.state, t = Math.floor(e / u), n = Math.floor(e % u / l), r = Math.floor(e % l / d), o = Math.floor(e % d / 1e3);
					return a.a.createElement("div", {
						className: i.a.countdownTimer
					}, a.a.createElement(s.a, {
						className: i.a.token,
						subredditId: this.props.subredditId
					}), e ? `${t}D : ${n}H : ${r}M : ${o}S REMAINING` : null)
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/helpers/governance/ethereum.ts"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./node_modules/uuid/v4.js"),
				h = n.n(b),
				p = n("./src/config.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				g = n("./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less"),
				C = n.n(g);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function E(e) {
				const t = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/about.svg)`;
				return a.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.aboutCard)
				}, a.a.createElement("div", {
					className: C.a.text
				}, a.a.createElement("div", {
					className: C.a.header
				}, x._("Donuts Are No Longer Centralized!", null, {
					hk: "45RssI"
				})), a.a.createElement("div", {
					className: C.a.body
				}, x._("Backed by {=smart contracts} developed by mod u/cslarson, Donuts are now ERC-20 tokens that you own and control on the Ethereum blockchain! Register to earn Donuts for your contributions to the subreddit and use them to buy perks in the community, like a special membership, higher weighting in polls, or the ability to control the top banner. Follow this simple wizard to register. Note: Donuts are not driven nor developed by Reddit.", [x._param("=smart contracts", a.a.createElement("a", {
					href: "https://github.com/daonuts",
					className: C.a.link,
					rel: "noopener noreferrer",
					target: "_blank"
				}, x._("smart contracts", null, {
					hk: "3JWdHa"
				})))], {
					hk: "uGzqk"
				}))), a.a.createElement("div", {
					className: C.a.cta
				}, a.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.i, {
					className: C.a.button,
					onClick: e.onNextStep
				}, x._("Start", null, {
					hk: "3So7as"
				}), a.a.createElement(v.a, {
					className: C.a.buttonIcon
				}))))
			}
			var k = n("./src/reddit/icons/svgs/Link/index.tsx");
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class y extends a.a.Component {
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						Object(l.c)() && (this.props.onNextStep(), window.clearInterval(this.intervalId))
					}, 500)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const e = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/connect.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.connectCard)
					}, a.a.createElement("div", {
						className: C.a.text
					}, a.a.createElement("div", {
						className: C.a.header
					}, _._("Connect Reddit to MetaMask", null, {
						hk: "1uL476"
					})), a.a.createElement("div", {
						className: C.a.body
					}, _._("This will allow Reddit to see your wallet’s public key and allow Reddit to request your signature on messages and transactions.", null, {
						hk: "1IBG48"
					}))), a.a.createElement("div", {
						className: C.a.cta
					}, a.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: e
						}
					}), a.a.createElement(f.l, {
						className: C.a.button,
						onClick: l.b
					}, _._("Connect", null, {
						hk: "3rApnz"
					}), a.a.createElement(k.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var N = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				w = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				O = n("./src/reddit/icons/svgs/DownvoteCircle/index.tsx"),
				j = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts");
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = "https://metamask.io/", A = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						clickedInstallButton: !1,
						isMetaMaskInstalled: Object(l.e)()
					}
				}
				render() {
					const {
						clickedInstallButton: e,
						isMetaMaskInstalled: t
					} = this.state, n = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/metamask.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.metaMaskCard)
					}, a.a.createElement("div", {
						className: C.a.text
					}, a.a.createElement("div", {
						className: C.a.header
					}, I._("Install the MetaMask Browser Extension", null, {
						hk: "3MOJpi"
					}), t && a.a.createElement(w.a, {
						className: C.a.installedCheckmark
					})), a.a.createElement("div", {
						className: C.a.body
					}, a.a.createElement("p", {
						className: C.a.paragraph
					}, I._('{=MetaMask} is an Ethereum Wallet trusted by millions. The extension allows you to manage decentralized tokens and to access Ethereum-powered decentralized applications, or "Dapps", directly in your browser. You will need to reload the page after you install the extension.', [I._param("=MetaMask", a.a.createElement("a", {
						href: R,
						className: C.a.link,
						rel: "noopener noreferrer",
						target: "_blank"
					}, I._("MetaMask", null, {
						hk: "2TWNyh"
					})))], {
						hk: "2k97Gi"
					})), a.a.createElement("p", {
						className: C.a.paragraph
					}, I._("Disclaimer: MetaMask is not affiliated with Reddit and the following is not an advertisement or an endorsement. You understand that Reddit is not responsible for any actions or inactions or harm caused by using Metamask.", null, {
						hk: "3l0TTn"
					})))), a.a.createElement("div", {
						className: C.a.cta
					}, a.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: n
						}
					}), t ? a.a.createElement(f.i, {
						className: C.a.button,
						onClick: this.props.onNextStep
					}, I._("Continue", null, {
						hk: "4aMeJj"
					}), a.a.createElement(v.a, {
						className: C.a.buttonIcon
					})) : e ? a.a.createElement(f.i, {
						className: C.a.button,
						onClick: j.a
					}, I._("Reload page", null, {
						hk: "14fa9z"
					}), a.a.createElement(N.a, {
						className: C.a.buttonIcon
					})) : a.a.createElement(f.m, {
						className: C.a.button,
						href: A,
						target: "_blank",
						onClick: () => this.setState({
							clickedInstallButton: !0
						})
					}, I._("Get Extension", null, {
						hk: "ey9hD"
					}), a.a.createElement(O.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var L = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M15.8278 7.71709L15.0447 4.57483C14.625 2.89562 13.3316 1.55632 11.6691 1.07957L8.55662 0.187113C6.89279 -0.289905 5.08599 0.160525 3.84157 1.36271L2.71763 2.44761C2.53644 2.36832 2.33627 2.32433 2.12583 2.32433C1.30975 2.32433 0.648193 2.98589 0.648193 3.80197C0.648193 4.04193 0.705395 4.26854 0.806908 4.46889C0.547962 4.86933 0.348128 5.30713 0.216101 5.76783C-0.0184979 6.58567 -0.0337468 7.45525 0.172179 8.28326L0.956131 11.4246C1.37437 13.1039 2.66792 14.4434 4.33188 14.9206L7.44436 15.813C7.88293 15.9387 8.33114 16 8.77675 16C10.0206 16 11.2423 15.5223 12.1597 14.6373L14.4886 12.3879C15.1013 11.7956 15.5492 11.0501 15.7838 10.232C16.0184 9.41402 16.0337 8.54438 15.8278 7.71709ZM1.49235 5.1373C1.3296 5.41768 1.2027 5.71619 1.11403 6.0254L1.1138 6.02619L1.12933 6.03038C1.68311 6.18912 2.14176 6.55399 2.42093 7.05766C2.74741 7.64566 3.49279 7.85908 4.08163 7.53351C4.50625 7.29819 5.00386 7.21289 5.48114 7.29298C5.49328 7.29502 5.50522 7.29751 5.51697 7.30043L5.51718 7.29966L5.52028 7.28888C5.9132 5.9186 7.34177 5.12764 8.71097 5.52026C10.0802 5.91287 10.8725 7.34067 10.4796 8.71095L10.4765 8.72174L10.4763 8.72248C10.4982 8.72797 10.5199 8.73512 10.5414 8.74399C10.9964 8.93206 11.3633 9.25932 11.6022 9.69034C11.9285 10.279 12.6727 10.4925 13.2614 10.1661C13.7602 9.88952 14.3369 9.82179 14.8857 9.97507L14.8858 9.97443C15.0726 9.32325 15.0903 8.62246 14.9212 7.94274L14.8549 7.67671C14.6858 7.91679 14.4065 8.07365 14.0906 8.07365C13.5746 8.07365 13.1563 7.65538 13.1563 7.13942C13.1563 6.62346 13.5746 6.20519 14.0906 6.20519C14.2427 6.20519 14.3864 6.24157 14.5134 6.30611L14.1384 4.80136C13.7983 3.44025 12.7592 2.36408 11.4116 1.97765L9.03074 1.29494C9.04152 1.36569 9.04712 1.43814 9.04712 1.5119C9.04712 2.30045 8.40787 2.9397 7.61932 2.9397C6.83077 2.9397 6.19152 2.30045 6.19152 1.5119C6.19152 1.35 6.21847 1.1944 6.26812 1.04933C5.61024 1.21321 4.99488 1.5474 4.49033 2.03482L3.41264 3.07513C3.53412 3.28974 3.60346 3.53776 3.60346 3.80197C3.60346 4.61804 2.9419 5.2796 2.12583 5.2796C1.89912 5.2796 1.68434 5.22854 1.49235 5.1373ZM9.5796 8.4607C9.32715 9.32787 8.41534 9.83083 7.54641 9.5815C6.67774 9.33244 6.17075 8.42271 6.41825 7.54642C6.62509 6.82522 7.28509 6.3544 8.00049 6.3544C8.15024 6.3544 8.30247 6.37499 8.45339 6.41832C8.87593 6.53947 9.22601 6.81779 9.4391 7.20201C9.6522 7.5863 9.70277 8.03074 9.5796 8.4607ZM5.32631 8.2143C5.36094 8.22011 5.39532 8.22195 5.42898 8.22016C5.5179 9.25462 6.23114 10.1763 7.2889 10.4796C8.35052 10.784 9.4479 10.3763 10.0703 9.53999C10.1042 9.56716 10.1424 9.59003 10.1845 9.60744C10.4421 9.71386 10.6497 9.89913 10.785 10.1432C11.1781 10.8523 11.9147 11.253 12.6732 11.253C13.0263 11.253 13.3842 11.1662 13.7143 10.9832C13.9612 10.8463 14.2415 10.7998 14.5159 10.848C14.3345 11.1636 14.1078 11.4565 13.8392 11.7161L11.5106 13.9653C10.5009 14.9394 9.0495 15.3014 7.70185 14.915L4.58934 14.0225C3.24062 13.6358 2.2016 12.5596 1.86259 11.1988L1.07866 8.05709C0.988196 7.69351 0.951205 7.3239 0.964941 6.95908C1.23698 7.06081 1.4616 7.25386 1.604 7.51089C1.99761 8.21939 2.73477 8.61983 3.49383 8.61983C3.84677 8.61983 4.2044 8.53323 4.53428 8.35076C4.77839 8.21548 5.05235 8.1681 5.32631 8.2143ZM11.4706 5.87934C12.2076 5.87934 12.8052 5.28182 12.8052 4.54474C12.8052 3.80765 12.2076 3.21013 11.4706 3.21013C10.7335 3.21013 10.136 3.80765 10.136 4.54474C10.136 5.28182 10.7335 5.87934 11.4706 5.87934ZM6.4448 4.28874C6.4448 4.8047 6.02653 5.22296 5.51057 5.22296C4.99462 5.22296 4.57635 4.8047 4.57635 4.28874C4.57635 3.77278 4.99462 3.35451 5.51057 3.35451C6.02653 3.35451 6.4448 3.77278 6.4448 4.28874Z"
			}));
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function P(e) {
				const t = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/registered.svg)`,
					{
						onNextStep: n,
						token: r
					} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.registeredCard)
				}, a.a.createElement("div", {
					className: C.a.text
				}, a.a.createElement("div", {
					className: C.a.header
				}, M._("That’s It, You Are Registered!", null, {
					hk: "3gVrKp"
				})), a.a.createElement("div", {
					className: C.a.body
				}, a.a.createElement("p", {
					className: C.a.paragraph
				}, M._("Your wallet will receive Donuts after the next regular distribution based on the karma you earn in this subreddit.", null, {
					hk: "3qEBK1"
				})), a.a.createElement("p", {
					className: C.a.paragraph
				}, M._("To view your balance in MetaMask, you’ll need to {=track} the Donut token by clicking the button below. After that, go earn more Donuts by creating some great content on r/EthTrader!", [M._param("=track", a.a.createElement("span", {
					className: C.a.bold
				}, M._("track", null, {
					hk: "3r4sf1"
				})))], {
					hk: "urtXU"
				})))), a.a.createElement("div", {
					className: C.a.cta
				}, a.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.i, {
					className: C.a.button,
					onClick: () => r ? Object(l.i)(r).then(n) : n()
				}, r ? M._("Track Donuts", null, {
					hk: "3gEZnQ"
				}) : M._("Finish", null, {
					hk: "4kSXmt"
				}), a.a.createElement(L, {
					className: C.a.buttonIcon
				}))))
			}
			var T = n("./src/reddit/actions/governance/errorToast.ts"),
				G = n("./src/reddit/actions/toaster.ts"),
				B = n("./src/reddit/contexts/ApiContext.tsx"),
				W = n("./src/reddit/controls/Checkbox/index.tsx"),
				V = n("./src/reddit/endpoints/governance/crypto.ts"),
				D = n("./src/reddit/icons/svgs/Post/index.tsx"),
				U = n("./src/reddit/models/Toast/index.ts"),
				F = n("./node_modules/fbt/lib/FbtPublic.js");
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						approvalChecked: !1
					}, this.toggleApprovalCheckbox = () => {
						this.setState({
							approvalChecked: !this.state.approvalChecked
						})
					}, this.runVerification = async () => {
						const e = Object(l.c)();
						if (!e) return void this.props.onError(F.fbt._("Please select an Ethereum wallet in your provider", null, {
							hk: "25u6on"
						}));
						const t = this.props.provider;
						if (!t.startsWith("ethereum")) throw new Error("expected Ethereum provider");
						if (t.split(":")[1] !== Object(l.d)()) {
							const e = Object(V.j)(t);
							return void this.props.onError(F.fbt._("Please select the {providerName} in MetaMask", [F.fbt._param("providerName", e)], {
								hk: "2uEOyT"
							}))
						}
						const n = await Object(V.k)(this.props.apiContext(), t, e);
						if (!n.ok) return void this.props.onGovernanceError(n.error);
						const r = n.body.payload;
						let a;
						try {
							a = await Object(l.h)(r)
						} catch (o) {
							return console.error(o), void(o.code !== l.a && this.props.onError(o.message || F.fbt._("An error occured while trying to sign the registration message.", null, {
								hk: "30ALRP"
							})))
						}
						const s = await Object(V.l)(this.props.apiContext(), t, {
							registrationType: "crypto-registration-EIP712",
							address: e,
							signature: a
						});
						s.ok ? this.props.onNextStep() : this.props.onGovernanceError(s.error)
					}
				}
				render() {
					const {
						approvalChecked: e
					} = this.state, t = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/verify.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(C.a.card, C.a.verifyCard)
					}, a.a.createElement("div", {
						className: C.a.text
					}, a.a.createElement("div", {
						className: C.a.header
					}, F.fbt._("Sign a Verification Message", null, {
						hk: "35rjb4"
					})), a.a.createElement("div", {
						className: C.a.body
					}, F.fbt._("Sign a message (not a transaction), to verify that the wallet is yours. This will not be sent to the blockchain and will not cost you anything.", null, {
						hk: "e0c0N"
					}))), a.a.createElement("div", {
						className: C.a.cta
					}, a.a.createElement("div", {
						className: C.a.image,
						style: {
							backgroundImage: t
						}
					}), a.a.createElement("div", {
						className: C.a.approvalMessage
					}, a.a.createElement(W.a, {
						isCheckboxSelected: e,
						toggleCheckbox: this.toggleApprovalCheckbox
					}), a.a.createElement("div", {
						onClick: this.toggleApprovalCheckbox
					}, F.fbt._("I understand and agree to allow Reddit to publicly display my wallet address linked to my username", null, {
						hk: "1fQEnc"
					}))), a.a.createElement(f.l, {
						className: C.a.button,
						onClick: this.runVerification,
						disabled: !e
					}, F.fbt._("Verify in MetaMask", null, {
						hk: "4yHWv"
					}), a.a.createElement(D.a, {
						className: C.a.buttonIcon
					}))))
				}
			}
			var $ = Object(B.b)(Object(s.b)(void 0, e => ({
				onGovernanceError: t => Object(T.a)(e, t),
				onError: t => e(Object(G.e)({
					duration: 5e3,
					kind: U.b.Error,
					text: t
				}))
			}))(H));
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function q(e) {
				const t = `url(${p.a.assetPath}/img/communityPoints/registration/ethtrader/wallet.svg)`;
				return a.a.createElement("div", {
					className: Object(o.a)(C.a.card, C.a.walletCard)
				}, a.a.createElement("div", {
					className: C.a.text
				}, a.a.createElement("div", {
					className: C.a.header
				}, Z._("Create a Wallet", null, {
					hk: "M5zQ2"
				})), a.a.createElement("div", {
					className: C.a.body
				}, Z._("Create your MetaMask account and Ethereum wallet by following the instructions in MetaMask after you install the extension.", null, {
					hk: "4DQsB7"
				}))), a.a.createElement("div", {
					className: C.a.cta
				}, a.a.createElement("div", {
					className: C.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.l, {
					className: C.a.button,
					onClick: e.onNextStep
				}, Z._("Next", null, {
					hk: "3KNR6B"
				}), a.a.createElement(v.a, {
					className: C.a.buttonIcon
				}))))
			}
			var z, J = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				Y = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				X = n.n(Y);

			function Q(e) {
				const {
					children: t,
					isActive: n
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(X.a.tab, {
						[X.a.tabActive]: n
					})
				}, t)
			}! function(e) {
				e[e.About = 0] = "About", e[e.MetaMask = 1] = "MetaMask", e[e.Wallet = 2] = "Wallet", e[e.Connect = 3] = "Connect", e[e.Verify = 4] = "Verify", e[e.Registered = 5] = "Registered"
			}(z || (z = {}));
			const K = [{
				id: z.About,
				name: () => F.fbt._("About", null, {
					hk: "1jX7pr"
				})
			}, {
				id: z.MetaMask,
				name: () => F.fbt._("MetaMask", null, {
					hk: "2Y184A"
				})
			}, {
				id: z.Wallet,
				name: () => F.fbt._("Wallet", null, {
					hk: "3qALAf"
				})
			}, {
				id: z.Connect,
				name: () => F.fbt._("Connect", null, {
					hk: "3GMXUP"
				})
			}, {
				id: z.Verify,
				name: () => F.fbt._("Verify", null, {
					hk: "WHMgJ"
				})
			}, {
				id: z.Registered,
				name: () => F.fbt._("Registered", null, {
					hk: "1U7VpD"
				})
			}];
			class ee extends a.a.Component {
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
					const t = e.getElementsByClassName(X.a.tabActive)[0];
					if (t) {
						const n = e.getElementsByClassName(X.a.activeTabLine)[0];
						n.style.left = t.offsetLeft + "px", n.style.top = t.offsetTop + t.offsetHeight - 3 + "px", n.style.width = t.offsetWidth + "px"
					}
				}
				render() {
					const {
						activeTab: e
					} = this.props;
					return a.a.createElement("div", {
						className: X.a.tabBar,
						ref: this.setRef
					}, K.map(t => a.a.createElement(Q, {
						isActive: e === t.id,
						key: t.id
					}, t.name())), a.a.createElement("div", {
						className: X.a.activeTabLine
					}))
				}
			}
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ne extends a.a.Component {
				constructor(e) {
					super(e), this.onNextStep = () => {
						const {
							activeTab: e
						} = this.state;
						if (e === z.Registered) return this.props.onRefreshWallet(), this.props.onComplete(), void this.props.sendEvent(e => {
							const t = m.defaults(e);
							return {
								source: "meta",
								action: "complete",
								noun: "wallet_registration",
								correlationId: this.correlationId,
								...t,
								subreddit: m.subreddit(e)
							}
						});
						const t = e === z.About ? z.MetaMask : e === z.MetaMask ? z.Wallet : e === z.Wallet ? z.Connect : e === z.Connect ? z.Verify : z.Registered;
						this.setState({
							activeTab: t
						}), this.sendViewTabEvent(t)
					}, this.correlationId = h()();
					const t = Object(j.b)(e.pageLayer);
					this.state = {
						activeTab: t && Object(l.e)() ? z.Wallet : z.About
					}
				}
				async componentDidMount() {
					this.sendViewTabEvent(this.state.activeTab)
				}
				sendViewTabEvent(e) {
					this.props.sendEvent(t => {
						const n = m.defaults(t);
						return {
							source: "meta",
							action: "view",
							noun: "wallet_registration",
							correlationId: this.correlationId,
							...n,
							actionInfo: {
								...n.actionInfo,
								paneName: e + ""
							},
							subreddit: m.subreddit(t)
						}
					})
				}
				render() {
					const {
						className: e,
						onClose: t,
						provider: n,
						subredditId: r,
						token: s
					} = this.props, {
						activeTab: i
					} = this.state, c = i === z.About ? E : i === z.MetaMask ? S : i === z.Wallet ? q : i === z.Connect ? y : i === z.Verify ? $ : P;
					return a.a.createElement("article", {
						className: Object(o.a)(X.a.container, e)
					}, a.a.createElement(J.a, {
						subredditId: r
					}), a.a.createElement("button", {
						className: X.a.closeButton,
						onClick: t
					}, a.a.createElement(u.a, {
						className: X.a.closeIcon
					})), a.a.createElement("div", {
						className: X.a.title
					}, te._("Register for Donuts Distribution on the Ethereum Blockchain", null, {
						hk: "3kf8PF"
					})), a.a.createElement(ee, {
						activeTab: i
					}), a.a.createElement(c, {
						onNextStep: this.onNextStep,
						provider: n,
						token: s
					}))
				}
			}
			const re = Object(s.b)(void 0, (e, t) => ({
				onRefreshWallet: () => e(Object(i.h)({
					subredditId: t.subredditId
				}))
			}));
			t.a = re(Object(c.c)(Object(d.t)()(ne)))
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/addQueryParams/index.ts");
			const a = "metamaskInstalled";

			function s() {
				window.location.replace(Object(r.a)(window.location.href, {
					[a]: "true"
				}))
			}

			function o(e) {
				return !!(e && e.queryParams && e.queryParams[a])
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
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				b = n("./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less"),
				h = n.n(b);
			class p extends a.a.Component {
				render() {
					const {
						blockchainProvider: e,
						onClose: t,
						subredditId: n,
						token: r
					} = this.props;
					return n && e ? a.a.createElement(d.d, {
						className: h.a.modalBody
					}, a.a.createElement(d.k, {
						className: h.a.modalMain
					}, a.a.createElement(m.a, {
						provider: e,
						subredditId: n,
						token: r,
						onClose: t,
						onComplete: t
					}))) : null
				}
			}
			const f = Object(o.a)(e => e, l.q, (e, t) => {
					const n = {
						subredditId: t && t.id || void 0
					};
					return {
						blockchainProvider: Object(u.a)(e, n),
						subredditId: n.subredditId,
						token: Object(u.p)(e, n)
					}
				}),
				v = Object(l.t)(),
				g = Object(s.b)(f, (e, t) => ({
					onClose: () => e(Object(c.f)())
				}));
			t.default = Object(i.a)(v(g(p)))
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx"),
				c = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = n("./src/reddit/controls/Checkbox/index.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => t => {
					const {
						className: n,
						disabled: r,
						redditStyle: o,
						"data-redditstyle": i,
						...c
					} = t, d = ((e, t, n) => {
						const r = !(!t && !n);
						let a = "";
						return a = e ? r ? l.a.mDisabledRedditStyle : l.a.mDisabled : r ? l.a.mActiveRedditStyle : l.a.mActive
					})(r, o, i);
					return a.a.createElement(e, u({
						className: Object(s.a)(l.a.CheckboxIcon, d, n)
					}, c))
				},
				b = m(c.a),
				h = m(i.a);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? b : o.a;
				return a.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: Object(s.a)(l.a.Checkbox, e.className),
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, a.a.createElement(t, {
					className: Object(s.a)(l.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
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
			var r, a, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(o.a)(e, {
					endpoint: `${s.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: r
				})
			}
			async function c(e, t) {
				const n = await async function(e, t, n) {
					return Object(o.a)(e, {
						endpoint: `${s.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, a) {
					const s = await c(e, t),
						o = {
							...s,
							[n]: a
						};
					return (await i(e, t, r.UpsellBanners, o)).ok ? o : s
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.StellarWalletRegistration = "stellarWalletRegistration", e.WalletRegistration = "walletRegistration"
				}(a || (a = {}));
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => i(e, t, r.UpsellBanners, Object.keys(a).reduce((e, t) => (e[a[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "k", (function() {
				return d
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
				return v
			}));
			var r, a = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
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

			function c(e) {
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
			async function d(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${n}`
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
			async function v(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${a.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				a = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: a.cb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return {
							...e,
							body: r
						}
					}
					return e
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: a.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function a() {
				return window.ethereum
			}

			function s() {
				const e = a();
				return !(!e || !e.isMetaMask)
			}

			function o() {
				const e = a();
				return e && e.selectedAddress || null
			}

			function i() {
				return a().networkVersion || null
			}

			function c() {
				const e = a();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, r, s) {
				const [o, i] = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new o.providers.Web3Provider(a()).getSigner(),
					l = new o.Contract(e, i, d),
					u = await l[r](...s);
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
			async function b(e, t, r, a, s) {
				const o = await n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = o.utils,
					h = i(r).add(s),
					p = m,
					f = "0x" + [c(1)].concat([p, i(a), i(s)].map(c).map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return l(e, Promise.resolve(u), "send", [t, n, r])
				}(e, t, h.toString(), f)
			}
			const h = {
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
			async function p(e, t, n) {
				await c();
				const a = o() || "";
				if (t.toLowerCase() !== a.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(h), "subscribe", [t, n])
			}

			function f(e) {
				const t = a();
				return new Promise((n, a) => {
					const s = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, s],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) a(e);
						else {
							const e = t && t.result;
							e ? n(e) : a({
								message: r.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function v(e) {
				return new Promise((t, n) => {
					a().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, r) => {
						e || "error" in r ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(a).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function o(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
				i = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => a.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(s.a)(i.a.checkbox, e)
			}, t), a.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxHalfSelected/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), a.a.createElement("g", {
				transform: "translate(-32.000000, -173.000000)"
			}, a.a.createElement("g", {
				transform: "translate(32.000000, 173.000000)"
			}, a.a.createElement("path", {
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
			}))))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), a.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DownvoteCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M10.5554 7.77144L7.88871 10.4381C7.81404 10.5128 7.71652 10.5493 7.619 10.5493C7.52224 10.5493 7.42471 10.5128 7.35004 10.4381L4.68338 7.77144C4.57443 7.66249 4.54166 7.49868 4.60109 7.3562C4.65976 7.21449 4.79843 7.12077 4.95233 7.12077H6.44338V5.06896C6.44338 4.85868 6.61404 4.68801 6.82433 4.68801H8.41443C8.62471 4.68801 8.79538 4.85868 8.79538 5.06896V7.12077H10.2857C10.4403 7.12077 10.579 7.21449 10.6377 7.3562C10.6971 7.49868 10.6643 7.66249 10.5554 7.77144M7.61926 1.14285C4.04821 1.14285 1.14307 4.048 1.14307 7.61904C1.14307 11.1893 4.04821 14.0952 7.61926 14.0952C11.1903 14.0952 14.0954 11.1893 14.0954 7.61904C14.0954 4.048 11.1903 1.14285 7.61926 1.14285"
			}))
		},
		"./src/reddit/icons/svgs/Link/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				fill: "inherit",
				d: "M18.4773727,1.51993937 C19.4600354,2.50135191 20.0013751,3.80656808 20.0013751,5.19554812 C20.0013751,6.58577837 19.4600354,7.89099453 18.4773727,8.87240707 C17.9885417,9.35998782 17.1984109,9.35998782 16.7095799,8.87240707 C16.2207489,8.38357611 16.2207489,7.59094484 16.7095799,7.10461429 C17.2196644,6.59452982 17.500961,5.91691759 17.500961,5.19554812 C17.500961,4.47542886 17.2196644,3.79781663 16.7095799,3.28773215 C15.6569056,2.23755822 13.9453721,2.23755822 12.8926978,3.28773215 L8.62324066,7.55843946 C7.57181653,8.6111138 7.57181653,10.3226473 8.62324066,11.3753216 C9.11207162,11.8629024 9.11207162,12.6555336 8.62324066,13.1431144 C8.37945029,13.3869048 8.05939728,13.509425 7.73934427,13.509425 C7.41929127,13.509425 7.09923826,13.3869048 6.85544788,13.1431144 C4.82886225,11.1152785 4.82886225,7.81723232 6.85544788,5.79064668 L11.124905,1.51993937 C13.1502404,-0.505396058 16.4495368,-0.507896472 18.4773727,1.51993937 Z M11.3753215,6.8540728 C11.8641524,6.36524184 12.6542833,6.36524184 13.1431142,6.8540728 C15.1696999,8.88065844 15.1696999,12.1799549 13.1431142,14.2065405 L8.87240693,18.4772478 C7.89099439,19.4586603 6.58452801,20 5.19679818,20 C3.80781814,20 2.50135177,19.4586603 1.51993923,18.4772478 C-0.50664641,16.4506622 -0.50664641,13.1513657 1.51993923,11.1247801 C2.00877019,10.6359491 2.80015125,10.6359491 3.28773201,11.1247801 C3.77656297,11.6136111 3.77656297,12.4037419 3.28773201,12.8925729 C2.23505767,13.9452472 2.23505767,15.6567807 3.28773201,16.709455 C4.34040635,17.7621294 6.05193981,17.7621294 7.10461415,16.709455 L11.3753215,12.4387477 C12.4279958,11.3860734 12.4279958,9.67453992 11.3753215,8.62186558 C10.8864905,8.13303462 10.8864905,7.34290376 11.3753215,6.8540728 Z"
			})))
		},
		"./src/reddit/icons/svgs/Post/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M5,15a1,1,0,0,1-1-1V11.17a1,1,0,0,1,.29-.7l8.09-8.09a1,1,0,0,1,1.41,0l2.83,2.83a1,1,0,0,1,0,1.41L8.54,14.71a1,1,0,0,1-.71.29Zm12,1a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z"
			}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
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
				return v
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "r", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "j", (function() {
				return w
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/endpoints/governance/crypto.ts");
			const s = [],
				o = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const n = E(e, {
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
				d = (e, t) => {
					const n = C(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = C(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = C(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : o
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
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				g = (e, t) => {
					const n = y(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				C = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				x = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const n = x(e, t);
					return n && n.walletProvider
				},
				k = (e, t) => {
					const n = E(e, t),
						r = x(e, t);
					return n && n.provider || r && r.provider
				},
				_ = (e, t) => {
					const n = k(e, t);
					return n === a.a.Ethereum || n === a.a.Rinkeby || n === a.a.EthTraderEthereum || n === a.a.EthTraderRinkeby
				},
				y = (e, t) => {
					const n = E(e, t),
						r = k(e, t);
					if (n && !n.inTransition && r === a.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const s = n && n.extra && n.extra.contracts,
						o = s && s.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				N = (e, {
					subredditId: t
				}) => {
					const n = E(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				w = (e, t) => {
					const n = x(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.6f6e5eba8e43a7e5d7a1.js.map