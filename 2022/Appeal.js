// https://www.redditstatic.com/desktop2x/Appeal.9880acba92b96cbe8448.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Appeal"], {
		"./src/lib/validateEmail/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			const n = (e, a) => {
				if (!e && a) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, a, t) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "d", (function() {
				return b
			})), t.d(a, "a", (function() {
				return f
			})), t.d(a, "b", (function() {
				return g
			})), t.d(a, "c", (function() {
				return _
			}));
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				i = t("./src/lib/lessComponent.tsx"),
				s = t("./src/reddit/controls/Input/index.tsx"),
				o = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = t.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.div("icon", d.a),
				u = i.a.textarea("textarea", d.a),
				h = i.a.span("Invalid", d.a);
			var b, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const x = e => l.a.createElement("div", {
					className: Object(r.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === b.Valid,
							[d.a.mInvalid]: e.state === b.Invalid,
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, l.a.createElement("label", {
					className: Object(r.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && l.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && l.a.createElement(m, {
					className: Object(r.a)({
						[d.a.mValid]: e.state === b.Valid,
						[d.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && l.a.createElement(o.a, null), e.state === b.Invalid && l.a.createElement(h, null, "!")))),
				g = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: n,
						isRequired: i,
						label: o,
						onKeyDown: c,
						state: m,
						...u
					} = e;
					return l.a.createElement(x, {
						backgroundColorState: a,
						className: t,
						isRequired: i,
						label: o,
						state: m
					}, l.a.createElement(s.a, p({}, u, {
						className: Object(r.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: c
					})))
				},
				_ = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: n,
						isRequired: i,
						label: s,
						onKeyDown: o,
						state: c,
						...m
					} = e;
					return l.a.createElement(x, {
						backgroundColorState: a,
						className: t,
						isRequired: i,
						label: s,
						state: c,
						isTextarea: !0
					}, l.a.createElement(u, p({}, m, {
						className: Object(r.a)({
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			}));
			var n = t("./node_modules/react/index.js"),
				l = t.n(n);

			function r(e) {
				const {
					children: a,
					className: t,
					onSubmit: n
				} = e;
				return l.a.createElement("form", {
					className: t,
					onSubmit: i(n)
				}, a)
			}
			const i = e => a => {
					if (!e) return;
					a.preventDefault();
					const t = a.target,
						n = s(t);
					e(n)
				},
				s = e => e && "form" === e.nodeName.toLowerCase() ? Array.from(e.elements).reduce((e, a) => (a.name && (e[a.name] = a.value), e), {}) : {}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./src/lib/lessComponent.tsx"),
				l = t("./src/reddit/controls/Input/index.m.less"),
				r = t.n(l);
			a.a = n.a.input("input", r.a)
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				l = t.n(n);
			a.a = e => l.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("g", null, l.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/AppealPage/index.m.less": function(e, a, t) {
			e.exports = {
				content: "_3MnGFxJCm1MO2z_Wyl13KK",
				link: "_1sfty8WR4B7523GQl6NyyR",
				appealFormFieldComment: "_2BCBcOEl4lz1iEQLeeZ--Q",
				greyTextStyle: "_1JsPvuoKL7t2H6bwscE3C5",
				textAreaCounter: "oDzPzRPaalkLn7b9I0WXa",
				appealFormWarningHeader: "SUhwEVSuhaFJrLRaRK0aB",
				checkboxErrorMessage: "_2CitNZczWt1CQbnCse_t-9",
				errorMessage: "_2hADWszBQHUc54oD1_AN1D",
				errorMessageStyles: "_7DBxP7xsUjt3k2POTC02T",
				appealPageHeader: "YBz6glFcTUnPS2eQQ3TG-",
				appealForm: "_12XnAvzrJhIHDeW6T56f7_",
				appealFormHeader: "yk6rr77tnj9-DW4cmN0PY",
				appealFormDescription: "_3dw3i518CJ9GU2B6z-ilXW",
				appealFormFieldSet: "_1Hp_zgDBKbvdNowSa0AoxA",
				appealFormField: "_1kz49JnBS6n49NK5gr-pM-",
				appealFormFieldDescription: "_2I4GVTEBe6mR5uAVrp-YCx",
				appealFormWarning: "_1JqPIBBe0MJxx52pz9xHQM",
				appealFormWarningFooter: "_14F9SwsOdQfliUhxdLHkQW",
				appealFormWarningText: "_3C2oXcG7-lQhpV7Po7j6Bg",
				labeledInput: "_1EyIxKU5qWMNXP-EVci_f0",
				labeledTextArea: "_2h30EuzmCcELNDyEdFFd6C",
				policyCheckboxWrapper: "O6XEek3uCxywDQFDlg95E",
				policyCheckbox: "_3ieTECy1ImjbvOA2EizNqg",
				submitButtonPanel: "_1D14xLKJQHMpI0fTOEpOHi",
				submitButton: "_2AfOr4WVntuMal-kzYlZah"
			}
		},
		"./src/reddit/pages/AppealPage/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				l = t("./node_modules/react/index.js"),
				r = t.n(l),
				i = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				o = t("./src/lib/validateEmail/index.ts"),
				c = t("./src/reddit/pages/AppealPage/index.m.less"),
				d = t.n(c),
				p = t("./src/reddit/actions/users.ts"),
				m = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				u = t("./src/reddit/contexts/ApiContext.tsx"),
				h = t("./src/reddit/controls/Button/index.tsx"),
				b = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				f = t("./src/reddit/controls/Form/index.tsx"),
				x = t("./src/lib/constants/index.ts"),
				g = t("./src/lib/makeApiRequest/index.ts"),
				_ = t("./src/lib/omitHeaders/index.ts"),
				C = t("./src/reddit/constants/headers.ts"),
				k = t("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const E = (e, a, t) => Object(g.a)(Object(_.a)(e, [C.a]), {
					method: x.jb.POST,
					endpoint: Object(k.a)(`${e.apiUrl}/api/appeal`),
					data: {
						api_type: "json",
						description: a,
						email: t
					}
				}),
				y = e => Object(g.a)(Object(_.a)(e, [C.a]), {
					method: x.jb.GET,
					endpoint: Object(k.a)(`${e.apiUrl}/api/eligible_for_appeal`),
					data: {
						api_type: "json"
					}
				});
			var v = t("./src/reddit/selectors/user.ts");
			const F = "https://www.redditinc.com/policies/content-policy",
				N = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				S = Object(s.c)({
					currentUser: v.k
				}),
				w = Object(i.b)(S, e => ({
					logoutUser: () => e(Object(p.q)()),
					onSubmitAppeal: (a, t) => e(E(a, t))
				}));
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						appealError: null,
						appealPending: !1,
						appealSuccess: !1,
						canShowWarning: !1,
						description: "",
						descriptionDirty: !0,
						eligibleForAppeal: !1,
						email: "",
						emailDirty: !0,
						emailValid: !0,
						policyCheckboxChecked: !1,
						policyCheckboxDirty: !0,
						submitWasClicked: !1
					}, this.componentDidMount = async () => {
						const e = await y(this.props.apiContext());
						e.ok && this.setState({
							canShowWarning: !0,
							eligibleForAppeal: !!e.body
						})
					}, this.handleDescriptionChange = e => {
						this.setState({
							description: e.currentTarget.value,
							descriptionDirty: !0
						})
					}, this.handleEmailChange = e => {
						const a = e.currentTarget.value;
						this.setState({
							email: a,
							emailDirty: !0,
							emailValid: Object(o.a)(a, !0)
						})
					}, this.handlePolicyCheckboxClick = () => {
						this.setState({
							policyCheckboxChecked: !this.state.policyCheckboxChecked,
							policyCheckboxDirty: !0
						})
					}, this.handleSubmit = async () => {
						const {
							props: e,
							state: a
						} = this;
						if (this.setState({
								descriptionDirty: !1,
								emailDirty: !1,
								policyCheckboxDirty: !1,
								submitWasClicked: !0
							}), a.emailValid && a.description.length > 0 && a.policyCheckboxChecked) {
							if (a.appealPending) return;
							this.setState({
								appealPending: !0
							});
							const t = await E(e.apiContext(), a.description, a.email ? a.email : void 0);
							t.ok ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: t.error,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => r.a.createElement("label", null, n.fbt._("I have read the {=Reddit Content Policy} and the {=Suspensions help article} .", [n.fbt._param("=Reddit Content Policy", r.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: F
					}, n.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: N
					}, n.fbt._("Suspensions help article", null, {
						hk: "1M9zrX"
					})))], {
						hk: "3Fr8Lf"
					})), this.renderConfirmationPage = () => r.a.createElement(f.a, {
						className: d.a.appealForm
					}, r.a.createElement("div", {
						className: d.a.appealFormHeader
					}, n.fbt._("Appeal received", null, {
						hk: "3lQu7u"
					})), r.a.createElement("div", {
						className: d.a.appealFormDescription
					}, n.fbt._("Thanks for submitting your request. We will review your submission and be in touch if the status of your account's restriction is changed. Please note that suspensions which were correctly issued will not be reversed or lifted prematurely.", null, {
						hk: "2VTm7m"
					}))), this.renderForm = e => {
						const {
							props: a,
							state: t
						} = this, {
							canShowWarning: l,
							description: i,
							descriptionDirty: s,
							email: o,
							emailDirty: c,
							emailValid: p,
							policyCheckboxChecked: u,
							policyCheckboxDirty: x,
							submitWasClicked: g
						} = t;
						return r.a.createElement(r.a.Fragment, null, l && e && this.renderWarning(), r.a.createElement(f.a, {
							className: d.a.appealForm,
							onSubmit: this.handleSubmit
						}, r.a.createElement("div", {
							className: d.a.appealFormHeader
						}, n.fbt._("Submit an appeal", null, {
							hk: "1CoPRt"
						})), r.a.createElement("div", {
							className: d.a.appealFormDescription
						}, n.fbt._("If you have reviewed the {=Reddit Content Policy} and our {=Suspensions help article} and believe your account has been wrongfully suspended, submit this form and we'll review your request.", [n.fbt._param("=Reddit Content Policy", r.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: F
						}, n.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: N
						}, n.fbt._("Suspensions help article", null, {
							hk: "3LTtzC"
						})))], {
							hk: "2Unawp"
						})), r.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, r.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: !0,
							label: n.fbt._("Username", null, {
								hk: "1vE7k6"
							}),
							state: g ? m.d.Valid : void 0,
							value: a.currentUser.displayText
						}), r.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, n.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [n.fbt._param("=Help Center", r.a.createElement("a", {
							className: d.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank"
						}, n.fbt._("Help Center", null, {
							hk: "1nt3UL"
						})))], {
							hk: "39gK6E"
						}))), a.currentUser.hasVerifiedEmail ? null : r.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, r.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: e || t.appealPending,
							label: n.fbt._("Email address (optional)", null, {
								hk: "kQmzp"
							}),
							maxLength: 100,
							onChange: this.handleEmailChange,
							state: !o || c ? void 0 : p ? m.d.Valid : m.d.Invalid,
							type: "email",
							value: o
						}), p || c ? null : r.a.createElement("div", {
							className: d.a.errorMessage
						}, n.fbt._("Enter a valid email address", null, {
							hk: "2NC6Ve"
						})), r.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, n.fbt._("We will use this email address if we need to contact you for additional information.", null, {
							hk: "3cAASn"
						}))), r.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, r.a.createElement("div", {
							className: d.a.appealFormFieldDescription
						}, n.fbt._("Help us understand why you have not violated our policy and have been suspended in error.", null, {
							hk: "AxUTy"
						})), r.a.createElement("div", {
							className: d.a.appealFormField
						}, r.a.createElement(m.c, {
							className: d.a.labeledTextArea,
							disabled: e || t.appealPending,
							label: n.fbt._("Brief description", null, {
								hk: "Zpp5W"
							}),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : i ? m.d.Valid : m.d.Invalid,
							value: i
						}), !i && !s && r.a.createElement("div", {
							className: d.a.errorMessage
						}, n.fbt._("Enter a brief description", null, {
							hk: "1HEyz"
						})), r.a.createElement("div", {
							className: d.a.textAreaCounter
						}, n.fbt._("{length}", [n.fbt._param("length", (i.length / 250).toString())], {
							hk: "3fYpQM"
						})))), r.a.createElement("div", {
							className: d.a.policyCheckboxWrapper
						}, r.a.createElement(b.a, {
							className: d.a.policyCheckbox,
							disabled: e || t.appealPending,
							isSelected: u,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), u || x ? null : r.a.createElement("div", {
							className: d.a.checkboxErrorMessage
						}, n.fbt._("Required", null, {
							hk: "zBEsu"
						}))), t.appealError && t.appealError.fields && t.appealError.fields.map(e => r.a.createElement("div", {
							className: d.a.errorMessage
						}, e.msg)), r.a.createElement("fieldset", {
							className: d.a.submitButtonPanel
						}, r.a.createElement(h.l, {
							className: d.a.submitButton,
							disabled: e || t.appealPending
						}, t.appealPending ? n.fbt._("Pending", null, {
							hk: "3FtnOm"
						}) : n.fbt._("Submit", null, {
							hk: "4aU3dh"
						})))))
					}, this.renderWarning = () => r.a.createElement("div", {
						className: d.a.appealFormWarning
					}, r.a.createElement("div", {
						className: d.a.appealFormWarningHeader
					}, n.fbt._("You cannot submit an appeal", null, {
						hk: "4xTZrb"
					})), r.a.createElement("div", {
						className: d.a.appealFormWarningText
					}, n.fbt._("Your account is currently neither suspended nor restricted. If you are trying to submit an appeal for another account that is suspended or restricted, please {=log out} and log in to that account.", [n.fbt._param("=log out", r.a.createElement("a", {
						className: d.a.link,
						href: "#",
						onClick: e => {
							this.props.logoutUser(), e.preventDefault()
						}
					}, n.fbt._("log out", null, {
						hk: "2lRi6H"
					})))], {
						hk: "41Leic"
					})), r.a.createElement("div", {
						className: d.a.appealFormWarningFooter
					}, n.fbt._("For other account issues, please visit our {=Help Center} .", [n.fbt._param("=Help Center", r.a.createElement("a", {
						className: d.a.link,
						href: "https://www.reddithelp.com/en/categories/using-reddit",
						target: "_blank"
					}, n.fbt._("Help Center", null, {
						hk: "10kFKe"
					})))], {
						hk: "3OziY8"
					})))
				}
				render() {
					const {
						props: e,
						state: a
					} = this;
					if (!e.currentUser) return null;
					const t = e.currentUser.isFPR || !a.eligibleForAppeal;
					return r.a.createElement("div", {
						className: d.a.content
					}, r.a.createElement("h1", {
						className: d.a.appealPageHeader
					}, n.fbt._("Appeal suspension", null, {
						hk: "3LDNeF"
					})), a.appealSuccess ? this.renderConfirmationPage() : this.renderForm(t))
				}
			}
			a.default = Object(u.b)(w(D))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Appeal.9880acba92b96cbe8448.js.map