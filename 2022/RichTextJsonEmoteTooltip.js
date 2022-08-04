// https://www.redditstatic.com/desktop2x/RichTextJsonEmoteTooltip.17adf81b58a10e957e4e.js
// Retrieved at 8/4/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RichTextJsonEmoteTooltip"], {
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/reddit/constants/elementIds.ts"),
				i = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(r.a)(e, t);
				class s extends o.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(c.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return o.a.createElement(n, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(s)
			}
		},
		"./src/reddit/components/RichTextJson/Emote/Tooltip/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1ZYKZ99fLnKdRuVBpU1Vwr",
				emojiDescription: "_1-ukLvwGGC9jlnWBDbqc44",
				emojiName: "gezkWzBxfb326kZkDHhyZ",
				img: "N2IInBRimpNCR9ScSiMpa"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = n("./src/reddit/components/RichTextJson/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/models/Product/index.ts"),
				u = n("./src/reddit/components/RichTextJson/Emote/Tooltip/index.m.less"),
				x = n.n(u);
			const O = {};
			const h = Object(c.c)({
					emote: (e, t) => {
						let {
							emoteId: n,
							pageLayer: s
						} = t;
						const o = Object(p.b)(n),
							r = Object(l.r)(e, {
								pageLayer: s
							});
						if (r) {
							const t = r.id,
								s = e.economics.emotes[t] || [];
							for (const e of s)
								if (e.emotes[o] && e.emotes[o].fullId === n) return e.emotes[o]
						}
					}
				}),
				j = Object(r.b)(h),
				b = Object(l.u)()(j((function(e) {
					return e.emote && e.emote.extra && e.emote.extra.rtDescription ? o.a.createElement("div", {
						className: Object(a.a)(x.a.container, e.className),
						style: e.style
					}, o.a.createElement("img", {
						className: x.a.img,
						src: e.emote.sticker.path
					}), o.a.createElement("div", null, o.a.createElement("div", {
						className: x.a.emojiName
					}, ":", Object(p.b)(e.emoteId), ":"), o.a.createElement("div", {
						className: x.a.emojiDescription
					}, o.a.createElement(m.b, {
						content: {
							document: e.emote.extra.rtDescription
						},
						rtJsonElementProps: O
					})))) : null
				})));
			t.default = Object(d.a)(b, [i.a.Click, i.a.Keydown])
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RichTextJsonEmoteTooltip.17adf81b58a10e957e4e.js.map