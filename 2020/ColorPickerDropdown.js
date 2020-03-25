// https://www.redditstatic.com/desktop2x/ColorPickerDropdown.e520fc3dafae4eb92479.js
// Retrieved at 3/25/2020, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ColorPickerDropdown"], {
		"./src/reddit/components/StructuredStyles/ColorPicker/_ColorPickerDropdown.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			t("./node_modules/core-js/modules/es6.regexp.match.js");
			var l = t("./node_modules/fbt/lib/FbtPublic.js"),
				o = t("./node_modules/react/index.js"),
				n = t.n(o),
				r = t("./src/higherOrderComponents/asTooltip.tsx"),
				s = t("./src/lib/classNames/index.ts"),
				c = t("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = t("./src/lib/domUtils/index.ts"),
				d = t("./src/lib/lessComponent.tsx"),
				u = t("./src/reddit/constants/keycodes.ts"),
				m = t("./node_modules/lodash/debounce.js"),
				p = t.n(m);
			const C = "#000000",
				h = /^#[0-9a-f]{6}$/i,
				v = e => !!e && h.test(e);
			class b extends n.a.Component {
				constructor(e) {
					super(e), this.callOnChangeProp = p()(e => this.props.onChange(e), 100), this.onChange = e => {
						const {
							value: a
						} = e.currentTarget, t = v(a);
						this.setState({
							value: a,
							isHexColor: t
						}), t && this.callOnChangeProp(a)
					};
					const a = e.value || C;
					this.state = {
						value: a,
						isHexColor: v(a)
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || C,
						isHexColor: v(e.value)
					}))
				}
				render() {
					const {
						props: e
					} = this, {
						state: a
					} = this;
					return n.a.createElement("div", {
						className: e.className
					}, n.a.createElement("input", {
						name: e.name,
						onChange: this.onChange,
						type: "color",
						value: a.value
					}), !a.isHexColor && n.a.createElement("div", null, "Value must be a hex color in the format #FFFFFF"))
				}
			}
			var x = t("./src/reddit/helpers/isValidHexColor/index.ts"),
				E = t("./src/reddit/layout/row/Inline/index.tsx"),
				S = t("./src/reddit/models/StructuredStyles/index.ts"),
				g = t("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = t("./src/reddit/components/StructuredStyles/ColorPicker/index.m.less"),
				_ = t.n(k);
			const w = d.a.wrapped(E.a, "Inline", _.a),
				O = d.a.wrapped(b, "ColorInput", _.a),
				y = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				};
			a.default = Object(r.a)(Object(c.a)(e => n.a.createElement("div", {
				onClick: y,
				className: _.a.ColorPickerDropdown,
				style: e.style
			}, n.a.createElement("div", {
				className: _.a.SectionTitle
			}, l.fbt._("Color Picker", null, {
				hk: "2H3KoA"
			})), n.a.createElement("div", {
				className: _.a.ColorSwatchContainer
			}, S.b.map(a => n.a.createElement("div", {
				onClick: () => {
					e.onSelectColor(a)
				},
				key: a
			}, n.a.createElement("div", {
				className: Object(s.a)(_.a.ColorSwatchOption, {
					[_.a.isSelected]: e.value === a
				}),
				style: {
					backgroundColor: a
				}
			}))), e.includeTransparent && n.a.createElement("div", {
				onClick: () => e.onSelectColor(void 0)
			}, n.a.createElement("div", {
				className: Object(s.a)(_.a.ColorSwatchOption, {
					[_.a.isSelected]: !e.value,
					[_.a.isTransparent]: !0
				})
			}))), n.a.createElement("div", {
				className: _.a.SectionTitle
			}, l.fbt._("Hex Code", null, {
				hk: "THCze"
			})), n.a.createElement(w, null, n.a.createElement("div", {
				className: Object(s.a)(_.a.ColorSwatchPreview, {
					[_.a.isTransparent]: e.includeTransparent && !e.value
				}),
				style: {
					backgroundColor: e.value ? e.value : e.includeTransparent ? Object(g.a)(e).body : S.d
				}
			}), n.a.createElement("input", {
				className: Object(s.a)(_.a.HexColorInput, e.inputValue && !Object(x.b)(e.inputValue, !0) && _.a.isInvalid),
				placeholder: l.fbt._("Hex #", null, {
					hk: "1RBoiG"
				}),
				onChange: e.onChangeHexColor,
				value: e.inputValue || "",
				maxLength: x.a,
				onKeyDown: a => {
					a.keyCode === u.a.Enter && Object(x.b)(e.inputValue, !0) && e.onToggleDropdown()
				}
			}), e.inputValue && !Object(x.b)(e.inputValue, !0) && n.a.createElement("span", {
				className: _.a.ErrorMarker
			}, "!")), Object(i.d)().color && !navigator.userAgent.match(/Edge/) && n.a.createElement("label", {
				className: _.a.StyledLabel,
				onClick: a => {
					"LABEL" === a.target.tagName && e.onClickUseSystemColorPicker()
				}
			}, l.fbt._("Use Browser Color Picker", null, {
				hk: "2elQba"
			}), n.a.createElement(O, {
				onChange: e.onSelectColor,
				value: e.value
			})))))
		}
	}
]);
//# sourceMappingURL=ColorPickerDropdown.e520fc3dafae4eb92479.js.map