// https://www.redditstatic.com/desktop2x/Governance~InFeedChaining~Reddit.54661b96c6c4b55dbb79.js
// Retrieved at 10/19/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~InFeedChaining~Reddit"], {
		"./src/graphql/operations/AllUserMultireddits.json": function(e) {
			e.exports = JSON.parse('{"id":"5ea7b64bc8a4"}')
		},
		"./src/graphql/operations/Frontpage.json": function(e) {
			e.exports = JSON.parse('{"id":"2a42d91744d4"}')
		},
		"./src/graphql/operations/MultiredditListing.json": function(e) {
			e.exports = JSON.parse('{"id":"24ab40e0f21d"}')
		},
		"./src/graphql/operations/SubredditRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"3c4d88474140"}')
		},
		"./src/graphql/operations/UserDataExportEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"3817c69d7a39"}')
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : "https://".concat(e)
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return j
			}));
			var r, i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/chat/endpoints/sendbird/index.ts"),
				o = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				d = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: u,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: p
			} = r, m = Object(n.a)(l), g = Object(n.a)(u), f = Object(n.a)(b), h = Object(n.a)(p);
			let y;
			const O = 5 * i.eb,
				j = () => async (e, t, s) => {
					let {
						apiContext: r
					} = s;
					const i = t();
					if (!Object(d.I)(i) || !Object(c.f)(i)) return clearTimeout(y);
					y || e((() => async (e, t, s) => {
						let {
							apiContext: r
						} = s;
						const i = t(),
							{
								session: n
							} = i.user;
						if (n && Object(d.I)(i) && Object(c.f)(i)) {
							e(f());
							const t = await Object(a.i)(r(), n);
							t && t.ok ? (e(h({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(o.c)())) : e(g({
								error: t.error
							}))
						}
					})()), y = setTimeout(() => {
						e(j())
					}, O)
				}
		},
		"./src/reddit/actions/dashboard.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const i = "DASHBOARD__COMPONENT_SELECTED",
				n = "DASHBOARD__SUBREDDIT_SELECTED",
				a = "DASHBOARD__SUBREDDIT_LOADED",
				o = Object(r.a)(i),
				c = Object(r.a)(n),
				d = Object(r.a)(a)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			}));
			var r = s("./src/config.ts"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/sentry/index.ts"),
				o = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/formatApiError/index.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = s("./src/reddit/endpoints/gold/purchase.ts"),
				b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(n.a)(m.r),
				f = Object(n.a)(m.e),
				h = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = Object(p.a)(s()),
						l = (null == a ? void 0 : a.pennies) || o.ob,
						m = Object(b.c)(b.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const g = await t(Object(d.validateAndCreateStripeToken)(e));
					if (g) try {
						const e = await Object(u.g)({
							context: n(),
							correlationId: m,
							pennies: l,
							token: g
						});
						if (e.error) {
							const s = Object(c.a)(e.error);
							t(Object(d.stripeApiError)(s))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(c.a)(f);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = i.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, y = "PREMIUM_PURCHASE_MODAL__PAYMENT_BLOB_CREATED", O = Object(n.a)(y), j = e => {
					let {
						packageId: t,
						correlationId: s
					} = e;
					return async (e, i, n) => {
						let {
							apiContext: o
						} = n;
						e(g({
							packageId: t,
							correlationId: s
						}));
						const u = Object(p.a)(i()),
							b = (null == u ? void 0 : u.paypalButtonId) || r.a.paypal.buttons.premium;
						if (b) try {
							const t = await Object(l.f)({
								buttonId: b,
								context: o(),
								correlationId: s
							});
							if (t.error) {
								const s = Object(c.a)(t.error);
								e(Object(d.paypalApiError)(s))
							} else e(O(t))
						} catch (m) {
							const t = Object(c.a)(m);
							e(Object(d.paypalApiError)(t))
						} else a.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const i = "INBOX__COUNT_UPDATE",
				n = Object(r.a)(i)
		},
		"./src/reddit/actions/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return r
			})), s.d(t, "r", (function() {
				return i
			})), s.d(t, "s", (function() {
				return n
			})), s.d(t, "t", (function() {
				return a
			})), s.d(t, "u", (function() {
				return o
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "n", (function() {
				return h
			})), s.d(t, "o", (function() {
				return y
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "A", (function() {
				return _
			})), s.d(t, "B", (function() {
				return E
			})), s.d(t, "z", (function() {
				return x
			})), s.d(t, "y", (function() {
				return v
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "d", (function() {
				return P
			}));
			const r = "MULTIREDDIT__MORE_POSTS_FAILED",
				i = "MULTIREDDIT__MORE_POSTS_LOADED",
				n = "MULTIREDDIT__MORE_POSTS_PENDING",
				a = "MULTIREDDIT__MY_MULTIREDDITS_PENDING",
				o = "MULTIREDDIT__MY_MULTIREDDITS_RECEIVED",
				c = "MULTIREDDIT__CREATE_FAILURE",
				d = "MULTIREDDIT__CREATE_PENDING",
				l = "MULTIREDDIT__CREATE_SUCCESS",
				u = "MULTIREDDIT__DELETE_PENDING",
				b = "MULTIREDDIT__DELETE_SUCCESS",
				p = "MULTIREDDIT__DELETE_FAILURE",
				m = "MULTIREDDIT__DUPLICATE_PENDING",
				g = "MULTIREDDIT__DUPLICATE_SUCCESS",
				f = "MULTIREDDIT__DUPLICATE_FAILURE",
				h = "MULTIREDDIT__EDIT_FAILURE",
				y = "MULTIREDDIT__EDIT_PENDING",
				O = "MULTIREDDIT__EDIT_SUCCESS",
				j = "MULTIREDDIT__ADD_SUBREDDIT_FAILURE",
				k = "MULTIREDDIT__ADD_SUBREDDIT_PENDING",
				w = "MULTIREDDIT__ADD_SUBREDDIT_SUCCESS",
				_ = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_PENDING",
				E = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_SUCCESS",
				x = "MULTIREDDIT__SUBREDDIT_RECOMMENDATIONS_FAILURE",
				v = 10,
				I = "MULTIREDDIT__REMOVE_SUBREDDIT_FAILURE",
				D = "MULTIREDDIT__REMOVE_SUBREDDIT_PENDING",
				T = "MULTIREDDIT__REMOVE_SUBREDDIT_SUCCESS";
			var P;
			! function(e) {
				e.InvalidSrQuarantine = "INVALID_SR_QUARANTINE", e.TooManySubreddits = "MULTI_TOO_MANY_SUBREDDITS"
			}(P || (P = {}))
		},
		"./src/reddit/actions/multireddit/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return F
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "b", (function() {
				return Q
			})), s.d(t, "d", (function() {
				return $
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "i", (function() {
				return ae
			})), s.d(t, "c", (function() {
				return le
			})), s.d(t, "e", (function() {
				return me
			})), s.d(t, "h", (function() {
				return ye
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/lib/makeListingKey/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				b = s("./src/reddit/actions/page.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/constants/parameters.ts"),
				g = s("./src/lib/makeApiRequest/index.ts"),
				f = s("./src/lib/omitHeaders/index.ts"),
				h = s("./src/reddit/constants/headers.ts"),
				y = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				O = s("./src/graphql/operations/AllUserMultireddits.json"),
				j = s("./src/lib/makeGqlRequest/index.ts"),
				k = (e, t) => Object(j.a)(e, Object.assign(Object.assign({}, O), {
					variables: t
				})),
				w = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				_ = s("./src/graphql/operations/SubredditRecommendations.json"),
				E = s("./src/reddit/helpers/filterListingResponse/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				D = (s("./node_modules/core-js/modules/es6.regexp.split.js"), e => {
					let t = e.over_18 || !1;
					if (!t)
						for (const a of e.subreddits)
							if (a.data.over_18) {
								t = !0;
								break
							} let s = e.quarantine || !1;
					if (!s)
						for (const a of e.subreddits) {
							const e = (a.data.audience_target || "").split(",");
							if (a.data.quarantine || e.indexOf("unsafe") > -1) {
								s = !0;
								break
							}
						}
					const r = e.subreddits.map(e => {
							const t = e.data,
								{
									name: s,
									display_name: r
								} = t;
							return {
								id: s,
								displayName: r.toLowerCase()
							}
						}).sort((e, t) => e.displayName.localeCompare(t.displayName)),
						i = r.filter(e => !e.displayName.startsWith(o.Ub)).map(e => e.id),
						n = r.filter(e => e.displayName.startsWith(o.Ub)).map(e => e.id);
					return {
						created: e.created_utc,
						description: e.description_md,
						descriptionHtml: e.description_html,
						descriptionRtJson: null,
						displayText: e.display_name,
						followerCount: e.num_subscribers,
						icon: e.icon_url,
						isFavorited: !!e.is_favorited,
						isFollowed: !1,
						isNSFW: t,
						isQuarantined: s,
						name: e.name,
						ownerId: e.owner_id,
						profileIds: n,
						subredditCount: e.subreddits.length,
						subredditIds: i,
						url: e.path.toLowerCase(),
						visibility: e.visibility
					}
				}),
				T = s("./src/reddit/models/Multireddit/index.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				C = s("./src/reddit/selectors/multireddit.ts"),
				S = s("./src/reddit/selectors/platform.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				R = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				U = s("./src/reddit/actions/multireddit/constants.ts");
			const L = Object(d.a)(U.q),
				M = Object(d.a)(U.r),
				q = Object(d.a)(U.s),
				F = e => async (t, s, r) => {
					const {
						gqlContext: i
					} = r, {
						sort: n = o.O.HOT,
						multiredditName: a,
						username: c
					} = e, d = s(), u = d.platform.currentPage, b = u ? u.queryParams : {}, p = Object(C.d)(d, {
						multiredditName: a,
						username: c
					}), m = Object(l.a)(p.url, n, b), g = d.listings.postOrder.loadMore[m];
					if (!g) return;
					const f = d.listings.postOrder.api.pending[m],
						h = d.listings.postOrder.fetchedTokens,
						y = h[m] && h[m][g.token] || !1;
					if (f || y) return;
					t(q({
						key: m,
						fetchedToken: g.token
					}));
					const O = p.url.replace(/\/$/, ""),
						j = b.t ? b.t.toUpperCase() : void 0,
						k = {
							after: g.token,
							includeIdentity: !1,
							includeSources: !1,
							path: O,
							range: j,
							sort: n.toUpperCase()
						},
						_ = await Object(w.a)(i(), k),
						{
							data: x
						} = _.body,
						I = Object(v.a)(x);
					_.ok && x && x.multireddit ? t(M(Object.assign(Object.assign(Object.assign({
						fetchedToken: g.token,
						key: m,
						meta: d.meta
					}, I), Object(E.a)(d, m, I)), {
						multiredditsModelsState: d.multireddits.models
					}))) : t(L(Object.assign(Object.assign({
						error: {
							type: o.E.NOT_FOUND_ERROR
						},
						fetchedToken: g.token,
						key: m
					}, _.body), Object(E.a)(d, m, I))))
				}, G = Object(d.a)(U.t), z = Object(d.a)(U.u), B = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (s, r, i) => {
						let {
							apiContext: n,
							gqlContext: a
						} = i;
						const o = r();
						if (!Object(A.i)(o)) return;
						if (!e && Object(C.h)(o) || Object(C.i)(o)) return;
						s(G());
						const c = await k(a(), {
							includeSources: t
						});
						if (c.ok) {
							const e = c.body.data.identity.allMultireddits.edges.map(e => e.node),
								t = Object(x.b)(e);
							s(z(Object.assign(Object.assign({}, t), {
								multiredditsModelsState: o.multireddits.models
							})))
						}
					}
				}, H = Object(d.a)(U.e), K = Object(d.a)(U.f), V = Object(d.a)(U.g), Q = e => {
					let {
						description: t,
						displayName: s,
						shouldNavigate: i
					} = e;
					return async (e, n, c) => {
						let {
							apiContext: d
						} = c;
						const l = n(),
							b = Object(A.i)(l);
						if (!b) return;
						e(K());
						const m = await ((e, t, s) => Object(g.a)(Object(f.a)(e, [h.a]), {
							endpoint: Object(y.a)("".concat(e.apiUrl, "/api/multi")),
							data: {
								model: JSON.stringify({
									description_md: s,
									display_name: t,
									visibility: "private",
									subreddits: []
								})
							},
							method: o.db.POST
						}))(d(), s, t);
						if (m.ok) {
							const {
								id: t
							} = b;
							if (await e(V({
									multireddit: D(m.body.data),
									multiredditsModelsState: l.multireddits.models,
									userId: t
								})), i) {
								e(Object(u.f)());
								const t = m.body.data.path.toLowerCase();
								await e(Object(a.b)(t))
							}
							e(Object(p.e)({
								text: r.fbt._("Custom feed created!", null, {
									hk: "258cY9"
								})
							}))
						} else e(H(m.error))
					}
				}, W = () => async (e, t, s) => {
					let {
						apiContext: r
					} = s;
					const i = t(),
						a = Object(A.i)(i),
						c = Object(S.i)(i) ? Object(S.m)(i) : Object(S.b)(i),
						d = c && c.routeMatch && c.routeMatch.match;
					if (!d) return;
					const u = d.params,
						p = u.sort || o.O.HOT,
						{
							multiredditName: g,
							username: f
						} = u;
					if (!g) return;
					const h = Object(T.h)((f || a && a.displayText || "").toLowerCase(), g.toLowerCase()),
						{
							queryParams: y
						} = d,
						O = Object(l.a)(h, p, y),
						j = m.x in y && y[m.x].toUpperCase() || "",
						k = o.Sb[j] || !1,
						w = Object(A.i)(i);
					(f || w && w.displayText) && await e(Object(b.B)(O, (f || w.displayText).toLowerCase(), g.toLowerCase(), Object.assign(Object.assign(Object.assign({}, n()(y, m.l)), n()(y, m.k)), {
						sort: p,
						t: Object(R.a)(p, k)
					})))
				}, Y = Object(d.a)(U.k), J = Object(d.a)(U.l), X = Object(d.a)(U.m), $ = e => {
					let {
						description: t,
						displayName: s,
						fromName: i,
						fromUsername: n
					} = e;
					return async (e, c, d) => {
						let {
							apiContext: l
						} = d;
						const b = c(),
							m = Object(A.i)(b);
						if (!m || !m.displayText) return;
						const O = Object(T.h)((n || m.displayText).toLowerCase(), i.toLowerCase());
						e(J());
						const j = await ((e, t) => Object(g.a)(Object(f.a)(e, [h.a]), {
							endpoint: Object(y.a)("".concat(e.apiUrl, "/api/multi/copy")),
							data: {
								description_md: t.description,
								display_name: t.displayName,
								expand_srs: !0,
								from: t.from
							},
							method: o.db.POST
						}))(l(), {
							from: O,
							displayName: s,
							description: t
						});
						if (j.ok) {
							const t = D(j.body.data);
							e(Object(u.f)()), e(X({
								multireddit: t,
								multiredditsModelsState: b.multireddits.models,
								userId: m.id
							})), e(Object(p.e)({
								text: r.fbt._("Custom feed duplicated!", null, {
									hk: "2u48X"
								}),
								buttonText: r.fbt._("Go there", null, {
									hk: "4sXZMm"
								}),
								buttonAction: Object(a.b)(t.url)
							}))
						} else e(Y(j.error)), e(Object(p.e)({
							text: r.fbt._("Something went wrong duplicating {multiName}", [r.fbt._param("multiName", i)], {
								hk: "4bzN2D"
							})
						}))
					}
				}, Z = Object(d.a)(U.b), ee = Object(d.a)(U.c), te = Object(d.a)(U.a), se = e => {
					let {
						communityInfo: t,
						identifier: s,
						multiredditNames: i
					} = e;
					return async (e, n, a) => {
						let {
							apiContext: d
						} = a;
						const l = n(),
							b = Object(A.i)(l);
						if (!b || l.multireddits.api.addSubreddit.pending) return;
						e(Z({
							name: s.name
						}));
						const {
							displayText: m
						} = b;
						if (!m) return;
						const O = i.map(e => "/user/".concat(m.toLowerCase(), "/m/").concat(e.toLowerCase())).join(","),
							j = "".concat("profile" === s.type ? o.Ub : "").concat(s.name),
							k = await ((e, t, s) => Object(g.a)(Object(f.a)(e, [h.a]), {
								endpoint: Object(y.a)("".concat(e.apiUrl, "/api/multi/bulk_add/r/").concat(t)),
								data: {
									paths: s
								},
								method: o.db.PUT
							}))(d(), j, O);
						if (k.ok) {
							const n = Object(N.L)(l, {
									identifier: s
								}) || t && t.id || "",
								a = i.map(e => Object(T.h)(m, e));
							e(Object(u.f)()), e(Object(p.e)({
								text: r.fbt._({
									"*": "Successfully added {communityName} to {number} custom feeds!",
									_1: "Successfully added {communityName} to 1 custom feed!"
								}, [r.fbt._param("communityName", "".concat("subreddit" === s.type ? c.d.subreddit : c.d.profile).concat(s.name)), r.fbt._plural(i.length, "number")], {
									hk: "9EXsM"
								})
							})), await e(ee({
								communityInfo: t,
								id: n,
								multipaths: a,
								type: s.type
							})), 1 === i.length && await e(W())
						} else {
							e(te(k.error));
							let t = r.fbt._("Sorry, something went wrong adding {subredditName}.", [r.fbt._param("subredditName", s.name)], {
								hk: "ERdWO"
							});
							k.body && (k.body.reason === U.d.TooManySubreddits ? t = r.fbt._("Maximum communities reached", null, {
								hk: "2eguyW"
							}) : k.body.reason === U.d.InvalidSrQuarantine && (t = r.fbt._("{communityname} is invalid because it is quarantined", [r.fbt._param("communityname", "".concat("subreddit" === s.type ? c.d.subreddit : c.d.profile).concat(s.name))], {
								hk: "407xmS"
							}))), e(Object(p.e)({
								text: t,
								kind: P.b.Error
							}))
						}
					}
				}, re = Object(d.a)(U.w), ie = Object(d.a)(U.x), ne = Object(d.a)(U.v), ae = e => {
					let {
						id: t,
						multiredditName: s,
						name: i,
						type: n
					} = e;
					return async (e, a, c) => {
						let {
							apiContext: d
						} = c;
						const l = a(),
							b = Object(A.i)(l);
						if (!b || !b.displayText || l.multireddits.api.removeSubreddit.pending) return;
						e(re({
							id: t
						}));
						const {
							displayText: m
						} = b, O = Object(T.h)(m, s), j = "".concat("profile" === n ? o.Ub : "").concat(i), k = await ((e, t, s) => Object(g.a)(Object(f.a)(e, [h.a]), {
							endpoint: Object(y.a)("".concat(e.apiUrl, "/api/multi").concat(s, "r/").concat(t)),
							method: o.db.DELETE
						}))(d(), j, O);
						k.ok ? (e(Object(u.f)()), e(ie({
							id: t,
							multipath: O,
							type: n
						})), e(Object(p.e)({
							text: r.fbt._("{subredditname} removed from your custom feed!", [r.fbt._param("subredditname", i)], {
								hk: "uaWNe"
							}),
							buttonText: r.fbt._("undo", null, {
								hk: "3HH7IT"
							}),
							buttonAction: se({
								identifier: {
									name: i,
									type: n
								},
								multiredditNames: [s]
							})
						})), e(W())) : (e(ne(k.error)), e(Object(p.e)({
							text: r.fbt._("Sorry, something went wrong removing {subredditName}.", [r.fbt._param("subredditName", i)], {
								hk: "1E1rKm"
							})
						})))
					}
				}, oe = Object(d.a)(U.h), ce = Object(d.a)(U.i), de = Object(d.a)(U.j), le = e => async (t, s, i) => {
					let {
						apiContext: n
					} = i;
					const c = s();
					if (!Object(A.i)(c)) return;
					t(ce());
					const d = await ((e, t) => Object(g.a)(Object(f.a)(e, [h.a]), {
						endpoint: Object(y.a)("".concat(e.apiUrl, "/api/multi").concat(t)),
						method: o.db.DELETE
					}))(n(), e);
					d.ok ? (await t(de(e)), t(Object(u.f)()), await t(Object(a.b)("/")), t(Object(p.e)({
						text: r.fbt._("Custom feed deleted!", null, {
							hk: "aWGMo"
						})
					}))) : t(oe(d.error))
				}, ue = Object(d.a)(U.n), be = Object(d.a)(U.o), pe = Object(d.a)(U.p), me = e => {
					let {
						description: t,
						displayText: s,
						multipath: i,
						visibility: n
					} = e;
					return async (e, a, c) => {
						let {
							apiContext: d
						} = c;
						const l = a();
						if (!Object(A.I)(l)) return;
						e(be());
						const b = await (e => {
							let {
								context: t,
								description: s,
								displayText: r,
								multipath: i,
								visibility: n
							} = e;
							return Object(g.a)(Object(f.a)(t, [h.a]), {
								endpoint: Object(y.a)("".concat(t.apiUrl, "/api/multi").concat(i)),
								data: {
									model: JSON.stringify({
										description_md: s,
										display_name: r,
										visibility: n
									}),
									expand_srs: !0
								},
								method: o.db.PUT
							})
						})({
							context: d(),
							description: t,
							displayText: s,
							multipath: i,
							visibility: n
						});
						b.ok ? (await e(pe(D(b.body.data))), e(Object(u.f)()), e(Object(p.e)({
							text: r.fbt._("Custom feed updated!", null, {
								hk: "39R30f"
							})
						}))) : (e(ue(b.error)), e(Object(p.e)({
							kind: P.b.Error,
							text: r.fbt._("Something went wrong", null, {
								hk: "1Y6lli"
							})
						})))
					}
				}, ge = Object(d.a)(U.z), fe = Object(d.a)(U.A), he = Object(d.a)(U.B), ye = e => {
					let {
						multiredditName: t,
						username: s,
						toExcludeNames: r
					} = e;
					return async (e, i, n) => {
						let {
							gqlContext: a
						} = n;
						const o = i(),
							c = Object(A.i)(o);
						if (!(s || c && c.displayText)) return;
						const d = Object(T.h)(s || c.displayText, t),
							l = o.multireddits.models[d];
						if (!l || !l.subredditIds) return;
						e(fe());
						const u = r && r.reduce((e, t) => {
								const s = Object(N.G)(o, t) || Object(N.H)(o, t);
								return s ? [...e, s] : e
							}, []),
							b = await ((e, t) => Object(j.a)(e, Object.assign(Object.assign({}, _), {
								variables: t
							})))(a(), {
								count: U.y,
								subredditIds: l.subredditIds,
								toExclude: u
							});
						if (b.ok) {
							const {
								data: t
							} = b.body;
							e(he({
								multipath: d,
								subreddits: Object(I.b)(t)
							}))
						} else e(ge(b.error))
					}
				}
		},
		"./src/reddit/actions/page.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return Je
			})), s.d(t, "i", (function() {
				return Xe
			})), s.d(t, "G", (function() {
				return $e
			})), s.d(t, "h", (function() {
				return Ze
			})), s.d(t, "g", (function() {
				return et
			})), s.d(t, "f", (function() {
				return tt
			})), s.d(t, "w", (function() {
				return nt
			})), s.d(t, "y", (function() {
				return ct
			})), s.d(t, "d", (function() {
				return dt
			})), s.d(t, "b", (function() {
				return lt
			})), s.d(t, "a", (function() {
				return ut
			})), s.d(t, "s", (function() {
				return pt
			})), s.d(t, "r", (function() {
				return mt
			})), s.d(t, "t", (function() {
				return gt
			})), s.d(t, "q", (function() {
				return ft
			})), s.d(t, "c", (function() {
				return ht
			})), s.d(t, "z", (function() {
				return Ot
			})), s.d(t, "A", (function() {
				return jt
			})), s.d(t, "n", (function() {
				return kt
			})), s.d(t, "F", (function() {
				return wt
			})), s.d(t, "x", (function() {
				return Et
			})), s.d(t, "l", (function() {
				return xt
			})), s.d(t, "k", (function() {
				return vt
			})), s.d(t, "j", (function() {
				return It
			})), s.d(t, "B", (function() {
				return Ct
			})), s.d(t, "C", (function() {
				return St
			})), s.d(t, "e", (function() {
				return Nt
			})), s.d(t, "p", (function() {
				return At
			})), s.d(t, "o", (function() {
				return Rt
			})), s.d(t, "D", (function() {
				return Ut
			})), s.d(t, "E", (function() {
				return Lt
			})), s.d(t, "u", (function() {
				return Mt
			})), s.d(t, "v", (function() {
				return qt
			})), s.d(t, "H", (function() {
				return Ft
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/lodash/pick.js"),
				n = s.n(i),
				a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/getParsedUserAgent/index.ts"),
				d = s("./src/reddit/actions/category/index.ts"),
				l = s("./src/reddit/actions/discoveryUnit.ts"),
				u = s("./src/reddit/actions/focusedVerticals/index.ts"),
				b = s("./src/reddit/actions/multireddit/index.ts"),
				p = s("./src/reddit/actions/pages/subreddit.ts"),
				m = s("./src/reddit/actions/pages/userDataRequest/index.ts"),
				g = s("./src/reddit/actions/shortcuts/active.ts"),
				f = s("./src/reddit/actions/subredditSettings.ts"),
				h = s("./src/reddit/endpoints/governance/posts.ts"),
				y = s("./src/reddit/endpoints/page/commentsPage.ts"),
				O = s("./src/reddit/endpoints/page/frontpage.ts"),
				j = s("./src/reddit/endpoints/page/multiredditListing.ts"),
				k = s("./src/reddit/endpoints/page/subredditPage.ts"),
				w = s("./src/reddit/endpoints/profile/info.ts"),
				_ = s("./src/reddit/models/Gold/ProductOffer.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				v = (s("./src/lib/makeDraftKey/index.ts"), s("./src/lib/opener/index.ts")),
				I = s("./src/lib/pageTitle.ts"),
				D = (s("./src/reddit/models/PostDraft/index.ts"), s("./src/reddit/actions/dashboard.ts"), s("./src/reddit/actions/economics/helpers/async.ts")),
				T = s("./src/reddit/actions/externalAccount.ts"),
				P = s("./src/reddit/actions/gold/modals.ts"),
				C = s("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				S = s("./src/reddit/actions/login.ts"),
				N = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				A = s("./src/config.ts"),
				R = s("./src/lib/makeActionCreator/index.ts"),
				U = s("./src/reddit/actions/platform.ts"),
				L = s("./src/reddit/endpoints/me/index.ts"),
				M = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				q = s("./src/reddit/actions/pages/appeal/constants.ts");
			const F = "".concat(A.a.redditHelpUrl, "/en/categories/rules-reporting/account-and-community-restrictions/my-account-was-suspended-or-locked"),
				G = Object(R.a)(q.b),
				z = Object(R.a)(q.a);
			var B = s("./src/reddit/actions/post.ts"),
				H = s("./src/reddit/actions/profile/index.ts"),
				K = s("./src/reddit/actions/redditEmbed.ts"),
				V = s("./src/reddit/actions/subreddit.ts"),
				Q = s("./src/reddit/actions/toaster.ts"),
				W = s("./src/reddit/actions/users.ts"),
				Y = s("./src/reddit/constants/adEvents.ts"),
				J = s("./src/reddit/constants/graphql.ts"),
				X = s("./src/reddit/constants/page.ts"),
				$ = s("./src/reddit/constants/parameters.ts"),
				Z = s("./src/reddit/constants/postLayout.ts"),
				ee = s("./src/reddit/constants/posts.ts"),
				te = s("./src/reddit/contexts/PageLayer/index.tsx"),
				se = s("./src/reddit/helpers/commentList/index.ts"),
				re = s("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				ie = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				ne = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				ae = s("./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts"),
				oe = s("./src/reddit/models/Comment/index.ts"),
				ce = s("./src/reddit/models/Media/index.ts"),
				de = s("./src/reddit/models/Multireddit/index.ts"),
				le = s("./src/reddit/models/Subreddit/index.ts"),
				ue = s("./src/reddit/models/Toast/index.ts"),
				be = s("./src/reddit/models/User/index.ts"),
				pe = s("./src/reddit/selectors/category.ts"),
				me = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				ge = s("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				fe = s("./src/reddit/selectors/experiments/goldSubredditPowerups.ts"),
				he = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				ye = s("./src/reddit/selectors/experiments/postSeo.ts"),
				Oe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				je = s("./src/reddit/selectors/frontpage.ts"),
				ke = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				we = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				_e = s("./src/reddit/selectors/multireddit.ts"),
				Ee = s("./src/reddit/selectors/platform.ts"),
				xe = s("./src/reddit/selectors/posts.ts"),
				ve = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				Ie = s("./src/reddit/selectors/seo/index.ts"),
				De = s("./src/reddit/selectors/subreddit.ts"),
				Te = s("./src/reddit/selectors/user.ts"),
				Pe = s("./src/lib/makeCommentsPageKey/index.ts"),
				Ce = s("./src/lib/makeListingKey/index.ts"),
				Se = s("./src/lib/matchRoute/index.ts"),
				Ne = s("./src/reddit/actions/ads/index.ts"),
				Ae = s("./src/reddit/helpers/canonicalUrls.ts"),
				Re = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ue = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Le = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Me = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				qe = s("./src/reddit/actions/gold/powerups.ts"),
				Fe = s("./src/reddit/actions/gold/productOffers.ts"),
				Ge = s("./src/reddit/actions/seo/linksModule.ts"),
				ze = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				Be = s("./src/reddit/constants/experiments.ts");
			const He = e => {
				var t, s;
				const r = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					i = r && Object(E.m)(r),
					{
						sortToUse: n
					} = Object(ie.a)(e, i);
				return (!n || n === x.r.CONFIDENCE) && Object(Re.c)(e, {
					experimentEligibilitySelector: () => Object(Te.H)(e),
					experimentName: Be.j
				}) === Be.m.Enabled
			};
			var Ke = s("./src/reddit/selectors/chatPost.ts"),
				Ve = s("./src/reddit/selectors/realtimeComments.ts"),
				Qe = s("./src/reddit/selectors/seo/linksModule.ts"),
				We = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				Ye = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			s("./src/reddit/actions/publicAccessNetwork/streams.ts");
			const Je = 25,
				Xe = 100,
				$e = function(e) {
					let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					return async (s, r, i) => {
						let {
							routes: n
						} = i;
						const o = r();
						Object(Se.a)(e, n, o) ? s(Object(a.b)(e)) : t ? Object(v.d)(e, "_blank") : window.location.assign(e)
					}
				},
				Ze = "PAGE__FRONTPAGE_PENDING",
				et = "PAGE__FRONTPAGE_LOADED",
				tt = "PAGE__FRONTPAGE_FAILED",
				st = Object(R.a)(Ze),
				rt = Object(R.a)(et),
				it = Object(R.a)(tt),
				nt = (e, t) => async (s, i, n) => {
					const a = i();
					if (a.listings.postOrder.api.pending[e]) return;
					const o = Z.e[Object(te.N)(a, {})];
					t.isMobile = Object(c.e)(a.meta.userAgent), t.recentPostIds = a.posts.recent, t.layout = o, t.useMockData = !!a.platform.currentPage && (!!a.platform.currentPage.queryParams.useMockData && Object(ve.b)(a)), s(st({
						key: e
					})); {
						const e = a.platform.currentPage,
							s = e && e.url;
						s && (t.clickUrl = s)
					}
					const d = await Object(Le.a)("index", () => Object(O.a)(n.gqlContext(), Object(O.b)(a, t), Object(Te.P)(a), t.statsdPathsForExperiments));
					s(Object(U.m)(d.status));
					const l = "error-".concat(e);
					if (d.ok) {
						const t = d.body;
						s(rt(Object.assign({
							key: e,
							meta: a.meta
						}, t))), s(Q.f(l)), s(Object(Ne.b)(Me.a.FRONTPAGE))
					} else s(it(Object.assign({
						error: d.error,
						key: e
					}, d.body))), s(Q.e({
						id: l,
						kind: ue.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: nt(e, t)
					}))
				}, at = (e, t) => async (s, r) => {
					const i = r(),
						a = Object(je.a)(i),
						{
							sort: o = a
						} = e.params,
						c = Object(Ce.a)(X.a, o, e.queryParams),
						d = i.listings.postOrder.ids[c],
						l = i.listings.postOrder.api.error[c],
						u = i.listings.postOrder.api.pending[c],
						b = $.x in e.queryParams && e.queryParams[$.x].toUpperCase() || "",
						p = b in x.Sb && x.Sb[b];
					if (u || d && !l && !t) return void(d && (s(U.l({
						title: I.c()
					})), i.sidebarPromotedPosts.firstFetch || window.addEventListener("load", () => {
						s(Object(Ne.b)(Me.a.FRONTPAGE))
					})));
					const m = Object(re.a)(i),
						g = Object(re.b)(m),
						f = [Object(re.c)(m)];
					await s(nt(c, Object.assign(Object.assign(Object.assign({}, n()(e.queryParams, $.l)), n()(e.queryParams, $.k)), {
						limit: g,
						sort: o,
						statsdPathsForExperiments: f,
						t: Object(ne.a)(o, p)
					}))), s(U.l({
						title: I.c()
					})), Object(Re.c)(i, {
						experimentEligibilitySelector: Re.a,
						experimentName: "redesign_aa"
					});
					const h = Object(ge.a)(i, {});
					Object(ge.e)(h) && s(Object(S.i)())
				}, ot = () => async (e, t) => {
					const s = t();
					if (!Object(Qe.a)(s)) return e(Object(Ge.c)())
				}, ct = (e, t) => async (s, r, i) => {
					let {
						apiContext: n
					} = i;
					await Promise.all([s(Object(u.b)()), s(at(e, t)), s(ot()), s(Object(We.c)(Ye.R))])
				}, dt = "PAGE__COMMENTSPAGE_PENDING", lt = "PAGE__COMMENTSPAGE_LOADED", ut = "PAGE__COMMENTSPAGE_FAILED", bt = Object(R.a)(dt), pt = Object(R.a)(lt), mt = Object(R.a)(ut), gt = e => async (t, s) => {
					const {
						partialPostId: r,
						partialCommentId: i
					} = e.params, {
						subredditName: n
					} = e.params || "", o = r ? Object(E.m)(r) : "", c = i && Object(oe.f)(i), {
						path: l,
						queryParams: u
					} = e, b = Object(N.d)(l), p = s(), {
						instanceId: m
					} = u, {
						hasSortParam: f,
						sortToUse: h
					} = Object(ie.a)(p, o), y = ["context", "depth", "limit", $.f].reduce((e, t) => {
						const s = parseInt(u[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: n,
						hasSortParam: f,
						instanceId: m,
						include_categories: !0
					});
					f && (y.sort = h), y.onOtherDiscussions = b, t(B.l(o)), await t(ft(o, c, y, h));
					const O = s().posts.models[o],
						j = Object(Te.I)(s());
					if (O && "subreddit" === O.belongsTo.type && Object(fe.a)(p)) {
						const e = O.belongsTo.id,
							s = [...j ? [t(Object(qe.g)())] : [], t(Object(qe.f)(e, {
								fullData: !0
							})), t(Object(Fe.a)(e, _.a.Powerups))];
						await Promise.all(s)
					}
					if (O) {
						const r = ((e, t) => {
								const s = Object(xe.ab)(e, {
										postId: t
									}),
									r = Object(xe.N)(e, {
										postId: t
									});
								if (!s || !r) return "";
								const i = e.posts.models[t].title;
								return "".concat(i, " : ").concat(s.name)
							})(s(), o),
							i = Object(De.M)(s(), {
								identifier: O.belongsTo
							});
						if ((O.media && O.media.type) === ce.o.LIVEVIDEO) {
							const e = Object(Oe.d)(p),
								s = O.belongsTo.type === ee.a.SUBREDDIT,
								r = e && s ? i.url : "/",
								n = Object(E.n)(O.id),
								o = "/rpan".concat(r).concat(n);
							return void t(Object(a.c)(o))
						}
						if (O.belongsTo.type !== ee.a.SUBREDDIT || O.isSponsored) O.belongsTo.type === ee.a.PROFILE && await t(H.d(i.name));
						else {
							!!Object(De.R)(p, {
								subredditId: O.belongsTo.id
							}) || await t(V.o(i.name))
						}
						const n = Object(he.b)(p),
							c = !!Object(Ie.b)(p, {
								identifier: O.belongsTo
							}),
							l = !!n,
							u = b,
							m = !l && (c || !0) && (!Object(le.g)(i) && !Object(Ke.d)(p, {
								postId: o
							}) && !!i || !Object(Ee.i)(p) && Object(ye.d)(p)),
							f = !!Object(ye.b)(p, O, !1) && !1;
						if (u || m || l || f) {
							Object(Ue.d)(Ue.a.LinkedPosts);
							const e = Object(Ue.c)(Ue.a.LinkedPosts),
								s = {
									adContext: {
										layout: J.a.Card,
										reddaid: p.user.reddaid,
										sourcePostId: o
									},
									range: x.Sb.WEEK.toUpperCase(),
									sort: x.I.TOP,
									subredditName: i.name
								},
								r = {
									postId: o
								},
								n = {
									correlationId: e
								},
								a = t(Object(ze.a)(Object.assign(Object.assign(Object.assign(Object.assign({}, r), s), n), {
									includePostImageOCRAltText: f,
									includeListingBelowExperiment: l,
									includeOtherDiscussions: u,
									includePostFeed: m
								})));
							(m && c || f) && await a
						}
						t(Object(T.p)()), t(U.l({
							title: r
						}));
						const h = s().posts.instances[o] ? e.queryParams.instanceId : O.postId;
						t(Object(g.b)(h)); {
							const e = Object(pe.d)(s(), {
								subredditName: i.name
							});
							await Promise.all(e.map(e => t(d.c(e))))
						}
					} else t(U.l({
						title: I.c()
					}));
					const {
						routePrefix: k
					} = e.params;
					ee.b[k] === ee.a.PROFILE ? Object(Ae.d)(s(), t, e) : Object(Ae.b)(s(), t, e)
				}, ft = (e, t, s, r) => async (i, n, a) => {
					var o;
					const c = n(),
						d = Object(Pe.a)(e, t, s),
						{
							subredditName: u
						} = s,
						b = c.commentsPage.keyToHeadCommentId.hasOwnProperty(d),
						m = c.commentsPage.api.fullyLoaded[d],
						g = c.commentsPage.api.error[d],
						f = c.commentsPage.api.pending[d],
						O = !Object(Te.H)(c),
						j = Object(Te.i)(c),
						_ = r === x.r.CHAT,
						E = !!c.platform.lastPage;
					if ((f || b && !g) && !(_ && E)) {
						if (b && !c.sidebarPromotedPosts.firstFetch) {
							const t = Object(Ee.i)(c) ? Me.a.COMMENTS_OVERLAY : Me.a.COMMENTS;
							window.addEventListener("load", () => {
								i(Object(Ne.b)(t)), Math.random() <= .01 && i(Object(Ne.a)(e))
							})
						}
						return void(m || i(Ot(e, t, s)))
					}
					i(l.g());
					const v = c.user.prefs.commentMode;
					i(bt({
						key: d,
						postId: e,
						commentMode: v
					}));
					const I = Object.assign(Object.assign({}, s), _ ? {
						sort: x.r.LIVE
					} : O ? {
						sort: s.sort,
						depth: 2
					} : {
						sort: s.sort
					}); {
						const t = Object(xe.N)(n(), {
							postId: e
						});
						t && t.numComments && t.numComments > Xe && (I.truncate = Je)
					}
					const T = Object(Le.a)("comments", () => Object(y.a)(a.apiContext(), e, t, I, Object(me.a)(n()), Object(Ve.a)(n()), He(n()))),
						P = !O && j && Object(w.d)(a.gqlContext(), Object(be.e)(j)) || null,
						[C, S] = await Promise.all([T, P]);
					let N;
					if (i(Object(U.m)(C.status)), C.ok) {
						const t = Object.keys(C.body.posts).filter(e => !!C.body.posts[e].isMeta),
							s = C.body.posts[e];
						if (t.length) {
							const e = await Object(h.a)(a.apiContext(), s.belongsTo.id, t);
							e.ok && (N = e.body)
						}
						if (S && S.ok) {
							const e = null === (o = S.body.data.redditorInfoByName) || void 0 === o ? void 0 : o.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : w.a;
							C.body && C.body.account && Object.assign(C.body.account, t)
						}
						const r = Object(se.a)(C.body, e, c);
						i(pt(Object.assign({
							key: d,
							postId: e,
							meta: c.meta,
							governance: N,
							shouldCollapse: r
						}, C.body)))
					} {
						const r = Object(xe.N)(n(), {
							postId: e
						});
						r && C.body.comments && Object.keys(C.body.comments).length < r.numComments ? i(Ot(e, t, s)) : C.ok && i(yt({
							key: d
						}));
						const a = Object(Ee.i)(c) ? Me.a.COMMENTS_OVERLAY : Me.a.COMMENTS;
						i(Object(Ne.b)(a)), Math.random() <= .01 && i(Object(Ne.a)(e))
					}
					if (C.ok) {
						i(Q.f(d));
						const t = Object(xe.N)(n(), {
							postId: e
						});
						i(B.t(t, Y.a.CommentsView)), t && "subreddit" === t.belongsTo.type && C.body.comments && await i(Object(D.a)({
							commentIds: Object.keys(C.body.comments),
							postIds: [t.id],
							subredditId: t.belongsTo.id
						}))
					} else {
						let e;
						u && (i(Object(p.k)({
							key: d
						})), e = await Object(Le.a)("subreddit", () => Object(k.a)(a.apiContext(), u, {})), i(Object(U.m)(e.status)), i(Object(p.f)(e, u))), i(mt(Object.assign({
							error: C.error,
							key: d
						}, e ? e.body : C.body)))
					}
				}, ht = "PAGE__COMMENTSPAGE_LOADED_FULL", yt = Object(R.a)(ht), Ot = (e, t, s) => async (r, i, n) => {
					var a;
					const o = Object(Pe.a)(e, t, s),
						c = i(),
						d = Object(Te.I)(c),
						l = Object(Te.i)(c),
						u = Object(y.a)(n.apiContext(), e, t, s, Object(me.a)(c), Object(Ve.a)(c), He(c)),
						b = d && l && Object(w.d)(n.gqlContext(), Object(be.e)(l)) || null,
						[p, m] = await Promise.all([u, b]);
					if (r(Object(U.m)(p.status)), p.ok) {
						if (m && m.ok) {
							const e = null === (a = m.body.data.redditorInfoByName) || void 0 === a ? void 0 : a.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : w.a;
							p.body && p.body.account && Object.assign(p.body.account, t)
						}
						const t = Object(se.a)(p.body, e, c);
						r(pt(Object.assign({
							key: o,
							postId: e,
							meta: c.meta,
							shouldCollapse: t
						}, p.body))), r(yt({
							key: o
						}));
						const s = i().posts.models[e],
							n = s && Object(xe.ab)(i(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && n && Object(we.a)(c, {
							subredditId: n.id
						}) && r(Object(f.h)(n.name, n.id)), s && "subreddit" === s.belongsTo.type && p.body.comments && await r(Object(D.a)({
							commentIds: Object.keys(p.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else r(mt(Object.assign({
						error: p.error,
						key: o
					}, p.body)))
				}, jt = e => async (t, s, r) => {
					await t(Object(K.c)(e, !0))
				}, kt = () => async (e, t, s) => {
					await e((() => async (e, t, s) => {
						let {
							apiContext: r
						} = s;
						const i = t(),
							n = await Object(L.a)(r());
						if (n.ok && n.body)
							if (n.body.account)
								if (i.user.account && i.user.account.isFPR) {
									const e = F;
									window.location.href = e
								} else e(G(n.body));
						else Object(M.a)(e, i);
						else e(z(n.error))
					})())
				}, wt = (e, t, s) => async (r, i, n) => {
					let {
						routes: o
					} = n;
					const c = i(),
						d = (t || c.platform.currentPage).routeMatch.match,
						l = Object(Se.a)(d.url, o);
					if (!l) return;
					const u = e.metaKey || e.ctrlKey || 1 === e.button;
					if (l.route && l.route.meta && (l.route.meta.name === x.Bb.INDEX || l.route.meta.name === x.Bb.MULTIREDDIT || l.route.meta.name === x.Bb.SUBREDDIT)) u ? window.open(d.url) : s ? r(Object(a.b)(d.url)) : await r(l.route.action(d, !0));
					else if (l.match && l.match.params && l.match.params.subredditName) {
						const {
							subredditName: e
						} = l.match.params, t = "/r/".concat(e, "/");
						if (u) window.open(t);
						else if (s) r(Object(a.b)(t));
						else {
							const s = Object(Ce.a)(e, x.O.HOT);
							await r(Object(a.b)(t)), r(Object(p.i)(s, e, {}))
						}
					}
				}, _t = Object(R.a)("PAGE__FRONTPAGE_RELOADED"), Et = e => async (t, s, r) => {
					const i = s(),
						n = i.platform.currentPage.routeMatch.match;
					Object(ke.n)(i) || Object(ke.s)(i) || (e || t(_t()), await t(ct(n, !0)))
				}, xt = "PAGE__MULTIREDDIT_FEED_PENDING", vt = "PAGE__MULTIREDDIT_FEED_LOADED", It = "PAGE__MULTIREDDIT_FEED_FAILED", Dt = Object(R.a)(xt), Tt = Object(R.a)(vt), Pt = Object(R.a)(It), Ct = (e, t, s, i, n) => async (a, o, c) => {
					const {
						gqlContext: d
					} = c, l = o();
					if (l.listings.postOrder.api.pending[e]) return;
					a(Dt({
						key: e
					})), i.layout = Z.e[Object(te.N)(l, {})];
					const u = {
							path: Object(de.h)(t, s).replace(/\/$/, ""),
							includeIdentity: !0,
							includeSources: !0,
							sort: i.sort ? i.sort.toUpperCase() : void 0,
							range: i.t ? i.t.toUpperCase() : void 0
						},
						p = await Object(Le.a)("multireddit", () => Object(j.a)(d(), u)),
						{
							data: m
						} = p.body,
						g = "error-".concat(e);
					if (p.ok && m) {
						const r = Object(ae.a)(m);
						if (!m.multireddit) return n && a(Q.f(g)), void a(Pt(Object.assign(Object.assign({}, r), {
							error: {
								type: x.E.NOT_FOUND_ERROR
							},
							key: e
						})));
						a(Tt(Object.assign(Object.assign({
							key: e,
							meta: l.meta
						}, r), {
							account: r.account || Object(Te.i)(l),
							multiredditsModelsState: l.multireddits.models
						}))), n && a(Q.f(g)), a(Object(b.h)({
							multiredditName: s,
							username: t
						})), window.addEventListener("load", () => {
							a(Object(Ne.b)(Me.a.MULTIREDDIT))
						})
					} else n && a(Q.e({
						id: g,
						kind: ue.b.Error,
						text: r.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "36ypKx"
						}),
						buttonText: r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: Ct(e, t, s, i, n)
					}))
				}, St = (e, t) => async (s, r) => {
					const {
						multiredditName: i
					} = e.params;
					let {
						username: c
					} = e.params;
					if (!c) {
						let t = r();
						if (t.user.session && t.user.session.unsafeLoggedOut) return void s(Object(a.c)("/"));
						!t.user.account && t.user.session && await s(W.r()), t = r();
						const {
							account: n
						} = t.user;
						if (!n) return void s(Object(a.c)("/"));
						c = Object(be.e)(n);
						let d = "/user/".concat(c, "/m/").concat(i);
						const {
							sort: l
						} = e.params;
						return d += l ? "/".concat(l) : "", void s(Object(a.c)(Object(o.a)(d, e.queryParams)))
					}
					const {
						sort: d = x.O.HOT
					} = e.params, l = {
						multiredditName: i,
						username: c
					}, u = r();
					c || (c = u.user.account ? Object(be.e)(u.user.account) : "");
					const b = Object(de.h)(c, i),
						p = Object(Ce.a)(b, d, e.queryParams),
						m = u.listings.postOrder.ids[p],
						g = u.listings.postOrder.api.error[p],
						f = u.listings.postOrder.api.pending[p],
						h = $.x in e.queryParams && e.queryParams[$.x].toUpperCase() || "",
						y = h in x.Sb && x.Sb[h];
					if (f || m && !g && !t) return void(m && (s(U.l({
						title: Object(_e.f)(r(), l)
					})), u.sidebarPromotedPosts.firstFetch || s(Object(Ne.b)(Me.a.MULTIREDDIT))));
					await s(Ct(p, c, i, Object.assign(Object.assign(Object.assign({}, n()(e.queryParams, $.l)), n()(e.queryParams, $.k)), {
						sort: d,
						t: Object(ne.a)(d, y)
					}), !0));
					const O = r();
					Object(_e.d)(O, l) && s(U.l({
						title: Object(_e.f)(r(), l)
					})), Object(Ae.c)(O, s, e)
				}, Nt = "PAGE__DASHBOARD_PENDING", At = (Object(R.a)(Nt), e => async (e, t) => {
					const s = t();
					e(U.l({
						title: I.a()
					})), Object(Te.I)(s) || await e(W.r())
				}), Rt = e => async (e, t) => e(U.l({
					title: I.a()
				})), Ut = e => async (t, r) => {
					const i = r();
					if (t(U.l({
							title: I.f()
						})), e.queryParams.thanks) {
						const e = await Promise.resolve().then(s.bind(null, "./src/reddit/actions/goldPurchaseModals/payment.ts")).then(e => e.paymentCompleted);
						setTimeout(() => {
							t(C.c()), t(e({
								confirmed: !1
							}))
						}, 1e3)
					}
					Object(Te.I)(i) || await t(W.r())
				}, Lt = e => async (e, t) => {
					const s = t();
					e(U.l({
						title: I.g()
					})), Object(Te.I)(s) || await e(W.r())
				}, Mt = e => async (t, s) => {
					const r = s(),
						i = e.params.thingId;
					t(Object(P.c)({
						correlationId: Object(Ue.d)(Ue.a.GildingFlow),
						thingId: i
					})), Object(Te.I)(r) || await t(W.r());
					const n = s();
					if (!Object(Te.I)(n)) return t(Object(P.f)())
				}, qt = e => async (e, t) => {
					const s = t();
					Object(Te.I)(s) || await e(W.r());
					const r = t();
					if (!Object(Te.I)(r)) throw new Error("Failed to login")
				}, Ft = () => async (e, t, s) => await e(m.d())
		},
		"./src/reddit/actions/pages/appeal/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "APPEAL_PAGE_LOADED",
				i = "APPEAL_PAGE_FAILED"
		},
		"./src/reddit/actions/pages/userDataRequest/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return f
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/endpoints/me/index.ts"),
				n = s("./src/graphql/operations/UserDataExportEligibility.json"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userDataRequest.ts");
			const l = "USER_DATA_REQUEST_PAGE_LOADING",
				u = "USER_DATA_REQUEST_PAGE_LOADED",
				b = "USER_DATA_REQUEST_PAGE_FAILED",
				p = Object(r.a)(l),
				m = Object(r.a)(u),
				g = Object(r.a)(b),
				f = () => async (e, t, s) => {
					let {
						apiContext: r,
						gqlContext: l
					} = s;
					const u = t(),
						b = Object(c.i)(u),
						f = Object(d.b)(u);
					if (b && f.success) return;
					e(p());
					const h = await Object(i.a)(r());
					if (!h.ok || !h.body) return void e(g(h.error));
					if (!h.body.account) return void Object(o.a)(e, u);
					const y = await (e => Object(a.a)(e, Object.assign({}, n)))(l());
					if (!y.ok) return void e(g());
					const O = h.body,
						j = y.body;
					e(m({
						account: O.account,
						userDataExportEligibility: j.data.identity.userDataExportEligibility.isUserEligibleForDataExport
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "e", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/query-string/index.js"),
				i = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const u = new Set(["home", "r/popular"]),
				b = e => {
					const t = location && location.search || "",
						s = i.a.parse(t);
					u.has(e) && (s.related = e);
					const r = i.a.stringify(s);
					return r ? "?".concat(r) : ""
				},
				p = Object(n.a)(a.N),
				m = Object(n.a)(a.y),
				g = Object(n.a)(a.O),
				f = Object(n.a)(a.z),
				h = Object(n.a)(a.M),
				y = Object(n.a)(a.L),
				O = Object(n.a)(a.t),
				j = Object(n.a)(a.u),
				k = e => async (t, s, r) => {
					let {
						gqlContext: i
					} = r;
					const n = Object(c.h)(e),
						a = s();
					if (Object(l.d)(a, n)) return;
					t(p(n));
					const d = await Object(o.e)(i(), n),
						u = Date.now();
					if (d.ok && d.body && d.body.data) {
						const e = d.body.data;
						t(m({
							model: e,
							utcTimeStamp: u
						}))
					} else t(x({
						streamId: n,
						error: d.error,
						utcTimeStamp: u
					}))
				}, w = (e, t) => async (s, r) => Object(d.d)(r()) ? s(E(e, t)) : s(_()), _ = () => async (e, t, s) => {
					let {
						gqlContext: r
					} = s;
					const i = t();
					if (Object(l.f)(i)) return;
					e(g());
					const n = await Object(o.g)(r()),
						a = Date.now();
					if (n.ok && n.body && n.body.data) {
						const t = n.body.data;
						e(f({
							models: t,
							utcTimeStamp: a
						}))
					} else e(v({
						error: n.error,
						utcTimeStamp: a
					}))
				}, E = (e, t) => async (s, r, i) => {
					let {
						gqlContext: n
					} = i;
					const a = r();
					if (Object(l.f)(a)) return;
					s(g());
					const c = await Object(o.f)(n(), e, t),
						d = Date.now();
					if (c.ok && c.body && c.body.data) {
						const t = c.body.data;
						s(f({
							listingName: e,
							models: t,
							utcTimeStamp: d
						}))
					} else s(v({
						error: c.error,
						utcTimeStamp: d
					}))
				}, x = e => async t => {
					t(h(e))
				}, v = e => async t => {
					t(y(e))
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return b
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				n = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts");
			const o = "REDDIT_EMBED_LOADED",
				c = "REDDIT_EMBED_FAILED",
				d = Object(r.a)("REDDIT_EMBED_PENDING"),
				l = Object(r.a)(o),
				u = Object(r.a)(c),
				b = (e, t) => async (e, s, r) => {
					let {
						apiContext: o
					} = r;
					const c = s();
					e(d());
					const b = await Object(n.a)(o());
					b.ok && b.body ? !t || b.body.account ? (e(l(b.body)), e(Object(i.c)())) : Object(a.a)(e, c) : e(u(b.error))
				}
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/shortcuts/constants.ts");
			const n = Object(r.a)(i.a),
				a = Object(r.a)(i.b)
		},
		"./src/reddit/actions/shortcuts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			const r = "SHORTCUTS__ACTIVE_COMMENT_SET",
				i = "SHORTCUTS__ACTIVE_POST_SET"
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return h
			}));
			var r = s("./src/lib/fastdom/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/chat/unreadCount.ts"),
				a = s("./src/reddit/actions/inbox.ts"),
				o = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/selectors/chat.ts"),
				l = s("./src/reddit/selectors/user.ts");
			const u = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				b = Object(i.a)(u),
				p = e => async (t, s) => {
					const r = s(),
						i = Object(d.a)(r),
						o = Object(d.d)(r),
						c = Object(l.D)(r),
						{
							basicChannelCount: u,
							inboxCount: b
						} = e;
					i !== u && t(Object(n.b)(Object.assign(Object.assign({}, o), {
						basicChannelCount: u
					}))), b && b !== c && t(Object(a.b)({
						inboxCount: b
					})), (i !== u || b && b !== c) && t(f())
				}, m = (e, t) => {
					e <= 0 ? r.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : r.a.write(() => {
						Object(c.b)(), window.document.title = "(".concat(e, ") ").concat(t)
					})
				}, g = e => {
					return {
						inboxCount: Object(l.D)(e) || 0,
						basicChannelCount: Object(d.a)(e) || 0
					}
				}, f = () => async (e, t) => {
					const s = t(),
						r = Object(o.e)(s, {});
					if (!(Object(l.H)(s) || Object(l.I)(s)) || !r) return;
					const i = (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = g(e);
						return t + s
					})(s);
					m(i, r), e(b({
						hasUnreadMessages: !!i
					}))
				}, h = () => async (e, t) => {
					{
						e(f());
						const s = g(t());
						Object(c.c)(s)
					}
				}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts");
			const a = e => Object(n.a)(e, {
				endpoint: "".concat(r.a.gatewayUrl, "/desktopapi/v1/me"),
				method: i.db.GET
			})
		},
		"./src/reddit/endpoints/page/frontpage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "a", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var r = s("./src/graphql/operations/Frontpage.json"),
				i = s("./src/lib/base64/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/lib/performanceTimings/index.tsx"),
				c = s("./src/reddit/constants/graphql.ts"),
				d = s("./src/reddit/helpers/getPostLimitForMobile/index.ts"),
				l = s("./src/reddit/models/Post/index.ts"),
				u = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				m = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/selectors/user.ts");
			const O = (e, t) => {
					const {
						after: s,
						dist: r,
						isMobile: n,
						layout: a,
						limit: o,
						sort: l,
						t: u
					} = t, b = Object(y.P)(e), p = Object(h.q)(e), m = {
						recentPostIds: e.posts.recent,
						includeIdentity: b && !e.user.account,
						includeFeatured: !0,
						adContext: {
							layout: a ? a.toUpperCase() : c.a.Card,
							reddaid: e.user.reddaid,
							distance: r
						}
					};
					return l && (m.sort = l.toUpperCase()), u && (m.range = u.toUpperCase()), n ? m.pageSize = Object(d.a)(a) : o && (m.pageSize = o), p && p.ad && (m.forceAds = {
						ad: p.ad
					}), s && (m.after = Object(i.a)(s)), m
				},
				j = async (e, t, s, i) => {
					const c = Date.now(),
						d = await ((e, t) => Object(a.a)(e, Object.assign(Object.assign({}, r), {
							variables: t
						}), {
							traceRequestName: "get_frontpage"
						}))(e, t),
						h = Date.now();
					let y;
					try {
						const e = Date.now();
						y = (e => {
							let {
								trendingSubreddits: t = [],
								identity: s,
								home: r,
								featuredAnnouncements: i,
								featuredLiveEvent: n,
								recentPosts: a = []
							} = e;
							const o = [],
								c = [],
								d = {
									postIds: [],
									postInstances: {},
									posts: {},
									postFlair: {},
									profiles: {},
									subreddits: {}
								},
								h = e => {
									if (d.posts[e.id]) return e.id;
									const t = Object(b.e)(e);
									d.posts[t.id] = t;
									const {
										crosspostRoot: s
									} = e;
									s && s.type === l.a.Post && s.postInfo && h(s.postInfo);
									let r = t.id;
									switch (e.__typename) {
										case l.f.ProfilePost:
											d.profiles[e.profile.id] || (d.profiles[e.profile.id] = Object(m.a)(e.profile));
											break;
										case l.f.SubredditPost:
											d.subreddits[e.subreddit.id] || (d.subreddits[e.subreddit.id] = Object(g.a)(e.subreddit)), d.postFlair[e.subreddit.id] || (d.postFlair[e.subreddit.id] = Object(u.a)(e.subreddit));
											break;
										case l.f.AdPost:
											const s = Object(b.b)(e);
											if (!s) {
												r = null;
												break
											}
											r = s, d.posts[s] = Object.assign(Object.assign({}, t), {
												id: s,
												permalink: "".concat(t.permalink, "?instanceId=").concat(encodeURIComponent(s))
											}), d.posts[t.id] || (d.posts[t.id] = Object.assign(Object.assign({}, t), {
												events: []
											})), d.postInstances[e.id] || (d.postInstances[e.id] = []), d.postInstances[e.id].push(s)
									}
									return r
								};
							for (const l of t) {
								const e = Object(g.a)(l);
								d.subreddits[e.id] = e, o.push(e.id)
							}
							for (const {
									node: l
								} of r.posts.edges) {
								const e = h(l);
								e && d.postIds.push(e)
							}
							for (const l of a) {
								if (!l) continue;
								const e = h(l);
								e && c.push(e)
							}
							const y = d.postIds.length - 1,
								O = y >= 0 ? d.postIds[y] : "",
								j = r.posts.dist;
							return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, d), {
								account: s && Object(f.a)(s) || null,
								featuredLiveThread: n,
								announcements: i,
								preferences: s && s.preferences && Object(p.a)(s.preferences, s.interactions) || null
							}), 0 !== o.length && {
								trendingSubredditIds: o
							}), 0 !== c.length && {
								recentPostIds: c
							}), {
								token: O
							}), null !== j && {
								dist: j
							})
						})(d.body.data);
						const t = Date.now(),
							r = [{
								duration: h - c,
								logKeyType: o.a.gqlFetchTiming
							}, {
								duration: t - e,
								logKeyType: o.a.gqlNormalizationTiming
							}];
						Object(o.h)({
							name: n.p.FRONTPAGE,
							isLoggedIn: s,
							metrics: r,
							statsdPathsForExperiments: i
						})
					} catch (O) {}
					return Object.assign(Object.assign({}, d), {
						body: y
					})
				}
		},
		"./src/reddit/endpoints/page/multiredditListing.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/graphql/operations/MultiredditListing.json"),
				i = s("./src/lib/makeGqlRequest/index.ts");
			t.a = (e, t) => Object(i.a)(e, Object.assign(Object.assign({}, r), {
				variables: t
			}))
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return p
			}));
			var r, i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/constants/postLayout.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/selectors/meta.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function l(e) {
				return Object(o.N)(e, {}) === n.g.Large && !Object(d.H)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: l,
					experimentName: i.lb
				})
			}

			function b(e) {
				switch (e) {
					case i.mb.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(r || (r = {}));
			const p = e => {
				switch (e) {
					case i.mb.Enabled:
						return r.Enabled;
					default:
						return r.NoBucket
				}
			}
		},
		"./src/reddit/helpers/graphql/normalizeMultiredditListingFromGql/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/helpers/graphql/normalizeFlairFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeMultiredditDataFromGql/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				o = s("./src/reddit/helpers/graphql/normalizePreferencesFromGql/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/helpers/graphql/normalizeUserFromGql/index.ts"),
				l = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				const t = {
					account: null,
					dist: 0,
					features: null,
					multireddits: {},
					multiredditsByUser: {},
					pageInfo: null,
					postFlair: {},
					postIds: [],
					postInstances: {},
					posts: {},
					preferences: null,
					profiles: {},
					subreddits: {},
					token: void 0
				};
				if (!e) return t;
				const {
					identity: s,
					multireddit: u
				} = e;
				if (s && (t.account = Object(d.a)(s) || null, t.preferences = Object(o.a)(s.preferences, s.interactions) || null), !u) return t;
				const {
					posts: b
				} = u;
				if (b) {
					t.pageInfo = b.pageInfo;
					for (const {
							node: e
						} of b.edges) {
						const s = e;
						t.postIds.push(s.id);
						const {
							post: i,
							crosspost: o
						} = s && Object(a.a)(s);
						t.posts[i.id] = i, o && (t.posts[o.id] = o), s.__typename !== l.f.DeletedProfilePost && s.__typename !== l.f.DeletedSubredditPost && (s.authorFlair && (t.postFlair[i.belongsTo.id] || (t.postFlair[i.belongsTo.id] = {}), t.postFlair[i.belongsTo.id][i.author] = Object(r.a)(s.authorFlair)[0]), s.__typename === l.f.SubredditPost && (t.subreddits[s.subreddit.id] || (t.subreddits[s.subreddit.id] = Object(c.a)(s.subreddit)), t.postFlair[s.subreddit.id] || (t.postFlair[s.subreddit.id] = Object(n.a)(s.subreddit))))
					}
				} else t.pageInfo = {
					endCursor: null,
					hasNextPage: !1,
					hasPreviousPage: !1,
					startCursor: null
				};
				t.postIds.length && (t.dist = t.postIds.length), t.pageInfo.hasNextPage && (t.token = t.pageInfo.endCursor || "");
				const {
					multireddits: p,
					multiredditsByUser: m,
					profiles: g,
					subreddits: f
				} = Object(i.a)(u);
				return Object.assign(Object.assign({}, t), {
					multireddits: p,
					multiredditsByUser: m,
					profiles: Object.assign(Object.assign({}, t.profiles), g),
					subreddits: Object.assign(Object.assign({}, t.subreddits), f)
				})
			}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var r = s("./src/config.ts");
			const i = "".concat(r.a.assetPath, "/img/favicon/badged-favicon-32x32.png"),
				n = "".concat(r.a.assetPath, "/img/favicon/badged-favicon-16x16.png"),
				a = "".concat(r.a.assetPath, "/img/favicon/favicon-32x32.png"),
				o = "".concat(r.a.assetPath, "/img/favicon/favicon-16x16.png"),
				c = "badgeCountSync",
				d = e => window.document.querySelector('link[href="'.concat(e, '"]')),
				l = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? a : i),
						s = d(e ? o : n);
					t && s && (t.href = e ? i : a, s.href = e ? n : o)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			}));
			var r = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts"),
				n = s("./src/reddit/selectors/platform.ts");
			const a = e => e.chat.unread.count,
				o = e => {
					return a(e).basicChannelCount
				},
				c = e => e.chat.promos,
				d = e => !(e.chat.isInited || e.chat.unread.api.pending),
				l = (e, t) => {
					const {
						chatConfig: s
					} = r.c;
					return Object(i.a)(s)(e, t)
				},
				u = e => {
					const t = Object(n.d)(e);
					if (e.chat.subredditSettings.subredditId === t) return e.chat.subredditSettings
				}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/utils.ts"),
				c = s("./src/reddit/selectors/meta.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = Object(r.a)(d.P, (e, t) => {
					let {
						pageLayer: s
					} = t;
					return !s || Object(n.y)(s)
				}, c.c, (e, t, s) => !e && t && !s),
				u = Object(r.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => l(e, t),
					experimentName: i.S,
					throttledVariants: {
						[i.nb.CurrentThrottled]: i.S
					}
				}), o.a),
				b = e => e === i.nb.CurrentThrottled,
				p = e => e === i.nb.CurrentThrottled || e === i.nb.CurrentUnthrottled || e === i.nb.CurrentUnthrottledCopy || e === i.nb.NewPopUnthrottledCopy,
				m = e => e === i.nb.NewPopUnthrottledCopy,
				g = e => e === i.nb.NewPageUnthrottledCopy || e === i.nb.NewPageUnthrottledCopyFields,
				f = e => e === i.nb.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/utils.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/constants/experiments.ts");
			const i = e => {
				if (!Object(r.Oc)(e)) return e || void 0
			}
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/featureFlags/index.ts"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const a = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = e => (e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: () => Object(c.H)(e),
					experimentName: r.ec
				}) === r.mc.Enabled
			})(e) && (e => {
				const t = Object(n.e)(e);
				return !!t && a.has(t.toLowerCase())
			})(e) && i.d.realtimeCommentsExperiment(e)
		},
		"./src/reddit/selectors/userDataRequest.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			const r = e => e.userDataRequestPage.userDataRequestPageApi.userDataExportEligibility,
				i = e => e.userDataRequestPage.userDataRequestPageApi
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~InFeedChaining~Reddit.54661b96c6c4b55dbb79.js.map