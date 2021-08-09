// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.50f0ea32b98250ff1243.js
// Retrieved at 8/9/2021, 4:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-MediumPost"], {
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
				i = s.n(r);
			e.a = function(t) {
				const {
					source: e,
					isSponsored: s,
					domainOverride: r
				} = t;
				let o = "";
				if (s) {
					if (e && e.displayText) return e.displayText.length > 30 ? e.displayText.substring(0, 30) + "..." : e.displayText;
					o = r || Object(n.D)(t)
				} else o = Object(n.D)(t);
				const c = i.a.parse(o),
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
			const i = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				o = {
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
				for (const n of i) {
					const t = Math.floor(l / n);
					t && (u[n] = (e ? c : o)[n](t).toString()), l -= t * n
				}
				const _ = i.map(t => u[t]).filter(Boolean).slice(0, 2).join(" ");
				return e || s ? _ : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", _)], {
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
				return i
			})), s.d(e, "c", (function() {
				return o
			})), s.d(e, "d", (function() {
				return c
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "b", (function() {
				return r
			})), s.d(e, "c", (function() {
				return i
			})), s.d(e, "d", (function() {
				return o
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
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
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
				return i
			})), s.d(e, "d", (function() {
				return o
			})), s.d(e, "f", (function() {
				return c
			})), s.d(e, "a", (function() {
				return d
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				i = "MOD_PAGE_EVENT_POSTS_PENDING",
				o = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
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
		"./src/reddit/actions/grantUserFlair/constants.ts": function(t, e, s) {
			"use strict";
			s.d(e, "i", (function() {
				return n
			})), s.d(e, "g", (function() {
				return r
			})), s.d(e, "f", (function() {
				return i
			})), s.d(e, "l", (function() {
				return o
			})), s.d(e, "k", (function() {
				return c
			})), s.d(e, "j", (function() {
				return d
			})), s.d(e, "h", (function() {
				return a
			})), s.d(e, "a", (function() {
				return u
			})), s.d(e, "b", (function() {
				return l
			})), s.d(e, "e", (function() {
				return _
			})), s.d(e, "c", (function() {
				return E
			})), s.d(e, "d", (function() {
				return b
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				i = "SUBREDDIT__FLAIRED_USERS_FAILED",
				o = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				a = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				_ = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				E = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
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
				return L
			})), s.d(e, "c", (function() {
				return C
			})), s.d(e, "a", (function() {
				return A
			})), s.d(e, "e", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/telemetry/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/lib/makeListingKey/index.ts"),
				d = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				_ = s("./src/reddit/constants/inFeedChaining.ts"),
				E = s("./src/reddit/constants/page.ts"),
				b = s("./src/reddit/helpers/localStorage/index.ts"),
				S = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				p = s("./src/reddit/selectors/inFeedChaining.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts");
			const T = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(o.a)(T),
				D = t => {
					const e = Date.now() - t,
						s = Object(b.G)();
					return Object.keys(s).filter(t => s[t].when >= e).map(t => s[t])
				},
				L = ({
					listingName: t,
					listingKey: e,
					postId: s
				}) => async (n, o, l) => {
					if (!s) return;
					const m = Object(f.T)(o(), {
						postId: s
					});
					if (!m) return;
					const T = m.name.toLowerCase(),
						L = t === T;
					if (!(t === E.f || t === E.b || L)) return;
					if (L) return void h(m, e, s)(n, o, l);
					0 === D(i.nb).length && Object(b.Gb)(!1);
					let C = o();
					if (Object(p.d)(C, {
							listingKey: e,
							postId: s
						}) || Object(p.a)(C).length >= _.a || Object(b.U)() || D(i.z).length >= _.a) return;
					const A = Object(f.w)(C, {
						listingKey: e,
						postId: s
					});
					if (A && A.isSponsored) return;
					await n(Object(d.g)()), C = o();
					const R = Object(p.b)(C, {
						listingName: t
					});
					if (!R) return;
					if (!m || Object(p.e)(C, {
							subredditId: m.id
						}) || (t => {
							return D(i.z).some(e => e.subredditId === t)
						})(m.id)) return;
					const j = {
						subredditIds: [m.id],
						count: _.b
					};
					await n(Object(a.b)(j));
					const y = Object(a.a)(j);
					C = o();
					const N = Object(O.t)(C, {
						key: y
					});
					0 !== N.length ? (await n((t => async (e, s) => {
						const n = i.bc.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, i.U.TOP, {
										t: n
									}),
									r = s();
								return 0 === Object(f.z)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: n,
							sort: i.N.TOP,
							subredditNames: r
						}))
					})(N.map(t => t.name))), C = o(), Object(p.f)(C, {
						postId: s
					}).length < _.c ? Object(r.a)(Object(S.c)(R, "other", m)(C)) : (Object(b.b)(s, m.id), Object(r.a)(Object(S.d)(R, m)(C)), n(I({
						listingKey: e,
						postId: s
					})))) : Object(r.a)(Object(S.c)(R, "no_chaining", m)(C))
				}, C = "FEED_CHAINING__CHAIN_TOGGLED", A = (Object(o.a)(C), "FEED_CHAINING__CHAINING_TOGGLED"), R = Object(o.a)(A), j = () => async t => {
					Object(b.Gb)(!0), t(R({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(n.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), m.b.Undo, n.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(b.Gb)(!1), t(R({
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
				return i
			}));
			const n = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED",
				i = "LINKED_POSTS__ELIGIBILITY_LOADED"
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
				return i
			})), s.d(e, "f", (function() {
				return o
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
				return _
			})), s.d(e, "n", (function() {
				return E
			})), s.d(e, "l", (function() {
				return b
			})), s.d(e, "m", (function() {
				return S
			})), s.d(e, "k", (function() {
				return m
			})), s.d(e, "i", (function() {
				return p
			})), s.d(e, "j", (function() {
				return f
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "p", (function() {
				return T
			})), s.d(e, "q", (function() {
				return I
			})), s.d(e, "o", (function() {
				return D
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				i = "CREATE_COLLECTION_FAILED",
				o = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				a = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				_ = "UPDATE_COLLECTION_SUCCESS",
				E = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				S = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				m = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				p = "REORDER_COLLECTION_PENDING",
				f = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				D = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, s) {
			"use strict";
			s.d(e, "c", (function() {
				return b
			})), s.d(e, "a", (function() {
				return f
			})), s.d(e, "f", (function() {
				return D
			})), s.d(e, "b", (function() {
				return R
			})), s.d(e, "e", (function() {
				return N
			})), s.d(e, "d", (function() {
				return g
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
				return G
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/flair/index.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				u = s("./src/reddit/models/Flair/index.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				E = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				S = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				m = Object(r.a)(b),
				p = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				f = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(r.a)(f),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				D = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(D),
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				R = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				h = Object(r.a)(R),
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				g = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				U = Object(r.a)(N),
				P = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				F = Object(r.a)(g),
				k = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const i = n(),
						o = Object(E.S)(i, {
							subredditId: t
						}).name;
					s(S());
					const c = await Object(d.k)(r(), o, e);
					if (c.ok) {
						s(m({
							subredditId: t,
							isEnabled: e
						}))
					} else s(p());
					return c.ok
				}, x = (t, e) => async (s, n, {
					apiContext: r
				}) => {
					const i = n(),
						o = Object(E.S)(i, {
							subredditId: t
						}).name;
					s(O());
					const c = await Object(d.j)(r(), e, u.d.LinkFlair, o);
					if (c.ok) {
						s(T({
							subredditId: t,
							canAssignOwn: e
						}))
					} else s(I());
					return c.ok
				}, M = (t, e) => async (s, r, {
					apiContext: i
				}) => {
					const a = r(),
						_ = Object(E.S)(a, {
							subredditId: e
						}).name;
					s(L());
					const b = await Object(d.f)(i(), t, _, u.d.LinkFlair);
					let S = b.ok && !(b.body && !1 === b.body.success);
					if (S) {
						const n = b.body;
						if (s(C({
								subredditId: e,
								template: n
							})), n.id) {
							const r = t.styleTemplate,
								i = a.structuredStyles.flairTemplate.models[n.id];
							r ? S = await s(Object(o.d)(e, n.id, r)) : i && (S = await s(Object(o.c)(e, n.id)))
						}
					}
					if (S) {
						const t = Object(c.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						s(Object(c.f)(t))
					} else {
						s(A());
						const r = Object(c.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(t, e));
						s(Object(c.f)(r))
					}
					return S
				}, v = (t, e) => async (s, r, {
					apiContext: i
				}) => {
					const o = r(),
						a = Object(E.S)(o, {
							subredditId: e
						}).name;
					if (s(j()), (await Object(d.b)(i(), t, a)).ok) {
						s(h({
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
					apiContext: i
				}) => {
					const o = r(),
						a = Object(_.d)(o, {
							subredditId: e
						}).templateIds,
						b = Object(E.S)(o, {
							subredditId: e
						}).name;
					if (s(U({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(i(), b, u.d.LinkFlair, t)).ok) {
						s(P());
						const t = Object(c.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						s(Object(c.f)(t))
					} else {
						s(F({
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
					apiContext: o
				}) => {
					const c = t.flair.filter(t => !Object(a.q)(t.type));
					if (e && c.unshift(e), n(Object(i.R)({
							[t.id]: {
								flair: c
							}
						})), e) {
						const n = Object(a.g)(e);
						Object(d.h)(o(), t.id, s, n)
					} else Object(d.h)(o(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return I
			})), s.d(e, "d", (function() {
				return L
			})), s.d(e, "a", (function() {
				return C
			})), s.d(e, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				i = s("./node_modules/lodash/isEqual.js"),
				o = s.n(i),
				c = s("./node_modules/lodash/values.js"),
				d = s.n(c),
				a = s("./src/lib/makeActionCreator/index.ts"),
				u = s("./src/reddit/actions/imageUploads.ts"),
				l = s("./src/reddit/helpers/media/index.ts"),
				_ = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				S = s("./src/reddit/constants/headers.ts");
			var m = s("./src/reddit/helpers/trackers/blade.ts"),
				p = s("./src/reddit/models/Image/index.tsx"),
				f = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/telemetry/index.ts");
			const T = ({
				subredditId: t,
				flairId: e,
				imageKey: s,
				imageData: n
			}) => async (r, i, o) => {
				const c = i(),
					d = Object(f.S)(c, {
						subredditId: t
					});
				if (!d) return !1;
				r(Object(u.k)(n));
				const a = await (async (t, e, s, n, r, i) => Object(E.a)(Object(b.a)(t, [S.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${s}`,
					method: _.hb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: i
					}
				}))(o.apiContext(), d.name, e, n.file.name, s, await Object(l.g)(n.file));
				let m = !1;
				try {
					const t = await Object(u.g)(i(), a, n, p.a.FlairTemplates);
					t && r(Object(u.j)(t)), m = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					r(Object(u.i)(O))
				}
				return m
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", D = Object(a.a)(I), L = (t, e, s) => async (n, i, c) => {
				const {
					apiContext: a
				} = c;
				let l = i();
				const {
					pendingImages: I,
					...L
				} = s;
				let C = L;
				const A = Object(f.S)(l, {
					subredditId: t
				});
				if (!A) return !1;
				const R = l.structuredStyles.flairTemplate.models[e];
				if (R && o()(R, C)) return !0;
				if (I) {
					const s = [];
					if (r()(I, (r, i) => {
							r && s.push(n(T({
								flairId: e,
								imageData: Object(p.m)(r),
								imageKey: i,
								subredditId: t
							})))
						}), !(await Promise.all(s)).every(t => t)) return !1;
					C = ((t, e, s) => {
						const n = {
							...t
						};
						return r()(e, (t, e) => {
							const r = t && s.imageUploads[t.id];
							r && r.kind === p.b.TempUploaded && (n[e] = r.url)
						}), n
					})(C, I, i())
				}
				l = i();
				let j = null,
					h = null;
				const y = [];
				try {
					(j = await Object(u.f)(l, p.a.FlairTemplates)) && (h = Object(u.m)(j)(n, i, c), y.push(...d()(j.imagesByKey)))
				} catch (P) {
					return !1
				}
				const N = await (async (t, e, s, n) => Object(E.a)(Object(b.a)(t, [S.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: _.hb.PUT,
						data: n
					}))(a(), A.name, e, C),
					g = R ? "edit_post_flair_template" : "save_post_flair_template",
					U = Object(m.e)(l, g);
				if (N.ok) {
					let t;
					if (h) try {
						await h, t = ((t, e, s) => {
							const n = {
								...t
							};
							return e.forEach(t => {
								const e = s.imageUploads[t.id];
								e && e.kind === p.b.Uploaded && (t.url === n.postBackgroundImage ? n.postBackgroundImage = e.url : t.url === n.postPlaceholderImage && (n.postPlaceholderImage = e.url))
							}), n
						})(C, y, i())
					} catch (P) {
						t = null
					} else t = C;
					n(D({
						flairId: e,
						template: t || C
					}))
				} else j && j.websocket.close();
				return Object(O.a)({
					...U,
					actionInfo: {
						...U.actionInfo,
						success: N.ok
					}
				}), N.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", A = Object(a.a)(C), R = (t, e) => async (s, n, {
				apiContext: r
			}) => {
				const i = n(),
					o = Object(f.S)(i, {
						subredditId: t
					});
				if (!o) return !1;
				const c = await (async (t, e, s) => Object(E.a)(Object(b.a)(t, [S.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${s}`,
						method: _.hb.DELETE
					}))(r(), o.name, e),
					d = Object(m.e)(i, "delete_flair_template");
				return c.ok && s(A({
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
				return _
			})), s.d(e, "b", (function() {
				return m
			}));
			var n, r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				o = s("./src/reddit/endpoints/category/subreddits.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				u = s("./src/reddit/constants/headers.ts");
			! function(t) {
				t.Factorization = "factorization", t.CustomModRelevant = "custom_mod_relevant"
			}(n || (n = {}));
			var l = s("./src/reddit/selectors/subreddit.ts");
			const _ = t => {
					let e = t.subredditIds.join(",");
					return t.count && (e += `--[count:'${t.count}']`), t.variant && (e += `--[variant:'${t.variant}']`), e.toLowerCase()
				},
				E = Object(r.a)(i.p),
				b = Object(r.a)(i.o),
				S = Object(r.a)(i.n),
				m = t => async (e, s, {
					apiContext: n
				}) => {
					const r = s(),
						i = _(t),
						m = Object(l.s)(r, {
							key: i
						}),
						p = Object(l.r)(r, {
							key: i
						});
					if (m || p.length > 0) return;
					e(E({
						key: i
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
						const t = Object(o.b)(f.body);
						e(b({
							key: i,
							...t
						}))
					} else {
						const t = f.error;
						e(S({
							key: i,
							error: t
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(t, e, s) {
			"use strict";
			s.d(e, "b", (function() {
				return z
			})), s.d(e, "a", (function() {
				return Q
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(o.b),
				d = Object(r.a)(o.a);
			var a = s("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(a.a),
				l = Object(r.a)(a.c),
				_ = Object(r.a)(a.b);
			var E = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				b = s("./src/lib/makeGqlRequest/index.ts"),
				S = (s("./src/redditGQL/operations/OtherDiscussions.json"), s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				m = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
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
				const o = r.body,
					{
						post: c
					} = o && o.data,
					d = t(),
					a = Object(i.a)(n, null, {
						isOtherDiscussions: !0
					});
				if (c) {
					if (c.otherDiscussions && c.otherDiscussionsCount) {
						const {
							otherDiscussions: t,
							otherDiscussionsCount: e
						} = c, {
							postFlair: r,
							postIds: i,
							posts: o,
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
									return Object(O.l)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(p.a)(t.profile)) : Object(O.m)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(f.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(S.a)(t.subreddit))), s.id
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
							postIds: i,
							posts: o,
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
			const I = Object(r.a)(E.a),
				D = Object(r.a)(E.b),
				L = Object(r.a)(E.c);
			var C = s("./src/reddit/actions/subreddit/constants.ts"),
				A = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json"),
				R = (s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json"));
			var j = ({
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
					} catch (i) {
						s(i)
					}
				},
				h = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var y = ({
					getState: t,
					onSuccess: e,
					onFailure: s,
					postId: n,
					post: r
				}) => {
					try {
						const s = [],
							i = {},
							o = {};
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
								i[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (i[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								o[e.id] = Object(f.a)(e)
							}
						}
						e({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: a,
							meta: c.meta,
							posts: i,
							postIds: s,
							subreddits: o
						})
					} catch (i) {
						s(i)
					}
				},
				N = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var g = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var U = ({
					isLinkedPostsFallback: t,
					getState: e,
					onSuccess: s,
					onFailure: r,
					options: o,
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
							l = Object(N.a)(u),
							_ = g(l),
							E = r.edges.reduce((t, e) => (e.node.id && e.node.id !== c && t.push(e.node.id), t), []),
							{
								range: b,
								sort: S,
								subredditName: m
							} = o,
							p = t && c ? Object(h.a)(c, !0) : Object(i.a)(m, n.U[S], {
								t: b
							});
						s({
							dist: r.dist,
							key: p,
							meta: a.meta,
							postIds: E,
							posts: _
						})
					} catch (a) {
						r(a)
					}
				},
				P = s("./src/reddit/models/Media/index.ts"),
				F = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
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
							i = {},
							o = {};
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
								i[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (i[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								o[e.id] = Object(f.a)(e)
							}
						}
						e({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: a,
							meta: c.meta,
							posts: i,
							postIds: s,
							subreddits: o
						})
					} catch (i) {
						s(i)
					}
				},
				v = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const w = Object(r.a)(v.b),
				G = Object(r.a)(v.a);
			var B = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Y = Object(r.a)(B.b),
				K = Object(r.a)(B.a),
				H = Object(r.a)(C.j),
				q = Object(r.a)(C.i),
				V = Object(r.a)(C.r),
				W = Object(r.a)(C.q),
				z = t => async (e, s, {
					gqlContext: n
				}) => {
					const r = (await ((t, e) => Object(b.a)(t, {
							...R,
							variables: e
						}))(n(), t)).body,
						{
							subredditNames: i,
							...o
						} = t,
						c = [];
					try {
						for (const t of r.data.subredditsInfoByNames) {
							const e = t.elements.edges[0];
							e && Object(O.m)(e.node) && U({
								getState: s,
								onFailure: t => {
									throw t
								},
								onSuccess: t => c.push(t),
								options: {
									...o,
									subredditName: e.node.subreddit.name
								},
								subreddit: t
							})
						}
						e(V(c))
					} catch (d) {
						e(W(d))
					}
				}, Q = t => async (e, s, {
					gqlContext: r
				}) => {
					var o, a, E, S;
					const {
						includeNSFWListingBelowExperiment: m,
						includeListingBelowExperiment: p,
						includeOtherDiscussions: f,
						includePostFeed: O,
						includePostQASchemaEligibilityFlag: C,
						listingBelowExperimentVariant: R,
						postId: h,
						range: N,
						sort: g,
						subredditName: x
					} = t, v = Object(i.a)(h, null, {
						isOtherDiscussions: !0
					}), B = s(), V = Object(k.z)(B, {
						listingKey: v
					}), W = f && (!V || 0 === V.length), z = Object(i.a)(x, n.U[g], {
						t: N
					}), Q = Object(k.z)(B, {
						listingKey: z
					}), $ = O && (p || !Q || 0 === Q.length), X = p, J = m, Z = Object(k.G)(B, {
						postId: h
					}), tt = !!Z && !!Z.media && (Object(P.H)(Z.media) || Object(P.F)(Z.media)) && !Z.media.altText;
					if (!(W || $ || X || J || tt || C)) return;
					W && e(L({
						key: v
					}));
					const et = await ((t, e) => Object(b.a)(t, {
							...A,
							variables: e
						}))(r(), t),
						st = et.body,
						nt = Object(F.a)(R),
						rt = X && !!(null === (E = null === (a = null === (o = st.data) || void 0 === o ? void 0 : o.post) || void 0 === a ? void 0 : a.linked) || void 0 === E ? void 0 : E.isEligible),
						it = X && (nt || !rt);
					C && (et.ok ? st.data && st.data.post && e(c({
						postId: h,
						isEligibleForQASchema: null !== (S = st.data.post.isEligibleForQASchema) && void 0 !== S && S
					})) : e(d())), W && T({
						getState: s,
						onFailure: t => e(I(t)),
						onSuccess: t => e(D(t)),
						postId: h,
						response: et
					}), ($ && !X || it) && (et.ok ? st.data && U({
						getState: s,
						isLinkedPostsFallback: it,
						onFailure: t => e(q(t)),
						onSuccess: t => e(H(t)),
						options: t,
						postId: h,
						subreddit: st.data.subreddit
					}) : e(q(et.error))), X && rt && !nt && et.ok && st.data && y({
						getState: s,
						onFailure: t => e(_(t)),
						onSuccess: t => e(l(t)),
						postId: h,
						post: st.data.post
					}), J && et.ok && M({
						getState: s,
						onFailure: t => e(K(t)),
						onSuccess: t => e(Y(t)),
						postId: h,
						post: st.data.post
					}), tt && et.ok && st.data && j({
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
				return i
			})), s.d(e, "j", (function() {
				return o
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
				return _
			})), s.d(e, "o", (function() {
				return E
			})), s.d(e, "f", (function() {
				return b
			})), s.d(e, "g", (function() {
				return S
			})), s.d(e, "e", (function() {
				return m
			})), s.d(e, "m", (function() {
				return p
			})), s.d(e, "n", (function() {
				return f
			})), s.d(e, "l", (function() {
				return O
			})), s.d(e, "k", (function() {
				return T
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				p = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				i = s("./src/lib/timeUntil/index.ts"),
				o = s("./node_modules/react/index.js"),
				c = s.n(o);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function a(t) {
				const e = new Date(t.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: t.className
				}, e ? d._("Voting closed {timeAgo}", [d._param("timeAgo", c.a.createElement(r.d, {
					seconds: t.poll.endsAt / n.Nb
				}))], {
					hk: "3OERID"
				}) : Object(i.a)(new Date(t.poll.endsAt)))
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
				return U
			})), s.d(e, "a", (function() {
				return q
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/constants/experiments.ts"),
				E = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				S = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				T = s("./src/reddit/icons/fonts/index.tsx"),
				I = s("./src/reddit/models/Flair/index.ts"),
				D = s("./src/reddit/models/Media/index.ts"),
				L = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				A = s("./src/reddit/components/FlairWrapper/index.tsx"),
				R = s("./node_modules/fbt/lib/FbtPublic.js"),
				j = s("./src/lib/prettyPrintNumber/index.ts"),
				h = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				y = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				N = s.n(y);
			const g = Object(d.c)({
				poll: (t, e) => t.polls.models[e.pollId],
				resultsByVoters: (t, e) => t.polls.results.byVoters[e.pollId]
			});
			var U, P = Object(o.b)(g)((function(t) {
					const {
						poll: e,
						resultsByVoters: s
					} = t, n = s ? s.totalVotes : "0";
					return i.a.createElement("div", {
						className: Object(u.a)(t.className, N.a.proposalMetaData)
					}, i.a.createElement("span", null, R.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [R.fbt._param("count", Object(j.a)(n)), R.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), e && i.a.createElement(h.a, {
						className: N.a.proposalExpiry,
						poll: e
					}))
				})),
				F = s("./src/reddit/components/SEOTitle/index.tsx"),
				k = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/PostTitle/index.m.less"),
				M = s.n(x),
				v = s("./src/config.ts"),
				w = s("./src/reddit/hooks/useClickSourceData.ts"),
				G = s("./src/reddit/hooks/useExperimentVariant.ts"),
				B = s("./src/reddit/hooks/usePostContext.ts"),
				Y = s("./src/reddit/hooks/useTheme.ts"),
				K = s("./src/telemetry/models/Outbound.ts");

			function H() {
				return (H = Object.assign || function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var s = arguments[e];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
					}
					return t
				}).apply(this, arguments)
			}! function(t) {
				t[t.ExtraLarge = 0] = "ExtraLarge", t[t.Large = 1] = "Large", t[t.Medium = 2] = "Medium", t[t.Small = 3] = "Small", t[t.ExtraSmall = 4] = "ExtraSmall"
			}(U || (U = {}));
			const q = ({
					size: t,
					titleColor: e,
					titleType: s,
					nowrap: n,
					children: r,
					className: o,
					redditStyle: c
				}) => {
					const d = Object(Y.a)();
					let a = "";
					switch (t) {
						case U.ExtraLarge:
							a = M.a.ExtraLarge;
							break;
						case U.Large:
							a = M.a.Large;
							break;
						case U.Medium:
							a = M.a.Medium;
							break;
						case U.Small:
							a = M.a.Small;
							break;
						case U.ExtraSmall:
							a = M.a.ExtraSmall
					}
					return i.a.createElement("div", {
						className: Object(u.a)(M.a.Title, o, a, {
							[M.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": e || Object(L.a)({
								redditStyle: c,
								theme: d
							}).titleText
						}
					}, s ? i.a.createElement(F.b, {
						type: s
					}, r) : r)
				},
				V = ({
					className: t,
					disableVisited: e,
					titleColor: s,
					children: n,
					...r
				}) => i.a.createElement(c.a, H({}, r, {
					className: Object(u.a)(t, M.a.styledLink, {
						[M.a.isVisitedEnabled]: !e
					})
				}), n),
				W = ({
					disableVisited: t,
					nowrap: e,
					className: s,
					children: n
				}) => i.a.createElement("div", {
					className: Object(u.a)(M.a.titleContainer, s, {
						[M.a.isNoWrap]: e,
						[M.a.isVisitedEnabled]: !t
					})
				}, n),
				z = Object(d.c)({
					flairPosition: (t, {
						pageLayer: e
					}) => Object(E.p)(t, {
						pageLayer: e
					}),
					shouldOpenPostInNewTab: k.bb
				}),
				Q = t => {
					const {
						post: e,
						subreddit: s
					} = t, {
						isSponsored: n
					} = e, r = Object(w.a)(), o = Object(G.a)(_.oc) === _.sc.Enabled;
					if (t.isCommentsPage && !t.isCommentPermalink && !t.shouldLinkWrap) return i.a.createElement(W, {
						nowrap: t.nowrap
					}, i.a.createElement($, t));
					if (t.isCommentsPageAd && e.source && e.source.url) return i.a.createElement(b.b, {
						href: e.source.url,
						isSponsored: n,
						postId: e.id,
						source: e.source
					}, i.a.createElement($, t)); {
						const c = e.media && Object(D.G)(e.media) ? Object(O.c)(e.id, s.name) : e.permalink,
							d = t.isCommentPermalink ? Object(f.b)(c) : o ? Object(m.a)(c, void 0, r) : Object(m.a)(c);
						return i.a.createElement(W, {
							disableVisited: t.disableVisited,
							nowrap: t.nowrap
						}, n ? ((t, e) => {
							const {
								source: s
							} = Object(a.t)(t, e.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: t.isSponsored,
								postId: t.id,
								source: s
							}, i.a.createElement($, e)) : i.a.createElement($, e)
						})(e, t) : i.a.createElement(V, {
							className: t.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: t.disableVisited,
							target: t.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: t.titleColor,
							to: d
						}, i.a.createElement($, t)))
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
					const o = t.isCommentsPage ? F.a.PostComments : F.a.PostItem;
					return i.a.createElement(q, {
						className: t.titleClassName,
						nowrap: t.nowrap,
						redditStyle: t.redditStyle || t.isCommentsPage,
						size: t.size,
						titleColor: t.titleColor,
						titleType: o
					}, e && i.a.createElement(A.a, {
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
					} = s, r = t.isCommentsPage ? K.SourceElement.PostLink : K.SourceElement.ListingPostLink, o = !e && !t.isCrosspost && t.size !== U.Large && !s.isSponsored && !(s.media && Object(D.G)(s.media)) && (s.source || s.media && (s.media.type === D.o.GIFVIDEO || s.media.type === D.o.IMAGE || s.media.type === D.o.EMBED));
					if (e || !t.isCommentsPage || t.isCommentPermalink || t.shouldLinkWrap) {
						if (o) return i.a.createElement(S.a, {
							className: t.outboundLinkClassName,
							href: Object(D.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(C.a)(s), !s.isSponsored && i.a.createElement(T.a, {
							name: "external_link",
							className: M.a.outboundLinkIcon
						}))
					} else if (s.source && !t.isCrosspost && t.size !== U.Large && t.size !== U.ExtraLarge) return i.a.createElement(S.a, {
						className: t.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(C.a)(s), !s.isSponsored && i.a.createElement(T.a, {
						name: "external_link",
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class J extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(L.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(L.a)(this.props).titleText,Object(L.a)(this.props).body)};\n        }\n      `
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
						poll: o,
						post: c,
						showNSFWSpoilerFlairsOnly: d
					} = this.props, a = s === I.b.Left, l = Object(A.b)(c), _ = d ? l.filter(t => t.type === I.f.Nsfw || t.type === I.f.Spoiler) : a ? l.filter(t => Object(p.q)(t.type)) : [], E = d ? [] : a ? l.filter(t => !Object(p.q)(t.type)) : l, b = !r && !n, S = !e && _ && _.length > 0 && b, m = !e && E && E.length > 0 && b;
					return i.a.createElement("div", {
						className: Object(u.a)(M.a.Component, t, c.id)
					}, !d && S && i.a.createElement(A.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement(Q, H({}, this.props, {
						leftFlair: d ? _ : void 0
					})), o && i.a.createElement(P, {
						className: M.a.pollMeta,
						pollId: o.id
					}), i.a.createElement(X, this.props), m && i.a.createElement(A.a, {
						isFlairFilter: !0,
						titleFlair: E,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), i.a.createElement("div", {
						className: M.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${v.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			e.c = i.a.memo((function(t) {
				const e = Object(E.ab)(),
					s = Object(E.v)(e),
					n = Object(B.a)(),
					r = Object(o.e)(r => z(r, {
						...n,
						...t,
						isCommentPermalink: s,
						pageLayer: e
					})),
					c = Object(Y.a)(),
					d = Object(l.b)();
				return i.a.createElement(J, H({
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
				return i
			}));
			const n = 3,
				r = 5,
				i = 10
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				r = s("./src/reddit/models/Media/index.ts");

			function i(t) {
				return !(!t.thumbnail || !t.thumbnail.url || t.thumbnail.url === n.a.SELF || t.thumbnail.url === n.a.NSFW || t.media && Object(r.E)(t.media))
			}
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
				return o
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
				i = t => {
					const e = t.body;
					return {
						type: r(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				o = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: i(t)
					} : t
				};
			e.a = i
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(t, e, s) {
			"use strict";
			s.d(e, "g", (function() {
				return f
			})), s.d(e, "h", (function() {
				return O
			})), s.d(e, "a", (function() {
				return L
			})), s.d(e, "E", (function() {
				return C
			})), s.d(e, "F", (function() {
				return A
			})), s.d(e, "M", (function() {
				return j
			})), s.d(e, "B", (function() {
				return h
			})), s.d(e, "C", (function() {
				return y
			})), s.d(e, "D", (function() {
				return N
			})), s.d(e, "i", (function() {
				return g
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
				return G
			})), s.d(e, "N", (function() {
				return B
			})), s.d(e, "J", (function() {
				return Y
			})), s.d(e, "t", (function() {
				return K
			})), s.d(e, "H", (function() {
				return H
			})), s.d(e, "d", (function() {
				return q
			})), s.d(e, "c", (function() {
				return V
			})), s.d(e, "b", (function() {
				return W
			})), s.d(e, "f", (function() {
				return z
			})), s.d(e, "e", (function() {
				return Q
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
				return it
			})), s.d(e, "o", (function() {
				return ot
			})), s.d(e, "j", (function() {
				return ct
			})), s.d(e, "u", (function() {
				return dt
			})), s.d(e, "G", (function() {
				return at
			}));
			var n, r = s("./src/lib/stringInterpolate/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/models/Widgets/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/widgets.ts"),
				b = s("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const S = "discovery_unit",
				m = (t, e, s) => ({
					..._.defaults(t),
					source: S,
					screen: _.screen(t),
					discoveryUnit: {
						id: e.id,
						type: e.unitType,
						title: e.title && s ? Object(r.a)(e.title, {
							subredditName: s.name
						}) : e.title,
						name: e.unitName
					}
				}),
				p = (t, e, s) => ({
					...m(t, e, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				f = (t, e) => {
					Object(b.a)(O(e)(t))
				},
				O = (t, e) => s => p(s, t, e),
				T = (t, e, s, n) => "unitName" in e ? m(t, e, n) : ((t, e, s) => ({
					..._.defaults(t),
					source: "search",
					screen: _.screen(t),
					search: s ? {
						..._.search(t, s),
						structureType: _.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: e.name,
						type: "listing",
						title: e.layout.title,
						name: e.name
					}
				}))(t, e, s),
				I = (t, e, s, r, i) => ({
					...T(t, e, r, i),
					action: "view",
					noun: n.ITEM_POST,
					post: _.post(t, s)
				}),
				D = ({
					post: t,
					rawQuery: e,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? _.StructureType.PromotedTrend : _.StructureType.Trending
				});
			var L;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(L || (L = {}));
			const C = (t, e, s) => {
					Object(b.a)(R(t, e, s, o.c.CLICK))
				},
				A = (t, e, s) => {
					Object(b.a)(R(t, e, s, o.c.VIEW))
				},
				R = (t, e, s, n) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						..._.defaults(t),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: D(e),
						discoveryUnit: s === L.POPULAR_CAROUSEL ? {
							name: a.m,
							id: a.m,
							title: a.m,
							type: "query"
						} : void 0,
						actionInfo: _.actionInfo(t, {
							paneName: s,
							position: r
						}),
						search: {
							originPageType: t.platform.currentPage ? _.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
							query: e.rawQuery,
							structureType: _.StructureType.Trending,
							queryId: n === o.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				j = (t, e, s, n, r, i, c) => {
					Object(b.a)({
						..._.defaults(t),
						...Object(d.f)(t, s, n, r, i, e),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				h = (t, e, s, n) => {
					Object(b.a)(I(t, e, s, n))
				},
				y = (t, e, s, n) => r => I(r, t, e, s, n),
				N = (t, e, s, r) => {
					const i = T(t, e, r);
					Object(b.a)({
						...i,
						...Object(E.b)(t, s),
						action: "view",
						noun: n.ITEM_SUBREDDIT
					})
				},
				g = (t, e) => {
					Object(b.a)({
						...m(t, e),
						source: S,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				U = (t, e, s, n) => {
					Object(b.a)(P(e, s, n)(t))
				},
				P = (t, e, s, r) => i => {
					return {
						...T(i, t, s, r),
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: _.post(i, e)
					}
				},
				F = (t, e, s, n) => r => i => Object(d.f)(i, r, t, e, s, n),
				k = (t, e, s, n) => r => i => Object(d.e)(i, t, e, void 0, s, r, n),
				x = (t, e, s, n) => r => i => ({
					...Object(d.f)(i, r, t, e, s, n),
					noun: "ad"
				}),
				M = (t, e) => s => r => ({
					...t ? m(r, t, e) : {},
					source: S,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: _.post(r, s)
				}),
				v = (t, e, s, n) => {
					Object(b.a)(w(e, s, n)(t))
				},
				w = (t, e, s, n) => r => {
					const i = Object(l.c)(r, {
							postId: e
						}),
						c = i ? Object(E.b)(r, i) : void 0;
					return {
						...T(r, t, s, n),
						...c,
						source: S,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: _.post(r, e)
					}
				},
				G = (t, e, s) => n => r => {
					const i = Object(l.c)(r, {
							postId: e
						}),
						c = i ? Object(E.b)(r, i) : void 0;
					return {
						...T(r, t, void 0, s),
						...c,
						source: S,
						action: o.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: _.post(r, e)
					}
				},
				B = (t, e, s) => {
					const n = T(t, e);
					Object(b.a)({
						...n,
						...Object(E.b)(t, s),
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				Y = (t, e, s, n, r, i) => {
					Object(b.a)({
						..._.defaults(t),
						...Object(d.e)(t, e, s, n, r, void 0, i)
					})
				},
				K = (t, e, s) => {
					const n = T(t, e);
					Object(b.a)({
						...n,
						...Object(E.b)(t, s),
						source: S,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				H = (t, e) => s => {
					const n = Object(u.j)(e);
					return {
						...m(s, t, e),
						...Object(E.b)(s, n),
						source: S,
						action: o.c.CLICK,
						noun: "title_subreddit"
					}
				},
				q = (t, e) => s => ({
					...m(s, t, e),
					action: "status",
					actionInfo: _.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				V = (t, e, s) => n => ({
					...m(n, t, s),
					action: "status",
					actionInfo: _.actionInfo(n, {
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
				z = (t, e, s) => n => ({
					...T(n, t, e, s),
					action: "click",
					noun: "scroll"
				}),
				Q = (t, e) => s => ({
					...m(s, t, e),
					action: "click",
					noun: "overflow_menu"
				}),
				$ = () => ({
					id: "xd_focus_verticals",
					unitType: a.f.Listing,
					experiment: "",
					title: i.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: a.d.Large,
					surface: a.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (t, e, s) => _.actionInfo(t, {
					position: s
				}),
				J = (t, e, s) => {
					const n = $();
					return t => ({
						...p(t, n),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e)
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
						subreddit: _.subredditById(t, e) || null,
						source: S,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				et = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						post: _.post(t, e) || null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				st = (t, e, s, r) => {
					const i = $();
					return t => ({
						...m(t, i),
						actionInfo: X(t, 0, r),
						subreddit: _.subredditById(t, s) || null,
						post: _.post(t, e) || null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				nt = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e) || null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				rt = (t, e, s, r) => {
					const i = $();
					return t => ({
						...m(t, i),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e) || null,
						post: r ? _.post(t, r) : null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				it = (t, e, s, r) => {
					const i = $();
					return t => ({
						...m(t, i),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e) || null,
						post: r ? _.post(t, r) : null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ot = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e) || null,
						source: S,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ct = (t, e, s) => {
					const r = $();
					return t => ({
						...m(t, r),
						actionInfo: X(t, 0, s),
						subreddit: _.subredditById(t, e) || null,
						source: S,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				dt = (t, e) => s => ({
					...m(s, t),
					...e && Object(E.b)(s, e),
					source: S,
					action: o.c.CLICK,
					noun: "item"
				}),
				at = t => e => ({
					...m(e, t),
					source: S,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");

			function i(t, e = r.a) {
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
				return o
			})), s.d(e, "d", (function() {
				return c
			}));
			var n, r, i = s("./src/reddit/models/Badge/index.ts");
			! function(t) {
				t.Loyalty = "loyalty", t.Achievement = "achievement", t.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(t) {
				t.Gallery = "gallery", t.MyBadges = "my-badges"
			}(r || (r = {}));
			const o = {
					[n.Loyalty]: i.a.First,
					[n.Achievement]: i.a.Second,
					[n.Cosmetic]: void 0
				},
				c = t => t === i.a.First ? n.Loyalty : t === i.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "r", (function() {
				return o
			})), s.d(e, "a", (function() {
				return d
			})), s.d(e, "e", (function() {
				return a
			})), s.d(e, "g", (function() {
				return u
			})), s.d(e, "n", (function() {
				return l
			})), s.d(e, "o", (function() {
				return _
			})), s.d(e, "f", (function() {
				return E
			})), s.d(e, "c", (function() {
				return S
			})), s.d(e, "q", (function() {
				return p
			})), s.d(e, "k", (function() {
				return f
			})), s.d(e, "j", (function() {
				return O
			})), s.d(e, "h", (function() {
				return T
			})), s.d(e, "i", (function() {
				return I
			})), s.d(e, "d", (function() {
				return D
			})), s.d(e, "m", (function() {
				return L
			})), s.d(e, "b", (function() {
				return C
			})), s.d(e, "l", (function() {
				return A
			})), s.d(e, "p", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				i = s("./src/reddit/models/User/index.ts");
			const o = "scheduledposts";
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
				l = t => t.__typename === i.c.AvailableRedditor,
				_ = t => t.__typename === r.a.Subreddit;
			var E, b, S, m;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(E || (E = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(S || (S = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(m || (m = {}));
			const p = t => b[m[t]],
				f = t => m[b[t]],
				O = t => S[b[t]],
				T = t => b[S[t]],
				I = t => m[S[t]];
			var D;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(D || (D = {}));
			const L = t => {
					switch (t) {
						case D.Hourly:
						case D.Daily:
						case D.Weekly:
						case D.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				A = t => {
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
				R = t => "frequency" in t && !!t.frequency
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
			const i = {
				status: n.NotFetched
			};
			e.b = (t = i, e) => {
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
				i = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = s("./src/reddit/helpers/economics/sortBadges.ts"),
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
						let i;
						(i = t.placement ? t.placement === c.a.First ? n[d.a.Loyalty][r] : n[d.a.Achievement][r] : u(t) ? n[d.a.Cosmetic][d.c.MyBadges][r] : n[d.a.Cosmetic][d.c.Gallery][r]) && (u(t) ? s.has(t.id) && i.unlocked.push(t) : e.has(t.id) || i.locked.push(t))
					})
				})
			}

			function _(t) {
				const e = (t, e) => {
					const s = parseInt(t.price || "0"),
						n = parseInt(e.price || "0");
					return s === n ? Object(o.b)(t, e) : s - n
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function E(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === r.a).map(_).sort((t, s) => {
					const n = e[t.id],
						r = e[s.id];
					return Object(o.b)(n, r)
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
					case i.a: {
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
					case i.h: {
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
					case i.i: {
						const s = e.payload;
						return {
							...t,
							[s.subredditId]: {
								raw: s,
								data: b(s),
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
				return E
			})), s.d(e, "c", (function() {
				return b
			})), s.d(e, "a", (function() {
				return S
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
				i = s("./src/lib/makeListingKey/index.ts"),
				o = s("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = s("./src/reddit/constants/inFeedChaining.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				a = s("./src/reddit/selectors/discoveryUnit.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const _ = [],
				E = (t, e) => {
					const s = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === s
				},
				b = (t, e) => {
					const s = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === s
				},
				S = Object(n.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				m = (t, {
					subredditId: e
				}) => {
					return S(t).some(s => {
						const n = Object(u.T)(t, {
							postId: s
						});
						return !!n && n.id === e
					})
				},
				p = (t, {
					subredditName: e
				}) => {
					const s = r.bc.DAY.toUpperCase(),
						n = Object(i.a)(e, r.U.TOP, {
							t: s
						}),
						o = Object(u.z)(t, {
							listingKey: n
						});
					if (0 !== o.length)
						for (const r of o) {
							const e = Object(u.G)(t, {
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
							const s = Object(u.G)(t, {
								postId: e
							});
							if (!s) return _;
							const n = Object(o.a)({
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
						const e = p(t, {
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
			t.exports = JSON.parse('{"id":"2235f6ea21db"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"57a00f39b82d"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"5331d6d26cc7"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"dea2650df7b5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.50f0ea32b98250ff1243.js.map