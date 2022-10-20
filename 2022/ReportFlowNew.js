// https://www.redditstatic.com/desktop2x/ReportFlowNew.1b4da91973bb8385f85e.js
// Retrieved at 10/20/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlowNew"], {
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "e", (function() {
				return c
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
			const a = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(r.a)(a),
				b = Object(r.a)(c),
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
					let a = !1,
						c = "";
					do {
						e(O());
						const t = {
								after: c,
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
									a = e, c = t || ""
								}
							} else a = !1
						} else {
							a = !1;
							const t = o.error ? o.error.type : "unknown error";
							e(h({
								message: t
							}))
						}
					} while (a)
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
				return _
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
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(s.a)(l),
				b = Object(s.a)(u),
				h = Object(s.a)(p),
				f = e => async (t, o, s) => {
					let {
						apiContext: c
					} = s;
					var l;
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const u = await Object(d.a)(c(), e),
						p = `error-block-${e}`;
					if (u.ok) u.body.name && t(b(u.body)), u.body.id && t(Object(n.f)(u.body.id)), t(i.g(p)), t(i.f({
						kind: a.b.SuccessCommunity,
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
							kind: a.b.Error,
							text: r.fbt._("You can't block u/{username} for 24 hours after unblocking them", [r.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: f(e)
						})) : t(i.f({
							id: p,
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
				}, O = "USER_UNBLOCK__PENDING", R = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", w = Object(s.a)(O), j = Object(s.a)(R), v = Object(s.a)(_), g = e => async (t, o, s) => {
					let {
						apiContext: l
					} = s;
					const u = o(),
						p = Object(c.k)(u),
						m = p ? p.id : void 0,
						b = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(w({
						name: e
					})), (await Object(d.c)(l(), m, e)).ok ? (t(j({
						name: e
					})), b && b.id && t(Object(n.h)(b.id)), t(i.f({
						kind: a.b.SuccessCommunity,
						text: r.fbt._("{username} is now unblocked", [r.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.f({
						kind: a.b.Error,
						text: r.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(v({
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
				return Y
			}));
			var r = o("./src/config.ts"),
				s = o("./node_modules/fbt/lib/FbtPublic.js"),
				n = o("./node_modules/lodash/get.js"),
				i = o.n(n),
				d = o("./node_modules/react/index.js"),
				a = o.n(d),
				c = o("./node_modules/react-redux/es/index.js"),
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
					...h.o(t)
				}),
				R = e => t => ({
					source: "report_modal",
					action: f.d.Click,
					noun: "comment",
					comment: h.h(t, e),
					media: {
						mimetype: h.j(t, e)
					},
					...h.o(t)
				});
			var _ = o("./src/reddit/components/FormBuilder/async.tsx"),
				w = o("./src/reddit/actions/userBlocks.ts"),
				j = o("./src/lib/makeGqlRequest/index.ts"),
				v = o("./src/redditGQL/operations/ReportComment.json");
			const g = (e, t) => Object(j.a)(e, {
				...v,
				variables: t
			});
			var x = o("./src/redditGQL/operations/ReportLiveStream.json");
			const k = (e, t) => Object(j.a)(e, {
				...x,
				variables: t
			});
			var S = o("./src/reddit/endpoints/messages/index.ts"),
				L = o("./src/reddit/endpoints/post/report.ts"),
				y = o("./src/redditGQL/operations/ReportForm.json");
			var C = o("./src/reddit/endpoints/talk/index.ts"),
				A = o("./src/reddit/contexts/ApiContext.tsx"),
				E = o("./src/reddit/models/Post/index.ts"),
				I = o("./src/reddit/models/Toast/index.ts"),
				F = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				P = o("./src/reddit/selectors/commentSelector.ts"),
				T = o("./src/reddit/constants/experiments.ts"),
				G = o("./src/reddit/helpers/chooseVariant/index.ts");
			const N = Object(l.a)(e => Object(G.c)(e, {
					experimentName: T.Jc,
					experimentEligibilitySelector: G.a
				}), e => e),
				B = Object(l.a)(N, e => e === T.Rd);
			var U = o("./src/reddit/selectors/meta.ts"),
				q = o("./src/reddit/selectors/posts.ts"),
				D = o("./src/reddit/selectors/user.ts"),
				$ = o("./src/lib/lessComponent.tsx"),
				Q = o("./src/reddit/components/ReportFlow/index.m.less"),
				J = o.n(Q);
			const K = $.a.div("ReportLoaderWrapper", J.a),
				M = $.a.img("LoadingIcon", J.a),
				H = "2.1";
			var Y;
			! function(e) {
				e.Post = "post", e.Comment = "comment", e.Message = "message"
			}(Y || (Y = {}));
			const z = Object(l.c)({
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(q.G)(e, {
							postId: o
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(P.b)(e, {
							commentId: o
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: o
						} = t;
						const r = o && e.posts.models[o];
						return !!r && Object(E.r)(r)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: r,
							postId: s
						} = t, n = r ? Object(P.b)(e, {
							commentId: r
						}) : null, i = s ? Object(q.G)(e, {
							postId: s
						}) : null;
						(n ? n.author : i ? i.author : null) || t.author;
						o.name
					}),
					isNightmodeOn: D.db,
					locale: U.j,
					isReportAnAdEnabled: B
				}),
				W = Object(c.b)(z, (e, t) => {
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
							kind: I.b.Error,
							text: s.fbt._("Something went wrong!", null, {
								hk: "1BEFhz"
							})
						}))
					}
				}),
				V = async (e, t, o, r, s) => {
					var n;
					const i = await ((e, t) => {
						let {
							itemId: o,
							formVersion: r,
							hostAppName: s,
							locale: n
						} = t;
						return Object(j.a)(e, {
							...y,
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
			class X extends a.a.Component {
				constructor(e) {
					super(e), this.getItemMetadata = () => {
						const {
							postId: e,
							commentId: t,
							messageId: o
						} = this.props;
						let r, s, n, i;
						if (this.props.author && (n = this.props.author), t) r = t, s = Y.Comment, this.props.comment && !n && (n = this.props.comment.author, i = this.props.comment.authorId);
						else if (e) r = e, s = Y.Post, this.props.post && !n && (n = this.props.post.author, i = this.props.post.authorId);
						else {
							if (!o) throw new Error("Invalid object type passed to reporting flow");
							r = o, s = Y.Message
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
						o.new !== F.a.pending && (this.props.onBlockUser(e), r(O(t)))
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
								timestamp: a
							}
						} = this, {
							itemId: c,
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
							case Y.Post:
								if (null === (o = this.props.post) || void 0 === o ? void 0 : o.audioRoom) {
									const e = new URLSearchParams(window.location.href),
										t = parseInt(e.get("reportedTimeInSeconds") || "0", 10),
										o = {
											reportedAt: isNaN(t) ? 0 : t,
											postId: c,
											...b
										};
									h = () => Object(C.k)(r(), {
										input: o
									});
									break
								}
								if (d && a) {
									const e = {
										postId: c,
										relativeReportTimeSec: a,
										...b
									};
									h = () => k(r(), {
										input: e
									});
									break
								}
								const e = {
									postId: c,
									...b
								};
								h = () => Object(L.d)(r(), {
									input: e
								});
								break;
							case Y.Comment:
								const t = {
									commentId: c,
									...b
								};
								h = () => (this.props.sendEvent(R(c)), g(r(), {
									input: t
								}));
								break;
							case Y.Message:
								const s = {
									messageId: c,
									...b
								};
								h = () => Object(S.a)(r(), {
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
					V(o(), e, H, r, t).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state,
							hasLoaded: !0
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					var e;
					const {
						props: {
							isNightmodeOn: t,
							postId: o,
							commentId: n,
							messageId: i,
							isReportAnAdEnabled: d
						},
						state: {
							formComponent: c,
							formState: l,
							ctlFlowOpened: u,
							hasLoaded: p
						}
					} = this, b = d && (null === (e = this.props.post) || void 0 === e ? void 0 : e.isSponsored) ? s.fbt._("Report Ad", null, {
						hk: "4ncCdo"
					}) : s.fbt._("Submit a Report", null, {
						hk: "1v59vx"
					}), {
						itemAuthor: h,
						itemAuthorId: f
					} = this.getItemMetadata(), O = n || o || i;
					return u && h ? a.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						username: h,
						fromUserProfile: !O,
						onCloseCrisisModal: this.handleReportFlowClose,
						thingId: O
					}) : c && l && p ? a.a.createElement(_.a, {
						formComponent: c,
						formState: l,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: b,
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(h, f),
						onResize: this.props.onResize
					}) : a.a.createElement(K, null, a.a.createElement(M, {
						src: t ? `${r.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${r.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: s.fbt._("Loading", null, {
							hk: "wiY7"
						})
					}))
				}
			}
			t.default = Object(A.b)(W(Object(b.c)(X)))
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
				return c
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
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const c = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.ob.POST
			}), l = async (e, t, o) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.ob.POST
			}), u = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.ob.POST
			}), p = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.ob.POST
			}), m = async (e, t) => Object(n.a)(Object(i.a)(e, [d.a]), {
				endpoint: Object(a.a)(`${r.a.oauthUrl}/user/${t}/about`),
				method: s.ob.GET,
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
				a = o("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = o("./src/reddit/helpers/reportPage/index.ts"),
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
					method: r.ob.POST,
					endpoint: Object(a.a)(`${e.apiUrl}/api/report`),
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
					method: r.ob.POST,
					endpoint: Object(a.a)(`${e.apiUrl}/api/report`),
					data: f(t, o)
				}),
				f = (e, t) => {
					const o = {
						...Object(c.b)(e),
						api_type: "json"
					};
					return t && (o.from_help_desk = !0), o
				}
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "k", (function() {
				return R
			})), o.d(t, "g", (function() {
				return _
			})), o.d(t, "f", (function() {
				return w
			})), o.d(t, "e", (function() {
				return j
			})), o.d(t, "c", (function() {
				return v
			})), o.d(t, "j", (function() {
				return g
			})), o.d(t, "d", (function() {
				return x
			})), o.d(t, "h", (function() {
				return k
			})), o.d(t, "a", (function() {
				return S
			})), o.d(t, "i", (function() {
				return L
			})), o.d(t, "b", (function() {
				return y
			})), o.d(t, "l", (function() {
				return C
			}));
			var r = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/uuid/dist/esm-browser/v4.js"),
				n = o("./src/lib/makeGqlRequest/index.ts"),
				i = o("./src/lib/makeRequest/index.ts"),
				d = o("./src/reddit/models/Subreddit/index.ts"),
				a = o("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"),
				c = o("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"),
				l = o("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"),
				u = o("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json"),
				p = o("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				m = o("./src/redditGQL/operations/PrepareLiveAudioRoom.json"),
				b = o("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"),
				h = o("./src/redditGQL/operations/ReportTalk.json"),
				f = o("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				O = o("./src/redditGQL/types.ts");
			const R = (e, t) => Object(n.a)(e, {
					...h,
					variables: t
				}),
				_ = async (e, t) => {
					const o = await Object(n.a)(e, {
						...u,
						variables: t
					});
					return !!Object(i.c)(o) && (o.body.data.subredditInfoById.allowedPostTypes || []).includes(O.H.Talk)
				}, w = async (e, t) => {
					var o, r;
					const s = await Object(n.a)(e, {
						...p,
						variables: t
					});
					return !!Object(i.c)(s) && (null !== (r = null === (o = s.body.data.profileByName) || void 0 === o ? void 0 : o.allowedPostTypes) && void 0 !== r ? r : []).includes(O.H.Talk)
				}, j = async e => {
					var t;
					const o = await Object(n.a)(e, l);
					return Object(i.c)(o) && null !== (t = o.body.data.availableAudioRoomTopics) && void 0 !== t ? t : []
				}, v = (e, t, o) => t.type === d.g.User ? Object(n.a)(e, {
					...a,
					variables: o
				}) : Object(n.a)(e, {
					...c,
					variables: {
						...o,
						subredditId: t.id
					}
				}), g = (e, t, o) => t.type === d.g.User ? Object(n.a)(e, {
					...b,
					variables: {
						input: o
					}
				}) : Object(n.a)(e, {
					...m,
					variables: {
						input: {
							...o,
							subredditId: t.id
						}
					}
				}), x = () => Object(s.a)(), k = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, S = {
					[O.j.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[O.j.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[O.j.RoomLimitExceeded]: r.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[O.j.ConcurrentRoomLimitExceeded]: r.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[O.j.SubredditRoomLimitExceeded]: r.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, L = e => e.data.prepareAudioRoom || e.data.prepareAudioRoomOnProfile, y = {
					[O.J.ServiceError]: r.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[O.J.UserNotAuthorized]: r.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					})
				}, C = (e, t) => Object(n.a)(e, {
					...f,
					variables: t
				})
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
				a = `^${n}${s}/message/messages/(\\w+)(?:/.*)?`,
				c = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				l = `^${n}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${n}${s}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				p = `(?:${d}|${i}|${a}|${c}|${l}|${u})`,
				m = `(?:(?:${n}?${s}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				b = `(?:(?:${n}?${s}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				h = e => {
					const t = new RegExp(i),
						o = new RegExp(d),
						r = new RegExp(a),
						s = new RegExp(u),
						n = new RegExp(c),
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
						_ = new RegExp(b),
						w = [];
					let j;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (_.test(t)) {
							const e = _.exec(t);
							e && e.length > 1 && (j = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let i = 0; i < e.usernames.length; i++) {
							const t = e.usernames[i].trim();
							if (R.test(t)) {
								const e = R.exec(t);
								e && e.length > 1 && w.push(e[1])
							}
						}
					const {
						reason: v
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: v.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: O,
						sr_name: j,
						thing_id: h,
						usernames: w.length ? w.join(",") : void 0
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
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
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
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlowNew.1b4da91973bb8385f85e.js.map