// https://www.redditstatic.com/desktop2x/ReportFlowNew.8b8785fe28b933f398e8.js
// Retrieved at 1/24/2022, 12:00:06 PM by Reddit Dataminer v1.0.0
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
			var r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				n = s("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const i = (e, t) => Object(o.a)(e, {
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
				m = Object(r.a)(c),
				b = Object(r.a)(a),
				h = Object(r.a)(l),
				f = Object(r.a)(u),
				_ = Object(r.a)(p),
				O = () => async (e, t, {
					gqlContext: s
				}) => {
					const r = t(),
						o = Object(d.a)(r);
					if (Object(d.b)(r) || o.timestamp && Date.now() - o.timestamp < 36e6) return;
					let n = !1,
						c = "";
					do {
						e(_());
						const t = {
								after: c,
								pageSize: 100
							},
							r = await i(s(), t);
						if (r && r.ok) {
							const {
								data: {
									identity: t
								}
							} = r.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: s,
									edges: r
								} = t.blockedRedditorsInfo;
								if (e(f(r.map(e => e.node.id))), s) {
									const {
										hasNextPage: e,
										endCursor: t
									} = s;
									n = e, c = t || ""
								}
							} else n = !1
						} else {
							n = !1;
							const t = r.error ? r.error.type : "unknown error";
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
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/lib/loadableAction/index.ts");
			const o = Object(r.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(r.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				return x
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "g", (function() {
				return k
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/blockedRedditors.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/endpoints/accounts/index.ts"),
				c = s("./src/reddit/models/Toast/index.ts"),
				a = s("./src/reddit/selectors/experiments/antievil/index.tsx"),
				l = s("./src/reddit/selectors/user.ts");
			const u = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				b = Object(o.a)(u),
				h = Object(o.a)(p),
				f = Object(o.a)(m),
				_ = e => async (t, s, {
					apiContext: o
				}) => {
					const l = s();
					if (l.blockUser.api.pending[e]) return;
					t(b({
						username: e
					}));
					const u = await Object(d.a)(o(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(h(u.body)), u.body.id && t(Object(n.f)(u.body.id)), t(i.g(p)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const s = {
								type: u.error ? u.error.type : "Unknown error",
								username: e
							},
							o = Object(a.c)(l) && "REBLOCK_RATE_LIMIT" === u.body.reason;
						t(f(s)), t(o ? i.f({
							id: p,
							kind: c.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: _(e)
						}) : i.f({
							id: p,
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
				}, O = "USER_UNBLOCK__PENDING", x = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", R = Object(o.a)(O), g = Object(o.a)(x), j = Object(o.a)(w), k = e => async (t, s, {
					apiContext: o
				}) => {
					const a = s(),
						u = Object(l.k)(a),
						p = u ? u.id : void 0,
						m = a.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(R({
						name: e
					})), (await Object(d.c)(o(), p, e)).ok ? (t(g({
						name: e
					})), m && m.id && t(Object(n.h)(m.id)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: c.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: o.a.overlayReportFlow
			};
			t.b = Object(r.a)({
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
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
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
				return q
			}));
			var r = s("./src/config.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/get.js"),
				i = s.n(n),
				d = s("./node_modules/react/index.js"),
				c = s.n(d),
				a = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/reportFlow/index.ts"),
				p = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/components/CrisisFlow/index.tsx"),
				b = s("./src/reddit/components/FormBuilder/async.tsx"),
				h = s("./src/reddit/actions/userBlocks.ts"),
				f = s("./src/lib/makeGqlRequest/index.ts"),
				_ = s("./src/redditGQL/operations/ReportComment.json");
			const O = (e, t) => Object(f.a)(e, {
				..._,
				variables: t
			});
			var x = s("./src/redditGQL/operations/ReportLiveStream.json");
			const w = (e, t) => Object(f.a)(e, {
				...x,
				variables: t
			});
			var R = s("./src/reddit/endpoints/messages/index.ts"),
				g = s("./src/reddit/endpoints/post/report.ts"),
				j = s("./src/redditGQL/operations/ReportForm.json");
			var k = s("./src/reddit/contexts/ApiContext.tsx"),
				v = s("./src/reddit/models/Post/index.ts"),
				C = s("./src/reddit/models/Toast/index.ts"),
				S = s("./src/reddit/models/WhitelistAndBlocked.ts"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				F = s("./src/reddit/selectors/meta.ts"),
				E = s("./src/reddit/selectors/posts.ts"),
				L = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/lessComponent.tsx"),
				A = s("./src/reddit/components/ReportFlow/index.m.less"),
				N = s.n(A);
			const T = I.a.div("ReportLoaderWrapper", N.a),
				B = I.a.img("LoadingIcon", N.a),
				D = "2.1";
			var q;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(q || (q = {}));
			const P = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(E.H)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(y.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const s = t && e.posts.models[t];
						return !!s && Object(v.p)(s)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(s => {
						const {
							commentId: r,
							postId: o
						} = t, n = r ? Object(y.b)(e, {
							commentId: r
						}) : null, i = o ? Object(E.H)(e, {
							postId: o
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						s.name
					}),
					isNightmodeOn: L.W,
					locale: F.i
				}),
				$ = Object(a.b)(P, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(h.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: C.b.Error,
						text: o.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				U = async (e, t, s, r, o) => {
					var n;
					const i = await ((e, {
						itemId: t,
						formVersion: s,
						hostAppName: r,
						locale: o
					}) => Object(f.a)(e, {
						...j,
						variables: {
							itemId: t,
							hostAppName: r,
							formVersion: s,
							locale: o
						}
					}))(e, {
						itemId: t,
						formVersion: s,
						hostAppName: r,
						locale: o
					});
					if (i && i.ok) {
						const e = null === (n = i.body.data.reportForm) || void 0 === n ? void 0 : n.form;
						return e ? JSON.parse(e) : null
					}
				};
			class G extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: s
						} = this.props;
						let r, o, n;
						if (this.props.author && (n = this.props.author), t) r = t, o = q.Comment, this.props.comment && !n && (n = this.props.comment.author);
						else if (e) r = e, o = q.Post, this.props.post && !n && (n = this.props.post.author);
						else {
							if (!s) throw new Error("Invalid object type passed to reporting flow");
							r = s, o = q.Message
						}
						return {
							itemId: r,
							itemType: o,
							itemAuthor: n
						}
					}, this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== S.a.pending && this.props.onBlockUser(e)
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
								showFailToast: r,
								hostAppName: o,
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
							hostAppName: o
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
							case q.Post:
								if (n && d) {
									const e = {
										postId: c,
										relativeReportTimeSec: d,
										...m
									};
									b = () => w(s(), {
										input: e
									});
									break
								}
								const e = {
									postId: c,
									...m
								};
								b = () => Object(g.d)(s(), {
									input: e
								});
								break;
							case q.Comment:
								const t = {
									commentId: c,
									...m
								};
								b = () => O(s(), {
									input: t
								});
								break;
							case q.Message:
								const r = {
									messageId: c,
									...m
								};
								b = () => Object(R.a)(s(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await b()).ok || r()
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
						hostAppName: r
					} = this.props;
					U(s(), e, D, r, t).then(e => {
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
						itemAuthor: d
					} = this.getItemMetadata();
					return n && d ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: d,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && s && i ? c.a.createElement(b.a, {
						formComponent: t,
						formState: s,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: o.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(d),
						onResize: this.props.onResize
					}) : c.a.createElement(T, null, c.a.createElement(B, {
						src: e ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(k.b)($(G))
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
			var r = s("./src/config.ts"),
				o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/omitHeaders/index.ts"),
				d = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const a = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: o.jb.POST
			}), l = async (e, t, s) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: s,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: o.jb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: o.jb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: o.jb.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(c.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: o.jb.GET,
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
			var r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeApiRequest/index.ts"),
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
			const m = (e, t) => Object(o.a)(Object(i.a)(e, [d.a]), {
					method: r.jb.POST,
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
				h = (e, t, s) => Object(o.a)(Object(i.a)(e, [d.a]), {
					method: r.jb.POST,
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
			var r = s("./src/reddit/models/RulesSequence/index.ts");
			const o = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				n = "(?:https?://)",
				i = `^${n}${o}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				d = `^${n}${o}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				c = `^${n}${o}/message/messages/(\\w+)(?:/.*)?`,
				a = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				l = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${n}${o}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${d}|${i}|${c}|${a}|${l}|${u})`,
				m = `(?:(?:${n}?${o}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				b = `(?:(?:${n}?${o}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				h = e => {
					const t = new RegExp(i),
						s = new RegExp(d),
						r = new RegExp(c),
						o = new RegExp(u),
						n = new RegExp(a),
						p = new RegExp(l);
					let h, f, _;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (h = "t1_" + e[1])
						} else if (s.test(i) || o.test(i)) {
							const e = s.exec(i) || o.exec(i);
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
					const O = new RegExp(m),
						x = new RegExp(b),
						w = [];
					let R;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (x.test(t)) {
							const e = x.exec(t);
							e && e.length > 1 && (R = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (O.test(t)) {
								const e = O.exec(t);
								e && e.length > 1 && w.push(e[1])
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
						sr_name: R,
						thing_id: h,
						usernames: w.length ? w.join(",") : void 0
					}
				},
				f = (e, t) => {
					const s = new r.a;
					return _(s, e, t, 0), s
				},
				_ = (e, t, s, r) => {
					for (let o = 0; o < t.length; o++) {
						const n = t[o];
						e.update(o, r);
						const i = e.getSequence().length;
						if (n.reasonAsParam === s) return;
						if (n.nextStepReasons && n.nextStepReasons.length && (_(e, n.nextStepReasons, s, r + 1), e.getSequence().length > i)) return;
						e.cut(r - 1)
					}
				}
		},
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
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
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var r = s("./src/reddit/selectors/user.ts");
			const o = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				i = (e, t) => {
					const s = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!s && s.includes(t)
				},
				d = (e, t) => {
					const s = Object(r.mb)(e, {
						userName: t
					});
					return !!s && i(e, s.id)
				}
		},
		"./src/reddit/selectors/experiments/antievil/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.g
					}) === r.a.Enabled
				},
				i = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.m
					}) === r.Wc
				},
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: r.n
					}) === r.Wc
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.8b8785fe28b933f398e8.js.map