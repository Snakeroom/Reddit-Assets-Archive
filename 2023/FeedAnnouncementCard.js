// https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.a5360308883bdf2d11d2.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeedAnnouncementCard"], {
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				c = n.n(o),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				d = n("./src/reddit/components/Snoo/index.m.less"),
				l = n.n(d),
				u = n("./src/lib/lessComponent.tsx").a.wrapped(i.a, "Component", l.a),
				m = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = n("./src/reddit/hooks/useTheme.ts"),
				A = n("./src/reddit/icons/svgs/CaretRight/index.tsx"),
				b = n("./src/reddit/components/FeedAnnouncement/utils.ts"),
				C = n("./src/reddit/components/FeedAnnouncement/FeedAnnouncementCard/index.m.less"),
				g = n.n(C);

			function h(e) {
				const {
					onClose: t
				} = e;
				return c.a.createElement("div", {
					className: g.a.headerContainer
				}, c.a.createElement(u, null), c.a.createElement("div", {
					className: g.a.headerTitle
				}, s.fbt._("From Reddit", null, {
					hk: "1Sazf8"
				})), c.a.createElement("button", {
					className: g.a.headerCloseButton,
					onClick: e => {
						e.stopPropagation(), t()
					},
					title: s.fbt._("Close", null, {
						hk: "4CfMwa"
					})
				}, c.a.createElement(r.b, null)))
			}
			t.default = function(e) {
				const {
					announcement: t,
					onClose: n,
					onClick: s
				} = e, {
					body: o,
					title: r,
					cta: i
				} = t, d = Object(p.a)(), l = Object(b.a)(t);
				return c.a.createElement("div", {
					className: Object(a.a)(g.a.container),
					role: "button",
					onClick: s,
					style: Object(m.c)(void 0, {
						theme: d
					}),
					tabIndex: 0,
					"aria-label": r
				}, c.a.createElement(h, {
					onClose: n
				}), c.a.createElement("div", {
					className: Object(a.a)(g.a.bodyContainer)
				}, c.a.createElement("div", {
					className: Object(a.a)(g.a.bodyContent)
				}, c.a.createElement("h3", {
					className: g.a.title
				}, r), c.a.createElement("p", null, o)), null != l ? c.a.createElement("div", {
					className: Object(a.a)(g.a.thumbnailContainer)
				}, c.a.createElement("img", {
					src: l
				})) : null), i ? c.a.createElement("div", {
					className: Object(a.a)(g.a.ctaContainer)
				}, c.a.createElement("a", {
					onClick: s,
					className: Object(a.a)(g.a.ctaText),
					tabIndex: 0,
					"aria-label": i
				}, i, c.a.createElement(A.a, {
					className: Object(a.a)(g.a.ctaCaret),
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
			var s = n("./src/config.ts"),
				a = n("./src/lib/sentry/index.ts"),
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
						if (n.length > 1) return a.c.withScope(e => {
							e.setExtra("announcementId", t), a.c.captureException("Gallery announcements are not supported")
						}), null;
						const s = n[0];
						switch (s.__typename) {
							case "ImageAsset":
							case "AnimatedImageAsset":
								return s.url || null;
							default:
								return a.c.withScope(e => {
									e.setExtra("announcementId", t), a.c.captureException(`MediaAsset type [${s.__typename}] in images field is not supported.`)
								}), null
						}
					})(e), [c, i] = Object(o.useState)(n || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII");
					return Object(o.useEffect)(() => {
						if (n) return;
						const e = (e => e.match(/^images_in_comments/) ? `${s.a.assetPath}/img/announcements/images_in_comments_announcement.jpg` : `${s.a.assetPath}/img/announcements/${e}.png`)(t);
						let a = !1;
						return r(e).then(t => {
							!1 === a && i(t ? e : null)
						}), () => {
							a = !0
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
				return C
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				a = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				c = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				r = n("./src/reddit/models/Theme/index.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(r.f)(Object(i.a)(e).post, Object(i.a)(e).backgroundImage, Object(i.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(r.f)(e.postBackgroundColor || Object(i.a)(t).post, e.postBackgroundImage, Object(i.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(r.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				A = e => Object(s.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: A(e.postBackgroundColor)
				} : u,
				C = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(o.a)(Object(a.a)(e), c.a.actionIcon, c.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/svgs/CaretRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				height: e.height,
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M7.942,15.442l-.884-.884L11.616,10,7.058,5.442l.884-.884,5,5a.625.625,0,0,1,0,.884Z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeedAnnouncementCard.a5360308883bdf2d11d2.js.map