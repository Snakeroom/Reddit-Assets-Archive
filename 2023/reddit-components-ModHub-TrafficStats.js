// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-TrafficStats.29953acd54613ae768a0.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
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
				return i
			})), a.d(t, "e", (function() {
				return r
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
				return N
			})), a.d(t, "j", (function() {
				return g
			})), a.d(t, "i", (function() {
				return D
			})), a.d(t, "p", (function() {
				return M
			})), a.d(t, "o", (function() {
				return E
			}));
			var s, n, i, r, c, o = a("./node_modules/fbt/lib/FbtPublic.js"),
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
			}(i || (i = {})),
			function(e) {
				e.Members = "subscribers", e.Uniques = "uniqueUsers", e.Pageviews = "pageViews"
			}(r || (r = {})),
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
						case i.Members:
							return o.fbt._("Members", null, {
								hk: "1V8uqn"
							});
						case i.Pageviews:
							return o.fbt._("Pageviews", null, {
								hk: "2DvmWt"
							});
						case i.Uniques:
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
						i = h[n.getMonth()];
					return t === s.Month ? `${i.slice(0,3)} '${n.getFullYear().toString().slice(2,4)}` : n.toLocaleDateString("en", {
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
				N = e => Array.isArray(e) ? e.reduce((e, t) => e + parseInt(t), 0) : parseInt(e),
				g = e => {
					e = e.slice(0, m.a - 1);
					const t = M(s.Day, !0),
						a = new Array(u.length).fill(0),
						n = new Array(u.length).fill(0);
					return e.forEach((e, s) => {
						const i = new Date(t[s]).getDay();
						a[i] = a[i] + e, n[i] += 1
					}), a.map((e, t) => {
						const a = n[t];
						return Math.floor(a <= 0 ? e : e / a)
					})
				},
				D = e => {
					const t = e.slice(0, m.a - 1),
						a = M(s.Day, !0),
						n = new Array(h.length).fill(Number.NaN),
						i = new Array(h.length).fill(0);
					t.forEach((e, t) => {
						const s = new Date(a[t]).getMonth();
						n[s] = (n[s] || 0) + e, i[s] += 1
					});
					const r = e.length >= 28;
					let c = !1;
					return n.map((e, t) => {
						const a = i[t];
						return !c && !Number.isNaN(e) && a < 28 && r ? (c = !0, Number.NaN) : e
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
					if (t === i.Members) return [e.subscribers, e.unsubscribers];
					const s = r[t],
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
				i = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				o = a("./src/reddit/components/ModHub/StyledComponents/index.tsx");
			var l = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/components/ModHub/TrafficStats/helpers.ts"),
				u = a("./src/reddit/selectors/telemetry.ts");
			const h = e => ({
					subreddit: u.mb(e),
					profile: u.U(e),
					userSubreddit: u.vb(e)
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
					getComponent: () => Object(p.a)(() => Promise.all([a.e("vendors~ModStatsChart~Settings~ViewsTooltip"), a.e("vendors~ModStatsChart~ViewsTooltip"), a.e("ModStatsChart")]).then(a.bind(null, "./src/reddit/components/ModHub/TrafficStats/ModStatsChart/index.tsx"))).then(e => e.default),
					LoadingComponent: () => null,
					ErrorComponent: () => null
				});
			var v = e => i.a.createElement("button", {
					className: Object(l.a)(e.className, {
						[e.isSelectedStyles]: e.isSelected
					}),
					onClick: e.onClick
				}, Object(m.m)(e.label)),
				N = a("./src/lib/prettyPrintNumber/index.ts"),
				g = a("./src/reddit/components/ModHub/TrafficStats/ChartStats/StatBlock/index.m.less"),
				D = a.n(g);
			const {
				fbt: M
			} = a("./node_modules/fbt/lib/FbtPublic.js"), E = (e, t) => {
				const a = e.length;
				return e.slice(a - t - 1, a).reduce((e, t) => e + t, 0)
			};
			var _ = e => i.a.createElement("span", {
					className: D.a.StatBlock
				}, i.a.createElement("div", {
					className: D.a.contentContainer
				}, i.a.createElement("div", {
					className: D.a.value
				}, e.trafficStats ? Object(N.a)(((e, t, a) => {
					if (t === m.d.Members && e === m.b.Hour) return "N/A";
					const s = t === m.d.Members ? a[m.e.Members] : a[m.e[t]][m.c[e]].total;
					let n;
					if (e === m.b.Hour) n = 24;
					else if (e === m.b.Day) n = 7;
					else if (e === m.b.Month) {
						const a = new Date,
							i = a.getMonth() + 1;
						if (t === m.d.Members) return n = a.getDate(), E(s, n - 1); {
							const t = m.a[e];
							return Object(m.s)(s, i)[t - 1]
						}
					}
					return E(s, n)
				})(e.statsTime, e.statsView, e.trafficStats).toString()) : "-"), i.a.createElement("div", {
					className: D.a.timeFrame
				}, M._("Total - {timeFrame}", [M._param("timeFrame", e.timeFrame)], {
					hk: "1zxYNy"
				})))),
				T = a("./src/reddit/components/ModHub/TrafficStats/ChartStats/index.m.less"),
				k = a.n(T);
			const O = {
				[m.b.Hour]: 54,
				[m.b.Day]: 7,
				[m.b.Month]: 12
			};
			class C extends i.a.Component {
				constructor(e) {
					super(e), this.changeTime = e => {
						const t = m.a[e],
							a = O[e];
						this.setState({
							statsTime: e,
							windowSize: a,
							windowEnd: t,
							windowStart: t - a
						}), this.props.sendEvent(b(e, this.state.statsView))
					}, this.changeView = e => {
						const t = e === m.d.Members ? m.b.Day : this.state.statsTime,
							a = m.a[t],
							s = O[t];
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
					const t = O[m.b.Day],
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
					} = this.state, a = m.a[e], n = 0 === this.state.windowStart || e === m.b.Month, r = this.state.windowEnd === a || e === m.b.Month;
					return i.a.createElement("div", {
						className: k.a.contentContainer
					}, i.a.createElement("div", {
						className: k.a.viewNav
					}, i.a.createElement(v, {
						className: k.a.NavItem,
						label: m.d.Pageviews,
						isSelected: t === m.d.Pageviews,
						isSelectedStyles: k.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Pageviews)
					}), i.a.createElement(v, {
						className: k.a.NavItem,
						label: m.d.Uniques,
						isSelected: t === m.d.Uniques,
						isSelectedStyles: k.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Uniques)
					}), i.a.createElement(v, {
						className: k.a.NavItem,
						label: m.d.Members,
						isSelected: t === m.d.Members,
						isSelectedStyles: k.a.NavItemSelected,
						onClick: () => this.changeView(m.d.Members)
					})), i.a.createElement("div", {
						className: k.a.statContainer
					}, i.a.createElement(_, {
						statsTime: m.b.Hour,
						statsView: t,
						timeFrame: s.fbt._("Last 24 hours", null, {
							hk: "2wYQAC"
						}),
						trafficStats: this.props.trafficStats
					}), i.a.createElement(_, {
						statsTime: m.b.Day,
						statsView: t,
						timeFrame: s.fbt._("Last 7 days", null, {
							hk: "1FUPzN"
						}),
						trafficStats: this.props.trafficStats
					}), i.a.createElement(_, {
						statsTime: m.b.Month,
						statsView: t,
						timeFrame: s.fbt._("Last month", null, {
							hk: "2DzGEv"
						}),
						trafficStats: this.props.trafficStats
					})), i.a.createElement("div", {
						className: k.a.chartContainer
					}, i.a.createElement("span", {
						className: k.a.yAxis
					}, Object(m.m)(t)), (this.props.isTrafficStatsPending || !this.props.trafficStats) && i.a.createElement("div", {
						className: k.a.chartPlaceholder
					}), this.props.trafficStats && i.a.createElement(y, {
						data: this.props.trafficStats,
						statsView: t,
						statsTime: e,
						windowEnd: this.state.windowEnd,
						windowStart: this.state.windowStart
					})), i.a.createElement("div", {
						className: k.a.chartNav
					}, e !== m.b.Month && i.a.createElement("button", {
						className: k.a.buttonLeft,
						disabled: n,
						onClick: this.shiftWindowLeft
					}, i.a.createElement(w.a, {
						className: Object(l.a)(k.a.ArrowLeft, {
							[k.a.isDisabled]: n
						})
					})), t !== m.d.Members && i.a.createElement("span", {
						className: Object(l.a)(k.a.buttonGroup, {
							[k.a.hideNavArrows]: e === m.b.Month
						})
					}, i.a.createElement(v, {
						className: k.a.navButton,
						label: m.b.Hour,
						isSelected: e === m.b.Hour,
						isSelectedStyles: k.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Hour)
					}), i.a.createElement(v, {
						className: k.a.navButton,
						label: m.b.Day,
						isSelected: e === m.b.Day,
						isSelectedStyles: k.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Day)
					}), i.a.createElement(v, {
						className: k.a.navButton,
						label: m.b.Month,
						isSelected: e === m.b.Month,
						isSelectedStyles: k.a.navButtonSelected,
						onClick: () => this.changeTime(m.b.Month)
					})), e !== m.b.Month && i.a.createElement("button", {
						className: Object(l.a)(k.a.buttonRight, {
							[k.a.hideButtons]: t === m.d.Members
						}),
						disabled: r,
						onClick: this.shiftWindowRight
					}, i.a.createElement(w.a, {
						className: Object(l.a)(k.a.ArrowRight, {
							[k.a.isDisabled]: r
						})
					}))))
				}
			}
			var L = Object(d.c)(C),
				x = a("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				j = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				A = a("./src/reddit/components/ModHub/TrafficStats/DataTable/index.m.less"),
				H = a.n(A);
			const P = e => i.a.createElement("div", {
				className: H.a.dataRow
			}, i.a.createElement("span", {
				className: H.a.date
			}, e.date), i.a.createElement("span", {
				className: H.a.pageviews
			}, Object(N.a)(e.pageViews.toString())), i.a.createElement("span", {
				className: H.a.uniques
			}, Object(N.a)(e.uniques.toString())), i.a.createElement("span", {
				className: H.a.members
			}, Object(N.a)(e.members.toString())));
			class F extends i.a.PureComponent {
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
						const i = m.e[e];
						let r = e === m.d.Members ? n[i] : n[i][a].total;
						if (t === m.f.DayOfWeek) r = Object(m.j)(r);
						else if (t === m.f.Month) {
							const t = (new Date).getMonth() + 1;
							e === m.d.Members && (r = Object(m.i)(r).map(e => Number.isNaN(e) ? s.fbt._("N/A", null, {
								hk: "1msIWk"
							}) : e)), r = Object(m.r)(Object(m.s)(r, t))
						} else r = Object(m.r)(r);
						return this.state.isDirectionReversed ? Object(m.r)(r) : r
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
					} = this.state, a = t === m.f.Month ? m.c.Month : m.c.Day, n = this.getDataArray(m.d.Members, t, a), r = this.getDataArray(m.d.Pageviews, t, a), c = this.getDataArray(m.d.Uniques, t, a), o = this.getDateLabelArray();
					return i.a.createElement("div", {
						className: H.a.contentContainer
					}, i.a.createElement("div", {
						className: H.a.viewNav
					}, i.a.createElement(v, {
						className: H.a.NavItem,
						label: m.f.Day,
						isSelected: t === m.f.Day,
						isSelectedStyles: H.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.Day)
					}), i.a.createElement(v, {
						className: H.a.NavItem,
						label: m.f.DayOfWeek,
						isSelected: t === m.f.DayOfWeek,
						isSelectedStyles: H.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.DayOfWeek)
					}), i.a.createElement(v, {
						className: H.a.NavItem,
						label: m.f.Month,
						isSelected: t === m.f.Month,
						isSelectedStyles: H.a.NavItemSelected,
						onClick: () => this.changeTimeFrame(m.f.Month)
					})), i.a.createElement("div", {
						className: H.a.dataBar
					}, i.a.createElement("button", {
						className: H.a.dropdownButton,
						onClick: this.changeDataDirection
					}, i.a.createElement(j.a, {
						className: H.a.timeDropdown
					}, i.a.createElement("span", {
						className: H.a.timeLabel
					}, Object(m.m)(t)), i.a.createElement(x.b, {
						className: Object(l.a)(H.a.dropdownIcon, {
							[H.a.iconUp]: e
						})
					}))), i.a.createElement("span", {
						className: H.a.pageviewsCol
					}, s.fbt._("Pageviews", null, {
						hk: "1Gsorq"
					})), i.a.createElement("span", {
						className: H.a.uniquesCol
					}, s.fbt._("Uniques", null, {
						hk: "4kUp7T"
					})), i.a.createElement("span", {
						className: H.a.membersCol
					}, s.fbt._("Members joined", null, {
						hk: "2v6tbf"
					}))), this.props.trafficStats && o.map((e, t) => i.a.createElement(P, {
						date: e,
						key: e,
						pageViews: r[t],
						uniques: c[t],
						members: n[t]
					})))
				}
			}
			var I = Object(d.c)(F),
				W = a("./src/reddit/components/ModHub/TrafficStats/index.m.less"),
				q = a.n(W);
			const V = Object(c.c)({
					trafficStats: e => e.trafficStats ? e.trafficStats.trafficStats : null,
					isTrafficStatsPending: e => e.trafficStats.pending
				}),
				B = Object(r.b)(V);
			t.default = B(e => i.a.createElement("div", {
				className: q.a.trafficStats
			}, i.a.createElement("span", {
				className: q.a.titleText
			}, i.a.createElement(o.b, null, s.fbt._("Traffic Stats", null, {
				hk: "1TAYOH"
			})), i.a.createElement("span", {
				className: q.a.updateText
			}, s.fbt._("updating every hour", null, {
				hk: "4h5onW"
			}))), i.a.createElement(L, {
				isTrafficStatsPending: e.isTrafficStatsPending,
				trafficStats: e.trafficStats
			}), i.a.createElement(I, {
				trafficStats: e.trafficStats
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-TrafficStats.29953acd54613ae768a0.js.map