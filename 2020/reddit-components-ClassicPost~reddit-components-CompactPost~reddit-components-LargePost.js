// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost.e03d2c2a7de3725ab629.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost"], {
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				p = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				x = s("./src/reddit/components/SourceLink/index.tsx"),
				b = s("./src/reddit/components/Thumbnail/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/CrosspostBox/index.m.less"),
				P = s.n(C),
				_ = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = _.a.div("Container", P.a),
				O = _.a.div("PostMetaWrapper", P.a),
				h = _.a.wrapped(u.c, "PostTitle", P.a),
				y = _.a.div("FlatList", P.a),
				j = _.a.div("FlatItem", P.a),
				S = _.a.span("FlatListDotSpacer", P.a),
				w = _.a.wrapped(g, "LinkContainer", P.a),
				T = _.a.div("Content", P.a),
				F = _.a.div("ThumbnailContainer", P.a),
				L = Object(i.c)({
					isCurrentUserProfilePost: v.h,
					language: E.P,
					post: v.I,
					shouldOpenPostInNewTab: E.T,
					subreddit: v.U
				}),
				k = Object(a.b)(L);
			t.a = k(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					mediaProps: n,
					post: a,
					subreddit: r,
					language: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: r,
						language: i,
						tooltipType: "".concat("CrosspostBox", "--").concat(n.isListing)
					},
					d = t;
				return a && !a.media ? o.a.createElement(w, {
					className: d
				}, o.a.createElement(T, null, o.a.createElement(O, null, o.a.createElement(m.a, c)), M(a), a.source && o.a.createElement(x.a, {
					post: a
				}), A(e)), D(e)) : o.a.createElement(g, {
					className: d
				}, o.a.createElement(O, null, o.a.createElement(m.a, c)), M(a), N(e), A(e))
			});
			const M = e => o.a.createElement(h, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: u.b.Small
				}),
				N = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = Object.assign({}, t, {
						post: s,
						crosspost: t.post
					});
					return o.a.createElement("div", null, o.a.createElement(p.a, f({}, n, {
						className: P.a.mediaContainer
					})))
				},
				A = e => {
					const {
						language: t,
						post: s
					} = e, {
						score: n
					} = s;
					return o.a.createElement(y, null, o.a.createElement(j, null, Object(c.c)(t, "posts.points.noun", n, {
						count: Object(l.b)(n)
					})), o.a.createElement(S, null), o.a.createElement(j, null, I(e)))
				},
				I = e => {
					const {
						language: t,
						post: s,
						shouldOpenPostInNewTab: n
					} = e, {
						numComments: a
					} = s;
					return o.a.createElement(r.a, {
						"data-click-id": "comments",
						to: Object(d.a)(s.permalink, !0),
						target: n ? "_blank" : void 0
					}, Object(c.c)(t, "posts.comments.noun", a, {
						count: Object(l.b)(a)
					}))
				},
				D = e => o.a.createElement(F, null, o.a.createElement(b.a, {
					post: e.post
				}))
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				p = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(m);
			const x = i.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					language: n,
					post: i
				} = e;
				if (!Object(p.a)(i)) return null;
				const m = i && i.eventInfo,
					b = Object(l.a)(i),
					v = m && Object(r.c)(m.eventStart, m.eventEnd);
				return o.a.createElement("div", {
					className: Object(a.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, o.a.createElement(x, {
					className: u.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					language: n,
					post: i
				}), !b && v && o.a.createElement(d.a, {
					className: u.a.eventFollowButton,
					post: i,
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/eventTools/index.ts"),
				r = (s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./src/app/strings/index.ts")),
				i = s("./src/lib/constants/index.ts");

			function c(e, t) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}
			var d = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				p = s("./src/reddit/icons/fonts/Live/index.tsx"),
				m = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(m),
				x = s("./src/lib/lessComponent.tsx");
			const b = x.a.span("PostEventFutureText", u.a),
				v = x.a.span("PostEventPastText", u.a),
				E = x.a.span("PostEventNowText", u.a),
				C = x.a.span("Container", u.a),
				P = x.a.wrapped(l.a, "CalendarIcon", u.a),
				_ = x.a.wrapped(p.a, "LiveIcon", u.a),
				f = x.a.div("LoadingState", u.a);
			class g extends n.Component {
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
						language: t,
						post: s
					} = this.props, {
						eventInfo: n
					} = s;
					if (!n) return null;
					const {
						eventEnd: l,
						eventIsLive: p,
						eventStart: m
					} = n, u = Object(a.e)(m, l);
					let x, g;
					if (this.state.mounted || u === a.a.Live) x = function(e, t, s, n) {
						const o = Object(a.e)(e, t),
							d = new Date(e * i.Cb);
						let l;
						if (o === a.a.Live || n) return Object(r.a)(s, "posts.event.inProgress");
						o === a.a.Future ? l = Object(a.d)(e) ? Object(r.a)(s, "posts.event.today") : Object(a.b)(e) >= 5 ? c(d, s) : function(e, t) {
							return e.toLocaleDateString(t, {
								weekday: "long"
							})
						}(d, s) : o === a.a.Past && (l = Object(a.d)(e) ? Object(r.a)(s, "posts.event.today") : c(d, s));
						const p = function(e, t) {
							return e.toLocaleTimeString(t, {
								hour12: !0,
								hour: "numeric",
								minute: "2-digit"
							}).replace(/ /g, "").toUpperCase()
						}(d, s);
						return "".concat(l, " @ ").concat(p)
					}(m, l, t, p);
					else {
						const e = Object(d.a)({
							isLoading: !0
						});
						x = o.a.createElement(f, {
							className: e
						})
					}
					if (p) g = o.a.createElement(E, null, o.a.createElement(_, null), x);
					else if (u === a.a.Future) g = o.a.createElement(b, null, o.a.createElement(P, null), x);
					else {
						if (u !== a.a.Past) return null;
						g = o.a.createElement(v, null, o.a.createElement(P, null), x)
					}
					return o.a.createElement(C, {
						className: e
					}, g)
				}
			}
			t.a = g
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/i18n/components.tsx"),
				d = s("./src/reddit/components/ModModeReports/index.m.less"),
				l = s.n(d);
			const p = r.a.div("Text", l.a),
				m = r.a.div("Placeholder", l.a),
				u = Object(a.a)({
					ErrorComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						})
					},
					getComponent: () => Object(i.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							className: t
						} = e;
						return o.a.createElement(m, {
							className: t
						}, o.a.createElement(p, null, o.a.createElement(c.c, null, "Loading reports…")))
					}
				});
			t.a = e => o.a.createElement(u, e)
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
				return b
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/components/Translated/index.tsx"),
				p = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(m);
			class x extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, a = !!n;
						o(e ? Object(p.o)({
							postId: s,
							isFollowed: a
						}) : Object(p.g)({
							postId: s,
							isFollowed: a
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
					} = this.props, n = this.state.isHovered, a = s.isFollowed;
					let r = a ? "collection.follow.followed" : "collection.follow.follow";
					return a && n && (r = "collection.follow.unfollow"), o.a.createElement("button", {
						className: Object(i.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, o.a.createElement(l.a, {
						msgId: r
					}))
				}
			}
			const b = Object(a.b)(() => Object(r.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.v)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(d.b)(x))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				r = s("./src/reddit/components/Media/index.tsx");
			t.a = e => {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(a.a, {
					postId: t.crosspostRootId,
					mediaProps: Object.assign({}, e, {
						crosspost: t,
						primaryContent: !1
					})
				}) : o.a.createElement(r.a, Object.assign({}, e, {
					primaryContent: !!e.showFull
				}))
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				donationAmount: "_1x9gNS8wlrugqgwofOEcGq",
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				r = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				i = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				c = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				d = s("./src/reddit/components/PostBadges/index.tsx"),
				l = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostMeta/index.m.less"),
				P = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: C,
					isOverlay: _,
					language: f,
					post: g,
					shouldShowSubscribeButton: O,
					subredditOrProfile: h,
					tooltipType: y
				} = e;
				return o.a.createElement("div", {
					className: P.a.metaContainer
				}, !n && !g.isSponsored && h && o.a.createElement(i.a, {
					postId: g.id,
					subredditName: h.name
				}, o.a.createElement(m.a, {
					className: P.a.subredditName,
					"data-click-id": "subreddit",
					to: h.url
				}, h.displayText)), h && h.isQuarantined && o.a.createElement(p.a, null), !n && !g.isSponsored && h && O && !C && o.a.createElement(u.a, {
					getEventFactory: e => Object(v.f)(g.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: h.name,
						type: Object(E.e)(h) ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: g.id,
					small: !0
				}), !n && !g.isSponsored && o.a.createElement(b.b, null), !n && !g.isSponsored && o.a.createElement(c.h, {
					type: g.belongsTo.type,
					id: g.belongsTo.id
				}), o.a.createElement(l.d, {
					className: P.a.postTopMeta,
					flairStyleTemplate: t,
					language: f,
					post: g,
					tooltipType: y
				}), o.a.createElement(d.a, {
					displayText: h ? h.displayText : null,
					inSubredditOrProfile: !!n,
					language: f,
					post: g,
					tooltipType: y
				}), h && o.a.createElement(r.a, {
					className: P.a.donationAmount,
					contentId: g.id,
					subredditId: h.id
				}), o.a.createElement(a.a, {
					hideCta: s,
					isOverlay: _,
					thing: g,
					tooltipType: y
				}))
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = e => o.a.createElement("svg", i({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), o.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, o.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, o.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				d = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = s("./src/reddit/controls/Checkbox/index.m.less"),
				p = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const x = e => t => {
					const {
						className: s,
						disabled: n,
						redditStyle: r,
						"data-redditstyle": i
					} = t, c = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), d = ((e, t, s) => {
						const n = !(!t && !s);
						let o = "";
						return o = e ? n ? p.a.mDisabledRedditStyle : p.a.mDisabled : n ? p.a.mActiveRedditStyle : p.a.mActive
					})(n, r, i);
					return o.a.createElement(e, m({
						className: Object(a.a)(p.a.Checkbox, d, s)
					}, c))
				},
				b = x(d.a),
				v = x(c);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? v : e.isCheckboxSelected ? b : r.a;
				return o.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, o.a.createElement(t, {
					className: Object(a.a)(p.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		}
	}
]);
//# sourceMappingURL=reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePost.e03d2c2a7de3725ab629.js.map