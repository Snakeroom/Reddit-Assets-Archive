// https://www.redditstatic.com/desktop2x/ReportFlowNew.93906ff2377c21309176.js
// Retrieved at 8/29/2022, 11:20:05 AM by Reddit Dataminer v1.0.0
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
				return R
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
				O = Object(r.a)(p),
				R = () => async (e, t, o) => {
					let {
						gqlContext: r
					} = o;
					const s = t(),
						n = Object(d.a)(s);
					if (Object(d.b)(s) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let c = !1,
						a = "";
					do {
						e(O());
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
			const s = Object(r.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(r.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => Promise.all([o.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), o.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return l
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "h", (function() {
				return f
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "c", (function() {
				return R
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "g", (function() {
				return j
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(s.a)(l),
				b = Object(s.a)(u),
				h = Object(s.a)(p),
				f = e => async (t, o, s) => {
					let {
						apiContext: a
					} = s;
					var l;
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const u = await Object(d.a)(a(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(n.f)(u.body.id)), t(i.g(p)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: u.error ? u.error.type : "Unknown error",
							username: e
						};
						t(h(o)), "REBLOCK_RATE_LIMIT" === (null === (l = u.body) || void 0 === l ? void 0 : l.reason) ? t(i.f({
							id: p,
							kind: c.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: f(e)
						})) : t(i.f({
							id: p,
							kind: c.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", R = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", _ = Object(s.a)(O), g = Object(s.a)(R), x = Object(s.a)(w), j = e => async (t, o, s) => {
					let {
						apiContext: l
					} = s;
					const u = o(),
						p = Object(a.k)(u),
						m = p ? p.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(_({
						name: e
					})), (await Object(d.c)(l(), m, e)).ok ? (t(g({
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
					})), t(x({
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
				return Q
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
			const O = e => t => ({
				source: f.f.UserReport,
				action: f.d.Click,
				noun: f.e.BlockUser,
				targetUser: {
					id: e
				},
				...h.n(t)
			});
			var R = o("./src/reddit/components/FormBuilder/async.tsx"),
				w = o("./src/reddit/actions/userBlocks.ts"),
				_ = o("./src/lib/makeGqlRequest/index.ts"),
				g = o("./src/redditGQL/operations/ReportComment.json");
			const x = (e, t) => Object(_.a)(e, {
				...g,
				variables: t
			});
			var j = o("./src/redditGQL/operations/ReportLiveStream.json");
			const k = (e, t) => Object(_.a)(e, {
				...j,
				variables: t
			});
			var v = o("./src/reddit/endpoints/messages/index.ts"),
				y = o("./src/reddit/endpoints/post/report.ts"),
				S = o("./src/redditGQL/operations/ReportForm.json");
			var L = o("./src/reddit/endpoints/talk/index.ts"),
				C = o("./src/reddit/contexts/ApiContext.tsx"),
				I = o("./src/reddit/models/Post/index.ts"),
				F = o("./src/reddit/models/Toast/index.ts"),
				E = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				A = o("./src/reddit/selectors/commentSelector.ts"),
				T = o("./src/reddit/selectors/meta.ts"),
				P = o("./src/reddit/selectors/posts.ts"),
				G = o("./src/reddit/selectors/user.ts"),
				N = o("./src/lib/lessComponent.tsx"),
				B = o("./src/reddit/components/ReportFlow/index.m.less"),
				q = o.n(B);
			const U = N.a.div("ReportLoaderWrapper", q.a),
				D = N.a.img("LoadingIcon", q.a),
				$ = "2.1";
			var Q;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(Q || (Q = {}));
			const K = Object(l.c)({
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
						return !!r && Object(I.q)(r)
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
					isNightmodeOn: G.db,
					locale: T.j
				}),
				M = Object(a.b)(K, (e, t) => {
					let {
						timestamp: o
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(u.b)())
						},
						onBlockUser: t => {
							e(Object(w.h)(t))
						},
						showFailToast: () => e(Object(p.f)({
							kind: F.b.Error,
							text: s.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				J = async (e, t, o, r, s) => {
					var n;
					const i = await ((e, t) => {
						let {
							itemId: o,
							formVersion: r,
							hostAppName: s,
							locale: n
						} = t;
						return Object(_.a)(e, {
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
			class H extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let r, s, n, i;
						if (this.props.author && (n = this.props.author), t) r = t, s = Q.Comment, this.props.comment && !n && (n = this.props.comment.author, i = this.props.comment.authorId);
						else if (e) r = e, s = Q.Post, this.props.post && !n && (n = this.props.post.author, i = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							r = o, s = Q.Message
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
						o.new !== E.a.pending && (this.props.onBlockUser(e), r(O(t)))
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
								timestamp: c
							}
						} = this, {
							itemId: a,
							itemType: l
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: u,
							ruleType: p,
							customRule: m
						} = e, b = {
							fromHelpDesk: !1,
							hostAppName: n
						};
						switch (p) {
							case "site":
								b.siteRule = i()(t, u.ref).value || i()(t, u.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, u.ref);
								"other" === e && m ? b.customRule = i()(t, m.ref) : b.subredditRule = e
						}
						let h;
						switch (l) {
							case Q.Post:
								if (null === (o = this.props.post) || void 0 === o ? void 0 : o.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										o = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: a,
											...b
										};
									h = () => Object(L.h)(r(), {
										input: o
									});
									break
								}
								if (d && c) {
									const e = {
										postId: a,
										relativeReportTimeSec: c,
										...b
									};
									h = () => k(r(), {
										input: e
									});
									break
								}
								const e = {
									postId: a,
									...b
								};
								h = () => Object(y.d)(r(), {
									input: e
								});
								break;
							case Q.Comment:
								const t = {
									commentId: a,
									...b
								};
								h = () => x(r(), {
									input: t
								});
								break;
							case Q.Message:
								const s = {
									messageId: a,
									...b
								};
								h = () => Object(v.a)(r(), {
									input: s
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await h()).ok || s()
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
					J(o(), e, $, r, t).then(e => {
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
					}) : i && d && l ? c.a.createElement(R.a, {
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
					}) : c.a.createElement(U, null, c.a.createElement(D, {
						src: e ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: s.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(C.b)(M(Object(b.c)(H)))
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
				method: s.mb.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.mb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.mb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.mb.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(c.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.mb.GET,
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
					method: r.mb.POST,
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
					method: r.mb.POST,
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
			o.d(t, "h", (function() {
				return f
			})), o.d(t, "f", (function() {
				return O
			})), o.d(t, "e", (function() {
				return R
			})), o.d(t, "d", (function() {
				return w
			})), o.d(t, "b", (function() {
				return _
			})), o.d(t, "c", (function() {
				return g
			})), o.d(t, "g", (function() {
				return x
			})), o.d(t, "a", (function() {
				return j
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/uuid/v4.js"),
				n = o.n(s),
				i = o("./src/lib/makeGqlRequest/index.ts"),
				d = o("./src/lib/makeRequest/index.ts"),
				c = o("./src/reddit/models/Subreddit/index.ts"),
				a = o("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				l = o("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				u = o("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				p = o("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				m = o("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				b = o("./src/redditGQL/operations/ReportTalk.json"),
				h = o("./src/redditGQL/types.ts");
			const f = (e, t) => Object(i.a)(e, {
					...b,
					variables: t
				}),
				O = async (e, t) => {
					const o = await Object(i.a)(e, {
						...p,
						variables: t
					});
					return !!Object(d.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(h.A.Talk)
				}, R = async (e, t) => {
					var o, r;
					const s = await Object(i.a)(e, {
						...m,
						variables: t
					});
					return !!Object(d.c)(s) && (null !== (r = null === (o = s.body.data.profileByName) || void 0 === o ? void 0 : o.allowedPostTypes) && void 0 !== r ? r : []).includes(h.A.Talk)
				}, w = async e => {
					var t;
					const o = await Object(i.a)(e, u);
					return Object(d.c)(o) && null !== (t = o.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, _ = (e, t, o) => t.type === c.f.User ? Object(i.a)(e, {
					...a,
					variables: o
				}) : Object(i.a)(e, {
					...l,
					variables: {
						...o,
						subredditId: t.id
					}
				}), g = () => n()(), x = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile, j = {
					[h.i.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[h.i.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[h.i.RoomLimitExceeded]: r.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[h.i.ConcurrentRoomLimitExceeded]: r.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[h.i.SubredditRoomLimitExceeded]: r.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
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
					let h, f, O;
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
							e && e.length > 2 && (f = e[1], O = e[2])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const R = new RegExp(m),
						w = new RegExp(b),
						_ = [];
					let g;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (w.test(t)) {
							const e = w.exec(t);
							e && e.length > 1 && (g = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (R.test(t)) {
								const e = R.exec(t);
								e && e.length > 1 && _.push(e[1])
							}
						}
					const {
						reason: x
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: x.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: O,
						sr_name: g,
						thing_id: h,
						usernames: _.length ? _.join(",") : void 0
					}
				},
				f = (e, t) => {
					const o = new r.a;
					return O(o, e, t, 0), o
				},
				O = (e, t, o, r) => {
					for (let s = 0; s < t.length; s++) {
						const n = t[s];
						e.update(s, r);
						const i = e.getSequence().length;
						if (n.reasonAsParam === o) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (O(e, n.nextStepReasons, o, r + 1), e.getSequence().length > i)) return;
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
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.93906ff2377c21309176.js.map