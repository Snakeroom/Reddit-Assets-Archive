// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.bb22654015dfa8a596fc.js
// Retrieved at 5/5/2020, 1:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			}));
			var o = r("./node_modules/react/index.js"),
				s = r.n(o),
				n = r("./node_modules/react-dom/index.js"),
				i = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, o) {
					return a(e[o], t[o])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, o = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							o = void 0 === r ? "0px" : r,
							s = t[1],
							n = void 0 === s ? o : s,
							a = t[2],
							d = void 0 === a ? o : a,
							c = t[3];
						return o + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(r !== t.root || o !== t.rootMargin || a(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var r = d.get(e);
				if (r)
					for (var o, s = r.values(); o = s.next().value;)
						if (o.target === t.target) return o;
				return null
			}

			function u(e, t) {
				for (var r = 0; r < e.length; r++) {
					var o = l(t, e[r]);
					o && o.handleChange(e[r])
				}
			}

			function p(e) {
				return c(e) || new IntersectionObserver(u, e)
			}
			var m = r("./node_modules/invariant/browser.js"),
				b = r.n(m),
				h = {},
				g = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return h.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							h.errorReporter = e
						}
					}
				});

			function x(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function f(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var v = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				O = P.hasOwnProperty,
				C = P.toString,
				S = function(e) {
					return v.reduce((function(t, r) {
						if (O.call(e, r)) {
							var o = "root" === r && "[object String]" === C.call(e[r]);
							t[r] = o ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				j = function(e) {
					var t, r;

					function o() {
						for (var t, r = arguments.length, o = new Array(r), s = 0; s < r; s++) o[s] = arguments[s];
						return f(x(t = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), f(x(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var o = r.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), f(x(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(S(t.props)), t.target = t.targetNode, e = x(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (g.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), f(x(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(x(t), e)
						})), f(x(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var i = o.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = y.some((function(r) {
							return a(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, i.componentDidUpdate = function(e, t, r) {
						var o = !1;
						r || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || o) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(s.a.Component);
			f(j, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function n() {}
			n.resetWarningCache = s, e.exports = function() {
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
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: n,
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
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, r) {
			"use strict";
			var o = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				n = r.n(s);
			const i = Object(o.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), r.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), r.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), r.e("InFeedChaining")]).then(r.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: n.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return s.a.createElement("div", {
					className: Object(n.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: m
					})
				}, s.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, m && b && s.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.e)(b) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), s.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: u,
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
				u = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = r("./src/reddit/components/CallToActionButton/index.tsx"),
				b = r("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = r("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				g = r("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				x = r("./src/reddit/components/FlairWrapper/index.tsx"),
				f = r("./src/reddit/components/Flatlist/index.tsx"),
				v = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModModeReports/index.tsx"),
				P = r("./src/reddit/components/ModModeReports/helpers.ts"),
				O = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				C = r("./src/reddit/components/PostContainer/index.tsx"),
				S = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				j = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_ = r("./src/reddit/components/PostTitle/index.tsx"),
				E = r("./src/reddit/components/PostTopLine/index.tsx"),
				N = r("./src/reddit/components/PostTopMeta/index.tsx"),
				k = r("./src/reddit/components/SourceLink/index.tsx"),
				I = r("./src/reddit/contexts/InsideOverlay.tsx"),
				T = r("./src/reddit/contexts/PageLayer/index.tsx"),
				w = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				A = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				R = r("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = r("./src/reddit/models/Vote/index.ts"),
				W = r("./src/reddit/selectors/experiments/categories.ts"),
				D = r("./src/reddit/selectors/inFeedChaining.ts"),
				V = r("./src/reddit/selectors/moderatorPermissions.ts"),
				U = r("./src/reddit/selectors/postFlair.ts"),
				z = r("./src/reddit/selectors/posts.ts"),
				G = r("./src/reddit/selectors/user.ts"),
				H = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Z = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				J = r.n(Z),
				K = r("./src/reddit/components/MediumPost/index.m.less"),
				Q = r.n(K);
			const Y = Object(n.b)(() => Object(i.c)({
				crosspost: z.d,
				currentUser: G.i,
				flairStyleTemplate: T.R,
				hideNSFWPref: G.z,
				isActive: z.i,
				isCurrentUserProfilePost: z.j,
				isLoggedIn: G.H,
				isPostChainDismissed: D.c,
				isPostChained: D.d,
				language: G.P,
				moderatorPermissions: V.i,
				modModeEnabled: T.P,
				post: z.N,
				showEditFlair: U.a,
				showMedia: T.r,
				isInCategoriesExperiment: W.a,
				subredditOrProfile: z.Z
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
					handleVote: t => t === F.a.upvoted ? e(Object(l.ab)(s)) : e(Object(l.w)(s)),
					onIgnoreReports: () => e(Object(l.Y)(s)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				}
			});
			t.default = Y(Object(I.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: o,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: u = !1,
					isCheckboxSelected: I,
					isCommentsPage: T,
					isCurrentUserProfilePost: F,
					isFrontpage: W,
					isLoggedIn: D,
					isOverlay: V,
					isPostChainDismissed: U,
					isPostChained: z,
					isTopicPage: G,
					language: Z,
					listingKey: K,
					listingName: Y,
					moderatorPermissions: q,
					modModeEnabled: X,
					onClickPost: $,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					redditStyle: oe,
					showBulkActionCheckbox: se,
					showEditFlair: ne,
					showMedia: ie,
					sendEvent: ae,
					subredditOrProfile: de,
					toggleCheckbox: ce
				} = e, le = oe ? void 0 : c, ue = Object(L.a)(q), pe = X && ue, me = Object(A.a)(q), be = Object(R.a)(q), he = Object(P.c)(re), ge = Object(M.a)(re), xe = u && !ie, fe = xe && !!re.source && !o, ve = !(W && D || G || F), ye = s.a.createElement(C.a, {
					className: Object(d.a)(Q.a.container, r, J.a.largeAndMediumPostStyles, J.a.largeAndMediumActiveStyles, Object(B.a)(e), {
						[J.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: V,
					style: Object(B.b)(e.flairStyleTemplate),
					post: re,
					onClick: $,
					onPostContentClick: t,
					eventFactory: i
				}, s.a.createElement(j.a, {
					model: re,
					handleVote: e.handleVote,
					showBulkActionCheckbox: se,
					isCheckboxSelected: I,
					toggleCheckbox: ce,
					flairStyleTemplate: le,
					redditStyle: oe,
					subreddit: de
				}), s.a.createElement(O.a, {
					className: Q.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: le,
					post: re,
					redditStyle: oe
				}, s.a.createElement(g.a, {
					language: Z,
					post: re
				}), s.a.createElement("article", {
					className: Q.a.mainBody
				}, s.a.createElement("div", {
					className: Q.a.content,
					"data-click-id": "body"
				}, s.a.createElement(E.a, {
					className: Q.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: Q.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: T,
					isCurrentUserProfilePost: F,
					isOverlay: !!V,
					isTopicPage: !!G,
					language: Z,
					post: re,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: fe,
					showSubreddit: !u && !re.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: de
				}), s.a.createElement(_.c, {
					className: Q.a.postTitle,
					post: re,
					redditStyle: oe,
					size: _.b.Large,
					titleColor: le && le.postTitleColor,
					isOverlay: V
				}), T && (re.flair && re.flair.length > 0 || e.isInCategoriesExperiment) && s.a.createElement(x.a, {
					className: T ? Q.a.leftPadding : null,
					disableFlair: !T,
					post: re,
					sendEvent: ae,
					showCategoryTag: e.isInCategoriesExperiment && T
				}), re.source && !re.isSponsored && !o && s.a.createElement(k.a, {
					className: Q.a.sourceLink,
					isCommentsPage: T,
					post: re
				})), !xe && ge && s.a.createElement(H.a, {
					crosspost: o ? re : void 0,
					hasModPostPerms: ue,
					isCommentsPage: T,
					isOverlay: V,
					modModeEnabled: X,
					post: o || re,
					redditStyle: oe,
					shouldShowSubscribeButton: ve && !u,
					subredditOrProfile: de,
					templatePlaceholderImage: le && le.postPlaceholderImage
				})), re.source && re.source.url && re.isSponsored && s.a.createElement(p.a, {
					className: Q.a.adLinkWrapper
				}, s.a.createElement(w.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source
				}, re.source.displayText), re.callToAction && s.a.createElement(m.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source,
					isNotCardView: !0
				}, re.callToAction)), X && ue && he && s.a.createElement(y.a, {
					className: Q.a.modModeReports,
					onIgnoreReports: ee,
					reportable: re
				}), s.a.createElement(v.d, {
					postId: re.id
				}), s.a.createElement("div", {
					className: Q.a.flatlistContainer
				}, s.a.createElement(b.a, {
					className: Q.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: le,
					redditStyle: oe,
					model: re,
					onVoteClick: e.handleVote
				}), s.a.createElement(f.c, {
					currentUser: n,
					hasModFlairPerms: me,
					hasModFullPerms: be,
					hasModPostPerms: ue,
					isOverlay: !!V,
					language: Z,
					modModeEnabled: X,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					showEditFlair: ne,
					tooltipType: V ? N.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(S.h)({
						editPost: !pe,
						save: !pe,
						hide: !1,
						report: !1
					})
				}))));
				return s.a.createElement(s.a.Fragment, null, ye, z && !U && s.a.createElement(h.a, {
					className: Q.a.chain,
					listingKey: K,
					listingName: Y,
					postId: re.id
				}))
			}))
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
			var u = function(e, t) {
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
					redditStyle: p,
					theme: m
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
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
				n = r("./src/reddit/components/ModerationPrompts/Prompt.tsx"),
				i = r("./src/reddit/components/ModerationPrompts/Survey.tsx"),
				a = r("./src/reddit/components/PopupPortal/index.tsx"),
				d = r("./src/reddit/components/PostLeftRail/index.tsx"),
				c = r("./src/reddit/components/VerticalVotes/index.tsx"),
				l = r("./src/reddit/controls/Checkbox/index.tsx"),
				u = r("./src/reddit/helpers/isPost.ts"),
				p = r("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: r,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: g,
					subreddit: x,
					isOverlay: f
				} = e, v = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return s.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: g
				}, o && s.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), s.a.createElement(c.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: r,
					redditStyle: g,
					upvoteTooltipId: v
				}), y && s.a.createElement(a.b, {
					rightOf: v
				}, "survey" === y ? s.a.createElement(i.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				}) : s.a.createElement(n.a, {
					post: t,
					subredditName: x.name,
					isOverlay: !!f
				})))
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
				b = r("./src/reddit/constants/posts.ts"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				g = r("./src/reddit/helpers/trackers/post.ts"),
				x = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = r("./src/reddit/models/Media/index.ts"),
				v = r("./src/reddit/models/Subreddit/index.ts"),
				y = r("./src/reddit/components/PostTopLine/index.m.less"),
				P = r.n(y);
			const O = r("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideNSFWPref: o,
					iconClassName: y,
					inSubredditOrProfile: C,
					isCommentsPage: S,
					isCompactPinnedPost: j,
					isCurrentUserProfilePost: _,
					isOverlay: E,
					isTopicPage: N,
					language: k,
					post: I,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: w,
					showSubreddit: M,
					showSubredditIcon: A,
					subredditOrProfile: R
				} = e, L = N;
				return s.a.createElement(O, {
					className: t
				}, M && R && s.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, s.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, A && s.a.createElement(u.b, {
					className: Object(n.a)(P.a.subredditIcon, y),
					shouldHideNsfwIcon: o,
					subredditOrProfile: R
				}))), s.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, M && s.a.createElement(d.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), s.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: E ? l.c.Lightbox : void 0,
					language: k,
					post: I,
					showSub: M,
					subredditOrProfile: R
				}), s.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: C,
					language: k,
					isCompactPinnedPost: j,
					post: I,
					tooltipType: E ? l.c.Lightbox : void 0
				}), R && s.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: I.id,
					subredditId: R.id
				}), !L && s.a.createElement(i.a, {
					forceShowAllAwards: S,
					isOverlay: E,
					tooltipType: E ? l.c.Lightbox : void 0,
					thing: I
				})), R && M && T && !_ && s.a.createElement(m.a, {
					getEventFactory: e => Object(g.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(v.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), w && s.a.createElement(h.a, {
					className: P.a.OutboundLink,
					isSponsored: I.isSponsored,
					postId: I.id,
					href: Object(f.A)(e.post),
					source: I.source
				}, s.a.createElement(x.a, {
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "d", (function() {
				return x
			}));
			var o = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = r.n(c);
			const u = {},
				p = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
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
						background: p(t)
					}
				},
				b = e => Object(o.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
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
				return Object(n.E)(e) || o.u.Treatment1 === Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: o.m
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.bb22654015dfa8a596fc.js.map