// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.a879ddf2ecb291b38b92.js
// Retrieved at 1/27/2020, 1:40:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-dom/index.js");
			s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), s("./node_modules/invariant/browser.js");

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(s, o) {
					return a(e[o], t[o])
				})) : e !== t
			}

			function i() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.root || null,
					s = function(e) {
						var t = /^-?\d*\.?\d+(px|%)$/,
							s = (e || "0px").split(/\s+/).map((function(e) {
								if (!t.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return s[1] = s[1] || s[0], s[2] = s[2] || s[0], s[3] = s[3] || s[1], s.join(" ")
					}(e.rootMargin),
					o = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					n = c.keys(),
					r = Array.isArray(n),
					i = 0;
				for (n = r ? n : n[Symbol.iterator]();;) {
					var l;
					if (r) {
						if (i >= n.length) break;
						l = n[i++]
					} else {
						if ((i = n.next()).done) break;
						l = i.value
					}
					var d = l;
					if (![
							[t, d.root],
							[s, d.rootMargin],
							[o, d.thresholds]
						].some((function(e) {
							return a.apply(void 0, e)
						}))) return d
				}
				return null
			}
			var c = new Map,
				l = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return i(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var s = c.get(t);
						if (s) {
							var o = s.values(),
								n = Array.isArray(o),
								r = 0;
							for (o = n ? o : o[Symbol.iterator]();;) {
								var a;
								if (n) {
									if (r >= o.length) break;
									a = o[r++]
								} else {
									if ((r = o.next()).done) break;
									a = r.value
								}
								var i = a;
								if (i.target === e.target) return i
							}
						}
						return null
					}, e.observe = function(e) {
						var t = void 0;
						c.has(e.observer) ? t = c.get(e.observer) : (t = new Set, c.set(e.observer, t)), t.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (c.has(e.observer)) {
							var t = c.get(e.observer);
							t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), c.delete(e.observer)))
						}
					}, e.clear = function() {
						c.clear()
					}, e.count = function() {
						return c.size
					}, e
				}(),
				d = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var o = t[s];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, s, o) {
						return s && e(t.prototype, s), o && e(t, o), t
					}
				}();

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function u(e, t) {
				e.forEach((function(e) {
					var s = l.findElement(e, t);
					s && s.handleChange(e)
				}))
			}
			var m = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				h = function(e) {
					function t() {
						var s, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
						return s = o = p(this, e.call.apply(e, [this].concat(r))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, p(o, s)
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.observe = function() {
						var e;
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(r.findDOMNode)(this.target)), this.observer = l.create(u, this.options), l.observe(this)
					}, t.prototype.unobserve = function() {
						l.unobserve(this)
					}, t.prototype.reobserve = function() {
						this.unobserve(), this.props.disabled || this.observe()
					}, t.prototype.componentDidMount = function() {
						this.props.disabled || this.observe()
					}, t.prototype.componentWillUnmount = function() {
						this.unobserve()
					}, t.prototype.componentDidUpdate = function() {
						this.shouldResetObserver && this.reobserve()
					}, t.prototype.componentWillUpdate = function(e) {
						var t = this;
						this.shouldResetObserver = m.concat(["disabled"]).some((function(s) {
							return a(e[s], t.props[s])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, d(t, [{
						key: "options",
						get: function() {
							var e = this;
							return m.reduce((function(t, s) {
								if (b.hasOwnProperty.call(e.props, s)) {
									var o, n = e.props[s];
									return "root" === s && "[object String]" === b.toString.call(e.props[s]) && (n = document.querySelector(n)), Object.assign({}, t, ((o = {})[s] = n, o))
								}
								return t
							}), {})
						}
					}]), t
				}(n.a.Component);
			h.displayName = "IntersectionObserver";
			var g = h;
			s.d(t, "a", (function() {
				return g
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, s, n, r, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return s.checkPropTypes = n, s.PropTypes = s, s
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var s = -1, o = null == e ? 0 : e.length; ++s < o;)
					if (!t(e[s], s, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var s = !0;
				return o(e, (function(e, o, n) {
					return s = !!t(e, o, n)
				})), s
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var o;
				return s(e, (function(e, s, n) {
					if (t(e, s, n)) return o = s, !1
				})), o
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayEvery.js"),
				n = s("./node_modules/lodash/_baseEvery.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? o : n;
				return s && i(e, t, s) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseFindKey.js"),
				n = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return o(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/graphql/operations/PollVote.json": function(e) {
			e.exports = JSON.parse('{"id":"a20cc8dd230d"}')
		},
		"./src/reddit/actions/governance/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/app/strings/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				i = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/config.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");
			var p = s("./src/reddit/endpoints/governance/poll.ts");
			var u = s("./src/reddit/endpoints/governance/wallet.ts"),
				m = s("./src/reddit/models/Poll/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/models/Vote/index.ts"),
				g = s("./src/reddit/selectors/gov.ts"),
				x = s("./src/reddit/actions/governance/constants.ts"),
				v = s("./src/reddit/actions/governance/errorToast.ts");
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "h", (function() {
				return I
			})), s.d(t, "i", (function() {
				return M
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "c", (function() {
				return F
			}));
			const f = Object(n.a)(x.b),
				y = Object(n.a)(x.c),
				O = Object(n.a)(x.d),
				j = Object(n.a)(x.e),
				C = Object(n.a)(x.f),
				P = (Object(n.a)(x.g), Object(n.a)(x.h), Object(n.a)(x.i)),
				E = Object(n.a)(x.j),
				w = Object(n.a)(x.k),
				_ = Object(n.a)(x.l),
				N = Object(n.a)(x.r),
				I = Object(n.a)(x.s),
				S = Object(n.a)(x.t),
				k = Object(n.a)(x.u),
				T = Object(n.a)(x.v),
				L = Object(n.a)(x.w),
				R = Object(n.a)(x.x),
				M = Object(n.a)(x.y),
				A = (e, t) => async (s, o, n) => {
					let r, {
							apiContext: a,
							gqlContext: c
						} = n,
						l = o().polls.models[e];
					if (s(w({
							pollId: e
						})), (r = l.type === m.a.GA ? await Object(p.c)(c(), e, t) : await Object(p.b)(a(), l.subredditId, e, t)).ok) {
						if (l.type === m.a.GA) {
							const {
								options: e
							} = r.body.data.updatePostPollVoteState.poll;
							s(C({
								pollId: l.id,
								optionId: t,
								options: e
							}))
						} else s(_(r.body));
						const n = o();
						if ((l = n.polls.models[e]) && Object(m.d)(l)) {
							const {
								postId: e
							} = l, t = n.posts.models[e];
							t && t.voteState === h.a.notVoted && s(Object(i.N)(e))
						}
					} else s(E({
						pollId: e,
						error: r.error || r.errors[0].message
					})), Object(v.a)(s, r.error || r.errors[0].messsage)
				}, B = (e, t) => async (s, n, i) => {
					let {
						apiContext: p
					} = i;
					s(S());
					const u = n().transfers.communityPoints.contentId || void 0,
						m = await
					function(e, t) {
						return Object(d.a)(e, {
							data: {
								amount: t.amount,
								contentId: t.contentId,
								description: t.message,
								receiveUserName: t.recipient
							},
							endpoint: "".concat(l.a.metaUrl, "/wallets/me/").concat(t.subredditId, "/transfers"),
							method: "post"
						})
					}(p(), Object.assign({}, e, {
						contentId: u
					}));
					if (m.ok) {
						const i = n().user.language;
						s(k(Object.assign({}, m.body, {
							subredditId: e.subredditId
						}))), s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(o.a)(i, "gov.transferSuccess", {
								amount: Object(r.a)(e.amount),
								recipient: e.recipient,
								tokenName: Object(g.o)(n(), {
									subredditId: e.subredditId
								})
							})
						})), t && s(Object(a.f)())
					} else s(N({
						error: m.error
					})), Object(v.a)(s, m.error)
				}, V = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					t(L());
					const r = await Object(u.a)(n(), e);
					r.ok ? t(R(r.body)) : t(T({
						error: r.error
					}))
				}, F = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					s(O());
					const i = await
					function(e, t, s) {
						return Object(d.a)(e, {
							data: {
								optOut: t
							},
							method: "patch",
							endpoint: "".concat(l.a.metaUrl, "/wallets/").concat(s, "/me")
						})
					}(a(), e, t);
					if (i.ok) {
						s(R({
							[t]: i.body
						}));
						const r = e ? "polls.optOutSuccess" : "polls.optInSuccess";
						s(Object(c.e)({
							kind: b.b.SuccessCommunity,
							text: Object(o.a)(n().user.language, r, {
								tokenName: Object(g.o)(n(), {
									subredditId: t
								})
							})
						}))
					} else Object(v.a)(s, i.error)
				}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = d(e, ["className"]);
				return n.a.createElement(a.a, l({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const u = Object(a.a)(e => {
				var {
					className: t
				} = e, s = p(e, ["className"]);
				return n.a.createElement(i.a, d({}, s, {
					className: Object(r.a)(l.a.horizontalVotes, t),
					scoreClassName: l.a.customScoreStyles,
					downvoteClassName: Object(i.b)(s) ? l.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = Object(o.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				l = s("./src/reddit/components/PostFollow/index.tsx"),
				d = s("./src/reddit/helpers/postCollection.ts"),
				p = s("./src/reddit/helpers/postEvent.ts"),
				u = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = s.n(u);
			const b = i.a.div("EventMetaWrapper", m.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: o,
					post: i
				} = e;
				if (!Object(p.a)(i)) return null;
				const u = i && i.eventInfo,
					h = Object(d.a)(i),
					g = u && Object(a.c)(u.eventStart, u.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(m.a.container, t, {
						[m.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: m.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					language: o,
					post: i
				}), !h && g && n.a.createElement(l.a, {
					className: m.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				a = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var l = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = s("./src/reddit/icons/fonts/Live/index.tsx"),
				u = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const h = b.a.span("PostEventFutureText", m.a),
				g = b.a.span("PostEventPastText", m.a),
				x = b.a.span("PostEventNowText", m.a),
				v = b.a.span("Container", m.a),
				f = b.a.wrapped(d.a, "CalendarIcon", m.a),
				y = b.a.wrapped(p.a, "LiveIcon", m.a),
				O = b.a.div("LoadingState", m.a);
			class j extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						language: t,
						post: s
					} = this.props, {
						eventInfo: o
					} = s;
					if (!o) return null;
					const {
						eventEnd: d,
						eventIsLive: p,
						eventStart: u
					} = o, m = Object(r.e)(u, d);
					let b, j;
					if (this.state.mounted || m === r.a.Live) b = function(e, t, s, o) {
						const n = Object(r.e)(e, t),
							l = new Date(e * i.Bb);
						let d;
						if (n === r.a.Live || o) return Object(a.a)(s, "posts.event.inProgress");
						n === r.a.Future ? d = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : Object(r.b)(e) >= 5 ? c(l, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(l, s) : n === r.a.Past && (d = Object(r.d)(e) ? Object(a.a)(s, "posts.event.today") : c(l, s));
						const p = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(l, s);
						return "".concat(d, " @ ").concat(p)
					}(u, d, t, p);
					else {
						const e = Object(l.a)({
							isLoading: !0
						});
						b = n.a.createElement(O, {
							className: e
						})
					}
					if (p) j = n.a.createElement(x, null, n.a.createElement(y, null), b);
					else if (m === r.a.Future) j = n.a.createElement(h, null, n.a.createElement(f, null), b);
					else {
						if (m !== r.a.Past) return null;
						j = n.a.createElement(g, null, n.a.createElement(f, null), b)
					}
					return n.a.createElement(v, {
						className: e
					}, j)
				}
			}
			t.a = j
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = s.n(i);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less": function(e, t, s) {
			e.exports = {
				emptyPie: "_3FcFVjZN0xHslbheCZ6YtB",
				fullPie: "_51DvHNRm7RdZvtEr4YB90",
				checkIcon: "b6nqW0WFO2M4SexVBxfHU",
				container: "_1QSw_HlkZ06PQ4H_Gl5Qmi",
				decisionIcon: "tIv0l4mIAasOfzH_1MZzr",
				decisionThreshold: "vdDwj3MECrKPWOzGvwtX4",
				pie: "_1kLHoqYVgmdy-N798MqUkD",
				pieContainer: "_19t_3cFD9b1D_z7gV6r1Lf",
				pieInvertedMask: "_240PIKFetxH16NIbed3MhP",
				pieMask: "faQEx7XG3jztMB7Ba0IzB",
				pieSwap: "sBNylAozOUua3KlWKF9bf",
				text: "_3kJ7s4NNHNqugbRuUIg9B9"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1399Kcm0dM3RnJzlAPzZsE",
				selectable: "_3-DDU6UwhIWiQZZtZLB8nv",
				selected: "biqV2RX059eee3GcVedKg"
			}
		},
		"./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_16Gygedl8JROR3rsORhsAq"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3agF4JIMydb6n5U8QiQ6Tv",
				govIcon: "Biin4hWHcVT2EfDytVnNn",
				poll: "_2-Y0QlWKQ9uE8EEq087km1",
				resultsSelector: "_31DHxzl3U6nsgzY4XJjCSD",
				votingReward: "_2JVvMYg8RBHtf5C2szMdV7"
			}
		},
		"./src/reddit/components/Governance/Proposal/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/bignumber.js/bignumber.js"),
				n = s.n(o),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				p = s("./src/reddit/components/Governance/VotingReward/index.m.less"),
				u = s.n(p);

			function m(e) {
				return a.a.createElement("div", {
					className: Object(l.a)(u.a.container, e.className)
				}, a.a.createElement("div", {
					className: u.a.pill
				}, a.a.createElement(d.a, {
					className: u.a.token,
					subredditId: e.subredditId
				}), a.a.createElement("span", {
					className: u.a.amount
				}, "+", e.amount)))
			}
			var b, h = s("./src/reddit/actions/governance/index.ts"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/models/Poll/index.ts"),
				y = s("./src/reddit/selectors/gov.ts"),
				O = s("./src/reddit/components/Poll/MetaData/index.tsx"),
				j = s("./src/lib/bigNumberUtils/percent.ts"),
				C = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/reddit/helpers/governance/tokens.ts"),
				E = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				w = s("./src/reddit/components/Poll/ResultOption/index.m.less"),
				_ = s.n(w);
			! function(e) {
				e[e.Count = 0] = "Count", e[e.Percent = 1] = "Percent"
			}(b || (b = {}));
			var N = function(e) {
					const t = e.poll.options.filter(t => t.id === e.optionId)[0],
						s = e.result.totalVotes,
						n = e.result.options[e.optionId],
						r = new o.BigNumber(s).isZero() ? 0 : Object(j.a)(n.votes, s),
						i = Object(P.c)(n.votes, e.tokenDisplayConversion);
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, _.a.container),
						title: e.displayType === b.Count ? n.votes : "".concat(r.toFixed(2), "% (").concat(i, " ").concat(e.tokenName, ")")
					}, a.a.createElement("div", {
						className: _.a.bar,
						style: {
							opacity: e.isWinningOption ? .3 : void 0,
							width: "".concat(r, "%")
						}
					}), a.a.createElement("div", {
						className: Object(l.a)(_.a.count, {
							[_.a.hide]: e.displayType !== b.Count,
							[_.a.show]: e.displayType === b.Count
						})
					}, Object(C.b)(parseInt(n.votes))), a.a.createElement("div", {
						className: Object(l.a)(_.a.percent, {
							[_.a.hide]: e.displayType === b.Count,
							[_.a.show]: e.displayType !== b.Count
						})
					}, "".concat(r.toFixed(1), "%")), a.a.createElement("div", {
						className: _.a.text
					}, t.text), n.userSelected && a.a.createElement(E.a, {
						className: _.a.check
					}))
				},
				I = s("./src/reddit/components/Poll/ClosedPoll/index.m.less"),
				S = s.n(I);
			const k = Object(c.c)({
				tokenName: y.o,
				tokenDisplayConversion: y.n,
				language: e => e.user.language
			});
			var T = Object(i.b)(k)((function(e) {
					let t;
					return e.poll.options.forEach(s => {
						t || (t = s);
						const n = e.result.options[s.id],
							r = e.result.options[t.id];
						new o.BigNumber(r.votes).isLessThan(new o.BigNumber(n.votes)) && (t = s)
					}), a.a.createElement("div", {
						className: e.className
					}, e.poll.options.map((s, o) => a.a.createElement(N, {
						key: o,
						className: S.a.option,
						displayType: e.displayType,
						isWinningOption: s === t,
						optionId: s.id,
						poll: e.poll,
						result: e.result,
						tokenName: e.tokenName,
						tokenDisplayConversion: e.tokenDisplayConversion
					})), a.a.createElement(O.a, {
						className: S.a.metaData,
						language: e.language,
						poll: e.poll
					}))
				})),
				L = s("./node_modules/lodash/isNil.js"),
				R = s.n(L),
				M = s("./src/reddit/constants/elementClassNames.ts"),
				A = s("./src/reddit/controls/Button/index.tsx"),
				B = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				V = s("./src/reddit/i18n/components.tsx"),
				F = s("./src/reddit/components/Poll/OpenPoll/index.m.less"),
				H = s.n(F);

			function D(e) {
				return "INPUT" === e.tagName
			}
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						optionIsSelected: !1
					}, this.handleOptionSelected = () => this.setState({
						optionIsSelected: !0
					}), this.handleSubmit = e => {
						const {
							poll: t
						} = this.props;
						e.preventDefault();
						const s = e.currentTarget,
							o = function(e) {
								for (const t of e)
									if (t.checked) return parseInt(t.value)
							}(Array.from(s.elements).filter(D));
						R()(o) || (this.props.onVoteSelection(t.options[o]), this.props.sendEvent(Object(v.e)(t.id, t.postId, o)))
					}
				}
				render() {
					return a.a.createElement("form", {
						className: this.props.className,
						onSubmit: this.handleSubmit
					}, a.a.createElement("div", null, this.props.poll.options.map((e, t) => a.a.createElement("label", {
						key: t,
						className: H.a.option
					}, a.a.createElement("input", {
						className: H.a.optionRadio,
						onChange: this.handleOptionSelected,
						type: "radio",
						name: "proposal",
						value: t
					}), a.a.createElement("div", {
						className: H.a.optionText
					}, e.text)))), a.a.createElement("div", {
						className: H.a.controlRow
					}, a.a.createElement("div", {
						className: H.a.buttonContainer
					}, a.a.createElement(A.i, {
						className: M.p,
						disabled: this.props.voteInProgress || !this.props.userIsLoggedIn || !this.state.optionIsSelected,
						type: "submit"
					}, this.props.voteInProgress ? a.a.createElement(B.a, {
						className: H.a.loadingIcon,
						sizePx: 20
					}) : a.a.createElement(r.Fragment, null, this.props.votingIcon, a.a.createElement(V.c, null, "vote"))), !this.props.userIsLoggedIn && a.a.createElement("div", {
						className: H.a.loggedOutTooltip
					}, a.a.createElement(V.c, null, "You must be logged in to vote"))), a.a.createElement(O.a, {
						className: H.a.metaData,
						language: this.props.language,
						poll: this.props.poll
					})))
				}
			}
			const z = Object(c.c)({
				language: e => e.user.language,
				userIsLoggedIn: e => !!e.user.account
			});
			var U = Object(i.b)(z)(Object(g.b)(W)),
				G = s("./src/reddit/components/Poll/index.m.less"),
				Z = s.n(G);
			class K extends a.a.Component {
				constructor() {
					super(...arguments), this.userAlreadyMadeSelection = (e, t) => !(!e || !t) && Object(f.g)(e, t), this.sendPollResultsEvent = () => {
						const {
							poll: e,
							sendEvent: t
						} = this.props;
						e && t(Object(v.d)(e.id, e.postId))
					}
				}
				componentDidMount() {
					const {
						isCommentsPage: e,
						poll: t,
						result: s
					} = this.props;
					e && this.userAlreadyMadeSelection(t, s) && this.sendPollResultsEvent()
				}
				componentDidUpdate(e) {
					!this.userAlreadyMadeSelection(e.poll, e.result) && this.userAlreadyMadeSelection(this.props.poll, this.props.result) && this.sendPollResultsEvent()
				}
				render() {
					const {
						className: e,
						displayType: t,
						onVoteSelection: s,
						poll: o,
						result: n,
						subredditId: r,
						title: i,
						voteInProgress: c,
						votingIcon: l
					} = this.props;
					return o ? a.a.createElement("div", {
						className: e
					}, i && a.a.createElement("div", {
						className: Z.a.title
					}, i), n && Object(f.e)(o, n) ? a.a.createElement(T, {
						displayType: t,
						poll: o,
						result: n,
						subredditId: r
					}) : a.a.createElement(U, {
						poll: o,
						onVoteSelection: s,
						voteInProgress: c,
						votingIcon: l
					})) : null
				}
			}
			const q = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				result: (e, t) => e.polls.results[t.resultType][t.pollId],
				voteInProgress: (e, t) => !!e.polls.api.voting.pending[t.pollId]
			});
			var Y = Object(x.t)({
					isCommentsPage: x.w
				})(Object(i.b)(q, (e, t) => ({
					onVoteSelection: s => e(Object(h.f)(t.pollId, s.id))
				}))(Object(g.b)(K))),
				J = s("./src/reddit/icons/svgs/GovSmall/index.tsx"),
				X = s("./src/app/strings/index.ts"),
				Q = (s("./node_modules/core-js/modules/es6.regexp.to-string.js"), e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 20 20"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M10.7771 0.961401C10.3769 0.466643 9.62244 0.466642 9.22221 0.961401L8.71391 1.58973C8.42377 1.9484 7.92591 2.06204 7.50887 1.86478L6.77829 1.51921C6.20302 1.2471 5.52329 1.57445 5.37735 2.19386L5.19202 2.98051C5.08623 3.42955 4.68698 3.74795 4.22565 3.75117L3.41748 3.75681C2.78112 3.76125 2.31073 4.3511 2.44801 4.97249L2.62234 5.76165C2.72186 6.21213 2.50029 6.67222 2.08605 6.87528L1.36036 7.23101C0.788947 7.51112 0.621066 8.24665 1.01436 8.74695L1.51383 9.38231C1.79895 9.745 1.79895 10.2557 1.51383 10.6184L1.01436 11.2537C0.621067 11.754 0.788947 12.4895 1.36036 12.7697L2.08605 13.1254C2.50029 13.3284 2.72186 13.7885 2.62234 14.239L2.44801 15.0282C2.31073 15.6496 2.78112 16.2394 3.41748 16.2439L4.22565 16.2495C4.68698 16.2527 5.08623 16.5711 5.19202 17.0202L5.37735 17.8068C5.52329 18.4262 6.20302 18.7536 6.77829 18.4815L7.50887 18.1359C7.92591 17.9386 8.42376 18.0523 8.71391 18.4109L9.22221 19.0393C9.62244 19.534 10.3769 19.534 10.7771 19.0393L11.2854 18.4109C11.5756 18.0523 12.0734 17.9386 12.4905 18.1359L13.221 18.4815C13.7963 18.7536 14.476 18.4262 14.622 17.8068L14.8073 17.0202C14.9131 16.5711 15.3124 16.2527 15.7737 16.2495L16.5819 16.2439C17.2182 16.2394 17.6886 15.6496 17.5513 15.0282L17.377 14.239C17.2775 13.7885 17.499 13.3284 17.9133 13.1254L18.639 12.7697C19.2104 12.4895 19.3783 11.754 18.985 11.2537L18.4855 10.6184C18.2004 10.2557 18.2004 9.745 18.4855 9.38231L18.985 8.74695C19.3783 8.24665 19.2104 7.51112 18.639 7.23101L17.9133 6.87528C17.499 6.67222 17.2775 6.21213 17.377 5.76165L17.5513 4.97249C17.6886 4.3511 17.2182 3.76125 16.5819 3.75681L15.7737 3.75117C15.3124 3.74795 14.9131 3.42956 14.8073 2.98051L14.622 2.19386C14.476 1.57445 13.7963 1.2471 13.221 1.51921L12.4905 1.86478C12.0734 2.06204 11.5756 1.94841 11.2854 1.58973L10.7771 0.961401ZM12.5231 7.71779L13.0827 8.27779C13.2391 8.43419 13.2391 8.68699 13.0827 8.84339L9.44271 12.4834C9.36471 12.5614 9.26231 12.6006 9.1599 12.6006C9.0575 12.6006 8.95551 12.5614 8.8771 12.4834L6.9171 10.5234C6.7607 10.3674 6.7607 10.1142 6.9171 9.95779L7.4771 9.39779C7.6335 9.24139 7.8867 9.24139 8.0427 9.39779L9.1599 10.515L11.9575 7.71779C12.0323 7.64259 12.1339 7.60059 12.2403 7.60059C12.3463 7.60059 12.4479 7.64259 12.5231 7.71779Z"
				})))),
				$ = s("./src/reddit/selectors/user.ts"),
				ee = s("./src/reddit/components/Governance/Proposal/ResultsSelector/DecisionThreshold/index.m.less"),
				te = s.n(ee);

			function se(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, a.a.createElement(V.c, null, "Achieved Decision Threshold")), a.a.createElement("div", {
					className: te.a.decisionIcon,
					title: e.votes
				}, a.a.createElement(Q, {
					className: te.a.decisionThreshold
				})))
			}

			function oe(e) {
				return a.a.createElement(r.Fragment, null, a.a.createElement("div", {
					className: te.a.text
				}, Object(X.a)(e.language, "polls.decisionThreshold", {
					amount: Object(C.b)(parseInt(Object(P.b)(e.threshold, e.tokenDisplayConversion)))
				})), a.a.createElement(ne, {
					percent: e.percent
				}))
			}

			function ne(e) {
				const t = Math.floor(e.percent / 100 * 360);
				return a.a.createElement("div", {
					className: te.a.pieContainer,
					title: "".concat(e.percent, "%")
				}, a.a.createElement("div", {
					className: te.a.pie
				}), a.a.createElement("div", {
					className: te.a.pieInvertedMask
				}), a.a.createElement("div", {
					className: Object(l.a)(te.a.pieMask, {
						[te.a.pieSwap]: e.percent >= 50
					}),
					style: {
						transform: e.percent < 50 ? "rotate(".concat(t, "deg)") : "rotate(".concat(t - 180, "deg)")
					}
				}))
			}
			const re = Object(c.c)({
				language: $.S,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollResult: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.results.byVotingPower[s]
				},
				tokenDisplayConversion: y.n
			});
			var ae = Object(i.b)(re)((function(e) {
					if (!(e.poll && e.poll.decisionThreshold && e.pollResult)) return null;
					const t = Object(f.c)(e.poll, e.pollResult),
						s = new n.a(e.pollResult.options[t.id].votes),
						o = e.poll.decisionThreshold,
						r = s.isGreaterThanOrEqualTo(new n.a(o)),
						i = Object(j.a)(e.pollResult.options[t.id].votes, o);
					return a.a.createElement("div", {
						className: Object(l.a)(te.a.container, e.className)
					}, r ? a.a.createElement(se, {
						language: e.language,
						votes: s.toString()
					}) : a.a.createElement(oe, {
						language: e.language,
						threshold: o,
						percent: i,
						tokenDisplayConversion: e.tokenDisplayConversion
					}))
				})),
				ie = s("./src/reddit/components/Governance/Proposal/ResultsSelector/Tab/index.m.less"),
				ce = s.n(ie);

			function le(e) {
				return a.a.createElement("a", {
					className: Object(l.a)(e.className, ce.a.container, {
						[ce.a.selectable]: !!e.selectable,
						[ce.a.selected]: !!e.selectable && !!e.isSelected
					}),
					onClick: e.onSelect,
					title: e.tooltipText
				}, e.text)
			}
			var de = s("./src/reddit/components/Governance/Proposal/ResultsSelector/index.m.less"),
				pe = s.n(de);
			const ue = Object(c.c)({
				tokenName: y.o,
				tokenDisplayConversion: y.n,
				distribution: (e, t) => {
					let {
						subredditId: s
					} = t;
					return e.subreddits.gov.distributions[s]
				},
				language: e => e.user.language,
				poll: (e, t) => {
					let {
						pollId: s
					} = t;
					return e.polls.models[s]
				},
				pollIsClosed: (e, t) => {
					let {
						pollId: s,
						resultsByVoters: o
					} = t;
					const n = e.polls.models[s];
					return !!(n && o && Object(f.e)(n, o))
				},
				wallet: y.g
			});
			var me = Object(i.b)(ue)((function(e) {
					const {
						distribution: t,
						poll: s,
						resultsByVoters: n,
						resultsByVotingPower: r,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: d
					} = e, p = r ? r.totalVotes : "0", u = !new o.BigNumber(p).isZero() && d && t ? Object(j.a)(p, t.totalAvailable) : 0, m = n ? n.totalVotes : "0", b = Object(P.c)(p, i), h = Object(C.b)(parseInt(m));
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, pe.a.container)
					}, a.a.createElement("div", null, s.type !== f.a.GA && a.a.createElement(le, {
						isSelected: e.currentResultType === f.b.ByVotingPower,
						selectable: e.pollIsClosed,
						text: "".concat(b, " ").concat(c),
						tooltipText: Object(X.a)(e.language, "polls.votingBreakdown", {
							tokenName: c,
							count: Object(P.c)(p, i),
							percent: u.toFixed(2)
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVotingPower)
					}), a.a.createElement(le, {
						isSelected: e.currentResultType === f.b.ByVoters,
						selectable: e.pollIsClosed,
						text: Object(X.c)(e.language, "polls.numVotes", parseInt(m), {
							count: h
						}),
						onSelect: () => e.onChangeResultType && e.onChangeResultType(f.b.ByVoters)
					})), Object(f.d)(s) && a.a.createElement(ae, {
						pollId: e.pollId,
						subredditId: e.subredditId
					}))
				})),
				be = s("./src/reddit/components/Governance/Proposal/index.m.less"),
				he = s.n(be);
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						displayReward: !1,
						resultType: this.props.poll.type === f.a.GA ? f.b.ByVoters : f.b.ByVotingPower
					}, this.handleResultTypeChange = e => this.setState({
						resultType: e
					}), this.handleContainerClick = e => {
						this.props.poll.type === f.a.GA && e.stopPropagation()
					}
				}
				componentDidUpdate(e, t) {
					if (!!this.props.pollReward && !new o.BigNumber(this.props.pollReward).isZero()) {
						const s = xe(e, t.resultType),
							o = xe(this.props, this.state.resultType);
						if (s && o) {
							const t = !Object(f.e)(e.poll, s),
								n = Object(f.e)(this.props.poll, o);
							t && n && this.setState({
								displayReward: !0
							})
						}
					}
				}
				render() {
					return a.a.createElement("div", {
						className: Object(l.a)(this.props.className, he.a.container),
						onClick: this.handleContainerClick
					}, a.a.createElement(me, {
						className: he.a.resultsSelector,
						currentResultType: this.state.resultType,
						pollId: this.props.pollId,
						resultsByVoters: this.props.resultsByVoters,
						resultsByVotingPower: this.props.resultsByVotingPower,
						subredditId: this.props.subredditId,
						onChangeResultType: this.handleResultTypeChange
					}), a.a.createElement(Y, {
						key: this.props.pollId,
						className: he.a.poll,
						displayType: this.state.resultType === f.b.ByVoters ? b.Count : b.Percent,
						pollId: this.props.pollId,
						resultType: this.state.resultType,
						subredditId: this.props.subredditId,
						votingIcon: Object(f.d)(this.props.poll) ? a.a.createElement(J.a, {
							className: he.a.govIcon
						}) : void 0
					}), this.props.pollReward && this.state.displayReward && a.a.createElement(m, {
						amount: this.props.pollReward,
						className: he.a.votingReward,
						subredditId: this.props.subredditId
					}))
				}
			}

			function xe(e, t) {
				return t === f.b.ByVotingPower ? e.resultsByVotingPower : e.resultsByVoters
			}
			const ve = Object(c.c)({
				language: e => e.user.language,
				poll: (e, t) => e.polls.models[t.pollId],
				pollReward: (e, t) => e.polls.rewards[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId],
				resultsByVotingPower: (e, t) => e.polls.results.byVotingPower[t.pollId]
			});
			t.a = Object(i.b)(ve)(ge)
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/selectors/gov.ts");
			const l = Object(a.c)({
				tokenSymbol: c.p
			});
			t.a = Object(r.b)(l)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return n.a.createElement("img", {
					className: e.className,
					src: "".concat(i.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Governance/VotingReward/index.m.less": function(e, t, s) {
			e.exports = {
				amount: "_2uGwXKrmP9OljxIhbSCOjc",
				container: "dVX1qcOidD13L5NRRKOPb",
				pill: "_2tKg0JJT2prOVVIOrtS2JP",
				pillAnim: "_3qV2ZaEJd_k1NSZDxMjK-g",
				token: "_3dLs5lIwl_kKHq589IyKz5",
				tokenRotation: "_1C5oqr8CA_wteJsqqSRq0B"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				chain: "_39yVNiqPz4VPgNZTlpA5fx",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Poll/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/activeModalId.ts"),
				f = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				y = s("./src/reddit/selectors/inFeedChaining.ts"),
				O = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/selectors/monthsToMinutes.ts"),
				C = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				E = s("./src/lib/classNames/index.ts"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = s("./src/reddit/components/CallToActionButton/index.tsx"),
				N = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				I = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				S = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				k = s("./src/reddit/components/Flatlist/index.tsx"),
				T = s("./src/reddit/components/Governance/Proposal/index.tsx"),
				L = s("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				R = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/index.tsx"),
				A = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				V = s("./src/reddit/components/PostContainer/index.tsx"),
				F = s("./src/reddit/components/PostLeftRail/index.tsx"),
				H = s("./src/reddit/components/PostMedia/index.tsx"),
				D = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/i18n/components.tsx"),
				z = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				G = s.n(U);
			var Z = () => n.a.createElement("div", {
					className: G.a.container
				}, n.a.createElement(z.a, {
					className: G.a.pinnedIcon
				}), n.a.createElement("span", {
					className: G.a.metaText
				}, n.a.createElement(W.c, null, "pinned by moderators"))),
				K = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				q = s("./src/reddit/components/PostTitle/index.tsx"),
				Y = s("./src/reddit/components/PostTopLine/index.tsx"),
				J = s("./src/reddit/components/SourceLink/index.tsx"),
				X = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Q = s("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = s("./src/reddit/helpers/isCrosspost.ts"),
				te = s("./src/reddit/helpers/postEvent.ts"),
				se = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(a.a)(C.N, e => e.some(ne.c)),
				ae = Object(a.a)(re, e => e),
				ie = (e, t) => Object(oe.c)(e, {
					experimentName: se.z,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && ae(e, {
							listingKey: s
						})
					}
				});
			var ce = s("./src/reddit/selectors/postFlair.ts"),
				le = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				de = s.n(le),
				pe = s("./src/reddit/components/LargePost/index.m.less"),
				ue = s.n(pe);
			const me = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.N)(e, {
						listingKey: s
					}) : void 0
				},
				be = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(C.C)(e, {
						listingKey: s
					}) : void 0
				},
				he = Object(r.b)(() => Object(a.c)({
					autoplayPref: P.b,
					activeModalId: v.a,
					currentUser: P.i,
					hideNSFWPref: P.z,
					flairStyleTemplate: Q.Q,
					isCurrentUserProfilePost: C.h,
					isFrontpageHome: j.g,
					isM2MHomeRedirectEnabled: f.c,
					language: P.S,
					isActive: C.g,
					isPostChainDismissed: y.c,
					isPostChained: y.d,
					moderatorPermissions: O.i,
					modModeEnabled: Q.O,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					pollResult: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.results.byVoters[s] : null
					},
					post: C.I,
					posts: me,
					postHeightVariant: ie,
					postIds: be,
					showEditFlair: ce.a,
					subredditOrProfile: C.T,
					userIsOp: P.jb
				}), (e, t) => {
					let {
						listingKey: s,
						listingName: o,
						postId: n
					} = t;
					return {
						chainPost: () => {
							o && s && e(Object(p.d)({
								listingKey: s,
								listingName: o,
								postId: n
							}))
						},
						handleVote: t => {
							const s = t === x.a.upvoted ? Object(u.N)(n) : Object(u.o)(n);
							e(s)
						},
						onIgnoreReports: () => e(Object(u.L)(n)),
						onOpenReportsDropdown: t => e(Object(m.g)({
							tooltipId: t
						}))
					}
				}),
				ge = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						chainPost: o,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: m,
						hideNSFWPref: x,
						inSubredditOrProfile: v = !1,
						isCommentsPage: f,
						isCurrentUserProfilePost: y,
						isFrontpage: O,
						isFrontpageHome: j,
						isM2MHomeRedirectEnabled: C,
						isOverlay: P,
						isPostChainDismissed: W,
						isPostChained: z,
						language: U,
						listingKey: G,
						listingName: X,
						moderatorPermissions: Q,
						modModeEnabled: oe,
						onClickPost: ne,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						poll: ie,
						pollResult: ce,
						post: le,
						postHeightVariant: pe,
						scrollerItemRef: me,
						showEditFlair: be,
						subredditOrProfile: he,
						userIsOp: ge
					} = e, xe = !!e.redditStyle || !!e["data-redditstyle"], ve = xe ? void 0 : u, fe = Object(l.a)(Q), ye = oe && fe, Oe = Object(c.a)(Q), je = Object(A.c)(le), Ce = !!le.media && le.media.type === b.n.RTJSON, Pe = ge && Ce, Ee = s ? s - F.a : void 0, we = !!ce && !!Object.keys(ce.options).filter(e => ce.options[e].userSelected).length, _e = !(O && j), Ne = (e => e === se.kb.OnlyTitles)(pe) && !Object(ee.a)(le), Ie = (e => e === se.kb.MediumHeight)(pe) && !Object(ee.a)(le), Se = (e => {
						const {
							post: t,
							postIds: s,
							posts: o
						} = e;
						if (!Object(g.k)(t)) return;
						const n = s && 0 === s.indexOf(t.id),
							r = s && 1 === s.indexOf(t.id),
							a = o && o[1] && Object(g.k)(o[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), ke = n.a.createElement(V.a, {
						className: Object(E.a)(ue.a.container, r, de.a.largeAndMediumPostStyles, de.a.largeAndMediumActiveStyles, Object(d.a)(e), {
							[de.a.mUseRedditTheme]: xe,
							promotedvideolink: le.isSponsored && !(le.media && b.a.has(le.media.type)),
							[ue.a.topCompactPost]: Se && Se.hasTopCompactPostStyles,
							[ue.a.bottomCompactPost]: Se && Se.hasBottomCompactPostStyles
						}),
						isOverlay: P,
						style: Object(d.b)(e.flairStyleTemplate),
						post: le,
						onClick: ne,
						onPostContentClick: o,
						eventFactory: p
					}, n.a.createElement(K.a, {
						model: le,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ve,
						redditStyle: xe
					}), n.a.createElement(B.a, {
						className: Object(E.a)(ue.a.backgroundWrapper, {
							[ue.a.isEvent]: Object(te.a)(le)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ve,
						post: le,
						redditStyle: xe
					}, n.a.createElement(S.a, {
						post: le,
						language: U
					}), Se && Se.showPinnnedHeader && n.a.createElement(Z, null), n.a.createElement(Y.a, {
						className: ue.a.postTopLine,
						hideNSFWPref: x,
						iconClassName: ue.a.postTopLineIcon,
						inSubredditOrProfile: v,
						isCommentsPage: !!f,
						isCompactPinnedPost: !!Se,
						isCurrentUserProfilePost: y,
						isOverlay: !!P,
						language: U,
						post: le,
						shouldShowSubscribeButton: _e,
						showSubreddit: !v && !le.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: he
					}), n.a.createElement(q.c, {
						className: ue.a.postTitle,
						post: le,
						redditStyle: xe,
						size: q.b.Large,
						titleColor: ve && ve.postTitleColor,
						isM2MHomeRedirectEnabled: C,
						isOverlay: P
					}), le.source && !le.isSponsored && n.a.createElement(J.a, {
						className: ue.a.sourceLink,
						post: le
					}), n.a.createElement("div", {
						className: Object(E.a)(ue.a.postMediaWrapper, {
							[ue.a.votedContent]: we
						})
					}, !Se && n.a.createElement(H.a, {
						isListing: !0,
						isMediumHeight: Ie,
						isNotCardView: !!P,
						isTitleOnly: Ne,
						showCentered: !0,
						flairStyleTemplate: ve,
						post: le,
						availableWidth: Ee,
						shouldLoad: m,
						scrollerItemRef: me,
						autoplayPref: t
					})), ie && n.a.createElement(T.a, {
						className: Object(E.a)(ue.a.proposal, {
							[ue.a.mHasNotVoted]: !ce,
							[ue.a.mPollIsClosed]: !!ce && Object(h.e)(ie, ce),
							[ue.a.mGAPoll]: ie.type === h.a.GA
						}),
						pollId: ie.id,
						subredditId: le.belongsTo.id
					}), le.isMeta && !ie && n.a.createElement(L.a, {
						className: ue.a.noProposal
					}), le.source && le.source.url && le.isSponsored && n.a.createElement(w.a, {
						className: ue.a.adLinkWrapper
					}, n.a.createElement($.a, {
						href: le.source.url.replace(i.a.redditUrl, ""),
						isSponsored: le.isSponsored,
						source: le.source
					}, le.source.displayText), le.callToAction && n.a.createElement(_.a, {
						href: le.source.url.replace(i.a.redditUrl, ""),
						isSponsored: le.isSponsored,
						source: le.source
					}, le.callToAction)), oe && fe && je && n.a.createElement(M.a, {
						language: U,
						onIgnoreReports: re,
						reportable: le
					}), n.a.createElement(R.d, {
						postId: le.id
					}), n.a.createElement("div", {
						className: ue.a.flatListContainer
					}, n.a.createElement(N.a, {
						className: ue.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ve,
						model: le,
						onVoteClick: e.handleVote
					}), n.a.createElement(k.c, {
						currentUser: a,
						hasModFlairPerms: Oe,
						hasModPostPerms: fe,
						isLargePost: !0,
						isOverlay: !!P,
						language: U,
						modModeEnabled: oe,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						post: le,
						showEditPost: Pe,
						showEditFlair: be,
						useFlatlistBreakpoints: Object(D.h)({
							editPost: !1,
							save: !ye,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, ke, z && !W && n.a.createElement(I.a, {
						className: ue.a.chain,
						listingKey: G,
						listingName: X,
						postId: le.id
					}))
				});
			t.default = he(Object(X.b)(ge))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				l = s("./src/reddit/components/ModModeReports/index.m.less"),
				d = s.n(l);
			const p = a.a.div("Text", d.a),
				u = a.a.div("Placeholder", d.a),
				m = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(u, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(u, {
							className: t
						}, n.a.createElement(p, null, n.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => n.a.createElement(m, e)
		},
		"./src/reddit/components/Poll/ClosedPoll/index.m.less": function(e, t, s) {
			e.exports = {
				metaData: "_3NpICHyFK-vnQ5_1ZcNtNn",
				option: "_1YnhQ_-VBuRiYmNRfa798"
			}
		},
		"./src/reddit/components/Poll/OpenPoll/index.m.less": function(e, t, s) {
			e.exports = {
				buttonContainer: "_3vyz17dpfnySBJJyBF9IqH",
				loggedOutTooltip: "_3YsZUGQHAWfxmTN8wbFYPd",
				controlRow: "_1YKCRAHpaqTk8N5LBvZ9_A",
				loadingIcon: "_2RQF5_CKHRDPDOJ-TwwXFy",
				metaData: "_28wp7DzoykykevfZW56u3_",
				option: "_3nN8pAR2tWvzxcstONuzMH",
				optionRadio: "_1d_v-dIPu8uuwF0UTaQNmF",
				optionText: "_3grr_S6IK0w2iyC7Ocv5u9"
			}
		},
		"./src/reddit/components/Poll/ResultOption/index.m.less": function(e, t, s) {
			e.exports = {
				bar: "_2mybT6Ih7gVf5B6COa9kd2",
				"m-winning": "_1kOO45KEOZraWGZ-cUgKq-",
				mWinning: "_1kOO45KEOZraWGZ-cUgKq-",
				check: "_3CF-7jBH1KihljB9AqaU04",
				container: "_3uG88YeFdY0J8n4v07jkf9",
				count: "_1VDLlB8Ys3WO8XWSZfhomw",
				percent: "_1Ot3PH7267obvD1i_V2D00",
				hide: "_3G6ZB4S9YZ26E49tE8zLJQ",
				show: "iV9AWdqazd5c9IHXNEQXX",
				text: "_3PfYu2DtunAwYpv53tmvOb"
			}
		},
		"./src/reddit/components/Poll/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3xG1v2CUdyxRoHrB7dgiFw"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				l = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", d({
					className: Object(r.a)(l.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/components/Translated/index.tsx"),
				p = s("./src/reddit/helpers/trackers/postCollection.ts"),
				u = s("./src/reddit/components/PostFollow/index.m.less"),
				m = s.n(u);
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(p.o)({
							postId: s,
							isFollowed: r
						}) : Object(p.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, o = this.state.isHovered, r = s.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && o && (a = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(i.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!s.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(d.a, {
						msgId: a
					}))
				}
			}
			const h = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.s)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.b)(b))
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: d = !1,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: u,
					redditStyle: m
				} = e, b = "upvote-button-".concat(t.id);
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: m
				}, o && n.a.createElement(i.a, {
					isCheckboxSelected: d,
					toggleCheckbox: p
				}), n.a.createElement(a.a, {
					flairStyleTemplate: u,
					model: t,
					onVoteClick: s,
					redditStyle: m,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1SRZN02bVXzHIIMqGwlZD7",
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				eventMeta: "_28_NUs_O8Nh1DCErsNLCHk",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				Container: "BiNC74axuTz66dlnEgicY",
				container: "BiNC74axuTz66dlnEgicY",
				PostOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				postOverflow: "_2tLA78PLrLx5lz5Jj6cR",
				bulkActionCheckbox: "_3X709ZHnDjH0Rwz3pMTv40"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(y);
			const j = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: y,
					inSubredditOrProfile: C,
					isCurrentUserProfilePost: P,
					isCommentsPage: E,
					isCompactPinnedPost: w,
					isOverlay: _,
					language: N,
					post: I,
					publicAwardersEnabled: S,
					shouldShowSubscribeButton: k,
					showCornerOutboundLink: T,
					showSubreddit: L,
					showSubredditIcon: R,
					subredditOrProfile: M
				} = e, A = E && S;
				return n.a.createElement(j, {
					className: t
				}, L && M && n.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, n.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, R && n.a.createElement(p.b, {
					className: Object(r.a)(O.a.subredditIcon, y),
					shouldHideNsfwIcon: o,
					subredditOrProfile: M
				}))), n.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, L && n.a.createElement(c.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), n.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: _ ? d.c.Lightbox : void 0,
					language: N,
					post: I,
					showSub: L,
					subredditOrProfile: M
				}), n.a.createElement(l.a, {
					className: O.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: C,
					language: N,
					isCompactPinnedPost: w,
					post: I,
					tooltipType: _ ? d.c.Lightbox : void 0
				}), M && n.a.createElement(i.a, {
					className: O.a.donationAmount,
					contentId: I.id,
					subredditId: M.id
				}), n.a.createElement(a.a, {
					forceShowAllAwards: E,
					isOverlay: _,
					showAwarders: A,
					tooltipType: _ ? d.c.Lightbox : void 0,
					thing: I
				})), M && L && k && !P && n.a.createElement(m.a, {
					getEventFactory: e => Object(g.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: M.name,
						type: Object(f.e)(M) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), T && n.a.createElement(h.a, {
					className: O.a.OutboundLink,
					isSponsored: I.isSponsored,
					href: Object(v.A)(e.post),
					source: I.source
				}, n.a.createElement(x.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => n.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, n.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, n.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				l = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				p = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (s[o[n]] = e[o[n]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: o,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = m(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), l = ((e, t, s) => {
						const o = !(!t && !s);
						let n = "";
						return n = e ? o ? p.a.mDisabledRedditStyle : p.a.mDisabled : o ? p.a.mActiveRedditStyle : p.a.mActive
					})(o, a, i);
					return n.a.createElement(e, u({
						className: Object(r.a)(p.a.Checkbox, l, s)
					}, c))
				},
				h = b(l.a),
				g = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? h : a.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(r.a)(p.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var o, n = s("./src/config.ts"),
				r = s("./src/reddit/endpoints/governance/requester.ts");

			function a(e) {
				switch (e) {
					case o.Ethereum:
						return "Ethereum Main Network";
					case o.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function i(e, t, s) {
				return Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: s
					}
				})
			}
			async function c(e, t, s) {
				return await Object(r.a)(e, {
					method: "post",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: s
				})
			}
			async function l(e, t, s) {
				return await Object(r.a)(e, {
					method: "delete",
					endpoint: "".concat(n.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(s)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(o || (o = {}))
		},
		"./src/reddit/endpoints/governance/poll.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			}));
			var o = s("./node_modules/lodash/get.js"),
				n = s.n(o),
				r = s("./src/config.ts"),
				a = s("./src/graphql/operations/PollVote.json"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				d = (s("./src/reddit/models/Poll/index.ts"), s("./src/reddit/endpoints/governance/requester.ts"));

			function p(e, t, s, o) {
				return Object(d.a)(e, {
					method: "put",
					endpoint: "".concat(r.a.metaUrl, "/polls/").concat(t, "/").concat(s, "/votes/me/").concat(o)
				})
			}
			const u = (e, t, s) => Object(i.a)(e, Object.assign({}, a, {
				variables: {
					input: {
						postId: t,
						optionId: s
					}
				}
			}));

			function m(e, t) {
				return Object(d.a)(Object(c.a)(e, [l.a]), {
					method: "get",
					endpoint: "".concat(e.apiUrl, "/by_id/").concat(t, ".json")
				}).then(e => e.ok ? Object.assign({}, e, {
					body: {
						title: n()(e.body, ["data", "children", 0, "data", "title"], ""),
						url: n()(e.body, ["data", "children", 0, "data", "permalink"], "")
					}
				}) : e)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var o = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new o.BigNumber(e),
					n = new o.BigNumber(t);
				return s.dividedBy(n).decimalPlaces(2).toString()
			}

			function a(e, t) {
				return Object(n.b)(parseInt(r(e, t), 10))
			}

			function i(e, t) {
				const s = new o.BigNumber(e),
					n = new o.BigNumber(t);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				d = s.n(l);
			const p = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(o.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				g = e => e.isActive ? d.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/GovSmall/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.5,0.2l6.2,3c0.5,0.3,0.6,0.9,0.3,1.4C14.9,4.8,14.6,5,14.2,5H1.8c-0.6,0-1-0.4-1-1 c0-0.4,0.2-0.7,0.5-0.9l6.2-3C7.9,0,8.1,0,8.5,0.2z"
			}), n.a.createElement("path", {
				d: "M2,12h12c0.6,0,1,0.4,1,1l0,0c0,0.6-0.4,1-1,1H2c-0.6,0-1-0.4-1-1l0,0C1,12.4,1.4,12,2,12z"
			}), n.a.createElement("path", {
				d: "M3.8,6h0.5C4.7,6,5,6.3,5,6.8v3.5C5,10.7,4.7,11,4.2,11H3.8C3.3,11,3,10.7,3,10.3V6.8C3,6.3,3.3,6,3.8,6z"
			}), n.a.createElement("path", {
				d: "M7.8,6h0.5C8.7,6,9,6.3,9,6.8v3.5C9,10.7,8.7,11,8.2,11H7.8C7.3,11,7,10.7,7,10.3V6.8 C7,6.3,7.3,6,7.8,6z"
			}), n.a.createElement("path", {
				d: "M11.8,6h0.5C12.7,6,13,6.3,13,6.8v3.5c0,0.4-0.3,0.8-0.8,0.8h-0.5c-0.4,0-0.8-0.3-0.8-0.8V6.8 C11,6.3,11.3,6,11.8,6z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing"]),
				l = e => i.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				d = e => i.has((Object(r.e)(e) || "").toLowerCase()) || c.has((Object(r.e)(e) || "").toLowerCase()) && Object(n.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: o.cb
				}) === o.jb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "p", (function() {
				return y
			})), s.d(t, "n", (function() {
				return O
			})), s.d(t, "k", (function() {
				return j
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "s", (function() {
				return P
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return w
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "m", (function() {
				return N
			})), s.d(t, "r", (function() {
				return I
			}));
			var o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/endpoints/governance/crypto.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/selectors/experiments/pollsGA.ts"),
				i = s("./src/reddit/selectors/postCreations.ts");
			const c = [],
				l = {},
				d = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				p = (e, t) => {
					let {
						subredditId: s
					} = t;
					const o = P(e, {
						subredditId: s
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.harberger ? o.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				u = (e, t) => {
					const s = j(e, t);
					if (s) return s.mainHeader
				},
				m = (e, t) => {
					const s = j(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				b = (e, t) => {
					const s = j(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : l
				},
				h = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				g = (e, t) => {
					if (Object(a.b)(e)) {
						const t = Object(i.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const s = r.d.spPolls(e) || r.d.spKarmaPoints(e),
						o = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (o) {
						const e = !!o.polls && !1 === o.polls.canCreate;
						return s && !e
					}
					return s
				},
				x = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				v = (e, t) => {
					const s = Object(o.m)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || c
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				y = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || d,
				O = (e, t) => {
					const s = _(e, t);
					return s && s.decimals ? "1" + "0".repeat(s.decimals) : "1"
				},
				j = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				P = (e, t) => {
					const s = C(e, t);
					return s && s.walletProvider
				},
				E = (e, t) => {
					const s = P(e, t),
						o = C(e, t);
					return s && s.provider || o && o.provider
				},
				w = (e, t) => {
					const s = E(e, t);
					return s === n.a.Ethereum || s === n.a.Rinkeby
				},
				_ = (e, t) => {
					const s = P(e, t),
						o = E(e, t);
					if (s && !s.inTransition && o === n.a.Stellar) return {
						address: s.extra && s.extra.issuerAddress || "",
						decimals: s.extra && s.extra.decimals || 7,
						symbol: s.extra && s.extra.token || "PHOTON"
					};
					const r = s && s.extra && s.extra.contracts,
						a = r && r.unlocked;
					return a && {
						address: a.address,
						symbol: a.token || "",
						decimals: a.decimals || 18,
						image: a.image
					}
				},
				N = (e, t) => {
					let {
						subredditId: s
					} = t;
					const o = P(e, {
						subredditId: s
					});
					return o && o.extra && o.extra.contracts && o.extra.contracts.subscriptions ? o.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				I = (e, t) => {
					const s = C(e, t);
					return !!s && !!s.walletProvider && !s.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.a879ddf2ecb291b38b92.js.map