// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.eab9b899273359422b08.js
// Retrieved at 10/19/2020, 2:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Proposal"], {
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
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return g
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "q", (function() {
				return O
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "x", (function() {
				return I
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				o = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				a = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				c = "POLL_VOTE_SUCCESS",
				i = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				E = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				g = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				_ = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				f = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				O = "GOVERNANCE__TRANSFER_FAILURE",
				N = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				h = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				C = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				y = "GOVERNANCE__WALLETS_FETCH_PENDING",
				x = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(r.e)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "h", (function() {
				return V
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/governance/poll.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				g = n("./src/reddit/selectors/gov.ts"),
				_ = n("./src/reddit/actions/governance/constants.ts"),
				f = n("./src/reddit/actions/governance/errorToast.ts");
			const O = Object(s.a)(_.b),
				N = Object(s.a)(_.c),
				h = Object(s.a)(_.e),
				v = (Object(s.a)(_.f), Object(s.a)(_.g), Object(s.a)(_.h)),
				C = Object(s.a)(_.i),
				y = Object(s.a)(_.j),
				x = Object(s.a)(_.k),
				I = Object(s.a)(_.q),
				j = Object(s.a)(_.r),
				P = Object(s.a)(_.s),
				R = Object(s.a)(_.t),
				T = Object(s.a)(_.u),
				w = Object(s.a)(_.v),
				k = Object(s.a)(_.w),
				S = Object(s.a)(_.x),
				L = (e, t) => async (n, r, s) => {
					let o, {
							apiContext: a,
							gqlContext: i
						} = s,
						l = r().polls.models[e];
					if (n(y({
							pollId: e
						})), (o = l.type === m.a.GA ? await Object(d.c)(i(), e, t) : await Object(d.b)(a(), l.subredditId, e, t)).ok) {
						if (l.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(h({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else n(x(o.body));
						const s = r();
						if ((l = s.polls.models[e]) && Object(m.d)(l)) {
							const {
								postId: e
							} = l, t = s.posts.models[e];
							t && t.voteState === E.a.notVoted && n(Object(c.S)(e))
						}
					} else n(C({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(f.a)(n, o.error || o.errors[0].messsage)
				}, A = (e, t) => async (n, s, c) => {
					let {
						apiContext: d
					} = c;
					n(P());
					const p = s().transfers.communityPoints.contentId || void 0,
						m = await
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
						contentId: p
					}));
					m.ok ? (n(R(Object.assign(Object.assign({}, m.body), {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(g.p)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(I({
						error: m.error
					})), Object(f.a)(n, m.error))
				}, V = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					t(w());
					const o = await Object(p.a)(s(), e);
					o.ok ? t(k(o.body)) : t(T({
						error: o.error
					}))
				}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7",
				ForCommentsPage: "_32eIqVIV__6g2Ry8OOBjNl",
				forCommentsPage: "_32eIqVIV__6g2Ry8OOBjNl",
				isEditing: "E2VbIkLVbi0-xVva0Fnn4",
				ForNonCommentsPage: "_2So0vVCsX_LQJmjyBHRNrz",
				forNonCommentsPage: "_2So0vVCsX_LQJmjyBHRNrz",
				ContainerForNonCommentsPage: "_1RJmcjYaQcuAHX_AQt9OOo",
				containerForNonCommentsPage: "_1RJmcjYaQcuAHX_AQt9OOo",
				noProposalError: "_1622TcbxYoRV5BJa2fwwoH",
				mHasNotVoted: "_3Io4Yg3qLLF4potuZ650rw",
				mGAPoll: "_2JLT03O944LyR6qyBbwUp5",
				mGaPoll: "_2JLT03O944LyR6qyBbwUp5",
				mPollIsClosed: "_3hhZl8Zk6I09TgFa5y2Uk-"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				u = n.n(l);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var m = function(e) {
					return a.a.createElement("div", {
						className: Object(d.a)(u.a.container, e.className)
					}, p._("Error: Could not load poll", null, {
						hk: "WWRIU"
					}))
				},
				b = n("./src/reddit/components/Governance/Token/index.tsx"),
				E = n("./src/reddit/components/Governance/VotingReward/index.m.less"),
				g = n.n(E);

			function _(e) {
				return a.a.createElement("div", {
					className: Object(d.a)(g.a.container, e.className)
				}, a.a.createElement("div", {
					className: g.a.pill
				}, a.a.createElement(b.a, {
					className: g.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: g.a.amount
				}, "+", e.amount)))
			}
			var f, O = n("./src/reddit/actions/governance/index.ts"),
				N = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/helpers/trackers/post.ts"),
				C = n("./src/reddit/models/Poll/index.ts"),
				y = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				I = n("./src/lib/bigNumberUtils/percent.ts"),
				j = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/helpers/governance/tokens.ts"),
				R = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				T = n("./src/reddit/components/Poll/ResultOption/index.m.less"),
				w = n.n(T);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(f || (f = {}));
			var k = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						n = e.result.totalVotes,
						s = e.result.options[e.optionId],
						o = new r.BigNumber(n).isZero() ? 0 : Object(I.a)(s.votes, n),
						c = Object(P.c)(s.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, w.a.container),
						title: e.displayType === f.Count ? s.votes : "".concat(o.toFixed(2), "% (").concat(c, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: w.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(o, "%")
						}
					}), a.a.createElement("div", {
						className: Object(d.a)(w.a.count, {
							[w.a.hide]: e.displayType !== f.Count,
							[w.a.show]: e.displayType === f.Count
						})
					}, Object(j.b)(parseInt(s.votes))), a.a.createElement("div", {
						className: Object(d.a)(w.a.percent, {
							[w.a.hide]: e.displayType === f.Count,
							[w.a.show]: e.displayType !== f.Count
						})
					}, "".concat(o.toFixed(1), "%")), a.a.createElement("div", {
						className: w.a.text
					}, t.text), s.userSelected && a.a.createElement(R.a, {
						className: w.a.check
					}))
				},
				S = n("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				L = n.n(S);
			const A = Object(i.c)({
				tokenName: y.p,
				tokenDisplayConversion: y.o
			});
			var V = Object(c.b)(A)((function(e) {
					let t;
					return e.poll.options.forEach(n => {
						t || (t = n);
						const s = e.result.options[n.id],
							o = e.result.options[t.id];
						new r.BigNumber(o.votes).isLessThan(new r.BigNumber(s.votes)) && (t = n)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((n, r) => a.a.createElement(k, {
						key: r,
						className: L.a.option,
						displayType: e.displayType,
						isWinningOption: n === t,
						optionId: n.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(x.a, {
						className: L.a.metaData,
						poll: e.poll
					}))
				})),
				G = n("./node_modules/lodash/isNil.js"),
				B = n.n(G),
				D = n("./src/reddit/constants/elementClassNames.ts"),
				U = n("./src/reddit/controls/Button/index.tsx"),
				F = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				H = n("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				M = n.n(H);
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function W(e) {
				return "INPUT" === e.tagName
			}
			class Z extends a.a.Component {
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
						const n = e.currentTarget,
							r = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(n.elements).filter(W));
						B()(r) || (this.props.onVoteSelection(t.options[r]), this.props.sendEvent(Object(v.e)(t.id, t.postId, r)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: M.a.option
					}, a.a.createElement("input", {
						className: M.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: M.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: M.a.controlRow
					}, a.a.createElement("div", {
						className: M.a.buttonContainer
					}, a.a.createElement(U.l, {
						className: D.o,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(F.a, {
						className: M.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(o.Fragment, null, this.props.votingIcon, q._("vote", null, {
						hk: "2XhbHK"
					}))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: M.a.loggedOutTooltip
					}, q._("You must be logged in to vote", null, {
						hk: "MnQpC"
					}))), a.a.createElement(x.a, {
						className: M.a.metaData,
						poll: this.props.poll
					})))
				}
			}
			const z = Object(i.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var K = Object(c.b)(z)(Object(N.c)(Z)),
				J = n("./src/reddit/components/Poll/index.m.less"),
				Y = n.n(J);
			class Q extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(C.h)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(v.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: n
					} = this.props;
					e && this.userAlreadyMadeSelection(t, n) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: n,
						poll: r,
						result: s,
						subredditId: o,
						title: c,
						voteInProgress: i,
						votingIcon: d
					} = this.props;
					return r ? a.a.createElement("div", {
						className: e
					}, c && a.a.createElement("div", {
						className: Y.a.title
					}, c), s && Object(C.f)(r, s) ? a.a.createElement(V, {
						displayType: t,
						poll: r,
						result: s,
						subredditId: o
					}) : a.a.createElement(K, {
						poll: r,
						onVoteSelection: n,
						voteInProgress: i,
						votingIcon: d
					})) : null
				}
			}
			const X = Object(i.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var $ = Object(h.t)({
					isCommentsPage: h.w
				})(Object(c.b)(X, (e, t) => ({
					onVoteSelection: n => e(Object(O.d)(t.pollId, n.id))
				}))(Object(N.c)(Q))),
				ee = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				te = n("./src/reddit/selectors/poll/index.ts"),
				ne = n("./src/reddit/selectors/postCreations.ts"),
				re = n("./src/reddit/selectors/posts.ts"),
				se = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/icons/svgs/DynamicThreshold/index.tsx")),
				oe = n("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				ae = n.n(oe),
				ce = n("./node_modules/fbt/lib/FbtPublic.js");

			function ie(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: ae.a.text
				}, ce.fbt._("Achieved Decision Threshold", null, {
					hk: "vyCtz"
				})), a.a.createElement("div", {
					className: ae.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(se.a, {
					className: ae.a.decisionThreshold
				})))
			}

			function de(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: ae.a.text
				}, ce.fbt._("Decision Threshold: {amount}", [ce.fbt._param("amount", Object(j.b)(parseInt(Object(P.b)(e.threshold, e.tokenDisplayConversion))))], {
					hk: "4p3578"
				})), a.a.createElement(le, {
					percent: e.percent
				}))
			}

			function le(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: ae.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: ae.a.pie
				}), a.a.createElement("div", {
					className: ae.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(d.a)(ae.a.pieMask, {
						[ae.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const ue = Object(i.c)({
				poll: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.models[n]
				},
				pollResult: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.results.byVotingPower[n]
				},
				tokenDisplayConversion: y.o
			});
			var pe = Object(c.b)(ue)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(C.c)(e.poll, e.pollResult),
						n = new s.a(e.pollResult.options[t.id].votes),
						r = e.poll.decisionThreshold,
						o = n.isGreaterThanOrEqualTo(new s.a(r)),
						c = Object(I.a)(e.pollResult.options[t.id].votes, r);
					return a.a.createElement("div", {
						className: Object(d.a)(ae.a.container, e.className)
					}, o ? a.a.createElement(ie, {
						votes: n.toString()
					}) : a.a.createElement(de, {
						threshold: r,
						percent: c,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				me = n("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				be = n.n(me),
				Ee = n("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ge = n.n(Ee);

			function _e(e) {
				return a.a.createElement("a", {
					className: Object(d.a)(e.className, ge.a.container, {
						[ge.a.selectable]: !!e.selectable,
						[ge.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const Oe = Object(i.c)({
				tokenName: y.p,
				tokenDisplayConversion: y.o,
				distribution: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.gov.distributions[n]
				},
				poll: (e, t) => {
					let {
						pollId: n
					} = t;
					return e.polls.models[n]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: n,
						resultsByVoters: r
					} = t;
					const s = e.polls.models[n];
					return !!(s && r && Object(C.f)(s, r))
				},
				wallet: y.g
			});
			var Ne = Object(c.b)(Oe)((function(e) {
					const {
						distribution: t,
						poll: n,
						resultsByVoters: s,
						resultsByVotingPower: o,
						tokenDisplayConversion: c,
						tokenName: i,
						wallet: l
					} = e, u = o ? o.totalVotes : "0", p = !new r.BigNumber(u).isZero() && l && t ? Object(I.a)(u, t.totalAvailable) : 0, m = s ? s.totalVotes : "0", b = Object(P.c)(u, c), E = Object(j.b)(parseInt(m));
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, be.a.container)
					}, a.a.createElement("div", null, n.type !== C.a.GA && a.a.createElement(_e, {
						isSelected: e.currentResultType === C.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(i),
						tooltipText: fe._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [fe._param("count", Object(P.c)(u, c)), fe._param("tokenName", i), fe._param("percent", p.toFixed(2)), fe._param("tokenNameAgain", i)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVotingPower)
					}), a.a.createElement(_e, {
						isSelected: e.currentResultType === C.b.ByVoters,
						selectable: e.pollIsClosed,
						text: fe._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [fe._param("count", E), fe._plural(parseInt(m))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVoters)
					})), Object(C.d)(n) && a.a.createElement(pe, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				he = n("./src/reddit/components/Governance/Proposal/index.m.less"),
				ve = n.n(he);
			class Ce extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll && this.props.poll.type === C.a.GA ? C.b.ByVoters : C.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll && this.props.poll.type === C.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new r.BigNumber(this.props.pollReward).isZero()) {
						const n = ye(e, t.resultType),
							r = ye(this.props, this.state.resultType);
						if (n && r && e.poll && this.props.poll) {
							const t = !Object(C.f)(e.poll, n),
								s = Object(C.f)(this.props.poll, r);
							t && s && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					const {
						isCommentsPage: e,
						isEditing: t,
						poll: n,
						resultsByVoters: r,
						pollId: s,
						subredditOrProfile: o,
						post: c,
						className: i,
						resultsByVotingPower: l,
						pollReward: u
					} = this.props;
					if (!s || !n || !o) return null;
					if (c.isMeta && (!s || !n || !o)) return a.a.createElement(m, {
						className: ve.a.noProposalError
					});
					let p = ve.a.ContainerForNonCommentsPage,
						b = "";
					return e ? p = Object(d.a)(ve.a.ForCommentsPage, {
						[ve.a.isEditing]: t
					}) : b = Object(d.a)(ve.a.ForNonCommentsPage, {
						[ve.a.mHasNotVoted]: !r,
						[ve.a.mPollIsClosed]: !!r && Object(C.f)(n, r),
						[ve.a.mGAPoll]: n.type === C.a.GA
					}), a.a.createElement("div", {
						className: p
					}, a.a.createElement("div", {
						className: Object(d.a)(i, ve.a.container, b),
						onClick: this.handleContainerClick
					}, a.a.createElement(Ne, {
						className: ve.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: s,
						resultsByVoters: r,
						resultsByVotingPower: l,
						subredditId: o.id,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement($, {
						key: s,
						className: ve.a.poll,
						displayType: this.state.resultType === C.b.ByVoters ? f.Count : f.Percent,
						pollId: s,
						resultType: this.state.resultType,
						subredditId: o.id,
						votingIcon: Object(C.d)(n) ? a.a.createElement(ee.a, {
							className: ve.a.govIcon
						}) : void 0
					}), u && this.state.displayReward && a.a.createElement(_, {
						amount: u,
						className: ve.a.votingReward,
						subredditId: o.id
					})))
				}
			}

			function ye(e, t) {
				return t === C.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const xe = Object(i.c)({
				isEditing: ne.G,
				poll: te.e,
				pollId: te.a,
				pollReward: te.d,
				post: re.N,
				resultsByVoters: te.c,
				resultsByVotingPower: te.b,
				subredditOrProfile: re.ab
			});
			t.default = Object(c.b)(xe)(Ce)
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
				c = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const p = Object(a.c)({
				tokenSymbol: d.q
			});
			t.a = Object(o.b)(p)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return s.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
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
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, n) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, n) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Poll/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "j", (function() {
				return d
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "l", (function() {
				return g
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

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function d(e, t, n) {
				return Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(o.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				m = e => ({
					type: "claim",
					subredditId: e
				}),
				b = e => ({
					type: "subscribe",
					subredditId: e
				}),
				E = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function g(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(s.a.metaUrl, "/crypto/ethereum/transaction-intent"),
					data: t
				})
			}
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/lodash/get.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts"),
				l = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, r) {
				return Object(l.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(r)
				})
			}
			const p = (e, t, n) => Object(c.a)(e, Object.assign(Object.assign({}, a), {
				variables: {
					input: {
						postId: t,
						optionId: n
					}
				}
			}));

			function m(e, t) {
				return Object(l.a)(Object(i.a)(e, [d.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
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
				return c
			}));
			var r = n("./src/config.ts"),
				s = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId, "/me"),
					method: s.db.GET
				}).then(e => {
					if (e.ok) {
						const n = e.body,
							r = {
								[t.subredditId]: n
							};
						return Object.assign(Object.assign({}, e), {
							body: r
						})
					}
					return e
				})
			}

			function c(e, t) {
				return Object(o.a)(e, {
					headers: {
						"X-HTTP-Method-Override": "GET"
					},
					endpoint: "".concat(r.a.metaUrl, "/wallets/").concat(t.subredditId),
					method: s.db.POST,
					data: t.userIds
				}).then(e => e.ok ? Object.assign(Object.assign({}, e), {
					body: {
						wallets: e.body
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
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

			function c(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = "".concat(e.type, " (").concat(e.code, ")");
				return "message" in e ? "".concat(t, ": ").concat(e.message) : t
			}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), s.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), s.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), s.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), s.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "j", (function() {
				return g
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "k", (function() {
				return j
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				a = {},
				c = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				i = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = v(e, {
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
				d = (e, t) => {
					const n = N(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				p = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				m = (e, t) => {
					const n = p(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				b = (e, t) => {
					const n = p(e, t);
					return n && n.amount || "0"
				},
				E = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				g = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || c,
				O = (e, t) => {
					const n = x(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				N = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				h = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				v = (e, t) => {
					const n = h(e, t);
					return n && n.walletProvider
				},
				C = (e, t) => {
					const n = v(e, t),
						r = h(e, t);
					return n && n.provider || r && r.provider
				},
				y = (e, t) => {
					const n = C(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				x = (e, t) => {
					const n = v(e, t),
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
				I = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = v(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				j = (e, t) => {
					const n = h(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.eab9b899273359422b08.js.map