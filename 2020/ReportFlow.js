// https://www.redditstatic.com/desktop2x/ReportFlow.e150bc3430ff3e1c7661.js
// Retrieved at 10/27/2020, 3:30:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/graphql/operations/ReportComment.json": function(e) {
			e.exports = JSON.parse('{"id":"cec8e7309a27"}')
		},
		"./src/graphql/operations/ReportForm.json": function(e) {
			e.exports = JSON.parse('{"id":"727f69586fcc"}')
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
				return d
			})), o.d(t, "c", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "f", (function() {
				return m
			})), o.d(t, "h", (function() {
				return h
			})), o.d(t, "g", (function() {
				return C
			}));
			var n = o("./src/lib/makeActionCreator/index.ts"),
				s = o("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				r = o("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, s), {
				variables: t
			}), {
				traceRequestName: "get_blocked_redditors_info"
			});
			var l = o("./src/reddit/selectors/blockedRedditors.ts");
			const a = "BLOCKED_REDDITORS_LIST__ADD",
				c = "BLOCKED_REDDITORS_LIST__REMOVE",
				d = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(n.a)(a),
				h = Object(n.a)(c),
				b = Object(n.a)(d),
				R = Object(n.a)(u),
				O = Object(n.a)(p),
				C = () => async (e, t, o) => {
					let {
						gqlContext: n
					} = o;
					const s = t(),
						r = Object(l.a)(s);
					if (Object(l.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let a = !1,
						c = "";
					do {
						e(O());
						const t = {
								after: c,
								pageSize: 100
							},
							o = await i(n(), t);
						if (o && o.ok) {
							const {
								data: {
									identity: t
								}
							} = o.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: o,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(R(n.map(e => e.node.id))), o) {
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
							e(b({
								message: t
							}))
						}
					} while (a)
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, o) {
			"use strict";
			o.d(t, "f", (function() {
				return d
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "d", (function() {
				return p
			})), o.d(t, "h", (function() {
				return R
			})), o.d(t, "b", (function() {
				return O
			})), o.d(t, "c", (function() {
				return C
			})), o.d(t, "a", (function() {
				return _
			})), o.d(t, "g", (function() {
				return w
			}));
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./src/lib/makeActionCreator/index.ts"),
				r = o("./src/reddit/actions/blockedRedditors.ts"),
				i = o("./src/reddit/actions/toaster.ts"),
				l = o("./src/reddit/endpoints/accounts/index.ts"),
				a = o("./src/reddit/models/Toast/index.ts"),
				c = o("./src/reddit/selectors/user.ts");
			const d = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(s.a)(d),
				h = Object(s.a)(u),
				b = Object(s.a)(p),
				R = e => async (t, o, s) => {
					let {
						apiContext: c
					} = s;
					if (o().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const d = await Object(l.a)(c(), e),
						u = "error-block-".concat(e);
					if (d.ok) d.body.name && t(h(d.body)), d.body.id && t(Object(r.f)(d.body.id)), t(i.f(u)), t(i.e({
						kind: a.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const o = {
							type: d.error ? d.error.type : "Unknown error",
							username: e
						};
						t(b(o)), t(i.e({
							id: u,
							kind: a.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: R(e)
						}))
					}
				}, O = "USER_UNBLOCK__PENDING", C = "USER_UNBLOCK__SUCCESS", _ = "USER_UNBLOCK__FAILED", f = Object(s.a)(O), S = Object(s.a)(C), x = Object(s.a)(_), w = e => async (t, o, s) => {
					let {
						apiContext: d
					} = s;
					const u = o(),
						p = Object(c.i)(u),
						m = p ? p.id : void 0,
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(f({
						name: e
					})), (await Object(l.c)(d(), m, e)).ok ? (t(S({
						name: e
					})), h && h.id && t(Object(r.h)(h.id)), t(i.e({
						kind: a.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.e({
						kind: a.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(x({
						name: e
					}))))
				}
		},
		"./src/reddit/components/CrisisFlow/async.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-CrisisFlow-CrisisFlowPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!o.m[t]
				},
				importAsync: () => o.e("reddit-components-CrisisFlow-CrisisFlowPage").then(o.bind(null, "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return o(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/CrisisFlowPage.tsx"
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
		"./src/reddit/components/ReportFlow/FileAComplaint/index.m.less": function(e, t, o) {
			e.exports = {
				LinkHolder: "gzSFYulriiznSCkE16gKp",
				linkHolder: "gzSFYulriiznSCkE16gKp",
				Link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				link: "_15Wqlxyx3Z-T-z0DvNxSCJ",
				footer: "_1brqmxWqCHF82p5qKIJJBz"
			}
		},
		"./src/reddit/components/ReportFlow/FinalPage/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/FirstPage/index.m.less": function(e, t, o) {
			e.exports = {
				Footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				footer: "_2U3QSqUpg8P1lhj6uVJ7Qz",
				SubmitButton: "_3s4nx6OebtFkWRvN_J8Zkh",
				submitButton: "_3s4nx6OebtFkWRvN_J8Zkh"
			}
		},
		"./src/reddit/components/ReportFlow/ReusableComponents/index.m.less": function(e, t, o) {
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
		"./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less": function(e, t, o) {
			e.exports = {
				Dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				dropdown: "H6Tl_y2c6WutwVvNUVsA9",
				DropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				dropdownRow: "_6Kd5dtTIMRYSbS8v3gVf9",
				FreeFormTextArea: "LfGyCwXYHBpCc27lxC6rk",
				freeFormTextArea: "LfGyCwXYHBpCc27lxC6rk"
			}
		},
		"./src/reddit/components/ReportFlow/Title/index.m.less": function(e, t, o) {
			e.exports = {
				Title: "DKSbQ0QcfECfr4r3QT7-u",
				title: "DKSbQ0QcfECfr4r3QT7-u",
				CloseWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				closeWrapper: "xOUVwwi_b-bjJ4KFZk5Sh",
				Close: "_2B-LfwHdWwLdn-v09usrDn",
				close: "_2B-LfwHdWwLdn-v09usrDn"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.m.less": function(e, t, o) {
			e.exports = {
				Wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				wrapper: "_2H5HLsAFlxLhy8xTjlHh0u",
				CloseWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				closeWrapper: "_3mwc-yPQ30fuLlSfnIDCcT",
				Close: "_1HJttuQrGzRmTb0-EeKJFw",
				close: "_1HJttuQrGzRmTb0-EeKJFw"
			}
		},
		"./src/reddit/components/ReportFlow/_ReportFlow.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/react/index.js"),
				r = o.n(s),
				i = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				c = o("./src/lib/formatPythonString/index.ts"),
				d = o("./src/lib/lessComponent.tsx"),
				u = o("./src/reddit/components/CrisisFlow/async.tsx"),
				p = o("./src/reddit/actions/reportFlow.ts"),
				m = o("./src/reddit/components/ContentPolicy/index.tsx"),
				h = o("./src/reddit/layout/row/Inline/index.tsx"),
				b = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./src/higherOrderComponents/asTooltip.tsx")),
				R = o("./src/lib/classNames/index.ts"),
				O = o("./src/reddit/controls/Button/index.tsx"),
				C = o("./src/reddit/controls/Dropdown/index.tsx"),
				_ = o("./src/reddit/controls/Dropdown/Row.tsx"),
				f = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				S = o("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				x = o.n(S);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			const g = d.a.div("ContentPolicyHolder", x.a),
				T = d.a.div("Header", x.a),
				I = d.a.div("Description", x.a),
				k = d.a.wrapped(O.l, "CloseButton", x.a),
				A = d.a.div("RadioOptionsSectionHeader", x.a),
				v = d.a.wrapped(_.b, "DropdownRow", x.a),
				F = d.a.div("PickerWrapper", x.a),
				y = d.a.div("SelectARuleLabel", x.a),
				P = e => {
					var {
						className: t,
						isChosen: o
					} = e, n = E(e, ["className", "isChosen"]);
					return r.a.createElement(y, w({
						className: Object(R.a)(t, {
							[x.a.isChosen]: o
						})
					}, n))
				},
				N = Object(b.a)(C.a),
				j = d.a.wrapped(N, "Dropdown", x.a),
				L = d.a.wrapped(f.b, "DropdownTriangle", x.a),
				D = d.a.wrapped(_.b, "Row", x.a);
			var B = o("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				U = o.n(B);
			const M = d.a.div("LinkHolder", U.a),
				H = d.a.a("Link", U.a),
				q = d.a.wrapped(h.a, "footer", U.a);
			var K = e => r.a.createElement("div", null, r.a.createElement(T, null, e.complaintPageTitle), r.a.createElement(I, null, e.complaintPrompt || n.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(M, null, r.a.createElement(H, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(q, null, r.a.createElement(g, null, r.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), r.a.createElement(k, {
					onClick: e.onClose
				}, n.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				W = o("./src/reddit/actions/userBlocks.ts"),
				V = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				Y = o("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				J = o("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				G = o.n(J);
			const X = d.a.wrapped(h.a, "blockUserHolder", G.a),
				z = d.a.wrapped(Y.a, "BlockUserIcon", G.a),
				Q = d.a.div("BlockUserHeader", G.a),
				Z = d.a.div("OptionHolder", G.a),
				$ = d.a.div("OptionHeader", G.a),
				ee = d.a.div("OptionDescription", G.a),
				te = d.a.a("Link", G.a),
				oe = d.a.wrapped(h.a, "footer", G.a),
				ne = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				se = Object(l.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class re extends r.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== V.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: o
						} = this.props;
						return o.new === V.a.pending ? n.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? n.fbt._("{username} is blocked", [n.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : n.fbt._("Block {username}", [n.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => r.a.createElement(Z, null, r.a.createElement($, null, n.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement(ee, null, n.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [n.fbt._param("=visit the Help Center", r.a.createElement(te, {
						target: "_blank",
						href: ne
					}, n.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return r.a.createElement(X, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, r.a.createElement(z, null), r.a.createElement("div", null, r.a.createElement(Q, null, t), r.a.createElement(ee, null, n.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [n.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(T, null, n.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), r.a.createElement(I, null, n.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), r.a.createElement(oe, null, r.a.createElement(g, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(k, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var ie = Object(i.b)(se, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(W.h)(t))
						}
					}
				})(re),
				le = o("./src/reddit/components/AccordionSection/index.tsx"),
				ae = o("./src/reddit/actions/tooltip.ts"),
				ce = o("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				de = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				ue = o("./src/reddit/endpoints/post/index.tsx"),
				pe = o("./src/reddit/selectors/tooltip.ts");
			const me = "ReportFlow--RedditRules",
				he = Object(l.c)({
					dropdownIsOpen: Object(pe.b)(me)
				});
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? ue.a.CrisisTextLine : e.fileComplaint ? ue.a.FileComplaint : ue.a.SiteRule)
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
						onOpenDropdown: o,
						reason: s,
						rulesSequence: i
					} = t, l = s.nextStepReasons, a = i.length > e ? i[e] : -1, c = l && a >= 0 ? l[a] : null;
					return r.a.createElement(F, {
						onClick: o
					}, r.a.createElement(D, {
						displayText: c ? c.reasonTextToShow : "",
						id: me
					}), r.a.createElement(L, null), r.a.createElement(P, {
						isChosen: !!c
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(j, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: me
					}, l ? l.map((o, n) => r.a.createElement(v, {
						key: o.reasonTextToShow,
						displayText: o.reasonTextToShow,
						isSelected: a === n,
						onClick: o.nextStepReasons && o.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(n, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(n, e), this.onRedditRuleChange(o)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, o) {
					const {
						props: n
					} = this, {
						rulesSequence: s
					} = n, i = e.nextStepReasons, l = s && s.length > t ? s[t] : -1, a = s && s.length > t + 1 ? s[t + 1] : -1;
					return i && i.length ? r.a.createElement("div", {
						style: {
							padding: "10px ".concat(10 * t, "px"),
							display: l === o ? "block" : "none"
						}
					}, r.a.createElement(A, null, e.nextStepHeader), i.map((e, o) => {
						const n = a === o;
						return r.a.createElement("div", {
							key: e.reasonTextToShow
						}, r.a.createElement(de.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: n,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onRedditRuleChange(e)
							}
						}), n && e.canWriteNotes && r.a.createElement(ce.a, {
							depth: t + 1,
							onCustomTextChange: this.onCustomTextChange,
							title: e.notesInputTitle,
							description: e.notesInputDescription
						}), this.renderChildrenReasons(e, t + 1, o))
					})) : null
				}
				render() {
					const {
						props: e
					} = this, {
						reason: t,
						dropdownIsNeeded: o
					} = e;
					if (o) {
						const {
							rulesSequence: o
						} = e, n = t.nextStepReasons, s = o.length > 1 ? o[1] : -1, i = n && s >= 0 ? n[s] : null;
						return r.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, s) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var Re = Object(i.b)(he, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: me
					}))
				}))(be),
				Oe = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				Ce = o("./src/reddit/selectors/subreddit.ts"),
				_e = o("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				fe = o.n(_e);
			const Se = "ReportFlow--SubredditRules",
				xe = "Custom response",
				we = d.a.wrapped(j, "Dropdown", fe.a),
				Ee = d.a.wrapped(v, "DropdownRow", fe.a),
				ge = d.a.wrapped(Oe.i, "FreeFormTextArea", fe.a),
				Te = Object(l.c)({
					dropdownIsOpen: Object(pe.b)(Se),
					freeFormReports: Ce.F
				});
			class Ie extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, ue.a.Other)
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
					} = this, o = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return r.a.createElement("div", null, r.a.createElement(F, {
						onClick: e.onOpenDropdown
					}, r.a.createElement(D, {
						displayText: o,
						id: Se
					}), r.a.createElement(L, null), r.a.createElement(P, {
						isChosen: !!o
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(we, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: Se
					}, e.subredditRules.map((t, o) => r.a.createElement(Ee, {
						key: "".concat(t, "-").concat(o),
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ue.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? r.a.createElement(Ee, {
						displayText: n.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === xe,
						onClick: () => {
							this.onChangeDropdownRule(xe), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === xe ? r.a.createElement(ge, {
						placeholder: n.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var ke = Object(i.b)(Te, e => ({
					onOpenDropdown: () => e(Object(ae.h)({
						tooltipId: Se
					}))
				}))(Ie),
				Ae = o("./src/reddit/models/RulesSequence/index.ts"),
				ve = o("./src/reddit/models/Subreddit/index.ts"),
				Fe = o("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				ye = o.n(Fe);
			const Pe = d.a.wrapped(O.i, "SubmitButton", ye.a);
			class Ne extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Ae.a
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					const {
						state: o
					} = this;
					o.rulesSequence.update(e, t), this.forceUpdate()
				}
				renderSubredditRulesSection(e) {
					const {
						props: t,
						state: o
					} = this, s = o.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return r.a.createElement(le.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === ve.e.User ? n.fbt._("It breaks u/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : n.fbt._("It breaks r/{subredditName}'s rules", [n.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: s.length > 0 && s[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, r.a.createElement(ke, {
						chosenRule: t.chosenRule,
						onChosenRuleChange: t.onChosenRuleChange,
						subredditId: t.subredditOrProfile ? t.subredditOrProfile.id : "",
						subredditRules: t.subredditRules
					}))
				}
				renderRulesSection(e, t) {
					const {
						props: o,
						state: n
					} = this, s = n.rulesSequence.getSequence();
					return r.a.createElement(le.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: s.length > 0 && s[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, r.a.createElement(Re, {
						onChosenRuleChange: o.onChosenRuleChange,
						onCustomTextChange: o.onCustomTextChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: s,
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
					const o = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return r.a.createElement("div", null, r.a.createElement(T, null, n.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), o.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), r.a.createElement(h.a, {
						className: ye.a.Footer
					}, r.a.createElement(g, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(k, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})), r.a.createElement(Pe, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : n.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var je = Ne,
				Le = o("./src/reddit/icons/svgs/Close/index.tsx"),
				De = o("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Be = o.n(De);
			const Ue = d.a.wrapped(h.a, "Title", Be.a),
				Me = d.a.div("CloseWrapper", Be.a),
				He = d.a.wrapped(Le.a, "Close", Be.a);
			var qe, Ke, We = e => r.a.createElement(Ue, null, r.a.createElement("div", null, e.title), r.a.createElement(Me, {
					onClick: e.onClosePressed
				}, r.a.createElement(He, null))),
				Ve = o("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(qe || (qe = {})),
			function(e) {
				e.HARASSMENT_AT_ME = "HARASSMENT_AT_ME", e.HARASSMENT_AT_SOMEONE_ELSE = "HARASSSOMEONE_ELSENT_AT_ME", e.VIOLENCE_AT_ME = "VIOLENCE_AT_ME", e.VIOLENCE_AT_SOMEONE_ELSE = "VIOLENCE_AT_SOMEONE_ELSE", e.HATE_CONTENT = "HATE_CONTENT", e.MINOR_SEXUALIZATION = "HARASSMENT_AT_ME", e.PII_ABOUT_ME = "PII_ABOUT_ME", e.PII_ABOUT_SOMEONE_ELSE = "PII_ABOUT_SOMEONE_ELSE", e.INVOLUNTARY_PORN_SELF = "INVOLUNTARY_PORN_SELF", e.INVOLUNTARY_PORN_OTHER = "INVOLUNTARY_PORN_OTHER", e.PROHIBITED_SALES = "PROHIBITED_SALES", e.REPORT_BUTTON_ABUSE = "REPORT_BUTTON_ABUSE", e.IMPERSONATION_SELF = "IMPERSONATION_SELF", e.IMPERSONATION_OTHER = "IMPERSONATION_OTHER", e.COPYRIGHT_SELF = "COPYRIGHT_SELF", e.COPYRIGHT_OTHER = "COPYRIGHT_OTHER", e.TRADEMARK_SELF = "TRADEMARK_SELF", e.TRADEMARK_OTHER = "TRADEMARK_OTHER", e.NETZDG = "NETZDG", e.SELF_HARM = "SELF_HARM", e.SPAM_LINK_FARMING = "SPAM_LINK_FARMING", e.SPAM_UNSOLICITED_PMS = "SPAM_UNSOLICITED_PMS", e.SPAM_COMMENT_FLOODING = "SPAM_COMMENT_FLOODING", e.SPAM_MALWARE = "SPAM_MALWARE", e.SPAM_BOTS = "SPAM_BOTS", e.MISINFORMATION_HEALTH = "MISINFORMATION_HEALTH", e.MISINFORMATION_POLITICS = "MISINFORMATION_POLITICS", e.MISINFORMATION_FABRICATION = "MISINFORMATION_FABRICATION", e.MISINFORMATION_CONSPIRACY = "MISINFORMATION_CONSPIRACY", e.BAN_EVASION = "BAN_EVASION", e.VOTE_MANIPULATION = "VOTE_MANIPULATION"
			}(Ke || (Ke = {}));
			var Ye = o("./src/reddit/selectors/comments.ts"),
				Je = o("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Ge = o("./src/reddit/selectors/posts.ts"),
				Xe = o("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				ze = o.n(Xe);
			const Qe = d.a.div("CloseWrapper", ze.a),
				Ze = d.a.wrapped(Le.a, "Close", ze.a),
				$e = Object(l.c)({
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(Ye.n)(e, {
							commentId: o
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: o
						} = t;
						const n = o && e.posts.models[o];
						return !!n && Object(Ve.i)(n)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(Ge.O)(e, {
							postId: o
						}) : null
					},
					reportedPending: e => e.reportFlow.api.pending,
					reportedSuccess: e => e.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(Ge.bb)(e, {
							postId: o
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.reportFlow.userIsMod,
					crisisFlowEnabled: Je.a
				});
			class et extends r.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === ue.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === ue.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === ue.a.FileComplaint || this.state.chosenRuleKind === ue.a.CrisisTextLine) this.setState({
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
					} = this, o = t.commentId ? qe.Comment : qe.Post, s = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, l = t.subredditOrProfile ? t.subredditOrProfile.id : null, a = new Array;
					if (l && i[l])
						for (const n of i[l].rules) n.kind !== o && n.kind !== qe.All || a.push(0 !== n.violationReason.length ? n.violationReason : n.shortName);
					const c = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return r.a.createElement(je, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: a,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: c,
						rulesCategory: t.rulesCategory,
						subredditOrProfile: t.subredditOrProfile,
						submitButtonText: s ? n.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return r.a.createElement(K, {
						complaintButtonText: e.chosenRule.complaintButtonText,
						complaintPageTitle: e.chosenRule.complaintPageTitle,
						complaintPrompt: e.chosenRule.complaintPrompt,
						complaintUrl: Object(c.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const o = t.comment ? t.comment.author : "";
						return r.a.createElement(ie, {
							authorName: o,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const o = t.post ? t.post.author : "";
						return r.a.createElement(ie, {
							authorName: o,
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
					if (t.crisisFlowEnabled && e.chosenRuleKind === ue.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return r.a.createElement(s.Fragment, null, r.a.createElement(Qe, {
							onClick: this.handleReportFlowClose
						}, r.a.createElement(Ze, null)), r.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const o = (t.commentId ? qe.Comment : qe.Post) === qe.Post ? n.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? n.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : n.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return r.a.createElement(s.Fragment, null, r.a.createElement(We, {
						onClosePressed: t.onCloseReportFlow,
						title: o
					}), r.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return r.a.createElement("div", {
						className: ze.a.Wrapper
					}, this.getContent())
				}
			}
			const tt = Object(i.b)($e, (e, t) => {
				let {
					timestamp: o
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(p.i)())
					},
					onReportPostOrComment: (t, n, s) => {
						e(Object(p.h)({
							id: t,
							reportFlowPayload: n,
							timestamp: o
						}, s))
					}
				}
			})(et);
			t.default = Object(a.a)(tt)
		},
		"./src/reddit/components/ReportFlow/_ReportFlowNew.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var n = o("./node_modules/lodash/get.js"),
				s = o.n(n),
				r = o("./node_modules/react/index.js"),
				i = o.n(r),
				l = o("./node_modules/react-redux/es/index.js"),
				a = o("./node_modules/reselect/es/index.js"),
				c = o("./src/reddit/actions/reportFlow.ts"),
				d = o("./src/higherOrderComponents/asModal/index.tsx"),
				u = o("./src/reddit/components/CrisisFlow/index.tsx"),
				p = o("./src/reddit/components/FormBuilder/async.tsx"),
				m = o("./src/reddit/actions/userBlocks.ts"),
				h = o("./src/graphql/operations/ReportComment.json"),
				b = o("./src/lib/makeGqlRequest/index.ts");
			const R = (e, t) => Object(b.a)(e, Object.assign(Object.assign({}, h), {
				variables: t
			}));
			var O = o("./src/graphql/operations/ReportPost.json");
			const C = (e, t) => Object(b.a)(e, Object.assign(Object.assign({}, O), {
				variables: t
			}));
			var _ = o("./src/graphql/operations/ReportForm.json");
			var f = o("./src/reddit/contexts/ApiContext.tsx"),
				S = o("./src/reddit/models/Post/index.ts"),
				x = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				w = o("./src/reddit/selectors/comments.ts"),
				E = o("./src/reddit/selectors/posts.ts");
			const g = Object(a.c)({
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(E.O)(e, {
							postId: o
						}) : null
					},
					comment: (e, t) => {
						let {
							commentId: o
						} = t;
						return o ? Object(w.n)(e, {
							commentId: o
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: o
						} = t;
						const n = o && e.posts.models[o];
						return !!n && Object(S.i)(n)
					},
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(o => {
						const {
							commentId: n,
							postId: s
						} = t, r = n ? Object(w.n)(e, {
							commentId: n
						}) : null, i = s ? Object(E.O)(e, {
							postId: s
						}) : null;
						r ? r.author : i && i.author;
						o.name
					})
				}),
				T = Object(l.b)(g, (e, t) => {
					let {
						timestamp: o
					} = t;
					return {
						onCloseReportFlow: () => {
							e(Object(c.i)())
						},
						onBlockUser: t => {
							e(Object(m.h)(t))
						}
					}
				}),
				I = async (e, t) => {
					var o;
					const n = await ((e, t) => Object(b.a)(e, Object.assign(Object.assign({}, _), {
						variables: t
					})))(e, t);
					if (n && n.ok) {
						const e = null === (o = n.body.data.reportForm) || void 0 === o ? void 0 : o.form;
						return e ? JSON.parse(e) : null
					}
				};
			class k extends i.a.Component {
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
						t.new !== x.a.pending && this.props.onBlockUser(e)
					}, this.onOpenCtlFlow = () => {
						this.setState({
							ctlFlowOpened: !0
						})
					}, this.onReportSubmit = async (e, t) => {
						const {
							props: {
								gqlContext: o,
								postId: n,
								commentId: r
							}
						} = this, i = r ? "comment" : n ? "post" : null;
						if (!i || !e) return;
						const {
							ruleId: l,
							ruleType: a
						} = e, c = "comment" === i ? r : n, d = {
							fromHelpDesk: !1,
							["".concat(i, "Id")]: c
						};
						switch (a) {
							case "site":
								d.siteRule = s()(t, l.ref);
								break;
							case "subreddit":
								d.subredditRule = s()(t, l.ref);
								break;
							case "custom":
							default:
								d.customRule = s()(t, l.ref)
						}
						switch (i) {
							case "post":
								await C(o(), {
									input: d
								});
								break;
							case "comment":
								await R(o(), {
									input: d
								});
								break;
							default:
								return
						}
					}, this.state = {
						ctlFlowOpened: !1
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					const {
						gqlContext: e,
						postId: t,
						commentId: o
					} = this.props, n = o || t;
					I(e(), {
						itemId: n
					}).then(e => {
						e && this.setState({
							formComponent: e.component,
							formState: e.state
						})
					}), document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						props: {
							commentId: e,
							postId: t,
							comment: o,
							post: n
						},
						state: {
							formComponent: s,
							formState: r,
							ctlFlowOpened: l
						}
					} = this, a = e ? null == o ? void 0 : o.author : t ? null == n ? void 0 : n.author : null;
					return l && a ? i.a.createElement(u.b, {
						withOverlay: !0,
						overlayCustomStyles: u.a,
						fromUserProfile: !0,
						username: a,
						onCloseCrisisModal: this.handleReportFlowClose
					}) : s && r ? i.a.createElement(p.a, {
						formComponent: s,
						formState: r,
						onCloseClick: this.handleReportFlowClose,
						onSubmit: this.onReportSubmit,
						headerTitle: "Report an issue",
						onOpenCtlFlow: this.onOpenCtlFlow,
						onBlockAuthor: () => this.onBlockAuthor(a)
					}) : null
				}
			}
			const A = Object(f.b)(T(k));
			t.default = Object(d.a)(A)
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			})), o.d(t, "b", (function() {
				return a
			}));
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);

			function r() {
				return (r = Object.assign || function(e) {
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
				l = Object(n.createContext)(i);

			function a(e) {
				return t => s.a.createElement(l.Consumer, null, o => {
					let {
						apiContext: n,
						gqlContext: i
					} = o;
					return s.a.createElement(e, r({
						apiContext: n,
						gqlContext: i
					}, t))
				})
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return a
			})), o.d(t, "c", (function() {
				return c
			})), o.d(t, "e", (function() {
				return d
			})), o.d(t, "d", (function() {
				return u
			})), o.d(t, "b", (function() {
				return p
			}));
			var n = o("./src/config.ts"),
				s = o("./src/lib/constants/index.ts"),
				r = o("./src/lib/makeApiRequest/index.ts"),
				i = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/reddit/constants/headers.ts");
			const a = async (e, t) => Object(r.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: s.db.POST
			}), c = async (e, t, o) => Object(r.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: o,
					container: t,
					type: "enemy"
				},
				endpoint: "".concat(e.apiUrl, "/api/unfriend"),
				method: s.db.POST
			}), d = async (e, t) => Object(r.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/add_whitelisted?include_model"),
				method: s.db.POST
			}), u = async (e, t) => Object(r.a)(Object(i.a)(e, [l.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/remove_whitelisted"),
				method: s.db.POST
			}), p = async (e, t) => Object(r.a)(Object(i.a)(e, [l.a]), {
				endpoint: "".concat(n.a.oauthUrl, "/user/").concat(t, "/about"),
				method: s.db.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, o) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return d
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				l = o.n(i);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var c = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			const d = e => {
				var {
					className: t,
					isSubreddit: o
				} = e, n = c(e, ["className", "isSubreddit"]);
				return s.a.createElement("svg", a({
					className: Object(r.a)(l.a.dropdown, {
						[l.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				i = o("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				l = o.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(l.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
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
				return s
			})), o.d(t, "c", (function() {
				return r
			}));
			const n = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				r = (e, t) => {
					const o = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!o && o.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.e150bc3430ff3e1c7661.js.map