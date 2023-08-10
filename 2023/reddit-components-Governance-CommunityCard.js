// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.13c1018e300d01bb8cc4.js
// Retrieved at 8/10/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-CommunityCard"], {
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				m = Object(i.a)(c.c),
				u = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(r(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, b = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(r.b)({
								endpoint: t,
								method: s.nb.GET
							});
						n.ok && n.body && e(m(n.body))
					}
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				i = n.n(a);

			function c(e) {
				return r.a.createElement("button", {
					className: Object(o.a)(e.className, i.a.button),
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
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/selectors/crypto/points.ts"),
				m = n("./src/reddit/selectors/experiments/mainnet.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				C = n("./src/reddit/actions/governance/index.ts"),
				h = n("./src/reddit/actions/login.ts"),
				x = n("./src/reddit/components/Governance/EthSymbol/index.tsx"),
				y = n("./src/reddit/components/Governance/Token/index.tsx"),
				g = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				k = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				_ = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(s || (s = {}));
			var N = n("./src/reddit/selectors/crypto/claims.ts"),
				w = n("./src/reddit/selectors/user.ts"),
				O = n("./src/higherOrderComponents/asTooltip.tsx"),
				M = n("./src/lib/copyToClipboard/index.ts"),
				I = n("./src/reddit/actions/governance/errorToast.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				A = n("./src/reddit/actions/tooltip.ts"),
				T = n("./src/reddit/contexts/ApiContext.tsx"),
				L = n("./src/reddit/controls/Dropdown/index.tsx"),
				G = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/endpoints/governance/crypto.ts"),
				D = n("./src/reddit/helpers/governance/ethereum.ts"),
				B = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				R = n("./src/reddit/models/Toast/index.ts"),
				W = n("./src/reddit/selectors/tooltip.ts"),
				U = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				Z = n.n(U);
			const F = Object(O.a)(L.a),
				H = "BlockchainWalletInfo--SettingsMenu";
			class V extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(M.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(S.g)(this.props.apiContext(), this.props.points.blockchainProvider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						isEthereumProvider: t,
						onOpenDropdown: n,
						points: s,
						publicAddress: o
					} = this.props;
					return s && o ? a.a.createElement("div", {
						className: Z.a.publicAddressSection
					}, a.a.createElement("div", {
						className: Z.a.publicAddress,
						title: o
					}, "publicAddress"), a.a.createElement("div", {
						className: Z.a.yourWalletAddress
					}, r.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), t && a.a.createElement("button", {
						className: Z.a.settingsButton,
						title: r.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: n,
						id: H
					}, a.a.createElement(B.a, {
						className: Z.a.settingsIcon
					})), t && a.a.createElement(F, {
						tooltipId: H,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(G.b, {
						displayText: r.fbt._("Copy My Wallet Address", null, {
							hk: "16YUPg"
						}),
						onClick: this.onCopyToClipboard
					}), s.blockchainProvider && a.a.createElement(G.b, {
						displayText: r.fbt._("Remove My Wallet", null, {
							hk: "1rH7ul"
						}),
						onClick: this.onRemoveMyWallet
					}), a.a.createElement(G.b, {
						displayText: r.fbt._("Track {tokenName} in MetaMask", [r.fbt._param("tokenName", s.name)], {
							hk: "qDCic"
						}),
						onClick: () => {
							var e, t;
							return Object(D.i)({
								address: s.contractAddress,
								symbol: s.symbol,
								decimals: s.decimals,
								image: null === (t = null === (e = s.contracts) || void 0 === e ? void 0 : e.unlocked) || void 0 === t ? void 0 : t.image
							})
						}
					})))) : null
				}
			}
			const q = Object(b.c)({
					dropdownIsOpen: Object(W.b)(H),
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
				Y = Object(i.b)(q, (e, t) => ({
					onGovernanceError: t => {
						Object(I.a)(e, t)
					},
					onOpenDropdown: () => e(Object(A.h)({
						tooltipId: H
					})),
					onWalletRemoved: () => {
						e(Object(C.h)({
							subredditId: t.subredditId
						})), e(Object(P.f)({
							kind: R.b.SuccessCommunityGreen,
							text: r.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var Q = Object(T.b)(Y(V)),
				X = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				J = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				z = n.n(J);

			function K(e) {
				return a.a.createElement("div", {
					className: z.a.risk
				}, a.a.createElement("div", {
					className: z.a.riskTitle
				}, a.a.createElement(X.a, {
					className: z.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: z.a.riskBody
				}, e.body))
			}
			var $ = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				ee = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				te = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				ne = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				se = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				re = n.n(se);
			const {
				fbt: oe
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ae(e) {
				const {
					claimablePoints: t,
					subredditId: n
				} = e, [s, r] = Object(o.useState)(!1), c = Object(i.e)(e => Object(N.a)(e, {
					subredditId: n
				}));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: re.a.container
				}, a.a.createElement("div", {
					className: re.a.content
				}, a.a.createElement("div", {
					className: re.a.title
				}, oe._("You Have Unclaimed Points", null, {
					hk: "3sFlm8"
				})), a.a.createElement("div", {
					className: re.a.amount
				}, a.a.createElement($.a, {
					className: re.a.tokenIcon,
					amount: t,
					subredditId: n
				})), a.a.createElement("div", {
					className: re.a.caption
				}, oe._("Unclaimed Points", null, {
					hk: "31KZbZ"
				}))), a.a.createElement(ne.a, {
					className: re.a.snooIcon
				})), a.a.createElement(E.l, {
					className: re.a.claimButton,
					onClick: () => r(!0),
					disabled: c
				}, c ? a.a.createElement(a.a.Fragment, null, oe._("Claiming", null, {
					hk: "3iQUgE"
				}), a.a.createElement(te.a, {
					className: re.a.loadingIcon,
					sizePx: 6
				})) : oe._("Claim My Points", null, {
					hk: "1QwLXK"
				})), s && a.a.createElement(ee.a, {
					subredditId: n,
					onClose: () => r(!1)
				}))
			}
			var ie = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				ce = n.n(ie);
			class de extends a.a.PureComponent {
				componentDidMount() {
					this.props.onFetchMeData();
					const {
						pageLayer: e,
						pointsDetails: t,
						wallet: n
					} = this.props, s = n && n.publicAddress;
					Object(g.b)(e) && t.blockchainProvider && !s && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						claimablePointsEnabled: e,
						className: t,
						customCryptoEnabled: n,
						distribution: o,
						isEthereumProvider: i,
						isLoggedIn: c,
						isMainnetEnabled: d,
						nextAvailableClaim: l,
						onOpenLoginModal: m,
						onOpenRegistrationModal: u,
						pointsDetails: b,
						subredditId: f,
						wallet: C
					} = this.props, h = C && C.inactive && function(e, t) {
						const n = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(n / p.D)),
							a = 1 !== o ? r.fbt._("{numDays} day", [r.fbt._param("numDays", String(o))], {
								hk: "20neqo"
							}) : r.fbt._("{numDays} days", [r.fbt._param("numDays", String(o))], {
								hk: "1ga8J1"
							});
						switch (e.reason) {
							case s.Initial:
								return {
									title: r.fbt._("inactive {tokenName}", [r.fbt._param("tokenName", t)], {
										hk: "4FPeyf"
									}), body: r.fbt._("{tokenName} may be removed if they are not used in governance polls. To keep your {tokenNameAgain}, vote in 1 governance poll within {time}.", [r.fbt._param("tokenName", t), r.fbt._param("tokenNameAgain", t), r.fbt._param("time", a)], {
										hk: "GlUwr"
									})
								};
							case s.Mod:
								return {
									title: r.fbt._("election required for top moderator", null, {
										hk: "1cC8h2"
									}), body: r.fbt._("Moderator {tokenName} may be removed if there isn’t an election for top moderator within {time}.", [r.fbt._param("tokenName", t), r.fbt._param("time", a)], {
										hk: "2BoM5b"
									})
								}
						}
					}(C.inactive, b.name), g = C && C.publicAddress;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: ce.a.title
					}, b.name), !d && a.a.createElement("div", {
						className: ce.a.cellContainer
					}, C && le(a.a.createElement("div", {
						className: ce.a.tokenCell
					}, a.a.createElement(y.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(j.c)(C.amount, b.displayConversion))), r.fbt._("Your {tokenName}", [r.fbt._param("tokenName", b.name)], {
						hk: "2ylU3V"
					})), o && le(Object(v.a)(Object(j.c)(o.totalAvailable, b.displayConversion)), r.fbt._("Total", null, {
						hk: "7GOJU"
					}))), d && o && a.a.createElement("div", {
						className: ce.a.totals
					}, le(a.a.createElement("div", {
						className: ce.a.tokenCell
					}, a.a.createElement(y.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(j.c)(o.totalAvailable, b.displayConversion))), r.fbt._("Total", null, {
						hk: "7GOJU"
					}))), a.a.createElement("div", {
						className: ce.a.explanation
					}, r.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [r.fbt._param("tokenName", b.name)], {
						hk: "3BpDbS"
					})), d && C && a.a.createElement("div", {
						className: ce.a.cellContainerMainnet
					}, le(a.a.createElement("div", {
						className: ce.a.tokenCell
					}, a.a.createElement(y.a, {
						className: ce.a.token,
						subredditId: f
					}), Object(v.a)(Object(j.c)(C.amount, b.displayConversion))), r.fbt._("Your {tokenName}", [r.fbt._param("tokenName", b.name)], {
						hk: "2ylU3V"
					})), le(a.a.createElement("div", {
						className: ce.a.tokenCell
					}, a.a.createElement(x.a, {
						className: ce.a.ethSymbol
					}), Object(v.a)(Object(j.b)(C.ethAmount || "0"))), r.fbt._("Your ETH", null, {
						hk: "1eunZy"
					}))), h && a.a.createElement(K, {
						body: h.body,
						title: h.title
					}), n && b.blockchainProvider && a.a.createElement(Q, {
						publicAddress: g,
						subredditId: f
					}), n && !g && i && a.a.createElement(E.l, {
						className: ce.a.button,
						onClick: c ? u : m
					}, r.fbt._("Register", null, {
						hk: "4EjGrI"
					})), e && l && a.a.createElement(ae, {
						subredditId: f,
						claimablePoints: l.pointsToClaim
					}))
				}
			}

			function le(e, t) {
				return a.a.createElement("div", {
					className: ce.a.cell
				}, a.a.createElement("div", {
					className: ce.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: ce.a.cellBottomLine
				}, t))
			}
			const me = Object(b.c)({
				claimablePointsEnabled: _.d.spClaimablePoints,
				customCryptoEnabled: _.d.spCustomCrypto,
				isEthereumProvider: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.a)(e, n)
				},
				isLoggedIn: w.S,
				nextAvailableClaim: N.b,
				isMainnetEnabled: m.a
			});
			var ue = Object(i.b)(me, e => ({
					onFetchMeData: () => e(Object(f.b)()),
					onOpenLoginModal: () => e(Object(h.openLoginModal)()),
					onOpenRegistrationModal: () => e(Object(C.g)())
				}))(Object(k.v)()(de)),
				be = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				pe = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				ve = n("./src/reddit/actions/subreddit.ts"),
				fe = n("./src/reddit/components/Governance/CommunityCard/SectionTitle.m.less"),
				Ce = n.n(fe);

			function he(e) {
				return a.a.createElement("div", {
					className: Ce.a.title
				}, e.children)
			}
			var xe = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ye = n.n(xe);
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ke = Object(b.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var Ee = Object(k.v)()(Object(i.b)(ke, (e, t) => ({
					onFilterProposals: () => e(Object(ve.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(k.J)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(c.a)(e.className, ye.a.container)
					}, a.a.createElement(he, null, ge._("Latest Polls", null, {
						hk: "1oGuW8"
					})), e.proposals.map(e => a.a.createElement(be.a, {
						className: ye.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(pe.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: ye.a.showAll,
						onClick: e.onFilterProposals
					}, ge._("show all", null, {
						hk: "3GZuyP"
					}))) : null
				}))),
				_e = n("./src/reddit/actions/modal.ts"),
				je = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				Ne = n("./src/reddit/constants/modals.ts"),
				we = n("./src/reddit/hooks/useLocalStorage.ts"),
				Oe = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				Me = n("./src/reddit/icons/svgs/Send/index.tsx"),
				Ie = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Pe = n("./src/reddit/components/Governance/CommunityCard/UsePoints/index.m.less"),
				Ae = n.n(Pe);
			const {
				fbt: Te
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Le(e) {
				const [t, n] = Object(we.a)("MAINNET_ANNOUNCEMENT", !1), s = Object(i.d)(), {
					pointsDetails: r
				} = Object(l.c)(), {
					isMainnetEnabled: c,
					coinConversionEnabled: d,
					customCrypto: p,
					isEthereum: v,
					pointsTotal: f,
					transferEnabled: h
				} = Object(i.e)(Object(b.c)({
					isMainnetEnabled: m.a,
					coinConversionEnabled: e => !Object(Ie.d)(e) && _.d.spPointsCoinConversion(e),
					customCrypto: _.d.spCustomCrypto,
					isEthereum: t => Object(l.a)(t, e.subredditId),
					pointsTotal: t => Object(u.e)(t, e),
					transferEnabled: _.d.spTipping
				}));
				Object(o.useEffect)(() => {
					c && !t && (s(Object(_e.h)(Ne.a.GOVERNANCE_MAINNET_LAUNCH)), n(!0))
				}, [s, c, t, n]);
				const x = h && !(p && v);
				return (x || d) && f && "0" !== f ? a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(he, null, Te._("Use Points", null, {
					hk: "2Mco3v"
				})), x && a.a.createElement(je.a, {
					onClick: () => s(Object(C.f)())
				}, a.a.createElement(Me.a, {
					className: Ae.a.icon
				}), c && (null == r ? void 0 : r.name) ? Te._("Tip {Subreddit community point name}", [Te._param("Subreddit community point name", r.name)], {
					hk: "3CjOpO"
				}) : Te._("Tip", null, {
					hk: "7qTYq"
				})), d && a.a.createElement(je.a, {
					onClick: () => s(Object(_e.h)(Ne.a.CONVERT_TO_COINS))
				}, a.a.createElement(Oe.a, {
					className: Ae.a.icon
				}), Te._("Convert to Reddit Coins", null, {
					hk: "lqkYM"
				}))) : null
			}
			var Ge = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				Se = n.n(Ge);
			const De = Object(b.c)({
				isMainnet: m.a,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.b)(e, n)
				},
				subreddit: (e, t) => e.subreddits.models[t.subredditId],
				wallet: u.d
			});
			t.default = Object(i.b)(De)((function(e) {
				const {
					className: t,
					distribution: n,
					pointsDetails: s,
					subredditId: o,
					wallet: i
				} = e;
				return a.a.createElement(d.a, {
					className: t,
					title: r.fbt._("Community Points", null, {
						hk: "GZQW3"
					})
				}, n && s ? a.a.createElement(a.a.Fragment, null, a.a.createElement(ue, {
					className: Se.a.section,
					distribution: n,
					pointsDetails: s,
					subredditId: o,
					wallet: i
				}), a.a.createElement(Le, {
					className: Object(c.a)(Se.a.section, {
						[Se.a.noborder]: e.isMainnet
					}),
					subredditId: o
				}), a.a.createElement(Ee, {
					className: Se.a.section,
					subredditId: o
				})) : a.a.createElement("div", {
					className: Se.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/EthSymbol/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts");

			function a(e) {
				const t = `${o.a.assetPath}/img/communityPoints/ethsymbol.png`;
				return r.a.createElement("img", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				m = n.n(l);
			const u = Object(a.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(d.b)(e, n)
				}
			});
			t.a = Object(o.b)(u)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const s = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					o = `${i.a.assetPath}/${s}`;
				if (e.grey && o.endsWith(".svg")) {
					const t = `url(${o}) center/cover`;
					return r.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
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
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/crypto/points.ts"),
				u = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(u);
			const p = Object(a.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(m.b)(e, n)
				}
			});
			t.a = Object(o.b)(p)((function(e) {
				var t;
				return r.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, r.a.createElement(d.a, {
					className: Object(i.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.c)(e.amount, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
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
			t.a = r
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/addQueryParams/index.ts");
			const r = "metamaskInstalled";

			function o() {
				window.location.replace(Object(s.a)(window.location.href, {
					[r]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[r])
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
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
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function r() {
				return window.ethereum
			}

			function o() {
				const e = r();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = r();
				return e && e.selectedAddress || null
			}

			function i() {
				const e = r();
				return (null == e ? void 0 : e.networkVersion) || null
			}

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, s, o) {
				const [a, i] = await Promise.all([n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(r()).getSigner(),
					l = new a.Contract(e, i, d),
					m = await l[s](...o);
				return await m.wait()
			}
			const m = {
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
			const u = 1;
			async function b(e, t, s, r, o) {
				const a = await n.e("vendors~Avatar~CollectiblesShowcaseUnit~CryptoLibEthers~GovernanceTransferPointsModal~MarketplaceCla~cd1771e1").then(n.bind(null, "./node_modules/ethers/lib.esm/index.js")).then(e => e.ethers),
					{
						BigNumber: i
					} = a,
					{
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = a.utils,
					p = i.from(s).add(o),
					v = u,
					f = "0x" + [c(1)].concat([c(v), i.from(r).toHexString(), i.from(o).toHexString()].map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, s) {
					return l(e, Promise.resolve(m), "send", [t, n, s])
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
				const r = a() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(s.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [s.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function f(e) {
				const t = r();
				return new Promise((n, r) => {
					const o = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, o],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) r(e);
						else {
							const e = t && t.result;
							e ? n(e) : r({
								message: s.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function C(e) {
				return new Promise((t, n) => {
					r().sendAsync({
						method: "metamask_watchAsset",
						params: {
							type: "ERC20",
							options: e
						},
						id: Math.round(1e5 * Math.random())
					}, (e, s) => {
						e || "error" in s ? n("There was an error tracking the token") : t()
					})
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t || 1);
				return n.multipliedBy(r).toFixed(0)
			}

			function c(e) {
				const t = new s.BigNumber(e),
					n = new s.BigNumber("1e18");
				return t.dividedBy(n).toString()
			}
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Settings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M7.03093403,10 C7.03093403,8.36301971 8.36301971,7.03093403 10,7.03093403 C11.6369803,7.03093403 12.9679409,8.36301971 12.9679409,10 C12.9679409,11.6369803 11.6369803,12.969066 10,12.969066 C8.36301971,12.969066 7.03093403,11.6369803 7.03093403,10 M16.4016617,8.49127796 C16.2362761,7.79148295 15.9606334,7.13669084 15.5916096,6.5437777 L16.5231696,5.06768276 C16.7526843,4.70315931 16.7684353,4.22387849 16.5231696,3.83572852 C16.1833977,3.29794393 15.4712269,3.13593351 14.9323172,3.47683044 L13.4562223,4.40839036 C12.8633092,4.03936662 12.208517,3.76259882 11.508722,3.59833825 L11.1250724,1.89947899 C11.0294412,1.47982699 10.7020452,1.12992949 10.2542664,1.02867298 C9.63322641,0.888038932 9.01556168,1.27843904 8.87492764,1.89947899 L8.49127796,3.59833825 C7.79148295,3.76259882 7.13669084,4.03936662 6.54265263,4.40726528 L5.06768276,3.47683044 C4.70315931,3.24731568 4.22387849,3.23156466 3.83572852,3.47683044 C3.29794393,3.81660229 3.13593351,4.5287731 3.47683044,5.06768276 L4.40726528,6.54265263 C4.03936662,7.13669084 3.76259882,7.79148295 3.59721318,8.49127796 L1.89947899,8.87492764 C1.47982699,8.97055879 1.12992949,9.29795485 1.02867298,9.74573365 C0.888038932,10.3667736 1.27843904,10.9844383 1.89947899,11.1250724 L3.59721318,11.508722 C3.76259882,12.208517 4.03936662,12.8633092 4.40726528,13.4573474 L3.47683044,14.9323172 C3.24731568,15.2968407 3.23156466,15.7761215 3.47683044,16.1642715 C3.81660229,16.7020561 4.5287731,16.8640665 5.06768276,16.5231696 L6.54265263,15.5927347 C7.13669084,15.9606334 7.79148295,16.2374012 8.49127796,16.4016617 L8.87492764,18.100521 C8.97055879,18.520173 9.29795485,18.8700705 9.74573365,18.971327 C10.3667736,19.1119611 10.9844383,18.721561 11.1250724,18.100521 L11.508722,16.4016617 C12.208517,16.2374012 12.8633092,15.9606334 13.4562223,15.5916096 L14.9323172,16.5231696 C15.2968407,16.7526843 15.7749964,16.7684353 16.1631464,16.5231696 C16.7020561,16.1833977 16.8629414,15.4712269 16.5231696,14.9323172 L15.5916096,13.4562223 C15.9606334,12.8633092 16.2362761,12.208517 16.4016617,11.508722 L18.100521,11.1250724 C18.520173,11.0294412 18.8700705,10.7020452 18.971327,10.2542664 C19.1119611,9.63322641 18.721561,9.01556168 18.100521,8.87492764 L16.4016617,8.49127796 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/colors.ts");
			t.a = e => r.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, r.a.createElement("g", null, r.a.createElement("circle", {
				fill: o.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), r.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/selectors/crypto/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/crypto/wallet.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: a.a
				}
			});
			const i = (e, t) => {
					var n, s, r;
					return t && (null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.claims) || void 0 === r ? void 0 : r[t.subredditId])
				},
				c = Object(s.a)([i, r.b], (e, t) => {
					const n = null == e ? void 0 : e.availableClaims;
					if (!n) return null;
					const s = Date.now(),
						r = null == t ? void 0 : t.toLowerCase(),
						o = n.filter(e => {
							var t;
							return e.expiresAt > s && (!e.address || (null === (t = e.address) || void 0 === t ? void 0 : t.toLowerCase()) === r)
						});
					return o.reduce((e, t) => parseInt(t.round) < parseInt(e.round) ? t : e, o[0]) || null
				}),
				d = (e, t) => {
					var n;
					return !!(null === (n = i(e, t)) || void 0 === n ? void 0 : n.isClaiming)
				}
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: r.a
				}
			});
			const o = (e, t) => {
					var n;
					return t && (null === (n = e.user.wallets[t.subredditId]) || void 0 === n ? void 0 : n.latest)
				},
				a = (e, t) => {
					var n;
					return null === (n = o(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, s, r, o;
					return null === (o = null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === s ? void 0 : s.publicWallets) || void 0 === r ? void 0 : r[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/experiments/mainnet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Ce
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				o = {},
				a = (e, t) => {
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
					} : o
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = d(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				m = (e, t) => {
					const n = d(e, t);
					return n && n.amount || "0"
				},
				u = (e, t) => {
					const n = Object(s.o)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || r
				},
				b = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.13c1018e300d01bb8cc4.js.map