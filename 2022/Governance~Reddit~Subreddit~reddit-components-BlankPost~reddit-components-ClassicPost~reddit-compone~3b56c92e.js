// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.412dc490aefe74f22c06.js
// Retrieved at 3/28/2022, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-dom/index.js"),
				o = (s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, r) {
					return a(e[r], t[r])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, s = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							s = t[0],
							r = void 0 === s ? "0px" : s,
							i = t[1],
							n = void 0 === i ? r : i,
							a = t[2],
							d = void 0 === a ? r : a,
							c = t[3];
						return r + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), i = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(s !== t.root || r !== t.rootMargin || a(i, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var s = d.get(e);
				if (s)
					for (var r, i = s.values(); r = i.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function l(e, t) {
				for (var s = 0; s < e.length; s++) {
					var r = u(t, e[s]);
					r && r.handleChange(e[s])
				}
			}

			function b(e) {
				return c(e) || new IntersectionObserver(l, e)
			}
			var m = s("./node_modules/invariant/browser.js"),
				p = s.n(m),
				h = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return p()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function O(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var y = ["root", "rootMargin", "threshold"],
				v = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				j = P.hasOwnProperty,
				_ = P.toString,
				E = function(e) {
					return y.reduce((function(t, s) {
						if (j.call(e, s)) {
							var r = "root" === s && "[object String]" === _.call(e[s]);
							t[s] = r ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, s;

					function r() {
						for (var t, s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i];
						return O(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), O(g(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var r = s.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), O(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(E(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), O(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), O(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = r).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var o = r.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = v.some((function(s) {
							return a(t.props[s], e[s])
						}));
						return s && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), s
					}, o.componentDidUpdate = function(e, t, s) {
						var r = !1;
						s || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (s || r) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? i.a.cloneElement(i.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(i.a.Component);
			O(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function n() {}
			n.resetWarningCache = i, e.exports = function() {
				function e(e, t, s, i, n, o) {
					if (o !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: n,
					resetWarningCache: i
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(r.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/brcast/dist/brcast.es.js");
			const i = () => "undefined" != typeof document,
				n = () => i() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: n()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(r.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!i()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !n(),
				isDocumentVisible: n,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				i = "APP_BADGES__LOADED",
				n = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				n = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(i.c),
				l = Object(r.a)(i.b),
				b = Object(r.a)(i.d),
				m = Object(r.a)(i.a),
				p = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				h = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				f = () => async (e, t, {
					gqlContext: s
				}) => {
					e(u());
					const r = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const s = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (s) return {
									...s,
									chatUnreadMessages: {
										count: (Number(s.chatUnreadMessages.count) || 0) + (Number(s.chatUnacceptedInvites.count) || 0) + (Number(s.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(s);
					r ? (e(l(r)), e(Object(n.d)())) : e(m())
				};
			const g = () => async e => {
				const t = p({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				n = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(n.e)(s);
						await e(Object(i.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return n
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				i = "PAGE__MULTIREDDIT_FEED_LOADED",
				n = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return I
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return A
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return M
			})), s.d(t, "profilePostsPending", (function() {
				return R
			})), s.d(t, "profilePostsLoaded", (function() {
				return N
			})), s.d(t, "profilePostsFailed", (function() {
				return k
			})), s.d(t, "profilePostsRequested", (function() {
				return F
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return L
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return V
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return U
			})), s.d(t, "morePostsPending", (function() {
				return G
			})), s.d(t, "morePostsLoaded", (function() {
				return B
			})), s.d(t, "morePostsFailed", (function() {
				return q
			})), s.d(t, "morePostsRequested", (function() {
				return H
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				i = s.n(r),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				u = s("./src/reddit/actions/moderatingSubreddits.ts"),
				l = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/actions/pinnedPost.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/config.ts"),
				v = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				P = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, s) => Object(j.a)(e, {
				data: s,
				endpoint: Object(_.a)(Object(v.a)(Object(E.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: P.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var w = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = s("./src/reddit/helpers/post/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				D = s("./src/reddit/selectors/profile.ts");
			const I = "PAGE__PROFILE_POSTS_PENDING",
				A = "PAGE__PROFILE_POSTS_LOADED",
				M = "PAGE__PROFILE_POSTS_FAILED",
				R = Object(n.a)(I),
				N = Object(n.a)(A),
				k = Object(n.a)(M),
				F = e => async (t, s, r) => {
					const {
						queryParams: n,
						params: y
					} = e, {
						sort: v,
						t: P
					} = Object(l.b)(n), {
						profileName: j
					} = y, _ = Object(o.a)(`u_${j}`, v, n), E = s(), I = Object(a.a)(E.listings.postOrder.ids, _), A = Object(x.c)(E, {
						listingKey: _
					}), M = Object(x.d)(E, {
						listingKey: _
					});
					if (await t(p.d(j)), M || I && !A) {
						if (I) {
							const e = Object(D.q)(s(), {
								profileName: j
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const F = {
						...i()(e.queryParams, [...g.m, ...g.l, g.i]),
						layout: Object(O.R)(E, {}).toLowerCase(),
						sort: v,
						t: Object(w.a)(v, P)
					};
					t(R({
						key: _
					}));
					const L = await Object(S.a)("profilePosts", () => T(r.apiContext(), j, F));
					if (!L.ok) return t(k({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: _
					})), L.body.reason === f.a.DeletedProfile && t(Object(d.s)({
						profileName: j
					})), void t(m.n(L.status));
					const V = L.body;
					await Object(C.a)(r.gqlContext, V.posts).then(e => V.posts = e), t(N({
						key: _,
						meta: s().meta,
						...V
					}));
					const U = Object(D.m)(s(), j),
						{
							pinned: G
						} = V;
					t(Object(b.h)({
						profileId: U,
						pinned: G
					})), await Promise.all([t(Object(l.c)(j)), t(Object(h.q)()), t(Object(u.b)()), t(c.o(j))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", V = "PROFILE_POSTS__MORE_POSTS_LOADED", U = "PROFILE_POSTS__MORE_POSTS_FAILED", G = Object(n.a)(L), B = Object(n.a)(V), q = Object(n.a)(U), H = () => async (e, t, {
					apiContext: s,
					gqlContext: r
				}) => {
					const n = t(),
						{
							currentPage: a
						} = n.platform;
					if (!a || !a.routeMatch) return;
					const {
						queryParams: d,
						params: c
					} = a.routeMatch.match, {
						sort: u,
						t: b
					} = Object(l.b)(d), {
						profileName: m
					} = c, p = Object(o.a)(`u_${m}`, u, d), h = Object(x.g)(n, {
						listingKey: p
					});
					if (!h) return;
					const f = Object(x.d)(n, {
							listingKey: p
						}),
						y = Object(x.e)(n, {
							listingKey: p,
							token: h.token
						});
					if (f || y) return;
					e(G({
						key: p,
						fetchedToken: h.token
					}));
					const v = {
							after: h.token,
							dist: h.dist,
							sort: u,
							t: b,
							...i()(d, g.m),
							layout: Object(O.R)(n, {}).toLowerCase()
						},
						P = await T(s(), m, v),
						j = P.body,
						_ = n.listings.postOrder.ids[p],
						E = j.postIds || [];
					await Object(C.a)(r, j.posts).then(e => j.posts = e);
					const w = {
						...j,
						postIds: E.filter(e => !_ || !_.includes(e))
					};
					P.ok ? (e(B({
						fetchedToken: h.token,
						key: p,
						meta: n.meta,
						...w
					})), await e(Object(l.c)(m))) : e(q({
						account: P.body.data ? P.body.data.account : null,
						error: P.error,
						fetchedToken: h.token,
						key: p
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "i", (function() {
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(n.a)(m),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				f = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(n.a)(h),
				O = Object(n.a)(f),
				y = "PINNEDPOST__PIN_POST_PENDING",
				v = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(n.a)(y),
				j = Object(n.a)(v),
				_ = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(n.a)(_),
				w = Object(n.a)(E),
				C = e => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				S = (e, t) => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? r.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : r.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				x = () => Object(a.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				D = () => Object(a.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				I = (e, t = !1) => async (s, n, {
					apiContext: m
				}) => {
					const p = n(),
						h = p.posts.models[e];
					if (!h) return;
					const f = !Object(l.s)(p, {
						postId: e
					});
					if (f && h.isRemoved) return s((() => Object(a.f)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const y = h.author,
						v = Object(b.m)(p, y),
						[_, E, I, A, M] = f ? [P, g, T, C, x] : [j, O, w, S, D];
					if (f) {
						if (Object(l.P)(p, {
								profileName: y
							}).length >= i.cb) return void s(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const R = Object(l.p)(p, e, y),
						N = !f && R;
					s(_({
						postId: e,
						profileId: v
					})), (await Object(c.t)(m(), e, f, !0)).ok ? (s(E({
						postId: e,
						profileId: v
					})), t || s(A(e, N))) : (s(I({
						postId: e,
						profileId: v
					})), s(M()))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "c", (function() {
				return w
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				h = s("./src/reddit/selectors/postCreations.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const v = Object(a.a)(O.N),
				P = Object(a.a)(O.O),
				j = Object(a.a)(O.M),
				_ = (e, t) => async (s, r, {
					apiContext: i
				}) => {
					let o = r();
					const {
						name: a,
						isProfile: m
					} = e, p = Object(f.e)(o), O = p && !m && Object(l.a)(p.name, a), y = o.creations.api.subreddit.change.pending;
					if (O || y) return;
					const P = Object(u.v)(t);
					if (!a) return void s(E(e, P));
					s(v(e));
					const j = m ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await s(Object(c.postCreationPageDataRequested)(j)), m || !Object(h.C)(o)) return s(E(e, P));
					const _ = e.allowedPostTypes || Object(g.w)(r(), {
						subredditName: a
					});
					if (!_) return void s(E(e, P));
					let T;
					o = r();
					const w = Object(h.mb)(o),
						C = Object(h.C)(o);
					if (w === n.Wb.MEDIA && C) {
						const e = Object(h.W)(o),
							t = Object(b.x)(e),
							s = Object(h.N)(o) && e.items.length > 1,
							r = !t && !s;
						if (s && !_.galleries) T = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !_.images) T = b.q.ImageWillBeRemoved;
						else if (t && !_.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							_.images ? s > n.gb && (T = b.q.VideoWillBeRemovedTooLongForGif) : T = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : E({
						...e,
						allowedPostTypes: _
					}, P))
				}, E = (e, t, s = !0) => async (n, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
					let b = "";
					b = a ? l(a) : p.b, b = Object(i.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (n(P(e)), s && n(Object(y.t)(!0)), n(Object(y.i)()), n(Object(r.c)(b)))
				}, T = e => async (t, s) => {
					const n = s().platform.currentPage,
						o = n.queryParams,
						a = Object(i.a)(n.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(a))
				}, w = () => async (e, t) => {
					const s = t().platform.currentPage,
						i = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(i))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return D
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return A
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "l", (function() {
				return L
			})), s.d(t, "i", (function() {
				return V
			})), s.d(t, "m", (function() {
				return U
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return B
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "s", (function() {
				return X
			})), s.d(t, "r", (function() {
				return J
			})), s.d(t, "g", (function() {
				return Y
			})), s.d(t, "q", (function() {
				return ee
			})), s.d(t, "c", (function() {
				return te
			})), s.d(t, "a", (function() {
				return se
			})), s.d(t, "b", (function() {
				return re
			})), s.d(t, "o", (function() {
				return ae
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/formatApiError/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				h = s("./src/reddit/models/PostDraft/index.ts"),
				f = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: h.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: h.b.Markdown,
							body: e.body || void 0
						} : {
							kind: h.b.RichText,
							body: e.body || void 0
						}, {
							subredditId: e.subreddit || void 0,
							contentCategory: e.content_category || void 0,
							created: e.created,
							flair: e.flair,
							id: e.id,
							isChatPost: !!e.discussion_type,
							isNSFW: !!e.nsfw,
							isOriginalContent: !!e.original_content,
							isSpoiler: !!e.spoiler,
							modified: e.modified || void 0,
							sendReplies: !!e.send_replies,
							isPublicLink: !!e.is_public_link,
							title: e.title || "",
							...t
						}
					})(t);
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === O.f.User) {
						const s = Object(f.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var v = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				j = s("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				w = s("./src/reddit/selectors/postDraft.ts"),
				C = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				M = Object(n.a)(D),
				R = Object(n.a)(I),
				N = Object(n.a)(A),
				k = () => async (e, t, {
					apiContext: s
				}) => {
					const i = t();
					if (!Object(x.k)(i) || Object(w.b)(i)) return;
					e(M());
					const n = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.jb.GET
					}))(s());
					n.ok ? e(R(y(n.body))) : e(N(n.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(n.a)(F), W = Object(n.a)(L), $ = Object(n.a)(V), z = Object(n.a)(U), Q = Object(n.a)(G), K = Object(n.a)(B), X = Object(n.a)(q), J = e => async (t, s, {
					apiContext: n
				}) => {
					const o = s(),
						c = Object(w.g)(o),
						b = Object(T.bb)(o);
					if (c || b) return;
					const p = Object(w.h)(o, e);
					if (!p) return;
					t(H(p)), j.g(o, p);
					const h = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.jb.PUT : r.jb.POST,
						data: Object(v.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(n(), p, e);
					if (h.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(v.c)(h.body);
						t(W({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(p.destSubreddit, s, !1))
					} else {
						const e = h.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(K()) : e.type === r.I.VALIDATION_ERROR ? t(z(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
							text: Object(i.a)(e)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(n.a)(Y), ee = e => async (t, s, {
					apiContext: r
				}) => {
					t(Z(e));
					let i = P.f;
					const n = s();
					if (e.subredditId) {
						const t = Object(S.S)(n, {
								subredditId: e.subredditId
							}),
							s = Object(C.p)(n, {
								profileId: e.subredditId
							}),
							r = Object(x.k)(n);
						t ? i = {
							isProfile: !1,
							name: t.name
						} : s && r && (i = {
							isProfile: !0,
							name: Object(E.e)(r)
						})
					}
					await t(Object(a.a)(i, e.id, !1));
					const o = Object(w.h)(s(), e.id);
					o && j.j(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ie = Object(n.a)(te), ne = Object(n.a)(se), oe = Object(n.a)(re), ae = (e, t) => async (s, n, {
					apiContext: a
				}) => {
					const m = n();
					if (Object(w.a)(m, e)) return;
					const p = Object(w.d)(m, {
						draftId: e
					});
					p && j.h(m, p), s(oe({
						draftId: e
					}));
					const h = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.jb.DELETE
					}))(a(), e);
					if (h.ok) {
						const {
							draftsCount: r
						} = Object(v.c)(h.body);
						s(ie({
							draftId: e,
							draftsCount: r
						}));
						const i = Object(c.v)(t);
						e === i && s(Object(o.q)(!0, t))
					} else {
						const t = h.error;
						s(ne({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: _.b.Error,
							text: Object(i.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(i.a)("REDDIT_EMBED_PENDING"),
				b = Object(i.a)(c),
				m = Object(i.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: r
				}) => {
					const i = s();
					e(l());
					const d = await Object(o.a)(r());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(n.d)()), h(i)) : Object(a.a)(e, i) : e(m(d.error))
				}, h = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Nb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "f", (function() {
				return y
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/fastdom/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/selectors/appBadges.ts"),
				u = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(n.a)(m),
				h = (e, t) => {
					e <= 0 ? i.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : i.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(r.c)({
					basicChannelCount: c.e,
					subredditChannelCount: c.d,
					subredditMentionCount: c.c
				}),
				g = () => async (e, t) => {
					const s = t(),
						r = Object(o.f)(s, {}),
						i = Object(l.O)(s) || Object(l.P)(s),
						n = Object(u.b)(s);
					if (!i || !r) return;
					const a = n ? Object(c.i)(s) : Object(c.j)(s);
					h(a, r), e(p({
						hasUnreadMessages: !!a
					}))
				}, O = () => async (e, t) => {
					{
						e(g());
						const s = (e => ({
							inboxCount: Object(c.h)(e),
							basicChannelCount: Object(c.e)(e)
						}))(t());
						Object(a.c)(s)
					}
				}, y = e => async (t, s) => {
					const r = s(),
						i = Object(c.e)(r),
						n = Object(c.h)(r),
						{
							basicChannelCount: o,
							inboxCount: a
						} = e;
					if (i !== o) {
						const e = Object(b.e)({
							count: o,
							key: d.c.ChatTab
						});
						t(Object(b.a)(e))
					}
					if (a && a !== n) {
						const e = Object(b.e)({
							count: a,
							key: d.c.MessageTab
						});
						t(Object(b.a)(e))
					}(i !== o || a && a !== n) && t(g())
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				i = s.n(r),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/ads/store.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/selectors/media.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = [{
					event: m.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: m.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: m.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: m.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: m.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: m.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				g = [{
					event: m.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: m.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: m.a.VideoVendorFullyViewable50,
					threshold: c.a,
					viewabilityMinimum: void 0,
					remainingTime: void 0,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				O = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: s,
					remainingTime: r,
					threshold: i = null,
					viewabilityMinimum: n,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: i,
					remainingTime: r,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: n,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				y = () => O(f),
				v = () => O(g),
				P = [c.c, c.e, c.l, c.j, c.a, c.b],
				j = [c.c, c.l, c.j, c.a],
				_ = [c.c, c.e, c.l, c.b],
				E = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(h.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const s = Object(h.h)(e, {
							postId: t.id
						});
						if (s) return s.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(h.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(h.e)(e, {
						postId: t.id
					})
				}),
				w = Object(b.a)(T);
			class C extends n.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = v(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						i()(this.state.event, e) || this.setState({
							event: e
						}), this.props.trackDisplay && this.viewabilityStats.forEach(t => {
							this.checkViewability(e, t)
						}), this.props.isPlaying && this.props.trackVideo && this.videoStats.forEach(t => {
							t.checkAudible && !this.props.isAudible || this.checkViewability(e, t)
						})
					}, this.state = {
						event: null,
						currentContinuousViewingStartedAt: e.continuousViewingStartedAt
					}
				}
				componentDidMount() {
					this.visibilityChangeSubscriptionId = l.a.subscribe(e => {
						this.pageInFocus = e.documentInFocus, this.state.event && this.handleViewabilityChange(this.state.event)
					})
				}
				componentWillUnmount() {
					const {
						post: e,
						trackDisplay: t,
						trackVideo: s
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), this.outOfViewStats = [], this.inViewStats = []
				}
				componentDidUpdate() {
					this.props.trackVideo && (this.state.currentContinuousViewingStartedAt === this.props.continuousViewingStartedAt ? (this.handleThresholds(this.state.event, c.p, !0), this.videoStats.forEach(e => {
						!this.props.isPlaying || e.checkAudible && !this.props.isAudible ? e.cumulative ? this.pauseCumulativeStats(e) : this.pauseViewableStats(e) : this.checkViewability(this.state.event, e)
					})) : this.resetTimers())
				}
				resetTimers() {
					this.videoStats.forEach(e => {
						e.cumulative || this.resetTimer(e)
					}), this.setState({
						currentContinuousViewingStartedAt: this.props.continuousViewingStartedAt
					})
				}
				resetTimer(e) {
					this.clearTimer(e), e.timeViewingInitialized = 0, void 0 !== e.viewabilityMinimum && (e.remainingTime = e.viewabilityMinimum)
				}
				pauseViewableStats(e) {
					let t;
					if (!e.timer || e.fired) return;
					e.timeViewingInterrupted = Date.now();
					const s = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - s, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let s, r = !1,
						i = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, i = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!i || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: r
					} = this.props, n = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!i()(n, this.inViewStats) && n.length > 0 && u.b(r.id, n, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!i()(o, this.outOfViewStats) && o.length > 0 && u.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = n
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: s,
						width: r
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (E(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						E(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
					}
				}
				clearTimer(e) {
					e.timer && (clearTimeout(e.timer), e.timer = null)
				}
				getLengthForTimer(e) {
					return void 0 !== e.remainingTime ? e.remainingTime : e.viewabilityMinimum || 0
				}
				fireStat(e) {
					setTimeout(() => this.props.onPostViewable(this.props.post, e.event), 0), e.fired = !0
				}
				initTimer(e, t) {
					this.clearTimer(e), e.timer = window.setTimeout(() => {
						this.fireStat(e)
					}, t)
				}
				render() {
					const {
						trackDisplay: e,
						trackVideo: t
					} = this.props;
					let s = P;
					return e && !t ? s = _ : !e && t && (s = j), o.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = w(C)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: i.Q
			}))(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, i;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/constants/posts.ts"),
				a = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = s("./src/reddit/hooks/useUserContext.ts"),
				c = s("./src/reddit/models/User/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.createContext(null);

			function p(e) {
				const t = Object(n.e)(t => Object(u.G)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					r = Object(n.e)(e => t ? Object(l.K)(e, {
						identifier: t.belongsTo
					}) : null),
					i = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(n.e)(n => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(n, {
							postId: e
						}),
						isModerator: !(!i || !n.moderatingSubreddits[i.name]),
						post: t,
						postId: e,
						subreddit: i,
						subredditOrProfile: r,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function h(e) {
				const {
					postId: t,
					children: s
				} = e, r = p(t);
				return i.a.createElement(m.Provider, {
					value: r
				}, s)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return i.a.createElement(m.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return i.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function g(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return i.a.createElement(m.Provider, {
						value: s
					}, i.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				i = s.n(r),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = s("./src/reddit/reducers/user/prefs/index.ts"),
				d = s("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = i.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(n.e)(e => ({
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.cb)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.P)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return i.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function s(t) {
					return i.a.createElement(u.Consumer, null, s => i.a.createElement(e, c({}, t, s)))
				}
				return s.displayName = `UserContext(${t})`, s
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/config.ts"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(n.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: i.jb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(i.a)(Object(n.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: r.jb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return l
			}));
			var r = s("./src/config.ts");
			const i = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				n = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : i),
						s = c(e ? a : n);
					t && s && (t.href = e ? i : o, s.href = e ? n : a)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./node_modules/react-redux/es/index.js");

			function n(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(i.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/react/index.js"),
				i = s("./src/reddit/contexts/User/index.tsx");

			function n() {
				return Object(r.useContext)(i.a)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i, n, o = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const r = s.media[0],
					i = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let n = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (i.forEach(s => {
						const i = r[s],
							[o, a] = s.split("x").map(e => parseInt(e));
						(o < n.width && o >= e || a < n.height && a >= t) && (n = {
							height: a,
							width: o,
							url: i
						})
					}), !n.url && i.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, i] = e.split("x").map(e => parseInt(e));
					n = {
						height: i,
						width: s,
						url: t
					}
				}
				return n.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, s) {
				const r = c(e, t, s),
					i = c(2 * e, 2 * t, s);
				return {
					url: u(r),
					url2x: u(i)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(i || (i = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(n || (n = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, i = s("./node_modules/lodash/isEqual.js"),
				n = s.n(i),
				o = s("./node_modules/lodash/merge.js"),
				a = s.n(o),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				h = s("./src/reddit/actions/modQueue/constants.ts"),
				f = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				O = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = s("./src/reddit/actions/pages/postCreation.ts"),
				v = s("./src/reddit/actions/pages/postDraft.ts"),
				P = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				j = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				_ = s("./src/reddit/actions/pages/profilePosts.ts"),
				E = s("./src/reddit/actions/pages/search/index.ts"),
				T = s("./src/reddit/actions/pages/subreddit.ts"),
				w = s("./src/reddit/actions/pages/topic.ts"),
				C = s("./src/reddit/actions/postCreation/constants.ts"),
				S = s("./src/reddit/actions/postDraft.ts"),
				x = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				I = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				M = s("./src/reddit/actions/subreddit.ts"),
				R = s("./src/reddit/actions/users.ts"),
				N = s("./src/reddit/constants/postLayout.ts"),
				k = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				L = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				U = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...k.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: L.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.m.OFF,
					layout: N.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.u.CONFIDENCE,
					editorMode: L.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: F.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					loginOtpEnabled: !1,
					markMessagesRead: !0,
					nightmode: !1,
					openPostInNewTab: !1,
					over18: !1,
					profileLayout: void 0,
					reduceAnimationsFromAwards: !1,
					rpanDuDismissalTime: void 0,
					showActiveCommunities: !0,
					showPresence: !1,
					showRpanDu: !0,
					showTwitter: !1,
					sort: u.Y.Hot,
					stylesEnabled: !0,
					subreddit: {},
					subscriptionsPinned: void 0,
					surveyLastSeenTime: void 0,
					thirdPartyDataPersonalizedAds: !0,
					thirdPartyPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedAds: !0,
					thirdPartySiteDataPersonalizedContent: !0,
					showLocationBasedRecommendations: !0,
					topContentDismissalTime: 0,
					topContentTimesDismissed: 0,
					rememberCommunitySort: !1,
					useMarkdown: !1,
					gatedSubredditOptIn: !1,
					quarantineOptIn: !1
				},
				q = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				H = (e, t) => {
					if (!t) return e;
					const s = c()({
							...t.account,
							...t
						}, G),
						r = t.subreddit,
						i = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						i[e] = {
							...q,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: i
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return n()(o, e) ? e : o
				},
				W = (e, t, s) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.c = (e = B, t) => {
				switch (t.type) {
					case l.m:
					case l.t: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case C.s:
					case C.Q: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case p.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case p.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case S.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case x.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case x.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case x.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return W(e, r, {
							layout: s
						})
					}
					case x.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case x.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.i:
						return {
							...e, over18: !0
						};
					case x.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case x.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case b.h:
						return {
							...e, gatedSubredditOptIn: t.payload
						};
					case b.j:
						return {
							...e, quarantineOptIn: t.payload
						};
					case x.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: s,
								topContentTimesDismissed: r
							}
						}
						return e;
					case A.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case A.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case x.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case x.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.b:
					case b.c:
					case b.k:
					case b.l:
					case b.g:
					case b.a:
					case b.m:
					case g.e:
					case g.h:
					case f.a:
					case f.e:
					case f.b:
					case f.f:
					case f.d:
					case f.h:
					case m.b:
					case T.SUBREDDIT_LOADED:
					case O.b:
					case O.a:
					case P.e:
					case j.e:
					case j.b:
					case _.PROFILE_POSTS_LOADED:
					case m.f:
					case M.i:
					case I.e:
					case D.b:
					case y.PAGE_LOADED:
					case v.PAGE_LOADED:
					case x.j:
					case x.b:
					case E.c:
					case x.a:
					case R.c:
					case w.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case x.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return W(e, s, r)
					}
					case P.d:
					case j.d:
					case j.a:
					case _.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: i
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== i && (s = {
								...s,
								showPresence: i
							})
						}
						return s
					}
					case h.h:
					case h.j:
					case h.i:
					case h.g:
					case h.f:
					case h.n:
					case h.m:
					case h.p:
					case h.q:
					case h.w:
					case h.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case x.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: i
							} = s.additional;
						let n = e;
						return e.enableFollowers !== r && (n = {
							...n,
							enableFollowers: r
						}), e.showActiveCommunities !== i && (n = {
							...n,
							showActiveCommunities: i
						}), n
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/pages/PostCreation/index.tsx"
					}
				}),
				c = e => `/${e}/submit`,
				u = (e, t) => {
					return o.c.replace(/:subredditName/, e) + (t ? `?collection=${t}` : "")
				},
				l = e => o.a.replace(/:profileName/, e),
				b = {
					action: Object(n.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), s.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: i.s.POST_CREATION,
					exact: !0,
					meta: {
						name: i.Nb.POST_CREATION
					},
					path: a,
					prefetches: [i.s.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "h", (function() {
				return u
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "j", (function() {
				return b
			})), s.d(t, "i", (function() {
				return m
			}));
			var r = s("./node_modules/reselect/es/index.js");
			const i = e => e.appBadges.badges,
				n = Object(r.a)(i, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = Object(r.a)(i, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(r.a)(i, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(r.a)(n, i, (e, t) => {
					var s;
					return 0 === e && !!(null === (s = t.chatHasNewMessages) || void 0 === s ? void 0 : s.isShowing)
				}),
				c = Object(r.a)(i, e => e && e.activityTab && e.activityTab.count || 0),
				u = Object(r.a)(i, e => e && e.messageTab && e.messageTab.count || 0),
				l = Object(r.a)(c, u, (e, t) => e + t),
				b = Object(r.a)(n, u, (e, t) => e + t),
				m = Object(r.a)(n, l, (e, t) => e + t)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "d", (function() {
				return y
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Cb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(r.a)(d, e => e === i.Jd.Enabled),
				u = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Ed,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(r.a)(c, u, (e, t) => e && t === i.Id.Enabled),
				b = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Sb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(r.a)(c, b, (e, t) => e && t === i.mc.Enabled),
				p = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Ab,
					experimentEligibilitySelector: o.e
				}), a.a),
				h = Object(r.a)(p, e => e === i.Gd.ContinuousScroll),
				f = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Bb,
					experimentEligibilitySelector: o.e
				}), a.a),
				g = Object(r.a)(f, e => e === i.Hd.Enabled),
				O = Object(r.a)(e => Object(n.c)(e, {
					experimentName: i.Lb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				y = Object(r.a)(O, e => e === i.eb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.412dc490aefe74f22c06.js.map