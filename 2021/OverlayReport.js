// https://www.redditstatic.com/desktop2x/OverlayReport.325b052fda62805d7cca.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayReport"], {
		"./src/chat/components/OverlayReport/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayReport", (function() {
				return P
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/map.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				l = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/lib/lessComponent.tsx"),
				u = s("./src/chat/endpoints/users/index.ts"),
				h = s("./src/chat/models/Message/report.ts");
			var m = s("./src/chat/actions/tracking.ts"),
				p = s("./src/chat/components/OverlayNav/index.tsx"),
				b = s("./src/higherOrderComponents/makeAsync.tsx"),
				x = s("./src/lib/loadWithRetries/index.ts");
			const C = () => null;
			var g = Object(b.a)({
					ErrorComponent: C,
					getComponent: () => Object(x.a)(() => s.e("ChatReportFlow").then(s.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
					LoadingComponent: C
				}),
				y = s("./src/chat/components/Scroller/index.tsx"),
				O = s("./src/chat/constants/messages.ts");
			const k = "reportReason";
			var _;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(_ || (_ = {}));
			var v = s("./src/chat/controls/Checkbox/index.tsx"),
				f = s("./src/chat/controls/Overlay/index.tsx"),
				B = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				E = s("./src/chat/helpers/chatSelector.ts"),
				S = s("./src/chat/helpers/dom.ts"),
				R = s("./src/chat/models/ReportFlow/index.ts"),
				w = s("./src/chat/routes/chat.ts"),
				j = s("./src/chat/selectors/channels.ts"),
				L = s("./src/chat/selectors/user.ts"),
				I = s("./src/chat/components/OverlayReport/index.m.less"),
				F = s.n(I),
				T = s("./src/chat/selectors/messages.ts");
			const U = d.a.wrapped(v.a, "Checkbox", F.a),
				D = d.a.div("ListItem", F.a),
				N = Object(E.a)({
					user: (e, t) => t.attr === w.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === w.a.Invite || t.attr === w.a.Message ? Object(T.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(j.C)(e),
					currentUserId: (e, t) => Object(L.a)(e)
				}),
				H = Object(l.b)(N, e => ({
					onReportUser: (t, s) => {
						e(Object(m.N)(s.id)), e((e => async (t, s, {
							apiContext: a
						}) => {
							const {
								user: n,
								reason: r
							} = e, o = {
								reason: r,
								userNickname: n.name
							};
							await Object(u.d)(a(), o)
						})({
							user: s,
							reason: t
						})).then(() => e(Object(i.a)()))
					},
					onReportMessage: (t, s, a) => {
						e(Object(m.P)(s.messageId, t)), e(((e, t, s) => async (a, n, {
							apiContext: r
						}) => {
							const o = Object(h.a)(e, t),
								c = Object(h.b)(e, t, s);
							o && await Object(u.e)(r(), o, c)
						})(t, s, a))
					}
				}));
			class P extends o.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === w.a.Invite || this.props.attr === w.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === R.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === R.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === R.a.BlockUser || this.state.currentFlow === R.a.FileComplaint, this.nextReportFlow = () => {
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
						if (e && e.sender) return c.a.createElement(g, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case _.Threats:
								return a.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case _.Violence:
								return a.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case _.Personal:
								return a.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case _.Impersonation:
								return a.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case _.MinorSexualization:
								return a.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => r()(_, e => {
						const t = this.getReportReasonText(e);
						return c.a.createElement(D, {
							key: t
						}, c.a.createElement(U, {
							type: "radio",
							value: t,
							name: k,
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
							currentFlow: a,
							selectedReason: n
						} = this.state;
						if (n && n.requestCrisisSupport && e && e.messageType === O.d.USER) return a === R.a.CrisisTextLine ? (s(n.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						n && n.reasonText && e && e.messageType === O.d.USER && (s(n.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === w.a.Invite ? R.a.Invite : R.a.Default,
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
						onSubmit: Object(S.a)(this.onSubmit),
						form: !0
					}, c.a.createElement(p.a, {
						channelId: e,
						title: a.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), c.a.createElement(y.a, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : s && this.getUserReportFlow()), c.a.createElement(B.a, {
						primaryButtonText: this.isCTLControls() ? a.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : a.fbt._("Submit", null, {
							hk: "4aU3dh"
						}),
						primaryButtonDisabled: this.isSubmitDisabled(),
						secondaryButtonOnly: this.isSingleButton(),
						secondaryButtonCTLOptions: this.isCTLControls(),
						secondaryButtonText: this.isSingleButton() ? a.fbt._("Close", null, {
							hk: "4gbyAA"
						}) : a.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})
					}))
				}
			}
			t.default = H(P)
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
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/chat/controls/Svg/index.tsx"),
				l = s("./src/chat/icons/svgs/Checkbox/checked.m.less"),
				i = s.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.wrapped(e => n.a.createElement("circle", {
					className: e.className,
					cy: "10",
					cx: "10",
					r: "10"
				}), "StyledCircle", i.a),
				h = o.a.wrapped(e => n.a.createElement("path", {
					className: e.className,
					d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z"
				}), "StyledCheckmark", i.a);
			var m = e => n.a.createElement(c.a, d({}, e, {
					viewBox: "0 0 20 20"
				}), n.a.createElement("g", null, n.a.createElement(u, null), n.a.createElement(h, null))),
				p = s("./src/chat/icons/svgs/Checkbox/unchecked.m.less"),
				b = s.n(p);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const C = o.a.wrapped(e => n.a.createElement("circle", {
				className: e.className,
				cy: "10",
				cx: "10",
				r: "9"
			}), "StyledCircle", b.a);
			var g = e => n.a.createElement(c.a, x({}, e, {
					viewBox: "0 0 20 20"
				}), n.a.createElement("g", null, n.a.createElement(C, null))),
				y = s("./src/chat/controls/Checkbox/index.m.less"),
				O = s.n(y);
			const k = o.a.input("HiddenInput", O.a),
				_ = o.a.wrapped(m, "Checked", O.a),
				v = o.a.wrapped(g, "Unchecked", O.a),
				f = o.a.span("Wrapper", O.a),
				B = o.a.span("Content", O.a),
				E = o.a.span("Control", O.a),
				S = o.a.label("CheckInput", O.a);
			t.a = e => n.a.createElement(S, {
				className: Object(r.a)(e.className, {
					[O.a.checked]: e.checked
				}),
				style: {
					height: e.height || void 0,
					width: e.width || void 0
				}
			}, n.a.createElement(f, null, e.children && !e.rightPosition && n.a.createElement(B, null, e.children), n.a.createElement(E, null, n.a.createElement(k, {
				tabIndex: 0,
				type: e.type || "checkbox",
				checked: e.checked,
				disabled: e.disabled,
				name: e.name,
				value: e.value,
				onChange: e.onChange,
				id: e.id
			}), n.a.createElement(_, null), n.a.createElement(v, null)), e.children && e.rightPosition && n.a.createElement(B, null, e.children)))
		},
		"./src/chat/controls/OverlayControlBar/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "jKsK0jQWRidPglQ7Czk8y",
				button: "jKsK0jQWRidPglQ7Czk8y",
				NoBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				noBorderPrimaryButton: "_2_xFtB6XsnUOGk0YPukDeu",
				OverlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				overlayControlBar: "_3GhQcGD7m0hf9mkUK6I1JG",
				NoHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				noHeaderText: "_1KR6Li0ovE5q7gSH0Rl19G",
				ButtonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				buttonsWrapper: "_2-kvEgGOQg3X-keFfUpUa",
				HeaderText: "_3kD8pfjcLZgRDsMewcOmc4",
				headerText: "_3kD8pfjcLZgRDsMewcOmc4"
			}
		},
		"./src/chat/controls/OverlayControlBar/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./src/config.ts"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/chat/controls/Button/index.tsx"),
				u = s("./src/chat/controls/OverlayControlBar/index.m.less"),
				h = s.n(u),
				m = s("./src/chat/helpers/dom.ts");
			const p = Object(o.b)(void 0, e => ({
				onSubmit: () => {},
				onCancel: Object(m.b)(() => e(Object(c.a)()))
			}))(e => r.a.createElement("div", {
				className: Object(i.a)({
					[h.a.primary]: e.primaryButtonOnly,
					[h.a.NoHeaderText]: !e.children
				}, h.a.OverlayControlBar, e.className)
			}, e.children && r.a.createElement("span", {
				className: h.a.HeaderText
			}, e.children), r.a.createElement("div", {
				className: h.a.ButtonsWrapper
			}, e.primaryButtonBlock && r.a.createElement(d.a, {
				onClick: e.primaryButtonBlockAction || e.onCancel,
				className: Object(i.a)(h.a.Button, h.a.NoBorderPrimaryButton),
				secondary: !0,
				noBorder: !0
			}, e.primaryButtonBlockText || a.fbt._("Block", null, {
				hk: "4CA4VX"
			})), !e.primaryButtonOnly && (e.secondaryButtonCTLOptions ? r.a.createElement(d.a, {
				className: h.a.Button,
				href: `${l.a.redditHelpUrl}/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting`,
				secondary: !0
			}, a.fbt._("Other Options", null, {
				hk: "1RadlV"
			})) : r.a.createElement(d.a, {
				className: h.a.Button,
				onClick: e.secondaryButtonAction || e.onCancel,
				primary: !!e.secondaryButtonOnly,
				secondary: !e.secondaryButtonOnly
			}, e.secondaryButtonText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			}))), !e.secondaryButtonOnly && r.a.createElement(d.a, {
				className: h.a.Button,
				type: "submit",
				primary: !0,
				onClick: e.primaryButtonAction || e.onSubmit,
				disabled: e.primaryButtonDisabled
			}, e.primaryButtonText || a.fbt._("Submit", null, {
				hk: "4aU3dh"
			})))));
			p.displayName = "OverlayControlBar", t.a = p
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
				return a
			}));
			var a, n, r;
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e[e.Default = 0] = "Default", e[e.BlockUser = 1] = "BlockUser", e[e.FileComplaint = 2] = "FileComplaint", e[e.CrisisTextLine = 3] = "CrisisTextLine", e[e.Invite = 4] = "Invite"
			}(a || (a = {})),
			function(e) {
				e.UnsolicitedMessaging = "Unsolicited messaging"
			}(n || (n = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(r || (r = {}));
			new Set(Object.values(r))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayReport.325b052fda62805d7cca.js.map