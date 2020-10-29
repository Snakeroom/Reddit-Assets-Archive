// https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.93fa1bc26cde1fbc374f.js
// Retrieved at 10/29/2020, 6:50:06 PM by Reddit Dataminer v1.0.0
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				r = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const s = e => e.preventDefault();
			var m = Object(c.a)(e => {
					const t = !!e.cancelActionText,
						n = !(!e.actionText || !e.onConfirm);
					return o.a.createElement(r.d, {
						style: e.style
					}, o.a.createElement(r.h, null, o.a.createElement(d.a, null, o.a.createElement(r.p, null, e.headerText), !e.hideCancel && o.a.createElement(i.a, {
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, o.a.createElement(r.b, null)))), o.a.createElement(r.k, null, e.modalBody()), (t || n) && o.a.createElement(r.f, null, t && o.a.createElement(r.a, {
						"data-redditstyle": !0,
						onMouseDown: s,
						onClick: () => {
							e.trackCancel && e.trackCancel(), e.toggleModal()
						}
					}, e.cancelActionText), n && o.a.createElement(r.t, {
						"data-redditstyle": !0,
						onMouseDown: s,
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
				Object(a.useEffect)(() => {
					n(Object(u.c)())
				}, [n]);
				return o.a.createElement(m, {
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
					modalBody: () => o.a.createElement("div", {
						className: E.a.modalBody
					}, o.a.createElement("div", {
						className: E.a.helpUsHelpYou
					}, l.fbt._("Sorry, this feature doesn't exist yet, but help us help you by answering this question:", null, {
						hk: "4Bc36M"
					})), o.a.createElement("div", null, l.fbt._("Do you have an existing set of email addresses for folks you'd like to bring to your Reddit community?", null, {
						hk: "1QR3Y7"
					}))),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EmailInvitePaintedDoor.93fa1bc26cde1fbc374f.js.map