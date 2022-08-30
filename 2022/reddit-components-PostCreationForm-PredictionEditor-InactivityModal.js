// https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-InactivityModal.b473890fdf8ae5c6a768.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-PostCreationForm-PredictionEditor-InactivityModal"], {
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less": function(t, e, n) {
			t.exports = {
				tournament: "_3ZYK0pm2T2bF8Rxu2aYyZt",
				tip: "_1qlJd_5bgnJSvInXXA_rQy"
			}
		},
		"./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				d = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/economics/predictions/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				b = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/components/PostCreationForm/PredictionEditor/InactivityModal/index.m.less"),
				f = n.n(p);

			function x(t) {
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", null, a.fbt._("The {tournament name} is in progress but hasn’t been updated in 10 days. Do you want to end this tournament and start a new one?", [a.fbt._param("tournament name", o.a.createElement("span", {
					className: f.a.tournament
				}, t, " Tournament"))], {
					hk: "1kPnhy"
				})), o.a.createElement("br", null), o.a.createElement("p", null, a.fbt._("{tip} Ending the current tournament will announce the winners and let redditors who lost their tokens play again!", [a.fbt._param("tip", o.a.createElement("span", {
					className: f.a.tip
				}, "TIP:"))], {
					hk: "1H5AGa"
				})))
			}
			e.default = () => {
				const t = Object(d.d)(),
					e = Object(d.e)(b.c) || "",
					n = Object(d.e)(t => Object(_.b)(t, {
						subredditId: e
					}));
				if (!n) return null;
				const r = () => t(Object(s.g)(m.a.ECON_PREDICTIONS_INACTIVITY_MODAL));
				return o.a.createElement(l.a, {
					withOverlay: !0,
					onConfirm: async () => {
						try {
							const e = n.name;
							await t(Object(i.p)(n.tournamentId)), t(Object(c.f)({
								kind: u.b.SuccessMod,
								text: a.fbt._("{Ended tournament name} ended.", [a.fbt._param("Ended tournament name", e)], {
									hk: "1CTweG"
								})
							}))
						} catch (e) {
							t(Object(c.f)({
								kind: u.b.Error,
								text: a.fbt._("Failed to end tournament, please try again later", null, {
									hk: "2huCGU"
								})
							}))
						}
						r()
					},
					onCancel: r,
					onClose: r,
					actionText: a.fbt._("Start A New Tournament", null, {
						hk: "31Hdu7"
					}),
					cancelActionText: a.fbt._("Add To Current Tournament", null, {
						hk: "3jBGzF"
					}),
					headerText: a.fbt._("Start a new Tournament?", null, {
						hk: "4xxGQ4"
					}),
					modalText: x(null == n ? void 0 : n.name)
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-PostCreationForm-PredictionEditor-InactivityModal.b473890fdf8ae5c6a768.js.map