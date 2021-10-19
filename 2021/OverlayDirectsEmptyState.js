// https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.0d1ca3a69d7ee0433f93.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
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
				s = a.n(r),
				c = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/react-router-redux/es/index.js"),
				o = a("./src/config.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				m = a("./src/chat/components/OverlayNav/index.tsx"),
				h = a("./src/chat/controls/Overlay/index.tsx"),
				d = a("./src/chat/controls/OverlayControlBar/index.tsx"),
				u = a("./src/chat/helpers/urls/index.ts"),
				_ = a("./src/chat/components/OverlayDirectsEmptyState/index.m.less"),
				x = a.n(_);
			const f = i.a.div("OverlayContent", x.a),
				v = i.a.img("Image", x.a),
				p = i.a.div("Info", x.a),
				y = i.a.h4("Header", x.a),
				O = i.a.p("Text", x.a),
				b = Object(c.b)(null, e => ({
					onCreateMessage: () => {
						const t = Object(u.getRedirectURL)(Object(u.channelUrl)("create"));
						return e(Object(l.b)(t))
					}
				}));
			t.default = b(e => s.a.createElement(h.a, {
				innerContent: !0
			}, s.a.createElement(m.a, {
				title: n.fbt._("Start chatting", null, {
					hk: "3B5dRm"
				})
			}), s.a.createElement(f, null, s.a.createElement(v, {
				src: `${o.a.assetPath}/img/chat/empty-hero.png`
			}), s.a.createElement(p, null, s.a.createElement(y, null, n.fbt._("Start a direct chat", null, {
				hk: "4qVzlj"
			})), s.a.createElement(O, null, n.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
				hk: "3wS0vs"
			})))), s.a.createElement(d.a, {
				primaryButtonText: n.fbt._("New Chat", null, {
					hk: "33WSw"
				}),
				primaryButtonAction: e.onCreateMessage,
				primaryButtonOnly: !0
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayDirectsEmptyState.0d1ca3a69d7ee0433f93.js.map