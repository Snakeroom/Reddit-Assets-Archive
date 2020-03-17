// https://www.redditstatic.com/desktop2x/UserDataRequestPage.709c7c2445859e1dacaf.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UserDataRequestPage"], {
		"./src/graphql/operations/RequestUserDataExport.json": function(e) {
			e.exports = JSON.parse('{"id":"f3bf387093f2"}')
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
				return h
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return g
			})), a.d(t, "c", (function() {
				return R
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				l = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/Input/index.tsx"),
				i = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
				}
				return a
			};
			const p = l.a.div("icon", c.a),
				b = l.a.textarea("textarea", c.a),
				E = l.a.span("Invalid", c.a);
			var h, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(h || (h = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const D = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === h.Valid,
						[c.a.mInvalid]: e.state === h.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
					}))
				}, r.a.createElement("label", {
					className: Object(n.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(n.a)({
						[c.a.mValid]: e.state === h.Valid,
						[c.a.mInvalid]: e.state === h.Invalid
					})
				}, e.state === h.Valid && r.a.createElement(i.a, null), e.state === h.Invalid && r.a.createElement(E, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: l,
						label: i,
						onKeyDown: d,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(D, {
						backgroundColorState: t,
						className: a,
						isRequired: l,
						label: i,
						state: p
					}, r.a.createElement(o.a, u({}, b, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				R = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: l,
						label: o,
						onKeyDown: i,
						state: d
					} = e, p = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(D, {
						backgroundColorState: t,
						className: a,
						isRequired: l,
						label: o,
						state: d,
						isTextarea: !0
					}, r.a.createElement(b, u({}, p, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: i
					})))
				}
		},
		"./src/reddit/controls/Form/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => {
				const {
					children: t,
					className: a,
					onSubmit: s
				} = e;
				return r.a.createElement("form", {
					className: a,
					onSubmit: n(s)
				}, t)
			};
			const n = e => t => {
					if (!e) return;
					t.preventDefault();
					const a = t.target,
						s = l(a);
					e(s)
				},
				l = e => e && "form" === e.nodeName.toLowerCase() ? Array.from(e.elements).reduce((e, t) => (t.name && (e[t.name] = t.value), e), {}) : {}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(r);
			t.a = s.a.input("input", n.a)
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
				submitButtonPanel: "_11wnCqLRJitVdVSzlf5PcV",
				submitButton: "_32YvrGpW9-3Ak6P0BlU6Mb"
			}
		},
		"./src/reddit/pages/UserDataRequestPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				d = a("./src/reddit/contexts/ApiContext.tsx"),
				c = a("./src/reddit/controls/Button/index.tsx"),
				u = a("./src/reddit/controls/Form/index.tsx"),
				m = a("./src/reddit/controls/RadioInput/index.tsx"),
				p = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = a("./src/graphql/operations/RequestUserDataExport.json"),
				E = a("./src/lib/makeGqlRequest/index.ts"),
				h = (e, t) => Object(E.a)(e, Object.assign({}, b, {
					variables: t
				}));
			const x = () => "/message/inbox";
			var D, g = a("./src/reddit/i18n/components.tsx"),
				R = a("./src/reddit/i18n/utils.ts"),
				f = a("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				q = a("./src/reddit/models/Toast/index.ts");
			! function(e) {
				e.FROM_BEGINNING = "FROM_BEGINNING", e.BOUNDED = "BOUNDED"
			}(D || (D = {}));
			var y = a("./src/reddit/selectors/user.ts"),
				N = a("./src/reddit/selectors/userDataRequest.ts"),
				v = a("./node_modules/reselect/es/index.js"),
				S = a("./src/reddit/pages/UserDataRequestPage/index.m.less"),
				_ = a.n(S);
			const F = Object(v.c)({
					currentUser: y.i,
					userDataExportEligibility: N.a,
					userDataRequestPageLoadingApiState: N.b
				}),
				w = Object(l.b)(F, e => ({
					showError: t => e(o.e({
						id: "requestUserDataExportErrorToast",
						kind: q.b.Error,
						text: t
					})),
					dismissErrorToast: () => e(o.f("requestUserDataExportErrorToast"))
				})),
				k = "2005-06-23",
				C = () => (new Date).toISOString().substr(0, 10);
			class O extends n.a.Component {
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
					}, this.getValidationError = () => {
						const {
							exportStartDate: e,
							exportEndDate: t,
							exportRange: a,
							minAllowedDate: r,
							maxAllowedDate: n
						} = this.state;
						if (a === D.BOUNDED) {
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
							const l = Date.parse(t);
							if (isNaN(l)) return s.fbt._("Please provide a valid end date", null, {
								hk: "Nd5Th"
							});
							if (l < a) return s.fbt._("The start date must be before the end date", null, {
								hk: "17dRot"
							});
							if (l > Date.parse(n)) return s.fbt._("The latest allowed end date is today: {maxAllowedDate}", [s.fbt._param("maxAllowedDate", C())], {
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
								endDate: this.state.exportEndDate
							},
							a = await h(this.props.gqlContext(), {
								input: t
							});
						a.ok ? this.setState({
							dataRequestSubmissionPending: !1,
							dataRequestSubmissionSuccess: !0
						}) : (this.setState({
							dataRequestSubmissionError: a.error,
							dataRequestSubmissionPending: !1,
							dataRequestSubmissionSuccess: !1
						}), this.props.showError(Object(R.c)("Something went wrong")))
					}, this.renderWarning = () => n.a.createElement("div", {
						className: _.a.userDataRequestFormWarning
					}, n.a.createElement("div", {
						className: _.a.userDataRequestFormWarningHeader
					}, n.a.createElement(g.c, null, "Sorry, you can only submit one request every 30 days.")), n.a.createElement("div", {
						className: _.a.userDataRequestFormWarningText
					}, n.a.createElement("p", {
						className: _.a.userDataRequestFormWarningParagraph
					}, n.a.createElement(g.c, null, "It looks like we’ve already received this kind of request from you in the last 30 days. For an updated copy of your data, please come back after 30 days have passed since your last request.")), n.a.createElement("p", {
						className: _.a.userDataRequestFormWarningParagraph
					}, n.a.createElement(g.c, null, "If a download link in the message you receive expires, you can request an updated link by responding to the"), n.a.createElement("a", {
						className: _.a.link,
						target: "_blank",
						href: x()
					}, n.a.createElement(g.c, null, " message ")), n.a.createElement(g.c, null, "For other questions or issues relating to your download, you can contact us at"), n.a.createElement("a", {
						className: _.a.link,
						href: "mailto:redditdatarequests@reddit.com"
					}, n.a.createElement(g.c, null, " RedditDataRequests@reddit.com"), ".")))), this.renderForm = e => n.a.createElement(n.a.Fragment, null, this.props.userDataRequestPageLoadingApiState.success && !this.props.userDataExportEligibility && this.renderWarning(), n.a.createElement(u.a, {
						className: _.a.userDataRequestForm,
						onSubmit: this.onSubmit
					}, n.a.createElement("div", {
						className: _.a.userDataRequestFormDescription
					}, n.a.createElement(g.c, null, "Complete the form below to request a copy of data Reddit has about your Reddit account. Once submitted, please allow up to 30 days for us to process your request.")), n.a.createElement("fieldset", {
						className: _.a.userDataRequestUsernameFormFieldSet
					}, n.a.createElement(i.b, {
						className: _.a.labeledInput,
						disabled: !0,
						contentEditable: !1,
						label: Object(R.c)("Username"),
						value: this.props.currentUser.displayText
					})), n.a.createElement("fieldset", {
						className: _.a.userDataRequestExportRangeFormFieldSet,
						disabled: e
					}, n.a.createElement(m.a, {
						value: this.state.exportRange,
						name: "exportRange",
						onChange: this.onExportRangeChange,
						disabled: e
					}, n.a.createElement(p.a, {
						className: _.a.radioOption,
						showButton: !0,
						disabled: e,
						value: D.FROM_BEGINNING
					}, n.a.createElement("span", null, n.a.createElement(g.c, null, "I want data from my full time at Reddit"))), n.a.createElement(p.a, {
						className: _.a.radioOption,
						showButton: !0,
						disabled: e,
						value: D.BOUNDED
					}, n.a.createElement("span", null, n.a.createElement(g.c, null, "I want data from a specific date range"))))), this.state.exportRange === D.BOUNDED && n.a.createElement("fieldset", null, n.a.createElement("div", {
						className: _.a.userDataRequestFormDatesContainer
					}, n.a.createElement(i.b, {
						className: _.a.labeledInputDate,
						label: Object(R.c)("Start date"),
						onChange: this.onExportStartDateChange,
						disabled: e,
						name: "startDate",
						type: "date",
						min: this.state.minAllowedDate,
						value: this.state.exportStartDate
					}), n.a.createElement("span", null, n.a.createElement(g.c, null, "to")), n.a.createElement(i.b, {
						className: _.a.labeledInputDate,
						label: Object(R.c)("End date"),
						name: "endDate",
						onChange: this.onExportEndDateChange,
						disabled: e,
						type: "date",
						max: this.state.maxAllowedDate,
						value: this.state.exportEndDate
					}))), n.a.createElement("fieldset", {
						className: _.a.submitButtonPanel
					}, n.a.createElement(c.f, {
						className: _.a.submitButton,
						disabled: e
					}, n.a.createElement(g.c, null, "Submit"))))), this.renderConfirmationPage = () => n.a.createElement(u.a, {
						className: _.a.userDataRequestForm
					}, n.a.createElement("div", {
						className: _.a.userDataRequestFormTitle
					}, n.a.createElement(g.c, null, "Request received"), n.a.createElement(f.a, {
						className: _.a.userDataRequestFormTitleIcon
					})), n.a.createElement("p", {
						className: _.a.userDataRequestFormDescription
					}, n.a.createElement(g.c, null, "Thanks, we've received your request.")), n.a.createElement("p", {
						className: _.a.userDataRequestFormDescription
					}, n.a.createElement(g.c, null, "Once we've processed your request, a temporary download link will be sent to your Reddit"), n.a.createElement("a", {
						className: _.a.link,
						target: "_blank",
						href: x()
					}, n.a.createElement(g.c, null, " message inbox ")), n.a.createElement(g.c, null, ".You will be able to download a copy of your data using the link for approximately seven days from the time you receive it.")), n.a.createElement("p", {
						className: _.a.userDataRequestFormDescription
					}, n.a.createElement(g.c, null, "If a download link in the message you receive expires, you can request an updated link by responding to the"), n.a.createElement("a", {
						className: _.a.link,
						target: "_blank",
						href: x()
					}, n.a.createElement(g.c, null, " message ")), n.a.createElement(g.c, null, "For other questions or issues relating to your download, you can contact us at"), n.a.createElement("a", {
						className: _.a.link,
						href: "mailto:redditdatarequests@reddit.com"
					}, n.a.createElement(g.c, null, " RedditDataRequests@reddit.com"), "."))), this.state = {
						dataRequestSubmissionError: null,
						dataRequestSubmissionPending: !1,
						dataRequestSubmissionSuccess: !1,
						exportRange: D.FROM_BEGINNING,
						exportStartDate: k,
						exportEndDate: C(),
						minAllowedDate: k,
						maxAllowedDate: C()
					}
				}
				render() {
					if (!this.props.currentUser) return null;
					const e = this.state.dataRequestSubmissionPending || !this.props.userDataExportEligibility || !this.props.userDataRequestPageLoadingApiState.success;
					return n.a.createElement("div", {
						className: this.props.className
					}, n.a.createElement("div", {
						className: _.a.content
					}, n.a.createElement("h1", {
						className: _.a.userDataRequestPageHeader
					}, n.a.createElement(g.c, null, "Request your Reddit data")), this.state.dataRequestSubmissionSuccess ? this.renderConfirmationPage() : this.renderForm(e)))
				}
			}
			t.default = Object(d.b)(w(O))
		}
	}
]);
//# sourceMappingURL=UserDataRequestPage.709c7c2445859e1dacaf.js.map