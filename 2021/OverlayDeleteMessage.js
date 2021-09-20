// https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.08855bf166382b654d64.js
// Retrieved at 9/20/2021, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDeleteMessage"], {
		"./src/chat/components/OverlayDeleteMessage/index.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2Yb29uEhP7-68Kfyyoi055",
				container: "_2Yb29uEhP7-68Kfyyoi055",
				Text: "_1uVJNk1TcTYh4J-adHysAR",
				text: "_1uVJNk1TcTYh4J-adHysAR",
				MessageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN",
				messageItemBubble: "_2LnLeMXkarDt5N1fvf6WLN"
			}
		},
		"./src/chat/components/OverlayDeleteMessage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "OverlayDeleteMessage", (function() {
				return C
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./src/chat/actions/message/index.ts"),
				l = a("./src/lib/makeActionCreator/index.ts");
			const i = Object(l.a)("OVERLAY_CLOSE");
			var d = a("./src/chat/actions/tracking.ts"),
				m = a("./src/chat/components/Message/Bubble.tsx"),
				u = a("./src/chat/components/OverlayNav/index.tsx"),
				y = a("./src/chat/controls/Overlay/index.tsx"),
				b = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				h = a("./src/chat/helpers/chatSelector.ts"),
				B = a("./src/chat/selectors/app.ts"),
				p = a("./src/chat/selectors/messages.ts"),
				x = a("./src/chat/components/OverlayDeleteMessage/index.m.less"),
				O = a.n(x);
			const _ = Object(h.a)({
					message: (e, t) => Object(p.b)(e, t.messageId),
					isChatEmbedded: B.c,
					isMessageFromCurrentUser: (e, t) => Object(p.g)(e, t.messageId)
				}),
				k = Object(o.b)(_, (e, t) => ({
					onConfirmationClick: () => ((e, t) => {
						e(Object(c.s)(t)), e(Object(d.D)())
					})(e, t.messageId),
					onCancel: () => e(i())
				}));
			class C extends n.Component {
				render() {
					const {
						channelId: e,
						message: t,
						onConfirmationClick: a,
						isChatEmbedded: n,
						isMessageFromCurrentUser: o
					} = this.props;
					return r.a.createElement(y.a, null, r.a.createElement(u.a, {
						channelId: e,
						title: s.fbt._("Delete message", null, {
							hk: "1ZCVBI"
						})
					}), r.a.createElement("div", {
						className: O.a.Container
					}, r.a.createElement("p", {
						className: O.a.Text
					}, s.fbt._("Are you sure you want to delete this message?", null, {
						hk: "3cAxYZ"
					}), r.a.createElement("br", null), s.fbt._("You can't undo this.", null, {
						hk: "4ockoK"
					})), t && r.a.createElement(m.a, {
						className: O.a.MessageItemBubble,
						message: t,
						fromCurrentUser: o,
						withButton: !1,
						isChatEmbedded: n
					})), r.a.createElement(b.a, {
						primaryButtonText: s.fbt._("Delete", null, {
							hk: "4lt26q"
						}),
						primaryButtonAction: () => a()
					}))
				}
			}
			t.default = k(C)
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, a) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				r = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/react-router-redux/es/index.js"),
				l = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/chat/controls/Button/index.tsx"),
				m = a("./src/chat/controls/OverlayControlBar/index.m.less"),
				u = a.n(m),
				y = a("./src/chat/helpers/dom.ts");
			const b = Object(o.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(y.b)(() => e(Object(c.a)()))
			}))(e => r.a.createElement("div", {
				className: Object(i.a)({
					[u.a.primary]: e.primaryButtonOnly,
					[u.a.NoHeaderText]: !e.children
				}, u.a.OverlayControlBar, e.className)
			}, e.children && r.a.createElement("span", {
				className: u.a.HeaderText
			}, e.children), r.a.createElement("div", {
				className: u.a.ButtonsWrapper
			}, e.primaryButtonBlock && r.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(u.a.Button, u.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || s.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(d.a, {
				className: u.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, s.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : r.a.createElement(d.a, {
				className: u.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && r.a.createElement(d.a, {
				className: u.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || s.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			b.displayName = "OverlayControlBar", t.a = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDeleteMessage.08855bf166382b654d64.js.map