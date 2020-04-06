// https://www.redditstatic.com/desktop2x/GlobalModalContainer.4753eb57d3f490f01bae.js
// Retrieved at 4/6/2020, 12:00:05 PM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/ConfirmModal/index.m.less"),
				r = n.n(l),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx");
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: r.a.container
			}, o.a.createElement("button", {
				onClick: () => e.onClose ? e.onClose() : e.onCancel(),
				className: r.a.close
			}, o.a.createElement(i.b, null)), o.a.createElement(i.g, null, o.a.createElement("h2", {
				className: r.a.headerText
			}, e.headerText)), o.a.createElement(i.j, null, e.message && o.a.createElement("p", {
				className: r.a.text
			}, e.message), e.children && o.a.createElement("div", {
				className: r.a.text
			}, e.children), o.a.createElement("div", {
				className: r.a.buttonWrapper
			}, e.cancelText && o.a.createElement(c.i, {
				className: r.a.secondaryButton,
				onClick: e.onCancel
			}, e.cancelText), o.a.createElement(c.f, {
				className: r.a.primaryButton,
				onClick: e.onAccept
			}, e.acceptText)))))
		},
		"./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/components/ConfirmModal/index.tsx"),
				i = n("./src/reddit/i18n/utils.ts");
			const d = {
					closeModal: l.f
				},
				m = Object(s.b)(null, d);
			t.default = m(e => {
				let {
					closeModal: t
				} = e;
				return o.a.createElement(r.a, {
					onCancel: t,
					onAccept: t,
					acceptText: Object(i.c)("Ok, I got it"),
					headerText: Object(i.c)("You've reached your pinning limit."),
					message: Object(i.c)("You can only pin ".concat(Object(i.b)("maximumPinnedPosts", c.U), " posts to the top of your profile. ") + "To pin something new, please unpin a post first.  ")
				})
			})
		}
	}
]);
//# sourceMappingURL=GlobalModalContainer.4753eb57d3f490f01bae.js.map