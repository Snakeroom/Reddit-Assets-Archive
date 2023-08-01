// https://www.redditstatic.com/desktop2x/6.287eb2bf2d76e95ecc6f.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[6], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return s(e) + t
			}
		},
		"./src/devPlatform/components/FormModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/devPlatform/components/FormModal/modals.ts"),
				d = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/fbt/lib/FbtPublic.js")),
				c = n("./node_modules/@devvit/protos/index.js"),
				u = n("./src/lib/lessComponent.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				h = n("./src/reddit/controls/Input/index.tsx"),
				f = n("./src/reddit/controls/NumberInput/index.tsx"),
				v = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				b = n("./src/devPlatform/components/FormRenderer/index.m.less"),
				x = n.n(b);
			const g = u.a.div("FormFooterWrapper", x.a),
				C = u.a.div("FormHeaderWrapper", x.a),
				E = u.a.div("FormRendererWrapper", x.a),
				I = u.a.div("FormRow", x.a),
				O = u.a.div("FormStringRow", x.a),
				w = u.a.div("GroupField", x.a),
				_ = u.a.label("GroupFieldLabel", x.a),
				N = u.a.div("GroupFieldsContainer", x.a),
				S = u.a.div("HelpText", x.a),
				k = u.a.div("LabelAndHelpTextWrapper", x.a),
				T = u.a.div("NumberInputWrapper", x.a),
				R = u.a.div("SelectionRow", x.a),
				y = u.a.p("TextWrapper", x.a),
				F = u.a.div("Wrapper", x.a);
			class D extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						values: this.getDefaultValues(e.form.fields)
					}
				}
				getDefaultValues(e) {
					var t, n, s, a, l, i, o, r;
					let d = new Map;
					for (const u of e) switch (u.fieldType) {
						case c.p.STRING:
						case c.p.PARAGRAPH:
							d.set(u.fieldId, null === (t = u.defaultValue) || void 0 === t ? void 0 : t.stringValue);
							break;
						case c.p.NUMBER:
							d.set(u.fieldId, null === (n = u.defaultValue) || void 0 === n ? void 0 : n.numberValue);
							break;
						case c.p.BOOLEAN:
							d.set(u.fieldId, null === (s = u.defaultValue) || void 0 === s ? void 0 : s.boolValue);
							break;
						case c.p.SELECTION:
							d.set(u.fieldId, null === (l = null === (a = u.defaultValue) || void 0 === a ? void 0 : a.selectionValue) || void 0 === l ? void 0 : l.values);
							break;
						case c.p.GROUP:
							d = new Map([...d, ...this.getDefaultValues(null !== (r = null === (o = null === (i = u.fieldConfig) || void 0 === i ? void 0 : i.groupConfig) || void 0 === o ? void 0 : o.fields) && void 0 !== r ? r : [])])
					}
					return d
				}
				updateValue(e, t) {
					this.setState(n => {
						let {
							values: s
						} = n;
						return {
							values: new Map([...s, [e, t]])
						}
					})
				}
				getMissingRequiredFields(e) {
					var t, n, s;
					let a = [];
					for (const l of e)
						if (l.required)
							if (l.fieldType === c.p.GROUP) a = [...a, ...this.getMissingRequiredFields(null !== (s = null === (n = null === (t = l.fieldConfig) || void 0 === t ? void 0 : t.groupConfig) || void 0 === n ? void 0 : n.fields) && void 0 !== s ? s : [])];
							else if (l.fieldType === c.p.SELECTION) {
						const e = this.state.values.get(l.fieldId);
						null != e && 0 !== e.length || a.push(l.fieldId)
					} else {
						const e = this.state.values.get(l.fieldId);
						null != e && "" !== e || a.push(l.fieldId)
					}
					return a
				}
				buildResults(e) {
					var t, n, s, a, l;
					let i = {};
					for (const o of e) switch (o.fieldType !== c.p.GROUP && (i[o.fieldId] = c.q.fromJSON({
						fieldType: o.fieldType
					})), Object(c.hb)(o.fieldType)) {
						case c.p.STRING:
						case c.p.PARAGRAPH:
							i[o.fieldId].stringValue = this.state.values.get(o.fieldId);
							break;
						case c.p.NUMBER:
							i[o.fieldId].numberValue = null !== (t = this.state.values.get(o.fieldId)) && void 0 !== t ? t : 0;
							break;
						case c.p.BOOLEAN:
							i[o.fieldId].boolValue = Boolean(this.state.values.get(o.fieldId));
							break;
						case c.p.SELECTION:
							i[o.fieldId].selectionValue = {
								values: null !== (n = this.state.values.get(o.fieldId)) && void 0 !== n ? n : []
							};
							break;
						case c.p.GROUP:
							i = {
								...i,
								...this.buildResults(null !== (l = null === (a = null === (s = o.fieldConfig) || void 0 === s ? void 0 : s.groupConfig) || void 0 === a ? void 0 : a.fields) && void 0 !== l ? l : [])
							}
					}
					return i
				}
				onSubmit() {
					const {
						form: e
					} = this.props, t = this.buildResults(e.fields);
					this.props.onSubmitClick(t)
				}
				renderStringField(e) {
					var t, n, s, l, i, o, r;
					return a.a.createElement(O, {
						key: e.fieldId
					}, a.a.createElement("label", {
						htmlFor: e.fieldId
					}, e.label), a.a.createElement(h.a, {
						id: e.fieldId,
						disabled: e.disabled,
						maxLength: null === (n = null === (t = e.fieldConfig) || void 0 === t ? void 0 : t.stringConfig) || void 0 === n ? void 0 : n.maxLength,
						minLength: null === (l = null === (s = e.fieldConfig) || void 0 === s ? void 0 : s.stringConfig) || void 0 === l ? void 0 : l.minLength,
						placeholder: null === (o = null === (i = e.fieldConfig) || void 0 === i ? void 0 : i.stringConfig) || void 0 === o ? void 0 : o.placeholder,
						required: e.required,
						value: null !== (r = this.state.values.get(e.fieldId)) && void 0 !== r ? r : "",
						onChange: t => this.updateValue(e.fieldId, t.target.value)
					}), e.helpText && a.a.createElement(S, null, e.helpText))
				}
				renderParagraphField(e) {
					var t, n, s, l, i, o, r;
					return a.a.createElement(O, {
						key: e.fieldId
					}, a.a.createElement("label", {
						htmlFor: e.fieldId
					}, e.label), a.a.createElement("textarea", {
						id: e.fieldId,
						disabled: e.disabled,
						maxLength: null === (n = null === (t = e.fieldConfig) || void 0 === t ? void 0 : t.paragraphConfig) || void 0 === n ? void 0 : n.maxCharacters,
						placeholder: null === (l = null === (s = e.fieldConfig) || void 0 === s ? void 0 : s.paragraphConfig) || void 0 === l ? void 0 : l.placeholder,
						required: e.required,
						rows: null === (o = null === (i = e.fieldConfig) || void 0 === i ? void 0 : i.paragraphConfig) || void 0 === o ? void 0 : o.lineHeight,
						value: null !== (r = this.state.values.get(e.fieldId)) && void 0 !== r ? r : "",
						onChange: t => this.updateValue(e.fieldId, t.target.value)
					}), e.helpText && a.a.createElement(S, null, e.helpText))
				}
				renderNumberField(e) {
					var t, n, s, l, i;
					return a.a.createElement(I, {
						key: e.fieldId
					}, a.a.createElement(k, null, a.a.createElement("label", {
						htmlFor: e.fieldId
					}, e.label), e.helpText && a.a.createElement(S, null, e.helpText)), a.a.createElement(T, null, a.a.createElement(f.a, {
						id: e.fieldId,
						disabled: e.disabled,
						max: null === (n = null === (t = e.fieldConfig) || void 0 === t ? void 0 : t.numberConfig) || void 0 === n ? void 0 : n.max,
						min: null === (l = null === (s = e.fieldConfig) || void 0 === s ? void 0 : s.numberConfig) || void 0 === l ? void 0 : l.min,
						value: null !== (i = this.state.values.get(e.fieldId)) && void 0 !== i ? i : 0,
						onChange: t => this.updateValue(e.fieldId, t)
					})))
				}
				renderBooleanField(e) {
					var t;
					const n = null !== (t = this.state.values.get(e.fieldId)) && void 0 !== t && t;
					return a.a.createElement(I, {
						key: e.fieldId
					}, a.a.createElement(k, null, a.a.createElement("label", {
						htmlFor: e.fieldId
					}, e.label), e.helpText && a.a.createElement(S, null, e.helpText)), a.a.createElement(v.a, {
						id: e.fieldId,
						on: n,
						onToggle: () => this.updateValue(e.fieldId, !n)
					}))
				}
				renderSelectionField(e) {
					var t, n, s;
					const l = null !== (s = null === (n = null === (t = e.fieldConfig) || void 0 === t ? void 0 : t.selectionConfig) || void 0 === n ? void 0 : n.choices.map(t => {
							var n;
							return {
								displayText: t.label,
								value: t.value,
								isSelected: null === (n = this.state.values.get(e.fieldId)) || void 0 === n ? void 0 : n.includes(t.value)
							}
						})) && void 0 !== s ? s : [],
						i = l.filter(e => e.isSelected).map(e => e.displayText).join(", ");
					return a.a.createElement(R, {
						key: e.fieldId
					}, a.a.createElement("label", {
						htmlFor: e.fieldId
					}, e.label), a.a.createElement(m.b, {
						id: e.fieldId,
						buttonClassName: x.a.selectionButton,
						disabled: e.disabled,
						displayText: i,
						name: e.fieldId,
						options: l,
						showSelectedCheckmark: !0,
						onSelect: t => {
							var n, s, a;
							if (null === (s = null === (n = e.fieldConfig) || void 0 === n ? void 0 : n.selectionConfig) || void 0 === s ? void 0 : s.multiSelect) {
								const n = null !== (a = this.state.values.get(e.fieldId)) && void 0 !== a ? a : [];
								return n.indexOf(t.value) < 0 ? n.push(t.value) : n.splice(n.indexOf(t.value), 1), void this.updateValue(e.fieldId, n)
							}
							this.updateValue(e.fieldId, [t.value])
						}
					}), e.helpText && a.a.createElement(S, null, e.helpText))
				}
				renderGroupField(e) {
					var t, n, s;
					return a.a.createElement(w, {
						key: e.fieldId
					}, a.a.createElement(k, null, a.a.createElement(_, null, e.label), e.helpText && a.a.createElement(S, null, e.helpText)), a.a.createElement(N, null, this.renderFields(null !== (s = null === (n = null === (t = e.fieldConfig) || void 0 === t ? void 0 : t.groupConfig) || void 0 === n ? void 0 : n.fields) && void 0 !== s ? s : [])))
				}
				renderFields(e) {
					const t = [];
					for (const n of e) switch (Object(c.hb)(n.fieldType)) {
						case c.p.STRING:
							t.push(this.renderStringField(n));
							break;
						case c.p.PARAGRAPH:
							t.push(this.renderParagraphField(n));
							break;
						case c.p.NUMBER:
							t.push(this.renderNumberField(n));
							break;
						case c.p.BOOLEAN:
							t.push(this.renderBooleanField(n));
							break;
						case c.p.SELECTION:
							t.push(this.renderSelectionField(n));
							break;
						case c.p.GROUP:
							t.push(this.renderGroupField(n))
					}
					return t
				}
				render() {
					var e, t;
					const {
						form: n,
						onCloseClick: s
					} = this.props, l = this.getMissingRequiredFields(n.fields);
					return a.a.createElement(F, null, a.a.createElement(E, null, n.title && a.a.createElement(C, null, n.title), n.shortDescription && a.a.createElement(y, null, n.shortDescription), this.renderFields(n.fields), a.a.createElement(g, null, a.a.createElement(p.t, {
						priority: p.c.Secondary,
						onClick: s
					}, null !== (e = n.cancelLabel) && void 0 !== e ? e : d.fbt._("Cancel", null, {
						hk: "370pdF"
					})), a.a.createElement(p.t, {
						disabled: l.length > 0,
						onClick: () => this.onSubmit()
					}, null !== (t = n.acceptLabel) && void 0 !== t ? t : d.fbt._("Ok", null, {
						hk: "2Giu9U"
					})))))
				}
			}
			var j = D;
			const M = Object(i.c)({});
			class L extends a.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							closeFormModal: t
						} = this.props;
						if ("Escape" === e.key) return t()
					}, this.onSubmitClick = e => {
						const {
							onSubmit: t,
							closeFormModal: n
						} = this.props;
						t(e), n()
					}
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						form: e,
						closeFormModal: t
					} = this.props;
					return a.a.createElement(j, {
						form: e,
						onSubmitClick: this.onSubmitClick,
						onCloseClick: t
					})
				}
			}
			var P = Object(l.b)(M, e => ({
					closeFormModal: () => e(Object(r.a)())
				}))(L),
				B = n("./src/lib/initializeClient/installReducer.ts"),
				V = n("./src/reddit/reducers/features/devPlatform/index.ts");
			Object(B.a)({
				features: {
					devPlatform: V.a
				}
			});

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(i.c)({
					form: e => e.features.devPlatform.formModal.form,
					onSubmit: e => e.features.devPlatform.formModal.onSubmit
				}),
				U = Object(l.b)(W, e => ({
					closeFormModal: () => e(Object(r.a)())
				})),
				H = Object(o.a)(e => e.form && e.onSubmit ? a.a.createElement(P, {
					form: e.form,
					onSubmit: e.onSubmit
				}) : null);
			t.default = U(e => a.a.createElement(H, A({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeFormModal
			})))
		},
		"./src/devPlatform/components/FormRenderer/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_1pmZCsgMzk3C0_3d7XAeqq",
				wrapper: "_1pmZCsgMzk3C0_3d7XAeqq",
				Component: "GQ5XNmLj1AF2HQwU_S19t",
				component: "GQ5XNmLj1AF2HQwU_S19t",
				FormRendererWrapper: "_3BIn2_SsLrN4AMWbH03VTG",
				formRendererWrapper: "_3BIn2_SsLrN4AMWbH03VTG",
				TextWrapper: "_2lolP0j-D8DdsnX230MvTS",
				textWrapper: "_2lolP0j-D8DdsnX230MvTS",
				FormRow: "_3KJvZkfL3VZCEZZc3EJBWS",
				formRow: "_3KJvZkfL3VZCEZZc3EJBWS",
				FormStringRow: "_1lzX-VJh6G-8QcsP2Wjxl6",
				formStringRow: "_1lzX-VJh6G-8QcsP2Wjxl6",
				SelectionRow: "GevQ136mVAtNCEyV9SQba",
				selectionRow: "GevQ136mVAtNCEyV9SQba",
				selectionButton: "_3XO_5uaI_Q7IwEshUYoj1U",
				FormHeaderWrapper: "_2K2qTcF_Clcd_TNSLWCyB7",
				formHeaderWrapper: "_2K2qTcF_Clcd_TNSLWCyB7",
				FormFooterWrapper: "_3Uf6UMd9LFaJ-fZ77kOKnJ",
				formFooterWrapper: "_3Uf6UMd9LFaJ-fZ77kOKnJ",
				NumberInputWrapper: "_3I9-VV1NHnibHEdcYcRQrM",
				numberInputWrapper: "_3I9-VV1NHnibHEdcYcRQrM",
				GroupField: "_2SgsEIr4QmiX4jVoM0TVZz",
				groupField: "_2SgsEIr4QmiX4jVoM0TVZz",
				GroupFieldLabel: "_2hPhlETItut6A0PPiomSBz",
				groupFieldLabel: "_2hPhlETItut6A0PPiomSBz",
				GroupFieldsContainer: "_37vfJDECYU3d7YbiaTlU05",
				groupFieldsContainer: "_37vfJDECYU3d7YbiaTlU05",
				HelpText: "_2jq2HpSLJGIxF0DevZa6WX",
				helpText: "_2jq2HpSLJGIxF0DevZa6WX",
				LabelAndHelpTextWrapper: "_3ktRBCWJhiEUACPOme-Jml",
				labelAndHelpTextWrapper: "_3ktRBCWJhiEUACPOme-Jml"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.m.less": function(e, t, n) {
			e.exports = {
				dropdownMenu: "_1PLoXiZH4WKzHTfmYIt34X",
				selector: "apk_M-7ks6NcaiMN8cotM",
				selectorContent: "Ot99igbaJ5id3P1tw6wow",
				disabled: "FVIZ8GUq5tMGZlJ7y28ll",
				compact: "_1qaMsHCBrTmejbIUPjsRVI",
				caretDown: "_2i4dyr-iTBOmkZ4fL_M70P",
				topics: "qWs3cMcSjquK-OXl-9jH5",
				loadingIcon: "_3WxhmmhQ3cYt1J7mtfcoKG",
				menuItems: "_3ssvFhIB2HAXL261eWf7G0",
				isClosed: "_3sZzbLftdYnJNnJ7m7ImmO",
				menuOption: "_1Qm1phX3yfiJHnjgi_O_9V",
				buttonIcon: "_1J0h3Uv7HEaVZiJLcCUlQw"
			}
		},
		"./src/reddit/controls/DropdownSelector/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				i = n.n(l),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = a.a.createRef(), this.menuItems = a.a.createRef(), this.containerRef = a.a.createRef(), this.state = {
						isOpen: !1
					}, this.handleDocumentClick = e => {
						this.containerRef && this.containerRef.current && (this.containerRef.current.contains(e.target) || this.setState({
							isOpen: !1
						}))
					}, this.onSelectOption = (e, t, n) => {
						const {
							onSelect: s
						} = this.props;
						e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopPropagation(), s(t), n && this.dropdownButton.current && this.dropdownButton.current.focus(), this.setState({
							isOpen: !1
						})
					}, this.onOptionClick = (e, t) => {
						this.onSelectOption(e, t)
					}, this.handleDropdownClick = e => {
						e.preventDefault(), e.stopPropagation(), this.props.onOpen && this.props.onOpen(), this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.handleDropdownBlur = e => {
						let t = !1;
						if (e.relatedTarget === this.dropdownButton.current) t = !0;
						else {
							if (!this.menuItems.current) return;
							const n = this.menuItems.current.getElementsByClassName(i.a.menuOption);
							for (let s = 0; s < n.length; s++) e.relatedTarget === n[s] && (t = !0)
						}
						this.setState({
							isOpen: t
						})
					}, this.handleDropdownKeyDown = e => {
						if (!this.state.isOpen && [40, 32, 13].includes(e.keyCode)) return e.preventDefault(), void this.setState({
							isOpen: !0
						}, this.focusOnFirstOption);
						40 === e.keyCode && (e.preventDefault(), this.focusOnFirstOption()), 27 === e.keyCode && this.state.isOpen && (e.stopPropagation(), e.nativeEvent.stopPropagation(), e.nativeEvent.stopImmediatePropagation(), this.setState({
							isOpen: !1
						}))
					}, this.handleOptionKeyDown = (e, t) => {
						if (32 === e.keyCode || 13 === e.keyCode) this.onSelectOption(e, t, !0);
						else if (38 === e.keyCode || 40 === e.keyCode) {
							if (e.preventDefault(), !this.menuItems.current) return;
							const t = this.menuItems.current.getElementsByClassName(i.a.menuOption);
							for (let n = 0; n < t.length; n++) t[n] === e.target && (38 === e.keyCode && n > 0 && t[n - 1].focus(), 40 === e.keyCode && n < t.length - 1 && t[n + 1].focus())
						}
					}
				}
				componentDidMount() {
					document.body.addEventListener("click", this.handleDocumentClick, !1)
				}
				componentWillUnmount() {
					document.body.removeEventListener("click", this.handleDocumentClick, !1)
				}
				focusOnFirstOption() {
					if (!this.menuItems.current) return;
					const e = this.menuItems.current.getElementsByClassName(i.a.menuOption);
					e.length && e[0].focus()
				}
				getDropdownMenuItems() {
					const {
						options: e,
						showSelectedCheckmark: t,
						isTopicsStyle: n,
						menuOptionClassName: s
					} = this.props;
					return e.map((e, l) => a.a.createElement(r.b, {
						key: l + e.displayText,
						className: Object(o.a)(i.a.menuOption, s, {
							[i.a.topics]: n
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isTopicsStyle: n
					}, e.icon && e.icon, e.displayText))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: s,
						isTopicsStyle: l,
						menuItemsClassName: r,
						name: p,
						isSaving: m,
						buttonIcon: h,
						disabled: f
					} = this.props, {
						isOpen: v
					} = this.state;
					return a.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(o.a)(i.a.dropdownMenu, t, {
							[i.a.topics]: l
						})
					}, a.a.createElement("button", {
						onClick: f ? void 0 : this.handleDropdownClick,
						className: Object(o.a)(e, i.a.selector, {
							[i.a.compact]: s
						}, {
							[i.a.topics]: l
						}, {
							[i.a.disabled]: f
						}),
						name: p,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: f ? void 0 : this.handleDropdownBlur,
						onKeyDown: f ? void 0 : this.handleDropdownKeyDown
					}, a.a.createElement("span", {
						className: i.a.selectorContent,
						tabIndex: -1
					}, h && a.a.createElement("span", {
						className: i.a.buttonIcon
					}, h), n), f ? null : m ? a.a.createElement(d.a, {
						sizePx: 8,
						className: i.a.loadingIcon
					}) : a.a.createElement(c.a, {
						name: "caret_down"
					})), a.a.createElement("div", {
						className: Object(o.a)(i.a.menuItems, r, {
							[i.a.topics]: l,
							[i.a.isClosed]: !v
						}),
						onMouseDown: u,
						ref: this.menuItems
					}, !f && v && this.getDropdownMenuItems()))
				}
			}
			t.b = p
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/uniqueId.js"),
				l = n.n(a),
				i = n("./node_modules/raf/index.js"),
				o = n.n(i),
				r = n("./node_modules/react/index.js"),
				d = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				h = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = n.n(h);
			var v = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(m.a, {
						className: f.a.titleRow
					}, n), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: f.a.buttonRow
					}, d.a.createElement(p.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				b = n("./src/reddit/controls/ErrorText/index.m.less"),
				x = n.n(b);
			class g extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${l()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					o()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: n,
						errorModalTitle: a = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: l = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: i,
						isModalOpen: o
					} = this.state;
					return d.a.createElement("div", {
						className: Object(c.a)(x.a.wrapper, t)
					}, d.a.createElement("span", {
						className: x.a.description,
						ref: this.spanRef
					}, e), i && d.a.createElement("span", {
						className: x.a.moreText,
						onClick: this.toggleModal
					}, l), o && d.a.createElement(v, {
						onConfirmed: this.toggleModal,
						title: a
					}, n || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: s,
						fallbackMessage: a,
						messages: l = []
					} = e, i = l.length ? l : a ? [a] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(g, {
						className: n,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(C, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/ErrorText/index.tsx"),
				r = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(c);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = i.a.input("input", u.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						className: i,
						isInvalid: o,
						...r
					} = e;
					const d = void 0 !== r.value && "" !== r.value;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: o
						}),
						onClick: h
					}, a.a.createElement(m, p({
						"aria-invalid": o,
						innerRef: s
					}, r)), t && a.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, t), n)
				},
				v = e => {
					let {
						label: t,
						children: n,
						inputRef: s,
						isInvalid: i,
						className: o,
						redditStyle: r,
						...d
					} = e;
					const c = void 0 !== d.value && "" !== d.value;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: r
						}),
						onClick: h
					}, a.a.createElement(m, p({
						innerRef: s
					}, d)), t && a.a.createElement("label", {
						className: Object(l.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, t), n)
				},
				b = e => a.a.createElement("div", {
					className: Object(l.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", a.a.createElement(r.a, {
					className: u.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class g extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: n,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: n,
						placeholder: s,
						errors: l = []
					} = this.props;
					return e.map((e, i) => a.a.createElement(f, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!l[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, a.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, a.a.createElement(d.b, {
						className: u.a.trash
					})), !!l[i] && a.a.createElement(o.b, {
						className: u.a.errorText
					}, l[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: s,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const r = !(!!s && n.length >= s) && !o;
					return a.a.createElement("div", {
						className: Object(l.a)(u.a.multiInputWrapper, e)
					}, t && r && a.a.createElement(b, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && r && a.a.createElement(b, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/controls/Input/index.m.less"),
				l = n.n(a);
			t.a = s.a.input("input", l.a)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(i);
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: s = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(l.a)(o.a.loadingIcon, n, {
						[o.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${s}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/controls/NumberInput/index.m.less": function(e, t, n) {
			e.exports = {
				inputId: "_2u55GXL0tixR3CDSXDptAh",
				numberInput: "w-WaN4v2qJbrNH2KHKl22",
				buttonContainer: "_1jxskdr4hjRXJPk9GUqGX5",
				chevronBtn: "_2V0mlaYUMWvXR35HSCUhVt",
				icon: "_2YiYPzVRljNQIohYKWAbZm"
			}
		},
		"./src/reddit/controls/NumberInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/FormFields/index.tsx"),
				o = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				r = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				d = n("./src/reddit/controls/NumberInput/index.m.less"),
				c = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.inputRef = null, this.handleIncrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepUp();
						const {
							onChange: t,
							onIncrease: n,
							value: s
						} = this.props;
						this.inputRef.value !== s && (t(parseFloat(this.inputRef.value)), n && n())
					}, this.handleDecrement = e => {
						if (e.preventDefault(), !this.inputRef) return;
						this.inputRef.stepDown();
						const {
							onChange: t,
							onDecrease: n,
							value: s
						} = this.props;
						this.inputRef.value !== s && (t(parseFloat(this.inputRef.value)), n && n())
					}, this.handleChangeEvent = e => {
						const t = e.target.value;
						this.props.onChange(parseFloat(t))
					}, this.focusOnInput = e => {
						e.preventDefault(), this.inputRef && this.inputRef.focus()
					}, this.setInputRef = e => this.inputRef = e
				}
				render() {
					const {
						className: e,
						id: t,
						...n
					} = this.props, s = t || c.a.inputId;
					return a.a.createElement(i.b, u({}, n, {
						className: Object(l.a)(e, c.a.numberInput),
						id: s,
						inputRef: this.setInputRef,
						onChange: this.handleChangeEvent,
						type: "number"
					}), a.a.createElement("div", {
						className: c.a.buttonContainer
					}, a.a.createElement("button", {
						"aria-controls": s,
						className: c.a.chevronBtn,
						onClick: this.handleIncrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, a.a.createElement(r.a, {
						className: c.a.icon
					})), a.a.createElement("button", {
						"aria-controls": s,
						className: c.a.chevronBtn,
						onClick: this.handleDecrement,
						onMouseDown: this.focusOnInput,
						tabIndex: -1
					}, a.a.createElement(o.a, {
						className: c.a.icon
					}))))
				}
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				r = n.n(o);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return a.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(l.a)(r.a.toggleSwitch, e.className, {
						[r.a.xs]: n === i.d.XS,
						[r.a.s]: n === i.d.S,
						[r.a.m]: n === i.d.M,
						[r.a.l]: n === i.d.L,
						[r.a.xl]: n === i.d.XL,
						[r.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[r.a.mDisabled]: e.disabled,
						[r.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, a.a.createElement("div", {
					className: r.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, a.a.createElement("g", {
				stroke: "none"
			}, a.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, a.a.createElement("path", {
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
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				l = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = n.n(i);
			const r = e => a.a.createElement("svg", {
				className: Object(l.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = r
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/layout/row/Inline/index.m.less"),
				l = n.n(a);
			t.a = s.a.div("inlineRow", l.a)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/6.287eb2bf2d76e95ecc6f.js.map