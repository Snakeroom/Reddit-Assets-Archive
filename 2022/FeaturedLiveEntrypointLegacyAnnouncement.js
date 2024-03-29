// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointLegacyAnnouncement.2e830483eaa0966800cb.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				return _
			}));
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				a = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/Button/index.tsx"),
				i = t("./src/reddit/icons/svgs/Close/index.tsx"),
				r = t("./src/reddit/icons/svgs/Comments/index.tsx"),
				l = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				d = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				m = t("./src/reddit/icons/svgs/Sticky/index.tsx"),
				u = t("./src/reddit/icons/svgs/TextPost/index.tsx"),
				x = t("./src/reddit/layout/row/Inline/index.tsx"),
				v = t("./src/reddit/models/Live/index.ts"),
				E = t("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				g = t.n(E);

			function _(e) {
				const {
					announcement: n,
					className: t,
					onBtnClick: s,
					onClose: E
				} = e, _ = {
					[v.b.Announcement]: c.a.createElement(m.a, {
						className: g.a.iconStyles
					}),
					[v.b.Document]: c.a.createElement(u.a, {
						className: g.a.iconStyles
					}),
					[v.b.Snoo]: c.a.createElement(d.a, {
						className: g.a.iconStyles
					}),
					[v.b.Ama]: c.a.createElement(r.a, {
						className: g.a.iconStyles
					}),
					[v.b.Moderation]: c.a.createElement(l.a, {
						className: g.a.iconStyles
					})
				};
				return c.a.createElement("div", {
					className: Object(a.a)(t, g.a.AnnouncementContainer)
				}, c.a.createElement(x.a, null, _[n.icon], c.a.createElement("div", {
					className: Object(a.a)(g.a.Title, g.a.isAnnouncement)
				}, "function" == typeof n.title ? n.title() : n.title), c.a.createElement(i.a, {
					className: g.a.CloseButton,
					onClick: E
				})), c.a.createElement("div", {
					className: Object(a.a)(g.a.Description, g.a.isAnnouncement)
				}, "function" == typeof n.description ? n.description() : n.description), c.a.createElement(o.m, {
					className: g.a.Button,
					target: "_blank",
					href: n.url,
					onClick: s
				}, "function" == typeof n.callToAction ? n.callToAction() : n.callToAction))
			}
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				a = t("./src/reddit/constants/colors.ts");
			n.a = e => c.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && c.a.createElement("desc", null, e.desc), c.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), c.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), c.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				a = t("./src/reddit/constants/colors.ts");
			n.a = e => c.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, c.a.createElement("g", null, c.a.createElement("circle", {
				fill: a.a.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), c.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/Sticky/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s);
			n.a = e => c.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, e.desc && c.a.createElement("desc", null, e.desc), c.a.createElement("g", null, c.a.createElement("g", {
				fill: "inherit"
			}, c.a.createElement("polygon", {
				points: "0,40 14.3,29.2 10.8,25.7"
			}), c.a.createElement("path", {
				d: "M23,27.6l10.8-10.8c2,1.1,4.5,0.8,6.2-0.9L24.1,0c-1.7,1.7-2,4.2-0.9,6.2L12.4,17c-2-1.1-4.5-0.8-6.2,0.9l15.9,15.9C23.8,32.1,24.1,29.6,23,27.6z"
			}))))
		},
		"./src/reddit/icons/svgs/TextPost/index.m.less": function(e, n, t) {
			e.exports = {
				icon: "_13NhOjx-Siom7MKe3Dex5y"
			}
		},
		"./src/reddit/icons/svgs/TextPost/index.tsx": function(e, n, t) {
			"use strict";
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				a = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/TextPost/index.m.less"),
				i = t.n(o);
			n.a = e => c.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M16.8656 7.205H13.139c-.3428 0-.621-.2782-.621-.621 0-.343.2782-.621.621-.621h3.7266c.343 0 .621.278.621.621 0 .3428-.278.621-.621.621zm0 3.416H13.139c-.3428 0-.621-.2782-.621-.621s.2782-.621.621-.621h3.7266c.343 0 .621.2782.621.621s-.278.621-.621.621zm0 3.416H3.2016c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621zm-13.664 3.416c-.343 0-.621-.278-.621-.621 0-.3428.278-.621.621-.621h13.664c.343 0 .621.2782.621.621 0 .343-.278.621-.621.621H3.2016zm-.621-14.285c0-.343.278-.621.621-.621h6.5997c.343 0 .621.278.621.621V10c0 .3428-.278.621-.621.621H3.2016c-.343 0-.621-.2782-.621-.621V3.168zM1.3382.0625C.6513.0625.096.6178.096 1.3047v17.3906c0 .687.5554 1.2422 1.2423 1.2422H18.729c.6868 0 1.242-.5553 1.242-1.2422V1.3047c0-.687-.5552-1.2422-1.242-1.2422H1.3382z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointLegacyAnnouncement.2e830483eaa0966800cb.js.map