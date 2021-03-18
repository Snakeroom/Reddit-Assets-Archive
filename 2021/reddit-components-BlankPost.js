// https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.c2e5c0590bf53059e3eb.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-BlankPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-dom/index.js"),
				o = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return a(e[n], t[n])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!o.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							s = t[1],
							i = void 0 === s ? n : s,
							a = t[2],
							d = void 0 === a ? n : a,
							c = t[3];
						return n + " " + i + " " + d + " " + (void 0 === c ? i : c)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], i = d.keys(); t = i.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || a(s, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var r = d.get(e);
				if (r)
					for (var n, s = r.values(); n = s.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function l(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = u(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function b(e) {
				return c(e) || new IntersectionObserver(l, e)
			}
			var p = r("./node_modules/invariant/browser.js"),
				m = r.n(p),
				f = {},
				O = Object.create(null, {
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

			function _(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function h(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var E = ["root", "rootMargin", "threshold"],
				T = ["root", "rootMargin", "threshold", "disabled"],
				g = Object.prototype,
				P = g.hasOwnProperty,
				y = g.toString,
				j = function(e) {
					return E.reduce((function(t, r) {
						if (P.call(e, r)) {
							var n = "root" === r && "[object String]" === y.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				C = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), s = 0; s < r; s++) n[s] = arguments[s];
						return h(_(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), h(_(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(i.findDOMNode)(e)
						})), h(_(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(j(t.props)), t.target = t.targetNode, e = _(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (O.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), h(_(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(_(t), e)
						})), h(_(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var o = n.prototype;
					return o.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = T.some((function(r) {
							return a(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, o.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, o.componentDidMount = function() {
						this.observe()
					}, o.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, o.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(s.a.Component);
			h(C, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function i() {}
			i.resetWarningCache = s, e.exports = function() {
				function e(e, t, r, s, i, o) {
					if (o !== n) {
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
					resetWarningCache: s
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
		"./src/lib/addAllowQuarantinedParam/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/addQueryParams/index.ts");
			t.a = e => Object(n.a)(e, {
				allow_quarantined: !0
			})
		},
		"./src/lib/onFocusAndVisibilityChange/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/brcast/dist/brcast.es.js");
			const s = () => "undefined" != typeof document,
				i = () => s() && "visible" === document.visibilityState,
				o = () => ({
					documentInFocus: i()
				}),
				{
					subscribe: a,
					unsubscribe: d,
					setState: c
				} = Object(n.a)(o()),
				u = {
					hidden: "visibilitychange",
					webkitHidden: "webkitvisibilitychange",
					mozHidden: "mozvisibilitychange",
					msHidden: "msvisibilitychange"
				},
				l = () => c(o());
			(() => {
				const e = (() => {
					if (!s()) return;
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
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = "APP_BADGES__PENDING",
				s = "APP_BADGES__LOADED",
				i = "APP_BADGES__UPDATED",
				o = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/graphql/operations/BadgeIndicators.json"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				d = e => Object(a.a)(e, {
					...o
				}),
				c = r("./src/reddit/models/Badge/index.ts");
			const u = Object(n.a)(s.c),
				l = Object(n.a)(s.b),
				b = Object(n.a)(s.d),
				p = Object(n.a)(s.a),
				m = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: c.b.Numbered
					}
				}),
				f = (e, t, r) => ({
					[c.c.DirectMessages]: {
						count: e,
						style: c.b.Numbered
					},
					[c.c.ChatRooms]: {
						count: t,
						style: c.b.Numbered
					},
					[c.c.ChatRoomMentions]: {
						count: r,
						style: c.b.Numbered
					}
				}),
				O = () => async (e, t, {
					gqlContext: r
				}) => {
					e(u());
					const n = await async function(e) {
						const t = await d(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(r);
					n ? (e(l(n)), e(Object(i.d)())) : e(p())
				};
			const _ = () => async e => {
				const t = m({
					key: c.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "d", (function() {
				return T
			}));
			var n, s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/chat/endpoints/sendbird/index.ts"),
				a = r("./src/reddit/actions/tabBadging.ts"),
				d = r("./src/reddit/selectors/chat.ts"),
				c = r("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(n || (n = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: p
			} = n, m = Object(i.a)(u), f = Object(i.a)(l), O = Object(i.a)(b), _ = Object(i.a)(p);
			let h;
			const E = 5 * s.db,
				T = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t();
					if (!Object(c.K)(n) || !Object(d.d)(n)) return clearTimeout(h);
					h || e((() => async (e, t, {
						apiContext: r
					}) => {
						const n = t(),
							{
								session: s
							} = n.user;
						if (s && Object(c.K)(n) && Object(d.d)(n)) {
							e(O());
							const t = await Object(o.f)(r(), s);
							t && t.ok ? (e(_({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(a.d)())) : e(f({
								error: t.error
							}))
						}
					})()), h = setTimeout(() => {
						e(T())
					}, E)
				}
		},
		"./src/reddit/actions/contentControls/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = "CONTENT_CONTROLS_FAILED",
				s = "CONTENT_CONTROLS_LOADED",
				i = "CONTENT_CONTROLS_PENDING",
				o = "CONTENT_CONTROLS_UPDATED"
		},
		"./src/reddit/actions/contentControls/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			})), r.d(t, "b", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/camelCase.js"),
				i = r.n(s),
				o = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/graphql/operations/FetchContentControls.json"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/reddit/models/AutomatedReporting/index.ts");
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
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var m = r("./node_modules/lodash/isEmpty.js"),
				f = r.n(m),
				O = r("./src/graphql/operations/UpdateAutomatedReportingSettings.json"),
				_ = r("./src/graphql/operations/UpdatePostRequirements.json"),
				h = r("./src/reddit/endpoints/subreddit/about.ts"),
				E = r("./src/reddit/models/Toast/index.ts"),
				T = r("./src/reddit/selectors/contentControls.ts"),
				g = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/actions/contentControls/constants.ts");
			const y = Object(a.a)(P.b),
				j = Object(a.a)(P.c),
				C = Object(a.a)(P.a),
				I = e => async (t, r, {
					gqlContext: n
				}) => {
					const s = {
						subredditName: e.toLowerCase()
					};
					if (Object(T.a)(r(), s)) return;
					t(j(s));
					let i = Object(g.F)(r(), e);
					if (!i) {
						const r = await Object(h.a)(n(), e, !1);
						if (r.ok) {
							i = r.body.data.subreddit.id
						}
						if (!i) {
							const e = r.error || {
								type: o.E.NOT_FOUND_ERROR
							};
							return void t(C({
								...s,
								error: e
							}))
						}
					}
					let a = null;
					const c = await ((e, t) => Object(l.a)(e, {
						...u,
						variables: t
					}).then(e => {
						var t, r;
						if (e.ok) {
							const n = null === (r = null === (t = e.body) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.subreddit;
							return {
								...e,
								body: {
									data: {
										subreddit: {
											automatedReporting: {
												levelAbuse: p(null == n ? void 0 : n.automatedReportingLevelAbuse),
												levelHate: p(null == n ? void 0 : n.automatedReportingLevelHate),
												wordlist: [],
												wordlistEnabled: !1
											},
											postRequirements: null == n ? void 0 : n.postRequirements
										}
									}
								}
							}
						}
						return e
					}))(n(), {
						subredditId: i
					});
					if (c.ok) {
						const e = c.body;
						a = e.data.subreddit && e.data.subreddit
					}
					if (a) t(y({
						...s,
						...a
					}));
					else {
						const r = c.error || {
							type: o.E.UNKNOWN_ERROR
						};
						t(C({
							...s,
							error: r
						})), d.c.withScope(t => {
							t.setExtra("info", {
								subredditName: e,
								responseBody: c.body,
								responseOk: c.ok
							}), d.c.captureMessage("Missing post requirements data!")
						})
					}
				}, S = Object(a.a)(P.d), A = (e, t) => async (r, s, {
					gqlContext: i
				}) => {
					const o = e.toLowerCase(),
						a = Object(g.F)(s(), e);
					if (!a) return {
						success: !1
					};
					const d = await ((e, t, r) => {
						const n = [Promise.resolve(null), Promise.resolve(null)];
						if (r.postRequirements && !f()(r.postRequirements)) {
							const s = {
								subredditId: t,
								...r.postRequirements
							};
							n[0] = Object(l.a)(e, {
								..._,
								variables: {
									input: s
								}
							})
						}
						if (r.automatedReporting && !f()(r.automatedReporting)) {
							const s = {
								subredditId: t
							};
							r.automatedReporting.levelAbuse && (s.automatedReportingLevelAbuse = r.automatedReporting.levelAbuse), r.automatedReporting.levelHate && (s.automatedReportingLevelHate = r.automatedReporting.levelHate), n[1] = Object(l.a)(e, {
								...O,
								variables: {
									input: s
								}
							})
						}
						return Promise.all(n).then(([e, t]) => {
							let r = !0,
								n = [];
							if (e) {
								const t = e.body,
									s = t.data.updatePostRequirements.fieldErrors;
								r = r && t.data.updatePostRequirements.ok, s && (n = n.concat(s))
							}
							if (t) {
								const e = t.body,
									s = e.data.updateSubredditSettings.fieldErrors;
								r = r && e.data.updateSubredditSettings.ok, s && (n = n.concat(s))
							}
							return {
								ok: r,
								fieldErrors: n.length ? n : null
							}
						})
					})(i(), a, t);
					if (d.ok) return r(S({
						subredditName: o,
						partialUpdates: t
					})), {
						success: !0
					}; {
						const e = D(d.fieldErrors);
						return r(Object(c.f)({
							duration: c.a,
							id: "CONTENT_CONTROLS_SAVE_ERROR",
							kind: E.b.Error,
							text: e && e.length ? e[0].message : n.fbt._("Something went wrong", null, {
								hk: "3i6szH"
							})
						})), {
							success: !1,
							errors: e || void 0
						}
					}
				}, D = e => e && e.map(e => ({
					...e,
					field: i()(e.field)
				}))
		},
		"./src/reddit/actions/frontpage/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			}));
			const n = "PAGE__FRONTPAGE_PENDING",
				s = "PAGE__FRONTPAGE_LOADED",
				i = "PAGE__FRONTPAGE_FAILED",
				o = "PAGE__FRONTPAGE_RELOADED",
				a = "FRONTPAGE__MORE_POSTS_PENDING",
				d = "FRONTPAGE__MORE_POSTS_LOADED",
				c = "FRONTPAGE__MORE_POSTS_FAILED"
		},
		"./src/reddit/actions/inbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "INBOX__COUNT_UPDATE",
				i = Object(n.a)(s)
		},
		"./src/reddit/actions/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/profile/index.ts"),
				i = (r("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"), r("./src/reddit/models/User/index.ts")),
				o = r("./src/reddit/selectors/user.ts");
			const a = "MOD_PERMS__REQUEST_LOADED",
				d = (Object(n.a)("MOD_PERMS__REQUEST_PENDING"), Object(n.a)(a), Object(n.a)("MOD_PERMS__REQUEST_FAILED"), () => async (e, t) => {
					const r = Object(o.j)(t());
					if (r) {
						const t = Object(i.e)(r);
						await e(Object(s.b)(t))
					}
				})
		},
		"./src/reddit/actions/pages/multireddit/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = "PAGE__MULTIREDDIT_FEED_PENDING",
				s = "PAGE__MULTIREDDIT_FEED_LOADED",
				i = "PAGE__MULTIREDDIT_FEED_FAILED"
		},
		"./src/reddit/actions/pages/postCreation.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return R
			})), r.d(t, "PAGE_LOADED", (function() {
				return x
			})), r.d(t, "PAGE_FAILED", (function() {
				return w
			})), r.d(t, "pagePending", (function() {
				return k
			})), r.d(t, "pageLoaded", (function() {
				return L
			})), r.d(t, "pageFailed", (function() {
				return M
			})), r.d(t, "postCreationPageDataRequested", (function() {
				return G
			})), r.d(t, "postCreationPageRequested", (function() {
				return U
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/filterQueryParams/index.ts"),
				o = r("./src/lib/isFakeSubreddit/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makePostCreationPageKey/index.ts"),
				c = r("./src/reddit/actions/contentControls/index.ts"),
				u = r("./src/reddit/actions/economics/helpers/async.ts"),
				l = r("./src/reddit/actions/externalAccount.ts"),
				b = r("./src/reddit/actions/gold/powerups.ts"),
				p = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/postCreation/general.ts"),
				f = r("./src/reddit/actions/profile/index.ts"),
				O = r("./src/reddit/actions/subreddit.ts"),
				_ = r("./src/reddit/actions/subredditDuplicates.ts"),
				h = r("./src/config.ts"),
				E = r("./src/lib/makeApiRequest/index.ts"),
				T = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				P = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				y = r("./src/reddit/helpers/trackers/postComposer.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/contentControls.ts"),
				I = r("./src/reddit/selectors/postCollection.ts"),
				S = r("./src/reddit/selectors/postCreations.ts"),
				A = r("./src/reddit/selectors/posts.ts"),
				D = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts");
			const R = "POST_CREATION__PAGE_PENDING",
				x = "POST_CREATION__PAGE_LOADED",
				w = "POST_CREATION__PAGE_FAILED",
				k = Object(a.a)(R),
				L = Object(a.a)(x),
				M = Object(a.a)(w),
				F = () => async (e, t) => {
					const r = t(),
						n = Object(S.a)(r);
					n !== Object(S.kb)(r) && e(Object(m.g)({
						submissionType: n
					}))
				}, G = e => async (t, r, n) => {
					const {
						collectionId: i,
						profileName: a,
						subredditName: u
					} = e, p = Object(d.a)(e), m = r(), _ = m.creations.api.page.pending[p], g = m.creations.api.page.fetched[p], y = m.creations.api.page.error[p];
					if (_) return;
					if (g && !y) return void t(F());
					const I = [];
					t(k({
						key: p
					}));
					let S = u;
					!u && a && (S = `u_${a}`), I.push(((e, t) => Object(E.a)(e, {
						method: s.cb.GET,
						endpoint: Object(T.a)(`${h.a.gatewayUrl}/desktopapi/v1/submitpage`),
						data: {
							subreddit: t.subredditName,
							collection_id: t.collectionId
						}
					}))(n.apiContext(), {
						subredditName: S,
						collectionId: i
					})), a && (I.push(t(f.d(a))), I.push(t(f.b(a))));
					const [A] = await Object(P.a)("postCreation", () => Promise.all(I));
					if (A.ok) {
						const e = A.body,
							{
								posts: n = {},
								subredditAboutInfo: s
							} = e;
						if (t(L({
								key: p,
								meta: m.meta,
								...e,
								posts: n
							})), !Object(N.K)(r())) return;
						if (s) {
							const e = Object.keys(s)[0];
							await t(Object(b.f)(e, {
								fullData: !0,
								includeIdentity: !1
							}))
						}
						t(F());
						const i = [];
						i.push(t(l.o()));
						const a = Object(N.j)(r());
						if (a && a.hasUserProfile && i.push(t(f.d(Object(j.e)(a)))), u && !Object(o.a)(u)) {
							i.push(t(O.o(u))), !!Object(C.b)(r(), {
								subredditName: u
							}) || i.push(t(Object(c.a)(u)))
						}
						await Promise.all(i)
					} else t(M({
						error: A.error,
						key: p
					}))
				}, U = e => async (t, r) => {
					const {
						subredditName: o,
						profileName: a
					} = e.params, d = e.queryParams, c = d.collection;
					if (await t(G({
							collectionId: c,
							profileName: a,
							subredditName: o
						})), !Object(N.K)(r())) return void Object(g.a)(t, r());
					let l;
					if (o ? (l = Object(v.A)(r(), {
							subredditName: o
						}), await t(Object(u.a)({
							subredditName: o
						}))) : a && (l = Object(D.j)(r(), {
							profileName: a
						})), d.source_id) await t(((e, t) => async (r, n) => {
						const {
							subredditName: s,
							profileName: i
						} = e, o = [];
						let a;
						s ? a = Object(v.F)(n(), s) : i && (a = Object(N.fb)(n(), {
							userName: i
						})), a && o.push(r(Object(_.b)(a, t))), o.push(r(Object(p.K)(t))), await Promise.all(o);
						const d = Object(A.f)(n(), {
							postId: t
						});
						r(Object(m.k)({
							postId: t,
							postTitle: d ? d.title : ""
						}))
					})(e.params, d.source_id));
					else if (c) {
						const s = Object(I.q)(r(), {
							collectionId: c
						});
						l && s && s.subredditId === l.id || t(Object(n.c)(Object(i.a)(e.url, ["collection"])))
					}((e, t) => {
						const r = e.platform.lastPage;
						t && r && r.meta && r.meta.name === s.Db.POST_CREATION && y.x(e)
					})(r(), o)
				}
		},
		"./src/reddit/actions/pages/postDraft.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAGE_PENDING", (function() {
				return p
			})), r.d(t, "PAGE_LOADED", (function() {
				return m
			})), r.d(t, "PAGE_FAILED", (function() {
				return f
			})), r.d(t, "pagePending", (function() {
				return O
			})), r.d(t, "pageLoaded", (function() {
				return _
			})), r.d(t, "pageFailed", (function() {
				return h
			})), r.d(t, "postDraftPageDataRequested", (function() {
				return E
			})), r.d(t, "postDraftRequested", (function() {
				return T
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makePostDraftPageKey/index.ts"),
				i = r("./src/reddit/actions/profile/index.ts"),
				o = r("./src/config.ts"),
				a = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				l = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				b = r("./src/reddit/helpers/timeApiRoute/index.ts");
			const p = "POST_DRAFT__PAGE_PENDING",
				m = "POST_DRAFT__PAGE_LOADED",
				f = "POST_DRAFT__PAGE_FAILED",
				O = Object(n.a)(p),
				_ = Object(n.a)(m),
				h = Object(n.a)(f),
				E = e => async (t, r, n) => {
					const {
						draftId: p,
						profileName: m
					} = e, f = Object(s.a)(e), O = r(), E = O.creations.api.page.pending[f], T = O.creations.api.page.fetched[f], g = O.creations.api.page.error[f];
					if (E || T && !g || !p) return;
					t(i.d(m));
					const P = await Object(b.a)("postDraft", () => ((e, t, r) => Object(d.a)(e, {
						endpoint: Object(c.a)(Object(u.a)(`${o.a.gatewayUrl}/desktopapi/v1/draftpreviewpage/${r}/${t}`)),
						method: a.cb.GET
					}))(n.apiContext(), p, m));
					if (P.ok) {
						const e = P.body;
						e.drafts[p].kind = Object(l.b)(e.drafts[p].kind), t(_({
							...e,
							key: f
						}))
					} else t(h({
						error: P.error,
						key: f
					}))
				}, T = e => async (t, r, n) => {
					await t(E(e.params))
				}
		},
		"./src/reddit/actions/pages/profilePosts.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PROFILE_POSTS_PENDING", (function() {
				return A
			})), r.d(t, "PROFILE_POSTS_LOADED", (function() {
				return D
			})), r.d(t, "PROFILE_POSTS_FAILED", (function() {
				return v
			})), r.d(t, "profilePostsPending", (function() {
				return N
			})), r.d(t, "profilePostsLoaded", (function() {
				return R
			})), r.d(t, "profilePostsFailed", (function() {
				return x
			})), r.d(t, "profilePostsRequested", (function() {
				return w
			})), r.d(t, "MORE_POSTS_PENDING", (function() {
				return k
			})), r.d(t, "MORE_POSTS_LOADED", (function() {
				return L
			})), r.d(t, "MORE_POSTS_FAILED", (function() {
				return M
			})), r.d(t, "morePostsPending", (function() {
				return F
			})), r.d(t, "morePostsLoaded", (function() {
				return G
			})), r.d(t, "morePostsFailed", (function() {
				return U
			})), r.d(t, "morePostsRequested", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/pick.js"),
				s = r.n(n),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeListingKey/index.ts"),
				a = r("./src/reddit/actions/contentGate.ts"),
				d = r("./src/reddit/actions/externalAccount.ts"),
				c = r("./src/reddit/actions/moderatingSubreddits.ts"),
				u = r("./src/reddit/actions/pages/profileShared.ts"),
				l = r("./src/reddit/actions/pinnedPost.ts"),
				b = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/actions/profile/index.ts"),
				m = r("./src/reddit/actions/subreddit.ts"),
				f = r("./src/reddit/constants/errors.ts"),
				O = r("./src/reddit/constants/parameters.ts"),
				_ = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./src/config.ts"),
				E = r("./src/lib/addAllowQuarantinedParam/index.ts"),
				T = r("./src/lib/constants/index.ts"),
				g = r("./src/lib/makeApiRequest/index.ts"),
				P = r("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const y = (e, t, r) => Object(g.a)(e, {
				data: r,
				endpoint: Object(E.a)(Object(P.a)(`${h.a.gatewayUrl}/desktopapi/v1/user/${t}/posts`)),
				method: T.cb.GET
			}).then(e => "pinned" in e.body ? e : "postIds" in e.body ? {
				...e,
				body: {
					...e.body,
					pinned: e.body.postIds.filter(t => e.body.posts[t] && e.body.posts[t].isPinned).reverse()
				}
			} : e);
			var j = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				C = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				I = r("./src/reddit/selectors/listings.ts"),
				S = r("./src/reddit/selectors/profile.ts");
			const A = "PAGE__PROFILE_POSTS_PENDING",
				D = "PAGE__PROFILE_POSTS_LOADED",
				v = "PAGE__PROFILE_POSTS_FAILED",
				N = Object(i.a)(A),
				R = Object(i.a)(D),
				x = Object(i.a)(v),
				w = e => async (t, r, n) => {
					const {
						queryParams: i,
						params: h
					} = e, {
						sort: E,
						t: T
					} = Object(u.b)(i), {
						profileName: g
					} = h, P = Object(o.a)(`u_${g}`, E, i), A = r(), D = A.listings.postOrder.ids[P], v = Object(I.c)(A, {
						listingKey: P
					}), w = Object(I.d)(A, {
						listingKey: P
					});
					if (await t(p.d(g)), w || D && !v) return;
					const k = {
						...s()(e.queryParams, [...O.l, ...O.k, O.h]),
						layout: Object(_.O)(A, {}).toLowerCase(),
						sort: E,
						t: Object(j.a)(E, T)
					};
					t(N({
						key: P
					}));
					const L = await Object(C.a)("profilePosts", () => y(n.apiContext(), g, k));
					if (!L.ok) return t(x({
						account: L.body.data ? L.body.data.account : null,
						error: L.body.reason ? {
							type: L.body.reason
						} : L.error,
						key: P
					})), L.body.reason === f.a.DeletedProfile && t(Object(a.p)({
						profileName: g
					})), void t(b.l(L.status));
					const M = L.body;
					t(R({
						key: P,
						meta: r().meta,
						...M
					}));
					const F = Object(S.m)(r(), g),
						{
							pinned: G
						} = M;
					t(Object(l.h)({
						profileId: F,
						pinned: G
					})), await Promise.all([t(Object(u.c)(g)), t(Object(m.q)()), t(Object(c.b)()), t(d.o(g))])
				}, k = "PROFILE_POSTS__MORE_POSTS_PENDING", L = "PROFILE_POSTS__MORE_POSTS_LOADED", M = "PROFILE_POSTS__MORE_POSTS_FAILED", F = Object(i.a)(k), G = Object(i.a)(L), U = Object(i.a)(M), V = () => async (e, t, {
					apiContext: r
				}) => {
					const n = t(),
						{
							currentPage: i
						} = n.platform;
					if (!i || !i.routeMatch) return;
					const {
						queryParams: a,
						params: d
					} = i.routeMatch.match, {
						sort: c,
						t: l
					} = Object(u.b)(a), {
						profileName: b
					} = d, p = Object(o.a)(`u_${b}`, c, a), m = Object(I.g)(n, {
						listingKey: p
					});
					if (!m) return;
					const f = Object(I.d)(n, {
							listingKey: p
						}),
						h = Object(I.e)(n, {
							listingKey: p,
							token: m.token
						});
					if (f || h) return;
					e(F({
						key: p,
						fetchedToken: m.token
					}));
					const E = {
							after: m.token,
							dist: m.dist,
							sort: c,
							t: l,
							...s()(a, O.l),
							layout: Object(_.O)(n, {}).toLowerCase()
						},
						T = await y(r(), b, E),
						g = n.listings.postOrder.ids[p],
						P = T.body.postIds || [],
						j = {
							...T.body,
							postIds: P.filter(e => !g || !g.includes(e))
						};
					T.ok ? (e(G({
						fetchedToken: m.token,
						key: p,
						meta: n.meta,
						...j
					})), await e(Object(u.c)(b))) : e(U({
						account: T.body.data ? T.body.data.account : null,
						error: T.error,
						fetchedToken: m.token,
						key: p
					}))
				}
		},
		"./src/reddit/actions/pinnedPost.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "i", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/endpoints/post/index.tsx"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/selectors/posts.ts"),
				b = r("./src/reddit/selectors/profile.ts");
			const p = "PINNEDPOST__PINNED_POSTS_LOADED",
				m = Object(i.a)(p),
				f = "PINNEDPOST__PIN_POST_SUCCESS",
				O = "PINNEDPOST__UNPIN_POST_SUCCESS",
				_ = Object(i.a)(f),
				h = Object(i.a)(O),
				E = "PINNEDPOST__PIN_POST_PENDING",
				T = "PINNEDPOST__UNPIN_POST_PENDING",
				g = Object(i.a)(E),
				P = Object(i.a)(T),
				y = "PINNEDPOST__PIN_POST_FAILURE",
				j = "PINNEDPOST__UNPIN_POST_FAILURE",
				C = Object(i.a)(y),
				I = Object(i.a)(j),
				S = e => Object(a.f)({
					buttonAction: N(e, !0),
					buttonText: n.fbt._("UNDO", null, {
						hk: "1O9LWh"
					}),
					kind: u.b.SuccessMod,
					text: n.fbt._("Post pinned to profile!", null, {
						hk: "1hbHLt"
					})
				}),
				A = (e, t) => Object(a.f)({
					buttonAction: N(e, !0),
					buttonText: n.fbt._("UNDO", null, {
						hk: "3YtcK2"
					}),
					kind: u.b.SuccessMod,
					text: t ? n.fbt._("Post unpinned, reload to see changes", null, {
						hk: "5FF1g"
					}) : n.fbt._("Post unpinned.", null, {
						hk: "2BgT0h"
					})
				}),
				D = () => Object(a.f)({
					kind: u.b.Error,
					text: n.fbt._("Could not pin post", null, {
						hk: "3uNHEh"
					})
				}),
				v = () => Object(a.f)({
					kind: u.b.Error,
					text: n.fbt._("Could not unpin post", null, {
						hk: "o8HG0"
					})
				}),
				N = (e, t = !1) => async (r, i, {
					apiContext: p
				}) => {
					const m = i(),
						f = m.posts.models[e];
					if (!f) return;
					const O = !Object(l.q)(m, {
						postId: e
					});
					if (O && f.isRemoved) return r((() => Object(a.f)({
						kind: u.b.Error,
						text: n.fbt._("You can't pin a removed post", null, {
							hk: "3bdn2y"
						})
					}))());
					const E = f.author,
						T = Object(b.m)(m, E),
						[y, j, N, R, x] = O ? [g, _, C, S, D] : [P, h, I, A, v];
					if (O) {
						if (Object(l.L)(m, {
								profileName: E
							}).length >= s.V) return void r(Object(o.i)(d.a.PINNED_POSTS_LIMIT_REACHED))
					}
					const w = Object(l.n)(m, e, E),
						k = !O && w;
					r(y({
						postId: e,
						profileId: T
					})), (await Object(c.t)(p(), e, O, !0)).ok ? (r(j({
						postId: e,
						profileId: T
					})), t || r(R(e, k))) : (r(N({
						postId: e,
						profileId: T
					})), r(x()))
				}
		},
		"./src/reddit/actions/postCreation/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "G", (function() {
				return n
			})), r.d(t, "H", (function() {
				return s
			})), r.d(t, "l", (function() {
				return i
			})), r.d(t, "m", (function() {
				return o
			})), r.d(t, "x", (function() {
				return a
			})), r.d(t, "D", (function() {
				return d
			})), r.d(t, "E", (function() {
				return c
			})), r.d(t, "k", (function() {
				return u
			})), r.d(t, "C", (function() {
				return l
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "M", (function() {
				return p
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "z", (function() {
				return f
			})), r.d(t, "s", (function() {
				return O
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "q", (function() {
				return I
			})), r.d(t, "O", (function() {
				return S
			})), r.d(t, "N", (function() {
				return A
			})), r.d(t, "P", (function() {
				return D
			})), r.d(t, "Q", (function() {
				return v
			})), r.d(t, "R", (function() {
				return N
			})), r.d(t, "S", (function() {
				return R
			})), r.d(t, "T", (function() {
				return x
			})), r.d(t, "U", (function() {
				return w
			})), r.d(t, "V", (function() {
				return k
			})), r.d(t, "r", (function() {
				return L
			})), r.d(t, "A", (function() {
				return M
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "t", (function() {
				return U
			})), r.d(t, "w", (function() {
				return V
			})), r.d(t, "L", (function() {
				return q
			})), r.d(t, "o", (function() {
				return B
			})), r.d(t, "y", (function() {
				return H
			})), r.d(t, "X", (function() {
				return W
			})), r.d(t, "F", (function() {
				return $
			})), r.d(t, "a", (function() {
				return K
			})), r.d(t, "B", (function() {
				return Q
			})), r.d(t, "J", (function() {
				return z
			})), r.d(t, "K", (function() {
				return J
			})), r.d(t, "I", (function() {
				return Y
			})), r.d(t, "W", (function() {
				return X
			}));
			const n = "SUBMIT_VALIDATION_FIELD_HAS_ERROR",
				s = "SUBMIT_VALIDATION_FIELD_IS_VALID",
				i = "POST_CREATION_EDIT_COMPLETE",
				o = "POST_CREATION_EDIT_FAILED",
				a = "POST_CREATION_PENDING_EDIT",
				d = "POST_CREATION_START_EDITING_POST",
				c = "POST_CREATION_STOP_EDITING_POST",
				u = "EDITOR_CONTENT_KEY__NEW_DRAFT",
				l = "STARTED_CONVERTING_EDITOR_CONTENT",
				b = "FINISHED_CONVERTING_EDITOR_CONTENT",
				p = "POST_CREATION__TOGGLE_EDITOR_MODE",
				m = "POST_CREATION__ERRORS_NO_LONGER_VALID",
				f = "POST_TITLE_FETCHED",
				O = "INITIALIZE_EDITOR_MODE",
				_ = "POST_CREATION__CHANGE_FLAIR",
				h = "POST_CREATION__CHANGE_EVENT_SCHEDULE",
				E = "POST_CREATION__CHANGE_LINK_BODY",
				T = "POST_CREATION__CHANGE_MARKDOWN_BODY",
				g = "POST_CREATION__CHANGE_MEDIA_BODY",
				P = "POST_CREATION__CHANGE_RECAPTCHA",
				y = "POST_CREATION__CHANGE_RTE_STATE",
				j = "POST_CREATION__CHANGE_SUBMISSION_TYPE",
				C = "POST_CREATION__CHANGE_TITLE",
				I = "POST_CREATION__GOV_TYPE_CHANGED",
				S = "POST_CREATION__TOGGLE_IS_CHAT_POST",
				A = "POST_CREATION__TOGGLE_IS_CHANGED",
				D = "POST_CREATION__TOGGLE_IS_GOV",
				v = "POST_CREATION__TOGGLE_IS_NSFW",
				N = "POST_CREATION__TOGGLE_IS_OC",
				R = "POST_CREATION__TOGGLE_IS_POLL",
				x = "POST_CREATION__TOGGLE_IS_SPOILER",
				w = "POST_CREATION__TOGGLE_POST_TO_TWITTER",
				k = "POST_CREATION__TOGGLE_SEND_REPLIES",
				L = "POST_CREATION__INITIALIZE_CROSSPOST_MODE",
				M = "POST_CREATION__RESET_FORM",
				F = "POST_CREATION__MEDIA_UPLOAD_PENDING",
				G = "POST_CREATION__MEDIA_UPLOAD_SUCCEEDED",
				U = "POST_CREATION__MEDIA_UPLOAD_FAILED",
				V = "POST_CREATION__PENDING",
				q = "POST_CREATION__SUCCEEDED",
				B = "POST_CREATION__FAILED",
				H = "POST_CREATION__POLL_FAILED",
				W = "POST_CREATION__VALIDATION_FAILED",
				$ = "POST_CREATION__SUBMIT_VALIDATION_FAILED",
				K = "POST_CREATION__CAPTCHA_REQUIRED",
				Q = "POST_CREATION__SET_SUBMIT_MODE",
				z = "POST_CREATION__SUBREDDIT_CHANGE_PENDING",
				J = "POST_CREATION__SUBREDDIT_WILL_CHANGE",
				Y = "POST_CREATION__SUBREDDIT_CHANGE_CANCELED",
				X = "POST_CREATION__UPDATE_SCHEDULED_POST_ADVANCED_SETTINGS"
		},
		"./src/reddit/actions/postCreation/general.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return f
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "s", (function() {
				return A
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "u", (function() {
				return N
			})), r.d(t, "v", (function() {
				return R
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "z", (function() {
				return k
			})), r.d(t, "A", (function() {
				return L
			})), r.d(t, "k", (function() {
				return M
			})), r.d(t, "p", (function() {
				return F
			})), r.d(t, "q", (function() {
				return G
			})), r.d(t, "o", (function() {
				return U
			})), r.d(t, "x", (function() {
				return V
			})), r.d(t, "n", (function() {
				return q
			})), r.d(t, "l", (function() {
				return B
			}));
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/isUrl/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/reddit/endpoints/post/index.tsx"),
				c = r("./src/reddit/models/PostCreationForm/index.ts"),
				u = r("./src/reddit/routes/postCreation/constants.ts"),
				l = r("./src/reddit/selectors/activeModalId.ts"),
				b = r("./src/reddit/selectors/postCollection.ts"),
				p = r("./src/reddit/selectors/postCreations.ts"),
				m = r("./src/reddit/actions/postCreation/constants.ts");
			const f = Object(i.a)(m.n),
				O = Object(i.a)(m.z),
				_ = (Object(i.a)(m.s), e => {
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
				h = Object(i.a)(m.b),
				E = Object(i.a)(m.c),
				T = Object(i.a)(m.d),
				g = Object(i.a)(m.e),
				P = Object(i.a)(m.f),
				y = Object(i.a)(m.g),
				j = Object(i.a)(m.h),
				C = Object(i.a)(m.i),
				I = Object(i.a)(m.j),
				S = Object(i.a)(m.q),
				A = Object(i.a)(m.O),
				D = Object(i.a)(m.N),
				v = (Object(i.a)(m.P), Object(i.a)(m.Q)),
				N = Object(i.a)(m.R),
				R = Object(i.a)(m.S),
				x = Object(i.a)(m.T),
				w = Object(i.a)(m.U),
				k = Object(i.a)(m.V),
				L = Object(i.a)(m.W),
				M = Object(i.a)(m.r),
				F = e => async (t, r, {
					apiContext: n
				}) => {
					t(T(e)), Object(s.a)(e) && t((e => async (t, r, {
						apiContext: n
					}) => {
						const s = await Object(d.f)(n(), e);
						s.ok && s.body && s.body.json && s.body.json.data && t(O(s.body.json.data))
					})(e))
				}, G = Object(i.a)(m.A), U = (e, t) => async (r, s) => {
					r(G()), r(e ? Object(n.b)(u.b) : Object(n.b)(Object(p.ab)(s(), {
						pageLayer: t
					})))
				}, V = e => async t => {
					t(o.i(e))
				}, q = e => async (t, r) => {
					const n = r(),
						s = Object(a.D)(e),
						i = Object(p.F)(n);
					if (s && i) {
						Object(l.a)(n) !== c.c && t(V(c.c))
					} else t(U(!1, e))
				}, B = e => async (t, r) => {
					const n = r();
					Object(b.m)(n, {
						subredditId: e
					}) ? t(o.i(c.a)) : t(o.i(c.b))
				}
		},
		"./src/reddit/actions/postCreation/subredditChange.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return P
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "c", (function() {
				return I
			}));
			var n = r("./node_modules/react-router-redux/es/index.js"),
				s = r("./src/lib/addQueryParams/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/filterQueryParams/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				u = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				l = r("./src/reddit/helpers/name/index.ts"),
				b = r("./src/reddit/models/PostCreationForm/index.ts"),
				p = r("./src/reddit/routes/postCreation/index.ts"),
				m = r("./src/reddit/routes/postCreation/constants.ts"),
				f = r("./src/reddit/selectors/postCreations.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/subreddit.ts"),
				h = r("./src/reddit/actions/postCreation/constants.ts"),
				E = r("./src/reddit/actions/postCreation/general.ts");
			const T = Object(a.a)(h.J),
				g = Object(a.a)(h.K),
				P = Object(a.a)(h.I),
				y = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					let o = n();
					const {
						name: a,
						isProfile: p
					} = e, m = Object(O.e)(o), h = m && !p && Object(l.a)(m.name, a), E = o.creations.api.subreddit.change.pending;
					if (h || E) return;
					const g = Object(u.t)(t);
					if (!a) return void r(j(e, g));
					r(T(e));
					const P = p ? {
						profileName: a
					} : {
						subredditName: a
					};
					if (await r(Object(c.postCreationPageDataRequested)(P)), p || !Object(f.A)(o)) return r(j(e, g));
					const y = e.allowedPostTypes || Object(_.z)(n(), {
						subredditName: a
					});
					if (!y) return void r(j(e, g));
					let C;
					o = n();
					const I = Object(f.kb)(o),
						S = Object(f.A)(o);
					if (I === i.Lb.MEDIA && S) {
						const e = Object(f.U)(o),
							t = Object(b.v)(e),
							r = Object(f.L)(o) && e.items.length > 1,
							n = !t && !r;
						if (r && !y.galleries) C = b.p.GalleryWillBeRemovedGalleryNotAllowed;
						else if (n && !y.images) C = b.p.ImageWillBeRemoved;
						else if (t && !y.videos) {
							const t = o.uploads[e.items[0].uploadKey],
								r = t && t.metadata.videoDuration || 0;
							y.images ? r > i.Z && (C = b.p.VideoWillBeRemovedTooLongForGif) : C = b.p.VideoWillBeRemovedMediaNotAllowed
						}
					}
					r(C ? Object(d.i)(C) : j({
						...e,
						allowedPostTypes: y
					}, g))
				}, j = (e, t, r = !0) => async (i, o) => {
					const {
						name: a,
						isProfile: d
					} = e, c = o().platform.currentPage, u = c.queryParams, l = d ? p.b : p.c;
					let b = "";
					b = a ? l(a) : m.b, b = Object(s.a)(b, {
						...u,
						draft: t || u.draft
					}), (t || c.url.toLowerCase() !== b.toLowerCase()) && (i(g(e)), r && i(Object(E.r)(!0)), i(Object(E.i)()), i(Object(n.c)(b)))
				}, C = e => async (t, r) => {
					const i = r().platform.currentPage,
						o = i.queryParams,
						a = Object(s.a)(i.url, {
							...o,
							collection: e
						});
					t(Object(n.c)(a))
				}, I = () => async (e, t) => {
					const r = t().platform.currentPage,
						s = Object(o.a)(r.url, ["collection"]);
					e(Object(n.c)(s))
				}
		},
		"./src/reddit/actions/postDraft.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return v
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "d", (function() {
				return R
			})), r.d(t, "p", (function() {
				return L
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "l", (function() {
				return F
			})), r.d(t, "i", (function() {
				return G
			})), r.d(t, "m", (function() {
				return U
			})), r.d(t, "k", (function() {
				return V
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "n", (function() {
				return B
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
				return ne
			})), r.d(t, "o", (function() {
				return ae
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/formatApiError/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/postCreation/general.ts"),
				a = r("./src/reddit/actions/postCreation/subredditChange.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				l = r("./src/lib/omitHeaders/index.ts"),
				b = r("./src/reddit/models/StructuredStyles/index.ts");
			var p = r("./src/reddit/constants/headers.ts"),
				m = r("./src/reddit/helpers/name/index.ts"),
				f = r("./src/reddit/models/PostDraft/index.ts"),
				O = r("./src/reddit/helpers/r2/normalizeProfileSubredditFromR2/index.ts"),
				_ = r("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"),
				h = r("./src/reddit/models/Subreddit/index.ts");
			const E = e => {
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
					if (t.subreddit_type === h.e.User) {
						const r = Object(O.a)(t, Object(m.g)(t.display_name_prefixed));
						e.profiles[r.id] = r
					} else {
						const r = Object(_.a)(t);
						e.subreddits[r.id] = r
					}
					return e
				}, t)
			};
			var T = r("./src/reddit/endpoints/post/draft/helpers.ts"),
				g = r("./src/reddit/models/PostCreationForm/index.ts"),
				P = r("./src/reddit/helpers/trackers/postComposer.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/postCreations.ts"),
				I = r("./src/reddit/selectors/postDraft.ts"),
				S = r("./src/reddit/selectors/profile.ts"),
				A = r("./src/reddit/selectors/subreddit.ts"),
				D = r("./src/reddit/selectors/user.ts");
			const v = "POST_DRAFT__LIST_PENDING",
				N = "POST_DRAFT__LIST_LOADED",
				R = "POST_DRAFT__LIST_FAILED",
				x = Object(i.a)(v),
				w = Object(i.a)(N),
				k = Object(i.a)(R),
				L = () => async (e, t, {
					apiContext: r
				}) => {
					const s = t();
					if (!Object(D.j)(s) || Object(I.b)(s)) return;
					e(x());
					const i = await (e => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/drafts.json`,
						method: n.cb.GET
					}))(r());
					i.ok ? e(w(E(i.body))) : e(k(i.error))
				}, M = "POST_DRAFT__SAVE_DRAFT_PENDING", F = "POST_DRAFT__SAVE_DRAFT_SUCCEEDED", G = "POST_DRAFT__SAVE_DRAFT_FAILED", U = "POST_DRAFT__SAVE_DRAFT_VALIDATION_FAILED", V = "POST_DRAFT__SAVE_DRAFT_SUBMIT_VALIDATION_FAILED", q = "POST_DRAFT__SAVE_DRAFT_CAPTCHA_REQUIRED", B = "POST_CREATION__TOGGLE_DRAFT_IS_PUBLIC", H = Object(i.a)(M), W = Object(i.a)(F), $ = Object(i.a)(G), K = Object(i.a)(U), Q = Object(i.a)(V), z = Object(i.a)(q), J = Object(i.a)(B), Y = e => async (t, r, {
					apiContext: i
				}) => {
					const o = r(),
						c = Object(I.g)(o),
						b = Object(C.Z)(o);
					if (c || b) return;
					const m = Object(I.h)(o, e);
					if (!m) return;
					t(H(m)), P.e(o, m);
					const f = await ((e, t, r) => Object(u.a)(Object(l.a)(e, [p.a]), {
						endpoint: `${e.apiUrl}/api/v1/draft`,
						method: r ? n.cb.PUT : n.cb.POST,
						data: Object(T.a)(t)
					}).then(e => e.body.fields && Object(g.u)(e.body.fields[0]) ? {
						...e,
						body: {},
						error: {
							type: n.E.SUBMIT_VALIDATION_ERROR,
							fields: [{
								field: e.body.fields[0],
								msg: e.body.explanation
							}]
						}
					} : e))(i(), m, e);
					if (f.ok) {
						const {
							id: r,
							draftsCount: n
						} = Object(T.c)(f.body);
						t(W({
							draftId: r,
							draftsCount: n
						})), e || t(Object(a.a)(m.destSubreddit, r, !1))
					} else {
						const e = f.error;
						e.type === n.E.BAD_CAPTCHA_ERROR ? t(z()) : e.type === n.E.VALIDATION_ERROR ? t(K(e)) : e.type === n.E.SUBMIT_VALIDATION_ERROR ? t(Q(e)) : t($(e)), t(Object(d.f)({
							duration: d.a,
							kind: y.b.Error,
							text: Object(s.a)(e)
						}))
					}
				}, X = "POST_DRAFT__LOAD_DRAFT", Z = Object(i.a)(X), ee = e => async (t, r, {
					apiContext: n
				}) => {
					t(Z(e));
					let s = g.e;
					const i = r();
					if (e.subredditId) {
						const t = Object(A.T)(i, {
								subredditId: e.subredditId
							}),
							r = Object(S.p)(i, {
								profileId: e.subredditId
							}),
							n = Object(D.j)(i);
						t ? s = {
							isProfile: !1,
							name: t.name
						} : r && n && (s = {
							isProfile: !0,
							name: Object(j.e)(n)
						})
					}
					await t(Object(a.a)(s, e.id, !1));
					const o = Object(I.h)(r(), e.id);
					o && P.h(r(), o)
				}, te = "POST_DELETE_DRAFT_SUCCEEDED", re = "POST_DELETE_DRAFT_FAILED", ne = "POST_DELETE_DRAFT_PENDING", se = Object(i.a)(te), ie = Object(i.a)(re), oe = Object(i.a)(ne), ae = (e, t) => async (r, i, {
					apiContext: a
				}) => {
					const p = i();
					if (Object(I.a)(p, e)) return;
					const m = Object(I.d)(p, {
						draftId: e
					});
					m && P.f(p, m), r(oe({
						draftId: e
					}));
					const f = await (async (e, t) => Object(u.a)(Object(l.a)(e, [b.g]), {
						endpoint: `${e.apiUrl}/api/v1/draft?draft_id=${t}`,
						method: n.cb.DELETE
					}))(a(), e);
					if (f.ok) {
						const {
							draftsCount: n
						} = Object(T.c)(f.body);
						r(se({
							draftId: e,
							draftsCount: n
						}));
						const s = Object(c.t)(t);
						e === s && r(Object(o.o)(!0, t))
					} else {
						const t = f.error;
						r(ie({
							draftId: e,
							apiError: t
						})), r(Object(d.f)({
							duration: d.a,
							kind: y.b.Error,
							text: Object(s.a)(t)
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
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/tabBadging.ts"),
				o = r("./src/reddit/endpoints/me/index.ts"),
				a = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				d = r("./src/reddit/helpers/trackers/screenview.ts");
			const c = "REDDIT_EMBED_LOADED",
				u = "REDDIT_EMBED_FAILED",
				l = Object(s.a)("REDDIT_EMBED_PENDING"),
				b = Object(s.a)(c),
				p = Object(s.a)(u),
				m = (e, t) => async (e, r, {
					apiContext: n
				}) => {
					const s = r();
					e(l());
					const d = await Object(o.a)(n());
					d.ok && d.body ? !t || d.body.account ? (e(b(d.body)), e(Object(i.d)()), f(s)) : Object(a.a)(e, s) : e(p(d.error))
				}, f = e => {
					e.platform.currentPage && e.platform.currentPage.routeMatch && e.platform.currentPage.routeMatch.route && e.platform.currentPage.routeMatch.route.meta && e.platform.currentPage.routeMatch.route.meta.name && e.platform.currentPage.routeMatch.route.meta.name === n.Db.INBOX_PAGES && Object(d.g)(e)
				}
		},
		"./src/reddit/actions/subredditDuplicates.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/config.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/reddit/models/Post/index.ts");
			var d = r("./src/reddit/models/Duplicates/index.ts"),
				c = r("./src/reddit/models/Subreddit/index.ts"),
				u = r("./src/reddit/selectors/profile.ts"),
				l = r("./src/reddit/selectors/subreddit.ts");
			const b = "SUBREDDIT_DUPLICATES_IN_SUBREDDIT_LOADED",
				p = (Object(n.a)("SUBREDDIT_DUPLICATES_IN_SUBREDDIT_PENDING"), Object(n.a)(b)),
				m = (e, t) => async (r, n, {
					apiContext: b
				}) => {
					const m = Object(l.T)(n(), {
						subredditId: e
					}) || Object(u.p)(n(), {
						profileId: e
					});
					if (!m) return;
					const f = {
							crossposts_only: !0,
							sort: "new",
							sr: Object(c.g)(m) ? s.Wb + m.name : m.name
						},
						O = await ((e, t, r) => Object(o.a)(e, {
							data: r,
							endpoint: `${i.a.gatewayUrl}/desktopapi/v1/duplicates/${Object(a.s)(t)}`,
							method: s.cb.GET
						}))(b(), t, f);
					if (O.ok) {
						const n = O.body;
						r(p({
							distinguishKey: Object(d.a)(t, f),
							postIds: n.postIds,
							posts: n.posts,
							profiles: n.profiles,
							subreddits: n.subreddits,
							subredditId: e
						}))
					}
				}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "f", (function() {
				return P
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/chat/unreadCount.ts"),
				o = r("./src/reddit/actions/inbox.ts"),
				a = r("./src/reddit/helpers/tabBadging/index.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/selectors/appBadges.ts"),
				u = r("./src/reddit/selectors/chat.ts"),
				l = r("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				b = r("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				m = r("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(s.a)(f),
				_ = e => {},
				h = Object(n.c)({
					basicChannelCount: c.f,
					subredditChannelCount: c.e,
					subredditMentionCount: c.d
				}),
				E = e => {
					const t = Object(l.a)(e);
					return {
						inboxCount: t ? Object(c.i)(e) : Object(p.F)(e) || 0,
						basicChannelCount: t ? Object(c.f)(e) : Object(u.a)(e) || 0
					}
				},
				T = () => async (e, t) => {
					const r = t(),
						n = Object(l.a)(r),
						s = Object(p.J)(r) || Object(p.K)(r),
						i = Object(b.d)(r);
					let o = 0;
					s && (o = n ? i ? Object(c.j)(r) : Object(c.k)(r) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: r
						} = E(e);
						return t + r
					})(r), _(o), e(O({
						hasUnreadMessages: !!o
					})))
				}, g = () => async (e, t) => {
					{
						e(T());
						const r = E(t());
						Object(a.c)(r)
					}
				}, P = e => async (t, r) => {
					const n = r();
					if (Object(l.a)(n)) {
						const r = Object(c.f)(n),
							s = Object(c.i)(n),
							{
								basicChannelCount: i,
								inboxCount: o
							} = e;
						if (r !== i) {
							const e = Object(m.e)({
								count: i,
								key: d.c.ChatTab
							});
							t(Object(m.a)(e))
						}
						if (o && o !== s) {
							const e = Object(m.e)({
								count: o,
								key: d.c.MessageTab
							});
							t(Object(m.a)(e))
						}(r !== i || o && o !== s) && t(T())
					} else {
						const r = Object(u.a)(n),
							s = Object(u.b)(n),
							a = Object(p.F)(n),
							{
								basicChannelCount: d,
								inboxCount: c
							} = e;
						r !== d && t(Object(i.b)({
							...s,
							basicChannelCount: d
						})), c && c !== a && t(Object(o.b)({
							inboxCount: c
						})), (r !== d || c && c !== a) && t(T())
					}
				}
		},
		"./src/reddit/components/AdViewability/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lodash/isEqual.js"),
				s = r.n(n),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				c = r("./src/lib/ads/index.ts"),
				u = r("./src/lib/ads/store.ts"),
				l = r("./src/lib/onFocusAndVisibilityChange/index.ts"),
				b = r("./src/reddit/connectors/PostViewable/index.ts"),
				p = r("./src/reddit/constants/adEvents.ts"),
				m = r("./src/reddit/selectors/media.ts"),
				f = r("./src/reddit/selectors/video.ts");
			const O = [{
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
				_ = [{
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
				h = e => e.map(({
					event: e,
					cumulative: t = !1,
					cumulativeElapsedTime: r,
					remainingTime: n,
					threshold: s = null,
					viewabilityMinimum: i,
					checkAudible: o = !1,
					timeViewingInterrupted: a
				}) => ({
					event: e,
					cumulative: t,
					checkAudible: o,
					timer: null,
					fired: !1,
					threshold: s,
					remainingTime: n,
					cumulativeElapsedTime: 0,
					viewabilityMinimum: i,
					timeViewingInitialized: 0,
					timeViewingInterrupted: a
				})),
				E = () => h(O),
				T = () => h(_),
				g = [c.c, c.e, c.l, c.j, c.a, c.b],
				P = [c.c, c.l, c.j, c.a],
				y = [c.c, c.e, c.l, c.b],
				j = e => "boolean" == typeof e.cumulative && e.cumulative,
				C = Object(a.c)({
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
				I = Object(b.a)(C);
			class S extends i.Component {
				constructor(e) {
					super(e), this.viewabilityStats = E(), this.videoStats = T(), this.pageInFocus = !0, this.inViewStats = [], this.outOfViewStats = [], this.handleViewabilityChange = e => {
						this.props.trackDisplay && this.handleThresholds(e, c.r), this.props.trackVideo && this.handleThresholds(e, c.p, !0), this.checkViewabilityByType(e)
					}, this.checkViewabilityByType = e => {
						s()(this.state.event, e) || this.setState({
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
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
					})), r && (u.d(e.id, c.p, !0), this.videoStats.forEach(e => {
						j(e) && e.cumulative && this.pauseCumulativeStats(e), this.clearTimer(e)
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
					let r, n = !1,
						s = !1;
					return "object" == typeof t ? (r = t.threshold, n = !!t.playing, s = !!t.withSound) : r = t, this.isAdequatelyInView(e, r) && (!n || this.props.isPlaying) && (!s || this.props.isAudible)
				}
				handleThresholds(e, t, r = !1) {
					const {
						post: n
					} = this.props, i = t.filter(t => this.meetsViewabilityRequirements(e, t));
					!s()(i, this.inViewStats) && i.length > 0 && u.b(n.id, i, r);
					const o = t.filter(t => !this.meetsViewabilityRequirements(e, t));
					!s()(o, this.outOfViewStats) && o.length > 0 && u.d(n.id, o, r), this.outOfViewStats = o, this.inViewStats = i
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
						width: n
					} = e.boundingClientRect;
					return !t.threshold && t.event === p.a.VideoGroupMViewable && this.props.videoDuration && (t.threshold = n * r < 3e5 ? c.a : c.j, t.viewabilityMinimum = .5 * this.props.videoDuration), t.event === p.a.GroupMViewable && n * r > 242500 && (t.threshold = c.l), t
				}
				checkViewability(e, t) {
					if (j(t) && t.event === p.a.VideoVendorFullyViewable50 && this.addDurationBasedViewabilityMinimum(t), e && e.target && this.adjustThreshold(e, t), t.threshold && void 0 !== t.viewabilityMinimum) {
						if (this.isAdequatelyInView(e, t.threshold) && !t.fired) {
							if (t.timer) return;
							const e = this.getLengthForTimer(t);
							return e > 0 ? this.initTimer(t, e) : this.fireStat(t), void(t.timeViewingInitialized = Date.now())
						}
						j(t) && t.cumulative && this.pauseCumulativeStats(t), this.clearTimer(t)
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
					let r = g;
					return e && !t ? r = y : !e && t && (r = P), o.a.createElement(d.a, {
						threshold: r,
						onChange: this.handleViewabilityChange
					}, this.props.children)
				}
			}
			t.a = I(S)
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "BlankPost", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/reddit/components/AdViewability/index.tsx"),
				o = r("./src/reddit/connectors/PostViewable/index.ts"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/contexts/Post/index.tsx");
			const c = Object(o.a)(null),
				u = ({
					className: e,
					post: t
				}) => t.isSponsored ? s.a.createElement(i.a, {
					post: t,
					trackDisplay: !0
				}, s.a.createElement("div", {
					className: Object(a.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(d.b)(c(u))
		},
		"./src/reddit/connectors/PostViewable/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/actions/post.ts");
			t.a = (e, t) => Object(n.b)(e, ((e = {}) => ({
				...e,
				onPostViewable: s.J
			}))(t))
		},
		"./src/reddit/constants/errors.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.BannedProfile = "BANNED", e.DeletedProfile = "DELETED", e.NotFoundProfile = "NOT_FOUND", e.ForbiddenProfile = "FORBIDDEN"
				}(n || (n = {})),
				function(e) {
					e.Unknown = "Unknown"
				}(s || (s = {}))
		},
		"./src/reddit/contexts/Post/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
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
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.createContext(null);

			function m(e) {
				const t = Object(i.e)(t => Object(u.D)(t, {
						postId: e
					})),
					{
						currentUser: r
					} = Object(d.a)(),
					n = Object(i.e)(e => t ? Object(l.L)(e, {
						identifier: t.belongsTo
					}) : null),
					s = (null == t ? void 0 : t.belongsTo.type) === o.a.SUBREDDIT ? n : null,
					b = !(!r || (null == t ? void 0 : t.author) !== Object(c.e)(r)),
					p = Object(i.e)(i => ({
						currentUser: r,
						imageGalleryCurrentItem: Object(u.i)(i, {
							postId: e
						}),
						isModerator: !(!s || !i.moderatingSubreddits[s.name]),
						post: t,
						postId: e,
						subreddit: s,
						subredditOrProfile: n,
						userIsOp: b
					}));
				return Object(a.a)(p)
			}

			function f(e) {
				const {
					postId: t,
					children: r
				} = e, n = m(t);
				return s.a.createElement(p.Provider, {
					value: n
				}, r)
			}

			function O(e) {
				const t = e.displayName || e.name;

				function r(r) {
					return s.a.createElement(p.Consumer, null, n => {
						if (!n) throw new Error(`No Post context for <${t}/>!`);
						return s.a.createElement(e, b({}, r, n))
					})
				}
				return r.displayName = `PostContext(${t})`, r
			}

			function _(e) {
				const t = e.displayName || e.name;

				function r(t) {
					const r = m(t.postId);
					return s.a.createElement(p.Provider, {
						value: r
					}, s.a.createElement(e, b({}, t, r)))
				}
				return r.displayName = `PostProvider(${t})`, r
			}
			t.c = p
		},
		"./src/reddit/contexts/User/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/hooks/useMemoShallowEqual.ts"),
				a = r("./src/reddit/reducers/user/prefs/index.ts"),
				d = r("./src/reddit/selectors/user.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = s.a.createContext({
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
					nightmodeEnabled: Object(d.W)(e),
					prefs: e.user.prefs,
					isLoggedIn: Object(d.K)(e)
				}));
				return Object(o.a)(e)
			}

			function b(e) {
				return s.a.createElement(u.Provider, {
					value: l()
				}, e.children)
			}

			function p(e) {
				const t = e.displayName || e.name;

				function r(t) {
					return s.a.createElement(u.Consumer, null, r => s.a.createElement(e, c({}, t, r)))
				}
				return r.displayName = `UserContext(${t})`, r
			}
		},
		"./src/reddit/endpoints/me/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeApiRequest/index.ts");
			const o = e => Object(i.a)(e, {
				endpoint: `${n.a.gatewayUrl}/desktopapi/v1/me`,
				method: s.cb.GET
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/makeApiRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts");
			t.a = async e => Object(s.a)(Object(i.a)(e, [o.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: n.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/endpoints/post/draft/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "a", (function() {
				return b
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				s = r("./src/reddit/models/PostDraft/index.ts");
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
						case s.b.Link:
							return "link";
						case s.b.Markdown:
							return "markdown";
						case s.b.RichText:
							return "richtext";
						default:
							return "self"
					}
				},
				d = e => {
					switch (e) {
						case "link":
							return s.b.Link;
						case "markdown":
							return s.b.Markdown;
						case "richtext":
							return s.b.RichText;
						default:
							return "self"
					}
				},
				c = e => e.title.substring(0, 300),
				u = e => {
					switch (e.kind) {
						case s.b.Link:
						case s.b.Markdown:
							return e.body;
						case s.b.RichText:
							return JSON.stringify({
								document: e.body
							})
					}
				},
				l = e => e ? {
					flair_id: e.templateId || null,
					flair_text: Object(n.g)(e) || null,
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
		"./src/reddit/hooks/useMemoShallowEqual.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r("./node_modules/react-redux/es/index.js");

			function i(e) {
				const t = Object(n.useRef)(e);
				return t.current === e || Object(s.c)(t.current, e) || (t.current = e), t.current
			}
		},
		"./src/reddit/hooks/useUserContext.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r("./src/reddit/contexts/User/index.tsx");

			function i() {
				return Object(n.useContext)(s.a)
			}
		},
		"./src/reddit/models/AutomatedReporting/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Off = "OFF", e.Lenient = "LENIENT", e.Moderate = "MODERATE", e.Strict = "STRICT"
				}(n || (n = {}));
			const s = e => {
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
		"./src/reddit/models/Badge/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s, i, o = r("./src/config.ts");

			function a(e) {
				return "userId" in e
			}

			function d(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function c(e, t, r) {
				const n = r.media[0],
					s = Object.keys(n);
				if (n["0x0"]) return n["0x0"];
				let i = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(r => {
						const s = n[r],
							[o, a] = r.split("x").map(e => parseInt(e));
						(o < i.width && o >= e || a < i.height && a >= t) && (i = {
							height: a,
							width: o,
							url: s
						})
					}), !i.url && s.length) {
					const e = Object.keys(n)[0],
						t = n[e],
						[r, s] = e.split("x").map(e => parseInt(e));
					i = {
						height: s,
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
				const n = c(e, t, r),
					s = c(2 * e, 2 * t, r);
				return {
					url: u(n),
					url2x: u(s)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(n || (n = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(i || (i = {}))
		},
		"./src/reddit/models/Duplicates/index.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				return `${e}-sort[${t.sort}]-crossposts_only[${t.crossposts_only}]`
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/reducers/user/prefs/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return B
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s, i = r("./node_modules/lodash/isEqual.js"),
				o = r.n(i),
				a = r("./node_modules/lodash/merge.js"),
				d = r.n(a),
				c = r("./node_modules/lodash/pick.js"),
				u = r.n(c),
				l = r("./src/lib/constants/index.ts"),
				b = r("./src/reddit/actions/comment/constants.ts"),
				p = r("./src/reddit/actions/contentGate.ts"),
				m = r("./src/reddit/actions/frontpage/constants.ts"),
				f = r("./src/reddit/actions/header.ts"),
				O = r("./src/reddit/actions/modQueue/constants.ts"),
				_ = r("./src/reddit/actions/pages/constants.ts"),
				h = r("./src/reddit/actions/pages/modListing/constants.ts"),
				E = r("./src/reddit/actions/pages/multireddit/constants.ts"),
				T = r("./src/reddit/actions/pages/postCreation.ts"),
				g = r("./src/reddit/actions/pages/postDraft.ts"),
				P = r("./src/reddit/actions/pages/profileComments/constants.ts"),
				y = r("./src/reddit/actions/pages/profileOverview/constants.ts"),
				j = r("./src/reddit/actions/pages/profilePosts.ts"),
				C = r("./src/reddit/actions/pages/search.ts"),
				I = r("./src/reddit/actions/pages/subreddit.ts"),
				S = r("./src/reddit/actions/pages/topic.ts"),
				A = r("./src/reddit/actions/postCreation/constants.ts"),
				D = r("./src/reddit/actions/postDraft.ts"),
				v = r("./src/reddit/actions/preferences.ts"),
				N = r("./src/reddit/actions/redditEmbed.ts"),
				R = r("./src/reddit/actions/search.ts"),
				x = r("./src/reddit/actions/structuredStyles/constants.ts"),
				w = r("./src/reddit/actions/subreddit.ts"),
				k = r("./src/reddit/actions/users.ts"),
				L = r("./src/reddit/constants/postLayout.ts"),
				M = r("./src/reddit/constants/preferences.ts"),
				F = r("./src/reddit/constants/theme.ts"),
				G = r("./src/reddit/models/PostCreationForm/index.ts"),
				U = r("./src/reddit/models/PostDraft/index.ts"),
				V = r("./src/reddit/models/User/index.ts");
			! function(e) {
				e.Whitelisted = "whitelisted", e.Everyone = "everyone"
			}(n || (n = {})),
			function(e) {
				e.Whitelisted = "nobody", e.Everyone = "everyone"
			}(s || (s = {}));
			const q = ["acceptPrivateMessages", "allowClickTracking", "autoplayVideo", "collapseReadMessages", "defaultCommentSort", "emailDigests", "emailUnreadMessages", "emailUnsubscribe", "geopopular", "hideAds", "hideFromRobots", "hideNSFW", "highlightComments", "ignoreSuggestedSort", "inBeta", "labelNSFW", "lang", "markMessagesRead", "nightmode", "over18", "sendWelcomeMessages", "showMessagesInInbox", "showNotifications", "showTwitter", "showUsernameMentionNotifications", "showActiveCommunities", "showPresence", ...M.a, "loginOtpEnabled"],
				B = {
					acceptPrivateMessages: void 0,
					activityRelevantAds: !0,
					allowClickTracking: !1,
					autoplayVideo: !0,
					collapsedTraySections: V.a,
					commentMode: G.h.RICH_TEXT,
					layout: L.d.Card,
					rememberCommunityLayout: !1,
					defaultCommentSort: l.r.CONFIDENCE,
					editorMode: G.h.RICH_TEXT,
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
				W = (e, t) => {
					if (!t) return e;
					const r = u()({
							...t.account,
							...t
						}, q),
						n = t.subreddit,
						s = {
							...e.subreddit
						};
					Object.keys(n || {}).forEach(e => {
						s[e] = {
							...H,
							...n && n[e]
						}
					});
					const i = {
						...e,
						...r,
						subreddit: s
					};
					if (i.useMarkdown !== e.useMarkdown) {
						const e = i.useMarkdown ? G.h.MARKDOWN : G.h.RICH_TEXT;
						i.editorMode = e, i.commentMode = e
					}
					return o()(i, e) ? e : i
				},
				$ = (e, t, r) => W(e, {
					subreddit: {
						[t]: {
							...H,
							...e.subreddit[t],
							...r
						}
					}
				});
			t.d = (e = B, t) => {
				switch (t.type) {
					case b.l:
					case b.s: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							commentMode: r
						}
					}
					case A.s:
					case A.M: {
						const {
							editorMode: r
						} = t.payload;
						return {
							...e,
							editorMode: r
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
					case D.g: {
						const {
							kind: r
						} = t.payload;
						return {
							...e,
							editorMode: r === U.b.Markdown ? G.h.MARKDOWN : G.h.RICH_TEXT
						}
					}
					case v.h: {
						const {
							layout: r
						} = t.payload;
						return e.layout === r ? e : {
							...e,
							layout: r
						}
					}
					case v.o:
						return void 0 !== t.payload ? {
							...e,
							rpanDuDismissalTime: t.payload
						} : e;
					case v.p: {
						const {
							layout: r,
							subredditId: n
						} = t.payload;
						return $(e, n, {
							layout: r
						})
					}
					case v.e:
						return {
							...e, hasSeenCustomizeFlyout: !0
						};
					case v.m:
						return e.profileLayout === t.payload.profileLayout ? e : {
							...e,
							profileLayout: t.payload.profileLayout
						};
					case p.g:
						return {
							...e, over18: !0
						};
					case v.b:
						return void 0 !== t.payload ? {
							...e,
							autoplayVideo: t.payload.autoplayVideo
						} : e;
					case v.i:
						return void 0 !== t.payload ? {
							...e,
							nightmode: t.payload.nightmode
						} : e;
					case v.r:
						if (void 0 !== t.payload) {
							const {
								topContentDismissalTime: r,
								topContentTimesDismissed: n
							} = t.payload;
							return {
								...e,
								topContentDismissalTime: r,
								topContentTimesDismissed: n
							}
						}
						return e;
					case x.d:
						return t.payload.isNightmodeOn ? {
							...e,
							nightmode: !1,
							nightmodeTempUpdated: !0
						} : e;
					case x.e:
						return t.payload.nightmodeTempUpdated ? {
							...e,
							nightmode: !0,
							nightmodeTempUpdated: !1
						} : e;
					case v.f:
						return void 0 !== t.payload ? {
							...e,
							hamburgerTray: t.payload.set
						} : {
							...e,
							hamburgerTray: !e.hamburgerTray
						};
					case v.c:
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
					case h.e:
					case h.h:
					case _.a:
					case _.e:
					case _.b:
					case _.f:
					case _.d:
					case _.h:
					case m.b:
					case I.SUBREDDIT_LOADED:
					case E.b:
					case E.a:
					case P.e:
					case y.e:
					case y.b:
					case j.PROFILE_POSTS_LOADED:
					case m.f:
					case w.i:
					case R.c:
					case N.b:
					case T.PAGE_LOADED:
					case g.PAGE_LOADED:
					case v.j:
					case C.SEARCH_RESULTS_RECEIVED:
					case v.a:
					case k.c:
					case S.TOPIC_DATA_LOADED:
						return t.payload && t.payload.preferences ? W(e, t.payload.preferences) : e;
					case v.q: {
						const {
							subredditId: r,
							prefs: n
						} = t.payload;
						return $(e, r, n)
					}
					case P.d:
					case y.d:
					case y.a:
					case j.PROFILE_POSTS_FAILED: {
						let r = e;
						if (t.payload && t.payload.account) {
							const {
								nightmode: n,
								showPresence: s
							} = t.payload.account;
							e.nightmode !== n && (r = {
								...r,
								nightmode: n
							}), e.showPresence !== s && (r = {
								...r,
								showPresence: s
							})
						}
						return r
					}
					case O.h:
					case O.j:
					case O.i:
					case O.g:
					case O.f:
					case O.n:
					case O.m:
					case O.p:
					case O.q:
					case O.w:
					case O.v:
						return t.payload && t.payload.response && t.payload.response.preferences ? W(e, t.payload.preferences) : e;
					case v.n: {
						const r = t.payload,
							{
								showActiveCommunities: n
							} = r.additional;
						return e.showActiveCommunities !== n ? {
							...e,
							showActiveCommunities: n
						} : e
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
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/loadableAction/index.ts"),
				o = r("./src/reddit/routes/postCreation/constants.ts");
			const a = [o.b, o.c, o.a],
				d = Object(n.a)({
					resolved: {},
					chunkName: () => "PostCreation",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/pages/PostCreation/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([r.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), r.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), r.e("vendors~PostCreation"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), r.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), r.e("ModListing~PostCreation~Reddit~StandalonePostPage~Subreddit"), r.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), r.e("PostCreation")]).then(r.bind(null, "./src/reddit/actions/pages/postCreation.ts")).then(e => e.postCreationPageRequested)),
					component: d,
					chunk: s.p.POST_CREATION,
					exact: !0,
					meta: {
						name: s.Db.POST_CREATION
					},
					path: a,
					prefetches: [s.p.COMMENTS_PAGE]
				};
			t.a = b
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-BlankPost.c2e5c0590bf53059e3eb.js.map