// https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.9ddc0680db8c46acfa2c.js
// Retrieved at 10/26/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InvitedChannelsPanel"], {
		"./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less": function(e, n, t) {
			e.exports = {
				BackIcon: "_1OJ2pt-ycWAx9wyn0hB9Gy",
				backIcon: "_1OJ2pt-ycWAx9wyn0hB9Gy",
				Header: "_3CPjAXvJM2X2dpGmve8WGS",
				header: "_3CPjAXvJM2X2dpGmve8WGS",
				Body: "icybbcUny1_io4kpNrmVw",
				body: "icybbcUny1_io4kpNrmVw"
			}
		},
		"./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				c = t("./node_modules/lodash/values.js"),
				a = t.n(c),
				r = t("./node_modules/react/index.js"),
				l = t.n(r),
				d = t("./node_modules/react-redux/es/index.js"),
				o = t("./src/chat/actions/sidebar.ts"),
				i = t("./src/chat/components/ChatList/index.tsx"),
				h = t("./src/chat/components/Scroller/index.tsx"),
				m = t("./src/chat/controls/ChannelsFilter/index.tsx"),
				b = t("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				_ = t("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				u = t("./src/chat/selectors/channels.ts"),
				x = t("./src/chat/selectors/experiments.ts"),
				p = t("./src/chat/actions/tracking.ts"),
				v = t("./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less"),
				C = t.n(v);
			n.default = () => {
				const e = Object(d.d)();
				Object(r.useEffect)(() => {
					e(Object(p.Z)())
				}, [e]);
				const n = Object(d.e)(u.d),
					t = Object(d.e)(x.d),
					c = Object(r.useCallback)(() => {
						e(Object(o.e)(_.a.CHANNELS))
					}, [e]);
				return l.a.createElement(l.a.Fragment, null, l.a.createElement("button", {
					className: C.a.Header,
					onClick: c
				}, l.a.createElement(b.a, {
					className: C.a.BackIcon,
					isFilled: !0
				}), s.fbt._("Invites", null, {
					hk: "2zUosI"
				})), l.a.createElement(h.b, null, l.a.createElement("div", {
					className: C.a.Body
				}, t && l.a.createElement(m.a, {
					isForInvitedChannels: !0
				}), l.a.createElement(i.a, {
					channels: a()(n)
				}))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.9ddc0680db8c46acfa2c.js.map