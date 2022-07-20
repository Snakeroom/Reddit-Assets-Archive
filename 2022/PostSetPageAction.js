// https://www.redditstatic.com/desktop2x/PostSetPageAction.83f7a7ad8dbf636da4a4.js
// Retrieved at 7/20/2022, 1:20:06 PM by Reddit Dataminer v1.0.0
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
				y = Object(o.a)(O.b),
				g = Object(o.a)(O.a),
				j = (e, t) => async (s, r, o) => {
					let {
						gqlContext: l
					} = o;
					const b = r(),
						O = Object(p.v)(t),
						j = Object(a.b)(e, O);
					if (Object(u.Q)(b, {
							listingKey: j
						}).length > 0) return;
					s(x({
						key: j
					}));
					const m = await (async (e, t) => {
						return await Object(i.a)(e, {
							...c,
							variables: t
						})
					})(l(), {
						id: O
					});
					if (m.ok && m.body) {
						const {
							postSetsByIds: e
						} = m.body.data, t = e[0].posts.edges, r = [], n = {}, o = Object(u.J)(b);
						for (const {
								node: s
							} of t)
							if (r.push(s.id), !o.hasOwnProperty(s.id)) {
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
							type: n.I.UNKNOWN_ERROR
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
						profileName: o,
						partialPostSetId: i
					} = n, c = s(), d = Object(b.k)(c), a = !!d && d.displayText === o, p = Object(l.b)(c, a), u = Object(l.a)(c);
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
					}) === r.yd
				},
				i = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: r.oc
					}) === r.yd
				}
		},
		"./src/redditGQL/operations/PostSetById.json": function(e) {
			e.exports = JSON.parse('{"id":"1b621a0e6e3d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostSetPageAction.83f7a7ad8dbf636da4a4.js.map