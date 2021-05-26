// https://www.redditstatic.com/desktop2x/ReportFlowNew.7a52ced3cb76d5d87dcf.js
// Retrieved at 5/26/2021, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"404920cc0308"}')
		},
		"./src/graphql/operations/ReportLiveStream.json": function(e) {
			e.exports = JSON.parse('{"id":"f401837d5e74"}')
		},
		"./src/graphql/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "e", (function() {
				return c
			})), o.d(t, "b", (function() {
				return l
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "h", (function() {
				return b
			})), o.d(t, "g", (function() {
				return _
			}));
			var r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				n = o("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(n.a)(e, {
				...s,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var d = o("./src/reddit/selectors/blockedRedditors.ts");
			const a = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				p = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(r.a)(a),
				b = Object(r.a)(c),
				h = Object(r.a)(l),
				f = Object(r.a)(p),
				O = Object(r.a)(u),
				_ = () => async (e, t, {
					gqlContext: o
				}) => {
					const r = t(),
						s = Object(d.a)(r);
					if (Object(d.b)(r) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let n = !1,
						a = "";
					do {
						e(O());
						const t = {
								after: a,
								pageSize: 100
							},
							r = await i(o(), t);
						if (r && r.ok) {
							const {
								data: {
									identity: t
								}
							} = r.body;
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
									n = e, a = t || ""
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
			const s = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return l
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "h", (function() {
				return f
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "g", (function() {
				return g
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				a = o("./src/reddit/models/Toast/index.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				p = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				m = Object(s.a)(l),
				b = Object(s.a)(p),
				h = Object(s.a)(u),
				f = e => async (t, o, {
					apiContext: s
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const c = await Object(d.a)(s(), e),
						l = `error-block-${e}`;
					if (c.ok) c.body.name && t(b(c.body)), c.body.id && t(Object(n.f)(c.body.id)), t(i.g(l)), t(i.f({
						kind: a.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: c.error ? c.error.type : "Unknown error",
							username: e
						};
						t(h(o)), t(i.f({
							id: l,
							kind: a.b.Error,
							text: r.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: r.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", C = Object(s.a)(O), R = Object(s.a)(_), j = Object(s.a)(w), g = e => async (t, o, {
					apiContext: s
				}) => {
					const l = o(),
						p = Object(c.j)(l),
						u = p ? p.id : void 0,
						m = l.user.blocked.data.filter(t => t.name === e)[0];
					u && (t(C({
						name: e
					})), (await Object(d.c)(s(), u, e)).ok ? (t(R({
						name: e
					})), m && m.id && t(Object(n.h)(m.id)), t(i.f({
						kind: a.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: a.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
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
			var r = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = o("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: s.b.overlayReportFlow
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
				importAsync: () => Promise.all([o.e("vendors~reddit-components-FormBuilder"), o.e("reddit-components-FormBuilder")]).then(o.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
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
				return T
			}));
			var r = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/get.js"),
				i = o.n(n),
				d = o("./node_modules/react/index.js"),
				a = o.n(d),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				p = o("./src/reddit/actions/reportFlow/index.ts"),
				u = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				b = o("./src/reddit/components/FormBuilder/async.tsx"),
				h = o("./src/reddit/actions/userBlocks.ts"),
				f = o("./src/graphql/operations/ReportComment.json"),
				O = o("./src/lib/makeGqlRequest/index.ts");
			const _ = (e, t) => Object(O.a)(e, {
				...f,
				variables: t
			});
			var w = o("./src/graphql/operations/ReportLiveStream.json");
			const C = (e, t) => Object(O.a)(e, {
				...w,
				variables: t
			});
			var R = o("./src/reddit/endpoints/messages/index.ts"),
				j = o("./src/graphql/operations/ReportPost.json");
			const g = (e, t) => Object(O.a)(e, {
				...j,
				variables: t
			});
			var x = o("./src/graphql/operations/ReportForm.json");
			var k = o("./src/reddit/contexts/ApiContext.tsx"),
				y = o("./src/reddit/models/Post/index.ts"),
				F = o("./src/reddit/models/Toast/index.ts"),
				v = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				I = o("./src/reddit/selectors/commentSelector.ts"),
				E = o("./src/reddit/selectors/meta.ts"),
				S = o("./src/reddit/selectors/posts.ts"),
				A = o("./src/reddit/selectors/user.ts"),
				L = o("./src/lib/lessComponent.tsx"),
				q = o("./src/reddit/components/ReportFlow/index.m.less"),
				D = o.n(q);
			const N = L.a.div("ReportLoaderWrapper", D.a),
				B = L.a.img("LoadingIcon", D.a),
				P = "2.0";
			var T;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(T || (T = {}));
			const U = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(S.F)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(I.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(y.o)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: r,
							postId: s
						} = t, n = r ? Object(I.a)(e, {
							commentId: r
						}) : null, i = s ? Object(S.F)(e, {
							postId: s
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: A.W,
					locale: E.i
				}),
				K = Object(c.b)(U, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(p.b)())
					},
					onBlockUser: t => {
						e(Object(h.h)(t))
					},
					showFailToast: () => e(Object(u.f)({
						kind: F.b.Error,
						text: s.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				M = async (e, t, o, r, s) => {
					var n;
					const i = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: r,
						locale: s
					}) => Object(O.a)(e, {
						...x,
						variables: {
							itemId: t,
							hostAppName: r,
							formVersion: o,
							locale: s
						}
					}))(e, {
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
			class $ extends a.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let r, s, n;
						if (this.props.author && (n = this.props.author), t) r = t, s = T.Comment, this.props.comment && !n && (n = this.props.comment.author);
						else if (e) r = e, s = T.Post, this.props.post && !n && (n = this.props.post.author);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							r = o, s = T.Message
						}
						return {
							itemId: r,
							itemType: s,
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
						t.new !== v.a.pending && this.props.onBlockUser(e)
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
								showFailToast: r,
								hostAppName: s,
								isLiveStreaming: n,
								timestamp: d
							}
						} = this, {
							itemId: a,
							itemType: c
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: l,
							ruleType: p,
							customRule: u
						} = e, m = {
							fromHelpDesk: !1,
							hostAppName: s
						};
						switch (p) {
							case "site":
								m.siteRule = i()(t, l.ref).value || i()(t, l.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, l.ref);
								"other" === e && u ? m.customRule = i()(t, u.ref) : m.subredditRule = e
						}
						let b;
						switch (c) {
							case T.Post:
								if (n && d) {
									const e = {
										postId: a,
										relativeReportTimeSec: d,
										...m
									};
									b = () => C(o(), {
										input: e
									});
									break
								}
								const e = {
									postId: a,
									...m
								};
								b = () => g(o(), {
									input: e
								});
								break;
							case T.Comment:
								const t = {
									commentId: a,
									...m
								};
								b = () => _(o(), {
									input: t
								});
								break;
							case T.Message:
								const r = {
									messageId: a,
									...m
								};
								b = () => Object(R.a)(o(), {
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
						gqlContext: o,
						hostAppName: r
					} = this.props;
					M(o(), e, P, r, t).then(e => {
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
							ctlFlowOpened: s,
							hasLoaded: n
						}
					} = this, {
						itemAuthor: i
					} = this.getItemMetadata();
					return s && i ? a.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: i,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && o && n ? a.a.createElement(b.a, {
						formComponent: t,
						formState: o,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(i),
						onResize: this.props.onResize
					}) : a.a.createElement(N, null, a.a.createElement(B, {
						src: e ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(k.b)(K($))
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
				return a
			}));
			var r = o("./node_modules/react/index.js"),
				s = o.n(r);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
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
				d = Object(r.createContext)(i);

			function a(e) {
				const t = t => s.a.createElement(d.Consumer, null, ({
					apiContext: o,
					gqlContext: r
				}) => s.a.createElement(e, n({
					apiContext: o,
					gqlContext: r
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "b", (function() {
				return m
			}));
			var r = o("./src/config.ts"),
				s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts"),
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const c = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.eb.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.eb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.eb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.eb.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(a.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.eb.GET,
				data: {
					raw_json: 1
				}
			})
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
			const r = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				n = (e, t) => {
					const o = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.7a52ced3cb76d5d87dcf.js.map