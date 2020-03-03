// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.0be15323ad06ec5d9a92.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TabBadger-Component"], {
		"./src/reddit/components/Pill/index.m.less": function(e, t, i) {
			e.exports = {
				pill: "C5WTyRErVZSYP9OMmYtVb",
				pillHidden: "_2KYStU8hK1Y9Pz3XXd9zFo",
				primaryButton: "_1NwneinmPwP34LMpJkmKhk",
				closeButton: "_2t7CUoLNlBt20iCMaqgpTi",
				closeIcon: "R9MWxs6smL_jBLt-j9hjB"
			}
		},
		"./src/reddit/components/TabBadger/Component.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				a = i.n(n),
				l = i("./src/lib/classNames/index.ts"),
				o = i("./src/lib/constants/index.ts"),
				d = i("./src/reddit/icons/svgs/Close/index.tsx"),
				c = i("./src/reddit/components/Pill/index.m.less"),
				r = i.n(c);
			var p = e => a.a.createElement("div", {
				className: Object(l.a)(r.a.pill, e.className)
			}, a.a.createElement("button", {
				className: r.a.primaryButton,
				onClick: e.handleClick
			}, e.children), a.a.createElement("button", {
				className: r.a.closeButton,
				onClick: e.handleCloseClick
			}, a.a.createElement(d.a, {
				className: r.a.closeIcon
			})));
			var h = e => {
					let {
						className: t,
						children: i,
						handleClick: s,
						handleCloseClick: n,
						isHidden: o
					} = e;
					const d = o && r.a.pillHidden;
					return a.a.createElement(p, {
						className: Object(l.a)(d, t),
						handleClick: s,
						handleCloseClick: n
					}, i)
				},
				m = i("./src/reddit/constants/page.ts"),
				u = i("./src/reddit/helpers/tabBadging/index.ts");
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
			var v = i("./src/reddit/selectors/experiments/badging.ts"),
				P = i("./src/reddit/components/TabBadger/index.m.less"),
				_ = i.n(P);
			const k = 12 * o.J,
				B = 2 * o.J,
				T = 5e4;
			class w extends n.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = e => e.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(u.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: e,
							subredditName: t,
							subscriberCount: i
						} = this.props;
						window.clearTimeout(this.timer), e || t === m.c.All || t === m.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, B) : i && i > T && (this.timer = window.setTimeout(this.badgeFavicon, k))
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
				componentDidUpdate(e, t) {
					this.unreadMessageBadgingUpdate(e) || this.props.previousPageIsOverlay || (this.state.isPillHidden ? (this.unbadgeFavicon(), this.setTimer()) : t.isPillHidden || (this.unbadgeFavicon(), this.hidePill()))
				}
				componentWillUnmount() {
					this.unbadgeFavicon(), window.clearTimeout(this.timer)
				}
				render() {
					const e = Object(v.b)(this.props.variant),
						t = Object(v.c)(this.props.variant),
						i = Object(l.a)(_.a.pillContainer, {
							[_.a.pillContainerStickyTop]: t,
							[_.a.pillContainerStickyBottom]: e
						}),
						n = t && _.a.pillTop;
					return a.a.createElement("div", {
						className: i
					}, a.a.createElement(h, {
						className: n,
						handleClick: this.handlePillClick,
						handleCloseClick: this.hidePill,
						isHidden: this.state.isPillHidden
					}, s.fbt._("New Posts", null, {
						hk: "355pK6"
					})))
				}
			}
			t.default = w
		},
		"./src/reddit/components/TabBadger/index.m.less": function(e, t, i) {
			e.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pillContainerStickyBottom: "_7kb4OXAvuR9TsrRqbMJfc",
				pillContainerStickyTop: "_1qh97acYzcSsqej9apaCGC",
				pillTop: "_2G32Ut0BL64CVk7JruZpIz"
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-TabBadger-Component.0be15323ad06ec5d9a92.js.map