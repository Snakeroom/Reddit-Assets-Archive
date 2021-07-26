// https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.84c7e6422eb6cc99a176.js
// Retrieved at 7/26/2021, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EmailInvitePaintedDoor"], {
		"./src/reddit/components/EmailInvitePaintedDoor/index.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_142QFJxYHOiRrg13Qzj7Xf",
				helpUsHelpYou: "Pt3xV6KXppHD5EtLUNz4g"
			}
		},
		"./src/reddit/components/EmailInvitePaintedDoor/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "EmailInvitePaintedDoor", (function() {
				return C
			}));
			var l = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				s = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const d = e => e.preventDefault();
			var m = Object(c.a)(e => {
					const t = !!e.cancelActionText,
						n = !(!e.actionText || !e.onConfirm);
					return a.a.createElement(r.d, {
						style: e.style
					}, a.a.createElement(r.h, null, a.a.createElement(s.a, null, a.a.createElement(r.p, null, e.headerText), !e.hideCancel && a.a.createElement(i.a, {
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, a.a.createElement(r.b, null)))), a.a.createElement(r.k, null, e.modalBody), (t || n) && a.a.createElement(r.f, null, t && a.a.createElement(r.a, {
						"data-redditstyle": !0,
						onMouseDown: d,
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, e.cancelActionText), n && a.a.createElement(r.t, {
						"data-redditstyle": !0,
						onMouseDown: d,
						onClick: t => {
							e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
						}
					}, e.actionText)))
				}),
				u = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				x = n("./src/reddit/components/EmailInvitePaintedDoor/index.m.less"),
				E = n.n(x);
			const C = e => {
				const {
					onClose: t,
					sendEvent: n
				} = e;
				Object(o.useEffect)(() => {
					n(Object(u.c)())
				}, [n]);
				const c = a.a.createElement("div", {
					className: E.a.modalBody
				}, a.a.createElement("div", {
					className: E.a.helpUsHelpYou
				}, l.fbt._("Sorry, this feature doesn't exist yet, but help us help you by answering this question:", null, {
					hk: "4Bc36M"
				})), a.a.createElement("div", null, l.fbt._("Do you have an existing set of email addresses for folks you'd like to bring to your Reddit community?", null, {
					hk: "1QR3Y7"
				})));
				return a.a.createElement(m, {
					actionText: l.fbt._("Yes", null, {
						hk: "KC59r"
					}),
					cancelActionText: l.fbt._("No", null, {
						hk: "em0qd"
					}),
					headerText: l.fbt._("Well this is embarassing...", null, {
						hk: "1QnopR"
					}),
					hideCancel: !0,
					modalBody: c,
					onConfirm: t,
					toggleModal: t,
					trackCancel: () => n(Object(u.b)("no")),
					trackClick: () => n(Object(u.b)("yes")),
					onOverlayClick: t,
					withOverlay: !0
				})
			};
			t.default = C
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.84c7e6422eb6cc99a176.js.map