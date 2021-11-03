// https://www.redditstatic.com/desktop2x/ReportFlowNew.f1e1f62d66f941afacc1.js
// Retrieved at 11/3/2021, 5:00:05 PM by Reddit Dataminer v1.0.0
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
				return h
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
				h = Object(s.a)(a),
				b = Object(s.a)(l),
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
							e(b({
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
			const r = Object(s.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(s.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(s.a)(() => Promise.all([o.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), o.e("ReportFlow")]).then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				return _
			})), o.d(t, "c", (function() {
				return w
			})), o.d(t, "a", (function() {
				return O
			})), o.d(t, "g", (function() {
				return j
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(l),
				h = Object(r.a)(u),
				b = Object(r.a)(p),
				f = e => async (t, o, {
					apiContext: r
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const a = await Object(d.a)(r(), e),
						l = `error-block-${e}`;
					if (a.ok) a.body.name && t(h(a.body)), a.body.id && t(Object(n.f)(a.body.id)), t(i.g(l)), t(i.f({
						kind: c.b.SuccessCommunity,
						text: s.fbt._("{username} is now blocked", [s.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: a.error ? a.error.type : "Unknown error",
							username: e
						};
						t(b(o)), t(i.f({
							id: l,
							kind: c.b.Error,
							text: s.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: s.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, _ = "USER_UNBLOCK__PENDING", w = "USER_UNBLOCK__SUCCESS", O = "USER_UNBLOCK__FAILED", x = Object(r.a)(_), R = Object(r.a)(w), g = Object(r.a)(O), j = e => async (t, o, {
					apiContext: r
				}) => {
					const l = o(),
						u = Object(a.k)(l),
						p = u ? u.id : void 0,
						m = l.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(x({
						name: e
					})), (await Object(d.c)(r(), p, e)).ok ? (t(R({
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
					})), t(g({
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
				backgroundColor: r.b.overlayReportFlow
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
				importAsync: () => Promise.all([o.e("vendors~chat-components-FormBuilder~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
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
				return D
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
				h = o("./src/reddit/components/FormBuilder/async.tsx"),
				b = o("./src/reddit/actions/userBlocks.ts"),
				f = o("./src/lib/makeGqlRequest/index.ts"),
				_ = o("./src/redditGQL/operations/ReportComment.json");
			const w = (e, t) => Object(f.a)(e, {
				..._,
				variables: t
			});
			var O = o("./src/redditGQL/operations/ReportLiveStream.json");
			const x = (e, t) => Object(f.a)(e, {
				...O,
				variables: t
			});
			var R = o("./src/reddit/endpoints/messages/index.ts"),
				g = o("./src/reddit/endpoints/post/report.ts"),
				j = o("./src/redditGQL/operations/ReportForm.json");
			var C = o("./src/reddit/contexts/ApiContext.tsx"),
				k = o("./src/reddit/models/Post/index.ts"),
				v = o("./src/reddit/models/Toast/index.ts"),
				y = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				F = o("./src/reddit/selectors/commentSelector.ts"),
				S = o("./src/reddit/selectors/meta.ts"),
				E = o("./src/reddit/selectors/posts.ts"),
				I = o("./src/reddit/selectors/user.ts"),
				L = o("./src/lib/lessComponent.tsx"),
				A = o("./src/reddit/components/ReportFlow/index.m.less"),
				P = o.n(A);
			const q = L.a.div("ReportLoaderWrapper", P.a),
				N = L.a.img("LoadingIcon", P.a),
				B = "2.1";
			var D;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(D || (D = {}));
			const T = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(E.H)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(F.b)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(k.p)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: s,
							postId: r
						} = t, n = s ? Object(F.b)(e, {
							commentId: s
						}) : null, i = r ? Object(E.H)(e, {
							postId: r
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: I.X,
					locale: S.i
				}),
				$ = Object(a.b)(T, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(b.h)(t))
					},
					showFailToast: () => e(Object(p.f)({
						kind: v.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				U = async (e, t, o, s, r) => {
					var n;
					const i = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: s,
						locale: r
					}) => Object(f.a)(e, {
						...j,
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
			class G extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let s, r, n;
						if (this.props.author && (n = this.props.author), t) s = t, r = D.Comment, this.props.comment && !n && (n = this.props.comment.author);
						else if (e) s = e, r = D.Post, this.props.post && !n && (n = this.props.post.author);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							s = o, r = D.Message
						}
						return {
							itemId: s,
							itemType: r,
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
						t.new !== y.a.pending && this.props.onBlockUser(e)
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: o,
								showFailToast: s,
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
						let h;
						switch (a) {
							case D.Post:
								if (n && d) {
									const e = {
										postId: c,
										relativeReportTimeSec: d,
										...m
									};
									h = () => x(o(), {
										input: e
									});
									break
								}
								const e = {
									postId: c,
									...m
								};
								h = () => Object(g.d)(o(), {
									input: e
								});
								break;
							case D.Comment:
								const t = {
									commentId: c,
									...m
								};
								h = () => w(o(), {
									input: t
								});
								break;
							case D.Message:
								const s = {
									messageId: c,
									...m
								};
								h = () => Object(R.a)(o(), {
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
						hostAppName: s
					} = this.props;
					U(o(), e, B, s, t).then(e => {
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
							formState: o,
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
					}) : t && o && i ? c.a.createElement(h.a, {
						formComponent: t,
						formState: o,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: r.fbt._("Submit a Report", null, {
							hk: "2wubLC"
						}),
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(d),
						onResize: this.props.onResize
					}) : c.a.createElement(q, null, c.a.createElement(N, {
						src: e ? `${s.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${s.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(C.b)($(G))
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, o) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			})), o.d(t, "b", (function() {
				return c
			}));
			var s = o("./node_modules/react/index.js"),
				r = o.n(s);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const i = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				d = Object(s.createContext)(i);

			function c(e) {
				const t = t => r.a.createElement(d.Consumer, null, ({
					apiContext: o,
					gqlContext: s
				}) => r.a.createElement(e, n({
					apiContext: o,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
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
				method: r.ib.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.ib.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.ib.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.ib.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(c.a)(`${s.a.oauthUrl}/user/${t}/about`),
				method: r.ib.GET,
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
				return b
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
					method: s.ib.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/report`),
					data: h(t)
				}),
				h = e => {
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
				b = (e, t, o) => Object(r.a)(Object(i.a)(e, [d.a]), {
					method: s.ib.POST,
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
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return p
			})), o.d(t, "e", (function() {
				return m
			})), o.d(t, "c", (function() {
				return h
			})), o.d(t, "b", (function() {
				return b
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
				h = `(?:(?:${n}?${r}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				b = e => {
					const t = new RegExp(i),
						o = new RegExp(d),
						s = new RegExp(c),
						r = new RegExp(u),
						n = new RegExp(a),
						p = new RegExp(l);
					let b, f, _;
					if (e.thingUrl) {
						const i = e.thingUrl.trim();
						if (t.test(i)) {
							const e = t.exec(i);
							e && e.length > 1 && (b = "t1_" + e[1])
						} else if (o.test(i) || r.test(i)) {
							const e = o.exec(i) || r.exec(i);
							e && e.length > 1 && (b = "t3_" + e[1])
						} else if (s.test(i)) {
							const e = s.exec(i);
							e && e.length > 1 && (b = "t4_" + e[1])
						} else if (p.test(i)) {
							const e = p.exec(i);
							e && e.length > 2 && (f = e[1], _ = e[2])
						} else if (n.test(i)) {
							const e = n.exec(i);
							e && e.length > 1 && (f = e[1])
						}
					}
					const w = new RegExp(m),
						O = new RegExp(h),
						x = [];
					let R;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (O.test(t)) {
							const e = O.exec(t);
							e && e.length > 1 && (R = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (w.test(t)) {
								const e = w.exec(t);
								e && e.length > 1 && x.push(e[1])
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
						thing_id: b,
						usernames: x.length ? x.join(",") : void 0
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
					const o = Object(s.nb)(e, {
						userName: t
					});
					return !!o && i(e, o.id)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.f1e1f62d66f941afacc1.js.map