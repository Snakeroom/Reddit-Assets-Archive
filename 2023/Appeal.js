// https://www.redditstatic.com/desktop2x/Appeal.d4ac328e6a9c94276af1.js
// Retrieved at 7/5/2023, 1:50:03 PM by Reddit Dataminer v1.0.0
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
				return x
			})), t.d(a, "c", (function() {
				return k
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
			const g = e => l.a.createElement("div", {
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
				x = e => {
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
					return l.a.createElement(g, {
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
				k = e => {
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
					return l.a.createElement(g, {
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
		"./src/reddit/endpoints/appeal/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return d
			})), t.d(a, "b", (function() {
				return p
			})), t.d(a, "c", (function() {
				return m
			}));
			var n = t("./src/lib/constants/index.ts"),
				l = t("./src/lib/makeApiRequest/index.ts"),
				r = t("./src/lib/makeGqlRequest/index.ts"),
				i = t("./src/lib/omitHeaders/index.ts"),
				s = t("./src/reddit/constants/headers.ts"),
				o = t("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = t("./src/redditGQL/operations/AppealEligibility.json");
			const d = (e, a, t) => Object(l.a)(Object(i.a)(e, [s.a]), {
					method: n.ob.POST,
					endpoint: Object(o.a)(`${e.apiUrl}/api/appeal`),
					data: {
						api_type: "json",
						description: a,
						email: t
					}
				}),
				p = e => Object(l.a)(Object(i.a)(e, [s.a]), {
					method: n.ob.GET,
					endpoint: Object(o.a)(`${e.apiUrl}/api/eligible_for_appeal`),
					data: {
						api_type: "json"
					}
				}),
				m = (e, a) => Object(r.a)(e, {
					...c,
					variables: {
						decisionId: a
					}
				})
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
				g = t("./src/reddit/endpoints/appeal/index.ts"),
				x = t("./src/reddit/selectors/user.ts");
			const k = "https://www.redditinc.com/policies/content-policy",
				y = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				E = Object(s.c)({
					currentUser: x.m
				}),
				C = Object(i.b)(E, e => ({
					logoutUser: () => e(Object(p.p)()),
					onSubmitAppeal: (a, t) => e(Object(g.a)(a, t))
				}));
			class _ extends r.a.Component {
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
							const t = await Object(g.a)(e.apiContext(), a.description, a.email ? a.email : void 0);
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
						href: k,
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
						className: d.a.link,
						target: "_blank",
						href: y,
						rel: "noopener noreferrer"
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
							policyCheckboxDirty: g,
							submitWasClicked: x
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
							href: k,
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
							className: d.a.link,
							target: "_blank",
							href: y,
							rel: "noopener noreferrer"
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
							state: x ? m.d.Valid : void 0,
							value: a.currentUser.displayText
						}), r.a.createElement("div", {
							className: d.a.appealFormFieldComment
						}, n.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [n.fbt._param("=Help Center", r.a.createElement("a", {
							className: d.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank",
							rel: "noopener noreferrer"
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
						}), u || g ? null : r.a.createElement("div", {
							className: d.a.checkboxErrorMessage
						}, n.fbt._("Required", null, {
							hk: "zBEsu"
						}))), t.appealError && t.appealError.fields && t.appealError.fields.map(e => r.a.createElement("div", {
							className: d.a.errorMessage,
							key: e.field
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
			a.default = Object(u.b)(C(_))
		},
		"./src/reddit/pages/AppealUniquePage/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				l = t("./node_modules/react/index.js"),
				r = t.n(l),
				i = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				o = t("./src/lib/validateEmail/index.ts"),
				c = t("./src/reddit/actions/toaster.ts"),
				d = t("./src/reddit/actions/users.ts"),
				p = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				m = t("./src/reddit/contexts/ApiContext.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				h = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				b = t("./src/reddit/controls/Form/index.tsx"),
				f = t("./src/reddit/endpoints/appeal/index.ts"),
				g = t("./src/reddit/pages/AppealPage/index.m.less"),
				x = t.n(g),
				k = t("./src/reddit/selectors/user.ts"),
				y = t("./src/redditGQL/types.ts");
			const E = "https://www.redditinc.com/policies/content-policy",
				C = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				_ = {
					[y.m.PrescriptivePeriodExpired]: "You've passed the six-month period for submitting an appeal on this decision",
					[y.m.ExistingAppeal]: "You've already appealed this decision",
					[y.m.NoMatchingDecision]: "This appeal is not connected to this account"
				},
				v = Object(s.c)({
					currentUser: k.m
				}),
				F = Object(i.b)(v, e => ({
					logoutUser: () => e(Object(d.p)()),
					onSubmitAppeal: (a, t) => e(Object(f.a)(a, t))
				}));
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.isUnmounted = !1, this.state = {
						appealError: null,
						appealPending: !1,
						appealSuccess: !1,
						canShowWarning: !1,
						description: "",
						descriptionDirty: !0,
						eligibleForAppeal: !1,
						appealEligibility: null,
						email: "",
						emailDirty: !0,
						emailValid: !0,
						policyCheckboxChecked: !1,
						policyCheckboxDirty: !0,
						submitWasClicked: !1
					}, this.componentDidMount = async () => {
						const {
							id: e
						} = this.props.match.params, a = await Object(f.c)(this.props.gqlContext(), e);
						if (a.ok) {
							if (!this.isUnmounted) {
								const e = a.body.data.identity.adminDecisions[0].appealEligibility;
								this.setState({
									canShowWarning: !0,
									eligibleForAppeal: e === y.m.Eligible,
									appealEligibility: e
								})
							}
						} else Object(c.d)()
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
							const t = await Object(f.a)(e.apiContext(), a.description, a.email ? a.email : void 0);
							t.ok ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: t.error,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => r.a.createElement("label", null, n.fbt._("I have read the {=Reddit Content Policy} and the {=Suspensions help article} .", [n.fbt._param("=Reddit Content Policy", r.a.createElement("a", {
						className: x.a.link,
						target: "_blank",
						href: E,
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit Content Policy", null, {
						hk: "1zrL2W"
					}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
						className: x.a.link,
						target: "_blank",
						href: C,
						rel: "noopener noreferrer"
					}, n.fbt._("Suspensions help article", null, {
						hk: "1M9zrX"
					})))], {
						hk: "3Fr8Lf"
					})), this.renderConfirmationPage = () => r.a.createElement(b.a, {
						className: x.a.appealForm
					}, r.a.createElement("div", {
						className: x.a.appealFormHeader
					}, n.fbt._("Appeal received", null, {
						hk: "3lQu7u"
					})), r.a.createElement("div", {
						className: x.a.appealFormDescription
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
							emailValid: d,
							policyCheckboxChecked: m,
							policyCheckboxDirty: f,
							submitWasClicked: g,
							appealEligibility: k
						} = t;
						return r.a.createElement(r.a.Fragment, null, l && e && this.renderWarning(k), r.a.createElement(b.a, {
							className: x.a.appealForm,
							onSubmit: this.handleSubmit
						}, r.a.createElement("div", {
							className: x.a.appealFormHeader
						}, n.fbt._("Submit an appeal", null, {
							hk: "1CoPRt"
						})), r.a.createElement("div", {
							className: x.a.appealFormDescription
						}, n.fbt._("If you have reviewed the {=Reddit Content Policy} and our {=Suspensions help article} and believe your account has been wrongfully suspended, submit this form and we'll review your request.", [n.fbt._param("=Reddit Content Policy", r.a.createElement("a", {
							className: x.a.link,
							target: "_blank",
							href: E,
							rel: "noopener noreferrer"
						}, n.fbt._("Reddit Content Policy", null, {
							hk: "4qL67J"
						}))), n.fbt._param("=Suspensions help article", r.a.createElement("a", {
							className: x.a.link,
							target: "_blank",
							href: C,
							rel: "noopener noreferrer"
						}, n.fbt._("Suspensions help article", null, {
							hk: "3LTtzC"
						})))], {
							hk: "2Unawp"
						})), r.a.createElement("fieldset", {
							className: x.a.appealFormFieldSet
						}, r.a.createElement(p.b, {
							className: x.a.labeledInput,
							disabled: !0,
							label: n.fbt._("Username", null, {
								hk: "1vE7k6"
							}),
							state: g ? p.d.Valid : void 0,
							value: a.currentUser.displayText
						}), r.a.createElement("div", {
							className: x.a.appealFormFieldComment
						}, n.fbt._("You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our {=Help Center} .", [n.fbt._param("=Help Center", r.a.createElement("a", {
							className: x.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank",
							rel: "noopener noreferrer"
						}, n.fbt._("Help Center", null, {
							hk: "1nt3UL"
						})))], {
							hk: "39gK6E"
						}))), a.currentUser.hasVerifiedEmail ? null : r.a.createElement("fieldset", {
							className: x.a.appealFormFieldSet
						}, r.a.createElement(p.b, {
							className: x.a.labeledInput,
							disabled: e || t.appealPending,
							label: n.fbt._("Email address (optional)", null, {
								hk: "kQmzp"
							}),
							maxLength: 100,
							onChange: this.handleEmailChange,
							state: !o || c ? void 0 : d ? p.d.Valid : p.d.Invalid,
							type: "email",
							value: o
						}), d || c ? null : r.a.createElement("div", {
							className: x.a.errorMessage
						}, n.fbt._("Enter a valid email address", null, {
							hk: "2NC6Ve"
						})), r.a.createElement("div", {
							className: x.a.appealFormFieldComment
						}, n.fbt._("We will use this email address if we need to contact you for additional information.", null, {
							hk: "3cAASn"
						}))), r.a.createElement("fieldset", {
							className: x.a.appealFormFieldSet
						}, r.a.createElement("div", {
							className: x.a.appealFormFieldDescription
						}, n.fbt._("Help us understand why you have not violated our policy and have been suspended in error.", null, {
							hk: "AxUTy"
						})), r.a.createElement("div", {
							className: x.a.appealFormField
						}, r.a.createElement(p.c, {
							className: x.a.labeledTextArea,
							disabled: e || t.appealPending,
							label: n.fbt._("Brief description", null, {
								hk: "Zpp5W"
							}),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : i ? p.d.Valid : p.d.Invalid,
							value: i
						}), !i && !s && r.a.createElement("div", {
							className: x.a.errorMessage
						}, n.fbt._("Enter a brief description", null, {
							hk: "1HEyz"
						})), r.a.createElement("div", {
							className: x.a.textAreaCounter
						}, n.fbt._("{length}", [n.fbt._param("length", (i.length / 250).toString())], {
							hk: "3fYpQM"
						})))), r.a.createElement("div", {
							className: x.a.policyCheckboxWrapper
						}, r.a.createElement(h.a, {
							className: x.a.policyCheckbox,
							disabled: e || t.appealPending,
							isSelected: m,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), m || f ? null : r.a.createElement("div", {
							className: x.a.checkboxErrorMessage
						}, n.fbt._("Required", null, {
							hk: "zBEsu"
						}))), t.appealError && t.appealError.fields && t.appealError.fields.map(e => r.a.createElement("div", {
							className: x.a.errorMessage,
							key: e.field
						}, e.msg)), r.a.createElement("fieldset", {
							className: x.a.submitButtonPanel
						}, r.a.createElement(u.l, {
							className: x.a.submitButton,
							disabled: e || t.appealPending
						}, t.appealPending ? n.fbt._("Pending", null, {
							hk: "3FtnOm"
						}) : n.fbt._("Submit", null, {
							hk: "4aU3dh"
						})))))
					}, this.renderWarning = e => r.a.createElement("div", {
						className: x.a.appealFormWarning
					}, r.a.createElement("div", {
						className: x.a.appealFormWarningHeader
					}, n.fbt._("{text}", [n.fbt._param("text", `${_[e]}`)], {
						hk: "1l5LDo"
					})))
				}
				componentWillUnmount() {
					this.isUnmounted = !0
				}
				render() {
					const {
						props: e,
						state: a
					} = this;
					if (!e.currentUser) return null;
					const t = e.currentUser.isFPR || !a.eligibleForAppeal;
					return r.a.createElement("div", {
						className: x.a.content
					}, r.a.createElement("h1", {
						className: x.a.appealPageHeader
					}, n.fbt._("Appeal suspension", null, {
						hk: "3LDNeF"
					})), a.appealSuccess ? this.renderConfirmationPage() : this.renderForm(t))
				}
			}
			a.default = Object(m.b)(F(N))
		},
		"./src/redditGQL/operations/AppealEligibility.json": function(e) {
			e.exports = JSON.parse('{"id":"5b6b7dbe1d77"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Appeal.d4ac328e6a9c94276af1.js.map