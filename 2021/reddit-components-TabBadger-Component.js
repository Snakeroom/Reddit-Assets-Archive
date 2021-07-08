// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.35ae6dd1019acae289d4.js
// Retrieved at 7/8/2021, 4:00:04 PM by Reddit Dataminer v1.0.0
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
				pillButtonNeutralDay: "_1cGAYsHOBr-BQeVVns1HGR",
				inactive: "_1g3g98ViMb36cM-peU17Jk"
			}
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
				return x
			}));
			var n, s = i("./node_modules/fbt/lib/FbtPublic.js"),
				o = i("./node_modules/react/index.js"),
				l = i.n(o),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/lib/constants/index.ts"),
				d = i("./src/reddit/components/Pill/index.tsx"),
				c = i("./src/reddit/icons/svgs/Close/index.tsx"),
				u = i("./src/reddit/components/Pill/PillButton/index.m.less"),
				p = i.n(u);
			! function(t) {
				t.BUTTON = "BUTTON", t.NEUTRAL_DAY = "NEUTRAL_DAY"
			}(n || (n = {}));
			const m = {
					[n.BUTTON]: void 0,
					[n.NEUTRAL_DAY]: p.a.pillButtonNeutralDay
				},
				h = (t, e) => {
					if (e !== n.BUTTON) return t ? p.a.active : p.a.inactive
				},
				_ = ({
					active: t = !0,
					children: e,
					className: i,
					disabled: n = !1,
					onClick: s,
					variant: o
				}) => l.a.createElement("button", {
					className: Object(a.a)(p.a.primaryButton, m[o], h(t, o), i),
					disabled: n,
					onClick: s
				}, e);
			var B = i("./src/reddit/components/Pill/PillButtonGroup/index.m.less"),
				b = i.n(B);
			const g = ({
					onClick: t
				}) => l.a.createElement("button", {
					className: b.a.closeButton,
					onClick: t
				}, l.a.createElement(c.a, {
					className: b.a.closeIcon
				})),
				v = t => l.a.createElement(l.a.Fragment, null, l.a.createElement(_, {
					className: Object(a.a)(b.a.primaryButtonWithDivider),
					onClick: t.onClick,
					variant: n.BUTTON
				}, t.children), l.a.createElement(g, {
					onClick: t.onClickClose
				}));
			var C = i("./src/reddit/constants/page.ts"),
				P = i("./src/reddit/helpers/tabBadging/index.ts");
			const T = "refresh_page_pill",
				N = t => ({
					source: "popup",
					action: "view",
					noun: T
				}),
				f = t => ({
					source: "popup",
					action: "click",
					noun: T
				});
			var w = i("./src/reddit/components/TabBadger/index.m.less"),
				j = i.n(w);
			const O = 12 * r.O,
				x = 2 * r.O,
				k = 5e4;
			class F extends o.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = t => t.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(P.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: t,
							subredditName: e,
							subscriberCount: i
						} = this.props;
						window.clearTimeout(this.timer), t || e === C.c.All || e === C.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, x) : i && i > k && (this.timer = window.setTimeout(this.badgeFavicon, O))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(P.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(N), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(f), this.unbadgeFavicon(), this.hidePill()
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
					return l.a.createElement("div", {
						className: j.a.pillContainer
					}, l.a.createElement(d.a, {
						className: Object(a.a)(j.a.pill, this.state.isPillHidden && j.a.pillHidden)
					}, l.a.createElement(v, {
						onClick: this.handlePillClick,
						onClickClose: this.hidePill
					}, s.fbt._("New Posts", null, {
						hk: "355pK6"
					}))))
				}
			}
			e.default = F
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.35ae6dd1019acae289d4.js.map