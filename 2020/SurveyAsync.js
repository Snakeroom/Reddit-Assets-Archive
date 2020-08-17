// https://www.redditstatic.com/desktop2x/SurveyAsync.d6d1c64ee5539c2d6f9d.js
// Retrieved at 8/17/2020, 2:30:07 PM by Reddit Dataminer v1.0.0
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
				d = n.n(m);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => s.a.createElement(l.d, null, s.a.createElement(l.h, null, s.a.createElement(i.a, null, s.a.createElement(l.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), s.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, s.a.createElement(l.b, null)))), s.a.createElement(l.k, null, s.a.createElement(l.o, {
				className: d.a.ModalText
			}, e.modalText)), s.a.createElement(l.f, null, !e.hideCancelButton && s.a.createElement(l.a, {
				className: d.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), s.a.createElement(l.t, {
				className: d.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
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
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return v
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				s = n.n(o);
			const r = a.a.section("FormPage", s.a),
				l = a.a.h1("HomePageTitle", s.a),
				c = a.a.button("HomePageBreadcrumb", s.a),
				i = a.a.div("HomePageGroup", s.a),
				m = a.a.h1("FormPageTitle", s.a),
				d = a.a.div("FormPageSection", s.a),
				u = a.a.div("FormGroup", s.a),
				p = a.a.h2("FormGroupTitle", s.a),
				f = a.a.div("FormElement", s.a),
				h = a.a.div("FormGroupDescription", s.a),
				C = a.a.div("FormItem", s.a),
				b = a.a.h3("FormElementTitle", s.a),
				x = a.a.div("FormElementDescription", s.a),
				_ = a.a.div("FormElementError", s.a),
				E = a.a.div("FormElementSubGroup", s.a),
				v = a.a.li("FormListItem", s.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				m = e => {
					let {
						defaultClass: t,
						addedClass: n,
						mountCondition: a
					} = e;
					const [s, r] = Object(o.useState)(t), [l, c] = Object(o.useState)(!1);
					Object(o.useEffect)(() => {
						a && c(!0)
					}, [a]), Object(o.useEffect)(() => {
						l && (a ? window.setTimeout(() => {
							r(Object(i.a)(t, n))
						}, 100) : r(t))
					}, [n, t, a, l]);
					const m = Object(o.useCallback)(() => {
						a || c(!1)
					}, [a]);
					return {
						className: s,
						shouldMount: l,
						onTransitionEnd: m
					}
				},
				d = n("./src/reddit/components/Survey/hooks.ts"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				C = n("./src/reddit/components/Survey/index.m.less"),
				b = n.n(C);
			const x = e => {
					let {
						type: t,
						selectedOption: n,
						onNumberSelected: a
					} = e;
					return s.a.createElement("div", {
						className: b.a.optionsWrapper
					}, Array.from({
						length: t === c.a.NPS ? 11 : 7
					}).map((e, o) => s.a.createElement(f.i, {
						className: Object(i.a)(b.a.option, {
							[b.a.isSelected]: n === o
						}),
						key: "survey-option-".concat(t, "-").concat(o),
						onClick: () => a(o)
					}, o + (t === c.a.NPS ? 0 : 1))))
				},
				_ = e => {
					let {
						onAgree: t,
						onDismiss: n
					} = e;
					const [r, c] = Object(o.useState)(!1), [d, u] = Object(o.useState)(!1), {
						className: p,
						shouldMount: f,
						onTransitionEnd: C
					} = m({
						defaultClass: b.a.introToast,
						addedClass: b.a.isOpen,
						mountCondition: !r && !d
					});
					return f ? s.a.createElement("div", {
						className: p,
						onClick: () => c(!0),
						onTransitionEnd: e => {
							(r || d) && (r ? t() : n(), C(e))
						}
					}, s.a.createElement(l.a, {
						className: Object(i.a)(b.a.icon, b.a.close),
						onClick: e => {
							e.stopPropagation(), u(!0)
						}
					}), s.a.createElement("p", {
						className: b.a.text
					}, s.a.createElement("b", null, a.fbt._("Help improve reddit.", null, {
						hk: "1MmTHK"
					})), " ", a.fbt._("Take our one-minute survey.", null, {
						hk: "3mB3oh"
					})), s.a.createElement(h.a, {
						className: Object(i.a)(b.a.icon, b.a.chevron)
					})) : null
				},
				E = e => {
					let {
						onNumberSelected: t,
						onStepComplete: n,
						selectedNumber: o,
						step: r
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: b.a.title
					}, r.question), s.a.createElement(x, {
						type: r.type,
						selectedOption: o,
						onNumberSelected: t
					}), s.a.createElement(g, {
						type: r.type
					}), s.a.createElement(f.f, {
						className: b.a.submitBtn,
						onClick: n,
						disabled: void 0 === o
					}, a.fbt._("Next", null, {
						hk: "35vbtd"
					})))
				},
				v = e => {
					let {
						step: t,
						onStepComplete: n,
						onTextChange: o,
						text: r
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("h3", {
						className: b.a.title
					}, t.follow_up_question), s.a.createElement(p.s, {
						className: b.a.textArea,
						value: r,
						placeholder: a.fbt._("Share your thoughts (Optional)", null, {
							hk: "2uAPqk"
						}),
						maxLength: 240,
						onChange: o
					}), s.a.createElement(u.a, {
						className: b.a.characterCountdown,
						text: r,
						maxChars: 240
					}), s.a.createElement(f.f, {
						className: b.a.submitBtn,
						onClick: n
					}, a.fbt._("Done", null, {
						hk: "2NjHWz"
					})))
				},
				g = e => {
					let {
						type: t
					} = e;
					const [n, o] = (e => {
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
					})(t);
					return s.a.createElement("div", {
						className: b.a.labelRow
					}, s.a.createElement("span", {
						className: b.a.lowLabel
					}, n), s.a.createElement("span", {
						className: b.a.highLabel
					}, o))
				};
			t.default = e => {
				let {
					activeSurvey: t
				} = e;
				const [n, i] = Object(o.useState)(!1), [u, p] = Object(o.useState)(void 0), [f, h] = Object(o.useState)(""), C = Object(o.useCallback)(e => h(e.target.value), []), {
					activeStepNum: x,
					isFollowUp: g,
					onStepComplete: S,
					uiStep: y
				} = Object(d.b)({
					activeSurvey: t,
					selectedNumber: u,
					setIsSurveyDismissed: i,
					setSelectedNumber: p,
					setTextResponse: h,
					textResponse: f
				}), {
					className: N,
					shouldMount: k,
					onTransitionEnd: O
				} = m({
					defaultClass: b.a.surveyContainer,
					addedClass: b.a.isOpen,
					mountCondition: !n && x > -1
				}), {
					isLeavingModalShowing: F,
					onClose: T,
					onLeaveCancel: j,
					onLeaveConfirm: w
				} = Object(d.a)({
					activeSurvey: t,
					activeStepNum: x,
					isFollowUp: g,
					textResponse: f,
					setTextResponse: h,
					setIsSurveyDismissed: i
				});
				return Object(d.c)(n, k, y), -1 === x ? s.a.createElement(_, {
					onAgree: S,
					onDismiss: T
				}) : k ? s.a.createElement(s.a.Fragment, null, F && s.a.createElement(r.a, {
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
					onConfirm: j,
					onCancel: w,
					onClose: j
				}), s.a.createElement("div", {
					className: N,
					onTransitionEnd: O
				}, s.a.createElement(l.a, {
					className: b.a.closeBtn,
					onClick: T
				}), s.a.createElement("div", {
					className: b.a.surveyContent
				}, s.a.createElement("div", {
					className: b.a.stepNumber
				}, a.fbt._("Question {step number} of {total steps}", [a.fbt._param("step number", String(y)), a.fbt._param("total steps", String(Object(c.d)(t)))], {
					hk: "4g6rjR"
				})), g ? s.a.createElement(v, {
					onStepComplete: S,
					onTextChange: C,
					step: t.steps[x],
					text: f
				}) : s.a.createElement(E, {
					step: t.steps[x],
					selectedNumber: u,
					onStepComplete: S,
					onNumberSelected: p
				})))) : null
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
//# sourceMappingURL=SurveyAsync.d6d1c64ee5539c2d6f9d.js.map