// https://www.redditstatic.com/desktop2x/PostSetPageAction.d63b33e9303d4f124843.js
// Retrieved at 6/27/2023, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostSetPageAction"], {
		"./src/reddit/actions/pages/postSetPage/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "postSetPagePending", (function() {
				return x
			})), s.d(t, "postSetPageLoaded", (function() {
				return m
			})), s.d(t, "postSetPageFailed", (function() {
				return g
			})), s.d(t, "postSetPageRequested", (function() {
				return y
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
				m = Object(i.a)(O.b),
				g = Object(i.a)(O.a),
				j = (e, t) => async (s, r, i) => {
					let {
						gqlContext: l
					} = i;
					const b = r(),
						O = Object(p.z)(t),
						j = Object(a.b)(e, O);
					if (Object(u.P)(b, {
							listingKey: j
						}).length > 0) return;
					s(x({
						key: j
					}));
					const y = await (async (e, t) => {
						return await Object(o.a)(e, {
							...c,
							variables: t
						})
					})(l(), {
						id: O
					});
					if (y.ok && y.body) {
						const {
							postSetsByIds: e
						} = y.body.data, t = e[0].posts.edges, r = [], n = {}, i = Object(u.I)(b);
						for (const {
								node: s
							} of t)
							if (r.push(s.id), !i.hasOwnProperty(s.id)) {
								const {
									post: e
								} = Object(d.a)(s);
								n[e.id] = e
							} s(m({
							key: j,
							posts: n,
							postIds: r
						}))
					} else {
						const e = y.error || {
							type: n.K.UNKNOWN_ERROR
						};
						s(g({
							key: j,
							error: e
						}))
					}
				}, y = e => async (t, s) => {
					const {
						params: n
					} = e, {
						profileName: i,
						partialPostSetId: o
					} = n, c = s(), d = Object(b.m)(c), a = !!d && d.displayText === i, p = Object(l.b)(c, a), u = Object(l.a)(c);
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
						experimentName: r.Ac
					}) === r.Yd
				},
				o = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: r.zc
					}) === r.Yd
				}
		},
		"./src/redditGQL/operations/PostSetById.json": function(e) {
			e.exports = JSON.parse('{"id":"1a642522ae6a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPageAction.d63b33e9303d4f124843.js.map