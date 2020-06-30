// https://www.redditstatic.com/desktop2x/SurveyAsync.705b37076ac2e4435ff0.js
// Retrieved at 6/30/2020, 3:00:06 PM by Reddit Dataminer v1.0.0
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
				u = n.n(m);
			const d = e => e.preventDefault();
			t.a = Object(s.a)(e => r.a.createElement(l.d, null, r.a.createElement(l.h, null, r.a.createElement(i.a, null, r.a.createElement(l.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(l.b, null)))), r.a.createElement(l.k, null, r.a.createElement(l.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(l.f, null, r.a.createElement(l.a, {
				className: u.a.buttonWidth,
				onMouseDown: d,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(l.t, {
				className: u.a.buttonWidth,
				onMouseDown: d,
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
				return _
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "j", (function() {
				return y
			}));
			var a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = n.n(o);
			const s = a.a.section("FormPage", r.a),
				l = a.a.h1("HomePageTitle", r.a),
				c = a.a.button("HomePageBreadcrumb", r.a),
				i = a.a.div("HomePageGroup", r.a),
				m = a.a.h1("FormPageTitle", r.a),
				u = a.a.div("FormPageSection", r.a),
				d = a.a.div("FormGroup", r.a),
				p = a.a.h2("FormGroupTitle", r.a),
				f = a.a.div("FormElement", r.a),
				h = a.a.div("FormGroupDescription", r.a),
				b = a.a.div("FormItem", r.a),
				C = a.a.h3("FormElementTitle", r.a),
				_ = a.a.div("FormElementDescription", r.a),
				x = a.a.div("FormElementError", r.a),
				E = a.a.div("FormElementSubGroup", r.a),
				y = a.a.li("FormListItem", r.a)
		},
		"./src/reddit/components/Survey/Async.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				s = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/helpers/survey/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/Survey/hooks.ts"),
				u = n("./src/config.ts"),
				d = n("./node_modules/react-redux/es/index.js"),
				p = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				f = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/Survey/index.m.less"),
				_ = n.n(C);
			const x = e => {
					let {
						type: t,
						selectedOption: n,
						onNumberSelected: a
					} = e;
					return r.a.createElement("div", {
						className: _.a.optionsWrapper
					}, Array.from({
						length: t === c.a.NPS ? 11 : 7
					}).map((e, o) => r.a.createElement(h.i, {
						className: Object(i.a)(_.a.option, {
							[_.a.isSelected]: n === o
						}),
						key: "survey-option-".concat(t, "-").concat(o),
						onClick: () => a(o)
					}, o + (t === c.a.NPS ? 0 : 1))))
				},
				E = e => {
					let {
						onClick: t
					} = e;
					const n = Object(d.d)(b.i, (e, t) => e && t && e.id === t.id || !1);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: _.a.snooIcon,
						style: {
							backgroundImage: 'url("'.concat(u.a.assetPath, '/img/snoovatar-notepad.png")')
						}
					}), r.a.createElement("h3", {
						className: _.a.title
					}, a.fbt._("Help improve Reddit!", null, {
						hk: "4e4dcC"
					})), r.a.createElement("p", {
						className: _.a.introText
					}, n ? a.fbt._("Hi {username}! Now that you’ve been a redditor for a while, take this one minute survey and let us know what you think.", [a.fbt._param("username", n.displayText || "there")], {
						hk: "1XuOwr"
					}) : a.fbt._("Hi! Now that you’ve been a redditor for a while, take this one minute survey and let us know what you think.", null, {
						hk: "1PnKyn"
					})), r.a.createElement(h.f, {
						className: _.a.submitBtn,
						onClick: t
					}, a.fbt._("Begin Survey", null, {
						hk: "3P5Rk5"
					})))
				},
				y = e => {
					let {
						onNumberSelected: t,
						onStepComplete: n,
						selectedNumber: o,
						step: s
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: _.a.title
					}, s.question), r.a.createElement(x, {
						type: s.type,
						selectedOption: o,
						onNumberSelected: t
					}), r.a.createElement(S, {
						type: s.type
					}), r.a.createElement(h.f, {
						className: _.a.submitBtn,
						onClick: n,
						disabled: void 0 === o
					}, a.fbt._("Next", null, {
						hk: "35vbtd"
					})))
				},
				g = e => {
					let {
						step: t,
						onStepComplete: n,
						onTextChange: o,
						text: s
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", {
						className: _.a.title
					}, t.follow_up_question), r.a.createElement(f.s, {
						className: _.a.textArea,
						value: s,
						placeholder: a.fbt._("Share your thoughts", null, {
							hk: "LkEws"
						}),
						maxLength: 240,
						onChange: o
					}), r.a.createElement(p.a, {
						className: _.a.characterCountdown,
						text: s,
						maxChars: 240
					}), r.a.createElement(h.f, {
						className: _.a.submitBtn,
						onClick: n
					}, a.fbt._("Done", null, {
						hk: "2NjHWz"
					})))
				},
				S = e => {
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
						className: _.a.labelRow
					}, r.a.createElement("span", {
						className: _.a.lowLabel
					}, n), r.a.createElement("span", {
						className: _.a.highLabel
					}, o))
				};
			t.default = e => {
				let {
					activeSurvey: t
				} = e;
				const [n, u] = Object(o.useState)(!1), [d, p] = Object(o.useState)(void 0), [f, h] = Object(o.useState)(""), {
					className: b,
					shouldMount: C,
					onTransitionEnd: x
				} = (e => {
					let {
						defaultClass: t,
						addedClass: n,
						unMountCondition: a
					} = e;
					const [r, s] = Object(o.useState)(t), [l, c] = Object(o.useState)(!0);
					return Object(o.useEffect)(() => {
						s(Object(i.a)(t, a ? "" : n))
					}, [n, t, a]), {
						className: r,
						shouldMount: l,
						onTransitionEnd: Object(o.useCallback)(() => {
							a && c(!1)
						}, [a])
					}
				})({
					defaultClass: _.a.surveyContainer,
					addedClass: _.a.isOpen,
					unMountCondition: n
				}), S = Object(o.useCallback)(e => h(e.target.value), []), {
					activeStepNum: v,
					isFollowUp: N,
					onStepComplete: k,
					uiStep: F
				} = Object(m.b)({
					activeSurvey: t,
					selectedNumber: d,
					setIsSurveyDismissed: u,
					setSelectedNumber: p,
					setTextResponse: h,
					textResponse: f
				}), {
					isLeavingModalShowing: O,
					onClose: w,
					onLeaveCancel: T,
					onLeaveConfirm: L
				} = Object(m.a)({
					activeSurvey: t,
					activeStepNum: v,
					isFollowUp: N,
					textResponse: f,
					setTextResponse: h,
					setIsSurveyDismissed: u
				});
				return Object(m.c)(C, F), C ? r.a.createElement(r.a.Fragment, null, O && r.a.createElement(s.a, {
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
					onConfirm: T,
					onCancel: L,
					onClose: T
				}), r.a.createElement("div", {
					className: b,
					onTransitionEnd: x
				}, r.a.createElement(l.a, {
					className: _.a.closeBtn,
					onClick: w
				}), r.a.createElement("div", {
					className: _.a.surveyContent
				}, -1 === v ? r.a.createElement(E, {
					onClick: k
				}) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: _.a.stepNumber
				}, a.fbt._("Question {step number} of {total steps}", [a.fbt._param("step number", String(F)), a.fbt._param("total steps", String(Object(c.d)(t)))], {
					hk: "4g6rjR"
				})), N ? r.a.createElement(g, {
					onStepComplete: k,
					onTextChange: S,
					step: t.steps[v],
					text: f
				}) : r.a.createElement(y, {
					step: t.steps[v],
					selectedNumber: d,
					onStepComplete: k,
					onNumberSelected: p
				}))))) : null
			}
		},
		"./src/reddit/components/Survey/index.m.less": function(e, t, n) {
			e.exports = {
				surveyContainer: "_36FlfeNQ6Ck4mjzC3YCpX3",
				isOpen: "_3NOj43fM-WKc3VJGbl86rD",
				surveyContent: "_2_L61Eytz64Fk93RR_3t84",
				closeBtn: "_2aZbF2iolXVBrLSUnoHxLi",
				title: "Brt84NVp10IF2NqBEpGqd",
				snooIcon: "_1Dfg3wcQKtrRqQOE1VVYS1",
				introText: "_1n6FySzIhbGP9r_u9_WrOI",
				stepNumber: "LNd9QBeSFHOra_LRa6I9a",
				optionsWrapper: "_175ua7ptwcDLBOAM7SRE60",
				option: "_1lY7AdZ9uz5QSableC_5gZ",
				isSelected: "_2EmX2Qy2X30daqiILp-Pid",
				labelRow: "_12elwub6eZguOVwH7x1OV6",
				textArea: "_3JRtPy8d3ty_d3eEj4oo5X",
				characterCountdown: "P9I1yL4VXkyFXfaunV9WB",
				submitBtn: "_2UjQ34ciczTaPh6tSLPvnx"
			}
		}
	}
]);
//# sourceMappingURL=SurveyAsync.705b37076ac2e4435ff0.js.map