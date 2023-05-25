// https://www.redditstatic.com/desktop2x/SearchResults.e32a58f55320682589d5.js
// Retrieved at 5/25/2023, 11:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				i = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				d = o("./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx");
			const a = Object(c.a)({
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

			function l(e) {
				return Object(r.e)(e => Object(i.a)(e)) ? s.a.createElement(a, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator,
					fallback: s.a.createElement(d.a, {
						contextType: e.contextType,
						moderator: e.moderator
					})
				}) : null
			}
		},
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				dropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				Icon: "SnpDpl5eEAD07JaiyJbpr",
				icon: "SnpDpl5eEAD07JaiyJbpr"
			}
		},
		"./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/contexts/PageLayer/index.tsx"),
				i = o("./src/reddit/controls/Dropdown/Row.tsx"),
				d = o("./src/reddit/icons/fonts/index.tsx"),
				a = o("./src/devPlatform/constants.ts"),
				l = o("./src/devPlatform/components/ContextActions/index.m.less"),
				m = o.n(l);

			function u(e) {
				const t = Object(c.ib)(),
					o = Object(r.e)(e => Object(c.s)(e, {
						pageLayer: t
					})),
					l = Object(n.useMemo)(() => {
						if (!(null == o ? void 0 : o.devPlatformMetadata)) return [];
						let t;
						try {
							return (null == (t = JSON.parse(atob(o.devPlatformMetadata))) ? void 0 : t.contextActions) ? t.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).reduce((t, o) => {
								var n;
								let s = [];
								return (null === (n = o.actions) || void 0 === n ? void 0 : n.actions) && (s = o.actions.actions.filter(t => {
									var o, n, s, r, c;
									if (e.moderator && !(null === (o = t.users) || void 0 === o ? void 0 : o.moderator) || !e.moderator && (null === (n = t.users) || void 0 === n ? void 0 : n.moderator)) return !1;
									switch (e.contextType) {
										case a.a.POST:
											return !!(null === (s = t.contexts) || void 0 === s ? void 0 : s.post);
										case a.a.COMMENT:
											return !!(null === (r = t.contexts) || void 0 === r ? void 0 : r.comment);
										case a.a.SUBREDDIT:
											return !!(null === (c = t.contexts) || void 0 === c ? void 0 : c.subreddit);
										default:
											return !1
									}
								})), [...t, ...s]
							}, []).sort((e, t) => e.name.localeCompare(t.name)) : []
						} catch (n) {
							return []
						}
					}, [e.contextType, e.moderator, o]);
				return s.a.createElement(s.a.Fragment, null, l.map(t => s.a.createElement(i.b, {
					disabled: !0,
					className: m.a.DropdownRow,
					displayText: t.name,
					key: `${e.contextType}.${t.actionId}`
				}, s.a.createElement(d.a, {
					name: e.moderator ? "mod" : "bot",
					className: m.a.Icon
				}))))
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "d", (function() {
				return r
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "f", (function() {
				return i
			})), o.d(t, "a", (function() {
				return d
			}));
			const n = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				c = "DEV_PLAT__OPEN_FORM_MODAL",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var d;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(d || (d = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
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

			function m(e) {
				function t(t) {
					const o = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? s.a.createElement("div", {
						onClickCapture: function(e, n) {
							var s, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const c = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : d.a.UNKNOWN
							}(e.target);
							c && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(c, d.b) ? Object(a.a)(i(n)(o, c, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(a.a)(i(n)(o, d.a.UNKNOWN, null === (s = t.post) || void 0 === s ? void 0 : s.postId)))
						}
					}, s.a.createElement(e, t)) : s.a.createElement(e, t)
				}
				const o = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${o})`, t
			}
		},
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "searchResultsRequested", (function() {
				return v
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/pick.js"),
				r = o.n(s),
				c = o("./src/lib/constants/index.ts"),
				i = o("./src/lib/makeSearchKey/index.ts"),
				d = o("./src/lib/pageTitle/index.ts"),
				a = o("./src/reddit/actions/pages/search/index.ts"),
				l = o("./src/reddit/actions/platform.ts"),
				m = o("./src/reddit/constants/parameters.ts"),
				u = o("./src/reddit/models/Multireddit/index.ts"),
				p = o("./src/reddit/models/Post/index.ts"),
				b = o("./src/reddit/selectors/user.ts");
			const x = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				v = e => async (t, o) => {
					const n = o(),
						s = Object(b.mb)(n),
						v = Object(b.rb)(n),
						f = Object(i.e)(r()(e.queryParams, m.y)),
						{
							multiredditName: h,
							partialPostId: O,
							subredditName: _,
							username: E
						} = e.params;
					let w;
					E && h && (w = Object(u.h)(E, h));
					const C = O && Object(p.y)(O),
						j = Object(i.b)(C || _ || h, E, f, s && v);
					await t(Object(a.d)({
						key: j,
						options: f,
						subredditName: _,
						username: E,
						multiredditLabel: w,
						postId: C
					}));
					let N = !1;
					const {
						type: y = []
					} = f, k = y.indexOf(c.ic.Posts) > -1, M = y.indexOf(c.ic.Users) > -1, g = y.indexOf(c.ic.Subreddits) > -1;
					k && n.listings.postOrder.api.error[j] && (N = !0), M && n.listings.authorOrder.api.error[j] && (N = !0), g && n.listings.communityOrder.api.error[j] && (N = !0), t(N ? l.n({
						title: Object(d.e)()
					}) : l.n({
						title: x(f.q)
					}))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "b", (function() {
				return c
			}));
			var n = o("./src/lib/loadableAction/index.ts");
			const s = Object(n.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(n.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				c = Object(n.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				i = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: o,
					children: n,
					...i
				} = e, l = Object(r.a)(d.a.adLinkWrapper, t, {
					[d.a.ctaExperiment]: !!o,
					[d.a.borders]: "classic" === o,
					[d.a.borderTop]: "compact" === o || "conversation" === o,
					[d.a.borderBottom]: "card" === o
				});
				return s.a.createElement("div", a({
					className: l,
					"data-adclicklocation": c.a.CTA_WHITESPACE
				}, i), n)
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/reddit/hooks/useTracking.ts"),
				d = o("./src/reddit/helpers/trackers/modTools.ts"),
				a = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				m = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				p = o("./src/reddit/components/Hovercards/helpers.ts"),
				b = o("./src/reddit/components/PostTopMeta/index.tsx"),
				x = o("./src/reddit/hooks/useIsOverlay.ts"),
				v = o("./src/reddit/models/Post/index.ts"),
				f = o("./src/redditGQL/types.ts");
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
					w = (null === (h = null == t ? void 0 : t.urlParams) || void 0 === h ? void 0 : h.pageName) === a.xb.Modqueue,
					C = Object(s.useCallback)(() => {
						const e = Object(p.b)({
							itemId: o.id,
							tooltipIdPrefix: u.a,
							tooltipType: O ? b.f.Lightbox : void 0
						});
						_(Object(m.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: f.y.Note
							}
						})), E(Object(d.a)(o.id, o.authorId))
					}, [o, _, O, E]);
				return !w || Object(v.p)(o.author) ? null : r.a.createElement("button", {
					className: l,
					onClick: C
				}, n.fbt._("Add a note", null, {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/controls/OutboundLink/index.tsx"),
				i = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = o("./src/reddit/components/CallToActionButton/index.m.less"),
				a = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: o,
					...n
				} = e;
				return s.a.createElement(c.b, l({
					className: Object(r.a)(a.a.CallToActionButton, t, {
						[a.a.mNotCardView]: n.isNotCardView,
						[a.a.ctaExperiment]: !!o
					}),
					"data-adclicklocation": i.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				c = o.n(r);
			const i = n.a.wrapped(s.c, "RestrictedButton", c.a);
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				d = o.n(i),
				a = o("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = o("./src/reddit/selectors/gold/awardIcon.ts"),
				m = o("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(m.b),
					o = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && o ? s.a.createElement("img", {
					alt: t.name,
					className: Object(c.a)(d.a.img, e.className),
					id: e.id,
					src: o
				}) : s.a.createElement(a.a, e)
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/eventTools/index.ts"),
				i = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = o("./src/reddit/components/PostFollow/index.tsx"),
				l = o("./src/reddit/helpers/postCollection.ts"),
				m = o("./src/reddit/helpers/postEvent.ts"),
				u = o("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = o.n(u);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: o,
					post: n
				} = e;
				if (!Object(m.a)(n)) return null;
				const i = n && n.eventInfo,
					u = Object(l.a)(n),
					x = i && Object(c.c)(i.eventStart, i.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!o
					})
				}, s.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(d.a, {
					post: n
				}), !u && x && s.a.createElement(a.a, {
					className: p.a.eventFollowButton,
					post: n,
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/eventTools/index.ts"),
				c = o("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = o("./src/reddit/icons/fonts/Calendar/index.tsx"),
				d = o("./src/reddit/icons/fonts/Live/index.tsx"),
				a = o("./src/reddit/components/HumanDate/index.tsx"),
				l = o("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = o.n(l),
				u = o("./src/lib/lessComponent.tsx");
			const p = u.a.span("PostEventFutureText", m.a),
				b = u.a.span("PostEventPastText", m.a),
				x = u.a.span("PostEventNowText", m.a),
				v = u.a.span("Container", m.a),
				f = u.a.wrapped(i.a, "CalendarIcon", m.a),
				h = u.a.wrapped(d.a, "LiveIcon", m.a),
				O = u.a.div("LoadingState", m.a);
			class _ extends n.Component {
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
						eventEnd: n,
						eventIsLive: i,
						eventStart: d
					} = o, l = Object(r.e)(d, n);
					let m, u;
					if (this.state.mounted || l === r.a.Live) m = s.a.createElement(a.c, {
						startTime: d,
						endTime: n,
						isLive: i
					});
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						m = s.a.createElement(O, {
							className: e
						})
					}
					if (i) u = s.a.createElement(x, null, s.a.createElement(h, null), m);
					else if (l === r.a.Future) u = s.a.createElement(p, null, s.a.createElement(f, null), m);
					else {
						if (l !== r.a.Past) return null;
						u = s.a.createElement(b, null, s.a.createElement(f, null), m)
					}
					return s.a.createElement(v, {
						className: e
					}, u)
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/actions/tooltip.ts"),
				d = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				a = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				m = o("./src/reddit/components/ModActionsMenu/index.m.less"),
				u = o.n(m);
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
			t.a = b(e => s.a.createElement("div", {
				className: u.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? x : e.onClick
			}, e.inCommentFlatlist ? s.a.createElement(d.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : s.a.createElement(a.c, {
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
				return s
			}));
			var n = o("./src/reddit/models/ModQueueTrigger/index.ts");
			const s = e => (e => !e.isApproved && !!Object(n.c)(e, n.b.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.c)(e, n.b.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/lib/classNames/index.ts"),
				r = o("./node_modules/react/index.js"),
				c = o.n(r),
				i = o("./src/reddit/components/ModModeBanners/index.m.less"),
				d = o.n(i);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, a._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(n.a)({
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
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, o) {
			"use strict";
			o.d(t, "c", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return r
			}));
			const n = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				s = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/lib/classNames/index.ts"),
				r = o("./node_modules/react/index.js"),
				c = o.n(r),
				i = o("./src/reddit/components/ModModeBanners/index.m.less"),
				d = o.n(i);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(s.a)(d.a.banner, d.a.staticBanner)
			}, a._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(n.a)({
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
			t.a = m
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				x = o("./src/reddit/selectors/tooltip.ts"),
				v = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = o("./src/reddit/components/OverflowMenu/index.m.less"),
				h = o.n(f);
			const O = a.a.wrapped(u.a, "_Dropdown", h.a),
				_ = Object(m.a)(O),
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
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[h.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: N(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": v.b.OVERFLOW_MENU
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/reselect/es/index.js"),
				c = o("./src/lib/ads/index.ts"),
				i = o("./src/reddit/components/AdViewability/index.tsx"),
				d = o("./src/reddit/helpers/trackers/gallery.ts"),
				a = o("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = o("./src/reddit/hooks/useTracking.ts");
			var m = s.a.memo(e => {
					const t = Object(n.useRef)(null),
						o = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && o(d.d(e.postId))
							})
						}, [o, e.postId]),
						c = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(a.a)(t, r, c), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				u = o("./src/reddit/components/TrackingHelper/index.tsx"),
				p = o("./src/reddit/connectors/PostViewable/index.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				x = o("./src/reddit/selectors/posts.ts"),
				v = o("./src/reddit/selectors/telemetry.ts"),
				f = o("./src/lib/classNames/index.ts"),
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
					pageType: e => Object(v.d)(e).pageType
				})),
				N = "post-container";
			class y extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: o,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: a,
						post: l,
						onClick: u,
						pageType: p,
						sendEvent: x,
						style: v,
						ref: h,
						shouldAddGalleryViewability: O = !0
					} = this.props, _ = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
						ref: h,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: o => {
							if (!this.cancelClick && o.button < 2 && e(() => u && u(o, l, t, r, p))(o), l.id && r) {
								const {
									source: e
								} = Object(c.t)(l, r);
								e && e.outboundUrl && x(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": N,
						id: a ? a(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": E.a.BACKGROUND
					}, o), w = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && O ? s.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || w ? s.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = j(Object(_.a)(Object(O.a)(Object(u.c)(y))))
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				d = o("./src/lib/classNames/index.ts"),
				a = o("./src/reddit/actions/post.ts"),
				l = o("./src/reddit/components/TrackingHelper/index.tsx"),
				m = o("./src/reddit/helpers/trackers/postCollection.ts"),
				u = o("./src/reddit/components/PostFollow/index.m.less"),
				p = o.n(u);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: o,
								isFollowed: n
							},
							sendEvent: s
						} = this.props, r = !!n;
						s(e ? Object(m.o)({
							postId: o,
							isFollowed: r
						}) : Object(m.g)({
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
					} = this.props, s = this.state.isHovered, c = o.isFollowed;
					let i = c ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return c && s && (i = n.fbt._("Unfollow", null, {
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
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: s.a.overlayReportFlow
			};
			t.a = Object(n.a)({
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
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: s.a.overlayReportFlow
				},
				c = Object(n.a)({
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
				i = Object(n.a)({
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
				return m
			})), o.d(t, "a", (function() {
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				d = o.n(i);
			const a = e => s.a.createElement("button", {
					className: Object(r.a)(d.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(r.a)(d.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = c.a.wrapped(a, "ApproveButton", d.a),
				m = c.a.wrapped(a, "RemoveButton", d.a),
				u = e => s.a.createElement("button", {
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				i = o("./src/config.ts"),
				d = o("./src/lib/addQueryParams/index.ts"),
				a = o("./src/reddit/actions/chat/toggle.ts"),
				l = o("./src/reddit/actions/post.ts"),
				m = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				x = o("./src/reddit/constants/tracking.ts"),
				v = o("./src/reddit/selectors/telemetry.ts");
			var f = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/icons/fonts/index.tsx"),
				O = o("./src/reddit/models/Subreddit/index.ts"),
				_ = o("./src/reddit/routes/postCreation/constants.ts"),
				E = o("./src/reddit/selectors/experiments/chat.ts"),
				w = o("./src/reddit/selectors/tooltip.ts"),
				C = o("./src/reddit/components/ShareMenu/index.m.less"),
				j = o.n(C);
			const N = Object(u.a)(p.a),
				y = e => {
					let {
						permalink: t,
						onShare: o
					} = e;
					return r.a.createElement(b.b, {
						id: "shareToChat",
						className: j.a.dropdownRow,
						displayText: n.fbt._("share to chat", null, {
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
				k = e => {
					let {
						permalink: t,
						sendEventWithName: o
					} = e;
					return r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: n.fbt._("Embed", null, {
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
				M = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: n.fbt._("crosspost", null, {
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
						o = Object(f.a)(),
						i = Object(c.e)(t => Object(w.b)(e.dropdownId)(t)),
						u = Object(c.e)(E.m),
						p = Object(s.useCallback)(() => {
							t(Object(m.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						C = !e.subredditType || e.subredditType === O.g.Public,
						g = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						R = !u,
						I = Object(s.useCallback)(e => {
							t(Object(a.e)(e)), o((() => e => ({
								...Object(v.o)(e),
								source: "post",
								action: x.c.CLICK,
								noun: "share_chat",
								subreddit: Object(v.lb)(e)
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
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: o
							} = e, n = Object(d.a)(o, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(l.C)(e)))(n)
						}
					}, r.a.createElement(h.a, {
						name: "link_post",
						className: j.a.linkIcon
					})), g && r.a.createElement(M, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${_.b}?source_id=${e.post.id}`, "_blank")
						}
					}), C && r.a.createElement(k, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), R && r.a.createElement(y, {
						permalink: e.permalink,
						onShare: I
					})))
				});
			t.a = g
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return n
			})), o.d(t, "b", (function() {
				return s
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "a", (function() {
				return c
			})), o.d(t, "e", (function() {
				return i
			})), o.d(t, "f", (function() {
				return d
			}));
			const n = "comment",
				s = "comment-submission-form-markdown",
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
				return u
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = o("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				a = o.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => s.a.createElement("div", {
					className: Object(r.a)(a.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(i.a, {
					className: a.a.expandRight
				}, s.a.createElement(c.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: a.a.checkboxIcon
				}), e.text)),
				u = e => {
					let {
						className: t,
						...o
					} = e;
					return s.a.createElement(m, l({
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(s),
				c = o("./node_modules/raf/index.js"),
				i = o.n(c),
				d = o("./node_modules/react/index.js"),
				a = o.n(d),
				l = o("./src/lib/classNames/index.ts"),
				m = o("./src/higherOrderComponents/asModal/index.tsx"),
				u = o("./src/reddit/controls/Button/index.tsx"),
				p = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = o.n(b);
			var v = Object(m.a)(e => {
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
					}, a.a.createElement(u.l, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = o("./src/reddit/controls/ErrorText/index.m.less"),
				h = o.n(f);
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
						errorModalTitle: s = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = n.fbt._("More", null, {
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
					}, r), i && a.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: s
					}, o || e))
				}
			}
			const _ = e => {
					const {
						className: t,
						errorClassName: o,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, c = r.length ? r : s ? [s] : [];
					return c.length ? a.a.createElement("div", {
						className: t
					}, c.map((e, t) => a.a.createElement(O, {
						className: o,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				E = e => a.a.createElement(_, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				i = o("./src/reddit/featureFlags/index.ts");

			function d(e, t, o) {
				const n = Object(c.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, c = r;
					return n ? s.a.createElement(t, c) : void 0 !== o ? s.a.createElement(o, c) : null
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? n.fbt._("Approved by {username} at {time}", [n.fbt._param("username", e.approvedBy), n.fbt._param("time", Object(s.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : n.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				c = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : n.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + n.fbt._("Reason by {username}:", [n.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + n.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				i = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				d = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : n.fbt._("Removed as spam", null, {
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
				return n
			})), o.d(t, "h", (function() {
				return a
			})), o.d(t, "g", (function() {
				return l
			})), o.d(t, "o", (function() {
				return m
			})), o.d(t, "f", (function() {
				return p
			})), o.d(t, "e", (function() {
				return b
			})), o.d(t, "n", (function() {
				return x
			})), o.d(t, "m", (function() {
				return v
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
				return y
			}));
			var n, s, r = o("./src/reddit/constants/tracking.ts"),
				c = o("./src/reddit/helpers/trackers/postEvent.ts"),
				i = o("./src/reddit/selectors/platform.ts"),
				d = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const a = e => t => ({
					source: n.collection,
					noun: s.post,
					...u(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: n.collection,
						noun: o ? s.unfollow : s.follow,
						...u(e, t)
					})
				},
				m = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: c.a.postEvent,
						noun: o ? s.unfollow : s.follow,
						...u(e, t)
					})
				},
				u = (e, t) => {
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
					...f(e),
					action: r.c.VIEW,
					noun: s.collectionEducation
				}),
				b = e => ({
					...f(e),
					action: r.c.CLICK,
					noun: s.collectionEducationGotIt
				}),
				x = e => ({
					...f(e),
					action: r.c.VIEW,
					noun: s.eventEducation
				}),
				v = e => ({
					...f(e),
					action: r.c.CLICK,
					noun: s.eventEducationGotIt
				}),
				f = e => ({
					...d.o(e),
					subreddit: d.lb(e),
					source: n.postComposer
				}),
				h = (e, t) => o => ({
					...u(o, e),
					source: t || n.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				O = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: s.collectionRemovePost
				}),
				_ = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: s.collectionCancel
				}),
				E = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						noun: s.collectionCreate
					}
				},
				w = () => e => ({
					...u(e),
					source: n.collectionComposer,
					noun: s.collectionSelect
				}),
				C = e => t => ({
					...d.o(t),
					subreddit: d.lb(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: d.L(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...u(t),
					source: n.collectionComposer,
					noun: s.collectionEdit,
					postCollection: d.L(t, {
						collectionId: e
					})
				}),
				N = e => t => ({
					...u(t, e),
					source: n.collectionComposer,
					noun: s.startEvent
				}),
				y = () => e => {
					const t = Object(i.o)(e) || void 0;
					return {
						...u(e, t),
						source: n.collectionComposer,
						action: r.c.VIEW,
						noun: s.screen
					}
				}
		},
		"./src/reddit/helpers/trackers/postEvent.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "f", (function() {
				return b
			})), o.d(t, "g", (function() {
				return x
			})), o.d(t, "e", (function() {
				return v
			})), o.d(t, "b", (function() {
				return f
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "d", (function() {
				return O
			}));
			var n, s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/eventTools/index.ts"),
				c = o("./src/lib/timezone/index.ts"),
				i = o("./src/reddit/constants/tracking.ts"),
				d = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/postCreations.ts"),
				m = o("./src/reddit/selectors/telemetry.ts"),
				u = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => m.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_create",
						subreddit: m.lb(e)
					})
				},
				x = e => {
					Object(u.a)({
						...m.o(e),
						source: n.postComposer,
						action: i.c.CLICK,
						noun: "event_edit",
						subreddit: m.lb(e),
						postEvent: _(e),
						postComposer: E(e)
					})
				},
				v = () => e => ({
					source: n.eventComposer,
					action: i.c.VIEW,
					noun: i.b.SCREEN,
					actionInfo: p(e),
					postEvent: _(e)
				}),
				f = e => t => ({
					...j(t, Object(a.o)(t)),
					source: n.postComposer,
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
						submitScheduledTime: e && e.submitTime === d.j.AtEventTime ? Object(c.f)(e.startDate).getTime() / s.Xb : void 0
					}
				},
				C = e => {
					const t = Object(c.f)(e.startDate).getTime() / s.Xb,
						o = Object(c.f)(e.endDate).getTime() / s.Xb;
					return {
						eventStartTimestamp: t,
						eventEndTimestamp: o,
						eventState: Object(r.e)(t, o)
					}
				},
				j = (e, t) => {
					const o = {
						source: n.eventComposer,
						action: i.c.CLICK,
						subreddit: m.lb(e)
					};
					return t ? {
						...o,
						post: m.K(e, t),
						postEvent: m.N(e, {
							postId: t
						}),
						postCollection: m.M(e, {
							postId: t
						})
					} : o
				}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("approve", e.isFilled), d.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("scheduled", e.isFilled), d.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					...o
				} = e;
				return s.a.createElement("i", a({
					className: Object(r.a)(Object(c.b)("comment", o.isFilled), d.a.commentIcon, t)
				}, o))
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("lock", e.isFilled), d.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("i", a({}, e, {
				className: Object(r.a)(Object(c.b)("mod", e.isFilled), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("remove", e.isFilled), d.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("report", e.isFilled), d.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				i = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = o.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("spam", e.isFilled), d.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(c.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Tag/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				c = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: o,
					heightLeft: n,
					widthLeft: r,
					gutter: i,
					...l
				} = e;
				return s.a.createElement("div", a({
					className: Object(c.a)(d.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(o) && o[0]), s.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(o) && o[1]))
			}, 2)
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, o) {
			"use strict";
			var n, s;

			function r(e, t) {
				var o;
				return null === (o = e.modQueueTriggers) || void 0 === o ? void 0 : o.find(e => e.type === t)
			}
			o.d(t, "b", (function() {
					return n
				})), o.d(t, "a", (function() {
					return s
				})), o.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {})),
				function(e) {
					e.LOW = "LOW", e.HIGH = "HIGH"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const i = e => !!Object(r.b)(e) || Object(s.c)(e, {
				experimentEligibilitySelector: c.S,
				experimentName: n.e
			}) === n.c.Enabled
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.e32a58f55320682589d5.js.map