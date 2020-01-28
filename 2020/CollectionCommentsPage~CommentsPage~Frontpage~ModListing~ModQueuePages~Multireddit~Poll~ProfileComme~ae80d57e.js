// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e.8b1e525a9cf325984751.js
// Retrieved at 1/28/2020, 6:10:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"], {
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				i = s("./src/reddit/components/PostFollow/index.tsx"),
				d = s("./src/reddit/helpers/postCollection.ts"),
				p = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(m);
			const x = l.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: l
				} = e;
				if (!Object(p.a)(l)) return null;
				const m = l && l.eventInfo,
					b = Object(d.a)(l),
					v = m && Object(r.c)(m.eventStart, m.eventEnd);
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(x, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					language: n,
					post: l
				}), !b && v && o.a.createElement(i.a, {
					className: u.a.eventFollowButton,
					post: l,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/eventTools/index.ts"),
				r = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				l = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(m),
				x = s("./src/lib/lessComponent.tsx");
			const b = x.a.span("PostEventFutureText", u.a),
				v = x.a.span("PostEventPastText", u.a),
				h = x.a.span("PostEventNowText", u.a),
				E = x.a.span("Container", u.a),
				g = x.a.wrapped(d.a, "CalendarIcon", u.a),
				C = x.a.wrapped(p.a, "LiveIcon", u.a),
				O = x.a.div("LoadingState", u.a);
			class N extends n.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: d,
						eventIsLive: p,
						eventStart: m
					} = n, u = Object(a.e)(m, d);
					let x, N;
					if (this.state.mounted || u === a.a.Live) x = function(e, t, s, n) {
						const o = Object(a.e)(e, t),
							i = new Date(e * l.Cb);
						let d;
						if (o === a.a.Live || n) return Object(r.a)(s, "posts.event.inProgress");
						o === a.a.Future ? d = Object(a.d)(e) ? Object(r.a)(s, "posts.event.today") : Object(a.b)(e) >= 5 ? c(i, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(i, s) : o === a.a.Past && (d = Object(a.d)(e) ? Object(r.a)(s, "posts.event.today") : c(i, s));
						const p = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(i, s);
						return "".concat(d, " @ ").concat(p)
					}(m, d, t, p);
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						x = o.a.createElement(O, {
							className: e
						})
					}
					if (p) N = o.a.createElement(h, null, o.a.createElement(C, null), x);
					else if (u === a.a.Future) N = o.a.createElement(b, null, o.a.createElement(g, null), x);
					else {
						if (u !== a.a.Past) return null;
						N = o.a.createElement(v, null, o.a.createElement(g, null), x)
					}
					return o.a.createElement(E, {
						className: e
					}, N)
				}
			}
			t.a = N
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo",
				outboundLinkIcon: "_1zB4YvOwHPxdPEXG2CYhKB"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				v = s("./src/reddit/icons/fonts/helpers.tsx"),
				h = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				E = s.n(h);
			var g = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(v.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", E.a),
				C = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				O = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				N = s("./src/reddit/icons/fonts/Link/index.tsx"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				w = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Text/index.tsx"),
				y = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ExpandoButton/index.m.less"),
				j = s.n(I);
			const P = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(d.p)({
						postId: t.post.id
					}))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(l.a)(j.a.icon, j.a.hideOnHover);
					if (t) return o.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case y.n.GIFVIDEO:
							return o.a.createElement(O.a, {
								className: s
							});
						case y.n.IMAGE:
							return o.a.createElement(w.a, {
								className: s
							});
						case y.n.TEXT:
						case y.n.RTJSON:
							return o.a.createElement(_.a, {
								className: s
							});
						case y.n.VIDEO:
							return o.a.createElement(C.a, {
								className: s
							});
						case y.n.EMBED:
						default:
							return o.a.createElement(N.a, {
								className: s
							})
					}
				};
			t.a = P(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isExpanded: a,
					post: d,
					toggle: u,
					useMediaIcons: v
				} = e, h = s || d, E = n && !!s;
				return h.media && !(("rtjson" === h.media.type || "text" === h.media.type) && !Object(m.a)(h)) ? o.a.createElement("button", {
					"aria-expanded": a,
					"aria-haspopup": !0,
					"aria-label": Object(i.c)("Expand content"),
					className: Object(l.a)(t, j.a.outer),
					"data-click-id": a ? "expando_close" : "expando_open",
					onClick: u
				}, a ? o.a.createElement(x.a, {
					className: j.a.icon
				}) : v ? o.a.createElement(o.a.Fragment, null, S(h.media && h.media.type, E), o.a.createElement(b.a, {
					className: Object(l.a)(j.a.icon, j.a.showOnHover)
				})) : o.a.createElement(b.a, {
					className: j.a.icon
				})) : h.source && h.source.url ? o.a.createElement(p.a, {
					"aria-label": Object(i.c)("Open external content"),
					className: Object(l.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					href: h.source.url,
					isSponsored: d.isSponsored,
					source: d.source,
					target: "_blank"
				}, o.a.createElement(f.a, {
					className: Object(l.a)(j.a.icon, j.a.outboundLinkIcon)
				})) : o.a.createElement(r.a, {
					"aria-label": Object(i.c)("View content"),
					className: Object(l.a)(t, j.a.outer),
					"data-click-id": "expando_open",
					to: Object(c.a)(h.permalink),
					rel: "nofollow"
				}, o.a.createElement(g, {
					className: j.a.icon
				}))
			})
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/i18n/components.tsx"),
				l = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(l);
			t.a = function(e) {
				return o.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, o.a.createElement(r.c, null, "Error: Could not load poll"))
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
			var n = s("./node_modules/bignumber.js/bignumber.js"),
				o = s.n(n),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				l = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				p = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				m = s.n(p);

			function u(e) {
				return r.a.createElement("div", {
					className: Object(i.a)(m.a.container, e.className)
				}, r.a.createElement("div", {
					className: m.a.pill
				}, r.a.createElement(d.a, {
					className: m.a.token,
					subredditId: e.subredditId
				}), r.a.createElement("span", {
					className: m.a.amount
				}, "+", e.amount)))
			}
			var x, b = s("./src/reddit/actions/governance/index.ts"),
				v = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/models/Poll/index.ts"),
				C = s("./src/reddit/selectors/gov.ts"),
				O = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				N = s("./src/lib/bigNumberUtils/percent.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/helpers/governance/tokens.ts"),
				_ = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				y = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				I = s.n(y);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(x || (x = {}));
			var j = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						o = e.result.options[e.optionId],
						a = new n.BigNumber(s).isZero() ? 0 : Object(N.a)(o.votes, s),
						l = Object(w.c)(o.votes, e.tokenDisplayConversion);
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, I.a.container),
						title: e.displayType === x.Count ? o.votes : "".concat(a.toFixed(2), "% (").concat(l, " ").concat(e.tokenName, ")")
					}, r.a.createElement("div", {
						className: I.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(a, "%")
						}
					}), r.a.createElement("div", {
						className: Object(i.a)(I.a.count, {
							[I.a.hide]: e.displayType !== x.Count,
							[I.a.show]: e.displayType === x.Count
						})
					}, Object(f.b)(parseInt(o.votes))), r.a.createElement("div", {
						className: Object(i.a)(I.a.percent, {
							[I.a.hide]: e.displayType === x.Count,
							[I.a.show]: e.displayType !== x.Count
						})
					}, "".concat(a.toFixed(1), "%")), r.a.createElement("div", {
						className: I.a.text
					}, t.text), o.userSelected && r.a.createElement(_.a, {
						className: I.a.check
					}))
				},
				P = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				S = s.n(P);
			const T = Object(c.c)({
				tokenName: C.o,
				tokenDisplayConversion: C.n,
				language: e => e.user.language
			});
			var L = Object(l.b)(T)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const o = e.result.options[s.id],
							a = e.result.options[t.id];
						new n.BigNumber(a.votes).isLessThan(new n.BigNumber(o.votes)) && (t = s)
					}), r.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, n) => r.a.createElement(j, {
						key: n,
						className: S.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), r.a.createElement(O.a, {
						className: S.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				k = s("./node_modules/lodash/isNil.js"),
				M = s.n(k),
				R = s("./src/reddit/constants/elementClassNames.ts"),
				B = s("./src/reddit/controls/Button/index.tsx"),
				F = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				V = s("./src/reddit/i18n/components.tsx"),
				A = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				D = s.n(A);

			function H(e) {
				return "INPUT" === e.tagName
			}
			class z extends r.a.Component {
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
							}(Array.from(s.elements).filter(H));
						M()(n) || (this.props.onVoteSelection(t.options[n]), this.props.sendEvent(Object(E.e)(t.id, t.postId, n)))
					}
				}
				render() {
					return r.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, r.a.createElement("div", null, this.props.poll.options.map((e, t) => r.a.createElement("label", {
						key: t,
						className: D.a.option
					}, r.a.createElement("input", {
						className: D.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), r.a.createElement("div", {
						className: D.a.optionText
					}, e.text)))), r.a.createElement("div", {
						className: D.a.controlRow
					}, r.a.createElement("div", {
						className: D.a.buttonContainer
					}, r.a.createElement(B.i, {
						className: R.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? r.a.createElement(F.a, {
						className: D.a.loadingIcon,
						sizePx: 20
					}) : r.a.createElement(a.Fragment, null, this.props.votingIcon, r.a.createElement(V.c, null, "vote"))), !this.props.userIsLoggedIn && r.a.createElement("div", {
						className: D.a.loggedOutTooltip
					}, r.a.createElement(V.c, null, "You must be logged in to vote"))), r.a.createElement(O.a, {
						className: D.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const G = Object(c.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var W = Object(l.b)(G)(Object(v.b)(z)),
				Z = s("./src/reddit/components/Poll/index.m.less"),
				K = s.n(Z);
			class U extends r.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(g.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(E.d)(e.id, e.postId))
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
						subredditId: a,
						title: l,
						voteInProgress: c,
						votingIcon: i
					} = this.props;
					return n ? r.a.createElement("div", {
						className: e
					}, l && r.a.createElement("div", {
						className: K.a.title
					}, l), o && Object(g.e)(n, o) ? r.a.createElement(L, {
						displayType: t,
						poll: n,
						result: o,
						subredditId: a
					}) : r.a.createElement(W, {
						poll: n,
						onVoteSelection: s,
						voteInProgress: c,
						votingIcon: i
					})) : null
				}
			}
			const q = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var J = Object(h.t)({
					isCommentsPage: h.w
				})(Object(l.b)(q, (e, t) => ({
					onVoteSelection: s => e(Object(b.f)(t.pollId, s.id))
				}))(Object(v.b)(U))),
				Y = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				X = s("./src/app/strings/index.ts"),
				Q = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => r.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, r.a.createElement("g", null, r.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
					className: te.a.text
				}, r.a.createElement(V.c, null, "Achieved Decision Threshold")), r.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, r.a.createElement(Q, {
					className: te.a.decisionThreshold
				})))
			}

			function ne(e) {
				return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
					className: te.a.text
				}, Object(X.a)(e.language, "polls.decisionThreshold", {
					amount: Object(f.b)(parseInt(Object(w.b)(e.threshold, e.tokenDisplayConversion)))
				})), r.a.createElement(oe, {
					percent: e.percent
				}))
			}

			function oe(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return r.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, r.a.createElement("div", {
					className: te.a.pie
				}), r.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), r.a.createElement("div", {
					className: Object(i.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const ae = Object(c.c)({
				language: $.T,
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
				tokenDisplayConversion: C.n
			});
			var re = Object(l.b)(ae)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(g.c)(e.poll, e.pollResult),
						s = new o.a(e.pollResult.options[t.id].votes),
						n = e.poll.decisionThreshold,
						a = s.isGreaterThanOrEqualTo(new o.a(n)),
						l = Object(N.a)(e.pollResult.options[t.id].votes, n);
					return r.a.createElement("div", {
						className: Object(i.a)(te.a.container, e.className)
					}, a ? r.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : r.a.createElement(ne, {
						language: e.language,
						threshold: n,
						percent: l,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				le = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ce = s.n(le);

			function ie(e) {
				return r.a.createElement("a", {
					className: Object(i.a)(e.className, ce.a.container, {
						[ce.a.selectable]: !!e.selectable,
						[ce.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var de = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				pe = s.n(de);
			const me = Object(c.c)({
				tokenName: C.o,
				tokenDisplayConversion: C.n,
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
					return !!(o && n && Object(g.e)(o, n))
				},
				wallet: C.g
			});
			var ue = Object(l.b)(me)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: o,
						resultsByVotingPower: a,
						tokenDisplayConversion: l,
						tokenName: c,
						wallet: d
					} = e, p = a ? a.totalVotes : "0", m = !new n.BigNumber(p).isZero() && d && t ? Object(N.a)(p, t.totalAvailable) : 0, u = o ? o.totalVotes : "0", x = Object(w.c)(p, l), b = Object(f.b)(parseInt(u));
					return r.a.createElement("div", {
						className: Object(i.a)(e.className, pe.a.container)
					}, r.a.createElement("div", null, s.type !== g.a.GA && r.a.createElement(ie, {
						isSelected: e.currentResultType === g.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(x, " ").concat(c),
						tooltipText: Object(X.a)(e.language, "polls.votingBreakdown", {
							tokenName: c,
							count: Object(w.c)(p, l),
							percent: m.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(g.b.ByVotingPower)
					}), r.a.createElement(ie, {
						isSelected: e.currentResultType === g.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(X.c)(e.language, "polls.numVotes", parseInt(u), {
							count: b
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(g.b.ByVoters)
					})), Object(g.d)(s) && r.a.createElement(re, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				xe = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				be = s.n(xe);
			class ve extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === g.a.GA ? g.b.ByVoters : g.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === g.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new n.BigNumber(this.props.pollReward).isZero()) {
						const s = he(e, t.resultType),
							n = he(this.props, this.state.resultType);
						if (s && n) {
							const t = !Object(g.e)(e.poll, s),
								o = Object(g.e)(this.props.poll, n);
							t && o && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return r.a.createElement("div", {
						className: Object(i.a)(this.props.className, be.a.container),
						onClick: this.handleContainerClick
					}, r.a.createElement(ue, {
						className: be.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), r.a.createElement(J, {
						key: this.props.pollId,
						className: be.a.poll,
						displayType: this.state.resultType === g.b.ByVoters ? x.Count : x.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(g.d)(this.props.poll) ? r.a.createElement(Y.a, {
							className: be.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && r.a.createElement(u, {
						amount: this.props.pollReward,
						className: be.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function he(e, t) {
				return t === g.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const Ee = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(l.b)(Ee)(ve)
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
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				l = s("./src/reddit/components/Thumbnail/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				i = s("./src/reddit/helpers/trackers/post.ts"),
				d = s("./src/reddit/models/Subreddit/index.ts"),
				p = s("./src/reddit/components/MediumPost/index.m.less"),
				m = s.n(p);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: p,
					shouldShowSubscribeButton: u,
					subredditOrProfile: x,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.thumbnailContainer, {
						[m.a.mShowingButtonOrOverflow]: u
					})
				}, o.a.createElement("div", {
					className: m.a.thumbnailContainerRow
				}, u && x && o.a.createElement(r.a, {
					className: m.a.subscribeButton,
					getEventFactory: e => Object(i.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(d.e)(x) ? c.a.PROFILE : c.a.SUBREDDIT
					},
					postId: s.id
				})), o.a.createElement(l.a, {
					crosspost: t,
					post: s,
					redditStyle: p,
					forceShowNSFW: n,
					templatePlaceholderImage: b
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/ModModeReports/index.m.less"),
				d = s.n(i);
			const p = r.a.div("Text", d.a),
				m = r.a.div("Placeholder", d.a),
				u = Object(a.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						})
					},
					getComponent: () => Object(l.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						}, o.a.createElement(p, null, o.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
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
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Translated/index.tsx"),
				p = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(m);
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, a = !!n;
						o(e ? Object(p.o)({
							postId: s,
							isFollowed: a
						}) : Object(p.g)({
							postId: s,
							isFollowed: a
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, a = s.isFollowed;
					let r = a ? "collection.follow.followed" : "collection.follow.follow";
					return a && n && (r = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(l.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(d.a, {
						msgId: r
					}))
				}
			}
			const b = Object(a.b)(() => Object(r.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(i.b)(x))
		},
		"./src/reddit/components/PostLeftRail/index.m.less": function(e, t, s) {
			e.exports = {
				postLeftRail: "_23h0-EcaBUorIHC-JZyh6J"
			}
		},
		"./src/reddit/components/PostLeftRail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				m = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(m);
			const x = 40,
				b = Object(a.b)(() => Object(r.c)({
					isInAdLeftSidebarExperiment: p.a
				})),
				v = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(d.a)(e).button : e.isRemoved ? i.a.removed : e.isReported ? i.a.reported : "transparent",
				h = Object(c.a)(e => {
					const t = v(e),
						s = {
							width: "".concat(x, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return o.a.createElement("div", {
						className: Object(l.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = b(h)
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				r = s("./src/reddit/components/VerticalVotes/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: d = !1,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: m,
					redditStyle: u
				} = e, x = "upvote-button-".concat(t.id);
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(i.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: u
				}, n && o.a.createElement(l.a, {
					isCheckboxSelected: d,
					toggleCheckbox: p
				}), o.a.createElement(r.a, {
					flairStyleTemplate: m,
					model: t,
					onVoteClick: s,
					redditStyle: u,
					upvoteTooltipId: x
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/AwardBadges/index.tsx"),
				l = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				i = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(C);
			const N = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: n,
					iconClassName: C,
					inSubredditOrProfile: f,
					isCurrentUserProfilePost: w,
					isCommentsPage: _,
					isCompactPinnedPost: y,
					isOverlay: I,
					language: j,
					post: P,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: L,
					showSubreddit: k,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, B = _ && S;
				return o.a.createElement(N, {
					className: t
				}, k && R && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && o.a.createElement(p.b, {
					className: Object(a.a)(O.a.subredditIcon, C),
					shouldHideNsfwIcon: n,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, k && o.a.createElement(c.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), o.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? d.c.Lightbox : void 0,
					language: j,
					post: P,
					showSub: k,
					subredditOrProfile: R
				}), o.a.createElement(i.a, {
					className: O.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: f,
					language: j,
					isCompactPinnedPost: y,
					post: P,
					tooltipType: I ? d.c.Lightbox : void 0
				}), R && o.a.createElement(l.a, {
					className: O.a.donationAmount,
					contentId: P.id,
					subredditId: R.id
				}), o.a.createElement(r.a, {
					forceShowAllAwards: _,
					isOverlay: I,
					showAwarders: B,
					tooltipType: I ? d.c.Lightbox : void 0,
					thing: P
				})), R && k && T && !w && o.a.createElement(u.a, {
					getEventFactory: e => Object(v.f)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(g.e)(R) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: P.id
				}, "Subscribe"), L && o.a.createElement(b.a, {
					className: O.a.OutboundLink,
					isSponsored: P.isSponsored,
					href: Object(E.A)(e.post),
					source: P.source
				}, o.a.createElement(h.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				l = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", l.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				l = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(a.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", l.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
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
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.a
				});
				return !!t && !Object(n.Xb)(t)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e.8b1e525a9cf325984751.js.map