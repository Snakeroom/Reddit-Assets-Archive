// https://www.redditstatic.com/desktop2x/reddit-components-Governance-CommunityCard.b3de5a6c14f2faa4fb82.js
// Retrieved at 3/10/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
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
			var s = n("./src/app/strings/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				f = n("./src/reddit/actions/governance/constants.ts"),
				y = n("./src/reddit/actions/governance/errorToast.ts");
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "j", (function() {
				return D
			})), n.d(t, "c", (function() {
				return R
			}));
			const j = Object(r.a)(f.b),
				x = Object(r.a)(f.c),
				O = Object(r.a)(f.d),
				h = Object(r.a)(f.e),
				k = Object(r.a)(f.f),
				C = (Object(r.a)(f.g), Object(r.a)(f.h), Object(r.a)(f.i)),
				w = Object(r.a)(f.j),
				I = Object(r.a)(f.k),
				N = Object(r.a)(f.l),
				E = Object(r.a)(f.r),
				_ = Object(r.a)(f.s),
				P = Object(r.a)(f.t),
				T = Object(r.a)(f.u),
				A = Object(r.a)(f.v),
				M = Object(r.a)(f.w),
				G = Object(r.a)(f.x),
				S = Object(r.a)(f.y),
				L = (e, t) => async (n, s, r) => {
					let o, {
							apiContext: a,
							gqlContext: c
						} = r,
						d = s().polls.models[e];
					if (n(I({
							pollId: e
						})), (o = d.type === b.a.GA ? await Object(u.c)(c(), e, t) : await Object(u.b)(a(), d.subredditId, e, t)).ok) {
						if (d.type === b.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(k({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(N(o.body));
						const r = s();
						if ((d = r.polls.models[e]) && Object(b.d)(d)) {
							const {
								postId: e
							} = d, t = r.posts.models[e];
							t && t.voteState === v.a.notVoted && n(Object(i.X)(e))
						}
					} else n(w({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(y.a)(n, o.error || o.errors[0].messsage)
				}, B = (e, t) => async (n, r, i) => {
					let {
						apiContext: u
					} = i;
					n(P());
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
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: m
					}));
					if (b.ok) {
						const i = r().user.language;
						n(T(Object.assign({}, b.body, {
							subredditId: e.subredditId
						}))), n(Object(c.e)({
							kind: p.b.SuccessCommunity,
							text: Object(s.a)(i, "gov.transferSuccess", {
								amount: Object(o.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(r(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(a.f)())
					} else n(E({
						error: b.error
					})), Object(y.a)(n, b.error)
				}, D = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(M());
					const o = await Object(m.a)(r(), e);
					o.ok ? t(G(o.body)) : t(A({
						error: o.error
					}))
				}, R = (e, t) => async (n, r, o) => {
					let {
						apiContext: a
					} = o;
					n(O());
					const i = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(a(), e, t);
					if (i.ok) {
						n(G({
							[t]: i.body
						}));
						const o = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(c.e)({
							kind: p.b.SuccessCommunity,
							text: Object(s.a)(r().user.language, o, {
								tokenName: Object(g.o)(r(), {
									subredditId: t
								})
							})
						}))
					} else Object(y.a)(n, i.error)
				}
		},
		"./src/reddit/components/Governance/ClaimPointsModal/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~reddit-components-Governance-ClaimPointsModal"), n.e("reddit-components-Governance-ClaimPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
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
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				d = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				u = n("./src/app/strings/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/prettyPrintNumber/index.ts"),
				p = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				v = n("./src/reddit/actions/governance/index.ts"),
				g = n("./src/reddit/actions/login.ts"),
				f = n("./src/reddit/components/Governance/Token/index.tsx"),
				y = n("./src/reddit/components/Governance/WalletRegistration/Common/pageReload.ts"),
				j = n("./src/reddit/contexts/PageLayer/index.tsx"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/endpoints/governance/crypto.ts"),
				h = n("./src/reddit/featureFlags/index.ts"),
				k = n("./src/reddit/helpers/governance/tokens.ts"),
				C = n("./src/reddit/i18n/components.tsx");
			! function(e) {
				e.Initial = "initial_distribution", e.Mod = "moderator_election"
			}(s || (s = {}));
			var w = n("./src/reddit/selectors/economics.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				N = n("./src/higherOrderComponents/asTooltip.tsx"),
				E = n("./src/lib/copyToClipboard/index.ts"),
				_ = n("./src/reddit/actions/governance/errorToast.ts"),
				P = n("./src/reddit/actions/toaster.ts"),
				T = n("./src/reddit/actions/tooltip.ts"),
				A = n("./src/reddit/contexts/ApiContext.tsx"),
				M = n("./src/reddit/controls/Dropdown/index.tsx"),
				G = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./src/reddit/helpers/governance/ethereum.ts"),
				L = n("./src/reddit/icons/svgs/Settings/index.tsx"),
				B = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/tooltip.ts"),
				R = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/BlockchainWalletInfo/index.m.less"),
				W = n.n(R);
			const U = Object(N.a)(M.a),
				H = "BlockchainWalletInfo--SettingsMenu";
			class V extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onCopyToClipboard = () => {
						Object(E.a)(this.props.publicAddress || "")
					}, this.onRemoveMyWallet = async () => {
						const e = await Object(O.b)(this.props.apiContext(), this.props.provider, this.props.publicAddress);
						e.ok ? this.props.onWalletRemoved() : this.props.onGovernanceError(e.error)
					}
				}
				render() {
					const {
						dropdownIsOpen: e,
						onOpenDropdown: t,
						provider: n,
						publicAddress: s,
						token: r,
						tokenName: a
					} = this.props;
					if (!s) return null;
					const i = n === O.a.Ethereum || n === O.a.Rinkeby,
						c = n === O.a.Stellar;
					return o.a.createElement("div", {
						className: W.a.publicAddressSection
					}, o.a.createElement("div", {
						className: W.a.publicAddress,
						title: s
					}, function(e, t) {
						switch (t) {
							case O.a.Stellar:
								return e.slice(0, 6) + "..." + e.slice(e.length - 6);
							default:
								return e
						}
					}(s, n)), o.a.createElement("div", {
						className: W.a.yourWalletAddress
					}, o.a.createElement(C.c, null, "Your Wallet Address"), (i || c) && o.a.createElement("button", {
						className: W.a.settingsButton,
						title: Object(d.c)("Wallet address settings"),
						role: "menu",
						onClick: t,
						id: H
					}, o.a.createElement(L.a, {
						className: W.a.settingsIcon
					})), i && o.a.createElement(U, {
						tooltipId: H,
						isOpen: e,
						renderContentsHidden: !0
					}, o.a.createElement(G.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}), n && o.a.createElement(G.b, {
						displayText: Object(d.c)("Remove My Wallet"),
						onClick: this.onRemoveMyWallet
					}), r && o.a.createElement(G.b, {
						displayText: Object(d.c)("Track ".concat(Object(d.b)("tokenName", a), " in MetaMask")),
						onClick: () => Object(S.i)(r)
					})), c && o.a.createElement(U, {
						tooltipId: H,
						isOpen: e,
						renderContentsHidden: !0
					}, o.a.createElement(G.b, {
						displayText: Object(d.c)("Copy My Wallet Address"),
						onClick: this.onCopyToClipboard
					}))))
				}
			}
			const q = Object(i.c)({
					dropdownIsOpen: Object(D.b)(H),
					provider: l.a,
					token: l.q,
					tokenName: l.o
				}),
				Z = Object(a.b)(q, (e, t) => ({
					onGovernanceError: t => {
						Object(_.a)(e, t)
					},
					onOpenDropdown: () => e(Object(T.h)({
						tooltipId: H
					})),
					onWalletRemoved: () => {
						e(Object(v.j)({
							subredditId: t.subredditId
						})), e(Object(P.e)({
							kind: B.b.SuccessCommunityGreen,
							text: Object(d.c)("Wallet removed successfully!")
						}))
					}
				}));
			var F = Object(A.b)(Z(V)),
				X = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Q = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/Risk/index.m.less"),
				Y = n.n(Q);

			function z(e) {
				return o.a.createElement("div", {
					className: Y.a.risk
				}, o.a.createElement("div", {
					className: Y.a.riskTitle
				}, o.a.createElement(X.a, {
					className: Y.a.alertIcon
				}), e.title), o.a.createElement("div", {
					className: Y.a.riskBody
				}, e.body))
			}
			var J = n("./src/reddit/components/Governance/ClaimPointsModal/async.ts"),
				K = n("./src/reddit/components/Governance/TokenAmount/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				ee = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/UnclaimedPoints/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class se extends o.a.Component {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: te.a.container
					}, o.a.createElement("div", {
						className: te.a.content
					}, o.a.createElement("div", {
						className: te.a.title
					}, ne._("You Have Unclaimed Points", null, {
						hk: "3sFlm8"
					})), o.a.createElement("div", {
						className: te.a.amount
					}, o.a.createElement(K.a, {
						className: te.a.tokenIcon,
						amount: e,
						subredditId: t
					})), o.a.createElement("div", {
						className: te.a.caption
					}, ne._("Unclaimed Points", null, {
						hk: "31KZbZ"
					}))), o.a.createElement($.a, {
						className: te.a.snooIcon
					})), o.a.createElement(x.f, {
						className: te.a.claimButton,
						onClick: () => this.setState({
							modalVisible: !0
						})
					}, ne._("Claim My Points", null, {
						hk: "1QwLXK"
					})), this.state.modalVisible && o.a.createElement(J.a, {
						subredditId: t,
						onClose: () => this.setState({
							modalVisible: !1
						})
					}))
				}
			}
			var re = n("./src/reddit/components/Governance/CommunityCard/CommunityTokens/index.m.less"),
				oe = n.n(re);
			class ae extends o.a.PureComponent {
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
						distribution: r,
						isLoggedIn: a,
						language: i,
						onOpenLoginModal: c,
						onOpenRegistrationModal: d,
						onOpenTransferModal: l,
						provider: p,
						subredditId: v,
						tokenDisplayConversion: g,
						tokenName: y,
						useCrypto: j,
						wallet: h
					} = this.props, w = h && h.inactive && function(e, t, n) {
						const r = e.actionScheduledAt - Date.now(),
							o = Math.max(1, Math.floor(r / m.x)),
							a = 1 !== o ? "gov.pointsDecay.inactive.time.plural" : "gov.pointsDecay.inactive.time.singular",
							i = Object(u.a)(t, a, {
								numDays: o
							});
						switch (e.reason) {
							case s.Initial:
								return {
									title: Object(u.a)(t, "gov.pointsDecay.inactive.title", {
										tokenName: n
									}), body: Object(u.a)(t, "gov.pointsDecay.inactive.body", {
										time: i,
										tokenName: n
									})
								};
							case s.Mod:
								return {
									title: Object(u.a)(t, "gov.pointsDecay.election.title"), body: Object(u.a)(t, "gov.pointsDecay.election.body", {
										time: i,
										tokenName: n
									})
								}
						}
					}(h.inactive, i, y), I = h && h.publicAddress, N = p === O.a.Ethereum || p === O.a.Rinkeby;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", {
						className: oe.a.title
					}, y), o.a.createElement("div", {
						className: oe.a.cellContainer
					}, h && ie(o.a.createElement("div", {
						className: oe.a.tokenCell
					}, o.a.createElement(f.a, {
						className: oe.a.token,
						subredditId: v
					}), Object(b.a)(Object(k.b)(h.amount, g))), Object(u.a)(i, "sidebar.gov.yourTokens", {
						tokenName: y
					})), r && ie(Object(b.a)(Object(k.b)(r.totalAvailable, g)), Object(u.a)(i, "sidebar.gov.tokensIssued"))), w && o.a.createElement(z, {
						body: w.body,
						title: w.title
					}), o.a.createElement("div", {
						className: oe.a.explanation
					}, Object(u.a)(i, "sidebar.gov.tokenExplanation", {
						tokenName: y
					})), !t && p && o.a.createElement(F, {
						publicAddress: I,
						subredditId: v
					}), !t && p && !I && N && o.a.createElement(x.f, {
						className: oe.a.button,
						onClick: a ? d : c
					}, o.a.createElement(C.c, null, "register")), t && e && o.a.createElement(se, {
						subredditId: v,
						claimablePoints: e
					}), h && !j && o.a.createElement(x.i, {
						className: oe.a.button,
						onClick: l
					}, o.a.createElement(C.c, null, "send")))
				}
			}

			function ie(e, t) {
				return o.a.createElement("div", {
					className: oe.a.cell
				}, o.a.createElement("div", {
					className: oe.a.cellTopLine
				}, e), o.a.createElement("div", {
					className: oe.a.cellBottomLine
				}, t))
			}
			const ce = Object(i.c)({
				claimablePoints: w.h,
				claimablePointsEnabled: h.d.spClaimablePoints,
				isLoggedIn: I.G,
				provider: l.a,
				tokenName: l.o,
				tokenDisplayConversion: l.n,
				language: e => e.user.language,
				useCrypto: l.r
			});
			var de = Object(a.b)(ce, e => ({
					onFetchMeData: () => e(Object(p.a)()),
					onOpenLoginModal: () => e(Object(g.e)()),
					onOpenRegistrationModal: () => e(Object(v.i)()),
					onOpenTransferModal: () => e(Object(v.h)())
				}))(Object(j.t)()(ae)),
				le = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.array.sort.js"), n("./node_modules/react-router-dom/esm/react-router-dom.js")),
				ue = n("./src/lib/classNames/index.ts"),
				me = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				be = n("./src/reddit/actions/subreddit.ts"),
				pe = n("./src/reddit/components/Governance/CommunityCard/LatestProposals/index.m.less"),
				ve = n.n(pe);
			const ge = Object(i.c)({
				proposals: (e, t) => Object.keys(e.polls.models).map(t => e.polls.models[t]).filter(e => e.subredditId === t.subredditId).sort((e, t) => e.createdAt > t.createdAt ? -1 : e.createdAt < t.createdAt ? 1 : 0).map(t => e.posts.models[t.postId]).filter(Boolean).slice(0, 5)
			});
			var fe = Object(j.t)()(Object(a.b)(ge, (e, t) => ({
					onFilterProposals: () => e(Object(be.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					return Object(j.E)(e.pageLayer) && e.proposals.length ? o.a.createElement("div", {
						className: Object(ue.a)(e.className, ve.a.container)
					}, o.a.createElement("div", {
						className: ve.a.title
					}, o.a.createElement(C.c, null, "Latest Polls")), e.proposals.map(e => o.a.createElement(le.a, {
						className: ve.a.link,
						key: e.permalink,
						title: e.title,
						to: Object(me.a)(e.permalink)
					}, e.title)), o.a.createElement("a", {
						className: ve.a.showAll,
						onClick: e.onFilterProposals
					}, o.a.createElement(C.c, null, "show all"))) : null
				}))),
				ye = n("./src/reddit/components/Governance/CommunityCard/index.m.less"),
				je = n.n(ye);
			const xe = Object(i.c)({
				tokenName: l.o,
				distribution: (e, t) => e.subreddits.gov.distributions[t.subredditId],
				wallet: l.g,
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			t.default = Object(a.b)(xe)((function(e) {
				return o.a.createElement(c.a, {
					className: e.className,
					title: Object(d.c)("Subreddit Points")
				}, e.distribution ? o.a.createElement(r.Fragment, null, o.a.createElement(de, {
					className: je.a.section,
					distribution: e.distribution,
					subredditId: e.subredditId,
					wallet: e.wallet
				}), e.subreddit && o.a.createElement(fe, {
					className: je.a.section,
					subredditId: e.subreddit.id
				})) : o.a.createElement("div", {
					className: je.a.loading
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
				c = n("./src/reddit/selectors/gov.ts");
			const d = Object(a.c)({
				tokenSymbol: c.p
			});
			t.a = Object(o.b)(d)((function(e) {
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
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/components/Governance/Token/index.tsx"),
				l = n("./src/reddit/helpers/governance/tokens.ts"),
				u = n("./src/reddit/selectors/gov.ts"),
				m = n("./src/reddit/components/Governance/TokenAmount/index.m.less"),
				b = n.n(m);
			const p = Object(a.c)({
				tokenDisplayConversion: u.n
			});
			t.a = Object(o.b)(p)((function(e) {
				return r.a.createElement("div", {
					className: Object(i.a)(b.a.container, e.className)
				}, r.a.createElement(d.a, {
					className: b.a.token,
					subredditId: e.subredditId
				}), Object(c.a)(Object(l.b)(e.amount, e.tokenDisplayConversion)), e.additionalText || null)
			}))
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
				return c
			})), n.d(t, "b", (function() {
				return d
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
			async function c(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function d(e, t, n) {
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
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
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
				return Object(l.a)(Object(c.a)(e, [d.a]), {
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
					method: r.cb.GET
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
					method: r.cb.POST,
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
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
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

			function c() {
				const e = r();
				if (!e) throw new Error("Please install a web3 provider, such as MetaMask");
				return a() ? Promise.resolve() : e.enable()
			}
			const d = 4001;
			async function l(e, t, s, o) {
				const [a, i] = await Promise.all([n.e("vendors~CryptoLibEthers").then(n.t.bind(null, "./node_modules/ethers/dist/ethers.min.js", 7)).then(e => e.ethers), t.then(e => e.abi)]);
				await c();
				const d = new a.providers.Web3Provider(r()).getSigner(),
					l = new a.Contract(e, i, d),
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
						hexlify: c,
						hexZeroPad: d,
						toUtf8Bytes: b
					} = a.utils,
					p = i(s).add(o),
					v = m,
					g = "0x" + [c(1)].concat([v, i(r), i(o)].map(c).map(e => d(e, 32))).concat(c(b(""))).map(e => e.substr(2)).join("");
				return async function(e, t, n, s) {
					return l(e, Promise.resolve(u), "send", [t, n, s])
				}(e, t, p.toString(), g)
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
				if (t.toLowerCase() !== r.toLowerCase()) throw new Error(Object(s.c)("Please select your registered address in MetaMask: ") + t);
				return l(e, Promise.resolve(p), "subscribe", [t, n])
			}

			function g(e) {
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
								message: Object(s.c)("No signature returned from ethereum provider.")
							})
						}
					})
				})
			}

			function f(e) {
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
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				d = e => i.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => i.has((Object(o.e)(e) || "").toLowerCase()) || c.has((Object(o.e)(e) || "").toLowerCase()) && Object(r.c)(e, {
					experimentEligibilitySelector: a.G,
					experimentName: s.cb
				}) === s.jb.Enabled
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
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "p", (function() {
				return x
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "l", (function() {
				return k
			})), n.d(t, "s", (function() {
				return C
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "f", (function() {
				return I
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "r", (function() {
				return _
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = C(e, {
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
					const n = h(e, t);
					if (n) return n.mainHeader
				},
				b = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				p = (e, t) => {
					const n = h(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : d
				},
				v = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = o.d.spPolls(e) || o.d.spKarmaPoints(e),
						s = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (s) {
						const e = !!s.polls && !1 === s.polls.canCreate;
						return n && !e
					}
					return n
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				O = (e, t) => {
					const n = N(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				h = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				k = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				C = (e, t) => {
					const n = k(e, t);
					return n && n.walletProvider
				},
				w = (e, t) => {
					const n = C(e, t),
						s = k(e, t);
					return n && n.provider || s && s.provider
				},
				I = (e, t) => {
					const n = w(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby
				},
				N = (e, t) => {
					const n = C(e, t),
						s = w(e, t);
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
				E = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = C(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				_ = (e, t) => {
					const n = k(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-CommunityCard.b3de5a6c14f2faa4fb82.js.map