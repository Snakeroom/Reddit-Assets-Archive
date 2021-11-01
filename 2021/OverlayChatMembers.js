// https://www.redditstatic.com/desktop2x/OverlayChatMembers.b97349e02fd214b659b6.js
// Retrieved at 11/1/2021, 4:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayChatMembers"], {
		"./src/chat/components/OverlayChatMembers/index.m.less": function(e, t, r) {
			e.exports = {
				Scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				scroller: "_2IqNvO7mqMEE5ZWWtZ2wz",
				LoadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w",
				loadingIndicator: "_2AvW8S-YJtH3dTzD1erN9w"
			}
		},
		"./src/chat/components/OverlayChatMembers/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				c = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/lessComponent.tsx"),
				l = r("./src/chat/actions/members.ts"),
				m = r("./src/chat/components/ChatMemberList/index.tsx"),
				b = r("./src/chat/components/Scroller/index.tsx"),
				d = r("./src/chat/constants/channels.ts"),
				h = r("./src/chat/controls/Overlay/index.tsx"),
				i = r("./src/chat/controls/OverlayControlBar/index.tsx"),
				u = r("./src/chat/controls/OverlayHeader/index.tsx"),
				_ = r("./src/chat/helpers/chatSelector.ts"),
				x = r("./src/chat/selectors/channels.ts"),
				O = r("./src/chat/selectors/members.ts"),
				M = r("./src/chat/components/OverlayChatMembers/index.m.less"),
				p = r.n(M);
			const C = o.a.wrapped(b.b, "Scroller", p.a),
				f = o.a.div("LoadingIndicator", p.a),
				E = Object(_.a)({
					channelType: e => Object(x.B)(e, "type"),
					currentChannel: x.m,
					memberCount: e => Object(x.B)(e, "memberCount"),
					members: e => Object(O.f)(e),
					fetchingMembers: O.a,
					hasMoreMembers: O.d
				}),
				v = Object(c.b)(E, e => ({
					fetchChannelMembers: t => e(Object(l.e)({
						loadMore: t
					}))
				}));
			t.default = v((function(e) {
				const {
					channelId: t,
					currentChannel: r,
					memberCount: s,
					members: c,
					fetchChannelMembers: o,
					fetchingMembers: l,
					hasMoreMembers: b
				} = e;
				if (r) {
					const {
						channelState: e
					} = r, _ = e === d.b.INVITED, x = e === d.b.JOINED, O = () => {
						!l && b && o({
							loadMore: !0
						})
					}, M = () => !!l;
					return l || c.length || o(), a.a.createElement(h.a, {
						form: !0,
						innerContent: !0
					}, a.a.createElement(u.a, {
						title: n.fbt._({
							"*": "{number of members} group members",
							_1: "1 group member"
						}, [n.fbt._plural(s, "number of members")], {
							hk: "4phXDa"
						})
					}), a.a.createElement(C, {
						loadMoreRows: O,
						isLoadMoreRowsComplete: M,
						threshold: 0
					}, a.a.createElement(m.a, {
						channelId: t,
						members: c,
						modIndicator: !0,
						useNSFWIcons: _ || x
					}), l && a.a.createElement(f, {
						role: "progressbar"
					}, n.fbt._("Loading members...", null, {
						hk: "2sCDrM"
					}))), a.a.createElement(i.a, {
						secondaryButtonOnly: !0,
						secondaryButtonText: n.fbt._("Done", null, {
							hk: "2xerWP"
						})
					}))
				}
				return null
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChatMembers.b97349e02fd214b659b6.js.map