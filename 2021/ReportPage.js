// https://www.redditstatic.com/desktop2x/ReportPage.af8a267ba536cc07cc21.js
// Retrieved at 10/19/2021, 5:20:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportPage"], {
		"./src/lib/formatPythonString/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const r = /%\((\w+)\)s/g;

			function s(e, t) {
				return e.replace(r, (function(e, n) {
					return n in t ? t[n] : e
				}))
			}
		},
		"./src/reddit/components/AccordionSection/index.m.less": function(e, t, n) {
			e.exports = {
				Section: "_2kFAvKy090RHUHuGKj-lZX",
				section: "_2kFAvKy090RHUHuGKj-lZX",
				ChevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				chevronDown: "_3BjAzUzYUogU-HEAy3M-Yz",
				ChevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				chevronUp: "_1xdWrqXT33_Z6PRt1lntaq",
				ArticleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				articleWrap: "_1VLN7QOhCvaRusgG-RCzNY",
				mIsOpen: "_3wyxK8ak74f9lcJU0PCHYw",
				SectionHead: "_1MNP1i__B27h93k4ieBn36",
				sectionHead: "_1MNP1i__B27h93k4ieBn36",
				Article: "_1lO5zXuTJ63s0dtXcaPVbr",
				article: "_1lO5zXuTJ63s0dtXcaPVbr"
			}
		},
		"./src/reddit/components/AccordionSection/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				d = n("./src/reddit/components/AccordionSection/index.m.less"),
				c = n.n(d),
				m = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = u.a.div("Section", c.a),
				g = u.a.wrapped(l.a, "ChevronUp", c.a),
				f = u.a.wrapped(i.a, "ChevronDown", c.a),
				C = u.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => s.a.createElement("div", p({
					className: Object(m.a)(e, {
						[c.a.mIsOpen]: t
					})
				}, n)), "ArticleWrap", c.a),
				x = u.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => s.a.createElement("div", p({
					className: Object(m.a)(e, {
						[c.a.mIsOpen]: t
					})
				}, n)), "SectionHead", c.a),
				E = u.a.div("Article", c.a);
			class b extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return s.a.createElement("div", null, s.a.createElement(h, null, this.props.open ? s.a.createElement(g, null) : s.a.createElement(f, null), s.a.createElement(x, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), s.a.createElement(C, {
						isOpen: this.props.open
					}, this.props.open ? s.a.createElement(E, null, this.props.children) : null)))
				}
			}
			t.a = Object(a.b)(null, e => ({
				onSwitchSection: () => e(Object(o.i)())
			}))(b)
		},
		"./src/reddit/components/ContentPolicy/index.m.less": function(e, t, n) {
			e.exports = {
				Content: "_3-EmzITVSpJTN0ZK7n_YaM",
				content: "_3-EmzITVSpJTN0ZK7n_YaM",
				Link: "_3O6FEW7DxfrphV_mOjif19",
				link: "_3O6FEW7DxfrphV_mOjif19"
			}
		},
		"./src/reddit/components/ContentPolicy/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = o.a.div("Content", l.a), m = o.a.a("Link", l.a);
			class u extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(c, null, e.subredditOrProfile && !e.isLiveStreaming ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", a.a.createElement(m, {
						target: "_blank",
						href: `${r.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", a.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", a.a.createElement(m, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", a.a.createElement(m, {
						target: "_blank",
						href: `${r.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
			}
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: s.b.overlayReportFlow
			};
			t.b = Object(r.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("CrisisFlow").then(n.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
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
		"./src/reddit/components/ReportPage/CustomTextInput/index.m.less": function(e, t, n) {
			e.exports = {
				customTextInput: "FGOwr4yXeN3ya-TdhfhA6",
				textAreaCounter: "_2nMs12tSLppI6tzUQbdtpO",
				Component: "DC3SDIBg6rz0oprqLxSAP",
				component: "DC3SDIBg6rz0oprqLxSAP"
			}
		},
		"./src/reddit/components/ReportPage/CustomTextInput/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				l = n("./src/reddit/models/Rule/index.ts"),
				d = n("./src/reddit/components/ReportPage/index.m.less"),
				c = n.n(d),
				m = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				u = n.n(m);
			const p = a.a.header("InputDescription", c.a);
			class h extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: l.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState({
							customText: e.target.value,
							...g(e.target.value)
						}), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("fieldset", {
						className: c.a.fieldset
					}, e.description && s.a.createElement(p, null, e.description), s.a.createElement("div", {
						className: c.a.field
					}, s.a.createElement(o.c, {
						backgroundColorState: o.a.WhiteFields,
						className: u.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), s.a.createElement("div", {
						className: u.a.textAreaCounter
					}, `${t.displayLength}/${l.a}`))))
				}
			}
			const g = e => {
				const t = {
					displayLength: 0,
					maxLength: l.d
				};
				if (!e) return t;
				const n = l.a,
					r = e.length,
					s = Object(i.a)(e),
					a = s.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, r - a + 15 * s.length),
					maxLength: Math.min(l.d, n + a - 15 * s.length)
				}
			};
			t.a = a.a.wrapped(h, "Component", u.a)
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
		"./src/reddit/components/ReportPage/index.m.less": function(e, t, n) {
			e.exports = {
				Description: "vC8DORRb-SrRf4xoExKnG",
				description: "vC8DORRb-SrRf4xoExKnG",
				errorMessage: "_2L8tQUjHvCyEJVnOnvqSP9",
				field: "_2niT9w1GKTvhvG5L0mD4y7",
				fieldset: "_1SmuWknXj7wdU6MauCQUaU",
				Footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				footer: "_2qA_e-UZDTvGa2OXwjGC-l",
				Header: "jKS5xzUqtMgPR-nLIjfVJ",
				header: "jKS5xzUqtMgPR-nLIjfVJ",
				InputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				inputDescription: "FRqsDeKR5w-uDTyD5Euf9",
				input: "_2CBq5X22pIRSa4bQwQ4u5C",
				FileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				fileAComplaintLink: "_2GZA8YxvhlZwMLh97Lm2NR",
				Link: "ZTGvhuML-5HlQ9y8zLjlk",
				link: "ZTGvhuML-5HlQ9y8zLjlk",
				linkHolder: "qWNlfKYCsjoOcXc8gp8qU",
				RedirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j",
				redirectToRedditLink: "_292L1vXCbAfFIjB0_Na13j"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less": function(e, t, n) {
			e.exports = {
				FormElementTitle: "K64tMxMUJmCTojzEY7drh",
				formElementTitle: "K64tMxMUJmCTojzEY7drh",
				fake: "_3IIxv6iQHvjnKniUvSf8Oc",
				altColor: "_1Asmc3slr39Cm0G09a9de8",
				FormElementDescription: "_3jjsYZKgetVdF2QX1ekvEM",
				formElementDescription: "_3jjsYZKgetVdF2QX1ekvEM"
			}
		},
		"./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				d = n.n(l);
			const c = o.a.wrapped(i.e, "FormElementTitle", d.a),
				m = o.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => s.a.createElement("div", null, s.a.createElement(c, {
				className: Object(a.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && s.a.createElement(m, {
				className: Object(a.a)({
					[d.a.fake]: e.fake
				})
			}, e.description))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.div("icon", c.a),
				p = o.a.textarea("textarea", c.a),
				h = o.a.span("Invalid", c.a);
			var g, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(g || (g = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const C = e => s.a.createElement("div", {
					className: Object(a.a)(e.isRequired && c.a.required, e.className, {
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[c.a.mValid]: e.state === g.Valid,
							[c.a.mInvalid]: e.state === g.Invalid,
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(a.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && s.a.createElement(u, {
					className: Object(a.a)({
						[c.a.mValid]: e.state === g.Valid,
						[c.a.mInvalid]: e.state === g.Invalid
					})
				}, e.state === g.Valid && s.a.createElement(l.a, null), e.state === g.Invalid && s.a.createElement(h, null, "!")))),
				x = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: u,
						...p
					} = e;
					return s.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: l,
						state: u
					}, s.a.createElement(i.a, m({}, p, {
						className: Object(a.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: d
					})))
				},
				E = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d,
						...u
					} = e;
					return s.a.createElement(C, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, s.a.createElement(p, m({}, u, {
						className: Object(a.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less": function(e, t, n) {
			e.exports = {
				RadioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				radioOption: "_1D6cFDX3ZL0TDjeNKGf8-Y",
				ExpandRight: "_1fG2Q7CG6Ngau3siKKxZYP",
				expandRight: "_1fG2Q7CG6Ngau3siKKxZYP"
			}
		},
		"./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				m = n.n(c);
			const u = a.a.wrapped(l.a, "RadioOption", m.a),
				p = a.a.wrapped(d.a, "ExpandRight", m.a);
			t.a = e => s.a.createElement(u, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, s.a.createElement(p, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? s.a.createElement(i.f, null) : s.a.createElement(i.e, null), s.a.createElement(o.a, {
				altColor: e.altColor,
				label: e.label,
				description: e.description
			})), e.children)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return o
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return c
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return R
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				l = r.a.button("HomePageBreadcrumb", a.a),
				d = r.a.div("HomePageGroup", a.a),
				c = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				h = r.a.div("FormElement", a.a),
				g = r.a.div("FormGroupDescription", a.a),
				f = r.a.div("FormItem", a.a),
				C = r.a.h3("FormElementTitle", a.a),
				x = r.a.div("FormElementDescription", a.a),
				E = r.a.div("FormElementError", a.a),
				b = r.a.div("FormElementSubGroup", a.a),
				R = r.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				Textarea: "_2gchCc4pmLk-CHEErYmFaP",
				textarea: "_2gchCc4pmLk-CHEErYmFaP",
				StyledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				styledLabel: "_3X0DVhTjHSRuQBMvaWD4N",
				StyledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN",
				styledFileInput: "_2kbxOlf5qlKAzRVdk0a0GN"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "g", (function() {
				return E
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const m = r.a.wrapped(s.a, "ModalInput", c.a),
				u = r.a.input("Input", c.a),
				p = r.a.wrapped(l.a, "RadioOn", c.a),
				h = r.a.wrapped(i.a, "RadioOff", c.a),
				g = r.a.wrapped(a.a, "Checkbox", c.a),
				f = r.a.wrapped(o.a, "CheckboxSelected", c.a),
				C = r.a.textarea("Textarea", c.a),
				x = r.a.label("StyledLabel", c.a),
				E = r.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/index.m.less"),
				a = n.n(s);
			t.a = r.a.input("input", a.a)
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/helpers/parseUrl.ts");
			const s = ["old", "new", "en", "www", "np", "m"],
				a = ["reddit.com", "reddit.local"].concat("").concat(s.map((function(e) {
					return e + ".reddit.com"
				}))).concat(s.map((function(e) {
					return e + ".reddit.local"
				}))),
				o = ["mod.reddit.com"],
				i = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: a.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: o,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: o,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function l(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(i).some((function(n) {
						return t = function(e, t) {
							const n = i[e];
							if (!i) throw new Error("Could not find reddit URL spec: " + e);
							const s = Object(r.a)(t);
							if (!s) return void console.error("Could not parse url", t);
							if (-1 === (n.hostnames || a).indexOf(s.hostname)) return;
							const o = s.pathname.match(n.pathname);
							if (o) {
								return {
									url: t,
									routeName: e,
									components: n.pathnameComponents.reduce((function(e, t, n) {
										return e[t] = o[n + 1], e
									}), {})
								}
							}
						}(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(o);
			const l = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: a,
					gutter: i,
					...c
				} = e;
				return s.a.createElement("div", d({
					className: Object(o.a)(l.a.expandRightContainer, t)
				}, c), s.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: a,
						height: r,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), s.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
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
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/formatPythonString/index.ts"),
				l = n("./src/reddit/components/CrisisFlow/index.tsx"),
				d = n("./src/config.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				m = n("./src/reddit/components/ReportPage/index.m.less"),
				u = n.n(m),
				p = n("./node_modules/fbt/lib/FbtPublic.js");
			const h = c.a.header("Header", u.a),
				g = c.a.div("Description", u.a),
				f = c.a.div("LinkHolder", u.a),
				C = c.a.footer("Footer", u.a),
				x = c.a.a("FileAComplaintLink", u.a),
				E = c.a.a("RedirectToRedditLink", u.a);
			var b = e => s.a.createElement("div", {
					className: e.className
				}, s.a.createElement(h, null, e.complaintPageTitle), s.a.createElement(g, null, e.complaintPrompt || p.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(f, null, s.a.createElement(x, {
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(C, null, s.a.createElement(E, {
					href: `${d.a.redditUrl}`
				}, p.fbt._("Redirect back to your home in Reddit universe", null, {
					hk: "1pMLva"
				})))),
				R = n("./src/reddit/components/ReportPage/FinalPage/index.m.less"),
				y = n.n(R);
			const _ = c.a.div("OptionHolder", y.a),
				v = c.a.div("OptionHeader", y.a),
				S = c.a.div("OptionDescription", y.a),
				P = c.a.header("Header", u.a),
				k = c.a.footer("Footer", u.a),
				F = c.a.div("Description", u.a),
				w = c.a.a("Link", u.a),
				O = c.a.a("RedirectToRedditLink", u.a),
				N = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse";
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.renderAbuseOfReportButtonOption = () => s.a.createElement(_, null, s.a.createElement(v, null, p.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement(S, null, p.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit's reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [p.fbt._param("=visit the Help Center", s.a.createElement(w, {
						target: "_blank",
						href: N
					}, p.fbt._("visit the Help Center", null, {
						hk: "1bc2jS"
					})))], {
						hk: "3sQZ0g"
					}))), this.renderWithoutOptions = () => s.a.createElement(s.a.Fragment, null, s.a.createElement(F, null, p.fbt._("We will investigate the content you reported and reach out if we have any additional questions.", null, {
						hk: "2tRkyQ"
					})), s.a.createElement(k, null, s.a.createElement(O, {
						href: "/"
					}, p.fbt._("Redirect back to your home in Reddit universe", null, {
						hk: "1pMLva"
					}))))
				}
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(P, null, p.fbt._("Thank you for your report.", null, {
						hk: "2l8iOp"
					})), e.chosenRule.isAbuseOfReportButton ? s.a.createElement(s.a.Fragment, null, s.a.createElement(F, null, p.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "12EkwP"
					})), this.renderAbuseOfReportButtonOption()) : this.renderWithoutOptions())
				}
			}
			var U = n("./src/reddit/components/AccordionSection/index.tsx"),
				T = n("./src/reddit/components/ContentPolicy/index.tsx"),
				L = n("./src/lib/classNames/index.ts"),
				j = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				D = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = n("./src/reddit/components/ReportPage/AdditionalInfoInput/index.m.less"),
				A = n.n(M);
			const V = c.a.fieldset("Fieldset", u.a),
				H = c.a.div("AdditionalInfoCheckboxes", A.a),
				q = c.a.wrapped(D.a, "AdditionalInfoCheckbox", A.a);
			class B extends s.a.Component {
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
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(V, null, s.a.createElement(H, null, e.additionalCheckboxes.checkboxes.map(e => s.a.createElement(q, {
						key: e.name,
						isSelected: t.additionalInfo.indexOf(e.name) > -1,
						onClick: this.onAdditionalInfoCheckboxClick(e.name),
						text: e.textToShow
					})))))
				}
			}
			var G = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				K = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				W = n("./src/reddit/components/ReportPage/SubredditNameInput/index.m.less"),
				z = n.n(W);
			const Z = c.a.header("InputDescription", u.a);
			class X extends s.a.Component {
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
						r = "";
					if (e.reportError && e.reportError.fields) {
						const t = e.reportError.fields.filter(e => "sr_name" === e.field || "current_user" === e.field);
						t.length > 0 && (n = !0, r = t[0].msg)
					}
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("fieldset", {
						className: u.a.fieldset
					}, s.a.createElement(Z, null, p.fbt._("You must be a moderator of the subreddit in which the evasion is taking place.", null, {
						hk: "2jQgis"
					})), s.a.createElement("div", {
						className: u.a.field
					}, s.a.createElement(K.b, {
						backgroundColorState: K.a.WhiteFields,
						className: u.a.input,
						label: p.fbt._("Subreddit", null, {
							hk: "3cWPAa"
						}),
						onChange: this.onSubredditNameChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : K.d.Invalid,
						value: t.subredditName
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : s.a.createElement("div", {
						className: z.a.errorMessage
					}, e.regexValid ? n ? r : "" : p.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var Q = c.a.wrapped(X, "Component", z.a),
				J = n("./src/reddit/components/ReportPage/ThingUrlInput/index.m.less"),
				Y = n.n(J);
			const $ = c.a.header("InputDescription", u.a);
			class ee extends s.a.Component {
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
						r = "";
					if (e.reportError && e.reportError.fields) {
						const t = e.reportError.fields.filter(e => "thing_id" === e.field || "modmail_conv_id" === e.field || "modmail_msg_id" === e.field || "current_user" === e.field);
						t.length > 0 && (n = !0, r = t[0].msg)
					}
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("fieldset", {
						className: u.a.fieldset
					}, e.description && s.a.createElement($, null, e.description), s.a.createElement("div", {
						className: u.a.field
					}, s.a.createElement(K.b, {
						backgroundColorState: K.a.WhiteFields,
						className: u.a.input,
						label: p.fbt._("Link to Post/Comment/PM on Reddit", null, {
							hk: "23bqQ6"
						}),
						onChange: this.onThingUrlChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : K.d.Invalid,
						value: t.thingUrl
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : s.a.createElement("div", {
						className: Y.a.errorMessage
					}, e.regexValid ? n ? r : "" : p.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var te = c.a.wrapped(ee, "Component", Y.a),
				ne = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				re = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				se = n("./src/reddit/components/ReportPage/UsernamesInput/index.m.less"),
				ae = n.n(se);
			const oe = 10,
				ie = ["u/"],
				le = c.a.header("InputDescription", u.a);
			class de extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						usernames: ie
					}, this.getAddUsernameButton = () => s.a.createElement("button", {
						className: ae.a.addUsernameButton,
						onClick: this.handleAddUsername
					}, s.a.createElement(ne.a, {
						className: ae.a.addUsernameButtonIcon
					}), s.a.createElement("span", {
						className: ae.a.addUsernameButtonText
					}, p.fbt._("Add username", null, {
						hk: "51073"
					}))), this.getDeleteUsernameButton = e => s.a.createElement("button", {
						className: ae.a.deleteUsernameFieldButton,
						onClick: this.handleRemoveUsername(e)
					}, s.a.createElement(re.b, null)), this.getUsernameHeading = e => e ? p.fbt._("Tell us who:", null, {
						hk: "28vGPX"
					}) : p.fbt._("Please provide related usernames you want to report.", null, {
						hk: "2loBL6"
					}), this.handleUsernameChange = e => t => {
						const n = this.state.usernames.map((n, r) => e !== r ? n : t.target.value);
						this.setState({
							usernames: n
						}), this.props.onUsernamesChange(n), this.props.onMakeFieldDirty(`username_${e}`)
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
						for (let r = e + 1; r < t; r++) n = {
							...n,
							[`username_${r-1}`]: this.props.fieldsValidity[`username_${r}`]
						};
						this.props.onFieldsValidityChange({
							...this.props.fieldsValidity,
							...n
						})
					}, this.removeUsernameError = e => {
						const {
							props: t
						} = this;
						let n;
						if (t.reportError && t.reportError.fields && t.reportError.fields.length) {
							let r = t.reportError.fields.filter(t => t.field !== "username_" + e);
							n = {
								fields: r = r.map((function(t) {
									const n = t.field.startsWith("username_"),
										r = +t.field.substring(9);
									if (n && r > e) {
										return {
											field: `username_${r-1}`,
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
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("fieldset", {
						className: u.a.fieldset
					}, s.a.createElement(le, null, e.banEvadingUsernames ? p.fbt._("List up ban-evading accounts, starting with the originally banned user.", null, {
						hk: "16rcm5"
					}) : e.usernamesInputDescription || this.getUsernameHeading(e.oneUsername)), t.usernames.map((n, r) => {
						let a = !1,
							o = "";
						if (e.reportError && e.reportError.fields) {
							const t = e.reportError.fields.filter(e => e.field === `username_${r}`);
							t.length > 0 && (a = !0, o = t[0].msg)
						}
						const i = !1 !== e.fieldsValidity[`username_${r}`];
						return s.a.createElement("div", {
							className: u.a.field,
							key: r
						}, s.a.createElement(K.b, {
							backgroundColorState: K.a.WhiteFields,
							className: u.a.input,
							label: p.fbt._("Username", null, {
								hk: "4hkwGi"
							}) + (e.oneUsername ? "" : ` ${r+1}`),
							onChange: this.handleUsernameChange(r),
							state: !e.showErrors || !a && i || e.dirtyFields[`username_${r}`] ? void 0 : K.d.Invalid,
							value: n
						}), t.usernames.length > 1 && this.getDeleteUsernameButton(r), e.showErrors && (a || !i) && !e.dirtyFields[`username_${r}`] && s.a.createElement("div", {
							className: ae.a.errorMessage
						}, i ? a ? o : "" : p.fbt._("Please match the requested format.", null, {
							hk: "3TUeTn"
						})))
					}), !e.oneUsername && t.usernames.length < oe ? this.getAddUsernameButton() : null))
				}
			}
			var ce = c.a.wrapped(de, "Component", ae.a),
				me = n("./src/reddit/components/ReportPage/ChildReasons/index.m.less"),
				ue = n.n(me);
			const {
				fbt: pe
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class he extends s.a.Component {
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
						this.props.chosenReasonPayload && (n = {
							...this.props.chosenReasonPayload,
							[e]: t
						}, this.props.onChosenReasonPayloadChange(n))
					}
				}
				render() {
					const {
						props: e
					} = this, {
						rulesSequence: t
					} = e, n = e.parentRule.nextStepReasons, r = t && t.length > e.depthOfParentRule ? t[e.depthOfParentRule] : -1, a = t && t.length > e.depthOfParentRule + 1 ? t[e.depthOfParentRule + 1] : -1, o = 0 === e.depthOfParentRule, i = r === e.indexOfParentRule;
					if (!n || !n.length) return null;
					const l = i ? ue.a.open : ue.a.closed,
						d = o ? ue.a.topLevelSubSection : ue.a.subSection;
					return s.a.createElement("div", {
						className: Object(L.a)(l, d, e.className)
					}, e.depthOfParentRule > 0 ? s.a.createElement("div", {
						className: ue.a.radioOptionsSectionHeader
					}, e.parentRule.nextStepHeader || pe._("Select a rule", null, {
						hk: "3dqfv6"
					})) : null, n.map((t, n) => {
						const r = a === n;
						return s.a.createElement(s.a.Fragment, {
							key: t.reasonText || t.reasonTextToShow
						}, s.a.createElement(j.a, {
							altColor: !0,
							value: t.reasonText ? t.reasonText : "",
							label: t.reasonTextToShow,
							selected: r,
							onClick: t.nextStepReasons && t.nextStepReasons.length ? this.handleClickIfChildrenExist(n, e.depthOfParentRule + 1) : this.handleClickIfChildrenNotExist(n, e.depthOfParentRule + 1, t)
						}), r && t.canSpecifySubreddit && s.a.createElement(Q, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.subredditName,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onSubredditNameChange: this.onFieldChange("subredditName"),
							regexValid: e.fieldsValidity.subredditName,
							reportError: e.reportError,
							showErrors: e.showErrors
						}), r && t.canSpecifyUsernames && s.a.createElement(ce, {
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
						}), r && t.canSpecifyThing && s.a.createElement(te, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.thingId,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onThingUrlChange: this.onFieldChange("thingUrl"),
							regexValid: e.fieldsValidity.thingUrl,
							reportError: e.reportError,
							showErrors: e.showErrors,
							description: t.thingInputDescription
						}), r && t.additionalCheckboxes && t.additionalCheckboxes.checkboxes && t.additionalCheckboxes.checkboxes.length && s.a.createElement(B, {
							additionalCheckboxes: t.additionalCheckboxes,
							depth: e.depthOfParentRule + 1,
							onAdditionalInfoChange: this.onFieldChange("additionalInfo")
						}), r && t.canWriteNotes && s.a.createElement(G.a, {
							depth: e.depthOfParentRule + 1,
							onCustomTextChange: this.onFieldChange("customText"),
							title: t.notesInputTitle,
							description: t.notesInputDescription
						}), s.a.createElement(he, {
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
			var ge = c.a.wrapped(he, "Component", ue.a);
			class fe extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(ge, {
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
			var Ce = n("./src/reddit/controls/Button/index.tsx"),
				xe = n("./src/reddit/helpers/reportPage/index.ts"),
				Ee = n("./src/reddit/layout/row/Inline/index.tsx"),
				be = n("./src/reddit/models/RulesSequence/index.ts"),
				Re = n("./src/reddit/components/ReportPage/FirstPage/index.m.less"),
				ye = n.n(Re);
			const _e = c.a.header("Header", u.a),
				ve = c.a.wrapped(Ee.a, "Footer", ye.a),
				Se = c.a.wrapped(Ce.k, "SubmitButton", ye.a),
				Pe = Object(o.c)({
					initialReason: e => e.reportPage.initialReason
				});
			class ke extends s.a.Component {
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
						rulesSequence: new be.a,
						showErrors: !1
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (e.reasons && e.reasons.length && e.initialReason && !this.state.gotInitialReason) {
						const t = Object(xe.a)(e.reasons, e.initialReason);
						this.setState({
							gotInitialReason: !0,
							rulesSequence: t
						});
						const n = t.getSequence();
						let r = e.reasons;
						if (n.length) {
							let e = r[n[0]];
							for (let t = 0; t < n.length; t++)(e = r[n[t]]).nextStepReasons && (r = e.nextStepReasons);
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
					return t && t.length ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement(_e, null, p.fbt._("How can we help?", null, {
						hk: "1iOApB"
					})), t.map((e, t) => this.renderRulesSection(e, t)), s.a.createElement(ve, null, s.a.createElement("div", {
						className: ye.a.contentPolicyHolder
					}, s.a.createElement(T.a, null)), s.a.createElement(Se, {
						onClick: this.onSubmit,
						disabled: !e.isReasonChosen
					}, e.isReportPending ? p.fbt._("Pending", null, {
						hk: "2w0p3b"
					}) : p.fbt._("Submit", null, {
						hk: "4aU3dh"
					})))) : null
				}
				renderRulesSection(e, t) {
					const {
						props: n,
						state: r
					} = this, a = r.rulesSequence.getSequence();
					return s.a.createElement(U.a, {
						key: e.reasonTextToShow,
						onOpen: this.handleAccordionSectionOpen(t, 0),
						open: a.length > 0 && a[0] === t,
						title: e.reasonTextToShow
					}, s.a.createElement(fe, {
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
						showErrors: r.showErrors
					}))
				}
			}
			var Fe = Object(a.b)(Pe)(ke),
				we = n("./src/reddit/contexts/ApiContext.tsx"),
				Oe = n("./src/reddit/endpoints/accounts/index.ts"),
				Ne = n("./src/reddit/endpoints/post/index.tsx"),
				Ie = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				Ue = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Te = n("./src/reddit/selectors/user.ts"),
				Le = n("./src/reddit/pages/ReportPage/index.m.less"),
				je = n.n(Le);
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Me = Object(o.c)({
				currentUser: Te.k,
				reportPageRules: e => e.reportPage.reportPageRules,
				crisisFlowEnabled: Ue.b
			}), Ae = Object(a.b)(Me);
			class Ve extends s.a.Component {
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
							dirtyFields: {
								...this.state.dirtyFields,
								[e]: !0
							}
						})
					}, this.checkRegexValidity = e => {
						let t = !0,
							n = {};
						if (void 0 !== e.thingUrl) {
							const r = new RegExp(xe.d);
							let s = !0;
							"" === e.thingUrl.trim() && e.reason.thingIsOptional || (s = r.test(e.thingUrl.trim())), t = t && s, n = {
								...n,
								thingUrl: s
							}
						}
						if (void 0 !== e.subredditName) {
							const r = new RegExp(xe.c).test(e.subredditName.trim());
							t = t && r, n = {
								...n,
								subredditName: r
							}
						}
						if (e.usernames && e.usernames.length) {
							const r = new RegExp(xe.e);
							let s = {};
							for (let n = 0; n < e.usernames.length; n++) {
								const a = e.usernames[n].trim(),
									o = r.test(a) && "u/" !== a;
								t = t && o, s = {
									...s,
									[`username_${n}`]: o
								}
							}
							n = {
								...n,
								...s
							}
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
						e.ok ? t() : (e.body.json && e.body.json.errors.length && (e = {
							...e,
							ok: !1,
							error: Object(Ie.a)(e)
						}), this.setState({
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
									r = await Object(Oe.b)(e.apiContext(), t);
								return r.error && "NOT_FOUND_ERROR" === r.error.type && (r.error = {
									type: "USER_DOESNT_EXIST_HELPCENTER",
									fields: [{
										field: "username_0",
										msg: "This user does not exist"
									}]
								}, r.body = {
									json: {
										errors: [
											["USER_DOESNT_EXIST_HELPCENTER", "This user does not exist", "username_0"]
										]
									}
								}), this.checkResponse(r, () => {
									this.setState({
										showCrisisModal: !0
									})
								})
							}
							this.setState({
								reportPending: !0
							});
							const r = await Object(Ne.o)(e.apiContext(), n, !0);
							this.checkResponse(r, () => {
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
					return e.currentUser ? s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("div", {
						className: je.a.content
					}, s.a.createElement("h1", {
						className: je.a.header
					}, De._("Submit a report", null, {
						hk: "3IySnr"
					})), e.reportPageRules && e.reportPageRules.length ? s.a.createElement("div", {
						className: je.a.form
					}, this.getContentWithModal()) : s.a.createElement("div", null, De._("Loading...", null, {
						hk: "47z90C"
					})))) : null
				}
				getContent() {
					const {
						state: e
					} = this, {
						chosenReasonPayload: t
					} = e;
					return t && t.reason.fileComplaint && e.showFileAComplaintPage ? s.a.createElement(r.Fragment, null, s.a.createElement(b, {
						complaintButtonText: t.reason.complaintButtonText,
						complaintPageTitle: t.reason.complaintPageTitle,
						complaintPrompt: t.reason.complaintPrompt,
						complaintUrl: Object(i.a)(decodeURI(t.reason.complaintUrl), {
							thing: void 0
						})
					})) : t && e.reportSuccess ? s.a.createElement(I, {
						chosenRule: t.reason
					}) : this.getFirstPage()
				}
				getContentWithModal() {
					const {
						state: e
					} = this;
					return s.a.createElement(r.Fragment, null, this.getContent(), e.showCrisisModal && e.chosenReasonPayload && e.chosenReasonPayload.reason && e.chosenReasonPayload.usernames && s.a.createElement(l.b, {
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
					return s.a.createElement(Fe, {
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
			t.default = Object(we.b)(Ae(Ve))
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const o = e => r.c.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.K,
					experimentName: r.i
				}),
				i = e => r.e.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.K,
					experimentName: r.l
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportPage.af8a267ba536cc07cc21.js.map