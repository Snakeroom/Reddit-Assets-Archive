// https://www.redditstatic.com/desktop2x/OverlayChatMembers.5358a75827a642bfc3d2.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
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
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/lib/lessComponent.tsx"),
				l = r("./src/chat/actions/members.ts"),
				m = r("./src/chat/components/ChatMemberList/index.tsx"),
				i = r("./src/chat/components/Scroller/index.tsx"),
				d = r("./src/chat/constants/channels.ts"),
				u = r("./src/chat/controls/Overlay/index.tsx"),
				b = r("./src/chat/controls/OverlayControlBar/index.tsx"),
				h = r("./src/chat/controls/OverlayHeader/index.tsx"),
				y = r("./src/chat/helpers/chatSelector.ts"),
				p = r("./src/chat/selectors/channels.ts"),
				x = r("./src/chat/selectors/members.ts"),
				O = r("./src/chat/components/OverlayChatMembers/index.m.less"),
				_ = r.n(O);
			const C = c.a.wrapped(i.b, "Scroller", _.a),
				f = c.a.div("LoadingIndicator", _.a),
				v = Object(y.a)({
					channelType: e => Object(p.w)(e, "type"),
					currentChannel: p.j,
					memberCount: e => Object(p.w)(e, "memberCount"),
					members: e => Object(x.f)(e),
					fetchingMembers: x.a,
					hasMoreMembers: x.d
				}),
				B = Object(o.b)(v, e => ({
					fetchChannelMembers: t => e(Object(l.e)({
						loadMore: t
					}))
				}));
			t.default = B((function(e) {
				const {
					channelId: t,
					currentChannel: r,
					memberCount: a,
					members: o,
					fetchChannelMembers: c,
					fetchingMembers: l,
					hasMoreMembers: i
				} = e;
				if (r) {
					const {
						channelState: e
					} = r, y = e === d.b.INVITED, p = e === d.b.JOINED, x = () => {
						!l && i && c({
							loadMore: !0
						})
					}, O = () => !!l;
					return l || o.length || c(), s.a.createElement(u.a, {
						form: !0,
						innerContent: !0
					}, s.a.createElement(h.a, {
						title: n.fbt._({
							"*": "{number of members} group members",
							_1: "1 group member"
						}, [n.fbt._plural(a, "number of members")], {
							hk: "4phXDa"
						})
					}), s.a.createElement(C, {
						loadMoreRows: x,
						isLoadMoreRowsComplete: O,
						threshold: 0
					}, s.a.createElement(m.a, {
						channelId: t,
						members: o,
						modIndicator: !0,
						useNSFWIcons: y || p
					}), l && s.a.createElement(f, {
						role: "progressbar"
					}, n.fbt._("Loading members...", null, {
						hk: "2sCDrM"
					}))), s.a.createElement(b.a, {
						secondaryButtonOnly: !0,
						secondaryButtonText: n.fbt._("Done", null, {
							hk: "2xerWP"
						})
					}))
				}
				return null
			}))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, r) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				m = r("./src/lib/lessComponent.tsx"),
				i = r("./src/chat/controls/Button/index.tsx"),
				d = r("./src/chat/helpers/dom.ts"),
				u = r("./src/chat/controls/OverlayControlBar/index.m.less"),
				b = r.n(u);
			const h = m.a.wrapped(i.a, "Button", b.a),
				y = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(d.b)(() => e(Object(c.a)()))
				})),
				p = m.a.div("OverlayControlBar", b.a),
				x = y(e => s.a.createElement(p, {
					className: Object(l.a)({
						[b.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? s.a.createElement(h, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, n.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : s.a.createElement(h, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && s.a.createElement(h, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || n.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			x.displayName = "OverlayControlBar", t.a = x
		},
		"./src/chat/controls/OverlayHeader/index.m.less": function(e, t, r) {
			e.exports = {
				BaseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				baseMessageStyles: "_1E1yA4seaLlh26LjsJZ5DE",
				Header: "_3scCev7HurKBoQph3rzCoU",
				header: "_3scCev7HurKBoQph3rzCoU",
				Title: "_3A0guGtMzQKVwbvpqNB97u",
				title: "_3A0guGtMzQKVwbvpqNB97u",
				Normal: "_1Aqcks07FlOaxti1O-onw7",
				normal: "_1Aqcks07FlOaxti1O-onw7",
				Warning: "_14Pn1s4X6btpX11HaKT9P2",
				warning: "_14Pn1s4X6btpX11HaKT9P2"
			}
		},
		"./src/chat/controls/OverlayHeader/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./src/chat/components/ToastNotification/index.tsx"),
				c = r("./src/chat/controls/OverlayHeader/index.m.less"),
				l = r.n(c);
			const m = s.a.header("Header", l.a),
				i = s.a.h1("Title", l.a),
				d = s.a.span("Normal", l.a),
				u = s.a.span("Warning", l.a);
			t.a = ({
				message: e,
				title: t,
				warning: r
			}) => {
				const n = r ? u : d;
				return a.a.createElement(m, null, a.a.createElement(i, null, t), a.a.createElement(n, null, e), a.a.createElement(o.a, null))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayChatMembers.5358a75827a642bfc3d2.js.map