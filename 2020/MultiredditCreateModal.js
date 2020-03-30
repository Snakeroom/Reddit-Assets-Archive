// https://www.redditstatic.com/desktop2x/MultiredditCreateModal.808b79c0bd8697e2dd36.js
// Retrieved at 3/30/2020, 2:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditCreateModal"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = r.n(o);
			const {
				fbt: l
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement(s.b, {
				className: Object(i.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, l._("{characters} Characters", [l._param("characters", e.maxChars - e.text.length)], {
				hk: "1ewWIT"
			}))
		},
		"./src/reddit/components/MultiredditCreateModal/index.m.less": function(e, t, r) {
			e.exports = {
				descriptionTextarea: "BvM2wKFgTlLO_vHWz41sP",
				loadingIcon: "_3fhbBxjym01vboyu5QPAHu",
				nameError: "_3-VIa6wT3Iz3NII7VXiFI0"
			}
		},
		"./src/reddit/components/MultiredditCreateModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/multireddit/index.ts"),
				c = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				p = r("./src/reddit/components/ThemeProvider/index.tsx"),
				h = r("./src/reddit/components/TrackingHelper/index.tsx"),
				x = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = r("./src/reddit/helpers/multireddit/index.ts"),
				C = r("./src/reddit/helpers/trackers/customFeeds.ts"),
				g = r("./src/reddit/i18n/utils.ts"),
				_ = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = r("./src/reddit/models/Multireddit/index.ts"),
				v = r("./src/reddit/selectors/multireddit.ts"),
				y = r("./src/reddit/components/MultiredditCreateModal/index.m.less"),
				F = r.n(y);
			const S = 12,
				j = Object(x.t)({
					multiredditParams: x.c
				}),
				O = Object(s.c)({
					createError: e => e.multireddits.api.create.error,
					createFetched: e => e.multireddits.api.create.fetched,
					createPending: e => e.multireddits.api.create.pending,
					duplicateError: e => e.multireddits.api.duplicate.error,
					duplicateFetched: e => e.multireddits.api.duplicate.fetched,
					duplicatePending: e => e.multireddits.api.duplicate.pending,
					myMultireddits: v.j
				}),
				N = Object(i.b)(O, (e, t) => {
					let {
						multiredditParams: r
					} = t;
					return {
						create: (t, r) => e(Object(l.b)({
							displayName: t,
							description: r,
							shouldNavigate: !0
						})),
						duplicate: (t, a) => {
							r && e(Object(l.d)({
								fromName: r.multiredditName,
								fromUsername: r.username,
								displayName: t,
								description: a
							}))
						},
						onClose: () => e(Object(d.f)())
					}
				});
			class T extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						description: "",
						name: ""
					}, this.onNameChange = e => {
						this.setState({
							displayTextError: void 0,
							name: e.target.value
						})
					}, this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.checkDisplayTextValidity = () => {
						const e = Object(b.a)({
							displayText: this.state.name,
							myMultireddits: this.props.myMultireddits,
							thisMultireddit: null
						});
						return !e || (this.setState({
							displayTextError: e
						}), !1)
					}, this.onSubmit = () => {
						if (!this.checkDisplayTextValidity()) return;
						const {
							multiredditParams: e
						} = this.props;
						this.props.isDuplicateModal && e ? (this.props.duplicate(this.state.name.trim(), this.state.description.trim()), e.username && this.props.sendEvent(Object(C.b)(Object(E.h)(e.username, e.multiredditName)))) : this.props.create(this.state.name.trim(), this.state.description.trim())
					}
				}
				render() {
					const {
						createError: e,
						createPending: t,
						duplicateError: r,
						duplicatePending: a,
						isDuplicateModal: i,
						onClose: s
					} = this.props, {
						description: o,
						displayTextError: d,
						name: l
					} = this.state, h = e || r || d;
					return n.a.createElement(p.a, {
						forceRedditTheme: !0
					}, n.a.createElement(m.c, null, n.a.createElement(m.g, null, n.a.createElement(_.a, null, n.a.createElement(m.n, null, i ? Object(g.c)("Duplicate This Custom Feed") : Object(g.c)("Create a Custom Feed")), n.a.createElement("button", {
						onClick: s
					}, n.a.createElement(m.b, null)))), n.a.createElement(m.j, null, n.a.createElement(m.f, null, n.a.createElement(u.b, {
						isRequired: !0,
						label: Object(g.c)("custom feed name"),
						maxLength: E.c,
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onNameChange,
						state: h ? u.d.Invalid : void 0,
						value: l
					}), h ? n.a.createElement("p", {
						className: F.a.nameError
					}, d === E.a.SameName ? Object(g.c)("A custom feed with that name already exists.") : d === E.a.TooShort ? Object(g.c)("Name must contain at least two alphanumeric characters.") : Object(g.c)("Something went wrong.")) : n.a.createElement(c.a, {
						text: l,
						maxChars: E.c
					})), n.a.createElement(m.f, null, n.a.createElement(u.c, {
						className: F.a.descriptionTextarea,
						label: Object(g.c)("description (optional)"),
						maxLength: E.b,
						onChange: this.onDescriptionChange,
						value: o
					}), n.a.createElement(c.a, {
						text: o,
						maxChars: E.b
					}))), n.a.createElement(m.e, null, n.a.createElement(m.o, {
						onClick: this.onSubmit
					}, t || a ? n.a.createElement(f.a, {
						className: F.a.loadingIcon,
						sizePx: S
					}) : i ? Object(g.c)("Duplicate Custom Feed") : Object(g.c)("Create Custom Feed")))))
				}
			}
			t.default = Object(o.a)(j(N(Object(h.c)(T))))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return b
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return _
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var a = r("./node_modules/react/index.js"),
				n = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/controls/Input/index.tsx"),
				d = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var r = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (r[a[n]] = e[a[n]])
				}
				return r
			};
			const p = s.a.div("icon", c.a),
				h = s.a.textarea("textarea", c.a),
				x = s.a.span("Invalid", c.a);
			var f, b;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(b || (b = {}));
			const C = e => n.a.createElement("div", {
					className: Object(i.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === f.Valid,
						[c.a.mInvalid]: e.state === f.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
					}))
				}, n.a.createElement("label", {
					className: Object(i.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && n.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && n.a.createElement(p, {
					className: Object(i.a)({
						[c.a.mValid]: e.state === f.Valid,
						[c.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && n.a.createElement(d.a, null), e.state === f.Invalid && n.a.createElement(x, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: a,
						isRequired: s,
						label: d,
						onKeyDown: l,
						state: p
					} = e, h = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return n.a.createElement(C, {
						backgroundColorState: t,
						className: r,
						isRequired: s,
						label: d,
						state: p
					}, n.a.createElement(o.a, m({}, h, {
						className: Object(i.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: l
					})))
				},
				_ = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: a,
						isRequired: s,
						label: o,
						onKeyDown: d,
						state: l
					} = e, p = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return n.a.createElement(C, {
						backgroundColorState: t,
						className: r,
						isRequired: s,
						label: o,
						state: l,
						isTextarea: !0
					}, n.a.createElement(h, m({}, p, {
						className: Object(i.a)({
							[c.a.mWhiteField]: e.backgroundColorState === b.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: d
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return s
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return l
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "j", (function() {
				return E
			}));
			var a = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				i = r.n(n);
			const s = a.a.section("FormPage", i.a),
				o = a.a.h1("HomePageTitle", i.a),
				d = a.a.button("HomePageBreadcrumb", i.a),
				l = a.a.div("HomePageGroup", i.a),
				c = a.a.h1("FormPageTitle", i.a),
				m = a.a.div("FormPageSection", i.a),
				u = a.a.div("FormGroup", i.a),
				p = a.a.h2("FormGroupTitle", i.a),
				h = a.a.div("FormElement", i.a),
				x = a.a.div("FormGroupDescription", i.a),
				f = a.a.div("FormItem", i.a),
				b = a.a.h3("FormElementTitle", i.a),
				C = a.a.div("FormElementDescription", i.a),
				g = a.a.div("FormElementError", i.a),
				_ = a.a.div("FormElementSubGroup", i.a),
				E = a.a.li("FormListItem", i.a)
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/lib/lessComponent.tsx"),
				n = r("./src/reddit/controls/Input/index.m.less"),
				i = r.n(n);
			t.a = a.a.input("input", i.a)
		},
		"./src/reddit/helpers/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = r("./src/reddit/models/Multireddit/index.ts");
			const n = e => {
				let {
					displayText: t,
					myMultireddits: r,
					thisMultireddit: n
				} = e;
				return t.replace(/[^0-9A-Za-z]+/gi, "").length < a.d ? a.a.TooShort : r.filter(e => {
					let {
						url: t
					} = e;
					return !n || t !== n.url
				}).map(e => {
					let {
						displayText: t
					} = e;
					return t.toLowerCase()
				}).indexOf(t.trim().toLowerCase()) > -1 ? a.a.SameName : void 0
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				n = r.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=MultiredditCreateModal.808b79c0bd8697e2dd36.js.map