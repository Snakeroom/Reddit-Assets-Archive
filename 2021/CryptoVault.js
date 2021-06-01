// https://www.redditstatic.com/desktop2x/CryptoVault.905308acbd2568224fac.js
// Retrieved at 6/1/2021, 2:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoVault"], {
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				c = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "v", (function() {
				return h
			})), n.d(t, "w", (function() {
				return S
			})), n.d(t, "x", (function() {
				return R
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				c = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				s = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				u = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				a = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				E = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				_ = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				m = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				O = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				b = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				p = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				N = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				C = "GOVERNANCE__TRANSFER_SUCCESS",
				A = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				h = "GOVERNANCE__WALLETS_FETCH_PENDING",
				S = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				R = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				s = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				a = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(a);
			const E = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(c.b)(E)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					c = `${s.a.assetPath}/${r}`;
				if (e.grey && c.endsWith(".svg")) {
					const t = `url(${c}) center/cover`;
					return i.a.createElement("div", {
						className: Object(d.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return i.a.createElement("img", {
					className: e.className,
					src: c
				})
			}))
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less": function(e, t, n) {
			e.exports = {
				vaultActionPills: "_19E9RnYMHrJz3-6qpKNEnT",
				vaultActionPill: "_3xYvGCCAkxYx0jqLc2lwo2",
				tokenIcon: "_3OdgI42NyvhRMMgW7EWGqg"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/extractQueryParams/index.ts"),
				d = n("./src/lib/mapToObject/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				E = n("./src/reddit/constants/modals.ts"),
				_ = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				p = n("./src/reddit/selectors/crypto/points.ts"),
				N = n("./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less"),
				v = n.n(N);

			function y(e) {
				const t = Object(o.d)(),
					n = Object(_.Z)(),
					r = Object(o.e)(e => Object(_.q)(e, {
						pageLayer: n
					})),
					i = Object(o.e)(e => Object(p.b)(e, null == r ? void 0 : r.id)),
					s = Object(b.d)(e.content.document).filter(O.b);
				return r && i && s.length ? c.a.createElement("div", {
					className: v.a.vaultActionPills
				}, s.map(e => c.a.createElement(C, {
					key: e,
					url: e,
					currentSubreddit: r,
					dispatch: t,
					tokenDisplayConversion: i.displayConversion
				}))) : null
			}

			function C({
				url: e,
				currentSubreddit: t,
				dispatch: n,
				tokenDisplayConversion: i
			}) {
				var o;
				const _ = Object(s.a)(e),
					b = Object(O.a)(Object(d.a)(_)),
					p = null === (o = null == b ? void 0 : b.subreddit) || void 0 === o ? void 0 : o.toLowerCase();
				return b && p && p === t.name.toLowerCase() ? c.a.createElement(m.q, {
					priority: m.b.Plain,
					onClick: () => n(Object(a.h)(E.a.CRYPTO_BURN_POINTS, b)),
					className: v.a.vaultActionPill,
					size: m.c.XS
				}, b.cta || r.fbt._("Burn", null, {
					hk: "4p3rvM"
				}), c.a.createElement(l.a, {
					className: v.a.tokenIcon,
					subredditId: t.id,
					grey: !0
				}), Object(u.a)(Object(f.b)(b.amount, i))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/extractQueryParams/index.ts"),
				s = n("./src/lib/mapToObject/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				E = n("./src/reddit/featureFlags/index.ts"),
				_ = n("./src/reddit/helpers/crypto/vaultActionLink.ts");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = function(e) {
				const t = Object(c.d)(),
					n = Object(a.Z)(),
					r = Object(c.e)(e => Object(a.q)(e, {
						pageLayer: n
					})),
					O = Object(c.e)(E.d.spBurnLinks),
					{
						children: f,
						...b
					} = e;
				return O ? i.a.createElement(l.a, m({}, b, {
					onClick: n => {
						var i;
						const c = Object(o.a)(e.to.toString()),
							a = Object(_.a)(Object(s.a)(c)),
							l = null === (i = null == a ? void 0 : a.subreddit) || void 0 === i ? void 0 : i.toLowerCase();
						l && l === (null == r ? void 0 : r.name.toLowerCase()) && (t(Object(d.h)(u.a.CRYPTO_BURN_POINTS, a)), n.preventDefault())
					}
				}), f) : i.a.createElement(i.a.Fragment, null, f)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return o
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return b
			}));
			var r, i = n("./src/config.ts"),
				c = n("./src/reddit/endpoints/governance/requester.ts");

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

			function s(e) {
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
			async function u(e, t, n) {
				return Object(c.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function a(e, t, n) {
				return await Object(c.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function l(e, t, n) {
				return await Object(c.a)(e, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const E = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				_ = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				m = e => ({
					type: "claim",
					subredditId: e
				}),
				O = e => ({
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
			async function b(e, t) {
				return await Object(c.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function i(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: i
				} = e;
				return t && n && r && i ? {
					subreddit: t,
					amount: n,
					memo: r,
					cta: i
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				i = n("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(i).toString()
			}

			function o(e, t) {
				return Object(i.b)(parseInt(c(e, t), 10))
			}

			function s(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.multipliedBy(i).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				c = "|downsized";

			function o(e, t) {
				return i + e + (t ? c : "")
			}

			function s(e) {
				return e && 0 === e.indexOf(i)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(s)
			}

			function u(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function a(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...a(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function l(e) {
				return a(e, r.F).map(e => e.id)
			}

			function E(e) {
				return a(e, e => e.e === r.o).map(e => e.u)
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				i = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var s = (e = o, t) => {
					switch (t.type) {
						case c.a: {
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
						case i.b:
						case i.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === i.b
								}
							};
						default:
							return e
					}
				},
				d = n("./src/reddit/actions/governance/constants.ts"),
				u = n("./src/reddit/endpoints/governance/crypto.ts");
			const a = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function E(e) {
				var t, n, r, i, c;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					s = null == o ? void 0 : o.contracts,
					d = null == s ? void 0 : s.unlocked,
					a = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					E = !!(null === (i = e.walletProvider) || void 0 === i ? void 0 : i.inTransition),
					_ = !E && a === u.a.Stellar,
					m = _ ? null == o ? void 0 : o.issuerAddress : null == d ? void 0 : d.address,
					O = _ ? (null == o ? void 0 : o.decimals) || 7 : (null == d ? void 0 : d.decimals) || 0;
				return {
					blockchainProvider: a,
					contractAddress: m || "",
					contracts: s,
					decimals: O,
					displayConversion: "1" + "0".repeat(O),
					images: e.images || l,
					inTransition: E,
					name: e.name,
					nomenclature: null === (c = e.extra) || void 0 === c ? void 0 : c.nomenclature,
					polls: e.polls,
					symbol: _ ? (null == o ? void 0 : o.token) || "PHOTON" : (null == d ? void 0 : d.token) || ""
				}
			}
			var _ = (e = a, t) => {
				switch (t.type) {
					case d.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: E(r)
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var O = (e = m, t) => {
				switch (t.type) {
					case d.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, i = Object.keys(r).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[n]: r[i]
								}
							}
						}, {});
						return {
							...e,
							...i
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: s,
				points: _,
				publicWallets: O
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: s.a
				}
			});
			const d = (e, t) => {
				var n, r, i;
				return t ? null === (i = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === i ? void 0 : i[t] : void 0
			};

			function u() {
				const e = Object(i.Z)(),
					t = Object(r.e)(t => Object(i.q)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => d(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const a = (e, t) => {
				var n;
				const r = null === (n = d(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === c.a.Ethereum || r === c.a.Rinkeby || r === c.a.EthTraderEthereum || r === c.a.EthTraderRinkeby
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoVault.905308acbd2568224fac.js.map