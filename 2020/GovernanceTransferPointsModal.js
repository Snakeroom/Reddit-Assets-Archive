// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.f13d6f0f3aeec33eb8a6.js
// Retrieved at 5/5/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
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
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "g", (function() {
				return R
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");
			var u = n("./src/reddit/endpoints/governance/poll.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				j = n("./src/reddit/actions/governance/constants.ts"),
				v = n("./src/reddit/actions/governance/errorToast.ts");
			const h = Object(a.a)(j.b),
				x = Object(a.a)(j.c),
				O = Object(a.a)(j.d),
				k = Object(a.a)(j.e),
				y = Object(a.a)(j.f),
				I = (Object(a.a)(j.g), Object(a.a)(j.h), Object(a.a)(j.i)),
				N = Object(a.a)(j.j),
				_ = Object(a.a)(j.k),
				T = Object(a.a)(j.l),
				C = Object(a.a)(j.r),
				P = Object(a.a)(j.s),
				w = Object(a.a)(j.t),
				E = Object(a.a)(j.u),
				A = Object(a.a)(j.v),
				G = Object(a.a)(j.w),
				M = Object(a.a)(j.x),
				B = Object(a.a)(j.y),
				D = (e, t) => async (n, s, a) => {
					let r, {
							apiContext: o,
							gqlContext: c
						} = a,
						d = s().polls.models[e];
					if (n(_({
							pollId: e
						})), (r = d.type === b.a.GA ? await Object(u.c)(c(), e, t) : await Object(u.b)(o(), d.subredditId, e, t)).ok) {
						if (d.type === b.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							n(y({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(T(r.body));
						const a = s();
						if ((d = a.polls.models[e]) && Object(b.d)(d)) {
							const {
								postId: e
							} = d, t = a.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.ab)(e))
						}
					} else n(N({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(v.a)(n, r.error || r.errors[0].messsage)
				}, R = (e, t) => async (n, a, i) => {
					let {
						apiContext: u
					} = i;
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
					b.ok ? (n(E(Object.assign({}, b.body, {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(r.a)(e.amount)), s.fbt._param("tokenName", Object(g.p)(a(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(C({
						error: b.error
					})), Object(v.a)(n, b.error))
				}, U = e => async (t, n, s) => {
					let {
						apiContext: a
					} = s;
					t(G());
					const r = await Object(m.a)(a(), e);
					r.ok ? t(M(r.body)) : t(A({
						error: r.error
					}))
				}, S = (e, t) => async (n, a, r) => {
					let {
						apiContext: o
					} = r;
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
					}(o(), e, t);
					i.ok ? (n(M({
						[t]: i.body
					})), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: e ? s.fbt._("You have successfully opted out of receiving {tokenName}", [s.fbt._param("tokenName", Object(g.p)(a(), {
							subredditId: t
						}))], {
							hk: "2GTi3T"
						}) : s.fbt._("You have opted into receiving {tokenName}", [s.fbt._param("tokenName", Object(g.p)(a(), {
							subredditId: t
						}))], {
							hk: "2Xx98N"
						})
					}))) : Object(v.a)(n, i.error)
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
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(d);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return a.a.createElement(c.a, {
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
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function d(e) {
				return a.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, a.a.createElement("div", {
					className: c.a.title
				}, e.children), a.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less": function(e, t, n) {
			e.exports = {
				available: "_34YZ1BYomlSrsiAkyBzh9v",
				centeredRow: "_25_AV7ckrxzh-D5xOTcE3O",
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
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/actions/governance/index.ts"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/helpers/governance/tokens.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./node_modules/bignumber.js/bignumber.js"),
				b = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/prettyPrintNumber/index.ts"),
				f = n("./src/reddit/components/Governance/Token/index.tsx"),
				g = n("./src/reddit/constants/colors.ts"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = n("./src/reddit/endpoints/governance/crypto.ts"),
				x = n("./src/reddit/helpers/governance/stellar.ts"),
				O = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				k = n.n(O),
				y = n("./node_modules/fbt/lib/FbtPublic.js");
			const I = Object(u.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: l.a,
				language: e => e.user.language,
				tokenDisplayConversion: l.o,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: l.r,
				wallet: l.g
			});
			var N = Object(r.b)(I)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						n = new m.BigNumber(e.amount || "0"),
						s = new m.BigNumber(t),
						r = s.isGreaterThanOrEqualTo(n),
						o = e.submissionEnabled && !s.isZero() && r;
					return a.a.createElement("div", {
						className: Object(b.a)(k.a.container, e.className)
					}, a.a.createElement("div", {
						className: k.a.available
					}, a.a.createElement("div", null, y.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), a.a.createElement(f.a, {
						grey: !0,
						className: k.a.token,
						subredditId: e.subredditId
					}), a.a.createElement("div", {
						style: {
							color: r ? void 0 : g.a.warning
						}
					}, Object(p.a)(Object(d.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === h.a.Stellar && o ? a.a.createElement(j.g, {
						redditStyle: !0,
						className: k.a.button,
						href: Object(x.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(d.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? "t|".concat(e.contentId) : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, y.fbt._("send", null, {
						hk: "oTFGp"
					})) : a.a.createElement(j.f, {
						disabled: !o,
						className: k.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? a.a.createElement(v.a, {
						className: k.a.loadingIcon,
						sizePx: 20
					}) : y.fbt._("send", null, {
						hk: "oTFGp"
					})))
				})),
				_ = n("./src/lib/currency/cleanNumber/index.ts"),
				T = n("./src/reddit/constants/keycodes.ts"),
				C = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				P = n.n(C);

			function w(e) {
				const t = e.amount || "0",
					n = !new m.BigNumber(t).isZero(),
					s = Object(p.a)(t);
				return a.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(b.a)(P.a.container, e.className)
				}, a.a.createElement(f.a, {
					className: P.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), a.a.createElement("div", {
					className: Object(b.a)(P.a.display, {
						[P.a.displayActive]: n
					}),
					style: {
						fontSize: E(s)
					}
				}, Object(p.a)(s)), a.a.createElement("input", {
					autoFocus: !0,
					className: P.a.input,
					maxLength: 9,
					style: {
						fontSize: E(s)
					},
					tabIndex: e.tabIndex,
					value: e.amount,
					onChange: t => e.onChange(Object(_.a)(t.currentTarget.value)),
					onClick: A,
					onFocus: A,
					onKeyDown: e => {
						e.key !== T.b.ArrowLeft && e.key !== T.b.ArrowRight && e.key !== T.b.ArrowUp && e.key !== T.b.ArrowDown || e.preventDefault()
					}
				}))
			}

			function E(e) {
				const t = e.length;
				return t > 7 ? 50 : t > 6 ? 56 : t > 5 ? 60 : t > 4 ? 64 : t > 1 ? 80 : 96
			}

			function A(e) {
				const t = e.currentTarget.value.length;
				e.currentTarget.selectionStart = t, e.currentTarget.selectionEnd = t
			}
			var G = n("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.tsx"),
				M = n("./src/reddit/components/Governance/ModalTitle/index.tsx");

			function B(e) {
				const {
					tokenName: t
				} = e;
				return a.a.createElement(M.a, {
					className: e.className
				}, y.fbt._("Send {tokenName}", [y.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var D = n("./src/lib/addQueryParams/index.ts"),
				R = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				U = n.n(R);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");
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
					const i = Object(D.a)("https://daonuts.org/r/".concat(r.name), {
						action: "tip",
						contentId: e,
						recipient: s,
						address: n
					});
					return a.a.createElement("div", {
						className: U.a.container
					}, a.a.createElement(B, {
						className: U.a.title,
						language: t,
						subredditId: r.id,
						tokenName: o
					}), a.a.createElement("div", {
						className: U.a.body
					}, a.a.createElement("div", {
						className: U.a.description
					}, S._("Tipping with Donuts is now managed on Daonuts.org.", null, {
						hk: "3TBQTj"
					})), a.a.createElement(j.g, {
						redditStyle: !0,
						className: U.a.button,
						href: i,
						target: "_blank"
					}, S._("tip on daonuts.org", null, {
						hk: "2WQLYI"
					})), a.a.createElement("div", {
						className: U.a.disclaimer
					}, S._("Daonuts.org is not affiliated with Reddit.", null, {
						hk: "zDnw3"
					}))))
				}
			}
			const L = Object(u.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var z = Object(r.b)(L)(q),
				Y = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				V = n.n(Y);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class H extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayAmount: void 0,
						recipient: void 0,
						recipientIsValid: !1,
						tokenAmount: void 0
					}, this.handleAmountChange = e => this.setState({
						displayAmount: e,
						tokenAmount: Object(d.a)(e, this.props.tokenDisplayConversion)
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
						className: V.a.container
					}, a.a.createElement(B, {
						className: V.a.title,
						language: n,
						subredditId: r.id,
						tokenName: o
					}), a.a.createElement("div", {
						className: V.a.inputContainer
					}, a.a.createElement(w, {
						amount: this.state.displayAmount,
						subredditId: r.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), i ? a.a.createElement("div", {
						className: V.a.explanation
					}, "Transfer to ", e) : a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: V.a.explanation
					}, F._("Up to 49% of earned {tokenName}. Remaining are frozen.", [F._param("tokenName", o)], {
						hk: "1fUxyG"
					})), a.a.createElement("div", {
						className: V.a.recipientContainer
					}, a.a.createElement(G.a, {
						className: V.a.recipient,
						initialUsername: e,
						tabIndex: 2,
						onChange: this.handleRecipientChange
					}))), a.a.createElement(N, {
						amount: this.state.tokenAmount,
						className: V.a.controls,
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
			const Q = Object(u.c)({
					initialRecipient: e => e.transfers.communityPoints.initialRecipient,
					isEthereumProvider: (e, t) => {
						const n = Object(c.q)(e, t);
						return Object(l.f)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					language: e => e.user.language,
					publicAddress: e => e.transfers.communityPoints.publicAddress,
					subreddit: c.q,
					tokenDisplayConversion: (e, t) => {
						const n = Object(c.q)(e, t);
						return Object(l.o)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					tokenName: (e, t) => {
						const n = Object(c.q)(e, t);
						return Object(l.p)(e, {
							subredditId: n ? n.id : void 0
						})
					},
					useCrypto: (e, t) => {
						const n = Object(c.q)(e, t);
						return Object(l.k)(e, {
							subredditId: n ? n.id : void 0
						})
					}
				}),
				X = Object(r.b)(Q, e => ({
					onTransferPoints: (t, n, s) => e(Object(i.g)({
						amount: t,
						recipient: n,
						subredditId: s
					}, !0))
				})),
				Z = Object(c.t)();
			t.default = Object(o.a)(Z(X(H)))
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
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const m = (e, t, n) => Object(i.a)(e, Object.assign({}, o, {
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
				return i
			}));
			var s = n("./src/config.ts"),
				a = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				r = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: a.ab.GET
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
				return Object(r.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: a.ab.POST,
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
//# sourceMappingURL=GovernanceTransferPointsModal.f13d6f0f3aeec33eb8a6.js.map