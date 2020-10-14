// https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.5b1adf0cec8db703726e.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceUserPublicPointsDisplay"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
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
					c = new r.BigNumber("100").multipliedBy(s);
				return new r.BigNumber(c).toNumber()
			}
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
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return h
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return I
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				o = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				d = "POLL_VOTE_SUCCESS",
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				a = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				u = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				O = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				N = "GOVERNANCE__TRANSFER_FAILURE",
				g = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				j = "GOVERNANCE__TRANSFER_PENDING",
				y = "GOVERNANCE__TRANSFER_SUCCESS",
				x = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				h = "GOVERNANCE__WALLETS_FETCH_PENDING",
				v = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				o = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				s = n("./src/reddit/models/Toast/index.ts");

			function c(e, t) {
				e(Object(r.e)({
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
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "h", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/governance/poll.ts"),
				u = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				O = n("./src/reddit/selectors/gov.ts"),
				E = n("./src/reddit/actions/governance/constants.ts"),
				_ = n("./src/reddit/actions/governance/errorToast.ts");
			const N = Object(o.a)(E.b),
				g = Object(o.a)(E.c),
				j = Object(o.a)(E.e),
				y = (Object(o.a)(E.f), Object(o.a)(E.g), Object(o.a)(E.h)),
				x = Object(o.a)(E.i),
				h = Object(o.a)(E.j),
				v = Object(o.a)(E.k),
				I = Object(o.a)(E.q),
				T = Object(o.a)(E.r),
				k = Object(o.a)(E.s),
				S = Object(o.a)(E.t),
				A = Object(o.a)(E.u),
				P = Object(o.a)(E.v),
				R = Object(o.a)(E.w),
				C = Object(o.a)(E.x),
				w = (e, t) => async (n, r, o) => {
					let s, {
							apiContext: c,
							gqlContext: i
						} = o,
						u = r().polls.models[e];
					if (n(h({
							pollId: e
						})), (s = u.type === m.a.GA ? await Object(a.c)(i(), e, t) : await Object(a.b)(c(), u.subredditId, e, t)).ok) {
						if (u.type === m.a.GA) {
							const {
								options: e
							} = s.body.data.updatePostPollVoteState.poll;
							n(j({
								pollId: u.id,
								optionId: t,
								options: e
							}))
						} else n(v(s.body));
						const o = r();
						if ((u = o.polls.models[e]) && Object(m.d)(u)) {
							const {
								postId: e
							} = u, t = o.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(d.S)(e))
						}
					} else n(x({
						pollId: e,
						error: s.error || s.errors[0].message
					})), Object(_.a)(n, s.error || s.errors[0].messsage)
				}, G = (e, t) => async (n, o, d) => {
					let {
						apiContext: a
					} = d;
					n(k());
					const b = o().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(u.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(a(), Object.assign(Object.assign({}, e), {
						contentId: b
					}));
					m.ok ? (n(S(Object.assign(Object.assign({}, m.body), {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(s.a)(e.amount)), r.fbt._param("tokenName", Object(O.p)(o(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(c.f)())) : (n(I({
						error: m.error
					})), Object(_.a)(n, m.error))
				}, L = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					t(P());
					const s = await Object(b.a)(o(), e);
					s.ok ? t(R(s.body)) : t(A({
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
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(u);
			const b = Object(c.c)({
				tokenSymbol: a.q
			});
			t.a = Object(s.b)(b)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(d.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return o.a.createElement("div", {
						className: Object(i.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
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
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/actions/governance/index.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				b = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/selectors/economics.ts"),
				E = n("./src/reddit/selectors/gov.ts"),
				_ = n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),
				N = n.n(_);
			const g = Object(d.c)({
				publicWallet: E.i,
				tippingEnabled: m.d.spTipping,
				tokenDisplayConversion: E.o,
				tokenName: E.p,
				useCrypto: E.k,
				userOptedOut: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(O.z)(e, n)
				}
			});
			t.default = Object(p.a)("spPublicPoints", Object(c.b)(g, e => ({
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
					publicWallet: o,
					subredditId: c,
					tippingEnabled: d,
					tokenDisplayConversion: a,
					tokenName: u,
					useCrypto: m,
					username: p
				} = e, O = o && o.amount || void 0;
				if (!O) return null;
				const E = "public-wallets-".concat(p, "-").concat(c, "-").concat(t),
					_ = o && o.publicAddress;
				if (m && !_) return null;
				const g = Object(f.c)(O, a);
				return s.a.createElement("div", {
					className: Object(i.a)(e.className, N.a.container, {
						[N.a.tippable]: d
					}),
					id: E,
					onClick: t => {
						d && (t.stopPropagation(), e.onTip(e.username, e.contentId, _))
					},
					onMouseEnter: () => e.onShowTooltip(E),
					onMouseLeave: () => e.onHideTooltip(),
					title: d ? "" : r.fbt._("{username} has {amount} {token name}", [r.fbt._param("username", e.username), r.fbt._param("amount", g), r.fbt._param("token name", u)], {
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
				}, g), n, d && s.a.createElement(b.c, {
					caretOnTop: !0,
					tooltipId: E,
					text: r.fbt._("Tip {username} with {tokenname}", [r.fbt._param("username", e.username), r.fbt._param("tokenname", u)], {
						hk: "2Raj4F"
					})
				}))
			})))
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "l", (function() {
				return O
			}));
			var r, o = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e) {
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
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
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
			async function a(e, t, n) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function u(e, t, n) {
				return await Object(s.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function l(e, t, n) {
				return await Object(s.a)(e, {
					method: "delete",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				m = e => ({
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
			async function O(e, t) {
				return await Object(s.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/lodash/get.js"),
				o = n.n(r),
				s = n("./src/config.ts"),
				c = n("./src/graphql/operations/PollVote.json"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				u = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function l(e, t, n, r) {
				return Object(u.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const b = (e, t, n) => Object(d.a)(e, Object.assign(Object.assign({}, c), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(u.a)(Object(i.a)(e, [a.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						title: o()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: o()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function c(e, t) {
				return Object(s.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: o.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: r
						})
					}
					return e
				})
			}

			function d(e, t) {
				return Object(s.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: o.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts"),
				i = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
					}
					return n
				};

			function a(e, t, n) {
				const r = Object(c.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(s.b)(r)(e => {
					const {
						featureEnabled: r
					} = e, s = i(e, ["featureEnabled"]);
					return r ? o.a.createElement(t, s) : void 0 !== n ? o.a.createElement(n, s) : null
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t);
				return n.dividedToIntegerBy(o).toString()
			}

			function c(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function d(e, t) {
				const n = new r.BigNumber(e),
					o = new r.BigNumber(t);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
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

			function c(e) {
				const t = "".concat(e.type, " (").concat(e.code, ")");
				return "message" in e ? "".concat(t, ": ").concat(e.message) : t
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "p", (function() {
				return E
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "m", (function() {
				return j
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return T
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts");
			const s = [],
				c = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				i = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = y(e, {
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
				a = (e, t) => {
					const n = g(e, t);
					if (n) return n.mainHeader
				},
				u = (e, t) => {
					const n = g(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				l = (e, t) => {
					const n = g(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				b = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				m = (e, t) => {
					const n = b(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				p = (e, t) => {
					const n = b(e, t);
					return n && n.amount || "0"
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				O = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				E = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				N = (e, t) => {
					const n = v(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				g = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				j = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				y = (e, t) => {
					const n = j(e, t);
					return n && n.walletProvider
				},
				x = (e, t) => {
					const n = y(e, t),
						r = j(e, t);
					return n && n.provider || r && r.provider
				},
				h = (e, t) => {
					const n = x(e, t);
					return n === o.a.Ethereum || n === o.a.Rinkeby || n === o.a.EthTraderEthereum || n === o.a.EthTraderRinkeby
				},
				v = (e, t) => {
					const n = y(e, t),
						r = x(e, t);
					if (n && !n.inTransition && r === o.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const s = n && n.extra && n.extra.contracts,
						c = s && s.unlocked;
					return c && {
						address: c.address,
						symbol: c.token || "",
						decimals: c.decimals || 18,
						image: c.image
					}
				},
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = y(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const n = j(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GovernanceUserPublicPointsDisplay.5b1adf0cec8db703726e.js.map