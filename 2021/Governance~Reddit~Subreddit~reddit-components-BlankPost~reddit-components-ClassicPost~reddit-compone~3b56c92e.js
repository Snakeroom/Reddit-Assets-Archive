// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.25697e38259dc1009ca2.js
// Retrieved at 12/6/2021, 1:30:04 PM by Reddit Dataminer v1.0.0
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
				_ = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				v = j.hasOwnProperty,
				E = j.toString,
				P = function(e) {
					return y.reduce((function(t, r) {
						if (v.call(e, r)) {
							var s = "root" === r && "[object String]" === E.call(e[r]);
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
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(P(t.props)), t.target = t.targetNode, e = O(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
						var r = _.some((function(r) {
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
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return j
			}));
			var s, n = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/chat/actions/message/unreadCount.ts"),
				a = r("./src/chat/endpoints/sendbird/index.ts"),
				d = r("./src/reddit/actions/tabBadging.ts"),
				c = r("./src/reddit/selectors/chat.ts"),
				u = r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: b,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: p
			} = s, f = Object(i.a)(l), h = Object(i.a)(b), O = Object(i.a)(m), g = Object(i.a)(p);
			let y;
			const _ = 5 * n.kb,
				j = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!Object(u.K)(s) || !Object(c.d)(s)) return clearTimeout(y);
					y || e((() => async (e, t, {
						gqlContext: r
					}) => {
						const s = t(),
							{
								session: n
							} = s.user;
						if (n && Object(u.K)(s) && Object(c.d)(s)) {
							e(O());
							const t = await Object(a.g)(r());
							t && t.ok && Object(a.j)(t.body) ? (e(g({
								...Object(o.b)(t.body.data)
							})), e(Object(d.d)())) : e(h({
								error: t.error
							}))
						}
					})()), y = setTimeout(() => {
						e(j())
					}, _)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			}));
			var s = r("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				i = Object(s.a)(n)
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
				return w
			})), r.d(t, "PROFILE_POSTS_LOADED", (function() {
				return I
			})), r.d(t, "PROFILE_POSTS_FAILED", (function() {
				return A
			})), r.d(t, "profilePostsPending", (function() {
				return R
			})), r.d(t, "profilePostsLoaded", (function() {
				return M
			})), r.d(t, "profilePostsFailed", (function() {
				return N
			})), r.d(t, "profilePostsRequested", (function() {
				return k
			})), r.d(t, "MORE_POSTS_PENDING", (function() {
				return L
			})), r.d(t, "MORE_POSTS_LOADED", (function() {
				return F
			})), r.d(t, "MORE_POSTS_FAILED", (function() {
				return U
			})), r.d(t, "morePostsPending", (function() {
				return V
			})), r.d(t, "morePostsLoaded", (function() {
				return G
			})), r.d(t, "morePostsFailed", (function() {
				return B
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
				_ = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				j = r("./src/lib/constants/index.ts"),
				v = r("./src/lib/makeApiRequest/index.ts"),
				E = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, r) => Object(v.a)(e, {
				data: r,
				endpoint: Object(E.a)(Object(_.a)(Object(P.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: j.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var S = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				x = r("./src/reddit/selectors/listings.ts"),
				D = r("./src/reddit/selectors/profile.ts");
			const w = "PAGE__PROFILE_POSTS_PENDING",
				I = "PAGE__PROFILE_POSTS_LOADED",
				A = "PAGE__PROFILE_POSTS_FAILED",
				R = Object(i.a)(w),
				M = Object(i.a)(I),
				N = Object(i.a)(A),
				k = e => async (t, r, s) => {
					const {
						queryParams: i,
						params: y
					} = e, {
						sort: _,
						t: j
					} = Object(l.b)(i), {
						profileName: v
					} = y, E = Object(o.a)(`u_${v}`, _, i), P = r(), w = Object(a.a)(P.listings.postOrder.ids, E), I = Object(x.c)(P, {
						listingKey: E
					}), A = Object(x.d)(P, {
						listingKey: E
					});
					if (await t(p.d(v)), A || w && !I) {
						if (w) {
							const e = Object(D.q)(r(), {
								profileName: v
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const k = {
						...n()(e.queryParams, [...O.l, ...O.k, O.h]),
						layout: Object(g.Q)(P, {}).toLowerCase(),
						sort: _,
						t: Object(S.a)(_, j)
					};
					t(R({
						key: E
					}));
					const L = await Object(C.a)("profilePosts", () => T(s.apiContext(), v, k));
					if (!L.ok) return t(N({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: E
					})), L.body.reason === h.a.DeletedProfile && t(Object(d.p)({
						profileName: v
					})), void t(m.n(L.status));
					const F = L.body;
					t(M({
						key: E,
						meta: r().meta,
						...F
					}));
					const U = Object(D.m)(r(), v),
						{
							pinned: V
						} = F;
					t(Object(b.h)({
						profileId: U,
						pinned: V
					})), await Promise.all([t(Object(l.c)(v)), t(Object(f.q)()), t(Object(u.b)()), t(c.o(v))])
				}, L = "PROFILE_POSTS__MORE_POSTS_PENDING", F = "PROFILE_POSTS__MORE_POSTS_LOADED", U = "PROFILE_POSTS__MORE_POSTS_FAILED", V = Object(i.a)(L), G = Object(i.a)(F), B = Object(i.a)(U), q = () => async (e, t, {
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
					} = d, m = Object(o.a)(`u_${b}`, c, a), p = Object(x.g)(s, {
						listingKey: m
					});
					if (!p) return;
					const f = Object(x.d)(s, {
							listingKey: m
						}),
						h = Object(x.e)(s, {
							listingKey: m,
							token: p.token
						});
					if (f || h) return;
					e(V({
						key: m,
						fetchedToken: p.token
					}));
					const y = {
							after: p.token,
							dist: p.dist,
							sort: c,
							t: u,
							...n()(a, O.l),
							layout: Object(g.Q)(s, {}).toLowerCase()
						},
						_ = await T(r(), b, y),
						j = s.listings.postOrder.ids[m],
						v = _.body.postIds || [],
						E = {
							..._.body,
							postIds: v.filter(e => !j || !j.includes(e))
						};
					_.ok ? (e(G({
						fetchedToken: p.token,
						key: m,
						meta: s.meta,
						...E
					})), await e(Object(l.c)(b))) : e(B({
						account: _.body.data ? _.body.data.account : null,
						error: _.error,
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
				return _
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "e", (function() {
				return P
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
				_ = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(i.a)(y),
				v = Object(i.a)(_),
				E = "PINNEDPOST__PIN_POST_FAILURE",
				P = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(i.a)(E),
				S = Object(i.a)(P),
				C = e => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: s.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: s.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				x = (e, t) => Object(a.f)({
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
				w = () => Object(a.f)({
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
						_ = Object(b.m)(p, y),
						[E, P, I, A, R] = h ? [j, O, T, C, D] : [v, g, S, x, w];
					if (h) {
						if (Object(l.P)(p, {
								profileName: y
							}).length >= n.cb) return void r(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const M = Object(l.p)(p, e, y),
						N = !h && M;
					r(E({
						postId: e,
						profileId: _
					})), (await Object(c.r)(m(), e, h, !0)).ok ? (r(P({
						postId: e,
						profileId: _
					})), t || r(A(e, N))) : (r(I({
						postId: e,
						profileId: _
					})), r(R()))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return P
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
			const _ = Object(a.a)(g.N),
				j = Object(a.a)(g.O),
				v = Object(a.a)(g.M),
				E = (e, t) => async (r, s, {
					apiContext: n
				}) => {
					let o = s();
					const {
						name: a,
						isProfile: m
					} = e, p = Object(h.e)(o), g = p && !m && Object(l.a)(p.name, a), y = o.creations.api.subreddit.change.pending;
					if (g || y) return;
					const j = Object(u.v)(t);
					if (!a) return void r(P(e, j));
					r(_(e));
					const v = m ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await r(Object(c.postCreationPageDataRequested)(v)), m || !Object(f.C)(o)) return r(P(e, j));
					const E = e.allowedPostTypes || Object(O.v)(s(), {
						subredditName: a
					});
					if (!E) return void r(P(e, j));
					let T;
					o = s();
					const S = Object(f.mb)(o),
						C = Object(f.C)(o);
					if (S === i.Vb.MEDIA && C) {
						const e = Object(f.W)(o),
							t = Object(b.x)(e),
							r = Object(f.N)(o) && e.items.length > 1,
							s = !t && !r;
						if (r && !E.galleries) T = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (s && !E.images) T = b.q.ImageWillBeRemoved;
						else if (t && !E.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								r = t && t.metadata.videoDuration || 0;
							E.images ? r > i.gb && (T = b.q.VideoWillBeRemovedTooLongForGif) : T = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(T ? Object(d.i)(T) : P({
						...e,
						allowedPostTypes: E
					}, j))
				}, P = (e, t, r = !0) => async (i, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
					let b = "";
					b = a ? l(a) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(j(e)), r && i(Object(y.s)(!0)), i(Object(y.i)()), i(Object(s.c)(b)))
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
				return w
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "j", (function() {
				return L
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "i", (function() {
				return U
			})), r.d(t, "m", (function() {
				return V
			})), r.d(t, "k", (function() {
				return G
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "s", (function() {
				return Y
			})), r.d(t, "r", (function() {
				return X
			})), r.d(t, "g", (function() {
				return J
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
			var _ = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				j = r("./src/reddit/models/PostCreationForm/index.ts"),
				v = r("./src/reddit/helpers/trackers/postComposer.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/models/User/index.ts"),
				T = r("./src/reddit/selectors/postCreations.ts"),
				S = r("./src/reddit/selectors/postDraft.ts"),
				C = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/selectors/user.ts");
			const w = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				R = Object(i.a)(w),
				M = Object(i.a)(I),
				N = Object(i.a)(A),
				k = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t();
					if (!Object(D.k)(n) || Object(S.b)(n)) return;
					e(R());
					const i = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: s.jb.GET
					}))(r());
					i.ok ? e(M(y(i.body))) : e(N(i.error))
				}, L = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(L), Q = Object(i.a)(F), W = Object(i.a)(U), $ = Object(i.a)(V), K = Object(i.a)(G), z = Object(i.a)(B), Y = Object(i.a)(q), X = e => async (t, r, {
					apiContext: i
				}) => {
					const o = r(),
						c = Object(S.g)(o),
						b = Object(T.bb)(o);
					if (c || b) return;
					const p = Object(S.h)(o, e);
					if (!p) return;
					t(H(p)), v.f(o, p);
					const f = await ((e, t, r) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: r ? s.jb.PUT : s.jb.POST,
						data: Object(_.a)(t)
					}).then(e => e.body.fields && Object(j.w)(e.body.fields[0]) ? {
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
						} = Object(_.c)(f.body);
						t(Q({
							draftId: r,
							draftsCount: s
						})), e || t(Object(a.a)(p.destSubreddit, r, !1))
					} else {
						const e = f.error;
						e.type === s.I.BAD_CAPTCHA_ERROR ? t(z()) : e.type === s.I.VALIDATION_ERROR ? t($(e)) : e.type === s.I.SUBMIT_VALIDATION_ERROR ? t(K(e)) : t(W(e)), t(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(J), ee = e => async (t, r, {
					apiContext: s
				}) => {
					t(Z(e));
					let n = j.f;
					const i = r();
					if (e.subredditId) {
						const t = Object(x.R)(i, {
								subredditId: e.subredditId
							}),
							r = Object(C.p)(i, {
								profileId: e.subredditId
							}),
							s = Object(D.k)(i);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : r && s && (n = {
							isProfile: !0,
							name: Object(P.e)(s)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const o = Object(S.h)(r(), e.id);
					o && v.i(r(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", re = "POST_DELETE_DRAFT_FAILED", se = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(re), oe = Object(i.a)(se), ae = (e, t) => async (r, i, {
					apiContext: a
				}) => {
					const m = i();
					if (Object(S.a)(m, e)) return;
					const p = Object(S.d)(m, {
						draftId: e
					});
					p && v.g(m, p), r(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: s.jb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: s
						} = Object(_.c)(f.body);
						r(ne({
							draftId: e,
							draftsCount: s
						}));
						const n = Object(c.v)(t);
						e === n && r(Object(o.p)(!0, t))
					} else {
						const t = f.error;
						r(ie({
							draftId: e,
							apiError: t
						})), r(Object(d.f)({
							duration: d.a,
							kind: E.b.Error,
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
				return _
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "r", (function() {
				return C
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "p", (function() {
				return R
			})), r.d(t, "o", (function() {
				return M
			})), r.d(t, "i", (function() {
				return N
			})), r.d(t, "q", (function() {
				return k
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "d", (function() {
				return F
			})), r.d(t, "k", (function() {
				return U
			})), r.d(t, "n", (function() {
				return V
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/lodash/pick.js"),
				i = r.n(n),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeSearchKey/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/parameters.ts"),
				l = r("./src/reddit/endpoints/page/search/index.ts");
			r("./src/lib/makeApiRequest/index.ts"), r("./src/lib/omitHeaders/index.ts"), r("./src/reddit/constants/headers.ts");
			var b = r("./src/reddit/helpers/search/getQueryWithNsfwSetting.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				p = r("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				f = r("./src/reddit/selectors/multireddit.ts"),
				h = (r("./src/reddit/selectors/searchResults.ts"), r("./src/reddit/selectors/subreddit.ts")),
				O = r("./src/reddit/selectors/telemetry.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/actions/pages/search/index.ts");
			const _ = "SEARCH__DROPDOWN_CLOSED",
				j = "SEARCH__DROPDOWN_TOGGLED",
				v = "SEARCH__MORE_RESULTS_PENDING",
				E = "SEARCH__MORE_RESULTS_RECEIVED",
				P = "SEARCH__MORE_RESULTS_FAILED",
				T = "SEARCH__RELATED_QUERIES_RECEIVED",
				S = "SEARCH__UPDATE_SEARCH_QUERY",
				C = Object(a.a)(S),
				x = Object(a.a)(v),
				D = Object(a.a)(E),
				w = Object(a.a)(P),
				I = Object(a.a)(_),
				A = Object(a.a)(j),
				R = (Object(a.a)(T), e => async (t, r, {
					apiContext: n,
					gqlContext: a
				}) => {
					var y;
					const _ = r(),
						{
							queryParams: j
						} = _.platform.currentPage,
						v = Object(d.c)(j, Object(g.eb)(_)),
						E = _.platform.currentPage.urlParams.subredditName,
						P = _.platform.currentPage.urlParams.multiredditName,
						T = E || P,
						{
							username: S
						} = _.platform.currentPage.urlParams,
						C = v || i()(j, u.t),
						I = Object(p.c)(_),
						A = Object(d.e)(C, I),
						M = {
							...A,
							t: A.category ? o.fc.DAY : A.t,
							type: e
						},
						N = Object(d.b)(T, S, M);
					let k;
					const L = {
						authors: null,
						communities: null,
						posts: null
					};
					if (e.indexOf(o.Zb.Posts) > -1) {
						const e = _.listings.postOrder.loadMore[N];
						if (!e) return;
						const t = _.listings.postOrder.api.pending[N],
							r = _.listings.postOrder.fetchedTokens,
							s = r[N] && r[N][e.token];
						if (t || s) return;
						k = e.token, L.posts = k
					} else if (!I && (e.indexOf(o.Zb.Subreddits) > -1 || e.indexOf(o.Zb.Users) > -1)) {
						const e = _.listings.listingOrder.loadMore[N];
						if (!e) return;
						const t = _.listings.listingOrder.api.pending[N],
							r = _.listings.listingOrder.fetchedTokens,
							s = r[N] && r[N][e.token];
						if (t || s) return;
						k = e.token
					} else if (I && e.indexOf(o.Zb.Subreddits) > -1) {
						const e = _.listings.communityOrder.loadMore[N];
						if (!e) return;
						const t = _.listings.communityOrder.api.pending[N],
							r = _.listings.communityOrder.fetchedTokens,
							s = r[N] && r[N][e.token];
						if (t || s) return;
						k = e.token, L.communities = k
					} else {
						if (!(I && e.indexOf(o.Zb.Users) > -1)) throw new Error("Should not attempt to fetch more results without a search type"); {
							const e = _.listings.authorOrder.loadMore[N];
							if (!e) return;
							const t = _.listings.authorOrder.api.pending[N],
								r = _.listings.authorOrder.fetchedTokens,
								s = r[N] && r[N][e.token];
							if (t || s) return;
							k = e.token, L.authors = k
						}
					}
					const F = `error-${N}`;
					t(x({
						fetchedToken: k,
						key: N,
						type: e
					}));
					const U = [d.a.PromotedTrend, d.a.Trending].includes(A.source),
						V = Object(g.eb)(_),
						G = {
							...M,
							q: !I && A.q ? Object(b.a)(A.q, V, "1" === A.include_over_18, U, "1" === A.sr_nsfw) : A.q,
							after: k,
							type: (e || []).join(","),
							b: !0
						},
						B = E && Object(h.C)(r(), E),
						q = P ? null === (y = Object(f.d)(_, {
							multiredditName: P,
							username: S
						})) || void 0 === y ? void 0 : y.subredditIds : void 0;
					let H = [];
					q ? H = q : B && (H = [B]);
					const Q = Object(O.structureType)(_.platform.currentPage),
						W = await (I ? Object(l.a)({
							context: a(),
							isSerpRedesignLayoutM2: I,
							nsfw: !Object(b.b)(V, "1" === A.include_over_18, U, "1" === A.sr_nsfw),
							options: G,
							structureType: Q,
							subredditIds: H,
							tokens: L
						}) : Object(l.a)({
							context: n(),
							isSerpRedesignLayoutM2: I,
							options: G,
							subredditName: T,
							username: S
						}));
					W.ok ? (t(D({
						key: N,
						fetchedToken: k,
						meta: _.meta,
						subredditOrMultiName: T,
						type: e,
						...W.body
					})), t(c.g(F))) : (t(w({
						key: N,
						error: W.error,
						fetchedToken: k,
						meta: _.meta,
						type: e,
						...W.body
					})), t(c.f({
						id: F,
						kind: m.b.Error,
						text: s.fbt._("Sorry, we couldn't load more search results.", null, {
							hk: "3IDePs"
						}),
						buttonText: s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}),
						buttonAction: R(e)
					})))
				}),
				M = (e, t, r, s, n) => async (i, o) => {
					const a = o();
					i(Object(y.e)({
						key: e,
						type: s
					}));
					const d = {
						account: null,
						authorOrder: [],
						communityOrder: [],
						key: e,
						listingOrder: [],
						meta: a.meta,
						postOrder: t,
						posts: r,
						profileAboutInfo: {},
						profiles: {},
						structuredStyles: {},
						subreddits: {},
						subredditAboutInfo: {},
						tokens: {
							authors: null,
							communities: null,
							listings: null,
							posts: n ? n.token : null
						},
						searchDiscoveryUnits: {},
						searchDiscoveryUnitOrder: [],
						type: s
					};
					i(Object(y.f)(d))
				}, N = "SEARCH__TYPEAHEAD_SUCCESS", k = Object(a.a)(N), L = "SEARCH__DISABLE_SUBREDDIT_SEARCH", F = "SEARCH__ENABLE_SUBREDDIT_SEARCH", U = Object(a.a)(L), V = Object(a.a)(F)
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "f", (function() {
				return P
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/lib/fastdom/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/chat/unreadCount.ts"),
				a = r("./src/reddit/actions/inbox.ts"),
				d = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = r("./src/reddit/helpers/tabBadging/index.ts"),
				u = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts"),
				b = r("./src/reddit/selectors/chat.ts"),
				m = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				p = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const O = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				g = Object(i.a)(O),
				y = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				_ = Object(s.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				j = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(f.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				v = () => async (e, t) => {
					const r = t(),
						s = Object(d.f)(r, {}),
						n = Object(m.a)(r),
						i = Object(f.J)(r) || Object(f.K)(r),
						o = Object(p.g)(r);
					let a = 0;
					i && s && (a = n ? o ? Object(l.i)(r) : Object(l.j)(r) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: r
						} = j(e);
						return t + r
					})(r), y(a, s), e(g({
						hasUnreadMessages: !!a
					})))
				}, E = () => async (e, t) => {
					{
						e(v());
						const r = j(t());
						Object(c.c)(r)
					}
				}, P = e => async (t, r) => {
					const s = r();
					if (Object(m.a)(s)) {
						const r = Object(l.e)(s),
							n = Object(l.h)(s),
							{
								basicChannelCount: i,
								inboxCount: o
							} = e;
						if (r !== i) {
							const e = Object(h.e)({
								count: i,
								key: u.c.ChatTab
							});
							t(Object(h.a)(e))
						}
						if (o && o !== n) {
							const e = Object(h.e)({
								count: o,
								key: u.c.MessageTab
							});
							t(Object(h.a)(e))
						}(r !== i || o && o !== n) && t(v())
					} else {
						const r = Object(b.a)(s),
							n = Object(b.b)(s),
							i = Object(f.F)(s),
							{
								basicChannelCount: d,
								inboxCount: c
							} = e;
						r !== d && t(Object(o.b)({
							...n
						})), c && c !== i && t(Object(a.b)({
							inboxCount: c
						})), (r !== d || c && c !== i) && t(v())
					}
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
				_ = () => g(O),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				v = [c.c, c.l, c.j, c.a],
				E = [c.c, c.e, c.l, c.b],
				P = e => "boolean" == typeof e.cumulative && e.cumulative,
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
			class C extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = y(), this.videoStats = _(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
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
						P(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), r && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						P(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					if (P(t) && t.event === m.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						P(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let r = j;
					return e && !t ? r = E : !e && t && (r = v), o.a.createElement(d.a, {
						threshold: r,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = S(C)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react-redux/es/index.js"),
				n = r("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(s.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.P
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
					nightmodeEnabled: Object(d.X)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.K)(e)
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
				return B
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
				_ = r("./src/reddit/actions/pages/postDraft.ts"),
				j = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				v = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				E = r("./src/reddit/actions/pages/profilePosts.ts"),
				P = r("./src/reddit/actions/pages/search/index.ts"),
				T = r("./src/reddit/actions/pages/subreddit.ts"),
				S = r("./src/reddit/actions/pages/topic.ts"),
				C = r("./src/reddit/actions/postCreation/constants.ts"),
				x = r("./src/reddit/actions/postDraft.ts"),
				D = r("./src/reddit/actions/preferences.ts"),
				w = r("./src/reddit/actions/redditEmbed.ts"),
				I = r("./src/reddit/actions/search.ts"),
				A = r("./src/reddit/actions/structuredStyles/constants.ts"),
				R = r("./src/reddit/actions/subreddit.ts"),
				M = r("./src/reddit/actions/users.ts"),
				N = r("./src/reddit/constants/postLayout.ts"),
				k = r("./src/reddit/constants/preferences.ts"),
				L = r("./src/reddit/constants/theme.ts"),
				F = r("./src/reddit/models/PostCreationForm/index.ts"),
				U = r("./src/reddit/models/PostDraft/index.ts"),
				V = r("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(s || (s = {}));
			const G = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "enableFollowers", "feedRecommendationsEnabled", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...k.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: V.a,
					commentMode: F.i.RICH_TEXT,
					countryCode: "",
					badCommentAutocollapse: u.m.OFF,
					layout: N.d.Card,
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
						}, G),
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
				Q = (e, t, r) => H(e, {
					subreddit: {
						[t]: {
							...q,
							...e.subreddit[t],
							...r
						}
					}
				});
			t.c = (e = B, t) => {
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
					case x.g: {
						const {
							kind: r
						} = t.payload;
						return {
							...e,
							editorMode: r === U.b.Markdown ? F.i.MARKDOWN : F.i.RICH_TEXT
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
						return Q(e, s, {
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
					case j.e:
					case v.e:
					case v.b:
					case E.PROFILE_POSTS_LOADED:
					case m.f:
					case R.i:
					case I.g:
					case w.b:
					case y.PAGE_LOADED:
					case _.PAGE_LOADED:
					case D.j:
					case D.b:
					case P.c:
					case D.a:
					case M.c:
					case S.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case D.q: {
						const {
							subredditId: r,
							prefs: s
						} = t.payload;
						return Q(e, r, s)
					}
					case j.d:
					case v.d:
					case v.a:
					case E.PROFILE_POSTS_FAILED: {
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
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Subreddit"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), r.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), r.e("vendors~PostCreation~Subreddit"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), r.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
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
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "h", (function() {
				return b
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "i", (function() {
				return f
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/selectors/chat.ts"),
				i = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const o = e => e.appBadges.badges,
				a = Object(s.a)(i.a, o, n.a, (e, t, r) => {
					var s;
					return e ? (null === (s = t.chatUnreadMessages) || void 0 === s ? void 0 : s.count) || 0 : r
				}),
				d = Object(s.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(s.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(s.a)(i.a, a, o, n.b, (e, t, r, s) => {
					var n;
					if (0 === t) {
						if (e && (null === (n = r.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)) return !0;
						if (!e && s.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(s.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(s.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(s.a)(l, b, (e, t) => e + t),
				p = Object(s.a)(a, b, (e, t) => e + t),
				f = Object(s.a)(a, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/chat.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/models/ModeratingSubreddits/index.ts"),
				i = r("./src/reddit/selectors/moderatorPermissions.ts");
			const o = e => e.chat.unread.count,
				a = Object(s.a)(o, e => e.unreadMessages),
				d = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: r
					} = n.c;
					return Object(i.b)(r)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Dd,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(s.a)(d, e => e === n.Gd.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "i", (function() {
				return S
			}));
			var s = r("./node_modules/reselect/es/index.js"),
				n = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.zb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(s.a)(d, e => e === n.Md.Enabled),
				u = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Fd,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(s.a)(c, u, (e, t) => e && t === n.Ld.Enabled),
				b = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Qb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(s.a)(c, b, (e, t) => e && t === n.gc.Enabled),
				p = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.wb,
					experimentEligibilitySelector: o.e
				}), a.a),
				f = Object(s.a)(p, e => e === n.Id.Banner_1st_time),
				h = Object(s.a)(p, e => e === n.Id.Tooltip_persist),
				O = Object(s.a)(p, e => e === n.Id.Tooltip_1st_time),
				g = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.xb,
					experimentEligibilitySelector: o.e
				}), a.a),
				y = Object(s.a)(g, e => e === n.Jd.ContinuousScroll),
				_ = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.ob,
					experimentEligibilitySelector: o.e
				}), a.a),
				j = Object(s.a)(_, e => e === n.nc.Banner1stTime),
				v = Object(s.a)(_, e => e === n.nc.BannerPersist),
				E = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.yb,
					experimentEligibilitySelector: o.e
				}), a.a),
				P = Object(s.a)(E, e => e === n.Kd.Enabled),
				T = Object(s.a)(e => Object(i.c)(e, {
					experimentName: n.Kb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				S = Object(s.a)(T, e => e === n.fb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.25697e38259dc1009ca2.js.map