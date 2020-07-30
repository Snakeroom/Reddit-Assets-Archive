// https://www.redditstatic.com/desktop2x/SubredditTopContent.2602aaef1d9b05cda64b.js
// Retrieved at 7/30/2020, 5:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent"], {
		"./src/higherOrderComponents/withClickTracking.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return p
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = h(r.target, r.currentTarget);
					b(r.target, r.currentTarget, m.anchors) ? o && t && e(t(s, o)) : o && t && e(e => {
						const n = t(s, o)(e);
						let r;
						if (n && n.actionInfo) {
							const e = n.actionInfo,
								{
									pageType: t
								} = e;
							r = l(e, ["pageType"])
						}
						return Object.assign(Object.assign({}, n), {
							actionInfo: Object(a.previousPageActionInfo)(e, r)
						})
					}), b(r.target, r.currentTarget, m.anchorsAndButtons) && n(r)
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
							eventFactory: s,
							clickTrackingId: n
						} = this.props;
						return i.a.createElement(e, d({}, r()(this.props, "sendEvent", "eventFactory", "clickTrackingId"), {
							afterClickTracking: u(t, s, n)
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
				b = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && b(e.parentElement, t, s)),
				h = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && h(e.parentElement, t))
				}
		},
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/memoize.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/lib/constants/index.ts"),
				p = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				m = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx"),
				b = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = s("./src/reddit/components/Widgets/Base/index.tsx"),
				g = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = s("./src/reddit/constants/experiments.ts"),
				x = s("./src/reddit/helpers/chooseVariant/index.ts"),
				O = s("./src/reddit/selectors/user.ts");
			const y = e => Object(O.E)(e) || f.oc.ShowTopContent === Object(x.c)(e, {
				experimentEligibilitySelector: x.a,
				experimentName: f.jc
			});
			var j = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.m.less"),
				C = s.n(v);
			const k = Object(a.b)(() => Object(l.c)({
				inSubredditTopContentExperiment: y,
				subredditUrl: j.d
			}), e => ({
				trackDiscoveryUnitView: t => e((e, s) => g.g(s(), t)),
				trackDismissClick: t => e((e, s) => g.i(s(), t)),
				trackPostView: o()((t, s, n) => e((e, r) => g.B(r(), t, s, n)), (e, t) => {
					let {
						id: s
					} = e;
					return "".concat(s, "-").concat(t)
				})
			}));
			class _ extends c.a.Component {
				constructor() {
					super(...arguments), this.onCloseClick = () => {
						const {
							discoveryUnit: e,
							onCloseClick: t,
							trackDismissClick: s
						} = this.props;
						e && s(e), t()
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
						topContent: s
					} = this.props;
					if (!e || !s) return null;
					const {
						postIds: r,
						range: o
					} = s, i = "".concat(t).concat(u.O.TOP, "?t=").concat(o), a = c.a.createElement(h.a, {
						className: C.a.widgetHeader
					}, c.a.createElement("button", {
						className: C.a.closeButton,
						onClick: this.onCloseClick
					}, c.a.createElement(b.b, {
						className: C.a.closeIcon,
						"data-redditstyle": !0
					})), c.a.createElement(d.a, {
						className: C.a.headerLink,
						to: i
					}, n.fbt._("Top posts from the past {range}", [n.fbt._param("range", o)], {
						hk: "xhJKf"
					})));
					return c.a.createElement("div", {
						className: this.props.className
					}, c.a.createElement(p.a, {
						className: C.a.layout,
						header: a,
						hidePadding: !0
					}, c.a.createElement(m.a, {
						discoveryUnit: this.props.discoveryUnit,
						searchDiscoveryUnit: this.props.searchDiscoveryUnit,
						isLoading: !1,
						isMiniCard: !1,
						items: r,
						searchOptions: this.props.searchOptions,
						showSubreddit: !0,
						showTopPosts: !0,
						singleSubredditMode: !0,
						onPostView: this.props.trackPostView
					})))
				}
			}
			t.default = k(_)
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var l = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(a.a)(t, o, i), r.a.createElement("div", {
						"aria-role": "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/video.ts"),
				h = s("./src/lib/classNames/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking.tsx"),
				f = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(f);
			const O = Object(o.c)({
					basePixelMetadata: (e, t) => {
						let {
							post: s
						} = t;
						return Object(m.b)(e, s.id)
					},
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					buffering: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.a)(e, {
							postId: s.id
						})
					},
					playing: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.f)(e, {
							postId: s.id
						})
					},
					continuousViewingStartedAt: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.c)(e, {
							postId: s.id
						})
					}
				}),
				y = Object(u.a)(O),
				j = e => {
					const t = Object(g.d)(e.target, e.currentTarget),
						s = Object(g.b)(e.target, e.currentTarget, g.a.buttons);
					return "subreddit" !== t && s
				};
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						makePostContainerId: o,
						post: c,
						onClick: a,
						onPostContentClick: d,
						style: u,
						ref: m
					} = this.props, b = r.a.createElement("div", {
						style: u,
						ref: m,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							!this.cancelClick && s.button < 2 && (e(() => a && a(s, c, t))(s), d && j(s) && d(s, c))
						},
						className: Object(h.a)(x.a.WrappedPost, n, "Post ".concat(c.id), {
							promotedlink: c.isSponsored
						}),
						id: o ? o(c.id) : c.id,
						tabIndex: -1
					}, s), g = !!c.media && c.media.type === p.o.VIDEO;
					return c.isSponsored || g ? r.a.createElement(i.a, {
						post: c,
						trackDisplay: !0
					}, b) : c.media && Object(p.F)(c.media) ? r.a.createElement(l, {
						postId: c.id
					}, b) : b
				}
			}
			t.a = y(Object(g.c)(v))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				p = s.n(u);
			const m = ["center", "top"],
				b = ["center", "bottom"],
				h = c.a.div("Container", p.a),
				g = Object(i.a)(a.b),
				f = Object(d.t)({
					isProfileListingPage: d.F
				});
			class x extends o.a.Component {
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
					return o.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, o.a.createElement(l.a, {
						className: p.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), o.a.createElement(g, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: m,
						tooltipPosition: b
					}))
				}
			}
			t.a = f(x)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				o = s.n(r);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", o.a);
			t.a = i
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => Object.assign({
					gallery: o.gallery(e, t, s),
					post: o.post(e, t)
				}, o.defaults(e)),
				c = (e, t) => s => Object.assign(Object.assign({}, i(s, e, t)), {
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: o.media(s, e)
				}),
				a = (e, t, s) => c => {
					const a = Object(r.a)(t);
					return Object.assign(Object.assign({}, i(c, e, s)), {
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: Object.assign(Object.assign({}, o.media(c, e)), {
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						})
					})
				},
				d = (e, t) => u(e, !0, t),
				l = (e, t) => u(e, !1, t),
				u = (e, t, s) => r => Object.assign(Object.assign({}, i(r, e, s)), {
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js");
			t.a = function(e, t, s) {
				Object(n.useEffect)(() => {
					const n = e && e.current;
					if (!n || "undefined" == typeof IntersectionObserver) return;
					const r = new IntersectionObserver(t, s);
					return r.observe(n), () => {
						r.unobserve(n)
					}
				}, [e, t, s])
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.m.less": function(e, t, s) {
			e.exports = {
				CrosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn",
				crosspostIcon: "_1lgwGF1j_DukLN7vdKUyHn"
			}
		},
		"./src/reddit/icons/fonts/Crosspost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Crosspost/index.m.less"),
				c = s.n(i);
			const a = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(o.b)("crosspost"), " ").concat(e.className)
			}), "CrosspostIcon", c.a);
			t.a = a
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				a = s.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var l = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: o,
					gutter: c
				} = e, u = l(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return r.a.createElement("div", d({
					className: Object(i.a)(a.a.expandRightContainer, t)
				}, u), r.a.createElement("div", {
					className: a.a.left,
					style: {
						flexBasis: o,
						height: n,
						marginRight: c
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: a.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=SubredditTopContent.2602aaef1d9b05cda64b.js.map