// https://www.redditstatic.com/desktop2x/9.ffc12885a69d79d4d670.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[9], {
		"./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "transformGatewayParamsToGQLVariables", (function() {
				return h
			})), r.d(t, "normalizeModQueueListingFromGql", (function() {
				return q
			}));
			var o = r("./node_modules/Base64/base64.js"),
				s = r("./src/lib/constants/index.ts"),
				n = r("./src/reddit/helpers/isPost.ts"),
				d = r("./src/reddit/selectors/commentSelector.ts"),
				i = r("./src/reddit/selectors/platform.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				u = r("./src/redditGQL/types.ts"),
				c = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				m = r("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				p = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const l = {
					[s.rb.Edited]: u.p.Edited,
					[s.rb.Modqueue]: u.p.Mod,
					[s.rb.Reports]: u.p.Reported,
					[s.rb.Spam]: u.p.Removed,
					[s.rb.Unmoderated]: u.p.Unmoderated
				},
				f = {
					comments: u.o.Comment,
					links: u.o.Post
				};

			function h({
				getState: e,
				queueType: t,
				options: r
			}) {
				const s = e(),
					u = Object(i.c)(s);
				let c, m;
				return r.only && (c = f[r.only]), r.after && (m = function(e, t) {
					const r = Object(n.a)(t) ? Object(a.G)(e, {
						postId: t
					}) : Object(d.b)(e, {
						commentId: t
					});
					if (r) return Object(o.btoa)(`${r.id}|${r.created}`)
				}(s, r.after)), {
					queueType: l[t],
					...!!c && {
						itemTypes: c
					},
					...!!u && {
						subredditIds: [u]
					},
					...!!m && {
						after: m
					}
				}
			}
			var b;

			function q({
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
					if (n === b.Comment) {
						const {
							commentInfo: e
						} = s;
						if (!e) return;
						const o = Object(c.a)(e);
						t.comments[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, a = d ? null === (r = Object(m.a)(d)) || void 0 === r ? void 0 : r[0] : null;
						t.authorFlair[i] = {
							...t.authorFlair[i],
							[n.name]: a
						};
						const u = [];
						o.modReports.forEach(e => {
							u.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							u.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[o.id] = u
					}
					if (n === b.Post) {
						const {
							postInfo: e
						} = s;
						if (!e) return;
						const r = Object(p.f)(e);
						t.posts[r.id] = r, t.modqueue.push(r.id);
						const {
							authorInfo: n,
							authorFlair: d
						} = e, a = d ? null === (o = Object(m.a)(d)) || void 0 === o ? void 0 : o[0] : null;
						t.authorFlair[i] = {
							...t.authorFlair[i],
							[n.name]: a
						};
						const u = [];
						r.modReports.forEach(e => {
							u.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), r.userReports.forEach(e => {
							u.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[r.id] = u
					}
				}), t) : t
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(b || (b = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/9.ffc12885a69d79d4d670.js.map