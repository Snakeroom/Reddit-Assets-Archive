// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.6aad1a9dc18db6e69bc9.js
// Retrieved at 2/5/2020, 1:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-dom/index.js");
			o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), o("./node_modules/invariant/browser.js");

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(o, s) {
					return a(e[s], t[s])
				})) : e !== t
			}

			function i() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.root || null,
					o = function(e) {
						var t = /^-?\d*\.?\d+(px|%)$/,
							o = (e || "0px").split(/\s+/).map((function(e) {
								if (!t.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return o[1] = o[1] || o[0], o[2] = o[2] || o[0], o[3] = o[3] || o[1], o.join(" ")
					}(e.rootMargin),
					s = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					n = c.keys(),
					r = Array.isArray(n),
					i = 0;
				for (n = r ? n : n[Symbol.iterator]();;) {
					var d;
					if (r) {
						if (i >= n.length) break;
						d = n[i++]
					} else {
						if ((i = n.next()).done) break;
						d = i.value
					}
					var l = d;
					if (![
							[t, l.root],
							[o, l.rootMargin],
							[s, l.thresholds]
						].some((function(e) {
							return a.apply(void 0, e)
						}))) return l
				}
				return null
			}
			var c = new Map,
				d = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return i(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var o = c.get(t);
						if (o) {
							var s = o.values(),
								n = Array.isArray(s),
								r = 0;
							for (s = n ? s : s[Symbol.iterator]();;) {
								var a;
								if (n) {
									if (r >= s.length) break;
									a = s[r++]
								} else {
									if ((r = s.next()).done) break;
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
				l = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var s = t[o];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, o, s) {
						return o && e(t.prototype, o), s && e(t, s), t
					}
				}();

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function u(e, t) {
				e.forEach((function(e) {
					var o = d.findElement(e, t);
					o && o.handleChange(e)
				}))
			}
			var m = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				x = function(e) {
					function t() {
						var o, s;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var n = arguments.length, r = Array(n), a = 0; a < n; a++) r[a] = arguments[a];
						return o = s = p(this, e.call.apply(e, [this].concat(r))), s.handleChange = function(e) {
							s.props.onChange(e), s.props.onlyOnce && e.isIntersecting && s.unobserve()
						}, s.handleNode = function(e) {
							"function" == typeof s.props.children.ref && s.props.children.ref(e), s.currentTarget && e && s.currentTarget !== e && (s.unobserve(), s.shouldResetObserver = !0), s.target = e
						}, p(s, o)
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
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(r.findDOMNode)(this.target)), this.observer = d.create(u, this.options), d.observe(this)
					}, t.prototype.unobserve = function() {
						d.unobserve(this)
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
						this.shouldResetObserver = m.concat(["disabled"]).some((function(o) {
							return a(e[o], t.props[o])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return m.reduce((function(t, o) {
								if (b.hasOwnProperty.call(e.props, o)) {
									var s, n = e.props[o];
									return "root" === o && "[object String]" === b.toString.call(e.props[o]) && (n = document.querySelector(n)), Object.assign({}, t, ((s = {})[o] = n, s))
								}
								return t
							}), {})
						}
					}]), t
				}(n.a.Component);
			x.displayName = "IntersectionObserver";
			var h = x;
			o.d(t, "a", (function() {
				return h
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, t, o, n, r, a) {
					if (a !== s) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
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
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var o = -1, s = null == e ? 0 : e.length; ++o < s;)
					if (!t(e[o], o, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var o = !0;
				return s(e, (function(e, s, n) {
					return o = !!t(e, s, n)
				})), o
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, o) {
				var s;
				return o(e, (function(e, o, n) {
					if (t(e, o, n)) return s = o, !1
				})), s
			}
		},
		"./node_modules/lodash/every.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_arrayEvery.js"),
				n = o("./node_modules/lodash/_baseEvery.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, o) {
				var c = a(e) ? s : n;
				return o && i(e, t, o) && (t = void 0), c(e, r(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseFindKey.js"),
				n = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return s(e, r(t, 3), n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var s = o("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return s(e) + t
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, o) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = o.n(s);
			const r = o("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, o) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = o("./src/reddit/components/CallToActionButton/index.m.less"),
				c = o.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var o = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
				}
				return o
			};
			t.a = e => {
				var {
					className: t
				} = e, o = l(e, ["className"]);
				return n.a.createElement(a.a, d({
					className: Object(r.a)(t, c.a.CallToActionButton, {
						[c.a.mNotCardView]: o.isNotCardView
					})
				}, o))
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, o) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = o("./src/reddit/components/VerticalVotes/index.tsx"),
				c = o("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = o.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var o = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
				}
				return o
			};
			const u = Object(a.a)(e => {
				var {
					className: t
				} = e, o = p(e, ["className"]);
				return n.a.createElement(i.a, l({}, o, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: d.a.customScoreStyles,
					downvoteClassName: Object(i.b)(o) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/higherOrderComponents/makeAsync.tsx"),
				n = o("./src/lib/loadWithRetries/index.ts");
			const r = Object(s.a)({
				getComponent: () => Object(n.a)(() => Promise.all([o.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), o.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~9f2e39dd"), o.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), o.e("InFeedChaining")]).then(o.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				c = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = o("./src/reddit/components/PostFollow/index.tsx"),
				l = o("./src/reddit/helpers/postCollection.ts"),
				p = o("./src/reddit/helpers/postEvent.ts"),
				u = o("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				m = o.n(u);
			const b = i.a.div("EventMetaWrapper", m.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: o,
					language: s,
					post: i
				} = e;
				if (!Object(p.a)(i)) return null;
				const u = i && i.eventInfo,
					x = Object(l.a)(i),
					h = u && Object(a.c)(u.eventStart, u.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(m.a.container, t, {
						[m.a.isCompact]: !!o
					})
				}, n.a.createElement(b, {
					className: m.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					language: s,
					post: i
				}), !x && h && n.a.createElement(d.a, {
					className: m.a.eventFollowButton,
					post: i,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/eventTools/index.ts"),
				a = (o("./node_modules/core-js/modules/es6.regexp.replace.js"), o("./src/app/strings/index.ts")),
				i = o("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = o("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = o("./src/reddit/icons/fonts/Live/index.tsx"),
				u = o("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = o.n(u),
				b = o("./src/lib/lessComponent.tsx");
			const x = b.a.span("PostEventFutureText", m.a),
				h = b.a.span("PostEventPastText", m.a),
				v = b.a.span("PostEventNowText", m.a),
				f = b.a.span("Container", m.a),
				y = b.a.wrapped(l.a, "CalendarIcon", m.a),
				g = b.a.wrapped(p.a, "LiveIcon", m.a),
				O = b.a.div("LoadingState", m.a);
			class P extends s.Component {
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
						post: o
					} = this.props, {
						eventInfo: s
					} = o;
					if (!s) return null;
					const {
						eventEnd: l,
						eventIsLive: p,
						eventStart: u
					} = s, m = Object(r.e)(u, l);
					let b, P;
					if (this.state.mounted || m === r.a.Live) b = function(e, t, o, s) {
						const n = Object(r.e)(e, t),
							d = new Date(e * i.Cb);
						let l;
						if (n === r.a.Live || s) return Object(a.a)(o, "posts.event.inProgress");
						n === r.a.Future ? l = Object(r.d)(e) ? Object(a.a)(o, "posts.event.today") : Object(r.b)(e) >= 5 ? c(d, o) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, o) : n === r.a.Past && (l = Object(r.d)(e) ? Object(a.a)(o, "posts.event.today") : c(d, o));
						const p = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, o);
						return "".concat(l, " @ ").concat(p)
					}(u, l, t, p);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						b = n.a.createElement(O, {
							className: e
						})
					}
					if (p) P = n.a.createElement(v, null, n.a.createElement(g, null), b);
					else if (m === r.a.Future) P = n.a.createElement(x, null, n.a.createElement(y, null), b);
					else {
						if (m !== r.a.Past) return null;
						P = n.a.createElement(h, null, n.a.createElement(y, null), b)
					}
					return n.a.createElement(f, {
						className: e
					}, P)
				}
			}
			t.a = P
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/i18n/components.tsx"),
				i = o("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				c = o.n(i);
			t.a = function(e) {
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, n.a.createElement(a.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Proposal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-Governance-Proposal").then(o.bind(null, "./src/reddit/components/Governance/Proposal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Proposal/index.tsx"
				}
			})
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/LargePost/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			o("./node_modules/core-js/modules/es6.regexp.replace.js"), o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/config.ts"),
				c = o("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = o("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = o("./src/reddit/actions/inFeedChaining.ts"),
				u = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/tooltip.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				x = o("./src/reddit/models/Poll/index.ts"),
				h = o("./src/reddit/models/Post/index.ts"),
				v = o("./src/reddit/models/Vote/index.ts"),
				f = o("./src/reddit/selectors/activeModalId.ts"),
				y = o("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				g = o("./src/reddit/selectors/inFeedChaining.ts"),
				O = o("./src/reddit/selectors/moderatorPermissions.ts"),
				P = o("./src/reddit/selectors/monthsToMinutes.ts"),
				j = o("./src/reddit/selectors/posts.ts"),
				C = o("./src/reddit/selectors/user.ts"),
				E = o("./src/lib/classNames/index.ts"),
				_ = o("./src/reddit/components/AdLinkWrapper/index.tsx"),
				S = o("./src/reddit/components/CallToActionButton/index.tsx"),
				w = o("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				k = o("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				N = o("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = o("./src/reddit/components/Flatlist/index.tsx"),
				I = o("./src/reddit/components/Governance/Proposal/async.ts"),
				L = o("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				A = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				M = o("./src/reddit/components/ModModeReports/index.tsx"),
				F = o("./src/reddit/components/ModModeReports/helpers.ts"),
				R = o("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = o("./src/reddit/components/PostContainer/index.tsx"),
				W = o("./src/reddit/components/PostLeftRail/index.tsx"),
				V = o("./src/reddit/components/PostMedia/index.tsx"),
				H = o("./src/reddit/components/PostOverflowMenu/index.tsx"),
				D = o("./src/reddit/i18n/components.tsx"),
				z = o("./src/reddit/icons/fonts/Sticky/index.tsx"),
				U = o("./src/reddit/components/PostPinnedHeader/index.m.less"),
				K = o.n(U);
			var G = () => n.a.createElement("div", {
					className: K.a.container
				}, n.a.createElement(z.a, {
					className: K.a.pinnedIcon
				}), n.a.createElement("span", {
					className: K.a.metaText
				}, n.a.createElement(D.c, null, "pinned by moderators"))),
				Z = o("./src/reddit/components/PostRailAndVotes/index.tsx"),
				X = o("./src/reddit/components/PostTitle/index.tsx"),
				Y = o("./src/reddit/components/PostTopLine/index.tsx"),
				J = o("./src/reddit/components/SourceLink/index.tsx"),
				q = o("./src/reddit/contexts/InsideOverlay.tsx"),
				Q = o("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				ee = o("./src/reddit/helpers/isCrosspost.ts"),
				te = o("./src/reddit/helpers/postEvent.ts"),
				oe = o("./src/reddit/constants/experiments.ts"),
				se = o("./src/reddit/helpers/chooseVariant/index.ts"),
				ne = o("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(a.a)(j.O, e => e.some(ne.c)),
				ae = Object(a.a)(re, e => e),
				ie = (e, t) => Object(se.c)(e, {
					experimentName: oe.D,
					experimentEligibilitySelector: e => {
						const {
							listingKey: o
						} = t;
						return !!o && ae(e, {
							listingKey: o
						})
					}
				});
			var ce = o("./src/reddit/selectors/postFlair.ts"),
				de = o("./src/reddit/helpers/styles/mixins/index.m.less"),
				le = o.n(de),
				pe = o("./src/reddit/components/LargePost/index.m.less"),
				ue = o.n(pe);
			const me = (e, t) => {
					const {
						listingKey: o
					} = t;
					return o ? Object(j.O)(e, {
						listingKey: o
					}) : void 0
				},
				be = (e, t) => {
					const {
						listingKey: o
					} = t;
					return o ? Object(j.C)(e, {
						listingKey: o
					}) : void 0
				},
				xe = Object(r.b)(() => Object(a.c)({
					autoplayPref: C.b,
					activeModalId: f.a,
					currentUser: C.i,
					hideNSFWPref: C.y,
					flairStyleTemplate: Q.Q,
					isCurrentUserProfilePost: j.h,
					isFrontpageHome: P.g,
					isM2MHomeRedirectEnabled: y.c,
					language: C.P,
					isActive: j.g,
					isPostChainDismissed: g.c,
					isPostChained: g.d,
					moderatorPermissions: O.i,
					modModeEnabled: Q.O,
					poll: (e, t) => {
						const o = e.posts.metaMap[t.postId];
						return o ? e.polls.models[o] : null
					},
					pollResult: (e, t) => {
						const o = e.posts.metaMap[t.postId];
						return o ? e.polls.results.byVoters[o] : null
					},
					post: j.I,
					posts: me,
					postHeightVariant: ie,
					postIds: be,
					showEditFlair: ce.a,
					subredditOrProfile: j.U,
					userIsOp: C.fb
				}), (e, t) => {
					let {
						listingKey: o,
						listingName: s,
						postId: n
					} = t;
					return {
						chainPost: () => {
							s && o && e(Object(p.d)({
								listingKey: o,
								listingName: s,
								postId: n
							}))
						},
						handleVote: t => {
							const o = t === v.a.upvoted ? Object(u.N)(n) : Object(u.o)(n);
							e(o)
						},
						onIgnoreReports: () => e(Object(u.L)(n)),
						onOpenReportsDropdown: t => e(Object(m.g)({
							tooltipId: t
						}))
					}
				}),
				he = n.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: o,
						chainPost: s,
						className: r,
						currentUser: a,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: m,
						hideNSFWPref: v,
						inSubredditOrProfile: f = !1,
						isCommentsPage: y,
						isCurrentUserProfilePost: g,
						isFrontpage: O,
						isFrontpageHome: P,
						isM2MHomeRedirectEnabled: j,
						isOverlay: C,
						isPostChainDismissed: D,
						isPostChained: z,
						language: U,
						listingKey: K,
						listingName: q,
						moderatorPermissions: Q,
						modModeEnabled: se,
						onClickPost: ne,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						poll: ie,
						pollResult: ce,
						post: de,
						postHeightVariant: pe,
						scrollerItemRef: me,
						showEditFlair: be,
						subredditOrProfile: xe,
						userIsOp: he
					} = e, ve = !!e.redditStyle || !!e["data-redditstyle"], fe = ve ? void 0 : u, ye = Object(d.a)(Q), ge = se && ye, Oe = Object(c.a)(Q), Pe = Object(F.c)(de), je = !!de.media && de.media.type === b.n.RTJSON, Ce = he && je, Ee = o ? o - W.a : void 0, _e = !!ce && !!Object.keys(ce.options).filter(e => ce.options[e].userSelected).length, Se = !(O && P), we = (e => e === oe.qb.OnlyTitles)(pe) && !Object(ee.a)(de), ke = (e => e === oe.qb.MediumHeight)(pe) && !Object(ee.a)(de), Ne = (e => {
						const {
							post: t,
							postIds: o,
							posts: s
						} = e;
						if (!Object(h.k)(t)) return;
						const n = o && 0 === o.indexOf(t.id),
							r = o && 1 === o.indexOf(t.id),
							a = s && s[1] && Object(h.k)(s[1]);
						return {
							hasTopCompactPostStyles: n && a,
							hasBottomCompactPostStyles: r,
							showPinnnedHeader: n
						}
					})(e), Te = n.a.createElement(B.a, {
						className: Object(E.a)(ue.a.container, r, le.a.largeAndMediumPostStyles, le.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[le.a.mUseRedditTheme]: ve,
							promotedvideolink: de.isSponsored && !(de.media && b.a.has(de.media.type)),
							[ue.a.topCompactPost]: Ne && Ne.hasTopCompactPostStyles,
							[ue.a.bottomCompactPost]: Ne && Ne.hasBottomCompactPostStyles
						}),
						isOverlay: C,
						style: Object(l.b)(e.flairStyleTemplate),
						post: de,
						onClick: ne,
						onPostContentClick: s,
						eventFactory: p
					}, n.a.createElement(Z.a, {
						model: de,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: fe,
						redditStyle: ve
					}), n.a.createElement(R.a, {
						className: Object(E.a)(ue.a.backgroundWrapper, {
							[ue.a.isEvent]: Object(te.a)(de)
						}),
						"data-click-id": "background",
						flairStyleTemplate: fe,
						post: de,
						redditStyle: ve
					}, n.a.createElement(N.a, {
						post: de,
						language: U
					}), Ne && Ne.showPinnnedHeader && n.a.createElement(G, null), n.a.createElement(Y.a, {
						className: ue.a.postTopLine,
						hideNSFWPref: v,
						iconClassName: ue.a.postTopLineIcon,
						inSubredditOrProfile: f,
						isCommentsPage: !!y,
						isCompactPinnedPost: !!Ne,
						isCurrentUserProfilePost: g,
						isOverlay: !!C,
						language: U,
						post: de,
						shouldShowSubscribeButton: Se,
						showSubreddit: !f && !de.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: xe
					}), n.a.createElement(X.c, {
						className: ue.a.postTitle,
						post: de,
						redditStyle: ve,
						size: X.b.Large,
						titleColor: fe && fe.postTitleColor,
						isM2MHomeRedirectEnabled: j,
						isOverlay: C
					}), de.source && !de.isSponsored && n.a.createElement(J.a, {
						className: ue.a.sourceLink,
						post: de
					}), n.a.createElement("div", {
						className: Object(E.a)(ue.a.postMediaWrapper, {
							[ue.a.votedContent]: _e
						})
					}, !Ne && n.a.createElement(V.a, {
						isListing: !0,
						isMediumHeight: ke,
						isNotCardView: !!C,
						isTitleOnly: we,
						showCentered: !0,
						flairStyleTemplate: fe,
						post: de,
						availableWidth: Ee,
						shouldLoad: m,
						scrollerItemRef: me,
						autoplayPref: t
					})), ie && n.a.createElement(I.a, {
						className: Object(E.a)(ue.a.proposal, {
							[ue.a.mHasNotVoted]: !ce,
							[ue.a.mPollIsClosed]: !!ce && Object(x.e)(ie, ce),
							[ue.a.mGAPoll]: ie.type === x.a.GA
						}),
						pollId: ie.id,
						subredditId: de.belongsTo.id
					}), de.isMeta && !ie && n.a.createElement(L.a, {
						className: ue.a.noProposal
					}), de.source && de.source.url && de.isSponsored && n.a.createElement(_.a, {
						className: ue.a.adLinkWrapper
					}, n.a.createElement($.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.source.displayText), de.callToAction && n.a.createElement(S.a, {
						href: de.source.url.replace(i.a.redditUrl, ""),
						isSponsored: de.isSponsored,
						source: de.source
					}, de.callToAction)), se && ye && Pe && n.a.createElement(M.a, {
						language: U,
						onIgnoreReports: re,
						reportable: de
					}), n.a.createElement(A.d, {
						postId: de.id
					}), n.a.createElement("div", {
						className: ue.a.flatListContainer
					}, n.a.createElement(w.a, {
						className: ue.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: fe,
						model: de,
						onVoteClick: e.handleVote
					}), n.a.createElement(T.c, {
						currentUser: a,
						hasModFlairPerms: Oe,
						hasModPostPerms: ye,
						isLargePost: !0,
						isOverlay: !!C,
						language: U,
						modModeEnabled: se,
						onIgnoreReports: re,
						onOpenReportsDropdown: ae,
						post: de,
						showEditPost: Ce,
						showEditFlair: be,
						useFlatlistBreakpoints: Object(H.h)({
							editPost: !1,
							save: !ge,
							hide: !1,
							report: !1
						})
					}))));
					return n.a.createElement(n.a.Fragment, null, Te, z && !D && n.a.createElement(k.a, {
						className: ue.a.chain,
						listingKey: K,
						listingName: q,
						postId: de.id
					}))
				});
			t.default = xe(Object(q.b)(he))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, o) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/higherOrderComponents/makeAsync.tsx"),
				a = o("./src/lib/lessComponent.tsx"),
				i = o("./src/lib/loadWithRetries/index.ts"),
				c = o("./src/reddit/i18n/components.tsx"),
				d = o("./src/reddit/components/ModModeReports/index.m.less"),
				l = o.n(d);
			const p = a.a.div("Text", l.a),
				u = a.a.div("Placeholder", l.a),
				m = Object(r.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return n.a.createElement(u, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => o.e("ModerationDropdowns").then(o.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, o) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = o("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = o("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = o.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var o = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
				}
				return o
			};
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: o,
					flairStyleTemplate: s,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return n.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, o),
					style: Object(i.c)(s, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, o) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return x
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/actions/post.ts"),
				d = o("./src/reddit/components/TrackingHelper/index.tsx"),
				l = o("./src/reddit/components/Translated/index.tsx"),
				p = o("./src/reddit/helpers/trackers/postCollection.ts"),
				u = o("./src/reddit/components/PostFollow/index.m.less"),
				m = o.n(u);
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: o,
								isFollowed: s
							},
							sendEvent: n
						} = this.props, r = !!s;
						n(e ? Object(p.o)({
							postId: o,
							isFollowed: r
						}) : Object(p.g)({
							postId: o,
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
						post: o
					} = this.props, s = this.state.isHovered, r = o.isFollowed;
					let a = r ? "collection.follow.followed" : "collection.follow.follow";
					return r && s && (a = "collection.follow.unfollow"), n.a.createElement("button", {
						className: Object(i.a)(m.a.collectionFollow, {
							[m.a.isFollowed]: !!o.isFollowed,
							[m.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, n.a.createElement(l.a, {
						msgId: a
					}))
				}
			}
			const x = Object(r.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: o
				} = t;
				return {
					onFollow: () => e(Object(c.s)(o.isSponsored ? o.postId : o.id))
				}
			})(Object(d.b)(b))
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/reddit/components/PostLeftRail/index.tsx"),
				a = o("./src/reddit/components/VerticalVotes/index.tsx"),
				i = o("./src/reddit/controls/Checkbox/index.tsx"),
				c = o("./src/reddit/helpers/isPost.ts"),
				d = o("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: o,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: u,
					redditStyle: m
				} = e, b = "upvote-button-".concat(t.id);
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: m
				}, s && n.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), n.a.createElement(a.a, {
					flairStyleTemplate: u,
					model: t,
					onVoteClick: o,
					redditStyle: m,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/components/AwardBadges/index.tsx"),
				i = o("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = o("./src/reddit/components/PostBadges/index.tsx"),
				l = o("./src/reddit/components/PostTopMeta/index.tsx"),
				p = o("./src/reddit/components/SubredditIcon/index.tsx"),
				u = o("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = o("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = o("./src/reddit/constants/posts.ts"),
				x = o("./src/reddit/controls/OutboundLink/index.tsx"),
				h = o("./src/reddit/helpers/trackers/post.ts"),
				v = o("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = o("./src/reddit/models/Media/index.ts"),
				y = o("./src/reddit/models/Subreddit/index.ts"),
				g = o("./src/reddit/components/PostTopLine/index.m.less"),
				O = o.n(g);
			const P = o("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: o,
					hideNSFWPref: s,
					iconClassName: g,
					inSubredditOrProfile: j,
					isCurrentUserProfilePost: C,
					isCommentsPage: E,
					isCompactPinnedPost: _,
					isOverlay: S,
					language: w,
					post: k,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: I,
					showSubreddit: L,
					showSubredditIcon: A,
					subredditOrProfile: M
				} = e, F = E && N;
				return n.a.createElement(P, {
					className: t
				}, L && M && n.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, n.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, A && n.a.createElement(p.b, {
					className: Object(r.a)(O.a.subredditIcon, g),
					shouldHideNsfwIcon: s,
					subredditOrProfile: M
				}))), n.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, L && n.a.createElement(c.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), n.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: o,
					tooltipType: S ? l.c.Lightbox : void 0,
					language: w,
					post: k,
					showSub: L,
					subredditOrProfile: M
				}), n.a.createElement(d.a, {
					className: O.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: j,
					language: w,
					isCompactPinnedPost: _,
					post: k,
					tooltipType: S ? l.c.Lightbox : void 0
				}), M && n.a.createElement(i.a, {
					className: O.a.donationAmount,
					contentId: k.id,
					subredditId: M.id
				}), n.a.createElement(a.a, {
					forceShowAllAwards: E,
					isOverlay: S,
					showAwarders: F,
					tooltipType: S ? l.c.Lightbox : void 0,
					thing: k
				})), M && L && T && !C && n.a.createElement(m.a, {
					getEventFactory: e => Object(h.f)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: M.name,
						type: Object(y.e)(M) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: k.id
				}, "Subscribe"), I && n.a.createElement(x.a, {
					className: O.a.OutboundLink,
					isSponsored: k.isSponsored,
					href: Object(f.A)(e.post),
					source: k.source
				}, n.a.createElement(v.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, o) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, o) {
			"use strict";
			o("./node_modules/core-js/modules/es6.symbol.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
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
				d = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = o("./src/reddit/controls/Checkbox/index.m.less"),
				p = o.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var o = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (o[s[n]] = e[s[n]])
				}
				return o
			};
			const b = e => t => {
					const {
						className: o,
						disabled: s,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = m(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, o) => {
						const s = !(!t && !o);
						let n = "";
						return n = e ? s ? p.a.mDisabledRedditStyle : p.a.mDisabled : s ? p.a.mActiveRedditStyle : p.a.mActive
					})(s, a, i);
					return n.a.createElement(e, u({
						className: Object(r.a)(p.a.Checkbox, d, o)
					}, c))
				},
				x = b(d.a),
				h = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? h : e.isCheckboxSelected ? x : a.a;
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return u
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return x
			})), o.d(t, "a", (function() {
				return h
			})), o.d(t, "d", (function() {
				return v
			}));
			var s = o("./node_modules/polished/dist/polished.es.js"),
				n = o("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = o("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = o("./src/reddit/models/Theme/index.ts"),
				c = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = o("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = o.n(d);
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
				b = e => Object(s.o)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.6aad1a9dc18db6e69bc9.js.map