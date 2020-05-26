// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.1b15eb020a79a2a0d351.js
// Retrieved at 5/26/2020, 5:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
			}));
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./node_modules/react-dom/index.js"),
				i = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function a(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, s) {
					return a(e[s], t[s])
				})) : e !== t
			}
			var d = new Map;

			function c(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, s = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							s = void 0 === r ? "0px" : r,
							o = t[1],
							n = void 0 === o ? s : o,
							a = t[2],
							d = void 0 === a ? s : a,
							c = t[3];
						return s + " " + n + " " + d + " " + (void 0 === c ? n : c)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], n = d.keys(); t = n.next().value;) {
					if (!(r !== t.root || s !== t.rootMargin || a(o, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var r = d.get(e);
				if (r)
					for (var s, o = r.values(); s = o.next().value;)
						if (s.target === t.target) return s;
				return null
			}

			function u(e, t) {
				for (var r = 0; r < e.length; r++) {
					var s = l(t, e[r]);
					s && s.handleChange(e[r])
				}
			}

			function p(e) {
				return c(e) || new IntersectionObserver(u, e)
			}
			var m = r("./node_modules/invariant/browser.js"),
				b = r.n(m),
				h = {},
				x = Object.create(null, {
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

			function g(e) {
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
							var s = "root" === r && "[object String]" === C.call(e[r]);
							t[r] = s ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				j = function(e) {
					var t, r;

					function s() {
						for (var t, r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
						return f(g(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), f(g(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var s = r.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), f(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(S(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (x.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), f(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), f(g(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = s).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var i = s.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = y.some((function(r) {
							return a(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, i.componentDidUpdate = function(e, t, r) {
						var s = !1;
						r || (s = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || s) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, s
				}(o.a.Component);
			f(j, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function n() {}
			n.resetWarningCache = o, e.exports = function() {
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
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: n,
					resetWarningCache: o
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
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, r) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./src/reddit/components/AdLinkWrapper/index.m.less"),
				o = r.n(s);
			const n = r("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", o.a);
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = r("./src/reddit/components/CallToActionButton/index.m.less"),
				d = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (r[s[o]] = e[s[o]])
				}
				return r
			};
			t.a = e => {
				var {
					className: t
				} = e, r = l(e, ["className"]);
				return o.a.createElement(i.a, c({
					className: Object(n.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: r.isNotCardView
					})
				}, r))
			}
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = r("./node_modules/react/index.js"),
				n = r.n(o);
			const i = Object(s.a)({
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
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(p.a.thumbnailContainer, {
						[p.a.mShowingButtonOrOverflow]: m
					})
				}, o.a.createElement("div", {
					className: p.a.thumbnailContainerRow
				}, m && b && o.a.createElement(i.a, {
					className: p.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.e)(b) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), o.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: u,
					forceShowNSFW: s,
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
				m = r("./src/reddit/components/AwardBadges/index.tsx"),
				b = r("./src/reddit/components/CallToActionButton/index.tsx"),
				h = r("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				x = r("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				g = r("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = r("./src/reddit/components/FlairWrapper/index.tsx"),
				v = r("./src/reddit/components/Flatlist/index.tsx"),
				y = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				P = r("./src/reddit/components/ModModeReports/index.tsx"),
				O = r("./src/reddit/components/ModModeReports/helpers.ts"),
				C = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = r("./src/reddit/components/PostContainer/index.tsx"),
				j = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				_ = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				E = r("./src/reddit/components/PostTitle/index.tsx"),
				N = r("./src/reddit/components/PostTopLine/index.tsx"),
				w = r("./src/reddit/components/PostTopMeta/index.tsx"),
				k = r("./src/reddit/components/SourceLink/index.tsx"),
				I = r("./src/reddit/contexts/InsideOverlay.tsx"),
				T = r("./src/reddit/contexts/PageLayer/index.tsx"),
				A = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = r("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				B = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = r("./src/reddit/models/Vote/index.ts"),
				D = r("./src/reddit/selectors/experiments/categories.ts"),
				V = r("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = r("./src/reddit/selectors/inFeedChaining.ts"),
				z = r("./src/reddit/selectors/moderatorPermissions.ts"),
				G = r("./src/reddit/selectors/postFlair.ts"),
				H = r("./src/reddit/selectors/posts.ts"),
				q = r("./src/reddit/selectors/user.ts"),
				Z = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Q = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				J = r.n(Q),
				K = r("./src/reddit/components/MediumPost/index.m.less"),
				X = r.n(K);
			const Y = Object(n.b)(() => Object(i.c)({
				crosspost: H.d,
				currentUser: q.i,
				flairStyleTemplate: T.R,
				hideNSFWPref: q.z,
				isActive: H.j,
				isCurrentUserProfilePost: H.k,
				isLoggedIn: q.H,
				isPostChainDismissed: U.c,
				isPostChained: U.d,
				language: q.Q,
				moderatorPermissions: z.i,
				modModeEnabled: T.P,
				post: H.O,
				showAwardsPlaque: V.a,
				showEditFlair: G.a,
				showMedia: T.r,
				isInCategoriesExperiment: D.a,
				subredditOrProfile: H.bb
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
					handleVote: t => t === W.a.upvoted ? e(Object(l.cb)(o)) : e(Object(l.y)(o)),
					onIgnoreReports: () => e(Object(l.ab)(o)),
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
					isCommentsPage: T,
					isCurrentUserProfilePost: W,
					isFrontpage: D,
					isLoggedIn: V,
					isOverlay: U,
					isPostChainDismissed: z,
					isPostChained: G,
					isTopicPage: H,
					language: q,
					listingKey: Q,
					listingName: K,
					moderatorPermissions: Y,
					modModeEnabled: $,
					onClickPost: ee,
					onIgnoreReports: te,
					onOpenReportsDropdown: re,
					post: se,
					redditStyle: oe,
					showAwardsPlaque: ne,
					showBulkActionCheckbox: ie,
					showEditFlair: ae,
					showMedia: de,
					sendEvent: ce,
					subredditOrProfile: le,
					toggleCheckbox: ue
				} = e, pe = oe ? void 0 : c, me = Object(B.a)(Y), be = $ && me, he = Object(R.a)(Y), xe = Object(L.a)(Y), ge = Object(O.c)(se), fe = Object(M.a)(se), ve = u && !de, ye = ve && !!se.source && !s, Pe = !(D && V || H || W), Oe = o.a.createElement(S.a, {
					className: Object(d.a)(X.a.container, r, J.a.largeAndMediumPostStyles, J.a.largeAndMediumActiveStyles, Object(F.a)(e), {
						[J.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: U,
					style: Object(F.b)(e.flairStyleTemplate),
					post: se,
					onClick: ee,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(_.a, {
					model: se,
					handleVote: e.handleVote,
					showBulkActionCheckbox: ie,
					isCheckboxSelected: I,
					toggleCheckbox: ue,
					flairStyleTemplate: pe,
					redditStyle: oe,
					subreddit: le
				}), o.a.createElement(C.a, {
					className: X.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: pe,
					post: se,
					redditStyle: oe
				}, o.a.createElement(g.a, {
					language: q,
					post: se
				}), o.a.createElement("article", {
					className: X.a.mainBody
				}, o.a.createElement("div", {
					className: X.a.content,
					"data-click-id": "body"
				}, o.a.createElement(N.a, {
					className: X.a.postTopLine,
					hideAwards: ne,
					hideNSFWPref: l,
					iconClassName: X.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: T,
					isCurrentUserProfilePost: W,
					isOverlay: !!U,
					isTopicPage: !!H,
					language: q,
					post: se,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: ye,
					showSubreddit: !u && !se.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: le
				}), o.a.createElement(E.c, {
					className: X.a.postTitle,
					post: se,
					redditStyle: oe,
					size: E.b.Large,
					titleColor: pe && pe.postTitleColor,
					isOverlay: U
				}), T && (se.flair && se.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(f.a, {
					className: T ? X.a.leftPadding : null,
					disableFlair: !T,
					post: se,
					sendEvent: ce,
					showCategoryTag: e.isInCategoriesExperiment && T
				}), se.source && !se.isSponsored && !s && o.a.createElement(k.a, {
					className: X.a.sourceLink,
					isCommentsPage: T,
					post: se
				})), !ve && fe && o.a.createElement(Z.a, {
					crosspost: s ? se : void 0,
					hasModPostPerms: me,
					isCommentsPage: T,
					isOverlay: U,
					modModeEnabled: $,
					post: s || se,
					redditStyle: oe,
					shouldShowSubscribeButton: Pe && !u,
					subredditOrProfile: le,
					templatePlaceholderImage: pe && pe.postPlaceholderImage
				})), se.source && se.source.url && se.isSponsored && o.a.createElement(p.a, {
					className: X.a.adLinkWrapper
				}, o.a.createElement(A.a, {
					href: se.source.url.replace(a.a.redditUrl, ""),
					isSponsored: se.isSponsored,
					postId: se.id,
					source: se.source
				}, se.source.displayText), se.callToAction && o.a.createElement(b.a, {
					href: se.source.url.replace(a.a.redditUrl, ""),
					isSponsored: se.isSponsored,
					postId: se.id,
					source: se.source,
					isNotCardView: !0
				}, se.callToAction)), $ && me && ge && o.a.createElement(P.a, {
					className: X.a.modModeReports,
					onIgnoreReports: te,
					reportable: se
				}), o.a.createElement(y.d, {
					postId: se.id
				}), ne && o.a.createElement(m.a, {
					awardsPlaqueStyle: !0,
					isOverlay: !!U,
					isPostDetail: T,
					thing: se
				}), o.a.createElement("div", {
					className: X.a.flatlistContainer
				}, o.a.createElement(h.a, {
					className: X.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: pe,
					redditStyle: oe,
					model: se,
					onVoteClick: e.handleVote
				}), o.a.createElement(v.c, {
					currentUser: n,
					hasModFlairPerms: he,
					hasModFullPerms: xe,
					hasModPostPerms: me,
					isOverlay: !!U,
					language: q,
					modModeEnabled: $,
					onIgnoreReports: te,
					onOpenReportsDropdown: re,
					post: se,
					showEditFlair: ae,
					tooltipType: U ? w.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(j.h)({
						editPost: !be,
						save: !be,
						hide: !1,
						report: !1
					})
				}))));
				return o.a.createElement(o.a.Fragment, null, Oe, G && !z && o.a.createElement(x.a, {
					className: X.a.chain,
					listingKey: Q,
					listingName: K,
					postId: se.id
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = r("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = r.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (r[s[o]] = e[s[o]])
				}
				return r
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: r,
					flairStyleTemplate: s,
					onClick: i,
					post: d,
					redditStyle: p,
					theme: m
				} = e, b = u(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return o.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, r),
					style: Object(a.c)(s, e),
					onClick: i
				}, b), t)
			})
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
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
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: g,
					isOverlay: f
				} = e, v = "upvote-button-".concat(t.id).concat(f ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(c.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: r,
					redditStyle: x,
					upvoteTooltipId: v
				}), y && o.a.createElement(a.b, {
					rightOf: v
				}, "survey" === y ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!f
				}) : o.a.createElement(n.a, {
					post: t,
					subredditName: g.name,
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
				b = r("./src/reddit/constants/posts.ts"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/helpers/trackers/post.ts"),
				g = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = r("./src/reddit/models/Media/index.ts"),
				v = r("./src/reddit/models/Subreddit/index.ts"),
				y = r("./src/reddit/components/PostTopLine/index.m.less"),
				P = r.n(y);
			const O = r("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideAwards: s,
					hideNSFWPref: y,
					iconClassName: C,
					inSubredditOrProfile: S,
					isCommentsPage: j,
					isCompactPinnedPost: _,
					isCurrentUserProfilePost: E,
					isOverlay: N,
					isTopicPage: w,
					language: k,
					post: I,
					shouldShowSubscribeButton: T,
					showCornerOutboundLink: A,
					showSubreddit: M,
					showSubredditIcon: R,
					subredditOrProfile: L
				} = e, B = s || w;
				return o.a.createElement(O, {
					className: t
				}, M && L && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: L.url
				}, R && o.a.createElement(u.b, {
					className: Object(n.a)(P.a.subredditIcon, C),
					shouldHideNsfwIcon: y,
					subredditOrProfile: L
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, M && o.a.createElement(d.h, {
					type: I.belongsTo.type,
					id: I.belongsTo.id
				}), o.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: N ? l.c.Lightbox : void 0,
					language: k,
					post: I,
					showSub: M,
					subredditOrProfile: L
				}), o.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: L ? L.displayText : null,
					inSubredditOrProfile: S,
					language: k,
					isCompactPinnedPost: _,
					post: I,
					tooltipType: N ? l.c.Lightbox : void 0
				}), L && o.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: I.id,
					subredditId: L.id
				}), !B && o.a.createElement(i.a, {
					isPostDetail: j,
					isOverlay: N,
					thing: I
				})), L && M && T && !E && o.a.createElement(m.a, {
					getEventFactory: e => Object(x.f)(I.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: L.name,
						type: Object(v.e)(L) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: I.id
				}, "Subscribe"), A && o.a.createElement(h.a, {
					className: P.a.OutboundLink,
					isSponsored: I.isSponsored,
					postId: I.id,
					href: Object(f.z)(e.post),
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "d", (function() {
				return g
			}));
			var s = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				g = e => {
					const t = Object(n.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
			var s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				n = r("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(n.E)(e) || s.t.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.m
				})
			}
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.T
				});
				return !(!t || Object(s.tc)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.1b15eb020a79a2a0d351.js.map