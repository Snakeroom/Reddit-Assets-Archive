// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.ab1fef9188fb3dda1c1f.js
// Retrieved at 4/13/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
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
				h = r.n(m),
				b = {},
				x = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return b.errorReporter || function(e) {
								return h()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							b.errorReporter = e
						}
					}
				});

			function g(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function v(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var f = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				P = Object.prototype,
				S = P.hasOwnProperty,
				O = P.toString,
				C = function(e) {
					return f.reduce((function(t, r) {
						if (S.call(e, r)) {
							var s = "root" === r && "[object String]" === O.call(e[r]);
							t[r] = s ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				E = function(e) {
					var t, r;

					function s() {
						for (var t, r = arguments.length, s = new Array(r), o = 0; o < r; o++) s[o] = arguments[o];
						return v(g(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), v(g(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var s = r.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), v(g(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(C(t.props)), t.target = t.targetNode, e = g(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (x.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), v(g(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(g(t), e)
						})), v(g(t), "externalUnobserve", (function() {
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
			v(E, "displayName", "IntersectionObserver")
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
				x = r("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				g = r("./src/reddit/components/FlairWrapper/index.tsx"),
				v = r("./src/reddit/components/Flatlist/index.tsx"),
				f = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				y = r("./src/reddit/components/ModModeReports/index.tsx"),
				P = r("./src/reddit/components/ModModeReports/helpers.ts"),
				S = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				O = r("./src/reddit/components/PostContainer/index.tsx"),
				C = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				E = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_ = r("./src/reddit/components/PostTitle/index.tsx"),
				N = r("./src/reddit/components/PostTopLine/index.tsx"),
				j = r("./src/reddit/components/PostTopMeta/index.tsx"),
				I = r("./src/reddit/components/SourceLink/index.tsx"),
				T = r("./src/reddit/contexts/InsideOverlay.tsx"),
				w = r("./src/reddit/contexts/PageLayer/index.tsx"),
				M = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				k = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				A = r("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				F = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				L = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				B = r("./src/reddit/models/Vote/index.ts"),
				D = r("./src/reddit/selectors/experiments/categories.ts"),
				U = r("./src/reddit/selectors/inFeedChaining.ts"),
				W = r("./src/reddit/selectors/moderatorPermissions.ts"),
				V = r("./src/reddit/selectors/postFlair.ts"),
				z = r("./src/reddit/selectors/posts.ts"),
				G = r("./src/reddit/selectors/user.ts"),
				q = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				H = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				Z = r.n(H),
				K = r("./src/reddit/components/MediumPost/index.m.less"),
				J = r.n(K);
			const Y = Object(n.b)(() => Object(i.c)({
				crosspost: z.d,
				currentUser: G.i,
				flairStyleTemplate: w.Q,
				hideNSFWPref: G.y,
				isActive: z.i,
				isCurrentUserProfilePost: z.j,
				isLoggedIn: G.G,
				isPostChainDismissed: U.c,
				isPostChained: U.d,
				language: G.O,
				moderatorPermissions: W.i,
				modModeEnabled: w.O,
				post: z.N,
				showEditFlair: V.a,
				showMedia: w.r,
				isInCategoriesExperiment: D.a,
				subredditOrProfile: z.Z
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
					handleVote: t => t === B.a.upvoted ? e(Object(l.ab)(o)) : e(Object(l.w)(o)),
					onIgnoreReports: () => e(Object(l.Y)(o)),
					onOpenReportsDropdown: t => e(Object(u.h)({
						tooltipId: t
					}))
				}
			});
			t.default = Y(Object(T.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: s,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: u = !1,
					isCheckboxSelected: T,
					isCommentsPage: w,
					isCurrentUserProfilePost: B,
					isFrontpage: D,
					isLoggedIn: U,
					isOverlay: W,
					isPostChainDismissed: V,
					isPostChained: z,
					isTopicPage: G,
					language: H,
					listingKey: K,
					listingName: Y,
					moderatorPermissions: X,
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
				} = e, le = se ? void 0 : c, ue = Object(F.a)(X), pe = Q && ue, me = Object(R.a)(X), he = Object(A.a)(X), be = Object(P.c)(re), xe = Object(k.a)(re), ge = u && !ie, ve = ge && !!re.source && !s, fe = !(D && U || G || B), ye = o.a.createElement(O.a, {
					className: Object(d.a)(J.a.container, r, Z.a.largeAndMediumPostStyles, Z.a.largeAndMediumActiveStyles, Object(L.a)(e), {
						[Z.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: W,
					style: Object(L.b)(e.flairStyleTemplate),
					post: re,
					onClick: $,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(E.a, {
					model: re,
					handleVote: e.handleVote,
					showBulkActionCheckbox: oe,
					isCheckboxSelected: T,
					toggleCheckbox: ce,
					flairStyleTemplate: le,
					redditStyle: se,
					subreddit: de
				}), o.a.createElement(S.a, {
					className: J.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: le,
					post: re,
					redditStyle: se
				}, o.a.createElement(x.a, {
					language: H,
					post: re
				}), o.a.createElement("article", {
					className: J.a.mainBody
				}, o.a.createElement("div", {
					className: J.a.content,
					"data-click-id": "body"
				}, o.a.createElement(N.a, {
					className: J.a.postTopLine,
					hideNSFWPref: l,
					iconClassName: J.a.postTopLineIcon,
					inSubredditOrProfile: u,
					isCommentsPage: w,
					isCurrentUserProfilePost: B,
					isOverlay: !!W,
					isTopicPage: !!G,
					language: H,
					post: re,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: ve,
					showSubreddit: !u && !re.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: de
				}), o.a.createElement(_.c, {
					className: J.a.postTitle,
					post: re,
					redditStyle: se,
					size: _.b.Large,
					titleColor: le && le.postTitleColor,
					isOverlay: W
				}), w && (re.flair && re.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(g.a, {
					className: w ? J.a.leftPadding : null,
					disableFlair: !w,
					post: re,
					sendEvent: ae,
					showCategoryTag: e.isInCategoriesExperiment && w
				}), re.source && !re.isSponsored && !s && o.a.createElement(I.a, {
					className: J.a.sourceLink,
					isCommentsPage: w,
					post: re
				})), !ge && xe && o.a.createElement(q.a, {
					crosspost: s ? re : void 0,
					hasModPostPerms: ue,
					isCommentsPage: w,
					isOverlay: W,
					modModeEnabled: Q,
					post: s || re,
					redditStyle: se,
					shouldShowSubscribeButton: fe && !u,
					subredditOrProfile: de,
					templatePlaceholderImage: le && le.postPlaceholderImage
				})), re.source && re.source.url && re.isSponsored && o.a.createElement(p.a, {
					className: J.a.adLinkWrapper
				}, o.a.createElement(M.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source
				}, re.source.displayText), re.callToAction && o.a.createElement(m.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source,
					isNotCardView: !0
				}, re.callToAction)), Q && ue && be && o.a.createElement(y.a, {
					className: J.a.modModeReports,
					onIgnoreReports: ee,
					reportable: re
				}), o.a.createElement(f.d, {
					postId: re.id
				}), o.a.createElement("div", {
					className: J.a.flatlistContainer
				}, o.a.createElement(h.a, {
					className: J.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: le,
					redditStyle: se,
					model: re,
					onVoteClick: e.handleVote
				}), o.a.createElement(v.c, {
					currentUser: n,
					hasModFlairPerms: me,
					hasModFullPerms: he,
					hasModPostPerms: ue,
					isOverlay: !!W,
					language: H,
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
				return o.a.createElement(o.a.Fragment, null, ye, z && !V && o.a.createElement(b.a, {
					className: J.a.chain,
					listingKey: K,
					listingName: Y,
					postId: re.id
				}))
			}))
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
					toggleCheckbox: h = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					subreddit: g,
					isOverlay: v
				} = e, f = "upvote-button-".concat(t.id).concat(v ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(p.a)(t),
					isSponsored: !!Object(u.b)(t) && t.isSponsored,
					redditStyle: x
				}, s && o.a.createElement(l.a, {
					isCheckboxSelected: m,
					toggleCheckbox: h
				}), o.a.createElement(c.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: r,
					redditStyle: x,
					upvoteTooltipId: f
				}), y && o.a.createElement(a.b, {
					rightOf: f
				}, "survey" === y ? o.a.createElement(i.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
				}) : o.a.createElement(n.a, {
					post: t,
					subredditName: g.name,
					isOverlay: !!v
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
				h = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/helpers/trackers/post.ts"),
				g = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = r("./src/reddit/models/Media/index.ts"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				y = r("./src/reddit/components/PostTopLine/index.m.less"),
				P = r.n(y);
			const S = r("./src/lib/lessComponent.tsx").a.div("Container", P.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideNSFWPref: s,
					iconClassName: y,
					inSubredditOrProfile: O,
					isCommentsPage: C,
					isCompactPinnedPost: E,
					isCurrentUserProfilePost: _,
					isOverlay: N,
					isTopicPage: j,
					language: I,
					post: T,
					shouldShowSubscribeButton: w,
					showCornerOutboundLink: M,
					showSubreddit: k,
					showSubredditIcon: R,
					subredditOrProfile: A
				} = e, F = j;
				return o.a.createElement(S, {
					className: t
				}, k && A && o.a.createElement("div", {
					className: P.a.subredditIconWrapper
				}, o.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: A.url
				}, R && o.a.createElement(u.b, {
					className: Object(n.a)(P.a.subredditIcon, y),
					shouldHideNsfwIcon: s,
					subredditOrProfile: A
				}))), o.a.createElement("div", {
					className: P.a.everythingElseWrapper
				}, k && o.a.createElement(d.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), o.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: N ? l.c.Lightbox : void 0,
					language: I,
					post: T,
					showSub: k,
					subredditOrProfile: A
				}), o.a.createElement(c.a, {
					className: P.a.postBadges,
					displayText: A ? A.displayText : null,
					inSubredditOrProfile: O,
					language: I,
					isCompactPinnedPost: E,
					post: T,
					tooltipType: N ? l.c.Lightbox : void 0
				}), A && o.a.createElement(a.a, {
					className: P.a.donationAmount,
					contentId: T.id,
					subredditId: A.id
				}), !F && o.a.createElement(i.a, {
					forceShowAllAwards: C,
					isOverlay: N,
					tooltipType: N ? l.c.Lightbox : void 0,
					thing: T
				})), A && k && w && !_ && o.a.createElement(m.a, {
					getEventFactory: e => Object(x.f)(T.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: A.name,
						type: Object(f.e)(A) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: T.id
				}, "Subscribe"), M && o.a.createElement(b.a, {
					className: P.a.OutboundLink,
					isSponsored: T.isSponsored,
					postId: T.id,
					href: Object(v.A)(e.post),
					source: T.source
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
				return Object(n.D)(e) || s.q.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.j
				})
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.ab1fef9188fb3dda1c1f.js.map