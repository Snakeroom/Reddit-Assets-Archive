// https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.fdb0696134ff519e5648.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayDirectsEmptyState"], {
		"./src/chat/components/OverlayDirectsEmptyState/index.m.less": function(e, t, n) {
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
		"./src/chat/components/OverlayDirectsEmptyState/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/config.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/components/OverlayNav/index.tsx"),
				m = n("./src/chat/controls/Overlay/index.tsx"),
				u = n("./src/chat/controls/OverlayControlBar/index.tsx"),
				y = n("./src/chat/helpers/urls/index.ts"),
				h = n("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				x = n.n(h);
			const b = i.a.div("OverlayContent", x.a),
				p = i.a.img("Image", x.a),
				_ = i.a.div("Info", x.a),
				O = i.a.h4("Header", x.a),
				f = i.a.p("Text", x.a),
				v = Object(s.b)(null, e => ({
					onCreateMessage: () => {
						const t = Object(y.getRedirectURL)(Object(y.channelUrl)("create"));
						return e(Object(l.b)(t))
					}
				}));
			t.default = v(e => o.a.createElement(m.a, {
				innerContent: !0
			}, o.a.createElement(d.a, {
				title: a.fbt._("Start chatting", null, {
					hk: "3B5dRm"
				})
			}), o.a.createElement(b, null, o.a.createElement(p, {
				src: `${c.a.assetPath}/img/chat/empty-hero.png`
			}), o.a.createElement(_, null, o.a.createElement(O, null, a.fbt._("Start a direct chat", null, {
				hk: "4qVzlj"
			})), o.a.createElement(f, null, a.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
				hk: "3wS0vs"
			})))), o.a.createElement(u.a, {
				primaryButtonText: a.fbt._("New Chat", null, {
					hk: "33WSw"
				}),
				primaryButtonAction: e.onCreateMessage,
				primaryButtonOnly: !0
			})))
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
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/controls/Button/index.tsx"),
				m = n("./src/chat/helpers/dom.ts"),
				u = n("./src/chat/controls/OverlayControlBar/index.m.less"),
				y = n.n(u);
			const h = i.a.wrapped(d.a, "Button", y.a),
				x = Object(s.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(m.b)(() => e(Object(l.a)()))
				})),
				b = i.a.div("OverlayControlBar", y.a),
				p = x(e => o.a.createElement(b, {
					className: Object(c.a)({
						[y.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? o.a.createElement(h, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, a.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : o.a.createElement(h, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || a.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && o.a.createElement(h, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || a.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			p.displayName = "OverlayControlBar", t.a = p
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.fdb0696134ff519e5648.js.map