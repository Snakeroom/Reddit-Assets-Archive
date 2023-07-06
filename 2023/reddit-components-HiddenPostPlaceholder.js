// https://www.redditstatic.com/desktop2x/reddit-components-HiddenPostPlaceholder.177f7a8a1a2ce79ca00f.js
// Retrieved at 7/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-HiddenPostPlaceholder"], {
		"./src/reddit/components/HiddenPostPlaceholder/index.m.less": function(e, t, s) {
			e.exports = {
				root: "_3IEo2e_Nd8mekh4LKAooAp",
				isCard: "_2iZWTwcW4WdYVQgKucHYOB",
				isClassic: "SfhrHuS4uNI6A5VuRO6DZ",
				isCompact: "_13VZrRuZjiDUjNXUA0L4Xv",
				heading: "G9i89lLBZAl3uiNxPs5k0"
			}
		},
		"./src/reddit/components/HiddenPostPlaceholder/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				d = s("./node_modules/react/index.js"),
				n = s.n(d),
				c = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/hooks/useTheme.ts"),
				p = s("./src/reddit/components/HiddenPostPlaceholder/index.m.less"),
				g = s.n(p);
			const x = o.fbt._("Post hidden", null, {
					hk: "BdFf2"
				}),
				h = o.fbt._("Undo", null, {
					hk: "46OwLP"
				}),
				j = e => Object(l.V)(e, {});
			t.default = e => {
				const {
					postId: t
				} = e, s = Object(c.d)(), o = Object(c.e)(j), d = Object(b.a)();
				return n.a.createElement("div", {
					className: Object(r.a)({
						[g.a.root]: !0,
						[g.a.isCard]: [a.g.Large, a.g.Medium].includes(o),
						[g.a.isClassic]: o === a.g.Classic,
						[g.a.isCompact]: o === a.g.Compact
					}),
					style: Object(m.c)(void 0, {
						theme: d
					})
				}, n.a.createElement("h3", {
					className: Object(r.a)(g.a.heading)
				}, x), n.a.createElement(u.t, {
					priority: u.c.Secondary,
					rplStyle: !0,
					onClick: () => {
						s(Object(i.db)(t, !1, !1, !0))
					}
				}, h))
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return h
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				d = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				n = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				c = s("./src/reddit/models/Theme/index.ts"),
				i = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(a);
			const u = {},
				m = e => Object(c.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				b = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(c.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(c.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				p = e => Object(o.k)(.2, e),
				g = e => e && e.postBackgroundColor ? {
					backgroundColor: p(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(d.a)(Object(r.a)(e), n.a.actionIcon, n.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function d() {
				return Object(o.useContext)(r.b)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-HiddenPostPlaceholder.177f7a8a1a2ce79ca00f.js.map