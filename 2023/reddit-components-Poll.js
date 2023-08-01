// https://www.redditstatic.com/desktop2x/reddit-components-Poll.eb437ce7674abfc45a12.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Poll"], {
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				l = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/selectors/crypto/points.ts"),
				d = s("./src/reddit/components/Governance/Token/index.m.less"),
				p = s.n(d);
			const m = Object(r.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(c.b)(e, s)
				}
			});
			t.a = Object(l.b)(m)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const n = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					l = `${a.a.assetPath}/${n}`;
				if (e.grey && l.endsWith(".svg")) {
					const t = `url(${l}) center/cover`;
					return o.a.createElement("div", {
						className: Object(i.a)(p.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return o.a.createElement("img", {
					className: e.className,
					src: l
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
		"./src/reddit/components/Poll/NoPollError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1GQmtINEsR_SdpSSF6bpXb"
			}
		},
		"./src/reddit/components/Poll/PollBody/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_1_SfHuVt3khOe_W7bpBBF-",
				option: "F6DiZ5J29ymRMLV0hey1x"
			}
		},
		"./src/reddit/components/Poll/PollBody/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_1IRL40baisCHOgVx5-nRcF",
				loggedOutTooltip: "_2axyMw1olyQSpdOj7sKW77",
				controlRow: "_2LKDAlxxxbXH_38i2yALsT",
				loadingIcon: "_2iHqhPeqQTiw5pMYbTUZHG",
				metaData: "_1BTyR2Gat3WNT1TAbkbU_B",
				option: "_3ST8iDYI6GqAhFV9WjoLVm",
				optionRadio: "_1XF21rwglMWrx_A4Hl9AvH",
				optionText: "_2i69-XcdWxCweTZ_Q5eQsd"
			}
		},
		"./src/reddit/components/Poll/PollBody/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "Jz1mV4fpTSzPIgl2ROwml",
				"m-winning": "_2wpQ1j9eHY-iHtoB3CNMNY",
				mWinning: "_2wpQ1j9eHY-iHtoB3CNMNY",
				check: "_1D-ia-yMo19N_oSZaVggIv",
				container: "_3f1Zkm31y61HQ9s9cdWAHR",
				count: "_1InAvR50xXN8IvYYJXBzeH",
				percent: "_1V-VNtbEGMHmoE45-09_eG",
				hide: "_1EdyqT4CnmoOTKziCl7qt9",
				show: "_3WiWUjWY37G6rkAm78JTLd",
				text: "_3P07HZTvGYr8jZJqBNVWlC"
			}
		},
		"./src/reddit/components/Poll/PollBody/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_1CZXOKckzvDhqvsGORFh7t"
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_13LKAM0J8rM-sl9oCfTamT",
				fullPie: "_2kIyFj6AYX8fcdxJh-JELn",
				checkIcon: "_1YcbTQQX9kkjDWt3piMMnR",
				container: "_1gZV2_MTn0h35g1S6igHHP",
				decisionIcon: "_2yz-Hy7oZ4f9R5QScnSNIs",
				decisionThreshold: "_1njozTIqraTA0aiVrpF2NU",
				pie: "_3mElAd4S8IaS6F20zlT1B2",
				pieContainer: "_2ieuDftvrAcKEs4yT-OO3V",
				pieInvertedMask: "_2AFpyAuuVYWzVFWd-6W0CP",
				pieMask: "fnT0KCJBKGwD0KAWx25rB",
				pieSwap: "_1A-p2ROi_a8tq5Rt3up670",
				text: "_2LG7O4xP5Z4aoyQCeabv0n"
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3-DDmk9bdzkd5bJq2Objai",
				selectable: "_2IAfMBuHLukYQTLI5_Z5Nu",
				selected: "DTBgaoab9JdaywJZPiOUg"
			}
		},
		"./src/reddit/components/Poll/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "xRxxwCB5DyVUCeHnmQ7yX"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17oataQxiAOm0EtiuxeElR",
				govIcon: "_2VIAfqUJAT1ou7_nYQP70C",
				poll: "_1-QPevrR8hVMYmv4IGpuXA",
				resultsSelector: "_3j5JtY0pholzCspdR5ojF8",
				votingReward: "_3TiVqp4KIK-7VvtjJhnbNw",
				ForCommentsPage: "_3x3Wvtd6gnKaGIsNplnp4h",
				forCommentsPage: "_3x3Wvtd6gnKaGIsNplnp4h",
				isEditing: "_3Y0u2_WUa7aI3rI1Xm_Ub9",
				ForNonCommentsPage: "_2GSZ9288ptEDvgEc8_vmqv",
				forNonCommentsPage: "_2GSZ9288ptEDvgEc8_vmqv",
				ContainerForNonCommentsPage: "_130BhnfNfKn0dAZDxniNMK",
				containerForNonCommentsPage: "_130BhnfNfKn0dAZDxniNMK",
				noPollError: "_16oxzoeKcycPKn8-8xcack",
				mHasNotVoted: "_1DTkqI8Vr3R16ii_iA0eHV",
				mGAPoll: "_2PigoiHEUbgM9csai63tLu",
				mGaPoll: "_2PigoiHEUbgM9csai63tLu",
				mPollIsClosed: "_2Csk4tjvy8QfMLR2GyemBp"
			}
		},
		"./src/reddit/components/Poll/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				o = s.n(n),
				l = s("./node_modules/react/index.js"),
				r = s.n(l),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				p = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				m = s.n(p);

			function u(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(m.a.container, e.className)
				}, r.a.createElement("div", {
					className: m.a.pill
				}, r.a.createElement(d.a, {
					className: m.a.token,
					subredditId: e.subredditId
				}), r.a.createElement("span", {
					className: m.a.amount
				}, "+", e.amount)))
			}
			var b, v = s("./src/lib/bigNumberUtils/percent.ts"),
				g = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/helpers/governance/tokens.ts"),
				x = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				C = s("./src/reddit/components/Poll/PollBody/ResultOption/index.m.less"),
				y = s.n(C);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var N = function(e) {
					var t, s;
					const o = e.poll.options.filter(t => t.id === e.optionId)[0],
						l = e.result.totalVotes,
						a = e.result.options[e.optionId],
						i = new n.BigNumber(l).isZero() ? 0 : Object(v.a)(a.votes, l),
						d = Object(h.d)(a.votes, null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion);
					return r.a.createElement("div", {
						className: Object(c.a)(e.className, y.a.container),
						title: e.displayType === b.Count ? a.votes : `${i.toFixed(2)}% (${d} ${null===(s=null==e?void 0:e.pointsDetails)||void 0===s?void 0:s.name})`
					}, r.a.createElement("div", {
						className: y.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: `${i}%`
						}
					}), r.a.createElement("div", {
						className: Object(c.a)(y.a.count, {
							[y.a.hide]: e.displayType !== b.Count,
							[y.a.show]: e.displayType === b.Count
						})
					}, Object(g.b)(parseInt(a.votes))), r.a.createElement("div", {
						className: Object(c.a)(y.a.percent, {
							[y.a.hide]: e.displayType === b.Count,
							[y.a.show]: e.displayType !== b.Count
						})
					}, `${i.toFixed(1)}%`), r.a.createElement("div", {
						className: y.a.text
					}, o.text), a.userSelected && r.a.createElement(x.a, {
						className: y.a.check
					}))
				},
				_ = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				E = s("./src/reddit/models/Poll/index.ts"),
				I = s("./src/reddit/selectors/poll/index.ts"),
				P = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/components/Poll/NoPollError/index.m.less"),
				j = s.n(O);
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function w(e) {
				return r.a.createElement("div", {
					className: Object(c.a)(j.a.container, e.className)
				}, T._("Error: Could not load poll", null, {
					hk: "WWRIU"
				}))
			}
			var L = s("./src/reddit/actions/governance/index.ts"),
				R = s("./src/reddit/components/TrackingHelper/index.tsx"),
				B = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/helpers/trackers/post.ts"),
				V = s("./src/reddit/selectors/crypto/points.ts"),
				k = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = s("./src/reddit/components/Poll/PollBody/ClosedPoll/index.m.less"),
				D = s.n(A);

			function M(e) {
				let t;
				const {
					pointsDetails: s
				} = Object(V.c)();
				return e.poll.options.forEach(s => {
					t || (t = s);
					const o = e.result.options[s.id],
						l = e.result.options[t.id];
					new n.BigNumber(l.votes).isLessThan(new n.BigNumber(o.votes)) && (t = s)
				}), r.a.createElement("div", {
					className: e.className
				}, e.poll.options.map((n, o) => r.a.createElement(N, {
					key: o,
					className: D.a.option,
					displayType: e.displayType,
					isWinningOption: n === t,
					optionId: n.id,
					poll: e.poll,
					result: e.result,
					pointsDetails: s
				})), r.a.createElement(k.a, {
					className: D.a.metaData,
					poll: e.poll
				}))
			}
			var H = s("./node_modules/lodash/isNil.js"),
				G = s.n(H),
				F = s("./src/reddit/constants/elementClassNames.ts"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Z = s("./src/reddit/components/Poll/PollBody/OpenPoll/index.m.less"),
				q = s.n(Z);
			const {
				fbt: z
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function U(e) {
				return "INPUT" === e.tagName
			}
			class J extends r.a.Component {
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
							}(Array.from(s.elements).filter(U));
						G()(n) || (this.props.onVoteSelection(t.options[n]), this.props.sendEvent(Object(S.m)(t.id, t.postId, n)))
					}
				}
				render() {
					return r.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, r.a.createElement("div", null, this.props.poll.options.map((e, t) => r.a.createElement("label", {
						key: t,
						className: q.a.option
					}, r.a.createElement("input", {
						className: q.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), r.a.createElement("div", {
						className: q.a.optionText
					}, e.text)))), r.a.createElement("div", {
						className: q.a.controlRow
					}, r.a.createElement("div", {
						className: q.a.buttonContainer
					}, r.a.createElement(K.o, {
						className: F.n,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? r.a.createElement(W.a, {
						className: q.a.loadingIcon,
						sizePx: 20
					}) : r.a.createElement(l.Fragment, null, this.props.votingIcon, z._("Vote", null, {
						hk: "4gs6FY"
					}))), !this.props.userIsLoggedIn && r.a.createElement("div", {
						className: q.a.loggedOutTooltip
					}, z._("You must be logged in to vote", null, {
						hk: "MnQpC"
					}))), r.a.createElement(k.a, {
						className: q.a.metaData,
						poll: this.props.poll
					})))
				}
			}
			const Y = Object(i.c)({
				userIsLoggedIn: e => !!e.user.account
			});
			var Q = Object(a.b)(Y)(Object(R.c)(J)),
				X = s("./src/reddit/components/Poll/PollBody/index.m.less"),
				$ = s.n(X);
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(E.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(S.l)(e.id, e.postId))
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
						subredditId: l,
						title: a,
						voteInProgress: i,
						votingIcon: c
					} = this.props;
					return n ? r.a.createElement("div", {
						className: e
					}, a && r.a.createElement("div", {
						className: $.a.title
					}, a), o && Object(E.e)(n, o) ? r.a.createElement(M, {
						displayType: t,
						poll: n,
						result: o,
						subredditId: l
					}) : r.a.createElement(Q, {
						poll: n,
						onVoteSelection: s,
						voteInProgress: i,
						votingIcon: c
					})) : null
				}
			}
			const te = Object(i.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var se = Object(B.v)({
					isCommentsPage: B.y
				})(Object(a.b)(te, (e, t) => ({
					onVoteSelection: s => e(Object(L.d)(t.pollId, s.id))
				}))(Object(R.c)(ee))),
				ne = s("./src/reddit/selectors/gov.ts"),
				oe = s("./src/reddit/icons/svgs/DynamicThreshold/index.tsx"),
				le = s("./src/reddit/components/Poll/ResultsSelector/DecisionThreshold/index.m.less"),
				re = s.n(le),
				ae = s("./node_modules/fbt/lib/FbtPublic.js");

			function ie(e) {
				return r.a.createElement(l.Fragment, null, r.a.createElement("div", {
					className: re.a.text
				}, ae.fbt._("Achieved Decision Threshold", null, {
					hk: "vyCtz"
				})), r.a.createElement("div", {
					className: re.a.decisionIcon,
					title: e.votes
				}, r.a.createElement(oe.a, {
					className: re.a.decisionThreshold
				})))
			}

			function ce(e) {
				return r.a.createElement(l.Fragment, null, r.a.createElement("div", {
					className: re.a.text
				}, ae.fbt._("Decision Threshold: {amount}", [ae.fbt._param("amount", Object(g.b)(parseInt(Object(h.c)(e.threshold, e.tokenDisplayConversion))))], {
					hk: "4p3578"
				})), r.a.createElement(de, {
					percent: e.percent
				}))
			}

			function de(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return r.a.createElement("div", {
					className: re.a.pieContainer,
					title: `${e.percent}%`
				}, r.a.createElement("div", {
					className: re.a.pie
				}), r.a.createElement("div", {
					className: re.a.pieInvertedMask
				}), r.a.createElement("div", {
					className: Object(c.a)(re.a.pieMask, {
						[re.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? `rotate(${t}deg)` : `rotate(${t-180}deg)`
					}
				}))
			}
			const pe = Object(i.c)({
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
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(V.b)(e, s)
				}
			});
			var me = Object(a.b)(pe)((function(e) {
					var t;
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const s = Object(E.c)(e.poll, e.pollResult),
						n = new o.a(e.pollResult.options[s.id].votes),
						l = e.poll.decisionThreshold,
						a = n.isGreaterThanOrEqualTo(new o.a(l)),
						i = Object(v.a)(e.pollResult.options[s.id].votes, l);
					return r.a.createElement("div", {
						className: Object(c.a)(re.a.container, e.className)
					}, a ? r.a.createElement(ie, {
						votes: n.toString()
					}) : r.a.createElement(ce, {
						threshold: l,
						percent: i,
						tokenDisplayConversion: null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.displayConversion
					}))
				})),
				ue = s("./src/reddit/components/Poll/ResultsSelector/index.m.less"),
				be = s.n(ue),
				ve = s("./src/reddit/components/Poll/ResultsSelector/Tab/index.m.less"),
				ge = s.n(ve);

			function he(e) {
				return r.a.createElement("a", {
					className: Object(c.a)(e.className, ge.a.container, {
						[ge.a.selectable]: !!e.selectable,
						[ge.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			const {
				fbt: xe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const Ce = Object(i.c)({
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(V.b)(e, s)
				},
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
					return !!(o && n && Object(E.e)(o, n))
				},
				wallet: ne.d
			});
			var ye = Object(a.b)(Ce)((function(e) {
					const {
						distribution: t,
						pointsDetails: s,
						poll: o,
						resultsByVoters: l,
						resultsByVotingPower: a,
						wallet: i
					} = e, d = a ? a.totalVotes : "0", p = !new n.BigNumber(d).isZero() && i && t ? Object(v.a)(d, t.totalAvailable) : 0, m = l ? l.totalVotes : "0", u = Object(h.d)(d, null == s ? void 0 : s.displayConversion), b = Object(g.b)(parseInt(m)), x = null == s ? void 0 : s.name;
					return r.a.createElement("div", {
						className: Object(c.a)(e.className, be.a.container)
					}, r.a.createElement("div", null, o.type !== E.a.GA && r.a.createElement(he, {
						isSelected: e.currentResultType === E.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: `${u} ${x}`,
						tooltipText: xe._("{count} {tokenName} ({percent}% of all {tokenNameAgain})", [xe._param("count", u), xe._param("tokenName", x), xe._param("percent", p.toFixed(2)), xe._param("tokenNameAgain", x)], {
							hk: "3R2TN1"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVotingPower)
					}), r.a.createElement(he, {
						isSelected: e.currentResultType === E.b.ByVoters,
						selectable: e.pollIsClosed,
						text: xe._({
							"*": "{count} votes",
							_1: "{count} vote"
						}, [xe._param("count", b), xe._plural(parseInt(m))], {
							hk: "3oK0a3"
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVoters)
					})), Object(E.d)(o) && r.a.createElement(me, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				Ne = s("./src/reddit/components/Poll/index.m.less"),
				_e = s.n(Ne);
			class Ee extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll && this.props.poll.type === E.a.GA ? E.b.ByVoters : E.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll && this.props.poll.type === E.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new n.BigNumber(this.props.pollReward).isZero()) {
						const s = Ie(e, t.resultType),
							n = Ie(this.props, this.state.resultType);
						if (s && n && e.poll && this.props.poll) {
							const t = !Object(E.e)(e.poll, s),
								o = Object(E.e)(this.props.poll, n);
							t && o && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					const {
						isCommentsPage: e,
						isEditing: t,
						poll: s,
						resultsByVoters: n,
						pollId: o,
						subredditOrProfile: l,
						post: a,
						className: i,
						resultsByVotingPower: d,
						pollReward: p
					} = this.props;
					if (!o || !s || !l) return null;
					if (a.isMeta && (!o || !s || !l)) return r.a.createElement(w, {
						className: _e.a.noPollError
					});
					let m = _e.a.ContainerForNonCommentsPage,
						v = "";
					return e ? m = Object(c.a)(_e.a.ForCommentsPage, {
						[_e.a.isEditing]: t
					}) : v = Object(c.a)(_e.a.ForNonCommentsPage, {
						[_e.a.mHasNotVoted]: !n,
						[_e.a.mPollIsClosed]: !!n && Object(E.e)(s, n),
						[_e.a.mGAPoll]: s.type === E.a.GA
					}), r.a.createElement("div", {
						className: m
					}, r.a.createElement("div", {
						className: Object(c.a)(i, _e.a.container, v),
						onClick: this.handleContainerClick
					}, r.a.createElement(ye, {
						className: _e.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: o,
						resultsByVoters: n,
						resultsByVotingPower: d,
						subredditId: l.id,
						onChangeResultType: this.handleResultTypeChange
					}), r.a.createElement(se, {
						key: o,
						className: _e.a.poll,
						displayType: this.state.resultType === E.b.ByVoters ? b.Count : b.Percent,
						pollId: o,
						resultType: this.state.resultType,
						subredditId: l.id,
						votingIcon: Object(E.d)(s) ? r.a.createElement(_.a, {
							className: _e.a.govIcon
						}) : void 0
					}), p && this.state.displayReward && r.a.createElement(u, {
						amount: p,
						className: _e.a.votingReward,
						subredditId: l.id
					})))
				}
			}

			function Ie(e, t) {
				return t === E.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const Pe = Object(i.c)({
				isEditing: P.M,
				poll: I.e,
				pollId: I.a,
				pollReward: I.d,
				post: f.F,
				resultsByVoters: I.c,
				resultsByVotingPower: I.b,
				subredditOrProfile: f.U
			});
			t.default = Object(a.b)(Pe)(Ee)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				l = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = s.n(r);
			t.a = e => {
				let {
					center: t,
					className: s,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(l.a)(a.a.loadingIcon, s, {
						[a.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				o = s("./src/lib/prettyPrintNumber/index.ts");

			function l(e, t) {
				const s = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return s.dividedToIntegerBy(o).toString()
			}

			function r(e, t) {
				return Object(o.b)(parseInt(l(e, t), 10))
			}

			function a(e, t) {
				const s = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return s.multipliedBy(o).toFixed(0)
			}

			function i(e) {
				const t = new n.BigNumber(e),
					s = new n.BigNumber("1e18");
				return t.dividedBy(s).toString()
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
		"./src/reddit/icons/svgs/DynamicThreshold/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				"fill-rule": "evenodd",
				"clip-rule": "evenodd",
				d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
			})))
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
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx");
			const o = [],
				l = {},
				r = (e, t) => {
					const s = u(e, t);
					if (s) return s.mainHeader
				},
				a = (e, t) => {
					const s = u(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				i = (e, t) => {
					const s = u(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : l
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const s = c(e, t),
						n = s && s.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				p = (e, t) => {
					const s = c(e, t);
					return s && s.amount || "0"
				},
				m = (e, t) => {
					const s = Object(n.o)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || o
				},
				u = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Poll.eb437ce7674abfc45a12.js.map