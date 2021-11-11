// https://www.redditstatic.com/desktop2x/SurveyAsync.66d929792c4a6f48736f.js
// Retrieved at 11/11/2021, 1:40:05 PM by Reddit Dataminer v1.0.0
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
				m = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(m);
			const d = e => e.preventDefault();
			t.a = Object(r.a)(e => s.a.createElement(l.e, null, s.a.createElement(l.i, null, s.a.createElement(i.a, null, s.a.createElement(l.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(l.b, null)))), s.a.createElement(l.l, null, s.a.createElement(l.p, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(l.g, null, !e.hideCancelButton && s.a.createElement(l.a, {
				className: u.a.buttonWidth,
				onMouseDown: d,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(l.u, {
				className: u.a.buttonWidth,
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
				return m
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return S
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(o);
			const r = a.a.section("FormPage", s.a),
				l = a.a.h1("HomePageTitle", s.a),
				c = a.a.button("HomePageBreadcrumb", s.a),
				i = a.a.div("HomePageGroup", s.a),
				m = a.a.h1("FormPageTitle", s.a),
				u = a.a.div("FormPageSection", s.a),
				d = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				b = a.a.div("FormElement", s.a),
				f = a.a.div("FormGroupDescription", s.a),
				h = a.a.div("FormItem", s.a),
				C = a.a.h3("FormElementTitle", s.a),
				_ = a.a.div("FormElementDescription", s.a),
				x = a.a.div("FormElementError", s.a),
				E = a.a.div("FormElementSubGroup", s.a),
				S = a.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return y
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/reddit/hooks/useClassNameOnMount.ts"),
				m = n("./src/reddit/components/Survey/hooks.ts"),
				u = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				f = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/components/Survey/index.m.less"),
				C = n.n(h);
			const _ = ({
					type: e,
					selectedOption: t,
					onNumberSelected: n
				}) => s.a.createElement("div", {
					className: C.a.optionsWrapper
				}, Array.from({
					length: e === c.a.NPS ? 11 : 7
				}).map((a, o) => s.a.createElement(b.o, {
					className: Object(u.a)(C.a.option, {
						[C.a.isSelected]: t === o
					}),
					key: `survey-option-${e}-${o}`,
					onClick: () => n(o)
				}, o + (e === c.a.NPS ? 0 : 1)))),
				x = ({
					onAgree: e,
					onDismiss: t
				}) => {
					const n = Object(o.useRef)(0),
						[r, c] = Object(o.useState)(!1),
						[m, d] = Object(o.useState)(!1),
						{
							className: p,
							shouldMount: b,
							onTransitionEnd: h
						} = Object(i.a)({
							defaultClass: C.a.introToast,
							addedClass: C.a.isOpen,
							mountCondition: !r && !m
						}),
						_ = e => {
							e && e.stopPropagation(), d(!0)
						};
					return Object(o.useEffect)(() => (n.current = window.setTimeout(_, 1e4), () => window.clearTimeout(n.current)), []), b ? s.a.createElement("div", {
						className: p,
						onClick: () => {
							window.clearTimeout(n.current), c(!0)
						},
						onTransitionEnd: n => {
							(r || m) && (r ? e() : t(), h(n))
						}
					}, s.a.createElement(l.a, {
						className: Object(u.a)(C.a.icon, C.a.close),
						onClick: _
					}), s.a.createElement("p", {
						className: C.a.text
					}, s.a.createElement("b", null, a.fbt._("Help improve reddit.", null, {
						hk: "1MmTHK"
					})), " ", a.fbt._("Take our one-minute survey.", null, {
						hk: "3mB3oh"
					})), s.a.createElement(f.a, {
						className: Object(u.a)(C.a.icon, C.a.chevron)
					})) : null
				},
				E = ({
					onNumberSelected: e,
					onStepComplete: t,
					selectedNumber: n,
					step: o
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
					className: C.a.title
				}, o.question), s.a.createElement(_, {
					type: o.type,
					selectedOption: n,
					onNumberSelected: e
				}), s.a.createElement(v, {
					type: o.type
				}), s.a.createElement(b.l, {
					className: C.a.submitBtn,
					onClick: t,
					disabled: void 0 === n
				}, a.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				S = ({
					step: e,
					onStepComplete: t,
					onTextChange: n,
					text: o
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
					className: C.a.title
				}, e.follow_up_question), s.a.createElement(p.t, {
					className: C.a.textArea,
					value: o,
					placeholder: a.fbt._("Share your thoughts (Optional)", null, {
						hk: "2uAPqk"
					}),
					maxLength: 240,
					onChange: n
				}), s.a.createElement(d.a, {
					className: C.a.characterCountdown,
					text: o,
					maxChars: 240
				}), s.a.createElement(b.l, {
					className: C.a.submitBtn,
					onClick: t
				}, a.fbt._("Done", null, {
					hk: "2NjHWz"
				}))),
				v = ({
					type: e
				}) => {
					const [t, n] = (e => {
						switch (e) {
							case c.a.CES:
								return [a.fbt._("Very Difficult", null, {
									hk: "4oKGAC"
								}), a.fbt._("Very Easy", null, {
									hk: "4Fp78W"
								})];
							case c.a.CSAT:
								return [a.fbt._("Very Unsatisfied", null, {
									hk: "JVX4M"
								}), a.fbt._("Very Satisfied", null, {
									hk: "YO7A3"
								})];
							case c.a.NPS:
								return [a.fbt._("Very Unlikely", null, {
									hk: "23FcED"
								}), a.fbt._("Very Likely", null, {
									hk: "44h2Rs"
								})]
						}
					})(e);
					return s.a.createElement("div", {
						className: C.a.labelRow
					}, s.a.createElement("span", {
						className: C.a.lowLabel
					}, t), s.a.createElement("span", {
						className: C.a.highLabel
					}, n))
				};

			function y({
				activeSurvey: e,
				setActiveSurvey: t
			}) {
				const [n, u] = Object(o.useState)(!1), [d, p] = Object(o.useState)(void 0), [b, f] = Object(o.useState)(""), h = Object(o.useCallback)(e => f(e.target.value), []), {
					activeStepNum: _,
					isFollowUp: v,
					onStepComplete: y,
					uiStep: N,
					setActiveStepNum: g,
					setUIStep: O,
					setIsFollowUp: k
				} = Object(m.b)({
					activeSurvey: e,
					selectedNumber: d,
					setIsSurveyDismissed: u,
					setSelectedNumber: p,
					setTextResponse: f,
					textResponse: b
				}), {
					className: F,
					shouldMount: T,
					onTransitionEnd: w
				} = Object(i.a)({
					defaultClass: C.a.surveyContainer,
					addedClass: C.a.isOpen,
					mountCondition: !n && _ > -1
				}), {
					isLeavingModalShowing: j,
					onClose: L,
					onLeaveCancel: M,
					onLeaveConfirm: A
				} = Object(m.a)({
					activeSurvey: e,
					activeStepNum: _,
					isFollowUp: v,
					textResponse: b,
					setTextResponse: f,
					setIsSurveyDismissed: u
				});
				return Object(m.c)({
					isSurveyDismissed: n,
					setIsSurveyDismissed: u,
					setActiveStepNum: g,
					setActiveSurvey: t,
					setUIStep: O,
					setIsFollowUp: k,
					shouldMount: T,
					uiStep: N
				}), -1 !== _ || n ? T ? s.a.createElement(s.a.Fragment, null, j && s.a.createElement(r.a, {
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
					onConfirm: M,
					onCancel: A,
					onClose: M
				}), s.a.createElement("div", {
					className: F,
					onTransitionEnd: w
				}, s.a.createElement(l.a, {
					className: C.a.closeBtn,
					onClick: L
				}), s.a.createElement("div", {
					className: C.a.surveyContent
				}, s.a.createElement("div", {
					className: C.a.stepNumber
				}, a.fbt._("Question {step number} of {total steps}", [a.fbt._param("step number", String(N)), a.fbt._param("total steps", String(Object(c.e)(e)))], {
					hk: "4g6rjR"
				})), v ? s.a.createElement(S, {
					onStepComplete: y,
					onTextChange: h,
					step: e.steps[_],
					text: b
				}) : s.a.createElement(E, {
					step: e.steps[_],
					selectedNumber: d,
					onStepComplete: y,
					onNumberSelected: p
				})))) : null : s.a.createElement(x, {
					onAgree: y,
					onDismiss: L
				})
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
				submitBtn: "_2UjQ34ciczTaPh6tSLPvnx"
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.66d929792c4a6f48736f.js.map