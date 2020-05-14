// https://www.redditstatic.com/desktop2x/ChangeUsernameTooltip.d06b70d2fddfcea246c1.js
// Retrieved at 5/14/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChangeUsernameTooltip"], {
		"./src/reddit/components/ChangeUsernameTooltip/index.m.less": function(e, n, s) {
			e.exports = {
				closeIcon: "_2-ldLIsQN5O_ifhbTuAc_g",
				closeWrapper: "_2rTvRcuKpM60TWFtmch-9c",
				container: "_14TDRVDZJj2YqAP-N0a4kj",
				topLine: "k_Oo03XySnmf-UMMOirS-",
				title: "_3pcdqdRWruf7eepiLXw4CB",
				username: "_1G1CITYgxpC6TIO7TGwhG3",
				usernamePrefix: "_1Tq29ay6ogsCeK60Ouhv_q",
				buttonWrapper: "lvHFLjGg76LoUfNXv4eik",
				commonBtn: "_2c8uIH6hCLT9iEVO5N8-9o",
				primaryBtn: "qUwq87ZWjStAxoxwoPOJA",
				secondaryBtn: "MnLwM5PL1ET2BmK5lLIvR"
			}
		},
		"./src/reddit/components/ChangeUsernameTooltip/index.tsx": function(e, n, s) {
			"use strict";
			s.r(n);
			var t = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				r = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/selectors/telemetry.ts");
			const m = "tooltip",
				u = e => n => Object.assign({}, Object(d.defaults)(n), {
					action: "view",
					noun: "username_change",
					source: e
				}),
				h = e => n => Object.assign({}, Object(d.defaults)(n), {
					action: "close",
					noun: "username_change",
					source: e
				}),
				_ = (e, n) => s => Object.assign({}, Object(d.defaults)(s), {
					action: "click",
					noun: "username_change_".concat(n),
					source: e
				});
			var O = s("./src/reddit/icons/svgs/Close/index.tsx"),
				E = s("./src/reddit/components/ChangeUsernameTooltip/index.m.less"),
				C = s.n(E);
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.onChangeUsernameModalOpen = () => {
						this.props.sendEvent(_(m, "change")), this.props.openChangeUsernameModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(h(m)), this.props.closeTooltip()
					}, this.onKeepUsernameModalOpen = () => {
						this.props.sendEvent(_(m, "keep")), this.props.openKeepUsernameModal(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					g.shouldSendViewEvent && (g.shouldSendViewEvent = !1, this.props.sendEvent(u(m)))
				}
				render() {
					return o.a.createElement("div", {
						className: C.a.container
					}, o.a.createElement("div", {
						className: C.a.topLine
					}), o.a.createElement("button", {
						className: C.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, o.a.createElement(O.a, {
						className: C.a.closeIcon
					})), o.a.createElement("h5", {
						className: C.a.title
					}, t.fbt._("Do you want to change or keep this username?", null, {
						hk: "4vHGxH"
					})), o.a.createElement("p", {
						className: C.a.username
					}, o.a.createElement("span", {
						className: C.a.usernamePrefix
					}, "u/"), this.props.username), o.a.createElement("div", {
						className: C.a.buttonWrapper
					}, o.a.createElement(p.f, {
						className: Object(c.a)(C.a.commonBtn, C.a.primaryBtn),
						onClick: this.onChangeUsernameModalOpen
					}, t.fbt._("Change Username", null, {
						hk: "1nRhNE"
					})), o.a.createElement(p.n, {
						className: Object(c.a)(C.a.commonBtn, C.a.secondaryBtn),
						onClick: this.onKeepUsernameModalOpen
					}, t.fbt._("Keep Username", null, {
						hk: "GUBlZ"
					}))))
				}
			}
			g.shouldSendViewEvent = !0;
			const v = Object(i.a)(g, [r.a.Click, r.a.Keydown, r.a.Resize]);
			n.default = Object(l.c)(v)
		}
	}
]);
//# sourceMappingURL=ChangeUsernameTooltip.d06b70d2fddfcea246c1.js.map