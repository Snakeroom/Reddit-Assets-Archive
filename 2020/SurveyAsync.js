// https://www.redditstatic.com/desktop2x/SurveyAsync.a895dc4fd4ba26a3c565.js
// Retrieved at 10/21/2020, 2:40:07 PM by Reddit Dataminer v1.0.0
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
				r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				l = n("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = n.n(l);
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(s.b, {
				className: Object(r.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
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
				r = n.n(o),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				m = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				d = n.n(m);
			const u = e => e.preventDefault();
			t.a = Object(s.a)(e => r.a.createElement(l.d, null, r.a.createElement(l.h, null, r.a.createElement(i.a, null, r.a.createElement(l.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(l.b, null)))), r.a.createElement(l.k, null, r.a.createElement(l.o, {
				className: d.a.ModalText
			}, e.modalText)), r.a.createElement(l.f, null, !e.hideCancelButton && r.a.createElement(l.a, {
				className: d.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(l.t, {
				className: d.a.buttonWidth,
				onMouseDown: u,
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
				return s
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
				return b
			})), n.d(t, "e", (function() {
				return C
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
				r = n.n(o);
			const s = a.a.section("FormPage", r.a),
				l = a.a.h1("HomePageTitle", r.a),
				c = a.a.button("HomePageBreadcrumb", r.a),
				i = a.a.div("HomePageGroup", r.a),
				m = a.a.h1("FormPageTitle", r.a),
				d = a.a.div("FormPageSection", r.a),
				u = a.a.div("FormGroup", r.a),
				p = a.a.h2("FormGroupTitle", r.a),
				f = a.a.div("FormElement", r.a),
				h = a.a.div("FormGroupDescription", r.a),
				b = a.a.div("FormItem", r.a),
				C = a.a.h3("FormElementTitle", r.a),
				x = a.a.div("FormElementDescription", r.a),
				_ = a.a.div("FormElementError", r.a),
				E = a.a.div("FormElementSubGroup", r.a),
				v = a.a.li("FormListItem", r.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return S
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				m = e => {
					let {
						defaultClass: t,
						addedClass: n,
						mountCondition: a
					} = e;
					const [r, s] = Object(o.useState)(t), [l, c] = Object(o.useState)(!1);
					Object(o.useEffect)(() => {
						a && c(!0)
					}, [a]), Object(o.useEffect)(() => {
						l && (a ? window.setTimeout(() => {
							s(Object(i.a)(t, n))
						}, 100) : s(t))
					}, [n, t, a, l]);
					const m = Object(o.useCallback)(() => {
						a || c(!1)
					}, [a]);
					return {
						className: r,
						shouldMount: l,
						onTransitionEnd: m
					}
				},
				d = n("./src/reddit/components/Survey/hooks.ts"),
				u = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				b = n("./src/reddit/components/Survey/index.m.less"),
				C = n.n(b);
			const x = e => {
					let {
						type: t,
						selectedOption: n,
						onNumberSelected: a
					} = e;
					return r.a.createElement("div", {
						className: C.a.optionsWrapper
					}, Array.from({
						length: t === c.a.NPS ? 11 : 7
					}).map((e, o) => r.a.createElement(f.l, {
						className: Object(i.a)(C.a.option, {
							[C.a.isSelected]: n === o
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
					const s = Object(o.useRef)(0),
						[c, d] = Object(o.useState)(!1),
						[u, p] = Object(o.useState)(!1),
						{
							className: f,
							shouldMount: b,
							onTransitionEnd: x
						} = m({
							defaultClass: C.a.introToast,
							addedClass: C.a.isOpen,
							mountCondition: !c && !u
						}),
						_ = e => {
							e && e.stopPropagation(), p(!0)
						};
					return Object(o.useEffect)(() => (s.current = window.setTimeout(_, 1e4), () => window.clearTimeout(s.current)), []), b ? r.a.createElement("div", {
						className: f,
						onClick: () => {
							window.clearTimeout(s.current), d(!0)
						},
						onTransitionEnd: e => {
							(c || u) && (c ? t() : n(), x(e))
						}
					}, r.a.createElement(l.a, {
						className: Object(i.a)(C.a.icon, C.a.close),
						onClick: _
					}), r.a.createElement("p", {
						className: C.a.text
					}, r.a.createElement("b", null, a.fbt._("Help improve reddit.", null, {
						hk: "1MmTHK"
					})), " ", a.fbt._("Take our one-minute survey.", null, {
						hk: "3mB3oh"
					})), r.a.createElement(h.a, {
						className: Object(i.a)(C.a.icon, C.a.chevron)
					})) : null
				},
				E = e => {
					let {
						onNumberSelected: t,
						onStepComplete: n,
						selectedNumber: o,
						step: s
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: C.a.title
					}, s.question), r.a.createElement(x, {
						type: s.type,
						selectedOption: o,
						onNumberSelected: t
					}), r.a.createElement(g, {
						type: s.type
					}), r.a.createElement(f.i, {
						className: C.a.submitBtn,
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
						text: s
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: C.a.title
					}, t.follow_up_question), r.a.createElement(p.s, {
						className: C.a.textArea,
						value: s,
						placeholder: a.fbt._("Share your thoughts (Optional)", null, {
							hk: "2uAPqk"
						}),
						maxLength: 240,
						onChange: o
					}), r.a.createElement(u.a, {
						className: C.a.characterCountdown,
						text: s,
						maxChars: 240
					}), r.a.createElement(f.i, {
						className: C.a.submitBtn,
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
					return r.a.createElement("div", {
						className: C.a.labelRow
					}, r.a.createElement("span", {
						className: C.a.lowLabel
					}, n), r.a.createElement("span", {
						className: C.a.highLabel
					}, o))
				};

			function S(e) {
				let {
					activeSurvey: t
				} = e;
				const [n, i] = Object(o.useState)(!1), [u, p] = Object(o.useState)(void 0), [f, h] = Object(o.useState)(""), b = Object(o.useCallback)(e => h(e.target.value), []), {
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
					defaultClass: C.a.surveyContainer,
					addedClass: C.a.isOpen,
					mountCondition: !n && x > -1
				}), {
					isLeavingModalShowing: F,
					onClose: T,
					onLeaveCancel: w,
					onLeaveConfirm: j
				} = Object(d.a)({
					activeSurvey: t,
					activeStepNum: x,
					isFollowUp: g,
					textResponse: f,
					setTextResponse: h,
					setIsSurveyDismissed: i
				});
				return Object(d.c)(n, k, y), -1 === x ? r.a.createElement(_, {
					onAgree: S,
					onDismiss: T
				}) : k ? r.a.createElement(r.a.Fragment, null, F && r.a.createElement(s.a, {
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
					onConfirm: w,
					onCancel: j,
					onClose: w
				}), r.a.createElement("div", {
					className: N,
					onTransitionEnd: O
				}, r.a.createElement(l.a, {
					className: C.a.closeBtn,
					onClick: T
				}), r.a.createElement("div", {
					className: C.a.surveyContent
				}, r.a.createElement("div", {
					className: C.a.stepNumber
				}, a.fbt._("Question {step number} of {total steps}", [a.fbt._param("step number", String(y)), a.fbt._param("total steps", String(Object(c.d)(t)))], {
					hk: "4g6rjR"
				})), g ? r.a.createElement(v, {
					onStepComplete: S,
					onTextChange: b,
					step: t.steps[x],
					text: f
				}) : r.a.createElement(E, {
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
				r = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				l = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(l.a.chevron, e.className),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SurveyAsync.a895dc4fd4ba26a3c565.js.map