// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.b1aa497fb89c4701cf14.js
// Retrieved at 7/7/2020, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TabBadger-Component"], {
		"./src/reddit/components/Pill/index.m.less": function(e, i, t) {
			e.exports = {
				pill: "C5WTyRErVZSYP9OMmYtVb",
				pillHidden: "_2KYStU8hK1Y9Pz3XXd9zFo",
				primaryButton: "_1NwneinmPwP34LMpJkmKhk",
				closeButton: "_2t7CUoLNlBt20iCMaqgpTi",
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
				d = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/Close/index.tsx"),
				c = t("./src/reddit/components/Pill/index.m.less"),
				r = t.n(c);
			var h = e => l.a.createElement("div", {
				className: Object(d.a)(r.a.pill, e.className)
			}, l.a.createElement("button", {
				className: r.a.primaryButton,
				onClick: e.handleClick
			}, e.children), l.a.createElement("button", {
				className: r.a.closeButton,
				onClick: e.handleCloseClick
			}, l.a.createElement(o.a, {
				className: r.a.closeIcon
			})));
			var p = e => {
					let {
						className: i,
						children: t,
						handleClick: s,
						handleCloseClick: n,
						isHidden: a
					} = e;
					const o = a && r.a.pillHidden;
					return l.a.createElement(h, {
						className: Object(d.a)(o, i),
						handleClick: s,
						handleCloseClick: n
					}, t)
				},
				m = t("./src/reddit/constants/page.ts"),
				u = t("./src/reddit/helpers/tabBadging/index.ts");
			const b = "refresh_page_pill",
				C = e => ({
					source: "popup",
					action: "view",
					noun: b
				}),
				g = e => ({
					source: "popup",
					action: "click",
					noun: b
				});
			var P = t("./src/reddit/components/TabBadger/index.m.less"),
				_ = t.n(P);
			const v = 12 * a.J,
				B = 2 * a.J,
				w = 5e4;
			class k extends n.Component {
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
						window.clearTimeout(this.timer), e || i === m.c.All || i === m.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, B) : t && t > w && (this.timer = window.setTimeout(this.badgeFavicon, v))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(u.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(C), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(g), this.unbadgeFavicon(), this.hidePill()
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
						className: _.a.pillContainer
					}, l.a.createElement(p, {
						className: _.a.pillTop,
						handleClick: this.handlePillClick,
						handleCloseClick: this.hidePill,
						isHidden: this.state.isPillHidden
					}, s.fbt._("New Posts", null, {
						hk: "355pK6"
					})))
				}
			}
			i.default = k
		},
		"./src/reddit/components/TabBadger/index.m.less": function(e, i, t) {
			e.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pillTop: "_2G32Ut0BL64CVk7JruZpIz"
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-TabBadger-Component.b1aa497fb89c4701cf14.js.map