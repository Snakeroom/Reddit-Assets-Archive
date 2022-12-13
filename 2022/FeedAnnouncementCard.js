// https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.ac256a4edb31296c412d.js
// Retrieved at 12/13/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
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
				ctaText: "_151PrBg-rDa9Lc-V5BaoOd",
				ctaCaret: "_1UIrgzG-hiGGr7IQkOsCIu"
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
				d = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				l = n("./src/reddit/components/Snoo/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx").a.wrapped(d.a, "Component", u.a),
				p = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = n("./src/reddit/hooks/useTheme.ts"),
				b = n("./src/reddit/components/FeedAnnouncement/utils.ts"),
				g = n("./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.m.less"),
				A = n.n(g);

			function x(e) {
				const {
					onClose: t
				} = e;
				return r.a.createElement("div", {
					className: A.a.headerContainer
				}, r.a.createElement(m, null), r.a.createElement("div", {
					className: A.a.headerTitle
				}, s.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), r.a.createElement("button", {
					className: A.a.headerCloseButton,
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
					body: c,
					title: i,
					cta: d
				} = t, l = Object(h.a)(), u = Object(b.a)(t);
				return r.a.createElement("div", {
					className: Object(o.a)(A.a.container),
					role: "button",
					onClick: s,
					style: Object(p.c)(void 0, {
						theme: l
					}),
					tabIndex: 0,
					"aria-label": i
				}, r.a.createElement(x, {
					onClose: n
				}), r.a.createElement("div", {
					className: Object(o.a)(A.a.bodyContainer)
				}, r.a.createElement("div", {
					className: Object(o.a)(A.a.bodyContent)
				}, r.a.createElement("h3", {
					className: A.a.title
				}, i), r.a.createElement("p", null, c)), null != u ? r.a.createElement("div", {
					className: Object(o.a)(A.a.thumbnailContainer)
				}, r.a.createElement("img", {
					src: u
				})) : null), d ? r.a.createElement("div", {
					className: Object(o.a)(A.a.ctaContainer)
				}, r.a.createElement("a", {
					onClick: s,
					className: Object(o.a)(A.a.ctaText),
					tabIndex: 0,
					"aria-label": d
				}, d, r.a.createElement(a.a, {
					className: Object(o.a)(A.a.ctaCaret),
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
				o = n("./node_modules/react/index.js");
			const c = new Map,
				r = async e => {
					if (c.has(e)) return await c.get(e);
					const t = (async e => {
						return (await fetch(e, {
							method: "HEAD"
						})).ok
					})(e);
					return c.set(e, t), await t
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
					})(e), [c, i] = Object(o.useState)(n || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII");
					return Object(o.useEffect)(() => {
						if (n) return;
						const e = (e => e.match(/^images_in_comments/) ? `${a.a.assetPath}/img/announcements/images_in_comments_announcement.jpg` : `${a.a.assetPath}/img/announcements/${e}.png`)(t);
						let s = !1;
						return r(e).then(t => {
							!1 === s && i(t ? e : null)
						}), () => {
							s = !0
						}
					}, [t]), c
				}
		},
		"./src/reddit/components/Snoo/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "LTGGGuKkF69FYEjoO3dP-",
				component: "LTGGGuKkF69FYEjoO3dP-"
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "d", (function() {
				return A
			}));
			var a = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				c = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(r.g)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(r.g)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(r.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				h = e => Object(a.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: h(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				A = e => {
					const t = Object(o.a)(Object(s.a)(e), c.a.actionIcon, c.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.ac256a4edb31296c412d.js.map