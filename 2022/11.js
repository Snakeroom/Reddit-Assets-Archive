// https://www.redditstatic.com/desktop2x/11.1caa70febbd9014445f0.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[11], {
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
				i = r("./src/reddit/selectors/posts.ts"),
				u = r("./src/redditGQL/types.ts"),
				a = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const l = {
					[s.rb.Edited]: u.q.Edited,
					[s.rb.Modqueue]: u.q.Mod,
					[s.rb.Reports]: u.q.Reported,
					[s.rb.Spam]: u.q.Removed,
					[s.rb.Unmoderated]: u.q.Unmoderated
				},
				p = {
					comments: u.p.Comment,
					links: u.p.Post
				};

			function f(e) {
				let {
					getState: t,
					queueType: r,
					options: s
				} = e;
				const u = t();
				let a, c;
				return s.only && (a = p[s.only]), s.after && (c = function(e, t) {
					const r = Object(n.a)(t) ? Object(i.G)(e, {
						postId: t
					}) : Object(d.b)(e, {
						commentId: t
					});
					if (r) return Object(o.btoa)(`${r.id}|${r.created}`)
				}(u, s.after)), {
					queueType: l[r],
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
				const r = {
					posts: {},
					comments: {},
					reports: {},
					modqueue: [],
					authorFlair: {}
				};
				return t && t.edges ? (t.edges.forEach(e => {
					var t, o;
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
						const o = Object(a.a)(e);
						r.comments[o.id] = o, r.modqueue.push(o.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (t = Object(c.a)(d)) || void 0 === t ? void 0 : t[0] : null;
						r.authorFlair[i] = {
							...r.authorFlair[i],
							...(null == n ? void 0 : n.name) ? {
								[null == n ? void 0 : n.name]: u
							} : {}
						};
						const m = [];
						o.modReports.forEach(e => {
							m.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							m.push({
								type: "user",
								reason: e[0]
							})
						}), r.reports[o.id] = m
					}
					if (n === h.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const t = Object(m.f)(e);
						r.posts[t.id] = t, r.modqueue.push(t.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (o = Object(c.a)(d)) || void 0 === o ? void 0 : o[0] : null;
						r.authorFlair[i] = {
							...r.authorFlair[i],
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
						}), r.reports[t.id] = a
					}
				}), r) : r
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(h || (h = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/11.1caa70febbd9014445f0.js.map