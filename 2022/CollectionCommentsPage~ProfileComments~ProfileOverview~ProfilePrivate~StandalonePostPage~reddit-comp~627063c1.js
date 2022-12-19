// https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~627063c1.66256c4232a872d06cba.js
// Retrieved at 12/19/2022, 4:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~627063c1"], {
		"./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = s("./src/reddit/selectors/experiments/devPlatform.ts");
			const d = Object(i.a)({
				resolved: {},
				chunkName: () => "devPlatform-components-ContextActions",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~devPlatform-components-AdminPanel-Utilities-DevPlatformConfig~devPlatform-components-ContextActions"), s.e("devPlatform-components-ContextActions")]).then(s.bind(null, "./src/devPlatform/components/ContextActions/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/devPlatform/components/ContextActions/index.tsx"
				}
			}, {
				ssr: !1
			});

			function c(e) {
				return Object(r.e)(e => Object(a.a)(e)) ? n.a.createElement(d, {
					contextType: e.contextType,
					contextData: e.contextData,
					moderator: e.moderator
				}) : null
			}
		},
		"./src/devPlatform/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			const o = "devvit-gateway-url",
				n = "devvit-mock-metadata",
				r = "devvit-debug-logging",
				i = "DEV_PLAT__OPEN_USER_INPUT_MODAL";
			var a;
			! function(e) {
				e[e.POST = 0] = "POST", e[e.COMMENT = 1] = "COMMENT", e[e.SUBREDDIT = 2] = "SUBREDDIT", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
			}(a || (a = {}))
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.hb(e),
				user: i.sb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/telemetry/index.ts");
			const l = new Set;

			function m(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: o
						} = {
							...t
						};
					return o && o.isSponsored ? n.a.createElement("div", {
						onClickCapture: function(e, o) {
							var n, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : d.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, d.b) ? Object(c.a)(a(o)(s, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(c.a)(a(o)(s, d.a.UNKNOWN, null === (n = t.post) || void 0 === n ? void 0 : n.postId)))
						}
					}, n.a.createElement(e, t)) : n.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/reddit/actions/eventPosts/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "fetchEventPostsPending", (function() {
				return C
			})), s.d(t, "fetchEventPostsSuccess", (function() {
				return g
			})), s.d(t, "fetchEventPostsFailure", (function() {
				return E
			})), s.d(t, "fetchMoreEventPostsSuccess", (function() {
				return k
			})), s.d(t, "eventPostsRequested", (function() {
				return _
			})), s.d(t, "startEventNowSuccess", (function() {
				return j
			})), s.d(t, "startEventNowRequested", (function() {
				return w
			})), s.d(t, "editEventTimeSuccess", (function() {
				return I
			})), s.d(t, "editEventTimeRequested", (function() {
				return P
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/eventPosts/constants.ts"),
				a = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/redditGQL/operations/EventPostsBySubredditName.json");
			var l = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var u = (e, t, s, o, r) => Object(l.a)(Object(m.a)(e, [p.a]), {
				endpoint: `${e.apiUrl}/api/event_post_time.json`,
				method: n.ob.POST,
				data: {
					id: t,
					event_start: s,
					event_end: o,
					event_tz: r
				}
			});
			var b = (e, t) => Object(l.a)(Object(m.a)(e, [p.a]), {
					endpoint: `${e.apiUrl}/api/start_event_post.json`,
					method: n.ob.POST,
					data: {
						id: t
					}
				}),
				h = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts"),
				x = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/selectors/eventPosts.ts"),
				f = s("./src/reddit/selectors/posts.ts");
			const O = () => o.fbt._("Something went wrong. Just don't panic.", null, {
					hk: "4onxm1"
				}),
				C = Object(r.a)(i.e),
				g = Object(r.a)(i.c),
				E = Object(r.a)(i.b),
				k = Object(r.a)(i.d),
				_ = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o, r = s();
					const i = Object(v.d)(r, {
							subredditName: e
						}),
						l = Object(v.b)(r, {
							subredditName: e
						}),
						m = Object(v.c)(r, {
							subredditName: e
						}),
						p = Object(v.a)(r, {
							subredditName: e
						}),
						u = l && m;
					if (i) return;
					const b = {
						name: e,
						pageSize: 25,
						nonInclusiveCursor: null
					};
					if (u) b.nonInclusiveCursor = p;
					else if (l && !m) return;
					const f = Object(v.e)(r, {
						subredditName: e
					});
					t(C({
						key: f
					}));
					const _ = await ((e, t) => Object(d.a)(e, {
						...c,
						variables: t
					}))(n(), b);
					if (_.ok) {
						const {
							subredditInfoByName: e
						} = _.body.data, {
							eventPosts: o
						} = e, n = Object(h.a)(o);
						let i = [],
							a = {};
						const d = o.pageInfo || {
							hasNextPage: !1,
							endCursor: null,
							hasPreviousPage: !1,
							startCursor: null
						};
						n.length > 0 && (i = n.map(e => e.id), a = n.reduce((e, t) => (e[t.id] = t, e), {})), r = s(), t((u ? k : g)({
							key: f,
							postIds: i,
							meta: r.meta,
							posts: a,
							pageInfo: d
						}))
					} else t(E({
						error: _.error,
						key: f
					})), t(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}, j = Object(r.a)(i.f), w = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if ((await b(r(), e)).ok) {
						const n = () => o.fbt._("Following event has started successfully: {title}", [o.fbt._param("title", d)], {
							hk: "e9iz9"
						});
						t(j({
							postId: e
						}));
						const r = s(),
							i = Object(f.G)(r, {
								postId: e
							}),
							d = i && i.title || "";
						t(Object(a.f)({
							kind: x.b.SuccessMod,
							text: n()
						}))
					} else t(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}, I = Object(r.a)(i.a), P = (e, t) => async (s, r, i) => {
					let {
						apiContext: d
					} = i;
					const c = await u(d(), e, t.startDate, t.endDate, t.timezoneName);
					if (c.ok) {
						const t = c.body,
							i = 14400,
							d = Math.round(t.event_start / n.Xb);
						let l = t.event_end;
						const m = {
							eventStart: d,
							eventEnd: l = l && Math.round(l / n.Xb) || d + i,
							eventIsLive: t.event_is_live
						};
						s(I({
							postId: e,
							eventInfo: m
						}));
						const p = r(),
							u = Object(f.G)(p, {
								postId: e
							}),
							b = u && u.title || "",
							h = () => o.fbt._("Following event time is updated successfully: {title}", [o.fbt._param("title", b)], {
								hk: "1m1w1c"
							});
						s(Object(a.f)({
							kind: x.b.SuccessMod,
							text: h()
						}))
					} else s(Object(a.f)({
						kind: x.b.Error,
						text: O()
					}))
				}
		},
		"./src/reddit/actions/postCreation/editing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return F
			})), s.d(t, "a", (function() {
				return A
			})), s.d(t, "c", (function() {
				return R
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				u = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const b = e => !(!e.document || !e.document.length),
				h = e => ({
					text: null,
					richtext_json: JSON.stringify({
						document: e.document
					})
				}),
				x = e => ({
					text: e.markdown,
					return_rtjson: !0
				}),
				v = e => ({
					api_type: "json",
					show_error_list: !0,
					thing_id: e.post.id,
					validate_on_submit: !0,
					...b(e) ? h(e) : x(e)
				});
			var f = (e, t) => Object(d.a)(Object(c.a)(e, [l.a]), {
					endpoint: Object(u.a)(Object(m.a)(`${e.apiUrl}/api/editusertext`)),
					method: a.ob.POST,
					data: v(t)
				}).then(p.b),
				O = s("./src/reddit/helpers/overlay/index.ts"),
				C = s("./src/reddit/helpers/r2/normalizePostFromR2/index.ts"),
				g = s("./src/reddit/helpers/trackers/lightbox.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				k = s("./src/reddit/helpers/trackers/postComposer.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/PostCreationForm/index.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/actions/postCreation/constants.ts"),
				y = s("./src/reddit/actions/postCreation/general.ts");
			const N = Object(n.a)(P.l),
				T = Object(n.a)(P.m),
				S = Object(n.a)(P.x),
				M = Object(n.a)(P.H),
				F = Object(n.a)(P.I),
				A = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const i = o(),
						a = Object(I.G)(i, {
							postId: e
						});
					t ? (s(Object(O.a)(a.permalink)), Object(g.e)(e, "edit")(i)) : Object(E.e)(e, "edit")(i);
					const {
						media: d
					} = a;
					if (!d) return;
					let c, l = j.i.RICH_TEXT,
						m = "";
					d.type === _.o.TEXT ? (l = j.i.MARKDOWN, m = d.content) : d.type === _.o.RTJSON && (m = (l = d.rteMode || j.i.RICH_TEXT) === j.i.MARKDOWN ? d.markdownContent : d.richtextContent, c = d.mediaMetadata || void 0), s(M({
						editorMode: l,
						mediaMetadata: c,
						postContent: m,
						postId: e
					}))
				}, R = e => async (t, s, n) => {
					let {
						apiContext: a
					} = n;
					const {
						post: d
					} = e, c = !d.media || "rtjson" !== d.media.type && "text" !== d.media.type ? "" : d.media.rteMode;
					k.E(s(), Object(y.o)(c)), t(S(d.id));
					const l = await f(a(), e),
						m = !1 === l.body.success;
					if (t(N(d.id)), l.ok && !m) {
						t(Object(i.f)({
							kind: w.b.SuccessCommunity,
							text: o.fbt._("Post successfully edited", null, {
								hk: "xej5K"
							})
						})), t(F(d.id));
						const e = Object(C.a)(l.body);
						t(Object(r.Q)({
							[d.id]: e
						}))
					} else t(T(l.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const n = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: o,
					...a
				} = e, l = Object(r.a)(d.a.adLinkWrapper, t, {
					[d.a.ctaExperiment]: !!s,
					[d.a.borders]: "classic" === s,
					[d.a.borderTop]: "compact" === s || "conversation" === s,
					[d.a.borderBottom]: "card" === s
				});
				return n.a.createElement("div", c({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), o)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				d = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: n
				} = e, {
					source: m,
					callToAction: u,
					caption: b
				} = t;
				if (!m || !m.url) return null;
				let h = m.displayText;
				m.displayText.length >= 40 && (h = m.displayText.slice(0, 40 - "...".length) + "...");
				const x = Object(c.t)(s, m.displayText),
					v = Object(c.u)(s) ? h : b,
					f = Object(c.u)(s) ? s.subcaption : m.displayText,
					O = Object(i.a)(p.a.leftSideContent, {
						[p.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[p.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					C = Object(i.a)(p.a.displayUrl, {
						[p.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: O
				}, b && !n && !x && r.a.createElement("span", {
					className: p.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !x && r.a.createElement(d.a, {
					href: m.url.replace(o.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					className: C,
					"data-adclicklocation": l.a.CTA_URL
				}, h), x && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: p.a.productTitle
				}, v), r.a.createElement("span", {
					className: p.a.subcaption
				}, f))), u && r.a.createElement(a.a, {
					className: p.a.callToAction,
					href: m.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: m,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, u))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
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
					showCTAExperiment: s,
					...o
				} = e;
				return n.a.createElement(i.b, l({
					className: Object(r.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: o.isNotCardView,
						[c.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, o))
			}
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				r = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less"),
				i = s.n(r);
			const a = o.a.wrapped(n.c, "RestrictedButton", i.a);
			t.a = a
		},
		"./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				RestrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				restrictedButton: "_1HjNIJegwQhOyUoxHZNWnm",
				Show: "YoaDbMbI8PpFFWQbD_Uwq",
				show: "YoaDbMbI8PpFFWQbD_Uwq",
				CommentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk",
				commentModToolsFlatlist: "_3cJNzWW-kTTUFiqoBkRMRk"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.m.less": function(e, t, s) {
			e.exports = {
				Icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				icon: "_1BLJJHA9oAzG1Rqmf4pcYW",
				IconText: "_6cNM5NdF82ASM5hiBVNN5",
				iconText: "_6cNM5NdF82ASM5hiBVNN5",
				Animate: "_3j98tX1WZapEArV-4rmJe5",
				animate: "_3j98tX1WZapEArV-4rmJe5",
				top: "_3Dr1MoYY5Yv4YhbQFFcks0",
				bottom: "_1GRYNQhMsR-00cWDJcE3UJ",
				bigCircle: "_85rqvRijdIsn3s0j-gUaw",
				midCircle: "RS1g6Gd_W67wwWKSteEB1",
				smallCircle: "lRlGcfTzZ7njZnIUyvhGH",
				play: "_3Kxa8oHGuT_QpP4zIN5jrV",
				blinker: "_20WvB_9deo7bJVi4af1dSS"
			}
		},
		"./src/reddit/components/CommentsChat/LiveIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/selectors/chatPost.ts"),
				l = s("./src/reddit/components/CommentsChat/LiveIcon/index.m.less"),
				m = s.n(l);
			const p = e => {
				let {
					className: t,
					postId: s
				} = e;
				const [r, l] = i.a.useState(!1), p = Object(a.e)(e => Object(c.d)(e, {
					postId: s
				})), u = p && r;
				return p ? i.a.createElement(o.a, {
					rootMargin: "20px 0px 20px 0px",
					threshold: .1,
					onChange: e => {
						e.isIntersecting && e.intersectionRatio >= .1 ? r || l(!0) : r && l(!1)
					}
				}, i.a.createElement("div", {
					className: Object(d.a)(m.a.Icon, t)
				}, i.a.createElement("span", {
					className: Object(d.a)(m.a.Animate, m.a.top, {
						[m.a.play]: u
					})
				}, i.a.createElement("span", {
					className: m.a.bigCircle
				}), i.a.createElement("span", {
					className: m.a.midCircle
				}), i.a.createElement("span", {
					className: m.a.smallCircle
				})), i.a.createElement("p", {
					className: m.a.IconText
				}, n.fbt._("Live Chat", null, {
					hk: "gyqAe"
				})), i.a.createElement("span", {
					className: Object(d.a)(m.a.Animate, m.a.bottom, {
						[m.a.play]: u
					})
				}, i.a.createElement("span", {
					className: m.a.bigCircle
				}), i.a.createElement("span", {
					className: m.a.midCircle
				}), i.a.createElement("span", {
					className: m.a.smallCircle
				})))) : null
			}
		},
		"./src/reddit/components/CommentsLink/index.m.less": function(e, t, s) {
			e.exports = {
				commentsLink: "_1UoeAeSRhOKSNdY_h3iS1O",
				commentIcon: "_3DVrpDrMM9NLT6TlsTUMxC",
				defaultCursorWrapper: "_3m17ICJgx45k_z-t82iVuO",
				link: "_1Hw7tY9pMr-T1F4P1C-xNU",
				text: "FHCV02u6Cp2zYL0fhQPsO",
				commentsText: "_25BV1fTi10_HqCnD195T85"
			}
		},
		"./src/reddit/components/CommentsLink/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./node_modules/fbt/lib/FbtPublic.js"),
				p = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				b = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				x = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				v = s("./src/reddit/components/CommentsLink/index.m.less"),
				f = s.n(v);
			const O = () => 0,
				C = e => {
					let t, {
						hasModPostPerms: s,
						isCountAnimShadowTestEnabled: i,
						isChatPost: a,
						isCommentCountAnimation: c,
						modModeEnabled: v,
						numComments: C,
						postId: g,
						shouldShowIcon: E,
						shouldShowText: k,
						text: _,
						type: j
					} = e;
					const w = c && C < x.a,
						I = a ? m.fbt._({
							"*": "{number} messages",
							_1: "1 message"
						}, [m.fbt._plural(C, "number", Object(p.b)(C))], {
							hk: "2wEqSc"
						}) : m.fbt._({
							"*": "{number} comments",
							_1: "1 comment"
						}, [m.fbt._plural(C, "number", Object(p.b)(C))], {
							hk: "1QeOde"
						}),
						P = a ? m.fbt._({
							"*": "messages",
							_1: "message"
						}, [m.fbt._plural(C)], {
							hk: "1mMKLS"
						}) : m.fbt._({
							"*": "comments",
							_1: "comment"
						}, [m.fbt._plural(C)], {
							hk: "2fJpkn"
						});
					t = _ || (j === b.g.Compact || v && s ? Object(p.b)(C) : I);
					const y = Object(r.d)(),
						N = Object(o.useCallback)(e => {
							const {
								commentCountChange: t
							} = e.subscribe.data;
							0 !== t && y(Object(l.G)({
								postId: g,
								delta: t
							}))
						}, [y, g]),
						T = Object(o.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "COMMENT_COUNT_UPDATE",
									postID: g
								}
							}
						});
					return n.a.createElement(n.a.Fragment, null, E && n.a.createElement(h.a, {
						className: f.a.commentIcon,
						role: "presentation"
					}), k && n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: f.a.text
					}, (w || i) && n.a.createElement(u.b, {
						countToUpperBound: C,
						incrementDelta: O,
						initialDelay: O,
						initialDisplayCount: C,
						postId: g,
						shouldDisjointAnimation: !0,
						subsequentRecurringDelay: O,
						featureName: u.a.Comment,
						queryKey: "postCommentCount",
						queryVariables: T.current,
						onDataCB: N,
						isLoadTestOnly: Boolean(i) && !w
					}), !w && t), (!v || !s) && w && n.a.createElement("span", {
						className: Object(d.a)(f.a.text, f.a.commentsText)
					}, P)))
				};
			var g = s("./src/reddit/constants/componentTestIds.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				k = s("./src/reddit/hooks/useClickSourceData.ts"),
				_ = s("./src/reddit/selectors/chatPost.ts"),
				j = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				w = s("./src/reddit/selectors/experiments/postSeo.ts"),
				I = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				y = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts");
			const N = Object(r.b)(() => Object(a.c)({
				isChatPost: _.d,
				isPostSEOEligible: w.e,
				postPermalink: I.F,
				shouldOpenPostInNewTab: P.lb,
				isBlockingInterstitialEnabled: j.b,
				isBlockingInterstitialV2Enabled: j.c
			}));
			t.a = N(e => {
				let {
					className: t,
					hasModPostPerms: s,
					forceOpenInNewTab: o,
					isChatPost: a,
					isCommentPermalink: m,
					isCommentsPage: p,
					isOverlay: u,
					isPostSEOEligible: b,
					modModeEnabled: h,
					numComments: x,
					onClick: v,
					postPermalink: O,
					shouldOpenPostInNewTab: _,
					shouldShowIcon: j = !0,
					shouldShowText: w = !0,
					text: I,
					type: P,
					postId: N,
					isCommentCountAnimation: T,
					isCountAnimShadowTestEnabled: S,
					isBlockingInterstitialEnabled: M,
					isBlockingInterstitialV2Enabled: F
				} = e;
				const A = Object(r.d)(),
					R = p && !m && !b,
					L = m && !u,
					D = Object(k.a)(),
					B = n.a.createElement(C, {
						hasModPostPerms: s,
						isCountAnimShadowTestEnabled: !!S,
						isChatPost: a,
						isCommentCountAnimation: !!T,
						modModeEnabled: h,
						numComments: x,
						postId: N,
						shouldShowIcon: j,
						shouldShowText: w,
						text: I,
						type: P
					});
				return R ? n.a.createElement("div", {
					className: Object(d.a)(f.a.commentsLink, f.a.defaultCursorWrapper, t),
					onClick: v
				}, B) : n.a.createElement(i.a, {
					rel: "nofollow",
					"data-click-id": "comments",
					"data-adclicklocation": y.b.COMMENTS,
					"data-test-id": g.a,
					className: Object(d.a)(f.a.commentsLink, f.a.link, t),
					target: o || _ ? "_blank" : void 0,
					to: L ? Object(E.b)(O) : Object(c.a)(O, !0, D),
					onClick: e => {
						(M || F) && (e.preventDefault(), A(Object(l.X)(Object(E.b)(O), N))), v && v()
					}
				}, B)
			})
		},
		"./src/reddit/components/CreatorStats/Icon.m.less": function(e, t, s) {
			e.exports = {
				icon: "D7SJKwX8OlPkNjhgXO71s"
			}
		},
		"./src/reddit/components/CreatorStats/Icon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/constants/icons.ts"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/selectors/subreddit.ts"),
				c = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/components/CreatorStats/Icon.m.less"),
				m = s.n(l);
			t.a = e => {
				let {
					postCreated: t,
					subredditId: s
				} = e;
				const l = Object(i.e)(e => s ? Object(d.Y)(e, {
						subredditId: s
					}) : void 0),
					[p, u] = Object(n.useState)(!0);
				return Object(n.useEffect)(() => {
					let e = !0;
					if (void 0 !== t) {
						const s = Object(c.e)(t);
						e = e && !s
					}
					if (void 0 !== l) {
						const t = l.isQuarantined;
						e = e && !t
					}
					u(e)
				}, [t, l]), r.a.createElement(a.a, {
					name: o.a.statistics,
					className: p ? m.a.icon : void 0
				})
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				img: "_2j4blQAaYrPKIhe5jBJ9c8"
			}
		},
		"./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.m.less"),
				d = s.n(a),
				c = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = s("./src/reddit/selectors/gold/awardIcon.ts"),
				m = s("./src/reddit/selectors/gold/purchaseCatalog.ts");
			t.a = e => {
				const t = Object(r.e)(m.b),
					s = Object(r.e)(e => Object(l.a)(e, {
						award: t,
						minSize: 32
					}));
				return t && s ? n.a.createElement("img", {
					alt: t.name,
					className: Object(i.a)(d.a.img, e.className),
					id: e.id,
					src: s
				}) : n.a.createElement(c.a, e)
			}
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
				d = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				c = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				m = s("./src/reddit/helpers/postEvent.ts"),
				p = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				u = s.n(p);
			const b = a.a.div("EventMetaWrapper", u.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: o
				} = e;
				if (!Object(m.a)(o)) return null;
				const a = o && o.eventInfo,
					p = Object(l.a)(o),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return n.a.createElement("div", {
					className: Object(r.a)(u.a.container, t, {
						[u.a.isCompact]: !!s
					})
				}, n.a.createElement(b, {
					className: u.a.eventMetaWrapper
				}, n.a.createElement(d.a, {
					post: o
				}), !p && h && n.a.createElement(c.a, {
					className: u.a.eventFollowButton,
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
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				d = s("./src/reddit/icons/fonts/Live/index.tsx"),
				c = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				m = s.n(l),
				p = s("./src/lib/lessComponent.tsx");
			const u = p.a.span("PostEventFutureText", m.a),
				b = p.a.span("PostEventPastText", m.a),
				h = p.a.span("PostEventNowText", m.a),
				x = p.a.span("Container", m.a),
				v = p.a.wrapped(a.a, "CalendarIcon", m.a),
				f = p.a.wrapped(d.a, "LiveIcon", m.a),
				O = p.a.div("LoadingState", m.a);
			class C extends o.Component {
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
						eventIsLive: a,
						eventStart: d
					} = s, l = Object(r.e)(d, o);
					let m, p;
					if (this.state.mounted || l === r.a.Live) m = n.a.createElement(c.c, {
						startTime: d,
						endTime: o,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						m = n.a.createElement(O, {
							className: e
						})
					}
					if (a) p = n.a.createElement(h, null, n.a.createElement(f, null), m);
					else if (l === r.a.Future) p = n.a.createElement(u, null, n.a.createElement(v, null), m);
					else {
						if (l !== r.a.Past) return null;
						p = n.a.createElement(b, null, n.a.createElement(v, null), m)
					}
					return n.a.createElement(x, {
						className: e
					}, p)
				}
			}
			t.a = C
		},
		"./src/reddit/components/Flatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				hideIfVwSmaller: "_3yh2bniLq7bYr4BaiXowdO",
				FirstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				firstGroup: "_2sAFaB0tx4Hd5KxVkdUcAx",
				LoggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				loggedOutVariant: "_3sUJGnemgtNczijwoT8PGg",
				LoggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				loggedInVariant: "_28vEaVlLWeas1CDiLuTCap",
				OpVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				opVariant: "Z-VR19FVnE3nOS0_BU4Wy",
				EditingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				editingGroup: "_1EKOhBHXAW9y8Bgn93c9f3",
				SecondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				secondGroup: "_1pShbCnOaF7EGWTq6IvZux",
				AwardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				awardingGroup: "_1EWxiIupuIjiExPQeK4Kud",
				HideIfVWLarger: "_1k3nXWGGz2NdPr8dg49Tbs",
				hideIfVwLarger: "_1k3nXWGGz2NdPr8dg49Tbs"
			}
		},
		"./src/reddit/components/Flatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.EditPost = "EDITPOST", e.EditFlair = "EDITFLAIR", e.Save = "SAVE", e.Gild = "GILD", e.Hide = "HIDE", e.PostOverflowMenu = "POST_OVERFLOW_MENU", e.Report = "REPORT", e.Share = "SHARE", e.ShowFewerLikeThis = "SHOW_FEWER_LIKE_THIS", e.ShowMoreLikeThis = "SHOW_MORE_LIKE_THIS", e.Insights = "INSIGHTS", e.Mute = "MUTE"
				}(o || (o = {}))
		},
		"./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return m
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Flatlist/breakpoints.m.less"),
				d = s.n(a),
				c = s("./src/reddit/components/Flatlist/constants.ts");
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.First = "FirstGroup", e.Editing = "EditingGroup", e.Second = "SecondGroup", e.Awarding = "AwardingGroup"
			}(n || (n = {})),
			function(e) {
				e.LoggedIn = "LoggedInVariant", e.LoggedOut = "LoggedOutVariant", e.Op = "OpVariant"
			}(r || (r = {}));
			const l = {
					[c.a.EditFlair]: n.Editing,
					[c.a.EditPost]: n.Editing,
					[c.a.Gild]: n.Awarding,
					[c.a.Hide]: n.First,
					[c.a.PostOverflowMenu]: n.First,
					[c.a.Report]: n.First,
					[c.a.Save]: n.First,
					[c.a.Share]: n.Second,
					[c.a.ShowFewerLikeThis]: n.First,
					[c.a.ShowMoreLikeThis]: n.First,
					[c.a.Insights]: n.First,
					[c.a.Mute]: n.First
				},
				m = e => {
					return (e => {
						const t = d.a[e.type],
							s = d.a[e.group],
							o = d.a[e.groupVariant];
						return Object(i.a)(t, s, o)
					})({
						type: e.breakpointType || o.HideIfVWSmaller,
						group: l[e.flatlistItem],
						groupVariant: ((e, t) => e && t ? r.Op : e ? r.LoggedIn : r.LoggedOut)(e.isLoggedIn, e.isUserOp)
					})
				}
		},
		"./src/reddit/components/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3-miAEojrCvx_4FQ8x3P-s",
				responsiveRow: "YszYBnnIoNY8pZ6UwCivd",
				rowContainer: "_3U_7i38RDPV5eBv7m4M-9J",
				responsiveRowText: "_70940WUuFmpHbhKlj8EjZ",
				insightsButtonText: "WH45FmM2j_4Snucem7pcm",
				flatlistSeparator: "x7sinePdvDKj7bf-cdm4Z",
				flexSpacer: "_21pmAV9gWG6F_UKVe7YIE0",
				modActionsIcon: "_15c1hqseW25EvRu0WP2Dq5",
				shareText: "_6_44iTtZoeY6_XChKt5b0",
				commentsLink: "_2qww3J5KKzsD7e5DO0BvvU",
				supportButton: "_3NIVQWStkLT7RXnwKpKNuT",
				text: "YCL-CnLJKXzXbwuLZEyh1",
				ShareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareButton: "kU8ebCMnbXfjCWfqn0WPb",
				shareIcon: "_1GQDWqbF-wkYWbrpmOvjqJ",
				ShareMenu: "_JRBNstMcGxbZUxrrIKXe",
				shareMenu: "_JRBNstMcGxbZUxrrIKXe",
				liveDiscussionWrapper: "_3rnnBQZL1OOttG3tFn629n",
				modLargePost: "_1rz4qmtk19qk1KbsKVMbAq",
				overflowMenuContainer: "_3MmwvEEt6fv5kQPFCVJizH",
				awardIcon: "_3yNNYT3e1avhAAWVHd0-92",
				saveIcon: "_1Xe01txJfRB9udUU85DNeR"
			}
		},
		"./src/reddit/components/Flatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return ve
			})), s.d(t, "a", (function() {
				return fe
			})), s.d(t, "d", (function() {
				return ke
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/timezone/index.ts"),
				b = s("./src/reddit/actions/gold/modals.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				x = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postCreation/editing.ts"),
				f = s("./src/reddit/actions/postFlair.ts"),
				O = s("./src/reddit/actions/reportFlow/index.ts"),
				C = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				g = s("./src/reddit/components/CommentsLink/index.tsx"),
				E = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				k = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				_ = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				j = s("./src/reddit/components/ModModeReports/helpers.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				I = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				P = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				y = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				N = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				T = s("./src/reddit/components/ShareMenu/index.tsx"),
				S = s("./src/reddit/components/TrackingHelper/index.tsx"),
				M = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				F = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				R = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				L = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				D = s("./src/reddit/selectors/experiments/reportAd.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				U = s("./src/reddit/controls/Dropdown/Row.tsx"),
				G = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				V = s("./src/reddit/components/Flatlist/index.m.less"),
				H = s.n(V);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var J = e => {
					let {
						flatlistItem: t,
						isLoggedIn: s,
						isUserOp: o,
						noBreakpoints: n,
						...i
					} = e;
					return r.a.createElement("div", {
						"data-ignore-click": !!i.searchIgnoreClick,
						className: H.a.rowContainer,
						"data-adclicklocation": G.b.FLATLIST_GENERAL
					}, r.a.createElement(U.a, q({}, i, {
						className: n ? H.a.responsiveRow : Object(d.a)(H.a.responsiveRow, Object(W.b)({
							flatlistItem: t,
							isLoggedIn: s,
							isUserOp: o
						}))
					})))
				},
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Q = s("./src/reddit/helpers/trackers/modTools.ts"),
				Y = s("./src/reddit/helpers/trackers/post.ts"),
				z = s("./src/reddit/icons/fonts/index.tsx"),
				X = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Share/index.tsx"),
				$ = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				ee = s("./src/reddit/models/PostCreationForm/index.ts"),
				te = s("./src/reddit/models/User/index.ts"),
				se = s("./src/reddit/components/Flatlist/constants.ts"),
				oe = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				re = s("./src/reddit/components/Econ/GiftOrFreeAwardIcon/index.tsx"),
				ie = s("./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx"),
				ae = s("./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx"),
				de = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				ce = s("./src/reddit/selectors/activeModalId.ts"),
				le = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				me = s("./src/reddit/selectors/experiments/chat.ts");

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			let ue, be;
			const he = m.a.button("ShareButton", H.a),
				xe = m.a.wrapped(T.a, "ShareMenu", H.a),
				ve = Object(l.a)(e => {
					let {
						className: t,
						...s
					} = e;
					return r.a.createElement(X.a, pe({}, s, {
						className: Object(d.a)(H.a.modActionsIcon, t),
						style: {
							color: Object(L.a)(Object(R.a)(s), $.a.actionIcon, $.b.actionIcon)
						}
					}))
				}),
				fe = e => r.a.createElement("div", pe({}, e, {
					className: Object(d.a)(H.a.flatlistSeparator, e.className)
				})),
				Oe = Object(A.v)({
					currentProfileName: A.j,
					isCommentPermalink: A.x,
					isCommentsPage: A.y,
					isProfilePostListing: A.N,
					pageLayer: e => e
				}),
				Ce = Object(a.c)({
					activeModalId: ce.a,
					claimedFreeAward: le.b,
					layout: A.U,
					userIsOp: B.Fb,
					subreddit: A.s,
					isReportAnAdEnabled: D.a
				}),
				ge = Object(i.b)(Ce, (e, t) => {
					let {
						post: o,
						isOverlay: n,
						isCommentsPage: r
					} = t;
					return {
						addPostToCollection: (t, s) => e(Object(ne.a)(t, s)),
						onToggleModal: t => e(Object(h.i)(t)),
						onToggleSave: () => e(Object(x.T)(o.postId)),
						onHide: t => e(Object(x.db)(o.postId, !o.hidden, n, !0)),
						onReportClick: () => e(Object(O.c)(o.postId, n)),
						onEdit: () => {
							const t = !n && !r;
							e(Object(v.a)(o.postId, t))
						},
						onFlairPost: () => e(Object(h.i)(Object(I.b)(o.postId, n))),
						onGildClick: (t, s) => e(Object(b.d)({
							awardId: s,
							correlationId: t,
							thingId: o.postId
						})),
						onFlairChanged: t => {
							let {
								selectedTemplateId: s,
								previewFlair: n
							} = t;
							return e(Object(f.h)({
								post: o,
								selectedTemplateId: s,
								previewFlair: n
							}))
						},
						toggleEditStartTimeModal: async () => {
							ue && be || ([ue, be] = await Promise.all([s.e("schedulePickerModal").then(s.bind(null, "./src/reddit/components/PostCreationForm/SchedulePickerModal/index.tsx")).then(e => e.default), Promise.resolve().then(s.bind(null, "./src/reddit/actions/eventPosts/index.ts")).then(e => e.editEventTimeRequested)])), e(Object(h.i)(Object(ee.s)(o.postId, n, ee.k.POST_OVERFLOW_MENU)))
						},
						addEventStartTime: t => {
							be && e(be(o.id, t))
						}
					}
				}),
				Ee = r.a.memo(e => {
					const {
						activeModalId: t,
						addEventStartTime: a,
						className: l,
						currentProfileName: m,
						currentUser: b,
						forceOpenInNewTab: h,
						hasModFlairPerms: x,
						hasModFullPerms: v,
						hasModPostPerms: f,
						isCommentPermalink: O,
						isCommentsPage: T,
						isCountAnimShadowTestEnabled: S,
						isLargePost: A,
						isOverlay: R,
						isProfilePostListing: L,
						isSticky: D,
						layout: B,
						modModeEnabled: U,
						onClickInsightsButton: V,
						onFlairChanged: q,
						onIgnoreReports: X,
						onOpenReportsDropdown: $,
						pageLayer: ne,
						post: de,
						sendEvent: ce,
						showEditFlair: le,
						showEditPost: pe,
						subreddit: be,
						toggleEditStartTimeModal: fe,
						tooltipType: Oe,
						userIsOp: Ce,
						searchIgnoreClick: ge,
						isCommentCountAnimation: Ee,
						hostPostData: _e,
						listingKey: je,
						onGildClick: we,
						onToggleModal: Ie,
						claimedFreeAward: Pe,
						onToggleSave: ye,
						onHide: Ne,
						addPostToCollection: Te,
						onReportClick: Se,
						shouldHideItems: Me,
						shouldShowInsightsButton: Fe,
						isReportAnAdEnabled: Ae
					} = e, Re = Object(i.e)(me.e), Le = Object(n.useCallback)(async () => {
						const e = Object(K.d)(K.a.GildingFlow, !0);
						we(e, null == Pe ? void 0 : Pe.id);
						const {
							clickGildEvent: t
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						ce(t(de.id))
					}, [we, de, ce, Pe]), De = Object(n.useCallback)(() => {
						t && Ie(t)
					}, [t, Ie]), Be = Object(n.useCallback)(() => {
						const e = Object(ee.t)(de.id, R);
						Ie(e)
					}, [Ie, R, de]), We = Object(n.useCallback)(e => {
						Te(e.id, de.id).then(() => De())
					}, [Te, De, de]), Ue = Object(n.useCallback)((e, t) => {
						ce(Object(Y.k)(de.id, e, R ? "post_detail" : "post", je, _e, void 0, null == t ? void 0 : t.referralId))
					}, [_e, R, ce, je, de]), Ge = Object(n.useCallback)(() => {
						ye(), Ue(de.saved ? "unsave" : "save")
					}, [ye, de, Ue]), Ve = Object(n.useCallback)(() => {
						Ne(!!de.hidden), Ue(de.hidden ? "unhide" : "hide")
					}, [Ne, de, Ue]), He = Object(n.useCallback)(() => {
						Se(), Ue("report")
					}, [Se, Ue]), qe = Object(n.useMemo)(() => r.a.createElement(he, {
						"data-click-id": "share",
						"data-adclicklocation": G.b.FLATLIST_SHARE
					}, r.a.createElement(Z.a, {
						className: H.a.shareIcon
					}), r.a.createElement("span", {
						className: H.a.shareText
					}, o.fbt._("share", null, {
						hk: "1eAfZg"
					}))), []), Je = !!b && Object(te.e)(b) === de.author, Ke = Object(oe.a)("View--Reports", de.id, Oe), Qe = Object(oe.a)(c.wc, de.id, Oe), Ye = Object(j.c)(de), ze = ke("-mod-actions-menu", de.id, R, D), Xe = Object(j.a)(de), Ze = de.postId, $e = B === F.g.Large, et = !T && $e || f && U || Me, tt = !(R || T || O), st = !de.authorIsBlocked && b && de.isGildable && !de.authorIsBlocked && !de.unrepliableReason, ot = !!de.recommendationContext, nt = de.isSponsored || Object(p.u)(ne);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(d.a)(H.a.flatlistContainer, l)
					}, r.a.createElement(g.a, {
						className: Object(d.a)(H.a.rowContainer, H.a.commentsLink),
						forceOpenInNewTab: h,
						hasModPostPerms: f,
						isCommentsPage: T,
						isCommentPermalink: O,
						isOverlay: R,
						postId: de.id,
						modModeEnabled: U,
						numComments: de.numComments,
						isCommentCountAnimation: Ee,
						isCountAnimShadowTestEnabled: S
					}), st && r.a.createElement(r.a.Fragment, null, r.a.createElement(J, {
						displayText: o.fbt._("Award", null, {
							hk: "2fZCpE"
						}),
						textClassName: H.a.responsiveRowText,
						flatlistItem: se.a.Gild,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: Le,
						searchIgnoreClick: ge,
						"data-adclicklocation": G.b.FLATLIST_AWARD,
						skipRoleAttr: !0
					}, r.a.createElement(re.a, {
						className: H.a.awardIcon,
						id: Qe
					})), r.a.createElement(k.a, {
						postOrComment: de,
						tooltipId: Qe
					})), r.a.createElement(xe, {
						className: Object(d.a)(H.a.rowContainer, Object(W.b)({
							flatlistItem: se.a.Share,
							isLoggedIn: !!b,
							isUserOp: Ce
						})),
						dropdownId: ke("-share-menu", de.id, R, D),
						permalink: de.permalink,
						post: de,
						sendEventWithName: Ue,
						subredditType: null == be ? void 0 : be.type
					}, qe), pe && !et && r.a.createElement(J, {
						displayText: o.fbt._("Edit post", null, {
							hk: "Jq2Cr"
						}),
						textClassName: H.a.responsiveRowText,
						flatlistItem: se.a.EditPost,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: e.onEdit,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "edit"
					})), (!f || !U) && r.a.createElement(J, {
						displayText: de.saved ? o.fbt._("unsave", null, {
							hk: "4Dn4IT"
						}) : o.fbt._("save", null, {
							hk: "3NOMst"
						}),
						textClassName: H.a.responsiveRowText,
						flatlistItem: se.a.Save,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: Ge,
						searchIgnoreClick: ge,
						skipRoleAttr: !0,
						"data-adclicklocation": G.b.FLATLIST_SAVE
					}, r.a.createElement(z.a, {
						name: de.saved ? "saved" : "save",
						className: H.a.saveIcon
					})), !nt && !et && r.a.createElement(J, {
						displayText: de.hidden ? o.fbt._("unhide", null, {
							hk: "151XLs"
						}) : o.fbt._("hide", null, {
							hk: "4AnA6R"
						}),
						textClassName: H.a.responsiveRowText,
						flatlistItem: se.a.Hide,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: Ve,
						searchIgnoreClick: ge,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "hide",
						isFilled: de.hidden
					})), !Je && (!nt || Ae) && !et && r.a.createElement(J, {
						displayText: o.fbt._("report", null, {
							hk: "1phfns"
						}),
						textClassName: H.a.responsiveRowText,
						flatlistItem: se.a.Report,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: He,
						searchIgnoreClick: ge,
						skipRoleAttr: !0
					}, r.a.createElement(z.a, {
						name: "report"
					})), r.a.createElement(w.a, {
						isOverlay: R,
						layout: B,
						modModeEnabled: U,
						post: de,
						sendEvent: ce
					}), f && r.a.createElement(_.a, {
						dropdownId: ze,
						onClick: () => ce(Object(Y.k)(de.id, "post_mod_action_menu"))
					}, r.a.createElement(ve, null), r.a.createElement(P.a, {
						canEditFlair: x && !!le,
						hasModFullPerms: v,
						hasModPostPerms: f,
						isOverlay: !!R,
						isPostAuthor: Je,
						modModeEnabled: U,
						post: de,
						tooltipId: ze
					})), f && Ye && !U && r.a.createElement(N.c, {
						text: `${Xe}`,
						onClick: () => {
							$(Ke), ce(Object(Y.k)(de.id, "post_report_menu"))
						},
						id: Ke
					}, r.a.createElement(M.a, {
						model: de,
						onIgnoreReports: () => {
							X(), ce(Object(Q.o)(de.ignoreReports ? "restore_reports" : "ignore_reports", de.id))
						},
						tooltipId: Ke
					}), r.a.createElement(z.a, {
						className: H.a.icon,
						name: de.ignoreReports ? "ignore_reports" : "report"
					})), Fe && r.a.createElement(J, {
						displayText: o.fbt._("Insights", null, {
							hk: "2IyDq5"
						}),
						textClassName: Object(d.a)(H.a.responsiveRowText, H.a.insightsButtonText),
						flatlistItem: se.a.Insights,
						isLoggedIn: !!b,
						isUserOp: Ce,
						onClick: V,
						skipRoleAttr: !0
					}, r.a.createElement(E.a, {
						postCreated: de.created,
						subredditId: de.belongsTo.id
					})), (!nt || Ae) && r.a.createElement("div", {
						className: H.a.overflowMenuContainer
					}, r.a.createElement(y.a, {
						currentProfileName: m,
						dropdownId: ke("-overflow-menu", de.id, R, D),
						ignoreOverflowMenuBreakpoints: Me,
						isCommentsPage: T,
						isFixed: D,
						isOverlay: !!R,
						isProfilePostListing: L,
						isRecommendationPost: ot,
						layout: B,
						modModeWithPost: U && f,
						onClickInsightsButton: V,
						pageLayer: ne,
						permalink: de.permalink,
						postId: Ze,
						sendEvent: ce,
						shouldShowInsightsButton: Fe,
						showEditPost: !!pe,
						showEditFlair: !!le,
						useFlatlistBreakpoints: e.useFlatlistBreakpoints,
						toggleAddEventStartTimeModal: fe,
						toggleEditStartTimeModal: fe
					})), t === Object(ee.t)(de.id, R) && r.a.createElement(ie.a, {
						subredditId: de.belongsTo.id,
						onClose: De,
						postId: de.id,
						onSelectCollection: We,
						titleText: o.fbt._("Add post to a collection", null, {
							hk: "38vSyF"
						}),
						onItemHoverActionText: o.fbt._("Add", null, {
							hk: "2wi3d4"
						}),
						isOverlay: R
					}), t === Object(ee.s)(de.id, R, ee.k.POST_OVERFLOW_MENU) && ue && r.a.createElement(ue, {
						onChange: a,
						onClose: fe,
						schedule: Object(u.c)(de),
						shouldShowDeleteButton: !1
					}), t === Object(ee.u)(de.id, R) && r.a.createElement(ae.a, {
						onCancel: Be,
						onCollectionCreated: We,
						subredditId: de.belongsTo.id
					}), t === Object(I.b)(de.id, R) && r.a.createElement(I.a, {
						flairs: de.flair,
						subredditId: de.belongsTo.id,
						modalId: Object(I.b)(de.id, R),
						onFlairChanged: q
					}), r.a.createElement("div", {
						className: H.a.flexSpacer
					})), tt && !Re && r.a.createElement(C.a, {
						className: Object(d.a)(H.a.liveDiscussionWrapper, {
							[H.a.modLargePost]: A && f
						}),
						postId: de.postId
					}))
				});
			Ee.displayName = "Flatlist";
			const ke = (e, t, s, o) => {
					let n = t;
					return s && (n += "-overlay"), o && (n += "-sticky"), n += e
				},
				_e = Oe(ge(Object(S.c)(Ee)));
			t.c = r.a.memo((function(e) {
				const t = Object(de.a)();
				return r.a.createElement(_e, pe({}, e, {
					searchIgnoreClick: t
				}))
			}))
		},
		"./src/reddit/components/GiveAwardTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_17AlFvm1kWw8NYe0FZKlMB",
				newBadge: "_18TPfQgPhTmXJ8270Nc5nM",
				text: "_26N1OuVJykHlztxQkPEfqb",
				freeAwardTooltip: "_1C7AEhBd1Od4VDczirG0jB",
				freeAwardContainer: "P0AA_X8_E-4IwAxzn2uke"
			}
		},
		"./src/reddit/components/GiveAwardTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/hooks/useTracking.ts"),
				a = s("./src/reddit/helpers/trackers/freeAwardOffer.ts"),
				d = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = s("./src/reddit/components/ContentTooltip/index.tsx"),
				l = s("./src/reddit/components/GiveAwardTooltip/index.m.less"),
				m = s.n(l);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					tooltipId: t
				} = e, s = Object(r.e)(d.b), l = Object(i.a)();
				return Object(o.useEffect)(() => {
					s && l(Object(a.c)())
				}, [s, l]), s ? n.a.createElement(c.a, {
					className: m.a.freeAwardTooltip,
					caretColor: {
						bottom: "#F6481E"
					},
					tooltipSizeEstimate: {
						height: 48,
						width: 148
					},
					tooltipId: t,
					defaultTooltipPosition: "top"
				}, n.a.createElement("div", {
					className: m.a.freeAwardContainer
				}, p._("Tap to give your {award name} Award", [p._param("award name", s.name)], {
					hk: "2EMqbP"
				}))) : null
			}
		},
		"./src/reddit/components/ModActionsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				ModActionsMenu: "_28noJDp6DzFWESejYQdpcD",
				modActionsMenu: "_28noJDp6DzFWESejYQdpcD"
			}
		},
		"./src/reddit/components/ModActionsMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/RestrictedButton.tsx"),
				c = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				l = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ModActionsMenu/index.m.less"),
				p = s.n(m);
			const u = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(l.b)(s)(e)
					}
				}),
				b = Object(r.b)(u, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(a.h)({
							tooltipId: s
						}))
					}
				}),
				h = () => null;
			t.a = b(e => n.a.createElement("div", {
				className: p.a.ModActionsMenu,
				id: e.dropdownId,
				onClick: e.dropdownIsOpen ? h : e.onClick
			}, e.inCommentFlatlist ? n.a.createElement(d.a, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children) : n.a.createElement(c.c, {
				className: e.className,
				onClick: e.toggleDropdown
			}, e.children)))
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
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				d = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), m = Object(o.a)({
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
			t.a = m
		},
		"./src/reddit/components/ModModeReports/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			const o = e => (e.numReports || 0) > 0 || !!e.modReportsDismissed && e.modReportsDismissed.length > 0 || !!e.userReportsDismissed && e.userReportsDismissed.length > 0,
				n = e => {
					if (e.numReports && e.numReports > 0) return e.numReports;
					return (e.modReportsDismissed && e.modReportsDismissed.length || 0) + (e.userReportsDismissed && e.userReportsDismissed.length || 0)
				},
				r = e => (e.numReports || 0) > 0
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				d = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(n.a)(d.a.banner, d.a.staticBanner)
			}, c._("Loading reports…", null, {
				hk: "4gwdQw"
			})), m = Object(o.a)({
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
			t.a = m
		},
		"./src/reddit/components/ModToolsFlatlist/breakpoints.m.less": function(e, t, s) {
			e.exports = {
				HideIfVWSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				hideIfVwSmaller: "_3_rOJpfw54EqNa6daNkKzY",
				ApproveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				approveGroup: "LoIAKSBD5_isA5qtrC3Kt",
				DefaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				defaultVariant: "_1LDTBaBSnv4jL7lV98ayQL",
				CompactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				compactVariant: "_2SLG9GIeu2AqBhz2XpW8ow",
				ClassicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				classicVariant: "_1u3Z1cqZ8_083AStFVo71a",
				RemoveGroup: "_3LzZxt89CjBbx__WYlCPCh",
				removeGroup: "_3LzZxt89CjBbx__WYlCPCh",
				SpamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				spamGroup: "_2WaHNFliLea9SKyF3nlBx8",
				FlairGroup: "_129dedXMiIcel_grUelwoG",
				flairGroup: "_129dedXMiIcel_grUelwoG",
				HideIfVWLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				hideIfVwLarger: "_1RO0TIeDG89QPdOWgZwUvR",
				ButtonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9",
				buttonTextWrapper: "_2xZQ73fYkUDMcVkB0PnaU9"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/constants.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.Flair = "FLAIR", e.Spam = "SPAM", e.Remove = "REMOVE", e.Approve = "APPROVE"
				}(o || (o = {}))
		},
		"./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "c", (function() {
				return x
			}));
			var o, n, r, i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/components/ModToolsFlatlist/breakpoints.m.less"),
				l = s.n(c),
				m = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				p = s.n(m);
			! function(e) {
				e.HideIfVWSmaller = "HideIfVWSmaller", e.HideIfVWLarger = "HideIfVWLarger"
			}(o || (o = {})),
			function(e) {
				e.Approve = "ApproveGroup", e.Remove = "RemoveGroup", e.Spam = "SpamGroup", e.Flair = "FlairGroup"
			}(n || (n = {})),
			function(e) {
				e.Classic = "ClassicVariant", e.Compact = "CompactVariant", e.Default = "DefaultVariant"
			}(r || (r = {}));
			const u = {
					[a.a.Approve]: n.Approve,
					[a.a.Remove]: n.Remove,
					[a.a.Spam]: n.Spam,
					[a.a.Flair]: n.Flair
				},
				b = {
					[d.g.Classic]: r.Classic,
					[d.g.Compact]: r.Compact,
					[d.g.Large]: r.Default,
					[d.g.Medium]: r.Default,
					[d.g.Search]: r.Default
				},
				h = e => {
					const t = u[e.flatlistItem],
						s = e.postLayout && b[e.postLayout],
						o = l.a[e.breakpointType],
						n = l.a[t],
						a = s ? l.a[s] : l.a[r.Default];
					return Object(i.a)(o, n, a)
				},
				x = e => {
					const t = e && b[e],
						s = t ? l.a[t] : l.a[r.Default];
					return Object(i.a)(s, p.a.ButtonTextWrapper, l.a.ButtonTextWrapper)
				}
		},
		"./src/reddit/components/ModToolsFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				container: "OccjSdFd6HkHhShRg6DOl",
				tooltip: "_2a9swcTo72vLia4mUm08Fk",
				ButtonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq",
				buttonTextWrapper: "_3kA8j4bWXyfQV-T-H2dkNq"
			}
		},
		"./src/reddit/components/ModToolsFlatlist/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return A
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				b = s("./src/reddit/components/ModModeReports/helpers.ts"),
				h = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				x = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				v = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				C = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				g = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				E = s("./src/reddit/selectors/activeModalId.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_ = s("./src/reddit/selectors/postFlair.ts"),
				j = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				w = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				I = s("./src/lib/constants/index.ts"),
				P = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				y = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx"),
				N = s("./src/reddit/hooks/useTracking.ts"),
				T = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				S = s("./src/reddit/components/ModToolsFlatlist/index.m.less"),
				M = s.n(S);
			const F = e => {
					let {
						className: t,
						textClassName: s,
						isOverlay: n,
						iconOnly: a,
						post: d
					} = e;
					const [c, u] = r.a.useState(!1), [b, h] = r.a.useState(!1), v = Object(N.a)(), O = Object(i.d)(), {
						isPrediction: C,
						resolvedOptionId: g,
						totalVoteCount: E
					} = d.pollData || {}, k = () => {
						u(!1), O(Object(l.S)(d.id, !1)), d.isRemoved && d.bannedBy === I.m ? v(Object(f.k)(d.id, "confirm_remove")) : v(Object(f.k)(d.id, "remove"))
					}, _ = ((e, t) => e ? t === I.m ? o.fbt._("Confirm removal", null, {
						hk: "1t5tKM"
					}) : o.fbt._("removed", null, {
						hk: "35ZTch"
					}) : o.fbt._("remove", null, {
						hk: "3LWMcS"
					}))(d.isRemoved, d.bannedBy), j = A("Remove", d.id, n), w = () => a && O(Object(m.h)({
						tooltipId: j
					})), S = r.a.useMemo(() => E ? 1 === E ? o.fbt._("Removing this post will cancel the 1 prediction that has already been made.", null, {
						hk: "hVYeT"
					}) : o.fbt._("Removing this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", E.toString())], {
						hk: "47oACN"
					}) : o.fbt._("Removing this post will cancel any predictions that have already been made.", null, {
						hk: "26cLeP"
					}), [E]);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.d, {
						className: t,
						textClassName: s,
						id: j,
						text: a ? void 0 : _,
						disabled: d.isRemoved && d.bannedBy !== I.m,
						onMouseEnter: w,
						onMouseLeave: w,
						onClick: () => {
							C ? g ? h(!0) : u(!0) : k()
						}
					}, r.a.createElement(T.a, {
						desc: a ? _ : void 0
					}), a && r.a.createElement(p.c, {
						className: M.a.tooltip,
						tooltipId: j,
						text: _
					})), b && r.a.createElement(y.a, {
						title: o.fbt._("This post can't be removed", null, {
							hk: "2GbryD"
						}),
						body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't remove the post.", null, {
							hk: "3wgNhQ"
						}),
						onClose: () => h(!b)
					}), c && r.a.createElement(P.a, {
						withOverlay: !0,
						modalText: S,
						actionText: o.fbt._("Remove", null, {
							hk: "2DXJl4"
						}),
						headerText: o.fbt._("Are you sure?", null, {
							hk: "3CJLRE"
						}),
						onConfirm: k,
						onOverlayClick: () => u(!c),
						toggleModal: () => u(!c)
					}))
				},
				A = function(e, t) {
					let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					return `ModToolsFlatlist-${e}${t}${s?"inOverlay":""}`
				},
				R = (e, t) => Object(w.b)({
					breakpointType: w.a.HideIfVWSmaller,
					flatlistItem: e,
					postLayout: t
				}),
				L = Object(i.b)(() => Object(a.c)({
					activeModalId: E.a,
					canEditFlair: (e, t) => {
						let {
							post: s
						} = t;
						return Object(_.a)(e, {
							postId: s.id
						})
					},
					moderatorPermissions: (e, t) => Object(k.m)(e, {
						postId: t.post.id
					})
				}), (e, t) => {
					let {
						post: s
					} = t;
					return {
						onApprovePost: () => e(Object(l.r)(s.id)),
						onOpenPostModModeDropdown: t => e(Object(m.h)({
							tooltipId: t
						})),
						onSpamPost: () => e(Object(l.S)(s.id, !0)),
						onFlairPost: t => () => e(Object(c.i)(t))
					}
				});
			t.a = L(e => {
				const {
					canEditFlair: t,
					className: s,
					isOverlay: a,
					layout: c,
					moderatorPermissions: l,
					modModeEnabled: E,
					onApprovePost: k,
					onFlairPost: _,
					onSpamPost: I,
					post: P,
					sendEvent: y,
					showIconsOnly: N
				} = e, T = Object(i.d)(), S = Object(v.a)(l), L = Object(b.b)(P), D = !(!P.approvedBy || !L), B = Object(h.b)(P.id, a), W = S && E && !P.isSponsored, U = t && E, G = ((e, t) => e ? o.fbt._("reapprove", null, {
					hk: "OJvB1"
				}) : t ? o.fbt._("approved", null, {
					hk: "2bWAFI"
				}) : o.fbt._("approve", null, {
					hk: "2DIHcM"
				}))(D, P.approvedBy), V = (e => e ? o.fbt._("spammed", null, {
					hk: "3GPrkZ"
				}) : o.fbt._("spam", null, {
					hk: "3ebJLg"
				}))(P.isSpam), H = A("Approve", P.id, a), q = A("Spam", P.id, a), J = () => N && T(Object(m.h)({
					tooltipId: H
				})), K = () => N && T(Object(m.h)({
					tooltipId: q
				})), Q = a ? void 0 : c;
				return r.a.createElement("div", {
					className: Object(d.a)(M.a.container, s)
				}, W && r.a.createElement(n.Fragment, null, r.a.createElement(x.b, {
					className: R(j.a.Approve, Q),
					key: "approveButton",
					text: N ? void 0 : G,
					textClassName: Object(w.c)(Q),
					disabled: !!P.approvedBy && !L,
					id: H,
					onMouseEnter: J,
					onMouseLeave: J,
					onClick: () => {
						k(), y(Object(f.k)(P.id, "approve"))
					}
				}, r.a.createElement(O.a, {
					desc: N ? G : void 0
				}), N && r.a.createElement(p.c, {
					className: M.a.tooltip,
					tooltipId: H,
					text: G
				})), r.a.createElement(F, {
					className: R(j.a.Remove, Q),
					textClassName: Object(w.c)(Q),
					isOverlay: a,
					iconOnly: N,
					post: P
				}), r.a.createElement(x.d, {
					className: R(j.a.Spam, Q),
					key: "removeSpamButton",
					text: N ? void 0 : V,
					textClassName: Object(w.c)(Q),
					disabled: P.isSpam,
					id: q,
					onMouseEnter: K,
					onMouseLeave: K,
					onClick: () => {
						I(), y(Object(f.k)(P.id, "spam"))
					}
				}, r.a.createElement(C.a, {
					desc: N ? V : void 0
				}), N && r.a.createElement(p.c, {
					className: M.a.tooltip,
					tooltipId: q,
					text: V
				}))), U && r.a.createElement(x.c, {
					className: R(j.a.Flair, Q),
					key: "tagButton",
					onClick: () => {
						_(B)(), y(Object(f.k)(P.id, "post_flair_picker"))
					}
				}, r.a.createElement(g.a, null)), r.a.createElement(u.f, null))
			})
		},
		"./src/reddit/components/ModalStyledComponents/MessageBox.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

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
						title: t,
						body: s,
						actionText: n = o.fbt._("OK", null, {
							hk: "1eo6HO"
						}),
						onClose: i
					} = e;
					return r.a.createElement(a.e, null, r.a.createElement(a.i, null, r.a.createElement(c.a, null, r.a.createElement(a.q, null, t), r.a.createElement(d.a, {
						onClick: i
					}, r.a.createElement(a.b, null)))), r.a.createElement(a.l, null, r.a.createElement(a.p, null, s)), r.a.createElement(a.g, null, r.a.createElement(a.u, {
						"data-redditstyle": !0,
						onClick: i
					}, n)))
				}),
				p = e => r.a.createElement(m, l({
					withOverlay: !0,
					onOverlayClick: e.onClose
				}, e))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				d = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var m = n.a.memo(e => {
					const t = Object(o.useRef)(null),
						s = Object(l.a)(),
						r = Object(o.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: o
								} = t;
								o >= .5 && s(d.d(e.postId))
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
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/objectSelector/index.ts"),
				O = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				C = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				k = s.n(E);
			const _ = Object(u.a)(() => Object(r.c)({
					basePixelMetadata: Object(f.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
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
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(x.d)(e).pageType
				})),
				j = "post-container";
			class w extends n.a.Component {
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
						onClick: p,
						pageType: u,
						sendEvent: h,
						style: x,
						ref: f,
						shouldAddGalleryViewability: O = !0
					} = this.props, C = n.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: x,
						ref: f,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => p && p(s, l, t, r, u))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(d.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(v.a)(k.a.WrappedPost, o, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": j,
						id: c ? c(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": g.a.BACKGROUND
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.G)(l.media) && O ? n.a.createElement(m, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? n.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(C))
				}
			}
			t.b = _(Object(C.a)(Object(O.a)(Object(p.c)(w))))
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
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/helpers/trackers/postCollection.ts"),
				p = s("./src/reddit/components/PostFollow/index.m.less"),
				u = s.n(p);
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
						n(e ? Object(m.o)({
							postId: s,
							isFollowed: r
						}) : Object(m.g)({
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
						className: Object(d.a)(u.a.collectionFollow, {
							[u.a.isFollowed]: !!s.isFollowed,
							[u.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(c.z)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(o.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/PostModModeDropdown/_PostModModeDropdown.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/PostOverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "_1EbinKu2t3KjaT2gR156Qp",
				DropdownRow: "_1muOrgIRB6t41qDocDiXul",
				dropdownRow: "_1muOrgIRB6t41qDocDiXul",
				disabledRow: "_2Odc33_zXVGMHX8Um_2eO7",
				muteSubreddit: "_2Y6YEgvUcx5Ic2juj3VU95",
				HideIcon: "_3CksthIwbeJIolp7OYeQYv",
				hideIcon: "_3CksthIwbeJIolp7OYeQYv",
				Icon: "_2V4nGS1AmzWhA62lzdCu4r",
				icon: "_2V4nGS1AmzWhA62lzdCu4r"
			}
		},
		"./src/reddit/components/PostOverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return Ee
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/telemetry/index.ts"),
				l = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				m = s("./src/config.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/actions/eventPosts/index.ts"),
				h = s("./src/reddit/actions/gold/modals.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				v = s("./src/reddit/actions/pinnedPost.ts"),
				f = s("./src/reddit/actions/post.ts"),
				O = s("./src/reddit/actions/postCreation/editing.ts"),
				C = s("./src/reddit/actions/reportFlow/index.ts"),
				g = s("./src/reddit/constants/oneFeed.ts"),
				E = s("./src/reddit/constants/posts.ts"),
				k = s("./src/reddit/hooks/useRecommendationPostContext.ts");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e) {
					function t(t) {
						const s = Object(k.a)();
						return r.createElement(e, _({}, t, {
							recommendationPostContext: s
						}))
					}
					const s = e.displayName || e.name || "Component";
					return t.displayName = `withRecommendationPostContext(${s})`, t
				},
				w = s("./src/reddit/helpers/trackers/scheduledPosts.ts"),
				I = s("./src/reddit/icons/fonts/index.tsx"),
				P = s("./src/reddit/components/CreatorStats/Icon.tsx"),
				y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				N = s("./src/reddit/components/ReportFlow/index.tsx"),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				M = s("./src/reddit/controls/Dropdown/Row.tsx"),
				F = s("./src/reddit/components/ModToolsFlatlist/constants.ts"),
				A = s("./src/reddit/components/ModToolsFlatlist/getModItemBreakpoints.ts"),
				R = s("./src/reddit/components/Flatlist/constants.ts"),
				L = s("./src/reddit/components/Flatlist/getFlatlistBreakpoints.ts"),
				D = s("./src/reddit/constants/postLayout.ts"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				W = s("./src/reddit/helpers/isCrosspost.ts"),
				U = s("./src/reddit/helpers/media/index.ts"),
				G = s("./src/reddit/helpers/postEvent.ts"),
				V = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/helpers/trackers/react.ts"),
				q = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				J = s("./src/reddit/models/Subreddit/index.ts"),
				K = s("./src/reddit/selectors/experiments/videoReactions.ts"),
				Q = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				z = s("./src/reddit/selectors/subreddit.ts"),
				X = s("./src/reddit/selectors/user.ts"),
				Z = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				$ = s("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				ee = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				te = s("./src/reddit/components/ReportFlow/new.tsx"),
				se = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				oe = s("./src/reddit/selectors/experiments/reportAd.ts"),
				ne = s("./src/reddit/actions/postCollection/index.ts"),
				re = s("./src/reddit/contexts/Post/index.tsx"),
				ie = s("./src/reddit/helpers/trackers/postCollection.ts"),
				ae = s("./src/reddit/models/PostCreationForm/index.ts"),
				de = s("./src/reddit/selectors/postCollection.ts"),
				ce = s("./node_modules/react-router/esm/react-router.js"),
				le = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				me = s("./src/reddit/components/ModalStyledComponents/MessageBox.tsx");
			const pe = Object(ce.i)(e => {
				let {
					post: t,
					toggleConfirmDelete: s,
					handleDeletePost: n,
					location: r
				} = e;
				const {
					isPrediction: a,
					resolvedOptionId: d,
					totalVoteCount: c
				} = t.pollData || {}, l = a ? o.fbt._("Are you sure?", null, {
					hk: "2mIMwE"
				}) : o.fbt._("Delete post?", null, {
					hk: "3g7QoX"
				}), m = i.a.useMemo(() => {
					const e = c || 0;
					return a ? 0 === e ? o.fbt._("Deleting this post will cancel any predictions that have been made.", null, {
						hk: "1OCTd3"
					}) : 1 === e ? o.fbt._("Deleting this post will cancel the 1 prediction that have already been made.", null, {
						hk: "1MnrUP"
					}) : o.fbt._("Deleting this post will cancel the {votedUsersCount} predictions that have already been made.", [o.fbt._param("votedUsersCount", e.toString())], {
						hk: "1jBXxs"
					}) : o.fbt._("Are you sure you want to delete your post? You can't undo this.", null, {
						hk: "2eDKWP"
					})
				}, [a, c]), p = a ? o.fbt._("Delete", null, {
					hk: "3NNdm0"
				}) : o.fbt._("Delete post", null, {
					hk: "28hc1p"
				});
				return a && d ? i.a.createElement(me.a, {
					title: o.fbt._("This post can't be deleted", null, {
						hk: "1sZ013"
					}),
					body: o.fbt._("Sorry about that. Once a prediction has been resolved, you can't delete the post.", null, {
						hk: "32l6dr"
					}),
					onClose: s
				}) : i.a.createElement(le.a, {
					withOverlay: !0,
					toggleModal: s,
					onConfirm: () => n(r),
					onOverlayClick: s,
					actionText: p,
					headerText: l,
					modalText: m
				})
			});
			var ue = s("./src/reddit/actions/subreddit/muting.ts"),
				be = s("./src/reddit/helpers/trackers/subredditMuting.ts"),
				he = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				xe = s("./src/devPlatform/constants.ts"),
				ve = s("./src/reddit/selectors/experiments/eventPosts.ts"),
				fe = s("./src/reddit/components/PostOverflowMenu/index.m.less"),
				Oe = s.n(fe);
			const Ce = u.a.wrapped(M.b, "DropdownRow", Oe.a),
				ge = Object(l.a)(),
				Ee = e => {
					let {
						gild: t = !0,
						save: s = !0,
						share: o = !0,
						report: n = !0,
						editPost: r = !0,
						hide: i = !0,
						insights: a = !0,
						mute: d = !0
					} = e;
					return {
						[R.a.Gild]: t,
						[R.a.Save]: s,
						[R.a.Share]: o,
						[R.a.Report]: n,
						[R.a.EditPost]: r,
						[R.a.Hide]: i,
						[R.a.Insights]: a,
						[R.a.Mute]: d
					}
				},
				ke = Object(a.b)(() => Object(d.c)({
					claimedFreeAward: Q.b,
					isFutureEvent: de.i,
					isPinned: Y.q,
					isAllowReactionsKillswitchEnabled: K.a,
					subredditAboutInfo: Y.H,
					reportFlowIsOpen: (e, t) => {
						let {
							isOverlay: s,
							postId: o
						} = t;
						var n, r, i, a;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === r ? void 0 : r.openedFromModalPage) === s && (null === (a = null === (i = e.features) || void 0 === i ? void 0 : i.reportFlow) || void 0 === a ? void 0 : a.postOrCommentId) === o
					},
					showPinAction: (e, t) => {
						let {
							isProfilePostListing: s,
							userIsOp: o,
							post: n,
							pageLayer: r
						} = t;
						return Object(T.G)(e, {
							pageLayer: r
						}) && s && o && Object(X.Db)(e, {
							userName: n.author
						})
					},
					hasSubredditRules: z.j,
					isPostPartOfACollection: de.k,
					shouldRenderCollectionEditButtons: (e, t) => {
						let {
							post: s,
							subredditOrProfile: o
						} = t;
						if (s.isSponsored) return !1;
						if (!o) return !1;
						const n = o.type === J.g.User;
						return Object(de.r)(e, o.name, n)
					},
					reportingRevampEnabled: Z.a,
					subredditName: (e, t) => {
						let {
							post: s
						} = t;
						return Object(z.i)(e, s)
					},
					isCommunityMutingEnabled: se.a,
					isReportAnAdEnabled: oe.a,
					isEventPostUiHidden: ve.a
				}), (e, t) => {
					let {
						postId: s,
						isOverlay: o,
						isCommentsPage: n
					} = t;
					return {
						onCopyLink: t => e(Object(f.C)(t)),
						onDelete: t => e(Object(f.L)(s, t, o)),
						onDistinguishPost: t => e(Object(f.u)(s, t)),
						onGildClick: (t, o) => e(Object(h.d)({
							awardId: o,
							correlationId: t,
							thingId: s
						})),
						onToggleSave: () => e(Object(f.T)(s)),
						onToggleNSFW: () => e(Object(f.F)(s)),
						onToggleOC: () => e(Object(f.I)(s)),
						onTogglePinned: () => e(Object(v.i)(s)),
						onToggleSpoiler: () => e(Object(f.cb)(s)),
						onHide: (t, n) => e(Object(f.db)(s, !t, o, !n)),
						onReportClick: () => e(Object(C.c)(s, o)),
						onStartEventNow: () => {
							e((e, t) => Object(c.a)(Object(w.l)()(t()))), e(Object(b.startEventNowRequested)(s))
						},
						onEdit: () => {
							const t = !o && !n;
							e(Object(O.a)(s, t))
						},
						onFlairPost: () => e(Object(x.i)(Object(ee.b)(s, o))),
						onToggleSendReplies: () => e(Object(f.U)(s)),
						onToggleReactAllowed: () => e(Object(f.R)(s)),
						showCollectionsList: (t, s) => {
							e(Object(ne.e)(t)).then(() => {
								const t = Object(ae.t)(s, o);
								e(x.i(t))
							})
						},
						onMuteClick: (t, s) => e(Object(ue.c)({
							subredditId: t,
							subredditName: s
						}))
					}
				});
			class _e extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						isConfirmDeleteOpen: !1,
						showMuteSubredditModal: !1
					}, this.handlePostEvent = (e, t) => {
						const {
							isOverlay: s,
							post: o,
							sendEvent: n
						} = this.props;
						n(Object(V.k)(o.id, e, s ? "post_detail" : "post", void 0, void 0, void 0, null == t ? void 0 : t.referralId))
					}, this.handleClickMenuButton = () => {
						this.handlePostEvent("post_overflow_menu")
					}, this.handleDeletePost = e => {
						e && (this.props.onDelete(e), this.handlePostEvent("delete"))
					}, this.handleEdit = () => {
						this.handlePostEvent("edit"), this.props.onEdit()
					}, this.handleGild = async () => {
						var e;
						const t = Object(B.d)(B.a.GildingFlow, !0);
						this.props.onGildClick(t, null === (e = this.props.claimedFreeAward) || void 0 === e ? void 0 : e.id);
						const {
							clickGildEvent: o
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(o(this.props.postId))
					}, this.onShowFewerOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(V.n)(e)), t(g.a.SeeFewerPostsView)
					}, this.onShowMoreOfClick = () => {
						const {
							postId: e,
							recommendationPostContext: {
								setRecommendationFooterView: t
							},
							sendEvent: s
						} = this.props;
						s(Object(V.o)(e)), t(g.a.ThankYouView)
					}, this.handleMuteModal = () => {
						this.setState(e => ({
							showMuteSubredditModal: !e.showMuteSubredditModal
						}))
					}, this.toggleHide = () => {
						const e = this.props.post.hidden ? "unhide" : "hide";
						this.props.isCommunityMutingEnabled || this.handlePostEvent(e), this.props.onHide(!!this.props.post.hidden, this.props.isCommunityMutingEnabled)
					}, this.toggleSave = () => {
						const e = this.props.post.saved ? "unsave" : "save";
						this.handlePostEvent(e), this.props.onToggleSave()
					}, this.handleReport = () => {
						this.handlePostEvent("report"), this.props.onReportClick()
					}, this.toggleOC = () => {
						this.handlePostEvent(this.props.post.isOriginalContent ? "unmark_original_content" : "mark_original_content"), this.props.onToggleOC()
					}, this.togglePinned = () => {
						this.handlePostEvent(this.props.isPinned ? "unpin" : "pin"), this.props.isPinned ? this.props.sendEvent(Object(V.r)(this.props.post.id)) : this.props.sendEvent(Object(V.h)(this.props.post.id)), this.props.onTogglePinned()
					}, this.toggleSpoiler = () => {
						this.handlePostEvent(this.props.post.isSpoiler ? "unmark_spoiler" : "mark_spoiler"), this.props.onToggleSpoiler()
					}, this.toggleNSFW = () => {
						this.handlePostEvent(this.props.post.isNSFW ? "unmark_nsfw" : "mark_nsfw"), this.props.onToggleNSFW()
					}, this.toggleDeleteConfirmation = () => {
						this.setState({
							isConfirmDeleteOpen: !this.state.isConfirmDeleteOpen
						})
					}, this.getBreakpointClass = e => {
						const {
							props: t
						} = this;
						if (!t.ignoreBreakpoints && t.useFlatlistBreakpoints[e]) return Object(L.b)({
							breakpointType: L.a.HideIfVWLarger,
							flatlistItem: e,
							isLoggedIn: !!t.currentUser,
							isUserOp: t.userIsOp
						})
					}, this.getBreakpointCx = (e, t) => Object(A.b)({
						breakpointType: L.a.HideIfVWLarger,
						flatlistItem: e,
						postLayout: t
					}), this.handleAddToCollection = () => {
						const {
							isPostPartOfACollection: e,
							showCollectionsList: t,
							post: s,
							sendEvent: o
						} = this.props;
						e || (o(Object(ie.b)(s.id)), t(s.belongsTo.id, s.id))
					}, this.onCloseShareModal = e => {
						e && (this.handlePostEvent("copy_link", {
							referralId: ge
						}), this.props.onCopyLink(e))
					}, this.renderReportFlow = () => this.props.reportingRevampEnabled ? i.a.createElement(te.a, {
						withOverlay: !0,
						overlayCustomStyles: N.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					}) : i.a.createElement(N.a, {
						withOverlay: !0,
						overlayCustomStyles: N.b,
						postId: this.props.postId,
						timestamp: this.context.currentTime
					})
				}
				getOverflowMenuBreakpointClass() {
					const {
						currentUser: e,
						ignoreBreakpoints: t,
						ignoreOverflowMenuBreakpoints: s,
						isCommentsPage: o,
						isRecommendationPost: n,
						layout: r,
						modModeWithPost: i,
						recommendationPostContext: {
							hideRecommendationContext: a
						},
						userIsOp: d
					} = this.props, c = r === D.g.Classic;
					if (!(t || s || i || d || !o && !c || n && !a)) return Object(L.b)({
						breakpointType: L.a.HideIfVWLarger,
						flatlistItem: R.a.PostOverflowMenu,
						isLoggedIn: !!e,
						isUserOp: d
					})
				}
				renderDropdownIcons() {
					var e;
					const {
						props: t
					} = this, {
						currentUser: s,
						isFutureEvent: r,
						isOverlay: a,
						isPinned: d,
						isRecommendationPost: c,
						layout: l,
						onClickInsightsButton: u,
						onStartEventNow: b,
						post: h,
						recommendationPostContext: {
							hideRecommendationContext: x
						},
						shouldRenderCollectionEditButtons: v,
						shouldShowInsightsButton: f,
						showEditFlair: O,
						showPinAction: C,
						toggleAddEventStartTimeModal: g,
						toggleEditStartTimeModal: k,
						userIsOp: _,
						isCommunityMutingEnabled: j,
						subredditName: w,
						pageLayer: y,
						isReportAnAdEnabled: N,
						isEventPostUiHidden: T
					} = t, M = t.currentUser && t.currentUser.isEmployee, A = Object(W.a)(t.post), L = t.post.belongsTo.type === E.a.PROFILE || Object(J.h)(t.subredditAboutInfo), D = t.post.belongsTo.type === E.a.PROFILE || Object(J.j)(t.subredditAboutInfo), B = s && h.isGildable, V = Object(G.a)(t.post), K = a ? void 0 : l, Q = "popular" === (null == y ? void 0 : y.urlParams.subredditName), Y = "Frontpage" === (null === (e = null == y ? void 0 : y.routeMatch) || void 0 === e ? void 0 : e.route.chunk), z = j && !c && w && (Q || Y);
					return i.a.createElement("div", null, f && i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Insights),
						displayText: o.fbt._("Insights", null, {
							hk: "t7dpi"
						}),
						onClick: u
					}, i.a.createElement(P.a, {
						postCreated: h.created,
						subredditId: h.belongsTo.id
					})), B && i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Gild),
						displayText: o.fbt._("Give Award", null, {
							hk: "3mYeGJ"
						}),
						onClick: this.handleGild
					}, i.a.createElement(I.a, {
						name: "award",
						className: Oe.a.Icon
					})), c && !x && i.a.createElement(i.a.Fragment, null, i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.ShowMoreLikeThis),
						displayText: o.fbt._("Show more posts like this", null, {
							hk: "2t0WMg"
						}),
						onClick: this.onShowMoreOfClick
					}, i.a.createElement(I.a, {
						name: "checkmark",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.ShowFewerLikeThis),
						displayText: o.fbt._("Show fewer posts like this", null, {
							hk: "k9sBL"
						}),
						onClick: this.onShowFewerOfClick
					}, i.a.createElement(I.a, {
						name: "hide",
						className: Oe.a.Icon
					}))), i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Share),
						displayText: o.fbt._("Copy link", null, {
							hk: "ETZxA"
						}),
						onClick: () => {
							const {
								permalink: e
							} = t;
							this.handlePostEvent("share_copy"), t.onCopyLink(e)
						}
					}, i.a.createElement(I.a, {
						name: "link_post",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Share),
						displayText: o.fbt._("Embed", null, {
							hk: "3u0v6r"
						}),
						onClick: () => {
							this.handlePostEvent("share_embed"), window.open(`${m.a.rebedMediaUrl}/embed?url=${t.post.permalink}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, i.a.createElement(I.a, {
						name: "embed",
						className: Oe.a.Icon
					})), t.showEditPost && !Object(q.b)(this.props.post) && i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.EditPost),
						displayText: o.fbt._("Edit post", null, {
							hk: "3gVzz0"
						}),
						onClick: this.handleEdit,
						isSelected: t.post.hidden
					}, i.a.createElement(I.a, {
						name: "edit",
						className: Oe.a.Icon
					})), O && i.a.createElement(Ce, {
						className: this.getBreakpointCx(F.a.Flair, K),
						displayText: o.fbt._("Edit Post Flair", null, {
							hk: "1pGISD"
						}),
						onClick: t.onFlairPost,
						isSelected: t.post.hidden
					}, i.a.createElement(I.a, {
						name: "tag",
						className: Oe.a.Icon
					})), i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Save),
						displayText: t.post.saved ? o.fbt._("unsave", null, {
							hk: "HDDPm"
						}) : o.fbt._("save", null, {
							hk: "3bg2gs"
						}),
						onClick: this.toggleSave,
						isSelected: t.post.saved
					}, i.a.createElement(I.a, {
						name: t.post.saved ? "saved" : "save",
						className: Oe.a.Icon
					})), C && i.a.createElement(Ce, {
						displayText: d ? o.fbt._("Unpin Post from Profile", null, {
							hk: "6DYfk"
						}) : o.fbt._("Pin Post to Profile", null, {
							hk: "2RWbNF"
						}),
						onClick: this.togglePinned
					}, i.a.createElement(I.a, {
						name: "pin",
						className: Oe.a.Icon,
						isFilled: this.props.isPinned
					})), z && i.a.createElement(Ce, {
						className: Object(p.a)(Oe.a.muteSubreddit, this.getBreakpointClass(R.a.Mute)),
						displayText: o.fbt._("Mute {name of subreddit to mute}", [o.fbt._param("name of subreddit to mute", `r/${w}`)], {
							hk: "1Jw2VW"
						}),
						onClick: this.handleMuteModal
					}, i.a.createElement(I.a, {
						name: "volume_mute",
						className: Oe.a.Icon
					})), !t.post.isSponsored && i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Hide),
						displayText: t.post.hidden ? o.fbt._("unhide", null, {
							hk: "1P4IxC"
						}) : o.fbt._("hide", null, {
							hk: "48yKzW"
						}),
						onClick: this.toggleHide,
						isSelected: t.post.hidden
					}, i.a.createElement(I.a, {
						name: "hide",
						className: Oe.a.HideIcon
					})), (!t.post.isSponsored || N) && !_ && i.a.createElement(Ce, {
						className: this.getBreakpointClass(R.a.Report),
						displayText: o.fbt._("report", null, {
							hk: "128RPn"
						}),
						onClick: this.handleReport
					}, i.a.createElement(I.a, {
						name: "report",
						className: Oe.a.Icon
					})), v && r && b && !T && i.a.createElement(Ce, {
						onClick: b,
						displayText: o.fbt._("Start event now", null, {
							hk: "3VomTN"
						})
					}, i.a.createElement(I.a, {
						name: "live",
						className: Oe.a.Icon
					})), v && r && k && !T && i.a.createElement(Ce, {
						onClick: k,
						displayText: o.fbt._("Edit start time", null, {
							hk: "2typ17"
						})
					}, i.a.createElement(I.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), v && !V && g && !T && i.a.createElement(Ce, {
						displayText: o.fbt._("Add event start time", null, {
							hk: "1XXqzu"
						}),
						onClick: g
					}, i.a.createElement(I.a, {
						name: "scheduled",
						className: Oe.a.Icon
					})), v && i.a.createElement(Ce, {
						className: this.props.isPostPartOfACollection ? Oe.a.disabledRow : void 0,
						displayText: o.fbt._("Add to collection", null, {
							hk: "3UNHgN"
						}),
						onClick: this.handleAddToCollection,
						noHover: this.props.isPostPartOfACollection
					}, i.a.createElement(I.a, {
						name: "collection",
						className: Oe.a.Icon
					})), _ && i.a.createElement(Ce, {
						displayText: o.fbt._("delete", null, {
							hk: "4kSfzC"
						}),
						onClick: this.toggleDeleteConfirmation
					}, i.a.createElement(I.a, {
						name: "delete",
						className: Oe.a.Icon
					})), M && t.userIsOp && i.a.createElement(Ce, {
						displayText: t.post.distinguishType === n.J.ADMIN ? o.fbt._("undistinguish", null, {
							hk: "2chGON"
						}) : o.fbt._("Distinguish as admin", null, {
							hk: "2xltiM"
						}),
						onClick: () => t.post.distinguishType === n.J.ADMIN ? t.onDistinguishPost(n.J.NONE) : t.onDistinguishPost(n.J.ADMIN)
					}, i.a.createElement(I.a, {
						name: "admin",
						className: Oe.a.Icon
					})), _ && L && !A && i.a.createElement(S.a, {
						text: o.fbt._("Mark as OC", null, {
							hk: "2vGyoC"
						}),
						onClick: this.toggleOC,
						isSelected: this.props.post.isOriginalContent
					}), _ && D && i.a.createElement(S.a, {
						text: o.fbt._("Mark as Spoiler", null, {
							hk: "3PJk7A"
						}),
						onClick: this.toggleSpoiler,
						isSelected: this.props.post.isSpoiler
					}), _ && i.a.createElement(S.a, {
						text: o.fbt._("Mark as NSFW", null, {
							hk: "4qK6JN"
						}),
						onClick: this.toggleNSFW,
						isSelected: this.props.post.isNSFW
					}), _ && h.domain === U.a && !this.props.isAllowReactionsKillswitchEnabled && i.a.createElement(S.a, {
						text: o.fbt._("Allow video threads", null, {
							hk: "DJXlU"
						}),
						onClick: () => {
							var e;
							t.onToggleReactAllowed(), this.props.sendEvent(Object(H.a)({
								subredditId: null === (e = this.props.subredditOrProfile) || void 0 === e ? void 0 : e.id,
								postId: this.props.postId,
								reactionsEnabled: this.props.post.isReactAllowed
							}))
						},
						isSelected: this.props.post.isReactAllowed
					}), t.userIsOp && i.a.createElement(S.a, {
						text: o.fbt._("Send me reply notifications", null, {
							hk: "6AmTA"
						}),
						onClick: t.onToggleSendReplies,
						isSelected: this.props.post.sendReplies
					}), i.a.createElement(he.a, {
						contextType: xe.a.POST,
						contextData: h
					}))
				}
				render() {
					var e;
					const {
						props: t
					} = this, {
						subredditName: s,
						post: n,
						pageLayer: r
					} = t, a = n.belongsTo.id, d = "popular" === (null == r ? void 0 : r.urlParams.subredditName), c = "Frontpage" === (null === (e = null == r ? void 0 : r.routeMatch) || void 0 === e ? void 0 : e.route.chunk);
					return i.a.createElement("div", null, i.a.createElement(y.b, {
						className: Object(p.a)(Oe.a.overflowMenu, this.getOverflowMenuBreakpointClass(), t.className),
						dropdownId: t.dropdownId,
						isFixed: t.isFixed,
						layout: t.layout,
						onClick: this.handleClickMenuButton
					}, this.renderDropdownIcons()), t.reportFlowIsOpen && t.subredditOrProfile && t.hasSubredditRules && this.renderReportFlow(), this.state.isConfirmDeleteOpen && i.a.createElement(pe, {
						post: this.props.post,
						toggleConfirmDelete: this.toggleDeleteConfirmation,
						handleDeletePost: this.handleDeletePost
					}), this.state.showMuteSubredditModal && i.a.createElement($.a, {
						headerText: o.fbt._("Mute {name of subreddit to mute}", [o.fbt._param("name of subreddit to mute", `r/${s}`)], {
							hk: "4eAU3R"
						}),
						modalBody: o.fbt._("You won't see posts from {name of subreddit to mute} in your feeds or recommmendations anymore.", [o.fbt._param("name of subreddit to mute", `r/${s}`)], {
							hk: "1JNA6G"
						}),
						toggleModal: this.handleMuteModal,
						actionText: o.fbt._("YES, MUTE", null, {
							hk: "1eAO8C"
						}),
						cancelActionText: o.fbt._("CANCEL", null, {
							hk: "If1yt"
						}),
						onConfirm: () => {
							this.handleMuteModal(), t.onMuteClick(a, s), this.toggleHide(), c && this.props.sendEvent(Object(be.b)()), d && this.props.sendEvent(Object(be.c)())
						},
						withOverlay: !0
					}))
				}
			}
			t.a = j(Object(re.e)(ke(_e)))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = a
		},
		"./src/reddit/components/ShareMenu/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/ShareMenu/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/config.ts"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/reddit/actions/chat/toggle.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/constants/tracking.ts"),
				x = s("./src/reddit/selectors/telemetry.ts");
			var v = s("./src/reddit/hooks/useTracking.ts"),
				f = s("./src/reddit/icons/fonts/index.tsx"),
				O = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/routes/postCreation/constants.ts"),
				g = s("./src/reddit/selectors/experiments/chat.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				k = s("./src/reddit/components/ShareMenu/index.m.less"),
				_ = s.n(k);
			const j = Object(p.a)(u.a),
				w = e => {
					let {
						permalink: t,
						onShare: s
					} = e;
					return r.a.createElement(b.b, {
						id: "shareToChat",
						className: _.a.dropdownRow,
						displayText: o.fbt._("share to chat", null, {
							hk: "3EuIWT"
						}),
						onClick: () => {
							const e = Object(d.a)(t, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							s(e)
						}
					}, r.a.createElement(f.a, {
						name: "chat",
						className: _.a.chatIcon
					}))
				},
				I = e => {
					let {
						permalink: t,
						sendEventWithName: s
					} = e;
					return r.a.createElement(b.b, {
						className: _.a.dropdownRow,
						displayText: o.fbt._("Embed", null, {
							hk: "2CcsuC"
						}),
						onClick: () => {
							s("share_embed"), window.open(`${a.a.rebedMediaUrl}/embed?url=${t}`, "RedditEmbed", "height=500,width=650,modal=yes,alwaysRaised=yes")
						}
					}, r.a.createElement(f.a, {
						name: "embed",
						className: _.a.embedIcon
					}))
				},
				P = e => {
					let {
						onCrosspost: t
					} = e;
					return r.a.createElement(b.b, {
						className: _.a.dropdownRow,
						displayText: o.fbt._("crosspost", null, {
							hk: "23zSN6"
						}),
						onClick: t
					}, r.a.createElement(f.a, {
						name: "crosspost",
						className: _.a.crosspostIcon
					}))
				},
				y = r.a.memo(e => {
					const t = Object(i.d)(),
						s = Object(v.a)(),
						a = Object(i.e)(t => Object(E.b)(e.dropdownId)(t)),
						p = Object(i.e)(g.i),
						u = Object(n.useCallback)(() => {
							t(Object(m.h)({
								tooltipId: e.dropdownId
							}))
						}, [t, e.dropdownId]),
						k = !e.subredditType || e.subredditType === O.g.Public,
						y = !!e.post && e.post.isCrosspostable && !e.post.isSponsored,
						N = !p,
						T = Object(n.useCallback)(e => {
							t(Object(c.e)(e)), s((() => e => ({
								...Object(x.o)(e),
								source: "post",
								action: h.c.CLICK,
								noun: "share_chat",
								subreddit: Object(x.lb)(e)
							}))())
						}, [t, s]);
					return r.a.createElement("div", {
						className: e.className,
						onClick: u,
						id: e.dropdownId
					}, e.children, r.a.createElement(j, {
						className: _.a.dropdown,
						isOpen: a,
						tooltipId: e.dropdownId
					}, r.a.createElement(b.b, {
						className: _.a.dropdownRow,
						displayText: o.fbt._("Copy link", null, {
							hk: "1tCqox"
						}),
						onClick: () => {
							const {
								permalink: s
							} = e, o = Object(d.a)(s, {
								utm_source: "share",
								utm_medium: "web2x",
								context: 3
							});
							e.sendEventWithName("share_copy"), (e => t(Object(l.C)(e)))(o)
						}
					}, r.a.createElement(f.a, {
						name: "link_post",
						className: _.a.linkIcon
					})), y && r.a.createElement(P, {
						onCrosspost: () => {
							e.sendEventWithName("share_crosspost"), e.post && window.open(`${C.b}?source_id=${e.post.id}`, "_blank")
						}
					}), k && r.a.createElement(I, {
						permalink: e.permalink,
						sendEventWithName: e.sendEventWithName
					}), N && r.a.createElement(w, {
						permalink: e.permalink,
						onShare: T
					})))
				});
			t.a = y
		},
		"./src/reddit/components/ViewReportsDropdown/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-ViewReportsDropdown-index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-ViewReportsDropdown-index").then(s.bind(null, "./src/reddit/components/ViewReportsDropdown/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ViewReportsDropdown/index.tsx"
				}
			})
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
				d = s.n(a);
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
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/CheckboxMenuItem/index.m.less": function(e, t, s) {
			e.exports = {
				checkboxIcon: "_3Ebr0mkLD0A7HiowzExNW-",
				checkboxMenuItem: "_2eawLPCtwzvTZhWKtaUgZQ",
				expandRight: "_34Odk7t6y-rCPxPcYJa4Nw",
				postCheckboxMenuItem: "_3LyKu57c-QkPvlFvAgWop5"
			}
		},
		"./src/reddit/controls/CheckboxMenuItem/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = s("./src/reddit/controls/CheckboxMenuItem/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const m = e => n.a.createElement("div", {
					className: Object(r.a)(c.a.checkboxMenuItem, e.className),
					onClick: e.onClick
				}, n.a.createElement(a.a, {
					className: c.a.expandRight
				}, n.a.createElement(i.a, {
					name: "checkbox",
					isFilled: e.isSelected,
					className: c.a.checkboxIcon
				}), e.text)),
				p = e => {
					let {
						className: t,
						...s
					} = e;
					return n.a.createElement(m, l({
						className: Object(r.a)(c.a.postCheckboxMenuItem, t)
					}, s))
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
		"./src/reddit/helpers/hasModPostPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.posts
		},
		"./src/reddit/helpers/trackers/freeAwardOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			}));
			var o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				n = s("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => ({
					...Object(n.h)(e, {
						offerContext: r.a.StorefrontFreeAward
					}),
					correlationId: Object(o.d)(o.a.GoldPayment, !1),
					profile: i.T(e),
					subreddit: i.lb(e)
				}),
				d = () => e => ({
					source: "free_award_offer",
					action: "view",
					noun: "page",
					...a(e)
				}),
				c = e => t => ({
					source: "free_award_offer",
					action: "click",
					noun: e,
					...a(t)
				}),
				l = () => e => ({
					source: "tooltip",
					action: "view",
					noun: "try_free_award",
					...a(e)
				})
		},
		"./src/reddit/icons/fonts/Comment/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

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
				return n.a.createElement("i", c({
					className: Object(r.a)(Object(i.b)("comment", s.isFilled), d.a.commentIcon, t)
				}, s))
			}
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), d.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/ModActions/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("i", c({}, e, {
				className: Object(r.a)(Object(i.b)("mod", e.isFilled), d.a.modActions, e.className)
			}))
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				d = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: o,
					widthLeft: r,
					gutter: a,
					...l
				} = e;
				return n.a.createElement("div", c({
					className: Object(i.a)(d.a.expandRightContainer, t)
				}, l), n.a.createElement("div", {
					className: d.a.left,
					style: {
						flexBasis: r,
						height: o,
						marginRight: a
					}
				}, Array.isArray(s) && s[0]), n.a.createElement("div", {
					className: d.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
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
		"./src/reddit/selectors/eventPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return r
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			}));
			var o = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/selectors/posts.ts");
			const r = (e, t) => {
					let {
						subredditName: s
					} = t;
					return Object(o.a)("ModhubPage-EventPosts", "timeline", {
						subredditName: s
					})
				},
				i = (e, t) => {
					const s = r(e, t);
					return Object(n.N)(e, {
						listingKey: s
					}) || []
				},
				a = (e, t) => {
					const s = r(e, t);
					return !!e.listings.postOrder.api.pending[s]
				},
				d = (e, t) => {
					const s = r(e, t);
					return !!(e.listings.postOrder.ids[s] || []).length
				},
				c = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return !(!o || !o.hasNextPage)
				},
				l = (e, t) => {
					const s = r(e, t),
						o = e.listings.postOrder.pageInfo[s];
					return o && o.endCursor || null
				}
		},
		"./src/reddit/selectors/experiments/reportAd.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.Kc,
					experimentEligibilitySelector: r.a
				}), e => e),
				a = Object(o.a)(i, e => e === n.Qd)
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: i.S,
				experimentName: o.e
			}) === o.c.Enabled
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const d = e => Object(r.c)(e, {
					experimentName: n.jf,
					experimentEligibilitySelector: r.a
				}),
				c = (e, t) => (t === n.qf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.A)(e),
				l = Object(o.a)(a.G, d, (e, t) => c(e, t));
			Object(o.a)((e, t) => t, d, (e, t) => c(e, t))
		},
		"./src/redditGQL/operations/EventPostsBySubredditName.json": function(e) {
			e.exports = JSON.parse('{"id":"b464d6a16b34"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CollectionCommentsPage~ProfileComments~ProfileOverview~ProfilePrivate~StandalonePostPage~reddit-comp~627063c1.66256c4232a872d06cba.js.map