// https://www.redditstatic.com/desktop2x/RpanOnboardingModal.de5b98bb1be10c896082.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RpanOnboardingModal"], {
		"./src/reddit/components/ConfirmModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3DhQ2s_h1XCiwltypHmlbp",
				close: "_2oxgXPm-tiPAEPsJoUw-ZD",
				headerText: "_2sDCzF6zlpNJ5cbVDRCPOS",
				text: "_3eWjwYvkDvPzyq4FlubrF9",
				buttonWrapper: "_6ZHRZ8Epefe887d7LL-q6",
				primaryButton: "Ch-0dFLxLOtcc6xCyQvsk",
				secondaryButton: "bgwHoiDoSwFVZKRTLRQMF"
			}
		},
		"./src/reddit/components/ConfirmModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/components/ConfirmModal/index.m.less"),
				l = n.n(r),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(o.a)(e => a.a.createElement("div", {
				className: l.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: l.a.close
			}, a.a.createElement(d.b, null)), a.a.createElement(d.h, null, a.a.createElement("h2", {
				className: l.a.headerText
			}, e.headerText)), a.a.createElement(d.k, null, e.message && a.a.createElement("p", {
				className: l.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: l.a.text
			}, e.children), a.a.createElement("div", {
				className: l.a.buttonWrapper
			}, e.cancelText && a.a.createElement(c.i, {
				className: l.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(c.f, {
				className: l.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				l = n("./src/reddit/components/ConfirmModal/index.tsx");
			const d = Object(c.b)(null, e => ({
				onClose: () => e(Object(r.b)({
					shouldShowOnboardingModal: !1
				}))
			}));
			t.default = d(e => {
				let {
					onClose: t
				} = e;
				return o.a.createElement(l.a, {
					headerText: s.fbt._("Live from the internet, this is RPAN", null, {
						hk: "1wso9i"
					}),
					message: s.fbt._("RPAN is a series of video broadcasts created by Redditors", null, {
						hk: "2cSSJC"
					}),
					acceptText: s.fbt._("Dismiss", null, {
						hk: "4ADx7h"
					}),
					onAccept: t,
					onCancel: t,
					withOverlay: !0
				})
			})
		}
	}
]);
//# sourceMappingURL=RpanOnboardingModal.de5b98bb1be10c896082.js.map