// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.9a0d957ee1a70d3bd1a9.js
// Retrieved at 7/27/2021, 3:10:04 PM by Reddit Dataminer v1.0.0
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
			e.exports = function(e, t, s, r) {
				for (var i = -1, a = o(n((t - e) / (s || 1)), 0), d = Array(a); a--;) d[r ? a : ++i] = e, e += s;
				return d
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				r = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = r(t), void 0 === n ? (n = t, t = 0) : n = r(n), i = void 0 === i ? t < n ? 1 : -1 : r(i), o(t, n, i, e)
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
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return C
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/predictions/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/endpoints/economics/predictions.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/economics/predictions/constants.ts");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: s.a
				}
			});
			const p = Object(r.a)(u.b),
				h = e => e(Object(d.f)({
					duration: d.a,
					kind: l.b.Error,
					text: m._("Error: Failed to change prediction end time, please try again later", null, {
						hk: "1Crf4a"
					})
				})),
				b = ({
					postId: e,
					closedAt: t
				}) => async (n, o, {
					gqlContext: s
				}) => {
					if (e && t && !isNaN(t.getTime())) try {
						await Object(i.d)(s(), {
							postId: e,
							closedAt: t
						}), n(p({
							endsAt: t.getTime(),
							pollId: e
						})), n(Object(d.f)({
							duration: d.a,
							kind: l.b.SuccessCommunity,
							text: m._("Changed when prediction ends", null, {
								hk: "42CDEn"
							})
						}))
					} catch {
						h(n)
					} else h(n)
				}, C = e => Object(a.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				})
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
				r = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/controls/TextButton/index.tsx"),
				c = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(a.d, null, r.a.createElement(a.h, null, r.a.createElement(c.a, null, r.a.createElement(a.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(a.b, null)))), r.a.createElement(a.k, null, r.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), r.a.createElement(a.f, null, !e.hideCancelButton && r.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(a.t, {
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
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				m = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				p = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				h = n("./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less"),
				b = n.n(h);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var f = ({
				timestamp: e,
				onTimestampChange: t
			}) => {
				const {
					date: n,
					time: o,
					timeZoneAbbr: r,
					onChange: i,
					getMinDate: a,
					getMaxDate: d
				} = Object(u.a)(e, t);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
					className: b.a.title
				}, C._("End time", null, {
					hk: "3D4Q1o"
				})), s.a.createElement(m.a, {
					"aria-label": C._("Prediction end date", null, {
						hk: "4zYv4T"
					}),
					onChange: e => i({
						date: e
					}),
					min: a(),
					max: d(),
					value: n,
					required: !0
				}), s.a.createElement(p.a, {
					className: b.a.timeInput,
					"aria-label": C._("Prediction end time", null, {
						hk: "1idFl4"
					}),
					onChange: e => i({
						time: e
					}),
					value: o,
					required: !0
				}), r)
			};
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.default = () => {
				var e;
				const t = Object(r.d)(),
					n = Object(r.e)(l.h),
					u = null === (e = null == n ? void 0 : n.pollData) || void 0 === e ? void 0 : e.votingEndTimestamp,
					m = u ? new Date(u) : null,
					[p, h] = Object(o.useState)(m),
					b = () => t(Object(a.g)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return s.a.createElement(d.a, {
					withOverlay: !0,
					onOverlayClick: b,
					toggleModal: b,
					onConfirm: () => {
						t(Object(i.a)({
							postId: null == n ? void 0 : n.id,
							closedAt: p
						})), b()
					},
					actionText: x._("Confirm", null, {
						hk: "1DK0y3"
					}),
					headerText: x._("Edit when prediction ends", null, {
						hk: "2INWGd"
					}),
					modalText: p ? s.a.createElement(f, {
						timestamp: p,
						onTimestampChange: h
					}) : "Something went wrong. Please try again."
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
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/FocusableContent/index.m.less"),
				d = n.n(a);
			t.a = i.a.wrapped(e => s.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[d.a.isFocused]: e.isFocused,
					[d.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", d.a)
		},
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				r = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function i(e, t) {
				var n;
				const {
					date: i,
					time: a
				} = Object(r.a)(e), d = Object(o.b)(), c = d ? Object(o.d)(d) : null;
				return {
					date: i,
					time: a,
					timeZoneAbbr: null !== (n = null == c ? void 0 : c.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(r.d)({
							date: i,
							time: a,
							...e
						}))
					},
					getMinDate: r.c,
					getMaxDate: s.a
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
					const e = new Date,
						[t] = Object(s.i)(Object(o.g)(e));
					return t
				},
				i = () => {
					const e = new Date;
					return e.setDate(e.getDate() + 3), e
				},
				a = e => {
					const [t, n] = Object(s.i)(Object(o.g)(e));
					return {
						date: t,
						time: n
					}
				},
				d = ({
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
				return O
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/lodash/range.js"),
				d = n.n(a),
				c = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				l = n.n(c),
				u = n("./src/lib/lessComponent.tsx");
			const m = u.a.div("Container", l.a),
				p = u.a.select("Select", l.a),
				h = u.a.span("Delimiter", l.a),
				b = 2018,
				C = e => {
					const t = new Date;
					return new Date(t.getFullYear(), e).toLocaleDateString([], {
						month: "short"
					})
				},
				f = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class x extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								...f(this.props.value),
								...e
							},
							{
								year: n,
								month: o,
								day: s
							} = t,
							r = new Date(Date.UTC(n, o, s)).toISOString().slice(0, 10);
						this.props.onChange(r)
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
					} = f(this.props.value);
					return i.a.createElement(m, {
						className: this.props.className
					}, i.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, d()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, C(e)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, d()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, d()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var g = x,
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				j = n.n(v);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				E = u.a.input("Input", j.a);

			function O(e) {
				return _() ? i.a.createElement(E, P({
					type: "date"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(g, e)
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
				return O
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/lodash/clamp.js"),
				d = n.n(a),
				c = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(c.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				C = e => ("0" + e).slice(-2),
				f = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class x extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = d()(+this.state.hour, 0, 24);
						const t = d()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${C(e)}:${C(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = f(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = f(e.target.value, 59);
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
					return i.a.createElement(p, {
						className: this.props.className,
						isFocused: e
					}, i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeHour,
						onFocus: this.onHourInputFocus,
						onBlur: this.onHourInputBlur,
						value: C(this.state.hour)
					}), i.a.createElement(b, null, ":"), i.a.createElement(h, {
						type: "number",
						onChange: this.onChangeMinute,
						onFocus: this.onMinuteInputFocus,
						onBlur: this.onMinuteInputBlur,
						value: C(this.state.minute)
					}))
				}
			}
			var g = x,
				v = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				j = n.n(v);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				E = m.a.input("TimeInput", j.a);

			function O(e) {
				return _() ? i.a.createElement(E, P({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(g, e)
			}
		},
		"./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const r = () => {
				const e = new Date;
				e.setFullYear(e.getFullYear() + 1);
				const [t] = Object(s.i)(Object(o.g)(e));
				return t
			}
		},
		"./src/reddit/endpoints/economics/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return C
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "d", (function() {
				return k
			}));
			var o = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/redditGQL/operations/AddPredictionDrafts.json"),
				i = n("./src/redditGQL/operations/ChangePrediction.json"),
				a = n("./src/redditGQL/operations/CreatePredictionTournament.json"),
				d = n("./src/redditGQL/operations/EndPredictionTournament.json"),
				c = n("./src/redditGQL/operations/GetPredictionChipPackages.json"),
				l = n("./src/redditGQL/operations/GetPredictionToken.json"),
				u = n("./src/redditGQL/operations/GetTournaments.json"),
				m = n("./src/redditGQL/operations/ResolvePrediction.json"),
				p = n("./src/redditGQL/operations/SubredditTopPredictors.json"),
				h = n("./src/redditGQL/operations/UpdatePredictionTournament.json"),
				b = n("./src/redditGQL/operations/VotePrediction.json");
			const C = (e, {
					postId: t,
					optionId: n,
					coinPackageId: s,
					price: r
				}) => Object(o.a)(e, {
					...b,
					variables: {
						input: {
							postId: t,
							optionId: n,
							coinPackageId: s,
							price: r
						}
					}
				}),
				f = (e, {
					postId: t,
					optionId: n
				}) => Object(o.a)(e, {
					...m,
					variables: {
						input: {
							postId: t,
							optionId: n
						}
					}
				});
			var x;
			! function(e) {
				e.AllTime = "ALL_TIME", e.Monthly = "MONTHLY"
			}(x || (x = {}));
			const g = (e, {
					subredditId: t,
					period: n,
					top: s,
					includeCurrentRank: r,
					tournamentId: i
				}) => Object(o.a)(e, {
					...p,
					variables: {
						subredditId: t,
						period: n,
						top: s,
						includeCurrentRank: r,
						tournamentId: i
					}
				}),
				v = (e, t) => Object(o.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				j = (e, t) => Object(o.a)(e, {
					...u,
					variables: t
				}),
				P = (e, t) => Object(o.a)(e, {
					...r,
					variables: {
						input: t
					}
				}),
				_ = (e, t) => Object(o.a)(e, {
					...h,
					variables: {
						input: t
					}
				}),
				E = (e, t) => Object(o.a)(e, {
					...d,
					variables: {
						input: t
					}
				}),
				O = (e, t) => Object(o.a)(e, {
					...c,
					variables: t
				}),
				I = (e, t) => Object(o.a)(e, {
					...l,
					variables: t
				}),
				k = async (e, t) => {
					const n = await Object(o.a)(e, {
						...i,
						variables: {
							input: t
						}
					});
					if (!Object(s.c)(n) || !n.body.data.changePrediction.ok) throw new Error("Unable to edit prediction end time")
				}
		},
		"./src/redditGQL/operations/AddPredictionDrafts.json": function(e) {
			e.exports = JSON.parse('{"id":"95def9de4479"}')
		},
		"./src/redditGQL/operations/ChangePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"b72b0ddc1705"}')
		},
		"./src/redditGQL/operations/CreatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"15b533bd4655"}')
		},
		"./src/redditGQL/operations/EndPredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"fdd7787470d6"}')
		},
		"./src/redditGQL/operations/GetPredictionChipPackages.json": function(e) {
			e.exports = JSON.parse('{"id":"5ce83e513fa5"}')
		},
		"./src/redditGQL/operations/GetPredictionToken.json": function(e) {
			e.exports = JSON.parse('{"id":"26b911e67a5f"}')
		},
		"./src/redditGQL/operations/GetTournaments.json": function(e) {
			e.exports = JSON.parse('{"id":"fea406026aef"}')
		},
		"./src/redditGQL/operations/ResolvePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"45c2e0b86b90"}')
		},
		"./src/redditGQL/operations/SubredditTopPredictors.json": function(e) {
			e.exports = JSON.parse('{"id":"3407d5f67207"}')
		},
		"./src/redditGQL/operations/UpdatePredictionTournament.json": function(e) {
			e.exports = JSON.parse('{"id":"84bec4363663"}')
		},
		"./src/redditGQL/operations/VotePrediction.json": function(e) {
			e.exports = JSON.parse('{"id":"1712829dfb21"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.9a0d957ee1a70d3bd1a9.js.map