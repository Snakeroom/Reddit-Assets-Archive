// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.dde54d69f4887e51ca5c.js
// Retrieved at 1/27/2020, 1:40:18 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-dom/index.js");
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
					r = c.keys(),
					n = Array.isArray(r),
					i = 0;
				for (r = n ? r : r[Symbol.iterator]();;) {
					var d;
					if (n) {
						if (i >= r.length) break;
						d = r[i++]
					} else {
						if ((i = r.next()).done) break;
						d = i.value
					}
					var l = d;
					if (![
							[t, l.root],
							[s, l.rootMargin],
							[o, l.thresholds]
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
						var s = c.get(t);
						if (s) {
							var o = s.values(),
								r = Array.isArray(o),
								n = 0;
							for (o = r ? o : o[Symbol.iterator]();;) {
								var a;
								if (r) {
									if (n >= o.length) break;
									a = o[n++]
								} else {
									if ((n = o.next()).done) break;
									a = n.value
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
						for (var s = 0; s < t.length; s++) {
							var o = t[s];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, s, o) {
						return s && e(t.prototype, s), o && e(t, o), t
					}
				}();

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function m(e, t) {
				e.forEach((function(e) {
					var s = d.findElement(e, t);
					s && s.handleChange(e)
				}))
			}
			var p = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				h = function(e) {
					function t() {
						var s, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var r = arguments.length, n = Array(r), a = 0; a < r; a++) n[a] = arguments[a];
						return s = o = u(this, e.call.apply(e, [this].concat(n))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, u(o, s)
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
						this.target = (e = this.target, r.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(n.findDOMNode)(this.target)), this.observer = d.create(m, this.options), d.observe(this)
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
						this.shouldResetObserver = p.concat(["disabled"]).some((function(s) {
							return a(e[s], t.props[s])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, r.a.cloneElement(r.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return p.reduce((function(t, s) {
								if (b.hasOwnProperty.call(e.props, s)) {
									var o, r = e.props[s];
									return "root" === s && "[object String]" === b.toString.call(e.props[s]) && (r = document.querySelector(r)), Object.assign({}, t, ((o = {})[s] = r, o))
								}
								return t
							}), {})
						}
					}]), t
				}(r.a.Component);
			h.displayName = "IntersectionObserver";
			var x = h;
			s.d(t, "a", (function() {
				return x
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, s, r, n, a) {
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
				return s.checkPropTypes = r, s.PropTypes = s, s
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
				return o(e, (function(e, o, r) {
					return s = !!t(e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/every.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayEvery.js"),
				r = s("./node_modules/lodash/_baseEvery.js"),
				n = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/isArray.js"),
				i = s("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? o : r;
				return s && i(e, t, s) && (t = void 0), c(e, n(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return o(e) + t
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
				r = s.n(o);
			const n = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = n
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			t.a = e => {
				var {
					className: t
				} = e, s = l(e, ["className"]);
				return r.a.createElement(a.a, d({
					className: Object(n.a)(t, c.a.CallToActionButton, {
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const m = Object(a.a)(e => {
				var {
					className: t
				} = e, s = u(e, ["className"]);
				return r.a.createElement(i.a, l({}, s, {
					className: Object(n.a)(d.a.horizontalVotes, t),
					scoreClassName: d.a.customScoreStyles,
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const n = Object(o.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), s.e("CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~Mod~20a7252d"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				c = s("./src/reddit/constants/posts.ts"),
				d = s("./src/reddit/helpers/trackers/post.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				u = s("./src/reddit/components/MediumPost/index.m.less"),
				m = s.n(u);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: o,
					redditStyle: u,
					shouldShowSubscribeButton: p,
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return r.a.createElement("div", {
					className: Object(n.a)(m.a.thumbnailContainer, {
						[m.a.mShowingButtonOrOverflow]: p
					})
				}, r.a.createElement("div", {
					className: m.a.thumbnailContainerRow
				}, p && b && r.a.createElement(a.a, {
					className: m.a.subscribeButton,
					getEventFactory: e => Object(d.f)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.e)(b) ? c.a.PROFILE : c.a.SUBREDDIT
					},
					postId: s.id
				})), r.a.createElement(i.a, {
					crosspost: t,
					post: s,
					redditStyle: u,
					forceShowNSFW: o,
					templatePlaceholderImage: h
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				modModeReports: "_3RpVs_MuohyWxfQ8DMI1hz",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				chain: "vLpzNkGe1yVXuRgtBVQWk",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/inFeedChaining.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/CallToActionButton/index.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				x = s("./src/reddit/components/FlairWrapper/index.tsx"),
				f = s("./src/reddit/components/Flatlist/index.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				O = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				P = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopLine/index.tsx"),
				k = s("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = s("./src/reddit/components/SourceLink/index.tsx"),
				I = s("./src/reddit/contexts/InsideOverlay.tsx"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				w = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				T = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				M = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				A = s("./src/reddit/models/Vote/index.ts"),
				B = s("./src/reddit/selectors/experiments/categories.ts"),
				F = s("./src/reddit/selectors/experiments/m2mHomeRedirect.ts"),
				V = s("./src/reddit/selectors/inFeedChaining.ts"),
				W = s("./src/reddit/selectors/moderatorPermissions.ts"),
				z = s("./src/reddit/selectors/monthsToMinutes.ts"),
				D = s("./src/reddit/selectors/postFlair.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/user.ts"),
				G = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				X = s.n(Z),
				J = s("./src/reddit/components/MediumPost/index.m.less"),
				K = s.n(J);
			const Q = Object(n.b)(() => Object(a.c)({
				crosspost: H.c,
				currentUser: U.i,
				flairStyleTemplate: N.Q,
				hideNSFWPref: U.z,
				isActive: H.g,
				isCurrentUserProfilePost: H.h,
				isFrontpageHome: z.g,
				isM2MHomeRedirectEnabled: F.c,
				isPostChainDismissed: V.c,
				isPostChained: V.d,
				language: U.S,
				moderatorPermissions: W.i,
				modModeEnabled: N.O,
				post: H.I,
				showEditFlair: D.a,
				showMedia: N.r,
				isInCategoriesExperiment: B.a,
				subredditOrProfile: H.T
			}), (e, t) => {
				let {
					listingKey: s,
					listingName: o,
					postId: r
				} = t;
				return {
					chainPost: () => {
						o && s && e(Object(d.d)({
							listingKey: s,
							listingName: o,
							postId: r
						}))
					},
					handleVote: t => t === A.a.upvoted ? e(Object(l.N)(r)) : e(Object(l.o)(r)),
					onIgnoreReports: () => e(Object(l.L)(r)),
					onOpenReportsDropdown: t => e(Object(u.g)({
						tooltipId: t
					}))
				}
			});
			t.default = Q(Object(I.b)(e => {
				const {
					chainPost: t,
					className: s,
					crosspost: o,
					currentUser: n,
					eventFactory: a,
					flairStyleTemplate: d,
					hideNSFWPref: l,
					inSubredditOrProfile: u = !1,
					isCheckboxSelected: I,
					isCommentsPage: N,
					isCurrentUserProfilePost: A,
					isFrontpage: B,
					isFrontpageHome: F,
					isM2MHomeRedirectEnabled: V,
					isOverlay: W,
					isPostChainDismissed: z,
					isPostChained: D,
					language: H,
					listingKey: U,
					listingName: Z,
					moderatorPermissions: J,
					modModeEnabled: Q,
					onClickPost: q,
					onIgnoreReports: Y,
					onOpenReportsDropdown: $,
					post: ee,
					redditStyle: te,
					showBulkActionCheckbox: se,
					showEditFlair: oe,
					showMedia: re,
					sendEvent: ne,
					subredditOrProfile: ae,
					toggleCheckbox: ie
				} = e, ce = te ? void 0 : d, de = Object(M.a)(J), le = Q && de, ue = Object(L.a)(J), me = Object(g.c)(ee), pe = Object(T.a)(ee), be = u && !re, he = be && !!ee.source && !o, xe = !(B && F || A), fe = r.a.createElement(S.a, {
					className: Object(c.a)(K.a.container, s, X.a.largeAndMediumPostStyles, X.a.largeAndMediumActiveStyles, Object(R.a)(e), {
						[X.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: W,
					style: Object(R.b)(e.flairStyleTemplate),
					post: ee,
					onClick: q,
					onPostContentClick: t,
					eventFactory: a
				}, r.a.createElement(j.a, {
					model: ee,
					handleVote: e.handleVote,
					showBulkActionCheckbox: se,
					isCheckboxSelected: I,
					toggleCheckbox: ie,
					flairStyleTemplate: ce,
					redditStyle: te
				}), r.a.createElement(O.a, {
					className: K.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ce,
					post: ee,
					redditStyle: te
				}, r.a.createElement("article", {
					className: K.a.mainBody
				}, r.a.createElement("div", {
					className: K.a.content,
					"data-click-id": "body"
				}, r.a.createElement(C.a, {
					className: K.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: K.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: N,
					isCurrentUserProfilePost: A,
					isOverlay: !!W,
					language: H,
					post: ee,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: he,
					showSubreddit: !u && !ee.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ae
				}), r.a.createElement(P.c, {
					className: K.a.postTitle,
					post: ee,
					redditStyle: te,
					size: P.b.Large,
					titleColor: ce && ce.postTitleColor,
					isM2MHomeRedirectEnabled: V,
					isOverlay: W
				}), N && (ee.flair && ee.flair.length > 0 || e.isInCategoriesExperiment) && r.a.createElement(x.a, {
					className: N ? K.a.leftPadding : null,
					disableFlair: !N,
					post: ee,
					sendEvent: ne,
					showCategoryTag: e.isInCategoriesExperiment && N
				}), ee.source && !ee.isSponsored && !o && r.a.createElement(_.a, {
					className: K.a.sourceLink,
					isCommentsPage: N,
					post: ee
				})), !be && pe && r.a.createElement(G.a, {
					crosspost: o ? ee : void 0,
					hasModPostPerms: de,
					isCommentsPage: N,
					isOverlay: W,
					modModeEnabled: Q,
					post: o || ee,
					redditStyle: te,
					shouldShowSubscribeButton: xe && !u,
					subredditOrProfile: ae,
					templatePlaceholderImage: ce && ce.postPlaceholderImage
				})), ee.source && ee.source.url && ee.isSponsored && r.a.createElement(m.a, {
					className: K.a.adLinkWrapper
				}, r.a.createElement(w.a, {
					href: ee.source.url.replace(i.a.redditUrl, ""),
					isSponsored: ee.isSponsored,
					source: ee.source
				}, ee.source.displayText), ee.callToAction && r.a.createElement(p.a, {
					href: ee.source.url.replace(i.a.redditUrl, ""),
					isSponsored: ee.isSponsored,
					source: ee.source,
					isNotCardView: !0
				}, ee.callToAction)), Q && de && me && r.a.createElement(y.a, {
					className: K.a.modModeReports,
					language: H,
					onIgnoreReports: Y,
					reportable: ee
				}), r.a.createElement(v.d, {
					postId: ee.id
				}), r.a.createElement("div", {
					className: K.a.flatlistContainer
				}, r.a.createElement(b.a, {
					className: K.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ce,
					redditStyle: te,
					model: ee,
					onVoteClick: e.handleVote
				}), r.a.createElement(f.c, {
					currentUser: n,
					hasModFlairPerms: ue,
					hasModPostPerms: de,
					isOverlay: !!W,
					language: H,
					modModeEnabled: Q,
					onIgnoreReports: Y,
					onOpenReportsDropdown: $,
					post: ee,
					showEditFlair: oe,
					tooltipType: W ? k.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(E.h)({
						editPost: !le,
						save: !le,
						hide: !1,
						report: !1
					})
				}))));
				return r.a.createElement(r.a.Fragment, null, fe, D && !z && r.a.createElement(h.a, {
					className: K.a.chain,
					listingKey: U,
					listingName: Z,
					postId: ee.id
				}))
			}))
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
				r = s.n(o),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const u = a.a.div("Text", l.a),
				m = a.a.div("Placeholder", l.a),
				p = Object(n.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(m, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return r.a.createElement(m, {
							className: t
						}, r.a.createElement(u, null, r.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => r.a.createElement(p, e)
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
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
					redditStyle: m,
					theme: p
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(n.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(o, e),
					onClick: a
				}, b), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/i18n/components.tsx"),
				i = s("./src/reddit/i18n/utils.ts"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				b = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				y = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				E = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				j = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				P = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				I = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				N = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				w = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(w);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", L({
					className: T.a.removalReason
				}, e), e.children),
				R = Object(d.e)("posts.archived"),
				A = Object(d.e)("modTools.commentsLocked"),
				B = Object(d.e)("modTools.moderatorOf"),
				F = Object(d.e)("modTools.stickiedPost"),
				V = Object(d.e)("modTools.pinnedPost"),
				W = (e, t, s) => {
					const o = "PostBadges--".concat(e, "--").concat(t);
					return s ? "".concat(o, "--").concat(s) : o
				},
				z = Object(x.t)({
					isProfilePostListing: x.I,
					isSubreddit: x.J,
					pageLayer: e => e
				}),
				D = Object(c.c)({
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(O.r)(e, {
							postId: s.id
						})
					},
					modModeEnabled: x.O
				}),
				H = Object(n.b)(D, (e, t) => ({
					onHideTooltip: () => e(Object(m.h)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(m.f)({
						tooltipId: t
					}))
				}));
			t.a = z(H(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: n,
					inSubredditOrProfile: c,
					isCompactPinnedPost: d,
					isPinned: m,
					isProfilePostListing: x,
					language: O,
					modModeEnabled: w,
					onHideTooltip: z,
					onOpenRemovalReasonModal: D,
					onShowTooltip: H,
					post: U,
					tooltipType: G
				} = e;
				const Z = {
						caretOnTop: !1
					},
					X = U.isRemoved && !U.modRemovalReason && !U.modNote && U.belongsTo.type === h.a.SUBREDDIT,
					J = W("Approve", U.id, G),
					K = W("Archived", U.id, G),
					Q = W("Automod", U.id, G),
					q = W("Lock", U.id, G),
					Y = W("Mod", U.id, G),
					$ = W("Remove", U.id, G),
					ee = W("Report", U.id, G),
					te = W("Spam", U.id, G),
					se = W("Sticky", U.id, G),
					oe = W("Pinned", U.id, G);
				return r.a.createElement("div", {
					className: t
				}, c && s && U.distinguishType === u.B.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(N.a, {
					className: T.a.modIcon,
					desc: B(O, {
						displayText: s
					}),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: Y,
					text: B(O, {
						displayText: s
					})
				}, Z))), U.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					className: T.a.archivedIcon,
					desc: R(O),
					id: K,
					onMouseEnter: H(K),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: K,
					text: R(O)
				}, Z))), U.isLocked && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					className: T.a.lockIcon,
					desc: A(O),
					id: q,
					onMouseEnter: H(q),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: q,
					text: A(O)
				}, Z))), n && Object(g.k)(U) && !d && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: T.a.stickyIcon,
					desc: F(O),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: se,
					text: F(O)
				}, Z))), x && m && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					className: T.a.stickyIcon,
					desc: V(O),
					id: oe,
					onMouseEnter: H(oe),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: oe,
					text: V(O)
				}, Z))), (U.isApproved || U.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					className: T.a.approveIcon,
					desc: Object(v.a)(O, U),
					id: J,
					onMouseEnter: H(J),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: J,
					text: Object(v.a)(O, U)
				}, Z))), Object(f.a)(U) && r.a.createElement(o.Fragment, null, r.a.createElement(P.a, {
					className: T.a.removeIcon,
					desc: Object(v.c)(O, U),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: z
				}), X && r.a.createElement(b.a, {
					className: T.a.addRemovalReason,
					onClick: D,
					text: Object(i.c)("Add a removal reason")
				}), (U.modRemovalReason || U.modNote) && r.a.createElement(M, {
					onMouseEnter: H($),
					onMouseLeave: z
				}, r.a.createElement(a.c, null, "Removal reason")), r.a.createElement(p.c, L({
					tooltipId: $,
					text: Object(v.c)(O, U)
				}, Z))), U.bannedBy && U.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(k.a, {
					className: T.a.spamIcon,
					desc: Object(v.e)(O, U),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: te,
					text: Object(v.e)(O, U)
				}, Z))), ("AutoModerator" === U.approvedBy || "AutoModerator" === U.bannedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(I.a, {
					className: Object(l.a)(T.a.automoderator, !!U.bannedBy && T.a.isRemoved),
					desc: Object(v.b)(O),
					id: Q,
					onMouseEnter: H(Q),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: Q,
					text: Object(v.b)(O)
				}, Z))), Object(y.a)(U) && !w && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					className: T.a.reportIcon,
					desc: Object(v.d)(O, U.numReports),
					id: ee,
					onMouseEnter: H(ee),
					onMouseLeave: z
				}), r.a.createElement(p.c, L({
					tooltipId: ee,
					text: Object(v.d)(O, U.numReports)
				}, Z))))
			}))
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: u = (() => {}),
					flairStyleTemplate: m,
					redditStyle: p
				} = e, b = "upvote-button-".concat(t.id);
				return r.a.createElement(n.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: p
				}, o && r.a.createElement(i.a, {
					isCheckboxSelected: l,
					toggleCheckbox: u
				}), r.a.createElement(a.a, {
					flairStyleTemplate: m,
					model: t,
					onVoteClick: s,
					redditStyle: p,
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				i = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				x = s("./src/reddit/helpers/trackers/post.ts"),
				f = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostTopLine/index.m.less"),
				O = s.n(g);
			const S = s("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: s,
					hideNSFWPref: o,
					iconClassName: g,
					inSubredditOrProfile: E,
					isCurrentUserProfilePost: j,
					isCommentsPage: P,
					isCompactPinnedPost: C,
					isOverlay: k,
					language: _,
					post: I,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: w,
					showCornerOutboundLink: T,
					showSubreddit: L,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, A = P && N;
				return r.a.createElement(S, {
					className: t
				}, L && R && r.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, r.a.createElement(m.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && r.a.createElement(u.b, {
					className: Object(n.a)(O.a.subredditIcon, g),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), r.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, L && r.a.createElement(c.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), r.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: s,
					tooltipType: k ? l.c.Lightbox : void 0,
					language: _,
					post: I,
					showSub: L,
					subredditOrProfile: R
				}), r.a.createElement(d.a, {
					className: O.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: E,
					language: _,
					isCompactPinnedPost: C,
					post: I,
					tooltipType: k ? l.c.Lightbox : void 0
				}), R && r.a.createElement(i.a, {
					className: O.a.donationAmount,
					contentId: I.id,
					subredditId: R.id
				}), r.a.createElement(a.a, {
					forceShowAllAwards: P,
					isOverlay: k,
					showAwarders: A,
					tooltipType: k ? l.c.Lightbox : void 0,
					thing: I
				})), R && L && w && !j && r.a.createElement(p.a, {
					getEventFactory: e => Object(x.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(y.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), T && r.a.createElement(h.a, {
					className: O.a.OutboundLink,
					isSponsored: I.isSponsored,
					href: Object(v.A)(e.post),
					source: I.source
				}, r.a.createElement(f.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SourceLink/index.m.less"),
				l = s.n(d),
				u = s("./src/lib/lessComponent.tsx");
			const m = u.a.wrapped(c.a, "OutboundLinkIcon", l.a),
				p = u.a.div("SourceLinkWrapper", l.a);
			t.a = e => {
				const {
					className: t,
					post: s,
					isCommentsPage: o
				} = e, {
					source: c,
					isSponsored: d
				} = s;
				return c ? r.a.createElement(p, {
					className: Object(n.a)({
						[l.a["m-comment"]]: o
					}, t)
				}, r.a.createElement(i.a, {
					href: c.url,
					isSponsored: d,
					source: c
				}, Object(a.a)(s), r.a.createElement(m, null))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/app/strings/index.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				m = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				p = s.n(m),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (s[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const v = h.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, o = f(e, ["small", "shouldReverseColor"]);
					const n = s ? c.i : c.f;
					return r.a.createElement(n, x({}, o, {
						className: Object(b.a)(o.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", p.a),
				y = h.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: o
					} = e, n = f(e, ["small", "belongsToType", "shouldReverseColor"]);
					const a = o ? c.f : c.i;
					return r.a.createElement(a, x({}, n, {
						className: Object(b.a)(n.className, {
							[p.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", p.a),
				g = h.a.wrapped(d.a, "Checkmark", p.a),
				O = h.a.wrapped(l.a, "Plus", p.a),
				S = h.a.div("ButtonSpacer", p.a);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: o,
							onSubscribe: a,
							onUnsubscribe: i,
							postId: c,
							sendEvent: d,
							small: l = !1,
							subscribeReminderTooltipId: m,
							subscribeTooltipId: h,
							userIsSubscriber: E,
							doNotHideOtherSubscribeButtons: j,
							getEventFactory: P,
							onSubscriptionsRequested: C
						} = e,
						k = f(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "subscribeReminderTooltipId", "subscribeTooltipId", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						_ = this.state.isHovered;
					let I = E ? Object(n.a)(o, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribed")) : Object(n.a)(o, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".subscribe"));
					return E && _ && (I = Object(n.a)(o, "subscriptions.".concat(Object(u.a)({
						type: s.type
					}), ".unsubscribe"))), E ? this.state.hasJustSubscribed || j ? r.a.createElement(y, x({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l,
							[p.a.unsubscribeButtonHoverStyles]: !l
						}),
						onClick: this.onClick,
						small: l,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, k), l && r.a.createElement(g, null), !l && !_ && r.a.createElement(g, null), !l && I) : l ? null : r.a.createElement(S, null) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v, x({
						className: Object(b.a)(t, {
							[p.a.isLarge]: !l
						}),
						onClick: this.onClick,
						small: l
					}, k, {
						id: "subscribe-button-".concat(c),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), r.a.createElement(O, null), !l && I))
				}
			}
			t.a = Object(i.a)(Object(a.b)(E))
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
			var c = e => r.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), r.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, r.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, r.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
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
					var r = 0;
					for (o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (s[o[r]] = e[o[r]])
				}
				return s
			};
			const b = e => t => {
					const {
						className: s,
						disabled: o,
						redditStyle: a,
						"data-redditstyle": i
					} = t, c = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const o = !(!t && !s);
						let r = "";
						return r = e ? o ? u.a.mDisabledRedditStyle : u.a.mDisabled : o ? u.a.mActiveRedditStyle : u.a.mActive
					})(o, a, i);
					return r.a.createElement(e, m({
						className: Object(n.a)(u.a.Checkbox, d, s)
					}, c))
				},
				h = b(d.a),
				x = b(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? h : a.a;
				return r.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, r.a.createElement(t, {
					className: Object(n.a)(u.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/thumbnails.ts");

			function r(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === o.a.SELF || e.thumbnail.url === o.a.NSFW)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(n.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("archived"), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(n.G)(e) || o.i.Treatment1 === Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.c
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.dde54d69f4887e51ca5c.js.map