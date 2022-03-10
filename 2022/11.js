// https://www.redditstatic.com/desktop2x/11.3306fdcc8e2e234892da.js
// Retrieved at 3/10/2022, 4:40:07 PM by Reddit Dataminer v1.0.0
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
					[s.rb.Edited]: u.p.Edited,
					[s.rb.Modqueue]: u.p.Mod,
					[s.rb.Reports]: u.p.Reported,
					[s.rb.Spam]: u.p.Removed,
					[s.rb.Unmoderated]: u.p.Unmoderated
				},
				p = {
					comments: u.o.Comment,
					links: u.o.Post
				};

			function f({
				getState: e,
				queueType: t,
				options: r
			}) {
				const s = e();
				let u, a;
				return r.only && (u = p[r.only]), r.after && (a = function(e, t) {
					const r = Object(n.a)(t) ? Object(i.G)(e, {
						postId: t
					}) : Object(d.b)(e, {
						commentId: t
					});
					if (r) return Object(o.btoa)(`${r.id}|${r.created}`)
				}(s, r.after)), {
					queueType: l[t],
					...!!u && {
						itemTypes: u
					},
					...!!r.subreddit && {
						subredditIds: [r.subreddit]
					},
					...!!a && {
						after: a
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
					var r, o;
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
						t.comments[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (r = Object(c.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						t.authorFlair[i] = {
							...t.authorFlair[i],
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
						}), t.reports[o.id] = m
					}
					if (n === h.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const r = Object(m.f)(e);
						t.posts[r.id] = r, t.modqueue.push(r.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, u = d ? null === (o = Object(c.a)(d)) || void 0 === o ? void 0 : o[0] : null;
						t.authorFlair[i] = {
							...t.authorFlair[i],
							[n.name]: u
						};
						const a = [];
						r.modReports.forEach(e => {
							a.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), r.userReports.forEach(e => {
							a.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[r.id] = a
					}
				}), t) : t
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(h || (h = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/11.3306fdcc8e2e234892da.js.map