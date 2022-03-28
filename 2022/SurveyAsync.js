// https://www.redditstatic.com/desktop2x/SurveyAsync.f8ba747979a9913d9ea0.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SurveyAsync"], {
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, n) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(r.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, i._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [i._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				d = n.n(u);
			const m = e => e.preventDefault();
			t.a = Object(r.a)(e => a.a.createElement(l.e, null, a.a.createElement(l.i, null, a.a.createElement(i.a, null, a.a.createElement(l.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(l.b, null)))), a.a.createElement(l.l, null, a.a.createElement(l.p, {
				className: d.a.ModalText
			}, e.modalText)), a.a.createElement(l.g, null, !e.hideCancelButton && a.a.createElement(l.a, {
				className: d.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(l.u, {
				className: d.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				return r
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return i
			})), n.d(t, "m", (function() {
				return u
			})), n.d(t, "l", (function() {
				return d
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(o);
			const r = s.a.section("FormPage", a.a),
				l = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				i = s.a.div("HomePageGroup", a.a),
				u = s.a.h1("FormPageTitle", a.a),
				d = s.a.div("FormPageSection", a.a),
				m = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				h = s.a.div("FormElement", a.a),
				f = s.a.div("FormGroupDescription", a.a),
				b = s.a.div("FormItem", a.a),
				C = s.a.h3("FormElementTitle", a.a),
				x = s.a.div("FormElementDescription", a.a),
				_ = s.a.div("FormElementError", a.a),
				v = s.a.div("FormElementSubGroup", a.a),
				E = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return T
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				u = n("./src/reddit/models/Survey/index.ts"),
				d = n("./src/reddit/components/Survey/hooks.ts"),
				m = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				C = n("./src/reddit/controls/RadioInput/index.tsx"),
				x = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				_ = n("./src/reddit/components/Survey/index.m.less"),
				v = n.n(_);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = e => {
				let {
					type: t,
					selectedOption: n,
					onNumberSelected: s
				} = e;
				return a.a.createElement("div", {
					className: v.a.optionsWrapper
				}, Array.from({
					length: t === u.a.NPS ? 11 : 7
				}).map((e, o) => a.a.createElement(f.o, {
					className: Object(m.a)(v.a.option, {
						[v.a.isSelected]: n === o
					}),
					key: `survey-option-${t}-${o}`,
					onClick: () => s(o)
				}, o + (t === u.a.NPS ? 0 : 1))))
			}, g = e => {
				let {
					onAgree: t,
					onDismiss: n
				} = e;
				const s = Object(o.useRef)(0),
					[r, c] = Object(o.useState)(!1),
					[u, d] = Object(o.useState)(!1),
					{
						className: p,
						shouldMount: h,
						onTransitionEnd: f
					} = Object(i.a)({
						defaultClass: v.a.introToast,
						addedClass: v.a.isOpen,
						mountCondition: !r && !u
					}),
					C = e => {
						e && e.stopPropagation(), d(!0)
					};
				return Object(o.useEffect)(() => (s.current = window.setTimeout(C, 1e4), () => window.clearTimeout(s.current)), []), h ? a.a.createElement("div", {
					className: p,
					onClick: () => {
						window.clearTimeout(s.current), c(!0)
					},
					onTransitionEnd: e => {
						(r || u) && (r ? t() : n(), f(e))
					}
				}, a.a.createElement(l.a, {
					className: Object(m.a)(v.a.icon, v.a.close),
					onClick: C
				}), a.a.createElement("p", {
					className: v.a.text
				}, a.a.createElement("b", null, E._("Help improve Reddit.", null, {
					hk: "2WCwWk"
				})), " ", E._("Take our one-minute survey.", null, {
					hk: "3mB3oh"
				})), a.a.createElement(b.a, {
					className: Object(m.a)(v.a.icon, v.a.chevron)
				})) : null
			}, y = (e, t) => e === t ? E._("Done", null, {
				hk: "2NjHWz"
			}) : E._("Next", null, {
				hk: "2mEXAi"
			}), N = e => {
				let {
					onNumberSelected: t,
					onStepComplete: n,
					currentStep: s,
					stepLength: o,
					selectedNumber: r,
					step: l
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: v.a.title
				}, l.question), a.a.createElement(S, {
					type: l.type,
					selectedOption: r,
					onNumberSelected: t
				}), a.a.createElement(w, {
					type: l.type
				}), a.a.createElement(f.l, {
					className: v.a.submitBtn,
					onClick: n,
					disabled: void 0 === r
				}, y(s, o)))
			}, O = e => {
				let {
					step: t,
					currentStep: n,
					stepLength: s,
					onStepComplete: o,
					onTextChange: r,
					text: l
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: v.a.title
				}, t.followUpQuestion), a.a.createElement(h.t, {
					className: v.a.textArea,
					value: l,
					placeholder: E._("Share your thoughts (Optional)", null, {
						hk: "2uAPqk"
					}),
					maxLength: 240,
					onChange: r
				}), a.a.createElement(p.a, {
					className: v.a.characterCountdown,
					text: l,
					maxChars: 240
				}), a.a.createElement(f.l, {
					className: v.a.submitBtn,
					onClick: o
				}, y(n, s)))
			}, k = e => {
				let {
					step: t,
					onStepComplete: n,
					selectedOption: s,
					currentStep: o,
					options: r,
					stepLength: l,
					onOptionSelected: c
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: v.a.title
				}, t.question), a.a.createElement(C.a, {
					className: v.a.radioGroup,
					name: "SurveyRadioStep",
					value: s,
					onChange: c
				}, r.map(e => a.a.createElement(x.a, {
					key: e,
					showButton: !0,
					value: e
				}, e))), a.a.createElement(f.l, {
					className: v.a.submitBtn,
					onClick: n,
					disabled: !s
				}, y(o, l)))
			}, w = e => {
				let {
					type: t
				} = e;
				const n = (e => {
					const t = {
						low: "",
						high: ""
					};
					switch (e) {
						case u.a.CES:
							t.low = E._("Very Difficult", null, {
								hk: "4oKGAC"
							}), t.high = E._("Very Easy", null, {
								hk: "4Fp78W"
							});
							break;
						case u.a.CSAT:
							t.low = E._("Very Unsatisfied", null, {
								hk: "JVX4M"
							}), t.high = E._("Very Satisfied", null, {
								hk: "YO7A3"
							});
							break;
						case u.a.NPS:
							t.low = E._("Very Unlikely", null, {
								hk: "23FcED"
							}), t.high = E._("Very Likely", null, {
								hk: "44h2Rs"
							})
					}
					return t
				})(t);
				return a.a.createElement("div", {
					className: v.a.labelRow
				}, a.a.createElement("span", {
					className: v.a.lowLabel
				}, n.low), a.a.createElement("span", {
					className: v.a.highLabel
				}, n.high))
			};

			function F() {
				return (F = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function T(e) {
				let {
					activeSurvey: t,
					setActiveSurvey: n
				} = e;
				const [m, p] = Object(o.useState)(!1), [h, f] = Object(o.useState)(void 0), [b, C] = Object(o.useState)(""), x = Object(o.useCallback)(e => C(e.target.value), []), {
					activeStepNum: _,
					isFollowUp: E,
					onStepComplete: S,
					uiStep: y,
					setActiveStepNum: w,
					setUIStep: T,
					selectedOption: j,
					questionOptions: L,
					setSelectedOption: M,
					setIsFollowUp: P
				} = Object(d.b)({
					activeSurvey: t,
					selectedNumber: h,
					setIsSurveyDismissed: p,
					setSelectedNumber: f,
					setTextResponse: C,
					textResponse: b
				}), {
					className: A,
					shouldMount: R,
					onTransitionEnd: G
				} = Object(i.a)({
					defaultClass: v.a.surveyContainer,
					addedClass: v.a.isOpen,
					mountCondition: !m && _ > -1
				}), {
					isLeavingModalShowing: B,
					onClose: H,
					onLeaveCancel: I,
					onLeaveConfirm: D
				} = Object(d.a)({
					activeSurvey: t,
					activeStepNum: _,
					isFollowUp: E,
					textResponse: b,
					setTextResponse: C,
					setIsSurveyDismissed: p,
					uiStep: y
				});
				if (Object(d.c)({
						isSurveyDismissed: m,
						setIsSurveyDismissed: p,
						setActiveStepNum: w,
						setActiveSurvey: n,
						setUIStep: T,
						setIsFollowUp: P,
						shouldMount: R,
						uiStep: y
					}), -1 === _ && !m) return a.a.createElement(g, {
					onAgree: S,
					onDismiss: H
				});
				if (!R) return null;
				const U = Object(c.d)(t),
					W = {
						onStepComplete: S,
						currentStep: y,
						stepLength: U
					};
				return a.a.createElement(a.a.Fragment, null, B && a.a.createElement(r.a, {
					actionText: s.fbt._("Finish Survey", null, {
						hk: "18Lvjs"
					}),
					cancelActionText: s.fbt._("Leave", null, {
						hk: "436z1q"
					}),
					headerText: s.fbt._("Are you sure you want to leave?", null, {
						hk: "2iBBCg"
					}),
					modalText: s.fbt._("If you don't finish the survey, your feedback won't be submitted.", null, {
						hk: "377HNX"
					}),
					onConfirm: I,
					onCancel: D,
					onClose: I
				}), a.a.createElement("div", {
					className: A,
					onTransitionEnd: G
				}, a.a.createElement(l.a, {
					className: v.a.closeBtn,
					onClick: H
				}), a.a.createElement("div", {
					className: v.a.surveyContent
				}, a.a.createElement("div", {
					className: v.a.stepNumber
				}, s.fbt._("Question {step number} of {total steps}", [s.fbt._param("step number", String(y)), s.fbt._param("total steps", String(U))], {
					hk: "4g6rjR"
				})), (() => E ? a.a.createElement(O, F({
					onTextChange: x,
					step: t.steps[_],
					text: b
				}, W)) : t.steps[_].type === u.a.MULTI_CHOICE ? a.a.createElement(k, F({
					step: t.steps[_],
					selectedOption: j,
					options: L,
					onOptionSelected: M
				}, W)) : a.a.createElement(N, F({
					step: t.steps[_],
					selectedNumber: h,
					onNumberSelected: f
				}, W)))())))
			}
		},
		"./src/reddit/components/Survey/index.m.less": function(e, t, n) {
			e.exports = {
				surveyContainer: "_36FlfeNQ6Ck4mjzC3YCpX3",
				isOpen: "_3NOj43fM-WKc3VJGbl86rD",
				introToast: "_2GuGIADmGF_RjXbfKhhvHO",
				icon: "OmgYURJUki0S-hIyu5j3x",
				close: "_1XTIHNwGkgNsGxctvP-7Ok",
				chevron: "ylayZ-RJHC_bwQrE3BfrK",
				text: "_373vH5mC9l0zup-nh-7ccl",
				surveyContent: "_2_L61Eytz64Fk93RR_3t84",
				closeBtn: "_2aZbF2iolXVBrLSUnoHxLi",
				title: "Brt84NVp10IF2NqBEpGqd",
				snooIcon: "_1Dfg3wcQKtrRqQOE1VVYS1",
				stepNumber: "LNd9QBeSFHOra_LRa6I9a",
				optionsWrapper: "_175ua7ptwcDLBOAM7SRE60",
				option: "_1lY7AdZ9uz5QSableC_5gZ",
				isSelected: "_2EmX2Qy2X30daqiILp-Pid",
				labelRow: "_12elwub6eZguOVwH7x1OV6",
				textArea: "_3JRtPy8d3ty_d3eEj4oo5X",
				characterCountdown: "P9I1yL4VXkyFXfaunV9WB",
				submitBtn: "_2UjQ34ciczTaPh6tSLPvnx",
				radioGroup: "_3ZUd3ff3ZjMhTPjcCYcH9d"
			}
		},
		"./src/reddit/hooks/useClassNameOnMount.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n("./src/lib/classNames/index.ts");
			t.a = e => {
				let {
					defaultClass: t,
					addedClass: n,
					mountCondition: a
				} = e;
				const [r, l] = Object(s.useState)(t), [c, i] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					a && i(!0)
				}, [a]), Object(s.useEffect)(() => {
					c && (a ? window.setTimeout(() => {
						l(Object(o.a)(t, n))
					}, 100) : l(t))
				}, [n, t, a, c]);
				const u = Object(s.useCallback)(() => {
					a || i(!1)
				}, [a]);
				return {
					className: r,
					shouldMount: c,
					onTransitionEnd: u
				}
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(a.a)(l.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, o.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.f8ba747979a9913d9ea0.js.map