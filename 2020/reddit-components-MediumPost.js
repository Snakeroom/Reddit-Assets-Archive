// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.8edc9714e2ca759fcfdb.js
// Retrieved at 3/10/2020, 11:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-dom/index.js");
			r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), r("./node_modules/invariant/browser.js");

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, s) {
					return i(e[s], t[s])
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
					s = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					o = d.keys(),
					n = Array.isArray(o),
					a = 0;
				for (o = n ? o : o[Symbol.iterator]();;) {
					var c;
					if (n) {
						if (a >= o.length) break;
						c = o[a++]
					} else {
						if ((a = o.next()).done) break;
						c = a.value
					}
					var l = c;
					if (![
							[t, l.root],
							[r, l.rootMargin],
							[s, l.thresholds]
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
							var s = r.values(),
								o = Array.isArray(s),
								n = 0;
							for (s = o ? s : s[Symbol.iterator]();;) {
								var i;
								if (o) {
									if (n >= s.length) break;
									i = s[n++]
								} else {
									if ((n = s.next()).done) break;
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
							var s = t[r];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, r, s) {
						return r && e(t.prototype, r), s && e(t, s), t
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
						var r, s;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
						return r = s = u(this, e.call.apply(e, [this].concat(n))), s.handleChange = function(e) {
							s.props.onChange(e), s.props.onlyOnce && e.isIntersecting && s.unobserve()
						}, s.handleNode = function(e) {
							"function" == typeof s.props.children.ref && s.props.children.ref(e), s.currentTarget && e && s.currentTarget !== e && (s.unobserve(), s.shouldResetObserver = !0), s.target = e
						}, u(s, r)
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
						this.target = (e = this.target, o.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(n.findDOMNode)(this.target)), this.observer = c.create(p, this.options), c.observe(this)
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
						return this.currentTarget = this.target, o.a.cloneElement(o.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return m.reduce((function(t, r) {
								if (h.hasOwnProperty.call(e.props, r)) {
									var s, o = e.props[r];
									return "root" === r && "[object String]" === h.toString.call(e.props[r]) && (o = document.querySelector(o)), Object.assign({}, t, ((s = {})[r] = o, s))
								}
								return t
							}), {})
						}
					}]), t
				}(o.a.Component);
			b.displayName = "IntersectionObserver";
			var f = b;
			r.d(t, "a", (function() {
				return f
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}
			e.exports = function() {
				function e(e, t, r, o, n, i) {
					if (i !== s) {
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
				return r.checkPropTypes = o, r.PropTypes = r, r
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
				for (var r = -1, s = null == e ? 0 : e.length; ++r < s;)
					if (!t(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var r = !0;
				return s(e, (function(e, s, o) {
					return r = !!t(e, s, o)
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, r) {
			var s = r("./node_modules/lodash/_arrayEvery.js"),
				o = r("./node_modules/lodash/_baseEvery.js"),
				n = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/isArray.js"),
				a = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, r) {
				var d = i(e) ? s : o;
				return r && a(e, t, r) && (t = void 0), d(e, n(t, 3))
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var s = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/higherOrderComponents/makeAsync.tsx"),
				o = r("./src/lib/loadWithRetries/index.ts");
			const n = Object(s.a)({
				getComponent: () => Object(o.a)(() => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), r.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), r.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), r.e("InFeedChaining")]).then(r.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
					forceShowNSFW: s,
					redditStyle: u,
					shouldShowSubscribeButton: m,
					subredditOrProfile: h,
					templatePlaceholderImage: b
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: m
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, m && h && o.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(l.e)(h) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), o.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: u,
					forceShowNSFW: s,
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
				f = r("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				g = r("./src/reddit/components/FlairWrapper/index.tsx"),
				x = r("./src/reddit/components/Flatlist/index.tsx"),
				y = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				v = r("./src/reddit/components/ModModeReports/index.tsx"),
				P = r("./src/reddit/components/ModModeReports/helpers.ts"),
				O = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = r("./src/reddit/components/PostContainer/index.tsx"),
				C = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_ = r("./src/reddit/components/PostTitle/index.tsx"),
				w = r("./src/reddit/components/PostTopLine/index.tsx"),
				j = r("./src/reddit/components/PostTopMeta/index.tsx"),
				T = r("./src/reddit/components/SourceLink/index.tsx"),
				I = r("./src/reddit/contexts/InsideOverlay.tsx"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				k = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				A = r("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = r("./src/reddit/models/Vote/index.ts"),
				D = r("./src/reddit/selectors/experiments/categories.ts"),
				V = r("./src/reddit/selectors/inFeedChaining.ts"),
				W = r("./src/reddit/selectors/moderatorPermissions.ts"),
				U = r("./src/reddit/selectors/postFlair.ts"),
				z = r("./src/reddit/selectors/posts.ts"),
				G = r("./src/reddit/selectors/user.ts"),
				H = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				K = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = r.n(K),
				J = r("./src/reddit/components/MediumPost/index.m.less"),
				X = r.n(J);
			const Y = Object(n.b)(() => Object(i.c)({
				crosspost: z.c,
				currentUser: G.i,
				flairStyleTemplate: N.P,
				hideNSFWPref: G.y,
				isActive: z.h,
				isCurrentUserProfilePost: z.i,
				isLoggedIn: G.G,
				isPostChainDismissed: V.c,
				isPostChained: V.d,
				language: G.O,
				moderatorPermissions: W.i,
				modModeEnabled: N.N,
				post: z.M,
				showEditFlair: U.a,
				showMedia: N.r,
				isInCategoriesExperiment: D.a,
				subredditOrProfile: z.Y
			}), (e, t) => {
				let {
					listingKey: r,
					listingName: s,
					postId: o
				} = t;
				return {
					chainPost: () => {
						s && r && e(Object(c.d)({
							listingKey: r,
							listingName: s,
							postId: o
						}))
					},
					handleVote: t => t === B.a.upvoted ? e(Object(l.X)(o)) : e(Object(l.u)(o)),
					onIgnoreReports: () => e(Object(l.V)(o)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				}
			});
			t.default = Y(Object(I.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: s,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: u = !1,
					isCheckboxSelected: I,
					isCommentsPage: N,
					isCurrentUserProfilePost: B,
					isFrontpage: D,
					isLoggedIn: V,
					isOverlay: W,
					isPostChainDismissed: U,
					isPostChained: z,
					isTopicPage: G,
					language: K,
					listingKey: J,
					listingName: Y,
					moderatorPermissions: q,
					modModeEnabled: Q,
					onClickPost: $,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					redditStyle: se,
					showBulkActionCheckbox: oe,
					showEditFlair: ne,
					showMedia: ie,
					sendEvent: ae,
					subredditOrProfile: de,
					toggleCheckbox: ce
				} = e, le = se ? void 0 : c, ue = Object(L.a)(q), pe = Q && ue, me = Object(R.a)(q), he = Object(A.a)(q), be = Object(P.c)(re), fe = Object(M.a)(re), ge = u && !ie, xe = ge && !!re.source && !s, ye = !(D && V || G || B), ve = o.a.createElement(S.a, {
					className: Object(d.a)(X.a.container, r, Z.a.largeAndMediumPostStyles, Z.a.largeAndMediumActiveStyles, Object(F.a)(e), {
						[Z.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: W,
					style: Object(F.b)(e.flairStyleTemplate),
					post: re,
					onClick: $,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(E.a, {
					model: re,
					handleVote: e.handleVote,
					showBulkActionCheckbox: oe,
					isCheckboxSelected: I,
					toggleCheckbox: ce,
					flairStyleTemplate: le,
					redditStyle: se
				}), o.a.createElement(O.a, {
					className: X.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: le,
					post: re,
					redditStyle: se
				}, o.a.createElement(f.a, {
					language: K,
					post: re
				}), o.a.createElement("article", {
					className: X.a.mainBody
				}, o.a.createElement("div", {
					className: X.a.content,
					"data-click-id": "body"
				}, o.a.createElement(w.a, {
					className: X.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: X.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: N,
					isCurrentUserProfilePost: B,
					isOverlay: !!W,
					isTopicPage: !!G,
					language: K,
					post: re,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: xe,
					showSubreddit: !u && !re.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: de
				}), o.a.createElement(_.c, {
					className: X.a.postTitle,
					post: re,
					redditStyle: se,
					size: _.b.Large,
					titleColor: le && le.postTitleColor,
					isOverlay: W
				}), N && (re.flair && re.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(g.a, {
					className: N ? X.a.leftPadding : null,
					disableFlair: !N,
					post: re,
					sendEvent: ae,
					showCategoryTag: e.isInCategoriesExperiment && N
				}), re.source && !re.isSponsored && !s && o.a.createElement(T.a, {
					className: X.a.sourceLink,
					isCommentsPage: N,
					post: re
				})), !ge && fe && o.a.createElement(H.a, {
					crosspost: s ? re : void 0,
					hasModPostPerms: ue,
					isCommentsPage: N,
					isOverlay: W,
					modModeEnabled: Q,
					post: s || re,
					redditStyle: se,
					shouldShowSubscribeButton: ye && !u,
					subredditOrProfile: de,
					templatePlaceholderImage: le && le.postPlaceholderImage
				})), re.source && re.source.url && re.isSponsored && o.a.createElement(p.a, {
					className: X.a.adLinkWrapper
				}, o.a.createElement(k.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					source: re.source
				}, re.source.displayText), re.callToAction && o.a.createElement(m.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					source: re.source,
					isNotCardView: !0
				}, re.callToAction)), Q && ue && be && o.a.createElement(v.a, {
					className: X.a.modModeReports,
					language: K,
					onIgnoreReports: ee,
					reportable: re
				}), o.a.createElement(y.d, {
					postId: re.id
				}), o.a.createElement("div", {
					className: X.a.flatlistContainer
				}, o.a.createElement(h.a, {
					className: X.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: le,
					redditStyle: se,
					model: re,
					onVoteClick: e.handleVote
				}), o.a.createElement(x.c, {
					currentUser: n,
					hasModFlairPerms: me,
					hasModFullPerms: he,
					hasModPostPerms: ue,
					isOverlay: !!W,
					language: K,
					modModeEnabled: Q,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					showEditFlair: ne,
					tooltipType: W ? j.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(C.h)({
						editPost: !pe,
						save: !pe,
						hide: !1,
						report: !1
					})
				}))));
				return o.a.createElement(o.a.Fragment, null, ve, z && !U && o.a.createElement(b.a, {
					className: X.a.chain,
					listingKey: J,
					listingName: Y,
					postId: re.id
				}))
			}))
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/reddit/components/PostLeftRail/index.tsx"),
				i = r("./src/reddit/components/VerticalVotes/index.tsx"),
				a = r("./src/reddit/controls/Checkbox/index.tsx"),
				d = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: r,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: l = !1,
					toggleCheckbox: u = (() => {}),
					flairStyleTemplate: p,
					redditStyle: m
				} = e, h = "upvote-button-".concat(t.id);
				return o.a.createElement(n.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(c.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: m
				}, s && o.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: u
				}), o.a.createElement(i.a, {
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
			const O = r("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideNSFWPref: s,
					iconClassName: v,
					inSubredditOrProfile: S,
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
				return o.a.createElement(O, {
					className: t
				}, R && L && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: L.url
				}, A && o.a.createElement(u.b, {
					className: Object(n.a)(P.a.subredditIcon, v),
					shouldHideNsfwIcon: s,
					subredditOrProfile: L
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, R && o.a.createElement(d.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), o.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: w ? l.c.Lightbox : void 0,
					language: T,
					post: I,
					showSub: R,
					subredditOrProfile: L
				}), o.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: L ? L.displayText : null,
					inSubredditOrProfile: S,
					language: T,
					isCompactPinnedPost: E,
					post: I,
					tooltipType: w ? l.c.Lightbox : void 0
				}), L && o.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: I.id,
					subredditId: L.id
				}), !B && o.a.createElement(i.a, {
					forceShowAllAwards: C,
					isOverlay: w,
					showAwarders: F,
					tooltipType: w ? l.c.Lightbox : void 0,
					thing: I
				})), L && R && k && !_ && o.a.createElement(m.a, {
					getEventFactory: e => Object(f.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: L.name,
						type: Object(y.e)(L) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), M && o.a.createElement(b.a, {
					className: P.a.OutboundLink,
					isSponsored: I.isSponsored,
					href: Object(x.A)(e.post),
					source: I.source
				}, o.a.createElement(g.a, {
					className: P.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var s = r("./src/reddit/constants/thumbnails.ts");

			function o(e) {
				return !(!e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW)
			}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(n.D)(e) || s.k.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.e
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.8edc9714e2ca759fcfdb.js.map