// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.d4735316f2193a1a5a1e.js
// Retrieved at 8/4/2021, 11:30:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-ChangePredictionOutcomeModal"], {
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_298GNh_sLEmzNYJ3t1RvIq",
				description: "_3K-NBGXivq3eml8zw8fN07",
				descriptionWarning: "VX_un2JOF1BclG9Tcy9mv",
				predictionOption: "_2jG01luCzl7DDpxnXGAla1",
				selected: "txyDejSARtibcJi7iuleG",
				icon: "_390v-l0c8w2flS569053jB",
				confirmButton: "_1TeCd0OLfCtSAJW0-DwdGx"
			}
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionChangeModal", (function() {
				return b
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				C = n("./src/reddit/controls/TextButton/index.tsx"),
				p = n("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				E = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				x = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.m.less"),
				_ = n.n(h);
			const O = Object(s.a)(({
					options: e,
					resolvedOptionId: t,
					onClose: n
				}) => {
					const [c, s] = Object(a.useState)(null);
					return i.a.createElement(r.d, {
						className: _.a.modal
					}, i.a.createElement(r.h, null, i.a.createElement(E.a, null, i.a.createElement(r.p, null, o.fbt._("Change the outcome", null, {
						hk: "2KHNhY"
					})), i.a.createElement(C.a, {
						onClick: n
					}, i.a.createElement(r.b, null)))), i.a.createElement(r.k, null, i.a.createElement("p", {
						className: _.a.description
					}, o.fbt._("Once you change the outcome of this prediction, tokens will be redistributed and we'll notify all the players.", null, {
						hk: "2H4TgG"
					}), i.a.createElement("span", {
						className: _.a.descriptionWarning
					}, o.fbt._("You can only change the outcome once.", null, {
						hk: "2Bta7x"
					}))), e.map(e => i.a.createElement("button", {
						key: e.id,
						type: "button",
						className: Object(l.a)(_.a.predictionOption, {
							[_.a.selected]: e.id === (null == c ? void 0 : c.id)
						}),
						disabled: e.id === t,
						onClick: () => s(e)
					}, c && e.id === c.id && i.a.createElement(p.a, {
						className: _.a.icon
					}), !c && e.id === t && i.a.createElement(p.a, {
						className: _.a.icon
					}), i.a.createElement("span", {
						className: _.a.predictionOptionLabel
					}, e.text)))), i.a.createElement(r.f, null, i.a.createElement(r.a, {
						onClick: n,
						"data-redditstyle": !0
					}, o.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(u.h, {
						className: _.a.confirmButton,
						disabled: !c,
						onClick: () => {
							c && n()
						}
					}, o.fbt._("Confirm", null, {
						hk: "EG1jI"
					}))))
				}),
				b = () => {
					var e, t;
					const n = Object(c.d)(),
						o = Object(c.e)(x.Q),
						l = () => n(Object(d.g)(m.a.ECON_PREDICTIONS_CHANGE_OUTCOME));
					return i.a.createElement(O, {
						withOverlay: !0,
						onOverlayClick: l,
						onClose: l,
						options: (null === (e = null == o ? void 0 : o.pollData) || void 0 === e ? void 0 : e.options) || [],
						resolvedOptionId: (null === (t = null == o ? void 0 : o.pollData) || void 0 === t ? void 0 : t.resolvedOptionId) || ""
					})
				};
			t.default = b
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				l = n.n(o);
			t.a = e => l.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, l.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-ChangePredictionOutcomeModal.d4735316f2193a1a5a1e.js.map