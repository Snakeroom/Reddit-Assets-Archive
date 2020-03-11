// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.2de34b0f8c35134fa4c7.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Proposal"], {
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/lib/bigNumberUtils/percent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js");

			function o(e, t) {
				const s = new n.BigNumber(e),
					o = new n.BigNumber(t),
					r = new n.BigNumber(s.dividedBy(o)),
					a = new n.BigNumber("100").multipliedBy(r);
				return new n.BigNumber(a).toNumber()
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/app/strings/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/config.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			var u = s("./src/reddit/endpoints/governance/poll.ts");
			var p = s("./src/reddit/endpoints/governance/wallet.ts"),
				m = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				g = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/gov.ts"),
				h = s("./src/reddit/actions/governance/constants.ts"),
				y = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "i", (function() {
				return L
			})), s.d(t, "f", (function() {
				return V
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "j", (function() {
				return G
			})), s.d(t, "c", (function() {
				return H
			}));
			const f = Object(o.a)(h.b),
				x = Object(o.a)(h.c),
				O = Object(o.a)(h.d),
				j = Object(o.a)(h.e),
				C = Object(o.a)(h.f),
				I = (Object(o.a)(h.g), Object(o.a)(h.h), Object(o.a)(h.i)),
				N = Object(o.a)(h.j),
				w = Object(o.a)(h.k),
				E = Object(o.a)(h.l),
				P = Object(o.a)(h.r),
				k = Object(o.a)(h.s),
				_ = Object(o.a)(h.t),
				T = Object(o.a)(h.u),
				S = Object(o.a)(h.v),
				R = Object(o.a)(h.w),
				B = Object(o.a)(h.x),
				L = Object(o.a)(h.y),
				V = (e, t) => async (s, n, o) => {
					let r, {
							apiContext: a,
							gqlContext: i
						} = o,
						l = n().polls.models[e];
					if (s(w({
							pollId: e
						})), (r = l.type === m.a.GA ? await Object(u.c)(i(), e, t) : await Object(u.b)(a(), l.subredditId, e, t)).ok) {
						if (l.type === m.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							s(C({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else s(E(r.body));
						const o = n();
						if ((l = o.polls.models[e]) && Object(m.d)(l)) {
							const {
								postId: e
							} = l, t = o.posts.models[e];
							t && t.voteState === g.a.notVoted && s(Object(c.X)(e))
						}
					} else s(N({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(y.a)(s, r.error || r.errors[0].messsage)
				}, D = (e, t) => async (s, o, c) => {
					let {
						apiContext: u
					} = c;
					s(_());
					const p = o().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(d.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(u(), Object.assign({}, e, {
						contentId: p
					}));
					if (m.ok) {
						const c = o().user.language;
						s(T(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), s(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(c, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(v.p)(o(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(a.f)())
					} else s(P({
						error: m.error
					})), Object(y.a)(s, m.error)
				}, G = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					t(R());
					const r = await Object(p.a)(o(), e);
					r.ok ? t(B(r.body)) : t(S({
						error: r.error
					}))
				}, H = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					s(O());
					const c = await
					function(e, t, s) {
						return Object(d.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(l.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(a(), e, t);
					if (c.ok) {
						s(B({
							[t]: c.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(i.e)({
							kind: b.b.SuccessCommunity,
							text: Object(n.a)(o().user.language, r, {
								tokenName: Object(v.p)(o(), {
									subredditId: t
								})
							})
						}))
					} else Object(y.a)(s, c.error)
				}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_3FcFVjZN0xHslbheCZ6YtB",
				fullPie: "_51DvHNRm7RdZvtEr4YB90",
				checkIcon: "b6nqW0WFO2M4SexVBxfHU",
				container: "_1QSw_HlkZ06PQ4H_Gl5Qmi",
				decisionIcon: "tIv0l4mIAasOfzH_1MZzr",
				decisionThreshold: "vdDwj3MECrKPWOzGvwtX4",
				pie: "_1kLHoqYVgmdy-N798MqUkD",
				pieContainer: "_19t_3cFD9b1D_z7gV6r1Lf",
				pieInvertedMask: "_240PIKFetxH16NIbed3MhP",
				pieMask: "faQEx7XG3jztMB7Ba0IzB",
				pieSwap: "sBNylAozOUua3KlWKF9bf",
				text: "_3kJ7s4NNHNqugbRuUIg9B9"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				u = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				p = s.n(u);

			function m(e) {
				return a.a.createElement("div", {
					className: Object(l.a)(p.a.container, e.className)
				}, a.a.createElement("div", {
					className: p.a.pill
				}, a.a.createElement(d.a, {
					className: p.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: p.a.amount
				}, "+", e.amount)))
			}
			var b, g = s("./src/reddit/actions/governance/index.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Poll/index.ts"),
				x = s("./src/reddit/selectors/gov.ts"),
				O = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				j = s("./src/lib/bigNumberUtils/percent.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/helpers/governance/tokens.ts"),
				N = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				w = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				E = s.n(w);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var P = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						o = e.result.options[e.optionId],
						r = new n.BigNumber(s).isZero() ? 0 : Object(j.a)(o.votes, s),
						c = Object(I.c)(o.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, E.a.container),
						title: e.displayType === b.Count ? o.votes : "".concat(r.toFixed(2), "% (").concat(c, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: E.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(r, "%")
						}
					}), a.a.createElement("div", {
						className: Object(l.a)(E.a.count, {
							[E.a.hide]: e.displayType !== b.Count,
							[E.a.show]: e.displayType === b.Count
						})
					}, Object(C.b)(parseInt(o.votes))), a.a.createElement("div", {
						className: Object(l.a)(E.a.percent, {
							[E.a.hide]: e.displayType === b.Count,
							[E.a.show]: e.displayType !== b.Count
						})
					}, "".concat(r.toFixed(1), "%")), a.a.createElement("div", {
						className: E.a.text
					}, t.text), o.userSelected && a.a.createElement(N.a, {
						className: E.a.check
					}))
				},
				k = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				_ = s.n(k);
			const T = Object(i.c)({
				tokenName: x.p,
				tokenDisplayConversion: x.o,
				language: e => e.user.language
			});
			var S = Object(c.b)(T)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const o = e.result.options[s.id],
							r = e.result.options[t.id];
						new n.BigNumber(r.votes).isLessThan(new n.BigNumber(o.votes)) && (t = s)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, n) => a.a.createElement(P, {
						key: n,
						className: _.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(O.a, {
						className: _.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				R = s("./node_modules/lodash/isNil.js"),
				B = s.n(R),
				L = s("./src/reddit/constants/elementClassNames.ts"),
				V = s("./src/reddit/controls/Button/index.tsx"),
				D = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				G = s("./src/reddit/i18n/components.tsx"),
				H = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				A = s.n(H);

			function M(e) {
				return "INPUT" === e.tagName
			}
			class q extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const s = e.currentTarget,
							n = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(M));
						B()(n) || (this.props.onVoteSelection(t.options[n]), this.props.sendEvent(Object(y.e)(t.id, t.postId, n)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: A.a.option
					}, a.a.createElement("input", {
						className: A.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: A.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: A.a.controlRow
					}, a.a.createElement("div", {
						className: A.a.buttonContainer
					}, a.a.createElement(V.i, {
						className: L.o,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(D.a, {
						className: A.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(r.Fragment, null, this.props.votingIcon, a.a.createElement(G.c, null, "vote"))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: A.a.loggedOutTooltip
					}, a.a.createElement(G.c, null, "You must be logged in to vote"))), a.a.createElement(O.a, {
						className: A.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const U = Object(i.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var Z = Object(c.b)(U)(Object(v.b)(q)),
				z = s("./src/reddit/components/Poll/index.m.less"),
				F = s.n(z);
			class K extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(f.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(y.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: s
					} = this.props;
					e && this.userAlreadyMadeSelection(t, s) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: s,
						poll: n,
						result: o,
						subredditId: r,
						title: c,
						voteInProgress: i,
						votingIcon: l
					} = this.props;
					return n ? a.a.createElement("div", {
						className: e
					}, c && a.a.createElement("div", {
						className: F.a.title
					}, c), o && Object(f.e)(n, o) ? a.a.createElement(S, {
						displayType: t,
						poll: n,
						result: o,
						subredditId: r
					}) : a.a.createElement(Z, {
						poll: n,
						onVoteSelection: s,
						voteInProgress: i,
						votingIcon: l
					})) : null
				}
			}
			const W = Object(i.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var Y = Object(h.t)({
					isCommentsPage: h.w
				})(Object(c.b)(W, (e, t) => ({
					onVoteSelection: s => e(Object(g.f)(t.pollId, s.id))
				}))(Object(v.b)(K))),
				J = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				Q = s("./src/app/strings/index.ts"),
				X = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, a.a.createElement(G.c, null, "Achieved Decision Threshold")), a.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(X, {
					className: te.a.decisionThreshold
				})))
			}

			function ne(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, Object(Q.a)(e.language, "polls.decisionThreshold", {
					amount: Object(C.b)(parseInt(Object(I.b)(e.threshold, e.tokenDisplayConversion)))
				})), a.a.createElement(oe, {
					percent: e.percent
				}))
			}

			function oe(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: te.a.pie
				}), a.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(l.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const re = Object(i.c)({
				language: $.O,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollResult: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.results.byVotingPower[s]
				},
				tokenDisplayConversion: x.o
			});
			var ae = Object(c.b)(re)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(f.c)(e.poll, e.pollResult),
						s = new o.a(e.pollResult.options[t.id].votes),
						n = e.poll.decisionThreshold,
						r = s.isGreaterThanOrEqualTo(new o.a(n)),
						c = Object(j.a)(e.pollResult.options[t.id].votes, n);
					return a.a.createElement("div", {
						className: Object(l.a)(te.a.container, e.className)
					}, r ? a.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : a.a.createElement(ne, {
						language: e.language,
						threshold: n,
						percent: c,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ce = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ie = s.n(ce);

			function le(e) {
				return a.a.createElement("a", {
					className: Object(l.a)(e.className, ie.a.container, {
						[ie.a.selectable]: !!e.selectable,
						[ie.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var de = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				ue = s.n(de);
			const pe = Object(i.c)({
				tokenName: x.p,
				tokenDisplayConversion: x.o,
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				language: e => e.user.language,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: s,
						resultsByVoters: n
					} = t;
					const o = e.polls.models[s];
					return !!(o && n && Object(f.e)(o, n))
				},
				wallet: x.g
			});
			var me = Object(c.b)(pe)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: o,
						resultsByVotingPower: r,
						tokenDisplayConversion: c,
						tokenName: i,
						wallet: d
					} = e, u = r ? r.totalVotes : "0", p = !new n.BigNumber(u).isZero() && d && t ? Object(j.a)(u, t.totalAvailable) : 0, m = o ? o.totalVotes : "0", b = Object(I.c)(u, c), g = Object(C.b)(parseInt(m));
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, ue.a.container)
					}, a.a.createElement("div", null, s.type !== f.a.GA && a.a.createElement(le, {
						isSelected: e.currentResultType === f.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(i),
						tooltipText: Object(Q.a)(e.language, "polls.votingBreakdown", {
							tokenName: i,
							count: Object(I.c)(u, c),
							percent: p.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVotingPower)
					}), a.a.createElement(le, {
						isSelected: e.currentResultType === f.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(Q.b)(e.language, "polls.numVotes", parseInt(m), {
							count: g
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVoters)
					})), Object(f.d)(s) && a.a.createElement(ae, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				be = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				ge = s.n(be);
			class ve extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === f.a.GA ? f.b.ByVoters : f.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === f.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new n.BigNumber(this.props.pollReward).isZero()) {
						const s = he(e, t.resultType),
							n = he(this.props, this.state.resultType);
						if (s && n) {
							const t = !Object(f.e)(e.poll, s),
								o = Object(f.e)(this.props.poll, n);
							t && o && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Object(l.a)(this.props.className, ge.a.container),
						onClick: this.handleContainerClick
					}, a.a.createElement(me, {
						className: ge.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(Y, {
						key: this.props.pollId,
						className: ge.a.poll,
						displayType: this.state.resultType === f.b.ByVoters ? b.Count : b.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(f.d)(this.props.poll) ? a.a.createElement(J.a, {
							className: ge.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && a.a.createElement(m, {
						amount: this.props.pollReward,
						className: ge.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function he(e, t) {
				return t === f.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ye = Object(i.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.default = Object(c.b)(ye)(ve)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/config.ts"),
				i = s("./src/reddit/selectors/gov.ts");
			const l = Object(a.c)({
				tokenSymbol: i.q
			});
			t.a = Object(r.b)(l)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return o.a.createElement("img", {
					className: e.className,
					src: "".concat(c.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_3vyz17dpfnySBJJyBF9IqH",
				loggedOutTooltip: "_3YsZUGQHAWfxmTN8wbFYPd",
				controlRow: "_1YKCRAHpaqTk8N5LBvZ9_A",
				loadingIcon: "_2RQF5_CKHRDPDOJ-TwwXFy",
				metaData: "_28wp7DzoykykevfZW56u3_",
				option: "_3nN8pAR2tWvzxcstONuzMH",
				optionRadio: "_1d_v-dIPu8uuwF0UTaQNmF",
				optionText: "_3grr_S6IK0w2iyC7Ocv5u9"
			}
		},
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "_2mybT6Ih7gVf5B6COa9kd2",
				"m-winning": "_1kOO45KEOZraWGZ-cUgKq-",
				mWinning: "_1kOO45KEOZraWGZ-cUgKq-",
				check: "_3CF-7jBH1KihljB9AqaU04",
				container: "_3uG88YeFdY0J8n4v07jkf9",
				count: "_1VDLlB8Ys3WO8XWSZfhomw",
				percent: "_1Ot3PH7267obvD1i_V2D00",
				hide: "_3G6ZB4S9YZ26E49tE8zLJQ",
				show: "iV9AWdqazd5c9IHXNEQXX",
				text: "_3PfYu2DtunAwYpv53tmvOb"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			}));
			var n, o = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case n.Ethereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function c(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function i(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function l(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(o.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(n || (n = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/lodash/get.js"),
				o = s.n(n),
				r = s("./src/config.ts"),
				a = s("./src/graphql/operations/PollVote.json"),
				c = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				d = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, s, n) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(n)
				})
			}
			const p = (e, t, s) => Object(c.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function m(e, t) {
				return Object(d.a)(Object(i.a)(e, [l.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: o()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: o()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/endpoints/governance/wallet.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/config.ts"),
				o = (s("./src/lib/bigNumberUtils/percent.ts"), s("./src/lib/constants/index.ts")),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(r.a)(e, {
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: o.cb.GET
				}).then(e => {
					if (e.ok) {
						const s = e.body,
							n = {
								[t.subredditId]: s
							};
						return Object.assign({}, e, {
							body: n
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
					endpoint: "".concat(n.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: o.cb.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				o = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new n.BigNumber(e),
					o = new n.BigNumber(t);
				return s.dividedBy(o).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(r(e, t), 10))
			}

			function c(e, t) {
				const s = new n.BigNumber(e),
					o = new n.BigNumber(t);
				return s.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), o.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), o.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), o.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), o.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const c = new Set(["pollstest", "whatssnoo"]),
				i = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				l = e => c.has((Object(r.e)(e) || "").toLowerCase()) || i.has((Object(r.e)(e) || "").toLowerCase()) && Object(o.c)(e, {
					experimentEligibilitySelector: a.G,
					experimentName: n.ab
				}) === n.hb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "i", (function() {
				return h
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "p", (function() {
				return f
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return O
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "r", (function() {
				return E
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "k", (function() {
				return k
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				o = s("./src/reddit/endpoints/governance/crypto.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = s("./src/reddit/selectors/postCreations.ts");
			const i = [],
				l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = I(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.harberger ? n.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				p = (e, t) => {
					const s = j(e, t);
					if (s) return s.mainHeader
				},
				m = (e, t) => {
					const s = j(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = j(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : l
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				v = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(c.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						n = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (n) {
						const e = !!n.polls && !1 === n.polls.canCreate;
						return s && !e
					}
					return s
				},
				h = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				y = (e, t) => {
					const s = Object(n.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || i
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				O = (e, t) => {
					const s = E(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				I = (e, t) => {
					const s = C(e, t);
					return s && s.walletProvider
				},
				N = (e, t) => {
					const s = I(e, t),
						n = C(e, t);
					return s && s.provider || n && n.provider
				},
				w = (e, t) => {
					const s = N(e, t);
					return s === o.a.Ethereum || s === o.a.Rinkeby
				},
				E = (e, t) => {
					const s = I(e, t),
						n = N(e, t);
					if (s && !s.inTransition && n === o.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						a = r && r.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				P = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = I(e, {
						subredditId: s
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				k = (e, t) => {
					const s = C(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-Governance-Proposal.2de34b0f8c35134fa4c7.js.map