// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.32a9fa9f7a1273e50bea.js
// Retrieved at 7/21/2021, 7:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-EndTimeModal"], {
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseRange.js": function(e, t) {
			var n = Math.ceil,
				o = Math.max;
			e.exports = function(e, t, s, a) {
				for (var r = -1, i = o(n((t - e) / (s || 1)), 0), l = Array(i); i--;) l[a ? i : ++r] = e, e += s;
				return l
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, r) {
					return r && "number" != typeof r && s(t, n, r) && (n = r = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), r = void 0 === r ? t < n ? 1 : -1 : a(r), o(t, n, r, e)
				}
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), o(s(e), t, n)
			}
		},
		"./node_modules/lodash/range.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_createRange.js")();
			e.exports = o
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
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(d);
			const m = e => e.preventDefault();
			t.a = Object(r.a)(e => a.a.createElement(i.d, null, a.a.createElement(i.h, null, a.a.createElement(c.a, null, a.a.createElement(i.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(l.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(i.b, null)))), a.a.createElement(i.k, null, a.a.createElement(i.o, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(i.f, null, !e.hideCancelButton && a.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(i.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less": function(e, t, n) {
			e.exports = {
				title: "_1SLCdGcAO-LuO01C6c5s7P",
				timeInput: "auRUrIM3a5etnBgIUwDBO",
				timeZone: "_25fb1OkN4YvP0tTPRsNGMn"
			}
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/selectors/posts.ts"),
				d = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				p = n("./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less"),
				h = n.n(p);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var b = ({
				votingEndTimestamp: e
			}) => {
				const [t, n] = Object(o.useState)(e), {
					date: a,
					time: r,
					timeZoneAbbr: i,
					onChange: l,
					getMinDate: c,
					getMaxDate: p
				} = Object(d.a)(t, n);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: h.a.title
				}, C._("End time", null, {
					hk: "3D4Q1o"
				})), s.a.createElement(u.a, {
					"aria-label": C._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => l({
						date: e
					}),
					min: c(),
					max: p(),
					value: a,
					required: !0
				}), s.a.createElement(m.a, {
					className: h.a.timeInput,
					"aria-label": C._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => l({
						time: e
					}),
					value: r,
					required: !0
				}), i)
			};
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = () => {};
			t.default = () => {
				var e;
				const t = Object(a.d)(),
					n = Object(a.e)(c.h),
					o = () => t(Object(r.g)(l.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return s.a.createElement(i.a, {
					toggleModal: o,
					onConfirm: () => {
						o()
					},
					actionText: g._("Confirm", null, {
						hk: "1DK0y3"
					}),
					headerText: g._("Edit when prediction ends", null, {
						hk: "2INWGd"
					}),
					modalText: (null === (e = null == n ? void 0 : n.pollData) || void 0 === e ? void 0 : e.votingEndTimestamp) ? s.a.createElement(b, {
						votingEndTimestamp: n.pollData.votingEndTimestamp
					}) : "Something went wrong. Please try again.",
					trackClick: x,
					withOverlay: !0,
					onOverlayClick: o
				})
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, n) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/FocusableContent/index.m.less"),
				l = n.n(i);
			t.a = r.a.wrapped(e => s.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[l.a.isFocused]: e.isFocused,
					[l.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", l.a)
		},
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				a = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function r(e, t) {
				var n;
				const {
					date: r,
					time: i
				} = Object(a.a)(e), l = Object(o.b)(), c = l ? Object(o.d)(l) : null;
				return {
					date: r,
					time: i,
					timeZoneAbbr: null !== (n = null == c ? void 0 : c.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(a.d)({
							date: r,
							time: i,
							...e
						}))
					},
					getMinDate: a.c,
					getMaxDate: s.a
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return l
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const a = () => {
					const e = new Date,
						[t] = Object(s.i)(Object(o.g)(e));
					return t
				},
				r = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				i = e => {
					const [t, n] = Object(s.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				l = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`)
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3A53iTDZ6H1L--Ky3qNCTO",
				container: "_3A53iTDZ6H1L--Ky3qNCTO",
				Select: "_2ryUqzbCnNhx8nbFXg9-c0",
				select: "_2ryUqzbCnNhx8nbFXg9-c0",
				Delimiter: "_1X2oFpzvpth9SVe2-xCR9D",
				delimiter: "_1X2oFpzvpth9SVe2-xCR9D"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less": function(e, t, n) {
			e.exports = {
				Input: "_1Css-vhkiry0RZJBBPrnRI",
				input: "_1Css-vhkiry0RZJBBPrnRI"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/lodash/range.js"),
				l = n.n(i),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				d = n.n(c),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.div("Container", d.a),
				p = u.a.select("Select", d.a),
				h = u.a.span("Delimiter", d.a),
				C = 2018,
				b = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				g = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...g(this.props.value),
								...e
							},
							{
								year: n,
								month: o,
								day: s
							} = t,
							a = new Date(Date.UTC(n, o, s)).toISOString().slice(0, 10);
						this.props.onChange(a)
					}, this.onChangeYear = e => {
						const t = +e.target.value;
						this.onChange({
							year: t
						})
					}, this.onChangeMonth = e => {
						const t = +e.target.value;
						this.onChange({
							month: t
						})
					}, this.onChangeDay = e => {
						const t = +e.target.value;
						this.onChange({
							day: t
						})
					}
				}
				render() {
					const {
						year: e,
						month: t,
						day: n
					} = g(this.props.value);
					return r.a.createElement(m, {
						className: this.props.className
					}, r.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, l()(12).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, b(e)))), r.a.createElement(h, null, "/"), r.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, l()(1, 32).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), r.a.createElement(h, null, "/"), r.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, l()(C, C + 10).map(e => r.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var v = x,
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				f = n.n(_);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const F = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				P = u.a.input("Input", f.a);

			function M(e) {
				return F() ? r.a.createElement(P, E({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : r.a.createElement(v, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "Q-u1MdpyF-DbsLmmseQmg",
				container: "Q-u1MdpyF-DbsLmmseQmg",
				Input: "_2UYlo-ZbVNGY329O9jwCzC",
				input: "_2UYlo-ZbVNGY329O9jwCzC",
				Delimiter: "_2a_r5Jp8FH3k8flNGKLy5f",
				delimiter: "_2a_r5Jp8FH3k8flNGKLy5f"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less": function(e, t, n) {
			e.exports = {
				TimeInput: "gRgwdQKTQf9yT3db3ACAy",
				timeInput: "gRgwdQKTQf9yT3db3ACAy"
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				i = n("./node_modules/lodash/clamp.js"),
				l = n.n(i),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				C = m.a.span("Delimiter", u.a),
				b = e => ("0" + e).slice(-2),
				g = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class x extends r.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = l()(+this.state.hour, 0, 24);
						const t = l()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${b(e)}:${b(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = g(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = g(e.target.value, 59);
						void 0 !== t && this.setState({
							minute: t
						}, this.callOnChange)
					}, this.onHourInputBlur = () => this.setState({
						isHourInputFocused: !1
					}), this.onHourInputFocus = () => this.setState({
						isHourInputFocused: !0
					}), this.onMinuteInputBlur = () => this.setState({
						isMinuteInputFocused: !1
					}), this.onMinuteInputFocus = () => this.setState({
						isMinuteInputFocused: !0
					});
					const [t, n] = e.value.split(":").map(Number);
					this.state = {
						hour: t,
						minute: n,
						isHourInputFocused: !1,
						isMinuteInputFocused: !1
					}
				}
				componentWillReceiveProps(e) {
					const [t, n] = e.value.split(":").map(Number);
					this.setState({
						hour: t,
						minute: n
					})
				}
				render() {
					const e = this.state.isHourInputFocused || this.state.isMinuteInputFocused;
					return r.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, r.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: b(this.state.hour)
					}), r.a.createElement(C, null, ":"), r.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: b(this.state.minute)
					}))
				}
			}
			var v = x,
				_ = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				f = n.n(_);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const F = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				P = m.a.input("TimeInput", f.a);

			function M(e) {
				return F() ? r.a.createElement(P, E({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : r.a.createElement(v, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const a = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(s.i)(Object(o.g)(e));
				return t
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.32a9fa9f7a1273e50bea.js.map