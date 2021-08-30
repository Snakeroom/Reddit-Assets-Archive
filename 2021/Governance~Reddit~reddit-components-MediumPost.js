// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.411eae175a94b5ffd88f.js
// Retrieved at 8/30/2021, 12:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-MediumPost"], {
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
			e.a = (t, e) => {
				let n = `linkedPosts--[post:'${t}']`;
				return e && (n += "--fallback"), n
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(t, e, n) {
			"use strict";
			e.a = t => {
				return `nsfwLinkedPosts--[post:'${t}']`
			}
		},
		"./src/lib/timeUntil/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.lc, r.nb, r.z, r.O, r.ib, r.Ob],
				i = {
					[r.Ob]: t => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(t, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: t => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(t, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: t => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(t, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: t => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(t, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: t => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(t, "number")], {
						hk: "28DQqD"
					}),
					[r.lc]: t => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(t, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[r.Ob]: t => s.fbt._("{amount}s", [s.fbt._param("amount", String(t))], {
						hk: "F4qog"
					}),
					[r.ib]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "43tM5H"
					}),
					[r.O]: t => s.fbt._("{amount}h", [s.fbt._param("amount", String(t))], {
						hk: "19NsxU"
					}),
					[r.z]: t => s.fbt._("{amount}d", [s.fbt._param("amount", String(t))], {
						hk: "39MDc9"
					}),
					[r.nb]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.lc]: t => s.fbt._("{amount}y", [s.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					}),
					[r.nb]: t => s.fbt._("{amount}m", [s.fbt._param("amount", String(t))], {
						hk: "28feBj"
					}),
					[r.lc]: t => s.fbt._("{amount}y", [s.fbt._param("amount", String(t))], {
						hk: "10bv8G"
					})
				};

			function d(t, e = !1, n = !1) {
				const d = Date.now(),
					a = new Date(t).getTime(),
					u = {
						[r.lc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Ob]: ""
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
		"./src/reddit/actions/grantUserFlair/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "i", (function() {
				return s
			})), n.d(e, "g", (function() {
				return r
			})), n.d(e, "f", (function() {
				return o
			})), n.d(e, "l", (function() {
				return i
			})), n.d(e, "k", (function() {
				return c
			})), n.d(e, "j", (function() {
				return d
			})), n.d(e, "h", (function() {
				return a
			})), n.d(e, "a", (function() {
				return u
			})), n.d(e, "b", (function() {
				return l
			})), n.d(e, "e", (function() {
				return _
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "d", (function() {
				return E
			}));
			const s = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				o = "SUBREDDIT__FLAIRED_USERS_FAILED",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				d = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				a = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				_ = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				E = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
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
				return T
			})), n.d(e, "d", (function() {
				return L
			})), n.d(e, "c", (function() {
				return C
			})), n.d(e, "a", (function() {
				return A
			})), n.d(e, "e", (function() {
				return h
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
				b = n("./src/reddit/constants/page.ts"),
				E = n("./src/reddit/helpers/localStorage/index.ts"),
				p = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				m = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/inFeedChaining.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts");
			const T = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(i.a)(T),
				D = t => {
					const e = Date.now() - t,
						n = Object(E.I)();
					return Object.keys(n).filter(t => n[t].when >= e).map(t => n[t])
				},
				L = ({
					listingName: t,
					listingKey: e,
					postId: n
				}) => async (s, i, l) => {
					if (!n) return;
					const m = Object(S.V)(i(), {
						postId: n
					});
					if (!m) return;
					const T = m.name.toLowerCase(),
						L = t === T;
					if (!(t === b.f || t === b.b || L)) return;
					if (L) return void j(m, e, n)(s, i, l);
					0 === D(o.nb).length && Object(E.Nb)(!1);
					let C = i();
					if (Object(f.d)(C, {
							listingKey: e,
							postId: n
						}) || Object(f.a)(C).length >= _.a || Object(E.X)() || D(o.z).length >= _.a) return;
					const A = Object(S.w)(C, {
						listingKey: e,
						postId: n
					});
					if (A && A.isSponsored) return;
					await s(Object(d.g)()), C = i();
					const R = Object(f.b)(C, {
						listingName: t
					});
					if (!R) return;
					if (!m || Object(f.e)(C, {
							subredditId: m.id
						}) || (t => {
							return D(o.z).some(e => e.subredditId === t)
						})(m.id)) return;
					const h = {
						subredditIds: [m.id],
						count: _.b
					};
					await s(Object(a.b)(h));
					const y = Object(a.a)(h);
					C = i();
					const g = Object(O.u)(C, {
						key: y
					});
					0 !== g.length ? (await s((t => async (e, n) => {
						const s = o.cc.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, o.U.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(S.B)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: s,
							sort: o.N.TOP,
							subredditNames: r
						}))
					})(g.map(t => t.name))), C = i(), Object(f.f)(C, {
						postId: n
					}).length < _.c ? Object(r.a)(Object(p.c)(R, "other", m)(C)) : (Object(E.b)(n, m.id), Object(r.a)(Object(p.d)(R, m)(C)), s(I({
						listingKey: e,
						postId: n
					})))) : Object(r.a)(Object(p.c)(R, "no_chaining", m)(C))
				}, C = "FEED_CHAINING__CHAIN_TOGGLED", A = (Object(i.a)(C), "FEED_CHAINING__CHAINING_TOGGLED"), R = Object(i.a)(A), h = () => async t => {
					Object(E.Nb)(!0), t(R({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), m.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(E.Nb)(!1), t(R({
							isDismissed: !1
						}))
					})))
				}, j = (t, e, n) => async (t, e, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			})), n.d(e, "a", (function() {
				return o
			}));
			const s = "LINKED_POSTS__POSTS_LOADED",
				r = "LINKED_POSTS__POSTS_FAILED",
				o = "LINKED_POSTS__ELIGIBILITY_LOADED"
		},
		"./src/reddit/actions/nsfwLinkedPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "a", (function() {
				return r
			}));
			const s = "NSFW_LINKED_POSTS__POSTS_LOADED",
				r = "NSFW_LINKED_POSTS__POSTS_FAILED"
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
				return b
			})), n.d(e, "l", (function() {
				return E
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
				return T
			})), n.d(e, "q", (function() {
				return I
			})), n.d(e, "o", (function() {
				return D
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
				b = "UPDATE_COLLECTION_FAILED",
				E = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				p = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				m = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				f = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				D = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return E
			})), n.d(e, "a", (function() {
				return S
			})), n.d(e, "f", (function() {
				return D
			})), n.d(e, "b", (function() {
				return R
			})), n.d(e, "e", (function() {
				return g
			})), n.d(e, "d", (function() {
				return N
			})), n.d(e, "l", (function() {
				return F
			})), n.d(e, "k", (function() {
				return x
			})), n.d(e, "j", (function() {
				return M
			})), n.d(e, "g", (function() {
				return v
			})), n.d(e, "i", (function() {
				return w
			})), n.d(e, "h", (function() {
				return G
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/flair/index.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/postFlair.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const E = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				p = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				m = Object(r.a)(E),
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(r.a)(S),
				I = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				D = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(D),
				A = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				R = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				j = Object(r.a)(R),
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				U = Object(r.a)(g),
				P = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(r.a)(N),
				F = (t, e) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(b.T)(o, {
							subredditId: t
						}).name;
					n(p());
					const c = await Object(d.k)(r(), i, e);
					if (c.ok) {
						n(m({
							subredditId: t,
							isEnabled: e
						}))
					} else n(f());
					return c.ok
				}, x = (t, e) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(b.T)(o, {
							subredditId: t
						}).name;
					n(O());
					const c = await Object(d.j)(r(), e, u.d.LinkFlair, i);
					if (c.ok) {
						n(T({
							subredditId: t,
							canAssignOwn: e
						}))
					} else n(I());
					return c.ok
				}, M = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const a = r(),
						_ = Object(b.T)(a, {
							subredditId: e
						}).name;
					n(L());
					const E = await Object(d.f)(o(), t, _, u.d.LinkFlair);
					let p = E.ok && !(E.body && !1 === E.body.success);
					if (p) {
						const s = E.body;
						if (n(C({
								subredditId: e,
								template: s
							})), s.id) {
							const r = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[s.id];
							r ? p = await n(Object(i.d)(e, s.id, r)) : o && (p = await n(Object(i.c)(e, s.id)))
						}
					}
					if (p) {
						const t = Object(c.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(c.f)(t))
					} else {
						n(A());
						const r = Object(c.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(t, e));
						n(Object(c.f)(r))
					}
					return p
				}, v = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(b.T)(i, {
							subredditId: e
						}).name;
					if (n(h()), (await Object(d.b)(o(), t, a)).ok) {
						n(j({
							subredditId: e,
							templateId: t
						}));
						const r = Object(c.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(c.f)(r))
					} else {
						n(y());
						const r = Object(c.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), v(t, e));
						n(Object(c.f)(r))
					}
				}, w = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(_.d)(i, {
							subredditId: e
						}).templateIds,
						E = Object(b.T)(i, {
							subredditId: e
						}).name;
					if (n(U({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), E, u.d.LinkFlair, t)).ok) {
						n(P());
						const t = Object(c.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						n(Object(c.f)(t))
					} else {
						n(k({
							subredditId: e,
							templateIds: a
						}));
						const r = Object(c.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(t, e));
						n(Object(c.f)(r))
					}
				}, G = ({
					post: t,
					previewFlair: e,
					selectedTemplateId: n
				}) => async (s, r, {
					apiContext: i
				}) => {
					const c = t.flair.filter(t => !Object(a.q)(t.type));
					if (e && c.unshift(e), s(Object(o.R)({
							[t.id]: {
								flair: c
							}
						})), e) {
						const s = Object(a.g)(e);
						Object(d.h)(i(), t.id, n, s)
					} else Object(d.h)(i(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return I
			})), n.d(e, "d", (function() {
				return L
			})), n.d(e, "a", (function() {
				return C
			})), n.d(e, "c", (function() {
				return R
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c),
				a = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/imageUploads.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				_ = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				E = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var m = n("./src/reddit/helpers/trackers/blade.ts"),
				f = n("./src/reddit/models/Image/index.tsx"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/telemetry/index.ts");
			const T = ({
				subredditId: t,
				flairId: e,
				imageKey: n,
				imageData: s
			}) => async (r, o, i) => {
				const c = o(),
					d = Object(S.T)(c, {
						subredditId: t
					});
				if (!d) return !1;
				r(Object(u.k)(s));
				const a = await (async (t, e, n, s, r, o) => Object(b.a)(Object(E.a)(t, [p.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${n}`,
					method: _.hb.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), d.name, e, s.file.name, n, await Object(l.g)(s.file));
				let m = !1;
				try {
					const t = await Object(u.g)(o(), a, s, f.a.FlairTemplates);
					t && r(Object(u.j)(t)), m = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					r(Object(u.i)(O))
				}
				return m
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", D = Object(a.a)(I), L = (t, e, n) => async (s, o, c) => {
				const {
					apiContext: a
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...L
				} = n;
				let C = L;
				const A = Object(S.T)(l, {
					subredditId: t
				});
				if (!A) return !1;
				const R = l.structuredStyles.flairTemplate.models[e];
				if (R && i()(R, C)) return !0;
				if (I) {
					const n = [];
					if (r()(I, (r, o) => {
							r && n.push(s(T({
								flairId: e,
								imageData: Object(f.m)(r),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(n)).every(t => t)) return !1;
					C = ((t, e, n) => {
						const s = {
							...t
						};
						return r()(e, (t, e) => {
							const r = t && n.imageUploads[t.id];
							r && r.kind === f.b.TempUploaded && (s[e] = r.url)
						}), s
					})(C, I, o())
				}
				l = o();
				let h = null,
					j = null;
				const y = [];
				try {
					(h = await Object(u.f)(l, f.a.FlairTemplates)) && (j = Object(u.m)(h)(s, o, c), y.push(...d()(h.imagesByKey)))
				} catch (P) {
					return !1
				}
				const g = await (async (t, e, n, s) => Object(b.a)(Object(E.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: _.hb.PUT,
						data: s
					}))(a(), A.name, e, C),
					N = R ? "edit_post_flair_template" : "save_post_flair_template",
					U = Object(m.e)(l, N);
				if (g.ok) {
					let t;
					if (j) try {
						await j, t = ((t, e, n) => {
							const s = {
								...t
							};
							return e.forEach(t => {
								const e = n.imageUploads[t.id];
								e && e.kind === f.b.Uploaded && (t.url === s.postBackgroundImage ? s.postBackgroundImage = e.url : t.url === s.postPlaceholderImage && (s.postPlaceholderImage = e.url))
							}), s
						})(C, y, o())
					} catch (P) {
						t = null
					} else t = C;
					s(D({
						flairId: e,
						template: t || C
					}))
				} else h && h.websocket.close();
				return Object(O.a)({
					...U,
					actionInfo: {
						...U.actionInfo,
						success: g.ok
					}
				}), g.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", A = Object(a.a)(C), R = (t, e) => async (n, s, {
				apiContext: r
			}) => {
				const o = s(),
					i = Object(S.T)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, n) => Object(b.a)(Object(E.a)(t, [p.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: _.hb.DELETE
					}))(r(), i.name, e),
					d = Object(m.e)(o, "delete_flair_template");
				return c.ok && n(A({
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
				b = Object(r.a)(o.p),
				E = Object(r.a)(o.o),
				p = Object(r.a)(o.n),
				m = t => async (e, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = _(t),
						m = Object(l.t)(r, {
							key: o
						}),
						f = Object(l.s)(r, {
							key: o
						});
					if (m || f.length > 0) return;
					e(b({
						key: o
					}));
					const S = await ((t, e) => Object(d.a)(Object(a.a)(t, [u.a]), {
						data: {
							sr_fullnames: e.subredditIds.join(","),
							limit: e.count,
							variant: e.variant
						},
						endpoint: `${t.apiUrl}/api/similar_subreddits.json`,
						method: c.hb.GET
					}))(s(), t);
					if (S.ok) {
						const t = Object(i.b)(S.body);
						e(E({
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
				return z
			})), n.d(e, "a", (function() {
				return Q
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/googleQASchema/constants.ts");
			const c = Object(r.a)(i.b),
				d = Object(r.a)(i.a);
			var a = n("./src/reddit/actions/linkedPosts/constants.ts");
			const u = Object(r.a)(a.a),
				l = Object(r.a)(a.c),
				_ = Object(r.a)(a.b);
			var b = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				p = (n("./src/redditGQL/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				m = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = n("./src/reddit/models/Post/index.ts");
			var T = ({
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
									const n = Object(m.e)(t);
									e.posts[n.id] = n;
									const {
										crosspostRoot: s
									} = t;
									if (s && s.type === O.a.Post && s.postInfo) {
										const t = Object(m.e)(s.postInfo);
										e.posts[t.id] = t
									}
									return Object(O.l)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(f.a)(t.profile)) : Object(O.m)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(S.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(p.a)(t.subreddit))), n.id
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
			const I = Object(r.a)(b.a),
				D = Object(r.a)(b.b),
				L = Object(r.a)(b.c);
			var C = n("./src/reddit/actions/subreddit/constants.ts"),
				A = n("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json"),
				R = (n("./src/redditGQL/operations/SubredditPosts.json"), n("./src/redditGQL/operations/SubredditsPosts.json"));
			var h = ({
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
				j = n("./src/lib/makeLinkedPostsListingKey/index.ts");
			var y = ({
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
							a = Object(j.a)(s),
							u = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of u) {
							if (!t || !t.id) break;
							if (n.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(m.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(S.a)(e)
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
				g = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var N = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var U = ({
					isLinkedPostsFallback: t,
					getState: e,
					onSuccess: n,
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
									edges: n
								} = t, s = n.filter(t => (t => !t.node.crosspostRoot)(t) && ((t, e) => !e.hasOwnProperty(t.node.id))(t, e));
								return {
									...t,
									edges: s
								}
							})(r, a.posts && a.posts.models),
							l = Object(g.a)(u),
							_ = N(l),
							b = r.edges.reduce((t, e) => (e.node.id && e.node.id !== c && t.push(e.node.id), t), []),
							{
								range: E,
								sort: p,
								subredditName: m
							} = i,
							f = t && c ? Object(j.a)(c, !0) : Object(o.a)(m, s.U[p], {
								t: E
							});
						n({
							dist: r.dist,
							key: f,
							meta: a.meta,
							postIds: b,
							posts: _
						})
					} catch (a) {
						r(a)
					}
				},
				P = n("./src/reddit/models/Media/index.ts"),
				k = n("./src/reddit/selectors/experiments/listingBelow.ts"),
				F = n("./src/reddit/selectors/posts.ts"),
				x = n("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var M = ({
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
						if (!r || !r.nsfwLinked) return;
						const c = t(),
							d = c.posts && c.posts.models,
							a = Object(x.a)(s),
							u = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of u) {
							if (!t || !t.id) break;
							if (n.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(m.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.m)(t)) {
								const {
									subreddit: e
								} = t;
								i[e.id] = Object(S.a)(e)
							}
						}
						e({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
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
				v = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const w = Object(r.a)(v.b),
				G = Object(r.a)(v.a);
			var B = n("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Y = Object(r.a)(B.b),
				q = Object(r.a)(B.a),
				K = Object(r.a)(C.j),
				V = Object(r.a)(C.i),
				H = Object(r.a)(C.r),
				W = Object(r.a)(C.q),
				z = t => async (e, n, {
					gqlContext: s
				}) => {
					const r = (await ((t, e) => Object(E.a)(t, {
							...R,
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
							e && Object(O.m)(e.node) && U({
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
						e(H(c))
					} catch (d) {
						e(W(d))
					}
				}, Q = t => async (e, n, {
					gqlContext: r
				}) => {
					var i, a, b, p;
					const {
						includeNSFWListingBelowExperiment: m,
						includeListingBelowExperiment: f,
						includeOtherDiscussions: S,
						includePostFeed: O,
						includePostQASchemaEligibilityFlag: C,
						listingBelowExperimentVariant: R,
						postId: j,
						range: g,
						sort: N,
						subredditName: x
					} = t, v = Object(o.a)(j, null, {
						isOtherDiscussions: !0
					}), B = n(), H = Object(F.B)(B, {
						listingKey: v
					}), W = S && (!H || 0 === H.length), z = Object(o.a)(x, s.U[N], {
						t: g
					}), Q = Object(F.B)(B, {
						listingKey: z
					}), $ = O && (f || !Q || 0 === Q.length), X = f, J = m, Z = Object(F.I)(B, {
						postId: j
					}), tt = !!Z && !!Z.media && (Object(P.I)(Z.media) || Object(P.F)(Z.media)) && !Z.media.altText;
					if (!(W || $ || X || J || tt || C)) return;
					W && e(L({
						key: v
					}));
					const et = await ((t, e) => Object(E.a)(t, {
							...A,
							variables: e
						}))(r(), t),
						nt = et.body,
						st = Object(k.a)(R),
						rt = X && !!(null === (b = null === (a = null === (i = nt.data) || void 0 === i ? void 0 : i.post) || void 0 === a ? void 0 : a.linked) || void 0 === b ? void 0 : b.isEligible),
						ot = X && (st || !rt);
					C && (et.ok ? nt.data && nt.data.post && e(c({
						postId: j,
						isEligibleForQASchema: null !== (p = nt.data.post.isEligibleForQASchema) && void 0 !== p && p
					})) : e(d())), W && T({
						getState: n,
						onFailure: t => e(I(t)),
						onSuccess: t => e(D(t)),
						postId: j,
						response: et
					}), ($ && !X || ot) && (et.ok ? nt.data && U({
						getState: n,
						isLinkedPostsFallback: ot,
						onFailure: t => e(V(t)),
						onSuccess: t => e(K(t)),
						options: t,
						postId: j,
						subreddit: nt.data.subreddit
					}) : e(V(et.error))), X && rt && !st && et.ok && nt.data && y({
						getState: n,
						onFailure: t => e(_(t)),
						onSuccess: t => e(l(t)),
						postId: j,
						post: nt.data.post
					}), J && et.ok && M({
						getState: n,
						onFailure: t => e(q(t)),
						onSuccess: t => e(Y(t)),
						postId: j,
						post: nt.data.post
					}), tt && et.ok && nt.data && h({
						getState: n,
						onFailure: t => e(G(t)),
						onSuccess: t => e(w(t)),
						postId: j,
						post: nt.data.post
					}), X && e(u({
						postId: j,
						isEligibleForLinkedPosts: rt
					}))
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
				return b
			})), n.d(e, "f", (function() {
				return E
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
				return T
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
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				m = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function a(t) {
				const e = new Date(t.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: t.className
				}, e ? d._("Voting closed {timeAgo}", [d._param("timeAgo", c.a.createElement(r.d, {
					seconds: t.poll.endsAt / s.Ob
				}))], {
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
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				E = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				S = n("./src/reddit/helpers/path/index.ts"),
				O = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				T = n("./src/reddit/icons/fonts/index.tsx"),
				I = n("./src/reddit/models/Flair/index.ts"),
				D = n("./src/reddit/models/Media/index.ts"),
				L = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/lib/getShortenedLink.ts"),
				A = n("./src/reddit/components/FlairWrapper/index.tsx"),
				R = n("./node_modules/fbt/lib/FbtPublic.js"),
				h = n("./src/lib/prettyPrintNumber/index.ts"),
				j = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				y = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				g = n.n(y);
			const N = Object(d.c)({
				poll: (t, e) => t.polls.models[e.pollId],
				resultsByVoters: (t, e) => t.polls.results.byVoters[e.pollId]
			});
			var U, P = Object(i.b)(N)((function(t) {
					const {
						poll: e,
						resultsByVoters: n
					} = t, s = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(t.className, g.a.proposalMetaData)
					}, o.a.createElement("span", null, R.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [R.fbt._param("count", Object(h.a)(s)), R.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), e && o.a.createElement(j.a, {
						className: g.a.proposalExpiry,
						poll: e
					}))
				})),
				k = n("./src/reddit/components/SEOTitle/index.tsx"),
				F = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/components/PostTitle/index.m.less"),
				M = n.n(x),
				v = n("./src/config.ts"),
				w = n("./src/reddit/hooks/useClickSourceData.ts"),
				G = n("./src/reddit/hooks/useExperimentVariant.ts"),
				B = n("./src/reddit/hooks/usePostContext.ts"),
				Y = n("./src/reddit/hooks/useTheme.ts"),
				q = n("./src/telemetry/models/Outbound.ts");

			function K() {
				return (K = Object.assign || function(t) {
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
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Title, i, a, {
							[M.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": e || Object(L.a)({
								redditStyle: c,
								theme: d
							}).titleText
						}
					}, n ? o.a.createElement(k.b, {
						type: n
					}, r) : r)
				},
				H = ({
					className: t,
					disableVisited: e,
					titleColor: n,
					children: s,
					...r
				}) => o.a.createElement(c.a, K({}, r, {
					className: Object(u.a)(t, M.a.styledLink, {
						[M.a.isVisitedEnabled]: !e
					})
				}), s),
				W = ({
					disableVisited: t,
					nowrap: e,
					className: n,
					children: s
				}) => o.a.createElement("div", {
					className: Object(u.a)(M.a.titleContainer, n, {
						[M.a.isNoWrap]: e,
						[M.a.isVisitedEnabled]: !t
					})
				}, s),
				z = Object(d.c)({
					flairPosition: (t, {
						pageLayer: e
					}) => Object(b.q)(t, {
						pageLayer: e
					}),
					shouldOpenPostInNewTab: F.cb
				}),
				Q = t => {
					const {
						post: e,
						subreddit: n
					} = t, {
						isSponsored: s
					} = e, r = Object(w.a)(), i = Object(G.a)(_.rc) === _.vc.Enabled;
					if (t.isCommentsPage && !t.isCommentPermalink && !t.shouldLinkWrap) return o.a.createElement(W, {
						nowrap: t.nowrap
					}, o.a.createElement($, t));
					if (t.isCommentsPageAd && e.source && e.source.url) return o.a.createElement(E.b, {
						href: e.source.url,
						isSponsored: s,
						postId: e.id,
						source: e.source
					}, o.a.createElement($, t)); {
						const c = e.media && Object(D.G)(e.media) ? Object(O.c)(e.id, n.name) : e.permalink,
							d = t.isCommentPermalink ? Object(S.b)(c) : i ? Object(m.a)(c, void 0, r) : Object(m.a)(c);
						return o.a.createElement(W, {
							disableVisited: t.disableVisited,
							nowrap: t.nowrap
						}, s ? ((t, e) => {
							const {
								source: n
							} = Object(a.t)(t, e.imageGalleryCurrentItem);
							return n ? o.a.createElement(E.b, {
								href: n.url,
								isSponsored: t.isSponsored,
								postId: t.id,
								source: n
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
						isCommentsPageAd: n,
						post: s
					} = t;
					let r = t.format ? t.format(s) : s.title;
					n && "string" == typeof r && (r = (t => {
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
					}, e && o.a.createElement(A.a, {
						titleFlair: e,
						nowrap: !0,
						post: s,
						sendEvent: t.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				X = t => {
					const {
						hideSourceLink: e,
						post: n
					} = t, {
						isSponsored: s
					} = n, r = t.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink, i = !e && !t.isCrosspost && t.size !== U.Large && !n.isSponsored && !(n.media && Object(D.G)(n.media)) && (n.source || n.media && (n.media.type === D.o.GIFVIDEO || n.media.type === D.o.IMAGE || n.media.type === D.o.EMBED));
					if (e || !t.isCommentsPage || t.isCommentPermalink || t.shouldLinkWrap) {
						if (i) return o.a.createElement(p.a, {
							className: t.outboundLinkClassName,
							href: Object(D.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(C.a)(n), !n.isSponsored && o.a.createElement(T.a, {
							name: "external_link",
							className: M.a.outboundLinkIcon
						}))
					} else if (n.source && !t.isCrosspost && t.size !== U.Large && t.size !== U.ExtraLarge) return o.a.createElement(p.a, {
						className: t.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(C.a)(n), !n.isSponsored && o.a.createElement(T.a, {
						name: "external_link",
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class J extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(L.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(L.a)(this.props).titleText,Object(L.a)(this.props).body)};\n        }\n      `
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
					} = this.props, a = n === I.b.Left, l = Object(A.b)(c), _ = d ? l.filter(t => t.type === I.f.Nsfw || t.type === I.f.Spoiler) : a ? l.filter(t => Object(f.q)(t.type)) : [], b = d ? [] : a ? l.filter(t => !Object(f.q)(t.type)) : l, E = !r && !s, p = !e && _ && _.length > 0 && E, m = !e && b && b.length > 0 && E;
					return o.a.createElement("div", {
						className: Object(u.a)(M.a.Component, t, c.id)
					}, !d && p && o.a.createElement(A.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(Q, K({}, this.props, {
						leftFlair: d ? _ : void 0
					})), i && o.a.createElement(P, {
						className: M.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(X, this.props), m && o.a.createElement(A.a, {
						isFlairFilter: !0,
						titleFlair: b,
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
				const e = Object(b.db)(),
					n = Object(b.w)(e),
					s = Object(B.a)(),
					r = Object(i.e)(r => z(r, {
						...s,
						...t,
						isCommentPermalink: n,
						pageLayer: e
					})),
					c = Object(Y.a)(),
					d = Object(l.b)();
				return o.a.createElement(J, K({
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
		"./src/reddit/helpers/canRenderThumbnail.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				r = n("./src/reddit/models/Media/index.ts");

			function o(t) {
				return !(!t.thumbnail || !t.thumbnail.url || t.thumbnail.url === s.a.SELF || t.thumbnail.url === s.a.NSFW || t.media && Object(r.E)(t.media))
			}
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
							case s.G.NO_STRIPE_SUBSCRIPTION:
							case s.G.USER_DOESNT_EXIST:
							case s.G.USER_REQUIRED_ERROR:
							case s.G.VALIDATION_ERROR:
								return t;
							case s.G.NO_USER:
							case s.G.NO_TEXT:
							case s.G.NO_URL:
								return s.G.VALIDATION_ERROR;
							case s.G.CREDIT_CARD_FAILURE:
							case s.G.CREDIT_CARD_FAILURE_GENERIC:
								return s.G.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return s.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.G.VALIDATION_ERROR
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
				return L
			})), n.d(e, "E", (function() {
				return C
			})), n.d(e, "F", (function() {
				return A
			})), n.d(e, "M", (function() {
				return h
			})), n.d(e, "B", (function() {
				return j
			})), n.d(e, "C", (function() {
				return y
			})), n.d(e, "D", (function() {
				return g
			})), n.d(e, "i", (function() {
				return N
			})), n.d(e, "w", (function() {
				return U
			})), n.d(e, "x", (function() {
				return P
			})), n.d(e, "L", (function() {
				return k
			})), n.d(e, "K", (function() {
				return F
			})), n.d(e, "I", (function() {
				return x
			})), n.d(e, "v", (function() {
				return M
			})), n.d(e, "y", (function() {
				return v
			})), n.d(e, "z", (function() {
				return w
			})), n.d(e, "A", (function() {
				return G
			})), n.d(e, "N", (function() {
				return B
			})), n.d(e, "J", (function() {
				return Y
			})), n.d(e, "t", (function() {
				return q
			})), n.d(e, "H", (function() {
				return K
			})), n.d(e, "d", (function() {
				return V
			})), n.d(e, "c", (function() {
				return H
			})), n.d(e, "b", (function() {
				return W
			})), n.d(e, "f", (function() {
				return z
			})), n.d(e, "e", (function() {
				return Q
			})), n.d(e, "s", (function() {
				return J
			})), n.d(e, "m", (function() {
				return Z
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
				b = n("./src/reddit/selectors/widgets.ts"),
				E = n("./src/telemetry/index.ts");
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
					Object(E.a)(O(e)(t))
				},
				O = (t, e) => n => f(n, t, e),
				T = (t, e, n, s) => "unitName" in e ? m(t, e, s) : ((t, e, n) => ({
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
				I = (t, e, n, r, o) => ({
					...T(t, e, r, o),
					action: "view",
					noun: s.ITEM_POST,
					post: _.post(t, n)
				}),
				D = ({
					post: t,
					rawQuery: e,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? _.StructureType.PromotedTrend : _.StructureType.Trending
				});
			var L;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(L || (L = {}));
			const C = (t, e, n) => {
					Object(E.a)(R(t, e, n, i.c.CLICK))
				},
				A = (t, e, n) => {
					Object(E.a)(R(t, e, n, i.c.VIEW))
				},
				R = (t, e, n, s) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						..._.defaults(t),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: D(e),
						discoveryUnit: n === L.POPULAR_CAROUSEL ? {
							name: a.m,
							id: a.m,
							title: a.m,
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
				h = (t, e, n, s, r, o, c) => {
					Object(E.a)({
						..._.defaults(t),
						...Object(d.f)(t, n, s, r, o, e),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				j = (t, e, n, s) => {
					Object(E.a)(I(t, e, n, s))
				},
				y = (t, e, n, s) => r => I(r, t, e, n, s),
				g = (t, e, n, r) => {
					const o = T(t, e, r);
					Object(E.a)({
						...o,
						...Object(b.b)(t, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
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
				U = (t, e, n, s) => {
					Object(E.a)(P(e, n, s)(t))
				},
				P = (t, e, n, r) => o => {
					return {
						...T(o, t, n, r),
						source: p,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: _.post(o, e)
					}
				},
				k = (t, e, n, s) => r => o => Object(d.f)(o, r, t, e, n, s),
				F = (t, e, n, s) => r => o => Object(d.e)(o, t, e, void 0, n, r, s),
				x = (t, e, n, s) => r => o => ({
					...Object(d.f)(o, r, t, e, n, s),
					noun: "ad"
				}),
				M = (t, e) => n => r => ({
					...t ? m(r, t, e) : {},
					source: p,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: _.post(r, n)
				}),
				v = (t, e, n, s) => {
					Object(E.a)(w(e, n, s)(t))
				},
				w = (t, e, n, s) => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(b.b)(r, o) : void 0;
					return {
						...T(r, t, n, s),
						...c,
						source: p,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: _.post(r, e)
					}
				},
				G = (t, e, n) => s => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(b.b)(r, o) : void 0;
					return {
						...T(r, t, void 0, n),
						...c,
						source: p,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: _.post(r, e)
					}
				},
				B = (t, e, n) => {
					const s = T(t, e);
					Object(E.a)({
						...s,
						...Object(b.b)(t, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				Y = (t, e, n, s, r, o) => {
					Object(E.a)({
						..._.defaults(t),
						...Object(d.e)(t, e, n, s, r, void 0, o)
					})
				},
				q = (t, e, n) => {
					const s = T(t, e);
					Object(E.a)({
						...s,
						...Object(b.b)(t, n),
						source: p,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (t, e) => n => {
					const s = Object(u.j)(e);
					return {
						...m(n, t, e),
						...Object(b.b)(n, s),
						source: p,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (t, e) => n => ({
					...m(n, t, e),
					action: "status",
					actionInfo: _.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				H = (t, e, n) => s => ({
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
					...T(s, t, e, n),
					action: "click",
					noun: "scroll"
				}),
				Q = (t, e) => n => ({
					...m(n, t, e),
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
				X = (t, e, n) => _.actionInfo(t, {
					position: n
				}),
				J = (t, e, n) => {
					const s = $();
					return t => ({
						...f(t, s),
						actionInfo: X(t, 0, n),
						subreddit: _.subredditById(t, e)
					})
				},
				Z = (t, e, n) => {
					const s = $();
					return t => ({
						...I(t, s, e),
						actionInfo: X(t, 0, n)
					})
				},
				tt = (t, e, n) => {
					const r = $();
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
					const r = $();
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
					const o = $();
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
					const r = $();
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
					const o = $();
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
					const o = $();
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
					const r = $();
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
					const r = $();
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
					...e && Object(b.b)(n, e),
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
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(t, e, n) {
			"use strict";
			n.d(e, "i", (function() {
				return c
			})), n.d(e, "y", (function() {
				return d
			})), n.d(e, "m", (function() {
				return a
			})), n.d(e, "p", (function() {
				return u
			})), n.d(e, "q", (function() {
				return l
			})), n.d(e, "b", (function() {
				return _
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "o", (function() {
				return E
			})), n.d(e, "r", (function() {
				return p
			})), n.d(e, "k", (function() {
				return m
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "n", (function() {
				return O
			})), n.d(e, "h", (function() {
				return T
			})), n.d(e, "g", (function() {
				return D
			})), n.d(e, "l", (function() {
				return L
			})), n.d(e, "t", (function() {
				return C
			})), n.d(e, "j", (function() {
				return A
			})), n.d(e, "e", (function() {
				return R
			})), n.d(e, "x", (function() {
				return h
			})), n.d(e, "u", (function() {
				return j
			})), n.d(e, "a", (function() {
				return y
			})), n.d(e, "s", (function() {
				return g
			})), n.d(e, "v", (function() {
				return N
			})), n.d(e, "w", (function() {
				return U
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = t => ({
					...r.defaults(t),
					screen: r.screen(t),
					subreddit: r.subreddit(t),
					userSubreddit: r.userSubreddit(t)
				}),
				i = t => ({
					id: t.id,
					publishAt: t.publishAt,
					clientTimezone: t.clientTimezone,
					isRecurring: Object(s.p)(t)
				}),
				c = () => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(t)
				}),
				d = () => t => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(t)
				}),
				a = () => t => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(t)
				}),
				u = () => t => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(t)
				}),
				l = () => t => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(t)
				}),
				_ = () => t => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(t)
				}),
				b = () => t => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(t)
				}),
				E = t => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(e),
					scheduledPost: i(t)
				}),
				p = t => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(e),
					scheduledPost: i(t)
				}),
				m = () => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(t)
				}),
				f = () => t => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(t)
				}),
				S = () => t => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(t)
				}),
				O = () => t => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(t)
				}),
				T = t => e => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(e),
					actionInfo: r.actionInfo(e, {
						pageType: t ? "recurring_posts" : "scheduled_posts"
					})
				}),
				I = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				D = t => e => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === t ? "one_time_frequency" : I[t],
					...o(e)
				}),
				L = () => t => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(t)
				}),
				C = (t, e, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(t),
					...o(i),
					actionInfo: r.actionInfo(i, {
						settingValue: e ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
					})
				}),
				A = () => t => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(t)
				}),
				R = () => t => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(t)
				}),
				h = () => t => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(t)
				}),
				j = () => (t, e) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(t),
					scheduledPost: i(e)
				}),
				y = () => t => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(t)
				}),
				g = () => (t, e) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(t),
					scheduledPost: i(e)
				}),
				N = () => t => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(t)
				}),
				U = () => (t, e) => {
					const n = o(t);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(e)
					}
				}
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
				return b
			})), n.d(e, "c", (function() {
				return p
			})), n.d(e, "q", (function() {
				return f
			})), n.d(e, "k", (function() {
				return S
			})), n.d(e, "j", (function() {
				return O
			})), n.d(e, "h", (function() {
				return T
			})), n.d(e, "i", (function() {
				return I
			})), n.d(e, "d", (function() {
				return D
			})), n.d(e, "m", (function() {
				return L
			})), n.d(e, "b", (function() {
				return C
			})), n.d(e, "l", (function() {
				return A
			})), n.d(e, "p", (function() {
				return R
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
			var b, E, p, m;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(b || (b = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(E || (E = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(p || (p = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(m || (m = {}));
			const f = t => E[m[t]],
				S = t => m[E[t]],
				O = t => p[E[t]],
				T = t => E[p[t]],
				I = t => m[p[t]];
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
							return Object(s.a)(t)
					}
				},
				R = t => "frequency" in t && !!t.frequency
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

			function b(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === r.a).map(_).sort((t, n) => {
					const s = e[t.id],
						r = e[n.id];
					return Object(i.b)(s, r)
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
						[d.a.Loyalty]: b(e[d.a.Loyalty], t.collections),
						[d.a.Achievement]: b(e[d.a.Achievement], t.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: b(e[d.a.Cosmetic][d.c.Gallery], t.collections),
							[d.c.MyBadges]: b(e[d.a.Cosmetic][d.c.MyBadges], t.collections)
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
								data: E(n),
								status: s.Fetched
							}
						}
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return b
			})), n.d(e, "c", (function() {
				return E
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
				b = (t, e) => {
					const n = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === n
				},
				E = (t, e) => {
					const n = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === n
				},
				p = Object(s.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				m = (t, {
					subredditId: e
				}) => {
					return p(t).some(n => {
						const s = Object(u.V)(t, {
							postId: n
						});
						return !!s && s.id === e
					})
				},
				f = (t, {
					subredditName: e
				}) => {
					const n = r.cc.DAY.toUpperCase(),
						s = Object(o.a)(e, r.U.TOP, {
							t: n
						}),
						i = Object(u.B)(t, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const e = Object(u.I)(t, {
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
							const n = Object(u.I)(t, {
								postId: e
							});
							if (!n) return _;
							const s = Object(i.a)({
								subredditIds: [n.belongsTo.id],
								count: c.b
							});
							return Object(l.u)(t, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-MediumPost.411eae175a94b5ffd88f.js.map