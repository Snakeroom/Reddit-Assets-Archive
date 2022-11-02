// https://www.redditstatic.com/desktop2x/EmailVerificationModals.bff2945b4f039f218c19.js
// Retrieved at 11/2/2022, 1:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailVerificationModals"], {
		"./src/lib/colors/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "e", (function() {
				return s
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "f", (function() {
				return r
			})), a.d(t, "g", (function() {
				return c
			}));
			const n = "#000",
				s = "#FFF",
				o = "#FF4500",
				i = "#0079D3",
				l = "#46D160",
				r = {
					black: n,
					white: s,
					orangered: o,
					alienblue: i,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: o,
					downvote: "#7193FF",
					positive: l,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: o,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: o,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				c = {
					...r,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Envelope/index.tsx"),
				l = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				r = a("./src/reddit/components/EmailCollection/Envelope/index.m.less"),
				c = a.n(r);
			t.a = e => s.a.createElement("div", {
				className: Object(o.a)(c.a.container, e.className)
			}, s.a.createElement("div", {
				className: c.a.content
			}, s.a.createElement(i.a, {
				className: c.a.envelopeIcon
			}), s.a.createElement(l.a, {
				className: Object(o.a)(c.a.warningIcon, e.warningClassName)
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
				return n
			}));
			var n, s = a("./node_modules/react/index.js"),
				o = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				r = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				c = a("./src/reddit/components/EmailCollection/Input/index.m.less"),
				d = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(n || (n = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: a,
					successMessage: s,
					validityState: c,
					...u
				} = e, p = c === n.Valid, h = c === n.Invalid;
				return o.a.createElement("div", {
					className: Object(i.a)(d.a.container, p && d.a.valid, h && d.a.invalid, t)
				}, o.a.createElement("input", m({}, u, {
					className: d.a.input
				})), p && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(l.a, null)), h && o.a.createElement("div", {
					className: d.a.icon
				}, o.a.createElement(r.a, null)), h && a && o.a.createElement("p", {
					className: d.a.error
				}, a), p && s && o.a.createElement("p", {
					className: d.a.success
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
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				i = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				r = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/actions/emailCollection/index.ts"),
				d = a("./src/reddit/actions/emailVerificationTooltip.ts"),
				m = a("./src/reddit/actions/modal.ts"),
				u = a("./src/higherOrderComponents/asModal/index.tsx"),
				p = a("./src/reddit/actions/users.ts"),
				h = a("./src/reddit/components/EmailCollection/Envelope/index.tsx"),
				b = a("./src/reddit/components/EmailCollection/Input/index.tsx"),
				E = a("./src/reddit/components/TrackingHelper/index.tsx"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				_ = a("./src/reddit/helpers/trackers/emailCollection.ts"),
				v = a("./src/reddit/selectors/user.ts"),
				x = a("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				y = a("./src/reddit/components/Settings/accountModals.m.less"),
				k = a.n(y);
			const w = "popup",
				C = {
					newEmail: "",
					newEmailError: null,
					newEmailState: null,
					password: "",
					passwordError: null,
					passwordState: null
				},
				N = Object(l.c)({
					changeEmailError: v.e,
					currentEmail: v.o
				}),
				S = Object(i.b)(N, e => ({
					changeEmail: t => e(Object(p.t)(t))
				}));
			class O extends o.a.Component {
				constructor() {
					super(...arguments), this.state = C, this.formIncomplete = () => !this.state.newEmail || !this.state.password, this.validateNewEmail = () => {
						const {
							currentEmail: e
						} = this.props, {
							newEmail: t
						} = this.state;
						return /^.+@.+\..+$/.test(t) ? e === t ? n.fbt._("You entered the current email address. Please enter a different one to proceed.", null, {
							hk: "hnMf2"
						}) : null : n.fbt._("Please enter a valid email", null, {
							hk: "4ri0Ng"
						})
					}, this.handleSubmit = () => {
						const e = this.validateNewEmail();
						this.setState({
							newEmailError: e,
							newEmailState: e ? b.a.Invalid : b.a.Valid
						}), e || this.props.changeEmail(this.state)
					}, this.onCloseModal = () => {
						this.props.shouldSendEvents && this.props.sendEvent(Object(_.e)(w)), this.props.onClose(), this.setState(C)
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
					this.props.shouldSendEvents && this.props.sendEvent(Object(_.f)(w))
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
						newEmailState: s,
						password: i,
						passwordError: l,
						passwordState: c
					} = this.state;
					return o.a.createElement(x.a, {
						className: Object(r.a)({
							[k.a["m-responsive"]]: e
						}),
						icon: o.a.createElement(h.a, null),
						description: this.props.description,
						onClose: this.onCloseModal,
						title: this.props.title
					}, o.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, o.a.createElement(b.b, {
						className: k.a.input,
						errorMessage: l || void 0,
						onBlur: this.onPasswordFieldBlur,
						onChange: this.updatePasswordField,
						placeholder: n.fbt._("Current password", null, {
							hk: "4iWZrJ"
						}),
						type: "password",
						validityState: c || void 0,
						value: i
					}), o.a.createElement(b.b, {
						className: k.a.input,
						errorMessage: a || void 0,
						onBlur: this.onNewEmailFieldBlur,
						onChange: this.updateNewEmailField,
						placeholder: n.fbt._("New email", null, {
							hk: "3zuSxp"
						}),
						value: t,
						validityState: s || void 0
					}), o.a.createElement("div", {
						className: k.a.buttonWrapper
					}, o.a.createElement(f.a, {
						disabled: this.formIncomplete(),
						type: "submit"
					}, n.fbt._("Save email", null, {
						hk: "13j1zl"
					})))))
				}
			}
			var M = Object(u.a)(S(Object(E.c)(O))),
				F = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				j = a("./src/reddit/components/EmailCollection/Success/index.m.less"),
				B = a.n(j);
			var P = e => o.a.createElement("div", {
					className: Object(r.a)(B.a.container, e.className)
				}, o.a.createElement(F.a, {
					className: B.a.icon
				})),
				A = a("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				D = a.n(A);
			var I = Object(u.a)(e => o.a.createElement(x.a, {
					className: Object(r.a)({
						[k.a["m-responsive"]]: e.isResponsive
					}),
					description: o.a.createElement(o.a.Fragment, null, n.fbt._("Reddit sent a confirmation email to:", null, {
						hk: "3IsFLZ"
					}), " ", o.a.createElement("strong", {
						className: D.a.strongTextFont
					}, e.email), o.a.createElement("br", null), n.fbt._("Click the verify link in the email to secure your Reddit account.", null, {
						hk: "jJSSU"
					})),
					descriptionClassName: k.a.description,
					icon: o.a.createElement(P, null),
					onClose: e.onConfirm,
					title: n.fbt._("Check your email", null, {
						hk: "1aob6x"
					})
				}, o.a.createElement("div", {
					className: k.a.buttonWrapper
				}, o.a.createElement(f.l, {
					onClick: e.onConfirm
				}, n.fbt._("Got it", null, {
					hk: "2LxUeS"
				}))))),
				T = a("./src/reddit/components/Settings/modalIds.ts"),
				R = a("./src/lib/colors/constants.ts"),
				L = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = a("./src/reddit/actions/preferences.ts"),
				J = a("./src/reddit/controls/Checkbox/index.tsx"),
				W = a("./src/reddit/controls/InternalLink/index.tsx"),
				U = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Q = a("./src/reddit/selectors/meta.ts"),
				Y = a("./src/reddit/components/Settings/DeactivateModal.tsx"),
				V = a("./src/reddit/components/Settings/VerifyEmailModal.m.less"),
				q = a.n(V);
			const X = Object(l.c)({
					emailDigests: v.n,
					isEmailPermissionRequired: Q.e
				}),
				z = Object(i.b)(X, e => ({
					resendEmail: () => e(Object(p.v)()),
					toggleEmailDigests: t => e(Object(H.J)({
						emailDigests: t
					}))
				}));
			class K extends o.a.Component {
				constructor() {
					super(...arguments), this.trackEmailSettingsLinkClick = () => {
						this.props.sendEvent(_.d)
					}, this.toggleEmailDigests = () => {
						this.props.toggleEmailDigests(!this.props.emailDigests), this.props.sendEvent(Object(_.b)(!this.props.emailDigests))
					}
				}
				render() {
					const {
						emailDigests: e,
						isEmailPermissionRequired: t,
						isResponsive: a,
						onConfirm: s,
						resendEmail: i
					} = this.props, l = !!e;
					return o.a.createElement(x.a, {
						className: Object(r.a)(q.a.container, {
							[k.a["m-responsive"]]: a
						}),
						description: o.a.createElement(o.a.Fragment, null, n.fbt._("Please check your email. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
							hk: "1taLkO"
						}), !t && o.a.createElement("span", {
							className: q.a.reviewSettings
						}, ` ${n.fbt._("You can also",null,{hk:"14h75w"})} `, o.a.createElement(W.default, {
							className: q.a.settingsLink,
							onMouseDown: this.trackEmailSettingsLinkClick,
							to: "/settings"
						}, n.fbt._("review your email settings", null, {
							hk: "3eTpv8"
						})), ` ${n.fbt._("to control what type of email you receive.",null,{hk:"bg4j6"})}`)),
						descriptionClassName: q.a.description,
						icon: o.a.createElement(P, null),
						onClose: s,
						title: n.fbt._("Verification email sent", null, {
							hk: "3rXaUZ"
						})
					}, t && o.a.createElement(Y.a, {
						className: q.a.checkboxWrapper
					}, o.a.createElement(J.a, {
						className: Object(r.a)(q.a.checkbox, !l && q.a.unchecked),
						checkBoxStyle: {
							backgroundColor: R.e,
							borderRadius: "50%",
							fill: Object(U.a)(this.props).active,
							visibility: l ? "visible" : "hidden"
						},
						isCheckboxSelected: l,
						toggleCheckbox: this.toggleEmailDigests
					}), o.a.createElement("label", {
						className: q.a.checkboxLabel,
						onClick: this.toggleEmailDigests
					}, n.fbt._("You agree that Reddit can send you emails to help notify you of the best content and responses to you posts. Unsubscribe anytime!", null, {
						hk: "2OiNgc"
					}))), o.a.createElement("div", {
						className: k.a.buttonWrapper
					}, o.a.createElement(f.o, {
						onClick: i
					}, n.fbt._("Resend email", null, {
						hk: "bbN8b"
					})), o.a.createElement(f.l, {
						className: k.a.primaryBtn,
						onClick: s
					}, n.fbt._("Done", null, {
						hk: "3gzOx4"
					}))))
				}
			}
			var Z = Object(u.a)(z(Object(E.c)(Object(L.a)(K)))),
				G = a("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = a("./src/reddit/helpers/trackers/emailVerification.ts"),
				ee = a("./src/reddit/selectors/activeModalId.ts"),
				te = a("./src/reddit/selectors/responsiveSettings.ts"),
				ae = a("./src/reddit/components/EmailVerificationModals/index.m.less"),
				ne = a.n(ae);
			const se = Object(l.c)({
					changeEmailModalOpen: Object(ee.b)(T.a),
					checkEmailModalOpen: Object(ee.b)(T.c),
					isEmailPermissionRequired: Q.e,
					isResponsiveSettingsEnabled: te.a,
					setEmailModalOpen: Object(ee.b)(T.h),
					verifyEmailModalOpen: Object(ee.b)(T.q)
				}),
				oe = Object(i.b)(se, (e, t) => {
					let {
						shouldOpenTooltip: a
					} = t;
					return {
						closeChangeEmailModal: () => {
							a && e(Object(d.b)()), e(Object(m.g)(T.a))
						},
						closeSetEmailModal: () => e(Object(c.b)()),
						closeVerifyEmailModal: () => e(Object(m.g)(T.q)),
						toggleCheckEmailModal: () => e(Object(m.i)(T.c))
					}
				}),
				ie = Object(G.v)(),
				le = e => {
					const t = n.fbt._("Adding a verified email will help you access your account if you forget your password.", null, {
						hk: "27gKHu"
					});
					return e ? [t, n.fbt._("You agree that Reddit can send you emails to help notify you of the best content and activity related to your account.", null, {
						hk: "3alhJb"
					})].join(" ") : t
				},
				re = () => n.fbt._("Update your email below. There will be a new verification email sent that you will need to use to verify this new email.", null, {
					hk: "2oXony"
				});
			t.default = ie(oe(Object(E.c)(e => {
				let {
					email: t,
					changeEmailModalOpen: a,
					checkEmailModalOpen: i,
					closeChangeEmailModal: l,
					closeSetEmailModal: c,
					closeVerifyEmailModal: d,
					isEmailPermissionRequired: m,
					isResponsiveSettingsEnabled: u,
					setEmailModalOpen: p,
					toggleCheckEmailModal: h,
					verifyEmailModalOpen: b,
					sendEvent: E
				} = e;
				const f = Object(r.a)({
						[ne.a["m-responsive"]]: u
					}),
					g = () => {
						l(), E(Object($.c)("popup"))
					};
				return o.a.createElement(s.Fragment, null, a && o.a.createElement(M, {
					description: re(),
					isResponsive: u,
					onClose: g,
					onOverlayClick: g,
					overlayClassName: f,
					title: n.fbt._("Update your email", null, {
						hk: "13zUWG"
					}),
					withOverlay: !0
				}), p && o.a.createElement(M, {
					description: le(m),
					isResponsive: u,
					onClose: c,
					overlayClassName: f,
					shouldSendEvents: !0,
					title: n.fbt._("Verify your account", null, {
						hk: "27ZUuQ"
					}),
					withOverlay: !0
				}), i && o.a.createElement(I, {
					email: t,
					isResponsive: u,
					onConfirm: h,
					onOverlayClick: h,
					overlayClassName: f,
					withOverlay: !0
				}), b && o.a.createElement(Z, {
					isResponsive: u,
					onConfirm: d,
					onOverlayClick: d,
					overlayClassName: f,
					withOverlay: !0
				}))
			})))
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
				Deactivate: "etxcMtHSsMVcZTjNPWp5n",
				deactivate: "etxcMtHSsMVcZTjNPWp5n",
				UL: "HulKM8oqJogE46P-pLJi7",
				ul: "HulKM8oqJogE46P-pLJi7"
			}
		},
		"./src/reddit/components/Settings/DeactivateModal.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return C
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				o = a.n(s),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/controls/Button/index.tsx"),
				r = a("./src/reddit/controls/Checkbox/index.tsx"),
				c = a("./src/reddit/components/Settings/shared/FatInput.tsx"),
				d = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = a("./src/reddit/components/Settings/DeactivateModal.m.less"),
				u = a.n(m),
				p = a("./src/lib/lessComponent.tsx");
			const h = p.a.div("Container", u.a),
				b = p.a.h2("HeaderText", u.a),
				E = p.a.button("Close", u.a),
				f = p.a.wrapped(l.f, "PrimaryButton", u.a),
				g = p.a.wrapped(l.o, "SecondaryButton", u.a),
				_ = p.a.div("ButtonWrapper", u.a),
				v = p.a.textarea("TextArea", u.a),
				x = p.a.h3("SectionLabel", u.a),
				y = p.a.p("H", u.a),
				k = p.a.p("P", u.a),
				w = p.a.wrapped(c.a, "Input", u.a),
				C = p.a.div("CheckBoxWrapper", u.a),
				N = p.a.ul("UL", u.a),
				S = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				O = {
					ios: () => n.fbt._("Apple Appstore", null, {
						hk: "1WaFta"
					}),
					android: () => n.fbt._("Google Play", null, {
						hk: "2VUF8k"
					}),
					stripe: () => n.fbt._("Stripe", null, {
						hk: "gEPf2"
					}),
					paypal: () => n.fbt._("Paypal", null, {
						hk: "1IWNjx"
					})
				};
			class M extends o.a.Component {
				constructor(e) {
					super(e), this.showConfirm = () => {
						const e = this.state;
						e.password && e.username && e.checkbox && this.setState({
							showConfirm: !0
						})
					}, this.handleSubmit = () => {
						const {
							showConfirm: e,
							...t
						} = this.state;
						this.props.onClick(t), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props,
							{
								deactivateToDeleteEnabled: t
							} = e;
						return o.a.createElement(d.l, null, o.a.createElement(y, null, t ? n.fbt._("We're sorry to see you go", null, {
							hk: "HoAne"
						}) : n.fbt._("Sorry to see you go!", null, {
							hk: "4qYT1i"
						})), t && o.a.createElement(k, null, n.fbt._("Once you delete your account, your profile and username are permanently removed from Reddit and your posts, comments, and messages are disassociated (not deleted) from your account unless you delete them beforehand.", null, {
							hk: "2LY7QA"
						}), " ", o.a.createElement("a", {
							href: "https://www.reddithelp.com/hc/en-us/articles/360043047932-If-I-deactivate-my-account-what-happens-to-my-username-posts-and-comments-"
						}, n.fbt._("Learn more", null, {
							hk: "NU1Yi"
						}))), o.a.createElement(N, null, !t && o.a.createElement(o.a.Fragment, null, o.a.createElement("li", null, n.fbt._("If you are having a problem on Reddit, please consider contacting us about it before deactivating your account.", null, {
							hk: "49AqfO"
						})), o.a.createElement("li", null, n.fbt._("Deactivating your account will not delete the content of posts and comments you've made on Reddit. To do so please delete them individually.", null, {
							hk: "4riIPw"
						}))), e.user && e.user.isGold && e.user.hasGoldSubscription && o.a.createElement("li", null, n.fbt._("Just in case you didn't cancel your Premium subscription, here are all the links:", null, {
							hk: "poO6C"
						}), Object.keys(S).map((e, t) => o.a.createElement("span", {
							key: e
						}, !!t && ", ", o.a.createElement("a", {
							href: S[e],
							target: "_blank",
							rel: "noopener noreferrer"
						}, O[e] && O[e]()))))), o.a.createElement(x, null, t ? n.fbt._("HELP IMPROVE REDDIT (OPTIONAL)", null, {
							hk: "3X1MwJ"
						}) : n.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), o.a.createElement(v, {
							placeholder: t ? n.fbt._("Let us know why you're leaving", null, {
								hk: "2UtCO8"
							}) : n.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), o.a.createElement(x, null, t ? n.fbt._("VERIFY YOUR IDENTITY", null, {
							hk: "26JcoS"
						}) : n.fbt._("account credentials for security purposes", null, {
							hk: "2YiOpO"
						})), o.a.createElement(w, {
							value: this.state.username,
							onChange: this.updateField("username"),
							label: n.fbt._("username", null, {
								hk: "2f1L4u"
							})
						}), o.a.createElement(w, {
							value: this.state.password,
							onChange: this.updateField("password"),
							label: n.fbt._("password", null, {
								hk: "23UmWl"
							}),
							type: "password"
						}), o.a.createElement(C, null, o.a.createElement(r.a, {
							className: u.a.Deactivate,
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), o.a.createElement("label", null, t ? n.fbt._("I understand that deleted accounts aren't recoverable", null, {
							hk: "lJQkY"
						}) : n.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), o.a.createElement(_, null, o.a.createElement(g, {
							onClick: e.exit
						}, n.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), o.a.createElement(f, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, t ? n.fbt._("Delete", null, {
							hk: "1RP02W"
						}) : n.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = e => {
						let {
							platform: t,
							isMobile: a
						} = e;
						return n.fbt._("{text with URL}", [n.fbt._param("text with URL", a ? o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", o.a.createElement("a", {
							href: S[t],
							target: "_blank",
							rel: "noopener noreferrer"
						}, " ", O[t] && O[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : o.a.createElement(o.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", o.a.createElement("a", {
							href: S[t],
							target: "_blank",
							rel: "noopener noreferrer"
						}, " ", O[t] && O[t]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
							hk: "1lLr9b"
						})
					}, this.renderPremiumNotification = () => o.a.createElement(d.l, null, o.a.createElement(y, null, n.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), o.a.createElement(k, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
						platform: "android",
						isMobile: !0
					}), this.props.user && this.props.user.hasIosSubscription && this.renderPremiumNotificationMessage({
						platform: "ios",
						isMobile: !0
					}), this.props.user && this.props.user.hasPaypalSubscription && this.renderPremiumNotificationMessage({
						platform: "paypal",
						isMobile: !1
					}), this.props.user && this.props.user.hasStripeSubscription && this.renderPremiumNotificationMessage({
						platform: "stripe",
						isMobile: !1
					})), o.a.createElement(_, null, o.a.createElement(f, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, n.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => {
						const {
							deactivateToDeleteEnabled: e
						} = this.props;
						return o.a.createElement(d.l, null, o.a.createElement(y, null, e ? n.fbt._("Be absolutely sure before deleting your account", null, {
							hk: "4uex5u"
						}) : n.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
							hk: "1RBb2C"
						})), e && o.a.createElement(k, null, n.fbt._("Deleting your account removes it from Reddit and our administrators won’t be able to bring it back for you.", null, {
							hk: "4sgkKP"
						})), o.a.createElement(_, null, o.a.createElement(g, {
							onClick: () => this.setState({
								showConfirm: !1
							})
						}, e ? n.fbt._("Cancel", null, {
							hk: "2pV96S"
						}) : n.fbt._("Back", null, {
							hk: "1P3x9"
						})), o.a.createElement(f, {
							onClick: this.handleSubmit
						}, e ? n.fbt._("Delete", null, {
							hk: "1RP02W"
						}) : n.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.state = {
						password: "",
						username: "",
						checkbox: !1,
						feedback: "",
						showConfirm: !1,
						showPremiumNotification: !!e.user && e.user.isGold && e.user.hasGoldSubscription
					}
				}
				render() {
					const e = this.props,
						{
							deactivateToDeleteEnabled: t
						} = e;
					return o.a.createElement(h, null, o.a.createElement(E, {
						onClick: e.exit
					}, o.a.createElement(d.b, null)), o.a.createElement(d.i, null, o.a.createElement(b, null, t ? n.fbt._("Delete account", null, {
						hk: "4hj0Zt"
					}) : n.fbt._("Feed settings", null, {
						hk: "4morrt"
					}))), this.state.showPremiumNotification ? this.renderPremiumNotification() : this.state.showConfirm ? this.renderConfirm() : this.renderMain())
				}
			}
			t.b = Object(i.a)(M)
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Close/index.tsx"),
				l = a("./src/reddit/components/Settings/ModalContainer/index.m.less"),
				r = a.n(l);
			t.a = e => {
				const {
					bodyClassName: t,
					children: a,
					className: n,
					description: l,
					descriptionClassName: c,
					headerClassName: d,
					icon: m,
					iconClassName: u,
					onClose: p,
					title: h,
					titleClassName: b
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(r.a.container, n)
				}, p && s.a.createElement("button", {
					className: r.a.closeButton,
					onClick: p
				}, s.a.createElement(i.a, {
					className: r.a.closeIcon
				})), s.a.createElement("div", {
					className: Object(o.a)(r.a.header, d)
				}, m && s.a.createElement("div", {
					className: Object(o.a)(r.a.icon, u)
				}, m), s.a.createElement("h2", {
					className: Object(o.a)(r.a.title, b)
				}, h)), l && s.a.createElement("p", {
					className: Object(o.a)(r.a.description, c)
				}, l), s.a.createElement("div", {
					className: Object(o.a)(r.a.body, t)
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
				oneTapSessionBtn: "_1QLPcfcbQzhg3-aBUAj_8y",
				input: "RrqK6usE8PEMhLL7FD-iE",
				checkboxLabel: "OBgeR3lNas33iO_RB1buN",
				primaryBtn: "_1ZuJ4cYdwXBjhOxsWSpt_J",
				toggle: "brX0v5qpkg7KN-bOajuQ7",
				description: "hfVDp17HN3YB0M-CBz_f7",
				"m-responsive": "_1RdzLLJTzHMuKTT451B8mz",
				mResponsive: "_1RdzLLJTzHMuKTT451B8mz",
				changeUsernameModalContainer: "_9hmSLlBvZA-2tPAVajB6F",
				confirmModalContainer: "ZdQ8dYkTCSltA50W7-IE3",
				"m-onetap": "_3wFXdZQtKsn7b-AVzJAEnm",
				mOnetap: "_3wFXdZQtKsn7b-AVzJAEnm",
				changeUsernameModalBody: "_1Yly3HtP1iwII2uUEMTTKL",
				confirmModalBody: "_1yaWiT2tGW8c-WyQ2DxiNY",
				confirmModalHeader: "_19OEdjo2DQZ1GMEXsY7vZ3",
				confirmModalDescription: "JB3thd-iYucgTQHskJ_6g",
				oneTapSessionModalDesc: "_22IqvkHuX5GDYijASUVvJo",
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
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/Settings/shared/FatInput.m.less"),
				l = a.n(i),
				r = a("./src/lib/lessComponent.tsx");
			const c = r.a.input("Input", l.a),
				d = r.a.label("Label", l.a),
				m = r.a.button("Button", l.a),
				u = r.a.div("Wrapper", l.a);
			class p extends s.a.Component {
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
						label: n,
						onClick: i,
						onChange: r,
						type: p = "text",
						value: h
					} = this.props;
					return s.a.createElement(u, {
						className: Object(o.a)(t, {
							[l.a.mFocused]: this.state.focused
						})
					}, s.a.createElement(c, {
						value: h,
						type: p,
						onChange: e => r(e.currentTarget.value),
						onFocus: e => this.setState({
							focused: !0
						}),
						onBlur: e => this.setState({
							focused: !1
						}),
						required: !0
					}), s.a.createElement(d, null, n), i && s.a.createElement(m, {
						disabled: !!a,
						onClick: i
					}, e))
				}
			}
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, a) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/fonts/index.tsx"),
				l = a("./src/reddit/controls/Checkbox/index.m.less"),
				r = a.n(l);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[r.a.redditStyle]: e.redditStyle,
					[r.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				strongTextFont: "_2oA70eNUJxOQ-eRN8TPT9s",
				tabFont: "_1leSu44tZ3i4KBsjGW_F9c",
				buttonFontXS: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontXs: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontS: "_87bVuwY1B7OXO-iDEwMpj",
				buttonFontM: "Cgr8csu8rgZnaC3z01hBx",
				buttonFontL: "_2pRU1zvDiQbrvBARchkUCF",
				buttonFontXL: "_3J7-ymNaQyuo5TRybj5q_h",
				buttonFontXl: "_3J7-ymNaQyuo5TRybj5q_h",
				bodyFontH1: "_2CvYC5Dor5C7bRy9T_5TQX",
				bodyFontH2: "_6n_lhbrgbPv9CUoOwND7J",
				bodyFontH3: "l6V3xHeCqsPn028sXl7VN",
				bodyFontH4: "_1XCZr-qft4wCNMbV9Ss_Ou",
				bodyFontH5: "_1d5gYDAvszTFAiNg31iR56",
				bodyFontH6: "_2aeJbvpJvTsRzIwwJHzssX",
				bodyFontH6Small: "_4oYGhpkb08j0kg-V_ZOR4",
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR",
				landingPageTitleFontH1: "_2-4JQtks9XipKrsm1HMWyQ",
				landingPageTitleFontH2: "_2R5R6mT0qeaWhYltumJ9E-",
				landingPageTitleFontH3: "_3SeaS6fMoL_cAKWPlYlH_t"
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Envelope/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z"
			}), s.a.createElement("path", {
				d: "M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z"
			}))
		},
		"./src/reddit/icons/svgs/Warning/index.m.less": function(e, t, a) {
			e.exports = {
				warning: "_3ppQRTaxPs0X9rsFYHfSdf"
			}
		},
		"./src/reddit/icons/svgs/Warning/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Warning/index.m.less"),
				l = a.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(l.a.warning, e.className),
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("circle", {
				r: "9",
				cx: "9",
				cy: "9"
			}), s.a.createElement("path", {
				d: "m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",
				fill: "inherit",
				fillRule: "evenodd",
				transform: "translate(-1 -1)"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailVerificationModals.bff2945b4f039f218c19.js.map