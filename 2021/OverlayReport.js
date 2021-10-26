// https://www.redditstatic.com/desktop2x/OverlayReport.de03174070491bb4fefa.js
// Retrieved at 10/26/2021, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["OverlayReport"], {
		"./src/chat/components/OverlayReport/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "OverlayReport", (function() {
				return N
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/map.js"),
				o = s.n(r),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				c = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-redux/es/index.js"),
				h = s("./src/lib/lessComponent.tsx"),
				u = s("./src/chat/endpoints/users/index.ts"),
				d = s("./src/chat/models/Message/report.ts");
			var p = s("./src/chat/actions/tracking.ts"),
				m = s("./src/chat/components/OverlayNav/index.tsx"),
				b = s("./src/higherOrderComponents/makeAsync.tsx"),
				x = s("./src/lib/loadWithRetries/index.ts");
			const g = () => null;
			var R = Object(b.a)({
					ErrorComponent: g,
					getComponent: () => Object(x.a)(() => s.e("ChatReportFlow").then(s.bind(null, "./src/chat/components/ReportFlow/index.tsx"))).then(e => e.default),
					LoadingComponent: g
				}),
				C = s("./src/chat/components/Scroller/index.tsx"),
				w = s("./src/chat/constants/messages.ts");
			const S = "reportReason";
			var f;
			! function(e) {
				e.Threats = "threats", e.Violence = "violence", e.Personal = "personal", e.Impersonation = "impersonation", e.MinorSexualization = "minorSexualization"
			}(f || (f = {}));
			var v = s("./src/chat/controls/Checkbox/index.tsx"),
				O = s("./src/chat/controls/Overlay/index.tsx"),
				F = s("./src/chat/controls/OverlayControlBar/index.tsx"),
				_ = s("./src/chat/helpers/chatSelector.ts"),
				T = s("./src/chat/helpers/dom.ts"),
				j = s("./src/chat/models/ReportFlow/index.ts"),
				k = s("./src/chat/routes/chat.ts"),
				y = s("./src/chat/selectors/channels.ts"),
				L = s("./src/chat/selectors/user.ts"),
				I = s("./src/chat/components/OverlayReport/index.m.less"),
				U = s.n(I),
				E = s("./src/chat/selectors/messages.ts");
			const B = h.a.wrapped(v.a, "Checkbox", U.a),
				M = h.a.div("ListItem", U.a),
				D = Object(_.a)({
					user: (e, t) => t.attr === k.a.User ? e.contacts.models[t.attrId] : void 0,
					message: (e, t) => t.attr === k.a.Invite || t.attr === k.a.Message ? Object(E.b)(e, Number(t.attrId)) : void 0,
					messageList: e => Object(y.C)(e),
					currentUserId: (e, t) => Object(L.a)(e)
				}),
				A = Object(c.b)(D, e => ({
					onReportUser: (t, s) => {
						e(Object(p.S)(s.id)), e((e => async (t, s, {
							apiContext: n
						}) => {
							const {
								user: r,
								reason: o
							} = e, a = {
								reason: o,
								userNickname: r.name
							};
							await Object(u.d)(n(), a)
						})({
							user: s,
							reason: t
						})).then(() => e(Object(l.a)()))
					},
					onReportMessage: (t, s, n) => {
						e(Object(p.U)(s.messageId, t)), e(((e, t, s) => async (n, r, {
							apiContext: o
						}) => {
							const a = Object(d.a)(e, t),
								i = Object(d.b)(e, t, s);
							a && await Object(u.e)(o(), a, i)
						})(t, s, n))
					}
				}));
			class N extends a.Component {
				constructor(e) {
					super(e), this.selectReason = e => this.setState({
						selectedReason: e
					}), this.isMessageReportFlow = () => this.props.attr === k.a.Invite || this.props.attr === k.a.Message, this.isSubmitDisabled = () => !this.state.selectedReason, this.isCTLControls = () => this.state.currentFlow === j.a.CrisisTextLine && !this.state.ctlSubmitted, this.isSingleButton = () => this.state.currentFlow === j.a.CrisisTextLine && !0 === this.state.ctlSubmitted || this.state.currentFlow === j.a.BlockUser || this.state.currentFlow === j.a.FileComplaint, this.nextReportFlow = () => {
						const {
							selectedReason: e
						} = this.state, t = e && e.requestCrisisSupport ? j.a.CrisisTextLine : e && e.fileComplaint ? j.a.FileComplaint : j.a.BlockUser;
						this.setState({
							currentFlow: t
						})
					}, this.getMessageReportFlow = () => {
						const {
							message: e
						} = this.props;
						if (e && e.sender) return i.a.createElement(R, {
							onRuleChange: e => this.selectReason(e),
							currentFlow: this.state.currentFlow,
							blockedUserId: e.sender.userId,
							blockedUserName: e.sender.nickname,
							ctlSubmitted: this.state.ctlSubmitted
						})
					}, this.getReportReasonText = e => {
						switch (e) {
							case f.Threats:
								return n.fbt._("Threatens, harrasses, or bullies", null, {
									hk: "9lzw2"
								});
							case f.Violence:
								return n.fbt._("It threatens violence or physical harm", null, {
									hk: "2LziPg"
								});
							case f.Personal:
								return n.fbt._("It's personal and confidential information", null, {
									hk: "2w0qDN"
								});
							case f.Impersonation:
								return n.fbt._("Impersonation", null, {
									hk: "2dg9bu"
								});
							case f.MinorSexualization:
								return n.fbt._("It's sexual or suggestive content involving minors", null, {
									hk: "Ofq3r"
								})
						}
					}, this.getUserReportFlow = () => o()(f, e => {
						const t = this.getReportReasonText(e);
						return i.a.createElement(M, {
							key: t
						}, i.a.createElement(B, {
							type: "radio",
							value: t,
							name: S,
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
							selectedReason: r
						} = this.state;
						if (r && r.requestCrisisSupport && e && e.messageType === w.d.USER) return n === j.a.CrisisTextLine ? (s(r.reasonText, e, t), this.setState({
							ctlSubmitted: !0
						})) : this.nextReportFlow();
						r && r.reasonText && e && e.messageType === w.d.USER && (s(r.reasonText, e, t), this.nextReportFlow())
					}, this.state = {
						selectedReason: void 0,
						currentFlow: this.props.attr === k.a.Invite ? j.a.Invite : j.a.Default,
						ctlSubmitted: !1
					}
				}
				render() {
					const {
						channelId: e,
						message: t,
						user: s
					} = this.props;
					return i.a.createElement(O.a, {
						onSubmit: Object(T.a)(this.onSubmit),
						form: !0
					}, i.a.createElement(m.a, {
						channelId: e,
						title: n.fbt._("Reason for report", null, {
							hk: "EqHEf"
						})
					}), i.a.createElement(C.a, null, this.isMessageReportFlow() ? t && this.getMessageReportFlow() : s && this.getUserReportFlow()), i.a.createElement(F.a, {
						primaryButtonText: this.isCTLControls() ? n.fbt._("Yes", null, {
							hk: "1nxheD"
						}) : n.fbt._("Submit", null, {
							hk: "4aU3dh"
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
			t.default = A(N)
		},
		"./src/chat/models/ReportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r, o;
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			! function(e) {
				e[e.Default = 0] = "Default", e[e.BlockUser = 1] = "BlockUser", e[e.FileComplaint = 2] = "FileComplaint", e[e.CrisisTextLine = 3] = "CrisisTextLine", e[e.Invite = 4] = "Invite"
			}(n || (n = {})),
			function(e) {
				e.UnsolicitedMessaging = "Unsolicited messaging"
			}(r || (r = {})),
			function(e) {
				e.R2 = "R2", e.MWEB = "MWEB", e.D2X = "D2X"
			}(o || (o = {}));
			new Set(Object.values(o))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/OverlayReport.de03174070491bb4fefa.js.map