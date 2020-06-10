// https://www.redditstatic.com/desktop2x/EmailVerificationModals.733dc740fb33a36a7595.js
// Retrieved at 6/10/2020, 6:40:06 PM by Reddit Dataminer v1.0.0
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
				o = a("./src/reddit/icons/svgs/Envelope/index.tsx"),
				r = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				l = a("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = a.n(l);
			t.a = e => n.a.createElement("div", {
				className: Object(i.a)(c.a.container, e.className)
			}, n.a.createElement("div", {
				className: c.a.content
			}, n.a.createElement(o.a, {
				className: c.a.envelopeIcon
			}), n.a.createElement(r.a, {
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
				error: "_3NWIeF4tDMa1pNRs_ZFVE5",
				success: "_1TX1trRHZhQtSbH6eCqoeE"
			}
		},
		"./src/reddit/components/EmailCollection/Input/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				r = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				l = a("./src/reddit/components/EmailCollection/Input/index.m.less"),
				c = a.n(l);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m, u = function(e, t) {
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
			}(m || (m = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: a,
					successMessage: s,
					validityState: l
				} = e, p = u(e, ["className", "errorMessage", "successMessage", "validityState"]), h = l === m.Valid, b = l === m.Invalid;
				return n.a.createElement("div", {
					className: Object(i.a)(c.a.container, h && c.a.valid, b && c.a.invalid, t)
				}, n.a.createElement("input", d({}, p, {
					className: c.a.input
				})), h && n.a.createElement("div", {
					className: c.a.icon
				}, n.a.createElement(o.a, null)), b && n.a.createElement("div", {
					className: c.a.icon
				}, n.a.createElement(r.a, null)), b && a && n.a.createElement("p", {
					className: c.a.error
				}, a), h && s && n.a.createElement("p", {
					className: c.a.success
				}, s))
			}
		},
		"./src/reddit/components/EmailCollection/Success/index.m.less": function(e, t, a) {
			e.exports = {
				container: "CFCaUIPVBjGmthruP0RtA",
				icon: "_1cSfeKnVP1bIU7MnoJNWTU"
			}
		},
		"./src/reddit/components/EmailVerificationModals/index.m.less": function(e, t, a) {
			e.exports = {
				"m-responsive": "_3CPef8Zxo_T9T_3hDuOg9R",
				mResponsive: "_3CPef8Zxo_T9T_3hDuOg9R"
			}
		},
		"./src/reddit/components/EmailVerificationModals/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/emailCollection/index.ts"),
				d = a("./src/reddit/actions/emailVerificationTooltip.ts"),
				m = a("./src/reddit/actions/modal.ts"),
				u = a("./src/higherOrderComponents/asModal/index.tsx"),
				p = a("./src/reddit/actions/users.ts"),
				h = a("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				b = a("./src/reddit/components/EmailCollection/Input/index.tsx"),
				f = a("./src/reddit/components/TrackingHelper/index.tsx"),
				E = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				x = a("./src/reddit/helpers/trackers/emailCollection.ts"),
				v = a("./src/reddit/selectors/user.ts"),
				y = a("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				_ = a("./src/reddit/components/Settings/accountModals.m.less"),
				k = a.n(_);
			const w = "popup",
				C = {
					newEmail: "",
					newEmailError: null,
					newEmailState: null,
					password: "",
					passwordError: null,
					passwordState: null
				},
				O = Object(r.c)({
					changeEmailError: v.c,
					currentEmail: v.l
				}),
				S = Object(o.b)(O, e => ({
					changeEmail: t => e(Object(p.t)(t))
				}));
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.state = C, this.formIncomplete = () => !this.state.newEmail || !this.state.password, this.validateNewEmail = () => {
						const {
							currentEmail: e
						} = this.props, {
							newEmail: t
						} = this.state;
						return /^.+@.+\..+$/.test(t) ? e === t ? s.fbt._("You entered the current email address. Please enter a different one to proceed.", null, {
							hk: "hnMf2"
						}) : null : s.fbt._("Please enter a valid email", null, {
							hk: "4ri0Ng"
						})
					}, this.handleSubmit = () => {
						const e = this.validateNewEmail();
						this.setState({
							newEmailError: e,
							newEmailState: e ? b.a.Invalid : b.a.Valid
						}), e || this.props.changeEmail(this.state)
					}, this.onCloseModal = () => {
						this.props.shouldSendEvents && this.props.sendEvent(Object(x.e)(w)), this.props.onClose(), this.setState(C)
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
								newEmailState: t ? b.a.Invalid : b.a.Valid
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
							const t = e.password.length > 0 ? b.a.Valid : null;
							return t === e.passwordState ? null : {
								passwordState: t
							}
						})
					}
				}
				componentDidMount() {
					this.props.shouldSendEvents && this.props.sendEvent(Object(x.f)(w))
				}
				componentDidUpdate(e) {
					const {
						changeEmailError: t
					} = this.props;
					t && t !== e.changeEmailError && (t === g.a.WRONG_PASSWORD ? this.setState({
						passwordError: t,
						passwordState: b.a.Invalid
					}) : this.setState({
						newEmailError: t,
						newEmailState: b.a.Invalid
					}))
				}
				render() {
					const {
						isResponsive: e
					} = this.props, {
						newEmail: t,
						newEmailError: a,
						newEmailState: n,
						password: o,
						passwordError: r,
						passwordState: c
					} = this.state;
					return i.a.createElement(y.a, {
						className: Object(l.a)({
							[k.a["m-responsive"]]: e
						}),
						icon: i.a.createElement(h.a, null),
						description: this.props.description,
						onClose: this.onCloseModal,
						title: this.props.title
					}, i.a.createElement(b.b, {
						className: k.a.input,
						errorMessage: r || void 0,
						onBlur: this.onPasswordFieldBlur,
						onChange: this.updatePasswordField,
						placeholder: s.fbt._("Current password", null, {
							hk: "4iWZrJ"
						}),
						type: "password",
						validityState: c || void 0,
						value: o
					}), i.a.createElement(b.b, {
						className: k.a.input,
						errorMessage: a || void 0,
						onBlur: this.onNewEmailFieldBlur,
						onChange: this.updateNewEmailField,
						placeholder: s.fbt._("New email", null, {
							hk: "3zuSxp"
						}),
						value: t,
						validityState: n || void 0
					}), i.a.createElement("div", {
						className: k.a.buttonWrapper
					}, i.a.createElement(E.f, {
						className: Object(l.a)(k.a.commonBtn, k.a.primaryBtn),
						redditStyle: !0,
						disabled: this.formIncomplete(),
						onClick: this.handleSubmit
					}, s.fbt._("Save email", null, {
						hk: "13j1zl"
					}))))
				}
			}
			var j = Object(u.a)(S(Object(f.c)(N))),
				M = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				P = a("./src/reddit/components/EmailCollection/Success/index.m.less"),
				B = a.n(P);
			var I = e => i.a.createElement("div", {
					className: Object(l.a)(B.a.container, e.className)
				}, i.a.createElement(M.a, {
					className: B.a.icon
				})),
				F = a("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				L = a.n(F);
			var T = Object(u.a)(e => i.a.createElement(y.a, {
					className: Object(l.a)({
						[k.a["m-responsive"]]: e.isResponsive
					}),
					description: i.a.createElement(i.a.Fragment, null, s.fbt._("Reddit sent a confirmation email to:", null, {
						hk: "3IsFLZ"
					}), i.a.createElement("strong", {
						className: L.a.strongTextFont
					}, e.email), i.a.createElement("br", null), s.fbt._("Click the verify link in the email to secure your Reddit account.", null, {
						hk: "jJSSU"
					})),
					descriptionClassName: k.a.description,
					icon: i.a.createElement(I, null),
					onClose: e.onConfirm,
					title: s.fbt._("Check your email", null, {
						hk: "1aob6x"
					})
				}, i.a.createElement("div", {
					className: k.a.buttonWrapper
				}, i.a.createElement(E.f, {
					onClick: e.onConfirm
				}, s.fbt._("Got it", null, {
					hk: "2LxUeS"
				}))))),
				R = a("./src/reddit/components/Settings/modalIds.ts");
			const A = "#FFF";
			var H = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				D = a("./src/reddit/actions/preferences.ts"),
				J = a("./src/reddit/controls/Checkbox/index.tsx"),
				U = a("./src/reddit/controls/InternalLink/index.tsx"),
				W = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				z = a("./src/reddit/selectors/meta.ts"),
				q = a("./src/reddit/components/Settings/DeactivateModal.tsx"),
				Q = a("./src/reddit/components/Settings/VerifyEmailModal.m.less"),
				V = a.n(Q);
			const X = Object(r.c)({
					emailDigests: v.k,
					isEmailPermissionRequired: z.f
				}),
				Y = Object(o.b)(X, e => ({
					resendEmail: () => e(Object(p.v)()),
					toggleEmailDigests: t => e(Object(D.H)({
						emailDigests: t
					}))
				}));
			class K extends i.a.Component {
				constructor() {
					super(...arguments), this.trackEmailSettingsLinkClick = () => {
						this.props.sendEvent(x.d)
					}, this.toggleEmailDigests = () => {
						this.props.toggleEmailDigests(!this.props.emailDigests), this.props.sendEvent(Object(x.b)(!this.props.emailDigests))
					}
				}
				render() {
					const {
						emailDigests: e,
						isEmailPermissionRequired: t,
						isResponsive: a,
						onConfirm: n,
						resendEmail: o
					} = this.props, r = !!e;
					return i.a.createElement(y.a, {
						className: Object(l.a)(V.a.container, {
							[k.a["m-responsive"]]: a
						}),
						description: i.a.createElement(i.a.Fragment, null, s.fbt._("Please check your email. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
							hk: "1taLkO"
						}), !t && i.a.createElement("span", {
							className: V.a.reviewSettings
						}, " ".concat(s.fbt._("You can also", null, {
							hk: "14h75w"
						}), " "), i.a.createElement(U.a, {
							className: V.a.settingsLink,
							onMouseDown: this.trackEmailSettingsLinkClick,
							to: "/settings"
						}, s.fbt._("review your email settings", null, {
							hk: "3eTpv8"
						})), " ".concat(s.fbt._("to control what type of email you receive.", null, {
							hk: "bg4j6"
						})))),
						descriptionClassName: V.a.description,
						icon: i.a.createElement(I, null),
						onClose: n,
						title: s.fbt._("Verification email sent", null, {
							hk: "3rXaUZ"
						})
					}, t && i.a.createElement(q.a, {
						className: V.a.checkboxWrapper
					}, i.a.createElement(J.a, {
						className: Object(l.a)(V.a.checkbox, !r && V.a.unchecked),
						checkBoxStyle: {
							backgroundColor: A,
							borderRadius: "50%",
							fill: Object(W.a)(this.props).active,
							visibility: r ? "visible" : "hidden"
						},
						isCheckboxSelected: r,
						toggleCheckbox: this.toggleEmailDigests
					}), i.a.createElement("label", {
						className: V.a.checkboxLabel,
						onClick: this.toggleEmailDigests
					}, s.fbt._("You agree that Reddit can send you emails to help notify you of the best content and responses to you posts. Unsubscribe anytime!", null, {
						hk: "2OiNgc"
					}))), i.a.createElement("div", {
						className: k.a.buttonWrapper
					}, i.a.createElement(E.i, {
						onClick: o
					}, s.fbt._("Resend email", null, {
						hk: "bbN8b"
					})), i.a.createElement(E.f, {
						className: k.a.primaryBtn,
						onClick: n
					}, s.fbt._("Done", null, {
						hk: "3gzOx4"
					}))))
				}
			}
			var G = Object(u.a)(Y(Object(f.c)(Object(H.a)(K)))),
				Z = a("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = a("./src/reddit/selectors/activeModalId.ts"),
				ee = a("./src/reddit/selectors/responsiveSettings.ts"),
				te = a("./src/reddit/components/EmailVerificationModals/index.m.less"),
				ae = a.n(te);
			const se = Object(r.c)({
					changeEmailModalOpen: Object($.b)(R.a),
					checkEmailModalOpen: Object($.b)(R.c),
					isEmailPermissionRequired: z.f,
					isResponsiveSettingsEnabled: ee.a,
					setEmailModalOpen: Object($.b)(R.g),
					verifyEmailModalOpen: Object($.b)(R.n)
				}),
				ne = Object(o.b)(se, (e, t) => {
					let {
						shouldOpenTooltip: a
					} = t;
					return {
						closeChangeEmailModal: () => {
							a && e(Object(d.b)()), e(Object(m.g)(R.a))
						},
						closeSetEmailModal: () => e(Object(c.b)()),
						closeVerifyEmailModal: () => e(Object(m.g)(R.n)),
						toggleCheckEmailModal: () => e(Object(m.i)(R.c))
					}
				}),
				ie = Object(Z.t)(),
				oe = e => {
					const t = s.fbt._("Adding a verified email will help you access your account if you forget your password.", null, {
						hk: "27gKHu"
					});
					return e ? [t, s.fbt._("You agree that Reddit can send you emails to help notify you of the best content and activity related to your account.", null, {
						hk: "3alhJb"
					})].join(" ") : t
				},
				re = () => s.fbt._("Update your email below. There will be a new verification email sent that you will need to use to verify this new email.", null, {
					hk: "2oXony"
				});
			t.default = ie(ne(e => {
				let {
					email: t,
					changeEmailModalOpen: a,
					checkEmailModalOpen: o,
					closeChangeEmailModal: r,
					closeSetEmailModal: c,
					closeVerifyEmailModal: d,
					isEmailPermissionRequired: m,
					isResponsiveSettingsEnabled: u,
					setEmailModalOpen: p,
					toggleCheckEmailModal: h,
					verifyEmailModalOpen: b
				} = e;
				const f = Object(l.a)({
					[ae.a["m-responsive"]]: u
				});
				return i.a.createElement(n.Fragment, null, a && i.a.createElement(j, {
					description: re(),
					isResponsive: u,
					onClose: r,
					onOverlayClick: r,
					overlayClassName: f,
					title: s.fbt._("Update your email", null, {
						hk: "13zUWG"
					}),
					withOverlay: !0
				}), p && i.a.createElement(j, {
					description: oe(m),
					isResponsive: u,
					onClose: c,
					overlayClassName: f,
					shouldSendEvents: !0,
					title: s.fbt._("Verify your account", null, {
						hk: "27ZUuQ"
					}),
					withOverlay: !0
				}), o && i.a.createElement(T, {
					email: t,
					isResponsive: u,
					onConfirm: h,
					onOverlayClick: h,
					overlayClassName: f,
					withOverlay: !0
				}), b && i.a.createElement(G, {
					isResponsive: u,
					onConfirm: d,
					onOverlayClick: d,
					overlayClassName: f,
					withOverlay: !0
				}))
			}))
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
				return O
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				r = a("./src/reddit/controls/Button/index.tsx"),
				l = a("./src/reddit/controls/Checkbox/index.tsx"),
				c = a("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = a.n(m),
				p = a("./src/lib/lessComponent.tsx"),
				h = function(e, t) {
					var a = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
					}
					return a
				};
			const b = p.a.div("Container", u.a),
				f = p.a.h2("HeaderText", u.a),
				E = p.a.button("Close", u.a),
				g = p.a.wrapped(r.b, "PrimaryButton", u.a),
				x = p.a.wrapped(r.i, "SecondaryButton", u.a),
				v = p.a.div("ButtonWrapper", u.a),
				y = p.a.textarea("TextArea", u.a),
				_ = p.a.h3("SectionLabel", u.a),
				k = p.a.p("H", u.a),
				w = p.a.p("P", u.a),
				C = p.a.wrapped(c.a, "Input", u.a),
				O = p.a.div("CheckBoxWrapper", u.a),
				S = p.a.ul("UL", u.a),
				N = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				j = {
					ios: () => s.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => s.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => s.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => s.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class M extends i.a.Component {
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
							a = h(e, ["showConfirm"]);
						this.props.onClick(a), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return i.a.createElement(d.k, null, i.a.createElement(k, null, s.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), i.a.createElement(S, null, i.a.createElement("li", null, s.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), i.a.createElement("li", null, s.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						})), e.user && e.user.isGold && e.user.hasGoldSubscription && i.a.createElement("li", null, s.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(N).map((e, t) => i.a.createElement("span", {
							key: e
						}, !!t && ", ", i.a.createElement("a", {
							href: N[e],
							target: "_blank"
						}, j[e] && j[e]()))))), i.a.createElement(_, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), i.a.createElement(y, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), i.a.createElement(_, null, s.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), i.a.createElement(C, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: s.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), i.a.createElement(C, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: s.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), i.a.createElement(O, null, i.a.createElement(l.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), i.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), i.a.createElement(v, null, i.a.createElement(x, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), i.a.createElement(g, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("deactivate", null, {
							hk: "3r52aW"
						}))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: a
						} = e;
						return s.fbt._("{text with URL}", [s.fbt._param("text with URL", a ? i.a.createElement(i.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", i.a.createElement("a", {
							href: N[t],
							target: "_blank"
						}, " ", j[t] && j[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : i.a.createElement(i.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", i.a.createElement("a", {
							href: N[t],
							target: "_blank"
						}, " ", j[t] && j[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => i.a.createElement(d.k, null, i.a.createElement(k, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), i.a.createElement(w, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), i.a.createElement(v, null, i.a.createElement(g, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("deactivate", null, {
						hk: "1ZQPu5"
					})))), this.renderConfirm = () => i.a.createElement(d.k, null, i.a.createElement(k, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), i.a.createElement(v, null, i.a.createElement(x, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("back", null, {
						hk: "tEs8T"
					})), i.a.createElement(g, {
						onClick: this.handleSubmit
					}, s.fbt._("deactivate", null, {
						hk: "3r52aW"
					})))), this.state = {
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
					return i.a.createElement(b, null, i.a.createElement(E, {
						onClick: e.exit
					}, i.a.createElement(d.b, null)), i.a.createElement(d.h, null, i.a.createElement(f, null, s.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(o.a)(M)
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
		"./src/reddit/components/Settings/ModalContainer/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Close/index.tsx"),
				r = a("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				l = a.n(r);
			t.a = e => {
				const {
					bodyClassName: t,
					children: a,
					className: s,
					description: r,
					descriptionClassName: c,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: h
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(l.a.container, s)
				}, p && n.a.createElement("button", {
					className: l.a.closeButton,
					onClick: p
				}, n.a.createElement(o.a, {
					className: l.a.closeIcon
				})), n.a.createElement("div", {
					className: Object(i.a)(l.a.header, d)
				}, m && n.a.createElement("div", {
					className: Object(i.a)(l.a.icon, u)
				}, m), n.a.createElement("h2", {
					className: l.a.title
				}, h)), r && n.a.createElement("p", {
					className: Object(i.a)(l.a.description, c)
				}, r), n.a.createElement("div", {
					className: Object(i.a)(l.a.body, t)
				}, a))
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
				description: "hfVDp17HN3YB0M-CBz_f7",
				"m-responsive": "_1RdzLLJTzHMuKTT451B8mz",
				mResponsive: "_1RdzLLJTzHMuKTT451B8mz",
				changeUsernameModalContainer: "_9hmSLlBvZA-2tPAVajB6F",
				confirmModalContainer: "ZdQ8dYkTCSltA50W7-IE3",
				changeUsernameModalBody: "_1Yly3HtP1iwII2uUEMTTKL",
				confirmModalBody: "_1yaWiT2tGW8c-WyQ2DxiNY",
				confirmModalHeader: "_19OEdjo2DQZ1GMEXsY7vZ3",
				confirmModalDescription: "JB3thd-iYucgTQHskJ_6g",
				saveDescription: "_3Yj6lPp8gZJ6YcXvbva9hO",
				confirmModalIcon: "_2nFUIwSqAux1OcismY38n4",
				questionIcon: "pg0_xOJ41KOzSjQt9g3FB",
				usernameInput: "_1Ti06LupexmG0XRXRqTBZQ"
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
				return p
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/Settings/shared/FatInput.m.less"),
				r = a.n(o),
				l = a("./src/lib/lessComponent.tsx");
			const c = l.a.input("Input", r.a),
				d = l.a.label("Label", r.a),
				m = l.a.button("Button", r.a),
				u = l.a.div("Wrapper", r.a);
			class p extends n.a.Component {
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
						onClick: o,
						onChange: l,
						type: p = "text",
						value: h
					} = this.props;
					return n.a.createElement(u, {
						className: Object(i.a)(t, {
							[r.a.mFocused]: this.state.focused
						})
					}, n.a.createElement(c, {
						value: h,
						type: p,
						onChange: e => l(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), n.a.createElement(d, null, s), o && n.a.createElement(m, {
						disabled: !!a,
						onClick: o
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
				o = a("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var l = e => n.a.createElement("svg", r({
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

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
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
						redditStyle: o,
						"data-redditstyle": r
					} = t, l = p(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, a) => {
						const s = !(!t && !a);
						let n = "";
						return n = e ? s ? m.a.mDisabledRedditStyle : m.a.mDisabled : s ? m.a.mActiveRedditStyle : m.a.mActive
					})(s, o, r);
					return n.a.createElement(e, u({
						className: Object(i.a)(m.a.Checkbox, c, a)
					}, l))
				},
				b = h(c.a),
				f = h(l);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? b : o.a;
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
				o = a("./src/reddit/icons/svgs/Warning/index.m.less"),
				r = a.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(i.a)(r.a.warning, e.className),
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
//# sourceMappingURL=EmailVerificationModals.733dc740fb33a36a7595.js.map