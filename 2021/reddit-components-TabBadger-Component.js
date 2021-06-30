// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.5514323ff2704bad8159.js
// Retrieved at 6/30/2021, 3:10:19 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/components/TabBadger/Component.tsx": function(t, e, i) {
			"use strict";
			i.r(e), i.d(e, "SHORT_TIMER", (function() {
				return E
			}));
			var n = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./node_modules/react/index.js"),
				o = i.n(s),
				l = i("./src/lib/classNames/index.ts"),
				a = i("./src/lib/constants/index.ts"),
				r = i("./src/reddit/components/Pill/index.m.less"),
				d = i.n(r);
			const c = t => o.a.createElement("div", {
				className: Object(l.a)(d.a.pillContainer, t.className)
			}, t.children);
			var u, m = i("./src/reddit/icons/svgs/Close/index.tsx"),
				p = i("./src/reddit/components/Pill/PillButton/index.m.less"),
				h = i.n(p);
			! function(t) {
				t.BUTTON = "BUTTON", t.NEUTRAL_DAY = "NEUTRAL_DAY"
			}(u || (u = {}));
			const _ = {
					[u.BUTTON]: void 0,
					[u.NEUTRAL_DAY]: h.a.pillButtonNeutralDay
				},
				B = (t, e) => {
					if (e !== u.BUTTON) return t ? h.a.active : h.a.inactive
				},
				b = ({
					active: t = !0,
					children: e,
					className: i,
					disabled: n = !1,
					onClick: s,
					variant: a
				}) => o.a.createElement("button", {
					className: Object(l.a)(h.a.primaryButton, _[a], B(t, a), i),
					disabled: n,
					onClick: s
				}, e);
			var g = i("./src/reddit/components/Pill/PillButtonGroup/index.m.less"),
				C = i.n(g);
			const T = ({
					onClick: t
				}) => o.a.createElement("button", {
					className: C.a.closeButton,
					onClick: t
				}, o.a.createElement(m.a, {
					className: C.a.closeIcon
				})),
				v = t => o.a.createElement(o.a.Fragment, null, o.a.createElement(b, {
					className: Object(l.a)(C.a.primaryButtonWithDivider),
					onClick: t.onClick,
					variant: u.BUTTON
				}, t.children), o.a.createElement(T, {
					onClick: t.onClickClose
				}));
			var P = i("./src/reddit/constants/page.ts"),
				N = i("./src/reddit/helpers/tabBadging/index.ts");
			const w = "refresh_page_pill",
				j = t => ({
					source: "popup",
					action: "view",
					noun: w
				}),
				O = t => ({
					source: "popup",
					action: "click",
					noun: w
				});
			var f = i("./src/reddit/components/TabBadger/index.m.less"),
				k = i.n(f);
			const F = 12 * a.O,
				E = 2 * a.O,
				A = 5e4;
			class D extends s.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = t => t.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(N.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: t,
							subredditName: e,
							subscriberCount: i
						} = this.props;
						window.clearTimeout(this.timer), t || e === P.c.All || e === P.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, E) : i && i > A && (this.timer = window.setTimeout(this.badgeFavicon, F))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(N.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(j), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(O), this.unbadgeFavicon(), this.hidePill()
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
						className: k.a.pillContainer
					}, o.a.createElement(c, {
						className: Object(l.a)(k.a.pill, this.state.isPillHidden && k.a.pillHidden)
					}, o.a.createElement(v, {
						onClick: this.handlePillClick,
						onClickClose: this.hidePill
					}, n.fbt._("New Posts", null, {
						hk: "355pK6"
					}))))
				}
			}
			e.default = D
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.5514323ff2704bad8159.js.map