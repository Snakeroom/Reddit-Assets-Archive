// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.e90b728c2267b06a8fe6.js
// Retrieved at 7/19/2021, 5:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-EndTimeModal"], {
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
				d = n.n(l),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				r = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(r);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => d.a.createElement(c.d, null, d.a.createElement(c.h, null, d.a.createElement(s.a, null, d.a.createElement(c.p, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), d.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, d.a.createElement(c.b, null)))), d.a.createElement(c.k, null, d.a.createElement(c.o, {
				className: m.a.ModalText
			}, e.modalText)), d.a.createElement(c.f, null, !e.hideCancelButton && d.a.createElement(c.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), d.a.createElement(c.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				l = n.n(o),
				d = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				i = n("./src/reddit/constants/modals.ts");
			const {
				fbt: s
			} = n("./node_modules/fbt/lib/FbtPublic.js"), r = () => {};
			t.default = () => {
				const e = Object(d.d)(),
					t = () => e(Object(a.g)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME));
				return l.a.createElement(c.a, {
					toggleModal: t,
					onConfirm: () => {
						t()
					},
					actionText: s._("Confirm", null, {
						hk: "1DK0y3"
					}),
					headerText: s._("Edit when prediction ends", null, {
						hk: "2INWGd"
					}),
					modalText: "",
					trackClick: r,
					withOverlay: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-EndTimeModal.e90b728c2267b06a8fe6.js.map