// https://www.redditstatic.com/desktop2x/CryptoVault.d959cdb51439210de8a2.js
// Retrieved at 10/25/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
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
				return s
			})), n.d(t, "e", (function() {
				return c
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
				return p
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return A
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return h
			})), n.d(t, "w", (function() {
				return R
			})), n.d(t, "x", (function() {
				return S
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				s = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
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
				p = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				v = "GOVERNANCE__TRANSFER_FAILURE",
				N = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				A = "GOVERNANCE__TRANSFER_SUCCESS",
				C = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				h = "GOVERNANCE__WALLETS_FETCH_PENDING",
				R = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				S = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				a = n("./src/reddit/components/Governance/Token/index.m.less"),
				l = n.n(a);
			const m = Object(s.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(u.b)(e, t)
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${c.a.assetPath}/${r}`;
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
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/extractQueryParams/index.ts"),
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
				p = n("./src/reddit/selectors/crypto/points.ts"),
				v = n("./src/reddit/components/Governance/VaultActionLink/VaultActionPills.m.less"),
				N = n.n(v);

			function y(e) {
				const t = Object(s.d)(),
					n = Object(E.eb)(),
					r = Object(s.e)(e => Object(E.r)(e, {
						pageLayer: n
					})),
					i = Object(s.e)(e => Object(p.b)(e, null == r ? void 0 : r.id)),
					c = Object(O.e)(e.content.document).filter(b.b);
				return r && i && c.length ? o.a.createElement("div", {
					className: N.a.vaultActionPills
				}, c.map(e => o.a.createElement(A, {
					key: e,
					url: e,
					currentSubreddit: r,
					dispatch: t,
					tokenDisplayConversion: i.displayConversion
				}))) : null
			}

			function A({
				url: e,
				currentSubreddit: t,
				dispatch: n,
				tokenDisplayConversion: i
			}) {
				var s;
				const E = Object(c.a)(e),
					O = Object(b.a)(Object(d.a)(E)),
					p = null === (s = null == O ? void 0 : O.subreddit) || void 0 === s ? void 0 : s.toLowerCase();
				return O && p && p === t.name.toLowerCase() ? o.a.createElement(_.s, {
					priority: _.b.Plain,
					onClick: () => n(Object(a.h)(m.a.CRYPTO_BURN_POINTS, O)),
					className: N.a.vaultActionPill,
					size: _.c.XS
				}, O.cta || r.fbt._("Burn", null, {
					hk: "4p3rvM"
				}), o.a.createElement(l.a, {
					className: N.a.tokenIcon,
					subredditId: t.id,
					grey: !0
				}), Object(u.a)(Object(f.b)(O.amount, i))) : null
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/extractQueryParams/index.ts"),
				c = n("./src/lib/mapToObject/index.ts"),
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
						const o = Object(s.a)(e.to.toString()),
							a = Object(E.a)(Object(c.a)(o)),
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
				return s
			})), n.d(t, "i", (function() {
				return c
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
				return p
			}));
			var r, i = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
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
			async function p(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: `${i.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/requester.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/makeApiRequest/index.ts");

			function i(e, t) {
				return Object(r.a)(e, {
					type: "json",
					...t
				}).then(e => {
					if (e.ok) return {
						body: e.body,
						ok: !0,
						status: e.status
					};
					return {
						error: e.error && e.error.fields && e.error.fields[0] ? e.error.fields[0].msg : {
							...e.body,
							code: e.status
						},
						ok: !1,
						status: e.status
					}
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
				return s
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				i = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(i).toString()
			}

			function s(e, t) {
				return Object(i.b)(parseInt(o(e, t), 10))
			}

			function c(e, t) {
				const n = new r.BigNumber(e),
					i = new r.BigNumber(t || 1);
				return n.multipliedBy(i).toFixed(0)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
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
				s = "|downsized";

			function c(e, t) {
				return i + e + (t ? s : "")
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
				return E(e, e => e.e === r.o).map(e => e.u)
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				i = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var c = (e = s, t) => {
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
				const s = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == s ? void 0 : s.contracts,
					d = null == c ? void 0 : c.unlocked,
					u = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					l = !!(null === (i = e.walletProvider) || void 0 === i ? void 0 : i.inTransition),
					m = (null == d ? void 0 : d.decimals) || 0,
					E = "1" + "0".repeat(m);
				return {
					blockchainProvider: u,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: c,
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
			var m = (e = u, t) => {
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
			var _ = (e = E, t) => {
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
				claims: c,
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
				s = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: c.a
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CryptoVault.d959cdb51439210de8a2.js.map