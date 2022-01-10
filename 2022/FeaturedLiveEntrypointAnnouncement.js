// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.695758f4a86e88c74e65.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FeaturedLiveEntrypointAnnouncement"], {
		"./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less": function(e, n, t) {
			e.exports = {
				Container: "_3n2dVRvVNI_qdLsP8jgVp_",
				container: "_3n2dVRvVNI_qdLsP8jgVp_",
				Circle: "_1vSHSyxQTBjU9NvRjqghqZ",
				circle: "_1vSHSyxQTBjU9NvRjqghqZ",
				LiveLabel: "_1AgU84QKhaV16TD8j0NPRV",
				liveLabel: "_1AgU84QKhaV16TD8j0NPRV",
				ViewCount: "_2FHE8dLDvP-_FiE3BeKM2K",
				viewCount: "_2FHE8dLDvP-_FiE3BeKM2K",
				Title: "_1nh8zk_f1titk-VSAnhiih",
				title: "_1nh8zk_f1titk-VSAnhiih",
				isAnnouncement: "_24gJ2ztscVR5I1kErZM0RZ",
				OutboundLink: "_3qEvt6QyUmwTPZcIn_j7RC",
				outboundLink: "_3qEvt6QyUmwTPZcIn_j7RC",
				Description: "_3Kee3kLVhyMeSteNy5REJC",
				description: "_3Kee3kLVhyMeSteNy5REJC"
			}
		},
		"./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var i = t("./src/config.ts"),
				r = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				a = t.n(s),
				l = t("./src/lib/lessComponent.tsx"),
				c = t("./src/reddit/icons/svgs/Circle/index.tsx"),
				d = t("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				o = t("./src/reddit/layout/row/Inline/index.tsx"),
				u = t("./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less"),
				_ = t.n(u);
			const v = `${i.a.redditUrl}/live/`,
				m = l.a.a("Container", _.a),
				E = l.a.wrapped(c.a, "Circle", _.a),
				L = l.a.div("LiveLabel", _.a),
				x = l.a.div("ViewCount", _.a),
				p = l.a.div("Title", _.a),
				h = l.a.wrapped(d.a, "OutboundLink", _.a),
				w = l.a.div("Description", _.a);
			n.default = ({
				featuredLiveThread: e
			}) => a.a.createElement(m, {
				href: `${v}${e.id}`
			}, a.a.createElement(o.a, null, a.a.createElement(E, null), a.a.createElement(L, null, r.fbt._("live", null, {
				hk: "aD7Tn"
			})), a.a.createElement(w, null, "·"), a.a.createElement(x, null, r.fbt._({
				"*": "{number} viewers",
				_1: "1 viewer"
			}, [r.fbt._plural(e.viewerCount || 0, "number")], {
				hk: "49aRHF"
			}))), a.a.createElement(p, null, e.liveEventTitle, a.a.createElement(h, null)), a.a.createElement(w, null, e.description))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, n, t) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, n, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				r = t.n(i),
				s = t("./src/lib/classNames/index.ts"),
				a = t("./src/reddit/icons/svgs/Circle/index.m.less"),
				l = t.n(a);
			n.a = e => r.a.createElement("svg", {
				className: Object(s.a)(l.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.695758f4a86e88c74e65.js.map