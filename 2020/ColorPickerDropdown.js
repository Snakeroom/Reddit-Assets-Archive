// https://www.redditstatic.com/desktop2x/ColorPickerDropdown.f99c02c206b72b525f11.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ColorPickerDropdown"], {
		"./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			t("./node_modules/core-js/modules/es6.regexp.match.js");
			var l = t("./node_modules/react/index.js"),
				o = t.n(l),
				n = t("./src/higherOrderComponents/asTooltip.tsx"),
				r = t("./src/lib/classNames/index.ts"),
				s = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = t("./src/lib/domUtils/index.ts"),
				i = t("./src/lib/lessComponent.tsx"),
				d = t("./src/reddit/constants/keycodes.ts"),
				u = t("./node_modules/lodash/debounce.js"),
				m = t.n(u);
			const p = "#000000",
				C = /^#[0-9a-f]{6}$/i,
				v = e => !!e && C.test(e);
			class h extends o.a.Component {
				constructor(e) {
					super(e), this.callOnChangeProp = m()(e => this.props.onChange(e), 100), this.onChange = e => {
						const {
							value: a
						} = e.currentTarget, t = v(a);
						this.setState({
							value: a,
							isHexColor: t
						}), t && this.callOnChangeProp(a)
					};
					const a = e.value || p;
					this.state = {
						value: a,
						isHexColor: v(a)
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || p,
						isHexColor: v(e.value)
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						state: a
					} = this;
					return o.a.createElement("div", {
						className: e.className
					}, o.a.createElement("input", {
						name: e.name,
						onChange: this.onChange,
						type: "color",
						value: a.value
					}), !a.isHexColor && o.a.createElement("div", null, "Value must be a hex color in the format #FFFFFF"))
				}
			}
			var E = t("./src/reddit/helpers/isValidHexColor/index.ts"),
				b = t("./src/reddit/i18n/components.tsx"),
				x = t("./src/reddit/i18n/utils.ts"),
				S = t("./src/reddit/layout/row/Inline/index.tsx"),
				g = t("./src/reddit/models/StructuredStyles/index.ts"),
				O = t("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = t("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				k = t.n(w);
			const y = i.a.wrapped(S.a, "Inline", k.a),
				N = i.a.wrapped(h, "ColorInput", k.a),
				j = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				};
			a.default = Object(n.a)(Object(s.a)(e => o.a.createElement("div", {
				onClick: j,
				className: k.a.ColorPickerDropdown,
				style: e.style
			}, o.a.createElement("div", {
				className: k.a.SectionTitle
			}, o.a.createElement(b.c, null, "Color Picker")), o.a.createElement("div", {
				className: k.a.ColorSwatchContainer
			}, g.b.map(a => o.a.createElement("div", {
				onClick: () => {
					e.onSelectColor(a)
				},
				key: a
			}, o.a.createElement("div", {
				className: Object(r.a)(k.a.ColorSwatchOption, {
					[k.a.isSelected]: e.value === a
				}),
				style: {
					backgroundColor: a
				}
			}))), e.includeTransparent && o.a.createElement("div", {
				onClick: () => e.onSelectColor(void 0)
			}, o.a.createElement("div", {
				className: Object(r.a)(k.a.ColorSwatchOption, {
					[k.a.isSelected]: !e.value,
					[k.a.isTransparent]: !0
				})
			}))), o.a.createElement("div", {
				className: k.a.SectionTitle
			}, o.a.createElement(b.c, null, "Hex Code")), o.a.createElement(y, null, o.a.createElement("div", {
				className: Object(r.a)(k.a.ColorSwatchPreview, {
					[k.a.isTransparent]: e.includeTransparent && !e.value
				}),
				style: {
					backgroundColor: e.value ? e.value : e.includeTransparent ? Object(O.a)(e).body : g.d
				}
			}), o.a.createElement("input", {
				className: Object(r.a)(k.a.HexColorInput, e.inputValue && !Object(E.b)(e.inputValue, !0) && k.a.isInvalid),
				placeholder: Object(x.c)("Hex #"),
				onChange: e.onChangeHexColor,
				value: e.inputValue || "",
				maxLength: E.a,
				onKeyDown: a => {
					a.keyCode === d.a.Enter && Object(E.b)(e.inputValue, !0) && e.onToggleDropdown()
				}
			}), e.inputValue && !Object(E.b)(e.inputValue, !0) && o.a.createElement("span", {
				className: k.a.ErrorMarker
			}, "!")), Object(c.d)().color && !navigator.userAgent.match(/Edge/) && o.a.createElement("label", {
				className: k.a.StyledLabel,
				onClick: a => {
					"LABEL" === a.target.tagName && e.onClickUseSystemColorPicker()
				}
			}, o.a.createElement(b.c, null, "Use Browser Color Picker"), o.a.createElement(N, {
				onChange: e.onSelectColor,
				value: e.value
			})))))
		}
	}
]);
//# sourceMappingURL=ColorPickerDropdown.f99c02c206b72b525f11.js.map