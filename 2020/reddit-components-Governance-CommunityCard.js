// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.a7f4ae6c116532e65701.js
// Retrieved at 10/7/2020, 5:50:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-CommunityCard"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(o)),
					a = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "h", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				m = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/gov.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				y = n("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(o.a)(g.b),
				x = Object(o.a)(g.c),
				j = Object(o.a)(g.e),
				k = (Object(o.a)(g.f), Object(o.a)(g.g), Object(o.a)(g.h)),
				C = Object(o.a)(g.i),
				O = Object(o.a)(g.j),
				_ = Object(o.a)(g.k),
				N = Object(o.a)(g.q),
				E = Object(o.a)(g.r),
				w = Object(o.a)(g.s),
				P = Object(o.a)(g.t),
				I = Object(o.a)(g.u),
				T = Object(o.a)(g.v),
				M = Object(o.a)(g.w),
				G = Object(o.a)(g.x),
				A = (e, t) => async (n, s, o) => {
					let r, {
							apiContext: a,
							gqlContext: c
						} = o,
						l = s().polls.models[e];
					if (n(O({
							pollId: e
						})), (r = l.type === b.a.GA ? await Object(d.c)(c(), e, t) : await Object(d.b)(a(), l.subredditId, e, t)).ok) {
						if (l.type === b.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(j({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(_(r.body));
						const o = s();
						if ((l = o.polls.models[e]) && Object(b.d)(l)) {
							const {
								postId: e
							} = l, t = o.posts.models[e];
							t && t.voteState === v.a.notVoted && n(Object(i.S)(e))
						}
					} else n(C({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(y.a)(n, r.error || r.errors[0].messsage)
				}, S = (e, t) => async (n, o, i) => {
					let {
						apiContext: d
					} = i;
					n(w());
					const u = o().transfers.communityPoints.contentId || void 0,
						b = await
					function(e, t) {
						return Object(m.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(d(), Object.assign(Object.assign({}, e), {
						contentId: u
					}));
					b.ok ? (n(P(Object.assign(Object.assign({}, b.body), {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(r.a)(e.amount)), s.fbt._param("tokenName", Object(f.p)(o(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(N({
						error: b.error
					})), Object(y.a)(n, b.error))
				}, B = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					t(T());
					const r = await Object(u.a)(o(), e);
					r.ok ? t(M(r.body)) : t(I({
						error: r.error
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
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				i = n.n(a);

			function c(e) {
				return o.a.createElement("button", {
					className: Object(r.a)(e.className, i.a.button),
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
				cellTopLine: "-pS2f0b04dtavABCVdrie",
				explanation: "_1n5fyOsQxmVlxXd1xuw6fH",
				title: "_2Q8Se5aIjJDpE5JnGoGI5R",
				token: "_2tQrDQoIjV3V6CMgrLYXU3",
				tokenCell: "_2rBuuOwPxb-X6wEPWDBmYH",
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
				icon: "CIpYW-kf3X7sZZL5CcR3J"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				b = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				p = n("./src/reddit/actions/governance/index.ts"),
				v = n("./src/reddit/actions/login.ts"),
				f = n("./src/reddit/components/Governance/Token/index.tsx"),
				g = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				y = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/featureFlags/index.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(s || (s = {}));
			var k = n("./src/reddit/selectors/economics.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				O = n("./src/higherOrderComponents/asTooltip.tsx"),
				_ = n("./src/lib/copyToClipboard/index.ts"),
				N = n("./src/reddit/actions/governance/errorToast.ts"),
				E = n("./src/reddit/actions/toaster.ts"),
				w = n("./src/reddit/actions/tooltip.ts"),
				P = n("./src/reddit/contexts/ApiContext.tsx"),
				I = n("./src/reddit/controls/Dropdown/index.tsx"),
				T = n("./src/reddit/controls/Dropdown/Row.tsx"),
				M = n("./src/reddit/endpoints/governance/crypto.ts"),
				G = n("./src/reddit/helpers/governance/ethereum.ts"),
				A = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				S = n("./src/reddit/models/Toast/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				D = n.n(L);
			const W = Object(O.a)(I.a),
				U = "BlockchainWalletInfo--SettingsMenu";
			class R extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(_.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(M.f)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						isEthereumProvider: t,
						onOpenDropdown: n,
						provider: s,
						publicAddress: r,
						token: i,
						tokenName: c
					} = this.props;
					if (!r) return null;
					const d = s === M.a.Stellar;
					return a.a.createElement("div", {
						className: D.a.publicAddressSection
					}, a.a.createElement("div", {
						className: D.a.publicAddress,
						title: r
					}, function(e, t) {
						switch (t) {
							case M.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(r, s)), a.a.createElement("div", {
						className: D.a.yourWalletAddress
					}, o.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), (t || d) && a.a.createElement("button", {
						className: D.a.settingsButton,
						title: o.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: n,
						id: U
					}, a.a.createElement(A.a, {
						className: D.a.settingsIcon
					})), t && a.a.createElement(W, {
						tooltipId: U,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(T.b, {
						displayText: o.fbt._("Copy My Wallet Address", null, {
							hk: "16YUPg"
						}),
						onClick: this.onCopyToClipboard
					}), s && a.a.createElement(T.b, {
						displayText: o.fbt._("Remove My Wallet", null, {
							hk: "1rH7ul"
						}),
						onClick: this.onRemoveMyWallet
					}), i && a.a.createElement(T.b, {
						displayText: o.fbt._("Track {tokenName} in MetaMask", [o.fbt._param("tokenName", c)], {
							hk: "qDCic"
						}),
						onClick: () => Object(G.i)(i)
					})), d && a.a.createElement(W, {
						tooltipId: U,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(T.b, {
						displayText: o.fbt._("Copy My Wallet Address", null, {
							hk: "4o4lHW"
						}),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const q = Object(l.c)({
					dropdownIsOpen: Object(B.b)(U),
					isEthereumProvider: d.f,
					provider: d.a,
					token: d.r,
					tokenName: d.p
				}),
				V = Object(i.b)(q, (e, t) => ({
					onGovernanceError: t => {
						Object(N.a)(e, t)
					},
					onOpenDropdown: () => e(Object(w.h)({
						tooltipId: U
					})),
					onWalletRemoved: () => {
						e(Object(p.h)({
							subredditId: t.subredditId
						})), e(Object(E.e)({
							kind: S.b.SuccessCommunityGreen,
							text: o.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var F = Object(P.b)(V(R)),
				Z = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				H = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				X = n.n(H);

			function Y(e) {
				return a.a.createElement("div", {
					className: X.a.risk
				}, a.a.createElement("div", {
					className: X.a.riskTitle
				}, a.a.createElement(Z.a, {
					className: X.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: X.a.riskBody
				}, e.body))
			}
			var Q = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				J = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				z = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				K = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				$ = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ne(e) {
				const {
					claimablePoints: t,
					subredditId: n
				} = e, [s, o] = Object(r.useState)(!1), c = Object(i.d)(e => Object(k.j)(e, {
					subredditId: n
				}));
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: ee.a.container
				}, a.a.createElement("div", {
					className: ee.a.content
				}, a.a.createElement("div", {
					className: ee.a.title
				}, te._("You Have Unclaimed Points", null, {
					hk: "3sFlm8"
				})), a.a.createElement("div", {
					className: ee.a.amount
				}, a.a.createElement(Q.a, {
					className: ee.a.tokenIcon,
					amount: t,
					subredditId: n
				})), a.a.createElement("div", {
					className: ee.a.caption
				}, te._("Unclaimed Points", null, {
					hk: "31KZbZ"
				}))), a.a.createElement(K.a, {
					className: ee.a.snooIcon
				})), a.a.createElement(h.i, {
					className: ee.a.claimButton,
					onClick: () => o(!0),
					disabled: c
				}, c ? a.a.createElement(a.a.Fragment, null, te._("Claiming", null, {
					hk: "3iQUgE"
				}), a.a.createElement(z.a, {
					className: ee.a.loadingIcon,
					sizePx: 6
				})) : te._("Claim My Points", null, {
					hk: "1QwLXK"
				})), s && a.a.createElement(J.a, {
					subredditId: n,
					onClose: () => o(!1)
				}))
			}
			var se = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				oe = n.n(se);
			class re extends a.a.PureComponent {
				componentDidMount() {
					this.props.onFetchMeData();
					const {
						pageLayer: e,
						provider: t,
						wallet: n
					} = this.props, s = n && n.publicAddress;
					Object(g.b)(e) && t && !s && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						claimablePointsEnabled: e,
						className: t,
						customCryptoEnabled: n,
						distribution: r,
						isEthereumProvider: i,
						isLoggedIn: c,
						nextAvailablePointsClaim: d,
						onOpenLoginModal: l,
						onOpenRegistrationModal: b,
						provider: p,
						subredditId: v,
						tokenDisplayConversion: g,
						tokenName: y,
						wallet: x
					} = this.props, k = x && x.inactive && function(e, t) {
						const n = e.actionScheduledAt - Date.now(),
							r = Math.max(1, Math.floor(n / m.x)),
							a = 1 !== r ? o.fbt._("{numDays} day", [o.fbt._param("numDays", String(r))], {
								hk: "20neqo"
							}) : o.fbt._("{numDays} days", [o.fbt._param("numDays", String(r))], {
								hk: "1ga8J1"
							});
						switch (e.reason) {
							case s.Initial:
								return {
									title: o.fbt._("inactive {tokenName}", [o.fbt._param("tokenName", t)], {
										hk: "4FPeyf"
									}), body: o.fbt._("{tokenName} may be removed if they are not used in governance polls. To keep your {tokenNameAgain}, vote in 1 governance poll within {time}.", [o.fbt._param("tokenName", t), o.fbt._param("tokenNameAgain", t), o.fbt._param("time", a)], {
										hk: "GlUwr"
									})
								};
							case s.Mod:
								return {
									title: o.fbt._("election required for top moderator", null, {
										hk: "1cC8h2"
									}), body: o.fbt._("Moderator {tokenName} may be removed if there isn’t an election for top moderator within {time}.", [o.fbt._param("tokenName", t), o.fbt._param("time", a)], {
										hk: "2BoM5b"
									})
								}
						}
					}(x.inactive, y), C = x && x.publicAddress;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: oe.a.title
					}, y), a.a.createElement("div", {
						className: oe.a.cellContainer
					}, x && ae(a.a.createElement("div", {
						className: oe.a.tokenCell
					}, a.a.createElement(f.a, {
						className: oe.a.token,
						subredditId: v
					}), Object(u.a)(Object(j.b)(x.amount, g))), o.fbt._("Your {tokenName}", [o.fbt._param("tokenName", y)], {
						hk: "2ylU3V"
					})), r && ae(Object(u.a)(Object(j.b)(r.totalAvailable, g)), o.fbt._("Total", null, {
						hk: "7GOJU"
					}))), k && a.a.createElement(Y, {
						body: k.body,
						title: k.title
					}), a.a.createElement("div", {
						className: oe.a.explanation
					}, o.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [o.fbt._param("tokenName", y)], {
						hk: "3BpDbS"
					})), n && p && a.a.createElement(F, {
						publicAddress: C,
						subredditId: v
					}), n && !C && i && a.a.createElement(h.i, {
						className: oe.a.button,
						onClick: c ? b : l
					}, o.fbt._("register", null, {
						hk: "1HsZP4"
					})), e && d && a.a.createElement(ne, {
						subredditId: v,
						claimablePoints: d.pointsToClaim
					}))
				}
			}

			function ae(e, t) {
				return a.a.createElement("div", {
					className: oe.a.cell
				}, a.a.createElement("div", {
					className: oe.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: oe.a.cellBottomLine
				}, t))
			}
			const ie = Object(l.c)({
				claimablePointsEnabled: x.d.spClaimablePoints,
				customCryptoEnabled: x.d.spCustomCrypto,
				isEthereumProvider: d.f,
				isLoggedIn: C.I,
				nextAvailablePointsClaim: k.l,
				provider: d.a,
				tokenName: d.p,
				tokenDisplayConversion: d.o
			});
			var ce = Object(i.b)(ie, e => ({
					onFetchMeData: () => e(Object(b.b)()),
					onOpenLoginModal: () => e(Object(v.h)()),
					onOpenRegistrationModal: () => e(Object(p.g)())
				}))(Object(y.t)()(re)),
				de = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				le = n("./src/lib/classNames/index.ts"),
				me = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				ue = n("./src/reddit/actions/subreddit.ts"),
				be = n("./src/reddit/components/Governance/CommunityCard/SectionTitle.m.less"),
				pe = n.n(be);

			function ve(e) {
				return a.a.createElement("div", {
					className: pe.a.title
				}, e.children)
			}
			var fe = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ge = n.n(fe);
			const {
				fbt: ye
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const he = Object(l.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var xe = Object(y.t)()(Object(i.b)(he, (e, t) => ({
					onFilterProposals: () => e(Object(ue.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(y.E)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(le.a)(e.className, ge.a.container)
					}, a.a.createElement(ve, null, ye._("Latest Polls", null, {
						hk: "1oGuW8"
					})), e.proposals.map(e => a.a.createElement(de.a, {
						className: ge.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(me.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: ge.a.showAll,
						onClick: e.onFilterProposals
					}, ye._("show all", null, {
						hk: "3GZuyP"
					}))) : null
				}))),
				je = n("./src/reddit/actions/modal.ts"),
				ke = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				Ce = n("./src/reddit/constants/modals.ts"),
				Oe = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				_e = n("./src/reddit/icons/svgs/Send/index.tsx"),
				Ne = n("./src/reddit/components/Governance/CommunityCard/UsePoints/index.m.less"),
				Ee = n.n(Ne);
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Pe(e) {
				const t = Object(i.c)(),
					{
						coinConversionEnabled: n,
						customCrypto: s,
						isEthereum: o,
						pointsTotal: r,
						transferEnabled: c
					} = Object(i.d)(Object(l.c)({
						coinConversionEnabled: x.d.spPointsCoinConversion,
						customCrypto: x.d.spCustomCrypto,
						isEthereum: t => Object(d.f)(t, e),
						pointsTotal: t => Object(d.h)(t, e),
						transferEnabled: x.d.spTipping
					})),
					m = c && !(s && o);
				return (m || n) && r && "0" !== r ? a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(ve, null, we._("Use Points", null, {
					hk: "2Mco3v"
				})), m && a.a.createElement(ke.a, {
					onClick: () => t(Object(p.f)())
				}, a.a.createElement(_e.a, {
					className: Ee.a.icon
				}), we._("Transfer", null, {
					hk: "1MQW1Y"
				})), n && a.a.createElement(ke.a, {
					onClick: () => t(Object(je.h)(Ce.a.CONVERT_TO_COINS))
				}, a.a.createElement(Oe.a, {
					className: Ee.a.icon
				}), we._("Convert to Reddit Coins", null, {
					hk: "lqkYM"
				}))) : null
			}
			var Ie = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				Te = n.n(Ie);
			const Me = Object(l.c)({
				tokenName: d.p,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: d.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.default = Object(i.b)(Me)((function(e) {
				return a.a.createElement(c.a, {
					className: e.className,
					title: o.fbt._("Community Points", null, {
						hk: "GZQW3"
					})
				}, e.distribution ? a.a.createElement(a.a.Fragment, null, a.a.createElement(ce, {
					className: Te.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), a.a.createElement(Pe, {
					className: Te.a.section,
					subredditId: e.subredditId
				}), a.a.createElement(xe, {
					className: Te.a.section,
					subredditId: e.subredditId
				})) : a.a.createElement("div", {
					className: Te.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				m = n.n(l);
			const u = Object(a.c)({
				tokenSymbol: d.q
			});
			t.a = Object(r.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return o.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
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
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(u);
			const p = Object(a.c)({
				tokenDisplayConversion: m.o
			});
			t.a = Object(r.b)(p)((function(e) {
				return o.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, o.a.createElement(d.a, {
					className: Object(i.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ClaimPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b"), n.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~231ed33d"), n.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~bbc9464a"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx")),
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
			t.a = o
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			var s = n("./src/lib/addQueryParams/index.ts");
			const o = "metamaskInstalled";

			function r() {
				window.location.replace(Object(s.a)(window.location.href, {
					[o]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[o])
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/get.js"),
				o = n.n(s),
				r = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function m(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const u = (e, t, n) => Object(i.a)(e, Object.assign(Object.assign({}, a), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function b(e, t) {
				return Object(l.a)(Object(c.a)(e, [d.a]), {
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/config.ts"),
				o = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: o.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: s
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: o.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
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
				return g
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js");

			function o() {
				return window.ethereum
			}

			function r() {
				const e = o();
				return !(!e || !e.isMetaMask)
			}

			function a() {
				const e = o();
				return e && e.selectedAddress || null
			}

			function i() {
				return o().networkVersion || null
			}

			function c() {
				const e = o();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, s, r) {
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(o()).getSigner(),
					l = new a.Contract(e, i, d),
					m = await l[s](...r);
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
			async function b(e, t, s, o, r) {
				const a = await n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = a.utils,
					p = i(s).add(r),
					v = u,
					f = "0x" + [c(1)].concat([v, i(o), i(r)].map(c).map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
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
				const o = a() || "";
				if (t.toLowerCase() !== o.toLowerCase()) throw new Error(s.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [s.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function f(e) {
				const t = o();
				return new Promise((n, o) => {
					const r = JSON.stringify(e);
					t.sendAsync({
						method: "eth_signTypedData_v3",
						params: [t.selectedAddress, r],
						from: t.selectedAddress
					}, (e, t) => {
						if (e) o(e);
						else {
							const e = t && t.result;
							e ? n(e) : o({
								message: s.fbt._("No signature returned from ethereum provider.", null, {
									hk: "eiYBF"
								}).toString()
							})
						}
					})
				})
			}

			function g(e) {
				return new Promise((t, n) => {
					o().sendAsync({
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
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				o = n("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					o = new s.BigNumber(t);
				return n.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					fillRule: "evenodd"
				}, o.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), o.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.a7f4ae6c116532e65701.js.map