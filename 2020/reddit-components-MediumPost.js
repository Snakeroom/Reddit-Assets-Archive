// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.c5d28c9db9278ee80557.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./node_modules/react-dom/index.js");
			r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), r("./node_modules/invariant/browser.js");

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, o) {
					return i(e[o], t[o])
				})) : e !== t
			}

			function a() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = e.root || null,
					r = function(e) {
						var t = /^-?\d*\.?\d+(px|%)$/,
							r = (e || "0px").split(/\s+/).map((function(e) {
								if (!t.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return r[1] = r[1] || r[0], r[2] = r[2] || r[0], r[3] = r[3] || r[1], r.join(" ")
					}(e.rootMargin),
					o = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					s = d.keys(),
					n = Array.isArray(s),
					a = 0;
				for (s = n ? s : s[Symbol.iterator]();;) {
					var c;
					if (n) {
						if (a >= s.length) break;
						c = s[a++]
					} else {
						if ((a = s.next()).done) break;
						c = a.value
					}
					var l = c;
					if (![
							[t, l.root],
							[r, l.rootMargin],
							[o, l.thresholds]
						].some((function(e) {
							return i.apply(void 0, e)
						}))) return l
				}
				return null
			}
			var d = new Map,
				c = function() {
					function e() {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, t) {
						return a(t) || new IntersectionObserver(e, t)
					}, e.findElement = function(e, t) {
						var r = d.get(t);
						if (r) {
							var o = r.values(),
								s = Array.isArray(o),
								n = 0;
							for (o = s ? o : o[Symbol.iterator]();;) {
								var i;
								if (s) {
									if (n >= o.length) break;
									i = o[n++]
								} else {
									if ((n = o.next()).done) break;
									i = n.value
								}
								var a = i;
								if (a.target === e.target) return a
							}
						}
						return null
					}, e.observe = function(e) {
						var t = void 0;
						d.has(e.observer) ? t = d.get(e.observer) : (t = new Set, d.set(e.observer, t)), t.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (d.has(e.observer)) {
							var t = d.get(e.observer);
							t.delete(e) && (t.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), d.delete(e.observer)))
						}
					}, e.clear = function() {
						d.clear()
					}, e.count = function() {
						return d.size
					}, e
				}(),
				l = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var o = t[r];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, r, o) {
						return r && e(t.prototype, r), o && e(t, o), t
					}
				}();

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function u(e, t) {
				e.forEach((function(e) {
					var r = c.findElement(e, t);
					r && r.handleChange(e)
				}))
			}
			var m = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				h = function(e) {
					function t() {
						var r, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var s = arguments.length, n = Array(s), i = 0; i < s; i++) n[i] = arguments[i];
						return r = o = p(this, e.call.apply(e, [this].concat(n))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, p(o, r)
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
						this.target = (e = this.target, s.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(n.findDOMNode)(this.target)), this.observer = c.create(u, this.options), c.observe(this)
					}, t.prototype.unobserve = function() {
						c.unobserve(this)
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
						this.shouldResetObserver = m.concat(["disabled"]).some((function(r) {
							return i(e[r], t.props[r])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, s.a.cloneElement(s.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return m.reduce((function(t, r) {
								if (b.hasOwnProperty.call(e.props, r)) {
									var o, s = e.props[r];
									return "root" === r && "[object String]" === b.toString.call(e.props[r]) && (s = document.querySelector(s)), Object.assign({}, t, ((o = {})[r] = s, o))
								}
								return t
							}), {})
						}
					}]), t
				}(s.a.Component);
			h.displayName = "IntersectionObserver";
			var x = h;
			r.d(t, "a", (function() {
				return x
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}
			e.exports = function() {
				function e(e, t, r, s, n, i) {
					if (i !== o) {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return r.checkPropTypes = s, r.PropTypes = r, r
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, t) {
			e.exports = function(e, t) {
				for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var o = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return o(e, (function(e, o, s) {
					return r = !!t(e, o, s)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var o = r("./node_modules/lodash/_arrayEvery.js"),
				s = r("./node_modules/lodash/_baseEvery.js"),
				n = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var d = i(e) ? o : s;
				return r && a(e, t, r) && (t = void 0), d(e, n(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var o = r("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return o(e) + t
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = r.n(o);
			const n = r("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = n
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, r) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = r("./src/reddit/components/CallToActionButton/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var r = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]])
				}
				return r
			};
			t.a = e => {
				var {
					className: t
				} = e, r = l(e, ["className"]);
				return s.a.createElement(i.a, c({
					className: Object(n.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: r.isNotCardView
					})
				}, r))
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, r) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/components/VerticalVotes/index.tsx"),
				d = r("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				c = r.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var r = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]])
				}
				return r
			};
			const u = Object(i.a)(e => {
				var {
					className: t
				} = e, r = p(e, ["className"]);
				return s.a.createElement(a.a, l({}, r, {
					className: Object(n.a)(c.a.horizontalVotes, t),
					scoreClassName: c.a.customScoreStyles,
					downvoteClassName: Object(a.b)(r) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, r) {
			"use strict";
			var o = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const n = Object(o.a)({
				getComponent: () => Object(s.a)(() => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), r.e("InFeedChaining~SearchResults~SubredditTopContent~TopWeekPostsDiscoveryUnit"), r.e("InFeedChaining")]).then(r.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				a = r("./src/reddit/components/Thumbnail/index.tsx"),
				d = r("./src/reddit/constants/posts.ts"),
				c = r("./src/reddit/helpers/trackers/post.ts"),
				l = r("./src/reddit/models/Subreddit/index.ts"),
				p = r("./src/reddit/components/MediumPost/index.m.less"),
				u = r.n(p);
			t.a = e => {
				let {
					crosspost: t,
					post: r,
					forceShowNSFW: o,
					redditStyle: p,
					shouldShowSubscribeButton: m,
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(u.a.thumbnailContainer, {
						[u.a.mShowingButtonOrOverflow]: m
					})
				}, s.a.createElement("div", {
					className: u.a.thumbnailContainerRow
				}, m && b && s.a.createElement(i.a, {
					className: u.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.e)(b) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), s.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: p,
					forceShowNSFW: o,
					templatePlaceholderImage: h
				}))
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			r("./node_modules/core-js/modules/es6.regexp.replace.js");
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				a = r("./src/config.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/inFeedChaining.ts"),
				l = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = r("./src/reddit/components/CallToActionButton/index.tsx"),
				b = r("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = r("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				x = r("./src/reddit/components/FlairWrapper/index.tsx"),
				f = r("./src/reddit/components/Flatlist/index.tsx"),
				y = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = r("./src/reddit/components/ModModeReports/index.tsx"),
				v = r("./src/reddit/components/ModModeReports/helpers.ts"),
				O = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = r("./src/reddit/components/PostContainer/index.tsx"),
				C = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				P = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				j = r("./src/reddit/components/PostTitle/index.tsx"),
				k = r("./src/reddit/components/PostTopLine/index.tsx"),
				E = r("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = r("./src/reddit/components/SourceLink/index.tsx"),
				w = r("./src/reddit/contexts/InsideOverlay.tsx"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				T = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				I = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				M = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = r("./src/reddit/models/Vote/index.ts"),
				B = r("./src/reddit/selectors/experiments/categories.ts"),
				F = r("./src/reddit/selectors/inFeedChaining.ts"),
				W = r("./src/reddit/selectors/moderatorPermissions.ts"),
				V = r("./src/reddit/selectors/postFlair.ts"),
				z = r("./src/reddit/selectors/posts.ts"),
				D = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				G = r.n(Z),
				H = r("./src/reddit/components/MediumPost/index.m.less"),
				Y = r.n(H);
			const X = Object(n.b)(() => Object(i.c)({
				crosspost: z.c,
				currentUser: D.i,
				flairStyleTemplate: N.P,
				hideNSFWPref: D.y,
				isActive: z.g,
				isCurrentUserProfilePost: z.h,
				isLoggedIn: D.G,
				isPostChainDismissed: F.c,
				isPostChained: F.d,
				language: D.P,
				moderatorPermissions: W.i,
				modModeEnabled: N.N,
				post: z.I,
				showEditFlair: V.a,
				showMedia: N.r,
				isInCategoriesExperiment: B.a,
				subredditOrProfile: z.U
			}), (e, t) => {
				let {
					listingKey: r,
					listingName: o,
					postId: s
				} = t;
				return {
					chainPost: () => {
						o && r && e(Object(c.d)({
							listingKey: r,
							listingName: o,
							postId: s
						}))
					},
					handleVote: t => t === R.a.upvoted ? e(Object(l.Q)(s)) : e(Object(l.r)(s)),
					onIgnoreReports: () => e(Object(l.O)(s)),
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				}
			});
			t.default = X(Object(w.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: o,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: p = !1,
					isCheckboxSelected: w,
					isCommentsPage: N,
					isCurrentUserProfilePost: R,
					isFrontpage: B,
					isLoggedIn: F,
					isOverlay: W,
					isPostChainDismissed: V,
					isPostChained: z,
					language: D,
					listingKey: Z,
					listingName: H,
					moderatorPermissions: X,
					modModeEnabled: Q,
					onClickPost: q,
					onIgnoreReports: J,
					onOpenReportsDropdown: K,
					post: $,
					redditStyle: ee,
					showBulkActionCheckbox: te,
					showEditFlair: re,
					showMedia: oe,
					sendEvent: se,
					subredditOrProfile: ne,
					toggleCheckbox: ie
				} = e, ae = ee ? void 0 : c, de = Object(L.a)(X), ce = Q && de, le = Object(A.a)(X), pe = Object(v.c)($), ue = Object(I.a)($), me = p && !oe, be = me && !!$.source && !o, he = !(B && F || R), xe = s.a.createElement(S.a, {
					className: Object(d.a)(Y.a.container, r, G.a.largeAndMediumPostStyles, G.a.largeAndMediumActiveStyles, Object(M.a)(e), {
						[G.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: W,
					style: Object(M.b)(e.flairStyleTemplate),
					post: $,
					onClick: q,
					onPostContentClick: t,
					eventFactory: i
				}, s.a.createElement(P.a, {
					model: $,
					handleVote: e.handleVote,
					showBulkActionCheckbox: te,
					isCheckboxSelected: w,
					toggleCheckbox: ie,
					flairStyleTemplate: ae,
					redditStyle: ee
				}), s.a.createElement(O.a, {
					className: Y.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: ae,
					post: $,
					redditStyle: ee
				}, s.a.createElement("article", {
					className: Y.a.mainBody
				}, s.a.createElement("div", {
					className: Y.a.content,
					"data-click-id": "body"
				}, s.a.createElement(k.a, {
					className: Y.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: Y.a.postTopLineIcon,
					inSubredditOrProfile: p,
					isCommentsPage: N,
					isCurrentUserProfilePost: R,
					isOverlay: !!W,
					language: D,
					post: $,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: be,
					showSubreddit: !p && !$.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ne
				}), s.a.createElement(j.c, {
					className: Y.a.postTitle,
					post: $,
					redditStyle: ee,
					size: j.b.Large,
					titleColor: ae && ae.postTitleColor,
					isOverlay: W
				}), N && ($.flair && $.flair.length > 0 || e.isInCategoriesExperiment) && s.a.createElement(x.a, {
					className: N ? Y.a.leftPadding : null,
					disableFlair: !N,
					post: $,
					sendEvent: se,
					showCategoryTag: e.isInCategoriesExperiment && N
				}), $.source && !$.isSponsored && !o && s.a.createElement(_.a, {
					className: Y.a.sourceLink,
					isCommentsPage: N,
					post: $
				})), !me && ue && s.a.createElement(U.a, {
					crosspost: o ? $ : void 0,
					hasModPostPerms: de,
					isCommentsPage: N,
					isOverlay: W,
					modModeEnabled: Q,
					post: o || $,
					redditStyle: ee,
					shouldShowSubscribeButton: he && !p,
					subredditOrProfile: ne,
					templatePlaceholderImage: ae && ae.postPlaceholderImage
				})), $.source && $.source.url && $.isSponsored && s.a.createElement(u.a, {
					className: Y.a.adLinkWrapper
				}, s.a.createElement(T.a, {
					href: $.source.url.replace(a.a.redditUrl, ""),
					isSponsored: $.isSponsored,
					source: $.source
				}, $.source.displayText), $.callToAction && s.a.createElement(m.a, {
					href: $.source.url.replace(a.a.redditUrl, ""),
					isSponsored: $.isSponsored,
					source: $.source,
					isNotCardView: !0
				}, $.callToAction)), Q && de && pe && s.a.createElement(g.a, {
					className: Y.a.modModeReports,
					language: D,
					onIgnoreReports: J,
					reportable: $
				}), s.a.createElement(y.d, {
					postId: $.id
				}), s.a.createElement("div", {
					className: Y.a.flatlistContainer
				}, s.a.createElement(b.a, {
					className: Y.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: ae,
					redditStyle: ee,
					model: $,
					onVoteClick: e.handleVote
				}), s.a.createElement(f.c, {
					currentUser: n,
					hasModFlairPerms: le,
					hasModPostPerms: de,
					isOverlay: !!W,
					language: D,
					modModeEnabled: Q,
					onIgnoreReports: J,
					onOpenReportsDropdown: K,
					post: $,
					showEditFlair: re,
					tooltipType: W ? E.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(C.h)({
						editPost: !ce,
						save: !ce,
						hide: !1,
						report: !1
					})
				}))));
				return s.a.createElement(s.a.Fragment, null, xe, z && !V && s.a.createElement(h.a, {
					className: Y.a.chain,
					listingKey: Z,
					listingName: H,
					postId: $.id
				}))
			}))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, r) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/higherOrderComponents/makeAsync.tsx"),
				i = r("./src/lib/lessComponent.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts"),
				d = r("./src/reddit/i18n/components.tsx"),
				c = r("./src/reddit/components/ModModeReports/index.m.less"),
				l = r.n(c);
			const p = i.a.div("Text", l.a),
				u = i.a.div("Placeholder", l.a),
				m = Object(n.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return s.a.createElement(u, {
							className: t
						})
					},
					getComponent: () => Object(a.a)(() => r.e("ModerationDropdowns").then(r.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return s.a.createElement(u, {
							className: t
						}, s.a.createElement(p, null, s.a.createElement(d.c, null, "Loading reports…")))
					}
				});
			t.a = e => s.a.createElement(m, e)
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = r("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = r.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var r = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]])
				}
				return r
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: r,
					flairStyleTemplate: o,
					onClick: i,
					post: d,
					redditStyle: u,
					theme: m
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return s.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, r),
					style: Object(a.c)(o, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/reddit/components/PostLeftRail/index.tsx"),
				i = r("./src/reddit/components/VerticalVotes/index.tsx"),
				a = r("./src/reddit/controls/Checkbox/index.tsx"),
				d = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: r,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: u,
					redditStyle: m
				} = e, b = "upvote-button-".concat(t.id);
				return s.a.createElement(n.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: m
				}, o && s.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), s.a.createElement(i.a, {
					flairStyleTemplate: u,
					model: t,
					onVoteClick: r,
					redditStyle: m,
					upvoteTooltipId: b
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/AwardBadges/index.tsx"),
				a = r("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				d = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = r("./src/reddit/components/PostBadges/index.tsx"),
				l = r("./src/reddit/components/PostTopMeta/index.tsx"),
				p = r("./src/reddit/components/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = r("./src/reddit/constants/posts.ts"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = r("./src/reddit/models/Media/index.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				v = r("./src/reddit/components/PostTopLine/index.m.less"),
				O = r.n(v);
			const S = r("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideNSFWPref: o,
					iconClassName: v,
					inSubredditOrProfile: C,
					isCurrentUserProfilePost: P,
					isCommentsPage: j,
					isCompactPinnedPost: k,
					isOverlay: E,
					language: _,
					post: w,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: I,
					showSubreddit: A,
					showSubredditIcon: L,
					subredditOrProfile: M
				} = e, R = j && N;
				return s.a.createElement(S, {
					className: t
				}, A && M && s.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, s.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: M.url
				}, L && s.a.createElement(p.b, {
					className: Object(n.a)(O.a.subredditIcon, v),
					shouldHideNsfwIcon: o,
					subredditOrProfile: M
				}))), s.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, A && s.a.createElement(d.h, {
					type: w.belongsTo.type,
					id: w.belongsTo.id
				}), s.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: E ? l.c.Lightbox : void 0,
					language: _,
					post: w,
					showSub: A,
					subredditOrProfile: M
				}), s.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: M ? M.displayText : null,
					inSubredditOrProfile: C,
					language: _,
					isCompactPinnedPost: k,
					post: w,
					tooltipType: E ? l.c.Lightbox : void 0
				}), M && s.a.createElement(a.a, {
					className: O.a.donationAmount,
					contentId: w.id,
					subredditId: M.id
				}), s.a.createElement(i.a, {
					forceShowAllAwards: j,
					isOverlay: E,
					showAwarders: R,
					tooltipType: E ? l.c.Lightbox : void 0,
					thing: w
				})), M && A && T && !P && s.a.createElement(m.a, {
					getEventFactory: e => Object(x.f)(w.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: M.name,
						type: Object(g.e)(M) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: w.id
				}, "Subscribe"), I && s.a.createElement(h.a, {
					className: O.a.OutboundLink,
					isSponsored: w.isSponsored,
					href: Object(y.A)(e.post),
					source: w.source
				}, s.a.createElement(f.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
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
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => s.a.createElement("svg", a({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), s.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, s.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, s.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = r("./src/reddit/controls/Checkbox/index.m.less"),
				p = r.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var r = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (r[o[s]] = e[o[s]])
				}
				return r
			};
			const b = e => t => {
					const {
						className: r,
						disabled: o,
						redditStyle: i,
						"data-redditstyle": a
					} = t, d = m(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, r) => {
						const o = !(!t && !r);
						let s = "";
						return s = e ? o ? p.a.mDisabledRedditStyle : p.a.mDisabled : o ? p.a.mActiveRedditStyle : p.a.mActive
					})(o, i, a);
					return s.a.createElement(e, u({
						className: Object(n.a)(p.a.Checkbox, c, r)
					}, d))
				},
				h = b(c.a),
				x = b(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? x : e.isCheckboxSelected ? h : i.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(n.a)(p.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var o = r("./src/reddit/constants/thumbnails.ts");

			function s(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === o.a.SELF || e.thumbnail.url === o.a.NSFW)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "d", (function() {
				return f
			}));
			var o = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = r.n(c);
			const p = {},
				u = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				m = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
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
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(n.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var o = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(n.D)(e) || o.i.Treatment1 === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.c
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.c5d28c9db9278ee80557.js.map