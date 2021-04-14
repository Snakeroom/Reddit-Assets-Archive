// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.21cc6712fefa702469e5.js
// Retrieved at 4/14/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t),
					o = new r.BigNumber(n.dividedBy(s)),
					i = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(i).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return c
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
				return E
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "w", (function() {
				return h
			})), n.d(t, "x", (function() {
				return j
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				O = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				N = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				x = "GOVERNANCE__TRANSFER_PENDING",
				y = "GOVERNANCE__TRANSFER_SUCCESS",
				I = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				g = "GOVERNANCE__WALLETS_FETCH_PENDING",
				h = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				j = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/config.ts"),
				u = n("./src/graphql/operations/PollVote.json"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/gov.ts"),
				O = n("./src/reddit/actions/governance/constants.ts"),
				N = n("./src/reddit/actions/governance/errorToast.ts");
			const v = Object(s.a)(O.b),
				x = Object(s.a)(O.c),
				y = Object(s.a)(O.e),
				I = (Object(s.a)(O.f), Object(s.a)(O.g), Object(s.a)(O.h)),
				g = Object(s.a)(O.i),
				h = Object(s.a)(O.j),
				j = Object(s.a)(O.k),
				T = Object(s.a)(O.q),
				C = Object(s.a)(O.r),
				S = Object(s.a)(O.s),
				P = Object(s.a)(O.t),
				k = Object(s.a)(O.u),
				A = Object(s.a)(O.v),
				w = Object(s.a)(O.w),
				R = Object(s.a)(O.x),
				G = (e, t) => async (n, r, {
					apiContext: s,
					gqlContext: o
				}) => {
					let i, c = r().polls.models[e];
					if (n(h({
							pollId: e
						})), (i = c.type === m.a.GA ? await ((e, t, n) => Object(l.a)(e, {
								...u,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(o(), e, t) : await
							function(e, t, n, r) {
								return Object(b.a)(e, {
									method: "put",
									endpoint: `${a.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							n(y({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(j(i.body));
						const s = r();
						if ((c = s.polls.models[e]) && Object(m.f)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === _.a.notVoted && n(Object(d.U)(e))
						}
					} else n(g({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(N.a)(n, i.error || i.errors[0].messsage)
				}, L = (e, t) => async (n, s, {
					apiContext: d
				}) => {
					n(S());
					const u = s().transfers.communityPoints.contentId || void 0,
						l = await
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
					}(d(), {
						...e,
						contentId: u
					});
					l.ok ? (n(P({
						...l.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(E.n)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(T({
						error: l.error
					})), Object(N.a)(n, l.error))
				}, U = e => async (t, n, {
					apiContext: r
				}) => {
					t(A());
					const s = await Object(p.a)(r(), e);
					s.ok ? t(w(s.body)) : t(k({
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
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(u);
			const m = Object(i.c)({
				tokenSymbol: a.o
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${d.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(l.a.grey, e.className),
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
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				_ = n("./src/reddit/selectors/crypto/wallet.ts"),
				E = n("./src/reddit/selectors/economics.ts"),
				O = n("./src/reddit/selectors/gov.ts"),
				N = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				v = n.n(N);
			const x = Object(d.c)({
				publicWallet: _.c,
				tippingEnabled: b.d.spTipping,
				tokenDisplayConversion: O.m,
				tokenName: O.n,
				useCrypto: O.j,
				userOptedOut: (e, {
					subredditId: t
				}) => Object(E.y)(e, t)
			});
			t.default = Object(p.a)("spPublicPoints", Object(i.b)(x, e => ({
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
					publicWallet: s,
					subredditId: i,
					tippingEnabled: d,
					tokenDisplayConversion: a,
					tokenName: u,
					useCrypto: b,
					username: p
				} = e, _ = null == s ? void 0 : s.amount;
				if (!_) return null;
				const E = `public-wallets-${p}-${i}-${t}`,
					O = null == s ? void 0 : s.publicAddress;
				if (b && !O) return null;
				const N = Object(f.c)(_, a);
				return o.a.createElement("div", {
					className: Object(c.a)(e.className, v.a.container, {
						[v.a.tippable]: d
					}),
					id: E,
					onClick: t => {
						d && (t.stopPropagation(), e.onTip(e.username, e.contentId, O))
					},
					onMouseEnter: () => e.onShowTooltip(E),
					onMouseLeave: () => e.onHideTooltip(),
					title: d ? "" : r.fbt._("{username} has {amount} {token name}", [r.fbt._param("username", e.username), r.fbt._param("amount", N), r.fbt._param("token name", u)], {
						hk: "6WL3V"
					})
				}, o.a.createElement(l.a, {
					className: v.a.tokenFilled,
					subredditId: e.subredditId
				}), o.a.createElement(l.a, {
					grey: !0,
					className: v.a.tokenGrey,
					subredditId: e.subredditId
				}), o.a.createElement("span", {
					className: v.a.amount
				}, N), n, d && o.a.createElement(m.c, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("Tip {username} with {tokenname}", [r.fbt._param("username", e.username), r.fbt._param("tokenname", u)], {
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
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
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
				_ = e => s.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				E = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				O = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(a.b)(t)(e)
				}),
				N = Object(c.a)(E, [d.a.Click, d.a.Keydown]),
				v = Object(c.a)(_, [d.a.Click, d.a.Keydown]),
				x = Object(o.b)(O);
			t.c = x(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(N, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(v, b({}, e, {
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
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				d = n("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(d.b)(r)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "m", (function() {
				return E
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

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

			function d(e) {
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
			async function a(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function l(e, t, n) {
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
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				_ = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function E(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.cb.GET
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

			function d(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.cb.POST,
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
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(i.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(o.b)(r)(e => {
					const {
						featureEnabled: r,
						...o
					} = e, i = o;
					return r ? s.a.createElement(t, i) : void 0 !== n ? s.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
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
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var d = (e = i, t) => {
					switch (t.type) {
						case o.a: {
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
						case s.b:
						case s.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const a = {};
			var u = (e = a, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, s = Object.keys(r).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[n]: r[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: d,
				publicWallets: u
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(r.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				i = (e, t) => {
					var n;
					return null === (n = o(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				d = (e, t) => {
					var n, r, s, o;
					return null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "j", (function() {
				return j
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				i = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
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
				a = (e, t) => {
					const n = N(e, t);
					if (n) return n.mainHeader
				},
				u = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				l = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const n = m(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				p = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				f = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				O = (e, t) => {
					const n = g(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				N = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				v = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				x = (e, t) => {
					const n = v(e, t);
					return n && n.walletProvider
				},
				y = (e, t) => {
					const n = x(e, t),
						r = v(e, t);
					return n && n.provider || r && r.provider
				},
				I = (e, t) => {
					const n = y(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				g = (e, t) => {
					const n = x(e, t),
						r = y(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				h = (e, {
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
					const n = v(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.21cc6712fefa702469e5.js.map