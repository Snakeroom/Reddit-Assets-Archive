// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.bc039bac798a182c51e9.js
// Retrieved at 3/2/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-CommunityCard"], {
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
					a = new r.BigNumber("100").multipliedBy(o);
				return new r.BigNumber(a).toNumber()
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
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				l = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				y = n("./src/reddit/selectors/gov.ts"),
				h = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(s.a)(h.b),
				k = Object(s.a)(h.c),
				C = Object(s.a)(h.e),
				j = (Object(s.a)(h.f), Object(s.a)(h.g), Object(s.a)(h.h)),
				_ = Object(s.a)(h.i),
				O = Object(s.a)(h.j),
				E = Object(s.a)(h.k),
				w = Object(s.a)(h.q),
				N = Object(s.a)(h.r),
				I = Object(s.a)(h.s),
				P = Object(s.a)(h.t),
				T = Object(s.a)(h.u),
				M = Object(s.a)(h.v),
				A = Object(s.a)(h.w),
				S = Object(s.a)(h.x),
				G = (e, t) => async (n, r, {
					apiContext: s,
					gqlContext: o
				}) => {
					let a, d = r().polls.models[e];
					if (n(O({
							pollId: e
						})), (a = d.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...l,
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
									endpoint: `${c.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(s(), d.subredditId, e, t)).ok) {
						if (d.type === m.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(C({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(E(a.body));
						const s = r();
						if ((d = s.polls.models[e]) && Object(m.e)(d)) {
							const {
								postId: e
							} = d, t = s.posts.models[e];
							t && t.voteState === v.a.notVoted && n(Object(i.U)(e))
						}
					} else n(_({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(g.a)(n, a.error || a.errors[0].messsage)
				}, L = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					n(I());
					const l = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(b.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${c.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: l
					});
					u.ok ? (n(P({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(d.e)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(y.n)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(w({
						error: u.error
					})), Object(g.a)(n, u.error))
				}, B = e => async (t, n, {
					apiContext: r
				}) => {
					t(M());
					const s = await Object(p.a)(r(), e);
					s.ok ? t(A(s.body)) : t(T({
						error: s.error
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.m.less"),
				i = n.n(a);

			function d(e) {
				return s.a.createElement("button", {
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
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = n("./src/reddit/selectors/gov.ts"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/prettyPrintNumber/index.ts"),
				b = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				p = n("./src/reddit/actions/governance/index.ts"),
				f = n("./src/reddit/actions/login.ts"),
				v = n("./src/reddit/components/Governance/Token/index.tsx"),
				y = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/featureFlags/index.ts"),
				k = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(r || (r = {}));
			var C = n("./src/reddit/selectors/crypto/claims.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				O = n("./src/lib/copyToClipboard/index.ts"),
				E = n("./src/reddit/actions/governance/errorToast.ts"),
				w = n("./src/reddit/actions/toaster.ts"),
				N = n("./src/reddit/actions/tooltip.ts"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				P = n("./src/reddit/controls/Dropdown/index.tsx"),
				T = n("./src/reddit/controls/Dropdown/Row.tsx"),
				M = n("./src/reddit/endpoints/governance/crypto.ts"),
				A = n("./src/reddit/helpers/governance/ethereum.ts"),
				S = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				G = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				R = n.n(B);
			const D = Object(_.a)(P.a),
				W = "BlockchainWalletInfo--SettingsMenu";
			class U extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(O.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(M.g)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						isEthereumProvider: t,
						onOpenDropdown: n,
						provider: r,
						publicAddress: o,
						token: i,
						tokenName: d
					} = this.props;
					if (!o) return null;
					const c = r === M.a.Stellar;
					return a.a.createElement("div", {
						className: R.a.publicAddressSection
					}, a.a.createElement("div", {
						className: R.a.publicAddress,
						title: o
					}, function(e, t) {
						switch (t) {
							case M.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(o, r)), a.a.createElement("div", {
						className: R.a.yourWalletAddress
					}, s.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), (t || c) && a.a.createElement("button", {
						className: R.a.settingsButton,
						title: s.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: n,
						id: W
					}, a.a.createElement(S.a, {
						className: R.a.settingsIcon
					})), t && a.a.createElement(D, {
						tooltipId: W,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(T.b, {
						displayText: s.fbt._("Copy My Wallet Address", null, {
							hk: "16YUPg"
						}),
						onClick: this.onCopyToClipboard
					}), r && a.a.createElement(T.b, {
						displayText: s.fbt._("Remove My Wallet", null, {
							hk: "1rH7ul"
						}),
						onClick: this.onRemoveMyWallet
					}), i && a.a.createElement(T.b, {
						displayText: s.fbt._("Track {tokenName} in MetaMask", [s.fbt._param("tokenName", d)], {
							hk: "qDCic"
						}),
						onClick: () => Object(A.i)(i)
					})), c && a.a.createElement(D, {
						tooltipId: W,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(T.b, {
						displayText: s.fbt._("Copy My Wallet Address", null, {
							hk: "4o4lHW"
						}),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(l.c)({
					dropdownIsOpen: Object(L.b)(W),
					isEthereumProvider: c.f,
					provider: c.a,
					token: c.p,
					tokenName: c.n
				}),
				q = Object(i.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(E.a)(e, t)
					},
					onOpenDropdown: () => e(Object(N.h)({
						tooltipId: W
					})),
					onWalletRemoved: () => {
						e(Object(p.h)({
							subredditId: t.subredditId
						})), e(Object(w.e)({
							kind: G.b.SuccessCommunityGreen,
							text: s.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var V = Object(I.b)(q(U)),
				F = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Z = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				X = n.n(Z);

			function Y(e) {
				return a.a.createElement("div", {
					className: X.a.risk
				}, a.a.createElement("div", {
					className: X.a.riskTitle
				}, a.a.createElement(F.a, {
					className: X.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: X.a.riskBody
				}, e.body))
			}
			var $ = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				Q = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				J = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				K = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				ee = n.n(K);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function ne(e) {
				const {
					claimablePoints: t,
					subredditId: n
				} = e, [r, s] = Object(o.useState)(!1), d = Object(i.e)(e => Object(C.a)(e, {
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
				}, a.a.createElement($.a, {
					className: ee.a.tokenIcon,
					amount: t,
					subredditId: n
				})), a.a.createElement("div", {
					className: ee.a.caption
				}, te._("Unclaimed Points", null, {
					hk: "31KZbZ"
				}))), a.a.createElement(z.a, {
					className: ee.a.snooIcon
				})), a.a.createElement(g.i, {
					className: ee.a.claimButton,
					onClick: () => s(!0),
					disabled: d
				}, d ? a.a.createElement(a.a.Fragment, null, te._("Claiming", null, {
					hk: "3iQUgE"
				}), a.a.createElement(J.a, {
					className: ee.a.loadingIcon,
					sizePx: 6
				})) : te._("Claim My Points", null, {
					hk: "1QwLXK"
				})), r && a.a.createElement(Q.a, {
					subredditId: n,
					onClose: () => s(!1)
				}))
			}
			var re = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				se = n.n(re);
			class oe extends a.a.PureComponent {
				componentDidMount() {
					this.props.onFetchMeData();
					const {
						pageLayer: e,
						provider: t,
						wallet: n
					} = this.props, r = n && n.publicAddress;
					Object(y.b)(e) && t && !r && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						claimablePointsEnabled: e,
						className: t,
						customCryptoEnabled: n,
						distribution: o,
						isEthereumProvider: i,
						isLoggedIn: d,
						nextAvailableClaim: c,
						onOpenLoginModal: l,
						onOpenRegistrationModal: b,
						provider: p,
						subredditId: f,
						tokenDisplayConversion: y,
						tokenName: h,
						wallet: x
					} = this.props, C = x && x.inactive && function(e, t) {
						const n = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(n / u.x)),
							a = 1 !== o ? s.fbt._("{numDays} day", [s.fbt._param("numDays", String(o))], {
								hk: "20neqo"
							}) : s.fbt._("{numDays} days", [s.fbt._param("numDays", String(o))], {
								hk: "1ga8J1"
							});
						switch (e.reason) {
							case r.Initial:
								return {
									title: s.fbt._("inactive {tokenName}", [s.fbt._param("tokenName", t)], {
										hk: "4FPeyf"
									}), body: s.fbt._("{tokenName} may be removed if they are not used in governance polls. To keep your {tokenNameAgain}, vote in 1 governance poll within {time}.", [s.fbt._param("tokenName", t), s.fbt._param("tokenNameAgain", t), s.fbt._param("time", a)], {
										hk: "GlUwr"
									})
								};
							case r.Mod:
								return {
									title: s.fbt._("election required for top moderator", null, {
										hk: "1cC8h2"
									}), body: s.fbt._("Moderator {tokenName} may be removed if there isn’t an election for top moderator within {time}.", [s.fbt._param("tokenName", t), s.fbt._param("time", a)], {
										hk: "2BoM5b"
									})
								}
						}
					}(x.inactive, h), j = x && x.publicAddress;
					return a.a.createElement("div", {
						className: t
					}, a.a.createElement("div", {
						className: se.a.title
					}, h), a.a.createElement("div", {
						className: se.a.cellContainer
					}, x && ae(a.a.createElement("div", {
						className: se.a.tokenCell
					}, a.a.createElement(v.a, {
						className: se.a.token,
						subredditId: f
					}), Object(m.a)(Object(k.b)(x.amount, y))), s.fbt._("Your {tokenName}", [s.fbt._param("tokenName", h)], {
						hk: "2ylU3V"
					})), o && ae(Object(m.a)(Object(k.b)(o.totalAvailable, y)), s.fbt._("Total", null, {
						hk: "7GOJU"
					}))), C && a.a.createElement(Y, {
						body: C.body,
						title: C.title
					}), a.a.createElement("div", {
						className: se.a.explanation
					}, s.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [s.fbt._param("tokenName", h)], {
						hk: "3BpDbS"
					})), n && p && a.a.createElement(V, {
						publicAddress: j,
						subredditId: f
					}), n && !j && i && a.a.createElement(g.i, {
						className: se.a.button,
						onClick: d ? b : l
					}, s.fbt._("register", null, {
						hk: "1HsZP4"
					})), e && c && a.a.createElement(ne, {
						subredditId: f,
						claimablePoints: c.pointsToClaim
					}))
				}
			}

			function ae(e, t) {
				return a.a.createElement("div", {
					className: se.a.cell
				}, a.a.createElement("div", {
					className: se.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: se.a.cellBottomLine
				}, t))
			}
			const ie = Object(l.c)({
				claimablePointsEnabled: x.d.spClaimablePoints,
				customCryptoEnabled: x.d.spCustomCrypto,
				isEthereumProvider: c.f,
				isLoggedIn: j.J,
				nextAvailableClaim: C.b,
				provider: c.a,
				tokenName: c.n,
				tokenDisplayConversion: c.m
			});
			var de = Object(i.b)(ie, e => ({
					onFetchMeData: () => e(Object(b.b)()),
					onOpenLoginModal: () => e(Object(f.h)()),
					onOpenRegistrationModal: () => e(Object(p.g)())
				}))(Object(h.t)()(oe)),
				ce = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				le = n("./src/lib/classNames/index.ts"),
				ue = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				me = n("./src/reddit/actions/subreddit.ts"),
				be = n("./src/reddit/components/Governance/CommunityCard/SectionTitle.m.less"),
				pe = n.n(be);

			function fe(e) {
				return a.a.createElement("div", {
					className: pe.a.title
				}, e.children)
			}
			var ve = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ye = n.n(ve);
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ge = Object(l.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var xe = Object(h.t)()(Object(i.b)(ge, (e, t) => ({
					onFilterProposals: () => e(Object(me.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(h.E)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(le.a)(e.className, ye.a.container)
					}, a.a.createElement(fe, null, he._("Latest Polls", null, {
						hk: "1oGuW8"
					})), e.proposals.map(e => a.a.createElement(ce.a, {
						className: ye.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(ue.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: ye.a.showAll,
						onClick: e.onFilterProposals
					}, he._("show all", null, {
						hk: "3GZuyP"
					}))) : null
				}))),
				ke = n("./src/reddit/actions/modal.ts"),
				Ce = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/SidebarButton/index.tsx"),
				je = n("./src/reddit/constants/modals.ts"),
				_e = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/Send/index.tsx"),
				Ee = n("./src/reddit/components/Governance/CommunityCard/UsePoints/index.m.less"),
				we = n.n(Ee);
			const {
				fbt: Ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ie(e) {
				const t = Object(i.d)(),
					{
						coinConversionEnabled: n,
						customCrypto: r,
						isEthereum: s,
						pointsTotal: o,
						transferEnabled: d
					} = Object(i.e)(Object(l.c)({
						coinConversionEnabled: x.d.spPointsCoinConversion,
						customCrypto: x.d.spCustomCrypto,
						isEthereum: t => Object(c.f)(t, e),
						pointsTotal: t => Object(c.h)(t, e),
						transferEnabled: x.d.spTipping
					})),
					u = d && !(r && s);
				return (u || n) && o && "0" !== o ? a.a.createElement("div", {
					className: e.className
				}, a.a.createElement(fe, null, Ne._("Use Points", null, {
					hk: "2Mco3v"
				})), u && a.a.createElement(Ce.a, {
					onClick: () => t(Object(p.f)())
				}, a.a.createElement(Oe.a, {
					className: we.a.icon
				}), Ne._("Transfer", null, {
					hk: "1MQW1Y"
				})), n && a.a.createElement(Ce.a, {
					onClick: () => t(Object(ke.h)(je.a.CONVERT_TO_COINS))
				}, a.a.createElement(_e.a, {
					className: we.a.icon
				}), Ne._("Convert to Reddit Coins", null, {
					hk: "lqkYM"
				}))) : null
			}
			var Pe = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				Te = n.n(Pe);
			const Me = Object(l.c)({
				tokenName: c.n,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: c.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.default = Object(i.b)(Me)((function(e) {
				return a.a.createElement(d.a, {
					className: e.className,
					title: s.fbt._("Community Points", null, {
						hk: "GZQW3"
					})
				}, e.distribution ? a.a.createElement(a.a.Fragment, null, a.a.createElement(de, {
					className: Te.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), a.a.createElement(Ie, {
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(a.c)({
				tokenSymbol: c.o
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return s.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
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
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(a.c)({
				tokenDisplayConversion: u.m
			});
			t.a = Object(o.b)(p)((function(e) {
				return s.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className, {
						[b.a.small]: e.small
					})
				}, s.a.createElement(c.a, {
					className: Object(i.a)(b.a.token, {
						[b.a.small]: e.small
					}),
					grey: e.grey,
					subredditId: e.subredditId
				}), Object(d.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
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
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~339111b0"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx")),
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
				return a
			}));
			var r = n("./src/lib/addQueryParams/index.ts");
			const s = "metamaskInstalled";

			function o() {
				window.location.replace(Object(r.a)(window.location.href, {
					[s]: "true"
				}))
			}

			function a(e) {
				return !!(e && e.queryParams && e.queryParams[s])
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "m", (function() {
				return y
			}));
			var r, s = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
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

			function i(e) {
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
			async function c(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: `${s.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
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
				v = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function y(e, t) {
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
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
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

			function i(e, t) {
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
		"./src/reddit/helpers/governance/ethereum.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
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

			function a() {
				const e = s();
				return e && e.selectedAddress || null
			}

			function i() {
				return s().networkVersion || null
			}

			function d() {
				const e = s();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const c = 4001;
			async function l(e, t, r, o) {
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await d();
				const c = new a.providers.Web3Provider(s()).getSigner(),
					l = new a.Contract(e, i, c),
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
				const a = await n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~15384a17").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: d,
						hexZeroPad: c,
						toUtf8Bytes: b
					} = a.utils,
					p = i(r).add(o),
					f = m,
					v = "0x" + [d(1)].concat([f, i(s), i(o)].map(d).map(e => c(e, 32))).concat(d(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, r) {
					return l(e, Promise.resolve(u), "send", [t, n, r])
				}(e, t, p.toString(), v)
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
			async function f(e, t, n) {
				await d();
				const s = a() || "";
				if (t.toLowerCase() !== s.toLowerCase()) throw new Error(r.fbt._("Please select your registered address in MetaMask: {subscriberAddress}", [r.fbt._param("subscriberAddress", t)], {
					hk: "3rehSL"
				}).toString());
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function v(e) {
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

			function y(e) {
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
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedToIntegerBy(s).toString()
			}

			function a(e, t) {
				return Object(s.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
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
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				o = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var i = (e = a, t) => {
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
				d = n("./src/reddit/actions/governance/constants.ts");
			const c = {};
			var l = (e = c, t) => {
				switch (t.type) {
					case d.n: {
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
				claims: i,
				publicWallets: l
			})
		},
		"./src/reddit/selectors/crypto/claims.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/crypto/wallet.ts"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				a = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(o.a)({
				features: {
					crypto: a.a
				}
			});
			const i = (e, t) => {
					var n, r, s;
					return t && (null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.claims) || void 0 === s ? void 0 : s[t.subredditId])
				},
				d = Object(r.a)([i, s.b], (e, t) => {
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
				c = (e, t) => {
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
				a = (e, t) => {
					var n;
					return null === (n = o(e, t)) || void 0 === n ? void 0 : n.publicAddress
				},
				i = (e, t) => {
					var n, r, s, o;
					return null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === o ? void 0 : o[t.subredditId]
				}
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "j", (function() {
				return E
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				a = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				d = (e, {
					subredditId: t
				}) => {
					const n = k(e, {
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
				c = (e, t) => {
					const n = g(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = g(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = g(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
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
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				h = (e, t) => {
					const n = _(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				g = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				x = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				k = (e, t) => {
					const n = x(e, t);
					return n && n.walletProvider
				},
				C = (e, t) => {
					const n = k(e, t),
						r = x(e, t);
					return n && n.provider || r && r.provider
				},
				j = (e, t) => {
					const n = C(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const n = k(e, t),
						r = C(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const o = n && n.extra && n.extra.contracts,
						a = o && o.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				O = (e, {
					subredditId: t
				}) => {
					const n = k(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				E = (e, t) => {
					const n = x(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.bc039bac798a182c51e9.js.map