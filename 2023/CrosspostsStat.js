// https://www.redditstatic.com/desktop2x/CrosspostsStat.a632e9b0462c83878d32.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CrosspostsStat"], {
		"./src/reddit/components/CreatorStats/CrosspostsStat.m.less": function(e, s, t) {
			e.exports = {
				expandedCrosspostsStat: "_3lEoTL6D5cTOgAyKCbUHId",
				expandedCrosspostedDestination: "_8DIJfssiMg0HZ4gY6MwCR",
				subredditHoveredName: "_1nv1yL_SWy9nFWxjfau2eP",
				expandedCrosspostedIcon: "_33G0UMckKYc73FTmbRlXNF",
				defaultExpandedIcon: "_1HJkf4p6Votb8o-R6lC7NE",
				subredditName: "_3nbomvObbOOIUxRA98gCHL",
				previewCrosspostsStat: "_1OTX7e2vvxoYOYlYgNlUrT",
				previewCrosspostedIcon: "eUpTr_TIPZQXECxfU_v6",
				defaultPreviewIcon: "_1Zr0nXozb5ARkJPsj0A6B8",
				previewIconsRemainder: "jNBLOYezUbj0Kja0jIiH8"
			}
		},
		"./src/reddit/components/CreatorStats/CrosspostsStat.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			t("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = t("./src/lib/classNames/index.ts"),
				r = t("./node_modules/react/index.js"),
				a = t.n(r),
				n = t("./node_modules/react-redux/es/index.js"),
				d = t("./src/reddit/components/SubredditIcon/index.tsx"),
				c = t("./src/reddit/endpoints/post/create.ts"),
				i = t("./src/reddit/helpers/trackers/creatorStats.ts"),
				l = t("./src/reddit/hooks/useTracking.ts"),
				p = t("./src/reddit/selectors/profile.ts"),
				m = t("./src/reddit/selectors/subreddit.ts"),
				b = t("./src/reddit/components/CreatorStats/CrosspostsStat.m.less"),
				u = t.n(b);
			s.default = e => {
				let {
					crosspostedDestinations: s,
					onClick: t,
					isExpanded: b,
					postId: C,
					postViews: _
				} = e;
				const O = Object(l.a)(),
					j = Object(n.f)(),
					x = Object(r.useCallback)((e, s) => {
						const t = j.getState(),
							o = Object(c.f)(e),
							r = s.substring(2),
							a = Object(m.I)(t, r) || Object(p.o)(t, r);
						O(Object(i.a)(C, e, o, a, r, _))
					}, [j, O, C, _]);
				return a.a.createElement("div", {
					className: b ? u.a.expandedCrosspostsStat : u.a.previewCrosspostsStat,
					onClick: t
				}, b ? Object.keys(s).map(e => {
					const t = s[e],
						r = t.postUrl;
					return a.a.createElement("a", {
						className: u.a.expandedCrosspostedDestination,
						key: `expanded-${e}`,
						href: r,
						onClick: () => x(r, e)
					}, a.a.createElement(d.b, {
						className: Object(o.a)(u.a.expandedCrosspostedIcon, {
							[u.a.defaultExpandedIcon]: !t.iconUrl
						}),
						iconUrl: t.iconUrl || void 0
					}), a.a.createElement("span", {
						className: Object(o.a)(u.a.subredditName, u.a.subredditHoveredName)
					}, e))
				}) : a.a.createElement(a.a.Fragment, null, Object.keys(s).slice(0, 2).map(e => {
					const t = s[e];
					return a.a.createElement(d.b, {
						className: Object(o.a)(u.a.previewCrosspostedIcon, {
							[u.a.defaultPreviewIcon]: !t.iconUrl
						}),
						iconUrl: t.iconUrl || void 0,
						key: `preview-${e}`
					})
				}), Object.keys(s).length > 2 && a.a.createElement("span", {
					className: u.a.previewIconsRemainder
				}, `+${Object.keys(s).length-2}`)))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CrosspostsStat.a632e9b0462c83878d32.js.map