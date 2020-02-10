// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.445e0477696fbef01a1c.js
// Retrieved at 2/10/2020, 1:40:17 PM by Reddit Dataminer v1.0.0
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

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function p(e, t) {
				e.forEach((function(e) {
					var r = c.findElement(e, t);
					r && r.handleChange(e)
				}))
			}
			var m = ["root", "rootMargin", "threshold"],
				h = Object.prototype,
				b = function(e) {
					function t() {
						var r, o;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var s = arguments.length, n = Array(s), i = 0; i < s; i++) n[i] = arguments[i];
						return r = o = u(this, e.call.apply(e, [this].concat(n))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, u(o, r)
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
						this.target = (e = this.target, s.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(n.findDOMNode)(this.target)), this.observer = c.create(p, this.options), c.observe(this)
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
								if (h.hasOwnProperty.call(e.props, r)) {
									var o, s = e.props[r];
									return "root" === r && "[object String]" === h.toString.call(e.props[r]) && (s = document.querySelector(s)), Object.assign({}, t, ((o = {})[r] = s, o))
								}
								return t
							}), {})
						}
					}]), t
				}(s.a.Component);
			b.displayName = "IntersectionObserver";
			var f = b;
			r.d(t, "a", (function() {
				return f
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, r) {
			"use strict";
			var o = r("./src/higherOrderComponents/makeAsync.tsx"),
				s = r("./src/lib/loadWithRetries/index.ts");
			const n = Object(o.a)({
				getComponent: () => Object(s.a)(() => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), r.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), r.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), r.e("InFeedChaining")]).then(r.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
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
				u = r("./src/reddit/components/MediumPost/index.m.less"),
				p = r.n(u);
			t.a = e => {
				let {
					crosspost: t,
					post: r,
					forceShowNSFW: o,
					redditStyle: u,
					shouldShowSubscribeButton: m,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: m
					})
				}, s.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, m && h && s.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.e)(h) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), s.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: u,
					forceShowNSFW: o,
					templatePlaceholderImage: b
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
				u = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = r("./src/reddit/components/CallToActionButton/index.tsx"),
				h = r("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = r("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				f = r("./src/reddit/components/FlairWrapper/index.tsx"),
				g = r("./src/reddit/components/Flatlist/index.tsx"),
				x = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModModeReports/index.tsx"),
				v = r("./src/reddit/components/ModModeReports/helpers.ts"),
				P = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = r("./src/reddit/components/PostContainer/index.tsx"),
				O = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				E = r("./src/reddit/components/PostTitle/index.tsx"),
				_ = r("./src/reddit/components/PostTopLine/index.tsx"),
				w = r("./src/reddit/components/PostTopMeta/index.tsx"),
				j = r("./src/reddit/components/SourceLink/index.tsx"),
				T = r("./src/reddit/contexts/InsideOverlay.tsx"),
				I = r("./src/reddit/contexts/PageLayer/index.tsx"),
				N = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				M = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				R = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				A = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				L = r("./src/reddit/models/Vote/index.ts"),
				F = r("./src/reddit/selectors/experiments/categories.ts"),
				B = r("./src/reddit/selectors/inFeedChaining.ts"),
				D = r("./src/reddit/selectors/moderatorPermissions.ts"),
				U = r("./src/reddit/selectors/postFlair.ts"),
				W = r("./src/reddit/selectors/posts.ts"),
				V = r("./src/reddit/selectors/user.ts"),
				z = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				G = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				H = r.n(G),
				K = r("./src/reddit/components/MediumPost/index.m.less"),
				Z = r.n(K);
			const J = Object(n.b)(() => Object(i.c)({
				crosspost: W.c,
				currentUser: V.i,
				flairStyleTemplate: I.P,
				hideNSFWPref: V.y,
				isActive: W.g,
				isCurrentUserProfilePost: W.h,
				isLoggedIn: V.G,
				isPostChainDismissed: B.c,
				isPostChained: B.d,
				language: V.P,
				moderatorPermissions: D.i,
				modModeEnabled: I.N,
				post: W.I,
				showEditFlair: U.a,
				showMedia: I.r,
				isInCategoriesExperiment: F.a,
				subredditOrProfile: W.U
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
					handleVote: t => t === L.a.upvoted ? e(Object(l.Q)(s)) : e(Object(l.r)(s)),
					onIgnoreReports: () => e(Object(l.O)(s)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				}
			});
			t.default = J(Object(T.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: o,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: u = !1,
					isCheckboxSelected: T,
					isCommentsPage: I,
					isCurrentUserProfilePost: L,
					isFrontpage: F,
					isLoggedIn: B,
					isOverlay: D,
					isPostChainDismissed: U,
					isPostChained: W,
					isTopicPage: V,
					language: G,
					listingKey: K,
					listingName: J,
					moderatorPermissions: q,
					modModeEnabled: X,
					onClickPost: Y,
					onIgnoreReports: Q,
					onOpenReportsDropdown: $,
					post: ee,
					redditStyle: te,
					showBulkActionCheckbox: re,
					showEditFlair: oe,
					showMedia: se,
					sendEvent: ne,
					subredditOrProfile: ie,
					toggleCheckbox: ae
				} = e, de = te ? void 0 : c, ce = Object(R.a)(q), le = X && ce, ue = Object(M.a)(q), pe = Object(v.c)(ee), me = Object(k.a)(ee), he = u && !se, be = he && !!ee.source && !o, fe = !(F && B || L), ge = s.a.createElement(S.a, {
					className: Object(d.a)(Z.a.container, r, H.a.largeAndMediumPostStyles, H.a.largeAndMediumActiveStyles, Object(A.a)(e), {
						[H.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: D,
					style: Object(A.b)(e.flairStyleTemplate),
					post: ee,
					onClick: Y,
					onPostContentClick: t,
					eventFactory: i
				}, s.a.createElement(C.a, {
					model: ee,
					handleVote: e.handleVote,
					showBulkActionCheckbox: re,
					isCheckboxSelected: T,
					toggleCheckbox: ae,
					flairStyleTemplate: de,
					redditStyle: te
				}), s.a.createElement(P.a, {
					className: Z.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: de,
					post: ee,
					redditStyle: te
				}, s.a.createElement("article", {
					className: Z.a.mainBody
				}, s.a.createElement("div", {
					className: Z.a.content,
					"data-click-id": "body"
				}, s.a.createElement(_.a, {
					className: Z.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: Z.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: I,
					isCurrentUserProfilePost: L,
					isOverlay: !!D,
					isTopicPage: !!V,
					language: G,
					post: ee,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: be,
					showSubreddit: !u && !ee.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ie
				}), s.a.createElement(E.c, {
					className: Z.a.postTitle,
					post: ee,
					redditStyle: te,
					size: E.b.Large,
					titleColor: de && de.postTitleColor,
					isOverlay: D
				}), I && (ee.flair && ee.flair.length > 0 || e.isInCategoriesExperiment) && s.a.createElement(f.a, {
					className: I ? Z.a.leftPadding : null,
					disableFlair: !I,
					post: ee,
					sendEvent: ne,
					showCategoryTag: e.isInCategoriesExperiment && I
				}), ee.source && !ee.isSponsored && !o && s.a.createElement(j.a, {
					className: Z.a.sourceLink,
					isCommentsPage: I,
					post: ee
				})), !he && me && s.a.createElement(z.a, {
					crosspost: o ? ee : void 0,
					hasModPostPerms: ce,
					isCommentsPage: I,
					isOverlay: D,
					modModeEnabled: X,
					post: o || ee,
					redditStyle: te,
					shouldShowSubscribeButton: fe && !u,
					subredditOrProfile: ie,
					templatePlaceholderImage: de && de.postPlaceholderImage
				})), ee.source && ee.source.url && ee.isSponsored && s.a.createElement(p.a, {
					className: Z.a.adLinkWrapper
				}, s.a.createElement(N.a, {
					href: ee.source.url.replace(a.a.redditUrl, ""),
					isSponsored: ee.isSponsored,
					source: ee.source
				}, ee.source.displayText), ee.callToAction && s.a.createElement(m.a, {
					href: ee.source.url.replace(a.a.redditUrl, ""),
					isSponsored: ee.isSponsored,
					source: ee.source,
					isNotCardView: !0
				}, ee.callToAction)), X && ce && pe && s.a.createElement(y.a, {
					className: Z.a.modModeReports,
					language: G,
					onIgnoreReports: Q,
					reportable: ee
				}), s.a.createElement(x.d, {
					postId: ee.id
				}), s.a.createElement("div", {
					className: Z.a.flatlistContainer
				}, s.a.createElement(h.a, {
					className: Z.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: de,
					redditStyle: te,
					model: ee,
					onVoteClick: e.handleVote
				}), s.a.createElement(g.c, {
					currentUser: n,
					hasModFlairPerms: ue,
					hasModPostPerms: ce,
					isOverlay: !!D,
					language: G,
					modModeEnabled: X,
					onIgnoreReports: Q,
					onOpenReportsDropdown: $,
					post: ee,
					showEditFlair: oe,
					tooltipType: D ? w.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(O.h)({
						editPost: !le,
						save: !le,
						hide: !1,
						report: !1
					})
				}))));
				return s.a.createElement(s.a.Fragment, null, ge, W && !U && s.a.createElement(b.a, {
					className: Z.a.chain,
					listingKey: K,
					listingName: J,
					postId: ee.id
				}))
			}))
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
					toggleCheckbox: u = (() => {}),
					flairStyleTemplate: p,
					redditStyle: m
				} = e, h = "upvote-button-".concat(t.id);
				return s.a.createElement(n.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: m
				}, o && s.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: u
				}), s.a.createElement(i.a, {
					flairStyleTemplate: p,
					model: t,
					onVoteClick: r,
					redditStyle: m,
					upvoteTooltipId: h
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
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				p = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/helpers/trackers/post.ts"),
				g = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = r("./src/reddit/models/Media/index.ts"),
				y = r("./src/reddit/models/Subreddit/index.ts"),
				v = r("./src/reddit/components/PostTopLine/index.m.less"),
				P = r.n(v);
			const S = r("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideNSFWPref: o,
					iconClassName: v,
					inSubredditOrProfile: O,
					isCommentsPage: C,
					isCompactPinnedPost: E,
					isCurrentUserProfilePost: _,
					isOverlay: w,
					isTopicPage: j,
					language: T,
					post: I,
					publicAwardersEnabled: N,
					shouldShowSubscribeButton: k,
					showCornerOutboundLink: M,
					showSubreddit: R,
					showSubredditIcon: A,
					subredditOrProfile: L
				} = e, F = C && N, B = j;
				return s.a.createElement(S, {
					className: t
				}, R && L && s.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, s.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: L.url
				}, A && s.a.createElement(u.b, {
					className: Object(n.a)(P.a.subredditIcon, v),
					shouldHideNsfwIcon: o,
					subredditOrProfile: L
				}))), s.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, R && s.a.createElement(d.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), s.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: w ? l.c.Lightbox : void 0,
					language: T,
					post: I,
					showSub: R,
					subredditOrProfile: L
				}), s.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: L ? L.displayText : null,
					inSubredditOrProfile: O,
					language: T,
					isCompactPinnedPost: E,
					post: I,
					tooltipType: w ? l.c.Lightbox : void 0
				}), L && s.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: I.id,
					subredditId: L.id
				}), !B && s.a.createElement(i.a, {
					forceShowAllAwards: C,
					isOverlay: w,
					showAwarders: F,
					tooltipType: w ? l.c.Lightbox : void 0,
					thing: I
				})), L && R && k && !_ && s.a.createElement(m.a, {
					getEventFactory: e => Object(f.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: L.name,
						type: Object(y.e)(L) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), M && s.a.createElement(b.a, {
					className: P.a.OutboundLink,
					isSponsored: I.isSponsored,
					href: Object(x.A)(e.post),
					source: I.source
				}, s.a.createElement(g.a, {
					className: P.a.outboundLinkIcon
				})))
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
//# sourceMappingURL=reddit-components-MediumPost.445e0477696fbef01a1c.js.map