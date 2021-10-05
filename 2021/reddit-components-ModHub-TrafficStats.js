// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-TrafficStats.d9cfdfbcf7e53ce1a7b9.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-TrafficStats"], {
		"./src/reddit/components/ModHub/TrafficStats/ChartStats/StatBlock/index.m.less": function(e, t, a) {
			e.exports = {
				StatBlock: "_15yDFywuWpwMfKQl2EX5QL",
				statBlock: "_15yDFywuWpwMfKQl2EX5QL",
				contentContainer: "Z5iuUgIrKzcPbug956rzs",
				value: "_3nB9M6tty7F-_-jxg4SlDR",
				timeFrame: "My7ZRJ2oCTkOWGK-VO3-T"
			}
		},
		"./src/reddit/components/ModHub/TrafficStats/ChartStats/index.m.less": function(e, t, a) {
			e.exports = {
				contentContainer: "_3fTZTX-AXrihLC0t-DQwIi",
				viewNav: "_1KUVJ64hhjMPIEeine0cpe",
				NavItem: "_2hMH8rygvSO4vIcLaFPwev",
				navItem: "_2hMH8rygvSO4vIcLaFPwev",
				NavItemSelected: "_3Hm3WQPMg73Jn5A51WVJdx",
				navItemSelected: "_3Hm3WQPMg73Jn5A51WVJdx",
				statContainer: "_2CFSpDjzO7AYBVPBZwkwcE",
				chartContainer: "_24gv__gflVe-1EEEvtLXTn",
				chartPlaceholder: "_2yL5PVICoAVOqVrTI0atoo",
				yAxis: "_2LKGM1hSwZTFMcaRHp1UDX",
				chartNav: "_2zFkOhTILSIr8_YQTKpLHd",
				buttonLeft: "bU-gLdHG7cprmpQDQSc8v",
				ArrowLeft: "_1Qk0xAYMIhSPe5ASi5nTcC",
				arrowLeft: "_1Qk0xAYMIhSPe5ASi5nTcC",
				isDisabled: "_2AMC2xlwTYJTQi-eqt-BoO",
				buttonGroup: "_2Lt9qlKkea1sYE5-zCWtLo",
				hideNavArrows: "_1AunUk0wbBsEUQUsqdQ2MV",
				navButton: "aPY9hO-MgeyV2eRHxr169",
				navButtonSelected: "_1LnuqjKY2_jF5DaJ_siSrV",
				buttonRight: "C9l4ZgMi7DFJ4TCod-287",
				hideButtons: "_3ZFrLs3IL0jeev6csLQjnu",
				ArrowRight: "_1Oc_QLvwMhJnNq2Ll-ViAO",
				arrowRight: "_1Oc_QLvwMhJnNq2Ll-ViAO"
			}
		},
		"./src/reddit/components/ModHub/TrafficStats/DataTable/index.m.less": function(e, t, a) {
			e.exports = {
				contentContainer: "_1yULy9aDqyShG7EN8EMQz7",
				viewNav: "_29nBxAsanlTjLQS7kPY0Mx",
				NavItem: "nbvhagKy2pBAm4tw2LEEH",
				navItem: "nbvhagKy2pBAm4tw2LEEH",
				NavItemSelected: "_2C9eNSrWNjYRNELdD83yNQ",
				navItemSelected: "_2C9eNSrWNjYRNELdD83yNQ",
				dataBar: "Z6qNfzPBLhRm8yQh2OwfN",
				dropdownButton: "_1AD4p2NNgRW0L4i4Sy9sB-",
				timeDropdown: "_1HPGkSqiuHglKyAhmxRxcR",
				timeLabel: "_11-Q1eouDxfGUYcjSTidW5",
				dropdownIcon: "_3zVdh3jBxtCW7BmAElN38t",
				iconUp: "_1k6uzKsQNWH4Mlv6NlQoiA",
				membersCol: "_203qQ7TLOHFe9EKmhxOiyB",
				pageviewsCol: "lLqYVOonnKKpGz0hmSKmF",
				uniquesCol: "FWlqJiTte_o972wQjwBnZ",
				dataRow: "_23vJv7PbwZphG7Y4LE5wFA",
				date: "_20yg7LJ0AnZ9VbToLrodJf",
				members: "_1bOFcKMTQ0EWkUDaLpPfaX",
				pageviews: "_1ayTZ5UF8G1ofHayw3X6I-",
				uniques: "qd1wOHnWPjWqI4sGO5fNe"
			}
		},
		"./src/reddit/components/ModHub/TrafficStats/helpers.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "c", (function() {
				return n
			})), a.d(t, "d", (function() {
				return r
			})), a.d(t, "e", (function() {
				return i
			})), a.d(t, "f", (function() {
				return c
			})), a.d(t, "h", (function() {
				return u
			})), a.d(t, "q", (function() {
				return h
			})), a.d(t, "m", (function() {
				return f
			})), a.d(t, "r", (function() {
				return b
			})), a.d(t, "s", (function() {
				return w
			})), a.d(t, "a", (function() {
				return S
			})), a.d(t, "n", (function() {
				return p
			})), a.d(t, "l", (function() {
				return y
			})), a.d(t, "k", (function() {
				return v
			})), a.d(t, "g", (function() {
				return g
			})), a.d(t, "j", (function() {
				return N
			})), a.d(t, "i", (function() {
				return D
			})), a.d(t, "p", (function() {
				return M
			})), a.d(t, "o", (function() {
				return E
			}));
			var s, n, r, i, c, o = a("./node_modules/fbt/lib/FbtPublic.js"),
				l = a("./node_modules/lodash/times.js"),
				d = a.n(l),
				m = a("./src/reddit/models/TrafficStats/index.ts");
			! function(e) {
				e.Hour = "Hour", e.Day = "Day", e.Month = "Month"
			}(s || (s = {})),
			function(e) {
				e.Hour = "byHour", e.Day = "byDay", e.Month = "byMonth"
			}(n || (n = {})),
			function(e) {
				e.Members = "Members", e.Uniques = "Uniques", e.Pageviews = "Pageviews"
			}(r || (r = {})),
			function(e) {
				e.Members = "subscribers", e.Uniques = "uniqueUsers", e.Pageviews = "pageViews"
			}(i || (i = {})),
			function(e) {
				e.Day = "Day", e.DayOfWeek = "Day of week", e.Month = "Month"
			}(c || (c = {}));
			const u = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				f = e => {
					switch (e) {
						case s.Hour:
							return o.fbt._("Hour", null, {
								hk: "3VRjZL"
							});
						case s.Day:
						case c.Day:
							return o.fbt._("Day", null, {
								hk: "2BdKci"
							});
						case c.DayOfWeek:
							return o.fbt._("Day of week", null, {
								hk: "Pp9JW"
							});
						case c.Month:
						case s.Month:
							return o.fbt._("Month", null, {
								hk: "3jEkXF"
							});
						case r.Members:
							return o.fbt._("Members", null, {
								hk: "1V8uqn"
							});
						case r.Pageviews:
							return o.fbt._("Pageviews", null, {
								hk: "2DvmWt"
							});
						case r.Uniques:
							return o.fbt._("Uniques", null, {
								hk: "3tWppG"
							});
						default:
							return ""
					}
				},
				b = e => [...e].reverse(),
				w = (e, t) => e.slice(t, e.length).concat(e.slice(0, t)),
				S = {
					[s.Hour]: m.b,
					[s.Day]: m.a,
					[s.Month]: m.c
				},
				p = (e, t, a) => {
					const n = new Date(e),
						r = h[n.getMonth()];
					return t === s.Month ? `${r.slice(0,3)} '${n.getFullYear().toString().slice(2,4)}` : n.toLocaleDateString("en", {
						month: a ? "long" : "short",
						day: "numeric"
					})
				},
				y = e => {
					return new Date(e).toLocaleTimeString("en", {
						hour: "numeric"
					}).replace(" ", "")
				},
				v = (e, t, a) => {
					return new Date(e).toLocaleDateString("en", {
						weekday: t === s.Hour || a ? void 0 : "short",
						month: "numeric",
						day: "numeric",
						year: a ? "2-digit" : void 0
					})
				},
				g = e => Array.isArray(e) ? e.reduce((e, t) => e + parseInt(t), 0) : parseInt(e),
				N = e => {
					e = e.slice(0, m.a - 1);
					const t = M(s.Day, !0),
						a = new Array(u.length).fill(0),
						n = new Array(u.length).fill(0);
					return e.forEach((e, s) => {
						const r = new Date(t[s]).getDay();
						a[r] = a[r] + e, n[r] += 1
					}), a.map((e, t) => {
						const a = n[t];
						return Math.floor(a <= 0 ? e : e / a)
					})
				},
				D = e => {
					const t = e.slice(0, m.a - 1),
						a = M(s.Day, !0),
						n = new Array(h.length).fill(Number.NaN),
						r = new Array(h.length).fill(0);
					t.forEach((e, t) => {
						const s = new Date(a[t]).getMonth();
						n[s] = (n[s] || 0) + e, r[s] += 1
					});
					const i = e.length >= 28;
					let c = !1;
					return n.map((e, t) => {
						const a = r[t];
						return !c && !Number.isNaN(e) && a < 28 && i ? (c = !0, Number.NaN) : e
					})
				},
				M = (e, t) => {
					const a = S[e],
						n = d()(a, t => {
							const a = new Date;
							return e === s.Hour ? a.setHours(a.getHours() - t) : e === s.Day ? a.setDate(a.getDate() - t) : (a.setDate(1), a.setMonth(a.getMonth() - t)), a.getTime()
						});
					return t ? b(n) : n
				},
				E = (e, t, a) => {
					if (t === r.Members) return [e.subscribers, e.unsubscribers];
					const s = i[t],
						c = n[a],
						o = e[s][c];
					return [o.desktop, o.oldReddit, o.mWeb, o.apps]
				}
		},
		"./src/reddit/components/ModHub/TrafficStats/index.m.less": function(e, t, a) {
			e.exports = {
				trafficStats: "_2ukk3tTNze71whUirp41zy",
				titleText: "GRV6dNoWlN_pWb67IX82x",
				updateText: "_3UAMTLjanr69s4h5Swl1ny"
			}
		},
		"./src/reddit/components/ModHub/TrafficStats/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				i = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				o = a("./src/reddit/components/ModHub/StyledComponents/index.tsx");
			var l = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/components/ModHub/TrafficStats/helpers.ts"),
				u = a("./src/reddit/selectors/telemetry.ts");
			const h = e => ({
					subreddit: u.subreddit(e),
					profile: u.profile(e),
					userSubreddit: u.userSubreddit(e)
				}),
				f = {
					[m.d.Uniques]: "uniques",
					[m.d.Pageviews]: "pageviews"
				},
				b = (e, t) => a => ({
					source: t ? f[t] : "traffic",
					action: "click",
					noun: e.toLowerCase(),
					actionInfo: {
						pageType: "moderation_pages_traffic"
					},
					...h(a)
				});
			var w = a("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				S = a("./src/higherOrderComponents/makeAsync.tsx"),
				p = a("./src/lib/loadWithRetries/index.ts"),
				y = Object(S.a)({
					getComponent: () => Object(p.a)(() => Promise.all([a.e("vendors~ModStatsChart~Settings"), a.e("vendors~ModStatsChart"), a.e("ModStatsChart")]).then(a.bind(null, "./src/reddit/components/ModHub/TrafficStats/ModStatsChart/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null,
					ErrorComponent: () => null
				});
			var v = e => r.a.createElement("button", {
					className: Object(l.a)(e.className, {
						[e.isSelectedStyles]: e.isSelected
					}),
					onClick: e.onClick
				}, Object(m.m)(e.label)),
				g = a("./src/lib/prettyPrintNumber/index.ts"),
				N = a("./src/reddit/components/ModHub/TrafficStats/ChartStats/StatBlock/index.m.less"),
				D = a.n(N);
			const {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			var E = e => r.a.createElement("span", {
					className: D.a.StatBlock
				}, r.a.createElement("div", {
					className: D.a.contentContainer
				}, r.a.createElement("div", {
					className: D.a.value
				}, e.trafficStats ? Object(g.a)(((e, t, a) => {
					if (t === m.d.Members && e === m.b.Hour) return "N/A";
					const s = t === m.d.Members ? a[m.e.Members] : a[m.e[t]][m.c[e]].total;
					let n;
					if (e === m.b.Hour) n = 24;
					else if (e === m.b.Day) n = 7;
					else if (e === m.b.Month) {
						if (t !== m.d.Members) {
							return s[m.a[e] - 1]
						} {
							const e = new Date;
							n = new Date(e.getFullYear(), e.getMonth(), 0).getDate()
						}
					}
					return ((e, t) => {
						const a = e.length;
						return e.slice(a - t - 1, a).reduce((e, t) => e + t, 0)
					})(s, n)
				})(e.statsTime, e.statsView, e.trafficStats).toString()) : "-"), r.a.createElement("div", {
					className: D.a.timeFrame
				}, M._("Total - {timeFrame}", [M._param("timeFrame", e.timeFrame)], {
					hk: "1zxYNy"
				})))),
				_ = a("./src/reddit/components/ModHub/TrafficStats/ChartStats/index.m.less"),
				T = a.n(_);
			const k = {
				[m.b.Hour]: 54,
				[m.b.Day]: 7,
				[m.b.Month]: 12
			};
			class O extends r.a.Component {
				constructor(e) {
					super(e), this.changeTime = e => {
						const t = m.a[e],
							a = k[e];
						this.setState({
							statsTime: e,
							windowSize: a,
							windowEnd: t,
							windowStart: t - a
						}), this.props.sendEvent(b(e, this.state.statsView))
					}, this.changeView = e => {
						const t = e === m.d.Members ? m.b.Day : this.state.statsTime,
							a = m.a[t],
							s = k[t];
						this.setState({
							statsTime: t,
							statsView: e,
							windowSize: s,
							windowEnd: a,
							windowStart: a - s
						}), this.props.sendEvent(b(e))
					}, this.shiftWindowLeft = () => {
						const e = Math.max(0, this.state.windowStart - this.state.windowSize),
							t = Math.max(this.state.windowSize, this.state.windowEnd - this.state.windowSize);
						this.setState({
							windowStart: e,
							windowEnd: t
						})
					}, this.shiftWindowRight = () => {
						const e = m.a[this.state.statsTime],
							t = Math.min(e - this.state.windowSize, this.state.windowStart + this.state.windowSize),
							a = Math.min(e, this.state.windowEnd + this.state.windowSize);
						this.setState({
							windowStart: t,
							windowEnd: a
						})
					};
					const t = k[m.b.Day],
						a = m.a[m.b.Day];
					this.state = {
						statsTime: m.b.Day,
						statsView: m.d.Pageviews,
						windowSize: t,
						windowEnd: a,
						windowStart: a - t
					}
				}
				render() {
					const {
						statsTime: e,
						statsView: t
					} = this.state, a = m.a[e], n = 0 === this.state.windowStart || e === m.b.Month, i = this.state.windowEnd === a || e === m.b.Month;
					return r.a.createElement("div", {
						className: T.a.contentContainer
					}, r.a.createElement("div", {
						className: T.a.viewNav
					}, r.a.createElement(v, {
						className: T.a.NavItem,
						label: m.d.Pageviews,
						isSelected: t === m.d.Pageviews,
						isSelectedStyles: T.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Pageviews)
					}), r.a.createElement(v, {
						className: T.a.NavItem,
						label: m.d.Uniques,
						isSelected: t === m.d.Uniques,
						isSelectedStyles: T.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Uniques)
					}), r.a.createElement(v, {
						className: T.a.NavItem,
						label: m.d.Members,
						isSelected: t === m.d.Members,
						isSelectedStyles: T.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Members)
					})), r.a.createElement("div", {
						className: T.a.statContainer
					}, r.a.createElement(E, {
						statsTime: m.b.Hour,
						statsView: t,
						timeFrame: s.fbt._("Last 24 hours", null, {
							hk: "2wYQAC"
						}),
						trafficStats: this.props.trafficStats
					}), r.a.createElement(E, {
						statsTime: m.b.Day,
						statsView: t,
						timeFrame: s.fbt._("Last 7 days", null, {
							hk: "1FUPzN"
						}),
						trafficStats: this.props.trafficStats
					}), r.a.createElement(E, {
						statsTime: m.b.Month,
						statsView: t,
						timeFrame: s.fbt._("Last month", null, {
							hk: "2DzGEv"
						}),
						trafficStats: this.props.trafficStats
					})), r.a.createElement("div", {
						className: T.a.chartContainer
					}, r.a.createElement("span", {
						className: T.a.yAxis
					}, Object(m.m)(t)), (this.props.isTrafficStatsPending || !this.props.trafficStats) && r.a.createElement("div", {
						className: T.a.chartPlaceholder
					}), this.props.trafficStats && r.a.createElement(y, {
						data: this.props.trafficStats,
						statsView: t,
						statsTime: e,
						windowEnd: this.state.windowEnd,
						windowStart: this.state.windowStart
					})), r.a.createElement("div", {
						className: T.a.chartNav
					}, e !== m.b.Month && r.a.createElement("button", {
						className: T.a.buttonLeft,
						disabled: n,
						onClick: this.shiftWindowLeft
					}, r.a.createElement(w.a, {
						className: Object(l.a)(T.a.ArrowLeft, {
							[T.a.isDisabled]: n
						})
					})), t !== m.d.Members && r.a.createElement("span", {
						className: Object(l.a)(T.a.buttonGroup, {
							[T.a.hideNavArrows]: e === m.b.Month
						})
					}, r.a.createElement(v, {
						className: T.a.navButton,
						label: m.b.Hour,
						isSelected: e === m.b.Hour,
						isSelectedStyles: T.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Hour)
					}), r.a.createElement(v, {
						className: T.a.navButton,
						label: m.b.Day,
						isSelected: e === m.b.Day,
						isSelectedStyles: T.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Day)
					}), r.a.createElement(v, {
						className: T.a.navButton,
						label: m.b.Month,
						isSelected: e === m.b.Month,
						isSelectedStyles: T.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Month)
					})), e !== m.b.Month && r.a.createElement("button", {
						className: Object(l.a)(T.a.buttonRight, {
							[T.a.hideButtons]: t === m.d.Members
						}),
						disabled: i,
						onClick: this.shiftWindowRight
					}, r.a.createElement(w.a, {
						className: Object(l.a)(T.a.ArrowRight, {
							[T.a.isDisabled]: i
						})
					}))))
				}
			}
			var C = Object(d.c)(O),
				L = a("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				x = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				j = a("./src/reddit/components/ModHub/TrafficStats/DataTable/index.m.less"),
				A = a.n(j);
			const H = e => r.a.createElement("div", {
				className: A.a.dataRow
			}, r.a.createElement("span", {
				className: A.a.date
			}, e.date), r.a.createElement("span", {
				className: A.a.pageviews
			}, Object(g.a)(e.pageViews.toString())), r.a.createElement("span", {
				className: A.a.uniques
			}, Object(g.a)(e.uniques.toString())), r.a.createElement("span", {
				className: A.a.members
			}, Object(g.a)(e.members.toString())));
			class P extends r.a.PureComponent {
				constructor(e) {
					super(e), this.changeDataDirection = () => this.setState({
						isDirectionReversed: !this.state.isDirectionReversed
					}), this.changeTimeFrame = e => {
						this.setState({
							timeFrame: e,
							isDirectionReversed: !1
						});
						const t = e === m.f.Day ? m.b.Day : e === m.f.Month ? m.b.Month : "day_of_week";
						this.props.sendEvent(b(t))
					}, this.getDataArray = (e, t, a) => {
						const {
							trafficStats: n
						} = this.props;
						if (!n) return;
						const r = m.e[e];
						let i = e === m.d.Members ? n[r] : n[r][a].total;
						if (t === m.f.DayOfWeek) i = Object(m.j)(i);
						else if (t === m.f.Month) {
							const t = (new Date).getMonth() + 1;
							e === m.d.Members && (i = Object(m.i)(i).map(e => Number.isNaN(e) ? s.fbt._("N/A", null, {
								hk: "1msIWk"
							}) : e)), i = Object(m.r)(Object(m.s)(i, t))
						} else i = Object(m.r)(i);
						return this.state.isDirectionReversed ? Object(m.r)(i) : i
					}, this.getDateLabelArray = () => {
						const {
							timeFrame: e,
							isDirectionReversed: t
						} = this.state;
						let a;
						if (e === m.f.Day) a = Object(m.p)(m.b.Day, !1).map(e => Object(m.k)(e, m.b.Day, !0));
						else if (e === m.f.DayOfWeek) a = m.h;
						else {
							const e = (new Date).getMonth() + 1;
							a = Object(m.r)(Object(m.s)(m.q, e))
						}
						return t ? Object(m.r)(a) : a
					}, this.state = {
						isDirectionReversed: !1,
						timeFrame: m.f.Day
					}
				}
				render() {
					const {
						isDirectionReversed: e,
						timeFrame: t
					} = this.state, a = t === m.f.Month ? m.c.Month : m.c.Day, n = this.getDataArray(m.d.Members, t, a), i = this.getDataArray(m.d.Pageviews, t, a), c = this.getDataArray(m.d.Uniques, t, a), o = this.getDateLabelArray();
					return r.a.createElement("div", {
						className: A.a.contentContainer
					}, r.a.createElement("div", {
						className: A.a.viewNav
					}, r.a.createElement(v, {
						className: A.a.NavItem,
						label: m.f.Day,
						isSelected: t === m.f.Day,
						isSelectedStyles: A.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.Day)
					}), r.a.createElement(v, {
						className: A.a.NavItem,
						label: m.f.DayOfWeek,
						isSelected: t === m.f.DayOfWeek,
						isSelectedStyles: A.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.DayOfWeek)
					}), r.a.createElement(v, {
						className: A.a.NavItem,
						label: m.f.Month,
						isSelected: t === m.f.Month,
						isSelectedStyles: A.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.Month)
					})), r.a.createElement("div", {
						className: A.a.dataBar
					}, r.a.createElement("button", {
						className: A.a.dropdownButton,
						onClick: this.changeDataDirection
					}, r.a.createElement(x.a, {
						className: A.a.timeDropdown
					}, r.a.createElement("span", {
						className: A.a.timeLabel
					}, Object(m.m)(t)), r.a.createElement(L.b, {
						className: Object(l.a)(A.a.dropdownIcon, {
							[A.a.iconUp]: e
						})
					}))), r.a.createElement("span", {
						className: A.a.pageviewsCol
					}, s.fbt._("Pageviews", null, {
						hk: "1Gsorq"
					})), r.a.createElement("span", {
						className: A.a.uniquesCol
					}, s.fbt._("Uniques", null, {
						hk: "4kUp7T"
					})), r.a.createElement("span", {
						className: A.a.membersCol
					}, s.fbt._("Members joined", null, {
						hk: "2v6tbf"
					}))), this.props.trafficStats && o.map((e, t) => r.a.createElement(H, {
						date: e,
						key: e,
						pageViews: i[t],
						uniques: c[t],
						members: n[t]
					})))
				}
			}
			var F = Object(d.c)(P),
				I = a("./src/reddit/components/ModHub/TrafficStats/index.m.less"),
				W = a.n(I);
			const q = Object(c.c)({
					trafficStats: e => e.trafficStats ? e.trafficStats.trafficStats : null,
					isTrafficStatsPending: e => e.trafficStats.pending
				}),
				B = Object(i.b)(q);
			t.default = B(e => r.a.createElement("div", {
				className: W.a.trafficStats
			}, r.a.createElement("span", {
				className: W.a.titleText
			}, r.a.createElement(o.b, null, s.fbt._("Traffic Stats", null, {
				hk: "1TAYOH"
			})), r.a.createElement("span", {
				className: W.a.updateText
			}, s.fbt._("updating every hour", null, {
				hk: "4h5onW"
			}))), r.a.createElement(C, {
				isTrafficStatsPending: e.isTrafficStatsPending,
				trafficStats: e.trafficStats
			}), r.a.createElement(F, {
				trafficStats: e.trafficStats
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-TrafficStats.d9cfdfbcf7e53ce1a7b9.js.map