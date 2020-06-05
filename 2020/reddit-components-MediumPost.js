// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.b206043fd2b05e742428.js
// Retrieved at 6/5/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
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

			function p(e, t) {
				for (var r = 0; r < e.length; r++) {
					var s = l(t, e[r]);
					s && s.handleChange(e[r])
				}
			}

			function u(e) {
				return c(e) || new IntersectionObserver(p, e)
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

			function f(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var v = ["root", "rootMargin", "threshold"],
				y = ["root", "rootMargin", "threshold", "disabled"],
				O = Object.prototype,
				P = O.hasOwnProperty,
				C = O.toString,
				S = function(e) {
					return v.reduce((function(t, r) {
						if (P.call(e, r)) {
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
						return g(f(t = e.call.apply(e, [this].concat(s)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(f(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var s = r.ref;
								s && ("function" == typeof s ? s(e) : "object" == typeof s && (s.current = e))
							}
							t.targetNode = e && Object(n.findDOMNode)(e)
						})), g(f(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = u(S(t.props)), t.target = t.targetNode, e = f(t), d.has(e.observer) || d.set(e.observer, new Set), d.get(e.observer).add(e), e.observer.observe(e.target), !0) : (x.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(f(t), "unobserve", (function(e) {
							! function(e, t) {
								if (d.has(e.observer)) {
									var r = d.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), d.delete(e.observer)))
								}
							}(f(t), e)
						})), g(f(t), "externalUnobserve", (function() {
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
			g(j, "displayName", "IntersectionObserver")
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
			var s = r("./node_modules/react/index.js"),
				o = r.n(s),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/reddit/components/VerticalVotes/index.tsx"),
				d = r("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
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
			var p = function(e, t) {
				var r = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (r[s[o]] = e[s[o]])
				}
				return r
			};
			const u = Object(i.a)(e => {
				var {
					className: t
				} = e, r = p(e, ["className"]);
				return o.a.createElement(a.a, l({}, r, {
					className: Object(n.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(n.a)(c.a.customScoreStyles, r.scoreClassName),
					downvoteClassName: Object(a.b)(r) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				importAsync: () => Promise.all([r.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), r.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), r.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~3fa2ee42"), r.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), r.e("InFeedChaining")]).then(r.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
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
				p = r("./src/reddit/components/MediumPost/index.m.less"),
				u = r.n(p);
			t.a = e => {
				let {
					crosspost: t,
					post: r,
					forceShowNSFW: s,
					redditStyle: p,
					shouldShowSubscribeButton: m,
					subredditOrProfile: b,
					templatePlaceholderImage: h
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(u.a.thumbnailContainer, {
						[u.a.mShowingButtonOrOverflow]: m
					})
				}, o.a.createElement("div", {
					className: u.a.thumbnailContainerRow
				}, m && b && o.a.createElement(i.a, {
					className: u.a.subscribeButton,
					getEventFactory: e => Object(c.f)(r.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: b.name,
						type: Object(l.f)(b) ? d.a.PROFILE : d.a.SUBREDDIT
					},
					postId: r.id
				})), o.a.createElement(a.a, {
					crosspost: t,
					post: r,
					redditStyle: p,
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
				p = r("./src/reddit/actions/tooltip.ts"),
				u = r("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = r("./src/reddit/components/AwardBadges/index.tsx"),
				b = r("./src/reddit/components/CallToActionButton/index.tsx"),
				h = r("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				x = r("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				f = r("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				g = r("./src/reddit/components/FlairWrapper/index.tsx"),
				v = r("./src/reddit/components/Flatlist/index.tsx"),
				y = r("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = r("./src/reddit/components/ModModeReports/index.tsx"),
				P = r("./src/reddit/components/ModModeReports/helpers.ts"),
				C = r("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				S = r("./src/reddit/components/PostContainer/index.tsx"),
				j = r("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = r("./src/reddit/components/PostRailAndVotes/index.tsx"),
				N = r("./src/reddit/components/PostTitle/index.tsx"),
				E = r("./src/reddit/components/PostTopLine/index.tsx"),
				k = r("./src/reddit/components/PostTopMeta/index.tsx"),
				_ = r("./src/reddit/components/SourceLink/index.tsx"),
				I = r("./src/reddit/contexts/InsideOverlay.tsx"),
				T = r("./src/reddit/contexts/PageLayer/index.tsx"),
				A = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				M = r("./src/reddit/helpers/canRenderThumbnail.ts"),
				R = r("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				L = r("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				B = r("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				F = r("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = r("./src/reddit/models/Vote/index.ts"),
				V = r("./src/reddit/selectors/experiments/categories.ts"),
				D = r("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				U = r("./src/reddit/selectors/inFeedChaining.ts"),
				z = r("./src/reddit/selectors/moderatorPermissions.ts"),
				G = r("./src/reddit/selectors/postFlair.ts"),
				H = r("./src/reddit/selectors/posts.ts"),
				q = r("./src/reddit/selectors/user.ts"),
				Z = r("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = r("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = r.n(X),
				Y = r("./src/reddit/components/MediumPost/index.m.less"),
				J = r.n(Y);
			const K = Object(n.b)(() => Object(i.c)({
				crosspost: H.d,
				currentUser: q.i,
				flairStyleTemplate: T.R,
				hideNSFWPref: q.z,
				isActive: H.j,
				isCurrentUserProfilePost: H.k,
				isLoggedIn: q.H,
				isPostChainDismissed: U.c,
				isPostChained: U.d,
				moderatorPermissions: z.i,
				modModeEnabled: T.P,
				post: H.O,
				showAwardsPlaque: D.a,
				showEditFlair: G.a,
				showMedia: T.r,
				isInCategoriesExperiment: V.a,
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
					onOpenReportsDropdown: t => e(Object(p.h)({
						tooltipId: t
					}))
				}
			});
			t.default = K(Object(I.b)(e => {
				const {
					chainPost: t,
					className: r,
					crosspost: s,
					currentUser: n,
					eventFactory: i,
					flairStyleTemplate: c,
					hideNSFWPref: l,
					inSubredditOrProfile: p = !1,
					isCheckboxSelected: I,
					isCommentsPage: T,
					isCurrentUserProfilePost: W,
					isFrontpage: V,
					isLoggedIn: D,
					isOverlay: U,
					isPostChainDismissed: z,
					isPostChained: G,
					isTopicPage: H,
					listingKey: q,
					listingName: X,
					moderatorPermissions: Y,
					modModeEnabled: K,
					onClickPost: $,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					redditStyle: se,
					showAwardsPlaque: oe,
					showBulkActionCheckbox: ne,
					showEditFlair: ie,
					showMedia: ae,
					sendEvent: de,
					subredditOrProfile: ce,
					toggleCheckbox: le
				} = e, pe = se ? void 0 : c, ue = Object(B.a)(Y), me = K && ue, be = Object(R.a)(Y), he = Object(L.a)(Y), xe = Object(P.c)(re), fe = Object(M.a)(re), ge = p && !ae, ve = ge && !!re.source && !s, ye = !(V && D || H || W), Oe = o.a.createElement(S.a, {
					className: Object(d.a)(J.a.container, r, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(F.a)(e), {
						[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
					}),
					isOverlay: U,
					style: Object(F.b)(e.flairStyleTemplate),
					post: re,
					onClick: $,
					onPostContentClick: t,
					eventFactory: i
				}, o.a.createElement(w.a, {
					model: re,
					handleVote: e.handleVote,
					showBulkActionCheckbox: ne,
					isCheckboxSelected: I,
					toggleCheckbox: le,
					flairStyleTemplate: pe,
					redditStyle: se,
					subreddit: ce
				}), o.a.createElement(C.a, {
					className: J.a.backgroundWrapper,
					"data-click-id": "background",
					flairStyleTemplate: pe,
					post: re,
					redditStyle: se
				}, o.a.createElement(f.a, {
					post: re
				}), o.a.createElement("article", {
					className: J.a.mainBody
				}, o.a.createElement("div", {
					className: J.a.content,
					"data-click-id": "body"
				}, o.a.createElement(E.a, {
					className: J.a.postTopLine,
					hideAwards: oe,
					hideNSFWPref: l,
					iconClassName: J.a.postTopLineIcon,
					inSubredditOrProfile: p,
					isCommentsPage: T,
					isCurrentUserProfilePost: W,
					isOverlay: !!U,
					isTopicPage: !!H,
					post: re,
					shouldShowSubscribeButton: !1,
					showCornerOutboundLink: ve,
					showSubreddit: !p && !re.isSponsored,
					showSubredditIcon: !0,
					subredditOrProfile: ce
				}), o.a.createElement(N.c, {
					className: J.a.postTitle,
					post: re,
					redditStyle: se,
					size: N.b.Large,
					titleColor: pe && pe.postTitleColor,
					isOverlay: U
				}), T && (re.flair && re.flair.length > 0 || e.isInCategoriesExperiment) && o.a.createElement(g.a, {
					className: T ? J.a.leftPadding : null,
					disableFlair: !T,
					post: re,
					sendEvent: de,
					showCategoryTag: e.isInCategoriesExperiment && T
				}), re.source && !re.isSponsored && !s && o.a.createElement(_.a, {
					className: J.a.sourceLink,
					isCommentsPage: T,
					post: re
				})), !ge && fe && o.a.createElement(Z.a, {
					crosspost: s ? re : void 0,
					hasModPostPerms: ue,
					isCommentsPage: T,
					isOverlay: U,
					modModeEnabled: K,
					post: s || re,
					redditStyle: se,
					shouldShowSubscribeButton: ye && !p,
					subredditOrProfile: ce,
					templatePlaceholderImage: pe && pe.postPlaceholderImage
				})), re.source && re.source.url && re.isSponsored && o.a.createElement(u.a, {
					className: J.a.adLinkWrapper
				}, o.a.createElement(A.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source
				}, re.source.displayText), re.callToAction && o.a.createElement(b.a, {
					href: re.source.url.replace(a.a.redditUrl, ""),
					isSponsored: re.isSponsored,
					postId: re.id,
					source: re.source,
					isNotCardView: !0
				}, re.callToAction)), K && ue && xe && o.a.createElement(O.a, {
					className: J.a.modModeReports,
					onIgnoreReports: ee,
					reportable: re
				}), o.a.createElement(y.d, {
					postId: re.id
				}), oe && o.a.createElement(m.a, {
					awardsPlaqueStyle: !0,
					isOverlay: !!U,
					isPostDetail: T,
					thing: re
				}), o.a.createElement("div", {
					className: J.a.flatlistContainer
				}, o.a.createElement(h.a, {
					className: J.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: pe,
					redditStyle: se,
					model: re,
					onVoteClick: e.handleVote
				}), o.a.createElement(v.c, {
					currentUser: n,
					hasModFlairPerms: be,
					hasModFullPerms: he,
					hasModPostPerms: ue,
					isOverlay: !!U,
					modModeEnabled: K,
					onIgnoreReports: ee,
					onOpenReportsDropdown: te,
					post: re,
					showEditFlair: ie,
					tooltipType: U ? k.c.Lightbox : void 0,
					useFlatlistBreakpoints: Object(j.h)({
						editPost: !me,
						save: !me,
						hide: !1,
						report: !1
					})
				}))));
				return o.a.createElement(o.a.Fragment, null, Oe, G && !z && o.a.createElement(x.a, {
					className: J.a.chain,
					listingKey: q,
					listingName: X,
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
			var p = function(e, t) {
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
					redditStyle: u,
					theme: m
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
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
				p = r("./src/reddit/helpers/isPost.ts"),
				u = r("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: r,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: m = !1,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: x,
					subreddit: f,
					isOverlay: g
				} = e, v = "upvote-button-".concat(t.id).concat(g ? "-overlay" : ""), {
					moderationPrompt: y
				} = t;
				return o.a.createElement(d.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(u.a)(t),
					isSponsored: !!Object(p.b)(t) && t.isSponsored,
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
					subredditName: f.name,
					isOverlay: !!g
				}) : o.a.createElement(n.a, {
					post: t,
					subredditName: f.name,
					isOverlay: !!g
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
				p = r("./src/reddit/components/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = r("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = r("./src/reddit/constants/posts.ts"),
				h = r("./src/reddit/controls/OutboundLink/index.tsx"),
				x = r("./src/reddit/helpers/trackers/post.ts"),
				f = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = r("./src/reddit/models/Media/index.ts"),
				v = r("./src/reddit/models/Subreddit/index.ts"),
				y = r("./src/reddit/components/PostTopLine/index.m.less"),
				O = r.n(y);
			const P = r("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: r,
					hideAwards: s,
					hideNSFWPref: y,
					iconClassName: C,
					inSubredditOrProfile: S,
					isCommentsPage: j,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: N,
					isOverlay: E,
					isTopicPage: k,
					post: _,
					shouldShowSubscribeButton: I,
					showCornerOutboundLink: T,
					showSubreddit: A,
					showSubredditIcon: M,
					subredditOrProfile: R
				} = e, L = s || k;
				return o.a.createElement(P, {
					className: t
				}, A && R && o.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, o.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, M && o.a.createElement(p.b, {
					className: Object(n.a)(O.a.subredditIcon, C),
					shouldHideNsfwIcon: y,
					subredditOrProfile: R
				}))), o.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, A && o.a.createElement(d.h, {
					type: _.belongsTo.type,
					id: _.belongsTo.id
				}), o.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: r,
					tooltipType: E ? l.c.Lightbox : void 0,
					post: _,
					showSub: A,
					subredditOrProfile: R
				}), o.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: S,
					isCompactPinnedPost: w,
					post: _,
					tooltipType: E ? l.c.Lightbox : void 0
				}), R && o.a.createElement(a.a, {
					className: O.a.donationAmount,
					contentId: _.id,
					subredditId: R.id
				}), !L && o.a.createElement(i.a, {
					isPostDetail: j,
					isOverlay: E,
					thing: _
				})), R && A && I && !N && o.a.createElement(m.a, {
					getEventFactory: e => Object(x.f)(_.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(v.f)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: _.id
				}, "Subscribe"), T && o.a.createElement(h.a, {
					className: O.a.OutboundLink,
					isSponsored: _.isSponsored,
					postId: _.id,
					href: Object(g.z)(e.post),
					source: _.source
				}, o.a.createElement(f.a, {
					className: O.a.outboundLinkIcon
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
			var s = r("./node_modules/polished/dist/polished.es.js"),
				o = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
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
				b = e => Object(s.l)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				x = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
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
				return Object(n.E)(e) || s.w.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.o
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
					experimentName: s.X
				});
				return !(!t || Object(s.Ac)(t))
			}
		}
	}
]);
//# sourceMappingURL=reddit-components-MediumPost.b206043fd2b05e742428.js.map