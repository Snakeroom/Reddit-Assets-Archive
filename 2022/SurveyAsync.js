// https://www.redditstatic.com/desktop2x/SurveyAsync.cae700f07712c14b1dfb.js
// Retrieved at 1/6/2022, 4:30:04 PM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(r.b, {
				className: Object(s.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(u);
			const d = e => e.preventDefault();
			t.a = Object(r.a)(e => s.a.createElement(l.e, null, s.a.createElement(l.i, null, s.a.createElement(i.a, null, s.a.createElement(l.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(l.b, null)))), s.a.createElement(l.l, null, s.a.createElement(l.p, {
				className: m.a.ModalText
			}, e.modalText)), s.a.createElement(l.g, null, !e.hideCancelButton && s.a.createElement(l.a, {
				className: m.a.buttonWidth,
				onMouseDown: d,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(l.u, {
				className: m.a.buttonWidth,
				onMouseDown: d,
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
			var a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(o);
			const r = a.a.section("FormPage", s.a),
				l = a.a.h1("HomePageTitle", s.a),
				c = a.a.button("HomePageBreadcrumb", s.a),
				i = a.a.div("HomePageGroup", s.a),
				u = a.a.h1("FormPageTitle", s.a),
				m = a.a.div("FormPageSection", s.a),
				d = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				h = a.a.div("FormElement", s.a),
				f = a.a.div("FormGroupDescription", s.a),
				b = a.a.div("FormItem", s.a),
				C = a.a.h3("FormElementTitle", s.a),
				x = a.a.div("FormElementDescription", s.a),
				_ = a.a.div("FormElementError", s.a),
				v = a.a.div("FormElementSubGroup", s.a),
				E = a.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return F
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				u = n("./src/reddit/components/Survey/hooks.ts"),
				m = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = n("./src/reddit/controls/RadioInput/index.tsx"),
				C = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				x = n("./src/reddit/components/Survey/index.m.less"),
				_ = n.n(x);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), E = ({
				type: e,
				selectedOption: t,
				onNumberSelected: n
			}) => s.a.createElement("div", {
				className: _.a.optionsWrapper
			}, Array.from({
				length: e === c.a.NPS ? 11 : 7
			}).map((a, o) => s.a.createElement(h.o, {
				className: Object(m.a)(_.a.option, {
					[_.a.isSelected]: t === o
				}),
				key: `survey-option-${e}-${o}`,
				onClick: () => n(o)
			}, o + (e === c.a.NPS ? 0 : 1)))), g = ({
				onAgree: e,
				onDismiss: t
			}) => {
				const n = Object(o.useRef)(0),
					[a, r] = Object(o.useState)(!1),
					[c, u] = Object(o.useState)(!1),
					{
						className: d,
						shouldMount: p,
						onTransitionEnd: h
					} = Object(i.a)({
						defaultClass: _.a.introToast,
						addedClass: _.a.isOpen,
						mountCondition: !a && !c
					}),
					b = e => {
						e && e.stopPropagation(), u(!0)
					};
				return Object(o.useEffect)(() => (n.current = window.setTimeout(b, 1e4), () => window.clearTimeout(n.current)), []), p ? s.a.createElement("div", {
					className: d,
					onClick: () => {
						window.clearTimeout(n.current), r(!0)
					},
					onTransitionEnd: n => {
						(a || c) && (a ? e() : t(), h(n))
					}
				}, s.a.createElement(l.a, {
					className: Object(m.a)(_.a.icon, _.a.close),
					onClick: b
				}), s.a.createElement("p", {
					className: _.a.text
				}, s.a.createElement("b", null, v._("Help improve Reddit.", null, {
					hk: "2WCwWk"
				})), " ", v._("Take our one-minute survey.", null, {
					hk: "3mB3oh"
				})), s.a.createElement(f.a, {
					className: Object(m.a)(_.a.icon, _.a.chevron)
				})) : null
			}, S = (e, t) => e === t ? v._("Done", null, {
				hk: "2NjHWz"
			}) : v._("Next", null, {
				hk: "2mEXAi"
			}), y = ({
				onNumberSelected: e,
				onStepComplete: t,
				currentStep: n,
				stepLength: a,
				selectedNumber: o,
				step: r
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
				className: _.a.title
			}, r.question), s.a.createElement(E, {
				type: r.type,
				selectedOption: o,
				onNumberSelected: e
			}), s.a.createElement(k, {
				type: r.type
			}), s.a.createElement(h.l, {
				className: _.a.submitBtn,
				onClick: t,
				disabled: void 0 === o
			}, S(n, a))), N = ({
				step: e,
				currentStep: t,
				stepLength: n,
				onStepComplete: a,
				onTextChange: o,
				text: r
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
				className: _.a.title
			}, e.follow_up_question), s.a.createElement(p.t, {
				className: _.a.textArea,
				value: r,
				placeholder: v._("Share your thoughts (Optional)", null, {
					hk: "2uAPqk"
				}),
				maxLength: 240,
				onChange: o
			}), s.a.createElement(d.a, {
				className: _.a.characterCountdown,
				text: r,
				maxChars: 240
			}), s.a.createElement(h.l, {
				className: _.a.submitBtn,
				onClick: a
			}, S(t, n))), O = ({
				step: e,
				onStepComplete: t,
				selectedOption: n,
				currentStep: a,
				options: o,
				stepLength: r,
				onOptionSelected: l
			}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
				className: _.a.title
			}, e.question), s.a.createElement(b.a, {
				className: _.a.radioGroup,
				name: "SurveyRadioStep",
				value: n,
				onChange: l
			}, o.map(e => s.a.createElement(C.a, {
				key: e,
				showButton: !0,
				value: e
			}, e))), s.a.createElement(h.l, {
				className: _.a.submitBtn,
				onClick: t,
				disabled: !n
			}, S(a, r))), k = ({
				type: e
			}) => {
				const t = (e => {
					const t = {
						low: "",
						high: ""
					};
					switch (e) {
						case c.a.CES:
							t.low = v._("Very Difficult", null, {
								hk: "4oKGAC"
							}), t.high = v._("Very Easy", null, {
								hk: "4Fp78W"
							});
							break;
						case c.a.CSAT:
							t.low = v._("Very Unsatisfied", null, {
								hk: "JVX4M"
							}), t.high = v._("Very Satisfied", null, {
								hk: "YO7A3"
							});
							break;
						case c.a.NPS:
							t.low = v._("Very Unlikely", null, {
								hk: "23FcED"
							}), t.high = v._("Very Likely", null, {
								hk: "44h2Rs"
							})
					}
					return t
				})(e);
				return s.a.createElement("div", {
					className: _.a.labelRow
				}, s.a.createElement("span", {
					className: _.a.lowLabel
				}, t.low), s.a.createElement("span", {
					className: _.a.highLabel
				}, t.high))
			};

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}

			function F({
				activeSurvey: e,
				setActiveSurvey: t
			}) {
				const [n, m] = Object(o.useState)(!1), [d, p] = Object(o.useState)(void 0), [h, f] = Object(o.useState)(""), b = Object(o.useCallback)(e => f(e.target.value), []), {
					activeStepNum: C,
					isFollowUp: x,
					onStepComplete: v,
					uiStep: E,
					setActiveStepNum: S,
					setUIStep: k,
					selectedOption: F,
					questionOptions: T,
					setSelectedOption: j,
					setIsFollowUp: L
				} = Object(u.b)({
					activeSurvey: e,
					selectedNumber: d,
					setIsSurveyDismissed: m,
					setSelectedNumber: p,
					setTextResponse: f,
					textResponse: h
				}), {
					className: M,
					shouldMount: P,
					onTransitionEnd: A
				} = Object(i.a)({
					defaultClass: _.a.surveyContainer,
					addedClass: _.a.isOpen,
					mountCondition: !n && C > -1
				}), {
					isLeavingModalShowing: R,
					onClose: G,
					onLeaveCancel: B,
					onLeaveConfirm: H
				} = Object(u.a)({
					activeSurvey: e,
					activeStepNum: C,
					isFollowUp: x,
					textResponse: h,
					setTextResponse: f,
					setIsSurveyDismissed: m,
					uiStep: E
				});
				if (Object(u.c)({
						isSurveyDismissed: n,
						setIsSurveyDismissed: m,
						setActiveStepNum: S,
						setActiveSurvey: t,
						setUIStep: k,
						setIsFollowUp: L,
						shouldMount: P,
						uiStep: E
					}), -1 === C && !n) return s.a.createElement(g, {
					onAgree: v,
					onDismiss: G
				});
				if (!P) return null;
				const I = Object(c.e)(e),
					D = {
						onStepComplete: v,
						currentStep: E,
						stepLength: I
					};
				return s.a.createElement(s.a.Fragment, null, R && s.a.createElement(r.a, {
					actionText: a.fbt._("Finish Survey", null, {
						hk: "18Lvjs"
					}),
					cancelActionText: a.fbt._("Leave", null, {
						hk: "2kry5M"
					}),
					headerText: a.fbt._("Are you sure you want to leave?", null, {
						hk: "2iBBCg"
					}),
					modalText: a.fbt._("If you don't finish the survey, your feedback won't be submitted.", null, {
						hk: "377HNX"
					}),
					onConfirm: B,
					onCancel: H,
					onClose: B
				}), s.a.createElement("div", {
					className: M,
					onTransitionEnd: A
				}, s.a.createElement(l.a, {
					className: _.a.closeBtn,
					onClick: G
				}), s.a.createElement("div", {
					className: _.a.surveyContent
				}, s.a.createElement("div", {
					className: _.a.stepNumber
				}, a.fbt._("Question {step number} of {total steps}", [a.fbt._param("step number", String(E)), a.fbt._param("total steps", String(I))], {
					hk: "4g6rjR"
				})), (() => x ? s.a.createElement(N, w({
					onTextChange: b,
					step: e.steps[C],
					text: h
				}, D)) : e.steps[C].type === c.a.MULTI_CHOICE ? s.a.createElement(O, w({
					step: e.steps[C],
					selectedOption: F,
					options: T,
					onOptionSelected: j
				}, D)) : s.a.createElement(y, w({
					step: e.steps[C],
					selectedNumber: d,
					onNumberSelected: p
				}, D)))())))
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
			var a = n("./node_modules/react/index.js"),
				o = n("./src/lib/classNames/index.ts");
			t.a = ({
				defaultClass: e,
				addedClass: t,
				mountCondition: n
			}) => {
				const [s, r] = Object(a.useState)(e), [l, c] = Object(a.useState)(!1);
				Object(a.useEffect)(() => {
					n && c(!0)
				}, [n]), Object(a.useEffect)(() => {
					l && (n ? window.setTimeout(() => {
						r(Object(o.a)(e, t))
					}, 100) : r(e))
				}, [t, e, n, l]);
				const i = Object(a.useCallback)(() => {
					n || c(!1)
				}, [n]);
				return {
					className: s,
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
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				l = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: Object(s.a)(l.a.chevron, e.className),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.cae700f07712c14b1dfb.js.map