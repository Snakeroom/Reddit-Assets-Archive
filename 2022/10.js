// https://www.redditstatic.com/desktop2x/10.79389f25d460624495ed.js
// Retrieved at 4/13/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[10], {
		"./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "transformGatewayParamsToGQLVariables", (function() {
				return f
			})), o.d(t, "normalizeModQueueListingFromGql", (function() {
				return b
			}));
			var r = o("./node_modules/Base64/base64.js"),
				s = o("./src/lib/constants/index.ts"),
				n = o("./src/reddit/helpers/isPost.ts"),
				d = o("./src/reddit/selectors/commentSelector.ts"),
				i = o("./src/reddit/selectors/posts.ts"),
				u = o("./src/redditGQL/types.ts"),
				a = o("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				c = o("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				m = o("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const l = {
					[s.sb.Edited]: u.q.Edited,
					[s.sb.Modqueue]: u.q.Mod,
					[s.sb.Reports]: u.q.Reported,
					[s.sb.Spam]: u.q.Removed,
					[s.sb.Unmoderated]: u.q.Unmoderated
				},
				p = {
					comments: u.p.Comment,
					links: u.p.Post
				};

			function f(e) {
				let {
					getState: t,
					queueType: o,
					options: s
				} = e;
				const u = t();
				let a, c;
				return s.only && (a = p[s.only]), s.after && (c = function(e, t) {
					const o = Object(n.a)(t) ? Object(i.G)(e, {
						postId: t
					}) : Object(d.b)(e, {
						commentId: t
					});
					if (o) return Object(r.btoa)(`${o.id}|${o.created}`)
				}(u, s.after)), {
					queueType: l[o],
					...!!a && {
						itemTypes: a
					},
					...!!s.subreddit && {
						subredditIds: [s.subreddit]
					},
					...!!c && {
						after: c
					}
				}
			}
			var h;

			function b(e) {
				let {
					modQueueItems: t
				} = e;
				const o = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {}
				};
				return t && t.edges ? (t.edges.forEach(e => {
					var t, r;
					if (!e) return;
					const {
						node: s
					} = e;
					if (!s) return;
					const {
						__typename: n,
						subredditInfo: d
					} = s;
					if (!d) return;
					const {
						id: i
					} = d;
					if (n === h.Comment) {
						const {
							commentInfo: e
						} = s;
						if (!e) return;
						const r = Object(a.a)(e);
						o.comments[r.id] = r, o.modqueue.push(r.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (t = Object(c.a)(d)) || void 0 === t ? void 0 : t[0] : null;
						o.authorFlair[i] = {
							...o.authorFlair[i],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: u
							} : {}
						};
						const m = [];
						r.modReports.forEach(e => {
							m.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), r.userReports.forEach(e => {
							m.push({
								type: "user",
								reason: e[0]
							})
						}), o.reports[r.id] = m
					}
					if (n === h.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const t = Object(m.f)(e);
						o.posts[t.id] = t, o.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (r = Object(c.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						o.authorFlair[i] = {
							...o.authorFlair[i],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: u
							} : {}
						};
						const a = [];
						t.modReports.forEach(e => {
							a.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), t.userReports.forEach(e => {
							a.push({
								type: "user",
								reason: e[0]
							})
						}), o.reports[t.id] = a
					}
				}), o) : o
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(h || (h = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/10.79389f25d460624495ed.js.map