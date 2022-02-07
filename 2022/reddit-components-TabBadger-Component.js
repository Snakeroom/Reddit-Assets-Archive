// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.2bcdf215b28888e2fcfb.js
// Retrieved at 2/7/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TabBadger-Component"], {
		"./src/reddit/components/Pill/PillButton/index.m.less": function(t, e, i) {
			t.exports = {
				primaryButton: "cmR5BF4NpBUm3DBMZCmJS",
				active: "_2dj14FxV-bfkwopj1jV_fF",
				redditStyle: "C64b9palJF2n26mG_1q3D",
				DangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				dangerButtonColors: "_1aqI4zAQaNw-k6Jp5j3WJz",
				GoldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				goldButtonColors: "Vi9jnbb9vJd6ugulSJIAD",
				PremiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				premiumButtonColors: "ntawTzO-ZquMyaWgqE0je",
				Icon: "_1V9TNuAloX-Z3moRIXc8tO",
				icon: "_1V9TNuAloX-Z3moRIXc8tO",
				isLeft: "HjpiNF5rj_I6fiMfmW-X7",
				isRight: "_1A_npZJAxjfyiijZ14jtzh",
				tabGroup: "_2jNQT-6WbFOjX2hdDWV56w",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
		},
		"./src/reddit/components/Pill/PillButton/index.tsx": function(t, e, i) {
			"use strict";
			i.d(e, "b", (function() {
				return n
			})), i.d(e, "a", (function() {
				return p
			}));
			var n, s = i("./node_modules/react/index.js"),
				o = i.n(s),
				l = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/components/Pill/PillButton/index.m.less"),
				r = i.n(a);

			function d() {
				return (d = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
					}
					return t
				}).apply(this, arguments)
			}! function(t) {
				t.BUTTON = "BUTTON", t.TAB_GROUP = "TAB_GROUP"
			}(n || (n = {}));
			const c = {
					[n.BUTTON]: void 0,
					[n.TAB_GROUP]: r.a.tabGroup
				},
				u = (t, e) => {
					if (e !== n.BUTTON) return t ? r.a.active : r.a.inactive
				},
				p = ({
					active: t = !0,
					children: e,
					className: i,
					disabled: n = !1,
					onClick: s,
					variant: a,
					...p
				}) => o.a.createElement("button", d({}, p, {
					className: Object(l.a)(r.a.primaryButton, c[a], u(t, a), i),
					disabled: n,
					onClick: s
				}), e)
		},
		"./src/reddit/components/Pill/PillButtonGroup/index.m.less": function(t, e, i) {
			t.exports = {
				closeButton: "_1PPMaBuBIFqAY5VrSWww3Y",
				active: "_3SadWHnN81PyRnYnwRVC0h",
				redditStyle: "_3AQrXM8QyGymCsEmUWeBGF",
				DangerButtonColors: "_2gYTcu30WFp0vgt4He3N16",
				dangerButtonColors: "_2gYTcu30WFp0vgt4He3N16",
				GoldButtonColors: "_1hT6mbVr_PMBkkKhq4vDWR",
				goldButtonColors: "_1hT6mbVr_PMBkkKhq4vDWR",
				PremiumButtonColors: "_3_OhF7RQtpL2Jlj6YSXweR",
				premiumButtonColors: "_3_OhF7RQtpL2Jlj6YSXweR",
				Icon: "_1ajf96omFX2Ud7WwYuThtT",
				icon: "_1ajf96omFX2Ud7WwYuThtT",
				isLeft: "_1dJNsQoS1dqMZHfLU5J1un",
				isRight: "_2BFWf3WhRtdGlk1Qk-XUxa",
				primaryButtonWithDivider: "_2R__ntXP0SJs6INH-bBBFn",
				closeIcon: "_1P6W3uUZ7ehYwJrW6a7sfJ"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(t, e, i) {
			t.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return d
			}));
			var n = i("./node_modules/react/index.js"),
				s = i.n(n),
				o = i("./src/lib/classNames/index.ts"),
				l = i("./src/reddit/components/Pill/index.m.less"),
				a = i.n(l);

			function r() {
				return (r = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var i = arguments[e];
						for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
					}
					return t
				}).apply(this, arguments)
			}
			const d = ({
				children: t,
				className: e,
				...i
			}) => s.a.createElement("div", r({
				className: Object(o.a)(a.a.pillContainer, e)
			}, i), t)
		},
		"./src/reddit/components/TabBadger/Component.tsx": function(t, e, i) {
			"use strict";
			i.r(e), i.d(e, "SHORT_TIMER", (function() {
				return f
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				l = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/components/Pill/index.tsx"),
				d = i("./src/reddit/icons/svgs/Close/index.tsx"),
				c = i("./src/reddit/components/Pill/PillButton/index.tsx"),
				u = i("./src/reddit/components/Pill/PillButtonGroup/index.m.less"),
				p = i.n(u);
			const m = ({
					onClick: t
				}) => o.a.createElement("button", {
					className: p.a.closeButton,
					onClick: t
				}, o.a.createElement(d.a, {
					className: p.a.closeIcon
				})),
				h = t => o.a.createElement(o.a.Fragment, null, o.a.createElement(c.a, {
					className: Object(l.a)(p.a.primaryButtonWithDivider),
					onClick: t.onClick,
					variant: c.b.BUTTON
				}, t.children), o.a.createElement(m, {
					onClick: t.onClickClose
				}));
			var _ = i("./src/reddit/constants/page.ts"),
				b = i("./src/reddit/helpers/tabBadging/index.ts");
			const B = "refresh_page_pill",
				g = t => ({
					source: "popup",
					action: "view",
					noun: B
				}),
				P = t => ({
					source: "popup",
					action: "click",
					noun: B
				});
			var v = i("./src/reddit/components/TabBadger/index.m.less"),
				C = i.n(v);
			const T = 12 * a.Q,
				f = 2 * a.Q,
				j = 5e4;
			class x extends s.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = t => t.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(b.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: t,
							subredditName: e,
							subscriberCount: i
						} = this.props;
						window.clearTimeout(this.timer), t || e === _.d.All || e === _.d.Popular ? this.timer = window.setTimeout(this.badgeFavicon, f) : i && i > j && (this.timer = window.setTimeout(this.badgeFavicon, T))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(b.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(g), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(P), this.unbadgeFavicon(), this.hidePill()
					}
				}
				componentDidMount() {
					this.setTimer()
				}
				componentDidUpdate(t, e) {
					this.unreadMessageBadgingUpdate(t) || this.props.previousPageIsOverlay || (this.state.isPillHidden ? (this.unbadgeFavicon(), this.setTimer()) : e.isPillHidden || (this.unbadgeFavicon(), this.hidePill()))
				}
				componentWillUnmount() {
					this.unbadgeFavicon(), window.clearTimeout(this.timer)
				}
				render() {
					return o.a.createElement("div", {
						className: C.a.pillContainer
					}, o.a.createElement(r.a, {
						className: Object(l.a)(C.a.pill, this.state.isPillHidden && C.a.pillHidden)
					}, o.a.createElement(h, {
						onClick: this.handlePillClick,
						onClickClose: this.hidePill
					}, n.fbt._("New Posts", null, {
						hk: "355pK6"
					}))))
				}
			}
			e.default = x
		},
		"./src/reddit/components/TabBadger/index.m.less": function(t, e, i) {
			t.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pill: "_3QVmoK4pfXYk-E13BWrpzd",
				pillHidden: "_3bDW1dwX-jslT_naNgPVpF"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.2bcdf215b28888e2fcfb.js.map