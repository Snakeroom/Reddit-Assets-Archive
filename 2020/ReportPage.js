// https://www.redditstatic.com/desktop2x/ReportPage.03f541882453d42fc754.js
// Retrieved at 9/8/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportPage"], {
		"./src/reddit/actions/reportPageRules/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "REPORT_PAGE_RULES__LOADED"
		},
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
				l = n("./src/lib/initializeClient/installReducer.ts"),
				d = n("./src/reddit/components/CrisisFlow/index.tsx"),
				c = n("./src/config.ts"),
				h = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/components/ReportPage/index.m.less"),
				u = n.n(p),
				m = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = h.a.header("Header", u.a),
				C = h.a.div("Description", u.a),
				f = h.a.div("LinkHolder", u.a),
				E = h.a.footer("Footer", u.a),
				b = h.a.a("FileAComplaintLink", u.a),
				R = h.a.a("RedirectToRedditLink", u.a);
			var y = e => r.a.createElement("div", {
					className: e.className
				}, r.a.createElement(g, null, e.complaintPageTitle), r.a.createElement(C, null, e.complaintPrompt || m.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), r.a.createElement(f, null, r.a.createElement(b, {
					href: e.complaintUrl
				}, e.complaintButtonText)), r.a.createElement(E, null, r.a.createElement(R, {
					href: "".concat(c.a.redditUrl)
				}, m.fbt._("Redirect back to your home in Reddit universe", null, {
					hk: "1pMLva"
				})))),
				x = n("./src/reddit/components/ReportPage/FinalPage/index.m.less"),
				P = n.n(x);
			const v = h.a.div("OptionHolder", P.a),
				S = h.a.div("OptionHeader", P.a),
				_ = h.a.div("OptionDescription", P.a),
				k = h.a.header("Header", u.a),
				O = h.a.footer("Footer", u.a),
				w = h.a.div("Description", u.a),
				F = h.a.a("Link", u.a),
				U = h.a.a("RedirectToRedditLink", u.a),
				I = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse";
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.renderAbuseOfReportButtonOption = () => r.a.createElement(v, null, r.a.createElement(S, null, m.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), r.a.createElement(_, null, m.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit's reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [m.fbt._param("=visit the Help Center", r.a.createElement(F, {
						target: "_blank",
						href: I
					}, m.fbt._("visit the Help Center", null, {
						hk: "1bc2jS"
					})))], {
						hk: "3sQZ0g"
					}))), this.renderWithoutOptions = () => r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, m.fbt._("We will investigate the content you reported and reach out if we have any additional questions.", null, {
						hk: "2tRkyQ"
					})), r.a.createElement(O, null, r.a.createElement(U, {
						href: "/"
					}, m.fbt._("Redirect back to your home in Reddit universe", null, {
						hk: "1pMLva"
					}))))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement(k, null, m.fbt._("Thank you for your report.", null, {
						hk: "2l8iOp"
					})), e.chosenRule.isAbuseOfReportButton ? r.a.createElement(r.a.Fragment, null, r.a.createElement(w, null, m.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "12EkwP"
					})), this.renderAbuseOfReportButtonOption()) : this.renderWithoutOptions())
				}
			}
			var T = n("./src/reddit/components/AccordionSection/index.tsx"),
				D = n("./src/reddit/components/ContentPolicy/index.tsx"),
				j = n("./src/lib/classNames/index.ts"),
				V = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				L = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = n("./src/reddit/components/ReportPage/AdditionalInfoInput/index.m.less"),
				A = n.n(M);
			const q = h.a.fieldset("Fieldset", u.a),
				H = h.a.div("AdditionalInfoCheckboxes", A.a),
				B = h.a.wrapped(L.a, "AdditionalInfoCheckbox", A.a);
			class W extends r.a.Component {
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
					}, r.a.createElement(q, null, r.a.createElement(H, null, e.additionalCheckboxes.checkboxes.map(e => r.a.createElement(B, {
						key: e.name,
						isSelected: t.additionalInfo.indexOf(e.name) > -1,
						onClick: this.onAdditionalInfoCheckboxClick(e.name),
						text: e.textToShow
					})))))
				}
			}
			var Z = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				z = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				K = n("./src/reddit/components/ReportPage/SubredditNameInput/index.m.less"),
				X = n.n(K);
			const G = h.a.header("InputDescription", u.a);
			class Q extends r.a.Component {
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
						className: u.a.fieldset
					}, r.a.createElement(G, null, m.fbt._("You must be a moderator of the subreddit in which the evasion is taking place.", null, {
						hk: "2jQgis"
					})), r.a.createElement("div", {
						className: u.a.field
					}, r.a.createElement(z.b, {
						backgroundColorState: z.a.WhiteFields,
						className: u.a.input,
						label: m.fbt._("Subreddit", null, {
							hk: "3cWPAa"
						}),
						onChange: this.onSubredditNameChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : z.d.Invalid,
						value: t.subredditName
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : r.a.createElement("div", {
						className: X.a.errorMessage
					}, e.regexValid ? n ? s : "" : m.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var J = h.a.wrapped(Q, "Component", X.a),
				Y = n("./src/reddit/components/ReportPage/ThingUrlInput/index.m.less"),
				$ = n.n(Y);
			const ee = h.a.header("InputDescription", u.a);
			class te extends r.a.Component {
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
						className: u.a.fieldset
					}, e.description && r.a.createElement(ee, null, e.description), r.a.createElement("div", {
						className: u.a.field
					}, r.a.createElement(z.b, {
						backgroundColorState: z.a.WhiteFields,
						className: u.a.input,
						label: m.fbt._("Link to Post/Comment/PM on Reddit", null, {
							hk: "23bqQ6"
						}),
						onChange: this.onThingUrlChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : z.d.Invalid,
						value: t.thingUrl
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : r.a.createElement("div", {
						className: $.a.errorMessage
					}, e.regexValid ? n ? s : "" : m.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var ne = h.a.wrapped(te, "Component", $.a),
				se = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				re = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				ae = n("./src/reddit/components/ReportPage/UsernamesInput/index.m.less"),
				oe = n.n(ae);
			const ie = 10,
				le = ["u/"],
				de = h.a.header("InputDescription", u.a);
			class ce extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						usernames: le
					}, this.getAddUsernameButton = () => r.a.createElement("button", {
						className: oe.a.addUsernameButton,
						onClick: this.handleAddUsername
					}, r.a.createElement(se.a, {
						className: oe.a.addUsernameButtonIcon
					}), r.a.createElement("span", {
						className: oe.a.addUsernameButtonText
					}, m.fbt._("Add username", null, {
						hk: "51073"
					}))), this.getDeleteUsernameButton = e => r.a.createElement("button", {
						className: oe.a.deleteUsernameFieldButton,
						onClick: this.handleRemoveUsername(e)
					}, r.a.createElement(re.b, null)), this.handleUsernameChange = e => t => {
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
					this.props.onUsernamesChange(le)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement("div", {
						className: e.className
					}, r.a.createElement("fieldset", {
						className: u.a.fieldset
					}, r.a.createElement(de, null, e.banEvadingUsernames ? m.fbt._("List up ban-evading accounts, starting with the originally banned user.", null, {
						hk: "16rcm5"
					}) : e.usernamesInputDescription || m.fbt._("Please provide related usernames you want to report.", null, {
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
							className: u.a.field
						}, r.a.createElement(z.b, {
							backgroundColorState: z.a.WhiteFields,
							className: u.a.input,
							label: m.fbt._("Username", null, {
								hk: "4hkwGi"
							}) + (e.oneUsername ? "" : " ".concat(s + 1)),
							onChange: this.handleUsernameChange(s),
							state: !e.showErrors || !a && i || e.dirtyFields["username_".concat(s)] ? void 0 : z.d.Invalid,
							value: n
						}), t.usernames.length > 1 && this.getDeleteUsernameButton(s), e.showErrors && (a || !i) && !e.dirtyFields["username_".concat(s)] && r.a.createElement("div", {
							className: oe.a.errorMessage
						}, i ? a ? o : "" : m.fbt._("Please match the requested format.", null, {
							hk: "3TUeTn"
						})))
					}), !e.oneUsername && t.usernames.length < ie ? this.getAddUsernameButton() : null))
				}
			}
			var he = h.a.wrapped(ce, "Component", oe.a),
				pe = n("./src/reddit/components/ReportPage/ChildReasons/index.m.less"),
				ue = n.n(pe);
			const {
				fbt: me
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ge extends r.a.Component {
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
					const l = i ? ue.a.open : ue.a.closed,
						d = o ? ue.a.topLevelSubSection : ue.a.subSection;
					return r.a.createElement("div", {
						className: Object(j.a)(l, d, e.className)
					}, e.depthOfParentRule > 0 ? r.a.createElement("div", {
						className: ue.a.radioOptionsSectionHeader
					}, e.parentRule.nextStepHeader || me._("Select a rule", null, {
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
						}), s && t.canSpecifySubreddit && r.a.createElement(J, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.subredditName,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onSubredditNameChange: this.onFieldChange("subredditName"),
							regexValid: e.fieldsValidity.subredditName,
							reportError: e.reportError,
							showErrors: e.showErrors
						}), s && t.canSpecifyUsernames && r.a.createElement(he, {
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
						}), s && t.canSpecifyThing && r.a.createElement(ne, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.thingId,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onThingUrlChange: this.onFieldChange("thingUrl"),
							regexValid: e.fieldsValidity.thingUrl,
							reportError: e.reportError,
							showErrors: e.showErrors,
							description: t.thingInputDescription
						}), s && t.additionalCheckboxes && t.additionalCheckboxes.checkboxes && t.additionalCheckboxes.checkboxes.length && r.a.createElement(W, {
							additionalCheckboxes: t.additionalCheckboxes,
							depth: e.depthOfParentRule + 1,
							onAdditionalInfoChange: this.onFieldChange("additionalInfo")
						}), s && t.canWriteNotes && r.a.createElement(Z.a, {
							depth: e.depthOfParentRule + 1,
							onCustomTextChange: this.onFieldChange("customText"),
							title: t.notesInputTitle,
							description: t.notesInputDescription
						}), r.a.createElement(ge, {
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
			var Ce = h.a.wrapped(ge, "Component", ue.a);
			class fe extends r.a.Component {
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(Ce, {
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
			var Ee = n("./src/reddit/controls/Button/index.tsx"),
				be = n("./src/reddit/helpers/reportPage/index.ts"),
				Re = n("./src/reddit/layout/row/Inline/index.tsx"),
				ye = n("./src/reddit/models/RulesSequence/index.ts"),
				xe = n("./src/reddit/components/ReportPage/FirstPage/index.m.less"),
				Pe = n.n(xe);
			const {
				fbt: ve
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Se = h.a.header("Header", u.a), _e = h.a.wrapped(Re.a, "Footer", Pe.a), ke = h.a.wrapped(Ee.f, "SubmitButton", Pe.a), Oe = Object(o.c)({
				initialReason: e => e.pages.reportPage.initialReason
			});
			class we extends r.a.Component {
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
						rulesSequence: new ye.a,
						showErrors: !1
					}
				}
				componentWillReceiveProps(e) {
					if (e.reasons && e.reasons.length && e.initialReason && !this.state.gotInitialReason) {
						const t = Object(be.a)(e.reasons, e.initialReason);
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
					}, r.a.createElement(Se, null, ve._("How can we help?", null, {
						hk: "1iOApB"
					})), t.map((e, t) => this.renderRulesSection(e, t)), r.a.createElement(_e, null, r.a.createElement("div", {
						className: Pe.a.contentPolicyHolder
					}, r.a.createElement(D.a, null)), r.a.createElement(ke, {
						onClick: this.onSubmit,
						disabled: !e.isReasonChosen
					}, e.isReportPending ? ve._("Pending", null, {
						hk: "2w0p3b"
					}) : ve._("Submit", null, {
						hk: "3ydLzW"
					})))) : null
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: s
					} = this, a = s.rulesSequence.getSequence();
					return r.a.createElement(T.a, {
						key: e.reasonTextToShow,
						onOpen: this.handleAccordionSectionOpen(t, 0),
						open: a.length > 0 && a[0] === t,
						title: e.reasonTextToShow
					}, r.a.createElement(fe, {
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
			var Fe = Object(a.b)(Oe)(we),
				Ue = n("./src/reddit/contexts/ApiContext.tsx"),
				Ie = n("./src/reddit/endpoints/accounts/index.ts"),
				Ne = n("./src/reddit/endpoints/post/index.tsx"),
				Te = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				De = n("./node_modules/redux/es/redux.js"),
				je = n("./src/reddit/actions/pages/report/constants.ts");
			var Ve = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.a:
						return t.payload;
					default:
						return e
				}
			};
			var Le = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.b:
						return t.payload;
					case je.c:
					case je.d:
						return !1;
					default:
						return e
				}
			};
			var Me = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case je.d:
						return !0;
					case je.c:
					case je.b:
						return !1;
					default:
						return e
				}
			};
			var Ae = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case je.c:
							return !0;
						case je.b:
						case je.d:
							return !1;
						default:
							return e
					}
				},
				qe = Object(De.c)({
					error: Le,
					pending: Me,
					success: Ae
				}),
				He = n("./src/reddit/actions/reportPageRules/constants.ts");
			const Be = [];
			var We = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Be,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case He.a:
							return t.payload;
						default:
							return e
					}
				},
				Ze = Object(De.c)({
					reportPageApi: qe,
					reportPageRules: We,
					initialReason: Ve
				}),
				ze = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Ke = n("./src/reddit/selectors/user.ts"),
				Xe = n("./src/reddit/pages/ReportPage/index.m.less"),
				Ge = n.n(Xe);
			const {
				fbt: Qe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(l.a)({
				pages: {
					reportPage: Ze
				}
			});
			const Je = Object(o.c)({
					currentUser: Ke.i,
					reportPageRules: e => e.pages.reportPage.reportPageRules,
					crisisFlowEnabled: ze.b
				}),
				Ye = Object(a.b)(Je);
			class $e extends r.a.Component {
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
							const s = new RegExp(be.d);
							let r = !0;
							"" === e.thingUrl.trim() && e.reason.thingIsOptional || (r = s.test(e.thingUrl.trim())), t = t && r, n = Object.assign(Object.assign({}, n), {
								thingUrl: r
							})
						}
						if (void 0 !== e.subredditName) {
							const s = new RegExp(be.c).test(e.subredditName.trim());
							t = t && s, n = Object.assign(Object.assign({}, n), {
								subredditName: s
							})
						}
						if (e.usernames && e.usernames.length) {
							const s = new RegExp(be.e);
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
							error: Object(Te.a)(e)
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
									s = await Object(Ie.b)(e.apiContext(), t);
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
							const s = await Object(Ne.o)(e.apiContext(), n, !0);
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
						className: Ge.a.content
					}, r.a.createElement("h1", {
						className: Ge.a.header
					}, Qe._("Submit a report", null, {
						hk: "3IySnr"
					})), e.reportPageRules && e.reportPageRules.length ? r.a.createElement("div", {
						className: Ge.a.form
					}, this.getContentWithModal()) : r.a.createElement("div", null, Qe._("Loading...", null, {
						hk: "47z90C"
					})))) : null
				}
				getContent() {
					const {
						state: e
					} = this, {
						chosenReasonPayload: t
					} = e;
					return t && t.reason.fileComplaint && e.showFileAComplaintPage ? r.a.createElement(s.Fragment, null, r.a.createElement(y, {
						complaintButtonText: t.reason.complaintButtonText,
						complaintPageTitle: t.reason.complaintPageTitle,
						complaintPrompt: t.reason.complaintPrompt,
						complaintUrl: Object(i.a)(decodeURI(t.reason.complaintUrl), {
							thing: void 0
						})
					})) : t && e.reportSuccess ? r.a.createElement(N, {
						chosenRule: t.reason
					}) : this.getFirstPage()
				}
				getContentWithModal() {
					const {
						state: e
					} = this;
					return r.a.createElement(s.Fragment, null, this.getContent(), e.showCrisisModal && e.chosenReasonPayload && e.chosenReasonPayload.reason && e.chosenReasonPayload.usernames && r.a.createElement(d.b, {
						withOverlay: !0,
						overlayCustomStyles: d.a,
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
					return r.a.createElement(Fe, {
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
			t.default = Object(Ue.b)(Ye($e))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportPage.03f541882453d42fc754.js.map