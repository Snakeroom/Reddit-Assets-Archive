// https://www.redditstatic.com/desktop2x/reddit-components-RichTextEditor-Toolbar-GifButton.64cd23be2df950ce1992.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-RichTextEditor-Toolbar-GifButton"], {
		"./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less": function(t, o, n) {
			t.exports = {
				rainbow: "_3o1yVY7yuN_Xzqg5RaAFp8",
				rainbowFade: "_3XlVOBsaD4vQFIAVPEpLFD"
			}
		},
		"./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.tsx": function(t, o, n) {
			"use strict";
			n.r(o), n.d(o, "default", (function() {
				return l
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				e = n("./node_modules/react/index.js"),
				s = n.n(e),
				d = n("./src/lib/constants/icons.ts"),
				r = n("./src/reddit/components/RichTextEditor/Toolbar/FormatterButton/index.tsx"),
				c = n("./src/reddit/components/RichTextEditor/Toolbar/GifButton/index.m.less"),
				a = n.n(c);

			function l(t) {
				const {
					controlsState: o,
					onGifButtonClick: n,
					useRainbowStyling: e = !0,
					userCanUseGifs: c
				} = t, l = o.giphy.isEnabled;
				return s.a.createElement(r.default, {
					iconName: d.a.gif_post,
					className: l && c && e ? a.a.rainbow : void 0,
					tooltip: i.fbt._("Add GIF", null, {
						hk: "3uH3vO"
					}),
					disabledTooltip: i.fbt._("Limit 1 GIF / comment", null, {
						hk: "7T6gq"
					}),
					enabled: l,
					onClick: n
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-RichTextEditor-Toolbar-GifButton.64cd23be2df950ce1992.js.map