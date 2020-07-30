// https://www.redditstatic.com/desktop2x/ReportFlow.2ab593ac87e5e4c95f5b.js
// Retrieved at 7/30/2020, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow"], {
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
				l = o("./node_modules/react-redux/es/index.js"),
				i = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/asModal/index.tsx"),
				d = o("./src/lib/formatPythonString/index.ts"),
				c = o("./src/lib/lessComponent.tsx"),
				p = o("./src/reddit/components/CrisisFlow/async.tsx"),
				u = o("./src/reddit/actions/reportFlow.ts"),
				m = o("./src/reddit/components/ContentPolicy/index.tsx"),
				h = o("./src/reddit/layout/row/Inline/index.tsx"),
				R = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./src/higherOrderComponents/asTooltip.tsx")),
				C = o("./src/lib/classNames/index.ts"),
				b = o("./src/reddit/controls/Button/index.tsx"),
				w = o("./src/reddit/controls/Dropdown/index.tsx"),
				x = o("./src/reddit/controls/Dropdown/Row.tsx"),
				g = o("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = o("./src/reddit/components/ReportFlow/ReusableComponents/index.m.less"),
				S = o.n(f);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			const _ = c.a.div("ContentPolicyHolder", S.a),
				k = c.a.div("Header", S.a),
				T = c.a.div("Description", S.a),
				E = c.a.wrapped(b.i, "CloseButton", S.a),
				y = c.a.div("RadioOptionsSectionHeader", S.a),
				F = c.a.wrapped(x.b, "DropdownRow", S.a),
				P = c.a.div("PickerWrapper", S.a),
				I = c.a.div("SelectARuleLabel", S.a),
				L = e => {
					var {
						className: t,
						isChosen: o
					} = e, n = v(e, ["className", "isChosen"]);
					return r.a.createElement(I, O({
						className: Object(C.a)(t, {
							[S.a.isChosen]: o
						})
					}, n))
				},
				A = Object(R.a)(w.a),
				j = c.a.wrapped(A, "Dropdown", S.a),
				D = c.a.wrapped(g.b, "DropdownTriangle", S.a),
				U = c.a.wrapped(x.b, "Row", S.a);
			var H = o("./src/reddit/components/ReportFlow/FileAComplaint/index.m.less"),
				B = o.n(H);
			const N = c.a.div("LinkHolder", B.a),
				q = c.a.a("Link", B.a),
				W = c.a.wrapped(h.a, "footer", B.a);
			var K = e => r.a.createElement("div", null, r.a.createElement(k, null, e.complaintPageTitle), r.a.createElement(T, null, e.complaintPrompt || n.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(N, null, r.a.createElement(q, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(W, null, r.a.createElement(_, null, r.a.createElement(m.a, {
					isLiveStreaming: e.isLiveStreaming,
					subredditOrProfile: e.subredditOrProfile
				})), r.a.createElement(E, {
					onClick: e.onClose
				}, n.fbt._("Close", null, {
					hk: "4gbyAA"
				})))),
				J = o("./src/reddit/actions/userBlocks.ts"),
				X = o("./src/reddit/models/WhitelistAndBlocked.ts"),
				M = o("./src/reddit/icons/svgs/ProfileSlashed/index.m.less"),
				Y = o.n(M);
			var z = e => r.a.createElement("svg", {
					className: Object(C.a)(Y.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, r.a.createElement("g", {
					fill: "inherit"
				}, r.a.createElement("path", {
					d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
				}))),
				Q = o("./src/reddit/components/ReportFlow/FinalPage/index.m.less"),
				V = o.n(Q);
			const G = c.a.wrapped(h.a, "blockUserHolder", V.a),
				Z = c.a.wrapped(z, "BlockUserIcon", V.a),
				$ = c.a.div("BlockUserHeader", V.a),
				ee = c.a.div("OptionHolder", V.a),
				te = c.a.div("OptionHeader", V.a),
				oe = c.a.div("OptionDescription", V.a),
				ne = c.a.a("Link", V.a),
				se = c.a.wrapped(h.a, "footer", V.a),
				re = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse",
				le = Object(i.c)({
					blockUserPending: e => e.user.blocked.api,
					blockedUser: (e, t) => e.user.blocked.data.find(e => e.name === t.authorName),
					users: e => e.users
				});
			class ie extends r.a.Component {
				constructor() {
					super(...arguments), this.onBlockAuthor = e => {
						const {
							blockUserPending: t
						} = this.props;
						t.new !== X.a.pending && this.props.onBlockUser(e)
					}, this.getBlockUserHeaderText = () => {
						const {
							authorName: e,
							blockedUser: t,
							blockUserPending: o
						} = this.props;
						return o.new === X.a.pending ? n.fbt._("Pending...", null, {
							hk: "4x1oRk"
						}) : t ? n.fbt._("{username} is blocked", [n.fbt._param("username", e)], {
							hk: "3jnr1Z"
						}) : n.fbt._("Block {username}", [n.fbt._param("username", e)], {
							hk: "ohbdA"
						})
					}, this.renderAbuseOfReportButtonOption = () => r.a.createElement(ee, null, r.a.createElement(te, null, n.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement(oe, null, n.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit’s reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [n.fbt._param("=visit the Help Center", r.a.createElement(ne, {
						target: "_blank",
						href: re
					}, n.fbt._("visit the Help Center", null, {
						hk: "1YxsbF"
					})))], {
						hk: "1WnTfk"
					}))), this.renderBlockUserOption = () => {
						const {
							props: e
						} = this, t = this.getBlockUserHeaderText();
						return r.a.createElement(G, {
							onClick: () => this.onBlockAuthor(e.authorName)
						}, r.a.createElement(Z, null), r.a.createElement("div", null, r.a.createElement($, null, t), r.a.createElement(oe, null, n.fbt._("You won't see posts or comments from {username}. You can change this later in your preference.", [n.fbt._param("username", e.authorName)], {
							hk: "2iUUlN"
						}))))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", null, r.a.createElement(k, null, n.fbt._("Thanks for letting us know!", null, {
						hk: "ytmSE"
					})), r.a.createElement(T, null, n.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "QxA7E"
					})), e.chosenRule.isAbuseOfReportButton ? this.renderAbuseOfReportButtonOption() : this.renderBlockUserOption(), r.a.createElement(se, null, r.a.createElement(_, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(E, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					}))))
				}
			}
			var ae = Object(l.b)(le, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(J.h)(t))
						}
					}
				})(ie),
				de = o("./src/reddit/components/AccordionSection/index.tsx"),
				ce = o("./src/reddit/actions/tooltip.ts"),
				pe = o("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				ue = o("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				me = o("./src/reddit/endpoints/post/index.tsx"),
				he = o("./src/reddit/selectors/tooltip.ts");
			const Re = "ReportFlow--RedditRules",
				Ce = Object(i.c)({
					dropdownIsOpen: Object(he.b)(Re)
				});
			class be extends r.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, e.requestCrisisSupport ? me.a.CrisisTextLine : e.fileComplaint ? me.a.FileComplaint : me.a.SiteRule)
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
						rulesSequence: l
					} = t, i = s.nextStepReasons, a = l.length > e ? l[e] : -1, d = i && a >= 0 ? i[a] : null;
					return r.a.createElement(P, {
						onClick: o
					}, r.a.createElement(U, {
						displayText: d ? d.reasonTextToShow : "",
						id: Re
					}), r.a.createElement(D, null), r.a.createElement(L, {
						isChosen: !!d
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(j, {
						isFixed: !0,
						isOpen: t.dropdownIsOpen,
						tooltipId: Re
					}, i ? i.map((o, n) => r.a.createElement(F, {
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
					} = n, l = e.nextStepReasons, i = s && s.length > t ? s[t] : -1, a = s && s.length > t + 1 ? s[t + 1] : -1;
					return l && l.length ? r.a.createElement("div", {
						style: {
							padding: "10px ".concat(10 * t, "px"),
							display: i === o ? "block" : "none"
						}
					}, r.a.createElement(y, null, e.nextStepHeader), l.map((e, o) => {
						const n = a === o;
						return r.a.createElement("div", {
							key: e.reasonTextToShow
						}, r.a.createElement(ue.a, {
							value: e.reasonText ? e.reasonText : "",
							label: e.reasonTextToShow,
							selected: n,
							onClick: e.nextStepReasons && e.nextStepReasons.length ? () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onChosenRuleCleared()
							} : () => {
								this.props.onUpdateRulesSequence(o, t + 1), this.onRedditRuleChange(e)
							}
						}), n && e.canWriteNotes && r.a.createElement(pe.a, {
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
						} = e, n = t.nextStepReasons, s = o.length > 1 ? o[1] : -1, l = n && s >= 0 ? n[s] : null;
						return r.a.createElement("div", null, this.renderDropdownMenu(1), l ? this.renderChildrenReasons(l, 1, s) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var we = Object(l.b)(Ce, e => ({
					onOpenDropdown: () => e(Object(ce.h)({
						tooltipId: Re
					}))
				}))(be),
				xe = o("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ge = o("./src/reddit/selectors/subreddit.ts"),
				fe = o("./src/reddit/components/ReportFlow/SubredditRulesPicker/index.m.less"),
				Se = o.n(fe);
			const Oe = "ReportFlow--SubredditRules",
				ve = "Custom response",
				_e = c.a.wrapped(j, "Dropdown", Se.a),
				ke = c.a.wrapped(F, "DropdownRow", Se.a),
				Te = c.a.wrapped(xe.i, "FreeFormTextArea", Se.a),
				Ee = Object(i.c)({
					dropdownIsOpen: Object(he.b)(Oe),
					freeFormReports: ge.D
				});
			class ye extends r.a.Component {
				constructor(e) {
					super(e), this.onChangeDropdownRule = e => {
						this.setState({
							dropdownRule: e
						})
					}, this.onFreeFormResponseChange = e => {
						"" === e.currentTarget.value ? this.props.onChosenRuleChange() : this.props.onChosenRuleChange({
							reasonText: e.currentTarget.value,
							reasonTextToShow: e.currentTarget.value
						}, me.a.Other)
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
					return r.a.createElement("div", null, r.a.createElement(P, {
						onClick: e.onOpenDropdown
					}, r.a.createElement(U, {
						displayText: o,
						id: Oe
					}), r.a.createElement(D, null), r.a.createElement(L, {
						isChosen: !!o
					}, n.fbt._("Select a rule", null, {
						hk: "26hOYU"
					})), r.a.createElement(_e, {
						isFixed: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: Oe
					}, e.subredditRules.map((t, o) => r.a.createElement(ke, {
						key: "".concat(t, "-").concat(o),
						displayText: t,
						isSelected: !!e.chosenRule && e.chosenRule.reasonText === t,
						onClick: () => {
							e.onChosenRuleChange({
								reasonText: t,
								reasonTextToShow: t
							}, me.a.Rule), this.onChangeDropdownRule(null)
						}
					})), e.freeFormReports ? r.a.createElement(ke, {
						displayText: n.fbt._("Custom response", null, {
							hk: "1YMpvr"
						}),
						isSelected: t.dropdownRule === ve,
						onClick: () => {
							this.onChangeDropdownRule(ve), this.onChosenRuleCleared()
						}
					}) : null)), t.dropdownRule === ve ? r.a.createElement(Te, {
						placeholder: n.fbt._("Give us some detail about your report", null, {
							hk: "4Cp82U"
						}),
						onChange: this.onFreeFormResponseChange
					}) : null)
				}
			}
			var Fe = Object(l.b)(Ee, e => ({
					onOpenDropdown: () => e(Object(ce.h)({
						tooltipId: Oe
					}))
				}))(ye),
				Pe = o("./src/reddit/models/RulesSequence/index.ts"),
				Ie = o("./src/reddit/models/Subreddit/index.ts"),
				Le = o("./src/reddit/components/ReportFlow/FirstPage/index.m.less"),
				Ae = o.n(Le);
			const je = c.a.wrapped(b.f, "SubmitButton", Ae.a);
			class De extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Pe.a
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
					} = this, s = o.rulesSequence.getSequence(), l = t.subredditOrProfile ? t.subredditOrProfile.name : "";
					return r.a.createElement(de.a, {
						key: "subreddit_rules_section_key",
						title: t.subredditOrProfile && t.subredditOrProfile.type === Ie.d.User ? n.fbt._("It breaks u/{subredditName}'s rules", [n.fbt._param("subredditName", l)], {
							hk: "QcQnb"
						}) : n.fbt._("It breaks r/{subredditName}'s rules", [n.fbt._param("subredditName", l)], {
							hk: "1Qdm9t"
						}),
						open: s.length > 0 && s[0] === e || "community" === t.rulesCategory,
						onOpen: () => this.onUpdateRulesSequence(e, 0)
					}, r.a.createElement(Fe, {
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
					return r.a.createElement(de.a, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: s.length > 0 && s[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, r.a.createElement(we, {
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
					return r.a.createElement("div", null, r.a.createElement(k, null, n.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3ljmuE"
					})), o.map((e, t) => 1 === t ? this.renderSubredditRulesSection(t) : this.renderRulesSection(e, t)), r.a.createElement(h.a, {
						className: Ae.a.Footer
					}, r.a.createElement(_, null, r.a.createElement(m.a, {
						isLiveStreaming: e.isLiveStreaming,
						subredditOrProfile: e.subredditOrProfile
					})), r.a.createElement(E, {
						onClick: e.onClose
					}, n.fbt._("Close", null, {
						hk: "4gbyAA"
					})), r.a.createElement(je, {
						onClick: e.onSubmit,
						disabled: !e.ruleIsChosen
					}, e.submitButtonText ? e.submitButtonText : n.fbt._("Submit", null, {
						hk: "3Z7VqM"
					}))))
				}
			}
			var Ue = De,
				He = o("./src/reddit/icons/svgs/Close/index.tsx"),
				Be = o("./src/reddit/components/ReportFlow/Title/index.m.less"),
				Ne = o.n(Be);
			const qe = c.a.wrapped(h.a, "Title", Ne.a),
				We = c.a.div("CloseWrapper", Ne.a),
				Ke = c.a.wrapped(He.a, "Close", Ne.a);
			var Je, Xe = e => r.a.createElement(qe, null, r.a.createElement("div", null, e.title), r.a.createElement(We, {
					onClick: e.onClosePressed
				}, r.a.createElement(Ke, null))),
				Me = o("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.All = "all", e.Comment = "comment", e.Post = "post"
			}(Je || (Je = {}));
			var Ye = o("./src/reddit/selectors/comments.ts"),
				ze = o("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Qe = o("./src/reddit/selectors/posts.ts"),
				Ve = o("./src/reddit/components/ReportFlow/_ReportFlow.m.less"),
				Ge = o.n(Ve);
			const Ze = c.a.div("CloseWrapper", Ge.a),
				$e = c.a.wrapped(He.a, "Close", Ge.a),
				et = Object(i.c)({
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
						return !!n && Object(Me.i)(n)
					},
					liveStreamingRules: e => e.reportRules.liveStreamingRules,
					rulesCategory: e => e.reportFlow.rulesCategory,
					post: (e, t) => {
						let {
							postId: o
						} = t;
						return o ? Object(Qe.O)(e, {
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
						return o ? Object(Qe.bb)(e, {
							postId: o
						}) : null
					},
					subredditRules: e => e.subreddits.rules,
					userIsMod: e => e.reportFlow.userIsMod,
					crisisFlowEnabled: ze.a
				});
			class tt extends r.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						if (27 === e.keyCode) return this.handleReportFlowClose()
					}, this.handleReportFlowClose = () => {
						if (this.props.onCloseReportModal) return this.props.onCloseReportModal();
						this.props.onCloseReportFlow()
					}, this.onSubmit = () => {
						if (this.state.chosenRule)
							if (this.props.crisisFlowEnabled)
								if (this.state.chosenRuleKind === me.a.CrisisTextLine) this.setState({
									showCTLPage: !0
								});
								else if (this.state.chosenRuleKind === me.a.FileComplaint) this.setState({
							showFileAComplaintPage: !0
						});
						else {
							const e = {
								rule: this.state.chosenRule.reasonText,
								kind: this.state.chosenRuleKind
							};
							this.state.chosenRule.canWriteNotes && (e.customText = this.state.customText), this.props.commentId ? this.props.onReportPostOrComment(this.props.commentId, e, this.state.chosenRule) : this.props.postId && this.props.onReportPostOrComment(this.props.postId, e, this.state.chosenRule)
						} else if (this.state.chosenRuleKind === me.a.FileComplaint || this.state.chosenRuleKind === me.a.CrisisTextLine) this.setState({
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
					} = this, o = t.commentId ? Je.Comment : Je.Post, s = t.commentId ? t.reportedPending[t.commentId] : t.postId && t.reportedPending[t.postId], l = t.subredditRules, i = t.subredditOrProfile ? t.subredditOrProfile.id : null, a = new Array;
					if (i && l[i])
						for (const n of l[i].rules) n.kind !== o && n.kind !== Je.All || a.push(0 !== n.violationReason.length ? n.violationReason : n.shortName);
					const d = this.props.isLiveStreaming ? t.liveStreamingRules : t.sitewideRules;
					return r.a.createElement(Ue, {
						isLiveStreaming: t.isLiveStreaming,
						onSubmit: this.onSubmit,
						onClose: t.onCloseReportFlow,
						subredditRules: a,
						onChosenRuleChange: this.onChosenRuleChange,
						onCustomTextChange: this.onCustomTextChange,
						ruleIsChosen: !!e.chosenRule,
						chosenRule: e.chosenRule,
						reasons: d,
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
						complaintUrl: Object(d.a)(decodeURI(e.chosenRule.complaintUrl), {
							thing: t.commentId || t.postId
						}),
						isLiveStreaming: t.isLiveStreaming,
						onClose: t.onCloseReportFlow,
						subredditOrProfile: t.subredditOrProfile
					});
					if (e.chosenRule && t.commentId && t.reportedSuccess[t.commentId]) {
						const o = t.comment ? t.comment.author : "";
						return r.a.createElement(ae, {
							authorName: o,
							chosenRule: e.chosenRule,
							onClose: t.onCloseReportFlow,
							subredditOrProfile: t.subredditOrProfile
						})
					}
					if (e.chosenRule && !t.commentId && t.postId && t.reportedSuccess[t.postId]) {
						const o = t.post ? t.post.author : "";
						return r.a.createElement(ae, {
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
					if (t.crisisFlowEnabled && e.chosenRuleKind === me.a.CrisisTextLine && e.showCTLPage) {
						let e;
						if (t.commentId ? e = t.comment && t.comment.author : t.postId && (e = t.post && t.post.author), e) return r.a.createElement(s.Fragment, null, r.a.createElement(Ze, {
							onClick: this.handleReportFlowClose
						}, r.a.createElement($e, null)), r.a.createElement(p.a, {
							onCloseReportFlow: this.handleReportFlowClose,
							thingId: t.commentId ? t.commentId : t.postId,
							username: e
						}))
					}
					const o = (t.commentId ? Je.Comment : Je.Post) === Je.Post ? n.fbt._("Report post", null, {
						hk: "1OIyCi"
					}) : t.isLiveStreaming ? n.fbt._("Report chat message", null, {
						hk: "2gGA1m"
					}) : n.fbt._("Report comment", null, {
						hk: "Buqls"
					});
					return r.a.createElement(s.Fragment, null, r.a.createElement(Xe, {
						onClosePressed: t.onCloseReportFlow,
						title: o
					}), r.a.createElement("div", null, this.getInnerContent()))
				}
				render() {
					return r.a.createElement("div", {
						className: Ge.a.Wrapper
					}, this.getContent())
				}
			}
			const ot = Object(l.b)(et, (e, t) => {
				let {
					timestamp: o
				} = t;
				return {
					onCloseReportFlow: () => {
						e(Object(u.i)())
					},
					onReportPostOrComment: (t, n, s) => {
						e(Object(u.h)({
							id: t,
							reportFlowPayload: n,
							timestamp: o
						}, s))
					}
				}
			})(tt);
			t.default = Object(a.a)(ot)
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
				return c
			}));
			o("./node_modules/core-js/modules/es6.symbol.js");
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				r = o("./src/lib/classNames/index.ts"),
				l = o("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = o.n(l);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var o = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (o[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (o[n[s]] = e[n[s]])
				}
				return o
			};
			const c = e => {
				var {
					className: t,
					isSubreddit: o
				} = e, n = d(e, ["className", "isSubreddit"]);
				return s.a.createElement("svg", a({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !o
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), s.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/ProfileSlashed/index.m.less": function(e, t, o) {
			e.exports = {
				icon: "_1d7BoD7egpRq9JmZVmVXkB"
			}
		}
	}
]);
//# sourceMappingURL=ReportFlow.2ab593ac87e5e4c95f5b.js.map