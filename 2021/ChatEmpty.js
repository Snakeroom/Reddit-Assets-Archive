// https://www.redditstatic.com/desktop2x/ChatEmpty.21de50d8c962748df2ed.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatEmpty"], {
		"./src/chat/components/EmptyState/index.m.less": function(e, t, a) {
			e.exports = {
				Wrapper: "_2UMdjEGcEc4jVOyQvrm43p",
				wrapper: "_2UMdjEGcEc4jVOyQvrm43p",
				Image: "_1iX3tBG5vXYrekIuyCKhTe",
				image: "_1iX3tBG5vXYrekIuyCKhTe",
				Info: "_2waJskSokZXL5LuWW8VO1N",
				info: "_2waJskSokZXL5LuWW8VO1N",
				Header: "_2-m5XiDaYkqlh4osi1nYYP",
				header: "_2-m5XiDaYkqlh4osi1nYYP",
				Button: "_2tnTzKA9kkOiahL8VDoFQx",
				button: "_2tnTzKA9kkOiahL8VDoFQx"
			}
		},
		"./src/chat/helpers/styles/components/index.m.less": function(e, t, a) {
			e.exports = {
				HeaderMain: "_2c7PdJhtZYaRXPDl6VZDXL",
				headerMain: "_2c7PdJhtZYaRXPDl6VZDXL",
				RegularText: "_1Ke-z89tci1Ds-jhHyFAar",
				regularText: "_1Ke-z89tci1Ds-jhHyFAar",
				CenterWrapper: "_2RzakqFb75vsIBk7E43T_C",
				centerWrapper: "_2RzakqFb75vsIBk7E43T_C",
				CenterContent: "_13Gn8BFWgn5Dx1YEb5KBqX",
				centerContent: "_13Gn8BFWgn5Dx1YEb5KBqX"
			}
		},
		"./src/chat/pages/Empty.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "default", (function() {
				return X
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./node_modules/fbt/lib/FbtPublic.js"),
				c = a("./src/config.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				o = a("./src/chat/components/CloseIcon/index.tsx"),
				m = a("./src/chat/controls/Button/index.tsx"),
				i = a("./src/chat/helpers/styles/components/index.m.less"),
				d = a.n(i);
			const h = l.a.h2("HeaderMain", d.a),
				p = l.a.p("RegularText", d.a),
				u = l.a.div("CenterWrapper", d.a),
				_ = l.a.div("CenterContent", d.a),
				E = e => r.a.createElement(u, {
					className: e.className
				}, r.a.createElement(_, null, e.children));
			var x = a("./src/chat/icons/svgs/ChatNew/index.tsx"),
				k = a("./src/chat/helpers/urls/index.ts"),
				C = a("./node_modules/react-router-dom/esm/react-router-dom.js"),
				D = a("./src/chat/components/EmptyState/index.m.less"),
				b = a.n(D);
			const f = l.a.div("Wrapper", b.a),
				w = l.a.img("Image", b.a),
				y = l.a.div("Info", b.a),
				g = l.a.wrapped(h, "Header", b.a),
				v = l.a.wrapped(m.a, "Button", b.a);
			var L = () => r.a.createElement(E, null, r.a.createElement(o.a, null), r.a.createElement(f, null, r.a.createElement(w, {
				src: `${c.a.assetPath}/img/chat/empty-hero.png`
			}), r.a.createElement(y, null, r.a.createElement(g, null, s.fbt._("Start a direct chat", null, {
				hk: "1smhyj"
			})), r.a.createElement(p, null, s.fbt._("You can start a new direct chat with the button below or from someone's profile", null, {
				hk: "10JmWs"
			}), r.a.createElement(C.a, {
				to: Object(k.channelUrl)("create")
			}, r.a.createElement(v, {
				primary: !0
			}, r.a.createElement(x.a, {
				isFilled: !0,
				width: "1em"
			}), s.fbt._("New Chat", null, {
				hk: "1fS294"
			})))))));
			class X extends r.a.Component {
				render() {
					return r.a.createElement(L, null)
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatEmpty.21de50d8c962748df2ed.js.map