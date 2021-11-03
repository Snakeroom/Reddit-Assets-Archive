// https://www.redditstatic.com/desktop2x/EmailVerificationModals.0200deb6f5ad354f2a9d.js
// Retrieved at 11/3/2021, 4:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailVerificationModals"], {
		"./src/lib/colors/constants.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "f", (function() {
				return n
			})), a.d(t, "c", (function() {
				return i
			})), a.d(t, "a", (function() {
				return o
			})), a.d(t, "e", (function() {
				return r
			})), a.d(t, "d", (function() {
				return l
			})), a.d(t, "g", (function() {
				return c
			})), a.d(t, "h", (function() {
				return d
			}));
			const s = "#000",
				n = "#FFF",
				i = "#FF4500",
				o = "#0079D3",
				r = "#24A0ED",
				l = "#46D160",
				c = {
					black: s,
					white: n,
					orangered: i,
					alienblue: o,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: r,
					secondary: "#006CBF",
					upvote: i,
					downvote: "#7193FF",
					positive: l,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: i,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: i,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...c,
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
				return s
			}));
			var s, n = a("./node_modules/react/index.js"),
				i = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				l = a("./src/reddit/icons/svgs/Warning/index.tsx"),
				c = a("./src/reddit/components/EmailCollection/Input/index.m.less"),
				d = a.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(s || (s = {}));
			t.b = e => {
				const {
					className: t,
					errorMessage: a,
					successMessage: n,
					validityState: c,
					...u
				} = e, p = c === s.Valid, h = c === s.Invalid;
				return i.a.createElement("div", {
					className: Object(o.a)(d.a.container, p && d.a.valid, h && d.a.invalid, t)
				}, i.a.createElement("input", m({}, u, {
					className: d.a.input
				})), p && i.a.createElement("div", {
					className: d.a.icon
				}, i.a.createElement(r.a, null)), h && i.a.createElement("div", {
					className: d.a.icon
				}, i.a.createElement(l.a, null)), h && a && i.a.createElement("p", {
					className: d.a.error
				}, a), p && n && i.a.createElement("p", {
					className: d.a.success
				}, n))
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
				E = a("./src/reddit/components/TrackingHelper/index.tsx"),
				f = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/helpers/getErrorMsgFromR2JQueryResponse.ts"),
				_ = a("./src/reddit/helpers/trackers/emailCollection.ts"),
				g = a("./src/reddit/selectors/user.ts"),
				v = a("./src/reddit/components/Settings/ModalContainer/index.tsx"),
				y = a("./src/reddit/components/Settings/accountModals.m.less"),
				k = a.n(y);
			const C = "popup",
				w = {
					newEmail: "",
					newEmailError: null,
					newEmailState: null,
					password: "",
					passwordError: null,
					passwordState: null
				},
				S = Object(r.c)({
					changeEmailError: g.d,
					currentEmail: g.n
				}),
				N = Object(o.b)(S, e => ({
					changeEmail: t => e(Object(p.v)(t))
				}));
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.state = w, this.formIncomplete = () => !this.state.newEmail || !this.state.password, this.validateNewEmail = () => {
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
						this.props.shouldSendEvents && this.props.sendEvent(Object(_.e)(C)), this.props.onClose(), this.setState(w)
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
					this.props.shouldSendEvents && this.props.sendEvent(Object(_.f)(C))
				}
				componentDidUpdate(e) {
					const {
						changeEmailError: t
					} = this.props;
					t && t !== e.changeEmailError && (t === x.a.WRONG_PASSWORD ? this.setState({
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
					return i.a.createElement(v.a, {
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
					}, i.a.createElement(f.k, {
						className: Object(l.a)(k.a.commonBtn, k.a.primaryBtn),
						redditStyle: !0,
						disabled: this.formIncomplete(),
						onClick: this.handleSubmit
					}, s.fbt._("Save email", null, {
						hk: "13j1zl"
					}))))
				}
			}
			var M = Object(u.a)(N(Object(E.c)(O))),
				F = a("./src/reddit/icons/svgs/Approve/index.tsx"),
				B = a("./src/reddit/components/EmailCollection/Success/index.m.less"),
				j = a.n(B);
			var P = e => i.a.createElement("div", {
					className: Object(l.a)(j.a.container, e.className)
				}, i.a.createElement(F.a, {
					className: j.a.icon
				})),
				A = a("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				D = a.n(A);
			var I = Object(u.a)(e => i.a.createElement(v.a, {
					className: Object(l.a)({
						[k.a["m-responsive"]]: e.isResponsive
					}),
					description: i.a.createElement(i.a.Fragment, null, s.fbt._("Reddit sent a confirmation email to:", null, {
						hk: "3IsFLZ"
					}), " ", i.a.createElement("strong", {
						className: D.a.strongTextFont
					}, e.email), i.a.createElement("br", null), s.fbt._("Click the verify link in the email to secure your Reddit account.", null, {
						hk: "jJSSU"
					})),
					descriptionClassName: k.a.description,
					icon: i.a.createElement(P, null),
					onClose: e.onConfirm,
					title: s.fbt._("Check your email", null, {
						hk: "1aob6x"
					})
				}, i.a.createElement("div", {
					className: k.a.buttonWrapper
				}, i.a.createElement(f.k, {
					onClick: e.onConfirm
				}, s.fbt._("Got it", null, {
					hk: "2LxUeS"
				}))))),
				T = a("./src/reddit/components/Settings/modalIds.ts"),
				R = a("./src/lib/colors/constants.ts"),
				L = a("./src/lib/CSSVariableProvider/withTheme.tsx"),
				J = a("./src/reddit/actions/preferences.ts"),
				H = a("./src/reddit/controls/Checkbox/index.tsx"),
				U = a("./src/reddit/controls/InternalLink/index.tsx"),
				W = a("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				q = a("./src/reddit/selectors/meta.ts"),
				Q = a("./src/reddit/components/Settings/DeactivateModal.tsx"),
				X = a("./src/reddit/components/Settings/VerifyEmailModal.m.less"),
				Y = a.n(X);
			const z = Object(r.c)({
					emailDigests: g.m,
					isEmailPermissionRequired: q.e
				}),
				V = Object(o.b)(z, e => ({
					resendEmail: () => e(Object(p.x)()),
					toggleEmailDigests: t => e(Object(J.H)({
						emailDigests: t
					}))
				}));
			class K extends i.a.Component {
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
						onConfirm: n,
						resendEmail: o
					} = this.props, r = !!e;
					return i.a.createElement(v.a, {
						className: Object(l.a)(Y.a.container, {
							[k.a["m-responsive"]]: a
						}),
						description: i.a.createElement(i.a.Fragment, null, s.fbt._("Please check your email. If you do not receive it, please check it was not flagged as spam or try resending the email below.", null, {
							hk: "1taLkO"
						}), !t && i.a.createElement("span", {
							className: Y.a.reviewSettings
						}, ` ${s.fbt._("You can also",null,{hk:"14h75w"})} `, i.a.createElement(U.a, {
							className: Y.a.settingsLink,
							onMouseDown: this.trackEmailSettingsLinkClick,
							to: "/settings"
						}, s.fbt._("review your email settings", null, {
							hk: "3eTpv8"
						})), ` ${s.fbt._("to control what type of email you receive.",null,{hk:"bg4j6"})}`)),
						descriptionClassName: Y.a.description,
						icon: i.a.createElement(P, null),
						onClose: n,
						title: s.fbt._("Verification email sent", null, {
							hk: "3rXaUZ"
						})
					}, t && i.a.createElement(Q.a, {
						className: Y.a.checkboxWrapper
					}, i.a.createElement(H.a, {
						className: Object(l.a)(Y.a.checkbox, !r && Y.a.unchecked),
						checkBoxStyle: {
							backgroundColor: R.f,
							borderRadius: "50%",
							fill: Object(W.a)(this.props).active,
							visibility: r ? "visible" : "hidden"
						},
						isCheckboxSelected: r,
						toggleCheckbox: this.toggleEmailDigests
					}), i.a.createElement("label", {
						className: Y.a.checkboxLabel,
						onClick: this.toggleEmailDigests
					}, s.fbt._("You agree that Reddit can send you emails to help notify you of the best content and responses to you posts. Unsubscribe anytime!", null, {
						hk: "2OiNgc"
					}))), i.a.createElement("div", {
						className: k.a.buttonWrapper
					}, i.a.createElement(f.n, {
						onClick: o
					}, s.fbt._("Resend email", null, {
						hk: "bbN8b"
					})), i.a.createElement(f.k, {
						className: k.a.primaryBtn,
						onClick: n
					}, s.fbt._("Done", null, {
						hk: "3gzOx4"
					}))))
				}
			}
			var G = Object(u.a)(V(Object(E.c)(Object(L.a)(K)))),
				Z = a("./src/reddit/contexts/PageLayer/index.tsx"),
				$ = a("./src/reddit/selectors/activeModalId.ts"),
				ee = a("./src/reddit/selectors/responsiveSettings.ts"),
				te = a("./src/reddit/components/EmailVerificationModals/index.m.less"),
				ae = a.n(te);
			const se = Object(r.c)({
					changeEmailModalOpen: Object($.b)(T.a),
					checkEmailModalOpen: Object($.b)(T.c),
					isEmailPermissionRequired: q.e,
					isResponsiveSettingsEnabled: ee.a,
					setEmailModalOpen: Object($.b)(T.g),
					verifyEmailModalOpen: Object($.b)(T.o)
				}),
				ne = Object(o.b)(se, (e, {
					shouldOpenTooltip: t
				}) => ({
					closeChangeEmailModal: () => {
						t && e(Object(d.b)()), e(Object(m.g)(T.a))
					},
					closeSetEmailModal: () => e(Object(c.b)()),
					closeVerifyEmailModal: () => e(Object(m.g)(T.o)),
					toggleCheckEmailModal: () => e(Object(m.i)(T.c))
				})),
				ie = Object(Z.u)(),
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
			t.default = ie(ne(({
				email: e,
				changeEmailModalOpen: t,
				checkEmailModalOpen: a,
				closeChangeEmailModal: o,
				closeSetEmailModal: r,
				closeVerifyEmailModal: c,
				isEmailPermissionRequired: d,
				isResponsiveSettingsEnabled: m,
				setEmailModalOpen: u,
				toggleCheckEmailModal: p,
				verifyEmailModalOpen: h
			}) => {
				const b = Object(l.a)({
					[ae.a["m-responsive"]]: m
				});
				return i.a.createElement(n.Fragment, null, t && i.a.createElement(M, {
					description: re(),
					isResponsive: m,
					onClose: o,
					onOverlayClick: o,
					overlayClassName: b,
					title: s.fbt._("Update your email", null, {
						hk: "13zUWG"
					}),
					withOverlay: !0
				}), u && i.a.createElement(M, {
					description: oe(d),
					isResponsive: m,
					onClose: r,
					overlayClassName: b,
					shouldSendEvents: !0,
					title: s.fbt._("Verify your account", null, {
						hk: "27ZUuQ"
					}),
					withOverlay: !0
				}), a && i.a.createElement(I, {
					email: e,
					isResponsive: m,
					onConfirm: p,
					onOverlayClick: p,
					overlayClassName: b,
					withOverlay: !0
				}), h && i.a.createElement(G, {
					isResponsive: m,
					onConfirm: c,
					onOverlayClick: c,
					overlayClassName: b,
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
				return w
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
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
				p = a("./src/lib/lessComponent.tsx");
			const h = p.a.div("Container", u.a),
				b = p.a.h2("HeaderText", u.a),
				E = p.a.button("Close", u.a),
				f = p.a.wrapped(r.e, "PrimaryButton", u.a),
				x = p.a.wrapped(r.n, "SecondaryButton", u.a),
				_ = p.a.div("ButtonWrapper", u.a),
				g = p.a.textarea("TextArea", u.a),
				v = p.a.h3("SectionLabel", u.a),
				y = p.a.p("H", u.a),
				k = p.a.p("P", u.a),
				C = p.a.wrapped(c.a, "Input", u.a),
				w = p.a.div("CheckBoxWrapper", u.a),
				S = p.a.ul("UL", u.a),
				N = {
					paypal: "/settings/premium",
					stripe: "/settings/premium",
					ios: "https://finance-app.itunes.apple.com/account/subscriptions",
					android: "https://play.google.com/store/account/subscriptions"
				},
				O = {
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
						const {
							showConfirm: e,
							...t
						} = this.state;
						this.props.onClick(t), this.props.exit()
					}, this.updateField = e => t => this.setState({
						[e]: t
					}), this.formIncomplete = () => !this.state.username || !this.state.password || !this.state.checkbox, this.renderMain = () => {
						const e = this.props;
						return i.a.createElement(d.l, null, i.a.createElement(y, null, s.fbt._("Sorry to see you go!", null, {
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
						}, O[e] && O[e]()))))), i.a.createElement(v, null, s.fbt._("why are you deactivating this account? (OPTIONAL)", null, {
							hk: "2JWxx5"
						})), i.a.createElement(g, {
							placeholder: s.fbt._("(OPTIONAL) FEEDBACK", null, {
								hk: "3pakN2"
							}),
							onChange: this.updateField("feedback")
						}), i.a.createElement(v, null, s.fbt._("account credentials for security purposes", null, {
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
						}), i.a.createElement(w, null, i.a.createElement(l.a, {
							isCheckboxSelected: this.state.checkbox,
							toggleCheckbox: () => this.updateField("checkbox")(!this.state.checkbox)
						}), i.a.createElement("label", null, s.fbt._("I understand that deactivated accounts are not recoverable", null, {
							hk: "1qMwOQ"
						}))), i.a.createElement(_, null, i.a.createElement(x, {
							onClick: e.exit
						}, s.fbt._("Cancel", null, {
							hk: "2TSLl5"
						})), i.a.createElement(f, {
							onClick: this.showConfirm,
							disabled: this.formIncomplete()
						}, s.fbt._("Deactivate", null, {
							hk: "3B1BI6"
						}))))
					}, this.renderPremiumNotificationMessage = ({
						platform: e,
						isMobile: t
					}) => s.fbt._("{text with URL}", [s.fbt._param("text with URL", t ? i.a.createElement(i.a.Fragment, null, "You still have an active Reddit Premium subscription. Since we use a third party payment processor, you will need to go directly to them to cancel your subscription. Here is the link for", i.a.createElement("a", {
						href: N[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account.") : i.a.createElement(i.a.Fragment, null, "You still have an active Reddit Premium subscription. You will need to cancel your subscription for", i.a.createElement("a", {
						href: N[e],
						target: "_blank"
					}, " ", O[e] && O[e]()), ". When you are finished cancelling your premium subscription, return here to fully deactivate your account."))], {
						hk: "1lLr9b"
					}), this.renderPremiumNotification = () => i.a.createElement(d.l, null, i.a.createElement(y, null, s.fbt._("Please cancel your Premium subscription before deleting your account.", null, {
						hk: "1JNWd5"
					})), i.a.createElement(k, null, this.props.user && this.props.user.hasAndroidSubscription && this.renderPremiumNotificationMessage({
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
					})), i.a.createElement(_, null, i.a.createElement(f, {
						onClick: () => this.setState({
							showPremiumNotification: !1
						})
					}, s.fbt._("Deactivate", null, {
						hk: "kss7"
					})))), this.renderConfirm = () => i.a.createElement(d.l, null, i.a.createElement(y, null, s.fbt._("This action can not be undone. Are you sure you want to deactivate?", null, {
						hk: "1RBb2C"
					})), i.a.createElement(_, null, i.a.createElement(x, {
						onClick: () => this.setState({
							showConfirm: !1
						})
					}, s.fbt._("Back", null, {
						hk: "1P3x9"
					})), i.a.createElement(f, {
						onClick: this.handleSubmit
					}, s.fbt._("Deactivate", null, {
						hk: "3B1BI6"
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
					return i.a.createElement(h, null, i.a.createElement(E, {
						onClick: e.exit
					}, i.a.createElement(d.b, null)), i.a.createElement(d.i, null, i.a.createElement(b, null, s.fbt._("Feed settings", null, {
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
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				i = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/fonts/index.tsx"),
				r = a("./src/reddit/controls/Checkbox/index.m.less"),
				l = a.n(r);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(i.a)({
					[l.a.redditStyle]: e.redditStyle,
					[l.a.disabled]: e.disabled
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
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR"
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailVerificationModals.0200deb6f5ad354f2a9d.js.map