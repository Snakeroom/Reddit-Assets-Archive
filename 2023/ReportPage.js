// https://www.redditstatic.com/desktop2x/ReportPage.eed8696af58656bf3282.js
// Retrieved at 6/27/2023, 1:50:05 PM by Reddit Dataminer v1.0.0
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
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Section", c.a),
				g = m.a.wrapped(l.a, "ChevronUp", c.a),
				f = m.a.wrapped(i.a, "ChevronDown", c.a),
				x = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return s.a.createElement("div", p({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, r))
				}, "ArticleWrap", c.a),
				C = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return s.a.createElement("div", p({
						className: Object(u.a)(t, {
							[c.a.mIsOpen]: n
						})
					}, r))
				}, "SectionHead", c.a),
				b = m.a.div("Article", c.a);
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return s.a.createElement("div", null, s.a.createElement(h, null, this.props.open ? s.a.createElement(g, null) : s.a.createElement(f, null), s.a.createElement(C, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), s.a.createElement(x, {
						isOpen: this.props.open
					}, this.props.open ? s.a.createElement(b, null, this.props.children) : null)))
				}
			}
			t.a = Object(a.b)(null, e => ({
				onSwitchSection: () => e(Object(o.i)())
			}))(E)
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
				return m
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), c = o.a.div("Content", l.a), u = o.a.a("Link", l.a);
			class m extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(c, null, e.subredditOrProfile ? d._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [d._param("=Reddit Content Policy", a.a.createElement(u, {
						target: "_blank",
						href: `${r.a.redditUrl}/help/contentpolicy`
					}, d._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), d._param("=and [communityName] 's rules", a.a.createElement("span", null, d._("and {=[communityName] 's rules}", [d._param("=[communityName] 's rules", a.a.createElement(u, {
						target: "_blank",
						href: `${e.subredditOrProfile.url}about/rules`
					}, d._("{communityName} 's rules", [d._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : d._("Read the {=Reddit Content Policy}", [d._param("=Reddit Content Policy", a.a.createElement(u, {
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
				backgroundColor: s.a.overlayReportFlow
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
				u = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				m = n.n(u);
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
						className: m.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), s.a.createElement("div", {
						className: m.a.textAreaCounter
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
					s = Object(i.b)(e),
					a = s.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(l.a, r - a + 15 * s.length),
					maxLength: Math.min(l.d, n + a - 15 * s.length)
				}
			};
			t.a = a.a.wrapped(h, "Component", m.a)
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
		"./src/reddit/components/ReportPage/ReportLabeledControl/index.m.less": function(e, t, n) {
			e.exports = {
				input: "iYG4ARzRL1SkXkxYhJx1n",
				field: "cs7l9JIoZT17KGutMxpiS",
				textareaField: "_2isF3g_VwRMaG-yLHgt3SW",
				textareaContainer: "_1mIjVRb5Scu0vENDxn9v9Y",
				mValid: "_4ug15_mfzFTOxXNZimpYO",
				mInvalid: "_34tke2oiYGbBHiLQ1ZMyeb",
				mWhiteField: "_3J35jrLFHSLhM-Jc3Hjm1r",
				control: "_35-a5kWL3fdiCLp8dBlqvA",
				hasState: "_2uJXaZbQt_eRM12k936B1Z",
				textarea: "_1TOeSVVbM6meX6Y3XXCby4",
				label: "_3ADDvuT_ONNPAwaIKDP0WC",
				required: "_2eu58KQn39dvbaL0vbx6wG",
				icon: "_2g2De-YIp5Ms5tpB8x8jzC",
				Invalid: "_5EF6nOv_YlbCpnqkKmfE",
				invalid: "_5EF6nOv_YlbCpnqkKmfE"
			}
		},
		"./src/reddit/components/ReportPage/SubredditNameInput/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_-1aNGca0_y0i8gvLJszOP",
				component: "_-1aNGca0_y0i8gvLJszOP",
				errorMessage: "_2DD_DQ9vtGYO1TcTpvikoA"
			}
		},
		"./src/reddit/components/ReportPage/ThingUrlInput/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_1CIu3BZosOgKbC7hciWR_h",
				component: "_1CIu3BZosOgKbC7hciWR_h",
				errorMessage: "_3ZZ9sFISo2mG6_gIICV23y"
			}
		},
		"./src/reddit/components/ReportPage/UsernamesInput/index.m.less": function(e, t, n) {
			e.exports = {
				addUsernameButton: "_3V9qaN-cP01ZZpoAmEDMIC",
				addUsernameButtonIcon: "IYry9zwPd9rKRl5wEg9K0",
				addUsernameButtonText: "_1qKs7Imo55nkUh7Km8Pqrt",
				deleteUsernameFieldButton: "_2Vm85EV-41AvwOMtj-yoLj",
				Component: "_14pd_IitAruPixza598UR6",
				component: "_14pd_IitAruPixza598UR6",
				errorMessage: "_2FbphG8Dmzh7sG2bYrtAJj"
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
				u = o.a.wrapped(i.b, "FormElementDescription", d.a);
			t.a = e => s.a.createElement("div", null, s.a.createElement(c, {
				className: Object(a.a)({
					[d.a.fake]: e.fake,
					[d.a.altColor]: e.altColor
				})
			}, e.label), e.description && s.a.createElement(u, {
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
				return C
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = o.a.div("icon", c.a),
				p = o.a.textarea("textarea", c.a),
				h = o.a.span("Invalid", c.a);
			var g, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(g || (g = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const x = e => s.a.createElement("div", {
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
				}, e.label), !!e.state && s.a.createElement(m, {
					className: Object(a.a)({
						[c.a.mValid]: e.state === g.Valid,
						[c.a.mInvalid]: e.state === g.Invalid
					})
				}, e.state === g.Valid && s.a.createElement(l.a, null), e.state === g.Invalid && s.a.createElement(h, null, "!")))),
				C = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: m,
						...p
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: l,
						state: m
					}, s.a.createElement(i.a, u({}, p, {
						className: Object(a.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: d
					})))
				},
				b = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d,
						...m
					} = e;
					return s.a.createElement(x, {
						backgroundColorState: t,
						className: n,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, s.a.createElement(p, u({}, m, {
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
				u = n.n(c);
			const m = a.a.wrapped(l.a, "RadioOption", u.a),
				p = a.a.wrapped(d.a, "ExpandRight", u.a);
			t.a = e => s.a.createElement(m, {
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
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(s);
			const o = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				l = r.a.button("HomePageBreadcrumb", a.a),
				d = r.a.div("HomePageGroup", a.a),
				c = r.a.h1("FormPageTitle", a.a),
				u = r.a.div("FormPageSection", a.a),
				m = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				h = r.a.div("FormElement", a.a),
				g = r.a.div("FormGroupDescription", a.a),
				f = r.a.div("FormItem", a.a),
				x = r.a.h3("FormElementTitle", a.a),
				C = r.a.div("FormElementDescription", a.a),
				b = r.a.div("FormElementError", a.a),
				E = r.a.div("FormElementSubGroup", a.a),
				_ = r.a.li("FormListItem", a.a)
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
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "g", (function() {
				return b
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				o = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				c = n.n(d);
			const u = r.a.wrapped(s.a, "ModalInput", c.a),
				m = r.a.input("Input", c.a),
				p = r.a.wrapped(l.a, "RadioOn", c.a),
				h = r.a.wrapped(i.a, "RadioOff", c.a),
				g = r.a.wrapped(a.a, "Checkbox", c.a),
				f = r.a.wrapped(o.a, "CheckboxSelected", c.a),
				x = r.a.textarea("Textarea", c.a),
				C = r.a.label("StyledLabel", c.a),
				b = r.a.input("StyledFileInput", c.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/Input/index.m.less"),
				a = n.n(s);
			t.a = r.a.input("input", a.a)
		},
		"./src/reddit/endpoints/post/report.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return g
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/reportPage/index.ts"),
				c = n("./src/redditGQL/operations/ReportPost.json");
			const u = (e, t) => Object(a.a)(e, {
				...c,
				variables: t
			});
			var m;
			! function(e) {
				e.Rule = "rule", e.SiteRule = "siteRule", e.Other = "other", e.FileComplaint = "fileComplaint", e.CrisisTextLine = "crisisTextLine"
			}(m || (m = {}));
			const p = (e, t) => Object(s.a)(Object(o.a)(e, [i.a]), {
					method: r.ob.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: h(t)
				}),
				h = e => {
					const t = {
							thing_id: e.id,
							api_type: "json",
							...e.timestamp && {
								live_stream_relative_report_time_sec: e.timestamp.toString()
							}
						},
						{
							reportFlowPayload: n
						} = e;
					switch (n.customText && (t.custom_text = n.customText), n.kind) {
						case m.Other:
							return {
								...t, reason: "other", other_reason: n.rule
							};
						case m.Rule:
							return {
								...t, reason: n.rule, rule_reason: n.rule
							};
						case m.SiteRule:
						case m.CrisisTextLine:
						default:
							return {
								...t, reason: "site_reason_selected", site_reason: n.rule
							}
					}
				},
				g = (e, t, n) => Object(s.a)(Object(o.a)(e, [i.a]), {
					method: r.ob.POST,
					endpoint: Object(l.a)(`${e.apiUrl}/api/report`),
					data: f(t, n)
				}),
				f = (e, t) => {
					const n = {
						...Object(d.b)(e),
						api_type: "json"
					};
					return t && (n.from_help_desk = !0), n
				}
		},
		"./src/reddit/helpers/reportPage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./src/reddit/models/RulesSequence/index.ts");
			const s = "(?:old\\.reddit\\.(?:com|local)|new\\.reddit\\.(?:com|local)|reddit\\.(?:com|local)|www\\.reddit\\.(?:com|local))",
				a = "(?:https?://)",
				o = `^${a}${s}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(?:\\w+)/(?:[^/]+)/(\\w+)(?:/.*)?`,
				i = `^${a}${s}/(?:(?:r)|(?:user|u))/(?:[^/]+)/comments/(\\w+)(?:/.*)?`,
				l = `^${a}${s}/message/messages/(\\w+)(?:/.*)?`,
				d = `^${a}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)(?:/)?$`,
				c = `^${a}?(?:mod.reddit.com/mail)/(?:[^/]+)/(\\w+)/(\\w+)(?:/)?$`,
				u = `^${a}${s}/(?:rpan|live)/(?:(?:r)/(?:[^/]+)/)?(\\w+)(?:/.*)?`,
				m = `(?:${i}|${o}|${l}|${d}|${c}|${u})`,
				p = `(?:(?:${a}?${s}/)?(?:user|u)/)?([\\w-]+)(?:/)?`,
				h = `(?:(?:${a}?${s}/)?(?:r)/)?([\\w-]+)(?:/)?`,
				g = e => {
					const t = new RegExp(o),
						n = new RegExp(i),
						r = new RegExp(l),
						s = new RegExp(u),
						a = new RegExp(d),
						m = new RegExp(c);
					let g, f, x;
					if (e.thingUrl) {
						const o = e.thingUrl.trim();
						if (t.test(o)) {
							const e = t.exec(o);
							e && e.length > 1 && (g = "t1_" + e[1])
						} else if (n.test(o) || s.test(o)) {
							const e = n.exec(o) || s.exec(o);
							e && e.length > 1 && (g = "t3_" + e[1])
						} else if (r.test(o)) {
							const e = r.exec(o);
							e && e.length > 1 && (g = "t4_" + e[1])
						} else if (m.test(o)) {
							const e = m.exec(o);
							e && e.length > 2 && (f = e[1], x = e[2])
						} else if (a.test(o)) {
							const e = a.exec(o);
							e && e.length > 1 && (f = e[1])
						}
					}
					const C = new RegExp(p),
						b = new RegExp(h),
						E = [];
					let _;
					if (e.subredditName) {
						const t = e.subredditName.trim();
						if (b.test(t)) {
							const e = b.exec(t);
							e && e.length > 1 && (_ = e[1])
						}
					}
					if (e.usernames && e.usernames.length)
						for (let o = 0; o < e.usernames.length; o++) {
							const t = e.usernames[o].trim();
							if (C.test(t)) {
								const e = C.exec(t);
								e && e.length > 1 && E.push(e[1])
							}
						}
					const {
						reason: R
					} = e;
					return {
						reason: "site_reason_selected",
						site_reason: R.reasonText,
						additional_info: e.additionalInfo ? e.additionalInfo.join(",") : void 0,
						custom_text: e.customText,
						modmail_conv_id: f,
						modmail_msg_id: x,
						sr_name: _,
						thing_id: g,
						usernames: E.length ? E.join(",") : void 0
					}
				},
				f = (e, t) => {
					const n = new r.a;
					return x(n, e, t, 0), n
				},
				x = (e, t, n, r) => {
					for (let s = 0; s < t.length; s++) {
						const a = t[s];
						e.update(s, r);
						const o = e.getSequence().length;
						if (a.reasonAsParam === n) return;
						if (a.nextStepReasons && a.nextStepReasons.length && (x(e, a.nextStepReasons, n, r + 1), e.getSequence().length > o)) return;
						e.cut(r - 1)
					}
				}
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
		"./src/reddit/models/RulesSequence/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class r {
				constructor() {
					this.sequence = []
				}
				getSequence() {
					return this.sequence
				}
				update(e, t) {
					const n = this.sequence.slice(0, t);
					n.push(e), this.sequence = n
				}
				cut(e) {
					const t = this.sequence.slice(0, e + 1);
					this.sequence = t
				}
			}
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
				u = n("./src/reddit/components/ReportPage/index.m.less"),
				m = n.n(u),
				p = n("./node_modules/fbt/lib/FbtPublic.js");
			const h = c.a.header("Header", m.a),
				g = c.a.div("Description", m.a),
				f = c.a.div("LinkHolder", m.a),
				x = c.a.footer("Footer", m.a),
				C = c.a.a("FileAComplaintLink", m.a),
				b = c.a.a("RedirectToRedditLink", m.a);
			var E = e => s.a.createElement("div", {
					className: e.className
				}, s.a.createElement(h, null, e.complaintPageTitle), s.a.createElement(g, null, e.complaintPrompt || p.fbt._("If you think content on Reddit violates your intellectual property, you can file a complaint. Use the link bellow:", null, {
					hk: "4eHLfh"
				})), s.a.createElement(f, null, s.a.createElement(C, {
					href: e.complaintUrl
				}, e.complaintButtonText)), s.a.createElement(x, null, s.a.createElement(b, {
					href: `${d.a.redditUrl}`
				}, p.fbt._("Redirect back to your home in Reddit universe", null, {
					hk: "1pMLva"
				})))),
				_ = n("./src/reddit/components/ReportPage/FinalPage/index.m.less"),
				R = n.n(_);
			const y = c.a.div("OptionHolder", R.a),
				v = c.a.div("OptionHeader", R.a),
				S = c.a.div("OptionDescription", R.a),
				P = c.a.header("Header", m.a),
				F = c.a.footer("Footer", m.a),
				k = c.a.div("Description", m.a),
				O = c.a.a("Link", m.a),
				w = c.a.a("RedirectToRedditLink", m.a),
				N = "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-report-abuse";
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.renderAbuseOfReportButtonOption = () => s.a.createElement(y, null, s.a.createElement(v, null, p.fbt._("Turn off free-form reports", null, {
						hk: "2yXM3i"
					})), s.a.createElement(S, null, p.fbt._("If you are a moderator, you can {=visit the Help Center} to learn how to modify your subreddit's reporting settings to disallow users from submitting free-form reports. We also have automated processes in place to prevent excessive reporting.", [p.fbt._param("=visit the Help Center", s.a.createElement(O, {
						target: "_blank",
						href: N
					}, p.fbt._("visit the Help Center", null, {
						hk: "1bc2jS"
					})))], {
						hk: "3sQZ0g"
					}))), this.renderWithoutOptions = () => s.a.createElement(s.a.Fragment, null, s.a.createElement(k, null, p.fbt._("We will investigate the content you reported and reach out if we have any additional questions.", null, {
						hk: "2tRkyQ"
					})), s.a.createElement(F, null, s.a.createElement(w, {
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
					})), e.chosenRule.isAbuseOfReportButton ? s.a.createElement(s.a.Fragment, null, s.a.createElement(k, null, p.fbt._("We've received your report. Here are some things you can do:", null, {
						hk: "12EkwP"
					})), this.renderAbuseOfReportButtonOption()) : this.renderWithoutOptions())
				}
			}
			var T = n("./src/reddit/components/AccordionSection/index.tsx"),
				U = n("./src/reddit/components/ContentPolicy/index.tsx"),
				j = n("./src/lib/classNames/index.ts"),
				L = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.tsx"),
				D = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = n("./src/reddit/components/ReportPage/AdditionalInfoInput/index.m.less"),
				A = n.n(M);
			const V = c.a.fieldset("Fieldset", m.a),
				q = c.a.div("AdditionalInfoCheckboxes", A.a),
				H = c.a.wrapped(D.a, "AdditionalInfoCheckbox", A.a);
			class G extends s.a.Component {
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
					}, s.a.createElement(V, null, s.a.createElement(q, null, e.additionalCheckboxes.checkboxes.map(e => s.a.createElement(H, {
						key: e.name,
						isSelected: t.additionalInfo.indexOf(e.name) > -1,
						onClick: this.onAdditionalInfoCheckboxClick(e.name),
						text: e.textToShow
					})))))
				}
			}
			var B = n("./src/reddit/components/ReportPage/CustomTextInput/index.tsx"),
				K = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				W = n("./src/reddit/components/ReportPage/ReportLabeledControl/index.m.less"),
				z = n.n(W);

			function X() {
				return (X = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = c.a.div("icon", z.a),
				Q = (c.a.textarea("textarea", z.a), c.a.span("Invalid", z.a));
			var Y, J;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(Y || (Y = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(J || (J = {}));
			const $ = e => s.a.createElement("div", {
					className: Object(j.a)(e.isRequired && z.a.required, e.className, {
						[z.a.container]: !e.isTextarea,
						[z.a.textareaContainer]: !!e.isTextarea,
						...!!e.isTextarea && {
							[z.a.mValid]: e.state === Y.Valid,
							[z.a.mInvalid]: e.state === Y.Invalid,
							[z.a.mWhiteField]: e.backgroundColorState === J.WhiteFields
						}
					})
				}, s.a.createElement("label", {
					className: Object(j.a)({
						[z.a.field]: !e.isTextarea,
						[z.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: z.a.label
				}, e.label), !!e.state && s.a.createElement(Z, {
					className: Object(j.a)({
						[z.a.mValid]: e.state === Y.Valid,
						[z.a.mInvalid]: e.state === Y.Invalid
					})
				}, e.state === Y.Valid && s.a.createElement(K.a, null), e.state === Y.Invalid && s.a.createElement(Q, null, "!")))),
				ee = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: a,
						label: o,
						onKeyDown: i,
						state: l,
						...d
					} = e;
					return s.a.createElement($, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: o,
						state: l
					}, s.a.createElement("input", X({}, d, {
						className: Object(j.a)(z.a.input, z.a.control, {
							[z.a.hasState]: !!e.state,
							[z.a.mWhiteField]: e.backgroundColorState === J.WhiteFields
						}),
						"data-empty": !e.value,
						ref: r,
						onKeyDown: i
					})))
				};
			var te = n("./src/reddit/components/ReportPage/SubredditNameInput/index.m.less"),
				ne = n.n(te);
			const re = c.a.header("InputDescription", m.a);
			class se extends s.a.Component {
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
						className: m.a.fieldset
					}, s.a.createElement(re, null, p.fbt._("You must be a moderator of the subreddit in which the evasion is taking place.", null, {
						hk: "2jQgis"
					})), s.a.createElement("div", {
						className: m.a.field
					}, s.a.createElement(ee, {
						backgroundColorState: J.WhiteFields,
						className: m.a.input,
						label: p.fbt._("Subreddit", null, {
							hk: "3cWPAa"
						}),
						onChange: this.onSubredditNameChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : Y.Invalid,
						value: t.subredditName
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : s.a.createElement("div", {
						className: ne.a.errorMessage
					}, e.regexValid ? n ? r : "" : p.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var ae = c.a.wrapped(se, "Component", ne.a),
				oe = n("./src/reddit/components/ReportPage/ThingUrlInput/index.m.less"),
				ie = n.n(oe);
			const le = c.a.header("InputDescription", m.a);
			class de extends s.a.Component {
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
						className: m.a.fieldset
					}, e.description && s.a.createElement(le, null, e.description), s.a.createElement("div", {
						className: m.a.field
					}, s.a.createElement(ee, {
						backgroundColorState: J.WhiteFields,
						className: m.a.input,
						label: p.fbt._("Link to Post/Comment/PM on Reddit", null, {
							hk: "23bqQ6"
						}),
						onChange: this.onThingUrlChange,
						state: !e.showErrors || !n && e.regexValid || e.isDirty ? void 0 : Y.Invalid,
						value: t.thingUrl
					}), !e.showErrors || !n && e.regexValid || e.isDirty ? null : s.a.createElement("div", {
						className: ie.a.errorMessage
					}, e.regexValid ? n ? r : "" : p.fbt._("Please match the requested format.", null, {
						hk: "3TUeTn"
					})))))
				}
			}
			var ce = c.a.wrapped(de, "Component", ie.a),
				ue = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				me = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				pe = n("./src/reddit/components/ReportPage/UsernamesInput/index.m.less"),
				he = n.n(pe);
			const ge = 10,
				fe = ["u/"],
				xe = c.a.header("InputDescription", m.a);
			class Ce extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						usernames: fe
					}, this.getAddUsernameButton = () => s.a.createElement("button", {
						className: he.a.addUsernameButton,
						onClick: this.handleAddUsername
					}, s.a.createElement(ue.a, {
						className: he.a.addUsernameButtonIcon
					}), s.a.createElement("span", {
						className: he.a.addUsernameButtonText
					}, p.fbt._("Add username", null, {
						hk: "51073"
					}))), this.getDeleteUsernameButton = e => s.a.createElement("button", {
						className: he.a.deleteUsernameFieldButton,
						onClick: this.handleRemoveUsername(e)
					}, s.a.createElement(me.b, null)), this.getUsernameHeading = e => e ? p.fbt._("Tell us who:", null, {
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
					this.props.onUsernamesChange(fe)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement("div", {
						className: e.className
					}, s.a.createElement("fieldset", {
						className: m.a.fieldset
					}, s.a.createElement(xe, null, e.banEvadingUsernames ? p.fbt._("List up ban-evading accounts, starting with the originally banned user.", null, {
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
							className: m.a.field,
							key: r
						}, s.a.createElement(ee, {
							backgroundColorState: J.WhiteFields,
							className: m.a.input,
							label: p.fbt._("Username", null, {
								hk: "4hkwGi"
							}) + (e.oneUsername ? "" : ` ${r+1}`),
							onChange: this.handleUsernameChange(r),
							state: !e.showErrors || !a && i || e.dirtyFields[`username_${r}`] ? void 0 : Y.Invalid,
							value: n
						}), t.usernames.length > 1 && this.getDeleteUsernameButton(r), e.showErrors && (a || !i) && !e.dirtyFields[`username_${r}`] && s.a.createElement("div", {
							className: he.a.errorMessage
						}, i ? a ? o : "" : p.fbt._("Please match the requested format.", null, {
							hk: "3TUeTn"
						})))
					}), !e.oneUsername && t.usernames.length < ge ? this.getAddUsernameButton() : null))
				}
			}
			var be = c.a.wrapped(Ce, "Component", he.a),
				Ee = n("./src/reddit/components/ReportPage/ChildReasons/index.m.less"),
				_e = n.n(Ee);
			const {
				fbt: Re
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class ye extends s.a.Component {
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
					const l = i ? _e.a.open : _e.a.closed,
						d = o ? _e.a.topLevelSubSection : _e.a.subSection;
					return s.a.createElement("div", {
						className: Object(j.a)(l, d, e.className)
					}, e.depthOfParentRule > 0 ? s.a.createElement("div", {
						className: _e.a.radioOptionsSectionHeader
					}, e.parentRule.nextStepHeader || Re._("Select a rule", null, {
						hk: "3dqfv6"
					})) : null, n.map((t, n) => {
						const r = a === n;
						return s.a.createElement(s.a.Fragment, {
							key: t.reasonText || t.reasonTextToShow
						}, s.a.createElement(L.a, {
							altColor: !0,
							value: t.reasonText ? t.reasonText : "",
							label: t.reasonTextToShow,
							selected: r,
							onClick: t.nextStepReasons && t.nextStepReasons.length ? this.handleClickIfChildrenExist(n, e.depthOfParentRule + 1) : this.handleClickIfChildrenNotExist(n, e.depthOfParentRule + 1, t)
						}), r && t.canSpecifySubreddit && s.a.createElement(ae, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.subredditName,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onSubredditNameChange: this.onFieldChange("subredditName"),
							regexValid: e.fieldsValidity.subredditName,
							reportError: e.reportError,
							showErrors: e.showErrors
						}), r && t.canSpecifyUsernames && s.a.createElement(be, {
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
						}), r && t.canSpecifyThing && s.a.createElement(ce, {
							depth: e.depthOfParentRule + 1,
							isDirty: e.dirtyFields.thingId,
							onMakeFieldDirty: e.onMakeFieldDirty,
							onThingUrlChange: this.onFieldChange("thingUrl"),
							regexValid: e.fieldsValidity.thingUrl,
							reportError: e.reportError,
							showErrors: e.showErrors,
							description: t.thingInputDescription
						}), r && t.additionalCheckboxes && t.additionalCheckboxes.checkboxes && t.additionalCheckboxes.checkboxes.length && s.a.createElement(G, {
							additionalCheckboxes: t.additionalCheckboxes,
							depth: e.depthOfParentRule + 1,
							onAdditionalInfoChange: this.onFieldChange("additionalInfo")
						}), r && t.canWriteNotes && s.a.createElement(B.a, {
							depth: e.depthOfParentRule + 1,
							onCustomTextChange: this.onFieldChange("customText"),
							title: t.notesInputTitle,
							description: t.notesInputDescription
						}), s.a.createElement(ye, {
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
			var ve = c.a.wrapped(ye, "Component", _e.a);
			class Se extends s.a.Component {
				render() {
					const {
						props: e
					} = this;
					return s.a.createElement(ve, {
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
			var Pe = n("./src/reddit/controls/Button/index.tsx"),
				Fe = n("./src/reddit/helpers/reportPage/index.ts"),
				ke = n("./src/reddit/layout/row/Inline/index.tsx"),
				Oe = n("./src/reddit/models/RulesSequence/index.ts"),
				we = n("./src/reddit/components/ReportPage/FirstPage/index.m.less"),
				Ne = n.n(we);
			const Ie = c.a.header("Header", m.a),
				Te = c.a.wrapped(ke.a, "Footer", Ne.a),
				Ue = c.a.wrapped(Pe.l, "SubmitButton", Ne.a),
				je = Object(o.c)({
					initialReason: e => e.reportPage.initialReason
				});
			class Le extends s.a.Component {
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
						rulesSequence: new Oe.a,
						showErrors: !1
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					if (e.reasons && e.reasons.length && e.initialReason && !this.state.gotInitialReason) {
						const t = Object(Fe.a)(e.reasons, e.initialReason);
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
					}, s.a.createElement(Ie, null, p.fbt._("How can we help?", null, {
						hk: "1iOApB"
					})), t.map((e, t) => this.renderRulesSection(e, t)), s.a.createElement(Te, null, s.a.createElement("div", {
						className: Ne.a.contentPolicyHolder
					}, s.a.createElement(U.a, null)), s.a.createElement(Ue, {
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
					return s.a.createElement(T.a, {
						key: e.reasonTextToShow,
						onOpen: this.handleAccordionSectionOpen(t, 0),
						open: a.length > 0 && a[0] === t,
						title: e.reasonTextToShow
					}, s.a.createElement(Se, {
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
			var De = Object(a.b)(je)(Le),
				Me = n("./src/reddit/contexts/ApiContext.tsx"),
				Ae = n("./src/reddit/endpoints/accounts/index.ts"),
				Ve = n("./src/reddit/endpoints/post/report.ts"),
				qe = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				He = n("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				Ge = n("./src/reddit/selectors/user.ts"),
				Be = n("./src/reddit/pages/ReportPage/index.m.less"),
				Ke = n.n(Be);
			const {
				fbt: We
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ze = Object(o.c)({
				currentUser: Ge.m,
				reportPageRules: e => e.reportPage.reportPageRules,
				crisisFlowEnabled: He.b
			}), Xe = Object(a.b)(ze);
			class Ze extends s.a.Component {
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
							const r = new RegExp(Fe.d);
							let s = !0;
							"" === e.thingUrl.trim() && e.reason.thingIsOptional || (s = r.test(e.thingUrl.trim())), t = t && s, n = {
								...n,
								thingUrl: s
							}
						}
						if (void 0 !== e.subredditName) {
							const r = new RegExp(Fe.c).test(e.subredditName.trim());
							t = t && r, n = {
								...n,
								subredditName: r
							}
						}
						if (e.usernames && e.usernames.length) {
							const r = new RegExp(Fe.e);
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
							error: Object(qe.a)(e)
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
									r = await Object(Ae.b)(e.apiContext(), t);
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
							const r = await Object(Ve.c)(e.apiContext(), n, !0);
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
						className: Ke.a.content
					}, s.a.createElement("h1", {
						className: Ke.a.header
					}, We._("Submit a report", null, {
						hk: "3IySnr"
					})), e.reportPageRules && e.reportPageRules.length ? s.a.createElement("div", {
						className: Ke.a.form
					}, this.getContentWithModal()) : s.a.createElement("div", null, We._("Loading...", null, {
						hk: "47z90C"
					})))) : null
				}
				getContent() {
					const {
						state: e
					} = this, {
						chosenReasonPayload: t
					} = e;
					return t && t.reason.fileComplaint && e.showFileAComplaintPage ? s.a.createElement(r.Fragment, null, s.a.createElement(E, {
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
					return s.a.createElement(De, {
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
			t.default = Object(Me.b)(Xe(Ze))
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
			const o = e => r.a.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.S,
					experimentName: r.d
				}),
				i = e => r.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.S,
					experimentName: r.f
				})
		},
		"./src/redditGQL/operations/ReportPost.json": function(e) {
			e.exports = JSON.parse('{"id":"08c43db238fd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportPage.eed8696af58656bf3282.js.map