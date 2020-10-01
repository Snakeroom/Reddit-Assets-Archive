// https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.188f8ac88e444e231244.js
// Retrieved at 10/1/2020, 5:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Governance-Proposal"], {
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
				return y
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "h", (function() {
				return V
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/endpoints/governance/poll.ts"),
				d = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");
			var p = n("./src/reddit/endpoints/governance/wallet.ts"),
				m = n("./src/reddit/models/Poll/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/gov.ts"),
				v = n("./src/reddit/actions/governance/constants.ts"),
				f = n("./src/reddit/actions/governance/errorToast.ts");
			const y = Object(r.a)(v.b),
				O = Object(r.a)(v.c),
				x = Object(r.a)(v.e),
				j = (Object(r.a)(v.f), Object(r.a)(v.g), Object(r.a)(v.h)),
				C = Object(r.a)(v.i),
				N = Object(r.a)(v.j),
				I = Object(r.a)(v.k),
				E = Object(r.a)(v.q),
				_ = Object(r.a)(v.r),
				w = Object(r.a)(v.s),
				P = Object(r.a)(v.t),
				k = Object(r.a)(v.u),
				T = Object(r.a)(v.v),
				R = Object(r.a)(v.w),
				B = Object(r.a)(v.x),
				S = (e, t) => async (n, s, r) => {
					let o, {
							apiContext: a,
							gqlContext: i
						} = r,
						d = s().polls.models[e];
					if (n(N({
							pollId: e
						})), (o = d.type === m.a.GA ? await Object(l.c)(i(), e, t) : await Object(l.b)(a(), d.subredditId, e, t)).ok) {
						if (d.type === m.a.GA) {
							const {
								options: e
							} = o.body.data.updatePostPollVoteState.poll;
							n(x({
								pollId: d.id,
								optionId: t,
								options: e
							}))
						} else n(I(o.body));
						const r = s();
						if ((d = r.polls.models[e]) && Object(m.d)(d)) {
							const {
								postId: e
							} = d, t = r.posts.models[e];
							t && t.voteState === g.a.notVoted && n(Object(c.S)(e))
						}
					} else n(C({
						pollId: e,
						error: o.error || o.errors[0].message
					})), Object(f.a)(n, o.error || o.errors[0].messsage)
				}, L = (e, t) => async (n, r, c) => {
					let {
						apiContext: l
					} = c;
					n(w());
					const p = r().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(u.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(d.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(l(), Object.assign(Object.assign({}, e), {
						contentId: p
					}));
					m.ok ? (n(P(Object.assign(Object.assign({}, m.body), {
						subredditId: e.subredditId
					}))), n(Object(i.e)({
						kind: b.b.SuccessCommunity,
						text: s.fbt._("Success! You just transferred {amount} {tokenName} to {recipient}", [s.fbt._param("amount", Object(o.a)(e.amount)), s.fbt._param("tokenName", Object(h.q)(r(), {
							subredditId: e.subredditId
						})), s.fbt._param("recipient", e.recipient)], {
							hk: "3klrhq"
						})
					})), t && n(Object(a.f)())) : (n(E({
						error: m.error
					})), Object(f.a)(n, m.error))
				}, V = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					t(T());
					const o = await Object(p.a)(r(), e);
					o.ok ? t(R(o.body)) : t(k({
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
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				u = n.n(d);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var m = function(e) {
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.container, e.className)
					}, p._("Error: Could not load poll", null, {
						hk: "WWRIU"
					}))
				},
				b = n("./src/reddit/components/Governance/Token/index.tsx"),
				g = n("./src/reddit/components/Governance/VotingReward/index.m.less"),
				h = n.n(g);

			function v(e) {
				return a.a.createElement("div", {
					className: Object(l.a)(h.a.container, e.className)
				}, a.a.createElement("div", {
					className: h.a.pill
				}, a.a.createElement(b.a, {
					className: h.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: h.a.amount
				}, "+", e.amount)))
			}
			var f, y = n("./src/reddit/actions/governance/index.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				j = n("./src/reddit/helpers/trackers/post.ts"),
				C = n("./src/reddit/models/Poll/index.ts"),
				N = n("./src/reddit/selectors/gov.ts"),
				I = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				E = n("./src/lib/bigNumberUtils/percent.ts"),
				_ = n("./src/lib/prettyPrintNumber/index.ts"),
				w = n("./src/reddit/helpers/governance/tokens.ts"),
				P = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				k = n("./src/reddit/components/Poll/ResultOption/index.m.less"),
				T = n.n(k);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(f || (f = {}));
			var R = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						n = e.result.totalVotes,
						r = e.result.options[e.optionId],
						o = new s.BigNumber(n).isZero() ? 0 : Object(E.a)(r.votes, n),
						c = Object(w.c)(r.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.container),
						title: e.displayType === f.Count ? r.votes : "".concat(o.toFixed(2), "% (").concat(c, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: T.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(o, "%")
						}
					}), a.a.createElement("div", {
						className: Object(l.a)(T.a.count, {
							[T.a.hide]: e.displayType !== f.Count,
							[T.a.show]: e.displayType === f.Count
						})
					}, Object(_.b)(parseInt(r.votes))), a.a.createElement("div", {
						className: Object(l.a)(T.a.percent, {
							[T.a.hide]: e.displayType === f.Count,
							[T.a.show]: e.displayType !== f.Count
						})
					}, "".concat(o.toFixed(1), "%")), a.a.createElement("div", {
						className: T.a.text
					}, t.text), r.userSelected && a.a.createElement(P.a, {
						className: T.a.check
					}))
				},
				B = n("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				S = n.n(B);
			const L = Object(i.c)({
				tokenName: N.q,
				tokenDisplayConversion: N.p
			});
			var V = Object(c.b)(L)((function(e) {
					let t;
					return e.poll.options.forEach(n => {
						t || (t = n);
						const r = e.result.options[n.id],
							o = e.result.options[t.id];
						new s.BigNumber(o.votes).isLessThan(new s.BigNumber(r.votes)) && (t = n)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((n, s) => a.a.createElement(R, {
						key: s,
						className: S.a.option,
						displayType: e.displayType,
						isWinningOption: n === t,
						optionId: n.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(I.a, {
						className: S.a.metaData,
						poll: e.poll
					}))
				})),
				D = n("./node_modules/lodash/isNil.js"),
				H = n.n(D),
				A = n("./src/reddit/constants/elementClassNames.ts"),
				G = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = n("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				U = n.n(F);
			const {
				fbt: M
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Z(e) {
				return "INPUT" === e.tagName
			}
			class z extends a.a.Component {
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
							s = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(n.elements).filter(Z));
						H()(s) || (this.props.onVoteSelection(t.options[s]), this.props.sendEvent(Object(j.e)(t.id, t.postId, s)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: U.a.option
					}, a.a.createElement("input", {
						className: U.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: U.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: U.a.controlRow
					}, a.a.createElement("div", {
						className: U.a.buttonContainer
					}, a.a.createElement(G.l, {
						className: A.o,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(q.a, {
						className: U.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(o.Fragment, null, this.props.votingIcon, M._("vote", null, {
						hk: "2XhbHK"
					}))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: U.a.loggedOutTooltip
					}, M._("You must be logged in to vote", null, {
						hk: "MnQpC"
					}))), a.a.createElement(I.a, {
						className: U.a.metaData,
						poll: this.props.poll
					})))
				}
			}
			const K = Object(i.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var J = Object(c.b)(K)(Object(O.c)(z)),
				Q = n("./src/reddit/components/Poll/index.m.less"),
				W = n.n(Q);
			class Y extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(C.h)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(j.d)(e.id, e.postId))
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
						poll: s,
						result: r,
						subredditId: o,
						title: c,
						voteInProgress: i,
						votingIcon: l
					} = this.props;
					return s ? a.a.createElement("div", {
						className: e
					}, c && a.a.createElement("div", {
						className: W.a.title
					}, c), r && Object(C.f)(s, r) ? a.a.createElement(V, {
						displayType: t,
						poll: s,
						result: r,
						subredditId: o
					}) : a.a.createElement(J, {
						poll: s,
						onVoteSelection: n,
						voteInProgress: i,
						votingIcon: l
					})) : null
				}
			}
			const X = Object(i.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var $ = Object(x.t)({
					isCommentsPage: x.w
				})(Object(c.b)(X, (e, t) => ({
					onVoteSelection: n => e(Object(y.d)(t.pollId, n.id))
				}))(Object(O.c)(Y))),
				ee = n("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				te = n("./src/reddit/selectors/poll/index.ts"),
				ne = n("./src/reddit/selectors/postCreations.ts"),
				se = n("./src/reddit/selectors/posts.ts"),
				re = (n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./src/reddit/icons/svgs/DynamicThreshold/index.tsx")),
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
				}, a.a.createElement(re.a, {
					className: ae.a.decisionThreshold
				})))
			}

			function le(e) {
				return a.a.createElement(o.Fragment, null, a.a.createElement("div", {
					className: ae.a.text
				}, ce.fbt._("Decision Threshold: {amount}", [ce.fbt._param("amount", Object(_.b)(parseInt(Object(w.b)(e.threshold, e.tokenDisplayConversion))))], {
					hk: "4p3578"
				})), a.a.createElement(de, {
					percent: e.percent
				}))
			}

			function de(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: ae.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: ae.a.pie
				}), a.a.createElement("div", {
					className: ae.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(l.a)(ae.a.pieMask, {
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
				tokenDisplayConversion: N.p
			});
			var pe = Object(c.b)(ue)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(C.c)(e.poll, e.pollResult),
						n = new r.a(e.pollResult.options[t.id].votes),
						s = e.poll.decisionThreshold,
						o = n.isGreaterThanOrEqualTo(new r.a(s)),
						c = Object(E.a)(e.pollResult.options[t.id].votes, s);
					return a.a.createElement("div", {
						className: Object(l.a)(ae.a.container, e.className)
					}, o ? a.a.createElement(ie, {
						votes: n.toString()
					}) : a.a.createElement(le, {
						threshold: s,
						percent: c,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				me = n("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				be = n.n(me),
				ge = n("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				he = n.n(ge);

			function ve(e) {
				return a.a.createElement("a", {
					className: Object(l.a)(e.className, he.a.container, {
						[he.a.selectable]: !!e.selectable,
						[he.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: fe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const ye = Object(i.c)({
				tokenName: N.q,
				tokenDisplayConversion: N.p,
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
						resultsByVoters: s
					} = t;
					const r = e.polls.models[n];
					return !!(r && s && Object(C.f)(r, s))
				},
				wallet: N.g
			});
			var Oe = Object(c.b)(ye)((function(e) {
					const {
						distribution: t,
						poll: n,
						resultsByVoters: r,
						resultsByVotingPower: o,
						tokenDisplayConversion: c,
						tokenName: i,
						wallet: d
					} = e, u = o ? o.totalVotes : "0", p = !new s.BigNumber(u).isZero() && d && t ? Object(E.a)(u, t.totalAvailable) : 0, m = r ? r.totalVotes : "0", b = Object(w.c)(u, c), g = Object(_.b)(parseInt(m));
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, be.a.container)
					}, a.a.createElement("div", null, n.type !== C.a.GA && a.a.createElement(ve, {
						isSelected: e.currentResultType === C.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(i),
						tooltipText: fe._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [fe._param("count", Object(w.c)(u, c)), fe._param("tokenName", i), fe._param("percent", p.toFixed(2)), fe._param("tokenNameAgain", i)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVotingPower)
					}), a.a.createElement(ve, {
						isSelected: e.currentResultType === C.b.ByVoters,
						selectable: e.pollIsClosed,
						text: fe._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [fe._param("count", g), fe._plural(parseInt(m))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(C.b.ByVoters)
					})), Object(C.d)(n) && a.a.createElement(pe, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				xe = n("./src/reddit/components/Governance/Proposal/index.m.less"),
				je = n.n(xe);
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
					if (!!this.props.pollReward && !new s.BigNumber(this.props.pollReward).isZero()) {
						const n = Ne(e, t.resultType),
							s = Ne(this.props, this.state.resultType);
						if (n && s && e.poll && this.props.poll) {
							const t = !Object(C.f)(e.poll, n),
								r = Object(C.f)(this.props.poll, s);
							t && r && this.setState({
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
						resultsByVoters: s,
						pollId: r,
						subredditOrProfile: o,
						post: c,
						className: i,
						resultsByVotingPower: d,
						pollReward: u
					} = this.props;
					if (!r || !n || !o) return null;
					if (c.isMeta && (!r || !n || !o)) return a.a.createElement(m, {
						className: je.a.noProposalError
					});
					let p = je.a.ContainerForNonCommentsPage,
						b = "";
					return e ? p = Object(l.a)(je.a.ForCommentsPage, {
						[je.a.isEditing]: t
					}) : b = Object(l.a)(je.a.ForNonCommentsPage, {
						[je.a.mHasNotVoted]: !s,
						[je.a.mPollIsClosed]: !!s && Object(C.f)(n, s),
						[je.a.mGAPoll]: n.type === C.a.GA
					}), a.a.createElement("div", {
						className: p
					}, a.a.createElement("div", {
						className: Object(l.a)(i, je.a.container, b),
						onClick: this.handleContainerClick
					}, a.a.createElement(Oe, {
						className: je.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: r,
						resultsByVoters: s,
						resultsByVotingPower: d,
						subredditId: o.id,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement($, {
						key: r,
						className: je.a.poll,
						displayType: this.state.resultType === C.b.ByVoters ? f.Count : f.Percent,
						pollId: r,
						resultType: this.state.resultType,
						subredditId: o.id,
						votingIcon: Object(C.d)(n) ? a.a.createElement(ee.a, {
							className: je.a.govIcon
						}) : void 0
					}), u && this.state.displayReward && a.a.createElement(v, {
						amount: u,
						className: je.a.votingReward,
						subredditId: o.id
					})))
				}
			}

			function Ne(e, t) {
				return t === C.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const Ie = Object(i.c)({
				isEditing: ne.F,
				poll: te.e,
				pollId: te.a,
				pollReward: te.d,
				post: se.N,
				resultsByVoters: te.c,
				resultsByVotingPower: te.b,
				subredditOrProfile: se.ab
			});
			t.default = Object(c.b)(Ie)(Ce)
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/selectors/gov.ts"),
				d = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(d);
			const p = Object(a.c)({
				tokenSymbol: l.r
			});
			t.a = Object(o.b)(p)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					n = "".concat(c.a.assetPath, "/").concat(t);
				if (e.grey && n.endsWith(".svg")) {
					const t = "url(".concat(n, ") center/cover");
					return r.a.createElement("div", {
						className: Object(i.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
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
				return s
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "l", (function() {
				return h
			}));
			var s, r = n("./src/config.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "Ethereum Main Network";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error("No JSON RPC url for provider: ".concat(e))
			}

			function i(e) {
				switch (e) {
					case s.Ethereum:
					case s.EthTraderEthereum:
						return "homestead";
					case s.Rinkeby:
					case s.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error("No ethereum network for provider: ".concat(e))
			}
			async function l(e, t, n) {
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
			async function u(e, t, n) {
				return await Object(o.a)(e, {
					method: "delete",
					endpoint: "".concat(r.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(s || (s = {}));
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
				g = (e, t, n, s) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: s
				});
			async function h(e, t) {
				return await Object(o.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/crypto/ethereum/transaction-intent"),
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
			var s = n("./node_modules/lodash/get.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				a = n("./src/graphql/operations/PollVote.json"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts"),
				d = (n("./src/reddit/models/Poll/index.ts"), n("./src/reddit/endpoints/governance/requester.ts"));

			function u(e, t, n, s) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(o.a.metaUrl, "/polls/").concat(t, "/").concat(n, "/votes/me/").concat(s)
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
				return Object(d.a)(Object(i.a)(e, [l.a]), {
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
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				r = (n("./src/lib/bigNumberUtils/percent.ts"), n("./src/lib/constants/index.ts")),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
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

			function c(e, t) {
				return Object(o.a)(e, {
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
			var s = n("./node_modules/bignumber.js/bignumber.js"),
				r = n("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.dividedToIntegerBy(r).toString()
			}

			function a(e, t) {
				return Object(r.b)(parseInt(o(e, t), 10))
			}

			function c(e, t) {
				const n = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return n.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), r.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), r.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), r.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), r.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
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
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "r", (function() {
				return j
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "n", (function() {
				return I
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "l", (function() {
				return T
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				r = n("./src/reddit/endpoints/governance/crypto.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				c = n("./src/reddit/selectors/postCreations.ts");
			const i = [],
				l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = E(e, {
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
				p = (e, t) => {
					const n = N(e, t);
					if (n) return n.mainHeader
				},
				m = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				b = (e, t) => {
					const n = N(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : l
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				h = (e, t) => {
					const n = g(e, t),
						s = n && n.publicAddress;
					if (!s) throw new Error("No wallet address found");
					return s
				},
				v = (e, t) => {
					const n = g(e, t);
					return n && n.amount || "0"
				},
				f = (e, t) => {
					if (Object(a.a)(e)) {
						const t = Object(c.g)(e);
						if (t.allowedPostTypes && t.allowedPostTypes.polls) return !0
					}
					const n = o.d.spPolls(e),
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
				O = (e, t) => {
					const n = Object(s.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || i
				},
				x = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				C = (e, t) => {
					const n = P(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				N = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				I = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				E = (e, t) => {
					const n = I(e, t);
					return n && n.walletProvider
				},
				_ = (e, t) => {
					const n = E(e, t),
						s = I(e, t);
					return n && n.provider || s && s.provider
				},
				w = (e, t) => {
					const n = _(e, t);
					return n === r.a.Ethereum || n === r.a.Rinkeby || n === r.a.EthTraderEthereum || n === r.a.EthTraderRinkeby
				},
				P = (e, t) => {
					const n = E(e, t),
						s = _(e, t);
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
				k = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = E(e, {
						subredditId: n
					});
					return s && s.extra && s.extra.contracts && s.extra.contracts.subscriptions ? s.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				T = (e, t) => {
					const n = I(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Governance-Proposal.188f8ac88e444e231244.js.map