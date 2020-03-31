// https://www.redditstatic.com/desktop2x/ChatReportFlow.dabf410415ab8b84cc10.js
// Retrieved at 3/31/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				c = n("./src/chat/actions/sitewideRules.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				p = n("./src/chat/actions/tracking.ts"),
				d = n("./src/chat/actions/user.ts"),
				u = n("./src/higherOrderComponents/asTooltip.tsx"),
				h = n("./src/lib/classNames/index.ts"),
				m = n("./src/chat/controls/Checkbox/index.tsx"),
				w = n("./src/chat/controls/Dropdown/index.tsx"),
				x = n("./src/chat/controls/Dropdown/Row.tsx"),
				R = n("./src/chat/icons/svgs/Dropdown/index.m.less"),
				g = n.n(R);
			var b = i.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("path", {
					fill: "inherit",
					d: "M14.1711599,9.3535 L9.99925636,13.529 L5.82735283,9.3535 C5.51262415,9.0385 5.73543207,8.5 6.18054835,8.5 L13.8179644,8.5 C14.2630807,8.5 14.4858886,9.0385 14.1711599,9.3535"
				}))), "DropdownIcon", g.a),
				_ = n("./src/chat/components/ReportFlow/ReusableComponents.m.less"),
				S = n.n(_);
			const v = i.a.wrapped(m.a, "Checkbox", S.a),
				k = i.a.div("Description", S.a),
				C = Object(u.a)(w.a),
				E = i.a.wrapped(C, "Dropdown", S.a),
				f = i.a.wrapped(b, "DropdownTriangle", S.a),
				O = i.a.div("Header", S.a),
				H = i.a.div("SelectValue", S.a),
				U = i.a.div("LoadingIndicator", S.a),
				y = i.a.div("RadioOptionsSectionHeader", S.a),
				B = i.a.wrapped(x.a, "DropdownRow", S.a),
				j = i.a.div("PickerWrapper", S.a),
				F = i.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					style: {
						padding: "10px ".concat(10 * e.depth, "px")
					}
				}, e.children), "SubSection", S.a),
				D = i.a.wrapped(e => a.a.createElement("div", {
					className: Object(h.a)(e.className, {
						[S.a.chosen]: e.isChosen
					})
				}, e.children), "SelectARuleLabel", S.a);
			var L = n("./src/chat/icons/svgs/ProfileSlashed/index.m.less"),
				N = n.n(L);
			var I = i.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, a.a.createElement("g", {
					fill: "inherit"
				}, a.a.createElement("path", {
					d: "M20.6762828,21.9082828 C24.2595318,21.3438035 27,18.2418134 27,14.5 L27,9.5 C27,5.357 23.642,2 19.5,2 C15.358,2 12,5.357 12,9.5 L12,13.232 L1.768,3 L0,4.768 L35.5,40.268 L37.268,38.5 L33.0284278,34.2604278 C33.3748442,33.9267307 33.7091584,33.5805628 34.03,33.222 C31.8688147,29.7169957 28.5050392,27.036225 24.5146241,25.7466241 L20.6762828,21.9082828 Z M18.227,25 C12.632,25.534 7.804,28.694 5,33.242 C8.662,37.334 13.982,39.911 19.906,39.911 C23.693,39.911 27.232,38.853 30.25,37.023 L18.227,25 Z"
				}))), "ProfileSlashed", N.a),
				T = n("./src/chat/selectors/contacts.ts"),
				q = n("./src/chat/components/ReportFlow/BlockUserFlow/index.m.less"),
				P = n.n(q);
			const Z = i.a.div("BlockUserHolder", P.a),
				M = i.a.wrapped(I, "BlockUserIcon", P.a),
				A = i.a.div("BlockUserHeader", P.a),
				V = i.a.div("BlockUserDescription", P.a),
				J = Object(l.c)({
					blockedUser: (e, t) => Object(T.b)(e, t.userId)
				});
			class Y extends a.a.Component {
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
					return e && e.isBlocked ? o.fbt._("u/{username} is blocked", [o.fbt._param("username", e.name)], {
						hk: "12Sasp"
					}) : this.state.pending ? o.fbt._("Pending...", null, {
						hk: "1Rc5Qw"
					}) : e ? o.fbt._("Block u/{username}", [o.fbt._param("username", e.name)], {
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
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null, o.fbt._("Thanks for letting us know!", null, {
						hk: "EieVe"
					})), a.a.createElement(k, null, o.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "40yYvG"
					})), a.a.createElement(Z, {
						onClick: () => this.blockUser()
					}, a.a.createElement(M, null), a.a.createElement("div", null, a.a.createElement(A, null, this.getHeader()), a.a.createElement(V, null, o.fbt._("You won't see posts or comments from u/{username}. You can change this later in your preference.", [o.fbt._param("username", e)], {
						hk: "4Gjtr9"
					})))))
				}
			}
			var G = Object(r.b)(J, (e, t) => {
					let {} = t;
					return {
						onBlockUser: t => {
							e(Object(d.o)(t, !0)), e(Object(p.t)())
						}
					}
				})(Y),
				K = n("./src/chat/components/ReportFlow/FileComplaintFlow/index.m.less"),
				z = n.n(K);
			const X = i.a.div("LinkHolder", z.a),
				W = i.a.a("Link", z.a);
			var Q = e => {
					let {
						selectedReason: t
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null, t.complaintPageTitle), a.a.createElement(k, null, t.complaintPrompt), a.a.createElement(X, null, a.a.createElement(W, {
						target: "_blank",
						href: t.complaintUrl
					}, t.complaintButtonText)))
				},
				$ = n("./src/chat/actions/tooltip.ts"),
				ee = n("./src/chat/constants/page.ts");
			const te = "ReportFlow--RedditRules";
			var ne;
			! function(e) {
				e.SiteRule = "siteRule", e.FileComplaint = "fileComplaint"
			}(ne || (ne = {}));
			const oe = Object(l.c)({
				dropdownIsOpen: (e => t => t.tooltipId === e)(te)
			});
			class se extends a.a.Component {
				constructor() {
					super(...arguments), this.onRedditRuleChange = e => {
						this.props.onChosenRuleChange(e, ne.SiteRule), this.props.onChosenRuleChange(e, e.fileComplaint ? ne.FileComplaint : ne.SiteRule)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenRuleChange()
					}
				}
				renderDropdownMenu(e) {
					const {
						props: t
					} = this, {
						onOpenDropdown: n,
						reason: s,
						rulesSequence: r
					} = t, l = s.nextStepReasons, c = r.length > e ? r[e] : -1, i = l && c >= 0 ? l[c] : null;
					return a.a.createElement(j, {
						onClick: n
					}, a.a.createElement(H, {
						id: te
					}, i ? i.reasonTextToShow : ""), a.a.createElement(f, null), a.a.createElement(D, {
						isChosen: !!i
					}, o.fbt._("Select a rule", null, {
						hk: "UKdaz"
					})), a.a.createElement(E, {
						isOpen: t.dropdownIsOpen,
						tooltipId: te,
						container: document.getElementById(ee.a),
						excludeContainerPosition: !0
					}, l ? l.map((n, o) => a.a.createElement(B, {
						key: n.reasonTextToShow,
						displayText: n.reasonTextToShow,
						isSelected: c === o,
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
					} = o, r = e.nextStepReasons, l = (s && s.length > t ? s[t] : -1) === n;
					return r && r.length && l ? a.a.createElement(F, {
						depth: t
					}, a.a.createElement(y, null, e.nextStepHeader), r.map((e, n) => a.a.createElement(a.a.Fragment, null, a.a.createElement(v, {
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
						} = e, o = t.nextStepReasons, s = n.length > 1 ? n[1] : -1, r = o && s >= 0 ? o[s] : null;
						return a.a.createElement(a.a.Fragment, null, this.renderDropdownMenu(1), r ? this.renderChildrenReasons(r, 1, s) : null)
					}
					return t.nextStepReasons && t.nextStepReasons.length || (t.nextStepHeader = o.fbt._("Select a rule", null, {
						hk: "9kyS5"
					}), t.nextStepReasons = [{
						reasonText: t.reasonText,
						reasonTextToShow: t.reasonTextToShow
					}]), this.renderChildrenReasons(t, 0, e.indexOfReason)
				}
			}
			var ae = Object(r.b)(oe, e => ({
					onOpenDropdown: () => e(Object($.c)({
						tooltipId: te
					}))
				}))(se),
				re = (n("./node_modules/core-js/modules/es6.symbol.js"), n("./src/chat/controls/AccordionSection/index.m.less")),
				le = n.n(re);

			function ce() {
				return (ce = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			var ie = function(e, t) {
				var n = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (o = Object.getOwnPropertySymbols(e); s < o.length; s++) t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
				}
				return n
			};
			const pe = i.a.div("Section", le.a),
				de = i.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))), "ChevronUp", le.a),
				ue = i.a.wrapped(e => a.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					onClick: e.onClick
				}, a.a.createElement("g", null, a.a.createElement("polygon", {
					fill: "inherit",
					points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
				}))), "ChevronDown", le.a),
				he = i.a.div("ArticleWrap", le.a),
				me = e => {
					var {
						isOpen: t
					} = e, n = ie(e, ["isOpen"]);
					return a.a.createElement(he, ce({
						className: Object(h.a)({
							[le.a.open]: t
						})
					}, n))
				},
				we = i.a.div("SectionHead", le.a),
				xe = e => {
					var {
						isOpen: t
					} = e, n = ie(e, ["isOpen"]);
					return a.a.createElement(we, ce({
						className: Object(h.a)({
							[le.a.open]: t
						})
					}, n))
				},
				Re = i.a.div("Article", le.a);
			class ge extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return a.a.createElement("div", null, a.a.createElement(pe, null, this.props.open ? a.a.createElement(de, null) : a.a.createElement(ue, null), a.a.createElement(xe, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), a.a.createElement(me, {
						isOpen: this.props.open,
						height: this.props.height
					}, this.props.open ? a.a.createElement(Re, null, this.props.children) : null)))
				}
			}
			var be = Object(r.b)(null, e => ({
				onSwitchSection: () => e(Object($.d)())
			}))(ge);
			class _e {
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
			class Se extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						rulesSequence: new _e
					}, this.onUpdateRulesSequence = this.onUpdateRulesSequence.bind(this)
				}
				onUpdateRulesSequence(e, t) {
					this.state.rulesSequence.update(e, t), this.props.onRuleChange()
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: o
					} = this, s = o.rulesSequence.getSequence();
					return a.a.createElement(be, {
						key: e.reasonTextToShow,
						title: e.reasonTextToShow,
						open: s.length > 0 && s[0] === t,
						onOpen: () => this.onUpdateRulesSequence(t, 0)
					}, a.a.createElement(ae, {
						onChosenRuleChange: n.onRuleChange,
						reason: e,
						indexOfReason: t,
						dropdownIsNeeded: 0 === t,
						rulesSequence: s,
						onUpdateRulesSequence: this.onUpdateRulesSequence
					}))
				}
				render() {
					const {
						reasons: e
					} = this.props;
					return e && e.length ? a.a.createElement(a.a.Fragment, null, a.a.createElement(O, null, o.fbt._("We're sorry something's wrong. How can we help?", null, {
						hk: "3oYhG"
					})), e.map((e, t) => this.renderRulesSection(e, t))) : a.a.createElement(U, {
						role: "progressbar"
					}, o.fbt._("Loading reasons...", null, {
						hk: "sbtj8"
					}))
				}
			}
			var ve = Se,
				ke = n("./src/chat/models/ReportFlow/index.ts");
			const Ce = Object(l.c)({
				reasons: e => e.sitewideRules
			});
			class Ee extends a.a.Component {
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
					if (!!(!t || !t.length)) return a.a.createElement(U, {
						role: "progressbar"
					}, o.fbt._("Loading reasons...", null, {
						hk: "3to8dr"
					}));
					switch (e) {
						case ke.a.Default:
						case ke.a.Invite:
							return a.a.createElement(ve, {
								reasons: t,
								onRuleChange: e => {
									this.setState({
										reason: e
									}), n(e)
								}
							});
						case ke.a.FileComplaint:
							return this.state.reason && a.a.createElement(Q, {
								selectedReason: this.state.reason
							});
						case ke.a.BlockUser:
							return a.a.createElement(G, {
								userId: this.props.blockedUserId
							})
					}
				}
			}
			const fe = Object(r.b)(Ce, e => ({
				fetchRules: () => e(Object(c.b)())
			}))(Ee);
			t.default = fe
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
//# sourceMappingURL=ChatReportFlow.dabf410415ab8b84cc10.js.map