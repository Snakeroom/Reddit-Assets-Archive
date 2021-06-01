// https://www.redditstatic.com/desktop2x/OverlayLeaveChannel.79d223dd688019f0668d.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayLeaveChannel"], {
		"./src/chat/components/OverlayLeaveChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3EeEvLNf7oLUv7HADlg78v",
				container: "_3EeEvLNf7oLUv7HADlg78v",
				Text: "_3KBF2WZWeb-cDtVGxJrB_M",
				text: "_3KBF2WZWeb-cDtVGxJrB_M",
				TextBold: "_2viZeky_1285ai6miwQrbQ",
				textBold: "_2viZeky_1285ai6miwQrbQ"
			}
		},
		"./src/chat/components/OverlayLeaveChannel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				u = n("./src/chat/controls/Overlay/index.tsx"),
				m = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				y = n("./src/chat/components/OverlayLeaveChannel/index.m.less"),
				h = n.n(y);
			const b = s.a.div("Container", h.a),
				v = s.a.p("Text", h.a),
				x = s.a.wrapped(v, "TextBold", h.a),
				_ = Object(l.b)(void 0, e => ({
					onChannelLeave: t => {
						e(Object(i.q)()), e(Object(c.I)(t))
					}
				}));
			t.default = _(e => {
				const {
					channelId: t,
					onChannelLeave: n
				} = e;
				return r.a.createElement(u.a, null, r.a.createElement(d.a, {
					channelId: t,
					title: a.fbt._("Are you sure", null, {
						hk: "4fJTRG"
					})
				}), r.a.createElement(b, null, r.a.createElement(x, null, a.fbt._("Leave group chat?", null, {
					hk: "vEsVO"
				})), r.a.createElement(v, null, a.fbt._("You will be removed from the group and no longer receive new messages. You will not be able to join this group again unless you receive another invite.", null, {
					hk: "3oISyF"
				}))), r.a.createElement(m.a, {
					primaryButtonText: a.fbt._("Leave", null, {
						hk: "1s8gFw"
					}),
					primaryButtonAction: () => n(t)
				}))
			})
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/helpers/dom.ts"),
				m = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				y = n.n(m);
			const h = i.a.wrapped(d.a, "Button", y.a),
				b = Object(l.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(u.b)(() => e(Object(s.a)()))
				})),
				v = i.a.div("OverlayControlBar", y.a),
				x = b(e => r.a.createElement(v, {
					className: Object(c.a)({
						[y.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(h, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(h, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(h, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || a.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			x.displayName = "OverlayControlBar", t.a = x
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayLeaveChannel.79d223dd688019f0668d.js.map