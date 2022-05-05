// https://www.redditstatic.com/desktop2x/ReportFlowNew.0449aa8165eeb5acc40d.js
// Retrieved at 5/5/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "e", (function() {
				return a
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "h", (function() {
				return b
			})), o.d(t, "g", (function() {
				return w
			}));
			var r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/lib/makeGqlRequest/index.ts"),
				n = o("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(s.a)(e, {
				...n,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var d = o("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				a = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(r.a)(c),
				b = Object(r.a)(a),
				h = Object(r.a)(l),
				f = Object(r.a)(u),
				_ = Object(r.a)(p),
				w = () => async (e, t, o) => {
					let {
						gqlContext: r
					} = o;
					const s = t(),
						n = Object(d.a)(s);
					if (Object(d.b)(s) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let c = !1,
						a = "";
					do {
						e(_());
						const t = {
								after: a,
								pageSize: 100
							},
							o = await i(r(), t);
						if (o && o.ok) {
							const {
								data: {
									identity: t
								}
							} = o.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: o,
									edges: r
								} = t.blockedRedditorsInfo;
								if (e(f(r.map(e => e.node.id))), o) {
									const {
										hasNextPage: e,
										endCursor: t
									} = o;
									c = e, a = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = o.error ? o.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			})), o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var r = o("./src/lib/loadableAction/index.ts");
			const s = Object(r.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(r.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return u
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "d", (function() {
				return m
			})), o.d(t, "h", (function() {
				return _
			})), o.d(t, "b", (function() {
				return w
			})), o.d(t, "c", (function() {
				return O
			})), o.d(t, "a", (function() {
				return R
			})), o.d(t, "g", (function() {
				return j
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = o("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				b = Object(s.a)(u),
				h = Object(s.a)(p),
				f = Object(s.a)(m),
				_ = e => async (t, o, s) => {
					let {
						apiContext: l
					} = s;
					const u = o();
					if (u.blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const p = await Object(d.a)(l(), e),
						m = `error-block-${e}`;
					if (p.ok) p.body.name && t(h(p.body)), p.body.id && t(Object(n.f)(p.body.id)), t(i.g(m)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
								type: p.error ? p.error.type : "Unknown error",
								username: e
							},
							s = Object(a.e)(u) && "REBLOCK_RATE_LIMIT" === p.body.reason;
						t(f(o)), t(s ? i.f({
							id: m,
							kind: c.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: _(e)
						}) : i.f({
							id: m,
							kind: c.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: _(e)
						}))
					}
				}, w = "USER_UNBLOCK__PENDING", O = "USER_UNBLOCK__SUCCESS", R = "USER_UNBLOCK__FAILED", x = Object(s.a)(w), g = Object(s.a)(O), k = Object(s.a)(R), j = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					const u = o(),
						p = Object(l.k)(u),
						m = p ? p.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(x({
						name: e
					})), (await Object(d.c)(a(), m, e)).ok ? (t(g({
						name: e
					})), b && b.id && t(Object(n.h)(b.id)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(k({
						name: e
					}))))
				}
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var r = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: s.a.overlayReportFlow
			};
			t.b = Object(r.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("CrisisFlow").then(o.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, o) {
			"use strict";
			var r = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => Promise.all([o.e("vendors~chat-components-OverlayReport-FormBuilder~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t), o.d(t, "ValidThingReportTypes", (function() {
				return M
			}));
			var r = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/get.js"),
				i = o.n(n),
				d = o("./node_modules/react/index.js"),
				c = o.n(d),
				a = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				u = o("./src/reddit/actions/reportFlow/index.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				b = o("./src/reddit/components/TrackingHelper/index.tsx"),
				h = o("./src/reddit/selectors/telemetry.ts"),
				f = o("./src/telemetry/models/Event.ts");
			const _ = e => t => ({
				source: f.f.UserReport,
				action: f.d.Click,
				noun: f.e.BlockUser,
				targetUser: {
					id: e
				},
				...h.n(t)
			});
			var w = o("./src/reddit/components/FormBuilder/async.tsx"),
				O = o("./src/reddit/actions/userBlocks.ts"),
				R = o("./src/lib/makeGqlRequest/index.ts"),
				x = o("./src/redditGQL/operations/ReportComment.json");
			const g = (e, t) => Object(R.a)(e, {
				...x,
				variables: t
			});
			var k = o("./src/redditGQL/operations/ReportLiveStream.json");
			const j = (e, t) => Object(R.a)(e, {
				...k,
				variables: t
			});
			var v = o("./src/reddit/endpoints/messages/index.ts"),
				y = o("./src/reddit/endpoints/post/report.ts"),
				S = o("./src/redditGQL/operations/ReportForm.json");
			var L = o("./src/reddit/endpoints/talk/index.ts"),
				C = o("./src/reddit/contexts/ApiContext.tsx"),
				I = o("./src/reddit/models/Post/index.ts"),
				E = o("./src/reddit/models/Toast/index.ts"),
				F = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				A = o("./src/reddit/selectors/commentSelector.ts"),
				T = o("./src/reddit/selectors/experiments/econ/index.ts"),
				N = o("./src/reddit/selectors/meta.ts"),
				P = o("./src/reddit/selectors/posts.ts"),
				q = o("./src/reddit/selectors/user.ts"),
				B = o("./src/lib/lessComponent.tsx"),
				U = o("./src/reddit/components/ReportFlow/index.m.less"),
				D = o.n(U);
			const G = B.a.div("ReportLoaderWrapper", D.a),
				$ = B.a.img("LoadingIcon", D.a),
				K = "2.1";
			var M;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(M || (M = {}));
			const Q = Object(l.c)({
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(P.G)(e, {
							postId: o
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(A.b)(e, {
							commentId: o
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: o
						} = t;
						const r = o && e.posts.models[o];
						return !!r && Object(I.p)(r)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: r,
							postId: s
						} = t, n = r ? Object(A.b)(e, {
							commentId: r
						}) : null, i = s ? Object(P.G)(e, {
							postId: s
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: q.db,
					isTalkReportingAllowed: T.w,
					locale: N.i
				}),
				J = Object(a.b)(Q, (e, t) => {
					let {
						timestamp: o
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(u.b)())
						},
						onBlockUser: t => {
							e(Object(O.h)(t))
						},
						showFailToast: () => e(Object(p.f)({
							kind: E.b.Error,
							text: s.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				H = async (e, t, o, r, s) => {
					var n;
					const i = await ((e, t) => {
						let {
							itemId: o,
							formVersion: r,
							hostAppName: s,
							locale: n
						} = t;
						return Object(R.a)(e, {
							...S,
							variables: {
								itemId: o,
								hostAppName: s,
								formVersion: r,
								locale: n
							}
						})
					})(e, {
						itemId: t,
						formVersion: o,
						hostAppName: r,
						locale: s
					});
					if (i && i.ok) {
						const e = null === (n = i.body.data.reportForm) || void 0 === n ? void 0 : n.form;
						return e ? JSON.parse(e) : null
					}
				};
			class Y extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let r, s, n, i;
						if (this.props.author && (n = this.props.author), t) r = t, s = M.Comment, this.props.comment && !n && (n = this.props.comment.author, i = this.props.comment.authorId);
						else if (e) r = e, s = M.Post, this.props.post && !n && (n = this.props.post.author, i = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							r = o, s = M.Message
						}
						return {
							itemId: r,
							itemType: s,
							itemAuthor: n,
							itemAuthorId: i
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = (e, t) => {
						const {
							blockUserPending: o,
							sendEvent: r
						} = this.props;
						o.new !== F.a.pending && (this.props.onBlockUser(e), r(_(t)))
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						var o;
						const {
							props: {
								gqlContext: r,
								showFailToast: s,
								hostAppName: n,
								isLiveStreaming: d,
								isTalkReportingAllowed: c,
								timestamp: a
							}
						} = this, {
							itemId: l,
							itemType: u
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: p,
							ruleType: m,
							customRule: b
						} = e, h = {
							fromHelpDesk: !1,
							hostAppName: n
						};
						switch (m) {
							case "site":
								h.siteRule = i()(t, p.ref).value || i()(t, p.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, p.ref);
								"other" === e && b ? h.customRule = i()(t, b.ref) : h.subredditRule = e
						}
						let f;
						switch (u) {
							case M.Post:
								if (c && (null === (o = this.props.post) || void 0 === o ? void 0 : o.audioRoom)) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										o = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: l,
											...h
										};
									f = () => Object(L.f)(r(), {
										input: o
									});
									break
								}
								if (d && a) {
									const e = {
										postId: l,
										relativeReportTimeSec: a,
										...h
									};
									f = () => j(r(), {
										input: e
									});
									break
								}
								const e = {
									postId: l,
									...h
								};
								f = () => Object(y.d)(r(), {
									input: e
								});
								break;
							case M.Comment:
								const t = {
									commentId: l,
									...h
								};
								f = () => g(r(), {
									input: t
								});
								break;
							case M.Message:
								const s = {
									messageId: l,
									...h
								};
								f = () => Object(v.a)(r(), {
									input: s
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await f()).ok || s()
					}, this.state = {
						ctlFlowOpened: !1,
						hasLoaded: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						itemId: e
					} = this.getItemMetadata(), {
						locale: t,
						gqlContext: o,
						hostAppName: r
					} = this.props;
					H(o(), e, K, r, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						props: {
							isNightmodeOn: e,
							postId: t,
							commentId: o,
							messageId: n
						},
						state: {
							formComponent: i,
							formState: d,
							ctlFlowOpened: a,
							hasLoaded: l
						}
					} = this, {
						itemAuthor: u,
						itemAuthorId: p
					} = this.getItemMetadata(), b = o || t || n;
					return a && u ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: u,
						fromUserProfile: !b,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: b
					}) : i && d && l ? c.a.createElement(w.a, {
						formComponent: i,
						formState: d,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: s.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(u, p),
						onResize: this.props.onResize
					}) : c.a.createElement(G, null, c.a.createElement($, {
						src: e ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: s.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(C.b)(J(Object(b.c)(Y)))
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, o) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "b", (function() {
				return m
			}));
			var r = o("./src/config.ts"),
				s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.kb.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.kb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.kb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.kb.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(c.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.kb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return u
			})), o.d(t, "a", (function() {
				return p
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "c", (function() {
				return h
			}));
			var r = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				n = o("./src/lib/makeGqlRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = o("./src/reddit/helpers/reportPage/index.ts"),
				l = o("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(s.a)(Object(i.a)(e, [d.a]), {
					method: r.kb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: b(t)
				}),
				b = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: o
						} = e;
					switch (o.customText && (t.custom_text = o.customText), o.kind) {
						case p.Other:
							return {
								...t, reason: "other", other_reason: o.rule
							};
						case p.Rule:
							return {
								...t, reason: o.rule, rule_reason: o.rule
							};
						case p.SiteRule:
						case p.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: o.rule
							}
					}
				},
				h = (e, t, o) => Object(s.a)(Object(i.a)(e, [d.a]), {
					method: r.kb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: f(t, o)
				}),
				f = (e, t) => {
					const o = {
						...Object(a.b)(e),
						api_type: "json"
					};
					return t && (o.from_help_desk = !0), o
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return p
			})), o.d(t, "d", (function() {
				return m
			})), o.d(t, "b", (function() {
				return b
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "e", (function() {
				return f
			})), o.d(t, "a", (function() {
				return _
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/uuid/v4.js"),
				n = o.n(s),
				i = o("./src/lib/makeGqlRequest/index.ts"),
				d = o("./src/lib/makeRequest/index.ts"),
				c = o("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				a = o("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				l = o("./src/redditGQL/operations/ReportTalk.json"),
				u = o("./src/redditGQL/types.ts");
			const p = (e, t) => Object(i.a)(e, {
					...l,
					variables: t
				}),
				m = async (e, t) => {
					const o = await Object(i.a)(e, {
						...a,
						variables: t
					});
					return !!Object(d.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(u.u.Talk)
				}, b = (e, t) => Object(i.a)(e, {
					...c,
					variables: t
				}), h = () => n()(), f = e => e.data.createAudioRoomOrError, _ = {
					[u.f.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[u.f.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[u.f.RoomLimitExceeded]: r.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[u.f.ConcurrentRoomLimitExceeded]: r.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[u.f.SubredditRoomLimitExceeded]: r.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return p
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "c", (function() {
				return b
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "a", (function() {
				return f
			}));
			var r = o("./src/reddit/models/RulesSequence/index.ts");
			const s = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				n = "(?:https?://)",
				i = `^${n}${s}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				d = `^${n}${s}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				c = `^${n}${s}/message/messages/(\\w+)(?:/.*)?`,
				a = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				l = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${n}${s}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${d}|${i}|${c}|${a}|${l}|${u})`,
				m = `(?:(?:${n}?${s}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				b = `(?:(?:${n}?${s}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				h = e => {
					const t = new RegExp(i),
						o = new RegExp(d),
						r = new RegExp(c),
						s = new RegExp(u),
						n = new RegExp(a),
						p = new RegExp(l);
					let h, f, _;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (h = "t1_" + e[1])
						} else if (o.test(i) || s.test(i)) {
							const e = o.exec(i) || s.exec(i);
							e && e.length > 1 && (h = "t3_" + e[1])
						} else if (r.test(i)) {
							const e = r.exec(i);
							e && e.length > 1 && (h = "t4_" + e[1])
						} else if (p.test(i)) {
							const e = p.exec(i);
							e && e.length > 2 && (f = e[1], _ = e[2])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const w = new RegExp(m),
						O = new RegExp(b),
						R = [];
					let x;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (O.test(t)) {
							const e = O.exec(t);
							e && e.length > 1 && (x = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (w.test(t)) {
								const e = w.exec(t);
								e && e.length > 1 && R.push(e[1])
							}
						}
					const {
						reason: g
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: g.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: _,
						sr_name: x,
						thing_id: h,
						usernames: R.length ? R.join(",") : void 0
					}
				},
				f = (e, t) => {
					const o = new r.a;
					return _(o, e, t, 0), o
				},
				_ = (e, t, o, r) => {
					for (let s = 0; s < t.length; s++) {
						const n = t[s];
						e.update(s, r);
						const i = e.getSequence().length;
						if (n.reasonAsParam === o) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (_(e, n.nextStepReasons, o, r + 1), e.getSequence().length > i)) return;
						e.cut(r - 1)
					}
				}
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			}));
			class r {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const o = this.sequence.slice(0, t);
					o.push(e), this.sequence = o
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, o) {
			"use strict";
			var r;
			o.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "c", (function() {
				return n
			}));
			o("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				n = (e, t) => {
					const o = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				}
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"52e4102ca1f1"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/redditGQL/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/redditGQL/operations/ReportLiveStream.json": function(e) {
			e.exports = JSON.parse('{"id":"f401837d5e74"}')
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.0449aa8165eeb5acc40d.js.map