// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.135fa7875c0a6cc031d8.js
// Retrieved at 6/13/2022, 1:00:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const a = (e, t, s) => (function() {
				let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return n => {
					const r = m(n.target, n.currentTarget),
						d = p(n.target, n.currentTarget);
					r && s && t && (u(n.target, n.currentTarget, l.anchors) ? s(t(e, r, d)) : s(s => {
						const o = t(e, r, d)(s);
						let n;
						if (o && o.actionInfo) {
							const {
								pageType: e,
								...t
							} = o.actionInfo;
							n = t
						}
						return {
							...o,
							actionInfo: Object(i.P)(s, n)
						}
					})), u(n.target, n.currentTarget, l.anchorsAndButtons) && o(n)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...c
					} = t, l = Object(o.useCallback)(a(i, r, s), [i, r, s]);
					return n.a.createElement(e, d({}, c, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				n = s.n(o);
			const r = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", n.a);
			t.a = r
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: a,
					callToAction: l,
					caption: u
				} = t;
				if (!a || !a.url) return null;
				let m = a.displayText;
				return a.displayText.length >= 40 && (m = a.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: c.a.leftSideContent
				}, u && !n && r.a.createElement("span", {
					className: c.a.caption,
					title: u
				}, u), r.a.createElement(d.a, {
					href: a.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a,
					className: c.a.displayUrl
				}, m)), l && r.a.createElement(i.a, {
					className: c.a.callToAction,
					href: a.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: a
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/CallToActionButton/index.m.less"),
				a = s.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(i.b, c({
					className: Object(r.a)(a.a.CallToActionButton, t, {
						[a.a.mNotCardView]: s.isNotCardView
					})
				}, s))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const d = 5;

			function a(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, a = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let n = 0, r = -999; n <= l; n += 1) {
					const e = s[n],
						t = c[e].belongsTo.id;
					p(e) && n - r >= d && !u.has(t) && (r = n, u.add(t), n === l && (m = !0))
				}
				return m ? n.a.createElement(i.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = a[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = n
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/eventTools/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = d.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(u.a)(o)) return null;
				const d = o && o.eventInfo,
					m = Object(l.a)(o),
					x = d && Object(i.c)(d.eventStart, d.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, n.a.createElement(a.a, {
					post: o
				}), !m && x && n.a.createElement(c.a, {
					className: p.a.eventFollowButton,
					post: o,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(c);
			var u = e => n.a.createElement("i", {
				className: Object(d.a)(Object(a.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => n.a.createElement("i", {
					className: Object(d.a)(Object(a.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				x = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const f = h.a.span("PostEventFutureText", x.a),
				v = h.a.span("PostEventPastText", x.a),
				O = h.a.span("PostEventNowText", x.a),
				E = h.a.span("Container", x.a),
				g = h.a.wrapped(u, "CalendarIcon", x.a),
				P = h.a.wrapped(m, "LiveIcon", x.a),
				y = h.a.div("LoadingState", x.a);
			class j extends o.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: o,
						eventIsLive: d,
						eventStart: a
					} = s, c = Object(r.e)(a, o);
					let l, u;
					if (this.state.mounted || c === r.a.Live) l = n.a.createElement(p.c, {
						startTime: a,
						endTime: o,
						isLive: d
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = n.a.createElement(y, {
							className: e
						})
					}
					if (d) u = n.a.createElement(O, null, n.a.createElement(P, null), l);
					else if (c === r.a.Future) u = n.a.createElement(f, null, n.a.createElement(g, null), l);
					else {
						if (c !== r.a.Past) return null;
						u = n.a.createElement(v, null, n.a.createElement(g, null), l)
					}
					return n.a.createElement(E, {
						className: e
					}, u)
				}
			}
			t.a = j
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, s) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				i = s.n(r),
				d = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return n.a.createElement("div", {
					className: i.a.optionalText
				}, n.a.createElement(d.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/NotificationButton/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				c = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				x = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: o,
					redditStyle: b,
					shouldShowSubscribeButton: h,
					subredditOrProfile: f,
					templatePlaceholderImage: v,
					shouldShowFollowButton: O,
					isFollowed: E,
					isCommentsPage: g,
					onFollowPostClick: P
				} = e;
				return Object(m.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(x.a.thumbnailContainer, {
						[x.a.mShowingButtonOrOverflow]: O || h
					})
				}, n.a.createElement("div", {
					className: x.a.thumbnailContainerRow
				}, O && n.a.createElement(d.a, {
					isFilled: !!E,
					onClick: P,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && f && n.a.createElement(a.a, {
					className: x.a.subscribeButton,
					getEventFactory: e => Object(u.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: f.name,
						type: Object(p.i)(f) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), n.a.createElement(c.a, {
					crosspost: t,
					isCommentsPage: g,
					post: s,
					redditStyle: b,
					forceShowNSFW: o,
					templatePlaceholderImage: v
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
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
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				p = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				x = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Flatlist/index.tsx"),
				O = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				E = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				P = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				y = s("./src/reddit/components/ModModeReports/index.tsx"),
				j = s("./src/reddit/components/ModModeReports/helpers.ts"),
				T = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				C = s("./src/reddit/components/PostContainer/index.tsx"),
				S = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				w = s("./src/reddit/components/PostTitle/index.tsx"),
				_ = s("./src/reddit/components/PostTopLine/index.tsx"),
				N = s("./src/reddit/components/PostTopMeta/index.tsx"),
				M = s("./src/reddit/components/SourceLink/index.tsx"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				R = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/models/Media/index.ts"),
				U = s("./src/reddit/models/Vote/index.ts"),
				D = s("./src/reddit/contexts/Post/index.tsx"),
				H = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				V = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Q = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				q = s("./src/reddit/hooks/useIsOverlay.ts"),
				G = s("./src/reddit/hooks/useUserContext.ts"),
				J = s("./src/reddit/selectors/moderatorPermissions.ts"),
				z = s("./src/reddit/selectors/postFlair.ts"),
				Z = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/showPromotedCTA.ts"),
				Y = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				X = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				$ = s.n(X),
				ee = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				te = s("./src/reddit/selectors/i18n/index.ts"),
				se = s("./src/reddit/components/MediumPost/index.m.less"),
				oe = s.n(se),
				ne = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");

			function re() {
				return (re = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ie = () => Object(d.c)({
					crosspost: Z.d,
					flairStyleTemplate: I.W,
					isActive: Z.j,
					isBlurredPreview: ee.b,
					isCurrentUserProfilePost: Z.l,
					showPromotedCTA: K.a,
					moderatorPermissions: J.n,
					shouldShowNsfwListingBelow: te.b,
					showAwardsPlaque: H.a,
					showEditFlair: z.a,
					showMedia: I.s,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(J.j)(e, s.id)
					},
					isOptionalTextEnabled: V.a
				}),
				de = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: d,
						flairStyleTemplate: I,
						hideNSFWPref: D,
						hostPostData: H,
						inSubredditOrProfile: V = !1,
						isBlurredPreview: q,
						isCheckboxSelected: G,
						isCommentsPage: J,
						isCurrentUserProfilePost: z,
						isFrontpage: Z,
						isModWithUserNotesPermissions: K,
						isOverlay: X,
						isTopicPage: ee,
						isCommentCountAnimationEnabled: te,
						isVoteCountAnimationEnabled: se,
						isCountAnimShadowTestEnabled: re,
						imageGalleryCurrentItem: ie,
						listingKey: de,
						moderatorPermissions: ae,
						modModeEnabled: ce,
						onClickPost: le,
						post: ue,
						postId: me,
						postIds: pe,
						redditStyle: be,
						shouldHideFlair: xe,
						shouldShowNsfwListingBelow: he,
						showAwardsPlaque: fe,
						showBulkActionCheckbox: ve,
						showEditFlair: Oe,
						showMedia: Ee,
						showPromotedCTA: ge,
						sendEvent: Pe,
						subredditOrProfile: ye,
						toggleCheckbox: je,
						isAvatarPostEnabled: Te,
						isOptionalTextEnabled: Ce
					} = e, Se = Object(r.d)(), ke = e => e === U.a.upvoted ? Se(Object(l.kb)(me)) : Se(Object(l.w)(me)), we = () => Se(Object(l.gb)(me)), _e = be ? void 0 : I, Ne = Object(L.a)(ae), Me = ce && Ne, Ie = Object(F.a)(ae), Ae = Object(B.a)(ae), Fe = Object(P.a)(ue), Be = Object(j.c)(ue), Le = !!(null == H ? void 0 : H.shouldShowLinkedPosts), Re = he, We = !Object(ne.a)() && Object(A.a)(ue), Ue = V && !Ee && !Le && !Re || Te, De = Ue && !!ue.source && !s, He = !(Z && i || ee) && !z && (!V || Le || Re), Ve = (!V || Le || Re) && !ue.isSponsored, Qe = Object(a.t)(ue, ie), {
						source: qe
					} = Qe, Ge = !!(q && (null == ye ? void 0 : ye.isNSFW)), Je = Object(o.useRef)({
						renderingObjectInfo: ue
					});
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(C.a, {
						className: Object(c.a)(oe.a.container, t, $.a.largeAndMediumPostStyles, $.a.largeAndMediumActiveStyles, Object(R.a)(e), {
							[$.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: X,
						style: Object(R.b)(e.flairStyleTemplate),
						post: ue,
						onClick: le,
						eventFactory: d
					}, n.a.createElement(k.a, {
						model: ue,
						handleVote: ke,
						showBulkActionCheckbox: ve,
						isCheckboxSelected: G,
						toggleCheckbox: je,
						flairStyleTemplate: _e,
						redditStyle: be,
						isVoteCountAnimation: se,
						isCountAnimShadowTestEnabled: re,
						postId: me
					}), n.a.createElement(T.a, {
						className: oe.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: _e,
						post: ue,
						redditStyle: be
					}, n.a.createElement(h.a, {
						post: ue
					}), n.a.createElement("article", {
						className: oe.a.mainBody
					}, n.a.createElement("div", {
						className: oe.a.content,
						"data-click-id": "body"
					}, n.a.createElement(_.a, {
						className: oe.a.postTopLine,
						hideAwards: fe,
						hideNSFWPref: D,
						hostPostData: H,
						iconClassName: oe.a.postTopLineIcon,
						inSubredditOrProfile: V,
						isCommentsPage: J,
						isCurrentUserProfilePost: z,
						isModWithUserNotesPermissions: K,
						isOverlay: !!X,
						isTopicPage: !!ee,
						listingKey: de,
						post: ue,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: De,
						showSubreddit: Ve,
						showSubredditIcon: !0,
						subredditOrProfile: ye
					}), n.a.createElement(w.c, {
						className: oe.a.postTitle,
						post: ue,
						redditStyle: be,
						size: w.b.Large,
						titleColor: _e && _e.postTitleColor,
						isOverlay: X
					}), J && !xe && ue.flair && ue.flair.length > 0 && n.a.createElement(f.a, {
						className: Object(c.a)(J && oe.a.leftPadding),
						disableFlair: !J,
						post: ue,
						sendEvent: Pe
					}), ue.source && !ue.isSponsored && !s && !Ge && n.a.createElement(n.a.Fragment, null, n.a.createElement(M.a, {
						className: oe.a.sourceLink,
						isCommentsPage: J,
						post: ue
					}), Ce && ue.media && ue.media.type !== W.o.TEXT && ue.media.type !== W.o.IMAGE && ue.media.richtextContent && n.a.createElement(O.a, {
						content: ue.media.richtextContent,
						rtJsonElementProps: Je.current
					}))), !Ue && We && n.a.createElement(Y.a, {
						crosspost: s ? ue : void 0,
						hasModPostPerms: Ne,
						isCommentsPage: J,
						isOverlay: X,
						modModeEnabled: ce,
						post: s || ue,
						redditStyle: be,
						shouldShowSubscribeButton: He,
						subredditOrProfile: ye,
						templatePlaceholderImage: _e && _e.postPlaceholderImage
					})), ge && qe && qe.url && !ue.isSurveyAd && n.a.createElement(m.a, {
						className: oe.a.adLinkWrapper
					}, n.a.createElement(p.a, {
						post: ue,
						adLinkContent: Qe
					})), ce && Ne && Fe && n.a.createElement("div", {
						className: oe.a.modModeBannerWrapper
					}, n.a.createElement(g.a, {
						thing: ue
					})), ce && Ne && Be && n.a.createElement("div", {
						className: oe.a.modModeBannerWrapper
					}, n.a.createElement(y.a, {
						onIgnoreReports: we,
						reportable: ue
					})), n.a.createElement(E.d, null), fe && n.a.createElement(b.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: J,
						thing: ue,
						tooltipType: X ? N.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: oe.a.flatlistContainer
					}, n.a.createElement(x.a, {
						className: oe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: _e,
						redditStyle: be,
						model: ue,
						onVoteClick: ke
					}), !ue.isSurveyAd && n.a.createElement(v.c, {
						currentUser: i,
						hasModFlairPerms: Ie,
						hasModFullPerms: Ae,
						hasModPostPerms: Ne,
						hostPostData: H,
						isCommentCountAnimation: te,
						isCountAnimShadowTestEnabled: re,
						isOverlay: !!X,
						listingKey: de,
						modModeEnabled: ce,
						onIgnoreReports: we,
						onOpenReportsDropdown: e => Se(Object(u.h)({
							tooltipId: e
						})),
						post: ue,
						showEditFlair: Oe,
						tooltipType: X ? N.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(S.b)({
							editPost: !Me,
							save: !Me,
							hide: !1,
							report: !1
						})
					}))), Z && n.a.createElement(Q.a, {
						post: ue,
						postIds: null != pe ? pe : [],
						subredditId: null == ye ? void 0 : ye.id
					})))
				};
			t.default = Object(D.b)(n.a.memo((function(e) {
				const t = Object(o.useMemo)(() => ie(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					d = Object(i.a)(e.post),
					a = Object(G.a)();
				return n.a.createElement(de, re({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(q.a)(),
					isAvatarPostEnabled: d
				}))
			})))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const n = e => (e => !e.isApproved && !!Object(o.b)(e, o.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(o.b)(e, o.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./src/reddit/components/ModModeBanners/index.m.less"),
				a = s.n(d);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(a.a.banner, a.a.staticBanner)
			}, c._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(o.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./src/reddit/components/ModModeBanners/index.m.less"),
				a = s.n(d);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(a.a.banner, a.a.staticBanner)
			}, c._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(o.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o, n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/filterQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				h = s.n(x);
			! function(e) {
				e.OldestFirst = "oldest"
			}(o || (o = {}));
			const f = u.a.wrapped(m.b, "Row", h.a),
				v = Object(a.c)({
					currentPage: e => e.platform.currentPage,
					origin: b.j
				}),
				O = Object(d.b)(v);
			t.b = O(e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, i.a.createElement(f, {
				displayText: n.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), i.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(c.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: o.OldestFirst
				})
			}, i.a.createElement(f, {
				displayText: n.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === o.OldestFirst
			}))))
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				d = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(d.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: c,
						tooltipText: u,
						className: m
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(a.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), c && n.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				a = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: a,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return n.a.createElement("div", l({
					className: Object(r.a)(c.a.backgroundWrapper, s),
					style: Object(d.c)(o, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				d = s("./src/reddit/components/AdViewability/index.tsx"),
				a = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(a.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, i), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				g = s.n(E);
			const P = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(x.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(x.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				y = "post-container";
			class j extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: o,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: x,
						style: h,
						ref: v,
						shouldAddGalleryViewability: O = !0
					} = this.props, E = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && x(Object(a.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(g.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": y,
						id: c ? c(l.id) : l.id,
						tabIndex: -1
					}, s), P = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && O ? n.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || P ? n.a.createElement(d.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(E))
				}
			}
			t.a = P(Object(O.a)(Object(m.c)(j)))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: o
							},
							sendEvent: n
						} = this.props, r = !!o;
						n(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, n = this.state.isHovered, i = s.isFollowed;
					let d = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (d = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(a.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, d)
				}
			}
			const x = Object(i.b)(() => Object(d.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: x,
					redditStyle: h,
					isOverlay: f,
					isVoteCountAnimation: v,
					postId: O,
					shouldShowUpvoteRatioOnHover: E
				} = e, g = `upvote-button-${t.id}${f?"-overlay":""}`;
				return n.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && n.a.createElement(a.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), n.a.createElement(d.a, {
					flairStyleTemplate: x,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: g,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: O,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: E
					}),
					shouldShowUpvoteRatioOnHover: E
				}))
			}
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				x = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				T = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideAwards: j,
					hideNSFWPref: C,
					hostPostData: S,
					iconClassName: k,
					inSubredditOrProfile: w,
					isCommentsPage: _,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: M,
					isModWithUserNotesPermissions: I,
					isOverlay: A,
					isTopicPage: F,
					listingKey: B,
					post: L,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: W,
					showSubreddit: U,
					showSubredditIcon: D,
					subredditOrProfile: H,
					isFollowed: V,
					shouldShowFollowButton: Q,
					onFollowPostClick: q
				} = e;
				const G = j || F,
					J = H && Object(P.i)(H),
					z = Object(i.e)(e => {
						if (!J) return !0;
						const t = Object(y.Gb)(e, L.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(d.a)(T.a.container, t)
				}, U && H && r.a.createElement("div", {
					className: T.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, D && r.a.createElement(p.b, {
					className: Object(d.a)(T.a.subredditIcon, k),
					shouldHideNsfwIcon: C,
					subredditOrProfile: H
				}))), r.a.createElement("div", {
					className: T.a.everythingElseWrapper
				}, U && r.a.createElement(c.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), r.a.createElement(m.d, {
					className: T.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: I,
					tooltipType: A ? m.c.Lightbox : void 0,
					post: L,
					showSub: U,
					subredditOrProfile: H
				}), r.a.createElement(u.a, {
					className: T.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: L,
					tooltipType: A ? m.c.Lightbox : void 0
				}), !G && r.a.createElement(a.a, {
					isPostDetail: _,
					thing: L,
					tooltipType: A ? m.c.Lightbox : void 0
				})), H && z && U && R && !M && r.a.createElement(x.a, {
					className: T.a.SubscribeButton,
					getEventFactory: e => Object(O.k)(L.id, e ? "unsubscribe" : "subscribe", "post", B, S),
					identifier: {
						name: H.name,
						type: J ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: L.id,
					size: f.d.XS
				}), W && r.a.createElement(v.b, {
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(g.D)(L),
					source: L.source
				}, r.a.createElement(E.a, {
					className: T.a.outboundLinkIcon
				})), Q && z && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: q,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.m.less"),
				a = s.n(d);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[a.a.redditStyle]: e.redditStyle,
					[a.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/featureFlags/index.ts");

			function a(e, t, s) {
				const o = Object(i.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(r.b)(o)(e => {
					const {
						featureEnabled: o,
						...r
					} = e, i = r;
					return o ? n.a.createElement(t, i) : void 0 !== s ? n.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/thumbnails.ts"),
				n = s("./src/reddit/models/Media/index.ts");

			function r(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === o.a.SELF || e.thumbnail.url === o.a.NSFW || e.media && Object(n.E)(e.media) || t)
			}
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let n = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (n += `--[${e.onlyOfType}]`), e.sort === o.a.OldestFirst && (n += `--[${e.sort}]`), n
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return f
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				d = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const u = {},
				m = e => Object(d.g)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(d.g)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(d.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				f = e => {
					const t = Object(r.a)(Object(n.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, s) => ({
					gallery: i.r(e, t, s),
					post: i.H(e, t),
					...i.n(e)
				}),
				a = (e, t) => s => ({
					...d(s, e, t),
					action: o.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.A(s, e)
				}),
				c = (e, t) => s => {
					const a = Object(n.a)(t),
						c = Object(r.d)(s, e) + 1;
					return {
						...d(s, e, c),
						action: o.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.A(s, e),
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...d(n, e, s),
					action: o.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js");

			function n() {
				const [e, t] = Object(o.useState)(!1);
				return Object(o.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var o;

			function n(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return o
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/experiments/econAwardsPlaque.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.Tc
				});
				return !(!t || Object(o.Uf)(t))
			}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/helpers/isCrosspost.ts"),
				i = s("./src/reddit/selectors/modQueue.ts"),
				d = s("./src/reddit/selectors/platform.ts");
			const a = (e, t) => {
				let {
					post: s
				} = t;
				if (Object(i.b)(e)) return !0;
				const a = Object(d.f)(e),
					c = Object(r.a)(s);
				return !(!a || c) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Ob
					}) === o.rd
				})(e)
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const d = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.Uf)(t)
				},
				a = Object(o.a)(d, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "b", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/reddit/reducers/features/comments/index.ts"),
				a = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(i.a)({
				features: {
					comments: d.a
				},
				pages: {
					modHub: a.a
				}
			});
			const c = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(r.a)((e, t) => {
					var s, o, n;
					const {
						pageName: r,
						page: i
					} = t, d = c(0, t);
					if (!(null === (n = null === (o = null === (s = e.pages.modHub.modQueue[r]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === o ? void 0 : o[d]) || void 0 === n ? void 0 : n[i])) return;
					const a = e.pages.modHub.modQueue[r].itemOrder[d][i];
					return a ? a.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var s;
					const {
						pageName: o
					} = t;
					return null === (s = e.pages.modHub.modQueue[o]) || void 0 === s || !s.api || e.pages.modHub.modQueue[o].api.pending
				},
				m = (e, t) => {
					var s;
					const o = c(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[o]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				x = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				h = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === o.Nb.MODERATION_PAGES || t.meta.name === o.Nb.MODQUEUE_PAGES)
				}
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const d = e => Object(r.c)(e, {
					experimentName: n.Le,
					experimentEligibilitySelector: r.a
				}),
				a = (e, t) => t === n.Te.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				c = Object(o.a)(i.G, d, (e, t) => a(e, t));
			Object(o.a)((e, t) => t, d, (e, t) => a(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.135fa7875c0a6cc031d8.js.map