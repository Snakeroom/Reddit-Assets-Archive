// https://www.redditstatic.com/desktop2x/Avatar.a2dfc0200ad64e4135e8.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Avatar"], {
		"./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx": function(e, a, t) {
			"use strict";
			var r = t("./node_modules/react/index.js"),
				s = t.n(r),
				n = t("./src/config.ts"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = t("./src/reddit/hooks/useTracking.ts"),
				i = t("./src/reddit/components/SnoovatarModal/index.m.less"),
				l = t.n(i);
			a.a = ({
				className: e
			}) => {
				const a = Object(d.a)();
				return Object(r.useEffect)(() => {
					a(c.c)
				}, [a]), s.a.createElement("div", {
					className: Object(o.a)(l.a.iframeContainer, e)
				}, s.a.createElement("iframe", {
					src: `${n.a.snoovatarUrl}/static/client/?platform=desktop`
				}))
			}
		},
		"./src/reddit/components/SnoovatarModal/index.m.less": function(e, a, t) {
			e.exports = {
				snoovatarModal: "_1kJxmNuSOWrudEvEj4lSc8",
				snoovatarModalIframeContainer: "_3s-GzuR9XtTMo39iEgLq_z",
				iframeContainer: "hrzwqhyhwMHUQUeis25Ny",
				loader: "_18QBIHixUfNNL8DkS_hw8K"
			}
		},
		"./src/reddit/pages/Avatar/index.m.less": function(e, a, t) {
			e.exports = {
				container: "_2Moi-yX3bvB_vnqKAGk7hu",
				content: "_3WuQYS3HUXsj1Z3hBTnsdb"
			}
		},
		"./src/reddit/pages/Avatar/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var r = t("./node_modules/react/index.js"),
				s = t.n(r),
				n = t("./src/reddit/components/SnoovatarModal/SnoovatarIframe.tsx"),
				o = t("./src/reddit/pages/Avatar/index.m.less"),
				c = t.n(o);
			a.default = function() {
				return s.a.createElement("div", {
					className: c.a.container
				}, s.a.createElement(n.a, {
					className: c.a.content
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Avatar.a2dfc0200ad64e4135e8.js.map