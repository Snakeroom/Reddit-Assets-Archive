// https://www.redditstatic.com/desktop2x/ReportFlowNew.c13971f3b3ebc0bb7c7c.js
// Retrieved at 3/1/2021, 12:20:19 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"00a0574acf92"}')
		},
		"./src/graphql/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
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
			var n = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				s = o("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var c = o("./src/reddit/selectors/blockedRedditors.ts");
			const d = "BLOCKED_REDDITORS_LIST__ADD",
				a = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(n.a)(d),
				b = Object(n.a)(a),
				h = Object(n.a)(l),
				f = Object(n.a)(u),
				O = Object(n.a)(p),
				_ = () => async (e, t, {
					gqlContext: o
				}) => {
					const n = t(),
						r = Object(c.a)(n);
					if (Object(c.b)(n) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let s = !1,
						d = "";
					do {
						e(O());
						const t = {
								after: d,
								pageSize: 100
							},
							n = await i(o(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: o,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(f(n.map(e => e.node.id))), o) {
									const {
										hasNextPage: e,
										endCursor: t
									} = o;
									s = e, d = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = n.error ? n.error.type : "unknown error";
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
				return r
			})), o.d(t, "c", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			}));
			var n = o("./src/lib/loadableAction/index.ts");
			const r = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				i = Object(n.a)(() => o.e("ReportFlow").then(o.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				r = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				c = o("./src/reddit/endpoints/accounts/index.ts"),
				d = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(l),
				b = Object(r.a)(u),
				h = Object(r.a)(p),
				f = e => async (t, o, {
					apiContext: r
				}) => {
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const a = await Object(c.a)(r(), e),
						l = `error-block-${e}`;
					if (a.ok) a.body.name && t(b(a.body)), a.body.id && t(Object(s.f)(a.body.id)), t(i.f(l)), t(i.e({
						kind: d.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
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
							kind: d.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", C = Object(r.a)(O), R = Object(r.a)(_), j = Object(r.a)(w), k = e => async (t, o, {
					apiContext: r
				}) => {
					const l = o(),
						u = Object(a.i)(l),
						p = u ? u.id : void 0,
						m = l.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(C({
						name: e
					})), (await Object(c.c)(r(), p, e)).ok ? (t(R({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(i.e({
						kind: d.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.e({
						kind: d.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
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
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = o("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: r.b.overlayReportFlow
			};
			t.b = Object(n.a)({
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
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
			var n = o("./src/config.ts"),
				r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/get.js"),
				i = o.n(s),
				c = o("./node_modules/react/index.js"),
				d = o.n(c),
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
				D = Object(l.c)({
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
							commentId: n,
							postId: r
						} = t, s = n ? Object(y.a)(e, {
							commentId: n
						}) : null, i = r ? Object(g.I)(e, {
							postId: r
						}) : null;
						(s ? s.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: v.U
				}),
				q = Object(a.b)(D, (e, {
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
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				B = async (e, t, o) => {
					var n;
					const r = await ((e, {
						itemId: t,
						hostAppName: o
					}) => Object(O.a)(e, {
						...R,
						variables: {
							itemId: t,
							hostAppName: o
						}
					}))(e, {
						itemId: t,
						hostAppName: o
					});
					if (r && r.ok) {
						const e = null === (n = r.body.data.reportForm) || void 0 === n ? void 0 : n.form;
						return e ? JSON.parse(e) : null
					}
				};
			class N extends d.a.Component {
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
								postId: n,
								commentId: r,
								showFailToast: s,
								hostAppName: c
							}
						} = this, d = r ? "comment" : n ? "post" : null;
						if (!d || !e) return;
						const {
							ruleId: a,
							ruleType: l,
							customRule: u
						} = e, p = {
							fromHelpDesk: !1,
							[`${d}Id`]: "comment" === d ? r : n,
							hostAppName: c
						};
						switch (l) {
							case "site":
								p.siteRule = i()(t, a.ref).value || i()(t, a.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, a.ref);
								if ("other" === e && u) {
									const e = i()(t, u.ref);
									p.customRule = e.value
								} else p.subredditRule = e
						}
						let m;
						switch (d) {
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
						hostAppName: n
					} = this.props, r = o || t;
					B(e(), r, n).then(e => {
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
							comment: r,
							post: s,
							isNightmodeOn: i
						},
						state: {
							formComponent: c,
							formState: a,
							ctlFlowOpened: l,
							hasLoaded: u
						}
					} = this, p = (e ? null == r ? void 0 : r.author : t ? null == s ? void 0 : s.author : null) || o;
					return l && p ? d.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: p,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : c && a && u ? d.a.createElement(b.a, {
						formComponent: c,
						formState: a,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(p),
						onResize: this.props.onResize
					}) : d.a.createElement(A, null, d.a.createElement(L, {
						src: i ? `${n.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${n.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(j.b)(q(N))
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
				return c
			})), o.d(t, "b", (function() {
				return d
			}));
			var n = o("./node_modules/react/index.js"),
				r = o.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
				c = Object(n.createContext)(i);

			function d(e) {
				return t => r.a.createElement(c.Consumer, null, ({
					apiContext: o,
					gqlContext: n
				}) => r.a.createElement(e, s({
					apiContext: o,
					gqlContext: n
				}, t)))
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			})), o.d(t, "c", (function() {
				return a
			})), o.d(t, "e", (function() {
				return l
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			}));
			var n = o("./src/config.ts"),
				r = o("./src/lib/constants/index.ts"),
				s = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				c = o("./src/reddit/constants/headers.ts");
			const d = async (e, t) => Object(s.a)(Object(i.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.cb.POST
			}), a = async (e, t, o) => Object(s.a)(Object(i.a)(e, [c.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.cb.POST
			}), l = async (e, t) => Object(s.a)(Object(i.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.cb.POST
			}), u = async (e, t) => Object(s.a)(Object(i.a)(e, [c.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.cb.POST
			}), p = async (e, t) => Object(s.a)(Object(i.a)(e, [c.a]), {
				endpoint: `${n.a.oauthUrl}/user/${t}/about`,
				method: r.cb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, o) {
			"use strict";
			var n;
			o.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(n || (n = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return n
			})), o.d(t, "a", (function() {
				return r
			})), o.d(t, "c", (function() {
				return s
			}));
			const n = e => e.blockedRedditors.api.pending,
				r = e => e.blockedRedditors.list,
				s = (e, t) => {
					const o = (e => {
						const t = r(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.c13971f3b3ebc0bb7c7c.js.map