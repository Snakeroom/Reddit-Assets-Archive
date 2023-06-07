// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.7a6a3e623091add5d8d9.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-CommunityCard"], {
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
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				i = n("./src/reddit/endpoints/governance/requester.ts");
			var a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(a.a)(c.a),
				l = Object(a.a)(c.b),
				u = Object(a.a)(c.c),
				m = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const a = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || a && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(i.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), a);
						if (e.ok) {
							const n = e.body;
							a && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, b = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: r.pb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
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
				return a
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
				return v
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "o", (function() {
				return E
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return _
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "u", (function() {
				return N
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return j
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				i = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				b = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				v = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				E = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				C = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				h = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				y = "GOVERNANCE__TRANSFER_PENDING",
				O = "GOVERNANCE__TRANSFER_SUCCESS",
				N = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				g = "GOVERNANCE__WALLETS_FETCH_PENDING",
				x = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
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
				return h
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "h", (function() {
				return R
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/reddit/models/Poll/index.ts"),
				m = n("./src/redditGQL/operations/PollVote.json"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/crypto/points.ts"),
				C = n("./src/reddit/actions/governance/constants.ts"),
				_ = n("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(s.a)(C.b),
				y = Object(s.a)(C.c),
				O = Object(s.a)(C.e),
				N = (Object(s.a)(C.f), Object(s.a)(C.g), Object(s.a)(C.h)),
				g = Object(s.a)(C.i),
				x = Object(s.a)(C.j),
				j = Object(s.a)(C.k),
				k = Object(s.a)(C.q),
				w = Object(s.a)(C.r),
				A = Object(s.a)(C.s),
				I = Object(s.a)(C.t),
				T = Object(s.a)(C.u),
				P = Object(s.a)(C.v),
				S = Object(s.a)(C.w),
				M = Object(s.a)(C.x),
				L = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: i,
							gqlContext: c
						} = s,
						p = r().polls.models[e];
					if (n(x({
							pollId: e
						})), (o = p.type === u.a.GA ? await ((e, t, n) => Object(l.a)(e, {
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
							}(i(), p.subredditId, e, t)).ok) {
						if (p.type === u.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(O({
								pollId: p.id,
								optionId: t,
								options: e
							}))
						} else n(j(o.body));
						const s = r();
						if ((p = s.polls.models[e]) && Object(u.d)(p)) {
							const {
								postId: e
							} = p, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(a.ib)(e))
						}
					} else n(g({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(_.a)(n, o.error || o.errors[0].messsage)
				}, G = (e, t) => async (n, s, a) => {
					let {
						apiContext: l
					} = a;
					var u;
					n(A());
					const m = s().transfers.communityPoints.contentId || void 0,
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
					p.ok ? (n(I({
						...p.body,
						subredditId: e.subredditId
					})), n(Object(c.f)({
						kind: v.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", (null === (u = Object(E.b)(s(), e.subredditId)) || void 0 === u ? void 0 : u.name) || ""), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(i.f)())) : (n(k({
						error: p.error
					})), Object(_.a)(n, p.error))
				}, R = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(P());
					const o = await Object(p.a)(s(), e);
					o.ok ? t(S(o.body)) : t(T({
						error: o.error
					}))
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3_pGUX88wiDRDcorJSqisN"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				a = n.n(i);

			function c(e) {
				return s.a.createElement("button", {
					className: Object(o.a)(e.className, a.a.button),
					onClick: t => {
						t.stopPropagation(), e.onClick()
					}
				}, e.children)
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less": function(e, t, n) {
			e.exports = {
				publicAddressSection: "e0Te0bBkUsDG6nuCjsFky",
				publicAddress: "_3GWjMTgC3OErgLOUT3TdHw",
				yourWalletAddress: "_2ZVoGra9kSZDSEzU8EoxXp",
				settingsButton: "g2yJ86Mg6P4M5NIoQA0Ve",
				settingsIcon: "_1ZIhSQEemVyqYNEOTZVZGv"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less": function(e, t, n) {
			e.exports = {
				alertIcon: "_281dcYAIoQvZtLs7iI7QLT",
				risk: "_1r7M4su-D_hCOMd066XY3J",
				riskBody: "_12gDkO_ygs4ikCeyu5bcVg",
				riskTitle: "_3iYb38SYPwjAd1VG859AKs"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3MwJOKOBcaRvk73PIqsi7b",
				content: "_2ZtpgXjc4qR9p7pmRFP1xX",
				title: "_3x7dknyPrCfDmlMEQc1Wqx",
				caption: "_2qrghqknzks870MToTbzMj",
				snooIcon: "_3EhFxRzGrPHMi7ZWvxVASB",
				claimButton: "_2h2YozlNvVxTI3stA7j3LR",
				loadingIcon: "_3wcxrDpBJwkXavuKvzg_0S"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less": function(e, t, n) {
			e.exports = {
				overflowingText: "_3s4m8dsZEYcHZ4ojNFUV0R",
				cell: "_1-v1Zgj9IOmc-oaS_dfHfI",
				cellBottomLine: "_1YrPtUZyIgZmt7BoC3IOjC",
				cellContainer: "_3y3jYnCjkWtjpibBnc9e3l",
				cellContainerMainnet: "_1Ffu-P1aueILV60xjpbUC3",
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				ethSymbol: "_1wSLkmLuFJIp69DjqbjtyW",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
				totals: "GM6WFu9kETycbET1DFkr4",
				button: "_1Vg1f_Cp7IF32wBdY1l2Gq"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3WnHen22bLKwTkOL3W6F_D",
				link: "_3LjXe6j5_bQ3U8GZLY0HYO",
				showAll: "eRbX9WCebKIuLXdJIwNjK",
				title: "_3il8HJMlHzKppQleJjuboQ"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/SectionTitle.m.less": function(e, t, n) {
			e.exports = {
				title: "_3wKj03XHtiQG6A2SmgQ-OX"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/UsePoints/index.m.less": function(e, t, n) {
			e.exports = {
				eth: "_2Os55RI8zOnM6GQFhZqn-R",
				icon: "CIpYW-kf3X7sZZL5CcR3J"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD",
				noborder: "Lplwu8t1ypHTD1JUSjG7Z"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				u = n("./src/reddit/selectors/experiments/mainnet.ts"),
				m = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				E = n("./src/reddit/actions/governance/index.ts"),
				C = n("./src/reddit/actions/login.ts"),
				_ = n("./src/reddit/components/Governance/EthSymbol/index.tsx"),
				h = n("./src/reddit/components/Governance/Token/index.tsx"),
				y = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				O = n("./src/reddit/contexts/PageLayer/index.tsx"),
				N = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(r || (r = {}));
			var j = n("./src/reddit/selectors/crypto/claims.ts"),
				k = n("./src/reddit/selectors/user.ts"),
				w = n("./src/higherOrderComponents/asTooltip.tsx"),
				A = n("./src/lib/copyToClipboard/index.ts"),
				I = n("./src/reddit/actions/governance/errorToast.ts"),
				T = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				S = n("./src/reddit/contexts/ApiContext.tsx"),
				M = n("./src/reddit/controls/Dropdown/index.tsx"),
				L = n("./src/reddit/controls/Dropdown/Row.tsx"),
				G = n("./src/reddit/endpoints/governance/crypto.ts"),
				R = n("./src/reddit/helpers/governance/ethereum.ts"),
				D = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				U = n("./src/reddit/models/Toast/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				V = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				F = n.n(V);
			const W = Object(w.a)(M.a),
				H = "BlockchainWalletInfo--SettingsMenu";
			class Z extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(A.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(G.g)(this.props.apiContext(), this.props.points.blockchainProvider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						isEthereumProvider: t,
						onOpenDropdown: n,
						points: r,
						publicAddress: o
					} = this.props;
					return r && o ? i.a.createElement("div", {
						className: F.a.publicAddressSection
					}, i.a.createElement("div", {
						className: F.a.publicAddress,
						title: o
					}, "publicAddress"), i.a.createElement("div", {
						className: F.a.yourWalletAddress
					}, s.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), t && i.a.createElement("button", {
						className: F.a.settingsButton,
						title: s.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: n,
						id: H
					}, i.a.createElement(D.a, {
						className: F.a.settingsIcon
					})), t && i.a.createElement(W, {
						tooltipId: H,
						isOpen: e,
						renderContentsHidden: !0
					}, i.a.createElement(L.b, {
						displayText: s.fbt._("Copy My Wallet Address", null, {
							hk: "16YUPg"
						}),
						onClick: this.onCopyToClipboard
					}), r.blockchainProvider && i.a.createElement(L.b, {
						displayText: s.fbt._("Remove My Wallet", null, {
							hk: "1rH7ul"
						}),
						onClick: this.onRemoveMyWallet
					}), i.a.createElement(L.b, {
						displayText: s.fbt._("Track {tokenName} in MetaMask", [s.fbt._param("tokenName", r.name)], {
							hk: "qDCic"
						}),
						onClick: () => {
							var e, t;
							return Object(R.i)({
								address: r.contractAddress,
								symbol: r.symbol,
								decimals: r.decimals,
								image: null === (t = null === (e = r.contracts) || void 0 === e ? void 0 : e.unlocked) || void 0 === t ? void 0 : t.image
							})
						}
					})))) : null
				}
			}
			const q = Object(b.c)({
					dropdownIsOpen: Object(B.b)(H),
					isEthereumProvider: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(l.a)(e, n)
					},
					points: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(l.b)(e, n)
					}
				}),
				$ = Object(a.b)(q, (e, t) => ({
					onGovernanceError: t => {
						Object(I.a)(e, t)
					},
					onOpenDropdown: () => e(Object(P.h)({
						tooltipId: H
					})),
					onWalletRemoved: () => {
						e(Object(E.h)({
							subredditId: t.subredditId
						})), e(Object(T.f)({
							kind: U.b.SuccessCommunityGreen,
							text: s.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var Y = Object(S.b)($(Z)),
				Q = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				X = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				J = n.n(X);

			function z(e) {
				return i.a.createElement("div", {
					className: J.a.risk
				}, i.a.createElement("div", {
					className: J.a.riskTitle
				}, i.a.createElement(Q.a, {
					className: J.a.alertIcon
				}), e.title), i.a.createElement("div", {
					className: J.a.riskBody
				}, e.body))
			}
			var K = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				ee = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				te = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ne = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				re = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				se = n.n(re);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ie(e) {
				const {
					claimablePoints: t,
					subredditId: n
				} = e, [r, s] = Object(o.useState)(!1), c = Object(a.e)(e => Object(j.a)(e, {
					subredditId: n
				}));
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: se.a.container
				}, i.a.createElement("div", {
					className: se.a.content
				}, i.a.createElement("div", {
					className: se.a.title
				}, oe._("You Have Unclaimed Points", null, {
					hk: "3sFlm8"
				})), i.a.createElement("div", {
					className: se.a.amount
				}, i.a.createElement(K.a, {
					className: se.a.tokenIcon,
					amount: t,
					subredditId: n
				})), i.a.createElement("div", {
					className: se.a.caption
				}, oe._("Unclaimed Points", null, {
					hk: "31KZbZ"
				}))), i.a.createElement(ne.a, {
					className: se.a.snooIcon
				})), i.a.createElement(N.l, {
					className: se.a.claimButton,
					onClick: () => s(!0),
					disabled: c
				}, c ? i.a.createElement(i.a.Fragment, null, oe._("Claiming", null, {
					hk: "3iQUgE"
				}), i.a.createElement(te.a, {
					className: se.a.loadingIcon,
					sizePx: 6
				})) : oe._("Claim My Points", null, {
					hk: "1QwLXK"
				})), r && i.a.createElement(ee.a, {
					subredditId: n,
					onClose: () => s(!1)
				}))
			}
			var ae = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				ce = n.n(ae);
			class de extends i.a.PureComponent {
				componentDidMount() {
					this.props.onFetchMeData();
					const {
						pageLayer: e,
						pointsDetails: t,
						wallet: n
					} = this.props, r = n && n.publicAddress;
					Object(y.b)(e) && t.blockchainProvider && !r && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						claimablePointsEnabled: e,
						className: t,
						customCryptoEnabled: n,
						distribution: o,
						isEthereumProvider: a,
						isLoggedIn: c,
						isMainnetEnabled: d,
						nextAvailableClaim: l,
						onOpenLoginModal: u,
						onOpenRegistrationModal: m,
						pointsDetails: b,
						subredditId: f,
						wallet: E
					} = this.props, C = E && E.inactive && function(e, t) {
						const n = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(n / p.E)),
							i = 1 !== o ? s.fbt._("{numDays} day", [s.fbt._param("numDays", String(o))], {
								hk: "20neqo"
							}) : s.fbt._("{numDays} days", [s.fbt._param("numDays", String(o))], {
								hk: "1ga8J1"
							});
						switch (e.reason) {
							case r.Initial:
								return {
									title: s.fbt._("inactive {tokenName}", [s.fbt._param("tokenName", t)], {
										hk: "4FPeyf"
									}), body: s.fbt._("{tokenName} may be removed if they are not used in governance polls. To keep your {tokenNameAgain}, vote in 1 governance poll within {time}.", [s.fbt._param("tokenName", t), s.fbt._param("tokenNameAgain", t), s.fbt._param("time", i)], {
										hk: "GlUwr"
									})
								};
							case r.Mod:
								return {
									title: s.fbt._("election required for top moderator", null, {
										hk: "1cC8h2"
									}), body: s.fbt._("Moderator {tokenName} may be removed if there isn’t an election for top moderator within {time}.", [s.fbt._param("tokenName", t), s.fbt._param("time", i)], {
										hk: "2BoM5b"
									})
								}
						}
					}(E.inactive, b.name), y = E && E.publicAddress;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement("div", {
						className: ce.a.title
					}, b.name), !d && i.a.createElement("div", {
						className: ce.a.cellContainer
					}, E && le(i.a.createElement("div", {
						className: ce.a.tokenCell
					}, i.a.createElement(h.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(x.c)(E.amount, b.displayConversion))), s.fbt._("Your {tokenName}", [s.fbt._param("tokenName", b.name)], {
						hk: "2ylU3V"
					})), o && le(Object(v.a)(Object(x.c)(o.totalAvailable, b.displayConversion)), s.fbt._("Total", null, {
						hk: "7GOJU"
					}))), d && o && i.a.createElement("div", {
						className: ce.a.totals
					}, le(i.a.createElement("div", {
						className: ce.a.tokenCell
					}, i.a.createElement(h.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(x.c)(o.totalAvailable, b.displayConversion))), s.fbt._("Total", null, {
						hk: "7GOJU"
					}))), i.a.createElement("div", {
						className: ce.a.explanation
					}, s.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [s.fbt._param("tokenName", b.name)], {
						hk: "3BpDbS"
					})), d && E && i.a.createElement("div", {
						className: ce.a.cellContainerMainnet
					}, le(i.a.createElement("div", {
						className: ce.a.tokenCell
					}, i.a.createElement(h.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(x.c)(E.amount, b.displayConversion))), s.fbt._("Your {tokenName}", [s.fbt._param("tokenName", b.name)], {
						hk: "2ylU3V"
					})), le(i.a.createElement("div", {
						className: ce.a.tokenCell
					}, i.a.createElement(_.a, {
						className: ce.a.ethSymbol
					}), Object(v.a)(Object(x.b)(E.ethAmount || "0"))), s.fbt._("Your ETH", null, {
						hk: "1eunZy"
					}))), C && i.a.createElement(z, {
						body: C.body,
						title: C.title
					}), n && b.blockchainProvider && i.a.createElement(Y, {
						publicAddress: y,
						subredditId: f
					}), n && !y && a && i.a.createElement(N.l, {
						className: ce.a.button,
						onClick: c ? m : u
					}, s.fbt._("Register", null, {
						hk: "4EjGrI"
					})), e && l && i.a.createElement(ie, {
						subredditId: f,
						claimablePoints: l.pointsToClaim
					}))
				}
			}

			function le(e, t) {
				return i.a.createElement("div", {
					className: ce.a.cell
				}, i.a.createElement("div", {
					className: ce.a.cellTopLine
				}, e), i.a.createElement("div", {
					className: ce.a.cellBottomLine
				}, t))
			}
			const ue = Object(b.c)({
				claimablePointsEnabled: g.d.spClaimablePoints,
				customCryptoEnabled: g.d.spCustomCrypto,
				isEthereumProvider: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.a)(e, n)
				},
				isLoggedIn: k.S,
				nextAvailableClaim: j.b,
				isMainnetEnabled: u.a
			});
			var me = Object(a.b)(ue, e => ({
					onFetchMeData: () => e(Object(f.b)()),
					onOpenLoginModal: () => e(Object(C.openLoginModal)()),
					onOpenRegistrationModal: () => e(Object(E.g)())
				}))(Object(O.v)()(de)),
				be = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				pe = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				ve = n("./src/reddit/actions/subreddit.ts"),
				fe = n("./src/reddit/components/Governance/CommunityCard/SectionTitle.m.less"),
				Ee = n.n(fe);

			function Ce(e) {
				return i.a.createElement("div", {
					className: Ee.a.title
				}, e.children)
			}
			var _e = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				he = n.n(_e);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Oe = Object(b.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var Ne = Object(O.v)()(Object(a.b)(Oe, (e, t) => ({
					onFilterProposals: () => e(Object(ve.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(O.J)(e.pageLayer) && e.proposals.length ? i.a.createElement("div", {
						className: Object(c.a)(e.className, he.a.container)
					}, i.a.createElement(Ce, null, ye._("Latest Polls", null, {
						hk: "1oGuW8"
					})), e.proposals.map(e => i.a.createElement(be.a, {
						className: he.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(pe.a)(e.permalink)
					}, e.title)), i.a.createElement("a", {
						className: he.a.showAll,
						onClick: e.onFilterProposals
					}, ye._("show all", null, {
						hk: "3GZuyP"
					}))) : null
				}))),
				ge = n("./src/reddit/actions/modal.ts"),
				xe = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				je = n("./src/reddit/constants/modals.ts"),
				ke = n("./src/reddit/hooks/useLocalStorage.ts"),
				we = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				Ae = n("./src/reddit/icons/svgs/Send/index.tsx"),
				Ie = n("./src/reddit/components/Governance/CommunityCard/UsePoints/index.m.less"),
				Te = n.n(Ie);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Se(e) {
				const [t, n] = Object(ke.a)("MAINNET_ANNOUNCEMENT", !1), r = Object(a.d)(), {
					pointsDetails: s
				} = Object(l.c)(), {
					isMainnetEnabled: c,
					coinConversionEnabled: d,
					customCrypto: p,
					isEthereum: v,
					pointsTotal: f,
					transferEnabled: C
				} = Object(a.e)(Object(b.c)({
					isMainnetEnabled: u.a,
					coinConversionEnabled: g.d.spPointsCoinConversion,
					customCrypto: g.d.spCustomCrypto,
					isEthereum: t => Object(l.a)(t, e.subredditId),
					pointsTotal: t => Object(m.e)(t, e),
					transferEnabled: g.d.spTipping
				}));
				Object(o.useEffect)(() => {
					c && !t && (r(Object(ge.h)(je.a.GOVERNANCE_MAINNET_LAUNCH)), n(!0))
				}, [r, c, t, n]);
				const _ = C && !(p && v);
				return (_ || d) && f && "0" !== f ? i.a.createElement("div", {
					className: e.className
				}, i.a.createElement(Ce, null, Pe._("Use Points", null, {
					hk: "2Mco3v"
				})), _ && i.a.createElement(xe.a, {
					onClick: () => r(Object(E.f)())
				}, i.a.createElement(Ae.a, {
					className: Te.a.icon
				}), c && (null == s ? void 0 : s.name) ? Pe._("Tip {Subreddit community point name}", [Pe._param("Subreddit community point name", s.name)], {
					hk: "3CjOpO"
				}) : Pe._("Tip", null, {
					hk: "7qTYq"
				})), d && i.a.createElement(xe.a, {
					onClick: () => r(Object(ge.h)(je.a.CONVERT_TO_COINS))
				}, i.a.createElement(we.a, {
					className: Te.a.icon
				}), Pe._("Convert to Reddit Coins", null, {
					hk: "lqkYM"
				}))) : null
			}
			var Me = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				Le = n.n(Me);
			const Ge = Object(b.c)({
				isMainnet: u.a,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				},
				subreddit: (e, t) => e.subreddits.models[t.subredditId],
				wallet: m.d
			});
			t.default = Object(a.b)(Ge)((function(e) {
				const {
					className: t,
					distribution: n,
					pointsDetails: r,
					subredditId: o,
					wallet: a
				} = e;
				return i.a.createElement(d.a, {
					className: t,
					title: s.fbt._("Community Points", null, {
						hk: "GZQW3"
					})
				}, n && r ? i.a.createElement(i.a.Fragment, null, i.a.createElement(me, {
					className: Le.a.section,
					distribution: n,
					pointsDetails: r,
					subredditId: o,
					wallet: a
				}), i.a.createElement(Se, {
					className: Object(c.a)(Le.a.section, {
						[Le.a.noborder]: e.isMainnet
					}),
					subredditId: o
				}), i.a.createElement(Ne, {
					className: Le.a.section,
					subredditId: o
				})) : i.a.createElement("div", {
					className: Le.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/EthSymbol/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/config.ts");

			function i(e) {
				const t = `${o.a.assetPath}/img/communityPoints/ethsymbol.png`;
				return s.a.createElement("img", {
					className: e.className,
					src: t
				})
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
				a = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(d.b)(e, n)
				}
			});
			t.a = Object(o.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const r = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${a.a.assetPath}/${r}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: o
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
				small: "_1MnpXAw_e6q3FjPvZfRITL",
				token: "_3ugCwJ_lmINM5PwXoNm8XD"
			}
		},
		"./src/reddit/components/Governance/TokenAmount/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(i.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(u.b)(e, n)
				}
			});
			t.a = Object(o.b)(p)((function(e) {
				var t;
				return s.a.createElement("div", {
					className: Object(a.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, s.a.createElement(d.a, {
					className: Object(a.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ClaimPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/addQueryParams/index.ts");
			const s = "metamaskInstalled";

			function o() {
				window.location.replace(Object(r.a)(window.location.href, {
					[s]: "true"
				}))
			}

			function i(e) {
				return !!(e && e.queryParams && e.queryParams[s])
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
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
				return v
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "n", (function() {
				return C
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

			function a(e) {
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

			function c(e) {
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

			function d(e) {
				return e === r.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, n) {
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
			async function m(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations/${n}`
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
				v = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function C(e, t) {
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
				return a
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function i(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}/me`,
					method: s.pb.GET
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

			function a(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: `${r.a.metaUrl}/wallets/${t.subredditId}`,
					method: s.pb.POST,
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
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s() {
				return window.ethereum
			}

			function o() {
				const e = s();
				return !(!e || !e.isMetaMask)
			}

			function i() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function a() {
				const e = s();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return i() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, r, o) {
				const [i, a] = await Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new i.providers.Web3Provider(s()).getSigner(),
					l = new i.Contract(e, a, d),
					u = await l[r](...o);
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
			async function b(e, t, r, s, o) {
				const i = await n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: a
					} = i,
					{
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = i.utils,
					p = a.from(r).add(o),
					v = m,
					f = "0x" + [c(1)].concat([c(v), a.from(s).toHexString(), a.from(o).toHexString()].map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
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
			async function v(e, t, n) {
				await c();
				const s = i() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function f(e) {
				const t = s();
				return new Promise((n, s) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) s(e);
						else {
							const e = t && t.result;
							e ? n(e) : s({
								message: r.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function E(e) {
				return new Promise((t, n) => {
					s().sendAsync({
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function i(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function a(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
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
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./src/reddit/helpers/localStorage/index.ts");
			const o = {},
				i = (e, t, n) => (o[e] || (o[e] = {
					callbacks: [],
					value: n
				}), o[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: n
						} = o[e], r = n.indexOf(t);
						r > -1 && n.splice(r, 1)
					},
					emit: n => {
						o[e].value !== n && (o[e].value = n, o[e].callbacks.forEach(e => {
							e !== t && e(n)
						}))
					}
				});

			function a(e, t) {
				const n = Object(r.useRef)(null);
				let o;
				o = Object(s.G)(e);
				const [a, c] = Object(r.useState)(null != o ? o : t);
				return Object(r.useEffect)(() => (n.current = i(e, c, t), () => {
					var e;
					return null === (e = n.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(r.useEffect)(() => {
					var e;
					null === (e = n.current) || void 0 === e || e.emit(a)
				}, [a]), [a, function(t) {
					Object(s.Lb)(e, t), c(t)
				}]
			}
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					fillRule: "evenodd"
				}, s.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), s.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, s.a.createElement("g", null, s.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), s.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const i = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
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
			const d = 15e4,
				l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, s, o;
				const i = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					a = null == i ? void 0 : i.contracts,
					c = null == a ? void 0 : a.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					b = null == i ? void 0 : i.metaTransactions,
					p = (null == b ? void 0 : b.allowedContractMethods) || {},
					v = (null == b ? void 0 : b.gasLimit) || d,
					f = (null == c ? void 0 : c.decimals) || 0,
					E = "1" + "0".repeat(f);
				return {
					allowedContractMethods: p,
					blockchainProvider: l,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: a,
					decimals: f,
					displayConversion: E,
					gasLimit: v,
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (o = e.extra) || void 0 === o ? void 0 : o.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
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
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
				claims: a,
				points: b,
				publicWallets: v
			})
		},
		"./src/reddit/selectors/crypto/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/crypto/wallet.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				i = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: i.a
				}
			});
			const a = (e, t) => {
					var n, r, s;
					return t && (null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.claims) || void 0 === s ? void 0 : s[t.subredditId])
				},
				c = Object(r.a)([a, s.b], (e, t) => {
					const n = null == e ? void 0 : e.availableClaims;
					if (!n) return null;
					const r = Date.now(),
						s = null == t ? void 0 : t.toLowerCase(),
						o = n.filter(e => {
							var t;
							return e.expiresAt > r && (!e.address || (null === (t = e.address) || void 0 === t ? void 0 : t.toLowerCase()) === s)
						});
					return o.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, o[0]) || null
				}),
				d = (e, t) => {
					var n;
					return !!(null === (n = a(e, t)) || void 0 === n ? void 0 : n.isClaiming)
				}
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
				s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/endpoints/governance/crypto.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(i.a)({
				features: {
					crypto: a.a
				}
			});
			const c = (e, t) => {
				var n, r, s;
				return t ? null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t] : void 0
			};

			function d() {
				const e = Object(s.ib)(),
					t = Object(r.e)(t => Object(s.s)(t, {
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
				return r === o.a.Ethereum || r === o.a.Rinkeby || r === o.a.EthTraderEthereum || r === o.a.EthTraderRinkeby || r === o.a.ArbitrumRinkeby
			}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
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
				a = (e, t) => {
					var n, r, s, o;
					return null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: r.Fe
				}) === r.Td
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
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
			const s = [],
				o = {},
				i = (e, t) => {
					const n = b(e, t);
					if (n) return n.mainHeader
				},
				a = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				c = (e, t) => {
					const n = b(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : o
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
					const n = Object(r.o)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		},
		"./src/redditGQL/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.7a6a3e623091add5d8d9.js.map