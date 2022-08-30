// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.ec9024afef2b1ba11b4c.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				r = t("./node_modules/react/index.js"),
				d = t.n(r),
				l = t("./src/lib/lessComponent.tsx"),
				s = t("./src/reddit/icons/svgs/Circle/index.tsx"),
				c = t("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				o = t("./src/reddit/layout/row/Inline/index.tsx"),
				u = t("./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less"),
				_ = t.n(u);
			const v = `${i.a.redditUrl}/live/`,
				L = l.a.a("Container", _.a),
				m = l.a.wrapped(s.a, "Circle", _.a),
				E = l.a.div("LiveLabel", _.a),
				h = l.a.div("ViewCount", _.a),
				p = l.a.div("Title", _.a),
				V = l.a.wrapped(c.a, "OutboundLink", _.a),
				w = l.a.div("Description", _.a);
			n.default = e => {
				let {
					featuredLiveThread: n
				} = e;
				return d.a.createElement(L, {
					href: `${v}${n.id}`
				}, d.a.createElement(o.a, null, d.a.createElement(m, null), d.a.createElement(E, null, a.fbt._("live", null, {
					hk: "aD7Tn"
				})), d.a.createElement(w, null, "·"), d.a.createElement(h, null, a.fbt._({
					"*": "{number} viewers",
					_1: "1 viewer"
				}, [a.fbt._plural(n.viewerCount || 0, "number")], {
					hk: "49aRHF"
				}))), d.a.createElement(p, null, n.liveEventTitle, d.a.createElement(V, null)), d.a.createElement(w, null, n.description))
			}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.ec9024afef2b1ba11b4c.js.map