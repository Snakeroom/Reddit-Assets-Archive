// https://www.redditstatic.com/desktop2x/7.c9a1523f7d1bb1d311f2.js
// Retrieved at 1/18/2022, 12:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[7], {
		"./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "transformGatewayParamsToGQLVariables", (function() {
				return f
			})), r.d(t, "normalizeModQueueListingFromGql", (function() {
				return b
			}));
			var o = r("./node_modules/Base64/base64.js"),
				s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isPost.ts"),
				d = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/reddit/selectors/platform.ts"),
				u = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/redditGQL/types.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const p = {
					[s.rb.Edited]: a.k.Edited,
					[s.rb.Modqueue]: a.k.Mod,
					[s.rb.Reports]: a.k.Reported,
					[s.rb.Spam]: a.k.Removed,
					[s.rb.Unmoderated]: a.k.Unmoderated
				},
				l = {
					comments: a.j.Comment,
					links: a.j.Post
				};

			function f({
				getState: e,
				queueType: t,
				options: r
			}) {
				const s = e(),
					a = Object(i.c)(s);
				let c, m;
				return r.only && (c = l[r.only]), r.after && (m = function(e, t) {
					const r = Object(n.a)(t) ? Object(u.H)(e, {
						postId: t
					}) : Object(d.b)(e, {
						commentId: t
					});
					if (r) return Object(o.btoa)(`${r.id}|${r.created}`)
				}(s, r.after)), {
					queueType: p[t],
					...!!c && {
						itemTypes: c
					},
					...!!a && {
						subredditIds: [a]
					},
					...!!m && {
						after: m
					}
				}
			}
			var h;

			function b({
				modQueueItems: e
			}) {
				const t = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {}
				};
				return e && e.edges ? (e.edges.forEach(e => {
					if (!e) return;
					const {
						node: r
					} = e;
					if (!r) return;
					const {
						__typename: o,
						subredditInfo: s
					} = r;
					if (!s) return;
					const {
						id: n
					} = s;
					if (o === h.Comment) {
						const {
							commentInfo: e
						} = r;
						if (!e) return;
						const o = Object(c.a)(e);
						t.comments[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: s,
							authorFlair: d
						} = e;
						t.authorFlair[n] = {
							...t.authorFlair[n],
							[s.name]: d
						};
						const i = [];
						o.modReports.forEach(e => {
							i.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							i.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[o.id] = i
					}
					if (o === h.Post) {
						const {
							postInfo: e
						} = r;
						if (!e) return;
						const o = Object(m.f)(e);
						t.posts[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: s,
							authorFlair: d
						} = e;
						t.authorFlair[n] = {
							...t.authorFlair[n],
							[s.name]: d
						};
						const i = [];
						o.modReports.forEach(e => {
							i.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							i.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[o.id] = i
					}
				}), t) : t
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(h || (h = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/7.c9a1523f7d1bb1d311f2.js.map