// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.1fbc9a183353e7648c16.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-dom/index.js"),
				o = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, s) {
					return a(e[s], t[s])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							s = void 0 === r ? "0px" : r,
							n = t[1],
							i = void 0 === n ? s : n,
							a = t[2],
							d = void 0 === a ? s : a,
							c = t[3];
						return s + " " + i + " " + d + " " + (void 0 === c ? i : c)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = d.keys(); t = i.next().value;) {
					if (!(r !== t.root || s !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var r = d.get(e);
				if (r)
					for (var s, n = r.values(); s = n.next().value;)
						if (s.target === t.target) return s;
				return null
			}

			function l(e, t) {
				for (var r = 0; r < e.length; r++) {
					var s = u(t, e[r]);
					s && s.handleChange(e[r])
				}
			}

			function b(e) {
				return c(e) || new IntersectionObserver(l, e)
			}
			var m = r("./node_modules/invariant/browser.js"),
				p = r.n(m),
				f = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return p()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function O(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var y = ["root", "rootMargin", "threshold"],
				v = ["root", "rootMargin", "threshold", "disabled"],
				_ = Object.prototype,
				j = _.hasOwnProperty,
				P = _.toString,
				E = function(e) {
					return y.reduce((function(t, r) {
						if (j.call(e, r)) {
							var s = "root" === r && "[object String]" === P.call(e[r]);
							t[r] = s ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, r;

					function s() {
						for (var t, r = arguments.length, s = new Array(r), n = 0; n < r; n++) s[n] = arguments[n];
						return g(O(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(O(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var s = r.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), g(O(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(E(t.props)), t.target = t.targetNode, e = O(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(O(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(O(t), e)
						})), g(O(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = s).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var o = s.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = v.some((function(r) {
							return a(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, o.componentDidUpdate = function(e, t, r) {
						var s = !1;
						r || (s = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || s) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(n.a.Component);
			g(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function i() {}
			i.resetWarningCache = n, e.exports = function() {
				function e(e, t, r, n, i, o) {
					if (o !== s) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					checkPropTypes: i,
					resetWarningCache: n
				};
				return r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(s.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/brcast/dist/brcast.es.js");
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(s.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!n()) return;
					const e = Object.keys(u).find(e => e in document);
					return e ? u[e] : void 0
				})();
				e && document.addEventListener(e, l)
			})(), t.a = {
				isDocumentHidden: () => !i(),
				isDocumentVisible: i,
				subscribe: a,
				unsubscribe: d
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			const s = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = r("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(n.c),
				l = Object(s.a)(n.b),
				b = Object(s.a)(n.d),
				m = Object(s.a)(n.a),
				p = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				f = (e, t) => ({
					[c.c.ChatUnreadMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatHasNewMessages]: {
						isShowing: t,
						style: c.b.Filled
					}
				}),
				h = () => async (e, t, {
					gqlContext: r
				}) => {
					e(u());
					const s = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (r) return {
									...r,
									chatUnreadMessages: {
										count: (Number(r.chatUnreadMessages.count) || 0) + (Number(r.chatUnacceptedInvites.count) || 0) + (Number(r.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(r);
					s ? (e(l(s)), e(Object(i.d)())) : e(m())
				};
			const O = () => async e => {
				const t = p({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/profile/index.ts"),
				i = (r("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), r("./src/reddit/models/User/index.ts")),
				o = r("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(s.a)("MOD_PERMS__REQUEST_PENDING"), Object(s.a)(a), Object(s.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const r = Object(o.k)(t());
					if (r) {
						const t = Object(i.e)(r);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			const s = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_POSTS_PENDING", (function() {
				return x
			})), r.d(t, "PROFILE_POSTS_LOADED", (function() {
				return I
			})), r.d(t, "PROFILE_POSTS_FAILED", (function() {
				return A
			})), r.d(t, "profilePostsPending", (function() {
				return R
			})), r.d(t, "profilePostsLoaded", (function() {
				return k
			})), r.d(t, "profilePostsFailed", (function() {
				return M
			})), r.d(t, "profilePostsRequested", (function() {
				return N
			})), r.d(t, "MORE_POSTS_PENDING", (function() {
				return L
			})), r.d(t, "MORE_POSTS_LOADED", (function() {
				return F
			})), r.d(t, "MORE_POSTS_FAILED", (function() {
				return V
			})), r.d(t, "morePostsPending", (function() {
				return U
			})), r.d(t, "morePostsLoaded", (function() {
				return B
			})), r.d(t, "morePostsFailed", (function() {
				return G
			})), r.d(t, "morePostsRequested", (function() {
				return q
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				n = r.n(s),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeListingKey/index.ts"),
				a = r("./src/lib/safeGet/index.ts"),
				d = r("./src/reddit/actions/contentGate.ts"),
				c = r("./src/reddit/actions/externalAccount.ts"),
				u = r("./src/reddit/actions/moderatingSubreddits.ts"),
				l = r("./src/reddit/actions/pages/profileShared.ts"),
				b = r("./src/reddit/actions/pinnedPost.ts"),
				m = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				f = r("./src/reddit/actions/subreddit.ts"),
				h = r("./src/reddit/constants/errors.ts"),
				O = r("./src/reddit/constants/parameters.ts"),
				g = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/config.ts"),
				v = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				_ = r("./src/lib/constants/index.ts"),
				j = r("./src/lib/makeApiRequest/index.ts"),
				P = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, r) => Object(j.a)(e, {
				data: r,
				endpoint: Object(P.a)(Object(v.a)(Object(E.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: _.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var S = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				w = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = r("./src/reddit/selectors/listings.ts"),
				D = r("./src/reddit/selectors/profile.ts");
			const x = "PAGE__PROFILE_POSTS_PENDING",
				I = "PAGE__PROFILE_POSTS_LOADED",
				A = "PAGE__PROFILE_POSTS_FAILED",
				R = Object(i.a)(x),
				k = Object(i.a)(I),
				M = Object(i.a)(A),
				N = e => async (t, r, s) => {
					const {
						queryParams: i,
						params: y
					} = e, {
						sort: v,
						t: _
					} = Object(l.b)(i), {
						profileName: j
					} = y, P = Object(o.a)(`u_${j}`, v, i), E = r(), x = Object(a.a)(E.listings.postOrder.ids, P), I = Object(C.c)(E, {
						listingKey: P
					}), A = Object(C.d)(E, {
						listingKey: P
					});
					if (await t(p.d(j)), A || x && !I) {
						if (x) {
							const e = Object(D.q)(r(), {
								profileName: j
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const N = {
						...n()(e.queryParams, [...O.m, ...O.l, O.i]),
						layout: Object(g.R)(E, {}).toLowerCase(),
						sort: v,
						t: Object(S.a)(v, _)
					};
					t(R({
						key: P
					}));
					const L = await Object(w.a)("profilePosts", () => T(s.apiContext(), j, N));
					if (!L.ok) return t(M({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: P
					})), L.body.reason === h.a.DeletedProfile && t(Object(d.p)({
						profileName: j
					})), void t(m.n(L.status));
					const F = L.body;
					t(k({
						key: P,
						meta: r().meta,
						...F
					}));
					const V = Object(D.m)(r(), j),
						{
							pinned: U
						} = F;
					t(Object(b.h)({
						profileId: V,
						pinned: U
					})), await Promise.all([t(Object(l.c)(j)), t(Object(f.q)()), t(Object(u.b)()), t(c.o(j))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", F = "PROFILE_POSTS__MORE_POSTS_LOADED", V = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(i.a)(L), B = Object(i.a)(F), G = Object(i.a)(V), q = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t(),
						{
							currentPage: i
						} = s.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: a,
						params: d
					} = i.routeMatch.match, {
						sort: c,
						t: u
					} = Object(l.b)(a), {
						profileName: b
					} = d, m = Object(o.a)(`u_${b}`, c, a), p = Object(C.g)(s, {
						listingKey: m
					});
					if (!p) return;
					const f = Object(C.d)(s, {
							listingKey: m
						}),
						h = Object(C.e)(s, {
							listingKey: m,
							token: p.token
						});
					if (f || h) return;
					e(U({
						key: m,
						fetchedToken: p.token
					}));
					const y = {
							after: p.token,
							dist: p.dist,
							sort: c,
							t: u,
							...n()(a, O.m),
							layout: Object(g.R)(s, {}).toLowerCase()
						},
						v = await T(r(), b, y),
						_ = s.listings.postOrder.ids[m],
						j = v.body.postIds || [],
						P = {
							...v.body,
							postIds: j.filter(e => !_ || !_.includes(e))
						};
					v.ok ? (e(B({
						fetchedToken: p.token,
						key: m,
						meta: s.meta,
						...P
					})), await e(Object(l.c)(b))) : e(G({
						account: v.body.data ? v.body.data.account : null,
						error: v.error,
						fetchedToken: p.token,
						key: m
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "i", (function() {
				return I
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/endpoints/post/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(i.a)(m),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				h = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(i.a)(f),
				g = Object(i.a)(h),
				y = "PINNEDPOST__PIN_POST_PENDING",
				v = "PINNEDPOST__UNPIN_POST_PENDING",
				_ = Object(i.a)(y),
				j = Object(i.a)(v),
				P = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(i.a)(P),
				S = Object(i.a)(E),
				w = e => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: s.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				C = (e, t) => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? s.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : s.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(a.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				x = () => Object(a.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				I = (e, t = !1) => async (r, i, {
					apiContext: m
				}) => {
					const p = i(),
						f = p.posts.models[e];
					if (!f) return;
					const h = !Object(l.s)(p, {
						postId: e
					});
					if (h && f.isRemoved) return r((() => Object(a.f)({
						kind: u.b.Error,
						text: s.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const y = f.author,
						v = Object(b.m)(p, y),
						[P, E, I, A, R] = h ? [_, O, T, w, D] : [j, g, S, C, x];
					if (h) {
						if (Object(l.Q)(p, {
								profileName: y
							}).length >= n.cb) return void r(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const k = Object(l.p)(p, e, y),
						M = !h && k;
					r(P({
						postId: e,
						profileId: v
					})), (await Object(c.r)(m(), e, h, !0)).ok ? (r(E({
						postId: e,
						profileId: v
					})), t || r(A(e, M))) : (r(I({
						postId: e,
						profileId: v
					})), r(R()))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return j
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return S
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				n = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/filterQueryParams/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				u = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = r("./src/reddit/helpers/name/index.ts"),
				b = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				p = r("./src/reddit/routes/postCreation/constants.ts"),
				f = r("./src/reddit/selectors/postCreations.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				g = r("./src/reddit/actions/postCreation/constants.ts"),
				y = r("./src/reddit/actions/postCreation/general.ts");
			const v = Object(a.a)(g.N),
				_ = Object(a.a)(g.O),
				j = Object(a.a)(g.M),
				P = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					let o = s();
					const {
						name: a,
						isProfile: m
					} = e, p = Object(h.e)(o), g = p && !m && Object(l.a)(p.name, a), y = o.creations.api.subreddit.change.pending;
					if (g || y) return;
					const _ = Object(u.v)(t);
					if (!a) return void r(E(e, _));
					r(v(e));
					const j = m ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await r(Object(c.postCreationPageDataRequested)(j)), m || !Object(f.C)(o)) return r(E(e, _));
					const P = e.allowedPostTypes || Object(O.v)(s(), {
						subredditName: a
					});
					if (!P) return void r(E(e, _));
					let T;
					o = s();
					const S = Object(f.mb)(o),
						w = Object(f.C)(o);
					if (S === i.Vb.MEDIA && w) {
						const e = Object(f.W)(o),
							t = Object(b.x)(e),
							r = Object(f.N)(o) && e.items.length > 1,
							s = !t && !r;
						if (r && !P.galleries) T = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (s && !P.images) T = b.q.ImageWillBeRemoved;
						else if (t && !P.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								r = t && t.metadata.videoDuration || 0;
							P.images ? r > i.gb && (T = b.q.VideoWillBeRemovedTooLongForGif) : T = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(T ? Object(d.i)(T) : E({
						...e,
						allowedPostTypes: P
					}, _))
				}, E = (e, t, r = !0) => async (i, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
					let b = "";
					b = a ? l(a) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(_(e)), r && i(Object(y.t)(!0)), i(Object(y.i)()), i(Object(s.c)(b)))
				}, T = e => async (t, r) => {
					const i = r().platform.currentPage,
						o = i.queryParams,
						a = Object(n.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(s.c)(a))
				}, S = () => async (e, t) => {
					const r = t().platform.currentPage,
						n = Object(o.a)(r.url, ["collection"]);
					e(Object(s.c)(n))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return x
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "p", (function() {
				return N
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "k", (function() {
				return B
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "s", (function() {
				return J
			})), r.d(t, "r", (function() {
				return Y
			})), r.d(t, "g", (function() {
				return X
			})), r.d(t, "q", (function() {
				return ee
			})), r.d(t, "c", (function() {
				return te
			})), r.d(t, "a", (function() {
				return re
			})), r.d(t, "b", (function() {
				return se
			})), r.d(t, "o", (function() {
				return ae
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/formatApiError/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/postCreation/general.ts"),
				a = r("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/models/StructuredStyles/index.ts");
			var m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/name/index.ts"),
				f = r("./src/reddit/models/PostDraft/index.ts"),
				h = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				O = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const r = (e => {
						let t;
						return t = "link" === e.kind ? {
							kind: f.b.Link,
							body: e.body || void 0
						} : "markdown" === e.kind ? {
							kind: f.b.Markdown,
							body: e.body || void 0
						} : {
							kind: f.b.RichText,
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
					return e.postDraftIds.push(r.id), e.postDrafts[r.id] = r, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === g.f.User) {
						const r = Object(h.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[r.id] = r
					} else {
						const r = Object(O.a)(t);
						e.subreddits[r.id] = r
					}
					return e
				}, t)
			};
			var v = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				_ = r("./src/reddit/models/PostCreationForm/index.ts"),
				j = r("./src/reddit/helpers/trackers/postComposer.ts"),
				P = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/models/User/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				S = r("./src/reddit/selectors/postDraft.ts"),
				w = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/selectors/user.ts");
			const x = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				R = Object(i.a)(x),
				k = Object(i.a)(I),
				M = Object(i.a)(A),
				N = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t();
					if (!Object(D.k)(n) || Object(S.b)(n)) return;
					e(R());
					const i = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: s.jb.GET
					}))(r());
					i.ok ? e(k(y(i.body))) : e(M(i.error))
				}, L = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(L), W = Object(i.a)(F), $ = Object(i.a)(V), K = Object(i.a)(U), Q = Object(i.a)(B), z = Object(i.a)(G), J = Object(i.a)(q), Y = e => async (t, r, {
					apiContext: i
				}) => {
					const o = r(),
						c = Object(S.g)(o),
						b = Object(T.bb)(o);
					if (c || b) return;
					const p = Object(S.h)(o, e);
					if (!p) return;
					t(H(p)), j.f(o, p);
					const f = await ((e, t, r) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: r ? s.jb.PUT : s.jb.POST,
						data: Object(v.a)(t)
					}).then(e => e.body.fields && Object(_.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: s.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), p, e);
					if (f.ok) {
						const {
							id: r,
							draftsCount: s
						} = Object(v.c)(f.body);
						t(W({
							draftId: r,
							draftsCount: s
						})), e || t(Object(a.a)(p.destSubreddit, r, !1))
					} else {
						const e = f.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(z()) : e.type === s.I.VALIDATION_ERROR ? t(K(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: P.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(X), ee = e => async (t, r, {
					apiContext: s
				}) => {
					t(Z(e));
					let n = _.f;
					const i = r();
					if (e.subredditId) {
						const t = Object(C.R)(i, {
								subredditId: e.subredditId
							}),
							r = Object(w.p)(i, {
								profileId: e.subredditId
							}),
							s = Object(D.k)(i);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : r && s && (n = {
							isProfile: !0,
							name: Object(E.e)(s)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const o = Object(S.h)(r(), e.id);
					o && j.i(r(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", re = "POST_DELETE_DRAFT_FAILED", se = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(re), oe = Object(i.a)(se), ae = (e, t) => async (r, i, {
					apiContext: a
				}) => {
					const m = i();
					if (Object(S.a)(m, e)) return;
					const p = Object(S.d)(m, {
						draftId: e
					});
					p && j.g(m, p), r(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: s.jb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: s
						} = Object(v.c)(f.body);
						r(ne({
							draftId: e,
							draftsCount: s
						}));
						const n = Object(c.v)(t);
						e === n && r(Object(o.q)(!0, t))
					} else {
						const t = f.error;
						r(ie({
							draftId: e,
							apiError: t
						})), r(Object(d.f)({
							duration: d.a,
							kind: P.b.Error,
							text: Object(n.a)(t)
						}))
					}
				}
		},
		"./src/reddit/actions/redditEmbed.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			}));
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				m = Object(n.a)(u),
				p = (e, t) => async (e, r, {
					apiContext: s
				}) => {
					const n = r();
					e(l());
					const d = await Object(o.a)(s());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(i.d)()), f(n)) : Object(a.a)(e, n) : e(m(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === s.Mb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/search.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "p", (function() {
				return E
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return D
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "h", (function() {
				return A
			})), r.d(t, "o", (function() {
				return R
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "m", (function() {
				return L
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				i = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeSearchKey/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/parameters.ts"),
				l = r("./src/reddit/endpoints/page/search/index.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/search/getQueryWithNsfwSetting.ts"),
				p = r("./src/reddit/models/Multireddit/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/selectors/telemetry.ts"),
				O = r("./src/reddit/selectors/user.ts");
			const g = "SEARCH__DROPDOWN_CLOSED",
				y = "SEARCH__DROPDOWN_TOGGLED",
				v = "SEARCH__MORE_RESULTS_PENDING",
				_ = "SEARCH__MORE_RESULTS_RECEIVED",
				j = "SEARCH__MORE_RESULTS_FAILED",
				P = "SEARCH__UPDATE_SEARCH_QUERY",
				E = Object(a.a)(P),
				T = Object(a.a)(v),
				S = Object(a.a)(_),
				w = Object(a.a)(j),
				C = Object(a.a)(g),
				D = Object(a.a)(y),
				x = [{
					contentType: o.ac.Posts,
					token: o.Zb.Posts,
					stateKey: "postOrder"
				}, {
					contentType: o.ac.Subreddits,
					token: o.Zb.Subreddits,
					stateKey: "communityOrder"
				}, {
					contentType: o.ac.Users,
					token: o.Zb.Users,
					stateKey: "authorOrder"
				}],
				I = e => async (t, r, {
					gqlContext: n
				}) => {
					const a = r(),
						{
							queryParams: g
						} = a.platform.currentPage,
						y = Object(d.c)(g, Object(O.db)(a)),
						{
							multiredditName: v,
							subredditName: _,
							username: j
						} = a.platform.currentPage.urlParams;
					let P;
					j && v && (P = Object(p.h)(j, v));
					const E = y || i()(g, u.u),
						C = Object(d.e)(E),
						D = {
							...C,
							t: C.category ? o.gc.DAY : C.t,
							type: e
						},
						A = Object(d.b)(_ || v, j, D);
					let R;
					const k = {
						authors: null,
						communities: null,
						posts: null
					};
					if (e.every(e => Object.keys(o.ac).includes(e))) throw new Error("Should not attempt to fetch more results without a search type");
					if (x.filter(t => e.indexOf(t.contentType) > -1).forEach(({
							token: e,
							stateKey: t
						}) => {
							var r, s, n;
							const i = null === (r = a.listings[t]) || void 0 === r ? void 0 : r.loadMore[A];
							if (!i) return;
							const o = null === (s = a.listings[t]) || void 0 === s ? void 0 : s.api.pending[A],
								d = null === (n = a.listings[t]) || void 0 === n ? void 0 : n.fetchedTokens,
								c = d[A] && d[A][i.token];
							o || c || (R = i.token, k[e] = R)
						}), !Object.values(k).filter(e => !!e).length) return;
					const M = `error-${A}`;
					t(T({
						fetchedToken: R,
						key: A,
						type: e
					}));
					const N = [d.a.PromotedTrend, d.a.Trending].includes(C.source),
						L = Object(O.db)(a),
						F = {
							...D,
							q: C.q,
							after: R,
							type: (e || []).join(","),
							b: !0
						},
						V = _ ? [_] : void 0,
						U = Object(h.ib)(a.platform.currentPage),
						B = await Object(l.a)({
							context: n(),
							multiredditLabel: P,
							nsfw: !Object(m.a)(L, "1" === C.include_over_18, N, "1" === C.sr_nsfw),
							options: F,
							queryId: Object(b.c)(b.a.SearchResults),
							structureType: U,
							subredditNames: V,
							tokens: k
						});
					B.ok ? (t(S({
						key: A,
						fetchedToken: R,
						meta: a.meta,
						type: e,
						...B.body
					})), t(c.g(M))) : (t(w({
						key: A,
						error: B.error,
						fetchedToken: R,
						meta: a.meta,
						type: e,
						...B.body
					})), t(c.f({
						id: M,
						kind: f.b.Error,
						text: s.fbt._("Sorry, we couldn't load more search results.", null, {
							hk: "3IDePs"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: I(e)
					})))
				}, A = "SEARCH__TYPEAHEAD_SUCCESS", R = Object(a.a)(A), k = "SEARCH__DISABLE_SUBREDDIT_SEARCH", M = "SEARCH__ENABLE_SUBREDDIT_SEARCH", N = Object(a.a)(k), L = Object(a.a)(M)
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "f", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/fastdom/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/tabBadging/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/selectors/appBadges.ts"),
				u = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(i.a)(m),
				f = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				h = Object(s.c)({
					basicChannelCount: c.e,
					subredditChannelCount: c.d,
					subredditMentionCount: c.c
				}),
				O = () => async (e, t) => {
					const r = t(),
						s = Object(o.f)(r, {}),
						n = Object(l.I)(r) || Object(l.J)(r),
						i = Object(u.b)(r);
					if (!n || !s) return;
					const a = i ? Object(c.i)(r) : Object(c.j)(r);
					f(a, s), e(p({
						hasUnreadMessages: !!a
					}))
				}, g = () => async (e, t) => {
					{
						e(O());
						const r = (e => ({
							inboxCount: Object(c.h)(e),
							basicChannelCount: Object(c.e)(e)
						}))(t());
						Object(a.c)(r)
					}
				}, y = e => async (t, r) => {
					const s = r(),
						n = Object(c.e)(s),
						i = Object(c.h)(s),
						{
							basicChannelCount: o,
							inboxCount: a
						} = e;
					if (n !== o) {
						const e = Object(b.e)({
							count: o,
							key: d.c.ChatTab
						});
						t(Object(b.a)(e))
					}
					if (a && a !== i) {
						const e = Object(b.e)({
							count: a,
							key: d.c.MessageTab
						});
						t(Object(b.a)(e))
					}(n !== o || a && a !== i) && t(O())
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				n = r.n(s),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/ads/store.ts"),
				l = r("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = r("./src/reddit/connectors/PostViewable/index.ts"),
				m = r("./src/reddit/constants/adEvents.ts"),
				p = r("./src/reddit/selectors/media.ts"),
				f = r("./src/reddit/selectors/video.ts");
			const h = [{
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
				O = [{
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
				g = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: r,
					remainingTime: s,
					threshold: n = null,
					viewabilityMinimum: i,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: n,
					remainingTime: s,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				y = () => g(h),
				v = () => g(O),
				_ = [c.c, c.e, c.l, c.j, c.a, c.b],
				j = [c.c, c.l, c.j, c.a],
				P = [c.c, c.e, c.l, c.b],
				E = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, {
						post: t
					}) => Object(f.b)(e, {
						postId: t.id
					}),
					videoDuration: (e, {
						post: t
					}) => {
						const r = Object(f.h)(e, {
							postId: t.id
						});
						if (r) return r.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, {
						post: t
					}) => Object(f.d)(e, {
						postId: t.id
					}),
					isFullScreen: (e, {
						post: t
					}) => Object(f.e)(e, {
						postId: t.id
					})
				}),
				S = Object(b.a)(T);
			class w extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = v(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						n()(this.state.event, e) || this.setState({
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
						trackVideo: r
					} = this.props;
					this.visibilityChangeSubscriptionId && l.a.unsubscribe(this.visibilityChangeSubscriptionId), t && (u.d(e.id, c.r, !1), this.viewabilityStats.forEach(e => {
						E(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), r && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
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
					const r = e.timeViewingInterrupted - e.timeViewingInitialized;
					t = (e.viewabilityMinimum || 0) - r, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e)
				}
				pauseCumulativeStats(e) {
					let t;
					e.timer && !e.fired && (e.timeViewingInterrupted = Date.now(), e.cumulativeElapsedTime += e.timeViewingInterrupted - e.timeViewingInitialized, t = (e.viewabilityMinimum || 0) - e.cumulativeElapsedTime, e.remainingTime = t > 0 ? t : 0, this.clearTimer(e))
				}
				meetsViewabilityRequirements(e, t) {
					let r, s = !1,
						n = !1;
					return "object" == typeof t ? (r = t.threshold, s = !!t.playing, n = !!t.withSound) : r = t, this.isAdequatelyInView(e, r) && (!s || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, r = !1) {
					const {
						post: s
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && u.b(s.id, i, r);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && u.d(s.id, o, r), this.outOfViewStats = o, this.inViewStats = i
				}
				isAdequatelyInView(e, t) {
					return !!this.props.isFullScreen || !!e && e.intersectionRatio >= t && this.pageInFocus
				}
				addDurationBasedViewabilityMinimum(e) {
					this.props.videoDuration ? e.viewabilityMinimum = Math.min(.5 * this.props.videoDuration, c.g) : e.viewabilityMinimum = c.g, e.remainingTime = e.viewabilityMinimum
				}
				adjustThreshold(e, t) {
					const {
						height: r,
						width: s
					} = e.boundingClientRect;
					return !t.threshold && t.event === m.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = s * r < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === m.a.GroupMViewable && s * r > 242500 && (t.threshold = c.l), t
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
					let r = _;
					return e && !t ? r = P : !e && t && (r = j), o.a.createElement(d.a, {
						threshold: r,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(w)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(s.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.Q
			}))(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, r) {
			"use strict";
			var s, n;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(s || (s = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return O
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/constants/posts.ts"),
				a = r("./src/reddit/hooks/useMemoShallowEqual.ts"),
				d = r("./src/reddit/hooks/useUserContext.ts"),
				c = r("./src/reddit/models/User/index.ts"),
				u = r("./src/reddit/selectors/posts.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(u.H)(t, {
						postId: e
					})),
					{
						currentUser: r
					} = Object(d.a)(),
					s = Object(i.e)(e => t ? Object(l.J)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? s : null,
					b = !(!r || (null == t ? void 0 : t.author) !== Object(c.e)(r)),
					m = Object(i.e)(i => ({
						currentUser: r,
						imageGalleryCurrentItem: Object(u.i)(i, {
							postId: e
						}),
						isModerator: !(!n || !i.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: s,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function f(e) {
				const {
					postId: t,
					children: r
				} = e, s = p(t);
				return n.a.createElement(m.Provider, {
					value: s
				}, r)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function r(r) {
					return n.a.createElement(m.Consumer, null, s => {
						if (!s) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, r, s))
					})
				}
				return r.displayName = `PostContext(${t})`, r
			}

			function O(e) {
				const t = e.displayName || e.name;

				function r(t) {
					const r = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: r
					}, n.a.createElement(e, b({}, t, r)))
				}
				return r.displayName = `PostProvider(${t})`, r
			}
			t.c = m
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return m
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = r("./src/reddit/reducers/user/prefs/index.ts"),
				d = r("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = n.a.createContext({
				currentUser: null,
				modModeEnabled: !1,
				nightmodeEnabled: !1,
				prefs: a.a,
				isLoggedIn: !1
			});

			function l() {
				const e = Object(i.e)(e => ({
					currentUser: Object(d.k)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.W)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.J)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return n.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function m(e) {
				const t = e.displayName || e.name;

				function r(t) {
					return n.a.createElement(u.Consumer, null, r => n.a.createElement(e, c({}, t, r)))
				}
				return r.displayName = `UserContext(${t})`, r
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./src/config.ts"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${s.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(i.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.jb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return l
			}));
			var s = r("./src/config.ts");
			const n = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : n),
						r = c(e ? a : i);
					t && r && (t.href = e ? n : o, r.href = e ? i : a)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: d,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(s.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(s.useContext)(n.a)
			}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n, i, o = r("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, r) {
				const s = r.media[0],
					n = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(r => {
						const n = s[r],
							[o, a] = r.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: n
						})
					}), !i.url && n.length) {
					const e = Object.keys(s)[0],
						t = s[e],
						[r, n] = e.split("x").map(e => parseInt(e));
					i = {
						height: n,
						width: r,
						url: t
					}
				}
				return i.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, r) {
				const s = c(e, t, r),
					n = c(2 * e, 2 * t, r);
				return {
					url: u(s),
					url2x: u(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(s || (s = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return G
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, n = r("./node_modules/lodash/isEqual.js"),
				i = r.n(n),
				o = r("./node_modules/lodash/merge.js"),
				a = r.n(o),
				d = r("./node_modules/lodash/pick.js"),
				c = r.n(d),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/actions/comment/constants.ts"),
				b = r("./src/reddit/actions/contentGate.ts"),
				m = r("./src/reddit/actions/frontpage/constants.ts"),
				p = r("./src/reddit/actions/header.ts"),
				f = r("./src/reddit/actions/modQueue/constants.ts"),
				h = r("./src/reddit/actions/pages/constants.ts"),
				O = r("./src/reddit/actions/pages/modListing/constants.ts"),
				g = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = r("./src/reddit/actions/pages/postCreation.ts"),
				v = r("./src/reddit/actions/pages/postDraft.ts"),
				_ = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				j = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				P = r("./src/reddit/actions/pages/profilePosts.ts"),
				E = r("./src/reddit/actions/pages/search/index.ts"),
				T = r("./src/reddit/actions/pages/subreddit.ts"),
				S = r("./src/reddit/actions/pages/topic.ts"),
				w = r("./src/reddit/actions/postCreation/constants.ts"),
				C = r("./src/reddit/actions/postDraft.ts"),
				D = r("./src/reddit/actions/preferences.ts"),
				x = r("./src/reddit/actions/redditEmbed.ts"),
				I = r("./src/reddit/actions/search.ts"),
				A = r("./src/reddit/actions/structuredStyles/constants.ts"),
				R = r("./src/reddit/actions/subreddit.ts"),
				k = r("./src/reddit/actions/users.ts"),
				M = r("./src/reddit/constants/postLayout.ts"),
				N = r("./src/reddit/constants/preferences.ts"),
				L = r("./src/reddit/constants/theme.ts"),
				F = r("./src/reddit/models/PostCreationForm/index.ts"),
				V = r("./src/reddit/models/PostDraft/index.ts"),
				U = r("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(s || (s = {}));
			const B = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...N.a, "loginOtpEnabled"],
				G = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: U.a,
					commentMode: F.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.m.OFF,
					layout: M.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: u.u.CONFIDENCE,
					editorMode: F.i.RICH_TEXT,
					enableFollowers: !0,
					geopopular: void 0,
					globalTheme: L.a,
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
					useMarkdown: !1
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
					const r = c()({
							...t.account,
							...t
						}, B),
						s = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(s || {}).forEach(e => {
						n[e] = {
							...q,
							...s && s[e]
						}
					});
					const o = {
						...e,
						...r,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? F.i.MARKDOWN : F.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				W = (e, t, r) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...r
						}
					}
				});
			t.c = (e = G, t) => {
				switch (t.type) {
					case l.m:
					case l.t: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							commentMode: r
						}
					}
					case w.s:
					case w.Q: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							editorMode: r
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
					case C.g: {
						const {
							kind: r
						} = t.payload;
						return {
							...e,
							editorMode: r === V.b.Markdown ? F.i.MARKDOWN : F.i.RICH_TEXT
						}
					}
					case D.h: {
						const {
							layout: r
						} = t.payload;
						return e.layout === r ? e : {
							...e,
							layout: r
						}
					}
					case D.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case D.p: {
						const {
							layout: r,
							subredditId: s
						} = t.payload;
						return W(e, s, {
							layout: r
						})
					}
					case D.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case D.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.g:
						return {
							...e, over18: !0
						};
					case D.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case D.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case D.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: r,
								topContentTimesDismissed: s
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: r,
								topContentTimesDismissed: s
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
					case D.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case D.d:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: a()({}, e.collapsedTraySections, t.payload)
						} : e;
					case b.a:
					case b.b:
					case b.h:
					case b.i:
					case b.f:
					case b.j:
					case O.e:
					case O.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case m.b:
					case T.SUBREDDIT_LOADED:
					case g.b:
					case g.a:
					case _.e:
					case j.e:
					case j.b:
					case P.PROFILE_POSTS_LOADED:
					case m.f:
					case R.i:
					case I.g:
					case x.b:
					case y.PAGE_LOADED:
					case v.PAGE_LOADED:
					case D.j:
					case D.b:
					case E.c:
					case D.a:
					case k.c:
					case S.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case D.q: {
						const {
							subredditId: r,
							prefs: s
						} = t.payload;
						return W(e, r, s)
					}
					case _.d:
					case j.d:
					case j.a:
					case P.PROFILE_POSTS_FAILED: {
						let r = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: s,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== s && (r = {
								...r,
								nightmode: s
							}), e.showPresence !== n && (r = {
								...r,
								showPresence: n
							})
						}
						return r
					}
					case f.h:
					case f.j:
					case f.i:
					case f.g:
					case f.f:
					case f.n:
					case f.m:
					case f.p:
					case f.q:
					case f.w:
					case f.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? H(e, t.payload.preferences) : e;
					case D.n: {
						const r = t.payload,
							{
								enableFollowers: s,
								showActiveCommunities: n
							} = r.additional;
						let i = e;
						return e.enableFollowers !== s && (i = {
							...i,
							enableFollowers: s
						}), e.showActiveCommunities !== n && (i = {
							...i,
							showActiveCommunities: n
						}), i
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/postCreation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/loadableAction/index.ts"),
				o = r("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(s.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Reddit~Subreddit"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), r.e("PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"), r.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), r.e("PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
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
					action: Object(i.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Reddit~Subreddit"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~d39c0d57"), r.e("PostCreation~Reddit~StandalonePostPage~SubredditTopContent~TopWeekPostsDiscoveryUnit~reddit-componen~2583c786"), r.e("PostCreation~Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~r~4c415e24"), r.e("PostCreation~Reddit~StandalonePostPage~Subreddit~reddit-components-ClassicPost~reddit-components-Com~82e48dd3"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.s.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Mb.POST_CREATION
					},
					path: a,
					prefetches: [n.s.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "j", (function() {
				return b
			})), r.d(t, "i", (function() {
				return m
			}));
			var s = r("./node_modules/reselect/es/index.js");
			const n = e => e.appBadges.badges,
				i = Object(s.a)(n, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = Object(s.a)(n, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(s.a)(n, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(s.a)(i, n, (e, t) => {
					var r;
					return 0 === e && !!(null === (r = t.chatHasNewMessages) || void 0 === r ? void 0 : r.isShowing)
				}),
				c = Object(s.a)(n, e => e && e.activityTab && e.activityTab.count || 0),
				u = Object(s.a)(n, e => e && e.messageTab && e.messageTab.count || 0),
				l = Object(s.a)(c, u, (e, t) => e + t),
				b = Object(s.a)(i, u, (e, t) => e + t),
				m = Object(s.a)(i, l, (e, t) => e + t)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.xb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(s.a)(d, e => e === n.xd.Enabled),
				u = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.sd,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(s.a)(c, u, (e, t) => e && t === n.wd.Enabled),
				b = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Jb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(s.a)(c, b, (e, t) => e && t === n.Zb.Enabled),
				p = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.vb,
					experimentEligibilitySelector: o.e
				}), a.a),
				f = Object(s.a)(p, e => e === n.ud.ContinuousScroll),
				h = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.wb,
					experimentEligibilitySelector: o.e
				}), a.a),
				O = Object(s.a)(h, e => e === n.vd.Enabled),
				g = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Eb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				y = Object(s.a)(g, e => e === n.fb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.1fbc9a183353e7648c16.js.map