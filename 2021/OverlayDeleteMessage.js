// https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.1d12807da9297a5d9f4e.js
// Retrieved at 6/3/2021, 8:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDeleteMessage"], {
		"./src/chat/components/OverlayDeleteMessage/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2Yb29uEhP7-68Kfyyoi055",
				container: "_2Yb29uEhP7-68Kfyyoi055",
				Text: "_1uVJNk1TcTYh4J-adHysAR",
				text: "_1uVJNk1TcTYh4J-adHysAR",
				MessageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN",
				messageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN"
			}
		},
		"./src/chat/components/OverlayDeleteMessage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayDeleteMessage", (function() {
				return f
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/chat/actions/message/index.ts"),
				l = s("./src/lib/makeActionCreator/index.ts");
			const i = Object(l.a)("OVERLAY_CLOSE");
			var d = s("./src/chat/actions/tracking.ts"),
				m = s("./src/chat/components/Message/Bubble.tsx"),
				u = s("./src/chat/components/OverlayNav/index.tsx"),
				b = s("./src/chat/controls/Overlay/index.tsx"),
				y = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				h = s("./src/chat/helpers/chatSelector.ts"),
				O = s("./src/chat/selectors/app.ts"),
				x = s("./src/chat/selectors/messages.ts"),
				p = s("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				_ = s.n(p);
			const C = Object(h.a)({
					message: (e, t) => Object(x.d)(e, t.messageId),
					isChatEmbedded: e => Object(O.a)(e),
					isMessageFromCurrentUser: (e, t) => Object(x.n)(e, t.messageId)
				}),
				B = Object(o.b)(C, (e, t) => ({
					onConfirmationClick: () => ((e, t) => {
						e(Object(c.r)(t)), e(Object(d.y)())
					})(e, t.messageId),
					onCancel: () => e(i())
				}));
			class f extends n.Component {
				render() {
					const {
						channelId: e,
						message: t,
						onConfirmationClick: s,
						isChatEmbedded: n,
						isMessageFromCurrentUser: o
					} = this.props;
					return r.a.createElement(b.a, null, r.a.createElement(u.a, {
						channelId: e,
						title: a.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), r.a.createElement("div", {
						className: _.a.Container
					}, r.a.createElement("p", {
						className: _.a.Text
					}, a.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), r.a.createElement("br", null), a.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), t && r.a.createElement(m.a, {
						className: _.a.MessageItemBubble,
						message: t,
						fromCurrentUser: o,
						fromInvite: !1,
						withButton: !1,
						isChatEmbedded: n
					})), r.a.createElement(y.a, {
						primaryButtonText: a.fbt._("Delete", null, {
							hk: "NyHQz"
						}),
						primaryButtonAction: () => s()
					}))
				}
			}
			t.default = B(f)
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/chat/controls/Button/index.tsx"),
				m = s("./src/chat/helpers/dom.ts"),
				u = s("./src/chat/controls/OverlayControlBar/index.m.less"),
				b = s.n(u);
			const y = i.a.wrapped(d.a, "Button", b.a),
				h = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(m.b)(() => e(Object(c.a)()))
				})),
				O = i.a.div("OverlayControlBar", b.a),
				x = h(e => r.a.createElement(O, {
					className: Object(l.a)({
						[b.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(y, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(y, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(y, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.1d12807da9297a5d9f4e.js.map