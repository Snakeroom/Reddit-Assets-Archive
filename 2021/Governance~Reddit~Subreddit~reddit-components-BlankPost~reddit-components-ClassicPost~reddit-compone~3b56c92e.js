// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.6bec567787f2973800f4.js
// Retrieved at 12/2/2021, 5:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-dom/index.js"),
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
							n = t[1],
							i = void 0 === n ? r : n,
							a = t[2],
							d = void 0 === a ? r : a,
							c = t[3];
						return r + " " + i + " " + d + " " + (void 0 === c ? i : c)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = d.keys(); t = i.next().value;) {
					if (!(s !== t.root || r !== t.rootMargin || a(n, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var s = d.get(e);
				if (s)
					for (var r, n = s.values(); r = n.next().value;)
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
				j = Object.prototype,
				_ = j.hasOwnProperty,
				P = j.toString,
				E = function(e) {
					return y.reduce((function(t, s) {
						if (_.call(e, s)) {
							var r = "root" === s && "[object String]" === P.call(e[s]);
							t[s] = r ? document.querySelector(e[s]) : e[s]
						}
						return t
					}), {})
				},
				T = function(e) {
					var t, s;

					function r() {
						for (var t, s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
						return O(g(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), O(g(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var r = s.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), O(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(E(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
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
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(n.a.Component);
			O(T, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function i() {}
			i.resetWarningCache = n, e.exports = function() {
				function e(e, t, s, n, i, o) {
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
					checkPropTypes: i,
					resetWarningCache: n
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
			const n = () => "undefined" != typeof document,
				i = () => n() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
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
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const r = "APP_BADGES__PENDING",
				n = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				a = s("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(o.a)(e, {
					...a
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(n.c),
				l = Object(r.a)(n.b),
				b = Object(r.a)(n.d),
				m = Object(r.a)(n.a),
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
					r ? (e(l(r)), e(Object(i.d)())) : e(m())
				};
			const g = () => async e => {
				const t = p({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/chat/actions/message/unreadCount.ts"),
				a = s("./src/chat/endpoints/sendbird/index.ts"),
				d = s("./src/reddit/actions/tabBadging.ts"),
				c = s("./src/reddit/selectors/chat.ts"),
				u = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: b,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: p
			} = r, f = Object(i.a)(l), h = Object(i.a)(b), g = Object(i.a)(m), O = Object(i.a)(p);
			let y;
			const v = 5 * n.kb,
				j = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(u.K)(r) || !Object(c.d)(r)) return clearTimeout(y);
					y || e((() => async (e, t, {
						gqlContext: s
					}) => {
						const r = t(),
							{
								session: n
							} = r.user;
						if (n && Object(u.K)(r) && Object(c.d)(r)) {
							e(g());
							const t = await Object(a.g)(s());
							t && t.ok && Object(a.j)(t.body) ? (e(O({
								...Object(o.b)(t.body.data)
							})), e(Object(d.d)())) : e(h({
								error: t.error
							}))
						}
					})()), y = setTimeout(() => {
						e(j())
					}, v)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/makeActionCreator/index.ts");
			const n = "INBOX__COUNT_UPDATE",
				i = Object(r.a)(n)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/profile/index.ts"),
				i = (s("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), s("./src/reddit/models/User/index.ts")),
				o = s("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(r.a)("MOD_PERMS__REQUEST_PENDING"), Object(r.a)(a), Object(r.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const s = Object(o.k)(t());
					if (s) {
						const t = Object(i.e)(s);
						await e(Object(n.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			const r = "PAGE__MULTIREDDIT_FEED_PENDING",
				n = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return D
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return I
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return A
			})), s.d(t, "profilePostsPending", (function() {
				return M
			})), s.d(t, "profilePostsLoaded", (function() {
				return N
			})), s.d(t, "profilePostsFailed", (function() {
				return R
			})), s.d(t, "profilePostsRequested", (function() {
				return k
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return F
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return L
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return V
			})), s.d(t, "morePostsPending", (function() {
				return U
			})), s.d(t, "morePostsLoaded", (function() {
				return G
			})), s.d(t, "morePostsFailed", (function() {
				return B
			})), s.d(t, "morePostsRequested", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/lib/safeGet/index.ts"),
				d = s("./src/reddit/actions/contentGate.ts"),
				c = s("./src/reddit/actions/externalAccount.ts"),
				u = s("./src/reddit/actions/moderatingSubreddits.ts"),
				l = s("./src/reddit/actions/pages/profileShared.ts"),
				b = s("./src/reddit/actions/pinnedPost.ts"),
				m = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				f = s("./src/reddit/actions/subreddit.ts"),
				h = s("./src/reddit/constants/errors.ts"),
				g = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/config.ts"),
				v = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				P = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const T = (e, t, s) => Object(_.a)(e, {
				data: s,
				endpoint: Object(P.a)(Object(v.a)(Object(E.a)(`${y.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`))),
				method: j.jb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var C = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				S = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				x = s("./src/reddit/selectors/listings.ts"),
				w = s("./src/reddit/selectors/profile.ts");
			const D = "PAGE__PROFILE_POSTS_PENDING",
				I = "PAGE__PROFILE_POSTS_LOADED",
				A = "PAGE__PROFILE_POSTS_FAILED",
				M = Object(i.a)(D),
				N = Object(i.a)(I),
				R = Object(i.a)(A),
				k = e => async (t, s, r) => {
					const {
						queryParams: i,
						params: y
					} = e, {
						sort: v,
						t: j
					} = Object(l.b)(i), {
						profileName: _
					} = y, P = Object(o.a)(`u_${_}`, v, i), E = s(), D = Object(a.a)(E.listings.postOrder.ids, P), I = Object(x.c)(E, {
						listingKey: P
					}), A = Object(x.d)(E, {
						listingKey: P
					});
					if (await t(p.d(_)), A || D && !I) {
						if (D) {
							const e = Object(w.q)(s(), {
								profileName: _
							});
							t(m.m({
								title: e
							}))
						}
						return
					}
					const k = {
						...n()(e.queryParams, [...g.l, ...g.k, g.h]),
						layout: Object(O.Q)(E, {}).toLowerCase(),
						sort: v,
						t: Object(C.a)(v, j)
					};
					t(M({
						key: P
					}));
					const F = await Object(S.a)("profilePosts", () => T(r.apiContext(), _, k));
					if (!F.ok) return t(R({
						account: F.body.data ? F.body.data.account : null,
						error: F.body.reason ? {
							type: F.body.reason
						} : F.error,
						key: P
					})), F.body.reason === h.a.DeletedProfile && t(Object(d.p)({
						profileName: _
					})), void t(m.n(F.status));
					const L = F.body;
					t(N({
						key: P,
						meta: s().meta,
						...L
					}));
					const V = Object(w.m)(s(), _),
						{
							pinned: U
						} = L;
					t(Object(b.h)({
						profileId: V,
						pinned: U
					})), await Promise.all([t(Object(l.c)(_)), t(Object(f.q)()), t(Object(u.b)()), t(c.o(_))])
				}, F = "PROFILE_POSTS__MORE_POSTS_PENDING", L = "PROFILE_POSTS__MORE_POSTS_LOADED", V = "PROFILE_POSTS__MORE_POSTS_FAILED", U = Object(i.a)(F), G = Object(i.a)(L), B = Object(i.a)(V), q = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t(),
						{
							currentPage: i
						} = r.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: a,
						params: d
					} = i.routeMatch.match, {
						sort: c,
						t: u
					} = Object(l.b)(a), {
						profileName: b
					} = d, m = Object(o.a)(`u_${b}`, c, a), p = Object(x.g)(r, {
						listingKey: m
					});
					if (!p) return;
					const f = Object(x.d)(r, {
							listingKey: m
						}),
						h = Object(x.e)(r, {
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
							...n()(a, g.l),
							layout: Object(O.Q)(r, {}).toLowerCase()
						},
						v = await T(s(), b, y),
						j = r.listings.postOrder.ids[m],
						_ = v.body.postIds || [],
						P = {
							...v.body,
							postIds: _.filter(e => !j || !j.includes(e))
						};
					v.ok ? (e(G({
						fetchedToken: p.token,
						key: m,
						meta: r.meta,
						...P
					})), await e(Object(l.c)(b))) : e(B({
						account: v.body.data ? v.body.data.account : null,
						error: v.error,
						fetchedToken: p.token,
						key: m
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
				return f
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "i", (function() {
				return I
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/endpoints/post/index.tsx"),
				u = s("./src/reddit/models/Toast/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/profile.ts");
			const m = "PINNEDPOST__PINNED_POSTS_LOADED",
				p = Object(i.a)(m),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				h = "PINNEDPOST__UNPIN_POST_SUCCESS",
				g = Object(i.a)(f),
				O = Object(i.a)(h),
				y = "PINNEDPOST__PIN_POST_PENDING",
				v = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(i.a)(y),
				_ = Object(i.a)(v),
				P = "PINNEDPOST__PIN_POST_FAILURE",
				E = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(i.a)(P),
				C = Object(i.a)(E),
				S = e => Object(a.f)({
					buttonAction: I(e, !0),
					buttonText: r.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: r.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				x = (e, t) => Object(a.f)({
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
				w = () => Object(a.f)({
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
				I = (e, t = !1) => async (s, i, {
					apiContext: m
				}) => {
					const p = i(),
						f = p.posts.models[e];
					if (!f) return;
					const h = !Object(l.s)(p, {
						postId: e
					});
					if (h && f.isRemoved) return s((() => Object(a.f)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const y = f.author,
						v = Object(b.m)(p, y),
						[P, E, I, A, M] = h ? [j, g, T, S, w] : [_, O, C, x, D];
					if (h) {
						if (Object(l.P)(p, {
								profileName: y
							}).length >= n.cb) return void s(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const N = Object(l.p)(p, e, y),
						R = !h && N;
					s(P({
						postId: e,
						profileId: v
					})), (await Object(c.r)(m(), e, h, !0)).ok ? (s(E({
						postId: e,
						profileId: v
					})), t || s(A(e, R))) : (s(I({
						postId: e,
						profileId: v
					})), s(M()))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return _
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "c", (function() {
				return C
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/addQueryParams/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/filterQueryParams/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				u = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = s("./src/reddit/helpers/name/index.ts"),
				b = s("./src/reddit/models/PostCreationForm/index.ts"),
				m = s("./src/reddit/routes/postCreation/index.ts"),
				p = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				O = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const v = Object(a.a)(O.N),
				j = Object(a.a)(O.O),
				_ = Object(a.a)(O.M),
				P = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					let o = r();
					const {
						name: a,
						isProfile: m
					} = e, p = Object(h.e)(o), O = p && !m && Object(l.a)(p.name, a), y = o.creations.api.subreddit.change.pending;
					if (O || y) return;
					const j = Object(u.v)(t);
					if (!a) return void s(E(e, j));
					s(v(e));
					const _ = m ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await s(Object(c.postCreationPageDataRequested)(_)), m || !Object(f.C)(o)) return s(E(e, j));
					const P = e.allowedPostTypes || Object(g.u)(r(), {
						subredditName: a
					});
					if (!P) return void s(E(e, j));
					let T;
					o = r();
					const C = Object(f.mb)(o),
						S = Object(f.C)(o);
					if (C === i.Vb.MEDIA && S) {
						const e = Object(f.W)(o),
							t = Object(b.x)(e),
							s = Object(f.N)(o) && e.items.length > 1,
							r = !t && !s;
						if (s && !P.galleries) T = b.q.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !P.images) T = b.q.ImageWillBeRemoved;
						else if (t && !P.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							P.images ? s > i.gb && (T = b.q.VideoWillBeRemovedTooLongForGif) : T = b.q.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : E({
						...e,
						allowedPostTypes: P
					}, j))
				}, E = (e, t, s = !0) => async (i, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? m.b : m.c;
					let b = "";
					b = a ? l(a) : p.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(j(e)), s && i(Object(y.s)(!0)), i(Object(y.i)()), i(Object(r.c)(b)))
				}, T = e => async (t, s) => {
					const i = s().platform.currentPage,
						o = i.queryParams,
						a = Object(n.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(r.c)(a))
				}, C = () => async (e, t) => {
					const s = t().platform.currentPage,
						n = Object(o.a)(s.url, ["collection"]);
					e(Object(r.c)(n))
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
				return Y
			})), s.d(t, "g", (function() {
				return J
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
				n = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var m = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				g = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts");
			const y = e => {
				let t = e.drafts.reduce((e, t) => {
					const s = (e => {
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
					return e.postDraftIds.push(s.id), e.postDrafts[s.id] = s, e
				}, {
					postDraftIds: [],
					postDrafts: {},
					profiles: {},
					subreddits: {}
				});
				return t = e.subreddits.reduce((e, t) => {
					if (t.subreddit_type === O.f.User) {
						const s = Object(h.a)(t, Object(p.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(g.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var v = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				_ = s("./src/reddit/helpers/trackers/postComposer.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				S = s("./src/reddit/selectors/profile.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/user.ts");
			const D = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				A = "POST_DRAFT__LIST_FAILED",
				M = Object(i.a)(D),
				N = Object(i.a)(I),
				R = Object(i.a)(A),
				k = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(w.k)(n) || Object(C.b)(n)) return;
					e(M());
					const i = await (e => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.jb.GET
					}))(s());
					i.ok ? e(N(y(i.body))) : e(R(i.error))
				}, F = "POST_DRAFT__SAVE_DRAFT_PENDING", L = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", V = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", B = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", q = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(F), Q = Object(i.a)(L), W = Object(i.a)(V), $ = Object(i.a)(U), K = Object(i.a)(G), z = Object(i.a)(B), X = Object(i.a)(q), Y = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s(),
						c = Object(C.g)(o),
						b = Object(T.bb)(o);
					if (c || b) return;
					const p = Object(C.h)(o, e);
					if (!p) return;
					t(H(p)), _.f(o, p);
					const f = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [m.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.jb.PUT : r.jb.POST,
						data: Object(v.a)(t)
					}).then(e => e.body.fields && Object(j.w)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.I.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), p, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(v.c)(f.body);
						t(Q({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(p.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === r.I.BAD_CAPTCHA_ERROR ? t(z()) : e.type === r.I.VALIDATION_ERROR ? t($(e)) : e.type === r.I.SUBMIT_VALIDATION_ERROR ? t(K(e)) : t(W(e)), t(Object(d.f)({
							duration: d.a,
							kind: P.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, J = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(J), ee = e => async (t, s, {
					apiContext: r
				}) => {
					t(Z(e));
					let n = j.f;
					const i = s();
					if (e.subredditId) {
						const t = Object(x.P)(i, {
								subredditId: e.subredditId
							}),
							s = Object(S.p)(i, {
								profileId: e.subredditId
							}),
							r = Object(w.k)(i);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(E.e)(r)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const o = Object(C.h)(s(), e.id);
					o && _.i(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(re), ae = (e, t) => async (s, i, {
					apiContext: a
				}) => {
					const m = i();
					if (Object(C.a)(m, e)) return;
					const p = Object(C.d)(m, {
						draftId: e
					});
					p && _.g(m, p), s(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.jb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: r
						} = Object(v.c)(f.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(c.v)(t);
						e === n && s(Object(o.p)(!0, t))
					} else {
						const t = f.error;
						s(ie({
							draftId: e,
							apiError: t
						})), s(Object(d.f)({
							duration: d.a,
							kind: P.b.Error,
							text: Object(n.a)(t)
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
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/endpoints/me/index.ts"),
				a = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = s("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(n.a)("REDDIT_EMBED_PENDING"),
				b = Object(n.a)(c),
				m = Object(n.a)(u),
				p = (e, t) => async (e, s, {
					apiContext: r
				}) => {
					const n = s();
					e(l());
					const d = await Object(o.a)(r());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(i.d)()), f(n)) : Object(a.a)(e, n) : e(m(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Mb.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "f", (function() {
				return E
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/fastdom/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/chat/unreadCount.ts"),
				a = s("./src/reddit/actions/inbox.ts"),
				d = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = s("./src/reddit/helpers/tabBadging/index.ts"),
				u = s("./src/reddit/models/Badge/index.ts"),
				l = s("./src/reddit/selectors/appBadges.ts"),
				b = s("./src/reddit/selectors/chat.ts"),
				m = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				p = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const g = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(i.a)(g),
				y = (e, t) => {
					e <= 0 ? n.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : n.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				v = Object(r.c)({
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
				_ = () => async (e, t) => {
					const s = t(),
						r = Object(d.f)(s, {}),
						n = Object(m.a)(s),
						i = Object(f.J)(s) || Object(f.K)(s),
						o = Object(p.g)(s);
					let a = 0;
					i && r && (a = n ? o ? Object(l.i)(s) : Object(l.j)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = j(e);
						return t + s
					})(s), y(a, r), e(O({
						hasUnreadMessages: !!a
					})))
				}, P = () => async (e, t) => {
					{
						e(_());
						const s = j(t());
						Object(c.c)(s)
					}
				}, E = e => async (t, s) => {
					const r = s();
					if (Object(m.a)(r)) {
						const s = Object(l.e)(r),
							n = Object(l.h)(r),
							{
								basicChannelCount: i,
								inboxCount: o
							} = e;
						if (s !== i) {
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
						}(s !== i || o && o !== n) && t(_())
					} else {
						const s = Object(b.a)(r),
							n = Object(b.b)(r),
							i = Object(f.F)(r),
							{
								basicChannelCount: d,
								inboxCount: c
							} = e;
						s !== d && t(Object(o.b)({
							...n
						})), c && c !== i && t(Object(a.b)({
							inboxCount: c
						})), (s !== d || c && c !== i) && t(_())
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/lodash/isEqual.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/ads/store.ts"),
				l = s("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = s("./src/reddit/connectors/PostViewable/index.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/video.ts");
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
					remainingTime: r,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				y = () => O(h),
				v = () => O(g),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				_ = [c.c, c.l, c.j, c.a],
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
						const s = Object(f.h)(e, {
							postId: t.id
						});
						if (s) return s.length
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
				C = Object(b.a)(T);
			class S extends i.Component {
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
						n = !1;
					return "object" == typeof t ? (s = t.threshold, r = !!t.playing, n = !!t.withSound) : s = t, this.isAdequatelyInView(e, s) && (!r || this.props.isPlaying) && (!n || this.props.isAudible)
				}
				handleThresholds(e, t, s = !1) {
					const {
						post: r
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!n()(i, this.inViewStats) && i.length > 0 && u.b(r.id, i, s);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!n()(o, this.outOfViewStats) && o.length > 0 && u.d(r.id, o, s), this.outOfViewStats = o, this.inViewStats = i
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
					let s = j;
					return e && !t ? s = P : !e && t && (s = _), o.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = C(S)
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.P
			}))(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, s) {
			"use strict";
			var r, n;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(r || (r = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(n || (n = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return g
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
			const m = n.a.createContext(null);

			function p(e) {
				const t = Object(i.e)(t => Object(u.H)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					r = Object(i.e)(e => t ? Object(l.H)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					m = Object(i.e)(i => ({
						currentUser: s,
						imageGalleryCurrentItem: Object(u.i)(i, {
							postId: e
						}),
						isModerator: !(!n || !i.moderatingSubreddits[n.name]),
						post: t,
						postId: e,
						subreddit: n,
						subredditOrProfile: r,
						userIsOp: b
					}));
				return Object(a.a)(m)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, r = p(t);
				return n.a.createElement(m.Provider, {
					value: r
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(m.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function g(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = p(t.postId);
					return n.a.createElement(m.Provider, {
						value: s
					}, n.a.createElement(e, b({}, t, s)))
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
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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

				function s(t) {
					return n.a.createElement(u.Consumer, null, s => n.a.createElement(e, c({}, t, s)))
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
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = e => Object(i.a)(e, {
				endpoint: Object(o.a)(`${r.a.gatewayUrl}/desktopapi/v1/me`),
				method: n.jb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts");
			t.a = async e => Object(n.a)(Object(i.a)(e, [o.a]), {
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
			const n = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				o = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				d = "badgeCountSync",
				c = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = c(e ? o : n),
						s = c(e ? a : i);
					t && s && (t.href = e ? n : o, s.href = e ? i : a)
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
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(r.useRef)(e);
				return t.current === e || Object(n.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(r.useContext)(n.a)
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
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i, o = s("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, s) {
				const r = s.media[0],
					n = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (n.forEach(s => {
						const n = r[s],
							[o, a] = s.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: n
						})
					}), !i.url && n.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[s, n] = e.split("x").map(e => parseInt(e));
					i = {
						height: n,
						width: s,
						url: t
					}
				}
				return i.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${o.a.assetPath}/${e}`
			}

			function l(e, t, s) {
				const r = c(e, t, s),
					n = c(2 * e, 2 * t, s);
				return {
					url: u(r),
					url2x: u(n)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./node_modules/lodash/isEqual.js"),
				i = s.n(n),
				o = s("./node_modules/lodash/merge.js"),
				a = s.n(o),
				d = s("./node_modules/lodash/pick.js"),
				c = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/comment/constants.ts"),
				b = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				p = s("./src/reddit/actions/header.ts"),
				f = s("./src/reddit/actions/modQueue/constants.ts"),
				h = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				O = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = s("./src/reddit/actions/pages/postCreation.ts"),
				v = s("./src/reddit/actions/pages/postDraft.ts"),
				j = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				_ = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				P = s("./src/reddit/actions/pages/profilePosts.ts"),
				E = s("./src/reddit/actions/pages/search/index.ts"),
				T = s("./src/reddit/actions/pages/subreddit.ts"),
				C = s("./src/reddit/actions/pages/topic.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				x = s("./src/reddit/actions/postDraft.ts"),
				w = s("./src/reddit/actions/preferences.ts"),
				D = s("./src/reddit/actions/redditEmbed.ts"),
				I = s("./src/reddit/actions/search.ts"),
				A = s("./src/reddit/actions/structuredStyles/constants.ts"),
				M = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/actions/users.ts"),
				R = s("./src/reddit/constants/postLayout.ts"),
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
					layout: R.d.Card,
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
					const s = c()({
							...t.account,
							...t
						}, G),
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...q,
							...r && r[e]
						}
					});
					const o = {
						...e,
						...s,
						subreddit: n
					};
					if (o.useMarkdown !== e.useMarkdown) {
						const e = o.useMarkdown ? L.i.MARKDOWN : L.i.RICH_TEXT;
						o.editorMode = e, o.commentMode = e
					}
					return i()(o, e) ? e : o
				},
				Q = (e, t, s) => H(e, {
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
					case S.s:
					case S.Q: {
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
					case x.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? L.i.MARKDOWN : L.i.RICH_TEXT
						}
					}
					case w.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case w.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case w.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return Q(e, r, {
							layout: s
						})
					}
					case w.f:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case w.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case b.g:
						return {
							...e, over18: !0
						};
					case w.c:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case w.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case w.r:
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
					case w.g:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case w.d:
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
					case g.e:
					case g.h:
					case h.a:
					case h.e:
					case h.b:
					case h.f:
					case h.d:
					case h.h:
					case m.b:
					case T.SUBREDDIT_LOADED:
					case O.b:
					case O.a:
					case j.e:
					case _.e:
					case _.b:
					case P.PROFILE_POSTS_LOADED:
					case m.f:
					case M.i:
					case I.g:
					case D.b:
					case y.PAGE_LOADED:
					case v.PAGE_LOADED:
					case w.j:
					case w.b:
					case E.c:
					case w.a:
					case N.c:
					case C.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? H(e, t.payload.preferences) : e;
					case w.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return Q(e, s, r)
					}
					case j.d:
					case _.d:
					case _.a:
					case P.PROFILE_POSTS_FAILED: {
						let s = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: r,
								showPresence: n
							} = t.payload.account;
							e.nightmode !== r && (s = {
								...s,
								nightmode: r
							}), e.showPresence !== n && (s = {
								...s,
								showPresence: n
							})
						}
						return s
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
					case w.n: {
						const s = t.payload,
							{
								enableFollowers: r,
								showActiveCommunities: n
							} = s.additional;
						let i = e;
						return e.enableFollowers !== r && (i = {
							...i,
							enableFollowers: r
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
		"./src/reddit/routes/postCreation/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/loadableAction/index.ts"),
				o = s("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(r.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("vendors~PostCreation~Subreddit"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), s.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~e4e56b68"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~898a3d9b"), s.e("Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
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
		"./src/reddit/selectors/appBadges.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "j", (function() {
				return p
			})), s.d(t, "i", (function() {
				return f
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/selectors/chat.ts"),
				i = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const o = e => e.appBadges.badges,
				a = Object(r.a)(i.a, o, n.a, (e, t, s) => {
					var r;
					return e ? (null === (r = t.chatUnreadMessages) || void 0 === r ? void 0 : r.count) || 0 : s
				}),
				d = Object(r.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				c = Object(r.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(r.a)(i.a, a, o, n.b, (e, t, s, r) => {
					var n;
					if (0 === t) {
						if (e && (null === (n = s.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)) return !0;
						if (!e && r.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(r.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(r.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(r.a)(l, b, (e, t) => e + t),
				p = Object(r.a)(a, b, (e, t) => e + t),
				f = Object(r.a)(a, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				i = s("./src/reddit/selectors/moderatorPermissions.ts");
			const o = e => e.chat.unread.count,
				a = Object(r.a)(o, e => e.unreadMessages),
				d = e => !(e.chat.isInited || e.chat.unread.api.pending),
				c = (e, t) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(i.b)(s)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Dd,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(r.a)(d, e => e === n.Gd.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "f", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "h", (function() {
				return y
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "i", (function() {
				return C
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.zb,
					experimentEligibilitySelector: o.e
				}), a.a),
				c = Object(r.a)(d, e => e === n.Md.Enabled),
				u = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Fd,
					experimentEligibilitySelector: o.e
				}), a.a),
				l = Object(r.a)(c, u, (e, t) => e && t === n.Ld.Enabled),
				b = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Qb,
					experimentEligibilitySelector: o.e
				}), a.a),
				m = Object(r.a)(c, b, (e, t) => e && t === n.gc.Enabled),
				p = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.wb,
					experimentEligibilitySelector: o.e
				}), a.a),
				f = Object(r.a)(p, e => e === n.Id.Banner_1st_time),
				h = Object(r.a)(p, e => e === n.Id.Tooltip_persist),
				g = Object(r.a)(p, e => e === n.Id.Tooltip_1st_time),
				O = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.xb,
					experimentEligibilitySelector: o.e
				}), a.a),
				y = Object(r.a)(O, e => e === n.Jd.ContinuousScroll),
				v = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.ob,
					experimentEligibilitySelector: o.e
				}), a.a),
				j = Object(r.a)(v, e => e === n.nc.Banner1stTime),
				_ = Object(r.a)(v, e => e === n.nc.BannerPersist),
				P = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.yb,
					experimentEligibilitySelector: o.e
				}), a.a),
				E = Object(r.a)(P, e => e === n.Kd.Enabled),
				T = Object(r.a)(e => Object(i.c)(e, {
					experimentName: n.Kb,
					experimentEligibilitySelector: () => !0
				}), a.a),
				C = Object(r.a)(T, e => e === n.fb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e.6bec567787f2973800f4.js.map