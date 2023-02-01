// https://www.redditstatic.com/desktop2x/SearchResults.9cce0a61bd5ad8f3f8b0.js
// Retrieved at 2/1/2023, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = o("./src/reddit/selectors/experiments/devPlatform.ts");
			const d = Object(c.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), o.e("devPlatform-components-ContextActions")]).then(o.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function a(e) {
				return Object(r.e)(e => Object(i.a)(e)) ? n.a.createElement(d, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return n
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "a", (function() {
				return i
			}));
			const s = "devvit-gateway-url",
				n = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				c = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var i;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(i || (i = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/selectors/telemetry.ts");
			const i = e => (e, t, o) => ({
				...c.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: c.d(e),
				adblock: c.e(e),
				app: c.f(e),
				feed: c.r(e),
				geo: c.t(e),
				platform: c.I(e),
				referrer: c.Z(e),
				request: c.ab(e),
				screen: c.cb(e),
				session: c.hb(e),
				user: c.sb(e),
				media: o ? c.C(e, o) : null,
				post: o ? c.K(e, o) : null
			});
			var d = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = o("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const o = Object(r.f)().getState(),
						{
							post: s
						} = {
							...t
						};
					return s && s.isSponsored ? n.a.createElement("div", {
						onClickCapture: function(e, s) {
							var n, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const c = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : d.a.UNKNOWN
							}(e.target);
							c && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(c, d.b) ? Object(a.a)(i(s)(o, c, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(a.a)(i(s)(o, d.a.UNKNOWN, null === (n = t.post) || void 0 === n ? void 0 : n.postId)))
						}
					}, n.a.createElement(e, t)) : n.a.createElement(e, t)
				}
				const o = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${o})`, t
			}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "searchResultsRequested", (function() {
				return x
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/pick.js"),
				r = o.n(n),
				c = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/makeSearchKey/index.ts"),
				d = o("./src/lib/pageTitle/index.ts"),
				a = o("./src/reddit/actions/pages/search/index.ts"),
				l = o("./src/reddit/actions/platform.ts"),
				u = o("./src/reddit/constants/parameters.ts"),
				m = o("./src/reddit/models/Multireddit/index.ts"),
				p = o("./src/reddit/models/Post/index.ts");
			const b = e => s.fbt._("reddit.com: search results - {query}", [s.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				x = e => async (t, o) => {
					const s = o(),
						n = Object(i.e)(r()(e.queryParams, u.z)),
						{
							multiredditName: x,
							partialPostId: f,
							subredditName: v,
							username: h
						} = e.params;
					let O;
					h && x && (O = Object(m.h)(h, x));
					const _ = f && Object(p.y)(f),
						E = Object(i.b)(_ || v || x, h, n);
					await t(Object(a.d)({
						key: E,
						options: n,
						subredditName: v,
						username: h,
						multiredditLabel: O,
						postId: _
					}));
					let w = !1;
					const {
						type: C = []
					} = n, j = C.indexOf(c.ic.Posts) > -1, N = C.indexOf(c.ic.Users) > -1, k = C.indexOf(c.ic.Subreddits) > -1;
					j && s.listings.postOrder.api.error[E] && (w = !0), N && s.listings.authorOrder.api.error[E] && (w = !0), k && s.listings.communityOrder.api.error[E] && (w = !0), t(w ? l.n({
						title: Object(d.f)()
					}) : l.n({
						title: b(n.q)
					}))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			}));
			var s = o("./src/lib/loadableAction/index.ts");
			const n = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(s.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, o) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				i = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: o,
					children: s,
					...i
				} = e, l = Object(r.a)(d.a.adLinkWrapper, t, {
					[d.a.ctaExperiment]: !!o,
					[d.a.borders]: "classic" === o,
					[d.a.borderTop]: "compact" === o || "conversation" === o,
					[d.a.borderBottom]: "card" === o
				});
				return n.a.createElement("div", a({
					className: l,
					"data-adclicklocation": c.a.CTA_WHITESPACE
				}, i), s)
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/hooks/useTracking.ts"),
				d = o("./src/reddit/helpers/trackers/modTools.ts"),
				a = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				u = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				p = o("./src/reddit/components/Hovercards/helpers.ts"),
				b = o("./src/reddit/components/PostTopMeta/index.tsx"),
				x = o("./src/reddit/hooks/useIsOverlay.ts"),
				f = o("./src/reddit/models/Post/index.ts"),
				v = o("./src/redditGQL/types.ts");
			const h = Object(l.v)();
			t.a = h(e => {
				let {
					pageLayer: t,
					postOrComment: o,
					className: l
				} = e;
				var h;
				const O = Object(x.a)(),
					_ = Object(c.d)(),
					E = Object(i.a)(),
					w = (null === (h = null == t ? void 0 : t.urlParams) || void 0 === h ? void 0 : h.pageName) === a.wb.Modqueue,
					C = Object(n.useCallback)(() => {
						const e = Object(p.b)({
							itemId: o.id,
							tooltipIdPrefix: m.a,
							tooltipType: O ? b.f.Lightbox : void 0
						});
						_(Object(u.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: v.A.Note
							}
						})), E(Object(d.a)(o.id, o.authorId))
					}, [o, _, O, E]);
				return !w || Object(f.p)(o.author) ? null : r.a.createElement("button", {
					className: l,
					onClick: C
				}, s.fbt._("Add a note", null, {
					hk: "1dmmma"
				}))
			})
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, o) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				rplStyle: "_2sQjgE-zw2MQovQiJwdvVD",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/controls/OutboundLink/index.tsx"),
				i = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = o("./src/reddit/components/CallToActionButton/index.m.less"),
				a = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: o,
					...s
				} = e;
				return n.a.createElement(c.b, l({
					className: Object(r.a)(a.a.CallToActionButton, t, {
						[a.a.mNotCardView]: s.isNotCardView,
						[a.a.ctaExperiment]: !!o
					}),
					"data-adclicklocation": i.a.CTA_BUTTON
				}, s))
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, o) {
			"use strict";
			var s = o("./src/lib/lessComponent.tsx"),
				n = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				c = o.n(r);
			const i = s.a.wrapped(n.c, "RestrictedButton", c.a);
			t.a = i
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, o) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, o) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				d = o.n(i),
				a = o("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = o("./src/reddit/selectors/gold/awardIcon.ts"),
				u = o("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(u.b),
					o = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && o ? n.a.createElement("img", {
					alt: t.name,
					className: Object(c.a)(d.a.img, e.className),
					id: e.id,
					src: o
				}) : n.a.createElement(a.a, e)
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = o("./src/reddit/components/PostFollow/index.tsx"),
				l = o("./src/reddit/helpers/postCollection.ts"),
				u = o("./src/reddit/helpers/postEvent.ts"),
				m = o("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = o.n(m);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: o,
					post: s
				} = e;
				if (!Object(u.a)(s)) return null;
				const i = s && s.eventInfo,
					m = Object(l.a)(s),
					x = i && Object(c.c)(i.eventStart, i.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!o
					})
				}, n.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, n.a.createElement(d.a, {
					post: s
				}), !m && x && n.a.createElement(a.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/eventTools/index.ts"),
				c = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = o("./src/reddit/icons/fonts/Calendar/index.tsx"),
				d = o("./src/reddit/icons/fonts/Live/index.tsx"),
				a = o("./src/reddit/components/HumanDate/index.tsx"),
				l = o("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = o.n(l),
				m = o("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				b = m.a.span("PostEventPastText", u.a),
				x = m.a.span("PostEventNowText", u.a),
				f = m.a.span("Container", u.a),
				v = m.a.wrapped(i.a, "CalendarIcon", u.a),
				h = m.a.wrapped(d.a, "LiveIcon", u.a),
				O = m.a.div("LoadingState", u.a);
			class _ extends s.Component {
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
						eventInfo: o
					} = t;
					if (!o) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: d
					} = o, l = Object(r.e)(d, s);
					let u, m;
					if (this.state.mounted || l === r.a.Live) u = n.a.createElement(a.c, {
						startTime: d,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						u = n.a.createElement(O, {
							className: e
						})
					}
					if (i) m = n.a.createElement(x, null, n.a.createElement(h, null), u);
					else if (l === r.a.Future) m = n.a.createElement(p, null, n.a.createElement(v, null), u);
					else {
						if (l !== r.a.Past) return null;
						m = n.a.createElement(b, null, n.a.createElement(v, null), u)
					}
					return n.a.createElement(f, {
						className: e
					}, m)
				}
			}
			t.a = _
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, o) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				a = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				u = o("./src/reddit/components/ModActionsMenu/index.m.less"),
				m = o.n(u);
			const p = Object(c.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(l.b)(o)(e)
					}
				}),
				b = Object(r.b)(p, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(i.h)({
							tooltipId: o
						}))
					}
				}),
				x = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? x : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(d.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(a.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, o) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./src/reddit/models/ModQueueTrigger/index.ts");
			const n = e => (e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./node_modules/react/index.js"),
				c = o.n(r),
				i = o("./src/reddit/components/ModModeBanners/index.m.less"),
				d = o.n(i);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(n.a)(d.a.banner, d.a.staticBanner)
			}, a._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ModModeBanners").then(o.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: c.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return s
			})), o.d(t, "a", (function() {
				return n
			})), o.d(t, "b", (function() {
				return r
			}));
			const s = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./node_modules/react/index.js"),
				c = o.n(r),
				i = o("./src/reddit/components/ModModeBanners/index.m.less"),
				d = o.n(i);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(n.a)(d.a.banner, d.a.staticBanner)
			}, a._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("ModModeBanners").then(o.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: c.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, o) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return w
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				x = o("./src/reddit/selectors/tooltip.ts"),
				f = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				v = o("./src/reddit/components/OverflowMenu/index.m.less"),
				h = o.n(v);
			const O = a.a.wrapped(m.a, "_Dropdown", h.a),
				_ = Object(u.a)(O),
				E = a.a.button("MenuButton", h.a),
				w = a.a.wrapped(p.b, "DropdownRow", h.a),
				C = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: o
						} = t;
						return Object(x.b)(o)(e)
					}
				}),
				j = Object(c.b)(C, (e, t) => {
					let {
						dropdownId: o
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: o
						}))
					}
				}),
				N = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = j(e => r.a.createElement(E, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": s.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[h.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: N(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": f.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: h.a.MenuIcon
			}), r.a.createElement(_, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, o) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return N
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/ads/index.ts"),
				i = o("./src/reddit/components/AdViewability/index.tsx"),
				d = o("./src/reddit/helpers/trackers/gallery.ts"),
				a = o("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = o("./src/reddit/hooks/useTracking.ts");
			var u = n.a.memo(e => {
					const t = Object(s.useRef)(null),
						o = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && o(d.d(e.postId))
							})
						}, [o, e.postId]),
						c = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(a.a)(t, r, c), n.a.createElement("div", {
						role: "presentation"
					}, n.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = o("./src/reddit/components/TrackingHelper/index.tsx"),
				p = o("./src/reddit/connectors/PostViewable/index.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				x = o("./src/reddit/selectors/posts.ts"),
				f = o("./src/reddit/selectors/telemetry.ts"),
				v = o("./src/lib/classNames/index.ts"),
				h = o("./src/lib/objectSelector/index.ts"),
				O = o("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = o("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				E = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				w = o("./src/reddit/components/PostContainer/index.m.less"),
				C = o.n(w);
			const j = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(h.a)((e, t) => {
						let {
							post: o
						} = t;
						return Object(x.b)(e, o.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: o
						} = t;
						return o.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: o
						} = t;
						return Object(x.i)(e, {
							postId: o.id
						})
					},
					pageType: e => Object(f.d)(e).pageType
				})),
				N = "post-container";
			class k extends n.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: o,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: a,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: x,
						style: f,
						ref: h,
						shouldAddGalleryViewability: O = !0
					} = this.props, _ = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: h,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: o => {
							if (!this.cancelClick && o.button < 2 && e(() => m && m(o, l, t, r, p))(o), l.id && r) {
								const {
									source: e
								} = Object(c.t)(l, r);
								e && e.outboundUrl && x(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(C.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": N,
						id: a ? a(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": E.a.BACKGROUND
					}, o), w = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && O ? n.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? n.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = j(Object(_.a)(Object(O.a)(Object(m.c)(k))))
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, o) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return x
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/components/TrackingHelper/index.tsx"),
				u = o("./src/reddit/helpers/trackers/postCollection.ts"),
				m = o("./src/reddit/components/PostFollow/index.m.less"),
				p = o.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: o,
								isFollowed: s
							},
							sendEvent: n
						} = this.props, r = !!s;
						n(e ? Object(u.o)({
							postId: o,
							isFollowed: r
						}) : Object(u.g)({
							postId: o,
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
						post: o
					} = this.props, n = this.state.isHovered, c = o.isFollowed;
					let i = c ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return c && n && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(d.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!o.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const x = Object(c.b)(() => Object(i.c)({}), (e, t) => {
				let {
					post: o
				} = t;
				return {
					onFollow: () => e(Object(a.z)(o.isSponsored ? o.postId : o.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!o.m[t]
					},
					importAsync: () => o.e("ReportFlowNew").then(o.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return o(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, o) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return a
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = o.n(i);
			const a = e => n.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && n.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = c.a.wrapped(a, "ApproveButton", d.a),
				u = c.a.wrapped(a, "RemoveButton", d.a),
				m = e => n.a.createElement("button", {
					className: Object(r.a)(d.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "PWY92ySDjTYrTAiutq4ty",
				dropdownRow: "_2snJGyyGyyH38duHobOUKE",
				linkIcon: "_1GObrri0j7y_9IWiGUfPjp",
				chatIcon: "_1PhtucoKocd-ADJ-JDEoiC",
				crosspostIcon: "_1m76BHzDzRsM1te7HBxUqd",
				embedIcon: "_3MSdPVJwGxrpakz-e1MQhO",
				modalBody: "T4VmKX-IOkP4UG-B4jUR-"
			}
		},
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/react/index.js"),
				r = o.n(n),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/config.ts"),
				d = o("./src/lib/addQueryParams/index.ts"),
				a = o("./src/reddit/actions/chat/toggle.ts"),
				l = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				x = o("./src/reddit/constants/tracking.ts"),
				f = o("./src/reddit/selectors/telemetry.ts");
			var v = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/icons/fonts/index.tsx"),
				O = o("./src/reddit/models/Subreddit/index.ts"),
				_ = o("./src/reddit/routes/postCreation/constants.ts"),
				E = o("./src/reddit/selectors/experiments/chat.ts"),
				w = o("./src/reddit/selectors/tooltip.ts"),
				C = o("./src/reddit/components/ShareMenu/index.m.less"),
				j = o.n(C);
			const N = Object(m.a)(p.a),
				k = e => {
					let {
						permalink: t,
						onShare: o
					} = e;
					return r.a.createElement(b.b, {
						id: "shareToChat",
						className: j.a.dropdownRow,
						displayText: s.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							o(e)
						}
					}, r.a.createElement(h.a, {
						name: "chat",
						className: j.a.chatIcon
					}))
				},
				M = e => {
					let {
						permalink: t,
						sendEventWithName: o
					} = e;
					return r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: s.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							o("share_embed"), window.open(`${i.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(h.a, {
						name: "embed",
						className: j.a.embedIcon
					}))
				},
				y = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: s.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, r.a.createElement(h.a, {
						name: "crosspost",
						className: j.a.crosspostIcon
					}))
				},
				g = r.a.memo(e => {
					const t = Object(c.d)(),
						o = Object(v.a)(),
						i = Object(c.e)(t => Object(w.b)(e.dropdownId)(t)),
						m = Object(c.e)(E.i),
						p = Object(n.useCallback)(() => {
							t(Object(u.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						C = !e.subredditType || e.subredditType === O.g.Public,
						g = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						R = !m,
						I = Object(n.useCallback)(e => {
							t(Object(a.e)(e)), o((() => e => ({
								...Object(f.o)(e),
								source: "post",
								action: x.c.CLICK,
								noun: "share_chat",
								subreddit: Object(f.lb)(e)
							}))())
						}, [t, o]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: p,
						id: e.dropdownId
					}, e.children, r.a.createElement(N, {
						className: j.a.dropdown,
						isOpen: i,
						tooltipId: e.dropdownId
					}, r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: s.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: o
							} = e, s = Object(d.a)(o, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(l.C)(e)))(s)
						}
					}, r.a.createElement(h.a, {
						name: "link_post",
						className: j.a.linkIcon
					})), g && r.a.createElement(y, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${_.b}?source_id=${e.post.id}`, "_blank")
						}
					}), C && r.a.createElement(M, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), R && r.a.createElement(k, {
						permalink: e.permalink,
						onShare: I
					})))
				});
			t.a = g
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-ViewReportsDropdown-index").then(o.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
		},
		"./src/reddit/constants/componentTestIds.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return s
			})), o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "f", (function() {
				return d
			}));
			const s = "comment",
				n = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				i = "language-prompt-close",
				d = "post-content"
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, o) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = o("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				a = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => n.a.createElement("div", {
					className: Object(r.a)(a.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(i.a, {
					className: a.a.expandRight
				}, n.a.createElement(c.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: a.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...o
					} = e;
					return n.a.createElement(u, l({
						className: Object(r.a)(a.a.postCheckboxMenuItem, t)
					}, o))
				}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, o) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return _
			})), o.d(t, "c", (function() {
				return E
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(n),
				c = o("./node_modules/raf/index.js"),
				i = o.n(c),
				d = o("./node_modules/react/index.js"),
				a = o.n(d),
				l = o("./src/lib/classNames/index.ts"),
				u = o("./src/higherOrderComponents/asModal/index.tsx"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				p = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = o.n(b);
			var f = Object(u.a)(e => {
					const {
						children: t,
						title: o
					} = e;
					return a.a.createElement("div", {
						className: x.a.wrapper
					}, a.a.createElement(p.a, {
						className: x.a.titleRow
					}, o), a.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), a.a.createElement(p.a, {
						className: x.a.buttonRow
					}, a.a.createElement(m.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				v = o("./src/reddit/controls/ErrorText/index.m.less"),
				h = o.n(v);
			class O extends a.a.Component {
				constructor(e) {
					super(e), this.spanRef = a.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: o,
						errorModalTitle: n = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: c,
						isModalOpen: i
					} = this.state;
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.wrapper, t)
					}, a.a.createElement("span", {
						className: h.a.description,
						ref: this.spanRef
					}, e), c && a.a.createElement("span", {
						className: h.a.moreText,
						onClick: this.toggleModal
					}, r), i && a.a.createElement(f, {
						onConfirmed: this.toggleModal,
						title: n
					}, o || e))
				}
			}
			const _ = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: r = []
					} = e, c = r.length ? r : n ? [n] : [];
					return c.length ? a.a.createElement("div", {
						className: t
					}, c.map((e, t) => a.a.createElement(O, {
						className: o,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				E = e => a.a.createElement(_, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = O
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/featureFlags/index.ts");

			function d(e, t, o) {
				const s = Object(c.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, c = r;
					return s ? n.a.createElement(t, c) : void 0 !== o ? n.a.createElement(o, c) : null
				})
			}
		},
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/isRemoved.ts": function(e, t, o) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			})), o.d(t, "c", (function() {
				return i
			})), o.d(t, "d", (function() {
				return d
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(n.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				c = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(n.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, o) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/trackers/postCollection.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "o", (function() {
				return u
			})), o.d(t, "f", (function() {
				return p
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "n", (function() {
				return x
			})), o.d(t, "m", (function() {
				return f
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "p", (function() {
				return O
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "j", (function() {
				return E
			})), o.d(t, "q", (function() {
				return w
			})), o.d(t, "k", (function() {
				return C
			})), o.d(t, "l", (function() {
				return j
			})), o.d(t, "i", (function() {
				return N
			})), o.d(t, "d", (function() {
				return k
			}));
			var s, n, r = o("./src/reddit/constants/tracking.ts"),
				c = o("./src/reddit/helpers/trackers/postEvent.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(s || (s = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(n || (n = {}));
			const a = e => t => ({
					source: s.collection,
					noun: n.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: s.collection,
						noun: o ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				u = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: c.a.postEvent,
						noun: o ? n.unfollow : n.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const o = {
						...d.o(e),
						action: r.c.CLICK,
						subreddit: d.lb(e)
					};
					return void 0 === t ? o : {
						...o,
						post: d.K(e, t),
						postCollection: d.M(e, {
							postId: t
						}),
						postEvent: d.N(e, {
							postId: t
						})
					}
				},
				p = e => ({
					...v(e),
					action: r.c.VIEW,
					noun: n.collectionEducation
				}),
				b = e => ({
					...v(e),
					action: r.c.CLICK,
					noun: n.collectionEducationGotIt
				}),
				x = e => ({
					...v(e),
					action: r.c.VIEW,
					noun: n.eventEducation
				}),
				f = e => ({
					...v(e),
					action: r.c.CLICK,
					noun: n.eventEducationGotIt
				}),
				v = e => ({
					...d.o(e),
					subreddit: d.lb(e),
					source: s.postComposer
				}),
				h = (e, t) => o => ({
					...m(o, e),
					source: t || s.postOverflowMenu,
					noun: n.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: n.collectionRemovePost
				}),
				_ = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionCancel
				}),
				E = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						noun: n.collectionCreate
					}
				},
				w = () => e => ({
					...m(e),
					source: s.collectionComposer,
					noun: n.collectionSelect
				}),
				C = e => t => ({
					...d.o(t),
					subreddit: d.lb(t),
					source: s.collectionComposer,
					action: r.c.CLICK,
					noun: n.collectionDelete,
					postCollection: d.L(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...m(t),
					source: s.collectionComposer,
					noun: n.collectionEdit,
					postCollection: d.L(t, {
						collectionId: e
					})
				}),
				N = e => t => ({
					...m(t, e),
					source: s.collectionComposer,
					noun: n.startEvent
				}),
				k = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...m(e, t),
						source: s.collectionComposer,
						action: r.c.VIEW,
						noun: n.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "g", (function() {
				return x
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "b", (function() {
				return v
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "d", (function() {
				return O
			}));
			var s, n = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				c = o("./src/lib/timezone/index.ts"),
				i = o("./src/reddit/constants/tracking.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				m = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(s || (s = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: u.lb(e)
					})
				},
				x = e => {
					Object(m.a)({
						...u.o(e),
						source: s.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: u.lb(e),
						postEvent: _(e),
						postComposer: E(e)
					})
				},
				f = () => e => ({
					source: s.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: _(e)
				}),
				v = e => t => ({
					...j(t, Object(a.o)(t)),
					source: s.postComposer,
					noun: "apply",
					postComposer: w(e)
				}),
				h = () => e => ({
					...j(e, Object(a.o)(e)),
					noun: "cancel",
					actionInfo: p(e)
				}),
				O = e => t => ({
					...j(t, Object(a.o)(t)),
					noun: "delete",
					actionInfo: p(t),
					postComposer: E(t),
					postEvent: C(e)
				}),
				_ = e => {
					const t = Object(l.p)(e);
					return t && C(t)
				},
				E = e => w(Object(l.p)(e)),
				w = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === d.j.AtEventTime ? Object(c.f)(e.startDate).getTime() / n.Xb : void 0
					}
				},
				C = e => {
					const t = Object(c.f)(e.startDate).getTime() / n.Xb,
						o = Object(c.f)(e.endDate).getTime() / n.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				j = (e, t) => {
					const o = {
						source: s.eventComposer,
						action: i.c.CLICK,
						subreddit: u.lb(e)
					};
					return t ? {
						...o,
						post: u.K(e, t),
						postEvent: u.N(e, {
							postId: t
						}),
						postCollection: u.M(e, {
							postId: t
						})
					} : o
				}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("scheduled", e.isFilled), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...o
				} = e;
				return n.a.createElement("i", a({
					className: Object(r.a)(Object(c.b)("comment", o.isFilled), d.a.commentIcon, t)
				}, o))
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", a({}, e, {
				className: Object(r.a)(Object(c.b)("mod", e.isFilled), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, n.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("tag",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, o) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s),
				r = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: s,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return n.a.createElement("div", a({
					className: Object(c.a)(d.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: s,
						marginRight: i
					}
				}, Array.isArray(o) && o[0]), n.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, o) {
			"use strict";
			var s;

			function n(e, t) {
				var o;
				return null === (o = e.modQueueTriggers) || void 0 === o ? void 0 : o.find(e => e.type === t)
			}
			o.d(t, "a", (function() {
					return s
				})), o.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var s = o("./src/reddit/constants/experiments.ts"),
				n = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const i = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: c.S,
				experimentName: s.e
			}) === s.c.Enabled
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/reselect/es/index.js"),
				n = o("./src/reddit/constants/experiments.ts"),
				r = o("./src/reddit/helpers/chooseVariant/index.ts"),
				c = o("./src/reddit/models/Post/index.ts"),
				i = o("./src/reddit/selectors/posts.ts");
			const d = e => Object(r.c)(e, {
					experimentName: n.af,
					experimentEligibilitySelector: r.a
				}),
				a = (e, t) => (t === n.hf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(c.A)(e),
				l = Object(s.a)(i.G, d, (e, t) => a(e, t));
			Object(s.a)((e, t) => t, d, (e, t) => a(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.9cce0a61bd5ad8f3f8b0.js.map