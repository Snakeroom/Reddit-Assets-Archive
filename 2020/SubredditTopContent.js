// https://www.redditstatic.com/desktop2x/SubredditTopContent.8bdf77d368358e54d842.js
// Retrieved at 3/10/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, n) {
				var s;
				return n(e, (function(e, n, o) {
					if (t(e, n, o)) return s = n, !1
				})), s
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseFindKey.js"),
				o = n("./node_modules/lodash/_baseForOwn.js"),
				r = n("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return s(e, r(t, 3), o)
			}
		},
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/omit.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = h(o.target, o.currentTarget);
					m(o.target, o.currentTarget, u.anchors) ? r && t && e(t(n, r)) : r && t && e(e => Object.assign({}, t(n, r)(e), {
						actionInfo: Object(a.previousPageActionInfo)(e)
					})), m(o.target, o.currentTarget, u.anchorsAndButtons) && s(o)
				}
			});

			function p(e) {
				class t extends i.a.Component {
					constructor() {
						super(...arguments), this.cancelClick = !1
					}
					render() {
						const {
							sendEvent: t,
							eventFactory: n,
							clickTrackingId: s
						} = this.props;
						return i.a.createElement(e, d({}, o()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: l(t, n, s)
						}))
					}
				}
				return Object(c.b)(t)
			}
			const u = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				m = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, n)),
				h = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, n) {
			e.exports = {
				title: "_1sf7GjDaEBhme5ClA39yBo",
				closeButton: "_3NeLiUZNL4IFv7G1HHx8Km",
				communityBackground: "_1pX_BOlTi53SAMVSDu_OrT",
				seeAllPosts: "_2zf-tJ6dr3umn1gcuEpDk8",
				communityDescriptionPlaceholder: "_1RYE13EcDNn1A1X1-h42f_",
				arrowPlaceholder: "_1q9k3G4VKHdAOsl64CbSge",
				headerLink: "_2HnhAFvq_dYxe2LgLqRXfK",
				layout: "_1p-hDqS1MBOTryteGnBenr",
				widgetHeader: "_3vKpqOprvaCysVAD8GUe6L"
			}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/memoize.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/app/strings/index.ts"),
				p = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				m = n("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/components/Widgets/Base/index.tsx"),
				b = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				g = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts"),
				y = n("./src/reddit/selectors/user.ts");
			const O = e => Object(y.D)(e) || g.Ab.ShowTopContent === Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: g.wb
			});
			var C = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				v = n.n(j);
			const _ = Object(c.b)(() => Object(d.c)({
				inSubredditTopContentExperiment: O,
				language: y.O,
				subredditUrl: C.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, n) => b.f(n(), t)),
				trackDismissClick: t => e((e, n) => b.h(n(), t)),
				trackPostView: o()((t, n, s) => e((e, o) => b.A(o(), t, n, s)), (e, t) => {
					let {
						id: n
					} = e;
					return "".concat(n, "-").concat(t)
				})
			}));
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: n
						} = this.props;
						e && n(e), t()
					}
				}
				componentDidMount() {
					const {
						discoveryUnit: e,
						trackDiscoveryUnitView: t
					} = this.props;
					e && t(e)
				}
				render() {
					const {
						inSubredditTopContentExperiment: e,
						subredditUrl: t,
						topContent: n
					} = this.props;
					if (!e || !n) return null;
					const {
						postIds: s,
						range: o
					} = n, r = "".concat(t).concat(p.O.TOP, "?t=").concat(o), c = i.a.createElement(x.a, {
						className: v.a.widgetHeader
					}, i.a.createElement("button", {
						className: v.a.closeButton,
						onClick: this.onCloseClick
					}, i.a.createElement(h.b, {
						className: v.a.closeIcon,
						"data-redditstyle": !0
					})), i.a.createElement(a.a, {
						className: v.a.headerLink,
						to: r
					}, Object(l.a)(this.props.language, "discoveryUnits.topContentLast", {
						range: o
					})));
					return i.a.createElement("div", {
						className: this.props.className
					}, i.a.createElement(u.a, {
						className: v.a.layout,
						header: c,
						hidePadding: !0
					}, i.a.createElement(m.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: s,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = _(w)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = Object(s.a)({
				getComponent: () => Object(o.a)(() => Promise.all([n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = r
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/components/GildModal/getGildModalId.ts"),
				a = n("./src/reddit/components/GildModal/Loader.tsx"),
				d = n("./src/reddit/connectors/PostViewable/index.ts"),
				l = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/gild.ts"),
				u = n("./src/reddit/selectors/video.ts"),
				m = n("./src/lib/classNames/index.ts"),
				h = n("./src/higherOrderComponents/withClickTracking.tsx"),
				x = n("./src/reddit/components/PostContainer/index.m.less"),
				b = n.n(x),
				g = n("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const O = g.a.div("WrappedPost", b.a),
				C = Object(r.c)({
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					buffering: (e, t) => {
						let {
							post: n
						} = t;
						return Object(u.a)(e, {
							postId: n.id
						})
					},
					gildModalIsOpen: (e, t) => {
						let {
							isOverlay: n,
							post: s
						} = t;
						const o = Object(c.b)(s.postId, n);
						return Object(p.c)(e, o)
					},
					playing: (e, t) => {
						let {
							post: n
						} = t;
						return Object(u.e)(e, {
							postId: n.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: n
						} = t;
						return Object(u.c)(e, {
							postId: n.id
						})
					}
				}),
				j = Object(d.a)(C),
				v = e => {
					const t = Object(h.d)(e.target, e.currentTarget),
						n = Object(h.b)(e.target, e.currentTarget, h.a.buttons);
					return "subreddit" !== t && n
				};
			class _ extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const e = this.props,
						{
							pixelPostHasEnteredView: t,
							pixelPostHasExitedView: n,
							afterClickTracking: s,
							buffering: r,
							children: c,
							className: d,
							continuousViewingStartedAt: p,
							gildModalIsOpen: u,
							makePostContainerId: h,
							playing: x,
							post: b,
							onClick: g,
							onPostContentClick: C,
							onPostViewable: j,
							isOverlay: _
						} = e,
						w = y(e, ["pixelPostHasEnteredView", "pixelPostHasExitedView", "afterClickTracking", "buffering", "children", "className", "continuousViewingStartedAt", "gildModalIsOpen", "makePostContainerId", "playing", "post", "onClick", "onPostContentClick", "onPostViewable", "isOverlay"]),
						k = o.a.createElement(O, f({}, w, {
							onMouseUp: e => {
								0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
									this.cancelClick = !1
								}, 1e3))
							},
							onClick: e => {
								!this.cancelClick && e.button < 2 && (s(() => g && g(e, b))(e), C && v(e) && C(e, b))
							},
							className: Object(m.a)(d, "Post ".concat(b.id), {
								promotedlink: b.isSponsored
							}),
							id: h ? h(b.id) : b.id,
							tabIndex: -1
						}), c, u && o.a.createElement(a.a, null)),
						P = !!b.media && b.media.type === l.n.VIDEO;
					return b.isSponsored || P ? o.a.createElement(i.a, {
						onViewable: e => j(b, e),
						pixelPostHasEnteredView: e => t(b, e),
						pixelPostHasExitedView: e => n(b, e),
						children: k,
						trackVideoMetrics: P && !r && x,
						continuousViewingStartedAt: p
					}) : k
				}
			}
			t.a = j(Object(h.c)(_))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, n) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/higherOrderComponents/asTooltip.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				p = n("./src/reddit/components/QuarantinedLabel/index.m.less"),
				u = n.n(p);
			const m = ["center", "top"],
				h = ["center", "bottom"],
				x = c.a.div("Container", u.a),
				b = Object(i.a)(a.b),
				g = Object(d.t)({
					isProfileListingPage: d.F
				});
			class f extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, r.a.createElement(l.a, {
						className: u.a.quarantineIcon
					}), s.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(b, {
						text: s.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						tooltipPosition: h
					}))
				}
			}
			t.a = g(f)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(o);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, n) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				c = n.n(i);
			const a = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: "".concat(Object(r.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", c.a);
			t.a = a
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: s,
					widthLeft: r,
					gutter: c
				} = e, p = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", d({
					className: Object(i.a)(a.a.expandRightContainer, t)
				}, p), o.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: c
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=SubredditTopContent.8bdf77d368358e54d842.js.map