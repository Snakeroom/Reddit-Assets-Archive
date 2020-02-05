// https://www.redditstatic.com/desktop2x/ProfileModeration~Settings~SubredditCreation.5424da0f656a33c857ac.js
// Retrieved at 2/5/2020, 2:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileModeration~Settings~SubredditCreation"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				s = n("./src/reddit/i18n/utils.ts"),
				i = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(i);
			t.a = e => r.a.createElement(l.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length > e.maxChars ? c.a.mOverflow : null)
			}, "".concat(e.maxChars - e.text.length, " ").concat(Object(s.c)("Characters")))
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "ki2VbfBhU-qxg1S6VyET6",
				above: "_8fNGSBGvr1Ds8PbrsUGzN",
				below: "_38gWvHp3NJkR5r5ftUfbFG",
				HoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2",
				hoverTooltip: "Nb7NCPTlQuxN_WDPUg5Q2"
			}
		},
		"./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.m.less"),
				i = n.n(s);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			t.a = l.a.wrapped(e => {
				const {
					children: t,
					className: n,
					renderBelow: a,
					text: l,
					tooltipContentClass: s
				} = e, u = d(e, ["children", "className", "renderBelow", "text", "tooltipContentClass"]);
				return r.a.createElement("div", c({}, u, {
					className: Object(o.a)(i.a.container, n)
				}), l ? r.a.createElement("div", {
					className: Object(o.a)(i.a.tooltip, s, a ? i.a.below : i.a.above)
				}, l) : null, t)
			}, "HoverTooltip", i.a)
		},
		"./src/reddit/components/Settings/shared/Widgets.m.less": function(e, t, n) {
			e.exports = {
				Label: "asxizthf5kZpmoY27VBKd",
				label: "asxizthf5kZpmoY27VBKd",
				HoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				hoverTooltip: "_1qQQ7O7znXpzgcC5RgQFtW",
				ControlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				controlContainer: "_1kylDjSQ2hay_ez0zF7BEP",
				TextContainer: "_3dLmvT0hpACHFxhncqzCOr",
				textContainer: "_3dLmvT0hpACHFxhncqzCOr",
				ActionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				actionContainer: "_1oREjd5ToMFah-VfX5Zt1z",
				Wrapper: "_2f63as5b5FASHMqGd5P1o0",
				wrapper: "_2f63as5b5FASHMqGd5P1o0",
				isCreateCommunity: "_38bDTwLcytTCF-174R0UXB",
				mColumn: "_1HH_g-CLQB1BPcqOhZcakt",
				mLast: "_3Lu6XJyVbSLDVKDx-wue2g",
				mIndent: "_2D65jEbgD16ae_sJ8BG4AD",
				mDisabled: "LvI7FSBTGgYo2skaf18Zv",
				Subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				subtext: "_1NdK7EwgYqUxJObBr3ym4o",
				Link: "oFObIzV6ZJDQuG09BXh8u",
				link: "oFObIzV6ZJDQuG09BXh8u",
				SubtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				subtextLink: "_3MGA27y-8plrsOsPbyYwgs",
				LinkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				linkIcon: "_3gg7WkHbAGiySOBOzb9k6F",
				LinkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				linkButton: "_3I7YVr4pIJiOGmmJdgsEXK",
				ArrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				arrowRight: "_1oH-o0mDV86imeLnyfmCiD",
				StyledFlair: "_1F2irboi-xRChkhyndP6ct",
				styledFlair: "_1F2irboi-xRChkhyndP6ct",
				SpoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				spoilerFlair: "_3mkE4WZP2_bhfSQvrpeIka",
				NSFWFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				nsfwFlair: "_1mPvZAvMvenP80lJ1RnQdE",
				DropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				dropdownWrapper: "_1D4YEzJAywC1b-Jx_on2cZ",
				DropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				dropdownRow: "_1ekKroexYAQllqx2MfTHbi",
				Row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				row: "_1QNl7IkO4tmBTG1Cp8_ZBk",
				DropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				dropdownTriangle: "_2VFl8Aqe76Ulg9-x85FKpH",
				DescriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				descriptionsRow: "H3CGfLrRo4H9tQdWd5vG9",
				Circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				circle: "_20H2GFMG6B0Lai4Q3DhIE2",
				RangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				rangeSlider: "_2J8tywkkd4Gotm3jZ2Gcv0",
				RangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				rangeSliderInput: "_2ieOPsoffMpHmDwvrKLRjg",
				Ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				ticks: "_3BLGt0e8kYgLHkUbAeXTWG",
				TickText: "_1hEYjTFCxEu2ILobPvatAp",
				tickText: "_1hEYjTFCxEu2ILobPvatAp",
				PreSubText: "_2_hv6QgJ151j9WmCyETVfC",
				preSubText: "_2_hv6QgJ151j9WmCyETVfC",
				MultiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				multiLineInputSettingsBottomRow: "hgvQ7UQa9_0jmXSzQjqhF",
				ActionLinkContainer: "e4RehzaESS5nfk-O6pYoK",
				actionLinkContainer: "e4RehzaESS5nfk-O6pYoK"
			}
		},
		"./src/reddit/components/Settings/shared/Widgets.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return D
			})), n.d(t, "i", (function() {
				return W
			})), n.d(t, "m", (function() {
				return z
			})), n.d(t, "j", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return K
			})), n.d(t, "n", (function() {
				return Z
			})), n.d(t, "h", (function() {
				return re
			})), n.d(t, "b", (function() {
				return oe
			})), n.d(t, "f", (function() {
				return le
			})), n.d(t, "a", (function() {
				return se
			})), n.d(t, "d", (function() {
				return xe
			})), n.d(t, "c", (function() {
				return be
			})), n.d(t, "e", (function() {
				return he
			})), n.d(t, "g", (function() {
				return Ce
			}));
			n("./node_modules/core-js/modules/es6.regexp.to-string.js"), n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/tooltip.ts"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				u = n("./src/reddit/components/RichTextEditor/HoverTooltip/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				p = n("./src/reddit/controls/Dropdown/index.tsx"),
				x = n("./src/reddit/controls/Dropdown/Row.tsx"),
				b = n("./src/reddit/controls/FormFields/index.tsx"),
				h = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				C = n("./src/reddit/controls/Typography/index.tsx"),
				f = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				g = n("./src/reddit/icons/svgs/Circle/index.tsx"),
				v = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				E = n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				_ = n("./node_modules/lodash/range.js"),
				y = n.n(_),
				w = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/layout/row/Inline/index.tsx"),
				S = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/selectors/tooltip.ts"),
				F = n("./src/reddit/components/Settings/shared/Widgets.m.less"),
				N = n.n(F),
				T = n("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var R = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const I = Object(c.a)(p.a),
				P = T.a.wrapped(g.a, "Circle", N.a),
				L = T.a.h3("Label", N.a),
				D = T.a.wrapped(C.f, "Subtext", N.a),
				B = T.a.wrapped(u.a, "HoverTooltip", N.a),
				H = T.a.div("ControlContainer", N.a),
				G = T.a.div("TextContainer", N.a),
				A = T.a.div("ActionContainer", N.a),
				W = e => {
					var {
						className: t,
						direction: n,
						disabled: a,
						indent: o,
						last: l
					} = e, i = R(e, ["className", "direction", "disabled", "indent", "last"]);
					return r.a.createElement("div", j({}, i, {
						className: Object(s.a)(N.a.Wrapper, t, {
							[N.a.mColumn]: "column" === n,
							[N.a.mDisabled]: !!a,
							[N.a.mIndent]: !!o,
							[N.a.mLast]: !!l,
							[N.a.isCreateCommunity]: i.isCreateCommunity
						})
					}))
				},
				Q = T.a.a("Link", N.a),
				z = T.a.wrapped(Q, "SubtextLink", N.a),
				V = T.a.wrapped(E.a, "LinkIcon", N.a),
				M = T.a.button("LinkButton", N.a),
				J = T.a.wrapped(f.a, "ArrowRight", N.a),
				Y = e => r.a.createElement(W, {
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					isCreateCommunity: e.isCreateCommunity,
					last: e.last
				}, r.a.createElement(G, {
					className: e.textContainerClassName
				}, r.a.createElement(L, null, e.label, e.isRequired && r.a.createElement(P, null)), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, e.children)),
				X = T.a.div("StyledFlair", N.a),
				q = T.a.wrapped(X, "SpoilerFlair", N.a),
				U = T.a.wrapped(X, "NSFWFlair", N.a),
				K = e => {
					switch (e.flair) {
						case S.f.Nsfw:
							return r.a.createElement(U, null, "NSFW");
						case S.f.Spoiler:
							return r.a.createElement(q, null, "SPOILER");
						default:
							return null
					}
				},
				Z = e => r.a.createElement(W, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(G, null, r.a.createElement(O.a, null, r.a.createElement(L, null, e.label)), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, r.a.createElement(H, null, e.tooltip && r.a.createElement(B, {
					text: e.tooltip
				}), r.a.createElement(h.a, {
					on: e.on,
					onToggle: e.onClick,
					disabled: e.disabled
				})))),
				$ = T.a.input("RangeSliderInput", N.a),
				ee = T.a.div("RangeSlider", N.a),
				te = T.a.div("Ticks", N.a),
				ne = T.a.div("TickText", N.a),
				ae = T.a.div("PreSubText", N.a),
				re = e => r.a.createElement(W, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(G, {
					style: {
						flex: 5
					}
				}, r.a.createElement(O.a, null, r.a.createElement(L, null, e.label)), r.a.createElement(D, null, " ", r.a.createElement(ae, {
					style: {
						color: e.ticks[e.value].color
					}
				}, " ", e.ticks[e.value].text + ": ", " "), " ", e.subtext)), r.a.createElement(A, {
					style: {
						flex: 3,
						margin: "20px 20px 0 0"
					}
				}, r.a.createElement(ee, null, r.a.createElement($, {
					style: {
						background: "linear-gradient(to right, " + e.ticks[e.value].color + " " + e.value / e.max * 100 + "%,#C5C5C5 " + e.value / e.max * 100 + "%," + y()(Number(e.value) + 1, e.max + 1).map((t, n) => t === e.max ? "" : "#C5C5C5 " + (t / e.max * 100 - 1) + "%,#FFFFFF " + (t / e.max * 100 - 1) + "%,#FFFFFF " + t / e.max * 100 + "%,#C5C5C5 " + t / e.max * 100 + "%") + "#C5C5C5 100%)"
					},
					className: "range-slider-input",
					type: "range",
					min: e.min,
					max: e.max,
					step: e.step,
					value: e.value,
					onChange: e.onChange,
					onInput: e.onChange
				}), r.a.createElement(te, null, Object.keys(e.ticks).map((t, n) => r.a.createElement(ne, {
					style: {
						color: t === e.value.toString() ? e.ticks[t].color : "#878A8C"
					}
				}, e.ticks[t].text)))))),
				oe = e => r.a.createElement(W, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(G, null, r.a.createElement(O.a, null, r.a.createElement(L, null, e.label)), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, r.a.createElement(H, null, r.a.createElement(w.i, {
					onClick: e.onClick
				}, e.actionText)))),
				le = e => r.a.createElement(W, {
					className: e.className,
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(G, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, e.label, r.a.createElement(V, null)), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, r.a.createElement(Q, {
					href: e.link,
					onClick: e.onClick,
					target: e.openInNewTab ? "_blank" : void 0
				}, r.a.createElement(J, null)))),
				se = e => r.a.createElement(W, {
					className: e.className,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(G, null, r.a.createElement(M, {
					onClick: e.onClick
				}, e.label), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, r.a.createElement(M, {
					onClick: e.onClick
				}, r.a.createElement(J, null)))),
				ie = T.a.div("DropdownWrapper", N.a),
				ce = T.a.wrapped(x.b, "DropdownRow", N.a),
				de = T.a.span("Row", N.a),
				ue = T.a.wrapped(v.b, "DropdownTriangle", N.a),
				me = T.a.div("DescriptionsRow", N.a),
				pe = Object(l.c)({
					isOpen: (e, t) => Object(k.b)(t.id)(e)
				}),
				xe = Object(o.b)(pe, (e, t) => ({
					openDropdown: () => {
						e(Object(i.h)({
							tooltipId: t.id
						}))
					}
				}))(e => r.a.createElement(W, {
					last: e.last,
					indent: e.indent,
					disabled: e.disabled
				}, r.a.createElement(G, null, r.a.createElement(L, null, e.label), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, (e => r.a.createElement(ie, {
					onClick: e.openDropdown
				}, r.a.createElement(de, {
					id: "".concat("SettingDropdown--").concat(e.id)
				}, e.selected), r.a.createElement(ue, null), r.a.createElement(I, {
					container: void 0,
					isOpen: e.isOpen,
					renderContentsHidden: !0,
					isOverlay: !1,
					tooltipId: "".concat("SettingDropdown--").concat(e.id)
				}, e.items.map((t, n) => r.a.createElement(ce, {
					displayText: t,
					isSelected: e.selected === t,
					onClick: () => e.onClick(t),
					key: n
				}))), e.descriptions && r.a.createElement(me, null, e.descriptions[e.items.indexOf(e.selected)])))(e)))),
				be = e => r.a.createElement(W, {
					className: e.className,
					direction: e.direction,
					disabled: e.disabled,
					indent: e.indent,
					last: e.last
				}, r.a.createElement(G, null, r.a.createElement(L, null, e.label), r.a.createElement(D, null, e.subtext)), r.a.createElement(A, null, e.children)),
				he = e => r.a.createElement(Y, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(b.a, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					type: "text",
					value: e.value,
					onBlur: e.onBlur
				}), !e.hideCountdown && r.a.createElement(d.a, {
					maxChars: e.maxChars,
					text: e.value
				})),
				Ce = e => r.a.createElement(Y, {
					isCreateCommunity: e.isCreateCommunity,
					isRequired: e.isRequired,
					label: e.label,
					subtext: e.subtext,
					direction: "column",
					textContainerClassName: e.textContainerClassName
				}, r.a.createElement(m.i, {
					disabled: !1,
					onChange: e.onChange,
					placeholder: e.placeholder,
					maxLength: e.maxChars,
					rows: e.rows || 4,
					style: {
						marginBottom: e.isCreateCommunity ? "4px" : 0,
						resize: e.isCreateCommunity ? "vertical" : "both"
					},
					value: e.value,
					onBlur: e.onBlur
				}), r.a.createElement("div", {
					className: N.a.MultiLineInputSettingsBottomRow
				}, !e.hideCountdown && r.a.createElement(d.a, {
					maxChars: e.maxChars,
					text: e.value || ""
				}), !!e.actionLink && r.a.createElement("div", {
					className: N.a.ActionLinkContainer
				}, e.actionLink)))
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return l
			})), n.d(t, "p", (function() {
				return s
			})), n.d(t, "n", (function() {
				return i
			})), n.d(t, "o", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(r);
			const l = a.a.section("FormPage", o.a),
				s = a.a.h1("HomePageTitle", o.a),
				i = a.a.button("HomePageBreadcrumb", o.a),
				c = a.a.div("HomePageGroup", o.a),
				d = a.a.h1("FormPageTitle", o.a),
				u = a.a.div("FormPageSection", o.a),
				m = a.a.div("FormGroup", o.a),
				p = a.a.h2("FormGroupTitle", o.a),
				x = a.a.div("FormElement", o.a),
				b = a.a.div("FormGroupDescription", o.a),
				h = a.a.div("FormItem", o.a),
				C = a.a.h3("FormElementTitle", o.a),
				f = a.a.div("FormElementDescription", o.a),
				g = a.a.div("FormElementError", o.a),
				v = a.a.div("FormElementSubGroup", o.a),
				E = a.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less": function(e, t, n) {
			e.exports = {
				ModalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				modalInput: "_2-UQO_nq1P8ACGIq0yZJRz",
				Input: "_1BJV17HgWhhC-BxrpqGjM",
				input: "_1BJV17HgWhhC-BxrpqGjM",
				iconStyles: "_349rJ1BueyeldYiZniwYOz",
				RadioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				radioOn: "_2tv2vEpNmUbYbUPoOrSuAh",
				RadioOff: "_23-RdhX276B0bg5nrt0cpf",
				radioOff: "_23-RdhX276B0bg5nrt0cpf",
				Checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				checkbox: "_29ZBtSa05ZCR4Sj1modCls",
				CheckboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
				checkboxSelected: "_1UmPxfh5dZu-x2VK6n61BM",
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
				return x
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return g
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/controls/Input/ModalInput.tsx"),
				o = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				l = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				s = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				i = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				c = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.m.less"),
				d = n.n(c);
			const u = a.a.wrapped(r.a, "ModalInput", d.a),
				m = a.a.input("Input", d.a),
				p = a.a.wrapped(i.a, "RadioOn", d.a),
				x = a.a.wrapped(s.a, "RadioOff", d.a),
				b = a.a.wrapped(o.a, "Checkbox", d.a),
				h = a.a.wrapped(l.a, "CheckboxSelected", d.a),
				C = a.a.textarea("Textarea", d.a),
				f = a.a.label("StyledLabel", d.a),
				g = a.a.input("StyledFileInput", d.a)
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
				return x
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/core-js/modules/es6.symbol.js");
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/controls/ErrorText/index.tsx"),
				i = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var n = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
				}
				return n
			};
			const x = l.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				h = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: l
					} = e, s = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputWrapper, l, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(x, m({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, s)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				C = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: l,
						redditStyle: s
					} = e, i = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.inputMovingLabelWrapper, l, {
							[u.a.mIsRedditStyle]: s
						}),
						onClick: b
					}, r.a.createElement(x, m({
						innerRef: a
					}, i)), e.label && r.a.createElement("label", {
						className: Object(o.a)(u.a.label, {
							[u.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => r.a.createElement("div", {
					className: Object(o.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class v extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
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
						placeholder: a,
						errors: o = []
					} = this.props;
					return e.map((e, l) => r.a.createElement(h, {
						inputRef: e => this.setInputRef(e, l),
						isInvalid: !!o[l],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, l),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(l)
					}, r.a.createElement(c.b, {
						className: u.a.trash
					})), !!o[l] && r.a.createElement(s.b, {
						className: u.a.errorText
					}, o[l])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: l,
						disabled: s
					} = this.props;
					this.focusedInput = null;
					const i = !(!!a && n.length >= a) && !s;
					return r.a.createElement("div", {
						className: Object(o.a)(u.a.multiInputWrapper, e)
					}, t && i && r.a.createElement(f, {
						onClick: this.addValue,
						text: l
					}), this.renderFields(), !t && i && r.a.createElement(f, {
						onClick: this.addValue,
						text: l
					}))
				}
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Circle/index.m.less": function(e, t, n) {
			e.exports = {
				circle: "_17IuRdA-NY8vFk-Tt991sn"
			}
		},
		"./src/reddit/icons/svgs/Circle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				r = n.n(a),
				o = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/icons/svgs/Circle/index.m.less"),
				s = n.n(l);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(s.a.circle, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 8 8"
			}, r.a.createElement("g", {
				fill: "inherit",
				stroke: "none"
			}, r.a.createElement("circle", {
				r: "4",
				cy: "4",
				cx: "4"
			})))
		}
	}
]);
//# sourceMappingURL=ProfileModeration~Settings~SubredditCreation.5424da0f656a33c857ac.js.map