// https://www.redditstatic.com/desktop2x/ReportFlow~ReportPage.f5340e2a8429acf9f872.js
// Retrieved at 4/27/2020, 5:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ReportFlow~ReportPage"], {
		"./src/lib/formatPythonString/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/es6.regexp.replace.js");
			const r = /%\((\w+)\)s/g;

			function o(e, t) {
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
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/actions/tooltip.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				c = n("./src/reddit/components/AccordionSection/index.m.less"),
				d = n.n(c),
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const x = u.a.div("Section", d.a),
				f = u.a.wrapped(l.a, "ChevronUp", d.a),
				b = u.a.wrapped(i.a, "ChevronDown", d.a),
				_ = u.a.wrapped(e => {
					var {
						className: t,
						isOpen: n
					} = e, r = h(e, ["className", "isOpen"]);
					return o.a.createElement("div", p({
						className: Object(m.a)(t, {
							[d.a.mIsOpen]: n
						})
					}, r))
				}, "ArticleWrap", d.a),
				g = u.a.wrapped(e => {
					var {
						className: t,
						isOpen: n
					} = e, r = h(e, ["className", "isOpen"]);
					return o.a.createElement("div", p({
						className: Object(m.a)(t, {
							[d.a.mIsOpen]: n
						})
					}, r))
				}, "SectionHead", d.a),
				C = u.a.div("Article", d.a);
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.handleClick = () => {
						this.props.open || (this.props.onOpen(), this.props.onSwitchSection())
					}
				}
				render() {
					return o.a.createElement("div", null, o.a.createElement(x, null, this.props.open ? o.a.createElement(f, null) : o.a.createElement(b, null), o.a.createElement(g, {
						onClick: this.handleClick,
						isOpen: this.props.open
					}, this.props.title), o.a.createElement(_, {
						isOpen: this.props.open
					}, this.props.open ? o.a.createElement(C, null, this.props.children) : null)))
				}
			}
			t.a = Object(a.b)(null, e => ({
				onSwitchSection: () => e(Object(s.i)())
			}))(v)
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/reddit/components/Translated/index.tsx"),
				i = n("./src/reddit/components/ContentPolicy/index.m.less"),
				l = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("Content", l.a),
				m = c.a.a("Link", l.a);
			class u extends a.a.Component {
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(d, null, a.a.createElement(s.a, {
						msgId: "reportFlow.contentPolicy.readThe"
					}), " ", a.a.createElement(m, {
						target: "_blank",
						href: "".concat(r.a.redditUrl, "/help/contentpolicy")
					}, a.a.createElement(s.a, {
						msgId: "reportFlow.contentPolicy.link"
					})), e.subredditOrProfile && !e.isLiveStreaming ? a.a.createElement("span", null, " ", a.a.createElement(s.a, {
						msgId: "reportFlow.contentPolicy.and"
					}), " ", a.a.createElement(m, {
						target: "_blank",
						href: "".concat(e.subredditOrProfile.url, "about/rules")
					}, e.subredditOrProfile.displayText, "'s ", a.a.createElement(s.a, {
						msgId: "reportFlow.contentPolicy.rules"
					}))) : null)
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
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				i = n("./src/reddit/components/Translated/index.tsx"),
				l = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.regexp.constructor.js"), n("./node_modules/core-js/modules/es6.regexp.match.js"), n("./node_modules/lodash/pick.js")),
				c = n.n(l),
				d = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				m = n.n(d);
			const u = /\b(https?|chrome):\/\/[^\s$.?#].[^\s]*\b/;
			var p = e => {
				if (!e) return null;
				const t = m.a.parse(e);
				return c()(t, ["protocol", "hostname", "port", "pathname", "search", "hash", "host"])
			};
			const h = ["old", "new", "en", "www", "np", "m"],
				x = ["reddit.com", "reddit.local"].concat("").concat(h.map((function(e) {
					return e + ".reddit.com"
				}))).concat(h.map((function(e) {
					return e + ".reddit.local"
				}))),
				f = ["mod.reddit.com"],
				b = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: x.concat("redd.it"),
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
						hostnames: f,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: f,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function _(e) {
				return (e.match(new RegExp(u, "g")) || []).map((function(e) {
					let t;
					return Object.keys(b).some((function(n) {
						return t = function(e, t) {
							const n = b[e];
							if (!b) throw new Error("Could not find reddit URL spec: " + e);
							const r = p(t);
							if (!r) return void console.error("Could not parse url", t);
							if (-1 === (n.hostnames || x).indexOf(r.hostname)) return;
							const o = r.pathname.match(n.pathname);
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
			var g = n("./src/reddit/models/Rule/index.ts"),
				C = n("./src/reddit/components/ReportPage/index.m.less"),
				v = n.n(C),
				y = n("./src/reddit/components/ReportPage/CustomTextInput/index.m.less"),
				S = n.n(y);
			const O = a.a.header("InputDescription", v.a);
			class E extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						customText: "",
						maxLength: g.d,
						displayLength: 0
					}, this.onCustomTextChange = e => {
						this.setState(Object.assign({
							customText: e.target.value
						}, j(e.target.value))), this.props.onCustomTextChange(e.target.value)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement("fieldset", {
						className: v.a.fieldset
					}, e.description && o.a.createElement(O, null, e.description), o.a.createElement("div", {
						className: v.a.field
					}, o.a.createElement(s.c, {
						backgroundColorState: s.a.WhiteFields,
						className: S.a.customTextInput,
						label: e.title,
						maxLength: t.maxLength,
						onChange: this.onCustomTextChange,
						value: t.customText
					}), o.a.createElement("div", {
						className: S.a.textAreaCounter
					}, o.a.createElement(i.a, {
						msgId: "reportPage.form.textAreaCounter",
						replacements: {
							length: t.displayLength,
							maxLength: g.a
						}
					})))))
				}
			}
			const j = e => {
				const t = {
					displayLength: 0,
					maxLength: g.d
				};
				if (!e) return t;
				const n = g.a,
					r = e.length,
					o = _(e),
					a = o.reduce((e, t) => t ? e + t.url.length : e, 0);
				return {
					displayLength: Math.min(g.a, r - a + 15 * o.length),
					maxLength: Math.min(g.d, n + a - 15 * o.length)
				}
			};
			t.a = a.a.wrapped(E, "Component", S.a)
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
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.m.less"),
				c = n.n(l);
			const d = s.a.wrapped(i.e, "FormElementTitle", c.a),
				m = s.a.wrapped(i.b, "FormElementDescription", c.a);
			t.a = e => o.a.createElement("div", null, o.a.createElement(d, {
				className: Object(a.a)({
					[c.a.fake]: e.fake,
					[c.a.altColor]: e.altColor
				})
			}, e.label), e.description && o.a.createElement(m, {
				className: Object(a.a)({
					[c.a.fake]: e.fake
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
				return f
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				l = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				d = n.n(c);

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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			const p = s.a.div("icon", d.a),
				h = s.a.textarea("textarea", d.a),
				x = s.a.span("Invalid", d.a);
			var f, b;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(b || (b = {}));
			const _ = e => o.a.createElement("div", {
					className: Object(a.a)(e.isRequired && d.a.required, e.className, Object.assign({
						[d.a.container]: !e.isTextarea,
						[d.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[d.a.mValid]: e.state === f.Valid,
						[d.a.mInvalid]: e.state === f.Invalid,
						[d.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
					}))
				}, o.a.createElement("label", {
					className: Object(a.a)({
						[d.a.field]: !e.isTextarea,
						[d.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && o.a.createElement("span", {
					className: d.a.label
				}, e.label), !!e.state && o.a.createElement(p, {
					className: Object(a.a)({
						[d.a.mValid]: e.state === f.Valid,
						[d.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && o.a.createElement(l.a, null), e.state === f.Invalid && o.a.createElement(x, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: s,
						label: l,
						onKeyDown: c,
						state: p
					} = e, h = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return o.a.createElement(_, {
						backgroundColorState: t,
						className: n,
						isRequired: s,
						label: l,
						state: p
					}, o.a.createElement(i.a, m({}, h, {
						className: Object(a.a)(d.a.input, d.a.control, {
							[d.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: r,
						onKeyDown: c
					})))
				},
				C = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: r,
						isRequired: s,
						label: i,
						onKeyDown: l,
						state: c
					} = e, p = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return o.a.createElement(_, {
						backgroundColorState: t,
						className: n,
						isRequired: s,
						label: i,
						state: c,
						isTextarea: !0
					}, o.a.createElement(h, m({}, p, {
						className: Object(a.a)({
							[d.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
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
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/FormElementLabel/index.tsx"),
				i = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/RadioInput/RadioOptionElement/index.m.less"),
				m = n.n(d);
			const u = a.a.wrapped(l.a, "RadioOption", m.a),
				p = a.a.wrapped(c.a, "ExpandRight", m.a);
			t.a = e => o.a.createElement(u, {
				value: e.value,
				selected: e.selected,
				onClick: e.onClick
			}, o.a.createElement(p, {
				heightLeft: 16,
				widthLeft: 16
			}, e.selected ? o.a.createElement(i.f, null) : o.a.createElement(i.e, null), o.a.createElement(s.a, {
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
				return l
			})), n.d(t, "o", (function() {
				return c
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
				return x
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "j", (function() {
				return v
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(o);
			const s = r.a.section("FormPage", a.a),
				i = r.a.h1("HomePageTitle", a.a),
				l = r.a.button("HomePageBreadcrumb", a.a),
				c = r.a.div("HomePageGroup", a.a),
				d = r.a.h1("FormPageTitle", a.a),
				m = r.a.div("FormPageSection", a.a),
				u = r.a.div("FormGroup", a.a),
				p = r.a.h2("FormGroupTitle", a.a),
				h = r.a.div("FormElement", a.a),
				x = r.a.div("FormGroupDescription", a.a),
				f = r.a.div("FormItem", a.a),
				b = r.a.h3("FormElementTitle", a.a),
				_ = r.a.div("FormElementDescription", a.a),
				g = r.a.div("FormElementError", a.a),
				C = r.a.div("FormElementSubGroup", a.a),
				v = r.a.li("FormListItem", a.a)
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
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "g", (function() {
				return g
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/ModalInput.tsx"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				s = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				l = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const m = r.a.wrapped(o.a, "ModalInput", d.a),
				u = r.a.input("Input", d.a),
				p = r.a.wrapped(l.a, "RadioOn", d.a),
				h = r.a.wrapped(i.a, "RadioOff", d.a),
				x = r.a.wrapped(a.a, "Checkbox", d.a),
				f = r.a.wrapped(s.a, "CheckboxSelected", d.a),
				b = r.a.textarea("Textarea", d.a),
				_ = r.a.label("StyledLabel", d.a),
				g = r.a.input("StyledFileInput", d.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				a = n.n(o);
			t.a = r.a.input("input", a.a)
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
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
				o = n.n(r),
				a = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
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
					var o = 0;
					for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
				}
				return n
			};
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: n,
					heightLeft: r,
					widthLeft: a,
					gutter: i
				} = e, m = d(e, ["className", "children", "heightLeft", "widthLeft", "gutter"]);
				return o.a.createElement("div", c({
					className: Object(s.a)(l.a.expandRightContainer, t)
				}, m), o.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: a,
						height: r,
						marginRight: i
					}
				}, Array.isArray(n) && n[0]), o.a.createElement("div", {
					className: l.a.right
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
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const s = e => r.a.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: a.H,
					experimentName: r.c
				}),
				i = e => r.b.Enabled === Object(o.c)(e, {
					experimentEligibilitySelector: a.H,
					experimentName: r.d
				})
		}
	}
]);
//# sourceMappingURL=ReportFlow~ReportPage.f5340e2a8429acf9f872.js.map