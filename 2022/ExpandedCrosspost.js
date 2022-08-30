// https://www.redditstatic.com/desktop2x/ExpandedCrosspost.3a4cd603466595ec5ff2.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ExpandedCrosspost"], {
		"./src/reddit/components/ExpandedCrossposts/index.m.less": function(s, e, t) {
			s.exports = {
				carousel: "_1azp9aRx1P22Ls2lBJJh3E"
			}
		},
		"./src/reddit/components/ExpandedCrossposts/index.tsx": function(s, e, t) {
			"use strict";
			t.r(e);
			var d = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./src/lib/makeListingKey/index.ts"),
				n = t("./node_modules/react/index.js"),
				i = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				c = t("./src/reddit/actions/otherDiscussions/index.ts"),
				a = t("./src/reddit/components/ItemCarousel/index.tsx"),
				l = t("./src/reddit/components/ItemCarousel/helpers.ts"),
				p = t("./src/reddit/constants/page.ts"),
				u = t("./src/reddit/selectors/posts.ts"),
				m = t("./src/reddit/components/ExpandedCrossposts/index.m.less"),
				x = t.n(m);
			e.default = s => {
				const {
					postId: e
				} = s, t = Object(r.d)(), {
					postIds: m
				} = Object(r.e)((s => {
					let {
						postId: e
					} = s;
					return s => ({
						postIds: Object(u.D)(s, Object(o.a)(e, null, {
							isOtherDiscussions: !0
						}), p.d.OtherDiscussions, !1)
					})
				})(s));
				Object(n.useEffect)(() => {
					t(Object(c.a)(e, {
						postId: e
					}))
				}, [e]);
				const _ = Object(n.useMemo)(() => m.map(s => ({
					id: s,
					type: l.a.CROSSPOST
				})), [e, null == m ? void 0 : m.length]);
				return i.a.createElement(a.a, {
					className: x.a.carousel,
					title: d.fbt._("Discussions in Other Communities", null, {
						hk: "C4dvh"
					}),
					hasPostIds: !0,
					size: "small",
					itemIds: _
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ExpandedCrosspost.3a4cd603466595ec5ff2.js.map