// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointLegacyAnnouncement.4e01cac8fdc0d5678030.js
// Retrieved at 8/24/2020, 4:30:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeaturedLiveEntrypointLegacyAnnouncement"], {
		"./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less": function(e, n, t) {
			e.exports = {
				AnnouncementContainer: "_2n96dzZYei5koZIof4hNGb",
				announcementContainer: "_2n96dzZYei5koZIof4hNGb",
				Title: "_2_60e51mes8qIV48MFyxwe",
				title: "_2_60e51mes8qIV48MFyxwe",
				Description: "_1ADicmI89099yV3e3zrjUD",
				description: "_1ADicmI89099yV3e3zrjUD",
				Button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				button: "_1vGOSBVzbAH3jn-PrQ2qY5",
				CloseButton: "_1KlaD5sga3um3ZmSli7uwr",
				closeButton: "_1KlaD5sga3um3ZmSli7uwr",
				iconStyles: "_1vyFrq5zn33vVTIC_LlCmR"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, "default", (function() {
				return g
			}));
			var s = t("./node_modules/react/index.js"),
				a = t.n(s),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/Button/index.tsx"),
				i = t("./src/reddit/icons/svgs/Close/index.tsx"),
				r = t("./src/reddit/icons/svgs/Comments/index.tsx"),
				l = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				m = t("./src/reddit/icons/svgs/Snoo/index.tsx");
			var d = e => a.a.createElement("svg", {
					className: e.className,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, e.desc && a.a.createElement("desc", null, e.desc), a.a.createElement("g", null, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("polygon", {
					points: "0,40 14.3,29.2 10.8,25.7"
				}), a.a.createElement("path", {
					d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
				})))),
				u = t("./src/reddit/icons/svgs/TextPost/index.tsx"),
				x = t("./src/reddit/layout/row/Inline/index.tsx"),
				v = t("./src/reddit/models/Live/index.ts"),
				E = t("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				_ = t.n(E);

			function g(e) {
				const {
					announcement: n,
					className: t,
					onBtnClick: s,
					onClose: E
				} = e, g = {
					[v.b.Announcement]: a.a.createElement(d, {
						className: _.a.iconStyles
					}),
					[v.b.Document]: a.a.createElement(u.a, {
						className: _.a.iconStyles
					}),
					[v.b.Snoo]: a.a.createElement(m.a, {
						className: _.a.iconStyles
					}),
					[v.b.Ama]: a.a.createElement(r.a, {
						className: _.a.iconStyles
					}),
					[v.b.Moderation]: a.a.createElement(l.a, {
						className: _.a.iconStyles
					})
				};
				return a.a.createElement("div", {
					className: Object(c.a)(t, _.a.AnnouncementContainer)
				}, a.a.createElement(x.a, null, g[n.icon], a.a.createElement("div", {
					className: Object(c.a)(_.a.Title, _.a.isAnnouncement)
				}, n.title), a.a.createElement(i.a, {
					className: _.a.CloseButton,
					onClick: E
				})), a.a.createElement("div", {
					className: Object(c.a)(_.a.Description, _.a.isAnnouncement)
				}, n.description), a.a.createElement(o.g, {
					className: _.a.Button,
					target: "_blank",
					href: n.url,
					onClick: s
				}, n.callToAction))
			}
		},
		"./src/reddit/icons/svgs/Comments/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				a = t.n(s);
			n.a = e => {
				let {
					className: n
				} = e;
				return a.a.createElement("svg", {
					className: n,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, a.a.createElement("path", {
					d: "M15 4V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1V6a2 2 0 0 1 2-2z"
				}), a.a.createElement("path", {
					d: "M17 5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.36l1.76 1.83a.5.5 0 0 0 .75 0L13.64 16H17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
				}))
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, n, t) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				a = t.n(s),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = t.n(o);
			n.a = e => a.a.createElement("svg", {
				className: Object(c.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		}
	}
]);
//# sourceMappingURL=FeaturedLiveEntrypointLegacyAnnouncement.4e01cac8fdc0d5678030.js.map