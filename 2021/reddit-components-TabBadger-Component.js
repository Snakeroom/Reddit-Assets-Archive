// https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.e5a1c4edf677d44a171e.js
// Retrieved at 3/10/2021, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-TabBadger-Component"], {
		"./src/reddit/components/Pill/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/TabBadger/Component.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./node_modules/react/index.js"),
				a = i.n(n),
				o = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/icons/svgs/Close/index.tsx"),
				d = i("./src/reddit/components/Pill/index.m.less"),
				c = i.n(d);
			var h = e => a.a.createElement("div", {
				className: Object(l.a)(c.a.pill, e.className)
			}, a.a.createElement("button", {
				className: c.a.primaryButton,
				onClick: e.handleClick
			}, e.children), a.a.createElement("button", {
				className: c.a.closeButton,
				onClick: e.handleCloseClick
			}, a.a.createElement(r.a, {
				className: c.a.closeIcon
			})));
			var m = ({
					className: e,
					children: t,
					handleClick: i,
					handleCloseClick: s,
					isHidden: n
				}) => {
					const o = n && c.a.pillHidden;
					return a.a.createElement(h, {
						className: Object(l.a)(o, e),
						handleClick: i,
						handleCloseClick: s
					}, t)
				},
				u = i("./src/reddit/constants/page.ts"),
				p = i("./src/reddit/helpers/tabBadging/index.ts");
			const g = "refresh_page_pill",
				v = e => ({
					source: "popup",
					action: "view",
					noun: g
				}),
				b = e => ({
					source: "popup",
					action: "click",
					noun: g
				});
			var C = i("./src/reddit/components/TabBadger/index.m.less"),
				_ = i.n(C);
			const f = 12 * o.J,
				B = 2 * o.J,
				P = 5e4;
			class k extends n.Component {
				constructor() {
					super(...arguments), this.timer = 0, this.state = {
						isPillHidden: !0
					}, this.unreadMessageBadgingUpdate = e => e.tabBadged !== this.props.tabBadged, this.badgeFavicon = () => {
						Object(p.b)(), this.activatePill(), window.clearTimeout(this.timer)
					}, this.setTimer = () => {
						const {
							shortTimer: e,
							subredditName: t,
							subscriberCount: i
						} = this.props;
						window.clearTimeout(this.timer), e || t === u.c.All || t === u.c.Popular ? this.timer = window.setTimeout(this.badgeFavicon, B) : i && i > P && (this.timer = window.setTimeout(this.badgeFavicon, f))
					}, this.unbadgeFavicon = () => !this.props.tabBadged && Object(p.b)(!1), this.hidePill = () => this.setState({
						isPillHidden: !0
					}), this.activatePill = () => {
						this.props.sendEvent(v), this.setState({
							isPillHidden: !1
						})
					}, this.handlePillClick = () => {
						this.props.handlePillClick(), this.props.sendEvent(b), this.unbadgeFavicon(), this.hidePill()
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
					return a.a.createElement("div", {
						className: _.a.pillContainer
					}, a.a.createElement(m, {
						className: _.a.pillTop,
						handleClick: this.handlePillClick,
						handleCloseClick: this.hidePill,
						isHidden: this.state.isPillHidden
					}, s.fbt._("New Posts", null, {
						hk: "355pK6"
					})))
				}
			}
			t.default = k
		},
		"./src/reddit/components/TabBadger/index.m.less": function(e, t, i) {
			e.exports = {
				pillContainer: "_2w46GjyOK9f8VUpIbu6q1B",
				pillTop: "_2G32Ut0BL64CVk7JruZpIz"
			}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return r
			})), i.d(t, "b", (function() {
				return c
			})), i.d(t, "c", (function() {
				return h
			}));
			var s = i("./src/config.ts");
			const n = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				a = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				l = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				r = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				c = (e = !0) => {
					const t = d(e ? o : n),
						i = d(e ? l : a);
					t && i && (t.href = e ? n : o, i.href = e ? a : l)
				},
				h = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: r,
						badgeCounts: e
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-TabBadger-Component.e5a1c4edf677d44a171e.js.map