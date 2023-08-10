// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.646ad471129912e3ec6a.js
// Retrieved at 8/10/2023, 6:40:04 PM by Reddit Dataminer v1.0.0
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
					const r = u(n.target, n.currentTarget),
						d = p(n.target, n.currentTarget);
					r && s && t && (m(n.target, n.currentTarget, l.anchors) ? s(t(e, r, d)) : s(s => {
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
							actionInfo: Object(i.U)(s, n)
						}
					})), m(n.target, n.currentTarget, l.anchorsAndButtons) && o(n)
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
				m = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && m(e.parentElement, t, s)),
				u = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && u(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return j
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/actions/comment/index.ts"),
				O = s("./src/reddit/actions/comment/constants.ts");
			const y = Object(r.a)(O.p),
				g = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(m.j)(n(), e)).ok && t((e => async t => {
						t(y({
							commentId: e
						}))
					})(e))
				}, j = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(f.S)(s())) return void t(Object(d.i)(l.a.LOGIN_MODAL_ID));
					const i = s().features.comments.models[e];
					if (!i) return;
					const a = i.isLocked ? m.l : m.f;
					t(Object(h.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await a(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(h.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, v = Object(r.a)(O.J), P = e => async (t, s, o) => {
					let {
						apiContext: n,
						gqlContext: r
					} = o;
					const i = s(),
						d = i.features.comments.models[e],
						c = i.user.account ? i.user.account.displayText : null;
					d && c && (t(Object(h.j)({
						[e]: {
							isApproved: !0,
							approvedBy: c,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(r(), e)).ok || t(Object(h.j)({
						[e]: {
							isApproved: d.isApproved,
							approvedBy: null,
							bannedBy: d.bannedBy,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam,
							modNote: d.modNote,
							modReasonBy: d.modReasonBy,
							modRemovalReason: d.modRemovalReason,
							numReports: d.numReports || null
						}
					})), Object(a.d)())
				}, C = (e, t) => async (s, o, n) => {
					let {
						apiContext: r,
						gqlContext: i
					} = n;
					const d = o(),
						c = d.features.comments.models[e],
						l = d.user.account ? d.user.account.displayText : null;
					c && l && (s(Object(h.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(m.h)(i(), e, t)).ok || s(Object(h.j)({
						[e]: {
							approvedBy: c.approvedBy,
							bannedBy: c.bannedBy,
							isApproved: c.isApproved,
							isRemoved: c.isRemoved,
							isSpam: c.isSpam,
							numReports: c.numReports
						}
					})), Object(a.d)())
				}, S = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const i = s().features.comments.models[e];
					if (!i) return;
					const d = i.ignoreReports ? m.k : m.e;
					i.ignoreReports || t(P(e)), t(Object(h.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(h.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, E = (e, t, s) => async (r, i, d) => {
					let {
						gqlContext: a
					} = d;
					const l = Object(x.c)(i(), {
						commentId: e
					});
					if (!l) return;
					const m = s === n.jc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(a(), {
							input: f
						})).ok) r(Object(h.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, k = (e, t, s) => async (o, r, d) => {
					let {
						apiContext: a,
						gqlContext: c
					} = d;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(h.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.H.ADMIN,
							isMod: t === n.H.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(h.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const x = Object(m.c)(c(), e, t),
						f = Object(m.d)(c(), e, !!s),
						O = [x];
					(s || !s && e === b) && O.push(f), (await Promise.all(O)).every(e => e.ok) ? s && o(v({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: n.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(h.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(h.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
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
				const m = new Set;
				let u = !1;
				for (let n = 0, r = -999; n <= l; n += 1) {
					const e = s[n],
						t = c[e].belongsTo.id;
					p(e) && n - r >= d && !m.has(t) && (r = n, m.add(t), n === l && (u = !0))
				}
				return u ? n.a.createElement(i.a, {
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
				d = s("./src/reddit/components/VerticalVotes/index.tsx"),
				a = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
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
			const m = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(d.a, l({}, s, {
					className: Object(r.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(c.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(d.b)(s) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				l = s("./src/reddit/components/Thumbnail/index.tsx"),
				m = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/hooks/useIsClient.ts"),
				x = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				h = s("./src/reddit/components/MediumPost/index.m.less"),
				O = s.n(h);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: h,
					shouldShowSubscribeButton: y,
					subredditOrProfile: g,
					templatePlaceholderImage: j,
					shouldShowFollowButton: v,
					isFollowed: P,
					isCommentsPage: C,
					onFollowPostClick: S
				} = e;
				const E = Object(b.a)(),
					k = Object(i.e)(f.a);
				return E ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(d.a)(O.a.thumbnailContainer, {
						[O.a.mShowingButtonOrOverflow]: v || y
					})
				}, r.a.createElement("div", {
					className: O.a.thumbnailContainerRow
				}, v && r.a.createElement(a.a, {
					isFilled: !!P,
					onClick: S,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), y && g && r.a.createElement(c.a, {
					className: O.a.subscribeButton,
					getEventFactory: e => Object(p.n)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(x.i)(g) ? m.a.PROFILE : m.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: k ? u.c.Secondary : void 0,
					isShredditParityEnabled: k
				})), r.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: C,
					post: s,
					redditStyle: h,
					forceShowNSFW: n,
					templatePlaceholderImage: j
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
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5",
				realtimeAnimation: "S33xGQRDwuEu0UCuySY-8",
				realtimeFade: "_1I9NB7KmCGwAHbfEpCOf8V",
				isNightMode: "MTt6QTOKMo8xdDlYmv456",
				realtimeFadeNight: "_15WFTB2XFDPefKceV0OM7e",
				realtimeUpdated: "lJOoJ1Pj5PqAnL0NdDYyM"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				x = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				h = s("./src/reddit/components/Flatlist/index.tsx"),
				O = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				y = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				j = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				v = s("./src/reddit/components/ModModeReports/index.tsx"),
				P = s("./src/reddit/components/ModModeReports/helpers.ts"),
				C = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				S = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				E = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				M = s("./src/reddit/components/PostTopLine/index.tsx"),
				_ = s("./src/reddit/components/PostTopMeta/index.tsx"),
				B = s("./src/reddit/components/SourceLink/index.tsx"),
				R = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/contexts/PageLayer/index.tsx"),
				A = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				L = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				V = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				D = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				z = s.n(W),
				q = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				Q = s("./src/reddit/hooks/useIsOverlay.ts"),
				G = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				H = s("./src/reddit/hooks/useUserContext.ts"),
				J = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/models/Post/index.ts"),
				Z = s("./src/reddit/models/Vote/index.ts"),
				Y = s("./src/reddit/contexts/Post/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				X = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/i18n/index.ts"),
				te = s("./src/reddit/selectors/moderatorPermissions.ts"),
				se = s("./src/reddit/selectors/modQueue.ts"),
				oe = s("./src/reddit/selectors/postFlair.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/components/MediumPost/index.m.less"),
				de = s.n(ie),
				ae = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const le = () => Object(i.c)({
					isModQueueDisplayEnabled: e => Object(se.b)(e, !0),
					crosspost: ne.d,
					flairStyleTemplate: F.Y,
					isActive: ne.j,
					isBlurredPreview: X.b,
					isCurrentUserProfilePost: ne.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(re.S)(e),
					moderatorPermissions: te.m,
					shouldShowNsfwListingBelow: ee.b,
					showEditFlair: oe.a,
					showMedia: F.t,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(te.i)(e, s.id)
					},
					isOptionalTextEnabled: $.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var o, n;
						return !!(null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.realtimeModqueue) || void 0 === n ? void 0 : n.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var o;
						return (null === (o = e.features) || void 0 === o ? void 0 : o.realtimeUpdateAnimationId) === s
					},
					isNightMode: re.fb
				}),
				me = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: F,
						flairStyleTemplate: W,
						hideNSFWPref: q,
						hostPostData: Q,
						inSubredditOrProfile: H = !1,
						isBlurredPreview: Y,
						isCheckboxSelected: $,
						isCommentsPage: X,
						isCurrentUserProfilePost: ee,
						isFrontpage: te,
						isModWithUserNotesPermissions: se,
						isOverlay: oe,
						isRecommendationPost: ne,
						isTopicPage: re,
						isCommentCountAnimationEnabled: ie,
						isVoteCountAnimationEnabled: ce,
						isCountAnimShadowTestEnabled: le,
						imageGalleryCurrentItem: me,
						listingKey: ue,
						moderatorPermissions: pe,
						modModeEnabled: be,
						onClickPost: xe,
						post: fe,
						postId: he,
						postIds: Oe,
						redditStyle: ye,
						shouldHideFlair: ge,
						shouldShowNsfwListingBelow: je,
						showBulkActionCheckbox: ve,
						showEditFlair: Pe,
						showMedia: Ce,
						sendEvent: Se,
						subredditOrProfile: Ee,
						toggleCheckbox: ke,
						isAvatarPostEnabled: Te,
						isOptionalTextEnabled: Ne,
						isModQueueDisplayEnabled: we,
						showRealtimeUpdateAnimation: Ie,
						isUpdatedContent: Me,
						isNightMode: _e
					} = e, Be = Object(r.d)(), Re = e => e === Z.a.upvoted ? Be(Object(c.ib)(he)) : Be(Object(c.v)(he)), Fe = () => Be(Object(c.eb)(he)), Ae = ye ? void 0 : W, Le = Object(D.a)(pe), Ve = be && Le, De = Object(L.a)(pe), Ue = Object(V.a)(pe), We = Object(j.a)(fe), ze = Object(P.c)(fe), qe = !!(null == Q ? void 0 : Q.shouldShowLinkedPosts), Qe = je, Ge = !Object(G.a)() && Object(A.a)(fe), He = H && !Ce && !qe && !Qe || Te, Je = He && !!fe.source && !s, Ke = !(te && !!i || re) && !ee && (!H || qe || Qe) || ne, Ze = (!H || qe || Qe) && !fe.isSponsored, Ye = Object(d.t)(fe, me), $e = !!(Y && (null == Ee ? void 0 : Ee.isNSFW)), Xe = Object(o.useRef)({
						renderingObjectInfo: fe
					}), et = Object(K.r)(fe);
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(T.b, {
						className: Object(a.a)(de.a.container, t, z.a.largeAndMediumPostStyles, z.a.largeAndMediumActiveStyles, Object(U.a)(e), {
							[z.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"],
							[de.a.realtimeAnimation]: Ie,
							[de.a.realtimeUpdated]: Me,
							[de.a.isNightMode]: _e
						}),
						isOverlay: oe,
						style: we && (Ie || Me) ? _e ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(U.b)(e.flairStyleTemplate),
						post: fe,
						onClick: xe,
						eventFactory: F
					}, n.a.createElement(w.a, {
						model: fe,
						handleVote: Re,
						showBulkActionCheckbox: ve,
						isCheckboxSelected: $,
						toggleCheckbox: ke,
						flairStyleTemplate: Ae,
						redditStyle: ye,
						isVoteCountAnimation: ce,
						isCountAnimShadowTestEnabled: le,
						postId: he
					}), n.a.createElement(k.a, {
						className: Object(a.a)(de.a.backgroundWrapper, {
							[de.a.realtimeAnimation]: Ie,
							[de.a.realtimeUpdated]: Me,
							[de.a.isNightMode]: _e
						}),
						"data-click-id": "background",
						flairStyleTemplate: Ae,
						post: fe,
						redditStyle: ye,
						overrideBackgroundColor: we && (Ie || Me) ? _e ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, n.a.createElement(x.a, {
						post: fe
					}), n.a.createElement("article", {
						className: de.a.mainBody
					}, n.a.createElement("div", {
						className: de.a.content,
						"data-click-id": "body"
					}, et && n.a.createElement(E.a, {
						content: fe.recommendationContext.content,
						layout: R.g.Large,
						post: fe
					}), n.a.createElement(M.a, {
						className: de.a.postTopLine,
						hideNSFWPref: q,
						hostPostData: Q,
						iconClassName: de.a.postTopLineIcon,
						inSubredditOrProfile: H,
						isCommentsPage: X,
						isCurrentUserProfilePost: ee,
						isModWithUserNotesPermissions: se,
						isOverlay: !!oe,
						isTopicPage: !!re,
						listingKey: ue,
						post: fe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Je,
						showSubreddit: Ze,
						showSubredditIcon: !0,
						subredditOrProfile: Ee
					}), n.a.createElement(I.c, {
						className: de.a.postTitle,
						post: fe,
						redditStyle: ye,
						size: I.b.Large,
						titleColor: Ae && Ae.postTitleColor,
						isOverlay: oe
					}), X && !ge && fe.flair && fe.flair.length > 0 && n.a.createElement(f.a, {
						className: Object(a.a)(X && de.a.leftPadding),
						disableFlair: !X,
						post: fe,
						sendEvent: Se
					}), fe.source && !fe.isSponsored && !s && !$e && n.a.createElement(n.a.Fragment, null, n.a.createElement(B.a, {
						className: de.a.sourceLink,
						isCommentsPage: X,
						post: fe
					}), Ne && fe.media && fe.media.type !== J.o.TEXT && fe.media.type !== J.o.IMAGE && fe.media.richtextContent && n.a.createElement(O.a, {
						content: fe.media.richtextContent,
						rtJsonElementProps: Xe.current
					}))), !He && Ge && n.a.createElement(ae.a, {
						crosspost: s ? fe : void 0,
						hasModPostPerms: Le,
						isCommentsPage: X,
						isOverlay: oe,
						modModeEnabled: be,
						post: s || fe,
						redditStyle: ye,
						shouldShowSubscribeButton: Ke,
						subredditOrProfile: Ee,
						templatePlaceholderImage: Ae && Ae.postPlaceholderImage
					})), Object(d.v)(fe, me) && n.a.createElement(m.a, {
						className: de.a.adLinkWrapper
					}, n.a.createElement(u.a, {
						post: fe,
						adLinkContent: Ye
					})), be && Le && We && !we && n.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, n.a.createElement(g.a, {
						thing: fe
					})), be && Le && ze && !we && n.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, n.a.createElement(v.a, {
						onIgnoreReports: Fe,
						reportable: fe
					})), n.a.createElement(y.d, null), we && n.a.createElement(S.a, {
						post: fe
					}), n.a.createElement("div", {
						className: de.a.flatlistContainer
					}, n.a.createElement(b.a, {
						className: de.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ae,
						redditStyle: ye,
						model: fe,
						onVoteClick: Re
					}), !fe.isSurveyAd && (we ? n.a.createElement(C.a, {
						content: fe,
						listingKey: ue,
						hostPostData: Q
					}) : n.a.createElement(h.c, {
						currentUser: i,
						hasModFlairPerms: De,
						hasModFullPerms: Ue,
						hasModPostPerms: Le,
						hostPostData: Q,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: le,
						isOverlay: !!oe,
						listingKey: ue,
						modModeEnabled: be,
						onIgnoreReports: Fe,
						onOpenReportsDropdown: e => Be(Object(l.h)({
							tooltipId: e
						})),
						post: fe,
						showEditFlair: Pe,
						tooltipType: oe ? _.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(N.b)({
							editPost: !Ve,
							save: !Ve,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), te && n.a.createElement(p.a, {
						post: fe,
						postIds: null != Oe ? Oe : [],
						subredditId: null == Ee ? void 0 : Ee.id
					})))
				};
			t.default = Object(Y.b)(n.a.memo((function(e) {
				const t = Object(o.useMemo)(() => le(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					i = Object(q.a)(e.post),
					d = Object(H.a)();
				return n.a.createElement(me, ce({}, e, s, {
					modModeEnabled: d.modModeEnabled,
					hideNSFWPref: d.prefs.hideNSFW,
					isOverlay: Object(Q.a)(),
					isAvatarPostEnabled: i
				}))
			})))
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				d = s.n(i);
			const a = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: d.a.postStats
				}, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", o.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [o.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
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
						tooltipText: m,
						className: u
					} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: o
				}, n.a.createElement(a.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && n.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				a = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : n.a.createElement(d.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === a.g.Classic,
						[m.a.compactLayout]: s === a.g.Compact,
						[m.a.largeLayout]: s === a.g.Large
					}),
					content: t,
					rtJsonElementProps: u(o),
					useExplicitTextColor: !0
				})
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
				a = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: i,
					post: a,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...x
				} = e;
				return n.a.createElement("div", u({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: b || Object(d.c)(o, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, x), t)
			}))
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
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
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				x = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				y = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				j = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				P = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(E);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: n,
					hideNSFWPref: E,
					hostPostData: T,
					iconClassName: N,
					inSubredditOrProfile: w,
					isCommentsPage: I,
					isCompactPinnedPost: M,
					isCurrentUserProfilePost: _,
					isModQueuePage: B,
					isModWithUserNotesPermissions: R,
					isOverlay: F,
					isTopicPage: A,
					listingKey: L,
					post: V,
					shouldShowSubscribeButton: D,
					showCornerOutboundLink: U,
					showSubreddit: W,
					showSubredditIcon: z,
					subredditOrProfile: q,
					isFollowed: Q,
					shouldShowFollowButton: G,
					onFollowPostClick: H,
					onSubscribed: J
				} = e;
				const K = A,
					Z = !(!q || !Object(P.i)(q)),
					Y = Object(i.e)(e => {
						if (!Z) return !0;
						const t = Object(S.Jb)(e, V.author || "");
						return !t || t.enableFollowers
					}),
					$ = Object(i.e)(C.a);
				return r.a.createElement("div", {
					className: Object(d.a)(k.a.container, t)
				}, W && q && r.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, r.a.createElement(x.a, {
					"data-click-id": "subreddit",
					to: q.url
				}, z && r.a.createElement(b.b, {
					className: Object(d.a)(k.a.subredditIcon, N),
					shouldHideNsfwIcon: E,
					subredditOrProfile: q
				}))), r.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, W && r.a.createElement(l.h, {
					type: V.belongsTo.type,
					id: V.belongsTo.id
				}), r.a.createElement(p.g, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: n,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: R,
					tooltipType: F ? p.f.Lightbox : void 0,
					post: V,
					showSub: W,
					subredditOrProfile: q
				}), r.a.createElement(u.a, {
					className: k.a.postBadges,
					displayText: q ? q.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: M,
					post: V,
					tooltipType: F ? p.f.Lightbox : void 0
				}), !K && r.a.createElement(a.a, {
					isPostDetail: I,
					thing: V,
					tooltipType: F ? p.f.Lightbox : void 0
				}), R && r.a.createElement(c.a, {
					postOrComment: V,
					className: k.a.addModNote
				})), q && Y && W && D && !_ && r.a.createElement(f.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => (J && !e && J(), Object(g.n)(V.id, e ? "unsubscribe" : "subscribe", "post", L, T)),
					identifier: {
						name: q.name,
						type: Z ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: V.id,
					size: O.d.XS,
					priority: $ ? O.c.Secondary : void 0,
					isShredditParityEnabled: $
				}), U && r.a.createElement(y.b, {
					isSponsored: V.isSponsored,
					postId: V.id,
					href: Object(v.E)(V),
					source: V.source
				}, r.a.createElement(j.a, {
					className: k.a.outboundLinkIcon
				})), G && Y && r.a.createElement(m.a, {
					isFilled: !!Q,
					onClick: H,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/endpoints/redditor/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/redditGQL/operations/RedditorIdByName.json"),
				i = s("./src/redditGQL/operations/RedditorNameById.json");
			const d = async (e, t) => {
				var s;
				const i = await Object(o.a)(e, {
					...r,
					variables: t
				});
				return Object(n.c)(i) && (null === (s = i.body.data.redditorInfoByName) || void 0 === s ? void 0 : s.id) || null
			}, a = async (e, t) => {
				const s = await Object(o.a)(e, {
					...i,
					variables: t
				});
				return Object(n.c)(s) && s.body.data.redditorInfoById.name || null
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				d = s("./src/reddit/models/Theme/index.ts"),
				a = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				u = e => Object(d.f)(Object(a.a)(e).post, Object(a.a)(e).backgroundImage, Object(a.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(d.f)(e.postBackgroundColor || Object(a.a)(t).post, e.postBackgroundImage, Object(a.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(d.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(o.k)(.2, e),
				x = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
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
				return m
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const d = (e, t, s) => ({
					gallery: i.u(e, t, s),
					post: i.M(e, t),
					...i.q(e)
				}),
				a = (e, t) => s => ({
					...d(s, e, t),
					action: o.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.E(s, e)
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
							...i.E(s, e),
							outboundUrl: t,
							outboundDomain: a ? a.hostname : void 0
						}
					}
				},
				l = (e, t) => u(e, !0, t),
				m = (e, t) => u(e, !1, t),
				u = (e, t, s) => n => ({
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
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(a);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: Object(r.a)(e.className, Object(d.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/helpers/isCrosspost.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx");
			const d = (e, t) => {
				let {
					post: s,
					pageLayer: d
				} = t;
				if (Object(i.F)(d)) return !0;
				const a = Object(i.y)(d),
					c = Object(r.a)(s);
				return !(!a || c) && (e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: n.a,
						experimentName: o.Qb
					}) === o.Rd
				})(e)
			}
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return b
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "g", (function() {
				return j
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const i = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				d = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				a = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				m = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				u = e => !!e.match(i) || !!e.match(a),
				p = e => !e.match(a) && (!e.match(d) && (!!e.match(c) || !!e.match(l))),
				b = (e, t) => !!u(t) && [o.Vf.Enabled, o.Vf.HardReload].includes(Object(n.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: o.Ef
				})),
				x = (e, t) => !!t.match(d) && [o.Vf.Enabled, o.Vf.HardReload].includes(Object(n.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: o.Cf
				})),
				f = (e, t) => !!p(t) && [o.Vf.Enabled, o.Vf.HardReload].includes(Object(n.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: o.Df
				})),
				h = (e, t) => !(!p(t) && !u(t)) && Object(n.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: o.me
				}) === o.Rd,
				O = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: o.Ff
					})
				},
				y = (e, t) => !!(e => !!e.match(m))(t) && (O(e) === o.Vf.Enabled || O(e) === o.Vf.HardReload),
				g = e => {
					return Object(n.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: o.If
					})
				},
				j = (e, t) => !!(e => !!e.match(m))(t) && g(e) === o.Vf.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return p
			}));
			var o = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts"),
				i = s("./src/reddit/selectors/experiments/shredditMigration.ts"),
				d = s("./src/reddit/constants/experiments.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				c = s("./src/reddit/selectors/experiments/index.ts");
			const l = e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				},
				m = (e, t) => {
					if (!l(t)) return !1;
					const s = (e => {
						return Object(a.c)(e, {
							experimentEligibilitySelector: c.e,
							experimentName: d.Bf
						})
					})(e);
					return s === d.Vf.Enabled || s === d.Vf.HardReload
				},
				u = Object(n.a)(r.S, e => !e),
				p = (e, t) => {
					const s = t();
					e.block(e => {
						let t = !1;
						if (Object(r.S)(s)) {
							Object(i.g)(s, e.pathname) && (t = !0)
						} else {
							const o = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								n = Object(i.b)(s, e.pathname),
								r = Object(i.e)(s, e.pathname),
								d = Object(i.c)(s, e.pathname),
								a = Object(i.d)(s, e.pathname),
								u = ((e, t) => l(t) && Object(c.f)(e))(s, e.pathname),
								p = m(s, e.pathname),
								b = Object(i.f)(s, e.pathname);
							(n || o || r || d || a || u || p || b) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(o.f)(s), window.location.href = t, !1
						}
					})
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
					return Boolean(t) && !Object(n.Ag)(t)
				},
				a = Object(o.a)(d, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/RedditorIdByName.json": function(e) {
			e.exports = JSON.parse('{"id":"a24cf5c8adf7"}')
		},
		"./src/redditGQL/operations/RedditorNameById.json": function(e) {
			e.exports = JSON.parse('{"id":"7206aafc3965"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.646ad471129912e3ec6a.js.map