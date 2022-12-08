// https://www.redditstatic.com/desktop2x/QrCodeActions.f97ee6579415573a225b.js
// Retrieved at 12/8/2022, 1:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["QrCodeActions"], {
		"./src/reddit/actions/qrCode/index.ts": function(t, s, c) {
			"use strict";
			c.r(s);
			var d = c("./src/reddit/actions/modal.ts"),
				e = c("./src/reddit/constants/modals.ts"),
				r = c("./src/reddit/selectors/activeModal.ts"),
				_ = c("./src/reddit/selectors/getAppQrCode.ts");
			s.default = () => async (t, s) => {
				const c = s(),
					o = Object(_.a)(c),
					i = Object(r.c)(e.a.NSFW_BLOCKING_MODAL_V2)(c);
				o && !i && t(Object(d.h)(e.a.QR_CODE_MODAL))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/QrCodeActions.f97ee6579415573a225b.js.map