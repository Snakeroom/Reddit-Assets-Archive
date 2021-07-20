// https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.08faa3ebb8c51567230b.js
// Retrieved at 7/20/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDirectsEmptyState"], {
		"./src/chat/components/OverlayDirectsEmptyState/index.m.less": function(e, t, a) {
			e.exports = {
				OverlayContent: "_1q866gGcJPftLTxyLf0X3g",
				overlayContent: "_1q866gGcJPftLTxyLf0X3g",
				Image: "_1vp6IUbUAKft1309x-FLvY",
				image: "_1vp6IUbUAKft1309x-FLvY",
				Info: "_3ReB8hehAg-xasLSPknuTf",
				info: "_3ReB8hehAg-xasLSPknuTf",
				Header: "_3Tai9WhmvPt75f5hVNehsd",
				header: "_3Tai9WhmvPt75f5hVNehsd",
				Text: "_2qqSe8MO2ASeWjo69rQv-U",
				text: "_2qqSe8MO2ASeWjo69rQv-U"
			}
		},
		"./src/chat/components/OverlayDirectsEmptyState/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/react-router-redux/es/index.js"),
				l = a("./src/config.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				d = a("./src/chat/components/OverlayNav/index.tsx"),
				m = a("./src/chat/controls/Overlay/index.tsx"),
				u = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				y = a("./src/chat/helpers/urls/index.ts"),
				h = a("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				p = a.n(h);
			const x = i.a.div("OverlayContent", p.a),
				B = i.a.img("Image", p.a),
				_ = i.a.div("Info", p.a),
				O = i.a.h4("Header", p.a),
				b = i.a.p("Text", p.a),
				f = Object(s.b)(null, e => ({
					onCreateMessage: () => {
						const t = Object(y.getRedirectURL)(Object(y.channelUrl)("create"));
						return e(Object(c.b)(t))
					}
				}));
			t.default = f(e => o.a.createElement(m.a, {
				innerContent: !0
			}, o.a.createElement(d.a, {
				title: n.fbt._("Start chatting", null, {
					hk: "3B5dRm"
				})
			}), o.a.createElement(x, null, o.a.createElement(B, {
				src: `${l.a.assetPath}/img/chat/empty-hero.png`
			}), o.a.createElement(_, null, o.a.createElement(O, null, n.fbt._("Start a direct chat", null, {
				hk: "4qVzlj"
			})), o.a.createElement(b, null, n.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
				hk: "3wS0vs"
			})))), o.a.createElement(u.a, {
				primaryButtonText: n.fbt._("New Chat", null, {
					hk: "33WSw"
				}),
				primaryButtonAction: e.onCreateMessage,
				primaryButtonOnly: !0
			})))
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/react-router-redux/es/index.js"),
				l = a("./src/config.ts"),
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/chat/controls/Button/index.tsx"),
				m = a("./src/chat/helpers/dom.ts"),
				u = a("./src/chat/controls/OverlayControlBar/index.m.less"),
				y = a.n(u);
			const h = Object(s.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(m.b)(() => e(Object(c.a)()))
			}))(e => o.a.createElement("div", {
				className: Object(i.a)({
					[y.a.primary]: e.primaryButtonOnly,
					[y.a.NoHeaderText]: !e.children
				}, y.a.OverlayControlBar, e.className)
			}, e.children && o.a.createElement("span", {
				className: y.a.HeaderText
			}, e.children), o.a.createElement("div", {
				className: y.a.ButtonsWrapper
			}, e.primaryButtonBlock && o.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(y.a.Button, y.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || n.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? o.a.createElement(d.a, {
				className: y.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, n.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : o.a.createElement(d.a, {
				className: y.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && o.a.createElement(d.a, {
				className: y.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || n.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			h.displayName = "OverlayControlBar", t.a = h
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.08faa3ebb8c51567230b.js.map