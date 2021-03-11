// https://www.redditstatic.com/desktop2x/ReportFlowNew.56afa23920d016208b89.js
// Retrieved at 3/11/2021, 9:20:03 AM by Reddit Dataminer v1.0.0
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
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				a = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				p = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(r.a)(c),
				b = Object(r.a)(a),
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
				c = o("./src/reddit/models/Toast/index.ts"),
				a = o("./src/reddit/selectors/user.ts");
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
					const a = await Object(d.a)(s(), e),
						l = `error-block-${e}`;
					if (a.ok) a.body.name && t(b(a.body)), a.body.id && t(Object(n.f)(a.body.id)), t(i.f(l)), t(i.e({
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
				}, O = "USER_UNBLOCK__PENDING", _ = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", C = Object(s.a)(O), R = Object(s.a)(_), j = Object(s.a)(w), g = e => async (t, o, {
					apiContext: s
				}) => {
					const l = o(),
						p = Object(a.j)(l),
						u = p ? p.id : void 0,
						m = l.user.blocked.data.filter(t => t.name === e)[0];
					u && (t(C({
						name: e
					})), (await Object(d.c)(s(), u, e)).ok ? (t(R({
						name: e
					})), m && m.id && t(Object(n.h)(m.id)), t(i.e({
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
				return B
			}));
			var r = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/get.js"),
				i = o.n(n),
				d = o("./node_modules/react/index.js"),
				c = o.n(d),
				a = o("./node_modules/react-redux/es/index.js"),
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
			var w = o("./src/reddit/endpoints/messages/index.ts"),
				C = o("./src/graphql/operations/ReportPost.json");
			const R = (e, t) => Object(O.a)(e, {
				...C,
				variables: t
			});
			var j = o("./src/graphql/operations/ReportForm.json");
			var g = o("./src/reddit/contexts/ApiContext.tsx"),
				k = o("./src/reddit/models/Post/index.ts"),
				x = o("./src/reddit/models/Toast/index.ts"),
				y = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				F = o("./src/reddit/selectors/commentSelector.ts"),
				I = o("./src/reddit/selectors/posts.ts"),
				v = o("./src/reddit/selectors/user.ts"),
				E = o("./src/lib/lessComponent.tsx"),
				S = o("./src/reddit/components/ReportFlow/index.m.less"),
				A = o.n(S);
			const L = E.a.div("ReportLoaderWrapper", A.a),
				D = E.a.img("LoadingIcon", A.a),
				q = "2.0";
			var B;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(B || (B = {}));
			const N = Object(l.c)({
					post: (e, {
						postId: t
					}) => t ? Object(I.I)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(F.a)(e, {
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
							postId: s
						} = t, n = r ? Object(F.a)(e, {
							commentId: r
						}) : null, i = s ? Object(I.I)(e, {
							postId: s
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: v.V
				}),
				P = Object(a.b)(N, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(p.b)())
					},
					onBlockUser: t => {
						e(Object(h.h)(t))
					},
					showFailToast: () => e(Object(u.e)({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				U = async (e, t, o, r) => {
					var s;
					const n = await ((e, {
						itemId: t,
						formVersion: o,
						hostAppName: r
					}) => Object(O.a)(e, {
						...j,
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
					if (n && n.ok) {
						const e = null === (s = n.body.data.reportForm) || void 0 === s ? void 0 : s.form;
						return e ? JSON.parse(e) : null
					}
				};
			class T extends c.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let r, s, n;
						if (this.props.author && (n = this.props.author), t) r = t, s = B.Comment, this.props.comment && !n && (n = this.props.comment.author);
						else if (e) r = e, s = B.Post, this.props.post && !n && (n = this.props.post.author);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							r = o, s = B.Message
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
								showFailToast: r,
								hostAppName: s
							}
						} = this, {
							itemId: n,
							itemType: d
						} = this.getItemMetadata();
						if (!e) throw new Error("Report data not provided");
						const {
							ruleId: c,
							ruleType: a,
							customRule: l
						} = e, p = {
							fromHelpDesk: !1,
							hostAppName: s
						};
						switch (a) {
							case "site":
								p.siteRule = i()(t, c.ref).value || i()(t, c.ref);
								break;
							case "subreddit":
							default:
								const e = i()(t, c.ref);
								"other" === e && l ? p.customRule = i()(t, l.ref) : p.subredditRule = e
						}
						let u;
						switch (d) {
							case B.Post:
								const e = {
									postId: n,
									...p
								};
								u = () => R(o(), {
									input: e
								});
								break;
							case B.Comment:
								const t = {
									commentId: n,
									...p
								};
								u = () => _(o(), {
									input: t
								});
								break;
							case B.Message:
								const r = {
									messageId: n,
									...p
								};
								u = () => Object(w.a)(o(), {
									input: r
								});
								break;
							default:
								throw new Error("Unsupported item type provided")
						}(await u()).ok || r()
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
						gqlContext: t,
						hostAppName: o
					} = this.props;
					U(t(), e, q, o).then(e => {
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
					return s && i ? c.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: i,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : t && o && n ? c.a.createElement(b.a, {
						formComponent: t,
						formState: o,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(i),
						onResize: this.props.onResize
					}) : c.a.createElement(L, null, c.a.createElement(D, {
						src: e ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(g.b)(P(T))
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

			function c(e) {
				return t => s.a.createElement(d.Consumer, null, ({
					apiContext: o,
					gqlContext: r
				}) => s.a.createElement(e, n({
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
				return p
			})), o.d(t, "b", (function() {
				return u
			}));
			var r = o("./src/config.ts"),
				s = o("./src/lib/constants/index.ts"),
				n = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				d = o("./src/reddit/constants/headers.ts");
			const c = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.cb.POST
			}), a = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.cb.POST
			}), l = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.cb.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.cb.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: `${r.a.oauthUrl}/user/${t}/about`,
				method: s.cb.GET,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.56afa23920d016208b89.js.map