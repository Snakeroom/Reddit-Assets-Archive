// https://www.redditstatic.com/desktop2x/Appeal.e45a6a6652e7c168a1f8.js
// Retrieved at 6/6/2023, 10:20:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Appeal"], {
		"./src/lib/validateEmail/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			}));
			const r = (e, a) => {
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
				return _
			})), t.d(a, "c", (function() {
				return g
			}));
			var r = t("./node_modules/react/index.js"),
				n = t.n(r),
				l = t("./src/lib/classNames/index.ts"),
				i = t("./src/lib/lessComponent.tsx"),
				s = t("./src/reddit/controls/Input/index.tsx"),
				o = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = t.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
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
			const x = e => n.a.createElement("div", {
					className: Object(l.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === b.Valid,
							[d.a.mInvalid]: e.state === b.Invalid,
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, n.a.createElement("label", {
					className: Object(l.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && n.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && n.a.createElement(m, {
					className: Object(l.a)({
						[d.a.mValid]: e.state === b.Valid,
						[d.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && n.a.createElement(o.a, null), e.state === b.Invalid && n.a.createElement(h, null, "!")))),
				_ = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: r,
						isRequired: i,
						label: o,
						onKeyDown: c,
						state: m,
						...u
					} = e;
					return n.a.createElement(x, {
						backgroundColorState: a,
						className: t,
						isRequired: i,
						label: o,
						state: m
					}, n.a.createElement(s.a, p({}, u, {
						className: Object(l.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: c
					})))
				},
				g = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: r,
						isRequired: i,
						label: s,
						onKeyDown: o,
						state: c,
						...m
					} = e;
					return n.a.createElement(x, {
						backgroundColorState: a,
						className: t,
						isRequired: i,
						label: s,
						state: c,
						isTextarea: !0
					}, n.a.createElement(u, p({}, m, {
						className: Object(l.a)({
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return l
			}));
			var r = t("./node_modules/react/index.js"),
				n = t.n(r);

			function l(e) {
				const {
					children: a,
					className: t,
					onSubmit: r
				} = e;
				return n.a.createElement("form", {
					className: t,
					onSubmit: i(r)
				}, a)
			}
			const i = e => a => {
					if (!e) return;
					a.preventDefault();
					const t = a.target,
						r = s(t);
					e(r)
				},
				s = e => e && "form" === e.nodeName.toLowerCase() ? Array.from(e.elements).reduce((e, a) => (a.name && (e[a.name] = a.value), e), {}) : {}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, a, t) {
			"use strict";
			var r = t("./src/lib/lessComponent.tsx"),
				n = t("./src/reddit/controls/Input/index.m.less"),
				l = t.n(n);
			a.a = r.a.input("input", l.a)
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
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				l = t.n(n),
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
				_ = t("./src/lib/makeApiRequest/index.ts"),
				g = t("./src/lib/omitHeaders/index.ts"),
				k = t("./src/reddit/constants/headers.ts"),
				C = t("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const y = (e, a, t) => Object(_.a)(Object(g.a)(e, [k.a]), {
					method: x.ob.POST,
					endpoint: Object(C.a)(`${e.apiUrl}/api/appeal`),
					data: {
						api_type: "json",
						description: a,
						email: t
					}
				}),
				E = e => Object(_.a)(Object(g.a)(e, [k.a]), {
					method: x.ob.GET,
					endpoint: Object(C.a)(`${e.apiUrl}/api/eligible_for_appeal`),
					data: {
						api_type: "json"
					}
				});
			var v = t("./src/reddit/selectors/user.ts");
			const F = "https://www.redditinc.com/policies/content-policy",
				N = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				S = Object(s.c)({
					currentUser: v.m
				}),
				D = Object(i.b)(S, e => ({
					logoutUser: () => e(Object(p.p)()),
					onSubmitAppeal: (a, t) => e(y(a, t))
				}));
			class w extends l.a.Component {
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
						const e = await E(this.props.apiContext());
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
							const t = await y(e.apiContext(), a.description, a.email ? a.email : void 0);
							t.ok ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: t.error,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => l.a.createElement("label", null, r.fbt._("I have read the {=Reddit Content Policy} and the {=Suspensions help article} .", [r.fbt._param("=Reddit Content Policy", l.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: F,
						rel: "noopener noreferrer"
					}, r.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), r.fbt._param("=Suspensions help article", l.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: N,
						rel: "noopener noreferrer"
					}, r.fbt._("Suspensions help article", null, {
						hk: "1M9zrX"
					})))], {
						hk: "3Fr8Lf"
					})), this.renderConfirmationPage = () => l.a.createElement(f.a, {
						className: d.a.appealForm
					}, l.a.createElement("div", {
						className: d.a.appealFormHeader
					}, r.fbt._("Appeal received", null, {
						hk: "3lQu7u"
					})), l.a.createElement("div", {
						className: d.a.appealFormDescription
					}, r.fbt._("Thanks for submitting your request. We will review your submission and be in touch if the status of your account's restriction is changed. Please note that suspensions which were correctly issued will not be reversed or lifted prematurely.", null, {
						hk: "2VTm7m"
					}))), this.renderForm = e => {
						const {
							props: a,
							state: t
						} = this, {
							canShowWarning: n,
							description: i,
							descriptionDirty: s,
							email: o,
							emailDirty: c,
							emailValid: p,
							policyCheckboxChecked: u,
							policyCheckboxDirty: x,
							submitWasClicked: _
						} = t;
						return l.a.createElement(l.a.Fragment, null, n && e && this.renderWarning(), l.a.createElement(f.a, {
							className: d.a.appealForm,
							onSubmit: this.handleSubmit
						}, l.a.createElement("div", {
							className: d.a.appealFormHeader
						}, r.fbt._("Submit an appeal", null, {
							hk: "1CoPRt"
						})), l.a.createElement("div", {
							className: d.a.appealFormDescription
						}, r.fbt._("If you have reviewed the {=Reddit Content Policy} and our {=Suspensions help article} and believe your account has been wrongfully suspended, submit this form and we'll review your request.", [r.fbt._param("=Reddit Content Policy", l.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: F,
							rel: "noopener noreferrer"
						}, r.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), r.fbt._param("=Suspensions help article", l.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: N,
							rel: "noopener noreferrer"
						}, r.fbt._("Suspensions help article", null, {
							hk: "3LTtzC"
						})))], {
							hk: "2Unawp"
						})), l.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, l.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: !0,
							label: r.fbt._("Username", null, {
								hk: "1vE7k6"
							}),
							state: _ ? m.d.Valid : void 0,
							value: a.currentUser.displayText
						}), l.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, r.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [r.fbt._param("=Help Center", l.a.createElement("a", {
							className: d.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank",
							rel: "noopener noreferrer"
						}, r.fbt._("Help Center", null, {
							hk: "1nt3UL"
						})))], {
							hk: "39gK6E"
						}))), a.currentUser.hasVerifiedEmail ? null : l.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, l.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: e || t.appealPending,
							label: r.fbt._("Email address (optional)", null, {
								hk: "kQmzp"
							}),
							maxLength: 100,
							onChange: this.handleEmailChange,
							state: !o || c ? void 0 : p ? m.d.Valid : m.d.Invalid,
							type: "email",
							value: o
						}), p || c ? null : l.a.createElement("div", {
							className: d.a.errorMessage
						}, r.fbt._("Enter a valid email address", null, {
							hk: "2NC6Ve"
						})), l.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, r.fbt._("We will use this email address if we need to contact you for additional information.", null, {
							hk: "3cAASn"
						}))), l.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, l.a.createElement("div", {
							className: d.a.appealFormFieldDescription
						}, r.fbt._("Help us understand why you have not violated our policy and have been suspended in error.", null, {
							hk: "AxUTy"
						})), l.a.createElement("div", {
							className: d.a.appealFormField
						}, l.a.createElement(m.c, {
							className: d.a.labeledTextArea,
							disabled: e || t.appealPending,
							label: r.fbt._("Brief description", null, {
								hk: "Zpp5W"
							}),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : i ? m.d.Valid : m.d.Invalid,
							value: i
						}), !i && !s && l.a.createElement("div", {
							className: d.a.errorMessage
						}, r.fbt._("Enter a brief description", null, {
							hk: "1HEyz"
						})), l.a.createElement("div", {
							className: d.a.textAreaCounter
						}, r.fbt._("{length}", [r.fbt._param("length", (i.length / 250).toString())], {
							hk: "3fYpQM"
						})))), l.a.createElement("div", {
							className: d.a.policyCheckboxWrapper
						}, l.a.createElement(b.a, {
							className: d.a.policyCheckbox,
							disabled: e || t.appealPending,
							isSelected: u,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), u || x ? null : l.a.createElement("div", {
							className: d.a.checkboxErrorMessage
						}, r.fbt._("Required", null, {
							hk: "zBEsu"
						}))), t.appealError && t.appealError.fields && t.appealError.fields.map(e => l.a.createElement("div", {
							className: d.a.errorMessage
						}, e.msg)), l.a.createElement("fieldset", {
							className: d.a.submitButtonPanel
						}, l.a.createElement(h.l, {
							className: d.a.submitButton,
							disabled: e || t.appealPending
						}, t.appealPending ? r.fbt._("Pending", null, {
							hk: "3FtnOm"
						}) : r.fbt._("Submit", null, {
							hk: "4aU3dh"
						})))))
					}, this.renderWarning = () => l.a.createElement("div", {
						className: d.a.appealFormWarning
					}, l.a.createElement("div", {
						className: d.a.appealFormWarningHeader
					}, r.fbt._("You cannot submit an appeal", null, {
						hk: "4xTZrb"
					})), l.a.createElement("div", {
						className: d.a.appealFormWarningText
					}, r.fbt._("Your account is currently neither suspended nor restricted. If you are trying to submit an appeal for another account that is suspended or restricted, please {=log out} and log in to that account.", [r.fbt._param("=log out", l.a.createElement("a", {
						className: d.a.link,
						href: "#",
						onClick: e => {
							this.props.logoutUser(), e.preventDefault()
						}
					}, r.fbt._("log out", null, {
						hk: "2lRi6H"
					})))], {
						hk: "41Leic"
					})), l.a.createElement("div", {
						className: d.a.appealFormWarningFooter
					}, r.fbt._("For other account issues, please visit our {=Help Center} .", [r.fbt._param("=Help Center", l.a.createElement("a", {
						className: d.a.link,
						href: "https://www.reddithelp.com/en/categories/using-reddit",
						target: "_blank",
						rel: "noopener noreferrer"
					}, r.fbt._("Help Center", null, {
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
					return l.a.createElement("div", {
						className: d.a.content
					}, l.a.createElement("h1", {
						className: d.a.appealPageHeader
					}, r.fbt._("Appeal suspension", null, {
						hk: "3LDNeF"
					})), a.appealSuccess ? this.renderConfirmationPage() : this.renderForm(t))
				}
			}
			a.default = Object(u.b)(D(w))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Appeal.e45a6a6652e7c168a1f8.js.map