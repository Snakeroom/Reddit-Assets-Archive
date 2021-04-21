// https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.3dad22e47d51ce3c4d77.js
// Retrieved at 4/21/2021, 11:20:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
				i = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function c(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return c(e[r], t[r])
				})) : e !== t
			}
			var a = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							s = t[1],
							o = void 0 === s ? r : s,
							c = t[2],
							a = void 0 === c ? r : c,
							d = t[3];
						return r + " " + o + " " + a + " " + (void 0 === d ? o : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = a.keys(); t = o.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || c(s, t.thresholds))) return t
				}
				return null
			}

			function u(e, t) {
				var n = a.get(e);
				if (n)
					for (var r, s = n.values(); r = s.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function l(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = u(t, e[n]);
					r && r.handleChange(e[n])
				}
			}

			function b(e) {
				return d(e) || new IntersectionObserver(l, e)
			}
			var _ = n("./node_modules/invariant/browser.js"),
				p = n.n(_),
				E = {},
				f = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return E.errorReporter || function(e) {
								return p()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							E.errorReporter = e
						}
					}
				});

			function m(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function S(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var O = ["root", "rootMargin", "threshold"],
				T = ["root", "rootMargin", "threshold", "disabled"],
				I = Object.prototype,
				h = I.hasOwnProperty,
				C = I.toString,
				D = function(e) {
					return O.reduce((function(t, n) {
						if (h.call(e, n)) {
							var r = "root" === n && "[object String]" === C.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				g = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
						return S(m(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), S(m(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), S(m(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = b(D(t.props)), t.target = t.targetNode, e = m(t), a.has(e.observer) || a.set(e.observer, new Set), a.get(e.observer).add(e), e.observer.observe(e.target), !0) : (f.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), S(m(t), "unobserve", (function(e) {
							! function(e, t) {
								if (a.has(e.observer)) {
									var n = a.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), a.delete(e.observer)))
								}
							}(m(t), e)
						})), S(m(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var i = r.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = T.some((function(n) {
							return c(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, i.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(s.a.Component);
			S(g, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, i) {
					if (i !== r) {
						var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw c.name = "Invariant Violation", c
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
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
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
					if (!t(e[n], n, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var n = !0;
				return r(e, (function(e, r, s) {
					return n = !!t(e, r, s)
				})), n
			}
		},
		"./node_modules/lodash/every.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayEvery.js"),
				s = n("./node_modules/lodash/_baseEvery.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/isArray.js"),
				c = n("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, n) {
				var a = i(e) ? r : s;
				return n && c(e, t, n) && (t = void 0), a(e, o(t, 3))
			}
		},
		"./src/graphql/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"00d537d082f7"}')
		},
		"./src/graphql/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"a752c721a60b"}')
		},
		"./src/graphql/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8dfeb66985eb"}')
		},
		"./src/graphql/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"8f930296d14d"}')
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/Media/index.ts"),
				s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: s
				} = e;
				let i = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					i = s || Object(r.D)(e)
				} else i = Object(r.D)(e);
				const c = o.a.parse(i),
					a = c.path || "",
					d = a.length > 7 ? a.substring(0, 7) + "..." : a;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts");
			const o = [s.fc, s.ib, s.x, s.J, s.db, s.Ib],
				i = {
					[s.Ib]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.db]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.J]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.x]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.ib]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.fc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				c = {
					[s.Ib]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.db]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.J]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.x]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.ib]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.fc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.ib]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.fc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function a(e, t = !1, n = !1) {
				const a = Date.now(),
					d = new Date(e).getTime(),
					u = {
						[s.fc]: "",
						[s.ib]: "",
						[s.x]: "",
						[s.J]: "",
						[s.db]: "",
						[s.Ib]: ""
					};
				let l = d - a;
				if (l <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of o) {
					const e = Math.floor(l / r);
					e && (u[r] = (t ? c : i)[r](e).toString()), l -= e * r
				}
				const b = o.map(e => u[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? b : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", b)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				c = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			const r = "MOD_PAGE_EVENT_POSTS_LOADED",
				s = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				c = "START_EVENT_NOW_SUCCESS",
				a = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/googleQASchema/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__LOADED",
				s = "GOOGLE_QA_SCHEMA_ELIGIBILITY_FLAG__FAILED"
		},
		"./src/reddit/actions/imageOCRAltText/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "IMAGE_OCR_ALT_TEXT__LOADED",
				s = "IMAGE_OCR_ALT_TEXT__FAILED"
		},
		"./src/reddit/actions/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return T
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return y
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/telemetry/index.ts"),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/makeListingKey/index.ts"),
				a = n("./src/reddit/actions/discoveryUnit.ts"),
				d = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				u = n("./src/reddit/actions/subreddit/subredditPosts.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/constants/inFeedChaining.ts"),
				_ = n("./src/reddit/constants/page.ts"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				E = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/inFeedChaining.ts"),
				S = n("./src/reddit/selectors/posts.ts"),
				O = n("./src/reddit/selectors/subreddit.ts");
			const T = "FEED_CHAINING__CHAIN_LOADED",
				I = Object(i.a)(T),
				h = e => {
					const t = Date.now() - e,
						n = Object(p.z)();
					return Object.keys(n).filter(e => n[e].when >= t).map(e => n[e])
				},
				C = ({
					listingName: e,
					listingKey: t,
					postId: n
				}) => async (r, i, l) => {
					if (!n) return;
					const f = Object(S.P)(i(), {
						postId: n
					});
					if (!f) return;
					const T = f.name.toLowerCase(),
						C = e === T;
					if (!(e === _.f || e === _.b || C)) return;
					if (C) return void j(f, t, n)(r, i, l);
					0 === h(o.ib).length && Object(p.rb)(!1);
					let D = i();
					if (Object(m.d)(D, {
							listingKey: t,
							postId: n
						}) || Object(m.a)(D).length >= b.a || Object(p.M)() || h(o.x).length >= b.a) return;
					const g = Object(S.t)(D, {
						listingKey: t,
						postId: n
					});
					if (g && g.isSponsored) return;
					await r(Object(a.g)()), D = i();
					const L = Object(m.b)(D, {
						listingName: e
					});
					if (!L) return;
					if (!f || Object(m.e)(D, {
							subredditId: f.id
						}) || (e => {
							return h(o.x).some(t => t.subredditId === e)
						})(f.id)) return;
					const y = {
						subredditIds: [f.id],
						count: b.b
					};
					await r(Object(d.b)(y));
					const A = Object(d.a)(y);
					D = i();
					const R = Object(O.v)(D, {
						key: A
					});
					0 !== R.length ? (await r((e => async (t, n) => {
						const r = o.Wb.DAY.toUpperCase(),
							s = e.filter(e => {
								const t = Object(c.a)(e, o.P.TOP, {
										t: r
									}),
									s = n();
								return 0 === Object(S.w)(s, {
									listingKey: t
								}).length
							});
						await t(Object(u.b)({
							first: 1,
							range: r,
							sort: o.I.TOP,
							subredditNames: s
						}))
					})(R.map(e => e.name))), D = i(), Object(m.f)(D, {
						postId: n
					}).length < b.c ? Object(s.a)(Object(E.c)(L, "other", f)(D)) : (Object(p.a)(n, f.id), Object(s.a)(Object(E.d)(L, f)(D)), r(I({
						listingKey: t,
						postId: n
					})))) : Object(s.a)(Object(E.c)(L, "no_chaining", f)(D))
				}, D = "FEED_CHAINING__CHAIN_TOGGLED", g = (Object(i.a)(D), "FEED_CHAINING__CHAINING_TOGGLED"), L = Object(i.a)(g), y = () => async e => {
					Object(p.rb)(!0), e(L({
						isDismissed: !0
					})), e(Object(l.f)(Object(l.e)(r.fbt._("You'll see this less often.", null, {
						hk: "38LGcQ"
					}), f.b.Undo, r.fbt._("Undo", null, {
						hk: "4zFGDk"
					}), async () => {
						Object(p.rb)(!1), e(L({
							isDismissed: !1
						}))
					})))
				}, j = (e, t, n) => async (e, t, n) => {}
		},
		"./src/reddit/actions/linkedPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			const r = "LINKED_POSTS__POSTS_LOADED",
				s = "LINKED_POSTS__POSTS_FAILED"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "r", (function() {
				return l
			})), n.d(t, "s", (function() {
				return b
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "o", (function() {
				return h
			}));
			const r = "CREATE_COLLECTION_PENDING",
				s = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				c = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				a = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				u = "DELETE_COLLECTION_SUCCESS",
				l = "UPDATE_COLLECTION_PENDING",
				b = "UPDATE_COLLECTION_SUCCESS",
				_ = "UPDATE_COLLECTION_FAILED",
				p = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				E = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				m = "REORDER_COLLECTION_PENDING",
				S = "REORDER_COLLECTION_SUCCESS",
				O = "REORDER_COLLECTION_FAILED",
				T = "UPDATE_COLLECTION_LAYOUT_PENDING",
				I = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				h = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return S
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return L
			})), n.d(t, "e", (function() {
				return R
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "l", (function() {
				return F
			})), n.d(t, "k", (function() {
				return k
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "h", (function() {
				return Y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts");
			const p = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				E = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				f = Object(s.a)(p),
				m = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				O = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				T = Object(s.a)(S),
				I = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				h = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				C = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				D = Object(s.a)(h),
				g = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				L = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				j = Object(s.a)(L),
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				R = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				N = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				U = Object(s.a)(R),
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				v = Object(s.a)(N),
				F = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(_.T)(o, {
							subredditId: e
						}).name;
					n(E());
					const c = await Object(a.k)(s(), i, t);
					if (c.ok) {
						n(f({
							subredditId: e,
							isEnabled: t
						}))
					} else n(m());
					return c.ok
				}, k = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						i = Object(_.T)(o, {
							subredditId: e
						}).name;
					n(O());
					const c = await Object(a.j)(s(), t, u.d.LinkFlair, i);
					if (c.ok) {
						n(T({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(I());
					return c.ok
				}, x = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const d = s(),
						b = Object(_.T)(d, {
							subredditId: t
						}).name;
					n(C());
					const p = await Object(a.f)(o(), e, b, u.d.LinkFlair);
					let E = p.ok && !(p.body && !1 === p.body.success);
					if (E) {
						const r = p.body;
						if (n(D({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[r.id];
							s ? E = await n(Object(i.d)(t, r.id, s)) : o && (E = await n(Object(i.c)(t, r.id)))
						}
					}
					if (E) {
						const e = Object(c.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), l.b.SuccessMod);
						n(Object(c.f)(e))
					} else {
						n(g());
						const s = Object(c.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), x(e, t));
						n(Object(c.f)(s))
					}
					return E
				}, M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = Object(_.T)(i, {
							subredditId: t
						}).name;
					if (n(y()), (await Object(a.b)(o(), e, d)).ok) {
						n(j({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), l.b.SuccessMod);
						n(Object(c.f)(s))
					} else {
						n(A());
						const s = Object(c.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(c.f)(s))
					}
				}, w = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s(),
						d = Object(b.d)(i, {
							subredditId: t
						}).templateIds,
						p = Object(_.T)(i, {
							subredditId: t
						}).name;
					if (n(U({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(o(), p, u.d.LinkFlair, e)).ok) {
						n(P());
						const e = Object(c.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), l.b.SuccessMod);
						n(Object(c.f)(e))
					} else {
						n(v({
							subredditId: t,
							templateIds: d
						}));
						const s = Object(c.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), l.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), w(e, t));
						n(Object(c.f)(s))
					}
				}, Y = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: i
				}) => {
					const c = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && c.unshift(t), r(Object(o.L)({
							[e.id]: {
								flair: c
							}
						})), t) {
						const r = Object(d.g)(t);
						Object(a.h)(i(), e.id, n, r)
					} else Object(a.h)(i(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return I
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return D
			})), n.d(t, "c", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				c = n("./node_modules/lodash/values.js"),
				a = n.n(c),
				d = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/reddit/actions/imageUploads.ts"),
				l = n("./src/reddit/helpers/media/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				_ = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				E = n("./src/reddit/constants/headers.ts");
			var f = n("./src/reddit/helpers/trackers/blade.ts"),
				m = n("./src/reddit/models/Image/index.tsx"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/telemetry/index.ts");
			const T = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: r
			}) => async (s, o, i) => {
				const c = o(),
					a = Object(S.T)(c, {
						subredditId: e
					});
				if (!a) return !1;
				s(Object(u.k)(r));
				const d = await (async (e, t, n, r, s, o) => Object(_.a)(Object(p.a)(e, [E.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: b.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(i.apiContext(), a.name, t, r.file.name, n, await Object(l.g)(r.file));
				let f = !1;
				try {
					const e = await Object(u.g)(o(), d, r, m.a.FlairTemplates);
					e && s(Object(u.j)(e)), f = !0
				} catch (O) {
					if (O instanceof Error) throw O;
					s(Object(u.i)(O))
				}
				return f
			}, I = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", h = Object(d.a)(I), C = (e, t, n) => async (r, o, c) => {
				const {
					apiContext: d
				} = c;
				let l = o();
				const {
					pendingImages: I,
					...C
				} = n;
				let D = C;
				const g = Object(S.T)(l, {
					subredditId: e
				});
				if (!g) return !1;
				const L = l.structuredStyles.flairTemplate.models[t];
				if (L && i()(L, D)) return !0;
				if (I) {
					const n = [];
					if (s()(I, (s, o) => {
							s && n.push(r(T({
								flairId: t,
								imageData: Object(m.m)(s),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					D = ((e, t, n) => {
						const r = {
							...e
						};
						return s()(t, (e, t) => {
							const s = e && n.imageUploads[e.id];
							s && s.kind === m.b.TempUploaded && (r[t] = s.url)
						}), r
					})(D, I, o())
				}
				l = o();
				let y = null,
					j = null;
				const A = [];
				try {
					(y = await Object(u.f)(l, m.a.FlairTemplates)) && (j = Object(u.m)(y)(r, o, c), A.push(...a()(y.imagesByKey)))
				} catch (P) {
					return !1
				}
				const R = await (async (e, t, n, r) => Object(_.a)(Object(p.a)(e, [E.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: b.cb.PUT,
						data: r
					}))(d(), g.name, t, D),
					N = L ? "edit_post_flair_template" : "save_post_flair_template",
					U = Object(f.e)(l, N);
				if (R.ok) {
					let e;
					if (j) try {
						await j, e = ((e, t, n) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === m.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(D, A, o())
					} catch (P) {
						e = null
					} else e = D;
					r(h({
						flairId: t,
						template: e || D
					}))
				} else y && y.websocket.close();
				return Object(O.a)({
					...U,
					actionInfo: {
						...U.actionInfo,
						success: R.ok
					}
				}), R.ok
			}, D = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", g = Object(d.a)(D), L = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					i = Object(S.T)(o, {
						subredditId: e
					});
				if (!i) return !1;
				const c = await (async (e, t, n) => Object(_.a)(Object(p.a)(e, [E.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: b.cb.DELETE
					}))(s(), i.name, t),
					a = Object(f.e)(o, "delete_flair_template");
				return c.ok && n(g({
					flairId: t
				})), Object(O.a)({
					...a,
					actionInfo: {
						...a.actionInfo,
						success: c.ok
					}
				}), c.ok
			}
		},
		"./src/reddit/actions/subreddit/similarSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			}));
			var r, s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/subreddit/constants.ts"),
				i = n("./src/reddit/endpoints/category/subreddits.ts"),
				c = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts");
			! function(e) {
				e.Factorization = "factorization", e.CustomModRelevant = "custom_mod_relevant"
			}(r || (r = {}));
			var l = n("./src/reddit/selectors/subreddit.ts");
			const b = e => {
					let t = e.subredditIds.join(",");
					return e.count && (t += `--[count:'${e.count}']`), e.variant && (t += `--[variant:'${e.variant}']`), t.toLowerCase()
				},
				_ = Object(s.a)(o.p),
				p = Object(s.a)(o.o),
				E = Object(s.a)(o.n),
				f = e => async (t, n, {
					apiContext: r
				}) => {
					const s = n(),
						o = b(e),
						f = Object(l.u)(s, {
							key: o
						}),
						m = Object(l.t)(s, {
							key: o
						});
					if (f || m.length > 0) return;
					t(_({
						key: o
					}));
					const S = await ((e, t) => Object(a.a)(Object(d.a)(e, [u.a]), {
						data: {
							sr_fullnames: t.subredditIds.join(","),
							limit: t.count,
							variant: t.variant
						},
						endpoint: `${e.apiUrl}/api/similar_subreddits.json`,
						method: c.cb.GET
					}))(r(), e);
					if (S.ok) {
						const e = Object(i.b)(S.body);
						t(p({
							key: o,
							...e
						}))
					} else {
						const e = S.error;
						t(E({
							key: o,
							error: e
						}))
					}
				}
		},
		"./src/reddit/actions/subreddit/subredditPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return G
			})), n.d(t, "a", (function() {
				return B
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeLinkedPostsListingKey/index.ts"),
				i = n("./src/lib/makeListingKey/index.ts"),
				c = n("./src/reddit/actions/googleQASchema/constants.ts");
			const a = Object(s.a)(c.b),
				d = Object(s.a)(c.a);
			var u = n("./src/reddit/actions/linkedPosts/constants.ts");
			const l = Object(s.a)(u.b),
				b = Object(s.a)(u.a);
			var _ = n("./src/reddit/actions/otherDiscussions/constants.ts"),
				p = n("./src/lib/makeGqlRequest/index.ts"),
				E = (n("./src/graphql/operations/OtherDiscussions.json"), n("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts")),
				f = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				m = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				S = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				O = n("./src/reddit/models/Post/index.ts");
			var T = ({
				getState: e,
				onFailure: t,
				onSuccess: n,
				postId: r,
				response: s
			}) => {
				if (!s.ok) return void t(s.error);
				const o = s.body,
					{
						post: c
					} = o && o.data,
					a = e(),
					d = Object(i.a)(r, null, {
						isOtherDiscussions: !0
					});
				if (c) {
					if (c.otherDiscussions && c.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = c, {
							postFlair: s,
							postIds: o,
							posts: i,
							profiles: u,
							subreddits: l
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								n = e => {
									const n = Object(f.e)(e);
									t.posts[n.id] = n;
									const {
										crosspostRoot: r
									} = e;
									if (r && r.type === O.a.Post && r.postInfo) {
										const e = Object(f.e)(r.postInfo);
										t.posts[e.id] = e
									}
									return Object(O.k)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(m.a)(e.profile)) : Object(O.l)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(S.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(E.a)(e.subreddit))), n.id
								};
							if (e && e.edges)
								for (const {
										node: r
									} of e.edges) {
									const e = n(r);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						n({
							count: t,
							key: d,
							meta: a.meta,
							postFlair: s,
							postId: r,
							postIds: o,
							posts: i,
							profiles: u,
							subreddits: l
						})
					}
				} else n({
					count: 0,
					key: d,
					meta: a.meta,
					postFlair: {},
					postId: r,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const I = Object(s.a)(_.a),
				h = Object(s.a)(_.b),
				C = Object(s.a)(_.c);
			var D = n("./src/reddit/actions/subreddit/constants.ts"),
				g = n("./src/graphql/operations/PostFeedAndOtherDiscussions.json"),
				L = (n("./src/graphql/operations/SubredditPosts.json"), n("./src/graphql/operations/SubredditsPosts.json"));
			var y = ({
				getState: e,
				onSuccess: t,
				onFailure: n,
				postId: r,
				post: s
			}) => {
				try {
					t({
						altText: s && s.media && (s.media.still && s.media.still.altText || s.media.obfuscated && s.media.obfuscated.altText) || null,
						postId: r
					})
				} catch (o) {
					n(o)
				}
			};
			var j = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					postId: r,
					post: s
				}) => {
					try {
						const n = [],
							i = {},
							c = {};
						if (!s || !s.linked) return;
						const a = e(),
							d = a.posts && a.posts.models,
							u = Object(o.a)(r),
							l = s.linked.posts && s.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e) break;
							if (e.id && !d.hasOwnProperty(e.id)) {
								n.push(e.id);
								const t = Object(f.a)(e);
								i[e.id] = t.post, t.crosspost && (i[t.crosspost.id] = t.crosspost)
							}
							if (Object(O.l)(e)) {
								const {
									subreddit: t
								} = e;
								c[t.id] = Object(S.a)(t)
							}
						}
						t({
							dist: s.linked.posts && s.linked.posts.dist || null,
							key: u,
							meta: a.meta,
							posts: i,
							postIds: n,
							subreddits: c
						})
					} catch (i) {
						n(i)
					}
				},
				A = n("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var R = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var N = ({
					getState: e,
					onSuccess: t,
					onFailure: n,
					options: s,
					subreddit: o
				}) => {
					try {
						if (!o) return;
						const n = o.elements || o.posts,
							c = e(),
							a = ((e, t) => {
								const {
									edges: n
								} = e, r = n.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: r
								}
							})(n, c.posts && c.posts.models);
						if (!a.edges.length) return;
						const d = Object(A.a)(a),
							{
								range: u,
								sort: l,
								subredditName: b
							} = s,
							_ = Object(i.a)(b, r.P[l], {
								t: u
							}),
							p = R(d),
							E = d.map(e => e.id);
						t({
							dist: n.dist,
							key: _,
							meta: c.meta,
							postIds: E,
							posts: p
						})
					} catch (c) {
						n(c)
					}
				},
				U = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				v = n("./src/reddit/actions/imageOCRAltText/constants.ts");
			const F = Object(s.a)(v.b),
				k = Object(s.a)(v.a),
				x = Object(s.a)(D.j),
				M = Object(s.a)(D.i),
				w = Object(s.a)(D.r),
				Y = Object(s.a)(D.q),
				G = e => async (t, n, {
					gqlContext: r
				}) => {
					const s = (await ((e, t) => Object(p.a)(e, {
							...L,
							variables: t
						}))(r(), e)).body,
						{
							subredditNames: o,
							...i
						} = e,
						c = [];
					try {
						for (const e of s.data.subredditsInfoByNames) {
							const t = e.elements.edges[0];
							t && Object(O.l)(t.node) && N({
								getState: n,
								onFailure: e => {
									throw e
								},
								onSuccess: e => c.push(e),
								options: {
									...i,
									subredditName: t.node.subreddit.name
								},
								subreddit: e
							})
						}
						t(w(c))
					} catch (a) {
						t(Y(a))
					}
				}, B = e => async (t, n, {
					gqlContext: s
				}) => {
					var c;
					const {
						includePostImageOCRAltText: u,
						includeListingBelowExperiment: _,
						includeOtherDiscussions: E,
						includePostFeed: f,
						includePostQASchemaEligibilityFlag: m,
						postId: S,
						range: O,
						sort: D,
						subredditName: L
					} = e, A = Object(i.a)(S, null, {
						isOtherDiscussions: !0
					}), R = n(), v = Object(P.w)(R, {
						listingKey: A
					}), w = E && (!v || 0 === v.length), Y = Object(i.a)(L, r.P[D], {
						t: O
					}), G = Object(P.w)(R, {
						listingKey: Y
					}), B = f && (!G || 0 === G.length), q = Object(o.a)(S), K = Object(P.w)(R, {
						listingKey: q
					}), V = _ && (!K || 0 === K.length), W = Object(P.D)(R, {
						postId: S
					}), H = u && !!W && !!W.media && (Object(U.H)(W.media) || Object(U.F)(W.media)) && !W.media.altText;
					if (!(w || B || V || H || m)) return;
					w && t(C({
						key: A
					}));
					const z = await ((e, t) => Object(p.a)(e, {
							...g,
							variables: t
						}))(s(), e),
						Q = z.body;
					m && (z.ok ? Q.data && Q.data.post && t(a({
						postId: S,
						isEligibleForQASchema: null !== (c = Q.data.post.isEligibleForQASchema) && void 0 !== c && c
					})) : t(d())), w && T({
						getState: n,
						onFailure: e => t(I(e)),
						onSuccess: e => t(h(e)),
						postId: S,
						response: z
					}), B && (z.ok ? Q.data && N({
						getState: n,
						onFailure: e => t(M(e)),
						onSuccess: e => t(x(e)),
						options: e,
						subreddit: Q.data.subreddit
					}) : t(M(z.error))), V && z.ok && j({
						getState: n,
						onFailure: e => t(b(e)),
						onSuccess: e => t(l(e)),
						postId: S,
						post: Q.data.post
					}), H && z.ok && y({
						getState: n,
						onFailure: e => t(k(e)),
						onSuccess: e => t(F(e)),
						postId: S,
						post: Q.data.post
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "m", (function() {
				return m
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return T
			}));
			const r = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				c = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				a = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				u = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				l = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				_ = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				p = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				m = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				S = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				O = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				T = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/timeAgo/index.ts"),
				o = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i);

			function a(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return c.a.createElement("span", {
					className: e.className
				}, t ? r.fbt._("Voting closed {timeAgo}", [r.fbt._param("timeAgo", Object(s.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			})), n.d(t, "a", (function() {
				return G
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = n("./src/reddit/controls/OutboundLink/index.tsx"),
				p = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				E = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/path/index.ts"),
				S = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				I = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = n("./src/lib/getShortenedLink.ts"),
				D = n("./src/reddit/components/FlairWrapper/index.tsx"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				L = n("./src/lib/prettyPrintNumber/index.ts"),
				y = n("./src/reddit/components/Poll/MetaData/index.tsx"),
				j = n("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				A = n.n(j);
			const R = Object(a.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var N, U = Object(i.b)(R)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, r = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(u.a)(e.className, A.a.proposalMetaData)
					}, o.a.createElement("span", null, g.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [g.fbt._param("count", Object(L.a)(r)), g.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(y.a, {
						className: A.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				P = n("./src/reddit/components/SEOTitle/index.tsx"),
				v = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/PostTitle/index.m.less"),
				k = n.n(F),
				x = n("./src/config.ts"),
				M = n("./src/reddit/hooks/usePostContext.ts"),
				w = n("./src/reddit/hooks/useTheme.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(N || (N = {}));
			const G = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: r,
					children: s,
					className: i,
					redditStyle: c
				}) => {
					const a = Object(w.a)();
					let d = "";
					switch (e) {
						case N.ExtraLarge:
							d = k.a.ExtraLarge;
							break;
						case N.Large:
							d = k.a.Large;
							break;
						case N.Medium:
							d = k.a.Medium;
							break;
						case N.Small:
							d = k.a.Small;
							break;
						case N.ExtraSmall:
							d = k.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(u.a)(k.a.Title, i, d, {
							[k.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": t || Object(h.a)({
								redditStyle: c,
								theme: a
							}).titleText
						}
					}, n ? o.a.createElement(P.b, {
						type: n
					}, s) : s)
				},
				B = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: r,
					...s
				}) => o.a.createElement(c.a, Y({}, s, {
					className: Object(u.a)(e, k.a.styledLink, {
						[k.a.isVisitedEnabled]: !t
					})
				}), r),
				q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: r
				}) => o.a.createElement("div", {
					className: Object(u.a)(k.a.titleContainer, n, {
						[k.a.isNoWrap]: t,
						[k.a.isVisitedEnabled]: !e
					})
				}, r),
				K = Object(a.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(b.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: v.bb
				}),
				V = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: r
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(q, {
						nowrap: e.nowrap
					}, o.a.createElement(W, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(_.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, o.a.createElement(W, e)); {
						const s = t.media && Object(I.G)(t.media) ? Object(S.c)(t.id, n.name) : t.permalink,
							i = e.isCommentPermalink ? Object(m.b)(s) : Object(E.a)(s);
						return o.a.createElement(q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(_.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, o.a.createElement(W, t)) : o.a.createElement(W, t)
						})(t, e) : o.a.createElement(B, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i
						}, o.a.createElement(W, e)))
					}
				},
				W = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: n,
						post: r
					} = e;
					let s = e.format ? e.format(r) : r.title;
					n && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const i = e.isCommentsPage ? P.a.PostComments : P.a.PostItem;
					return o.a.createElement(G, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(D.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), s)
				},
				H = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: r
					} = n, s = !t && !e.isCrosspost && e.size !== N.Large && !n.isSponsored && !(n.media && Object(I.G)(n.media)) && (n.source || n.media && (n.media.type === I.o.GIFVIDEO || n.media.type === I.o.IMAGE || n.media.type === I.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (s) return o.a.createElement(p.a, {
							className: e.outboundLinkClassName,
							href: Object(I.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source
						}, Object(C.a)(n), !n.isSponsored && o.a.createElement(O.a, {
							className: k.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== N.Large && e.size !== N.ExtraLarge) return o.a.createElement(p.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source
					}, Object(C.a)(n), !n.isSponsored && o.a.createElement(O.a, {
						className: k.a.outboundLinkIcon
					}));
					return null
				};
			class z extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${k.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(h.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(h.a)(this.props).titleText,Object(h.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: n,
						isCommentsPage: r,
						isOverlay: s,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: a
					} = this.props, d = n === T.b.Left, l = Object(D.b)(c), b = a ? l.filter(e => e.type === T.f.Nsfw || e.type === T.f.Spoiler) : d ? l.filter(e => Object(f.q)(e.type)) : [], _ = a ? [] : d ? l.filter(e => !Object(f.q)(e.type)) : l, p = !s && !r, E = !t && b && b.length > 0 && p, m = !t && _ && _.length > 0 && p;
					return o.a.createElement("div", {
						className: Object(u.a)(k.a.Component, e, c.id)
					}, !a && E && o.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(V, Y({}, this.props, {
						leftFlair: a ? b : void 0
					})), i && o.a.createElement(U, {
						className: k.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(H, this.props), m && o.a.createElement(D.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: k.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${x.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(b.Z)(),
					n = Object(b.v)(t),
					r = Object(M.a)(),
					s = Object(i.e)(s => K(s, {
						...r,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					c = Object(w.a)(),
					a = Object(l.b)();
				return o.a.createElement(z, Y({
					pageLayer: t,
					isCommentPermalink: n
				}, r, s, e, {
					theme: c,
					sendEvent: a
				}))
			}))
		},
		"./src/reddit/constants/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = 3,
				s = 5,
				o = 10
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const s = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(r.e)(n));
				return t
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.E.NO_STRIPE_SUBSCRIPTION:
							case r.E.USER_DOESNT_EXIST:
							case r.E.USER_REQUIRED_ERROR:
							case r.E.VALIDATION_ERROR:
								return e;
							case r.E.NO_USER:
							case r.E.NO_TEXT:
							case r.E.NO_URL:
								return r.E.VALIDATION_ERROR;
							case r.E.CREDIT_CARD_FAILURE:
							case r.E.CREDIT_CARD_FAILURE_GENERIC:
								return r.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.E.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "E", (function() {
				return D
			})), n.d(t, "F", (function() {
				return g
			})), n.d(t, "M", (function() {
				return y
			})), n.d(t, "B", (function() {
				return j
			})), n.d(t, "C", (function() {
				return A
			})), n.d(t, "D", (function() {
				return R
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "w", (function() {
				return U
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "L", (function() {
				return v
			})), n.d(t, "K", (function() {
				return F
			})), n.d(t, "I", (function() {
				return k
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return M
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "A", (function() {
				return Y
			})), n.d(t, "N", (function() {
				return G
			})), n.d(t, "J", (function() {
				return B
			})), n.d(t, "t", (function() {
				return q
			})), n.d(t, "H", (function() {
				return K
			})), n.d(t, "d", (function() {
				return V
			})), n.d(t, "c", (function() {
				return W
			})), n.d(t, "b", (function() {
				return H
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "e", (function() {
				return Q
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "m", (function() {
				return Z
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return re
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ie
			})), n.d(t, "j", (function() {
				return ce
			})), n.d(t, "u", (function() {
				return ae
			})), n.d(t, "G", (function() {
				return de
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = n("./src/reddit/models/Widgets/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				_ = n("./src/reddit/selectors/widgets.ts"),
				p = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(r || (r = {}));
			const E = "discovery_unit",
				f = (e, t, n) => ({
					...b.defaults(e),
					source: E,
					screen: b.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				m = (e, t, n) => ({
					...f(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (e, t) => {
					Object(p.a)(O(t)(e))
				},
				O = (e, t) => n => m(n, e, t),
				T = (e, t, n, r) => "unitName" in t ? f(e, t, r) : ((e, t, n) => ({
					...b.defaults(e),
					source: "search",
					screen: b.screen(e),
					search: n ? {
						...b.search(e, n),
						structureType: b.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				I = (e, t, n, s, o) => ({
					...T(e, t, s, o),
					action: "view",
					noun: r.ITEM_POST,
					post: b.post(e, n)
				}),
				h = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
				});
			var C;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(C || (C = {}));
			const D = (e, t, n) => {
					Object(p.a)(L(e, t, n, i.c.CLICK))
				},
				g = (e, t, n) => {
					Object(p.a)(L(e, t, n, i.c.VIEW))
				},
				L = (e, t, n, r) => {
					const s = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...b.defaults(e),
						source: "search",
						action: r,
						noun: "trending",
						metaSearch: h(t),
						discoveryUnit: n === C.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: b.actionInfo(e, {
							paneName: n,
							position: s
						}),
						search: {
							originPageType: e.platform.currentPage ? b.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: b.StructureType.Trending,
							queryId: r === i.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				y = (e, t, n, r, s, o, c) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(a.e)(e, n, r, s, o, t),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				j = (e, t, n, r) => {
					Object(p.a)(I(e, t, n, r))
				},
				A = (e, t, n, r) => s => I(s, e, t, n, r),
				R = (e, t, n, s) => {
					const o = T(e, t, s);
					Object(p.a)({
						...o,
						...Object(_.b)(e, n),
						action: "view",
						noun: r.ITEM_SUBREDDIT
					})
				},
				N = (e, t) => {
					Object(p.a)({
						...f(e, t),
						source: E,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				U = (e, t, n, r) => {
					Object(p.a)(P(t, n, r)(e))
				},
				P = (e, t, n, s) => o => {
					return {
						...T(o, e, n, s),
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_POST,
						post: b.post(o, t)
					}
				},
				v = (e, t, n, r) => s => o => Object(a.e)(o, s, e, t, n, r),
				F = (e, t, n, r) => s => o => Object(a.d)(o, e, t, void 0, n, s, r),
				k = (e, t, n, r) => s => o => ({
					...Object(a.e)(o, s, e, t, n, r),
					noun: "ad"
				}),
				x = (e, t) => n => s => ({
					...e ? f(s, e, t) : {},
					source: E,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: b.post(s, n)
				}),
				M = (e, t, n, r) => {
					Object(p.a)(w(t, n, r)(e))
				},
				w = (e, t, n, r) => s => {
					const o = Object(l.c)(s, {
							postId: t
						}),
						c = o ? Object(_.b)(s, o) : void 0;
					return {
						...T(s, e, n, r),
						...c,
						source: E,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(s, t)
					}
				},
				Y = (e, t, n) => r => s => {
					const o = Object(l.c)(s, {
							postId: t
						}),
						c = o ? Object(_.b)(s, o) : void 0;
					return {
						...T(s, e, void 0, n),
						...c,
						source: E,
						action: i.c.CLICK,
						noun: r ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(s, t)
					}
				},
				G = (e, t, n) => {
					const r = T(e, t);
					Object(p.a)({
						...r,
						...Object(_.b)(e, n),
						source: "search",
						action: i.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				B = (e, t, n, r, s, o) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(a.d)(e, t, n, r, s, void 0, o)
					})
				},
				q = (e, t, n) => {
					const r = T(e, t);
					Object(p.a)({
						...r,
						...Object(_.b)(e, n),
						source: E,
						action: i.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (e, t) => n => {
					const r = Object(u.j)(t);
					return {
						...f(n, e, t),
						...Object(_.b)(n, r),
						source: E,
						action: i.c.CLICK,
						noun: "title_subreddit"
					}
				},
				V = (e, t) => n => ({
					...f(n, e, t),
					action: "status",
					actionInfo: b.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				W = (e, t, n) => r => ({
					...f(r, e, n),
					action: "status",
					actionInfo: b.actionInfo(r, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				H = (e, t) => n => ({
					...f(n, e, t),
					action: "click",
					noun: "close"
				}),
				z = (e, t, n) => r => ({
					...T(r, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				Q = (e, t) => n => ({
					...f(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				$ = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				J = (e, t, n) => b.actionInfo(e, {
					position: n
				}),
				X = (e, t, n) => {
					const r = $();
					return e => ({
						...m(e, r),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t)
					})
				},
				Z = (e, t, n) => {
					const r = $();
					return e => ({
						...I(e, r, t),
						actionInfo: J(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const s = $();
					return e => ({
						...f(e, s),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						source: E,
						action: i.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const s = $();
					return e => ({
						...f(e, s),
						actionInfo: J(e, 0, n),
						post: b.post(e, t) || null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				ne = (e, t, n, s) => {
					const o = $();
					return e => ({
						...f(e, o),
						actionInfo: J(e, 0, s),
						subreddit: b.subredditById(e, n) || null,
						post: b.post(e, t) || null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				re = (e, t, n) => {
					const s = $();
					return e => ({
						...f(e, s),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				se = (e, t, n, s) => {
					const o = $();
					return e => ({
						...f(e, o),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						post: s ? b.post(e, s) : null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, n, s) => {
					const o = $();
					return e => ({
						...f(e, o),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						post: s ? b.post(e, s) : null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ie = (e, t, n) => {
					const s = $();
					return e => ({
						...f(e, s),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						source: E,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, n) => {
					const s = $();
					return e => ({
						...f(e, s),
						actionInfo: J(e, 0, n),
						subreddit: b.subredditById(e, t) || null,
						source: E,
						action: i.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				ae = (e, t) => n => ({
					...f(n, e),
					...t && Object(_.b)(n, t),
					source: E,
					action: i.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...f(t, e),
					source: E,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const i = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				c = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "p", (function() {
				return L
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/assertNever.ts"),
				s = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var c, a, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(c || (c = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(a || (a = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const u = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				l = e => e.__typename === o.c.AvailableRedditor,
				b = e => e.__typename === s.a.Subreddit;
			var _, p, E, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(_ || (_ = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(p || (p = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(E || (E = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const m = e => p[f[e]],
				S = e => f[p[e]],
				O = e => E[p[e]],
				T = e => p[E[e]],
				I = e => f[E[e]];
			var h;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(h || (h = {}));
			const C = e => {
					switch (e) {
						case h.Hourly:
						case h.Daily:
						case h.Weekly:
						case h.Monthly:
							return !0
					}
					return !1
				},
				D = "custom",
				g = e => {
					switch (e) {
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
							return Object(r.a)(e)
					}
				},
				L = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				c = n("./src/reddit/models/Badge/index.ts"),
				a = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function u(e) {
				return "userId" in e
			}

			function l(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === c.a.First ? r[a.a.Loyalty][s] : r[a.a.Achievement][s] : u(e) ? r[a.a.Cosmetic][a.c.MyBadges][s] : r[a.a.Cosmetic][a.c.Gallery][s]) && (u(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function b(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(i.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function _(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(b).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(i.b)(r, s)
				})
			}

			function p(e) {
				const t = {
					[a.a.Loyalty]: {},
					[a.a.Achievement]: {},
					[a.a.Cosmetic]: {
						[a.c.Gallery]: {},
						[a.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[a.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[a.a.Cosmetic][a.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return l(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), l(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
					collections: {
						[a.a.Loyalty]: _(t[a.a.Loyalty], e.collections),
						[a.a.Achievement]: _(t[a.a.Achievement], e.collections),
						[a.a.Cosmetic]: {
							[a.c.Gallery]: _(t[a.a.Cosmetic][a.c.Gallery], e.collections),
							[a.c.MyBadges]: _(t[a.a.Cosmetic][a.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
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
						} : e
					}
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: p(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/inFeedChaining.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "b", (function() {
				return O
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeListingKey/index.ts"),
				i = n("./src/reddit/actions/subreddit/similarSubreddit.ts"),
				c = n("./src/reddit/constants/inFeedChaining.ts"),
				a = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				d = n("./src/reddit/selectors/discoveryUnit.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				l = n("./src/reddit/selectors/subreddit.ts");
			const b = [],
				_ = (e, t) => {
					const n = e.posts.chained.idToListingKey[t.postId];
					return t.listingKey === n
				},
				p = (e, t) => {
					const n = e.posts.chained.dismissedIdToListingKey[t.postId];
					return (e => e.posts.chained.dismissed)(e) || t.listingKey === n
				},
				E = Object(r.a)(e => e.posts.chained.idToListingKey, e => Object.keys(e).filter(t => e[t])),
				f = (e, {
					subredditId: t
				}) => {
					return E(e).some(n => {
						const r = Object(u.P)(e, {
							postId: n
						});
						return !!r && r.id === t
					})
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = s.Wb.DAY.toUpperCase(),
						r = Object(o.a)(t, s.P.TOP, {
							t: n
						}),
						i = Object(u.w)(e, {
							listingKey: r
						});
					if (0 !== i.length)
						for (const s of i) {
							const t = Object(u.D)(e, {
								postId: s
							});
							if (t && !t.hidden && !t.isSponsored) return t
						}
				},
				S = (e, {
					postId: t
				}) => {
					const n = ((e, {
							postId: t
						}) => {
							const n = Object(u.D)(e, {
								postId: t
							});
							if (!n) return b;
							const r = Object(i.a)({
								subredditIds: [n.belongsTo.id],
								count: c.b
							});
							return Object(l.v)(e, {
								key: r
							})
						})(e, {
							postId: t
						}),
						r = [];
					for (const {
							name: s
						} of n) {
						const t = m(e, {
							subredditName: s
						});
						t && r.push(t.id)
					}
					return r
				},
				O = (e, {
					listingName: t
				}) => {
					const n = a.b;
					return Object(d.c)(e, {
						unitName: n
					})
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~reddit-components-LargePost~reddit-components-MediumPost.3dad22e47d51ce3c4d77.js.map