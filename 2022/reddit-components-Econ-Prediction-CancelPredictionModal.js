// https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.6fabccd00a7f4c345732.js
// Retrieved at 6/29/2022, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Econ-Prediction-CancelPredictionModal"], {
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CancelPredictionModal", (function() {
				return _
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/economics/predictions/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				s = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/selectors/posts.ts");
			const _ = () => {
				const e = Object(d.d)(),
					t = Object(d.e)(u.S);
				if (!t) return null;
				const {
					totalVoteCount: n
				} = t.pollData || {}, i = () => e(Object(l.g)(s.a.ECON_PREDICTIONS_CANCEL_PREDICTION));
				return c.a.createElement(a.a, {
					withOverlay: !0,
					onConfirm: () => {
						i(), e(Object(r.c)(t.postId))
					},
					onCancel: i,
					onClose: i,
					onOverlayClick: i,
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
			t.default = _
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Econ-Prediction-CancelPredictionModal.6fabccd00a7f4c345732.js.map