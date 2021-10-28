// https://www.redditstatic.com/desktop2x/UserDataRequestPage.284800a59070fcca90e1.js
// Retrieved at 10/28/2021, 5:10:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserDataRequestPage"], {
		"./src/reddit/actions/userDataRequest.ts": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "userDataRequestPageRequested", (function() {
				return r
			}));
			var s = a("./src/reddit/actions/pages/userDataRequest/index.ts");
			const r = () => async e => await e(s.d())
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
				return D
			})), a.d(t, "b", (function() {
				return g
			})), a.d(t, "c", (function() {
				return x
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/Input/index.tsx"),
				l = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				u = a.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.div("icon", u.a),
				p = i.a.textarea("textarea", u.a),
				h = i.a.span("Invalid", u.a);
			var b, D;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(D || (D = {}));
			const f = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && u.a.required, e.className, {
						[u.a.container]: !e.isTextarea,
						[u.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[u.a.mValid]: e.state === b.Valid,
							[u.a.mInvalid]: e.state === b.Invalid,
							[u.a.mWhiteField]: e.backgroundColorState === D.WhiteFields
						}
					})
				}, r.a.createElement("label", {
					className: Object(n.a)({
						[u.a.field]: !e.isTextarea,
						[u.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: u.a.label
				}, e.label), !!e.state && r.a.createElement(m, {
					className: Object(n.a)({
						[u.a.mValid]: e.state === b.Valid,
						[u.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && r.a.createElement(l.a, null), e.state === b.Invalid && r.a.createElement(h, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: i,
						label: l,
						onKeyDown: d,
						state: m,
						...p
					} = e;
					return r.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: l,
						state: m
					}, r.a.createElement(o.a, c({}, p, {
						className: Object(n.a)(u.a.input, u.a.control, {
							[u.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				x = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: i,
						label: o,
						onKeyDown: l,
						state: d,
						...m
					} = e;
					return r.a.createElement(f, {
						backgroundColorState: t,
						className: a,
						isRequired: i,
						label: o,
						state: d,
						isTextarea: !0
					}, r.a.createElement(p, c({}, m, {
						className: Object(n.a)({
							[u.a.mWhiteField]: e.backgroundColorState === D.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);

			function n(e) {
				const {
					children: t,
					className: a,
					onSubmit: s
				} = e;
				return r.a.createElement("form", {
					className: a,
					onSubmit: i(s)
				}, t)
			}
			const i = e => t => {
					if (!e) return;
					t.preventDefault();
					const a = t.target,
						s = o(a);
					e(s)
				},
				o = e => e && "form" === e.nodeName.toLowerCase() ? Array.from(e.elements).reduce((e, t) => (t.name && (e[t.name] = t.value), e), {}) : {}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(r);
			t.a = s.a.input("input", n.a)
		},
		"./src/reddit/pages/UserDataRequestPage/index.m.less": function(e, t, a) {
			e.exports = {
				content: "_3qJUY_gGVLANgFyCUSMc4L",
				errorMessageStyles: "_2krN_c_IhI8i9tJyXHq3J3",
				userDataRequestFormWarningHeader: "zMZ5U4ZlDkXw4CJY_lq5W",
				userDataRequestPageHeader: "l1ptB9qahyH73_VJ8vLZ7",
				userDataRequestForm: "_1tnfj0e8cSXS4NYaaAG74M",
				userDataRequestFormTitle: "Jq04zaRxl_x3sxdBXo7uY",
				userDataRequestFormTitleIcon: "_2mOleh8Vk2_FPmcvOcmJGk",
				userDataRequestFormDescription: "_EqpLn0dov-ZEPvLTZy8M",
				userDataRequestFormWarning: "_1BtGr13-2JKn6l-YFqh8_N",
				userDataRequestFormWarningParagraph: "_28wHDskugDqHcNJEaMd734",
				userDataRequestFormWarningText: "YAwXkX4-wjV-LnWY1cGpB",
				userDataRequestUsernameFormFieldSet: "dPmTVXMc8MFH3YAtjxmvA",
				userDataRequestExportRangeFormFieldSet: "_1f1KdpokD5JaT48H_OHcMB",
				labeledInput: "_3AaLCjDI5-rlHpgX1Skf3e",
				labeledInputDate: "_2xgBYwoPqPM2XCqQ9uy_S6",
				userDataRequestFormDatesContainer: "_1S3fGUEyXDQygXKiY3avW-",
				radioOption: "_25hdKk95uJ-eDbe2s6L9Ru",
				radioOptionCalendar: "RllePin3MMCNfNzrrFG1U",
				submitButtonPanel: "_11wnCqLRJitVdVSzlf5PcV",
				submitButton: "_32YvrGpW9-3Ak6P0BlU6Mb"
			}
		},
		"./src/reddit/pages/UserDataRequestPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, "PrivacyLawType", (function() {
				return P
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				d = a("./src/reddit/contexts/ApiContext.tsx"),
				u = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/controls/Form/index.tsx"),
				m = a("./src/reddit/controls/RadioInput/index.tsx"),
				p = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				h = a("./src/lib/makeGqlRequest/index.ts"),
				b = a("./src/redditGQL/operations/RequestUserDataExport.json");
			var D = (e, t) => Object(h.a)(e, {
				...b,
				variables: t
			});
			const f = () => "/message/inbox";
			var g, x = a("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				E = a("./src/reddit/models/Toast/index.ts");
			! function(e) {
				e.FROM_BEGINNING = "FROM_BEGINNING", e.BOUNDED = "BOUNDED"
			}(g || (g = {}));
			var R = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/reddit/selectors/userDataRequest.ts"),
				q = a("./node_modules/reselect/es/index.js"),
				v = a("./src/reddit/pages/UserDataRequestPage/index.m.less"),
				N = a.n(v);
			const y = Object(q.c)({
					currentUser: R.k,
					userDataExportEligibility: _.a,
					userDataRequestPageLoadingApiState: _.b
				}),
				S = Object(i.b)(y, e => ({
					showError: t => e(o.f({
						id: "requestUserDataExportErrorToast",
						kind: E.b.Error,
						text: t
					})),
					dismissErrorToast: () => e(o.g("requestUserDataExportErrorToast"))
				})),
				k = "2005-06-23",
				F = new Date,
				w = () => (new Date).toISOString().substr(0, 10),
				C = new Date(F.setDate(F.getDate() - 90)).toISOString().substr(0, 10);
			var P;
			! function(e) {
				e.NO_LAW_CITED = "", e.GDPR = "GDPR", e.CCPA = "CCPA", e.OTHER = "OTHER"
			}(P || (P = {}));
			const L = [{
				getName: () => s.fbt._("General Data Protection Regulation (GDPR)", null, {
					hk: "4srHXP"
				}),
				value: P.GDPR
			}, {
				getName: () => "California Consumer Privacy Act (CCPA)",
				value: P.CCPA
			}, {
				getName: () => s.fbt._("Other", null, {
					hk: "1g37Qn"
				}),
				value: P.OTHER
			}];
			class I extends n.a.Component {
				constructor(e) {
					super(e), this.onExportRangeChange = e => {
						this.setState({
							exportRange: e
						})
					}, this.onExportStartDateChange = e => {
						const t = e.currentTarget.value;
						this.setState({
							exportStartDate: t
						})
					}, this.onExportEndDateChange = e => {
						const t = e.currentTarget.value;
						this.setState({
							exportEndDate: t
						})
					}, this.addPrivacyLaw = e => {
						this.setState({
							privacyLawCited: e
						})
					}, this.getValidationError = () => {
						const {
							exportStartDate: e,
							exportEndDate: t,
							exportRange: a,
							minAllowedDate: r,
							maxAllowedDate: n
						} = this.state;
						if (a === g.BOUNDED) {
							if (!e) return s.fbt._("Please provide a start date", null, {
								hk: "3JjpuY"
							});
							if (!t) return s.fbt._("Please provide an end date", null, {
								hk: "2cxLTy"
							});
							const a = Date.parse(e);
							if (isNaN(a)) return s.fbt._("Please provide a valid start date", null, {
								hk: "43QT5x"
							});
							const i = Date.parse(t);
							if (isNaN(i)) return s.fbt._("Please provide a valid end date", null, {
								hk: "Nd5Th"
							});
							if (i < a) return s.fbt._("The start date must be before the end date", null, {
								hk: "17dRot"
							});
							if (i > Date.parse(n)) return s.fbt._("The latest allowed end date is today: {maxAllowedDate}", [s.fbt._param("maxAllowedDate", w())], {
								hk: "3sJbkJ"
							});
							if (a < Date.parse(r)) return s.fbt._("The earliest allowed start date is Reddit launch date: {minAllowedDate}", [s.fbt._param("minAllowedDate", k)], {
								hk: "9xD0i"
							})
						}
						return null
					}, this.onSubmit = async () => {
						if (this.props.dismissErrorToast(), this.state.dataRequestSubmissionPending) return;
						const e = this.getValidationError();
						if (e) return void this.props.showError(e);
						this.setState({
							dataRequestSubmissionPending: !0
						});
						const t = {
								exportRange: this.state.exportRange,
								startDate: this.state.exportStartDate,
								endDate: this.state.exportEndDate,
								privacyLawCited: this.state.privacyLawCited
							},
							a = await D(this.props.gqlContext(), {
								input: t
							});
						a.ok ? this.setState({
							dataRequestSubmissionPending: !1,
							dataRequestSubmissionSuccess: !0
						}) : (this.setState({
							dataRequestSubmissionError: a.error,
							dataRequestSubmissionPending: !1,
							dataRequestSubmissionSuccess: !1
						}), this.props.showError(s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})))
					}, this.renderWarning = () => n.a.createElement("div", {
						className: N.a.userDataRequestFormWarning
					}, n.a.createElement("div", {
						className: N.a.userDataRequestFormWarningHeader
					}, s.fbt._("Sorry, you can only submit one request every 30 days.", null, {
						hk: "iZdcg"
					})), n.a.createElement("div", {
						className: N.a.userDataRequestFormWarningText
					}, n.a.createElement("p", {
						className: N.a.userDataRequestFormWarningParagraph
					}, s.fbt._("It looks like we’ve already received this kind of request from you in the last 30 days. For an updated copy of your data, please come back after 30 days have passed since your last request.", null, {
						hk: "1Gc4vN"
					})), n.a.createElement("p", {
						className: N.a.userDataRequestFormWarningParagraph
					}, s.fbt._("If a download link in the message you receive expires, you can request an updated link by responding to the {messageLink} For other questions or issues relating to your download, you can contact us at {mailToLink} .", [s.fbt._param("messageLink", n.a.createElement("a", {
						className: N.a.link,
						target: "_blank",
						rel: "noopener noreferrer",
						href: f()
					}, " ", s.fbt._("message", null, {
						hk: "l6Y2C"
					}), ".")), s.fbt._param("mailToLink", n.a.createElement("a", {
						className: N.a.link,
						href: "mailto:redditdatarequests@reddit.com"
					}, " RedditDataRequests@reddit.com"))], {
						hk: "2MwRjU"
					})))), this.renderForm = e => n.a.createElement(n.a.Fragment, null, this.props.userDataRequestPageLoadingApiState.success && !this.props.userDataExportEligibility && this.renderWarning(), n.a.createElement(c.a, {
						className: N.a.userDataRequestForm,
						onSubmit: this.onSubmit
					}, n.a.createElement("div", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("Complete the form below to request a copy of data Reddit has about your Reddit account. Once submitted, please allow up to 30 days for us to process your request.", null, {
						hk: "2xcwXN"
					})), n.a.createElement("fieldset", {
						className: N.a.userDataRequestUsernameFormFieldSet
					}, n.a.createElement(l.b, {
						className: N.a.labeledInput,
						disabled: !0,
						contentEditable: !1,
						label: s.fbt._("Username", null, {
							hk: "44aXoH"
						}),
						value: this.props.currentUser.displayText
					})), n.a.createElement("div", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("What type of request is it?", null, {
						hk: "3tr3lF"
					})), n.a.createElement("fieldset", null, n.a.createElement(m.a, {
						value: this.state.privacyLawCited,
						name: "privacyLaws",
						onChange: this.addPrivacyLaw
					}, L.map(e => n.a.createElement(p.a, {
						key: e.value,
						className: N.a.radioOption,
						showButton: !0,
						value: e.value
					}, n.a.createElement("span", null, e.getName()))))), n.a.createElement("div", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("What's the range of data you'd like to request?", null, {
						hk: "4cmY07"
					})), n.a.createElement("fieldset", {
						className: N.a.userDataRequestExportRangeFormFieldSet,
						disabled: e
					}, n.a.createElement(m.a, {
						value: this.state.exportRange,
						name: "exportRange",
						onChange: this.onExportRangeChange,
						disabled: e
					}, n.a.createElement(p.a, {
						className: N.a.radioOption,
						showButton: !0,
						disabled: e,
						value: g.BOUNDED
					}, n.a.createElement("span", null, s.fbt._("I want data from a specific date range", null, {
						hk: "2RuMs1"
					})), n.a.createElement("div", {
						className: N.a.radioOptionCalendar
					}, this.state.exportRange === g.BOUNDED && n.a.createElement("fieldset", null, n.a.createElement("div", {
						className: N.a.userDataRequestFormDatesContainer
					}, s.fbt._("{Start date} to {End date}", [s.fbt._param("Start date", n.a.createElement(l.b, {
						className: N.a.labeledInputDate,
						label: s.fbt._("Start date", null, {
							hk: "2xsMsG"
						}),
						onChange: this.onExportStartDateChange,
						disabled: e,
						name: "startDate",
						type: "date",
						min: this.state.minAllowedDate,
						value: this.state.exportStartDate
					})), s.fbt._param("End date", n.a.createElement(l.b, {
						className: N.a.labeledInputDate,
						label: s.fbt._("End date", null, {
							hk: "FSWrX"
						}),
						name: "endDate",
						onChange: this.onExportEndDateChange,
						disabled: e,
						type: "date",
						max: this.state.maxAllowedDate,
						value: this.state.exportEndDate
					}))], {
						hk: "nSQfF"
					}))))), n.a.createElement(p.a, {
						className: N.a.radioOption,
						showButton: !0,
						disabled: e,
						value: g.FROM_BEGINNING
					}, n.a.createElement("span", null, s.fbt._("I want data from my full time at Reddit", null, {
						hk: "6aST3"
					}))))), n.a.createElement("fieldset", {
						className: N.a.submitButtonPanel
					}, n.a.createElement(u.k, {
						className: N.a.submitButton,
						disabled: e
					}, s.fbt._("Submit", null, {
						hk: "4aU3dh"
					}))))), this.renderConfirmationPage = () => n.a.createElement(c.a, {
						className: N.a.userDataRequestForm
					}, n.a.createElement("div", {
						className: N.a.userDataRequestFormTitle
					}, s.fbt._("Request received", null, {
						hk: "3v2nys"
					}), n.a.createElement(x.a, {
						className: N.a.userDataRequestFormTitleIcon
					})), n.a.createElement("p", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("Thanks, we've received your request.", null, {
						hk: "2oEtI2"
					})), n.a.createElement("p", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("Once we've processed your request, a temporary download link will be sent to your Reddit {redditMessageLink} You will be able to download a copy of your data using the link for approximately seven days from the time you receive it.", [s.fbt._param("redditMessageLink", n.a.createElement("a", {
						className: N.a.link,
						target: "_blank",
						rel: "noopener noreferrer",
						href: f()
					}, " ", s.fbt._("message inbox", null, {
						hk: "1uMHSW"
					}), "."))], {
						hk: "2BtAFG"
					})), n.a.createElement("p", {
						className: N.a.userDataRequestFormDescription
					}, s.fbt._("If a download link in the message you receive expires, you can request an updated link by responding to the {redditMessageLink} For other questions or issues relating to your download, you can contact us at {mailToLink}", [s.fbt._param("redditMessageLink", n.a.createElement("a", {
						className: N.a.link,
						target: "_blank",
						rel: "noopener noreferrer",
						href: f()
					}, " ", s.fbt._("message", null, {
						hk: "3D4f7Z"
					}), ".")), s.fbt._param("mailToLink", n.a.createElement("a", {
						className: N.a.link,
						href: "mailto:redditdatarequests@reddit.com"
					}, " RedditDataRequests@reddit.com."))], {
						hk: "3h6wSQ"
					}))), this.state = {
						dataRequestSubmissionError: null,
						dataRequestSubmissionPending: !1,
						dataRequestSubmissionSuccess: !1,
						exportRange: g.BOUNDED,
						exportStartDate: C,
						exportEndDate: w(),
						minAllowedDate: k,
						maxAllowedDate: w(),
						privacyLawCited: P.NO_LAW_CITED
					}
				}
				render() {
					if (!this.props.currentUser) return null;
					const e = this.state.dataRequestSubmissionPending || !this.props.userDataExportEligibility || !this.props.userDataRequestPageLoadingApiState.success || this.state.privacyLawCited === P.NO_LAW_CITED;
					return n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement("div", {
						className: N.a.content
					}, n.a.createElement("h1", {
						className: N.a.userDataRequestPageHeader
					}, s.fbt._("Request your Reddit data", null, {
						hk: "1eLifT"
					})), this.state.dataRequestSubmissionSuccess ? this.renderConfirmationPage() : this.renderForm(e)))
				}
			}
			t.default = Object(d.b)(S(I))
		},
		"./src/redditGQL/operations/RequestUserDataExport.json": function(e) {
			e.exports = JSON.parse('{"id":"f3bf387093f2"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UserDataRequestPage.284800a59070fcca90e1.js.map