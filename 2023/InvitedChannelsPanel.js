// https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.f57fcd13a7ec141ab38f.js
// Retrieved at 2/7/2023, 5:50:05 PM by Reddit Dataminer v1.0.0
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
			var c = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/lodash/values.js"),
				s = t.n(a),
				o = t("./node_modules/react/index.js"),
				l = t.n(o),
				r = t("./node_modules/react-redux/es/index.js"),
				d = t("./src/chat/actions/channel.ts"),
				i = t("./src/chat/actions/sidebar.ts"),
				h = t("./src/chat/actions/tracking.ts"),
				m = t("./src/chat/components/ChatList/index.tsx"),
				b = t("./src/chat/components/Scroller/index.tsx"),
				_ = t("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				x = t("./src/chat/controls/ChannelsFilter/index.tsx"),
				u = t("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				j = t("./src/chat/models/Sidebar/index.ts"),
				p = t("./src/chat/selectors/channels.ts"),
				E = t("./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less"),
				O = t.n(E);
			n.default = () => {
				const e = Object(r.d)();
				Object(o.useEffect)(() => {
					e(Object(h.jb)())
				}, [e]);
				const n = Object(r.e)(p.d),
					t = Object(r.e)(p.I),
					a = Object(r.e)(p.b);
				return l.a.createElement(l.a.Fragment, null, l.a.createElement("button", {
					className: O.a.Header,
					onClick: () => {
						e(Object(i.e)(j.a.CHANNELS))
					}
				}, l.a.createElement(u.a, {
					className: O.a.BackIcon,
					isFilled: !0
				}), c.fbt._("Invites", null, {
					hk: "2zUosI"
				})), l.a.createElement(b.a, {
					loadMoreRows: () => {
						e(Object(d.E)())
					},
					isLoadMoreRowsComplete: () => !t || !!a
				}, l.a.createElement("div", {
					className: O.a.Body
				}, l.a.createElement(x.a, null), l.a.createElement(m.a, {
					channels: s()(n)
				}), a && l.a.createElement(_.d, null))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.f57fcd13a7ec141ab38f.js.map