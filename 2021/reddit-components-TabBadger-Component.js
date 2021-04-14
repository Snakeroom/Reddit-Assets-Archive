// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.a19ba4049278b922fb56.js
// Retrieved at 4/14/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TabBadger-Component"], {
		"./src/reddit/components/Pill/index.m.less": function(e, i, t) {
			e.exports = {
				pill: "C5WTyRErVZSYP9OMmYtVb",
				pillHidden: "_2KYStU8hK1Y9Pz3XXd9zFo",
				closeButton: "_2t7CUoLNlBt20iCMaqgpTi",
				primaryButton: "_1NwneinmPwP34LMpJkmKhk",
				active: "_1MqiRuKo_uoDt-k-iQ2gij",
				redditStyle: "_32JLd_VLz6vZi8afTSQx48",
				DangerButtonColors: "_2Qkb9A7wfBBVxvmMCmKjf9",
				dangerButtonColors: "_2Qkb9A7wfBBVxvmMCmKjf9",
				GoldButtonColors: "_2ORI_1yE4z3MsdlL8fUErr",
				goldButtonColors: "_2ORI_1yE4z3MsdlL8fUErr",
				PremiumButtonColors: "_1OzvE1NNJH7XjKpjHa5IWl",
				premiumButtonColors: "_1OzvE1NNJH7XjKpjHa5IWl",
				Icon: "_3csCSYhumzzvURPTH9KX9y",
				icon: "_3csCSYhumzzvURPTH9KX9y",
				isLeft: "_27c5zYCh_rdFccFVuMq8O4",
				isRight: "W5ik6zISdchkW_G6FdF8Y",
				closeIcon: "R9MWxs6smL_jBLt-j9hjB"
			}
		},
		"./src/reddit/components/TabBadger/Component.tsx": function(e, i, t) {
			"use strict";
			t.r(i);
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				l = t.n(n),
				a = t("./src/lib/constants/index.ts"),
				o = t("./src/lib/classNames/index.ts"),
				d = t("./src/reddit/icons/svgs/Close/index.tsx"),
				c = t("./src/reddit/components/Pill/index.m.less"),
				r = t.n(c);
			var h = e => l.a.createElement("div", {
				className: Object(o.a)(r.a.pill, e.className)
			}, l.a.createElement("button", {
				className: r.a.primaryButton,
				onClick: e.handleClick
			}, e.children), l.a.createElement("button", {
				className: r.a.closeButton,
				onClick: e.handleCloseClick
			}, l.a.createElement(d.a, {
				className: r.a.closeIcon
			})));
			var m = ({
					className: e,
					children: i,
					handleClick: t,
					handleCloseClick: s,
					isHidden: n
				}) => {
					const a = n && r.a.pillHidden;
					return l.a.createElement(h, {
						className: Object(o.a)(a, e),
						handleClick: t,
						handleCloseClick: s
					}, i)
				},
				p = t("./src/reddit/constants/page.ts"),
				u = t("./src/reddit/helpers/tabBadging/index.ts");
			const C = "refresh_page_pill",
				_ = e => ({
					source: "popup",
					action: "view",
					noun: C
				}),
				b = e => ({
					source: "popup",
					action: "click",
					noun: C
				});
			var g = t("./src/reddit/components/TabBadger/index.m.less"),
				B = t.n(g);
			const v = 12 * a.J,
				P = 2 * a.J,
				k = 5e4;
			class w extends n.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = e => e.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(u.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: e,
							subredditName: i,
							subscriberCount: t
						} = this.props;
						window.clearTimeout(this.timer), e || i === p.c.All || i === p.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, P) : t && t > k && (this.timer = window.setTimeout(this.badgeFavicon, v))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(u.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(_), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(b), this.unbadgeFavicon(), this.hidePill()
					}
				}
				componentDidMount() {
					this.setTimer()
				}
				componentDidUpdate(e, i) {
					this.unreadMessageBadgingUpdate(e) || this.props.previousPageIsOverlay || (this.state.isPillHidden ? (this.unbadgeFavicon(), this.setTimer()) : i.isPillHidden || (this.unbadgeFavicon(), this.hidePill()))
				}
				componentWillUnmount() {
					this.unbadgeFavicon(), window.clearTimeout(this.timer)
				}
				render() {
					return l.a.createElement("div", {
						className: B.a.pillContainer
					}, l.a.createElement(m, {
						className: B.a.pillTop,
						handleClick: this.handlePillClick,
						handleCloseClick: this.hidePill,
						isHidden: this.state.isPillHidden
					}, s.fbt._("New Posts", null, {
						hk: "355pK6"
					})))
				}
			}
			i.default = w
		},
		"./src/reddit/components/TabBadger/index.m.less": function(e, i, t) {
			e.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pillTop: "_2G32Ut0BL64CVk7JruZpIz"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.a19ba4049278b922fb56.js.map