// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.9cdc6196311ce8cf4e0c.js
// Retrieved at 6/9/2021, 9:40:19 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"], {
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, s = null == t ? 0 : t.length; ++n < s;)
					if (!e(t[n], n, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, n) {
			var s = n("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var n = !0;
				return s(t, (function(t, s, r) {
					return n = !!e(t, s, r)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(t, e, n) {
			var s = n("./node_modules/lodash/_arrayEvery.js"),
				r = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				c = n("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, n) {
				var d = i(t) ? s : r;
				return n && c(t, e, n) && (e = void 0), d(t, o(e, 3))
			}
		},
		"./src/graphql/operations/OtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"34405b6a52ad"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"f1c4b77b2e90"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"b4f6fa9fde8b"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"723bb6704463"}')
		},
		"./src/lib/constants/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(t, e, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(r);
			e.a = function(t) {
				const {
					source: e,
					isSponsored: n,
					domainOverride: r
				} = t;
				let i = "";
				if (n) {
					if (e && e.displayText) return e.displayText.length > 30 ? e.displayText.substring(0, 30) + "..." : e.displayText;
					i = r || Object(s.D)(t)
				} else i = Object(s.D)(t);
				const c = o.a.parse(i),
					d = c.path || "",
					a = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + a
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(t, e, n) {
			"use strict";
			e.a = t => {
				return `linkedPosts--[post:'${t}']`
			}
		},
		"./src/lib/timeUntil/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.jc, r.mb, r.y, r.N, r.hb, r.Mb],
				i = {
					[r.Mb]: t => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(t, "number")], {
						hk: "3pTp9Z"
					}),
					[r.hb]: t => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(t, "number")], {
						hk: "2gB3sf"
					}),
					[r.N]: t => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(t, "number")], {
						hk: "2w4n8B"
					}),
					[r.y]: t => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(t, "number")], {
						hk: "3zIGRH"
					}),
					[r.mb]: t => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(t, "number")], {
						hk: "28DQqD"
					}),
					[r.jc]: t => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(t, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Mb]: t => s.fbt._("{amount}s", [s.fbt._param("amount", String(t))], {
						hk: "F4qog"
					}),
					[r.hb]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "43tM5H"
					}),
					[r.N]: t => s.fbt._("{amount}h", [s.fbt._param("amount", String(t))], {
						hk: "19NsxU"
					}),
					[r.y]: t => s.fbt._("{amount}d", [s.fbt._param("amount", String(t))], {
						hk: "39MDc9"
					}),
					[r.mb]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.jc]: t => s.fbt._("{amount}y", [s.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					}),
					[r.mb]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.jc]: t => s.fbt._("{amount}y", [s.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					})
				};

			function d(t, e = !1, n = !1) {
				const d = Date.now(),
					a = new Date(t).getTime(),
					u = {
						[r.jc]: "",
						[r.mb]: "",
						[r.y]: "",
						[r.N]: "",
						[r.hb]: "",
						[r.Mb]: ""
					};
				let l = a - d;
				if (l <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const t = Math.floor(l / s);
					t && (u[s] = (e ? c : i)[s](t).toString()), l -= t * s
				}
				const _ = o.map(t => u[t]).filter(Boolean).slice(0, 2).join(" ");
				return e || n ? _ : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", _)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "e", (function() {
				return r
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "c", (function() {
				return i
			})), n.d(e, "d", (function() {
				return c
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/powerups/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "g", (function() {
				return d
			})), n.d(e, "e", (function() {
				return a
			}));
			const s = 120,
				r = "ON_CREATE_CUSTOM_EMOJI_SUCCESS",
				o = "ON_DELETE_CUSTOM_EMOJI_SUCCESS",
				i = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENTS_LOADED",
				c = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_REQUESTED",
				d = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATED",
				a = "POWERUPS__SUBREDDIT_USER_ACHIEVEMENT_PREFERENCE_UPDATE_FAILED"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "e", (function() {
				return c
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "g", (function() {
				return a
			})), n.d(e, "h", (function() {
				return u
			})), n.d(e, "i", (function() {
				return l
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "e", (function() {
				return o
			})), n.d(e, "d", (function() {
				return i
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "a", (function() {
				return d
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			}));
			const s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			}));
			const s = "IMAGE_OCR_ALT_TEXT__LOADED",
				r = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return I
			})), n.d(e, "d", (function() {
				return D
			})), n.d(e, "c", (function() {
				return y
			})), n.d(e, "a", (function() {
				return h
			})), n.d(e, "e", (function() {
				return A
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				d = n("./src/reddit/actions/discoveryUnit.ts"),
				a = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				_ = n("./src/reddit/constants/inFeedChaining.ts"),
				E = n("./src/reddit/constants/page.ts"),
				b = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/inFeedChaining.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts");
			const I = "FEED_CHAINING__CHAIN_LOADED",
				T = Object(i.a)(I),
				C = t => {
					const e = Date.now() - t,
						n = Object(b.F)();
					return Object.keys(n).filter(t => n[t].when >= e).map(t => n[t])
				},
				D = ({
					listingName: t,
					listingKey: e,
					postId: n
				}) => async (s, i, l) => {
					if (!n) return;
					const m = Object(S.R)(i(), {
						postId: n
					});
					if (!m) return;
					const I = m.name.toLowerCase(),
						D = t === I;
					if (!(t === E.f || t === E.b || D)) return;
					if (D) return void g(m, e, n)(s, i, l);
					0 === C(o.mb).length && Object(b.Eb)(!1);
					let y = i();
					if (Object(f.d)(y, {
							listingKey: e,
							postId: n
						}) || Object(f.a)(y).length >= _.a || Object(b.T)() || C(o.y).length >= _.a) return;
					const h = Object(S.v)(y, {
						listingKey: e,
						postId: n
					});
					if (h && h.isSponsored) return;
					await s(Object(d.g)()), y = i();
					const L = Object(f.b)(y, {
						listingName: t
					});
					if (!L) return;
					if (!m || Object(f.e)(y, {
							subredditId: m.id
						}) || (t => {
							return C(o.y).some(e => e.subredditId === t)
						})(m.id)) return;
					const A = {
						subredditIds: [m.id],
						count: _.b
					};
					await s(Object(a.b)(A));
					const R = Object(a.a)(A);
					y = i();
					const N = Object(O.v)(y, {
						key: R
					});
					0 !== N.length ? (await s((t => async (e, n) => {
						const s = o.ac.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, o.T.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(S.y)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: s,
							sort: o.M.TOP,
							subredditNames: r
						}))
					})(N.map(t => t.name))), y = i(), Object(f.f)(y, {
						postId: n
					}).length < _.c ? Object(r.a)(Object(p.c)(L, "other", m)(y)) : (Object(b.b)(n, m.id), Object(r.a)(Object(p.d)(L, m)(y)), s(T({
						listingKey: e,
						postId: n
					})))) : Object(r.a)(Object(p.c)(L, "no_chaining", m)(y))
				}, y = "FEED_CHAINING__CHAIN_TOGGLED", h = (Object(i.a)(y), "FEED_CHAINING__CHAINING_TOGGLED"), L = Object(i.a)(h), A = () => async t => {
					Object(b.Eb)(!0), t(L({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), m.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.Eb)(!1), t(L({
							isDismissed: !1
						}))
					})))
				}, g = (t, e, n) => async (t, e, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return s
			})), n.d(e, "d", (function() {
				return r
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "f", (function() {
				return i
			})), n.d(e, "g", (function() {
				return c
			})), n.d(e, "a", (function() {
				return d
			})), n.d(e, "t", (function() {
				return a
			})), n.d(e, "e", (function() {
				return u
			})), n.d(e, "r", (function() {
				return l
			})), n.d(e, "s", (function() {
				return _
			})), n.d(e, "n", (function() {
				return E
			})), n.d(e, "l", (function() {
				return b
			})), n.d(e, "m", (function() {
				return p
			})), n.d(e, "k", (function() {
				return m
			})), n.d(e, "i", (function() {
				return f
			})), n.d(e, "j", (function() {
				return S
			})), n.d(e, "h", (function() {
				return O
			})), n.d(e, "p", (function() {
				return I
			})), n.d(e, "q", (function() {
				return T
			})), n.d(e, "o", (function() {
				return C
			}));
			const s = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				a = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				_ = "UPDATE_COLLECTION_SUCCESS",
				E = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				p = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				m = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				f = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				I = "UPDATE_COLLECTION_LAYOUT_PENDING",
				T = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return _
			})), n.d(e, "b", (function() {
				return m
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/endpoints/category/subreddits.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			! function(t) {
				t.Factorization = "factorization", t.CustomModRelevant = "custom_mod_relevant"
			}(s || (s = {}));
			var l = n("./src/reddit/selectors/subreddit.ts");
			const _ = t => {
					let e = t.subredditIds.join(",");
					return t.count && (e += `--[count:'${t.count}']`), t.variant && (e += `--[variant:'${t.variant}']`), e.toLowerCase()
				},
				E = Object(r.a)(o.p),
				b = Object(r.a)(o.o),
				p = Object(r.a)(o.n),
				m = t => async (e, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = _(t),
						m = Object(l.u)(r, {
							key: o
						}),
						f = Object(l.t)(r, {
							key: o
						});
					if (m || f.length > 0) return;
					e(E({
						key: o
					}));
					const S = await ((t, e) => Object(d.a)(Object(a.a)(t, [u.a]), {
						data: {
							sr_fullnames: e.subredditIds.join(","),
							limit: e.count,
							variant: e.variant
						},
						endpoint: `${t.apiUrl}/api/similar_subreddits.json`,
						method: c.gb.GET
					}))(s(), t);
					if (S.ok) {
						const t = Object(i.b)(S.body);
						e(b({
							key: o,
							...t
						}))
					} else {
						const t = S.error;
						e(p({
							key: o,
							error: t
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return Y
			})), n.d(e, "a", (function() {
				return G
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(i.b),
				d = Object(r.a)(i.a);
			var a = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(a.b),
				l = Object(r.a)(a.a);
			var _ = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				b = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				f = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = n("./src/reddit/models/Post/index.ts");
			var O = ({
				getState: t,
				onFailure: e,
				onSuccess: n,
				postId: s,
				response: r
			}) => {
				if (!r.ok) return void e(r.error);
				const i = r.body,
					{
						post: c
					} = i && i.data,
					d = t(),
					a = Object(o.a)(s, null, {
						isOtherDiscussions: !0
					});
				if (c) {
					if (c.otherDiscussions && c.otherDiscussionsCount) {
						const {
							otherDiscussions: t,
							otherDiscussionsCount: e
						} = c, {
							postFlair: r,
							postIds: o,
							posts: i,
							profiles: u,
							subreddits: l
						} = (t => {
							const e = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								n = t => {
									const n = Object(p.e)(t);
									e.posts[n.id] = n;
									const {
										crosspostRoot: s
									} = t;
									if (s && s.type === S.a.Post && s.postInfo) {
										const t = Object(p.e)(s.postInfo);
										e.posts[t.id] = t
									}
									return Object(S.l)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(m.a)(t.profile)) : Object(S.m)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(f.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(b.a)(t.subreddit))), n.id
								};
							if (t && t.edges)
								for (const {
										node: s
									} of t.edges) {
									const t = n(s);
									t && e.postIds.push(t)
								}
							return e
						})(t);
						n({
							count: e,
							key: a,
							meta: d.meta,
							postFlair: r,
							postId: s,
							postIds: o,
							posts: i,
							profiles: u,
							subreddits: l
						})
					}
				} else n({
					count: 0,
					key: a,
					meta: d.meta,
					postFlair: {},
					postId: s,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(r.a)(_.a),
				T = Object(r.a)(_.b),
				C = Object(r.a)(_.c);
			var D = n("./src/reddit/actions/subreddit/constants.ts"),
				y = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				h = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var L = ({
					getState: t,
					onSuccess: e,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						e({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: s
						})
					} catch (o) {
						n(o)
					}
				},
				A = n("./src/lib/makeLinkedPostsListingKey/index.ts");
			var g = ({
					getState: t,
					onSuccess: e,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						const n = [],
							o = {},
							i = {};
						if (!r || !r.linked) return;
						const c = t(),
							d = c.posts && c.posts.models,
							a = Object(A.a)(s),
							u = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of u) {
							if (!t || !t.id) break;
							if (n.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(p.a)(t);
								o[t.id] = e.post, e.crosspost && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(S.m)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(f.a)(e)
							}
						}
						e({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: a,
							meta: c.meta,
							posts: o,
							postIds: n,
							subreddits: i
						})
					} catch (o) {
						n(o)
					}
				},
				R = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var N = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var j = ({
					getState: t,
					onSuccess: e,
					onFailure: n,
					options: r,
					subreddit: i
				}) => {
					try {
						if (!i) return;
						const n = i.elements || i.posts,
							c = t(),
							d = ((t, e) => {
								const {
									edges: n
								} = t, s = n.filter(t => (t => !t.node.crosspostRoot)(t) && ((t, e) => !e.hasOwnProperty(t.node.id))(t, e));
								return {
									...t,
									edges: s
								}
							})(n, c.posts && c.posts.models);
						if (!d.edges.length) return;
						const a = Object(R.a)(d),
							{
								range: u,
								sort: l,
								subredditName: _
							} = r,
							E = Object(o.a)(_, s.T[l], {
								t: u
							}),
							b = N(a),
							p = a.map(t => t.id);
						e({
							dist: n.dist,
							key: E,
							meta: c.meta,
							postIds: p,
							posts: b
						})
					} catch (c) {
						n(c)
					}
				},
				U = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				F = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const M = Object(r.a)(F.b),
				x = Object(r.a)(F.a),
				k = Object(r.a)(D.j),
				v = Object(r.a)(D.i),
				w = Object(r.a)(D.r),
				B = Object(r.a)(D.q),
				Y = t => async (e, n, {
					gqlContext: s
				}) => {
					const r = (await ((t, e) => Object(E.a)(t, {
							...h,
							variables: e
						}))(s(), t)).body,
						{
							subredditNames: o,
							...i
						} = t,
						c = [];
					try {
						for (const t of r.data.subredditsInfoByNames) {
							const e = t.elements.edges[0];
							e && Object(S.m)(e.node) && j({
								getState: n,
								onFailure: t => {
									throw t
								},
								onSuccess: t => c.push(t),
								options: {
									...i,
									subredditName: e.node.subreddit.name
								},
								subreddit: t
							})
						}
						e(w(c))
					} catch (d) {
						e(B(d))
					}
				}, G = t => async (e, n, {
					gqlContext: r
				}) => {
					var i;
					const {
						includePostImageOCRAltText: a,
						includeListingBelowExperiment: _,
						includeOtherDiscussions: b,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: m,
						postId: f,
						range: S,
						sort: D,
						subredditName: h
					} = t, A = Object(o.a)(f, null, {
						isOtherDiscussions: !0
					}), R = n(), N = Object(P.y)(R, {
						listingKey: A
					}), F = b && (!N || 0 === N.length), w = Object(o.a)(h, s.T[D], {
						t: S
					}), B = Object(P.y)(R, {
						listingKey: w
					}), Y = p && (!B || 0 === B.length), G = _, q = Object(P.F)(R, {
						postId: f
					}), V = a && !!q && !!q.media && (Object(U.H)(q.media) || Object(U.F)(q.media)) && !q.media.altText;
					if (!(F || Y || G || V || m)) return;
					F && e(C({
						key: A
					}));
					const H = await ((t, e) => Object(E.a)(t, {
							...y,
							variables: e
						}))(r(), t),
						K = H.body;
					m && (H.ok ? K.data && K.data.post && e(c({
						postId: f,
						isEligibleForQASchema: null !== (i = K.data.post.isEligibleForQASchema) && void 0 !== i && i
					})) : e(d())), F && O({
						getState: n,
						onFailure: t => e(I(t)),
						onSuccess: t => e(T(t)),
						postId: f,
						response: H
					}), Y && (H.ok ? K.data && j({
						getState: n,
						onFailure: t => e(v(t)),
						onSuccess: t => e(k(t)),
						options: t,
						subreddit: K.data.subreddit
					}) : e(v(H.error))), G && H.ok && g({
						getState: n,
						onFailure: t => e(l(t)),
						onSuccess: t => e(u(t)),
						postId: f,
						post: K.data.post
					}), V && H.ok && L({
						getState: n,
						onFailure: t => e(x(t)),
						onSuccess: t => e(M(t)),
						postId: f,
						post: K.data.post
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			})), n.d(e, "i", (function() {
				return o
			})), n.d(e, "j", (function() {
				return i
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "c", (function() {
				return d
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "p", (function() {
				return l
			})), n.d(e, "q", (function() {
				return _
			})), n.d(e, "o", (function() {
				return E
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "g", (function() {
				return p
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "m", (function() {
				return f
			})), n.d(e, "n", (function() {
				return S
			})), n.d(e, "l", (function() {
				return O
			})), n.d(e, "k", (function() {
				return I
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i);

			function d(t) {
				const e = new Date(t.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: t.className
				}, e ? s.fbt._("Voting closed {timeAgo}", [s.fbt._param("timeAgo", Object(r.d)(t.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(t.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(t, e, n) {
			t.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(t, e, n) {
			t.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return U
			})), n.d(e, "a", (function() {
				return V
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = n("./src/reddit/constants/experiments.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				S = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				I = n("./src/reddit/icons/fonts/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Media/index.ts"),
				D = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/lib/getShortenedLink.ts"),
				h = n("./src/reddit/components/FlairWrapper/index.tsx"),
				L = n("./node_modules/fbt/lib/FbtPublic.js"),
				A = n("./src/lib/prettyPrintNumber/index.ts"),
				g = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				N = n.n(R);
			const j = Object(d.c)({
				poll: (t, e) => t.polls.models[e.pollId],
				resultsByVoters: (t, e) => t.polls.results.byVoters[e.pollId]
			});
			var U, P = Object(i.b)(j)((function(t) {
					const {
						poll: e,
						resultsByVoters: n
					} = t, s = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(t.className, N.a.proposalMetaData)
					}, o.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(A.a)(s)), L.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), e && o.a.createElement(g.a, {
						className: N.a.proposalExpiry,
						poll: e
					}))
				})),
				F = n("./src/reddit/components/SEOTitle/index.tsx"),
				M = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/PostTitle/index.m.less"),
				k = n.n(x),
				v = n("./src/config.ts"),
				w = n("./src/reddit/hooks/useClickSourceData.ts"),
				B = n("./src/reddit/hooks/useExperimentVariant.ts"),
				Y = n("./src/reddit/hooks/usePostContext.ts"),
				G = n("./src/reddit/hooks/useTheme.ts");

			function q() {
				return (q = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s])
					}
					return t
				}).apply(this, arguments)
			}! function(t) {
				t[t.ExtraLarge = 0] = "ExtraLarge", t[t.Large = 1] = "Large", t[t.Medium = 2] = "Medium", t[t.Small = 3] = "Small", t[t.ExtraSmall = 4] = "ExtraSmall"
			}(U || (U = {}));
			const V = ({
					size: t,
					titleColor: e,
					titleType: n,
					nowrap: s,
					children: r,
					className: i,
					redditStyle: c
				}) => {
					const d = Object(G.a)();
					let a = "";
					switch (t) {
						case U.ExtraLarge:
							a = k.a.ExtraLarge;
							break;
						case U.Large:
							a = k.a.Large;
							break;
						case U.Medium:
							a = k.a.Medium;
							break;
						case U.Small:
							a = k.a.Small;
							break;
						case U.ExtraSmall:
							a = k.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(u.a)(k.a.Title, i, a, {
							[k.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": e || Object(D.a)({
								redditStyle: c,
								theme: d
							}).titleText
						}
					}, n ? o.a.createElement(F.b, {
						type: n
					}, r) : r)
				},
				H = ({
					className: t,
					disableVisited: e,
					titleColor: n,
					children: s,
					...r
				}) => o.a.createElement(c.a, q({}, r, {
					className: Object(u.a)(t, k.a.styledLink, {
						[k.a.isVisitedEnabled]: !e
					})
				}), s),
				K = ({
					disableVisited: t,
					nowrap: e,
					className: n,
					children: s
				}) => o.a.createElement("div", {
					className: Object(u.a)(k.a.titleContainer, n, {
						[k.a.isNoWrap]: e,
						[k.a.isVisitedEnabled]: !t
					})
				}, s),
				W = Object(d.c)({
					flairPosition: (t, {
						pageLayer: e
					}) => Object(E.p)(t, {
						pageLayer: e
					}),
					shouldOpenPostInNewTab: M.cb
				}),
				z = t => {
					const {
						post: e,
						subreddit: n
					} = t, {
						isSponsored: s
					} = e, r = Object(w.a)(), i = Object(B.a)(_.Sb) === _.Wb.Enabled;
					if (t.isCommentsPage && !t.isCommentPermalink && !t.shouldLinkWrap) return o.a.createElement(K, {
						nowrap: t.nowrap
					}, o.a.createElement(Q, t));
					if (t.isCommentsPageAd && e.source && e.source.url) return o.a.createElement(b.b, {
						href: e.source.url,
						isSponsored: s,
						postId: e.id,
						source: e.source
					}, o.a.createElement(Q, t)); {
						const c = e.media && Object(C.G)(e.media) ? Object(O.c)(e.id, n.name) : e.permalink,
							d = t.isCommentPermalink ? Object(S.b)(c) : i ? Object(m.a)(c, void 0, r) : Object(m.a)(c);
						return o.a.createElement(K, {
							disableVisited: t.disableVisited,
							nowrap: t.nowrap
						}, s ? ((t, e) => {
							const {
								source: n
							} = Object(a.t)(t, e.imageGalleryCurrentItem);
							return n ? o.a.createElement(b.b, {
								href: n.url,
								isSponsored: t.isSponsored,
								postId: t.id,
								source: n
							}, o.a.createElement(Q, e)) : o.a.createElement(Q, e)
						})(e, t) : o.a.createElement(H, {
							className: t.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: t.disableVisited,
							target: t.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: t.titleColor,
							to: d
						}, o.a.createElement(Q, t)))
					}
				},
				Q = t => {
					const {
						leftFlair: e,
						isCommentsPageAd: n,
						post: s
					} = t;
					let r = t.format ? t.format(s) : s.title;
					n && "string" == typeof r && (r = (t => {
						return t.length >= 250 ? t.slice(0, 250 - "...".length) + "..." : t
					})(r));
					const i = t.isCommentsPage ? F.a.PostComments : F.a.PostItem;
					return o.a.createElement(V, {
						className: t.titleClassName,
						nowrap: t.nowrap,
						redditStyle: t.redditStyle || t.isCommentsPage,
						size: t.size,
						titleColor: t.titleColor,
						titleType: i
					}, e && o.a.createElement(h.a, {
						titleFlair: e,
						nowrap: !0,
						post: s,
						sendEvent: t.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				J = t => {
					const {
						hideSourceLink: e,
						post: n
					} = t, {
						isSponsored: s
					} = n, r = !e && !t.isCrosspost && t.size !== U.Large && !n.isSponsored && !(n.media && Object(C.G)(n.media)) && (n.source || n.media && (n.media.type === C.o.GIFVIDEO || n.media.type === C.o.IMAGE || n.media.type === C.o.EMBED));
					if (e || !t.isCommentsPage || t.isCommentPermalink || t.shouldLinkWrap) {
						if (r) return o.a.createElement(p.a, {
							className: t.outboundLinkClassName,
							href: Object(C.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source
						}, Object(y.a)(n), !n.isSponsored && o.a.createElement(I.a, {
							name: "external_link",
							className: k.a.outboundLinkIcon
						}))
					} else if (n.source && !t.isCrosspost && t.size !== U.Large && t.size !== U.ExtraLarge) return o.a.createElement(p.a, {
						className: t.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source
					}, Object(y.a)(n), !n.isSponsored && o.a.createElement(I.a, {
						name: "external_link",
						className: k.a.outboundLinkIcon
					}));
					return null
				};
			class X extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${k.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(D.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(D.a)(this.props).titleText,Object(D.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: t,
						disableFlair: e,
						flairPosition: n,
						isCommentsPage: s,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, a = n === T.b.Left, l = Object(h.b)(c), _ = d ? l.filter(t => t.type === T.f.Nsfw || t.type === T.f.Spoiler) : a ? l.filter(t => Object(f.q)(t.type)) : [], E = d ? [] : a ? l.filter(t => !Object(f.q)(t.type)) : l, b = !r && !s, p = !e && _ && _.length > 0 && b, m = !e && E && E.length > 0 && b;
					return o.a.createElement("div", {
						className: Object(u.a)(k.a.Component, t, c.id)
					}, !d && p && o.a.createElement(h.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(z, q({}, this.props, {
						leftFlair: d ? _ : void 0
					})), i && o.a.createElement(P, {
						className: k.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(J, this.props), m && o.a.createElement(h.a, {
						isFlairFilter: !0,
						titleFlair: E,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: k.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${v.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			e.c = o.a.memo((function(t) {
				const e = Object(E.Z)(),
					n = Object(E.v)(e),
					s = Object(Y.a)(),
					r = Object(i.e)(r => W(r, {
						...s,
						...t,
						isCommentPermalink: n,
						pageLayer: e
					})),
					c = Object(G.a)(),
					d = Object(l.b)();
				return o.a.createElement(X, q({
					pageLayer: e,
					isCommentPermalink: n
				}, s, r, t, {
					theme: c,
					sendEvent: d
				}))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "c", (function() {
				return r
			})), n.d(e, "b", (function() {
				return o
			}));
			const s = 3,
				r = 5,
				o = 10
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(t, e, n) {
			"use strict";

			function s(t, e) {
				if (t.placement && !e.placement) return -1;
				if (e.placement && !t.placement) return 1;
				if (t.position && !e.position) return -1;
				if (e.position && !t.position) return 1;
				let n = 0;
				return t.placement && e.placement && (n = t.placement.localeCompare(e.placement)), 0 === n && t.position && e.position && (n = t.position - e.position), 0 === n && (n = t.title.localeCompare(e.title)), n
			}

			function r(t) {
				return [...t].sort(s)
			}
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: t
			}) => {
				const e = [];
				for (const {
						node: n
					} of t) e.push(Object(s.e)(n));
				return e
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case s.F.NO_STRIPE_SUBSCRIPTION:
							case s.F.USER_DOESNT_EXIST:
							case s.F.USER_REQUIRED_ERROR:
							case s.F.VALIDATION_ERROR:
								return t;
							case s.F.NO_USER:
							case s.F.NO_TEXT:
							case s.F.NO_URL:
								return s.F.VALIDATION_ERROR;
							case s.F.CREDIT_CARD_FAILURE:
							case s.F.CREDIT_CARD_FAILURE_GENERIC:
								return s.F.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return s.F.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.F.VALIDATION_ERROR
				},
				o = t => {
					const e = t.body;
					return {
						type: r(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				i = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: o(t)
					} : t
				};
			e.a = o
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(t, e, n) {
			"use strict";
			n.d(e, "g", (function() {
				return S
			})), n.d(e, "h", (function() {
				return O
			})), n.d(e, "a", (function() {
				return D
			})), n.d(e, "E", (function() {
				return y
			})), n.d(e, "F", (function() {
				return h
			})), n.d(e, "M", (function() {
				return A
			})), n.d(e, "B", (function() {
				return g
			})), n.d(e, "C", (function() {
				return R
			})), n.d(e, "D", (function() {
				return N
			})), n.d(e, "i", (function() {
				return j
			})), n.d(e, "w", (function() {
				return U
			})), n.d(e, "x", (function() {
				return P
			})), n.d(e, "L", (function() {
				return F
			})), n.d(e, "K", (function() {
				return M
			})), n.d(e, "I", (function() {
				return x
			})), n.d(e, "v", (function() {
				return k
			})), n.d(e, "y", (function() {
				return v
			})), n.d(e, "z", (function() {
				return w
			})), n.d(e, "A", (function() {
				return B
			})), n.d(e, "N", (function() {
				return Y
			})), n.d(e, "J", (function() {
				return G
			})), n.d(e, "t", (function() {
				return q
			})), n.d(e, "H", (function() {
				return V
			})), n.d(e, "d", (function() {
				return H
			})), n.d(e, "c", (function() {
				return K
			})), n.d(e, "b", (function() {
				return W
			})), n.d(e, "f", (function() {
				return z
			})), n.d(e, "e", (function() {
				return Q
			})), n.d(e, "s", (function() {
				return Z
			})), n.d(e, "m", (function() {
				return $
			})), n.d(e, "r", (function() {
				return tt
			})), n.d(e, "k", (function() {
				return et
			})), n.d(e, "l", (function() {
				return nt
			})), n.d(e, "n", (function() {
				return st
			})), n.d(e, "p", (function() {
				return rt
			})), n.d(e, "q", (function() {
				return ot
			})), n.d(e, "o", (function() {
				return it
			})), n.d(e, "j", (function() {
				return ct
			})), n.d(e, "u", (function() {
				return dt
			})), n.d(e, "G", (function() {
				return at
			}));
			var s, r = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/helpers/trackers/searchResults.ts"),
				a = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = n("./src/reddit/models/Widgets/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const p = "discovery_unit",
				m = (t, e, n) => ({
					..._.defaults(t),
					source: p,
					screen: _.screen(t),
					discoveryUnit: {
						id: e.id,
						type: e.unitType,
						title: e.title && n ? Object(r.a)(e.title, {
							subredditName: n.name
						}) : e.title,
						name: e.unitName
					}
				}),
				f = (t, e, n) => ({
					...m(t, e, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (t, e) => {
					Object(b.a)(O(e)(t))
				},
				O = (t, e) => n => f(n, t, e),
				I = (t, e, n, s) => "unitName" in e ? m(t, e, s) : ((t, e, n) => ({
					..._.defaults(t),
					source: "search",
					screen: _.screen(t),
					search: n ? {
						..._.search(t, n),
						structureType: _.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: e.name,
						type: "listing",
						title: e.layout.title,
						name: e.name
					}
				}))(t, e, n),
				T = (t, e, n, r, o) => ({
					...I(t, e, r, o),
					action: "view",
					noun: s.ITEM_POST,
					post: _.post(t, n)
				}),
				C = ({
					post: t,
					rawQuery: e,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? _.StructureType.PromotedTrend : _.StructureType.Trending
				});
			var D;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(D || (D = {}));
			const y = (t, e, n) => {
					Object(b.a)(L(t, e, n, i.c.CLICK))
				},
				h = (t, e, n) => {
					Object(b.a)(L(t, e, n, i.c.VIEW))
				},
				L = (t, e, n, s) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						..._.defaults(t),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: C(e),
						discoveryUnit: n === D.POPULAR_CAROUSEL ? {
							name: a.l,
							id: a.l,
							title: a.l,
							type: "query"
						} : void 0,
						actionInfo: _.actionInfo(t, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: t.platform.currentPage ? _.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
							query: e.rawQuery,
							structureType: _.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				A = (t, e, n, s, r, o, c) => {
					Object(b.a)({
						..._.defaults(t),
						...Object(d.e)(t, n, s, r, o, e),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				g = (t, e, n, s) => {
					Object(b.a)(T(t, e, n, s))
				},
				R = (t, e, n, s) => r => T(r, t, e, n, s),
				N = (t, e, n, r) => {
					const o = I(t, e, r);
					Object(b.a)({
						...o,
						...Object(E.b)(t, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				j = (t, e) => {
					Object(b.a)({
						...m(t, e),
						source: p,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				U = (t, e, n, s) => {
					Object(b.a)(P(e, n, s)(t))
				},
				P = (t, e, n, r) => o => {
					return {
						...I(o, t, n, r),
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: _.post(o, e)
					}
				},
				F = (t, e, n, s) => r => o => Object(d.e)(o, r, t, e, n, s),
				M = (t, e, n, s) => r => o => Object(d.d)(o, t, e, void 0, n, r, s),
				x = (t, e, n, s) => r => o => ({
					...Object(d.e)(o, r, t, e, n, s),
					noun: "ad"
				}),
				k = (t, e) => n => r => ({
					...t ? m(r, t, e) : {},
					source: p,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: _.post(r, n)
				}),
				v = (t, e, n, s) => {
					Object(b.a)(w(e, n, s)(t))
				},
				w = (t, e, n, s) => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(E.b)(r, o) : void 0;
					return {
						...I(r, t, n, s),
						...c,
						source: p,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: _.post(r, e)
					}
				},
				B = (t, e, n) => s => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(E.b)(r, o) : void 0;
					return {
						...I(r, t, void 0, n),
						...c,
						source: p,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: _.post(r, e)
					}
				},
				Y = (t, e, n) => {
					const s = I(t, e);
					Object(b.a)({
						...s,
						...Object(E.b)(t, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				G = (t, e, n, s, r, o) => {
					Object(b.a)({
						..._.defaults(t),
						...Object(d.d)(t, e, n, s, r, void 0, o)
					})
				},
				q = (t, e, n) => {
					const s = I(t, e);
					Object(b.a)({
						...s,
						...Object(E.b)(t, n),
						source: p,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				V = (t, e) => n => {
					const s = Object(u.j)(e);
					return {
						...m(n, t, e),
						...Object(E.b)(n, s),
						source: p,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				H = (t, e) => n => ({
					...m(n, t, e),
					action: "status",
					actionInfo: _.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				K = (t, e, n) => s => ({
					...m(s, t, n),
					action: "status",
					actionInfo: _.actionInfo(s, {
						reason: e,
						success: !1
					}),
					noun: "loading"
				}),
				W = (t, e) => n => ({
					...m(n, t, e),
					action: "click",
					noun: "close"
				}),
				z = (t, e, n) => s => ({
					...I(s, t, e, n),
					action: "click",
					noun: "scroll"
				}),
				Q = (t, e) => n => ({
					...m(n, t, e),
					action: "click",
					noun: "overflow_menu"
				}),
				J = () => ({
					id: "xd_focus_verticals",
					unitType: a.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: a.d.Large,
					surface: a.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (t, e, n) => _.actionInfo(t, {
					position: n
				}),
				Z = (t, e, n) => {
					const s = J();
					return t => ({
						...f(t, s),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e)
					})
				},
				$ = (t, e, n) => {
					const s = J();
					return t => ({
						...T(t, s, e),
						actionInfo: X(t, 0, n)
					})
				},
				tt = (t, e, n) => {
					const r = J();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						source: p,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				et = (t, e, n) => {
					const r = J();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, n),
						post: _.post(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				nt = (t, e, n, r) => {
					const o = J();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, r),
						subreddit: _.subredditById(t, n) || null,
						post: _.post(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				st = (t, e, n) => {
					const r = J();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				rt = (t, e, n, r) => {
					const o = J();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						post: r ? _.post(t, r) : null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ot = (t, e, n, r) => {
					const o = J();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						post: r ? _.post(t, r) : null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				it = (t, e, n) => {
					const r = J();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ct = (t, e, n) => {
					const r = J();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				dt = (t, e) => n => ({
					...m(n, t),
					...e && Object(E.b)(n, e),
					source: p,
					action: i.c.CLICK,
					noun: "item"
				}),
				at = t => e => ({
					...m(e, t),
					source: p,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(t, e = r.a) {
				return Object(s.e)(n => Object(r.c)(n, {
					experimentName: t,
					experimentEligibilitySelector: e
				}))
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "c", (function() {
				return r
			})), n.d(e, "b", (function() {
				return i
			})), n.d(e, "d", (function() {
				return c
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(t) {
				t.Loyalty = "loyalty", t.Achievement = "achievement", t.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(t) {
				t.Gallery = "gallery", t.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				c = t => t === o.a.First ? s.Loyalty : t === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return i
			})), n.d(e, "a", (function() {
				return d
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "g", (function() {
				return u
			})), n.d(e, "n", (function() {
				return l
			})), n.d(e, "o", (function() {
				return _
			})), n.d(e, "f", (function() {
				return E
			})), n.d(e, "c", (function() {
				return p
			})), n.d(e, "q", (function() {
				return f
			})), n.d(e, "k", (function() {
				return S
			})), n.d(e, "j", (function() {
				return O
			})), n.d(e, "h", (function() {
				return I
			})), n.d(e, "i", (function() {
				return T
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "m", (function() {
				return D
			})), n.d(e, "b", (function() {
				return y
			})), n.d(e, "l", (function() {
				return h
			})), n.d(e, "p", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, d, a;
			! function(t) {
				t.LINK = "LINK", t.POLL = "POLL", t.SELF = "SELF"
			}(c || (c = {})),
			function(t) {
				t.RTJSON = "RTJSON", t.TEXT = "TEXT"
			}(d || (d = {})),
			function(t) {
				t.CREATED = "CREATED", t.PROCESSING = "PROCESSING", t.FAILED = "FAILED", t.SUCCESS = "SUCCESS"
			}(a || (a = {}));
			const u = t => {
					return new Set(["links", "text", "polls"]).has(t)
				},
				l = t => t.__typename === o.c.AvailableRedditor,
				_ = t => t.__typename === r.a.Subreddit;
			var E, b, p, m;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(E || (E = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(p || (p = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(m || (m = {}));
			const f = t => b[m[t]],
				S = t => m[b[t]],
				O = t => p[b[t]],
				I = t => b[p[t]],
				T = t => m[p[t]];
			var C;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const D = t => {
					switch (t) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				h = t => {
					switch (t) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(s.a)(t)
					}
				},
				L = t => "frequency" in t && !!t.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(t) {
				t[t.Failure = 0] = "Failure", t[t.Fetched = 1] = "Fetched", t[t.NotFetched = 2] = "NotFetched", t[t.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			e.b = (t = o, e) => {
				switch (e.type) {
					case r.a:
						if (t.status === s.Fetched && t.data.stripe && t.data.stripe.sources) {
							const n = e.payload.cardId,
								{
									[n]: s,
									...r
								} = t.data.stripe.sources;
							return {
								...t,
								data: {
									...t.data,
									stripe: {
										...t.data.stripe,
										sources: r
									}
								}
							}
						}
						return t;
					case r.e:
						if (t.status === s.Fetched && t.data.braintree && t.data.braintree.sources) {
							const n = e.payload.sourceId,
								{
									[n]: s,
									...r
								} = t.data.braintree.sources;
							return {
								...t,
								data: {
									...t.data,
									braintree: {
										...t.data.braintree,
										sources: r
									}
								}
							}
						}
						return t;
					case r.b:
						return {
							error: e.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: e.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/models/Badge/managementPage.ts");
			! function(t) {
				t[t.NotFetched = 0] = "NotFetched", t[t.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const a = {};

			function u(t) {
				return "userId" in t
			}

			function l(t, e, n, s) {
				t.forEach(t => {
					t.collections && Object.keys(t.collections).forEach(r => {
						let o;
						(o = t.placement ? t.placement === c.a.First ? s[d.a.Loyalty][r] : s[d.a.Achievement][r] : u(t) ? s[d.a.Cosmetic][d.c.MyBadges][r] : s[d.a.Cosmetic][d.c.Gallery][r]) && (u(t) ? n.has(t.id) && o.unlocked.push(t) : e.has(t.id) || o.locked.push(t))
					})
				})
			}

			function _(t) {
				const e = (t, e) => {
					const n = parseInt(t.price || "0"),
						s = parseInt(e.price || "0");
					return n === s ? Object(i.b)(t, e) : n - s
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function E(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === r.a).map(_).sort((t, n) => {
					const s = e[t.id],
						r = e[n.id];
					return Object(i.b)(s, r)
				})
			}

			function b(t) {
				const e = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(t.collections).forEach(n => {
					const s = t.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					e[d.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				t.userOwnedBadges.forEach(e => {
					const s = t.badges[e];
					s && n.add(s.type)
				});
				const s = new Set(t.userOwnedBadges);
				return l(Object.keys(t.badges).map(e => t.badges[e]), n, s, e), l(Object.keys(t.products).map(e => t.products[e]), n, s, e), {
					collections: {
						[d.a.Loyalty]: E(e[d.a.Loyalty], t.collections),
						[d.a.Achievement]: E(e[d.a.Achievement], t.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: E(e[d.a.Cosmetic][d.c.Gallery], t.collections),
							[d.c.MyBadges]: E(e[d.a.Cosmetic][d.c.MyBadges], t.collections)
						}
					},
					subscription: t.subscription,
					userOwnedBadges: t.userOwnedBadges.map(e => t.badges[e]).filter(Boolean)
				}
			}
			e.b = (t = a, e) => {
				switch (e.type) {
					case o.a: {
						const {
							subredditId: n
						} = e.payload, r = t[n];
						return r && r.status === s.Fetched ? {
							...t,
							[n]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : t
					}
					case o.h: {
						const {
							subredditId: n
						} = e.payload, r = t[n];
						return r && r.status === s.Fetched ? {
							...t,
							[n]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : t
					}
					case o.i: {
						const n = e.payload;
						return {
							...t,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: s.Fetched
							}
						}
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/features/powerups/index.ts": function(t, e, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/gold/constants.ts");
			const o = {};
			var i = n("./node_modules/icepick/icepick.js"),
				c = n("./src/reddit/actions/economics/powerups/constants.ts");
			const d = {};
			e.a = Object(s.c)({
				subredditAchievements: (t = o, e) => {
					switch (e.type) {
						case r.nb:
							const {
								subredditId: n, subredditAchievementFlairs: s
							} = e.payload, o = s.reduce((t, e) => ({
								...t,
								[e.type]: e
							}), t[n] || {});
							return {
								...t, [n]: o
							};
						default:
							return t
					}
				},
				subredditUserAchievements: (t = d, e) => {
					var n, s;
					switch (e.type) {
						case c.d: {
							const {
								id: r,
								userAchievementFlairsByRedditorIds: o
							} = e.payload;
							let i = t[r] || {};
							for (const {
									redditorId: t,
									userAchievementFlairs: e
								} of o) {
								const r = e.map(({
										type: t
									}) => t),
									o = null === (n = e.find(({
										isPreferred: t
									}) => t)) || void 0 === n ? void 0 : n.type,
									c = null === (s = e.find(({
										type: t
									}) => "POWERUPS_SUPPORTER" === t)) || void 0 === s ? void 0 : s.type;
								i = {
									...i,
									[t]: {
										achievementTypes: r,
										preferredType: o,
										supporterType: c
									}
								}
							}
							return {
								...t,
								[r]: i
							}
						}
						case c.f: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = e.payload;
							return Object(i.setIn)(t, [n, s, "pendingPreferredType"], r)
						}
						case c.g: {
							const {
								subredditId: n,
								userId: s,
								achievementType: r
							} = e.payload;
							return Object(i.updateIn)(t, [n, s], t => ({
								...t,
								preferredType: r,
								pendingPreferredType: void 0
							}))
						}
						case c.e: {
							const {
								subredditId: n,
								userId: s
							} = e.payload;
							return Object(i.setIn)(t, [n, s, "pendingPreferredType"], void 0)
						}
						default:
							return t
					}
				}
			})
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return E
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "a", (function() {
				return p
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "f", (function() {
				return S
			})), n.d(e, "b", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = n("./src/reddit/constants/inFeedChaining.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				a = n("./src/reddit/selectors/discoveryUnit.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const _ = [],
				E = (t, e) => {
					const n = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === n
				},
				b = (t, e) => {
					const n = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === n
				},
				p = Object(s.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				m = (t, {
					subredditId: e
				}) => {
					return p(t).some(n => {
						const s = Object(u.R)(t, {
							postId: n
						});
						return !!s && s.id === e
					})
				},
				f = (t, {
					subredditName: e
				}) => {
					const n = r.ac.DAY.toUpperCase(),
						s = Object(o.a)(e, r.T.TOP, {
							t: n
						}),
						i = Object(u.y)(t, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const e = Object(u.F)(t, {
								postId: r
							});
							if (e && !e.hidden && !e.isSponsored) return e
						}
				},
				S = (t, {
					postId: e
				}) => {
					const n = ((t, {
							postId: e
						}) => {
							const n = Object(u.F)(t, {
								postId: e
							});
							if (!n) return _;
							const s = Object(i.a)({
								subredditIds: [n.belongsTo.id],
								count: c.b
							});
							return Object(l.v)(t, {
								key: s
							})
						})(t, {
							postId: e
						}),
						s = [];
					for (const {
							name: r
						} of n) {
						const e = f(t, {
							subredditName: r
						});
						e && s.push(e.id)
					}
					return s
				},
				O = (t, {
					listingName: e
				}) => {
					const n = d.b;
					return Object(a.c)(t, {
						unitName: n
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.9cdc6196311ce8cf4e0c.js.map