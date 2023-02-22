// https://www.redditstatic.com/desktop2x/PostSetPageAction.0419eb57b80e4c23900a.js
// Retrieved at 2/22/2023, 4:20:04 PM by Reddit Dataminer v1.0.0
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
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/PostSetById.json");
			var d = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/selectors/experiments/postSets.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/pages/postSetPage/constants.ts");
			const x = Object(o.a)(O.c),
				m = Object(o.a)(O.b),
				g = Object(o.a)(O.a),
				j = (e, t) => async (s, r, o) => {
					let {
						gqlContext: l
					} = o;
					const b = r(),
						O = Object(p.z)(t),
						j = Object(a.b)(e, O);
					if (Object(u.Q)(b, {
							listingKey: j
						}).length > 0) return;
					s(x({
						key: j
					}));
					const y = await (async (e, t) => {
						return await Object(i.a)(e, {
							...c,
							variables: t
						})
					})(l(), {
						id: O
					});
					if (y.ok && y.body) {
						const {
							postSetsByIds: e
						} = y.body.data, t = e[0].posts.edges, r = [], n = {}, o = Object(u.J)(b);
						for (const {
								node: s
							} of t)
							if (r.push(s.id), !o.hasOwnProperty(s.id)) {
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
							type: n.L.UNKNOWN_ERROR
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
						profileName: o,
						partialPostSetId: i
					} = n, c = s(), d = Object(b.m)(c), a = !!d && d.displayText === o, p = Object(l.b)(c, a), u = Object(l.a)(c);
					t(p || u ? j(o, i) : Object(r.c)(`/user/${o}/`))
				}
		},
		"./src/reddit/selectors/experiments/postSets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = (e, t) => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: () => t,
						experimentName: r.pc
					}) === r.Ld
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: r.oc
					}) === r.Ld
				}
		},
		"./src/redditGQL/operations/PostSetById.json": function(e) {
			e.exports = JSON.parse('{"id":"163365eeb40b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPageAction.0419eb57b80e4c23900a.js.map