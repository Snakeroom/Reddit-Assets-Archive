// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.fc8fe310c71d6e949fd1.js
// Retrieved at 3/14/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/bignumber.js/bignumber.js");

			function a(e, t) {
				const n = new s.BigNumber(e),
					a = new s.BigNumber(t),
					r = new s.BigNumber(n.dividedBy(a)),
					o = new s.BigNumber("100").multipliedBy(r);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/app/strings/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/gov.ts"),
				f = n("./src/reddit/actions/governance/constants.ts"),
				j = n("./src/reddit/actions/governance/errorToast.ts");
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "c", (function() {
				return U
			}));
			const O = Object(a.a)(f.b),
				x = Object(a.a)(f.c),
				h = Object(a.a)(f.d),
				y = Object(a.a)(f.e),
				I = Object(a.a)(f.f),
				k = (Object(a.a)(f.g), Object(a.a)(f.h), Object(a.a)(f.i)),
				N = Object(a.a)(f.j),
				C = Object(a.a)(f.k),
				_ = Object(a.a)(f.l),
				E = Object(a.a)(f.r),
				T = Object(a.a)(f.s),
				w = Object(a.a)(f.t),
				P = Object(a.a)(f.u),
				A = Object(a.a)(f.v),
				M = Object(a.a)(f.w),
				G = Object(a.a)(f.x),
				B = Object(a.a)(f.y),
				D = (e, t) => async (n, s, a) => {
					let r, {
							apiContext: o,
							gqlContext: i
						} = a,
						d = s().polls.models[e];
					if (n(C({
							pollId: e
						})), (r = d.type === b.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(o(), d.subredditId, e, t)).ok) {
						if (d.type === b.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(I({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(_(r.body));
						const a = s();
						if ((d = a.polls.models[e]) && Object(b.d)(d)) {
							const {
								postId: e
							} = d, t = a.posts.models[e];
							t && t.voteState === g.a.notVoted && n(Object(c.X)(e))
						}
					} else n(N({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(j.a)(n, r.error || r.errors[0].messsage)
				}, R = (e, t) => async (n, a, c) => {
					let {
						apiContext: u
					} = c;
					n(w());
					const m = a().transfers.communityPoints.contentId || void 0,
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
						const c = a().user.language;
						n(P(Object.assign({}, b.body, {
							subredditId: e.subredditId
						}))), n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(s.a)(c, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(v.p)(a(), {
									subredditId: e.subredditId
								})
							})
						})), t && n(Object(o.f)())
					} else n(E({
						error: b.error
					})), Object(j.a)(n, b.error)
				}, S = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					t(M());
					const r = await Object(m.a)(a(), e);
					r.ok ? t(G(r.body)) : t(A({
						error: r.error
					}))
				}, U = (e, t) => async (n, a, r) => {
					let {
						apiContext: o
					} = r;
					n(h());
					const c = await
					function(e, t, n) {
						return Object(l.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(d.a.metaUrl, "/wallets/").concat(n, "/me")
						})
					}(o(), e, t);
					if (c.ok) {
						n(G({
							[t]: c.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						n(Object(i.e)({
							kind: p.b.SuccessCommunity,
							text: Object(s.a)(a().user.language, r, {
								tokenName: Object(v.p)(a(), {
									subredditId: t
								})
							})
						}))
					} else Object(j.a)(n, c.error)
				}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(d);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(c.f)()), n && n()
					}
				}
			})((function(e) {
				return a.a.createElement(i.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				i = n.n(c);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(i.a.container, e.className)
				}, a.a.createElement("div", {
					className: i.a.title
				}, e.children), a.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				button: "_3e_LQKpHZ59nkcY3i4GvmR",
				container: "_vu3nmkuhyRAROziDIRy9",
				loadingIcon: "_3qu6rrPqBKfB-FCSjTniKm",
				token: "_3u-_nTs7cQyDAoXI6PIkMB"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				container: "wq86s3a6P95u_EmgF7Iwt",
				display: "_2rGKpoOTeUYlwX9BCBHRcM",
				displayActive: "UnemO29PJbJkQStfFHQ6M",
				input: "_77uSa0pRNDpjP1fYtjJb2",
				token: "_1eUB0RLG8XhOTyIdmLDNh3"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3gP9rdWJ8fhSWlm0CTLmHy",
				title: "_17rQcY4kHyOD8jzXc9afok",
				body: "_2BRUg-rtUYtV5-tAcE-MzB",
				description: "_2qbo2r3lfel4sxDe95sp-R",
				button: "_3a2JCQwYZ_OzZ7pA2D25cP",
				disclaimer: "hpRL-2MgeJZBIQopSRDbz"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3IiquiUxUtXOyp-zOO6NRj",
				controls: "YWcjXTgX4qLhEK5VzWtZN",
				explanation: "_1HZDNpr5Mwq2PvYQAr8Vya",
				inputContainer: "_2o6aRpMmIwjIyBzKvAX3Iu",
				recipientContainer: "_9_VNXefTbTzw6yHVkranI",
				recipient: "_3qLUFjBZ3aszzs7hVEmIaj",
				title: "_2gmTTR14-GI7RpG5N8IfYY"
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/app/strings/index.ts"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/governance/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/governance/tokens.ts"),
				m = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/bignumber.js/bignumber.js"),
				p = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/prettyPrintNumber/index.ts"),
				v = n("./src/reddit/components/Governance/Token/index.tsx"),
				f = n("./src/reddit/constants/colors.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/endpoints/governance/crypto.ts"),
				h = n("./src/reddit/helpers/governance/stellar.ts"),
				y = n("./src/reddit/i18n/components.tsx"),
				I = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				k = n.n(I);
			const N = Object(o.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: m.a,
				language: e => e.user.language,
				tokenDisplayConversion: m.o,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: m.r,
				wallet: m.g
			});
			var C = Object(r.b)(N)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						n = new b.BigNumber(e.amount || "0"),
						s = new b.BigNumber(t),
						r = s.isGreaterThanOrEqualTo(n),
						o = e.submissionEnabled && !s.isZero() && r;
					return a.a.createElement("div", {
						className: Object(p.a)(k.a.container, e.className)
					}, a.a.createElement("div", {
						className: k.a.available
					}, a.a.createElement("div", null, a.a.createElement(y.c, null, "Transferable")), a.a.createElement(v.a, {
						grey: !0,
						className: k.a.token,
						subredditId: e.subredditId
					}), a.a.createElement("div", {
						style: {
							color: r ? void 0 : f.a.warning
						}
					}, Object(g.a)(Object(u.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === x.a.Stellar && o ? a.a.createElement(j.g, {
						redditStyle: !0,
						className: k.a.button,
						href: Object(h.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(u.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? "t|".concat(e.contentId) : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, Object(c.a)(e.language, "gov.sendCta")) : a.a.createElement(j.f, {
						disabled: !o,
						className: k.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? a.a.createElement(O.a, {
						className: k.a.loadingIcon,
						sizePx: 20
					}) : Object(c.a)(e.language, "gov.sendCta")))
				})),
				_ = n("./src/lib/currency/cleanNumber/index.ts"),
				E = n("./src/reddit/constants/keycodes.ts"),
				T = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				w = n.n(T);

			function P(e) {
				const t = e.amount || "0",
					n = !new b.BigNumber(t).isZero(),
					s = Object(g.a)(t);
				return a.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(p.a)(w.a.container, e.className)
				}, a.a.createElement(v.a, {
					className: w.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), a.a.createElement("div", {
					className: Object(p.a)(w.a.display, {
						[w.a.displayActive]: n
					}),
					style: {
						fontSize: A(s)
					}
				}, Object(g.a)(s)), a.a.createElement("input", {
					autoFocus: !0,
					className: w.a.input,
					maxLength: 9,
					style: {
						fontSize: A(s)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(_.a)(t.currentTarget.value)),
					onClick: M,
					onFocus: M,
					onKeyDown: e => {
						e.key !== E.b.ArrowLeft && e.key !== E.b.ArrowRight && e.key !== E.b.ArrowUp && e.key !== E.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function A(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function M(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var G = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.tsx"),
				B = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function D(e) {
				const {
					tokenName: t
				} = e;
				return a.a.createElement(B.a, {
					className: e.className
				}, Object(c.a)(e.language, "gov.transferModalTitle", {
					tokenName: t
				}))
			}
			var R = n("./src/lib/addQueryParams/index.ts"),
				S = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				U = n.n(S);
			class q extends a.a.PureComponent {
				render() {
					const {
						contentId: e,
						language: t,
						publicAddress: n,
						recipient: s,
						subreddit: r,
						tokenName: o
					} = this.props;
					if (!e || !n) return null;
					const c = Object(R.a)("https://daonuts.org/r/".concat(r.name), {
						action: "tip",
						contentId: e,
						recipient: s,
						address: n
					});
					return a.a.createElement("div", {
						className: U.a.container
					}, a.a.createElement(D, {
						className: U.a.title,
						language: t,
						subredditId: r.id,
						tokenName: o
					}), a.a.createElement("div", {
						className: U.a.body
					}, a.a.createElement("div", {
						className: U.a.description
					}, a.a.createElement(y.c, null, "Tipping with Donuts is now managed on Daonuts.org.")), a.a.createElement(j.g, {
						redditStyle: !0,
						className: U.a.button,
						href: c,
						target: "_blank"
					}, a.a.createElement(y.c, null, "tip on daonuts.org")), a.a.createElement("div", {
						className: U.a.disclaimer
					}, a.a.createElement(y.c, null, "Daonuts.org is not affiliated with Reddit."))))
				}
			}
			const L = Object(o.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var z = Object(r.b)(L)(q),
				V = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				Y = n.n(V);
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayAmount: void 0,
						recipient: void 0,
						recipientIsValid: !1,
						tokenAmount: void 0
					}, this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(u.a)(e, this.props.tokenDisplayConversion)
					}), this.handleRecipientChange = (e, t) => this.setState({
						recipient: e,
						recipientIsValid: t
					})
				}
				render() {
					const {
						initialRecipient: e,
						isEthereumProvider: t,
						language: n,
						onTransferPoints: s,
						subreddit: r,
						tokenName: o,
						useCrypto: i
					} = this.props;
					return r ? i && t ? a.a.createElement(z, {
						recipient: e,
						language: n,
						subreddit: r,
						tokenName: o
					}) : a.a.createElement("div", {
						className: Y.a.container
					}, a.a.createElement(D, {
						className: Y.a.title,
						language: n,
						subredditId: r.id,
						tokenName: o
					}), a.a.createElement("div", {
						className: Y.a.inputContainer
					}, a.a.createElement(P, {
						amount: this.state.displayAmount,
						subredditId: r.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), i ? a.a.createElement("div", {
						className: Y.a.explanation
					}, "Transfer to ", e) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Y.a.explanation
					}, Object(c.a)(n, "gov.explanation", {
						tokenName: o
					})), a.a.createElement("div", {
						className: Y.a.recipientContainer
					}, a.a.createElement(G.a, {
						className: Y.a.recipient,
						initialUsername: e,
						tabIndex: 2,
						onChange: this.handleRecipientChange
					}))), a.a.createElement(C, {
						amount: this.state.tokenAmount,
						className: Y.a.controls,
						submissionEnabled: !!this.state.tokenAmount && (this.state.recipientIsValid || !!this.props.publicAddress),
						subredditId: r.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && r && s(this.state.tokenAmount, this.state.recipient, r.id)
						}
					})) : null
				}
			}
			const X = Object(o.c)({
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(m.f)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					language: e => e.user.language,
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: l.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(m.o)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					tokenName: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(m.p)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					useCrypto: (e, t) => {
						const n = Object(l.q)(e, t);
						return Object(m.k)(e, {
							subredditId: n ? n.id : void 0
						})
					}
				}),
				Z = Object(r.b)(X, e => ({
					onTransferPoints: (t, n, s) => e(Object(d.g)({
						amount: t,
						recipient: n,
						subredditId: s
					}, !0))
				})),
				K = Object(l.t)();
			t.default = Object(i.a)(K(Z(H)))
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
				a = n.n(s),
				r = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const m = (e, t, n) => Object(c.a)(e, Object.assign({}, o, {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function b(e, t) {
				return Object(l.a)(Object(i.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: a()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: a()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				a = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: a.cb.GET
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

			function c(e, t) {
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: a.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function s(e, t) {
				return "web+stellar:".concat(e, "?") + Object.entries(t).map(e => {
					let [t, n] = e;
					return t + "=" + encodeURIComponent(n)
				}).join("&")
			}

			function a(e, t, n, a, r) {
				const o = {
					destination: n,
					amount: a,
					asset_code: t,
					asset_issuer: e
				};
				return r && (o.memo = r), s("pay", o)
			}

			function r(e, t, n) {
				return s("pay", {
					destination: e,
					amount: n,
					asset_code: t,
					asset_issuer: e,
					memo: "o|membership"
				})
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=GovernanceTransferPointsModal.fc8fe310c71d6e949fd1.js.map