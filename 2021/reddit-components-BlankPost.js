// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.a79a4867b309e65df2d0.js
// Retrieved at 3/11/2021, 7:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
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
			var p = s("./node_modules/invariant/browser.js"),
				m = s.n(p),
				f = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return m()(!1, e)
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

			function g(e, t, s) {
				return t in e ? Object.defineProperty(e, t, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = s, e
			}
			var _ = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				E = j.hasOwnProperty,
				P = j.toString,
				v = function(e) {
					return _.reduce((function(t, s) {
						if (E.call(e, s)) {
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
						return g(O(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(O(t), "handleNode", (function(e) {
							var s = t.props.children;
							if (null != s) {
								var r = s.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), g(O(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(v(t.props)), t.target = t.targetNode, e = O(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(O(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var s = d.get(e.observer);
									s.delete(e) && (s.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(O(t), e)
						})), g(O(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					s = e, (t = r).prototype = Object.create(s.prototype), t.prototype.constructor = t, t.__proto__ = s;
					var o = r.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var s = y.some((function(s) {
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
			g(T, "displayName", "IntersectionObserver")
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
		"./src/graphql/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/graphql/operations/FetchContentControls.json": function(e) {
			e.exports = JSON.parse('{"id":"90868f8cfd19"}')
		},
		"./src/graphql/operations/UpdateAutomatedReportingSettings.json": function(e) {
			e.exports = JSON.parse('{"id":"8305fd94cd72"}')
		},
		"./src/graphql/operations/UpdatePostRequirements.json": function(e) {
			e.exports = JSON.parse('{"id":"8732ab4560ce"}')
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
				return m
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/graphql/operations/BadgeIndicators.json"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				d = e => Object(a.a)(e, {
					...o
				}),
				c = s("./src/reddit/models/Badge/index.ts");
			const u = Object(r.a)(n.c),
				l = Object(r.a)(n.b),
				b = Object(r.a)(n.d),
				p = Object(r.a)(n.a),
				m = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				f = (e, t, s) => ({
					[c.c.DirectMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatRooms]: {
						count: t,
						style: c.b.Numbered
					},
					[c.c.ChatRoomMentions]: {
						count: s,
						style: c.b.Numbered
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
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(s);
					r ? (e(l(r)), e(Object(i.d)())) : e(p())
				};
			const O = () => async e => {
				const t = m({
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
				return m
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return y
			}));
			var r, n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/chat/endpoints/sendbird/index.ts"),
				a = s("./src/reddit/actions/tabBadging.ts"),
				d = s("./src/reddit/selectors/chat.ts"),
				c = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(r || (r = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: p
			} = r, m = Object(i.a)(u), f = Object(i.a)(l), h = Object(i.a)(b), O = Object(i.a)(p);
			let g;
			const _ = 5 * n.db,
				y = () => async (e, t, {
					apiContext: s
				}) => {
					const r = t();
					if (!Object(c.K)(r) || !Object(d.d)(r)) return clearTimeout(g);
					g || e((() => async (e, t, {
						apiContext: s
					}) => {
						const r = t(),
							{
								session: n
							} = r.user;
						if (n && Object(c.K)(r) && Object(d.d)(r)) {
							e(h());
							const t = await Object(o.f)(s(), n);
							t && t.ok ? (e(O({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(a.d)())) : e(f({
								error: t.error
							}))
						}
					})()), g = setTimeout(() => {
						e(y())
					}, _)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			}));
			const r = "CONTENT_CONTROLS_FAILED",
				n = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "b", (function() {
				return S
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/camelCase.js"),
				i = s.n(n),
				o = s("./src/lib/constants/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/sentry/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/graphql/operations/FetchContentControls.json"),
				l = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/reddit/models/AutomatedReporting/index.ts");
			const p = e => {
				switch (e) {
					case "LENIENT":
						return b.a.Lenient;
					case "MODERATE":
						return b.a.Moderate;
					case "STRICT":
						return b.a.Strict;
					default:
						return b.a.Off
				}
			};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var m = s("./node_modules/lodash/isEmpty.js"),
				f = s.n(m),
				h = s("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				O = s("./src/graphql/operations/UpdatePostRequirements.json"),
				g = s("./src/reddit/endpoints/subreddit/about.ts"),
				_ = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/contentControls.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/actions/contentControls/constants.ts");
			const P = Object(a.a)(E.b),
				v = Object(a.a)(E.c),
				T = Object(a.a)(E.a),
				C = e => async (t, s, {
					gqlContext: r
				}) => {
					const n = {
						subredditName: e.toLowerCase()
					};
					if (Object(y.a)(s(), n)) return;
					t(v(n));
					let i = Object(j.F)(s(), e);
					if (!i) {
						const s = await Object(g.a)(r(), e, !1);
						if (s.ok) {
							i = s.body.data.subreddit.id
						}
						if (!i) {
							const e = s.error || {
								type: o.E.NOT_FOUND_ERROR
							};
							return void t(T({
								...n,
								error: e
							}))
						}
					}
					let a = null;
					const c = await ((e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}).then(e => {
						var t, s;
						if (e.ok) {
							const r = null === (s = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === s ? void 0 : s.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: p(null == r ? void 0 : r.automatedReportingLevelAbuse),
												levelHate: p(null == r ? void 0 : r.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == r ? void 0 : r.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(r(), {
						subredditId: i
					});
					if (c.ok) {
						const e = c.body;
						a = e.data.subreddit && e.data.subreddit
					}
					if (a) t(P({
						...n,
						...a
					}));
					else {
						const s = c.error || {
							type: o.E.UNKNOWN_ERROR
						};
						t(T({
							...n,
							error: s
						})), d.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: c.body,
								responseOk: c.ok
							}), d.c.captureMessage("Missing post requirements data!")
						})
					}
				}, D = Object(a.a)(E.d), S = (e, t) => async (s, n, {
					gqlContext: i
				}) => {
					const o = e.toLowerCase(),
						a = Object(j.F)(n(), e);
					if (!a) return {
						success: !1
					};
					const d = await ((e, t, s) => {
						const r = [Promise.resolve(null), Promise.resolve(null)];
						if (s.postRequirements && !f()(s.postRequirements)) {
							const n = {
								subredditId: t,
								...s.postRequirements
							};
							r[0] = Object(l.a)(e, {
								...O,
								variables: {
									input: n
								}
							})
						}
						if (s.automatedReporting && !f()(s.automatedReporting)) {
							const n = {
								subredditId: t
							};
							s.automatedReporting.levelAbuse && (n.automatedReportingLevelAbuse = s.automatedReporting.levelAbuse), s.automatedReporting.levelHate && (n.automatedReportingLevelHate = s.automatedReporting.levelHate), r[1] = Object(l.a)(e, {
								...h,
								variables: {
									input: n
								}
							})
						}
						return Promise.all(r).then(([e, t]) => {
							let s = !0,
								r = [];
							if (e) {
								const t = e.body,
									n = t.data.updatePostRequirements.fieldErrors;
								s = s && t.data.updatePostRequirements.ok, n && (r = r.concat(n))
							}
							if (t) {
								const e = t.body,
									n = e.data.updateSubredditSettings.fieldErrors;
								s = s && e.data.updateSubredditSettings.ok, n && (r = r.concat(n))
							}
							return {
								ok: s,
								fieldErrors: r.length ? r : null
							}
						})
					})(i(), a, t);
					if (d.ok) return s(D({
						subredditName: o,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = x(d.fieldErrors);
						return s(Object(c.f)({
							duration: c.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: _.b.Error,
							text: e && e.length ? e[0].message : r.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, x = e => e && e.map(e => ({
					...e,
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			const r = "PAGE__FRONTPAGE_PENDING",
				n = "PAGE__FRONTPAGE_LOADED",
				i = "PAGE__FRONTPAGE_FAILED",
				o = "PAGE__FRONTPAGE_RELOADED",
				a = "FRONTPAGE__MORE_POSTS_PENDING",
				d = "FRONTPAGE__MORE_POSTS_LOADED",
				c = "FRONTPAGE__MORE_POSTS_FAILED"
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
					const s = Object(o.j)(t());
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
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return w
			})), s.d(t, "PAGE_LOADED", (function() {
				return R
			})), s.d(t, "PAGE_FAILED", (function() {
				return N
			})), s.d(t, "pagePending", (function() {
				return k
			})), s.d(t, "pageLoaded", (function() {
				return M
			})), s.d(t, "pageFailed", (function() {
				return L
			})), s.d(t, "postCreationPageDataRequested", (function() {
				return U
			})), s.d(t, "postCreationPageRequested", (function() {
				return V
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/filterQueryParams/index.ts"),
				o = s("./src/lib/isFakeSubreddit/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/lib/makePostCreationPageKey/index.ts"),
				c = s("./src/reddit/actions/contentControls/index.ts"),
				u = s("./src/reddit/actions/economics/helpers/async.ts"),
				l = s("./src/reddit/actions/externalAccount.ts"),
				b = s("./src/reddit/actions/gold/powerups.ts"),
				p = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postCreation/general.ts"),
				f = s("./src/reddit/actions/profile/index.ts"),
				h = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/actions/subredditDuplicates.ts"),
				g = s("./src/config.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				y = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				j = s("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				P = s("./src/reddit/helpers/trackers/postComposer.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/contentControls.ts"),
				C = s("./src/reddit/selectors/postCollection.ts"),
				D = s("./src/reddit/selectors/postCreations.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				A = s("./src/reddit/selectors/subreddit.ts"),
				I = s("./src/reddit/selectors/user.ts");
			const w = "POST_CREATION__PAGE_PENDING",
				R = "POST_CREATION__PAGE_LOADED",
				N = "POST_CREATION__PAGE_FAILED",
				k = Object(a.a)(w),
				M = Object(a.a)(R),
				L = Object(a.a)(N),
				F = () => async (e, t) => {
					const s = t(),
						r = Object(D.a)(s);
					r !== Object(D.fb)(s) && e(Object(m.g)({
						submissionType: r
					}))
				}, U = e => async (t, s, r) => {
					const {
						collectionId: i,
						profileName: a,
						subredditName: u
					} = e, p = Object(d.a)(e), m = s(), O = m.creations.api.page.pending[p], j = m.creations.api.page.fetched[p], P = m.creations.api.page.error[p];
					if (O) return;
					if (j && !P) return void t(F());
					const C = [];
					t(k({
						key: p
					}));
					let D = u;
					!u && a && (D = `u_${a}`), C.push(((e, t) => Object(_.a)(e, {
						method: n.cb.GET,
						endpoint: Object(y.a)(`${g.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(r.apiContext(), {
						subredditName: D,
						collectionId: i
					})), a && (C.push(t(f.d(a))), C.push(t(f.b(a))));
					const [S] = await Object(E.a)("postCreation", () => Promise.all(C));
					if (S.ok) {
						const e = S.body,
							{
								posts: r = {},
								subredditAboutInfo: n
							} = e;
						if (t(M({
								key: p,
								meta: m.meta,
								...e,
								posts: r
							})), !Object(I.K)(s())) return;
						if (n) {
							const e = Object.keys(n)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(F());
						const i = [];
						i.push(t(l.o()));
						const a = Object(I.j)(s());
						if (a && a.hasUserProfile && i.push(t(f.d(Object(v.e)(a)))), u && !Object(o.a)(u)) {
							i.push(t(h.o(u))), !!Object(T.b)(s(), {
								subredditName: u
							}) || i.push(t(Object(c.a)(u)))
						}
						await Promise.all(i)
					} else t(L({
						error: S.error,
						key: p
					}))
				}, V = e => async (t, s) => {
					const {
						subredditName: o,
						profileName: a
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(U({
							collectionId: c,
							profileName: a,
							subredditName: o
						})), !Object(I.K)(s())) return void Object(j.a)(t, s());
					let l;
					if (o ? (l = Object(A.A)(s(), {
							subredditName: o
						}), await t(Object(u.a)({
							subredditName: o
						}))) : a && (l = Object(x.j)(s(), {
							profileName: a
						})), d.source_id) await t(((e, t) => async (s, r) => {
						const {
							subredditName: n,
							profileName: i
						} = e, o = [];
						let a;
						n ? a = Object(A.F)(r(), n) : i && (a = Object(I.eb)(r(), {
							userName: i
						})), a && o.push(s(Object(O.b)(a, t))), o.push(s(Object(p.K)(t))), await Promise.all(o);
						const d = Object(S.f)(r(), {
							postId: t
						});
						s(Object(m.k)({
							postId: t,
							postTitle: d ? d.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const n = Object(C.q)(s(), {
							collectionId: c
						});
						l && n && n.subredditId === l.id || t(Object(r.c)(Object(i.a)(e.url, ["collection"])))
					}((e, t) => {
						const s = e.platform.lastPage;
						t && s && s.meta && s.meta.name === n.Db.POST_CREATION && P.x(e)
					})(s(), o)
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PAGE_PENDING", (function() {
				return p
			})), s.d(t, "PAGE_LOADED", (function() {
				return m
			})), s.d(t, "PAGE_FAILED", (function() {
				return f
			})), s.d(t, "pagePending", (function() {
				return h
			})), s.d(t, "pageLoaded", (function() {
				return O
			})), s.d(t, "pageFailed", (function() {
				return g
			})), s.d(t, "postDraftPageDataRequested", (function() {
				return _
			})), s.d(t, "postDraftRequested", (function() {
				return y
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makePostDraftPageKey/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				o = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = s("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				m = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				h = Object(r.a)(p),
				O = Object(r.a)(m),
				g = Object(r.a)(f),
				_ = e => async (t, s, r) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(n.a)(e), h = s(), _ = h.creations.api.page.pending[f], y = h.creations.api.page.fetched[f], j = h.creations.api.page.error[f];
					if (_ || y && !j || !p) return;
					t(i.d(m));
					const E = await Object(b.a)("postDraft", () => ((e, t, s) => Object(d.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${s}/${t}`)),
						method: a.cb.GET
					}))(r.apiContext(), p, m));
					if (E.ok) {
						const e = E.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(O({
							...e,
							key: f
						}))
					} else t(g({
						error: E.error,
						key: f
					}))
				}, y = e => async (t, s, r) => {
					await t(_(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "PROFILE_POSTS_PENDING", (function() {
				return S
			})), s.d(t, "PROFILE_POSTS_LOADED", (function() {
				return x
			})), s.d(t, "PROFILE_POSTS_FAILED", (function() {
				return A
			})), s.d(t, "profilePostsPending", (function() {
				return I
			})), s.d(t, "profilePostsLoaded", (function() {
				return w
			})), s.d(t, "profilePostsFailed", (function() {
				return R
			})), s.d(t, "profilePostsRequested", (function() {
				return N
			})), s.d(t, "MORE_POSTS_PENDING", (function() {
				return k
			})), s.d(t, "MORE_POSTS_LOADED", (function() {
				return M
			})), s.d(t, "MORE_POSTS_FAILED", (function() {
				return L
			})), s.d(t, "morePostsPending", (function() {
				return F
			})), s.d(t, "morePostsLoaded", (function() {
				return U
			})), s.d(t, "morePostsFailed", (function() {
				return V
			})), s.d(t, "morePostsRequested", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/lodash/pick.js"),
				n = s.n(r),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeListingKey/index.ts"),
				a = s("./src/reddit/actions/contentGate.ts"),
				d = s("./src/reddit/actions/externalAccount.ts"),
				c = s("./src/reddit/actions/moderatingSubreddits.ts"),
				u = s("./src/reddit/actions/pages/profileShared.ts"),
				l = s("./src/reddit/actions/pinnedPost.ts"),
				b = s("./src/reddit/actions/platform.ts"),
				p = s("./src/reddit/actions/profile/index.ts"),
				m = s("./src/reddit/actions/subreddit.ts"),
				f = s("./src/reddit/constants/errors.ts"),
				h = s("./src/reddit/constants/parameters.ts"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/config.ts"),
				_ = s("./src/lib/addAllowQuarantinedParam/index.ts"),
				y = s("./src/lib/constants/index.ts"),
				j = s("./src/lib/makeApiRequest/index.ts"),
				E = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const P = (e, t, s) => Object(j.a)(e, {
				data: s,
				endpoint: Object(_.a)(Object(E.a)(`${g.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`)),
				method: y.cb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var v = s("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				T = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				C = s("./src/reddit/selectors/listings.ts"),
				D = s("./src/reddit/selectors/profile.ts");
			const S = "PAGE__PROFILE_POSTS_PENDING",
				x = "PAGE__PROFILE_POSTS_LOADED",
				A = "PAGE__PROFILE_POSTS_FAILED",
				I = Object(i.a)(S),
				w = Object(i.a)(x),
				R = Object(i.a)(A),
				N = e => async (t, s, r) => {
					const {
						queryParams: i,
						params: g
					} = e, {
						sort: _,
						t: y
					} = Object(u.b)(i), {
						profileName: j
					} = g, E = Object(o.a)(`u_${j}`, _, i), S = s(), x = S.listings.postOrder.ids[E], A = Object(C.c)(S, {
						listingKey: E
					}), N = Object(C.d)(S, {
						listingKey: E
					});
					if (await t(p.d(j)), N || x && !A) return;
					const k = {
						...n()(e.queryParams, [...h.l, ...h.k, h.h]),
						layout: Object(O.O)(S, {}).toLowerCase(),
						sort: _,
						t: Object(v.a)(_, y)
					};
					t(I({
						key: E
					}));
					const M = await Object(T.a)("profilePosts", () => P(r.apiContext(), j, k));
					if (!M.ok) return t(R({
						account: M.body.data ? M.body.data.account : null,
						error: M.body.reason ? {
							type: M.body.reason
						} : M.error,
						key: E
					})), M.body.reason === f.a.DeletedProfile && t(Object(a.p)({
						profileName: j
					})), void t(b.l(M.status));
					const L = M.body;
					t(w({
						key: E,
						meta: s().meta,
						...L
					}));
					const F = Object(D.m)(s(), j),
						{
							pinned: U
						} = L;
					t(Object(l.h)({
						profileId: F,
						pinned: U
					})), await Promise.all([t(Object(u.c)(j)), t(Object(m.q)()), t(Object(c.b)()), t(d.o(j))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", M = "PROFILE_POSTS__MORE_POSTS_LOADED", L = "PROFILE_POSTS__MORE_POSTS_FAILED", F = Object(i.a)(k), U = Object(i.a)(M), V = Object(i.a)(L), G = () => async (e, t, {
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
						t: l
					} = Object(u.b)(a), {
						profileName: b
					} = d, p = Object(o.a)(`u_${b}`, c, a), m = Object(C.g)(r, {
						listingKey: p
					});
					if (!m) return;
					const f = Object(C.d)(r, {
							listingKey: p
						}),
						g = Object(C.e)(r, {
							listingKey: p,
							token: m.token
						});
					if (f || g) return;
					e(F({
						key: p,
						fetchedToken: m.token
					}));
					const _ = {
							after: m.token,
							dist: m.dist,
							sort: c,
							t: l,
							...n()(a, h.l),
							layout: Object(O.O)(r, {}).toLowerCase()
						},
						y = await P(s(), b, _),
						j = r.listings.postOrder.ids[p],
						E = y.body.postIds || [],
						v = {
							...y.body,
							postIds: E.filter(e => !j || !j.includes(e))
						};
					y.ok ? (e(U({
						fetchedToken: m.token,
						key: p,
						meta: r.meta,
						...v
					})), await e(Object(u.c)(b))) : e(V({
						account: y.body.data ? y.body.data.account : null,
						error: y.error,
						fetchedToken: m.token,
						key: p
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "e", (function() {
				return v
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
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				m = Object(i.a)(p),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				h = "PINNEDPOST__UNPIN_POST_SUCCESS",
				O = Object(i.a)(f),
				g = Object(i.a)(h),
				_ = "PINNEDPOST__PIN_POST_PENDING",
				y = "PINNEDPOST__UNPIN_POST_PENDING",
				j = Object(i.a)(_),
				E = Object(i.a)(y),
				P = "PINNEDPOST__PIN_POST_FAILURE",
				v = "PINNEDPOST__UNPIN_POST_FAILURE",
				T = Object(i.a)(P),
				C = Object(i.a)(v),
				D = e => Object(a.f)({
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
				A = () => Object(a.f)({
					kind: u.b.Error,
					text: r.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				I = (e, t = !1) => async (s, i, {
					apiContext: p
				}) => {
					const m = i(),
						f = m.posts.models[e];
					if (!f) return;
					const h = !Object(l.q)(m, {
						postId: e
					});
					if (h && f.isRemoved) return s((() => Object(a.f)({
						kind: u.b.Error,
						text: r.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const _ = f.author,
						y = Object(b.m)(m, _),
						[P, v, I, w, R] = h ? [j, O, T, D, x] : [E, g, C, S, A];
					if (h) {
						if (Object(l.L)(m, {
								profileName: _
							}).length >= n.V) return void s(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const N = Object(l.n)(m, e, _),
						k = !h && N;
					s(P({
						postId: e,
						profileId: y
					})), (await Object(c.t)(p(), e, h, !0)).ok ? (s(v({
						postId: e,
						profileId: y
					})), t || s(w(e, k))) : (s(I({
						postId: e,
						profileId: y
					})), s(R()))
				}
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return f
			})), s.d(t, "m", (function() {
				return O
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "f", (function() {
				return P
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "g", (function() {
				return T
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "r", (function() {
				return S
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "t", (function() {
				return I
			})), s.d(t, "u", (function() {
				return w
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "x", (function() {
				return N
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "z", (function() {
				return M
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "p", (function() {
				return F
			})), s.d(t, "o", (function() {
				return V
			})), s.d(t, "w", (function() {
				return G
			})), s.d(t, "n", (function() {
				return q
			})), s.d(t, "l", (function() {
				return B
			}));
			var r = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/lib/isUrl/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/endpoints/post/index.tsx"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				u = s("./src/reddit/routes/postCreation/constants.ts"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				b = s("./src/reddit/selectors/postCollection.ts"),
				p = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/actions/postCreation/constants.ts");
			const f = Object(i.a)(m.n),
				h = Object(i.a)(m.z),
				O = (Object(i.a)(m.s), e => {
					switch (e) {
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
				g = Object(i.a)(m.b),
				_ = Object(i.a)(m.c),
				y = Object(i.a)(m.d),
				j = Object(i.a)(m.e),
				E = Object(i.a)(m.f),
				P = Object(i.a)(m.g),
				v = Object(i.a)(m.h),
				T = Object(i.a)(m.i),
				C = Object(i.a)(m.j),
				D = Object(i.a)(m.q),
				S = Object(i.a)(m.O),
				x = Object(i.a)(m.N),
				A = (Object(i.a)(m.P), Object(i.a)(m.Q)),
				I = Object(i.a)(m.R),
				w = Object(i.a)(m.S),
				R = Object(i.a)(m.T),
				N = Object(i.a)(m.U),
				k = Object(i.a)(m.V),
				M = Object(i.a)(m.W),
				L = Object(i.a)(m.r),
				F = e => async (t, s, {
					apiContext: r
				}) => {
					t(y(e)), Object(n.a)(e) && t((e => async (t, s, {
						apiContext: r
					}) => {
						const n = await Object(d.f)(r(), e);
						n.ok && n.body && n.body.json && n.body.json.data && t(h(n.body.json.data))
					})(e))
				}, U = Object(i.a)(m.A), V = (e, t) => async (s, n) => {
					s(U()), s(e ? Object(r.b)(u.b) : Object(r.b)(Object(p.V)(n(), {
						pageLayer: t
					})))
				}, G = e => async t => {
					t(o.i(e))
				}, q = e => async (t, s) => {
					const r = s(),
						n = Object(a.D)(e),
						i = Object(p.B)(r);
					if (n && i) {
						Object(l.a)(r) !== c.c && t(G(c.c))
					} else t(V(!1, e))
				}, B = e => async (t, s) => {
					const r = s();
					Object(b.m)(r, {
						subredditId: e
					}) ? t(o.i(c.a)) : t(o.i(c.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return E
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return v
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
				p = s("./src/reddit/routes/postCreation/index.ts"),
				m = s("./src/reddit/routes/postCreation/constants.ts"),
				f = s("./src/reddit/selectors/postCreations.ts"),
				h = s("./src/reddit/selectors/platform.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/actions/postCreation/constants.ts"),
				_ = s("./src/reddit/actions/postCreation/general.ts");
			const y = Object(a.a)(g.J),
				j = Object(a.a)(g.K),
				E = Object(a.a)(g.I),
				P = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					let o = r();
					const {
						name: a,
						isProfile: p
					} = e, m = Object(h.e)(o), g = m && !p && Object(l.a)(m.name, a), _ = o.creations.api.subreddit.change.pending;
					if (g || _) return;
					const j = Object(u.t)(t);
					if (!a) return void s(v(e, j));
					s(y(e));
					const E = p ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await s(Object(c.postCreationPageDataRequested)(E)), p || !Object(f.x)(o)) return s(v(e, j));
					const P = e.allowedPostTypes || Object(O.z)(r(), {
						subredditName: a
					});
					if (!P) return void s(v(e, j));
					let T;
					o = r();
					const C = Object(f.fb)(o),
						D = Object(f.x)(o);
					if (C === i.Lb.MEDIA && D) {
						const e = Object(f.P)(o),
							t = Object(b.v)(e),
							s = Object(f.G)(o) && e.items.length > 1,
							r = !t && !s;
						if (s && !P.galleries) T = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (r && !P.images) T = b.p.ImageWillBeRemoved;
						else if (t && !P.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								s = t && t.metadata.videoDuration || 0;
							P.images ? s > i.Z && (T = b.p.VideoWillBeRemovedTooLongForGif) : T = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					s(T ? Object(d.i)(T) : v({
						...e,
						allowedPostTypes: P
					}, j))
				}, v = (e, t, s = !0) => async (i, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? p.b : p.c;
					let b = "";
					b = a ? l(a) : m.b, b = Object(n.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(j(e)), s && i(Object(_.q)(!0)), i(Object(_.i)()), i(Object(r.c)(b)))
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
				return A
			})), s.d(t, "e", (function() {
				return I
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "p", (function() {
				return M
			})), s.d(t, "j", (function() {
				return L
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "k", (function() {
				return G
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "n", (function() {
				return B
			})), s.d(t, "s", (function() {
				return J
			})), s.d(t, "r", (function() {
				return X
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
				n = s("./src/lib/formatApiError/index.ts"),
				i = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/postCreation/general.ts"),
				a = s("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = s("./src/lib/makeApiRequest/index.ts"),
				l = s("./src/lib/omitHeaders/index.ts"),
				b = s("./src/reddit/models/StructuredStyles/index.ts");
			var p = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/PostDraft/index.ts"),
				h = s("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				O = s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts");
			const _ = e => {
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
					if (t.subreddit_type === g.e.User) {
						const s = Object(h.a)(t, Object(m.g)(t.display_name_prefixed));
						e.profiles[s.id] = s
					} else {
						const s = Object(O.a)(t);
						e.subreddits[s.id] = s
					}
					return e
				}, t)
			};
			var y = s("./src/reddit/endpoints/post/draft/helpers.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				E = s("./src/reddit/helpers/trackers/postComposer.ts"),
				P = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				T = s("./src/reddit/selectors/postCreations.ts"),
				C = s("./src/reddit/selectors/postDraft.ts"),
				D = s("./src/reddit/selectors/profile.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const A = "POST_DRAFT__LIST_PENDING",
				I = "POST_DRAFT__LIST_LOADED",
				w = "POST_DRAFT__LIST_FAILED",
				R = Object(i.a)(A),
				N = Object(i.a)(I),
				k = Object(i.a)(w),
				M = () => async (e, t, {
					apiContext: s
				}) => {
					const n = t();
					if (!Object(x.j)(n) || Object(C.b)(n)) return;
					e(R());
					const i = await (e => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: r.cb.GET
					}))(s());
					i.ok ? e(N(_(i.body))) : e(k(i.error))
				}, L = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", U = "POST_DRAFT__SAVE_DRAFT_FAILED", V = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", G = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(L), $ = Object(i.a)(F), W = Object(i.a)(U), K = Object(i.a)(V), Q = Object(i.a)(G), z = Object(i.a)(q), J = Object(i.a)(B), X = e => async (t, s, {
					apiContext: i
				}) => {
					const o = s(),
						c = Object(C.g)(o),
						b = Object(T.U)(o);
					if (c || b) return;
					const m = Object(C.h)(o, e);
					if (!m) return;
					t(H(m)), E.e(o, m);
					const f = await ((e, t, s) => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: s ? r.cb.PUT : r.cb.POST,
						data: Object(y.a)(t)
					}).then(e => e.body.fields && Object(j.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: r.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), m, e);
					if (f.ok) {
						const {
							id: s,
							draftsCount: r
						} = Object(y.c)(f.body);
						t($({
							draftId: s,
							draftsCount: r
						})), e || t(Object(a.a)(m.destSubreddit, s, !1))
					} else {
						const e = f.error;
						e.type === r.E.BAD_CAPTCHA_ERROR ? t(z()) : e.type === r.E.VALIDATION_ERROR ? t(K(e)) : e.type === r.E.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t(W(e)), t(Object(d.f)({
							duration: d.a,
							kind: P.b.Error,
							text: Object(n.a)(e)
						}))
					}
				}, Y = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(Y), ee = e => async (t, s, {
					apiContext: r
				}) => {
					t(Z(e));
					let n = j.e;
					const i = s();
					if (e.subredditId) {
						const t = Object(S.T)(i, {
								subredditId: e.subredditId
							}),
							s = Object(D.p)(i, {
								profileId: e.subredditId
							}),
							r = Object(x.j)(i);
						t ? n = {
							isProfile: !1,
							name: t.name
						} : s && r && (n = {
							isProfile: !0,
							name: Object(v.e)(r)
						})
					}
					await t(Object(a.a)(n, e.id, !1));
					const o = Object(C.h)(s(), e.id);
					o && E.h(s(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", se = "POST_DELETE_DRAFT_FAILED", re = "POST_DELETE_DRAFT_PENDING", ne = Object(i.a)(te), ie = Object(i.a)(se), oe = Object(i.a)(re), ae = (e, t) => async (s, i, {
					apiContext: a
				}) => {
					const p = i();
					if (Object(C.a)(p, e)) return;
					const m = Object(C.d)(p, {
						draftId: e
					});
					m && E.f(p, m), s(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: r.cb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: r
						} = Object(y.c)(f.body);
						s(ne({
							draftId: e,
							draftsCount: r
						}));
						const n = Object(c.t)(t);
						e === n && s(Object(o.o)(!0, t))
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
				return m
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
				p = Object(n.a)(u),
				m = (e, t) => async (e, s, {
					apiContext: r
				}) => {
					const n = s();
					e(l());
					const d = await Object(o.a)(r());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(i.d)()), f(n)) : Object(a.a)(e, n) : e(p(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === r.Db.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			})), s.d(t, "b", (function() {
				return m
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/config.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/reddit/models/Post/index.ts");
			var d = s("./src/reddit/models/Duplicates/index.ts"),
				c = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/selectors/profile.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(r.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(r.a)(b)),
				m = (e, t) => async (s, r, {
					apiContext: b
				}) => {
					const m = Object(l.T)(r(), {
						subredditId: e
					}) || Object(u.p)(r(), {
						profileId: e
					});
					if (!m) return;
					const f = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.g)(m) ? n.Wb + m.name : m.name
						},
						h = await ((e, t, s) => Object(o.a)(e, {
							data: s,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(a.s)(t)}`,
							method: n.cb.GET
						}))(b(), t, f);
					if (h.ok) {
						const r = h.body;
						s(p({
							distinguishKey: Object(d.a)(t, f),
							postIds: r.postIds,
							posts: r.posts,
							profiles: r.profiles,
							subreddits: r.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "f", (function() {
				return E
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/chat/unreadCount.ts"),
				o = s("./src/reddit/actions/inbox.ts"),
				a = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/selectors/appBadges.ts"),
				u = s("./src/reddit/selectors/chat.ts"),
				l = s("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				b = s("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				h = Object(n.a)(f),
				O = e => {},
				g = Object(r.c)({
					basicChannelCount: c.f,
					subredditChannelCount: c.e,
					subredditMentionCount: c.d
				}),
				_ = e => {
					const t = Object(l.a)(e);
					return {
						inboxCount: t ? Object(c.i)(e) : Object(p.F)(e) || 0,
						basicChannelCount: t ? Object(c.f)(e) : Object(u.a)(e) || 0
					}
				},
				y = () => async (e, t) => {
					const s = t(),
						r = Object(l.a)(s),
						n = Object(p.J)(s) || Object(p.K)(s),
						i = Object(b.d)(s);
					let o = 0;
					n && (o = r ? i ? Object(c.j)(s) : Object(c.k)(s) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: s
						} = _(e);
						return t + s
					})(s), O(o), e(h({
						hasUnreadMessages: !!o
					})))
				}, j = () => async (e, t) => {
					{
						e(y());
						const s = _(t());
						Object(a.c)(s)
					}
				}, E = e => async (t, s) => {
					const r = s();
					if (Object(l.a)(r)) {
						const s = Object(c.f)(r),
							n = Object(c.i)(r),
							{
								basicChannelCount: i,
								inboxCount: o
							} = e;
						if (s !== i) {
							const e = Object(m.e)({
								count: i,
								key: d.c.ChatTab
							});
							t(Object(m.a)(e))
						}
						if (o && o !== n) {
							const e = Object(m.e)({
								count: o,
								key: d.c.MessageTab
							});
							t(Object(m.a)(e))
						}(s !== i || o && o !== n) && t(y())
					} else {
						const s = Object(u.a)(r),
							n = Object(u.b)(r),
							a = Object(p.F)(r),
							{
								basicChannelCount: d,
								inboxCount: c
							} = e;
						s !== d && t(Object(i.b)({
							...n,
							basicChannelCount: d
						})), c && c !== a && t(Object(o.b)({
							inboxCount: c
						})), (s !== d || c && c !== a) && t(y())
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
				p = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/selectors/media.ts"),
				f = s("./src/reddit/selectors/video.ts");
			const h = [{
					event: p.a.ViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.m
				}, {
					event: p.a.Impression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.GalleryItemImpression,
					threshold: c.c,
					viewabilityMinimum: c.d
				}, {
					event: p.a.VendorFullyInView,
					threshold: c.b,
					viewabilityMinimum: c.f
				}, {
					event: p.a.GroupMViewable,
					threshold: c.b,
					viewabilityMinimum: c.m
				}, {
					event: p.a.VendorFullyInViewSeconds5,
					threshold: c.l,
					viewabilityMinimum: c.h,
					remainingTime: c.h,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}, {
					event: p.a.VendorFullyInViewSeconds15,
					threshold: c.l,
					viewabilityMinimum: c.g,
					remainingTime: c.g,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0
				}],
				O = [{
					event: p.a.VideoViewableImpression,
					threshold: c.l,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoFullyViewableImpression,
					threshold: c.a,
					viewabilityMinimum: c.i,
					remainingTime: c.i,
					timeViewingInterrupted: 0
				}, {
					event: p.a.VideoGroupMViewable,
					threshold: void 0,
					viewabilityMinimum: c.k,
					remainingTime: c.k,
					timeViewingInterrupted: 0,
					cumulative: !0,
					cumulativeElapsedTime: 0,
					checkAudible: !0
				}, {
					event: p.a.VideoVendorFullyViewable50,
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
				_ = () => g(h),
				y = () => g(O),
				j = [c.c, c.e, c.l, c.j, c.a, c.b],
				E = [c.c, c.l, c.j, c.a],
				P = [c.c, c.e, c.l, c.b],
				v = e => "boolean" == typeof e.cumulative && e.cumulative,
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
					isAudible: e => Object(m.a)(e),
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
			class D extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = _(), this.videoStats = y(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
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
						v(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), s && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						v(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = r * s < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && r * s > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (v(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						v(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					return e && !t ? s = P : !e && t && (s = E), o.a.createElement(d.a, {
						threshold: s,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = C(D)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "BlankPost", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				o = s("./src/reddit/connectors/PostViewable/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/contexts/Post/index.tsx");
			const c = Object(o.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? n.a.createElement(i.a, {
					post: t,
					trackDisplay: !0
				}, n.a.createElement("div", {
					className: Object(a.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(c(u))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(r.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: n.J
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
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "b", (function() {
				return O
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
			const p = n.a.createContext(null);

			function m(e) {
				const t = Object(i.e)(t => Object(u.D)(t, {
						postId: e
					})),
					{
						currentUser: s
					} = Object(d.a)(),
					r = Object(i.e)(e => t ? Object(l.L)(e, {
						identifier: t.belongsTo
					}) : null),
					n = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? r : null,
					b = !(!s || (null == t ? void 0 : t.author) !== Object(c.e)(s)),
					p = Object(i.e)(i => ({
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
				return Object(a.a)(p)
			}

			function f(e) {
				const {
					postId: t,
					children: s
				} = e, r = m(t);
				return n.a.createElement(p.Provider, {
					value: r
				}, s)
			}

			function h(e) {
				const t = e.displayName || e.name;

				function s(s) {
					return n.a.createElement(p.Consumer, null, r => {
						if (!r) throw new Error(`No Post context for <${t}/>!`);
						return n.a.createElement(e, b({}, s, r))
					})
				}
				return s.displayName = `PostContext(${t})`, s
			}

			function O(e) {
				const t = e.displayName || e.name;

				function s(t) {
					const s = m(t.postId);
					return n.a.createElement(p.Provider, {
						value: s
					}, n.a.createElement(e, b({}, t, s)))
				}
				return s.displayName = `PostProvider(${t})`, s
			}
			t.c = p
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return p
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
					currentUser: Object(d.j)(e),
					modModeEnabled: e.modModeEnabled,
					nightmodeEnabled: Object(d.V)(e),
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

			function p(e) {
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
				return o
			}));
			var r = s("./src/config.ts"),
				n = s("./src/lib/constants/index.ts"),
				i = s("./src/lib/makeApiRequest/index.ts");
			const o = e => Object(i.a)(e, {
				endpoint: `${r.a.gatewayUrl}/desktopapi/v1/me`,
				method: n.cb.GET
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
				method: r.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return b
			}));
			var r = s("./src/reddit/helpers/flair.ts"),
				n = s("./src/reddit/models/PostDraft/index.ts");
			const i = e => ({
					id: e.json.data.id,
					draftsCount: e.json.data.drafts_count
				}),
				o = e => e.destSubreddit.id ? {
					subreddit: e.destSubreddit.id,
					target: e.destSubreddit.isProfile ? "profile" : "subreddit"
				} : {},
				a = e => {
					switch (e.kind) {
						case n.b.Link:
							return "link";
						case n.b.Markdown:
							return "markdown";
						case n.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				d = e => {
					switch (e) {
						case "link":
							return n.b.Link;
						case "markdown":
							return n.b.Markdown;
						case "richtext":
							return n.b.RichText;
						default:
							return "self"
					}
				},
				c = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case n.b.Link:
						case n.b.Markdown:
							return e.body;
						case n.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(r.g)(e) || null,
					flair_text_color: e.textColor || null,
					flair_background_color: e.backgroundColor || null
				} : {
					flair_id: null,
					flair_text: null,
					flair_text_color: null,
					flair_background_color: null
				},
				b = e => ({
					id: e.draftId || void 0,
					...o(e),
					kind: a(e),
					title: c(e),
					body: u(e),
					spoiler: e.isSpoiler,
					nsfw: e.isNSFW,
					original_content: e.isOC,
					...l(e.flair),
					send_replies: e.sendReplies,
					is_public_link: e.isPublicLink
				})
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
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(r || (r = {}));
			const n = e => {
				switch (e) {
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
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(n || (n = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, s) {
			"use strict";

			function r(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "a", (function() {
				return B
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n, i = s("./node_modules/lodash/isEqual.js"),
				o = s.n(i),
				a = s("./node_modules/lodash/merge.js"),
				d = s.n(a),
				c = s("./node_modules/lodash/pick.js"),
				u = s.n(c),
				l = s("./src/lib/constants/index.ts"),
				b = s("./src/reddit/actions/comment/constants.ts"),
				p = s("./src/reddit/actions/contentGate.ts"),
				m = s("./src/reddit/actions/frontpage/constants.ts"),
				f = s("./src/reddit/actions/header.ts"),
				h = s("./src/reddit/actions/modQueue/constants.ts"),
				O = s("./src/reddit/actions/pages/constants.ts"),
				g = s("./src/reddit/actions/pages/modListing/constants.ts"),
				_ = s("./src/reddit/actions/pages/multireddit/constants.ts"),
				y = s("./src/reddit/actions/pages/postCreation.ts"),
				j = s("./src/reddit/actions/pages/postDraft.ts"),
				E = s("./src/reddit/actions/pages/profileComments/constants.ts"),
				P = s("./src/reddit/actions/pages/profileOverview/constants.ts"),
				v = s("./src/reddit/actions/pages/profilePosts.ts"),
				T = s("./src/reddit/actions/pages/search.ts"),
				C = s("./src/reddit/actions/pages/subreddit.ts"),
				D = s("./src/reddit/actions/pages/topic.ts"),
				S = s("./src/reddit/actions/postCreation/constants.ts"),
				x = s("./src/reddit/actions/postDraft.ts"),
				A = s("./src/reddit/actions/preferences.ts"),
				I = s("./src/reddit/actions/redditEmbed.ts"),
				w = s("./src/reddit/actions/search.ts"),
				R = s("./src/reddit/actions/structuredStyles/constants.ts"),
				N = s("./src/reddit/actions/subreddit.ts"),
				k = s("./src/reddit/actions/users.ts"),
				M = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/constants/preferences.ts"),
				F = s("./src/reddit/constants/theme.ts"),
				U = s("./src/reddit/models/PostCreationForm/index.ts"),
				V = s("./src/reddit/models/PostDraft/index.ts"),
				G = s("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(r || (r = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(n || (n = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...L.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: G.a,
					commentMode: U.h.RICH_TEXT,
					layout: M.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: U.h.RICH_TEXT,
					geopopular: void 0,
					globalTheme: F.a,
					hamburgerTray: void 0,
					hasSeenCustomizeFlyout: !0,
					hideNSFW: !0,
					ignoreSuggestedSort: !1,
					labelNSFW: !0,
					lang: "en",
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
					sort: l.R.Hot,
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
				H = {
					rpanDuDismissalTime: void 0,
					isContributorRequestTimestamp: 0,
					stylesEnabled: !0,
					layout: void 0,
					sort: void 0
				},
				$ = (e, t) => {
					if (!t) return e;
					const s = u()({
							...t.account,
							...t
						}, q),
						r = t.subreddit,
						n = {
							...e.subreddit
						};
					Object.keys(r || {}).forEach(e => {
						n[e] = {
							...H,
							...r && r[e]
						}
					});
					const i = {
						...e,
						...s,
						subreddit: n
					};
					if (i.useMarkdown !== e.useMarkdown) {
						const e = i.useMarkdown ? U.h.MARKDOWN : U.h.RICH_TEXT;
						i.editorMode = e, i.commentMode = e
					}
					return o()(i, e) ? e : i
				},
				W = (e, t, s) => $(e, {
					subreddit: {
						[t]: {
							...H,
							...e.subreddit[t],
							...s
						}
					}
				});
			t.d = (e = B, t) => {
				switch (t.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							commentMode: s
						}
					}
					case S.s:
					case S.M: {
						const {
							editorMode: s
						} = t.payload;
						return {
							...e,
							editorMode: s
						}
					}
					case f.d:
						return {
							...e, subscriptionsPinned: !0
						};
					case f.e:
						return {
							...e, subscriptionsPinned: !1
						};
					case x.g: {
						const {
							kind: s
						} = t.payload;
						return {
							...e,
							editorMode: s === V.b.Markdown ? U.h.MARKDOWN : U.h.RICH_TEXT
						}
					}
					case A.h: {
						const {
							layout: s
						} = t.payload;
						return e.layout === s ? e : {
							...e,
							layout: s
						}
					}
					case A.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case A.p: {
						const {
							layout: s,
							subredditId: r
						} = t.payload;
						return W(e, r, {
							layout: s
						})
					}
					case A.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case A.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case p.g:
						return {
							...e, over18: !0
						};
					case A.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case A.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case A.r:
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
					case R.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case R.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case A.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case A.c:
						return void 0 !== t.payload ? {
							...e,
							collapsedTraySections: d()({}, e.collapsedTraySections, t.payload)
						} : e;
					case p.a:
					case p.b:
					case p.h:
					case p.i:
					case p.f:
					case p.j:
					case g.e:
					case g.h:
					case O.a:
					case O.e:
					case O.b:
					case O.f:
					case O.d:
					case O.h:
					case m.b:
					case C.SUBREDDIT_LOADED:
					case _.b:
					case _.a:
					case E.e:
					case P.e:
					case P.b:
					case v.PROFILE_POSTS_LOADED:
					case m.f:
					case N.i:
					case w.c:
					case I.b:
					case y.PAGE_LOADED:
					case j.PAGE_LOADED:
					case A.j:
					case T.SEARCH_RESULTS_RECEIVED:
					case A.a:
					case k.c:
					case D.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? $(e, t.payload.preferences) : e;
					case A.q: {
						const {
							subredditId: s,
							prefs: r
						} = t.payload;
						return W(e, s, r)
					}
					case E.d:
					case P.d:
					case P.a:
					case v.PROFILE_POSTS_FAILED: {
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
						return t.payload && t.payload.response && t.payload.response.preferences ? $(e, t.payload.preferences) : e;
					case A.n: {
						const s = t.payload,
							{
								showActiveCommunities: r
							} = s.additional;
						return e.showActiveCommunities !== r ? {
							...e,
							showActiveCommunities: r
						} : e
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
					importAsync: () => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("vendors~PostCreation"), s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), s.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("PostCreation")]).then(s.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: n.p.POST_CREATION,
					exact: !0,
					meta: {
						name: n.Db.POST_CREATION
					},
					path: a,
					prefetches: [n.p.COMMENTS_PAGE]
				};
			t.a = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.a79a4867b309e65df2d0.js.map