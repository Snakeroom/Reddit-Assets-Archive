// https://www.redditstatic.com/desktop2x/SubredditTopContent.817ac04b1026016b7733.js
// Retrieved at 7/7/2020, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
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
			var l = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const p = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = x(o.target, o.currentTarget);
					h(o.target, o.currentTarget, m.anchors) ? r && t && e(t(n, r)) : r && t && e(e => {
						const s = t(n, r)(e);
						let o;
						if (s && s.actionInfo) {
							const e = s.actionInfo,
								{
									pageType: t
								} = e;
							o = l(e, ["pageType"])
						}
						return Object.assign({}, s, {
							actionInfo: Object(a.previousPageActionInfo)(e, o)
						})
					}), h(o.target, o.currentTarget, m.anchorsAndButtons) && s(o)
				}
			});

			function u(e) {
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
							afterClickTracking: p(t, n, s)
						}))
					}
				}
				return Object(c.c)(t)
			}
			const m = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				h = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && h(e.parentElement, t, n)),
				x = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && x(e.parentElement, t))
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/memoize.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				a = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./node_modules/reselect/es/index.js"),
				p = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				m = n("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = n("./src/reddit/components/Widgets/Base/index.tsx"),
				b = n("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				g = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/chooseVariant/index.ts"),
				y = n("./src/reddit/selectors/user.ts");
			const O = e => Object(y.E)(e) || g.ec.ShowTopContent === Object(f.c)(e, {
				experimentEligibilitySelector: f.a,
				experimentName: g.Zb
			});
			var C = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				v = n.n(_);
			const j = Object(a.b)(() => Object(l.c)({
				inSubredditTopContentExperiment: O,
				subredditUrl: C.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, n) => b.f(n(), t)),
				trackDismissClick: t => e((e, n) => b.h(n(), t)),
				trackPostView: r()((t, n, s) => e((e, o) => b.A(o(), t, n, s)), (e, t) => {
					let {
						id: n
					} = e;
					return "".concat(n, "-").concat(t)
				})
			}));
			class k extends c.a.Component {
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
						postIds: o,
						range: r
					} = n, i = "".concat(t).concat(p.O.TOP, "?t=").concat(r), a = c.a.createElement(x.a, {
						className: v.a.widgetHeader
					}, c.a.createElement("button", {
						className: v.a.closeButton,
						onClick: this.onCloseClick
					}, c.a.createElement(h.b, {
						className: v.a.closeIcon,
						"data-redditstyle": !0
					})), c.a.createElement(d.a, {
						className: v.a.headerLink,
						to: i
					}, s.fbt._("Top posts from the past {range}", [s.fbt._param("range", r)], {
						hk: "xhJKf"
					})));
					return c.a.createElement("div", {
						className: this.props.className
					}, c.a.createElement(u.a, {
						className: v.a.layout,
						header: a,
						hidePadding: !0
					}, c.a.createElement(m.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: o,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = j(k)
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				d = n("./src/reddit/selectors/video.ts"),
				l = n("./src/lib/classNames/index.ts"),
				p = n("./src/higherOrderComponents/withClickTracking.tsx"),
				u = n("./src/reddit/components/PostContainer/index.m.less"),
				m = n.n(u);
			const h = Object(r.c)({
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
						return Object(d.a)(e, {
							postId: n.id
						})
					},
					playing: (e, t) => {
						let {
							post: n
						} = t;
						return Object(d.f)(e, {
							postId: n.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: n
						} = t;
						return Object(d.c)(e, {
							postId: n.id
						})
					}
				}),
				x = Object(c.a)(h),
				b = e => {
					const t = Object(p.d)(e.target, e.currentTarget),
						n = Object(p.b)(e.target, e.currentTarget, p.a.buttons);
					return "subreddit" !== t && n
				};
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: n,
						makePostContainerId: s,
						post: r,
						onClick: c,
						onPostContentClick: d,
						style: p,
						ref: u
					} = this.props, h = o.a.createElement("div", {
						style: p,
						ref: u,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && (e(() => c && c(t, r))(t), d && b(t) && d(t, r))
						},
						className: Object(l.a)(m.a.WrappedPost, n, "Post ".concat(r.id), {
							promotedlink: r.isSponsored
						}),
						id: s ? s(r.id) : r.id,
						tabIndex: -1
					}, t), x = !!r.media && r.media.type === a.o.VIDEO;
					return r.isSponsored || x ? o.a.createElement(i.a, {
						post: r,
						trackDisplay: !0
					}, h) : h
				}
			}
			t.a = x(Object(p.c)(g))
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
//# sourceMappingURL=SubredditTopContent.817ac04b1026016b7733.js.map