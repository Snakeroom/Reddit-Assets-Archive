// https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal.955cd7c3a8cc1b296ed0.js
// Retrieved at 4/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal"], {
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
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(c);
			const u = e => e.preventDefault();
			t.a = Object(d.a)(e => l.a.createElement(r.e, null, l.a.createElement(r.i, null, l.a.createElement(s.a, null, l.a.createElement(r.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), l.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, l.a.createElement(r.b, null)))), l.a.createElement(r.l, null, l.a.createElement(r.p, {
				className: m.a.ModalText
			}, e.modalText)), l.a.createElement(r.g, null, !e.hideCancelButton && l.a.createElement(r.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), l.a.createElement(r.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less": function(e, t, n) {
			e.exports = {
				tournament: "_3ZYK0pm2T2bF8Rxu2aYyZt",
				tip: "_1qlJd_5bgnJSvInXXA_rQy"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				l = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/postCreation/general.ts"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less"),
				x = n.n(u);
			t.default = () => {
				const e = Object(d.d)(),
					t = () => e(Object(i.g)(m.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT));
				return l.a.createElement(c.a, {
					withOverlay: !0,
					onConfirm: () => {
						e(Object(s.g)({
							submissionType: r.Xb.POST
						})), t()
					},
					onCancel: t,
					onClose: t,
					actionText: o.fbt._("Okay, Go Back", null, {
						hk: "4BtQGv"
					}),
					headerText: o.fbt._("No Tournaments Created", null, {
						hk: "40U1Vo"
					}),
					modalText: l.a.createElement(l.a.Fragment, null, l.a.createElement("h3", null, o.fbt._("Hello, approved user! In order to create Predictions, you must first ask the Mods to start a Tournament.", null, {
						hk: "uGQT6"
					})), l.a.createElement("br", null), l.a.createElement("p", null, o.fbt._("{tip} Approved users have the ability to create and resolve Predictions, but only Mods can create and end Tournaments.", [o.fbt._param("tip", l.a.createElement("span", {
						className: x.a.tip
					}, "TIP:"))], {
						hk: "4b17d8"
					}))),
					hideCancelButton: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal.955cd7c3a8cc1b296ed0.js.map