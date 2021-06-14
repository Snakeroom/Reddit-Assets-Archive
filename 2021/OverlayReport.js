// https://www.redditstatic.com/desktop2x/OverlayReport.cfd6dcbdbeb37257ed1e.js
// Retrieved at 6/14/2021, 12:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayReport"], {
		"./src/chat/components/OverlayReport/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayReport", (function() {
				return M
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/lodash/map.js"),
				r = s.n(a),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				h = s("./src/chat/endpoints/users/index.ts"),
				u = s("./src/chat/models/Message/report.ts");
			var m = s("./src/chat/actions/tracking.ts"),
				p = s("./src/chat/components/OverlayNav/index.tsx"),
				b = s("./src/higherOrderComponents/makeAsync.tsx"),
				C = s("./src/lib/loadWithRetries/index.ts");
			const x = () => null;
			var y = Object(b.a)({
					ErrorComponent: x,
					getComponent: () => Object(C.a)(() => s.e("ChatReportFlow").then(s.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
					LoadingComponent: x
				}),
				O = s("./src/chat/components/Scroller/index.tsx"),
				g = s("./src/chat/constants/messages.ts");
			const _ = "reportReason";
			var v;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(v || (v = {}));
			var k = s("./src/chat/controls/Checkbox/index.tsx"),
				f = s("./src/chat/controls/Overlay/index.tsx"),
				w = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				S = s("./src/chat/helpers/chatSelector.ts"),
				E = s("./src/chat/helpers/dom.ts"),
				R = s("./src/chat/models/ReportFlow/index.ts"),
				j = s("./src/chat/routes/chat.ts"),
				B = s("./src/chat/selectors/channels.ts"),
				I = s("./src/chat/selectors/user.ts"),
				L = s("./src/chat/components/OverlayReport/index.m.less"),
				F = s.n(L),
				T = s("./src/chat/selectors/messages.ts");
			const D = d.a.wrapped(k.a, "Checkbox", F.a),
				U = d.a.div("ListItem", F.a),
				N = Object(S.a)({
					user: (e, t) => t.attr === j.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === j.a.Invite || t.attr === j.a.Message ? Object(T.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(B.x)(e),
					currentUserId: (e, t) => Object(I.a)(e)
				}),
				K = Object(l.b)(N, e => ({
					onReportUser: (t, s) => {
						e(Object(m.J)(s.id)), e((e => async (t, s, {
							apiContext: n
						}) => {
							const {
								user: a,
								reason: r
							} = e, o = {
								reason: r,
								userNickname: a.name
							};
							await Object(h.b)(n(), o)
						})({
							user: s,
							reason: t
						})).then(() => e(Object(i.a)()))
					},
					onReportMessage: (t, s, n) => {
						e(Object(m.L)(s.messageId, t)), e(((e, t, s) => async (n, a, {
							apiContext: r
						}) => {
							const o = Object(u.a)(e, t),
								c = Object(u.b)(e, t, s);
							o && await Object(h.c)(r(), o, c)
						})(t, s, n))
					}
				}));
			class M extends o.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === j.a.Invite || this.props.attr === j.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === R.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === R.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === R.a.BlockUser || this.state.currentFlow === R.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? R.a.CrisisTextLine : e && e.fileComplaint ? R.a.FileComplaint : R.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return c.a.createElement(y, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case v.Threats:
								return n.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case v.Violence:
								return n.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case v.Personal:
								return n.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case v.Impersonation:
								return n.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case v.MinorSexualization:
								return n.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => r()(v, e => {
						const t = this.getReportReasonText(e);
						return c.a.createElement(U, {
							key: t
						}, c.a.createElement(D, {
							type: "radio",
							value: t,
							name: _,
							onChange: e => this.selectReason({
								reasonText: e.target.value
							})
						}, t))
					}), this.onSubmit = () => {
						const {
							selectedReason: e
						} = this.state, {
							onReportUser: t,
							user: s
						} = this.props;
						e && e.reasonText && (this.isMessageReportFlow() ? this.onMessageSubmit() : s && t(e.reasonText, s))
					}, this.onMessageSubmit = () => {
						const {
							message: e,
							messageList: t,
							onReportMessage: s
						} = this.props, {
							currentFlow: n,
							selectedReason: a
						} = this.state;
						if (a && a.requestCrisisSupport && e && e.messageType === g.d.USER) return n === R.a.CrisisTextLine ? (s(a.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						a && a.reasonText && e && e.messageType === g.d.USER && (s(a.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === j.a.Invite ? R.a.Invite : R.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						channelId: e,
						message: t,
						user: s
					} = this.props;
					return c.a.createElement(f.a, {
						onSubmit: Object(E.a)(this.onSubmit),
						form: !0
					}, c.a.createElement(p.a, {
						channelId: e,
						title: n.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), c.a.createElement(O.a, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : s && this.getUserReportFlow()), c.a.createElement(w.a, {
						primaryButtonText: this.isCTLControls() ? n.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : n.fbt._("Submit", null, {
							hk: "2Iwjdv"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? n.fbt._("Close", null, {
							hk: "4gbyAA"
						}) : n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			t.default = K(M)
		},
		"./src/chat/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckInput: "_1_de1ouiEaWxe0lu0R54Zf",
				checkInput: "_1_de1ouiEaWxe0lu0R54Zf",
				Content: "_1RHO7h5PWuKEmC8QD2KnOB",
				content: "_1RHO7h5PWuKEmC8QD2KnOB",
				Control: "aKXv6qpFIjz-_IZOZsYLz",
				control: "aKXv6qpFIjz-_IZOZsYLz",
				HiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				hiddenInput: "_3Q1_Do5LHdBSUlaIowvrfb",
				Checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				checked: "_2rAAUOr_BEoWHcPUCIHPl_",
				Unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				unchecked: "lKC5fIFqmLCg9yYtpR5rw",
				Wrapper: "_1SMteSSKECXjIaZTOLZ2z-",
				wrapper: "_1SMteSSKECXjIaZTOLZ2z-"
			}
		},
		"./src/chat/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/chat/controls/Svg/index.tsx"),
				l = s("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				i = s.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = o.a.wrapped(e => a.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", i.a),
				u = o.a.wrapped(e => a.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var m = e => a.a.createElement(c.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), a.a.createElement("g", null, a.a.createElement(h, null), a.a.createElement(u, null))),
				p = s("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				b = s.n(p);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = o.a.wrapped(e => a.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", b.a);
			var y = e => a.a.createElement(c.a, C({}, e, {
					viewBox: "0 0 20 20"
				}), a.a.createElement("g", null, a.a.createElement(x, null))),
				O = s("./src/chat/controls/Checkbox/index.m.less"),
				g = s.n(O);
			const _ = o.a.input("HiddenInput", g.a),
				v = o.a.wrapped(m, "Checked", g.a),
				k = o.a.wrapped(y, "Unchecked", g.a),
				f = o.a.span("Wrapper", g.a),
				w = o.a.span("Content", g.a),
				S = o.a.span("Control", g.a),
				E = o.a.label("CheckInput", g.a);
			t.a = e => a.a.createElement(E, {
				className: Object(r.a)(e.className, {
					[g.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, a.a.createElement(f, null, e.children && !e.rightPosition && a.a.createElement(w, null, e.children), a.a.createElement(S, null, a.a.createElement(_, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), a.a.createElement(v, null), a.a.createElement(k, null)), e.children && e.rightPosition && a.a.createElement(w, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				primary: "_3fM86Pr7r-ObXeea2Dms_o"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/chat/controls/Button/index.tsx"),
				h = s("./src/chat/helpers/dom.ts"),
				u = s("./src/chat/controls/OverlayControlBar/index.m.less"),
				m = s.n(u);
			const p = i.a.wrapped(d.a, "Button", m.a),
				b = Object(o.b)(void 0, e => ({
					onSubmit: () => {},
					onCancel: Object(h.b)(() => e(Object(c.a)()))
				})),
				C = i.a.div("OverlayControlBar", m.a),
				x = b(e => r.a.createElement(C, {
					className: Object(l.a)({
						[m.a.primary]: e.primaryButtonOnly
					}, e.className)
				}, !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(p, {
					href: "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting",
					secondary: !0
				}, n.fbt._("Other Options", null, {
					hk: "1RadlV"
				})) : r.a.createElement(p, {
					onClick: e.secondaryButtonAction || e.onCancel,
					primary: !!e.secondaryButtonOnly,
					secondary: !e.secondaryButtonOnly
				}, e.secondaryButtonText || n.fbt._("Cancel", null, {
					hk: "2TSLl5"
				}))), !e.secondaryButtonOnly && r.a.createElement(p, {
					type: "submit",
					primary: !0,
					onClick: e.primaryButtonAction || e.onSubmit,
					disabled: e.primaryButtonDisabled
				}, e.primaryButtonText || n.fbt._("Submit", null, {
					hk: "2Iwjdv"
				}))));
			x.displayName = "OverlayControlBar", t.a = x
		},
		"./src/chat/icons/svgs/Checkbox/checked.m.less": function(e, t, s) {
			e.exports = {
				StyledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				styledCircle: "_2QEVbfgOdAh_E_UteGSdz9",
				StyledCheckmark: "_2hHL8LCEXapDOjiChO0JWH",
				styledCheckmark: "_2hHL8LCEXapDOjiChO0JWH"
			}
		},
		"./src/chat/icons/svgs/Checkbox/unchecked.m.less": function(e, t, s) {
			e.exports = {
				StyledCircle: "_2WDOoyLYNQZODKF6ScpgSO",
				styledCircle: "_2WDOoyLYNQZODKF6ScpgSO"
			}
		},
		"./src/chat/models/ReportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, a;
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e[e.Default = 0] = "Default", e[e.BlockUser = 1] = "BlockUser", e[e.FileComplaint = 2] = "FileComplaint", e[e.CrisisTextLine = 3] = "CrisisTextLine", e[e.Invite = 4] = "Invite"
			}(n || (n = {})),
			function(e) {
				e.R2 = "R2"
			}(a || (a = {}));
			new Set(Object.values(a))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayReport.cfd6dcbdbeb37257ed1e.js.map