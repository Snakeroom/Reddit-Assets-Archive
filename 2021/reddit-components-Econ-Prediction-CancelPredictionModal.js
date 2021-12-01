// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.735a56e245b3cd7fafce.js
// Retrieved at 12/1/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-CancelPredictionModal"], {
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
				l = n("./node_modules/react/index.js"),
				a = n.n(l),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(r);
			const m = e => e.preventDefault();
			t.a = Object(d.a)(e => a.a.createElement(c.e, null, a.a.createElement(c.i, null, a.a.createElement(s.a, null, a.a.createElement(c.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), a.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, a.a.createElement(c.b, null)))), a.a.createElement(c.l, null, a.a.createElement(c.p, {
				className: u.a.ModalText
			}, e.modalText)), a.a.createElement(c.g, null, !e.hideCancelButton && a.a.createElement(c.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), a.a.createElement(c.u, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CancelPredictionModal", (function() {
				return m
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/react/index.js"),
				a = n.n(l),
				d = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				r = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/selectors/posts.ts");
			const m = () => {
				const e = Object(d.d)(),
					t = Object(d.e)(u.R);
				if (!t) return null;
				const {
					totalVoteCount: n
				} = t.pollData || {}, l = () => e(Object(i.g)(r.a.ECON_PREDICTIONS_CANCEL_PREDICTION));
				return a.a.createElement(s.a, {
					withOverlay: !0,
					onConfirm: () => {
						l(), e(Object(c.c)(t.postId))
					},
					onCancel: l,
					onClose: l,
					onOverlayClick: l,
					actionText: o.fbt._("Cancel", null, {
						hk: "8njD0"
					}),
					cancelActionText: o.fbt._("Go Back", null, {
						hk: "vSpeS"
					}),
					headerText: o.fbt._("Are you sure?", null, {
						hk: "3Namy5"
					}),
					modalText: C(n || 0)
				})
			};

			function C(e) {
				return e <= 1 ? o.fbt._("Canceling this prediction will notify all players who have already made a prediction.", null, {
					hk: "151M0Q"
				}) : o.fbt._("Canceling this prediction will notify all {votedUsersCount} players who have already made a prediction.", [o.fbt._param("votedUsersCount", e.toString())], {
					hk: "DemUc"
				})
			}
			t.default = m
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.735a56e245b3cd7fafce.js.map