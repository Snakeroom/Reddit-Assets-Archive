// https://www.redditstatic.com/desktop2x/ChatReportFlow.5ffc8e7400ca919ae5cd.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ChatReportFlow"], {
		"./src/chat/components/ReportFlow/BlockUserFlow/index.m.less": function(e, t, n) {
			e.exports = {
				BlockUserHolder: "_3SDI9LGNB_aoif-iU_p4jQ",
				blockUserHolder: "_3SDI9LGNB_aoif-iU_p4jQ",
				BlockUserIcon: "_9u7fRENiktMPpwf58ZPn",
				blockUserIcon: "_9u7fRENiktMPpwf58ZPn",
				BlockUserHeader: "_2EdUKqgK9eytIkO3yF1yHH",
				blockUserHeader: "_2EdUKqgK9eytIkO3yF1yHH",
				BlockUserDescription: "_3MtB5NS8h2HZFHPKJPR_By",
				blockUserDescription: "_3MtB5NS8h2HZFHPKJPR_By"
			}
		},
		"./src/chat/components/ReportFlow/FileComplaintFlow/index.m.less": function(e, t, n) {
			e.exports = {
				LinkHolder: "_1ZzHZLYY8c2ZdDAyFXrh8Y",
				linkHolder: "_1ZzHZLYY8c2ZdDAyFXrh8Y",
				Link: "_3hS1ZO_oe48Gt4qZ5juL91",
				link: "_3hS1ZO_oe48Gt4qZ5juL91"
			}
		},
		"./src/chat/components/ReportFlow/ReusableComponents.m.less": function(e, t, n) {
			e.exports = {
				Header: "_2mPWq_JNM6EXHHRIbUWUvl",
				header: "_2mPWq_JNM6EXHHRIbUWUvl",
				Description: "_2xG75zyG08BvlkwYTq70id",
				description: "_2xG75zyG08BvlkwYTq70id",
				LoadingIndicator: "_15VZUPL7b6cJAba4MMQ7a0",
				loadingIndicator: "_15VZUPL7b6cJAba4MMQ7a0",
				Checkbox: "_1IG7mu3BZFx6YL4NG1mXyk",
				checkbox: "_1IG7mu3BZFx6YL4NG1mXyk",
				RadioOptionsSectionHeader: "_2GpwKwwcNMhYxlD7F69ZYt",
				radioOptionsSectionHeader: "_2GpwKwwcNMhYxlD7F69ZYt",
				DropdownRow: "_1vnsKrjqO4zVTcMtaNE-a1",
				dropdownRow: "_1vnsKrjqO4zVTcMtaNE-a1",
				PickerWrapper: "_1rZaTO5p6ttmv6cXbHwKtw",
				pickerWrapper: "_1rZaTO5p6ttmv6cXbHwKtw",
				SelectARuleLabel: "XtIQVBAWulZiHrd1cyn0i",
				selectARuleLabel: "XtIQVBAWulZiHrd1cyn0i",
				chosen: "_33ZGXj4lmK-LH9ArxRm4w4",
				Dropdown: "xH30t-MI3JxR3RdgpFKnW",
				dropdown: "xH30t-MI3JxR3RdgpFKnW",
				DropdownTriangle: "_3J4gJ_VhupbTRkbdk-RdPu",
				dropdownTriangle: "_3J4gJ_VhupbTRkbdk-RdPu",
				SelectValue: "_37JFAV_yBhOMNvxMOaF0Rv",
				selectValue: "_37JFAV_yBhOMNvxMOaF0Rv"
			}
		},
		"./src/chat/components/ReportFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/chat/actions/sitewideRules.ts"),
				i = n("./node_modules/lodash/template.js"),
				p = n.n(i),
				d = n("./src/lib/lessComponent.tsx"),
				h = n("./src/chat/actions/tracking.ts"),
				u = n("./src/chat/actions/user.ts"),
				m = n("./src/higherOrderComponents/asTooltip.tsx"),
				w = n("./src/lib/classNames/index.ts"),
				x = n("./src/chat/controls/Checkbox/index.tsx"),
				R = n("./src/chat/controls/Dropdown/index.tsx"),
				b = n("./src/chat/controls/Dropdown/Row.tsx"),
				g = n("./src/chat/icons/svgs/Dropdown/index.m.less"),
				S = n.n(g);
			var v = d.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					fill: "inherit",
					d: "M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"
				}))), "DropdownIcon", S.a),
				_ = n("./src/chat/components/ReportFlow/ReusableComponents.m.less"),
				C = n.n(_);
			const O = d.a.wrapped(x.a, "Checkbox", C.a),
				k = d.a.div("Description", C.a),
				E = Object(m.a)(R.a),
				H = d.a.wrapped(E, "Dropdown", C.a),
				U = d.a.wrapped(v, "DropdownTriangle", C.a),
				f = d.a.div("Header", C.a),
				j = d.a.div("SelectValue", C.a),
				F = d.a.div("LoadingIndicator", C.a),
				y = d.a.div("RadioOptionsSectionHeader", C.a),
				B = d.a.wrapped(b.a, "DropdownRow", C.a),
				D = d.a.div("PickerWrapper", C.a),
				N = d.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						padding: "10px ".concat(10 * e.depth, "px")
					}
				}, e.children), "SubSection", C.a),
				L = d.a.wrapped(e => s.a.createElement("div", {
					className: Object(w.a)(e.className, {
						[C.a.chosen]: e.isChosen
					})
				}, e.children), "SelectARuleLabel", C.a);
			var I = n("./src/chat/icons/svgs/ProfileSlashed/index.m.less"),
				P = n.n(I);
			var q = d.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
				}))), "ProfileSlashed", P.a),
				T = n("./src/chat/selectors/contacts.ts"),
				Z = n("./src/chat/strings/index.ts"),
				M = n("./src/chat/components/ReportFlow/BlockUserFlow/index.m.less"),
				A = n.n(M);
			const J = Object(Z.a)("en", "app.chat.report.blockFlow.block"),
				V = Object(Z.a)("en", "app.chat.report.blockFlow.blocked"),
				Y = Object(Z.a)("en", "app.chat.report.blockFlow.warning"),
				G = d.a.div("BlockUserHolder", A.a),
				K = d.a.wrapped(q, "BlockUserIcon", A.a),
				z = d.a.div("BlockUserHeader", A.a),
				X = d.a.div("BlockUserDescription", A.a),
				W = Object(l.c)({
					blockedUser: (e, t) => Object(T.b)(e, t.userId)
				});
			class Q extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						pending: !1
					}
				}
				blockUser() {
					const {
						blockedUser: e,
						onBlockUser: t
					} = this.props;
					this.state.pending || !e || e.isBlocked || (this.setState({
						pending: !0
					}), t(e.id))
				}
				getHeader() {
					const {
						blockedUser: e
					} = this.props;
					return e && e.isBlocked ? p()(V)({
						username: e.name
					}) : this.state.pending ? Object(Z.a)("en", "app.chat.report.blockFlow.pending") : e ? p()(J)({
						username: e.name
					}) : void 0
				}
				render() {
					const {
						props: {
							blockedUser: {
								name: e
							} = {
								name: ""
							}
						}
					} = this;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(f, null, Object(Z.a)("en", "app.chat.report.blockFlow.header")), s.a.createElement(k, null, Object(Z.a)("en", "app.chat.report.blockFlow.description")), s.a.createElement(G, {
						onClick: () => this.blockUser()
					}, s.a.createElement(K, null), s.a.createElement("div", null, s.a.createElement(z, null, this.getHeader()), s.a.createElement(X, null, p()(Y)({
						username: e
					})))))
				}
			}
			var $ = Object(r.b)(W, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(u.o)(t, !0)), e(Object(h.t)())
						}
					}
				})(Q),
				ee = n("./src/chat/components/ReportFlow/FileComplaintFlow/index.m.less"),
				te = n.n(ee);
			const ne = d.a.div("LinkHolder", te.a),
				oe = d.a.a("Link", te.a);
			var ae = e => {
					let {
						selectedReason: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(f, null, t.complaintPageTitle), s.a.createElement(k, null, t.complaintPrompt), s.a.createElement(ne, null, s.a.createElement(oe, {
						target: "_blank",
						href: t.complaintUrl
					}, t.complaintButtonText)))
				},
				se = n("./src/chat/actions/tooltip.ts"),
				re = n("./src/chat/constants/page.ts");
			const le = "ReportFlow--RedditRules";
			var ce;
			! function(e) {
				e.SiteRule = "siteRule", e.FileComplaint = "fileComplaint"
			}(ce || (ce = {}));
			const ie = Object(l.c)({
				dropdownIsOpen: (e => t => t.tooltipId === e)(le)
			});
			class pe extends s.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, ce.SiteRule), this.props.onChosenRuleChange(e, e.fileComplaint ? ce.FileComplaint : ce.SiteRule)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}
				}
				renderDropdownMenu(e) {
					const {
						props: t
					} = this, {
						onOpenDropdown: n,
						reason: o,
						rulesSequence: a
					} = t, r = o.nextStepReasons, l = a.length > e ? a[e] : -1, c = r && l >= 0 ? r[l] : null;
					return s.a.createElement(D, {
						onClick: n
					}, s.a.createElement(j, {
						id: le
					}, c ? c.reasonTextToShow : ""), s.a.createElement(U, null), s.a.createElement(L, {
						isChosen: !!c
					}, Object(Z.a)("en", "app.chat.report.selectRulePlaceholder")), s.a.createElement(H, {
						isOpen: t.dropdownIsOpen,
						tooltipId: le,
						container: document.getElementById(re.a),
						excludeContainerPosition: !0
					}, r ? r.map((n, o) => s.a.createElement(B, {
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
						rulesSequence: a
					} = o, r = e.nextStepReasons, l = (a && a.length > t ? a[t] : -1) === n;
					return r && r.length && l ? s.a.createElement(N, {
						depth: t
					}, s.a.createElement(y, null, e.nextStepHeader), r.map((e, n) => s.a.createElement(s.a.Fragment, null, s.a.createElement(O, {
						rightPosition: !0,
						type: "radio",
						name: "other_report_reason-".concat(t),
						value: e.reasonText ? e.reasonText : "",
						onChange: e.nextStepReasons && e.nextStepReasons.length ? () => {
							this.props.onUpdateRulesSequence(n, t + 1), this.onChosenRuleCleared()
						} : () => {
							this.props.onUpdateRulesSequence(n, t + 1), this.onRedditRuleChange(e)
						}
					}, e.reasonTextToShow), this.renderChildrenReasons(e, t + 1, n)))) : null
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
						} = e, o = t.nextStepReasons, a = n.length > 1 ? n[1] : -1, r = o && a >= 0 ? o[a] : null;
						return s.a.createElement(s.a.Fragment, null, this.renderDropdownMenu(1), r ? this.renderChildrenReasons(r, 1, a) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = Object(Z.a)("en", "app.chat.report.selectRulePlaceholder"), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var de = Object(r.b)(ie, e => ({
					onOpenDropdown: () => e(Object(se.c)({
						tooltipId: le
					}))
				}))(pe),
				he = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/chat/controls/AccordionSection/index.m.less")),
				ue = n.n(he);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var we = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (o = Object.getOwnPropertySymbols(e); a < o.length; a++) t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
				}
				return n
			};
			const xe = d.a.div("Section", ue.a),
				Re = d.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", null, s.a.createElement("polygon", {
					fill: "inherit",
					transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))), "ChevronUp", ue.a),
				be = d.a.wrapped(e => s.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					onClick: e.onClick
				}, s.a.createElement("g", null, s.a.createElement("polygon", {
					fill: "inherit",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))), "ChevronDown", ue.a),
				ge = d.a.div("ArticleWrap", ue.a),
				Se = e => {
					var {
						isOpen: t
					} = e, n = we(e, ["isOpen"]);
					return s.a.createElement(ge, me({
						className: Object(w.a)({
							[ue.a.open]: t
						})
					}, n))
				},
				ve = d.a.div("SectionHead", ue.a),
				_e = e => {
					var {
						isOpen: t
					} = e, n = we(e, ["isOpen"]);
					return s.a.createElement(ve, me({
						className: Object(w.a)({
							[ue.a.open]: t
						})
					}, n))
				},
				Ce = d.a.div("Article", ue.a);
			class Oe extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return s.a.createElement("div", null, s.a.createElement(xe, null, this.props.open ? s.a.createElement(Re, null) : s.a.createElement(be, null), s.a.createElement(_e, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), s.a.createElement(Se, {
						isOpen: this.props.open,
						height: this.props.height
					}, this.props.open ? s.a.createElement(Ce, null, this.props.children) : null)))
				}
			}
			var ke = Object(r.b)(null, e => ({
				onSwitchSection: () => e(Object(se.d)())
			}))(Oe);
			class Ee {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const n = this.sequence.slice(0, t);
					n.push(e), this.sequence = n
				}
			}
			class He extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new Ee
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					this.state.rulesSequence.update(e, t), this.props.onRuleChange()
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: o
					} = this, a = o.rulesSequence.getSequence();
					return s.a.createElement(ke, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: a.length > 0 && a[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, s.a.createElement(de, {
						onChosenRuleChange: n.onRuleChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: a,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						reasons: e
					} = this.props;
					return e && e.length ? s.a.createElement(s.a.Fragment, null, s.a.createElement(f, null, Object(Z.a)("en", "app.chat.report.reasonHeader")), e.map((e, t) => this.renderRulesSection(e, t))) : s.a.createElement(F, {
						role: "progressbar"
					}, Object(Z.a)("en", "app.chat.report.loading"))
				}
			}
			var Ue = He,
				fe = n("./src/chat/models/ReportFlow/index.ts");
			const je = Object(l.c)({
				reasons: e => e.sitewideRules
			});
			class Fe extends s.a.Component {
				constructor(e) {
					super(e), this.state = {
						reason: void 0
					}
				}
				componentDidMount() {
					this.props.fetchRules()
				}
				render() {
					const {
						currentFlow: e,
						reasons: t,
						onRuleChange: n
					} = this.props;
					if (!!(!t || !t.length)) return s.a.createElement(F, {
						role: "progressbar"
					}, o.fbt._("Loading reasons...", null, {
						hk: "3to8dr"
					}));
					switch (e) {
						case fe.a.Default:
						case fe.a.Invite:
							return s.a.createElement(Ue, {
								reasons: t,
								onRuleChange: e => {
									this.setState({
										reason: e
									}), n(e)
								}
							});
						case fe.a.FileComplaint:
							return this.state.reason && s.a.createElement(ae, {
								selectedReason: this.state.reason
							});
						case fe.a.BlockUser:
							return s.a.createElement($, {
								userId: this.props.blockedUserId
							})
					}
				}
			}
			const ye = Object(r.b)(je, e => ({
				fetchRules: () => e(Object(c.b)())
			}))(Fe);
			t.default = ye
		},
		"./src/chat/controls/AccordionSection/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_2ZPCcqVx7uyG5HrA3z-OVv",
				section: "_2ZPCcqVx7uyG5HrA3z-OVv",
				ChevronUp: "ksp0av34zuZsBAcat30ua",
				chevronUp: "ksp0av34zuZsBAcat30ua",
				ChevronDown: "_1wKo3vVOtzUBLbhCHR_Vxg",
				chevronDown: "_1wKo3vVOtzUBLbhCHR_Vxg",
				ArticleWrap: "_2Phr87zY79yoRfSQ409Z4R",
				articleWrap: "_2Phr87zY79yoRfSQ409Z4R",
				open: "_2vwyUBnqyOgaUEixVxUNZM",
				SectionHead: "_2Yq3mtDH8Xr2oi60Jsl8st",
				sectionHead: "_2Yq3mtDH8Xr2oi60Jsl8st",
				Article: "_2J9JMI6mFzr5No-XyjHP-z",
				article: "_2J9JMI6mFzr5No-XyjHP-z"
			}
		},
		"./src/chat/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				DropdownIcon: "_3JmPr4X7ND63jQxyMHvNEj",
				dropdownIcon: "_3JmPr4X7ND63jQxyMHvNEj"
			}
		},
		"./src/chat/icons/svgs/ProfileSlashed/index.m.less": function(e, t, n) {
			e.exports = {
				ProfileSlashed: "SeBb9IpfnJwHVGIYTB5-c",
				profileSlashed: "SeBb9IpfnJwHVGIYTB5-c"
			}
		}
	}
]);
//# sourceMappingURL=ChatReportFlow.5ffc8e7400ca919ae5cd.js.map