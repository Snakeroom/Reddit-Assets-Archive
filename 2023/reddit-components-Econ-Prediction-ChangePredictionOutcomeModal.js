// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.8bd7b420edef89b565c0.js
// Retrieved at 7/31/2023, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-ChangePredictionOutcomeModal"], {
		"./src/reddit/actions/economics/predictions/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return b
			}));
			var c = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/reducers/features/predictions/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				r = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/models/Toast/index.ts");
			const {
				fbt: l
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			Object(c.a)({
				features: {
					predictions: i.a
				}
			});
			const u = e => {
				let {
					postId: t,
					closedAt: n
				} = e;
				return async e => {
					try {
						await e(Object(o.d)(t, {
							closedAt: n
						})), e(Object(d.f)({
							duration: d.a,
							kind: a.b.SuccessCommunity,
							text: l._("Updated", null, {
								hk: "4cncaA"
							})
						}))
					} catch {
						(e => e(Object(d.f)({
							duration: d.a,
							kind: a.b.Error,
							text: l._("Error: Failed to update prediction end time, please try again later", null, {
								hk: "MkaNA"
							})
						})))(e)
					}
				}
			};

			function m(e, t) {
				return async n => {
					try {
						await n(Object(o.d)(e, {
							resolvedOptionId: t
						}));
						const c = Object(d.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), a.b.SuccessMod);
						n(Object(d.f)(c))
					} catch {
						const e = Object(d.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), a.b.Error);
						n(Object(d.f)(e))
					}
				}
			}
			const p = e => Object(s.h)(r.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				O = e => Object(s.h)(r.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				b = e => Object(s.h)(r.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
					postId: e
				})
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_298GNh_sLEmzNYJ3t1RvIq",
				description: "_3K-NBGXivq3eml8zw8fN07",
				descriptionWarning: "VX_un2JOF1BclG9Tcy9mv",
				predictionOption: "_2jG01luCzl7DDpxnXGAla1",
				selected: "txyDejSARtibcJi7iuleG",
				icon: "_390v-l0c8w2flS569053jB"
			}
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionChangeModal", (function() {
				return x
			}));
			var c = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				s = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				O = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				C = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less"),
				f = n.n(E);
			const j = Object(r.a)(e => {
					let {
						options: t,
						resolvedOptionId: n,
						onChangeOutcome: d,
						onClose: r
					} = e;
					const [a, l] = Object(i.useState)(null);
					return s.a.createElement(u.e, {
						className: f.a.modal
					}, s.a.createElement(u.i, null, s.a.createElement(C.a, null, s.a.createElement(u.q, null, c.fbt._("Change the outcome", null, {
						hk: "2KHNhY"
					})), s.a.createElement(p.a, {
						onClick: r
					}, s.a.createElement(u.b, null)))), s.a.createElement(u.l, null, s.a.createElement("p", {
						className: f.a.description
					}, c.fbt._("Once you change the outcome of this prediction, tokens will be redistributed and we'll notify all the players.", null, {
						hk: "2H4TgG"
					}), s.a.createElement("span", {
						className: f.a.descriptionWarning
					}, c.fbt._("You can only change the outcome once.", null, {
						hk: "2Bta7x"
					}))), t.map(e => s.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(o.a)(f.a.predictionOption, {
							[f.a.selected]: e.id === (null == a ? void 0 : a.id)
						}),
						disabled: e.id === n,
						onClick: () => l(e)
					}, a && e.id === a.id && s.a.createElement(_.a, {
						className: f.a.icon
					}), !a && e.id === n && s.a.createElement(_.a, {
						className: f.a.icon
					}), s.a.createElement("span", {
						className: f.a.predictionOptionLabel
					}, e.text)))), s.a.createElement(u.g, null, s.a.createElement(u.a, {
						onClick: r,
						"data-redditstyle": !0
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(u.c, {
						disabled: !a,
						onClick: () => {
							a && d(a)
						}
					}, c.fbt._("Confirm", null, {
						hk: "EG1jI"
					}))))
				}),
				x = () => {
					var e, t;
					const n = Object(d.d)(),
						c = Object(b.a)(),
						o = Object(d.e)(h.R),
						i = () => n(Object(l.g)(m.a.ECON_PREDICTIONS_CHANGE_OUTCOME));
					return s.a.createElement(j, {
						withOverlay: !0,
						onOverlayClick: i,
						onClose: i,
						onChangeOutcome: e => {
							o && (n(Object(a.b)(o.id, e.id)), c(Object(O.e)(o.id)), i())
						},
						options: (null === (e = null == o ? void 0 : o.pollData) || void 0 === e ? void 0 : e.options) || [],
						resolvedOptionId: (null === (t = null == o ? void 0 : o.pollData) || void 0 === t ? void 0 : t.resolvedOptionId) || ""
					})
				};
			t.default = x
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			}));
			var c = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(c.q)(e),
					post: Object(c.M)(e, t),
					predictions: Object(c.S)(e, t),
					subreddit: Object(c.nb)(e)
				}),
				i = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				s = e => t => ({
					...o(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				d = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "cancel_prediction"
				}),
				r = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "remove_post"
				}),
				a = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "prediction_change_outcome"
				}),
				l = e => t => ({
					...o(t, e),
					source: "prediction_change_outcome",
					action: "click",
					noun: "confirm"
				})
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var c = n("./node_modules/react/index.js"),
				o = n.n(c);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.8bd7b420edef89b565c0.js.map