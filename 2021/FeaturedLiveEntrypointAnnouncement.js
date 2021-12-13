// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.30c34587f8e3e7661cee.js
// Retrieved at 12/13/2021, 2:50:06 PM by Reddit Dataminer v1.0.0
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
				a = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./src/lib/lessComponent.tsx"),
				l = t("./src/reddit/icons/svgs/Circle/index.tsx"),
				d = t("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				o = t("./src/reddit/layout/row/Inline/index.tsx"),
				v = t("./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less"),
				u = t.n(v);
			const _ = `${i.a.redditUrl}/live/`,
				m = c.a.a("Container", u.a),
				E = c.a.wrapped(l.a, "Circle", u.a),
				L = c.a.div("LiveLabel", u.a),
				x = c.a.div("ViewCount", u.a),
				h = c.a.div("Title", u.a),
				p = c.a.wrapped(d.a, "OutboundLink", u.a),
				w = c.a.div("Description", u.a);
			n.default = ({
				featuredLiveThread: e
			}) => r.a.createElement(m, {
				href: `${_}${e.id}`
			}, r.a.createElement(o.a, null, r.a.createElement(E, null), r.a.createElement(L, null, a.fbt._("live", null, {
				hk: "aD7Tn"
			})), r.a.createElement(w, null, "·"), r.a.createElement(x, null, a.fbt._({
				"*": "{number} viewers",
				_1: "1 viewer"
			}, [a.fbt._plural(e.viewerCount || 0, "number")], {
				hk: "49aRHF"
			}))), r.a.createElement(h, null, e.liveEventTitle, r.a.createElement(p, null)), r.a.createElement(w, null, e.description))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, n, t) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, n, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				a = t.n(i),
				s = t("./src/lib/classNames/index.ts"),
				r = t("./src/reddit/icons/svgs/Circle/index.m.less"),
				c = t.n(r);
			n.a = e => a.a.createElement("svg", {
				className: Object(s.a)(c.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, a.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, a.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, n, t) {
			"use strict";
			var i = t("./node_modules/react/index.js"),
				a = t.n(i);
			n.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), a.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.30c34587f8e3e7661cee.js.map