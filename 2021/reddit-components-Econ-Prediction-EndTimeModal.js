// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.66540f7789f87ff15510.js
// Retrieved at 12/9/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
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
				for (var i = -1, r = o(n((t - e) / (s || 1)), 0), c = Array(r); r--;) c[a ? r : ++i] = e, e += s;
				return c
			}
		},
		"./node_modules/lodash/_createRange.js": function(e, t, n) {
			var o = n("./node_modules/lodash/_baseRange.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js");
			e.exports = function(e) {
				return function(t, n, i) {
					return i && "number" != typeof i && s(t, n, i) && (n = i = void 0), t = a(t), void 0 === n ? (n = t, t = 0) : n = a(n), i = void 0 === i ? t < n ? 1 : -1 : a(i), o(t, n, i, e)
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
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return b
			}));
			var o = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/actions/economics/predictions/index.ts"),
				a = n("./src/reddit/reducers/features/predictions/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(o.a)({
				features: {
					predictions: a.a
				}
			});
			const u = ({
				postId: e,
				closedAt: t
			}) => async n => {
				try {
					await n(Object(s.d)(e, {
						closedAt: t
					})), n(Object(r.f)({
						duration: r.a,
						kind: d.b.SuccessCommunity,
						text: l._("Updated", null, {
							hk: "4cncaA"
						})
					}))
				} catch {
					(e => e(Object(r.f)({
						duration: r.a,
						kind: d.b.Error,
						text: l._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function m(e, t) {
				return async n => {
					try {
						await n(Object(s.d)(e, {
							resolvedOptionId: t
						}));
						const o = Object(r.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), d.b.SuccessMod);
						n(Object(r.f)(o))
					} catch {
						const e = Object(r.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), d.b.Error);
						n(Object(r.f)(e))
					}
				}
			}
			const p = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				h = e => Object(i.h)(c.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				b = e => Object(i.h)(c.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
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
				a = n.n(s),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => a.a.createElement(r.e, null, a.a.createElement(r.i, null, a.a.createElement(d.a, null, a.a.createElement(r.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(r.b, null)))), a.a.createElement(r.l, null, a.a.createElement(r.p, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(r.g, null, !e.hideCancelButton && a.a.createElement(r.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(r.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less": function(e, t, n) {
			e.exports = {
				title: "_1SLCdGcAO-LuO01C6c5s7P",
				timeInput: "auRUrIM3a5etnBgIUwDBO",
				timeZone: "_25fb1OkN4YvP0tTPRsNGMn",
				footer: "_2LZcDCS-W14zUTd4V6-S1d"
			}
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/posts.ts"),
				r = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				l = n("./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx"),
				u = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.tsx"),
				m = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				h = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/components/Econ/Prediction/EndTimeModal/Body.m.less"),
				_ = n.n(C);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var g = ({
				timestamp: e,
				setTimestamp: t,
				postId: n,
				votingEndDatetime: o
			}) => {
				const i = Object(a.d)(),
					C = Object(b.a)(),
					{
						date: g,
						time: x,
						timeZoneAbbr: v,
						onChange: E,
						maxDate: O,
						minDate: D,
						minTime: j,
						fullMinDatetime: I,
						formattedMinDatetime: M
					} = Object(l.a)(e, t),
					k = e < I,
					P = () => i(Object(c.g)(p.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return s.a.createElement(d.a, {
					withOverlay: !0,
					onOverlayClick: P,
					toggleModal: P,
					onConfirm: () => {
						C(Object(h.f)(n)), i(Object(r.a)({
							postId: n,
							closedAt: e
						})), P()
					},
					actionText: f._("Update", null, {
						hk: "3HPLX5"
					}),
					headerText: f._("Prediction Ends On", null, {
						hk: "CTEcM"
					}),
					modalText: e ? s.a.createElement(s.a.Fragment, null, s.a.createElement("span", {
						className: _.a.title
					}, f._("End time", null, {
						hk: "3D4Q1o"
					})), s.a.createElement(u.a, {
						"aria-label": f._("Prediction end date", null, {
							hk: "4zYv4T"
						}),
						onChange: e => E({
							date: e
						}),
						min: D,
						max: O,
						value: g,
						required: !0
					}), s.a.createElement(m.a, {
						className: _.a.timeInput,
						"aria-label": f._("Prediction end time", null, {
							hk: "1idFl4"
						}),
						onChange: e => E({
							time: e
						}),
						min: j,
						value: x,
						required: !0
					}), v, M && s.a.createElement("span", {
						className: _.a.footer
					}, f._("New end time has to be later than {Minimum date and time}", [f._param("Minimum date and time", M)], {
						hk: "1GjSWl"
					}))) : "Something went wrong. Please try again.",
					isDisabled: k || e === o
				})
			};
			t.default = () => {
				var e;
				const t = Object(a.e)(i.R),
					n = null === (e = null == t ? void 0 : t.pollData) || void 0 === e ? void 0 : e.votingEndTimestamp,
					r = n ? new Date(n) : null,
					[c, d] = Object(o.useState)(r);
				return t && c && r ? s.a.createElement(g, {
					postId: t.id,
					timestamp: c,
					setTimestamp: e => d(e),
					votingEndDatetime: r
				}) : null
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
				i = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/FocusableContent/index.m.less"),
				c = n.n(r);
			t.a = i.a.wrapped(e => s.a.createElement("div", {
				className: Object(a.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/PollCreator/EndDatePicker/useEndDatePicker.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/utils.ts"),
				a = n("./src/reddit/components/PollCreator/EndDatePicker/utils.ts");

			function i(e, t) {
				var n;
				const {
					date: i,
					time: r
				} = Object(a.a)(e), c = Object(o.b)(), d = c ? Object(o.d)(c) : null, l = new Date, {
					minDate: u,
					minTime: m,
					formattedMinDatetime: p
				} = Object(a.c)(l), h = Object(s.a)(), b = Object(a.d)({
					date: u,
					time: m
				});
				return {
					date: i,
					time: r,
					timeZoneAbbr: null !== (n = null == d ? void 0 : d.abbreviation) && void 0 !== n ? n : "",
					onChange: e => {
						Object.values(e).every(e => e.length) && t(Object(a.d)({
							date: i,
							time: r,
							...e
						}))
					},
					maxDate: h,
					minDate: u,
					minTime: m,
					fullMinDatetime: b,
					formattedMinDatetime: p
				}
			}
		},
		"./src/reddit/components/PollCreator/EndDatePicker/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return d
			}));
			var o = n("./src/lib/timezone/index.ts"),
				s = n("./src/reddit/helpers/scheduledPosts/index.ts");
			const a = () => {
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
				r = ({
					date: e,
					time: t
				}) => new Date(`${e}T${t}`),
				c = e => e.toLocaleString("en-US", {
					month: "numeric",
					day: "numeric",
					year: "numeric",
					hour: "numeric",
					minute: "2-digit",
					hour12: !0
				}),
				d = e => {
					const t = new Date(e);
					t.setHours(t.getHours() + 1);
					const {
						date: n,
						time: o
					} = i(t);
					return {
						minDate: n,
						minTime: o,
						formattedMinDatetime: c(t)
					}
				}
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
				return j
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				r = n("./node_modules/lodash/range.js"),
				c = n.n(r),
				d = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/FallbackDateInput/index.m.less"),
				l = n.n(d),
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
				_ = e => {
					const [t, n, o] = e.split("-").map(Number);
					return {
						year: t,
						month: n - 1,
						day: o
					}
				};
			class f extends i.a.PureComponent {
				constructor() {
					super(...arguments), this.onChange = e => {
						const t = {
								..._(this.props.value),
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
					} = _(this.props.value);
					return i.a.createElement(m, {
						className: this.props.className
					}, i.a.createElement(p, {
						onChange: this.onChangeMonth,
						value: t
					}, c()(12).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, C(e)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeDay,
						value: n
					}, c()(1, 32).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, ("0" + e).slice(-2)))), i.a.createElement(h, null, "/"), i.a.createElement(p, {
						onChange: this.onChangeYear,
						value: e
					}, c()(b, b + 10).map(e => i.a.createElement("option", {
						key: e,
						value: e
					}, e))))
				}
			}
			var g = f,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/DateInput/index.m.less"),
				v = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "date"), e.setAttribute("value", "not-a-date"), "not-a-date" !== e.value
				}),
				D = u.a.input("Input", v.a);

			function j(e) {
				return O() ? i.a.createElement(D, E({
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
				return j
			}));
			var o = n("./node_modules/lodash/once.js"),
				s = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				r = n("./node_modules/lodash/clamp.js"),
				c = n.n(r),
				d = n("./src/reddit/components/FocusableContent/index.tsx"),
				l = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/FallbackTimeInput/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(d.a, "Container", u.a),
				h = m.a.input("Input", u.a),
				b = m.a.span("Delimiter", u.a),
				C = e => ("0" + e).slice(-2),
				_ = (e, t) => {
					const n = +e.slice(-2);
					if (Number.isInteger(n)) return n > t ? 0 : n
				};
			class f extends i.a.PureComponent {
				constructor(e) {
					super(e), this.callOnChange = () => {
						let e = c()(+this.state.hour, 0, 24);
						const t = c()(+this.state.minute, 0, 59);
						24 === e && t > 0 && (e = 0), this.setState({
							hour: e,
							minute: t
						});
						const n = `${C(e)}:${C(t)}`;
						this.props.onChange(n)
					}, this.onChangeHour = e => {
						const t = _(e.target.value, 24);
						void 0 !== t && this.setState({
							hour: t
						}, this.callOnChange)
					}, this.onChangeMinute = e => {
						const t = _(e.target.value, 59);
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
			var g = f,
				x = n("./src/reddit/components/PostCreationForm/SchedulePickerModal/TimeInput/index.m.less"),
				v = n.n(x);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s()(() => {
					const e = document.createElement("input");
					return e.setAttribute("type", "time"), e.setAttribute("value", "not-a-time"), "not-a-time" !== e.value
				}),
				D = m.a.input("TimeInput", v.a);

			function j(e) {
				return O() ? i.a.createElement(D, E({
					type: "time"
				}, e, {
					onChange: t => e.onChange(t.target.value)
				})) : i.a.createElement(g, e)
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
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var o = n("./src/reddit/selectors/telemetry.ts");
			const s = (e, t) => ({
					...Object(o.o)(e),
					post: Object(o.I)(e, t),
					predictions: Object(o.O)(e, t),
					subreddit: Object(o.hb)(e)
				}),
				a = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				i = e => t => ({
					...s(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				r = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				c = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				d = e => t => ({
					...s(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...s(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.66540f7789f87ff15510.js.map