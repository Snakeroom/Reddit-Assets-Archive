// https://www.redditstatic.com/desktop2x/ChatReportFlow.1775a1947f256c3121bd.js
// Retrieved at 9/14/2021, 12:40:07 PM by Reddit Dataminer v1.0.0
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
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/chat/actions/sitewideRules.ts"),
				i = n("./src/chat/components/CrisisFlow/CrisisFlowPage.tsx"),
				p = n("./src/lib/lessComponent.tsx"),
				d = n("./src/chat/actions/tracking.ts"),
				h = n("./src/chat/actions/user.ts"),
				u = n("./src/higherOrderComponents/asTooltip.tsx"),
				m = n("./src/lib/classNames/index.ts"),
				w = n("./src/chat/controls/Checkbox/index.tsx"),
				x = n("./src/chat/controls/Dropdown/index.tsx"),
				R = n("./src/chat/controls/Dropdown/Row.tsx"),
				g = n("./src/chat/icons/svgs/Dropdown/index.m.less"),
				b = n.n(g);
			var _ = p.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"
				}))), "DropdownIcon", b.a),
				S = n("./src/chat/components/ReportFlow/ReusableComponents.m.less"),
				C = n.n(S);
			const k = p.a.wrapped(w.a, "Checkbox", C.a),
				v = p.a.div("Description", C.a),
				E = Object(u.a)(x.a),
				f = p.a.wrapped(E, "Dropdown", C.a),
				O = p.a.wrapped(_, "DropdownTriangle", C.a),
				H = p.a.div("Header", C.a),
				U = p.a.div("SelectValue", C.a),
				B = p.a.div("LoadingIndicator", C.a),
				L = p.a.div("RadioOptionsSectionHeader", C.a),
				F = p.a.wrapped(R.a, "DropdownRow", C.a),
				y = p.a.div("PickerWrapper", C.a),
				N = p.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					style: {
						padding: `10px ${10*e.depth}px`
					}
				}, e.children), "SubSection", C.a),
				T = p.a.wrapped(e => a.a.createElement("div", {
					className: Object(m.a)(e.className, {
						[C.a.chosen]: e.isChosen
					})
				}, e.children), "SelectARuleLabel", C.a);
			var D = n("./src/chat/icons/svgs/ProfileSlashed/index.m.less"),
				j = n.n(D);
			var q = p.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
				}))), "ProfileSlashed", j.a),
				I = n("./src/chat/selectors/contacts.ts"),
				P = n("./src/chat/components/ReportFlow/BlockUserFlow/index.m.less"),
				Z = n.n(P);
			const M = p.a.div("BlockUserHolder", Z.a),
				A = p.a.wrapped(q, "BlockUserIcon", Z.a),
				V = p.a.div("BlockUserHeader", Z.a),
				J = p.a.div("BlockUserDescription", Z.a),
				Y = Object(l.c)({
					blockedUser: (e, t) => Object(I.b)(e, t.userId)
				});
			class G extends a.a.Component {
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
					return e && e.isBlocked ? s.fbt._("u/{username} is blocked", [s.fbt._param("username", e.name)], {
						hk: "12Sasp"
					}) : this.state.pending ? s.fbt._("Pending...", null, {
						hk: "1Rc5Qw"
					}) : e ? s.fbt._("Block u/{username}", [s.fbt._param("username", e.name)], {
						hk: "3dZn6T"
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
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(H, null, s.fbt._("Thanks for letting us know!", null, {
						hk: "EieVe"
					})), a.a.createElement(v, null, s.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "40yYvG"
					})), a.a.createElement(M, {
						onClick: () => this.blockUser()
					}, a.a.createElement(A, null), a.a.createElement("div", null, a.a.createElement(V, null, this.getHeader()), a.a.createElement(J, null, s.fbt._("You won't see posts or comments from u/{username}. You can change this later in your preference.", [s.fbt._param("username", e)], {
						hk: "4Gjtr9"
					})))))
				}
			}
			var K = Object(r.b)(Y, (e, {}) => ({
					onBlockUser: t => {
						e(Object(h.n)(t, !0)), e(Object(d.L)(t))
					}
				}))(G),
				z = n("./src/chat/components/ReportFlow/FileComplaintFlow/index.m.less"),
				X = n.n(z);
			const W = p.a.div("LinkHolder", X.a),
				Q = p.a.a("Link", X.a);
			var $ = ({
					selectedReason: e
				}) => a.a.createElement(a.a.Fragment, null, a.a.createElement(H, null, e.complaintPageTitle), a.a.createElement(v, null, e.complaintPrompt), a.a.createElement(W, null, a.a.createElement(Q, {
					target: "_blank",
					href: e.complaintUrl
				}, e.complaintButtonText))),
				ee = n("./src/chat/actions/tooltip.ts"),
				te = n("./src/chat/constants/page.ts"),
				ne = n("./src/chat/selectors/tooltip.ts");
			const se = "ReportFlow--RedditRules";
			var oe;
			! function(e) {
				e.SiteRule = "siteRule", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(oe || (oe = {}));
			const ae = Object(l.c)({
				dropdownIsOpen: Object(ne.b)(se)
			});
			class re extends a.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, oe.SiteRule), this.props.onChosenRuleChange(e, e.requestCrisisSupport ? oe.CrisisTextLine : e.fileComplaint ? oe.FileComplaint : oe.SiteRule)
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
						rulesSequence: r
					} = t, l = o.nextStepReasons, c = r.length > e ? r[e] : -1, i = l && c >= 0 ? l[c] : null;
					return a.a.createElement(y, {
						onClick: n
					}, a.a.createElement(U, {
						id: se
					}, i ? i.reasonTextToShow : ""), a.a.createElement(O, null), a.a.createElement(T, {
						isChosen: !!i
					}, s.fbt._("Select a rule", null, {
						hk: "UKdaz"
					})), a.a.createElement(f, {
						isOpen: t.dropdownIsOpen,
						tooltipId: se,
						container: document.getElementById(te.a),
						excludeContainerPosition: !0
					}, l ? l.map((n, s) => a.a.createElement(F, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: c === s,
						onClick: n.nextStepReasons && n.nextStepReasons.length ? () => {
							t.onUpdateRulesSequence(s, e), this.onChosenRuleCleared()
						} : () => {
							t.onUpdateRulesSequence(s, e), this.onRedditRuleChange(n)
						}
					})) : null))
				}
				renderChildrenReasons(e, t, n) {
					const {
						props: s
					} = this, {
						rulesSequence: o
					} = s, r = e.nextStepReasons, l = (o && o.length > t ? o[t] : -1) === n;
					return r && r.length && l ? a.a.createElement(N, {
						depth: t
					}, a.a.createElement(L, null, e.nextStepHeader), r.map((e, n) => a.a.createElement(a.a.Fragment, null, a.a.createElement(k, {
						rightPosition: !0,
						type: "radio",
						name: `other_report_reason-${t}`,
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
						} = e, s = t.nextStepReasons, o = n.length > 1 ? n[1] : -1, r = s && o >= 0 ? s[o] : null;
						return a.a.createElement(a.a.Fragment, null, this.renderDropdownMenu(1), r ? this.renderChildrenReasons(r, 1, o) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = s.fbt._("Select a rule", null, {
						hk: "9kyS5"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var le = Object(r.b)(ae, e => ({
				onOpenDropdown: () => e(Object(ee.c)({
					tooltipId: se
				}))
			}))(re);
			var ce = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})));
			var ie = e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))),
				pe = n("./src/chat/controls/AccordionSection/index.m.less"),
				de = n.n(pe);

			function he() {
				return (he = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = p.a.div("Section", de.a),
				me = p.a.wrapped(ie, "ChevronUp", de.a),
				we = p.a.wrapped(ce, "ChevronDown", de.a),
				xe = p.a.div("ArticleWrap", de.a),
				Re = ({
					isOpen: e,
					...t
				}) => a.a.createElement(xe, he({
					className: Object(m.a)({
						[de.a.open]: e
					})
				}, t)),
				ge = p.a.div("SectionHead", de.a),
				be = ({
					isOpen: e,
					...t
				}) => a.a.createElement(ge, he({
					className: Object(m.a)({
						[de.a.open]: e
					})
				}, t)),
				_e = p.a.div("Article", de.a);
			class Se extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return a.a.createElement("div", null, a.a.createElement(ue, null, this.props.open ? a.a.createElement(me, null) : a.a.createElement(we, null), a.a.createElement(be, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), a.a.createElement(Re, {
						isOpen: this.props.open,
						height: this.props.height
					}, this.props.open ? a.a.createElement(_e, null, this.props.children) : null)))
				}
			}
			var Ce = Object(r.b)(null, e => ({
				onSwitchSection: () => e(Object(ee.d)())
			}))(Se);
			class ke {
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
			class ve extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new ke
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					this.state.rulesSequence.update(e, t), this.props.onRuleChange()
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: s
					} = this, o = s.rulesSequence.getSequence();
					return a.a.createElement(Ce, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: o.length > 0 && o[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, a.a.createElement(le, {
						onChosenRuleChange: n.onRuleChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: o,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						reasons: e
					} = this.props;
					return e && e.length ? a.a.createElement(a.a.Fragment, null, a.a.createElement(H, null, s.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3oYhG"
					})), e.map((e, t) => this.renderRulesSection(e, t))) : a.a.createElement(B, {
						role: "progressbar"
					}, s.fbt._("Loading reasons...", null, {
						hk: "sbtj8"
					}))
				}
			}
			var Ee = ve,
				fe = n("./src/chat/models/ReportFlow/index.ts");
			const Oe = Object(l.c)({
				reasons: e => e.sitewideRules
			});
			class He extends a.a.Component {
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
					if (!!(!t || !t.length)) return a.a.createElement(B, {
						role: "progressbar"
					}, s.fbt._("Loading reasons...", null, {
						hk: "3to8dr"
					}));
					switch (e) {
						case fe.a.Default:
						case fe.a.Invite:
							return a.a.createElement(Ee, {
								reasons: t,
								onRuleChange: e => {
									this.setState({
										reason: e
									}), n(e)
								}
							});
						case fe.a.FileComplaint:
							return this.state.reason && a.a.createElement($, {
								selectedReason: this.state.reason
							});
						case fe.a.BlockUser:
							return a.a.createElement(K, {
								userId: this.props.blockedUserId
							});
						case fe.a.CrisisTextLine:
							return a.a.createElement(i.a, {
								username: this.props.blockedUserName,
								ctlSubmitted: this.props.ctlSubmitted
							})
					}
				}
			}
			const Ue = Object(r.b)(Oe, e => ({
				fetchRules: () => e(Object(c.b)())
			}))(He);
			t.default = Ue
		},
		"./src/chat/controls/AccordionSection/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_2ZPCcqVx7uyG5HrA3z-OVv",
				section: "_2ZPCcqVx7uyG5HrA3z-OVv",
				ChevronDown: "_1wKo3vVOtzUBLbhCHR_Vxg",
				chevronDown: "_1wKo3vVOtzUBLbhCHR_Vxg",
				ChevronUp: "ksp0av34zuZsBAcat30ua",
				chevronUp: "ksp0av34zuZsBAcat30ua",
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ChatReportFlow.1775a1947f256c3121bd.js.map