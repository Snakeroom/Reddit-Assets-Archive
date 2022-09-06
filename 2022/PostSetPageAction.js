// https://www.redditstatic.com/desktop2x/PostSetPageAction.6f14ce36a84550854dc3.js
// Retrieved at 9/6/2022, 1:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostSetPageAction"], {
		"./src/reddit/actions/pages/postSetPage/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "postSetPagePending", (function() {
				return x
			})), s.d(t, "postSetPageLoaded", (function() {
				return y
			})), s.d(t, "postSetPageFailed", (function() {
				return g
			})), s.d(t, "postSetPageRequested", (function() {
				return m
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/PostSetById.json");
			var d = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/selectors/experiments/postSets.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/pages/postSetPage/constants.ts");
			const x = Object(i.a)(O.c),
				y = Object(i.a)(O.b),
				g = Object(i.a)(O.a),
				j = (e, t) => async (s, r, i) => {
					let {
						gqlContext: l
					} = i;
					const b = r(),
						O = Object(p.y)(t),
						j = Object(a.b)(e, O);
					if (Object(u.Q)(b, {
							listingKey: j
						}).length > 0) return;
					s(x({
						key: j
					}));
					const m = await (async (e, t) => {
						return await Object(o.a)(e, {
							...c,
							variables: t
						})
					})(l(), {
						id: O
					});
					if (m.ok && m.body) {
						const {
							postSetsByIds: e
						} = m.body.data, t = e[0].posts.edges, r = [], n = {}, i = Object(u.J)(b);
						for (const {
								node: s
							} of t)
							if (r.push(s.id), !i.hasOwnProperty(s.id)) {
								const {
									post: e
								} = Object(d.a)(s);
								n[e.id] = e
							} s(y({
							key: j,
							posts: n,
							postIds: r
						}))
					} else {
						const e = m.error || {
							type: n.J.UNKNOWN_ERROR
						};
						s(g({
							key: j,
							error: e
						}))
					}
				}, m = e => async (t, s) => {
					const {
						params: n
					} = e, {
						profileName: i,
						partialPostSetId: o
					} = n, c = s(), d = Object(b.k)(c), a = !!d && d.displayText === i, p = Object(l.b)(c, a), u = Object(l.a)(c);
					t(p || u ? j(i, o) : Object(r.c)(`/user/${i}/`))
				}
		},
		"./src/reddit/selectors/experiments/postSets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: () => t,
						experimentName: r.tc
					}) === r.Ld
				},
				o = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: r.sc
					}) === r.Ld
				}
		},
		"./src/redditGQL/operations/PostSetById.json": function(e) {
			e.exports = JSON.parse('{"id":"169b8bc7f246"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPageAction.6f14ce36a84550854dc3.js.map