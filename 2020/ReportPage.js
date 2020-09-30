// https://www.redditstatic.com/desktop2x/ReportPage.7b99e998cca305b37635.js
// Retrieved at 9/30/2020, 6:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportPage"], {
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const a = {
					backgroundColor: n("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				o = () => null;
			t.b = Object(s.a)({
				ErrorComponent: o,
				getComponent: () => Object(r.a)(() => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/ReportPage/AdditionalInfoInput/index.m.less": function(e, t, n) {
			e.exports = {
				AdditionalInfoCheckbox: "Sn4k24mpI2Iqd0y6hRfHR",
				additionalInfoCheckbox: "Sn4k24mpI2Iqd0y6hRfHR",
				AdditionalInfoCheckboxes: "Qy02kFHW1Wxlm6NzBRRL3",
				additionalInfoCheckboxes: "Qy02kFHW1Wxlm6NzBRRL3"
			}
		},
		"./src/reddit/components/ReportPage/ChildReasons/index.m.less": function(e, t, n) {
			e.exports = {
				closed: "_3ceGFHIChVwTgcPVv-10o8",
				open: "_1xtJcrCcTp-WmvdZXwBe7_",
				radioOptionsSectionHeader: "_1iVZ-Oi1fUebnVeLhxSMON",
				subSection: "_11KObJbK2W8HDf6XHEIpE7",
				topLevelSubSection: "_38pCQzUNJi96mv2Pcmiy10",
				Component: "_2In1yeZDKolFJ8jnru_OLv",
				component: "_2In1yeZDKolFJ8jnru_OLv"
			}
		},
		"./src/reddit/components/ReportPage/FinalPage/index.m.less": function(e, t, n) {
			e.exports = {
				BlockUserIcon: "_23DPLynKCAVL6VhX2uO2IO",
				blockUserIcon: "_23DPLynKCAVL6VhX2uO2IO",
				BlockUserHeader: "_2BdAdV74LI25vZzM59g4BT",
				blockUserHeader: "_2BdAdV74LI25vZzM59g4BT",
				OptionHeader: "_20az0Locm7QvCqtGhD4BZW",
				optionHeader: "_20az0Locm7QvCqtGhD4BZW",
				OptionDescription: "_397Sf8Eesq1bQuCTLDzp5w",
				optionDescription: "_397Sf8Eesq1bQuCTLDzp5w",
				OptionHolder: "_3MI-q_V0pcXjHrJK3SOTqL",
				optionHolder: "_3MI-q_V0pcXjHrJK3SOTqL"
			}
		},
		"./src/reddit/components/ReportPage/FirstPage/index.m.less": function(e, t, n) {
			e.exports = {
				contentPolicyHolder: "_2CCpZ0mco46HXNLgR2Q1dZ",
				Footer: "_2mEtX6RW0lCRV38vFKNbX3",
				footer: "_2mEtX6RW0lCRV38vFKNbX3",
				SubmitButton: "_1jygPdE7IFOzYnecMGpg_7",
				submitButton: "_1jygPdE7IFOzYnecMGpg_7"
			}
		},
		"./src/reddit/components/ReportPage/SubredditNameInput/index.m.less": function(e, t, n) {
			e.exports = {
				errorMessage: "_2DD_DQ9vtGYO1TcTpvikoA",
				Component: "_-1aNGca0_y0i8gvLJszOP",
				component: "_-1aNGca0_y0i8gvLJszOP"
			}
		},
		"./src/reddit/components/ReportPage/ThingUrlInput/index.m.less": function(e, t, n) {
			e.exports = {
				errorMessage: "_3ZZ9sFISo2mG6_gIICV23y",
				Component: "_1CIu3BZosOgKbC7hciWR_h",
				component: "_1CIu3BZosOgKbC7hciWR_h"
			}
		},
		"./src/reddit/components/ReportPage/UsernamesInput/index.m.less": function(e, t, n) {
			e.exports = {
				addUsernameButton: "_3V9qaN-cP01ZZpoAmEDMIC",
				addUsernameButtonIcon: "IYry9zwPd9rKRl5wEg9K0",
				addUsernameButtonText: "_1qKs7Imo55nkUh7Km8Pqrt",
				deleteUsernameFieldButton: "_2Vm85EV-41AvwOMtj-yoLj",
				errorMessage: "_2FbphG8Dmzh7sG2bYrtAJj",
				Component: "_14pd_IitAruPixza598UR6",
				component: "_14pd_IitAruPixza598UR6"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const l = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/pages/ReportPage/index.m.less": function(e, t, n) {
			e.exports = {
				content: "_3XhkdtfJL0p2aN1g0TM9dE",
				form: "_2sHffjYn-kNXleiwGcWKPz",
				header: "iaXpSE-6nnTZXMnW_57yv"
			}
		},
		"./src/reddit/pages/ReportPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/es6.regexp.constructor.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/formatPythonString/index.ts"),
				l = n("./src/reddit/components/CrisisFlow/index.tsx"),
				d = n("./src/config.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				h = n("./src/reddit/components/ReportPage/index.m.less"),
				p = n.n(h),
				u = n("./node_modules/fbt/lib/FbtPublic.js");
			const m = c.a.header("Header", p.a),
				g = c.a.div("Description", p.a),
				C = c.a.div("LinkHolder", p.a),
				f = c.a.footer("Footer", p.a),
				E = c.a.a("FileAComplaintLink", p.a),
				b = c.a.a("RedirectToRedditLink", p.a);
			var R = e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement(m, null, e.complaintPageTitle), r.a.createElement(g, null, e.complaintPrompt || u.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(C, null, r.a.createElement(E, {
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(f, null, r.a.createElement(b, {
					href: "".concat(d.a.redditUrl)
				}, u.fbt._("Redirect back to your home in Reddit universe", null, {
					hk: "1pMLva"
				})))),
				x = n("./src/reddit/components/ReportPage/FinalPage/index.m.less"),
				y = n.n(x);
			const P = c.a.div("OptionHolder", y.a),
				S = c.a.div("OptionHeader", y.a),
				_ = c.a.div("OptionDescription", y.a),
				v = c.a.header("Header", p.a),
				k = c.a.footer("Footer", p.a),
				F = c.a.div("Description", p.a),
				O = c.a.a("Link", p.a),
				w = c.a.a("RedirectToRedditLink", p.a),
				U = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse";
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.renderAbuseOfReportButtonOption = () => r.a.createElement(P, null, r.a.createElement(S, null, u.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement(_, null, u.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit's reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [u.fbt._param("=visit the Help Center", r.a.createElement(O, {
						target: "_blank",
						href: U
					}, u.fbt._("visit the Help Center", null, {
						hk: "1bc2jS"
					})))], {
						hk: "3sQZ0g"
					}))), this.renderWithoutOptions = () => r.a.createElement(r.a.Fragment, null, r.a.createElement(F, null, u.fbt._("We will investigate the content you reported and reach out if we have any additional questions.", null, {
						hk: "2tRkyQ"
					})), r.a.createElement(k, null, r.a.createElement(w, {
						href: "/"
					}, u.fbt._("Redirect back to your home in Reddit universe", null, {
						hk: "1pMLva"
					}))))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(v, null, u.fbt._("Thank you for your report.", null, {
						hk: "2l8iOp"
					})), e.chosenRule.isAbuseOfReportButton ? r.a.createElement(r.a.Fragment, null, r.a.createElement(F, null, u.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "12EkwP"
					})), this.renderAbuseOfReportButtonOption()) : this.renderWithoutOptions())
				}
			}
			var N = n("./src/reddit/components/AccordionSection/index.tsx"),
				T = n("./src/reddit/components/ContentPolicy/index.tsx"),
				D = n("./src/lib/classNames/index.ts"),
				V = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				j = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = n("./src/reddit/components/ReportPage/AdditionalInfoInput/index.m.less"),
				L = n.n(M);
			const A = c.a.fieldset("Fieldset", p.a),
				q = c.a.div("AdditionalInfoCheckboxes", L.a),
				H = c.a.wrapped(j.a, "AdditionalInfoCheckbox", L.a);
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						additionalInfo: []
					}, this.onAdditionalInfoCheckboxClick = e => () => {
						let t = [];
						t = this.state.additionalInfo.indexOf(e) > -1 ? this.state.additionalInfo.filter(t => e !== t).slice() : this.state.additionalInfo.concat([e]), this.setState({
							additionalInfo: t
						}), this.props.onAdditionalInfoChange(t)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(A, null, r.a.createElement(q, null, e.additionalCheckboxes.checkboxes.map(e => r.a.createElement(H, {
						key: e.name,
						isSelected: t.additionalInfo.indexOf(e.name) > -1,
						onClick: this.onAdditionalInfoCheckboxClick(e.name),
						text: e.textToShow
					})))))
				}
			}
			var W = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				Z = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				z = n("./src/reddit/components/ReportPage/SubredditNameInput/index.m.less"),
				K = n.n(z);
			const X = c.a.header("InputDescription", p.a);
			class G extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditName: ""
					}, this.onSubredditNameChange = e => {
						this.setState({
							subredditName: e.target.value
						}), this.props.onSubredditNameChange(e.target.value), this.props.onMakeFieldDirty("subredditName")
					}
				}
				componentDidMount() {
					this.props.onSubredditNameChange("")
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					let n = !1,
						s = "";
					if (e.reportError && e.reportError.fields) {
						const t = e.reportError.fields.filter(e => "sr_name" === e.field || "current_user" === e.field);
						t.length > 0 && (n = !0, s = t[0].msg)
					}
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: p.a.fieldset
					}, r.a.createElement(X, null, u.fbt._("You must be a moderator of the subreddit in which the evasion is taking place.", null, {
						hk: "2jQgis"
					})), r.a.createElement("div", {
						className: p.a.field
					}, r.a.createElement(Z.b, {
						backgroundColorState: Z.a.WhiteFields,
						className: p.a.input,
						label: u.fbt._("Subreddit", null, {
							hk: "3cWPAa"
						}),
						onChange: this.onSubredditNameChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : Z.d.Invalid,
						value: t.subredditName
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : r.a.createElement("div", {
						className: K.a.errorMessage
					}, e.regexValid ? n ? s : "" : u.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var Q = c.a.wrapped(G, "Component", K.a),
				J = n("./src/reddit/components/ReportPage/ThingUrlInput/index.m.less"),
				Y = n.n(J);
			const $ = c.a.header("InputDescription", p.a);
			class ee extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						thingUrl: ""
					}, this.onThingUrlChange = e => {
						this.setState({
							thingUrl: e.target.value
						}), this.props.onThingUrlChange(e.target.value), this.props.onMakeFieldDirty("thingId")
					}
				}
				componentDidMount() {
					this.props.onThingUrlChange("")
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					let n = !1,
						s = "";
					if (e.reportError && e.reportError.fields) {
						const t = e.reportError.fields.filter(e => "thing_id" === e.field || "modmail_conv_id" === e.field || "modmail_msg_id" === e.field || "current_user" === e.field);
						t.length > 0 && (n = !0, s = t[0].msg)
					}
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: p.a.fieldset
					}, e.description && r.a.createElement($, null, e.description), r.a.createElement("div", {
						className: p.a.field
					}, r.a.createElement(Z.b, {
						backgroundColorState: Z.a.WhiteFields,
						className: p.a.input,
						label: u.fbt._("Link to Post/Comment/PM on Reddit", null, {
							hk: "23bqQ6"
						}),
						onChange: this.onThingUrlChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : Z.d.Invalid,
						value: t.thingUrl
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : r.a.createElement("div", {
						className: Y.a.errorMessage
					}, e.regexValid ? n ? s : "" : u.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var te = c.a.wrapped(ee, "Component", Y.a),
				ne = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				se = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				re = n("./src/reddit/components/ReportPage/UsernamesInput/index.m.less"),
				ae = n.n(re);
			const oe = 10,
				ie = ["u/"],
				le = c.a.header("InputDescription", p.a);
			class de extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						usernames: ie
					}, this.getAddUsernameButton = () => r.a.createElement("button", {
						className: ae.a.addUsernameButton,
						onClick: this.handleAddUsername
					}, r.a.createElement(ne.a, {
						className: ae.a.addUsernameButtonIcon
					}), r.a.createElement("span", {
						className: ae.a.addUsernameButtonText
					}, u.fbt._("Add username", null, {
						hk: "51073"
					}))), this.getDeleteUsernameButton = e => r.a.createElement("button", {
						className: ae.a.deleteUsernameFieldButton,
						onClick: this.handleRemoveUsername(e)
					}, r.a.createElement(se.b, null)), this.handleUsernameChange = e => t => {
						const n = this.state.usernames.map((n, s) => e !== s ? n : t.target.value);
						this.setState({
							usernames: n
						}), this.props.onUsernamesChange(n), this.props.onMakeFieldDirty("username_".concat(e))
					}, this.handleAddUsername = () => {
						const e = this.state.usernames.concat(["u/"]);
						this.setState({
							usernames: e
						}), this.props.onUsernamesChange(e)
					}, this.handleRemoveUsername = e => () => {
						this.updateFieldsValidity(e);
						const t = this.state.usernames.filter((t, n) => e !== n);
						this.setState({
							usernames: t
						}), this.props.onUsernamesChange(t), this.removeUsernameError(e)
					}, this.updateFieldsValidity = e => {
						const t = this.state.usernames.length;
						let n = {};
						for (let s = e + 1; s < t; s++) n = Object.assign(Object.assign({}, n), {
							["username_".concat(s - 1)]: this.props.fieldsValidity["username_".concat(s)]
						});
						this.props.onFieldsValidityChange(Object.assign(Object.assign({}, this.props.fieldsValidity), n))
					}, this.removeUsernameError = e => {
						const {
							props: t
						} = this;
						let n;
						if (t.reportError && t.reportError.fields && t.reportError.fields.length) {
							let s = t.reportError.fields.filter(t => t.field !== "username_" + e);
							n = {
								fields: s = s.map((function(t) {
									const n = t.field.startsWith("username_"),
										s = +t.field.substring(9);
									if (n && s > e) {
										return {
											field: "username_".concat(s - 1),
											msg: t.msg
										}
									}
									return t
								})),
								type: t.reportError.type
							}, t.onReportErrorChange(n)
						}
					}
				}
				componentDidMount() {
					this.props.onUsernamesChange(ie)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: p.a.fieldset
					}, r.a.createElement(le, null, e.banEvadingUsernames ? u.fbt._("List up ban-evading accounts, starting with the originally banned user.", null, {
						hk: "16rcm5"
					}) : e.usernamesInputDescription || u.fbt._("Please provide related usernames you want to report.", null, {
						hk: "2loBL6"
					})), t.usernames.map((n, s) => {
						let a = !1,
							o = "";
						if (e.reportError && e.reportError.fields) {
							const t = e.reportError.fields.filter(e => e.field === "username_".concat(s));
							t.length > 0 && (a = !0, o = t[0].msg)
						}
						const i = !1 !== e.fieldsValidity["username_".concat(s)];
						return r.a.createElement("div", {
							className: p.a.field
						}, r.a.createElement(Z.b, {
							backgroundColorState: Z.a.WhiteFields,
							className: p.a.input,
							label: u.fbt._("Username", null, {
								hk: "4hkwGi"
							}) + (e.oneUsername ? "" : " ".concat(s + 1)),
							onChange: this.handleUsernameChange(s),
							state: !e.showErrors || !a && i || e.dirtyFields["username_".concat(s)] ? void 0 : Z.d.Invalid,
							value: n
						}), t.usernames.length > 1 && this.getDeleteUsernameButton(s), e.showErrors && (a || !i) && !e.dirtyFields["username_".concat(s)] && r.a.createElement("div", {
							className: ae.a.errorMessage
						}, i ? a ? o : "" : u.fbt._("Please match the requested format.", null, {
							hk: "3TUeTn"
						})))
					}), !e.oneUsername && t.usernames.length < oe ? this.getAddUsernameButton() : null))
				}
			}
			var ce = c.a.wrapped(de, "Component", ae.a),
				he = n("./src/reddit/components/ReportPage/ChildReasons/index.m.less"),
				pe = n.n(he);
			const {
				fbt: ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class me extends r.a.Component {
				constructor() {
					super(...arguments), this.handleClickIfChildrenExist = (e, t) => () => {
						this.props.onUpdateRulesSequence(e, t), this.onChosenRuleCleared()
					}, this.handleClickIfChildrenNotExist = (e, t, n) => () => {
						this.props.onUpdateRulesSequence(e, t), this.onRedditRuleChange(n)
					}, this.onRedditRuleChange = e => {
						const t = {
							reason: e
						};
						this.props.onChosenReasonPayloadChange(t), this.props.onShowErrorsChange(!1)
					}, this.onChosenRuleCleared = () => {
						this.props.onChosenReasonPayloadChange()
					}, this.onFieldChange = e => t => {
						let n;
						this.props.chosenReasonPayload && (n = Object.assign(Object.assign({}, this.props.chosenReasonPayload), {
							[e]: t
						}), this.props.onChosenReasonPayloadChange(n))
					}
				}
				render() {
					const {
						props: e
					} = this, {
						rulesSequence: t
					} = e, n = e.parentRule.nextStepReasons, s = t && t.length > e.depthOfParentRule ? t[e.depthOfParentRule] : -1, a = t && t.length > e.depthOfParentRule + 1 ? t[e.depthOfParentRule + 1] : -1, o = 0 === e.depthOfParentRule, i = s === e.indexOfParentRule;
					if (!n || !n.length) return null;
					const l = i ? pe.a.open : pe.a.closed,
						d = o ? pe.a.topLevelSubSection : pe.a.subSection;
					return r.a.createElement("div", {
						className: Object(D.a)(l, d, e.className)
					}, e.depthOfParentRule > 0 ? r.a.createElement("div", {
						className: pe.a.radioOptionsSectionHeader
					}, e.parentRule.nextStepHeader || ue._("Select a rule", null, {
						hk: "3dqfv6"
					})) : null, n.map((t, n) => {
						const s = a === n;
						return r.a.createElement(r.a.Fragment, {
							key: t.reasonText || t.reasonTextToShow
						}, r.a.createElement(V.a, {
							altColor: !0,
							value: t.reasonText ? t.reasonText : "",
							label: t.reasonTextToShow,
							selected: s,
							onClick: t.nextStepReasons && t.nextStepReasons.length ? this.handleClickIfChildrenExist(n, e.depthOfParentRule + 1) : this.handleClickIfChildrenNotExist(n, e.depthOfParentRule + 1, t)
						}), s && t.canSpecifySubreddit && r.a.createElement(Q, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.subredditName,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onSubredditNameChange: this.onFieldChange("subredditName"),
							regexValid: e.fieldsValidity.subredditName,
							reportError: e.reportError,
							showErrors: e.showErrors
						}), s && t.canSpecifyUsernames && r.a.createElement(ce, {
							banEvadingUsernames: t.banEvadingUsernames,
							usernamesInputDescription: t.usernamesInputDescription,
							dirtyFields: e.dirtyFields,
							fieldsValidity: e.fieldsValidity,
							oneUsername: t.oneUsername,
							onFieldsValidityChange: e.onFieldsValidityChange,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onReportErrorChange: e.onReportErrorChange,
							onUsernamesChange: this.onFieldChange("usernames"),
							reportError: e.reportError,
							showErrors: e.showErrors
						}), s && t.canSpecifyThing && r.a.createElement(te, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.thingId,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onThingUrlChange: this.onFieldChange("thingUrl"),
							regexValid: e.fieldsValidity.thingUrl,
							reportError: e.reportError,
							showErrors: e.showErrors,
							description: t.thingInputDescription
						}), s && t.additionalCheckboxes && t.additionalCheckboxes.checkboxes && t.additionalCheckboxes.checkboxes.length && r.a.createElement(B, {
							additionalCheckboxes: t.additionalCheckboxes,
							depth: e.depthOfParentRule + 1,
							onAdditionalInfoChange: this.onFieldChange("additionalInfo")
						}), s && t.canWriteNotes && r.a.createElement(W.a, {
							depth: e.depthOfParentRule + 1,
							onCustomTextChange: this.onFieldChange("customText"),
							title: t.notesInputTitle,
							description: t.notesInputDescription
						}), r.a.createElement(me, {
							chosenReasonPayload: e.chosenReasonPayload,
							depthOfParentRule: e.depthOfParentRule + 1,
							dirtyFields: e.dirtyFields,
							fieldsValidity: e.fieldsValidity,
							indexOfParentRule: n,
							onChosenReasonPayloadChange: e.onChosenReasonPayloadChange,
							onFieldsValidityChange: e.onFieldsValidityChange,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onReportErrorChange: e.onReportErrorChange,
							onShowErrorsChange: e.onShowErrorsChange,
							onUpdateRulesSequence: e.onUpdateRulesSequence,
							parentRule: t,
							reportError: e.reportError,
							rulesSequence: e.rulesSequence,
							showErrors: e.showErrors
						}))
					}))
				}
			}
			var ge = c.a.wrapped(me, "Component", pe.a);
			class Ce extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(ge, {
						chosenReasonPayload: e.chosenReasonPayload,
						depthOfParentRule: 0,
						dirtyFields: e.dirtyFields,
						fieldsValidity: e.fieldsValidity,
						indexOfParentRule: e.indexOfReason,
						onChosenReasonPayloadChange: e.onChosenReasonPayloadChange,
						onFieldsValidityChange: e.onFieldsValidityChange,
						onMakeFieldDirty: e.onMakeFieldDirty,
						onReportErrorChange: e.onReportErrorChange,
						onShowErrorsChange: e.onShowErrorsChange,
						onUpdateRulesSequence: e.onUpdateRulesSequence,
						parentRule: e.reason,
						reportError: e.reportError,
						rulesSequence: e.rulesSequence,
						showErrors: e.showErrors
					})
				}
			}
			var fe = n("./src/reddit/controls/Button/index.tsx"),
				Ee = n("./src/reddit/helpers/reportPage/index.ts"),
				be = n("./src/reddit/layout/row/Inline/index.tsx"),
				Re = n("./src/reddit/models/RulesSequence/index.ts"),
				xe = n("./src/reddit/components/ReportPage/FirstPage/index.m.less"),
				ye = n.n(xe);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = c.a.header("Header", p.a), _e = c.a.wrapped(be.a, "Footer", ye.a), ve = c.a.wrapped(fe.i, "SubmitButton", ye.a), ke = Object(o.c)({
				initialReason: e => e.reportPage.initialReason
			});
			class Fe extends r.a.Component {
				constructor(e) {
					super(e), this.onSubmit = () => {
						this.setState({
							showErrors: !0
						}), this.props.onSubmit()
					}, this.handleAccordionSectionOpen = (e, t) => () => this.onUpdateRulesSequence(e, t), this.onUpdateRulesSequence = (e, t) => {
						this.state.rulesSequence.update(e, t), this.forceUpdate()
					}, this.onShowErrorsChange = e => {
						this.setState({
							showErrors: e
						})
					}, this.state = {
						gotInitialReason: !1,
						rulesSequence: new Re.a,
						showErrors: !1
					}
				}
				componentWillReceiveProps(e) {
					if (e.reasons && e.reasons.length && e.initialReason && !this.state.gotInitialReason) {
						const t = Object(Ee.a)(e.reasons, e.initialReason);
						this.setState({
							gotInitialReason: !0,
							rulesSequence: t
						});
						const n = t.getSequence();
						let s = e.reasons;
						if (n.length) {
							let e = s[n[0]];
							for (let t = 0; t < n.length; t++)(e = s[n[t]]).nextStepReasons && (s = e.nextStepReasons);
							e.nextStepReasons && e.nextStepReasons.length || this.props.onChosenReasonPayloadChange({
								reason: e,
								usernames: e.canSpecifyUsernames ? ["u/"] : void 0
							})
						}
					}
				}
				render() {
					const {
						props: e
					} = this, {
						reasons: t
					} = e;
					return t && t.length ? r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(Se, null, Pe._("How can we help?", null, {
						hk: "1iOApB"
					})), t.map((e, t) => this.renderRulesSection(e, t)), r.a.createElement(_e, null, r.a.createElement("div", {
						className: ye.a.contentPolicyHolder
					}, r.a.createElement(T.a, null)), r.a.createElement(ve, {
						onClick: this.onSubmit,
						disabled: !e.isReasonChosen
					}, e.isReportPending ? Pe._("Pending", null, {
						hk: "2w0p3b"
					}) : Pe._("Submit", null, {
						hk: "3ydLzW"
					})))) : null
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: s
					} = this, a = s.rulesSequence.getSequence();
					return r.a.createElement(N.a, {
						key: e.reasonTextToShow,
						onOpen: this.handleAccordionSectionOpen(t, 0),
						open: a.length > 0 && a[0] === t,
						title: e.reasonTextToShow
					}, r.a.createElement(Ce, {
						chosenReasonPayload: n.chosenReasonPayload,
						dirtyFields: n.dirtyFields,
						fieldsValidity: n.fieldsValidity,
						indexOfReason: t,
						onChosenReasonPayloadChange: n.onChosenReasonPayloadChange,
						onFieldsValidityChange: n.onFieldsValidityChange,
						onMakeFieldDirty: n.onMakeFieldDirty,
						onReportErrorChange: n.onReportErrorChange,
						onShowErrorsChange: this.onShowErrorsChange,
						onUpdateRulesSequence: this.onUpdateRulesSequence,
						reason: e,
						reportError: n.reportError,
						rulesSequence: a,
						showErrors: s.showErrors
					}))
				}
			}
			var Oe = Object(a.b)(ke)(Fe),
				we = n("./src/reddit/contexts/ApiContext.tsx"),
				Ue = n("./src/reddit/endpoints/accounts/index.ts"),
				Ie = n("./src/reddit/endpoints/post/index.tsx"),
				Ne = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				Te = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				De = n("./src/reddit/selectors/user.ts"),
				Ve = n("./src/reddit/pages/ReportPage/index.m.less"),
				je = n.n(Ve);
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(o.c)({
				currentUser: De.i,
				reportPageRules: e => e.reportPage.reportPageRules,
				crisisFlowEnabled: Te.b
			}), Ae = Object(a.b)(Le);
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						dirtyFields: {},
						fieldsValidity: {},
						reportError: null,
						reportPending: !1,
						reportSuccess: !1,
						showFileAComplaintPage: !1,
						showCrisisModal: !1
					}, this.onChosenReasonPayloadChange = e => {
						this.setState({
							chosenReasonPayload: e
						})
					}, this.onMakeFieldDirty = e => {
						this.setState({
							dirtyFields: Object.assign(Object.assign({}, this.state.dirtyFields), {
								[e]: !0
							})
						})
					}, this.checkRegexValidity = e => {
						let t = !0,
							n = {};
						if (void 0 !== e.thingUrl) {
							const s = new RegExp(Ee.d);
							let r = !0;
							"" === e.thingUrl.trim() && e.reason.thingIsOptional || (r = s.test(e.thingUrl.trim())), t = t && r, n = Object.assign(Object.assign({}, n), {
								thingUrl: r
							})
						}
						if (void 0 !== e.subredditName) {
							const s = new RegExp(Ee.c).test(e.subredditName.trim());
							t = t && s, n = Object.assign(Object.assign({}, n), {
								subredditName: s
							})
						}
						if (e.usernames && e.usernames.length) {
							const s = new RegExp(Ee.e);
							let r = {};
							for (let n = 0; n < e.usernames.length; n++) {
								const a = e.usernames[n].trim(),
									o = s.test(a) && "u/" !== a;
								t = t && o, r = Object.assign(Object.assign({}, r), {
									["username_".concat(n)]: o
								})
							}
							n = Object.assign(Object.assign({}, n), r)
						}
						return this.onFieldsValidityChange(n), t
					}, this.onFieldsValidityChange = e => {
						this.setState({
							fieldsValidity: e
						})
					}, this.onReportErrorChange = e => {
						this.setState({
							reportError: e
						})
					}, this.checkResponse = (e, t) => {
						e.ok ? t() : (e.body.json && e.body.json.errors.length && (e = Object.assign(Object.assign({}, e), {
							ok: !1,
							error: Object(Ne.a)(e)
						})), this.setState({
							reportError: e.error,
							reportPending: !1
						}))
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.getCleanUsername = e => e.includes("u/") ? e.substring(e.indexOf("u/") + 2) : e, this.onSubmit = async () => {
						const {
							props: e,
							state: t
						} = this, {
							chosenReasonPayload: n
						} = t;
						if (!t.reportPending && (this.setState({
								dirtyFields: {}
							}), n))
							if (n.reason.fileComplaint) this.setState({
								showFileAComplaintPage: !0
							});
							else if (this.checkRegexValidity(n)) {
							if (e.crisisFlowEnabled && n.reason.requestCrisisSupport && n.usernames && !t.showCrisisModal) {
								this.setState({
									reportError: null
								});
								const t = this.getCleanUsername(n.usernames[0]),
									s = await Object(Ue.b)(e.apiContext(), t);
								return s.error && "NOT_FOUND_ERROR" === s.error.type && (s.error = {
									type: "USER_DOESNT_EXIST_HELPCENTER",
									fields: [{
										field: "username_0",
										msg: "This user does not exist"
									}]
								}, s.body = {
									json: {
										errors: [
											["USER_DOESNT_EXIST_HELPCENTER", "This user does not exist", "username_0"]
										]
									}
								}), this.checkResponse(s, () => {
									this.setState({
										showCrisisModal: !0
									})
								})
							}
							this.setState({
								reportPending: !0
							});
							const s = await Object(Ie.o)(e.apiContext(), n, !0);
							this.checkResponse(s, () => {
								this.setState({
									reportSuccess: !0
								})
							})
						}
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.currentUser ? r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("div", {
						className: je.a.content
					}, r.a.createElement("h1", {
						className: je.a.header
					}, Me._("Submit a report", null, {
						hk: "3IySnr"
					})), e.reportPageRules && e.reportPageRules.length ? r.a.createElement("div", {
						className: je.a.form
					}, this.getContentWithModal()) : r.a.createElement("div", null, Me._("Loading...", null, {
						hk: "47z90C"
					})))) : null
				}
				getContent() {
					const {
						state: e
					} = this, {
						chosenReasonPayload: t
					} = e;
					return t && t.reason.fileComplaint && e.showFileAComplaintPage ? r.a.createElement(s.Fragment, null, r.a.createElement(R, {
						complaintButtonText: t.reason.complaintButtonText,
						complaintPageTitle: t.reason.complaintPageTitle,
						complaintPrompt: t.reason.complaintPrompt,
						complaintUrl: Object(i.a)(decodeURI(t.reason.complaintUrl), {
							thing: void 0
						})
					})) : t && e.reportSuccess ? r.a.createElement(I, {
						chosenRule: t.reason
					}) : this.getFirstPage()
				}
				getContentWithModal() {
					const {
						state: e
					} = this;
					return r.a.createElement(s.Fragment, null, this.getContent(), e.showCrisisModal && e.chosenReasonPayload && e.chosenReasonPayload.reason && e.chosenReasonPayload.usernames && r.a.createElement(l.b, {
						withOverlay: !0,
						overlayCustomStyles: l.a,
						username: this.getCleanUsername(e.chosenReasonPayload.usernames[0]),
						fromReportPage: !0,
						onSubmit: this.onSubmit,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
				getFirstPage() {
					const {
						props: e,
						state: t
					} = this, {
						chosenReasonPayload: n
					} = t;
					return r.a.createElement(Oe, {
						chosenReasonPayload: n,
						dirtyFields: t.dirtyFields,
						fieldsValidity: t.fieldsValidity,
						onChosenReasonPayloadChange: this.onChosenReasonPayloadChange,
						onFieldsValidityChange: this.onFieldsValidityChange,
						onMakeFieldDirty: this.onMakeFieldDirty,
						onReportErrorChange: this.onReportErrorChange,
						onSubmit: this.onSubmit,
						isReasonChosen: !!n,
						isReportPending: t.reportPending,
						reasons: e.reportPageRules,
						reportError: t.reportError
					})
				}
			}
			t.default = Object(we.b)(Ae(qe))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportPage.7b99e998cca305b37635.js.map