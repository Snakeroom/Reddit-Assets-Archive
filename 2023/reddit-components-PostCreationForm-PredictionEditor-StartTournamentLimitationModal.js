// https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal.eca7ee58f8363f0eebf3.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal"], {
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less": function(t, e, n) {
			t.exports = {
				tournament: "_3ZYK0pm2T2bF8Rxu2aYyZt",
				tip: "_1qlJd_5bgnJSvInXXA_rQy"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/StartTournamentLimitationModal/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/postCreation/general.ts"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less"),
				_ = n.n(u);
			e.default = () => {
				const t = Object(i.d)(),
					e = () => t(Object(d.g)(m.a.ECON_PREDICTIONS_START_TOURNAMENT_LIMIT));
				return a.a.createElement(l.a, {
					withOverlay: !0,
					onConfirm: () => {
						t(Object(c.g)({
							submissionType: s.ac.POST
						})), e()
					},
					onCancel: e,
					onClose: e,
					actionText: o.fbt._("Okay, Go Back", null, {
						hk: "4BtQGv"
					}),
					headerText: o.fbt._("No Tournaments Created", null, {
						hk: "40U1Vo"
					}),
					modalText: a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", null, o.fbt._("Hello, approved user! In order to create Predictions, you must first ask the Mods to start a Tournament.", null, {
						hk: "uGQT6"
					})), a.a.createElement("br", null), a.a.createElement("p", null, o.fbt._("{tip} Approved users have the ability to create and resolve Predictions, but only Mods can create and end Tournaments.", [o.fbt._param("tip", a.a.createElement("span", {
						className: _.a.tip
					}, "TIP:"))], {
						hk: "4b17d8"
					}))),
					hideCancelButton: !0
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-StartTournamentLimitationModal.eca7ee58f8363f0eebf3.js.map