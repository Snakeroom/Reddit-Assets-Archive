// https://www.redditstatic.com/desktop2x/GovernanceTransferPointsModal.9b17f0ca02a019e4d54b.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GovernanceTransferPointsModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
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
					a = new s.BigNumber(n.dividedBy(r)),
					o = new s.BigNumber("100").multipliedBy(a);
				return new s.BigNumber(o).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "e", (function() {
				return B
			})), n.d(t, "h", (function() {
				return D
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var m = n("./src/reddit/endpoints/governance/wallet.ts"),
				b = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/gov.ts"),
				v = n("./src/reddit/actions/governance/constants.ts"),
				g = n("./src/reddit/actions/governance/errorToast.ts");
			const x = Object(r.a)(v.b),
				O = Object(r.a)(v.c),
				h = Object(r.a)(v.e),
				k = (Object(r.a)(v.f), Object(r.a)(v.g), Object(r.a)(v.h)),
				I = Object(r.a)(v.i),
				y = Object(r.a)(v.j),
				N = Object(r.a)(v.k),
				_ = Object(r.a)(v.q),
				T = Object(r.a)(v.r),
				P = Object(r.a)(v.s),
				C = Object(r.a)(v.t),
				E = Object(r.a)(v.u),
				w = Object(r.a)(v.v),
				A = Object(r.a)(v.w),
				G = Object(r.a)(v.x),
				M = (e, t) => async (n, s, r) => {
					let a, {
							apiContext: o,
							gqlContext: c
						} = r,
						l = s().polls.models[e];
					if (n(y({
							pollId: e
						})), (a = l.type === b.a.GA ? await Object(d.c)(c(), e, t) : await Object(d.b)(o(), l.subredditId, e, t)).ok) {
						if (l.type === b.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(h({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(N(a.body));
						const r = s();
						if ((l = r.polls.models[e]) && Object(b.d)(l)) {
							const {
								postId: e
							} = l, t = r.posts.models[e];
							t && t.voteState === f.a.notVoted && n(Object(i.db)(e))
						}
					} else n(I({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(g.a)(n, a.error || a.errors[0].messsage)
				}, B = (e, t) => async (n, r, i) => {
					let {
						apiContext: d
					} = i;
					n(P());
					const m = r().transfers.communityPoints.contentId || void 0,
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
					}(d(), Object.assign(Object.assign({}, e), {
						contentId: m
					}));
					b.ok ? (n(C(Object.assign(Object.assign({}, b.body), {
						subredditId: e.subredditId
					}))), n(Object(c.e)({
						kind: p.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(a.a)(e.amount)), s.fbt._param("tokenName", Object(j.p)(r(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(o.f)())) : (n(_({
						error: b.error
					})), Object(g.a)(n, b.error))
				}, D = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(w());
					const a = await Object(m.a)(r(), e);
					a.ok ? t(A(a.body)) : t(E({
						error: a.error
					}))
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(d);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), n && n()
					}
				}
			})((function(e) {
				return r.a.createElement(c.a, {
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(i);

			function d(e) {
				return r.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, r.a.createElement("div", {
					className: c.a.title
				}, e.children), r.a.createElement(o.a, null))
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
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
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
				j = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/endpoints/governance/crypto.ts"),
				O = n("./src/reddit/helpers/governance/stellar.ts"),
				h = n("./src/reddit/components/Governance/TransferPointsModal/Controls/index.m.less"),
				k = n.n(h),
				I = n("./node_modules/fbt/lib/FbtPublic.js");
			const y = Object(u.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				blockchainProvider: l.a,
				tokenDisplayConversion: l.o,
				transferIsPending: e => e.transfers.communityPoints.api.pending,
				unlockedToken: l.r,
				wallet: l.g
			});
			var N = Object(a.b)(y)((function(e) {
					const t = e.wallet && e.wallet.unlockedAmount || "0",
						n = new m.BigNumber(e.amount || "0"),
						s = new m.BigNumber(t),
						a = s.isGreaterThanOrEqualTo(n),
						o = e.submissionEnabled && !s.isZero() && a;
					return r.a.createElement("div", {
						className: Object(b.a)(k.a.container, e.className)
					}, r.a.createElement("div", {
						className: k.a.available
					}, r.a.createElement("div", null, I.fbt._("Transferable", null, {
						hk: "4n8VPB"
					})), r.a.createElement(f.a, {
						grey: !0,
						className: k.a.token,
						subredditId: e.subredditId
					}), r.a.createElement("div", {
						style: {
							color: a ? void 0 : j.a.warning
						}
					}, Object(p.a)(Object(d.b)(t, e.tokenDisplayConversion)))), e.blockchainProvider === x.a.Stellar && o ? r.a.createElement(v.g, {
						redditStyle: !0,
						className: k.a.button,
						href: Object(O.b)(e.unlockedToken && e.unlockedToken.address || "", e.unlockedToken && e.unlockedToken.symbol || "", e.publicAddress || "", e.amount && Object(d.b)(e.amount, e.tokenDisplayConversion) || "0", e.contentId ? "t|".concat(e.contentId) : void 0),
						target: "_blank",
						tabIndex: e.tabIndex
					}, I.fbt._("send", null, {
						hk: "oTFGp"
					})) : r.a.createElement(v.f, {
						disabled: !o,
						className: k.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onTransferPoints
					}, e.transferIsPending ? r.a.createElement(g.a, {
						className: k.a.loadingIcon,
						sizePx: 20
					}) : I.fbt._("send", null, {
						hk: "oTFGp"
					})))
				})),
				_ = n("./src/lib/currency/cleanNumber/index.ts"),
				T = n("./src/reddit/constants/keycodes.ts"),
				P = n("./src/reddit/components/Governance/TransferPointsModal/PrettyNumberInput/index.m.less"),
				C = n.n(P);

			function E(e) {
				const t = e.amount || "0",
					n = !new m.BigNumber(t).isZero(),
					s = Object(p.a)(t);
				return r.a.createElement("label", {
					"aria-label": t,
					"aria-live": "assertive",
					className: Object(b.a)(C.a.container, e.className)
				}, r.a.createElement(f.a, {
					className: C.a.token,
					grey: !n,
					subredditId: e.subredditId
				}), r.a.createElement("div", {
					className: Object(b.a)(C.a.display, {
						[C.a.displayActive]: n
					}),
					style: {
						fontSize: w(s)
					}
				}, Object(p.a)(s)), r.a.createElement("input", {
					autoFocus: !0,
					className: C.a.input,
					maxLength: 9,
					style: {
						fontSize: w(s)
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

			function w(e) {
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
				return r.a.createElement(M.a, {
					className: e.className
				}, I.fbt._("Send {tokenName}", [I.fbt._param("tokenName", t)], {
					hk: "33shhf"
				}))
			}
			var D = n("./src/lib/addQueryParams/index.ts"),
				R = n("./src/reddit/components/Governance/TransferPointsModal/TransferDonutsModal/index.m.less"),
				U = n.n(R);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class S extends r.a.PureComponent {
				render() {
					const {
						contentId: e,
						publicAddress: t,
						recipient: n,
						subreddit: s,
						tokenName: a
					} = this.props;
					if (!e || !t) return null;
					const o = Object(D.a)("https://daonuts.org/r/".concat(s.name), {
						action: "tip",
						contentId: e,
						recipient: n,
						address: t
					});
					return r.a.createElement("div", {
						className: U.a.container
					}, r.a.createElement(B, {
						className: U.a.title,
						subredditId: s.id,
						tokenName: a
					}), r.a.createElement("div", {
						className: U.a.body
					}, r.a.createElement("div", {
						className: U.a.description
					}, q._("Tipping with Donuts is now managed on Daonuts.org.", null, {
						hk: "3TBQTj"
					})), r.a.createElement(v.g, {
						redditStyle: !0,
						className: U.a.button,
						href: o,
						target: "_blank"
					}, q._("tip on daonuts.org", null, {
						hk: "2WQLYI"
					})), r.a.createElement("div", {
						className: U.a.disclaimer
					}, q._("Daonuts.org is not affiliated with Reddit.", null, {
						hk: "zDnw3"
					}))))
				}
			}
			const L = Object(u.c)({
				contentId: e => e.transfers.communityPoints.contentId,
				publicAddress: e => e.transfers.communityPoints.publicAddress
			});
			var z = Object(a.b)(L)(S),
				V = n("./src/reddit/components/Governance/TransferPointsModal/index.m.less"),
				Y = n.n(V);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class H extends r.a.Component {
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
						onTransferPoints: n,
						subreddit: s,
						tokenName: a,
						useCrypto: o
					} = this.props;
					return s ? o && t ? r.a.createElement(z, {
						recipient: e,
						subreddit: s,
						tokenName: a
					}) : r.a.createElement("div", {
						className: Y.a.container
					}, r.a.createElement(B, {
						className: Y.a.title,
						subredditId: s.id,
						tokenName: a
					}), r.a.createElement("div", {
						className: Y.a.inputContainer
					}, r.a.createElement(E, {
						amount: this.state.displayAmount,
						subredditId: s.id,
						tabIndex: 1,
						onChange: this.handleAmountChange
					})), o ? r.a.createElement("div", {
						className: Y.a.explanation
					}, "Transfer to ", e) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Y.a.explanation
					}, F._("Up to 49% of earned {tokenName}. Remaining are frozen.", [F._param("tokenName", a)], {
						hk: "1fUxyG"
					})), r.a.createElement("div", {
						className: Y.a.recipientContainer
					}, r.a.createElement(G.a, {
						className: Y.a.recipient,
						initialUsername: e,
						tabIndex: 2,
						onChange: this.handleRecipientChange
					}))), r.a.createElement(N, {
						amount: this.state.tokenAmount,
						className: Y.a.controls,
						submissionEnabled: !!this.state.tokenAmount && (this.state.recipientIsValid || !!this.props.publicAddress),
						subredditId: s.id,
						tabIndex: 3,
						publicAddress: this.props.publicAddress,
						onTransferPoints: () => {
							this.state.tokenAmount && this.state.recipient && s && n(this.state.tokenAmount, this.state.recipient, s.id)
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
				Z = Object(a.b)(Q, e => ({
					onTransferPoints: (t, n, s) => e(Object(i.e)({
						amount: t,
						recipient: n,
						subredditId: s
					}, !0))
				})),
				K = Object(c.t)();
			t.default = Object(o.a)(K(Z(H)))
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
				a = n("./src/config.ts"),
				o = n("./src/graphql/operations/PollVote.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(a.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
				})
			}
			const m = (e, t, n) => Object(i.a)(e, Object.assign(Object.assign({}, o), {
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
						title: r()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: r()(e.body, ["data", "children", 0, "data", "permalink"], "")
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
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(a.a)(e, {
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: r.db.GET
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
				return Object(a.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(s.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: r.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/stellar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");

			function s(e, t) {
				return "web+stellar:".concat(e, "?") + Object.entries(t).map(e => {
					let [t, n] = e;
					return t + "=" + encodeURIComponent(n)
				}).join("&")
			}

			function r(e, t, n, r, a) {
				const o = {
					destination: n,
					amount: r,
					asset_code: t,
					asset_issuer: e
				};
				return a && (o.memo = a), s("pay", o)
			}

			function a(e, t, n) {
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
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=GovernanceTransferPointsModal.9b17f0ca02a019e4d54b.js.map