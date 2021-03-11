// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.23c393b0ccb5fbd07667.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js");

			function s(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t),
					o = new n.BigNumber(r.dividedBy(s)),
					i = new n.BigNumber("100").multipliedBy(o);
				return new n.BigNumber(i).toNumber()
			}
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "i", (function() {
				return l
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "p", (function() {
				return O
			})), r.d(t, "q", (function() {
				return N
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "s", (function() {
				return g
			})), r.d(t, "t", (function() {
				return I
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "v", (function() {
				return x
			})), r.d(t, "w", (function() {
				return j
			})), r.d(t, "x", (function() {
				return C
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				O = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				N = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				g = "GOVERNANCE__TRANSFER_PENDING",
				I = "GOVERNANCE__TRANSFER_SUCCESS",
				y = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				x = "GOVERNANCE__WALLETS_FETCH_PENDING",
				j = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				C = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = r("./src/reddit/models/Toast/index.ts");

			function i(e, t) {
				e(Object(n.e)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "d", (function() {
				return G
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "h", (function() {
				return U
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/post.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/config.ts"),
				u = r("./src/graphql/operations/PollVote.json"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/reddit/models/Poll/index.ts"),
				m = r("./src/reddit/endpoints/governance/requester.ts");
			var f = r("./src/reddit/endpoints/governance/wallet.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				_ = r("./src/reddit/models/Vote/index.ts"),
				E = r("./src/reddit/selectors/gov.ts"),
				O = r("./src/reddit/actions/governance/constants.ts"),
				N = r("./src/reddit/actions/governance/errorToast.ts");
			const v = Object(s.a)(O.b),
				g = Object(s.a)(O.c),
				I = Object(s.a)(O.e),
				y = (Object(s.a)(O.f), Object(s.a)(O.g), Object(s.a)(O.h)),
				x = Object(s.a)(O.i),
				j = Object(s.a)(O.j),
				C = Object(s.a)(O.k),
				h = Object(s.a)(O.q),
				T = Object(s.a)(O.r),
				S = Object(s.a)(O.s),
				A = Object(s.a)(O.t),
				k = Object(s.a)(O.u),
				P = Object(s.a)(O.v),
				R = Object(s.a)(O.w),
				w = Object(s.a)(O.x),
				G = (e, t) => async (r, n, {
					apiContext: s,
					gqlContext: o
				}) => {
					let i, c = n().polls.models[e];
					if (r(j({
							pollId: e
						})), (i = c.type === b.a.GA ? await ((e, t, r) => Object(l.a)(e, {
								...u,
								variables: {
									input: {
										postId: t,
										optionId: r
									}
								}
							}))(o(), e, t) : await
							function(e, t, r, n) {
								return Object(m.a)(e, {
									method: "put",
									endpoint: `${a.a.metaUrl}/polls/${t}/${r}/votes/me/${n}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === b.a.GA) {
							const {
								options: e
							} = i.body.data.updatePostPollVoteState.poll;
							r(I({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else r(C(i.body));
						const s = n();
						if ((c = s.polls.models[e]) && Object(b.e)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === _.a.notVoted && r(Object(d.U)(e))
						}
					} else r(x({
						pollId: e,
						error: i.error || i.errors[0].message
					})), Object(N.a)(r, i.error || i.errors[0].messsage)
				}, L = (e, t) => async (r, s, {
					apiContext: d
				}) => {
					r(S());
					const u = s().transfers.communityPoints.contentId || void 0,
						l = await
					function(e, t) {
						return Object(m.a)(e, {
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
					l.ok ? (r(A({
						...l.body,
						subredditId: e.subredditId
					})), r(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: n.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [n.fbt._param("amount", Object(o.a)(e.amount)), n.fbt._param("tokenName", Object(E.n)(s(), {
							subredditId: e.subredditId
						})), n.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && r(Object(i.f)())) : (r(h({
						error: l.error
					})), Object(N.a)(r, l.error))
				}, U = e => async (t, r, {
					apiContext: n
				}) => {
					t(P());
					const s = await Object(f.a)(n(), e);
					s.ok ? t(R(s.body)) : t(k({
						error: s.error
					}))
				}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, r) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/config.ts"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/selectors/gov.ts"),
				u = r("./src/reddit/components/Governance/Token/index.m.less"),
				l = r.n(u);
			const b = Object(i.c)({
				tokenSymbol: a.o
			});
			t.a = Object(o.b)(b)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					r = `${d.a.assetPath}/${t}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
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
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less": function(e, t, r) {
			e.exports = {
				token: "_3nQr7AT1U0w1HdVk-xepUB",
				tokenFilled: "_3d-Rpbq-Qb88tf5D_s1rsj",
				tokenGrey: "pvn75ouWnsoKK4l_QS9yI",
				amount: "_3nhTfmUMmYib8x61No0h3r",
				container: "_15KjTxLhBmrJE79nlBUuxb",
				tippable: "_2pUuGtsqXDTCxGGGGr-NXT"
			}
		},
		"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/actions/governance/index.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				l = r("./src/reddit/components/Governance/Token/index.tsx"),
				b = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = r("./src/reddit/featureFlags/index.ts"),
				f = r("./src/reddit/featureFlags/component.tsx"),
				p = r("./src/reddit/helpers/governance/tokens.ts"),
				_ = r("./src/reddit/selectors/crypto/wallet.ts"),
				E = r("./src/reddit/selectors/economics.ts"),
				O = r("./src/reddit/selectors/gov.ts"),
				N = r("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				v = r.n(N);
			const g = Object(d.c)({
				publicWallet: _.c,
				tippingEnabled: m.d.spTipping,
				tokenDisplayConversion: O.m,
				tokenName: O.n,
				useCrypto: O.j,
				userOptedOut: (e, {
					subredditId: t
				}) => Object(E.y)(e, t)
			});
			t.default = Object(f.a)("spPublicPoints", Object(i.b)(g, e => ({
				onHideTooltip: () => e(Object(u.i)()),
				onShowTooltip: t => e(Object(u.f)({
					tooltipId: t
				})),
				onTip: (t, r, n) => e(Object(a.f)({
					recipient: t,
					contentId: r,
					publicAddress: n
				}))
			}))((function(e) {
				if (e.userOptedOut) return null;
				const {
					contentId: t,
					metaSeparator: r,
					publicWallet: s,
					subredditId: i,
					tippingEnabled: d,
					tokenDisplayConversion: a,
					tokenName: u,
					useCrypto: m,
					username: f
				} = e, _ = null == s ? void 0 : s.amount;
				if (!_) return null;
				const E = `public-wallets-${f}-${i}-${t}`,
					O = null == s ? void 0 : s.publicAddress;
				if (m && !O) return null;
				const N = Object(p.c)(_, a);
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
					title: d ? "" : n.fbt._("{username} has {amount} {token name}", [n.fbt._param("username", e.username), n.fbt._param("amount", N), n.fbt._param("token name", u)], {
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
				}, N), r, d && o.a.createElement(b.c, {
					caretOnTop: !0,
					tooltipId: E,
					text: n.fbt._("Tip {username} with {tokenname}", [n.fbt._param("username", e.username), n.fbt._param("tokenname", u)], {
						hk: "2Raj4F"
					})
				}))
			})))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "k", (function() {
				return a
			})), r.d(t, "l", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "m", (function() {
				return E
			}));
			var n, s = r("./src/config.ts"),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e) {
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

			function d(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function a(e, t, r) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function l(e, t, r) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const b = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				m = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				f = e => ({
					type: "claim",
					subredditId: e
				}),
				p = e => ({
					type: "subscribe",
					subredditId: e
				}),
				_ = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function E(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${s.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/config.ts"),
				s = (r("./src/lib/bigNumberUtils/percent.ts"), r("./src/lib/constants/index.ts")),
				o = r("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.cb.GET
				}).then(e => {
					if (e.ok) {
						const r = e.body,
							n = {
								[t.subredditId]: r
							};
						return {
							...e,
							body: n
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
					endpoint: `${n.a.metaUrl}/wallets/${t.subredditId}`,
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
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/reddit/featureFlags/index.ts");

			function c(e, t, r) {
				const n = Object(i.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, i = o;
					return n ? s.a.createElement(t, i) : void 0 !== r ? s.a.createElement(r, i) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function d(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : n.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function i(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				o = r("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var d = (e = i, t) => {
					switch (t.type) {
						case o.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts");
			const a = {};
			var u = (e = a, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
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
			t.a = Object(n.c)({
				claims: d,
				publicWallets: u
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: s.a
				}
			});
			const o = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				i = (e, t) => {
					var r;
					return null === (r = o(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				d = (e, t) => {
					var r, n, s, o;
					return null === (o = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "n", (function() {
				return _
			})), r.d(t, "o", (function() {
				return E
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "k", (function() {
				return v
			})), r.d(t, "r", (function() {
				return g
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "p", (function() {
				return x
			})), r.d(t, "l", (function() {
				return j
			})), r.d(t, "j", (function() {
				return C
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				i = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = g(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				a = (e, t) => {
					const r = N(e, t);
					if (r) return r.mainHeader
				},
				u = (e, t) => {
					const r = N(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				l = (e, t) => {
					const r = N(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : i
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				m = (e, t) => {
					const r = b(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				f = (e, t) => {
					const r = b(e, t);
					return r && r.amount || "0"
				},
				p = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || o
				},
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				O = (e, t) => {
					const r = x(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				N = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				v = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				g = (e, t) => {
					const r = v(e, t);
					return r && r.walletProvider
				},
				I = (e, t) => {
					const r = g(e, t),
						n = v(e, t);
					return r && r.provider || n && n.provider
				},
				y = (e, t) => {
					const r = I(e, t);
					return r === s.a.Ethereum || r === s.a.Rinkeby || r === s.a.EthTraderEthereum || r === s.a.EthTraderRinkeby
				},
				x = (e, t) => {
					const r = g(e, t),
						n = I(e, t);
					if (r && !r.inTransition && n === s.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const o = r && r.extra && r.extra.contracts,
						i = o && o.unlocked;
					return i && {
						address: i.address,
						symbol: i.token || "",
						decimals: i.decimals || 18,
						image: i.image
					}
				},
				j = (e, {
					subredditId: t
				}) => {
					const r = g(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				C = (e, t) => {
					const r = v(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.23c393b0ccb5fbd07667.js.map