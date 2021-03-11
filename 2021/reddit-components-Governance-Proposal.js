// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.2446b342bebb0c8468c4.js
// Retrieved at 3/11/2021, 5:50:04 PM by Reddit Dataminer v1.0.0
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
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return f
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "t", (function() {
				return O
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
				i = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				E = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				N = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				_ = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				f = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				h = "GOVERNANCE__TRANSFER_PENDING",
				O = "GOVERNANCE__TRANSFER_SUCCESS",
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
				return v
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return V
			})), n.d(t, "h", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/config.ts"),
				l = n("./src/graphql/operations/PollVote.json"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				p = n("./src/reddit/endpoints/governance/requester.ts");
			var b = n("./src/reddit/endpoints/governance/wallet.ts"),
				E = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/models/Vote/index.ts"),
				_ = n("./src/reddit/selectors/gov.ts"),
				g = n("./src/reddit/actions/governance/constants.ts"),
				f = n("./src/reddit/actions/governance/errorToast.ts");
			const v = Object(s.a)(g.b),
				h = Object(s.a)(g.c),
				O = Object(s.a)(g.e),
				C = (Object(s.a)(g.f), Object(s.a)(g.g), Object(s.a)(g.h)),
				y = Object(s.a)(g.i),
				x = Object(s.a)(g.j),
				I = Object(s.a)(g.k),
				P = Object(s.a)(g.q),
				j = Object(s.a)(g.r),
				R = Object(s.a)(g.s),
				T = Object(s.a)(g.t),
				w = Object(s.a)(g.u),
				k = Object(s.a)(g.v),
				S = Object(s.a)(g.w),
				L = Object(s.a)(g.x),
				A = (e, t) => async (n, r, {
					apiContext: s,
					gqlContext: o
				}) => {
					let a, c = r().polls.models[e];
					if (n(x({
							pollId: e
						})), (a = c.type === m.a.GA ? await ((e, t, n) => Object(u.a)(e, {
								...l,
								variables: {
									input: {
										postId: t,
										optionId: n
									}
								}
							}))(o(), e, t) : await
							function(e, t, n, r) {
								return Object(p.a)(e, {
									method: "put",
									endpoint: `${d.a.metaUrl}/polls/${t}/${n}/votes/me/${r}`
								})
							}(s(), c.subredditId, e, t)).ok) {
						if (c.type === m.a.GA) {
							const {
								options: e
							} = a.body.data.updatePostPollVoteState.poll;
							n(O({
								pollId: c.id,
								optionId: t,
								options: e
							}))
						} else n(I(a.body));
						const s = r();
						if ((c = s.polls.models[e]) && Object(m.e)(c)) {
							const {
								postId: e
							} = c, t = s.posts.models[e];
							t && t.voteState === N.a.notVoted && n(Object(i.U)(e))
						}
					} else n(y({
						pollId: e,
						error: a.error || a.errors[0].message
					})), Object(f.a)(n, a.error || a.errors[0].messsage)
				}, V = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					n(R());
					const l = s().transfers.communityPoints.contentId || void 0,
						u = await
					function(e, t) {
						return Object(p.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: `${d.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,
							method: "post"
						})
					}(i(), {
						...e,
						contentId: l
					});
					u.ok ? (n(T({
						...u.body,
						subredditId: e.subredditId
					})), n(Object(c.e)({
						kind: E.b.SuccessCommunity,
						text: r.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [r.fbt._param("amount", Object(o.a)(e.amount)), r.fbt._param("tokenName", Object(_.n)(s(), {
							subredditId: e.subredditId
						})), r.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(P({
						error: u.error
					})), Object(f.a)(n, u.error))
				}, G = e => async (t, n, {
					apiContext: r
				}) => {
					t(k());
					const s = await Object(b.a)(r(), e);
					s.ok ? t(S(s.body)) : t(w({
						error: s.error
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
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var p = function(e) {
					return a.a.createElement("div", {
						className: Object(d.a)(u.a.container, e.className)
					}, m._("Error: Could not load poll", null, {
						hk: "WWRIU"
					}))
				},
				b = n("./src/reddit/components/Governance/Token/index.tsx"),
				E = n("./src/reddit/components/Governance/VotingReward/index.m.less"),
				N = n.n(E);

			function _(e) {
				return a.a.createElement("div", {
					className: Object(d.a)(N.a.container, e.className)
				}, a.a.createElement("div", {
					className: N.a.pill
				}, a.a.createElement(b.a, {
					className: N.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: N.a.amount
				}, "+", e.amount)))
			}
			var g, f = n("./src/reddit/actions/governance/index.ts"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/contexts/PageLayer/index.tsx"),
				O = n("./src/reddit/helpers/trackers/post.ts"),
				C = n("./src/reddit/models/Poll/index.ts"),
				y = n("./src/reddit/selectors/gov.ts"),
				x = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				I = n("./src/lib/bigNumberUtils/percent.ts"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				j = n("./src/reddit/helpers/governance/tokens.ts"),
				R = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				T = n("./src/reddit/components/Poll/ResultOption/index.m.less"),
				w = n.n(T);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(g || (g = {}));
			var k = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						n = e.result.totalVotes,
						s = e.result.options[e.optionId],
						o = new r.BigNumber(n).isZero() ? 0 : Object(I.a)(s.votes, n),
						i = Object(j.c)(s.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, w.a.container),
						title: e.displayType === g.Count ? s.votes : `${o.toFixed(2)}% (${i} ${e.tokenName})`
					}, a.a.createElement("div", {
						className: w.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: `${o}%`
						}
					}), a.a.createElement("div", {
						className: Object(d.a)(w.a.count, {
							[w.a.hide]: e.displayType !== g.Count,
							[w.a.show]: e.displayType === g.Count
						})
					}, Object(P.b)(parseInt(s.votes))), a.a.createElement("div", {
						className: Object(d.a)(w.a.percent, {
							[w.a.hide]: e.displayType === g.Count,
							[w.a.show]: e.displayType !== g.Count
						})
					}, `${o.toFixed(1)}%`), a.a.createElement("div", {
						className: w.a.text
					}, t.text), s.userSelected && a.a.createElement(R.a, {
						className: w.a.check
					}))
				},
				S = n("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				L = n.n(S);
			const A = Object(c.c)({
				tokenName: y.n,
				tokenDisplayConversion: y.m
			});
			var V = Object(i.b)(A)((function(e) {
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

			function $(e) {
				return "INPUT" === e.tagName
			}
			class W extends a.a.Component {
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
							}(Array.from(n.elements).filter($));
						B()(r) || (this.props.onVoteSelection(t.options[r]), this.props.sendEvent(Object(O.e)(t.id, t.postId, r)))
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
						className: D.n,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(F.a, {
						className: M.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(o.Fragment, null, this.props.votingIcon, q._("Vote", null, {
						hk: "4gs6FY"
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
			const Z = Object(c.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var z = Object(i.b)(Z)(Object(v.c)(W)),
				K = n("./src/reddit/components/Poll/index.m.less"),
				J = n.n(K);
			class Y extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(C.i)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(O.d)(e.id, e.postId))
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
						title: i,
						voteInProgress: c,
						votingIcon: d
					} = this.props;
					return r ? a.a.createElement("div", {
						className: e
					}, i && a.a.createElement("div", {
						className: J.a.title
					}, i), s && Object(C.g)(r, s) ? a.a.createElement(V, {
						displayType: t,
						poll: r,
						result: s,
						subredditId: o
					}) : a.a.createElement(z, {
						poll: r,
						onVoteSelection: n,
						voteInProgress: c,
						votingIcon: d
					})) : null
				}
			}
			const Q = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var X = Object(h.t)({
					isCommentsPage: h.w
				})(Object(i.b)(Q, (e, t) => ({
					onVoteSelection: n => e(Object(f.d)(t.pollId, n.id))
				}))(Object(v.c)(Y))),
				ee = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				te = n("./src/reddit/selectors/poll/index.ts"),
				ne = n("./src/reddit/selectors/postCreations.ts"),
				re = n("./src/reddit/selectors/posts.ts"),
				se = n("./src/reddit/icons/svgs/DynamicThreshold/index.tsx"),
				oe = n("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				ae = n.n(oe),
				ie = n("./node_modules/fbt/lib/FbtPublic.js");

			function ce(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: ae.a.text
				}, ie.fbt._("Achieved Decision Threshold", null, {
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
				}, ie.fbt._("Decision Threshold: {amount}", [ie.fbt._param("amount", Object(P.b)(parseInt(Object(j.b)(e.threshold, e.tokenDisplayConversion))))], {
					hk: "4p3578"
				})), a.a.createElement(le, {
					percent: e.percent
				}))
			}

			function le(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: ae.a.pieContainer,
					title: `${e.percent}%`
				}, a.a.createElement("div", {
					className: ae.a.pie
				}), a.a.createElement("div", {
					className: ae.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(d.a)(ae.a.pieMask, {
						[ae.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? `rotate(${t}deg)` : `rotate(${t-180}deg)`
					}
				}))
			}
			const ue = Object(c.c)({
				poll: (e, {
					pollId: t
				}) => e.polls.models[t],
				pollResult: (e, {
					pollId: t
				}) => e.polls.results.byVotingPower[t],
				tokenDisplayConversion: y.m
			});
			var me = Object(i.b)(ue)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(C.d)(e.poll, e.pollResult),
						n = new s.a(e.pollResult.options[t.id].votes),
						r = e.poll.decisionThreshold,
						o = n.isGreaterThanOrEqualTo(new s.a(r)),
						i = Object(I.a)(e.pollResult.options[t.id].votes, r);
					return a.a.createElement("div", {
						className: Object(d.a)(ae.a.container, e.className)
					}, o ? a.a.createElement(ce, {
						votes: n.toString()
					}) : a.a.createElement(de, {
						threshold: r,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				pe = n("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				be = n.n(pe),
				Ee = n("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				Ne = n.n(Ee);

			function _e(e) {
				return a.a.createElement("a", {
					className: Object(d.a)(e.className, Ne.a.container, {
						[Ne.a.selectable]: !!e.selectable,
						[Ne.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: ge
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const fe = Object(c.c)({
				tokenName: y.n,
				tokenDisplayConversion: y.m,
				distribution: (e, {
					subredditId: t
				}) => e.subreddits.gov.distributions[t],
				poll: (e, {
					pollId: t
				}) => e.polls.models[t],
				pollIsClosed: (e, {
					pollId: t,
					resultsByVoters: n
				}) => {
					const r = e.polls.models[t];
					return !!(r && n && Object(C.g)(r, n))
				},
				wallet: y.g
			});
			var ve = Object(i.b)(fe)((function(e) {
					const {
						distribution: t,
						poll: n,
						resultsByVoters: s,
						resultsByVotingPower: o,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: l
					} = e, u = o ? o.totalVotes : "0", m = !new r.BigNumber(u).isZero() && l && t ? Object(I.a)(u, t.totalAvailable) : 0, p = s ? s.totalVotes : "0", b = Object(j.c)(u, i), E = Object(P.b)(parseInt(p));
					return a.a.createElement("div", {
						className: Object(d.a)(e.className, be.a.container)
					}, a.a.createElement("div", null, n.type !== C.a.GA && a.a.createElement(_e, {
						isSelected: e.currentResultType === C.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: `${b} ${c}`,
						tooltipText: ge._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [ge._param("count", Object(j.c)(u, i)), ge._param("tokenName", c), ge._param("percent", m.toFixed(2)), ge._param("tokenNameAgain", c)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVotingPower)
					}), a.a.createElement(_e, {
						isSelected: e.currentResultType === C.b.ByVoters,
						selectable: e.pollIsClosed,
						text: ge._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [ge._param("count", E), ge._plural(parseInt(p))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVoters)
					})), Object(C.e)(n) && a.a.createElement(me, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				he = n("./src/reddit/components/Governance/Proposal/index.m.less"),
				Oe = n.n(he);
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
							const t = !Object(C.g)(e.poll, n),
								s = Object(C.g)(this.props.poll, r);
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
						post: i,
						className: c,
						resultsByVotingPower: l,
						pollReward: u
					} = this.props;
					if (!s || !n || !o) return null;
					if (i.isMeta && (!s || !n || !o)) return a.a.createElement(p, {
						className: Oe.a.noProposalError
					});
					let m = Oe.a.ContainerForNonCommentsPage,
						b = "";
					return e ? m = Object(d.a)(Oe.a.ForCommentsPage, {
						[Oe.a.isEditing]: t
					}) : b = Object(d.a)(Oe.a.ForNonCommentsPage, {
						[Oe.a.mHasNotVoted]: !r,
						[Oe.a.mPollIsClosed]: !!r && Object(C.g)(n, r),
						[Oe.a.mGAPoll]: n.type === C.a.GA
					}), a.a.createElement("div", {
						className: m
					}, a.a.createElement("div", {
						className: Object(d.a)(c, Oe.a.container, b),
						onClick: this.handleContainerClick
					}, a.a.createElement(ve, {
						className: Oe.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: s,
						resultsByVoters: r,
						resultsByVotingPower: l,
						subredditId: o.id,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(X, {
						key: s,
						className: Oe.a.poll,
						displayType: this.state.resultType === C.b.ByVoters ? g.Count : g.Percent,
						pollId: s,
						resultType: this.state.resultType,
						subredditId: o.id,
						votingIcon: Object(C.e)(n) ? a.a.createElement(ee.a, {
							className: Oe.a.govIcon
						}) : void 0
					}), u && this.state.displayReward && a.a.createElement(_, {
						amount: u,
						className: Oe.a.votingReward,
						subredditId: o.id
					})))
				}
			}

			function ye(e, t) {
				return t === C.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const xe = Object(c.c)({
				isEditing: ne.F,
				poll: te.e,
				pollId: te.a,
				pollReward: te.d,
				post: re.D,
				resultsByVoters: te.c,
				resultsByVotingPower: te.b,
				subredditOrProfile: re.P
			});
			t.default = Object(i.b)(xe)(Ce)
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
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/selectors/gov.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(a.c)({
				tokenSymbol: d.o
			});
			t.a = Object(o.b)(m)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = `${i.a.assetPath}/${t}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
					return s.a.createElement("div", {
						className: Object(c.a)(u.a.grey, e.className),
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
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
				return c
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "m", (function() {
				return _
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

			function c(e) {
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
			async function d(e, t, n) {
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
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				E = e => ({
					type: "subscribe",
					subredditId: e
				}),
				N = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function _(e, t) {
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
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
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
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "q", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "i", (function() {
				return E
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return C
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "j", (function() {
				return I
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts");
			const o = [],
				a = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const n = h(e, {
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
				d = (e, t) => {
					const n = f(e, t);
					if (n) return n.mainHeader
				},
				l = (e, t) => {
					const n = f(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				u = (e, t) => {
					const n = f(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : a
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				p = (e, t) => {
					const n = m(e, t),
						r = n && n.publicAddress;
					if (!r) throw new Error("No wallet address found");
					return r
				},
				b = (e, t) => {
					const n = m(e, t);
					return n && n.amount || "0"
				},
				E = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || o
				},
				N = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				_ = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				g = (e, t) => {
					const n = y(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				f = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				v = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				h = (e, t) => {
					const n = v(e, t);
					return n && n.walletProvider
				},
				O = (e, t) => {
					const n = h(e, t),
						r = v(e, t);
					return n && n.provider || r && r.provider
				},
				C = (e, t) => {
					const n = O(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby || n === s.a.EthTraderEthereum || n === s.a.EthTraderRinkeby
				},
				y = (e, t) => {
					const n = h(e, t),
						r = O(e, t);
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
				x = (e, {
					subredditId: t
				}) => {
					const n = h(e, {
						subredditId: t
					});
					return n && n.extra && n.extra.contracts && n.extra.contracts.subscriptions ? n.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const n = v(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.2446b342bebb0c8468c4.js.map