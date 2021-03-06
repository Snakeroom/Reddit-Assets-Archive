// https://www.redditstatic.com/desktop2x/OverlayBlockUser.02ace267939c85bc87e1.js
// Retrieved at 7/13/2021, 11:00:06 AM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/chat/actions/tracking.ts"),
				c = n("./src/chat/actions/user.ts"),
				i = n("./src/chat/components/OverlayNav/index.tsx"),
				d = n("./src/chat/controls/Overlay/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				m = n("./src/chat/helpers/chatSelector.ts"),
				B = n("./src/chat/components/OverlayBlockUser/index.m.less"),
				y = n.n(B);
			const h = Object(m.a)({
					blockedUser: (e, t) => e.contacts.models[t.blockedUserId]
				}),
				k = Object(s.b)(h, e => ({
					onChannelBlock: t => {
						e(c.n(t)), e(l.I())
					}
				}))(e => {
					const {
						blockedUser: t,
						blockedUserId: n,
						onChannelBlock: r
					} = e, s = t ? t.name : a.fbt._("user", null, {
						hk: "3ddTpU"
					});
					return o.a.createElement(d.a, null, o.a.createElement(i.a, {
						channelId: e.channelId,
						title: a.fbt._("Block {username}", [a.fbt._param("username", s)], {
							hk: "2aTkTS"
						})
					}), o.a.createElement("div", {
						className: y.a.Container
					}, o.a.createElement("p", {
						className: y.a.Text
					}, a.fbt._("Are you sure you want to block this user?", null, {
						hk: "31Tn9j"
					}))), o.a.createElement(u.a, {
						primaryButtonText: a.fbt._("Block", null, {
							hk: "8i5gq"
						}),
						primaryButtonAction: () => r(n)
					}, o.a.createElement("p", null, a.fbt._("You will no longer see their comments, posts, and messages. They will not know that you've blocked them. You will no longer get notifications from this user", null, {
						hk: "4xn1p1"
					}))))
				});
			t.default = k
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, n) {
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
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/lib/classNames/index.ts"),
				d = n("./src/chat/controls/Button/index.tsx"),
				u = n("./src/chat/helpers/dom.ts"),
				m = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				B = n.n(m);
			const y = Object(s.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(u.b)(() => e(Object(l.a)()))
			}))(e => o.a.createElement("div", {
				className: Object(i.a)({
					[B.a.primary]: e.primaryButtonOnly,
					[B.a.NoHeaderText]: !e.children
				}, B.a.OverlayControlBar, e.className)
			}, e.children && o.a.createElement("span", {
				className: B.a.HeaderText
			}, e.children), o.a.createElement("div", {
				className: B.a.ButtonsWrapper
			}, e.primaryButtonBlock && o.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(B.a.Button, B.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? o.a.createElement(d.a, {
				className: B.a.Button,
				href: `${c.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : o.a.createElement(d.a, {
				className: B.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && o.a.createElement(d.a, {
				className: B.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "2Iwjdv"
			})))));
			y.displayName = "OverlayControlBar", t.a = y
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayBlockUser.02ace267939c85bc87e1.js.map