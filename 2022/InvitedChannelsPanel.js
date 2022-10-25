// https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.93d38f9d89bee7651e29.js
// Retrieved at 10/25/2022, 3:00:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InvitedChannelsPanel"], {
		"./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less": function(e, t, n) {
			e.exports = {
				BackIcon: "_1OJ2pt-ycWAx9wyn0hB9Gy",
				backIcon: "_1OJ2pt-ycWAx9wyn0hB9Gy",
				Header: "_3CPjAXvJM2X2dpGmve8WGS",
				header: "_3CPjAXvJM2X2dpGmve8WGS",
				Body: "icybbcUny1_io4kpNrmVw",
				body: "icybbcUny1_io4kpNrmVw"
			}
		},
		"./src/chat/components/Sidebar/InvitedChannelsPanel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var c = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/values.js"),
				a = n.n(s),
				l = n("./node_modules/react/index.js"),
				o = n.n(l),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/sidebar.ts"),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatList/index.tsx"),
				b = n("./src/chat/components/Scroller/index.tsx"),
				_ = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				x = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				u = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				p = n("./src/chat/models/Sidebar/index.ts"),
				j = n("./src/chat/selectors/channels.ts"),
				E = n("./src/chat/selectors/experiments.ts"),
				O = n("./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less"),
				v = n.n(O);
			t.default = () => {
				const e = Object(r.d)();
				Object(l.useEffect)(() => {
					e(Object(h.lb)())
				}, [e]);
				const t = Object(r.e)(j.d),
					n = Object(r.e)(E.f),
					s = Object(r.e)(j.I),
					O = Object(r.e)(j.b);
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: v.a.Header,
					onClick: () => {
						e(Object(i.e)(p.a.CHANNELS))
					}
				}, o.a.createElement(u.a, {
					className: v.a.BackIcon,
					isFilled: !0
				}), c.fbt._("Invites", null, {
					hk: "2zUosI"
				})), o.a.createElement(b.a, {
					loadMoreRows: () => {
						e(Object(d.E)())
					},
					isLoadMoreRowsComplete: () => !s || !!O
				}, o.a.createElement("div", {
					className: v.a.Body
				}, n && o.a.createElement(x.a, null), o.a.createElement(m.a, {
					channels: a()(t)
				}), O && o.a.createElement(_.d, null))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.93d38f9d89bee7651e29.js.map