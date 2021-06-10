// https://www.redditstatic.com/desktop2x/OverlayBlockUser.55931f4e060aa6550878.js
// Retrieved at 6/10/2021, 6:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayBlockUser"], {
		"./src/chat/components/OverlayBlockUser/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1krdNYK7ugIMXB3ZghbFue",
				container: "_1krdNYK7ugIMXB3ZghbFue",
				Text: "_2d8sdMroAZbA6U92LFXNXQ",
				text: "_2d8sdMroAZbA6U92LFXNXQ"
			}
		},
		"./src/chat/components/OverlayBlockUser/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/lib/lessComponent.tsx"),
				c = n("./src/chat/actions/tracking.ts"),
				i = n("./src/chat/actions/user.ts"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				u = n("./src/chat/controls/Overlay/index.tsx"),
				m = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				b = n("./src/chat/helpers/chatSelector.ts"),
				h = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				y = n.n(h);
			const p = l.a.div("Container", y.a),
				B = l.a.p("Text", y.a),
				_ = Object(b.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				}),
				x = Object(a.b)(_, e => ({
					onChannelBlock: t => {
						e(i.n(t)), e(c.J())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: r
					} = e, a = t ? t.name : o.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return s.a.createElement(u.a, null, s.a.createElement(d.a, {
						channelId: e.channelId,
						title: o.fbt._("Block {username}", [o.fbt._param("username", a)], {
							hk: "2aTkTS"
						})
					}), s.a.createElement(p, null, s.a.createElement(B, null, o.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					})), s.a.createElement(B, null, o.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user.", null, {
						hk: "veMnN"
					}))), s.a.createElement(m.a, {
						primaryButtonText: o.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => r(n)
					}))
				});
			t.default = x
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/helpers/dom.ts"),
				m = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				b = n.n(m);
			const h = i.a.wrapped(d.a, "Button", b.a),
				y = Object(a.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(u.b)(() => e(Object(l.a)()))
				})),
				p = i.a.div("OverlayControlBar", b.a),
				B = y(e => s.a.createElement(p, {
					className: Object(c.a)({
						[b.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? s.a.createElement(h, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, o.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : s.a.createElement(h, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || o.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && s.a.createElement(h, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || o.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			B.displayName = "OverlayControlBar", t.a = B
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayBlockUser.55931f4e060aa6550878.js.map