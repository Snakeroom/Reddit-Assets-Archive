// https://www.redditstatic.com/desktop2x/ReportFlowNew.f5d2748e5e105b00aed2.js
// Retrieved at 3/2/2021, 1:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"3f853ad7861b"}')
		},
		"./src/graphql/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
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
				return _
			}));
			var r = o("./src/lib/makeActionCreator/index.ts"),
				n = o("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				s = o("./src/lib/makeGqlRequest/index.ts");
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
				_ = () => async (e, t, {
					gqlContext: o
				}) => {
					const r = t(),
						n = Object(d.a)(r);
					if (Object(d.b)(r) || n.timestamp && Date.now() - n.timestamp < 36e6) return;
					let s = !1,
						c = "";
					do {
						e(O());
						const t = {
								after: c,
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
									s = e, c = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = r.error ? r.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (s)
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			var r = o("./src/lib/loadableAction/index.ts");
			const n = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(r.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
				return _
			})), o.d(t, "a", (function() {
				return w
			})), o.d(t, "g", (function() {
				return k
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				d = o("./src/reddit/endpoints/accounts/index.ts"),
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(n.a)(l),
				b = Object(n.a)(u),
				h = Object(n.a)(p),
				f = e => async (t, o, {
					apiContext: n
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const a = await Object(d.a)(n(), e),
						l = `error-block-${e}`;
					if (a.ok) a.body.name && t(b(a.body)), a.body.id && t(Object(s.f)(a.body.id)), t(i.f(l)), t(i.e({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now blocked", [r.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: a.error ? a.error.type : "Unknown error",
							username: e
						};
						t(h(o)), t(i.e({
							id: l,
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
				}, O = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", C = Object(n.a)(O), R = Object(n.a)(_), j = Object(n.a)(w), k = e => async (t, o, {
					apiContext: n
				}) => {
					const l = o(),
						u = Object(a.i)(l),
						p = u ? u.id : void 0,
						m = l.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(C({
						name: e
					})), (await Object(d.c)(n(), p, e)).ok ? (t(R({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(i.e({
						kind: c.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.e({
						kind: c.b.Error,
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
				return s
			}));
			var r = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = o("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: n.b.overlayReportFlow
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
			o.r(t);
			var r = o("./src/config.ts"),
				n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/get.js"),
				i = o.n(s),
				d = o("./node_modules/react/index.js"),
				c = o.n(d),
				a = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				u = o("./src/reddit/actions/reportFlow/index.ts"),
				p = o("./src/reddit/actions/toaster.ts"),
				m = o("./src/reddit/components/CrisisFlow/index.tsx"),
				b = o("./src/reddit/components/FormBuilder/async.tsx"),
				h = o("./src/reddit/actions/userBlocks.ts"),
				f = o("./src/graphql/operations/ReportComment.json"),
				O = o("./src/lib/makeGqlRequest/index.ts");
			const _ = (e, t) => Object(O.a)(e, {
				...f,
				variables: t
			});
			var w = o("./src/graphql/operations/ReportPost.json");
			const C = (e, t) => Object(O.a)(e, {
				...w,
				variables: t
			});
			var R = o("./src/graphql/operations/ReportForm.json");
			var j = o("./src/reddit/contexts/ApiContext.tsx"),
				k = o("./src/reddit/models/Post/index.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				F = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				y = o("./src/reddit/selectors/commentSelector.ts"),
				g = o("./src/reddit/selectors/posts.ts"),
				v = o("./src/reddit/selectors/user.ts"),
				E = o("./src/lib/lessComponent.tsx"),
				I = o("./src/reddit/components/ReportFlow/index.m.less"),
				S = o.n(I);
			const A = E.a.div("ReportLoaderWrapper", S.a),
				L = E.a.img("LoadingIcon", S.a),
				D = "2.0",
				q = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(g.I)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(y.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const o = t && e.posts.models[t];
						return !!o && Object(k.n)(o)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: r,
							postId: n
						} = t, s = r ? Object(y.a)(e, {
							commentId: r
						}) : null, i = n ? Object(g.I)(e, {
							postId: n
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: v.U
				}),
				B = Object(a.b)(q, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(h.h)(t))
					},
					showFailToast: () => e(Object(p.e)({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				N = async (e, t, o, r) => {
					var n;
					const s = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: r
					}) => Object(O.a)(e, {
						...R,
						variables: {
							itemId: t,
							hostAppName: r,
							formVersion: o
						}
					}))(e, {
						itemId: t,
						formVersion: o,
						hostAppName: r
					});
					if (s && s.ok) {
						const e = null === (n = s.body.data.reportForm) || void 0 === n ? void 0 : n.form;
						return e ? JSON.parse(e) : null
					}
				};
			class U extends c.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== F.a.pending && this.props.onBlockUser(e)
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
								postId: r,
								commentId: n,
								showFailToast: s,
								hostAppName: d
							}
						} = this, c = n ? "comment" : r ? "post" : null;
						if (!c || !e) return;
						const {
							ruleId: a,
							ruleType: l,
							customRule: u
						} = e, p = {
							fromHelpDesk: !1,
							[`${c}Id`]: "comment" === c ? n : r,
							hostAppName: d
						};
						switch (l) {
							case "site":
								p.siteRule = i()(t, a.ref).value || i()(t, a.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, a.ref);
								"other" === e && u ? p.customRule = i()(t, u.ref) : p.subredditRule = e
						}
						let m;
						switch (c) {
							case "post":
								m = () => C(o(), {
									input: p
								});
								break;
							case "comment":
								m = () => _(o(), {
									input: p
								});
								break;
							default:
								return
						}(await m()).ok || s()
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
						gqlContext: e,
						postId: t,
						commentId: o,
						hostAppName: r
					} = this.props, n = o || t;
					N(e(), n, D, r).then(e => {
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
							commentId: e,
							postId: t,
							author: o,
							comment: n,
							post: s,
							isNightmodeOn: i
						},
						state: {
							formComponent: d,
							formState: a,
							ctlFlowOpened: l,
							hasLoaded: u
						}
					} = this, p = (e ? null == n ? void 0 : n.author : t ? null == s ? void 0 : s.author : null) || o;
					return l && p ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: p,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : d && a && u ? c.a.createElement(b.a, {
						formComponent: d,
						formState: a,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(p),
						onResize: this.props.onResize
					}) : c.a.createElement(A, null, c.a.createElement(L, {
						src: i ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(j.b)(B(U))
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
			var r = o("./node_modules/react/index.js"),
				n = o.n(r);

			function s() {
				return (s = Object.assign || function(e) {
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

			function c(e) {
				return t => n.a.createElement(d.Consumer, null, ({
					apiContext: o,
					gqlContext: r
				}) => n.a.createElement(e, s({
					apiContext: o,
					gqlContext: r
				}, t)))
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return c
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "e", (function() {
				return l
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			}));
			var r = o("./src/config.ts"),
				n = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts");
			const c = async (e, t) => Object(s.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: n.cb.POST
			}), a = async (e, t, o) => Object(s.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: n.cb.POST
			}), l = async (e, t) => Object(s.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: n.cb.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: n.cb.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [d.a]), {
				endpoint: `${r.a.oauthUrl}/user/${t}/about`,
				method: n.cb.GET,
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
				return n
			})), o.d(t, "c", (function() {
				return s
			}));
			const r = e => e.blockedRedditors.api.pending,
				n = e => e.blockedRedditors.list,
				s = (e, t) => {
					const o = (e => {
						const t = n(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.f5d2748e5e105b00aed2.js.map