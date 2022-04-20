// https://www.redditstatic.com/desktop2x/CryptoVault.9810ceb6410b5ec75e84.js
// Retrieved at 4/20/2022, 1:40:06 PM by Reddit Dataminer v1.0.0
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
				return o
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
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
				return m
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "l", (function() {
				return _
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "u", (function() {
				return A
			})), n.d(t, "v", (function() {
				return C
			})), n.d(t, "w", (function() {
				return R
			})), n.d(t, "x", (function() {
				return g
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				c = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				s = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				u = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				a = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				l = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				E = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				_ = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				O = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				v = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				p = "GOVERNANCE__TRANSFER_FAILURE",
				N = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				h = "GOVERNANCE__TRANSFER_SUCCESS",
				A = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				C = "GOVERNANCE__WALLETS_FETCH_PENDING",
				R = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				g = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				a = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(a);
			const m = Object(c.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(u.b)(e, n)
				}
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${s.a.assetPath}/${r}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
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
					src: o
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
				o = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/extractQueryParams/index.ts"),
				d = n("./src/lib/mapToObject/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/Governance/Token/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				f = n("./src/reddit/helpers/governance/tokens.ts"),
				O = n("./src/reddit/helpers/richTextJson/index.ts"),
				v = n("./src/reddit/selectors/crypto/points.ts"),
				p = n("./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less"),
				N = n.n(p);

			function y(e) {
				const t = Object(c.d)(),
					n = Object(E.eb)(),
					r = Object(c.e)(e => Object(E.r)(e, {
						pageLayer: n
					})),
					i = Object(c.e)(e => Object(v.b)(e, null == r ? void 0 : r.id)),
					s = Object(O.e)(e.content.document).filter(b.b);
				return r && i && s.length ? o.a.createElement("div", {
					className: N.a.vaultActionPills
				}, s.map(e => o.a.createElement(h, {
					key: e,
					url: e,
					currentSubreddit: r,
					dispatch: t,
					tokenDisplayConversion: i.displayConversion
				}))) : null
			}

			function h(e) {
				let {
					url: t,
					currentSubreddit: n,
					dispatch: i,
					tokenDisplayConversion: c
				} = e;
				var E;
				const O = Object(s.a)(t),
					v = Object(b.a)(Object(d.a)(O)),
					p = null === (E = null == v ? void 0 : v.subreddit) || void 0 === E ? void 0 : E.toLowerCase();
				return v && p && p === n.name.toLowerCase() ? o.a.createElement(_.t, {
					priority: _.c.Plain,
					onClick: () => i(Object(a.h)(m.a.CRYPTO_BURN_POINTS, v)),
					className: N.a.vaultActionPill,
					size: _.d.XS
				}, v.cta || r.fbt._("Burn", null, {
					hk: "4p3rvM"
				}), o.a.createElement(l.a, {
					className: N.a.tokenIcon,
					subredditId: n.id,
					grey: !0
				}), Object(u.a)(Object(f.b)(v.amount, c))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
				s = n("./src/lib/mapToObject/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				m = n("./src/reddit/featureFlags/index.ts"),
				E = n("./src/reddit/helpers/crypto/vaultActionLink.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.default = function(e) {
				const t = Object(o.d)(),
					n = Object(a.eb)(),
					r = Object(o.e)(e => Object(a.r)(e, {
						pageLayer: n
					})),
					b = Object(o.e)(m.d.spBurnLinks),
					{
						children: f,
						...O
					} = e;
				return b ? i.a.createElement(l.a, _({}, O, {
					onClick: n => {
						var i;
						const o = Object(c.a)(e.to.toString()),
							a = Object(E.a)(Object(s.a)(o)),
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
				return c
			})), n.d(t, "i", (function() {
				return s
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "k", (function() {
				return a
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "n", (function() {
				return v
			}));
			var r, i = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

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

			function s(e) {
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

			function d(e) {
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

			function u(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function a(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function m(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${i.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:5391184", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
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
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
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
			async function v(e, t) {
				return await Object(o.a)(e, {
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
				return o
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				i = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(i).toString()
			}

			function c(e, t) {
				return Object(i.b)(parseInt(o(e, t), 10))
			}

			function s(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.multipliedBy(i).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return b
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				o = "emote|",
				c = "|downsized";

			function s(e, t) {
				return i + e + (t ? c : "")
			}

			function d(e) {
				return !!(null == e ? void 0 : e.startsWith(i))
			}

			function u(e) {
				return !!(null == e ? void 0 : e.startsWith(o))
			}

			function a(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(d)
			}

			function l(e) {
				var t;
				const n = null === (t = null == e ? void 0 : e.media) || void 0 === t ? void 0 : t.mediaMetadata;
				return !!n && Object.keys(n).some(u)
			}

			function m(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function E(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...E(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function _(e) {
				return E(e, r.F).map(e => e.id)
			}

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				return E(e, e => e.e === r.o || t && e.e === r.y).map(e => e.u ? e.u : `https://reddit.com/r/${e.t}`)
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				i = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const c = {};
			var s = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
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
				d = n("./src/reddit/actions/governance/constants.ts");
			const u = {},
				a = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function l(e) {
				var t, n, r, i, o;
				const c = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					s = null == c ? void 0 : c.contracts,
					d = null == s ? void 0 : s.unlocked,
					u = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (i = e.walletProvider) || void 0 === i ? void 0 : i.inTransition),
					m = (null == d ? void 0 : d.decimals) || 0,
					E = "1" + "0".repeat(m);
				return {
					blockchainProvider: u,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: s,
					decimals: m,
					displayConversion: E,
					images: e.images || a,
					inTransition: l,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var m = function() {
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
							[n]: l(r)
						}
					}
					default:
						return e
				}
			};
			const E = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
				points: m,
				publicWallets: _
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
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(c.a)({
				features: {
					crypto: s.a
				}
			});
			const d = (e, t) => {
				var n, r, i;
				return t ? null === (i = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === i ? void 0 : i[t] : void 0
			};

			function u() {
				const e = Object(i.eb)(),
					t = Object(r.e)(t => Object(i.r)(t, {
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
				return r === o.a.Ethereum || r === o.a.Rinkeby || r === o.a.EthTraderEthereum || r === o.a.EthTraderRinkeby || r === o.a.ArbitrumRinkeby
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoVault.9810ceb6410b5ec75e84.js.map