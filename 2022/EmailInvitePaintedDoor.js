// https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.fbaa9b9e6543d141e412.js
// Retrieved at 11/14/2022, 7:00:06 PM by Reddit Dataminer v1.0.0
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
				return d
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./node_modules/react/index.js"),
				a = n.n(l),
				c = n("./src/reddit/components/ModalStyledComponents/Modal.tsx"),
				r = n("./src/reddit/helpers/trackers/emailInvite.ts"),
				i = n("./src/reddit/components/EmailInvitePaintedDoor/index.m.less"),
				s = n.n(i);
			const d = e => {
				const {
					onClose: t,
					sendEvent: n
				} = e;
				Object(l.useEffect)(() => {
					n(Object(r.c)())
				}, [n]);
				const i = a.a.createElement("div", {
					className: s.a.modalBody
				}, a.a.createElement("div", {
					className: s.a.helpUsHelpYou
				}, o.fbt._("Sorry, this feature doesn't exist yet, but help us help you by answering this question:", null, {
					hk: "4Bc36M"
				})), a.a.createElement("div", null, o.fbt._("Do you have an existing set of email addresses for folks you'd like to bring to your Reddit community?", null, {
					hk: "1QR3Y7"
				})));
				return a.a.createElement(c.a, {
					actionText: o.fbt._("Yes", null, {
						hk: "KC59r"
					}),
					cancelActionText: o.fbt._("No", null, {
						hk: "em0qd"
					}),
					headerText: o.fbt._("Well this is embarassing...", null, {
						hk: "1QnopR"
					}),
					hideCancel: !0,
					modalBody: i,
					onConfirm: t,
					toggleModal: t,
					trackCancel: () => n(Object(r.b)("no")),
					trackClick: () => n(Object(r.b)("yes")),
					onOverlayClick: t,
					withOverlay: !0
				})
			};
			t.default = d
		},
		"./src/reddit/components/ModalStyledComponents/Modal.tsx": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react/index.js"),
				l = n.n(o),
				a = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				r = n("./src/reddit/controls/TextButton/index.tsx"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const s = e => e.preventDefault();
			t.a = Object(a.a)(e => {
				const t = !!e.cancelActionText,
					n = !(!e.actionText || !e.onConfirm);
				return l.a.createElement(c.e, {
					style: e.style
				}, l.a.createElement(c.i, null, l.a.createElement(i.a, null, l.a.createElement(c.q, null, e.headerText), !e.hideCancel && l.a.createElement(r.a, {
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, l.a.createElement(c.b, null)))), l.a.createElement(c.l, null, e.modalBody), (t || n) && l.a.createElement(c.g, null, t && l.a.createElement(c.a, {
					"data-redditstyle": !0,
					onMouseDown: s,
					onClick: () => {
						e.trackCancel && e.trackCancel(), e.toggleModal()
					}
				}, e.cancelActionText), n && l.a.createElement(c.u, {
					"data-redditstyle": !0,
					onMouseDown: s,
					onClick: t => {
						e.onConfirm && e.onConfirm(), e.toggleModal(), e.trackClick && e.trackClick()
					}
				}, e.actionText)))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.fbaa9b9e6543d141e412.js.map