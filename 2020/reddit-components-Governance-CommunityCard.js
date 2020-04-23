// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.da907d5200081f72d07d.js
// Retrieved at 4/23/2020, 1:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-CommunityCard"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function r(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t),
					o = new s.BigNumber(n.dividedBy(r)),
					a = new s.BigNumber("100").multipliedBy(o);
				return new s.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "c", (function() {
				return R
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/gov.ts"),
				y = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(r.a)(y.b),
				k = Object(r.a)(y.c),
				j = Object(r.a)(y.d),
				x = Object(r.a)(y.e),
				O = Object(r.a)(y.f),
				_ = (Object(r.a)(y.g), Object(r.a)(y.h), Object(r.a)(y.i)),
				C = Object(r.a)(y.j),
				w = Object(r.a)(y.k),
				N = Object(r.a)(y.l),
				I = Object(r.a)(y.r),
				P = Object(r.a)(y.s),
				E = Object(r.a)(y.t),
				T = Object(r.a)(y.u),
				M = Object(r.a)(y.v),
				A = Object(r.a)(y.w),
				G = Object(r.a)(y.x),
				S = Object(r.a)(y.y),
				B = (e, t) => async (n, s, r) => {
					let o, {
							apiContext: a,
							gqlContext: d
						} = r,
						c = s().polls.models[e];
					if (n(w({
							pollId: e
						})), (o = c.type === b.a.GA ? await Object(u.c)(d(), e, t) : await Object(u.b)(a(), c.subredditId, e, t)).ok) {
						if (c.type === b.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(O({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(N(o.body));
						const r = s();
						if ((c = r.polls.models[e]) && Object(b.d)(c)) {
							const {
								postId: e
							} = c, t = r.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.ab)(e))
						}
					} else n(C({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(g.a)(n, o.error || o.errors[0].messsage)
				}, L = (e, t) => async (n, r, i) => {
					let {
						apiContext: u
					} = i;
					n(E());
					const m = r().transfers.communityPoints.contentId || void 0,
						b = await
					function(e, t) {
						return Object(l.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(c.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: m
					}));
					b.ok ? (n(T(Object.assign({}, b.body, {
						subredditId: e.subredditId
					}))), n(Object(d.e)({
						kind: p.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(o.a)(e.amount)), s.fbt._param("tokenName", Object(v.p)(r(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(I({
						error: b.error
					})), Object(g.a)(n, b.error))
				}, D = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(A());
					const o = await Object(m.a)(r(), e);
					o.ok ? t(G(o.body)) : t(M({
						error: o.error
					}))
				}, R = (e, t) => async (n, r, o) => {
					let {
						apiContext: a
					} = o;
					n(j());
					const i = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(c.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(a(), e, t);
					i.ok ? (n(G({
						[t]: i.body
					})), n(Object(d.e)({
						kind: p.b.SuccessCommunity,
						text: e ? s.fbt._("You have successfully opted out of receiving {tokenName}", [s.fbt._param("tokenName", Object(v.p)(r(), {
							subredditId: t
						}))], {
							hk: "2GTi3T"
						}) : s.fbt._("You have opted into receiving {tokenName}", [s.fbt._param("tokenName", Object(v.p)(r(), {
							subredditId: t
						}))], {
							hk: "2Xx98N"
						})
					}))) : Object(g.a)(n, i.error)
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
				claimButton: "_2h2YozlNvVxTI3stA7j3LR"
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
		"./src/reddit/components/Governance/CommunityCard/index.m.less": function(e, t, n) {
			e.exports = {
				loading: "Jfh68QhZqpLgByZUbKyD1",
				section: "_3o2O8sLNM51xpdzuDH-ocD"
			}
		},
		"./src/reddit/components/Governance/CommunityCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
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
				g = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				k = n("./src/reddit/endpoints/governance/crypto.ts"),
				j = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(s || (s = {}));
			var O = n("./src/reddit/selectors/economics.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				C = n("./src/higherOrderComponents/asTooltip.tsx"),
				w = n("./src/lib/copyToClipboard/index.ts"),
				N = n("./src/reddit/actions/governance/errorToast.ts"),
				I = n("./src/reddit/actions/toaster.ts"),
				P = n("./src/reddit/actions/tooltip.ts"),
				E = n("./src/reddit/contexts/ApiContext.tsx"),
				T = n("./src/reddit/controls/Dropdown/index.tsx"),
				M = n("./src/reddit/controls/Dropdown/Row.tsx"),
				A = n("./src/reddit/helpers/governance/ethereum.ts"),
				G = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				S = n("./src/reddit/models/Toast/index.ts"),
				B = n("./src/reddit/selectors/tooltip.ts"),
				L = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				D = n.n(L);
			const R = Object(C.a)(T.a),
				W = "BlockchainWalletInfo--SettingsMenu";
			class U extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(w.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(k.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: n,
						publicAddress: s,
						token: o,
						tokenName: i
					} = this.props;
					if (!s) return null;
					const d = n === k.a.Ethereum || n === k.a.Rinkeby,
						c = n === k.a.Stellar;
					return a.a.createElement("div", {
						className: D.a.publicAddressSection
					}, a.a.createElement("div", {
						className: D.a.publicAddress,
						title: s
					}, function(e, t) {
						switch (t) {
							case k.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(s, n)), a.a.createElement("div", {
						className: D.a.yourWalletAddress
					}, r.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), (d || c) && a.a.createElement("button", {
						className: D.a.settingsButton,
						title: r.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: t,
						id: W
					}, a.a.createElement(G.a, {
						className: D.a.settingsIcon
					})), d && a.a.createElement(R, {
						tooltipId: W,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(M.b, {
						displayText: r.fbt._("Copy My Wallet Address", null, {
							hk: "16YUPg"
						}),
						onClick: this.onCopyToClipboard
					}), n && a.a.createElement(M.b, {
						displayText: r.fbt._("Remove My Wallet", null, {
							hk: "1rH7ul"
						}),
						onClick: this.onRemoveMyWallet
					}), o && a.a.createElement(M.b, {
						displayText: r.fbt._("Track {tokenName} in MetaMask", [r.fbt._param("tokenName", i)], {
							hk: "qDCic"
						}),
						onClick: () => Object(A.i)(o)
					})), c && a.a.createElement(R, {
						tooltipId: W,
						isOpen: e,
						renderContentsHidden: !0
					}, a.a.createElement(M.b, {
						displayText: r.fbt._("Copy My Wallet Address", null, {
							hk: "4o4lHW"
						}),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const H = Object(l.c)({
					dropdownIsOpen: Object(B.b)(W),
					provider: c.a,
					token: c.r,
					tokenName: c.p
				}),
				V = Object(i.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(N.a)(e, t)
					},
					onOpenDropdown: () => e(Object(P.h)({
						tooltipId: W
					})),
					onWalletRemoved: () => {
						e(Object(p.j)({
							subredditId: t.subredditId
						})), e(Object(I.e)({
							kind: S.b.SuccessCommunityGreen,
							text: r.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var q = Object(E.b)(V(U)),
				F = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Y = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				Z = n.n(Y);

			function X(e) {
				return a.a.createElement("div", {
					className: Z.a.risk
				}, a.a.createElement("div", {
					className: Z.a.riskTitle
				}, a.a.createElement(F.a, {
					className: Z.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: Z.a.riskBody
				}, e.body))
			}
			var Q = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				J = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				K = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				z = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				$ = n.n(z);
			const {
				fbt: ee
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class te extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						modalVisible: !1
					}
				}
				render() {
					const {
						claimablePoints: e,
						subredditId: t
					} = this.props;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: $.a.container
					}, a.a.createElement("div", {
						className: $.a.content
					}, a.a.createElement("div", {
						className: $.a.title
					}, ee._("You Have Unclaimed Points", null, {
						hk: "3sFlm8"
					})), a.a.createElement("div", {
						className: $.a.amount
					}, a.a.createElement(Q.a, {
						className: $.a.tokenIcon,
						amount: e,
						subredditId: t
					})), a.a.createElement("div", {
						className: $.a.caption
					}, ee._("Unclaimed Points", null, {
						hk: "31KZbZ"
					}))), a.a.createElement(K.a, {
						className: $.a.snooIcon
					})), a.a.createElement(h.f, {
						className: $.a.claimButton,
						onClick: () => this.setState({
							modalVisible: !0
						})
					}, ee._("Claim My Points", null, {
						hk: "1QwLXK"
					})), this.state.modalVisible && a.a.createElement(J.a, {
						subredditId: t,
						onClose: () => this.setState({
							modalVisible: !1
						})
					}))
				}
			}
			var ne = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				se = n.n(ne);
			class re extends a.a.PureComponent {
				componentDidMount() {
					this.props.onFetchMeData();
					const {
						pageLayer: e,
						provider: t,
						wallet: n
					} = this.props, s = n && n.publicAddress;
					Object(y.b)(e) && t && !s && this.props.onOpenRegistrationModal()
				}
				render() {
					const {
						claimablePoints: e,
						claimablePointsEnabled: t,
						className: n,
						distribution: o,
						isLoggedIn: i,
						language: d,
						onOpenLoginModal: c,
						onOpenRegistrationModal: l,
						onOpenTransferModal: b,
						provider: p,
						subredditId: f,
						tokenDisplayConversion: y,
						tokenName: g,
						useCrypto: j,
						wallet: O
					} = this.props, _ = O && O.inactive && function(e, t, n) {
						const o = e.actionScheduledAt - Date.now(),
							a = Math.max(1, Math.floor(o / u.v)),
							i = 1 !== a ? r.fbt._("{numDays} day", [r.fbt._param("numDays", String(a))], {
								hk: "20neqo"
							}) : r.fbt._("{numDays} days", [r.fbt._param("numDays", String(a))], {
								hk: "1ga8J1"
							});
						switch (e.reason) {
							case s.Initial:
								return {
									title: r.fbt._("inactive {tokenName}", [r.fbt._param("tokenName", n)], {
										hk: "4FPeyf"
									}), body: r.fbt._("{tokenName} may be removed if they are not used in governance polls. To keep your {tokenNameAgain}, vote in 1 governance poll within {time}.", [r.fbt._param("tokenName", n), r.fbt._param("tokenNameAgain", n), r.fbt._param("time", i)], {
										hk: "GlUwr"
									})
								};
							case s.Mod:
								return {
									title: r.fbt._("election required for top moderator", null, {
										hk: "1cC8h2"
									}), body: r.fbt._("Moderator {tokenName} may be removed if there isn’t an election for top moderator within {time}.", [r.fbt._param("tokenName", n), r.fbt._param("time", i)], {
										hk: "2BoM5b"
									})
								}
						}
					}(O.inactive, 0, g), C = O && O.publicAddress, w = p === k.a.Ethereum || p === k.a.Rinkeby;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", {
						className: se.a.title
					}, g), a.a.createElement("div", {
						className: se.a.cellContainer
					}, O && oe(a.a.createElement("div", {
						className: se.a.tokenCell
					}, a.a.createElement(v.a, {
						className: se.a.token,
						subredditId: f
					}), Object(m.a)(Object(x.b)(O.amount, y))), r.fbt._("Your {tokenName}", [r.fbt._param("tokenName", g)], {
						hk: "2ylU3V"
					})), o && oe(Object(m.a)(Object(x.b)(o.totalAvailable, y)), r.fbt._("Total", null, {
						hk: "7GOJU"
					}))), _ && a.a.createElement(X, {
						body: _.body,
						title: _.title
					}), a.a.createElement("div", {
						className: se.a.explanation
					}, r.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [r.fbt._param("tokenName", g)], {
						hk: "3BpDbS"
					})), !t && p && a.a.createElement(q, {
						publicAddress: C,
						subredditId: f
					}), !t && p && !C && w && a.a.createElement(h.f, {
						className: se.a.button,
						onClick: i ? l : c
					}, r.fbt._("register", null, {
						hk: "1HsZP4"
					})), t && e && a.a.createElement(te, {
						subredditId: f,
						claimablePoints: e
					}), O && !j && a.a.createElement(h.i, {
						className: se.a.button,
						onClick: b
					}, r.fbt._("send", null, {
						hk: "2fL0wd"
					})))
				}
			}

			function oe(e, t) {
				return a.a.createElement("div", {
					className: se.a.cell
				}, a.a.createElement("div", {
					className: se.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: se.a.cellBottomLine
				}, t))
			}
			const ae = Object(l.c)({
				claimablePoints: O.i,
				claimablePointsEnabled: j.d.spClaimablePoints,
				isLoggedIn: _.H,
				provider: c.a,
				tokenName: c.p,
				tokenDisplayConversion: c.o,
				language: e => e.user.language,
				useCrypto: c.k
			});
			var ie = Object(i.b)(ae, e => ({
					onFetchMeData: () => e(Object(b.a)()),
					onOpenLoginModal: () => e(Object(f.g)()),
					onOpenRegistrationModal: () => e(Object(p.i)()),
					onOpenTransferModal: () => e(Object(p.h)())
				}))(Object(g.t)()(re)),
				de = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				ce = n("./src/lib/classNames/index.ts"),
				le = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				ue = n("./src/reddit/actions/subreddit.ts"),
				me = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				be = n.n(me);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const fe = Object(l.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var ve = Object(g.t)()(Object(i.b)(fe, (e, t) => ({
					onFilterProposals: () => e(Object(ue.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(g.E)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
						className: Object(ce.a)(e.className, be.a.container)
					}, a.a.createElement("div", {
						className: be.a.title
					}, pe._("Latest Polls", null, {
						hk: "1oGuW8"
					})), e.proposals.map(e => a.a.createElement(de.a, {
						className: be.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(le.a)(e.permalink)
					}, e.title)), a.a.createElement("a", {
						className: be.a.showAll,
						onClick: e.onFilterProposals
					}, pe._("show all", null, {
						hk: "3GZuyP"
					}))) : null
				}))),
				ye = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				ge = n.n(ye);
			const he = Object(l.c)({
				tokenName: c.p,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: c.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.default = Object(i.b)(he)((function(e) {
				return a.a.createElement(d.a, {
					className: e.className,
					title: r.fbt._("Subreddit Points", null, {
						hk: "2a1wVI"
					})
				}, e.distribution ? a.a.createElement(o.Fragment, null, a.a.createElement(ie, {
					className: ge.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && a.a.createElement(ve, {
					className: ge.a.section,
					subredditId: e.subreddit.id
				})) : a.a.createElement("div", {
					className: ge.a.loading
				}))
			}))
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				d = n("./src/reddit/selectors/gov.ts");
			const c = Object(a.c)({
				tokenSymbol: d.q
			});
			t.a = Object(o.b)(c)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return r.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/TokenAmount/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_TXyD8cel36iFhXWbXulM",
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
				d = n("./src/lib/prettyPrintNumber/index.ts"),
				c = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(a.c)({
				tokenDisplayConversion: u.o
			});
			t.a = Object(o.b)(p)((function(e) {
				return r.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className)
				}, r.a.createElement(c.a, {
					className: b.a.token,
					subredditId: e.subredditId
				}), Object(d.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
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
				importAsync: () => Promise.all([n.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), n.e("reddit-components-Governance-TransactionModals-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/index.tsx")),
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
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
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
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			}));
			var s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(s || (s = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/get.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const m = (e, t, n) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function b(e, t) {
				return Object(l.a)(Object(d.a)(e, [c.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.ab.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							s = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: s
						})
					}
					return e
				})
			}

			function i(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.ab.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
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
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/i18n/utils.ts");

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
				return r().networkVersion || null
			}

			function d() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const c = 4001;
			async function l(e, t, s, o) {
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await d();
				const c = new a.providers.Web3Provider(r()).getSigner(),
					l = new a.Contract(e, i, c),
					u = await l[s](...o);
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
			async function b(e, t, s, r, o) {
				const a = await n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
					{
						bigNumberify: i,
						hexlify: d,
						hexZeroPad: c,
						toUtf8Bytes: b
					} = a.utils,
					p = i(s).add(o),
					f = m,
					v = "0x" + [d(1)].concat([f, i(r), i(o)].map(d).map(e => c(e, 32))).concat(d(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, s) {
					return l(e, Promise.resolve(u), "send", [t, n, s])
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
				const r = a() || "";
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(Object(s.b)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function v(e) {
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
								message: Object(s.b)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function y(e) {
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
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.dividedBy(r).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function i(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
			}
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
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => !0
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "p", (function() {
				return h
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "m", (function() {
				return O
			})), n.d(t, "s", (function() {
				return _
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return P
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const d = [],
				c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = _(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.harberger ? s.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const n = x(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = x(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : c
				},
				f = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(i.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return n && !e
					}
					return n
				},
				y = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				h = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				k = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				j = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				x = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const n = O(e, t);
					return n && n.walletProvider
				},
				C = (e, t) => {
					const n = _(e, t),
						s = O(e, t);
					return n && n.provider || s && s.provider
				},
				w = (e, t) => {
					const n = C(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby
				},
				N = (e, t) => {
					const n = _(e, t),
						s = C(e, t);
					if (n && !n.inTransition && s === r.a.Stellar) return {
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
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = _(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const n = O(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-CommunityCard.da907d5200081f72d07d.js.map