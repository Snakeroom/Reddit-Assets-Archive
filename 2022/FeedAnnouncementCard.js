// https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.a90a884221020c49a7a3.js
// Retrieved at 10/31/2022, 4:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeedAnnouncementCard"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(r);
			t.a = c.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: c
					} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!c
					}),
					viewBox: e.viewBox,
					style: t,
					onClick: e.onClick
				}, e.children)
			}, "Component", i.a)
		},
		"./src/chat/icons/svgs/CaretRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				o = n("./src/chat/controls/Svg/index.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(o.a, c({}, e, {
				viewBox: "0 0 20 20"
			}), e.isFilled ? s.a.createElement("path", {
				d: "M8.207,15.707,6.793,14.293,11.086,10,6.793,5.707,8.207,4.293l5,5a1,1,0,0,1,0,1.414Z"
			}) : s.a.createElement("path", {
				d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
			}))
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2akP1RcRQJAG3YjOsWoj73",
				mUseRedditTheme: "_10jL57sKztoereMWdM-U3-",
				title: "KUHGJKg9fkjs327YZQXu_",
				headerContainer: "_32e1aPGUhGtgeKqpq3fRzQ",
				headerTitle: "_380yXY8pEvjDplptmsSA7x",
				headerCloseButton: "Z3-cxWG_XK_10CQUVGif1",
				bodyContainer: "_26LFHoWP5tCW9-yFLDuzp8",
				bodyContent: "dku0Op6m8XlDzNXaT18Ao",
				thumbnailContainer: "_161yAsr8ctyBKBDiKc3sh8",
				ctaContainer: "_2RlwLUVQB26YQJao9PNk-N",
				ctaText: "_151PrBg-rDa9Lc-V5BaoOd"
			}
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/chat/icons/svgs/CaretRight/index.tsx"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/react/index.js"),
				r = n.n(c),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				d = n("./src/reddit/components/Snoo/index.m.less"),
				m = n.n(d),
				u = n("./src/lib/lessComponent.tsx").a.wrapped(l.a, "Component", m.a),
				h = n("./src/reddit/components/FeedAnnouncement/utils.ts"),
				p = n("./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.m.less"),
				_ = n.n(p);

			function x(e) {
				const {
					onClose: t
				} = e;
				return r.a.createElement("div", {
					className: _.a.headerContainer
				}, r.a.createElement(u, null), r.a.createElement("div", {
					className: _.a.headerTitle
				}, s.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), r.a.createElement("button", {
					className: _.a.headerCloseButton,
					onClick: e => {
						e.stopPropagation(), t()
					},
					title: s.fbt._("Close", null, {
						hk: "4CfMwa"
					})
				}, r.a.createElement(i.b, null)))
			}
			t.default = function(e) {
				const {
					id: t,
					body: n,
					title: s,
					cta: c,
					url: i,
					onClose: l
				} = e, d = Object(h.a)(t);
				return r.a.createElement("div", {
					className: Object(o.a)(_.a.container),
					role: "button",
					onClick: () => window.location.href = i
				}, r.a.createElement(x, {
					onClose: l
				}), r.a.createElement("div", {
					className: Object(o.a)(_.a.bodyContainer)
				}, r.a.createElement("div", {
					className: Object(o.a)(_.a.bodyContent)
				}, r.a.createElement("h3", {
					className: _.a.title
				}, s), r.a.createElement("p", null, n)), null != d ? r.a.createElement("div", {
					className: Object(o.a)(_.a.thumbnailContainer)
				}, r.a.createElement("img", {
					src: d
				})) : null), null != c ? r.a.createElement("div", {
					className: Object(o.a)(_.a.ctaContainer)
				}, r.a.createElement("a", {
					href: i,
					className: Object(o.a)(_.a.ctaText)
				}, c, r.a.createElement(a.a, {
					height: "20px"
				}))) : null)
			}
		},
		"./src/reddit/components/FeedAnnouncement/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				s = n("./node_modules/react/index.js");
			const o = new Map,
				c = async e => {
					if (o.has(e)) return await o.get(e);
					const t = (async e => {
						return (await fetch(e, {
							method: "HEAD"
						})).ok
					})(e);
					return o.set(e, t), await t
				}, r = e => {
					const [t, n] = Object(s.useState)(null);
					return Object(s.useEffect)(() => {
						const t = (e => e.match(/^images_in_comments/) ? `${a.a.assetPath}/img/announcements/images_in_comments.jpg` : `${a.a.assetPath}/img/announcements/${e}.png`)(e);
						let s = !1;
						return c(t).then(e => {
							!1 === s && !0 === e && n(t)
						}), () => {
							s = !0
						}
					}, [e]), t
				}
		},
		"./src/reddit/components/Snoo/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "LTGGGuKkF69FYEjoO3dP-",
				component: "LTGGGuKkF69FYEjoO3dP-"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.a90a884221020c49a7a3.js.map