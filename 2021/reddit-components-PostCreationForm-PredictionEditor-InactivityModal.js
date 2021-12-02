// https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-InactivityModal.81a1d0aec6a05b7c2c7c.js
// Retrieved at 12/2/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PostCreationForm-PredictionEditor-InactivityModal"], {
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
				r = n.n(a),
				d = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = n.n(c);
			const u = e => e.preventDefault();
			t.a = Object(d.a)(e => r.a.createElement(l.e, null, r.a.createElement(l.i, null, r.a.createElement(s.a, null, r.a.createElement(l.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(i.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(l.b, null)))), r.a.createElement(l.l, null, r.a.createElement(l.p, {
				className: m.a.ModalText
			}, e.modalText)), r.a.createElement(l.g, null, !e.hideCancelButton && r.a.createElement(l.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(l.u, {
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
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				r = n.n(a),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				s = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				C = n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less"),
				p = n.n(C);

			function _(e) {
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("h3", null, o.fbt._("The {tournament name} is in progress but hasn’t been updated in 10 days. Do you want to end this tournament and start a new one?", [o.fbt._param("tournament name", r.a.createElement("span", {
					className: p.a.tournament
				}, e, " Tournament"))], {
					hk: "1kPnhy"
				})), r.a.createElement("br", null), r.a.createElement("p", null, o.fbt._("{tip} Ending the current tournament will announce the winners and let redditors who lost their tokens play again!", [o.fbt._param("tip", r.a.createElement("span", {
					className: p.a.tip
				}, "TIP:"))], {
					hk: "1H5AGa"
				})))
			}
			t.default = () => {
				const e = Object(d.d)(),
					t = Object(d.e)(b.c) || "",
					n = Object(d.e)(e => Object(x.b)(e, {
						subredditId: t
					}));
				if (!n) return null;
				const a = () => e(Object(i.g)(m.a.ECON_PREDICTIONS_INACTIVITY_MODAL));
				return r.a.createElement(c.a, {
					withOverlay: !0,
					onConfirm: async () => {
						try {
							await e(Object(l.o)(n.tournamentId)), e(Object(s.f)({
								kind: u.b.SuccessMod,
								text: o.fbt._("Tournament ended.", null, {
									hk: "3w4Awn"
								})
							}))
						} catch (t) {
							e(Object(s.f)({
								kind: u.b.Error,
								text: o.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						a()
					},
					onCancel: a,
					onClose: a,
					actionText: o.fbt._("Start A New Tournament", null, {
						hk: "31Hdu7"
					}),
					cancelActionText: o.fbt._("Add To Current Tournament", null, {
						hk: "3jBGzF"
					}),
					headerText: o.fbt._("Start a new Tournament?", null, {
						hk: "4xxGQ4"
					}),
					modalText: _(null == n ? void 0 : n.name)
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-InactivityModal.81a1d0aec6a05b7c2c7c.js.map