// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.a952f175b220c359010d.js
// Retrieved at 6/10/2020, 5:40:08 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "h", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/gov.ts"),
				y = n("./src/reddit/actions/governance/constants.ts"),
				h = n("./src/reddit/actions/governance/errorToast.ts");
			const g = Object(s.a)(y.b),
				k = Object(s.a)(y.c),
				x = Object(s.a)(y.e),
				j = (Object(s.a)(y.f), Object(s.a)(y.g), Object(s.a)(y.h)),
				O = Object(s.a)(y.i),
				_ = Object(s.a)(y.j),
				C = Object(s.a)(y.k),
				w = Object(s.a)(y.q),
				N = Object(s.a)(y.r),
				E = Object(s.a)(y.s),
				I = Object(s.a)(y.t),
				P = Object(s.a)(y.u),
				T = Object(s.a)(y.v),
				M = Object(s.a)(y.w),
				A = Object(s.a)(y.x),
				G = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: a,
							gqlContext: d
						} = s,
						l = r().polls.models[e];
					if (n(_({
							pollId: e
						})), (o = l.type === b.a.GA ? await Object(c.c)(d(), e, t) : await Object(c.b)(a(), l.subredditId, e, t)).ok) {
						if (l.type === b.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(x({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(C(o.body));
						const s = r();
						if ((l = s.polls.models[e]) && Object(b.d)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.cb)(e))
						}
					} else n(O({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(h.a)(n, o.error || o.errors[0].messsage)
				}, S = (e, t) => async (n, s, i) => {
					let {
						apiContext: c
					} = i;
					n(E());
					const m = s().transfers.communityPoints.contentId || void 0,
						b = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(c(), Object.assign({}, e, {
						contentId: m
					}));
					b.ok ? (n(I(Object.assign({}, b.body, {
						subredditId: e.subredditId
					}))), n(Object(d.e)({
						kind: p.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(v.p)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(w({
						error: b.error
					})), Object(h.a)(n, b.error))
				}, L = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(T());
					const o = await Object(m.a)(s(), e);
					o.ok ? t(M(o.body)) : t(P({
						error: o.error
					}))
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
				k = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/helpers/governance/tokens.ts");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(r || (r = {}));
			var j = n("./src/reddit/selectors/economics.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/higherOrderComponents/asTooltip.tsx"),
				C = n("./src/lib/copyToClipboard/index.ts"),
				w = n("./src/reddit/actions/governance/errorToast.ts"),
				N = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/actions/tooltip.ts"),
				I = n("./src/reddit/contexts/ApiContext.tsx"),
				P = n("./src/reddit/controls/Dropdown/index.tsx"),
				T = n("./src/reddit/controls/Dropdown/Row.tsx"),
				M = n("./src/reddit/endpoints/governance/crypto.ts"),
				A = n("./src/reddit/helpers/governance/ethereum.ts"),
				G = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				S = n("./src/reddit/models/Toast/index.ts"),
				L = n("./src/reddit/selectors/tooltip.ts"),
				B = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				D = n.n(B);
			const R = Object(_.a)(P.a),
				W = "BlockchainWalletInfo--SettingsMenu";
			class U extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(C.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(M.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
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
						className: D.a.publicAddressSection
					}, a.a.createElement("div", {
						className: D.a.publicAddress,
						title: o
					}, function(e, t) {
						switch (t) {
							case M.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(o, r)), a.a.createElement("div", {
						className: D.a.yourWalletAddress
					}, s.fbt._("Your Wallet Address", null, {
						hk: "3mvAs1"
					}), (t || c) && a.a.createElement("button", {
						className: D.a.settingsButton,
						title: s.fbt._("Wallet address settings", null, {
							hk: "3AlpJV"
						}),
						role: "menu",
						onClick: n,
						id: W
					}, a.a.createElement(G.a, {
						className: D.a.settingsIcon
					})), t && a.a.createElement(R, {
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
					})), c && a.a.createElement(R, {
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
					token: c.r,
					tokenName: c.p
				}),
				V = Object(i.b)(H, (e, t) => ({
					onGovernanceError: t => {
						Object(w.a)(e, t)
					},
					onOpenDropdown: () => e(Object(E.h)({
						tooltipId: W
					})),
					onWalletRemoved: () => {
						e(Object(p.h)({
							subredditId: t.subredditId
						})), e(Object(N.e)({
							kind: S.b.SuccessCommunityGreen,
							text: s.fbt._("Wallet removed successfully!", null, {
								hk: "3LDwnT"
							})
						}))
					}
				}));
			var q = Object(I.b)(V(U)),
				F = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Z = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				Y = n.n(Z);

			function Q(e) {
				return a.a.createElement("div", {
					className: Y.a.risk
				}, a.a.createElement("div", {
					className: Y.a.riskTitle
				}, a.a.createElement(F.a, {
					className: Y.a.alertIcon
				}), e.title), a.a.createElement("div", {
					className: Y.a.riskBody
				}, e.body))
			}
			var X = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				J = n("./src/reddit/components/Governance/TransactionModals/ClaimPointsModal/async.ts"),
				z = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				K = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				$ = n.n(K);
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
					}, a.a.createElement(X.a, {
						className: $.a.tokenIcon,
						amount: e,
						subredditId: t
					})), a.a.createElement("div", {
						className: $.a.caption
					}, ee._("Unclaimed Points", null, {
						hk: "31KZbZ"
					}))), a.a.createElement(z.a, {
						className: $.a.snooIcon
					})), a.a.createElement(g.f, {
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
				re = n.n(ne);
			class se extends a.a.PureComponent {
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
						claimablePoints: e,
						claimablePointsEnabled: t,
						className: n,
						customCryptoEnabled: o,
						distribution: i,
						isEthereumProvider: d,
						isLoggedIn: c,
						onOpenLoginModal: l,
						onOpenRegistrationModal: b,
						onOpenTransferModal: p,
						provider: f,
						subredditId: y,
						tokenDisplayConversion: h,
						tokenName: k,
						useCrypto: j,
						wallet: O
					} = this.props, _ = O && O.inactive && function(e, t) {
						const n = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(n / u.w)),
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
					}(O.inactive, k), C = O && O.publicAddress;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", {
						className: re.a.title
					}, k), a.a.createElement("div", {
						className: re.a.cellContainer
					}, O && oe(a.a.createElement("div", {
						className: re.a.tokenCell
					}, a.a.createElement(v.a, {
						className: re.a.token,
						subredditId: y
					}), Object(m.a)(Object(x.b)(O.amount, h))), s.fbt._("Your {tokenName}", [s.fbt._param("tokenName", k)], {
						hk: "2ylU3V"
					})), i && oe(Object(m.a)(Object(x.b)(i.totalAvailable, h)), s.fbt._("Total", null, {
						hk: "7GOJU"
					}))), _ && a.a.createElement(Q, {
						body: _.body,
						title: _.title
					}), a.a.createElement("div", {
						className: re.a.explanation
					}, s.fbt._("{tokenName} reward posters, commenters, and moderators for their contributions to the subreddit. They are distributed monthly and used to weight your vote on polls.", [s.fbt._param("tokenName", k)], {
						hk: "3BpDbS"
					})), o && f && a.a.createElement(q, {
						publicAddress: C,
						subredditId: y
					}), o && !C && d && a.a.createElement(g.f, {
						className: re.a.button,
						onClick: c ? b : l
					}, s.fbt._("register", null, {
						hk: "1HsZP4"
					})), t && e && a.a.createElement(te, {
						subredditId: y,
						claimablePoints: e
					}), O && !j && a.a.createElement(g.i, {
						className: re.a.button,
						onClick: p
					}, s.fbt._("send", null, {
						hk: "2fL0wd"
					})))
				}
			}

			function oe(e, t) {
				return a.a.createElement("div", {
					className: re.a.cell
				}, a.a.createElement("div", {
					className: re.a.cellTopLine
				}, e), a.a.createElement("div", {
					className: re.a.cellBottomLine
				}, t))
			}
			const ae = Object(l.c)({
				claimablePoints: j.i,
				claimablePointsEnabled: k.d.spClaimablePoints,
				customCryptoEnabled: k.d.spCustomCrypto,
				isEthereumProvider: c.f,
				isLoggedIn: O.H,
				provider: c.a,
				tokenName: c.p,
				tokenDisplayConversion: c.o,
				useCrypto: c.k
			});
			var ie = Object(i.b)(ae, e => ({
					onFetchMeData: () => e(Object(b.b)()),
					onOpenLoginModal: () => e(Object(f.g)()),
					onOpenRegistrationModal: () => e(Object(p.g)()),
					onOpenTransferModal: () => e(Object(p.f)())
				}))(Object(h.t)()(se)),
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
			var ve = Object(h.t)()(Object(i.b)(fe, (e, t) => ({
					onFilterProposals: () => e(Object(ue.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(h.E)(e.pageLayer) && e.proposals.length ? a.a.createElement("div", {
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
				he = n.n(ye);
			const ge = Object(l.c)({
				tokenName: c.p,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: c.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.default = Object(i.b)(ge)((function(e) {
				return a.a.createElement(d.a, {
					className: e.className,
					title: s.fbt._("Subreddit Points", null, {
						hk: "2a1wVI"
					})
				}, e.distribution ? a.a.createElement(o.Fragment, null, a.a.createElement(ie, {
					className: he.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && a.a.createElement(ve, {
					className: he.a.section,
					subredditId: e.subreddit.id
				})) : a.a.createElement("div", {
					className: he.a.loading
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
				tokenSymbol: c.q
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
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
				tokenDisplayConversion: u.o
			});
			t.a = Object(o.b)(p)((function(e) {
				return s.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className)
				}, s.a.createElement(c.a, {
					className: b.a.token,
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
			t.a = s
		},
		"./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
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
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
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
			async function i(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function d(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}))
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
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, r) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
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
						title: s()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: s()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.bb.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign({}, e, {
							body: r
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
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.bb.POST,
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
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
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
				const a = await n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers),
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
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.dividedBy(s).decimalPlaces(2).toString()
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
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => !0
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
				return h
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return k
			})), n.d(t, "o", (function() {
				return x
			})), n.d(t, "l", (function() {
				return j
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
				return E
			})), n.d(t, "k", (function() {
				return I
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
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
					const r = _(e, {
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
				m = (e, t) => {
					const n = j(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = j(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = j(e, t);
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
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				y = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				h = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || d
				},
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				k = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				x = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				O = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				_ = (e, t) => {
					const n = O(e, t);
					return n && n.walletProvider
				},
				C = (e, t) => {
					const n = _(e, t),
						r = O(e, t);
					return n && n.provider || r && r.provider
				},
				w = (e, t) => {
					const n = C(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				N = (e, t) => {
					const n = _(e, t),
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
				E = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = _(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const n = O(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-CommunityCard.a952f175b220c359010d.js.map