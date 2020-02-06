// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.fb83a2b150ab73cee393.js
// Retrieved at 2/6/2020, 1:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./node_modules/react-dom/index.js");
			o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), o("./node_modules/invariant/browser.js");

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(o, r) {
					return i(e[r], t[r])
				})) : e !== t
			}

			function a() {
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
					r = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
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
							[o, l.rootMargin],
							[r, l.thresholds]
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
						var o = d.get(t);
						if (o) {
							var r = o.values(),
								s = Array.isArray(r),
								n = 0;
							for (r = s ? r : r[Symbol.iterator]();;) {
								var i;
								if (s) {
									if (n >= r.length) break;
									i = r[n++]
								} else {
									if ((n = r.next()).done) break;
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
						for (var o = 0; o < t.length; o++) {
							var r = t[o];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, o, r) {
						return o && e(t.prototype, o), r && e(t, r), t
					}
				}();

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function u(e, t) {
				e.forEach((function(e) {
					var o = c.findElement(e, t);
					o && o.handleChange(e)
				}))
			}
			var m = ["root", "rootMargin", "threshold"],
				b = Object.prototype,
				h = function(e) {
					function t() {
						var o, r;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						for (var s = arguments.length, n = Array(s), i = 0; i < s; i++) n[i] = arguments[i];
						return o = r = p(this, e.call.apply(e, [this].concat(n))), r.handleChange = function(e) {
							r.props.onChange(e), r.props.onlyOnce && e.isIntersecting && r.unobserve()
						}, r.handleNode = function(e) {
							"function" == typeof r.props.children.ref && r.props.children.ref(e), r.currentTarget && e && r.currentTarget !== e && (r.unobserve(), r.shouldResetObserver = !0), r.target = e
						}, p(r, o)
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
						this.shouldResetObserver = m.concat(["disabled"]).some((function(o) {
							return i(e[o], t.props[o])
						}))
					}, t.prototype.render = function() {
						return this.currentTarget = this.target, s.a.cloneElement(s.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, l(t, [{
						key: "options",
						get: function() {
							var e = this;
							return m.reduce((function(t, o) {
								if (b.hasOwnProperty.call(e.props, o)) {
									var r, s = e.props[o];
									return "root" === o && "[object String]" === b.toString.call(e.props[o]) && (s = document.querySelector(s)), Object.assign({}, t, ((r = {})[o] = s, r))
								}
								return t
							}), {})
						}
					}]), t
				}(s.a.Component);
			h.displayName = "IntersectionObserver";
			var f = h;
			o.d(t, "a", (function() {
				return f
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}
			e.exports = function() {
				function e(e, t, o, s, n, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
				return o.checkPropTypes = s, o.PropTypes = o, o
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
				for (var o = -1, r = null == e ? 0 : e.length; ++o < r;)
					if (!t(e[o], o, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, t) {
				var o = !0;
				return r(e, (function(e, r, s) {
					return o = !!t(e, r, s)
				})), o
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, o) {
				var r;
				return o(e, (function(e, o, s) {
					if (t(e, o, s)) return r = o, !1
				})), r
			}
		},
		"./node_modules/lodash/every.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_arrayEvery.js"),
				s = o("./node_modules/lodash/_baseEvery.js"),
				n = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, t, o) {
				var d = i(e) ? r : s;
				return o && a(e, t, o) && (t = void 0), d(e, n(t, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, o) {
			var r = o("./node_modules/lodash/_baseFindKey.js"),
				s = o("./node_modules/lodash/_baseForOwn.js"),
				n = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return r(e, n(t, 3), s)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, o) {
			var r = o("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return r(e) + t
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
			var r = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				s = o.n(r);
			const n = o("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", s.a);
			t.a = n
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = o("./src/reddit/components/CallToActionButton/index.m.less"),
				d = o.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var o = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]])
				}
				return o
			};
			t.a = e => {
				var {
					className: t
				} = e, o = l(e, ["className"]);
				return s.a.createElement(i.a, c({
					className: Object(n.a)(t, d.a.CallToActionButton, {
						[d.a.mNotCardView]: o.isNotCardView
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = o("./src/reddit/components/VerticalVotes/index.tsx"),
				d = o("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				c = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var o = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]])
				}
				return o
			};
			const u = Object(i.a)(e => {
				var {
					className: t
				} = e, o = p(e, ["className"]);
				return s.a.createElement(a.a, l({}, o, {
					className: Object(n.a)(c.a.horizontalVotes, t),
					scoreClassName: c.a.customScoreStyles,
					downvoteClassName: Object(a.b)(o) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, o) {
			"use strict";
			var r = o("./src/higherOrderComponents/makeAsync.tsx"),
				s = o("./src/lib/loadWithRetries/index.ts");
			const n = Object(r.a)({
				getComponent: () => Object(s.a)(() => Promise.all([o.e("vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"), o.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~InFeedChaining~ModerationP~dae39178"), o.e("InFeedChaining~SearchResults~SubredditTopContent~TopWeekPostsDiscoveryUnit"), o.e("InFeedChaining")]).then(o.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2y2WPgX5vi2SAfi_nz_Q7B"
			}
		},
		"./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/i18n/components.tsx"),
				a = o("./src/reddit/components/Governance/Proposal/NoProposalError/index.m.less"),
				d = o.n(a);
			t.a = function(e) {
				return s.a.createElement("div", {
					className: Object(n.a)(d.a.container, e.className)
				}, s.a.createElement(i.c, null, "Error: Could not load poll"))
			}
		},
		"./src/reddit/components/Governance/Proposal/async.ts": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/config.ts"),
				d = o("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = o("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				l = o("./src/reddit/helpers/styles/mixins/index.tsx"),
				p = o("./src/reddit/actions/inFeedChaining.ts"),
				u = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/tooltip.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				h = o("./src/reddit/models/Poll/index.ts"),
				f = o("./src/reddit/models/Post/index.ts"),
				y = o("./src/reddit/models/Vote/index.ts"),
				x = o("./src/reddit/selectors/activeModalId.ts"),
				v = o("./src/reddit/selectors/inFeedChaining.ts"),
				g = o("./src/reddit/selectors/moderatorPermissions.ts"),
				O = o("./src/reddit/selectors/posts.ts"),
				P = o("./src/reddit/selectors/user.ts"),
				j = o("./src/lib/classNames/index.ts"),
				C = o("./src/reddit/components/AdLinkWrapper/index.tsx"),
				_ = o("./src/reddit/components/CallToActionButton/index.tsx"),
				S = o("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				E = o("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				k = o("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = o("./src/reddit/components/Flatlist/index.tsx"),
				I = o("./src/reddit/components/Governance/Proposal/async.ts"),
				N = o("./src/reddit/components/Governance/Proposal/NoProposalError/index.tsx"),
				w = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = o("./src/reddit/components/ModModeReports/index.tsx"),
				L = o("./src/reddit/components/ModModeReports/helpers.ts"),
				R = o("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				M = o("./src/reddit/components/PostContainer/index.tsx"),
				B = o("./src/reddit/components/PostLeftRail/index.tsx"),
				V = o("./src/reddit/components/PostMedia/index.tsx"),
				W = o("./src/reddit/components/PostOverflowMenu/index.tsx"),
				F = o("./src/reddit/i18n/components.tsx"),
				U = o("./src/reddit/icons/fonts/Sticky/index.tsx"),
				H = o("./src/reddit/components/PostPinnedHeader/index.m.less"),
				D = o.n(H);
			var z = () => s.a.createElement("div", {
					className: D.a.container
				}, s.a.createElement(U.a, {
					className: D.a.pinnedIcon
				}), s.a.createElement("span", {
					className: D.a.metaText
				}, s.a.createElement(F.c, null, "pinned by moderators"))),
				K = o("./src/reddit/components/PostRailAndVotes/index.tsx"),
				G = o("./src/reddit/components/PostTitle/index.tsx"),
				Q = o("./src/reddit/components/PostTopLine/index.tsx"),
				Z = o("./src/reddit/components/SourceLink/index.tsx"),
				X = o("./src/reddit/contexts/InsideOverlay.tsx"),
				J = o("./src/reddit/contexts/PageLayer/index.tsx"),
				Y = o("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = o("./src/reddit/helpers/isCrosspost.ts"),
				$ = o("./src/reddit/helpers/postEvent.ts"),
				ee = o("./src/reddit/constants/experiments.ts"),
				te = o("./src/reddit/helpers/chooseVariant/index.ts"),
				oe = o("./src/reddit/helpers/getRichTextContent/index.ts");
			const re = Object(i.a)(O.O, e => e.some(oe.c)),
				se = Object(i.a)(re, e => e),
				ne = (e, t) => Object(te.c)(e, {
					experimentName: ee.A,
					experimentEligibilitySelector: e => {
						const {
							listingKey: o
						} = t;
						return !!o && se(e, {
							listingKey: o
						})
					}
				});
			var ie = o("./src/reddit/selectors/postFlair.ts"),
				ae = o("./src/reddit/helpers/styles/mixins/index.m.less"),
				de = o.n(ae),
				ce = o("./src/reddit/components/LargePost/index.m.less"),
				le = o.n(ce);
			const pe = (e, t) => {
					const {
						listingKey: o
					} = t;
					return o ? Object(O.O)(e, {
						listingKey: o
					}) : void 0
				},
				ue = (e, t) => {
					const {
						listingKey: o
					} = t;
					return o ? Object(O.C)(e, {
						listingKey: o
					}) : void 0
				},
				me = Object(n.b)(() => Object(i.c)({
					autoplayPref: P.b,
					activeModalId: x.a,
					currentUser: P.i,
					hideNSFWPref: P.y,
					flairStyleTemplate: J.O,
					isCurrentUserProfilePost: O.h,
					isLoggedIn: P.G,
					language: P.P,
					isActive: O.g,
					isPostChainDismissed: v.c,
					isPostChained: v.d,
					moderatorPermissions: g.i,
					modModeEnabled: J.M,
					poll: (e, t) => {
						const o = e.posts.metaMap[t.postId];
						return o ? e.polls.models[o] : null
					},
					pollResult: (e, t) => {
						const o = e.posts.metaMap[t.postId];
						return o ? e.polls.results.byVoters[o] : null
					},
					post: O.I,
					posts: pe,
					postHeightVariant: ne,
					postIds: ue,
					showEditFlair: ie.a,
					subredditOrProfile: O.U,
					userIsOp: P.fb
				}), (e, t) => {
					let {
						listingKey: o,
						listingName: r,
						postId: s
					} = t;
					return {
						chainPost: () => {
							r && o && e(Object(p.d)({
								listingKey: o,
								listingName: r,
								postId: s
							}))
						},
						handleVote: t => {
							const o = t === y.a.upvoted ? Object(u.Q)(s) : Object(u.r)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(u.O)(s)),
						onOpenReportsDropdown: t => e(Object(m.h)({
							tooltipId: t
						}))
					}
				}),
				be = s.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: o,
						chainPost: r,
						className: n,
						currentUser: i,
						eventFactory: p,
						flairStyleTemplate: u,
						forceLoadMedia: m,
						hideNSFWPref: y,
						inSubredditOrProfile: x = !1,
						isCommentsPage: v,
						isCurrentUserProfilePost: g,
						isFrontpage: O,
						isLoggedIn: P,
						isOverlay: F,
						isPostChainDismissed: U,
						isPostChained: H,
						language: D,
						listingKey: X,
						listingName: J,
						moderatorPermissions: te,
						modModeEnabled: oe,
						onClickPost: re,
						onIgnoreReports: se,
						onOpenReportsDropdown: ne,
						poll: ie,
						pollResult: ae,
						post: ce,
						postHeightVariant: pe,
						scrollerItemRef: ue,
						showEditFlair: me,
						subredditOrProfile: be,
						userIsOp: he
					} = e, fe = !!e.redditStyle || !!e["data-redditstyle"], ye = fe ? void 0 : u, xe = Object(c.a)(te), ve = oe && xe, ge = Object(d.a)(te), Oe = Object(L.c)(ce), Pe = !!ce.media && ce.media.type === b.n.RTJSON, je = he && Pe, Ce = o ? o - B.a : void 0, _e = !!ae && !!Object.keys(ae.options).filter(e => ae.options[e].userSelected).length, Se = !(O && P), Ee = (e => e === ee.ib.OnlyTitles)(pe) && !Object(q.a)(ce), ke = (e => e === ee.ib.MediumHeight)(pe) && !Object(q.a)(ce), Te = (e => {
						const {
							post: t,
							postIds: o,
							posts: r
						} = e;
						if (!Object(f.k)(t)) return;
						const s = o && 0 === o.indexOf(t.id),
							n = o && 1 === o.indexOf(t.id),
							i = r && r[1] && Object(f.k)(r[1]);
						return {
							hasTopCompactPostStyles: s && i,
							hasBottomCompactPostStyles: n,
							showPinnnedHeader: s
						}
					})(e), Ie = s.a.createElement(M.a, {
						className: Object(j.a)(le.a.container, n, de.a.largeAndMediumPostStyles, de.a.largeAndMediumActiveStyles, Object(l.a)(e), {
							[de.a.mUseRedditTheme]: fe,
							promotedvideolink: ce.isSponsored && !(ce.media && b.a.has(ce.media.type)),
							[le.a.topCompactPost]: Te && Te.hasTopCompactPostStyles,
							[le.a.bottomCompactPost]: Te && Te.hasBottomCompactPostStyles
						}),
						isOverlay: F,
						style: Object(l.b)(e.flairStyleTemplate),
						post: ce,
						onClick: re,
						onPostContentClick: r,
						eventFactory: p
					}, s.a.createElement(K.a, {
						model: ce,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ye,
						redditStyle: fe
					}), s.a.createElement(R.a, {
						className: Object(j.a)(le.a.backgroundWrapper, {
							[le.a.isEvent]: Object($.a)(ce)
						}),
						"data-click-id": "background",
						flairStyleTemplate: ye,
						post: ce,
						redditStyle: fe
					}, s.a.createElement(k.a, {
						post: ce,
						language: D
					}), Te && Te.showPinnnedHeader && s.a.createElement(z, null), s.a.createElement(Q.a, {
						className: le.a.postTopLine,
						hideNSFWPref: y,
						iconClassName: le.a.postTopLineIcon,
						inSubredditOrProfile: x,
						isCommentsPage: !!v,
						isCompactPinnedPost: !!Te,
						isCurrentUserProfilePost: g,
						isOverlay: !!F,
						language: D,
						post: ce,
						shouldShowSubscribeButton: Se,
						showSubreddit: !x && !ce.isSponsored,
						showSubredditIcon: !0,
						subredditOrProfile: be
					}), s.a.createElement(G.c, {
						className: le.a.postTitle,
						post: ce,
						redditStyle: fe,
						size: G.b.Large,
						titleColor: ye && ye.postTitleColor,
						isOverlay: F
					}), ce.source && !ce.isSponsored && s.a.createElement(Z.a, {
						className: le.a.sourceLink,
						post: ce
					}), s.a.createElement("div", {
						className: Object(j.a)(le.a.postMediaWrapper, {
							[le.a.votedContent]: _e
						})
					}, !Te && s.a.createElement(V.a, {
						isListing: !0,
						isMediumHeight: ke,
						isNotCardView: !!F,
						isTitleOnly: Ee,
						showCentered: !0,
						flairStyleTemplate: ye,
						post: ce,
						availableWidth: Ce,
						shouldLoad: m,
						scrollerItemRef: ue,
						autoplayPref: t
					})), ie && s.a.createElement(I.a, {
						className: Object(j.a)(le.a.proposal, {
							[le.a.mHasNotVoted]: !ae,
							[le.a.mPollIsClosed]: !!ae && Object(h.e)(ie, ae),
							[le.a.mGAPoll]: ie.type === h.a.GA
						}),
						pollId: ie.id,
						subredditId: ce.belongsTo.id
					}), ce.isMeta && !ie && s.a.createElement(N.a, {
						className: le.a.noProposal
					}), ce.source && ce.source.url && ce.isSponsored && s.a.createElement(C.a, {
						className: le.a.adLinkWrapper
					}, s.a.createElement(Y.a, {
						href: ce.source.url.replace(a.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.source.displayText), ce.callToAction && s.a.createElement(_.a, {
						href: ce.source.url.replace(a.a.redditUrl, ""),
						isSponsored: ce.isSponsored,
						source: ce.source
					}, ce.callToAction)), oe && xe && Oe && s.a.createElement(A.a, {
						language: D,
						onIgnoreReports: se,
						reportable: ce
					}), s.a.createElement(w.d, {
						postId: ce.id
					}), s.a.createElement("div", {
						className: le.a.flatListContainer
					}, s.a.createElement(S.a, {
						className: le.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ye,
						model: ce,
						onVoteClick: e.handleVote
					}), s.a.createElement(T.c, {
						currentUser: i,
						hasModFlairPerms: ge,
						hasModPostPerms: xe,
						isLargePost: !0,
						isOverlay: !!F,
						language: D,
						modModeEnabled: oe,
						onIgnoreReports: se,
						onOpenReportsDropdown: ne,
						post: ce,
						showEditPost: je,
						showEditFlair: me,
						useFlatlistBreakpoints: Object(W.h)({
							editPost: !1,
							save: !ve,
							hide: !1,
							report: !1
						})
					}))));
					return s.a.createElement(s.a.Fragment, null, Ie, H && !U && s.a.createElement(E.a, {
						className: le.a.chain,
						listingKey: X,
						listingName: J,
						postId: ce.id
					}))
				});
			t.default = me(Object(X.b)(be))
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = o("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = o("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var o = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (o[r[s]] = e[r[s]])
				}
				return o
			};
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: o,
					flairStyleTemplate: r,
					onClick: i,
					post: d,
					redditStyle: u,
					theme: m
				} = e, b = p(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return s.a.createElement("div", l({
					className: Object(n.a)(c.a.backgroundWrapper, o),
					style: Object(a.c)(r, e),
					onClick: i
				}, b), t)
			})
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/reddit/components/PostLeftRail/index.tsx"),
				i = o("./src/reddit/components/VerticalVotes/index.tsx"),
				a = o("./src/reddit/controls/Checkbox/index.tsx"),
				d = o("./src/reddit/helpers/isPost.ts"),
				c = o("./src/reddit/helpers/showReportIndicator/index.ts");
			t.a = e => {
				const {
					model: t,
					handleVote: o,
					showBulkActionCheckbox: r = !1,
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
				}, r && s.a.createElement(a.a, {
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), s.a.createElement(i.a, {
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
			var r = o("./node_modules/react/index.js"),
				s = o.n(r),
				n = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/AwardBadges/index.tsx"),
				a = o("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				d = o("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = o("./src/reddit/components/PostBadges/index.tsx"),
				l = o("./src/reddit/components/PostTopMeta/index.tsx"),
				p = o("./src/reddit/components/SubredditIcon/index.tsx"),
				u = o("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = o("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = o("./src/reddit/constants/posts.ts"),
				h = o("./src/reddit/controls/OutboundLink/index.tsx"),
				f = o("./src/reddit/helpers/trackers/post.ts"),
				y = o("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = o("./src/reddit/models/Media/index.ts"),
				v = o("./src/reddit/models/Subreddit/index.ts"),
				g = o("./src/reddit/components/PostTopLine/index.m.less"),
				O = o.n(g);
			const P = o("./src/lib/lessComponent.tsx").a.div("Container", O.a);
			t.a = e => {
				const {
					className: t,
					flairStyleTemplate: o,
					hideNSFWPref: r,
					iconClassName: g,
					inSubredditOrProfile: j,
					isCurrentUserProfilePost: C,
					isCommentsPage: _,
					isCompactPinnedPost: S,
					isOverlay: E,
					language: k,
					post: T,
					publicAwardersEnabled: I,
					shouldShowSubscribeButton: N,
					showCornerOutboundLink: w,
					showSubreddit: A,
					showSubredditIcon: L,
					subredditOrProfile: R
				} = e, M = _ && I;
				return s.a.createElement(P, {
					className: t
				}, A && R && s.a.createElement("div", {
					className: O.a.subredditIconWrapper
				}, s.a.createElement(u.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, L && s.a.createElement(p.b, {
					className: Object(n.a)(O.a.subredditIcon, g),
					shouldHideNsfwIcon: r,
					subredditOrProfile: R
				}))), s.a.createElement("div", {
					className: O.a.everythingElseWrapper
				}, A && s.a.createElement(d.h, {
					type: T.belongsTo.type,
					id: T.belongsTo.id
				}), s.a.createElement(l.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: o,
					tooltipType: E ? l.c.Lightbox : void 0,
					language: k,
					post: T,
					showSub: A,
					subredditOrProfile: R
				}), s.a.createElement(c.a, {
					className: O.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: j,
					language: k,
					isCompactPinnedPost: S,
					post: T,
					tooltipType: E ? l.c.Lightbox : void 0
				}), R && s.a.createElement(a.a, {
					className: O.a.donationAmount,
					contentId: T.id,
					subredditId: R.id
				}), s.a.createElement(i.a, {
					forceShowAllAwards: _,
					isOverlay: E,
					showAwarders: M,
					tooltipType: E ? l.c.Lightbox : void 0,
					thing: T
				})), R && A && N && !C && s.a.createElement(m.a, {
					getEventFactory: e => Object(f.f)(T.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: R.name,
						type: Object(v.e)(R) ? b.a.PROFILE : b.a.SUBREDDIT
					},
					postId: T.id
				}, "Subscribe"), w && s.a.createElement(h.a, {
					className: O.a.OutboundLink,
					isSponsored: T.isSponsored,
					href: Object(x.A)(e.post),
					source: T.source
				}, s.a.createElement(y.a, {
					className: O.a.outboundLinkIcon
				})))
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "e", (function() {
				return u
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "a", (function() {
				return f
			})), o.d(t, "d", (function() {
				return y
			}));
			var r = o("./node_modules/polished/dist/polished.es.js"),
				s = o("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				n = o("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = o("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = o("./src/reddit/models/Theme/index.ts"),
				d = o("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = o("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = o.n(c);
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
				b = e => Object(r.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : p,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				y = e => {
					const t = Object(n.a)(Object(s.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		}
	}
]);
//# sourceMappingURL=reddit-components-LargePost.fb83a2b150ab73cee393.js.map