// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.2f93fdc5a746429d1eab.js
// Retrieved at 5/13/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"], {
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var s = -1, n = null == t ? 0 : t.length; ++s < n;)
					if (!e(t[s], s, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, s) {
			var n = s("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var s = !0;
				return n(t, (function(t, n, r) {
					return s = !!e(t, n, r)
				})), s
			}
		},
		"./node_modules/lodash/every.js": function(t, e, s) {
			var n = s("./node_modules/lodash/_arrayEvery.js"),
				r = s("./node_modules/lodash/_baseEvery.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/isArray.js"),
				c = s("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, s) {
				var a = i(t) ? n : r;
				return s && c(t, e, s) && (e = void 0), a(t, o(e, 3))
			}
		},
		"./src/graphql/operations/OtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"00d537d082f7"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"5e7d4bfd23ac"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"8dfeb66985eb"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"8f930296d14d"}')
		},
		"./src/lib/constants/specialMembership.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(t, e, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			e.a = function(t) {
				const {
					source: e,
					isSponsored: s,
					domainOverride: r
				} = t;
				let i = "";
				if (s) {
					if (e && e.displayText) return e.displayText.length > 30 ? e.displayText.substring(0, 30) + "..." : e.displayText;
					i = r || Object(n.D)(t)
				} else i = Object(n.D)(t);
				const c = o.a.parse(i),
					a = c.path || "",
					d = a.length > 7 ? a.substring(0, 7) + "..." : a;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(t, e, s) {
			"use strict";
			e.a = t => {
				return `linkedPosts--[post:'${t}']`
			}
		},
		"./src/lib/timeUntil/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.hc, r.kb, r.x, r.L, r.fb, r.Kb],
				i = {
					[r.Kb]: t => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(t, "number")], {
						hk: "3pTp9Z"
					}),
					[r.fb]: t => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(t, "number")], {
						hk: "2gB3sf"
					}),
					[r.L]: t => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(t, "number")], {
						hk: "2w4n8B"
					}),
					[r.x]: t => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(t, "number")], {
						hk: "3zIGRH"
					}),
					[r.kb]: t => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(t, "number")], {
						hk: "28DQqD"
					}),
					[r.hc]: t => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(t, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Kb]: t => n.fbt._("{amount}s", [n.fbt._param("amount", String(t))], {
						hk: "F4qog"
					}),
					[r.fb]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "43tM5H"
					}),
					[r.L]: t => n.fbt._("{amount}h", [n.fbt._param("amount", String(t))], {
						hk: "19NsxU"
					}),
					[r.x]: t => n.fbt._("{amount}d", [n.fbt._param("amount", String(t))], {
						hk: "39MDc9"
					}),
					[r.kb]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.hc]: t => n.fbt._("{amount}y", [n.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					}),
					[r.kb]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.hc]: t => n.fbt._("{amount}y", [n.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					})
				};

			function a(t, e = !1, s = !1) {
				const a = Date.now(),
					d = new Date(t).getTime(),
					u = {
						[r.hc]: "",
						[r.kb]: "",
						[r.x]: "",
						[r.L]: "",
						[r.fb]: "",
						[r.Kb]: ""
					};
				let l = d - a;
				if (l <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const t = Math.floor(l / n);
					t && (u[n] = (e ? c : i)[n](t).toString()), l -= t * n
				}
				const b = o.map(t => u[t]).filter(Boolean).slice(0, 2).join(" ");
				return e || s ? b : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", b)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "e", (function() {
				return r
			})), s.d(e, "b", (function() {
				return o
			})), s.d(e, "c", (function() {
				return i
			})), s.d(e, "d", (function() {
				return c
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			})), s.d(e, "c", (function() {
				return o
			})), s.d(e, "d", (function() {
				return i
			})), s.d(e, "e", (function() {
				return c
			})), s.d(e, "f", (function() {
				return a
			})), s.d(e, "g", (function() {
				return d
			})), s.d(e, "h", (function() {
				return u
			})), s.d(e, "i", (function() {
				return l
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			})), s.d(e, "e", (function() {
				return o
			})), s.d(e, "d", (function() {
				return i
			})), s.d(e, "f", (function() {
				return c
			})), s.d(e, "a", (function() {
				return a
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			}));
			const n = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			}));
			const n = "IMAGE_OCR_ALT_TEXT__LOADED",
				r = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return T
			})), s.d(e, "d", (function() {
				return D
			})), s.d(e, "c", (function() {
				return L
			})), s.d(e, "a", (function() {
				return j
			})), s.d(e, "e", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/discoveryUnit.ts"),
				d = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/inFeedChaining.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				m = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/inFeedChaining.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts");
			const T = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(i.a)(T),
				C = t => {
					const e = Date.now() - t,
						s = Object(E.C)();
					return Object.keys(s).filter(t => s[t].when >= e).map(t => s[t])
				},
				D = ({
					listingName: t,
					listingKey: e,
					postId: s
				}) => async (n, i, l) => {
					if (!s) return;
					const p = Object(S.R)(i(), {
						postId: s
					});
					if (!p) return;
					const T = p.name.toLowerCase(),
						D = t === T;
					if (!(t === _.f || t === _.b || D)) return;
					if (D) return void R(p, e, s)(n, i, l);
					0 === C(o.kb).length && Object(E.xb)(!1);
					let L = i();
					if (Object(f.d)(L, {
							listingKey: e,
							postId: s
						}) || Object(f.a)(L).length >= b.a || Object(E.Q)() || C(o.x).length >= b.a) return;
					const j = Object(S.v)(L, {
						listingKey: e,
						postId: s
					});
					if (j && j.isSponsored) return;
					await n(Object(a.g)()), L = i();
					const h = Object(f.b)(L, {
						listingName: t
					});
					if (!h) return;
					if (!p || Object(f.e)(L, {
							subredditId: p.id
						}) || (t => {
							return C(o.x).some(e => e.subredditId === t)
						})(p.id)) return;
					const A = {
						subredditIds: [p.id],
						count: b.b
					};
					await n(Object(d.b)(A));
					const y = Object(d.a)(A);
					L = i();
					const g = Object(O.v)(L, {
						key: y
					});
					0 !== g.length ? (await n((t => async (e, s) => {
						const n = o.Yb.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, o.R.TOP, {
										t: n
									}),
									r = s();
								return 0 === Object(S.y)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: n,
							sort: o.K.TOP,
							subredditNames: r
						}))
					})(g.map(t => t.name))), L = i(), Object(f.f)(L, {
						postId: s
					}).length < b.c ? Object(r.a)(Object(m.c)(h, "other", p)(L)) : (Object(E.a)(s, p.id), Object(r.a)(Object(m.d)(h, p)(L)), n(I({
						listingKey: e,
						postId: s
					})))) : Object(r.a)(Object(m.c)(h, "no_chaining", p)(L))
				}, L = "FEED_CHAINING__CHAIN_TOGGLED", j = (Object(i.a)(L), "FEED_CHAINING__CHAINING_TOGGLED"), h = Object(i.a)(j), A = () => async t => {
					Object(E.xb)(!0), t(h({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(n.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), p.b.Undo, n.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(E.xb)(!1), t(h({
							isDismissed: !1
						}))
					})))
				}, R = (t, e, s) => async (t, e, s) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			}));
			const n = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return n
			})), s.d(e, "d", (function() {
				return r
			})), s.d(e, "b", (function() {
				return o
			})), s.d(e, "f", (function() {
				return i
			})), s.d(e, "g", (function() {
				return c
			})), s.d(e, "a", (function() {
				return a
			})), s.d(e, "t", (function() {
				return d
			})), s.d(e, "e", (function() {
				return u
			})), s.d(e, "r", (function() {
				return l
			})), s.d(e, "s", (function() {
				return b
			})), s.d(e, "n", (function() {
				return _
			})), s.d(e, "l", (function() {
				return E
			})), s.d(e, "m", (function() {
				return m
			})), s.d(e, "k", (function() {
				return p
			})), s.d(e, "i", (function() {
				return f
			})), s.d(e, "j", (function() {
				return S
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "p", (function() {
				return T
			})), s.d(e, "q", (function() {
				return I
			})), s.d(e, "o", (function() {
				return C
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				b = "UPDATE_COLLECTION_SUCCESS",
				_ = "UPDATE_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				m = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				p = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				f = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return E
			})), s.d(e, "a", (function() {
				return S
			})), s.d(e, "f", (function() {
				return C
			})), s.d(e, "b", (function() {
				return h
			})), s.d(e, "e", (function() {
				return g
			})), s.d(e, "d", (function() {
				return N
			})), s.d(e, "l", (function() {
				return k
			})), s.d(e, "k", (function() {
				return x
			})), s.d(e, "j", (function() {
				return M
			})), s.d(e, "g", (function() {
				return v
			})), s.d(e, "i", (function() {
				return w
			})), s.d(e, "h", (function() {
				return Y
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts");
			const E = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				m = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				p = Object(r.a)(E),
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(r.a)(S),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				D = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				L = Object(r.a)(C),
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				R = Object(r.a)(h),
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				U = Object(r.a)(g),
				P = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				F = Object(r.a)(N),
				k = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(_.U)(o, {
							subredditId: t
						}).name;
					s(m());
					const c = await Object(a.k)(r(), i, e);
					if (c.ok) {
						s(p({
							subredditId: t,
							isEnabled: e
						}))
					} else s(f());
					return c.ok
				}, x = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(_.U)(o, {
							subredditId: t
						}).name;
					s(O());
					const c = await Object(a.j)(r(), e, u.d.LinkFlair, i);
					if (c.ok) {
						s(T({
							subredditId: t,
							canAssignOwn: e
						}))
					} else s(I());
					return c.ok
				}, M = (t, e) => async (s, r, {
					apiContext: o
				}) => {
					const d = r(),
						b = Object(_.U)(d, {
							subredditId: e
						}).name;
					s(D());
					const E = await Object(a.f)(o(), t, b, u.d.LinkFlair);
					let m = E.ok && !(E.body && !1 === E.body.success);
					if (m) {
						const n = E.body;
						if (s(L({
								subredditId: e,
								template: n
							})), n.id) {
							const r = t.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[n.id];
							r ? m = await s(Object(i.d)(e, n.id, r)) : o && (m = await s(Object(i.c)(e, n.id)))
						}
					}
					if (m) {
						const t = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						s(Object(c.f)(t))
					} else {
						s(j());
						const r = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(t, e));
						s(Object(c.f)(r))
					}
					return m
				}, v = (t, e) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(_.U)(i, {
							subredditId: e
						}).name;
					if (s(A()), (await Object(a.b)(o(), t, d)).ok) {
						s(R({
							subredditId: e,
							templateId: t
						}));
						const r = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						s(Object(c.f)(r))
					} else {
						s(y());
						const r = Object(c.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), v(t, e));
						s(Object(c.f)(r))
					}
				}, w = (t, e) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						d = Object(b.d)(i, {
							subredditId: e
						}).templateIds,
						E = Object(_.U)(i, {
							subredditId: e
						}).name;
					if (s(U({
							subredditId: e,
							templateIds: t
						})), (await Object(a.e)(o(), E, u.d.LinkFlair, t)).ok) {
						s(P());
						const t = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						s(Object(c.f)(t))
					} else {
						s(F({
							subredditId: e,
							templateIds: d
						}));
						const r = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(t, e));
						s(Object(c.f)(r))
					}
				}, Y = ({
					post: t,
					previewFlair: e,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: i
				}) => {
					const c = t.flair.filter(t => !Object(d.q)(t.type));
					if (e && c.unshift(e), n(Object(o.P)({
							[t.id]: {
								flair: c
							}
						})), e) {
						const n = Object(d.g)(e);
						Object(a.h)(i(), t.id, s, n)
					} else Object(a.h)(i(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return I
			})), s.d(e, "d", (function() {
				return D
			})), s.d(e, "a", (function() {
				return L
			})), s.d(e, "c", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/values.js"),
				a = s.n(c),
				d = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/imageUploads.ts"),
				l = s("./src/reddit/helpers/media/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/lib/omitHeaders/index.ts"),
				m = s("./src/reddit/constants/headers.ts");
			var p = s("./src/reddit/helpers/trackers/blade.ts"),
				f = s("./src/reddit/models/Image/index.tsx"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/telemetry/index.ts");
			const T = ({
				subredditId: t,
				flairId: e,
				imageKey: s,
				imageData: n
			}) => async (r, o, i) => {
				const c = o(),
					a = Object(S.U)(c, {
						subredditId: t
					});
				if (!a) return !1;
				r(Object(u.k)(n));
				const d = await (async (t, e, s, n, r, o) => Object(_.a)(Object(E.a)(t, [m.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${s}`,
					method: b.eb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), a.name, e, n.file.name, s, await Object(l.g)(n.file));
				let p = !1;
				try {
					const t = await Object(u.g)(o(), d, n, f.a.FlairTemplates);
					t && r(Object(u.j)(t)), p = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					r(Object(u.i)(O))
				}
				return p
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(d.a)(I), D = (t, e, s) => async (n, o, c) => {
				const {
					apiContext: d
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...D
				} = s;
				let L = D;
				const j = Object(S.U)(l, {
					subredditId: t
				});
				if (!j) return !1;
				const h = l.structuredStyles.flairTemplate.models[e];
				if (h && i()(h, L)) return !0;
				if (I) {
					const s = [];
					if (r()(I, (r, o) => {
							r && s.push(n(T({
								flairId: e,
								imageData: Object(f.m)(r),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(s)).every(t => t)) return !1;
					L = ((t, e, s) => {
						const n = {
							...t
						};
						return r()(e, (t, e) => {
							const r = t && s.imageUploads[t.id];
							r && r.kind === f.b.TempUploaded && (n[e] = r.url)
						}), n
					})(L, I, o())
				}
				l = o();
				let A = null,
					R = null;
				const y = [];
				try {
					(A = await Object(u.f)(l, f.a.FlairTemplates)) && (R = Object(u.m)(A)(n, o, c), y.push(...a()(A.imagesByKey)))
				} catch (P) {
					return !1
				}
				const g = await (async (t, e, s, n) => Object(_.a)(Object(E.a)(t, [m.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: b.eb.PUT,
						data: n
					}))(d(), j.name, e, L),
					N = h ? "edit_post_flair_template" : "save_post_flair_template",
					U = Object(p.e)(l, N);
				if (g.ok) {
					let t;
					if (R) try {
						await R, t = ((t, e, s) => {
							const n = {
								...t
							};
							return e.forEach(t => {
								const e = s.imageUploads[t.id];
								e && e.kind === f.b.Uploaded && (t.url === n.postBackgroundImage ? n.postBackgroundImage = e.url : t.url === n.postPlaceholderImage && (n.postPlaceholderImage = e.url))
							}), n
						})(L, y, o())
					} catch (P) {
						t = null
					} else t = L;
					n(C({
						flairId: e,
						template: t || L
					}))
				} else A && A.websocket.close();
				return Object(O.a)({
					...U,
					actionInfo: {
						...U.actionInfo,
						success: g.ok
					}
				}), g.ok
			}, L = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", j = Object(d.a)(L), h = (t, e) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					i = Object(S.U)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, s) => Object(_.a)(Object(E.a)(t, [m.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: b.eb.DELETE
					}))(r(), i.name, e),
					a = Object(p.e)(o, "delete_flair_template");
				return c.ok && s(j({
					flairId: e
				})), Object(O.a)({
					...a,
					actionInfo: {
						...a.actionInfo,
						success: c.ok
					}
				}), c.ok
			}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return b
			})), s.d(e, "b", (function() {
				return p
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/endpoints/category/subreddits.ts"),
				c = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts");
			! function(t) {
				t.Factorization = "factorization", t.CustomModRelevant = "custom_mod_relevant"
			}(n || (n = {}));
			var l = s("./src/reddit/selectors/subreddit.ts");
			const b = t => {
					let e = t.subredditIds.join(",");
					return t.count && (e += `--[count:'${t.count}']`), t.variant && (e += `--[variant:'${t.variant}']`), e.toLowerCase()
				},
				_ = Object(r.a)(o.p),
				E = Object(r.a)(o.o),
				m = Object(r.a)(o.n),
				p = t => async (e, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = b(t),
						p = Object(l.u)(r, {
							key: o
						}),
						f = Object(l.t)(r, {
							key: o
						});
					if (p || f.length > 0) return;
					e(_({
						key: o
					}));
					const S = await ((t, e) => Object(a.a)(Object(d.a)(t, [u.a]), {
						data: {
							sr_fullnames: e.subredditIds.join(","),
							limit: e.count,
							variant: e.variant
						},
						endpoint: `${t.apiUrl}/api/similar_subreddits.json`,
						method: c.eb.GET
					}))(n(), t);
					if (S.ok) {
						const t = Object(i.b)(S.body);
						e(E({
							key: o,
							...t
						}))
					} else {
						const t = S.error;
						e(m({
							key: o,
							error: t
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return q
			})), s.d(e, "a", (function() {
				return K
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				c = s("./src/reddit/actions/googleQASchema/constants.ts");
			const a = Object(r.a)(c.b),
				d = Object(r.a)(c.a);
			var u = s("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(r.a)(u.b),
				b = Object(r.a)(u.a);
			var _ = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				m = (s("./src/graphql/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				p = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = s("./src/reddit/models/Post/index.ts");
			var T = ({
				getState: t,
				onFailure: e,
				onSuccess: s,
				postId: n,
				response: r
			}) => {
				if (!r.ok) return void e(r.error);
				const o = r.body,
					{
						post: c
					} = o && o.data,
					a = t(),
					d = Object(i.a)(n, null, {
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
								s = t => {
									const s = Object(p.e)(t);
									e.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = t;
									if (n && n.type === O.a.Post && n.postInfo) {
										const t = Object(p.e)(n.postInfo);
										e.posts[t.id] = t
									}
									return Object(O.l)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(f.a)(t.profile)) : Object(O.m)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(S.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(m.a)(t.subreddit))), s.id
								};
							if (t && t.edges)
								for (const {
										node: n
									} of t.edges) {
									const t = s(n);
									t && e.postIds.push(t)
								}
							return e
						})(t);
						s({
							count: e,
							key: d,
							meta: a.meta,
							postFlair: r,
							postId: n,
							postIds: o,
							posts: i,
							profiles: u,
							subreddits: l
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: n,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(r.a)(_.a),
				C = Object(r.a)(_.b),
				D = Object(r.a)(_.c);
			var L = s("./src/reddit/actions/subreddit/constants.ts"),
				j = s("./src/reddit/constants/experiments.ts"),
				h = s("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				A = (s("./src/graphql/operations/SubredditPosts.json"), s("./src/graphql/operations/SubredditsPosts.json"));
			var R = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						e({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (o) {
						s(o)
					}
				},
				y = s("./src/reddit/selectors/experiments/listingBelow.ts");
			var g = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					options: r,
					postId: c,
					post: a
				}) => {
					try {
						const s = [],
							d = {},
							u = {};
						if (!a || !a.linked) return;
						const l = t(),
							b = l.posts && l.posts.models,
							_ = Object(j.Fd)(Object(y.b)(l)) ? Object(i.a)(r.subredditName, n.R.TOP, {
								t: n.Yb.WEEK
							}) : Object(o.a)(c),
							E = a.linked.posts && a.linked.posts.edges || [];
						for (const {
								node: t
							} of E) {
							if (!t || !t.id) break;
							if (s.push(t.id), !b.hasOwnProperty(t.id)) {
								const e = Object(p.a)(t);
								d[t.id] = e.post, e.crosspost && (d[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								u[e.id] = Object(S.a)(e)
							}
						}
						e({
							dist: a.linked.posts && a.linked.posts.dist || null,
							key: _,
							meta: l.meta,
							posts: d,
							postIds: s,
							subreddits: u
						})
					} catch (d) {
						s(d)
					}
				},
				N = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var U = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var P = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					options: r,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const s = o.elements || o.posts,
							c = t(),
							a = ((t, e) => {
								const {
									edges: s
								} = t, n = s.filter(t => (t => !t.node.crosspostRoot)(t) && ((t, e) => !e.hasOwnProperty(t.node.id))(t, e));
								return {
									...t,
									edges: n
								}
							})(s, c.posts && c.posts.models);
						if (!a.edges.length) return;
						const d = Object(N.a)(a),
							{
								range: u,
								sort: l,
								subredditName: b
							} = r,
							_ = Object(i.a)(b, n.R[l], {
								t: u
							}),
							E = U(d),
							m = d.map(t => t.id);
						e({
							dist: s.dist,
							key: _,
							meta: c.meta,
							postIds: m,
							posts: E
						})
					} catch (c) {
						s(c)
					}
				},
				F = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const M = Object(r.a)(x.b),
				v = Object(r.a)(x.a),
				w = Object(r.a)(L.j),
				Y = Object(r.a)(L.i),
				G = Object(r.a)(L.r),
				B = Object(r.a)(L.q),
				q = t => async (e, s, {
					gqlContext: n
				}) => {
					const r = (await ((t, e) => Object(E.a)(t, {
							...A,
							variables: e
						}))(n(), t)).body,
						{
							subredditNames: o,
							...i
						} = t,
						c = [];
					try {
						for (const t of r.data.subredditsInfoByNames) {
							const e = t.elements.edges[0];
							e && Object(O.m)(e.node) && P({
								getState: s,
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
						e(G(c))
					} catch (a) {
						e(B(a))
					}
				}, K = t => async (e, s, {
					gqlContext: r
				}) => {
					var c;
					const {
						includePostImageOCRAltText: u,
						includeListingBelowExperiment: _,
						includeOtherDiscussions: m,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: f,
						postId: S,
						range: O,
						sort: L,
						subredditName: A
					} = t, N = Object(i.a)(S, null, {
						isOtherDiscussions: !0
					}), U = s(), x = Object(k.y)(U, {
						listingKey: N
					}), G = m && (!x || 0 === x.length), B = Object(i.a)(A, n.R[L], {
						t: O
					}), q = Object(k.y)(U, {
						listingKey: B
					}), K = p && (!q || 0 === q.length), V = Object(j.Fd)(Object(y.b)(U)) ? B : Object(o.a)(S), H = Object(k.y)(U, {
						listingKey: V
					}), W = _ && (!H || 0 === H.length), z = Object(k.F)(U, {
						postId: S
					}), Q = u && !!z && !!z.media && (Object(F.H)(z.media) || Object(F.F)(z.media)) && !z.media.altText;
					if (!(G || K || W || Q || f)) return;
					G && e(D({
						key: N
					}));
					const $ = await ((t, e) => Object(E.a)(t, {
							...h,
							variables: e
						}))(r(), t),
						X = $.body;
					f && ($.ok ? X.data && X.data.post && e(a({
						postId: S,
						isEligibleForQASchema: null !== (c = X.data.post.isEligibleForQASchema) && void 0 !== c && c
					})) : e(d())), G && T({
						getState: s,
						onFailure: t => e(I(t)),
						onSuccess: t => e(C(t)),
						postId: S,
						response: $
					}), K && ($.ok ? X.data && P({
						getState: s,
						onFailure: t => e(Y(t)),
						onSuccess: t => e(w(t)),
						options: t,
						subreddit: X.data.subreddit
					}) : e(Y($.error))), W && $.ok && g({
						getState: s,
						onFailure: t => e(b(t)),
						onSuccess: t => e(l(t)),
						options: t,
						postId: S,
						post: X.data.post
					}), Q && $.ok && R({
						getState: s,
						onFailure: t => e(v(t)),
						onSuccess: t => e(M(t)),
						postId: S,
						post: X.data.post
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "r", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			})), s.d(e, "i", (function() {
				return o
			})), s.d(e, "j", (function() {
				return i
			})), s.d(e, "h", (function() {
				return c
			})), s.d(e, "c", (function() {
				return a
			})), s.d(e, "d", (function() {
				return d
			})), s.d(e, "b", (function() {
				return u
			})), s.d(e, "p", (function() {
				return l
			})), s.d(e, "q", (function() {
				return b
			})), s.d(e, "o", (function() {
				return _
			})), s.d(e, "f", (function() {
				return E
			})), s.d(e, "g", (function() {
				return m
			})), s.d(e, "e", (function() {
				return p
			})), s.d(e, "m", (function() {
				return f
			})), s.d(e, "n", (function() {
				return S
			})), s.d(e, "l", (function() {
				return O
			})), s.d(e, "k", (function() {
				return T
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(t, e, s) {
			t.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return a
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i);

			function a(t) {
				const e = new Date(t.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: t.className
				}, e ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(r.d)(t.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(t.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(t, e, s) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return U
			})), s.d(e, "a", (function() {
				return K
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				p = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/helpers/flair.ts"),
				S = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				T = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = s("./src/reddit/models/Flair/index.ts"),
				C = s("./src/reddit/models/Media/index.ts"),
				D = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				L = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/reddit/components/FlairWrapper/index.tsx"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				y = s("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				g = s.n(y);
			const N = Object(a.c)({
				poll: (t, e) => t.polls.models[e.pollId],
				resultsByVoters: (t, e) => t.polls.results.byVoters[e.pollId]
			});
			var U, P = Object(i.b)(N)((function(t) {
					const {
						poll: e,
						resultsByVoters: s
					} = t, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(t.className, g.a.proposalMetaData)
					}, o.a.createElement("span", null, h.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [h.fbt._param("count", Object(A.a)(n)), h.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), e && o.a.createElement(R.a, {
						className: g.a.proposalMetaDataTime,
						poll: e
					}))
				})),
				F = s("./src/reddit/components/SEOTitle/index.tsx"),
				k = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/PostTitle/index.m.less"),
				M = s.n(x),
				v = s("./src/config.ts"),
				w = s("./src/reddit/hooks/useClickSourceData.ts"),
				Y = s("./src/reddit/hooks/useExperimentVariant.ts"),
				G = s("./src/reddit/hooks/usePostContext.ts"),
				B = s("./src/reddit/hooks/useTheme.ts");

			function q() {
				return (q = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
					}
					return t
				}).apply(this, arguments)
			}! function(t) {
				t[t.ExtraLarge = 0] = "ExtraLarge", t[t.Large = 1] = "Large", t[t.Medium = 2] = "Medium", t[t.Small = 3] = "Small", t[t.ExtraSmall = 4] = "ExtraSmall"
			}(U || (U = {}));
			const K = ({
					size: t,
					titleColor: e,
					titleType: s,
					nowrap: n,
					children: r,
					className: i,
					redditStyle: c
				}) => {
					const a = Object(B.a)();
					let d = "";
					switch (t) {
						case U.ExtraLarge:
							d = M.a.ExtraLarge;
							break;
						case U.Large:
							d = M.a.Large;
							break;
						case U.Medium:
							d = M.a.Medium;
							break;
						case U.Small:
							d = M.a.Small;
							break;
						case U.ExtraSmall:
							d = M.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Title, i, d, {
							[M.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": e || Object(D.a)({
								redditStyle: c,
								theme: a
							}).titleText
						}
					}, s ? o.a.createElement(F.b, {
						type: s
					}, r) : r)
				},
				V = ({
					className: t,
					disableVisited: e,
					titleColor: s,
					children: n,
					...r
				}) => o.a.createElement(c.a, q({}, r, {
					className: Object(u.a)(t, M.a.styledLink, {
						[M.a.isVisitedEnabled]: !e
					})
				}), n),
				H = ({
					disableVisited: t,
					nowrap: e,
					className: s,
					children: n
				}) => o.a.createElement("div", {
					className: Object(u.a)(M.a.titleContainer, s, {
						[M.a.isNoWrap]: e,
						[M.a.isVisitedEnabled]: !t
					})
				}, n),
				W = Object(a.c)({
					flairPosition: (t, {
						pageLayer: e
					}) => Object(_.p)(t, {
						pageLayer: e
					}),
					shouldOpenPostInNewTab: k.bb
				}),
				z = t => {
					const {
						post: e,
						subreddit: s
					} = t, {
						isSponsored: n
					} = e, r = Object(w.a)(), i = Object(Y.a)(b.Sb) === b.Wb.Enabled;
					if (t.isCommentsPage && !t.isCommentPermalink && !t.shouldLinkWrap) return o.a.createElement(H, {
						nowrap: t.nowrap
					}, o.a.createElement(Q, t));
					if (t.isCommentsPageAd && e.source && e.source.url) return o.a.createElement(E.b, {
						href: e.source.url,
						isSponsored: n,
						postId: e.id,
						source: e.source
					}, o.a.createElement(Q, t)); {
						const c = e.media && Object(C.G)(e.media) ? Object(O.c)(e.id, s.name) : e.permalink,
							a = t.isCommentPermalink ? Object(S.b)(c) : i ? Object(p.a)(c, void 0, r) : Object(p.a)(c);
						return o.a.createElement(H, {
							disableVisited: t.disableVisited,
							nowrap: t.nowrap
						}, n ? ((t, e) => {
							const {
								source: s
							} = Object(d.t)(t, e.imageGalleryCurrentItem);
							return s ? o.a.createElement(E.b, {
								href: s.url,
								isSponsored: t.isSponsored,
								postId: t.id,
								source: s
							}, o.a.createElement(Q, e)) : o.a.createElement(Q, e)
						})(e, t) : o.a.createElement(V, {
							className: t.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: t.disableVisited,
							target: t.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: t.titleColor,
							to: a
						}, o.a.createElement(Q, t)))
					}
				},
				Q = t => {
					const {
						leftFlair: e,
						isCommentsPageAd: s,
						post: n
					} = t;
					let r = t.format ? t.format(n) : n.title;
					s && "string" == typeof r && (r = (t => {
						return t.length >= 250 ? t.slice(0, 250 - "...".length) + "..." : t
					})(r));
					const i = t.isCommentsPage ? F.a.PostComments : F.a.PostItem;
					return o.a.createElement(K, {
						className: t.titleClassName,
						nowrap: t.nowrap,
						redditStyle: t.redditStyle || t.isCommentsPage,
						size: t.size,
						titleColor: t.titleColor,
						titleType: i
					}, e && o.a.createElement(j.a, {
						titleFlair: e,
						nowrap: !0,
						post: n,
						sendEvent: t.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				$ = t => {
					const {
						hideSourceLink: e,
						post: s
					} = t, {
						isSponsored: n
					} = s, r = !e && !t.isCrosspost && t.size !== U.Large && !s.isSponsored && !(s.media && Object(C.G)(s.media)) && (s.source || s.media && (s.media.type === C.o.GIFVIDEO || s.media.type === C.o.IMAGE || s.media.type === C.o.EMBED));
					if (e || !t.isCommentsPage || t.isCommentPermalink || t.shouldLinkWrap) {
						if (r) return o.a.createElement(m.a, {
							className: t.outboundLinkClassName,
							href: Object(C.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source
						}, Object(L.a)(s), !s.isSponsored && o.a.createElement(T.a, {
							className: M.a.outboundLinkIcon
						}))
					} else if (s.source && !t.isCrosspost && t.size !== U.Large && t.size !== U.ExtraLarge) return o.a.createElement(m.a, {
						className: t.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source
					}, Object(L.a)(s), !s.isSponsored && o.a.createElement(T.a, {
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class X extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(D.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(D.a)(this.props).titleText,Object(D.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: t,
						disableFlair: e,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: a
					} = this.props, d = s === I.b.Left, l = Object(j.b)(c), b = a ? l.filter(t => t.type === I.f.Nsfw || t.type === I.f.Spoiler) : d ? l.filter(t => Object(f.q)(t.type)) : [], _ = a ? [] : d ? l.filter(t => !Object(f.q)(t.type)) : l, E = !r && !n, m = !e && b && b.length > 0 && E, p = !e && _ && _.length > 0 && E;
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Component, t, c.id)
					}, !a && m && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(z, q({}, this.props, {
						leftFlair: a ? b : void 0
					})), i && o.a.createElement(P, {
						className: M.a.pollMeta,
						pollId: i.id
					}), o.a.createElement($, this.props), p && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: M.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${v.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			e.c = o.a.memo((function(t) {
				const e = Object(_.Z)(),
					s = Object(_.v)(e),
					n = Object(G.a)(),
					r = Object(i.e)(r => W(r, {
						...n,
						...t,
						isCommentPermalink: s,
						pageLayer: e
					})),
					c = Object(B.a)(),
					a = Object(l.b)();
				return o.a.createElement(X, q({
					pageLayer: e,
					isCommentPermalink: s
				}, n, r, t, {
					theme: c,
					sendEvent: a
				}))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "c", (function() {
				return r
			})), s.d(e, "b", (function() {
				return o
			}));
			const n = 3,
				r = 5,
				o = 10
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(t, e, s) {
			"use strict";

			function n(t, e) {
				if (t.placement && !e.placement) return -1;
				if (e.placement && !t.placement) return 1;
				if (t.position && !e.position) return -1;
				if (e.position && !t.position) return 1;
				let s = 0;
				return t.placement && e.placement && (s = t.placement.localeCompare(e.placement)), 0 === s && t.position && e.position && (s = t.position - e.position), 0 === s && (s = t.title.localeCompare(e.title)), s
			}

			function r(t) {
				return [...t].sort(n)
			}
			s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: t
			}) => {
				const e = [];
				for (const {
						node: s
					} of t) e.push(Object(n.e)(s));
				return e
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case n.E.NO_STRIPE_SUBSCRIPTION:
							case n.E.USER_DOESNT_EXIST:
							case n.E.USER_REQUIRED_ERROR:
							case n.E.VALIDATION_ERROR:
								return t;
							case n.E.NO_USER:
							case n.E.NO_TEXT:
							case n.E.NO_URL:
								return n.E.VALIDATION_ERROR;
							case n.E.CREDIT_CARD_FAILURE:
							case n.E.CREDIT_CARD_FAILURE_GENERIC:
								return n.E.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return n.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.E.VALIDATION_ERROR
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
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(t, e, s) {
			"use strict";
			s.d(e, "g", (function() {
				return S
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "a", (function() {
				return D
			})), s.d(e, "E", (function() {
				return L
			})), s.d(e, "F", (function() {
				return j
			})), s.d(e, "M", (function() {
				return A
			})), s.d(e, "B", (function() {
				return R
			})), s.d(e, "C", (function() {
				return y
			})), s.d(e, "D", (function() {
				return g
			})), s.d(e, "i", (function() {
				return N
			})), s.d(e, "w", (function() {
				return U
			})), s.d(e, "x", (function() {
				return P
			})), s.d(e, "L", (function() {
				return F
			})), s.d(e, "K", (function() {
				return k
			})), s.d(e, "I", (function() {
				return x
			})), s.d(e, "v", (function() {
				return M
			})), s.d(e, "y", (function() {
				return v
			})), s.d(e, "z", (function() {
				return w
			})), s.d(e, "A", (function() {
				return Y
			})), s.d(e, "N", (function() {
				return G
			})), s.d(e, "J", (function() {
				return B
			})), s.d(e, "t", (function() {
				return q
			})), s.d(e, "H", (function() {
				return K
			})), s.d(e, "d", (function() {
				return V
			})), s.d(e, "c", (function() {
				return H
			})), s.d(e, "b", (function() {
				return W
			})), s.d(e, "f", (function() {
				return z
			})), s.d(e, "e", (function() {
				return Q
			})), s.d(e, "s", (function() {
				return Z
			})), s.d(e, "m", (function() {
				return J
			})), s.d(e, "r", (function() {
				return tt
			})), s.d(e, "k", (function() {
				return et
			})), s.d(e, "l", (function() {
				return st
			})), s.d(e, "n", (function() {
				return nt
			})), s.d(e, "p", (function() {
				return rt
			})), s.d(e, "q", (function() {
				return ot
			})), s.d(e, "o", (function() {
				return it
			})), s.d(e, "j", (function() {
				return ct
			})), s.d(e, "u", (function() {
				return at
			})), s.d(e, "G", (function() {
				return dt
			}));
			var n, r = s("./src/lib/stringInterpolate/index.ts"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/models/Widgets/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/widgets.ts"),
				E = s("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const m = "discovery_unit",
				p = (t, e, s) => ({
					...b.defaults(t),
					source: m,
					screen: b.screen(t),
					discoveryUnit: {
						id: e.id,
						type: e.unitType,
						title: e.title && s ? Object(r.a)(e.title, {
							subredditName: s.name
						}) : e.title,
						name: e.unitName
					}
				}),
				f = (t, e, s) => ({
					...p(t, e, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (t, e) => {
					Object(E.a)(O(e)(t))
				},
				O = (t, e) => s => f(s, t, e),
				T = (t, e, s, n) => "unitName" in e ? p(t, e, n) : ((t, e, s) => ({
					...b.defaults(t),
					source: "search",
					screen: b.screen(t),
					search: s ? {
						...b.search(t, s),
						structureType: b.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: e.name,
						type: "listing",
						title: e.layout.title,
						name: e.name
					}
				}))(t, e, s),
				I = (t, e, s, r, o) => ({
					...T(t, e, r, o),
					action: "view",
					noun: n.ITEM_POST,
					post: b.post(t, s)
				}),
				C = ({
					post: t,
					rawQuery: e,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
				});
			var D;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(D || (D = {}));
			const L = (t, e, s) => {
					Object(E.a)(h(t, e, s, i.c.CLICK))
				},
				j = (t, e, s) => {
					Object(E.a)(h(t, e, s, i.c.VIEW))
				},
				h = (t, e, s, n) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						...b.defaults(t),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: C(e),
						discoveryUnit: s === D.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: b.actionInfo(t, {
							paneName: s,
							position: r
						}),
						search: {
							originPageType: t.platform.currentPage ? b.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
							query: e.rawQuery,
							structureType: b.StructureType.Trending,
							queryId: n === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				A = (t, e, s, n, r, o, c) => {
					Object(E.a)({
						...b.defaults(t),
						...Object(a.e)(t, s, n, r, o, e),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				R = (t, e, s, n) => {
					Object(E.a)(I(t, e, s, n))
				},
				y = (t, e, s, n) => r => I(r, t, e, s, n),
				g = (t, e, s, r) => {
					const o = T(t, e, r);
					Object(E.a)({
						...o,
						...Object(_.b)(t, s),
						action: "view",
						noun: n.ITEM_SUBREDDIT
					})
				},
				N = (t, e) => {
					Object(E.a)({
						...p(t, e),
						source: m,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				U = (t, e, s, n) => {
					Object(E.a)(P(e, s, n)(t))
				},
				P = (t, e, s, r) => o => {
					return {
						...T(o, t, s, r),
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_POST,
						post: b.post(o, e)
					}
				},
				F = (t, e, s, n) => r => o => Object(a.e)(o, r, t, e, s, n),
				k = (t, e, s, n) => r => o => Object(a.d)(o, t, e, void 0, s, r, n),
				x = (t, e, s, n) => r => o => ({
					...Object(a.e)(o, r, t, e, s, n),
					noun: "ad"
				}),
				M = (t, e) => s => r => ({
					...t ? p(r, t, e) : {},
					source: m,
					action: i.c.CLICK,
					noun: n.ITEM_POST,
					post: b.post(r, s)
				}),
				v = (t, e, s, n) => {
					Object(E.a)(w(e, s, n)(t))
				},
				w = (t, e, s, n) => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(_.b)(r, o) : void 0;
					return {
						...T(r, t, s, n),
						...c,
						source: m,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(r, e)
					}
				},
				Y = (t, e, s) => n => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(_.b)(r, o) : void 0;
					return {
						...T(r, t, void 0, s),
						...c,
						source: m,
						action: i.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(r, e)
					}
				},
				G = (t, e, s) => {
					const n = T(t, e);
					Object(E.a)({
						...n,
						...Object(_.b)(t, s),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				B = (t, e, s, n, r, o) => {
					Object(E.a)({
						...b.defaults(t),
						...Object(a.d)(t, e, s, n, r, void 0, o)
					})
				},
				q = (t, e, s) => {
					const n = T(t, e);
					Object(E.a)({
						...n,
						...Object(_.b)(t, s),
						source: m,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (t, e) => s => {
					const n = Object(u.j)(e);
					return {
						...p(s, t, e),
						...Object(_.b)(s, n),
						source: m,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (t, e) => s => ({
					...p(s, t, e),
					action: "status",
					actionInfo: b.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				H = (t, e, s) => n => ({
					...p(n, t, s),
					action: "status",
					actionInfo: b.actionInfo(n, {
						reason: e,
						success: !1
					}),
					noun: "loading"
				}),
				W = (t, e) => s => ({
					...p(s, t, e),
					action: "click",
					noun: "close"
				}),
				z = (t, e, s) => n => ({
					...T(n, t, e, s),
					action: "click",
					noun: "scroll"
				}),
				Q = (t, e) => s => ({
					...p(s, t, e),
					action: "click",
					noun: "overflow_menu"
				}),
				$ = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (t, e, s) => b.actionInfo(t, {
					position: s
				}),
				Z = (t, e, s) => {
					const n = $();
					return t => ({
						...f(t, n),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e)
					})
				},
				J = (t, e, s) => {
					const n = $();
					return t => ({
						...I(t, n, e),
						actionInfo: X(t, 0, s)
					})
				},
				tt = (t, e, s) => {
					const r = $();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: m,
						action: i.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				et = (t, e, s) => {
					const r = $();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, s),
						post: b.post(t, e) || null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				st = (t, e, s, r) => {
					const o = $();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, r),
						subreddit: b.subredditById(t, s) || null,
						post: b.post(t, e) || null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				nt = (t, e, s) => {
					const r = $();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				rt = (t, e, s, r) => {
					const o = $();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						post: r ? b.post(t, r) : null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ot = (t, e, s, r) => {
					const o = $();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						post: r ? b.post(t, r) : null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				it = (t, e, s) => {
					const r = $();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: m,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ct = (t, e, s) => {
					const r = $();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: m,
						action: i.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				at = (t, e) => s => ({
					...p(s, t),
					...e && Object(_.b)(s, e),
					source: m,
					action: i.c.CLICK,
					noun: "item"
				}),
				dt = t => e => ({
					...p(e, t),
					source: m,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(t, e = r.a) {
				return Object(n.e)(s => Object(r.c)(s, {
					experimentName: t,
					experimentEligibilitySelector: e
				}))
			}
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(t, e, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			e.a = t => r.a.createElement("svg", {
				className: t.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "c", (function() {
				return r
			})), s.d(e, "b", (function() {
				return i
			})), s.d(e, "d", (function() {
				return c
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(t) {
				t.Loyalty = "loyalty", t.Achievement = "achievement", t.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(t) {
				t.Gallery = "gallery", t.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				c = t => t === o.a.First ? n.Loyalty : t === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "r", (function() {
				return i
			})), s.d(e, "a", (function() {
				return a
			})), s.d(e, "e", (function() {
				return d
			})), s.d(e, "g", (function() {
				return u
			})), s.d(e, "n", (function() {
				return l
			})), s.d(e, "o", (function() {
				return b
			})), s.d(e, "f", (function() {
				return _
			})), s.d(e, "c", (function() {
				return m
			})), s.d(e, "q", (function() {
				return f
			})), s.d(e, "k", (function() {
				return S
			})), s.d(e, "j", (function() {
				return O
			})), s.d(e, "h", (function() {
				return T
			})), s.d(e, "i", (function() {
				return I
			})), s.d(e, "d", (function() {
				return C
			})), s.d(e, "m", (function() {
				return D
			})), s.d(e, "b", (function() {
				return L
			})), s.d(e, "l", (function() {
				return j
			})), s.d(e, "p", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(t) {
				t.LINK = "LINK", t.POLL = "POLL", t.SELF = "SELF"
			}(c || (c = {})),
			function(t) {
				t.RTJSON = "RTJSON", t.TEXT = "TEXT"
			}(a || (a = {})),
			function(t) {
				t.CREATED = "CREATED", t.PROCESSING = "PROCESSING", t.FAILED = "FAILED", t.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const u = t => {
					return new Set(["links", "text", "polls"]).has(t)
				},
				l = t => t.__typename === o.c.AvailableRedditor,
				b = t => t.__typename === r.a.Subreddit;
			var _, E, m, p;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(_ || (_ = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(E || (E = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(m || (m = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(p || (p = {}));
			const f = t => E[p[t]],
				S = t => p[E[t]],
				O = t => m[E[t]],
				T = t => E[m[t]],
				I = t => p[m[t]];
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
				L = "custom",
				j = t => {
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
							return Object(n.a)(t)
					}
				},
				h = t => "frequency" in t && !!t.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			}));
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(t) {
				t[t.Failure = 0] = "Failure", t[t.Fetched = 1] = "Fetched", t[t.NotFetched = 2] = "NotFetched", t[t.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			e.b = (t = o, e) => {
				switch (e.type) {
					case r.a:
						if (t.status === n.Fetched && t.data.stripe && t.data.stripe.sources) {
							const s = e.payload.cardId,
								{
									[s]: n,
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
						if (t.status === n.Fetched && t.data.braintree && t.data.braintree.sources) {
							const s = e.payload.sourceId,
								{
									[s]: n,
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
							error: e.payload.error, status: n.Failure
						};
					case r.c:
						return {
							data: e.payload, status: n.Fetched
						};
					case r.d:
						return {
							status: n.Pending
						};
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, r = s("./src/lib/constants/specialMembership.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				c = s("./src/reddit/models/Badge/index.ts"),
				a = s("./src/reddit/models/Badge/managementPage.ts");
			! function(t) {
				t[t.NotFetched = 0] = "NotFetched", t[t.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function u(t) {
				return "userId" in t
			}

			function l(t, e, s, n) {
				t.forEach(t => {
					t.collections && Object.keys(t.collections).forEach(r => {
						let o;
						(o = t.placement ? t.placement === c.a.First ? n[a.a.Loyalty][r] : n[a.a.Achievement][r] : u(t) ? n[a.a.Cosmetic][a.c.MyBadges][r] : n[a.a.Cosmetic][a.c.Gallery][r]) && (u(t) ? s.has(t.id) && o.unlocked.push(t) : e.has(t.id) || o.locked.push(t))
					})
				})
			}

			function b(t) {
				const e = (t, e) => {
					const s = parseInt(t.price || "0"),
						n = parseInt(e.price || "0");
					return s === n ? Object(i.b)(t, e) : s - n
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function _(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === r.a).map(b).sort((t, s) => {
					const n = e[t.id],
						r = e[s.id];
					return Object(i.b)(n, r)
				})
			}

			function E(t) {
				const e = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(t.collections).forEach(s => {
					const n = t.collections[s],
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					e[a.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[a.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[a.a.Cosmetic][a.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[a.a.Cosmetic][a.c.MyBadges][s] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				t.userOwnedBadges.forEach(e => {
					const n = t.badges[e];
					n && s.add(n.type)
				});
				const n = new Set(t.userOwnedBadges);
				return l(Object.keys(t.badges).map(e => t.badges[e]), s, n, e), l(Object.keys(t.products).map(e => t.products[e]), s, n, e), {
					collections: {
						[a.a.Loyalty]: _(e[a.a.Loyalty], t.collections),
						[a.a.Achievement]: _(e[a.a.Achievement], t.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: _(e[a.a.Cosmetic][a.c.Gallery], t.collections),
							[a.c.MyBadges]: _(e[a.a.Cosmetic][a.c.MyBadges], t.collections)
						}
					},
					subscription: t.subscription,
					userOwnedBadges: t.userOwnedBadges.map(e => t.badges[e]).filter(Boolean)
				}
			}
			e.b = (t = d, e) => {
				switch (e.type) {
					case o.a: {
						const {
							subredditId: s
						} = e.payload, r = t[s];
						return r && r.status === n.Fetched ? {
							...t,
							[s]: {
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
							subredditId: s
						} = e.payload, r = t[s];
						return r && r.status === n.Fetched ? {
							...t,
							[s]: {
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
						const s = e.payload;
						return {
							...t,
							[s.subredditId]: {
								raw: s,
								data: E(s),
								status: n.Fetched
							}
						}
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(t, e, s) {
			"use strict";
			s.d(e, "d", (function() {
				return _
			})), s.d(e, "c", (function() {
				return E
			})), s.d(e, "a", (function() {
				return m
			})), s.d(e, "e", (function() {
				return p
			})), s.d(e, "f", (function() {
				return S
			})), s.d(e, "b", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = s("./src/reddit/constants/inFeedChaining.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = s("./src/reddit/selectors/discoveryUnit.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = [],
				_ = (t, e) => {
					const s = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === s
				},
				E = (t, e) => {
					const s = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === s
				},
				m = Object(n.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				p = (t, {
					subredditId: e
				}) => {
					return m(t).some(s => {
						const n = Object(u.R)(t, {
							postId: s
						});
						return !!n && n.id === e
					})
				},
				f = (t, {
					subredditName: e
				}) => {
					const s = r.Yb.DAY.toUpperCase(),
						n = Object(o.a)(e, r.R.TOP, {
							t: s
						}),
						i = Object(u.y)(t, {
							listingKey: n
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
					const s = ((t, {
							postId: e
						}) => {
							const s = Object(u.F)(t, {
								postId: e
							});
							if (!s) return b;
							const n = Object(i.a)({
								subredditIds: [s.belongsTo.id],
								count: c.b
							});
							return Object(l.v)(t, {
								key: n
							})
						})(t, {
							postId: e
						}),
						n = [];
					for (const {
							name: r
						} of s) {
						const e = f(t, {
							subredditName: r
						});
						e && n.push(e.id)
					}
					return n
				},
				O = (t, {
					listingName: e
				}) => {
					const s = a.b;
					return Object(d.c)(t, {
						unitName: s
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.2f93fdc5a746429d1eab.js.map