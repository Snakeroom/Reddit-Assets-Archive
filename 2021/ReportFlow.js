// https://www.redditstatic.com/desktop2x/ReportFlow.0929dd559541e0cd377c.js
// Retrieved at 3/2/2021, 2:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow", "ReportFlowNew"], {
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
		"./src/lib/formatPythonString/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const o = /%\((\w+)\)s/g;

			function r(e, t) {
				return e.replace(o, (function(e, n) {
					return n in t ? t[n] : e
				}))
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "g", (function() {
				return R
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = (e, t) => Object(s.a)(e, {
				...r,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = n("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				c = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(l),
				h = Object(o.a)(d),
				b = Object(o.a)(c),
				f = Object(o.a)(u),
				x = Object(o.a)(p),
				R = () => async (e, t, {
					gqlContext: n
				}) => {
					const o = t(),
						r = Object(i.a)(o);
					if (Object(i.b)(o) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let s = !1,
						l = "";
					do {
						e(x());
						const t = {
								after: l,
								pageSize: 100
							},
							o = await a(n(), t);
						if (o && o.ok) {
							const {
								data: {
									identity: t
								}
							} = o.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: n,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(f(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									s = e, l = t || ""
								}
							} else s = !1
						} else {
							s = !1;
							const t = o.error ? o.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (s)
				}
		},
		"./src/reddit/actions/reportFlow/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			const o = "REPORT__PENDING",
				r = "REPORT__LOADED",
				s = "REPORT__FAILED",
				a = "REPORT_FLOW__TARGET_SET",
				i = "REPORT_FLOW__OPENED_FROM_MODAL_PAGE",
				l = "REPORT_FLOW__OPEN_CATEGORY",
				d = "REPORT_FLOW__USER_IS_MOD_SET"
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var o = n("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				s = Object(o.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => n.e("ReportFlow").then(n.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/reportFlow/reportFlow.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "postOrCommentReported", (function() {
				return D
			})), n.d(t, "reportFlowTargetSet", (function() {
				return M
			})), n.d(t, "reportFlowOpenedFromModalPage", (function() {
				return U
			})), n.d(t, "reportFlowOpenCategory", (function() {
				return B
			})), n.d(t, "reportFlowOpened", (function() {
				return H
			})), n.d(t, "reportFlowClosed", (function() {
				return G
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/reportRules.ts"),
				l = n("./src/reddit/actions/subreddit.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/actions/users.ts"),
				u = n("./src/reddit/endpoints/moderator/moderatingSubreddits.ts"),
				p = n("./src/reddit/endpoints/post/index.tsx"),
				m = n("./src/reddit/helpers/isComment.ts"),
				h = n("./src/reddit/helpers/isPost.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				R = n("./src/reddit/selectors/user.ts"),
				C = n("./src/lib/initializeClient/installReducer.ts"),
				_ = n("./node_modules/redux/es/redux.js"),
				O = n("./src/reddit/actions/reportFlow/constants.ts");
			const w = {};
			var E = (e = w, t) => {
				switch (t.type) {
					case O.e:
					case O.d: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case O.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case O.f: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: !1
						} : e
					}
					default:
						return e
				}
			};
			const S = {};
			var g = (e = S, t) => {
				switch (t.type) {
					case O.e: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					case O.d:
					case O.c: {
						const {
							id: n
						} = t.payload;
						return {
							...e,
							[n]: !1
						}
					}
					case O.f: {
						const n = t.payload;
						return n ? {
							...e,
							[n]: !1
						} : e
					}
					default:
						return e
				}
			};
			const v = {};
			var T = (e = v, t) => {
					switch (t.type) {
						case O.d: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case O.e:
						case O.c: {
							const {
								id: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						case O.f: {
							const n = t.payload;
							return n ? {
								...e,
								[n]: !1
							} : e
						}
						default:
							return e
					}
				},
				y = Object(_.c)({
					error: E,
					pending: g,
					success: T
				}),
				I = n("./src/reddit/actions/platform.ts");
			var F = (e = !1, t) => {
				switch (t.type) {
					case O.a:
						return t.payload;
					case a.c:
						return !t.payload && e;
					case I.a:
						return !1;
					case O.f:
						return !!t.payload && e;
					default:
						return e
				}
			};
			var k = (e = null, t) => {
				switch (t.type) {
					case O.f:
						return t.payload;
					case a.c:
						return t.payload ? null : e;
					case I.a:
						return null;
					default:
						return e
				}
			};
			var N = (e = !1, t) => {
				switch (t.type) {
					case O.g:
						return t.payload;
					case O.f:
						return !1;
					default:
						return e
				}
			};
			var j = Object(_.c)({
				api: y,
				openedFromModalPage: F,
				postOrCommentId: k,
				userIsMod: N,
				rulesCategory: (e = null, t) => {
					switch (t.type) {
						case O.b:
							return t.payload
					}
					return e
				}
			});
			Object(C.a)({
				features: {
					reportFlow: j
				}
			});
			const A = Object(r.a)(O.e),
				P = Object(r.a)(O.d),
				L = Object(r.a)(O.c),
				D = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const a = e.id,
						i = r(),
						l = i.features.reportFlow.api.pending[a],
						c = i.features.reportFlow.userIsMod;
					if (l) return;
					n(A({
						id: a
					}));
					const u = await Object(p.n)(s(), e),
						m = `error-report-${a}`;
					if (u.ok) n(P({
						id: a
					})), n(d.f(m)), !t.isAbuseOfReportButton && c && n(G());
					else {
						n(L({
							id: a
						}));
						const r = u.error && u.error.fields && u.error.fields.length ? u.error.fields[0].msg : "";
						n(d.e({
							id: m,
							kind: f.b.Error,
							text: r || o.fbt._("Give us a few minutes to fix the problem. Sorry!", null, {
								hk: "3wBPeO"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "1QXiG6"
							}),
							buttonAction: D(e, t)
						}))
					}
				}, M = Object(r.a)(O.f), U = Object(r.a)(O.a), B = Object(r.a)(O.b), H = (e, t, n) => async (o, r, {
					apiContext: d
				}) => {
					const u = r(),
						p = Object(m.a)(e),
						f = Object(h.a)(e);
					if (!f && !p) return;
					const C = p ? u.features.comments.models[e] : u.posts.models[e];
					if (!C) return;
					if (!Object(R.J)(r())) return o(Object(s.j)()), void o(Object(a.k)({
						actionSource: a.a.Report,
						redirectUrl: C.permalink
					}));
					o(Object(c.y)(C.author));
					const _ = Object(x.U)(u, {
							postId: p ? u.features.comments.models[e].postId : u.posts.models[e].id
						}),
						O = f && Object(b.n)(C) || p && W(C, u);
					O || u.reportRules.sitewideRules && u.reportRules.sitewideRules.length || o(Object(i.d)()), !O || u.reportRules.liveStreamingRules && u.reportRules.liveStreamingRules.length || o(Object(i.c)()), _ && o(Object(l.o)(_.name, _.type)), o(M(e)), o(U(!!t)), n && o(B(n)), _ && o(K(_.name))
				}, q = Object(r.a)(O.g), K = e => async (t, n, {
					apiContext: o
				}) => {
					const r = await Object(u.a)(o());
					t(q(r.ok && !!r.body[e]))
				}, G = () => async (e, t, {
					apiContext: n
				}) => {
					e(M(null))
				}, W = (e, t) => {
					const n = e.postId,
						o = n && t.posts.models[n];
					return !!o && Object(b.n)(o)
				}
		},
		"./src/reddit/actions/reportRules.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			const d = "SITEWIDE_RULES_LOADED",
				c = "LIVESTREAMING_RULES_LOADED",
				u = Object(r.a)(d),
				p = Object(r.a)(c),
				m = () => async (e, t, {
					apiContext: n
				}) => {
					if (!t().user) return;
					const o = await (e => Object(a.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/sitewide_rules.json`,
						method: s.cb.GET
					}))(n());
					if (o.ok) {
						const t = o.body,
							n = b(t.sitewide_rules);
						e(u(n))
					}
				}, h = () => async (e, t, {
					apiContext: n
				}) => {
					if (!t().user) return;
					const o = await (e => Object(a.a)(Object(i.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/livestream_rules.json`,
						method: s.cb.GET
					}))(n());
					if (o.ok) {
						const t = o.body,
							n = b(t.livestream_rules);
						e(p(n))
					}
				}, b = e => {
					let t = [];
					if (e && e.length > 2) {
						const n = {
							reasonTextToShow: o.fbt._("It's spam or abuse", null, {
								hk: "21rHqk"
							}),
							nextStepReasons: [e[0], e[1], e[2]]
						};
						4 === e.length && n.nextStepReasons && n.nextStepReasons.push(e[3]), t.push(n), t = t.concat(e.slice(e.length - 1))
					}
					return t
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/blockedRedditors.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const c = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(r.a)(c),
				h = Object(r.a)(u),
				b = Object(r.a)(p),
				f = e => async (t, n, {
					apiContext: r
				}) => {
					if (n().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const d = await Object(i.a)(r(), e),
						c = `error-block-${e}`;
					if (d.ok) d.body.name && t(h(d.body)), d.body.id && t(Object(s.f)(d.body.id)), t(a.f(c)), t(a.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: d.error ? d.error.type : "Unknown error",
							username: e
						};
						t(b(n)), t(a.e({
							id: c,
							kind: l.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: f(e)
						}))
					}
				}, x = "USER_UNBLOCK__PENDING", R = "USER_UNBLOCK__SUCCESS", C = "USER_UNBLOCK__FAILED", _ = Object(r.a)(x), O = Object(r.a)(R), w = Object(r.a)(C), E = e => async (t, n, {
					apiContext: r
				}) => {
					const c = n(),
						u = Object(d.i)(c),
						p = u ? u.id : void 0,
						m = c.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(i.c)(r(), p, e)).ok ? (t(O({
						name: e
					})), m && m.id && t(Object(s.h)(m.id)), t(a.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.e({
						kind: l.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(w({
						name: e
					}))))
				}
		},
		"./src/reddit/components/AccordionSection/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_2kFAvKy090RHUHuGKj-lZX",
				section: "_2kFAvKy090RHUHuGKj-lZX",
				ChevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				chevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				ChevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				chevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				ArticleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				articleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				mIsOpen: "_3wyxK8ak74f9lcJU0PCHYw",
				SectionHead: "_1MNP1i__B27h93k4ieBn36",
				sectionHead: "_1MNP1i__B27h93k4ieBn36",
				Article: "_1lO5zXuTJ63s0dtXcaPVbr",
				article: "_1lO5zXuTJ63s0dtXcaPVbr"
			}
		},
		"./src/reddit/components/AccordionSection/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				d = n("./src/reddit/components/AccordionSection/index.m.less"),
				c = n.n(d),
				u = n("./src/lib/classNames/index.ts"),
				p = n("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const h = p.a.div("Section", c.a),
				b = p.a.wrapped(l.a, "ChevronUp", c.a),
				f = p.a.wrapped(i.a, "ChevronDown", c.a),
				x = p.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[c.a.mIsOpen]: t
					})
				}, n)), "ArticleWrap", c.a),
				R = p.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => r.a.createElement("div", m({
					className: Object(u.a)(e, {
						[c.a.mIsOpen]: t
					})
				}, n)), "SectionHead", c.a),
				C = p.a.div("Article", c.a);
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return r.a.createElement("div", null, r.a.createElement(h, null, this.props.open ? r.a.createElement(b, null) : r.a.createElement(f, null), r.a.createElement(R, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), r.a.createElement(x, {
						isOpen: this.props.open
					}, this.props.open ? r.a.createElement(C, null, this.props.children) : null)))
				}
			}
			t.a = Object(s.b)(null, e => ({
				onSwitchSection: () => e(Object(a.i)())
			}))(_)
		},
		"./src/reddit/components/ContentPolicy/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_3-EmzITVSpJTN0ZK7n_YaM",
				content: "_3-EmzITVSpJTN0ZK7n_YaM",
				Link: "_3O6FEW7DxfrphV_mOjif19",
				link: "_3O6FEW7DxfrphV_mOjif19"
			}
		},
		"./src/reddit/components/ContentPolicy/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = a.a.div("Content", l.a), u = a.a.a("Link", l.a);
			class p extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(c, null, e.subredditOrProfile && !e.isLiveStreaming ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", s.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", s.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", s.a.createElement(u, {
						target: "_blank",
						href: `${o.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
			}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-CrisisFlow-CrisisFlowPage").then(n.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
				}
			})
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/constants/colors.ts");
			const s = {
				backgroundColor: r.b.overlayReportFlow
			};
			t.b = Object(o.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/FormBuilder/async.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "reddit-components-FormBuilder",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~reddit-components-FormBuilder"), n.e("reddit-components-FormBuilder")]).then(n.bind(null, "./src/reddit/components/FormBuilder/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FormBuilder/index.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, n) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, n) {
			e.exports = {
				BlockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				blockUserIcon: "_37rrV-zeRd5Ucdm0TrBoWL",
				BlockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				blockUserHeader: "_6NH8RSb5c3ZDmlEInbVbP",
				Link: "_1EO2dLuyej1lxpjgLomRmY",
				link: "_1EO2dLuyej1lxpjgLomRmY",
				OptionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				optionHeader: "_tnyUY3K3QRYAhNXyVpqL",
				OptionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				optionDescription: "_28h-vNSAqg_z7uAAG5H82C",
				OptionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				optionHolder: "_1WtXIu6c8H5Klz0QCdXB0x",
				blockUserHolder: "_2t9wBmIMEVB6Ij8vJu809S",
				footer: "_3Xxf80A8a452XmYsr9D3B_"
			}
		},
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, n) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				closeButton: "_1H-0VdiEA3cu2IaA3u6w3D",
				ContentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				contentPolicyHolder: "BA5_E59qS-2W3eXSqJRQT",
				Header: "_2uqWToPxuHNDDcTURzsr3J",
				header: "_2uqWToPxuHNDDcTURzsr3J",
				Description: "_3ODQLS5KJ5iVo8z8A69hMp",
				description: "_3ODQLS5KJ5iVo8z8A69hMp",
				RadioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				radioOptionsSectionHeader: "_3UGcBFaDoE_98cAfDof17o",
				DropdownRow: "tPieP_oh420XxFexXwjr_",
				dropdownRow: "tPieP_oh420XxFexXwjr_",
				PickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				pickerWrapper: "_2eAuOmdbHD4g71o3XWOx_v",
				SelectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				selectARuleLabel: "TYAWFOtYXkSFupwpJ0RoF",
				isChosen: "_3ocDAhKFsnxKiq_NXuqPnV",
				Dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				dropdown: "_2KzxTaKJzMOKF52xyMs_BS",
				DropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				dropdownTriangle: "-BX0TEwJyYy6YMztgn87c",
				Row: "_3mv2EXG5fgkAJbGwPMO_sj",
				row: "_3mv2EXG5fgkAJbGwPMO_sj"
			}
		},
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				DropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				dropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatPythonString/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CrisisFlow/async.tsx"),
				p = n("./src/reddit/actions/reportFlow/index.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = n("./src/higherOrderComponents/asTooltip.tsx"),
				f = n("./src/lib/classNames/index.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/reddit/controls/Dropdown/index.tsx"),
				C = n("./src/reddit/controls/Dropdown/Row.tsx"),
				_ = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				O = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				w = n.n(O);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = c.a.div("ContentPolicyHolder", w.a),
				g = c.a.div("Header", w.a),
				v = c.a.div("Description", w.a),
				T = c.a.wrapped(x.l, "CloseButton", w.a),
				y = c.a.div("RadioOptionsSectionHeader", w.a),
				I = c.a.wrapped(C.b, "DropdownRow", w.a),
				F = c.a.div("PickerWrapper", w.a),
				k = c.a.div("SelectARuleLabel", w.a),
				N = ({
					className: e,
					isChosen: t,
					...n
				}) => s.a.createElement(k, E({
					className: Object(f.a)(e, {
						[w.a.isChosen]: t
					})
				}, n)),
				j = Object(b.a)(R.a),
				A = c.a.wrapped(j, "Dropdown", w.a),
				P = c.a.wrapped(_.b, "DropdownTriangle", w.a),
				L = c.a.wrapped(C.b, "Row", w.a);
			var D = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				M = n.n(D);
			const U = c.a.div("LinkHolder", M.a),
				B = c.a.a("Link", M.a),
				H = c.a.wrapped(h.a, "footer", M.a);
			var q = e => s.a.createElement("div", null, s.a.createElement(g, null, e.complaintPageTitle), s.a.createElement(v, null, e.complaintPrompt || o.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(U, null, s.a.createElement(B, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(H, null, s.a.createElement(S, null, s.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), s.a.createElement(T, {
					onClick: e.onClose
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				K = n("./src/reddit/actions/userBlocks.ts"),
				G = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				W = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				V = n.n(z);
			const Y = c.a.wrapped(h.a, "blockUserHolder", V.a),
				J = c.a.wrapped(W.a, "BlockUserIcon", V.a),
				X = c.a.div("BlockUserHeader", V.a),
				Q = c.a.div("OptionHolder", V.a),
				Z = c.a.div("OptionHeader", V.a),
				$ = c.a.div("OptionDescription", V.a),
				ee = c.a.a("Link", V.a),
				te = c.a.wrapped(h.a, "footer", V.a),
				ne = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				oe = Object(i.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class re extends s.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== G.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === G.a.pending ? o.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? o.fbt._("{username} is blocked", [o.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : o.fbt._("Block {username}", [o.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => s.a.createElement(Q, null, s.a.createElement(Z, null, o.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement($, null, o.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [o.fbt._param("=visit the Help Center", s.a.createElement(ee, {
						target: "_blank",
						href: ne
					}, o.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return s.a.createElement(Y, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, s.a.createElement(J, null), s.a.createElement("div", null, s.a.createElement(X, null, t), s.a.createElement($, null, o.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [o.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", null, s.a.createElement(g, null, o.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), s.a.createElement(v, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), s.a.createElement(te, null, s.a.createElement(S, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(T, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var se = Object(a.b)(oe, (e, {}) => ({
					onBlockUser: t => {
						e(Object(K.h)(t))
					}
				}))(re),
				ae = n("./src/reddit/components/AccordionSection/index.tsx"),
				ie = n("./src/reddit/actions/tooltip.ts"),
				le = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				de = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				ce = n("./src/reddit/endpoints/post/index.tsx"),
				ue = n("./src/reddit/selectors/tooltip.ts");
			const pe = "ReportFlow--RedditRules",
				me = Object(i.c)({
					dropdownIsOpen: Object(ue.b)(pe)
				});
			class he extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? ce.a.CrisisTextLine : e.fileComplaint ? ce.a.FileComplaint : ce.a.SiteRule)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.onCustomTextChange = e => {
						this.props.onCustomTextChange(e)
					}
				}
				renderDropdownMenu(e) {
					const {
						props: t
					} = this, {
						onOpenDropdown: n,
						reason: r,
						rulesSequence: a
					} = t, i = r.nextStepReasons, l = a.length > e ? a[e] : -1, d = i && l >= 0 ? i[l] : null;
					return s.a.createElement(F, {
						onClick: n
					}, s.a.createElement(L, {
						displayText: d ? d.reasonTextToShow : "",
						id: pe
					}), s.a.createElement(P, null), s.a.createElement(N, {
						isChosen: !!d
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(A, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: pe
					}, i ? i.map((n, o) => s.a.createElement(I, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: l === o,
						onClick: n.nextStepReasons && n.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(o, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(o, e), this.onRedditRuleChange(n)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, n) {
					const {
						props: o
					} = this, {
						rulesSequence: r
					} = o, a = e.nextStepReasons, i = r && r.length > t ? r[t] : -1, l = r && r.length > t + 1 ? r[t + 1] : -1;
					return a && a.length ? s.a.createElement("div", {
						style: {
							padding: `10px ${10*t}px`,
							display: i === n ? "block" : "none"
						}
					}, s.a.createElement(y, null, e.nextStepHeader), a.map((e, n) => {
						const o = l === n;
						return s.a.createElement("div", {
							key: e.reasonTextToShow
						}, s.a.createElement(de.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: o,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
							}
						}), o && e.canWriteNotes && s.a.createElement(le.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, n))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: n
					} = e;
					if (n) {
						const {
							rulesSequence: n
						} = e, o = t.nextStepReasons, r = n.length > 1 ? n[1] : -1, a = o && r >= 0 ? o[r] : null;
						return s.a.createElement("div", null, this.renderDropdownMenu(1), a ? this.renderChildrenReasons(a, 1, r) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var be = Object(a.b)(me, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: pe
					}))
				}))(he),
				fe = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				Re = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				Ce = n.n(Re);
			const _e = "ReportFlow--SubredditRules",
				Oe = "Custom response",
				we = c.a.wrapped(A, "Dropdown", Ce.a),
				Ee = c.a.wrapped(I, "DropdownRow", Ce.a),
				Se = c.a.wrapped(fe.i, "FreeFormTextArea", Ce.a),
				ge = Object(i.c)({
					dropdownIsOpen: Object(ue.b)(_e),
					freeFormReports: xe.E
				});
			class ve extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, ce.a.Other)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}, this.state = {
						dropdownRule: null
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return s.a.createElement("div", null, s.a.createElement(F, {
						onClick: e.onOpenDropdown
					}, s.a.createElement(L, {
						displayText: n,
						id: _e
					}), s.a.createElement(P, null), s.a.createElement(N, {
						isChosen: !!n
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), s.a.createElement(we, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: _e
					}, e.subredditRules.map((t, n) => s.a.createElement(Ee, {
						key: `${t}-${n}`,
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ce.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? s.a.createElement(Ee, {
						displayText: o.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === Oe,
						onClick: () => {
							this.onChangeDropdownRule(Oe), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === Oe ? s.a.createElement(Se, {
						placeholder: o.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Te = Object(a.b)(ge, e => ({
					onOpenDropdown: () => e(Object(ie.h)({
						tooltipId: _e
					}))
				}))(ve),
				ye = n("./src/reddit/models/RulesSequence/index.ts"),
				Ie = n("./src/reddit/models/Subreddit/index.ts"),
				Fe = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				ke = n.n(Fe);
			const Ne = c.a.wrapped(x.i, "SubmitButton", ke.a);
			class je extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new ye.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: n
					} = this;
					n.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: n
					} = this, r = n.rulesSequence.getSequence(), a = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return s.a.createElement(ae.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.e.User ? o.fbt._("It breaks u/{subredditName}'s rules", [o.fbt._param("subredditName", a)], {
							hk: "QcQnb"
						}) : o.fbt._("It breaks r/{subredditName}'s rules", [o.fbt._param("subredditName", a)], {
							hk: "1Qdm9t"
						}),
						open: r.length > 0 && r[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, s.a.createElement(Te, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: o
					} = this, r = o.rulesSequence.getSequence();
					return s.a.createElement(ae.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: r.length > 0 && r[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(be, {
						onChosenRuleChange: n.onChosenRuleChange,
						onCustomTextChange: n.onCustomTextChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: r,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						reasons: t
					} = e;
					if (!t || !t.length) return null;
					const n = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return s.a.createElement("div", null, s.a.createElement(g, null, o.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), s.a.createElement(h.a, {
						className: ke.a.Footer
					}, s.a.createElement(S, null, s.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), s.a.createElement(T, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})), s.a.createElement(Ne, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : o.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var Ae = je,
				Pe = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Le = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				De = n.n(Le);
			const Me = c.a.wrapped(h.a, "Title", De.a),
				Ue = c.a.div("CloseWrapper", De.a),
				Be = c.a.wrapped(Pe.a, "Close", De.a);
			var He = e => s.a.createElement(Me, null, s.a.createElement("div", null, e.title), s.a.createElement(Ue, {
					onClick: e.onClosePressed
				}, s.a.createElement(Be, null))),
				qe = n("./src/reddit/models/Post/index.ts"),
				Ke = n("./src/reddit/models/ReportFlow/index.ts"),
				Ge = n("./src/reddit/selectors/commentSelector.ts"),
				We = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = n("./src/reddit/selectors/posts.ts"),
				Ve = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Ye = n.n(Ve);
			const Je = c.a.div("CloseWrapper", Ye.a),
				Xe = c.a.wrapped(Pe.a, "Close", Ye.a),
				Qe = Object(i.c)({
					comment: (e, {
						commentId: t
					}) => t ? Object(Ge.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const n = t && e.posts.models[t];
						return !!n && Object(qe.n)(n)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.features.reportFlow.rulesCategory,
					post: (e, {
						postId: t
					}) => t ? Object(ze.I)(e, {
						postId: t
					}) : null,
					reportedPending: e => e.features.reportFlow.api.pending,
					reportedSuccess: e => e.features.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, {
						postId: t
					}) => t ? Object(ze.U)(e, {
						postId: t
					}) : null,
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.features.reportFlow.userIsMod,
					crisisFlowEnabled: We.a
				});
			class Ze extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === ce.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === ce.a.FileComplaint || this.state.chosenRuleKind === ce.a.CrisisTextLine) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						}
					}, this.onChosenRuleChange = (e, t) => {
						this.setState({
							chosenRule: e,
							chosenRuleKind: t
						})
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e
						})
					}, this.state = {
						showFileAComplaintPage: !1,
						showCTLPage: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				getFirstPage() {
					const {
						state: e,
						props: t
					} = this, n = t.commentId ? Ke.a.Comment : Ke.a.Post, r = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], a = t.subredditRules, i = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (i && a[i])
						for (const o of a[i].rules) o.kind !== n && o.kind !== Ke.a.All || l.push(0 !== o.violationReason.length ? o.violationReason : o.shortName);
					const d = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return s.a.createElement(Ae, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: l,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: d,
						rulesCategory: t.rulesCategory,
						subredditOrProfile: t.subredditOrProfile,
						submitButtonText: r ? o.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return s.a.createElement(q, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(d.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const n = t.comment ? t.comment.author : "";
						return s.a.createElement(se, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const n = t.post ? t.post.author : "";
						return s.a.createElement(se, {
							authorName: n,
							chosenRule: e.chosenRule,
							isLiveStreaming: t.isLiveStreaming,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					return this.getFirstPage()
				}
				getContent() {
					const {
						state: e,
						props: t
					} = this;
					if (t.crisisFlowEnabled && e.chosenRuleKind === ce.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return s.a.createElement(r.Fragment, null, s.a.createElement(Je, {
							onClick: this.handleReportFlowClose
						}, s.a.createElement(Xe, null)), s.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? Ke.a.Comment : Ke.a.Post) === Ke.a.Post ? o.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? o.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : o.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return s.a.createElement(r.Fragment, null, s.a.createElement(He, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), s.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return s.a.createElement("div", {
						className: Ye.a.Wrapper
					}, this.getContent())
				}
			}
			const $e = Object(a.b)(Qe, (e, {
				timestamp: t
			}) => ({
				onCloseReportFlow: () => {
					e(Object(p.b)())
				},
				onReportPostOrComment: (n, o, r) => {
					e(Object(p.a)({
						id: n,
						reportFlowPayload: o,
						timestamp: t
					}, r))
				}
			}))(Ze);
			t.default = Object(l.a)($e)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/get.js"),
				a = n.n(s),
				i = n("./node_modules/react/index.js"),
				l = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				u = n("./src/reddit/actions/reportFlow/index.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/CrisisFlow/index.tsx"),
				h = n("./src/reddit/components/FormBuilder/async.tsx"),
				b = n("./src/reddit/actions/userBlocks.ts"),
				f = n("./src/graphql/operations/ReportComment.json"),
				x = n("./src/lib/makeGqlRequest/index.ts");
			const R = (e, t) => Object(x.a)(e, {
				...f,
				variables: t
			});
			var C = n("./src/graphql/operations/ReportPost.json");
			const _ = (e, t) => Object(x.a)(e, {
				...C,
				variables: t
			});
			var O = n("./src/graphql/operations/ReportForm.json");
			var w = n("./src/reddit/contexts/ApiContext.tsx"),
				E = n("./src/reddit/models/Post/index.ts"),
				S = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				v = n("./src/reddit/selectors/commentSelector.ts"),
				T = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/user.ts"),
				I = n("./src/lib/lessComponent.tsx"),
				F = n("./src/reddit/components/ReportFlow/index.m.less"),
				k = n.n(F);
			const N = I.a.div("ReportLoaderWrapper", k.a),
				j = I.a.img("LoadingIcon", k.a),
				A = "2.0",
				P = Object(c.c)({
					post: (e, {
						postId: t
					}) => t ? Object(T.I)(e, {
						postId: t
					}) : null,
					comment: (e, {
						commentId: t
					}) => t ? Object(v.a)(e, {
						commentId: t
					}) : null,
					isLiveStreaming: (e, {
						postId: t
					}) => {
						const n = t && e.posts.models[t];
						return !!n && Object(E.n)(n)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(n => {
						const {
							commentId: o,
							postId: r
						} = t, s = o ? Object(v.a)(e, {
							commentId: o
						}) : null, a = r ? Object(T.I)(e, {
							postId: r
						}) : null;
						(s ? s.author : a ? a.author : null) || t.author;
						n.name
					}),
					isNightmodeOn: y.U
				}),
				L = Object(d.b)(P, (e, {
					timestamp: t
				}) => ({
					onCloseReportFlow: () => {
						e(Object(u.b)())
					},
					onBlockUser: t => {
						e(Object(b.h)(t))
					},
					showFailToast: () => e(Object(p.e)({
						kind: S.b.Error,
						text: r.fbt._("Something went wrong!", null, {
							hk: "1BEFhz"
						})
					}))
				})),
				D = async (e, t, n, o) => {
					var r;
					const s = await ((e, {
						itemId: t,
						formVersion: n,
						hostAppName: o
					}) => Object(x.a)(e, {
						...O,
						variables: {
							itemId: t,
							hostAppName: o,
							formVersion: n
						}
					}))(e, {
						itemId: t,
						formVersion: n,
						hostAppName: o
					});
					if (s && s.ok) {
						const e = null === (r = s.body.data.reportForm) || void 0 === r ? void 0 : r.form;
						return e ? JSON.parse(e) : null
					}
				};
			class M extends l.a.Component {
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
						t.new !== g.a.pending && this.props.onBlockUser(e)
					}, this.onOpenCtlFlow = () => {
						this.props.postMessage && this.props.postMessage({
							type: "openCtl"
						}), this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: n,
								postId: o,
								commentId: r,
								showFailToast: s,
								hostAppName: i
							}
						} = this, l = r ? "comment" : o ? "post" : null;
						if (!l || !e) return;
						const {
							ruleId: d,
							ruleType: c,
							customRule: u
						} = e, p = {
							fromHelpDesk: !1,
							[`${l}Id`]: "comment" === l ? r : o,
							hostAppName: i
						};
						switch (c) {
							case "site":
								p.siteRule = a()(t, d.ref).value || a()(t, d.ref);
								break;
							case "subreddit":
							default:
								const e = a()(t, d.ref);
								"other" === e && u ? p.customRule = a()(t, u.ref) : p.subredditRule = e
						}
						let m;
						switch (l) {
							case "post":
								m = () => _(n(), {
									input: p
								});
								break;
							case "comment":
								m = () => R(n(), {
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
						commentId: n,
						hostAppName: o
					} = this.props, r = n || t;
					D(e(), r, A, o).then(e => {
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
							author: n,
							comment: r,
							post: s,
							isNightmodeOn: a
						},
						state: {
							formComponent: i,
							formState: d,
							ctlFlowOpened: c,
							hasLoaded: u
						}
					} = this, p = (e ? null == r ? void 0 : r.author : t ? null == s ? void 0 : s.author : null) || n;
					return c && p ? l.a.createElement(m.b, {
						withOverlay: !0,
						overlayCustomStyles: m.a,
						fromUserProfile: !0,
						username: p,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : i && d && u ? l.a.createElement(h.a, {
						formComponent: i,
						formState: d,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Submit a Report",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(p),
						onResize: this.props.onResize
					}) : l.a.createElement(N, null, l.a.createElement(j, {
						src: a ? `${o.a.assetPath}/img/loader_2orbit_loop_nightmode.gif` : `${o.a.assetPath}/img/loader_2orbit_loop.gif`,
						alt: "Loading"
					}))
				}
			}
			t.default = Object(w.b)(L(M))
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ReportFlow/_ReportFlowNew.tsx");
			t.default = Object(o.a)(r.default)
		},
		"./src/reddit/components/ReportFlow/index.m.less": function(e, t, n) {
			e.exports = {
				ReportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				reportLoaderWrapper: "_2klptZtqsBAGq-K0L-mmhN",
				LoadingIcon: "_2a3vKytEqctI3YbHm0Jt5d",
				loadingIcon: "_2a3vKytEqctI3YbHm0Jt5d"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.m.less": function(e, t, n) {
			e.exports = {
				customTextInput: "FGOwr4yXeN3ya-TdhfhA6",
				textAreaCounter: "_2nMs12tSLppI6tzUQbdtpO",
				Component: "DC3SDIBg6rz0oprqLxSAP",
				component: "DC3SDIBg6rz0oprqLxSAP"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = n("./src/reddit/models/Rule/index.ts"),
				d = n("./src/reddit/components/ReportPage/index.m.less"),
				c = n.n(d),
				u = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				p = n.n(u);
			const m = s.a.header("InputDescription", c.a);
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							...b(e.target.value)
						}), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: c.a.fieldset
					}, e.description && r.a.createElement(m, null, e.description), r.a.createElement("div", {
						className: c.a.field
					}, r.a.createElement(a.c, {
						backgroundColorState: a.a.WhiteFields,
						className: p.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), r.a.createElement("div", {
						className: p.a.textAreaCounter
					}, `${t.displayLength}/${l.a}`))))
				}
			}
			const b = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const n = l.a,
					o = e.length,
					r = Object(i.a)(e),
					s = r.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, o - s + 15 * r.length),
					maxLength: Math.min(l.d, n + s - 15 * r.length)
				}
			};
			t.a = s.a.wrapped(h, "Component", p.a)
		},
		"./src/reddit/components/ReportPage/index.m.less": function(e, t, n) {
			e.exports = {
				Description: "vC8DORRb-SrRf4xoExKnG",
				description: "vC8DORRb-SrRf4xoExKnG",
				errorMessage: "_2L8tQUjHvCyEJVnOnvqSP9",
				field: "_2niT9w1GKTvhvG5L0mD4y7",
				fieldset: "_1SmuWknXj7wdU6MauCQUaU",
				Footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				Header: "jKS5xzUqtMgPR-nLIjfVJ",
				header: "jKS5xzUqtMgPR-nLIjfVJ",
				InputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				inputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				input: "_2CBq5X22pIRSa4bQwQ4u5C",
				FileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				fileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				Link: "ZTGvhuML-5HlQ9y8zLjlk",
				link: "ZTGvhuML-5HlQ9y8zLjlk",
				linkHolder: "qWNlfKYCsjoOcXc8gp8qU",
				RedirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j",
				redirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(l);
			const c = a.a.wrapped(i.e, "FormElementTitle", d.a),
				u = a.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => r.a.createElement("div", null, r.a.createElement(c, {
				className: Object(s.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && r.a.createElement(u, {
				className: Object(s.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return C
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.div("icon", c.a),
				m = a.a.textarea("textarea", c.a),
				h = a.a.span("Invalid", c.a);
			var b, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const x = e => r.a.createElement("div", {
					className: Object(s.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === b.Valid,
							[c.a.mInvalid]: e.state === b.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(s.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(s.a)({
						[c.a.mValid]: e.state === b.Valid,
						[c.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && r.a.createElement(l.a, null), e.state === b.Invalid && r.a.createElement(h, null, "!")))),
				R = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: a,
						label: l,
						onKeyDown: d,
						state: p,
						...m
					} = e;
					return r.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: l,
						state: p
					}, r.a.createElement(i.a, u({}, m, {
						className: Object(s.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: o,
						onKeyDown: d
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: o,
						isRequired: a,
						label: i,
						onKeyDown: l,
						state: d,
						...p
					} = e;
					return r.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(m, u({}, p, {
						className: Object(s.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: o,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, n) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				u = n.n(c);
			const p = s.a.wrapped(l.a, "RadioOption", u.a),
				m = s.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => r.a.createElement(p, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, r.a.createElement(m, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? r.a.createElement(i.f, null) : r.a.createElement(i.e, null), r.a.createElement(a.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return O
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(r);
			const a = o.a.section("FormPage", s.a),
				i = o.a.h1("HomePageTitle", s.a),
				l = o.a.button("HomePageBreadcrumb", s.a),
				d = o.a.div("HomePageGroup", s.a),
				c = o.a.h1("FormPageTitle", s.a),
				u = o.a.div("FormPageSection", s.a),
				p = o.a.div("FormGroup", s.a),
				m = o.a.h2("FormGroupTitle", s.a),
				h = o.a.div("FormElement", s.a),
				b = o.a.div("FormGroupDescription", s.a),
				f = o.a.div("FormItem", s.a),
				x = o.a.h3("FormElementTitle", s.a),
				R = o.a.div("FormElementDescription", s.a),
				C = o.a.div("FormElementError", s.a),
				_ = o.a.div("FormElementSubGroup", s.a),
				O = o.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "g", (function() {
				return C
			}));
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				s = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = o.a.wrapped(r.a, "ModalInput", c.a),
				p = o.a.input("Input", c.a),
				m = o.a.wrapped(l.a, "RadioOn", c.a),
				h = o.a.wrapped(i.a, "RadioOff", c.a),
				b = o.a.wrapped(s.a, "Checkbox", c.a),
				f = o.a.wrapped(a.a, "CheckboxSelected", c.a),
				x = o.a.textarea("Textarea", c.a),
				R = o.a.label("StyledLabel", c.a),
				C = o.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(o.createContext)(a);

			function l(e) {
				return t => r.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: o
				}) => r.a.createElement(e, s({
					apiContext: n,
					gqlContext: o
				}, t)))
			}
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var o = n("./node_modules/lodash/throttle.js"),
				r = n.n(o),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				u = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = n("./src/reddit/controls/Dropdown/index.m.less"),
				m = n.n(p),
				h = n("./src/reddit/controls/Dropdown/row.m.less"),
				b = n.n(h);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			class x extends a.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, n = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? a.a.createElement(l.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && a.a.createElement("span", {
						className: n
					}, e.children), a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : a.a.createElement(u.a, f({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? a.a.createElement("div", null, e.children) : a.a.createElement("span", {
						className: n
					}, e.children)), e.displayText && a.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && a.a.createElement(c.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && a.a.createElement(d.a, {
						className: m.a.dropdownTriangle
					}))
				}
			}
			t.b = ({
				className: e,
				...t
			}) => {
				const n = Object(i.a)(b.a.row, e, {
					[b.a.mIsInteractive]: !t.noHover,
					[b.a.mIsSelected]: t.isSelected,
					[b.a.topics]: t.isTopicsStyle
				});
				return a.a.createElement(x, f({
					className: n
				}, t))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/index.m.less"),
				s = n.n(r);
			t.a = o.a.input("input", s.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, n) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
				s = n("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				a = n.n(s);
			t.a = o.a.wrapped(r.a, "unstyledInternalLink", a.a)
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return p
			}));
			var o = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: r.cb.POST
			}), d = async (e, t, n) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: r.cb.POST
			}), c = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: r.cb.POST
			}), u = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: r.cb.POST
			}), p = async (e, t) => Object(s.a)(Object(a.a)(e, [i.a]), {
				endpoint: `${o.a.oauthUrl}/user/${t}/about`,
				method: r.cb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/moderator/moderatingSubreddits.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			t.a = async e => Object(r.a)(Object(s.a)(e, [a.a]), {
				endpoint: `${e.apiUrl}/subreddit_permissions`,
				method: o.cb.GET,
				traceRequestName: "get_subreddit_permissions"
			})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/reddit/helpers/parseUrl.ts");
			const r = ["old", "new", "en", "www", "np", "m"],
				s = ["reddit.com", "reddit.local"].concat("").concat(r.map((function(e) {
					return e + ".reddit.com"
				}))).concat(r.map((function(e) {
					return e + ".reddit.local"
				}))),
				a = ["mod.reddit.com"],
				i = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: s.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: a,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function l(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(i).some((function(n) {
						return t = function(e, t) {
							const n = i[e];
							if (!i) throw new Error("Could not find reddit URL spec: " + e);
							const r = Object(o.a)(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (n.hostnames || s).indexOf(r.hostname)) return;
							const a = r.pathname.match(n.pathname);
							if (a) {
								return {
									url: t,
									routeName: e,
									components: n.pathnameComponents.reduce((function(e, t, n) {
										return e[t] = a[n + 1], e
									}), {})
								}
							}
						}(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				l = n.n(i);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(s.b)();
				return r.a.createElement("i", {
					className: `${Object(a.b)(t?"caret_down":"dropdownTriangle",e.isFilled)} ${e.className}`
				})
			}, "DropdownTriangle", l.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => r.a.createElement("svg", l({
				className: Object(s.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), r.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				i = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: Object(s.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(s.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: o,
					widthLeft: s,
					gutter: i,
					...c
				} = e;
				return r.a.createElement("div", d({
					className: Object(a.a)(l.a.expandRightContainer, t)
				}, c), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: s,
						height: o,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/models/ReportFlow/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var o, r, s;
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(o || (o = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(r || (r = {})),
			function(e) {
				e.R2 = "R2"
			}(s || (s = {}));
			const a = new Set(Object.values(s))
		},
		"./src/reddit/models/WhitelistAndBlocked.ts": function(e, t, n) {
			"use strict";
			var o;
			n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.pending = "pending", e.error = "error", e.waitingForRequest = "waitingForRequest"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			}));
			const o = e => e.blockedRedditors.api.pending,
				r = e => e.blockedRedditors.list,
				s = (e, t) => {
					const n = (e => {
						const t = r(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				s = n("./src/reddit/selectors/user.ts");
			const a = e => o.b.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: o.g
				}),
				i = e => o.d.Enabled === Object(r.c)(e, {
					experimentEligibilitySelector: s.J,
					experimentName: o.j
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.0929dd559541e0cd377c.js.map