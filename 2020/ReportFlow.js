// https://www.redditstatic.com/desktop2x/ReportFlow.eb618cf53c54a95724df.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow"], {
		"./src/graphql/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
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
				return f
			}));
			var o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/graphql/operations/FetchBlockedRedditorsInfo.json"),
				r = n("./src/lib/makeGqlRequest/index.ts");
			const i = (e, t) => Object(r.a)(e, Object.assign(Object.assign({}, s), {
				variables: t
			}), {
				traceRequestName: "get_blocked_redditors_info"
			});
			var a = n("./src/reddit/selectors/blockedRedditors.ts");
			const l = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				c = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				p = "BLOCKED_REDDITORS_LIST__PENDING",
				m = Object(o.a)(l),
				h = Object(o.a)(d),
				b = Object(o.a)(c),
				R = Object(o.a)(u),
				C = Object(o.a)(p),
				f = () => async (e, t, n) => {
					let {
						gqlContext: o
					} = n;
					const s = t(),
						r = Object(a.a)(s);
					if (Object(a.b)(s) || r.timestamp && Date.now() - r.timestamp < 36e6) return;
					let l = !1,
						d = "";
					do {
						e(C());
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
									pageInfo: n,
									edges: o
								} = t.blockedRedditorsInfo;
								if (e(R(o.map(e => e.node.id))), n) {
									const {
										hasNextPage: e,
										endCursor: t
									} = n;
									l = e, d = t || ""
								}
							} else l = !1
						} else {
							l = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (l)
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
				return R
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "g", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/blockedRedditors.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/accounts/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const c = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				p = "USER_BLOCK__FAILED",
				m = Object(s.a)(c),
				h = Object(s.a)(u),
				b = Object(s.a)(p),
				R = e => async (t, n, s) => {
					let {
						apiContext: d
					} = s;
					if (n().blockUser.api.pending[e]) return;
					t(m({
						username: e
					}));
					const c = await Object(a.a)(d(), e),
						u = "error-block-".concat(e);
					if (c.ok) c.body.name && t(h(c.body)), c.body.id && t(Object(r.f)(c.body.id)), t(i.f(u)), t(i.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now blocked", [o.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const n = {
							type: c.error ? c.error.type : "Unknown error",
							username: e
						};
						t(b(n)), t(i.e({
							id: u,
							kind: l.b.Error,
							text: o.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: o.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: R(e)
						}))
					}
				}, C = "USER_UNBLOCK__PENDING", f = "USER_UNBLOCK__SUCCESS", w = "USER_UNBLOCK__FAILED", x = Object(s.a)(C), g = Object(s.a)(f), O = Object(s.a)(w), _ = e => async (t, n, s) => {
					let {
						apiContext: c
					} = s;
					const u = n(),
						p = Object(d.i)(u),
						m = p ? p.id : void 0,
						h = u.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(x({
						name: e
					})), (await Object(a.c)(c(), m, e)).ok ? (t(g({
						name: e
					})), h && h.id && t(Object(r.h)(h.id)), t(i.e({
						kind: l.b.SuccessCommunity,
						text: o.fbt._("{username} is now unblocked", [o.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(i.e({
						kind: l.b.Error,
						text: o.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
						name: e
					}))))
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/formatPythonString/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/CrisisFlow/async.tsx"),
				p = n("./src/reddit/actions/reportFlow.ts"),
				m = n("./src/reddit/components/ContentPolicy/index.tsx"),
				h = n("./src/reddit/layout/row/Inline/index.tsx"),
				b = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/higherOrderComponents/asTooltip.tsx")),
				R = n("./src/lib/classNames/index.ts"),
				C = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.tsx"),
				w = n("./src/reddit/controls/Dropdown/Row.tsx"),
				x = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = n("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				O = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const k = c.a.div("ContentPolicyHolder", O.a),
				E = c.a.div("Header", O.a),
				v = c.a.div("Description", O.a),
				y = c.a.wrapped(C.l, "CloseButton", O.a),
				T = c.a.div("RadioOptionsSectionHeader", O.a),
				F = c.a.wrapped(w.b, "DropdownRow", O.a),
				P = c.a.div("PickerWrapper", O.a),
				j = c.a.div("SelectARuleLabel", O.a),
				I = e => {
					var {
						className: t,
						isChosen: n
					} = e, o = S(e, ["className", "isChosen"]);
					return r.a.createElement(j, _({
						className: Object(R.a)(t, {
							[O.a.isChosen]: n
						})
					}, o))
				},
				L = Object(b.a)(f.a),
				D = c.a.wrapped(L, "Dropdown", O.a),
				A = c.a.wrapped(x.b, "DropdownTriangle", O.a),
				U = c.a.wrapped(w.b, "Row", O.a);
			var B = n("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				N = n.n(B);
			const H = c.a.div("LinkHolder", N.a),
				q = c.a.a("Link", N.a),
				K = c.a.wrapped(h.a, "footer", N.a);
			var W = e => r.a.createElement("div", null, r.a.createElement(E, null, e.complaintPageTitle), r.a.createElement(v, null, e.complaintPrompt || o.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(H, null, r.a.createElement(q, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(K, null, r.a.createElement(k, null, r.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), r.a.createElement(y, {
					onClick: e.onClose
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				J = n("./src/reddit/actions/userBlocks.ts"),
				M = n("./src/reddit/models/WhitelistAndBlocked.ts"),
				X = n("./src/reddit/icons/svgs/ProfileSlashed/index.tsx"),
				z = n("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				Y = n.n(z);
			const Q = c.a.wrapped(h.a, "blockUserHolder", Y.a),
				V = c.a.wrapped(X.a, "BlockUserIcon", Y.a),
				G = c.a.div("BlockUserHeader", Y.a),
				Z = c.a.div("OptionHolder", Y.a),
				$ = c.a.div("OptionHeader", Y.a),
				ee = c.a.div("OptionDescription", Y.a),
				te = c.a.a("Link", Y.a),
				ne = c.a.wrapped(h.a, "footer", Y.a),
				oe = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				se = Object(a.c)({
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
						t.new !== M.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: n
						} = this.props;
						return n.new === M.a.pending ? o.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? o.fbt._("{username} is blocked", [o.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : o.fbt._("Block {username}", [o.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => r.a.createElement(Z, null, r.a.createElement($, null, o.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement(ee, null, o.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [o.fbt._param("=visit the Help Center", r.a.createElement(te, {
						target: "_blank",
						href: oe
					}, o.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return r.a.createElement(Q, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, r.a.createElement(V, null), r.a.createElement("div", null, r.a.createElement(G, null, t), r.a.createElement(ee, null, o.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [o.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(E, null, o.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), r.a.createElement(v, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), r.a.createElement(ne, null, r.a.createElement(k, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(y, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var ie = Object(i.b)(se, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(J.h)(t))
						}
					}
				})(re),
				ae = n("./src/reddit/components/AccordionSection/index.tsx"),
				le = n("./src/reddit/actions/tooltip.ts"),
				de = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				ce = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				ue = n("./src/reddit/endpoints/post/index.tsx"),
				pe = n("./src/reddit/selectors/tooltip.ts");
			const me = "ReportFlow--RedditRules",
				he = Object(a.c)({
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
						onOpenDropdown: n,
						reason: s,
						rulesSequence: i
					} = t, a = s.nextStepReasons, l = i.length > e ? i[e] : -1, d = a && l >= 0 ? a[l] : null;
					return r.a.createElement(P, {
						onClick: n
					}, r.a.createElement(U, {
						displayText: d ? d.reasonTextToShow : "",
						id: me
					}), r.a.createElement(A, null), r.a.createElement(I, {
						isChosen: !!d
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(D, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: me
					}, a ? a.map((n, o) => r.a.createElement(F, {
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
						rulesSequence: s
					} = o, i = e.nextStepReasons, a = s && s.length > t ? s[t] : -1, l = s && s.length > t + 1 ? s[t + 1] : -1;
					return i && i.length ? r.a.createElement("div", {
						style: {
							padding: "10px ".concat(10 * t, "px"),
							display: a === n ? "block" : "none"
						}
					}, r.a.createElement(T, null, e.nextStepHeader), i.map((e, n) => {
						const o = l === n;
						return r.a.createElement("div", {
							key: e.reasonTextToShow
						}, r.a.createElement(ce.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: o,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
							}
						}), o && e.canWriteNotes && r.a.createElement(de.a, {
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
						} = e, o = t.nextStepReasons, s = n.length > 1 ? n[1] : -1, i = o && s >= 0 ? o[s] : null;
						return r.a.createElement("div", null, this.renderDropdownMenu(1), i ? this.renderChildrenReasons(i, 1, s) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var Re = Object(i.b)(he, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: me
					}))
				}))(be),
				Ce = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				fe = n("./src/reddit/selectors/subreddit.ts"),
				we = n("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				xe = n.n(we);
			const ge = "ReportFlow--SubredditRules",
				Oe = "Custom response",
				_e = c.a.wrapped(D, "Dropdown", xe.a),
				Se = c.a.wrapped(F, "DropdownRow", xe.a),
				ke = c.a.wrapped(Ce.i, "FreeFormTextArea", xe.a),
				Ee = Object(a.c)({
					dropdownIsOpen: Object(pe.b)(ge),
					freeFormReports: fe.F
				});
			class ve extends r.a.Component {
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
					} = this, n = e.chosenRule && e.chosenRule.reasonText && e.subredditRules.includes(e.chosenRule.reasonText) ? e.chosenRule.reasonText : t.dropdownRule ? t.dropdownRule : "";
					return r.a.createElement("div", null, r.a.createElement(P, {
						onClick: e.onOpenDropdown
					}, r.a.createElement(U, {
						displayText: n,
						id: ge
					}), r.a.createElement(A, null), r.a.createElement(I, {
						isChosen: !!n
					}, o.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(_e, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: ge
					}, e.subredditRules.map((t, n) => r.a.createElement(Se, {
						key: "".concat(t, "-").concat(n),
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, ue.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? r.a.createElement(Se, {
						displayText: o.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === Oe,
						onClick: () => {
							this.onChangeDropdownRule(Oe), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === Oe ? r.a.createElement(ke, {
						placeholder: o.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var ye = Object(i.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(le.h)({
						tooltipId: ge
					}))
				}))(ve),
				Te = n("./src/reddit/models/RulesSequence/index.ts"),
				Fe = n("./src/reddit/models/Subreddit/index.ts"),
				Pe = n("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				je = n.n(Pe);
			const Ie = c.a.wrapped(C.i, "SubmitButton", je.a);
			class Le extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Te.a
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
					} = this, s = n.rulesSequence.getSequence(), i = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return r.a.createElement(ae.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Fe.e.User ? o.fbt._("It breaks u/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "QcQnb"
						}) : o.fbt._("It breaks r/{subredditName}'s rules", [o.fbt._param("subredditName", i)], {
							hk: "1Qdm9t"
						}),
						open: s.length > 0 && s[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, r.a.createElement(ye, {
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
					} = this, s = o.rulesSequence.getSequence();
					return r.a.createElement(ae.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: s.length > 0 && s[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, r.a.createElement(Re, {
						onChosenRuleChange: n.onChosenRuleChange,
						onCustomTextChange: n.onCustomTextChange,
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
					const n = [t[0]].concat([{
						reasonTextToShow: "subredditRulesPlaceholder"
					}]).concat(t.slice(1));
					return r.a.createElement("div", null, r.a.createElement(E, null, o.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), n.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), r.a.createElement(h.a, {
						className: je.a.Footer
					}, r.a.createElement(k, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(y, {
						onClick: e.onClose
					}, o.fbt._("Close", null, {
						hk: "4gbyAA"
					})), r.a.createElement(Ie, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : o.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var De = Le,
				Ae = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Ue = n("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Be = n.n(Ue);
			const Ne = c.a.wrapped(h.a, "Title", Be.a),
				He = c.a.div("CloseWrapper", Be.a),
				qe = c.a.wrapped(Ae.a, "Close", Be.a);
			var Ke, We = e => r.a.createElement(Ne, null, r.a.createElement("div", null, e.title), r.a.createElement(He, {
					onClick: e.onClosePressed
				}, r.a.createElement(qe, null))),
				Je = n("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(Ke || (Ke = {}));
			var Me = n("./src/reddit/selectors/comments.ts"),
				Xe = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				ze = n("./src/reddit/selectors/posts.ts"),
				Ye = n("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Qe = n.n(Ye);
			const Ve = c.a.div("CloseWrapper", Qe.a),
				Ge = c.a.wrapped(Ae.a, "Close", Qe.a),
				Ze = Object(a.c)({
					comment: (e, t) => {
						let {
							commentId: n
						} = t;
						return n ? Object(Me.n)(e, {
							commentId: n
						}) : null
					},
					isLiveStreaming: (e, t) => {
						let {
							postId: n
						} = t;
						const o = n && e.posts.models[n];
						return !!o && Object(Je.i)(o)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(ze.N)(e, {
							postId: n
						}) : null
					},
					reportedPending: e => e.reportFlow.api.pending,
					reportedSuccess: e => e.reportFlow.api.success,
					sitewideRules: e => e.reportRules.sitewideRules,
					subredditOrProfile: (e, t) => {
						let {
							postId: n
						} = t;
						return n ? Object(ze.ab)(e, {
							postId: n
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.reportFlow.userIsMod,
					crisisFlowEnabled: Xe.a
				});
			class $e extends r.a.Component {
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
					} = this, n = t.commentId ? Ke.Comment : Ke.Post, s = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], i = t.subredditRules, a = t.subredditOrProfile ? t.subredditOrProfile.id : null, l = new Array;
					if (a && i[a])
						for (const o of i[a].rules) o.kind !== n && o.kind !== Ke.All || l.push(0 !== o.violationReason.length ? o.violationReason : o.shortName);
					const d = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return r.a.createElement(De, {
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
						submitButtonText: s ? o.fbt._("Pending", null, {
							hk: "2dd0cR"
						}) : void 0
					})
				}
				getInnerContent() {
					const {
						state: e,
						props: t
					} = this;
					if (e.chosenRule && e.chosenRule.fileComplaint && e.showFileAComplaintPage) return r.a.createElement(W, {
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
						return r.a.createElement(ie, {
							authorName: n,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const n = t.post ? t.post.author : "";
						return r.a.createElement(ie, {
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
					if (t.crisisFlowEnabled && e.chosenRuleKind === ue.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return r.a.createElement(s.Fragment, null, r.a.createElement(Ve, {
							onClick: this.handleReportFlowClose
						}, r.a.createElement(Ge, null)), r.a.createElement(u.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const n = (t.commentId ? Ke.Comment : Ke.Post) === Ke.Post ? o.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? o.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : o.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return r.a.createElement(s.Fragment, null, r.a.createElement(We, {
						onClosePressed: t.onCloseReportFlow,
						title: n
					}), r.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return r.a.createElement("div", {
						className: Qe.a.Wrapper
					}, this.getContent())
				}
			}
			const et = Object(i.b)(Ze, (e, t) => {
				let {
					timestamp: n
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(p.i)())
					},
					onReportPostOrComment: (t, o, s) => {
						e(Object(p.h)({
							id: t,
							reportFlowPayload: o,
							timestamp: n
						}, s))
					}
				}
			})($e);
			t.default = Object(l.a)(et)
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
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			const l = async (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/block_user"),
				method: s.db.POST
			}), d = async (e, t, n) => Object(r.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: n,
					container: t,
					type: "enemy"
				},
				endpoint: "".concat(e.apiUrl, "/api/unfriend"),
				method: s.db.POST
			}), c = async (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/add_whitelisted?include_model"),
				method: s.db.POST
			}), u = async (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
				data: {
					name: t
				},
				endpoint: "".concat(e.apiUrl, "/api/remove_whitelisted"),
				method: s.db.POST
			}), p = async (e, t) => Object(r.a)(Object(i.a)(e, [a.a]), {
				endpoint: "".concat(o.a.oauthUrl, "/user/").concat(t, "/about"),
				method: s.db.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o);
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const c = e => {
				var {
					className: t,
					isSubreddit: n
				} = e, o = d(e, ["className", "isSubreddit"]);
				return s.a.createElement("svg", l({
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				a = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
			})))
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
				return s
			})), n.d(t, "c", (function() {
				return r
			}));
			const o = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				r = (e, t) => {
					const n = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!n && n.includes(t)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow.eb618cf53c54a95724df.js.map