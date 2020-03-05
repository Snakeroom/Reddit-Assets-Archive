// https://www.redditstatic.com/desktop2x/RpanOnboardingModal.86c3b2d832773ae816fe.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
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
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/components/ConfirmModal/index.m.less"),
				d = n.n(r),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(c.a)(e => a.a.createElement("div", {
				className: d.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: d.a.close
			}, a.a.createElement(l.b, null)), a.a.createElement(l.g, null, a.a.createElement("h2", {
				className: d.a.headerText
			}, e.headerText)), a.a.createElement(l.j, null, e.message && a.a.createElement("p", {
				className: d.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: d.a.text
			}, e.children), a.a.createElement("div", {
				className: d.a.buttonWrapper
			}, e.cancelText && a.a.createElement(o.i, {
				className: d.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(o.f, {
				className: d.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				r = n("./src/reddit/components/ConfirmModal/index.tsx"),
				d = n("./src/reddit/i18n/utils.ts");
			const l = Object(c.b)(null, e => ({
				onClose: () => e(Object(o.b)({
					shouldShowOnboardingModal: !1
				}))
			}));
			t.default = l(e => {
				let {
					onClose: t
				} = e;
				return a.a.createElement(r.a, {
					headerText: Object(d.c)("Live from the internet, this is RPAN"),
					message: Object(d.c)("RPAN is a series of video broadcasts created by Redditors"),
					acceptText: Object(d.c)("Dismiss"),
					onAccept: t,
					onCancel: t,
					withOverlay: !0
				})
			})
		}
	}
]);
//# sourceMappingURL=RpanOnboardingModal.86c3b2d832773ae816fe.js.map