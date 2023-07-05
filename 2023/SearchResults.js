// https://www.redditstatic.com/desktop2x/SearchResults.77b0ff96df72989eeabe.js
// Retrieved at 7/5/2023, 1:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				c = o("./src/devPlatform/constants.ts"),
				d = o("./src/reddit/contexts/PageLayer/index.tsx"),
				i = o("./src/reddit/selectors/experiments/devPlatform.ts"),
				a = o("./node_modules/react-redux/es/index.js"),
				l = o("./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx");
			const u = Object(r.a)({
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

			function m(e) {
				const t = Object(a.e)(e => Object(i.a)(e)),
					o = Object(d.ib)(),
					n = Object(a.e)(t => p(t, {
						...e,
						pageLayer: o
					}));
				return t ? s.a.createElement(u, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator,
					subreddit: n,
					isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
					fallback: s.a.createElement(l.a, {
						isOnModQueueOverflowMenu: !!e.isOnModQueueOverflowMenu,
						contextType: e.contextType,
						moderator: e.moderator,
						subreddit: n
					})
				}) : null
			}
			const p = (e, t) => {
				const o = Object(d.s)(e, {
					pageLayer: t.pageLayer
				});
				if (null != o) return o;
				const n = e.subreddits.models;
				switch (t.contextType) {
					case c.a.POST:
						return n[t.contextData.belongsTo.id];
					case c.a.COMMENT:
						return n[t.contextData.subredditId];
					case c.a.SUBREDDIT:
					default:
						return null
				}
			}
		},
		"./src/devPlatform/components/ContextActions/index.m.less": function(e, t, o) {
			e.exports = {
				DropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				dropdownRow: "_2A5FemPDmjHjEjpCkaUK2h",
				DropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				dropdownRowBorderless: "nGJGslkMB0gn9S2lxUphf",
				Icon: "SnpDpl5eEAD07JaiyJbpr",
				icon: "SnpDpl5eEAD07JaiyJbpr"
			}
		},
		"./src/devPlatform/components/ContextActions/placeholder/ContextActionsPlaceholder.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/devPlatform/constants.ts"),
				c = o("./src/reddit/controls/Dropdown/Row.tsx"),
				d = o("./src/reddit/icons/fonts/index.tsx"),
				i = o("./src/devPlatform/components/ContextActions/index.m.less"),
				a = o.n(i);

			function l(e) {
				const t = Object(n.useMemo)(() => {
					var t, o;
					if (null == e.subreddit) return [];
					let n;
					try {
						return (null == (n = JSON.parse(atob(null !== (o = null === (t = e.subreddit) || void 0 === t ? void 0 : t.devPlatformMetadata) && void 0 !== o ? o : ""))) ? void 0 : n.contextActions) ? n.contextActions.sort((e, t) => e.actorHostname.localeCompare(t.actorHostname)).reduce((t, o) => {
							var n;
							let s = [];
							return (null === (n = o.actions) || void 0 === n ? void 0 : n.actions) && (s = o.actions.actions.filter(t => {
								var o, n, s, c, d;
								if (e.moderator && !(null === (o = t.users) || void 0 === o ? void 0 : o.moderator) || !e.moderator && (null === (n = t.users) || void 0 === n ? void 0 : n.moderator)) return !1;
								switch (e.contextType) {
									case r.a.POST:
										return !!(null === (s = t.contexts) || void 0 === s ? void 0 : s.post);
									case r.a.COMMENT:
										return !!(null === (c = t.contexts) || void 0 === c ? void 0 : c.comment);
									case r.a.SUBREDDIT:
										return !!(null === (d = t.contexts) || void 0 === d ? void 0 : d.subreddit);
									default:
										return !1
								}
							})), [...t, ...s]
						}, []).sort((e, t) => e.name.localeCompare(t.name)) : []
					} catch (s) {
						return []
					}
				}, [e.contextType, e.moderator, e.subreddit]);
				return s.a.createElement(s.a.Fragment, null, t.map(t => s.a.createElement(c.b, {
					disabled: !0,
					className: e.isOnModQueueOverflowMenu ? a.a.DropdownRowBorderless : a.a.DropdownRow,
					displayText: t.name,
					key: `${e.contextType}.${t.actionId}`
				}, s.a.createElement(d.a, {
					name: e.moderator ? "mod" : "bot",
					className: a.a.Icon
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
				return d
			})), o.d(t, "a", (function() {
				return i
			}));
			const n = "devvit-gateway-url",
				s = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				c = "DEV_PLAT__OPEN_FORM_MODAL",
				d = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./src/reddit/selectors/telemetry.ts");
			const d = e => (e, t, o) => ({
				...c.p(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: c.d(e),
				adblock: c.f(e),
				app: c.g(e),
				feed: c.s(e),
				geo: c.u(e),
				platform: c.J(e),
				referrer: c.ab(e),
				request: c.bb(e),
				screen: c.db(e),
				session: c.ib(e),
				user: c.tb(e),
				media: o ? c.D(e, o) : null,
				post: o ? c.L(e, o) : null
			});
			var i = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = o("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
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
								return t ? t.dataset.adclicklocation : i.a.UNKNOWN
							}(e.target);
							c && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(c, i.b) ? Object(a.a)(d(n)(o, c, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(a.a)(d(n)(o, i.a.UNKNOWN, null === (s = t.post) || void 0 === s ? void 0 : s.postId)))
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
				d = o("./src/lib/makeSearchKey/index.ts"),
				i = o("./src/lib/pageTitle/index.ts"),
				a = o("./src/reddit/actions/pages/search/index.ts"),
				l = o("./src/reddit/actions/platform.ts"),
				u = o("./src/reddit/constants/parameters.ts"),
				m = o("./src/reddit/models/Multireddit/index.ts"),
				p = o("./src/reddit/models/Post/index.ts"),
				b = o("./src/reddit/selectors/user.ts");
			const x = e => n.fbt._("reddit.com: search results - {query}", [n.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				v = e => async (t, o) => {
					const n = o(),
						s = Object(b.mb)(n),
						v = Object(b.rb)(n),
						f = Object(d.e)(r()(e.queryParams, u.y)),
						{
							multiredditName: h,
							partialPostId: O,
							subredditName: w,
							username: _
						} = e.params;
					let E;
					_ && h && (E = Object(m.h)(_, h));
					const C = O && Object(p.y)(O),
						j = Object(d.b)(C || w || h, _, f, s && v);
					await t(Object(a.d)({
						key: j,
						options: f,
						subredditName: w,
						username: _,
						multiredditLabel: E,
						postId: C
					}));
					let N = !1;
					const {
						type: M = []
					} = f, y = M.indexOf(c.ic.Posts) > -1, k = M.indexOf(c.ic.Users) > -1, g = M.indexOf(c.ic.Subreddits) > -1;
					y && n.listings.postOrder.api.error[j] && (N = !0), k && n.listings.authorOrder.api.error[j] && (N = !0), g && n.listings.communityOrder.api.error[j] && (N = !0), t(N ? l.n({
						title: Object(i.e)()
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
				d = o("./src/reddit/components/AdLinkWrapper/index.m.less"),
				i = o.n(d);

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
					...d
				} = e, l = Object(r.a)(i.a.adLinkWrapper, t, {
					[i.a.ctaExperiment]: !!o,
					[i.a.borders]: "classic" === o,
					[i.a.borderTop]: "compact" === o || "conversation" === o,
					[i.a.borderBottom]: "card" === o
				});
				return s.a.createElement("div", a({
					className: l,
					"data-adclicklocation": c.a.CTA_WHITESPACE
				}, d), n)
			}
		},
		"./src/reddit/components/CCM/AddModNoteCTA/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./src/reddit/hooks/useTracking.ts"),
				i = o("./src/reddit/helpers/trackers/modTools.ts"),
				a = o("./src/lib/constants/index.ts"),
				l = o("./src/reddit/contexts/PageLayer/index.tsx"),
				u = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
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
					w = Object(c.d)(),
					_ = Object(d.a)(),
					E = (null === (h = null == t ? void 0 : t.urlParams) || void 0 === h ? void 0 : h.pageName) === a.wb.Modqueue,
					C = Object(s.useCallback)(() => {
						const e = Object(p.b)({
							itemId: o.id,
							tooltipIdPrefix: m.a,
							tooltipType: O ? b.f.Lightbox : void 0
						});
						w(Object(u.h)({
							tooltipId: e,
							args: {
								isModNotesView: !0,
								modNotesFilter: f.A.Note
							}
						})), _(Object(i.a)(o.id, o.authorId))
					}, [o, w, O, _]);
				return !E || Object(v.p)(o.author) ? null : r.a.createElement("button", {
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
				d = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				i = o("./src/reddit/components/CallToActionButton/index.m.less"),
				a = o.n(i);

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
					"data-adclicklocation": d.a.CTA_BUTTON
				}, n))
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, o) {
			"use strict";
			var n = o("./src/lib/lessComponent.tsx"),
				s = o("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				c = o.n(r);
			const d = n.a.wrapped(s.c, "RestrictedButton", c.a);
			t.a = d
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
				d = o("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				i = o.n(d),
				a = o("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = o("./src/reddit/selectors/gold/awardIcon.ts"),
				u = o("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(u.b),
					o = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && o ? s.a.createElement("img", {
					alt: t.name,
					className: Object(c.a)(i.a.img, e.className),
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
				d = o("./src/lib/lessComponent.tsx"),
				i = o("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				a = o("./src/reddit/components/PostFollow/index.tsx"),
				l = o("./src/reddit/helpers/postCollection.ts"),
				u = o("./src/reddit/helpers/postEvent.ts"),
				m = o("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = o.n(m);
			const b = d.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: o,
					post: n
				} = e;
				if (!Object(u.a)(n)) return null;
				const d = n && n.eventInfo,
					m = Object(l.a)(n),
					x = d && Object(c.c)(d.eventStart, d.eventEnd);
				return s.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!o
					})
				}, s.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, s.a.createElement(i.a, {
					post: n
				}), !m && x && s.a.createElement(a.a, {
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
				d = o("./src/reddit/icons/fonts/Calendar/index.tsx"),
				i = o("./src/reddit/icons/fonts/Live/index.tsx"),
				a = o("./src/reddit/components/HumanDate/index.tsx"),
				l = o("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = o.n(l),
				m = o("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				b = m.a.span("PostEventPastText", u.a),
				x = m.a.span("PostEventNowText", u.a),
				v = m.a.span("Container", u.a),
				f = m.a.wrapped(d.a, "CalendarIcon", u.a),
				h = m.a.wrapped(i.a, "LiveIcon", u.a),
				O = m.a.div("LoadingState", u.a);
			class w extends n.Component {
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
						eventIsLive: d,
						eventStart: i
					} = o, l = Object(r.e)(i, n);
					let u, m;
					if (this.state.mounted || l === r.a.Live) u = s.a.createElement(a.c, {
						startTime: i,
						endTime: n,
						isLive: d
					});
					else {
						const e = Object(c.a)({
							isLoading: !0
						});
						u = s.a.createElement(O, {
							className: e
						})
					}
					if (d) m = s.a.createElement(x, null, s.a.createElement(h, null), u);
					else if (l === r.a.Future) m = s.a.createElement(p, null, s.a.createElement(f, null), u);
					else {
						if (l !== r.a.Past) return null;
						m = s.a.createElement(b, null, s.a.createElement(f, null), u)
					}
					return s.a.createElement(v, {
						className: e
					}, m)
				}
			}
			t.a = w
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
				d = o("./src/reddit/actions/tooltip.ts"),
				i = o("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
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
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: o
						}))
					}
				}),
				x = () => null;
			t.a = b(e => s.a.createElement("div", {
				className: m.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? x : e.onClick
			}, e.inCommentFlatlist ? s.a.createElement(i.a, {
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
				d = o("./src/reddit/components/ModModeBanners/index.m.less"),
				i = o.n(d);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(s.a)(i.a.banner, i.a.staticBanner)
			}, a._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(n.a)({
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
				d = o("./src/reddit/components/ModModeBanners/index.m.less"),
				i = o.n(d);
			const {
				fbt: a
			} = o("./node_modules/fbt/lib/FbtPublic.js"), l = () => c.a.createElement("div", {
				className: Object(s.a)(i.a.banner, i.a.staticBanner)
			}, a._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(n.a)({
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
				return E
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
				a = o("./src/lib/lessComponent.tsx"),
				l = o("./src/reddit/actions/tooltip.ts"),
				u = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				m = o("./src/reddit/controls/Dropdown/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/Row.tsx"),
				b = o("./src/reddit/icons/fonts/index.tsx"),
				x = o("./src/reddit/selectors/tooltip.ts"),
				v = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				f = o("./src/reddit/components/OverflowMenu/index.m.less"),
				h = o.n(f);
			const O = a.a.wrapped(m.a, "_Dropdown", h.a),
				w = Object(u.a)(O),
				_ = a.a.button("MenuButton", h.a),
				E = a.a.wrapped(p.b, "DropdownRow", h.a),
				C = Object(d.c)({
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
			t.b = j(e => r.a.createElement(_, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": n.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(i.a)(e.className, {
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
			}), r.a.createElement(w, {
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
				d = o("./src/reddit/components/AdViewability/index.tsx"),
				i = o("./src/reddit/helpers/trackers/gallery.ts"),
				a = o("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = o("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(n.useRef)(null),
						o = Object(l.a)(),
						r = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && o(i.d(e.postId))
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
				m = o("./src/reddit/components/TrackingHelper/index.tsx"),
				p = o("./src/reddit/connectors/PostViewable/index.ts"),
				b = o("./src/reddit/models/Media/index.ts"),
				x = o("./src/reddit/selectors/posts.ts"),
				v = o("./src/reddit/selectors/telemetry.ts"),
				f = o("./src/lib/classNames/index.ts"),
				h = o("./src/lib/objectSelector/index.ts"),
				O = o("./src/higherOrderComponents/withClickTracking/index.tsx"),
				w = o("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = o("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = o("./src/reddit/components/PostContainer/index.m.less"),
				C = o.n(E);
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
			class M extends s.a.Component {
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
						onClick: m,
						pageType: p,
						sendEvent: x,
						style: v,
						ref: h,
						shouldAddGalleryViewability: O = !0
					} = this.props, w = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: v,
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
								e && e.outboundUrl && x(Object(i.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(f.a)(C.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": N,
						id: a ? a(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": _.a.BACKGROUND
					}, o), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && O ? s.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? s.a.createElement(d.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(w))
				}
			}
			t.b = j(Object(w.a)(Object(O.a)(Object(m.c)(M))))
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
				d = o("./node_modules/reselect/es/index.js"),
				i = o("./src/lib/classNames/index.ts"),
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
								isFollowed: n
							},
							sendEvent: s
						} = this.props, r = !!n;
						s(e ? Object(u.o)({
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
					} = this.props, s = this.state.isHovered, c = o.isFollowed;
					let d = c ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return c && s && (d = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(i.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!o.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, d)
				}
			}
			const x = Object(c.b)(() => Object(d.c)({}), (e, t) => {
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
				d = Object(n.a)({
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
			t.b = d
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				d = o("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				i = o.n(d);
			const a = e => s.a.createElement("button", {
					className: Object(r.a)(i.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, e.children, e.text && s.a.createElement("span", {
					className: Object(r.a)(i.a.TextWrapper, e.textClassName)
				}, e.text, " ")),
				l = c.a.wrapped(a, "ApproveButton", i.a),
				u = c.a.wrapped(a, "RemoveButton", i.a),
				m = e => s.a.createElement("button", {
					className: Object(r.a)(i.a.removalReasonButton, e.className),
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
				d = o("./src/config.ts"),
				i = o("./src/lib/addQueryParams/index.ts"),
				a = o("./src/reddit/actions/chat/toggle.ts"),
				l = o("./src/reddit/actions/post.ts"),
				u = o("./src/reddit/actions/tooltip.ts"),
				m = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/controls/Dropdown/Row.tsx"),
				x = o("./src/reddit/constants/tracking.ts"),
				v = o("./src/reddit/selectors/telemetry.ts");
			var f = o("./src/reddit/hooks/useTracking.ts"),
				h = o("./src/reddit/icons/fonts/index.tsx"),
				O = o("./src/reddit/models/Subreddit/index.ts"),
				w = o("./src/reddit/routes/postCreation/constants.ts"),
				_ = o("./src/reddit/selectors/experiments/chat.ts"),
				E = o("./src/reddit/selectors/tooltip.ts"),
				C = o("./src/reddit/components/ShareMenu/index.m.less"),
				j = o.n(C);
			const N = Object(m.a)(p.a),
				M = e => {
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
							const e = Object(i.a)(t, {
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
				y = e => {
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
							o("share_embed"), window.open(`${d.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(h.a, {
						name: "embed",
						className: j.a.embedIcon
					}))
				},
				k = e => {
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
						d = Object(c.e)(t => Object(E.b)(e.dropdownId)(t)),
						m = Object(c.e)(_.m),
						p = Object(s.useCallback)(() => {
							t(Object(u.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						C = !e.subredditType || e.subredditType === O.g.Public,
						g = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						R = !m,
						I = Object(s.useCallback)(e => {
							t(Object(a.e)(e)), o((() => e => ({
								...Object(v.p)(e),
								source: "post",
								action: x.c.CLICK,
								noun: "share_chat",
								subreddit: Object(v.mb)(e)
							}))())
						}, [t, o]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: p,
						id: e.dropdownId
					}, e.children, r.a.createElement(N, {
						className: j.a.dropdown,
						isOpen: d,
						tooltipId: e.dropdownId
					}, r.a.createElement(b.b, {
						className: j.a.dropdownRow,
						displayText: n.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: o
							} = e, n = Object(i.a)(o, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(l.C)(e)))(n)
						}
					}, r.a.createElement(h.a, {
						name: "link_post",
						className: j.a.linkIcon
					})), g && r.a.createElement(k, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${w.b}?source_id=${e.post.id}`, "_blank")
						}
					}), C && r.a.createElement(y, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), R && r.a.createElement(M, {
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
				return d
			})), o.d(t, "f", (function() {
				return i
			}));
			const n = "comment",
				s = "comment-submission-form-markdown",
				r = "comment-submission-form-richtext",
				c = "comments-page-link-num-comments",
				d = "language-prompt-close",
				i = "post-content"
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/index.tsx"),
				d = o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				i = o("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				a = o.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("div", {
					className: Object(r.a)(a.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, s.a.createElement(d.a, {
					className: a.a.expandRight
				}, s.a.createElement(c.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: a.a.checkboxIcon
				}), e.text)),
				m = e => {
					let {
						className: t,
						...o
					} = e;
					return s.a.createElement(u, l({
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
				return w
			})), o.d(t, "c", (function() {
				return _
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/uniqueId.js"),
				r = o.n(s),
				c = o("./node_modules/raf/index.js"),
				d = o.n(c),
				i = o("./node_modules/react/index.js"),
				a = o.n(i),
				l = o("./src/lib/classNames/index.ts"),
				u = o("./src/higherOrderComponents/asModal/index.tsx"),
				m = o("./src/reddit/controls/Button/index.tsx"),
				p = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = o("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = o.n(b);
			var v = Object(u.a)(e => {
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
					d()(() => {
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
						isModalOpen: d
					} = this.state;
					return a.a.createElement("div", {
						className: Object(l.a)(h.a.wrapper, t)
					}, a.a.createElement("span", {
						className: h.a.description,
						ref: this.spanRef
					}, e), c && a.a.createElement("span", {
						className: h.a.moreText,
						onClick: this.toggleModal
					}, r), d && a.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: s
					}, o || e))
				}
			}
			const w = e => {
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
				_ = e => a.a.createElement(w, {
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
				return i
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/reddit/featureFlags/index.ts");

			function i(e, t, o) {
				const n = Object(c.c)({
					featureEnabled: t => d.d[e](t)
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
				return d
			})), o.d(t, "d", (function() {
				return i
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
				d = e => n.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [n.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				i = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? n.fbt._("Removed as spam by {username} at {time}", [n.fbt._param("username", e.bannedBy), n.fbt._param("time", Object(s.a)(e.bannedAtUTC))], {
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
				return u
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
				return w
			})), o.d(t, "j", (function() {
				return _
			})), o.d(t, "q", (function() {
				return E
			})), o.d(t, "k", (function() {
				return C
			})), o.d(t, "l", (function() {
				return j
			})), o.d(t, "i", (function() {
				return N
			})), o.d(t, "d", (function() {
				return M
			}));
			var n, s, r = o("./src/reddit/constants/tracking.ts"),
				c = o("./src/reddit/helpers/trackers/postEvent.ts"),
				d = o("./src/reddit/selectors/platform.ts"),
				i = o("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.collection = "collection", e.collectionComposer = "collection_composer", e.postComposer = "post_composer", e.postOverflowMenu = "post_overflow_menu"
			}(n || (n = {})),
			function(e) {
				e.post = "post", e.follow = "follow", e.unfollow = "unfollow", e.screen = "screen", e.eventEducation = "event_education", e.eventEducationGotIt = "event_education_got_it", e.collectionEducation = "collection_education", e.collectionEducationGotIt = "collection_education_got_it", e.collectionCancel = "cancel", e.collectionCreate = "collection_create", e.collectionSelect = "collection_select", e.collectionDelete = "collection_delete", e.collectionEdit = "collection_edit", e.collectionAddPost = "collection_add_post", e.collectionRemovePost = "remove_post_from_collection", e.startEvent = "start_event"
			}(s || (s = {}));
			const a = e => t => ({
					source: n.collection,
					noun: s.post,
					...m(t, e)
				}),
				l = e => {
					let {
						postId: t,
						isFollowed: o
					} = e;
					return e => ({
						source: n.collection,
						noun: o ? s.unfollow : s.follow,
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
						noun: o ? s.unfollow : s.follow,
						...m(e, t)
					})
				},
				m = (e, t) => {
					const o = {
						...i.p(e),
						action: r.c.CLICK,
						subreddit: i.mb(e)
					};
					return void 0 === t ? o : {
						...o,
						post: i.L(e, t),
						postCollection: i.N(e, {
							postId: t
						}),
						postEvent: i.O(e, {
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
					...i.p(e),
					subreddit: i.mb(e),
					source: n.postComposer
				}),
				h = (e, t) => o => ({
					...m(o, e),
					source: t || n.postOverflowMenu,
					noun: s.collectionAddPost
				}),
				O = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: s.collectionRemovePost
				}),
				w = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: s.collectionCancel
				}),
				_ = () => e => {
					const t = Object(d.o)(e) || void 0;
					return {
						...m(e, t),
						source: n.collectionComposer,
						noun: s.collectionCreate
					}
				},
				E = () => e => ({
					...m(e),
					source: n.collectionComposer,
					noun: s.collectionSelect
				}),
				C = e => t => ({
					...i.p(t),
					subreddit: i.mb(t),
					source: n.collectionComposer,
					action: r.c.CLICK,
					noun: s.collectionDelete,
					postCollection: i.M(t, {
						collectionId: e
					})
				}),
				j = e => t => ({
					...m(t),
					source: n.collectionComposer,
					noun: s.collectionEdit,
					postCollection: i.M(t, {
						collectionId: e
					})
				}),
				N = e => t => ({
					...m(t, e),
					source: n.collectionComposer,
					noun: s.startEvent
				}),
				M = () => e => {
					const t = Object(d.o)(e) || void 0;
					return {
						...m(e, t),
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
				d = o("./src/reddit/constants/tracking.ts"),
				i = o("./src/reddit/models/PostCreationForm/index.ts"),
				a = o("./src/reddit/selectors/platform.ts"),
				l = o("./src/reddit/selectors/postCreations.ts"),
				u = o("./src/reddit/selectors/telemetry.ts"),
				m = o("./src/telemetry/index.ts");
			! function(e) {
				e.postEvent = "post_event", e.postComposer = "post_composer", e.eventComposer = "event_composer"
			}(n || (n = {}));
			const p = e => u.d(e, {
					pageType: "event_submit"
				}),
				b = e => {
					Object(m.a)({
						...u.p(e),
						source: n.postComposer,
						action: d.c.CLICK,
						noun: "event_create",
						subreddit: u.mb(e)
					})
				},
				x = e => {
					Object(m.a)({
						...u.p(e),
						source: n.postComposer,
						action: d.c.CLICK,
						noun: "event_edit",
						subreddit: u.mb(e),
						postEvent: w(e),
						postComposer: _(e)
					})
				},
				v = () => e => ({
					source: n.eventComposer,
					action: d.c.VIEW,
					noun: d.b.SCREEN,
					actionInfo: p(e),
					postEvent: w(e)
				}),
				f = e => t => ({
					...j(t, Object(a.o)(t)),
					source: n.postComposer,
					noun: "apply",
					postComposer: E(e)
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
					postComposer: _(t),
					postEvent: C(e)
				}),
				w = e => {
					const t = Object(l.p)(e);
					return t && C(t)
				},
				_ = e => E(Object(l.p)(e)),
				E = e => {
					return {
						postScheduled: !!e,
						submitScheduledTime: e && e.submitTime === i.j.AtEventTime ? Object(c.f)(e.startDate).getTime() / s.Xb : void 0
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
						action: d.c.CLICK,
						subreddit: u.mb(e)
					};
					return t ? {
						...o,
						post: u.L(e, t),
						postEvent: u.O(e, {
							postId: t
						}),
						postCollection: u.N(e, {
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
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("approve", e.isFilled), i.a.approveIcon, e.className),
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
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("scheduled", e.isFilled), i.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);

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
					className: Object(r.a)(Object(c.b)("comment", o.isFilled), i.a.commentIcon, t)
				}, o))
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("live", e.isFilled), i.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("lock", e.isFilled), i.a.lockIcon, e.className),
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
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);

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
				className: Object(r.a)(Object(c.b)("mod", e.isFilled), i.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				c = o("./src/reddit/icons/fonts/helpers.tsx"),
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("remove", e.isFilled), i.a.removeIcon, e.className),
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
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("report", e.isFilled), i.a.reportIcon, e.className),
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
				d = o("./src/reddit/icons/fonts/commonStyles.m.less"),
				i = o.n(d);
			t.a = e => s.a.createElement("i", {
				className: Object(r.a)(Object(c.b)("spam", e.isFilled), i.a.spamIcon, e.className),
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
				d = o("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				i = o.n(d);

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
					gutter: d,
					...l
				} = e;
				return s.a.createElement("div", a({
					className: Object(c.a)(i.a.expandRightContainer, t)
				}, l), s.a.createElement("div", {
					className: i.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: d
					}
				}, Array.isArray(o) && o[0]), s.a.createElement("div", {
					className: i.a.right
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
				return d
			}));
			var n = o("./src/reddit/constants/experiments.ts"),
				s = o("./src/reddit/helpers/chooseVariant/index.ts"),
				r = o("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const d = e => !!Object(r.b)(e) || Object(s.c)(e, {
				experimentEligibilitySelector: c.S,
				experimentName: n.e
			}) === n.c.Enabled
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.77b0ff96df72989eeabe.js.map