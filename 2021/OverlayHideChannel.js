// https://www.redditstatic.com/desktop2x/OverlayHideChannel.8de8544810e4935aecc3.js
// Retrieved at 6/10/2021, 1:50:13 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayHideChannel"], {
		"./src/chat/components/OverlayHideChannel/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_307OfV8du-3RF2ziwOucOD",
				text: "_307OfV8du-3RF2ziwOucOD"
			}
		},
		"./src/chat/components/OverlayHideChannel/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "OverlayHideChannel", (function() {
				return B
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/lessComponent.tsx"),
				l = n("./src/chat/actions/channel.ts"),
				i = n("./src/chat/actions/message/unreadCount.ts"),
				d = n("./src/chat/helpers/errors.ts"),
				u = n("./src/chat/selectors/channels.ts"),
				h = n("./src/chat/singleton/SendbirdSDK.ts");
			var m = n("./src/chat/actions/tracking.ts"),
				y = n("./src/chat/components/OverlayNav/index.tsx"),
				b = n("./src/chat/controls/Overlay/index.tsx"),
				O = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				x = n("./src/chat/components/OverlayHideChannel/index.m.less"),
				p = n.n(x);
			const C = c.a.p("Text", p.a);
			C.displayName = "Text";
			const _ = Object(o.b)(null, e => ({
					onHideChannelRequest: () => {
						e((() => async (e, t) => {
							const n = t(),
								a = Object(u.j)(n);
							if (!a) throw new d.a("hideChannel", a);
							try {
								await h.a.hideChannel()
							} catch (r) {
								return Object(d.b)(`Error hiding channel: ${r.message}`)
							}
							e(Object(l.K)(a.channelId)), e(Object(l.P)(a.channelState)), e(Object(i.b)())
						})()), e(Object(m.y)())
					}
				})),
				B = ({
					channelId: e,
					onHideChannelRequest: t
				}) => s.a.createElement(b.a, null, s.a.createElement(y.a, {
					channelId: e,
					title: a.fbt._("Hide channel?", null, {
						hk: "2tS9C7"
					})
				}), s.a.createElement(C, null, a.fbt._("Hiding this channel will remove it from your chat inbox until someone else in the channel sends another message.", null, {
					hk: "2obYDP"
				})), s.a.createElement(O.a, {
					primaryButtonText: a.fbt._("Hide", null, {
						hk: "1mv2YH"
					}),
					primaryButtonAction: () => t()
				}));
			t.default = _(B)
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
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/helpers/dom.ts"),
				h = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = n.n(h);
			const y = i.a.wrapped(d.a, "Button", m.a),
				b = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(u.b)(() => e(Object(c.a)()))
				})),
				O = i.a.div("OverlayControlBar", m.a),
				x = b(e => s.a.createElement(O, {
					className: Object(l.a)({
						[m.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? s.a.createElement(y, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : s.a.createElement(y, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && s.a.createElement(y, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayHideChannel.8de8544810e4935aecc3.js.map