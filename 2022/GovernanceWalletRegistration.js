// https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.8bfdbe3f9024d2d34eef.js
// Retrieved at 3/29/2022, 10:20:05 AM by Reddit Dataminer v1.0.0
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
					style: t,
					onClick: e.onClick
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
				d: "M16.375 10A6.375 6.375 0 1 1 10 3.625h3.274L11.6 5.02l.8.96 3-2.5a.625.625 0 0 0 0-.96l-3-2.5-.8.96 1.674 1.4H10A7.625 7.625 0 1 0 17.625 10Zm-2.351-7L14 3.02v-.04Z"
			}))
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				a = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				a = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
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
				return p
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "v", (function() {
				return k
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
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				v = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				C = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				g = "GOVERNANCE__TRANSFER_FAILURE",
				_ = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				x = "GOVERNANCE__TRANSFER_PENDING",
				E = "GOVERNANCE__TRANSFER_SUCCESS",
				y = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				k = "GOVERNANCE__WALLETS_FETCH_PENDING",
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
				e(Object(r.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(a.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/crypto/points.ts"),
				C = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const _ = Object(a.a)(C.b),
				x = Object(a.a)(C.c),
				E = Object(a.a)(C.e),
				y = (Object(a.a)(C.f), Object(a.a)(C.g), Object(a.a)(C.h)),
				k = Object(a.a)(C.i),
				N = Object(a.a)(C.j),
				w = Object(a.a)(C.k),
				O = Object(a.a)(C.q),
				j = Object(a.a)(C.r),
				I = Object(a.a)(C.s),
				M = Object(a.a)(C.t),
				T = Object(a.a)(C.u),
				S = Object(a.a)(C.v),
				A = Object(a.a)(C.w),
				R = Object(a.a)(C.x),
				P = (e, t) => async (n, r, a) => {
					let s, {
							apiContext: o,
							gqlContext: c
						} = a,
						p = r().polls.models[e];
					if (n(N({
							pollId: e
						})), (s = p.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(c(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(o(), p.subredditId, e, t)).ok) {
						if (p.type === u.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							n(E({
								pollId: p.id,
								optionId: t,
								options: e
							}))
						} else n(w(s.body));
						const a = r();
						if ((p = a.polls.models[e]) && Object(u.d)(p)) {
							const {
								postId: e
							} = p, t = a.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.kb)(e))
						}
					} else n(k({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(g.a)(n, s.error || s.errors[0].messsage)
				}, L = (e, t) => async (n, a, i) => {
					let {
						apiContext: l
					} = i;
					var u;
					n(I());
					const m = a().transfers.communityPoints.contentId || void 0,
						p = await
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
					}(l(), {
						...e,
						contentId: m
					});
					p.ok ? (n(M({
						...p.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: h.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(s.a)(e.amount)), r.fbt._param("tokenName", (null === (u = Object(v.b)(a(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(O({
						error: p.error
					})), Object(g.a)(n, p.error))
				}, B = e => async (t, n, r) => {
					let {
						apiContext: a
					} = r;
					t(S());
					const s = await Object(p.a)(a(), e);
					s.ok ? t(A(s.body)) : t(T({
						error: s.error
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
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(o.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(d.b)(e, n)
				}
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${i.a.assetPath}/${r}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
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
					src: s
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
				l = n("./src/reddit/selectors/crypto/points.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./node_modules/reselect/es/index.js"),
				b = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				p = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				h = n("./src/reddit/components/Governance/WalletRegistration/Banner/index.m.less"),
				f = n.n(h);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class C extends a.a.Component {
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
						className: e,
						publicAddress: t,
						subredditId: n,
						points: r
					} = this.props, {
						completed: s,
						show: i
					} = this.state;
					return i && r && !t ? s ? a.a.createElement("div", {
						className: Object(o.a)(f.a.completedBanner, e)
					}, a.a.createElement(p.a, {
						subredditId: n
					}), a.a.createElement("div", {
						className: f.a.spacer
					}), a.a.createElement(d.a, {
						className: f.a.checkIcon
					}), a.a.createElement("div", {
						className: f.a.registeredMessage
					}, v._("Registered for distribution", null, {
						hk: "2CVmU4"
					}))) : a.a.createElement(b.a, {
						className: e,
						points: r,
						subredditId: n,
						onClose: this.onClose,
						onComplete: this.onComplete
					}) : null
				}
			}
			const g = Object(m.c)({
				userIsLoggedIn: e => !!e.user.account,
				publicAddress: (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = Object(u.d)(e, {
						subredditId: n
					});
					return r && r.publicAddress
				},
				points: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				}
			});
			t.default = Object(s.b)(g)(Object(i.b)(C))
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
				p = n.n(b),
				h = n("./src/config.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				C = n("./src/reddit/components/Governance/WalletRegistration/Common/Cards/index.m.less"),
				g = n.n(C);
			const {
				fbt: _
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function x(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/about.svg)`;
				return a.a.createElement("div", {
					className: Object(o.a)(g.a.card, g.a.aboutCard)
				}, a.a.createElement("div", {
					className: g.a.text
				}, a.a.createElement("div", {
					className: g.a.header
				}, _._("Donuts Are No Longer Centralized!", null, {
					hk: "45RssI"
				})), a.a.createElement("div", {
					className: g.a.body
				}, _._("Backed by {=smart contracts} developed by mod u/carlslarson, Donuts are now ERC-20 tokens that you own and control on the Ethereum blockchain! Register to earn Donuts for your contributions to the subreddit and use them to buy perks in the community, like a special membership, higher weighting in polls, or the ability to control the top banner. Follow this simple wizard to register. Note: Donuts are not driven nor developed by Reddit.", [_._param("=smart contracts", a.a.createElement("a", {
					href: "https://github.com/daonuts",
					className: g.a.link,
					rel: "noopener noreferrer",
					target: "_blank"
				}, _._("smart contracts", null, {
					hk: "40dMKO"
				})))], {
					hk: "4gEJ3V"
				}))), a.a.createElement("div", {
					className: g.a.cta
				}, a.a.createElement("div", {
					className: g.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.l, {
					className: g.a.button,
					onClick: e.onNextStep
				}, _._("Start", null, {
					hk: "3So7as"
				}), a.a.createElement(v.a, {
					className: g.a.buttonIcon
				}))))
			}
			var E = n("./src/reddit/icons/svgs/Link/index.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class k extends a.a.Component {
				componentDidMount() {
					this.intervalId = window.setInterval(() => {
						Object(l.d)() && (this.props.onNextStep(), window.clearInterval(this.intervalId))
					}, 500)
				}
				componentWillUnmount() {
					window.clearInterval(this.intervalId)
				}
				render() {
					const e = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/connect.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(g.a.card, g.a.connectCard)
					}, a.a.createElement("div", {
						className: g.a.text
					}, a.a.createElement("div", {
						className: g.a.header
					}, y._("Connect Reddit to MetaMask", null, {
						hk: "1uL476"
					})), a.a.createElement("div", {
						className: g.a.body
					}, y._("This will allow Reddit to see your wallet’s public key and allow Reddit to request your signature on messages and transactions.", null, {
						hk: "1IBG48"
					}))), a.a.createElement("div", {
						className: g.a.cta
					}, a.a.createElement("div", {
						className: g.a.image,
						style: {
							backgroundImage: e
						}
					}), a.a.createElement(f.o, {
						className: g.a.button,
						onClick: l.b
					}, y._("Connect", null, {
						hk: "3rApnz"
					}), a.a.createElement(E.a, {
						className: g.a.buttonIcon
					}))))
				}
			}
			var N = n("./src/chat/icons/svgs/Refresh/index.tsx"),
				w = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				O = n("./src/reddit/icons/svgs/DownvoteCircle/index.tsx"),
				j = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts");
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js"), M = "https://metamask.io/", T = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						clickedInstallButton: !1,
						isMetaMaskInstalled: Object(l.f)()
					}
				}
				render() {
					const {
						clickedInstallButton: e,
						isMetaMaskInstalled: t
					} = this.state, n = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/metamask.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(g.a.card, g.a.metaMaskCard)
					}, a.a.createElement("div", {
						className: g.a.text
					}, a.a.createElement("div", {
						className: g.a.header
					}, I._("Install the MetaMask Browser Extension", null, {
						hk: "3MOJpi"
					}), t && a.a.createElement(w.a, {
						className: g.a.installedCheckmark
					})), a.a.createElement("div", {
						className: g.a.body
					}, a.a.createElement("p", {
						className: g.a.paragraph
					}, I._('{=MetaMask} is an Ethereum Wallet trusted by millions. The extension allows you to manage decentralized tokens and to access Ethereum-powered decentralized applications, or "Dapps", directly in your browser. You will need to reload the page after you install the extension.', [I._param("=MetaMask", a.a.createElement("a", {
						href: M,
						className: g.a.link,
						rel: "noopener noreferrer",
						target: "_blank"
					}, I._("MetaMask", null, {
						hk: "2TWNyh"
					})))], {
						hk: "2k97Gi"
					})), a.a.createElement("p", {
						className: g.a.paragraph
					}, I._("Disclaimer: MetaMask is not affiliated with Reddit and the following is not an advertisement or an endorsement. You understand that Reddit is not responsible for any actions or inactions or harm caused by using Metamask.", null, {
						hk: "3l0TTn"
					})))), a.a.createElement("div", {
						className: g.a.cta
					}, a.a.createElement("div", {
						className: g.a.image,
						style: {
							backgroundImage: n
						}
					}), t ? a.a.createElement(f.l, {
						className: g.a.button,
						onClick: this.props.onNextStep
					}, I._("Continue", null, {
						hk: "4aMeJj"
					}), a.a.createElement(v.a, {
						className: g.a.buttonIcon
					})) : e ? a.a.createElement(f.l, {
						className: g.a.button,
						onClick: j.a
					}, I._("Reload page", null, {
						hk: "14fa9z"
					}), a.a.createElement(N.a, {
						className: g.a.buttonIcon
					})) : a.a.createElement(f.p, {
						className: g.a.button,
						href: T,
						target: "_blank",
						onClick: () => this.setState({
							clickedInstallButton: !0
						})
					}, I._("Get Extension", null, {
						hk: "ey9hD"
					}), a.a.createElement(O.a, {
						className: g.a.buttonIcon
					}))))
				}
			}
			var A = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M15.8278 7.71709L15.0447 4.57483C14.625 2.89562 13.3316 1.55632 11.6691 1.07957L8.55662 0.187113C6.89279 -0.289905 5.08599 0.160525 3.84157 1.36271L2.71763 2.44761C2.53644 2.36832 2.33627 2.32433 2.12583 2.32433C1.30975 2.32433 0.648193 2.98589 0.648193 3.80197C0.648193 4.04193 0.705395 4.26854 0.806908 4.46889C0.547962 4.86933 0.348128 5.30713 0.216101 5.76783C-0.0184979 6.58567 -0.0337468 7.45525 0.172179 8.28326L0.956131 11.4246C1.37437 13.1039 2.66792 14.4434 4.33188 14.9206L7.44436 15.813C7.88293 15.9387 8.33114 16 8.77675 16C10.0206 16 11.2423 15.5223 12.1597 14.6373L14.4886 12.3879C15.1013 11.7956 15.5492 11.0501 15.7838 10.232C16.0184 9.41402 16.0337 8.54438 15.8278 7.71709ZM1.49235 5.1373C1.3296 5.41768 1.2027 5.71619 1.11403 6.0254L1.1138 6.02619L1.12933 6.03038C1.68311 6.18912 2.14176 6.55399 2.42093 7.05766C2.74741 7.64566 3.49279 7.85908 4.08163 7.53351C4.50625 7.29819 5.00386 7.21289 5.48114 7.29298C5.49328 7.29502 5.50522 7.29751 5.51697 7.30043L5.51718 7.29966L5.52028 7.28888C5.9132 5.9186 7.34177 5.12764 8.71097 5.52026C10.0802 5.91287 10.8725 7.34067 10.4796 8.71095L10.4765 8.72174L10.4763 8.72248C10.4982 8.72797 10.5199 8.73512 10.5414 8.74399C10.9964 8.93206 11.3633 9.25932 11.6022 9.69034C11.9285 10.279 12.6727 10.4925 13.2614 10.1661C13.7602 9.88952 14.3369 9.82179 14.8857 9.97507L14.8858 9.97443C15.0726 9.32325 15.0903 8.62246 14.9212 7.94274L14.8549 7.67671C14.6858 7.91679 14.4065 8.07365 14.0906 8.07365C13.5746 8.07365 13.1563 7.65538 13.1563 7.13942C13.1563 6.62346 13.5746 6.20519 14.0906 6.20519C14.2427 6.20519 14.3864 6.24157 14.5134 6.30611L14.1384 4.80136C13.7983 3.44025 12.7592 2.36408 11.4116 1.97765L9.03074 1.29494C9.04152 1.36569 9.04712 1.43814 9.04712 1.5119C9.04712 2.30045 8.40787 2.9397 7.61932 2.9397C6.83077 2.9397 6.19152 2.30045 6.19152 1.5119C6.19152 1.35 6.21847 1.1944 6.26812 1.04933C5.61024 1.21321 4.99488 1.5474 4.49033 2.03482L3.41264 3.07513C3.53412 3.28974 3.60346 3.53776 3.60346 3.80197C3.60346 4.61804 2.9419 5.2796 2.12583 5.2796C1.89912 5.2796 1.68434 5.22854 1.49235 5.1373ZM9.5796 8.4607C9.32715 9.32787 8.41534 9.83083 7.54641 9.5815C6.67774 9.33244 6.17075 8.42271 6.41825 7.54642C6.62509 6.82522 7.28509 6.3544 8.00049 6.3544C8.15024 6.3544 8.30247 6.37499 8.45339 6.41832C8.87593 6.53947 9.22601 6.81779 9.4391 7.20201C9.6522 7.5863 9.70277 8.03074 9.5796 8.4607ZM5.32631 8.2143C5.36094 8.22011 5.39532 8.22195 5.42898 8.22016C5.5179 9.25462 6.23114 10.1763 7.2889 10.4796C8.35052 10.784 9.4479 10.3763 10.0703 9.53999C10.1042 9.56716 10.1424 9.59003 10.1845 9.60744C10.4421 9.71386 10.6497 9.89913 10.785 10.1432C11.1781 10.8523 11.9147 11.253 12.6732 11.253C13.0263 11.253 13.3842 11.1662 13.7143 10.9832C13.9612 10.8463 14.2415 10.7998 14.5159 10.848C14.3345 11.1636 14.1078 11.4565 13.8392 11.7161L11.5106 13.9653C10.5009 14.9394 9.0495 15.3014 7.70185 14.915L4.58934 14.0225C3.24062 13.6358 2.2016 12.5596 1.86259 11.1988L1.07866 8.05709C0.988196 7.69351 0.951205 7.3239 0.964941 6.95908C1.23698 7.06081 1.4616 7.25386 1.604 7.51089C1.99761 8.21939 2.73477 8.61983 3.49383 8.61983C3.84677 8.61983 4.2044 8.53323 4.53428 8.35076C4.77839 8.21548 5.05235 8.1681 5.32631 8.2143ZM11.4706 5.87934C12.2076 5.87934 12.8052 5.28182 12.8052 4.54474C12.8052 3.80765 12.2076 3.21013 11.4706 3.21013C10.7335 3.21013 10.136 3.80765 10.136 4.54474C10.136 5.28182 10.7335 5.87934 11.4706 5.87934ZM6.4448 4.28874C6.4448 4.8047 6.02653 5.22296 5.51057 5.22296C4.99462 5.22296 4.57635 4.8047 4.57635 4.28874C4.57635 3.77278 4.99462 3.35451 5.51057 3.35451C6.02653 3.35451 6.4448 3.77278 6.4448 4.28874Z"
			}));
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function P(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/registered.svg)`,
					{
						onNextStep: n,
						points: r
					} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(g.a.card, g.a.registeredCard)
				}, a.a.createElement("div", {
					className: g.a.text
				}, a.a.createElement("div", {
					className: g.a.header
				}, R._("That’s It, You Are Registered!", null, {
					hk: "3gVrKp"
				})), a.a.createElement("div", {
					className: g.a.body
				}, a.a.createElement("p", {
					className: g.a.paragraph
				}, R._("Your wallet will receive Donuts after the next regular distribution based on the karma you earn in this subreddit.", null, {
					hk: "3qEBK1"
				})), a.a.createElement("p", {
					className: g.a.paragraph
				}, R._("To view your balance in MetaMask, you’ll need to {=track} the Donut token by clicking the button below. After that, go earn more Donuts by creating some great content on r/EthTrader!", [R._param("=track", a.a.createElement("span", {
					className: g.a.bold
				}, R._("track", null, {
					hk: "3r4sf1"
				})))], {
					hk: "urtXU"
				})))), a.a.createElement("div", {
					className: g.a.cta
				}, a.a.createElement("div", {
					className: g.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.l, {
					className: g.a.button,
					onClick: () => {
						var e, t;
						if (r && r.contractAddress) {
							const a = {
								address: r.contractAddress,
								symbol: r.symbol,
								decimals: r.decimals,
								image: null === (t = null === (e = r.contracts) || void 0 === e ? void 0 : e.unlocked) || void 0 === t ? void 0 : t.image
							};
							Object(l.j)(a).then(n)
						} else n()
					}
				}, r ? R._("Track Donuts", null, {
					hk: "3gEZnQ"
				}) : R._("Finish", null, {
					hk: "4kSXmt"
				}), a.a.createElement(A, {
					className: g.a.buttonIcon
				}))))
			}
			var L = n("./src/reddit/actions/governance/errorToast.ts"),
				B = n("./src/reddit/actions/toaster.ts"),
				W = n("./src/reddit/contexts/ApiContext.tsx"),
				G = n("./src/reddit/controls/Checkbox/index.tsx"),
				D = n("./src/reddit/endpoints/governance/crypto.ts"),
				U = n("./src/reddit/icons/svgs/Post/index.tsx"),
				V = n("./src/reddit/models/Toast/index.ts"),
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
						var e;
						const t = Object(l.d)();
						if (!t) return void this.props.onError(F.fbt._("Please select an Ethereum wallet in your provider", null, {
							hk: "25u6on"
						}));
						const n = null === (e = this.props.points) || void 0 === e ? void 0 : e.blockchainProvider;
						if (!n || !n.startsWith("ethereum")) throw new Error("expected Ethereum provider");
						if (n.split(":")[1] !== Object(l.e)()) {
							const e = Object(D.j)(n);
							return void this.props.onError(F.fbt._("Please select the {providerName} in MetaMask", [F.fbt._param("providerName", e)], {
								hk: "2uEOyT"
							}))
						}
						const r = await Object(D.k)(this.props.apiContext(), n, t);
						if (!r.ok) return void this.props.onGovernanceError(r.error);
						const a = r.body.payload;
						let s;
						try {
							s = await Object(l.i)(a)
						} catch (i) {
							return console.error(i), void(i.code !== l.a && this.props.onError(i.message || F.fbt._("An error occured while trying to sign the registration message.", null, {
								hk: "30ALRP"
							})))
						}
						const o = await Object(D.m)(this.props.apiContext(), n, {
							registrationType: "crypto-registration-EIP712",
							address: t,
							signature: s
						});
						o.ok ? this.props.onNextStep() : this.props.onGovernanceError(o.error)
					}
				}
				render() {
					const {
						approvalChecked: e
					} = this.state, t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/verify.svg)`;
					return a.a.createElement("div", {
						className: Object(o.a)(g.a.card, g.a.verifyCard)
					}, a.a.createElement("div", {
						className: g.a.text
					}, a.a.createElement("div", {
						className: g.a.header
					}, F.fbt._("Sign a Verification Message", null, {
						hk: "35rjb4"
					})), a.a.createElement("div", {
						className: g.a.body
					}, F.fbt._("Sign a message (not a transaction), to verify that the wallet is yours. This will not be sent to the blockchain and will not cost you anything.", null, {
						hk: "e0c0N"
					}))), a.a.createElement("div", {
						className: g.a.cta
					}, a.a.createElement("div", {
						className: g.a.image,
						style: {
							backgroundImage: t
						}
					}), a.a.createElement("div", {
						className: g.a.approvalMessage
					}, a.a.createElement(G.a, {
						isCheckboxSelected: e,
						toggleCheckbox: this.toggleApprovalCheckbox
					}), a.a.createElement("div", {
						onClick: this.toggleApprovalCheckbox
					}, F.fbt._("I understand and agree to allow Reddit to publicly display my wallet address linked to my username", null, {
						hk: "1fQEnc"
					}))), a.a.createElement(f.o, {
						className: g.a.button,
						onClick: this.runVerification,
						disabled: !e
					}, F.fbt._("Verify in MetaMask", null, {
						hk: "4yHWv"
					}), a.a.createElement(U.a, {
						className: g.a.buttonIcon
					}))))
				}
			}
			var q = Object(W.b)(Object(s.b)(void 0, e => ({
				onGovernanceError: t => Object(L.a)(e, t),
				onError: t => e(Object(B.f)({
					duration: 5e3,
					kind: V.b.Error,
					text: t
				}))
			}))(H));

			function X(e) {
				const t = `url(${h.a.assetPath}/img/communityPoints/registration/ethtrader/wallet.svg)`;
				return a.a.createElement("div", {
					className: Object(o.a)(g.a.card, g.a.walletCard)
				}, a.a.createElement("div", {
					className: g.a.text
				}, a.a.createElement("div", {
					className: g.a.header
				}, F.fbt._("Create a Wallet", null, {
					hk: "M5zQ2"
				})), a.a.createElement("div", {
					className: g.a.body
				}, F.fbt._("Create your MetaMask account and Ethereum wallet by following the instructions in MetaMask after you install the extension.", null, {
					hk: "4DQsB7"
				}))), a.a.createElement("div", {
					className: g.a.cta
				}, a.a.createElement("div", {
					className: g.a.image,
					style: {
						backgroundImage: t
					}
				}), a.a.createElement(f.o, {
					className: g.a.button,
					onClick: e.onNextStep
				}, F.fbt._("Next", null, {
					hk: "2mEXAi"
				}), a.a.createElement(v.a, {
					className: g.a.buttonIcon
				}))))
			}
			var J, $ = n("./src/reddit/components/Governance/WalletRegistration/Common/Countdown.tsx"),
				Q = n("./src/reddit/components/Governance/WalletRegistration/Common/index.m.less"),
				Y = n.n(Q);

			function Z(e) {
				const {
					children: t,
					isActive: n
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(Y.a.tab, {
						[Y.a.tabActive]: n
					})
				}, t)
			}! function(e) {
				e[e.About = 0] = "About", e[e.MetaMask = 1] = "MetaMask", e[e.Wallet = 2] = "Wallet", e[e.Connect = 3] = "Connect", e[e.Verify = 4] = "Verify", e[e.Registered = 5] = "Registered"
			}(J || (J = {}));
			const z = [{
				id: J.About,
				name: () => F.fbt._("About", null, {
					hk: "1jX7pr"
				})
			}, {
				id: J.MetaMask,
				name: () => F.fbt._("MetaMask", null, {
					hk: "2Y184A"
				})
			}, {
				id: J.Wallet,
				name: () => F.fbt._("Wallet", null, {
					hk: "3qALAf"
				})
			}, {
				id: J.Connect,
				name: () => F.fbt._("Connect", null, {
					hk: "3GMXUP"
				})
			}, {
				id: J.Verify,
				name: () => F.fbt._("Verify", null, {
					hk: "WHMgJ"
				})
			}, {
				id: J.Registered,
				name: () => F.fbt._("Registered", null, {
					hk: "1U7VpD"
				})
			}];
			class K extends a.a.Component {
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
					const t = e.getElementsByClassName(Y.a.tabActive)[0];
					if (t) {
						const n = e.getElementsByClassName(Y.a.activeTabLine)[0];
						n.style.left = t.offsetLeft + "px", n.style.top = t.offsetTop + t.offsetHeight - 3 + "px", n.style.width = t.offsetWidth + "px"
					}
				}
				render() {
					const {
						activeTab: e
					} = this.props;
					return a.a.createElement("div", {
						className: Y.a.tabBar,
						ref: this.setRef
					}, z.map(t => a.a.createElement(Z, {
						isActive: e === t.id,
						key: t.id
					}, t.name())), a.a.createElement("div", {
						className: Y.a.activeTabLine
					}))
				}
			}
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class te extends a.a.Component {
				constructor(e) {
					super(e), this.onNextStep = () => {
						const {
							activeTab: e
						} = this.state;
						if (e === J.Registered) return this.props.onRefreshWallet(), this.props.onComplete(), void this.props.sendEvent(e => {
							const t = m.o(e);
							return {
								source: "meta",
								action: "complete",
								noun: "wallet_registration",
								correlationId: this.correlationId,
								...t,
								subreddit: m.hb(e)
							}
						});
						const t = e === J.About ? J.MetaMask : e === J.MetaMask ? J.Wallet : e === J.Wallet ? J.Connect : e === J.Connect ? J.Verify : J.Registered;
						this.setState({
							activeTab: t
						}), this.sendViewTabEvent(t)
					}, this.correlationId = p()();
					const t = Object(j.b)(e.pageLayer);
					this.state = {
						activeTab: t && Object(l.f)() ? J.Wallet : J.About
					}
				}
				async componentDidMount() {
					this.sendViewTabEvent(this.state.activeTab)
				}
				sendViewTabEvent(e) {
					this.props.sendEvent(t => {
						const n = m.o(t);
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
							subreddit: m.hb(t)
						}
					})
				}
				render() {
					const {
						className: e,
						onClose: t,
						points: n,
						subredditId: r
					} = this.props, {
						activeTab: s
					} = this.state, i = s === J.About ? x : s === J.MetaMask ? S : s === J.Wallet ? X : s === J.Connect ? k : s === J.Verify ? q : P;
					return a.a.createElement("article", {
						className: Object(o.a)(Y.a.container, e)
					}, a.a.createElement($.a, {
						subredditId: r
					}), a.a.createElement("button", {
						className: Y.a.closeButton,
						onClick: t
					}, a.a.createElement(u.a, {
						className: Y.a.closeIcon
					})), a.a.createElement("div", {
						className: Y.a.title
					}, ee._("Register for Donuts Distribution on the Ethereum Blockchain", null, {
						hk: "3kf8PF"
					})), a.a.createElement(K, {
						activeTab: s
					}), a.a.createElement(i, {
						onNextStep: this.onNextStep,
						points: n
					}))
				}
			}
			const ne = Object(s.b)(void 0, (e, t) => ({
				onRefreshWallet: () => e(Object(i.h)({
					subredditId: t.subredditId
				}))
			}));
			t.a = ne(Object(c.c)(Object(d.u)()(te)))
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
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/WalletRegistration/Common/index.tsx"),
				u = n("./src/reddit/components/Governance/WalletRegistration/Modal/index.m.less"),
				m = n.n(u);
			t.default = Object(o.a)((function() {
				const e = Object(s.d)(),
					{
						subreddit: t,
						pointsDetails: n
					} = Object(d.c)();
				if (!t || !n) return null;
				const r = () => e(Object(i.f)());
				return a.a.createElement(c.e, {
					className: m.a.modalBody
				}, a.a.createElement(c.l, {
					className: m.a.modalMain
				}, a.a.createElement(l.a, {
					points: n,
					subredditId: t.id,
					onClose: r,
					onComplete: r
				})))
			}))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "t", (function() {
				return j
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "c", (function() {
				return A
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = a.a.wrapped(d.a, "CloseIcon", u.a),
				p = a.a.section("ModalBody", u.a),
				h = a.a.section("ModalPostPreview", u.a),
				f = a.a.p("ModalText", u.a),
				v = a.a.div("ModalSmallText", u.a),
				C = a.a.div("ModalDescriptionText", u.a),
				g = a.a.div("ModalMetaText", u.a),
				_ = a.a.label("ModalFormItem", u.a),
				x = a.a.wrapped(c.a, "ModalInput", u.a),
				E = a.a.label("ModalInputLabel", u.a),
				y = a.a.footer("ModalFooter", u.a),
				k = a.a.header("ModalHeader", u.a),
				N = a.a.div("ModalTitle", u.a),
				w = a.a.div("ModalAnnotation", u.a),
				O = a.a.div("ModalMain", u.a),
				j = a.a.textarea("TextArea", u.a),
				I = a.a.wrapped(i.l, "WarningButton", u.a),
				M = a.a.wrapped(i.l, "PrimaryButton", u.a),
				T = a.a.wrapped(i.o, "CancelButton", u.a),
				S = a.a.wrapped(i.r, "RemoveButton", u.a),
				A = e => {
					let {
						className: t,
						...n
					} = e;
					return o.a.createElement(i.t, m({
						kind: i.b.Button,
						priority: i.c.Primary,
						className: Object(r.a)(u.a.ConfirmButton, t)
					}, n))
				}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => a.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, a.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(s.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				d = n("./src/reddit/controls/Input/index.m.less"),
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
			class m extends a.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = e => {
						let {
							keyCode: t
						} = e;
						t === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return a.a.createElement("input", u({
						className: Object(o.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
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
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "n", (function() {
				return C
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
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184"
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
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${a.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(r || (r = {}));
			const b = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				v = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function C(e, t) {
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
					method: a.jb.GET
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
					method: a.jb.POST,
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
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
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
				const e = a();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = a();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return o() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, r, s) {
				const [o, i] = await Promise.all([Promise.all([n.e(0), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
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
				const o = await Promise.all([n.e(0), n.e("CryptoLibEthers")]).then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = o,
					{
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = o.utils,
					p = i.from(r).add(s),
					h = m,
					f = "0x" + [c(1)].concat([c(h), i.from(a).toHexString(), i.from(s).toHexString()].map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return l(e, Promise.resolve(u), "send", [t, n, r])
				}(e, t, p.toString(), f)
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
				await c();
				const a = o() || "";
				if (t.toLowerCase() !== a.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(p), "subscribe", [t, n])
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				a = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case a.b:
						case a.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === a.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, n, r, a, s;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					i = null == o ? void 0 : o.contracts,
					c = null == i ? void 0 : i.unlocked,
					d = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					u = !!(null === (a = e.walletProvider) || void 0 === a ? void 0 : a.inTransition),
					m = (null == c ? void 0 : c.decimals) || 0,
					b = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: i,
					decimals: m,
					displayConversion: b,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: u(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, a = Object.keys(r).reduce((t, a) => {
							return {
								...t,
								[a]: {
									...e[a] || {},
									[n]: r[a]
								}
							}
						}, {});
						return {
							...e,
							...a
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: i,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: i.a
				}
			});
			const c = (e, t) => {
				var n, r, a;
				return t ? null === (a = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === a ? void 0 : a[t] : void 0
			};

			function d() {
				const e = Object(a.fb)(),
					t = Object(r.e)(t => Object(a.r)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => c(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const l = (e, t) => {
				var n;
				const r = null === (n = c(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby || r === s.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = [],
				s = {},
				o = (e, t) => {
					const n = b(e, t);
					if (n) return n.mainHeader
				},
				i = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : s
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = d(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				u = (e, t) => {
					const n = d(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(r.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || a
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceWalletRegistration.8bfdbe3f9024d2d34eef.js.map