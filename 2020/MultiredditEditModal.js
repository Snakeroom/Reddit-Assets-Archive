// https://www.redditstatic.com/desktop2x/MultiredditEditModal.fd4b0b9144781648d4c2.js
// Retrieved at 4/2/2020, 7:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditEditModal"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				l = r.n(o);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(i.b, {
				className: Object(s.a)(e.className, l.a.container, e.text.length > e.maxChars ? l.a.mOverflow : null)
			}, d._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [d._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/MultiredditEditModal/index.m.less": function(e, t, r) {
			e.exports = {
				formRow: "_2gkalig1PLljG4GN4W8WM3",
				label: "_1AaOOejGpRapu6YBN0QCG",
				labelTitle: "tWJINFQfSJzC0cPWNQqxD",
				labelDescription: "_3HtLE1J0ajaRbZMmNcmdg",
				dropdownBtn: "_3wGQg3fudI_VWWiwF0dSNb",
				disabled: "S4dxaNRivrxeHqQXiMbyI",
				descriptionTextarea: "_3y_4TOl8q_L68lwJ8fK1jh",
				displayTextError: "_1nFUeamNqzwbdDKEVMBqRJ",
				footer: "_1NdPly0N7QGtDeWtD018pL",
				error: "_3KJ-oOx30gIAisW5g4KFE4",
				errorText: "_3UGftld41e4Bn7x4r-TXbV",
				loadingIcon: "_117rTJRmu6rzru_d4uQSTE"
			}
		},
		"./src/reddit/components/MultiredditEditModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/higherOrderComponents/asTooltip.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/actions/multireddit/index.ts"),
				u = r("./src/reddit/actions/tooltip.ts"),
				p = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				x = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				f = r("./src/reddit/controls/Dropdown/index.tsx"),
				g = r("./src/reddit/controls/Dropdown/Row.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				w = r("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = r("./src/reddit/helpers/multireddit/index.ts"),
				C = r("./src/reddit/i18n/components.tsx"),
				_ = r("./src/reddit/i18n/utils.ts"),
				O = r("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				S = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				T = r("./src/reddit/models/Multireddit/index.ts"),
				N = r("./src/reddit/selectors/multireddit.ts"),
				j = r("./src/reddit/selectors/tooltip.ts"),
				D = r("./src/reddit/components/MultiredditEditModal/index.m.less"),
				F = r.n(D);
			const I = Object(l.a)(f.a),
				P = Object(_.c)("public"),
				M = Object(_.c)("private"),
				k = 12,
				L = "multi-edit-modal-visibility",
				R = Object(i.c)({
					apiFetched: e => e.multireddits.api.edit.fetched,
					apiPending: e => e.multireddits.api.edit.pending,
					isDropdownOpen: Object(j.b)(L),
					multireddit: b.d,
					myMultireddits: N.j
				}),
				G = Object(b.t)(),
				K = Object(s.b)(R, e => ({
					edit: t => e(Object(m.e)(t)),
					onClose: () => e(Object(c.f)()),
					onToggleDropdown: () => e(Object(u.h)({
						tooltipId: L
					}))
				}), (e, t, r) => Object.assign({}, e, t, r, {
					onSubmit: r => {
						let {
							visibility: n,
							description: a,
							displayText: s
						} = r;
						e.multireddit && (e.multireddit.description !== a || e.multireddit.displayText !== s || e.multireddit.visibility !== n ? t.edit({
							description: a,
							displayText: s,
							multipath: e.multireddit.url,
							visibility: n
						}) : t.onClose())
					}
				}));
			class W extends a.a.Component {
				constructor(e) {
					super(e), this.onDescriptionChange = e => {
						this.setState({
							description: e.target.value
						})
					}, this.onDisplayTextChange = e => {
						this.setState({
							displayText: e.target.value,
							displayTextError: void 0
						})
					}, this.onShowOnProfileToggle = () => {
						this.setState(e => e.visibility === T.e.Private ? e : Object.assign({}, e, {
							visibility: e.visibility === T.e.Public ? T.e.Hidden : T.e.Public
						}))
					}, this.onRowClick = e => () => {
						this.setState({
							visibility: e
						})
					}, this.checkDisplayTextValidity = () => {
						const {
							myMultireddits: e,
							multireddit: t
						} = this.props, {
							displayText: r
						} = this.state, n = Object(E.a)({
							displayText: r,
							myMultireddits: e,
							thisMultireddit: t
						});
						return !n || (this.setState({
							displayTextError: n
						}), !1)
					}, this.onSubmit = () => {
						const {
							description: e,
							displayText: t,
							visibility: r
						} = this.state;
						this.checkDisplayTextValidity() && this.props.onSubmit({
							visibility: r,
							description: e,
							displayText: t
						})
					};
					const {
						multireddit: t
					} = e;
					this.state = t ? {
						description: t.description || "",
						displayText: t.displayText,
						visibility: t.visibility
					} : {
						description: "",
						displayText: "",
						visibility: T.e.Private
					}
				}
				renderDisplayText() {
					const {
						displayText: e,
						displayTextError: t
					} = this.state;
					return a.a.createElement(x.f, null, a.a.createElement(h.b, {
						label: Object(_.c)("custom feed name"),
						onBlur: this.checkDisplayTextValidity,
						onChange: this.onDisplayTextChange,
						value: e,
						maxLength: T.c,
						state: t ? h.d.Invalid : void 0,
						isRequired: !0
					}), t ? a.a.createElement("p", {
						className: F.a.displayTextError
					}, t === T.a.SameName ? Object(_.c)("A custom feed with that name already exists") : t === T.a.TooShort ? Object(_.c)("Name must contain at least two alphanumeric characters") : Object(_.c)("Something went wrong with this name, maybe try something else?")) : a.a.createElement(p.a, {
						maxChars: T.c,
						text: e
					}))
				}
				renderDescription() {
					const {
						description: e
					} = this.state;
					return a.a.createElement(x.f, null, a.a.createElement(h.c, {
						className: F.a.descriptionTextarea,
						label: Object(_.c)("description (optional)"),
						maxLength: T.b,
						onChange: this.onDescriptionChange,
						value: e
					}), a.a.createElement(p.a, {
						maxChars: T.b,
						text: e
					}))
				}
				renderVisibilityDropdown() {
					const {
						props: {
							isDropdownOpen: e,
							onToggleDropdown: t
						},
						state: {
							visibility: r
						}
					} = this;
					return a.a.createElement(x.f, {
						className: F.a.formRow
					}, a.a.createElement("div", {
						className: F.a.label
					}, a.a.createElement("h3", {
						className: F.a.labelTitle
					}, a.a.createElement(C.c, null, "Custom Feed Privacy")), a.a.createElement("div", {
						className: F.a.labelDescription
					}, a.a.createElement(C.c, null, "Public Custom Feeds are visible to anyone with the link. Private is only viewable by you, the owner."))), a.a.createElement("div", null, a.a.createElement(y.n, {
						className: F.a.dropdownBtn,
						id: L,
						onClick: t
					}, r === T.e.Private ? M : P, a.a.createElement(O.b, null)), a.a.createElement(I, {
						isOpen: e,
						isOverlay: !0,
						targetPosition: ["center", "bottom"],
						tooltipId: L,
						tooltipPosition: ["center", "top"]
					}, a.a.createElement(g.b, {
						displayText: M,
						noIcon: !0,
						onClick: this.onRowClick(T.e.Private),
						isSelected: r === T.e.Private
					}), a.a.createElement(g.b, {
						displayText: P,
						isSelected: r === T.e.Public || r === T.e.Hidden,
						noIcon: !0,
						onClick: this.onRowClick(T.e.Public)
					}))))
				}
				renderShowOnProfileToggle() {
					const {
						visibility: e
					} = this.state;
					return a.a.createElement(x.f, {
						className: Object(d.a)(F.a.formRow, {
							[F.a.disabled]: e === T.e.Private
						})
					}, a.a.createElement("div", {
						className: F.a.label
					}, a.a.createElement("h3", {
						className: F.a.labelTitle
					}, a.a.createElement(C.c, null, "Show on profile")), a.a.createElement("div", {
						className: F.a.labelDescription
					}, a.a.createElement(C.c, null, "Choose whether this Custom Feed is visible to visitors of your profile"))), a.a.createElement(w.a, {
						className: F.a.toggle,
						disabled: e === T.e.Private,
						on: e === T.e.Public,
						onToggle: this.onShowOnProfileToggle
					}))
				}
				render() {
					const {
						apiPending: e,
						multireddit: t,
						onClose: r
					} = this.props;
					return t ? a.a.createElement(x.c, null, a.a.createElement(x.g, null, a.a.createElement(S.a, null, a.a.createElement(x.n, null, a.a.createElement(C.c, null, "Edit Custom Feed")), a.a.createElement("button", {
						onClick: r
					}, a.a.createElement(x.b, null)))), a.a.createElement(x.j, null, this.renderDisplayText(), this.renderDescription(), this.renderVisibilityDropdown(), this.renderShowOnProfileToggle()), a.a.createElement(x.e, {
						className: F.a.footer
					}, a.a.createElement(x.o, {
						onClick: this.onSubmit
					}, e ? a.a.createElement(v.a, {
						className: F.a.loadingIcon,
						sizePx: k
					}) : a.a.createElement(C.c, null, "done")))) : a.a.createElement("div", {
						className: F.a.error
					}, a.a.createElement("p", {
						className: F.a.errorText
					}, a.a.createElement(C.c, null, "Sorry, something went wrong")))
				}
			}
			t.default = Object(o.a)(G(K(W)))
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
				return b
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/controls/Input/index.tsx"),
				l = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = r.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
				}
				return r
			};
			const p = i.a.div("icon", c.a),
				x = i.a.textarea("textarea", c.a),
				h = i.a.span("Invalid", c.a);
			var b, y;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(b || (b = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(y || (y = {}));
			const f = e => a.a.createElement("div", {
					className: Object(s.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === b.Valid,
						[c.a.mInvalid]: e.state === b.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === y.WhiteFields
					}))
				}, a.a.createElement("label", {
					className: Object(s.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && a.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && a.a.createElement(p, {
					className: Object(s.a)({
						[c.a.mValid]: e.state === b.Valid,
						[c.a.mInvalid]: e.state === b.Invalid
					})
				}, e.state === b.Valid && a.a.createElement(l.a, null), e.state === b.Invalid && a.a.createElement(h, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: n,
						isRequired: i,
						label: l,
						onKeyDown: d,
						state: p
					} = e, x = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(f, {
						backgroundColorState: t,
						className: r,
						isRequired: i,
						label: l,
						state: p
					}, a.a.createElement(o.a, m({}, x, {
						className: Object(s.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: d
					})))
				},
				v = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: n,
						isRequired: i,
						label: o,
						onKeyDown: l,
						state: d
					} = e, p = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return a.a.createElement(f, {
						backgroundColorState: t,
						className: r,
						isRequired: i,
						label: o,
						state: d,
						isTextarea: !0
					}, a.a.createElement(x, m({}, p, {
						className: Object(s.a)({
							[c.a.mWhiteField]: e.backgroundColorState === y.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: n,
						onKeyDown: l
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
				return i
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "n", (function() {
				return l
			})), r.d(t, "o", (function() {
				return d
			})), r.d(t, "m", (function() {
				return c
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "i", (function() {
				return b
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "j", (function() {
				return w
			}));
			var n = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = r.n(a);
			const i = n.a.section("FormPage", s.a),
				o = n.a.h1("HomePageTitle", s.a),
				l = n.a.button("HomePageBreadcrumb", s.a),
				d = n.a.div("HomePageGroup", s.a),
				c = n.a.h1("FormPageTitle", s.a),
				m = n.a.div("FormPageSection", s.a),
				u = n.a.div("FormGroup", s.a),
				p = n.a.h2("FormGroupTitle", s.a),
				x = n.a.div("FormElement", s.a),
				h = n.a.div("FormGroupDescription", s.a),
				b = n.a.div("FormItem", s.a),
				y = n.a.h3("FormElementTitle", s.a),
				f = n.a.div("FormElementDescription", s.a),
				g = n.a.div("FormElementError", s.a),
				v = n.a.div("FormElementSubGroup", s.a),
				w = n.a.li("FormListItem", s.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var n = r("./node_modules/lodash/throttle.js"),
				a = r.n(n),
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = r("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				c = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = r("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = r("./src/reddit/controls/Dropdown/index.m.less"),
				p = r.n(u),
				x = r("./src/reddit/controls/Dropdown/row.m.less"),
				h = r.n(x);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var r = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
				}
				return r
			};
			class f extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, r = Object(o.a)(h.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(l.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: r
					}, e.children), i.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: r
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(o.a)(h.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(c.a, {
						className: h.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, r = y(e, ["className"]);
				const n = Object(o.a)(h.a.row, t, {
					[h.a.mIsInteractive]: !r.noHover,
					[h.a.mIsSelected]: r.isSelected,
					[h.a.topics]: r.isTopicsStyle
				});
				return i.a.createElement(f, b({
					className: n
				}, r))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, r) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/controls/Input/index.m.less"),
				s = r.n(a);
			t.a = n.a.input("input", s.a)
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, r) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				s = r("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = r.n(s);
			t.a = n.a.wrapped(a.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = r("./src/reddit/models/Multireddit/index.ts");
			const a = e => {
				let {
					displayText: t,
					myMultireddits: r,
					thisMultireddit: a
				} = e;
				return t.replace(/[^0-9A-Za-z]+/gi, "").length < n.d ? n.a.TooShort : r.filter(e => {
					let {
						url: t
					} = e;
					return !a || t !== a.url
				}).map(e => {
					let {
						displayText: t
					} = e;
					return t.toLowerCase()
				}).indexOf(t.trim().toLowerCase()) > -1 ? n.a.SameName : void 0
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, r) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = r.n(i);
			const l = r("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(s.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", o.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=MultiredditEditModal.fd4b0b9144781648d4c2.js.map