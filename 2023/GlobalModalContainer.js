// https://www.redditstatic.com/desktop2x/GlobalModalContainer.1e2c0435b4faf9b8d4d3.js
// Retrieved at 6/6/2023, 10:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GlobalModalContainer"], {
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
			var o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/ConfirmModal/index.m.less"),
				r = n.n(c),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(s.a)(e => a.a.createElement("div", {
				className: r.a.container
			}, a.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: r.a.close
			}, a.a.createElement(i.b, null)), a.a.createElement(i.i, null, a.a.createElement("h2", {
				className: r.a.headerText
			}, e.headerText)), a.a.createElement(i.l, null, e.message && a.a.createElement("p", {
				className: r.a.text
			}, e.message), e.children && a.a.createElement("div", {
				className: r.a.text
			}, e.children), a.a.createElement("div", {
				className: r.a.buttonWrapper
			}, e.cancelText && a.a.createElement(l.o, {
				className: r.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), a.a.createElement(l.l, {
				className: r.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				l = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/components/ConfirmModal/index.tsx");
			const d = {
					closeModal: r.f
				},
				m = Object(l.b)(null, d);
			t.default = m(e => {
				let {
					closeModal: t
				} = e;
				return s.a.createElement(i.a, {
					onCancel: t,
					onAccept: t,
					acceptText: o.fbt._("Ok, I got it", null, {
						hk: "3rQKHA"
					}),
					headerText: o.fbt._("You've reached your pinning limit.", null, {
						hk: "wfMMg"
					}),
					message: o.fbt._({
						"*": "You can only pin {number} posts to the top of your profile. To pin something new, please unpin a post first.",
						_1: "You can only pin 1 post to the top of your profile. To pin something new, please unpin a post first."
					}, [o.fbt._plural(c.ib, "number")], {
						hk: "3OxzcA"
					})
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GlobalModalContainer.1e2c0435b4faf9b8d4d3.js.map