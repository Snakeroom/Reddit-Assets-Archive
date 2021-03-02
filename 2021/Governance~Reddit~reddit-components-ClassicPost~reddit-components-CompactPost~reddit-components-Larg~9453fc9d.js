// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d.90b3102874752e01f737.js
// Retrieved at 3/2/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d"], {
		"./node_modules/lodash/_arrayEvery.js": function(t, e) {
			t.exports = function(t, e) {
				for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
					if (!e(t[n], n, t)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(t, e, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			t.exports = function(t, e) {
				var n = !0;
				return r(t, (function(t, r, s) {
					return n = !!e(t, r, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(t, e, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				c = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js");
			t.exports = function(t, e, n) {
				var d = c(t) ? r : s;
				return n && i(t, e, n) && (e = void 0), d(t, o(e, 3))
			}
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(t) {
			t.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/constants/specialMembership.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/makeCommentPermalink/index.ts": function(t, e, n) {
			"use strict";
			var r = n("./src/lib/redditId/index.ts");
			e.a = (t, e) => {
				let n = t;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(r.c)(e)
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "c", (function() {
				return o
			})), n.d(e, "d", (function() {
				return c
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "g", (function() {
				return a
			})), n.d(e, "h", (function() {
				return u
			})), n.d(e, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return r
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "e", (function() {
				return o
			})), n.d(e, "d", (function() {
				return c
			})), n.d(e, "f", (function() {
				return i
			})), n.d(e, "a", (function() {
				return d
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				c = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/jsApi.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/pinnedPost.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return _
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "d", (function() {
				return E
			})), n.d(e, "g", (function() {
				return O
			})), n.d(e, "c", (function() {
				return S
			})), n.d(e, "f", (function() {
				return I
			})), n.d(e, "b", (function() {
				return A
			})), n.d(e, "e", (function() {
				return D
			})), n.d(e, "i", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/endpoints/post/index.tsx"),
				u = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/profile.ts");
			const _ = "PINNEDPOST__PINNED_POSTS_LOADED",
				f = Object(o.a)(_),
				E = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				b = Object(o.a)(E),
				T = Object(o.a)(O),
				S = "PINNEDPOST__PIN_POST_PENDING",
				I = "PINNEDPOST__UNPIN_POST_PENDING",
				p = Object(o.a)(S),
				C = Object(o.a)(I),
				A = "PINNEDPOST__PIN_POST_FAILURE",
				D = "PINNEDPOST__UNPIN_POST_FAILURE",
				N = Object(o.a)(A),
				P = Object(o.a)(D),
				h = t => Object(i.e)({
					buttonAction: L(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				R = (t, e) => Object(i.e)({
					buttonAction: L(t, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: e ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				y = () => Object(i.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				j = () => Object(i.e)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				L = (t, e = !1) => async (n, o, {
					apiContext: _
				}) => {
					const f = o(),
						E = f.posts.models[t];
					if (!E) return;
					const O = !Object(l.t)(f, {
						postId: t
					});
					if (O && E.isRemoved) return n((() => Object(i.e)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const S = E.author,
						I = Object(m.m)(f, S),
						[A, D, L, U, g] = O ? [p, b, N, h, y] : [C, T, P, R, j];
					if (O) {
						if (Object(l.Q)(f, {
								profileName: S
							}).length >= s.V) return void n(Object(c.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.p)(f, t, S),
						F = !O && k;
					n(A({
						postId: t,
						profileId: I
					})), (await Object(a.t)(_(), t, O, !0)).ok ? (n(D({
						postId: t,
						profileId: I
					})), e || n(U(t, F))) : (n(L({
						postId: t,
						profileId: I
					})), n(g()))
				}
		},
		"./src/reddit/actions/postCollection/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return r
			})), n.d(e, "d", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			})), n.d(e, "f", (function() {
				return c
			})), n.d(e, "g", (function() {
				return i
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
				return _
			})), n.d(e, "l", (function() {
				return f
			})), n.d(e, "m", (function() {
				return E
			})), n.d(e, "k", (function() {
				return O
			})), n.d(e, "i", (function() {
				return b
			})), n.d(e, "j", (function() {
				return T
			})), n.d(e, "h", (function() {
				return S
			})), n.d(e, "p", (function() {
				return I
			})), n.d(e, "q", (function() {
				return p
			})), n.d(e, "o", (function() {
				return C
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				c = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				a = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				_ = "UPDATE_COLLECTION_FAILED",
				f = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				E = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				O = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				b = "REORDER_COLLECTION_PENDING",
				T = "REORDER_COLLECTION_SUCCESS",
				S = "REORDER_COLLECTION_FAILED",
				I = "UPDATE_COLLECTION_LAYOUT_PENDING",
				p = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "G", (function() {
				return r
			})), n.d(e, "H", (function() {
				return s
			})), n.d(e, "l", (function() {
				return o
			})), n.d(e, "m", (function() {
				return c
			})), n.d(e, "x", (function() {
				return i
			})), n.d(e, "D", (function() {
				return d
			})), n.d(e, "E", (function() {
				return a
			})), n.d(e, "k", (function() {
				return u
			})), n.d(e, "C", (function() {
				return l
			})), n.d(e, "p", (function() {
				return m
			})), n.d(e, "M", (function() {
				return _
			})), n.d(e, "n", (function() {
				return f
			})), n.d(e, "z", (function() {
				return E
			})), n.d(e, "s", (function() {
				return O
			})), n.d(e, "c", (function() {
				return b
			})), n.d(e, "b", (function() {
				return T
			})), n.d(e, "d", (function() {
				return S
			})), n.d(e, "e", (function() {
				return I
			})), n.d(e, "f", (function() {
				return p
			})), n.d(e, "g", (function() {
				return C
			})), n.d(e, "h", (function() {
				return A
			})), n.d(e, "i", (function() {
				return D
			})), n.d(e, "j", (function() {
				return N
			})), n.d(e, "q", (function() {
				return P
			})), n.d(e, "O", (function() {
				return h
			})), n.d(e, "N", (function() {
				return R
			})), n.d(e, "P", (function() {
				return y
			})), n.d(e, "Q", (function() {
				return j
			})), n.d(e, "R", (function() {
				return L
			})), n.d(e, "S", (function() {
				return U
			})), n.d(e, "T", (function() {
				return g
			})), n.d(e, "U", (function() {
				return k
			})), n.d(e, "V", (function() {
				return F
			})), n.d(e, "r", (function() {
				return M
			})), n.d(e, "A", (function() {
				return x
			})), n.d(e, "u", (function() {
				return v
			})), n.d(e, "v", (function() {
				return G
			})), n.d(e, "t", (function() {
				return w
			})), n.d(e, "w", (function() {
				return Y
			})), n.d(e, "L", (function() {
				return B
			})), n.d(e, "o", (function() {
				return H
			})), n.d(e, "y", (function() {
				return K
			})), n.d(e, "X", (function() {
				return V
			})), n.d(e, "F", (function() {
				return q
			})), n.d(e, "a", (function() {
				return W
			})), n.d(e, "B", (function() {
				return $
			})), n.d(e, "J", (function() {
				return X
			})), n.d(e, "K", (function() {
				return z
			})), n.d(e, "I", (function() {
				return J
			})), n.d(e, "W", (function() {
				return Q
			}));
			const r = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				s = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				o = "POST_CREATION_EDIT_COMPLETE",
				c = "POST_CREATION_EDIT_FAILED",
				i = "POST_CREATION_PENDING_EDIT",
				d = "POST_CREATION_START_EDITING_POST",
				a = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				m = "FINISHED_CONVERTING_EDITOR_CONTENT",
				_ = "POST_CREATION__TOGGLE_EDITOR_MODE",
				f = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				E = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				b = "POST_CREATION__CHANGE_FLAIR",
				T = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				S = "POST_CREATION__CHANGE_LINK_BODY",
				I = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				p = "POST_CREATION__CHANGE_MEDIA_BODY",
				C = "POST_CREATION__CHANGE_RECAPTCHA",
				A = "POST_CREATION__CHANGE_RTE_STATE",
				D = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				N = "POST_CREATION__CHANGE_TITLE",
				P = "POST_CREATION__GOV_TYPE_CHANGED",
				h = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				R = "POST_CREATION__TOGGLE_IS_CHANGED",
				y = "POST_CREATION__TOGGLE_IS_GOV",
				j = "POST_CREATION__TOGGLE_IS_NSFW",
				L = "POST_CREATION__TOGGLE_IS_OC",
				U = "POST_CREATION__TOGGLE_IS_POLL",
				g = "POST_CREATION__TOGGLE_IS_SPOILER",
				k = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				F = "POST_CREATION__TOGGLE_SEND_REPLIES",
				M = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				x = "POST_CREATION__RESET_FORM",
				v = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				w = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				Y = "POST_CREATION__PENDING",
				B = "POST_CREATION__SUCCEEDED",
				H = "POST_CREATION__FAILED",
				K = "POST_CREATION__POLL_FAILED",
				V = "POST_CREATION__VALIDATION_FAILED",
				q = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				W = "POST_CREATION__CAPTCHA_REQUIRED",
				$ = "POST_CREATION__SET_SUBMIT_MODE",
				X = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				z = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				J = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				Q = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(t, e, n) {
			"use strict";
			n.d(e, "i", (function() {
				return E
			})), n.d(e, "m", (function() {
				return b
			})), n.d(e, "a", (function() {
				return T
			})), n.d(e, "b", (function() {
				return S
			})), n.d(e, "c", (function() {
				return p
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "f", (function() {
				return A
			})), n.d(e, "e", (function() {
				return D
			})), n.d(e, "g", (function() {
				return N
			})), n.d(e, "h", (function() {
				return P
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "r", (function() {
				return R
			})), n.d(e, "q", (function() {
				return y
			})), n.d(e, "s", (function() {
				return j
			})), n.d(e, "t", (function() {
				return L
			})), n.d(e, "u", (function() {
				return U
			})), n.d(e, "v", (function() {
				return g
			})), n.d(e, "x", (function() {
				return k
			})), n.d(e, "y", (function() {
				return F
			})), n.d(e, "z", (function() {
				return M
			})), n.d(e, "k", (function() {
				return x
			})), n.d(e, "p", (function() {
				return v
			})), n.d(e, "o", (function() {
				return w
			})), n.d(e, "w", (function() {
				return Y
			})), n.d(e, "n", (function() {
				return B
			})), n.d(e, "l", (function() {
				return H
			}));
			var r = n("./node_modules/react-router-redux/es/index.js"),
				s = n("./src/lib/isUrl/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/endpoints/post/index.tsx"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				u = n("./src/reddit/routes/postCreation/constants.ts"),
				l = n("./src/reddit/selectors/activeModalId.ts"),
				m = n("./src/reddit/selectors/postCollection.ts"),
				_ = n("./src/reddit/selectors/postCreations.ts"),
				f = n("./src/reddit/actions/postCreation/constants.ts");
			const E = Object(o.a)(f.n),
				O = Object(o.a)(f.z),
				b = (Object(o.a)(f.s), t => {
					switch (t) {
						case "markdown":
							return "self";
						case "richtext":
						case "richText":
							return "self";
						case "media":
							return "media";
						default:
							return "link"
					}
				}),
				T = Object(o.a)(f.b),
				S = Object(o.a)(f.c),
				I = Object(o.a)(f.d),
				p = Object(o.a)(f.e),
				C = Object(o.a)(f.f),
				A = Object(o.a)(f.g),
				D = Object(o.a)(f.h),
				N = Object(o.a)(f.i),
				P = Object(o.a)(f.j),
				h = Object(o.a)(f.q),
				R = Object(o.a)(f.O),
				y = Object(o.a)(f.N),
				j = (Object(o.a)(f.P), Object(o.a)(f.Q)),
				L = Object(o.a)(f.R),
				U = Object(o.a)(f.S),
				g = Object(o.a)(f.T),
				k = Object(o.a)(f.U),
				F = Object(o.a)(f.V),
				M = Object(o.a)(f.W),
				x = Object(o.a)(f.r),
				v = t => async (e, n, {
					apiContext: r
				}) => {
					e(I(t)), Object(s.a)(t) && e((t => async (e, n, {
						apiContext: r
					}) => {
						const s = await Object(d.f)(r(), t);
						s.ok && s.body && s.body.json && s.body.json.data && e(O(s.body.json.data))
					})(t))
				}, G = Object(o.a)(f.A), w = (t, e) => async (n, s) => {
					n(G()), n(t ? Object(r.b)(u.b) : Object(r.b)(Object(_.V)(s(), {
						pageLayer: e
					})))
				}, Y = t => async e => {
					e(c.i(t))
				}, B = t => async (e, n) => {
					const r = n(),
						s = Object(i.D)(t),
						o = Object(_.B)(r);
					if (s && o) {
						Object(l.a)(r) !== a.c && e(Y(a.c))
					} else e(w(!1, t))
				}, H = t => async (e, n) => {
					const r = n();
					Object(m.m)(r, {
						subredditId: t
					}) ? e(c.i(a.a)) : e(c.i(a.b))
				}
		},
		"./src/reddit/actions/postFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return f
			})), n.d(e, "a", (function() {
				return T
			})), n.d(e, "f", (function() {
				return C
			})), n.d(e, "b", (function() {
				return P
			})), n.d(e, "e", (function() {
				return j
			})), n.d(e, "d", (function() {
				return L
			})), n.d(e, "l", (function() {
				return F
			})), n.d(e, "k", (function() {
				return M
			})), n.d(e, "j", (function() {
				return x
			})), n.d(e, "g", (function() {
				return v
			})), n.d(e, "i", (function() {
				return G
			})), n.d(e, "h", (function() {
				return w
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				c = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/endpoints/flair/index.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				O = Object(s.a)(f),
				b = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				T = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				I = Object(s.a)(T),
				p = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				D = Object(s.a)(C),
				N = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				P = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				h = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				R = Object(s.a)(P),
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				U = Object(s.a)(j),
				g = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				k = Object(s.a)(L),
				F = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						c = Object(_.S)(o, {
							subredditId: t
						}).name;
					n(E());
					const i = await Object(d.k)(s(), c, e);
					if (i.ok) {
						n(O({
							subredditId: t,
							isEnabled: e
						}))
					} else n(b());
					return i.ok
				}, M = (t, e) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						c = Object(_.S)(o, {
							subredditId: t
						}).name;
					n(S());
					const i = await Object(d.j)(s(), e, u.d.LinkFlair, c);
					if (i.ok) {
						n(I({
							subredditId: t,
							canAssignOwn: e
						}))
					} else n(p());
					return i.ok
				}, x = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						m = Object(_.S)(a, {
							subredditId: e
						}).name;
					n(A());
					const f = await Object(d.f)(o(), t, m, u.d.LinkFlair);
					let E = f.ok && !(f.body && !1 === f.body.success);
					if (E) {
						const r = f.body;
						if (n(D({
								subredditId: e,
								template: r
							})), r.id) {
							const s = t.styleTemplate,
								o = a.structuredStyles.flairTemplate.models[r.id];
							s ? E = await n(Object(c.d)(e, r.id, s)) : o && (E = await n(Object(c.c)(e, r.id)))
						}
					}
					if (E) {
						const t = Object(i.d)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(i.e)(t))
					} else {
						n(N());
						const s = Object(i.d)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), x(t, e));
						n(Object(i.e)(s))
					}
					return E
				}, v = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const c = s(),
						a = Object(_.S)(c, {
							subredditId: e
						}).name;
					if (n(h()), (await Object(d.b)(o(), t, a)).ok) {
						n(R({
							subredditId: e,
							templateId: t
						}));
						const s = Object(i.d)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(i.e)(s))
					} else {
						n(y());
						const s = Object(i.d)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), v(t, e));
						n(Object(i.e)(s))
					}
				}, G = (t, e) => async (n, s, {
					apiContext: o
				}) => {
					const c = s(),
						a = Object(m.d)(c, {
							subredditId: e
						}).templateIds,
						f = Object(_.S)(c, {
							subredditId: e
						}).name;
					if (n(U({
							subredditId: e,
							templateIds: t
						})), (await Object(d.e)(o(), f, u.d.LinkFlair, t)).ok) {
						n(g());
						const t = Object(i.d)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						n(Object(i.e)(t))
					} else {
						n(k({
							subredditId: e,
							templateIds: a
						}));
						const s = Object(i.d)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), G(t, e));
						n(Object(i.e)(s))
					}
				}, w = ({
					post: t,
					previewFlair: e,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: c
				}) => {
					const i = t.flair.filter(t => !Object(a.p)(t.type));
					if (e && i.unshift(e), r(Object(o.L)({
							[t.id]: {
								flair: i
							}
						})), e) {
						const r = Object(a.g)(e);
						Object(d.h)(c(), t.id, n, r)
					} else Object(d.h)(c(), t.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return p
			})), n.d(e, "d", (function() {
				return A
			})), n.d(e, "a", (function() {
				return D
			})), n.d(e, "c", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				c = n.n(o),
				i = n("./node_modules/lodash/values.js"),
				d = n.n(i),
				a = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/imageUploads.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/constants/headers.ts");
			var O = n("./src/reddit/helpers/trackers/blade.ts"),
				b = n("./src/reddit/models/Image/index.tsx"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/telemetry/index.ts");
			const I = ({
				subredditId: t,
				flairId: e,
				imageKey: n,
				imageData: r
			}) => async (s, o, c) => {
				const i = o(),
					d = Object(T.S)(i, {
						subredditId: t
					});
				if (!d) return !1;
				s(Object(u.k)(r));
				const a = await (async (t, e, n, r, s, o) => Object(_.a)(Object(f.a)(t, [E.a]), {
					endpoint: `${t.apiUrl}/api/v1/${e}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(c.apiContext(), d.name, e, r.file.name, n, await Object(l.g)(r.file));
				let O = !1;
				try {
					const t = await Object(u.g)(o(), a, r, b.a.FlairTemplates);
					t && s(Object(u.j)(t)), O = !0
				} catch (S) {
					if (S instanceof Error) throw S;
					s(Object(u.i)(S))
				}
				return O
			}, p = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", C = Object(a.a)(p), A = (t, e, n) => async (r, o, i) => {
				const {
					apiContext: a
				} = i;
				let l = o();
				const {
					pendingImages: p,
					...A
				} = n;
				let D = A;
				const N = Object(T.S)(l, {
					subredditId: t
				});
				if (!N) return !1;
				const P = l.structuredStyles.flairTemplate.models[e];
				if (P && c()(P, D)) return !0;
				if (p) {
					const n = [];
					if (s()(p, (s, o) => {
							s && n.push(r(I({
								flairId: e,
								imageData: Object(b.m)(s),
								imageKey: o,
								subredditId: t
							})))
						}), !(await Promise.all(n)).every(t => t)) return !1;
					D = ((t, e, n) => {
						const r = {
							...t
						};
						return s()(e, (t, e) => {
							const s = t && n.imageUploads[t.id];
							s && s.kind === b.b.TempUploaded && (r[e] = s.url)
						}), r
					})(D, p, o())
				}
				l = o();
				let h = null,
					R = null;
				const y = [];
				try {
					(h = await Object(u.f)(l, b.a.FlairTemplates)) && (R = Object(u.m)(h)(r, o, i), y.push(...d()(h.imagesByKey)))
				} catch (g) {
					return !1
				}
				const j = await (async (t, e, n, r) => Object(_.a)(Object(f.a)(t, [E.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: r
					}))(a(), N.name, e, D),
					L = P ? "edit_post_flair_template" : "save_post_flair_template",
					U = Object(O.e)(l, L);
				if (j.ok) {
					let t;
					if (R) try {
						await R, t = ((t, e, n) => {
							const r = {
								...t
							};
							return e.forEach(t => {
								const e = n.imageUploads[t.id];
								e && e.kind === b.b.Uploaded && (t.url === r.postBackgroundImage ? r.postBackgroundImage = e.url : t.url === r.postPlaceholderImage && (r.postPlaceholderImage = e.url))
							}), r
						})(D, y, o())
					} catch (g) {
						t = null
					} else t = D;
					r(C({
						flairId: e,
						template: t || D
					}))
				} else h && h.websocket.close();
				return Object(S.a)({
					...U,
					actionInfo: {
						...U.actionInfo,
						success: j.ok
					}
				}), j.ok
			}, D = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", N = Object(a.a)(D), P = (t, e) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					c = Object(T.S)(o, {
						subredditId: t
					});
				if (!c) return !1;
				const i = await (async (t, e, n) => Object(_.a)(Object(f.a)(t, [E.a]), {
						endpoint: `${t.apiUrl}/api/v1/${e}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(s(), c.name, e),
					d = Object(O.e)(o, "delete_flair_template");
				return i.ok && n(N({
					flairId: e
				})), Object(S.a)({
					...d,
					actionInfo: {
						...d.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "a", (function() {
				return o
			})), n.d(e, "h", (function() {
				return c
			})), n.d(e, "i", (function() {
				return i
			})), n.d(e, "g", (function() {
				return d
			})), n.d(e, "f", (function() {
				return a
			})), n.d(e, "d", (function() {
				return u
			})), n.d(e, "e", (function() {
				return l
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				c = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return g
			})), n.d(e, "d", (function() {
				return F
			})), n.d(e, "c", (function() {
				return x
			})), n.d(e, "a", (function() {
				return G
			})), n.d(e, "b", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var E = n("./src/graphql/operations/SubscribedSubreddits.json"),
				O = n("./src/lib/makeGqlRequest/index.ts"),
				b = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var T = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = n("./src/reddit/models/GqlTopLevelField.ts"),
				p = n("./src/reddit/models/User/index.ts");

			function C(t) {
				const e = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = t.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== p.c.AvailableRedditor) continue;
					const t = Object(T.a)(i.node.profile);
					r[t.id] = t;
					const {
						isFavorite: n
					} = i.node.profile;
					n && e.push(t.id)
				}
				const {
					subscribedSubreddits: c
				} = t.identity;
				for (const i of c.edges) {
					if (i.node.__typename !== I.a.Subreddit) continue;
					const t = Object(S.a)(i.node);
					s[t.id] = t;
					const {
						isFavorite: e
					} = i.node;
					e && n.push(t.id)
				}
				return {
					favoriteProfileIds: e,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var A = n("./src/reddit/models/Toast/index.ts"),
				D = n("./src/reddit/selectors/profile.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/selectors/subscriptions.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const R = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				y = Object(o.a)(a.c),
				j = Object(o.a)(a.b),
				L = Object(o.a)(a.a),
				U = Object(o.a)(a.h),
				g = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (t, e, {
					gqlContext: n
				}) => {
					const r = e();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					t(j());
					const s = await (t => Object(O.a)(t, E))(n());
					if (s.ok) {
						const e = C(s.body.data);
						t(y(e))
					} else t(L({
						error: s.error
					}))
				}),
				k = (t, e) => e.type === l.a.PROFILE && t.displayText === e.name.replace("u_", ""),
				F = (t, e, n) => async (o, a, {
					apiContext: E
				}) => {
					let O = t.map(t => t.type === l.a.SUBREDDIT ? {
						id: Object(N.F)(a(), t.name),
						name: t.name,
						type: t.type
					} : {
						id: Object(D.m)(a(), t.name),
						name: `${s.Wb}${t.name}`,
						type: t.type
					});
					if (!Object(h.J)(a())) return o(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void o(Object(i.j)());
					const T = Object(h.i)(a());
					if (T) {
						const e = O.length,
							n = t.length;
						if (O = O.filter(t => !k(T, t)), (t = t.filter(t => !k(T, t))).length !== n || O.length !== e) {
							const t = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(u.e)(Object(u.d)(t, A.b.Error)))
						}
						if (!t.length && !O.length) return
					}
					if (o(U({
							identifiers: O,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(P.b)(a()),
							userIsSubscriber: e,
							widgetId: n
						})), (await ((t, {
							subredditIds: e,
							subredditNames: n,
							subscribe: r
						}) => Object(m.a)(Object(_.a)(t, [f.a]), {
							method: s.cb.POST,
							endpoint: Object(b.a)(`${t.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: e && e.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(E(), {
							subredditNames: O.map(({
								name: t
							}) => t),
							subscribe: e
						})).ok) {
						const n = 1 === t.length ? `${"subreddit"===t[0].type?c.d.subreddit:c.d.profile}${t[0].name}` : `${r.fbt.plural("community",t.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(u.e)({
							text: 1 === t.length && "profile" === t[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", e ? "followed" : "unfollowed"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", e ? "joined" : "left"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(U({
							identifiers: O,
							nameIdentifiers: t,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(P.b)(a()),
							userIsSubscriber: !e,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(u.e)(Object(u.d)(s, A.b.Error)))
					}
				}, M = Object(o.a)(a.f), x = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n(),
						c = Object(N.L)(o, {
							identifier: t
						});
					if (!c) throw new Error(`actions.subscription -- No subreddit or profile found with id ${t.id}`);
					const i = t.type === l.a.SUBREDDIT ? c.name : `u_${c.name}`,
						d = o.subscriptions.favoriteSubredditOrder || [],
						a = o.subscriptions.favoriteProfileOrder || [],
						E = d.indexOf(t.id),
						O = a.indexOf(t.id),
						b = -1 === E && -1 === O,
						T = o.subreddits.models,
						S = o.profiles.models;
					e(M({
						makeFavorite: b,
						identifier: t,
						subredditModels: T,
						profileModels: S
					}));
					const I = {
							type: t.type,
							name: c.name
						},
						p = () => Object(N.fb)(n(), {
							identifier: I
						});
					(p() || (await e(F([I], !0)), p())) && ((await ((t, e, n) => Object(m.a)(Object(_.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: e,
							api_type: "json"
						}
					}))(r(), i, b)).ok || (e(M({
						makeFavorite: !b,
						identifier: t,
						subredditModels: T,
						profileModels: S
					})), e(Object(u.e)({
						text: R(),
						kind: A.b.Error
					}))))
				}, v = Object(o.a)(a.d), G = t => async (e, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						c = () => {
							e(Object(u.e)({
								text: R(),
								kind: A.b.Error
							}))
						},
						i = o[t];
					if (!i) return void c();
					const d = !i.isFavorited;
					e(v({
						makeFavorite: d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), (await ((t, e, n) => Object(m.a)(Object(_.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: e,
							api_type: "json"
						}
					}))(r(), t, d)).ok || (e(v({
						makeFavorite: !d,
						multiredditPath: t,
						multiredditsModelsState: o
					})), c())
				}, w = Object(o.a)(a.e), Y = t => async (e, n, {
					apiContext: o
				}) => {
					const c = n(),
						i = c.multireddits.models;
					if (!Object(h.J)(c)) return;
					const d = (t = !0) => {
							e(Object(u.e)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", t ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: A.b.Error
							}))
						},
						a = i[t];
					if (!a) return void d();
					const l = !a.isFollowed;
					e(w({
						follow: l,
						multiredditPath: t,
						multiredditsModelsState: i
					})), (await ((t, e, n) => Object(m.a)(Object(_.a)(t, [f.a]), {
						method: s.cb.POST,
						endpoint: `${t.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: e,
							api_type: "json"
						},
						type: "json"
					}))(o(), t, l)).ok || (e(w({
						follow: !l,
						multiredditPath: t,
						multiredditsModelsState: i
					})), d(l))
				}
		},
		"./src/reddit/helpers/commentList/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return i
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
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (t, e) => e().features.comments.models[t],
				d = t => {
					switch (t.commentLink.type) {
						case r.a.Comment:
							return t.commentsDict[t.commentLink.id];
						case r.a.MoreComments:
							return t.moreCommentsDict[t.commentLink.id];
						case r.a.ContinueThread:
							return t.continueThreadDict[t.commentLink.id]
					}
				},
				a = (t, e) => t.type === r.a.MoreComments ? e[t.id].numComments : 1,
				u = (t, e, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: e,
							commentsPageKey: t
						}),
						c = e;
					for (; o && o.depth > n && o.prev && (c = o.prev, (o = Object(s.n)(r, {
							commentLink: c,
							commentsPageKey: t
						})) && !(o.depth <= n)););
					return c.id
				},
				l = (t, e, n) => {
					const {
						commentLists: r,
						comments: s
					} = t, {
						head: i
					} = r[e];
					if (i) return Object.keys(s).filter(t => {
						const e = s[t];
						return !(!e.isStickied || !((t, e) => {
							const n = Object(c.c)(t, {
								experimentEligibilitySelector: c.a,
								experimentName: o.y,
								expEventOverride: e
							});
							return !!(Object(o.rd)(n) ? void 0 : n)
						})(n)) || (t => !1 !== t.collapsed)(e)
					})
				}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(t, e, n) {
			"use strict";

			function r(t, e) {
				if (t.placement && !e.placement) return -1;
				if (e.placement && !t.placement) return 1;
				if (t.position && !e.position) return -1;
				if (e.position && !t.position) return 1;
				let n = 0;
				return t.placement && e.placement && (n = t.placement.localeCompare(e.placement)), 0 === n && t.position && e.position && (n = t.position - e.position), 0 === n && (n = t.title.localeCompare(e.title)), n
			}

			function s(t) {
				return [...t].sort(r)
			}
			n.d(e, "b", (function() {
				return r
			})), n.d(e, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: t
			}) => {
				const e = [];
				for (const {
						node: n
					} of t) e.push(Object(r.e)(n));
				return e
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = t => {
					for (const e of t) {
						const t = e[0] || "";
						switch (t) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return t;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (t.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
				},
				o = t => {
					const e = t.body;
					return {
						type: s(e.json.errors),
						fields: e.json.errors.map(t => ({
							field: t[2] || "",
							msg: t[1]
						}))
					}
				},
				c = t => {
					const e = t.body;
					return !t.ok && e && e.json && e.json.errors ? {
						...t,
						error: o(t)
					} : t
				};
			e.a = o
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(t, e, n) {
			"use strict";
			var r;
			n.d(e, "a", (function() {
					return r
				})), n.d(e, "b", (function() {
					return s
				})),
				function(t) {
					t.Off = "OFF", t.Lenient = "LENIENT", t.Moderate = "MODERATE", t.Strict = "STRICT"
				}(r || (r = {}));
			const s = t => {
				switch (t) {
					case "harassment_comments_in_model":
					case "harassment_posts_in_model":
						return "Abuse Filter";
					case "hate_comments_in_model":
					case "hate_posts_in_model":
						return "Identity Filter";
					default:
						return null
				}
			}
		},
		"./src/reddit/models/Badge/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "d", (function() {
				return l
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o, c = n("./src/config.ts");

			function i(t) {
				return "userId" in t
			}

			function d(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function a(t, e, n) {
				const r = n.media[0],
					s = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let o = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = r[n],
							[c, i] = n.split("x").map(t => parseInt(t));
						(c < o.width && c >= t || i < o.height && i >= e) && (o = {
							height: i,
							width: c,
							url: s
						})
					}), !o.url && s.length) {
					const t = Object.keys(r)[0],
						e = r[t],
						[n, s] = t.split("x").map(t => parseInt(t));
					o = {
						height: s,
						width: n,
						url: e
					}
				}
				return o.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${c.a.assetPath}/${t}`
			}

			function l(t, e, n) {
				const r = a(t, e, n),
					s = a(2 * t, 2 * e, n);
				return {
					url: u(r),
					url2x: u(s)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(r || (r = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(o || (o = {}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return i
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(t) {
				t.Loyalty = "loyalty", t.Achievement = "achievement", t.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(t) {
				t.Gallery = "gallery", t.MyBadges = "my-badges"
			}(s || (s = {}));
			const c = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				i = t => t === o.a.First ? r.Loyalty : t === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "r", (function() {
				return c
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
				return _
			})), n.d(e, "c", (function() {
				return E
			})), n.d(e, "q", (function() {
				return b
			})), n.d(e, "k", (function() {
				return T
			})), n.d(e, "j", (function() {
				return S
			})), n.d(e, "h", (function() {
				return I
			})), n.d(e, "i", (function() {
				return p
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "m", (function() {
				return A
			})), n.d(e, "b", (function() {
				return D
			})), n.d(e, "l", (function() {
				return N
			})), n.d(e, "p", (function() {
				return P
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const c = "scheduledposts";
			var i, d, a;
			! function(t) {
				t.LINK = "LINK", t.POLL = "POLL", t.SELF = "SELF"
			}(i || (i = {})),
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
				m = t => t.__typename === s.a.Subreddit;
			var _, f, E, O;
			! function(t) {
				t.standalonePosts = "standalonePosts", t.recurringPosts = "recurringPosts"
			}(_ || (_ = {})),
			function(t) {
				t.MONDAY = "MONDAY", t.TUESDAY = "TUESDAY", t.WEDNESDAY = "WEDNESDAY", t.THURSDAY = "THURSDAY", t.FRIDAY = "FRIDAY", t.SATURDAY = "SATURDAY", t.SUNDAY = "SUNDAY"
			}(f || (f = {})),
			function(t) {
				t[t.MONDAY = 0] = "MONDAY", t[t.TUESDAY = 1] = "TUESDAY", t[t.WEDNESDAY = 2] = "WEDNESDAY", t[t.THURSDAY = 3] = "THURSDAY", t[t.FRIDAY = 4] = "FRIDAY", t[t.SATURDAY = 5] = "SATURDAY", t[t.SUNDAY = 6] = "SUNDAY"
			}(E || (E = {})),
			function(t) {
				t[t.SUNDAY = 0] = "SUNDAY", t[t.MONDAY = 1] = "MONDAY", t[t.TUESDAY = 2] = "TUESDAY", t[t.WEDNESDAY = 3] = "WEDNESDAY", t[t.THURSDAY = 4] = "THURSDAY", t[t.FRIDAY = 5] = "FRIDAY", t[t.SATURDAY = 6] = "SATURDAY"
			}(O || (O = {}));
			const b = t => f[O[t]],
				T = t => O[f[t]],
				S = t => E[f[t]],
				I = t => f[E[t]],
				p = t => O[E[t]];
			var C;
			! function(t) {
				t.Hourly = "HOURLY", t.Daily = "DAILY", t.Weekly = "WEEKLY", t.Monthly = "MONTHLY"
			}(C || (C = {}));
			const A = t => {
					switch (t) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				D = "custom",
				N = t => {
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
							return Object(r.a)(t)
					}
				},
				P = t => "frequency" in t && !!t.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(t) {
				t[t.Failure = 0] = "Failure", t[t.Fetched = 1] = "Fetched", t[t.NotFetched = 2] = "NotFetched", t[t.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			e.b = (t = o, e) => {
				switch (e.type) {
					case s.a:
						if (t.status === r.Fetched && t.data.stripe && t.data.stripe.sources) {
							const n = e.payload.cardId,
								{
									[n]: r,
									...s
								} = t.data.stripe.sources;
							return {
								...t,
								data: {
									...t.data,
									stripe: {
										...t.data.stripe,
										sources: s
									}
								}
							}
						}
						return t;
					case s.e:
						if (t.status === r.Fetched && t.data.braintree && t.data.braintree.sources) {
							const n = e.payload.sourceId,
								{
									[n]: r,
									...s
								} = t.data.braintree.sources;
							return {
								...t,
								data: {
									...t.data,
									braintree: {
										...t.data.braintree,
										sources: s
									}
								}
							}
						}
						return t;
					case s.b:
						return {
							error: e.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: e.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return t
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				c = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/models/Badge/managementPage.ts");
			! function(t) {
				t[t.NotFetched = 0] = "NotFetched", t[t.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const a = {};

			function u(t) {
				return "userId" in t
			}

			function l(t, e, n, r) {
				t.forEach(t => {
					t.collections && Object.keys(t.collections).forEach(s => {
						let o;
						(o = t.placement ? t.placement === i.a.First ? r[d.a.Loyalty][s] : r[d.a.Achievement][s] : u(t) ? r[d.a.Cosmetic][d.c.MyBadges][s] : r[d.a.Cosmetic][d.c.Gallery][s]) && (u(t) ? n.has(t.id) && o.unlocked.push(t) : e.has(t.id) || o.locked.push(t))
					})
				})
			}

			function m(t) {
				const e = (t, e) => {
					const n = parseInt(t.price || "0"),
						r = parseInt(e.price || "0");
					return n === r ? Object(c.b)(t, e) : n - r
				};
				return t.locked.sort(e), t.unlocked.sort(e), t
			}

			function _(t, e) {
				return Object.keys(t).map(e => t[e]).filter(t => !!t.locked.length || !!t.unlocked.length || t.id === s.a).map(m).sort((t, n) => {
					const r = e[t.id],
						s = e[n.id];
					return Object(c.b)(r, s)
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
					const r = t.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					e[d.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, e[d.a.Cosmetic][d.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				t.userOwnedBadges.forEach(e => {
					const r = t.badges[e];
					r && n.add(r.type)
				});
				const r = new Set(t.userOwnedBadges);
				return l(Object.keys(t.badges).map(e => t.badges[e]), n, r, e), l(Object.keys(t.products).map(e => t.products[e]), n, r, e), {
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
							subredditId: n
						} = e.payload, s = t[n];
						return s && s.status === r.Fetched ? {
							...t,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : t
					}
					case o.h: {
						const {
							subredditId: n
						} = e.payload, s = t[n];
						return s && s.status === r.Fetched ? {
							...t,
							[n]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
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
								status: r.Fetched
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
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var c = (t = o, e) => {
					switch (e.type) {
						case s.o:
							return e.payload;
						case s.p:
						default:
							return t
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const d = {};
			var a = (t = d, e) => {
				switch (e.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = e.payload;
						return {
							...t,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: r
						} = e.payload;
						return {
							...t,
							[n]: r || {}
						}
					}
					default:
						return t
				}
			};
			const u = {};
			var l = (t = u, e) => {
				switch (e.type) {
					case i.c:
					case i.g: {
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
			var _ = (t = m, e) => {
					switch (e.type) {
						case i.d:
						case i.h: {
							const {
								key: n
							} = e.payload;
							return {
								...t,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
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
				f = Object(r.c)({
					error: a,
					fullyLoaded: l,
					pending: _
				}),
				E = n("./node_modules/lodash/uniqBy.js"),
				O = n.n(E),
				b = n("./node_modules/lodash/values.js"),
				T = n.n(b),
				S = n("./src/reddit/actions/comment/constants.ts"),
				I = n("./src/reddit/actions/comment/websocket/constants.ts");
			const p = {};

			function C(t) {
				return O()(t, "id").sort((t, e) => t.created - e.created)
			}
			var A = (t = p, e) => {
					switch (e.type) {
						case i.f:
						case S.u:
						case i.b: {
							const {
								comments: n,
								key: r
							} = e.payload, s = t[r] ? t[r] : [], o = function(t, e) {
								return T()(t).map(t => {
									const n = t.isStickied ? e && e.created || Math.round(Date.now() / 1e3) : t.created;
									return {
										id: t.id,
										created: n,
										stickied: t.isStickied,
										authorId: t.authorId
									}
								})
							}(n, s.find(t => t.stickied)), c = C([...s, ...o]);
							return {
								...t,
								[r]: [...c]
							}
						}
						case I.b:
						case I.c:
						case I.d:
						case S.G:
						case S.F: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: c,
								isChatSort: i
							} = e.payload;
							return !1 === i ? t : {
								...t,
								[c]: [...C([...t[c] ? t[c] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return t
					}
				},
				D = n("./node_modules/lodash/mapValues.js"),
				N = n.n(D),
				P = n("./src/reddit/helpers/commentList/index.ts"),
				h = n("./src/reddit/models/Comment/index.ts");
			const R = {};

			function y(t) {
				const e = t;
				return N()(e, ({
					depth: t,
					next: e,
					prev: n
				}) => ({
					depth: t,
					next: e,
					prev: n
				}))
			}
			var j = (t = R, e) => {
				switch (e.type) {
					case S.u: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: c,
							moreComments: i
						} = e.payload, d = r[c.postId], a = t[o], u = {}, l = a[c.id];
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
							const t = Object(P.c)({
									commentLink: d.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								}),
								e = Object(P.c)({
									commentLink: d.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								});
							l && (t.prev = l.prev, e.next = l.next)
						}
						return {
							...t,
							[o]: {
								...t[o],
								...y(n),
								...y(s),
								...y(i),
								...u
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = e.payload;
						return {
							...t,
							[s]: {
								...t[s],
								...y(n),
								...y(r),
								...y(o)
							}
						}
					}
					case I.b:
						const {
							comment: n, commentsPageKey: r, depth: s, headCommentId: o, originId: c, isChatSort: d
						} = e.payload, a = t[r], u = {};
						let l = null;
						if (d) return o && (u[o] = {
							...a[o],
							prev: Object(h.g)(n.id)
						}, l = Object(h.g)(o)), {
							...t,
							[r]: {
								...t[r],
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
							if (c && o) {
								const n = "moreComments-" + c;
								if (a[o] && !a[n]) {
									const c = a[o].next;
									return c && (u[c.id] = {
										...a[c.id],
										prev: Object(h.h)(n)
									}, l = c), u[o] = {
										...a[o],
										next: Object(h.h)(n)
									}, e = Object(h.g)(o), {
										...t,
										[r]: {
											...t[r],
											...u,
											[n]: {
												depth: s || 0,
												next: l,
												prev: e
											}
										}
									}
								}
							}
							return t
						}
						case S.G: {
							const {
								comment: n,
								commentsPageKey: r,
								headCommentId: s
							} = e.payload, o = t[r], c = {};
							let i = null;
							return s && (c[s] = {
								...o[s],
								prev: Object(h.g)(n.id)
							}, i = Object(h.g)(s)), {
								...t,
								[r]: {
									...t[r],
									...c,
									[n.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case S.F: {
							const {
								comment: n,
								commentsPageKey: r,
								parentCommentId: s,
								depth: o
							} = e.payload, c = t[r], i = {};
							let d = null;
							if (!c[s]) return t;
							const a = c[s].next;
							return a && (i[a.id] = {
								...c[a.id],
								prev: Object(h.g)(n.id)
							}, d = a), i[s] = {
								...c[s],
								next: Object(h.g)(n.id)
							}, {
								...t,
								[r]: {
									...t[r],
									...i,
									[n.id]: {
										depth: o,
										next: d,
										prev: Object(h.g)(s)
									}
								}
							}
						}
						default:
							return t
				}
			};
			const L = {};
			var U = (t = L, e) => {
				switch (e.type) {
					case I.b:
					case I.c:
					case S.G: {
						const {
							comment: n,
							commentsPageKey: r,
							isChatSort: s
						} = e.payload;
						return !1 === s ? t : {
							...t,
							[r]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = e.payload;
						return {
							...t,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return t
				}
			};
			const g = {};
			var k = (t = g, e) => {
				switch (e.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: r
						} = e.payload;
						return {
							...t,
							[n]: r
						}
					}
					case S.G: {
						const {
							parentId: n,
							commentsPageKey: r
						} = e.payload;
						return t[r] ? t : {
							...t,
							[r]: n
						}
					}
					default:
						return t
				}
			};
			e.a = Object(r.c)({
				api: f,
				keyToChatCommentLinks: A,
				keyToCommentThreadLinkSets: j,
				keyToHeadCommentId: U,
				keyToPostId: k,
				ads: c
			})
		},
		"./src/reddit/selectors/comments.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return O
			})), n.d(e, "d", (function() {
				return b
			})), n.d(e, "u", (function() {
				return T
			})), n.d(e, "w", (function() {
				return S
			})), n.d(e, "x", (function() {
				return I
			})), n.d(e, "k", (function() {
				return C
			})), n.d(e, "g", (function() {
				return A
			})), n.d(e, "F", (function() {
				return D
			})), n.d(e, "n", (function() {
				return N
			})), n.d(e, "o", (function() {
				return P
			})), n.d(e, "j", (function() {
				return h
			})), n.d(e, "l", (function() {
				return R
			})), n.d(e, "h", (function() {
				return y
			})), n.d(e, "a", (function() {
				return j
			})), n.d(e, "b", (function() {
				return L
			})), n.d(e, "q", (function() {
				return U
			})), n.d(e, "m", (function() {
				return g
			})), n.d(e, "t", (function() {
				return k
			})), n.d(e, "y", (function() {
				return F
			})), n.d(e, "H", (function() {
				return M
			})), n.d(e, "s", (function() {
				return x
			})), n.d(e, "A", (function() {
				return v
			})), n.d(e, "B", (function() {
				return G
			})), n.d(e, "D", (function() {
				return w
			})), n.d(e, "r", (function() {
				return Y
			})), n.d(e, "e", (function() {
				return B
			})), n.d(e, "v", (function() {
				return H
			})), n.d(e, "I", (function() {
				return K
			})), n.d(e, "f", (function() {
				return V
			})), n.d(e, "i", (function() {
				return q
			})), n.d(e, "E", (function() {
				return W
			})), n.d(e, "z", (function() {
				return $
			})), n.d(e, "G", (function() {
				return X
			})), n.d(e, "p", (function() {
				return z
			})), n.d(e, "J", (function() {
				return J
			})), n.d(e, "C", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeCommentPermalink/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/constants/comments.ts"),
				a = n("./src/reddit/models/Post/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				_ = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/comments/index.ts"),
				E = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(_.a)({
				features: {
					comments: f.a
				},
				pages: {
					comments: E.a
				}
			});
			const O = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.error[e],
				b = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.pending[e],
				T = (t, {
					commentsPageKey: e
				}) => t.pages.comments.api.fullyLoaded[e],
				S = (t, e) => t.pages.comments.keyToHeadCommentId[e.commentsPageKey],
				I = (t, e) => {
					const n = S(t, e);
					if (n) return Object(m.a)(t, {
						commentId: n
					})
				},
				p = [],
				C = Object(i.a)((t, e) => {
					const n = I(t, e),
						r = n && n.id;
					if (!r) return p;
					const {
						commentsPageKey: s
					} = e, o = t.pages.comments.keyToCommentThreadLinkSets[s], c = [];
					let i = {
						id: r,
						type: d.a.Comment
					};
					do {
						c.push(i), i = o[i.id].next
					} while (i);
					return c
				}),
				A = (t, e) => S(t, e) ? t.pages.comments.keyToChatCommentLinks[e.commentsPageKey] : [],
				D = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					return n ? t.posts.models[n] : null
				},
				N = (t, {
					commentId: e,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = t.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : e ? s[e] : null : null
				},
				P = (t, {
					commentsPageKey: e
				}) => t.pages.comments.keyToCommentThreadLinkSets[e],
				h = (t, e) => {
					const n = e.commentsPageKey ? N(t, e) : null;
					return n ? n.depth : null
				},
				R = (t, {
					commentLink: e
				}) => {
					const {
						id: n,
						type: r
					} = e;
					switch (r) {
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
				y = (t, e) => {
					if (t.platform.currentPage && t.platform.currentPage.urlParams && t.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: e
						} = t.platform.currentPage.urlParams, n = Object(a.r)(e);
						return Array.from(new Set(Object.keys(t.features.comments.models).filter(e => t.features.comments.models[e].postId === n && t.features.comments.models[e].author !== o.A).map(e => t.features.comments.models[e].author)))
					}
					return []
				},
				j = (t, {
					commentsPageKey: e
				}) => t.features.comments.collapsed[e],
				L = t => t.moreComments.models,
				U = t => t.features.comments.models,
				g = (t, {
					commentId: e
				}) => {
					const n = Object(m.a)(t, {
						commentId: e
					});
					return n ? Object(c.a)(Object(u.H)(t, n), e) : ""
				},
				k = (t, {
					commentId: e
				}) => !!(e && t.features.comments.focused && t.features.comments.focused[e]),
				F = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.isEditing[n] && t.features.comments.isEditing[n][e]),
				M = (t, {
					commentId: e,
					commentsPageKey: n
				}) => !!(e && t.features.comments.replyFormOpen[n] && t.features.comments.replyFormOpen[n][e]),
				x = (t, {
					commentsPageKey: e
				}) => {
					const n = e && t.features.comments.replyFormOpen[e] || {},
						r = Object.keys(n).find(t => n[t]),
						s = Object(m.a)(t, {
							commentId: r
						}),
						o = s && h(t, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: e
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				v = (t, {
					moreCommentsId: e
				}) => t.moreComments.models[e],
				G = (t, {
					moreCommentsId: e
				}) => !!t.moreComments.api.pending[e],
				w = (t, {
					commentsPageKey: e
				}) => {
					const n = t.pages.comments.keyToPostId[e];
					if (n) {
						const e = s()(t.moreComments.models).find(e => e.postId === n && 0 === e.depth && !(void 0 !== t.moreComments.api.pending[e.id]));
						if (e) return {
							moreCommentId: e.id,
							pending: !!t.moreComments.api.pending[e.id]
						}
					}
					return null
				},
				Y = (t, {
					id: e
				}) => t.continueThreads.models[e],
				B = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.models[e] : void 0;
					if (!n) return null;
					const r = t.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				H = (t, {
					draftKey: e
				}) => !!t.features.comments.submit.error[e],
				K = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.submit.error[e];
					return n && n.fields ? n.fields.map(t => t.msg) : []
				},
				V = (t, {
					draftKey: e
				}) => {
					const n = t.features.comments.drafts[e];
					return !!n && n.autofocusDisabled
				},
				q = (t, {
					draftKey: e
				}) => t.features.comments.drafts[e],
				W = (t, {
					commentId: e
				}) => {
					const n = e ? t.features.comments.submit.error[e] : void 0;
					return n && n.fields ? n.fields.map(t => t.msg) : void 0
				},
				$ = (t, {
					commentId: e
				}) => !!e && t.features.comments.submit.pending[e],
				X = (t, {
					commentId: e
				}) => !!e && t.features.comments.models[e].sendReplies,
				z = t => t.features.comments.visitHighlightFilter,
				J = (t, e) => {
					const n = Object(m.a)(t, e);
					if (n) return Object(l.X)(t, n)
				},
				Q = (t, {
					postId: e
				}) => t.features.comments.newCommentsCount[e] ? t.features.comments.newCommentsCount[e] : 0
		},
		"./src/reddit/selectors/userFlair.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return c
			})), n.d(e, "a", (function() {
				return i
			})), n.d(e, "d", (function() {
				return d
			})), n.d(e, "e", (function() {
				return a
			})), n.d(e, "b", (function() {
				return u
			}));
			var r = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/models/Flair/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts");
			const c = (t, {
					subredditId: e
				}) => t.userFlair[e],
				i = (t, {
					subredditId: e
				}) => !t.userFlair[e] || t.userFlair[e].displaySettings.isEnabled,
				d = (t, {
					subredditId: e
				}) => t.userFlair[e] ? t.userFlair[e].displaySettings.position : s.b.Right,
				a = Object(r.a)((t, {
					subredditId: e
				}) => {
					const n = c(t, {
						subredditId: e
					});
					if (n) return {
						type: s.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				u = (t, {
					subredditId: e
				}) => {
					const n = i(t, {
							subredditId: e
						}),
						r = a(t, {
							subredditId: e
						}),
						s = c(t, {
							subredditId: e
						});
					if (!n || !r || !s) return !1;
					if (s.applied) return !0;
					const d = Object(o.d)(t, {
							subredditId: e
						}),
						{
							canUserChange: u
						} = r.permissions;
					return !!s.templateIds.find(t => {
						return !s.templates[t].modOnly || d
					}) && u
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-Larg~9453fc9d.90b3102874752e01f737.js.map