// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.996e3cff7736b7347ff5.js
// Retrieved at 3/15/2021, 4:30:04 PM by Reddit Dataminer v1.0.0
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
			t.exports = JSON.parse('{"id":"00d537d082f7"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(t) {
			t.exports = JSON.parse('{"id":"a752c721a60b"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"8dfeb66985eb"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(t) {
			t.exports = JSON.parse('{"id":"8f930296d14d"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(t) {
			t.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/constants/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/makeCommentPermalink/index.ts": function(t, e, n) {
			"use strict";
			var s = n("./src/lib/redditId/index.ts");
			e.a = (t, e) => {
				let n = t;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(s.c)(e)
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(t, e, n) {
			"use strict";
			e.a = t => {
				return `linkedPosts--[post:'${t}']`
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
				return y
			})), n.d(e, "c", (function() {
				return j
			})), n.d(e, "a", (function() {
				return D
			})), n.d(e, "e", (function() {
				return L
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
				m = n("./src/reddit/constants/inFeedChaining.ts"),
				b = n("./src/reddit/constants/page.ts"),
				f = n("./src/reddit/helpers/localStorage/index.ts"),
				_ = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				p = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/inFeedChaining.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts");
			const I = "FEED_CHAINING__CHAIN_LOADED",
				T = Object(i.a)(I),
				C = t => {
					const e = Date.now() - t,
						n = Object(f.y)();
					return Object.keys(n).filter(t => n[t].when >= e).map(t => n[t])
				},
				y = ({
					listingName: t,
					listingKey: e,
					postId: n
				}) => async (s, i, l) => {
					if (!n) return;
					const p = Object(S.P)(i(), {
						postId: n
					});
					if (!p) return;
					const I = p.name.toLowerCase(),
						y = t === I;
					if (!(t === b.f || t === b.b || y)) return;
					if (y) return void A(p, e, n)(s, i, l);
					0 === C(o.hb).length && Object(f.pb)(!1);
					let j = i();
					if (Object(E.d)(j, {
							listingKey: e,
							postId: n
						}) || Object(E.a)(j).length >= m.a || Object(f.K)() || C(o.x).length >= m.a) return;
					const D = Object(S.t)(j, {
						listingKey: e,
						postId: n
					});
					if (D && D.isSponsored) return;
					await s(Object(d.g)()), j = i();
					const h = Object(E.b)(j, {
						listingName: t
					});
					if (!h) return;
					if (!p || Object(E.e)(j, {
							subredditId: p.id
						}) || (t => {
							return C(o.x).some(e => e.subredditId === t)
						})(p.id)) return;
					const L = {
						subredditIds: [p.id],
						count: m.b
					};
					await s(Object(a.b)(L));
					const R = Object(a.a)(L);
					j = i();
					const g = Object(O.v)(j, {
						key: R
					});
					0 !== g.length ? (await s((t => async (e, n) => {
						const s = o.Ub.DAY.toUpperCase(),
							r = t.filter(t => {
								const e = Object(c.a)(t, o.P.TOP, {
										t: s
									}),
									r = n();
								return 0 === Object(S.w)(r, {
									listingKey: e
								}).length
							});
						await e(Object(u.b)({
							first: 1,
							range: s,
							sort: o.I.TOP,
							subredditNames: r
						}))
					})(g.map(t => t.name))), j = i(), Object(E.f)(j, {
						postId: n
					}).length < m.c ? Object(r.a)(Object(_.c)(h, "other", p)(j)) : (Object(f.a)(n, p.id), Object(r.a)(Object(_.d)(h, p)(j)), s(T({
						listingKey: e,
						postId: n
					})))) : Object(r.a)(Object(_.c)(h, "no_chaining", p)(j))
				}, j = "FEED_CHAINING__CHAIN_TOGGLED", D = (Object(i.a)(j), "FEED_CHAINING__CHAINING_TOGGLED"), h = Object(i.a)(D), L = () => async t => {
					Object(f.pb)(!0), t(h({
						isDismissed: !0
					})), t(Object(l.f)(Object(l.e)(s.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), p.b.Undo, s.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(f.pb)(!1), t(h({
							isDismissed: !1
						}))
					})))
				}, A = (t, e, n) => async (t, e, n) => {}
		},
		"./src/reddit/actions/jsApi.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return o
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(s.a)(r)
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
				return m
			})), n.d(e, "n", (function() {
				return b
			})), n.d(e, "l", (function() {
				return f
			})), n.d(e, "m", (function() {
				return _
			})), n.d(e, "k", (function() {
				return p
			})), n.d(e, "i", (function() {
				return E
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
				m = "UPDATE_COLLECTION_SUCCESS",
				b = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				_ = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				p = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				E = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				I = "UPDATE_COLLECTION_LAYOUT_PENDING",
				T = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return f
			})), n.d(e, "a", (function() {
				return S
			})), n.d(e, "f", (function() {
				return C
			})), n.d(e, "b", (function() {
				return h
			})), n.d(e, "e", (function() {
				return g
			})), n.d(e, "d", (function() {
				return U
			})), n.d(e, "l", (function() {
				return F
			})), n.d(e, "k", (function() {
				return v
			})), n.d(e, "j", (function() {
				return M
			})), n.d(e, "g", (function() {
				return x
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
				m = n("./src/reddit/selectors/postFlair.ts"),
				b = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				_ = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				p = Object(r.a)(f),
				E = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				I = Object(r.a)(S),
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				y = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				j = Object(r.a)(C),
				D = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				L = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				A = Object(r.a)(h),
				R = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				U = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(r.a)(g),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(r.a)(U),
				F = (t, e) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(b.T)(o, {
							subredditId: t
						}).name;
					n(_());
					const c = await Object(d.k)(r(), i, e);
					if (c.ok) {
						n(p({
							subredditId: t,
							isEnabled: e
						}))
					} else n(E());
					return c.ok
				}, v = (t, e) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						i = Object(b.T)(o, {
							subredditId: t
						}).name;
					n(O());
					const c = await Object(d.j)(r(), e, u.d.LinkFlair, i);
					if (c.ok) {
						n(I({
							subredditId: t,
							canAssignOwn: e
						}))
					} else n(T());
					return c.ok
				}, M = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const a = r(),
						m = Object(b.T)(a, {
							subredditId: e
						}).name;
					n(y());
					const f = await Object(d.f)(o(), t, m, u.d.LinkFlair);
					let _ = f.ok && !(f.body && !1 === f.body.success);
					if (_) {
						const s = f.body;
						if (n(j({
								subredditId: e,
								template: s
							})), s.id) {
							const r = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[s.id];
							r ? _ = await n(Object(i.d)(e, s.id, r)) : o && (_ = await n(Object(i.c)(e, s.id)))
						}
					}
					if (_) {
						const t = Object(c.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(c.f)(t))
					} else {
						n(D());
						const r = Object(c.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(t, e));
						n(Object(c.f)(r))
					}
					return _
				}, x = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(b.T)(i, {
							subredditId: e
						}).name;
					if (n(L()), (await Object(d.b)(o(), t, a)).ok) {
						n(A({
							subredditId: e,
							templateId: t
						}));
						const r = Object(c.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(c.f)(r))
					} else {
						n(R());
						const r = Object(c.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), x(t, e));
						n(Object(c.f)(r))
					}
				}, w = (t, e) => async (n, r, {
					apiContext: o
				}) => {
					const i = r(),
						a = Object(m.d)(i, {
							subredditId: e
						}).templateIds,
						f = Object(b.T)(i, {
							subredditId: e
						}).name;
					if (n(P({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), f, u.d.LinkFlair, t)).ok) {
						n(N());
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
					const c = t.flair.filter(t => !Object(a.p)(t.type));
					if (e && c.unshift(e), s(Object(o.L)({
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
				return T
			})), n.d(e, "d", (function() {
				return y
			})), n.d(e, "a", (function() {
				return j
			})), n.d(e, "c", (function() {
				return h
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
				m = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				_ = n("./src/reddit/constants/headers.ts");
			var p = n("./src/reddit/helpers/trackers/blade.ts"),
				E = n("./src/reddit/models/Image/index.tsx"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/telemetry/index.ts");
			const I = ({
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
				const a = await (async (t, e, n, s, r, o) => Object(b.a)(Object(f.a)(t, [_.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: o
					}
				}))(i.apiContext(), d.name, e, s.file.name, n, await Object(l.g)(s.file));
				let p = !1;
				try {
					const t = await Object(u.g)(o(), a, s, E.a.FlairTemplates);
					t && r(Object(u.j)(t)), p = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					r(Object(u.i)(O))
				}
				return p
			}, T = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(a.a)(T), y = (t, e, n) => async (s, o, c) => {
				const {
					apiContext: a
				} = c;
				let l = o();
				const {
					pendingImages: T,
					...y
				} = n;
				let j = y;
				const D = Object(S.T)(l, {
					subredditId: t
				});
				if (!D) return !1;
				const h = l.structuredStyles.flairTemplate.models[e];
				if (h && i()(h, j)) return !0;
				if (T) {
					const n = [];
					if (r()(T, (r, o) => {
							r && n.push(s(I({
								flairId: e,
								imageData: Object(E.m)(r),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(n)).every(t => t)) return !1;
					j = ((t, e, n) => {
						const s = {
							...t
						};
						return r()(e, (t, e) => {
							const r = t && n.imageUploads[t.id];
							r && r.kind === E.b.TempUploaded && (s[e] = r.url)
						}), s
					})(j, T, o())
				}
				l = o();
				let L = null,
					A = null;
				const R = [];
				try {
					(L = await Object(u.f)(l, E.a.FlairTemplates)) && (A = Object(u.m)(L)(s, o, c), R.push(...d()(L.imagesByKey)))
				} catch (N) {
					return !1
				}
				const g = await (async (t, e, n, s) => Object(b.a)(Object(f.a)(t, [_.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: s
					}))(a(), D.name, e, j),
					U = h ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(p.e)(l, U);
				if (g.ok) {
					let t;
					if (A) try {
						await A, t = ((t, e, n) => {
							const s = {
								...t
							};
							return e.forEach(t => {
								const e = n.imageUploads[t.id];
								e && e.kind === E.b.Uploaded && (t.url === s.postBackgroundImage ? s.postBackgroundImage = e.url : t.url === s.postPlaceholderImage && (s.postPlaceholderImage = e.url))
							}), s
						})(j, R, o())
					} catch (N) {
						t = null
					} else t = j;
					s(C({
						flairId: e,
						template: t || j
					}))
				} else L && L.websocket.close();
				return Object(O.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: g.ok
					}
				}), g.ok
			}, j = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", D = Object(a.a)(j), h = (t, e) => async (n, s, {
				apiContext: r
			}) => {
				const o = s(),
					i = Object(S.T)(o, {
						subredditId: t
					});
				if (!i) return !1;
				const c = await (async (t, e, n) => Object(b.a)(Object(f.a)(t, [_.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(r(), i.name, e),
					d = Object(p.e)(o, "delete_flair_template");
				return c.ok && n(D({
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
				return m
			})), n.d(e, "b", (function() {
				return p
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
			const m = t => {
					let e = t.subredditIds.join(",");
					return t.count && (e += `--[count:'${t.count}']`), t.variant && (e += `--[variant:'${t.variant}']`), e.toLowerCase()
				},
				b = Object(r.a)(o.q),
				f = Object(r.a)(o.p),
				_ = Object(r.a)(o.o),
				p = t => async (e, n, {
					apiContext: s
				}) => {
					const r = n(),
						o = m(t),
						p = Object(l.u)(r, {
							key: o
						}),
						E = Object(l.t)(r, {
							key: o
						});
					if (p || E.length > 0) return;
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
						method: c.cb.GET
					}))(s(), t);
					if (S.ok) {
						const t = Object(i.b)(S.body);
						e(f({
							key: o,
							...t
						}))
					} else {
						const t = S.error;
						e(_({
							key: o,
							error: t
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return B
			})), n.d(e, "a", (function() {
				return Y
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/googleQASchema/constants.ts");
			const d = Object(r.a)(c.b),
				a = Object(r.a)(c.a);
			var u = n("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(r.a)(u.b),
				m = Object(r.a)(u.a);
			var b = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				_ = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				p = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				E = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = n("./src/reddit/models/Post/index.ts");
			var I = ({
				getState: t,
				onFailure: e,
				onSuccess: n,
				postId: s,
				response: r
			}) => {
				if (!r.ok) return void e(r.error);
				const o = r.body,
					{
						post: c
					} = o && o.data,
					d = t(),
					a = Object(i.a)(s, null, {
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
									if (s && s.type === O.a.Post && s.postInfo) {
										const t = Object(p.e)(s.postInfo);
										e.posts[t.id] = t
									}
									return Object(O.k)(t) ? e.profiles[t.profile.id] || (e.profiles[t.profile.id] = Object(E.a)(t.profile)) : Object(O.l)(t) && (e.subreddits[t.subreddit.id] || (e.subreddits[t.subreddit.id] = Object(S.a)(t.subreddit)), e.postFlair[t.subreddit.id] || (e.postFlair[t.subreddit.id] = Object(_.a)(t.subreddit))), n.id
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
			const T = Object(r.a)(b.a),
				C = Object(r.a)(b.b),
				y = Object(r.a)(b.c);
			var j = n("./src/reddit/actions/subreddit/constants.ts"),
				D = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
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
			};
			var A = ({
					getState: t,
					onSuccess: e,
					onFailure: n,
					postId: s,
					post: r
				}) => {
					try {
						const n = [],
							i = {},
							c = {};
						if (!r || !r.linked) return;
						const d = t(),
							a = d.posts && d.posts.models,
							u = Object(o.a)(s),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t) break;
							if (t.id && !a.hasOwnProperty(t.id)) {
								n.push(t.id);
								const e = Object(p.a)(t);
								i[t.id] = e.post, e.crosspost && (i[e.crosspost.id] = e.crosspost)
							}
							if (Object(O.l)(t)) {
								const {
									subreddit: e
								} = t;
								c[e.id] = Object(S.a)(e)
							}
						}
						e({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: u,
							meta: d.meta,
							posts: i,
							postIds: n,
							subreddits: c
						})
					} catch (i) {
						n(i)
					}
				},
				R = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var g = t => t.reduce((t, e) => (t[e.id] = e, t), {});
			var U = ({
					getState: t,
					onSuccess: e,
					onFailure: n,
					options: r,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const n = o.elements || o.posts,
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
								subredditName: m
							} = r,
							b = Object(i.a)(m, s.P[l], {
								t: u
							}),
							f = g(a),
							_ = a.map(t => t.id);
						e({
							dist: n.dist,
							key: b,
							meta: c.meta,
							postIds: _,
							posts: f
						})
					} catch (c) {
						n(c)
					}
				},
				P = n("./src/reddit/models/Media/index.ts"),
				N = n("./src/reddit/selectors/posts.ts"),
				k = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const F = Object(r.a)(k.b),
				v = Object(r.a)(k.a),
				M = Object(r.a)(j.k),
				x = Object(r.a)(j.j),
				w = Object(r.a)(j.s),
				G = Object(r.a)(j.r),
				B = t => async (e, n, {
					gqlContext: s
				}) => {
					const r = (await ((t, e) => Object(f.a)(t, {
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
							e && Object(O.l)(e.node) && U({
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
						e(G(d))
					}
				}, Y = t => async (e, n, {
					gqlContext: r
				}) => {
					var c;
					const {
						includePostImageOCRAltText: u,
						includeListingBelowExperiment: b,
						includeOtherDiscussions: _,
						includePostFeed: p,
						includePostQASchemaEligibilityFlag: E,
						postId: S,
						range: O,
						sort: j,
						subredditName: h
					} = t, R = Object(i.a)(S, null, {
						isOtherDiscussions: !0
					}), g = n(), k = Object(N.w)(g, {
						listingKey: R
					}), w = _ && (!k || 0 === k.length), G = Object(i.a)(h, s.P[j], {
						t: O
					}), B = Object(N.w)(g, {
						listingKey: G
					}), Y = p && (!B || 0 === B.length), K = Object(o.a)(S), q = Object(N.w)(g, {
						listingKey: K
					}), H = b && (!q || 0 === q.length), W = Object(N.D)(g, {
						postId: S
					}), V = u && !!W && !!W.media && (Object(P.H)(W.media) || Object(P.F)(W.media)) && !W.media.altText;
					if (!(w || Y || H || V || E)) return;
					w && e(y({
						key: R
					}));
					const $ = await ((t, e) => Object(f.a)(t, {
							...D,
							variables: e
						}))(r(), t),
						z = $.body;
					E && ($.ok ? z.data && z.data.post && e(d({
						postId: S,
						isEligibleForQASchema: null !== (c = z.data.post.isEligibleForQASchema) && void 0 !== c && c
					})) : e(a())), w && I({
						getState: n,
						onFailure: t => e(T(t)),
						onSuccess: t => e(C(t)),
						postId: S,
						response: $
					}), Y && ($.ok ? z.data && U({
						getState: n,
						onFailure: t => e(x(t)),
						onSuccess: t => e(M(t)),
						options: t,
						subreddit: z.data.subreddit
					}) : e(x($.error))), H && $.ok && A({
						getState: n,
						onFailure: t => e(m(t)),
						onSuccess: t => e(l(t)),
						postId: S,
						post: z.data.post
					}), V && $.ok && L({
						getState: n,
						onFailure: t => e(v(t)),
						onSuccess: t => e(F(t)),
						postId: S,
						post: z.data.post
					})
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return s
			})), n.d(e, "c", (function() {
				return r
			})), n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return i
			})), n.d(e, "i", (function() {
				return c
			})), n.d(e, "g", (function() {
				return d
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return l
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return N
			})), n.d(e, "d", (function() {
				return F
			})), n.d(e, "c", (function() {
				return M
			})), n.d(e, "a", (function() {
				return w
			})), n.d(e, "b", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var _ = n("./src/graphql/operations/SubscribedSubreddits.json"),
				p = n("./src/lib/makeGqlRequest/index.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var S = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = n("./src/reddit/models/GqlTopLevelField.ts"),
				T = n("./src/reddit/models/User/index.ts");

			function C(t) {
				const e = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: o
					} = t.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== T.c.AvailableRedditor) continue;
					const t = Object(S.a)(c.node.profile);
					s[t.id] = t;
					const {
						isFavorite: n
					} = c.node.profile;
					n && e.push(t.id)
				}
				const {
					subscribedSubreddits: i
				} = t.identity;
				for (const c of i.edges) {
					if (c.node.__typename !== I.a.Subreddit) continue;
					const t = Object(O.a)(c.node);
					r[t.id] = t;
					const {
						isFavorite: e
					} = c.node;
					e && n.push(t.id)
				}
				return {
					favoriteProfileIds: e,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var y = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/profile.ts"),
				D = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/subscriptions.ts"),
				L = n("./src/reddit/selectors/user.ts");
			const A = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				R = Object(o.a)(a.c),
				g = Object(o.a)(a.b),
				U = Object(o.a)(a.a),
				P = Object(o.a)(a.h),
				N = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (t, e, {
					gqlContext: n
				}) => {
					const s = e();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					t(g());
					const r = await (t => Object(p.a)(t, _))(n());
					if (r.ok) {
						const e = C(r.body.data);
						t(R(e))
					} else t(U({
						error: r.error
					}))
				}),
				k = (t, e) => e.type === l.a.PROFILE && t.displayText === e.name.replace("u_", ""),
				F = (t, e, n) => async (o, a, {
					apiContext: _
				}) => {
					let p = t.map(t => t.type === l.a.SUBREDDIT ? {
						id: Object(D.F)(a(), t.name),
						name: t.name,
						type: t.type
					} : {
						id: Object(j.m)(a(), t.name),
						name: `${r.Wb}${t.name}`,
						type: t.type
					});
					if (!Object(L.J)(a())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(c.j)());
					const S = Object(L.i)(a());
					if (S) {
						const e = p.length,
							n = t.length;
						if (p = p.filter(t => !k(S, t)), (t = t.filter(t => !k(S, t))).length !== n || p.length !== e) {
							const t = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.f)(Object(u.e)(t, y.b.Error)))
						}
						if (!t.length && !p.length) return
					}
					if (o(P({
							identifiers: p,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(h.b)(a()),
							userIsSubscriber: e,
							widgetId: n
						})), (await ((t, {
							subredditIds: e,
							subredditNames: n,
							subscribe: s
						}) => Object(m.a)(Object(b.a)(t, [f.a]), {
							method: r.cb.POST,
							endpoint: Object(E.a)(`${t.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: e && e.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(_(), {
							subredditNames: p.map(({
								name: t
							}) => t),
							subscribe: e
						})).ok) {
						const n = 1 === t.length ? `${"subreddit"===t[0].type?i.d.subreddit:i.d.profile}${t[0].name}` : `${s.fbt.plural("community",t.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.f)({
							text: 1 === t.length && "profile" === t[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", e ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", e ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(P({
							identifiers: p,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(h.b)(a()),
							userIsSubscriber: !e,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.f)(Object(u.e)(r, y.b.Error)))
					}
				}, v = Object(o.a)(a.f), M = t => async (e, n, {
					apiContext: s
				}) => {
					const o = n(),
						i = Object(D.L)(o, {
							identifier: t
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${t.id}`);
					const c = t.type === l.a.SUBREDDIT ? i.name : `u_${i.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						_ = d.indexOf(t.id),
						p = a.indexOf(t.id),
						E = -1 === _ && -1 === p,
						S = o.subreddits.models,
						O = o.profiles.models;
					e(v({
						makeFavorite: E,
						identifier: t,
						subredditModels: S,
						profileModels: O
					}));
					const I = {
							type: t.type,
							name: i.name
						},
						T = () => Object(D.gb)(n(), {
							identifier: I
						});
					(T() || (await e(F([I], !0)), T())) && ((await ((t, e, n) => Object(m.a)(Object(b.a)(t, [f.a]), {
						method: r.cb.POST,
						endpoint: `${t.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: e,
							api_type: "json"
						}
					}))(s(), c, E)).ok || (e(v({
						makeFavorite: !E,
						identifier: t,
						subredditModels: S,
						profileModels: O
					})), e(Object(u.f)({
						text: A(),
						kind: y.b.Error
					}))))
				}, x = Object(o.a)(a.d), w = t => async (e, n, {
					apiContext: s
				}) => {
					const o = n().multireddits.models,
						i = () => {
							e(Object(u.f)({
								text: A(),
								kind: y.b.Error
							}))
						},
						c = o[t];
					if (!c) return void i();
					const d = !c.isFavorited;
					e(x({
						makeFavorite: d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), (await ((t, e, n) => Object(m.a)(Object(b.a)(t, [f.a]), {
						method: r.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: e,
							api_type: "json"
						}
					}))(s(), t, d)).ok || (e(x({
						makeFavorite: !d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), i())
				}, G = Object(o.a)(a.e), B = t => async (e, n, {
					apiContext: o
				}) => {
					const i = n(),
						c = i.multireddits.models;
					if (!Object(L.J)(i)) return;
					const d = (t = !0) => {
							e(Object(u.f)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", t ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						a = c[t];
					if (!a) return void d();
					const l = !a.isFollowed;
					e(G({
						follow: l,
						multiredditPath: t,
						multiredditsModelsState: c
					})), (await ((t, e, n) => Object(m.a)(Object(b.a)(t, [f.a]), {
						method: r.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: e,
							api_type: "json"
						},
						type: "json"
					}))(o(), t, l)).ok || (e(G({
						follow: !l,
						multiredditPath: t,
						multiredditsModelsState: c
					})), d(l))
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
				return m
			})), n.d(e, "o", (function() {
				return b
			})), n.d(e, "f", (function() {
				return f
			})), n.d(e, "g", (function() {
				return _
			})), n.d(e, "e", (function() {
				return p
			})), n.d(e, "m", (function() {
				return E
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
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				I = "USERFLAIR_FETCH_SUCCESS"
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
		"./src/reddit/helpers/commentList/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			})), n.d(e, "c", (function() {
				return d
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "e", (function() {
				return u
			})), n.d(e, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/comments.ts"),
				r = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts");
			const c = (t, e) => e().features.comments.models[t],
				d = t => {
					switch (t.commentLink.type) {
						case s.a.Comment:
							return t.commentsDict[t.commentLink.id];
						case s.a.MoreComments:
							return t.moreCommentsDict[t.commentLink.id];
						case s.a.ContinueThread:
							return t.continueThreadDict[t.commentLink.id]
					}
				},
				a = (t, e) => t.type === s.a.MoreComments ? e[t.id].numComments : 1,
				u = (t, e, n, s) => {
					let o = Object(r.n)(s, {
							commentLink: e,
							commentsPageKey: t
						}),
						i = e;
					for (; o && o.depth > n && o.prev && (i = o.prev, (o = Object(r.n)(s, {
							commentLink: i,
							commentsPageKey: t
						})) && !(o.depth <= n)););
					return i.id
				},
				l = (t, e, n) => {
					const {
						commentLists: s,
						comments: r
					} = t, {
						head: c
					} = s[e];
					if (c) return Object.keys(r).filter(t => {
						const e = r[t];
						return !(!e.isStickied || !((t, e) => {
							const n = Object(i.c)(t, {
								experimentEligibilitySelector: i.a,
								experimentName: o.w,
								expEventOverride: e
							});
							return !!(Object(o.Bd)(n) ? void 0 : n)
						})(n)) || (t => !1 !== t.collapsed)(e)
					})
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
							case s.E.NO_STRIPE_SUBSCRIPTION:
							case s.E.USER_DOESNT_EXIST:
							case s.E.USER_REQUIRED_ERROR:
							case s.E.VALIDATION_ERROR:
								return t;
							case s.E.NO_USER:
							case s.E.NO_TEXT:
							case s.E.NO_URL:
								return s.E.VALIDATION_ERROR;
							case s.E.CREDIT_CARD_FAILURE:
							case s.E.CREDIT_CARD_FAILURE_GENERIC:
								return s.E.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return s.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.E.VALIDATION_ERROR
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
				return y
			})), n.d(e, "E", (function() {
				return j
			})), n.d(e, "F", (function() {
				return D
			})), n.d(e, "M", (function() {
				return L
			})), n.d(e, "B", (function() {
				return A
			})), n.d(e, "C", (function() {
				return R
			})), n.d(e, "D", (function() {
				return g
			})), n.d(e, "i", (function() {
				return U
			})), n.d(e, "w", (function() {
				return P
			})), n.d(e, "x", (function() {
				return N
			})), n.d(e, "L", (function() {
				return k
			})), n.d(e, "K", (function() {
				return F
			})), n.d(e, "I", (function() {
				return v
			})), n.d(e, "v", (function() {
				return M
			})), n.d(e, "y", (function() {
				return x
			})), n.d(e, "z", (function() {
				return w
			})), n.d(e, "A", (function() {
				return G
			})), n.d(e, "N", (function() {
				return B
			})), n.d(e, "J", (function() {
				return Y
			})), n.d(e, "t", (function() {
				return K
			})), n.d(e, "H", (function() {
				return q
			})), n.d(e, "d", (function() {
				return H
			})), n.d(e, "c", (function() {
				return W
			})), n.d(e, "b", (function() {
				return V
			})), n.d(e, "f", (function() {
				return $
			})), n.d(e, "e", (function() {
				return z
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
				m = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/reddit/selectors/widgets.ts"),
				f = n("./src/telemetry/index.ts");
			! function(t) {
				t.HEADER_SUBREDDIT = "header_subreddit", t.ITEM_POST = "item_post", t.ITEM_POST_SUBREDDIT = "item_post_subreddit", t.ITEM_SUBREDDIT = "item_subreddit", t.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", t.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", t.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const _ = "discovery_unit",
				p = (t, e, n) => ({
					...m.defaults(t),
					source: _,
					screen: m.screen(t),
					discoveryUnit: {
						id: e.id,
						type: e.unitType,
						title: e.title && n ? Object(r.a)(e.title, {
							subredditName: n.name
						}) : e.title,
						name: e.unitName
					}
				}),
				E = (t, e, n) => ({
					...p(t, e, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (t, e) => {
					Object(f.a)(O(e)(t))
				},
				O = (t, e) => n => E(n, t, e),
				I = (t, e, n, s) => "unitName" in e ? p(t, e, s) : ((t, e, n) => ({
					...m.defaults(t),
					source: "search",
					screen: m.screen(t),
					search: n ? {
						...m.search(t, n),
						structureType: m.StructureType.Trending
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
					post: m.post(t, n)
				}),
				C = ({
					post: t,
					rawQuery: e,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: e ? decodeURIComponent(e) : void 0,
					structureType: t && t.isSponsored ? m.StructureType.PromotedTrend : m.StructureType.Trending
				});
			var y;
			! function(t) {
				t.POPULAR_CAROUSEL = "popular_carousel", t.SEARCH_DROPDOWN = "search_dropdown"
			}(y || (y = {}));
			const j = (t, e, n) => {
					Object(f.a)(h(t, e, n, i.c.CLICK))
				},
				D = (t, e, n) => {
					Object(f.a)(h(t, e, n, i.c.VIEW))
				},
				h = (t, e, n, s) => {
					const r = t.trending.models.filter(t => !t.post || !t.post.isSponsored).findIndex(t => t.id === e.id) + 1;
					return {
						...m.defaults(t),
						source: "search",
						action: s,
						noun: "trending",
						metaSearch: C(e),
						discoveryUnit: n === y.POPULAR_CAROUSEL ? {
							name: a.l,
							id: a.l,
							title: a.l,
							type: "query"
						} : void 0,
						actionInfo: m.actionInfo(t, {
							paneName: n,
							position: r
						}),
						search: {
							originPageType: t.platform.currentPage ? m.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
							query: e.rawQuery,
							structureType: m.StructureType.Trending,
							queryId: s === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				L = (t, e, n, s, r, o, c) => {
					Object(f.a)({
						...m.defaults(t),
						...Object(d.e)(t, n, s, r, o, e),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				A = (t, e, n, s) => {
					Object(f.a)(T(t, e, n, s))
				},
				R = (t, e, n, s) => r => T(r, t, e, n, s),
				g = (t, e, n, r) => {
					const o = I(t, e, r);
					Object(f.a)({
						...o,
						...Object(b.b)(t, n),
						action: "view",
						noun: s.ITEM_SUBREDDIT
					})
				},
				U = (t, e) => {
					Object(f.a)({
						...p(t, e),
						source: _,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				P = (t, e, n, s) => {
					Object(f.a)(N(e, n, s)(t))
				},
				N = (t, e, n, r) => o => {
					return {
						...I(o, t, n, r),
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_POST,
						post: m.post(o, e)
					}
				},
				k = (t, e, n, s) => r => o => Object(d.e)(o, r, t, e, n, s),
				F = (t, e, n, s) => r => o => Object(d.d)(o, t, e, void 0, n, r, s),
				v = (t, e, n, s) => r => o => ({
					...Object(d.e)(o, r, t, e, n, s),
					noun: "ad"
				}),
				M = (t, e) => n => r => ({
					...t ? p(r, t, e) : {},
					source: _,
					action: i.c.CLICK,
					noun: s.ITEM_POST,
					post: m.post(r, n)
				}),
				x = (t, e, n, s) => {
					Object(f.a)(w(e, n, s)(t))
				},
				w = (t, e, n, s) => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(b.b)(r, o) : void 0;
					return {
						...I(r, t, n, s),
						...c,
						source: _,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: m.post(r, e)
					}
				},
				G = (t, e, n) => s => r => {
					const o = Object(l.c)(r, {
							postId: e
						}),
						c = o ? Object(b.b)(r, o) : void 0;
					return {
						...I(r, t, void 0, n),
						...c,
						source: _,
						action: i.c.CLICK,
						noun: s ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: m.post(r, e)
					}
				},
				B = (t, e, n) => {
					const s = I(t, e);
					Object(f.a)({
						...s,
						...Object(b.b)(t, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				Y = (t, e, n, s, r, o) => {
					Object(f.a)({
						...m.defaults(t),
						...Object(d.d)(t, e, n, s, r, void 0, o)
					})
				},
				K = (t, e, n) => {
					const s = I(t, e);
					Object(f.a)({
						...s,
						...Object(b.b)(t, n),
						source: _,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				q = (t, e) => n => {
					const s = Object(u.j)(e);
					return {
						...p(n, t, e),
						...Object(b.b)(n, s),
						source: _,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				H = (t, e) => n => ({
					...p(n, t, e),
					action: "status",
					actionInfo: m.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (t, e, n) => s => ({
					...p(s, t, n),
					action: "status",
					actionInfo: m.actionInfo(s, {
						reason: e,
						success: !1
					}),
					noun: "loading"
				}),
				V = (t, e) => n => ({
					...p(n, t, e),
					action: "click",
					noun: "close"
				}),
				$ = (t, e, n) => s => ({
					...I(s, t, e, n),
					action: "click",
					noun: "scroll"
				}),
				z = (t, e) => n => ({
					...p(n, t, e),
					action: "click",
					noun: "overflow_menu"
				}),
				Q = () => ({
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
				X = (t, e, n) => m.actionInfo(t, {
					position: n
				}),
				J = (t, e, n) => {
					const s = Q();
					return t => ({
						...E(t, s),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e)
					})
				},
				Z = (t, e, n) => {
					const s = Q();
					return t => ({
						...T(t, s, e),
						actionInfo: X(t, 0, n)
					})
				},
				tt = (t, e, n) => {
					const r = Q();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						source: _,
						action: i.c.VIEW,
						noun: s.ITEM_SUBREDDIT
					})
				},
				et = (t, e, n) => {
					const r = Q();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, n),
						post: m.post(t, e) || null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_POST
					})
				},
				nt = (t, e, n, r) => {
					const o = Q();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, r),
						subreddit: m.subredditById(t, n) || null,
						post: m.post(t, e) || null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_POST_SUBREDDIT
					})
				},
				st = (t, e, n) => {
					const r = Q();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT
					})
				},
				rt = (t, e, n, r) => {
					const o = Q();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						post: r ? m.post(t, r) : null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				ot = (t, e, n, r) => {
					const o = Q();
					return t => ({
						...p(t, o),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						post: r ? m.post(t, r) : null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				it = (t, e, n) => {
					const r = Q();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						source: _,
						action: i.c.CLICK,
						noun: s.ITEM_SUBREDDIT_HIDE
					})
				},
				ct = (t, e, n) => {
					const r = Q();
					return t => ({
						...p(t, r),
						actionInfo: X(t, 0, n),
						subreddit: m.subredditById(t, e) || null,
						source: _,
						action: i.c.CLICK,
						noun: s.HEADER_SUBREDDIT
					})
				},
				dt = (t, e) => n => ({
					...p(n, t),
					...e && Object(b.b)(n, e),
					source: _,
					action: i.c.CLICK,
					noun: "item"
				}),
				at = t => e => ({
					...p(e, t),
					source: _,
					action: i.c.CLICK,
					noun: "see_all"
				})
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
				return m
			})), n.d(e, "f", (function() {
				return b
			})), n.d(e, "c", (function() {
				return _
			})), n.d(e, "q", (function() {
				return E
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
				return y
			})), n.d(e, "b", (function() {
				return j
			})), n.d(e, "l", (function() {
				return D
			})), n.d(e, "p", (function() {
				return h
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
				m = t => t.__typename === r.a.Subreddit;
			var b, f, _, p;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(b || (b = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(_ || (_ = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(p || (p = {}));
			const E = t => f[p[t]],
				S = t => p[f[t]],
				O = t => _[f[t]],
				I = t => f[_[t]],
				T = t => p[_[t]];
			var C;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const y = t => {
					switch (t) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				j = "custom",
				D = t => {
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
				h = t => "frequency" in t && !!t.frequency
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

			function m(t) {
				const e = (t, e) => {
					const n = parseInt(t.price || "0"),
						s = parseInt(e.price || "0");
					return n === s ? Object(i.b)(t, e) : n - s
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function b(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === r.a).map(m).sort((t, n) => {
					const s = e[t.id],
						r = e[n.id];
					return Object(i.b)(s, r)
				})
			}

			function f(t) {
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
								data: f(n),
								status: s.Fetched
							}
						}
					}
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(t, e, n) {
			"use strict";
			var s = n("./node_modules/redux/es/redux.js"),
				r = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var i = (t = o, e) => {
					switch (e.type) {
						case r.o:
							return e.payload;
						case r.p:
						default:
							return t
					}
				},
				c = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var a = (t = d, e) => {
				switch (e.type) {
					case c.d:
					case c.b:
					case c.h:
					case c.f: {
						const {
							key: n
						} = e.payload;
						return {
							...t,
							[n]: null
						}
					}
					case c.a:
					case c.e: {
						const {
							key: n,
							error: s
						} = e.payload;
						return {
							...t,
							[n]: s || {}
						}
					}
					default:
						return t
				}
			};
			const u = {};
			var l = (t = u, e) => {
				switch (e.type) {
					case c.c:
					case c.g: {
						const {
							key: n
						} = e.payload;
						return {
							...t,
							[n]: !0
						}
					}
					default:
						return t
				}
			};
			const m = {};
			var b = (t = m, e) => {
					switch (e.type) {
						case c.d:
						case c.h: {
							const {
								key: n
							} = e.payload;
							return {
								...t,
								[n]: !0
							}
						}
						case c.b:
						case c.a:
						case c.f:
						case c.e: {
							const {
								key: n
							} = e.payload;
							return {
								...t,
								[n]: !1
							}
						}
						default:
							return t
					}
				},
				f = Object(s.c)({
					error: a,
					fullyLoaded: l,
					pending: b
				}),
				_ = n("./node_modules/lodash/uniqBy.js"),
				p = n.n(_),
				E = n("./node_modules/lodash/values.js"),
				S = n.n(E),
				O = n("./src/reddit/actions/comment/constants.ts"),
				I = n("./src/reddit/actions/comment/websocket/constants.ts");
			const T = {};

			function C(t) {
				return p()(t, "id").sort((t, e) => t.created - e.created)
			}
			var y = (t = T, e) => {
					switch (e.type) {
						case c.f:
						case O.u:
						case c.b: {
							const {
								comments: n,
								key: s
							} = e.payload, r = t[s] ? t[s] : [], o = function(t, e) {
								return S()(t).map(t => {
									const n = t.isStickied ? e && e.created || Math.round(Date.now() / 1e3) : t.created;
									return {
										id: t.id,
										created: n,
										stickied: t.isStickied,
										authorId: t.authorId
									}
								})
							}(n, r.find(t => t.stickied)), i = C([...r, ...o]);
							return {
								...t,
								[s]: [...i]
							}
						}
						case I.b:
						case I.c:
						case I.d:
						case O.G:
						case O.F: {
							const {
								comment: {
									id: n,
									created: s,
									isStickied: r,
									authorId: o
								},
								commentsPageKey: i,
								isChatSort: c
							} = e.payload;
							return !1 === c ? t : {
								...t,
								[i]: [...C([...t[i] ? t[i] : [], {
									id: n,
									created: s,
									stickied: r,
									authorId: o
								}])]
							}
						}
						default:
							return t
					}
				},
				j = n("./node_modules/lodash/mapValues.js"),
				D = n.n(j),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				L = n("./src/reddit/models/Comment/index.ts");
			const A = {};

			function R(t) {
				const e = t;
				return D()(e, ({
					depth: t,
					next: e,
					prev: n
				}) => ({
					depth: t,
					next: e,
					prev: n
				}))
			}
			var g = (t = A, e) => {
				switch (e.type) {
					case O.u: {
						const {
							comments: n,
							commentLists: s,
							continueThreads: r,
							key: o,
							moreCommentsItem: i,
							moreComments: c
						} = e.payload, d = s[i.postId], a = t[o], u = {}, l = a[i.id];
						if (l && l.prev) {
							const {
								id: t
							} = l.prev;
							u[t] = {
								...a[t],
								next: d.head || l.next
							}
						}
						if (l && l.next) {
							const {
								id: t
							} = l.next;
							u[t] = {
								...a[t],
								prev: d.tail || l.prev
							}
						}
						if (d.head && d.tail) {
							const t = Object(h.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: c,
									continueThreadDict: r
								}),
								e = Object(h.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: c,
									continueThreadDict: r
								});
							l && (t.prev = l.prev, e.next = l.next)
						}
						return {
							...t,
							[o]: {
								...t[o],
								...R(n),
								...R(r),
								...R(c),
								...u
							}
						}
					}
					case c.b:
					case c.f: {
						const {
							comments: n,
							continueThreads: s,
							key: r,
							moreComments: o
						} = e.payload;
						return {
							...t,
							[r]: {
								...t[r],
								...R(n),
								...R(s),
								...R(o)
							}
						}
					}
					case I.b:
						const {
							comment: n, commentsPageKey: s, depth: r, headCommentId: o, originId: i, isChatSort: d
						} = e.payload, a = t[s], u = {};
						let l = null;
						if (d) return o && (u[o] = {
							...a[o],
							prev: Object(L.g)(n.id)
						}, l = Object(L.g)(o)), {
							...t,
							[s]: {
								...t[s],
								...u,
								[n.id]: {
									depth: 0,
									next: l,
									prev: null
								}
							}
						}; {
							let e = null;
							const o = n.parentId;
							if (i && o) {
								const n = "moreComments-" + i;
								if (a[o] && !a[n]) {
									const i = a[o].next;
									return i && (u[i.id] = {
										...a[i.id],
										prev: Object(L.h)(n)
									}, l = i), u[o] = {
										...a[o],
										next: Object(L.h)(n)
									}, e = Object(L.g)(o), {
										...t,
										[s]: {
											...t[s],
											...u,
											[n]: {
												depth: r || 0,
												next: l,
												prev: e
											}
										}
									}
								}
							}
							return t
						}
						case O.G: {
							const {
								comment: n,
								commentsPageKey: s,
								headCommentId: r
							} = e.payload, o = t[s], i = {};
							let c = null;
							return r && (i[r] = {
								...o[r],
								prev: Object(L.g)(n.id)
							}, c = Object(L.g)(r)), {
								...t,
								[s]: {
									...t[s],
									...i,
									[n.id]: {
										depth: 0,
										next: c,
										prev: null
									}
								}
							}
						}
						case O.F: {
							const {
								comment: n,
								commentsPageKey: s,
								parentCommentId: r,
								depth: o
							} = e.payload, i = t[s], c = {};
							let d = null;
							if (!i[r]) return t;
							const a = i[r].next;
							return a && (c[a.id] = {
								...i[a.id],
								prev: Object(L.g)(n.id)
							}, d = a), c[r] = {
								...i[r],
								next: Object(L.g)(n.id)
							}, {
								...t,
								[s]: {
									...t[s],
									...c,
									[n.id]: {
										depth: o,
										next: d,
										prev: Object(L.g)(r)
									}
								}
							}
						}
						default:
							return t
				}
			};
			const U = {};
			var P = (t = U, e) => {
				switch (e.type) {
					case I.b:
					case I.c:
					case O.G: {
						const {
							comment: n,
							commentsPageKey: s,
							isChatSort: r
						} = e.payload;
						return !1 === r ? t : {
							...t,
							[s]: n.id
						}
					}
					case c.b:
					case c.f: {
						const {
							commentLists: n,
							key: s,
							postId: r
						} = e.payload;
						return {
							...t,
							[s]: n[r] && n[r].head ? n[r].head.id : null
						}
					}
					default:
						return t
				}
			};
			const N = {};
			var k = (t = N, e) => {
				switch (e.type) {
					case c.d:
					case c.b:
					case c.c:
					case c.h: {
						const {
							key: n,
							postId: s
						} = e.payload;
						return {
							...t,
							[n]: s
						}
					}
					case O.G: {
						const {
							parentId: n,
							commentsPageKey: s
						} = e.payload;
						return t[s] ? t : {
							...t,
							[s]: n
						}
					}
					default:
						return t
				}
			};
			e.a = Object(s.c)({
				api: f,
				keyToChatCommentLinks: y,
				keyToCommentThreadLinkSets: g,
				keyToHeadCommentId: P,
				keyToPostId: k,
				ads: i
			})
		},
		"./src/reddit/selectors/comments.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return p
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "u", (function() {
				return S
			})), n.d(e, "w", (function() {
				return O
			})), n.d(e, "x", (function() {
				return I
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "g", (function() {
				return y
			})), n.d(e, "F", (function() {
				return j
			})), n.d(e, "n", (function() {
				return D
			})), n.d(e, "o", (function() {
				return h
			})), n.d(e, "j", (function() {
				return L
			})), n.d(e, "l", (function() {
				return A
			})), n.d(e, "h", (function() {
				return R
			})), n.d(e, "a", (function() {
				return g
			})), n.d(e, "b", (function() {
				return U
			})), n.d(e, "q", (function() {
				return P
			})), n.d(e, "m", (function() {
				return N
			})), n.d(e, "t", (function() {
				return k
			})), n.d(e, "y", (function() {
				return F
			})), n.d(e, "H", (function() {
				return v
			})), n.d(e, "s", (function() {
				return M
			})), n.d(e, "A", (function() {
				return x
			})), n.d(e, "B", (function() {
				return w
			})), n.d(e, "D", (function() {
				return G
			})), n.d(e, "r", (function() {
				return B
			})), n.d(e, "e", (function() {
				return Y
			})), n.d(e, "v", (function() {
				return K
			})), n.d(e, "I", (function() {
				return q
			})), n.d(e, "f", (function() {
				return H
			})), n.d(e, "i", (function() {
				return W
			})), n.d(e, "E", (function() {
				return V
			})), n.d(e, "z", (function() {
				return $
			})), n.d(e, "G", (function() {
				return z
			})), n.d(e, "p", (function() {
				return Q
			})), n.d(e, "J", (function() {
				return X
			})), n.d(e, "C", (function() {
				return J
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeCommentPermalink/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/comments/index.ts"),
				_ = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(b.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: _.a
				}
			});
			const p = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.error[e],
				E = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.pending[e],
				S = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.fullyLoaded[e],
				O = (t, e) => t.pages.comments.keyToHeadCommentId[e.commentsPageKey],
				I = (t, e) => {
					const n = O(t, e);
					if (n) return Object(m.a)(t, {
						commentId: n
					})
				},
				T = [],
				C = Object(c.a)((t, e) => {
					const n = I(t, e),
						s = n && n.id;
					if (!s) return T;
					const {
						commentsPageKey: r
					} = e, o = t.pages.comments.keyToCommentThreadLinkSets[r], i = [];
					let c = {
						id: s,
						type: d.a.Comment
					};
					do {
						i.push(c), c = o[c.id].next
					} while (c);
					return i
				}),
				y = (t, e) => O(t, e) ? t.pages.comments.keyToChatCommentLinks[e.commentsPageKey] : [],
				j = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					return n ? t.posts.models[n] : null
				},
				D = (t, {
					commentId: e,
					commentLink: n,
					commentsPageKey: s
				}) => {
					const r = t.pages.comments.keyToCommentThreadLinkSets[s];
					return r ? n ? r[n.id] : e ? r[e] : null : null
				},
				h = (t, {
					commentsPageKey: e
				}) => t.pages.comments.keyToCommentThreadLinkSets[e],
				L = (t, e) => {
					const n = e.commentsPageKey ? D(t, e) : null;
					return n ? n.depth : null
				},
				A = (t, {
					commentLink: e
				}) => {
					const {
						id: n,
						type: s
					} = e;
					switch (s) {
						case d.a.Comment:
							return t.features.comments.models[n];
						case d.a.MoreComments:
							return t.moreComments.models[n];
						case d.a.ContinueThread:
							return t.continueThreads.models[n];
						default:
							return null
					}
				},
				R = (t, e) => {
					if (t.platform.currentPage && t.platform.currentPage.urlParams && t.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: e
						} = t.platform.currentPage.urlParams, n = Object(a.r)(e);
						return Array.from(new Set(Object.keys(t.features.comments.models).filter(e => t.features.comments.models[e].postId === n && t.features.comments.models[e].author !== o.A).map(e => t.features.comments.models[e].author)))
					}
					return []
				},
				g = (t, {
					commentsPageKey: e
				}) => t.features.comments.collapsed[e],
				U = t => t.moreComments.models,
				P = t => t.features.comments.models,
				N = (t, {
					commentId: e
				}) => {
					const n = Object(m.a)(t, {
						commentId: e
					});
					return n ? Object(i.a)(Object(u.C)(t, n), e) : ""
				},
				k = (t, {
					commentId: e
				}) => !!(e && t.features.comments.focused && t.features.comments.focused[e]),
				F = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.isEditing[n] && t.features.comments.isEditing[n][e]),
				v = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.replyFormOpen[n] && t.features.comments.replyFormOpen[n][e]),
				M = (t, {
					commentsPageKey: e
				}) => {
					const n = e && t.features.comments.replyFormOpen[e] || {},
						s = Object.keys(n).find(t => n[t]),
						r = Object(m.a)(t, {
							commentId: s
						}),
						o = r && L(t, {
							commentId: r.id,
							commentLink: void 0,
							commentsPageKey: e
						});
					if (r && "number" == typeof o) return {
						...r,
						depth: o
					}
				},
				x = (t, {
					moreCommentsId: e
				}) => t.moreComments.models[e],
				w = (t, {
					moreCommentsId: e
				}) => !!t.moreComments.api.pending[e],
				G = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					if (n) {
						const e = r()(t.moreComments.models).find(e => e.postId === n && 0 === e.depth && !(void 0 !== t.moreComments.api.pending[e.id]));
						if (e) return {
							moreCommentId: e.id,
							pending: !!t.moreComments.api.pending[e.id]
						}
					}
					return null
				},
				B = (t, {
					id: e
				}) => t.continueThreads.models[e],
				Y = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.models[e] : void 0;
					if (!n) return null;
					const s = t.authorFlair.models[n.subredditId];
					return s ? s[n.author] : null
				},
				K = (t, {
					draftKey: e
				}) => !!t.features.comments.submit.error[e],
				q = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.submit.error[e];
					return n && n.fields ? n.fields.map(t => t.msg) : []
				},
				H = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.drafts[e];
					return !!n && n.autofocusDisabled
				},
				W = (t, {
					draftKey: e
				}) => t.features.comments.drafts[e],
				V = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.submit.error[e] : void 0;
					return n && n.fields ? n.fields.map(t => t.msg) : void 0
				},
				$ = (t, {
					commentId: e
				}) => !!e && t.features.comments.submit.pending[e],
				z = (t, {
					commentId: e
				}) => !!e && t.features.comments.models[e].sendReplies,
				Q = t => t.features.comments.visitHighlightFilter,
				X = (t, e) => {
					const n = Object(m.a)(t, e);
					if (n) return Object(l.Y)(t, n)
				},
				J = (t, {
					postId: e
				}) => t.features.comments.newCommentsCount[e] ? t.features.comments.newCommentsCount[e] : 0
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return b
			})), n.d(e, "c", (function() {
				return f
			})), n.d(e, "a", (function() {
				return _
			})), n.d(e, "e", (function() {
				return p
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
			const m = [],
				b = (t, e) => {
					const n = t.posts.chained.idToListingKey[e.postId];
					return e.listingKey === n
				},
				f = (t, e) => {
					const n = t.posts.chained.dismissedIdToListingKey[e.postId];
					return (t => t.posts.chained.dismissed)(t) || e.listingKey === n
				},
				_ = Object(s.a)(t => t.posts.chained.idToListingKey, t => Object.keys(t).filter(e => t[e])),
				p = (t, {
					subredditId: e
				}) => {
					return _(t).some(n => {
						const s = Object(u.P)(t, {
							postId: n
						});
						return !!s && s.id === e
					})
				},
				E = (t, {
					subredditName: e
				}) => {
					const n = r.Ub.DAY.toUpperCase(),
						s = Object(o.a)(e, r.P.TOP, {
							t: n
						}),
						i = Object(u.w)(t, {
							listingKey: s
						});
					if (0 !== i.length)
						for (const r of i) {
							const e = Object(u.D)(t, {
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
							const n = Object(u.D)(t, {
								postId: e
							});
							if (!n) return m;
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
						const e = E(t, {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.996e3cff7736b7347ff5.js.map