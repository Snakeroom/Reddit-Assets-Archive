// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.0f55166ce06b9d82a0ae.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t),
					s = new r.BigNumber(n.dividedBy(o)),
					i = new r.BigNumber("100").multipliedBy(s);
				return new r.BigNumber(i).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				o = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				o = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return j
			})), n.d(t, "w", (function() {
				return g
			})), n.d(t, "x", (function() {
				return T
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				o = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				E = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				N = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				h = "GOVERNANCE__TRANSFER_SUCCESS",
				x = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				j = "GOVERNANCE__WALLETS_FETCH_PENDING",
				g = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				T = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: s.b.Error,
					text: Object(o.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/config.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/crypto/points.ts"),
				E = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const N = Object(o.a)(E.b),
				y = Object(o.a)(E.c),
				h = Object(o.a)(E.e),
				x = (Object(o.a)(E.f), Object(o.a)(E.g), Object(o.a)(E.h)),
				j = Object(o.a)(E.i),
				g = Object(o.a)(E.j),
				T = Object(o.a)(E.k),
				I = Object(o.a)(E.q),
				C = Object(o.a)(E.r),
				A = Object(o.a)(E.s),
				P = Object(o.a)(E.t),
				S = Object(o.a)(E.u),
				R = Object(o.a)(E.v),
				k = Object(o.a)(E.w),
				w = Object(o.a)(E.x),
				L = (e, t) => async (n, r, o) => {
					let s, {
							apiContext: i,
							gqlContext: d
						} = o,
						p = r().polls.models[e];
					if (n(g({
							pollId: e
						})), (s = p.type === l.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...m,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(d(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${a.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(i(), p.subredditId, e, t)).ok) {
						if (p.type === l.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							n(h({
								pollId: p.id,
								optionId: t,
								options: e
							}))
						} else n(T(s.body));
						const o = r();
						if ((p = o.polls.models[e]) && Object(l.d)(p)) {
							const {
								postId: e
							} = p, t = o.posts.models[e];
							t && t.voteState === _.a.notVoted && n(Object(c.ib)(e))
						}
					} else n(j({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(v.a)(n, s.error || s.errors[0].messsage)
				}, G = (e, t) => async (n, o, c) => {
					let {
						apiContext: u
					} = c;
					var l;
					n(A());
					const m = o().transfers.communityPoints.contentId || void 0,
						p = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${a.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(u(), {
						...e,
						contentId: m
					});
					p.ok ? (n(P({
						...p.body,
						subredditId: e.subredditId
					})), n(Object(d.f)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(s.a)(e.amount)), r.fbt._param("tokenName", (null === (l = Object(O.b)(o(), e.subredditId)) || void 0 === l ? void 0 : l.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(I({
						error: p.error
					})), Object(v.a)(n, p.error))
				}, U = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					t(R());
					const s = await Object(p.a)(o(), e);
					s.ok ? t(k(s.body)) : t(S({
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
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/crypto/points.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(u);
			const m = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(a.b)(e, n)
				}
			});
			t.a = Object(s.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					s = `${c.a.assetPath}/${r}`;
				if (e.grey && s.endsWith(".svg")) {
					const t = `url(${s}) center/cover`;
					return o.a.createElement("div", {
						className: Object(d.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: s
				})
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				token: "_3nQr7AT1U0w1HdVk-xepUB",
				tokenFilled: "_3d-Rpbq-Qb88tf5D_s1rsj",
				tokenGrey: "pvn75ouWnsoKK4l_QS9yI",
				amount: "_3nhTfmUMmYib8x61No0h3r",
				container: "_15KjTxLhBmrJE79nlBUuxb",
				tippable: "_2pUuGtsqXDTCxGGGGr-NXT"
			}
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				_ = n("./src/reddit/selectors/crypto/points.ts"),
				O = n("./src/reddit/selectors/crypto/wallet.ts"),
				E = n("./src/reddit/selectors/economics.ts"),
				v = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				N = n.n(v);
			const y = Object(c.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(_.b)(e, n)
				},
				publicWallet: O.c,
				tippingEnabled: b.d.spTipping,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(E.z)(e, n)
				}
			});
			t.default = Object(p.a)("spPublicPoints", Object(i.b)(y, e => ({
				onHideTooltip: () => e(Object(u.i)()),
				onShowTooltip: t => e(Object(u.f)({
					tooltipId: t
				})),
				onTip: (t, n, r) => e(Object(a.f)({
					recipient: t,
					contentId: n,
					publicAddress: r
				}))
			}))((function(e) {
				if (e.userOptedOut) return null;
				const {
					contentId: t,
					metaSeparator: n,
					pointsDetails: o,
					publicWallet: i,
					subredditId: c,
					username: a
				} = e, u = null == i ? void 0 : i.amount;
				if (!o || !u) return null;
				const b = `public-wallets-${a}-${c}-${t}`,
					p = null == i ? void 0 : i.publicAddress;
				if (!p) return null;
				const _ = Object(f.d)(u, o.displayConversion),
					O = e.tippingEnabled && !o.inTransition;
				return s.a.createElement("div", {
					className: Object(d.a)(e.className, N.a.container, {
						[N.a.tippable]: O
					}),
					id: b,
					onClick: t => {
						O && (t.stopPropagation(), e.onTip(e.username, e.contentId, p))
					},
					onMouseEnter: () => e.onShowTooltip(b),
					onMouseLeave: () => e.onHideTooltip(),
					title: O ? "" : r.fbt._("{username} has {amount} {token name}", [r.fbt._param("username", e.username), r.fbt._param("amount", _), r.fbt._param("token name", o.name)], {
						hk: "6WL3V"
					})
				}, s.a.createElement(l.a, {
					className: N.a.tokenFilled,
					subredditId: e.subredditId
				}), s.a.createElement(l.a, {
					grey: !0,
					className: N.a.tokenGrey,
					subredditId: e.subredditId
				}), s.a.createElement("span", {
					className: N.a.amount
				}, _), n, O && s.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: b,
					text: r.fbt._("Tip {username} with {tokenname}", [r.fbt._param("username", e.username), r.fbt._param("tokenname", o.name)], {
						hk: "2Raj4F"
					})
				}))
			})))
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				a = n("./src/reddit/selectors/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				l = n.n(u),
				m = n("./src/lib/lessComponent.tsx");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const p = m.a.div("Text", l.a),
				f = m.a.div("BottomText", l.a),
				_ = e => o.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				O = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return o.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				E = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(a.b)(n)(e)
					}
				}),
				v = Object(d.a)(O, [c.a.Click, c.a.Keydown]),
				N = Object(d.a)(_, [c.a.Click, c.a.Keydown]),
				y = Object(s.b)(E);
			t.c = y(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? o.a.createElement(v, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : o.a.createElement(N, b({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const n = Object(s.a)(e, t);
				class r extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(n, d({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(r)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "n", (function() {
				return E
			}));
			var r, o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
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

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case r.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:5391184";
					case r.ArbitrumNitroDevnet:
						return "https://meta-api.reddit.com/ethereum/nitroDevnet";
					case r.ArbitrumMainnet:
						return "https://a4ba.arbitrum.io/rpc";
					default:
						return `https://meta-api.reddit.com/ethereum/${e}`
				}
			}

			function d(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby";
					case r.ArbitrumRinkeby:
						return 5391184;
					case r.ArbitrumNitroDevnet:
						return 421612;
					case r.ArbitrumMainnet:
						return 42170;
					default: {
						const [, t] = e.split(":");
						return t
					}
				}
			}

			function a(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function u(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumNova = "ethereum:42170", e.ArbitrumRinkeby = "ethereum:5391184", e.ArbitrumNitroDevnet = "ethereum:421612", e.ArbitrumMainnet = "ethereum:42170", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
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
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				_ = e => ({
					type: "subscribe",
					subredditId: e
				}),
				O = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function E(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(s.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: o.ob.GET
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

			function c(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: o.ob.POST,
					data: t.userIds
				}).then(e => e.ok ? {
					...e,
					body: {
						wallets: e.body
					}
				} : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/featureFlags/index.ts");

			function d(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r,
						...s
					} = e, i = s;
					return r ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(o).toString()
			}

			function i(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t || 1);
				return n.multipliedBy(o).toFixed(0)
			}

			function d(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function s(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(o).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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
						case o.b:
						case o.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === o.b
								}
							};
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/governance/constants.ts");
			const a = 15e4,
				u = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, o, s;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == i ? void 0 : i.contracts,
					d = null == c ? void 0 : c.unlocked,
					u = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (o = e.walletProvider) || void 0 === o ? void 0 : o.inTransition),
					b = null == i ? void 0 : i.metaTransactions,
					p = (null == b ? void 0 : b.allowedContractMethods) || {},
					f = (null == b ? void 0 : b.gasLimit) || a,
					_ = (null == d ? void 0 : d.decimals) || 0,
					O = "1" + "0".repeat(_);
				return {
					allowedContractMethods: p,
					blockchainProvider: u,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: c,
					decimals: _,
					displayConversion: O,
					gasLimit: f,
					images: e.images || l,
					inTransition: m,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: m(r)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, o = Object.keys(r).reduce((t, o) => {
							return {
								...t,
								[o]: {
									...e[o] || {},
									[n]: r[o]
								}
							}
						}, {});
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: c,
				points: b,
				publicWallets: f
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: c.a
				}
			});
			const d = (e, t) => {
				var n, r, o;
				return t ? null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === o ? void 0 : o[t] : void 0
			};

			function a() {
				const e = Object(o.ib)(),
					t = Object(r.e)(t => Object(o.s)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const u = (e, t) => {
				var n;
				const r = null === (n = d(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby || r === s.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: o.a
				}
			});
			const s = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				i = (e, t) => {
					var n;
					return null === (n = s(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				c = (e, t) => {
					var n, r, o, s;
					return null === (s = null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === o ? void 0 : o[t.userId]) || void 0 === s ? void 0 : s[t.subredditId]
				}
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.0f55166ce06b9d82a0ae.js.map