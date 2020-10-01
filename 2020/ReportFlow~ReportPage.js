// https://www.redditstatic.com/desktop2x/ReportFlow~ReportPage.d98f0c24b7e0136f8fc0.js
// Retrieved at 10/1/2020, 6:50:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow~ReportPage"], {
		"./src/lib/formatPythonString/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			const r = /%\((\w+)\)s/g;

			function a(e, t) {
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				c = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				l = n("./src/reddit/components/AccordionSection/index.m.less"),
				d = n.n(l),
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
			var h = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const f = u.a.div("Section", d.a),
				x = u.a.wrapped(c.a, "ChevronUp", d.a),
				_ = u.a.wrapped(i.a, "ChevronDown", d.a),
				b = u.a.wrapped(e => {
					var {
						className: t,
						isOpen: n
					} = e, r = h(e, ["className", "isOpen"]);
					return a.a.createElement("div", p({
						className: Object(m.a)(t, {
							[d.a.mIsOpen]: n
						})
					}, r))
				}, "ArticleWrap", d.a),
				C = u.a.wrapped(e => {
					var {
						className: t,
						isOpen: n
					} = e, r = h(e, ["className", "isOpen"]);
					return a.a.createElement("div", p({
						className: Object(m.a)(t, {
							[d.a.mIsOpen]: n
						})
					}, r))
				}, "SectionHead", d.a),
				g = u.a.div("Article", d.a);
			class y extends a.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return a.a.createElement("div", null, a.a.createElement(f, null, this.props.open ? a.a.createElement(x, null) : a.a.createElement(_, null), a.a.createElement(C, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), a.a.createElement(b, {
						isOpen: this.props.open
					}, this.props.open ? a.a.createElement(g, null, this.props.children) : null)))
				}
			}
			t.a = Object(o.b)(null, e => ({
				onSwitchSection: () => e(Object(s.i)())
			}))(y)
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				c = n.n(i);
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js"), d = s.a.div("Content", c.a), m = s.a.a("Link", c.a);
			class u extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(d, null, e.subredditOrProfile && !e.isLiveStreaming ? l._("Read the {=Reddit Content Policy}{=and [communityName] 's rules}", [l._param("=Reddit Content Policy", o.a.createElement(m, {
						target: "_blank",
						href: "".concat(r.a.redditUrl, "/help/contentpolicy")
					}, l._("Reddit Content Policy", null, {
						hk: "2ExUXr"
					}))), l._param("=and [communityName] 's rules", o.a.createElement("span", null, l._("and {=[communityName] 's rules}", [l._param("=[communityName] 's rules", o.a.createElement(m, {
						target: "_blank",
						href: "".concat(e.subredditOrProfile.url, "about/rules")
					}, l._("{communityName} 's rules", [l._param("communityName", e.subredditOrProfile.displayText)], {
						hk: "JAsFF"
					})))], {
						hk: "Vm81O"
					})))], {
						hk: "Mm0Ks"
					}) : l._("Read the {=Reddit Content Policy}", [l._param("=Reddit Content Policy", o.a.createElement(m, {
						target: "_blank",
						href: "".concat(r.a.redditUrl, "/help/contentpolicy")
					}, l._("Reddit Content Policy", null, {
						hk: "1a3o6N"
					})))], {
						hk: "7x0QT"
					}))
				}
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
				a = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				c = n("./src/reddit/models/Rule/index.ts"),
				l = n("./src/reddit/components/ReportPage/index.m.less"),
				d = n.n(l),
				m = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				u = n.n(m);
			const p = o.a.header("InputDescription", d.a);
			class h extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: c.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState(Object.assign({
							customText: e.target.value
						}, f(e.target.value))), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return a.a.createElement("div", {
						className: e.className
					}, a.a.createElement("fieldset", {
						className: d.a.fieldset
					}, e.description && a.a.createElement(p, null, e.description), a.a.createElement("div", {
						className: d.a.field
					}, a.a.createElement(s.c, {
						backgroundColorState: s.a.WhiteFields,
						className: u.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), a.a.createElement("div", {
						className: u.a.textAreaCounter
					}, "".concat(t.displayLength, "/").concat(c.a)))))
				}
			}
			const f = e => {
				const t = {
					displayLength: 0,
					maxLength: c.d
				};
				if (!e) return t;
				const n = c.a,
					r = e.length,
					a = Object(i.a)(e),
					o = a.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(c.a, r - o + 15 * a.length),
					maxLength: Math.min(c.d, n + o - 15 * a.length)
				}
			};
			t.a = o.a.wrapped(h, "Component", u.a)
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
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				c = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				l = n.n(c);
			const d = s.a.wrapped(i.e, "FormElementTitle", l.a),
				m = s.a.wrapped(i.b, "FormElementDescription", l.a);
			t.a = e => a.a.createElement("div", null, a.a.createElement(d, {
				className: Object(o.a)({
					[l.a.fake]: e.fake,
					[l.a.altColor]: e.altColor
				})
			}, e.label), e.description && a.a.createElement(m, {
				className: Object(o.a)({
					[l.a.fake]: e.fake
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
				return x
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "c", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				c = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			const p = s.a.div("icon", d.a),
				h = s.a.textarea("textarea", d.a),
				f = s.a.span("Invalid", d.a);
			var x, _;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(x || (x = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(_ || (_ = {}));
			const b = e => a.a.createElement("div", {
					className: Object(o.a)(e.isRequired && d.a.required, e.className, Object.assign({
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[d.a.mValid]: e.state === x.Valid,
						[d.a.mInvalid]: e.state === x.Invalid,
						[d.a.mWhiteField]: e.backgroundColorState === _.WhiteFields
					}))
				}, a.a.createElement("label", {
					className: Object(o.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && a.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && a.a.createElement(p, {
					className: Object(o.a)({
						[d.a.mValid]: e.state === x.Valid,
						[d.a.mInvalid]: e.state === x.Invalid
					})
				}, e.state === x.Valid && a.a.createElement(c.a, null), e.state === x.Invalid && a.a.createElement(f, null, "!")))),
				C = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: s,
						label: c,
						onKeyDown: l,
						state: p
					} = e, h = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(b, {
						backgroundColorState: t,
						className: n,
						isRequired: s,
						label: c,
						state: p
					}, a.a.createElement(i.a, m({}, h, {
						className: Object(o.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: l
					})))
				},
				g = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: s,
						label: i,
						onKeyDown: c,
						state: l
					} = e, p = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(b, {
						backgroundColorState: t,
						className: n,
						isRequired: s,
						label: i,
						state: l,
						isTextarea: !0
					}, a.a.createElement(h, m({}, p, {
						className: Object(o.a)({
							[d.a.mWhiteField]: e.backgroundColorState === _.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: c
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
				a = n.n(r),
				o = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				l = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				m = n.n(d);
			const u = o.a.wrapped(c.a, "RadioOption", m.a),
				p = o.a.wrapped(l.a, "ExpandRight", m.a);
			t.a = e => a.a.createElement(u, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, a.a.createElement(p, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? a.a.createElement(i.f, null) : a.a.createElement(i.e, null), a.a.createElement(s.a, {
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
				return s
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return l
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const s = r.a.section("FormPage", o.a),
				i = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				l = r.a.div("HomePageGroup", o.a),
				d = r.a.h1("FormPageTitle", o.a),
				m = r.a.div("FormPageSection", o.a),
				u = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				h = r.a.div("FormElement", o.a),
				f = r.a.div("FormGroupDescription", o.a),
				x = r.a.div("FormItem", o.a),
				_ = r.a.h3("FormElementTitle", o.a),
				b = r.a.div("FormElementDescription", o.a),
				C = r.a.div("FormElementError", o.a),
				g = r.a.div("FormElementSubGroup", o.a),
				y = r.a.li("FormListItem", o.a)
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
				return f
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "i", (function() {
				return _
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "g", (function() {
				return C
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(l);
			const m = r.a.wrapped(a.a, "ModalInput", d.a),
				u = r.a.input("Input", d.a),
				p = r.a.wrapped(c.a, "RadioOn", d.a),
				h = r.a.wrapped(i.a, "RadioOff", d.a),
				f = r.a.wrapped(o.a, "Checkbox", d.a),
				x = r.a.wrapped(s.a, "CheckboxSelected", d.a),
				_ = r.a.textarea("Textarea", d.a),
				b = r.a.label("StyledLabel", d.a),
				C = r.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/index.m.less"),
				o = n.n(a);
			t.a = r.a.input("input", o.a)
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.constructor.js"), n("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = n("./src/reddit/helpers/parseUrl.ts");
			const a = ["old", "new", "en", "www", "np", "m"],
				o = ["reddit.com", "reddit.local"].concat("").concat(a.map((function(e) {
					return e + ".reddit.com"
				}))).concat(a.map((function(e) {
					return e + ".reddit.local"
				}))),
				s = ["mod.reddit.com"],
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
						hostnames: o.concat("redd.it"),
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
						hostnames: s,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: s,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function c(e) {
				return (e.match(new RegExp(r.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(i).some((function(n) {
						return t = function(e, t) {
							const n = i[e];
							if (!i) throw new Error("Could not find reddit URL spec: " + e);
							const a = Object(r.a)(t);
							if (!a) return void console.error("Could not parse url", t);
							if (-1 === (n.hostnames || o).indexOf(a.hostname)) return;
							const s = a.pathname.match(n.pathname);
							if (s) {
								return {
									url: t,
									routeName: e,
									components: n.pathnameComponents.reduce((function(e, t, n) {
										return e[t] = s[n + 1], e
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]])
				}
				return n
			};
			t.a = Object(o.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: o,
					gutter: i
				} = e, m = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return a.a.createElement("div", l({
					className: Object(s.a)(c.a.expandRightContainer, t)
				}, m), a.a.createElement("div", {
					className: c.a.left,
					style: {
						flexBasis: o,
						height: r,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), a.a.createElement("div", {
					className: c.a.right
				}, Array.isArray(n) && n[1]))
			}, 2)
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const s = e => r.a.Enabled === Object(a.c)(e, {
					experimentEligibilitySelector: o.H,
					experimentName: r.c
				}),
				i = e => r.b.Enabled === Object(a.c)(e, {
					experimentEligibilitySelector: o.H,
					experimentName: r.d
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ReportFlow~ReportPage.d98f0c24b7e0136f8fc0.js.map