// https://www.redditstatic.com/desktop2x/reddit-components-ModHub-Content-ModQueue.a56dde6a2bc397b45080.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ModHub-Content-ModQueue"], {
		"./src/reddit/components/ModHub/Content/ModQueue.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				d = n.n(s),
				o = n("./src/app/strings/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/components/ModHub/InfoLink/index.tsx"),
				l = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				m = n("./src/reddit/components/ModQueueList/index.tsx"),
				p = n("./src/reddit/components/ModQueueList/LayoutNavigation.tsx"),
				g = n("./src/reddit/components/ModHub/Content/index.m.less"),
				b = n.n(g);
			t.default = e => d.a.createElement(l.a, {
				className: Object(i.a)(b.a.container, e.layout === c.g.Large ? b.a.isLargePostLayout : void 0)
			}, d.a.createElement(l.b, null, Object(o.a)(e.language, "subredditModeration.modQueue.".concat(e.pageName)), d.a.createElement(u.a, {
				linkUrl: "".concat(a.a.redditHelpUrl.modHelpCenter, "hc/en-us/articles/360010090132")
			})), d.a.createElement(p.a, {
				hideSubredditFilter: !0,
				language: e.language,
				postTypeFilter: e.postTypeFilter,
				sendEventWithName: e.sendEventWithName,
				showTypeFilter: e.pageName !== r.Pb.Unmoderated,
				subredditName: e.subredditName
			}), d.a.createElement(m.a, {
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
//# sourceMappingURL=reddit-components-ModHub-Content-ModQueue.a56dde6a2bc397b45080.js.map