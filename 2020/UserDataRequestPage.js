// https://www.redditstatic.com/desktop2x/UserDataRequestPage.debd52d72d4727d724a7.js
// Retrieved at 6/30/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				return f
			})), a.d(t, "a", (function() {
				return x
			})), a.d(t, "b", (function() {
				return D
			})), a.d(t, "c", (function() {
				return E
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/Input/index.tsx"),
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
			var m = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
				}
				return a
			};
			const p = o.a.div("icon", u.a),
				b = o.a.textarea("textarea", u.a),
				h = o.a.span("Invalid", u.a);
			var f, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const g = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && u.a.required, e.className, Object.assign({
						[u.a.container]: !e.isTextarea,
						[u.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[u.a.mValid]: e.state === f.Valid,
						[u.a.mInvalid]: e.state === f.Invalid,
						[u.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
					}))
				}, r.a.createElement("label", {
					className: Object(n.a)({
						[u.a.field]: !e.isTextarea,
						[u.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: u.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(n.a)({
						[u.a.mValid]: e.state === f.Valid,
						[u.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && r.a.createElement(l.a, null), e.state === f.Invalid && r.a.createElement(h, null, "!")))),
				D = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(g, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: l,
						state: p
					}, r.a.createElement(i.a, c({}, b, {
						className: Object(n.a)(u.a.input, u.a.control, {
							[u.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				},
				E = e => {
					const {
						backgroundColorState: t,
						className: a,
						inputRef: s,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d
					} = e, p = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(g, {
						backgroundColorState: t,
						className: a,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(b, c({}, p, {
						className: Object(n.a)({
							[u.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
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
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				d = a("./src/reddit/contexts/ApiContext.tsx"),
				u = a("./src/reddit/controls/Button/index.tsx"),
				c = a("./src/reddit/controls/Form/index.tsx"),
				m = a("./src/reddit/controls/RadioInput/index.tsx"),
				p = a("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				b = a("./src/graphql/operations/RequestUserDataExport.json"),
				h = a("./src/lib/makeGqlRequest/index.ts"),
				f = (e, t) => Object(h.a)(e, Object.assign({}, b, {
					variables: t
				}));
			const x = () => "/message/inbox";
			var g, D = a("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				E = a("./src/reddit/models/Toast/index.ts");
			! function(e) {
				e.FROM_BEGINNING = "FROM_BEGINNING", e.BOUNDED = "BOUNDED"
			}(g || (g = {}));
			var R = a("./src/reddit/selectors/user.ts"),
				_ = a("./src/reddit/selectors/userDataRequest.ts"),
				q = a("./node_modules/reselect/es/index.js"),
				S = a("./src/reddit/pages/UserDataRequestPage/index.m.less"),
				N = a.n(S);
			const v = Object(q.c)({
					currentUser: R.i,
					userDataExportEligibility: _.a,
					userDataRequestPageLoadingApiState: _.b
				}),
				y = Object(o.b)(v, e => ({
					showError: t => e(i.e({
						id: "requestUserDataExportErrorToast",
						kind: E.b.Error,
						text: t
					})),
					dismissErrorToast: () => e(i.f("requestUserDataExportErrorToast"))
				})),
				k = "2005-06-23",
				F = () => (new Date).toISOString().substr(0, 10);
			class w extends n.a.Component {
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
							const o = Date.parse(t);
							if (isNaN(o)) return s.fbt._("Please provide a valid end date", null, {
								hk: "Nd5Th"
							});
							if (o < a) return s.fbt._("The start date must be before the end date", null, {
								hk: "17dRot"
							});
							if (o > Date.parse(n)) return s.fbt._("The latest allowed end date is today: {maxAllowedDate}", [s.fbt._param("maxAllowedDate", F())], {
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
							a = await f(this.props.gqlContext(), {
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
						href: x()
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
						value: g.FROM_BEGINNING
					}, n.a.createElement("span", null, s.fbt._("I want data from my full time at Reddit", null, {
						hk: "6aST3"
					}))), n.a.createElement(p.a, {
						className: N.a.radioOption,
						showButton: !0,
						disabled: e,
						value: g.BOUNDED
					}, n.a.createElement("span", null, s.fbt._("I want data from a specific date range", null, {
						hk: "2RuMs1"
					}))))), this.state.exportRange === g.BOUNDED && n.a.createElement("fieldset", null, n.a.createElement("div", {
						className: N.a.userDataRequestFormDatesContainer
					}, n.a.createElement(l.b, {
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
					}), n.a.createElement("span", null, s.fbt._("to", null, {
						hk: "RQZBx"
					})), n.a.createElement(l.b, {
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
					}))), n.a.createElement("fieldset", {
						className: N.a.submitButtonPanel
					}, n.a.createElement(u.f, {
						className: N.a.submitButton,
						disabled: e
					}, s.fbt._("Submit", null, {
						hk: "3BVOia"
					}))))), this.renderConfirmationPage = () => n.a.createElement(c.a, {
						className: N.a.userDataRequestForm
					}, n.a.createElement("div", {
						className: N.a.userDataRequestFormTitle
					}, s.fbt._("Request received", null, {
						hk: "3v2nys"
					}), n.a.createElement(D.a, {
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
						href: x()
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
						href: x()
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
						exportRange: g.FROM_BEGINNING,
						exportStartDate: k,
						exportEndDate: F(),
						minAllowedDate: k,
						maxAllowedDate: F()
					}
				}
				render() {
					if (!this.props.currentUser) return null;
					const e = this.state.dataRequestSubmissionPending || !this.props.userDataExportEligibility || !this.props.userDataRequestPageLoadingApiState.success;
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
			t.default = Object(d.b)(y(w))
		}
	}
]);
//# sourceMappingURL=UserDataRequestPage.debd52d72d4727d724a7.js.map