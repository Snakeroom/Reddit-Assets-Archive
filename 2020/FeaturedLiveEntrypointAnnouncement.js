// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.b80e0d246b9d2b4f8b64.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
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
				a = t("./node_modules/react/index.js"),
				s = t.n(a),
				c = t("./src/lib/lessComponent.tsx"),
				l = t("./src/reddit/icons/svgs/Circle/index.tsx"),
				d = t("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				o = t("./src/reddit/layout/row/Inline/index.tsx"),
				u = t("./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less"),
				_ = t.n(u);
			const v = "".concat(i.a.redditUrl, "/live/"),
				m = c.a.a("Container", _.a),
				E = c.a.wrapped(l.a, "Circle", _.a),
				L = c.a.div("LiveLabel", _.a),
				x = c.a.div("ViewCount", _.a),
				p = c.a.div("Title", _.a),
				h = c.a.wrapped(d.a, "OutboundLink", _.a),
				w = c.a.div("Description", _.a);
			n.default = e => {
				let {
					featuredLiveThread: n
				} = e;
				return s.a.createElement(m, {
					href: "".concat(v).concat(n.id)
				}, s.a.createElement(o.a, null, s.a.createElement(E, null), s.a.createElement(L, null, r.fbt._("live", null, {
					hk: "aD7Tn"
				})), s.a.createElement(w, null, "·"), s.a.createElement(x, null, r.fbt._({
					"*": "{number} viewers",
					_1: "1 viewer"
				}, [r.fbt._plural(n.viewerCount || 0, "number")], {
					hk: "49aRHF"
				}))), s.a.createElement(p, null, n.title, s.a.createElement(h, null)), s.a.createElement(w, null, n.description))
			}
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
				a = t("./src/lib/classNames/index.ts"),
				s = t("./src/reddit/icons/svgs/Circle/index.m.less"),
				c = t.n(s);
			n.a = e => r.a.createElement("svg", {
				className: Object(a.a)(c.a.circle, e.className),
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
//# sourceMappingURL=FeaturedLiveEntrypointAnnouncement.b80e0d246b9d2b4f8b64.js.map