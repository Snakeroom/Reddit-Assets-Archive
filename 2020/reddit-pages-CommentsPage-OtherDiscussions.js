// https://www.redditstatic.com/desktop2x/reddit-pages-CommentsPage-OtherDiscussions.d41180fc4ef62231b25d.js
// Retrieved at 8/3/2020, 10:10:05 AM by Reddit Dataminer v1.0.0
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
				O = t("./src/reddit/components/TrackingHelper/index.tsx"),
				p = t("./src/reddit/constants/page.ts"),
				b = t("./src/reddit/constants/postLayout.ts"),
				C = t("./src/reddit/helpers/path/index.ts"),
				h = t("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				g = t("./src/reddit/helpers/trackers/screenview.ts"),
				x = t("./src/reddit/icons/fonts/Comment/index.tsx"),
				D = t("./src/reddit/selectors/listings.ts"),
				_ = t("./src/reddit/selectors/posts.ts"),
				y = t("./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less"),
				P = t.n(y),
				E = t("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				L = t.n(E);
			const {
				fbt: j
			} = t("./node_modules/fbt/lib/FbtPublic.js"), v = a.a.div("Container", P.a), I = Object(r.b)(() => Object(o.c)({
				apiError: (e, s) => {
					let {
						postId: t
					} = s;
					return Object(D.c)(e, {
						listingKey: Object(d.a)(t, null, {
							isOtherDiscussions: !0
						})
					})
				},
				apiPending: (e, s) => {
					let {
						postId: t
					} = s;
					return Object(D.d)(e, {
						listingKey: Object(d.a)(t, null, {
							isOtherDiscussions: !0
						})
					})
				},
				otherDiscussionsCount: _.C
			}));
			s.default = Object(O.c)(I(e => {
				let {
					apiError: s,
					apiPending: t,
					commentSort: n,
					isOverlay: r,
					otherDiscussionsCount: o,
					postId: a,
					postPermalink: O,
					sendEvent: D
				} = e;
				const _ = Object(d.a)(a, null, {
						isOtherDiscussions: !0
					}),
					y = o > 0 ? o : 0;
				return i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(c.a)(P.a.HeaderPane, L.a.CommentsNavigationPane)
				}, i.a.createElement("div", {
					className: P.a.OtherDiscussionsTitle
				}, j._({
					"*": "{Other discussions count} other discussions",
					_1: "1 other discussion"
				}, [j._plural(y, "Other discussions count")], {
					hk: "3ee7xp"
				})), i.a.createElement(m.a, {
					className: L.a.OtherDiscussionsLink,
					isOverlay: r,
					onClick: () => D(Object(h.b)(a)),
					to: Object(C.b)(O)
				}, i.a.createElement(x.a, {
					className: P.a.CommentIcon,
					role: "presentation"
				}), j._("Return to comments", null, {
					hk: "HxD5d"
				}))), s && i.a.createElement(l.e, {
					apiError: s,
					commentId: null,
					postId: a,
					sort: n
				}), t && !s && i.a.createElement(l.f, null), !t && !s && i.a.createElement(u.a, {
					enableElementHiding: !1,
					forcedLayout: b.g.Compact,
					listingKey: _,
					listingName: p.c.OtherDiscussions,
					listingViewed: (e, s) => Object(g.e)(_, n, s, e),
					noPostsComponent: () => i.a.createElement(l.b, null),
					inSubredditOrProfile: !1,
					preventScrollOnMount: !0
				}))
			}))
		}
	}
]);
//# sourceMappingURL=reddit-pages-CommentsPage-OtherDiscussions.d41180fc4ef62231b25d.js.map