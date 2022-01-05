// https://www.redditstatic.com/desktop2x/2.957bbb13d48821679cfa.js
// Retrieved at 1/5/2022, 10:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[2], {
		"./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts": function(e, t, r) {
			"use strict";
			var o = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/helpers/graphql/helpers.ts"),
				d = r("./src/reddit/helpers/graphql/normalizeModeratorPartFromGql/index.ts"),
				i = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				n = r("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				a = r("./src/reddit/models/Post/index.ts"),
				c = r("./src/reddit/models/PostCreationForm/index.ts"),
				l = r("./src/reddit/models/User/index.ts");
			const u = e => ({
					richtextContent: e.content && e.content.richtext ? Object(s.f)(e.content.richtext) : {},
					type: "rtjson",
					rteMode: c.i.RICH_TEXT
				}),
				m = (e, t) => !(!e || !t || Object(i.e)(t) || !t.authorInfo) && Object(n.b)(e) === Object(n.b)(t.authorInfo),
				p = e => e && !Object(i.e)(e) && e.authorInfo ? Object(n.b)(e.authorInfo) : null;
			t.a = e => {
				const {
					associatedAward: t,
					authorInfo: r,
					awardings: i,
					content: c,
					createdAt: h,
					distinguishedAs: b,
					editedAt: f,
					id: I,
					isGildable: j,
					isScoreHidden: O,
					isStickied: q,
					isSaved: y,
					parent: A,
					permalink: _,
					postInfo: g,
					score: w,
					voteState: R
				} = e, C = "ADMIN" === b, F = "MODERATOR" === b, x = i ? Object(s.b)(i) : void 0, E = r && r.__typename === l.c.AvailableRedditor && r.isCakeDayNow || !1, S = r && r.__typename === l.c.AvailableRedditor && r.isPremiumMember || !1, G = {
					allAwardings: x,
					associatedAward: t,
					author: r && Object(n.b)(r) || o.E,
					authorId: r && r.id || "",
					body: c && c.html || "",
					bodyMD: c && c.markdown || "",
					created: Object(s.e)(h) / 1e3,
					distinguishType: b || "",
					editedAt: Object(s.e)(f) / 1e3 || null,
					id: I,
					isAdmin: C,
					isAuthorCakeday: E,
					isAuthorPremium: S,
					isGildable: j,
					isMod: F,
					isOp: m(r, g),
					isSaved: y,
					isScoreHidden: O,
					isStickied: q,
					markdown: c && c.markdown || "",
					media: u(e),
					parentId: A && A.id,
					permalink: `https://www.reddit.com${_}`,
					postAuthor: p(g),
					postId: g && g.id || "",
					postTitle: g && g.title || null,
					score: w || 0,
					subredditId: "",
					voteState: Object(s.d)(R),
					...Object(d.a)(e),
					collapsed: !1,
					collapsedReason: null,
					collapsedBecauseCrowdControl: !1,
					collapsedReasonCode: null,
					isDeleted: !1,
					isLocked: !1,
					deletedBy: null,
					sendReplies: !0,
					modReports: [],
					userReports: [],
					isSystem: !1
				};
				return e.postInfo && Object(a.n)(e.postInfo) ? G.subredditId = e.postInfo.subreddit.id : e.postInfo && Object(a.l)(e.postInfo) && (G.subredditId = e.postInfo.profile.id), G
			}
		},
		"./src/reddit/helpers/graphql/normalizeModQueueListingFromGql/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "transformGatewayParamsToGQLVariables", (function() {
				return h
			})), r.d(t, "normalizeModQueueListingFromGql", (function() {
				return f
			}));
			var o = r("./node_modules/Base64/base64.js"),
				s = r("./src/lib/constants/index.ts"),
				d = r("./src/reddit/helpers/isPost.ts"),
				i = r("./src/reddit/selectors/commentSelector.ts"),
				n = r("./src/reddit/selectors/platform.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/redditGQL/types.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				u = r("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const m = {
					[s.rb.Edited]: c.j.Edited,
					[s.rb.Modqueue]: c.j.Mod,
					[s.rb.Reports]: c.j.Reported,
					[s.rb.Spam]: c.j.Removed,
					[s.rb.Unmoderated]: c.j.Unmoderated
				},
				p = {
					comments: c.i.Comment,
					links: c.i.Post
				};

			function h({
				getState: e,
				queueType: t,
				options: r
			}) {
				const s = e(),
					c = Object(n.c)(s);
				let l, u;
				return r.only && (l = p[r.only]), r.after && (u = function(e, t) {
					const r = Object(d.a)(t) ? Object(a.H)(e, {
						postId: t
					}) : Object(i.b)(e, {
						commentId: t
					});
					if (r) return Object(o.btoa)(`${r.id}|${r.created}`)
				}(s, r.after)), {
					queueType: m[t],
					...!!l && {
						itemTypes: l
					},
					...!!c && {
						subredditIds: [c]
					},
					...!!u && {
						after: u
					}
				}
			}
			var b;

			function f({
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
						id: d
					} = s;
					if (o === b.Comment) {
						const {
							commentInfo: e
						} = r;
						if (!e) return;
						const o = Object(l.a)(e);
						t.comments[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: s,
							authorFlair: i
						} = e;
						t.authorFlair[d] = {
							...t.authorFlair[d],
							[s.name]: i
						};
						const n = [];
						o.modReports.forEach(e => {
							n.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							n.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[o.id] = n
					}
					if (o === b.Post) {
						const {
							postInfo: e
						} = r;
						if (!e) return;
						const o = Object(u.f)(e);
						t.posts[o.id] = o, t.modqueue.push(o.id);
						const {
							authorInfo: s,
							authorFlair: i
						} = e;
						t.authorFlair[d] = {
							...t.authorFlair[d],
							[s.name]: i
						};
						const n = [];
						o.modReports.forEach(e => {
							n.push({
								type: "moderator",
								reason: e[0],
								reporter: e[1]
							})
						}), o.userReports.forEach(e => {
							n.push({
								type: "user",
								reason: e[0]
							})
						}), t.reports[o.id] = n
					}
				}), t) : t
			}! function(e) {
				e.Comment = "ModQueueItemComment", e.Post = "ModQueueItemPost"
			}(b || (b = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/2.957bbb13d48821679cfa.js.map