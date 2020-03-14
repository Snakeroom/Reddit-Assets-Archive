// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.596d91cdc610b7f2bdc3.js
// Retrieved at 3/14/2020, 5:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeaturedLiveEntrypointAnnouncement"], {
		"./src/reddit/components/FeaturedLiveEntrypoint/Announcement.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var s = t("./node_modules/react/index.js"),
				a = t.n(s),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/Button/index.tsx"),
				i = t("./src/reddit/icons/svgs/Close/index.tsx"),
				l = t("./src/reddit/icons/svgs/Comments/index.tsx"),
				r = t("./src/reddit/icons/svgs/Moderate/index.tsx"),
				d = t("./src/reddit/icons/svgs/Snoo/index.tsx");
			var m = e => a.a.createElement("svg", {
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
				v = t("./src/reddit/layout/row/Inline/index.tsx"),
				x = t("./src/reddit/models/Live/index.ts"),
				E = t("./src/reddit/components/FeaturedLiveEntrypoint/index.m.less"),
				p = t.n(E);
			n.default = e => {
				const {
					announcement: n,
					className: t,
					onBtnClick: s,
					onClose: E
				} = e, w = {
					[x.b.Announcement]: a.a.createElement(m, {
						className: p.a.iconStyles
					}),
					[x.b.Document]: a.a.createElement(u.a, {
						className: p.a.iconStyles
					}),
					[x.b.Snoo]: a.a.createElement(d.a, {
						className: p.a.iconStyles
					}),
					[x.b.Ama]: a.a.createElement(l.a, {
						className: p.a.iconStyles
					}),
					[x.b.Moderation]: a.a.createElement(r.a, {
						className: p.a.iconStyles
					})
				};
				return a.a.createElement("div", {
					className: Object(c.a)(t, p.a.AnnouncementContainer)
				}, a.a.createElement(v.a, null, w[n.icon], a.a.createElement("div", {
					className: Object(c.a)(p.a.Title, p.a.isAnnouncement)
				}, n.title), a.a.createElement(i.a, {
					className: p.a.CloseButton,
					onClick: E
				})), a.a.createElement("div", {
					className: Object(c.a)(p.a.Description, p.a.isAnnouncement)
				}, n.description), a.a.createElement(o.g, {
					className: p.a.Button,
					target: "_blank",
					href: n.announcementUrl,
					onClick: s
				}, n.buttonCta))
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/index.m.less": function(e, n, t) {
			e.exports = {
				Container: "_1VJk0sTYGQyG0P4nqFVu9v",
				container: "_1VJk0sTYGQyG0P4nqFVu9v",
				Circle: "HpLkUWI5bwugRHhQqw2dy",
				circle: "HpLkUWI5bwugRHhQqw2dy",
				LiveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				liveLabel: "_1TpaKvFUjcIRuxRj37oP3m",
				ViewCount: "_3bktW9VjGiBE1xME2TqZB7",
				viewCount: "_3bktW9VjGiBE1xME2TqZB7",
				Title: "_3p01VQUbuFFSnavk8xkFh7",
				title: "_3p01VQUbuFFSnavk8xkFh7",
				isAnnouncement: "swwQH0KgU8qdZABX8WnEl",
				OutboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				outboundLink: "_3CbMtQTkCfQvly2NbLKvkR",
				Description: "_3ddCMJofyzb6-UWHgIC9Sd",
				description: "_3ddCMJofyzb6-UWHgIC9Sd",
				AnnouncementContainer: "PSG6gLueWddB1kqvaOxoT",
				announcementContainer: "PSG6gLueWddB1kqvaOxoT",
				Button: "j5ti73p7EAjBJvJlSjppe",
				button: "j5ti73p7EAjBJvJlSjppe",
				CloseButton: "_29ji6lMZpwWMBLRk4eMGw-",
				closeButton: "_29ji6lMZpwWMBLRk4eMGw-",
				iconStyles: "_2E0bnlMJwNjmvW3Qsu8PlF"
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
//# sourceMappingURL=FeaturedLiveEntrypointAnnouncement.596d91cdc610b7f2bdc3.js.map