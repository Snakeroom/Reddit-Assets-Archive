// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.e32767d6332f51ed09fe.js
// Retrieved at 12/1/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
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
				d = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
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
			const u = ({
				postId: e,
				closedAt: t
			}) => async n => {
				try {
					await n(Object(o.d)(e, {
						closedAt: t
					})), n(Object(s.f)({
						duration: s.a,
						kind: a.b.SuccessCommunity,
						text: l._("Updated", null, {
							hk: "4cncaA"
						})
					}))
				} catch {
					(e => e(Object(s.f)({
						duration: s.a,
						kind: a.b.Error,
						text: l._("Error: Failed to update prediction end time, please try again later", null, {
							hk: "MkaNA"
						})
					})))(n)
				}
			};

			function m(e, t) {
				return async n => {
					try {
						await n(Object(o.d)(e, {
							resolvedOptionId: t
						}));
						const c = Object(s.e)(l._("Outcome changed", null, {
							hk: "Io0na"
						}), a.b.SuccessMod);
						n(Object(s.f)(c))
					} catch {
						const e = Object(s.e)(l._("Oops! Something went wrong. Please note that the outcome can be changed just once per Prediction", null, {
							hk: "4B5dNf"
						}), a.b.Error);
						n(Object(s.f)(e))
					}
				}
			}
			const p = e => Object(d.h)(r.a.ECON_PREDICTIONS_CHANGE_END_TIME, {
					postId: e
				}),
				O = e => Object(d.h)(r.a.ECON_PREDICTIONS_CANCEL_PREDICTION, {
					postId: e
				}),
				b = e => Object(d.h)(r.a.ECON_PREDICTIONS_CHANGE_OUTCOME, {
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
				return N
			}));
			var c = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				d = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/actions/economics/predictions/modTools.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/TextButton/index.tsx"),
				O = n("./src/reddit/helpers/trackers/predictionsModTools.ts"),
				b = n("./src/reddit/hooks/useTracking.ts"),
				_ = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less"),
				C = n.n(f);
			const j = Object(r.a)(({
					options: e,
					resolvedOptionId: t,
					onChangeOutcome: n,
					onClose: s
				}) => {
					const [r, a] = Object(i.useState)(null);
					return d.a.createElement(u.e, {
						className: C.a.modal
					}, d.a.createElement(u.i, null, d.a.createElement(E.a, null, d.a.createElement(u.q, null, c.fbt._("Change the outcome", null, {
						hk: "2KHNhY"
					})), d.a.createElement(p.a, {
						onClick: s
					}, d.a.createElement(u.b, null)))), d.a.createElement(u.l, null, d.a.createElement("p", {
						className: C.a.description
					}, c.fbt._("Once you change the outcome of this prediction, tokens will be redistributed and we'll notify all the players.", null, {
						hk: "2H4TgG"
					}), d.a.createElement("span", {
						className: C.a.descriptionWarning
					}, c.fbt._("You can only change the outcome once.", null, {
						hk: "2Bta7x"
					}))), e.map(e => d.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(o.a)(C.a.predictionOption, {
							[C.a.selected]: e.id === (null == r ? void 0 : r.id)
						}),
						disabled: e.id === t,
						onClick: () => a(e)
					}, r && e.id === r.id && d.a.createElement(_.a, {
						className: C.a.icon
					}), !r && e.id === t && d.a.createElement(_.a, {
						className: C.a.icon
					}), d.a.createElement("span", {
						className: C.a.predictionOptionLabel
					}, e.text)))), d.a.createElement(u.g, null, d.a.createElement(u.a, {
						onClick: s,
						"data-redditstyle": !0
					}, c.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), d.a.createElement(u.c, {
						disabled: !r,
						onClick: () => {
							r && n(r)
						}
					}, c.fbt._("Confirm", null, {
						hk: "EG1jI"
					}))))
				}),
				N = () => {
					var e, t;
					const n = Object(s.d)(),
						c = Object(b.a)(),
						o = Object(s.e)(h.R),
						i = () => n(Object(l.g)(m.a.ECON_PREDICTIONS_CHANGE_OUTCOME));
					return d.a.createElement(j, {
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
			t.default = N
		},
		"./src/reddit/helpers/trackers/predictionsModTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return l
			}));
			var c = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(c.defaults)(e),
					post: Object(c.post)(e, t),
					predictions: Object(c.predictions)(e, t),
					subreddit: Object(c.subreddit)(e)
				}),
				i = e => t => ({
					...o(t, e),
					source: "predictions",
					action: "click",
					noun: "edit_prediction_end_dt"
				}),
				d = e => t => ({
					...o(t, e),
					source: "edit_prediction_end_dt",
					action: "click",
					noun: "confirm"
				}),
				s = e => t => ({
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.e32767d6332f51ed09fe.js.map