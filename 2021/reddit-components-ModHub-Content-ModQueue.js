// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.a091350165ec00391cd2.js
// Retrieved at 8/11/2021, 2:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				d = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				c = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = n("./src/reddit/components/ModQueueList/index.tsx"),
				p = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				b = n("./src/reddit/components/ModHub/Content/index.m.less"),
				_ = n.n(b);
			t.default = e => r.a.createElement(c.a, {
				className: Object(o.a)(_.a.container, e.layout === u.g.Large ? _.a.isLargePostLayout : void 0)
			}, r.a.createElement(c.b, null, (e => {
				switch (e) {
					case "modqueue":
						return d.fbt._("Mod Queue", null, {
							hk: "XBRcQ"
						});
					case "reports":
						return d.fbt._("Reports", null, {
							hk: "14I8Zy"
						});
					case "spam":
						return d.fbt._("Spam", null, {
							hk: "3JIGi7"
						});
					case "edited":
						return d.fbt._("Edited", null, {
							hk: "3BN3ms"
						});
					case "unmoderated":
						return d.fbt._("Unmoderated", null, {
							hk: "36ryPx"
						});
					default:
						return d.fbt._("Mod Queue", null, {
							hk: "XBRcQ"
						})
				}
			})(e.pageName), r.a.createElement(l.a, {
				linkUrl: `${s.a.redditModHelpUrl}/hc/en-us/articles/360010090132`
			})), r.a.createElement(p.a, {
				hideSubredditFilter: !0,
				postTypeFilter: e.postTypeFilter,
				sendEventWithName: e.sendEventWithName,
				showTypeFilter: e.pageName !== i.ac.Unmoderated,
				subredditName: e.subredditName
			}), r.a.createElement(m.a, {
				after: e.after,
				layout: e.layout,
				sendEventWithName: e.sendEventWithName,
				subredditName: e.subredditName,
				page: e.page,
				pageName: e.pageName,
				postTypeFilter: e.postTypeFilter
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.a091350165ec00391cd2.js.map