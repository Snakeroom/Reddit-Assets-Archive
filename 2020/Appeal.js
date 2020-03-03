// https://www.redditstatic.com/desktop2x/Appeal.5a19bb8e87c13ef835b4.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
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
				return E
			})), t.d(a, "a", (function() {
				return x
			})), t.d(a, "b", (function() {
				return y
			})), t.d(a, "c", (function() {
				return C
			}));
			t("./node_modules/core-js/modules/es6.symbol.js");
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/lib/lessComponent.tsx"),
				i = t("./src/reddit/controls/Input/index.tsx"),
				c = t("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				o = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = t.n(o);

			function m() {
				return (m = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, a) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && a.indexOf(n) < 0 && (t[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var l = 0;
					for (n = Object.getOwnPropertySymbols(e); l < n.length; l++) a.indexOf(n[l]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[l]) && (t[n[l]] = e[n[l]])
				}
				return t
			};
			const u = s.a.div("icon", d.a),
				h = s.a.textarea("textarea", d.a),
				b = s.a.span("Invalid", d.a);
			var E, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(E || (E = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const g = e => l.a.createElement("div", {
					className: Object(r.a)(e.isRequired && d.a.required, e.className, Object.assign({
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[d.a.mValid]: e.state === E.Valid,
						[d.a.mInvalid]: e.state === E.Invalid,
						[d.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
					}))
				}, l.a.createElement("label", {
					className: Object(r.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && l.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && l.a.createElement(u, {
					className: Object(r.a)({
						[d.a.mValid]: e.state === E.Valid,
						[d.a.mInvalid]: e.state === E.Invalid
					})
				}, e.state === E.Valid && l.a.createElement(c.a, null), e.state === E.Invalid && l.a.createElement(b, null, "!")))),
				y = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: n,
						isRequired: s,
						label: c,
						onKeyDown: o,
						state: u
					} = e, h = p(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return l.a.createElement(g, {
						backgroundColorState: a,
						className: t,
						isRequired: s,
						label: c,
						state: u
					}, l.a.createElement(i.a, m({}, h, {
						className: Object(r.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: o
					})))
				},
				C = e => {
					const {
						backgroundColorState: a,
						className: t,
						inputRef: n,
						isRequired: s,
						label: i,
						onKeyDown: c,
						state: o
					} = e, u = p(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return l.a.createElement(g, {
						backgroundColorState: a,
						className: t,
						isRequired: s,
						label: i,
						state: o,
						isTextarea: !0
					}, l.a.createElement(h, m({}, u, {
						className: Object(r.a)({
							[d.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: c
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				l = t.n(n);
			a.a = e => {
				const {
					children: a,
					className: t,
					onSubmit: n
				} = e;
				return l.a.createElement("form", {
					className: t,
					onSubmit: r(n)
				}, a)
			};
			const r = e => a => {
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
				greyTextStyle: "_1JsPvuoKL7t2H6bwscE3C5",
				appealFormFieldComment: "_2BCBcOEl4lz1iEQLeeZ--Q",
				textAreaCounter: "oDzPzRPaalkLn7b9I0WXa",
				errorMessageStyles: "_7DBxP7xsUjt3k2POTC02T",
				appealFormWarningHeader: "SUhwEVSuhaFJrLRaRK0aB",
				errorMessage: "_2hADWszBQHUc54oD1_AN1D",
				checkboxErrorMessage: "_2CitNZczWt1CQbnCse_t-9",
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
			var n = t("./node_modules/react/index.js"),
				l = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				s = t("./node_modules/reselect/es/index.js"),
				i = t("./src/lib/validateEmail/index.ts"),
				c = t("./src/reddit/pages/AppealPage/index.m.less"),
				o = t.n(c),
				d = t("./src/reddit/actions/users.ts"),
				m = t("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				p = t("./src/reddit/contexts/ApiContext.tsx"),
				u = t("./src/reddit/controls/Button/index.tsx"),
				h = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				b = t("./src/reddit/controls/Form/index.tsx"),
				E = t("./src/lib/constants/index.ts"),
				x = t("./src/lib/makeApiRequest/index.ts"),
				g = t("./src/lib/omitHeaders/index.ts"),
				y = t("./src/reddit/constants/headers.ts"),
				C = t("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const f = (e, a, t) => Object(x.b)(Object(g.a)(e, [y.a]), {
					method: E.cb.POST,
					endpoint: Object(C.a)("".concat(e.apiUrl, "/api/appeal")),
					data: {
						api_type: "json",
						description: a,
						email: t
					}
				}),
				v = e => Object(x.b)(Object(g.a)(e, [y.a]), {
					method: E.cb.GET,
					endpoint: Object(C.a)("".concat(e.apiUrl, "/api/eligible_for_appeal")),
					data: {
						api_type: "json"
					}
				});
			var F = t("./src/reddit/i18n/components.tsx"),
				_ = t("./src/reddit/i18n/utils.ts"),
				N = t("./src/reddit/selectors/user.ts");
			const k = "https://www.redditinc.com/policies/content-policy",
				S = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/suspensions",
				w = Object(s.c)({
					currentUser: N.i
				}),
				D = Object(r.b)(w, e => ({
					logoutUser: () => e(Object(d.s)()),
					onSubmitAppeal: (a, t) => e(f(a, t))
				}));
			class j extends l.a.Component {
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
						const e = await v(this.props.apiContext());
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
							emailValid: Object(i.a)(a, !0)
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
							const t = await f(e.apiContext(), a.description, a.email ? a.email : void 0);
							t.ok ? this.setState({
								appealSuccess: !0
							}) : this.setState({
								appealError: t.error,
								appealPending: !1
							})
						}
					}, this.getCheckboxText = () => l.a.createElement("label", null, l.a.createElement(F.c, null, "I have read the "), l.a.createElement("a", {
						className: o.a.link,
						target: "_blank",
						href: k
					}, l.a.createElement(F.c, null, "Reddit Content Policy")), l.a.createElement(F.c, null, " and the "), l.a.createElement("a", {
						className: o.a.link,
						target: "_blank",
						href: S
					}, l.a.createElement(F.c, null, "Suspensions help article")), l.a.createElement(F.c, null, ".")), this.renderConfirmationPage = () => l.a.createElement(b.a, {
						className: o.a.appealForm
					}, l.a.createElement("div", {
						className: o.a.appealFormHeader
					}, l.a.createElement(F.c, null, "Appeal received")), l.a.createElement("div", {
						className: o.a.appealFormDescription
					}, l.a.createElement(F.c, null, "Thanks for submitting your request. We will review your submission and be in touch if the status of your account's restriction is changed. Please note that suspensions which were correctly issued will not be reversed or lifted prematurely."))), this.renderForm = e => {
						const {
							props: a,
							state: t
						} = this, {
							canShowWarning: n,
							description: r,
							descriptionDirty: s,
							email: i,
							emailDirty: c,
							emailValid: d,
							policyCheckboxChecked: p,
							policyCheckboxDirty: E,
							submitWasClicked: x
						} = t;
						return l.a.createElement(l.a.Fragment, null, n && e && this.renderWarning(), l.a.createElement(b.a, {
							className: o.a.appealForm,
							onSubmit: this.handleSubmit
						}, l.a.createElement("div", {
							className: o.a.appealFormHeader
						}, l.a.createElement(F.c, null, "Submit an appeal")), l.a.createElement("div", {
							className: o.a.appealFormDescription
						}, l.a.createElement(F.c, null, "If you have reviewed the "), l.a.createElement("a", {
							className: o.a.link,
							target: "_blank",
							href: k
						}, l.a.createElement(F.c, null, "Reddit Content Policy")), l.a.createElement(F.c, null, " and our "), l.a.createElement("a", {
							className: o.a.link,
							target: "_blank",
							href: S
						}, l.a.createElement(F.c, null, "Suspensions help article")), l.a.createElement(F.c, null, " and believe your account has been wrongfully suspended, submit this form and we'll review your request.")), l.a.createElement("fieldset", {
							className: o.a.appealFormFieldSet
						}, l.a.createElement(m.b, {
							className: o.a.labeledInput,
							disabled: !0,
							label: Object(_.c)("Username"),
							state: x ? m.d.Valid : void 0,
							value: a.currentUser.displayText
						}), l.a.createElement("div", {
							className: o.a.appealFormFieldComment
						}, l.a.createElement(F.c, null, "You can only appeal the account that you are logged into. If you are having trouble logging into another account, troubleshoot in our "), l.a.createElement("a", {
							className: o.a.link,
							href: "https://www.reddithelp.com/",
							target: "_blank"
						}, l.a.createElement(F.c, null, "Help Center")), l.a.createElement(F.c, null, "."))), a.currentUser.hasVerifiedEmail ? null : l.a.createElement("fieldset", {
							className: o.a.appealFormFieldSet
						}, l.a.createElement(m.b, {
							className: o.a.labeledInput,
							disabled: e || t.appealPending,
							label: Object(_.c)("Email address (optional)"),
							maxLength: 100,
							onChange: this.handleEmailChange,
							state: !i || c ? void 0 : d ? m.d.Valid : m.d.Invalid,
							type: "email",
							value: i
						}), d || c ? null : l.a.createElement("div", {
							className: o.a.errorMessage
						}, l.a.createElement(F.c, null, "Enter a valid email address")), l.a.createElement("div", {
							className: o.a.appealFormFieldComment
						}, l.a.createElement(F.c, null, "We will use this email address if we need to contact you for additional information."))), l.a.createElement("fieldset", {
							className: o.a.appealFormFieldSet
						}, l.a.createElement("div", {
							className: o.a.appealFormFieldDescription
						}, l.a.createElement(F.c, null, "Help us understand why you have not violated our policy and have been suspended in error.")), l.a.createElement("div", {
							className: o.a.appealFormField
						}, l.a.createElement(m.c, {
							className: o.a.labeledTextArea,
							disabled: e || t.appealPending,
							label: Object(_.c)("Brief description"),
							maxLength: 250,
							onChange: this.handleDescriptionChange,
							state: s ? void 0 : r ? m.d.Valid : m.d.Invalid,
							value: r
						}), !r && !s && l.a.createElement("div", {
							className: o.a.errorMessage
						}, l.a.createElement(F.c, null, "Enter a brief description")), l.a.createElement("div", {
							className: o.a.textAreaCounter
						}, Object(_.c)("".concat(Object(_.b)("length", r.length), "/").concat(Object(_.b)("maxLength", 250)))))), l.a.createElement("div", {
							className: o.a.policyCheckboxWrapper
						}, l.a.createElement(h.a, {
							className: o.a.policyCheckbox,
							disabled: e || t.appealPending,
							isSelected: p,
							text: this.getCheckboxText(),
							onClick: this.handlePolicyCheckboxClick
						}), p || E ? null : l.a.createElement("div", {
							className: o.a.checkboxErrorMessage
						}, l.a.createElement(F.c, null, "Required"))), t.appealError && t.appealError.fields && t.appealError.fields.map(e => l.a.createElement("div", {
							className: o.a.errorMessage
						}, e.msg)), l.a.createElement("fieldset", {
							className: o.a.submitButtonPanel
						}, l.a.createElement(u.f, {
							className: o.a.submitButton,
							disabled: e || t.appealPending
						}, t.appealPending ? l.a.createElement(F.c, null, "Pending") : l.a.createElement(F.c, null, "Submit")))))
					}, this.renderWarning = () => l.a.createElement("div", {
						className: o.a.appealFormWarning
					}, l.a.createElement("div", {
						className: o.a.appealFormWarningHeader
					}, l.a.createElement(F.c, null, "You cannot submit an appeal")), l.a.createElement("div", {
						className: o.a.appealFormWarningText
					}, l.a.createElement(F.c, null, "Your account is currently neither suspended nor restricted. If you are trying to submit an appeal for another account that is suspended or restricted, please "), l.a.createElement("a", {
						className: o.a.link,
						href: "#",
						onClick: e => {
							this.props.logoutUser(), e.preventDefault()
						}
					}, l.a.createElement(F.c, null, "log out")), l.a.createElement(F.c, null, " and log in to that account.")), l.a.createElement("div", {
						className: o.a.appealFormWarningFooter
					}, l.a.createElement(F.c, null, "For other account issues, please visit our "), l.a.createElement("a", {
						className: o.a.link,
						href: "https://www.reddithelp.com/en/categories/using-reddit",
						target: "_blank"
					}, l.a.createElement(F.c, null, "Help Center")), "."))
				}
				render() {
					const {
						props: e,
						state: a
					} = this;
					if (!e.currentUser) return null;
					const t = e.currentUser.isFPR || !a.eligibleForAppeal;
					return l.a.createElement("div", {
						className: o.a.content
					}, l.a.createElement("h1", {
						className: o.a.appealPageHeader
					}, l.a.createElement(F.c, null, "Appeal suspension")), a.appealSuccess ? this.renderConfirmationPage() : this.renderForm(t))
				}
			}
			a.default = Object(p.b)(D(j))
		}
	}
]);
//# sourceMappingURL=Appeal.5a19bb8e87c13ef835b4.js.map