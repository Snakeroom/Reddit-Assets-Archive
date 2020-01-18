// https://www.redditstatic.com/desktop2x/EmailVerificationModals.f8d0f5712642565711ac.js
// Retrieved at 1/18/2020, 7:00:24 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailVerificationModals"], {
		"./src/reddit/components/EmailCollection/Envelope/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1yYBGklEZ27AA6Pk4a5xcB",
				content: "_1tsHXJq8O99kY-Hnw0TU9H",
				envelopeIcon: "_2MwJgJPAzuZmaOVwlLfjeO",
				warningIcon: "_1UqQ04HyR3qGPylb_9baOq"
			}
		},
		"./src/reddit/components/EmailCollection/Envelope/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Envelope/index.tsx"),
				o = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				l = a("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = a.n(l);
			t.a = e => n.a.createElement("div", {
				className: Object(i.a)(c.a.container, e.className)
			}, n.a.createElement("div", {
				className: c.a.content
			}, n.a.createElement(r.a, {
				className: c.a.envelopeIcon
			}), n.a.createElement(o.a, {
				className: Object(i.a)(c.a.warningIcon, e.warningClassName)
			})))
		},
		"./src/reddit/components/EmailCollection/Input/index.m.less": function(e, t, a) {
			e.exports = {
				container: "M73o_fEhhOMc2JuxLwwPR",
				valid: "_3dfVIk-FM3_3QxLpXlw4Ax",
				input: "_203UbdiXH6Cj6YZENbPam9",
				icon: "_1vHLOIwSJKsFawBZraDyzT",
				invalid: "_2WganpuBTSPhSySiCLFd_j",
				error: "_3NWIeF4tDMa1pNRs_ZFVE5"
			}
		},
		"./src/reddit/components/EmailCollection/Success/index.m.less": function(e, t, a) {
			e.exports = {
				container: "CFCaUIPVBjGmthruP0RtA",
				icon: "_1cSfeKnVP1bIU7MnoJNWTU"
			}
		},
		"./src/reddit/components/EmailVerificationModals/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				o = a("./src/reddit/actions/emailCollection/index.ts"),
				l = a("./src/reddit/actions/emailVerificationTooltip.ts"),
				c = a("./src/reddit/actions/modal.ts"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				m = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/users.ts"),
				u = a("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				h = (a("./node_modules/core-js/modules/es6.symbol.js"), a("./src/reddit/icons/svgs/Approve/index.tsx")),
				b = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				g = a("./src/reddit/components/EmailCollection/Input/index.m.less"),
				E = a.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var f, v = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
				}
				return a
			};
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {}));
			var y = e => {
					const {
						className: t,
						errorMessage: a,
						validityState: s
					} = e, i = v(e, ["className", "errorMessage", "validityState"]), r = s === f.Valid, o = s === f.Invalid;
					return n.a.createElement("div", {
						className: Object(m.a)(E.a.container, r && E.a.valid, o && E.a.invalid, t)
					}, n.a.createElement("input", x({}, i, {
						className: E.a.input
					})), r && n.a.createElement("div", {
						className: E.a.icon
					}, n.a.createElement(h.a, null)), o && n.a.createElement("div", {
						className: E.a.icon
					}, n.a.createElement(b.a, null)), a && n.a.createElement("p", {
						className: E.a.error
					}, a))
				},
				O = a("./src/reddit/components/TrackingHelper/index.tsx"),
				w = a("./src/reddit/controls/Button/index.tsx"),
				C = a("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				j = a("./src/reddit/helpers/trackers/emailCollection.ts"),
				_ = a("./src/reddit/i18n/components.tsx"),
				S = a("./src/reddit/i18n/utils.ts"),
				N = a("./src/reddit/selectors/user.ts"),
				k = a("./src/reddit/icons/svgs/Close/index.tsx"),
				M = a("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				P = a.n(M);
			var B = e => {
					const {
						children: t,
						className: a,
						description: s,
						descriptionClassName: i,
						icon: r,
						onClose: o,
						title: l
					} = e;
					return n.a.createElement("div", {
						className: Object(m.a)(P.a.container, a)
					}, n.a.createElement("button", {
						className: P.a.closeButton,
						onClick: o
					}, n.a.createElement(k.a, {
						className: P.a.closeIcon
					})), n.a.createElement("div", {
						className: P.a.header
					}, r && n.a.createElement("div", {
						className: P.a.icon
					}, r), n.a.createElement("h2", {
						className: P.a.title
					}, l)), s && n.a.createElement("p", {
						className: Object(m.a)(P.a.description, i)
					}, s), n.a.createElement("div", {
						className: P.a.body
					}, t))
				},
				F = a("./src/reddit/components/Settings/accountModals.m.less"),
				I = a.n(F);
			const A = "popup",
				L = {
					newEmail: "",
					newEmailError: null,
					newEmailState: null,
					password: "",
					passwordError: null,
					passwordState: null
				},
				D = Object(r.c)({
					changeEmailError: N.c,
					currentEmail: N.l
				}),
				H = Object(i.b)(D, e => ({
					changeEmail: t => e(Object(p.w)(t))
				}));
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.state = L, this.formIncomplete = () => !this.state.newEmail || !this.state.password, this.validateNewEmail = () => {
						const {
							currentEmail: e
						} = this.props, {
							newEmail: t
						} = this.state;
						return /^.+@.+\..+$/.test(t) ? e === t ? Object(S.c)("You entered the current email address. Please enter a different one to proceed.") : null : Object(S.c)("Please enter a valid email")
					}, this.handleSubmit = () => {
						const e = this.validateNewEmail();
						this.setState({
							newEmailError: e,
							newEmailState: e ? f.Invalid : f.Valid
						}), e || this.props.changeEmail(this.state)
					}, this.onCloseModal = () => {
						this.props.shouldSendEvents && this.props.sendEvent(Object(j.e)(A)), this.props.onClose(), this.setState(L)
					}, this.updateNewEmailField = e => {
						this.setState({
							newEmail: e.target.value,
							newEmailError: null,
							newEmailState: null
						})
					}, this.onNewEmailFieldBlur = () => {
						this.setState(e => {
							if (e.newEmailError) return null;
							const t = this.validateNewEmail();
							return {
								newEmailError: t,
								newEmailState: t ? f.Invalid : f.Valid
							}
						})
					}, this.updatePasswordField = e => {
						this.setState({
							password: e.target.value,
							passwordError: null,
							passwordState: null
						})
					}, this.onPasswordFieldBlur = () => {
						this.setState(e => {
							if (e.passwordError) return null;
							const t = e.password.length > 0 ? f.Valid : null;
							return t === e.passwordState ? null : {
								passwordState: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.shouldSendEvents && this.props.sendEvent(Object(j.f)(A))
				}
				componentDidUpdate(e) {
					const {
						changeEmailError: t
					} = this.props;
					t && t !== e.changeEmailError && (t === C.a.WRONG_PASSWORD ? this.setState({
						passwordError: Object(S.c)(t),
						passwordState: f.Invalid
					}) : this.setState({
						newEmailError: Object(S.c)(t),
						newEmailState: f.Invalid
					}))
				}
				render() {
					const {
						newEmail: e,
						newEmailError: t,
						newEmailState: a,
						password: s,
						passwordError: i,
						passwordState: r
					} = this.state;
					return n.a.createElement(B, {
						icon: n.a.createElement(u.a, null),
						description: this.props.description,
						onClose: this.onCloseModal,
						title: this.props.title
					}, n.a.createElement(y, {
						className: I.a.input,
						errorMessage: i || void 0,
						onBlur: this.onPasswordFieldBlur,
						onChange: this.updatePasswordField,
						placeholder: Object(S.c)("Current password"),
						type: "password",
						validityState: r || void 0,
						value: s
					}), n.a.createElement(y, {
						className: I.a.input,
						errorMessage: t || void 0,
						onBlur: this.onNewEmailFieldBlur,
						onChange: this.updateNewEmailField,
						placeholder: Object(S.c)("New email"),
						value: e,
						validityState: a || void 0
					}), n.a.createElement("div", {
						className: I.a.buttonWrapper
					}, n.a.createElement(w.f, {
						className: Object(m.a)(I.a.commonBtn, I.a.primaryBtn),
						redditStyle: !0,
						disabled: this.formIncomplete(),
						onClick: this.handleSubmit
					}, n.a.createElement(_.c, null, "Save email"))))
				}
			}
			var R = Object(d.a)(H(Object(O.b)(T))),
				J = a("./src/reddit/components/EmailCollection/Success/index.m.less"),
				U = a.n(J);
			var W = e => n.a.createElement("div", {
					className: Object(m.a)(U.a.container, e.className)
				}, n.a.createElement(h.a, {
					className: U.a.icon
				})),
				q = a("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				z = a.n(q);
			var V = Object(d.a)(e => n.a.createElement(B, {
					description: n.a.createElement(n.a.Fragment, null, n.a.createElement(_.c, null, "Reddit sent a confirmation email to: "), n.a.createElement("strong", {
						className: z.a.strongTextFont
					}, e.email), n.a.createElement("br", null), n.a.createElement(_.c, null, "Click the verify link in the email to secure your Reddit account.")),
					descriptionClassName: I.a.description,
					icon: n.a.createElement(W, null),
					onClose: e.onConfirm,
					title: Object(S.c)("Check your email")
				}, n.a.createElement("div", {
					className: I.a.buttonWrapper
				}, n.a.createElement(w.f, {
					onClick: e.onConfirm
				}, n.a.createElement(_.c, null, "Got it"))))),
				X = a("./src/reddit/components/Settings/modalIds.ts");
			const Q = "#FFF";
			var K = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				G = a("./src/reddit/actions/preferences.ts"),
				Y = a("./src/reddit/controls/Checkbox/index.tsx"),
				Z = a("./src/reddit/controls/InternalLink/index.tsx"),
				$ = a("./src/reddit/featureFlags/index.ts"),
				ee = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				te = a("./src/reddit/components/Settings/DeactivateModal.tsx"),
				ae = a("./src/reddit/components/Settings/VerifyEmailModal.m.less"),
				se = a.n(ae);
			const ne = Object(r.c)({
					emailDigests: N.k,
					isEmailPermissionRequired: $.d.isEmailPermissionRequired
				}),
				ie = Object(i.b)(ne, e => ({
					resendEmail: () => e(Object(p.y)()),
					toggleEmailDigests: t => e(Object(G.F)({
						emailDigests: t
					}))
				}));
			class re extends n.a.Component {
				constructor() {
					super(...arguments), this.trackEmailSettingsLinkClick = () => {
						this.props.sendEvent(j.d)
					}, this.toggleEmailDigests = () => {
						this.props.toggleEmailDigests(!this.props.emailDigests), this.props.sendEvent(Object(j.b)(!this.props.emailDigests))
					}
				}
				render() {
					const {
						emailDigests: e,
						isEmailPermissionRequired: t,
						onConfirm: a,
						resendEmail: s
					} = this.props, i = !!e;
					return n.a.createElement(B, {
						className: se.a.container,
						description: n.a.createElement(n.a.Fragment, null, n.a.createElement(_.c, null, "Check your email. If you do not receive it, please check it was not flagged as spam or try resending the email below."), !t && n.a.createElement("span", {
							className: se.a.reviewSettings
						}, n.a.createElement(_.c, null, " You can also "), n.a.createElement(Z.a, {
							className: se.a.settingsLink,
							onMouseDown: this.trackEmailSettingsLinkClick,
							to: "/settings"
						}, n.a.createElement(_.c, null, "review your email settings here.")))),
						descriptionClassName: se.a.description,
						icon: n.a.createElement(W, null),
						onClose: a,
						title: Object(S.c)("Verify email sent")
					}, t && n.a.createElement(te.a, {
						className: se.a.checkboxWrapper
					}, n.a.createElement(Y.a, {
						className: Object(m.a)(se.a.checkbox, !i && se.a.unchecked),
						checkBoxStyle: {
							backgroundColor: Q,
							borderRadius: "50%",
							fill: Object(ee.a)(this.props).active,
							visibility: i ? "visible" : "hidden"
						},
						isCheckboxSelected: i,
						toggleCheckbox: this.toggleEmailDigests
					}), n.a.createElement("label", {
						className: se.a.checkboxLabel,
						onClick: this.toggleEmailDigests
					}, n.a.createElement(_.c, null, "You agree that Reddit can send you emails to help notify you of the best content and responses to you posts. Unsubscribe anytime!"))), n.a.createElement("div", {
						className: I.a.buttonWrapper
					}, n.a.createElement(w.i, {
						onClick: s
					}, n.a.createElement(_.c, null, "Resend email")), n.a.createElement(w.f, {
						className: I.a.primaryBtn,
						onClick: a
					}, n.a.createElement(_.c, null, "Done"))))
				}
			}
			var oe = Object(d.a)(ie(Object(O.b)(Object(K.a)(re)))),
				le = a("./src/reddit/selectors/activeModalId.ts");
			const ce = Object(r.c)({
					changeEmailModalOpen: Object(le.b)(X.a),
					checkEmailModalOpen: Object(le.b)(X.b),
					isEmailPermissionRequired: $.d.isEmailPermissionRequired,
					setEmailModalOpen: Object(le.b)(X.c),
					verifyEmailModalOpen: Object(le.b)(X.d)
				}),
				de = Object(i.b)(ce, (e, t) => {
					let {
						shouldOpenTooltip: a
					} = t;
					return {
						closeChangeEmailModal: () => {
							a && e(Object(l.b)()), e(Object(c.g)(X.a))
						},
						closeSetEmailModal: () => e(Object(o.b)()),
						closeVerifyEmailModal: () => e(Object(c.g)(X.d)),
						toggleCheckEmailModal: () => e(Object(c.i)(X.b))
					}
				}),
				me = e => Object(S.c)("\n  Adding a verified email will help you access your account\n  if you forget your password.".concat(e ? "" : " You'll also receive important updates from Reddit sent straight to your inbox.", "\n"));
			t.default = de(e => {
				let {
					email: t,
					changeEmailModalOpen: a,
					checkEmailModalOpen: i,
					closeChangeEmailModal: r,
					closeSetEmailModal: o,
					closeVerifyEmailModal: l,
					isEmailPermissionRequired: c,
					setEmailModalOpen: d,
					toggleCheckEmailModal: m,
					verifyEmailModalOpen: p
				} = e;
				return n.a.createElement(s.Fragment, null, a && n.a.createElement(R, {
					description: Object(S.c)("\n          Update your email below. There will be a new verification email\n          sent that you will need to use to verify this new email.\n        "),
					onClose: r,
					onOverlayClick: r,
					title: Object(S.c)("Update your email"),
					withOverlay: !0
				}), d && n.a.createElement(R, {
					description: me(c),
					onClose: o,
					shouldSendEvents: !0,
					title: Object(S.c)("Verify your account"),
					withOverlay: !0
				}), i && n.a.createElement(V, {
					email: t,
					onConfirm: m,
					onOverlayClick: m,
					withOverlay: !0
				}), p && n.a.createElement(oe, {
					onConfirm: l,
					onOverlayClick: l,
					withOverlay: !0
				}))
			})
		},
		"./src/reddit/components/Settings/DeactivateModal.m.less": function(e, t, a) {
			e.exports = {
				Container: "_2VsAK7m6JTJitCSeSvirtt",
				container: "_2VsAK7m6JTJitCSeSvirtt",
				HeaderText: "kAxpnDHCzK52N-knLlhM1",
				headerText: "kAxpnDHCzK52N-knLlhM1",
				Close: "_3BQ70VJHQaBkt1OQUrZgN",
				close: "_3BQ70VJHQaBkt1OQUrZgN",
				PrimaryButton: "_29VAKmRm7MJtgmyN_D683I",
				primaryButton: "_29VAKmRm7MJtgmyN_D683I",
				SecondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				secondaryButton: "_1B0iNMBj4pj9U0S9KchRfM",
				ButtonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				buttonWrapper: "_2LADJSHkUPSfABt8hQH7zK",
				TextArea: "_3KUxPQl1bIbMalB1ElgkND",
				textArea: "_3KUxPQl1bIbMalB1ElgkND",
				SectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				sectionLabel: "NAjG1Q7fs7xPokS-On_vY",
				H: "_33YDTJ9EBpPYIbuAhgieNI",
				h: "_33YDTJ9EBpPYIbuAhgieNI",
				P: "_2Jyci5nN37DUMdKXr2eRn",
				p: "_2Jyci5nN37DUMdKXr2eRn",
				Input: "_161WTqM53-R3b5XBxClmEs",
				input: "_161WTqM53-R3b5XBxClmEs",
				CheckBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				checkBoxWrapper: "_2q3hqWI11yqJyNydIAsXyv",
				UL: "HulKM8oqJogE46P-pLJi7",
				ul: "HulKM8oqJogE46P-pLJi7"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return N
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				o = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/controls/Checkbox/index.tsx"),
				c = a("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/app/strings/index.ts"),
				p = a("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = a.n(p),
				h = a("./src/lib/lessComponent.tsx"),
				b = function(e, t) {
					var a = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
					}
					return a
				};
			const g = "settings.accountForm.deactivateModal",
				E = h.a.div("Container", u.a),
				x = h.a.h2("HeaderText", u.a),
				f = h.a.button("Close", u.a),
				v = h.a.wrapped(o.b, "PrimaryButton", u.a),
				y = h.a.wrapped(o.i, "SecondaryButton", u.a),
				O = h.a.div("ButtonWrapper", u.a),
				w = h.a.textarea("TextArea", u.a),
				C = h.a.h3("SectionLabel", u.a),
				j = h.a.p("H", u.a),
				_ = h.a.p("P", u.a),
				S = h.a.wrapped(c.a, "Input", u.a),
				N = h.a.div("CheckBoxWrapper", u.a),
				k = h.a.ul("UL", u.a),
				M = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				};
			class P extends n.a.Component {
				constructor(e) {
					super(e), this.showConfirm = () => {
						const e = this.state;
						e.password && e.username && e.checkbox && this.setState({
							showConfirm: !0
						})
					}, this.handleSubmit = () => {
						const e = this.state,
							{
								showConfirm: t
							} = e,
							a = b(e, ["showConfirm"]);
						this.props.onClick(a), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return n.a.createElement(d.j, null, n.a.createElement(j, null, Object(m.a)(e.language, "".concat(g, ".content.sorry"))), n.a.createElement(k, null, n.a.createElement("li", null, Object(m.a)(e.language, "".concat(g, ".content.contactUs"))), n.a.createElement("li", null, Object(m.a)(e.language, "".concat(g, ".content.postsDisclaimer"))), e.user && e.user.isGold && e.user.hasGoldSubscription && n.a.createElement("li", null, Object(m.a)(e.language, "".concat(g, ".content.premiumMessage")), Object.keys(M).map((t, a) => n.a.createElement("span", {
							key: t
						}, !!a && ", ", n.a.createElement("a", {
							href: M[t],
							target: "_blank"
						}, Object(m.a)(e.language, "".concat(g, ".content.").concat(t))))))), n.a.createElement(C, null, Object(m.a)(e.language, "".concat(g, ".headings.reason"))), n.a.createElement(w, {
							placeholder: "(OPTIONAL) FEEDBACK",
							onChange: this.updateField("feedback")
						}), n.a.createElement(C, null, Object(m.a)(e.language, "".concat(g, ".headings.credentials"))), n.a.createElement(S, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: Object(m.a)(e.language, "".concat(g, ".labels.username"))
						}), n.a.createElement(S, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: Object(m.a)(e.language, "".concat(g, ".labels.password")),
							type: "password"
						}), n.a.createElement(N, null, n.a.createElement(l.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), n.a.createElement("label", null, Object(m.a)(e.language, "".concat(g, ".labels.confirm")))), n.a.createElement(O, null, n.a.createElement(y, {
							onClick: e.exit
						}, Object(m.a)(e.language, "".concat(g, ".labels.cancel"))), n.a.createElement(v, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, Object(m.a)(e.language, "".concat(g, ".labels.deactivate")))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: a
						} = e;
						return Object(r.a)(Object(m.a)(this.props.language, "".concat(g, a ? ".content.premiumNotificationMobileMessage" : ".content.premiumNotificationDesktopMessage")), {
							":link:": n.a.createElement("a", {
								href: M[t],
								target: "_blank"
							}, Object(m.a)(this.props.language, "".concat(g, ".content.").concat(t)))
						})
					}, this.renderPremiumNotification = () => n.a.createElement(d.j, null, n.a.createElement(j, null, Object(m.a)(this.props.language, "".concat(g, ".content.premiumNotificationTitle"))), n.a.createElement(_, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIOSSubscription && this.renderPremiumNotificationMessage({
						platform: "ios",
						isMobile: !0
					}), this.props.user && this.props.user.hasPaypalSubscription && this.renderPremiumNotificationMessage({
						platform: "paypal",
						isMobile: !1
					}), this.props.user && this.props.user.hasStripeSubscription && this.renderPremiumNotificationMessage({
						platform: "stripe",
						isMobile: !1
					})), n.a.createElement(O, null, n.a.createElement(v, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, Object(m.a)(this.props.language, "".concat(g, ".labels.deactivate"))))), this.renderConfirm = () => n.a.createElement(d.j, null, n.a.createElement(j, null, Object(m.a)(this.props.language, "".concat(g, ".content.confirmMessage"))), n.a.createElement(O, null, n.a.createElement(y, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, Object(m.a)(this.props.language, "".concat(g, ".labels.back"))), n.a.createElement(v, {
						onClick: this.handleSubmit
					}, Object(m.a)(this.props.language, "".concat(g, ".labels.deactivate"))))), this.state = {
						password: "",
						username: "",
						checkbox: !1,
						feedback: "",
						showConfirm: !1,
						showPremiumNotification: !!e.user && e.user.isGold && e.user.hasGoldSubscription
					}
				}
				render() {
					const e = this.props;
					return n.a.createElement(E, null, n.a.createElement(f, {
						onClick: e.exit
					}, n.a.createElement(d.b, null)), n.a.createElement(d.g, null, n.a.createElement(x, null, Object(m.a)(e.language, "".concat(g, ".headings.main")))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(i.a)(P)
		},
		"./src/reddit/components/Settings/ModalContainer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1AaXuuXcppN6z3lyjemnkL",
				closeButton: "_2n58ofMJPg93rBexzKK_eC",
				closeIcon: "_1-aRvaXjqzrU9zAXYkO31N",
				header: "_3A-cwt8Ht4zvde70Pjy__E",
				icon: "_1x_pYy_fmCQxsGD3ovvgfw",
				title: "_19eT5Znm4YIntTUHAcYrX3",
				description: "veTQ6x5JgIlwMg7Auj1Sd",
				body: "iTEI6v2GvrdU6pwBMDd_j"
			}
		},
		"./src/reddit/components/Settings/VerifyEmailModal.m.less": function(e, t, a) {
			e.exports = {
				container: "eLjEWcpdu8Jqqw1UMqe_t",
				checkboxLabel: "_1VBx8AnsmRXx-7Ap6-IW-Z",
				description: "pXN5bKwNJz4dIMxgUqs0N",
				reviewSettings: "_25LcsIsmg2z4-7YupjMf4p",
				settingsLink: "ivb52w1rzXqBWdwq1TRnQ",
				checkboxWrapper: "_1JSHGl53v2k6fXBrphqiTw",
				checkbox: "_3M3O98PgGFITCerPYD78M1",
				unchecked: "Pyht35t8_A_w9Obog4qoZ"
			}
		},
		"./src/reddit/components/Settings/accountModals.m.less": function(e, t, a) {
			e.exports = {
				buttonWrapper: "_3bwuX1FpzX5u_wA4guPMPr",
				input: "RrqK6usE8PEMhLL7FD-iE",
				checkboxLabel: "OBgeR3lNas33iO_RB1buN",
				primaryBtn: "_1ZuJ4cYdwXBjhOxsWSpt_J",
				toggle: "brX0v5qpkg7KN-bOajuQ7",
				description: "hfVDp17HN3YB0M-CBz_f7"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.m.less": function(e, t, a) {
			e.exports = {
				Input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				input: "_1Vnaj3fBuYrmHKEPQD_zWW",
				Label: "_1niwHyFzfJ2EBfsTxotmOo",
				label: "_1niwHyFzfJ2EBfsTxotmOo",
				Button: "Dtg-R0LPsUrNfymGbPg_G",
				button: "Dtg-R0LPsUrNfymGbPg_G",
				Wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				wrapper: "_1gw9QnHhIreAAaTWBI3fUH",
				mFocused: "_3_AGLaBQJiLQvGX_bkEmlQ"
			}
		},
		"./src/reddit/components/Settings/shared/FatInput.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/components/Settings/shared/FatInput.m.less"),
				o = a.n(r),
				l = a("./src/lib/lessComponent.tsx");
			const c = l.a.input("Input", o.a),
				d = l.a.label("Label", o.a),
				m = l.a.button("Button", o.a),
				p = l.a.div("Wrapper", o.a);
			class u extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						focused: !1
					}
				}
				render() {
					const {
						buttonText: e,
						className: t,
						disabled: a,
						label: s,
						onClick: r,
						onChange: l,
						type: u = "text",
						value: h
					} = this.props;
					return n.a.createElement(p, {
						className: Object(i.a)(t, {
							[o.a.mFocused]: this.state.focused
						})
					}, n.a.createElement(c, {
						value: h,
						type: u,
						onChange: e => l(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), n.a.createElement(d, null, s), r && n.a.createElement(m, {
						disabled: !!a,
						onClick: r
					}, e))
				}
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, a) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = e => n.a.createElement("svg", o({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), n.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, n.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, n.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = a("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = a("./src/reddit/controls/Checkbox/index.m.less"),
				m = a.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
				}
				return a
			};
			const h = e => t => {
					const {
						className: a,
						disabled: s,
						redditStyle: r,
						"data-redditstyle": o
					} = t, l = u(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, a) => {
						const s = !(!t && !a);
						let n = "";
						return n = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, r, o);
					return n.a.createElement(e, p({
						className: Object(i.a)(m.a.Checkbox, c, a)
					}, l))
				},
				b = h(c.a),
				g = h(l);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? g : e.isCheckboxSelected ? b : r.a;
				return n.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, n.a.createElement(t, {
					className: Object(i.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);

			function i(e, t) {
				const a = e.split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, s) => (s % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => n.a.createElement(n.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/styles/mixins/fonts.m.less": function(e, t, a) {
			e.exports = {
				titleFontH1: "_3gUeTKT4XlFEby1H6_TC19",
				titleFontH2: "_1-mMPLU2Nlffx0JT-3revU",
				titleFontH3: "_2bunchGAjv3PLvvdL2MjZ-",
				titleFontH4: "_3gwUix9UH34NUpcjvZLXbF",
				titleFontH5: "_3fOSv3R7EbBH_IjX9NcJ6k",
				titleFontH6: "_2idh376GSaloUfQixQHScs",
				metadataFont: "yxMvMTKJ8A1hhaAmVojky",
				flairFont: "_2Ms4g8FLmBRDWAbfRO4bG6",
				labelsFont: "_2WK3LdQ4kR2aJFQqnTsu0A",
				actionFont: "_3d3pCI-qoO6psmyxodxokk",
				smallButtonFont: "_1LVr35fM7ddtvg2g2I4qJ7",
				largeButtonFont: "_1jVGMlwau5yaN1vqhiSwEo",
				tabFont: "_1leSu44tZ3i4KBsjGW_F9c",
				strongTextFont: "_2oA70eNUJxOQ-eRN8TPT9s",
				extraSmallFont: "_3TbSj7zXleh1mNI_0YppwA",
				bodyFontH1: "_2CvYC5Dor5C7bRy9T_5TQX",
				bodyFontH2: "_6n_lhbrgbPv9CUoOwND7J",
				bodyFontH3: "l6V3xHeCqsPn028sXl7VN",
				bodyFontH4: "_1XCZr-qft4wCNMbV9Ss_Ou",
				bodyFontH5: "_1d5gYDAvszTFAiNg31iR56",
				bodyFontH6: "_2aeJbvpJvTsRzIwwJHzssX",
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR"
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, a) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Warning/index.m.less"),
				o = a.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(o.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), n.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=EmailVerificationModals.f8d0f5712642565711ac.js.map