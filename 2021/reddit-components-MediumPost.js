// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e1f068b1f39bd0b2f5eb.js
// Retrieved at 7/28/2021, 3:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (o = (() => {})) => n => {
				const r = m(n.target, n.currentTarget),
					a = p(n.target, n.currentTarget);
				r && s && t && (u(n.target, n.currentTarget, l.anchors) ? s(t(e, r, a)) : s(s => {
					const o = t(e, r, a)(s);
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
						actionInfo: Object(i.previousPageActionInfo)(s, n)
					}
				})), u(n.target, n.currentTarget, l.anchorsAndButtons) && o(n)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(o.useCallback)(c(i, r, s), [i, r, s]);
					return n.a.createElement(e, a({}, d, {
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
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !n && r.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), r.a.createElement(a.a, {
					href: c.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && r.a.createElement(i.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => n.a.createElement(i.a, d({
				className: Object(r.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: o
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let n = 0, r = -999; n <= l; n += 1) {
					const e = s[n],
						t = d[e].belongsTo.id;
					p(e) && n - r >= a && !u.has(t) && (r = n, u.add(t), n === l && (m = !0))
				}
				return m ? n.a.createElement(i.a, {
					subredditId: o,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(i.a)(({
				className: e,
				...t
			}) => n.a.createElement(a.a, l({}, t, {
				className: Object(r.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(a.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n);
			const i = Object(o.a)({
				resolved: {},
				chunkName: () => "InFeedChaining",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), s.e("InFeedChaining")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/InFeedChaining/index.tsx"
				}
			}, {
				fallback: r.a.createElement("div", null),
				ssr: !1
			});
			t.a = i
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
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const o = s && s.eventInfo,
					a = Object(l.a)(s),
					m = o && Object(i.c)(o.eventStart, o.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, n.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, n.a.createElement(c.a, {
					post: s
				}), !a && m && n.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
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
				i = s("./src/lib/humanizeEventTime/index.ts"),
				a = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				l = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				u = s.n(l);
			var m = e => n.a.createElement("i", {
				className: Object(c.a)(Object(d.b)("scheduled", e.isFilled), u.a.calendarIcon, e.className)
			});
			var p = e => n.a.createElement("i", {
					className: Object(c.a)(Object(d.b)("live", e.isFilled), u.a.liveIcon, e.className)
				}),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				x = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const v = h.a.span("PostEventFutureText", x.a),
				f = h.a.span("PostEventPastText", x.a),
				y = h.a.span("PostEventNowText", x.a),
				E = h.a.span("Container", x.a),
				O = h.a.wrapped(m, "CalendarIcon", x.a),
				g = h.a.wrapped(p, "LiveIcon", x.a),
				j = h.a.div("LoadingState", x.a);
			class S extends o.Component {
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
						eventIsLive: c,
						eventStart: d
					} = s, l = Object(r.e)(d, o);
					let u, m;
					if (this.state.mounted || l === r.a.Live) u = Object(i.a)(d, o, c);
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						u = n.a.createElement(j, {
							className: e
						})
					}
					if (c) m = n.a.createElement(y, null, n.a.createElement(g, null), u);
					else if (l === r.a.Future) m = n.a.createElement(v, null, n.a.createElement(O, null), u);
					else {
						if (l !== r.a.Past) return null;
						m = n.a.createElement(f, null, n.a.createElement(O, null), u)
					}
					return n.a.createElement(E, {
						className: e
					}, m)
				}
			}
			t.a = S
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				x = s.n(b);
			t.a = ({
				crosspost: e,
				post: t,
				forceShowNSFW: s,
				redditStyle: o,
				shouldShowSubscribeButton: b,
				subredditOrProfile: h,
				templatePlaceholderImage: v,
				shouldShowFollowButton: f,
				isFollowed: y,
				isCommentsPage: E,
				onFollowPostClick: O
			}) => {
				return Object(m.a)() ? n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
					className: Object(i.a)(x.a.thumbnailContainer, {
						[x.a.mShowingButtonOrOverflow]: f || b
					})
				}, n.a.createElement("div", {
					className: x.a.thumbnailContainerRow
				}, f && n.a.createElement(a.a, {
					isFilled: !!y,
					onClick: O,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), b && h && n.a.createElement(c.a, {
					className: x.a.subscribeButton,
					getEventFactory: e => Object(u.h)(t.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(p.h)(h) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: t.id,
					small: !0
				})), n.a.createElement(d.a, {
					crosspost: e,
					isCommentsPage: E,
					post: t,
					redditStyle: o,
					forceShowNSFW: s,
					templatePlaceholderImage: v
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/inFeedChaining.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				b = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				x = s("./src/reddit/components/AwardBadges/index.tsx"),
				h = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				v = s("./src/reddit/components/DiscoveryUnit/InFeedChaining/Loader.tsx"),
				f = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				y = s("./src/reddit/components/FlairWrapper/index.tsx"),
				E = s("./src/reddit/components/Flatlist/index.tsx"),
				O = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				j = s("./src/reddit/components/ModModeReports/helpers.ts"),
				S = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				k = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				C = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				_ = s("./src/reddit/components/PostTitle/index.tsx"),
				I = s("./src/reddit/components/PostTopLine/index.tsx"),
				T = s("./src/reddit/components/PostTopMeta/index.tsx"),
				w = s("./src/reddit/components/SourceLink/index.tsx"),
				N = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				M = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				A = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				R = s("./src/reddit/models/Vote/index.ts"),
				W = s("./src/reddit/contexts/Post/index.tsx"),
				V = s("./src/reddit/selectors/experiments/categories.ts"),
				U = s("./src/reddit/selectors/experiments/econAwardsPlaque.ts"),
				D = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				H = s("./src/reddit/hooks/useIsOverlay.ts"),
				z = s("./src/reddit/hooks/useUserContext.ts"),
				q = s("./src/reddit/selectors/inFeedChaining.ts"),
				G = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Z = s("./src/reddit/selectors/postFlair.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/selectors/showPromotedCTA.ts"),
				K = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx"),
				Y = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Q = s.n(Y),
				$ = s("./src/reddit/selectors/i18n/index.ts"),
				ee = s("./src/reddit/components/MediumPost/index.m.less"),
				te = s.n(ee);

			function se() {
				return (se = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const oe = () => Object(a.c)({
					crosspost: J.d,
					flairStyleTemplate: N.T,
					isActive: J.k,
					isCurrentUserProfilePost: J.l,
					isPostChainDismissed: q.c,
					isPostChained: q.d,
					showPromotedCTA: X.a,
					moderatorPermissions: G.k,
					shouldShowNsfwListingBelow: $.b,
					showAwardsPlaque: U.a,
					showEditFlair: Z.a,
					showMedia: N.r,
					isInCategoriesExperiment: V.a
				}),
				ne = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: a,
						flairStyleTemplate: N,
						hideNSFWPref: W,
						hostPostData: V,
						inSubredditOrProfile: U = !1,
						isCheckboxSelected: H,
						isCommentsPage: z,
						isCurrentUserProfilePost: q,
						isFrontpage: G,
						isOverlay: Z,
						isPostChainDismissed: J,
						isPostChained: X,
						isTopicPage: Y,
						isCommentCountAnimationEnabled: $,
						isVoteCountAnimationEnabled: ee,
						isCountAnimShadowTestEnabled: se,
						imageGalleryCurrentItem: oe,
						listingKey: ne,
						listingName: re,
						moderatorPermissions: ie,
						modModeEnabled: ae,
						onClickPost: ce,
						post: de,
						postId: le,
						postIds: ue,
						redditStyle: me,
						shouldHideFlair: pe,
						shouldShowNsfwListingBelow: be,
						showAwardsPlaque: xe,
						showBulkActionCheckbox: he,
						showEditFlair: ve,
						showMedia: fe,
						showPromotedCTA: ye,
						sendEvent: Ee,
						subredditOrProfile: Oe,
						toggleCheckbox: ge,
						isAvatarPostEnabled: je
					} = e, Se = Object(r.d)(), ke = Object(o.useCallback)(() => {
						re && ne && Se(Object(l.d)({
							listingKey: ne,
							listingName: re,
							postId: le
						}))
					}, [Se, ne, re, le]), Pe = e => e === R.a.upvoted ? Se(Object(u.bb)(le)) : Se(Object(u.u)(le)), Ce = () => Se(Object(u.X)(le)), _e = me ? void 0 : N, Ie = Object(L.a)(ie), Te = ae && Ie, we = Object(M.a)(ie), Ne = Object(A.a)(ie), Fe = Object(j.c)(de), Me = !!(null == V ? void 0 : V.shouldShowLinkedPosts), Ae = be, Le = Object(F.a)(de), Be = U && !fe && !Me && !Ae || je, Re = Be && !!de.source && !s, We = !(G && i || Y) && !q && (!U || Me || Ae), Ve = (!U || Me || Ae) && !de.isSponsored, Ue = Object(c.t)(de, oe), {
						source: De
					} = Ue, He = n.a.createElement(k.a, {
						className: Object(d.a)(te.a.container, t, Q.a.largeAndMediumPostStyles, Q.a.largeAndMediumActiveStyles, Object(B.a)(e), {
							[Q.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: Z,
						style: Object(B.b)(e.flairStyleTemplate),
						post: de,
						onClick: ce,
						onPostContentClick: ke,
						eventFactory: a
					}, n.a.createElement(C.a, {
						model: de,
						handleVote: Pe,
						showBulkActionCheckbox: he,
						isCheckboxSelected: H,
						toggleCheckbox: ge,
						flairStyleTemplate: _e,
						redditStyle: me,
						isVoteCountAnimation: ee,
						isCountAnimShadowTestEnabled: se,
						postId: le
					}), n.a.createElement(S.a, {
						className: te.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: _e,
						post: de,
						redditStyle: me
					}, n.a.createElement(f.a, {
						post: de
					}), n.a.createElement("article", {
						className: te.a.mainBody
					}, n.a.createElement("div", {
						className: te.a.content,
						"data-click-id": "body"
					}, n.a.createElement(I.a, {
						className: te.a.postTopLine,
						hideAwards: xe,
						hideNSFWPref: W,
						hostPostData: V,
						iconClassName: te.a.postTopLineIcon,
						inSubredditOrProfile: U,
						isCommentsPage: z,
						isCurrentUserProfilePost: q,
						isOverlay: !!Z,
						isTopicPage: !!Y,
						listingKey: ne,
						post: de,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Re,
						showSubreddit: Ve,
						showSubredditIcon: !0,
						subredditOrProfile: Oe
					}), n.a.createElement(_.c, {
						className: te.a.postTitle,
						post: de,
						redditStyle: me,
						size: _.b.Large,
						titleColor: _e && _e.postTitleColor,
						isOverlay: Z
					}), z && !pe && (de.flair && de.flair.length > 0 || e.isInCategoriesExperiment) && n.a.createElement(y.a, {
						className: Object(d.a)(z && te.a.leftPadding),
						disableFlair: !z,
						post: de,
						sendEvent: Ee,
						showCategoryTag: e.isInCategoriesExperiment && z
					}), de.source && !de.isSponsored && !s && n.a.createElement(w.a, {
						className: te.a.sourceLink,
						isCommentsPage: z,
						post: de
					})), !Be && Le && n.a.createElement(K.a, {
						crosspost: s ? de : void 0,
						hasModPostPerms: Ie,
						isCommentsPage: z,
						isOverlay: Z,
						modModeEnabled: ae,
						post: s || de,
						redditStyle: me,
						shouldShowSubscribeButton: We,
						subredditOrProfile: Oe,
						templatePlaceholderImage: _e && _e.postPlaceholderImage
					})), ye && De && De.url && n.a.createElement(p.a, {
						className: te.a.adLinkWrapper
					}, n.a.createElement(b.a, {
						post: de,
						adLinkContent: Ue
					})), ae && Ie && Fe && n.a.createElement(g.a, {
						className: te.a.modModeReports,
						onIgnoreReports: Ce,
						reportable: de
					}), n.a.createElement(O.d, null), xe && n.a.createElement(x.a, {
						awardsPlaqueStyle: !0,
						isPostDetail: z,
						thing: de,
						tooltipType: Z ? T.c.Lightbox : void 0
					}), n.a.createElement("div", {
						className: te.a.flatlistContainer
					}, n.a.createElement(h.a, {
						className: te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: _e,
						redditStyle: me,
						model: de,
						onVoteClick: Pe
					}), n.a.createElement(E.c, {
						currentUser: i,
						hasModFlairPerms: we,
						hasModFullPerms: Ne,
						hasModPostPerms: Ie,
						hostPostData: V,
						isCommentCountAnimation: $,
						isCountAnimShadowTestEnabled: se,
						isOverlay: !!Z,
						listingKey: ne,
						modModeEnabled: ae,
						onIgnoreReports: Ce,
						onOpenReportsDropdown: e => Se(Object(m.h)({
							tooltipId: e
						})),
						post: de,
						showEditFlair: ve,
						tooltipType: Z ? T.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(P.b)({
							editPost: !Te,
							save: !Te,
							hide: !1,
							report: !1
						})
					}))), G && n.a.createElement(D.a, {
						post: de,
						postIds: null != ue ? ue : [],
						subredditId: null == Oe ? void 0 : Oe.id
					}));
					return n.a.createElement(n.a.Fragment, null, He, X && !J && n.a.createElement(v.a, {
						className: te.a.chain,
						listingKey: ne,
						listingName: re,
						postId: de.id
					}))
				};
			t.default = Object(W.b)(n.a.memo((function(e) {
				const t = Object(o.useMemo)(() => oe(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					a = Object(i.a)(e.post),
					c = Object(z.a)();
				return n.a.createElement(ne, se({}, e, s, {
					modModeEnabled: c.modModeEnabled,
					hideNSFWPref: c.prefs.hideNSFW,
					isOverlay: Object(H.a)(),
					isAvatarPostEnabled: a
				}))
			})))
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = i.a.div("Text", c.a), u = i.a.div("Placeholder", c.a), m = () => r.a.createElement(u, null, r.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(o.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: r.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
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
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: o,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && n.a.createElement(i.a, {
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
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = s.n(c);

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
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return n.a.createElement("div", l({
					className: Object(r.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(o, e),
					onClick: i
				}, p), t)
			})
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/isRemoved.ts"),
				v = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				f = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				O = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				g = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				j = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = s("./src/reddit/icons/fonts/Report/index.tsx"),
				k = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				P = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				C = s("./src/reddit/models/AutomatedReporting/index.ts"),
				_ = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/selectors/experiments/adHeaderExperiment.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				w = s("./src/reddit/components/PostBadges/index.m.less"),
				N = s.n(w);

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const M = e => r.a.createElement("span", F({
					className: N.a.removalReason
				}, e), e.children),
				A = () => o.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				L = () => o.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				B = e => o.fbt._("Moderator of {community name}", [o.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				R = () => o.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				W = () => o.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				V = (e, t, s) => {
					const o = `PostBadges--${e}--${t}`;
					return s ? `${o}--${s}` : o
				},
				U = Object(x.t)({
					isProfilePostListing: x.I,
					isSubreddit: x.K,
					pageLayer: e => e
				}),
				D = Object(a.c)({
					isPinned: (e, {
						post: t
					}) => Object(T.q)(e, {
						postId: t.id
					}),
					modModeEnabled: x.R
				}),
				H = Object(i.b)(D, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = U(H(({
				className: e,
				displayText: t,
				isSubreddit: s,
				inSubredditOrProfile: a,
				isCompactPinnedPost: l,
				isPinned: x,
				isProfilePostListing: T,
				modModeEnabled: w,
				onHideTooltip: U,
				onOpenRemovalReasonModal: D,
				onShowTooltip: H,
				post: z,
				tooltipType: q
			}) => {
				const G = {
						caretOnTop: !1
					},
					Z = Object(i.e)(I.a),
					J = z.isSponsored && (Z === p.p.NoLockIcon || Z === p.p.PromotedGrey),
					X = z.isRemoved && !z.modRemovalReason && !z.modNote && z.belongsTo.type === b.a.SUBREDDIT,
					K = V("Approve", z.id, q),
					Y = V("Archived", z.id, q),
					Q = V("Automod", z.id, q),
					$ = V("Lock", z.id, q),
					ee = V("Mod", z.id, q),
					te = V("Remove", z.id, q),
					se = V("Report", z.id, q),
					oe = V("Spam", z.id, q),
					ne = V("Sticky", z.id, q),
					re = V("Pinned", z.id, q),
					ie = z.bannedBy && Object(C.b)(z.bannedBy);
				return r.a.createElement("div", {
					className: e
				}, a && t && z.distinguishType === d.E.MODERATOR && r.a.createElement(n.Fragment, null, r.a.createElement(y.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.modIcon)
				}), r.a.createElement(u.c, F({
					tooltipId: ee,
					text: B(t)
				}, G))), z.isArchived && r.a.createElement(n.Fragment, null, r.a.createElement(O.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.archivedIcon),
					desc: A(),
					id: Y,
					onMouseEnter: H(Y),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: Y,
					text: A()
				}, G))), z.isLocked && !J && r.a.createElement(n.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.lockIcon),
					desc: L(),
					id: $,
					onMouseEnter: H($),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: $,
					text: L()
				}, G))), s && Object(_.q)(z) && !l && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: R(),
					id: ne,
					onMouseEnter: H(ne),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: ne,
					text: R()
				}, G))), T && x && r.a.createElement(n.Fragment, null, r.a.createElement(P.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: W(),
					id: re,
					onMouseEnter: H(re),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: re,
					text: W()
				}, G))), (z.isApproved || z.approvedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.approveIcon),
					desc: Object(v.a)(z),
					id: K,
					onMouseEnter: H(K),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: K,
					text: Object(v.a)(z)
				}, G))), Object(h.a)(z) && !ie && r.a.createElement(n.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.removeIcon),
					desc: Object(v.c)(z),
					id: te,
					onMouseEnter: H(te),
					onMouseLeave: U
				}), X && r.a.createElement(m.a, {
					className: N.a.addRemovalReason,
					onClick: D,
					text: o.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (z.modRemovalReason || z.modNote) && r.a.createElement(M, {
					onMouseEnter: H(te),
					onMouseLeave: U
				}, o.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, F({
					tooltipId: te,
					text: Object(v.c)(z)
				}, G))), z.bannedBy && z.isSpam && r.a.createElement(n.Fragment, null, r.a.createElement(k.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.spamIcon),
					desc: Object(v.e)(z),
					id: oe,
					onMouseEnter: H(oe),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: oe,
					text: Object(v.e)(z)
				}, G))), ("AutoModerator" === z.approvedBy || "AutoModerator" === z.bannedBy) && r.a.createElement(n.Fragment, null, r.a.createElement(y.a, {
					name: "bot",
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.automoderator, !!z.bannedBy && N.a.isRemoved)
				}), r.a.createElement(u.c, F({
					tooltipId: Q,
					text: v.b
				}, G))), ie && r.a.createElement("div", {
					className: N.a.removalReason
				}, o.fbt._("• Removed by the Automated {filterName}", [o.fbt._param("filterName", ie)], {
					hk: "3C408F"
				})), Object(f.a)(z) && !w && r.a.createElement(n.Fragment, null, r.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.reportIcon),
					desc: Object(v.d)(z.numReports),
					id: se,
					onMouseEnter: H(se),
					onMouseLeave: U
				}), r.a.createElement(u.c, F({
					tooltipId: se,
					text: Object(v.d)(z.numReports)
				}, G))))
			}))
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
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						i = Object(o.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), n.a.createElement("div", {
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
				v = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				y = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(E);
			const g = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(f.a)((e, {
						post: t
					}) => Object(x.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(x.j)(e, {
						postId: t.id
					}),
					pageType: e => Object(h.actionInfo)(e).pageType
				})),
				j = e => {
					const t = Object(y.d)(e.target, e.currentTarget),
						s = Object(y.b)(e.target, e.currentTarget, y.a.buttons);
					return "subreddit" !== t && s
				};
			class S extends n.a.Component {
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
						makePostContainerId: d,
						post: l,
						onClick: m,
						onPostContentClick: p,
						pageType: x,
						sendEvent: h,
						style: f,
						ref: y,
						shouldAddGalleryViewability: E = !0
					} = this.props, g = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: y,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => m && m(s, l, t, r, x))(s), p && j(s) && p(s, l)), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(O.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), S = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || S ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, g) : l.media && Object(b.E)(l.media) && E ? n.a.createElement(u, {
						postId: l.id
					}, g) : g
				}
			}
			t.a = g(Object(y.c)(Object(m.c)(S)))
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
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
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
					let a = i ? o.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : o.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && n && (a = o.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const x = Object(i.b)(() => Object(a.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				l = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: l = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: b,
					redditStyle: x,
					isOverlay: h,
					isVoteCountAnimation: v,
					postId: f
				} = e, y = `upvote-button-${t.id}${h?"-overlay":""}`;
				return n.a.createElement(r.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: x
				}, o && n.a.createElement(a.a, {
					className: u.a.checkbox,
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), n.a.createElement(i.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: x,
					upvoteTooltipId: y,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: m,
					postId: f,
					scoreClassName: u.a.score
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
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.tsx"),
				l = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				y = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/components/PostTopLine/index.m.less"),
				j = s.n(g);
			t.a = ({
				className: e,
				flairStyleTemplate: t,
				forceOpenInNewTab: s,
				hideAwards: n,
				hideNSFWPref: g,
				hostPostData: S,
				iconClassName: k,
				inSubredditOrProfile: P,
				isCommentsPage: C,
				isCompactPinnedPost: _,
				isCurrentUserProfilePost: I,
				isOverlay: T,
				isTopicPage: w,
				listingKey: N,
				post: F,
				shouldShowSubscribeButton: M,
				showCornerOutboundLink: A,
				showSubreddit: L,
				showSubredditIcon: B,
				subredditOrProfile: R,
				isFollowed: W,
				shouldShowFollowButton: V,
				onFollowPostClick: U
			}) => {
				const D = n || w;
				return r.a.createElement("div", {
					className: Object(i.a)(j.a.container, e)
				}, L && R && r.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, r.a.createElement(p.a, {
					"data-click-id": "subreddit",
					to: R.url
				}, B && r.a.createElement(m.b, {
					className: Object(i.a)(j.a.subredditIcon, k),
					shouldHideNsfwIcon: g,
					subredditOrProfile: R
				}))), r.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, L && r.a.createElement(c.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), r.a.createElement(u.d, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: s,
					flairStyleTemplate: t,
					tooltipType: T ? u.c.Lightbox : void 0,
					post: F,
					showSub: L,
					subredditOrProfile: R
				}), r.a.createElement(l.a, {
					className: j.a.postBadges,
					displayText: R ? R.displayText : null,
					inSubredditOrProfile: P,
					isCompactPinnedPost: _,
					post: F,
					tooltipType: T ? u.c.Lightbox : void 0
				}), !D && r.a.createElement(a.a, {
					isPostDetail: C,
					thing: F,
					tooltipType: T ? u.c.Lightbox : void 0
				})), R && L && M && !I && r.a.createElement(b.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(F.id, e ? "unsubscribe" : "subscribe", "post", N, S),
					identifier: {
						name: R.name,
						type: Object(O.h)(R) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: h.c.XS
				}), A && r.a.createElement(v.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(E.D)(F),
					source: F.source
				}, r.a.createElement(y.a, {
					className: j.a.outboundLinkIcon
				})), V && r.a.createElement(d.a, {
					isFilled: !!W,
					onClick: U,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/react-router/esm/react-router.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				x = s("./src/reddit/routes/avatar/index.ts"),
				h = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				v = s.n(h);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: s,
				post: c
			}) => {
				const h = Object(l.b)(),
					y = Object(i.d)(),
					E = c && c.id,
					O = c && c.voteState,
					g = Object(n.useCallback)(() => h(Object(m.b)(e ? "user_hovercard" : "profile_overview", t)), [e, h, t]);
				return r.a.createElement(a.a, {
					to: `${x.a}/${t}`
				}, r.a.createElement(u.q, {
					onClick: () => {
						s ? E && O === b.a.notVoted && y(Object(d.bb)(E)) : g()
					},
					className: Object(o.a)(v.a.snoovatarButton, v.a.snoovatarExtraPadding, v.a.compactButtonLayout, {
						[v.a.avatarPostifyButton]: s
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(o.a)({
						[v.a.shirtIcon]: !s,
						[v.a.avatarPostButtonShirtIcon]: s
					})
				}), f._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: v.a.chevronIcon
				})))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return O
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/getShortenedLink.ts"),
				a = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				d = s("./src/reddit/components/AvatarPost/index.m.less"),
				l = s.n(d);
			var u = ({
					sourceUrl: e,
					username: t,
					post: s
				}) => {
					const o = e.lastIndexOf("/") + 1,
						r = `https://i.redd.it/snoovatar/snoovatars/shared/${e.slice(o)}.png`;
					return n.a.createElement("div", {
						className: l.a.avatarPostContainer
					}, n.a.createElement("img", {
						className: l.a.avatarPostImage,
						src: r,
						alt: a.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), n.a.createElement(c.a, {
						isHovercard: !1,
						username: t,
						isAvatarPost: !0,
						post: s
					}))
				},
				m = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				p = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				b = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/components/SourceLink/index.m.less"),
				h = s.n(x),
				v = s("./src/lib/lessComponent.tsx"),
				f = s("./src/telemetry/models/Outbound.ts");
			const y = v.a.wrapped(b.a, "OutboundLinkIcon", h.a),
				E = v.a.div("SourceLinkWrapper", h.a);

			function O(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: o
				} = e, a = o ? f.SourceElement.PostLink : f.SourceElement.ListingPostLink, {
					source: c,
					isSponsored: d
				} = s, l = Object(p.a)(s);
				return c ? l ? n.a.createElement(u, {
					sourceUrl: c.url,
					username: s.author,
					post: s
				}) : n.a.createElement(E, {
					className: Object(r.a)({
						[h.a["m-comment"]]: o
					}, t)
				}, n.a.createElement(m.a, {
					href: c.url,
					isSponsored: d,
					postId: s.id,
					source: c,
					sourceElement: a
				}, Object(i.a)(s), n.a.createElement(y, {
					isFilled: !0
				}))) : null
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", u.a);
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: x,
							onSubscriptionsRequested: h,
							...v
						} = this.props, f = this.state.isHovered, y = Object(d.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						});
						return n.a.createElement(a.q, m({
							className: e,
							priority: v.shouldReverseColor ? a.b.Primary : a.b.Secondary,
							Icon: l || !l && !f ? Object(c.b)("checkmark") : void 0,
							text: !l && y,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? a.c.XS : a.c.S)
						}, v))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: o,
							postId: r,
							sendEvent: i,
							small: l = !1,
							size: u,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: x,
							onSubscriptionsRequested: h,
							...v
						} = this.props, f = Object(d.a)({
							type: t.type,
							key: "subscribe"
						});
						return n.a.createElement(a.q, m({
							className: e,
							priority: v.shouldReverseColor ? a.b.Secondary : a.b.Primary,
							Icon: Object(c.b)("add"),
							size: u || (l ? a.c.XS : a.c.S),
							text: !l && f,
							onClick: this.onClick
						}, v, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(p, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(b))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
					subredditActions: {
						subscribe: () => o.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => o.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => o.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => o.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => o.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => o.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = ({
					type: e,
					key: t
				}) => r[n({
					type: e
				})][t]()
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(o.b)(() => Object(n.c)({
				userIsSubscriber: i.eb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
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
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
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
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? o.fbt._("Approved by {username} at {time}", [o.fbt._param("username", e.approvedBy), o.fbt._param("time", Object(n.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : o.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = o.fbt._("Action taken by Automoderator", null, {
					hk: "1zud7K"
				}),
				a = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : o.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + o.fbt._("Reason by {username}:", [o.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + o.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				c = e => o.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [o.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? o.fbt._("Removed as spam by {username} at {time}", [o.fbt._param("username", e.bannedBy), o.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : o.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
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
				return v
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.l)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
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
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: i.gallery(e, t, s),
					post: i.post(e, t),
					...i.defaults(e)
				}),
				c = (e, t) => s => ({
					...a(s, e, t),
					action: o.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.media(s, e)
				}),
				d = (e, t) => s => {
					const c = Object(n.a)(t),
						d = Object(r.b)(s, e) + 1;
					return {
						...a(s, e, d),
						action: o.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.media(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => n => ({
					...a(n, e, s),
					action: o.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react-redux/es/index.js");
			const n = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(o.e)(t => {
				return !!(({
					adminId: e,
					subredditId: t,
					avatarShareUrl: s
				}) => {
					const o = i.test(s.trim()),
						a = n.includes(e),
						c = r.includes(t);
					return o && a && c
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.d)(t)
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
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s("./src/reddit/contexts/InsideOverlay.tsx");

			function r() {
				return Object(o.useContext)(n.a)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = function({
				className: e
			}) {
				return n.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					fill: "inherit"
				}, n.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => {
				return Object(r.G)(e) || o.G.Treatment1 === Object(n.c)(e, {
					experimentEligibilitySelector: n.a,
					experimentName: o.z
				})
			}
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
					experimentName: o.Fb
				});
				return !(!t || Object(o.Yd)(t))
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(n.Yd)(t)
				},
				c = Object(o.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = Object(o.a)(e => Object(r.c)(e, {
				experimentName: n.Yc,
				experimentEligibilitySelector: r.a
			}), i.G, (e, t) => e === n.id.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.e1f068b1f39bd0b2f5eb.js.map