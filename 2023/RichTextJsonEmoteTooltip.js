// https://www.redditstatic.com/desktop2x/RichTextJsonEmoteTooltip.6f7ec3f32f520d7039ff.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextJsonEmoteTooltip"], {
		"./src/reddit/components/RichTextJson/Emote/Tooltip/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1ZYKZ99fLnKdRuVBpU1Vwr",
				emojiDescription: "_1-ukLvwGGC9jlnWBDbqc44",
				emojiName: "gezkWzBxfb326kZkDHhyZ",
				img: "N2IInBRimpNCR9ScSiMpa"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				r = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = o("./src/lib/classNames/index.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = o("./src/reddit/components/RichTextJson/index.tsx"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				x = o("./src/reddit/models/Product/index.ts"),
				p = o("./src/reddit/components/RichTextJson/Emote/Tooltip/index.m.less"),
				u = o.n(p);
			const _ = {};
			const j = Object(i.c)({
					emote: (e, t) => {
						let {
							emoteId: o,
							pageLayer: s
						} = t;
						const n = Object(x.b)(o),
							c = Object(l.s)(e, {
								pageLayer: s
							});
						if (c) {
							const t = c.id,
								s = e.economics.emotes[t] || [];
							for (const e of s)
								if (e.emotes[n] && e.emotes[n].fullId === o) return e.emotes[n]
						}
					}
				}),
				E = Object(c.b)(j),
				b = Object(l.v)()(E((function(e) {
					return e.emote && e.emote.extra && e.emote.extra.rtDescription ? n.a.createElement("div", {
						className: Object(a.a)(u.a.container, e.className),
						style: e.style
					}, n.a.createElement("img", {
						className: u.a.img,
						src: e.emote.sticker.path
					}), n.a.createElement("div", null, n.a.createElement("div", {
						className: u.a.emojiName
					}, ":", Object(x.b)(e.emoteId), ":"), n.a.createElement("div", {
						className: u.a.emojiDescription
					}, n.a.createElement(d.b, {
						content: {
							document: e.emote.extra.rtDescription
						},
						rtJsonElementProps: _
					})))) : null
				})));
			t.default = Object(m.a)(b, [r.a.Click, r.a.Keydown])
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextJsonEmoteTooltip.6f7ec3f32f520d7039ff.js.map