// https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.54e20a025bda7d7f2150.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
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
				d = t.n(a),
				l = t("./src/lib/lessComponent.tsx"),
				s = t("./src/reddit/icons/svgs/Circle/index.tsx"),
				o = t("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				c = t("./src/reddit/layout/row/Inline/index.tsx"),
				_ = t("./src/reddit/components/FeaturedLiveEntrypoint/LiveThread/index.m.less"),
				u = t.n(_);
			const v = `${i.a.redditUrl}/live/`,
				L = l.a.a("Container", u.a),
				E = l.a.wrapped(s.a, "Circle", u.a),
				m = l.a.div("LiveLabel", u.a),
				p = l.a.div("ViewCount", u.a),
				h = l.a.div("Title", u.a),
				b = l.a.wrapped(o.a, "OutboundLink", u.a),
				V = l.a.div("Description", u.a);
			n.default = ({
				featuredLiveThread: e
			}) => d.a.createElement(L, {
				href: `${v}${e.id}`
			}, d.a.createElement(c.a, null, d.a.createElement(E, null), d.a.createElement(m, null, r.fbt._("live", null, {
				hk: "aD7Tn"
			})), d.a.createElement(V, null, "·"), d.a.createElement(p, null, r.fbt._({
				"*": "{number} viewers",
				_1: "1 viewer"
			}, [r.fbt._plural(e.viewerCount || 0, "number")], {
				hk: "49aRHF"
			}))), d.a.createElement(h, null, e.liveEventTitle, d.a.createElement(b, null)), d.a.createElement(V, null, e.description))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FeaturedLiveEntrypointAnnouncement.54e20a025bda7d7f2150.js.map