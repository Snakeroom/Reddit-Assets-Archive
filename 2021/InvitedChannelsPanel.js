// https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.1ca5af194dd1c9895197.js
// Retrieved at 12/1/2021, 5:30:06 PM by Reddit Dataminer v1.0.0
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
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/sidebar.ts"),
				h = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatList/index.tsx"),
				b = n("./src/chat/components/Scroller/index.tsx"),
				_ = n("./src/chat/components/SkeletonPlaceholder/SkeletonPlaceholder.tsx"),
				x = n("./src/chat/controls/ChannelsFilter/index.tsx"),
				u = n("./src/chat/icons/svgs/ArrowLeft/index.tsx"),
				p = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				j = n("./src/chat/selectors/channels.ts"),
				O = n("./src/chat/selectors/experiments.ts"),
				E = n("./src/chat/components/Sidebar/InvitedChannelsPanel/index.m.less"),
				v = n.n(E);
			t.default = () => {
				const e = Object(l.d)();
				Object(o.useEffect)(() => {
					e(Object(h.Z)())
				}, [e]);
				const t = Object(l.e)(j.d),
					n = Object(l.e)(O.e),
					s = Object(l.e)(j.F),
					E = Object(l.e)(j.b);
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: v.a.Header,
					onClick: () => {
						e(Object(i.e)(p.a.CHANNELS))
					}
				}, r.a.createElement(u.a, {
					className: v.a.BackIcon,
					isFilled: !0
				}), c.fbt._("Invites", null, {
					hk: "2zUosI"
				})), r.a.createElement(b.b, {
					loadMoreRows: () => {
						e(Object(d.D)())
					},
					isLoadMoreRowsComplete: () => !s || !!E
				}, r.a.createElement("div", {
					className: v.a.Body
				}, n && r.a.createElement(x.a, null), r.a.createElement(m.a, {
					channels: a()(t)
				}), E && r.a.createElement(_.d, null))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.1ca5af194dd1c9895197.js.map