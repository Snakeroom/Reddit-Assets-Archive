// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.2c7617ee4d28aebab2e6.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
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
				var d = i(t) ? n : r;
				return s && c(t, e, s) && (e = void 0), d(t, o(e, 3))
			}
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
					d = c.path || "",
					a = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + a
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(t, e, s) {
			"use strict";
			e.a = (t, e) => {
				let s = `linkedPosts--[post:'${t}']`;
				return e && (s += "--fallback"), s
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(t, e, s) {
			"use strict";
			e.a = t => {
				return `nsfwLinkedPosts--[post:'${t}']`
			}
		},
		"./src/lib/timeUntil/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				i = {
					[r.Nb]: t => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(t, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: t => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(t, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: t => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(t, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: t => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(t, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: t => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(t, "number")], {
						hk: "28DQqD"
					}),
					[r.kc]: t => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(t, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Nb]: t => n.fbt._("{amount}s", [n.fbt._param("amount", String(t))], {
						hk: "F4qog"
					}),
					[r.ib]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "43tM5H"
					}),
					[r.O]: t => n.fbt._("{amount}h", [n.fbt._param("amount", String(t))], {
						hk: "19NsxU"
					}),
					[r.z]: t => n.fbt._("{amount}d", [n.fbt._param("amount", String(t))], {
						hk: "39MDc9"
					}),
					[r.nb]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.kc]: t => n.fbt._("{amount}y", [n.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					}),
					[r.nb]: t => n.fbt._("{amount}m", [n.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.kc]: t => n.fbt._("{amount}y", [n.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					})
				};

			function d(t, e = !1, s = !1) {
				const d = Date.now(),
					a = new Date(t).getTime(),
					u = {
						[r.kc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Nb]: ""
					};
				let l = a - d;
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
				return d
			})), s.d(e, "g", (function() {
				return a
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
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
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
				return d
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
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
				return C
			})), s.d(e, "c", (function() {
				return D
			})), s.d(e, "a", (function() {
				return j
			})), s.d(e, "e", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/inFeedChaining.ts"),
				_ = s("./src/reddit/constants/page.ts"),
				E = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				S = s("./src/reddit/selectors/inFeedChaining.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts");
			const T = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(i.a)(T),
				L = t => {
					const e = Date.now() - t,
						s = Object(E.F)();
					return Object.keys(s).filter(t => s[t].when >= e).map(t => s[t])
				},
				C = ({
					listingName: t,
					listingKey: e,
					postId: s
				}) => async (n, i, l) => {
					if (!s) return;
					const m = Object(f.R)(i(), {
						postId: s
					});
					if (!m) return;
					const T = m.name.toLowerCase(),
						C = t === T;
					if (!(t === _.f || t === _.b || C)) return;
					if (C) return void h(m, e, s)(n, i, l);
					0 === L(o.nb).length && Object(E.Eb)(!1);
					let D = i();
					if (Object(S.d)(D, {
							listingKey: e,
							postId: s
						}) || Object(S.a)(D).length >= b.a || Object(E.T)() || L(o.z).length >= b.a) return;
					const j = Object(f.v)(D, {
						listingKey: e,
						postId: s
					});
					if (j && j.isSponsored) return;
					await n(Object(d.g)()), D = i();
					const A = Object(S.b)(D, {
						listingName: t
					});
					if (!A) return;
					if (!m || Object(S.e)(D, {
							subredditId: m.id
						}) || (t => {
							return L(o.z).some(e => e.subredditId === t)
						})(m.id)) return;
					const y = {
						subredditIds: [m.id],
						count: b.b
					};
					await n(Object(a.b)(y));
					const R = Object(a.a)(y);
					D = i();
					const g = Object(O.t)(D, {
						key: R
					});
					0 !== g.length ? (await n((t => async (e, s) => {
						const n = o.bc.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, o.U.TOP, {
										t: n
									}),
									r = s();
								return 0 === Object(f.y)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: n,
							sort: o.N.TOP,
							subredditNames: r
						}))
					})(g.map(t => t.name))), D = i(), Object(S.f)(D, {
						postId: s
					}).length < b.c ? Object(r.a)(Object(p.c)(A, "other", m)(D)) : (Object(E.b)(s, m.id), Object(r.a)(Object(p.d)(A, m)(D)), n(I({
						listingKey: e,
						postId: s
					})))) : Object(r.a)(Object(p.c)(A, "no_chaining", m)(D))
				}, D = "FEED_CHAINING__CHAIN_TOGGLED", j = (Object(i.a)(D), "FEED_CHAINING__CHAINING_TOGGLED"), A = Object(i.a)(j), y = () => async t => {
					Object(E.Eb)(!0), t(A({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(n.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), m.b.Undo, n.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(E.Eb)(!1), t(A({
							isDismissed: !1
						}))
					})))
				}, h = (t, e, s) => async (t, e, s) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			})), s.d(e, "a", (function() {
				return o
			}));
			const n = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED",
				o = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return n
			})), s.d(e, "a", (function() {
				return r
			}));
			const n = "NSFW_LINKED_POSTS__POSTS_LOADED",
				r = "NSFW_LINKED_POSTS__POSTS_FAILED"
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
				return d
			})), s.d(e, "t", (function() {
				return a
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
				return p
			})), s.d(e, "k", (function() {
				return m
			})), s.d(e, "i", (function() {
				return S
			})), s.d(e, "j", (function() {
				return f
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "p", (function() {
				return T
			})), s.d(e, "q", (function() {
				return I
			})), s.d(e, "o", (function() {
				return L
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				a = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				b = "UPDATE_COLLECTION_SUCCESS",
				_ = "UPDATE_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				p = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				m = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				S = "REORDER_COLLECTION_PENDING",
				f = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				L = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return E
			})), s.d(e, "a", (function() {
				return f
			})), s.d(e, "f", (function() {
				return L
			})), s.d(e, "b", (function() {
				return A
			})), s.d(e, "e", (function() {
				return g
			})), s.d(e, "d", (function() {
				return N
			})), s.d(e, "l", (function() {
				return F
			})), s.d(e, "k", (function() {
				return x
			})), s.d(e, "j", (function() {
				return M
			})), s.d(e, "g", (function() {
				return v
			})), s.d(e, "i", (function() {
				return w
			})), s.d(e, "h", (function() {
				return G
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/flair/index.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts");
			const E = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				p = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				m = Object(r.a)(E),
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				f = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(r.a)(f),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				C = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				D = Object(r.a)(L),
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				A = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				h = Object(r.a)(A),
				R = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(r.a)(g),
				U = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(r.a)(N),
				F = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(_.S)(o, {
							subredditId: t
						}).name;
					s(p());
					const c = await Object(d.k)(r(), i, e);
					if (c.ok) {
						s(m({
							subredditId: t,
							isEnabled: e
						}))
					} else s(S());
					return c.ok
				}, x = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						i = Object(_.S)(o, {
							subredditId: t
						}).name;
					s(O());
					const c = await Object(d.j)(r(), e, u.d.LinkFlair, i);
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
					const a = r(),
						b = Object(_.S)(a, {
							subredditId: e
						}).name;
					s(C());
					const E = await Object(d.f)(o(), t, b, u.d.LinkFlair);
					let p = E.ok && !(E.body && !1 === E.body.success);
					if (p) {
						const n = E.body;
						if (s(D({
								subredditId: e,
								template: n
							})), n.id) {
							const r = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[n.id];
							r ? p = await s(Object(i.d)(e, n.id, r)) : o && (p = await s(Object(i.c)(e, n.id)))
						}
					}
					if (p) {
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
					return p
				}, v = (t, e) => async (s, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(_.S)(i, {
							subredditId: e
						}).name;
					if (s(y()), (await Object(d.b)(o(), t, a)).ok) {
						s(h({
							subredditId: e,
							templateId: t
						}));
						const r = Object(c.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						s(Object(c.f)(r))
					} else {
						s(R());
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
						a = Object(b.d)(i, {
							subredditId: e
						}).templateIds,
						E = Object(_.S)(i, {
							subredditId: e
						}).name;
					if (s(P({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), E, u.d.LinkFlair, t)).ok) {
						s(U());
						const t = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						s(Object(c.f)(t))
					} else {
						s(k({
							subredditId: e,
							templateIds: a
						}));
						const r = Object(c.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(t, e));
						s(Object(c.f)(r))
					}
				}, G = ({
					post: t,
					previewFlair: e,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: i
				}) => {
					const c = t.flair.filter(t => !Object(a.q)(t.type));
					if (e && c.unshift(e), n(Object(o.T)({
							[t.id]: {
								flair: c
							}
						})), e) {
						const n = Object(a.g)(e);
						Object(d.h)(i(), t.id, s, n)
					} else Object(d.h)(i(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return I
			})), s.d(e, "d", (function() {
				return C
			})), s.d(e, "a", (function() {
				return D
			})), s.d(e, "c", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				i = s.n(o),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c),
				a = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/imageUploads.ts"),
				l = s("./src/reddit/helpers/media/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var m = s("./src/reddit/helpers/trackers/blade.ts"),
				S = s("./src/reddit/models/Image/index.tsx"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/telemetry/index.ts");
			const T = ({
				subredditId: t,
				flairId: e,
				imageKey: s,
				imageData: n
			}) => async (r, o, i) => {
				const c = o(),
					d = Object(f.S)(c, {
						subredditId: t
					});
				if (!d) return !1;
				r(Object(u.k)(n));
				const a = await (async (t, e, s, n, r, o) => Object(_.a)(Object(E.a)(t, [p.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${s}`,
					method: b.hb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), d.name, e, n.file.name, s, await Object(l.g)(n.file));
				let m = !1;
				try {
					const t = await Object(u.g)(o(), a, n, S.a.FlairTemplates);
					t && r(Object(u.j)(t)), m = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					r(Object(u.i)(O))
				}
				return m
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", L = Object(a.a)(I), C = (t, e, s) => async (n, o, c) => {
				const {
					apiContext: a
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...C
				} = s;
				let D = C;
				const j = Object(f.S)(l, {
					subredditId: t
				});
				if (!j) return !1;
				const A = l.structuredStyles.flairTemplate.models[e];
				if (A && i()(A, D)) return !0;
				if (I) {
					const s = [];
					if (r()(I, (r, o) => {
							r && s.push(n(T({
								flairId: e,
								imageData: Object(S.m)(r),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(s)).every(t => t)) return !1;
					D = ((t, e, s) => {
						const n = {
							...t
						};
						return r()(e, (t, e) => {
							const r = t && s.imageUploads[t.id];
							r && r.kind === S.b.TempUploaded && (n[e] = r.url)
						}), n
					})(D, I, o())
				}
				l = o();
				let y = null,
					h = null;
				const R = [];
				try {
					(y = await Object(u.f)(l, S.a.FlairTemplates)) && (h = Object(u.m)(y)(n, o, c), R.push(...d()(y.imagesByKey)))
				} catch (U) {
					return !1
				}
				const g = await (async (t, e, s, n) => Object(_.a)(Object(E.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: b.hb.PUT,
						data: n
					}))(a(), j.name, e, D),
					N = A ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(m.e)(l, N);
				if (g.ok) {
					let t;
					if (h) try {
						await h, t = ((t, e, s) => {
							const n = {
								...t
							};
							return e.forEach(t => {
								const e = s.imageUploads[t.id];
								e && e.kind === S.b.Uploaded && (t.url === n.postBackgroundImage ? n.postBackgroundImage = e.url : t.url === n.postPlaceholderImage && (n.postPlaceholderImage = e.url))
							}), n
						})(D, R, o())
					} catch (U) {
						t = null
					} else t = D;
					n(L({
						flairId: e,
						template: t || D
					}))
				} else y && y.websocket.close();
				return Object(O.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: g.ok
					}
				}), g.ok
			}, D = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", j = Object(a.a)(D), A = (t, e) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					i = Object(f.S)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, s) => Object(_.a)(Object(E.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: b.hb.DELETE
					}))(r(), i.name, e),
					d = Object(m.e)(o, "delete_flair_template");
				return c.ok && s(j({
					flairId: e
				})), Object(O.a)({
					...d,
					actionInfo: {
						...d.actionInfo,
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
				return m
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/endpoints/category/subreddits.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
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
				p = Object(r.a)(o.n),
				m = t => async (e, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = b(t),
						m = Object(l.s)(r, {
							key: o
						}),
						S = Object(l.r)(r, {
							key: o
						});
					if (m || S.length > 0) return;
					e(_({
						key: o
					}));
					const f = await ((t, e) => Object(d.a)(Object(a.a)(t, [u.a]), {
						data: {
							sr_fullnames: e.subredditIds.join(","),
							limit: e.count,
							variant: e.variant
						},
						endpoint: `${t.apiUrl}/api/similar_subreddits.json`,
						method: c.hb.GET
					}))(n(), t);
					if (f.ok) {
						const t = Object(i.b)(f.body);
						e(E({
							key: o,
							...t
						}))
					} else {
						const t = f.error;
						e(p({
							key: o,
							error: t
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return Q
			})), s.d(e, "a", (function() {
				return z
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(i.b),
				d = Object(r.a)(i.a);
			var a = s("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(a.a),
				l = Object(r.a)(a.c),
				b = Object(r.a)(a.b);
			var _ = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = s("./src/lib/makeGqlRequest/index.ts"),
				p = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				m = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = s("./src/reddit/models/Post/index.ts");
			var T = ({
				getState: t,
				onFailure: e,
				onSuccess: s,
				postId: n,
				response: r
			}) => {
				if (!r.ok) return void e(r.error);
				const i = r.body,
					{
						post: c
					} = i && i.data,
					d = t(),
					a = Object(o.a)(n, null, {
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
									const s = Object(m.e)(t);
									e.posts[s.id] = s;
									const {
										crosspostRoot: n
									} = t;
									if (n && n.type === O.a.Post && n.postInfo) {
										const t = Object(m.e)(n.postInfo);
										e.posts[t.id] = t
									}
									return Object(O.l)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(S.a)(t.profile)) : Object(O.m)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(f.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(p.a)(t.subreddit))), s.id
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
							key: a,
							meta: d.meta,
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
					key: a,
					meta: d.meta,
					postFlair: {},
					postId: n,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(r.a)(_.a),
				L = Object(r.a)(_.b),
				C = Object(r.a)(_.c);
			var D = s("./src/reddit/actions/subreddit/constants.ts"),
				j = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json"),
				A = (s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json"));
			var y = ({
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
				h = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var R = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						const s = [],
							o = {},
							i = {};
						if (!r || !r.linked) return;
						const c = t(),
							d = c.posts && c.posts.models,
							a = Object(h.a)(n),
							u = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of u) {
							if (!t || !t.id) break;
							if (s.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(m.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
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
							postIds: s,
							subreddits: i
						})
					} catch (o) {
						s(o)
					}
				},
				g = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var N = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var P = ({
					isLinkedPostsFallback: t,
					getState: e,
					onSuccess: s,
					onFailure: r,
					options: i,
					postId: c,
					subreddit: d
				}) => {
					try {
						if (!d) return;
						const r = d.elements || d.posts,
							a = e(),
							u = ((t, e) => {
								const {
									edges: s
								} = t, n = s.filter(t => (t => !t.node.crosspostRoot)(t) && ((t, e) => !e.hasOwnProperty(t.node.id))(t, e));
								return {
									...t,
									edges: n
								}
							})(r, a.posts && a.posts.models),
							l = Object(g.a)(u),
							b = N(l),
							_ = r.edges.reduce((t, e) => (e.node.id && e.node.id !== c && t.push(e.node.id), t), []),
							{
								range: E,
								sort: p,
								subredditName: m
							} = i,
							S = t && c ? Object(h.a)(c, !0) : Object(o.a)(m, n.U[p], {
								t: E
							});
						s({
							dist: r.dist,
							key: S,
							meta: a.meta,
							postIds: _,
							posts: b
						})
					} catch (a) {
						r(a)
					}
				},
				U = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				F = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var M = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						const s = [],
							o = {},
							i = {};
						if (!r || !r.nsfwLinked) return;
						const c = t(),
							d = c.posts && c.posts.models,
							a = Object(x.a)(n),
							u = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of u) {
							if (!t || !t.id) break;
							if (s.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(m.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(f.a)(e)
							}
						}
						e({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: a,
							meta: c.meta,
							posts: o,
							postIds: s,
							subreddits: i
						})
					} catch (o) {
						s(o)
					}
				},
				v = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const w = Object(r.a)(v.b),
				G = Object(r.a)(v.a);
			var Y = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const B = Object(r.a)(Y.b),
				K = Object(r.a)(Y.a),
				q = Object(r.a)(D.j),
				V = Object(r.a)(D.i),
				H = Object(r.a)(D.r),
				W = Object(r.a)(D.q),
				Q = t => async (e, s, {
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
						e(H(c))
					} catch (d) {
						e(W(d))
					}
				}, z = t => async (e, s, {
					gqlContext: r
				}) => {
					var i, a, _, p;
					const {
						includeNSFWListingBelowExperiment: m,
						includeListingBelowExperiment: S,
						includeOtherDiscussions: f,
						includePostFeed: O,
						includePostQASchemaEligibilityFlag: D,
						listingBelowExperimentVariant: A,
						postId: h,
						range: g,
						sort: N,
						subredditName: x
					} = t, v = Object(o.a)(h, null, {
						isOtherDiscussions: !0
					}), Y = s(), H = Object(F.y)(Y, {
						listingKey: v
					}), W = f && (!H || 0 === H.length), Q = Object(o.a)(x, n.U[N], {
						t: g
					}), z = Object(F.y)(Y, {
						listingKey: Q
					}), $ = O && (S || !z || 0 === z.length), X = S, J = m, Z = Object(F.F)(Y, {
						postId: h
					}), tt = !!Z && !!Z.media && (Object(U.H)(Z.media) || Object(U.F)(Z.media)) && !Z.media.altText;
					if (!(W || $ || X || J || tt || D)) return;
					W && e(C({
						key: v
					}));
					const et = await ((t, e) => Object(E.a)(t, {
							...j,
							variables: e
						}))(r(), t),
						st = et.body,
						nt = Object(k.a)(A),
						rt = X && !!(null === (_ = null === (a = null === (i = st.data) || void 0 === i ? void 0 : i.post) || void 0 === a ? void 0 : a.linked) || void 0 === _ ? void 0 : _.isEligible),
						ot = X && (nt || !rt);
					D && (et.ok ? st.data && st.data.post && e(c({
						postId: h,
						isEligibleForQASchema: null !== (p = st.data.post.isEligibleForQASchema) && void 0 !== p && p
					})) : e(d())), W && T({
						getState: s,
						onFailure: t => e(I(t)),
						onSuccess: t => e(L(t)),
						postId: h,
						response: et
					}), ($ && !X || ot) && (et.ok ? st.data && P({
						getState: s,
						isLinkedPostsFallback: ot,
						onFailure: t => e(V(t)),
						onSuccess: t => e(q(t)),
						options: t,
						postId: h,
						subreddit: st.data.subreddit
					}) : e(V(et.error))), X && rt && !nt && et.ok && st.data && R({
						getState: s,
						onFailure: t => e(b(t)),
						onSuccess: t => e(l(t)),
						postId: h,
						post: st.data.post
					}), J && et.ok && M({
						getState: s,
						onFailure: t => e(K(t)),
						onSuccess: t => e(B(t)),
						postId: h,
						post: st.data.post
					}), tt && et.ok && st.data && y({
						getState: s,
						onFailure: t => e(G(t)),
						onSuccess: t => e(w(t)),
						postId: h,
						post: st.data.post
					}), X && e(u({
						postId: h,
						isEligibleForLinkedPosts: rt
					}))
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
				return d
			})), s.d(e, "d", (function() {
				return a
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
				return p
			})), s.d(e, "e", (function() {
				return m
			})), s.d(e, "m", (function() {
				return S
			})), s.d(e, "n", (function() {
				return f
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
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i);

			function d(t) {
				const e = new Date(t.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: t.className
				}, e ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(r.d)(t.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(t.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(t, e, s) {
			t.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
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
				return P
			})), s.d(e, "a", (function() {
				return V
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				S = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				I = s("./src/reddit/models/Flair/index.ts"),
				L = s("./src/reddit/models/Media/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				D = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/reddit/components/FlairWrapper/index.tsx"),
				A = s("./node_modules/fbt/lib/FbtPublic.js"),
				y = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				g = s.n(R);
			const N = Object(d.c)({
				poll: (t, e) => t.polls.models[e.pollId],
				resultsByVoters: (t, e) => t.polls.results.byVoters[e.pollId]
			});
			var P, U = Object(i.b)(N)((function(t) {
					const {
						poll: e,
						resultsByVoters: s
					} = t, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(t.className, g.a.proposalMetaData)
					}, o.a.createElement("span", null, A.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [A.fbt._param("count", Object(y.a)(n)), A.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), e && o.a.createElement(h.a, {
						className: g.a.proposalExpiry,
						poll: e
					}))
				})),
				k = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/PostTitle/index.m.less"),
				M = s.n(x),
				v = s("./src/config.ts"),
				w = s("./src/reddit/hooks/useClickSourceData.ts"),
				G = s("./src/reddit/hooks/useExperimentVariant.ts"),
				Y = s("./src/reddit/hooks/usePostContext.ts"),
				B = s("./src/reddit/hooks/useTheme.ts"),
				K = s("./src/telemetry/models/Outbound.ts");

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
			}(P || (P = {}));
			const V = ({
					size: t,
					titleColor: e,
					titleType: s,
					nowrap: n,
					children: r,
					className: i,
					redditStyle: c
				}) => {
					const d = Object(B.a)();
					let a = "";
					switch (t) {
						case P.ExtraLarge:
							a = M.a.ExtraLarge;
							break;
						case P.Large:
							a = M.a.Large;
							break;
						case P.Medium:
							a = M.a.Medium;
							break;
						case P.Small:
							a = M.a.Small;
							break;
						case P.ExtraSmall:
							a = M.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Title, i, a, {
							[M.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": e || Object(C.a)({
								redditStyle: c,
								theme: d
							}).titleText
						}
					}, s ? o.a.createElement(k.b, {
						type: s
					}, r) : r)
				},
				H = ({
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
				W = ({
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
				Q = Object(d.c)({
					flairPosition: (t, {
						pageLayer: e
					}) => Object(_.p)(t, {
						pageLayer: e
					}),
					shouldOpenPostInNewTab: F.bb
				}),
				z = t => {
					const {
						post: e,
						subreddit: s
					} = t, {
						isSponsored: n
					} = e, r = Object(w.a)(), i = Object(G.a)(b.gc) === b.kc.Enabled;
					if (t.isCommentsPage && !t.isCommentPermalink && !t.shouldLinkWrap) return o.a.createElement(W, {
						nowrap: t.nowrap
					}, o.a.createElement($, t));
					if (t.isCommentsPageAd && e.source && e.source.url) return o.a.createElement(E.b, {
						href: e.source.url,
						isSponsored: n,
						postId: e.id,
						source: e.source
					}, o.a.createElement($, t)); {
						const c = e.media && Object(L.G)(e.media) ? Object(O.c)(e.id, s.name) : e.permalink,
							d = t.isCommentPermalink ? Object(f.b)(c) : i ? Object(m.a)(c, void 0, r) : Object(m.a)(c);
						return o.a.createElement(W, {
							disableVisited: t.disableVisited,
							nowrap: t.nowrap
						}, n ? ((t, e) => {
							const {
								source: s
							} = Object(a.t)(t, e.imageGalleryCurrentItem);
							return s ? o.a.createElement(E.b, {
								href: s.url,
								isSponsored: t.isSponsored,
								postId: t.id,
								source: s
							}, o.a.createElement($, e)) : o.a.createElement($, e)
						})(e, t) : o.a.createElement(H, {
							className: t.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: t.disableVisited,
							target: t.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: t.titleColor,
							to: d
						}, o.a.createElement($, t)))
					}
				},
				$ = t => {
					const {
						leftFlair: e,
						isCommentsPageAd: s,
						post: n
					} = t;
					let r = t.format ? t.format(n) : n.title;
					s && "string" == typeof r && (r = (t => {
						return t.length >= 250 ? t.slice(0, 250 - "...".length) + "..." : t
					})(r));
					const i = t.isCommentsPage ? k.a.PostComments : k.a.PostItem;
					return o.a.createElement(V, {
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
				X = t => {
					const {
						hideSourceLink: e,
						post: s
					} = t, {
						isSponsored: n
					} = s, r = t.isCommentsPage ? K.SourceElement.PostLink : K.SourceElement.ListingPostLink, i = !e && !t.isCrosspost && t.size !== P.Large && !s.isSponsored && !(s.media && Object(L.G)(s.media)) && (s.source || s.media && (s.media.type === L.o.GIFVIDEO || s.media.type === L.o.IMAGE || s.media.type === L.o.EMBED));
					if (e || !t.isCommentsPage || t.isCommentPermalink || t.shouldLinkWrap) {
						if (i) return o.a.createElement(p.a, {
							className: t.outboundLinkClassName,
							href: Object(L.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(D.a)(s), !s.isSponsored && o.a.createElement(T.a, {
							name: "external_link",
							className: M.a.outboundLinkIcon
						}))
					} else if (s.source && !t.isCrosspost && t.size !== P.Large && t.size !== P.ExtraLarge) return o.a.createElement(p.a, {
						className: t.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(D.a)(s), !s.isSponsored && o.a.createElement(T.a, {
						name: "external_link",
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class J extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n        }\n      `
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
						showNSFWSpoilerFlairsOnly: d
					} = this.props, a = s === I.b.Left, l = Object(j.b)(c), b = d ? l.filter(t => t.type === I.f.Nsfw || t.type === I.f.Spoiler) : a ? l.filter(t => Object(S.q)(t.type)) : [], _ = d ? [] : a ? l.filter(t => !Object(S.q)(t.type)) : l, E = !r && !n, p = !e && b && b.length > 0 && E, m = !e && _ && _.length > 0 && E;
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Component, t, c.id)
					}, !d && p && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(z, q({}, this.props, {
						leftFlair: d ? b : void 0
					})), i && o.a.createElement(U, {
						className: M.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(X, this.props), m && o.a.createElement(j.a, {
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
				const e = Object(_.ab)(),
					s = Object(_.v)(e),
					n = Object(Y.a)(),
					r = Object(i.e)(r => Q(r, {
						...n,
						...t,
						isCommentPermalink: s,
						pageLayer: e
					})),
					c = Object(B.a)(),
					d = Object(l.b)();
				return o.a.createElement(J, q({
					pageLayer: e,
					isCommentPermalink: s
				}, n, r, t, {
					theme: c,
					sendEvent: d
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
							case n.G.NO_STRIPE_SUBSCRIPTION:
							case n.G.USER_DOESNT_EXIST:
							case n.G.USER_REQUIRED_ERROR:
							case n.G.VALIDATION_ERROR:
								return t;
							case n.G.NO_USER:
							case n.G.NO_TEXT:
							case n.G.NO_URL:
								return n.G.VALIDATION_ERROR;
							case n.G.CREDIT_CARD_FAILURE:
							case n.G.CREDIT_CARD_FAILURE_GENERIC:
								return n.G.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return n.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.G.VALIDATION_ERROR
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
				return f
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "a", (function() {
				return C
			})), s.d(e, "E", (function() {
				return D
			})), s.d(e, "F", (function() {
				return j
			})), s.d(e, "M", (function() {
				return y
			})), s.d(e, "B", (function() {
				return h
			})), s.d(e, "C", (function() {
				return R
			})), s.d(e, "D", (function() {
				return g
			})), s.d(e, "i", (function() {
				return N
			})), s.d(e, "w", (function() {
				return P
			})), s.d(e, "x", (function() {
				return U
			})), s.d(e, "L", (function() {
				return k
			})), s.d(e, "K", (function() {
				return F
			})), s.d(e, "I", (function() {
				return x
			})), s.d(e, "v", (function() {
				return M
			})), s.d(e, "y", (function() {
				return v
			})), s.d(e, "z", (function() {
				return w
			})), s.d(e, "A", (function() {
				return G
			})), s.d(e, "N", (function() {
				return Y
			})), s.d(e, "J", (function() {
				return B
			})), s.d(e, "t", (function() {
				return K
			})), s.d(e, "H", (function() {
				return q
			})), s.d(e, "d", (function() {
				return V
			})), s.d(e, "c", (function() {
				return H
			})), s.d(e, "b", (function() {
				return W
			})), s.d(e, "f", (function() {
				return Q
			})), s.d(e, "e", (function() {
				return z
			})), s.d(e, "s", (function() {
				return J
			})), s.d(e, "m", (function() {
				return Z
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
				return dt
			})), s.d(e, "G", (function() {
				return at
			}));
			var n, r = s("./src/lib/stringInterpolate/index.ts"),
				o = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/models/Widgets/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/widgets.ts"),
				E = s("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const p = "discovery_unit",
				m = (t, e, s) => ({
					...b.defaults(t),
					source: p,
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
				S = (t, e, s) => ({
					...m(t, e, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				f = (t, e) => {
					Object(E.a)(O(e)(t))
				},
				O = (t, e) => s => S(s, t, e),
				T = (t, e, s, n) => "unitName" in e ? m(t, e, n) : ((t, e, s) => ({
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
				L = ({
					post: t,
					rawQuery: e,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
				});
			var C;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(C || (C = {}));
			const D = (t, e, s) => {
					Object(E.a)(A(t, e, s, i.c.CLICK))
				},
				j = (t, e, s) => {
					Object(E.a)(A(t, e, s, i.c.VIEW))
				},
				A = (t, e, s, n) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						...b.defaults(t),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: L(e),
						discoveryUnit: s === C.POPULAR_CAROUSEL ? {
							name: a.l,
							id: a.l,
							title: a.l,
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
				y = (t, e, s, n, r, o, c) => {
					Object(E.a)({
						...b.defaults(t),
						...Object(d.f)(t, s, n, r, o, e),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				h = (t, e, s, n) => {
					Object(E.a)(I(t, e, s, n))
				},
				R = (t, e, s, n) => r => I(r, t, e, s, n),
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
						...m(t, e),
						source: p,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				P = (t, e, s, n) => {
					Object(E.a)(U(e, s, n)(t))
				},
				U = (t, e, s, r) => o => {
					return {
						...T(o, t, s, r),
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_POST,
						post: b.post(o, e)
					}
				},
				k = (t, e, s, n) => r => o => Object(d.f)(o, r, t, e, s, n),
				F = (t, e, s, n) => r => o => Object(d.e)(o, t, e, void 0, s, r, n),
				x = (t, e, s, n) => r => o => ({
					...Object(d.f)(o, r, t, e, s, n),
					noun: "ad"
				}),
				M = (t, e) => s => r => ({
					...t ? m(r, t, e) : {},
					source: p,
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
						source: p,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(r, e)
					}
				},
				G = (t, e, s) => n => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(_.b)(r, o) : void 0;
					return {
						...T(r, t, void 0, s),
						...c,
						source: p,
						action: i.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(r, e)
					}
				},
				Y = (t, e, s) => {
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
						...Object(d.e)(t, e, s, n, r, void 0, o)
					})
				},
				K = (t, e, s) => {
					const n = T(t, e);
					Object(E.a)({
						...n,
						...Object(_.b)(t, s),
						source: p,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				q = (t, e) => s => {
					const n = Object(u.j)(e);
					return {
						...m(s, t, e),
						...Object(_.b)(s, n),
						source: p,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (t, e) => s => ({
					...m(s, t, e),
					action: "status",
					actionInfo: b.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				H = (t, e, s) => n => ({
					...m(n, t, s),
					action: "status",
					actionInfo: b.actionInfo(n, {
						reason: e,
						success: !1
					}),
					noun: "loading"
				}),
				W = (t, e) => s => ({
					...m(s, t, e),
					action: "click",
					noun: "close"
				}),
				Q = (t, e, s) => n => ({
					...T(n, t, e, s),
					action: "click",
					noun: "scroll"
				}),
				z = (t, e) => s => ({
					...m(s, t, e),
					action: "click",
					noun: "overflow_menu"
				}),
				$ = () => ({
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
				X = (t, e, s) => b.actionInfo(t, {
					position: s
				}),
				J = (t, e, s) => {
					const n = $();
					return t => ({
						...S(t, n),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e)
					})
				},
				Z = (t, e, s) => {
					const n = $();
					return t => ({
						...I(t, n, e),
						actionInfo: X(t, 0, s)
					})
				},
				tt = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: p,
						action: i.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				et = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						post: b.post(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				st = (t, e, s, r) => {
					const o = $();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, r),
						subreddit: b.subredditById(t, s) || null,
						post: b.post(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				nt = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				rt = (t, e, s, r) => {
					const o = $();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						post: r ? b.post(t, r) : null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ot = (t, e, s, r) => {
					const o = $();
					return t => ({
						...m(t, o),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						post: r ? b.post(t, r) : null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				it = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ct = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: b.subredditById(t, e) || null,
						source: p,
						action: i.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				dt = (t, e) => s => ({
					...m(s, t),
					...e && Object(_.b)(s, e),
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
				return d
			})), s.d(e, "e", (function() {
				return a
			})), s.d(e, "g", (function() {
				return u
			})), s.d(e, "n", (function() {
				return l
			})), s.d(e, "o", (function() {
				return b
			})), s.d(e, "f", (function() {
				return _
			})), s.d(e, "c", (function() {
				return p
			})), s.d(e, "q", (function() {
				return S
			})), s.d(e, "k", (function() {
				return f
			})), s.d(e, "j", (function() {
				return O
			})), s.d(e, "h", (function() {
				return T
			})), s.d(e, "i", (function() {
				return I
			})), s.d(e, "d", (function() {
				return L
			})), s.d(e, "m", (function() {
				return C
			})), s.d(e, "b", (function() {
				return D
			})), s.d(e, "l", (function() {
				return j
			})), s.d(e, "p", (function() {
				return A
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
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
				b = t => t.__typename === r.a.Subreddit;
			var _, E, p, m;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(_ || (_ = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(E || (E = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(p || (p = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(m || (m = {}));
			const S = t => E[m[t]],
				f = t => m[E[t]],
				O = t => p[E[t]],
				T = t => E[p[t]],
				I = t => m[p[t]];
			var L;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(L || (L = {}));
			const C = t => {
					switch (t) {
						case L.Hourly:
						case L.Daily:
						case L.Weekly:
						case L.Monthly:
							return !0
					}
					return !1
				},
				D = "custom",
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
				A = t => "frequency" in t && !!t.frequency
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
				d = s("./src/reddit/models/Badge/managementPage.ts");
			! function(t) {
				t[t.NotFetched = 0] = "NotFetched", t[t.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const a = {};

			function u(t) {
				return "userId" in t
			}

			function l(t, e, s, n) {
				t.forEach(t => {
					t.collections && Object.keys(t.collections).forEach(r => {
						let o;
						(o = t.placement ? t.placement === c.a.First ? n[d.a.Loyalty][r] : n[d.a.Achievement][r] : u(t) ? n[d.a.Cosmetic][d.c.MyBadges][r] : n[d.a.Cosmetic][d.c.Gallery][r]) && (u(t) ? s.has(t.id) && o.unlocked.push(t) : e.has(t.id) || o.locked.push(t))
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
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
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
					e[d.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.MyBadges][s] = {
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
						[d.a.Loyalty]: _(e[d.a.Loyalty], t.collections),
						[d.a.Achievement]: _(e[d.a.Achievement], t.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: _(e[d.a.Cosmetic][d.c.Gallery], t.collections),
							[d.c.MyBadges]: _(e[d.a.Cosmetic][d.c.MyBadges], t.collections)
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
				return p
			})), s.d(e, "e", (function() {
				return m
			})), s.d(e, "f", (function() {
				return f
			})), s.d(e, "b", (function() {
				return O
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				i = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = s("./src/reddit/constants/inFeedChaining.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				a = s("./src/reddit/selectors/discoveryUnit.ts"),
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
				p = Object(n.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				m = (t, {
					subredditId: e
				}) => {
					return p(t).some(s => {
						const n = Object(u.R)(t, {
							postId: s
						});
						return !!n && n.id === e
					})
				},
				S = (t, {
					subredditName: e
				}) => {
					const s = r.bc.DAY.toUpperCase(),
						n = Object(o.a)(e, r.U.TOP, {
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
				f = (t, {
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
							return Object(l.t)(t, {
								key: n
							})
						})(t, {
							postId: e
						}),
						n = [];
					for (const {
							name: r
						} of s) {
						const e = S(t, {
							subredditName: r
						});
						e && n.push(e.id)
					}
					return n
				},
				O = (t, {
					listingName: e
				}) => {
					const s = d.b;
					return Object(a.c)(t, {
						unitName: s
					})
				}
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"34405b6a52ad"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"278069b2d44c"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"b4f6fa9fde8b"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"723bb6704463"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.2c7617ee4d28aebab2e6.js.map