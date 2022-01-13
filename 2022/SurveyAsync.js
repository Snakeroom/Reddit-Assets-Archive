// https://www.redditstatic.com/desktop2x/SurveyAsync.5000bd3506489d7974d9.js
// Retrieved at 1/13/2022, 3:40:05 PM by Reddit Dataminer v1.0.0
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
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(d);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => a.a.createElement(l.e, null, a.a.createElement(l.i, null, a.a.createElement(i.a, null, a.a.createElement(l.q, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(l.b, null)))), a.a.createElement(l.l, null, a.a.createElement(l.p, {
				className: m.a.ModalText
			}, e.modalText)), a.a.createElement(l.g, null, !e.hideCancelButton && a.a.createElement(l.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(l.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
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
				d = s.a.h1("FormPageTitle", a.a),
				m = s.a.div("FormPageSection", a.a),
				u = s.a.div("FormGroup", a.a),
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
				d = n("./src/reddit/models/Survey/index.ts"),
				m = n("./src/reddit/components/Survey/hooks.ts"),
				u = n("./src/lib/classNames/index.ts"),
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
			} = n("./node_modules/fbt/lib/FbtPublic.js"), S = ({
				type: e,
				selectedOption: t,
				onNumberSelected: n
			}) => a.a.createElement("div", {
				className: v.a.optionsWrapper
			}, Array.from({
				length: e === d.a.NPS ? 11 : 7
			}).map((s, o) => a.a.createElement(f.o, {
				className: Object(u.a)(v.a.option, {
					[v.a.isSelected]: t === o
				}),
				key: `survey-option-${e}-${o}`,
				onClick: () => n(o)
			}, o + (e === d.a.NPS ? 0 : 1)))), g = ({
				onAgree: e,
				onDismiss: t
			}) => {
				const n = Object(o.useRef)(0),
					[s, r] = Object(o.useState)(!1),
					[c, d] = Object(o.useState)(!1),
					{
						className: m,
						shouldMount: p,
						onTransitionEnd: h
					} = Object(i.a)({
						defaultClass: v.a.introToast,
						addedClass: v.a.isOpen,
						mountCondition: !s && !c
					}),
					f = e => {
						e && e.stopPropagation(), d(!0)
					};
				return Object(o.useEffect)(() => (n.current = window.setTimeout(f, 1e4), () => window.clearTimeout(n.current)), []), p ? a.a.createElement("div", {
					className: m,
					onClick: () => {
						window.clearTimeout(n.current), r(!0)
					},
					onTransitionEnd: n => {
						(s || c) && (s ? e() : t(), h(n))
					}
				}, a.a.createElement(l.a, {
					className: Object(u.a)(v.a.icon, v.a.close),
					onClick: f
				}), a.a.createElement("p", {
					className: v.a.text
				}, a.a.createElement("b", null, E._("Help improve Reddit.", null, {
					hk: "2WCwWk"
				})), " ", E._("Take our one-minute survey.", null, {
					hk: "3mB3oh"
				})), a.a.createElement(b.a, {
					className: Object(u.a)(v.a.icon, v.a.chevron)
				})) : null
			}, y = (e, t) => e === t ? E._("Done", null, {
				hk: "2NjHWz"
			}) : E._("Next", null, {
				hk: "2mEXAi"
			}), N = ({
				onNumberSelected: e,
				onStepComplete: t,
				currentStep: n,
				stepLength: s,
				selectedNumber: o,
				step: r
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
				className: v.a.title
			}, r.question), a.a.createElement(S, {
				type: r.type,
				selectedOption: o,
				onNumberSelected: e
			}), a.a.createElement(w, {
				type: r.type
			}), a.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: t,
				disabled: void 0 === o
			}, y(n, s))), O = ({
				step: e,
				currentStep: t,
				stepLength: n,
				onStepComplete: s,
				onTextChange: o,
				text: r
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
				className: v.a.title
			}, e.followUpQuestion), a.a.createElement(h.t, {
				className: v.a.textArea,
				value: r,
				placeholder: E._("Share your thoughts (Optional)", null, {
					hk: "2uAPqk"
				}),
				maxLength: 240,
				onChange: o
			}), a.a.createElement(p.a, {
				className: v.a.characterCountdown,
				text: r,
				maxChars: 240
			}), a.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: s
			}, y(t, n))), k = ({
				step: e,
				onStepComplete: t,
				selectedOption: n,
				currentStep: s,
				options: o,
				stepLength: r,
				onOptionSelected: l
			}) => a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
				className: v.a.title
			}, e.question), a.a.createElement(C.a, {
				className: v.a.radioGroup,
				name: "SurveyRadioStep",
				value: n,
				onChange: l
			}, o.map(e => a.a.createElement(x.a, {
				key: e,
				showButton: !0,
				value: e
			}, e))), a.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: t,
				disabled: !n
			}, y(s, r))), w = ({
				type: e
			}) => {
				const t = (e => {
					const t = {
						low: "",
						high: ""
					};
					switch (e) {
						case d.a.CES:
							t.low = E._("Very Difficult", null, {
								hk: "4oKGAC"
							}), t.high = E._("Very Easy", null, {
								hk: "4Fp78W"
							});
							break;
						case d.a.CSAT:
							t.low = E._("Very Unsatisfied", null, {
								hk: "JVX4M"
							}), t.high = E._("Very Satisfied", null, {
								hk: "YO7A3"
							});
							break;
						case d.a.NPS:
							t.low = E._("Very Unlikely", null, {
								hk: "23FcED"
							}), t.high = E._("Very Likely", null, {
								hk: "44h2Rs"
							})
					}
					return t
				})(e);
				return a.a.createElement("div", {
					className: v.a.labelRow
				}, a.a.createElement("span", {
					className: v.a.lowLabel
				}, t.low), a.a.createElement("span", {
					className: v.a.highLabel
				}, t.high))
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

			function T({
				activeSurvey: e,
				setActiveSurvey: t
			}) {
				const [n, u] = Object(o.useState)(!1), [p, h] = Object(o.useState)(void 0), [f, b] = Object(o.useState)(""), C = Object(o.useCallback)(e => b(e.target.value), []), {
					activeStepNum: x,
					isFollowUp: _,
					onStepComplete: E,
					uiStep: S,
					setActiveStepNum: y,
					setUIStep: w,
					selectedOption: T,
					questionOptions: j,
					setSelectedOption: L,
					setIsFollowUp: M
				} = Object(m.b)({
					activeSurvey: e,
					selectedNumber: p,
					setIsSurveyDismissed: u,
					setSelectedNumber: h,
					setTextResponse: b,
					textResponse: f
				}), {
					className: P,
					shouldMount: A,
					onTransitionEnd: R
				} = Object(i.a)({
					defaultClass: v.a.surveyContainer,
					addedClass: v.a.isOpen,
					mountCondition: !n && x > -1
				}), {
					isLeavingModalShowing: G,
					onClose: B,
					onLeaveCancel: H,
					onLeaveConfirm: I
				} = Object(m.a)({
					activeSurvey: e,
					activeStepNum: x,
					isFollowUp: _,
					textResponse: f,
					setTextResponse: b,
					setIsSurveyDismissed: u,
					uiStep: S
				});
				if (Object(m.c)({
						isSurveyDismissed: n,
						setIsSurveyDismissed: u,
						setActiveStepNum: y,
						setActiveSurvey: t,
						setUIStep: w,
						setIsFollowUp: M,
						shouldMount: A,
						uiStep: S
					}), -1 === x && !n) return a.a.createElement(g, {
					onAgree: E,
					onDismiss: B
				});
				if (!A) return null;
				const D = Object(c.d)(e),
					U = {
						onStepComplete: E,
						currentStep: S,
						stepLength: D
					};
				return a.a.createElement(a.a.Fragment, null, G && a.a.createElement(r.a, {
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
					onConfirm: H,
					onCancel: I,
					onClose: H
				}), a.a.createElement("div", {
					className: P,
					onTransitionEnd: R
				}, a.a.createElement(l.a, {
					className: v.a.closeBtn,
					onClick: B
				}), a.a.createElement("div", {
					className: v.a.surveyContent
				}, a.a.createElement("div", {
					className: v.a.stepNumber
				}, s.fbt._("Question {step number} of {total steps}", [s.fbt._param("step number", String(S)), s.fbt._param("total steps", String(D))], {
					hk: "4g6rjR"
				})), (() => _ ? a.a.createElement(O, F({
					onTextChange: C,
					step: e.steps[x],
					text: f
				}, U)) : e.steps[x].type === d.a.MULTI_CHOICE ? a.a.createElement(k, F({
					step: e.steps[x],
					selectedOption: T,
					options: j,
					onOptionSelected: L
				}, U)) : a.a.createElement(N, F({
					step: e.steps[x],
					selectedNumber: p,
					onNumberSelected: h
				}, U)))())))
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
			t.a = ({
				defaultClass: e,
				addedClass: t,
				mountCondition: n
			}) => {
				const [a, r] = Object(s.useState)(e), [l, c] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					n && c(!0)
				}, [n]), Object(s.useEffect)(() => {
					l && (n ? window.setTimeout(() => {
						r(Object(o.a)(e, t))
					}, 100) : r(e))
				}, [t, e, n, l]);
				const i = Object(s.useCallback)(() => {
					n || c(!1)
				}, [n]);
				return {
					className: a,
					shouldMount: l,
					onTransitionEnd: i
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.5000bd3506489d7974d9.js.map