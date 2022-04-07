// https://www.redditstatic.com/desktop2x/ProfileIdCardUnblockConfirmationModal.88345eaec863def589c8.js
// Retrieved at 4/7/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileIdCardUnblockConfirmationModal"], {
		"./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n);
			var l = t("./src/higherOrderComponents/asModal/index.tsx"),
				o = t("./node_modules/react/index.js"),
				a = t.n(o),
				r = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = t("./src/reddit/controls/TextButton/index.tsx"),
				c = t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			n.default = Object(l.a)(e => {
				let {
					onClose: n,
					onConfirm: t,
					username: l
				} = e;
				return a.a.createElement(r.e, null, a.a.createElement(r.i, null, a.a.createElement(c.a, null, a.a.createElement(r.q, null, d._("Unblock u/{username}?", [d._param("username", l)], {
					hk: "dPJbU"
				})), a.a.createElement(i.a, {
					onClick: n
				}, a.a.createElement(r.b, null)))), a.a.createElement(r.l, null, a.a.createElement(r.p, null, d._("They won’t be notified, but they’ll be able to message you, follow you, and you’ll start seeing notifications from them. You won’t be able to block them again for 24 hours.", null, {
					hk: "3hU2i9"
				}))), a.a.createElement(r.g, null, a.a.createElement(r.a, {
					onClick: n
				}, d._("Cancel", null, {
					hk: "4wilN2"
				})), a.a.createElement(r.r, {
					onClick: () => t(l)
				}, d._("Unblock", null, {
					hk: "2Ru4Lt"
				}))))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ProfileIdCardUnblockConfirmationModal.88345eaec863def589c8.js.map