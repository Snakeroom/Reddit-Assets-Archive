// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.dae0c0e33b93d3692de8.js
// Retrieved at 4/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return T
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-dom/index.js"),
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
							i = t[1],
							n = void 0 === i ? s : i,
							a = t[2],
							d = void 0 === a ? s : a,
							c = t[3];
						return s + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), i = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(r !== t.root || s !== t.rootMargin || a(i, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var r = d.get(e);
				if (r)
					for (var s, i = r.values(); s = i.next().value;)
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

			function O(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var y = ["root", "rootMargin", "threshold"],
				v = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				_ = P.hasOwnProperty,
				j = P.toString,
				E = function(e) {
					return y.reduce((function(t, r) {
						if (_.call(e, r)) {
							var s = "root" === r && "[object String]" === j.call(e[r]);
							t[r] = s ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, r;

					function s() {
						for (var t, r = arguments.length, s = new Array(r), i = 0; i < r; i++) s[i] = arguments[i];
						return O(g(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), O(g(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var s = r.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), O(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(E(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), O(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), O(g(t), "externalUnobserve", (function() {
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
						return null != e ? i.a.cloneElement(i.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(i.a.Component);
			O(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function n() {}
			n.resetWarningCache = i, e.exports = function() {
				function e(e, t, r, i, n, o) {
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
					checkPropTypes: n,
					resetWarningCache: i
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
			const i = () => "undefined" != typeof document,
				n = () => i() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: n()
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
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const s = "APP_BADGES__PENDING",
				i = "APP_BADGES__LOADED",
				n = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			}));
			var s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				n = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = r("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(i.c),
				l = Object(s.a)(i.b),
				b = Object(s.a)(i.d),
				m = Object(s.a)(i.a),
				p = e => {
					let {
						key: t,
						count: r
					} = e;
					return {
						[t]: {
							count: r,
							style: c.b.Numbered
						}
					}
				},
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
				f = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					e(u());
					const i = await async function(e) {
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
					}(s);
					i ? (e(l(i)), e(Object(n.d)())) : e(m())
				};
			const g = () => async e => {
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
				i = r("./src/reddit/actions/profile/index.ts"),
				n = (r("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), r("./src/reddit/models/User/index.ts")),
				o = r("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(s.a)("MOD_PERMS__REQUEST_PENDING"), Object(s.a)(a), Object(s.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const r = Object(o.k)(t());
					if (r) {
						const t = Object(n.e)(r);
						await e(Object(i.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return n
			}));
			const s = "PAGE__MULTIREDDIT_FEED_PENDING",
				i = "PAGE__MULTIREDDIT_FEED_LOADED",
				n = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_POSTS_PENDING", (function() {
				return I
			})), r.d(t, "PROFILE_POSTS_LOADED", (function() {
				return A
			})), r.d(t, "PROFILE_POSTS_FAILED", (function() {
				return M
			})), r.d(t, "profilePostsPending", (function() {
				return R
			})), r.d(t, "profilePostsLoaded", (function() {
				return N
			})), r.d(t, "profilePostsFailed", (function() {
				return k
			})), r.d(t, "profilePostsRequested", (function() {
				return F
			})), r.d(t, "MORE_POSTS_PENDING", (function() {
				return L
			})), r.d(t, "MORE_POSTS_LOADED", (function() {
				return V
			})), r.d(t, "MORE_POSTS_FAILED", (function() {
				return U
			})), r.d(t, "morePostsPending", (function() {
				return G
			})), r.d(t, "morePostsLoaded", (function() {
				return B
			})), r.d(t, "morePostsFailed", (function() {
				return q
			})), r.d(t, "morePostsRequested", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = r("./node_modules/lodash/pick.js"),
				i = r.n(s),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeListingKey/index.ts"),
				a = r("./src/lib/safeGet/index.ts"),
				d = r("./src/reddit/actions/contentGate.ts"),
				c = r("./src/reddit/actions/externalAccount.ts"),
				u = r("./src/reddit/actions/moderatingSubreddits.ts"),
				l = r("./src/reddit/actions/pages/profileShared.ts"),
				b = r("./src/reddit/actions/pinnedPost.ts"),
				m = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				h = r("./src/reddit/actions/subreddit.ts"),
				f = r("./src/reddit/constants/errors.ts"),
				g = r("./src/reddit/constants/parameters.ts"),
				O = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/config.ts"),
				v = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				P = r("./src/lib/constants/index.ts"),
				_ = r("./src/lib/makeApiRequest/index.ts"),
				j = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, r) => Object(_.a)(e, {
				data: r,
				endpoint: Object(j.a)(Object(v.a)(Object(E.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: P.kb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var w = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = r("./src/reddit/helpers/post/index.ts"),
				S = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				x = r("./src/reddit/selectors/listings.ts"),
				D = r("./src/reddit/selectors/profile.ts");
			const I = "PAGE__PROFILE_POSTS_PENDING",
				A = "PAGE__PROFILE_POSTS_LOADED",
				M = "PAGE__PROFILE_POSTS_FAILED",
				R = Object(n.a)(I),
				N = Object(n.a)(A),
				k = Object(n.a)(M),
				F = e => async (t, r, s) => {
					const {
						queryParams: n,
						params: y
					} = e, {
						sort: v,
						t: P
					} = Object(l.b)(n), {
						profileName: _
					} = y, j = Object(o.a)(`u_${_}`, v, n), E = r(), I = Object(a.a)(E.listings.postOrder.ids, j), A = Object(x.c)(E, {
						listingKey: j
					}), M = Object(x.d)(E, {
						listingKey: j
					});
					if (await t(p.d(_)), M || I && !A) {
						if (I) {
							const e = Object(D.q)(r(), {
								profileName: _
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const F = {
						...i()(e.queryParams, [...g.n, ...g.m, g.j]),
						layout: Object(O.R)(E, {}).toLowerCase(),
						sort: v,
						t: Object(w.a)(v, P)
					};
					t(R({
						key: j
					}));
					const L = await Object(S.a)("profilePosts", () => T(s.apiContext(), _, F));
					if (!L.ok) return t(k({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: j
					})), L.body.reason === f.a.DeletedProfile && t(Object(d.s)({
						profileName: _
					})), void t(m.n(L.status));
					const V = L.body;
					await Object(C.a)(s.gqlContext, V.posts).then(e => V.posts = e), t(N({
						key: j,
						meta: r().meta,
						...V
					}));
					const U = Object(D.m)(r(), _),
						{
							pinned: G
						} = V;
					t(Object(b.h)({
						profileId: U,
						pinned: G
					})), await Promise.all([t(Object(l.c)(_)), t(Object(h.q)()), t(Object(u.b)()), t(c.o(_))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", V = "PROFILE_POSTS__MORE_POSTS_LOADED", U = "PROFILE_POSTS__MORE_POSTS_FAILED", G = Object(n.a)(L), B = Object(n.a)(V), q = Object(n.a)(U), H = () => async (e, t, r) => {
					let {
						apiContext: s,
						gqlContext: n
					} = r;
					const a = t(),
						{
							currentPage: d
						} = a.platform;
					if (!d || !d.routeMatch) return;
					const {
						queryParams: c,
						params: u
					} = d.routeMatch.match, {
						sort: b,
						t: m
					} = Object(l.b)(c), {
						profileName: p
					} = u, h = Object(o.a)(`u_${p}`, b, c), f = Object(x.g)(a, {
						listingKey: h
					});
					if (!f) return;
					const y = Object(x.d)(a, {
							listingKey: h
						}),
						v = Object(x.e)(a, {
							listingKey: h,
							token: f.token
						});
					if (y || v) return;
					e(G({
						key: h,
						fetchedToken: f.token
					}));
					const P = {
							after: f.token,
							dist: f.dist,
							sort: b,
							t: m,
							...i()(c, g.n),
							layout: Object(O.R)(a, {}).toLowerCase()
						},
						_ = await T(s(), p, P),
						j = _.body,
						E = a.listings.postOrder.ids[h],
						w = j.postIds || [];
					await Object(C.a)(n, j.posts).then(e => j.posts = e);
					const S = {
						...j,
						postIds: w.filter(e => !E || !E.includes(e))
					};
					_.ok ? (e(B({
						fetchedToken: f.token,
						key: h,
						meta: a.meta,
						...S
					})), await e(Object(l.c)(p))) : e(q({
						account: _.body.data ? _.body.data.account : null,
						error: _.error,
						fetchedToken: f.token,
						key: h
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
				return h
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "i", (function() {
				return A
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/endpoints/post/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(n.a)(m),
				h = "PINNEDPOST__PIN_POST_SUCCESS",
				f = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(n.a)(h),
				O = Object(n.a)(f),
				y = "PINNEDPOST__PIN_POST_PENDING",
				v = "PINNEDPOST__UNPIN_POST_PENDING",
				P = Object(n.a)(y),
				_ = Object(n.a)(v),
				j = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(n.a)(j),
				w = Object(n.a)(E),
				C = e => Object(a.f)({
					buttonAction: A(e, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: s.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				S = (e, t) => Object(a.f)({
					buttonAction: A(e, !0),
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
				x = () => Object(a.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				D = () => Object(a.f)({
					kind: u.b.Error,
					text: s.fbt._("You can't pin a removed post", null, {
						hk: "3bdn2y"
					})
				}),
				I = () => Object(a.f)({
					kind: u.b.Error,
					text: s.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				A = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return async (r, s, n) => {
						let {
							apiContext: a
						} = n;
						const u = s(),
							m = u.posts.models[e];
						if (!m) return;
						const p = !Object(l.s)(u, {
							postId: e
						});
						if (p && m.isRemoved) return r(D());
						const h = m.author,
							f = Object(b.m)(u, h),
							[y, v, j, E, A] = p ? [P, g, T, C, x] : [_, O, w, S, I];
						if (p) {
							if (Object(l.P)(u, {
									profileName: h
								}).length >= i.db) return void r(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
						}
						const M = Object(l.p)(u, e, h),
							R = !p && M;
						r(y({
							postId: e,
							profileId: f
						})), (await Object(c.t)(a(), e, p, !0)).ok ? (r(v({
							postId: e,
							profileId: f
						})), t || r(E(e, R))) : (r(j({
							postId: e,
							profileId: f
						})), r(A()))
					}
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return _
			})), r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return w
			}));
			var s = r("./node_modules/react-router-redux/es/index.js"),
				i = r("./src/lib/addQueryParams/index.ts"),
				n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/filterQueryParams/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				u = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = r("./src/reddit/helpers/name/index.ts"),
				b = r("./src/reddit/models/PostCreationForm/index.ts"),
				m = r("./src/reddit/routes/postCreation/index.ts"),
				p = r("./src/reddit/routes/postCreation/constants.ts"),
				h = r("./src/reddit/selectors/postCreations.ts"),
				f = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				O = r("./src/reddit/actions/postCreation/constants.ts"),
				y = r("./src/reddit/actions/postCreation/general.ts");
			const v = Object(a.a)(O.N),
				P = Object(a.a)(O.O),
				_ = Object(a.a)(O.M),
				j = (e, t) => async (r, s, i) => {
					let {
						apiContext: o
					} = i, a = s();
					const {
						name: m,
						isProfile: p
					} = e, O = Object(f.e)(a), y = O && !p && Object(l.a)(O.name, m), P = a.creations.api.subreddit.change.pending;
					if (y || P) return;
					const _ = Object(u.v)(t);
					if (!m) return void r(E(e, _));
					r(v(e));
					const j = p ? {
						profileName: m
					} : {
						subredditName: m
					};
					if (await r(Object(c.postCreationPageDataRequested)(j)), p || !Object(h.C)(a)) return r(E(e, _));
					const T = e.allowedPostTypes || Object(g.w)(s(), {
						subredditName: m
					});
					if (!T) return void r(E(e, _));
					let w;
					a = s();
					const C = Object(h.mb)(a),
						S = Object(h.C)(a);
					if (C === n.Xb.MEDIA && S) {
						const e = Object(h.W)(a),
							t = Object(b.x)(e),
							r = Object(h.N)(a) && e.items.length > 1,
							s = !t && !r;
						if (r && !T.galleries) w = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (s && !T.images) w = b.q.ImageWillBeRemoved;
						else if (t && !T.videos) {
							const t = a.uploads[e.items[0].uploadKey],
								r = t && t.metadata.videoDuration || 0;
							T.images ? r > n.hb && (w = b.q.VideoWillBeRemovedTooLongForGif) : w = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(w ? Object(d.i)(w) : E({
						...e,
						allowedPostTypes: T
					}, _))
				}, E = function(e, t) {
					let r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
					return async (n, o) => {
						const {
							name: a,
							isProfile: d
						} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
						let b = "";
						b = a ? l(a) : p.b, b = Object(i.a)(b, {
							...u,
							draft: t || u.draft
						}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (n(P(e)), r && n(Object(y.t)(!0)), n(Object(y.i)()), n(Object(s.c)(b)))
					}
				}, T = e => async (t, r) => {
					const n = r().platform.currentPage,
						o = n.queryParams,
						a = Object(i.a)(n.url, {
							...o,
							collection: e
						});
					t(Object(s.c)(a))
				}, w = () => async (e, t) => {
					const r = t().platform.currentPage,
						i = Object(o.a)(r.url, ["collection"]);
					e(Object(s.c)(i))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return D
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "j", (function() {
				return F
			})), r.d(t, "l", (function() {
				return L
			})), r.d(t, "i", (function() {
				return V
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "k", (function() {
				return G
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "s", (function() {
				return J
			})), r.d(t, "r", (function() {
				return X
			})), r.d(t, "g", (function() {
				return Y
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
				i = r("./src/lib/formatApiError/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/postCreation/general.ts"),
				a = r("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/models/StructuredStyles/index.ts");
			var m = r("./src/reddit/constants/headers.ts"),
				p = r("./src/reddit/helpers/name/index.ts"),
				h = r("./src/reddit/models/PostDraft/index.ts"),
				f = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				O = r("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const r = (e => {
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
					return e.postDraftIds.push(r.id), e.postDrafts[r.id] = r, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === O.f.User) {
						const r = Object(f.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[r.id] = r
					} else {
						const r = Object(g.a)(t);
						e.subreddits[r.id] = r
					}
					return e
				}, t)
			};
			var v = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				P = r("./src/reddit/models/PostCreationForm/index.ts"),
				_ = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				E = r("./src/reddit/models/User/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				w = r("./src/reddit/selectors/postDraft.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				x = r("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				M = Object(n.a)(D),
				R = Object(n.a)(I),
				N = Object(n.a)(A),
				k = () => async (e, t, r) => {
					let {
						apiContext: i
					} = r;
					const n = t();
					if (!Object(x.k)(n) || Object(w.b)(n)) return;
					e(M());
					const o = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: s.kb.GET
					}))(i());
					o.ok ? e(R(y(o.body))) : e(N(o.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(n.a)(F), W = Object(n.a)(L), $ = Object(n.a)(V), Q = Object(n.a)(U), z = Object(n.a)(G), K = Object(n.a)(B), J = Object(n.a)(q), X = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					const c = r(),
						b = Object(w.g)(c),
						p = Object(T.bb)(c);
					if (b || p) return;
					const h = Object(w.h)(c, e);
					if (!h) return;
					t(H(h)), _.g(c, h);
					const f = await ((e, t, r) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: r ? s.kb.PUT : s.kb.POST,
						data: Object(v.a)(t)
					}).then(e => e.body.fields && Object(P.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: s.J.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(o(), h, e);
					if (f.ok) {
						const {
							id: r,
							draftsCount: s
						} = Object(v.c)(f.body);
						t(W({
							draftId: r,
							draftsCount: s
						})), e || t(Object(a.a)(h.destSubreddit, r, !1))
					} else {
						const e = f.error;
						e.type === s.J.BAD_CAPTCHA_ERROR ? t(K()) : e.type === s.J.VALIDATION_ERROR ? t(Q(e)) : e.type === s.J.SUBMIT_VALIDATION_ERROR ? t(z(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(i.a)(e)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(n.a)(Y), ee = e => async (t, r, s) => {
					let {
						apiContext: i
					} = s;
					t(Z(e));
					let n = P.f;
					const o = r();
					if (e.subredditId) {
						const t = Object(S.S)(o, {
								subredditId: e.subredditId
							}),
							r = Object(C.p)(o, {
								profileId: e.subredditId
							}),
							s = Object(x.k)(o);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : r && s && (n = {
							isProfile: !0,
							name: Object(E.e)(s)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const d = Object(w.h)(r(), e.id);
					d && _.j(r(), d)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", re = "POST_DELETE_DRAFT_FAILED", se = "POST_DELETE_DRAFT_PENDING", ie = Object(n.a)(te), ne = Object(n.a)(re), oe = Object(n.a)(se), ae = (e, t) => async (r, n, a) => {
					let {
						apiContext: m
					} = a;
					const p = n();
					if (Object(w.a)(p, e)) return;
					const h = Object(w.d)(p, {
						draftId: e
					});
					h && _.h(p, h), r(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: s.kb.DELETE
					}))(m(), e);
					if (f.ok) {
						const {
							draftsCount: s
						} = Object(v.c)(f.body);
						r(ie({
							draftId: e,
							draftsCount: s
						}));
						const i = Object(c.v)(t);
						e === i && r(Object(o.q)(!0, t))
					} else {
						const t = f.error;
						r(ne({
							draftId: e,
							apiError: t
						})), r(Object(d.f)({
							duration: d.a,
							kind: j.b.Error,
							text: Object(i.a)(t)
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
				i = r("./src/lib/makeActionCreator/index.ts"),
				n = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(i.a)("REDDIT_EMBED_PENDING"),
				b = Object(i.a)(c),
				m = Object(i.a)(u),
				p = (e, t) => async (e, r, s) => {
					let {
						apiContext: i
					} = s;
					const d = r();
					e(l());
					const c = await Object(o.a)(i());
					c.ok && c.body ? !t || c.body.account ? (e(b(c.body)), e(Object(n.d)()), h(d)) : Object(a.a)(e, d) : e(m(c.error))
				}, h = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === s.Ob.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "f", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/fastdom/index.ts"),
				n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				a = r("./src/reddit/helpers/tabBadging/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/selectors/appBadges.ts"),
				u = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(n.a)(m),
				h = (e, t) => {
					e <= 0 ? i.a.write(() => {
						Object(a.b)(!1), window.document.title = t
					}) : i.a.write(() => {
						Object(a.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(s.c)({
					basicChannelCount: c.e,
					subredditChannelCount: c.d,
					subredditMentionCount: c.c
				}),
				g = () => async (e, t) => {
					const r = t(),
						s = Object(o.f)(r, {}),
						i = Object(l.P)(r) || Object(l.Q)(r),
						n = Object(u.b)(r);
					if (!i || !s) return;
					const a = n ? Object(c.i)(r) : Object(c.j)(r);
					h(a, s), e(p({
						hasUnreadMessages: !!a
					}))
				}, O = () => async (e, t) => {
					{
						e(g());
						const r = (e => ({
							inboxCount: Object(c.h)(e),
							basicChannelCount: Object(c.e)(e)
						}))(t());
						Object(a.c)(r)
					}
				}, y = e => async (t, r) => {
					const s = r(),
						i = Object(c.e)(s),
						n = Object(c.h)(s),
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
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/lodash/isEqual.js"),
				i = r.n(s),
				n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/ads/store.ts"),
				l = r("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = r("./src/reddit/connectors/PostViewable/index.ts"),
				m = r("./src/reddit/constants/adEvents.ts"),
				p = r("./src/reddit/selectors/media.ts"),
				h = r("./src/reddit/selectors/video.ts");
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
				O = e => e.map(e => {
					let {
						event: t,
						cumulative: r = !1,
						cumulativeElapsedTime: s,
						remainingTime: i,
						threshold: n = null,
						viewabilityMinimum: o,
						checkAudible: a = !1,
						timeViewingInterrupted: d
					} = e;
					return {
						event: t,
						cumulative: r,
						checkAudible: a,
						timer: null,
						fired: !1,
						threshold: n,
						remainingTime: i,
						cumulativeElapsedTime: 0,
						viewabilityMinimum: o,
						timeViewingInitialized: 0,
						timeViewingInterrupted: d
					}
				}),
				y = () => O(f),
				v = () => O(g),
				P = [c.c, c.e, c.l, c.j, c.a, c.b],
				_ = [c.c, c.l, c.j, c.a],
				j = [c.c, c.e, c.l, c.b],
				E = e => "boolean" == typeof e.cumulative && e.cumulative,
				T = Object(a.c)({
					continuousViewingStartedAt: (e, t) => {
						let {
							post: r
						} = t;
						return Object(h.b)(e, {
							postId: r.id
						})
					},
					videoDuration: (e, t) => {
						let {
							post: r
						} = t;
						const s = Object(h.h)(e, {
							postId: r.id
						});
						if (s) return s.length
					},
					isAudible: e => Object(p.a)(e),
					isPlaying: (e, t) => {
						let {
							post: r
						} = t;
						return Object(h.d)(e, {
							postId: r.id
						})
					},
					isFullScreen: (e, t) => {
						let {
							post: r
						} = t;
						return Object(h.e)(e, {
							postId: r.id
						})
					}
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
						i = !1;
					return "object" == typeof t ? (r = t.threshold, s = !!t.playing, i = !!t.withSound) : r = t, this.isAdequatelyInView(e, r) && (!s || this.props.isPlaying) && (!i || this.props.isAudible)
				}
				handleThresholds(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const {
						post: s
					} = this.props, n = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!i()(n, this.inViewStats) && n.length > 0 && u.b(s.id, n, r);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!i()(o, this.outOfViewStats) && o.length > 0 && u.d(s.id, o, r), this.outOfViewStats = o, this.inViewStats = n
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
					let r = P;
					return e && !t ? r = j : !e && t && (r = _), o.a.createElement(d.a, {
						threshold: r,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = w(C)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(s.b)(e, function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return {
					...e,
					onPostViewable: i.Q
				}
			}(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, r) {
			"use strict";
			var s, i;
			r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(s || (s = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(i || (i = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return p
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			}));
			var s = r("./node_modules/react/index.js"),
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
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
			const m = i.a.createContext(null);

			function p(e) {
				const t = Object(n.e)(t => Object(u.G)(t, {
						postId: e
					})),
					{
						currentUser: r
					} = Object(d.a)(),
					s = Object(n.e)(e => t ? Object(l.K)(e, {
						identifier: t.belongsTo
					}) : null),
					i = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? s : null,
					b = !(!r || (null == t ? void 0 : t.author) !== Object(c.e)(r)),
					m = Object(n.e)(n => ({
						currentUser: r,
						imageGalleryCurrentItem: Object(u.i)(n, {
							postId: e
						}),
						isModerator: !(!i || !n.moderatingSubreddits[i.name]),
						post: t,
						postId: e,
						subreddit: i,
						subredditOrProfile: s,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function h(e) {
				const {
					postId: t,
					children: r
				} = e, s = p(t);
				return i.a.createElement(m.Provider, {
					value: s
				}, r)
			}

			function f(e) {
				const t = e.displayName || e.name;

				function r(r) {
					return i.a.createElement(m.Consumer, null, s => {
						if (!s) throw new Error(`No Post context for <${t}/>!`);
						return i.a.createElement(e, b({}, r, s))
					})
				}
				return r.displayName = `PostContext(${t})`, r
			}

			function g(e) {
				const t = e.displayName || e.name;

				function r(t) {
					const r = p(t.postId);
					return i.a.createElement(m.Provider, {
						value: r
					}, i.a.createElement(e, b({}, t, r)))
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
				i = r.n(s),
				n = r("./node_modules/react-redux/es/index.js"),
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
					nightmodeEnabled: Object(d.db)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.Q)(e)
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

				function r(t) {
					return i.a.createElement(u.Consumer, null, r => i.a.createElement(e, c({}, t, r)))
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
				i = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(n.a)(e, {
				endpoint: Object(o.a)(`${s.a.gatewayUrl}/desktopapi/v1/me`),
				method: i.kb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts"),
				n = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(i.a)(Object(n.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: s.kb.GET,
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
			const i = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				n = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = c(e ? o : i),
						r = c(e ? a : n);
					t && r && (t.href = e ? i : o, r.href = e ? n : a)
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
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				i = r("./node_modules/react-redux/es/index.js");

			function n(e) {
				const t = Object(s.useRef)(e);
				return t.current === e || Object(i.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./node_modules/react/index.js"),
				i = r("./src/reddit/contexts/User/index.tsx");

			function n() {
				return Object(s.useContext)(i.a)
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
				return i
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, i, n, o = r("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, r) {
				const s = r.media[0],
					i = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let n = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (i.forEach(r => {
						const i = s[r],
							[o, a] = r.split("x").map(e => parseInt(e));
						(o < n.width && o >= e || a < n.height && a >= t) && (n = {
							height: a,
							width: o,
							url: i
						})
					}), !n.url && i.length) {
					const e = Object.keys(s)[0],
						t = s[e],
						[r, i] = e.split("x").map(e => parseInt(e));
					n = {
						height: i,
						width: r,
						url: t
					}
				}
				return n.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, r) {
				const s = c(e, t, r),
					i = c(2 * e, 2 * t, r);
				return {
					url: u(s),
					url2x: u(i)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(s || (s = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(i || (i = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(n || (n = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, i = r("./node_modules/lodash/isEqual.js"),
				n = r.n(i),
				o = r("./node_modules/lodash/merge.js"),
				a = r.n(o),
				d = r("./node_modules/lodash/pick.js"),
				c = r.n(d),
				u = r("./src/lib/constants/index.ts"),
				l = r("./src/reddit/actions/comment/constants.ts"),
				b = r("./src/reddit/actions/contentGate.ts"),
				m = r("./src/reddit/actions/frontpage/constants.ts"),
				p = r("./src/reddit/actions/header.ts"),
				h = r("./src/reddit/actions/modQueue/constants.ts"),
				f = r("./src/reddit/actions/pages/constants.ts"),
				g = r("./src/reddit/actions/pages/modListing/constants.ts"),
				O = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = r("./src/reddit/actions/pages/postCreation.ts"),
				v = r("./src/reddit/actions/pages/postDraft.ts"),
				P = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				_ = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				j = r("./src/reddit/actions/pages/profilePosts.ts"),
				E = r("./src/reddit/actions/pages/search/index.ts"),
				T = r("./src/reddit/actions/pages/subreddit.ts"),
				w = r("./src/reddit/actions/pages/topic.ts"),
				C = r("./src/reddit/actions/postCreation/constants.ts"),
				S = r("./src/reddit/actions/postDraft.ts"),
				x = r("./src/reddit/actions/preferences.ts"),
				D = r("./src/reddit/actions/redditEmbed.ts"),
				I = r("./src/reddit/actions/search.ts"),
				A = r("./src/reddit/actions/structuredStyles/constants.ts"),
				M = r("./src/reddit/actions/subreddit.ts"),
				R = r("./src/reddit/actions/users.ts"),
				N = r("./src/reddit/constants/postLayout.ts"),
				k = r("./src/reddit/constants/preferences.ts"),
				F = r("./src/reddit/constants/theme.ts"),
				L = r("./src/reddit/models/PostCreationForm/index.ts"),
				V = r("./src/reddit/models/PostDraft/index.ts"),
				U = r("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(s || (s = {}));
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
					sort: u.Z.Hot,
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
					const r = c()({
							...t.account,
							...t
						}, G),
						s = t.subreddit,
						i = {
							...e.subreddit
						};
					Object.keys(s || {}).forEach(e => {
						i[e] = {
							...q,
							...s && s[e]
						}
					});
					const o = {
						...e,
						...r,
						subreddit: i
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return n()(o, e) ? e : o
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
			t.c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
					t = arguments.length > 1 ? arguments[1] : void 0;
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
					case C.s:
					case C.Q: {
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
					case S.g: {
						const {
							kind: r
						} = t.payload;
						return {
							...e,
							editorMode: r === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case x.h: {
						const {
							layout: r
						} = t.payload;
						return e.layout === r ? e : {
							...e,
							layout: r
						}
					}
					case x.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case x.p: {
						const {
							layout: r,
							subredditId: s
						} = t.payload;
						return W(e, s, {
							layout: r
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
					case _.e:
					case _.b:
					case j.PROFILE_POSTS_LOADED:
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
							subredditId: r,
							prefs: s
						} = t.payload;
						return W(e, r, s)
					}
					case P.d:
					case _.d:
					case _.a:
					case j.PROFILE_POSTS_FAILED: {
						let r = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: s,
								showPresence: i
							} = t.payload.account;
							e.nightmode !== s && (r = {
								...r,
								nightmode: s
							}), e.showPresence !== i && (r = {
								...r,
								showPresence: i
							})
						}
						return r
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
						const r = t.payload,
							{
								enableFollowers: s,
								showActiveCommunities: i
							} = r.additional;
						let n = e;
						return e.enableFollowers !== s && (n = {
							...n,
							enableFollowers: s
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
		"./src/reddit/routes/postCreation/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			}));
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = r("./src/lib/constants/index.ts"),
				n = r("./src/lib/loadableAction/index.ts"),
				o = r("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(s.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Subreddit"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(n.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Subreddit"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~f5b82e5d"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~adaf0b02"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: i.s.POST_CREATION,
					exact: !0,
					meta: {
						name: i.Ob.POST_CREATION
					},
					path: a,
					prefetches: [i.s.COMMENTS_PAGE]
				};
			t.a = b
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "e", (function() {
				return n
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
			const i = e => e.appBadges.badges,
				n = Object(s.a)(i, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				o = Object(s.a)(i, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(s.a)(i, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(s.a)(n, i, (e, t) => {
					var r;
					return 0 === e && !!(null === (r = t.chatHasNewMessages) || void 0 === r ? void 0 : r.isShowing)
				}),
				c = Object(s.a)(i, e => e && e.activityTab && e.activityTab.count || 0),
				u = Object(s.a)(i, e => e && e.messageTab && e.messageTab.count || 0),
				l = Object(s.a)(c, u, (e, t) => e + t),
				b = Object(s.a)(n, u, (e, t) => e + t),
				m = Object(s.a)(n, l, (e, t) => e + t)
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
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/constants/experiments.ts"),
				n = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Eb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(s.a)(d, e => e === i.Nd.Enabled),
				u = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Id,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(s.a)(c, u, (e, t) => e && t === i.Md.Enabled),
				b = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Vb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(s.a)(c, b, (e, t) => e && t === i.oc.Enabled),
				p = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Cb,
					experimentEligibilitySelector: o.e
				}), a.a),
				h = Object(s.a)(p, e => e === i.Kd.ContinuousScroll),
				f = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Db,
					experimentEligibilitySelector: o.e
				}), a.a),
				g = Object(s.a)(f, e => e === i.Ld.Enabled),
				O = Object(s.a)(e => Object(n.c)(e, {
					experimentName: i.Nb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				y = Object(s.a)(O, e => e === i.fb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.dae0c0e33b93d3692de8.js.map