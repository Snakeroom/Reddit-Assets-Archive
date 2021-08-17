// https://www.redditstatic.com/desktop2x/reddit-pages-CommentsPage-OtherDiscussions.3a9010c457e54bd9b083.js
// Retrieved at 8/16/2021, 8:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-CommentsPage-OtherDiscussions"], {
		"./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less": function(e, s, t) {
			e.exports = {
				Container: "ylSOkbhJXzLxdygG02Py-",
				container: "ylSOkbhJXzLxdygG02Py-",
				HeaderPane: "lRD1iRINbsXDXJa5y-KCy",
				headerPane: "lRD1iRINbsXDXJa5y-KCy",
				CommentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				commentIcon: "HTwZUIRm4M5CyilvzbYRJ",
				OtherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT",
				otherDiscussionsTitle: "_193dW7O_ACLnCIl6tc1PAT"
			}
		},
		"./src/reddit/pages/CommentsPage/OtherDiscussions/index.tsx": function(e, s, t) {
			"use strict";
			t.r(s);
			var n = t("./node_modules/react/index.js"),
				i = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/lib/classNames/index.ts"),
				a = t("./src/lib/lessComponent.tsx"),
				d = t("./src/lib/makeListingKey/index.ts"),
				l = t("./src/reddit/components/Comments/States/index.tsx"),
				m = t("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = t("./src/reddit/components/ListingPostList/index.tsx"),
				p = t("./src/reddit/components/TrackingHelper/index.tsx"),
				O = t("./src/reddit/constants/page.ts"),
				b = t("./src/reddit/constants/postLayout.ts"),
				g = t("./src/reddit/helpers/path/index.ts"),
				x = t("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				h = t("./src/reddit/helpers/trackers/screenview.ts"),
				C = t("./src/reddit/icons/fonts/Comment/index.tsx"),
				D = t("./src/reddit/selectors/listings.ts"),
				_ = t("./src/reddit/selectors/posts.ts"),
				y = t("./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less"),
				P = t.n(y),
				E = t("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				L = t.n(E);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), v = a.a.div("Container", P.a), I = Object(r.b)(() => Object(o.c)({
				apiError: (e, {
					postId: s
				}) => Object(D.c)(e, {
					listingKey: Object(d.a)(s, null, {
						isOtherDiscussions: !0
					})
				}),
				apiPending: (e, {
					postId: s
				}) => Object(D.d)(e, {
					listingKey: Object(d.a)(s, null, {
						isOtherDiscussions: !0
					})
				}),
				post: _.H
			}));
			s.default = Object(p.c)(I(({
				apiError: e,
				apiPending: s,
				commentSort: t,
				isOverlay: n,
				post: r,
				postId: o,
				postPermalink: a,
				sendEvent: p
			}) => {
				var D;
				const _ = null !== (D = r.numDuplicates) && void 0 !== D ? D : 0,
					y = Object(d.a)(o, null, {
						isOtherDiscussions: !0
					}),
					E = _ > 0 ? _ : 0;
				return i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(c.a)(P.a.HeaderPane, L.a.CommentsNavigationPane)
				}, i.a.createElement("div", {
					className: P.a.OtherDiscussionsTitle
				}, j._({
					"*": "{Other discussions count} other discussions",
					_1: "1 other discussion"
				}, [j._plural(E, "Other discussions count")], {
					hk: "3ee7xp"
				})), i.a.createElement(m.a, {
					className: L.a.OtherDiscussionsLink,
					isOverlay: n,
					onClick: () => p(Object(x.b)(o)),
					to: Object(g.b)(a)
				}, i.a.createElement(C.a, {
					className: P.a.CommentIcon,
					role: "presentation"
				}), j._("Return to comments", null, {
					hk: "HxD5d"
				}))), e && i.a.createElement(l.e, {
					apiError: e,
					commentId: null,
					postId: o,
					sort: t
				}), s && !e && i.a.createElement(l.f, null), !s && !e && i.a.createElement(u.a, {
					enableElementHiding: !1,
					forcedLayout: b.g.Compact,
					listingKey: y,
					listingName: O.c.OtherDiscussions,
					listingViewed: (e, s) => Object(h.f)(y, t, s, e),
					noPostsComponent: () => i.a.createElement(l.b, null),
					inSubredditOrProfile: !1,
					preventScrollOnMount: !0
				}))
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-CommentsPage-OtherDiscussions.3a9010c457e54bd9b083.js.map