// https://www.redditstatic.com/desktop2x/ReportFlowNew.97f423ce39405a189400.js
// Retrieved at 3/21/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
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
			var s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/lib/makeGqlRequest/index.ts"),
				n = o("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(r.a)(e, {
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
				m = Object(s.a)(c),
				b = Object(s.a)(a),
				h = Object(s.a)(l),
				f = Object(s.a)(u),
				_ = Object(s.a)(p),
				w = () => async (e, t, {
					gqlContext: o
				}) => {
					const s = t(),
						r = Object(d.a)(s);
					if (Object(d.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let n = !1,
						c = "";
					do {
						e(_());
						const t = {
								after: c,
								pageSize: 100
							},
							s = await i(o(), t);
						if (s && s.ok) {
							const {
								data: {
									identity: t
								}
							} = s.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: o,
									edges: s
								} = t.blockedRedditorsInfo;
								if (e(f(s.map(e => e.node.id))), o) {
									const {
										hasNextPage: e,
										endCursor: t
									} = o;
									n = e, c = t || ""
								}
							} else n = !1
						} else {
							n = !1;
							const t = s.error ? s.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (n)
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return n
			})), o.d(t, "b", (function() {
				return i
			}));
			var s = o("./src/lib/loadableAction/index.ts");
			const r = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				return k
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = o("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				b = Object(r.a)(u),
				h = Object(r.a)(p),
				f = Object(r.a)(m),
				_ = e => async (t, o, {
					apiContext: r
				}) => {
					const l = o();
					if (l.blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const u = await Object(d.a)(r(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(h(u.body)), u.body.id && t(Object(n.f)(u.body.id)), t(i.g(p)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
								type: u.error ? u.error.type : "Unknown error",
								username: e
							},
							r = Object(a.c)(l) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(f(o)), t(r ? i.f({
							id: p,
							kind: c.b.Error,
							text: s.fbt._("You can't block u/{username} for 24 hours after unblocking them", [s.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: _(e)
						}) : i.f({
							id: p,
							kind: c.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: _(e)
						}))
					}
				}, w = "USER_UNBLOCK__PENDING", O = "USER_UNBLOCK__SUCCESS", R = "USER_UNBLOCK__FAILED", x = Object(r.a)(w), g = Object(r.a)(O), j = Object(r.a)(R), k = e => async (t, o, {
					apiContext: r
				}) => {
					const a = o(),
						u = Object(l.k)(a),
						p = u ? u.id : void 0,
						m = a.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(x({
						name: e
					})), (await Object(d.c)(r(), p, e)).ok ? (t(g({
						name: e
					})), m && m.id && t(Object(n.h)(m.id)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("{username} is now unblocked", [s.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: c.b.Error,
						text: s.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(j({
						name: e
					}))))
				}
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = o("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.b = Object(s.a)({
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
			var s = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
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
			var s = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
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
				...h.o(t)
			});
			var w = o("./src/reddit/components/FormBuilder/async.tsx"),
				O = o("./src/reddit/actions/userBlocks.ts"),
				R = o("./src/lib/makeGqlRequest/index.ts"),
				x = o("./src/redditGQL/operations/ReportComment.json");
			const g = (e, t) => Object(R.a)(e, {
				...x,
				variables: t
			});
			var j = o("./src/redditGQL/operations/ReportLiveStream.json");
			const k = (e, t) => Object(R.a)(e, {
				...j,
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
					post: (e, {
						postId: t
					}) => t ? Object(P.G)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(A.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(I.p)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: s,
							postId: r
						} = t, n = s ? Object(A.b)(e, {
							commentId: s
						}) : null, i = r ? Object(P.G)(e, {
							postId: r
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: q.bb,
					isTalkReportingAllowed: T.B,
					locale: N.i
				}),
				J = Object(a.b)(Q, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(O.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: E.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				H = async (e, t, o, s, r) => {
					var n;
					const i = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: s,
						locale: r
					}) => Object(R.a)(e, {
						...S,
						variables: {
							itemId: t,
							hostAppName: s,
							formVersion: o,
							locale: r
						}
					}))(e, {
						itemId: t,
						formVersion: o,
						hostAppName: s,
						locale: r
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
						let s, r, n, i;
						if (this.props.author && (n = this.props.author), t) s = t, r = M.Comment, this.props.comment && !n && (n = this.props.comment.author, i = this.props.comment.authorId);
						else if (e) s = e, r = M.Post, this.props.post && !n && (n = this.props.post.author, i = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							s = o, r = M.Message
						}
						return {
							itemId: s,
							itemType: r,
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
							sendEvent: s
						} = this.props;
						o.new !== F.a.pending && (this.props.onBlockUser(e), s(_(t)))
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
								gqlContext: s,
								showFailToast: r,
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
									f = () => Object(L.f)(s(), {
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
									f = () => k(s(), {
										input: e
									});
									break
								}
								const e = {
									postId: l,
									...h
								};
								f = () => Object(y.d)(s(), {
									input: e
								});
								break;
							case M.Comment:
								const t = {
									commentId: l,
									...h
								};
								f = () => g(s(), {
									input: t
								});
								break;
							case M.Message:
								const r = {
									messageId: l,
									...h
								};
								f = () => Object(v.a)(s(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await f()).ok || r()
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
						hostAppName: s
					} = this.props;
					H(o(), e, K, s, t).then(e => {
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
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(u, p),
						onResize: this.props.onResize
					}) : c.a.createElement(G, null, c.a.createElement($, {
						src: e ? `${s.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${s.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: r.fbt._("Loading", null, {
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
			var s = o("./src/config.ts"),
				r = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts"),
				c = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.jb.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.jb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.jb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.jb.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(c.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: r.jb.GET,
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
			var s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
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
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: s.jb.POST,
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
				h = (e, t, o) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: s.jb.POST,
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
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./node_modules/uuid/v4.js"),
				n = o.n(r),
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
					return !!Object(d.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(u.t.Talk)
				}, b = (e, t) => Object(i.a)(e, {
					...c,
					variables: t
				}), h = () => n()(), f = e => e.data.createAudioRoomOrError, _ = {
					[u.f.ServiceError]: s.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[u.f.UserNotAuthorized]: s.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[u.f.RoomLimitExceeded]: s.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[u.f.ConcurrentRoomLimitExceeded]: s.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[u.f.SubredditRoomLimitExceeded]: s.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
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
			var s = o("./src/reddit/models/RulesSequence/index.ts");
			const r = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				n = "(?:https?://)",
				i = `^${n}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				d = `^${n}${r}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				c = `^${n}${r}/message/messages/(\\w+)(?:/.*)?`,
				a = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				l = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${n}${r}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${d}|${i}|${c}|${a}|${l}|${u})`,
				m = `(?:(?:${n}?${r}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				b = `(?:(?:${n}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				h = e => {
					const t = new RegExp(i),
						o = new RegExp(d),
						s = new RegExp(c),
						r = new RegExp(u),
						n = new RegExp(a),
						p = new RegExp(l);
					let h, f, _;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (h = "t1_" + e[1])
						} else if (o.test(i) || r.test(i)) {
							const e = o.exec(i) || r.exec(i);
							e && e.length > 1 && (h = "t3_" + e[1])
						} else if (s.test(i)) {
							const e = s.exec(i);
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
					const o = new s.a;
					return _(o, e, t, 0), o
				},
				_ = (e, t, o, s) => {
					for (let r = 0; r < t.length; r++) {
						const n = t[r];
						e.update(r, s);
						const i = e.getSequence().length;
						if (n.reasonAsParam === o) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (_(e, n.nextStepReasons, o, s + 1), e.getSequence().length > i)) return;
						e.cut(s - 1)
					}
				}
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			class s {
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
			var s;
			o.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return r
			})), o.d(t, "a", (function() {
				return n
			})), o.d(t, "d", (function() {
				return i
			})), o.d(t, "c", (function() {
				return d
			}));
			var s = o("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				i = (e, t) => {
					const o = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				},
				d = (e, t) => {
					const o = Object(s.wb)(e, {
						userName: t
					});
					return !!o && i(e, o.id)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.97f423ce39405a189400.js.map