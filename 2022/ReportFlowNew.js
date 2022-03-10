// https://www.redditstatic.com/desktop2x/ReportFlowNew.3eba2c6f0aaf95d3c6e7.js
// Retrieved at 3/10/2022, 4:10:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "h", (function() {
				return b
			})), s.d(t, "g", (function() {
				return O
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(r.a)(e, {
				...n,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var d = s("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				a = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(c),
				b = Object(o.a)(a),
				h = Object(o.a)(l),
				f = Object(o.a)(u),
				_ = Object(o.a)(p),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const o = t(),
						r = Object(d.a)(o);
					if (Object(d.b)(o) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let n = !1,
						c = "";
					do {
						e(_());
						const t = {
								after: c,
								pageSize: 100
							},
							o = await i(s(), t);
						if (o && o.ok) {
							const {
								data: {
									identity: t
								}
							} = o.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: s,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(f(o.map(e => e.node.id))), s) {
									const {
										hasNextPage: e,
										endCursor: t
									} = s;
									n = e, c = t || ""
								}
							} else n = !1
						} else {
							n = !1;
							const t = o.error ? o.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (n)
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return u
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "a", (function() {
				return R
			})), s.d(t, "g", (function() {
				return k
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/blockedRedditors.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/accounts/index.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				a = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = s("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				b = Object(r.a)(u),
				h = Object(r.a)(p),
				f = Object(r.a)(m),
				_ = e => async (t, s, {
					apiContext: r
				}) => {
					const l = s();
					if (l.blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const u = await Object(d.a)(r(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(h(u.body)), u.body.id && t(Object(n.f)(u.body.id)), t(i.g(p)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const s = {
								type: u.error ? u.error.type : "Unknown error",
								username: e
							},
							r = Object(a.c)(l) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(f(s)), t(r ? i.f({
							id: p,
							kind: c.b.Error,
							text: o.fbt._("You can't block u/{username} for 24 hours after unblocking them", [o.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: _(e)
						}) : i.f({
							id: p,
							kind: c.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: _(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", w = "USER_UNBLOCK__SUCCESS", R = "USER_UNBLOCK__FAILED", g = Object(r.a)(O), x = Object(r.a)(w), j = Object(r.a)(R), k = e => async (t, s, {
					apiContext: r
				}) => {
					const a = s(),
						u = Object(l.k)(a),
						p = u ? u.id : void 0,
						m = a.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(g({
						name: e
					})), (await Object(d.c)(r(), p, e)).ok ? (t(x({
						name: e
					})), m && m.id && t(Object(n.h)(m.id)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: c.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(j({
						name: e
					}))))
				}
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.b = Object(o.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CrisisFlow").then(s.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~chat-components-OverlayReport-FormBuilder~reddit-components-FormBuilder"), s.e("reddit-components-FormBuilder")]).then(s.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "ValidThingReportTypes", (function() {
				return G
			}));
			var o = s("./src/config.ts"),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/get.js"),
				i = s.n(n),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/reportFlow/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/CrisisFlow/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/telemetry/models/Event.ts");
			const _ = e => t => ({
				source: f.f.UserReport,
				action: f.d.Click,
				noun: f.e.BlockUser,
				targetUser: {
					id: e
				},
				...h.o(t)
			});
			var O = s("./src/reddit/components/FormBuilder/async.tsx"),
				w = s("./src/reddit/actions/userBlocks.ts"),
				R = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/redditGQL/operations/ReportComment.json");
			const x = (e, t) => Object(R.a)(e, {
				...g,
				variables: t
			});
			var j = s("./src/redditGQL/operations/ReportLiveStream.json");
			const k = (e, t) => Object(R.a)(e, {
				...j,
				variables: t
			});
			var v = s("./src/reddit/endpoints/messages/index.ts"),
				C = s("./src/reddit/endpoints/post/report.ts"),
				F = s("./src/redditGQL/operations/ReportForm.json");
			var S = s("./src/reddit/contexts/ApiContext.tsx"),
				y = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/models/Toast/index.ts"),
				L = s("./src/reddit/models/WhitelistAndBlocked.ts"),
				E = s("./src/reddit/selectors/commentSelector.ts"),
				A = s("./src/reddit/selectors/meta.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/lessComponent.tsx"),
				D = s("./src/reddit/components/ReportFlow/index.m.less"),
				q = s.n(D);
			const U = N.a.div("ReportLoaderWrapper", q.a),
				P = N.a.img("LoadingIcon", q.a),
				$ = "2.1";
			var G;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(G || (G = {}));
			const K = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(T.G)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(E.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const s = t && e.posts.models[t];
						return !!s && Object(y.p)(s)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(s => {
						const {
							commentId: o,
							postId: r
						} = t, n = o ? Object(E.b)(e, {
							commentId: o
						}) : null, i = r ? Object(T.G)(e, {
							postId: r
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						s.name
					}),
					isNightmodeOn: B.bb,
					locale: A.i
				}),
				M = Object(a.b)(K, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(w.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: I.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				Q = async (e, t, s, o, r) => {
					var n;
					const i = await ((e, {
						itemId: t,
						formVersion: s,
						hostAppName: o,
						locale: r
					}) => Object(R.a)(e, {
						...F,
						variables: {
							itemId: t,
							hostAppName: o,
							formVersion: s,
							locale: r
						}
					}))(e, {
						itemId: t,
						formVersion: s,
						hostAppName: o,
						locale: r
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
							messageId: s
						} = this.props;
						let o, r, n, i;
						if (this.props.author && (n = this.props.author), t) o = t, r = G.Comment, this.props.comment && !n && (n = this.props.comment.author, i = this.props.comment.authorId);
						else if (e) o = e, r = G.Post, this.props.post && !n && (n = this.props.post.author, i = this.props.post.authorId);
						else {
							if (!s) throw new Error("Invalid object type passed to reporting flow");
							o = s, r = G.Message
						}
						return {
							itemId: o,
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
							blockUserPending: s,
							sendEvent: o
						} = this.props;
						s.new !== L.a.pending && (this.props.onBlockUser(e), o(_(t)))
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: s,
								showFailToast: o,
								hostAppName: r,
								isLiveStreaming: n,
								timestamp: d
							}
						} = this, {
							itemId: c,
							itemType: a
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: l,
							ruleType: u,
							customRule: p
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: r
						};
						switch (u) {
							case "site":
								m.siteRule = i()(t, l.ref).value || i()(t, l.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, l.ref);
								"other" === e && p ? m.customRule = i()(t, p.ref) : m.subredditRule = e
						}
						let b;
						switch (a) {
							case G.Post:
								if (n && d) {
									const e = {
										postId: c,
										relativeReportTimeSec: d,
										...m
									};
									b = () => k(s(), {
										input: e
									});
									break
								}
								const e = {
									postId: c,
									...m
								};
								b = () => Object(C.d)(s(), {
									input: e
								});
								break;
							case G.Comment:
								const t = {
									commentId: c,
									...m
								};
								b = () => x(s(), {
									input: t
								});
								break;
							case G.Message:
								const o = {
									messageId: c,
									...m
								};
								b = () => Object(v.a)(s(), {
									input: o
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await b()).ok || o()
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
						gqlContext: s,
						hostAppName: o
					} = this.props;
					Q(s(), e, $, o, t).then(e => {
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
							isNightmodeOn: e
						},
						state: {
							formComponent: t,
							formState: s,
							ctlFlowOpened: n,
							hasLoaded: i
						}
					} = this, {
						itemAuthor: d,
						itemAuthorId: a
					} = this.getItemMetadata();
					return n && d ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: d,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && s && i ? c.a.createElement(O.a, {
						formComponent: t,
						formState: s,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(d, a),
						onResize: this.props.onResize
					}) : c.a.createElement(U, null, c.a.createElement(P, {
						src: e ? `${o.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${o.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: r.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(S.b)(M(Object(b.c)(H)))
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, s) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			}));
			var o = s("./src/config.ts"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.jb.POST
			}), l = async (e, t, s) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: s,
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
				endpoint: Object(c.a)(`${o.a.oauthUrl}/user/${t}/about`),
				method: r.jb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return u
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return h
			}));
			var o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				n = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				a = s("./src/reddit/helpers/reportPage/index.ts"),
				l = s("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(n.a)(e, {
				...l,
				variables: t
			});
			var p;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(p || (p = {}));
			const m = (e, t) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: o.jb.POST,
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
							reportFlowPayload: s
						} = e;
					switch (s.customText && (t.custom_text = s.customText), s.kind) {
						case p.Other:
							return {
								...t, reason: "other", other_reason: s.rule
							};
						case p.Rule:
							return {
								...t, reason: s.rule, rule_reason: s.rule
							};
						case p.SiteRule:
						case p.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: s.rule
							}
					}
				},
				h = (e, t, s) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: o.jb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: f(t, s)
				}),
				f = (e, t) => {
					const s = {
						...Object(a.b)(e),
						api_type: "json"
					};
					return t && (s.from_help_desk = !0), s
				}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return f
			}));
			var o = s("./src/reddit/models/RulesSequence/index.ts");
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
						s = new RegExp(d),
						o = new RegExp(c),
						r = new RegExp(u),
						n = new RegExp(a),
						p = new RegExp(l);
					let h, f, _;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (h = "t1_" + e[1])
						} else if (s.test(i) || r.test(i)) {
							const e = s.exec(i) || r.exec(i);
							e && e.length > 1 && (h = "t3_" + e[1])
						} else if (o.test(i)) {
							const e = o.exec(i);
							e && e.length > 1 && (h = "t4_" + e[1])
						} else if (p.test(i)) {
							const e = p.exec(i);
							e && e.length > 2 && (f = e[1], _ = e[2])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const O = new RegExp(m),
						w = new RegExp(b),
						R = [];
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
							if (O.test(t)) {
								const e = O.exec(t);
								e && e.length > 1 && R.push(e[1])
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
						modmail_msg_id: _,
						sr_name: g,
						thing_id: h,
						usernames: R.length ? R.join(",") : void 0
					}
				},
				f = (e, t) => {
					const s = new o.a;
					return _(s, e, t, 0), s
				},
				_ = (e, t, s, o) => {
					for (let r = 0; r < t.length; r++) {
						const n = t[r];
						e.update(r, o);
						const i = e.getSequence().length;
						if (n.reasonAsParam === s) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (_(e, n.nextStepReasons, s, o + 1), e.getSequence().length > i)) return;
						e.cut(o - 1)
					}
				}
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			class o {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const s = this.sequence.slice(0, t);
					s.push(e), this.sequence = s
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var o = s("./src/reddit/selectors/user.ts");
			const r = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				i = (e, t) => {
					const s = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!s && s.includes(t)
				},
				d = (e, t) => {
					const s = Object(o.wb)(e, {
						userName: t
					});
					return !!s && i(e, s.id)
				}
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.3eba2c6f0aaf95d3c6e7.js.map