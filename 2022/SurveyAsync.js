// https://www.redditstatic.com/desktop2x/SurveyAsync.8acb498aac1cda06c6b8.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
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
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, i._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [i._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
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
				return m
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(a);
			const r = s.a.section("FormPage", o.a),
				l = s.a.h1("HomePageTitle", o.a),
				c = s.a.button("HomePageBreadcrumb", o.a),
				i = s.a.div("HomePageGroup", o.a),
				u = s.a.h1("FormPageTitle", o.a),
				m = s.a.div("FormPageSection", o.a),
				d = s.a.div("FormGroup", o.a),
				p = s.a.h2("FormGroupTitle", o.a),
				h = s.a.div("FormElement", o.a),
				f = s.a.div("FormGroupDescription", o.a),
				b = s.a.div("FormItem", o.a),
				S = s.a.h3("FormElementTitle", o.a),
				_ = s.a.div("FormElementDescription", o.a),
				C = s.a.div("FormElementError", o.a),
				v = s.a.div("FormElementSubGroup", o.a),
				E = s.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				u = n("./src/reddit/models/Survey/index.ts"),
				m = n("./src/reddit/components/Survey/hooks.ts"),
				d = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				h = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				S = n("./src/reddit/controls/RadioInput/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/components/Survey/index.m.less"),
				v = n.n(C);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				type: e,
				selectedOption: t,
				onNumberSelected: n
			}) => o.a.createElement("div", {
				className: v.a.optionsWrapper
			}, Array.from({
				length: e === u.a.NPS ? 11 : 7
			}).map((s, a) => o.a.createElement(f.o, {
				className: Object(d.a)(v.a.option, {
					[v.a.isSelected]: t === a
				}),
				key: `survey-option-${e}-${a}`,
				onClick: () => n(a)
			}, a + (e === u.a.NPS ? 0 : 1)))), N = ({
				onAgree: e,
				onDismiss: t
			}) => {
				const n = Object(a.useRef)(0),
					[s, r] = Object(a.useState)(!1),
					[c, u] = Object(a.useState)(!1),
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
						e && e.stopPropagation(), u(!0)
					};
				return Object(a.useEffect)(() => (n.current = window.setTimeout(f, 1e4), () => window.clearTimeout(n.current)), []), p ? o.a.createElement("div", {
					className: m,
					onClick: () => {
						window.clearTimeout(n.current), r(!0)
					},
					onTransitionEnd: n => {
						(s || c) && (s ? e() : t(), h(n))
					}
				}, o.a.createElement(l.a, {
					className: Object(d.a)(v.a.icon, v.a.close),
					onClick: f
				}), o.a.createElement("p", {
					className: v.a.text
				}, o.a.createElement("b", null, E._("Help improve Reddit.", null, {
					hk: "2WCwWk"
				})), " ", E._("Take our one-minute survey.", null, {
					hk: "3mB3oh"
				})), o.a.createElement(b.a, {
					className: Object(d.a)(v.a.icon, v.a.chevron)
				})) : null
			}, g = (e, t) => e === t ? E._("Done", null, {
				hk: "2NjHWz"
			}) : E._("Next", null, {
				hk: "2mEXAi"
			}), x = ({
				onNumberSelected: e,
				onStepComplete: t,
				currentStep: n,
				stepLength: s,
				selectedNumber: a,
				step: r
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
				className: v.a.title
			}, r.question), o.a.createElement(y, {
				type: r.type,
				selectedOption: a,
				onNumberSelected: e
			}), o.a.createElement(k, {
				type: r.type
			}), o.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: t,
				disabled: void 0 === a
			}, g(n, s))), O = ({
				step: e,
				currentStep: t,
				stepLength: n,
				onStepComplete: s,
				onTextChange: a,
				text: r
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
				className: v.a.title
			}, e.followUpQuestion), o.a.createElement(h.t, {
				className: v.a.textArea,
				value: r,
				placeholder: E._("Share your thoughts (Optional)", null, {
					hk: "2uAPqk"
				}),
				maxLength: 240,
				onChange: a
			}), o.a.createElement(p.a, {
				className: v.a.characterCountdown,
				text: r,
				maxChars: 240
			}), o.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: s
			}, g(t, n))), F = ({
				step: e,
				onStepComplete: t,
				selectedOption: n,
				currentStep: s,
				options: a,
				stepLength: r,
				onOptionSelected: l
			}) => o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
				className: v.a.title
			}, e.question), o.a.createElement(S.a, {
				className: v.a.radioGroup,
				name: "SurveyRadioStep",
				value: n,
				onChange: l
			}, a.map(e => o.a.createElement(_.a, {
				key: e,
				showButton: !0,
				value: e
			}, e))), o.a.createElement(f.l, {
				className: v.a.submitBtn,
				onClick: t,
				disabled: !n
			}, g(s, r))), k = ({
				type: e
			}) => {
				const t = (e => {
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
				})(e);
				return o.a.createElement("div", {
					className: v.a.labelRow
				}, o.a.createElement("span", {
					className: v.a.lowLabel
				}, t.low), o.a.createElement("span", {
					className: v.a.highLabel
				}, t.high))
			};

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function j({
				activeSurvey: e,
				setActiveSurvey: t
			}) {
				const [n, d] = Object(a.useState)(!1), [p, h] = Object(a.useState)(void 0), [f, b] = Object(a.useState)(""), S = Object(a.useCallback)(e => b(e.target.value), []), {
					activeStepNum: _,
					isFollowUp: C,
					onStepComplete: E,
					uiStep: y,
					setActiveStepNum: g,
					setUIStep: k,
					selectedOption: j,
					questionOptions: T,
					setSelectedOption: L,
					setIsFollowUp: P
				} = Object(m.b)({
					activeSurvey: e,
					selectedNumber: p,
					setIsSurveyDismissed: d,
					setSelectedNumber: h,
					setTextResponse: b,
					textResponse: f
				}), {
					className: A,
					shouldMount: H,
					onTransitionEnd: R
				} = Object(i.a)({
					defaultClass: v.a.surveyContainer,
					addedClass: v.a.isOpen,
					mountCondition: !n && _ > -1
				}), {
					isLeavingModalShowing: G,
					onClose: I,
					onLeaveCancel: B,
					onLeaveConfirm: D
				} = Object(m.a)({
					activeSurvey: e,
					activeStepNum: _,
					isFollowUp: C,
					textResponse: f,
					setTextResponse: b,
					setIsSurveyDismissed: d,
					uiStep: y
				});
				if (Object(m.c)({
						isSurveyDismissed: n,
						setIsSurveyDismissed: d,
						setActiveStepNum: g,
						setActiveSurvey: t,
						setUIStep: k,
						setIsFollowUp: P,
						shouldMount: H,
						uiStep: y
					}), -1 === _ && !n) return o.a.createElement(N, {
					onAgree: E,
					onDismiss: I
				});
				if (!H) return null;
				const M = Object(c.d)(e),
					U = {
						onStepComplete: E,
						currentStep: y,
						stepLength: M
					};
				return o.a.createElement(o.a.Fragment, null, G && o.a.createElement(r.a, {
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
					onConfirm: B,
					onCancel: D,
					onClose: B
				}), o.a.createElement("div", {
					className: A,
					onTransitionEnd: R
				}, o.a.createElement(l.a, {
					className: v.a.closeBtn,
					onClick: I
				}), o.a.createElement("div", {
					className: v.a.surveyContent
				}, o.a.createElement("div", {
					className: v.a.stepNumber
				}, s.fbt._("Question {step number} of {total steps}", [s.fbt._param("step number", String(y)), s.fbt._param("total steps", String(M))], {
					hk: "4g6rjR"
				})), (() => C ? o.a.createElement(O, w({
					onTextChange: S,
					step: e.steps[_],
					text: f
				}, U)) : e.steps[_].type === u.a.MULTI_CHOICE ? o.a.createElement(F, w({
					step: e.steps[_],
					selectedOption: j,
					options: T,
					onOptionSelected: L
				}, U)) : o.a.createElement(x, w({
					step: e.steps[_],
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
				a = n("./src/lib/classNames/index.ts");
			t.a = ({
				defaultClass: e,
				addedClass: t,
				mountCondition: n
			}) => {
				const [o, r] = Object(s.useState)(e), [l, c] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					n && c(!0)
				}, [n]), Object(s.useEffect)(() => {
					l && (n ? window.setTimeout(() => {
						r(Object(a.a)(e, t))
					}, 100) : r(e))
				}, [t, e, n, l]);
				const i = Object(s.useCallback)(() => {
					n || c(!1)
				}, [n]);
				return {
					className: o,
					shouldMount: l,
					onTransitionEnd: i
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.8acb498aac1cda06c6b8.js.map