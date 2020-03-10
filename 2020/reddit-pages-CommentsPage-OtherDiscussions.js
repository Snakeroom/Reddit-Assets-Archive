// https://www.redditstatic.com/desktop2x/reddit-pages-CommentsPage-OtherDiscussions.5f1811aaefdcb14f6737.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
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
				a = t("./node_modules/reselect/es/index.js"),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/lessComponent.tsx"),
				l = t("./src/lib/makeListingKey/index.ts"),
				d = t("./src/reddit/components/Comments/States/index.tsx"),
				m = t("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				u = t("./src/reddit/components/ListingPostList/index.tsx"),
				O = t("./src/reddit/components/TrackingHelper/index.tsx"),
				p = t("./src/reddit/constants/page.ts"),
				g = t("./src/reddit/constants/postLayout.ts"),
				C = t("./src/reddit/helpers/path/index.ts"),
				b = t("./src/reddit/helpers/trackers/otherDiscussions.ts"),
				x = t("./src/reddit/helpers/trackers/screenview.ts"),
				D = t("./src/reddit/i18n/components.tsx"),
				h = t("./src/reddit/icons/fonts/Comment/index.tsx"),
				E = t("./src/reddit/selectors/listings.ts"),
				y = t("./src/reddit/selectors/posts.ts"),
				P = t("./src/reddit/pages/CommentsPage/OtherDiscussions/index.m.less"),
				_ = t.n(P),
				L = t("./src/reddit/pages/CommentsPage/CommentsNavigationPane/index.m.less"),
				j = t.n(L);
			const v = c.a.div("Container", _.a),
				I = Object(r.b)(() => Object(a.c)({
					apiError: (e, s) => {
						let {
							postId: t
						} = s;
						return Object(E.c)(e, {
							listingKey: Object(l.a)(t, null, {
								isOtherDiscussions: !0
							})
						})
					},
					apiPending: (e, s) => {
						let {
							postId: t
						} = s;
						return Object(E.d)(e, {
							listingKey: Object(l.a)(t, null, {
								isOtherDiscussions: !0
							})
						})
					},
					otherDiscussionsCount: y.B
				}));
			s.default = Object(O.b)(I(e => {
				let {
					apiError: s,
					apiPending: t,
					commentSort: n,
					isOverlay: r,
					language: a,
					otherDiscussionsCount: c,
					postId: O,
					postPermalink: E,
					sendEvent: y
				} = e;
				const P = Object(l.a)(O, null, {
						isOtherDiscussions: !0
					}),
					L = c > 0 ? c : 0;
				return i.a.createElement(v, null, i.a.createElement("div", {
					className: Object(o.a)(_.a.HeaderPane, j.a.CommentsNavigationPane)
				}, i.a.createElement("div", {
					className: _.a.OtherDiscussionsTitle
				}, i.a.createElement(D.c, null, i.a.createElement(D.b, {
					name: "otherDiscussionsCount"
				}, L), " ", "other", i.a.createElement(D.a, {
					name: "discussions",
					singular: " discussion",
					plural: " discussions",
					count: c
				}))), i.a.createElement(m.a, {
					className: j.a.OtherDiscussionsLink,
					isOverlay: r,
					onClick: () => y(Object(b.b)(O)),
					to: Object(C.b)(E)
				}, i.a.createElement(h.a, {
					className: _.a.CommentIcon,
					role: "presentation"
				}), i.a.createElement(D.c, null, "Return to comments"))), s && i.a.createElement(d.e, {
					apiError: s,
					commentId: null,
					language: a,
					postId: O,
					sort: n
				}), t && !s && i.a.createElement(d.f, null), !t && !s && i.a.createElement(u.a, {
					enableElementHiding: !1,
					forcedLayout: g.g.Compact,
					listingKey: P,
					listingName: p.c.OtherDiscussions,
					listingViewed: (e, s) => Object(x.d)(P, n, s, e),
					noPostsComponent: () => i.a.createElement(d.b, null),
					inSubredditOrProfile: !1,
					preventScrollOnMount: !0
				}))
			}))
		}
	}
]);
//# sourceMappingURL=reddit-pages-CommentsPage-OtherDiscussions.5f1811aaefdcb14f6737.js.map