// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e.462bf27d0086252cbe1b.js
// Retrieved at 1/24/2020, 9:19:31 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e"], {
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				l = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = d(e, ["className"]);
				return n.a.createElement(a.a, c({
					className: Object(r.a)(t, l.a.CallToActionButton, {
						[l.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("Explore~InFeedChaining"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				d = s("./src/reddit/helpers/postCollection.ts"),
				p = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(m);
			const x = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: o,
					post: i
				} = e;
				if (!Object(p.a)(i)) return null;
				const m = i && i.eventInfo,
					b = Object(d.a)(i),
					h = m && Object(a.c)(m.eventStart, m.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(x, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(l.a, {
					language: o,
					post: i
				}), !b && h && n.a.createElement(c.a, {
					className: u.a.eventFollowButton,
					post: i,
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function l(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(m),
				x = s("./src/lib/lessComponent.tsx");
			const b = x.a.span("PostEventFutureText", u.a),
				h = x.a.span("PostEventPastText", u.a),
				g = x.a.span("PostEventNowText", u.a),
				v = x.a.span("Container", u.a),
				E = x.a.wrapped(d.a, "CalendarIcon", u.a),
				O = x.a.wrapped(p.a, "LiveIcon", u.a),
				C = x.a.div("LoadingState", u.a);
			class P extends o.Component {
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
						eventInfo: o
					} = s;
					if (!o) return null;
					const {
						eventEnd: d,
						eventIsLive: p,
						eventStart: m
					} = o, u = Object(r.e)(m, d);
					let x, P;
					if (this.state.mounted || u === r.a.Live) x = function(e, t, s, o) {
						const n = Object(r.e)(e, t),
							c = new Date(e * i.Bb);
						let d;
						if (n === r.a.Live || o) return Object(a.a)(s, "posts.event.inProgress");
						n === r.a.Future ? d = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? l(c, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(c, s) : n === r.a.Past && (d = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : l(c, s));
						const p = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(c, s);
						return "".concat(d, " @ ").concat(p)
					}(m, d, t, p);
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						x = n.a.createElement(C, {
							className: e
						})
					}
					if (p) P = n.a.createElement(g, null, n.a.createElement(O, null), x);
					else if (u === r.a.Future) P = n.a.createElement(b, null, n.a.createElement(E, null), x);
					else {
						if (u !== r.a.Past) return null;
						P = n.a.createElement(h, null, n.a.createElement(E, null), x)
					}
					return n.a.createElement(v, {
						className: e
					}, P)
				}
			}
			t.a = P
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				u = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				x = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"),
				b = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"),
				h = s("./src/reddit/icons/fonts/helpers.tsx"),
				g = s("./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less"),
				v = s.n(g);
			var E = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
					className: "".concat(Object(h.b)("expandoMediaLightbox"), " ").concat(e.className),
					onClick: e.onClick
				}), "LightboxIcon", v.a),
				O = s("./src/reddit/icons/fonts/Expandos/Media/Video/index.tsx"),
				C = s("./src/reddit/icons/fonts/Gif/index.tsx"),
				P = s("./src/reddit/icons/fonts/Link/index.tsx"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = s("./src/reddit/icons/fonts/Photos/index.tsx"),
				N = s("./src/reddit/icons/fonts/Text/index.tsx"),
				j = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ExpandoButton/index.m.less"),
				S = s.n(I);
			const w = Object(r.b)(null, (e, t) => ({
					toggle: () => e(Object(d.p)({
						postId: t.post.id
					}))
				})),
				_ = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = Object(i.a)(S.a.icon, S.a.hideOnHover);
					if (t) return n.a.createElement(u.a, {
						className: s
					});
					switch (e) {
						case j.n.GIFVIDEO:
							return n.a.createElement(C.a, {
								className: s
							});
						case j.n.IMAGE:
							return n.a.createElement(f.a, {
								className: s
							});
						case j.n.TEXT:
						case j.n.RTJSON:
							return n.a.createElement(N.a, {
								className: s
							});
						case j.n.VIDEO:
							return n.a.createElement(O.a, {
								className: s
							});
						case j.n.EMBED:
						default:
							return n.a.createElement(P.a, {
								className: s
							})
					}
				};
			t.a = w(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isExpanded: r,
					post: d,
					toggle: u,
					useMediaIcons: h
				} = e, g = s || d, v = o && !!s;
				return g.media && !(("rtjson" === g.media.type || "text" === g.media.type) && !Object(m.a)(g)) ? n.a.createElement("button", {
					"aria-expanded": r,
					"aria-haspopup": !0,
					"aria-label": Object(c.c)("Expand content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": r ? "expando_close" : "expando_open",
					onClick: u
				}, r ? n.a.createElement(x.a, {
					className: S.a.icon
				}) : h ? n.a.createElement(n.a.Fragment, null, _(g.media && g.media.type, v), n.a.createElement(b.a, {
					className: Object(i.a)(S.a.icon, S.a.showOnHover)
				})) : n.a.createElement(b.a, {
					className: S.a.icon
				})) : g.source && g.source.url ? n.a.createElement(p.a, {
					"aria-label": Object(c.c)("Open external content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: d.isSponsored,
					source: d.source,
					target: "_blank"
				}, n.a.createElement(y.a, {
					className: Object(i.a)(S.a.icon, S.a.outboundLinkIcon)
				})) : n.a.createElement(a.a, {
					"aria-label": Object(c.c)("View content"),
					className: Object(i.a)(t, S.a.outer),
					"data-click-id": "expando_open",
					to: Object(l.a)(g.permalink),
					rel: "nofollow"
				}, n.a.createElement(E, {
					className: S.a.icon
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				l = s.n(i);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, n.a.createElement(a.c, null, "Error: Could not load poll"))
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
			var o = s("./node_modules/bignumber.js/bignumber.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				p = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				m = s.n(p);

			function u(e) {
				return a.a.createElement("div", {
					className: Object(c.a)(m.a.container, e.className)
				}, a.a.createElement("div", {
					className: m.a.pill
				}, a.a.createElement(d.a, {
					className: m.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: m.a.amount
				}, "+", e.amount)))
			}
			var x, b = s("./src/reddit/actions/governance/index.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/models/Poll/index.ts"),
				O = s("./src/reddit/selectors/gov.ts"),
				C = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				P = s("./src/lib/bigNumberUtils/percent.ts"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				f = s("./src/reddit/helpers/governance/tokens.ts"),
				N = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				j = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				I = s.n(j);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(x || (x = {}));
			var S = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						n = e.result.options[e.optionId],
						r = new o.BigNumber(s).isZero() ? 0 : Object(P.a)(n.votes, s),
						i = Object(f.c)(n.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(c.a)(e.className, I.a.container),
						title: e.displayType === x.Count ? n.votes : "".concat(r.toFixed(2), "% (").concat(i, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: I.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(r, "%")
						}
					}), a.a.createElement("div", {
						className: Object(c.a)(I.a.count, {
							[I.a.hide]: e.displayType !== x.Count,
							[I.a.show]: e.displayType === x.Count
						})
					}, Object(y.b)(parseInt(n.votes))), a.a.createElement("div", {
						className: Object(c.a)(I.a.percent, {
							[I.a.hide]: e.displayType === x.Count,
							[I.a.show]: e.displayType !== x.Count
						})
					}, "".concat(r.toFixed(1), "%")), a.a.createElement("div", {
						className: I.a.text
					}, t.text), n.userSelected && a.a.createElement(N.a, {
						className: I.a.check
					}))
				},
				w = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				_ = s.n(w);
			const T = Object(l.c)({
				tokenName: O.o,
				tokenDisplayConversion: O.n,
				language: e => e.user.language
			});
			var L = Object(i.b)(T)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const n = e.result.options[s.id],
							r = e.result.options[t.id];
						new o.BigNumber(r.votes).isLessThan(new o.BigNumber(n.votes)) && (t = s)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, o) => a.a.createElement(S, {
						key: o,
						className: _.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(C.a, {
						className: _.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				k = s("./node_modules/lodash/isNil.js"),
				M = s.n(k),
				R = s("./src/reddit/constants/elementClassNames.ts"),
				F = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				A = s("./src/reddit/i18n/components.tsx"),
				V = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				H = s.n(V);

			function D(e) {
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
						const s = e.currentTarget,
							o = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(D));
						M()(o) || (this.props.onVoteSelection(t.options[o]), this.props.sendEvent(Object(v.e)(t.id, t.postId, o)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: H.a.option
					}, a.a.createElement("input", {
						className: H.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: H.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: H.a.controlRow
					}, a.a.createElement("div", {
						className: H.a.buttonContainer
					}, a.a.createElement(F.i, {
						className: R.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(B.a, {
						className: H.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(r.Fragment, null, this.props.votingIcon, a.a.createElement(A.c, null, "vote"))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: H.a.loggedOutTooltip
					}, a.a.createElement(A.c, null, "You must be logged in to vote"))), a.a.createElement(C.a, {
						className: H.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const z = Object(l.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var G = Object(i.b)(z)(Object(h.b)(W)),
				U = s("./src/reddit/components/Poll/index.m.less"),
				K = s.n(U);
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(E.g)(e, t), this.sendPollResultsEvent = () => {
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
						poll: o,
						result: n,
						subredditId: r,
						title: i,
						voteInProgress: l,
						votingIcon: c
					} = this.props;
					return o ? a.a.createElement("div", {
						className: e
					}, i && a.a.createElement("div", {
						className: K.a.title
					}, i), n && Object(E.e)(o, n) ? a.a.createElement(L, {
						displayType: t,
						poll: o,
						result: n,
						subredditId: r
					}) : a.a.createElement(G, {
						poll: o,
						onVoteSelection: s,
						voteInProgress: l,
						votingIcon: c
					})) : null
				}
			}
			const Q = Object(l.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var J = Object(g.t)({
					isCommentsPage: g.w
				})(Object(i.b)(Q, (e, t) => ({
					onVoteSelection: s => e(Object(b.f)(t.pollId, s.id))
				}))(Object(h.b)(Z))),
				Y = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				X = s("./src/app/strings/index.ts"),
				q = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => a.a.createElement("svg", {
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
				}, a.a.createElement(A.c, null, "Achieved Decision Threshold")), a.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(q, {
					className: te.a.decisionThreshold
				})))
			}

			function oe(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, Object(X.a)(e.language, "polls.decisionThreshold", {
					amount: Object(y.b)(parseInt(Object(f.b)(e.threshold, e.tokenDisplayConversion)))
				})), a.a.createElement(ne, {
					percent: e.percent
				}))
			}

			function ne(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: te.a.pie
				}), a.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(c.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const re = Object(l.c)({
				language: $.S,
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
				tokenDisplayConversion: O.n
			});
			var ae = Object(i.b)(re)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(E.c)(e.poll, e.pollResult),
						s = new n.a(e.pollResult.options[t.id].votes),
						o = e.poll.decisionThreshold,
						r = s.isGreaterThanOrEqualTo(new n.a(o)),
						i = Object(P.a)(e.pollResult.options[t.id].votes, o);
					return a.a.createElement("div", {
						className: Object(c.a)(te.a.container, e.className)
					}, r ? a.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : a.a.createElement(oe, {
						language: e.language,
						threshold: o,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ie = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				le = s.n(ie);

			function ce(e) {
				return a.a.createElement("a", {
					className: Object(c.a)(e.className, le.a.container, {
						[le.a.selectable]: !!e.selectable,
						[le.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var de = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				pe = s.n(de);
			const me = Object(l.c)({
				tokenName: O.o,
				tokenDisplayConversion: O.n,
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
						resultsByVoters: o
					} = t;
					const n = e.polls.models[s];
					return !!(n && o && Object(E.e)(n, o))
				},
				wallet: O.g
			});
			var ue = Object(i.b)(me)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: n,
						resultsByVotingPower: r,
						tokenDisplayConversion: i,
						tokenName: l,
						wallet: d
					} = e, p = r ? r.totalVotes : "0", m = !new o.BigNumber(p).isZero() && d && t ? Object(P.a)(p, t.totalAvailable) : 0, u = n ? n.totalVotes : "0", x = Object(f.c)(p, i), b = Object(y.b)(parseInt(u));
					return a.a.createElement("div", {
						className: Object(c.a)(e.className, pe.a.container)
					}, a.a.createElement("div", null, s.type !== E.a.GA && a.a.createElement(ce, {
						isSelected: e.currentResultType === E.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(x, " ").concat(l),
						tooltipText: Object(X.a)(e.language, "polls.votingBreakdown", {
							tokenName: l,
							count: Object(f.c)(p, i),
							percent: m.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVotingPower)
					}), a.a.createElement(ce, {
						isSelected: e.currentResultType === E.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(X.c)(e.language, "polls.numVotes", parseInt(u), {
							count: b
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(E.b.ByVoters)
					})), Object(E.d)(s) && a.a.createElement(ae, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				xe = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				be = s.n(xe);
			class he extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === E.a.GA ? E.b.ByVoters : E.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === E.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new o.BigNumber(this.props.pollReward).isZero()) {
						const s = ge(e, t.resultType),
							o = ge(this.props, this.state.resultType);
						if (s && o) {
							const t = !Object(E.e)(e.poll, s),
								n = Object(E.e)(this.props.poll, o);
							t && n && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Object(c.a)(this.props.className, be.a.container),
						onClick: this.handleContainerClick
					}, a.a.createElement(ue, {
						className: be.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(J, {
						key: this.props.pollId,
						className: be.a.poll,
						displayType: this.state.resultType === E.b.ByVoters ? x.Count : x.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(E.d)(this.props.poll) ? a.a.createElement(Y.a, {
							className: be.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && a.a.createElement(u, {
						amount: this.props.pollReward,
						className: be.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function ge(e, t) {
				return t === E.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ve = Object(l.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(i.b)(ve)(he)
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
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				l = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Poll/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				v = s("./src/reddit/models/Vote/index.ts"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				O = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				C = s("./src/reddit/selectors/inFeedChaining.ts"),
				P = s("./src/reddit/selectors/moderatorPermissions.ts"),
				y = s("./src/reddit/selectors/monthsToMinutes.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				j = s("./src/lib/classNames/index.ts"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = s("./src/reddit/components/CallToActionButton/index.tsx"),
				w = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				_ = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				T = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				M = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/components/ModModeReports/index.tsx"),
				B = s("./src/reddit/components/ModModeReports/helpers.ts"),
				A = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostContainer/index.tsx"),
				H = s("./src/reddit/components/PostLeftRail/index.tsx"),
				D = s("./src/reddit/components/PostMedia/index.tsx"),
				W = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				z = s("./src/reddit/i18n/components.tsx"),
				G = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				K = s.n(U);
			var Z = () => n.a.createElement("div", {
					className: K.a.container
				}, n.a.createElement(G.a, {
					className: K.a.pinnedIcon
				}), n.a.createElement("span", {
					className: K.a.metaText
				}, n.a.createElement(z.c, null, "pinned by moderators"))),
				Q = s("./src/reddit/components/PostTitle/index.tsx"),
				J = s("./src/reddit/components/PostTopLine/index.tsx"),
				Y = s("./src/reddit/components/SourceLink/index.tsx"),
				X = s("./src/reddit/components/VerticalVotes/index.tsx"),
				q = s("./src/reddit/contexts/InsideOverlay.tsx"),
				$ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ee = s("./src/reddit/controls/Checkbox/index.tsx"),
				te = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				se = s("./src/reddit/helpers/isCrosspost.ts"),
				oe = s("./src/reddit/helpers/postEvent.ts"),
				ne = s("./src/reddit/constants/experiments.ts"),
				re = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const ie = Object(a.a)(f.N, e => e.some(ae.c)),
				le = Object(a.a)(ie, e => e),
				ce = (e, t) => Object(re.c)(e, {
					experimentName: ne.z,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && le(e, {
							listingKey: s
						})
					}
				});
			var de = s("./src/reddit/selectors/postFlair.ts"),
				pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				me = s.n(pe),
				ue = s("./src/reddit/components/LargePost/index.m.less"),
				xe = s.n(ue);
			s.d(t, "b", (function() {
				return Ee
			}));
			const be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(f.N)(e, {
						listingKey: s
					}) : void 0
				},
				he = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(f.C)(e, {
						listingKey: s
					}) : void 0
				},
				ge = Object(r.b)(() => Object(a.c)({
					autoplayPref: N.b,
					activeModalId: E.a,
					currentUser: N.i,
					hideNSFWPref: N.z,
					flairStyleTemplate: $.Q,
					isCurrentUserProfilePost: f.h,
					isFrontpageHome: y.g,
					isM2MHomeRedirectEnabled: O.c,
					language: N.S,
					isActive: f.g,
					isPostChainDismissed: C.c,
					isPostChained: C.d,
					moderatorPermissions: P.i,
					modModeEnabled: $.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: f.I,
					posts: be,
					postHeightVariant: ce,
					postIds: he,
					showEditFlair: de.a,
					subredditOrProfile: f.T,
					userIsOp: N.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(m.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === v.a.upvoted ? Object(u.N)(n) : Object(u.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.L)(n)),
						onOpenReportsDropdown: t => e(Object(x.g)({
							tooltipId: t
						}))
					}
				}),
				ve = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: r,
						currentUser: a,
						eventFactory: d,
						flairStyleTemplate: m,
						forceLoadMedia: u,
						hideNSFWPref: x,
						inSubredditOrProfile: v = !1,
						isCommentsPage: E,
						isCurrentUserProfilePost: O,
						isFrontpage: C,
						isFrontpageHome: P,
						isM2MHomeRedirectEnabled: y,
						isOverlay: f,
						isPostChainDismissed: N,
						isPostChained: z,
						language: G,
						listingKey: U,
						listingName: K,
						moderatorPermissions: X,
						modModeEnabled: q,
						onClickPost: $,
						onIgnoreReports: ee,
						onOpenReportsDropdown: re,
						poll: ae,
						pollResult: ie,
						post: le,
						postHeightVariant: ce,
						scrollerItemRef: de,
						showEditFlair: pe,
						subredditOrProfile: ue,
						userIsOp: be
					} = e, he = !!e.redditStyle || !!e["data-redditstyle"], ge = he ? void 0 : m, ve = Object(c.a)(X), Oe = q && ve, Ce = Object(l.a)(X), Pe = Object(B.c)(le), ye = !!le.media && le.media.type === b.n.RTJSON, fe = be && ye, Ne = s ? s - H.a : void 0, je = !!ie && !!Object.keys(ie.options).filter(e => ie.options[e].userSelected).length, Ie = !(C && P), Se = (e => e === ne.kb.OnlyTitles)(ce) && !Object(se.a)(le), we = (e => e === ne.kb.MediumHeight)(ce) && !Object(se.a)(le), _e = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(g.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							a = o && o[1] && Object(g.k)(o[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), Te = n.a.createElement(V.a, {
						className: Object(j.a)(xe.a.container, r, me.a.largeAndMediumPostStyles, me.a.largeAndMediumActiveStyles, Object(p.a)(e), {
							[me.a.mUseRedditTheme]: he,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[xe.a.topCompactPost]: _e && _e.hasTopCompactPostStyles,
							[xe.a.bottomCompactPost]: _e && _e.hasBottomCompactPostStyles
						}),
						isOverlay: f,
						style: Object(p.b)(e.flairStyleTemplate),
						post: le,
						onClick: $,
						onPostContentClick: o,
						eventFactory: d
					}, Ee(le, e.handleVote, e.showBulkActionCheckbox, e.isCheckboxSelected, e.toggleCheckbox, ge, he), n.a.createElement(A.a, {
						className: Object(j.a)(xe.a.backgroundWrapper, {
							[xe.a.isEvent]: Object(oe.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ge,
						post: le,
						redditStyle: he
					}, n.a.createElement(T.a, {
						post: le,
						language: G
					}), _e && _e.showPinnnedHeader && n.a.createElement(Z, null), n.a.createElement(J.a, {
						className: xe.a.postTopLine,
						hideNSFWPref: x,
						iconClassName: xe.a.postTopLineIcon,
						inSubredditOrProfile: v,
						isCommentsPage: !!E,
						isCompactPinnedPost: !!_e,
						isCurrentUserProfilePost: O,
						isOverlay: !!f,
						language: G,
						post: le,
						shouldShowSubscribeButton: Ie,
						showSubreddit: !v && !le.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: ue
					}), n.a.createElement(Q.c, {
						className: xe.a.postTitle,
						post: le,
						redditStyle: he,
						size: Q.b.Large,
						titleColor: ge && ge.postTitleColor,
						isM2MHomeRedirectEnabled: y,
						isOverlay: f
					}), le.source && !le.isSponsored && n.a.createElement(Y.a, {
						className: xe.a.sourceLink,
						post: le
					}), n.a.createElement("div", {
						className: Object(j.a)(xe.a.postMediaWrapper, {
							[xe.a.votedContent]: je
						})
					}, !_e && n.a.createElement(D.a, {
						isListing: !0,
						isMediumHeight: we,
						isNotCardView: !!f,
						isTitleOnly: Se,
						showCentered: !0,
						flairStyleTemplate: ge,
						post: le,
						availableWidth: Ne,
						shouldLoad: u,
						scrollerItemRef: de,
						autoplayPref: t
					})), ae && n.a.createElement(k.a, {
						className: Object(j.a)(xe.a.proposal, {
							[xe.a.mHasNotVoted]: !ie,
							[xe.a.mPollIsClosed]: !!ie && Object(h.e)(ae, ie),
							[xe.a.mGAPoll]: ae.type === h.a.GA
						}),
						pollId: ae.id,
						subredditId: le.belongsTo.id
					}), le.isMeta && !ae && n.a.createElement(M.a, {
						className: xe.a.noProposal
					}), le.source && le.source.url && le.isSponsored && n.a.createElement(I.a, {
						className: xe.a.adLinkWrapper
					}, n.a.createElement(te.a, {
						href: le.source.url.replace(i.a.redditUrl, ""),
						isSponsored: le.isSponsored,
						source: le.source
					}, le.source.displayText), le.callToAction && n.a.createElement(S.a, {
						href: le.source.url.replace(i.a.redditUrl, ""),
						isSponsored: le.isSponsored,
						source: le.source
					}, le.callToAction)), q && ve && Pe && n.a.createElement(F.a, {
						language: G,
						onIgnoreReports: ee,
						reportable: le
					}), n.a.createElement(R.d, {
						postId: le.id
					}), n.a.createElement("div", {
						className: xe.a.flatListContainer
					}, n.a.createElement(w.a, {
						className: xe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ge,
						model: le,
						onVoteClick: e.handleVote
					}), n.a.createElement(L.c, {
						currentUser: a,
						hasModFlairPerms: Ce,
						hasModPostPerms: ve,
						isLargePost: !0,
						isOverlay: !!f,
						language: G,
						modModeEnabled: q,
						onIgnoreReports: ee,
						onOpenReportsDropdown: re,
						post: le,
						showEditPost: fe,
						showEditFlair: pe,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !Oe,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, Te, z && !N && n.a.createElement(_.a, {
						className: xe.a.chain,
						listingKey: U,
						listingName: K,
						postId: le.id
					}))
				}),
				Ee = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
						a = arguments.length > 5 ? arguments[5] : void 0,
						i = arguments.length > 6 ? arguments[6] : void 0;
					const l = "upvote-button-".concat(e.id);
					return n.a.createElement(H.b, {
						isRemoved: !!e.bannedBy,
						isReported: Object(d.a)(e),
						isSponsored: e.isSponsored,
						redditStyle: i
					}, s && n.a.createElement(ee.a, {
						isCheckboxSelected: o,
						toggleCheckbox: r
					}), n.a.createElement(X.a, {
						flairStyleTemplate: a,
						model: e,
						onVoteClick: t,
						redditStyle: i,
						upvoteTooltipId: l
					}))
				};
			t.a = ge(Object(q.b)(ve))
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
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return ee
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				l = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/inFeedChaining.ts"),
				d = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/CallToActionButton/index.tsx"),
				x = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				h = s("./src/reddit/components/FlairWrapper/index.tsx"),
				g = s("./src/reddit/components/Flatlist/index.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/LargePost/index.tsx"),
				O = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/helpers.ts"),
				P = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				y = s("./src/reddit/components/PostContainer/index.tsx"),
				f = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				N = s("./src/reddit/components/PostTitle/index.tsx"),
				j = s("./src/reddit/components/PostTopLine/index.tsx"),
				I = s("./src/reddit/components/PostTopMeta/index.tsx"),
				S = s("./src/reddit/components/SourceLink/index.tsx"),
				w = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				_ = s("./src/reddit/components/Thumbnail/index.tsx"),
				T = s("./src/reddit/constants/posts.ts"),
				L = s("./src/reddit/contexts/InsideOverlay.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				R = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/models/Subreddit/index.ts"),
				D = s("./src/reddit/models/Vote/index.ts"),
				W = s("./src/reddit/selectors/experiments/categories.ts"),
				z = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				G = s("./src/reddit/selectors/inFeedChaining.ts"),
				U = s("./src/reddit/selectors/moderatorPermissions.ts"),
				K = s("./src/reddit/selectors/monthsToMinutes.ts"),
				Z = s("./src/reddit/selectors/postFlair.ts"),
				Q = s("./src/reddit/selectors/posts.ts"),
				J = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(Y),
				q = s("./src/reddit/components/MediumPost/index.m.less"),
				$ = s.n(q);
			const ee = e => {
					let {
						crosspost: t,
						post: s,
						forceShowNSFW: o,
						redditStyle: r,
						shouldShowSubscribeButton: a,
						subredditOrProfile: i,
						templatePlaceholderImage: c
					} = e;
					return n.a.createElement("div", {
						className: Object(l.a)($.a.thumbnailContainer, {
							[$.a.mShowingButtonOrOverflow]: a
						})
					}, n.a.createElement("div", {
						className: $.a.thumbnailContainerRow
					}, a && i && n.a.createElement(w.a, {
						className: $.a.subscribeButton,
						getEventFactory: e => Object(V.f)(s.id, e ? "unsubscribe" : "subscribe"),
						identifier: {
							name: i.name,
							type: Object(H.e)(i) ? T.a.PROFILE : T.a.SUBREDDIT
						},
						postId: s.id
					})), n.a.createElement(_.a, {
						crosspost: t,
						post: s,
						redditStyle: r,
						forceShowNSFW: o,
						templatePlaceholderImage: c
					}))
				},
				te = Object(r.b)(() => Object(a.c)({
					crosspost: Q.c,
					currentUser: J.i,
					flairStyleTemplate: k.Q,
					hideNSFWPref: J.z,
					isActive: Q.g,
					isCurrentUserProfilePost: Q.h,
					isFrontpageHome: K.g,
					isM2MHomeRedirectEnabled: z.c,
					isPostChainDismissed: G.c,
					isPostChained: G.d,
					language: J.S,
					moderatorPermissions: U.i,
					modModeEnabled: k.O,
					post: Q.I,
					showEditFlair: Z.a,
					showMedia: k.r,
					isInCategoriesExperiment: W.a,
					subredditOrProfile: Q.T
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(c.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => t === D.a.upvoted ? e(Object(d.N)(n)) : e(Object(d.o)(n)),
						onIgnoreReports: () => e(Object(d.L)(n)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				});
			t.b = te(Object(L.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: o,
					currentUser: r,
					eventFactory: a,
					flairStyleTemplate: c,
					hideNSFWPref: d,
					inSubredditOrProfile: p = !1,
					isCheckboxSelected: w,
					isCommentsPage: _,
					isCurrentUserProfilePost: T,
					isFrontpage: L,
					isFrontpageHome: k,
					isM2MHomeRedirectEnabled: V,
					isOverlay: H,
					isPostChainDismissed: D,
					isPostChained: W,
					language: z,
					listingKey: G,
					listingName: U,
					moderatorPermissions: K,
					modModeEnabled: Z,
					onClickPost: Q,
					onIgnoreReports: J,
					onOpenReportsDropdown: Y,
					post: q,
					redditStyle: te,
					showBulkActionCheckbox: se,
					showEditFlair: oe,
					showMedia: ne,
					sendEvent: re,
					subredditOrProfile: ae,
					toggleCheckbox: ie
				} = e, le = te ? void 0 : c, ce = Object(B.a)(K), de = Z && ce, pe = Object(F.a)(K), me = Object(C.c)(q), ue = Object(R.a)(q), xe = p && !ne, be = xe && !!q.source && !o, he = !(L && k || T), ge = n.a.createElement(y.a, {
					className: Object(l.a)($.a.container, s, X.a.largeAndMediumPostStyles, X.a.largeAndMediumActiveStyles, Object(A.a)(e), {
						[X.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: H,
					style: Object(A.b)(e.flairStyleTemplate),
					post: q,
					onClick: Q,
					onPostContentClick: t,
					eventFactory: a
				}, Object(E.b)(q, e.handleVote, se, w, ie, le, te), n.a.createElement(P.a, {
					className: $.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: le,
					post: q,
					redditStyle: te
				}, n.a.createElement("article", {
					className: $.a.mainBody
				}, n.a.createElement("div", {
					className: $.a.content,
					"data-click-id": "body"
				}, n.a.createElement(j.a, {
					className: $.a.postTopLine,
					hideNSFWPref: d,
					iconClassName: $.a.postTopLineIcon,
					inSubredditOrProfile: p,
					isCommentsPage: _,
					isCurrentUserProfilePost: T,
					isOverlay: !!H,
					language: z,
					post: q,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: be,
					showSubreddit: !p && !q.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ae
				}), n.a.createElement(N.c, {
					className: $.a.postTitle,
					post: q,
					redditStyle: te,
					size: N.b.Large,
					titleColor: le && le.postTitleColor,
					isM2MHomeRedirectEnabled: V,
					isOverlay: H
				}), _ && (q.flair && q.flair.length > 0 || e.isInCategoriesExperiment) && n.a.createElement(h.a, {
					className: _ ? $.a.leftPadding : null,
					disableFlair: !_,
					post: q,
					sendEvent: re,
					showCategoryTag: e.isInCategoriesExperiment && _
				}), q.source && !q.isSponsored && !o && n.a.createElement(S.a, {
					className: $.a.sourceLink,
					isCommentsPage: _,
					post: q
				})), !xe && ue && n.a.createElement(ee, {
					crosspost: o ? q : void 0,
					hasModPostPerms: ce,
					isCommentsPage: _,
					isOverlay: H,
					modModeEnabled: Z,
					post: o || q,
					redditStyle: te,
					shouldShowSubscribeButton: he && !p,
					subredditOrProfile: ae,
					templatePlaceholderImage: le && le.postPlaceholderImage
				})), q.source && q.source.url && q.isSponsored && n.a.createElement(m.a, {
					className: $.a.adLinkWrapper
				}, n.a.createElement(M.a, {
					href: q.source.url.replace(i.a.redditUrl, ""),
					isSponsored: q.isSponsored,
					source: q.source
				}, q.source.displayText), q.callToAction && n.a.createElement(u.a, {
					href: q.source.url.replace(i.a.redditUrl, ""),
					isSponsored: q.isSponsored,
					source: q.source,
					isNotCardView: !0
				}, q.callToAction)), Z && ce && me && n.a.createElement(O.a, {
					className: $.a.modModeReports,
					language: z,
					onIgnoreReports: J,
					reportable: q
				}), n.a.createElement(v.d, {
					postId: q.id
				}), n.a.createElement("div", {
					className: $.a.flatlistContainer
				}, n.a.createElement(x.a, {
					className: $.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: le,
					redditStyle: te,
					model: q,
					onVoteClick: e.handleVote
				}), n.a.createElement(g.c, {
					currentUser: r,
					hasModFlairPerms: pe,
					hasModPostPerms: ce,
					isOverlay: !!H,
					language: z,
					modModeEnabled: Z,
					onIgnoreReports: J,
					onOpenReportsDropdown: Y,
					post: q,
					showEditFlair: oe,
					tooltipType: H ? I.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(f.h)({
						editPost: !de,
						save: !de,
						hide: !1,
						report: !1
					})
				}))));
				return n.a.createElement(n.a.Fragment, null, ge, W && !D && n.a.createElement(b.a, {
					className: $.a.chain,
					listingKey: G,
					listingName: U,
					postId: q.id
				}))
			}))
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				c = s("./src/reddit/components/ModModeReports/index.m.less"),
				d = s.n(c);
			const p = a.a.div("Text", d.a),
				m = a.a.div("Placeholder", d.a),
				u = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(m, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(m, {
							className: t
						}, n.a.createElement(p, null, n.a.createElement(l.c, null, "Loading reports…")))
					}
				});
			t.a = e => n.a.createElement(u, e)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Translated/index.tsx"),
				p = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(m);
			class x extends n.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(p.o)({
							postId: s,
							isFollowed: r
						}) : Object(p.g)({
							postId: s,
							isFollowed: r
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
					} = this.props, o = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && o && (a = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(d.a, {
						msgId: a
					}))
				}
			}
			const b = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(l.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(c.b)(x))
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
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/experiments/adSidebar.ts"),
				m = s("./src/reddit/components/PostLeftRail/index.m.less"),
				u = s.n(m);
			const x = 40,
				b = Object(r.b)(() => Object(a.c)({
					isInAdLeftSidebarExperiment: p.a
				})),
				h = e => e.isSponsored && !e.isInAdLeftSidebarExperiment ? Object(d.a)(e).button : e.isRemoved ? c.a.removed : e.isReported ? c.a.reported : "transparent",
				g = Object(l.a)(e => {
					const t = h(e),
						s = {
							width: "".concat(x, "px"),
							borderLeft: "4px solid ".concat(t)
						};
					return n.a.createElement("div", {
						className: Object(i.a)(u.a.postLeftRail, e.className),
						style: e.withoutComputedStyles ? {} : s
					}, e.children)
				});
			t.b = b(g)
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/components/PostTopLine/index.m.less"),
				C = s.n(O);
			const P = s("./src/lib/lessComponent.tsx").a.div("Container", C.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: O,
					inSubredditOrProfile: y,
					isCurrentUserProfilePost: f,
					isCommentsPage: N,
					isCompactPinnedPost: j,
					isOverlay: I,
					language: S,
					post: w,
					publicAwardersEnabled: _,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: L,
					showSubreddit: k,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, F = N && _;
				return n.a.createElement(P, {
					className: t
				}, k && R && n.a.createElement("div", {
					className: C.a.subredditIconWrapper
				}, n.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && n.a.createElement(p.b, {
					className: Object(r.a)(C.a.subredditIcon, O),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), n.a.createElement("div", {
					className: C.a.everythingElseWrapper
				}, k && n.a.createElement(l.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), n.a.createElement(d.d, {
					className: C.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: I ? d.c.Lightbox : void 0,
					language: S,
					post: w,
					showSub: k,
					subredditOrProfile: R
				}), n.a.createElement(c.a, {
					className: C.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: y,
					language: S,
					isCompactPinnedPost: j,
					post: w,
					tooltipType: I ? d.c.Lightbox : void 0
				}), R && n.a.createElement(i.a, {
					className: C.a.donationAmount,
					contentId: w.id,
					subredditId: R.id
				}), n.a.createElement(a.a, {
					forceShowAllAwards: N,
					isOverlay: I,
					showAwarders: F,
					tooltipType: I ? d.c.Lightbox : void 0,
					thing: w
				})), R && k && T && !f && n.a.createElement(u.a, {
					getEventFactory: e => Object(h.f)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(E.e)(R) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: w.id
				}, "Subscribe"), L && n.a.createElement(b.a, {
					className: C.a.OutboundLink,
					isSponsored: w.isSponsored,
					href: Object(v.A)(e.post),
					source: w.source
				}, n.a.createElement(g.a, {
					className: C.a.outboundLinkIcon
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowCollapse"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("expandoArrowExpand"), " ").concat(e.className),
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Expandos/Media/Lightbox/index.m.less": function(e, t, s) {
			e.exports = {
				LightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3",
				lightboxIcon: "_1RQFWa5zHMcVoJ2MvnnGM3"
			}
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), n.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), n.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), n.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), n.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/selectors/experiments/adSidebar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.a
				});
				return !!t && !Object(o.Sb)(t)
			}
		}
	}
]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~Multireddit~Poll~ProfileComme~ae80d57e.462bf27d0086252cbe1b.js.map