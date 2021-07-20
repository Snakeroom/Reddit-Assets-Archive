// https://www.redditstatic.com/desktop2x/SurveyAsync.de7c470673da8e8ad6a0.js
// Retrieved at 7/20/2021, 12:40:05 PM by Reddit Dataminer v1.0.0
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
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement(r.b, {
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
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(m);
			const d = e => e.preventDefault();
			t.a = Object(r.a)(e => s.a.createElement(l.d, null, s.a.createElement(l.h, null, s.a.createElement(i.a, null, s.a.createElement(l.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(l.b, null)))), s.a.createElement(l.k, null, s.a.createElement(l.o, {
				className: u.a.ModalText
			}, e.modalText)), s.a.createElement(l.f, null, !e.hideCancelButton && s.a.createElement(l.a, {
				className: u.a.buttonWidth,
				onMouseDown: d,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(l.t, {
				className: u.a.buttonWidth,
				onMouseDown: d,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
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
				return f
			})), n.d(t, "g", (function() {
				return h
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
			var o = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(a);
			const r = o.a.section("FormPage", s.a),
				l = o.a.h1("HomePageTitle", s.a),
				c = o.a.button("HomePageBreadcrumb", s.a),
				i = o.a.div("HomePageGroup", s.a),
				m = o.a.h1("FormPageTitle", s.a),
				u = o.a.div("FormPageSection", s.a),
				d = o.a.div("FormGroup", s.a),
				p = o.a.h2("FormGroupTitle", s.a),
				f = o.a.div("FormElement", s.a),
				h = o.a.div("FormGroupDescription", s.a),
				b = o.a.div("FormItem", s.a),
				C = o.a.h3("FormElementTitle", s.a),
				x = o.a.div("FormElementDescription", s.a),
				_ = o.a.div("FormElementError", s.a),
				v = o.a.div("FormElementSubGroup", s.a),
				E = o.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return g
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				m = ({
					defaultClass: e,
					addedClass: t,
					mountCondition: n
				}) => {
					const [o, s] = Object(a.useState)(e), [r, l] = Object(a.useState)(!1);
					Object(a.useEffect)(() => {
						n && l(!0)
					}, [n]), Object(a.useEffect)(() => {
						r && (n ? window.setTimeout(() => {
							s(Object(i.a)(e, t))
						}, 100) : s(e))
					}, [t, e, n, r]);
					const c = Object(a.useCallback)(() => {
						n || l(!1)
					}, [n]);
					return {
						className: o,
						shouldMount: r,
						onTransitionEnd: c
					}
				},
				u = n("./src/reddit/components/Survey/hooks.ts"),
				d = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = n("./src/reddit/components/Survey/index.m.less"),
				C = n.n(b);
			const x = ({
					type: e,
					selectedOption: t,
					onNumberSelected: n
				}) => s.a.createElement("div", {
					className: C.a.optionsWrapper
				}, Array.from({
					length: e === c.a.NPS ? 11 : 7
				}).map((o, a) => s.a.createElement(f.l, {
					className: Object(i.a)(C.a.option, {
						[C.a.isSelected]: t === a
					}),
					key: `survey-option-${e}-${a}`,
					onClick: () => n(a)
				}, a + (e === c.a.NPS ? 0 : 1)))),
				_ = ({
					onAgree: e,
					onDismiss: t
				}) => {
					const n = Object(a.useRef)(0),
						[r, c] = Object(a.useState)(!1),
						[u, d] = Object(a.useState)(!1),
						{
							className: p,
							shouldMount: f,
							onTransitionEnd: b
						} = m({
							defaultClass: C.a.introToast,
							addedClass: C.a.isOpen,
							mountCondition: !r && !u
						}),
						x = e => {
							e && e.stopPropagation(), d(!0)
						};
					return Object(a.useEffect)(() => (n.current = window.setTimeout(x, 1e4), () => window.clearTimeout(n.current)), []), f ? s.a.createElement("div", {
						className: p,
						onClick: () => {
							window.clearTimeout(n.current), c(!0)
						},
						onTransitionEnd: n => {
							(r || u) && (r ? e() : t(), b(n))
						}
					}, s.a.createElement(l.a, {
						className: Object(i.a)(C.a.icon, C.a.close),
						onClick: x
					}), s.a.createElement("p", {
						className: C.a.text
					}, s.a.createElement("b", null, o.fbt._("Help improve reddit.", null, {
						hk: "1MmTHK"
					})), " ", o.fbt._("Take our one-minute survey.", null, {
						hk: "3mB3oh"
					})), s.a.createElement(h.a, {
						className: Object(i.a)(C.a.icon, C.a.chevron)
					})) : null
				},
				v = ({
					onNumberSelected: e,
					onStepComplete: t,
					selectedNumber: n,
					step: a
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
					className: C.a.title
				}, a.question), s.a.createElement(x, {
					type: a.type,
					selectedOption: n,
					onNumberSelected: e
				}), s.a.createElement(S, {
					type: a.type
				}), s.a.createElement(f.i, {
					className: C.a.submitBtn,
					onClick: t,
					disabled: void 0 === n
				}, o.fbt._("Next", null, {
					hk: "2mEXAi"
				}))),
				E = ({
					step: e,
					onStepComplete: t,
					onTextChange: n,
					text: a
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
					className: C.a.title
				}, e.follow_up_question), s.a.createElement(p.s, {
					className: C.a.textArea,
					value: a,
					placeholder: o.fbt._("Share your thoughts (Optional)", null, {
						hk: "2uAPqk"
					}),
					maxLength: 240,
					onChange: n
				}), s.a.createElement(d.a, {
					className: C.a.characterCountdown,
					text: a,
					maxChars: 240
				}), s.a.createElement(f.i, {
					className: C.a.submitBtn,
					onClick: t
				}, o.fbt._("Done", null, {
					hk: "2NjHWz"
				}))),
				S = ({
					type: e
				}) => {
					const [t, n] = (e => {
						switch (e) {
							case c.a.CES:
								return [o.fbt._("Very Difficult", null, {
									hk: "4oKGAC"
								}), o.fbt._("Very Easy", null, {
									hk: "4Fp78W"
								})];
							case c.a.CSAT:
								return [o.fbt._("Very Unsatisfied", null, {
									hk: "JVX4M"
								}), o.fbt._("Very Satisfied", null, {
									hk: "YO7A3"
								})];
							case c.a.NPS:
								return [o.fbt._("Very Unlikely", null, {
									hk: "23FcED"
								}), o.fbt._("Very Likely", null, {
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

			function g({
				activeSurvey: e,
				setActiveSurvey: t
			}) {
				const [n, i] = Object(a.useState)(!1), [d, p] = Object(a.useState)(void 0), [f, h] = Object(a.useState)(""), b = Object(a.useCallback)(e => h(e.target.value), []), {
					activeStepNum: x,
					isFollowUp: S,
					onStepComplete: g,
					uiStep: y,
					setActiveStepNum: N,
					setUIStep: k,
					setIsFollowUp: O
				} = Object(u.b)({
					activeSurvey: e,
					selectedNumber: d,
					setIsSurveyDismissed: i,
					setSelectedNumber: p,
					setTextResponse: h,
					textResponse: f
				}), {
					className: F,
					shouldMount: w,
					onTransitionEnd: T
				} = m({
					defaultClass: C.a.surveyContainer,
					addedClass: C.a.isOpen,
					mountCondition: !n && x > -1
				}), {
					isLeavingModalShowing: j,
					onClose: L,
					onLeaveCancel: M,
					onLeaveConfirm: A
				} = Object(u.a)({
					activeSurvey: e,
					activeStepNum: x,
					isFollowUp: S,
					textResponse: f,
					setTextResponse: h,
					setIsSurveyDismissed: i
				});
				return Object(u.c)({
					isSurveyDismissed: n,
					setIsSurveyDismissed: i,
					setActiveStepNum: N,
					setActiveSurvey: t,
					setUIStep: k,
					setIsFollowUp: O,
					shouldMount: w,
					uiStep: y
				}), -1 !== x || n ? w ? s.a.createElement(s.a.Fragment, null, j && s.a.createElement(r.a, {
					actionText: o.fbt._("Finish Survey", null, {
						hk: "18Lvjs"
					}),
					cancelActionText: o.fbt._("Leave", null, {
						hk: "2kry5M"
					}),
					headerText: o.fbt._("Are you sure you want to leave?", null, {
						hk: "2iBBCg"
					}),
					modalText: o.fbt._("If you don't finish the survey, your feedback won't be submitted.", null, {
						hk: "377HNX"
					}),
					onConfirm: M,
					onCancel: A,
					onClose: M
				}), s.a.createElement("div", {
					className: F,
					onTransitionEnd: T
				}, s.a.createElement(l.a, {
					className: C.a.closeBtn,
					onClick: L
				}), s.a.createElement("div", {
					className: C.a.surveyContent
				}, s.a.createElement("div", {
					className: C.a.stepNumber
				}, o.fbt._("Question {step number} of {total steps}", [o.fbt._param("step number", String(y)), o.fbt._param("total steps", String(Object(c.e)(e)))], {
					hk: "4g6rjR"
				})), S ? s.a.createElement(E, {
					onStepComplete: g,
					onTextChange: b,
					step: e.steps[x],
					text: f
				}) : s.a.createElement(v, {
					step: e.steps[x],
					selectedNumber: d,
					onStepComplete: g,
					onNumberSelected: p
				})))) : null : s.a.createElement(_, {
					onAgree: g,
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
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				l = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(l.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, a.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), a.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.de7c470673da8e8ad6a0.js.map