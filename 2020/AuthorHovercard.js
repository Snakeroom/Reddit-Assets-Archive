// https://www.redditstatic.com/desktop2x/AuthorHovercard.83c92ece5ad71db7eb0a.js
// Retrieved at 8/31/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["AuthorHovercard"], {
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				d = r("./src/reddit/components/Hovercards/helpers.ts"),
				n = r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),
				a = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),
				i = r("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			const v = e => Object(a.a)(e.id) ? e.belongsTo.id : e.subredditId;
			class l extends s.a.Component {
				constructor() {
					super(...arguments), this.sendEvent = () => this.props.sendEvent(Object(m.f)(this.props.postOrComment.id))
				}
				render() {
					const {
						props: e
					} = this, t = Object(d.b)({
						author: e.author,
						itemId: e.postOrComment.id,
						tooltipIdPrefix: e.tooltipIdPrefix || i.a,
						tooltipType: e.tooltipType
					}), r = "".concat(t, "-hover-id"), o = e.author || e.postOrComment.author;
					return s.a.createElement(n.a, {
						authorOrSubredditName: o,
						className: e.hoverDivClassName,
						hoverId: r,
						sendHoverEvent: this.sendEvent,
						tooltipId: t
					}, e.children, s.a.createElement(c.a, {
						className: e.className,
						contextId: e.postOrComment.id,
						hoverId: r,
						sendEvent: e.sendEvent,
						subredditId: v(e.postOrComment),
						tooltipId: t,
						tooltipType: e.tooltipType,
						userName: o
					}))
				}
			}
			t.default = Object(p.c)(l)
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.83c92ece5ad71db7eb0a.js.map