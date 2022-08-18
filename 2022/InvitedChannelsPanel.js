// https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.e47eb1d665e92bd02148.js
// Retrieved at 8/18/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				l = n.n(o),
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
				Object(o.useEffect)(() => {
					e(Object(h.eb)())
				}, [e]);
				const t = Object(r.e)(j.d),
					n = Object(r.e)(E.f),
					s = Object(r.e)(j.H),
					O = Object(r.e)(j.b);
				return l.a.createElement(l.a.Fragment, null, l.a.createElement("button", {
					className: v.a.Header,
					onClick: () => {
						e(Object(i.e)(p.a.CHANNELS))
					}
				}, l.a.createElement(u.a, {
					className: v.a.BackIcon,
					isFilled: !0
				}), c.fbt._("Invites", null, {
					hk: "2zUosI"
				})), l.a.createElement(b.a, {
					loadMoreRows: () => {
						e(Object(d.E)())
					},
					isLoadMoreRowsComplete: () => !s || !!O
				}, l.a.createElement("div", {
					className: v.a.Body
				}, n && l.a.createElement(x.a, null), l.a.createElement(m.a, {
					channels: a()(t)
				}), O && l.a.createElement(_.d, null))))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InvitedChannelsPanel.e47eb1d665e92bd02148.js.map