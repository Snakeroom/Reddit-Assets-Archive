// https://www.redditstatic.com/desktop2x/OverlayGroupAbout.b8c9e2d8d90a082d28a5.js
// Retrieved at 3/30/2023, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayGroupAbout"], {
		"./src/chat/components/OverlayGroupAbout/index.m.less": function(e, t, n) {
			e.exports = {
				Scroller: "_1jmaOi6isUvY3yYdTglk48",
				scroller: "_1jmaOi6isUvY3yYdTglk48",
				LoadingIndicator: "_1P_Rb-YbA1jCFLxxCix011",
				loadingIndicator: "_1P_Rb-YbA1jCFLxxCix011",
				ChannelNameInput: "_2TEpVPtcJyBcwAOCmIkoC_",
				channelNameInput: "_2TEpVPtcJyBcwAOCmIkoC_",
				ChannelNameLengthCounter: "_1BWgjSiPNRk7dRseN0sM2w",
				channelNameLengthCounter: "_1BWgjSiPNRk7dRseN0sM2w",
				warning: "_1DE5rY1y73DeUTNUS3kpbw"
			}
		},
		"./src/chat/components/OverlayGroupAbout/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/react/index.js"),
				s = n.n(c),
				o = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/chat/actions/channel/dropdown.ts"),
				l = n("./src/chat/actions/members.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				m = n("./src/chat/components/ChatMemberList/index.tsx"),
				u = n("./src/chat/components/OverlayNav/index.tsx"),
				d = n("./src/chat/components/Scroller/index.tsx"),
				h = n("./src/chat/constants/channels.ts"),
				x = n("./src/chat/controls/ChannelNameInput/index.tsx"),
				b = n("./src/chat/controls/Overlay/index.tsx"),
				_ = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				S = n("./src/chat/controls/Settings/SectionItem/index.tsx"),
				p = n("./src/chat/controls/Settings/SectionTitle/index.tsx"),
				C = n("./src/chat/helpers/chatSelector.ts"),
				I = n("./src/chat/icons/svgs/InviteMember/index.tsx"),
				g = n("./src/chat/selectors/channels.ts"),
				N = n("./src/chat/selectors/members.ts"),
				E = n("./src/chat/components/OverlayGroupAbout/index.m.less"),
				O = n.n(E),
				T = n("./src/lib/classNames/index.ts");
			const v = Object(C.a)({
					channelType: e => Object(g.E)(e, "type"),
					currentChannel: g.n,
					memberCount: e => Object(g.E)(e, "memberCount"),
					members: e => Object(N.g)(e),
					fetchingMembers: N.a,
					hasMoreMembers: N.e
				}),
				y = Object(o.b)(v, e => ({
					fetchChannelMembers: t => e(Object(l.e)({
						loadMore: t
					}))
				}));
			t.default = y((function(e) {
				const {
					channelId: t,
					currentChannel: n,
					memberCount: l,
					members: C,
					fetchChannelMembers: g,
					fetchingMembers: N,
					hasMoreMembers: E
				} = e, v = Object(o.d)(), [y, f] = Object(c.useState)(null == n ? void 0 : n.name);
				if (n) {
					const {
						channelState: c
					} = n, o = c === h.b.INVITED, A = c === h.b.JOINED, B = () => {
						!N && E && g({
							loadMore: !0
						})
					}, j = () => !!N;
					N || C.length || g();
					const L = e => {
							f(e)
						},
						k = y ? h.g - y.length : h.g,
						w = () => {
							f(n.name)
						},
						M = () => {
							y && (v(Object(r.h)(y)), v(Object(i.X)()))
						},
						J = () => {
							v(Object(r.c)())
						},
						D = y !== n.name;
					return s.a.createElement(b.a, {
						innerContent: !0,
						isSettings: !0
					}, s.a.createElement(u.a, {
						showMenu: !0,
						channelId: e.channelId,
						title: a.fbt._("About", null, {
							hk: "3z2BLx"
						})
					}), s.a.createElement("div", {
						className: O.a.Content
					}, s.a.createElement(p.a, {
						text: a.fbt._("Group name", null, {
							hk: "4mpueC"
						})
					}), s.a.createElement(x.a, {
						className: O.a.ChannelNameInput,
						handleChannelNameInput: L,
						value: y,
						maxLength: h.g
					}, s.a.createElement("span", {
						className: Object(T.a)(O.a.ChannelNameLengthCounter, {
							[O.a.warning]: k < 0
						})
					}, `${k}/${h.g}`)), s.a.createElement(p.a, {
						text: `${l} ${a.fbt._("Members",null,{hk:"2vedT1"})}`
					}), s.a.createElement(d.a, {
						className: O.a.Scroller,
						loadMoreRows: B,
						isLoadMoreRowsComplete: j
					}, s.a.createElement(m.a, {
						channelId: t,
						modIndicator: !0,
						useNSFWIcons: o || A
					}), N && s.a.createElement("div", {
						role: "progressbar",
						className: O.a.LoadingIndicator
					}, a.fbt._("Loading members...", null, {
						hk: "2sCDrM"
					}))), s.a.createElement(S.a, {
						text: a.fbt._("Invite people to the group", null, {
							hk: "4hJmrh"
						}),
						actionButtonText: a.fbt._("Invite", null, {
							hk: "uNiGT"
						}),
						actionButtonAction: J
					}, s.a.createElement(I.a, null))), D ? s.a.createElement(_.a, {
						secondaryButtonAction: w,
						primaryButtonAction: M,
						secondaryButtonText: a.fbt._("Cancel", null, {
							hk: "2TSLl5"
						}),
						primaryButtonText: a.fbt._("Save", null, {
							hk: "4yMsMq"
						}),
						primaryButtonDisabled: k < 0
					}) : null)
				}
				return null
			}))
		},
		"./src/chat/controls/Settings/SectionItem/index.m.less": function(e, t, n) {
			e.exports = {
				SectionItem: "_3JayfP3nr44aiSTOH3X0TR",
				sectionItem: "_3JayfP3nr44aiSTOH3X0TR",
				Icon: "_1wIpeOzWFdkr1A-76pIh_A",
				icon: "_1wIpeOzWFdkr1A-76pIh_A",
				TextContainer: "_1q_FeJl0KtVLt7TwbSjFfk",
				textContainer: "_1q_FeJl0KtVLt7TwbSjFfk",
				Text: "_2EC-ymaT4--lK6n-72UZQV",
				text: "_2EC-ymaT4--lK6n-72UZQV",
				Subtext: "V-G-Qn5fHp9iOV6BzqZs-",
				subtext: "V-G-Qn5fHp9iOV6BzqZs-",
				ActionButton: "_15Xuz0ABJ5-Zqa82QStwz5",
				actionButton: "_15Xuz0ABJ5-Zqa82QStwz5",
				Button: "_1NDpILgnF5cm6JKemiWxJ",
				button: "_1NDpILgnF5cm6JKemiWxJ"
			}
		},
		"./src/chat/controls/Settings/SectionItem/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				c = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				o = n("./src/chat/controls/Button/index.tsx"),
				r = n("./src/chat/controls/Settings/SectionItem/index.m.less"),
				l = n.n(r);
			t.a = e => {
				let {
					className: t,
					text: n,
					subtext: a,
					actionButtonText: r,
					actionButtonAction: i,
					children: m
				} = e;
				return c.a.createElement("div", {
					className: Object(s.a)(l.a.SectionItem, t)
				}, m ? c.a.createElement("div", {
					className: l.a.Icon
				}, m) : null, c.a.createElement("div", {
					className: l.a.TextContainer
				}, c.a.createElement("div", {
					className: l.a.Text
				}, n), a ? c.a.createElement("div", {
					className: l.a.Subtext
				}, a) : null), c.a.createElement("div", {
					className: l.a.ActionButton
				}, c.a.createElement(o.a, {
					isSmall: !0,
					secondary: !0,
					className: l.a.Button,
					onClick: i
				}, r)))
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.m.less": function(e, t, n) {
			e.exports = {
				SectionTitle: "syLXEcIqb2SJy9_YQ8rne",
				sectionTitle: "syLXEcIqb2SJy9_YQ8rne"
			}
		},
		"./src/chat/controls/Settings/SectionTitle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				c = n.n(a),
				s = n("./src/chat/controls/Settings/SectionTitle/index.m.less"),
				o = n.n(s);
			t.a = e => {
				let {
					text: t
				} = e;
				return c.a.createElement("div", {
					className: o.a.SectionTitle
				}, t)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayGroupAbout.b8c9e2d8d90a082d28a5.js.map