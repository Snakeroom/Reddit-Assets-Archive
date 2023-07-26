// https://www.redditstatic.com/desktop2x/Appeal.0d4d3adf4987e87fe761.js
// Retrieved at 7/26/2023, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Appeal"], {
		"./src/lib/validateEmail/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				if (!e && t) return !0;
				return /^.+\@.+\..+$/.test(e)
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return b
			})), a.d(t, "a", (function() {
				return f
			})), a.d(t, "b", (function() {
				return x
			})), a.d(t, "c", (function() {
				return k
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				i = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				s = a("./src/reddit/controls/Input/index.tsx"),
				o = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = a.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = l.a.div("icon", d.a),
				u = l.a.textarea("textarea", d.a),
				h = l.a.span("Invalid", d.a);
			var b, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const g = e => r.a.createElement("div", {
					className: Object(i.a)(e.isRequired && d.a.required, e.className, {
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[d.a.mValid]: e.state === b.Valid,
							[d.a.mInvalid]: e.state === b.Invalid,
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(i.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && r.a.createElement(m, {
					className: Object(i.a)({
						[d.a.mValid]: e.state === b.Valid,
						[d.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && r.a.createElement(o.a, null), e.state === b.Invalid && r.a.createElement(h, null, "!")))),
				x = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: n,
						isRequired: l,
						label: o,
						onKeyDown: c,
						state: m,
						...u
					} = e;
					return r.a.createElement(g, {
						backgroundColorState: t,
						className: a,
						isRequired: l,
						label: o,
						state: m
					}, r.a.createElement(s.a, p({}, u, {
						className: Object(i.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: c
					})))
				},
				k = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: n,
						isRequired: l,
						label: s,
						onKeyDown: o,
						state: c,
						...m
					} = e;
					return r.a.createElement(g, {
						backgroundColorState: t,
						className: a,
						isRequired: l,
						label: s,
						state: c,
						isTextarea: !0
					}, r.a.createElement(u, p({}, m, {
						className: Object(i.a)({
							[d.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: o
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function i(e) {
				const {
					children: t,
					className: a,
					onSubmit: n
				} = e;
				return r.a.createElement("form", {
					className: a,
					onSubmit: l(n)
				}, t)
			}
			const l = e => t => {
					if (!e) return;
					t.preventDefault();
					const a = t.target,
						n = s(a);
					e(n)
				},
				s = e => e && "form" === e.nodeName.toLowerCase() ? Array.from(e.elements).reduce((e, t) => (t.name && (e[t.name] = t.value), e), {}) : {}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				i = a.n(r);
			t.a = n.a.input("input", i.a)
		},
		"./src/reddit/endpoints/appeal/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return p
			})), a.d(t, "b", (function() {
				return m
			})), a.d(t, "d", (function() {
				return u
			})), a.d(t, "c", (function() {
				return h
			})), a.d(t, "e", (function() {
				return b
			})), a.d(t, "f", (function() {
				return f
			}));
			var n = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/makeApiRequest/index.ts"),
				i = a("./src/lib/makeGqlRequest/index.ts"),
				l = a("./src/lib/omitHeaders/index.ts"),
				s = a("./src/reddit/constants/headers.ts"),
				o = a("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = a("./src/redditGQL/operations/AppealEligibility.json"),
				d = a("./src/redditGQL/operations/RequestAppeal.json");
			const p = (e, t, a) => Object(r.a)(Object(l.a)(e, [s.a]), {
					method: n.ob.POST,
					endpoint: Object(o.a)(`${e.apiUrl}/api/appeal`),
					data: {
						api_type: "json",
						description: t,
						email: a
					}
				}),
				m = e => Object(r.a)(Object(l.a)(e, [s.a]), {
					method: n.ob.GET,
					endpoint: Object(o.a)(`${e.apiUrl}/api/eligible_for_appeal`),
					data: {
						api_type: "json"
					}
				}),
				u = e => {
					var t;
					return Boolean(e && e.data && (null === (t = e.data.identity) || void 0 === t ? void 0 : t.adminDecisions))
				},
				h = (e, t) => Object(i.a)(e, {
					...c,
					variables: {
						decisionId: t
					}
				}),
				b = e => {
					var t;
					return Boolean(e && e.data && (null === (t = e.data.requestAppeal) || void 0 === t ? void 0 : t.ok))
				},
				f = (e, t) => Object(i.a)(e, {
					...d,
					variables: {
						input: t
					}
				})
		},
		"./src/reddit/pages/AppealPage/index.m.less": function(e, t, a) {
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
		"./src/reddit/pages/AppealPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				o = a("./src/lib/validateEmail/index.ts"),
				c = a("./src/reddit/pages/AppealPage/index.m.less"),
				d = a.n(c),
				p = a("./src/reddit/actions/users.ts"),
				m = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				u = a("./src/reddit/contexts/ApiContext.tsx"),
				h = a("./src/reddit/controls/Button/index.tsx"),
				b = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				f = a("./src/reddit/controls/Form/index.tsx"),
				g = a("./src/reddit/endpoints/appeal/index.ts"),
				x = a("./src/reddit/selectors/user.ts");
			const k = "https://www.redditinc.com/policies/content-policy",
				y = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				C = Object(s.c)({
					currentUser: x.m
				}),
				_ = Object(l.b)(C, e => ({
					logoutUser: () => e(Object(p.p)())
				}));
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
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
						const e = await Object(g.b)(this.props.apiContext());
						e.ok && !this.isUnmounted && this.setState({
							canShowWarning: !0,
							eligibleForAppeal: !!e.body
						})
					}, this.handleDescriptionChange = e => {
						this.setState({
							description: e.currentTarget.value,
							descriptionDirty: !0
						})
					}, this.handleEmailChange = e => {
						const t = e.currentTarget.value;
						this.setState({
							email: t,
							emailDirty: !0,
							emailValid: Object(o.a)(t, !0)
						})
					}, this.handlePolicyCheckboxClick = () => {
						this.setState({
							policyCheckboxChecked: !this.state.policyCheckboxChecked,
							policyCheckboxDirty: !0
						})
					}, this.handleSubmit = async () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.setState({
								descriptionDirty: !1,
								emailDirty: !1,
								policyCheckboxDirty: !1,
								submitWasClicked: !0
							}), t.emailValid && t.description.length > 0 && t.policyCheckboxChecked) {
							if (t.appealPending) return;
							this.setState({
								appealPending: !0
							});
							const a = await Object(g.a)(e.apiContext(), t.description, t.email ? t.email : void 0);
							a.ok ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: a.error,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => i.a.createElement("label", null, n.fbt._("I have read the {=Reddit Content Policy} and the {=Suspensions help article} .", [n.fbt._param("=Reddit Content Policy", i.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: k,
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), n.fbt._param("=Suspensions help article", i.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: y,
						rel: "noopener noreferrer"
					}, n.fbt._("Suspensions help article", null, {
						hk: "1M9zrX"
					})))], {
						hk: "3Fr8Lf"
					})), this.renderConfirmationPage = () => i.a.createElement(f.a, {
						className: d.a.appealForm
					}, i.a.createElement("div", {
						className: d.a.appealFormHeader
					}, n.fbt._("Appeal received", null, {
						hk: "3lQu7u"
					})), i.a.createElement("div", {
						className: d.a.appealFormDescription
					}, n.fbt._("Thanks for submitting your request. We will review your submission and be in touch if the status of your account's restriction is changed. Please note that suspensions which were correctly issued will not be reversed or lifted prematurely.", null, {
						hk: "2VTm7m"
					}))), this.renderForm = e => {
						const {
							props: t,
							state: a
						} = this, {
							canShowWarning: r,
							description: l,
							descriptionDirty: s,
							email: o,
							emailDirty: c,
							emailValid: p,
							policyCheckboxChecked: u,
							policyCheckboxDirty: g,
							submitWasClicked: x
						} = a;
						return i.a.createElement(i.a.Fragment, null, r && e && this.renderWarning(), i.a.createElement(f.a, {
							className: d.a.appealForm,
							onSubmit: this.handleSubmit
						}, i.a.createElement("div", {
							className: d.a.appealFormHeader
						}, n.fbt._("Submit an appeal", null, {
							hk: "1CoPRt"
						})), i.a.createElement("div", {
							className: d.a.appealFormDescription
						}, n.fbt._("If you have reviewed the {=Reddit Content Policy} and our {=Suspensions help article} and believe your account has been wrongfully suspended, submit this form and we'll review your request.", [n.fbt._param("=Reddit Content Policy", i.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: k,
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), n.fbt._param("=Suspensions help article", i.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: y,
							rel: "noopener noreferrer"
						}, n.fbt._("Suspensions help article", null, {
							hk: "3LTtzC"
						})))], {
							hk: "2Unawp"
						})), i.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, i.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: !0,
							label: n.fbt._("Username", null, {
								hk: "1vE7k6"
							}),
							state: x ? m.d.Valid : void 0,
							value: t.currentUser.displayText
						}), i.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, n.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [n.fbt._param("=Help Center", i.a.createElement("a", {
							className: d.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank",
							rel: "noopener noreferrer"
						}, n.fbt._("Help Center", null, {
							hk: "1nt3UL"
						})))], {
							hk: "39gK6E"
						}))), t.currentUser.hasVerifiedEmail ? null : i.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, i.a.createElement(m.b, {
							className: d.a.labeledInput,
							disabled: e || a.appealPending,
							label: n.fbt._("Email address (optional)", null, {
								hk: "kQmzp"
							}),
							maxLength: 100,
							onChange: this.handleEmailChange,
							state: !o || c ? void 0 : p ? m.d.Valid : m.d.Invalid,
							type: "email",
							value: o
						}), p || c ? null : i.a.createElement("div", {
							className: d.a.errorMessage
						}, n.fbt._("Enter a valid email address", null, {
							hk: "2NC6Ve"
						})), i.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, n.fbt._("We will use this email address if we need to contact you for additional information.", null, {
							hk: "3cAASn"
						}))), i.a.createElement("fieldset", {
							className: d.a.appealFormFieldSet
						}, i.a.createElement("div", {
							className: d.a.appealFormFieldDescription
						}, n.fbt._("Help us understand why you have not violated our policy and have been suspended in error.", null, {
							hk: "AxUTy"
						})), i.a.createElement("div", {
							className: d.a.appealFormField
						}, i.a.createElement(m.c, {
							className: d.a.labeledTextArea,
							disabled: e || a.appealPending,
							label: n.fbt._("Brief description", null, {
								hk: "Zpp5W"
							}),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : l ? m.d.Valid : m.d.Invalid,
							value: l
						}), !l && !s && i.a.createElement("div", {
							className: d.a.errorMessage
						}, n.fbt._("Enter a brief description", null, {
							hk: "1HEyz"
						})), i.a.createElement("div", {
							className: d.a.textAreaCounter
						}, n.fbt._("{length}", [n.fbt._param("length", l.length.toString())], {
							hk: "3fYpQM"
						}), "/ ", 250..toString()))), i.a.createElement("div", {
							className: d.a.policyCheckboxWrapper
						}, i.a.createElement(b.a, {
							className: d.a.policyCheckbox,
							disabled: e || a.appealPending,
							isSelected: u,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), u || g ? null : i.a.createElement("div", {
							className: d.a.checkboxErrorMessage
						}, n.fbt._("Required", null, {
							hk: "zBEsu"
						}))), a.appealError && a.appealError.fields && a.appealError.fields.map(e => i.a.createElement("div", {
							className: d.a.errorMessage,
							key: e.field
						}, e.msg)), i.a.createElement("fieldset", {
							className: d.a.submitButtonPanel
						}, i.a.createElement(h.l, {
							className: d.a.submitButton,
							disabled: e || a.appealPending
						}, a.appealPending ? n.fbt._("Pending", null, {
							hk: "3FtnOm"
						}) : n.fbt._("Submit", null, {
							hk: "4aU3dh"
						})))))
					}, this.renderWarning = () => i.a.createElement("div", {
						className: d.a.appealFormWarning
					}, i.a.createElement("div", {
						className: d.a.appealFormWarningHeader
					}, n.fbt._("You cannot submit an appeal", null, {
						hk: "4xTZrb"
					})), i.a.createElement("div", {
						className: d.a.appealFormWarningText
					}, n.fbt._("Your account is currently neither suspended nor restricted. If you are trying to submit an appeal for another account that is suspended or restricted, please {=log out} and log in to that account.", [n.fbt._param("=log out", i.a.createElement("a", {
						className: d.a.link,
						href: "#",
						onClick: e => {
							this.props.logoutUser(), e.preventDefault()
						}
					}, n.fbt._("log out", null, {
						hk: "2lRi6H"
					})))], {
						hk: "41Leic"
					})), i.a.createElement("div", {
						className: d.a.appealFormWarningFooter
					}, n.fbt._("For other account issues, please visit our {=Help Center} .", [n.fbt._param("=Help Center", i.a.createElement("a", {
						className: d.a.link,
						href: "https://www.reddithelp.com/en/categories/using-reddit",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Help Center", null, {
						hk: "10kFKe"
					})))], {
						hk: "3OziY8"
					})))
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (!e.currentUser) return null;
					const a = e.currentUser.isFPR || !t.eligibleForAppeal;
					return i.a.createElement("div", {
						className: d.a.content
					}, i.a.createElement("h1", {
						className: d.a.appealPageHeader
					}, n.fbt._("Appeal suspension", null, {
						hk: "3LDNeF"
					})), t.appealSuccess ? this.renderConfirmationPage() : this.renderForm(a))
				}
			}
			t.default = Object(u.b)(_(E))
		},
		"./src/reddit/pages/AppealUniquePage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				s = a("./node_modules/reselect/es/index.js"),
				o = a("./src/reddit/actions/toaster.ts"),
				c = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				d = a("./src/reddit/contexts/ApiContext.tsx"),
				p = a("./src/reddit/controls/Button/index.tsx"),
				m = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				u = a("./src/reddit/controls/Form/index.tsx"),
				h = a("./src/reddit/endpoints/appeal/index.ts"),
				b = a("./src/reddit/pages/AppealPage/index.m.less"),
				f = a.n(b),
				g = a("./src/reddit/selectors/user.ts"),
				x = a("./src/redditGQL/types.ts");
			const k = "https://www.redditinc.com/policies/content-policy",
				y = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				C = {
					[x.m.PrescriptivePeriodExpired]: "You've passed the six-month period for submitting an appeal on this decision",
					[x.m.ExistingAppeal]: "You've already appealed this decision",
					[x.m.NoMatchingDecision]: "This appeal is not connected to this account"
				},
				_ = Object(s.c)({
					currentUser: g.m
				}),
				E = Object(l.b)(_);
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						appealError: !1,
						appealPending: !1,
						appealSuccess: !1,
						canShowWarning: !1,
						description: "",
						descriptionDirty: !0,
						eligibleForAppeal: !1,
						appealEligibility: null,
						policyCheckboxChecked: !1,
						policyCheckboxDirty: !0,
						submitWasClicked: !1
					}, this.componentDidMount = async () => {
						const {
							id: e
						} = this.props.match.params, t = await Object(h.c)(this.props.gqlContext(), e);
						if (!this.isUnmounted && t.ok && Object(h.d)(t.body)) {
							const e = t.body.data.identity.adminDecisions[0].appealEligibility;
							this.setState({
								canShowWarning: !0,
								eligibleForAppeal: e === x.m.Eligible,
								appealEligibility: e
							})
						} else Object(o.d)()
					}, this.handleDescriptionChange = e => {
						this.setState({
							description: e.currentTarget.value,
							descriptionDirty: !0
						})
					}, this.handlePolicyCheckboxClick = () => {
						this.setState({
							policyCheckboxChecked: !this.state.policyCheckboxChecked,
							policyCheckboxDirty: !0
						})
					}, this.handleSubmit = async () => {
						const {
							props: e,
							state: t
						} = this, {
							id: a
						} = e.match.params;
						if (this.setState({
								descriptionDirty: !1,
								policyCheckboxDirty: !1,
								submitWasClicked: !0
							}), t.description.length > 0 && t.policyCheckboxChecked) {
							if (t.appealPending) return;
							this.setState({
								appealPending: !0
							});
							const e = await Object(h.f)(this.props.gqlContext(), {
								message: t.description,
								id: a
							});
							e.ok && Object(h.e)(e.body) ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: !0,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => i.a.createElement("label", null, n.fbt._("I have read the {=Reddit Content Policy} and the {=Suspensions help article} .", [n.fbt._param("=Reddit Content Policy", i.a.createElement("a", {
						className: f.a.link,
						target: "_blank",
						href: k,
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), n.fbt._param("=Suspensions help article", i.a.createElement("a", {
						className: f.a.link,
						target: "_blank",
						href: y,
						rel: "noopener noreferrer"
					}, n.fbt._("Suspensions help article", null, {
						hk: "1M9zrX"
					})))], {
						hk: "3Fr8Lf"
					})), this.renderConfirmationPage = () => i.a.createElement(u.a, {
						className: f.a.appealForm
					}, i.a.createElement("div", {
						className: f.a.appealFormHeader
					}, n.fbt._("Appeal received", null, {
						hk: "3lQu7u"
					})), i.a.createElement("div", {
						className: f.a.appealFormDescription
					}, n.fbt._("Thanks for submitting your request. We will review your submission and be in touch if the status of your account's restriction is changed. Please note that suspensions which were correctly issued will not be reversed or lifted prematurely.", null, {
						hk: "2VTm7m"
					}))), this.renderForm = e => {
						const {
							props: t,
							state: a
						} = this, {
							canShowWarning: r,
							description: l,
							descriptionDirty: s,
							policyCheckboxChecked: o,
							policyCheckboxDirty: d,
							submitWasClicked: h,
							appealEligibility: b
						} = a;
						return i.a.createElement(i.a.Fragment, null, r && e && this.renderWarning(b), i.a.createElement(u.a, {
							className: f.a.appealForm,
							onSubmit: this.handleSubmit
						}, i.a.createElement("div", {
							className: f.a.appealFormHeader
						}, n.fbt._("Submit an appeal", null, {
							hk: "1CoPRt"
						})), i.a.createElement("div", {
							className: f.a.appealFormDescription
						}, n.fbt._("If you have reviewed the {=Reddit Content Policy} and our {=Suspensions help article} and believe your account has been wrongfully suspended, submit this form and we'll review your request.", [n.fbt._param("=Reddit Content Policy", i.a.createElement("a", {
							className: f.a.link,
							target: "_blank",
							href: k,
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), n.fbt._param("=Suspensions help article", i.a.createElement("a", {
							className: f.a.link,
							target: "_blank",
							href: y,
							rel: "noopener noreferrer"
						}, n.fbt._("Suspensions help article", null, {
							hk: "3LTtzC"
						})))], {
							hk: "2Unawp"
						})), i.a.createElement("fieldset", {
							className: f.a.appealFormFieldSet
						}, i.a.createElement(c.b, {
							className: f.a.labeledInput,
							disabled: !0,
							label: n.fbt._("Username", null, {
								hk: "1vE7k6"
							}),
							state: h ? c.d.Valid : void 0,
							value: t.currentUser.displayText
						}), i.a.createElement("div", {
							className: f.a.appealFormFieldComment
						}, n.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [n.fbt._param("=Help Center", i.a.createElement("a", {
							className: f.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank",
							rel: "noopener noreferrer"
						}, n.fbt._("Help Center", null, {
							hk: "1nt3UL"
						})))], {
							hk: "39gK6E"
						}))), i.a.createElement("fieldset", {
							className: f.a.appealFormFieldSet
						}, i.a.createElement("div", {
							className: f.a.appealFormFieldDescription
						}, n.fbt._("Help us understand why you have not violated our policy and have been suspended in error.", null, {
							hk: "AxUTy"
						})), i.a.createElement("div", {
							className: f.a.appealFormField
						}, i.a.createElement(c.c, {
							className: f.a.labeledTextArea,
							disabled: e || a.appealPending,
							label: n.fbt._("Brief description", null, {
								hk: "Zpp5W"
							}),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : l ? c.d.Valid : c.d.Invalid,
							value: l
						}), !l && !s && i.a.createElement("div", {
							className: f.a.errorMessage
						}, n.fbt._("Enter a brief description", null, {
							hk: "1HEyz"
						})), i.a.createElement("div", {
							className: f.a.textAreaCounter
						}, n.fbt._("{length}", [n.fbt._param("length", l.length.toString())], {
							hk: "3fYpQM"
						}), "/ ", 250..toString()))), i.a.createElement("div", {
							className: f.a.policyCheckboxWrapper
						}, i.a.createElement(m.a, {
							className: f.a.policyCheckbox,
							disabled: e || a.appealPending,
							isSelected: o,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), o || d ? null : i.a.createElement("div", {
							className: f.a.checkboxErrorMessage
						}, n.fbt._("Required", null, {
							hk: "zBEsu"
						}))), a.appealError && i.a.createElement("div", {
							className: f.a.errorMessage
						}, n.fbt._("Oops, something went wrong. Refresh and try again.", null, {
							hk: "pDGGC"
						})), i.a.createElement("fieldset", {
							className: f.a.submitButtonPanel
						}, i.a.createElement(p.l, {
							className: f.a.submitButton,
							disabled: e || a.appealPending
						}, a.appealPending ? n.fbt._("Pending", null, {
							hk: "3FtnOm"
						}) : n.fbt._("Submit", null, {
							hk: "4aU3dh"
						})))))
					}, this.renderWarning = e => i.a.createElement("div", {
						className: f.a.appealFormWarning
					}, i.a.createElement("div", {
						className: f.a.appealFormWarningHeader
					}, n.fbt._("{text}", [n.fbt._param("text", `${C[e]}`)], {
						hk: "1l5LDo"
					})))
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (!e.currentUser) return null;
					const a = e.currentUser.isFPR || !t.eligibleForAppeal;
					return i.a.createElement("div", {
						className: f.a.content
					}, i.a.createElement("h1", {
						className: f.a.appealPageHeader
					}, n.fbt._("Appeal suspension", null, {
						hk: "3LDNeF"
					})), t.appealSuccess ? this.renderConfirmationPage() : this.renderForm(a))
				}
			}
			t.default = Object(d.b)(E(v))
		},
		"./src/redditGQL/operations/AppealEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"5b6b7dbe1d77"}')
		},
		"./src/redditGQL/operations/RequestAppeal.json": function(e) {
			e.exports = JSON.parse('{"id":"d02e84c11a5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Appeal.0d4d3adf4987e87fe761.js.map