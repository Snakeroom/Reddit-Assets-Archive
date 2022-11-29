// https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.5b0964688c780b817610.js
// Retrieved at 11/29/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				c = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/chat/controls/Svg/index.m.less"),
				i = n.n(r);
			t.a = o.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: a,
						hover: o
					} = e;
				return s.a.createElement("svg", {
					className: Object(c.a)(e.className, {
						[i.a.disable]: n,
						[i.a.active]: a,
						[i.a.hover]: !!o
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
				c = n("./src/chat/controls/Svg/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement(c.a, o({}, e, {
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
				ctaText: "_151PrBg-rDa9Lc-V5BaoOd",
				ctaCaret: "_1UIrgzG-hiGGr7IQkOsCIu"
			}
		},
		"./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/chat/icons/svgs/CaretRight/index.tsx"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				d = n("./src/reddit/components/Snoo/index.m.less"),
				m = n.n(d),
				u = n("./src/lib/lessComponent.tsx").a.wrapped(l.a, "Component", m.a),
				h = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/hooks/useTheme.ts"),
				A = n("./src/reddit/components/FeedAnnouncement/utils.ts"),
				x = n("./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.m.less"),
				C = n.n(x);

			function _(e) {
				const {
					onClose: t
				} = e;
				return r.a.createElement("div", {
					className: C.a.headerContainer
				}, r.a.createElement(u, null), r.a.createElement("div", {
					className: C.a.headerTitle
				}, s.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), r.a.createElement("button", {
					className: C.a.headerCloseButton,
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
					announcement: t,
					onClose: n,
					onClick: s
				} = e, {
					body: o,
					title: i,
					cta: l
				} = t, d = Object(p.a)(), m = Object(A.a)(t);
				return r.a.createElement("div", {
					className: Object(c.a)(C.a.container),
					role: "button",
					onClick: s,
					style: Object(h.c)(void 0, {
						theme: d
					}),
					tabIndex: 0,
					"aria-label": i
				}, r.a.createElement(_, {
					onClose: n
				}), r.a.createElement("div", {
					className: Object(c.a)(C.a.bodyContainer)
				}, r.a.createElement("div", {
					className: Object(c.a)(C.a.bodyContent)
				}, r.a.createElement("h3", {
					className: C.a.title
				}, i), r.a.createElement("p", null, o)), null != m ? r.a.createElement("div", {
					className: Object(c.a)(C.a.thumbnailContainer)
				}, r.a.createElement("img", {
					src: m
				})) : null), l ? r.a.createElement("div", {
					className: Object(c.a)(C.a.ctaContainer)
				}, r.a.createElement("a", {
					onClick: s,
					className: Object(c.a)(C.a.ctaText),
					tabIndex: 0,
					"aria-label": l
				}, l, r.a.createElement(a.a, {
					className: Object(c.a)(C.a.ctaCaret),
					height: "20px"
				}))) : null)
			}
		},
		"./src/reddit/components/FeedAnnouncement/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./src/config.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./node_modules/react/index.js");
			const o = new Map,
				r = async e => {
					if (o.has(e)) return await o.get(e);
					const t = (async e => {
						return (await fetch(e, {
							method: "HEAD"
						})).ok
					})(e);
					return o.set(e, t), await t
				}, i = e => {
					const {
						id: t
					} = e, n = (e => {
						const {
							id: t,
							images: n
						} = e;
						if (null == n || 0 === n.length) return null;
						if (n.length > 1) return s.c.withScope(e => {
							e.setExtra("announcementId", t), s.c.captureException("Gallery announcements are not supported")
						}), null;
						const a = n[0];
						switch (a.__typename) {
							case "ImageAsset":
							case "AnimatedImageAsset":
								return a.url || null;
							default:
								return s.c.withScope(e => {
									e.setExtra("announcementId", t), s.c.captureException(`MediaAsset type [${a.__typename}] in images field is not supported.`)
								}), null
						}
					})(e), [o, i] = Object(c.useState)(n || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII");
					return Object(c.useEffect)(() => {
						if (n) return;
						const e = (e => e.match(/^images_in_comments/) ? `${a.a.assetPath}/img/announcements/images_in_comments_announcement.jpg` : `${a.a.assetPath}/img/announcements/${e}.png`)(t);
						let s = !1;
						return r(e).then(t => {
							!1 === s && i(t ? e : null)
						}), () => {
							s = !0
						}
					}, [t]), o
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.5b0964688c780b817610.js.map