// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.d244d4433d9c73c3f509.js
// Retrieved at 3/7/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(n);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: n
				} = e;
				let o = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					o = n || Object(r.D)(e)
				} else o = Object(r.D)(e);
				const i = a.a.parse(o),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const a = [n.rc, n.pb, n.B, n.Q, n.kb, n.Sb],
				o = {
					[n.Sb]: e => r.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [r.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.kb]: e => r.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [r.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.Q]: e => r.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [r.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.B]: e => r.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [r.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.pb]: e => r.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [r.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.rc]: e => r.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [r.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[n.Sb]: e => r.fbt._("{amount}s", [r.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.kb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.Q]: e => r.fbt._("{amount}h", [r.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.B]: e => r.fbt._("{amount}d", [r.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.rc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.pb]: e => r.fbt._("{amount}m", [r.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.rc]: e => r.fbt._("{amount}y", [r.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[n.rc]: "",
						[n.pb]: "",
						[n.B]: "",
						[n.Q]: "",
						[n.kb]: "",
						[n.Sb]: ""
					};
				let m = d - c;
				if (m <= 0) return r.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const r of a) {
					const e = Math.floor(m / r);
					e && (l[r] = (t ? i : o)[r](e).toString()), m -= e * r
				}
				const u = a.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? u : r.fbt._("{amount of time left} left", [r.fbt._param("amount of time left", u)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return m
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				m = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
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
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return g
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				_ = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				E = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(O),
				S = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const P = 8,
				g = 1,
				I = S.a.div("Container", C.a),
				k = S.a.div("PostMetaWrapper", C.a),
				T = S.a.wrapped(p.c, "PostTitle", C.a),
				N = S.a.div("FlatList", C.a),
				j = S.a.div("FlatItem", C.a),
				M = S.a.span("FlatListDotSpacer", C.a),
				L = S.a.wrapped(I, "LinkContainer", C.a),
				v = S.a.div("Content", C.a),
				D = S.a.div("ThumbnailContainer", C.a),
				w = Object(c.c)({
					isCurrentUserProfilePost: h.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Nb.TOPIC),
					shouldOpenPostInNewTab: x.hb
				}),
				A = Object(o.b)(w);
			t.c = Object(E.b)(A(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: r,
					mediaProps: n,
					post: o,
					subredditOrProfile: i
				} = e;
				if (!o) return null;
				const c = {
						post: o,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: r,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					d = t;
				return o && !o.media ? a.a.createElement(L, {
					className: d
				}, a.a.createElement(v, null, a.a.createElement(k, null, a.a.createElement(u.a, c)), B(o), o.source && a.a.createElement(b.a, {
					post: o
				}), R(e)), W(e)) : a.a.createElement(I, {
					className: d
				}, a.a.createElement(k, null, a.a.createElement(u.a, c)), B(o), F(e), R(e))
			}));
			const B = e => a.a.createElement(T, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, r = {
						...t,
						post: s,
						crosspost: t.post
					};
					return a.a.createElement("div", null, a.a.createElement(m.a, y({}, r, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				R = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return a.a.createElement(N, null, a.a.createElement(j, null, r.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [r.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), a.a.createElement(M, null), a.a.createElement(j, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return a.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, r.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [r.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				W = e => a.a.createElement(D, null, a.a.createElement(_.a, {
					post: e.post
				}))
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/components/HumanDate/index.tsx"),
				a = s("./src/lib/timeUntil/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(n.d, {
					seconds: e.poll.endsAt / r.Sb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(r.useRef)(null),
						s = Object(l.a)(),
						a = Object(r.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: r
								} = t;
								r >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						o = Object(r.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, a, o), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/lib/classNames/index.ts"),
				h = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				C = s.n(O);
			const S = Object(p.a)(() => Object(a.c)({
				basePixelMetadata: Object(h.a)((e, {
					post: t
				}) => Object(_.b)(e, t.id)),
				clickTrackingId: (e, {
					post: t
				}) => t.id,
				imageGalleryCurrentItem: (e, {
					post: t
				}) => Object(_.i)(e, {
					postId: t.id
				}),
				pageType: e => Object(f.d)(e).pageType
			}));
			class y extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: r,
						imageGalleryCurrentItem: a,
						makePostContainerId: d,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: _,
						style: f,
						ref: h,
						shouldAddGalleryViewability: x = !0
					} = this.props, O = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: h,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => u && u(s, l, t, a, p))(s), l.id && a) {
								const {
									source: e
								} = Object(o.t)(l, a);
								e && e.outboundUrl && _(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(E.a)(C.a.WrappedPost, r, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), S = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || S ? n.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(b.E)(l.media) && x ? n.a.createElement(m, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = S(Object(x.a)(Object(u.c)(y)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/CrosspostBox/index.tsx"),
				o = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(a.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * a.b - 2 * a.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : n.a.createElement(o.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/AwardBadges/index.tsx"),
				o = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				i = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				c = s("./src/reddit/components/PostBadges/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				m = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/components/PostMeta/index.m.less"),
				O = s.n(x);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: r,
					isCurrentUserProfilePost: x,
					isOverlay: C,
					isTopicPage: S,
					post: y,
					shouldShowSubscribeButton: P,
					subredditOrProfile: g,
					tooltipType: I
				} = e, k = !!S, T = Object(E.a)();
				return n.a.createElement("div", {
					className: O.a.metaContainer
				}, !r && !y.isSponsored && g && n.a.createElement(o.a, {
					postId: y.id,
					subredditName: g.name
				}, n.a.createElement(m.a, {
					className: O.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: g.url,
						state: T
					}
				}, g.displayText)), g && g.isQuarantined && n.a.createElement(l.a, null), !r && !y.isSponsored && g && P && !x && n.a.createElement(u.a, {
					className: O.a.SubscribeButton,
					getEventFactory: e => Object(f.h)(y.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(h.h)(g) ? p.a.PROFILE : p.a.SUBREDDIT
					},
					postId: y.id,
					size: b.d.XXS,
					small: !0
				}), !r && !y.isSponsored && n.a.createElement(_.b, null), !r && !y.isSponsored && n.a.createElement(i.h, {
					type: y.belongsTo.type,
					id: y.belongsTo.id
				}), n.a.createElement(d.d, {
					className: O.a.postTopMeta,
					flairStyleTemplate: t,
					post: y,
					tooltipType: I
				}), n.a.createElement(c.a, {
					displayText: g ? g.displayText : null,
					inSubredditOrProfile: !!r,
					post: y,
					tooltipType: I
				}), !k && n.a.createElement(a.a, {
					hideCta: s,
					thing: y,
					tooltipType: C ? d.c.Lightbox : void 0
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return Y
			}));
			var r = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				f = s("./src/reddit/actions/post.ts"),
				E = s("./src/reddit/helpers/flair.ts"),
				h = s("./src/reddit/helpers/path/index.ts"),
				x = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				k = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				j = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(j);
			const L = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var v, D = Object(o.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, r = s ? s.totalVotes : "0";
					return a.a.createElement("div", {
						className: Object(l.a)(e.className, M.a.proposalMetaData)
					}, a.a.createElement("span", null, k.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [k.fbt._param("count", Object(T.a)(r)), k.fbt._plural(parseInt(r))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(N.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				w = s("./src/reddit/components/SEOTitle/index.tsx"),
				A = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				F = s("./src/reddit/components/PostTitle/index.m.less"),
				R = s.n(F),
				U = s("./src/config.ts"),
				W = s("./src/reddit/hooks/useClickSourceData.ts"),
				G = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				V = s("./src/telemetry/models/Outbound.ts");

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(v || (v = {}));
			const Y = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: r,
					children: n,
					className: o,
					redditStyle: i
				}) => {
					const c = Object(H.a)();
					let d = "";
					switch (e) {
						case v.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case v.Large:
							d = R.a.Large;
							break;
						case v.Medium:
							d = R.a.Medium;
							break;
						case v.Small:
							d = R.a.Small;
							break;
						case v.ExtraSmall:
							d = R.a.ExtraSmall;
							break;
						case v.Metadata:
							d = R.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(l.a)(R.a.Title, o, d, {
							[R.a.isNoWrap]: r
						}),
						style: {
							"--posttitletextcolor": t || Object(P.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, s ? a.a.createElement(w.b, {
						type: s
					}, n) : n)
				},
				Q = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: r,
					...n
				}) => a.a.createElement(i.a, q({}, n, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), r),
				z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: r
				}) => a.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, s, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, r),
				K = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(u.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: B.hb
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: r
					} = t, n = Object(o.d)(), i = Object(W.a)(), c = Object(o.e)(A.b), l = e => {
						!c || t.media && Object(S.H)(t.media) || (e.preventDefault(), n(Object(f.ab)(Object(h.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(z, {
						nowrap: e.nowrap
					}, a.a.createElement(J, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: r,
						postId: t.id,
						source: t.source
					}, a.a.createElement(J, e)); {
						const n = t.media && Object(S.H)(t.media) ? Object(x.c)(t.id, s.name) : t.permalink,
							o = e.isCommentPermalink ? Object(h.b)(n) : Object(_.a)(n, void 0, i);
						return a.a.createElement(z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, r ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(J, t)) : a.a.createElement(J, t)
						})(t, e) : a.a.createElement(Q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: l
						}, a.a.createElement(J, e)))
					}
				},
				J = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: r
					} = e;
					let n = e.format ? e.format(r) : r.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const o = e.isCommentsPage ? w.a.PostComments : w.a.PostItem;
					return a.a.createElement(Y, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && a.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: r,
						sendEvent: e.sendEvent
					}), n)
				},
				Z = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: r
					} = s, n = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink, o = !t && !e.isCrosspost && e.size !== v.Large && !s.isSponsored && !(s.media && Object(S.H)(s.media)) && (s.source || s.media && (s.media.type === S.o.GIFVIDEO || s.media.type === S.o.IMAGE || s.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return a.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(s),
							isSponsored: r,
							postId: s.id,
							source: s.source,
							sourceElement: n
						}, Object(g.a)(s), !s.isSponsored && a.a.createElement(O.a, {
							name: "external_link",
							className: R.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== v.Large && e.size !== v.ExtraLarge) return a.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: r,
						postId: s.id,
						source: s.source,
						sourceElement: n
					}, Object(g.a)(s), !s.isSponsored && a.a.createElement(O.a, {
						name: "external_link",
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: n,
						poll: o,
						post: i,
						showNSFWSpoilerFlairsOnly: c,
						showNSFWFlairsOnly: d
					} = this.props, m = s === C.b.Left, u = Object(I.b)(i), p = c ? u.filter(e => e.type === C.f.Nsfw || e.type === C.f.Spoiler) : m ? u.filter(e => Object(E.q)(e.type)) : [];
					let b = u;
					c ? b = [] : d ? b = u.filter(e => e.type === C.f.Nsfw) : m && (b = u.filter(e => !Object(E.q)(e.type)));
					const _ = !n && !r,
						f = !t && p && p.length > 0 && _,
						h = !t && b && b.length > 0 && _;
					return a.a.createElement("div", {
						className: Object(l.a)(R.a.Component, e, i.id),
						ref: this.props.innerRef
					}, !c && f && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), !Object(y.b)(i) && a.a.createElement(X, q({}, this.props, {
						leftFlair: c ? p : void 0
					})), o && a.a.createElement(D, {
						className: R.a.pollMeta,
						pollId: o.id
					}), a.a.createElement(Z, this.props), h && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(u.fb)(),
					s = Object(u.w)(t),
					r = Object(G.a)(),
					n = Object(o.e)(n => K(n, {
						...r,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					i = Object(H.a)(),
					c = Object(m.b)();
				return r ? a.a.createElement($, q({
					pageLayer: t,
					isCommentPermalink: s
				}, r, n, e, {
					theme: i,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, s) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SidebarNativeAd", (function() {
				return Z
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/PostMedia/index.tsx"),
				c = s("./src/reddit/components/PostTitle/index.tsx"),
				d = s("./src/reddit/components/PostTopMeta/index.tsx"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/getShortenedLink.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/opener/index.ts"),
				b = s("./src/reddit/actions/ads/index.ts"),
				_ = s("./src/reddit/actions/post.ts"),
				f = s("./src/reddit/components/PostContainer/index.tsx"),
				E = s("./src/reddit/constants/adEvents.ts"),
				h = s("./src/reddit/contexts/InsideOverlay.tsx"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				O = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				C = s("./src/reddit/helpers/adCount/index.ts"),
				S = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				y = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				P = s("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				k = s("./src/reddit/models/Theme/index.ts"),
				T = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/lib/constants/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				M = s("./src/reddit/components/NativeBannerAd/index.m.less"),
				L = s.n(M);
			const v = u.a.wrapped(e => a.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", L.a);
			class D extends a.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(j.N)(e.media) || Object(j.G)(e.media) || Object(j.H)(e.media) ? "" : e.media.content,
						{
							type: s
						} = e.media;
					if (!t || !s) return null;
					switch (s) {
						case N.qb.IMAGE:
							return a.a.createElement(v, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var w = s("./src/reddit/components/SidebarNativeAd/index.m.less"),
				A = s.n(w);
			const B = u.a.wrapped(d.d, "PostTopMeta", A.a),
				F = u.a.div("BannerAdContainer", A.a),
				R = ({
					children: e
				}) => a.a.createElement("div", null, e),
				U = u.a.div("PromotedPostContainer", A.a),
				W = u.a.wrapped(g.a, "OutboundLinkIcon", A.a),
				G = u.a.div("SourceLinkWrapper", A.a),
				H = u.a.div("TopLine", A.a),
				V = u.a.wrapped(c.c, "PostTitle", A.a),
				q = u.a.div("PostMediaWrapper", A.a),
				Y = u.a.div("BackgroundWrapper", A.a),
				Q = u.a.wrapped(f.a, "PostContainer", A.a),
				z = 640,
				K = e => Object(P.a)(e.title, 100),
				X = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(y.a)(Object(S.a)(e), I.a.actionIcon, I.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				J = e => ({
					background: Object(k.g)(Object(T.a)(e).body, null, null) || ""
				});
			class Z extends a.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, E.a.Click), t.source ? t.source.outboundUrl ? Object(p.e)(t.source.outboundUrl, p.d.BLANK) : Object(p.e)(t.source.url, p.d.BLANK) : Object(p.e)(t.permalink, p.d.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: s,
						isOverlay: n
					} = this.props;
					let o, l, u = {};
					return e.isBlank ? (o = R, l = null) : e.isMediaOnly ? (o = F, u = {
						"data-before-content": r.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = a.a.createElement(D, {
						post: e
					})) : (o = U, l = a.a.createElement(Y, {
						style: J(this.props)
					}, a.a.createElement(H, null, a.a.createElement(B, {
						tooltipType: n ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), a.a.createElement(V, {
						post: e,
						size: c.b.Large,
						format: K
					}), e.source && a.a.createElement(G, null, a.a.createElement(O.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(m.a)(e), a.a.createElement(W, null))), a.a.createElement(q, null, e.media && a.a.createElement(i.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: z,
						shouldLoad: !0
					})))), a.a.createElement(o, u, a.a.createElement(Q, {
						className: t,
						isOverlay: n,
						post: e,
						onClick: this.onClick,
						eventFactory: s,
						style: X(this.props)
					}, l))
				}
			}
			const $ = Object(o.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, s) => {
					e(Object(_.z)(t, s))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: s,
						placementIndex: r,
						isOverlay: n
					} = t;
					e(Object(b.c)(Object(C.a)(s, !!n, r)))
				}
			}));
			t.default = Object(x.b)($(Object(h.b)(Object(l.a)(Z))))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function n(e) {
				return [...e].sort(r)
			}
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case r.I.NO_STRIPE_SUBSCRIPTION:
							case r.I.USER_DOESNT_EXIST:
							case r.I.USER_REQUIRED_ERROR:
							case r.I.VALIDATION_ERROR:
								return e;
							case r.I.NO_USER:
							case r.I.NO_TEXT:
							case r.I.NO_URL:
								return r.I.VALIDATION_ERROR;
							case r.I.CREDIT_CARD_FAILURE:
							case r.I.CREDIT_CARD_FAILURE_GENERIC:
								return r.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return r.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return r.I.VALIDATION_ERROR
				},
				a = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				o = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: a(e)
					} : e
				};
			t.a = a
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(r.useContext)(n.b)
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			}));
			var r, n, a = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const o = {
					[r.Loyalty]: a.a.First,
					[r.Achievement]: a.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === a.a.First ? r.Loyalty : e === a.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var r, n = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const a = {
				status: r.NotFetched
			};
			t.b = (e = a, t) => {
				switch (t.type) {
					case n.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: r,
									...n
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: n
									}
								}
							}
						}
						return e;
					case n.e:
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: r,
									...n
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: n
									}
								}
							}
						}
						return e;
					case n.b:
						return {
							error: t.payload.error, status: r.Failure
						};
					case n.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case n.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, n = s("./src/lib/constants/specialMembership.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function m(e, t, s, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let a;
						(a = e.placement ? e.placement === i.a.First ? r[c.a.Loyalty][n] : r[c.a.Achievement][n] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][n] : r[c.a.Cosmetic][c.c.Gallery][n]) && (l(e) ? s.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function u(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return s === r ? Object(o.b)(e, t) : s - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(u).sort((e, s) => {
					const r = t[e.id],
						n = t[s.id];
					return Object(o.b)(r, n)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const r = e.collections[s],
						n = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && s.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return m(Object.keys(e.badges).map(t => e.badges[t]), s, r, t), m(Object.keys(e.products).map(t => e.products[t]), s, r, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case a.a: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === r.Fetched ? {
							...e,
							[s]: {
								...n,
								data: {
									...n.data
								},
								raw: {
									...n.raw
								}
							}
						} : e
					}
					case a.h: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === r.Fetched ? {
							...e,
							[s]: {
								...n,
								data: {
									...n.data,
									subscription: {
										...n.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...n.raw,
									subscription: {
										...n.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case a.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: b(s),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.d244d4433d9c73c3f509.js.map