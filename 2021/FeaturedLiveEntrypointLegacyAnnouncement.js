// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointLegacyAnnouncement.498181185d1943ccef1c.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
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
				return v
			}));
			var s = t("./node_modules/react/index.js"),
				c = t.n(s),
				i = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/Button/index.tsx"),
				a = t("./src/reddit/icons/svgs/Close/index.tsx"),
				r = t("./src/reddit/icons/svgs/Comments/index.tsx"),
				l = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				d = t("./src/reddit/icons/svgs/Snoo/index.tsx"),
				m = t("./src/reddit/icons/svgs/Sticky/index.tsx"),
				u = t("./src/reddit/icons/svgs/TextPost/index.tsx"),
				_ = t("./src/reddit/layout/row/Inline/index.tsx"),
				x = t("./src/reddit/models/Live/index.ts"),
				y = t("./src/reddit/components/FeaturedLiveEntrypoint/LegacyAnnouncement/index.m.less"),
				A = t.n(y);

			function v(e) {
				const {
					announcement: n,
					className: t,
					onBtnClick: s,
					onClose: y
				} = e, v = {
					[x.b.Announcement]: c.a.createElement(m.a, {
						className: A.a.iconStyles
					}),
					[x.b.Document]: c.a.createElement(u.a, {
						className: A.a.iconStyles
					}),
					[x.b.Snoo]: c.a.createElement(d.a, {
						className: A.a.iconStyles
					}),
					[x.b.Ama]: c.a.createElement(r.a, {
						className: A.a.iconStyles
					}),
					[x.b.Moderation]: c.a.createElement(l.a, {
						className: A.a.iconStyles
					})
				};
				return c.a.createElement("div", {
					className: Object(i.a)(t, A.a.AnnouncementContainer)
				}, c.a.createElement(_.a, null, v[n.icon], c.a.createElement("div", {
					className: Object(i.a)(A.a.Title, A.a.isAnnouncement)
				}, "function" == typeof n.title ? n.title() : n.title), c.a.createElement(a.a, {
					className: A.a.CloseButton,
					onClick: y
				})), c.a.createElement("div", {
					className: Object(i.a)(A.a.Description, A.a.isAnnouncement)
				}, "function" == typeof n.description ? n.description() : n.description), c.a.createElement(o.l, {
					className: A.a.Button,
					target: "_blank",
					href: n.url,
					onClick: s
				}, "function" == typeof n.callToAction ? n.callToAction() : n.callToAction))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointLegacyAnnouncement.498181185d1943ccef1c.js.map