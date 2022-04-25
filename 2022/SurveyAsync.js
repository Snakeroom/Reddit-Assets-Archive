// https://www.redditstatic.com/desktop2x/SurveyAsync.094b8eccb6f07a9a83fa.js
// Retrieved at 4/25/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(o.b, {
				className: Object(a.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				return o
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
				return v
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return E
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = n.n(r);
			const o = s.a.section("FormPage", a.a),
				l = s.a.h1("HomePageTitle", a.a),
				c = s.a.button("HomePageBreadcrumb", a.a),
				i = s.a.div("HomePageGroup", a.a),
				u = s.a.h1("FormPageTitle", a.a),
				m = s.a.div("FormPageSection", a.a),
				d = s.a.div("FormGroup", a.a),
				p = s.a.h2("FormGroupTitle", a.a),
				h = s.a.div("FormElement", a.a),
				f = s.a.div("FormGroupDescription", a.a),
				b = s.a.div("FormItem", a.a),
				v = s.a.h3("FormElementTitle", a.a),
				_ = s.a.div("FormElementDescription", a.a),
				C = s.a.div("FormElementError", a.a),
				S = s.a.div("FormElementSubGroup", a.a),
				E = s.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
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
				v = n("./src/reddit/controls/RadioInput/index.tsx"),
				_ = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				C = n("./src/reddit/components/Survey/index.m.less"),
				S = n.n(C);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				let {
					type: t,
					selectedOption: n,
					onNumberSelected: s
				} = e;
				return a.a.createElement("div", {
					className: S.a.optionsWrapper
				}, Array.from({
					length: t === u.a.NPS ? 11 : 7
				}).map((e, r) => a.a.createElement(f.o, {
					className: Object(d.a)(S.a.option, {
						[S.a.isSelected]: n === r
					}),
					key: `survey-option-${t}-${r}`,
					onClick: () => s(r)
				}, r + (t === u.a.NPS ? 0 : 1))))
			}, x = e => {
				let {
					onAgree: t,
					onDismiss: n
				} = e;
				const s = Object(r.useRef)(0),
					[o, c] = Object(r.useState)(!1),
					[u, m] = Object(r.useState)(!1),
					{
						className: p,
						shouldMount: h,
						onTransitionEnd: f
					} = Object(i.a)({
						defaultClass: S.a.introToast,
						addedClass: S.a.isOpen,
						mountCondition: !o && !u
					}),
					v = e => {
						e && e.stopPropagation(), m(!0)
					};
				return Object(r.useEffect)(() => (s.current = window.setTimeout(v, 1e4), () => window.clearTimeout(s.current)), []), h ? a.a.createElement("div", {
					className: p,
					onClick: () => {
						window.clearTimeout(s.current), c(!0)
					},
					onTransitionEnd: e => {
						(o || u) && (o ? t() : n(), f(e))
					}
				}, a.a.createElement(l.a, {
					className: Object(d.a)(S.a.icon, S.a.close),
					onClick: v
				}), a.a.createElement("p", {
					className: S.a.text
				}, a.a.createElement("b", null, E._("Help improve Reddit.", null, {
					hk: "2WCwWk"
				})), " ", E._("Take our one-minute survey.", null, {
					hk: "3mB3oh"
				})), a.a.createElement(b.a, {
					className: Object(d.a)(S.a.icon, S.a.chevron)
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
					stepLength: r,
					selectedNumber: o,
					step: l
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: S.a.title
				}, l.question), a.a.createElement(g, {
					type: l.type,
					selectedOption: o,
					onNumberSelected: t
				}), a.a.createElement(F, {
					type: l.type
				}), a.a.createElement(f.l, {
					className: S.a.submitBtn,
					onClick: n,
					disabled: void 0 === o
				}, y(s, r)))
			}, O = e => {
				let {
					step: t,
					currentStep: n,
					stepLength: s,
					onStepComplete: r,
					onTextChange: o,
					text: l
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: S.a.title
				}, t.followUpQuestion), a.a.createElement(h.t, {
					className: S.a.textArea,
					value: l,
					placeholder: E._("Share your thoughts (Optional)", null, {
						hk: "2uAPqk"
					}),
					maxLength: 240,
					onChange: o
				}), a.a.createElement(p.a, {
					className: S.a.characterCountdown,
					text: l,
					maxChars: 240
				}), a.a.createElement(f.l, {
					className: S.a.submitBtn,
					onClick: r
				}, y(n, s)))
			}, w = e => {
				let {
					step: t,
					onStepComplete: n,
					selectedOption: s,
					currentStep: r,
					options: o,
					stepLength: l,
					onOptionSelected: c
				} = e;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
					className: S.a.title
				}, t.question), a.a.createElement(v.a, {
					className: S.a.radioGroup,
					name: "SurveyRadioStep",
					value: s,
					onChange: c
				}, o.map(e => a.a.createElement(_.a, {
					key: e,
					showButton: !0,
					value: e
				}, e))), a.a.createElement(f.l, {
					className: S.a.submitBtn,
					onClick: n,
					disabled: !s
				}, y(r, l)))
			}, F = e => {
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
					className: S.a.labelRow
				}, a.a.createElement("span", {
					className: S.a.lowLabel
				}, n.low), a.a.createElement("span", {
					className: S.a.highLabel
				}, n.high))
			};

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function j(e) {
				let {
					activeSurvey: t,
					setActiveSurvey: n
				} = e;
				const [d, p] = Object(r.useState)(!1), [h, f] = Object(r.useState)(void 0), [b, v] = Object(r.useState)(""), _ = Object(r.useCallback)(e => v(e.target.value), []), {
					activeStepNum: C,
					isFollowUp: E,
					onStepComplete: g,
					uiStep: y,
					setActiveStepNum: F,
					setUIStep: j,
					selectedOption: T,
					questionOptions: L,
					setSelectedOption: P,
					setIsFollowUp: A
				} = Object(m.b)({
					activeSurvey: t,
					selectedNumber: h,
					setIsSurveyDismissed: p,
					setSelectedNumber: f,
					setTextResponse: v,
					textResponse: b
				}), {
					className: H,
					shouldMount: R,
					onTransitionEnd: G
				} = Object(i.a)({
					defaultClass: S.a.surveyContainer,
					addedClass: S.a.isOpen,
					mountCondition: !d && C > -1
				}), {
					isLeavingModalShowing: I,
					onClose: B,
					onLeaveCancel: D,
					onLeaveConfirm: M
				} = Object(m.a)({
					activeSurvey: t,
					activeStepNum: C,
					isFollowUp: E,
					textResponse: b,
					setTextResponse: v,
					setIsSurveyDismissed: p,
					uiStep: y
				});
				if (Object(m.c)({
						isSurveyDismissed: d,
						setIsSurveyDismissed: p,
						setActiveStepNum: F,
						setActiveSurvey: n,
						setUIStep: j,
						setIsFollowUp: A,
						shouldMount: R,
						uiStep: y
					}), -1 === C && !d) return a.a.createElement(x, {
					onAgree: g,
					onDismiss: B
				});
				if (!R) return null;
				const U = Object(c.d)(t),
					Q = {
						onStepComplete: g,
						currentStep: y,
						stepLength: U
					};
				return a.a.createElement(a.a.Fragment, null, I && a.a.createElement(o.a, {
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
					onConfirm: D,
					onCancel: M,
					onClose: D
				}), a.a.createElement("div", {
					className: H,
					onTransitionEnd: G
				}, a.a.createElement(l.a, {
					className: S.a.closeBtn,
					onClick: B
				}), a.a.createElement("div", {
					className: S.a.surveyContent
				}, a.a.createElement("div", {
					className: S.a.stepNumber
				}, s.fbt._("Question {step number} of {total steps}", [s.fbt._param("step number", String(y)), s.fbt._param("total steps", String(U))], {
					hk: "4g6rjR"
				})), (() => E ? a.a.createElement(O, k({
					onTextChange: _,
					step: t.steps[C],
					text: b
				}, Q)) : t.steps[C].type === u.a.MULTI_CHOICE ? a.a.createElement(w, k({
					step: t.steps[C],
					selectedOption: T,
					options: L,
					onOptionSelected: P
				}, Q)) : a.a.createElement(N, k({
					step: t.steps[C],
					selectedNumber: h,
					onNumberSelected: f
				}, Q)))())))
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
				r = n("./src/lib/classNames/index.ts");
			t.a = e => {
				let {
					defaultClass: t,
					addedClass: n,
					mountCondition: a
				} = e;
				const [o, l] = Object(s.useState)(t), [c, i] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					a && i(!0)
				}, [a]), Object(s.useEffect)(() => {
					c && (a ? window.setTimeout(() => {
						l(Object(r.a)(t, n))
					}, 100) : l(t))
				}, [n, t, a, c]);
				const u = Object(s.useCallback)(() => {
					a || i(!1)
				}, [a]);
				return {
					className: o,
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
				r = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				l = n.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(l.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.094b8eccb6f07a9a83fa.js.map